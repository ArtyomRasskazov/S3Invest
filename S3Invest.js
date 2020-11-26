// TODO: create objests for investmens
/**
 * @param {Array.<Number>} scores Стоимости предметов
 * @param {Array.<Number>} weights Веса предметов
 * @param {Number} capacity Грузоподъемность
 * @return {Number} Максимальная стоимость предметов, вмещающихся в рюкзак
 */
function packBagpack(scores, weights, capacity) {
  let n = weights.length;
  let dp = new Array(capacity + 1);

  for (let i = 0; i <= capacity; i += 1) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= capacity; j += 1) {
      if (weights[i - 1] <= j) {
        dp[j][i] = Math.max(dp[j][i - 1], dp[j - weights[i - 1]][i - 1] + scores[i-1]);
      } else {
        dp[j][i] = dp[j][i - 1];
      }
    }
 }
 return dp[capacity][n];
}

const biz = {
	// price: [7, 18, 7, 6, 40],
	// profit: [1000, 3000, 1000, 850, 7900]
	price: [7000, 18000, 7000, 6000, 40000, 12500, 35000, 15000, 30000, 15000, 18000],
	profit: [1000, 3000, 1000, 850, 7900, 2100, 6800, 2500, 6000, 2500, 3000]
}

console.log(packBagpack(biz.profit, biz.price, 54000));
// при ограничении в 14 оптимальное решение 7 при использовании предметов №1 и №3

// кар ------+--------
// нав --++--+-+-+
// соц ---++-
