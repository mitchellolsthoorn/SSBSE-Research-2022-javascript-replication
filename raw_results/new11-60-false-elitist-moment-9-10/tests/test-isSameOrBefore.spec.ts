export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputNG8enAk = -4.255043186203737;
		const _unitsKsYrNr = undefined;
		const _returnValuejQtC1C2 = await isSameOrBefore(_inputNG8enAk, _unitsKsYrNr)
	});
})