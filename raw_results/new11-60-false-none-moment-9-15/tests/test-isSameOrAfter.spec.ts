export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputEDMIuJU = "pT0jeSjVPUAgCJzBHVladGMB7W2C6g3TwrsrE";
		const _returnValuejfEhWvy = 0.10174257257744834;
		const _unitssTlaqbQ = () => { return _returnValuejfEhWvy };
		const _returnValuef3rD0Ou = await isSameOrAfter(_inputEDMIuJU, _unitssTlaqbQ)
	});
})