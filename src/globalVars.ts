import JSONEditor from "jsoneditor";
export interface IColorSettings {
    circleClr: string,
    lineClr: string
}

export const globalVars_g = {
    shapesData: {},
    activeShapeId: -1,
    shapeDataEditor: null as JSONEditor,
    map: null
}

export const colorSettings_g: IColorSettings = {
    circleClr: "red",
    lineClr: "blue"
}

export const initialMapCenter_g = [19.064551590666486, 72.89548873901369]
export const initialMapZoom_g = 13
export const jsonEditorId_g: string = "jsoneditor"
export const mapDataExportBtnId_g: string = "mapDataExportDataBtn"
export const updateShapeDataBtnId_g: string = "updateShapeDataBtn"
export const mapDataDispDivId_g: string = "mapDataJson"