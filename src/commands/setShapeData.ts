import { globalVars_g } from "../globalVars"

export const setShapeData = (layerId: number, dataObj: any) => {
    globalVars_g.shapesData[layerId] = dataObj
}