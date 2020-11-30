import { globalVars_g } from "../../globalVars";
import { deleteShapeData } from "../../utils/shapeData/deleteShapeData";
import { changeActiveShape } from "../changeActiveShape";

export const onShapeClick = function (e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        this.editor.deleteShapeAt(e.latlng)
        // https://gist.github.com/scottopolis/6e35cf0d53bae81e6161662e6374da04
        deleteShapeData(globalVars_g.shapesData, e.target._leaflet_id)
    } else {
        // layer is clicked, make this layer as the active layer
        changeActiveShape(e.target._leaflet_id)
    }
};