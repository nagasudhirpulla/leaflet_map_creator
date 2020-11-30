export const deleteShapeData = (shapesData, layerId: number) => {
    delete shapesData[layerId]
}