import utils from './utils';

export default {
  nav: value => (state, actions) => {
    let visible = {};

    if (value === 'next') {
      visible = utils.getNextMonth(state.calendar);
    } else if (value === 'prev') {
      visible = utils.getPrevMonth(state.calendar);
    }

    const today = utils.getToday();

    actions.renderCalender(visible);

    if (today.year === visible.year && today.month === visible.month) {
      return actions.renderEditor(today);
    }

    return actions.hideEditor();
  },

  showToday: () => (state, actions) => {
    const today = utils.getToday();
    actions.renderCalender(today);
    actions.renderEditor(today);
  },

  renderCalender: ({ year, month }) => () => ({
    calendar: {
      year,
      month,
      firstDay: utils.getFirstDay(year, month),
      days: utils.getDaysInMonth(year, month),
    },
    showForm: false,
  }),

  hideEditor: () => () => ({
    editor: { id: false },
    events: [],
  }),

  renderEditor: value => () => ({
    editor: value,
    events: utils.getData(value.id),
    showForm: false,
    showDeleteList: false,
    deleteId: null,
  }),

  showForm: () => () => ({
    showForm: true,
  }),

  setName: value => state => ({
    formData: { name: value, start: state.formData.start },
  }),

  setStartTime: value => state => ({
    formData: { name: state.formData.name, start: value },
  }),

  createEvent: key => ({ formData }) => {
    const { name, start } = formData;

    if (name.trim().length < 1) return null;

    const events = utils.getData(key).concat({ name, start });

    utils.setData(key, events);

    return {
      events,
      formData: { name: '', start: '' },
      showForm: false,
    };
  },

  showDeleteList: () => () => ({
    showDeleteList: true,
  }),

  selectDelete: e => () => ({
    deleteId: +e.options[e.selectedIndex].value,
  }),

  deleteEvents: key => ({ events, deleteId }) => {
    if (deleteId === null) {
      return null;
    }

    const newEvents = events.filter((e, i) => i !== deleteId);

    if (newEvents.length > 0) {
      utils.setData(key, newEvents);
    } else {
      utils.remoteData(key);
    }

    return {
      events: newEvents,
      showDeleteList: false,
    };
  },
};
