export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelptZ8hh0q = new Help()
		const _returnValueWtUFHBm = true;
		const _cmdLbk6uCY = () => { return _returnValueWtUFHBm };
		const _returnValuef0V9GP = undefined;
		const _longestOptionTermLengthKWufZee = () => { return _returnValuef0V9GP };
		const _returnValueI7muSrx = -8.538421617943502;
		const _longestSubcommandTermLengthmqsd5NB = () => { return _returnValueI7muSrx };
		const _returnValueG4PUOQN = -7.397429417048303;
		const _longestArgumentTermLengthPQXnQh0 = () => { return _returnValueG4PUOQN };
		const _helperzrmjGrI = {
			"longestOptionTermLength": _longestOptionTermLengthKWufZee,
		"longestSubcommandTermLength": _longestSubcommandTermLengthmqsd5NB,
		"longestArgumentTermLength": _longestArgumentTermLengthPQXnQh0
	}
		const _returnValuerSrbS98 = await _HelptZ8hh0q.padWidth(_cmdLbk6uCY, _helperzrmjGrI)
		const _argChoicesoSw3yGQ = {
		
	}
		const _defaultValuepeakCZ = undefined;
		const _defaultValueDescriptionJZKJWd9 = "RBO42Tej3Be0NYxpizX8jbkXgvml0Oup4XaGPCjfJA4XchdQYBmAuudPGwwjCxdudD8djk";
		const _arrayValueJDTSZeE = 7.528904903500706;
		const _arrayValueSJo59BX = 9.10572657476392;
		const _arrayValuelQlYsU = true;
		const _arrayValueAl8dBxZ = undefined;
		const _arrayValueRfFvvyg = "TmSIOkVir";
		const _arrayValueX1P8wjC = [_arrayValuelQlYsU, _arrayValueAl8dBxZ, _arrayValueRfFvvyg]
		const _arrayValuefHzUjNA = undefined;
		const _descriptionHBFrVLY = [_arrayValueJDTSZeE, _arrayValueSJo59BX, _arrayValueX1P8wjC, _arrayValuefHzUjNA]
		const _argumentY7fiQjj = {
			"argChoices": _argChoicesoSw3yGQ,
		"defaultValue": _defaultValuepeakCZ,
		"defaultValueDescription": _defaultValueDescriptionJZKJWd9,
		"description": _descriptionHBFrVLY
	}
		const _returnValuehNergm0 = await _HelptZ8hh0q.argumentDescription(_argumentY7fiQjj)
		const _returnValuexlOmGmV = null;
		const _nameyQSbbRW = () => { return _returnValuexlOmGmV };
		const _argumentPGoMNSH = {
			"name": _nameyQSbbRW
	}
		const _returnValuebRY0gxz = await _HelptZ8hh0q.argumentTerm(_argumentPGoMNSH)
		const __argsDescriptionO7Gy1sj = {
		
	}
		const __argsXvarF8z = "Bd8UwiaObyfQ4zEomk8nh4BA2raI463TCrIiyv7WIW8LVkHEHsrvhs1uOFZpr";
		const _cmdzbj55EE = {
			"_argsDescription": __argsDescriptionO7Gy1sj,
		"_args": __argsXvarF8z
	}
		const _returnValuecA9gJBZ = await _HelptZ8hh0q.visibleArguments(_cmdzbj55EE)
	});

	it('test for Help', async () => {
		const _HelpohSMct = new Help()
		const __argsDescriptionMkt4lAz = {
		
	}
		const __argsj3WwV2Y = {
		
	}
		const _cmdAWBXgUG = {
			"_argsDescription": __argsDescriptionMkt4lAz,
		"_args": __argsj3WwV2Y
	}
		const _returnValueBEI1DN9 = await _HelpohSMct.visibleArguments(_cmdAWBXgUG)
		const _cmdNx8waey = false;
		const _returnValueS6YymcD = await _HelpohSMct.subcommandTerm(_cmdNx8waey)
		const __nameFHZNpUI = {
		
	}
		const __aliasesfGP42w = {
		
	}
		const _parentHDsF99 = {
		
	}
		const _usageXskAzsh = "yNkxdP1HQAmh6kNl4gIibNLzcnB607qQ4dod0Hyvj5F";
		const _cmdV3ZqvU8 = {
			"_name": __nameFHZNpUI,
		"_aliases": __aliasesfGP42w,
		"parent": _parentHDsF99,
		"usage": _usageXskAzsh
	}
		const _returnValuegMMLoLV = await _HelpohSMct.commandUsage(_cmdV3ZqvU8)
		const _cmdaq7d2HD = {
		
	}
		const _returnValueWvwcx73 = -6.1172799158181395;
		const _visibleOptionstK9dAf5 = () => { return _returnValueWvwcx73 };
		const _returnValueswHi7iP = undefined;
		const _returnValueolhY9XA = () => { return _returnValueswHi7iP };
		const _optionTermftcBqCa = () => { return _returnValueolhY9XA };
		const _helperAfbX8KP = {
			"visibleOptions": _visibleOptionstK9dAf5,
		"optionTerm": _optionTermftcBqCa
	}
		const _returnValueE465GYC = await _HelpohSMct.longestOptionTermLength(_cmdaq7d2HD, _helperAfbX8KP)
	});

	it('test for Help', async () => {
		const _HelphPjlJVO = new Help()
		const _arrayValueCYbRYYA = {
		
	}
		const _arrayValueYoQGokv = "s1Atu6AuVPUAX1qRcvw6HhjLRCpJwzOfrqGldhAhAyoZ4o5WUiS6";
		const _cmdyC8ONvt = [_arrayValueCYbRYYA, _arrayValueYoQGokv]
		const _returnValuevEA4tr2 = await _HelphPjlJVO.subcommandDescription(_cmdyC8ONvt)
		const _cmdDJbOrWP = false;
		const _returnValuel44AYZI = undefined;
		const _returnValueyEhCoW9 = () => { return _returnValuel44AYZI };
		const _visibleOptionspKfSH8e = () => { return _returnValueyEhCoW9 };
		const _returnValueHwQde3R = false;
		const _optionTermVs77Klb = () => { return _returnValueHwQde3R };
		const _helperQXek47Q = {
			"visibleOptions": _visibleOptionspKfSH8e,
		"optionTerm": _optionTermVs77Klb
	}
		const _returnValueDof110o = await _HelphPjlJVO.longestOptionTermLength(_cmdDJbOrWP, _helperQXek47Q)
	});

	it('test for Help', async () => {
		const _HelpLdxKr7c = new Help()
		const __argsWlz3qEz = {
		
	}
		const __nameIxbnfu7 = 0.5738981336830342;
		const __aliasesshuwCRW = {
		
	}
		const _optionsXxUKdSS = {
		
	}
		const _cmdfCIwnit = {
			"_args": __argsWlz3qEz,
		"_name": __nameIxbnfu7,
		"_aliases": __aliasesshuwCRW,
		"options": _optionsXxUKdSS
	}
		const _returnValueVslc0tL = await _HelpLdxKr7c.subcommandTerm(_cmdfCIwnit)
		const _arrayValueXFsmsB5 = null;
		const _cmdmgEYEPd = [_arrayValueXFsmsB5]
		const _arrayValueEr4MIgn = "9KFKW4";
		const _arrayValueVYfh0pY = -0.8922820394362514;
		const _sortSubcommandsnIKK2Lh = [_arrayValueEr4MIgn, _arrayValueVYfh0pY]
		const _returnValueRUCaSU = []
		const _returnValueS7yBFLa = () => { return _returnValueRUCaSU };
		const _subcommandTermw2teMCa = () => { return _returnValueS7yBFLa };
		const _helpervTeDSGx = {
			"sortSubcommands": _sortSubcommandsnIKK2Lh,
		"subcommandTerm": _subcommandTermw2teMCa
	}
		const _returnValuet3K4SzD = await _HelpLdxKr7c.formatHelp(_cmdmgEYEPd, _helpervTeDSGx)
		const _optionsPtmh2Fs = {
		
	}
		const __hasHelpOptionQz0a5Ch = 0.5703505743635144;
		const __helpShortFlagy1DaXPz = false;
		const _returnValueNnY5grF = null;
		const __findOptionbtdy49o = () => { return _returnValueNnY5grF };
		const __helpLongFlagdfNJpcd = []
		const _createOptionaOZF3Jd = true;
		const __helpDescriptionLV6NbC = "XSKoTXXkbxx3taty5lT99zV0u86Q3FjPnxUrPUJVUeVuB5zmDss4";
		const __helpFlagsDiaJgew = "iipkWcNK8KEbEMrJLy9DRFUBNILx37KlUqW";
		const _cmdimYxbiD = {
			"options": _optionsPtmh2Fs,
		"_hasHelpOption": __hasHelpOptionQz0a5Ch,
		"_helpShortFlag": __helpShortFlagy1DaXPz,
		"_findOption": __findOptionbtdy49o,
		"_helpLongFlag": __helpLongFlagdfNJpcd,
		"createOption": _createOptionaOZF3Jd,
		"_helpDescription": __helpDescriptionLV6NbC,
		"_helpFlags": __helpFlagsDiaJgew
	}
		const _returnValueM7hw73z = await _HelpLdxKr7c.visibleOptions(_cmdimYxbiD)
		const __argsQlakiso = {
		
	}
		const __namehohoDdh = -0.969957639133062;
		const __aliasesqxxZXFL = {
		
	}
		const _optionsA8gHoG8 = {
		
	}
		const _cmdU9WZ32X = {
			"_args": __argsQlakiso,
		"_name": __namehohoDdh,
		"_aliases": __aliasesqxxZXFL,
		"options": _optionsA8gHoG8
	}
		const _returnValueCE877AD = await _HelpLdxKr7c.subcommandTerm(_cmdU9WZ32X)
		const _cmdrI4NTrK = undefined;
		const _arrayValueDm32xVp = undefined;
		const _returnValueJRqdWuF = {
		
	}
		const _returnValueP4ubhu0 = () => { return _returnValueJRqdWuF };
		const _returnValuekisZT0 = () => { return _returnValueP4ubhu0 };
		const _arrayValuezKfm25B = () => { return _returnValuekisZT0 };
		const _arrayValueamXoC0k = [_arrayValueDm32xVp, _arrayValuezKfm25B]
		const _arrayValueNjaMi9F = true;
		const _sortSubcommandsszzZH2W = [_arrayValueamXoC0k, _arrayValueNjaMi9F]
		const _subcommandTermbTiocbo = null;
		const _helperoXtGKqR = {
			"sortSubcommands": _sortSubcommandsszzZH2W,
		"subcommandTerm": _subcommandTermbTiocbo
	}
		const _returnValueroq44sS = await _HelpLdxKr7c.formatHelp(_cmdrI4NTrK, _helperoXtGKqR)
	});

	it('test for Help', async () => {
		const _HelpYAPneoP = new Help()
		const _arrayValueNjE6P0V = null;
		const _arrayValueEBBKLdO = null;
		const _arrayValueQ3V1mkH = [_arrayValueNjE6P0V, _arrayValueEBBKLdO]
		const _arrayValuecMJe7QC = 4.023746467915712;
		const _arrayValueGujIzi0 = -2.791274780785402;
		const _flagsDVxKnW = [_arrayValueQ3V1mkH, _arrayValuecMJe7QC, _arrayValueGujIzi0]
		const _optionEAOSvNB = {
			"flags": _flagsDVxKnW
	}
		const _returnValuexb2u539 = await _HelpYAPneoP.optionTerm(_optionEAOSvNB)
		const _descriptione2dgOO6 = "jrW7mnZd9C9VBYNwB2jJWxpO8VCawJuFouApi3Ou54QUOAKKB3WnGWLL9dIff74HobQ9TWp13MlOgjKtObd1";
		const _cmdRFaZJL = {
			"description": _descriptione2dgOO6
	}
		const _returnValueMc1kz9O = await _HelpYAPneoP.commandDescription(_cmdRFaZJL)
	});

	it('test for Help', async () => {
		const _HelpJ1lHY6v = new Help()
		const _arrayValueBdAVNzh = {
		
	}
		const _returnValueh8vBxzx = [_arrayValueBdAVNzh]
		const _cmd0MUi84 = () => { return _returnValueh8vBxzx };
		const _visibleOptionsSzPrizF = "2luTHKaniN7XPr1IOg423X4YTKLGq2Dao7bvEzCtGdml9pKsK1DhxCUloCDJk0twMPBtk";
		const _arrayValuevTHuNPH = {
		
	}
		const _returnValueC6erre = [_arrayValuevTHuNPH]
		const _optionTermsscJecv = () => { return _returnValueC6erre };
		const _helperZrQwgsK = {
			"visibleOptions": _visibleOptionsSzPrizF,
		"optionTerm": _optionTermsscJecv
	}
		const _returnValueHs5bhS2 = await _HelpJ1lHY6v.longestOptionTermLength(_cmd0MUi84, _helperZrQwgsK)
		const _argChoicesKs8XxTg = {
		
	}
		const _negatew6tocqY = "CqvBNWL7OOsxuqe7ittRrqFSJ86zgDy1GbrmCmyBiyDMHPF20s9fh";
		const _defaultValuemz3mEQG = undefined;
		const _defaultValueDescriptionOeN5XQx = null;
		const _envVarLqUjjM4 = undefined;
		const _descriptiont8G3RfU = "VFwueEYQt93n8rkRk5y";
		const _options0pC3Ks = {
			"argChoices": _argChoicesKs8XxTg,
		"negate": _negatew6tocqY,
		"defaultValue": _defaultValuemz3mEQG,
		"defaultValueDescription": _defaultValueDescriptionOeN5XQx,
		"envVar": _envVarLqUjjM4,
		"description": _descriptiont8G3RfU
	}
		const _returnValueK04P0Q = await _HelpJ1lHY6v.optionDescription(_options0pC3Ks)
		const _cmdTxYXXoe = "AcRKJb1xGvROezDrI4tzfa7HwIWpjrPzIPwM9obEBMIkw1i3";
		const _returnValuevbHwos9 = false;
		const _longestOptionTermLengthx10X6j = () => { return _returnValuevbHwos9 };
		const _returnValuepik9NXH = false;
		const _longestSubcommandTermLengthIptC6dp = () => { return _returnValuepik9NXH };
		const _returnValuefxnRkY = undefined;
		const _longestArgumentTermLengthVRzS90l = () => { return _returnValuefxnRkY };
		const _helperBI7IICT = {
			"longestOptionTermLength": _longestOptionTermLengthx10X6j,
		"longestSubcommandTermLength": _longestSubcommandTermLengthIptC6dp,
		"longestArgumentTermLength": _longestArgumentTermLengthVRzS90l
	}
		const _returnValueQJbkNo1 = await _HelpJ1lHY6v.padWidth(_cmdTxYXXoe, _helperBI7IICT)
		const _flagstjXZy6B = null;
		const _optionB3FKYde = {
			"flags": _flagstjXZy6B
	}
		const _returnValuePeon588 = await _HelpJ1lHY6v.optionTerm(_optionB3FKYde)
		const _cmdK5CZuP = false;
		const _sortSubcommandsGC5urx = undefined;
		const _returnValuekRXTN8 = null;
		const _subcommandTermhcBpzwz = () => { return _returnValuekRXTN8 };
		const _helperrSEkG2 = {
			"sortSubcommands": _sortSubcommandsGC5urx,
		"subcommandTerm": _subcommandTermhcBpzwz
	}
		const _returnValueSifLUaV = await _HelpJ1lHY6v.longestSubcommandTermLength(_cmdK5CZuP, _helperrSEkG2)
	});

	it('test for Help', async () => {
		const _HelpDQfnVFv = new Help()
		const _returnValuevZzqpV6 = -1.46155130045965;
		const _nameW1VcuoU = () => { return _returnValuevZzqpV6 };
		const _argumentWFRtIXr = {
			"name": _nameW1VcuoU
	}
		const _returnValuent3J9qp = await _HelpDQfnVFv.argumentTerm(_argumentWFRtIXr)
		const __namelb1CLc = {
		
	}
		const __aliasesdYPrDLs = {
		
	}
		const _parentB3uY51D = {
		
	}
		const _usage0WiJVf = false;
		const _cmdG7zJkjp = {
			"_name": __namelb1CLc,
		"_aliases": __aliasesdYPrDLs,
		"parent": _parentB3uY51D,
		"usage": _usage0WiJVf
	}
		const _returnValueAPWAsPn = await _HelpDQfnVFv.commandUsage(_cmdG7zJkjp)
	});

	it('test for Help', async () => {
		const _HelpOnWJGz = new Help()
		const _returnValueymKUASy = undefined;
		const _nameuojwBl = () => { return _returnValueymKUASy };
		const _argumentqMH2iB4 = {
			"name": _nameuojwBl
	}
		const _returnValueH89toQx = await _HelpOnWJGz.argumentTerm(_argumentqMH2iB4)
		const _returnValueVMvr0Vi = null;
		const _descriptionJ8LbB60 = () => { return _returnValueVMvr0Vi };
		const _cmdmpu5ssI = {
			"description": _descriptionJ8LbB60
	}
		const _returnValuercSzc2Q = await _HelpOnWJGz.subcommandDescription(_cmdmpu5ssI)
		const _returnValueBnbPoxp = null;
		const _matchmJ4fxe6 = () => { return _returnValueBnbPoxp };
		const _returnValueCdzr0JO = null;
		const _arrayValueKRXwSJo = () => { return _returnValueCdzr0JO };
		const _arrayValueNb3G668 = [_arrayValueKRXwSJo]
		const _arrayValueJoWSKiH = {
		
	}
		const _arrayValuetFrlMsx = [_arrayValueNb3G668, _arrayValueJoWSKiH]
		const _arrayValueUVyx17 = undefined;
		const _returnValueU4KhMns = [_arrayValuetFrlMsx, _arrayValueUVyx17]
		const _substrfDbX6Wg = () => { return _returnValueU4KhMns };
		const _strbp7rRH1 = {
			"match": _matchmJ4fxe6,
		"substr": _substrfDbX6Wg
	}
		const _widthRBJ3X8C = -4.207519109770594;
		const _indentKqeMpSw = 8.264179436383788;
		const _minColumnWidthSmWa5O4 = 7.188879095798885;
		const _returnValuelcWbkNb = await _HelpOnWJGz.wrap(_strbp7rRH1, _widthRBJ3X8C, _indentKqeMpSw, _minColumnWidthSmWa5O4)
		const _argChoicesaMXAnj = {
		
	}
		const _defaultValueDb5zoZ = undefined;
		const _defaultValueDescriptionFi4N4x = undefined;
		const _descriptionsg38cLq = true;
		const _argumenteZpq8x6 = {
			"argChoices": _argChoicesaMXAnj,
		"defaultValue": _defaultValueDb5zoZ,
		"defaultValueDescription": _defaultValueDescriptionFi4N4x,
		"description": _descriptionsg38cLq
	}
		const _returnValuesW4u165 = await _HelpOnWJGz.argumentDescription(_argumenteZpq8x6)
	});

	it('test for Help', async () => {
		const _HelpWU9gPo1 = new Help()
		const _arrayValuelLuR9EH = undefined;
		const _arrayValueI7Wqpud = false;
		const _arrayValue3ICM5s = "ZXfdDNnLKx4vQ40TEXeOQKJBkKNrrHS6qIbG7AReBgzB9pEVAkybEWM4Dt35b0PnMLIgMbsQu7VGrK33lCnMRKD";
		const _flagsKLFshI5 = [_arrayValuelLuR9EH, _arrayValueI7Wqpud, _arrayValue3ICM5s]
		const _optiondkJgtjd = {
			"flags": _flagsKLFshI5
	}
		const _returnValueRfwgj1 = await _HelpWU9gPo1.optionTerm(_optiondkJgtjd)
		const _cmdD6KfLn = undefined;
		const _returnValueuOtcJB6 = false;
		const _visibleArgumentsC7J3fj3 = () => { return _returnValueuOtcJB6 };
		const _returnValueLCuaINp = "F5PgjnCjPWdWNc8FWEmAVb4a";
		const _returnValueNCHjClN = () => { return _returnValueLCuaINp };
		const _argumentTermxhTVuzi = () => { return _returnValueNCHjClN };
		const _helperQa1VQcW = {
			"visibleArguments": _visibleArgumentsC7J3fj3,
		"argumentTerm": _argumentTermxhTVuzi
	}
		const _returnValuedwdY9Tg = await _HelpWU9gPo1.longestArgumentTermLength(_cmdD6KfLn, _helperQa1VQcW)
		const _optionsFzE9vK1 = {
		
	}
		const __hasHelpOptionXuFNqoc = null;
		const _arrayValueqmZeNq = null;
		const _returnValueAQovYxW = {
		
	}
		const _arrayValueYf49UIu = () => { return _returnValueAQovYxW };
		const __helpShortFlag4sSU01 = [_arrayValueqmZeNq, _arrayValueYf49UIu]
		const _returnValueLnc73mR = {
		
	}
		const __findOptionsc0xvjz = () => { return _returnValueLnc73mR };
		const _returnValue9W2pwo = -8.132718248175957;
		const __helpLongFlagN37QtL3 = () => { return _returnValue9W2pwo };
		const _returnValueQXnqqhR = "NFhegdqIqa5xhINWGpPTPndrB7ALWYRfkQ6lOhcaUiJ77t6ngkncZYMNC1HabKOE5bqJaA";
		const _createOptionNcv7j7A = () => { return _returnValueQXnqqhR };
		const _arrayValueQnLRE72 = "Xxpeb8wtm9v14z0CEkfj4m2VJ4cdrjftkBFcY6";
		const __helpDescriptionxn0nF3x = [_arrayValueQnLRE72]
		const __helpFlagshJBp2go = 7.037510090692649;
		const _cmdCH250fu = {
			"options": _optionsFzE9vK1,
		"_hasHelpOption": __hasHelpOptionXuFNqoc,
		"_helpShortFlag": __helpShortFlag4sSU01,
		"_findOption": __findOptionsc0xvjz,
		"_helpLongFlag": __helpLongFlagN37QtL3,
		"createOption": _createOptionNcv7j7A,
		"_helpDescription": __helpDescriptionxn0nF3x,
		"_helpFlags": __helpFlagshJBp2go
	}
		const _returnValueAm8aBBP = await _HelpWU9gPo1.visibleOptions(_cmdCH250fu)
		const _cmdYm3ztZO = "ECsXg9BoHxm9KkpQYyhtwRWsf";
		const _returnValuelpnXdTu = await _HelpWU9gPo1.commandUsage(_cmdYm3ztZO)
	});

	it('test for Help', async () => {
		const _Helpb9zJegd = new Help()
		const _returnValueAuptxNS = undefined;
		const _nameS8ukXUf = () => { return _returnValueAuptxNS };
		const _argumentWt9V8yB = {
			"name": _nameS8ukXUf
	}
		const _returnValueU2HgXsH = await _Helpb9zJegd.argumentTerm(_argumentWt9V8yB)
		const _returnValueb8TUawV = "J5hKTNtXbrumv5rwJjuR7eEPWGYOqeuRvbYEAkuTn84S3wqG8";
		const _nameAOreTpw = () => { return _returnValueb8TUawV };
		const _argumentBtTYa5 = {
			"name": _nameAOreTpw
	}
		const _returnValuebFJPF4M = await _Helpb9zJegd.argumentTerm(_argumentBtTYa5)
		const _returnValueOZf8c43 = {
		
	}
		const _descriptionuCVBXf8 = () => { return _returnValueOZf8c43 };
		const _cmdvUqpPsz = {
			"description": _descriptionuCVBXf8
	}
		const _returnValueRu8AIo = await _Helpb9zJegd.commandDescription(_cmdvUqpPsz)
		const _cmdnyHYdC = null;
		const _arrayValueWiEQ6fS = -8.600522543604503;
		const _arrayValueEBnEz2r = undefined;
		const _arrayValueNlJaQ5 = false;
		const _sortSubcommandsIiqtGV = [_arrayValueWiEQ6fS, _arrayValueEBnEz2r, _arrayValueNlJaQ5]
		const _returnValuejzdYQI7 = "klqQVUBFfDI9FBsRoWLijqMKPDSMq8iLWFQ";
		const _subcommandTermfvE1XII = () => { return _returnValuejzdYQI7 };
		const _helperH9GlIfS = {
			"sortSubcommands": _sortSubcommandsIiqtGV,
		"subcommandTerm": _subcommandTermfvE1XII
	}
		const _returnValueexyA9h0 = await _Helpb9zJegd.longestSubcommandTermLength(_cmdnyHYdC, _helperH9GlIfS)
		const __argsDescriptionbl9JHN = undefined;
		const __argsE0FVDdb = {
		
	}
		const _cmdWpMNWMf = {
			"_argsDescription": __argsDescriptionbl9JHN,
		"_args": __argsE0FVDdb
	}
		const _returnValuenPow5kV = await _Helpb9zJegd.visibleArguments(_cmdWpMNWMf)
	});

	it('test for Help', async () => {
		const _HelpLVrWBI = new Help()
		const _returnValuebSSDCbe = undefined;
		const _descriptionWQvuYxQ = () => { return _returnValuebSSDCbe };
		const _cmdFhZ9qV7 = {
			"description": _descriptionWQvuYxQ
	}
		const _returnValuePCdYd8n = await _HelpLVrWBI.commandDescription(_cmdFhZ9qV7)
		const _optionsBuzP9L1 = undefined;
		const _arrayValueh2ijzPU = null;
		const _arrayValueYwy5y06 = false;
		const __hasHelpOptionUyxyBie = [_arrayValueh2ijzPU, _arrayValueYwy5y06]
		const __helpShortFlaggk1y6Pf = "hZbpN8obUXcWAJpT8zM1PXx3qv";
		const _arrayValuejYXrptX = true;
		const _arrayValuedLmkw2w = null;
		const _arrayValueiZ0YrYN = null;
		const _returnValuei0SntXX = [_arrayValuejYXrptX, _arrayValuedLmkw2w, _arrayValueiZ0YrYN]
		const __findOptionCWhQE0W = () => { return _returnValuei0SntXX };
		const __helpLongFlagBpZZAFQ = "RchSX9DR8GfcRonmQ5HmEwUvASKheD3C2KtkVBgSUFEqLx1QbQQiklSoJEJdhjiFjTv1";
		const _returnValueHpD8knr = -8.89458866795043;
		const _createOptionwzASmn = () => { return _returnValueHpD8knr };
		const __helpDescriptionRZSKiZ6 = {
		
	}
		const _arrayValueYIru3ir = false;
		const _arrayValueHYQi2p = {
		
	}
		const __helpFlagsBoiNcMA = [_arrayValueYIru3ir, _arrayValueHYQi2p]
		const _cmdqQriX1Y = {
			"options": _optionsBuzP9L1,
		"_hasHelpOption": __hasHelpOptionUyxyBie,
		"_helpShortFlag": __helpShortFlaggk1y6Pf,
		"_findOption": __findOptionCWhQE0W,
		"_helpLongFlag": __helpLongFlagBpZZAFQ,
		"createOption": _createOptionwzASmn,
		"_helpDescription": __helpDescriptionRZSKiZ6,
		"_helpFlags": __helpFlagsBoiNcMA
	}
		const _returnValueH5Znx8s = await _HelpLVrWBI.visibleOptions(_cmdqQriX1Y)
	});

	it('test for Help', async () => {
		const _HelpGqaJi88 = new Help()
		const _arrayValueiDptPEN = "cj8BSGiFPEt32UvfsocciqyQHk6zu2nWW7ri4jOIqbILSasFvJ9gLH58I1zwopgat81X1Ng4BHk2Ty";
		const _arrayValueNPjGoIe = 1.5821425449583533;
		const _cmdUvnmCY = [_arrayValueiDptPEN, _arrayValueNPjGoIe]
		const _sortSubcommandsZqU8C53 = false;
		const _returnValueZyebBN3 = null;
		const _subcommandTermkHqpAmb = () => { return _returnValueZyebBN3 };
		const _helperqjhPxGQ = {
			"sortSubcommands": _sortSubcommandsZqU8C53,
		"subcommandTerm": _subcommandTermkHqpAmb
	}
		const _returnValueu5MKcZG = await _HelpGqaJi88.formatHelp(_cmdUvnmCY, _helperqjhPxGQ)
	});

	it('test for Help', async () => {
		const _HelpBLs7AWh = new Help()
		const _argChoicesxrrGcl = {
		
	}
		const _arrayValueowCIqav = "MbcFoM2Fp81";
		const _arrayValuetXERy0 = "r4NCqKHtk";
		const _arrayValuet9GgIEl = true;
		const _negateA2BRXiv = [_arrayValueowCIqav, _arrayValuetXERy0, _arrayValuet9GgIEl]
		const _defaultValueBvyCTks = undefined;
		const _defaultValueDescriptionl3hbDxC = false;
		const _envVarwfbfGjx = undefined;
		const _descriptionlQYrbP = undefined;
		const _optiongfMzBEQ = {
			"argChoices": _argChoicesxrrGcl,
		"negate": _negateA2BRXiv,
		"defaultValue": _defaultValueBvyCTks,
		"defaultValueDescription": _defaultValueDescriptionl3hbDxC,
		"envVar": _envVarwfbfGjx,
		"description": _descriptionlQYrbP
	}
		const _returnValueQlWB20L = await _HelpBLs7AWh.optionDescription(_optiongfMzBEQ)
		const _argChoicesabB0Ds4 = {
		
	}
		const _negateZbNeUn5 = false;
		const _defaultValue2LF27o = undefined;
		const _defaultValueDescriptionAthwgR5 = -7.129686372943029;
		const _envVarKrJyH5S = undefined;
		const _descriptionmoYz47 = "8qM68sC0BxtxA4wgbUFa8fDo2SIpdh99BZzVXsf8aiQmPG1dtyAp1c63ubpWaqOxB8FBxAJJfoKu7xn6lukQsBGjKJtN80qj6U";
		const _optionZpiWvJO = {
			"argChoices": _argChoicesabB0Ds4,
		"negate": _negateZbNeUn5,
		"defaultValue": _defaultValue2LF27o,
		"defaultValueDescription": _defaultValueDescriptionAthwgR5,
		"envVar": _envVarKrJyH5S,
		"description": _descriptionmoYz47
	}
		const _returnValuex78sGwx = await _HelpBLs7AWh.optionDescription(_optionZpiWvJO)
		const _cmdQ8WC8Re = true;
		const _returnValueiu2ktrQ = null;
		const _longestOptionTermLengthiAqABs0 = () => { return _returnValueiu2ktrQ };
		const _returnValuegFkschR = false;
		const _longestSubcommandTermLengthDQbzSbC = () => { return _returnValuegFkschR };
		const _longestArgumentTermLengthTNJLSXr = {
		
	}
		const _helpernVYw6d = {
			"longestOptionTermLength": _longestOptionTermLengthiAqABs0,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDQbzSbC,
		"longestArgumentTermLength": _longestArgumentTermLengthTNJLSXr
	}
		const _returnValueE8EPafo = await _HelpBLs7AWh.padWidth(_cmdQ8WC8Re, _helpernVYw6d)
		const _arrayValuenl6YqJq = true;
		const _arrayValueBhN9wk9 = undefined;
		const _arrayValuepOAqSYp = "unNhjIp2T4qGSWyFkKgatX6D";
		const _returnValuecxFiwWk = false;
		const _returnValueZHpK2J = () => { return _returnValuecxFiwWk };
		const _arrayValueNC26VxW = () => { return _returnValueZHpK2J };
		const _arrayValuedRpveQ8 = [_arrayValuepOAqSYp, _arrayValueNC26VxW]
		const _returnValueA0HHwBW = [_arrayValuenl6YqJq, _arrayValueBhN9wk9, _arrayValuedRpveQ8]
		const _commandshVfTDu = () => { return _returnValueA0HHwBW };
		const _returnValueMlwcCmI = "29I2TWFQdWlvxD3dcosUHHlFNF2KyEkSCXiZR1GiQH2";
		const __hasImplicitHelpCommandvFYz4Es = () => { return _returnValueMlwcCmI };
		const __helpCommandnameAndArgsegunBFL = {
		
	}
		const _returnValueV4Oypd = -9.635830030716079;
		const _createCommandUmGQwqk = () => { return _returnValueV4Oypd };
		const __helpCommandDescriptionB0Kis5U = "Y3RWppcBf1UXbRjR7uT9btYXvdSe4T8y5DaVBbrClf2hxcxFk";
		const _cmdQRZMzF = {
			"commands": _commandshVfTDu,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandvFYz4Es,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsegunBFL,
		"createCommand": _createCommandUmGQwqk,
		"_helpCommandDescription": __helpCommandDescriptionB0Kis5U
	}
		const _returnValueB4OrKar = await _HelpBLs7AWh.visibleCommands(_cmdQRZMzF)
	});

	it('test for Help', async () => {
		const _HelpuJaeM2r = new Help()
		const _returnValueDyjmGDq = "PyHTm1kwcRNY6iEtMCIfgLslHA3H4lk";
		const _match8GUR0g = () => { return _returnValueDyjmGDq };
		const _arrayValuemADbo6v = null;
		const _arrayValueRhdUieH = "uPCDefDULN4M5d28B3j4wm8x46z5V68A1gbJpZQwHtd0mUZox9S7RnFE9ZSn9kUXcK4tKvpo3KywgBN61";
		const _arrayValuebGpik7x = [_arrayValueRhdUieH]
		const _arrayValuefvUmMLW = "TGEtK9DGC6yanYkTcWEjo22hBjF762udOpuUFXCNzAJ6RWtOoUWZNSGXAmi1IvkdSyg5XiDIWeX6P5lvOj3MRal9jb";
		const _substro9Z9a0y = [_arrayValuemADbo6v, _arrayValuebGpik7x, _arrayValuefvUmMLW]
		const _struuwoWIj = {
			"match": _match8GUR0g,
		"substr": _substro9Z9a0y
	}
		const _widthrYgNE8M = 4.3450828893623274;
		const _indentLeImxLS = 2.680768599377906;
		const _minColumnWidthxRPi4YO = 4.040660566977682;
		const _returnValuedObGEQW = await _HelpuJaeM2r.wrap(_struuwoWIj, _widthrYgNE8M, _indentLeImxLS, _minColumnWidthxRPi4YO)
		const _arrayValueRJFcQJ8 = 4.119902136151666;
		const _arrayValueBuwufrP = "a5pf90Y3JZ83oo3akZ3eKYCP9GN7ImN7s08oUncK95quFeE2WNiixejqPjxgCDfmdtSNaHL";
		const _arrayValueDGEypLx = [_arrayValueRJFcQJ8, _arrayValueBuwufrP]
		const _returnValuePhpxiab = [_arrayValueDGEypLx]
		const _nameQTQHB4y = () => { return _returnValuePhpxiab };
		const _argumentceGcY8H = {
			"name": _nameQTQHB4y
	}
		const _returnValueOkzgkyU = await _HelpuJaeM2r.argumentTerm(_argumentceGcY8H)
		const _returnValueOOiP1Lw = -0.41192623397173556;
		const _descriptionLd1XWq8 = () => { return _returnValueOOiP1Lw };
		const _cmdk49ID8R = {
			"description": _descriptionLd1XWq8
	}
		const _returnValuedrZtJOt = await _HelpuJaeM2r.subcommandDescription(_cmdk49ID8R)
	});

	it('test for Help', async () => {
		const _HelpS1l3utH = new Help()
		const _commandsBhuBl7t = {
		
	}
		const _arrayValueE9h0TU = null;
		const _returnValuezszddK = [_arrayValueE9h0TU]
		const __hasImplicitHelpCommand3RTpM2 = () => { return _returnValuezszddK };
		const __helpCommandnameAndArgsJv366ni = {
		
	}
		const _returnValuegz8nQLJ = "QBJq3AcwnR73bv274J5DjxjjBWbubc5h8YbYaOBlMEEacPlfjPk";
		const _createCommandlL4gls = () => { return _returnValuegz8nQLJ };
		const __helpCommandDescriptionYQm8hNv = null;
		const _cmdUpQzGQc = {
			"commands": _commandsBhuBl7t,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommand3RTpM2,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsJv366ni,
		"createCommand": _createCommandlL4gls,
		"_helpCommandDescription": __helpCommandDescriptionYQm8hNv
	}
		const _returnValueppX3mSC = await _HelpS1l3utH.visibleCommands(_cmdUpQzGQc)
		const _cmdZNNHWd = undefined;
		const _sortSubcommandsKsJ5mls = undefined;
		const _returnValuezho1cOm = undefined;
		const _returnValueDnAuOIC = () => { return _returnValuezho1cOm };
		const _subcommandTermFhcfTi6 = () => { return _returnValueDnAuOIC };
		const _helperQMtAqHq = {
			"sortSubcommands": _sortSubcommandsKsJ5mls,
		"subcommandTerm": _subcommandTermFhcfTi6
	}
		const _returnValueto8FtLB = await _HelpS1l3utH.formatHelp(_cmdZNNHWd, _helperQMtAqHq)
	});

	it('test for Help', async () => {
		const _HelpJajjnVd = new Help()
		const _argChoicesXzRKDdF = false;
		const _defaultValueqWDOSG = undefined;
		const _defaultValueDescriptionvmLfdbE = {
		
	}
		const _descriptionvQha7Sz = "FYrQeaPJgfRSzoxSUbhHRSEcyypqskIIXfbTR0Ru6UDTEaWcBI";
		const _argumentYyE0QN = {
			"argChoices": _argChoicesXzRKDdF,
		"defaultValue": _defaultValueqWDOSG,
		"defaultValueDescription": _defaultValueDescriptionvmLfdbE,
		"description": _descriptionvQha7Sz
	}
		const _returnValueHIA2krs = await _HelpJajjnVd.argumentDescription(_argumentYyE0QN)
		const _returnValuesqhWHnd = {
		
	}
		const _descriptioneJqkejO = () => { return _returnValuesqhWHnd };
		const _cmdn35Zxvk = {
			"description": _descriptioneJqkejO
	}
		const _returnValueDpLnIAV = await _HelpJajjnVd.commandDescription(_cmdn35Zxvk)
		const _returnValueaNmHCMq = false;
		const _descriptionKqWNWb3 = () => { return _returnValueaNmHCMq };
		const _cmdqzA7ypH = {
			"description": _descriptionKqWNWb3
	}
		const _returnValueguZkLiE = await _HelpJajjnVd.commandDescription(_cmdqzA7ypH)
	});

	it('test for Help', async () => {
		const _HelpxNSo0gr = new Help()
		const _returnValueU6IZCRu = undefined;
		const _matchxvYdu0U = () => { return _returnValueU6IZCRu };
		const _returnValue3tY7ze = null;
		const _substrfyF2pi7 = () => { return _returnValue3tY7ze };
		const _strIxdBKsb = {
			"match": _matchxvYdu0U,
		"substr": _substrfyF2pi7
	}
		const _widthcSu8VY = 9.827993466684102;
		const _indentirt5kPw = 9.931294411583561;
		const _minColumnWidthaBjsw9F = -7.967965994316311;
		const _returnValueZy2YwN7 = await _HelpxNSo0gr.wrap(_strIxdBKsb, _widthcSu8VY, _indentirt5kPw, _minColumnWidthaBjsw9F)
		const _cmdKOgBZSi = 8.543057834922912;
		const _sortSubcommandsNUUFf3 = 4.84426898308271;
		const _returnValueIzIQuP0 = 8.787372389494003;
		const _subcommandTermyShg9IX = () => { return _returnValueIzIQuP0 };
		const _helperxRjiEE = {
			"sortSubcommands": _sortSubcommandsNUUFf3,
		"subcommandTerm": _subcommandTermyShg9IX
	}
		const _returnValueg1ABH9v = await _HelpxNSo0gr.longestSubcommandTermLength(_cmdKOgBZSi, _helperxRjiEE)
		const __argsIbiy4MQ = {
		
	}
		const __nameyBoIeG = -0.5653553599984011;
		const __aliasesGHLcRnL = {
		
	}
		const _optionsqc09Vmn = {
		
	}
		const _cmdYnoLfBc = {
			"_args": __argsIbiy4MQ,
		"_name": __nameyBoIeG,
		"_aliases": __aliasesGHLcRnL,
		"options": _optionsqc09Vmn
	}
		const _returnValuedeX2IwP = await _HelpxNSo0gr.subcommandTerm(_cmdYnoLfBc)
	});

	it('test for Help', async () => {
		const _HelpN4nuf5O = new Help()
		const _argChoicesVt41Xnu = {
		
	}
		const _negateco6JhG = "HTrDtjgDzeD290H2LhRlLXIfUC9pZt7";
		const _returnValuepa7b14Z = undefined;
		const _defaultValueh0fuFN4 = () => { return _returnValuepa7b14Z };
		const _defaultValueDescriptionJVKY4uJ = 8.861488459362128;
		const _envVarUS543Rl = undefined;
		const _arrayValueGpbLuV = "gFxJjFD1Uf64HEwA8H7SJTSiHEaLup8AJgtiir32FP9JdtwycwENRr";
		const _descriptionqi98gyN = [_arrayValueGpbLuV]
		const _optionizPGcon = {
			"argChoices": _argChoicesVt41Xnu,
		"negate": _negateco6JhG,
		"defaultValue": _defaultValueh0fuFN4,
		"defaultValueDescription": _defaultValueDescriptionJVKY4uJ,
		"envVar": _envVarUS543Rl,
		"description": _descriptionqi98gyN
	}
		const _returnValuecTT0CJM = await _HelpN4nuf5O.optionDescription(_optionizPGcon)
		const _returnValueS8zHuXE = -1.8445954873167452;
		const _returnValueer9hfeA = () => { return _returnValueS8zHuXE };
		const _arrayValuedA28jN = () => { return _returnValueer9hfeA };
		const _returnValueOHoKu9n = null;
		const _arrayValueo12yUJA = () => { return _returnValueOHoKu9n };
		const _arrayValueFGPVywS = [_arrayValueo12yUJA]
		const _arrayValuegO51r1b = undefined;
		const _arrayValueOh1uWx = true;
		const _returnValueD5y5Vxt = [_arrayValuedA28jN, _arrayValueFGPVywS, _arrayValuegO51r1b, _arrayValueOh1uWx]
		const _descriptionQD8AVgk = () => { return _returnValueD5y5Vxt };
		const _cmdtub6o3H = {
			"description": _descriptionQD8AVgk
	}
		const _returnValuetNRuIwZ = await _HelpN4nuf5O.commandDescription(_cmdtub6o3H)
		const _arrayValueNYlhX2O = "cywH3IRXfIADsWtFcJiuMm29x7JLrpS4vLURSqcVoSia7Z7BdNCIbTqgE3";
		const _arrayValuea3Kp58m = 4.20310386381831;
		const _argChoicesVXWODi = [_arrayValueNYlhX2O, _arrayValuea3Kp58m]
		const _defaultValue061gM2 = undefined;
		const _defaultValueDescriptionbP3toUH = 3.642934318672779;
		const _descriptionpp6Icgx = undefined;
		const _argumentvzpj2Wl = {
			"argChoices": _argChoicesVXWODi,
		"defaultValue": _defaultValue061gM2,
		"defaultValueDescription": _defaultValueDescriptionbP3toUH,
		"description": _descriptionpp6Icgx
	}
		const _returnValuef7oA1i = await _HelpN4nuf5O.argumentDescription(_argumentvzpj2Wl)
		const _cmdhL2fDQW = 3.5981134922814544;
		const _helperpT43Fm5 = null;
		const _returnValuehCwcmdn = await _HelpN4nuf5O.longestOptionTermLength(_cmdhL2fDQW, _helperpT43Fm5)
	});

	it('test for Help', async () => {
		const _HelpXHHMudj = new Help()
		const _argChoicesOSnLYxD = {
		
	}
		const _negatejh6xSwi = []
		const _defaultValuexuBB6BD = undefined;
		const _defaultValueDescriptionJJtOtv = "7Lg4XHLAKwIpBp2ayyufMtHA5OhhiXMdg1S8nIbA1N57y2eYBAaDPTyzhaJuFTK6EQTT2rimGLif7xuKxqCBNj";
		const _envVarHVapDR = -3.2517609709564974;
		const _arrayValueh7k7WFM = "ePImJ2v7sky6BuViVPIwRsbYmMvAq2EpsHiEul8r12mZjKeSqPpgIU9H4L1GXKq3L44Xej3CIrmoy43FvnTXyLg";
		const _arrayValueJz14beB = false;
		const _arrayValuemwE0NbM = [_arrayValueh7k7WFM, _arrayValueJz14beB]
		const _arrayValueyPAxPj = undefined;
		const _descriptionTU2XlPj = [_arrayValuemwE0NbM, _arrayValueyPAxPj]
		const _optionrzy2lmK = {
			"argChoices": _argChoicesOSnLYxD,
		"negate": _negatejh6xSwi,
		"defaultValue": _defaultValuexuBB6BD,
		"defaultValueDescription": _defaultValueDescriptionJJtOtv,
		"envVar": _envVarHVapDR,
		"description": _descriptionTU2XlPj
	}
		const _returnValueQdMzNCu = await _HelpXHHMudj.optionDescription(_optionrzy2lmK)
	});

	it('test for Help', async () => {
		const _HelpD2kz9u = new Help()
		const __argsblHFqvm = []
		const __namecJmeufw = 8.268307775129948;
		const __aliasesyFa9ZVv = {
		
	}
		const _optionsefUFX6R = {
		
	}
		const _cmdhaJay6g = {
			"_args": __argsblHFqvm,
		"_name": __namecJmeufw,
		"_aliases": __aliasesyFa9ZVv,
		"options": _optionsefUFX6R
	}
		const _returnValuefLQLXS = await _HelpD2kz9u.subcommandTerm(_cmdhaJay6g)
		const _cmdHvE0Vro = null;
		const _returnValuekvJGSbl = null;
		const _visibleOptionsyFJBbdv = () => { return _returnValuekvJGSbl };
		const _optionTermsw6exFe = false;
		const _helperGz2Kr4i = {
			"visibleOptions": _visibleOptionsyFJBbdv,
		"optionTerm": _optionTermsw6exFe
	}
		const _returnValuejk39ymW = await _HelpD2kz9u.longestOptionTermLength(_cmdHvE0Vro, _helperGz2Kr4i)
		const _cmdYwIwhaa = "";
		const _sortSubcommandstFfjOds = "wtTnFdYtmdFI4FUYp";
		const _arrayValueXtY6LEH = "TA2KuIve36iTgyuQUxLLQW6XMLMgb";
		const _arrayValueaGF1DN = "5LcULOGQw2iSGBu4Fou3cmgfa98DRWxbTux2jCvC2Q4hYstgkEkGd";
		const _arrayValueP9YItAW = true;
		const _returnValuejENw47d = [_arrayValueaGF1DN, _arrayValueP9YItAW]
		const _arrayValuexg7ZTKQ = () => { return _returnValuejENw47d };
		const _arrayValueC8mhFaR = undefined;
		const _arrayValueM3kOl8M = [_arrayValueC8mhFaR]
		const _returnValueJovwNbp = [_arrayValueXtY6LEH, _arrayValuexg7ZTKQ, _arrayValueM3kOl8M]
		const _subcommandTerm4pKccy = () => { return _returnValueJovwNbp };
		const _helperito9VjX = {
			"sortSubcommands": _sortSubcommandstFfjOds,
		"subcommandTerm": _subcommandTerm4pKccy
	}
		const _returnValuexz2Qgv1 = await _HelpD2kz9u.longestSubcommandTermLength(_cmdYwIwhaa, _helperito9VjX)
		const _returnValueVyhr0F2 = false;
		const _descriptionVpDGn09 = () => { return _returnValueVyhr0F2 };
		const _cmdIVb7RHW = {
			"description": _descriptionVpDGn09
	}
		const _returnValueSOVT8cX = await _HelpD2kz9u.subcommandDescription(_cmdIVb7RHW)
	});

	it('test for Help', async () => {
		const _HelpP3XIIyw = new Help()
		const __nameWAvkI80 = {
		
	}
		const __aliasesM81F7f = "OyB4RxOfmh5CG4wZXhQeNPLnLUC6zSB1rpTCURhMcEnzB6YtX2kAysl4FCiPQeTsVG2CSDdS2us3";
		const _parentCIszhvE = {
		
	}
		const _returnValueL30SYZR = false;
		const _usageM1G2f00 = () => { return _returnValueL30SYZR };
		const _cmdSZ9Pu36 = {
			"_name": __nameWAvkI80,
		"_aliases": __aliasesM81F7f,
		"parent": _parentCIszhvE,
		"usage": _usageM1G2f00
	}
		const _returnValueGjX4BKq = await _HelpP3XIIyw.commandUsage(_cmdSZ9Pu36)
		const _nameQ8w7Wiw = []
		const _argumentp0zv1UT = {
			"name": _nameQ8w7Wiw
	}
		const _returnValuexRrvFcE = await _HelpP3XIIyw.argumentTerm(_argumentp0zv1UT)
		const _argChoicesE1OFYTI = {
		
	}
		const _negateFjFJzhi = null;
		const _defaultValuenxkLvt2 = undefined;
		const _defaultValueDescriptiong0ZUEoe = undefined;
		const _envVarrTqL9GS = undefined;
		const _descriptionxKP4p3F = null;
		const _optionRx67eMk = {
			"argChoices": _argChoicesE1OFYTI,
		"negate": _negateFjFJzhi,
		"defaultValue": _defaultValuenxkLvt2,
		"defaultValueDescription": _defaultValueDescriptiong0ZUEoe,
		"envVar": _envVarrTqL9GS,
		"description": _descriptionxKP4p3F
	}
		const _returnValueXVfRH5J = await _HelpP3XIIyw.optionDescription(_optionRx67eMk)
	});

	it('test for Help', async () => {
		const _HelpLG3ToXj = new Help()
		const _arrayValueIzF9blq = -2.716311497086301;
		const _arrayValueoEB4Liv = undefined;
		const _arrayValuelUglY6 = true;
		const _arrayValuegGYlFgw = "b9YTuKv53Hd2kITFzx9nF9xhFDVunFzJMjlqMp4qxIJjG4UYfyy6JRVPgDA2Cp3nwhPW0b2JKMt";
		const _arrayValuex1gBBwN = -1.0853655378498726;
		const _arrayValuewoOYEzi = [_arrayValueoEB4Liv, _arrayValuelUglY6, _arrayValuegGYlFgw, _arrayValuex1gBBwN]
		const _optionspahlEkP = [_arrayValueIzF9blq, _arrayValuewoOYEzi]
		const _arrayValuefN0Drpi = undefined;
		const _arrayValueUEF3Jwi = true;
		const __hasHelpOptionKSwtqVD = [_arrayValuefN0Drpi, _arrayValueUEF3Jwi]
		const __helpShortFlagZYebNO = undefined;
		const _returnValuexEmSzmY = null;
		const __findOptionKv9fq6Q = () => { return _returnValuexEmSzmY };
		const __helpLongFlagGxNAxwG = {
		
	}
		const _arrayValueKIAM0iF = "h0HLOFrMcUebVtSmH2UOeunigBgudfEVoy6uckX9";
		const _arrayValueRL5cLCd = undefined;
		const _arrayValueGvYA4JV = null;
		const _arrayValueD4bxc4j = "lHKdimJvW7U3MFWiK2qGq2fAhZwfeRluzaWpe4BqguPmJZlREQuXzeiidCNF51TNK8PGL8TwgA1gYLyF4qIgfdC7";
		const _createOptionoaeCh5q = [_arrayValueKIAM0iF, _arrayValueRL5cLCd, _arrayValueGvYA4JV, _arrayValueD4bxc4j]
		const __helpDescriptionG7QFX0 = false;
		const __helpFlagszIb8IvX = 2.253261129771303;
		const _cmde5PaZxf = {
			"options": _optionspahlEkP,
		"_hasHelpOption": __hasHelpOptionKSwtqVD,
		"_helpShortFlag": __helpShortFlagZYebNO,
		"_findOption": __findOptionKv9fq6Q,
		"_helpLongFlag": __helpLongFlagGxNAxwG,
		"createOption": _createOptionoaeCh5q,
		"_helpDescription": __helpDescriptionG7QFX0,
		"_helpFlags": __helpFlagszIb8IvX
	}
		const _returnValuemmbzY3n = await _HelpLG3ToXj.visibleOptions(_cmde5PaZxf)
		const _cmdifgnTGF = 9.88406256831517;
		const _returnValuerr2vzx7 = "vydbdUeNU1i5B6th0vMWv7WiaN";
		const _arrayValuejzcvhH8 = () => { return _returnValuerr2vzx7 };
		const _arrayValueTWMI6y9 = []
		const _helperjjoNHt = [_arrayValuejzcvhH8, _arrayValueTWMI6y9]
		const _returnValuelH1Zh5P = await _HelpLG3ToXj.longestSubcommandTermLength(_cmdifgnTGF, _helperjjoNHt)
		const __argsjVdldhh = {
		
	}
		const __nameBqc3mZe = -1.1670375385514866;
		const __aliasesdpmxAJu = {
		
	}
		const _optionsuDH9VoU = {
		
	}
		const _cmdOBrClWt = {
			"_args": __argsjVdldhh,
		"_name": __nameBqc3mZe,
		"_aliases": __aliasesdpmxAJu,
		"options": _optionsuDH9VoU
	}
		const _returnValueqoQxYuX = await _HelpLG3ToXj.subcommandTerm(_cmdOBrClWt)
	});

	it('test for Help', async () => {
		const _HelpCoGkUrG = new Help()
		const _arrayValuedOd8uar = true;
		const _arrayValueDVmVcFG = [_arrayValuedOd8uar]
		const _arrayValueME6ZNOw = undefined;
		const _arrayValueK3hmKWw = "CUKbHzRIwxEl851n1UDsfyWPefvLj";
		const _arrayValuexzWAuXY = [_arrayValueME6ZNOw, _arrayValueK3hmKWw]
		const _argChoicessD25DQH = [_arrayValueDVmVcFG, _arrayValuexzWAuXY]
		const _defaultValuey9VTLJH = undefined;
		const _defaultValueDescriptionYopPbNS = "rOV3Hr5vsyCfC6MyNRevaVCxYC3xfocmLW8fRFYqYymVx1H3idUoST6dw0B5vMq69EW6vCkt3jXs42t1";
		const _descriptionWDkdM0F = "msQYUKE8XKcyaK7fA6qsOCEjdVbAGZIu5gaKY6GpMXgDt28X4BFRo9fvYXqrXQONINz";
		const _argumentNK3YMLX = {
			"argChoices": _argChoicessD25DQH,
		"defaultValue": _defaultValuey9VTLJH,
		"defaultValueDescription": _defaultValueDescriptionYopPbNS,
		"description": _descriptionWDkdM0F
	}
		const _returnValueCzXZ6Hh = await _HelpCoGkUrG.argumentDescription(_argumentNK3YMLX)
		const __argsDescriptionf2UmOaA = {
		
	}
		const __argsKOvWDoT = {
		
	}
		const _cmdPLDCPdC = {
			"_argsDescription": __argsDescriptionf2UmOaA,
		"_args": __argsKOvWDoT
	}
		const _returnValuedLl9qh5 = await _HelpCoGkUrG.visibleArguments(_cmdPLDCPdC)
		const _cmdp0yybpY = undefined;
		const _longestOptionTermLengthOT2xKXC = "flpliS7ccX06CITMjhBH";
		const _returnValueQyh8kvs = 1.383128315423047;
		const _returnValueFtDxKN = () => { return _returnValueQyh8kvs };
		const _longestSubcommandTermLengthicptet5 = () => { return _returnValueFtDxKN };
		const _returnValuew5Qt9Jg = "qkcuKx1VoXIRXn3G65HxPxFARUUsrS77wn1uNTmB7VHz60FMscOq61Au";
		const _longestArgumentTermLengthltS6sDQ = () => { return _returnValuew5Qt9Jg };
		const _helperDYgvelb = {
			"longestOptionTermLength": _longestOptionTermLengthOT2xKXC,
		"longestSubcommandTermLength": _longestSubcommandTermLengthicptet5,
		"longestArgumentTermLength": _longestArgumentTermLengthltS6sDQ
	}
		const _returnValueaBpjTo = await _HelpCoGkUrG.padWidth(_cmdp0yybpY, _helperDYgvelb)
		const _cmdBNl515N = -2.4024260195913456;
		const _returnValueXmdU8z4 = 0.13535290486136553;
		const _visibleArgumentsK8HskeY = () => { return _returnValueXmdU8z4 };
		const _returnValuei8DjfBk = null;
		const _returnValuepCMy0Du = () => { return _returnValuei8DjfBk };
		const _returnValueVUlVCXr = () => { return _returnValuepCMy0Du };
		const _argumentTermiiPo8k = () => { return _returnValueVUlVCXr };
		const _helperV75Eu20 = {
			"visibleArguments": _visibleArgumentsK8HskeY,
		"argumentTerm": _argumentTermiiPo8k
	}
		const _returnValueSglVpIc = await _HelpCoGkUrG.longestArgumentTermLength(_cmdBNl515N, _helperV75Eu20)
		const _argChoices5kykAz = {
		
	}
		const _defaultValueQTrkewB = undefined;
		const _defaultValueDescriptionucz7g3d = "sTz4D1A6LPDaXBjYDnBse6pqCdOc";
		const _descriptionovR5Q3s = "mQ0rd2E6QGfbA2tD5gVWBzyOL7qJHJhGk4WOXPJdDTCjTAbDrrURXx6EjkU2Uc3zqTqJGUX9C1p";
		const _argumentAaRwlJx = {
			"argChoices": _argChoices5kykAz,
		"defaultValue": _defaultValueQTrkewB,
		"defaultValueDescription": _defaultValueDescriptionucz7g3d,
		"description": _descriptionovR5Q3s
	}
		const _returnValueyIjYEaz = await _HelpCoGkUrG.argumentDescription(_argumentAaRwlJx)
	});

	it('test for Help', async () => {
		const _HelpqrkrkZi = new Help()
		const _commandsq0MoGOe = []
		const _returnValueOszNgZx = undefined;
		const __hasImplicitHelpCommandrO5lg9Y = () => { return _returnValueOszNgZx };
		const __helpCommandnameAndArgsdJLrlR = {
		
	}
		const _returnValueZqew7J = 0.5443593143499914;
		const _createCommanddukpicW = () => { return _returnValueZqew7J };
		const __helpCommandDescriptionpiNF9Bf = undefined;
		const _cmdZwzvFFx = {
			"commands": _commandsq0MoGOe,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandrO5lg9Y,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsdJLrlR,
		"createCommand": _createCommanddukpicW,
		"_helpCommandDescription": __helpCommandDescriptionpiNF9Bf
	}
		const _returnValueSzky6Jp = await _HelpqrkrkZi.visibleCommands(_cmdZwzvFFx)
		const _optionsNnxmMXO = {
		
	}
		const _arrayValueSk5iLRj = undefined;
		const _arrayValueO2ApFL8 = "iFbCRXOXtqh2lKBsl8GP9bRYiZ8vU8pUiFUjQPp6mo4QY9HGZMLWA3uJRAq5xqxKSyb8mOTrHJ6XKYV2ImRDRXgKa";
		const __hasHelpOptiontimiBch = [_arrayValueSk5iLRj, _arrayValueO2ApFL8]
		const __helpShortFlagWFyjpv = -4.474046447143953;
		const _returnValuemhYQrJl = -0.01605755004900189;
		const __findOptionGaHUfmJ = () => { return _returnValuemhYQrJl };
		const __helpLongFlag5ZFatM = undefined;
		const _returnValuenwJRtVT = undefined;
		const _createOptionB6wauxD = () => { return _returnValuenwJRtVT };
		const __helpDescriptionff7vIQE = "LHGp7TfpPyC9Qpdikf83HhQGqlkHa20t9F2ncB8a7rGElZwLw6t6aPm0wnGQA";
		const _arrayValueusnejSC = undefined;
		const _arrayValueAM986cu = "7uWhXDd5zFZ9MHefGzA0Dmgjjq0tHdIzyiYTHSEncm1Vxo0EpQ41y";
		const __helpFlagsOeEion = [_arrayValueusnejSC, _arrayValueAM986cu]
		const _cmdcjpdboG = {
			"options": _optionsNnxmMXO,
		"_hasHelpOption": __hasHelpOptiontimiBch,
		"_helpShortFlag": __helpShortFlagWFyjpv,
		"_findOption": __findOptionGaHUfmJ,
		"_helpLongFlag": __helpLongFlag5ZFatM,
		"createOption": _createOptionB6wauxD,
		"_helpDescription": __helpDescriptionff7vIQE,
		"_helpFlags": __helpFlagsOeEion
	}
		const _returnValuewnrvvEq = await _HelpqrkrkZi.visibleOptions(_cmdcjpdboG)
		const _arrayValuevuYqcp = {
		
	}
		const _cmdQ6AoZEw = [_arrayValuevuYqcp]
		const _helperUjndEJ = 5.1014386962889535;
		const _returnValueFHxPqWG = await _HelpqrkrkZi.padWidth(_cmdQ6AoZEw, _helperUjndEJ)
		const _cmdNLzJ8rA = {
		
	}
		const _sortSubcommandsLDJIbGG = {
		
	}
		const _returnValueBHuiKO = true;
		const _subcommandTermTH6r172 = () => { return _returnValueBHuiKO };
		const _helperZ4xMKtE = {
			"sortSubcommands": _sortSubcommandsLDJIbGG,
		"subcommandTerm": _subcommandTermTH6r172
	}
		const _returnValue0xyYZX = await _HelpqrkrkZi.longestSubcommandTermLength(_cmdNLzJ8rA, _helperZ4xMKtE)
		const _cmdvepXQK2 = undefined;
		const _sortSubcommandsvtUU82 = true;
		const _returnValueEfCEytH = true;
		const _subcommandTermf0uYRUu = () => { return _returnValueEfCEytH };
		const _helperSoMcuYr = {
			"sortSubcommands": _sortSubcommandsvtUU82,
		"subcommandTerm": _subcommandTermf0uYRUu
	}
		const _returnValuegZc8ICT = await _HelpqrkrkZi.longestSubcommandTermLength(_cmdvepXQK2, _helperSoMcuYr)
	});

	it('test for Help', async () => {
		const _HelpJaPh27l = new Help()
		const _argChoicestgDCVsE = null;
		const _negateVPI1j1J = null;
		const _defaultValueCuLREoj = null;
		const _defaultValueDescriptionEvdgHx8 = null;
		const _envVarheRY4Uc = null;
		const _arrayValueAjU7MQ = null;
		const _arrayValueP36VxOv = undefined;
		const _arrayValuehiABcFq = {
		
	}
		const _arrayValueEqyYYFT = [_arrayValueAjU7MQ, _arrayValueP36VxOv, _arrayValuehiABcFq]
		const _arrayValueUa9M1lQ = null;
		const _descriptionKsakRZr = [_arrayValueEqyYYFT, _arrayValueUa9M1lQ]
		const _optiondLsw6de = {
			"argChoices": _argChoicestgDCVsE,
		"negate": _negateVPI1j1J,
		"defaultValue": _defaultValueCuLREoj,
		"defaultValueDescription": _defaultValueDescriptionEvdgHx8,
		"envVar": _envVarheRY4Uc,
		"description": _descriptionKsakRZr
	}
		const _returnValueSGgTlWl = await _HelpJaPh27l.optionDescription(_optiondLsw6de)
		const _optionsJDnxPl = "Ry3ANKx17fyuEt0K8pDcZeWP9qGvEfzy";
		const __hasHelpOptionwQg8wKd = true;
		const _returnValueUNo4K2S = undefined;
		const __helpShortFlagX4SGqRe = () => { return _returnValueUNo4K2S };
		const _returnValueZGqESdk = undefined;
		const _arrayValueLxeYKj = () => { return _returnValueZGqESdk };
		const _arrayValueNml1Zjw = 7.900099706195981;
		const _returnValuen0M67I = [_arrayValueLxeYKj, _arrayValueNml1Zjw]
		const __findOptionFsI1VCm = () => { return _returnValuen0M67I };
		const _returnValueQ2fBaei = {
		
	}
		const __helpLongFlagYIqYzbe = () => { return _returnValueQ2fBaei };
		const _returnValueOdJH87 = true;
		const _createOptionBLdKyWE = () => { return _returnValueOdJH87 };
		const __helpDescriptionp2zhBBr = null;
		const __helpFlagsruZeQT5 = true;
		const _cmdmTO5YHl = {
			"options": _optionsJDnxPl,
		"_hasHelpOption": __hasHelpOptionwQg8wKd,
		"_helpShortFlag": __helpShortFlagX4SGqRe,
		"_findOption": __findOptionFsI1VCm,
		"_helpLongFlag": __helpLongFlagYIqYzbe,
		"createOption": _createOptionBLdKyWE,
		"_helpDescription": __helpDescriptionp2zhBBr,
		"_helpFlags": __helpFlagsruZeQT5
	}
		const _returnValueBFv1M2A = await _HelpJaPh27l.visibleOptions(_cmdmTO5YHl)
		const _arrayValueHDg1mrc = undefined;
		const _arrayValueBX3h8m = 2.270597735203836;
		const _arrayValueMaaSWFd = [_arrayValueHDg1mrc, _arrayValueBX3h8m]
		const _arrayValuea2NIb8R = true;
		const _strWxbfEsi = [_arrayValueMaaSWFd, _arrayValuea2NIb8R]
		const _widthnwTxJIb = 5.829396370721437;
		const _indentBUj1L60 = {
		
	}
		const _minColumnWidthRLUvAwC = -3.004119731449915;
		const _returnValuedzM7Hz5 = await _HelpJaPh27l.wrap(_strWxbfEsi, _widthnwTxJIb, _indentBUj1L60, _minColumnWidthRLUvAwC)
		const _argChoicesce6tiRH = {
		
	}
		const _defaultValuejo8YBAv = undefined;
		const _arrayValueyRjtVB3 = "hfAseMyUYlvq";
		const _arrayValuenxBTDhA = undefined;
		const _arrayValueFyHToOL = null;
		const _arrayValueZEwARxw = false;
		const _defaultValueDescriptionoRlqWlM = [_arrayValueyRjtVB3, _arrayValuenxBTDhA, _arrayValueFyHToOL, _arrayValueZEwARxw]
		const _descriptionjeOj5tq = undefined;
		const _argumentkMdLsHB = {
			"argChoices": _argChoicesce6tiRH,
		"defaultValue": _defaultValuejo8YBAv,
		"defaultValueDescription": _defaultValueDescriptionoRlqWlM,
		"description": _descriptionjeOj5tq
	}
		const _returnValueNgymK4 = await _HelpJaPh27l.argumentDescription(_argumentkMdLsHB)
		const _cmdTavd9Vt = true;
		const _sortSubcommandsz0VjBJt = undefined;
		const _subcommandTermeJRFl3a = 5.331597319217892;
		const _helperlkErhej = {
			"sortSubcommands": _sortSubcommandsz0VjBJt,
		"subcommandTerm": _subcommandTermeJRFl3a
	}
		const _returnValuetsgyZUu = await _HelpJaPh27l.formatHelp(_cmdTavd9Vt, _helperlkErhej)
	});
})