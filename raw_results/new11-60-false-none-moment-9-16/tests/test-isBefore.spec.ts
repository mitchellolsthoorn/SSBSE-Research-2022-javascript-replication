export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputCkt11MB = false;
		const _arrayValueUwt8aOt = true;
		const _arrayValueIgvTlYY = undefined;
		const _arrayValuevhjn4By = undefined;
		const _arrayValued0P5WgG = [_arrayValueUwt8aOt, _arrayValueIgvTlYY, _arrayValuevhjn4By]
		const _arrayValueBn59o89 = false;
		const _unitsvXYUGaf = [_arrayValued0P5WgG, _arrayValueBn59o89]
		const _returnValuebADCHl3 = await isBefore(_inputCkt11MB, _unitsvXYUGaf)
	});
})