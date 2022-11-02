export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromnWjo6JI = {
		
	}
		const _arrayValueTHd7LEj = -8.850544629647507;
		const _arrayValueEhbzNSH = [_arrayValueTHd7LEj]
		const _arrayValuehsygMHw = true;
		const _arrayValueMexQj8 = undefined;
		const _tonoZ3ysu = [_arrayValueEhbzNSH, _arrayValuehsygMHw, _arrayValueMexQj8]
		const _unitsP2DmAJ = "2yHGHKAkUkXFyQLxoqnVRN0ie9GDHg55bcEVs";
		const _inclusivityd4itS9l = "1wNPyDsy4";
		const _returnValueGMcAZZ = await isBetween(_fromnWjo6JI, _tonoZ3ysu, _unitsP2DmAJ, _inclusivityd4itS9l)
	});
})