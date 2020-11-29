import { globalVars_g } from "../globalVars";

export const getShapeEditorData = ()=>{
    return globalVars_g.layerDataEditor_g.get();
}