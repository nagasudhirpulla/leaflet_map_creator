import { globalVars_g } from '../globalVars';

export const getLayerData = (layerId: number) => {
    return globalVars_g.layersData_g[layerId]
}