export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _arrayValuelqRzhYo = 1.931162980001691;
		const _arrayValueGJM20RV = false;
		const _arrayValueNuv0nQI = null;
		const _arrayValuef7lsOaz = false;
		const _withoutSuffixAwvnAcL = [_arrayValuelqRzhYo, _arrayValueGJM20RV, _arrayValueNuv0nQI, _arrayValuef7lsOaz]
		const _returnValueN6skfh = await toNow(_withoutSuffixAwvnAcL)
	});
})