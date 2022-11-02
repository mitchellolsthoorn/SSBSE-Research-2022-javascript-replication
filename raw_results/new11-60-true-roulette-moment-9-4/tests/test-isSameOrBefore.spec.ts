export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValuea2J3f8 = true;
		const _inputKCD85qN = [_arrayValuea2J3f8]
		const _unitsSWEJpFD = -5.783742081643929;
		const _returnValuefLFZKVC = await isSameOrBefore(_inputKCD85qN, _unitsSWEJpFD)
	});
})