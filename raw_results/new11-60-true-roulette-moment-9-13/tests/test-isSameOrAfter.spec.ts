export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValueZp0gpH = -9.978335169003087;
		const _arrayValueFgnyhZb = undefined;
		const _inputFYV2YcQ = [_arrayValueZp0gpH, _arrayValueFgnyhZb]
		const _unitstiRIbI = undefined;
		const _returnValueQDnQBG = await isSameOrAfter(_inputFYV2YcQ, _unitstiRIbI)
	});
})