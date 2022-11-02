export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueEG7VeU2 = "D5GEtmUyzz7Ll1psV81Is2WCSJ6nvKUfvA2GNWhBlA7QyklsScV2ZPri";
		const _isValiddspOl2B = () => { return _returnValueEG7VeU2 };
		const _timeE2P09Qo = {
			"isValid": _isValiddspOl2B
	}
		const _withoutSuffixMhe3gXm = []
		const _returnValuenxCSbuK = await from(_timeE2P09Qo, _withoutSuffixMhe3gXm)
	});
})