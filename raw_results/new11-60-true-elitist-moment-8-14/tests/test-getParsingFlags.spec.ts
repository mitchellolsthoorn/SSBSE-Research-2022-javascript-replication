export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const __pf82oOMx = null;
		const _mOxdpxUU = {
			"_pf": __pf82oOMx
	}
		const _returnValueZ2SMTvA = await getParsingFlags(_mOxdpxUU)
	});

	it('test for getParsingFlags', async () => {
		const _mlBhLGci = "AYum76yKIgNCVHvy6fM9S7SpGVActl7kiv4XUOwSMorS0h8rQdklzEFLZAe8HVIwhS4Nnz2EwkG3rR";
		const _returnValueWDPGjPa = await getParsingFlags(_mlBhLGci)
	});
})