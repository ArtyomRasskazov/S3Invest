// TODO: create objests for investmens

function getItems(dp, capacity, n, weights) {
	if (dp[capacity][n] == 0) {
		return;
	}
	else if (dp[capacity][n-1] == dp[capacity][n]) {
		getItems(dp, capacity, n-1, weights);
	}
	else {
		getItems(dp, capacity-weights[n-1], n-1, weights);
		console.log(weights[n-1]);
	}
}

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
 getItems(dp, capacity, n, weights);
 console.log(`Профит: ${dp[capacity][n]}`);
 return;
}

const biz = {
	name: ['Книжный', 'Бизнес центр', 'Продуктовый', 'Кафе', 'Институт', 'Бистро', 'Стадион', 'Притон', 'Больница', 'СПА', 'Театр',
			'Бассейн', 'Библиотека', 'Парк', 'Водоём', 'Галерея', 'Кладбище', 'Пляж', 'Спортзал'],
	price: [7000, 18000, 7000, 6000, 40000, 12500, 35000, 15000, 30000, 15000, 18000,
			97000, 115000, 40000, 33000, 300000, 80000, 49000, 260000],
	profit: [1000, 3000, 1000, 850, 7900, 2100, 6800, 2500, 6000, 2500, 3000,
			11000, 13250, 4600, 3650, 36500, 9000, 5850, 31000]
}

packBagpack(biz.profit, biz.price, 22000);
// при ограничении в 14 оптимальное решение 7 при использовании предметов №1 и №3

// кар ------+--------
// нав --++--+-+-+
// соц ---++-
