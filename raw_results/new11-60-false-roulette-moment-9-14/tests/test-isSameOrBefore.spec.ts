export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueZ8XtSHT = "5M0seunRSLPPvI4ozS1yTPJ7epTdhrKE5";
		const _arrayValueJQov8q = -3.3661298773901276;
		const _inputyWks2P = [_arrayValueZ8XtSHT, _arrayValueJQov8q]
		const _unitsbvjFzt = {
		
	}
		const _returnValuew7k3jcd = await isSameOrBefore(_inputyWks2P, _unitsbvjFzt)
	});
})