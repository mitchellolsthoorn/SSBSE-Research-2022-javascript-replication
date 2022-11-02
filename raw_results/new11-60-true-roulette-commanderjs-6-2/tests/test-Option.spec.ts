export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagskJuJMtF = "nIxpBSAARRt5z1mMmW4ii2e9vwxPXWm12tXLtkaTCDJhh9pB4uf2";
		const _descriptionHuN127U = undefined;
		const _OptionvzVKehg = new Option(_flagskJuJMtF, _descriptionHuN127U)
		const _arrayValueW0UJLUo = undefined;
		const _valuesQGkupxU = [_arrayValueW0UJLUo]
		const _returnValuekDmEr0B = await _OptionvzVKehg.choices(_valuesQGkupxU)
		const _argUhts43v = {
		
	}
		const _returnValueMdi8Xo0 = await _OptionvzVKehg.is(_argUhts43v)
		const _mandatoryZtnqGmd = true;
		const _returnValuedEFT6Ax = await _OptionvzVKehg.makeOptionMandatory(_mandatoryZtnqGmd)
		const _returnValueETeSq6f = await _OptionvzVKehg.name()
	});

	it('test for Option', async () => {
		const _flagsi82W5yy = "2";
		const _descriptionICq8gCA = []
		const _OptionCixoQgE = new Option(_flagsi82W5yy, _descriptionICq8gCA)
		const _mandatoryQ4xREZ5 = true;
		const _returnValuedV7b7QN = await _OptionCixoQgE.makeOptionMandatory(_mandatoryQ4xREZ5)
		const _hideLAasBM = true;
		const _returnValuehKgxepH = await _OptionCixoQgE.hideHelp(_hideLAasBM)
		const _hidebJc3KJ1 = true;
		const _returnValuesRQrOY8 = await _OptionCixoQgE.hideHelp(_hidebJc3KJ1)
	});

	it('test for Option', async () => {
		const _flagsGHy9e4 = "7JgSAcSTduYE0wKMp";
		const _descriptiondztRbpo = undefined;
		const _OptionPKxJWa1 = new Option(_flagsGHy9e4, _descriptiondztRbpo)
		const _returnValueCcWcAkZ = true;
		const _arrayValue56us11 = () => { return _returnValueCcWcAkZ };
		const _valueAZdpYt = [_arrayValue56us11]
		const _arrayValueJkxkbN = "dYDCJsyc4LltWvN7zDo0PcDM2ytdq6JY6wLBAjMlvIHGsmV2WpXi6XxTL978y";
		const _arrayValuehVWTFbU = "yGbPvJ4AAgGORxffukg596qU6L";
		const _previousgYrEsGz = [_arrayValueJkxkbN, _arrayValuehVWTFbU]
		const _returnValueNt9GmPg = await _OptionPKxJWa1._concatValue(_valueAZdpYt, _previousgYrEsGz)
	});

	it('test for Option', async () => {
		const _flagsDNWe6C = "WLBYV3peXbtct8btD6WcOAYREkPWFuhSTIJ9E";
		const _descriptionBCgGAXi = undefined;
		const _Optiona6FiL92 = new Option(_flagsDNWe6C, _descriptionBCgGAXi)
		const _returnValuecAQjNWq = await _Optiona6FiL92.name()
		const _namedYD6U4 = {
		
	}
		const _returnValueMNHoEJm = await _Optiona6FiL92.env(_namedYD6U4)
		const _valueTkIWdEW = null;
		const _arrayValues4rKHdg = "9H2wANGIe3e9qmxQ2IXbj6HD6pY0WdNxK4XUUtEyAyzOSUiA";
		const _returnValueMwTiDWB = [_arrayValues4rKHdg]
		const _concatAZFxAz = () => { return _returnValueMwTiDWB };
		const _previousEkMyVZ9 = {
			"concat": _concatAZFxAz
	}
		const _returnValueZy50ey4 = await _Optiona6FiL92._concatValue(_valueTkIWdEW, _previousEkMyVZ9)
	});

	it('test for Option', async () => {
		const _flagsETZyEkX = "skezeh94rWdnN4dszuIoY5LO2cWQAaA6o9AXj3DViZ";
		const _descriptionJQ41ZBd = 2.2238052578546217;
		const _OptionJuMrG2f = new Option(_flagsETZyEkX, _descriptionJQ41ZBd)
		const _returnValuehzeRWIZ = await _OptionJuMrG2f.attributeName()
	});

	it('test for Option', async () => {
		const _flags0jAxiZ = "ImclxPYf";
		const _descriptioniteWQ4W = true;
		const _OptionIvmhNFS = new Option(_flags0jAxiZ, _descriptioniteWQ4W)
		const _fnbSsyIu = "YIYhDxlf1XzjE3eVhFKGiqsSPD5VDdLOaKAKUI1MEAmUulutO0D";
		const _returnValueMc9T1wg = await _OptionIvmhNFS.argParser(_fnbSsyIu)
		const _fnY1kN6g2 = undefined;
		const _returnValueHcFrNxr = await _OptionIvmhNFS.argParser(_fnY1kN6g2)
	});

	it('test for Option', async () => {
		const _flagszK1jWRl = "ljofVOiPsNbww2yR2zAWmTBCMG3qSJgJWDPXCldc7ZSNucEPZ2CP3q8WhtPHJt3JDD779wy46tti";
		const _descriptionRRibxUy = null;
		const _OptionIrgQ1WE = new Option(_flagszK1jWRl, _descriptionRRibxUy)
		const _arg7r25aJ = {
		
	}
		const _returnValuesKF8Vz7 = await _OptionIrgQ1WE.is(_arg7r25aJ)
		const _valueivtFZlx = undefined;
		const _arrayValuecJeGFwu = null;
		const _returnValueJNLNFSF = false;
		const _returnValueUd4v9qp = () => { return _returnValueJNLNFSF };
		const _arrayValuep4C92d = () => { return _returnValueUd4v9qp };
		const _arrayValueCpvZpLT = null;
		const _arrayValueumfBrX = undefined;
		const _description9rgArL = [_arrayValuecJeGFwu, _arrayValuep4C92d, _arrayValueCpvZpLT, _arrayValueumfBrX]
		const _returnValuevckIx77 = await _OptionIrgQ1WE.default(_valueivtFZlx, _description9rgArL)
	});
})