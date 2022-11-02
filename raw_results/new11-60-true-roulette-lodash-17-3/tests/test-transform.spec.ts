export {}
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValueoJSTPmV = -7.454976517344361;
		const _valuesWM0YkqC = () => { return _returnValueoJSTPmV };
		const _objectKwFLpKe = new SetCache(_valuesWM0YkqC)
		const _valueFujoLvY = undefined;
		const _returnValuey7OeEsB = await _objectKwFLpKe.has(_valueFujoLvY)
		const _valueDMSR6pg = {
		
	}
		const _returnValueNwRBsPL = await _objectKwFLpKe.add(_valueDMSR6pg)
		const _valueFaLBHNa = undefined;
		const _returnValuenEVP3Yp = await _objectKwFLpKe.has(_valueFaLBHNa)
		const _arrayValuekUy027 = {
		
	}
		const _valueJTuEpsm = [_arrayValuekUy027]
		const _returnValuet3LDI7V = await _objectKwFLpKe.has(_valueJTuEpsm)
		const _valuezeNHvlP = "2pTq3hbuxOR1ipgF9rqSnODJT9hu5blacatExg6fYKaxuxjChWEEIABuF2KfhDorDf7sfpjGYPjIaejvogmxm2kwTzOpob";
		const _returnValuet6YMxh = await _objectKwFLpKe.has(_valuezeNHvlP)
		const _returnValuebtozY4L = false;
		const _iterateeQxlVFjv = () => { return _returnValuebtozY4L };
		const _accumulatorG1TVhaI = {
		
	}
		const _returnValueJxJSaLC = await transform(_objectKwFLpKe, _iterateeQxlVFjv, _accumulatorG1TVhaI)
	});

	it('test for transform', async () => {
		const _entriesLRvda3K = "DwIJ4KjKKdLV8T9uo2PTSwYjs";
		const _objectVb25F02 = new Hash(_entriesLRvda3K)
		const _key0zOGpR = -3.695185843073359;
		const _valueaq7NLu = undefined;
		const _returnValueEyo9tXr = await _objectVb25F02.set(_key0zOGpR, _valueaq7NLu)
		const _keybqxrG5u = undefined;
		const _returnValuefIG536S = await _objectVb25F02.get(_keybqxrG5u)
		const _keyoUf9LMQ = "qGJOcz0q5b7QtLeDS49usO1WChBdkNkrsOzbN9oVn3kIfbXGzj9bR4K5QcmsVYjB88usbPjgeaFg2uXnOE78a5";
		const _returnValuenyPyuwk = await _objectVb25F02.delete(_keyoUf9LMQ)
		const _keyDHunm1 = -7.18857149349291;
		const _returnValueSG6bCkA = await _objectVb25F02.delete(_keyDHunm1)
		const _returnValueFiT32d7 = null;
		const _keyH5Cfg2B = () => { return _returnValueFiT32d7 };
		const _returnValuedRo6zf = await _objectVb25F02.get(_keyH5Cfg2B)
		const _returnValuerlzMZQg = 3.9850635497940985;
		const _iterateeu4hJwxc = () => { return _returnValuerlzMZQg };
		const _accumulatorwC1M6Ln = null;
		const _returnValue5TXSrR = await transform(_objectVb25F02, _iterateeu4hJwxc, _accumulatorwC1M6Ln)
	});

	it('test for transform', async () => {
		const _arrayValueZ3zglH = "9kAzqbo45TVKGrvSZM9m3pUTms";
		const _objectOYzEgTi = [_arrayValueZ3zglH]
		const _arrayValueYoUAwiP = false;
		const _arrayValueRZ5AQIW = undefined;
		const _arrayValueMJOBheF = "jm6xC9xFMRBR6YgvLQlvbsVkupxw1tUS0jwrm9XNa";
		const _arrayValuekxlu52M = null;
		const _returnValuemJ7AZV4 = [_arrayValueYoUAwiP, _arrayValueRZ5AQIW, _arrayValueMJOBheF, _arrayValuekxlu52M]
		const _iterateemqUoR03 = () => { return _returnValuemJ7AZV4 };
		const _accumulatoreRugKN7 = null;
		const _returnValueSQqROE7 = await transform(_objectOYzEgTi, _iterateemqUoR03, _accumulatoreRugKN7)
	});

	it('test for transform', async () => {
		const _constructorgfcFLDQ = "5pbM4DyG7CBbJeaOjkzUTv7uJlJL8Ej0YiPwDvBIAzZLvpRo3ozwuSCFeEVvK";
		const _objectdd2OKnk = {
			"constructor": _constructorgfcFLDQ
	}
		const _returnValueiO2i169 = "pDS2evWqNrSffpSm";
		const _arrayValueRM18iqF = () => { return _returnValueiO2i169 };
		const _returnValueuGqI86p = [_arrayValueRM18iqF]
		const _iterateeIcXH8ux = () => { return _returnValueuGqI86p };
		const _accumulatorFtDiHmo = null;
		const _returnValueQ6VZyxQ = await transform(_objectdd2OKnk, _iterateeIcXH8ux, _accumulatorFtDiHmo)
	});
})