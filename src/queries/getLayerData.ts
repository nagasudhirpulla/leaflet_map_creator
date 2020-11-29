import { globalVars_g } from '../globalVars';

export const getLayerData = (layerId: number) => {
    return globalVars_g.layersData_g[layerId]
}

export const getActiveLayerData = () => {
    return globalVars_g.layersData_g[globalVars_g.activeLayerId_g]
}