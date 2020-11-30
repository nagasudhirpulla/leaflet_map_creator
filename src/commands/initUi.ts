import { initShapeDataEditor } from '../utils/shapeDataEditor/initShapeDataEditor';
import { exportMapData } from '../utils/map/exportMapData';
import { mapDataExportBtnId_g, jsonEditorId_g, globalVars_g, mapDataDispDivId_g, initialMapCenter_g, initialMapZoom_g, updateShapeDataBtnId_g } from '../globalVars';
import { createMap } from '../utils/map/createMap';
import { enforceShapeEditorData } from './enforceShapeEditorData';
import { onShapeAdd } from '../eventHandlers/onShapeAdd';

export const initUi = () => {
    globalVars_g.map = createMap(initialMapCenter_g, initialMapZoom_g)

    globalVars_g.map.on('layeradd', onShapeAdd)

    globalVars_g.shapeDataEditor = initShapeDataEditor(jsonEditorId_g)

    document.getElementById(mapDataExportBtnId_g).onclick = () => {
        exportMapData(globalVars_g.map, mapDataDispDivId_g, globalVars_g.shapesData)
    }

    document.getElementById(updateShapeDataBtnId_g).onclick = () => {
        enforceShapeEditorData()
    }
}