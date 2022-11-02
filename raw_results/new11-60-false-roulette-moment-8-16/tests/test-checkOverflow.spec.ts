export {}
import checkOverflow from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/check-overflow.js";

describe('checkOverflow', () => {
	it('test for checkOverflow', async () => {
		const _returnValueE0W6rMv = false;
		const _returnValuejOZb3ZC = () => { return _returnValueE0W6rMv };
		const __aIe3FFEk = () => { return _returnValuejOZb3ZC };
		const _mrI3xCET = {
			"_a": __aIe3FFEk
	}
		const _returnValuesAbzi22 = await checkOverflow(_mrI3xCET)
	});

	it('test for checkOverflow', async () => {
		const _arrayValuereMm9fy = "h54y3gUBCoD3REuacyXaxBVljfHFF";
		const _arrayValueIDihxha = -2.7793672172820276;
		const _returnValuewNMQOP = [_arrayValueIDihxha]
		const _arrayValueK2qSlwI = () => { return _returnValuewNMQOP };
		const _mLsA3kq = [_arrayValuereMm9fy, _arrayValueK2qSlwI]
		const _returnValuerAZbk7O = await checkOverflow(_mLsA3kq)
	});

	it('test for checkOverflow', async () => {
		const _arrayValueFGqpLX = null;
		const _arrayValueZatKmDJ = -8.312801924575721;
		const __ak14b958 = [_arrayValueFGqpLX, _arrayValueZatKmDJ]
		const _mpPGr7lB = {
			"_a": __ak14b958
	}
		const _returnValueaBhU35M = await checkOverflow(_mpPGr7lB)
	});
})