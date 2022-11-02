export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixqWcPSyS = "132V8mwZynvQQnsQqYKdmBzs8o6XYiE3zd6KhGidguNRb9H3m26etIgRNQJW6aHaFCLgx3QHSAaOiTKefZXy9JW4a";
		const _returnValuexsNiR2e = await toNow(_withoutSuffixqWcPSyS)
	});
})