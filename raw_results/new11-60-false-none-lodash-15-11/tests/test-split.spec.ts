export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _string0mLETi = {
		
	}
		const _separatorRCKqGSy = false;
		const _arrayValueScSpLzl = "9XTbd36iTCVVElpv4C6M9rzAuHiVy1k9pjopqwSeNj6diehJBTuk9GOMMp5Nnwh6Opc1Jmb3nHjlpkXsegY";
		const _arrayValuegABxi7W = true;
		const _limitsDfOpiA = [_arrayValueScSpLzl, _arrayValuegABxi7W]
		const _returnValuejghpgP = await split(_string0mLETi, _separatorRCKqGSy, _limitsDfOpiA)
	});

	it('test for split', async () => {
		const _stringA2PrY9c = null;
		const _separatorYRHM7Ga = 4.9356722138650895;
		const _limit5kl6ZZ = true;
		const _returnValuevN7W2wt = await split(_stringA2PrY9c, _separatorYRHM7Ga, _limit5kl6ZZ)
	});

	it('test for split', async () => {
		const _stringejswan6 = false;
		const _separatorImyyeog = 6.979701984069813;
		const _limitoIuBkq1 = undefined;
		const _returnValueR6VkzvC = await split(_stringejswan6, _separatorImyyeog, _limitoIuBkq1)
	});

	it('test for split', async () => {
		const _stringyHiHmzq = "qmtSpWztbRxxpMvVtZpWTJX";
		const _separatorlbVIDg5 = undefined;
		const _limitF7PEpO3 = undefined;
		const _returnValueUlqCL33 = await split(_stringyHiHmzq, _separatorlbVIDg5, _limitF7PEpO3)
	});

	it('test for split', async () => {
		const _stringHow2hC = "Ftmdf9ymYS702yxKwspuZFIAidUcxaToqSuhFLkGSrh2RG9KICjLbsERKmtrlsTCgt9jhD3LYDNfslpUkw8sm";
		const _returnValuepJK6oeO = null;
		const _returnValueUpkMFN = () => { return _returnValuepJK6oeO };
		const _separatorGWvvnkm = () => { return _returnValueUpkMFN };
		const _limityL0omtU = -5.696840688063823;
		const _returnValue1ZLFkP = await split(_stringHow2hC, _separatorGWvvnkm, _limityL0omtU)
	});
})