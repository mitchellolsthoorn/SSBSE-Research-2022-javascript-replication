export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const __isUTCeExF3Vm = 2.021296564340947;
		const __dUpfvCa3 = {
		
	}
		const _returnValuebGxXApa = "oDs39DH1r5GEPQBLv8RXQPv9t1ggavN0ST9dIhshIag7elRMTg5aToKHDewOhPrF76f9SiAIK";
		const _isValidvd9BqGT = () => { return _returnValuebGxXApa };
		const _localeDataVOScvt = false;
		const _returnValueaDDRRie = true;
		const _adduC6iRBm = () => { return _returnValueaDDRRie };
		const _mQztjxs = {
			"_isUTC": __isUTCeExF3Vm,
		"_d": __dUpfvCa3,
		"isValid": _isValidvd9BqGT,
		"localeData": _localeDataVOScvt,
		"add": _adduC6iRBm
	}
		const _returnValueRDJCvar = await isValid(_mQztjxs)
	});
})