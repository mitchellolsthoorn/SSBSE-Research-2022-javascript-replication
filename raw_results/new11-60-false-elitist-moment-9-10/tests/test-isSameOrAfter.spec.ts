export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputIyQv8fq = true;
		const _arrayValueRfjVX1w = undefined;
		const _arrayValuebqytrwX = "X1UqqtJGFnx1hKClu4OZ34jlQZoC8iXbAhzoTxHn1OzztNPKifAGMXRBHyobbqCEJowjQwt2zRcn";
		const _arrayValuetIIvFVU = {
		
	}
		const _unitsgQAwvDw = [_arrayValueRfjVX1w, _arrayValuebqytrwX, _arrayValuetIIvFVU]
		const _returnValueSCjt6Ey = await isSameOrAfter(_inputIyQv8fq, _unitsgQAwvDw)
	});
})