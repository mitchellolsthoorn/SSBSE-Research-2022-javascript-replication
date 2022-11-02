export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueNGt0nHn = true;
		const _isValidi6rs1S0 = () => { return _returnValueNGt0nHn };
		const _arrayValuekJiFYZa = undefined;
		const _arrayValue0VsHfh = undefined;
		const _returnValuetASCjCF = [_arrayValuekJiFYZa, _arrayValue0VsHfh]
		const _utcOffseteQSKQ8g = () => { return _returnValuetASCjCF };
		const _timeCxtomQh = {
			"isValid": _isValidi6rs1S0,
		"utcOffset": _utcOffseteQSKQ8g
	}
		const _withoutSuffixz6X04CO = null;
		const _returnValueXcTsT2I = await from(_timeCxtomQh, _withoutSuffixz6X04CO)
	});
})