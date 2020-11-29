import JSONEditor from 'jsoneditor';

export const initLayerMetaEditor = (jsonEditorId: string): JSONEditor => {
    // https://github.com/josdejong/jsoneditor/tree/master#use
    const container = document.getElementById(jsonEditorId)
    const options = {}
    return new JSONEditor(container, options)
}