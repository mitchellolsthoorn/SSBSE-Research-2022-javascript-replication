export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValueC12y6vN = true;
		const _arrayValueSuxBy3z = -3.408391136913947;
		const _arrayValueZl0aulN = -7.851781422433996;
		const _returnValueCMXHDUm = [_arrayValueSuxBy3z, _arrayValueZl0aulN]
		const _arrayValueHG69dpD = () => { return _returnValueCMXHDUm };
		const _inputoXWfOWU = [_arrayValueC12y6vN, _arrayValueHG69dpD]
		const _unitsjVHhO5 = "bVmytQWlCxVgmoaoTGX";
		const _returnValueoqdXmqo = await isAfter(_inputoXWfOWU, _unitsjVHhO5)
	});

	it('test for isAfter', async () => {
		const _inputsx9yzm = false;
		const _unitskCxnn9d = {
		
	}
		const _returnValueYJYzzKe = await isAfter(_inputsx9yzm, _unitskCxnn9d)
	});
})