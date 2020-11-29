import { globalVars_g, settings_g } from '../globalVars';
import { Path } from 'leaflet';

export const deActivateLayer = (layerId: number) => {
    let normalClr = "black";
    if (globalVars_g.layersData_g[layerId].type == "polyline") {
        normalClr = settings_g.lineClr;
    } else if (globalVars_g.layersData_g[layerId].type == "circle") {
        normalClr = settings_g.circleClr;
    }
    if (globalVars_g.map._layer[layerId] instanceof Path) {
        globalVars_g.map._layers[layerId].setStyle({ color: normalClr });
    }
}