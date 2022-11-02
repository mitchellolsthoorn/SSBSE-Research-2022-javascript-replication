export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputpFXyuaS = false;
		const _returnValueGt8aAqW = -4.04763770883993;
		const _unitsQu8IDAP = () => { return _returnValueGt8aAqW };
		const _returnValueuSXBmxq = await isSameOrBefore(_inputpFXyuaS, _unitsQu8IDAP)
	});
})