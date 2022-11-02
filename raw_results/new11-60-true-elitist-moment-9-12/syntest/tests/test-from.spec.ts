export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueG5ZBoFv = "rl4jIOa34H4wEJzpOyhJ9f0Rph4ztKTav4GtLO2ablq4vahQTKCieunuGbhflKzO";
		const _isValidc1mCf2A = () => { return _returnValueG5ZBoFv };
		const _timesogJq9Y = {
			"isValid": _isValidc1mCf2A
	}
		const _withoutSuffixbNFgKIG = "kakTOzkWIMb06xDuD3zFyjE2";
		const _returnValueOkGMTM = await from(_timesogJq9Y, _withoutSuffixbNFgKIG)
	});
})