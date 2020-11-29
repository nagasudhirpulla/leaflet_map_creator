import { settings_g } from "../../globalVars";
import { setLayerData } from "../setLayerData";
import { onShapeClick } from "./onShapeClick";
import { onTextClick } from "./onTextClick";
declare var L;

export const onLayerAdd = function (e) {
    if (e.layer instanceof L.Path) e.layer.on('click', L.DomEvent.stop).on('click', onShapeClick, e.layer)
    if (e.layer instanceof L.Path) e.layer.on('dblclick', L.DomEvent.stop).on('dblclick', e.layer.toggleEdit)
    if (e.layer instanceof L.Path) {
        var layerType = "NA";
        if (e.layer instanceof L.Circle) {
            layerType = "circle"
            e.layer.setStyle({
                stroke: false,
                color: settings_g.circleClr,
                fillOpacity: 1
            })
        } else if (e.layer instanceof L.Polyline) {
            layerType = "polyline"
            e.layer.setStyle({
                color: settings_g.lineClr
            });
        }
        setLayerData(e.layer._leaflet_id, {
            meta: { name: "NA" },
            type: layerType
        })
    } else if (e.layer instanceof L.Marker) {
        if (e.layer._icon instanceof HTMLDivElement) {
            e.layer.on('click', L.DomEvent.stop).on('click', onTextClick, e.layer)
            layerType = "text"
            var shapeName = e.layer._icon.innerText
            setLayerData(e.layer._leaflet_id, {
                meta: { name: shapeName },
                type: layerType
            })
        }
    }
}