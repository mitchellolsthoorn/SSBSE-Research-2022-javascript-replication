export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputpiJUib = -6.878293079541056;
		const _formatjmxBUcd = undefined;
		const _localefn1MtI8 = null;
		const _arrayValueSngiqXQ = false;
		const _arrayValuesNelVt7 = [_arrayValueSngiqXQ]
		const _arrayValuenKZXlbL = false;
		const _arrayValuemkZjoP = -1.5609379611180731;
		const _isUTCKo9dxcG = [_arrayValuesNelVt7, _arrayValuenKZXlbL, _arrayValuemkZjoP]
		const _strictsntcij = true;
		const __iPkWPXGU = {
		
	}
		const __fT1AD9c9 = undefined;
		const _arrayValuetylxoBe = null;
		const _arrayValueaGtG6rS = undefined;
		const _arrayValuehHyQXC = null;
		const __locale0HiBax = [_arrayValuetylxoBe, _arrayValueaGtG6rS, _arrayValuehHyQXC]
		const __isUTCxEgx7uE = "ByGEIY4E4xMl8JENGkvrbryLVLkcM8v";
		const __strictPLASaB9 = undefined;
		const _configjsZiowv = {
			"input": _inputpiJUib,
		"format": _formatjmxBUcd,
		"locale": _localefn1MtI8,
		"isUTC": _isUTCKo9dxcG,
		"strict": _strictsntcij,
		"_i": __iPkWPXGU,
		"_f": __fT1AD9c9,
		"_locale": __locale0HiBax,
		"_isUTC": __isUTCxEgx7uE,
		"_strict": __strictPLASaB9
	}
		const _returnValuenRzHIgQ = await configFromObject(_configjsZiowv)
	});
})