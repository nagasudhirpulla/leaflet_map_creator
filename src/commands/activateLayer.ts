// TODO complete this
import { globalVars_g } from '../globalVars';
import { setMetaLayerEditorData } from './metaEditor/setMetaLayerEditorData';
import { Path } from 'leaflet';
import { getLayerData } from '../queries/getLayerData';

export const activateLayer = (map: any, layerId: number) => {
    globalVars_g.activeLayerId_g = layerId
    if (map._layers[globalVars_g.activeLayerId_g] instanceof Path) {
        map._layers[globalVars_g.activeLayerId_g].setStyle({ color: 'orange' })
    }
    setMetaLayerEditorData(getLayerData(layerId).meta)
    console.log("active layer id = " + layerId)
}