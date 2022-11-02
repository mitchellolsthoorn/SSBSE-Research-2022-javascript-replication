export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputuEDbEQP = -3.436143499902097;
		const _unitsMQlmE13 = false;
		const _returnValuekNO2mEz = await isSameOrBefore(_inputuEDbEQP, _unitsMQlmE13)
	});
})