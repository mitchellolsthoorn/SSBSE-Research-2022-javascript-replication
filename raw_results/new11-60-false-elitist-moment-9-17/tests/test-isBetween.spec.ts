export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValueTBKJ491 = "n4OC8Hw7ItjBgiWwhrg2O3BEurXuTQzpfoArAxASGUt9kKTkxruExAnFLEfud4sAqJ5mRSe";
		const _arrayValuelXfocOP = undefined;
		const _arrayValueMTdJIo0 = undefined;
		const _arrayValuek13aOEk = [_arrayValueTBKJ491, _arrayValuelXfocOP, _arrayValueMTdJIo0]
		const _fromUGERB6o = [_arrayValuek13aOEk]
		const _tojZiSL2y = -8.881765533417994;
		const _unitsiWtV8zW = true;
		const _inclusivityHJkb0ZW = {
		
	}
		const _returnValueexbFeU1 = await isBetween(_fromUGERB6o, _tojZiSL2y, _unitsiWtV8zW, _inclusivityHJkb0ZW)
	});
})