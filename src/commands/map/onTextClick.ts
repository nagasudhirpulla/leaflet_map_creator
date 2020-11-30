import { deleteShapeData } from "../../utils/shapeData/deleteShapeData";
import { changeActiveShape } from "../changeActiveShape";
import { removeMapLayer } from "../../utils/map/removeMapLayer";
import { globalVars_g } from "../../globalVars";

export const onTextClick = function (e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        deleteShapeData(globalVars_g.shapesData, e.target._leaflet_id)
        removeMapLayer(globalVars_g.map, e.target)
    } else {
        // layer is clicked, make this layer as the active layer
        changeActiveShape(e.target._leaflet_id)
    }
};