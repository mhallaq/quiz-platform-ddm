const establishMaxBet = (round, bank) => {
    if (round == 1) {
        if (bank <= 1000) {
            return 1000
        } else {
            return bank
        }
    } if (round == 2) {
        if (bank <= 2000) {
            return 2000
        } else {
            return bank
        }
    } if (round == 3) {
        if (bank <= 0) {
            return 0
        } else {
            return bank
        }
    }
}
export default establishMaxBet
