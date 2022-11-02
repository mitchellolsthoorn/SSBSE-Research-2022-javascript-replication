export {}
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValueJYc1QNV = {
		
	}
		const _valuespCeCma6 = () => { return _returnValueJYc1QNV };
		const _objectvTiMOYR = new SetCache(_valuespCeCma6)
		const _valueM6kmq7n = {
		
	}
		const _returnValuerT4yvu6 = await _objectvTiMOYR.add(_valueM6kmq7n)
		const _valueWHpmj1q = true;
		const _returnValueLKRAf1 = await _objectvTiMOYR.has(_valueWHpmj1q)
		const _valueIbAFHYK = 7.304469688269993;
		const _returnValuesWHzxxP = await _objectvTiMOYR.add(_valueIbAFHYK)
		const _returnValueWfqzEHF = null;
		const _iterateeDtgff6R = () => { return _returnValueWfqzEHF };
		const _accumulatorWDeqbJO = {
		
	}
		const _returnValuerIG1IdL = await transform(_objectvTiMOYR, _iterateeDtgff6R, _accumulatorWDeqbJO)
	});

	it('test for transform', async () => {
		const _constructorcg0dOo = "5P6E4DIXLhAm24lfhomM7GKtmakQTgsfVOf9cNn307Uw1ILtS1c13NNLHwSFn9C9AST";
		const _objectaG7usx = {
			"constructor": _constructorcg0dOo
	}
		const _arrayValueGuTIIcy = "bq";
		const _returnValueyxGK7vQ = [_arrayValueGuTIIcy]
		const _iterateetudqJiw = () => { return _returnValueyxGK7vQ };
		const _accumulatorxTF1uEa = null;
		const _returnValueHGhh2eB = await transform(_objectaG7usx, _iterateetudqJiw, _accumulatorxTF1uEa)
	});

	it('test for transform', async () => {
		const _returnValueUwlFbup = "bWwYDZwvGf7h1Yxx21XBiVUgpIHeggDYG0KIIB";
		const _entriesepvmSIt = () => { return _returnValueUwlFbup };
		const _objectcvl4fmS = new ListCache(_entriesepvmSIt)
		const _arrayValueB4F3oe = undefined;
		const _keyWUHdSa = [_arrayValueB4F3oe]
		const _returnValueM7v8UUN = await _objectcvl4fmS.delete(_keyWUHdSa)
		const _keycGU8l1w = []
		const _returnValuerTbjnlD = await _objectcvl4fmS.has(_keycGU8l1w)
		const _returnValuelvQQy2 = {
		
	}
		const _iteratee8TBiEo = () => { return _returnValuelvQQy2 };
		const _accumulatorODhx8MR = null;
		const _returnValueOTjkZW = await transform(_objectcvl4fmS, _iteratee8TBiEo, _accumulatorODhx8MR)
	});

	it('test for transform', async () => {
		const _arrayValueH23w4My = 7.890047973803526;
		const _arrayValuezbaPIsq = [_arrayValueH23w4My]
		const _arrayValueo9nocYm = undefined;
		const _objectcq87nIR = [_arrayValuezbaPIsq, _arrayValueo9nocYm]
		const _returnValueW8095H7 = []
		const _iterateeC130Mtx = () => { return _returnValueW8095H7 };
		const _accumulatorZlZ7xPN = null;
		const _returnValueqYz1FO4 = await transform(_objectcq87nIR, _iterateeC130Mtx, _accumulatorZlZ7xPN)
	});
})