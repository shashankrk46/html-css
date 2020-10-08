function birthdayCakeCandles(candles) {
  let max = 0;
  let count = 0;
  for (i = 0; i <= candles.length; i++) {

    if (candles[i] > max) {
      return max = candles[i]
    }
  }
  for (i = 0; i <= candles.length; i++) {
    if (candles[i] == max) {
      return count++;
    }
  }
  return count
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))