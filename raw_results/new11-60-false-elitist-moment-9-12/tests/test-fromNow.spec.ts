export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValueGfR3ZhD = 3.4981292296080895;
		const _withoutSuffixeZv2klU = () => { return _returnValueGfR3ZhD };
		const _returnValue1o5VE5 = await fromNow(_withoutSuffixeZv2klU)
	});
})