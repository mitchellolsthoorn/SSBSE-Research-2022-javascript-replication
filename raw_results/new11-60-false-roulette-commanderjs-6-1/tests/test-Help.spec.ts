export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpaLHBt6Q = new Help()
		const _cmdpwOcILQ = undefined;
		const _helpervsTpga = new Help()
		const _returnValuePcXHKje = true;
		const _cmdjE9CecB = () => { return _returnValuePcXHKje };
		const _returnValuev3qlciI = await _helpervsTpga.subcommandDescription(_cmdjE9CecB)
		const _arrayValueakWFDGs = true;
		const _returnValuegnTHaZe = -4.230502114385891;
		const _arrayValueyXOsQKY = () => { return _returnValuegnTHaZe };
		const _returnValueJGkoKWw = [_arrayValueakWFDGs, _arrayValueyXOsQKY]
		const _cmdoE0QPyT = () => { return _returnValueJGkoKWw };
		const _helpergjMhTEK = new Help()
		const _arrayValuepfqKAx = -9.666245513559993;
		const _arrayValueNacldxo = {
		
	}
		const _returnValueyUpuDl7 = [_arrayValuepfqKAx, _arrayValueNacldxo]
		const _cmdfcSyqN = () => { return _returnValueyUpuDl7 };
		const _returnValueBsys2pL = await _helpergjMhTEK.visibleOptions(_cmdfcSyqN)
		const _cmdL6s3l2Y = false;
		const _arrayValueLZya7F = "hgAy3for6JRWFjGGsR2CfYmjoC7TvJERf";
		const _arrayValuesRZL2nz = false;
		const _sortSubcommandsurYQ7pg = [_arrayValueLZya7F, _arrayValuesRZL2nz]
		const _returnValued6wBV3u = null;
		const _subcommandTermtXRPS4C = () => { return _returnValued6wBV3u };
		const _helperIL9qUO = {
			"sortSubcommands": _sortSubcommandsurYQ7pg,
		"subcommandTerm": _subcommandTermtXRPS4C
	}
		const _returnValuenmwRkGc = await _helpergjMhTEK.formatHelp(_cmdL6s3l2Y, _helperIL9qUO)
		const _cmdxzlTSby = null;
		const _sortSubcommandsOqxna05 = true;
		const _arrayValueoemLXxl = 2.9596300391446135;
		const _arrayValuediOCzJ5 = undefined;
		const _returnValue2NPYCK = [_arrayValueoemLXxl, _arrayValuediOCzJ5]
		const _subcommandTermhw1Px5l = () => { return _returnValue2NPYCK };
		const _helperjkrlNib = {
			"sortSubcommands": _sortSubcommandsOqxna05,
		"subcommandTerm": _subcommandTermhw1Px5l
	}
		const _returnValueFwkmbp1 = await _helpergjMhTEK.longestSubcommandTermLength(_cmdxzlTSby, _helperjkrlNib)
		const _arrayValueRMMQNhZ = 6.137932563561101;
		const _arrayValueCYqSvlA = {
		
	}
		const _arrayValueMp2Dkae = undefined;
		const _arrayValueZv0zvUB = 8.762411147481458;
		const _cmdkl7DItz = [_arrayValueRMMQNhZ, _arrayValueCYqSvlA, _arrayValueMp2Dkae, _arrayValueZv0zvUB]
		const _returnValueALHrPS = await _helpergjMhTEK.subcommandDescription(_cmdkl7DItz)
		const _returnValueNj5fwBB = await _helpervsTpga.padWidth(_cmdoE0QPyT, _helpergjMhTEK)
		const _returnValueDAy0p1T = await _HelpaLHBt6Q.formatHelp(_cmdpwOcILQ, _helpervsTpga)
		const _returnValuebwoQCSX = -9.573186440605635;
		const _optionlBUurXR = () => { return _returnValuebwoQCSX };
		const _returnValuergUlO2D = await _HelpaLHBt6Q.optionDescription(_optionlBUurXR)
		const _returnValuegIV3nM6 = undefined;
		const _arrayValuehjwdJDj = () => { return _returnValuegIV3nM6 };
		const _arrayValue3xa3Nc = undefined;
		const _arrayValueBcrJRIU = [_arrayValue3xa3Nc]
		const _arrayValueuraPDu = [_arrayValuehjwdJDj, _arrayValueBcrJRIU]
		const _arrayValueTV5ToPO = -3.2428266695053454;
		const _arrayValueGnVwhLY = null;
		const _arrayValuetjb4Oav = 9.687171582806503;
		const _arrayValueB2EBo4p = "ETGBdUTQGv6GHPUOc4J4TNJtCNplc1ODajBRgvpwPecIeXxBfseRq6P";
		const _arrayValueZGzYna = [_arrayValueGnVwhLY, _arrayValuetjb4Oav, _arrayValueB2EBo4p]
		const _returnValueVB3gZRO = [_arrayValueuraPDu, _arrayValueTV5ToPO, _arrayValueZGzYna]
		const _cmdc06V0CI = () => { return _returnValueVB3gZRO };
		const _returnValueaUoQwJ7 = await _HelpaLHBt6Q.subcommandTerm(_cmdc06V0CI)
		const _returnValuePh5tYHR = []
		const _cmdWpYHlDX = () => { return _returnValuePh5tYHR };
		const _returnValuevWEa98p = undefined;
		const _longestOptionTermLengthGNHQXLh = () => { return _returnValuevWEa98p };
		const _arrayValueGvUnWVT = undefined;
		const _returnValueqflIEY = [_arrayValueGvUnWVT]
		const _longestSubcommandTermLengthZQgnBTe = () => { return _returnValueqflIEY };
		const _returnValueeGe53kc = 9.308608301092779;
		const _longestArgumentTermLengthfvfJ02o = () => { return _returnValueeGe53kc };
		const _helperSt0Neeu = {
			"longestOptionTermLength": _longestOptionTermLengthGNHQXLh,
		"longestSubcommandTermLength": _longestSubcommandTermLengthZQgnBTe,
		"longestArgumentTermLength": _longestArgumentTermLengthfvfJ02o
	}
		const _returnValueSELV6Nn = await _HelpaLHBt6Q.padWidth(_cmdWpYHlDX, _helperSt0Neeu)
		const _cmdBDnfRS = 9.924489945676509;
		const _returnValueOkpbwj = await _HelpaLHBt6Q.subcommandDescription(_cmdBDnfRS)
	});

	it('test for Help', async () => {
		const _HelpwB5OZKU = new Help()
		const _cmddBA7QDE = null;
		const _helperEapYUx9 = new Help()
		const _cmdJzHk8wX = "yPKiIOhVTvMPU3Ba7JEiOTNSTL7AN";
		const _returnValuewCuDja = 1.5326314446751876;
		const _longestOptionTermLengthDuAvsBz = () => { return _returnValuewCuDja };
		const _returnValuedcTEn79 = null;
		const _longestSubcommandTermLengthODOG2cM = () => { return _returnValuedcTEn79 };
		const _returnValue1Rchdy = true;
		const _longestArgumentTermLengthMFhMeq = () => { return _returnValue1Rchdy };
		const _helperqql1lz4 = {
			"longestOptionTermLength": _longestOptionTermLengthDuAvsBz,
		"longestSubcommandTermLength": _longestSubcommandTermLengthODOG2cM,
		"longestArgumentTermLength": _longestArgumentTermLengthMFhMeq
	}
		const _returnValuenw1zBCO = await _helperEapYUx9.padWidth(_cmdJzHk8wX, _helperqql1lz4)
		const __nameLXqL9hq = undefined;
		const __aliasesv1PbBcU = {
		
	}
		const _parentTGbFuVY = false;
		const _returnValueuokqFSC = undefined;
		const _usageLjbSzQT = () => { return _returnValueuokqFSC };
		const _cmdNdQ45GJ = {
			"_name": __nameLXqL9hq,
		"_aliases": __aliasesv1PbBcU,
		"parent": _parentTGbFuVY,
		"usage": _usageLjbSzQT
	}
		const _returnValuebK1rWaq = await _helperEapYUx9.commandUsage(_cmdNdQ45GJ)
		const _cmdSYXYykF = 4.33777745849433;
		const _sortSubcommandsRBo0E1I = 2.9784128104595897;
		const _returnValuekdYZxyO = true;
		const _subcommandTermIuO81r8 = () => { return _returnValuekdYZxyO };
		const _helperuKcGzpT = {
			"sortSubcommands": _sortSubcommandsRBo0E1I,
		"subcommandTerm": _subcommandTermIuO81r8
	}
		const _returnValuePNXZ2Pe = await _helperEapYUx9.longestSubcommandTermLength(_cmdSYXYykF, _helperuKcGzpT)
		const _returnValuev4phG3 = await _HelpwB5OZKU.longestOptionTermLength(_cmddBA7QDE, _helperEapYUx9)
		const _arrayValueNzLlWtl = undefined;
		const _cmdSXTbJTk = [_arrayValueNzLlWtl]
		const _sortSubcommandsjBYvp3k = undefined;
		const _subcommandTermY9nPOyh = null;
		const _helperRQTDXT = {
			"sortSubcommands": _sortSubcommandsjBYvp3k,
		"subcommandTerm": _subcommandTermY9nPOyh
	}
		const _returnValueIdeGTpk = await _HelpwB5OZKU.longestSubcommandTermLength(_cmdSXTbJTk, _helperRQTDXT)
		const _argChoicesucsVBUD = {
		
	}
		const _negateUG54tG9 = "nzR84j4iPLUUXA9jwExiTIueZFIMGyPf";
		const _defaultValuedY3zTMk = undefined;
		const _returnValueW08u7HU = {
		
	}
		const _defaultValueDescriptionZH16HkA = () => { return _returnValueW08u7HU };
		const _envVarBxH9YEQ = undefined;
		const _descriptionhajdMnC = {
		
	}
		const _optionOEpmuGh = {
			"argChoices": _argChoicesucsVBUD,
		"negate": _negateUG54tG9,
		"defaultValue": _defaultValuedY3zTMk,
		"defaultValueDescription": _defaultValueDescriptionZH16HkA,
		"envVar": _envVarBxH9YEQ,
		"description": _descriptionhajdMnC
	}
		const _returnValueYqsacgO = await _HelpwB5OZKU.optionDescription(_optionOEpmuGh)
		const _returnValuepwAwa9F = false;
		const _returnValueMxgG9A = () => { return _returnValuepwAwa9F };
		const _optionK9tcjS = () => { return _returnValueMxgG9A };
		const _returnValueDhJIZcJ = await _HelpwB5OZKU.optionDescription(_optionK9tcjS)
		const _returnValueMFrkSpj = {
		
	}
		const _cmdruNzJnN = () => { return _returnValueMFrkSpj };
		const _returnValueFySH8YK = await _HelpwB5OZKU.subcommandDescription(_cmdruNzJnN)
	});

	it('test for Help', async () => {
		const _HelpShNq5CM = new Help()
		const _arrayValuemTd41iE = null;
		const _arrayValuePmEAeSn = null;
		const _returnValueTJwf1T = [_arrayValuemTd41iE, _arrayValuePmEAeSn]
		const _namei5RMyUP = () => { return _returnValueTJwf1T };
		const _argumentiP9OKNX = {
			"name": _namei5RMyUP
	}
		const _returnValueM4I4nK9 = await _HelpShNq5CM.argumentTerm(_argumentiP9OKNX)
	});

	it('test for Help', async () => {
		const _HelpG7IOKT9 = new Help()
		const _cmdEPmkQsp = "ClNuWj92k8F1xyCVmCEHbSkPehIbpFHYnkW5KaxXalBl7KhWGTp4iwZyP3iwiobRSyc";
		const _returnValueIJL26Ph = await _HelpG7IOKT9.subcommandTerm(_cmdEPmkQsp)
		const _cmdgGDrg42 = undefined;
		const _helperql3GCYm = new Help()
		const _returnValuel7xryTp = undefined;
		const _cmdGAfyxm1 = () => { return _returnValuel7xryTp };
		const _arrayValuet7XhwmY = -8.511121843543188;
		const _arrayValuegFKMUfY = "ZhroMF6jHOKigNlPLiJegPEPuHWuij09b2OaUdzkg97SvW5Y";
		const _helperWldIk3Z = [_arrayValuet7XhwmY, _arrayValuegFKMUfY]
		const _returnValueOPXx1YY = await _helperql3GCYm.longestOptionTermLength(_cmdGAfyxm1, _helperWldIk3Z)
		const _cmdysRr0FC = []
		const _returnValueJ0AeFz = await _helperql3GCYm.subcommandTerm(_cmdysRr0FC)
		const _returnValuep2GzGys = await _HelpG7IOKT9.padWidth(_cmdgGDrg42, _helperql3GCYm)
		const _cmdvP34urB = []
		const _helperJir2UW = "GkaH6EeyYoXLtSaQtVGeHzXkrHbvhqW6tF7zJ601";
		const _returnValueNVPLtnX = await _HelpG7IOKT9.longestSubcommandTermLength(_cmdvP34urB, _helperJir2UW)
		const __argseimn1LB = {
		
	}
		const __nameKDvnbFf = -2.7482399531449992;
		const __aliaseshqpxRv9 = {
		
	}
		const _optionskFa6O1 = {
		
	}
		const _cmdyxzAqht = {
			"_args": __argseimn1LB,
		"_name": __nameKDvnbFf,
		"_aliases": __aliaseshqpxRv9,
		"options": _optionskFa6O1
	}
		const _returnValueQbKDCga = await _HelpG7IOKT9.subcommandTerm(_cmdyxzAqht)
	});

	it('test for Help', async () => {
		const _HelpK75M60X = new Help()
		const _nameWVM8N2K = {
		
	}
		const _cmdQzpqE6c = new Command(_nameWVM8N2K)
		const _flagsxttMOGz = false;
		const _descriptionhh6eBWo = undefined;
		const _returnValueW30hqjf = await _cmdQzpqE6c.helpOption(_flagsxttMOGz, _descriptionhh6eBWo)
		const _displaySuggestionGVRXXnL = true;
		const _returnValueFlro1gZ = await _cmdQzpqE6c.showSuggestionAfterError(_displaySuggestionGVRXXnL)
		const _returnValueOHccIqn = await _HelpK75M60X.visibleArguments(_cmdQzpqE6c)
		const _arrayValueTaqz45 = undefined;
		const _cmdUaIUCCk = [_arrayValueTaqz45]
		const _returnValuepSTTLoG = await _HelpK75M60X.subcommandTerm(_cmdUaIUCCk)
		const __nameT9vqXqZ = "lcO6wypIXKyC1Q21z2tARtr0p33fipHvt5bUlcTJTdAcVRG9eJQy67c3unszXtjGnj5pIgXf8qnfD";
		const _returnValueg49S69w = 9.662190923346795;
		const __aliases63SxFd = () => { return _returnValueg49S69w };
		const _parentOXlsPEW = {
		
	}
		const _returnValuejh7ktEF = null;
		const _usagefR80W3 = () => { return _returnValuejh7ktEF };
		const _cmdTGDwRb7 = {
			"_name": __nameT9vqXqZ,
		"_aliases": __aliases63SxFd,
		"parent": _parentOXlsPEW,
		"usage": _usagefR80W3
	}
		const _returnValuesMEl7rp = await _HelpK75M60X.commandUsage(_cmdTGDwRb7)
	});

	it('test for Help', async () => {
		const _HelpmzzCIGp = new Help()
		const _cmdXZPQU9L = undefined;
		const _returnValuebcU6zFJ = await _HelpmzzCIGp.commandDescription(_cmdXZPQU9L)
		const _cmdh6Zkmhv = null;
		const _returnValueVqonNJI = "qqmuhvG4uIpYris63O5SNqMpJr";
		const _helperclDG9kD = () => { return _returnValueVqonNJI };
		const _returnValueOmQBL7H = await _HelpmzzCIGp.longestSubcommandTermLength(_cmdh6Zkmhv, _helperclDG9kD)
		const _flagssKlcXu = "qEV2rAqpWVRhW5l9B5PNzAtSBvGXSwCe5khuikwF";
		const _descriptionghNVCzq = undefined;
		const _optionSBqkBxO = new Option(_flagssKlcXu, _descriptionghNVCzq)
		const _returnValueGD0Y6Mh = await _optionSBqkBxO.name()
		const _argTdLU2m = {
		
	}
		const _returnValuekMzVWVi = await _optionSBqkBxO.is(_argTdLU2m)
		const _returnValueDI7I1Cp = await _HelpmzzCIGp.optionTerm(_optionSBqkBxO)
		const _optionskXnHL6z = {
		
	}
		const __hasHelpOption8d5Y07 = undefined;
		const __helpShortFlagN9mamQK = null;
		const _arrayValuet0vgsuR = null;
		const _arrayValueLV79AgY = "II8N8wspMcBsh44t3sy5AlWHMVynbbTNLlwM9DIslUSOlC6OHGPaE6LVSkM8a2RQE6A3Ee";
		const _arrayValueDUerjV = [_arrayValuet0vgsuR, _arrayValueLV79AgY]
		const _arrayValueVi8tVSb = null;
		const _arrayValuerV9kaQ = 9.485419081062915;
		const _returnValueUZs1gF = [_arrayValueDUerjV, _arrayValueVi8tVSb, _arrayValuerV9kaQ]
		const __findOptionnqAxLHV = () => { return _returnValueUZs1gF };
		const __helpLongFlagkcCzxw8 = undefined;
		const _createOptionwAQtJ3v = true;
		const __helpDescriptionzw0H2yW = "LsV2IKo9V5kFOe2";
		const __helpFlagsLRgFKGc = null;
		const _cmdjvrC6XB = {
			"options": _optionskXnHL6z,
		"_hasHelpOption": __hasHelpOption8d5Y07,
		"_helpShortFlag": __helpShortFlagN9mamQK,
		"_findOption": __findOptionnqAxLHV,
		"_helpLongFlag": __helpLongFlagkcCzxw8,
		"createOption": _createOptionwAQtJ3v,
		"_helpDescription": __helpDescriptionzw0H2yW,
		"_helpFlags": __helpFlagsLRgFKGc
	}
		const _returnValueGQeiSB7 = await _HelpmzzCIGp.visibleOptions(_cmdjvrC6XB)
	});

	it('test for Help', async () => {
		const _HelptAEOncB = new Help()
		const _arrayValuedG7btZ = true;
		const _cmdBd5Jqpn = [_arrayValuedG7btZ]
		const _returnValueH6R4Srs = await _HelptAEOncB.visibleCommands(_cmdBd5Jqpn)
		const __argsR8RDoQY = "B6rAsPAef79gLlg2QAmRWQYt2R";
		const __nameKk8F96l = 4.067942182577751;
		const __aliasesrfIciFE = {
		
	}
		const _optionsRmo2b2h = {
		
	}
		const _cmdxbfITB = {
			"_args": __argsR8RDoQY,
		"_name": __nameKk8F96l,
		"_aliases": __aliasesrfIciFE,
		"options": _optionsRmo2b2h
	}
		const _returnValuejLY2Dk0 = await _HelptAEOncB.subcommandTerm(_cmdxbfITB)
		const _cmdVsHa8SF = "d7AalNtEQc4YNzoFvAjYHuQNguJT0uA2wdpsuWCjsQL8p3EEfvg3RS";
		const _returnValuehgR9XMU = await _HelptAEOncB.commandUsage(_cmdVsHa8SF)
		const __nameoitjnxR = "vQaYnPW6Sqbt3Ud1DaVPFNua6wSO3Kvq5A3jIxdzYgIwtiWClJnKiSzMqrLM3P8Ecel";
		const __aliasesRvoGIGu = {
		
	}
		const _parentgkjQ6m7 = {
		
	}
		const _arrayValueVrgcCXT = "MbkLGOkNHbWfQKny6JjbW";
		const _arrayValueOTCiMdg = false;
		const _arrayValuezp1Evs4 = {
		
	}
		const _arrayValued2rb9AK = null;
		const _arrayValueX0wPNvT = null;
		const _arrayValueAVboKZW = [_arrayValuezp1Evs4, _arrayValued2rb9AK, _arrayValueX0wPNvT]
		const _returnValueVW9S2vK = [_arrayValueVrgcCXT, _arrayValueOTCiMdg, _arrayValueAVboKZW]
		const _usagefL9Ph82 = () => { return _returnValueVW9S2vK };
		const _cmdpT2KEci = {
			"_name": __nameoitjnxR,
		"_aliases": __aliasesRvoGIGu,
		"parent": _parentgkjQ6m7,
		"usage": _usagefL9Ph82
	}
		const _returnValue3v6swo = await _HelptAEOncB.commandUsage(_cmdpT2KEci)
	});

	it('test for Help', async () => {
		const _HelpeXJdLbm = new Help()
		const _returnValueOQEz4gr = null;
		const _cmdIDigcXc = () => { return _returnValueOQEz4gr };
		const _sortSubcommandszHFGqH0 = []
		const _returnValueNhaIVcK = undefined;
		const _returnValueRd6mQUV = () => { return _returnValueNhaIVcK };
		const _subcommandTermHfLRUdx = () => { return _returnValueRd6mQUV };
		const _helperjvEiWDw = {
			"sortSubcommands": _sortSubcommandszHFGqH0,
		"subcommandTerm": _subcommandTermHfLRUdx
	}
		const _returnValuer3yP687 = await _HelpeXJdLbm.formatHelp(_cmdIDigcXc, _helperjvEiWDw)
		const _arrayValue8ydjdY = true;
		const _arrayValued1YUN4T = [_arrayValue8ydjdY]
		const _arrayValueKRyiuVP = {
		
	}
		const _arrayValuefHjlJXN = true;
		const _arrayValueOndSiw4 = "uzpoBEtiesDv7cXFazKW4TyHK";
		const _arrayValuete7Akb = [_arrayValuefHjlJXN, _arrayValueOndSiw4]
		const _returnValueqLzthrg = false;
		const _arrayValueTTXhNH2 = () => { return _returnValueqLzthrg };
		const _argumentu8ahJkA = [_arrayValued1YUN4T, _arrayValueKRyiuVP, _arrayValuete7Akb, _arrayValueTTXhNH2]
		const _returnValue31AZQm = await _HelpeXJdLbm.argumentDescription(_argumentu8ahJkA)
		const _exitCodeSsdjX79 = undefined;
		const _codeq2fRDG0 = null;
		const _messageXptoCV = false;
		const _argumentZU4CAnG = new CommanderError(_exitCodeSsdjX79, _codeq2fRDG0, _messageXptoCV)
		const _returnValueI6mlXQy = await _HelpeXJdLbm.argumentTerm(_argumentZU4CAnG)
	});

	it('test for Help', async () => {
		const _HelpQvTrbs = new Help()
		const _arrayValueWI3HrR1 = null;
		const _arrayValuet6Si7hH = 6.571296157468975;
		const _cmdkqJ8DUM = [_arrayValueWI3HrR1, _arrayValuet6Si7hH]
		const _returnValuexmiEGOo = await _HelpQvTrbs.visibleOptions(_cmdkqJ8DUM)
		const _cmdCMJZlQc = undefined;
		const _returnValueHrl6Kuj = await _HelpQvTrbs.commandDescription(_cmdCMJZlQc)
		const _arrayValueCpjqx9h = 7.749715868744428;
		const _arrayValueMozqfI = undefined;
		const _arrayValueDT723oy = "Liv7iuQPmzlTAEKyh71BhMAOYxLDpqFyKEG";
		const _arrayValueSWSyrnF = null;
		const _arrayValuefun49gf = true;
		const _arrayValuegh9VKWX = [_arrayValueDT723oy, _arrayValueSWSyrnF, _arrayValuefun49gf]
		const _arrayValueMiqwflX = undefined;
		const _returnValueMqVlvuP = [_arrayValueCpjqx9h, _arrayValueMozqfI, _arrayValuegh9VKWX, _arrayValueMiqwflX]
		const _cmd5umJUK = () => { return _returnValueMqVlvuP };
		const _returnValueZM6dTou = await _HelpQvTrbs.commandDescription(_cmd5umJUK)
		const _cmdsHZPS1t = "lkshcWzRKdbnmlL3UlA2UHmeS3mi0dWERZ3jh6eGAd3s9IxR6mcoRO";
		const _returnValuehbWGhBC = await _HelpQvTrbs.visibleOptions(_cmdsHZPS1t)
		const _optionAqt90Qp = "wXETO";
		const _returnValuejvGqQOp = await _HelpQvTrbs.optionTerm(_optionAqt90Qp)
	});

	it('test for Help', async () => {
		const _HelpWmbuTF = new Help()
		const _optioniHFSzv = null;
		const _returnValuermojz61 = await _HelpWmbuTF.optionDescription(_optioniHFSzv)
		const _arrayValuekLoeXTr = false;
		const _arrayValueuc3mHC0 = 4.385054667425024;
		const _arrayValuehpdSDMV = [_arrayValueuc3mHC0]
		const _returnValuefwOy9XH = [_arrayValuekLoeXTr, _arrayValuehpdSDMV]
		const _cmdeZWLfdI = () => { return _returnValuefwOy9XH };
		const _returnValueiDZj9L = await _HelpWmbuTF.commandUsage(_cmdeZWLfdI)
		const _cmdt39w1yc = null;
		const _helperw29C9iD = []
		const _returnValuetjmymFq = await _HelpWmbuTF.longestOptionTermLength(_cmdt39w1yc, _helperw29C9iD)
		const _returnValuet3BVE9 = 6.023776590211597;
		const _optionoNdqu21 = () => { return _returnValuet3BVE9 };
		const _returnValueiAA4Wv = await _HelpWmbuTF.optionTerm(_optionoNdqu21)
		const _returnValuehhOnD5h = null;
		const _argumentFTRhqJC = () => { return _returnValuehhOnD5h };
		const _returnValueJrMYeFe = await _HelpWmbuTF.argumentTerm(_argumentFTRhqJC)
	});

	it('test for Help', async () => {
		const _HelpASEY8LU = new Help()
		const _arrayValuewv2PNqC = "0C4fUdhIRbfofI3AwId4ABxwhyrtURYfteP8KMHw9gE";
		const _arrayValueuT1bCUG = "UrNjjG3CLSEHJgMuzcm2SSvbLlzEqdJdoJjmhNrdFuar9j6es1ETWJYTOjsAwEliOSOBydNe4chObo9lJy5MGqP17eB9yNe";
		const _arrayValueabzkc4e = "yvAtiNAFyDs8VaEeWjRwWHN9ABHFsxu";
		const _arrayValueoU7YhE = [_arrayValueabzkc4e]
		const _arrayValuezk86Abe = [_arrayValueoU7YhE]
		const _arrayValuemU7CPyM = "jDDfA4P12qN38gj48j3jN7MqzQxKYQq11b1bqOJjsLN1O0Zmwl3jNpB5dUabUAkqtaT9vpTcbc7cjCqcg5hs1EZF";
		const _arrayValueisbMT8o = {
		
	}
		const _optionKaiekoZ = [_arrayValuewv2PNqC, _arrayValueuT1bCUG, _arrayValuezk86Abe, _arrayValuemU7CPyM, _arrayValueisbMT8o]
		const _returnValueHquGel = await _HelpASEY8LU.optionTerm(_optionKaiekoZ)
		const _returnValueQHrANGO = undefined;
		const _optionTl7R09 = () => { return _returnValueQHrANGO };
		const _returnValueXK6IOT3 = await _HelpASEY8LU.optionDescription(_optionTl7R09)
	});

	it('test for Help', async () => {
		const _HelpOTL1uiL = new Help()
		const _cmd9mlFK0 = -8.932622837764796;
		const _returnValuefJOahRK = "LWsFSyyilJlf5J7OzKg1DePYEFzegTpNsHYCHcbXM47FKMBjLjW6B8Bm3lA0UzFxYjPMa6hEFWzUC1JyXaeHi3pwmETy7P4";
		const _helperjLT7mM1 = () => { return _returnValuefJOahRK };
		const _returnValueIbWmuZ = await _HelpOTL1uiL.longestArgumentTermLength(_cmd9mlFK0, _helperjLT7mM1)
		const _optionsq19sXGE = {
		
	}
		const _arrayValue9nyxQa = undefined;
		const _arrayValuetO7kc2m = "1qWY";
		const _arrayValueUKVU97f = {
		
	}
		const __hasHelpOptionkWxj2v1 = [_arrayValue9nyxQa, _arrayValuetO7kc2m, _arrayValueUKVU97f]
		const __helpShortFlagunqqc6V = {
		
	}
		const _returnValuezQ7sKr = undefined;
		const _returnValueFe5wKko = () => { return _returnValuezQ7sKr };
		const __findOptionJ9a2X7A = () => { return _returnValueFe5wKko };
		const __helpLongFlagSZ4CVlh = "ufK7QxelbVccvl2hPryUHKLjVANMNOCgPDLxk5b5lrDCUItp4RXtCH3dvf1gi4NjhSVOyyhsPVL";
		const _returnValueXsXRheI = []
		const _createOptionk5r3NX4 = () => { return _returnValueXsXRheI };
		const __helpDescriptionWNyQvOx = 5.082811353729447;
		const _arrayValuedPYu0BJ = undefined;
		const __helpFlagsbFvKibv = [_arrayValuedPYu0BJ]
		const _cmdR1WSiPF = {
			"options": _optionsq19sXGE,
		"_hasHelpOption": __hasHelpOptionkWxj2v1,
		"_helpShortFlag": __helpShortFlagunqqc6V,
		"_findOption": __findOptionJ9a2X7A,
		"_helpLongFlag": __helpLongFlagSZ4CVlh,
		"createOption": _createOptionk5r3NX4,
		"_helpDescription": __helpDescriptionWNyQvOx,
		"_helpFlags": __helpFlagsbFvKibv
	}
		const _returnValueAba4olM = await _HelpOTL1uiL.visibleOptions(_cmdR1WSiPF)
		const __argsDescriptionK3VCmB = {
		
	}
		const __argsmcTF7KV = {
		
	}
		const _cmdQ2vl1DZ = {
			"_argsDescription": __argsDescriptionK3VCmB,
		"_args": __argsmcTF7KV
	}
		const _returnValueum1uqdR = await _HelpOTL1uiL.visibleArguments(_cmdQ2vl1DZ)
		const _argument6A7two = "9Rzl4AOsouLP6yWiSAd";
		const _returnValueXjcbRLO = await _HelpOTL1uiL.argumentDescription(_argument6A7two)
	});

	it('test for Help', async () => {
		const _Helpuqw1hVC = new Help()
		const _arrayValuexOgqJK = "KUVuVDuPldvV0e7E3RD0ZwPloyM83OCgallxz7lKk";
		const _arrayValueurGnIVU = undefined;
		const _strgUoLlu = [_arrayValuexOgqJK, _arrayValueurGnIVU]
		const _widthgqCtBdU = 6.208495930193539;
		const _indentJynwEIK = -1.4533463011816377;
		const _minColumnWidthTuTZzEA = -0.6573816290392429;
		const _returnValueM4InSbH = await _Helpuqw1hVC.wrap(_strgUoLlu, _widthgqCtBdU, _indentJynwEIK, _minColumnWidthTuTZzEA)
		const _flagszl4UAC = true;
		const _optionlYwqSuS = {
			"flags": _flagszl4UAC
	}
		const _returnValueT75dOBH = await _Helpuqw1hVC.optionTerm(_optionlYwqSuS)
	});

	it('test for Help', async () => {
		const _HelphSqlzKt = new Help()
		const _cmdUYPYT8A = null;
		const _helperAN8LmL = 7.43313856791254;
		const _returnValuekbGxY05 = await _HelphSqlzKt.longestOptionTermLength(_cmdUYPYT8A, _helperAN8LmL)
		const _namezGHJDr7 = undefined;
		const _cmdZetto4M = new Command(_namezGHJDr7)
		const _returnValueLx66fwM = true;
		const _receivedArgsgFjNbhb = () => { return _returnValueLx66fwM };
		const _returnValuezZRiw5u = await _cmdZetto4M._excessArguments(_receivedArgsgFjNbhb)
		const _returnValuesBwGrpH = await _cmdZetto4M._checkNumberOfArguments()
		const _returnValueniz2QIb = await _cmdZetto4M._hasImplicitHelpCommand()
		const _returnValueuzwSkoe = await _HelphSqlzKt.visibleCommands(_cmdZetto4M)
		const _arrayValueHO8ry7O = null;
		const _arrayValuewO4hGQG = null;
		const _argumentIpvWLPg = [_arrayValueHO8ry7O, _arrayValuewO4hGQG]
		const _returnValueegMgUB5 = await _HelphSqlzKt.argumentDescription(_argumentIpvWLPg)
		const __argsdMoNZNS = {
		
	}
		const __nameTqgD1tD = 2.703090714142478;
		const __aliasesDjYUK30 = {
		
	}
		const _optionsRpRJdot = {
		
	}
		const _cmdeEGMxp = {
			"_args": __argsdMoNZNS,
		"_name": __nameTqgD1tD,
		"_aliases": __aliasesDjYUK30,
		"options": _optionsRpRJdot
	}
		const _returnValuelWWbM6I = await _HelphSqlzKt.subcommandTerm(_cmdeEGMxp)
	});

	it('test for Help', async () => {
		const _HelpwIk3VIm = new Help()
		const _strEd4JAjK = "FatMatnhVJLLZRlmubdoibkUy17NXVDJ9pnwOey6LvilXjC4g4y1cNl3htL6WiS1d6PFq";
		const _widthyCUDeoe = -0.09542921863821796;
		const _indentCwxLuT = 5.037936325294597;
		const _minColumnWidthrT52el5 = -1.3920306235587567;
		const _returnValuealMNN9X = await _HelpwIk3VIm.wrap(_strEd4JAjK, _widthyCUDeoe, _indentCwxLuT, _minColumnWidthrT52el5)
		const _cmdvjOvYtD = "2tLgOLnkaQEwDBHBGklBYpB74gCWISyeMroHLw68b7zxpaTpke9xQ1se7D2Hw";
		const _returnValueWCg7Mww = await _HelpwIk3VIm.subcommandTerm(_cmdvjOvYtD)
		const _cmdINizzxi = true;
		const _returnValueUsJFAs4 = null;
		const _visibleArgumentsvfdITX = () => { return _returnValueUsJFAs4 };
		const _returnValueOuQLhOH = -8.865844817650885;
		const _argumentTermVylhOqV = () => { return _returnValueOuQLhOH };
		const _helperBi7TusX = {
			"visibleArguments": _visibleArgumentsvfdITX,
		"argumentTerm": _argumentTermVylhOqV
	}
		const _returnValuegjX8LBk = await _HelpwIk3VIm.longestArgumentTermLength(_cmdINizzxi, _helperBi7TusX)
	});

	it('test for Help', async () => {
		const _HelpOp60IEo = new Help()
		const _argumentbVoPDz = "u7izC05hWCN59Ie1cYFRJNNmirsWjI537wtuL7C4VxQn1";
		const _returnValuehsvY4uD = await _HelpOp60IEo.argumentDescription(_argumentbVoPDz)
		const _arrayValuetFANg00 = null;
		const _arrayValueSTor5Od = 4.12712928586712;
		const _cmdfUTbZ0 = [_arrayValuetFANg00, _arrayValueSTor5Od]
		const _helperHYd5qkR = new Help()
		const _messageh1tBPwj = null;
		const _argumentsXbqYlP = new InvalidArgumentError(_messageh1tBPwj)
		const _returnValueFN23Ge5 = await _helperHYd5qkR.argumentTerm(_argumentsXbqYlP)
		const _cmdSxXCWn = "uwA7QIcGKsBwNeJt1KJFZbrKlH";
		const _sortSubcommandsBlXRvft = {
		
	}
		const _returnValueq1ZAJS = null;
		const _subcommandTermSbFGMa8 = () => { return _returnValueq1ZAJS };
		const _helperCKF6hC = {
			"sortSubcommands": _sortSubcommandsBlXRvft,
		"subcommandTerm": _subcommandTermSbFGMa8
	}
		const _returnValuejofrZaQ = await _helperHYd5qkR.longestSubcommandTermLength(_cmdSxXCWn, _helperCKF6hC)
		const _arrayValueksXKxU4 = true;
		const _namevYYShFL = [_arrayValueksXKxU4]
		const _descriptionqVAzc0C = 3.4531419348840373;
		const _cmdA1ZFQAN = new Argument(_namevYYShFL, _descriptionqVAzc0C)
		const _fnyKyWnE = undefined;
		const _returnValueZvnpWO9 = await _cmdA1ZFQAN.argParser(_fnyKyWnE)
		const _valuepf2NZfd = 6.7213633611371115;
		const _arrayValueSnnzGF = false;
		const _arrayValueMTzN75m = "Xl8wUA7GnyuVafrKmvAwKb4SoMUecHQ2Q1gJez";
		const _arrayValuevAem6TF = undefined;
		const _arrayValue3ryr2m = false;
		const _arrayValueYq7Hljl = -0.3492759163695265;
		const _arrayValueRnza8dL = [_arrayValueYq7Hljl]
		const _returnValueNpZTnVj = [_arrayValue3ryr2m, _arrayValueRnza8dL]
		const _arrayValueCwCc8Zm = () => { return _returnValueNpZTnVj };
		const _arrayValueliEDV1k = undefined;
		const _arrayValueZW4GRJJ = [_arrayValueCwCc8Zm, _arrayValueliEDV1k]
		const _arrayValuen2EbRJ7 = [_arrayValueMTzN75m, _arrayValuevAem6TF, _arrayValueZW4GRJJ]
		const _arrayValuevDnqQWy = "OtZNnaXub";
		const _returnValuevUmas6b = [_arrayValueSnnzGF, _arrayValuen2EbRJ7, _arrayValuevDnqQWy]
		const _previousQ2Uena = () => { return _returnValuevUmas6b };
		const _returnValueLFdZHG = await _cmdA1ZFQAN._concatValue(_valuepf2NZfd, _previousQ2Uena)
		const _arrayValuehlTaxKY = undefined;
		const _arrayValuebF0BXgX = "3AzjUXR9E5G25qicXAmff75TfMAYXsuOt6a7brIzDJTuPoYz";
		const _arrayValueupUzEEZ = undefined;
		const _valueB2QV4ST = [_arrayValuehlTaxKY, _arrayValuebF0BXgX, _arrayValueupUzEEZ]
		const _descriptioniyeNWhz = {
		
	}
		const _returnValuexs5jnPF = await _cmdA1ZFQAN.default(_valueB2QV4ST, _descriptioniyeNWhz)
		const _returnValueUakPk4 = await _cmdA1ZFQAN.argOptional()
		const _returnValuePIoXk7t = await _cmdA1ZFQAN.name()
		const _returnValuexfB4G8 = await _helperHYd5qkR.subcommandTerm(_cmdA1ZFQAN)
		const _cmdAxnPsM = "5zHmFgV8HGQ1q9iOuTceVRN8B3zrWAdvS7oQF4QKDSe0cSXyFNOp6wbidAt2zw9FHOS5A";
		const _sortSubcommandsrnwSdAL = {
		
	}
		const _returnValuezTPhgsb = null;
		const _subcommandTermTowZ9Pt = () => { return _returnValuezTPhgsb };
		const _helperm36LPXb = {
			"sortSubcommands": _sortSubcommandsrnwSdAL,
		"subcommandTerm": _subcommandTermTowZ9Pt
	}
		const _returnValueGyzPHTS = await _helperHYd5qkR.formatHelp(_cmdAxnPsM, _helperm36LPXb)
		const _returnValueZOvS5td = await _HelpOp60IEo.longestSubcommandTermLength(_cmdfUTbZ0, _helperHYd5qkR)
	});

	it('test for Help', async () => {
		const _HelpUjNpXOQ = new Help()
		const __argsDescriptionDTg0oYx = {
		
	}
		const __argsJ8CJdka = {
		
	}
		const _cmdKRLgZR = {
			"_argsDescription": __argsDescriptionDTg0oYx,
		"_args": __argsJ8CJdka
	}
		const _returnValueumYozr3 = await _HelpUjNpXOQ.visibleArguments(_cmdKRLgZR)
		const _argChoicesGnbIjb = {
		
	}
		const _defaultValuelO07xwM = undefined;
		const _defaultValueDescriptionJsGZT0s = "pjIIAV8E";
		const _descriptioneJt7gZo = undefined;
		const _argumentVBkS48l = {
			"argChoices": _argChoicesGnbIjb,
		"defaultValue": _defaultValuelO07xwM,
		"defaultValueDescription": _defaultValueDescriptionJsGZT0s,
		"description": _descriptioneJt7gZo
	}
		const _returnValueM0oy996 = await _HelpUjNpXOQ.argumentDescription(_argumentVBkS48l)
		const _cmdxTBtF8h = false;
		const _arrayValueFH3jj87 = true;
		const _arrayValuePHW8JPF = false;
		const _helperDT9hngo = [_arrayValueFH3jj87, _arrayValuePHW8JPF]
		const _returnValuegpE4SmO = await _HelpUjNpXOQ.longestOptionTermLength(_cmdxTBtF8h, _helperDT9hngo)
		const _returnValuegkGGVFg = undefined;
		const _includesRtaB7Mm = () => { return _returnValuegkGGVFg };
		const _flagsfTS3OHO = {
			"includes": _includesRtaB7Mm
	}
		const _descriptionmWKzc96 = "cOfxstchKFjUfyF1IfQwI0Cqd1O0LCOp3OM7DpgqlCiPJYXrmOXQTugelUWlyftN2";
		const _cmdEeQ394r = new Option(_flagsfTS3OHO, _descriptionmWKzc96)
		const _valuesx7d4mgT = -6.232390760530597;
		const _returnValueQ1rxLEj = await _cmdEeQ394r.choices(_valuesx7d4mgT)
		const _returnValueG6kRUkT = await _cmdEeQ394r.attributeName()
		const _arga4eMN2b = {
		
	}
		const _returnValueV1dFWXv = await _cmdEeQ394r.is(_arga4eMN2b)
		const _returnValueUhASSe = await _cmdEeQ394r.name()
		const _valueRNtKLxl = undefined;
		const _descriptiontfs4u5c = undefined;
		const _returnValueTM7pGWB = await _cmdEeQ394r.default(_valueRNtKLxl, _descriptiontfs4u5c)
		const _returnValuevzM8PLF = await _HelpUjNpXOQ.commandDescription(_cmdEeQ394r)
	});

	it('test for Help', async () => {
		const _HelpebXN0f3 = new Help()
		const _nameluynsvA = true;
		const _cmdQ5Cgffx = new Command(_nameluynsvA)
		const _enableOrNameAndArgsrOYQG32 = "RdUPgOz5Ehv8u1qw6PSWU7om6u0A";
		const _description9w8CjD = null;
		const _returnValueC0s7GQ = await _cmdQ5Cgffx.addHelpCommand(_enableOrNameAndArgsrOYQG32, _description9w8CjD)
		const _flagsFpChvs1 = null;
		const _arrayValueKhrflSQ = 8.083494889236661;
		const _arrayValueB0v6D1P = {
		
	}
		const _descriptiondZUya2T = [_arrayValueKhrflSQ, _arrayValueB0v6D1P]
		const _returnValueGHYrYjM = await _cmdQ5Cgffx.helpOption(_flagsFpChvs1, _descriptiondZUya2T)
		const _nameAndArgsUmHetb = "KyGVr3bSfsZef5yuDbu8gukmxfgBlGq7dR0YLeG";
		const _actionOptsOrExecDescITGGZHk = null;
		const _execOptsRfsqJdH = undefined;
		const _returnValueMAaK0ld = await _cmdQ5Cgffx.command(_nameAndArgsUmHetb, _actionOptsOrExecDescITGGZHk, _execOptsRfsqJdH)
		const _returnValueQltgrw = await _HelpebXN0f3.visibleOptions(_cmdQ5Cgffx)
		const _returnValuesLZiFcZ = "WNDDPjcJlzCM7YmEfBCu6Q5hVKcNQjC";
		const _cmdtXHT5ah = () => { return _returnValuesLZiFcZ };
		const _returnValuevVGF19C = await _HelpebXN0f3.commandUsage(_cmdtXHT5ah)
	});

	it('test for Help', async () => {
		const _HelpTNCzx6X = new Help()
		const _flagsYMiOzsG = 9.796427020533937;
		const _optionSJ47Nhf = {
			"flags": _flagsYMiOzsG
	}
		const _returnValuelON5UFt = await _HelpTNCzx6X.optionTerm(_optionSJ47Nhf)
		const __nameL1gO3L5 = "tYjWPr";
		const __aliasestz6EEeM = {
		
	}
		const _parentdTBXOVG = {
		
	}
		const _returnValueTNvj7pR = true;
		const _usagelJVbv7G = () => { return _returnValueTNvj7pR };
		const _cmdmgSMiYW = {
			"_name": __nameL1gO3L5,
		"_aliases": __aliasestz6EEeM,
		"parent": _parentdTBXOVG,
		"usage": _usagelJVbv7G
	}
		const _returnValueOgZO4cP = await _HelpTNCzx6X.commandUsage(_cmdmgSMiYW)
		const _cmddMnXfEX = undefined;
		const _helperqZBg9g0 = new Help()
		const _nameqH37pzW = -4.21317509928126;
		const _cmdCOytx61 = new Command(_nameqH37pzW)
		const _returnValueUIya8UI = "JGo";
		const _namesOHCTRNR = () => { return _returnValueUIya8UI };
		const _returnValueKt1sjjI = await _cmdCOytx61.arguments(_namesOHCTRNR)
		const _strPGgjAkN = undefined;
		const _returnValuej1s88TV = await _cmdCOytx61.usage(_strPGgjAkN)
		const _promisehfP0VoU = "LvqIGQ8dbyyVqPoW0bIspTqB6ZptWLYP0iWVMp7k7V2EI1cpHUQdKvkaLtzxrLdOm5WnmE6J8hny4WUJkkVX";
		const _returnValuer6YUVM = false;
		const _fnwCTV1C2 = () => { return _returnValuer6YUVM };
		const _returnValueATmrAOf = await _cmdCOytx61._chainOrCall(_promisehfP0VoU, _fnwCTV1C2)
		const _combinecTBRDnA = true;
		const _returnValueeo9BDEA = await _cmdCOytx61.combineFlagAndOptionalValue(_combinecTBRDnA)
		const _returnValueTF4VSsC = await _helperqZBg9g0.visibleArguments(_cmdCOytx61)
		const _returnValueihgmXDy = false;
		const _optionWruhF71 = () => { return _returnValueihgmXDy };
		const _returnValueqZbIa6w = await _helperqZBg9g0.optionDescription(_optionWruhF71)
		const _arrayValuepNlXfYE = 3.476245281981985;
		const _arrayValueFpNNIe1 = "Aa8XX3XMN5Vh6ogm2LhQJXyxQI1MUy6hHQkfSFWsv";
		const _arrayValueINpHAeL = undefined;
		const _returnValueutNmM8T = null;
		const _arrayValuezDXfUBM = () => { return _returnValueutNmM8T };
		const _arrayValuecjabIQl = "7MzIxaq9XzHVGil1XyTjSmueB7ipNZgubfjZ7itolv4Qxy6doyF9H7LG1OaBqJlZS8GPV18m5rkkB4Q91vgbehMMpeHNz";
		const _arrayValueQTRi6Fb = [_arrayValuezDXfUBM, _arrayValuecjabIQl]
		const _arrayValueoY5VPMS = true;
		const _arrayValueCbziAWr = [_arrayValueFpNNIe1, _arrayValueINpHAeL, _arrayValueQTRi6Fb, _arrayValueoY5VPMS]
		const _cmdtxHeEDU = [_arrayValuepNlXfYE, _arrayValueCbziAWr]
		const _arrayValueVFpbKAA = "5xI8sMmuogeNNbSr2nIEtDtjkQmyIhkCxmVdTWOwxYUe5J";
		const _helperNpCT39x = [_arrayValueVFpbKAA]
		const _returnValuelQlQTXe = await _helperqZBg9g0.longestOptionTermLength(_cmdtxHeEDU, _helperNpCT39x)
		const _returnValueYQqDxfa = await _HelpTNCzx6X.formatHelp(_cmddMnXfEX, _helperqZBg9g0)
		const _returnValue5vODXF = null;
		const _arrayValuegSAWX4 = () => { return _returnValue5vODXF };
		const _arrayValueEvaDOjA = null;
		const _flagsVoBld7M = [_arrayValuegSAWX4, _arrayValueEvaDOjA]
		const _descriptionOA8Doh9 = -3.6790750883702525;
		const _optionQZAXifI = new Option(_flagsVoBld7M, _descriptionOA8Doh9)
		const _nameWH7jid = undefined;
		const _returnValuemrYCew = await _optionQZAXifI.env(_nameWH7jid)
		const _mandatoryg6MDnmf = true;
		const _returnValueyyjnjuQ = await _optionQZAXifI.makeOptionMandatory(_mandatoryg6MDnmf)
		const _argPWmnzIt = "02YciV4dMeBFSQB0kX";
		const _returnValueodaLDov = await _optionQZAXifI.is(_argPWmnzIt)
		const _returnValueXQOJOf1 = "FrcSjSjWpZnIwtuF8RL9SyubIw26aDg3Udcq2ehNehsq78EsYh8NhBEm7mGYNaU1bSUjsj4tRScTJ";
		const _includesacngUI = () => { return _returnValueXQOJOf1 };
		const _joingryypK = null;
		const _valuessets2h = {
			"includes": _includesacngUI,
		"join": _joingryypK
	}
		const _returnValueVPQOwBD = await _optionQZAXifI.choices(_valuessets2h)
		const _returnValueYzL6A7n = await _HelpTNCzx6X.optionDescription(_optionQZAXifI)
	});

	it('test for Help', async () => {
		const _HelpmWX0NI = new Help()
		const _returnValueMUlBxpL = null;
		const _matchiflfa8P = () => { return _returnValueMUlBxpL };
		const _returnValueEHTmvEI = {
		
	}
		const _substrUHnMLBW = () => { return _returnValueEHTmvEI };
		const _strM9mle99 = {
			"match": _matchiflfa8P,
		"substr": _substrUHnMLBW
	}
		const _widthGG8v5ML = -5.183869240475726;
		const _indentR7oBHee = 1.6521141311623104;
		const _minColumnWidthrzc86O8 = -8.074591546597276;
		const _returnValuevcpTxf7 = await _HelpmWX0NI.wrap(_strM9mle99, _widthGG8v5ML, _indentR7oBHee, _minColumnWidthrzc86O8)
		const _returnValueOOvJI9o = null;
		const _flagsvxKavZN = () => { return _returnValueOOvJI9o };
		const _descriptionerPEfE4 = "j0ViOYwJIpqEra3LuqD1g6wEy4xXixUqVzHBq342S6ZxxbwyMvlP5kTucVbz";
		const _cmdtHtdfXB = new Option(_flagsvxKavZN, _descriptionerPEfE4)
		const _returnValuevGWvTA0 = await _cmdtHtdfXB.attributeName()
		const _valued2j6LUg = undefined;
		const _returnValuevBMyKhs = undefined;
		const _concatS4CGM6v = () => { return _returnValuevBMyKhs };
		const _previousRNC7pRL = {
			"concat": _concatS4CGM6v
	}
		const _returnValueNSieLmf = await _cmdtHtdfXB._concatValue(_valued2j6LUg, _previousRNC7pRL)
		const _valuepTsDRd6 = "TcaSWHVqtKB3hFM9GlkIWycIHkExCWZ3sY1dzS9BPF";
		const _arrayValueSSiIzNy = {
		
	}
		const _arrayValueGg6dNIu = true;
		const _arrayValuewAn4Kfi = true;
		const _arrayValueXzpCqR6 = null;
		const _arrayValueEhT8nr = [_arrayValueSSiIzNy, _arrayValueGg6dNIu, _arrayValuewAn4Kfi, _arrayValueXzpCqR6]
		const _returnValueSaZjyr = [_arrayValueEhT8nr]
		const _concatHccd9Ul = () => { return _returnValueSaZjyr };
		const _previouskPLF090 = {
			"concat": _concatHccd9Ul
	}
		const _returnValuehldOaEa = await _cmdtHtdfXB._concatValue(_valuepTsDRd6, _previouskPLF090)
		const _namejvGr62P = undefined;
		const _returnValueGAdQhyg = await _cmdtHtdfXB.env(_namejvGr62P)
		const _returnValueCsy7hCt = await _HelpmWX0NI.commandDescription(_cmdtHtdfXB)
		const _cmdX5cK066 = "DsEDBKwVFDur6ryVCNVEpixm6UnJsapuERAiQr7IYHKHopx9KzwZgI1heq3lKEVG";
		const _arrayValueNkEY7WY = "Shcj3JNhoXfg1CGs8yEa9rvKW4k0DoJIeeRUweAWLXxoMGznmkXnyjoB2nilMoG5sL0";
		const _helpergZF8rFX = [_arrayValueNkEY7WY]
		const _returnValueyk3CrJM = await _HelpmWX0NI.longestArgumentTermLength(_cmdX5cK066, _helpergZF8rFX)
		const _namezm4tyMQ = null;
		const _cmdbNWIXKE = new Command(_namezm4tyMQ)
		const _allowExcessqera445 = true;
		const _returnValuei8vKGGu = await _cmdbNWIXKE.allowExcessArguments(_allowExcessqera445)
		const _contextOptions82QrO3 = 4.565961377427307;
		const _returnValueNue5PJ0 = await _cmdbNWIXKE.helpInformation(_contextOptions82QrO3)
		const _returnValuepJO85u = await _HelpmWX0NI.visibleArguments(_cmdbNWIXKE)
	});

	it('test for Help', async () => {
		const _HelpwTPFiYu = new Help()
		const _argChoices5Chsrp = {
		
	}
		const _defaultValueIeM78e = undefined;
		const _defaultValueDescriptiongSPHnY8 = "mpaObpvSgD0UoxTgev1fU17YcDTCiuPJhwW2A";
		const _descriptionolOZSC2 = undefined;
		const _argumentNIMKh3 = {
			"argChoices": _argChoices5Chsrp,
		"defaultValue": _defaultValueIeM78e,
		"defaultValueDescription": _defaultValueDescriptiongSPHnY8,
		"description": _descriptionolOZSC2
	}
		const _returnValueLQ045lj = await _HelpwTPFiYu.argumentDescription(_argumentNIMKh3)
		const _strNsBi8i = "qrhU7lrPpVQ1nqNJNGkvJdg2CKYfy7vmBuAIpVKeUh4wbnIaR1fNlhXm3P8pyEn4bgB14pNMhShDGmoJnbtBfIdcVMKvws8ISh";
		const _widthYAnzl2Y = -6.559526853438716;
		const _indentFcQjVhJ = -6.926991039015349;
		const _minColumnWidthCI7FTuG = -1.6541061083186683;
		const _returnValueqRx3mox = await _HelpwTPFiYu.wrap(_strNsBi8i, _widthYAnzl2Y, _indentFcQjVhJ, _minColumnWidthCI7FTuG)
	});

	it('test for Help', async () => {
		const _HelpxGPuyNH = new Help()
		const _argChoicesm5lXd1D = {
		
	}
		const _negatezYVlJKo = undefined;
		const _defaultValuelidFCy5 = undefined;
		const _defaultValueDescriptionxKRkIaM = []
		const _envVark9vnyHf = undefined;
		const _descriptiongbebMhf = null;
		const _option3o2B13 = {
			"argChoices": _argChoicesm5lXd1D,
		"negate": _negatezYVlJKo,
		"defaultValue": _defaultValuelidFCy5,
		"defaultValueDescription": _defaultValueDescriptionxKRkIaM,
		"envVar": _envVark9vnyHf,
		"description": _descriptiongbebMhf
	}
		const _returnValueGFmH377 = await _HelpxGPuyNH.optionDescription(_option3o2B13)
		const _flagsnD7PsC1 = null;
		const _descriptionbMqd5si = null;
		const _argumentlc7aH6M = new Option(_flagsnD7PsC1, _descriptionbMqd5si)
		const _argWQevGqO = {
		
	}
		const _returnValueoaw2yR5 = await _argumentlc7aH6M.is(_argWQevGqO)
		const _returnValuebBIqlW0 = await _HelpxGPuyNH.argumentDescription(_argumentlc7aH6M)
		const _cmdTDJned1 = "hND5dHZb1lRd5s4rLcGP3l5hkcolcuNncx1gr0xEcVmRaOwWp";
		const _helperEPEmOH1 = "nl6VTIXILXIsINiG9KsGgECxKA2661UYJpdlm7vLJcxmu2xErWDj0c2e6";
		const _returnValueW5DVQbj = await _HelpxGPuyNH.padWidth(_cmdTDJned1, _helperEPEmOH1)
		const _returnValueO82pcPE = null;
		const _arrayValueKA8WabL = () => { return _returnValueO82pcPE };
		const _arrayValueH1EXWqS = undefined;
		const _arrayValueCb0gULZ = undefined;
		const _arrayValuebVUAnye = -5.979621343997305;
		const _arrayValuelxphYfO = "ZslK1mqz0UJQV5VGBvi6wsuKQJKN8XuEUcjtKRaNfSQkGi4rlPoOcPblF";
		const _arrayValuenGnbdZ0 = [_arrayValuebVUAnye, _arrayValuelxphYfO]
		const _returnValueFdTCPNj = {
		
	}
		const _arrayValuePzFuReN = () => { return _returnValueFdTCPNj };
		const _arrayValueKBg42k = [_arrayValueCb0gULZ, _arrayValuenGnbdZ0, _arrayValuePzFuReN]
		const _arrayValueLxesxFa = [_arrayValueKA8WabL, _arrayValueH1EXWqS, _arrayValueKBg42k]
		const _cmdRXlKzWJ = [_arrayValueLxesxFa]
		const _helperV2GZT2F = new Help()
		const _cmdsnU3NAO = undefined;
		const _helperwk4Ff9i = []
		const _returnValueNswifBH = await _helperV2GZT2F.padWidth(_cmdsnU3NAO, _helperwk4Ff9i)
		const _descriptionfNmMaKz = -0.8354322148983666;
		const _cmdDV1CEsU = {
			"description": _descriptionfNmMaKz
	}
		const _returnValueyPeUD07 = await _helperV2GZT2F.commandDescription(_cmdDV1CEsU)
		const _returnValueUPscVPz = await _HelpxGPuyNH.longestOptionTermLength(_cmdRXlKzWJ, _helperV2GZT2F)
	});

	it('test for Help', async () => {
		const _HelptXIdOvy = new Help()
		const _cmdo1pA1Sc = null;
		const _helperdFYGfuv = new Help()
		const _argChoicesw454Z0b = {
		
	}
		const _negateDHng4Fb = -0.4235861706164794;
		const _defaultValueg193ylB = undefined;
		const _defaultValueDescriptionLT5zEE4 = 2.733691870007755;
		const _envVariSBVcYi = null;
		const _returnValuecK37jkn = {
		
	}
		const _descriptionB1I2Rj9 = () => { return _returnValuecK37jkn };
		const _optionqgFqF9w = {
			"argChoices": _argChoicesw454Z0b,
		"negate": _negateDHng4Fb,
		"defaultValue": _defaultValueg193ylB,
		"defaultValueDescription": _defaultValueDescriptionLT5zEE4,
		"envVar": _envVariSBVcYi,
		"description": _descriptionB1I2Rj9
	}
		const _returnValueBO4ohS = await _helperdFYGfuv.optionDescription(_optionqgFqF9w)
		const _returnValuerPaTyT = await _HelptXIdOvy.longestSubcommandTermLength(_cmdo1pA1Sc, _helperdFYGfuv)
		const _cmdYkUIf6P = "NhShaujruojOP4ohBQSGPJXztvmE5SPTdI";
		const _returnValueh4Jmrlw = await _HelptXIdOvy.visibleOptions(_cmdYkUIf6P)
		const _cmdr9ExGNa = null;
		const _returnValueAPpDy1t = await _HelptXIdOvy.visibleCommands(_cmdr9ExGNa)
	});

	it('test for Help', async () => {
		const _Helpp5EUiUI = new Help()
		const _returnValueP8PvqVr = undefined;
		const _sliceTqM44LK = () => { return _returnValueP8PvqVr };
		const _nameKONDeu5 = {
			"slice": _sliceTqM44LK
	}
		const _descriptionmLYyqAy = undefined;
		const _argumentntE5L9m = new Argument(_nameKONDeu5, _descriptionmLYyqAy)
		const _valuemdYw18K = "IUGFXFcXBazrUL8jqv9n1WHKmARvXCsWJXiBVLFy3zQVYYmMrjspS0N4ZQn";
		const _descriptiontDhrgsV = undefined;
		const _returnValuetM5iJMw = await _argumentntE5L9m.default(_valuemdYw18K, _descriptiontDhrgsV)
		const _valueUareVZ = undefined;
		const _descriptionDOGPBNq = undefined;
		const _returnValueI3ekK4p = await _argumentntE5L9m.default(_valueUareVZ, _descriptionDOGPBNq)
		const _arrayValueA6AR6lR = null;
		const _arrayValueMVqj45b = {
		
	}
		const _valued3Wy1m1 = [_arrayValueA6AR6lR, _arrayValueMVqj45b]
		const _descriptionpE4w4Ut = undefined;
		const _returnValuepwZBbow = await _argumentntE5L9m.default(_valued3Wy1m1, _descriptionpE4w4Ut)
		const _returnValueXPxYpsu = await _argumentntE5L9m.argOptional()
		const _fnuVmAamp = false;
		const _returnValueqX0wxX1 = await _argumentntE5L9m.argParser(_fnuVmAamp)
		const _returnValue2gCJXb = await _Helpp5EUiUI.argumentDescription(_argumentntE5L9m)
		const _arrayValueqAFYP02 = 8.873301985322179;
		const _returnValueqBSsaYH = [_arrayValueqAFYP02]
		const _cmd8E3ceN = () => { return _returnValueqBSsaYH };
		const _returnValuebW2i9N8 = await _Helpp5EUiUI.visibleOptions(_cmd8E3ceN)
		const _optionsNVD4d = "fyJQidibHqHr";
		const _returnValueTCHGAnq = await _Helpp5EUiUI.optionDescription(_optionsNVD4d)
	});

	it('test for Help', async () => {
		const _HelpmiK4pCd = new Help()
		const _returnValueuxYtVdM = 8.948737460314177;
		const _matchNtAY0O = () => { return _returnValueuxYtVdM };
		const _returnValuec6xkZo4 = null;
		const _substrG5KUH6r = () => { return _returnValuec6xkZo4 };
		const _strbpfE3Ck = {
			"match": _matchNtAY0O,
		"substr": _substrG5KUH6r
	}
		const _widthHWU62Uu = 9.590429174784731;
		const _indentYt2PW78 = 7.133848226789105;
		const _minColumnWidthB4XNcJ = -2.2942498762215022;
		const _returnValueH09yEOS = await _HelpmiK4pCd.wrap(_strbpfE3Ck, _widthHWU62Uu, _indentYt2PW78, _minColumnWidthB4XNcJ)
		const _optionh0Ydm1Z = "TuFltudyYTBoMzttqenttDuGHyJuMhpLPRgVL4KUCqOjh69O7v";
		const _returnValuetdbrQB = await _HelpmiK4pCd.optionDescription(_optionh0Ydm1Z)
	});

	it('test for Help', async () => {
		const _HelpvhkZ14K = new Help()
		const _flagswKnTNmc = "Cs4xpgYMilJmWwwyRPl5C3cptJ4dMLuvC25GFu6yz8ihHgZkyRS1Uz";
		const _returnValueYTCF9TU = null;
		const _descriptionojxSqjW = () => { return _returnValueYTCF9TU };
		const _optionLatOFJi = new Option(_flagswKnTNmc, _descriptionojxSqjW)
		const _valueiYSL7Ni = -2.0722568836386213;
		const _returnValueL7jP43D = "ENP5E5wNyB7sc7zfoY4vpc9tbK3tIUunGgoixVhQCYqI2aCEstVkARJ5J7Se9Bs7";
		const _concatzlPj2dK = () => { return _returnValueL7jP43D };
		const _previousI0IokB7 = {
			"concat": _concatzlPj2dK
	}
		const _returnValuewmk2RZ2 = await _optionLatOFJi._concatValue(_valueiYSL7Ni, _previousI0IokB7)
		const _fnOX1gl4B = {
		
	}
		const _returnValueEicByT = await _optionLatOFJi.argParser(_fnOX1gl4B)
		const _returnValueX3PbQMn = await _HelpvhkZ14K.optionTerm(_optionLatOFJi)
		const _cmdkKq6xi1 = true;
		const _sortSubcommandsRyWhcbG = {
		
	}
		const _returnValuesi8zwe7 = null;
		const _subcommandTermoI4OHdl = () => { return _returnValuesi8zwe7 };
		const _helperoXF6Ven = {
			"sortSubcommands": _sortSubcommandsRyWhcbG,
		"subcommandTerm": _subcommandTermoI4OHdl
	}
		const _returnValueG2sykVK = await _HelpvhkZ14K.longestSubcommandTermLength(_cmdkKq6xi1, _helperoXF6Ven)
	});

	it('test for Help', async () => {
		const _HelppQtd00f = new Help()
		const _cmdNYG2LsQ = 3.3149735780682583;
		const _helperU6bSF5l = new Help()
		const _nameOmm216T = []
		const _descriptionDC1MZrC = "dCVpboJcPViYWUzY9uBOBzJgA9JDy16enP0e9nCOB";
		const _argumentGusugsA = new Argument(_nameOmm216T, _descriptionDC1MZrC)
		const _valueShTFTTK = {
		
	}
		const _descriptiong4RnBfE = {
		
	}
		const _returnValuesAHv2ZZ = await _argumentGusugsA.default(_valueShTFTTK, _descriptiong4RnBfE)
		const _fnLeew6pf = undefined;
		const _returnValueKUj6D8S = await _argumentGusugsA.argParser(_fnLeew6pf)
		const _fnRMKnSaO = undefined;
		const _returnValueMSBTX9D = await _argumentGusugsA.argParser(_fnRMKnSaO)
		const _returnValuekdkjNiK = await _helperU6bSF5l.argumentDescription(_argumentGusugsA)
		const _optionKO0BYQs = "FEpkz74rpqhEgR4NJEniZdP0RqxqhPRvP4Sskk9r8W4ClNe7ILVG9nfE";
		const _returnValuegCCjXna = await _helperU6bSF5l.optionTerm(_optionKO0BYQs)
		const _optionsiVhhhzr = {
		
	}
		const __hasHelpOptionVDW1iL2 = "gABaBKoG89TaPTQ1wxWUBaNbivqQ7mYZMetuhlXHbXvgHRhujoRuONGd4";
		const _arrayValueFkU9cI = false;
		const _arrayValue5rdwQ2 = 5.951462638532078;
		const _arrayValueNODtJa = "vlzbQsTgV1mbBIiWmWwS52BRwVI4X";
		const __helpShortFlagneXRoIz = [_arrayValueFkU9cI, _arrayValue5rdwQ2, _arrayValueNODtJa]
		const _returnValuexlkefLO = "9HWcJn5jiwhwxKeVFGADNtFQq5YRERVgpit0iSShT8amBzQyj95ueCrotBAQsjae63CGMfl9BGfg";
		const __findOptionQbUWwH = () => { return _returnValuexlkefLO };
		const __helpLongFlagskQNMH = false;
		const _returnValuevbbBSJs = -2.3075519184865882;
		const _createOptionsPhLkR0 = () => { return _returnValuevbbBSJs };
		const __helpDescriptionlwygGKV = "AlfrMOJ31YC0oZVB7Pbu1eATVj7JbU9mhJ45U6r25Lpwu3q2gI1ES2IpU76VyeRpYIbONHWYfMVkqnc";
		const _returnValueq5i7dGX = null;
		const __helpFlagsNCV0FoS = () => { return _returnValueq5i7dGX };
		const _cmdUPMMI0i = {
			"options": _optionsiVhhhzr,
		"_hasHelpOption": __hasHelpOptionVDW1iL2,
		"_helpShortFlag": __helpShortFlagneXRoIz,
		"_findOption": __findOptionQbUWwH,
		"_helpLongFlag": __helpLongFlagskQNMH,
		"createOption": _createOptionsPhLkR0,
		"_helpDescription": __helpDescriptionlwygGKV,
		"_helpFlags": __helpFlagsNCV0FoS
	}
		const _returnValueoXnvjYS = await _helperU6bSF5l.visibleOptions(_cmdUPMMI0i)
		const _cmdjKj3drn = false;
		const _visibleArgumentsBYqGcZf = true;
		const _returnValueIfm2rKJ = 7.126958913193324;
		const _argumentTermFwj2k1l = () => { return _returnValueIfm2rKJ };
		const _helperuDJR56A = {
			"visibleArguments": _visibleArgumentsBYqGcZf,
		"argumentTerm": _argumentTermFwj2k1l
	}
		const _returnValuefE0Qx8 = await _helperU6bSF5l.longestArgumentTermLength(_cmdjKj3drn, _helperuDJR56A)
		const _returnValuefPSaDE = await _HelppQtd00f.longestOptionTermLength(_cmdNYG2LsQ, _helperU6bSF5l)
		const _cmdYyArYhk = "eKSunm4TbYfn1MbBmjcyvcUyATjkMRdRSwWxoJIwgA9FAqWjNMLNh4Z3X0LMuY5XqsS9iMHbMCzhRGM76pf";
		const _returnValueLDmB0m9 = await _HelppQtd00f.visibleArguments(_cmdYyArYhk)
	});

	it('test for Help', async () => {
		const _HelpB4LU4LW = new Help()
		const _returnValueCFhFOqw = {
		
	}
		const _namexYO9uIL = () => { return _returnValueCFhFOqw };
		const _cmdbNqyfae = new Command(_namexYO9uIL)
		const _returnValuea4tkt2M = await _cmdbNqyfae._checkNumberOfArguments()
		const _returnValueGI5EKoM = await _HelpB4LU4LW.visibleCommands(_cmdbNqyfae)
		const _returnValueNWqnRb1 = -0.7093339837248713;
		const _argumentgyTwrNZ = () => { return _returnValueNWqnRb1 };
		const _returnValuewN7paid = await _HelpB4LU4LW.argumentTerm(_argumentgyTwrNZ)
		const _returnValuevzZPF8r = 4.955562025356395;
		const _descriptionXKdBnWZ = () => { return _returnValuevzZPF8r };
		const _cmdxVUGuPY = {
			"description": _descriptionXKdBnWZ
	}
		const _returnValueadYRNCE = await _HelpB4LU4LW.commandDescription(_cmdxVUGuPY)
		const _cmdGycuFHo = "ECYM1Xe8B3y3tjZWjss2KifjO8BEc9mUOlNIazs9xpq6GBtXwPBgI9Mb7WKJqi0C";
		const _sortSubcommandsrAN37D = null;
		const _arrayValuewIYeFuN = undefined;
		const _arrayValueqFKZ87 = -3.3271942062003728;
		const _arrayValueMiGsbAD = false;
		const _arrayValuePOYxDnB = true;
		const _arrayValueAqNR6xR = [_arrayValueqFKZ87, _arrayValueMiGsbAD, _arrayValuePOYxDnB]
		const _returnValueOcZeuzj = [_arrayValuewIYeFuN, _arrayValueAqNR6xR]
		const _subcommandTermpiiH8Qn = () => { return _returnValueOcZeuzj };
		const _helperPitV1WO = {
			"sortSubcommands": _sortSubcommandsrAN37D,
		"subcommandTerm": _subcommandTermpiiH8Qn
	}
		const _returnValuetsoDJrN = await _HelpB4LU4LW.formatHelp(_cmdGycuFHo, _helperPitV1WO)
		const _cmdrj99Nrk = 1.4394398603879726;
		const _returnValueJheWhYe = null;
		const _returnValueSAuddtV = () => { return _returnValueJheWhYe };
		const _helperJZnx7nL = () => { return _returnValueSAuddtV };
		const _returnValueWJfZ6Y1 = await _HelpB4LU4LW.formatHelp(_cmdrj99Nrk, _helperJZnx7nL)
	});

	it('test for Help', async () => {
		const _HelpKwTV8on = new Help()
		const _cmdNThwh9 = 0.9991811686671781;
		const _returnValuep9uxEl = {
		
	}
		const _longestOptionTermLengthCePsVs7 = () => { return _returnValuep9uxEl };
		const _returnValueeQLoizA = -5.281000203694589;
		const _longestSubcommandTermLengthMq9eo4B = () => { return _returnValueeQLoizA };
		const _returnValueNu6zAsm = undefined;
		const _longestArgumentTermLengthLeMCOhS = () => { return _returnValueNu6zAsm };
		const _helperQpRXILb = {
			"longestOptionTermLength": _longestOptionTermLengthCePsVs7,
		"longestSubcommandTermLength": _longestSubcommandTermLengthMq9eo4B,
		"longestArgumentTermLength": _longestArgumentTermLengthLeMCOhS
	}
		const _returnValueXg5bam = await _HelpKwTV8on.padWidth(_cmdNThwh9, _helperQpRXILb)
		const _nameeXEHiAb = "8AU0Y6I9CeOzEDFdLpBGriOc2u";
		const _descriptionSBg9lL4 = true;
		const _optionCPAqp5Q = new Argument(_nameeXEHiAb, _descriptionSBg9lL4)
		const _fnShb2r94 = "2PeZEMovNOCZPttqFQQpztSMNnqKQmP0pOgWWBActvh3yXdPKYmf03apg70p2FpgwwC4ziqW";
		const _returnValue3w1MaU = await _optionCPAqp5Q.argParser(_fnShb2r94)
		const _returnValueD1hzfQh = await _optionCPAqp5Q.argOptional()
		const _valueBjtHMA = "S4KHtLP63VTbM";
		const _description8IK8PR = {
		
	}
		const _returnValueaZ2Y58w = await _optionCPAqp5Q.default(_valueBjtHMA, _description8IK8PR)
		const _returnValuesjx3VoJ = await _HelpKwTV8on.optionDescription(_optionCPAqp5Q)
		const _cmdbi6K1Mj = "4AgLNtTmBFtTw0A69ClC1MP4IfO";
		const _returnValueQx08NsC = null;
		const _longestOptionTermLengthYmkOPJi = () => { return _returnValueQx08NsC };
		const _returnValueziReOrM = 5.972295684266193;
		const _longestSubcommandTermLengthuyrPDVY = () => { return _returnValueziReOrM };
		const _returnValueqEx2f0p = false;
		const _longestArgumentTermLengthOAfVIJn = () => { return _returnValueqEx2f0p };
		const _helper9MvuCp = {
			"longestOptionTermLength": _longestOptionTermLengthYmkOPJi,
		"longestSubcommandTermLength": _longestSubcommandTermLengthuyrPDVY,
		"longestArgumentTermLength": _longestArgumentTermLengthOAfVIJn
	}
		const _returnValuepfxohte = await _HelpKwTV8on.padWidth(_cmdbi6K1Mj, _helper9MvuCp)
		const _cmdfs9Iddy = true;
		const _arrayValuesjWYMpL = "Noc4zmyKYRX9oGBYeDMQOclq0SOTUayplyb0vcs";
		const _helperwfe2KX1 = [_arrayValuesjWYMpL]
		const _returnValueqj60015 = await _HelpKwTV8on.longestArgumentTermLength(_cmdfs9Iddy, _helperwfe2KX1)
	});

	it('test for Help', async () => {
		const _HelpIKG4ZE = new Help()
		const _arrayValueqd0znV7 = "AvlMAunWPJnXdUseGFBUKzyNhq9bCySFDSGqdyNg6MOP2fvwrgNBWTIAjg6JQgDuw36KAKupIvHnaMP5tU";
		const _returnValueofTN7A1 = {
		
	}
		const _arrayValuePiuX43r = () => { return _returnValueofTN7A1 };
		const _returnValuenoa4L4r = [_arrayValueqd0znV7, _arrayValuePiuX43r]
		const _nameT0pMzSd = () => { return _returnValuenoa4L4r };
		const _cmdyVzIU35 = new Command(_nameT0pMzSd)
		const _strVVLCFlY = undefined;
		const _flags9jk7q3 = "GflOefCvREl1vwbi1xDpx";
		const _descriptionCDXsn4y = {
		
	}
		const _returnValueUKFP4E2 = await _cmdyVzIU35.version(_strVVLCFlY, _flags9jk7q3, _descriptionCDXsn4y)
		const _returnValuexmJxQn9 = await _HelpIKG4ZE.subcommandTerm(_cmdyVzIU35)
		const _cmdVstyTxR = -8.08911401580232;
		const _helperX5AO5h = new Help()
		const _cmdUt0chQG = "0EazuZQ5i79kJHeSUpslFNTPhlC7mgyRjGQ8HiShaXLB0XraNYK9H6X7BfWkKI";
		const _returnValuedOIgcfK = "577dPgyislZsQ7hIYhoplXiz35E";
		const _visibleArgumentsgRhbeQf = () => { return _returnValuedOIgcfK };
		const _arrayValueN8iESnU = 1.4759531260172398;
		const _arrayValueg9r2qKd = true;
		const _arrayValuergtKUxY = undefined;
		const _returnValuesYPN5t = [_arrayValueN8iESnU, _arrayValueg9r2qKd, _arrayValuergtKUxY]
		const _argumentTermFGmLIZ9 = () => { return _returnValuesYPN5t };
		const _helperLhFtvZs = {
			"visibleArguments": _visibleArgumentsgRhbeQf,
		"argumentTerm": _argumentTermFGmLIZ9
	}
		const _returnValueH58SCgu = await _helperX5AO5h.longestArgumentTermLength(_cmdUt0chQG, _helperLhFtvZs)
		const _cmdAYsCEN = []
		const _returnValueunqQPOw = await _helperX5AO5h.subcommandDescription(_cmdAYsCEN)
		const _returnValueMmQx1so = await _HelpIKG4ZE.padWidth(_cmdVstyTxR, _helperX5AO5h)
	});

	it('test for Help', async () => {
		const _HelpO4CIbDn = new Help()
		const _returnValueYMbItwS = 1.9798340836251445;
		const _namecHy1jM8 = () => { return _returnValueYMbItwS };
		const _cmdWu8rab8 = new Command(_namecHy1jM8)
		const _nameslDv3F5 = "J6qmP6QIEYjRAA";
		const _returnValueJGn9NTE = await _cmdWu8rab8.arguments(_nameslDv3F5)
		const _returnValuepPJyaSK = undefined;
		const _thenSllfuyK = () => { return _returnValuepPJyaSK };
		const _promiseIMRGxV5 = {
			"then": _thenSllfuyK
	}
		const _returnValueeC4BUI = undefined;
		const _fnPLxMtyz = () => { return _returnValueeC4BUI };
		const _returnValueaptDOCz = await _cmdWu8rab8._chainOrCall(_promiseIMRGxV5, _fnPLxMtyz)
		const _combineVqBGip7 = false;
		const _returnValuemsLpFMY = await _cmdWu8rab8.combineFlagAndOptionalValue(_combineVqBGip7)
		const _aliasesz2yRuLz = undefined;
		const _returnValuei9mIrV = await _cmdWu8rab8.aliases(_aliasesz2yRuLz)
		const _returnValueBTDjEes = await _HelpO4CIbDn.subcommandTerm(_cmdWu8rab8)
		const _returnValuefS5fMe3 = null;
		const _cmdCWkD5xn = () => { return _returnValuefS5fMe3 };
		const _arrayValue4vi5ff = true;
		const _arrayValueBzOtVVF = false;
		const _helper2WE198 = [_arrayValue4vi5ff, _arrayValueBzOtVVF]
		const _returnValuer9XhqP = await _HelpO4CIbDn.longestArgumentTermLength(_cmdCWkD5xn, _helper2WE198)
		const _nameT24t9gt = false;
		const _argumentLj4WXEo = new Command(_nameT24t9gt)
		const _exitCodeTvKPy6S = 1.1407955167426422;
		const _codeii1Vpp = undefined;
		const _arrayValueLxNNmD = undefined;
		const _arrayValueY0RZKEC = undefined;
		const _messagee5wBY6d = [_arrayValueLxNNmD, _arrayValueY0RZKEC]
		const _returnValuesk7o3hq = await _argumentLj4WXEo._displayError(_exitCodeTvKPy6S, _codeii1Vpp, _messagee5wBY6d)
		const _allowUnknownutBmg82 = true;
		const _returnValueKH0u9N4 = await _argumentLj4WXEo.allowUnknownOption(_allowUnknownutBmg82)
		const _returnValuez04D5UJ = await _HelpO4CIbDn.argumentTerm(_argumentLj4WXEo)
		const _returnValuetD6ci8e = -7.443958784036264;
		const _includesdZFgDSa = () => { return _returnValuetD6ci8e };
		const _flagseEBIYaJ = {
			"includes": _includesdZFgDSa
	}
		const _descriptionkydJd5 = null;
		const _cmdifyrAFF = new Option(_flagseEBIYaJ, _descriptionkydJd5)
		const _mandatoryxxK5ewf = true;
		const _returnValueC1C3pEQ = await _cmdifyrAFF.makeOptionMandatory(_mandatoryxxK5ewf)
		const _valueXSbOjH = null;
		const _arrayValueB1tQfvP = "CUFegyNLzEvHNaC9ez4YSv2kPF2HfDCsTsTTUs8TEkRMCKiJ9XPnnPK7kIUTC";
		const _arrayValuerAvRX6c = false;
		const _arrayValuevrDxXDt = "eiyBPbYEQOkavQA2AjkvZ1NRZR9oJVW3zM3Wh214UjC62EFNaXc7Vvv6CBF";
		const _arrayValuewkYkAty = true;
		const _previousnGi7mXI = [_arrayValueB1tQfvP, _arrayValuerAvRX6c, _arrayValuevrDxXDt, _arrayValuewkYkAty]
		const _returnValueLkhfQEH = await _cmdifyrAFF._concatValue(_valueXSbOjH, _previousnGi7mXI)
		const _valueNn1DbP = undefined;
		const _returnValuejR9rndC = false;
		const _concat4S5Lzy = () => { return _returnValuejR9rndC };
		const _previousbMJjqnP = {
			"concat": _concat4S5Lzy
	}
		const _returnValueYkWGH1 = await _cmdifyrAFF._concatValue(_valueNn1DbP, _previousbMJjqnP)
		const _hidehorhUUs = false;
		const _returnValueUXwPuL8 = await _cmdifyrAFF.hideHelp(_hidehorhUUs)
		const _valueU3snCSz = undefined;
		const _descriptionAG4nH7 = undefined;
		const _returnValueq9DT02 = await _cmdifyrAFF.default(_valueU3snCSz, _descriptionAG4nH7)
		const _returnValueqjlXBih = await _HelpO4CIbDn.subcommandDescription(_cmdifyrAFF)
	});
})