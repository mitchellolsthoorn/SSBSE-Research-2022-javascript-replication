export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputg3Nbt6d = false;
		const _returnValueJTywwa = "7M3FgDjJWN623HnBE6t";
		const _arrayValueOcp7XwO = () => { return _returnValueJTywwa };
		const _arrayValueHg2Jk8s = null;
		const _unitsvYJhfRi = [_arrayValueOcp7XwO, _arrayValueHg2Jk8s]
		const _returnValueTD4n8z = await isSameOrAfter(_inputg3Nbt6d, _unitsvYJhfRi)
	});
})