export const exportMapData = (map: any, mapDataDispDivId: string, layersData: object) => {
    let mapData = { lines: [], circles: [] }
    const layerKeys = Object.keys(layersData)
    for (const lKey in layerKeys) {
        if (!map._layers.hasOwnProperty(lKey)) {
            // if key is not present in map, discard this key
            continue
        }
        var layerDataObj = JSON.parse(JSON.stringify(layersData[lKey]))
        layerDataObj["id"] = lKey
        var layer = map._layers[lKey]
        if (layersData[lKey].type == 'polyline') {
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
        if (layersData[lKey].type == 'circle') {
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
    }
    document.getElementById(mapDataDispDivId).textContent = JSON.stringify(mapData, undefined, 2)
}