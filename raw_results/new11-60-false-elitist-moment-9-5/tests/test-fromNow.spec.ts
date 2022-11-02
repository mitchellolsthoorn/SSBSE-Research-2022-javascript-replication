export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixLg6tCx = 6.114059729532684;
		const _returnValueHOEFVpV = await fromNow(_withoutSuffixLg6tCx)
	});
})