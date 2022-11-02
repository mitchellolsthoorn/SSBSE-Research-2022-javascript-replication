export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputEqOpJb0 = "CYBdgTfN3fDipGKMkz5lLnsIQj6GjUAwCRISuLdH5vy8v";
		const _unitsqRevAyq = {
		
	}
		const _asFloatAa9H1WJ = false;
		const _returnValueiJ9Rs8L = await diff(_inputEqOpJb0, _unitsqRevAyq, _asFloatAa9H1WJ)
	});
})