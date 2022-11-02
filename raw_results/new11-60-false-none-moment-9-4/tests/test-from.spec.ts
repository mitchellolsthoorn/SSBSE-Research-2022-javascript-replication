export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timewbRLVz = 8.307715460369355;
		const _withoutSuffixQjMXmaf = "lUqzD5VSF9jrrVd0zHOzFVvlYJgE42NsAo8iTljJBJYN";
		const _returnValueMDFZjpR = await from(_timewbRLVz, _withoutSuffixQjMXmaf)
	});
})