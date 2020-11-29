import JSONEditor from "jsoneditor";
import * as L from 'leaflet'
export const globalVars_g = {
    layersData_g: {},
    activeLayerId_g: -1,
    layerMetaEditor_g: null as JSONEditor,
    map: null
}

export const settings_g = {
    circleClr: "red",
    lineClr: "blue"
};
export const initMapCenter_g = [19.064551590666486, 72.89548873901369]
export const initMapZoom_g = 13
export const jsonEditorId_g: string = "jsoneditor"
export const mapDataExportBtnId_g: string = "mapDataExportDataBtn"
export const mapDataDispDivId_g: string = "mapDataJson"