export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValueFhsX4qy = true;
		const _arrayValuexvSRoJR = true;
		const _returnValueQxGlsEF = [_arrayValueFhsX4qy, _arrayValuexvSRoJR]
		const _isValidPW7W8yC = () => { return _returnValueQxGlsEF };
		const _timelAxxmt3 = {
			"isValid": _isValidPW7W8yC
	}
		const _withoutSuffixXHC5TJb = -5.318722589673476;
		const _returnValuepEekrax = await to(_timelAxxmt3, _withoutSuffixXHC5TJb)
	});
})