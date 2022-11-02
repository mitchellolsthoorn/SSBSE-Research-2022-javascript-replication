export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixMOC16f = 8.72116665100523;
		const _returnValueBBYneSG = await toNow(_withoutSuffixMOC16f)
	});
})