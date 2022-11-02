export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValueR3i91JU = true;
		const _arrayValueOS0MlKJ = undefined;
		const _arrayValuerRyu6yn = 3.800401059472467;
		const _returnValueVeRj8Ln = -5.847314002630756;
		const _arrayValueSDPfcfM = () => { return _returnValueVeRj8Ln };
		const _arrayValuebqVmALg = null;
		const _arrayValue8ezMaE = {
		
	}
		const _arrayValuennnMwtI = [_arrayValueOS0MlKJ, _arrayValuerRyu6yn, _arrayValueSDPfcfM, _arrayValuebqVmALg, _arrayValue8ezMaE]
		const _arrayValuewi2MF44 = "fHjICzuLDgVz8nhtnz8SHhGxuQstFPNptm6gFp";
		const _inputXeciwmd = [_arrayValueR3i91JU, _arrayValuennnMwtI, _arrayValuewi2MF44]
		const _unitstcyXdfq = "7k8tzF1tpFXMRVwige7mvm25uzJUqsSQOyHRtQMNpIiqnHL4NfoEup6aJy";
		const _returnValueKHXl83c = await isAfter(_inputXeciwmd, _unitstcyXdfq)
	});

	it('test for isAfter', async () => {
		const _inputiYQvsMX = 5.537669735596381;
		const _units02oWcc = 4.893905345494989;
		const _returnValueOejlie = await isAfter(_inputiYQvsMX, _units02oWcc)
	});
})