export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueJcPl51Y = "gtfldkXWsLT5";
		const _isValidWQjddxT = () => { return _returnValueJcPl51Y };
		const _timeEkdrmWC = {
			"isValid": _isValidWQjddxT
	}
		const _withoutSuffixJWfOIEi = undefined;
		const _returnValueWXSMRtW = await from(_timeEkdrmWC, _withoutSuffixJWfOIEi)
	});
})