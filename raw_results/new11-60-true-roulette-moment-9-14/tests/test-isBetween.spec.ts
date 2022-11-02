export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValue4UMUXu = undefined;
		const _arrayValueg1QKrF = 5.55380409280853;
		const _arrayValueSnO1qjD = [_arrayValueg1QKrF]
		const _fromgQxlac = [_arrayValue4UMUXu, _arrayValueSnO1qjD]
		const _toEDVBbwq = "N3OITqHR1yKPZF6WQUbBGXVPfgSXcvwNIyRYGhObHILYnuAxfKWNA4vd";
		const _unitsiZYmzO = undefined;
		const _inclusivityz3HtsOy = null;
		const _returnValuewiG5B52 = await isBetween(_fromgQxlac, _toEDVBbwq, _unitsiZYmzO, _inclusivityz3HtsOy)
	});
})