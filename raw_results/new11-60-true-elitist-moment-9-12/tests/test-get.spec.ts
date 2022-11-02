export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValuemvFmKPh = true;
		const _arrayValueUow2gVp = -4.012744809162649;
		const _returnValueCsGjcC6 = [_arrayValuemvFmKPh, _arrayValueUow2gVp]
		const _isValidUCK5nAT = () => { return _returnValueCsGjcC6 };
		const _mom9bn923 = {
			"isValid": _isValidUCK5nAT
	}
		const _unitX204Kpd = -3.544237501031324;
		const _returnValueaTgUNPE = await get(_mom9bn923, _unitX204Kpd)
	});
})