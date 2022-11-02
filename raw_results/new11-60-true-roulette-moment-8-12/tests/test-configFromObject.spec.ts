export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputDq0pZFJ = "4ApjxCRoCk6UZWJ8EAgWs";
		const _formatEsTeK3s = null;
		const _localenFlWgvW = undefined;
		const _isUTCUoazwE9 = {
		
	}
		const _strictHCsGYD2 = null;
		const __iyE4HVMu = null;
		const __fwCQrKXy = 0.7722704741796438;
		const _returnValuecOuIpmg = true;
		const _arrayValuezpmQmLE = () => { return _returnValuecOuIpmg };
		const __localegCpkO5p = [_arrayValuezpmQmLE]
		const __isUTCUhYQrJK = "Cq9JqXObRqw8p4KQ7biKr7aGNuCWFlltnDamQ7I5G37pZ91z";
		const __strictwbif95P = true;
		const _configVDzF2Gs = {
			"input": _inputDq0pZFJ,
		"format": _formatEsTeK3s,
		"locale": _localenFlWgvW,
		"isUTC": _isUTCUoazwE9,
		"strict": _strictHCsGYD2,
		"_i": __iyE4HVMu,
		"_f": __fwCQrKXy,
		"_locale": __localegCpkO5p,
		"_isUTC": __isUTCUhYQrJK,
		"_strict": __strictwbif95P
	}
		const _returnValuedMBa3CH = await configFromObject(_configVDzF2Gs)
	});
})