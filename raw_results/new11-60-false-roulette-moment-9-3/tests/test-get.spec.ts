export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueGlArh2i = 1.841621092416684;
		const _isValidHjQYYX1 = () => { return _returnValueGlArh2i };
		const _momTJldmSr = {
			"isValid": _isValidHjQYYX1
	}
		const _unitQkbNsxv = "1JHPz6rUdDCBSl8sjcyrbm8kNLHLi6DddoJ";
		const _returnValueLsqpWBK = await get(_momTJldmSr, _unitQkbNsxv)
	});
})