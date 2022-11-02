export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputD2mMnhl = 5.869015802527782;
		const _returnValueTKiBjTS = null;
		const _unitsSF9PUJ9 = () => { return _returnValueTKiBjTS };
		const _returnValueEhQabQq = await isSameOrAfter(_inputD2mMnhl, _unitsSF9PUJ9)
	});
})