export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputpnZGud8 = undefined;
		const _unitsRmzGiNt = null;
		const _returnValueftpq8YE = await isSame(_inputpnZGud8, _unitsRmzGiNt)
	});

	it('test for isSame', async () => {
		const _arrayValueIV4pq6 = undefined;
		const _arrayValuegqyGs02 = 3.2689486941380697;
		const _arrayValueBhDSOxk = 4.100590580848229;
		const _returnValueZxkezAJ = [_arrayValueIV4pq6, _arrayValuegqyGs02, _arrayValueBhDSOxk]
		const _inputaRm8xMK = () => { return _returnValueZxkezAJ };
		const _unitslAvpFsj = []
		const _returnValueYbwrzXx = await isSame(_inputaRm8xMK, _unitslAvpFsj)
	});
})