export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueP1fphdk = false;
		const _flags9nnOul = () => { return _returnValueP1fphdk };
		const _returnValueSiPcU3d = -2.5012473225247547;
		const _descriptionRipcTy3 = () => { return _returnValueSiPcU3d };
		const _Optiontd1bMwt = new Option(_flags9nnOul, _descriptionRipcTy3)
		const _arrayValueKCOhtCD = true;
		const _valuesNfJvzr = [_arrayValueKCOhtCD]
		const _returnValueW0h267 = await _Optiontd1bMwt.choices(_valuesNfJvzr)
		const _mandatory3APg8z = false;
		const _returnValueFAnFEia = await _Optiontd1bMwt.makeOptionMandatory(_mandatory3APg8z)
		const _arrayValuelfJB3qd = undefined;
		const _arrayValueBiPxMr3 = -1.1644641103465272;
		const _arrayValueTNK2i7v = null;
		const _arrayValueQ8RgOQ = "mqgniRbe6T72NF2JZZH8yocU3thSISdqVv4jaWK3CKtD8p3XnhSeDnr5guIJ1JTUO";
		const _arrayValue87Pjkz = [_arrayValueTNK2i7v, _arrayValueQ8RgOQ]
		const _arrayValuen6Or6l0 = -2.5573285874379534;
		const _arrayValueUeILktm = "4Cj0RWqoUmFUg3KcwxYwdFjyRXTrTIfAIcLNDGJnC6NL1vk4kfNpJ5KDCS9zpNewLSYuqHgd2ohtuqtnbzb";
		const _arrayValueZFamlfC = "q4xBQ8QlVaVWVf7qCiTLWwQyKLot8G5XdqdOw2Xp9SiYAMcKFFkKmh6Wg7MyOrc1Jo7gEhsNPfi3K6OqR";
		const _arrayValuereBCfNi = undefined;
		const _arrayValueZj0HcCi = [_arrayValuen6Or6l0, _arrayValueUeILktm, _arrayValueZFamlfC, _arrayValuereBCfNi]
		const _fnAT3Ig8 = [_arrayValuelfJB3qd, _arrayValueBiPxMr3, _arrayValue87Pjkz, _arrayValueZj0HcCi]
		const _returnValueWfPw0PA = await _Optiontd1bMwt.argParser(_fnAT3Ig8)
		const _nameyoI6FVz = undefined;
		const _returnValues92hOFo = await _Optiontd1bMwt.env(_nameyoI6FVz)
		const _fniN98pdG = undefined;
		const _returnValue0L5AFN = await _Optiontd1bMwt.argParser(_fniN98pdG)
	});

	it('test for Option', async () => {
		const _flagsx8sOAko = "B2UvydPhEtxVPdcNiWbNTVgJVI6trfDzjBA3iCCul52OE83nai0iLd6W";
		const _descriptionVelgp0T = "KH4irvAxaLDBgWGCCVLlCbnDsvtAXU2Gl160oW2qwMptNg87B73eF";
		const _OptionbtFmTsY = new Option(_flagsx8sOAko, _descriptionVelgp0T)
		const _namevx2yAIl = undefined;
		const _returnValueisKZ7J7 = await _OptionbtFmTsY.env(_namevx2yAIl)
		const _arrayValueqe9qov = false;
		const _valuesxa1y0cX = [_arrayValueqe9qov]
		const _returnValueYiwjnr = await _OptionbtFmTsY.choices(_valuesxa1y0cX)
		const _argNhyrM9x = {
		
	}
		const _returnValueCx5pLsq = await _OptionbtFmTsY.is(_argNhyrM9x)
	});

	it('test for Option', async () => {
		const _flagsPmVvDrb = "mopsfqQjtpJlfvGWwYjXFJnkjG7mRTca3l7fyxLgJNl86oBrCcRKQdF47LdxluzsE9PrQcdIYqCnOkQPxSNN4wcVK6cS0mVV";
		const _descriptionlkoqcvv = 0.8106643603620434;
		const _Optionu3Bgl9J = new Option(_flagsPmVvDrb, _descriptionlkoqcvv)
		const _fnsYkXij5 = undefined;
		const _returnValueaVjOx5t = await _Optionu3Bgl9J.argParser(_fnsYkXij5)
		const _hideZxtEQqZ = true;
		const _returnValuewi5Q2Ey = await _Optionu3Bgl9J.hideHelp(_hideZxtEQqZ)
		const _returnValueoySLi0g = await _Optionu3Bgl9J.attributeName()
	});

	it('test for Option', async () => {
		const _flagsVc5ZTB = "Wonzn52JRdJHpK4";
		const _returnValueBJNK5pe = 7.088506112169789;
		const _descriptionPgp9USY = () => { return _returnValueBJNK5pe };
		const _OptionJqo3Taz = new Option(_flagsVc5ZTB, _descriptionPgp9USY)
		const _namevUeXwfN = {
		
	}
		const _returnValueC4dLpl = await _OptionJqo3Taz.env(_namevUeXwfN)
		const _namehuDY1s8 = undefined;
		const _returnValuekZgOUpW = await _OptionJqo3Taz.env(_namehuDY1s8)
		const _fnaivz8aa = 5.701157513799753;
		const _returnValueU5YGyDS = await _OptionJqo3Taz.argParser(_fnaivz8aa)
		const _valuecakHGUM = undefined;
		const _descriptionJ1mQI37 = undefined;
		const _returnValueDKE0qh1 = await _OptionJqo3Taz.default(_valuecakHGUM, _descriptionJ1mQI37)
		const _mandatoryN87z8Md = true;
		const _returnValueQZy8K7N = await _OptionJqo3Taz.makeOptionMandatory(_mandatoryN87z8Md)
	});

	it('test for Option', async () => {
		const _flagszfGxndT = "vwFdei9lHAr1XyH13VBFdS4RBaRK9PeRNTzbHBRWYilCtx8uykHp32g4g2IK";
		const _descriptionGU14p3b = "TMHtscQwnYbJ45dj6J8VZi9Y3KfCAxaMmI5SbHmEZqoTSeKDz2";
		const _OptionLpyURgN = new Option(_flagszfGxndT, _descriptionGU14p3b)
		const _namevCCmSaA = undefined;
		const _returnValueJzws9lJ = await _OptionLpyURgN.env(_namevCCmSaA)
		const _returnValue5ZrW6O = await _OptionLpyURgN.attributeName()
		const _valuekvULQaT = null;
		const _returnValueZvvxIMI = 5.501352703006825;
		const _concatceOMTEv = () => { return _returnValueZvvxIMI };
		const _previousrzmsQva = {
			"concat": _concatceOMTEv
	}
		const _returnValuenIL4C5J = await _OptionLpyURgN._concatValue(_valuekvULQaT, _previousrzmsQva)
		const _arrayValuemkhOchz = "sDpH4hKCCQ2humaUk97X6FijleiVWI37aQ29Q";
		const _arrayValuefc54qoM = "yAendlxmi1go1j3jDDQW9gm4htDfOM1wrlqk6olYMw1ZYIJ310srTzUG0M8HVnnQBYEc7FLQ6FYkzb";
		const _arrayValuewtyFMYR = {
		
	}
		const _arrayValueJvZA39X = [_arrayValuewtyFMYR]
		const _arrayValueWODMda = true;
		const _fnJ8KlzM7 = [_arrayValuemkhOchz, _arrayValuefc54qoM, _arrayValueJvZA39X, _arrayValueWODMda]
		const _returnValuezxSTSGs = await _OptionLpyURgN.argParser(_fnJ8KlzM7)
	});

	it('test for Option', async () => {
		const _flagsfrs9how = "HPyHudFdEU0KR7TE8ljhFqSwLi3itOHqcs5uU4PAWD1l8";
		const _descriptionCyBuu4z = 2.961145022150472;
		const _OptiondC9Fl1N = new Option(_flagsfrs9how, _descriptionCyBuu4z)
		const _argCuDir2v = {
		
	}
		const _returnValueJ7hEPcX = await _OptiondC9Fl1N.is(_argCuDir2v)
		const _returnValueJITKsC = undefined;
		const _valueOSohv1H = () => { return _returnValueJITKsC };
		const _arrayValuehJ4ltr4 = -2.503374120750049;
		const _arrayValuenQzsFSK = []
		const _previouslrFmWVL = [_arrayValuehJ4ltr4, _arrayValuenQzsFSK]
		const _returnValueiAcPECh = await _OptiondC9Fl1N._concatValue(_valueOSohv1H, _previouslrFmWVL)
		const _returnValuePOBsyNU = await _OptiondC9Fl1N.attributeName()
	});
})