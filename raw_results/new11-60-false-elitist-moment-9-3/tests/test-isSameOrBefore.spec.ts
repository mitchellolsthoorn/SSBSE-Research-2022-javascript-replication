export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueXntfPw8 = -5.28210526997499;
		const _arrayValuebPyZN8 = 1.7337399755963752;
		const _arrayValueoGLs3Ei = -4.106285767870174;
		const _returnValuejvtq5L = undefined;
		const _arrayValuedtJRybK = () => { return _returnValuejvtq5L };
		const _arrayValueqvxshqZ = [_arrayValuedtJRybK]
		const _input0BPy7Q = [_arrayValueXntfPw8, _arrayValuebPyZN8, _arrayValueoGLs3Ei, _arrayValueqvxshqZ]
		const _unitsql8P26X = false;
		const _returnValuenU6sJqr = await isSameOrBefore(_input0BPy7Q, _unitsql8P26X)
	});
})