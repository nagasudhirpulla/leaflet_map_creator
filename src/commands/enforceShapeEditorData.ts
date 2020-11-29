import { globalVars_g } from '../globalVars';
import { getShapeEditorData } from '../queries/getShapeEditorData';

export const enforceShapeEditorData = () => {
    const newLayerMeta = getShapeEditorData()
    updateActiveLayerMeta(newLayerMeta)
}

const updateActiveLayerMeta = (newLayerMeta: any) => {
    globalVars_g.layersData_g[globalVars_g.activeLayerId_g].meta = JSON.parse(JSON.stringify(newLayerMeta))
    // set the text if if the layer is text
    if (globalVars_g.layersData_g[globalVars_g.activeLayerId_g].type == "text") {
        globalVars_g.map._layers[globalVars_g.activeLayerId_g]._icon.innerText = newLayerMeta.name
    }
}