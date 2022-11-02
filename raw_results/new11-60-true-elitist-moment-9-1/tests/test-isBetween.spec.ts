export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromiNBFRh = false;
		const _returnValueP63aBV = true;
		const _toG46e3tV = () => { return _returnValueP63aBV };
		const _unitsG1whxk = {
		
	}
		const _inclusivityVsCSWYq = {
		
	}
		const _returnValueLxNfRQC = await isBetween(_fromiNBFRh, _toG46e3tV, _unitsG1whxk, _inclusivityVsCSWYq)
	});
})