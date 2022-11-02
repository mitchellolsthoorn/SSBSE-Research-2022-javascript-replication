export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromQ7I3Uv = 9.331278724613902;
		const _toYhefMS = 7.991159671878524;
		const _unitsv25MNnh = null;
		const _returnValueVFMe3yd = "Er3s2rcAfY2eQKv8rQGaq5nQbqgQobuJSQuwP3rzEOqsY6PRcCAaeMryqQbHXY2gaLb9eNVWdXpu5le6n3W81eWop";
		const _inclusivitypahUmgw = () => { return _returnValueVFMe3yd };
		const _returnValueGyDU04 = await isBetween(_fromQ7I3Uv, _toYhefMS, _unitsv25MNnh, _inclusivitypahUmgw)
	});
})