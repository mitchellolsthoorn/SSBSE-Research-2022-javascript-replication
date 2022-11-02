export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValueb4oNTX1 = 8.839674016597389;
		const _withoutSuffixwFZUVah = () => { return _returnValueb4oNTX1 };
		const _returnValuebGNOI7j = await fromNow(_withoutSuffixwFZUVah)
	});
})