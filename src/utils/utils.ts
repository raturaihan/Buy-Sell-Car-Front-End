export const FormatBalance = (balance: number) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const GetMinimumPrice = (val:string): string => {
    if (val == "under150"){
      return "0"

    }
    if (val == "between150_250"){
      return "150000000"
    }
    if (val == "between250_350"){
      return "250000000"
    }
    if (val == "between350_450"){
      return "350000000"
    }
    if (val == "above450") {
      return "450000000"
    }
    return ""
  }

  export const GetMaximumPrice = (val:string): string => {
    if (val == "under150"){
      return "150000000"

    }
    if (val == "between150_250"){
      return "250000000"
    }
    if (val == "between250_350"){
      return "350000000"
    }
    if (val == "between350_450"){
      return "450000000"
    }
    return ""
  }