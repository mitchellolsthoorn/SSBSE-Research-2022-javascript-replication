export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mR155Rji = "fAZEneYBhf";
		const _returnValuezsxiicP = await isValid(_mR155Rji)
	});

	it('test for isValid', async () => {
		const _returnValuemJH3ViI = false;
		const _arrayValueOhVB2Kr = () => { return _returnValuemJH3ViI };
		const _mMHEMNcG = [_arrayValueOhVB2Kr]
		const _returnValue3HsQay = await isValid(_mMHEMNcG)
	});
})