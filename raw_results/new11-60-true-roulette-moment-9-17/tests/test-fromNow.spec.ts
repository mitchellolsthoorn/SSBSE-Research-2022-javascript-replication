export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixWYdJVxt = "JV9JEx1ziDSEyr0dHtIjtz4ljKzAuFjgkY3Va4vRJoD";
		const _returnValueQFK2qCF = await fromNow(_withoutSuffixWYdJVxt)
	});
})