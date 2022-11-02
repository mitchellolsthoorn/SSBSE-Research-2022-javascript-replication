export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputfmUz8qL = "RJr5gh5rua78Fsgl86WechPucKOKKLDo7XPEgyOjXZ";
		const _arrayValueOiXDprs = false;
		const _arrayValueTq7ZXIi = false;
		const _arrayValuefs3bkLN = "VHX65pMx7GDsYShPUzE7Tdq3dB7cVvLTYnZrNklY3T";
		const _unitsyL0pQ5d = [_arrayValueOiXDprs, _arrayValueTq7ZXIi, _arrayValuefs3bkLN]
		const _returnValueCxMX8Q = await isSameOrAfter(_inputfmUz8qL, _unitsyL0pQ5d)
	});
})