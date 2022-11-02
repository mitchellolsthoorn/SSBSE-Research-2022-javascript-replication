export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueaLjTE7r = []
		const _isValidFZfUTG0 = () => { return _returnValueaLjTE7r };
		const _momd62xRN2 = {
			"isValid": _isValidFZfUTG0
	}
		const _unitQpbx95d = 1.1121408505798787;
		const _returnValueEtOCN6c = await get(_momd62xRN2, _unitQpbx95d)
	});
})