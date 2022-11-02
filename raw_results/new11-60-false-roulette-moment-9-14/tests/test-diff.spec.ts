export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueBdHMNpa = 9.656340384896978;
		const _arrayValuecyFDAXe = null;
		const _returnValuejHknwXr = undefined;
		const _arrayValueQIXaqEM = () => { return _returnValuejHknwXr };
		const _inputhS89Fdy = [_arrayValueBdHMNpa, _arrayValuecyFDAXe, _arrayValueQIXaqEM]
		const _unitsuoRyfQF = {
		
	}
		const _asFloatGHiVbQz = null;
		const _returnValueaKi2d2x = await diff(_inputhS89Fdy, _unitsuoRyfQF, _asFloatGHiVbQz)
	});
})