import { initLayerMetaEditor } from './metaEditor/initLayerMetaEditor';
import { exportMapData } from './map/exportMapData';
import { mapDataExportBtnId_g, jsonEditorId_g, globalVars_g, mapDataDispDivId_g, initMapCenter_g, initMapZoom_g } from '../globalVars';
import { createMap } from './map/createMap';
import { addMapButtons } from './map/addMapButtons';

export const initUi = () => {
    globalVars_g.map = createMap(initMapCenter_g, initMapZoom_g)
    addMapButtons(globalVars_g.map)
    initLayerMetaEditor(jsonEditorId_g)
    document.getElementById(mapDataExportBtnId_g).onclick = () => {
        exportMapData(globalVars_g.map, mapDataDispDivId_g, globalVars_g.layersData_g)
    }
}