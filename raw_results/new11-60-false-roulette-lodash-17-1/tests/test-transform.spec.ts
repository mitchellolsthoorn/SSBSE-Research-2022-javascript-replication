export {}
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import MapCache from "../../benchmark/top10npm/lodash/.internal/MapCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _entriesSGz0WKY = undefined;
		const _objectMTPUAQG = new Stack(_entriesSGz0WKY)
		const _keyQzcTvEU = null;
		const _returnValueH0RzqIf = await _objectMTPUAQG.delete(_keyQzcTvEU)
		const _keyUe23LFu = -3.1816852107516773;
		const _returnValuetYef6e = await _objectMTPUAQG.has(_keyUe23LFu)
		const _returnValuexTV2KO = null;
		const _iterateeQsRxMkG = () => { return _returnValuexTV2KO };
		const _accumulatortQbXUNn = null;
		const _returnValuew2pOE5L = await transform(_objectMTPUAQG, _iterateeQsRxMkG, _accumulatortQbXUNn)
	});

	it('test for transform', async () => {
		const _returnValueugwp40w = 9.56078632023672;
		const _entriesgRj35D5 = () => { return _returnValueugwp40w };
		const _objectgSFWRTl = new MapCache(_entriesgRj35D5)
		const _keyH5Q4hU = undefined;
		const _returnValue1z6Uof = await _objectgSFWRTl.has(_keyH5Q4hU)
		const _returnValueZSHEJDo = 9.385907458468775;
		const _keyIScb93q = () => { return _returnValueZSHEJDo };
		const _returnValueNCDz3sG = await _objectgSFWRTl.has(_keyIScb93q)
		const _arrayValueenhaBG9 = "Qy07BTqcNZsB8Wh6WMhMFJlLJM6CLONtTLLW3eTdIc";
		const _arrayValueljZvEj = undefined;
		const _arrayValueRlR6LaG = []
		const _returnValuewbXjDUt = [_arrayValueenhaBG9, _arrayValueljZvEj, _arrayValueRlR6LaG]
		const _iterateeGBfJ6YV = () => { return _returnValuewbXjDUt };
		const _accumulatorVT0aOj = {
		
	}
		const _returnValuep77iqYH = await transform(_objectgSFWRTl, _iterateeGBfJ6YV, _accumulatorVT0aOj)
	});

	it('test for transform', async () => {
		const _arrayValuejnRCFIR = -5.337774542286001;
		const _objectnNiBzR6 = [_arrayValuejnRCFIR]
		const _returnValueJfVLosw = []
		const _iterateeWrXV2Zp = () => { return _returnValueJfVLosw };
		const _accumulatorAUd6jF = null;
		const _returnValuedqHX6Uz = await transform(_objectnNiBzR6, _iterateeWrXV2Zp, _accumulatorAUd6jF)
	});

	it('test for transform', async () => {
		const _constructorsUlWeP6 = false;
		const _objectTQuVd3W = {
			"constructor": _constructorsUlWeP6
	}
		const _returnValuef47k8GX = true;
		const _iteratees5mg3Tf = () => { return _returnValuef47k8GX };
		const _accumulatorfbAO6D = null;
		const _returnValueOPfjhEk = await transform(_objectTQuVd3W, _iteratees5mg3Tf, _accumulatorfbAO6D)
	});
})