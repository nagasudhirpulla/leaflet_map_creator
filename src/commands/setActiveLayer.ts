import JSONEditor from 'jsoneditor';
import { globalVars_g } from '../globalVars';
import { activateLayer } from './activateLayer';
import { deActivateLayer } from './deActivateLayer';

export const setActiveLayer = (map: any, layerId: number) => {
    if (globalVars_g.activeLayerId_g != -1) {
        deActivateLayer(globalVars_g.activeLayerId_g);
    }
    activateLayer(map, layerId);
}