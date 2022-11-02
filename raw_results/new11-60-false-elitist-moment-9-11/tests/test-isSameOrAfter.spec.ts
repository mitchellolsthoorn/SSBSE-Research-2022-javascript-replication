export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputzI4JEU = null;
		const _arrayValuefCAae0N = true;
		const _arrayValueWFsgnRt = false;
		const _arrayValuei8SKvER = "Nbod3VbbeHD";
		const _arrayValuea7NaPVV = [_arrayValuefCAae0N, _arrayValueWFsgnRt, _arrayValuei8SKvER]
		const _arrayValuewd2izsB = undefined;
		const _arrayValueutZdZIZ = undefined;
		const _returnValuexInjk6q = undefined;
		const _arrayValueOTctlh = () => { return _returnValuexInjk6q };
		const _arrayValuelSWl5H1 = "";
		const _arrayValueuX8LjFO = [_arrayValueutZdZIZ, _arrayValueOTctlh, _arrayValuelSWl5H1]
		const _unitsJdPmFgX = [_arrayValuea7NaPVV, _arrayValuewd2izsB, _arrayValueuX8LjFO]
		const _returnValuemZL2Vq = await isSameOrAfter(_inputzI4JEU, _unitsJdPmFgX)
	});
})