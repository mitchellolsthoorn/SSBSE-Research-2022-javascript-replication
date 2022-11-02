export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputs8Sw4bb = 6.847945851070673;
		const _unitsLpjHcJr = undefined;
		const _returnValueim5yRxM = await isSameOrBefore(_inputs8Sw4bb, _unitsLpjHcJr)
	});
})