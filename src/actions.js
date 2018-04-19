import { utils } from "./utils"

export const actions = {
  nav: value => (state, actions) => {
    if (value === "next")
      actions.next()
    else if (value === "prev")
      actions.prev()
  },

  next: () => (state, actions) => {
    actions.renderCalender(
      utils.getNextMonth(state.calendar)
    )
    actions.hideEditor()
  },

  prev: () => (state, actions) => {
    actions.renderCalender(
      utils.getPrevMonth(state.calendar)
    )
    actions.hideEditor()
  },

  renderCalender: value => state => ({
    calendar: {
      year: value.year,
      month: value.month,
      firstDay: utils.getFirstDay(value.year, value.month),
      days: utils.getDaysInMonth(value.year, value.month),
    },
    showForm: false,
  }),

  hideEditor: () => state => ({
    editor: {id: false},
    events: []
  }),

  renderEditor: value => state => ({
    editor: value,
    events: utils.getData(value.id),
    showForm: false
  }),

  showForm: () => state => ({
    showForm: true
  }),

  setName: value => state => ({
    formData: {name: value, start: state.formData.start}
  }),

  setStartTime: value => state => ({
    formData: {name: state.formData.name, start: value}
  }),

  createEvent: value => (state, actions) => {
		let data = utils.getData(value).concat(state.formData)

    utils.setData(value, data)

    actions.cleanUpAfterAdd(value)
  },

  cleanUpAfterAdd: value => state => ({
    formData: {name: "", start: ""},
    showForm: false,
    events: utils.getData(value)
  }),

}