export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputRkYg8YW = "A4YK9hoeIkyUkgl";
		const _unitspOw8xm = "nSgU";
		const _returnValuePoDeeS = await isSameOrBefore(_inputRkYg8YW, _unitspOw8xm)
	});
})