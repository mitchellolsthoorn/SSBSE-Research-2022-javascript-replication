export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuea8dTUq = null;
		const _isValidbQKSWkk = () => { return _returnValuea8dTUq };
		const _timefLkrBO9 = {
			"isValid": _isValidbQKSWkk
	}
		const _withoutSuffixSlh42Y6 = {
		
	}
		const _returnValuemvmU4ax = await from(_timefLkrBO9, _withoutSuffixSlh42Y6)
	});
})