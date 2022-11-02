export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputgG6ghm0 = "6DqkSInhemBPF5MiIcdGomcKWKZkeSiepivkonDpTCYi9njuLHTga759vSk1ISAoMysVETMMU6hLH4Pyewq4mFmbLeRIRB";
		const _unitsYUM7k4P = null;
		const _returnValuesbMVkKr = await isSameOrBefore(_inputgG6ghm0, _unitsYUM7k4P)
	});
})