export {}
import {configFromStringAndArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndArray', () => {
	it('test for configFromStringAndArray', async () => {
		const _arrayValuegvQUgC = null;
		const _arrayValueuLZ56wE = null;
		const _arrayValue5dODum = [_arrayValueuLZ56wE]
		const _arrayValueFxUICWc = 1.800808133584244;
		const _configv3W77xi = [_arrayValuegvQUgC, _arrayValue5dODum, _arrayValueFxUICWc]
		const _returnValuewec1QH = await configFromStringAndArray(_configv3W77xi)
	});
})