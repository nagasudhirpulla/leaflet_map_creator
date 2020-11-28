var layersMeta_g = {};
var activeLayerId_g = -1;
var settings_g = {
    circleClr: "red",
    lineClr: "blue"
}
window.onload = function() {
    wireUpControls();
};

function wireUpControls() {
    document.getElementById("exportDataBtn").onclick = exportMapData;
}

function exportMapData() {
    var mapData = { lines: [], circles: [] }
    var layerKeys = Object.keys(layersMeta_g);
    for (var i = 0; i < layerKeys.length; i++) {
        var lKey = layerKeys[i]
        if (!map._layers.hasOwnProperty(lKey)) {
            // if key is not present in map, discard this key
            continue;
        }
        var layerDataObj = layersMeta_g[lKey];
        layerDataObj["id"] = lKey;
        var layer = map._layers[lKey];
        if (layersMeta_g[lKey].type == 'polyline') {
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
        if (layersMeta_g[lKey].type == 'circle') {
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
    map._layers[activeLayerId_g].setStyle({ color: 'orange' });
    console.log("active layer id = " + layerId);
}

function deActivateLayer(layerId) {
    var normalClr = "black";
    if (layersMeta_g[layerId].type == "polyline") {
        normalClr = settings_g.lineClr;
    } else if (layersMeta_g[layerId].type == "circle") {
        normalClr = settings_g.circleClr;
    }
    map._layers[layerId].setStyle({ color: normalClr });
}