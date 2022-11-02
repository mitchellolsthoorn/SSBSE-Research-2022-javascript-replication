export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpaPdn5Ri = new Help()
		const _arrayValueezwsquP = true;
		const _arrayValuekM9TrzE = -4.445137682709161;
		const _arrayValuefWkeUg2 = [_arrayValueezwsquP, _arrayValuekM9TrzE]
		const _optionYJY8cmE = [_arrayValuefWkeUg2]
		const _returnValuenGm2BNa = await _HelpaPdn5Ri.optionDescription(_optionYJY8cmE)
	});

	it('test for Help', async () => {
		const _HelpQynWwIL = new Help()
		const _nameoZVjbyQ = undefined;
		const _cmdLLCF8DP = new Command(_nameoZVjbyQ)
		const _returnValuegIC5aT = await _cmdLLCF8DP._processArguments()
		const _returnValueO2yohK1 = await _HelpQynWwIL.visibleArguments(_cmdLLCF8DP)
		const _cmdzgW6Tfs = false;
		const _helperIjkAta3 = new Help()
		const _arrayValuehkruucu = {
		
	}
		const _cmdCtJXF8a = [_arrayValuehkruucu]
		const _returnValuehPi0WJl = await _helperIjkAta3.subcommandTerm(_cmdCtJXF8a)
		const _cmdB1Fwr2B = {
		
	}
		const _arrayValueQzgKCI = null;
		const _arrayValueUWZytRT = null;
		const _arrayValueGgKiVx = false;
		const _arrayValueIJ9SGJy = [_arrayValueGgKiVx]
		const _helperfwJzYaL = [_arrayValueQzgKCI, _arrayValueUWZytRT, _arrayValueIJ9SGJy]
		const _returnValueurBFrUz = await _helperIjkAta3.padWidth(_cmdB1Fwr2B, _helperfwJzYaL)
		const _returnValueL54msN0 = 3.71589325819526;
		const _descriptions439w0C = () => { return _returnValueL54msN0 };
		const _cmdFonc0PX = {
			"description": _descriptions439w0C
	}
		const _returnValueXj7wbEM = await _helperIjkAta3.commandDescription(_cmdFonc0PX)
		const _arrayValuetjKQRJk = null;
		const _arrayValueQMIZO1B = {
		
	}
		const _cmdGLNmFxS = [_arrayValuetjKQRJk, _arrayValueQMIZO1B]
		const _helperFH3hxrG = new Help()
		const _cmdWagSEe = null;
		const _helperAvN94KK = undefined;
		const _returnValueJXWdut = await _helperFH3hxrG.longestArgumentTermLength(_cmdWagSEe, _helperAvN94KK)
		const _arrayValuebb8TtKf = null;
		const _arrayValuegHYkUKy = [_arrayValuebb8TtKf]
		const _arrayValueloWVrJK = undefined;
		const _nameeTxfhpL = [_arrayValuegHYkUKy, _arrayValueloWVrJK]
		const _cmdQhIEW6b = new Command(_nameeTxfhpL)
		const _str8r1TuR = null;
		const _argsDescriptionzGcfwpn = undefined;
		const _returnValuegnp56YS = await _cmdQhIEW6b.description(_str8r1TuR, _argsDescriptionzGcfwpn)
		const _allowUnknowni0SHgqS = 1.1227101222697193;
		const _returnValuezSvGnYQ = await _cmdQhIEW6b.allowUnknownOption(_allowUnknowni0SHgqS)
		const _returnValueVYpI15g = await _helperFH3hxrG.commandDescription(_cmdQhIEW6b)
		const _cmdBqLN3wK = {
		
	}
		const _returnValueSwTnaXR = "UFmXMJv0TT1yUTmBsiKeD83c3btuEKgNOIKnnujIvOV3GgCTXLwq2VSGeE1PC8oD7yNw9p3YSb";
		const _visibleArgumentsPJadWOD = () => { return _returnValueSwTnaXR };
		const _returnValueZghAQ0 = -4.8953336820466795;
		const _argumentTermzXSgx9K = () => { return _returnValueZghAQ0 };
		const _helperle62Pc5 = {
			"visibleArguments": _visibleArgumentsPJadWOD,
		"argumentTerm": _argumentTermzXSgx9K
	}
		const _returnValueqGJbwcS = await _helperFH3hxrG.longestArgumentTermLength(_cmdBqLN3wK, _helperle62Pc5)
		const _cmdA3R1jkF = undefined;
		const _helperagti3Ec = "byd3uzlqnhnly245C9FD5o5YI3JDuH9GdDgcgeT2tsINP6KIS2HWBe0GWn4aeYDGCl3kSHknVWJppy1kwooaBht4LJFYF6KAx";
		const _returnValueH1mfRMD = await _helperFH3hxrG.formatHelp(_cmdA3R1jkF, _helperagti3Ec)
		const _returnValueBHbHaKW = await _helperIjkAta3.longestArgumentTermLength(_cmdGLNmFxS, _helperFH3hxrG)
		const _returnValueKw9APJR = await _HelpQynWwIL.formatHelp(_cmdzgW6Tfs, _helperIjkAta3)
		const _optionb2KsBPR = "pJigsjU1sibpLFbg8YTGdfytxmV";
		const _returnValuejCVPcUd = await _HelpQynWwIL.optionTerm(_optionb2KsBPR)
		const _arrayValuevuMR6Xu = -2.807239473341773;
		const _returnValueLDFeb3y = [_arrayValuevuMR6Xu]
		const _argChoicesxZ2fQqa = () => { return _returnValueLDFeb3y };
		const _defaultValueMf3cy2U = undefined;
		const _defaultValueDescriptionwNhkykO = false;
		const _descriptionSvNc8Pw = 6.8046344811021555;
		const _argumentfGps8UM = {
			"argChoices": _argChoicesxZ2fQqa,
		"defaultValue": _defaultValueMf3cy2U,
		"defaultValueDescription": _defaultValueDescriptionwNhkykO,
		"description": _descriptionSvNc8Pw
	}
		const _returnValueIlzegKu = await _HelpQynWwIL.argumentDescription(_argumentfGps8UM)
	});

	it('test for Help', async () => {
		const _HelpxWGW9zU = new Help()
		const _cmdeCCiYGL = {
		
	}
		const _arrayValueijGzkB6 = []
		const _arrayValuewSe6w0i = -6.912012921037051;
		const _sortSubcommandsJO7Iymq = [_arrayValueijGzkB6, _arrayValuewSe6w0i]
		const _returnValueCYAnjfA = undefined;
		const _subcommandTermkbsVt51 = () => { return _returnValueCYAnjfA };
		const _helperaf0psmU = {
			"sortSubcommands": _sortSubcommandsJO7Iymq,
		"subcommandTerm": _subcommandTermkbsVt51
	}
		const _returnValueeuUcXhp = await _HelpxWGW9zU.formatHelp(_cmdeCCiYGL, _helperaf0psmU)
	});

	it('test for Help', async () => {
		const _HelpBD8KCC5 = new Help()
		const _returnValuecmSwNr5 = undefined;
		const _strIv6Cd2n = () => { return _returnValuecmSwNr5 };
		const _widthoGBcCOA = -1.2968610608479452;
		const _indentjaLWn6m = 9.265397063113031;
		const _minColumnWidthYN333la = 3.9695420397917314;
		const _returnValueiEZuzW7 = await _HelpBD8KCC5.wrap(_strIv6Cd2n, _widthoGBcCOA, _indentjaLWn6m, _minColumnWidthYN333la)
		const _cmdaYXglFc = -9.427984314334724;
		const _returnValueTujeWHK = "OH6aC3NB8FUrfXyOim3fFXOTjGJlbG1o3X0zhYB3h5vgnMrhPqXdObXswcTrn8pugunIXk";
		const _sortSubcommandsoMYtrC = () => { return _returnValueTujeWHK };
		const _arrayValuennPmTAC = {
		
	}
		const _returnValuefNQ76fo = [_arrayValuennPmTAC]
		const _subcommandTermpvtTGeQ = () => { return _returnValuefNQ76fo };
		const _helperjqduddV = {
			"sortSubcommands": _sortSubcommandsoMYtrC,
		"subcommandTerm": _subcommandTermpvtTGeQ
	}
		const _returnValuenMdL9Iu = await _HelpBD8KCC5.formatHelp(_cmdaYXglFc, _helperjqduddV)
		const _returnValuemdnznUw = undefined;
		const _cmdCWCBxzJ = () => { return _returnValuemdnznUw };
		const _returnValueNOvskOM = await _HelpBD8KCC5.subcommandTerm(_cmdCWCBxzJ)
		const _returnValueuabFo1S = null;
		const _descriptionT2H01qN = () => { return _returnValueuabFo1S };
		const _cmdPrILQ98 = {
			"description": _descriptionT2H01qN
	}
		const _returnValueTMAWmQi = await _HelpBD8KCC5.subcommandDescription(_cmdPrILQ98)
		const _arrayValueJqZbL82 = "aKV9jOABq";
		const _arrayValueolyaFcO = undefined;
		const _cmdb9dVBa4 = [_arrayValueJqZbL82, _arrayValueolyaFcO]
		const _returnValuekpYeT9 = await _HelpBD8KCC5.visibleOptions(_cmdb9dVBa4)
	});

	it('test for Help', async () => {
		const _HelpvehMcEa = new Help()
		const _returnValueTyw9At = true;
		const _argumentyfgsXdX = () => { return _returnValueTyw9At };
		const _returnValueW6tu12s = await _HelpvehMcEa.argumentDescription(_argumentyfgsXdX)
		const _nameho8eU50 = true;
		const _cmdbdPwhIU = new Command(_nameho8eU50)
		const _flagsbQuZMyM = false;
		const _descriptionNLFxAq = null;
		const _fnQL9bXZk = 3.2083646940789343;
		const _defaultValueVmxlEy = undefined;
		const _returnValueUwzd5rP = await _cmdbdPwhIU.requiredOption(_flagsbQuZMyM, _descriptionNLFxAq, _fnQL9bXZk, _defaultValueVmxlEy)
		const _returnValueb2MdugB = await _HelpvehMcEa.subcommandTerm(_cmdbdPwhIU)
		const _arrayValuehDSpC20 = true;
		const _arrayValueYUAZZUn = undefined;
		const _arrayValuesgJojhM = true;
		const _arrayValueWJWDnd = []
		const _cmdMOPWyms = [_arrayValuehDSpC20, _arrayValueYUAZZUn, _arrayValuesgJojhM, _arrayValueWJWDnd]
		const _returnValueLRGnEEG = undefined;
		const _visibleOptionsRm2tto = () => { return _returnValueLRGnEEG };
		const _arrayValueH3QqNOP = undefined;
		const _arrayValueHDfhDTn = null;
		const _arrayValuek149VX3 = -1.8886500988016603;
		const _returnValueIINqYN = [_arrayValueH3QqNOP, _arrayValueHDfhDTn, _arrayValuek149VX3]
		const _optionTermI7xPOYm = () => { return _returnValueIINqYN };
		const _helperVogtVxy = {
			"visibleOptions": _visibleOptionsRm2tto,
		"optionTerm": _optionTermI7xPOYm
	}
		const _returnValueeoisiO = await _HelpvehMcEa.longestOptionTermLength(_cmdMOPWyms, _helperVogtVxy)
		const _returnValuefmfze7I = undefined;
		const _cmdDnvAFoH = () => { return _returnValuefmfze7I };
		const _returnValueo1cvWVx = await _HelpvehMcEa.visibleOptions(_cmdDnvAFoH)
		const _argumentanMG23B = "vLKOXsnDX1WezIim3XFyyYIkIefC7UmxBJzY5YXiFFCnwLaqy5y1JrhMRnCk0OMICZwdMBvKlLcEL0N5wtEEp9dNKfq";
		const _returnValueltro0Db = await _HelpvehMcEa.argumentTerm(_argumentanMG23B)
	});

	it('test for Help', async () => {
		const _HelpVIBlUcF = new Help()
		const _returnValueTmWIqXp = null;
		const _descriptionI5DPZes = () => { return _returnValueTmWIqXp };
		const _cmdt4bqPR = {
			"description": _descriptionI5DPZes
	}
		const _returnValueVZFgayy = await _HelpVIBlUcF.subcommandDescription(_cmdt4bqPR)
		const _cmd9GO4hf = "IPkN1RLjiXxFQ7uY4H7zAE9dSytMmMq";
		const _returnValueY1POGy2 = await _HelpVIBlUcF.commandUsage(_cmd9GO4hf)
		const _returnValued0vOei8 = false;
		const _arrayValuevLkarwg = () => { return _returnValued0vOei8 };
		const _arrayValueVLNR8u9 = -2.524033294245182;
		const _arrayValuekxxfK7s = true;
		const _cmduCwFIk4 = [_arrayValuevLkarwg, _arrayValueVLNR8u9, _arrayValuekxxfK7s]
		const _returnValuerRuGfbP = await _HelpVIBlUcF.visibleArguments(_cmduCwFIk4)
	});

	it('test for Help', async () => {
		const _HelppfYgnp = new Help()
		const _cmdELvROFI = true;
		const _arrayValuec2UFnr7 = "orroyLdpViJXGUxND0Pd5MbHMNY6qJ2jTc";
		const _helperBlmMFhr = [_arrayValuec2UFnr7]
		const _returnValuerBM9bKR = await _HelppfYgnp.longestOptionTermLength(_cmdELvROFI, _helperBlmMFhr)
	});

	it('test for Help', async () => {
		const _HelpGdwZ1kG = new Help()
		const _cmdKc8MlV1 = -2.4326042776912926;
		const _sortSubcommandsOz3vMGO = false;
		const _arrayValueekef2tp = -1.1763952002786962;
		const _returnValuebeDl8J7 = [_arrayValueekef2tp]
		const _subcommandTermaXO7E2 = () => { return _returnValuebeDl8J7 };
		const _helperUiCsOlC = {
			"sortSubcommands": _sortSubcommandsOz3vMGO,
		"subcommandTerm": _subcommandTermaXO7E2
	}
		const _returnValueIxWXZrn = await _HelpGdwZ1kG.longestSubcommandTermLength(_cmdKc8MlV1, _helperUiCsOlC)
		const _returnValueezunG1H = {
		
	}
		const _nameiSs1LeR = () => { return _returnValueezunG1H };
		const _cmd88pybF = new Command(_nameiSs1LeR)
		const _returnValueuesVnSU = await _cmd88pybF._parseOptionsEnv()
		const _keyxQvH2l8 = null;
		const _valueQv29rAd = {
		
	}
		const _returnValueiOmqbx = await _cmd88pybF.setOptionValue(_keyxQvH2l8, _valueQv29rAd)
		const _returnValuei0Wgyar = await _HelpGdwZ1kG.commandDescription(_cmd88pybF)
		const _returnValuePqoTQcn = undefined;
		const _optionXeRgLxs = () => { return _returnValuePqoTQcn };
		const _returnValueQ5HeWIL = await _HelpGdwZ1kG.optionTerm(_optionXeRgLxs)
	});

	it('test for Help', async () => {
		const _HelpGZwD0o6 = new Help()
		const _cmdjH7HnM = false;
		const _helperRprh7qT = -4.658765041021922;
		const _returnValuexXhTfaA = await _HelpGZwD0o6.longestArgumentTermLength(_cmdjH7HnM, _helperRprh7qT)
		const _flagsHIVWOg = "C9lrlAYKJvn1NwN";
		const _descriptionqcGAOSl = {
		
	}
		const _optionAJ7MOW7 = new Option(_flagsHIVWOg, _descriptionqcGAOSl)
		const _nameZlixj9n = undefined;
		const _returnValueBPScrvI = await _optionAJ7MOW7.env(_nameZlixj9n)
		const _returnValueyZfMgxQ = null;
		const _valuesAMBw4vb = () => { return _returnValueyZfMgxQ };
		const _returnValueCOXsl5n = await _optionAJ7MOW7.choices(_valuesAMBw4vb)
		const _valueeJoAHmx = undefined;
		const _descriptionkqULPCO = true;
		const _returnValuevH7JSUJ = await _optionAJ7MOW7.default(_valueeJoAHmx, _descriptionkqULPCO)
		const _nameKzsL7p2 = -8.052470741326212;
		const _returnValueMgUws0K = await _optionAJ7MOW7.env(_nameKzsL7p2)
		const _returnValuewgturqT = await _HelpGZwD0o6.optionTerm(_optionAJ7MOW7)
		const _returnValues43TkHF = undefined;
		const _optionBR25Qgy = () => { return _returnValues43TkHF };
		const _returnValuefqGoyLb = await _HelpGZwD0o6.optionTerm(_optionBR25Qgy)
		const _returnValuekeJgdBC = undefined;
		const _descriptionDSdsXsy = () => { return _returnValuekeJgdBC };
		const _cmdoA0Jhf3 = {
			"description": _descriptionDSdsXsy
	}
		const _returnValueOkZMfW = await _HelpGZwD0o6.subcommandDescription(_cmdoA0Jhf3)
		const _cmdZvSjB9s = false;
		const _arrayValuexYDQqu = "LOl3KALqij6ok9JrrQXhfSKataEqixikEt7ujaRrU0kLNUDJECypD8DRC2rmFdZx3fpcL2tpHc1t24H7KIYHOWv13iGIqj5";
		const _arrayValueqt13wsR = {
		
	}
		const _arrayValueY74I5w5 = true;
		const _arrayValueBHEzMV2 = undefined;
		const _helperRR0FXGi = [_arrayValuexYDQqu, _arrayValueqt13wsR, _arrayValueY74I5w5, _arrayValueBHEzMV2]
		const _returnValuewkfPzBe = await _HelpGZwD0o6.formatHelp(_cmdZvSjB9s, _helperRR0FXGi)
	});

	it('test for Help', async () => {
		const _HelpakA499l = new Help()
		const _argChoiceskEYbvUc = {
		
	}
		const _negateptAwIbi = undefined;
		const _defaultValueOfUuABV = -1.4552692291528295;
		const _defaultValueDescriptionBTb9ckN = true;
		const _envVaroSehn3c = undefined;
		const _descriptionWcPh9hj = "qBilar5UpKt";
		const _optionimysuJg = {
			"argChoices": _argChoiceskEYbvUc,
		"negate": _negateptAwIbi,
		"defaultValue": _defaultValueOfUuABV,
		"defaultValueDescription": _defaultValueDescriptionBTb9ckN,
		"envVar": _envVaroSehn3c,
		"description": _descriptionWcPh9hj
	}
		const _returnValuevOaCKGF = await _HelpakA499l.optionDescription(_optionimysuJg)
		const _cmdcr30yTx = "BG83UkJ84mJPSEkEm1WzSJ";
		const _returnValueqMHG5rC = await _HelpakA499l.subcommandTerm(_cmdcr30yTx)
		const _cmdq8pxk5 = "ym5q5QEhZHFM";
		const _returnValuemlipNT = await _HelpakA499l.commandUsage(_cmdq8pxk5)
		const _arrayValuesjnAV2w = "5cj9w";
		const _arrayValueobxnMgL = null;
		const _arrayValueLPXsxu = "s6jG5srUHA3GnecX1zIg9fteZYjr4EjZ6ewCgyb3RA5yz";
		const _arrayValueKR1qdJ6 = [_arrayValueLPXsxu]
		const _arrayValuergu12Z = undefined;
		const _option5ltAIX = [_arrayValuesjnAV2w, _arrayValueobxnMgL, _arrayValueKR1qdJ6, _arrayValuergu12Z]
		const _returnValuetswgTI1 = await _HelpakA499l.optionTerm(_option5ltAIX)
		const _cmdlFV7OdR = undefined;
		const _arrayValueGCpNYOH = undefined;
		const _helperddwnu0Y = [_arrayValueGCpNYOH]
		const _returnValueG04Zf9Y = await _HelpakA499l.longestOptionTermLength(_cmdlFV7OdR, _helperddwnu0Y)
	});

	it('test for Help', async () => {
		const _HelpbJoTwba = new Help()
		const __nametzNo5t = {
		
	}
		const __aliasesrzQ32rL = true;
		const _returnValueZReUIaq = "lqx74IayeYDrqWMqcXpjG";
		const _parentzI6h8aS = () => { return _returnValueZReUIaq };
		const _arrayValueytNZzv6 = "dkJLN8c1urHcztWvk165xSOvk3F9RvO4bpQ2eOgeY2MOjGYT1eiK4wQp4D0Sp5";
		const _arrayValueByAGTr = "pXJbY8SVEJLkoH";
		const _returnValuellwVRdn = [_arrayValueytNZzv6, _arrayValueByAGTr]
		const _usageNg237cW = () => { return _returnValuellwVRdn };
		const _cmdmakcB8R = {
			"_name": __nametzNo5t,
		"_aliases": __aliasesrzQ32rL,
		"parent": _parentzI6h8aS,
		"usage": _usageNg237cW
	}
		const _returnValuek931sZ = await _HelpbJoTwba.commandUsage(_cmdmakcB8R)
		const _arrayValueYYVOEjn = -6.043423604910752;
		const _arrayValuewOLBIR1 = false;
		const _arrayValuej7B8dpX = undefined;
		const _arrayValuebJSfYJ = [_arrayValuewOLBIR1, _arrayValuej7B8dpX]
		const _optionniI3kLV = [_arrayValueYYVOEjn, _arrayValuebJSfYJ]
		const _returnValueTFp4JBv = await _HelpbJoTwba.optionTerm(_optionniI3kLV)
	});

	it('test for Help', async () => {
		const _Help3uUyrc = new Help()
		const _optionaRPGJ0X = "hNNplZU4pd";
		const _returnValuesioazWx = await _Help3uUyrc.optionTerm(_optionaRPGJ0X)
		const _returnValuetlj3u3m = true;
		const _descriptionva4NwRI = () => { return _returnValuetlj3u3m };
		const _cmdk3xOMn = {
			"description": _descriptionva4NwRI
	}
		const _returnValuev9WAIMe = await _Help3uUyrc.commandDescription(_cmdk3xOMn)
		const _argumentGLdB21I = undefined;
		const _returnValuexQFtVDo = await _Help3uUyrc.argumentDescription(_argumentGLdB21I)
	});

	it('test for Help', async () => {
		const _HelpkjmEXaB = new Help()
		const _cmdCXOIsGE = null;
		const _arrayValueqO6RLoW = null;
		const _arrayValuenLfPYVF = null;
		const _helperH2f9aEY = [_arrayValueqO6RLoW, _arrayValuenLfPYVF]
		const _returnValuenWEs1lY = await _HelpkjmEXaB.padWidth(_cmdCXOIsGE, _helperH2f9aEY)
	});

	it('test for Help', async () => {
		const _HelpDTe1tLT = new Help()
		const _struPmm5K = "1dy5L9YuB2GWu1JSS38ZUWF5XtReRkaS6jxdmvp9LH1ylMejPhu7NVzUlPd9LbdD0IIQ";
		const _widthVT4zjAn = 5.549585974472951;
		const _indentxnDGb5E = 4.627177414952415;
		const _minColumnWidthVziyTjk = 1.0535743910116597;
		const _returnValues4TCaGj = await _HelpDTe1tLT.wrap(_struPmm5K, _widthVT4zjAn, _indentxnDGb5E, _minColumnWidthVziyTjk)
		const _argumentBghT8wC = false;
		const _returnValuexm1xO1P = await _HelpDTe1tLT.argumentDescription(_argumentBghT8wC)
	});

	it('test for Help', async () => {
		const _HelpyaVkGi1 = new Help()
		const _returnValueqgBrIP = null;
		const _descriptionTm1uKrU = () => { return _returnValueqgBrIP };
		const _cmdM7WGh7C = {
			"description": _descriptionTm1uKrU
	}
		const _returnValueL9A633A = await _HelpyaVkGi1.subcommandDescription(_cmdM7WGh7C)
		const _arrayValueCrckgLg = undefined;
		const _arrayValueSqwSMC0 = null;
		const _cmdvkpd22 = [_arrayValueCrckgLg, _arrayValueSqwSMC0]
		const _helpervyvugy = new Help()
		const _returnValueUrhGXCo = []
		const _returnValuehpCamR = () => { return _returnValueUrhGXCo };
		const _namec03DmLK = () => { return _returnValuehpCamR };
		const _descriptionaWUZ7e1 = {
		
	}
		const _argumentaRVPT4 = new Argument(_namec03DmLK, _descriptionaWUZ7e1)
		const _returnValueFPf8kT5 = await _argumentaRVPT4.argRequired()
		const _returnValueiBWDacy = await _argumentaRVPT4.argRequired()
		const _returnValueeyQJ711 = await _argumentaRVPT4.argOptional()
		const _returnValuepaD5Yl4 = {
		
	}
		const _valuefBD2hyW = () => { return _returnValuepaD5Yl4 };
		const _descriptionoEbJf48 = undefined;
		const _returnValueRjdl74F = await _argumentaRVPT4.default(_valuefBD2hyW, _descriptionoEbJf48)
		const _returnValueTPgitYx = await _helpervyvugy.argumentTerm(_argumentaRVPT4)
		const _argumentZzI7P85 = null;
		const _returnValuelOtWt9e = await _helpervyvugy.argumentTerm(_argumentZzI7P85)
		const _cmdGyKe9C = false;
		const _arrayValueaE6wmM1 = {
		
	}
		const _arrayValueGEudnWq = undefined;
		const _arrayValueGOn3VqF = undefined;
		const _arrayValueaBiFUyD = [_arrayValueaE6wmM1, _arrayValueGEudnWq, _arrayValueGOn3VqF]
		const _arrayValueX64XZMn = undefined;
		const _arrayValueXdTJvv6 = 2.091203717147872;
		const _returnValueilj4hin = [_arrayValueaBiFUyD, _arrayValueX64XZMn, _arrayValueXdTJvv6]
		const _helperAjL25IU = () => { return _returnValueilj4hin };
		const _returnValueu2e93m = await _helpervyvugy.formatHelp(_cmdGyKe9C, _helperAjL25IU)
		const _cmdWbjFHZ1 = false;
		const _helperIRG7ORq = []
		const _returnValuetv35ar = await _helpervyvugy.formatHelp(_cmdWbjFHZ1, _helperIRG7ORq)
		const _returnValueTR8tfvO = await _HelpyaVkGi1.longestOptionTermLength(_cmdvkpd22, _helpervyvugy)
	});

	it('test for Help', async () => {
		const _HelpmaMBTpk = new Help()
		const _nameECaeiDk = undefined;
		const _cmdSd0qwG = new Command(_nameECaeiDk)
		const _arrayValueJOV5h98 = true;
		const _arrayValueHgQKtNH = undefined;
		const _arrayValuecEoqUpR = -7.454136980403532;
		const _allowUnknownuNfWcBQ = [_arrayValueJOV5h98, _arrayValueHgQKtNH, _arrayValuecEoqUpR]
		const _returnValuetr7m104 = await _cmdSd0qwG.allowUnknownOption(_allowUnknownuNfWcBQ)
		const _returnValueFnucIHP = await _HelpmaMBTpk.visibleOptions(_cmdSd0qwG)
		const _arrayValueHBH6zzp = undefined;
		const _arrayValueSIuweii = true;
		const _cmdsJdJwp = [_arrayValueHBH6zzp, _arrayValueSIuweii]
		const _returnValueLRPO14i = await _HelpmaMBTpk.visibleArguments(_cmdsJdJwp)
	});

	it('test for Help', async () => {
		const _HelpOWWxbvQ = new Help()
		const _cmduAMtUI1 = "RRRoKG21xx35t9jW7MF6C8n3trVU0qxCAEB32WugWFi6EcOxr4pw5DDXXiEdOpP0Y6pKjhQGVy";
		const _returnValueg8hNpbM = await _HelpOWWxbvQ.visibleCommands(_cmduAMtUI1)
		const _cmdwOFAOdt = false;
		const _arrayValueyyXDGb = false;
		const _arrayValuenJB3eAI = "z2F7EmHdYi49zLo2jAMR1SfbjoeuJYyoVSU8eTiXgtDR6v9frOB6ACy";
		const _arrayValuetGgmUAE = null;
		const _arrayValuehXCMDfy = [_arrayValuenJB3eAI, _arrayValuetGgmUAE]
		const _helperKcr7t7U = [_arrayValueyyXDGb, _arrayValuehXCMDfy]
		const _returnValueeLQafax = await _HelpOWWxbvQ.longestOptionTermLength(_cmdwOFAOdt, _helperKcr7t7U)
		const _returnValuemyWlzDn = true;
		const _argumentjai2wya = () => { return _returnValuemyWlzDn };
		const _returnValueDJxVKMK = await _HelpOWWxbvQ.argumentTerm(_argumentjai2wya)
		const _strxaRMBVP = "OCiSCy3RzMhyyNpzxdwRWqVl47s8S5N38fN2K3cbdmAzOU95D8dFvWVXFavRG2wczRuIpUf4jsFN4wod4NyhgmOu";
		const _widthXwOPSCO = 8.2067551575906;
		const _indentfN1CP5Y = null;
		const _minColumnWidthSuZdLrR = 2.373643427489082;
		const _returnValuezXX2Z7D = await _HelpOWWxbvQ.wrap(_strxaRMBVP, _widthXwOPSCO, _indentfN1CP5Y, _minColumnWidthSuZdLrR)
		const _cmdI7FwLEx = "t69bbo3MaA1ACcOZ5wpY4zh0aiFH9ceHur0dgHwo6OsfraFAMluYdtLMvu9Veyvx0JVUG1fGs9CruwAi4f5eIEdknYJTtY";
		const _returnValueIoftWoB = await _HelpOWWxbvQ.commandUsage(_cmdI7FwLEx)
	});

	it('test for Help', async () => {
		const _HelpdXeMW9I = new Help()
		const _flagsvQVp7OH = "JifW03nIWNTZnHBFznmwYK6OUKXuyodov4CXOmPydlwlTVgOsaKjvTDqD2YIix5GgfT7qWot4SrBHxNtn9AUps2eXWKk";
		const _optionBNDajZ = {
			"flags": _flagsvQVp7OH
	}
		const _returnValueF6v8IAF = await _HelpdXeMW9I.optionTerm(_optionBNDajZ)
		const _cmde4eijQq = -1.756885025500754;
		const _helperjJbZ6w = new Help()
		const _argChoicesZfqCKxP = {
		
	}
		const _defaultValuelIKrxOC = undefined;
		const _defaultValueDescriptionsCdshvN = true;
		const _descriptionAiVwwRw = -8.847591581215573;
		const _argumenttyelqz4 = {
			"argChoices": _argChoicesZfqCKxP,
		"defaultValue": _defaultValuelIKrxOC,
		"defaultValueDescription": _defaultValueDescriptionsCdshvN,
		"description": _descriptionAiVwwRw
	}
		const _returnValuektRuUTd = await _helperjJbZ6w.argumentDescription(_argumenttyelqz4)
		const _returnValueoKEiNfv = await _HelpdXeMW9I.padWidth(_cmde4eijQq, _helperjJbZ6w)
		const _cmdq52aUZZ = "Q654IXaFQyb5ARYAGxdFDUtOZAKcQ7qKqSMAkR7nUlykoezxEkChTo2CFuo6bsx0NdUn8wsMOYk7H3h1RjEgKBREdDx";
		const _returnValuel3uwObp = await _HelpdXeMW9I.commandUsage(_cmdq52aUZZ)
		const _optiongTEjEVx = null;
		const _returnValueRvT9bbX = await _HelpdXeMW9I.optionTerm(_optiongTEjEVx)
	});

	it('test for Help', async () => {
		const _HelpjJWQSS = new Help()
		const _arrayValueHPS2CPu = 7.679896649029448;
		const _arrayValueYd0jvO9 = -1.571434573798122;
		const _arrayValued5fV89v = undefined;
		const _returnValuevydw6Ij = [_arrayValueHPS2CPu, _arrayValueYd0jvO9, _arrayValued5fV89v]
		const _match12KU4n = () => { return _returnValuevydw6Ij };
		const _returnValuevjWUhyV = undefined;
		const _returnValuegqftWL0 = () => { return _returnValuevjWUhyV };
		const _substrpu2U9Lg = () => { return _returnValuegqftWL0 };
		const _strQH4dhDi = {
			"match": _match12KU4n,
		"substr": _substrpu2U9Lg
	}
		const _widthDL22dl = -3.453891871584023;
		const _indentmT7rdgk = -3.2173168076982677;
		const _minColumnWidthGxODfPz = 5.429188142874331;
		const _returnValuepINsWae = await _HelpjJWQSS.wrap(_strQH4dhDi, _widthDL22dl, _indentmT7rdgk, _minColumnWidthGxODfPz)
		const _returnValueFMINPWM = {
		
	}
		const _flagsrccUSXP = () => { return _returnValueFMINPWM };
		const _descriptionA3ps4TU = 6.095483771711038;
		const _optionHV0LhZX = new Option(_flagsrccUSXP, _descriptionA3ps4TU)
		const _mandatoryb485Wdt = false;
		const _returnValuerHUABQm = await _optionHV0LhZX.makeOptionMandatory(_mandatoryb485Wdt)
		const _nameT6GXiw6 = undefined;
		const _returnValuemwIkh6I = await _optionHV0LhZX.env(_nameT6GXiw6)
		const _valuefV6YBQD = "7DCpSpyGmgjrYOklGHUyGbqpiGabSLjnft5LpeWpSt7L";
		const _previousuO93b6H = []
		const _returnValueG1DCppJ = await _optionHV0LhZX._concatValue(_valuefV6YBQD, _previousuO93b6H)
		const _fnUAYw4nr = undefined;
		const _returnValueRrC3WE = await _optionHV0LhZX.argParser(_fnUAYw4nr)
		const _returnValueFqT6qTr = undefined;
		const _value1gLHK4 = () => { return _returnValueFqT6qTr };
		const _returnValueda6zviZ = undefined;
		const _concatCkKdwGJ = () => { return _returnValueda6zviZ };
		const _previousXq7omih = {
			"concat": _concatCkKdwGJ
	}
		const _returnValueSMnxtW7 = await _optionHV0LhZX._concatValue(_value1gLHK4, _previousXq7omih)
		const _returnValueNZB4SP = await _HelpjJWQSS.optionDescription(_optionHV0LhZX)
		const _includesaCCsqmN = undefined;
		const _flagsjeYipMZ = {
			"includes": _includesaCCsqmN
	}
		const _descriptionvZCuMjo = 8.10230179508784;
		const _cmdrYluspH = new Option(_flagsjeYipMZ, _descriptionvZCuMjo)
		const _arrayValuemZssxgl = false;
		const _arrayValuedIpi5IB = null;
		const _valuesWLXq7q8 = [_arrayValuemZssxgl, _arrayValuedIpi5IB]
		const _returnValueCLPzeUa = await _cmdrYluspH.choices(_valuesWLXq7q8)
		const _valuew4XnGG1 = {
		
	}
		const _previousc39BQ7x = "DtBWCMeay6rFV4tI5iyvXaq3QUtGNNt";
		const _returnValuef4RShqF = await _cmdrYluspH._concatValue(_valuew4XnGG1, _previousc39BQ7x)
		const _fn01vzmN = undefined;
		const _returnValuesvFR5nG = await _cmdrYluspH.argParser(_fn01vzmN)
		const _returnValueZ6XHD0n = await _cmdrYluspH.attributeName()
		const _mandatoryLMrMIil = true;
		const _returnValueecHkKe0 = await _cmdrYluspH.makeOptionMandatory(_mandatoryLMrMIil)
		const _returnValueRhZA3Ei = await _HelpjJWQSS.commandDescription(_cmdrYluspH)
	});

	it('test for Help', async () => {
		const _HelpjewrqdV = new Help()
		const _returnValuetF4ACiL = "Y2pWGK1EzbT4dX89bprMdil2MAvQLIGWgueykoT4PFIDNUzu4K0YfxTRLx4ooyh5VJ7";
		const _cmdsNgUoUT = () => { return _returnValuetF4ACiL };
		const _returnValueqNDknQk = await _HelpjewrqdV.subcommandTerm(_cmdsNgUoUT)
		const _cmdO61Ovyt = undefined;
		const _sortSubcommandsf0YZQE6 = undefined;
		const _returnValuewhuHjic = undefined;
		const _subcommandTermKAssycB = () => { return _returnValuewhuHjic };
		const _helpergFJLAPm = {
			"sortSubcommands": _sortSubcommandsf0YZQE6,
		"subcommandTerm": _subcommandTermKAssycB
	}
		const _returnValuel1NYIcP = await _HelpjewrqdV.formatHelp(_cmdO61Ovyt, _helpergFJLAPm)
	});

	it('test for Help', async () => {
		const _Help8mKB5j = new Help()
		const __argsDescriptionf5diPoD = {
		
	}
		const __argsBTJemv = {
		
	}
		const _cmdcnmJHZP = {
			"_argsDescription": __argsDescriptionf5diPoD,
		"_args": __argsBTJemv
	}
		const _returnValuedK6YssW = await _Help8mKB5j.visibleArguments(_cmdcnmJHZP)
		const _arrayValuebAQOcMZ = undefined;
		const _arrayValuepWe58bP = 0.14954080696328198;
		const _arrayValueYEvBhkE = [_arrayValuebAQOcMZ, _arrayValuepWe58bP]
		const _cmdiLujPSp = [_arrayValueYEvBhkE]
		const _returnValuerUQ03OY = await _Help8mKB5j.subcommandTerm(_cmdiLujPSp)
		const _nameHy2Nppv = -7.4317023006089595;
		const _argumentyXer3Yf = new Command(_nameHy2Nppv)
		const _returnValueZqxdWx = await _argumentyXer3Yf.unknownCommand()
		const _arrayValueQgd0coL = []
		const _arrayValueaeUUPHm = undefined;
		const _arrayValuev495a3P = "AVYBRL7Cq8k76AgCe9ClHDYPPIetW87dkVMKAbs80HhUwV7L5dDPge1NDI4mvJAR18W9lzPCfSINTq4s881UPjq";
		const _arrayValuembDFU58 = true;
		const _arrayValuej4RS2Mv = [_arrayValueQgd0coL, _arrayValueaeUUPHm, _arrayValuev495a3P, _arrayValuembDFU58]
		const _arrayValuelW4xkvH = -3.693610446203058;
		const _arrayValuePPvTlOC = undefined;
		const _arrayValuedczj0bi = undefined;
		const _arrayValueaeHHydK = [_arrayValuelW4xkvH, _arrayValuePPvTlOC, _arrayValuedczj0bi]
		const _arrayValueOHA7Nog = 8.577435368637008;
		const _arglvUYlMg = [_arrayValuej4RS2Mv, _arrayValueaeHHydK, _arrayValueOHA7Nog]
		const _returnValueNLYfbN = await _argumentyXer3Yf._findOption(_arglvUYlMg)
		const _subcommandye0Umzg = null;
		const _returnValuezjQBycP = "LWVGcMfEWfMo2G2Dj5y1qCO1fBzVcZ91MXYtov1m6ZNz6zQXadyaswdQveQjFGOSHLeXca4zjcFPrXMseH7Ahv8z";
		const _argsNnRb4Gd = () => { return _returnValuezjQBycP };
		const _returnValueVUx4ZuA = await _argumentyXer3Yf._executeSubCommand(_subcommandye0Umzg, _argsNnRb4Gd)
		const _configurationGbpsW2 = undefined;
		const _returnValue0GTfao = await _argumentyXer3Yf.configureHelp(_configurationGbpsW2)
		const _positionAX0uqLy = {
		
	}
		const _returnValueaSaCI6P = undefined;
		const _texty7iOyk = () => { return _returnValueaSaCI6P };
		const _returnValueoukXOYG = await _argumentyXer3Yf.addHelpText(_positionAX0uqLy, _texty7iOyk)
		const _returnValueLekB4V = await _Help8mKB5j.argumentTerm(_argumentyXer3Yf)
		const _nameIhbKPt2 = "BhklD6PZx6EuHUWjrNxegjDKj3HXCcAj";
		const _descriptionm9Q4tHT = "NnXTXhFW4iKDPdoT1kUPAQL9OT3t";
		const _cmdfsHZ4aA = new Argument(_nameIhbKPt2, _descriptionm9Q4tHT)
		const _fnIPI9NJU = undefined;
		const _returnValueZ3LT4VQ = await _cmdfsHZ4aA.argParser(_fnIPI9NJU)
		const _valueqGNsheh = {
		
	}
		const _descriptionuQpGARc = undefined;
		const _returnValueBEUn3w = await _cmdfsHZ4aA.default(_valueqGNsheh, _descriptionuQpGARc)
		const _returnValueuc3bmFo = await _cmdfsHZ4aA.name()
		const _returnValueSFN5OOu = await _cmdfsHZ4aA.argRequired()
		const _returnValueqOENwpR = await _cmdfsHZ4aA.name()
		const _returnValueI0opr3b = await _Help8mKB5j.commandUsage(_cmdfsHZ4aA)
	});

	it('test for Help', async () => {
		const _HelpGgvpAEo = new Help()
		const _returnValueQDJMiEK = undefined;
		const _matchFghelKs = () => { return _returnValueQDJMiEK };
		const _returnValuegkdzuSC = false;
		const _substrZAlf19 = () => { return _returnValuegkdzuSC };
		const _stroVKPSm = {
			"match": _matchFghelKs,
		"substr": _substrZAlf19
	}
		const _arrayValuevzmLFuL = "m2ASt9sCkyo";
		const _arrayValuekc2qxaU = true;
		const _returnValueKSVRAy8 = null;
		const _arrayValues9snWbz = () => { return _returnValueKSVRAy8 };
		const _widthOYqqbVJ = [_arrayValuevzmLFuL, _arrayValuekc2qxaU, _arrayValues9snWbz]
		const _indentzk3ssdZ = 2.604457472662375;
		const _minColumnWidth07yVJo = 9.263246446381931;
		const _returnValueuLMxyv = await _HelpGgvpAEo.wrap(_stroVKPSm, _widthOYqqbVJ, _indentzk3ssdZ, _minColumnWidth07yVJo)
		const _arrayValuepQwkJnT = undefined;
		const _arrayValuejmtzlTY = false;
		const _arrayValueOs2o34 = -9.645484219474435;
		const _returnValueeIhCgqu = {
		
	}
		const _arrayValueU1ioJL = () => { return _returnValueeIhCgqu };
		const _arrayValueNR1Itqs = 4.501438386628944;
		const _arrayValueobYf8cc = "SOoqvMkCAvmOR1LuLzHx9FMESKJplO";
		const _arrayValueXEygCjL = [_arrayValueU1ioJL, _arrayValueNR1Itqs, _arrayValueobYf8cc]
		const _cmdxJtxBeZ = [_arrayValuepQwkJnT, _arrayValuejmtzlTY, _arrayValueOs2o34, _arrayValueXEygCjL]
		const _arrayValuesWrmNia = true;
		const _arrayValueMIzSfau = null;
		const _helpertPtRhq = [_arrayValuesWrmNia, _arrayValueMIzSfau]
		const _returnValuemHQjhc = await _HelpGgvpAEo.longestArgumentTermLength(_cmdxJtxBeZ, _helpertPtRhq)
	});

	it('test for Help', async () => {
		const _HelprwrsT6z = new Help()
		const _optiontnHAY0T = []
		const _returnValueOAr6Qo1 = await _HelprwrsT6z.optionDescription(_optiontnHAY0T)
		const _namehkzNwX = {
		
	}
		const _cmdljNaXXu = new Command(_namehkzNwX)
		const _returnValueKoxv4ne = await _cmdljNaXXu._hasImplicitHelpCommand()
		const _returnValuegwzA5jH = await _HelprwrsT6z.subcommandTerm(_cmdljNaXXu)
		const _optionsswjQdMP = {
		
	}
		const _arrayValueo4i7dAk = -7.253408043421889;
		const _arrayValueTgDb3y = undefined;
		const __hasHelpOptionoTlT4yM = [_arrayValueo4i7dAk, _arrayValueTgDb3y]
		const __helpShortFlagJPfjUBw = null;
		const _arrayValueuTcHC4h = null;
		const _returnValueK0ocMO2 = "z6aXo";
		const _arrayValuenz2cLBr = () => { return _returnValueK0ocMO2 };
		const _returnValueiZ75ukG = [_arrayValueuTcHC4h, _arrayValuenz2cLBr]
		const __findOptionnSwtbRG = () => { return _returnValueiZ75ukG };
		const __helpLongFlagpxmQOx = -8.850120919963677;
		const _arrayValueO62qf8J = undefined;
		const _arrayValuewbLkoks = undefined;
		const _arrayValueEBjCxhU = true;
		const _createOption9R07MN = [_arrayValueO62qf8J, _arrayValuewbLkoks, _arrayValueEBjCxhU]
		const __helpDescriptionYAt7uJW = "vcHgwr1f42wblbmWqqbszPa8IkJCl0cWGucPLJocjxuOfr5gDhxu5Lpi5fNBI";
		const __helpFlagsGrVg7f8 = null;
		const _cmdcvZH4ly = {
			"options": _optionsswjQdMP,
		"_hasHelpOption": __hasHelpOptionoTlT4yM,
		"_helpShortFlag": __helpShortFlagJPfjUBw,
		"_findOption": __findOptionnSwtbRG,
		"_helpLongFlag": __helpLongFlagpxmQOx,
		"createOption": _createOption9R07MN,
		"_helpDescription": __helpDescriptionYAt7uJW,
		"_helpFlags": __helpFlagsGrVg7f8
	}
		const _returnValuevdxsWrS = await _HelprwrsT6z.visibleOptions(_cmdcvZH4ly)
		const _cmdNbCGWoX = undefined;
		const _helperYOhXlNC = "xpBKC7c3qvlAbYWmoJpYsFFkYh90pNrmv";
		const _returnValueS38l1C = await _HelprwrsT6z.padWidth(_cmdNbCGWoX, _helperYOhXlNC)
		const _arrayValueRr0zDE = null;
		const _arrayValueXOQlpj8 = -1.7735129382602093;
		const _cmdSUJqr7 = [_arrayValueRr0zDE, _arrayValueXOQlpj8]
		const _returnValueHaGsys = "NLbcI3XambyiOYBnYyJZhONrnfD";
		const _visibleArgumentszg9S5DB = () => { return _returnValueHaGsys };
		const _returnValuevjP3i6p = null;
		const _argumentTermfBhU0Vo = () => { return _returnValuevjP3i6p };
		const _helperXZyvffQ = {
			"visibleArguments": _visibleArgumentszg9S5DB,
		"argumentTerm": _argumentTermfBhU0Vo
	}
		const _returnValueYP6EqMa = await _HelprwrsT6z.longestArgumentTermLength(_cmdSUJqr7, _helperXZyvffQ)
	});

	it('test for Help', async () => {
		const _HelpEcBDItQ = new Help()
		const _namecUGLVV3 = false;
		const _cmdkxtuFmh = new Command(_namecUGLVV3)
		const _positionalytfhG6U = true;
		const _returnValuenJSgMOK = await _cmdkxtuFmh.enablePositionalOptions(_positionalytfhG6U)
		const _combinepzlLa2 = false;
		const _returnValueIVyKMaa = await _cmdkxtuFmh.combineFlagAndOptionalValue(_combinepzlLa2)
		const _passThroughpgubThU = false;
		const _returnValueLm9cKH5 = await _cmdkxtuFmh.passThroughOptions(_passThroughpgubThU)
		const _positionalMNerOWm = true;
		const _returnValuetN4lWTd = await _cmdkxtuFmh.enablePositionalOptions(_positionalMNerOWm)
		const _returnValueCOeDHTm = await _HelpEcBDItQ.visibleCommands(_cmdkxtuFmh)
		const _cmdLAUHuPP = "Sq8DLcvC6x4NyLUDXoo1YX9L5PQuko8TMVEcw5Y5FPPtAymTtLqazGUv8TwTpRBl28pzKunKimtkPinW";
		const _helpernFIwwM = new Help()
		const _returnValuerVNTRm = null;
		const _descriptionKwBVXlf = () => { return _returnValuerVNTRm };
		const _cmdvsVW6Fm = {
			"description": _descriptionKwBVXlf
	}
		const _returnValueWXxLh55 = await _helpernFIwwM.subcommandDescription(_cmdvsVW6Fm)
		const _cmdeRKLITB = true;
		const _helperuIgtPz = "SymY1lLehGoFtGA3k5hoQtC0P5ss5vEUVPudRgDV";
		const _returnValueh3kY47 = await _helpernFIwwM.formatHelp(_cmdeRKLITB, _helperuIgtPz)
		const _cmdsadohqI = "apm60rKd33NSyq5wQPmXmu5jRMTauml8fItAYvUHUCc31KOhuYelBHjKPaNajG";
		const _returnValueJFbpV24 = await _helpernFIwwM.subcommandDescription(_cmdsadohqI)
		const _cmdfXDXIa = "Bkwk4hNJFccC4YcVj0q638NeY6vYhzf8GJlZC450t52dKihU33c9jRRHV";
		const _returnValueicpmYu = await _helpernFIwwM.commandDescription(_cmdfXDXIa)
		const _argumentraHDgFC = 2.8609324253186426;
		const _returnValueEY3ClmW = await _helpernFIwwM.argumentTerm(_argumentraHDgFC)
		const _returnValueuk2ZeBL = await _HelpEcBDItQ.longestArgumentTermLength(_cmdLAUHuPP, _helpernFIwwM)
		const _returnValueMloPbqj = null;
		const _cmdSkhNDDO = () => { return _returnValueMloPbqj };
		const _returnValueR1WmKHt = undefined;
		const _helperKxaxSo2 = () => { return _returnValueR1WmKHt };
		const _returnValuehfkH0Yv = await _HelpEcBDItQ.longestArgumentTermLength(_cmdSkhNDDO, _helperKxaxSo2)
		const _argumentTaWwkoC = "8ZasHxfjq6JWNjO58KzWDrpMR7vQicroht4M2gpUj1SrOWkjRXDBqB9vnQ2sGkxm4Zo";
		const _returnValueVsqeC5d = await _HelpEcBDItQ.argumentDescription(_argumentTaWwkoC)
		const _strrXaEJQJ = 8.795218699107249;
		const _widthUuEyCiE = -9.899721095309648;
		const _indentj9Hcm4T = null;
		const _minColumnWidtha8KWYpU = {
		
	}
		const _returnValueW0CL963 = await _HelpEcBDItQ.wrap(_strrXaEJQJ, _widthUuEyCiE, _indentj9Hcm4T, _minColumnWidtha8KWYpU)
	});

	it('test for Help', async () => {
		const _HelpsgSLAZb = new Help()
		const _arrayValueoBS7fgk = "gAxLUjrqKMUw9UXpqaDbR5sDabMiMtGYoYijj86fWP64H478vr6ULnTuWl5Dj78HUbrggjL95o2o";
		const _argumentU7TC32Q = [_arrayValueoBS7fgk]
		const _returnValueKF6d6zg = await _HelpsgSLAZb.argumentDescription(_argumentU7TC32Q)
		const _argChoicescdVZImp = {
		
	}
		const _negatepbnwEvN = {
		
	}
		const _defaultValueM8XhX5p = null;
		const _arrayValueDFYmjTY = "z3vjK5OtizzVzrltgT5PhUqvrqMVUz5R";
		const _returnValueHUcyz21 = [_arrayValueDFYmjTY]
		const _defaultValueDescriptionUyi6RN = () => { return _returnValueHUcyz21 };
		const _envVarUaJyvU = "2ceCEUNMerhfClS3G7qwco0aZ4cj4xx4i6A1KHXwADoiFI";
		const _descriptionaP5Z8NK = null;
		const _optionktBqRy6 = {
			"argChoices": _argChoicescdVZImp,
		"negate": _negatepbnwEvN,
		"defaultValue": _defaultValueM8XhX5p,
		"defaultValueDescription": _defaultValueDescriptionUyi6RN,
		"envVar": _envVarUaJyvU,
		"description": _descriptionaP5Z8NK
	}
		const _returnValueObv0UWh = await _HelpsgSLAZb.optionDescription(_optionktBqRy6)
		const _cmdCh2n4l = undefined;
		const _helperd1vYANX = "2BijAZ2SJaZafvN631mphRdwIJ445uCjyhvUcxvgWhYJG6j3YP";
		const _returnValueFhDXJGe = await _HelpsgSLAZb.formatHelp(_cmdCh2n4l, _helperd1vYANX)
	});

	it('test for Help', async () => {
		const _HelpoTK0QAR = new Help()
		const _flagsCm1I0pN = "VggHEjCFP29YEVNWYQU755Q4bQIAaM6eoasltSkL3e53DNgythifB2G5cgBwb1b";
		const _descriptionaGYty93 = -7.353842900306998;
		const _optionQngtHl0 = new Option(_flagsCm1I0pN, _descriptionaGYty93)
		const _mandatoryCv7BcQk = false;
		const _returnValuesIjNQJ = await _optionQngtHl0.makeOptionMandatory(_mandatoryCv7BcQk)
		const _fnLRRcOVU = undefined;
		const _returnValueEtFUl6h = await _optionQngtHl0.argParser(_fnLRRcOVU)
		const _returnValueBVWoaC6 = await _HelpoTK0QAR.optionTerm(_optionQngtHl0)
		const _namesze0e4X = 0.713520045922035;
		const _cmdvb8EzWT = new Command(_namesze0e4X)
		const _returnValuezZQHlJ = undefined;
		const _receivedArgsIB54eiA = () => { return _returnValuezZQHlJ };
		const _returnValuecMXfZK7 = await _cmdvb8EzWT._excessArguments(_receivedArgsIB54eiA)
		const _argtO2CjtC = undefined;
		const _returnValueM456Z3c = await _cmdvb8EzWT._findOption(_argtO2CjtC)
		const _displaySuggestionZYgeMhL = undefined;
		const _returnValueZZ3iwGK = await _cmdvb8EzWT.showSuggestionAfterError(_displaySuggestionZYgeMhL)
		const _arrayValueKlCa9W0 = {
		
	}
		const _arrayValueLdxBSYw = -9.12331388308078;
		const _exitCodeEIkp33C = [_arrayValueKlCa9W0, _arrayValueLdxBSYw]
		const _arrayValuemnSSVkX = undefined;
		const _arrayValueLRZTcYf = false;
		const _codeiGptxi = [_arrayValuemnSSVkX, _arrayValueLRZTcYf]
		const _messagezI2wz7D = "odFgeUX6kViutldgnxGBx3f3b3SRFJpkh5IKqoFid39YtdKWJOo42d2Y";
		const _returnValuemAEplsT = await _cmdvb8EzWT._exit(_exitCodeEIkp33C, _codeiGptxi, _messagezI2wz7D)
		const _namebucF7RG = true;
		const _returnValuebsB8lih = await _cmdvb8EzWT.missingArgument(_namebucF7RG)
		const _returnValueYaqLdYY = await _HelpoTK0QAR.subcommandTerm(_cmdvb8EzWT)
		const _optionQKzmHXN = "WVOsGprSBgvg6fuv6m8KLBmjIzhgpx";
		const _returnValuet2ZrcUV = await _HelpoTK0QAR.optionTerm(_optionQKzmHXN)
		const _cmddJJmwa7 = undefined;
		const _arrayValueZARuq1M = "C6KQPxCUsAYe1t2XgmXVdqrmvcAeKrmiyygVvrqBn2K4fD9u51mhvep27z1KxeNGT87zqRHZc";
		const _returnValuet0GBTen = [_arrayValueZARuq1M]
		const _visibleArgumentswYAYMX7 = () => { return _returnValuet0GBTen };
		const _returnValueBMmI8d2 = null;
		const _argumentTermAS1Noqa = () => { return _returnValueBMmI8d2 };
		const _helperB4nCpJ = {
			"visibleArguments": _visibleArgumentswYAYMX7,
		"argumentTerm": _argumentTermAS1Noqa
	}
		const _returnValueRyugEJX = await _HelpoTK0QAR.longestArgumentTermLength(_cmddJJmwa7, _helperB4nCpJ)
		const _cmduLol3Y7 = -3.964329992370571;
		const _helperjgLhhYz = new Help()
		const _arrayValuembpQrK8 = -6.905737811306523;
		const _cmdMKzbQao = [_arrayValuembpQrK8]
		const _returnValueLiv12q = await _helperjgLhhYz.subcommandTerm(_cmdMKzbQao)
		const _cmdNsRfNFZ = null;
		const _helperittAgvs = "ukwy6W7HgkbCdfkz9kJ7wL2rrHNk4gAuWnwtuVPTvOXvS7FcD2OPz6ukpA6JsA4qdg3gJV1Wef";
		const _returnValueryFkApC = await _helperjgLhhYz.longestArgumentTermLength(_cmdNsRfNFZ, _helperittAgvs)
		const _arrayValueteqnRa5 = null;
		const _nameA4A3bh = [_arrayValueteqnRa5]
		const _argumentvNfd2d = new Command(_nameA4A3bh)
		const _allowExcessZTZ41AM = true;
		const _returnValuef2rFvh8 = await _argumentvNfd2d.allowExcessArguments(_allowExcessZTZ41AM)
		const _allowUnknownVMzHISL = true;
		const _returnValue1ZBkcy = await _argumentvNfd2d.allowUnknownOption(_allowUnknownVMzHISL)
		const _returnValueLJFzcjx = await _helperjgLhhYz.argumentTerm(_argumentvNfd2d)
		const _cmdOlko6E = []
		const _sortSubcommandsTOUSBxh = false;
		const _subcommandTerme96xCp = undefined;
		const _helpervJZENcM = {
			"sortSubcommands": _sortSubcommandsTOUSBxh,
		"subcommandTerm": _subcommandTerme96xCp
	}
		const _returnValueL2clXNT = await _helperjgLhhYz.longestSubcommandTermLength(_cmdOlko6E, _helpervJZENcM)
		const _returnValuemGXdBVO = await _HelpoTK0QAR.longestArgumentTermLength(_cmduLol3Y7, _helperjgLhhYz)
	});

	it('test for Help', async () => {
		const _HelpzCfeOif = new Help()
		const _namexYVgp2I = []
		const _descriptionWS2MXAv = false;
		const _argumentdyQdVfA = new Argument(_namexYVgp2I, _descriptionWS2MXAv)
		const _returnValueab2xVlW = "r4R971KSaXp0eESFLmbeBgeWH4k8qzTqBBkMQ1AxTPNwYsIYG3kmmYaBWyAGgHtiLYKMH94TQavi4G";
		const _valueg7gOVQi = () => { return _returnValueab2xVlW };
		const _previousHekK7wQ = {
		
	}
		const _returnValueSVW6Ymj = await _argumentdyQdVfA._concatValue(_valueg7gOVQi, _previousHekK7wQ)
		const _fnGiAZ6C2 = undefined;
		const _returnValuehyyU7A3 = await _argumentdyQdVfA.argParser(_fnGiAZ6C2)
		const _valueoomOnrr = "iUkM6QBpP8OK1bLL1m";
		const _previouseLBWXmO = "ulwaj4TwkbUrqJr7w97zsSsyrE8bgoF6Rxj1sECGE";
		const _returnValueFmSCHlO = await _argumentdyQdVfA._concatValue(_valueoomOnrr, _previouseLBWXmO)
		const _arrayValuegVTJxQ = true;
		const _arrayValueaNlgyBZ = {
		
	}
		const _arrayValueYKUQI9U = undefined;
		const _arrayValueOJqwNaW = null;
		const _valuesxygvOp6 = [_arrayValuegVTJxQ, _arrayValueaNlgyBZ, _arrayValueYKUQI9U, _arrayValueOJqwNaW]
		const _returnValuenJd2P8K = await _argumentdyQdVfA.choices(_valuesxygvOp6)
		const _returnValueK2VPJMI = await _argumentdyQdVfA.argRequired()
		const _returnValueCcVlJLu = await _HelpzCfeOif.argumentDescription(_argumentdyQdVfA)
		const _cmdldnoBsF = 1.245774257865504;
		const _returnValueXqDXUm = await _HelpzCfeOif.visibleOptions(_cmdldnoBsF)
		const _optionl7JVfSd = "o2USo3nK3uzvNzR8jgNYv3DF2lKn";
		const _returnValuez9FXeWM = await _HelpzCfeOif.optionDescription(_optionl7JVfSd)
		const _strhaD2JUV = "EiNjeVvCk36t31gDexOraofw2iOWwbeHCI1fqezpT4qSaUsrD416abtHtIdTbVY5SU4c0tBoYUm6qbbu6pQz9RfwQ";
		const _widthWdCH5fJ = 9.605329490402326;
		const _indentXXbU42t = 0.4376535607542742;
		const _minColumnWidthlmEr87B = 8.902144409415587;
		const _returnValuecDUa0J8 = await _HelpzCfeOif.wrap(_strhaD2JUV, _widthWdCH5fJ, _indentXXbU42t, _minColumnWidthlmEr87B)
	});

	it('test for Help', async () => {
		const _HelpYoGSqc = new Help()
		const _cmdrXk1p2v = -6.417902683513816;
		const _helperdq3np7D = new Help()
		const _flagsERhWB68 = "cBNnA29jFaSUuFMDdg4pavvP6h1dCjRo2B3qpn900UJkPGXu";
		const _description9VLrIg = null;
		const _argumentpNc0J08 = new Option(_flagsERhWB68, _description9VLrIg)
		const _returnValuezxIcFX4 = null;
		const _valueyosS1S = () => { return _returnValuezxIcFX4 };
		const _descriptiontAfooSy = undefined;
		const _returnValuevyD55Qa = await _argumentpNc0J08.default(_valueyosS1S, _descriptiontAfooSy)
		const _fnlkJb3Bg = undefined;
		const _returnValueFSmtvmm = await _argumentpNc0J08.argParser(_fnlkJb3Bg)
		const _mandatoryf84wceF = false;
		const _returnValueparctu6 = await _argumentpNc0J08.makeOptionMandatory(_mandatoryf84wceF)
		const _hideEifjNkR = false;
		const _returnValueREX9xnP = await _argumentpNc0J08.hideHelp(_hideEifjNkR)
		const _namejk3vBAX = undefined;
		const _returnValueY8Lt9sc = await _argumentpNc0J08.env(_namejk3vBAX)
		const _returnValueWlWT4Rd = await _helperdq3np7D.argumentDescription(_argumentpNc0J08)
		const _cmdWReph2z = "QvLsV71ldmmCgl5ge6ajCk7tiPwhvHMRB";
		const _returnValuek1GHJv8 = 9.37858649207164;
		const _helperUZIIxG5 = () => { return _returnValuek1GHJv8 };
		const _returnValueUJ6cPgq = await _helperdq3np7D.longestOptionTermLength(_cmdWReph2z, _helperUZIIxG5)
		const _returnValueFAbcYPy = await _HelpYoGSqc.longestOptionTermLength(_cmdrXk1p2v, _helperdq3np7D)
		const _arrayValuelchr3eS = undefined;
		const _arrayValueNGdHlXw = false;
		const _arrayValuefQIATc = true;
		const _commandsHGTWB8h = [_arrayValuelchr3eS, _arrayValueNGdHlXw, _arrayValuefQIATc]
		const __hasImplicitHelpCommandrlQPSL0 = false;
		const __helpCommandnameAndArgsc0IICNb = {
		
	}
		const _arrayValuewbH8fBq = false;
		const _arrayValueVHBtl4t = true;
		const _arrayValueR1lYkip = [_arrayValueVHBtl4t]
		const _arrayValueX1dbemL = {
		
	}
		const _arrayValueADn4eaW = [_arrayValueR1lYkip, _arrayValueX1dbemL]
		const _arrayValuecQvBZfV = [_arrayValuewbH8fBq, _arrayValueADn4eaW]
		const _returnValuetJMxPSY = [_arrayValuecQvBZfV]
		const _createCommandSUxheAK = () => { return _returnValuetJMxPSY };
		const __helpCommandDescriptiongv1VwUl = false;
		const _cmduME8bCB = {
			"commands": _commandsHGTWB8h,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandrlQPSL0,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsc0IICNb,
		"createCommand": _createCommandSUxheAK,
		"_helpCommandDescription": __helpCommandDescriptiongv1VwUl
	}
		const _returnValueD1Y5Teo = await _HelpYoGSqc.visibleCommands(_cmduME8bCB)
		const _cmdXYAIlyU = "QTXOhrpz7T5IdASneTASOrxXP4tV9aHkqv4yhLrYC3eRRgTabxB";
		const _returnValueeZ4WgPU = await _HelpYoGSqc.commandDescription(_cmdXYAIlyU)
	});

	it('test for Help', async () => {
		const _HelpvAZVRzZ = new Help()
		const _nameveYke4I = "4P0MBzkMK9GYn7XGsUAkYIQP3D8BS1YrwJeMWZvtiYb84qa2UgrK1atg5FX75NCNJUyfbpg82n1DJRHG4y6438G";
		const _cmdIZGL24A = new Command(_nameveYke4I)
		const _returnValueHfFSIIu = -1.2059226376989134;
		const _returnValuekIcOGgn = () => { return _returnValueHfFSIIu };
		const _thenuw96D3t = () => { return _returnValuekIcOGgn };
		const _promiseUSdMyqR = {
			"then": _thenuw96D3t
	}
		const _returnValueQjEWFmJ = -6.109367971537737;
		const _fnwFhjiie = () => { return _returnValueQjEWFmJ };
		const _returnValueazqGIz0 = await _cmdIZGL24A._chainOrCall(_promiseUSdMyqR, _fnwFhjiie)
		const _keyMdJFRb5 = "y3xsMSb9nGJC4L19YRPQdonC7pn7mz6X8uZ7oQkgEAvTrw1jMToU";
		const _valuekTTzJwx = undefined;
		const _returnValueFY6G2uD = await _cmdIZGL24A.setOptionValue(_keyMdJFRb5, _valuekTTzJwx)
		const _returnValueRLnmStH = await _HelpvAZVRzZ.visibleCommands(_cmdIZGL24A)
		const _returnValue87ZQKv = false;
		const _nameheo2NHS = () => { return _returnValue87ZQKv };
		const _descriptionY9cQIwh = undefined;
		const _optionqkOZldR = new Argument(_nameheo2NHS, _descriptionY9cQIwh)
		const _returnValuer0gmWci = await _optionqkOZldR.argRequired()
		const _valuewSjIKRi = "XI2oq2";
		const _descriptionjjaA5rJ = undefined;
		const _returnValue4x7rgJ = await _optionqkOZldR.default(_valuewSjIKRi, _descriptionjjaA5rJ)
		const _fnEBLuhFn = undefined;
		const _returnValueSQPW3cn = await _optionqkOZldR.argParser(_fnEBLuhFn)
		const _returnValue5HjVXI = await _HelpvAZVRzZ.optionDescription(_optionqkOZldR)
		const _returnValueLqFhr9 = -1.0973900950379303;
		const _cmdsxYVU1i = () => { return _returnValueLqFhr9 };
		const _helperLGpJN5S = "ebGC58EaWK3SyiT2WyY";
		const _returnValueh8ptUGx = await _HelpvAZVRzZ.padWidth(_cmdsxYVU1i, _helperLGpJN5S)
	});
})