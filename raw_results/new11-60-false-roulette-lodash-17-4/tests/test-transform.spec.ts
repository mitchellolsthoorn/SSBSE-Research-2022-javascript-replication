export {}
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _arrayValuewWKSZgR = true;
		const _arrayValueCuR4XDe = undefined;
		const _arrayValueE7rc6Gi = "ywjGyjMIAS31psFeuZvKvefIpWlGlwW8tDTjzbCxl9pxaR8ZQpnFOkVA11bHcJb1lJX";
		const _valuesphnKtp0 = [_arrayValuewWKSZgR, _arrayValueCuR4XDe, _arrayValueE7rc6Gi]
		const _objectJ5fJYww = new SetCache(_valuesphnKtp0)
		const _valueNKeFsPO = undefined;
		const _returnValueXjUnSBE = await _objectJ5fJYww.has(_valueNKeFsPO)
		const _valueL2xNtLs = true;
		const _returnValueGY6N38U = await _objectJ5fJYww.add(_valueL2xNtLs)
		const _valuelTIwokL = -5.0927905328495084;
		const _returnValueZagkGN1 = await _objectJ5fJYww.has(_valuelTIwokL)
		const _returnValueT0PGyi = "1VCm5OPj4IdYkPDSTwVFM5uueG2W2gonBrBVfIHf3qYXup";
		const _iterateeoHqSJX = () => { return _returnValueT0PGyi };
		const _accumulatorNEySHNM = "TcUlunNtGaDnaJhUOxpVdopDGb";
		const _returnValueHq5PRGb = await transform(_objectJ5fJYww, _iterateeoHqSJX, _accumulatorNEySHNM)
	});

	it('test for transform', async () => {
		const _arrayValueDGaxN3t = null;
		const _arrayValuejCEufXm = undefined;
		const _arrayValuefQJTpQF = {
		
	}
		const _returnValue6Sxyfe = [_arrayValueDGaxN3t, _arrayValuejCEufXm, _arrayValuefQJTpQF]
		const _entriesjnH1rz = () => { return _returnValue6Sxyfe };
		const _objectYOzVYS = new ListCache(_entriesjnH1rz)
		const _arrayValueo9j0cPP = undefined;
		const _arrayValueeslpc2U = undefined;
		const _arrayValueRbka8hg = -8.414730536475355;
		const _arrayValueLItmBsk = [_arrayValueo9j0cPP, _arrayValueeslpc2U, _arrayValueRbka8hg]
		const _keyK6IaXTi = [_arrayValueLItmBsk]
		const _returnValuekLXNErO = await _objectYOzVYS.has(_keyK6IaXTi)
		const _returnValuezqxIl2H = null;
		const _returnValueLMwRBKX = () => { return _returnValuezqxIl2H };
		const _iterateeMEYsksC = () => { return _returnValueLMwRBKX };
		const _accumulatorBb6YrM = null;
		const _returnValued8zAiNh = await transform(_objectYOzVYS, _iterateeMEYsksC, _accumulatorBb6YrM)
	});

	it('test for transform', async () => {
		const _arrayValueRPNWmJH = {
		
	}
		const _arrayValueAEBgKFR = "yGsRbpWpB6u6RckjMQtPv9cEoQDP5UQPTP92RhYYEzHVNKPYcu9KTT9knrgfcj5OI4y6QKEapU71A6e6AgDcYwvabh";
		const _arrayValueEI9lnaW = -7.429981417553649;
		const _objectFAySMtW = [_arrayValueRPNWmJH, _arrayValueAEBgKFR, _arrayValueEI9lnaW]
		const _returnValueGhzAPpB = undefined;
		const _iterateeRLZf4AQ = () => { return _returnValueGhzAPpB };
		const _accumulatorWujqpy3 = null;
		const _returnValueT61xXav = await transform(_objectFAySMtW, _iterateeRLZf4AQ, _accumulatorWujqpy3)
	});

	it('test for transform', async () => {
		const _constructorJX19eit = -3.9562361217991393;
		const _objectYqLcll = {
			"constructor": _constructorJX19eit
	}
		const _returnValueSfqHscW = 3.993216930526984;
		const _iterateeNzTsAQ2 = () => { return _returnValueSfqHscW };
		const _accumulatorHzUECnB = null;
		const _returnValueW3Wbi0r = await transform(_objectYqLcll, _iterateeNzTsAQ2, _accumulatorHzUECnB)
	});
})