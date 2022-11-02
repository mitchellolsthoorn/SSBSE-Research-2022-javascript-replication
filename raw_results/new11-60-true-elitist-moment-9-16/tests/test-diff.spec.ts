export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValuejd8D6At = null;
		const _arrayValueJowR6vy = "DSOb9B64lAlYpTO";
		const _inputJyAhjRK = [_arrayValuejd8D6At, _arrayValueJowR6vy]
		const _unitsqDs28xB = {
		
	}
		const _asFloatQicdM6 = 5.1101376941905805;
		const _returnValuedKxASOJ = await diff(_inputJyAhjRK, _unitsqDs28xB, _asFloatQicdM6)
	});
})