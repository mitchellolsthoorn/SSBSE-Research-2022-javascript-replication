export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValueZmc7UDl = null;
		const _arrayValueyv2rdIX = "ODYGgXBnh";
		const _arrayValueZ5Lev8j = undefined;
		const _returnValueyX5uc5N = [_arrayValueZmc7UDl, _arrayValueyv2rdIX, _arrayValueZ5Lev8j]
		const _isValideB3SAqz = () => { return _returnValueyX5uc5N };
		const _timeLFAc2Sc = {
			"isValid": _isValideB3SAqz
	}
		const _withoutSuffixC7jBF2d = -5.404554361008874;
		const _returnValueCOowF5d = await to(_timeLFAc2Sc, _withoutSuffixC7jBF2d)
	});
})