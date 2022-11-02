export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromUi7gCW5 = true;
		const _toAHjIOBt = null;
		const _returnValuedpNkoK = 5.429517691545666;
		const _unitsNwLpzS = () => { return _returnValuedpNkoK };
		const _returnValueWMxh1H = {
		
	}
		const _inclusivityu0yRh2W = () => { return _returnValueWMxh1H };
		const _returnValueBpSEtjQ = await isBetween(_fromUi7gCW5, _toAHjIOBt, _unitsNwLpzS, _inclusivityu0yRh2W)
	});
})