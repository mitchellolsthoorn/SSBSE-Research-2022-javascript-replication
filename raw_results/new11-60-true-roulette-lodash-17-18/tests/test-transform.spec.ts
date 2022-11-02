export {}
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _entriesC7lA36E = "MqiPolJWEgXiyXTBA1TGtPzALa2AtAVUaA3pftAUzvsFhBzX1pwliqMcBmLqarnXENb32xtg35tK";
		const _objectHBOu8vq = new ListCache(_entriesC7lA36E)
		const _keywW4dbRy = {
		
	}
		const _returnValueja8uJSc = await _objectHBOu8vq.has(_keywW4dbRy)
		const _keyNSbrwrS = "HT18fHjw2y6";
		const _returnValueMFWC2Mu = await _objectHBOu8vq.delete(_keyNSbrwrS)
		const _returnValueDEqiLEj = {
		
	}
		const _iterateeYh9iPWk = () => { return _returnValueDEqiLEj };
		const _accumulatorjrxAj0s = {
		
	}
		const _returnValueLfLPLd = await transform(_objectHBOu8vq, _iterateeYh9iPWk, _accumulatorjrxAj0s)
	});

	it('test for transform', async () => {
		const _objectK0lu7Mo = null;
		const _returnValueKRZGugM = "MSsygacMT";
		const _iterateeLwxGxu = () => { return _returnValueKRZGugM };
		const _accumulatorQdFQKw = null;
		const _returnValuemYbB4W8 = await transform(_objectK0lu7Mo, _iterateeLwxGxu, _accumulatorQdFQKw)
	});

	it('test for transform', async () => {
		const _entriesxxeByh0 = "MiD4eDw84IXy9f5FWU0n02fp9FWS2PaIjZChfHp";
		const _objectBy69DDX = new ListCache(_entriesxxeByh0)
		const _keyPVuKv2d = true;
		const _valuepogqBuD = -1.453648348429052;
		const _returnValueSkTx6CX = await _objectBy69DDX.set(_keyPVuKv2d, _valuepogqBuD)
		const _keyKxysscA = null;
		const _returnValueWRM1wrJ = await _objectBy69DDX.get(_keyKxysscA)
		const _returnValuempZtwBx = "1a86bV5N0Ag6nX5I3E2webQnuIyevxhYF7e";
		const _keyfbwS6Pq = () => { return _returnValuempZtwBx };
		const _returnValueF7Dqx1J = await _objectBy69DDX.delete(_keyfbwS6Pq)
		const _keyqYYn93S = "LVkONhuXNfAnBjq46W6HhBGpBt6BqpaCA2kpHus6EQU0gGQNeMh";
		const _valueIGqZOd3 = -8.639700555195821;
		const _returnValueSXinat = await _objectBy69DDX.set(_keyqYYn93S, _valueIGqZOd3)
		const _returnValueC4VW8e = null;
		const _returnValueTRWBNuZ = () => { return _returnValueC4VW8e };
		const _iterateeaGF9UT0 = () => { return _returnValueTRWBNuZ };
		const _accumulatorUv3Wc68 = null;
		const _returnValuegaAw1V1 = await transform(_objectBy69DDX, _iterateeaGF9UT0, _accumulatorUv3Wc68)
	});

	it('test for transform', async () => {
		const _arrayValuem7DG3lV = -3.556740296491874;
		const _arrayValuezBxo4LA = undefined;
		const _arrayValueifAqUi3 = [_arrayValuezBxo4LA]
		const _objectzxExSUh = [_arrayValuem7DG3lV, _arrayValueifAqUi3]
		const _returnValueLJexUOr = undefined;
		const _iterateeiGoCILM = () => { return _returnValueLJexUOr };
		const _accumulatoryTpQZji = null;
		const _returnValue6rY6Z0 = await transform(_objectzxExSUh, _iterateeiGoCILM, _accumulatoryTpQZji)
	});

	it('test for transform', async () => {
		const _constructoranIThYu = true;
		const _objectwU5WEgv = {
			"constructor": _constructoranIThYu
	}
		const _returnValueTufherD = null;
		const _iterateelSqL8a7 = () => { return _returnValueTufherD };
		const _accumulatoryyUhnA6 = null;
		const _returnValueMYT1lTi = await transform(_objectwU5WEgv, _iterateelSqL8a7, _accumulatoryyUhnA6)
	});
})