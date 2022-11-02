export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromzb7gPpd = undefined;
		const _arrayValueVlyS89G = null;
		const _arrayValuetWkSSw7 = 1.758644490635639;
		const _arrayValueOSl5wcl = [_arrayValueVlyS89G, _arrayValuetWkSSw7]
		const _arrayValuesji88xf = null;
		const _toyKZtGYS = [_arrayValueOSl5wcl, _arrayValuesji88xf]
		const _unitslzbWjr9 = {
		
	}
		const _returnValuetvjEGKS = true;
		const _arrayValues7sqgjE = () => { return _returnValuetvjEGKS };
		const _arrayValuelh8uZkM = undefined;
		const _returnValuempMDOKy = -5.0443904011474086;
		const _arrayValuedgFRdlK = () => { return _returnValuempMDOKy };
		const _arrayValueQzoKlj = [_arrayValuelh8uZkM, _arrayValuedgFRdlK]
		const _arrayValueHRQnnPV = "4ILEyfWgzEYXf1gQgncjuJhoqOZnv8";
		const _returnValuekoRKEn8 = [_arrayValues7sqgjE, _arrayValueQzoKlj, _arrayValueHRQnnPV]
		const _inclusivityOQ9KJe4 = () => { return _returnValuekoRKEn8 };
		const _returnValuefSqWSNc = await isBetween(_fromzb7gPpd, _toyKZtGYS, _unitslzbWjr9, _inclusivityOQ9KJe4)
	});
})