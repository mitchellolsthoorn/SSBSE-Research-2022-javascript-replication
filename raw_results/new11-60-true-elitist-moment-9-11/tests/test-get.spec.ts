export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueoAYl3wj = "hIVL2pZzFYXevvgIRLddkKv7YRydySU887E5ZuQEOSWCTLFeFEisUNRHCNV3nAh6nxqMTUPXgskCfxhiRrEwC6adShYF";
		const _isValidMQkuVYX = () => { return _returnValueoAYl3wj };
		const _momnT8mYPT = {
			"isValid": _isValidMQkuVYX
	}
		const _unitECoB2ZQ = -6.854909738139542;
		const _returnValued8Rr3mR = await get(_momnT8mYPT, _unitECoB2ZQ)
	});
})