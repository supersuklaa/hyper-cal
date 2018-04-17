export const utils = {

  getFirstDay: (year, month) => {

    let n = new Date(year, month - 1, 1).getDay()

    return (n < 1) ? 7 : n

  },
  
  getDaysInMonth: (year, month) => new Date(year, month, 0).getDate(),

  getNextMonth: d => {
    return {
      "year": (d.month < 12) ? d.year : d.year + 1,
      "month": (d.month < 12) ? d.month + 1 : 1
    }
  },

  getPrevMonth: d => {
    return {
      "year": (d.month > 1) ? d.year : d.year - 1,
      "month": (d.month > 1) ? d.month - 1 : 12
    }
  },
  
  getMonthTitle: d => d.month + " / " + d.year,

  getData: d => {
    return (localStorage.getItem(d))
      ? JSON.parse(localStorage.getItem(d))
      : []
  },

  hasData: d => (localStorage.getItem(d)) ? true : false

}
