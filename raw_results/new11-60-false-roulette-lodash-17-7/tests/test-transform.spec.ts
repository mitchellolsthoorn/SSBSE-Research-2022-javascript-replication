export {}
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _valuesoXrqZjO = 5.742621643102128;
		const _objectlYn8rKK = new SetCache(_valuesoXrqZjO)
		const _valueRWUmnzn = true;
		const _returnValueFgILQCU = await _objectlYn8rKK.has(_valueRWUmnzn)
		const _valueXSsBamD = false;
		const _returnValuevdrAd7u = await _objectlYn8rKK.has(_valueXSsBamD)
		const _valueOlZzjBx = "6ganGG654wFAc68PvS4odsS6Pw9OoHAI1qEM0FG8Mx9TIbdv3XoP59oa6RJU";
		const _returnValuesg7gKHm = await _objectlYn8rKK.add(_valueOlZzjBx)
		const _valueZqZYHdS = false;
		const _returnValueGJausX3 = await _objectlYn8rKK.add(_valueZqZYHdS)
		const _valuesW7SY6G = -6.456946288082379;
		const _returnValueDQtoELy = await _objectlYn8rKK.add(_valuesW7SY6G)
		const _returnValuex2dCzKD = {
		
	}
		const _iterateev5LYXQh = () => { return _returnValuex2dCzKD };
		const _accumulatorj2c3iz7 = {
		
	}
		const _returnValuea9aGyX8 = await transform(_objectlYn8rKK, _iterateev5LYXQh, _accumulatorj2c3iz7)
	});

	it('test for transform', async () => {
		const _returnValueYKzi8D4 = false;
		const _objectzdXIJg = () => { return _returnValueYKzi8D4 };
		const _returnValueTCDh9GU = 7.399007105321122;
		const _iterateeRRZu5IO = () => { return _returnValueTCDh9GU };
		const _accumulatorjXCHqnA = null;
		const _returnValueyhUHI2Y = await transform(_objectzdXIJg, _iterateeRRZu5IO, _accumulatorjXCHqnA)
	});

	it('test for transform', async () => {
		const _constructorTQLnaRx = undefined;
		const _objectoQNE2x = {
			"constructor": _constructorTQLnaRx
	}
		const _returnValueXfecPag = null;
		const _iterateeSrGi7M9 = () => { return _returnValueXfecPag };
		const _accumulatorsDsZIpy = undefined;
		const _returnValueUokAIW2 = await transform(_objectoQNE2x, _iterateeSrGi7M9, _accumulatorsDsZIpy)
	});

	it('test for transform', async () => {
		const _arrayValuezDnNqxR = null;
		const _objectkmxpQ5K = [_arrayValuezDnNqxR]
		const _returnValuejZuyxYi = false;
		const _iterateeBx3YQzl = () => { return _returnValuejZuyxYi };
		const _accumulatornpzuIbr = null;
		const _returnValuer1jh43 = await transform(_objectkmxpQ5K, _iterateeBx3YQzl, _accumulatornpzuIbr)
	});
})