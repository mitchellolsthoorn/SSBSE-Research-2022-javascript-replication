export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValueZkcf7O = false;
		const _withoutSuffixVJ40473 = () => { return _returnValueZkcf7O };
		const _returnValuevZfVD2J = await fromNow(_withoutSuffixVJ40473)
	});
})