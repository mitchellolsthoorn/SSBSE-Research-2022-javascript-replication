export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixCR9kecQ = "kdNCmpByJyEqgU5H2UyPPqSMwD829iJmxEiIbSxvOIUCmgGEKU8Zflf9lfHMvrNvMe3t5YL3hz63gF";
		const _returnValueKljW0y = await fromNow(_withoutSuffixCR9kecQ)
	});
})