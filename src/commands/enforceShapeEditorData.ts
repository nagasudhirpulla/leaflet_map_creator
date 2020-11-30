import { globalVars_g } from '../globalVars';
import { getShapeEditorData } from '../queries/getShapeEditorData';

export const enforceShapeEditorData = () => {
    const newShapeMeta = getShapeEditorData()
    updateActiveShapeMeta(newShapeMeta)
}

const updateActiveShapeMeta = (newShapeMeta: any) => {
    globalVars_g.shapesData[globalVars_g.activeShapeId].meta = JSON.parse(JSON.stringify(newShapeMeta))
    // set the text if if the shape is text
    if (globalVars_g.shapesData[globalVars_g.activeShapeId].type == "text") {
        globalVars_g.map._layers[globalVars_g.activeShapeId]._icon.innerText = newShapeMeta.name
    }
}