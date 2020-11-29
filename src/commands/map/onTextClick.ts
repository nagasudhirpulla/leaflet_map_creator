import { deleteLayerData } from "../deleteLayerData";
import { setActiveLayer } from "../setActiveLayer";
import { removeMapLayer } from "./removeMapLayer";

export const onTextClick = function (e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        deleteLayerData(e.target._leaflet_id)
        removeMapLayer(e.target)
    } else {
        // layer is clicked, make this layer as the active layer
        setActiveLayer(e.target._leaflet_id)
    }
};