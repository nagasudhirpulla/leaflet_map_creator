import { globalVars_g } from '../globalVars'
export const deleteShapeData = (layerId: number) => {
    delete globalVars_g.shapesData[layerId]
}