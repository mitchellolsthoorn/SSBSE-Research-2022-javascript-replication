export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueRBW46aN = undefined;
		const _arrayValueizCApoS = null;
		const _arrayValueZcksjKN = true;
		const _returnValueVlBz1Qi = {
		
	}
		const _arrayValuelZI3pyg = () => { return _returnValueVlBz1Qi };
		const _arrayValuel1vJ6f8 = [_arrayValueZcksjKN, _arrayValuelZI3pyg]
		const _inputfrJ6bh = [_arrayValueRBW46aN, _arrayValueizCApoS, _arrayValuel1vJ6f8]
		const _unitskha0EH4 = null;
		const _returnValuereXq3f = await isSame(_inputfrJ6bh, _unitskha0EH4)
	});

	it('test for isSame', async () => {
		const _inputLpjQzVs = null;
		const _arrayValueasRuiFy = "Mi";
		const _arrayValueYx4lrBg = -4.7660964751964165;
		const _arrayValueu8yo7ZX = [_arrayValueYx4lrBg]
		const _unitsGzrZixg = [_arrayValueasRuiFy, _arrayValueu8yo7ZX]
		const _returnValueSuPi4g7 = await isSame(_inputLpjQzVs, _unitsGzrZixg)
	});
})