export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputlGI3026 = "zkQwhEtQYsqXR3AdpjaMJu9NKePYqLMd0Xe1xETmQUDGV4v";
		const _unitsZzKNZTS = "x7wqCH0qX5EePqQvPpwI";
		const _returnValueUrTJPNW = await isSameOrAfter(_inputlGI3026, _unitsZzKNZTS)
	});
})