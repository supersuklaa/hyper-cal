import { utils } from "./utils"

const d = new Date()

let init = {
  year: d.getFullYear(),
  month: d.getMonth() + 1,
  day: d.getDate(),
}

init.id = init.year + "-" + init.month + "-" + init.day

export const state = {
  calendar: {
    year: init.year,
    month: init.month,
    firstDay: utils.getFirstDay(init.year, init.month),
    days: utils.getDaysInMonth(init.year, init.month),
  },

  editor: init,

  events: utils.getData(init.id),

  showForm: false,

  formData: {
    name: "",
    start: ""
  }
}