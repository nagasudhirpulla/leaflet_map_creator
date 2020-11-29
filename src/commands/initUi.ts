import { initLayerMetaEditor } from './metaEditor/initLayerMetaEditor';
import { exportMapData } from './map/exportMapData';
import { mapDataExportBtnId_g, jsonEditorId_g, settings_g, globalVars_g, mapDataDispDivId_g, initialMapCenter_g, initialMapZoom_g, updateShapeDataBtnId_g } from '../globalVars';
import { createMap } from './map/createMap';
import { addMapButtons } from './map/addMapButtons';
declare var L;
import { enforceShapeEditorData } from './enforceShapeEditorData';
import { onLayerAdd } from './map/onLayerAdd';

export const initUi = () => {
    globalVars_g.map = createMap(initialMapCenter_g, initialMapZoom_g)

    addMapButtons(globalVars_g.map)

    globalVars_g.map.on('layeradd', onLayerAdd)

    globalVars_g.layerDataEditor_g = initLayerMetaEditor(jsonEditorId_g)

    document.getElementById(mapDataExportBtnId_g).onclick = () => {
        exportMapData(globalVars_g.map, mapDataDispDivId_g, globalVars_g.layersData_g)
    }

    document.getElementById(updateShapeDataBtnId_g).onclick = () => {
        enforceShapeEditorData()
    }
}