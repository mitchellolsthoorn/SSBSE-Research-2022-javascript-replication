export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputJSthS5z = {
		
	}
		const _arrayValueJpQD2qf = 3.852306322261555;
		const _arrayValueu0OGJ9w = undefined;
		const _unitscGr6XPw = [_arrayValueJpQD2qf, _arrayValueu0OGJ9w]
		const _returnValueiKrS1oY = await isSameOrBefore(_inputJSthS5z, _unitscGr6XPw)
	});
})