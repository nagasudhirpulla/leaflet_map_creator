import { globalVars_g } from "../globalVars";

export const getMetaEditorData = ()=>{
    return globalVars_g.layerMetaEditor_g.get();
}