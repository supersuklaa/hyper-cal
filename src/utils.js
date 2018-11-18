export default {

  getFirstDay: (year, month) => {
    const n = new Date(year, month - 1, 1).getDay();

    return (n === 0) ? 7 : n;
  },

  getDaysInMonth: (year, month) => new Date(year, month, 0).getDate(),

  getNextMonth: d => ({
    year: (d.month < 12) ? d.year : d.year + 1,
    month: (d.month < 12) ? d.month + 1 : 1,
  }),

  getPrevMonth: d => ({
    year: (d.month > 1) ? d.year : d.year - 1,
    month: (d.month > 1) ? d.month - 1 : 12,
  }),


  getMonthTitle: d => `${d.month} / ${d.year}`,

  getData: id => ((localStorage.getItem(id))
    ? JSON.parse(localStorage.getItem(id))
    : []),

  setData: (key, events) => localStorage.setItem(key, JSON.stringify(events)),

  remoteData: key => localStorage.removeItem(key),

  hasData: id => (!!(localStorage.getItem(id))),

  getToday: () => {
    const d = new Date();

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const id = `${year}-${month}-${day}`;

    return {
      year,
      month,
      day,
      id,
    };
  },

};
