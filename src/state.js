import { utils } from "./utils"

const { year, month, day, id } = utils.getToday()
const firstDay = utils.getFirstDay(year, month)
const days = utils.getDaysInMonth(year, month)

export const state = {
  calendar: { year, month, firstDay, days },

  editor: { year, month, day, id },

  events: utils.getData(id),

  showForm: false,

  formData: {
    name: "",
    start: ""
  }
}