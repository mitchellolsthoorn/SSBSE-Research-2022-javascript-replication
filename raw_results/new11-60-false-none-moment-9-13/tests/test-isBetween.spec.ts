export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _returnValueEE1o3qU = undefined;
		const _fromBweo26I = () => { return _returnValueEE1o3qU };
		const _toeROi1Rm = undefined;
		const _unitskbCL9gM = {
		
	}
		const _inclusivityStIa5ti = -7.655228345719793;
		const _returnValueHQTDW7l = await isBetween(_fromBweo26I, _toeROi1Rm, _unitskbCL9gM, _inclusivityStIa5ti)
	});
})