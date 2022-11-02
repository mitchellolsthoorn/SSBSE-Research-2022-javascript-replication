export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputEzc9xY = null;
		const _arrayValuetMXSh7H = undefined;
		const _arrayValueSJtf51M = true;
		const _arrayValueJ2JFb2L = null;
		const _unitsjAFSwM = [_arrayValuetMXSh7H, _arrayValueSJtf51M, _arrayValueJ2JFb2L]
		const _returnValueduuZHas = await isSameOrBefore(_inputEzc9xY, _unitsjAFSwM)
	});
})