export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputVEnJ3aA = null;
		const _unitsDH1zYUL = "2";
		const _returnValueLYcUvRK = await isSame(_inputVEnJ3aA, _unitsDH1zYUL)
	});
})