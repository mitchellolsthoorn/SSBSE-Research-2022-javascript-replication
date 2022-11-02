export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputsc50R3g = 3.221393155497079;
		const _unitsPZbq76P = undefined;
		const _returnValueBfBhk6C = await isSameOrAfter(_inputsc50R3g, _unitsPZbq76P)
	});
})