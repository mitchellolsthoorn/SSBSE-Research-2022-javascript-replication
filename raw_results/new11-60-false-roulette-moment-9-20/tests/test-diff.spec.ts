export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputPXTzZk = 8.10705025371987;
		const _unitsePf84Mp = {
		
	}
		const _asFloatG6QDC6 = -2.7368197171325033;
		const _returnValuend93hKD = await diff(_inputPXTzZk, _unitsePf84Mp, _asFloatG6QDC6)
	});
})