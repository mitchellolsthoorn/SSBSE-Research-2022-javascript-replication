export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValuet2oQD8A = 1.9853971966827277;
		const _arrayValuefx25dWo = 8.726063777762299;
		const _arrayValuek6yhQh8 = []
		const _returnValueJPiHpej = [_arrayValuet2oQD8A, _arrayValuefx25dWo, _arrayValuek6yhQh8]
		const _utcOffsetB9tH5dg = () => { return _returnValueJPiHpej };
		const _arrayValuexEIgu8s = "9RDDKCAvw";
		const _arrayValueQxhbChZ = false;
		const _arrayValueoLAspMw = undefined;
		const _returnValueZpLr5lk = [_arrayValuexEIgu8s, _arrayValueQxhbChZ, _arrayValueoLAspMw]
		const __tzmAIJeq1t = () => { return _returnValueZpLr5lk };
		const __ikAvkoKp = null;
		const _configsrZhgKC = {
			"utcOffset": _utcOffsetB9tH5dg,
		"_tzm": __tzmAIJeq1t,
		"_i": __ikAvkoKp
	}
		const _returnValuewxUMaD = await configFromObject(_configsrZhgKC)
	});
})