export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueFa0DiR6 = 3.508135353218444;
		const _isValidwxKTDmU = () => { return _returnValueFa0DiR6 };
		const _momBE1Ct5V = {
			"isValid": _isValidwxKTDmU
	}
		const _unitgW9Vkcv = 0.7408515139889111;
		const _returnValueXcDjkfb = await get(_momBE1Ct5V, _unitgW9Vkcv)
	});
})