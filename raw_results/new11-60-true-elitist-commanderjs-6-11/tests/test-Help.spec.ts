export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpbfo8bBS = new Help()
		const _argChoicesgazZis = {
		
	}
		const _negateVyv6DW = null;
		const _defaultValueKCgqNvq = undefined;
		const _defaultValueDescriptionO2X0gcT = null;
		const _envVariLuwHHj = undefined;
		const _descriptiondWJUbe = true;
		const _optionriPyiI = {
			"argChoices": _argChoicesgazZis,
		"negate": _negateVyv6DW,
		"defaultValue": _defaultValueKCgqNvq,
		"defaultValueDescription": _defaultValueDescriptionO2X0gcT,
		"envVar": _envVariLuwHHj,
		"description": _descriptiondWJUbe
	}
		const _returnValueG3ZY7k9 = await _Helpbfo8bBS.optionDescription(_optionriPyiI)
		const _commandsFl5rIz = {
		
	}
		const _returnValuem4SJu4G = "fRubVfLLe2rUvOwjdCA44JLYf5FueSuv1H49bsT2Fbah1";
		const __hasImplicitHelpCommandiET0jPQ = () => { return _returnValuem4SJu4G };
		const __helpCommandnameAndArgsr4iYmHs = {
		
	}
		const _returnValueCJ6m7g3 = 8.087287474508113;
		const _createCommandDFCnZVJ = () => { return _returnValueCJ6m7g3 };
		const __helpCommandDescriptionJp8vLe = undefined;
		const _cmdVAwcI0Y = {
			"commands": _commandsFl5rIz,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandiET0jPQ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsr4iYmHs,
		"createCommand": _createCommandDFCnZVJ,
		"_helpCommandDescription": __helpCommandDescriptionJp8vLe
	}
		const _returnValueMJ9bK98 = await _Helpbfo8bBS.visibleCommands(_cmdVAwcI0Y)
		const __argsDescriptionR1d1L0f = {
		
	}
		const __argsNGbCAc = {
		
	}
		const _cmdR8l3ced = {
			"_argsDescription": __argsDescriptionR1d1L0f,
		"_args": __argsNGbCAc
	}
		const _returnValuewG06fqB = await _Helpbfo8bBS.visibleArguments(_cmdR8l3ced)
		const _returnValuet0Kto2b = "VRbJP";
		const _returnValueaWcULwA = () => { return _returnValuet0Kto2b };
		const _descriptionk46b1G8 = () => { return _returnValueaWcULwA };
		const _cmdsl7Kyeo = {
			"description": _descriptionk46b1G8
	}
		const _returnValueZXYnMuH = await _Helpbfo8bBS.subcommandDescription(_cmdsl7Kyeo)
		const _cmdvvyPoEz = undefined;
		const _arrayValuexl9nq9h = null;
		const _arrayValueSiZIXi = [_arrayValuexl9nq9h]
		const _returnValueATtc7bd = false;
		const _arrayValueaT8wxYC = () => { return _returnValueATtc7bd };
		const _arrayValueT5oSIT1 = undefined;
		const _arrayValueX4hHbi = true;
		const _arrayValueMaqskwC = null;
		const _arrayValueN36ZotN = 3.542355458783229;
		const _arrayValuexAHhg4S = false;
		const _arrayValueDDm9T0u = [_arrayValueT5oSIT1, _arrayValueX4hHbi, _arrayValueMaqskwC, _arrayValueN36ZotN, _arrayValuexAHhg4S]
		const _sortSubcommandsVQlnKk1 = [_arrayValueSiZIXi, _arrayValueaT8wxYC, _arrayValueDDm9T0u]
		const _returnValueHv54Pg = []
		const _subcommandTermFER5RGW = () => { return _returnValueHv54Pg };
		const _helperrff2pSr = {
			"sortSubcommands": _sortSubcommandsVQlnKk1,
		"subcommandTerm": _subcommandTermFER5RGW
	}
		const _returnValue5sxqkx = await _Helpbfo8bBS.longestSubcommandTermLength(_cmdvvyPoEz, _helperrff2pSr)
	});

	it('test for Help', async () => {
		const _HelpUtDgiYo = new Help()
		const _returnValueifpTCOg = 3.5194431481262267;
		const _option7aHhjn = () => { return _returnValueifpTCOg };
		const _returnValueRgCWC09 = await _HelpUtDgiYo.optionDescription(_option7aHhjn)
		const _argChoicesVvWj4NE = {
		
	}
		const _negateFaY1wuH = -8.773299559548779;
		const _defaultValuevJOpovs = undefined;
		const _defaultValueDescriptionwqbk67G = undefined;
		const _envVargZSRax2 = undefined;
		const _descriptionRBZXnu9 = {
		
	}
		const _optionXPuhKi4 = {
			"argChoices": _argChoicesVvWj4NE,
		"negate": _negateFaY1wuH,
		"defaultValue": _defaultValuevJOpovs,
		"defaultValueDescription": _defaultValueDescriptionwqbk67G,
		"envVar": _envVargZSRax2,
		"description": _descriptionRBZXnu9
	}
		const _returnValueVO5IoR = await _HelpUtDgiYo.optionDescription(_optionXPuhKi4)
	});

	it('test for Help', async () => {
		const _HelpgkstSb = new Help()
		const _returnValueP6sfa4p = 0.6622716303569831;
		const _descriptionmLAAHFJ = () => { return _returnValueP6sfa4p };
		const _cmdqhDY2qJ = {
			"description": _descriptionmLAAHFJ
	}
		const _returnValuePItML2m = await _HelpgkstSb.subcommandDescription(_cmdqhDY2qJ)
		const __nameXNKVnUw = {
		
	}
		const __aliasesNCoh5FZ = {
		
	}
		const _parentGAIQvx = {
		
	}
		const _returnValueefqASiS = false;
		const _usagestCogBu = () => { return _returnValueefqASiS };
		const _cmda7bjWQu = {
			"_name": __nameXNKVnUw,
		"_aliases": __aliasesNCoh5FZ,
		"parent": _parentGAIQvx,
		"usage": _usagestCogBu
	}
		const _returnValueFSQhtJj = await _HelpgkstSb.commandUsage(_cmda7bjWQu)
		const _flagsdRsVv2o = false;
		const _optiongBa7qCn = {
			"flags": _flagsdRsVv2o
	}
		const _returnValueCz7qiJJ = await _HelpgkstSb.optionTerm(_optiongBa7qCn)
	});

	it('test for Help', async () => {
		const _HelpvEV3Evv = new Help()
		const _cmdjGCK9oG = false;
		const _sortSubcommandsnzop7rW = undefined;
		const _returnValueJXAyYES = 3.0380987507819306;
		const _subcommandTermBALu7bu = () => { return _returnValueJXAyYES };
		const _helperEohCTAn = {
			"sortSubcommands": _sortSubcommandsnzop7rW,
		"subcommandTerm": _subcommandTermBALu7bu
	}
		const _returnValuexoRsyue = await _HelpvEV3Evv.longestSubcommandTermLength(_cmdjGCK9oG, _helperEohCTAn)
		const _arrayValueP0HlSGb = undefined;
		const _optionlnplo6 = [_arrayValueP0HlSGb]
		const _returnValueRkEinWt = await _HelpvEV3Evv.optionTerm(_optionlnplo6)
		const _flagsQUN6PN3 = "BXWHu5FuQaY3N40iTrh3LGLdlSMyCmkHd4aVmPTpz9IsWtghKJdfKP9cMyrKfc4Hegd7wC2Fe4ktXMWdIRN3xNhfgjvgnUKbTz";
		const _optionnzyx6PA = {
			"flags": _flagsQUN6PN3
	}
		const _returnValueMdgpFq2 = await _HelpvEV3Evv.optionTerm(_optionnzyx6PA)
		const _cmdnXq23YY = undefined;
		const _returnValuefZFVXJw = undefined;
		const _helperjykmJZV = () => { return _returnValuefZFVXJw };
		const _returnValueyLJ11jl = await _HelpvEV3Evv.padWidth(_cmdnXq23YY, _helperjykmJZV)
		const _returnValueT5MyxOd = null;
		const _nameVmuKPm = () => { return _returnValueT5MyxOd };
		const _argumentY1BhRw9 = {
			"name": _nameVmuKPm
	}
		const _returnValueUUAv9W7 = await _HelpvEV3Evv.argumentTerm(_argumentY1BhRw9)
	});

	it('test for Help', async () => {
		const _Helpb2WGlL2 = new Help()
		const _cmdMVnsT6K = 0.912372594320443;
		const _returnValueTOeJbyk = "On1xvLJuJBEn701cclhAoFPWoFHnavumIsLwC6LlB7yzoLdkpg2OIw35";
		const _longestOptionTermLengthbRzWYo = () => { return _returnValueTOeJbyk };
		const _returnValuekfwF3R1 = {
		
	}
		const _longestSubcommandTermLengthqoMxyCw = () => { return _returnValuekfwF3R1 };
		const _returnValueX40FfcV = false;
		const _longestArgumentTermLengthssiNr0g = () => { return _returnValueX40FfcV };
		const _helperSEch6r2 = {
			"longestOptionTermLength": _longestOptionTermLengthbRzWYo,
		"longestSubcommandTermLength": _longestSubcommandTermLengthqoMxyCw,
		"longestArgumentTermLength": _longestArgumentTermLengthssiNr0g
	}
		const _returnValueTOeKf9 = await _Helpb2WGlL2.padWidth(_cmdMVnsT6K, _helperSEch6r2)
		const _argChoicesY2rQ0tT = true;
		const _defaultValueUgRisC0 = undefined;
		const _defaultValueDescriptionTNp9rLQ = {
		
	}
		const _descriptionKRtX3Ge = 9.964166188341373;
		const _argumentGpi51uB = {
			"argChoices": _argChoicesY2rQ0tT,
		"defaultValue": _defaultValueUgRisC0,
		"defaultValueDescription": _defaultValueDescriptionTNp9rLQ,
		"description": _descriptionKRtX3Ge
	}
		const _returnValueGcIik4Y = await _Helpb2WGlL2.argumentDescription(_argumentGpi51uB)
		const _optionsoqHux0w = {
		
	}
		const __hasHelpOptionbRk9wkq = {
		
	}
		const __helpShortFlagUBUHdIY = false;
		const _returnValueILMMv1N = "6mWIEkiqYVFukXygSOdxUKX8INJyWimncl5p2tb2lhtu6HEHUJgUNaL2agHkTUv2N1s";
		const __findOptioniUyObsB = () => { return _returnValueILMMv1N };
		const __helpLongFlagwd03H3Z = "DvynlfiI0MlmfTYfUPn";
		const _returnValuetDIkVwZ = null;
		const _createOptionlPyo5O = () => { return _returnValuetDIkVwZ };
		const __helpDescriptionDI8CesE = null;
		const __helpFlagsupG2CF = null;
		const _cmdiyFgtNv = {
			"options": _optionsoqHux0w,
		"_hasHelpOption": __hasHelpOptionbRk9wkq,
		"_helpShortFlag": __helpShortFlagUBUHdIY,
		"_findOption": __findOptioniUyObsB,
		"_helpLongFlag": __helpLongFlagwd03H3Z,
		"createOption": _createOptionlPyo5O,
		"_helpDescription": __helpDescriptionDI8CesE,
		"_helpFlags": __helpFlagsupG2CF
	}
		const _returnValueOjJirmt = await _Helpb2WGlL2.visibleOptions(_cmdiyFgtNv)
		const __nameIBisESV = {
		
	}
		const __aliasesqvVvZ3p = {
		
	}
		const _parentxGlr0rA = {
		
	}
		const _returnValueduukscG = null;
		const _usageVQQun4C = () => { return _returnValueduukscG };
		const _cmdHE5Zfjy = {
			"_name": __nameIBisESV,
		"_aliases": __aliasesqvVvZ3p,
		"parent": _parentxGlr0rA,
		"usage": _usageVQQun4C
	}
		const _returnValueAOixH0v = await _Helpb2WGlL2.commandUsage(_cmdHE5Zfjy)
	});

	it('test for Help', async () => {
		const _HelpkrfhIOw = new Help()
		const _returnValueKBgIAn2 = undefined;
		const _descriptionvRJVOTp = () => { return _returnValueKBgIAn2 };
		const _cmdWdJSIAW = {
			"description": _descriptionvRJVOTp
	}
		const _returnValueoOJdZ8L = await _HelpkrfhIOw.commandDescription(_cmdWdJSIAW)
		const __argsxIBQdk = {
		
	}
		const _arrayValueluIVALR = undefined;
		const _arrayValueA96RBNd = null;
		const _arrayValuedK2RDiO = "jWu9jMgde2iISuPKlmaPgE3";
		const __nameyITjDjc = [_arrayValueluIVALR, _arrayValueA96RBNd, _arrayValuedK2RDiO]
		const _arrayValueItGkRiY = undefined;
		const _arrayValueLTiJSJ = []
		const __aliasesLR9hhGf = [_arrayValueItGkRiY, _arrayValueLTiJSJ]
		const _optionsFSGmg6 = -3.7870081052483826;
		const _cmdDIyTjBM = {
			"_args": __argsxIBQdk,
		"_name": __nameyITjDjc,
		"_aliases": __aliasesLR9hhGf,
		"options": _optionsFSGmg6
	}
		const _returnValueHzQpZYc = await _HelpkrfhIOw.subcommandTerm(_cmdDIyTjBM)
		const _cmdqmik0Gx = "7";
		const _returnValuelZfY0cO = undefined;
		const _longestOptionTermLengthq7jje1Q = () => { return _returnValuelZfY0cO };
		const _longestSubcommandTermLengthh2275vH = undefined;
		const _returnValuee4pLOGY = null;
		const _longestArgumentTermLengthiOlUrX = () => { return _returnValuee4pLOGY };
		const _helpercmH75Yv = {
			"longestOptionTermLength": _longestOptionTermLengthq7jje1Q,
		"longestSubcommandTermLength": _longestSubcommandTermLengthh2275vH,
		"longestArgumentTermLength": _longestArgumentTermLengthiOlUrX
	}
		const _returnValueuXSajOE = await _HelpkrfhIOw.padWidth(_cmdqmik0Gx, _helpercmH75Yv)
		const _argumentGVRRZ0S = undefined;
		const _returnValueDdYOWaM = await _HelpkrfhIOw.argumentDescription(_argumentGVRRZ0S)
	});

	it('test for Help', async () => {
		const _HelpCtLAwDv = new Help()
		const _returnValueTQbdFZw = {
		
	}
		const _descriptionQbqkex = () => { return _returnValueTQbdFZw };
		const _cmdVSRLf6i = {
			"description": _descriptionQbqkex
	}
		const _returnValuee6uMBvM = await _HelpCtLAwDv.commandDescription(_cmdVSRLf6i)
		const _arrayValue3D1JLM = "xjDVfHK3UmzJ9vryel2frkS34QEC2Fo8mh6Akso5foc3Wq3vd3x3Jw94Dr8b8kBEyk92daaEvk4oEmA";
		const _arrayValueFvzyb6k = null;
		const _arrayValueTlPH82r = undefined;
		const _cmdleF1w6V = [_arrayValue3D1JLM, _arrayValueFvzyb6k, _arrayValueTlPH82r]
		const _visibleOptionsOTCL9wY = null;
		const _returnValueXNnq7ze = undefined;
		const _optionTermnX3VPtK = () => { return _returnValueXNnq7ze };
		const _helperM8su5hz = {
			"visibleOptions": _visibleOptionsOTCL9wY,
		"optionTerm": _optionTermnX3VPtK
	}
		const _returnValueUxFZj95 = await _HelpCtLAwDv.longestOptionTermLength(_cmdleF1w6V, _helperM8su5hz)
		const _cmdVmVfIlg = false;
		const _sortSubcommandseKep9da = {
		
	}
		const _returnValueZbFzJZd = null;
		const _subcommandTermZOrRUn = () => { return _returnValueZbFzJZd };
		const _helperMbjgQrd = {
			"sortSubcommands": _sortSubcommandseKep9da,
		"subcommandTerm": _subcommandTermZOrRUn
	}
		const _returnValueqMQvzJ = await _HelpCtLAwDv.formatHelp(_cmdVmVfIlg, _helperMbjgQrd)
		const _flagsbREHUZP = 5.587776154356112;
		const _optionWUpbVQh = {
			"flags": _flagsbREHUZP
	}
		const _returnValuehnMNhri = await _HelpCtLAwDv.optionTerm(_optionWUpbVQh)
		const __argsDescription9hdb0K = {
		
	}
		const __argsdxROWim = {
		
	}
		const _cmdQxnoiNT = {
			"_argsDescription": __argsDescription9hdb0K,
		"_args": __argsdxROWim
	}
		const _returnValueKquePKn = await _HelpCtLAwDv.visibleArguments(_cmdQxnoiNT)
	});

	it('test for Help', async () => {
		const _HelpBUeseDm = new Help()
		const _arrayValuebLVQHCs = {
		
	}
		const _cmdyfeNsBK = [_arrayValuebLVQHCs]
		const _returnValueVrZN2o2 = "I7fpmgJjIi5LhB5OhSuslmWWurn0S9UsHqNVLrGRj6acxfwSwXVoViw";
		const _visibleArgumentsK742Y53 = () => { return _returnValueVrZN2o2 };
		const _returnValuePrhliQu = true;
		const _argumentTermfseplx4 = () => { return _returnValuePrhliQu };
		const _helperM0FdAJq = {
			"visibleArguments": _visibleArgumentsK742Y53,
		"argumentTerm": _argumentTermfseplx4
	}
		const _returnValuegk70kbl = await _HelpBUeseDm.longestArgumentTermLength(_cmdyfeNsBK, _helperM0FdAJq)
		const _commandsR6ib5i = {
		
	}
		const _arrayValuenEjfDW = null;
		const _returnValuey7sln4P = [_arrayValuenEjfDW]
		const __hasImplicitHelpCommandgIUpUO = () => { return _returnValuey7sln4P };
		const __helpCommandnameAndArgsrxJnELu = {
		
	}
		const _createCommandm4PSpCx = null;
		const __helpCommandDescriptionGvp53ed = -1.102858067479481;
		const _cmdaxpPKJN = {
			"commands": _commandsR6ib5i,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandgIUpUO,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsrxJnELu,
		"createCommand": _createCommandm4PSpCx,
		"_helpCommandDescription": __helpCommandDescriptionGvp53ed
	}
		const _returnValueYWiIaEY = await _HelpBUeseDm.visibleCommands(_cmdaxpPKJN)
		const _arrayValueBZKAAtz = true;
		const _arrayValueSkQXg7C = [_arrayValueBZKAAtz]
		const _cmdlGNuWCo = [_arrayValueSkQXg7C]
		const _sortSubcommandslgeLBPU = "92aDgIO5WF";
		const _returnValueLg6hzeu = -2.7007447349724956;
		const _subcommandTermwt9Cbgx = () => { return _returnValueLg6hzeu };
		const _helpercCzvKaG = {
			"sortSubcommands": _sortSubcommandslgeLBPU,
		"subcommandTerm": _subcommandTermwt9Cbgx
	}
		const _returnValueH8RRwm = await _HelpBUeseDm.formatHelp(_cmdlGNuWCo, _helpercCzvKaG)
		const _returnValuek07thQh = undefined;
		const _name8ycd0d = () => { return _returnValuek07thQh };
		const _argumentR02A3Pv = {
			"name": _name8ycd0d
	}
		const _returnValueigA3JlI = await _HelpBUeseDm.argumentTerm(_argumentR02A3Pv)
	});

	it('test for Help', async () => {
		const _HelpGrXIAt = new Help()
		const __argsDescriptionmsy0B6M = {
		
	}
		const _arrayValuef0JuKQb = false;
		const __argsZtl4uYP = [_arrayValuef0JuKQb]
		const _cmd29uV4J = {
			"_argsDescription": __argsDescriptionmsy0B6M,
		"_args": __argsZtl4uYP
	}
		const _returnValuecVM7xam = await _HelpGrXIAt.visibleArguments(_cmd29uV4J)
	});

	it('test for Help', async () => {
		const _HelpWSfIrHH = new Help()
		const _returnValueLR1qvvb = true;
		const _flagsfHoG39a = () => { return _returnValueLR1qvvb };
		const _optionxS4WIa = {
			"flags": _flagsfHoG39a
	}
		const _returnValueSGIcanB = await _HelpWSfIrHH.optionTerm(_optionxS4WIa)
		const _flagsuh9CgzY = false;
		const _optionnJKpeEu = {
			"flags": _flagsuh9CgzY
	}
		const _returnValuezMT8qBO = await _HelpWSfIrHH.optionTerm(_optionnJKpeEu)
		const __argsXuVbMDa = "KvI5N";
		const __namexmG7ozQ = 2.101673306789685;
		const __aliasestgCZ6P4 = "onr";
		const _optionsfjFbQCN = {
		
	}
		const _cmdzUrjnVU = {
			"_args": __argsXuVbMDa,
		"_name": __namexmG7ozQ,
		"_aliases": __aliasestgCZ6P4,
		"options": _optionsfjFbQCN
	}
		const _returnValueQyPcdLw = await _HelpWSfIrHH.subcommandTerm(_cmdzUrjnVU)
	});

	it('test for Help', async () => {
		const _HelpbW36iEZ = new Help()
		const _cmdGM8camk = null;
		const _sortSubcommandsDA1t3cC = false;
		const _returnValueDleCF1j = true;
		const _subcommandTermtKF07bJ = () => { return _returnValueDleCF1j };
		const _helperPSGJ8P = {
			"sortSubcommands": _sortSubcommandsDA1t3cC,
		"subcommandTerm": _subcommandTermtKF07bJ
	}
		const _returnValueNUWvrAT = await _HelpbW36iEZ.formatHelp(_cmdGM8camk, _helperPSGJ8P)
		const _returnValueQOZOKz5 = true;
		const _descriptionOKKB2vI = () => { return _returnValueQOZOKz5 };
		const _cmdDf5Arnz = {
			"description": _descriptionOKKB2vI
	}
		const _returnValue8qacDL = await _HelpbW36iEZ.commandDescription(_cmdDf5Arnz)
	});

	it('test for Help', async () => {
		const _HelpkUKo6Ud = new Help()
		const _returnValuezbJ7LF = undefined;
		const _descriptionENL5bHV = () => { return _returnValuezbJ7LF };
		const _cmdyNZKskb = {
			"description": _descriptionENL5bHV
	}
		const _returnValueezle5nB = await _HelpkUKo6Ud.subcommandDescription(_cmdyNZKskb)
		const _optionsriktRM = undefined;
		const __hasHelpOptionlhSTzbe = undefined;
		const __helpShortFlagoqn7lXS = false;
		const __findOptionesEdexA = null;
		const __helpLongFlagrW06RaF = null;
		const _returnValuer3H9E0T = undefined;
		const _createOptionjMpwNmJ = () => { return _returnValuer3H9E0T };
		const __helpDescriptionj2YCcOs = -9.259574299187221;
		const __helpFlagsGrYa40F = {
		
	}
		const _cmdgcnxdDF = {
			"options": _optionsriktRM,
		"_hasHelpOption": __hasHelpOptionlhSTzbe,
		"_helpShortFlag": __helpShortFlagoqn7lXS,
		"_findOption": __findOptionesEdexA,
		"_helpLongFlag": __helpLongFlagrW06RaF,
		"createOption": _createOptionjMpwNmJ,
		"_helpDescription": __helpDescriptionj2YCcOs,
		"_helpFlags": __helpFlagsGrYa40F
	}
		const _returnValuerWBHhf6 = await _HelpkUKo6Ud.visibleOptions(_cmdgcnxdDF)
		const _arrayValuekSJD8xw = "p5P";
		const _arrayValueaJBG5WU = []
		const _arrayValuelzteLuL = -0.6305270188830043;
		const _arrayValueooyZ8So = [_arrayValueaJBG5WU, _arrayValuelzteLuL]
		const _returnValuegHBmsTv = [_arrayValuekSJD8xw, _arrayValueooyZ8So]
		const _nameVZ5DpiV = () => { return _returnValuegHBmsTv };
		const _argumentN5RVQze = {
			"name": _nameVZ5DpiV
	}
		const _returnValuevYCJur0 = await _HelpkUKo6Ud.argumentTerm(_argumentN5RVQze)
		const _arrayValuelwSwcnB = {
		
	}
		const _arrayValueIcNKzs9 = false;
		const _cmdmISVUfn = [_arrayValuelwSwcnB, _arrayValueIcNKzs9]
		const _returnValuedX0DRSK = true;
		const _arrayValuevkqijZC = () => { return _returnValuedX0DRSK };
		const _arrayValuevzFQcKn = "IH2ud3gWp01dlDevQgyAzfahVAtNx87Deb6Cm";
		const _sortSubcommandsO8JdyY2 = [_arrayValuevkqijZC, _arrayValuevzFQcKn]
		const _subcommandTermW2jjdVD = -9.055794164419266;
		const _helperqUZniWY = {
			"sortSubcommands": _sortSubcommandsO8JdyY2,
		"subcommandTerm": _subcommandTermW2jjdVD
	}
		const _returnValuedaFIIEB = await _HelpkUKo6Ud.longestSubcommandTermLength(_cmdmISVUfn, _helperqUZniWY)
		const _cmdoB8Pmj4 = "ZWnfgJ28ubn";
		const _returnValuePw7AxX = 9.02829942755912;
		const _visibleArgumentsP76603s = () => { return _returnValuePw7AxX };
		const _returnValuebI50vHA = true;
		const _argumentTermtotxxa = () => { return _returnValuebI50vHA };
		const _helperEgYr6Sa = {
			"visibleArguments": _visibleArgumentsP76603s,
		"argumentTerm": _argumentTermtotxxa
	}
		const _returnValuekY1AQ6d = await _HelpkUKo6Ud.longestArgumentTermLength(_cmdoB8Pmj4, _helperEgYr6Sa)
	});

	it('test for Help', async () => {
		const _HelpE67ORIh = new Help()
		const _returnValuelPhzPEy = true;
		const _nameY9bCFPu = () => { return _returnValuelPhzPEy };
		const _argumentbADU8St = {
			"name": _nameY9bCFPu
	}
		const _returnValueCpg7LW5 = await _HelpE67ORIh.argumentTerm(_argumentbADU8St)
		const _cmdTDW5Gmw = true;
		const _longestOptionTermLengthUf8kh3c = 2.8158596614719684;
		const _longestSubcommandTermLengthaHSisRi = 0.03423930082480453;
		const _returnValueR2tKO9O = null;
		const _longestArgumentTermLengthhb46y8o = () => { return _returnValueR2tKO9O };
		const _helperJ8W3Qzb = {
			"longestOptionTermLength": _longestOptionTermLengthUf8kh3c,
		"longestSubcommandTermLength": _longestSubcommandTermLengthaHSisRi,
		"longestArgumentTermLength": _longestArgumentTermLengthhb46y8o
	}
		const _returnValueaPvK78q = await _HelpE67ORIh.padWidth(_cmdTDW5Gmw, _helperJ8W3Qzb)
		const _cmdAIblkIi = -1.42306149052059;
		const _arrayValuedxFYUK = "GmfMcQj8awRy9DRjAdWSqAVLqrAs6hdEnkvAmTtIup7GcOshXlhYBoKoc5Vk67qdzRMqjEP3vAHwYsYEhJ";
		const _sortSubcommandsP7fo8sJ = [_arrayValuedxFYUK]
		const _returnValueYldItOd = true;
		const _subcommandTerm4ss4Oc = () => { return _returnValueYldItOd };
		const _helperiadqvqA = {
			"sortSubcommands": _sortSubcommandsP7fo8sJ,
		"subcommandTerm": _subcommandTerm4ss4Oc
	}
		const _returnValuejew2C9l = await _HelpE67ORIh.formatHelp(_cmdAIblkIi, _helperiadqvqA)
		const _cmdOuNxQEi = null;
		const _returnValueZZ0jWro = "VEDwDQmurr6BwA6s2jYV4GftGUWksYLD3OT7DHICYSw42D7vGVKimZ8ULaeMOKuXDlwfMgKzkn";
		const _sortSubcommandsQjhXP1s = () => { return _returnValueZZ0jWro };
		const _returnValuep6uy1mu = "LgQqyCAXwe8h3yGdqIo0Hwx0c53yDYX6lycYCsZCc";
		const _subcommandTermuRtlBel = () => { return _returnValuep6uy1mu };
		const _helperqpE8ttM = {
			"sortSubcommands": _sortSubcommandsQjhXP1s,
		"subcommandTerm": _subcommandTermuRtlBel
	}
		const _returnValueMZpFDW6 = await _HelpE67ORIh.longestSubcommandTermLength(_cmdOuNxQEi, _helperqpE8ttM)
		const _cmd3wEVFD = -8.337870556361468;
		const _returnValueItqdPZg = 7.969444646793917;
		const _visibleArgumentswLkMDm1 = () => { return _returnValueItqdPZg };
		const _returnValueheKDNzS = null;
		const _argumentTermJsI7aJ7 = () => { return _returnValueheKDNzS };
		const _helperoM6la0M = {
			"visibleArguments": _visibleArgumentswLkMDm1,
		"argumentTerm": _argumentTermJsI7aJ7
	}
		const _returnValueBwRUoi = await _HelpE67ORIh.longestArgumentTermLength(_cmd3wEVFD, _helperoM6la0M)
	});

	it('test for Help', async () => {
		const _HelpZefWYS = new Help()
		const _arrayValuebJ0Pwwd = undefined;
		const _arrayValuev5vWHdI = undefined;
		const _argument5apSds = [_arrayValuebJ0Pwwd, _arrayValuev5vWHdI]
		const _returnValueCLiF4ho = await _HelpZefWYS.argumentDescription(_argument5apSds)
		const _arrayValuefQ9zf24 = false;
		const _arrayValueNPyumtR = null;
		const _arrayValuefCFQZjE = "tVAPRJCPEN13g5EaTPt6RX34wKf";
		const _returnValuevCOn179 = [_arrayValuefQ9zf24, _arrayValueNPyumtR, _arrayValuefCFQZjE]
		const _nameFoaNEyn = () => { return _returnValuevCOn179 };
		const _argumentOm6wBKZ = {
			"name": _nameFoaNEyn
	}
		const _returnValueDYX4YYx = await _HelpZefWYS.argumentTerm(_argumentOm6wBKZ)
	});

	it('test for Help', async () => {
		const _HelppTgcWjO = new Help()
		const _commandslhnwgHC = {
		
	}
		const _returnValueO0cKY0i = null;
		const _returnValueJvln6nv = () => { return _returnValueO0cKY0i };
		const _returnValueO0RyAvP = () => { return _returnValueJvln6nv };
		const __hasImplicitHelpCommandvj9SlJN = () => { return _returnValueO0RyAvP };
		const __helpCommandnameAndArgsCzNbIZO = {
		
	}
		const _returnValueheXpFlk = undefined;
		const _createCommandiGKv6IA = () => { return _returnValueheXpFlk };
		const __helpCommandDescription2iVseo = undefined;
		const _cmdqyLNWVw = {
			"commands": _commandslhnwgHC,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandvj9SlJN,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsCzNbIZO,
		"createCommand": _createCommandiGKv6IA,
		"_helpCommandDescription": __helpCommandDescription2iVseo
	}
		const _returnValueXYN5tqt = await _HelppTgcWjO.visibleCommands(_cmdqyLNWVw)
		const _flagsz3n2ffK = "aRX3lyrWLxB12QxgYjVKAe4cJodJrY";
		const _optionYu1s5KX = {
			"flags": _flagsz3n2ffK
	}
		const _returnValuemkJzYN0 = await _HelppTgcWjO.optionTerm(_optionYu1s5KX)
		const _arrayValueus0iKZ9 = false;
		const _arrayValueXYWMCcc = {
		
	}
		const _arrayValueKc8YwDm = undefined;
		const _arrayValuegbDYowz = null;
		const _returnValueSVnknSo = null;
		const _arrayValueq9J31m2 = () => { return _returnValueSVnknSo };
		const _arrayValueMhqbqgP = null;
		const _arrayValueVeha4z6 = [_arrayValuegbDYowz, _arrayValueq9J31m2, _arrayValueMhqbqgP]
		const _arrayValuePWB9SMO = -7.0787830474223;
		const _arrayValueinrN4uV = [_arrayValuePWB9SMO]
		const _arrayValueThn8UbA = [_arrayValueKc8YwDm, _arrayValueVeha4z6, _arrayValueinrN4uV]
		const _arrayValueJaVa6jk = 6.322240221365693;
		const _cmdTHJjWHc = [_arrayValueus0iKZ9, _arrayValueXYWMCcc, _arrayValueThn8UbA, _arrayValueJaVa6jk]
		const _helperQQjAULC = []
		const _returnValueUHU1C0f = await _HelppTgcWjO.padWidth(_cmdTHJjWHc, _helperQQjAULC)
		const _returnValue0IgE8W = undefined;
		const _arrayValuekpr3pRP = () => { return _returnValue0IgE8W };
		const _arrayValue5a6ypR = "NNt1CJjDlcvH64nySKfX";
		const _arrayValueQbdaB4 = -0.6017096841975516;
		const _arrayValuel5rycDu = [_arrayValueQbdaB4]
		const _arrayValueVWRvv2 = [_arrayValuel5rycDu]
		const _cmdizv1na = [_arrayValuekpr3pRP, _arrayValue5a6ypR, _arrayValueVWRvv2]
		const _returnValueCAhPpZY = await _HelppTgcWjO.commandDescription(_cmdizv1na)
		const _cmdpbCYq3 = false;
		const _arrayValuesJnjjf = null;
		const _arrayValueQY6eZVR = undefined;
		const _arrayValuetX0HnSo = false;
		const _arrayValuevZ0BSo = [_arrayValueQY6eZVR, _arrayValuetX0HnSo]
		const _helperBykwNAV = [_arrayValuesJnjjf, _arrayValuevZ0BSo]
		const _returnValueT05iKdl = await _HelppTgcWjO.padWidth(_cmdpbCYq3, _helperBykwNAV)
	});

	it('test for Help', async () => {
		const _Helpnm2qtF = new Help()
		const _returnValueVVdoa0f = undefined;
		const _matchpalqxOU = () => { return _returnValueVVdoa0f };
		const _returnValueycl5z6Y = null;
		const _substrQCt49e = () => { return _returnValueycl5z6Y };
		const _strO88rHl = {
			"match": _matchpalqxOU,
		"substr": _substrQCt49e
	}
		const _widthujsnnx9 = 1.4707478533228784;
		const _indentf3GZ5Eo = 5.492621299624222;
		const _minColumnWidthjqPKw7N = -6.130282325963847;
		const _returnValuelZSQnCH = await _Helpnm2qtF.wrap(_strO88rHl, _widthujsnnx9, _indentf3GZ5Eo, _minColumnWidthjqPKw7N)
		const _arrayValueMDAs8MZ = 6.54977940815391;
		const _returnValueP1qkQQI = [_arrayValueMDAs8MZ]
		const _descriptioneogQTpK = () => { return _returnValueP1qkQQI };
		const _cmdpctxGmU = {
			"description": _descriptioneogQTpK
	}
		const _returnValueRRZA9dt = await _Helpnm2qtF.subcommandDescription(_cmdpctxGmU)
		const _argumentjhXvi2 = "PRHVtNJ88rcr3QWHHce8gbGsD7lTTmyVlzceiXcsxQMj9Mo5ZtPMkTex76QhDYkuCat8MXXWyu1DUqgB";
		const _returnValuedyj06kA = await _Helpnm2qtF.argumentDescription(_argumentjhXvi2)
		const _cmdrsso7ch = undefined;
		const _helpermbCpoef = "xeRq2O3q6gLiuWa7uqr8p34pACqw";
		const _returnValueoXxLcaa = await _Helpnm2qtF.longestSubcommandTermLength(_cmdrsso7ch, _helpermbCpoef)
	});

	it('test for Help', async () => {
		const _HelpFC1y2eD = new Help()
		const _cmdjq8TQpE = []
		const _helperfgby5xp = new Help()
		const _returnValueaB9Qde = "x3vSaWKjVzL5ZzsLq1tQznuFhY6hXKWmk0rJqJdYzaZhdN19xwaCw";
		const _matchIwaWNno = () => { return _returnValueaB9Qde };
		const _returnValueGkKEZBN = null;
		const _substr1aM3Bz = () => { return _returnValueGkKEZBN };
		const _strostdlS = {
			"match": _matchIwaWNno,
		"substr": _substr1aM3Bz
	}
		const _widthR286mRU = -7.167168927310819;
		const _indentXKMYPZr = 1.925331583512408;
		const _minColumnWidthXOJTow2 = -4.052502659676955;
		const _returnValuepVzv22g = await _helperfgby5xp.wrap(_strostdlS, _widthR286mRU, _indentXKMYPZr, _minColumnWidthXOJTow2)
		const _returnValuekaDOPx7 = await _HelpFC1y2eD.formatHelp(_cmdjq8TQpE, _helperfgby5xp)
		const _flagso9htSpz = null;
		const _optionX1e2myk = {
			"flags": _flagso9htSpz
	}
		const _returnValueOkQSXeC = await _HelpFC1y2eD.optionTerm(_optionX1e2myk)
		const _cmdMtlIcam = "8EiUlcAvs3jMBCn2vl1AZQIHRhnQmV5OgWa8Kyqr28Iviy5dYBHwj";
		const _returnValueYhLSEIL = await _HelpFC1y2eD.visibleArguments(_cmdMtlIcam)
		const _cmdzvuNMh1 = undefined;
		const _returnValuePiujHJN = await _HelpFC1y2eD.visibleArguments(_cmdzvuNMh1)
		const _cmdhtawDzB = "vrK4jAiGQInPeX1W6bBGsF5vEt3DOgsGYOisoMKCzn1lnRb6Y6HaQ4YJh";
		const _returnValuekupaDL4 = await _HelpFC1y2eD.visibleArguments(_cmdhtawDzB)
	});

	it('test for Help', async () => {
		const _HelpPh7HxWd = new Help()
		const _returnValuecRgaGGg = "9fqwQ2U4RCuMd";
		const _matchXsO6IJ4 = () => { return _returnValuecRgaGGg };
		const _returnValueC0LFwjH = undefined;
		const _substrKMmleNw = () => { return _returnValueC0LFwjH };
		const _strhCASst = {
			"match": _matchXsO6IJ4,
		"substr": _substrKMmleNw
	}
		const _widthsw9MAO3 = 8.314936773302087;
		const _indentRPMwTMz = 1.0385509448891828;
		const _minColumnWidthohRondx = -0.24801888427767338;
		const _returnValued0ESd5J = await _HelpPh7HxWd.wrap(_strhCASst, _widthsw9MAO3, _indentRPMwTMz, _minColumnWidthohRondx)
		const _arrayValuelRAKCwk = 7.523245759199984;
		const _cmdDszVkEm = [_arrayValuelRAKCwk]
		const _helperweTxmRa = new Help()
		const _name5xXJAQ = 6.156080129563151;
		const _cmdXSuTvhJ = new Command(_name5xXJAQ)
		const _namee2tQW7i = 3.4266223249050025;
		const _descriptionIoimjC = undefined;
		const _returnValueh1LP110 = await _cmdXSuTvhJ.createArgument(_namee2tQW7i, _descriptionIoimjC)
		const _returnValueCdJijeU = undefined;
		const _arrayValuectsa2Gp = () => { return _returnValueCdJijeU };
		const _requiredyoQYOE2 = [_arrayValuectsa2Gp]
		const _defaultValuefKdjs6u = undefined;
		const _parseArgxMd0gCb = undefined;
		const _returnValuexuw0xdR = undefined;
		const _returnValuescTW4dN = () => { return _returnValuexuw0xdR };
		const _nameUOaSDfH = () => { return _returnValuescTW4dN };
		const _argumentOgqREW3 = {
			"required": _requiredyoQYOE2,
		"defaultValue": _defaultValuefKdjs6u,
		"parseArg": _parseArgxMd0gCb,
		"name": _nameUOaSDfH
	}
		const _returnValuekH4HbcT = await _cmdXSuTvhJ.addArgument(_argumentOgqREW3)
		const _returnValueE5sOcxY = await _helperweTxmRa.visibleOptions(_cmdXSuTvhJ)
		const _arrayValueY6I79wA = null;
		const _arrayValuem0bny1 = false;
		const _arrayValuei6MQFf = 7.590677097020432;
		const _optionDeXdQt1 = [_arrayValueY6I79wA, _arrayValuem0bny1, _arrayValuei6MQFf]
		const _returnValueMlBQY2F = await _helperweTxmRa.optionDescription(_optionDeXdQt1)
		const _returnValuepFWZgTo = await _HelpPh7HxWd.longestOptionTermLength(_cmdDszVkEm, _helperweTxmRa)
		const _cmdc3NIPWz = "";
		const _returnValuetIOFk3H = await _HelpPh7HxWd.commandDescription(_cmdc3NIPWz)
		const _cmd7WOVXU = true;
		const _helperEi6fPjH = new Help()
		const _cmdJ9W1uhl = "GdntBr24ax5KhmmQtIm5pE0FvGWT4wto";
		const _returnValueHCCASZE = await _helperEi6fPjH.visibleArguments(_cmdJ9W1uhl)
		const _cmdNg9pFAz = true;
		const _helperE7GSvhw = new Help()
		const _returnValueHgFga9o = true;
		const _descriptionTOgrxOS = () => { return _returnValueHgFga9o };
		const _cmdE6cEXrO = {
			"description": _descriptionTOgrxOS
	}
		const _returnValueQ5M9xOA = await _helperE7GSvhw.subcommandDescription(_cmdE6cEXrO)
		const _cmdd6iF1r = "wIP5BOjZUhEowP67YMVoBOAYBfMvp8OFmnkHxSjd5EiGXEhnRyY1HOg1TZz9g7ssTUjCKkm7ka";
		const _helperXG4NkLJ = -8.411191940073067;
		const _returnValuee080d8P = await _helperE7GSvhw.longestOptionTermLength(_cmdd6iF1r, _helperXG4NkLJ)
		const _returnValueXu9wgjD = await _helperEi6fPjH.longestOptionTermLength(_cmdNg9pFAz, _helperE7GSvhw)
		const _cmdlybHYM2 = "opemdV1DzfsBEPp9uWaWIDcjj5Kt5rRycwPTCjYUpgz36H";
		const _returnValueWq24RGp = await _helperEi6fPjH.commandDescription(_cmdlybHYM2)
		const _flagsCvEAxtE = undefined;
		const _optionz1cctuF = {
			"flags": _flagsCvEAxtE
	}
		const _returnValuePQnzBmU = await _helperEi6fPjH.optionTerm(_optionz1cctuF)
		const _returnValueA6onRvr = await _HelpPh7HxWd.longestOptionTermLength(_cmd7WOVXU, _helperEi6fPjH)
	});

	it('test for Help', async () => {
		const _HelpryIUtap = new Help()
		const _strloZZOt6 = "sCJzQb9JDLHrjrfPuiQMRv6uag9k07uVmbRbdOBkaVKhJxZ6ILjd96PwuzkTMltbz3SxkX4yL4dWh1GBD";
		const _widthd8lxiaJ = -8.7884715166538;
		const _indentn6ufW4i = 8.788982595285017;
		const _minColumnWidthAUfZcV = 6.655778316281193;
		const _returnValueywnptPc = await _HelpryIUtap.wrap(_strloZZOt6, _widthd8lxiaJ, _indentn6ufW4i, _minColumnWidthAUfZcV)
		const _argumentBSzxpPC = -9.297090455090853;
		const _returnValuecrLAXgv = await _HelpryIUtap.argumentTerm(_argumentBSzxpPC)
	});

	it('test for Help', async () => {
		const _HelpMVRIny = new Help()
		const _flagsFEfdMP6 = "8m7cluc2aNUgiqaPtIC4wszpGXYAh1WNTqMq7Up53dDNjQIXiMbwT6rAHUzTqQ2m4XosQullO";
		const _arrayValueCHu6nEn = undefined;
		const _arrayValueapLwwYd = "DJj4M6dhgtGIm63Qm6LBxLmq4sCVKfxcR8LmS9m1XBnidpJdBiUcqd6cjuo1wXYfNfRrWkrKuxqyMi15jjviEPEa4siek";
		const _arrayValuejjVC2Yc = undefined;
		const _arrayValuewjYyR11 = "ddGvvpMJq2A2WEU9Ipz2JUbaPypTsJlHAb7pR1Kb66YrfBVYLXX";
		const _descriptionidJOAr = [_arrayValueCHu6nEn, _arrayValueapLwwYd, _arrayValuejjVC2Yc, _arrayValuewjYyR11]
		const _argumentXnvmFad = new Option(_flagsFEfdMP6, _descriptionidJOAr)
		const _fnP9gcppW = 4.753706642238939;
		const _returnValueieV04vt = await _argumentXnvmFad.argParser(_fnP9gcppW)
		const _hideOFZHRyC = true;
		const _returnValueGrKKhpX = await _argumentXnvmFad.hideHelp(_hideOFZHRyC)
		const _argRuMuXw8 = {
		
	}
		const _returnValueRaQwSVv = await _argumentXnvmFad.is(_argRuMuXw8)
		const _nameRJHsxPC = undefined;
		const _returnValueSEXrNY = await _argumentXnvmFad.env(_nameRJHsxPC)
		const _returnValuewqc9MpV = await _HelpMVRIny.argumentDescription(_argumentXnvmFad)
		const _flagsdZiF6Uk = "FJetNtTJHjFP8xL8drWwpHlH9Y9w3a9eBFdTFQ6as2TFccpq3S34itNPI471E5Dcqe3OOB";
		const _returnValueLrVjSG6 = "X3geDSbYR1toJeeH9U";
		const _descriptionw3p0Ssu = () => { return _returnValueLrVjSG6 };
		const _argumentR3oK7G1 = new Option(_flagsdZiF6Uk, _descriptionw3p0Ssu)
		const _argRr3evwZ = {
		
	}
		const _returnValueUwg4YXu = await _argumentR3oK7G1.is(_argRr3evwZ)
		const _fnEM7DSP = -9.745332945281383;
		const _returnValuee0PxYqS = await _argumentR3oK7G1.argParser(_fnEM7DSP)
		const _hidekkSKx2c = true;
		const _returnValueDp3wNtf = await _argumentR3oK7G1.hideHelp(_hidekkSKx2c)
		const _returnValuegh77ysw = await _HelpMVRIny.argumentDescription(_argumentR3oK7G1)
	});

	it('test for Help', async () => {
		const _HelpTUPV9tr = new Help()
		const _arrayValueKUdpkh5 = null;
		const _arrayValueNCVxmz = [_arrayValueKUdpkh5]
		const _arrayValueLYzV3G = "SbAtvTUbz";
		const _arrayValueeDh7Afx = [_arrayValueNCVxmz, _arrayValueLYzV3G]
		const _arrayValueFVuvu4U = {
		
	}
		const _returnValuesvP8Xos = true;
		const _arrayValueMaxqGro = () => { return _returnValuesvP8Xos };
		const _optionHINkiJJ = [_arrayValueeDh7Afx, _arrayValueFVuvu4U, _arrayValueMaxqGro]
		const _returnValueY8qGoZ2 = await _HelpTUPV9tr.optionDescription(_optionHINkiJJ)
		const _nameChQlKhq = null;
		const _cmdYSAo0Cb = new Command(_nameChQlKhq)
		const _flagsfmjNwGd = false;
		const _descriptionxYznLLj = "ZPgDxXgZQURm";
		const _returnValueaXxJ6ZV = await _cmdYSAo0Cb.helpOption(_flagsfmjNwGd, _descriptionxYznLLj)
		const _returnValueTMZ1ZRd = await _HelpTUPV9tr.subcommandTerm(_cmdYSAo0Cb)
	});

	it('test for Help', async () => {
		const _HelpepvbqBY = new Help()
		const _cmdB9ocxT6 = null;
		const _helperr3QxSY = new Help()
		const _namev5ZaFP = true;
		const _cmdlrhlAzB = new Command(_namev5ZaFP)
		const _returnValueOq5CemD = await _cmdlrhlAzB._parseOptionsEnv()
		const _contextOptionsEa6UKBB = null;
		const _returnValueL75oHGn = await _cmdlrhlAzB.helpInformation(_contextOptionsEa6UKBB)
		const _returnValueUrCbuoS = "TEFNP596I";
		const _forEachCPqnyT5 = () => { return _returnValueUrCbuoS };
		const _aliasesWEIqAOX = {
			"forEach": _forEachCPqnyT5
	}
		const _returnValueJrHEiwU = await _cmdlrhlAzB.aliases(_aliasesWEIqAOX)
		const _returnValueFIAPNAm = await _helperr3QxSY.visibleCommands(_cmdlrhlAzB)
		const _cmdAn3MRUK = "lPd4vY";
		const _helperFpInBAk = []
		const _returnValueRKWtpTe = await _helperr3QxSY.longestOptionTermLength(_cmdAn3MRUK, _helperFpInBAk)
		const _argumentnzSIq4a = "Sb11sOqGp0fxTBYzr2DQleAzxqvEiTiPLPLDBxd1t5eNl45NJ1u2RM2WKM1xJoShgEUrGHtc4KToN8oDEqHCh7IXUZr";
		const _returnValuelUbtV8 = await _helperr3QxSY.argumentDescription(_argumentnzSIq4a)
		const _argumenti4rZ1oh = "yvnTP4aZqYDuljxKYc3zk9sWCjJPYAr0t2Oj160X4b59cDa4bcSBS";
		const _returnValueMmFTR3T = await _helperr3QxSY.argumentDescription(_argumenti4rZ1oh)
		const _names4uL9SX = undefined;
		const _cmdPuFODf = new Command(_names4uL9SX)
		const _returnValueQwmOoed = await _cmdPuFODf._checkForMissingMandatoryOptions()
		const _strrHEEjMh = null;
		const _returnValueMyy6ZuM = await _cmdPuFODf.usage(_strrHEEjMh)
		const _displaySuggestionke7ISff = false;
		const _returnValueuDFHrkc = await _cmdPuFODf.showSuggestionAfterError(_displaySuggestionke7ISff)
		const _positionalpd2Zflc = false;
		const _returnValueZyJu5nF = await _cmdPuFODf.enablePositionalOptions(_positionalpd2Zflc)
		const _returnValueQBaN8ip = await _helperr3QxSY.visibleCommands(_cmdPuFODf)
		const _returnValue9UYq9M = await _HelpepvbqBY.longestArgumentTermLength(_cmdB9ocxT6, _helperr3QxSY)
		const _arrayValueE1zDKWH = undefined;
		const _arrayValueg0cZfW = null;
		const _arrayValueQd3bMzl = 6.2864961370319214;
		const _arrayValueSulphqR = false;
		const _arrayValuenGfHids = [_arrayValueQd3bMzl, _arrayValueSulphqR]
		const _arrayValueVlItNPh = null;
		const _arrayValueI0ba4ia = -2.7880213534346012;
		const _returnValueJYULYFq = [_arrayValueVlItNPh, _arrayValueI0ba4ia]
		const _arrayValuedXaTZFU = () => { return _returnValueJYULYFq };
		const _arrayValueHxb9yp8 = {
		
	}
		const _arrayValuexPSSlh0 = [_arrayValueg0cZfW, _arrayValuenGfHids, _arrayValuedXaTZFU, _arrayValueHxb9yp8]
		const _optionVqk1xEH = [_arrayValueE1zDKWH, _arrayValuexPSSlh0]
		const _returnValueCmnggTy = await _HelpepvbqBY.optionTerm(_optionVqk1xEH)
		const _namevNEsjLf = "UfuQZ1rpuUUgPo0TYzfVvbhcvQLhsOFh73kMRjXbTaQyQfDMkhc5vbz0yBU6d1IBFLroJ3eIuLFK3k1RX";
		const _cmdYtapccm = new Command(_namevNEsjLf)
		const _returnValueZTzLtWz = null;
		const _concatjGkmHTT = () => { return _returnValueZTzLtWz };
		const _returnValueFh5ttrp = false;
		const _returnValueveRp7ie = () => { return _returnValueFh5ttrp };
		const _sliceEU2da87 = () => { return _returnValueveRp7ie };
		const _lengther9g9RZ = -6.382750818752177;
		const _operandsx2MtO8v = {
			"concat": _concatjGkmHTT,
		"slice": _sliceEU2da87,
		"length": _lengther9g9RZ
	}
		const _unknownLXnUeaF = {
		
	}
		const _returnValueOEBPpb = await _cmdYtapccm._parseCommand(_operandsx2MtO8v, _unknownLXnUeaF)
		const _flagifU59QY = "WTJmEpbfNWEzOLbIekP6a9CNHOKRYiICJgaCBM02OvmRsxRiUPzzKlEnteQXfVpfcY4kjAmw1NqbeFBc";
		const _returnValuef3e9IuI = await _cmdYtapccm.unknownOption(_flagifU59QY)
		const _argvXdljT5F = {
		
	}
		const _parseOptionswoKKgVp = null;
		const _returnValueSzLFWKP = await _cmdYtapccm.parseAsync(_argvXdljT5F, _parseOptionswoKKgVp)
		const _argveC4I9tn = "OiqhNsmljSU3scDeRyzWmUQHI5scL6AgLfyK57zrqTMO7EdiAGUaY5M5sYcbs5GNCKwTMlWwwINsIfR8Kfa0f8ZIebEgT";
		const _arrayValueZyhsQNt = undefined;
		const _arrayValueGumE1EH = null;
		const _parseOptionstgGwJbl = [_arrayValueZyhsQNt, _arrayValueGumE1EH]
		const _returnValuedr1NEqO = await _cmdYtapccm.parseAsync(_argveC4I9tn, _parseOptionstgGwJbl)
		const _returnValueHhx4Jl = await _HelpepvbqBY.commandDescription(_cmdYtapccm)
	});

	it('test for Help', async () => {
		const _HelpvLyipOt = new Help()
		const _nameEVPQcNK = {
		
	}
		const _cmdtSwtOHk = new Command(_nameEVPQcNK)
		const _namesg8XQ1Rf = "aP0f6YO5Xt8sPRO26Yi3cWhddHqQwBJmmQjccrA0Qw3cVyT";
		const _returnValuewFEl3KM = await _cmdtSwtOHk.arguments(_namesg8XQ1Rf)
		const _returnValueUwEv4dX = await _HelpvLyipOt.subcommandTerm(_cmdtSwtOHk)
		const _nameMcGI8G = 0.9484435038851213;
		const _cmdJqiTNce = new Command(_nameMcGI8G)
		const _keyNuAiQTW = false;
		const _returnValuefdoLe3y = await _cmdJqiTNce.getOptionValueSource(_keyNuAiQTW)
		const _storeAsPropertieseRj3Y94 = false;
		const _returnValue4lSGQi = await _cmdJqiTNce.storeOptionsAsProperties(_storeAsPropertieseRj3Y94)
		const _returnValuehbkQkX9 = 1.4300274596301676;
		const _exitCode950f9a = () => { return _returnValuehbkQkX9 };
		const _codeBJwguc = 7.3933426396852155;
		const _messageDWW5Z4l = "R1mU6FMUEOuIF5HbJatWelfwfY2TLtRa";
		const _returnValuejlcIuys = await _cmdJqiTNce._exit(_exitCode950f9a, _codeBJwguc, _messageDWW5Z4l)
		const _returnValueUXnlhk6 = await _HelpvLyipOt.subcommandTerm(_cmdJqiTNce)
	});
})