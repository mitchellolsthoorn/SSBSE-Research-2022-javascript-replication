export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueFG5hgMz = false;
		const _returnValuekFVlY8r = [_arrayValueFG5hgMz]
		const _isValidqEPWqoo = () => { return _returnValuekFVlY8r };
		const _momwU4udLK = {
			"isValid": _isValidqEPWqoo
	}
		const _unitr1EplUK = -7.55369110265761;
		const _returnValueuS5tR7g = await get(_momwU4udLK, _unitr1EplUK)
	});
})