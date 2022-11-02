export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValueAu4R3OQ = true;
		const _withoutSuffixUq9T1Yo = () => { return _returnValueAu4R3OQ };
		const _returnValuevgXaLS6 = await fromNow(_withoutSuffixUq9T1Yo)
	});
})