export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputvykbArn = false;
		const _unitspW8nKdA = null;
		const _returnValueQCYzBa = await isSameOrBefore(_inputvykbArn, _unitspW8nKdA)
	});
})