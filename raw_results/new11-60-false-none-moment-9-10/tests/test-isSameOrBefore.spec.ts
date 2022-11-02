export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputgCblsNK = "aBTCj9YNlNXvNYLTwS1MC9E7extv4yzGJjNMrcbB2gNWTlx";
		const _unitsSnm3f7O = -6.74624719750784;
		const _returnValueVFfOFJF = await isSameOrBefore(_inputgCblsNK, _unitsSnm3f7O)
	});
})