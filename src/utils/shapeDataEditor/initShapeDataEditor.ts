import JSONEditor from 'jsoneditor';

export const initShapeDataEditor = (jsonEditorId: string): JSONEditor => {
    // https://github.com/josdejong/jsoneditor/tree/master#use
    const container = document.getElementById(jsonEditorId)
    const options = {}
    const editor = new JSONEditor(container, options)
    return editor
}