import { colorSettings_g, globalVars_g } from "../../globalVars";
import { getDefaultShapeData } from "../../utils/shapeData/getDefaultShapeData";
import { getDefaultShapeStyle } from "../../utils/shapeData/getDefaultShapeStyle";
import { setShapeData } from "../../utils/shapeData/setShapeData";
import { onShapeClick } from "./onShapeClick";
import { onTextClick } from "./onTextClick";
declare var L;

export const onShapeAdd = function (e) {
    if (e.layer instanceof L.Path) e.layer.on('click', L.DomEvent.stop).on('click', onShapeClick, e.layer)
    if (e.layer instanceof L.Path) e.layer.on('dblclick', L.DomEvent.stop).on('dblclick', e.layer.toggleEdit)
    const shpData = getDefaultShapeData(e.layer)
    if (e.layer instanceof L.Path) {
        const defShpStyle = getDefaultShapeStyle(e.layer, colorSettings_g)
        e.layer.setStyle(defShpStyle)
        setShapeData(globalVars_g.shapesData, e.layer._leaflet_id, shpData)
    } else if (e.layer instanceof L.Marker) {
        if (e.layer._icon instanceof HTMLDivElement) {
            e.layer.on('click', L.DomEvent.stop).on('click', onTextClick, e.layer)
            setShapeData(globalVars_g.shapesData, e.layer._leaflet_id, shpData)
        }
    }
}