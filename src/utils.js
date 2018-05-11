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

  getData: id => {
    return (localStorage.getItem(id))
      ? JSON.parse(localStorage.getItem(id))
      : []
  },

  setData: (value, data) => localStorage.setItem(value, JSON.stringify(data)),

  hasData: d => (localStorage.getItem(d)) ? true : false,

  getToday: () => {
    const d = new Date()

    let init = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
    }
    
    init.id = init.year + "-" + init.month + "-" + init.day
    
    return init
  }

}
