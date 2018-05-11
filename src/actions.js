import { utils } from "./utils"

export const actions = {
  nav: value => (state, actions) => {
    switch (value) {
      case "next": return actions.next()
      case "prev": return actions.prev()
      default: return
    }
  },

  next: () => (state, actions) => {
    const visible = utils.getNextMonth(state.calendar)
    const today = utils.getToday()

    actions.renderCalender(visible)

    if (today.year === visible.year && today.month === visible.month) {
      actions.renderEditor(today)
    } else {
      actions.hideEditor()
    }
  },

  prev: () => (state, actions) => {
    const visible = utils.getPrevMonth(state.calendar)
    const today = utils.getToday()

    actions.renderCalender(visible)

    if (today.year === visible.year && today.month === visible.month) {
      actions.renderEditor(today)
    } else {
      actions.hideEditor()
    }
  },

  showToday: () => (state, actions) => {
    const today = utils.getToday()
    actions.renderCalender(today)
    actions.renderEditor(today)
  },

  renderCalender: ({ year, month }) => state => ({
    calendar: {
      year: year,
      month: month,
      firstDay: utils.getFirstDay(year, month),
      days: utils.getDaysInMonth(year, month),
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
		const data = utils.getData(value).concat(state.formData)

    utils.setData(value, data)

    actions.cleanUpAfterAdd(value)
  },

  cleanUpAfterAdd: value => state => ({
    formData: {name: "", start: ""},
    showForm: false,
    events: utils.getData(value)
  }),

}