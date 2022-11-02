export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueFeiWiZr = "9muAUhbzr9mxc1m0KiDAHkmW";
		const _returnValueWylTLQT = () => { return _returnValueFeiWiZr };
		const _isValidDkE2kSM = () => { return _returnValueWylTLQT };
		const _momCALC2NX = {
			"isValid": _isValidDkE2kSM
	}
		const _unitxjTdEvC = -2.4788328102840325;
		const _returnValueyRRoYd = await get(_momCALC2NX, _unitxjTdEvC)
	});
})