import { globalVars_g } from "../../globalVars";
export const removeMapLayer = (lyr) => {
    globalVars_g.map.removeLayer(lyr)
}