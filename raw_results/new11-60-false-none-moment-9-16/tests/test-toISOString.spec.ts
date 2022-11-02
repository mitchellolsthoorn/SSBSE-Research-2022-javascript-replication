export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsetS2AOixt = 1.4843691595137276;
		const _returnValueSYKeqX5 = await toISOString(_keepOffsetS2AOixt)
	});
})