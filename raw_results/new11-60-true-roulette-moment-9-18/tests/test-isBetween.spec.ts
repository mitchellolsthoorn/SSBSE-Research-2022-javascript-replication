export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromHL2RVZA = 8.781740856384342;
		const _toP6kfALZ = undefined;
		const _arrayValuenZ5zlwG = undefined;
		const _arrayValuelRyDNFX = undefined;
		const _unitswaBPDgB = [_arrayValuenZ5zlwG, _arrayValuelRyDNFX]
		const _inclusivityuatGFy7 = {
		
	}
		const _returnValueU09YuxQ = await isBetween(_fromHL2RVZA, _toP6kfALZ, _unitswaBPDgB, _inclusivityuatGFy7)
	});
})