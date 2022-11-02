export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixS1PnT3A = null;
		const _returnValueIGBhC62 = await fromNow(_withoutSuffixS1PnT3A)
	});
})