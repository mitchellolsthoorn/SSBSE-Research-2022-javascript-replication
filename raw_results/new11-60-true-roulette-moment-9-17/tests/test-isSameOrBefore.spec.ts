export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputijyabF = "aFBYXJ4V8pCbzg6t";
		const _unitsjmG1EdC = undefined;
		const _returnValuenKL6kL2 = await isSameOrBefore(_inputijyabF, _unitsjmG1EdC)
	});
})