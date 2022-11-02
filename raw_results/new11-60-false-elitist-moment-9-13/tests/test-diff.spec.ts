export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputXppbHh2 = -3.152871968529027;
		const _unitsAcDkDLp = {
		
	}
		const _returnValueQ4x39K = null;
		const _asFloatHMzJpKL = () => { return _returnValueQ4x39K };
		const _returnValueVhDZiYK = await diff(_inputXppbHh2, _unitsAcDkDLp, _asFloatHMzJpKL)
	});
})