export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromh2iZjE7 = 8.229965288975045;
		const _toKQvPuPX = true;
		const _unitsN52JFO8 = null;
		const _inclusivityh6krdfz = {
		
	}
		const _returnValuejQguWLd = await isBetween(_fromh2iZjE7, _toKQvPuPX, _unitsN52JFO8, _inclusivityh6krdfz)
	});
})