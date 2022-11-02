export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeuQ0pZjF = false;
		const _arrayValueMixwWcg = 4.4503583910714255;
		const _arrayValuejnio3qB = 5.471365557643779;
		const _withoutSuffixi1cTFms = [_arrayValueMixwWcg, _arrayValuejnio3qB]
		const _returnValuewrVMKZB = await from(_timeuQ0pZjF, _withoutSuffixi1cTFms)
	});
})