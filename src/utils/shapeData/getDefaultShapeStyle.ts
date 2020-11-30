import { IColorSettings } from "../../globalVars";
export var L;

export const getDefaultShapeStyle = (layer, clrSettings: IColorSettings) => {
    let defStyleObj = null
    if (layer instanceof L.Path) {
        if (layer instanceof L.Circle) {
            defStyleObj = {
                stroke: false,
                color: clrSettings.circleClr,
                fillOpacity: 1
            }
        } else if (layer instanceof L.Polyline) {
            defStyleObj = {
                color: clrSettings.lineClr
            }
        }
    }
    return defStyleObj
}