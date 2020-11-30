import { globalVars_g } from '../globalVars';

export const getShapeData = (layerId: number) => {
    return globalVars_g.shapesData[layerId]
}

export const getActiveShapeData = () => {
    return globalVars_g.shapesData[globalVars_g.activeShapeId]
}