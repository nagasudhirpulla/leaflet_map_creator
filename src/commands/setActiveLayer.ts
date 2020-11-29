declare var L;
import { globalVars_g, settings_g } from '../globalVars';
import { getActiveLayerId } from '../queries/getActiveLayerId';
import { getLayerData } from '../queries/getLayerData';
import { setLayerEditorData } from './metaEditor/setMetaLayerEditorData';

export const setActiveLayer = (layerId: number) => {
    const activeLyrId = getActiveLayerId()
    if (activeLyrId != -1) {
        deActivateLayer(activeLyrId);
    }
    activateLayer(globalVars_g.map, layerId);
}

const activateLayer = (map: any, layerId: number) => {
    globalVars_g.activeLayerId_g = layerId
    if (map._layers[globalVars_g.activeLayerId_g] instanceof L.Path) {
        map._layers[globalVars_g.activeLayerId_g].setStyle({ color: 'orange' })
    }
    setLayerEditorData(getLayerData(layerId).meta)
    console.log("active layer id = " + layerId)
}

const deActivateLayer = (layerId: number) => {
    let normalClr = "black";
    const layersData = globalVars_g.layersData_g
    const map = globalVars_g.map
    if (layersData[layerId].type == "polyline") {
        normalClr = settings_g.lineClr;
    } else if (layersData[layerId].type == "circle") {
        normalClr = settings_g.circleClr;
    }
    if (map._layers[layerId] instanceof L.Path) {
        map._layers[layerId].setStyle({ color: normalClr });
    }
}