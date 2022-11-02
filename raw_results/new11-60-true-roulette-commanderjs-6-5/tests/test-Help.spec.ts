export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpMSvnDS8 = new Help()
		const _argumentOVkIl1A = []
		const _returnValueh2rrRve = await _HelpMSvnDS8.argumentDescription(_argumentOVkIl1A)
		const _argumentP6wxh2t = undefined;
		const _returnValueKRyHA4v = await _HelpMSvnDS8.argumentTerm(_argumentP6wxh2t)
	});

	it('test for Help', async () => {
		const _HelpjF6yEph = new Help()
		const _returnValueJ3jEsyp = true;
		const _nameC7OgYFE = () => { return _returnValueJ3jEsyp };
		const _argumentX4ZjfJP = {
			"name": _nameC7OgYFE
	}
		const _returnValueUqBaIf = await _HelpjF6yEph.argumentTerm(_argumentX4ZjfJP)
		const _cmdTz08SGQ = null;
		const _helperoQl16EV = "wHlVYUjdS0pIXidSQvgVMdVbuXOOIM3i3jICm6TWC8vpnW5M6nLD7dO55";
		const _returnValueBadHBW1 = await _HelpjF6yEph.formatHelp(_cmdTz08SGQ, _helperoQl16EV)
		const _returnValueJwbtqiT = false;
		const _namewi01WPC = () => { return _returnValueJwbtqiT };
		const _argumentJGchTLk = {
			"name": _namewi01WPC
	}
		const _returnValuezsiDV7 = await _HelpjF6yEph.argumentTerm(_argumentJGchTLk)
		const _returnValueL2q0O8E = {
		
	}
		const _cmdjEKD6rz = () => { return _returnValueL2q0O8E };
		const _helperWjQrHbn = new Help()
		const _cmdZP3WzKl = true;
		const _helperyYMt6EI = undefined;
		const _returnValueUV0TDVJ = await _helperWjQrHbn.formatHelp(_cmdZP3WzKl, _helperyYMt6EI)
		const _returnValueMVp2lUq = 0.7360295465961553;
		const _cmdyluZbci = () => { return _returnValueMVp2lUq };
		const _returnValuellwsNbj = await _helperWjQrHbn.subcommandTerm(_cmdyluZbci)
		const _cmdd22dkOW = -2.91926216488382;
		const _returnValueApm7lKz = []
		const _sortSubcommandsPg6apek = () => { return _returnValueApm7lKz };
		const _returnValueATlsHDT = undefined;
		const _subcommandTermaR4OFov = () => { return _returnValueATlsHDT };
		const _helperWFYj1YR = {
			"sortSubcommands": _sortSubcommandsPg6apek,
		"subcommandTerm": _subcommandTermaR4OFov
	}
		const _returnValueA24xDxz = await _helperWjQrHbn.longestSubcommandTermLength(_cmdd22dkOW, _helperWFYj1YR)
		const _flagssU2L5F = "METZR1lyvND0NTy0HdPdbk2Qxot1Bya1Ai21UD9RATErfGmbKTwkRjrjK6XNWJDqaQB2pfKqcEb7j7R5Rz";
		const _descriptionWpTXohQ = null;
		const _cmdXVbUnzR = new Option(_flagssU2L5F, _descriptionWpTXohQ)
		const _returnValuefcd1imW = await _cmdXVbUnzR.attributeName()
		const _returnValueOA9jYoO = await _cmdXVbUnzR.name()
		const _returnValueb33c8OU = await _helperWjQrHbn.commandDescription(_cmdXVbUnzR)
		const _returnValueaTcY3xd = "NCabH9tYDKwy07lxC1Ag8GzhebFg";
		const _descriptionL8GkNEX = () => { return _returnValueaTcY3xd };
		const _cmdGkwsdMj = {
			"description": _descriptionL8GkNEX
	}
		const _returnValueDi4Iy6f = await _helperWjQrHbn.commandDescription(_cmdGkwsdMj)
		const _returnValueKYzq6iR = await _HelpjF6yEph.longestArgumentTermLength(_cmdjEKD6rz, _helperWjQrHbn)
	});

	it('test for Help', async () => {
		const _HelptzBJksZ = new Help()
		const _argChoicesWAfAAd = {
		
	}
		const _defaultValueoXkK2Po = undefined;
		const _defaultValueDescriptionEbb6lfR = undefined;
		const _descriptionebXVZZn = "fdHUlts4YSyJxDj7uRs4eKn12b7ubr32nQPMnxselkMzgveeTo5bIqqOR4VHuCpZ0R";
		const _argumentbrHZYPA = {
			"argChoices": _argChoicesWAfAAd,
		"defaultValue": _defaultValueoXkK2Po,
		"defaultValueDescription": _defaultValueDescriptionEbb6lfR,
		"description": _descriptionebXVZZn
	}
		const _returnValueD14BTEW = await _HelptzBJksZ.argumentDescription(_argumentbrHZYPA)
		const _flags8Qemzm = "Sub9SrU9czcibRwGfTctbwhp8gf8K5mygEch6Xt9NibtGHt3EapCd";
		const _optionZTxTtDT = {
			"flags": _flags8Qemzm
	}
		const _returnValueeavvT2 = await _HelptzBJksZ.optionTerm(_optionZTxTtDT)
		const _nameGufwjVF = false;
		const _cmdWSlBdxN = new Command(_nameGufwjVF)
		const _arrayValueNgesGP = -6.332918898644695;
		const _aliasesJi4VWOM = [_arrayValueNgesGP]
		const _returnValuevOpYudT = await _cmdWSlBdxN.aliases(_aliasesJi4VWOM)
		const _returnValueeoMZzYB = await _cmdWSlBdxN.unknownCommand()
		const _eventblTCuUm = true;
		const _listenerSW7Jhka = null;
		const _returnValueIPgFY79 = await _cmdWSlBdxN.hook(_eventblTCuUm, _listenerSW7Jhka)
		const _returnValueBX5v6Uk = await _HelptzBJksZ.visibleOptions(_cmdWSlBdxN)
		const _argChoicesuM0LTvQ = {
		
	}
		const _defaultValueVNK5g1k = undefined;
		const _defaultValueDescriptionYpZ4pVX = false;
		const _descriptionNSKcAfc = null;
		const _argumenttPqB9kl = {
			"argChoices": _argChoicesuM0LTvQ,
		"defaultValue": _defaultValueVNK5g1k,
		"defaultValueDescription": _defaultValueDescriptionYpZ4pVX,
		"description": _descriptionNSKcAfc
	}
		const _returnValuepjumY25 = await _HelptzBJksZ.argumentDescription(_argumenttPqB9kl)
		const _arrayValueZlBrUt1 = undefined;
		const _arrayValueToLSjD = 6.734493312306434;
		const _arrayValuepnNI7M0 = undefined;
		const _cmdP9QE8PN = [_arrayValueZlBrUt1, _arrayValueToLSjD, _arrayValuepnNI7M0]
		const _returnValuemdbTtBe = {
		
	}
		const _helperrKkKqM4 = () => { return _returnValuemdbTtBe };
		const _returnValuekbfWeyI = await _HelptzBJksZ.formatHelp(_cmdP9QE8PN, _helperrKkKqM4)
	});

	it('test for Help', async () => {
		const _HelpR5C5JBK = new Help()
		const _returnValuebc81diV = null;
		const _cmdsvvjilV = () => { return _returnValuebc81diV };
		const _returnValuewQSfbdE = await _HelpR5C5JBK.visibleCommands(_cmdsvvjilV)
	});

	it('test for Help', async () => {
		const _HelpWTqlDCc = new Help()
		const _optionhC362na = "SrwzhpAyFnv4EpQOzW27voWlPtcdawbMnZYMPPMvc";
		const _returnValuea87SuK = await _HelpWTqlDCc.optionTerm(_optionhC362na)
	});

	it('test for Help', async () => {
		const _HelphC3NKu3 = new Help()
		const _returnValuelZhNptn = undefined;
		const _matchytx9BgY = () => { return _returnValuelZhNptn };
		const _returnValueSZih1vU = {
		
	}
		const _substrUtMB9sT = () => { return _returnValueSZih1vU };
		const _strRpRNuKS = {
			"match": _matchytx9BgY,
		"substr": _substrUtMB9sT
	}
		const _widthMO5bBf7 = -2.540109098629939;
		const _indentDlra2zz = -2.8022048144094045;
		const _minColumnWidthnBYxyMc = -4.955368756419171;
		const _returnValuevEHE5w5 = await _HelphC3NKu3.wrap(_strRpRNuKS, _widthMO5bBf7, _indentDlra2zz, _minColumnWidthnBYxyMc)
		const _cmdeXn9LdF = false;
		const _returnValuecTu6xMQ = undefined;
		const _arrayValuezizYeZm = () => { return _returnValuecTu6xMQ };
		const _arrayValuewWt8n5C = null;
		const _arrayValueLi80xfL = 4.458202544363072;
		const _helperSm0qFuU = [_arrayValuezizYeZm, _arrayValuewWt8n5C, _arrayValueLi80xfL]
		const _returnValueQ502YgN = await _HelphC3NKu3.longestSubcommandTermLength(_cmdeXn9LdF, _helperSm0qFuU)
		const _cmdU3xn4Xf = false;
		const _returnValuebjLrc9 = -7.428016202135353;
		const _longestOptionTermLengthjpfOy2D = () => { return _returnValuebjLrc9 };
		const _longestSubcommandTermLengthGNIW0AR = null;
		const _longestArgumentTermLengthx7j6ShS = undefined;
		const _helperIb86YJs = {
			"longestOptionTermLength": _longestOptionTermLengthjpfOy2D,
		"longestSubcommandTermLength": _longestSubcommandTermLengthGNIW0AR,
		"longestArgumentTermLength": _longestArgumentTermLengthx7j6ShS
	}
		const _returnValueH9zNYEf = await _HelphC3NKu3.padWidth(_cmdU3xn4Xf, _helperIb86YJs)
	});

	it('test for Help', async () => {
		const _Helph4HPJT = new Help()
		const _arrayValuewLCvu7Q = true;
		const _arrayValues3VeNRy = undefined;
		const _arrayValueMCeHWrA = [_arrayValuewLCvu7Q, _arrayValues3VeNRy]
		const _returnValueJfk2KsO = [_arrayValueMCeHWrA]
		const _descriptionL3dZH7D = () => { return _returnValueJfk2KsO };
		const _cmdLoWEglJ = {
			"description": _descriptionL3dZH7D
	}
		const _returnValueGilmC9Z = await _Helph4HPJT.subcommandDescription(_cmdLoWEglJ)
		const _cmdRHJN6QE = false;
		const _returnValueaEK7g91 = {
		
	}
		const _helperpgRNgiS = () => { return _returnValueaEK7g91 };
		const _returnValueaYXJC4S = await _Helph4HPJT.longestSubcommandTermLength(_cmdRHJN6QE, _helperpgRNgiS)
		const _cmdIzJteAr = undefined;
		const _helperTKFgGT2 = new Help()
		const _arrayValue8sXL0M = undefined;
		const _cmdyyOwtq6 = [_arrayValue8sXL0M]
		const _returnValueeOZXWl4 = await _helperTKFgGT2.subcommandDescription(_cmdyyOwtq6)
		const _returnValuePxsx3sJ = false;
		const _flagsnIkRlRX = () => { return _returnValuePxsx3sJ };
		const _descriptionaMOB5sT = true;
		const _cmdfqI3Wf8 = new Option(_flagsnIkRlRX, _descriptionaMOB5sT)
		const _valueOTWEr5o = -3.0425230894169815;
		const _previousl5p02X1 = []
		const _returnValueYtc0tcq = await _cmdfqI3Wf8._concatValue(_valueOTWEr5o, _previousl5p02X1)
		const _valueRMcl6Tb = undefined;
		const _descriptionrgMwmb = undefined;
		const _returnValuebBfuycg = await _cmdfqI3Wf8.default(_valueRMcl6Tb, _descriptionrgMwmb)
		const _returnValueuUiREMk = await _helperTKFgGT2.commandDescription(_cmdfqI3Wf8)
		const _returnValue3I7yOK = {
		
	}
		const _argumentyiV5lA1 = () => { return _returnValue3I7yOK };
		const _returnValueRrkElzV = await _helperTKFgGT2.argumentTerm(_argumentyiV5lA1)
		const _arrayValueHjlDIPn = -0.2383260675137464;
		const _arrayValuewIELjN6 = true;
		const _arrayValueefac2rE = 8.304370803746291;
		const _arrayValueA05Jnx = false;
		const _flagsshv4MtC = [_arrayValueHjlDIPn, _arrayValuewIELjN6, _arrayValueefac2rE, _arrayValueA05Jnx]
		const _descriptionPV98SF1 = {
		
	}
		const _cmdtW7NFOx = new Option(_flagsshv4MtC, _descriptionPV98SF1)
		const _returnValueHKeS4l5 = await _cmdtW7NFOx.attributeName()
		const _valuewqV4zOn = null;
		const _previousMFjXZV9 = []
		const _returnValueCDYWRXG = await _cmdtW7NFOx._concatValue(_valuewqV4zOn, _previousMFjXZV9)
		const _returnValueFXSBkfi = await _helperTKFgGT2.subcommandDescription(_cmdtW7NFOx)
		const _returnValueh8a4uGV = await _Helph4HPJT.longestArgumentTermLength(_cmdIzJteAr, _helperTKFgGT2)
		const _argChoicesHqGoeo9 = {
		
	}
		const _defaultValueGbSKYjw = undefined;
		const _defaultValueDescriptionCaf9bGS = "TGXdBIZ7mNClZ51MvGujUgC";
		const _descriptionhYrE9EJ = undefined;
		const _argumentbO848cb = {
			"argChoices": _argChoicesHqGoeo9,
		"defaultValue": _defaultValueGbSKYjw,
		"defaultValueDescription": _defaultValueDescriptionCaf9bGS,
		"description": _descriptionhYrE9EJ
	}
		const _returnValueJPBrJJ9 = await _Helph4HPJT.argumentDescription(_argumentbO848cb)
	});

	it('test for Help', async () => {
		const _HelpXvW9ADV = new Help()
		const _arrayValuexH6oCW9 = undefined;
		const _nameGBMMsFW = [_arrayValuexH6oCW9]
		const _descriptionpPJ7Ch = {
		
	}
		const _cmdbqeunRR = new Argument(_nameGBMMsFW, _descriptionpPJ7Ch)
		const _returnValueSBPX1sd = await _cmdbqeunRR.argRequired()
		const _returnValueG2ENMbN = await _cmdbqeunRR.name()
		const _returnValueroqHdcN = false;
		const _includesaaSJqus = () => { return _returnValueroqHdcN };
		const _arrayValuey73Q4DK = 7.318324604818219;
		const _arrayValueXTdIJXJ = [_arrayValuey73Q4DK]
		const _returnValuezgoNxPl = [_arrayValueXTdIJXJ]
		const _arrayValueoHhN0np = () => { return _returnValuezgoNxPl };
		const _returnValueOQOfWO7 = [_arrayValueoHhN0np]
		const _joinHYWx8XJ = () => { return _returnValueOQOfWO7 };
		const _valuesnn3Jzsi = {
			"includes": _includesaaSJqus,
		"join": _joinHYWx8XJ
	}
		const _returnValuezIybtJq = await _cmdbqeunRR.choices(_valuesnn3Jzsi)
		const _returnValuesL3ncC = true;
		const _includesax428zn = () => { return _returnValuesL3ncC };
		const _returnValuevHz13jB = null;
		const _joinSSze0Ul = () => { return _returnValuevHz13jB };
		const _valueshYUNSpJ = {
			"includes": _includesax428zn,
		"join": _joinSSze0Ul
	}
		const _returnValueKq2Y6eM = await _cmdbqeunRR.choices(_valueshYUNSpJ)
		const _returnValuevtgdTbE = await _cmdbqeunRR.name()
		const _returnValuezOYv8GQ = await _HelpXvW9ADV.commandDescription(_cmdbqeunRR)
		const _nameEd9XIwf = undefined;
		const _cmdT7Ho1U0 = new Command(_nameEd9XIwf)
		const _keyLCFTKC = null;
		const _returnValueec86erR = await _cmdT7Ho1U0.getOptionValueSource(_keyLCFTKC)
		const _returnValueUpd3zZ = await _HelpXvW9ADV.commandUsage(_cmdT7Ho1U0)
		const _cmdO0YcDPE = "PrCL7a75WREgr2J8bOSnYpSHVGeQO4PAk2SoB2ria9skYnLvc5awcd1Exc5";
		const _arrayValuelT95VLL = {
		
	}
		const _arrayValueyz8Kbbr = -4.56890767065482;
		const _returnValueJvxNFAb = [_arrayValuelT95VLL, _arrayValueyz8Kbbr]
		const _visibleArgumentsyBQXkG = () => { return _returnValueJvxNFAb };
		const _returnValuea0DSyQ = true;
		const _argumentTermgPDfIQG = () => { return _returnValuea0DSyQ };
		const _helperZhap0T = {
			"visibleArguments": _visibleArgumentsyBQXkG,
		"argumentTerm": _argumentTermgPDfIQG
	}
		const _returnValueoXmwao = await _HelpXvW9ADV.longestArgumentTermLength(_cmdO0YcDPE, _helperZhap0T)
	});

	it('test for Help', async () => {
		const _HelpUNGXJN = new Help()
		const _optionEJAFDZ = "zNKO3sqUZa88SkH4bPL2LHY0dDLWggzQA2csT5iJTTEXh7fTZ06beJrnlk8Ihp43MmcgurMpWmBNX38nUnM7HfDJwJKw";
		const _returnValuea1GBg8D = await _HelpUNGXJN.optionDescription(_optionEJAFDZ)
	});

	it('test for Help', async () => {
		const _HelpdmAO8eO = new Help()
		const _returnValueF2Qu3gk = true;
		const _namedyy6MOr = () => { return _returnValueF2Qu3gk };
		const _argumentT5C1jKx = {
			"name": _namedyy6MOr
	}
		const _returnValuefTdC9Q = await _HelpdmAO8eO.argumentTerm(_argumentT5C1jKx)
		const _cmdMlDdC17 = null;
		const _returnValuekqHHVQg = await _HelpdmAO8eO.commandUsage(_cmdMlDdC17)
		const _cmdTWuEhKH = undefined;
		const _returnValuevndgDIj = -1.5065082925179496;
		const _visibleArgumentsDns1cXm = () => { return _returnValuevndgDIj };
		const _returnValue4YeRON = undefined;
		const _argumentTermUnqHJVn = () => { return _returnValue4YeRON };
		const _helperf2QVOk0 = {
			"visibleArguments": _visibleArgumentsDns1cXm,
		"argumentTerm": _argumentTermUnqHJVn
	}
		const _returnValueb1rFqW2 = await _HelpdmAO8eO.longestArgumentTermLength(_cmdTWuEhKH, _helperf2QVOk0)
		const _returnValueXzQTFAl = false;
		const _optionoo6rW92 = () => { return _returnValueXzQTFAl };
		const _returnValueKiqPSsu = await _HelpdmAO8eO.optionTerm(_optionoo6rW92)
	});

	it('test for Help', async () => {
		const _HelpOxkx8CE = new Help()
		const __nameD6ebzkJ = 5.2976142272511595;
		const __aliasesmNkv0gT = {
		
	}
		const _parentr6sqX4T = {
		
	}
		const _returnValueH555AdE = "wkekB7g1KEhrD2HqQ1zl3stp1UZ2D496n9Aa";
		const _usageLaj9YE3 = () => { return _returnValueH555AdE };
		const _cmdCO14b2Y = {
			"_name": __nameD6ebzkJ,
		"_aliases": __aliasesmNkv0gT,
		"parent": _parentr6sqX4T,
		"usage": _usageLaj9YE3
	}
		const _returnValueNg77AzM = await _HelpOxkx8CE.commandUsage(_cmdCO14b2Y)
		const _arrayValueits6vCM = false;
		const _arrayValueLckiTWw = null;
		const _argumentcLHkfe = [_arrayValueits6vCM, _arrayValueLckiTWw]
		const _returnValueLRqCnqd = await _HelpOxkx8CE.argumentDescription(_argumentcLHkfe)
		const _arrayValueyuR11xp = undefined;
		const _arrayValueABbnn5q = false;
		const _arrayValuebRGxL8 = undefined;
		const _returnValuekG9UilN = null;
		const _arrayValueaUcnDhe = () => { return _returnValuekG9UilN };
		const _arrayValueJlinnAE = [_arrayValueyuR11xp, _arrayValueABbnn5q, _arrayValuebRGxL8, _arrayValueaUcnDhe]
		const _arrayValueMIj49SE = {
		
	}
		const _arrayValueoHE3JgN = 4.940704015046473;
		const _optionFwJvqS = [_arrayValueJlinnAE, _arrayValueMIj49SE, _arrayValueoHE3JgN]
		const _returnValueJgn8cde = await _HelpOxkx8CE.optionDescription(_optionFwJvqS)
		const _cmdEICM20X = 8.857507446106592;
		const _arrayValueVBPqf3c = "JYzFvHl23DPCa0Uq6NQDBDPBlzOiBgpzrjKU4yA21deJ6";
		const _arrayValueQmo7Duz = undefined;
		const _returnValueeYB1aWN = [_arrayValueVBPqf3c, _arrayValueQmo7Duz]
		const _visibleOptionsD8ajZma = () => { return _returnValueeYB1aWN };
		const _returnValuePZZRt0X = {
		
	}
		const _optionTermUzfGkki = () => { return _returnValuePZZRt0X };
		const _helperzEV4VV6 = {
			"visibleOptions": _visibleOptionsD8ajZma,
		"optionTerm": _optionTermUzfGkki
	}
		const _returnValuel5MJAsO = await _HelpOxkx8CE.longestOptionTermLength(_cmdEICM20X, _helperzEV4VV6)
	});

	it('test for Help', async () => {
		const _HelpMyzqvgl = new Help()
		const _cmdFfkvVAv = "IK1pcfIr9sgOl4pFRUiaHs6eTZyr2WlOS7KYvhWWMXMzz3Cp5FsCltrFnweLb9HyS6Cs7QU";
		const _returnValue6hjxqq = []
		const _visibleOptionsaX9tzhY = () => { return _returnValue6hjxqq };
		const _returnValueiZTksTi = "9hiXPMqQQtO17KzfOuq2uqXjVw";
		const _optionTermeqWDa3z = () => { return _returnValueiZTksTi };
		const _helperZESzmym = {
			"visibleOptions": _visibleOptionsaX9tzhY,
		"optionTerm": _optionTermeqWDa3z
	}
		const _returnValueyRtVfI = await _HelpMyzqvgl.longestOptionTermLength(_cmdFfkvVAv, _helperZESzmym)
		const _flagsnKHVxyL = undefined;
		const _optionJiVf5qE = {
			"flags": _flagsnKHVxyL
	}
		const _returnValueom1ulTB = await _HelpMyzqvgl.optionTerm(_optionJiVf5qE)
	});

	it('test for Help', async () => {
		const _HelpaCYLqnc = new Help()
		const _cmdEyeePrP = "HbN7Oofrr6Gr02oyM35IP";
		const _helperlCNcFEV = "XRRhY8JzbQnkAEoUKoM5lRV";
		const _returnValuenNlvkKL = await _HelpaCYLqnc.longestArgumentTermLength(_cmdEyeePrP, _helperlCNcFEV)
		const __argsDescription1q3j0t = {
		
	}
		const __argsmHmXRjq = {
		
	}
		const _cmdq9Tuil = {
			"_argsDescription": __argsDescription1q3j0t,
		"_args": __argsmHmXRjq
	}
		const _returnValuenVMc2o2 = await _HelpaCYLqnc.visibleArguments(_cmdq9Tuil)
	});

	it('test for Help', async () => {
		const _HelpEiVDiVi = new Help()
		const _strnVcBmY5 = "QQ4AdKKcf9ZONpszUJ6qfupjU1b8UY";
		const _width6bp8As = -2.7316695787226486;
		const _indentvDoe0EQ = 2.2758851956329895;
		const _minColumnWidthRMtFXxg = -0.922903184543939;
		const _returnValueHMoEgz5 = await _HelpEiVDiVi.wrap(_strnVcBmY5, _width6bp8As, _indentvDoe0EQ, _minColumnWidthRMtFXxg)
		const _returnValueTTFYVl0 = 0.4927457635314525;
		const _cmdOXsTWVv = () => { return _returnValueTTFYVl0 };
		const _returnValueqJPgeVs = await _HelpEiVDiVi.subcommandDescription(_cmdOXsTWVv)
		const _nameUaGdCEr = undefined;
		const _cmdDdflWfW = new Command(_nameUaGdCEr)
		const _configurationXryE3hr = undefined;
		const _returnValueuX2Yvu1 = await _cmdDdflWfW.configureOutput(_configurationXryE3hr)
		const _cmdufBOIm = "JS5VVolA1EDngMM1ny5P9zVB3hlmf1FqGL8t71D2ov3egviU1JbgPLJDBJ6iQlUTrilmMM8uIjoE1O7ARI1";
		const _optsjVRAMiY = []
		const _returnValueU6XpjnS = await _cmdDdflWfW.addCommand(_cmdufBOIm, _optsjVRAMiY)
		const _positionQcYsg6z = null;
		const _textHgZtviJ = {
		
	}
		const _returnValueeZmPzQx = await _cmdDdflWfW.addHelpText(_positionQcYsg6z, _textHgZtviJ)
		const _combineA61EErm = false;
		const _returnValueBlUJqXa = await _cmdDdflWfW.combineFlagAndOptionalValue(_combineA61EErm)
		const _returnValueLFdzpKd = await _HelpEiVDiVi.subcommandTerm(_cmdDdflWfW)
	});

	it('test for Help', async () => {
		const _Helpjtc3EeU = new Help()
		const _arrayValueIJI0y2z = {
		
	}
		const _optionOcgTGdf = [_arrayValueIJI0y2z]
		const _returnValueSfa4fd2 = await _Helpjtc3EeU.optionTerm(_optionOcgTGdf)
		const _argChoicesPnZTidV = {
		
	}
		const _arrayValueB5XJwNN = null;
		const _arrayValuekcpPIsH = false;
		const _negateywefbcr = [_arrayValueB5XJwNN, _arrayValuekcpPIsH]
		const _defaultValue1EUmUg = undefined;
		const _defaultValueDescriptionHmPtwf = {
		
	}
		const _envVareScibLt = undefined;
		const _descriptionlzVCvqs = undefined;
		const _optionCQERdlm = {
			"argChoices": _argChoicesPnZTidV,
		"negate": _negateywefbcr,
		"defaultValue": _defaultValue1EUmUg,
		"defaultValueDescription": _defaultValueDescriptionHmPtwf,
		"envVar": _envVareScibLt,
		"description": _descriptionlzVCvqs
	}
		const _returnValuey4TPnf = await _Helpjtc3EeU.optionDescription(_optionCQERdlm)
		const _returnValuew3RWSV7 = "pw7r2q44W5sDF";
		const _cmdt04skrJ = () => { return _returnValuew3RWSV7 };
		const _returnValueXdOnyzw = await _Helpjtc3EeU.visibleArguments(_cmdt04skrJ)
		const _cmdaQr1BZC = undefined;
		const _helperMsK1yUL = "7iM5NJigzQJY0NuB9U5uKq5UUoSiB7SFzSl2MV0vfdg9c9qMkcBYqQgWB7C73bd0PcqpF1PQrAmaAScbbTUJfGPdGAPr7E8jKeI";
		const _returnValue4ASzVo = await _Helpjtc3EeU.longestOptionTermLength(_cmdaQr1BZC, _helperMsK1yUL)
	});

	it('test for Help', async () => {
		const _HelpbkrJLI3 = new Help()
		const _returnValueQ4beAAr = -5.7615724884430985;
		const _matchn7ZxT4b = () => { return _returnValueQ4beAAr };
		const _returnValuehLNLeDZ = []
		const _substr8RDe9Q = () => { return _returnValuehLNLeDZ };
		const _strZOlKif = {
			"match": _matchn7ZxT4b,
		"substr": _substr8RDe9Q
	}
		const _widthLEI7tXh = 2.8985396105280277;
		const _arrayValueAfhInqz = undefined;
		const _arrayValueYQdyffj = undefined;
		const _arrayValued3kc9cH = [_arrayValueAfhInqz, _arrayValueYQdyffj]
		const _arrayValueFQKYkga = false;
		const _indenttPMFQDN = [_arrayValued3kc9cH, _arrayValueFQKYkga]
		const _minColumnWidthIOFXcfv = -0.8157345884313152;
		const _returnValuecmzjoL5 = await _HelpbkrJLI3.wrap(_strZOlKif, _widthLEI7tXh, _indenttPMFQDN, _minColumnWidthIOFXcfv)
	});

	it('test for Help', async () => {
		const _HelpyLlqtG3 = new Help()
		const _cmdcMljtoU = true;
		const _returnValueyZaOhs = await _HelpyLlqtG3.subcommandTerm(_cmdcMljtoU)
		const _arrayValuevctlIw = "NGUjS";
		const _matchDoeb3pL = [_arrayValuevctlIw]
		const _returnValuebCne6qZ = null;
		const _substrIdjwWrq = () => { return _returnValuebCne6qZ };
		const _strIpcmQm = {
			"match": _matchDoeb3pL,
		"substr": _substrIdjwWrq
	}
		const _widthtONmZIp = -2.1165033165863223;
		const _indentY3YRHNj = -4.271190407257563;
		const _minColumnWidthyzv5H0 = 3.6863040197120522;
		const _returnValueFBv9nAi = await _HelpyLlqtG3.wrap(_strIpcmQm, _widthtONmZIp, _indentY3YRHNj, _minColumnWidthyzv5H0)
		const _cmdh5qDhOm = "LGtUSIGTcqbBSEwEiIPKDlCTiwadM9VaLdPxJ7uPmUNKAYYRpHwTSmzOStx";
		const _returnValueH0nx4GJ = await _HelpyLlqtG3.visibleCommands(_cmdh5qDhOm)
	});

	it('test for Help', async () => {
		const _HelpfxSuJBE = new Help()
		const _cmdaRzAjIt = undefined;
		const _helperF5OR4kv = new Help()
		const _arrayValueJtvdz2a = undefined;
		const _cmdUNNypXl = [_arrayValueJtvdz2a]
		const _returnValueROC3Zgc = "FfRzzU7CqIwvHIeUGX3PlT5bfQe83F8zKDQZXmonDNjiAxEXaXIaCw47yqEFTTBHykunBt79tkoHg3JF1R4bbWH7fnJSl";
		const _longestOptionTermLengthIfEuEx4 = () => { return _returnValueROC3Zgc };
		const _returnValuea6Ya4f7 = undefined;
		const _longestSubcommandTermLengthVCRmkxL = () => { return _returnValuea6Ya4f7 };
		const _returnValueT4JUlBq = undefined;
		const _longestArgumentTermLengthB1tcmIQ = () => { return _returnValueT4JUlBq };
		const _helpervRLwFvn = {
			"longestOptionTermLength": _longestOptionTermLengthIfEuEx4,
		"longestSubcommandTermLength": _longestSubcommandTermLengthVCRmkxL,
		"longestArgumentTermLength": _longestArgumentTermLengthB1tcmIQ
	}
		const _returnValueooEoX4c = await _helperF5OR4kv.padWidth(_cmdUNNypXl, _helpervRLwFvn)
		const _returnValueEifTPxu = false;
		const _cmdxuocNPs = () => { return _returnValueEifTPxu };
		const _returnValue2DbbgO = await _helperF5OR4kv.commandDescription(_cmdxuocNPs)
		const _argChoiceswWkUsCn = {
		
	}
		const _negateFFyrEye = "MtNTEoqLYP5m5kNMmFnzoLAv2KTQjvV2adKqqUdn7s1Bf0pmN7FOTc7jwvTVTqiRkwkhTVEBGjcPdRxmMJ1ND43yiiKVO98";
		const _defaultValueCIFabeb = undefined;
		const _defaultValueDescriptionfmyhztV = true;
		const _envVarIS1ANqH = undefined;
		const _descriptionYdzDGon = null;
		const _optionkahURk = {
			"argChoices": _argChoiceswWkUsCn,
		"negate": _negateFFyrEye,
		"defaultValue": _defaultValueCIFabeb,
		"defaultValueDescription": _defaultValueDescriptionfmyhztV,
		"envVar": _envVarIS1ANqH,
		"description": _descriptionYdzDGon
	}
		const _returnValueBNmISM = await _helperF5OR4kv.optionDescription(_optionkahURk)
		const _returnValueVF4MGf = await _HelpfxSuJBE.formatHelp(_cmdaRzAjIt, _helperF5OR4kv)
		const _cmdNGpgK2K = null;
		const _helperD1sAfde = new Help()
		const _optionH2rV5dU = 7.421667445867929;
		const _returnValuekSvmXAq = await _helperD1sAfde.optionDescription(_optionH2rV5dU)
		const _cmdTM6dWAg = null;
		const _returnValueQ1Shoqr = await _helperD1sAfde.commandDescription(_cmdTM6dWAg)
		const _returnValuenckNDW6 = await _HelpfxSuJBE.longestSubcommandTermLength(_cmdNGpgK2K, _helperD1sAfde)
	});

	it('test for Help', async () => {
		const _HelpeZ8dc9o = new Help()
		const __argsDescriptionFbNybXi = {
		
	}
		const __argsGeuWZw8 = {
		
	}
		const _cmdsLiO3Tp = {
			"_argsDescription": __argsDescriptionFbNybXi,
		"_args": __argsGeuWZw8
	}
		const _returnValueMg4pU8f = await _HelpeZ8dc9o.visibleArguments(_cmdsLiO3Tp)
		const _cmdGNAnF4X = "HdPkFFNM39rYFOrjs9iG6elp3arTjpoU9I6R88uipdgMyWr6AhnXDVi5GXBUBgxTUzYWyVwj";
		const _returnValueRwUxqmj = await _HelpeZ8dc9o.visibleArguments(_cmdGNAnF4X)
		const _cmdDM9fO9P = 8.757409433402653;
		const _helperkyfRxj1 = new Help()
		const _arrayValueBt9MfhU = -2.8125230908344303;
		const _arrayValueIKCubvO = null;
		const _arrayValueUJ9K7au = "T7F4UifjaLFXjwbG2BWxgsk7TfFriOxkYT7IbXfzVQSlj";
		const _arrayValueEmLsWrK = [_arrayValueBt9MfhU, _arrayValueIKCubvO, _arrayValueUJ9K7au]
		const _arrayValuepRN9qRC = "EmTBdmQ";
		const _arrayValueEayC4xF = false;
		const _namenPxSKw0 = [_arrayValueEmLsWrK, _arrayValuepRN9qRC, _arrayValueEayC4xF]
		const _descriptionj98RRLa = null;
		const _cmdV5Qvavr = new Argument(_namenPxSKw0, _descriptionj98RRLa)
		const _arrayValuecU8GYjn = true;
		const _arrayValueixB2tdc = undefined;
		const _arrayValuehsKkN7 = "jS07XFFx5VeGICol3i0eOXYjY9cfdH2NBJzWLtbTCuo472IbGnV";
		const _arrayValueNS7ff8c = {
		
	}
		const _valueuux1m3c = [_arrayValuecU8GYjn, _arrayValueixB2tdc, _arrayValuehsKkN7, _arrayValueNS7ff8c]
		const _previousPoYHDLn = "XDn74IQmISxcRWrEhllyCPtTpaybzxBzpIvK3GMeuThktV5AKgN1zoDU8KUHVkC1gxFY9";
		const _returnValueLT6AQ5D = await _cmdV5Qvavr._concatValue(_valueuux1m3c, _previousPoYHDLn)
		const _returnValuecWZMIu3 = await _cmdV5Qvavr.argOptional()
		const _fncA4D7HD = undefined;
		const _returnValueQ4y0dZm = await _cmdV5Qvavr.argParser(_fncA4D7HD)
		const _returnValueLkQMS8q = await _helperkyfRxj1.commandUsage(_cmdV5Qvavr)
		const _returnValuebcNTdM = {
		
	}
		const _cmdU1CgpxN = () => { return _returnValuebcNTdM };
		const _returnValueb52Ic5y = await _helperkyfRxj1.visibleArguments(_cmdU1CgpxN)
		const _cmdbEp5mzE = -6.987876572729312;
		const _helperAkBZk6P = "Gs4bmyB2v1grsgjTLTKqTTf95oTTbcrN1HhzKS";
		const _returnValuegTT9KD = await _helperkyfRxj1.longestSubcommandTermLength(_cmdbEp5mzE, _helperAkBZk6P)
		const _arrayValueCX3fcCE = null;
		const _optionuyU33yy = [_arrayValueCX3fcCE]
		const _returnValueNpht61I = await _helperkyfRxj1.optionDescription(_optionuyU33yy)
		const _returnValuesuYBvf = await _HelpeZ8dc9o.padWidth(_cmdDM9fO9P, _helperkyfRxj1)
		const _optionX8DvM3 = "c7kBxCP49tTVXVBTiYN";
		const _returnValueQ60byhE = await _HelpeZ8dc9o.optionTerm(_optionX8DvM3)
	});

	it('test for Help', async () => {
		const _HelpzUwiDwi = new Help()
		const _cmdtU9Eea = undefined;
		const _helperWOp3Cy7 = new Help()
		const _cmdMqbw7fM = true;
		const _helperqZnaAU = new Help()
		const _returnValuemJHq1wS = {
		
	}
		const _arrayValuekUbTG2h = () => { return _returnValuemJHq1wS };
		const _returnValueT3Kup5N = null;
		const _arrayValueoe1ah4o = () => { return _returnValueT3Kup5N };
		const _arrayValuemcI9j7f = {
		
	}
		const _namekI8W5gn = [_arrayValuekUbTG2h, _arrayValueoe1ah4o, _arrayValuemcI9j7f]
		const _descriptionxaiSCED = "Fzllk9v1MQm5T2KDrqjSb1OT8OsvEjtNx8i4mESLp90ydH8aAFugc1BIkYP05lUa4pJG9gW5EeHDEQtgMp7ZCg5";
		const _optionmMUaRge = new Argument(_namekI8W5gn, _descriptionxaiSCED)
		const _fnhSjn4w = undefined;
		const _returnValuesBMXu1 = await _optionmMUaRge.argParser(_fnhSjn4w)
		const _returnValueMwiVKk = true;
		const _includesmLQCl7n = () => { return _returnValueMwiVKk };
		const _joinbM6jWt7 = true;
		const _valuesW4N2ByX = {
			"includes": _includesmLQCl7n,
		"join": _joinbM6jWt7
	}
		const _returnValueFxBQGiD = await _optionmMUaRge.choices(_valuesW4N2ByX)
		const _fnqQiA2jN = undefined;
		const _returnValuemCklFeK = await _optionmMUaRge.argParser(_fnqQiA2jN)
		const _valueAkv3VdQ = -1.0514506193933606;
		const _previousX2dOMox = null;
		const _returnValueNJVWPbD = await _optionmMUaRge._concatValue(_valueAkv3VdQ, _previousX2dOMox)
		const _valuesDZJyrco = undefined;
		const _returnValueIl8Zak5 = await _optionmMUaRge.choices(_valuesDZJyrco)
		const _returnValuewF4isor = await _helperqZnaAU.optionDescription(_optionmMUaRge)
		const _cmdL9fnmhm = undefined;
		const _helperzhWYC2m = new Help()
		const _returnValueBnPGF2 = null;
		const _cmdP49Andu = () => { return _returnValueBnPGF2 };
		const _returnValuezIzczX1 = await _helperzhWYC2m.visibleOptions(_cmdP49Andu)
		const _arrayValueWo7fOqo = undefined;
		const _returnValueqeYRc9I = undefined;
		const _returnValueuEObwVd = () => { return _returnValueqeYRc9I };
		const _arrayValueJELV5XS = () => { return _returnValueuEObwVd };
		const _arrayValueGPyMZvn = "nkcC3TnrgRiyadgYapfmjX7PfAzsHsJvbMsGBD604FiYyrudIDBMFxdChSJll9jJDSaRjqqkAOTxMfnwkOkSE";
		const _arrayValueYKfhPey = null;
		const _cmd8S4Krh = [_arrayValueWo7fOqo, _arrayValueJELV5XS, _arrayValueGPyMZvn, _arrayValueYKfhPey]
		const _returnValueL8e3TUL = undefined;
		const _longestOptionTermLengthlI5Yy3 = () => { return _returnValueL8e3TUL };
		const _returnValuexnVEnQm = null;
		const _longestSubcommandTermLengthFgL7ol9 = () => { return _returnValuexnVEnQm };
		const _arrayValueGBgPrlc = undefined;
		const _arrayValuepLCoMx = -4.949861621121641;
		const _returnValuetRTWEBL = [_arrayValueGBgPrlc, _arrayValuepLCoMx]
		const _longestArgumentTermLengthB1bsGxJ = () => { return _returnValuetRTWEBL };
		const _helperDzdwQbs = {
			"longestOptionTermLength": _longestOptionTermLengthlI5Yy3,
		"longestSubcommandTermLength": _longestSubcommandTermLengthFgL7ol9,
		"longestArgumentTermLength": _longestArgumentTermLengthB1bsGxJ
	}
		const _returnValuexJFI1W = await _helperzhWYC2m.padWidth(_cmd8S4Krh, _helperDzdwQbs)
		const _cmdrHxDroH = undefined;
		const _returnValueS2DcTGt = await _helperzhWYC2m.visibleArguments(_cmdrHxDroH)
		const _returnValueI4XZC5I = await _helperqZnaAU.formatHelp(_cmdL9fnmhm, _helperzhWYC2m)
		const _cmdqMc02yl = "3fbQ6oMhvPszD9Gxlod7VKhtk2Kc4URXuf8RsS7wCxy0y743";
		const _returnValueQ37m8Sy = await _helperqZnaAU.visibleArguments(_cmdqMc02yl)
		const _returnValueijiyUD1 = await _helperWOp3Cy7.padWidth(_cmdMqbw7fM, _helperqZnaAU)
		const _arrayValue1Z8GpA = 5.409773832302346;
		const _cmdSZk7rgD = [_arrayValue1Z8GpA]
		const _returnValuev9rUSWh = await _helperWOp3Cy7.subcommandDescription(_cmdSZk7rgD)
		const _returnValueTSymNUI = await _HelpzUwiDwi.longestOptionTermLength(_cmdtU9Eea, _helperWOp3Cy7)
		const __nameapRbyQ = 1.0559552539280848;
		const __aliasest85CvPs = {
		
	}
		const _parentAo5zBjy = {
		
	}
		const _returnValuexLwM2M = undefined;
		const _usageM48imir = () => { return _returnValuexLwM2M };
		const _cmdG48Wwrh = {
			"_name": __nameapRbyQ,
		"_aliases": __aliasest85CvPs,
		"parent": _parentAo5zBjy,
		"usage": _usageM48imir
	}
		const _returnValuevWAAxSE = await _HelpzUwiDwi.commandUsage(_cmdG48Wwrh)
		const _arrayValueMRBVYoJ = null;
		const _optionuCjNFh0 = [_arrayValueMRBVYoJ]
		const _returnValuefR3KGex = await _HelpzUwiDwi.optionTerm(_optionuCjNFh0)
		const _cmdEP34hsa = 3.043036504441803;
		const _helperIacoosV = "41myAgucyYfxE0O1otfz5Sjoa7GxSOwTRWsbkm";
		const _returnValuebjANTRH = await _HelpzUwiDwi.padWidth(_cmdEP34hsa, _helperIacoosV)
		const _returnValuevx8uVqc = {
		
	}
		const _returnValuejY5u4cr = () => { return _returnValuevx8uVqc };
		const _cmdqKZczQi = () => { return _returnValuejY5u4cr };
		const _returnValuei8zO71U = await _HelpzUwiDwi.commandUsage(_cmdqKZczQi)
	});

	it('test for Help', async () => {
		const _HelptUTUG0n = new Help()
		const _argumentGw4dqDV = true;
		const _returnValueUan0sUW = await _HelptUTUG0n.argumentDescription(_argumentGw4dqDV)
		const _flagsVcMoSbC = "8HeWQMun0Ytf5NQh0pdohL5mXSodoQAD8dNzBeyqYqaHkkNeMVZOGQYnxObIiYocHRIDzARt";
		const _arrayValueCnElcnt = 6.186706022681246;
		const _arrayValuelsayYP = true;
		const _descriptionbrKyeZF = [_arrayValueCnElcnt, _arrayValuelsayYP]
		const _optionGhsk9YF = new Option(_flagsVcMoSbC, _descriptionbrKyeZF)
		const _returnValueaMgXTa8 = "2BxgsNmTMasII8hkPKVWS5nh7MREICcs7la2MX3tzVJPCM1";
		const _valuesGbLISE = () => { return _returnValueaMgXTa8 };
		const _returnValuesKT5YPr = await _optionGhsk9YF.choices(_valuesGbLISE)
		const _valuesFPkgslQ = "00VS5KXVucqVcc7aPBEFTym9Grh8Jc9uotoFHBpbpL7yx3oI70iBbsFUSazrWcPNVtgenetzfUW";
		const _returnValuevMyfDq = await _optionGhsk9YF.choices(_valuesFPkgslQ)
		const _nameMPe4G2J = undefined;
		const _returnValueOKuDsR = await _optionGhsk9YF.env(_nameMPe4G2J)
		const _returnValueozYhPZW = await _optionGhsk9YF.name()
		const _returnValueUIkScIt = await _HelptUTUG0n.optionDescription(_optionGhsk9YF)
		const _cmdhTQhqmL = null;
		const _sortSubcommandsDU5WdwP = "YdOYuQHj1SlQZVz0xH9yAybJqJ9";
		const _returnValuegZayoGP = undefined;
		const _subcommandTermASaktr2 = () => { return _returnValuegZayoGP };
		const _helperLqWMw45 = {
			"sortSubcommands": _sortSubcommandsDU5WdwP,
		"subcommandTerm": _subcommandTermASaktr2
	}
		const _returnValuejXPzfDR = await _HelptUTUG0n.formatHelp(_cmdhTQhqmL, _helperLqWMw45)
		const _returnValueUbsgzQU = {
		
	}
		const _cmdTHXzAK = () => { return _returnValueUbsgzQU };
		const _returnValuesE1QkVm = 7.562072471574194;
		const _visibleArgumentsZVEQZME = () => { return _returnValuesE1QkVm };
		const _returnValuejMt7Llu = -9.646191790437316;
		const _argumentTermy8lcwC9 = () => { return _returnValuejMt7Llu };
		const _helperjRzrHE5 = {
			"visibleArguments": _visibleArgumentsZVEQZME,
		"argumentTerm": _argumentTermy8lcwC9
	}
		const _returnValueeD6PyKe = await _HelptUTUG0n.longestArgumentTermLength(_cmdTHXzAK, _helperjRzrHE5)
	});

	it('test for Help', async () => {
		const _HelpPoCqlA3 = new Help()
		const _returnValueIwmGPvH = "pNKRooyU4XM56f65TuYaTXNhHkZ1oXDFm4c5A8RcVdmLez6movJLLoMZOXitWuszqbEI3DXnhWsI9";
		const _descriptionphVaTOQ = () => { return _returnValueIwmGPvH };
		const _cmdHuJhBM = {
			"description": _descriptionphVaTOQ
	}
		const _returnValueS1J2tCr = await _HelpPoCqlA3.commandDescription(_cmdHuJhBM)
		const _argChoiceseuVjLXv = {
		
	}
		const _arrayValueZeGM3DU = true;
		const _negatepZEb1Xg = [_arrayValueZeGM3DU]
		const _defaultValueIbKxKbf = undefined;
		const _defaultValueDescriptionUi96nhR = "Lz3X9gQ0BC9yfU50lXGsMtiazLjusEOdvBx35NHw7N8M";
		const _envVarxPzGlSq = null;
		const _descriptionS4ZpQtC = "tiA7U4S5TAisH979TJDoNsJDpPTT1Qz1lI9cWOA1WNw";
		const _optionIPD2lCs = {
			"argChoices": _argChoiceseuVjLXv,
		"negate": _negatepZEb1Xg,
		"defaultValue": _defaultValueIbKxKbf,
		"defaultValueDescription": _defaultValueDescriptionUi96nhR,
		"envVar": _envVarxPzGlSq,
		"description": _descriptionS4ZpQtC
	}
		const _returnValuete3iEEF = await _HelpPoCqlA3.optionDescription(_optionIPD2lCs)
		const _returnValuegYq3hUa = -8.508867076010693;
		const _optionQ7HtbMx = () => { return _returnValuegYq3hUa };
		const _returnValueMQwQdp2 = await _HelpPoCqlA3.optionTerm(_optionQ7HtbMx)
		const _arrayValueCpvoZfb = undefined;
		const _arrayValueQYodFNp = 5.376658082071193;
		const _arrayValuexEsDq3S = [_arrayValueCpvoZfb, _arrayValueQYodFNp]
		const _arrayValuebVjU9XN = "YpcMNcM1iNiZS6VcQHyFzrNS";
		const _arrayValuewfCB78 = true;
		const _arrayValueXJlhYdK = "wuLjcbPIxg5d4M3aWydHyDmn5mlnMPAUg3";
		const _cmdoaLbbuC = [_arrayValuexEsDq3S, _arrayValuebVjU9XN, _arrayValuewfCB78, _arrayValueXJlhYdK]
		const _helperFQGNSlE = new Help()
		const _returnValueHVmXGZ = null;
		const _arrayValuebnQaPzC = () => { return _returnValueHVmXGZ };
		const _returnValueOSy5ffb = -6.38045513392027;
		const _arrayValueHisnSsB = () => { return _returnValueOSy5ffb };
		const _arrayValueoraZVNm = "vxTF3Ces7kecbITAK641zjqINBn6GMjGmCRyafeGAuiPmLCq1GhFklyIvr";
		const _arrayValueGAnjmrv = undefined;
		const _arrayValueBx2cJj = undefined;
		const _arrayValueXme526g = null;
		const _arrayValueZiSj47 = [_arrayValueBx2cJj, _arrayValueXme526g]
		const _arrayValueDc3nNwv = [_arrayValueoraZVNm, _arrayValueGAnjmrv, _arrayValueZiSj47]
		const _arrayValueLmq4j5c = [_arrayValueHisnSsB, _arrayValueDc3nNwv]
		const _namelRSGLXW = [_arrayValuebnQaPzC, _arrayValueLmq4j5c]
		const _descriptionpcyncWs = 6.659253068581698;
		const _cmdXJojhMX = new Argument(_namelRSGLXW, _descriptionpcyncWs)
		const _valueuWV4TuG = "gEri";
		const _returnValueQ6xYfUo = "lRcwYO4OXjD11lH89sHUTXmOp2Wm6I6riohfUuWXQLwVo3Vx7BWMfv4TFv1CReH9Qcy9yayBimD6JJlDrjbeOn";
		const _concatarkVOPu = () => { return _returnValueQ6xYfUo };
		const _previousoAdWquX = {
			"concat": _concatarkVOPu
	}
		const _returnValueQ3qW7Gy = await _cmdXJojhMX._concatValue(_valueuWV4TuG, _previousoAdWquX)
		const _valuesMkRMcpU = {
		
	}
		const _returnValueqx33oLY = await _cmdXJojhMX.choices(_valuesMkRMcpU)
		const _fnmDSS5lh = undefined;
		const _returnValuejVzTsuG = await _cmdXJojhMX.argParser(_fnmDSS5lh)
		const _returnValuenCneX7j = await _helperFQGNSlE.subcommandTerm(_cmdXJojhMX)
		const _returnValueKkzhqcN = await _HelpPoCqlA3.longestSubcommandTermLength(_cmdoaLbbuC, _helperFQGNSlE)
	});

	it('test for Help', async () => {
		const _HelpweAhjE = new Help()
		const _cmdv08hqSL = undefined;
		const _helperUwsbj6a = new Help()
		const _cmdQXF5hbI = null;
		const _helperXRp8kqL = new Help()
		const _flagsY8nVNMJ = "3hVNOHn7fuC5W6qixiXOeBs9BdiL";
		const _descriptionWyXVLqn = 6.504164960567323;
		const _cmdOf32GQr = new Option(_flagsY8nVNMJ, _descriptionWyXVLqn)
		const _fnynoKub = undefined;
		const _returnValuebopfoyE = await _cmdOf32GQr.argParser(_fnynoKub)
		const _returnValue1YWFvF = await _helperXRp8kqL.commandDescription(_cmdOf32GQr)
		const _arrayValuelP4pMBw = {
		
	}
		const _arrayValueZB0QDWT = null;
		const _arrayValueaPO0Zut = [_arrayValuelP4pMBw, _arrayValueZB0QDWT]
		const _cmdcJIbV9b = [_arrayValueaPO0Zut]
		const _returnValuecyxJZZ = await _helperXRp8kqL.visibleOptions(_cmdcJIbV9b)
		const _name7Jbykp = "c2u3nJY7t7VePBR98fT2PrnzROOK9Jxt7d8DQFdGNArpgEkU5VkMkRFmQrE2xDz66aBxmVpD5lbo";
		const _descriptionfw21uBr = true;
		const _argumentyj2q5s9 = new Argument(_name7Jbykp, _descriptionfw21uBr)
		const _returnValueYT7jAet = await _argumentyj2q5s9.argRequired()
		const _returnValueecft6lI = await _argumentyj2q5s9.argRequired()
		const _returnValuetp3kfCi = await _argumentyj2q5s9.name()
		const _returnValue4N0OVA = false;
		const _valuesjFxeKEE = () => { return _returnValue4N0OVA };
		const _returnValuekLZNCZk = await _argumentyj2q5s9.choices(_valuesjFxeKEE)
		const _returnValueFkBoBXJ = await _helperXRp8kqL.argumentDescription(_argumentyj2q5s9)
		const _argumentcjX4Rfb = undefined;
		const _returnValuekzfNZMt = await _helperXRp8kqL.argumentTerm(_argumentcjX4Rfb)
		const _returnValueeH1OlX1 = await _helperUwsbj6a.padWidth(_cmdQXF5hbI, _helperXRp8kqL)
		const _arrayValueLMJzS6N = 1.0296428306930245;
		const _arrayValueFI7spwI = 5.9581455513510235;
		const _arrayValueKuiSoX6 = null;
		const _arrayValueZIiE1PE = "Ws63ctlXCDc024JYOcxyahiNG0lJwbOpjRk2MGiL9DFKEBB3gap6VwJ4NEfD2CXTbcqECKBMUHeJtKmtuPaV7yRvrnZY5lqUfV";
		const _arrayValuevfE5Gg1 = {
		
	}
		const _arrayValueMYDqWUn = 5.9682559396407555;
		const _arrayValueeJqdlbm = "PZsR9jhkzHG5y5vyLQaAxJVWUsFiCvZw12Z";
		const _arrayValueWz4PTX1 = undefined;
		const _arrayValue5LjYml = null;
		const _arrayValueSD5rVl6 = [_arrayValueWz4PTX1, _arrayValue5LjYml]
		const _arrayValueZzxVWgC = [_arrayValueMYDqWUn, _arrayValueeJqdlbm, _arrayValueSD5rVl6]
		const _arrayValuepf3PBL = [_arrayValuevfE5Gg1, _arrayValueZzxVWgC]
		const _cmdBGEEu3 = [_arrayValueLMJzS6N, _arrayValueFI7spwI, _arrayValueKuiSoX6, _arrayValueZIiE1PE, _arrayValuepf3PBL]
		const _returnValuez1OwHtk = await _helperUwsbj6a.visibleCommands(_cmdBGEEu3)
		const _returnValuepA8rgSB = await _HelpweAhjE.longestSubcommandTermLength(_cmdv08hqSL, _helperUwsbj6a)
		const _returnValuedDQsiNA = null;
		const _cmdpXEZEmv = () => { return _returnValuedDQsiNA };
		const _returnValuerwwWdgA = await _HelpweAhjE.subcommandTerm(_cmdpXEZEmv)
		const _arrayValueHb2Eit2 = 1.551607078668706;
		const _cmdm0u8V4u = [_arrayValueHb2Eit2]
		const _helperMcGDVya = new Help()
		const _returnValueF5gcQSZ = "UcV5g5by8n1x7tSyB2MrdNpyy1DS60vNf7zVWEixMjVvDkszm6MyzjBHj";
		const _cmdZesD75i = () => { return _returnValueF5gcQSZ };
		const _returnValuexsOP1LQ = await _helperMcGDVya.commandDescription(_cmdZesD75i)
		const _cmd2N4Wfe = "xQ2g1JN7jTOO6MTtKF13W";
		const _helperH8UWj1y = new Help()
		const _arrayValue2TJDfp = {
		
	}
		const _arrayValueUJD1lW4 = [_arrayValue2TJDfp]
		const _returnValueRHYaUly = [_arrayValueUJD1lW4]
		const _cmdULSPQHf = () => { return _returnValueRHYaUly };
		const _returnValueCNeApD6 = await _helperH8UWj1y.commandUsage(_cmdULSPQHf)
		const _arrayValueWwFwJB0 = -6.142626686561244;
		const _arrayValueOKHXs29 = "mAoW66DRyrPYC6r6QyIF6kV2DREQ";
		const _arrayValuefBLkdp = true;
		const _arrayValuelNdrdT = false;
		const _arrayValueA4mtbtp = false;
		const _arrayValueghQHM1h = [_arrayValuelNdrdT, _arrayValueA4mtbtp]
		const _cmdfMmePO8 = [_arrayValueWwFwJB0, _arrayValueOKHXs29, _arrayValuefBLkdp, _arrayValueghQHM1h]
		const _returnValuejmqZ9SF = await _helperH8UWj1y.visibleCommands(_cmdfMmePO8)
		const _cmdnnWIZyr = "DPNFxW8sMfwg87fexH9GjsCt4ihRthJOe95yh6K9asMmbHofwqJs7nEGmqbmTG5Nv2ADLs";
		const _arrayValueHTW7CuN = -7.567939488686476;
		const _helperDiuVWW9 = [_arrayValueHTW7CuN]
		const _returnValuePZhwxxM = await _helperH8UWj1y.longestArgumentTermLength(_cmdnnWIZyr, _helperDiuVWW9)
		const _argChoicesXflP96 = {
		
	}
		const _arrayValueRUhyxDh = []
		const _arrayValueVizXm7a = {
		
	}
		const _negateNAbECsl = [_arrayValueRUhyxDh, _arrayValueVizXm7a]
		const _defaultValueqiZF6Kh = undefined;
		const _arrayValuelvDh3Vj = null;
		const _arrayValuedy06P2s = undefined;
		const _arrayValueIg8nBp = {
		
	}
		const _arrayValuehgNw1C = [_arrayValuedy06P2s, _arrayValueIg8nBp]
		const _arrayValuerTW6nD = "EwZcQHjBLGAhavqPa";
		const _defaultValueDescriptionGTsgYuV = [_arrayValuelvDh3Vj, _arrayValuehgNw1C, _arrayValuerTW6nD]
		const _envVarx5j943v = undefined;
		const _descriptionrZZ6uk9 = null;
		const _optionfjQuWzp = {
			"argChoices": _argChoicesXflP96,
		"negate": _negateNAbECsl,
		"defaultValue": _defaultValueqiZF6Kh,
		"defaultValueDescription": _defaultValueDescriptionGTsgYuV,
		"envVar": _envVarx5j943v,
		"description": _descriptionrZZ6uk9
	}
		const _returnValueWOPz4zi = await _helperH8UWj1y.optionDescription(_optionfjQuWzp)
		const _returnValueyx1W5s = await _helperMcGDVya.formatHelp(_cmd2N4Wfe, _helperH8UWj1y)
		const _argument2Oye7q = "kcH74rgxoj168YQtz9MlRJdAh5571qz";
		const _returnValuenaT5QZg = await _helperMcGDVya.argumentDescription(_argument2Oye7q)
		const _arrayValueyUxhnF6 = "nU3OA9swImAxR2ks82n3";
		const _arrayValueuHXYzG7 = "M4qdVsQLINeZJXybiMB8B6agF4Lsat6LQI";
		const _returnValuebPUqvBA = [_arrayValueyUxhnF6, _arrayValueuHXYzG7]
		const _descriptioncuVp0dM = () => { return _returnValuebPUqvBA };
		const _cmdGbtbkpl = {
			"description": _descriptioncuVp0dM
	}
		const _returnValuevUEYyOI = await _helperMcGDVya.commandDescription(_cmdGbtbkpl)
		const _flagsTOJzDtt = "nz2KhBoCkth5jpeIzb7jqo94vfP2ojinf9vdtTczQfig5m4udd6Lqu6Na1";
		const _descriptionWRzRemy = -1.050054287266903;
		const _cmdTTXLqvu = new Option(_flagsTOJzDtt, _descriptionWRzRemy)
		const _valueLPEcnG6 = -3.108646739490802;
		const _returnValuewNltbUb = null;
		const _previousopjwtb4 = () => { return _returnValuewNltbUb };
		const _returnValueshLU5hB = await _cmdTTXLqvu._concatValue(_valueLPEcnG6, _previousopjwtb4)
		const _fnnrPFJXV = undefined;
		const _returnValue0qBSEo = await _cmdTTXLqvu.argParser(_fnnrPFJXV)
		const _valuetGER5Ov = null;
		const _arrayValuepWClFQ5 = -5.787239321867116;
		const _arrayValuedRJL7w = true;
		const _returnValuergfjmMZ = [_arrayValuepWClFQ5, _arrayValuedRJL7w]
		const _previousBhIVdij = () => { return _returnValuergfjmMZ };
		const _returnValue3Ouqec = await _cmdTTXLqvu._concatValue(_valuetGER5Ov, _previousBhIVdij)
		const _fnVktd2Au = undefined;
		const _returnValueh04J3Xg = await _cmdTTXLqvu.argParser(_fnVktd2Au)
		const _returnValuezlBiNCa = {
		
	}
		const _includesSo9M5aF = () => { return _returnValuezlBiNCa };
		const _returnValuec2PYmg5 = 2.517222026676434;
		const _joinX3dHoA = () => { return _returnValuec2PYmg5 };
		const _valuescd6dWq = {
			"includes": _includesSo9M5aF,
		"join": _joinX3dHoA
	}
		const _returnValuenrWK5Mp = await _cmdTTXLqvu.choices(_valuescd6dWq)
		const _returnValuebHk2KFh = await _helperMcGDVya.subcommandDescription(_cmdTTXLqvu)
		const _returnValueMQS1fW4 = await _HelpweAhjE.longestSubcommandTermLength(_cmdm0u8V4u, _helperMcGDVya)
		const _optioniwcTxct = null;
		const _returnValueXEfrJII = await _HelpweAhjE.optionDescription(_optioniwcTxct)
	});

	it('test for Help', async () => {
		const _HelpDZGYdd2 = new Help()
		const _namerRKxbVd = "q2IMqXSYB6Y6XdVkTQ0rqXV7XrXDmZHnLF6HYf3aNDqLmNDOQv";
		const _descriptionMdeZjWQ = -3.5301472716900264;
		const _optionWDGNKEw = new Argument(_namerRKxbVd, _descriptionMdeZjWQ)
		const _arrayValueQ4qNQmi = undefined;
		const _arrayValueK6HkESv = -7.835934241865584;
		const _arrayValueJqBfS5c = [_arrayValueQ4qNQmi, _arrayValueK6HkESv]
		const _arrayValue0gcwvi = undefined;
		const _arrayValueq6hedSr = 3.0317922111330873;
		const _valuesgPSA5W = [_arrayValueJqBfS5c, _arrayValue0gcwvi, _arrayValueq6hedSr]
		const _description1DmpG8 = {
		
	}
		const _returnValueF2hFdnp = await _optionWDGNKEw.default(_valuesgPSA5W, _description1DmpG8)
		const _fnWEPgim7 = undefined;
		const _returnValueOFSiqy = await _optionWDGNKEw.argParser(_fnWEPgim7)
		const _returnValueaQF8u7o = await _optionWDGNKEw.name()
		const _returnValueDzGXdUo = await _HelpDZGYdd2.optionDescription(_optionWDGNKEw)
	});

	it('test for Help', async () => {
		const _HelpnwRv7H = new Help()
		const _namekNXJmgK = undefined;
		const _cmdH5deRGv = new Command(_namekNXJmgK)
		const _displayHelpVbFic0f = true;
		const _returnValueWnHt290 = await _cmdH5deRGv.showHelpAfterError(_displayHelpVbFic0f)
		const _strXN4JbKr = undefined;
		const _returnValuePXfrnh = await _cmdH5deRGv.usage(_strXN4JbKr)
		const _arrayValuezdd0paj = {
		
	}
		const _returnValueLEf8rTk = [_arrayValuezdd0paj]
		const _splittfdz3Yt = () => { return _returnValueLEf8rTk };
		const _namesNbfKjD = {
			"split": _splittfdz3Yt
	}
		const _returnValueGmB7vaz = await _cmdH5deRGv.arguments(_namesNbfKjD)
		const __outputConfigurationWhqqvbt = {
		
	}
		const __hasHelpOptioncSta5TM = {
		
	}
		const __helpFlagsin6wC9N = {
		
	}
		const __helpDescriptionhJwvKzz = {
		
	}
		const __helpShortFlagvxtAyUJ = {
		
	}
		const __helpLongFlagSkZ0JiJ = {
		
	}
		const __helpCommandName4BnGlU = "VcuwqvLiLGvDaXINyBJGxUDXJpSmcmubxegXc6V44wOc7ionUj2Uyrrvz";
		const __helpCommandnameAndArgsY3c4aU = "tGAEtIjgKDVL5UXQQK41xpQuVy82uW4hfXvOeFIlbPzq6Btr";
		const __helpCommandDescriptionWmzFDn = {
		
	}
		const __helpConfigurationoBff6Qg = {
		
	}
		const __exitCallbackYFSGAmn = {
		
	}
		const _arrayValueArtYPIv = false;
		const _arrayValuefw2tTpJ = 8.228444128709597;
		const __storeOptionsAsPropertiesd7nCnXb = [_arrayValueArtYPIv, _arrayValuefw2tTpJ]
		const __combineFlagAndOptionalValueqMUJPvg = {
		
	}
		const __allowExcessArgumentswPECX5k = {
		
	}
		const __enablePositionalOptionsaZqaV2n = {
		
	}
		const __showHelpAfterErroruMQQAo = "ug7hPV3babfebduOpdUpkx6NgnXhEt9aMbTjeIM4TJwofCXxbwCcJDTp7";
		const __showSuggestionAfterErrora2FhZfr = {
		
	}
		const _sourceCommandtx8fsIo = {
			"_outputConfiguration": __outputConfigurationWhqqvbt,
		"_hasHelpOption": __hasHelpOptioncSta5TM,
		"_helpFlags": __helpFlagsin6wC9N,
		"_helpDescription": __helpDescriptionhJwvKzz,
		"_helpShortFlag": __helpShortFlagvxtAyUJ,
		"_helpLongFlag": __helpLongFlagSkZ0JiJ,
		"_helpCommandName": __helpCommandName4BnGlU,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsY3c4aU,
		"_helpCommandDescription": __helpCommandDescriptionWmzFDn,
		"_helpConfiguration": __helpConfigurationoBff6Qg,
		"_exitCallback": __exitCallbackYFSGAmn,
		"_storeOptionsAsProperties": __storeOptionsAsPropertiesd7nCnXb,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValueqMUJPvg,
		"_allowExcessArguments": __allowExcessArgumentswPECX5k,
		"_enablePositionalOptions": __enablePositionalOptionsaZqaV2n,
		"_showHelpAfterError": __showHelpAfterErroruMQQAo,
		"_showSuggestionAfterError": __showSuggestionAfterErrora2FhZfr
	}
		const _returnValueNxIXfni = await _cmdH5deRGv.copyInheritedSettings(_sourceCommandtx8fsIo)
		const _returnValueqegq1jo = await _cmdH5deRGv._parseOptionsEnv()
		const _returnValueCg1bANA = await _HelpnwRv7H.visibleOptions(_cmdH5deRGv)
	});

	it('test for Help', async () => {
		const _Helperww57 = new Help()
		const _returnValueqQoR9Ut = false;
		const _arrayValueYBQ5nw8 = () => { return _returnValueqQoR9Ut };
		const _arrayValueR1HE60b = undefined;
		const _nameRp6ZNyC = [_arrayValueYBQ5nw8, _arrayValueR1HE60b]
		const _cmdAhx5hdz = new Command(_nameRp6ZNyC)
		const _passThroughXvMaelG = true;
		const _returnValueikemDEx = await _cmdAhx5hdz.passThroughOptions(_passThroughXvMaelG)
		const _nameAndArgsDxSbWo4 = "PRa1LLTsfvNrqW9TiWMkfQm63SyWD3fNEUGlNcHskFDdRuSmhTUjyUaeJ";
		const _actionOptsOrExecDescYHEaHE = null;
		const _execOptsuPUaEv = true;
		const _returnValueP0JnaH9 = await _cmdAhx5hdz.command(_nameAndArgsDxSbWo4, _actionOptsOrExecDescYHEaHE, _execOptsuPUaEv)
		const _returnValueqhpP798 = await _Helperww57.visibleOptions(_cmdAhx5hdz)
	});

	it('test for Help', async () => {
		const _HelpQ4uiL9 = new Help()
		const _cmdml7MCqC = 5.029151531659883;
		const _helperGQzMKr2 = new Help()
		const _arrayValuelpZ8lbo = 7.1381886037570865;
		const _returnValuel42x4EU = {
		
	}
		const _arrayValueBthNgv = () => { return _returnValuel42x4EU };
		const _arrayValuewbPQ2A9 = null;
		const _arrayValueJNmf723 = undefined;
		const _arrayValueGrSJjX = [_arrayValueBthNgv, _arrayValuewbPQ2A9, _arrayValueJNmf723]
		const _cmdBcw34yq = [_arrayValuelpZ8lbo, _arrayValueGrSJjX]
		const _arrayValuexIQjwHQ = null;
		const _returnValuelg9lepF = []
		const _arrayValueYPdYsWV = () => { return _returnValuelg9lepF };
		const _returnValuehR0xj3 = [_arrayValuexIQjwHQ, _arrayValueYPdYsWV]
		const _longestOptionTermLengthwMGafYK = () => { return _returnValuehR0xj3 };
		const _returnValuehl86cVJ = null;
		const _returnValueQE9104N = () => { return _returnValuehl86cVJ };
		const _returnValuez4spV1K = () => { return _returnValueQE9104N };
		const _longestSubcommandTermLengthhyYRvD = () => { return _returnValuez4spV1K };
		const _returnValueZTqHqhs = "5V4SQw5OsYoYkXVdh3hnTjl9aeWE34Y8HEInPyWVrrQ5mm134FATLzsyeSV12p9Nfsgq5e7voqCpOUzgChQADzTbHTFPza";
		const _longestArgumentTermLengthcyLjcFk = () => { return _returnValueZTqHqhs };
		const _helperOfVppSx = {
			"longestOptionTermLength": _longestOptionTermLengthwMGafYK,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhyYRvD,
		"longestArgumentTermLength": _longestArgumentTermLengthcyLjcFk
	}
		const _returnValueqUAXAa = await _helperGQzMKr2.padWidth(_cmdBcw34yq, _helperOfVppSx)
		const _namersTooxV = true;
		const _cmdNxscugR = new Command(_namersTooxV)
		const _strIr89aZB = undefined;
		const _returnValuejROrhDf = await _cmdNxscugR.usage(_strIr89aZB)
		const _returnValueCXiX7Vg = "z9vE7YIXTHIuTcS4NF1FhLwpr23TRT9oDxNFJY96TMkWHHb2qNSFGg8NM2qvZn2v4W";
		const _arrayValueUMkrpGN = () => { return _returnValueCXiX7Vg };
		const _arrayValueIhDFD6z = null;
		const _argvq212IX = [_arrayValueUMkrpGN, _arrayValueIhDFD6z]
		const _arrayValueImzUijL = {
		
	}
		const _arrayValueRwpVp2O = true;
		const _arrayValueT6HnpGz = null;
		const _returnValueKMpmH3 = [_arrayValueImzUijL, _arrayValueRwpVp2O, _arrayValueT6HnpGz]
		const _parseOptionsO6HZMdZ = () => { return _returnValueKMpmH3 };
		const _returnValuext6R6h2 = await _cmdNxscugR.parse(_argvq212IX, _parseOptionsO6HZMdZ)
		const _keyA1KzF7 = true;
		const _valuehPTfFb1 = -5.389090837976044;
		const _returnValueLkrCOsL = await _cmdNxscugR.setOptionValue(_keyA1KzF7, _valuehPTfFb1)
		const _returnValueCWTDHZR = await _helperGQzMKr2.subcommandDescription(_cmdNxscugR)
		const _namecRhMmG = 9.1630677678566;
		const _cmdRsStrdS = new Command(_namecRhMmG)
		const _passThroughuXM1j95 = true;
		const _returnValueVPczE8x = await _cmdRsStrdS.passThroughOptions(_passThroughuXM1j95)
		const _returnValueCvP7Rq1 = await _helperGQzMKr2.visibleCommands(_cmdRsStrdS)
		const _returnValueKqdFxrS = await _HelpQ4uiL9.formatHelp(_cmdml7MCqC, _helperGQzMKr2)
		const _namecZaKYqP = undefined;
		const _cmdlDuJ0mW = new Command(_namecZaKYqP)
		const _arrayValuehqx7Gtd = 3.4687749234238634;
		const _returnValueFfiZ2O = 0.271755057111168;
		const _arrayValueWFyZJAh = () => { return _returnValueFfiZ2O };
		const _arrayValueQZgAt9O = "wt";
		const _fnJfMjjNh = [_arrayValuehqx7Gtd, _arrayValueWFyZJAh, _arrayValueQZgAt9O]
		const _returnValuebIIz4zw = await _cmdlDuJ0mW.action(_fnJfMjjNh)
		const _returnValueTGkrxTl = await _cmdlDuJ0mW.opts()
		const _eventsMjSuJ = "C34dqx9UTfOiLrvHAFCF44OBmpm2CSMWtrcj78WjIm8gA6qRslyhijl8ee79A34scEXHKnzGzhWxDt9k7cQoLjQIIzYHM1N7igm";
		const _listeneraYuOqD0 = 6.276363329359484;
		const _returnValuemzb9kY = await _cmdlDuJ0mW.hook(_eventsMjSuJ, _listeneraYuOqD0)
		const _returnValueiLXv7Wm = await _HelpQ4uiL9.commandDescription(_cmdlDuJ0mW)
		const _nameeNYMQKp = null;
		const _cmdzjlRvZJ = new Command(_nameeNYMQKp)
		const _subcommandbw1g4fN = false;
		const _arrayValueGT2mh03 = {
		
	}
		const _argsLDErvbP = [_arrayValueGT2mh03]
		const _returnValueoUIY5JM = await _cmdzjlRvZJ._executeSubCommand(_subcommandbw1g4fN, _argsLDErvbP)
		const _contextOptionsCyBhwEL = {
		
	}
		const _returnValuef2hfbFb = await _cmdzjlRvZJ._getHelpContext(_contextOptionsCyBhwEL)
		const __outputConfigurationnv7NMic = {
		
	}
		const __hasHelpOptionrLKgHnP = {
		
	}
		const _arrayValueGCtXmFR = []
		const _arrayValueEZkU7Ow = "uKiMvVkrLaL";
		const _arrayValuegTxwP5F = -6.45442924809754;
		const _arrayValuefmbZkgk = 0.8689083577400059;
		const __helpFlagsFM2wj9b = [_arrayValueGCtXmFR, _arrayValueEZkU7Ow, _arrayValuegTxwP5F, _arrayValuefmbZkgk]
		const __helpDescriptionRlWwZrJ = {
		
	}
		const __helpShortFlagaWgqfP3 = {
		
	}
		const __helpLongFlagmeCTzqb = {
		
	}
		const __helpCommandNameyMNtAyD = "A86EUL5sr5LxvjKs6himnea5YAcBIPvEBLb16ctO3eqldmff1sd5TPm";
		const __helpCommandnameAndArgsoAeeU2f = {
		
	}
		const __helpCommandDescriptionYln020h = "4IjE6KhylYUUzbV5jbsJ5PvAYlA46eB";
		const __helpConfigurationQgkEGUA = {
		
	}
		const __exitCallbackVMAaZ44 = {
		
	}
		const __storeOptionsAsPropertiesvKt5ySu = {
		
	}
		const __combineFlagAndOptionalValuefGXNHe = false;
		const __allowExcessArgumentswlEU9aw = null;
		const __enablePositionalOptionsP6vezQ = {
		
	}
		const __showHelpAfterErrorfQHpkjK = {
		
	}
		const __showSuggestionAfterErrorIKdm4aA = {
		
	}
		const _sourceCommandm6jLBLd = {
			"_outputConfiguration": __outputConfigurationnv7NMic,
		"_hasHelpOption": __hasHelpOptionrLKgHnP,
		"_helpFlags": __helpFlagsFM2wj9b,
		"_helpDescription": __helpDescriptionRlWwZrJ,
		"_helpShortFlag": __helpShortFlagaWgqfP3,
		"_helpLongFlag": __helpLongFlagmeCTzqb,
		"_helpCommandName": __helpCommandNameyMNtAyD,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsoAeeU2f,
		"_helpCommandDescription": __helpCommandDescriptionYln020h,
		"_helpConfiguration": __helpConfigurationQgkEGUA,
		"_exitCallback": __exitCallbackVMAaZ44,
		"_storeOptionsAsProperties": __storeOptionsAsPropertiesvKt5ySu,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValuefGXNHe,
		"_allowExcessArguments": __allowExcessArgumentswlEU9aw,
		"_enablePositionalOptions": __enablePositionalOptionsP6vezQ,
		"_showHelpAfterError": __showHelpAfterErrorfQHpkjK,
		"_showSuggestionAfterError": __showSuggestionAfterErrorIKdm4aA
	}
		const _returnValueG6gS6zO = await _cmdzjlRvZJ.copyInheritedSettings(_sourceCommandm6jLBLd)
		const _promiseP7TKrpx = false;
		const _eventZeUpX7x = "zncOB8a4nUo9auO9v5gO1ixd3XZLYB8zVOipFAofbGjcCsr81YzUoQeHAANDQLedb6swRGUqkJ";
		const _returnValueOlQ4jzc = await _cmdzjlRvZJ._chainOrCallHooks(_promiseP7TKrpx, _eventZeUpX7x)
		const _nameBOnCWKU = undefined;
		const _returnValuejy5MU2b = await _cmdzjlRvZJ.createCommand(_nameBOnCWKU)
		const _returnValuecLKm871 = await _HelpQ4uiL9.visibleCommands(_cmdzjlRvZJ)
		const _flagsAu1tBs3 = -9.666060176229463;
		const _optionlZ8AUph = {
			"flags": _flagsAu1tBs3
	}
		const _returnValuetTRaL9V = await _HelpQ4uiL9.optionTerm(_optionlZ8AUph)
	});

	it('test for Help', async () => {
		const _HelpmmdTNTO = new Help()
		const _arrayValueMBP7i54 = undefined;
		const _arrayValueU9lb0vU = "JxG442HXtoSrWikKezyPVVJbBuNsX";
		const _returnValuejyrF8Ht = [_arrayValueMBP7i54, _arrayValueU9lb0vU]
		const _nameXbEUjJm = () => { return _returnValuejyrF8Ht };
		const _cmdGliA0Wl = new Command(_nameXbEUjJm)
		const _enableOrNameAndArgsRTQESr5 = "FK46jwSps0IXDK1ZP9XssPDLgsx2e6BkRPSz22kYeCW";
		const _descriptionA1TcmUx = true;
		const _returnValueoU7eJAU = await _cmdGliA0Wl.addHelpCommand(_enableOrNameAndArgsRTQESr5, _descriptionA1TcmUx)
		const _subcommandKiUcXTx = "7DhGxCuxsjovarQ8NVxbD842ilDpyByIlMQWCI2gvA4iRMqCxcraE4u";
		const _argsGOlCpi1 = "rvIbUoWeearxMp8wDbZkvscvIjqXsNaVKvoppe";
		const _returnValueQQVIiwk = await _cmdGliA0Wl._executeSubCommand(_subcommandKiUcXTx, _argsGOlCpi1)
		const _returnValuekdpj0vt = await _HelpmmdTNTO.subcommandTerm(_cmdGliA0Wl)
		const _nameWnBJ3k8 = undefined;
		const _cmd8cdsuE = new Command(_nameWnBJ3k8)
		const _passThroughEK8TDM4 = false;
		const _returnValueeTnIyD = await _cmd8cdsuE.passThroughOptions(_passThroughEK8TDM4)
		const _returnValueNYDm1bD = await _cmd8cdsuE.unknownCommand()
		const _flagsnwCllz3 = true;
		const _descriptionegy392S = 1.3662985443450744;
		const _returnValueYREG4jf = await _cmd8cdsuE.helpOption(_flagsnwCllz3, _descriptionegy392S)
		const _returnValuePPuszUY = await _HelpmmdTNTO.commandDescription(_cmd8cdsuE)
	});

	it('test for Help', async () => {
		const _HelpYycCEFl = new Help()
		const _arrayValueVWsUUZk = true;
		const _arrayValueCb7x09V = "UfJqfTjMgXJmoZWAtS69pVv5vqnxVn3w2WfLrPohRGoTsmjbbQhV";
		const _optionT1KxHP6 = [_arrayValueVWsUUZk, _arrayValueCb7x09V]
		const _returnValueyKt6bl = await _HelpYycCEFl.optionDescription(_optionT1KxHP6)
		const _returnValuePekInyP = -0.5189386455119305;
		const _sliceTPRc8E8 = () => { return _returnValuePekInyP };
		const _nameE317LyL = {
			"slice": _sliceTPRc8E8
	}
		const _descriptionGgDT0in = {
		
	}
		const _argumentMANKzVw = new Argument(_nameE317LyL, _descriptionGgDT0in)
		const _fnkgfyem5 = undefined;
		const _returnValueABZUWbX = await _argumentMANKzVw.argParser(_fnkgfyem5)
		const _valueSMvZZyb = 4.8342119770407965;
		const _previousoiIlvMd = {
		
	}
		const _returnValuetH5ZZk = await _argumentMANKzVw._concatValue(_valueSMvZZyb, _previousoiIlvMd)
		const _valueQGCEhwC = {
		
	}
		const _returnValueOvLSuDg = undefined;
		const _descriptionbQUEzVl = () => { return _returnValueOvLSuDg };
		const _returnValuewyHAAw = await _argumentMANKzVw.default(_valueQGCEhwC, _descriptionbQUEzVl)
		const _arrayValue9nZ3aA = true;
		const _arrayValueVEt3HeH = 3.7609224679463598;
		const _valueqQqIJxf = [_arrayValue9nZ3aA, _arrayValueVEt3HeH]
		const _returnValueMMM15N1 = {
		
	}
		const _concatj6K9Rcr = () => { return _returnValueMMM15N1 };
		const _previousOqPWKyE = {
			"concat": _concatj6K9Rcr
	}
		const _returnValuecfzubeg = await _argumentMANKzVw._concatValue(_valueqQqIJxf, _previousOqPWKyE)
		const _returnValueOyVLB8v = await _HelpYycCEFl.argumentDescription(_argumentMANKzVw)
		const _returnValueePNuH5 = -8.827719757785056;
		const _descriptionJLAul3Y = () => { return _returnValueePNuH5 };
		const _cmdwg8wcq8 = {
			"description": _descriptionJLAul3Y
	}
		const _returnValueyTYUqdy = await _HelpYycCEFl.subcommandDescription(_cmdwg8wcq8)
		const _cmdC4TB18 = null;
		const _returnValuepG4udoz = await _HelpYycCEFl.visibleOptions(_cmdC4TB18)
		const _arrayValuebORxr6K = undefined;
		const _argumentuAvkvYE = [_arrayValuebORxr6K]
		const _returnValuep36DsT1 = await _HelpYycCEFl.argumentDescription(_argumentuAvkvYE)
	});
})