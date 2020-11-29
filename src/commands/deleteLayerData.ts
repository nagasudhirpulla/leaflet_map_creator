import { globalVars_g } from '../globalVars'
export const deleteLayerData = (layerId: number) => {
    delete globalVars_g.layersData_g[layerId]
}