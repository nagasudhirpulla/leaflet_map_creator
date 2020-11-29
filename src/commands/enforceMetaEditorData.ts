import { getMetaEditorData } from '../queries/getMetaEditorData';
import { updateActiveLayerData } from './updateActiveLayerData';

export const enforceMetaEditorData = () => {
    const newLayerMeta = getMetaEditorData()
    updateActiveLayerData(newLayerMeta)
}