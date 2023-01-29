const allPriceForDeliveryInBLR = (weight: number) => {
  if (weight < 2) {
    return 2;
  }
  if (weight < 10) {
    return 6;
  }
  if (weight < 20) {
    return 8;
  }
  if (weight < 30) {
    return 11;
  }
  return 20;
};

export default allPriceForDeliveryInBLR;
