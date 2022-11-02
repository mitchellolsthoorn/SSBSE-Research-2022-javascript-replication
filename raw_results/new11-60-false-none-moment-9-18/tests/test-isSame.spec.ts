export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueITax5lQ = "u2fiGNhcdIXKZeRhh4QGCn3b06MDUhCeDOmJIbQ3IIsJWEkAN6YrFG1gUf4NBKh";
		const _arrayValuebb79kam = undefined;
		const _returnValuedPZ4clm = true;
		const _arrayValueEaIJgKA = () => { return _returnValuedPZ4clm };
		const _arrayValuehD0DlNF = 9.823212736702626;
		const _arrayValuewGsCHW1 = [_arrayValueEaIJgKA, _arrayValuehD0DlNF]
		const _inputjXJwvHI = [_arrayValueITax5lQ, _arrayValuebb79kam, _arrayValuewGsCHW1]
		const _unitsSaRuut7 = null;
		const _returnValueRAMNLlN = await isSame(_inputjXJwvHI, _unitsSaRuut7)
	});

	it('test for isSame', async () => {
		const _inputr7uohCb = true;
		const _unitsSb54pfo = "QlqyNm3UkufXyvhwbpRn";
		const _returnValuefBr2eSF = await isSame(_inputr7uohCb, _unitsSb54pfo)
	});
})