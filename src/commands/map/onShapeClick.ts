import { deleteLayerData } from "../deleteLayerData";
import { setActiveLayer } from "../setActiveLayer";

export const onShapeClick = function (e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        this.editor.deleteShapeAt(e.latlng)
        // https://gist.github.com/scottopolis/6e35cf0d53bae81e6161662e6374da04
        deleteLayerData(e.target._leaflet_id)
    } else {
        // layer is clicked, make this layer as the active layer
        setActiveLayer(e.target._leaflet_id)
    }
};