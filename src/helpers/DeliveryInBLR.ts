export const allPriceForDeliveryInBLR = (weight: number) => {
    if (weight < 2) {
        return 2
    } else if (weight < 10) {
        return 6
    } else if (weight < 20) {
        return 8
    } else if (weight < 30) {
        return 11
    } else {
        return 20
    }
}