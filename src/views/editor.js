import { h } from "hyperapp"
import { actions } from "../actions"

export const EditorItem = ({ editor }) => (state, actions) => (
  <div class={"editor " + displayClass(editor.display)}>
    {editor.value}
  </div>
)

const displayClass = d => d ? "show" : "hide"