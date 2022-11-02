export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const __pfTbJk0Jo = null;
		const _mHXJexS = {
			"_pf": __pfTbJk0Jo
	}
		const _returnValueLGNuv9W = await getParsingFlags(_mHXJexS)
	});

	it('test for getParsingFlags', async () => {
		const _mmjVl4bq = null;
		const _returnValueB2dODEr = await getParsingFlags(_mmjVl4bq)
	});
})