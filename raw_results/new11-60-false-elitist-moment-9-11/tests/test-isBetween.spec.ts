export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValueb6AVQe = null;
		const _arrayValuezSzvnGu = true;
		const _returnValueJXIrh2 = {
		
	}
		const _arrayValueg2V154y = () => { return _returnValueJXIrh2 };
		const _fromyu8GLBH = [_arrayValueb6AVQe, _arrayValuezSzvnGu, _arrayValueg2V154y]
		const _toaA3z5nQ = undefined;
		const _unitsgSQwwrT = -8.225016706319549;
		const _inclusivityhl2otgw = {
		
	}
		const _returnValuei8Pmi2r = await isBetween(_fromyu8GLBH, _toaA3z5nQ, _unitsgSQwwrT, _inclusivityhl2otgw)
	});
})