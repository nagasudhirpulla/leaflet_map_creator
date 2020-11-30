import { deleteShapeData } from "../deleteShapeData";
import { setActiveShape } from "../setActiveShape";
import { removeMapLayer } from "../../utils/map/removeMapLayer";
import { globalVars_g } from "../../globalVars";

export const onTextClick = function (e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        deleteShapeData(e.target._leaflet_id)
        removeMapLayer(globalVars_g.map, e.target)
    } else {
        // layer is clicked, make this layer as the active layer
        setActiveShape(e.target._leaflet_id)
    }
};