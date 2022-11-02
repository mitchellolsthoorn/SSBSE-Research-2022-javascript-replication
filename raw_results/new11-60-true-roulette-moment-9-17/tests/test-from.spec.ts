export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueTSbdpjD = false;
		const _isValidYWpx0Zi = () => { return _returnValueTSbdpjD };
		const _timeq12qqLP = {
			"isValid": _isValidYWpx0Zi
	}
		const _withoutSuffixsFspea = "1M9cv4fxtiuXtZ6QF4ywHLMk1B97qArDvNvaokFbPd5OSGG8qiMc63EgiAZPPdrmSoIc";
		const _returnValueCiZ6kOj = await from(_timeq12qqLP, _withoutSuffixsFspea)
	});
})