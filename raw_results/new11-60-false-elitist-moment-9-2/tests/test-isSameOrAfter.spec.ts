export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputZrtkjvk = true;
		const _unitsC5UVprq = "Y3M9JXosjvs5FvDjYUUwvrbDA3T";
		const _returnValuehBOTcRY = await isSameOrAfter(_inputZrtkjvk, _unitsC5UVprq)
	});
})