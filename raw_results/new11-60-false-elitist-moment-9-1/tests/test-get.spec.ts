export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueyWBjzcH = "hGW14";
		const _isValidg2zKuL6 = () => { return _returnValueyWBjzcH };
		const _momgRuNPwX = {
			"isValid": _isValidg2zKuL6
	}
		const _unitWu8fISk = 5.347168699589664;
		const _returnValuenaOvDy0 = await get(_momgRuNPwX, _unitWu8fISk)
	});
})