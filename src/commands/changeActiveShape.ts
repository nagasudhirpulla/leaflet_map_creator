declare var L;
import { globalVars_g, colorSettings_g } from '../globalVars';
import { getActiveShapeId } from '../queries/getActiveShapeId';
import { getShapeData } from '../queries/getLayerData';
import { setShapeEditorData } from '../utils/shapeDataEditor/setShapeEditorData';

export const changeActiveShape = (shapeId: number) => {
    const activeShapeId = getActiveShapeId()
    if (activeShapeId != -1) {
        deActivateShape(activeShapeId);
    }
    activateShape(globalVars_g.map, shapeId);
}

const activateShape = (map: any, shapeId: number) => {
    globalVars_g.activeShapeId = shapeId
    if (map._layers[globalVars_g.activeShapeId] instanceof L.Path) {
        map._layers[globalVars_g.activeShapeId].setStyle({ color: 'orange' })
    }
    setShapeEditorData(globalVars_g.shapeDataEditor, getShapeData(shapeId).meta)
    console.log("active layer id = " + shapeId)
}

const deActivateShape = (layerId: number) => {
    let normalClr = "black";
    const layersData = globalVars_g.shapesData
    const map = globalVars_g.map
    if (layersData[layerId].type == "polyline") {
        normalClr = colorSettings_g.lineClr;
    } else if (layersData[layerId].type == "circle") {
        normalClr = colorSettings_g.circleClr;
    }
    if (map._layers[layerId] instanceof L.Path) {
        map._layers[layerId].setStyle({ color: normalClr });
    }
}