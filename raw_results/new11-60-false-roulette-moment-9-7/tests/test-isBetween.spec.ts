export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValueWWmHfYv = null;
		const _fromnrpcBs9 = [_arrayValueWWmHfYv]
		const _arrayValuejXZlQb = 6.759545706008435;
		const _arrayValuedLbcc7M = false;
		const _toU4pR1LG = [_arrayValuejXZlQb, _arrayValuedLbcc7M]
		const _unitsowRRmXI = undefined;
		const _inclusivityac9eJfn = "aNiQH7qo98xqlI";
		const _returnValuejr6uMS = await isBetween(_fromnrpcBs9, _toU4pR1LG, _unitsowRRmXI, _inclusivityac9eJfn)
	});
})