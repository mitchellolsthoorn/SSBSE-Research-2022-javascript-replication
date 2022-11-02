export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueYuBklUl = true;
		const _isValidMGw5EzU = () => { return _returnValueYuBklUl };
		const _momWo4Eone = {
			"isValid": _isValidMGw5EzU
	}
		const _unitvxxzqpn = undefined;
		const _returnValueQu9HBq = await get(_momWo4Eone, _unitvxxzqpn)
	});
})