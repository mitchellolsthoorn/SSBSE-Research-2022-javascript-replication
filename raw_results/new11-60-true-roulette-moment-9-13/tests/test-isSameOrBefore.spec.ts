export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputGLJ1BVl = -0.5989583273149108;
		const _returnValueEh3mB4N = undefined;
		const _units4ZlKNE = () => { return _returnValueEh3mB4N };
		const _returnValueXTUVR2z = await isSameOrBefore(_inputGLJ1BVl, _units4ZlKNE)
	});
})