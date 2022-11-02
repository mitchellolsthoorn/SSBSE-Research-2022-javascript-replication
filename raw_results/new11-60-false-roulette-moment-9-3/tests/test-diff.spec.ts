export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputOmHBhwx = "m49UScqIlRDEleVtHrnD0rzWvzCcHPxQ";
		const _unitseW27Vn = undefined;
		const _asFloatCgSTHqw = undefined;
		const _returnValueUnWS5KH = await diff(_inputOmHBhwx, _unitseW27Vn, _asFloatCgSTHqw)
	});
})