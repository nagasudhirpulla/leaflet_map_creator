import { globalVars_g } from "../globalVars"

export const setLayerData = (layerId: number, dataObj: any) => {
    globalVars_g.layersData_g[layerId] = dataObj
}