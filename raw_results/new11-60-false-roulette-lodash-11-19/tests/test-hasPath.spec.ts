export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueQfu29y = false;
		const _objectbZhoJQA = () => { return _returnValueQfu29y };
		const _pathamB0NcB = null;
		const _returnValuelZJ2KjI = await hasPath(_objectbZhoJQA, _pathamB0NcB)
	});

	it('test for hasPath', async () => {
		const _objectmWkb1t7 = null;
		const _returnValueAOFx4d = undefined;
		const _pathscJz8T0 = () => { return _returnValueAOFx4d };
		const _returnValueX2oLAcP = await hasPath(_objectmWkb1t7, _pathscJz8T0)
	});

	it('test for hasPath', async () => {
		const _objectTo7V0dV = "77iUjvxBKMun0prFvUgJ3QhcI7aiExfgU3GMMyNhCfABFDsiaduJsylbH1dWungQnYGIYwGClZo";
		const _arrayValueMSbNurs = "58";
		const _arrayValueZ2OaXX1 = undefined;
		const _arrayValueO8zD5tz = "Ad0sdJsith9ZHWwgD5A7UkFe5aMwkgghdXWKEx";
		const _pathMm8URlS = [_arrayValueMSbNurs, _arrayValueZ2OaXX1, _arrayValueO8zD5tz]
		const _returnValuevTCDqCV = await hasPath(_objectTo7V0dV, _pathMm8URlS)
	});
})