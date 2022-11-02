export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromuuW8rXZ = 4.586030399421743;
		const _toMUw4NM0 = -4.577141747705113;
		const _units0jTx0W = 2.444393458909513;
		const _inclusivity4eMnbt = {
		
	}
		const _returnValueaTKT8rg = await isBetween(_fromuuW8rXZ, _toMUw4NM0, _units0jTx0W, _inclusivity4eMnbt)
	});
})