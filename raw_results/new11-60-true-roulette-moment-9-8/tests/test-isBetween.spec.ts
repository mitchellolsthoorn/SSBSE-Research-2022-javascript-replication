export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromoSnhH1S = 5.623479168559381;
		const _toPejJDWV = undefined;
		const _unitsAvrBUaj = []
		const _returnValueS4XFYvb = "7vcZmf5QnCoWEDNAAi6JVpVrgfW8uFQDYOAOb7aGtZxaHCDCNWtdEytL64qn9Q1I9RGjajOB59KQVMt9";
		const _inclusivityaIX1aMZ = () => { return _returnValueS4XFYvb };
		const _returnValue3AbgtS = await isBetween(_fromoSnhH1S, _toPejJDWV, _unitsAvrBUaj, _inclusivityaIX1aMZ)
	});
})