function priceForDeliveryInBLR(weight: number) {
  const MAX_WEIGHT = 30;
  let result = 0;
  let currentWeight = weight;
  if (currentWeight === 0) return 0;
  if (currentWeight > 30) {
    result += Math.floor(currentWeight / MAX_WEIGHT) * 11;
    currentWeight = currentWeight % MAX_WEIGHT;
  }
  if (currentWeight > 20) {
    result += 11;
  } else if (currentWeight > 10) {
    result = result + 8;
  } else if (currentWeight > 2) {
    result += 6;
  } else  if (currentWeight > 0) {
    result += 5;
  }

  return result;
}

export default priceForDeliveryInBLR;
