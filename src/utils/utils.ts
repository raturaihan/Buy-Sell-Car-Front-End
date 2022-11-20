export const FormatBalance = (balance: number) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}