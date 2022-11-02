export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _timeVNKu0fP = undefined;
		const _returnValueX0kvikU = 6.271116804987379;
		const _withoutSuffixIaewpBq = () => { return _returnValueX0kvikU };
		const _returnValuehubNzxy = await to(_timeVNKu0fP, _withoutSuffixIaewpBq)
	});
})