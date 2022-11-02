export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputgEfIxZG = undefined;
		const _arrayValueyqUdcg8 = undefined;
		const _arrayValuezTxqH9X = -6.084547947503735;
		const _arrayValueujU5kq2 = []
		const _unitsUb13TdV = [_arrayValueyqUdcg8, _arrayValuezTxqH9X, _arrayValueujU5kq2]
		const _returnValueUkb0En = await isSameOrBefore(_inputgEfIxZG, _unitsUb13TdV)
	});
})