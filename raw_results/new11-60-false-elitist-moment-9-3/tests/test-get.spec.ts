export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueBCHwFxS = 1.3321634415491843;
		const _arrayValueXuP3nb8 = true;
		const _returnValueJwoBmxI = [_arrayValueBCHwFxS, _arrayValueXuP3nb8]
		const _isValidsud3ay = () => { return _returnValueJwoBmxI };
		const _momed7CNYw = {
			"isValid": _isValidsud3ay
	}
		const _unitVqvKOc4 = -0.08901281323959864;
		const _returnValuehaFcoyS = await get(_momed7CNYw, _unitVqvKOc4)
	});
})