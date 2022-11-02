export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputnyZZGm = "uBzCQPGZawbXgrSoNUpLPxhADFDaTHh4SEWvCZaDo8lqEjfbcrn4XB";
		const _unitstf4jFAW = {
		
	}
		const _returnValueYI67qCk = await isSame(_inputnyZZGm, _unitstf4jFAW)
	});

	it('test for isSame', async () => {
		const _inputFqZCesz = null;
		const _unitsDeJET3O = {
		
	}
		const _returnValuesmI3sng = await isSame(_inputFqZCesz, _unitsDeJET3O)
	});
})