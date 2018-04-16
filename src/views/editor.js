import { h } from "hyperapp"
import { actions } from "../actions"

export const EditorItem = ({ year, month, day }) => (
  <div class="editor">
    <h2>{day}.</h2>
    <ul>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
    <CreateButton />
  </div>
)

const CreateButton = ({ }) => (
  <div class="create-button">
    +
  </div>
)