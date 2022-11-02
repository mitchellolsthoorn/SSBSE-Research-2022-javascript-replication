export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpfr1Qbn6 = new Help()
		const __namenkbHdea = {
		
	}
		const __aliasesOVyEBIK = {
		
	}
		const _parente2DbK6 = {
		
	}
		const _returnValue3dsvU7 = "bPgffZbi1qVnPn";
		const _usageoplrvJf = () => { return _returnValue3dsvU7 };
		const _cmdRzIfERM = {
			"_name": __namenkbHdea,
		"_aliases": __aliasesOVyEBIK,
		"parent": _parente2DbK6,
		"usage": _usageoplrvJf
	}
		const _returnValueQBWRQXm = await _Helpfr1Qbn6.commandUsage(_cmdRzIfERM)
	});

	it('test for Help', async () => {
		const _Helpo0cf4GD = new Help()
		const _cmdxUZ3dJX = true;
		const _returnValueAp58Tji = "6IakeQ6ezDGoF2lmLSKUWUP1jfiXUDj2b";
		const _visibleOptionsSB4ogXe = () => { return _returnValueAp58Tji };
		const _returnValuepYc89n6 = undefined;
		const _optionTermI4TsOEr = () => { return _returnValuepYc89n6 };
		const _helperR2z5qTW = {
			"visibleOptions": _visibleOptionsSB4ogXe,
		"optionTerm": _optionTermI4TsOEr
	}
		const _returnValueIRkK6GF = await _Helpo0cf4GD.longestOptionTermLength(_cmdxUZ3dJX, _helperR2z5qTW)
		const _returnValueTN3D3sY = -8.26242878718276;
		const _flagswNzjTeh = () => { return _returnValueTN3D3sY };
		const _optionkXWWDmB = {
			"flags": _flagswNzjTeh
	}
		const _returnValuey5e3CwR = await _Helpo0cf4GD.optionTerm(_optionkXWWDmB)
		const __argsDescriptiondCQVcrc = {
		
	}
		const __argsIASzGI = {
		
	}
		const _cmdJcTu8ps = {
			"_argsDescription": __argsDescriptiondCQVcrc,
		"_args": __argsIASzGI
	}
		const _returnValuepQlvs9S = await _Helpo0cf4GD.visibleArguments(_cmdJcTu8ps)
	});

	it('test for Help', async () => {
		const _HelpQdlIjMj = new Help()
		const _cmdRFeUuBD = -1.8113379221830872;
		const _returnValues9AjcUC = null;
		const _longestOptionTermLengthcRXBXnS = () => { return _returnValues9AjcUC };
		const _returnValueEiQtwAe = "ofG1xCZn712iBKSGdb7bXUOjvapYeaOndXrz6N3XrDoP1AOD6igB7kuStwcOhEPA5irmDYniBxaw9pCHVDboRI9TiTB6T5CdNC";
		const _longestSubcommandTermLengthZYfrc2P = () => { return _returnValueEiQtwAe };
		const _returnValueifreAjc = true;
		const _longestArgumentTermLengthqpbwDpY = () => { return _returnValueifreAjc };
		const _helpermcFvar = {
			"longestOptionTermLength": _longestOptionTermLengthcRXBXnS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthZYfrc2P,
		"longestArgumentTermLength": _longestArgumentTermLengthqpbwDpY
	}
		const _returnValueZx0VTVQ = await _HelpQdlIjMj.padWidth(_cmdRFeUuBD, _helpermcFvar)
		const _matchVCSxvjD = {
		
	}
		const _returnValueUnCDHFf = {
		
	}
		const _substrZqHlMkX = () => { return _returnValueUnCDHFf };
		const _strk4ra6hl = {
			"match": _matchVCSxvjD,
		"substr": _substrZqHlMkX
	}
		const _widthQ5NnDib = 5.904876825794398;
		const _indentZOG09uY = -4.145532262605872;
		const _minColumnWidthVMmYNl = 5.397950986215465;
		const _returnValueBmBkmL0 = await _HelpQdlIjMj.wrap(_strk4ra6hl, _widthQ5NnDib, _indentZOG09uY, _minColumnWidthVMmYNl)
		const _arrayValueLAlc21t = "sJhUquXKEjaun6lCALedWjxwGKChyGYcicGVDu7wcVM9hFXlC4x6N8CC8ibblugO7X1J9C";
		const _flagsNOrZPUF = [_arrayValueLAlc21t]
		const _optionLjYD2Ft = {
			"flags": _flagsNOrZPUF
	}
		const _returnValueACvfzY = await _HelpQdlIjMj.optionTerm(_optionLjYD2Ft)
		const _flagsrGqD90W = true;
		const _optionUGQYolL = {
			"flags": _flagsrGqD90W
	}
		const _returnValueJ16DPGf = await _HelpQdlIjMj.optionTerm(_optionUGQYolL)
	});

	it('test for Help', async () => {
		const _Helpvs9s4B5 = new Help()
		const _returnValuemZPxZIx = "kKrPEzug78mzaS4DSJe9TuaitVXKxlkef2FADn4ayknmPo7nFLtjhRsN5L";
		const _descriptionXkU7j4G = () => { return _returnValuemZPxZIx };
		const _cmdxweLMQ = {
			"description": _descriptionXkU7j4G
	}
		const _returnValuejl7qNZG = await _Helpvs9s4B5.subcommandDescription(_cmdxweLMQ)
		const _returnValueqKADUWT = {
		
	}
		const _arrayValueA7FjMs = () => { return _returnValueqKADUWT };
		const _arrayValue1OPQGH = -3.6616373010554994;
		const _arrayValueyZLjHIX = undefined;
		const _arrayValuehAHAmiw = false;
		const _arrayValuebQJZ7xL = 4.023842943425253;
		const _arrayValue2RaNAc = [_arrayValuebQJZ7xL]
		const _arrayValueZOTOOKF = [_arrayValuehAHAmiw, _arrayValue2RaNAc]
		const _cmdSn9vxOj = [_arrayValueA7FjMs, _arrayValue1OPQGH, _arrayValueyZLjHIX, _arrayValueZOTOOKF]
		const _sortSubcommandsrRAlcPC = undefined;
		const _returnValueKPid5iR = null;
		const _returnValuegFk8VJy = () => { return _returnValueKPid5iR };
		const _subcommandTermaTqBeY7 = () => { return _returnValuegFk8VJy };
		const _helperTv6Cgc8 = {
			"sortSubcommands": _sortSubcommandsrRAlcPC,
		"subcommandTerm": _subcommandTermaTqBeY7
	}
		const _returnValueG08wW4p = await _Helpvs9s4B5.longestSubcommandTermLength(_cmdSn9vxOj, _helperTv6Cgc8)
	});

	it('test for Help', async () => {
		const _HelpldYkyaW = new Help()
		const _optionyjwWRZ = -8.427774108904606;
		const _returnValuefFPtaNc = await _HelpldYkyaW.optionDescription(_optionyjwWRZ)
		const _commandsTuZriB2 = {
		
	}
		const _returnValueHWTNzX6 = "2emURBNSd0MAO0gGjQNHPIyS7h";
		const _returnValueNOZNEsz = () => { return _returnValueHWTNzX6 };
		const __hasImplicitHelpCommandZujECX = () => { return _returnValueNOZNEsz };
		const __helpCommandnameAndArgsrfN8g5d = {
		
	}
		const _returnValuemqfbMbk = undefined;
		const _createCommandpBcG9F = () => { return _returnValuemqfbMbk };
		const __helpCommandDescriptionKsz80G = -2.3095221857404553;
		const _cmdv8wCbef = {
			"commands": _commandsTuZriB2,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandZujECX,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsrfN8g5d,
		"createCommand": _createCommandpBcG9F,
		"_helpCommandDescription": __helpCommandDescriptionKsz80G
	}
		const _returnValueei6XgwK = await _HelpldYkyaW.visibleCommands(_cmdv8wCbef)
		const __nameiIDryEF = {
		
	}
		const __aliasesInPaQfR = -6.0849789775025;
		const _parentRjmZge3 = {
		
	}
		const _returnValueL62DwW = true;
		const _usagekE1hkHg = () => { return _returnValueL62DwW };
		const _cmdNKvMHlB = {
			"_name": __nameiIDryEF,
		"_aliases": __aliasesInPaQfR,
		"parent": _parentRjmZge3,
		"usage": _usagekE1hkHg
	}
		const _returnValuezabIOaK = await _HelpldYkyaW.commandUsage(_cmdNKvMHlB)
	});

	it('test for Help', async () => {
		const _HelpXZxxxUn = new Help()
		const _argChoicesRQlnB7 = {
		
	}
		const _defaultValuewjFADcJ = undefined;
		const _defaultValueDescriptionm6bE7QK = false;
		const _descriptionsR2tkHK = true;
		const _argumentPye57ZR = {
			"argChoices": _argChoicesRQlnB7,
		"defaultValue": _defaultValuewjFADcJ,
		"defaultValueDescription": _defaultValueDescriptionm6bE7QK,
		"description": _descriptionsR2tkHK
	}
		const _returnValuevtu9E4D = await _HelpXZxxxUn.argumentDescription(_argumentPye57ZR)
		const _cmdLAX4n0r = null;
		const _sortSubcommandsGlQUOdD = "6siCVOapDVh37iqvZUewhTe3ywC8zFPaBHuNIhLES2kuTi5vCMlP5iLtuuzYMLyYKEYvyUrH7VpgSTiTQST5L6G2Rjsap";
		const _arrayValuex8OglAV = -7.631510318605752;
		const _subcommandTermJGI1y0 = [_arrayValuex8OglAV]
		const _helper2NXORU = {
			"sortSubcommands": _sortSubcommandsGlQUOdD,
		"subcommandTerm": _subcommandTermJGI1y0
	}
		const _returnValuetlEO8DH = await _HelpXZxxxUn.formatHelp(_cmdLAX4n0r, _helper2NXORU)
		const _arrayValueZmVbLKy = true;
		const _flagsXtPV7hJ = [_arrayValueZmVbLKy]
		const _optioneXhWH40 = {
			"flags": _flagsXtPV7hJ
	}
		const _returnValueEjlcAe0 = await _HelpXZxxxUn.optionTerm(_optioneXhWH40)
	});

	it('test for Help', async () => {
		const _HelpA2fJB1 = new Help()
		const _cmdkNLNHIi = null;
		const _sortSubcommandsVXWN90o = undefined;
		const _returnValue5ewjUa = -2.793717095396321;
		const _subcommandTermZhRrGuv = () => { return _returnValue5ewjUa };
		const _helperjNZSxx0 = {
			"sortSubcommands": _sortSubcommandsVXWN90o,
		"subcommandTerm": _subcommandTermZhRrGuv
	}
		const _returnValueszAKiLv = await _HelpA2fJB1.formatHelp(_cmdkNLNHIi, _helperjNZSxx0)
		const __argsDescriptionkHqZpv = {
		
	}
		const __args4qF5Wx = {
		
	}
		const _cmdS63x5aG = {
			"_argsDescription": __argsDescriptionkHqZpv,
		"_args": __args4qF5Wx
	}
		const _returnValuew8btMbR = await _HelpA2fJB1.visibleArguments(_cmdS63x5aG)
		const _argChoicesaOb2OpP = {
		
	}
		const _negateq1tFhlh = null;
		const _defaultValueLWCPQi = undefined;
		const _defaultValueDescriptionvN1Et3h = "SPDRcVajCv6djtkwnKJeY9afeLg1AYDiiICS1PVRHl7Yo7NFTcVJ3J1cObVfh0LHmY7gqF9rExlSrZYjLhQKL8UNMtI14";
		const _envVarQBpKps3 = undefined;
		const _descriptioncjb7RTW = undefined;
		const _optionvDITNb = {
			"argChoices": _argChoicesaOb2OpP,
		"negate": _negateq1tFhlh,
		"defaultValue": _defaultValueLWCPQi,
		"defaultValueDescription": _defaultValueDescriptionvN1Et3h,
		"envVar": _envVarQBpKps3,
		"description": _descriptioncjb7RTW
	}
		const _returnValueJfK7uVI = await _HelpA2fJB1.optionDescription(_optionvDITNb)
	});

	it('test for Help', async () => {
		const _HelpH9tNdHp = new Help()
		const _optionshYZNLIf = {
		
	}
		const __hasHelpOptionYS8y9h = 3.3074521960543137;
		const _returnValueS9tcmo = {
		
	}
		const _arrayValuefrpQs3A = () => { return _returnValueS9tcmo };
		const _arrayValue27jYFA = null;
		const _arrayValueUPd3rjD = false;
		const _arrayValueWO1j5EM = [_arrayValueUPd3rjD]
		const __helpShortFlagMqFLPoj = [_arrayValuefrpQs3A, _arrayValue27jYFA, _arrayValueWO1j5EM]
		const _returnValuez9e54Q = undefined;
		const __findOptionnrBcm2A = () => { return _returnValuez9e54Q };
		const __helpLongFlagEGfw3mg = undefined;
		const _returnValueu42Ok5F = true;
		const _createOptione9lAGaf = () => { return _returnValueu42Ok5F };
		const _arrayValueHxQ0rEf = 8.88630064767569;
		const _arrayValuevUFyLgh = {
		
	}
		const __helpDescriptionoxi0tCP = [_arrayValueHxQ0rEf, _arrayValuevUFyLgh]
		const __helpFlagsVHkC61z = undefined;
		const _cmdgJWFBRk = {
			"options": _optionshYZNLIf,
		"_hasHelpOption": __hasHelpOptionYS8y9h,
		"_helpShortFlag": __helpShortFlagMqFLPoj,
		"_findOption": __findOptionnrBcm2A,
		"_helpLongFlag": __helpLongFlagEGfw3mg,
		"createOption": _createOptione9lAGaf,
		"_helpDescription": __helpDescriptionoxi0tCP,
		"_helpFlags": __helpFlagsVHkC61z
	}
		const _returnValueB9Y0XKq = await _HelpH9tNdHp.visibleOptions(_cmdgJWFBRk)
		const _cmdhRDC1VK = undefined;
		const _sortSubcommandsRlyeaRR = 5.629934622704214;
		const _returnValuen21EGpE = undefined;
		const _subcommandTermoMNli3q = () => { return _returnValuen21EGpE };
		const _helperbsSdwCI = {
			"sortSubcommands": _sortSubcommandsRlyeaRR,
		"subcommandTerm": _subcommandTermoMNli3q
	}
		const _returnValuePrO9Ta = await _HelpH9tNdHp.longestSubcommandTermLength(_cmdhRDC1VK, _helperbsSdwCI)
		const _cmdHfqNjeZ = null;
		const _returnValueJ65zUAo = await _HelpH9tNdHp.visibleArguments(_cmdHfqNjeZ)
		const _optionsDL7Gbe = {
		
	}
		const __hasHelpOptionDSPzz2R = undefined;
		const __helpShortFlagaQmDxhC = "mprNB1HY8pejq7mWH3rWq03y6eaMEeRu644jlrCfxWWarLeacOpOycEZVnrLMOHBM5Jm3FvUlzg63myHmytHpjTa";
		const _returnValuenNBz2BW = "cn8sXMAQcHpe4BGpJUG0WGlXprfGQlcjoMhQX5XdFIHeWgpcVfplO6asI";
		const __findOptionKcoUwjR = () => { return _returnValuenNBz2BW };
		const __helpLongFlagxcu2Qw = true;
		const _returnValueLlS9EJB = []
		const _createOptionsod3oq5 = () => { return _returnValueLlS9EJB };
		const __helpDescriptionB98oTLD = "uoQReRVJ328yt2ji6XEjFPzWn51z";
		const __helpFlagsyPc5vSo = -8.266998020037347;
		const _cmdYrJyhyk = {
			"options": _optionsDL7Gbe,
		"_hasHelpOption": __hasHelpOptionDSPzz2R,
		"_helpShortFlag": __helpShortFlagaQmDxhC,
		"_findOption": __findOptionKcoUwjR,
		"_helpLongFlag": __helpLongFlagxcu2Qw,
		"createOption": _createOptionsod3oq5,
		"_helpDescription": __helpDescriptionB98oTLD,
		"_helpFlags": __helpFlagsyPc5vSo
	}
		const _returnValueGW3ShTV = await _HelpH9tNdHp.visibleOptions(_cmdYrJyhyk)
	});

	it('test for Help', async () => {
		const _Helpe2HZLdI = new Help()
		const _returnValuekk6NLkm = false;
		const _argumentl5mQ4gK = () => { return _returnValuekk6NLkm };
		const _returnValueL5giBFg = await _Helpe2HZLdI.argumentTerm(_argumentl5mQ4gK)
	});

	it('test for Help', async () => {
		const _HelpNDUkfim = new Help()
		const _cmdySKQ3Gh = undefined;
		const _returnValueXT6jiN7 = false;
		const _visibleArgumentsXJwCuxJ = () => { return _returnValueXT6jiN7 };
		const _returnValueQtalmfI = 4.7646870260234735;
		const _argumentTermjLZRmlj = () => { return _returnValueQtalmfI };
		const _helpert3tCyDL = {
			"visibleArguments": _visibleArgumentsXJwCuxJ,
		"argumentTerm": _argumentTermjLZRmlj
	}
		const _returnValueImUTxm4 = await _HelpNDUkfim.longestArgumentTermLength(_cmdySKQ3Gh, _helpert3tCyDL)
		const _optionsPQ89pB0 = {
		
	}
		const __hasHelpOptionyXKEtCy = null;
		const __helpShortFlaghEUADsH = 5.672839211828926;
		const _arrayValuefDG1Lyp = undefined;
		const _returnValuernmFmB = [_arrayValuefDG1Lyp]
		const __findOptionJr7Xnyi = () => { return _returnValuernmFmB };
		const __helpLongFlagaqoNQeK = {
		
	}
		const _returnValuexNXdS9b = 4.477258503742792;
		const _createOptionTvOJo2l = () => { return _returnValuexNXdS9b };
		const __helpDescriptionhgxPTLx = -4.080513160630933;
		const __helpFlagsDy0yhZ6 = true;
		const _cmdQicx9yR = {
			"options": _optionsPQ89pB0,
		"_hasHelpOption": __hasHelpOptionyXKEtCy,
		"_helpShortFlag": __helpShortFlaghEUADsH,
		"_findOption": __findOptionJr7Xnyi,
		"_helpLongFlag": __helpLongFlagaqoNQeK,
		"createOption": _createOptionTvOJo2l,
		"_helpDescription": __helpDescriptionhgxPTLx,
		"_helpFlags": __helpFlagsDy0yhZ6
	}
		const _returnValueroB4XRu = await _HelpNDUkfim.visibleOptions(_cmdQicx9yR)
		const _returnValueQXlOJEb = undefined;
		const _returnValuexuwlYz = () => { return _returnValueQXlOJEb };
		const _descriptionhXbXzuq = () => { return _returnValuexuwlYz };
		const _cmdlxRGGr = {
			"description": _descriptionhXbXzuq
	}
		const _returnValue8LDwj4 = await _HelpNDUkfim.commandDescription(_cmdlxRGGr)
		const _cmdwMQP3L = null;
		const _sortSubcommandsCJlYzht = null;
		const _returnValueyTTpiLr = undefined;
		const _subcommandTermCUJRSzq = () => { return _returnValueyTTpiLr };
		const _helpersPXzWwR = {
			"sortSubcommands": _sortSubcommandsCJlYzht,
		"subcommandTerm": _subcommandTermCUJRSzq
	}
		const _returnValueW0ZVS57 = await _HelpNDUkfim.longestSubcommandTermLength(_cmdwMQP3L, _helpersPXzWwR)
	});

	it('test for Help', async () => {
		const _HelpeFc5WF = new Help()
		const _returnValuezM5aghO = "7947I1aWAr5Ies6DfFTRz";
		const _descriptionpuxsgac = () => { return _returnValuezM5aghO };
		const _cmdf01yPM9 = {
			"description": _descriptionpuxsgac
	}
		const _returnValueJH6UF0w = await _HelpeFc5WF.commandDescription(_cmdf01yPM9)
		const _cmdHgRfg77 = "JrgCMZhKGdgWAgNh16BtfXFvBuJvu9YtPbRzl9XQE7PJbPw1BFzCKl3obw2YnDKoP23MLIzar7ipxz8pU63ApX6";
		const _returnValuevfXR9Jo = null;
		const _longestOptionTermLengthO71SYE7 = () => { return _returnValuevfXR9Jo };
		const _returnValuel4JKZsH = -3.674880458611919;
		const _longestSubcommandTermLengthPGpOW6O = () => { return _returnValuel4JKZsH };
		const _arrayValueFoHuEv0 = "CDUHv6d36z5ES1JfhUSxaBlupIJFvcvivdFS7lvWbFrkEQnXcgnJctmXQnTkW7Xy1W5LTgdIevooYCaUK8AEszgW6eROyW5t8";
		const _arrayValueEpuIoWd = "GbIjE4GH7LDIxL545gtcBPiI5ewrsGgnAiulG4jzQy9Je";
		const _returnValue57kh4K = [_arrayValueFoHuEv0, _arrayValueEpuIoWd]
		const _longestArgumentTermLengthcBLakze = () => { return _returnValue57kh4K };
		const _helperC8SdTCl = {
			"longestOptionTermLength": _longestOptionTermLengthO71SYE7,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPGpOW6O,
		"longestArgumentTermLength": _longestArgumentTermLengthcBLakze
	}
		const _returnValueW4DWX8q = await _HelpeFc5WF.padWidth(_cmdHgRfg77, _helperC8SdTCl)
		const _cmdKmLLI5L = false;
		const _sortSubcommandsrddoQU = undefined;
		const _returnValuewcriFeo = undefined;
		const _subcommandTermPBUvQg = () => { return _returnValuewcriFeo };
		const _helperdfb1zIB = {
			"sortSubcommands": _sortSubcommandsrddoQU,
		"subcommandTerm": _subcommandTermPBUvQg
	}
		const _returnValueqdMRP5w = await _HelpeFc5WF.longestSubcommandTermLength(_cmdKmLLI5L, _helperdfb1zIB)
		const _cmdFkcPBH = 1.628860759759931;
		const _sortSubcommandsZh3dVo4 = false;
		const _returnValuepJvaLen = true;
		const _subcommandTermZ0F3ZLu = () => { return _returnValuepJvaLen };
		const _helperG8v4Ag = {
			"sortSubcommands": _sortSubcommandsZh3dVo4,
		"subcommandTerm": _subcommandTermZ0F3ZLu
	}
		const _returnValueJyM0TY5 = await _HelpeFc5WF.longestSubcommandTermLength(_cmdFkcPBH, _helperG8v4Ag)
		const _argChoicesLgkzAh9 = {
		
	}
		const _defaultValueLTJO9aV = 0.8942494456840642;
		const _arrayValueffDScAC = 3.6874294031383297;
		const _arrayValueVWqfxeD = true;
		const _arrayValueZvuCGW = "MeFlY4sEuJPQf2MOTDhUY1kFcyWSooC623UlW6CHcZwvsQjssx2AumIl";
		const _defaultValueDescriptionC31dKG0 = [_arrayValueffDScAC, _arrayValueVWqfxeD, _arrayValueZvuCGW]
		const _arrayValuePRDXaak = null;
		const _returnValueUl2OLqJ = {
		
	}
		const _arrayValueYOAWTUa = () => { return _returnValueUl2OLqJ };
		const _descriptionC5JraFb = [_arrayValuePRDXaak, _arrayValueYOAWTUa]
		const _argumentnQDNT7r = {
			"argChoices": _argChoicesLgkzAh9,
		"defaultValue": _defaultValueLTJO9aV,
		"defaultValueDescription": _defaultValueDescriptionC31dKG0,
		"description": _descriptionC5JraFb
	}
		const _returnValueHXkxNqv = await _HelpeFc5WF.argumentDescription(_argumentnQDNT7r)
	});

	it('test for Help', async () => {
		const _HelpQtdEPRw = new Help()
		const _returnValueT2en7zW = false;
		const _matchysNiCHu = () => { return _returnValueT2en7zW };
		const _returnValueS4p1F4M = null;
		const _substrmmNCbHu = () => { return _returnValueS4p1F4M };
		const _strsBtKMz0 = {
			"match": _matchysNiCHu,
		"substr": _substrmmNCbHu
	}
		const _widthsFcUiBp = 4.383894436331213;
		const _indentMpvGr3k = -8.1674862994472;
		const _minColumnWidthaiPQK9h = -0.28938005012861545;
		const _returnValue094qCF = await _HelpQtdEPRw.wrap(_strsBtKMz0, _widthsFcUiBp, _indentMpvGr3k, _minColumnWidthaiPQK9h)
		const _flagsoyTQF9g = true;
		const _optionNCyd90z = {
			"flags": _flagsoyTQF9g
	}
		const _returnValuewZyHE5N = await _HelpQtdEPRw.optionTerm(_optionNCyd90z)
		const _flagsP7M7wea = undefined;
		const _optionGbOCAWX = {
			"flags": _flagsP7M7wea
	}
		const _returnValueJiHaoDb = await _HelpQtdEPRw.optionTerm(_optionGbOCAWX)
		const _returnValue0FPWXI = false;
		const _descriptionbDy2aFA = () => { return _returnValue0FPWXI };
		const _cmdMw3VZyG = {
			"description": _descriptionbDy2aFA
	}
		const _returnValuejHM3d52 = await _HelpQtdEPRw.subcommandDescription(_cmdMw3VZyG)
	});

	it('test for Help', async () => {
		const _HelpaON3lFH = new Help()
		const __argsDescriptionIzHkoZ8 = {
		
	}
		const __argsvZehMuK = {
		
	}
		const _cmd1y58IR = {
			"_argsDescription": __argsDescriptionIzHkoZ8,
		"_args": __argsvZehMuK
	}
		const _returnValuek3oahtv = await _HelpaON3lFH.visibleArguments(_cmd1y58IR)
		const _argChoicesaqPoBp = {
		
	}
		const _defaultValuejVwhCMP = undefined;
		const _defaultValueDescriptionnHsKDOK = null;
		const _descriptiondfQzMze = {
		
	}
		const _argumentvsw8cGy = {
			"argChoices": _argChoicesaqPoBp,
		"defaultValue": _defaultValuejVwhCMP,
		"defaultValueDescription": _defaultValueDescriptionnHsKDOK,
		"description": _descriptiondfQzMze
	}
		const _returnValuehHxMqkT = await _HelpaON3lFH.argumentDescription(_argumentvsw8cGy)
		const __argsCiHJDSx = {
		
	}
		const __nameeQ0CN4 = 9.459338702345036;
		const __aliaseszeMeIJT = {
		
	}
		const _optionsCtJq2bl = {
		
	}
		const _cmdOmStjh4 = {
			"_args": __argsCiHJDSx,
		"_name": __nameeQ0CN4,
		"_aliases": __aliaseszeMeIJT,
		"options": _optionsCtJq2bl
	}
		const _returnValueUJQUvzd = await _HelpaON3lFH.subcommandTerm(_cmdOmStjh4)
		const _optionsTKBV1O = {
		
	}
		const __hasHelpOptioneBlRtpj = true;
		const __helpShortFlagC5XLBG9 = "JkGpk4kxSaGnsEZmrJH9vZijtEi0n9FXeP92QWg1NGB5";
		const _returnValuehpITHdV = undefined;
		const __findOptionEBniQ32 = () => { return _returnValuehpITHdV };
		const __helpLongFlagG2ZiVa = true;
		const _returnValuev2Hfud6 = "1P6Kd3LanOO83tr947L6jqxTxx1vhk2Mjei";
		const _createOptionSFeFJbz = () => { return _returnValuev2Hfud6 };
		const _arrayValuet6d1ads = undefined;
		const _arrayValueNU7MNje = "AKadLmUdnvEIkMgGgU0x2UZRWFaVkjzbCsuQFb3IM3QkK94Cg4P7miyCiBmb3oQqVBQKLYIiouL00rbibOaNTZoJdDT6o";
		const __helpDescriptionHiAdpPg = [_arrayValuet6d1ads, _arrayValueNU7MNje]
		const __helpFlagsBzgZXjc = null;
		const _cmdN9Ihmr6 = {
			"options": _optionsTKBV1O,
		"_hasHelpOption": __hasHelpOptioneBlRtpj,
		"_helpShortFlag": __helpShortFlagC5XLBG9,
		"_findOption": __findOptionEBniQ32,
		"_helpLongFlag": __helpLongFlagG2ZiVa,
		"createOption": _createOptionSFeFJbz,
		"_helpDescription": __helpDescriptionHiAdpPg,
		"_helpFlags": __helpFlagsBzgZXjc
	}
		const _returnValuetorgdwk = await _HelpaON3lFH.visibleOptions(_cmdN9Ihmr6)
		const _argChoicesaXfIA9m = {
		
	}
		const _defaultValueS2A7GMd = undefined;
		const _defaultValueDescriptionLZbKoTf = -2.874625352238498;
		const _returnValueDSprrDA = {
		
	}
		const _descriptionMk88dhT = () => { return _returnValueDSprrDA };
		const _argumentDKP4qz = {
			"argChoices": _argChoicesaXfIA9m,
		"defaultValue": _defaultValueS2A7GMd,
		"defaultValueDescription": _defaultValueDescriptionLZbKoTf,
		"description": _descriptionMk88dhT
	}
		const _returnValuepSSzQiz = await _HelpaON3lFH.argumentDescription(_argumentDKP4qz)
	});

	it('test for Help', async () => {
		const _Helpml3Zl17 = new Help()
		const __argsE6QxxzG = {
		
	}
		const __nameLIlKier = -1.4127270519504265;
		const __aliasesg5gwJCj = {
		
	}
		const _optionsEs6I4B5 = {
		
	}
		const _cmdPvzXeSg = {
			"_args": __argsE6QxxzG,
		"_name": __nameLIlKier,
		"_aliases": __aliasesg5gwJCj,
		"options": _optionsEs6I4B5
	}
		const _returnValueuti3xIY = await _Helpml3Zl17.subcommandTerm(_cmdPvzXeSg)
		const _cmdR3qA0UI = true;
		const _returnValueermi0L = undefined;
		const _visibleArgumentsvUsTz5Y = () => { return _returnValueermi0L };
		const _returnValuegnFswKd = "42ZPMj9WYBBfCaN1gnTY6VnL1a44UIJKJzqWUxsCvBgfV66zuk2QnYAaABW4iQdgWthXtIXs1QjKZ5oInlzonwfLvoHjnwNS";
		const _argumentTermJ8PB9Q = () => { return _returnValuegnFswKd };
		const _helperTErwXIW = {
			"visibleArguments": _visibleArgumentsvUsTz5Y,
		"argumentTerm": _argumentTermJ8PB9Q
	}
		const _returnValueYlxHjNa = await _Helpml3Zl17.longestArgumentTermLength(_cmdR3qA0UI, _helperTErwXIW)
		const _argChoiceshzPYheD = {
		
	}
		const _defaultValueAd733dk = undefined;
		const _defaultValueDescriptionAmHywl4 = undefined;
		const _descriptionMdpZc1 = null;
		const _argumentqN9suwW = {
			"argChoices": _argChoiceshzPYheD,
		"defaultValue": _defaultValueAd733dk,
		"defaultValueDescription": _defaultValueDescriptionAmHywl4,
		"description": _descriptionMdpZc1
	}
		const _returnValueNr9w6w9 = await _Helpml3Zl17.argumentDescription(_argumentqN9suwW)
		const _cmdQTmVzYi = false;
		const _arrayValuetJjY7yU = -7.734879140693333;
		const _arrayValueQkXROgY = {
		
	}
		const _returnValuel0wI80P = [_arrayValuetJjY7yU, _arrayValueQkXROgY]
		const _visibleOptionsl6yLqo = () => { return _returnValuel0wI80P };
		const _returnValueywkCrVJ = "JE03HSbyMXT4MxshG7bYpaVjN1DOTy1SfU8pmY2LlaXPFgPl8TAMXW2uUqFk6EftPkBRPsOrCtDdfw1HlcSUzNKGhmQ";
		const _optionTermcVqADa2 = () => { return _returnValueywkCrVJ };
		const _helperd1LCVau = {
			"visibleOptions": _visibleOptionsl6yLqo,
		"optionTerm": _optionTermcVqADa2
	}
		const _returnValuesjulXdX = await _Helpml3Zl17.longestOptionTermLength(_cmdQTmVzYi, _helperd1LCVau)
		const _returnValueRBLrKAK = "IfoWDKNLYeuVHdMqvTcSECXvqnGtJs68Iy8ch3XW8olAwTr5oYnOVd7jnYgpaMY8uu8HpmWQlFLOA8OuxAqo59Apl5VrDRxal2";
		const _descriptionq8EVcHI = () => { return _returnValueRBLrKAK };
		const _cmdxaehNTU = {
			"description": _descriptionq8EVcHI
	}
		const _returnValueHGUWimQ = await _Helpml3Zl17.commandDescription(_cmdxaehNTU)
	});

	it('test for Help', async () => {
		const _HelpSrqxniE = new Help()
		const _returnValueIQJAw0C = -8.520735358292193;
		const _descriptionB6qUCOI = () => { return _returnValueIQJAw0C };
		const _cmdx5YKVA1 = {
			"description": _descriptionB6qUCOI
	}
		const _returnValuebOto6Lo = await _HelpSrqxniE.subcommandDescription(_cmdx5YKVA1)
		const _flagsmyjjIzV = true;
		const _optionwM0OgFn = {
			"flags": _flagsmyjjIzV
	}
		const _returnValuenoV0XDg = await _HelpSrqxniE.optionTerm(_optionwM0OgFn)
		const _cmdtbQLtQV = undefined;
		const _returnValuet5rFcRi = undefined;
		const _sortSubcommandsXsVbbN = () => { return _returnValuet5rFcRi };
		const _returnValueq0hjxvv = "dO5PSGWB22dd9sEH8kQuy7iFwTmEWPaeOqSDA2C1i8";
		const _subcommandTermPR3hdOH = () => { return _returnValueq0hjxvv };
		const _helperfrFP3F0 = {
			"sortSubcommands": _sortSubcommandsXsVbbN,
		"subcommandTerm": _subcommandTermPR3hdOH
	}
		const _returnValuewItpiYA = await _HelpSrqxniE.longestSubcommandTermLength(_cmdtbQLtQV, _helperfrFP3F0)
	});

	it('test for Help', async () => {
		const _Helpef8gDn0 = new Help()
		const _argChoicesvoe7tq = {
		
	}
		const _negateSUtbLjM = null;
		const _defaultValueIbnbZDS = undefined;
		const _defaultValueDescriptionqS0CF1i = null;
		const _envVarJycLMwU = undefined;
		const _descriptioncgKff9C = undefined;
		const _optionX4Kjmm4 = {
			"argChoices": _argChoicesvoe7tq,
		"negate": _negateSUtbLjM,
		"defaultValue": _defaultValueIbnbZDS,
		"defaultValueDescription": _defaultValueDescriptionqS0CF1i,
		"envVar": _envVarJycLMwU,
		"description": _descriptioncgKff9C
	}
		const _returnValueiGIgumo = await _Helpef8gDn0.optionDescription(_optionX4Kjmm4)
		const _flagskyKakht = null;
		const _optionhgd3oY = {
			"flags": _flagskyKakht
	}
		const _returnValueF7SuPBz = await _Helpef8gDn0.optionTerm(_optionhgd3oY)
	});

	it('test for Help', async () => {
		const _HelppUyh5AE = new Help()
		const _strEwcjAq9 = "aiBeNyPblsSGONzxcSy32IM9yFvMq1emU";
		const _widthF0901Qm = false;
		const _indentZ4LNOok = 0.2546758495044159;
		const _minColumnWidthjOHJ9RT = 4.9900884976403646;
		const _returnValueuhXeqbI = await _HelppUyh5AE.wrap(_strEwcjAq9, _widthF0901Qm, _indentZ4LNOok, _minColumnWidthjOHJ9RT)
		const _returnValueaJQzCCB = null;
		const _descriptiontNHwsIf = () => { return _returnValueaJQzCCB };
		const _cmdSwrMX6B = {
			"description": _descriptiontNHwsIf
	}
		const _returnValueHSGmDnl = await _HelppUyh5AE.subcommandDescription(_cmdSwrMX6B)
		const _arrayValuegLjzByR = false;
		const _arrayValueyN5UB2e = "Y4Ygha47d43Q7dRHzzaA384UJBMBnn7RFJ3n12OhbtSu6h";
		const _cmdUgcgrCh = [_arrayValuegLjzByR, _arrayValueyN5UB2e]
		const _returnValuef4EqtMR = await _HelppUyh5AE.commandDescription(_cmdUgcgrCh)
	});

	it('test for Help', async () => {
		const _HelpiPEUMHs = new Help()
		const _arrayValueIOGLW8 = null;
		const _argumentBcJRpUI = [_arrayValueIOGLW8]
		const _returnValuezIFGJey = await _HelpiPEUMHs.argumentDescription(_argumentBcJRpUI)
		const _cmdyxIBj9f = 1.4253410631822465;
		const _arrayValuexIbJDp5 = "dXbDiIwV3pHiCii4tbmBM5bEtecMVXEUXdPd7j";
		const _helperYiNraxI = [_arrayValuexIbJDp5]
		const _returnValuebZ6URAh = await _HelpiPEUMHs.longestSubcommandTermLength(_cmdyxIBj9f, _helperYiNraxI)
		const _cmdMIDGrCu = "sF4FV7UpLu0rZNjc0tLHPGPAYnpfyr";
		const _arrayValuenUFZmJz = null;
		const _arrayValuegqz4C8l = undefined;
		const _arrayValue7z4bev = {
		
	}
		const _helperM4OwoWb = [_arrayValuenUFZmJz, _arrayValuegqz4C8l, _arrayValue7z4bev]
		const _returnValuegQBdCT = await _HelpiPEUMHs.longestOptionTermLength(_cmdMIDGrCu, _helperM4OwoWb)
		const _arrayValueBessuad = null;
		const _arrayValuePSasDKh = null;
		const _optiongT4taL0 = [_arrayValueBessuad, _arrayValuePSasDKh]
		const _returnValueUB8Dwnz = await _HelpiPEUMHs.optionTerm(_optiongT4taL0)
	});

	it('test for Help', async () => {
		const _HelpRnGAs6m = new Help()
		const _arrayValueu82xCRd = false;
		const _arrayValueo7IOaIA = undefined;
		const _optionPrnk81d = [_arrayValueu82xCRd, _arrayValueo7IOaIA]
		const _returnValueR6TlDGh = await _HelpRnGAs6m.optionDescription(_optionPrnk81d)
		const _returnValuettACP2i = undefined;
		const _slicecBKoc4e = () => { return _returnValuettACP2i };
		const _nameeip2SgJ = {
			"slice": _slicecBKoc4e
	}
		const _descriptionwNyTmQa = null;
		const _argumentyAdj5zC = new Argument(_nameeip2SgJ, _descriptionwNyTmQa)
		const _fnNerTj9 = undefined;
		const _returnValueCwz4TW0 = await _argumentyAdj5zC.argParser(_fnNerTj9)
		const _returnValuegDP51sx = 0.38486611233600243;
		const _includesIdLUJMP = () => { return _returnValuegDP51sx };
		const _returnValueTha25lr = null;
		const _joinAWttY6S = () => { return _returnValueTha25lr };
		const _valuesDXZLpf = {
			"includes": _includesIdLUJMP,
		"join": _joinAWttY6S
	}
		const _returnValueNTLUzb = await _argumentyAdj5zC.choices(_valuesDXZLpf)
		const _returnValueZo5qP2O = await _argumentyAdj5zC.argRequired()
		const _returnValueUPCf1Dm = await _argumentyAdj5zC.argRequired()
		const _returnValueEi61Tyo = await _HelpRnGAs6m.argumentTerm(_argumentyAdj5zC)
		const _nameHhYMaN4 = true;
		const _cmdvXYfHA = new Command(_nameHhYMaN4)
		const _fnXwRYFRq = {
		
	}
		const _returnValueZiqbgGH = await _cmdvXYfHA.exitOverride(_fnXwRYFRq)
		const _returnValuez0hjl6Y = "TyFQdsCQz0yrhZ3LSF5ZGey2yro1FFZjCgtMqno5zcWAtxid4TdygCpi0TkGAxnXSLOtuW5c86PCzro57HDnn9h0LPqPU";
		const _argjql57rZ = () => { return _returnValuez0hjl6Y };
		const _returnValuehdw9LYK = await _cmdvXYfHA._findOption(_argjql57rZ)
		const _aliasigmnimG = undefined;
		const _returnValuer2NcGZ6 = await _cmdvXYfHA.alias(_aliasigmnimG)
		const _returnValueAFF6VIQ = await _HelpRnGAs6m.subcommandTerm(_cmdvXYfHA)
	});

	it('test for Help', async () => {
		const _Help3DrBMm = new Help()
		const _flagssfZKGB = "Ifl6unByF3b8VpwJmvQu3ZjmTW8BvhmAKIfu55sPfsuzz3ixr9X1qiNGq1qhi2HbXvKJbMTuNkkknZS9dgiiBHCauOYEb2kQ";
		const _descriptionlmyqF6 = {
		
	}
		const _argumentng4eZiI = new Option(_flagssfZKGB, _descriptionlmyqF6)
		const _valueQnjjEP = false;
		const _returnValueNLczbns = "yoErMNjR9AuK3cJ5abrlTdbAwfYHiUodHK2peoeqkhF3uQki8Xksuzw";
		const _concatZMnhCr = () => { return _returnValueNLczbns };
		const _previousUZ1PxA2 = {
			"concat": _concatZMnhCr
	}
		const _returnValueMdT9l4N = await _argumentng4eZiI._concatValue(_valueQnjjEP, _previousUZ1PxA2)
		const _hidecmCrvRV = false;
		const _returnValueTPzJt8G = await _argumentng4eZiI.hideHelp(_hidecmCrvRV)
		const _fncW2PEHQ = {
		
	}
		const _returnValueZiEpHT3 = await _argumentng4eZiI.argParser(_fncW2PEHQ)
		const _returnValueySRz7JZ = await _argumentng4eZiI.name()
		const _returnValue9Ss58D = await _Help3DrBMm.argumentTerm(_argumentng4eZiI)
		const _nameVZa6zEu = -9.036282900065002;
		const _cmdNPkxwJg = new Command(_nameVZa6zEu)
		const _mandatoryW0Et1MU = {
		
	}
		const _configNllsNSN = {
			"mandatory": _mandatoryW0Et1MU
	}
		const _flagsU5QjRw = {
		
	}
		const _descriptionRNxgt3j = undefined;
		const _fntYnYLET = {
		
	}
		const _defaultValueRty9qQs = null;
		const _returnValuetdS7jV3 = await _cmdNPkxwJg._optionEx(_configNllsNSN, _flagsU5QjRw, _descriptionRNxgt3j, _fntYnYLET, _defaultValueRty9qQs)
		const _flagsCptB0N = false;
		const _returnValue53uyeC = -5.8237164042294065;
		const _arrayValueDOlQgzp = () => { return _returnValue53uyeC };
		const _arrayValueBhEZ7Pm = null;
		const _descriptionDUzfFmX = [_arrayValueDOlQgzp, _arrayValueBhEZ7Pm]
		const _returnValuecvD1eQn = await _cmdNPkxwJg.helpOption(_flagsCptB0N, _descriptionDUzfFmX)
		const _arrayValueDDzyhoc = false;
		const _arrayValueNvapK2R = undefined;
		const _returnValueiFBYGdR = [_arrayValueDDzyhoc, _arrayValueNvapK2R]
		const _arrayValueruGZQsI = () => { return _returnValueiFBYGdR };
		const _returnValuePDNsU9I = 3.1563461812763816;
		const _arrayValueivtChSC = () => { return _returnValuePDNsU9I };
		const _argvEW2x7YS = [_arrayValueruGZQsI, _arrayValueivtChSC]
		const _returnValuewoW04bm = await _cmdNPkxwJg.parseOptions(_argvEW2x7YS)
		const _strjOesNGR = undefined;
		const _returnValueHrY4bo1 = await _cmdNPkxwJg.name(_strjOesNGR)
		const _returnValueNpBxTuc = await _Help3DrBMm.commandDescription(_cmdNPkxwJg)
		const _cmdsWb1ofF = null;
		const _helperSCPhMEk = "qXca0CmHRn2weP1oK37xXc97efMA3Y4vUbndNfTa85keSqndN8IXHNlddha";
		const _returnValueR2WzWxx = await _Help3DrBMm.formatHelp(_cmdsWb1ofF, _helperSCPhMEk)
		const _arrayValueXVRAu4k = "AnxX1bGvLvzqsK8KFu52JvRtziNTszjfk1DjCVAakqig6OM5B3pyJTm7LtNBRE9L5lwdfgm";
		const _returnValueNYYiRRs = 4.786513336491026;
		const _arrayValueR164JsI = () => { return _returnValueNYYiRRs };
		const _arrayValueXqim2KM = 8.664210458668734;
		const _arrayValue3GphRS = [_arrayValueXVRAu4k, _arrayValueR164JsI, _arrayValueXqim2KM]
		const _arrayValuer4M9XoU = 1.3650254833833912;
		const _returnValueeY52wWy = [_arrayValue3GphRS, _arrayValuer4M9XoU]
		const _arrayValueVc5XL8 = () => { return _returnValueeY52wWy };
		const _arrayValueiaVGLMF = undefined;
		const _arrayValueak3aMhM = undefined;
		const _optionYHcmyFn = [_arrayValueVc5XL8, _arrayValueiaVGLMF, _arrayValueak3aMhM]
		const _returnValueQiaYCdT = await _Help3DrBMm.optionDescription(_optionYHcmyFn)
	});

	it('test for Help', async () => {
		const _HelpqQTGpyU = new Help()
		const _cmdS6Beu08 = null;
		const _helperVA5BID0 = new Help()
		const _cmdGzGYMuo = "7Xm6s6cBkR1JqEYp1Gg1AaimFJTUQ8tBqn1Ofs1gaYKAp38IViKgRCItKVPIhMIo3Cde66pyL7";
		const _helpersJ6ZeQ6 = new Help()
		const _cmdinRXRg = false;
		const _helpervXFIkg = new Help()
		const _namei2Ix1q5 = []
		const _cmdUnla5vH = new Command(_namei2Ix1q5)
		const _combineYAnXcmf = true;
		const _returnValueG7adcD5 = await _cmdUnla5vH.combineFlagAndOptionalValue(_combineYAnXcmf)
		const _flagsdPz2yH7 = "phPbgycNMexWVmRnmM5jOdA10wWIrPZdyOpZCrhmJ9Pjc2RE8muitArjQ3fwOTWVocTtl1bwyoE0ip";
		const _arrayValue4OJyNB = -0.9278837836791158;
		const _arrayValueax9QPJe = true;
		const _arrayValueT2Lx46l = 2.7091821287389557;
		const _arrayValuevq0G11p = null;
		const _arrayValuee0uQBtZ = [_arrayValueT2Lx46l, _arrayValuevq0G11p]
		const _descriptionSxQfxzB = [_arrayValue4OJyNB, _arrayValueax9QPJe, _arrayValuee0uQBtZ]
		const _optioni1TXrEE = new Option(_flagsdPz2yH7, _descriptionSxQfxzB)
		const _arrayValueiybhQPd = undefined;
		const _valueGdSvrTz = [_arrayValueiybhQPd]
		const _arrayValuec65H2UE = 2.2067518151699694;
		const _arrayValueGyOBGu7 = "frQnidpFfmXObYY03Bd1DFqFfLHIKeHuMl8p8dnkdNtwTBGUczRHbHSU3P8opEjXHkJ32NlCbA6TOyXn4mE";
		const _returnValuevteQTIZ = [_arrayValuec65H2UE, _arrayValueGyOBGu7]
		const _concatAa05Ylv = () => { return _returnValuevteQTIZ };
		const _previousWfHAgPG = {
			"concat": _concatAa05Ylv
	}
		const _returnValueosZLOQH = await _optioni1TXrEE._concatValue(_valueGdSvrTz, _previousWfHAgPG)
		const _returnValuePJxM1qU = await _optioni1TXrEE.attributeName()
		const _argrwYVpU = -0.3969774233317285;
		const _returnValuewKvXDNC = await _optioni1TXrEE.is(_argrwYVpU)
		const _namexKMEis1 = {
		
	}
		const _returnValueO5vSzt7 = await _optioni1TXrEE.env(_namexKMEis1)
		const _argJ02gZEv = "jgxzlkMtcRQD5eB2Gr7Xudjcop4CSiwzzgwah4ddl05rc1WGhkr0eafuny8nuhadO58sF1scTIqKYaWV";
		const _returnValuedHuM2i9 = await _optioni1TXrEE.is(_argJ02gZEv)
		const _returnValuepGXMiVa = await _cmdUnla5vH.addOption(_optioni1TXrEE)
		const _returnValueSnFGDde = await _helpervXFIkg.subcommandTerm(_cmdUnla5vH)
		const _returnValuejofB5tr = -8.865443894257673;
		const _cmddIf9O84 = () => { return _returnValuejofB5tr };
		const _returnValued3xmbdE = await _helpervXFIkg.subcommandTerm(_cmddIf9O84)
		const _argumentb4UdSJS = 2.8436423613968387;
		const _returnValueh4gtv2 = await _helpervXFIkg.argumentDescription(_argumentb4UdSJS)
		const _returnValueNuKla6V = await _helpersJ6ZeQ6.longestArgumentTermLength(_cmdinRXRg, _helpervXFIkg)
		const _cmdiY703V8 = undefined;
		const _helperseedeKJ = "BdtdIAh6gqBhewrSuxTen9c";
		const _returnValueZ1tMPv9 = await _helpersJ6ZeQ6.formatHelp(_cmdiY703V8, _helperseedeKJ)
		const __namekerAVO2 = {
		
	}
		const __aliasesjcxd8rf = 2.3316370114664142;
		const _parentGb8aowN = "8tVa3EP1rqWzhJhy8Pt";
		const _returnValueRNuOI0 = false;
		const _usageA9eiQAz = () => { return _returnValueRNuOI0 };
		const _cmdMqkibCm = {
			"_name": __namekerAVO2,
		"_aliases": __aliasesjcxd8rf,
		"parent": _parentGb8aowN,
		"usage": _usageA9eiQAz
	}
		const _returnValuei7WNErT = await _helpersJ6ZeQ6.commandUsage(_cmdMqkibCm)
		const _cmdFA2W9D = null;
		const _helperK9oRi6W = true;
		const _returnValuezFEQRxA = await _helpersJ6ZeQ6.longestOptionTermLength(_cmdFA2W9D, _helperK9oRi6W)
		const _returnValueUrbdqgE = await _helperVA5BID0.longestSubcommandTermLength(_cmdGzGYMuo, _helpersJ6ZeQ6)
		const _returnValueFRpS0hU = {
		
	}
		const _cmdLNztx9g = () => { return _returnValueFRpS0hU };
		const _helperPqr2moS = "g4HmFRUuj4EDMVRNBL9ircE";
		const _returnValueApauhbr = await _helperVA5BID0.formatHelp(_cmdLNztx9g, _helperPqr2moS)
		const _returnValuedkvbOIm = await _HelpqQTGpyU.longestArgumentTermLength(_cmdS6Beu08, _helperVA5BID0)
		const _flagsUrFNTD7 = "P81G0vyEV5b5UmEL1A8BxkcOkdBcBM";
		const _descriptionOlzzcFQ = null;
		const _argumentGqtZ91c = new Option(_flagsUrFNTD7, _descriptionOlzzcFQ)
		const _returnValueNlqevov = await _argumentGqtZ91c.name()
		const _hidemHSsRLx = true;
		const _returnValueIrEpZq = await _argumentGqtZ91c.hideHelp(_hidemHSsRLx)
		const _returnValueLBdqyDn = -9.734488097927398;
		const _mandatoryKHlFm2P = () => { return _returnValueLBdqyDn };
		const _returnValues3Lg9w = await _argumentGqtZ91c.makeOptionMandatory(_mandatoryKHlFm2P)
		const _returnValuetFdFcOo = await _HelpqQTGpyU.argumentDescription(_argumentGqtZ91c)
		const _nameFyNSPDn = {
		
	}
		const _cmdGfRLE7d = new Command(_nameFyNSPDn)
		const _returnValueaqAxpgP = await _cmdGfRLE7d._checkForMissingMandatoryOptions()
		const _returnValueaqfu52Y = await _HelpqQTGpyU.subcommandDescription(_cmdGfRLE7d)
		const _nameeO4I8l = "HDagCSdQ556bdG6ka7XPlyWebo70ysWw";
		const _cmdOl0GYSP = new Command(_nameeO4I8l)
		const _storeAsPropertiesE7fWKr7 = false;
		const _returnValueLKCQvJa = await _cmdOl0GYSP.storeOptionsAsProperties(_storeAsPropertiesE7fWKr7)
		const _flagsKAqiqg1 = true;
		const _descriptionrUYYCqn = "7MJ6uvS7s6on3lPWUhk4AYhwMkA88";
		const _returnValueRZaBiNQ = await _cmdOl0GYSP.helpOption(_flagsKAqiqg1, _descriptionrUYYCqn)
		const _returnValueO5iNdZ = undefined;
		const _concatkjcrfX = () => { return _returnValueO5iNdZ };
		const _arrayValuePBQLXU9 = undefined;
		const _arrayValuel7ZI6Cs = [_arrayValuePBQLXU9]
		const _arrayValueWXYf9O = -9.93232690838541;
		const _arrayValueRKfXwO2 = [_arrayValuel7ZI6Cs, _arrayValueWXYf9O]
		const _arrayValueSugwYq = "bIrsn51HbhTcqrKnvg21dhzOuhqj5BXIRi1c826Ix4jisKdKDVVGQzhEtSPi2ifVCBQ5jUD4v3ZtJZmItJpv59Hq";
		const _arrayValueNjmPtSl = 0.4887077425160875;
		const _returnValueCwEWSKA = [_arrayValueRKfXwO2, _arrayValueSugwYq, _arrayValueNjmPtSl]
		const _sliceVBMQzui = () => { return _returnValueCwEWSKA };
		const _lengthtZDvO8 = 9.668303534799122;
		const _operandsrEDayH = {
			"concat": _concatkjcrfX,
		"slice": _sliceVBMQzui,
		"length": _lengthtZDvO8
	}
		const _unknownfm8LVeu = {
		
	}
		const _returnValuetQTIJq6 = await _cmdOl0GYSP._parseCommand(_operandsrEDayH, _unknownfm8LVeu)
		const _returnValuesOxnSQF = await _HelpqQTGpyU.subcommandTerm(_cmdOl0GYSP)
	});

	it('test for Help', async () => {
		const _Helpc1OfVCB = new Help()
		const _nameD5PN6A8 = true;
		const _cmdtwQC3A8 = new Command(_nameD5PN6A8)
		const _namesS8WfyI = "DLJBiAQkUQ4e5tntNZsp20yGQlqXd8LocN1Aw874SzsmEFWxCncM6LdMByWTJAiep";
		const _returnValueQSbLEDF = await _cmdtwQC3A8.arguments(_namesS8WfyI)
		const _arrayValuecX26ElS = undefined;
		const _arrayValueFlQOLrh = "fcARu";
		const _aliaseskrgtaZ9 = [_arrayValuecX26ElS, _arrayValueFlQOLrh]
		const _returnValueeOUb92 = await _cmdtwQC3A8.aliases(_aliaseskrgtaZ9)
		const _keyBKvr9Vn = "jnKfMkt5fnnK9zDjxDfNifZgOd42";
		const _returnValuevN0UKqh = await _cmdtwQC3A8.getOptionValueSource(_keyBKvr9Vn)
		const _positionaliZY8NXA = false;
		const _returnValuejEsKEPJ = await _cmdtwQC3A8.enablePositionalOptions(_positionaliZY8NXA)
		const _returnValuesPamtAp = await _Helpc1OfVCB.subcommandTerm(_cmdtwQC3A8)
		const _nameWSaQHs9 = true;
		const _cmdesI8GlN = new Command(_nameWSaQHs9)
		const _flagssehww0f = null;
		const _descriptionDGu1Z8j = 3.245491926676653;
		const _returnValuePvqyfhP = await _cmdesI8GlN.createOption(_flagssehww0f, _descriptionDGu1Z8j)
		const _keyST2l6U7 = 1.203290052807752;
		const _arrayValuewBi62gK = -5.9830604721972245;
		const _arrayValueDpNiPqi = false;
		const _valuefYndzQ7 = [_arrayValuewBi62gK, _arrayValueDpNiPqi]
		const _sourceYha9yLX = true;
		const _returnValuemsU3Zke = await _cmdesI8GlN.setOptionValueWithSource(_keyST2l6U7, _valuefYndzQ7, _sourceYha9yLX)
		const _configurationiq05Fr = undefined;
		const _returnValuety8pTkX = await _cmdesI8GlN.configureHelp(_configurationiq05Fr)
		const _returnValueCB6vGwd = await _cmdesI8GlN._hasImplicitHelpCommand()
		const _returnValueKqJSstI = await _Helpc1OfVCB.subcommandTerm(_cmdesI8GlN)
		const _returnValuerJHYY5Z = undefined;
		const _cmdhNwxTt = () => { return _returnValuerJHYY5Z };
		const _returnValueFNvi2gl = await _Helpc1OfVCB.visibleOptions(_cmdhNwxTt)
		const _cmdnwR4BTm = "FGyhh";
		const _arrayValuewUt3sK1 = "2NJAvQ";
		const _helperYTL5ZxI = [_arrayValuewUt3sK1]
		const _returnValueEm6r5u5 = await _Helpc1OfVCB.longestSubcommandTermLength(_cmdnwR4BTm, _helperYTL5ZxI)
		const _cmdiRpt9H0 = 3.529435619899811;
		const _returnValueTJHBEC = await _Helpc1OfVCB.visibleArguments(_cmdiRpt9H0)
	});
})