export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const __pf6V982c = null;
		const _mYkrnodr = {
			"_pf": __pf6V982c
	}
		const _returnValueEYH3mOZ = await getParsingFlags(_mYkrnodr)
	});

	it('test for getParsingFlags', async () => {
		const _mc96mwBX = -9.290603931861261;
		const _returnValueaVB7HgO = await getParsingFlags(_mc96mwBX)
	});
})