export const exportMapData = (map: any, mapDataDispDivId: string, shapesData: object) => {
    let mapData = { lines: [], circles: [], labels: [] }
    const layerKeys = Object.keys(shapesData)
    for (const lKey of layerKeys) {
        if (!map._layers.hasOwnProperty(lKey)) {
            // if key is not present in map, discard this key
            continue
        }
        var layerDataObj = JSON.parse(JSON.stringify(shapesData[lKey]))
        layerDataObj["id"] = lKey
        var layer = map._layers[lKey]
        if (shapesData[lKey].type == 'polyline') {
            const latLngs = layer._latlngs.map(function (latLng) {
                return [latLng.lat, latLng.lng]
            })
            if (latLngs.length == 0) {
                // if line has no latlongs, discard
                continue;
            }
            layerDataObj["latlngs"] = latLngs
            mapData.lines.push(layerDataObj)
        }
        else if (shapesData[lKey].type == 'circle') {
            const latLng = layer._latlng
            const radius = layer._radius
            if (radius == 0) {
                // if circle has no radius, discard
                continue;
            }
            layerDataObj["latlng"] = [latLng.lat, latLng.lng]
            layerDataObj["radius"] = radius
            mapData.circles.push(layerDataObj)
        }
        else if (shapesData[lKey].type == 'text') {
            const latLng = layer._latlng
            const name = layerDataObj.meta.name
            if (name == null || name == "") {
                //name not present, discard
                continue
            }
            layerDataObj["latlng"] = [latLng.lat, latLng.lng]
            mapData.labels.push(layerDataObj)
        }
    }
    document.getElementById(mapDataDispDivId).textContent = JSON.stringify(mapData, undefined, 2)
}