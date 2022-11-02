export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mTwS19Nq = "FSfRQGS5ekFRecuQdoev38qx8xoL7yzNZqSnVBdA7UicT";
		const _returnValued90n81 = await getParsingFlags(_mTwS19Nq)
	});
})