export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValuetKakA86 = undefined;
		const _returnValueYifkkz = [_arrayValuetKakA86]
		const _inputV588IRw = () => { return _returnValueYifkkz };
		const _unitsvW4fYQs = {
		
	}
		const _returnValueKWIikxA = await isSame(_inputV588IRw, _unitsvW4fYQs)
	});
})