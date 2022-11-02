export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuefM5IL5 = null;
		const _isValidKBtBEb = () => { return _returnValuefM5IL5 };
		const _timeMXTkiXI = {
			"isValid": _isValidKBtBEb
	}
		const _withoutSuffixCaAHyUV = -8.70545776733909;
		const _returnValueACLzyth = await to(_timeMXTkiXI, _withoutSuffixCaAHyUV)
	});
})