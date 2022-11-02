export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueHLgGHxf = 0.5023847493451008;
		const _isValidX7hUhqW = () => { return _returnValueHLgGHxf };
		const _momTrGhpJ = {
			"isValid": _isValidX7hUhqW
	}
		const _unitkAkF35s = 7.1477657302824795;
		const _returnValueODbrep = await get(_momTrGhpJ, _unitkAkF35s)
	});
})