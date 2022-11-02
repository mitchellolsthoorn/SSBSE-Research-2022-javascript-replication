export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputv6dyK8V = false;
		const _unitsbJeKLVH = "FUtRmtwgJ6q6mHIsvoaTDbEGNMJ3gvp10rc4y";
		const _returnValueaNYhXDr = await isBefore(_inputv6dyK8V, _unitsbJeKLVH)
	});
})