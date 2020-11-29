var layersData_g = {};
var activeLayerId_g = -1;
var settings_g = {
    circleClr: "red",
    lineClr: "blue"
};
var layerMetaEditor_g = null;

window.onload = function() {
    wireUpControls();
};

function wireUpControls() {
    initLayerMetaEditor();
    document.getElementById("mapDataExportDataBtn").onclick = exportMapData;
}

function initLayerMetaEditor() {
    // https://github.com/josdejong/jsoneditor/tree/master#use
    var container = document.getElementById("jsoneditor");
    var options = {};
    layerMetaEditor_g = new JSONEditor(container, options);
}

function setLayerMetaEditor(jObj) {
    layerMetaEditor_g.set(jObj);
}

function submitLayerMetaEditor() {
    var newLayerMeta = layerMetaEditor_g.get();
    layersData_g[activeLayerId_g].meta = JSON.parse(JSON.stringify(newLayerMeta));
    // set the text if if the layer is text
    if (layersData_g[activeLayerId_g].type == "text") {
        map._layers[activeLayerId_g]._icon.innerText = newLayerMeta.name;
    }
}

function exportMapData() {
    var mapData = { lines: [], circles: [] };
    var layerKeys = Object.keys(layersData_g);
    for (var i = 0; i < layerKeys.length; i++) {
        var lKey = layerKeys[i]
        if (!map._layers.hasOwnProperty(lKey)) {
            // if key is not present in map, discard this key
            continue;
        }
        var layerDataObj = JSON.parse(JSON.stringify(layersData_g[lKey]));
        layerDataObj["id"] = lKey;
        var layer = map._layers[lKey];
        if (layersData_g[lKey].type == 'polyline') {
            var latLngs = layer._latlngs.map(function(latLng) {
                return [latLng.lat, latLng.lng]
            });
            if (latLngs.length == 0) {
                // if line has no latlongs, discard
                continue;
            }
            layerDataObj["latlngs"] = latLngs;
            mapData.lines.push(layerDataObj);
        }
        if (layersData_g[lKey].type == 'circle') {
            var latLng = layer._latlng;
            var radius = layer._radius;
            if (radius == 0) {
                // if circle has no radius, discard
                continue;
            }
            layerDataObj["latlng"] = [latLng.lat, latLng.lng];
            layerDataObj["radius"] = radius;
            mapData.circles.push(layerDataObj);
        }
    }
    document.getElementById("mapDataJson").textContent = JSON.stringify(mapData, undefined, 2);
}

function setActiveLayer(layerId) {
    if (activeLayerId_g != -1) {
        deActivateLayer(activeLayerId_g);
    }
    activateLayer(layerId);
}

function activateLayer(layerId) {
    activeLayerId_g = layerId;
    if (map._layers[activeLayerId_g] instanceof L.Path) {
        map._layers[activeLayerId_g].setStyle({ color: 'orange' });
    }
    setLayerMetaEditor(layersData_g[layerId].meta);
    console.log("active layer id = " + layerId);
}

function deActivateLayer(layerId) {
    var normalClr = "black";
    if (layersData_g[layerId].type == "polyline") {
        normalClr = settings_g.lineClr;
    } else if (layersData_g[layerId].type == "circle") {
        normalClr = settings_g.circleClr;
    }
    if (map._layers[layerId] instanceof L.Path) {
        map._layers[layerId].setStyle({ color: normalClr });
    }
}