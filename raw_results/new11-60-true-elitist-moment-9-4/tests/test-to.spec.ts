export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuexA2YCdO = false;
		const _isValidKrYCoJm = () => { return _returnValuexA2YCdO };
		const _timesnIRLlC = {
			"isValid": _isValidKrYCoJm
	}
		const _arrayValueqqZcXFa = null;
		const _arrayValueLTKfZQr = -5.047197849169967;
		const _arrayValuedZ8yj0O = [_arrayValueLTKfZQr]
		const _arrayValuetHwb3Hy = null;
		const _withoutSuffixMdXmLSn = [_arrayValueqqZcXFa, _arrayValuedZ8yj0O, _arrayValuetHwb3Hy]
		const _returnValueh2uMEX = await to(_timesnIRLlC, _withoutSuffixMdXmLSn)
	});
})