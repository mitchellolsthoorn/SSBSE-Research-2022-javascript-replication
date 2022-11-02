export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _returnValueY1GHQPU = false;
		const _fromuzJUBJd = () => { return _returnValueY1GHQPU };
		const _toHamDjpz = undefined;
		const _units0U5CNe = -5.1455856890163;
		const _inclusivityvv9UcQP = {
		
	}
		const _returnValueo2NMW8k = await isBetween(_fromuzJUBJd, _toHamDjpz, _units0U5CNe, _inclusivityvv9UcQP)
	});
})