export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueSVvb2U = false;
		const _includese71EKhQ = () => { return _returnValueSVvb2U };
		const _flags4pSqQv = {
			"includes": _includese71EKhQ
	}
		const _descriptionW657xMr = null;
		const _OptionY4pguDL = new Option(_flags4pSqQv, _descriptionW657xMr)
		const _fnp9UikPP = {
		
	}
		const _returnValueuLM0drb = await _OptionY4pguDL.argParser(_fnp9UikPP)
		const _namedBQBLzy = undefined;
		const _returnValuez6Sn1cI = await _OptionY4pguDL.env(_namedBQBLzy)
	});

	it('test for Option', async () => {
		const _flagsEQVan8T = "3PvfzoK3cX1EjLFLnBOcaIzk1Q756yrFx1rPSgdaUVP4NFadspckybcGYbTpmQODAhymZiFzhpVuGgIdadWa";
		const _descriptionKW2zYdB = null;
		const _OptionRw2ZLdb = new Option(_flagsEQVan8T, _descriptionKW2zYdB)
		const _returnValueSGnsY86 = await _OptionRw2ZLdb.attributeName()
		const _returnValuemksNo0d = await _OptionRw2ZLdb.name()
		const _returnValueXbhmLvc = await _OptionRw2ZLdb.attributeName()
	});

	it('test for Option', async () => {
		const _flagsemnpvjY = "JwvDtLCyBbScBx1";
		const _descriptions5FYZDN = "BTsF5pDPWoTxEgHqn";
		const _OptionhVsSc4 = new Option(_flagsemnpvjY, _descriptions5FYZDN)
		const _argWPWFEzB = {
		
	}
		const _returnValueP0sytJY = await _OptionhVsSc4.is(_argWPWFEzB)
		const _namephRL7lZ = undefined;
		const _returnValuexoAp0Q5 = await _OptionhVsSc4.env(_namephRL7lZ)
		const _returnValuebFRarit = await _OptionhVsSc4.name()
		const _returnValueRESk6M = await _OptionhVsSc4.attributeName()
	});

	it('test for Option', async () => {
		const _flagsslc5GfZ = "3dD8pKomzmxolrQSqNdHkHJ1eUHJrqy1v5VHsUwpAuUgY59xDIGHmnW98SUR271jJO";
		const _descriptionKa2VMCY = {
		
	}
		const _OptionTCzih1L = new Option(_flagsslc5GfZ, _descriptionKa2VMCY)
		const _mandatoryAuUDxCg = true;
		const _returnValueI4qeG8o = await _OptionTCzih1L.makeOptionMandatory(_mandatoryAuUDxCg)
		const _hideqIMaeQ = true;
		const _returnValueVCbMzYz = await _OptionTCzih1L.hideHelp(_hideqIMaeQ)
		const _returnValueQqKQuig = await _OptionTCzih1L.attributeName()
		const _hideCTR2mG = false;
		const _returnValuesU1LMzT = await _OptionTCzih1L.hideHelp(_hideCTR2mG)
	});

	it('test for Option', async () => {
		const _flagsPDxgEW = "yDWxaKzf";
		const _returnValueKeNX1Ar = undefined;
		const _descriptionGWTMk0Q = () => { return _returnValueKeNX1Ar };
		const _OptionzabaoXR = new Option(_flagsPDxgEW, _descriptionGWTMk0Q)
		const _returnValueXltoves = null;
		const _includesmAg2Xf = () => { return _returnValueXltoves };
		const _returnValue6Lew8m = null;
		const _joinOKIoXP8 = () => { return _returnValue6Lew8m };
		const _valuesdxul4Yh = {
			"includes": _includesmAg2Xf,
		"join": _joinOKIoXP8
	}
		const _returnValueToUf1IH = await _OptionzabaoXR.choices(_valuesdxul4Yh)
		const _valuehN9MWWg = true;
		const _arrayValueqcwstI5 = 2.3007110645581044;
		const _arrayValueU4tIDF = true;
		const _returnValuehCDNEmB = [_arrayValueqcwstI5, _arrayValueU4tIDF]
		const _concatLEfGBRu = () => { return _returnValuehCDNEmB };
		const _previousKAiktWs = {
			"concat": _concatLEfGBRu
	}
		const _returnValueeNvvUYC = await _OptionzabaoXR._concatValue(_valuehN9MWWg, _previousKAiktWs)
		const _hideoec4o99 = false;
		const _returnValueVTmXDzd = await _OptionzabaoXR.hideHelp(_hideoec4o99)
		const _hidetsg2HX = true;
		const _returnValuebRTczEP = await _OptionzabaoXR.hideHelp(_hidetsg2HX)
	});

	it('test for Option', async () => {
		const _flagsabLAqor = "Qsfce69tNpvLvGVtHtBUBF9NFjybsLtd6VGxbsBFG1QQdM5Zc4MmC";
		const _descriptionHGNhp2A = []
		const _OptionU9dofbr = new Option(_flagsabLAqor, _descriptionHGNhp2A)
		const _fnHMuRWD4 = {
		
	}
		const _returnValueN9oPbaB = await _OptionU9dofbr.argParser(_fnHMuRWD4)
		const _returnValuew66M5FA = await _OptionU9dofbr.name()
		const _valueAFbVjqc = "gxzO";
		const _returnValueMT76V0z = null;
		const _concatIh4Da3 = () => { return _returnValueMT76V0z };
		const _previousRIN6uLO = {
			"concat": _concatIh4Da3
	}
		const _returnValueCbgi7w = await _OptionU9dofbr._concatValue(_valueAFbVjqc, _previousRIN6uLO)
	});

	it('test for Option', async () => {
		const _flagsw3WVA8i = "Bf2Q";
		const _descriptionWr3Gt8V = "4d7ngXGeUYfBRYR6W5wJVMGJ5UADWZMeeEkGwyNX1sjq1AMTCdvsBTKJ8T86XkgJXw6coR6MEW1GFcsaR";
		const _OptioncoPqTN = new Option(_flagsw3WVA8i, _descriptionWr3Gt8V)
		const _returnValuegXslFxH = "iP5dm6enrkqq2KHa4eKfhhXjexPO";
		const _includescgwya6 = () => { return _returnValuegXslFxH };
		const _returnValuewE81a0O = true;
		const _joinVpM95Bn = () => { return _returnValuewE81a0O };
		const _valuesw8JQkMJ = {
			"includes": _includescgwya6,
		"join": _joinVpM95Bn
	}
		const _returnValueuXinTj = await _OptioncoPqTN.choices(_valuesw8JQkMJ)
		const _returnValuerwvoVAw = await _OptioncoPqTN.attributeName()
		const _arrayValueGzpCgkF = {
		
	}
		const _arrayValueXA1P15D = null;
		const _arrayValuesBVnEw = null;
		const _returnValueoe806j = [_arrayValueGzpCgkF, _arrayValueXA1P15D, _arrayValuesBVnEw]
		const _includesJKkHKrJ = () => { return _returnValueoe806j };
		const _returnValueVgZuPVF = null;
		const _joinCVikx4 = () => { return _returnValueVgZuPVF };
		const _valuesDWlxfQD = {
			"includes": _includesJKkHKrJ,
		"join": _joinCVikx4
	}
		const _returnValuesN0ZHF0 = await _OptioncoPqTN.choices(_valuesDWlxfQD)
		const _valuevnDkdfA = "gsQRlXuXolMAAFX4GVQgG75JXUZw9wRj4iiPmvxBOrRuG75qqQsrXh7xqS6eB2Wj2N3j";
		const _descriptionADorOjr = undefined;
		const _returnValueU1ieccX = await _OptioncoPqTN.default(_valuevnDkdfA, _descriptionADorOjr)
		const _namevIZ5hkq = null;
		const _returnValuej0Wqu73 = await _OptioncoPqTN.env(_namevIZ5hkq)
	});

	it('test for Option', async () => {
		const _flagsS0nqNF0 = "JxAwINJO4UIt2HfZULbADBWhntZHLMcrl1JPKRfd56XW9ItuucJoulIo0d8QWhyQOBuCulBFSdS4EdmSNJSh8hKv3ms1hi";
		const _returnValueavgIjwh = -3.685948211725263;
		const _descriptionWxMmSh = () => { return _returnValueavgIjwh };
		const _OptionkGklI8R = new Option(_flagsS0nqNF0, _descriptionWxMmSh)
		const _argZ8CQuN2 = {
		
	}
		const _returnValueldrPZ50 = await _OptionkGklI8R.is(_argZ8CQuN2)
		const _argyIFAsRY = {
		
	}
		const _returnValueIi32k5v = await _OptionkGklI8R.is(_argyIFAsRY)
		const _valueCxvZevS = {
		
	}
		const _returnValueJ0ndGCJ = false;
		const _concatMeVepip = () => { return _returnValueJ0ndGCJ };
		const _previousT2llRwE = {
			"concat": _concatMeVepip
	}
		const _returnValueCO5y1W = await _OptionkGklI8R._concatValue(_valueCxvZevS, _previousT2llRwE)
		const _valuewlpbwcj = false;
		const _arrayValueICqUevh = {
		
	}
		const _arrayValueluciyQo = true;
		const _previous3X7Q9w = [_arrayValueICqUevh, _arrayValueluciyQo]
		const _returnValueuut4Y6E = await _OptionkGklI8R._concatValue(_valuewlpbwcj, _previous3X7Q9w)
	});
})