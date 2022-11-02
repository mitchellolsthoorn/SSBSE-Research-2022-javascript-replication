export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputLERjQ3h = -4.535080465911259;
		const _returnValueOtUeJn = null;
		const _unitsu7C2blr = () => { return _returnValueOtUeJn };
		const _returnValuecJJyBaL = await isSame(_inputLERjQ3h, _unitsu7C2blr)
	});
})