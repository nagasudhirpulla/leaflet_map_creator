declare var L;
export const getDefaultShapeData = (layer) => {
    let defaultShpData = null
    if (layer instanceof L.Path) {
        var layerType = "NA";
        if (layer instanceof L.Circle) {
            layerType = "circle"
        } else if (layer instanceof L.Polyline) {
            layerType = "polyline"
        }
        defaultShpData = {
            meta: { name: "NA" },
            type: layerType
        }
    } else if (layer instanceof L.Marker) {
        if (layer._icon instanceof HTMLDivElement) {
            layerType = "text"
            var shapeName = layer._icon.innerText
            defaultShpData = {
                meta: { name: shapeName },
                type: layerType
            }
        }
    }
    return defaultShpData
}