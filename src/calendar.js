export const calendar = {

  getFirstDay: (year, month) => {

    let n = new Date(year, month - 1, 1).getDay()

    return (n < 1) ? 7 : n

  },
  
  getDaysInMonth: (year, month) => {

    return new Date(year, month, 0).getDate()

  },
  
  getNextMonth: (year, month) => {

    return {
      "year": (month < 12) ? year : year + 1,
      "month": (month < 12) ? month + 1 : 1
    }

  }


}