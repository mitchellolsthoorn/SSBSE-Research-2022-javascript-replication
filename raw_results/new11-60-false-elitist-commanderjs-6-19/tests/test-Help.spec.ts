export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpAqmXsa9 = new Help()
		const _arrayValueZY4dQTl = "yPRov9xBteNKt7YKSqOnz9QH5oWrPzCsjTPJU4qIBujzB1hIHWoO17It5hYpiP";
		const _arrayValueOcrHOjQ = true;
		const _returnValueQNGR2da = undefined;
		const _arrayValuewiLqwQo = () => { return _returnValueQNGR2da };
		const _arrayValueUleCRCy = [_arrayValuewiLqwQo]
		const _optionqQSavfY = [_arrayValueZY4dQTl, _arrayValueOcrHOjQ, _arrayValueUleCRCy]
		const _returnValueNpAiy6i = await _HelpAqmXsa9.optionDescription(_optionqQSavfY)
		const _cmdJGHsTa5 = "gUtDVDsOWn";
		const _helperhXn7SnW = true;
		const _returnValueghwuo2A = await _HelpAqmXsa9.longestArgumentTermLength(_cmdJGHsTa5, _helperhXn7SnW)
	});

	it('test for Help', async () => {
		const _HelprZ1BXGu = new Help()
		const _argChoicesI9rh4Bh = {
		
	}
		const _negateDRbHSMc = null;
		const _defaultValueO7KtafN = undefined;
		const _defaultValueDescriptionQAYcYJ3 = null;
		const _envVarUGiMKgt = undefined;
		const _descriptionuaq0v3D = null;
		const _optionXLYM3qX = {
			"argChoices": _argChoicesI9rh4Bh,
		"negate": _negateDRbHSMc,
		"defaultValue": _defaultValueO7KtafN,
		"defaultValueDescription": _defaultValueDescriptionQAYcYJ3,
		"envVar": _envVarUGiMKgt,
		"description": _descriptionuaq0v3D
	}
		const _returnValuelG868Hc = await _HelprZ1BXGu.optionDescription(_optionXLYM3qX)
	});

	it('test for Help', async () => {
		const _HelpRFKZNvb = new Help()
		const _cmdvmYDZEB = null;
		const _sortSubcommandsbtOfgCx = undefined;
		const _returnValueySnOzo = 5.960463703861489;
		const _subcommandTermiyunNLC = () => { return _returnValueySnOzo };
		const _helperYMrRNRJ = {
			"sortSubcommands": _sortSubcommandsbtOfgCx,
		"subcommandTerm": _subcommandTermiyunNLC
	}
		const _returnValueusjkQv3 = await _HelpRFKZNvb.longestSubcommandTermLength(_cmdvmYDZEB, _helperYMrRNRJ)
		const _returnValueESu8jiZ = undefined;
		const _descriptionBTpxZpo = () => { return _returnValueESu8jiZ };
		const _cmdZTFWHV1 = {
			"description": _descriptionBTpxZpo
	}
		const _returnValuesHbw1Vc = await _HelpRFKZNvb.commandDescription(_cmdZTFWHV1)
		const _argChoiceshDLdvs3 = null;
		const _defaultValueBnGHZE4 = undefined;
		const _defaultValueDescriptionApLFhtL = null;
		const _descriptionWPp5eZp = null;
		const _argumenti2XKuvC = {
			"argChoices": _argChoiceshDLdvs3,
		"defaultValue": _defaultValueBnGHZE4,
		"defaultValueDescription": _defaultValueDescriptionApLFhtL,
		"description": _descriptionWPp5eZp
	}
		const _returnValuepwJVA9l = await _HelpRFKZNvb.argumentDescription(_argumenti2XKuvC)
		const __namewKLCvi = {
		
	}
		const __aliasesePV0MV = {
		
	}
		const _parentP5nUJ4 = {
		
	}
		const _usagepdh2zlQ = null;
		const _cmdpCIABp7 = {
			"_name": __namewKLCvi,
		"_aliases": __aliasesePV0MV,
		"parent": _parentP5nUJ4,
		"usage": _usagepdh2zlQ
	}
		const _returnValueNqIFiMI = await _HelpRFKZNvb.commandUsage(_cmdpCIABp7)
		const _cmdWM0juog = false;
		const _returnValueg6c0llR = 8.238020361713115;
		const _longestOptionTermLengthoAdWjya = () => { return _returnValueg6c0llR };
		const _arrayValuezZeLwPO = null;
		const _returnValuel5D8kAm = [_arrayValuezZeLwPO]
		const _longestSubcommandTermLengthP7JctM = () => { return _returnValuel5D8kAm };
		const _returnValueSpKxIOz = undefined;
		const _longestArgumentTermLengthRkFtg7s = () => { return _returnValueSpKxIOz };
		const _helperDUAUkf = {
			"longestOptionTermLength": _longestOptionTermLengthoAdWjya,
		"longestSubcommandTermLength": _longestSubcommandTermLengthP7JctM,
		"longestArgumentTermLength": _longestArgumentTermLengthRkFtg7s
	}
		const _returnValueYl9hWLw = await _HelpRFKZNvb.padWidth(_cmdWM0juog, _helperDUAUkf)
	});

	it('test for Help', async () => {
		const _HelpPY0wYGx = new Help()
		const _cmddwJqKId = true;
		const _returnValueXrtqQCj = await _HelpPY0wYGx.commandUsage(_cmddwJqKId)
		const _cmdET4hnyn = []
		const _returnValuekZXfbha = "mqmMNUHSE5";
		const _visibleArgumentstAJEo5e = () => { return _returnValuekZXfbha };
		const _arrayValueoRJDanV = true;
		const _returnValuebI9scHq = [_arrayValueoRJDanV]
		const _argumentTermfwFpMEY = () => { return _returnValuebI9scHq };
		const _helperQ9Js5ON = {
			"visibleArguments": _visibleArgumentstAJEo5e,
		"argumentTerm": _argumentTermfwFpMEY
	}
		const _returnValuecS97KLX = await _HelpPY0wYGx.longestArgumentTermLength(_cmdET4hnyn, _helperQ9Js5ON)
	});

	it('test for Help', async () => {
		const _HelpF4GTZUE = new Help()
		const __argsbfGob94 = {
		
	}
		const __namezsJegG = 0.9681721145658795;
		const __aliasesvM04LO = {
		
	}
		const _optionsoprYkpj = {
		
	}
		const _cmdq5eIhlY = {
			"_args": __argsbfGob94,
		"_name": __namezsJegG,
		"_aliases": __aliasesvM04LO,
		"options": _optionsoprYkpj
	}
		const _returnValuewpgbTbp = await _HelpF4GTZUE.subcommandTerm(_cmdq5eIhlY)
		const _argChoicesUCtsM0 = {
		
	}
		const _defaultValue9AxE28 = undefined;
		const _arrayValuec30pXZN = undefined;
		const _arrayValuedaOvpq = "UljpquCUGIniiEWOYFIyE46Cbq";
		const _defaultValueDescriptionAlbkUBS = [_arrayValuec30pXZN, _arrayValuedaOvpq]
		const _descriptiontRyrlyn = true;
		const _argumentygTPPB2 = {
			"argChoices": _argChoicesUCtsM0,
		"defaultValue": _defaultValue9AxE28,
		"defaultValueDescription": _defaultValueDescriptionAlbkUBS,
		"description": _descriptiontRyrlyn
	}
		const _returnValueew87vwY = await _HelpF4GTZUE.argumentDescription(_argumentygTPPB2)
	});

	it('test for Help', async () => {
		const _HelpM0CPMhR = new Help()
		const _cmdZISDzul = undefined;
		const _arrayValuez0x2k1T = 0.47132705044808;
		const _returnValueET6wOlk = [_arrayValuez0x2k1T]
		const _returnValueL0NUtE9 = () => { return _returnValueET6wOlk };
		const _visibleOptionsebBwVO = () => { return _returnValueL0NUtE9 };
		const _returnValueYVVwIoI = {
		
	}
		const _optionTermSib9fHR = () => { return _returnValueYVVwIoI };
		const _helperXDfpdjz = {
			"visibleOptions": _visibleOptionsebBwVO,
		"optionTerm": _optionTermSib9fHR
	}
		const _returnValueltEsZim = await _HelpM0CPMhR.longestOptionTermLength(_cmdZISDzul, _helperXDfpdjz)
		const _cmdBzxGRm8 = {
		
	}
		const _visibleOptionsZw1sco = null;
		const _returnValueuuUveoo = undefined;
		const _optionTermJGLsQdr = () => { return _returnValueuuUveoo };
		const _helperAHlc5Mf = {
			"visibleOptions": _visibleOptionsZw1sco,
		"optionTerm": _optionTermJGLsQdr
	}
		const _returnValuem5zzKsY = await _HelpM0CPMhR.longestOptionTermLength(_cmdBzxGRm8, _helperAHlc5Mf)
	});

	it('test for Help', async () => {
		const _HelpyNeergg = new Help()
		const _returnValueVhTKgg8 = "fhcTgiITE8DJrTDowOIJIpLELr5Gfjsb3y9kqY3KH3aPmXVr6ROCI5evX";
		const _descriptionxGKExW = () => { return _returnValueVhTKgg8 };
		const _cmdz21yqCV = {
			"description": _descriptionxGKExW
	}
		const _returnValuetl9eEFS = await _HelpyNeergg.commandDescription(_cmdz21yqCV)
		const _returnValuePyHfwdx = true;
		const _descriptionT24WAmI = () => { return _returnValuePyHfwdx };
		const _cmdvncDbIR = {
			"description": _descriptionT24WAmI
	}
		const _returnValueYFOSa0X = await _HelpyNeergg.commandDescription(_cmdvncDbIR)
		const _optionsO8YhzAM = {
		
	}
		const __hasHelpOptionqPBam9E = {
		
	}
		const __helpShortFlaggAlyz0X = undefined;
		const _arrayValuepwitp3b = 2.496779875828823;
		const _returnValueC6OU7Lb = [_arrayValuepwitp3b]
		const __findOptionUKg82At = () => { return _returnValueC6OU7Lb };
		const __helpLongFlagCOOgXBv = {
		
	}
		const _returnValueR76IQrc = false;
		const _createOption3zlF2f = () => { return _returnValueR76IQrc };
		const __helpDescriptionDmGpT85 = -1.1285446829431418;
		const __helpFlagsGMBysEY = null;
		const _cmdxgBjahh = {
			"options": _optionsO8YhzAM,
		"_hasHelpOption": __hasHelpOptionqPBam9E,
		"_helpShortFlag": __helpShortFlaggAlyz0X,
		"_findOption": __findOptionUKg82At,
		"_helpLongFlag": __helpLongFlagCOOgXBv,
		"createOption": _createOption3zlF2f,
		"_helpDescription": __helpDescriptionDmGpT85,
		"_helpFlags": __helpFlagsGMBysEY
	}
		const _returnValueXyZBpUH = await _HelpyNeergg.visibleOptions(_cmdxgBjahh)
	});

	it('test for Help', async () => {
		const _HelpzLsh46R = new Help()
		const _cmdDb3NXp7 = null;
		const _arrayValue8RWEzF = null;
		const _returnValuedioVIW = [_arrayValue8RWEzF]
		const _visibleArgumentsp1p6K64 = () => { return _returnValuedioVIW };
		const _returnValueBh1WLT5 = "XvNslocNnk138F6H65NSPsfN73NOkHCOQJYRSSiPPn";
		const _argumentTermcmxlFMy = () => { return _returnValueBh1WLT5 };
		const _helper2CHpeX = {
			"visibleArguments": _visibleArgumentsp1p6K64,
		"argumentTerm": _argumentTermcmxlFMy
	}
		const _returnValuejpEAw1f = await _HelpzLsh46R.longestArgumentTermLength(_cmdDb3NXp7, _helper2CHpeX)
		const _argChoicesLRcsB99 = {
		
	}
		const _defaultValuebQlbNZd = undefined;
		const _defaultValueDescriptionowLrorZ = {
		
	}
		const _arrayValueQDp7fPv = true;
		const _arrayValuesvX0OcS = undefined;
		const _arrayValueyUt90iF = -4.440778687727262;
		const _arrayValuejw3v8BW = true;
		const _arrayValueg6x29yT = "fweHgmRmS6LSRrqQVMTOwxvDjVrRj";
		const _returnValueWZILEG = [_arrayValueQDp7fPv, _arrayValuesvX0OcS, _arrayValueyUt90iF, _arrayValuejw3v8BW, _arrayValueg6x29yT]
		const _descriptionCvCrx7f = () => { return _returnValueWZILEG };
		const _argumentCAFCP6j = {
			"argChoices": _argChoicesLRcsB99,
		"defaultValue": _defaultValuebQlbNZd,
		"defaultValueDescription": _defaultValueDescriptionowLrorZ,
		"description": _descriptionCvCrx7f
	}
		const _returnValueSG29AqI = await _HelpzLsh46R.argumentDescription(_argumentCAFCP6j)
		const _argChoicesoHGHn25 = {
		
	}
		const _negatevWnbmWE = {
		
	}
		const _defaultValueCvArSlW = undefined;
		const _returnValueztf68A = -3.7591181672908727;
		const _defaultValueDescriptionLT6jzqG = () => { return _returnValueztf68A };
		const _envVarbBZhb9v = undefined;
		const _descriptionVpE2K8 = {
		
	}
		const _optionittD1r1 = {
			"argChoices": _argChoicesoHGHn25,
		"negate": _negatevWnbmWE,
		"defaultValue": _defaultValueCvArSlW,
		"defaultValueDescription": _defaultValueDescriptionLT6jzqG,
		"envVar": _envVarbBZhb9v,
		"description": _descriptionVpE2K8
	}
		const _returnValueEwm5CQX = await _HelpzLsh46R.optionDescription(_optionittD1r1)
		const _commandslYDCGE = {
		
	}
		const _arrayValuefEpu5qM = null;
		const _arrayValuekuWViyT = null;
		const _arrayValueWPxB2s = true;
		const _returnValue8PQGkO = [_arrayValuefEpu5qM, _arrayValuekuWViyT, _arrayValueWPxB2s]
		const _returnValueKY16wlH = () => { return _returnValue8PQGkO };
		const __hasImplicitHelpCommandZXOasKp = () => { return _returnValueKY16wlH };
		const __helpCommandnameAndArgsLz5uyCr = {
		
	}
		const _returnValueulb32HQ = false;
		const _createCommandgXP1RBl = () => { return _returnValueulb32HQ };
		const __helpCommandDescriptiony7MtANm = 1.7716468586179186;
		const _cmdMgSE5FM = {
			"commands": _commandslYDCGE,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandZXOasKp,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsLz5uyCr,
		"createCommand": _createCommandgXP1RBl,
		"_helpCommandDescription": __helpCommandDescriptiony7MtANm
	}
		const _returnValueoxQGJFM = await _HelpzLsh46R.visibleCommands(_cmdMgSE5FM)
		const _strTkn3ces = 5.241547227066247;
		const _widthRe28yoe = -4.359843204812856;
		const _indentCztmrz = -9.205052541150717;
		const _minColumnWidthntMZSJr = 9.302285099131268;
		const _returnValueCF8PoX4 = await _HelpzLsh46R.wrap(_strTkn3ces, _widthRe28yoe, _indentCztmrz, _minColumnWidthntMZSJr)
	});

	it('test for Help', async () => {
		const _HelpkaG8yLl = new Help()
		const _optionPUygOWP = 5.724156685830922;
		const _returnValuekf1q2QC = await _HelpkaG8yLl.optionTerm(_optionPUygOWP)
		const _returnValueushbgTy = {
		
	}
		const _descriptionD8RFRPj = () => { return _returnValueushbgTy };
		const _cmdcM3OoW9 = {
			"description": _descriptionD8RFRPj
	}
		const _returnValuepAqADEk = await _HelpkaG8yLl.subcommandDescription(_cmdcM3OoW9)
		const __nameqbyxe0S = {
		
	}
		const __aliasesXFlHEia = {
		
	}
		const _parent7soQ5B = {
		
	}
		const _usageMtnuxu = true;
		const _cmdNRduGD2 = {
			"_name": __nameqbyxe0S,
		"_aliases": __aliasesXFlHEia,
		"parent": _parent7soQ5B,
		"usage": _usageMtnuxu
	}
		const _returnValuets1slZg = await _HelpkaG8yLl.commandUsage(_cmdNRduGD2)
	});

	it('test for Help', async () => {
		const _HelpEq4LrSc = new Help()
		const _returnValueZQGcPUj = []
		const _descriptionlZKTcKz = () => { return _returnValueZQGcPUj };
		const _cmdoMJ8x8s = {
			"description": _descriptionlZKTcKz
	}
		const _returnValuejjORdCq = await _HelpEq4LrSc.commandDescription(_cmdoMJ8x8s)
		const _argChoicesGehfvij = {
		
	}
		const _negateak8pca5 = "qB5JEbofvzovvtTDJPRLld";
		const _defaultValuegXvrsbd = undefined;
		const _defaultValueDescriptioncV4p1nK = null;
		const _envVarl7UUd9y = undefined;
		const _descriptionGoHPtEX = true;
		const _optionZN2C7cm = {
			"argChoices": _argChoicesGehfvij,
		"negate": _negateak8pca5,
		"defaultValue": _defaultValuegXvrsbd,
		"defaultValueDescription": _defaultValueDescriptioncV4p1nK,
		"envVar": _envVarl7UUd9y,
		"description": _descriptionGoHPtEX
	}
		const _returnValuep0usKJF = await _HelpEq4LrSc.optionDescription(_optionZN2C7cm)
		const _arrayValuekgoJjxM = true;
		const _arrayValue22xpVn = false;
		const _optionsEbcN5AP = [_arrayValuekgoJjxM, _arrayValue22xpVn]
		const __hasHelpOptiontwHSPOM = undefined;
		const __helpShortFlagTJENIM = true;
		const _returnValueMGcwD2Q = null;
		const __findOptionIGeuW3e = () => { return _returnValueMGcwD2Q };
		const __helpLongFlagJSULBPA = null;
		const _returnValuemJ6dHOC = true;
		const _createOptiontZ73kKs = () => { return _returnValuemJ6dHOC };
		const __helpDescriptionx4tVRJQ = -6.963851361605792;
		const __helpFlagsGQwKQcO = 3.3534234153174545;
		const _cmdR56VYQ8 = {
			"options": _optionsEbcN5AP,
		"_hasHelpOption": __hasHelpOptiontwHSPOM,
		"_helpShortFlag": __helpShortFlagTJENIM,
		"_findOption": __findOptionIGeuW3e,
		"_helpLongFlag": __helpLongFlagJSULBPA,
		"createOption": _createOptiontZ73kKs,
		"_helpDescription": __helpDescriptionx4tVRJQ,
		"_helpFlags": __helpFlagsGQwKQcO
	}
		const _returnValuexiubQQZ = await _HelpEq4LrSc.visibleOptions(_cmdR56VYQ8)
		const _cmduxhp8KC = -4.523168099604727;
		const _sortSubcommandskmWx6R5 = true;
		const _returnValueqX4CnT = true;
		const _subcommandTermeFu1yvh = () => { return _returnValueqX4CnT };
		const _helperQ82lI1m = {
			"sortSubcommands": _sortSubcommandskmWx6R5,
		"subcommandTerm": _subcommandTermeFu1yvh
	}
		const _returnValuek1K5eJv = await _HelpEq4LrSc.formatHelp(_cmduxhp8KC, _helperQ82lI1m)
		const _cmde9lEEGq = null;
		const _returnValuebKRrO8 = undefined;
		const _visibleOptionswrW0ZnH = () => { return _returnValuebKRrO8 };
		const _arrayValueCBPi9U = undefined;
		const _arrayValuexlfwWBf = [_arrayValueCBPi9U]
		const _arrayValueN2CyZrX = true;
		const _returnValuezWbACkZ = [_arrayValuexlfwWBf, _arrayValueN2CyZrX]
		const _optionTermQjRwQVt = () => { return _returnValuezWbACkZ };
		const _helperUDNbrOM = {
			"visibleOptions": _visibleOptionswrW0ZnH,
		"optionTerm": _optionTermQjRwQVt
	}
		const _returnValueGZR6joZ = await _HelpEq4LrSc.longestOptionTermLength(_cmde9lEEGq, _helperUDNbrOM)
	});

	it('test for Help', async () => {
		const _HelpYI4Zoog = new Help()
		const _cmdUWnwDnE = false;
		const _returnValuezr3AVKI = true;
		const _longestOptionTermLengthj0qxdZ = () => { return _returnValuezr3AVKI };
		const _returnValueh1Lkf59 = -1.0155497175146362;
		const _longestSubcommandTermLength7tMTDg = () => { return _returnValueh1Lkf59 };
		const _returnValueb2ZVesW = "b3qExjBjLfKXFHPBYzGtXLMsu6K";
		const _longestArgumentTermLengthb0nczqs = () => { return _returnValueb2ZVesW };
		const _helpergJxPWpj = {
			"longestOptionTermLength": _longestOptionTermLengthj0qxdZ,
		"longestSubcommandTermLength": _longestSubcommandTermLength7tMTDg,
		"longestArgumentTermLength": _longestArgumentTermLengthb0nczqs
	}
		const _returnValuezcJMean = await _HelpYI4Zoog.padWidth(_cmdUWnwDnE, _helpergJxPWpj)
	});

	it('test for Help', async () => {
		const _HelpkyuHlaN = new Help()
		const _commandsulKh6f = {
		
	}
		const _returnValuemdHAnaU = undefined;
		const __hasImplicitHelpCommandzq5OjqU = () => { return _returnValuemdHAnaU };
		const __helpCommandnameAndArgsutlNlM0 = {
		
	}
		const _returnValueu7peask = "9Ow";
		const _returnValuel1BIZ7p = () => { return _returnValueu7peask };
		const _createCommandGVfWLah = () => { return _returnValuel1BIZ7p };
		const __helpCommandDescriptionmuZnBb = []
		const _cmdZ85WwM = {
			"commands": _commandsulKh6f,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandzq5OjqU,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsutlNlM0,
		"createCommand": _createCommandGVfWLah,
		"_helpCommandDescription": __helpCommandDescriptionmuZnBb
	}
		const _returnValueu6locP = await _HelpkyuHlaN.visibleCommands(_cmdZ85WwM)
		const _flagsJ8xGnzA = true;
		const _optionVRUR4gi = {
			"flags": _flagsJ8xGnzA
	}
		const _returnValuerR38woU = await _HelpkyuHlaN.optionTerm(_optionVRUR4gi)
	});

	it('test for Help', async () => {
		const _HelpBuI0jjt = new Help()
		const __nameIbqSbiX = {
		
	}
		const __aliasesiTZFSc1 = "O9TkSRSsxzmmZ6kcnJRlhrlfsEKXCBgOW";
		const _parentAKgLMpQ = {
		
	}
		const _returnValueEi4TUdp = "UxRAXUovKFdkEGPQGVlFpl2hxj1kpkK0UwkQtDt";
		const _usageK15rV7 = () => { return _returnValueEi4TUdp };
		const _cmdmGjeD5y = {
			"_name": __nameIbqSbiX,
		"_aliases": __aliasesiTZFSc1,
		"parent": _parentAKgLMpQ,
		"usage": _usageK15rV7
	}
		const _returnValueaE1PIWz = await _HelpBuI0jjt.commandUsage(_cmdmGjeD5y)
		const _arrayValues9rIXc9 = 4.793266385862086;
		const _cmdSKssSx9 = [_arrayValues9rIXc9]
		const _sortSubcommandsgO40Wby = 5.68983566583289;
		const _arrayValuemtlrYSt = undefined;
		const _arrayValues2Q7WkJ = null;
		const _arrayValueKX9m5ou = undefined;
		const _returnValueJtClKPW = [_arrayValuemtlrYSt, _arrayValues2Q7WkJ, _arrayValueKX9m5ou]
		const _subcommandTermN8xgRG = () => { return _returnValueJtClKPW };
		const _helperlwb6wu2 = {
			"sortSubcommands": _sortSubcommandsgO40Wby,
		"subcommandTerm": _subcommandTermN8xgRG
	}
		const _returnValueWFjvBml = await _HelpBuI0jjt.longestSubcommandTermLength(_cmdSKssSx9, _helperlwb6wu2)
		const _flagsrna6Ut = true;
		const _optionZjya1Y6 = {
			"flags": _flagsrna6Ut
	}
		const _returnValuefkQV4C6 = await _HelpBuI0jjt.optionTerm(_optionZjya1Y6)
	});

	it('test for Help', async () => {
		const _HelpD0yTcE = new Help()
		const _returnValueApLv54I = -0.10055990925878966;
		const _returnValuedY2tYWu = () => { return _returnValueApLv54I };
		const _matchLJYbmzV = () => { return _returnValuedY2tYWu };
		const _returnValueZ5UXaE = {
		
	}
		const _substrHAMyOWw = () => { return _returnValueZ5UXaE };
		const _strewuzLxV = {
			"match": _matchLJYbmzV,
		"substr": _substrHAMyOWw
	}
		const _widthJTOIWjw = -5.10554588778091;
		const _indentYTQSOM9 = -0.5084298035078714;
		const _minColumnWidthyAy276N = 5.164289304576823;
		const _returnValueT9eyBsS = await _HelpD0yTcE.wrap(_strewuzLxV, _widthJTOIWjw, _indentYTQSOM9, _minColumnWidthyAy276N)
		const _argChoicesZIyt5ac = "AdOT6kFXQdGRzvNTYyl6lf5Bi5Mf3YiVFUP8GFapGBHMKs3cLUtH4u1HItoGNHdM6ndg";
		const _returnValueYQUVYBP = undefined;
		const _arrayValueA6lsJBl = () => { return _returnValueYQUVYBP };
		const _arrayValuedz6mRka = -3.7560203978808833;
		const _arrayValuemFuomFb = false;
		const _negatehCNxJeP = [_arrayValueA6lsJBl, _arrayValuedz6mRka, _arrayValuemFuomFb]
		const _defaultValuekLH1Lkq = undefined;
		const _defaultValueDescriptionHdxdyh1 = 9.686808285351692;
		const _envVarDdhEwQ = undefined;
		const _descriptiona4mU6iR = "nHnCo8DML0CcpRgOcX9Q9dTyaHCeCvl3LIsJ2zsyJ69";
		const _option9dYvQJ = {
			"argChoices": _argChoicesZIyt5ac,
		"negate": _negatehCNxJeP,
		"defaultValue": _defaultValuekLH1Lkq,
		"defaultValueDescription": _defaultValueDescriptionHdxdyh1,
		"envVar": _envVarDdhEwQ,
		"description": _descriptiona4mU6iR
	}
		const _returnValueQVApUWr = await _HelpD0yTcE.optionDescription(_option9dYvQJ)
	});

	it('test for Help', async () => {
		const _Help9M8lbp = new Help()
		const _arrayValueq1ZWBgX = undefined;
		const _returnValuemQgsBp0 = [_arrayValueq1ZWBgX]
		const _nametqVqhSB = () => { return _returnValuemQgsBp0 };
		const _argumentTS4l0ia = {
			"name": _nametqVqhSB
	}
		const _returnValueuEhPlny = await _Help9M8lbp.argumentTerm(_argumentTS4l0ia)
		const _cmdmLwwehF = "pnpIEmtCldlCN5vMB4EfeUBi5NJne5bvZLr1bLzfhguPK2tulFPmPYpo1V2qTlXXLRddPCahiKkbjKvWertnIzGWUoQ2INTub4";
		const _returnValueEMjmMrp = []
		const _sortSubcommandsAErDAON = () => { return _returnValueEMjmMrp };
		const _arrayValueIxXyzvn = "eGgQ4N1VQF8UKFaig8ooocz3TXMpzBMlJ2Kjem0eUeB1YVFdQnQQ5sTSx2i2";
		const _arrayValueyrjH35s = undefined;
		const _returnValuetxxMvdI = [_arrayValueIxXyzvn, _arrayValueyrjH35s]
		const _subcommandTermEveFZzb = () => { return _returnValuetxxMvdI };
		const _helperopB1IKc = {
			"sortSubcommands": _sortSubcommandsAErDAON,
		"subcommandTerm": _subcommandTermEveFZzb
	}
		const _returnValuesxknwlv = await _Help9M8lbp.formatHelp(_cmdmLwwehF, _helperopB1IKc)
		const _cmdMlRUzz8 = false;
		const _returnValueo3PaMtf = []
		const _longestOptionTermLengthWdHK1hH = () => { return _returnValueo3PaMtf };
		const _returnValuei107t1 = null;
		const _longestSubcommandTermLengthHrEGnf = () => { return _returnValuei107t1 };
		const _returnValueHMQQ48J = {
		
	}
		const _longestArgumentTermLengthi1B3Yp = () => { return _returnValueHMQQ48J };
		const _helperEBaBkxk = {
			"longestOptionTermLength": _longestOptionTermLengthWdHK1hH,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHrEGnf,
		"longestArgumentTermLength": _longestArgumentTermLengthi1B3Yp
	}
		const _returnValuexqoEYpL = await _Help9M8lbp.padWidth(_cmdMlRUzz8, _helperEBaBkxk)
	});

	it('test for Help', async () => {
		const _HelpfvyTp1u = new Help()
		const _returnValueDJUKIQR = null;
		const _matchXY6iWj7 = () => { return _returnValueDJUKIQR };
		const _arrayValueSZIC51n = undefined;
		const _arrayValuemi7LL1a = {
		
	}
		const _returnValue9F8BEj = [_arrayValueSZIC51n, _arrayValuemi7LL1a]
		const _substrniZFfQX = () => { return _returnValue9F8BEj };
		const _strH6IopEx = {
			"match": _matchXY6iWj7,
		"substr": _substrniZFfQX
	}
		const _widthgvO4vD1 = 4.839872047370374;
		const _indentxxX2B7W = -6.4046011710752895;
		const _minColumnWidthX2kwhjh = -6.5742330819237615;
		const _returnValueEDZmasl = await _HelpfvyTp1u.wrap(_strH6IopEx, _widthgvO4vD1, _indentxxX2B7W, _minColumnWidthX2kwhjh)
		const __nameE9ClUHq = {
		
	}
		const __aliasesQ3oNd7f = {
		
	}
		const _parentCocQCSC = {
		
	}
		const _returnValuewJ4pnuJ = null;
		const _usage9HzwVS = () => { return _returnValuewJ4pnuJ };
		const _cmdbdemWyY = {
			"_name": __nameE9ClUHq,
		"_aliases": __aliasesQ3oNd7f,
		"parent": _parentCocQCSC,
		"usage": _usage9HzwVS
	}
		const _returnValuedjpyScV = await _HelpfvyTp1u.commandUsage(_cmdbdemWyY)
		const _returnValueBz4UKsp = null;
		const _cmdhtcd8oX = () => { return _returnValueBz4UKsp };
		const _sortSubcommandswyR3fWD = true;
		const _arrayValueiLlAXJx = 7.893328555316465;
		const _returnValueOGk2KQd = [_arrayValueiLlAXJx]
		const _subcommandTermGV8uit = () => { return _returnValueOGk2KQd };
		const _helperUbJBbEI = {
			"sortSubcommands": _sortSubcommandswyR3fWD,
		"subcommandTerm": _subcommandTermGV8uit
	}
		const _returnValuelmw3rcY = await _HelpfvyTp1u.longestSubcommandTermLength(_cmdhtcd8oX, _helperUbJBbEI)
		const _cmdE5GxoqF = null;
		const _returnValueNd3YVM = await _HelpfvyTp1u.subcommandDescription(_cmdE5GxoqF)
	});

	it('test for Help', async () => {
		const _HelpPLYZTEv = new Help()
		const __argsDescriptionMgOK0vT = {
		
	}
		const __argsQKLrn4c = {
		
	}
		const _cmdQZNMSzE = {
			"_argsDescription": __argsDescriptionMgOK0vT,
		"_args": __argsQKLrn4c
	}
		const _returnValueyvMq62u = await _HelpPLYZTEv.visibleArguments(_cmdQZNMSzE)
		const _argChoicesEwC2YRd = {
		
	}
		const _negateozOQzZS = undefined;
		const _defaultValueRPxhITI = undefined;
		const _defaultValueDescriptionny8spPu = undefined;
		const _envVarxYyhITT = undefined;
		const _descriptiony8EM1bt = true;
		const _optionDlUU6aX = {
			"argChoices": _argChoicesEwC2YRd,
		"negate": _negateozOQzZS,
		"defaultValue": _defaultValueRPxhITI,
		"defaultValueDescription": _defaultValueDescriptionny8spPu,
		"envVar": _envVarxYyhITT,
		"description": _descriptiony8EM1bt
	}
		const _returnValueMdwSJwX = await _HelpPLYZTEv.optionDescription(_optionDlUU6aX)
		const _cmdLPmqaF = null;
		const _sortSubcommandsKrNxPRz = {
		
	}
		const _returnValueqVTlZEO = null;
		const _subcommandTermQgXjXi = () => { return _returnValueqVTlZEO };
		const _helperF45vM60 = {
			"sortSubcommands": _sortSubcommandsKrNxPRz,
		"subcommandTerm": _subcommandTermQgXjXi
	}
		const _returnValueEbysWoK = await _HelpPLYZTEv.longestSubcommandTermLength(_cmdLPmqaF, _helperF45vM60)
		const _argChoicesvDQwiCu = {
		
	}
		const _negated7AWXwG = undefined;
		const _defaultValueWwekgxm = undefined;
		const _defaultValueDescriptionR7IUE1t = null;
		const _arrayValueg0VM5su = undefined;
		const _returnValueuJ0WJh = true;
		const _arrayValueAqVtypU = () => { return _returnValueuJ0WJh };
		const _arrayValueM41SMNc = -3.031001882185244;
		const _arrayValueG83tVNx = 9.082076833554062;
		const _arrayValuehzlVt3J = "b2OfWKUWpD4DrOoMo1Ry7OtncrgOGLXnCUUWCQaKKG91wktUmAasxt01OGDfNJ2t3tdB";
		const _arrayValueIGuoWb = [_arrayValueAqVtypU, _arrayValueM41SMNc, _arrayValueG83tVNx, _arrayValuehzlVt3J]
		const _arrayValueZfpc4Od = null;
		const _arrayValueJW3LwQZ = {
		
	}
		const _envVarFAauznX = [_arrayValueg0VM5su, _arrayValueIGuoWb, _arrayValueZfpc4Od, _arrayValueJW3LwQZ]
		const _descriptionAReGMkj = undefined;
		const _optionFMw89bK = {
			"argChoices": _argChoicesvDQwiCu,
		"negate": _negated7AWXwG,
		"defaultValue": _defaultValueWwekgxm,
		"defaultValueDescription": _defaultValueDescriptionR7IUE1t,
		"envVar": _envVarFAauznX,
		"description": _descriptionAReGMkj
	}
		const _returnValues0ozqWS = await _HelpPLYZTEv.optionDescription(_optionFMw89bK)
	});

	it('test for Help', async () => {
		const _HelpRhFb2Cx = new Help()
		const _argChoicesiWKKLSF = {
		
	}
		const _negatehZjaWh = {
		
	}
		const _defaultValueWRTgKUj = undefined;
		const _arrayValues48wtGs = null;
		const _arrayValueZ72P02L = null;
		const _defaultValueDescriptionbnQsYo = [_arrayValues48wtGs, _arrayValueZ72P02L]
		const _envVarc9Ln23K = null;
		const _descriptionHDGPja8 = false;
		const _optionYDnHMNp = {
			"argChoices": _argChoicesiWKKLSF,
		"negate": _negatehZjaWh,
		"defaultValue": _defaultValueWRTgKUj,
		"defaultValueDescription": _defaultValueDescriptionbnQsYo,
		"envVar": _envVarc9Ln23K,
		"description": _descriptionHDGPja8
	}
		const _returnValueoushzbH = await _HelpRhFb2Cx.optionDescription(_optionYDnHMNp)
		const __argsDescriptioncVPbKZf = {
		
	}
		const _arrayValuen097nCb = "T53CMvV8jpg85IkHhIjc2Q3IquJkcUq7hDncU5caGOUeK0gy8JwWlrgo";
		const _arrayValueDZksztb = 1.7881382539463289;
		const _arrayValuelPNCFCF = -5.798516649079554;
		const _arrayValueTCLtpbs = []
		const __argsTndK967 = [_arrayValuen097nCb, _arrayValueDZksztb, _arrayValuelPNCFCF, _arrayValueTCLtpbs]
		const _cmdSLEwXZS = {
			"_argsDescription": __argsDescriptioncVPbKZf,
		"_args": __argsTndK967
	}
		const _returnValueULylfDO = await _HelpRhFb2Cx.visibleArguments(_cmdSLEwXZS)
		const _cmdymlJLbW = 2.843559201969283;
		const _arrayValuenjC6YDR = []
		const _arrayValueJpSQrJw = true;
		const _arrayValueRDdB8X6 = undefined;
		const _returnValueEscqg1d = [_arrayValuenjC6YDR, _arrayValueJpSQrJw, _arrayValueRDdB8X6]
		const _visibleOptionss71pwsp = () => { return _returnValueEscqg1d };
		const _returnValueFwvg12 = "3WdMJNVHk0Gh5rUl4AYlzK834prW0FPiFJjYDzKeMMvTb3U7ijRUrQXT63mlvXApjBZnRzV9AR";
		const _optionTermKpZ4gEi = () => { return _returnValueFwvg12 };
		const _helperx9e6iz = {
			"visibleOptions": _visibleOptionss71pwsp,
		"optionTerm": _optionTermKpZ4gEi
	}
		const _returnValueF9OYlYJ = await _HelpRhFb2Cx.longestOptionTermLength(_cmdymlJLbW, _helperx9e6iz)
	});

	it('test for Help', async () => {
		const _HelpU0dBmVo = new Help()
		const _returnValueR7fPH2B = undefined;
		const _matchzjSaF8f = () => { return _returnValueR7fPH2B };
		const _returnValueHlNYSqt = 9.489591466546734;
		const _substrKVevhsI = () => { return _returnValueHlNYSqt };
		const _strzcMBE1R = {
			"match": _matchzjSaF8f,
		"substr": _substrKVevhsI
	}
		const _widthfU7xsyt = -0.2942865003572823;
		const _indentuHy18gx = 7.268973314475364;
		const _minColumnWidthlKjCtQI = -1.0648060452239818;
		const _returnValueCkI04ii = await _HelpU0dBmVo.wrap(_strzcMBE1R, _widthfU7xsyt, _indentuHy18gx, _minColumnWidthlKjCtQI)
		const _returnValuearv42zT = null;
		const _returnValuezxZSZ50 = () => { return _returnValuearv42zT };
		const _cmdvf2GPB = () => { return _returnValuezxZSZ50 };
		const _sortSubcommandsjpUZaYT = undefined;
		const _returnValueIvZukyz = -6.755098369198288;
		const _subcommandTermCicj9eQ = () => { return _returnValueIvZukyz };
		const _helpertvw0nqs = {
			"sortSubcommands": _sortSubcommandsjpUZaYT,
		"subcommandTerm": _subcommandTermCicj9eQ
	}
		const _returnValueg7ZVey7 = await _HelpU0dBmVo.longestSubcommandTermLength(_cmdvf2GPB, _helpertvw0nqs)
	});

	it('test for Help', async () => {
		const _HelpQLusBlX = new Help()
		const _arrayValueNOk9KSY = -9.718869624389402;
		const _arrayValueC83IuZr = false;
		const _arrayValueEt8anbL = null;
		const _arrayValueVHVfKhC = [_arrayValueC83IuZr, _arrayValueEt8anbL]
		const _arrayValuegkMsHw8 = [_arrayValueNOk9KSY, _arrayValueVHVfKhC]
		const _argChoicesY38FEEx = [_arrayValuegkMsHw8]
		const _defaultValueeUzaYm = undefined;
		const _defaultValueDescriptionRVRP6IG = null;
		const _descriptionlBbO4K = 3.8041677931004045;
		const _argumentsBx57qG = {
			"argChoices": _argChoicesY38FEEx,
		"defaultValue": _defaultValueeUzaYm,
		"defaultValueDescription": _defaultValueDescriptionRVRP6IG,
		"description": _descriptionlBbO4K
	}
		const _returnValuerfQ5633 = await _HelpQLusBlX.argumentDescription(_argumentsBx57qG)
		const _argChoiceseNIkMmv = {
		
	}
		const _defaultValuevaZeqQG = undefined;
		const _defaultValueDescriptionu1PDqcx = null;
		const _descriptionSzvXyF = null;
		const _argumentR1Qdn0n = {
			"argChoices": _argChoiceseNIkMmv,
		"defaultValue": _defaultValuevaZeqQG,
		"defaultValueDescription": _defaultValueDescriptionu1PDqcx,
		"description": _descriptionSzvXyF
	}
		const _returnValuevhc4NHo = await _HelpQLusBlX.argumentDescription(_argumentR1Qdn0n)
		const __argsDescriptionBqli8o = false;
		const __argsGg9R8p9 = {
		
	}
		const _cmdrXAZR88 = {
			"_argsDescription": __argsDescriptionBqli8o,
		"_args": __argsGg9R8p9
	}
		const _returnValueM3VNtPd = await _HelpQLusBlX.visibleArguments(_cmdrXAZR88)
		const _optionsAjMwiu1 = {
		
	}
		const __hasHelpOptionBDliL6f = -0.3363613350014649;
		const __helpShortFlagUKIlaza = {
		
	}
		const _returnValuez6Yd7T = undefined;
		const __findOptionJXzXMxi = () => { return _returnValuez6Yd7T };
		const _returnValueRFm9Apu = undefined;
		const __helpLongFlagiE7mbQ = () => { return _returnValueRFm9Apu };
		const _returnValueW2Dbduh = "SxJbwfSIF52YMsBvi7HLx7NLBI9swCEu";
		const _createOptionuduNorV = () => { return _returnValueW2Dbduh };
		const __helpDescriptionaHrzitO = undefined;
		const _arrayValueV8xtPCS = undefined;
		const __helpFlagsUbGgG88 = [_arrayValueV8xtPCS]
		const _cmdYmekIza = {
			"options": _optionsAjMwiu1,
		"_hasHelpOption": __hasHelpOptionBDliL6f,
		"_helpShortFlag": __helpShortFlagUKIlaza,
		"_findOption": __findOptionJXzXMxi,
		"_helpLongFlag": __helpLongFlagiE7mbQ,
		"createOption": _createOptionuduNorV,
		"_helpDescription": __helpDescriptionaHrzitO,
		"_helpFlags": __helpFlagsUbGgG88
	}
		const _returnValuey0fPXHM = await _HelpQLusBlX.visibleOptions(_cmdYmekIza)
		const _returnValueNmlcoNe = "t1c6KjscKA";
		const _descriptionaRLHG9W = () => { return _returnValueNmlcoNe };
		const _cmdF74X0ER = {
			"description": _descriptionaRLHG9W
	}
		const _returnValueT0oM9xe = await _HelpQLusBlX.commandDescription(_cmdF74X0ER)
	});

	it('test for Help', async () => {
		const _HelpVXGsL9 = new Help()
		const _returnValueVPSjN6F = 9.11915915127399;
		const _flags698oC4 = () => { return _returnValueVPSjN6F };
		const _optionyKOCycU = {
			"flags": _flags698oC4
	}
		const _returnValueuG9Gzam = await _HelpVXGsL9.optionTerm(_optionyKOCycU)
		const _returnValuesmSoj9E = null;
		const _descriptionvSyoUPg = () => { return _returnValuesmSoj9E };
		const _cmdtkhgHPP = {
			"description": _descriptionvSyoUPg
	}
		const _returnValueuNiNdai = await _HelpVXGsL9.commandDescription(_cmdtkhgHPP)
		const _argChoicesssGrZF6 = null;
		const _defaultValuebFvjBty = undefined;
		const _defaultValueDescriptionBZ5ek4S = "nkiMFkREmk6IupjvqC8uMNmwWxQK5KAUOp";
		const _descriptionfXSRA6 = 5.316564401289625;
		const _argument5ePWqU = {
			"argChoices": _argChoicesssGrZF6,
		"defaultValue": _defaultValuebFvjBty,
		"defaultValueDescription": _defaultValueDescriptionBZ5ek4S,
		"description": _descriptionfXSRA6
	}
		const _returnValuesIHuKCS = await _HelpVXGsL9.argumentDescription(_argument5ePWqU)
	});

	it('test for Help', async () => {
		const _HelpBZezQ5X = new Help()
		const _argChoicesnrhqBT = {
		
	}
		const _negateH82JwUF = "wGb6l3cfwdi0m3aH3wWAA0FBfrTe7NkLBwadVrBiIUAVr8QuSFjz1Oswgy9AyqYgEKzAFORvL7dSu";
		const _defaultValueR2UiF6q = undefined;
		const _defaultValueDescriptionQDWSIeZ = "iI7H8KphHCmpLWFLb6I14CCAvAqyMuVTWJPWfKGnBTFPvxVqwyVt2SvlJCnKOHjkLedIJAUDTjMycBdqrSmDztiMUcRD";
		const _envVarBYXld9y = undefined;
		const _arrayValueHdgT9W = []
		const _arrayValuecls5x84 = undefined;
		const _arrayValueD7ZQDS = null;
		const _arrayValuejWgTk0w = [_arrayValueHdgT9W, _arrayValuecls5x84, _arrayValueD7ZQDS]
		const _arrayValueUeeA0kF = true;
		const _arrayValuezGi7LnF = null;
		const _arrayValuet5Eve8e = [_arrayValuezGi7LnF]
		const _arrayValuefkrFMu6 = null;
		const _descriptionGQqKzVB = [_arrayValuejWgTk0w, _arrayValueUeeA0kF, _arrayValuet5Eve8e, _arrayValuefkrFMu6]
		const _optionxf2Ktr5 = {
			"argChoices": _argChoicesnrhqBT,
		"negate": _negateH82JwUF,
		"defaultValue": _defaultValueR2UiF6q,
		"defaultValueDescription": _defaultValueDescriptionQDWSIeZ,
		"envVar": _envVarBYXld9y,
		"description": _descriptionGQqKzVB
	}
		const _returnValuefXALXn = await _HelpBZezQ5X.optionDescription(_optionxf2Ktr5)
		const _cmdQCFELj8 = "j";
		const _returnValuerB3lsM0 = null;
		const _longestOptionTermLengthnE5v967 = () => { return _returnValuerB3lsM0 };
		const _returnValueOVdCZbP = undefined;
		const _longestSubcommandTermLengthdqVEfmX = () => { return _returnValueOVdCZbP };
		const _returnValueNt31k5J = "uKCEWc8UfBdi";
		const _longestArgumentTermLengthaos0ag = () => { return _returnValueNt31k5J };
		const _helperdYm25ej = {
			"longestOptionTermLength": _longestOptionTermLengthnE5v967,
		"longestSubcommandTermLength": _longestSubcommandTermLengthdqVEfmX,
		"longestArgumentTermLength": _longestArgumentTermLengthaos0ag
	}
		const _returnValueUpILq5n = await _HelpBZezQ5X.padWidth(_cmdQCFELj8, _helperdYm25ej)
		const _cmdcGmNKR = null;
		const _returnValueJROEfsD = "goxD1WGjn2EaLEtCTJvVLdM9qJgCVMSJWMbDN2fElbp2kONXl37xb94r71nThNjPQK6hRSjHMqjtB3WTxJ";
		const _longestOptionTermLengthNHitYOQ = () => { return _returnValueJROEfsD };
		const _returnValueHRxu4BV = undefined;
		const _longestSubcommandTermLengthmIlS8nG = () => { return _returnValueHRxu4BV };
		const _arrayValueHSjLECw = undefined;
		const _arrayValueBlwV3I7 = "2RtkGLKUm8WQSfv42mqL5M6";
		const _arrayValueGFvEceB = undefined;
		const _arrayValueoe4t3a = null;
		const _arrayValueexrggQ0 = [_arrayValueBlwV3I7, _arrayValueGFvEceB, _arrayValueoe4t3a]
		const _arrayValueJ65Usrz = [_arrayValueexrggQ0]
		const _arrayValuey8ccjh = "Nk2vcNRDLRI6gvPAETQX4YIQ2SCSsL0BY40";
		const _arrayValuehAafy5l = "rx8acgMcSHIs6RvHUTLyRaFncbbHlkG0Q28vvjC9Uzjbe5jiMOzKSaB1jhANGSLwnWbTXC4NHFZz";
		const _arrayValueIswMJCe = [_arrayValuehAafy5l]
		const _arrayValueEaz9oQi = "5eepCen3ZizxuT7CcUTBY0nidx0IgeeITyf9fczNS";
		const _arrayValueDFsAgnk = 6.703526939481083;
		const _returnValueirAcYjV = [_arrayValueEaz9oQi, _arrayValueDFsAgnk]
		const _arrayValueEDuwuhZ = () => { return _returnValueirAcYjV };
		const _returnValueCQ7l7f3 = [_arrayValueHSjLECw, _arrayValueJ65Usrz, _arrayValuey8ccjh, _arrayValueIswMJCe, _arrayValueEDuwuhZ]
		const _longestArgumentTermLengthp0LdvI = () => { return _returnValueCQ7l7f3 };
		const _helperzgfJVog = {
			"longestOptionTermLength": _longestOptionTermLengthNHitYOQ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthmIlS8nG,
		"longestArgumentTermLength": _longestArgumentTermLengthp0LdvI
	}
		const _returnValueA3bkHe = await _HelpBZezQ5X.padWidth(_cmdcGmNKR, _helperzgfJVog)
		const _argChoicesGZ7Pi0P = null;
		const _defaultValueISqOyVh = true;
		const _defaultValueDescriptionYspPii8 = "Fj1aK0RVueuszh3tWCbOBjTYm9Am5slsyeBbOenfj8z5ORS8tCyqSVOxWLh13JnnqGrjCQbVsGK54rSCORtXb0AubrP9O";
		const _description7dVFkt = true;
		const _argumentfY0tOy = {
			"argChoices": _argChoicesGZ7Pi0P,
		"defaultValue": _defaultValueISqOyVh,
		"defaultValueDescription": _defaultValueDescriptionYspPii8,
		"description": _description7dVFkt
	}
		const _returnValuedM6GheT = await _HelpBZezQ5X.argumentDescription(_argumentfY0tOy)
	});

	it('test for Help', async () => {
		const _HelpThHXarN = new Help()
		const _arrayValueKoe47LX = []
		const _commandsbRfBl3E = [_arrayValueKoe47LX]
		const _returnValueiTIoOLE = {
		
	}
		const __hasImplicitHelpCommandni5WZvI = () => { return _returnValueiTIoOLE };
		const __helpCommandnameAndArgskjRFea0 = {
		
	}
		const _returnValuec8gF80n = -5.260899903915207;
		const _createCommandwHPezld = () => { return _returnValuec8gF80n };
		const __helpCommandDescriptionXO0fCFj = -9.690163658362522;
		const _cmd9U2Cco = {
			"commands": _commandsbRfBl3E,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandni5WZvI,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgskjRFea0,
		"createCommand": _createCommandwHPezld,
		"_helpCommandDescription": __helpCommandDescriptionXO0fCFj
	}
		const _returnValueFcAJvTB = await _HelpThHXarN.visibleCommands(_cmd9U2Cco)
		const _optionsFRwS5w9 = false;
		const __hasHelpOptionDFeBYSI = null;
		const _arrayValueKASQ8c2 = null;
		const _arrayValuefEyU3Kz = undefined;
		const _arrayValueL6LF7Mc = null;
		const _arrayValueDSy8pvV = [_arrayValueKASQ8c2, _arrayValuefEyU3Kz, _arrayValueL6LF7Mc]
		const _arrayValueBHQpvlz = {
		
	}
		const __helpShortFlagshYVmDA = [_arrayValueDSy8pvV, _arrayValueBHQpvlz]
		const _returnValueOPQ79qz = null;
		const __findOptiontEGkue0 = () => { return _returnValueOPQ79qz };
		const __helpLongFlagliWnnJR = -3.078734809076378;
		const _arrayValuecpqZfQq = []
		const _returnValueWye8qLa = "Bj0sE0hvuOsNn5PK";
		const _arrayValueF68wRlH = () => { return _returnValueWye8qLa };
		const _arrayValueWPuz0k = false;
		const _arrayValuekzsP3O = -1.4380420837260584;
		const _arrayValuej0rkEK = [_arrayValueWPuz0k, _arrayValuekzsP3O]
		const _returnValueM9qYifb = [_arrayValuecpqZfQq, _arrayValueF68wRlH, _arrayValuej0rkEK]
		const _createOptionca1u2Vx = () => { return _returnValueM9qYifb };
		const __helpDescriptionxIDcWjJ = false;
		const __helpFlagslVXSS0Y = true;
		const _cmdIi1i0Md = {
			"options": _optionsFRwS5w9,
		"_hasHelpOption": __hasHelpOptionDFeBYSI,
		"_helpShortFlag": __helpShortFlagshYVmDA,
		"_findOption": __findOptiontEGkue0,
		"_helpLongFlag": __helpLongFlagliWnnJR,
		"createOption": _createOptionca1u2Vx,
		"_helpDescription": __helpDescriptionxIDcWjJ,
		"_helpFlags": __helpFlagslVXSS0Y
	}
		const _returnValueywrEFF = await _HelpThHXarN.visibleOptions(_cmdIi1i0Md)
	});

	it('test for Help', async () => {
		const _HelpckX57sy = new Help()
		const _returnValuedf5Pe9a = "fhPq";
		const _descriptionPd8YLql = () => { return _returnValuedf5Pe9a };
		const _cmdzg7QGlb = {
			"description": _descriptionPd8YLql
	}
		const _returnValuenQKepII = await _HelpckX57sy.subcommandDescription(_cmdzg7QGlb)
		const _argChoicesQjdU0EP = null;
		const _negateSYLYDxg = undefined;
		const _defaultValuekAzqBqK = null;
		const _arrayValueBay4zVX = "fflULjgeEWMlh5pXoV2iizmIjNa5gtl2QpV4VKnHhK7tJ";
		const _arrayValueQCUI9WF = null;
		const _returnValueaDaL7Wf = null;
		const _arrayValuerimJ97n = () => { return _returnValueaDaL7Wf };
		const _defaultValueDescriptionyWpq0fp = [_arrayValueBay4zVX, _arrayValueQCUI9WF, _arrayValuerimJ97n]
		const _envVariSlInCK = undefined;
		const _arrayValueOcB3o9i = "TIUMA8H9w6OoC3yPCCjifLpABVBQcAzVSov9wSkVqWTqJI2";
		const _descriptionOGLwmM = [_arrayValueOcB3o9i]
		const _optionFUELSZc = {
			"argChoices": _argChoicesQjdU0EP,
		"negate": _negateSYLYDxg,
		"defaultValue": _defaultValuekAzqBqK,
		"defaultValueDescription": _defaultValueDescriptionyWpq0fp,
		"envVar": _envVariSlInCK,
		"description": _descriptionOGLwmM
	}
		const _returnValueL4ISsS = await _HelpckX57sy.optionDescription(_optionFUELSZc)
		const _cmdtRILYE = true;
		const _returnValueHBBhSl = await _HelpckX57sy.visibleOptions(_cmdtRILYE)
		const _cmdZQR7b7r = "KmAsrpUaHgdbg1TCB535gCGe6uiR2eTUvbPGy5lxlJaeYSUHNlsS8WnqrNI8773ifUbNMbVOXQD";
		const _arrayValueOZXUs9n = "VZjGFAOmp3QWDHRsClLc4dbv4cn7sOmTqyLpjR15EMPKUUR82Pz6C5I";
		const _returnValueu6LMhsP = [_arrayValueOZXUs9n]
		const _visibleArgumentsXgOUcn3 = () => { return _returnValueu6LMhsP };
		const _returnValueISlMEJ = "F6ascyuiL4uGFCcDDMhDEzACvdrqLhkWBk6XF7AVoYcndtdzIarrw";
		const _argumentTermnlROqHK = () => { return _returnValueISlMEJ };
		const _helperXa3Kz4V = {
			"visibleArguments": _visibleArgumentsXgOUcn3,
		"argumentTerm": _argumentTermnlROqHK
	}
		const _returnValuehQeTjD = await _HelpckX57sy.longestArgumentTermLength(_cmdZQR7b7r, _helperXa3Kz4V)
	});
})