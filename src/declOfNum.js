/**
 * Функция для подстановки слова в нужном падеже
 * @param { Number } n - число
 * @param { Array } titles - массив где 0 - Им.пад ед.ч, 1 - Им.пад мн.ч 2 - Род.пад мн.ч
 * @returns {*}
 */
const declOfNum = (n, titles) => {
	return titles[(n%10==1 && n%100!=11) ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2]
}

export default declOfNum
