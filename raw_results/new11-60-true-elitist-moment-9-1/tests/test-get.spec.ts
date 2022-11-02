export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValuej52Mvy0 = []
		const _returnValueI06P3J = [_arrayValuej52Mvy0]
		const _isValidyjqGW22 = () => { return _returnValueI06P3J };
		const _momHjRf6R = {
			"isValid": _isValidyjqGW22
	}
		const _unitp6GDdqX = -4.076924497254829;
		const _returnValuezJCw83Z = await get(_momHjRf6R, _unitp6GDdqX)
	});
})