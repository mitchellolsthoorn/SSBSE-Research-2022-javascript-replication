export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _arrayValueD17v4Rj = undefined;
		const _arrayValueSnVPSg = null;
		const _arrayValueahhzjVo = 5.228874196095285;
		const _arrayValueqra6uL9 = true;
		const _arrayValueFid6oA6 = [_arrayValueSnVPSg, _arrayValueahhzjVo, _arrayValueqra6uL9]
		const _configX6I0lN = [_arrayValueD17v4Rj, _arrayValueFid6oA6]
		const _returnValuebhemjSt = await configFromArray(_configX6I0lN)
	});

	it('test for configFromArray', async () => {
		const __isUTCWnb5aDW = false;
		const __dx44gpKc = {
		
	}
		const _returnValueENMtXWJ = undefined;
		const _isValidCpByrB8 = () => { return _returnValueENMtXWJ };
		const _returnValuev04ucNm = false;
		const _localeDatarC1lVHU = () => { return _returnValuev04ucNm };
		const _addJBkp41p = undefined;
		const _configG4gbqlL = {
			"_isUTC": __isUTCWnb5aDW,
		"_d": __dx44gpKc,
		"isValid": _isValidCpByrB8,
		"localeData": _localeDatarC1lVHU,
		"add": _addJBkp41p
	}
		const _returnValueGJ3XR5M = await configFromArray(_configG4gbqlL)
	});
})