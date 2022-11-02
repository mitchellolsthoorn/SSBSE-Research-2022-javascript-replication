export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueYYvRPqy = 6.669233765746434;
		const _timeMEROPMU = () => { return _returnValueYYvRPqy };
		const _arrayValueK2pRYs4 = undefined;
		const _returnValuepEgqrAk = [_arrayValueK2pRYs4]
		const _withoutSuffixDAkhRHq = () => { return _returnValuepEgqrAk };
		const _returnValueRaApa6y = await to(_timeMEROPMU, _withoutSuffixDAkhRHq)
	});
})