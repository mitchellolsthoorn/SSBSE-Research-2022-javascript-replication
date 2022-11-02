export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueDTQ9kHj = null;
		const _arrayValuejeoRpwy = 0.6740423955326733;
		const _arrayValueEI9jQvs = null;
		const _inputo2WZ1os = [_arrayValueDTQ9kHj, _arrayValuejeoRpwy, _arrayValueEI9jQvs]
		const _unitsRTcDdh4 = {
		
	}
		const _asFloatdgEMM8k = null;
		const _returnValueXVrN1AK = await diff(_inputo2WZ1os, _unitsRTcDdh4, _asFloatdgEMM8k)
	});
})