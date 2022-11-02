export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputuUZjCz = "ZfRQEfcdujLRHTF8iV56tblBPBlhU8ySp8QKV0nf";
		const _arrayValueWPg1MhN = null;
		const _arrayValueUgvjHNi = "czn8TtXuSBsbymhzASHneZNGs55uM4gSqKKQdUkpsT49qPP9oJcS8yUxOuYcqN3Cv";
		const _arrayValueF6in40 = null;
		const _unitsvgio6M9 = [_arrayValueWPg1MhN, _arrayValueUgvjHNi, _arrayValueF6in40]
		const _returnValueq9JOfdE = await isSame(_inputuUZjCz, _unitsvgio6M9)
	});

	it('test for isSame', async () => {
		const _input14zKzq = true;
		const _unitsksKCqm = {
		
	}
		const _returnValue281ISF = await isSame(_input14zKzq, _unitsksKCqm)
	});
})