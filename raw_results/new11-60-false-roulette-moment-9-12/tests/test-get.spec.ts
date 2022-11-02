export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueI7SL2a = -7.317934032927877;
		const _arrayValueO8j8IXq = "KXFrr8uSiXNVDmJ786k9kuYJkf4cKDbm7yeu2c16x0iSjEHde1S34eI0jwJe";
		const _arrayValueIMfPCbQ = false;
		const _arrayValueTVHL8hW = null;
		const _arrayValueSGj2c3R = [_arrayValueI7SL2a, _arrayValueO8j8IXq, _arrayValueIMfPCbQ, _arrayValueTVHL8hW]
		const _momh2YRgjq = [_arrayValueSGj2c3R]
		const _unitKno6V9D = -8.575533587970734;
		const _returnValueEZlhBpQ = await get(_momh2YRgjq, _unitKno6V9D)
	});
})