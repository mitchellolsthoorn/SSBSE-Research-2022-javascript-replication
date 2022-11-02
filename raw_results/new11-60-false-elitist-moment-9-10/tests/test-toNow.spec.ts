export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _arrayValueSPY9PYv = undefined;
		const _arrayValuejwI69M = null;
		const _arrayValueTkpgZGZ = "nAEfLEBXIsRqSpeSmJyx8eQg2DuIkYhAxrYHucTF9orMEOFaq13PBA9KHLk4bi";
		const _arrayValueAv57p8b = [_arrayValueTkpgZGZ]
		const _withoutSuffixvyfSd3k = [_arrayValueSPY9PYv, _arrayValuejwI69M, _arrayValueAv57p8b]
		const _returnValueLGNcMyy = await toNow(_withoutSuffixvyfSd3k)
	});
})