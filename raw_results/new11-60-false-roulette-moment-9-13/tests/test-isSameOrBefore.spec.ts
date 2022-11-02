export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputvCLXXz3 = "lNBW5wFumOezxGcIUYd7PLwpGy9VDVT7mw22NOm5qRlKxT5UjQv";
		const _unitsvGAwbn7 = true;
		const _returnValueFpuSfrs = await isSameOrBefore(_inputvCLXXz3, _unitsvGAwbn7)
	});
})