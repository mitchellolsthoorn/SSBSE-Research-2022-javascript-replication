export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputnTO6bER = true;
		const _unitsQNzzdpG = true;
		const _returnValueq21Kfj = await isSameOrBefore(_inputnTO6bER, _unitsQNzzdpG)
	});
})