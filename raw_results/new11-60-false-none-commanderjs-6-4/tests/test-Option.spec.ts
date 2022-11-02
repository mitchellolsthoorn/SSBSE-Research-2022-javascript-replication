export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsiDVjzqI = 3.0727638455984305;
		const _descriptionrrBvIDy = false;
		const _OptionUi2dK8f = new Option(_flagsiDVjzqI, _descriptionrrBvIDy)
		const _arrayValueTY4Z1b9 = false;
		const _argtTw4Ayg = [_arrayValueTY4Z1b9]
		const _returnValueyelG9w4 = await _OptionUi2dK8f.is(_argtTw4Ayg)
		const _mandatorylvBqJp8 = -5.845937451991496;
		const _returnValueips1mkU = await _OptionUi2dK8f.makeOptionMandatory(_mandatorylvBqJp8)
		const _hide97k5Uk = undefined;
		const _returnValueneqPf1p = await _OptionUi2dK8f.hideHelp(_hide97k5Uk)
		const _returnValuev0Xf8ig = -7.8821933399853545;
		const _mandatoryd67THo4 = () => { return _returnValuev0Xf8ig };
		const _returnValueUj6oOku = await _OptionUi2dK8f.makeOptionMandatory(_mandatoryd67THo4)
	});

	it('test for Option', async () => {
		const _arrayValueCoU0Og2 = undefined;
		const _arrayValueGjEdP6 = "gXusnYhp94vW1pBf4TQOhQUCWW51FJVqNbuCnR5Yz2p";
		const _arrayValueZ1YPSc = 4.623046645560695;
		const _flagsuLoSwl = [_arrayValueCoU0Og2, _arrayValueGjEdP6, _arrayValueZ1YPSc]
		const _descriptionUfQ3fOB = null;
		const _Optiono5ZmXGu = new Option(_flagsuLoSwl, _descriptionUfQ3fOB)
		const _argh6nk6i = {
		
	}
		const _returnValuefAnFCXY = await _Optiono5ZmXGu.is(_argh6nk6i)
		const _fnANyAuPJ = false;
		const _returnValuetJXC7sc = await _Optiono5ZmXGu.argParser(_fnANyAuPJ)
		const _valuecgQZrcd = null;
		const _previousEmzL2ag = "W3o2bwmUpAwMOnqq4RtG";
		const _returnValueoHmZqTA = await _Optiono5ZmXGu._concatValue(_valuecgQZrcd, _previousEmzL2ag)
		const _hideFr9wlow = 6.458014791546741;
		const _returnValuebxcWUZZ = await _Optiono5ZmXGu.hideHelp(_hideFr9wlow)
	});

	it('test for Option', async () => {
		const _flagsYAqhSKb = "Y1KTY2zFWGP6aGXCtDjLrUSuAD1ugokXU9ABQJcdiACKXZVmycHs7mbjeUSwubzz9FPGrRPpVgsfYD";
		const _descriptionQDgn6b2 = undefined;
		const _OptionazizB5E = new Option(_flagsYAqhSKb, _descriptionQDgn6b2)
		const _mandatoryWhP5Qf = "5pVBgsZyTAiscgzuyAvAW0I7RlGkuIn1sIF1MpUZ6tAu7dwCMkLckxPKhVhqCb48dvO";
		const _returnValueyTCSS4w = await _OptionazizB5E.makeOptionMandatory(_mandatoryWhP5Qf)
		const _hideIKYCgl2 = null;
		const _returnValueGNWqA4m = await _OptionazizB5E.hideHelp(_hideIKYCgl2)
	});

	it('test for Option', async () => {
		const _flagsdeD171 = "bWMm6h";
		const _description6gtqFc = 8.119284192243835;
		const _OptionPV6XmA9 = new Option(_flagsdeD171, _description6gtqFc)
		const _returnValueXILNNAa = await _OptionPV6XmA9.name()
		const _returnValueqITEYtK = await _OptionPV6XmA9.attributeName()
	});

	it('test for Option', async () => {
		const _flagsQHwvVsB = "13WaMsyvmRYufOy5ufthrHJWm1puStdzVh4KO8BYRzUmTVtXO5pD8RvKui5cmpx";
		const _descriptionf3YWJZM = "FtWBSp";
		const _OptionSkeAWZb = new Option(_flagsQHwvVsB, _descriptionf3YWJZM)
		const _valuesWLSPcOI = 9.79542789941927;
		const _returnValueHyf6ofF = await _OptionSkeAWZb.choices(_valuesWLSPcOI)
	});

	it('test for Option', async () => {
		const _flagssw5XnPZ = "bjuQ2m";
		const _descriptiondvzF5Yj = "CvhA9kBGV8VKt";
		const _OptionKx1qLkM = new Option(_flagssw5XnPZ, _descriptiondvzF5Yj)
		const _namekFClHTH = "BSqiXnT47RCfgwI1Glw2rNB7MsTBT5EYZwwNpN4oHYuuUPyrgJeQVySzogOIEXnJ268E7vB4yscBmIhuEEIfpVDpyzZQIeVV";
		const _returnValuetLQyjLh = await _OptionKx1qLkM.env(_namekFClHTH)
		const _nameKZ2eB3m = false;
		const _returnValuehylqLpL = await _OptionKx1qLkM.env(_nameKZ2eB3m)
	});

	it('test for Option', async () => {
		const _flagsx13Jw0E = "fwEESyvmYq";
		const _descriptionrzlpCvV = undefined;
		const _OptionPRcjKtX = new Option(_flagsx13Jw0E, _descriptionrzlpCvV)
		const _namezyv9TYx = -5.965907130437841;
		const _returnValuebDoYt8Z = await _OptionPRcjKtX.env(_namezyv9TYx)
		const _valueAb8iDba = undefined;
		const _previousEb5goWx = {
		
	}
		const _returnValuekbpadTx = await _OptionPRcjKtX._concatValue(_valueAb8iDba, _previousEb5goWx)
		const _nameVa8kE4G = true;
		const _returnValuemG0clkW = await _OptionPRcjKtX.env(_nameVa8kE4G)
		const _returnValueRZixlhJ = await _OptionPRcjKtX.name()
	});

	it('test for Option', async () => {
		const _flagsfTff3Tu = "zbk9ge8TTW314ysys8";
		const _arrayValuec2aUdJ3 = null;
		const _arrayValueQ3sjHYl = 6.871998904794808;
		const _arrayValueI76JO1 = -7.747124015246157;
		const _arrayValueVqR7cW4 = true;
		const _arrayValuebnoUH88 = -9.461001802174266;
		const _arrayValuePRAkvdY = [_arrayValuebnoUH88]
		const _returnValueHeN1T9 = [_arrayValueI76JO1, _arrayValueVqR7cW4, _arrayValuePRAkvdY]
		const _arrayValueV9ILu3 = () => { return _returnValueHeN1T9 };
		const _arrayValuepa4gSv4 = [_arrayValuec2aUdJ3, _arrayValueQ3sjHYl, _arrayValueV9ILu3]
		const _arrayValueUhzpamo = false;
		const _arrayValueKlcsiGO = [_arrayValueUhzpamo]
		const _returnValuehO26UP = null;
		const _arrayValuePQgXRP9 = () => { return _returnValuehO26UP };
		const _arrayValueIi8AGp = true;
		const _arrayValuejXjNZeo = "GiC0rc4oBrusvl8JTCoQHK5yKpjkmWJ7slxfBsBJSury276u";
		const _descriptionFTc4sTK = [_arrayValuepa4gSv4, _arrayValueKlcsiGO, _arrayValuePQgXRP9, _arrayValueIi8AGp, _arrayValuejXjNZeo]
		const _Optionqzfd0IJ = new Option(_flagsfTff3Tu, _descriptionFTc4sTK)
		const _returnValueRWlh25h = await _Optionqzfd0IJ.attributeName()
		const _fnMEdLvxz = false;
		const _returnValueXL6Q1tX = await _Optionqzfd0IJ.argParser(_fnMEdLvxz)
		const _argp2wM1do = {
		
	}
		const _returnValueIGkDLqO = await _Optionqzfd0IJ.is(_argp2wM1do)
	});

	it('test for Option', async () => {
		const _flagsxQ51Dvi = "5yvOZPnexoS9y4JY93MRA2FlRJgEyzeF8DiowgoGaJkICqjkBfV6FmlbxxtTbtm4tNWCjRQYOLHuqTxm2TVEECqE6SH";
		const _descriptiontrVscSF = undefined;
		const _OptionvSHm6p1 = new Option(_flagsxQ51Dvi, _descriptiontrVscSF)
		const _valueoKiiHV5 = true;
		const _arrayValueAw70UYS = -4.337799667038268;
		const _arrayValuevZEcQ3v = "KjhVr23sQykdh8VFgDDlOGcpWAwcTzeOE8bheE8oyABJReItFAshi6fsnkX4ZELzNkb";
		const _previousRHB3Hw = [_arrayValueAw70UYS, _arrayValuevZEcQ3v]
		const _returnValueKG0wUHc = await _OptionvSHm6p1._concatValue(_valueoKiiHV5, _previousRHB3Hw)
		const _returnValueixnUWl = await _OptionvSHm6p1.name()
	});

	it('test for Option', async () => {
		const _flagsd2d5LL2 = "MwnYVXu62";
		const _returnValueWMG5MJo = null;
		const _descriptionyUmul1d = () => { return _returnValueWMG5MJo };
		const _OptionURgdA2l = new Option(_flagsd2d5LL2, _descriptionyUmul1d)
		const _arrayValuesJbgrNO = {
		
	}
		const _arrayValueh4dXA3 = {
		
	}
		const _arrayValuexBV7P7L = null;
		const _arrayValueFsxuhZJ = -1.5166201261528371;
		const _arrayValuenuuuvPQ = [_arrayValueh4dXA3, _arrayValuexBV7P7L, _arrayValueFsxuhZJ]
		const _arrayValueezwXLrM = 7.3584703276463195;
		const _returnValuezHdLrzr = {
		
	}
		const _arrayValueXc0AC0v = () => { return _returnValuezHdLrzr };
		const _arrayValuebtfLL6z = [_arrayValuesJbgrNO, _arrayValuenuuuvPQ, _arrayValueezwXLrM, _arrayValueXc0AC0v]
		const _returnValuecX3lEEL = false;
		const _arrayValuemOoxQal = () => { return _returnValuecX3lEEL };
		const _arrayValueszaH5qN = [_arrayValuebtfLL6z, _arrayValuemOoxQal]
		const _arrayValueAZx6bon = true;
		const _valueqyFFsZQ = [_arrayValueszaH5qN, _arrayValueAZx6bon]
		const _previousu3S83qU = -1.4195681846669537;
		const _returnValueq7cgjhT = await _OptionURgdA2l._concatValue(_valueqyFFsZQ, _previousu3S83qU)
		const _valueRhbCiNi = []
		const _descriptionRcaZgEE = "KgmssCWhh68liXqMf4voM2itbTcUYKkhYFBTwKkiQvRTa2LXFe8nixJesLTwSH44kjT8dBHUJvhgR";
		const _returnValueXXmPgNQ = await _OptionURgdA2l.default(_valueRhbCiNi, _descriptionRcaZgEE)
		const _returnValuen9jwIgu = await _OptionURgdA2l.name()
		const _valuesgumZ1OT = undefined;
		const _returnValueXvArGE = await _OptionURgdA2l.choices(_valuesgumZ1OT)
		const _arrayValueqiUVOt1 = true;
		const _returnValueIKcHMMr = null;
		const _arrayValueshA4rS = () => { return _returnValueIKcHMMr };
		const _arrayValueqxFNVs6 = undefined;
		const _valuesVubb0ph = [_arrayValueqiUVOt1, _arrayValueshA4rS, _arrayValueqxFNVs6]
		const _returnValueuKwWpwP = await _OptionURgdA2l.choices(_valuesVubb0ph)
	});
})