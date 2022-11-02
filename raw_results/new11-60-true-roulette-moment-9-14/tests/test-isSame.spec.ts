export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputyfhYOe6 = "PvJ3JCfB83VfC9CzC5UpNz4e5sKuxPRsxZ9fSI4CNChKOKWQOcslWdOu9MUbxiVqjiWURCm46xrEtOWzHu1eu5zAo6cMg";
		const _unitsn9Q9J5L = "XJhFLFyHE8cRfr6Vw7XHE8mHHMxNn936QutXXK2ahh2qrLex7ieHybbKTGT9L7hEjzCkz9BSZbGJS0G2BngfxB";
		const _returnValueBd44pde = await isSame(_inputyfhYOe6, _unitsn9Q9J5L)
	});

	it('test for isSame', async () => {
		const _arrayValueA6WQheJ = undefined;
		const _arrayValueweQH6AU = []
		const _arrayValueK0u6BUW = true;
		const _arrayValuelEyFce8 = undefined;
		const _returnValueZIUyu2h = [_arrayValueA6WQheJ, _arrayValueweQH6AU, _arrayValueK0u6BUW, _arrayValuelEyFce8]
		const _inputSNpVEVT = () => { return _returnValueZIUyu2h };
		const _unitsE3SBmm8 = {
		
	}
		const _returnValueQhi5KGT = await isSame(_inputSNpVEVT, _unitsE3SBmm8)
	});
})