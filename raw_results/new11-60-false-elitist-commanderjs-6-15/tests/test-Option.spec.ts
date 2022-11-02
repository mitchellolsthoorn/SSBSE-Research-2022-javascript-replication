export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueKTpiYmT = undefined;
		const _flagsmf0fNa6 = () => { return _returnValueKTpiYmT };
		const _returnValuezjjKFuA = {
		
	}
		const _descriptionu4u4kcv = () => { return _returnValuezjjKFuA };
		const _OptionbWBXHn3 = new Option(_flagsmf0fNa6, _descriptionu4u4kcv)
		const _hideP1N8aTZ = undefined;
		const _returnValueXOfcYxi = await _OptionbWBXHn3.hideHelp(_hideP1N8aTZ)
		const _hideGLPnFaD = false;
		const _returnValuenVz7hOr = await _OptionbWBXHn3.hideHelp(_hideGLPnFaD)
		const _namelRvejhY = undefined;
		const _returnValuex3UNyd = await _OptionbWBXHn3.env(_namelRvejhY)
	});

	it('test for Option', async () => {
		const _returnValueNg8mhED = -3.8318993468498705;
		const _returnValuehSHQoC = () => { return _returnValueNg8mhED };
		const _includeslNFPAV0 = () => { return _returnValuehSHQoC };
		const _flagsGfEDStk = {
			"includes": _includeslNFPAV0
	}
		const _arrayValuewtnPw7l = -1.3266952490700543;
		const _arrayValuee7sF2x7 = -8.724188224642193;
		const _arrayValuebWllikE = -2.185004903169232;
		const _arrayValueByN3ChF = null;
		const _arrayValueJGRdazm = undefined;
		const _descriptionTY6ZILl = [_arrayValuewtnPw7l, _arrayValuee7sF2x7, _arrayValuebWllikE, _arrayValueByN3ChF, _arrayValueJGRdazm]
		const _OptionCqvSfLk = new Option(_flagsGfEDStk, _descriptionTY6ZILl)
		const _hideYvPxLHW = true;
		const _returnValueQgQVt2Q = await _OptionCqvSfLk.hideHelp(_hideYvPxLHW)
		const _returnValueCTxpWk9 = await _OptionCqvSfLk.name()
		const _fnfaBMIZw = undefined;
		const _returnValueqQqLDBX = await _OptionCqvSfLk.argParser(_fnfaBMIZw)
	});

	it('test for Option', async () => {
		const _flagshT1LD51 = "IavdlDOeqnujR1nesW2qqfxsPUDk6Nhgiw4Z9jXPujyy";
		const _descriptionXF8sBTP = "iDB6RGkgcgm6VJym";
		const _Option4Tw2ts = new Option(_flagshT1LD51, _descriptionXF8sBTP)
		const _valueTUrRsJh = undefined;
		const _descriptionXHpndjB = undefined;
		const _returnValuedTYSF0c = await _Option4Tw2ts.default(_valueTUrRsJh, _descriptionXHpndjB)
	});

	it('test for Option', async () => {
		const _flagsmNeBEAc = "qSwtdVDDGiTUt9sAfP5zG3Zl0lKCXvKeOLEAtdQ";
		const _descriptiontfSEaB7 = true;
		const _OptionhRinqRT = new Option(_flagsmNeBEAc, _descriptiontfSEaB7)
		const _namelWuSrmT = undefined;
		const _returnValuesEob4vV = await _OptionhRinqRT.env(_namelWuSrmT)
		const _mandatoryHZx0WES = true;
		const _returnValue0C6GbJ = await _OptionhRinqRT.makeOptionMandatory(_mandatoryHZx0WES)
		const _fncEudKIN = undefined;
		const _returnValuer2XreHl = await _OptionhRinqRT.argParser(_fncEudKIN)
		const _nameQuCUZ4m = undefined;
		const _returnValue9YnGQZ = await _OptionhRinqRT.env(_nameQuCUZ4m)
		const _valueBJgwGOU = false;
		const _returnValuelJNdou = false;
		const _concatpbAI5lM = () => { return _returnValuelJNdou };
		const _previousyLtpqKj = {
			"concat": _concatpbAI5lM
	}
		const _returnValuesqeutvg = await _OptionhRinqRT._concatValue(_valueBJgwGOU, _previousyLtpqKj)
	});

	it('test for Option', async () => {
		const _flagsROCVwCe = "U9fYvGH8hXqksGV91WhpTq2he9oCNB7iKYXfk44LtaylSPzmStBaXhB6V1ywDXgH7xuh5RC";
		const _descriptionrh5VUWD = {
		
	}
		const _OptionNA4xvAK = new Option(_flagsROCVwCe, _descriptionrh5VUWD)
		const _fnLtLnaEL = undefined;
		const _returnValueOpU1LHw = await _OptionNA4xvAK.argParser(_fnLtLnaEL)
		const _namew5RyESL = undefined;
		const _returnValueno0u1KU = await _OptionNA4xvAK.env(_namew5RyESL)
		const _returnValueeaIfqZZ = null;
		const _includeseGL2Pyn = () => { return _returnValueeaIfqZZ };
		const _arrayValueK6b8jo3 = true;
		const _returnValueJm7RsXv = [_arrayValueK6b8jo3]
		const _joinZSIFWKT = () => { return _returnValueJm7RsXv };
		const _valuesmp9Uigc = {
			"includes": _includeseGL2Pyn,
		"join": _joinZSIFWKT
	}
		const _returnValueMinWoct = await _OptionNA4xvAK.choices(_valuesmp9Uigc)
		const _mandatoryHmWG3mO = true;
		const _returnValueL0sKvWX = await _OptionNA4xvAK.makeOptionMandatory(_mandatoryHmWG3mO)
		const _fnAVQcADW = undefined;
		const _returnValueaKp43vZ = await _OptionNA4xvAK.argParser(_fnAVQcADW)
	});

	it('test for Option', async () => {
		const _flagsGFzsQCf = "yxtgpDQbIIL6TiXVl8RuerUvHVgyBL1kzhInrtqtCZVnGVVHfoQgQGckONKL";
		const _arrayValuebk2605W = null;
		const _descriptionQoYTVF4 = [_arrayValuebk2605W]
		const _Optionr1uhqy2 = new Option(_flagsGFzsQCf, _descriptionQoYTVF4)
		const _returnValuebI1Powq = await _Optionr1uhqy2.name()
		const _nameXTxDp4J = undefined;
		const _returnValueybDkkFM = await _Optionr1uhqy2.env(_nameXTxDp4J)
		const _valueDTeKPN7 = {
		
	}
		const _returnValuecHMInX = false;
		const _concatsbnNWuE = () => { return _returnValuecHMInX };
		const _previousI0fThaq = {
			"concat": _concatsbnNWuE
	}
		const _returnValued7QcLpr = await _Optionr1uhqy2._concatValue(_valueDTeKPN7, _previousI0fThaq)
		const _mandatoryXF1sosz = false;
		const _returnValueP1cxOkB = await _Optionr1uhqy2.makeOptionMandatory(_mandatoryXF1sosz)
		const _returnValueTe3I1Ns = undefined;
		const _includesxIfwtE9 = () => { return _returnValueTe3I1Ns };
		const _returnValuegOHi1Oh = null;
		const _joinaWIy7Sl = () => { return _returnValuegOHi1Oh };
		const _valueszCV74CJ = {
			"includes": _includesxIfwtE9,
		"join": _joinaWIy7Sl
	}
		const _returnValueLek69qV = await _Optionr1uhqy2.choices(_valueszCV74CJ)
	});

	it('test for Option', async () => {
		const _flagsrZAFkd = "UFN3mK5DP5hAjiypP1vlqJdJ9Ho224DNM7Qn4YU6znMPhDC7m1B9icChO9l2";
		const _arrayValueyRqnSfq = {
		
	}
		const _arrayValuejZQD1J = "ztSZs4Ll6vrFAFsEIUXMG5aRPdp7Hqim5RcUhSuoLXrahiQ7u3ZRC";
		const _arrayValueRBCXNa5 = [_arrayValueyRqnSfq, _arrayValuejZQD1J]
		const _arrayValueyWMtM60 = {
		
	}
		const _arrayValueJGm2YAw = "oyjFLLH";
		const _descriptionLfjwODL = [_arrayValueRBCXNa5, _arrayValueyWMtM60, _arrayValueJGm2YAw]
		const _OptionMn7Ef4w = new Option(_flagsrZAFkd, _descriptionLfjwODL)
		const _arrayValueaI2WjVd = undefined;
		const _arrayValueWroiCkZ = -5.67373274540279;
		const _arrayValuelgLxEo2 = "kySENykMqCqEQuXCfZ0ZEwaps";
		const _valuemOiWSZ6 = [_arrayValueaI2WjVd, _arrayValueWroiCkZ, _arrayValuelgLxEo2]
		const _returnValueR4ClQOI = false;
		const _arrayValueuLUWYjQ = () => { return _returnValueR4ClQOI };
		const _arrayValuedoWeIY = "rNdv1Pn2HckBqSb1vJ580spQeybZI1hV7vN2D62VRMpmkQlR0zdxa7FzyyGNBBJjxoF0dRxmGj8DnaHNPUa8";
		const _returnValue2UYOzx = [_arrayValueuLUWYjQ, _arrayValuedoWeIY]
		const _concatlVwIJIz = () => { return _returnValue2UYOzx };
		const _previousdL5Qmqh = {
			"concat": _concatlVwIJIz
	}
		const _returnValueyJNxYTb = await _OptionMn7Ef4w._concatValue(_valuemOiWSZ6, _previousdL5Qmqh)
		const _returnValuenPDu2r0 = await _OptionMn7Ef4w.attributeName()
		const _hidekOZQYFb = false;
		const _returnValueGvvLkSW = await _OptionMn7Ef4w.hideHelp(_hidekOZQYFb)
	});

	it('test for Option', async () => {
		const _flagsEhHdvk = "9iuiGlYflvxzLObIsyHjn8pGe4yLxhdzsn";
		const _descriptionvmbW9fN = undefined;
		const _OptionPfx5vXo = new Option(_flagsEhHdvk, _descriptionvmbW9fN)
		const _argOK8Q1J = {
		
	}
		const _returnValueudYzpai = await _OptionPfx5vXo.is(_argOK8Q1J)
		const _hidem3zL7Y = true;
		const _returnValuevTIGLi1 = await _OptionPfx5vXo.hideHelp(_hidem3zL7Y)
		const _returnValuenN7FCQO = await _OptionPfx5vXo.attributeName()
		const _argKpccaDq = {
		
	}
		const _returnValueWxZwzId = await _OptionPfx5vXo.is(_argKpccaDq)
	});

	it('test for Option', async () => {
		const _flagsInCoqVs = "ckmAgQrQODHJ08J2xtUYC9qAt9yK2CWkGkWxSq8fL3YNTWVJ9rlVK7GBLcdMAxelrfUcAqosltzU";
		const _arrayValueTPdFvTn = "BMnrkydwKUUSURe1eyO8mSS4LnJJcUAaP6f5uyqKpde";
		const _arrayValued4rc3Kr = "Ce";
		const _descriptionRAoDouf = [_arrayValueTPdFvTn, _arrayValued4rc3Kr]
		const _OptionjiUajxi = new Option(_flagsInCoqVs, _descriptionRAoDouf)
		const _hidenJNyVEy = false;
		const _returnValueW2XGMx = await _OptionjiUajxi.hideHelp(_hidenJNyVEy)
		const _valueQRCjYjZ = "bUsfH9NY";
		const _arrayValueIHdPIwy = -3.9116951463830008;
		const _arrayValueDaLCMVW = false;
		const _arrayValueB7GQLCf = -1.748560108311466;
		const _arrayValuei9v85F = true;
		const _arrayValuewlDU6Tu = [_arrayValueB7GQLCf, _arrayValuei9v85F]
		const _arrayValueLiZX7iT = [_arrayValueIHdPIwy, _arrayValueDaLCMVW, _arrayValuewlDU6Tu]
		const _arrayValueYY8gcI = false;
		const _arrayValuemcznl7R = true;
		const _arrayValueQlbaSqX = false;
		const _previousrdDw9MU = [_arrayValueLiZX7iT, _arrayValueYY8gcI, _arrayValuemcznl7R, _arrayValueQlbaSqX]
		const _returnValuekqkbN3C = await _OptionjiUajxi._concatValue(_valueQRCjYjZ, _previousrdDw9MU)
		const _returnValueHGcjCWj = await _OptionjiUajxi.attributeName()
	});
})