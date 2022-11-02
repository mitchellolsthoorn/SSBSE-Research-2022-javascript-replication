export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValueMntrXft = -4.546959740459124;
		const _withoutSuffixJbfjZv = () => { return _returnValueMntrXft };
		const _returnValuewWyQMGT = await fromNow(_withoutSuffixJbfjZv)
	});
})