export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpGaUdeF = new Help()
		const _cmdg53CUVy = -1.6127382383297846;
		const _returnValueMPo8guN = await _HelpGaUdeF.subcommandDescription(_cmdg53CUVy)
		const _cmdXmLLHk0 = true;
		const _sortSubcommandstF1q92A = 3.636217880177128;
		const _arrayValueqJBUxk = "Miu9demqt55SPEf4CqP6mYPP0";
		const _arrayValuenPF94N0 = []
		const _arrayValuedYTlc4I = null;
		const _returnValueZjTmn2 = [_arrayValueqJBUxk, _arrayValuenPF94N0, _arrayValuedYTlc4I]
		const _subcommandTermjRbJpCo = () => { return _returnValueZjTmn2 };
		const _helperc08Sf0v = {
			"sortSubcommands": _sortSubcommandstF1q92A,
		"subcommandTerm": _subcommandTermjRbJpCo
	}
		const _returnValueOfDrkPG = await _HelpGaUdeF.longestSubcommandTermLength(_cmdXmLLHk0, _helperc08Sf0v)
		const __argsDescriptionT66xFHA = {
		
	}
		const __argsYWuvU1 = {
		
	}
		const _cmdCmfKvVL = {
			"_argsDescription": __argsDescriptionT66xFHA,
		"_args": __argsYWuvU1
	}
		const _returnValuetRm38re = await _HelpGaUdeF.visibleArguments(_cmdCmfKvVL)
		const __argsDescriptionjrVnH70 = {
		
	}
		const __argsg3NslLJ = {
		
	}
		const _cmdW7PqbR = {
			"_argsDescription": __argsDescriptionjrVnH70,
		"_args": __argsg3NslLJ
	}
		const _returnValueVnO41ci = await _HelpGaUdeF.visibleArguments(_cmdW7PqbR)
	});

	it('test for Help', async () => {
		const _HelpFKAczv = new Help()
		const _arrayValuetVAWJia = undefined;
		const _arrayValueS3QxC4j = null;
		const _cmdRduzxRK = [_arrayValuetVAWJia, _arrayValueS3QxC4j]
		const _returnValueXEjeocw = 3.4498763031518322;
		const _visibleOptionsiOEEHvq = () => { return _returnValueXEjeocw };
		const _returnValuewYp5SXj = undefined;
		const _optionTermALQwTpU = () => { return _returnValuewYp5SXj };
		const _helperdAA7cyx = {
			"visibleOptions": _visibleOptionsiOEEHvq,
		"optionTerm": _optionTermALQwTpU
	}
		const _returnValuekr86ZVj = await _HelpFKAczv.longestOptionTermLength(_cmdRduzxRK, _helperdAA7cyx)
		const _returnValueQ3NCJIr = null;
		const _descriptionzDpgQoB = () => { return _returnValueQ3NCJIr };
		const _cmdz4TTfwW = {
			"description": _descriptionzDpgQoB
	}
		const _returnValueEsB79c8 = await _HelpFKAczv.subcommandDescription(_cmdz4TTfwW)
	});

	it('test for Help', async () => {
		const _HelpiidmWX = new Help()
		const __argsqBtkug0 = {
		
	}
		const __nameC5Ggo5Q = 8.332255978205083;
		const __aliasesRWAvHLs = {
		
	}
		const _optionsEy5Bkgj = {
		
	}
		const _cmd8pzQSA = {
			"_args": __argsqBtkug0,
		"_name": __nameC5Ggo5Q,
		"_aliases": __aliasesRWAvHLs,
		"options": _optionsEy5Bkgj
	}
		const _returnValuegEH66K = await _HelpiidmWX.subcommandTerm(_cmd8pzQSA)
		const _cmdmDYTu2 = -8.325015109415908;
		const _returnValueOjkhaEP = undefined;
		const _visibleOptionsgpLgehq = () => { return _returnValueOjkhaEP };
		const _returnValueWpx5CJj = -2.0408992777610013;
		const _optionTermgcH140X = () => { return _returnValueWpx5CJj };
		const _helperKr3dg9r = {
			"visibleOptions": _visibleOptionsgpLgehq,
		"optionTerm": _optionTermgcH140X
	}
		const _returnValueKVqFIUC = await _HelpiidmWX.longestOptionTermLength(_cmdmDYTu2, _helperKr3dg9r)
	});

	it('test for Help', async () => {
		const _HelpwWtRoV = new Help()
		const _argChoicesSXZpjM6 = {
		
	}
		const _defaultValueC2KgIM2 = undefined;
		const _defaultValueDescriptionxXIXmhH = "MYjYIYAfqvDimtth3RKCWBHGMGTsH9uRNaHlfHBJLL6";
		const _descriptionkPmIvUC = null;
		const _argumentVeTCtJt = {
			"argChoices": _argChoicesSXZpjM6,
		"defaultValue": _defaultValueC2KgIM2,
		"defaultValueDescription": _defaultValueDescriptionxXIXmhH,
		"description": _descriptionkPmIvUC
	}
		const _returnValueYHcCWdO = await _HelpwWtRoV.argumentDescription(_argumentVeTCtJt)
		const _argumentH8a9qI = undefined;
		const _returnValueOW56oqV = await _HelpwWtRoV.argumentDescription(_argumentH8a9qI)
		const _flagsYewHuCv = "w";
		const _optionPnSz0Jp = {
			"flags": _flagsYewHuCv
	}
		const _returnValueF2lZCEH = await _HelpwWtRoV.optionTerm(_optionPnSz0Jp)
	});

	it('test for Help', async () => {
		const _HelpzPcl9Ci = new Help()
		const _arrayValueiBCWwcW = undefined;
		const _arrayValueNrvQxQ3 = undefined;
		const _cmdOkPqa3s = [_arrayValueiBCWwcW, _arrayValueNrvQxQ3]
		const _arrayValuexEk0WiP = 0.6547126847930596;
		const _sortSubcommandsFvaNiKd = [_arrayValuexEk0WiP]
		const _returnValueImZW7K = "B42rmNyg2TLTCPCMaGVrclSz2QIVRwjElGF7ikTTwePPjToLzTuHiKAKdzzyFFwcbpUkGGwgPEK9dg1lIUjn";
		const _returnValuedhz53iV = () => { return _returnValueImZW7K };
		const _subcommandTermk2o9rwt = () => { return _returnValuedhz53iV };
		const _helperjUSTP10 = {
			"sortSubcommands": _sortSubcommandsFvaNiKd,
		"subcommandTerm": _subcommandTermk2o9rwt
	}
		const _returnValuehlTR0Wl = await _HelpzPcl9Ci.longestSubcommandTermLength(_cmdOkPqa3s, _helperjUSTP10)
		const _returnValuexzxata = -3.883558452076624;
		const _descriptiona7ZJWe = () => { return _returnValuexzxata };
		const _cmdhRmViRB = {
			"description": _descriptiona7ZJWe
	}
		const _returnValueZyAgADy = await _HelpzPcl9Ci.commandDescription(_cmdhRmViRB)
		const __argsDescriptionvPaysRd = {
		
	}
		const __argseOoScui = {
		
	}
		const _cmdJswtcbF = {
			"_argsDescription": __argsDescriptionvPaysRd,
		"_args": __argseOoScui
	}
		const _returnValuejxSOxdt = await _HelpzPcl9Ci.visibleArguments(_cmdJswtcbF)
	});

	it('test for Help', async () => {
		const _Helps0WvOfD = new Help()
		const _returnValueLf1Uw6Q = {
		
	}
		const _nameHm8sDrr = () => { return _returnValueLf1Uw6Q };
		const _argumentaXcrrkQ = {
			"name": _nameHm8sDrr
	}
		const _returnValuejEkCLg = await _Helps0WvOfD.argumentTerm(_argumentaXcrrkQ)
		const _arrayValueAlLaY7 = null;
		const _arrayValueqS5ltPH = [_arrayValueAlLaY7]
		const _arrayValueqrfrZ7a = -5.163809627621391;
		const _arrayValueXQqXYU7 = null;
		const _returnValueEeTUGEp = null;
		const _arrayValueHfULEVR = () => { return _returnValueEeTUGEp };
		const _cmdH4zr2ie = [_arrayValueqS5ltPH, _arrayValueqrfrZ7a, _arrayValueXQqXYU7, _arrayValueHfULEVR]
		const _sortSubcommandseZOQRUC = {
		
	}
		const _returnValuecPRDNF1 = 2.4098470966227055;
		const _subcommandTermAXS4i8A = () => { return _returnValuecPRDNF1 };
		const _helperM2nwzQy = {
			"sortSubcommands": _sortSubcommandseZOQRUC,
		"subcommandTerm": _subcommandTermAXS4i8A
	}
		const _returnValueIh2Ucz8 = await _Helps0WvOfD.formatHelp(_cmdH4zr2ie, _helperM2nwzQy)
	});

	it('test for Help', async () => {
		const _HelpiaItvPq = new Help()
		const _returnValuemKGOJ92 = true;
		const _descriptionXXowQO5 = () => { return _returnValuemKGOJ92 };
		const _cmdaXJAUx = {
			"description": _descriptionXXowQO5
	}
		const _returnValuebHxUVyq = await _HelpiaItvPq.commandDescription(_cmdaXJAUx)
		const _flagsPqXng2k = false;
		const _optioniO06ATE = {
			"flags": _flagsPqXng2k
	}
		const _returnValueerNbuHA = await _HelpiaItvPq.optionTerm(_optioniO06ATE)
	});

	it('test for Help', async () => {
		const _HelpDgC1nxA = new Help()
		const _returnValue0y635L = "nxbKcud7uHPw5FuylvQdywRo9Z3E3TukTdPZbGruUhCZCWAD91IetpFE23wcoU8bS";
		const _flagsTbcoDJ3 = () => { return _returnValue0y635L };
		const _optionEYFMWk = {
			"flags": _flagsTbcoDJ3
	}
		const _returnValuem8mPMNh = await _HelpDgC1nxA.optionTerm(_optionEYFMWk)
		const _cmd6ZT4xW = 1.3252237413973962;
		const _returnValuexnY3g0g = false;
		const _longestOptionTermLengthxWbKrhd = () => { return _returnValuexnY3g0g };
		const _returnValuexBUz6a = undefined;
		const _longestSubcommandTermLengths0TFceF = () => { return _returnValuexBUz6a };
		const _returnValueQDdtgyw = false;
		const _longestArgumentTermLengthBTcSFHJ = () => { return _returnValueQDdtgyw };
		const _helperwElEgfg = {
			"longestOptionTermLength": _longestOptionTermLengthxWbKrhd,
		"longestSubcommandTermLength": _longestSubcommandTermLengths0TFceF,
		"longestArgumentTermLength": _longestArgumentTermLengthBTcSFHJ
	}
		const _returnValueNTxpfcb = await _HelpDgC1nxA.padWidth(_cmd6ZT4xW, _helperwElEgfg)
		const _cmdRUry9fK = true;
		const _returnValuewqb7Hj = null;
		const _longestOptionTermLengthhxIxHLk = () => { return _returnValuewqb7Hj };
		const _returnValuekdPgQBU = 8.753599797795893;
		const _longestSubcommandTermLengthv3u0RXq = () => { return _returnValuekdPgQBU };
		const _returnValueC3WiC4L = undefined;
		const _longestArgumentTermLengthsOM0tNp = () => { return _returnValueC3WiC4L };
		const _helperI55zxaP = {
			"longestOptionTermLength": _longestOptionTermLengthhxIxHLk,
		"longestSubcommandTermLength": _longestSubcommandTermLengthv3u0RXq,
		"longestArgumentTermLength": _longestArgumentTermLengthsOM0tNp
	}
		const _returnValueRU9LvF0 = await _HelpDgC1nxA.padWidth(_cmdRUry9fK, _helperI55zxaP)
		const _arrayValueB1xtMfp = {
		
	}
		const _cmddjFdXPL = [_arrayValueB1xtMfp]
		const _returnValuemssNSfT = 6.9213761725296195;
		const _visibleArgumentsdLP00Jt = () => { return _returnValuemssNSfT };
		const _returnValueprEZLyh = "E5mOHf57lIyGT6IXp5tbiWNDO3F7EYTovFvVI972NsClLB0Q0RagcTIiGsKif9zfK58j9PKFahLw5KkJscj6XX";
		const _returnValueanipW8h = () => { return _returnValueprEZLyh };
		const _argumentTermckUCsOJ = () => { return _returnValueanipW8h };
		const _helperzEf1M3s = {
			"visibleArguments": _visibleArgumentsdLP00Jt,
		"argumentTerm": _argumentTermckUCsOJ
	}
		const _returnValuepiSBFA3 = await _HelpDgC1nxA.longestArgumentTermLength(_cmddjFdXPL, _helperzEf1M3s)
	});

	it('test for Help', async () => {
		const _HelpY380QwM = new Help()
		const _optionsRkfmIhy = {
		
	}
		const __hasHelpOptionVOeeU2V = undefined;
		const __helpShortFlagEsdxt4d = 1.6730502938991094;
		const _returnValuejtiKegu = true;
		const __findOptionn8dXja9 = () => { return _returnValuejtiKegu };
		const __helpLongFlagMvpEt8Z = 3.081863526963712;
		const _returnValuePTGSjC5 = undefined;
		const _createOptionwPcrxlV = () => { return _returnValuePTGSjC5 };
		const __helpDescriptionXvrdtSV = 8.785663038641541;
		const __helpFlagsbRqyqm = false;
		const _cmdQsIXxW = {
			"options": _optionsRkfmIhy,
		"_hasHelpOption": __hasHelpOptionVOeeU2V,
		"_helpShortFlag": __helpShortFlagEsdxt4d,
		"_findOption": __findOptionn8dXja9,
		"_helpLongFlag": __helpLongFlagMvpEt8Z,
		"createOption": _createOptionwPcrxlV,
		"_helpDescription": __helpDescriptionXvrdtSV,
		"_helpFlags": __helpFlagsbRqyqm
	}
		const _returnValueMc7r5OC = await _HelpY380QwM.visibleOptions(_cmdQsIXxW)
		const _descriptionFV57hib = 5.275896644874106;
		const _cmdZov9Wkt = {
			"description": _descriptionFV57hib
	}
		const _returnValueJXPFa1u = await _HelpY380QwM.commandDescription(_cmdZov9Wkt)
	});

	it('test for Help', async () => {
		const _HelpvSxmG7 = new Help()
		const __nameUm9GWO = {
		
	}
		const __aliasesF1TFdV = {
		
	}
		const _parentWM5s2U5 = {
		
	}
		const _returnValuet5Xv2Ng = undefined;
		const _usagedv0GPJE = () => { return _returnValuet5Xv2Ng };
		const _cmdppEMII = {
			"_name": __nameUm9GWO,
		"_aliases": __aliasesF1TFdV,
		"parent": _parentWM5s2U5,
		"usage": _usagedv0GPJE
	}
		const _returnValueb3qgbI7 = await _HelpvSxmG7.commandUsage(_cmdppEMII)
		const __argsCoaZJv3 = {
		
	}
		const __namepqfMjP4 = 7.793578107532582;
		const __aliasesE0BFp2q = {
		
	}
		const _optionsPClNa6U = {
		
	}
		const _cmduiSKZVQ = {
			"_args": __argsCoaZJv3,
		"_name": __namepqfMjP4,
		"_aliases": __aliasesE0BFp2q,
		"options": _optionsPClNa6U
	}
		const _returnValueLHD96DA = await _HelpvSxmG7.subcommandTerm(_cmduiSKZVQ)
		const _optionsFXhN5vz = undefined;
		const __hasHelpOptioncQ33odN = null;
		const _returnValueCd6L0mk = "kvUbcGj1fdT1hAXTKb2I5p6KKuJAJVDHeLrE";
		const _returnValue9BBBkr = () => { return _returnValueCd6L0mk };
		const __helpShortFlagSzXlxnN = () => { return _returnValue9BBBkr };
		const _returnValueKFyQLwW = false;
		const __findOptionitzEB1k = () => { return _returnValueKFyQLwW };
		const _arrayValueF2anKPg = -9.870700057747658;
		const _arrayValuefDnH6su = -4.151951183681958;
		const __helpLongFlageW7c2O = [_arrayValueF2anKPg, _arrayValuefDnH6su]
		const _returnValuevI0BQ6C = null;
		const _createOptionllUpXQD = () => { return _returnValuevI0BQ6C };
		const _returnValuekHHt7Lt = undefined;
		const __helpDescriptionwQvE5hZ = () => { return _returnValuekHHt7Lt };
		const _arrayValueuy39k9l = true;
		const _arrayValuein7RhMg = undefined;
		const _arrayValueFchPbkW = null;
		const _arrayValueK7hRSv = undefined;
		const _returnValuecbfXoiG = [_arrayValueuy39k9l, _arrayValuein7RhMg, _arrayValueFchPbkW, _arrayValueK7hRSv]
		const __helpFlagsY2XyQS = () => { return _returnValuecbfXoiG };
		const _cmdDwVN2hk = {
			"options": _optionsFXhN5vz,
		"_hasHelpOption": __hasHelpOptioncQ33odN,
		"_helpShortFlag": __helpShortFlagSzXlxnN,
		"_findOption": __findOptionitzEB1k,
		"_helpLongFlag": __helpLongFlageW7c2O,
		"createOption": _createOptionllUpXQD,
		"_helpDescription": __helpDescriptionwQvE5hZ,
		"_helpFlags": __helpFlagsY2XyQS
	}
		const _returnValueTQowulo = await _HelpvSxmG7.visibleOptions(_cmdDwVN2hk)
		const _cmdtgeHoZP = false;
		const _returnValueg1eSyU6 = null;
		const _visibleOptionsn2C4xIQ = () => { return _returnValueg1eSyU6 };
		const _returnValueGEyPXy = undefined;
		const _optionTermpvktj4w = () => { return _returnValueGEyPXy };
		const _helperoj4x3NX = {
			"visibleOptions": _visibleOptionsn2C4xIQ,
		"optionTerm": _optionTermpvktj4w
	}
		const _returnValuePke0gOr = await _HelpvSxmG7.longestOptionTermLength(_cmdtgeHoZP, _helperoj4x3NX)
	});

	it('test for Help', async () => {
		const _HelpuuXkc8Y = new Help()
		const _arrayValueLN2s6z = false;
		const _arrayValueFzyPiTw = true;
		const _arrayValuePpfz8TB = true;
		const _arrayValueMkvHzGK = null;
		const _argumentZ40c49A = [_arrayValueLN2s6z, _arrayValueFzyPiTw, _arrayValuePpfz8TB, _arrayValueMkvHzGK]
		const _returnValuewQOpMWp = await _HelpuuXkc8Y.argumentDescription(_argumentZ40c49A)
		const _arrayValuey0J8Pe2 = false;
		const _cmdj0sAWRq = [_arrayValuey0J8Pe2]
		const _returnValueVgrpYQV = await _HelpuuXkc8Y.commandDescription(_cmdj0sAWRq)
	});

	it('test for Help', async () => {
		const _HelpAy8BdF4 = new Help()
		const _commandsiF249UQ = {
		
	}
		const __hasImplicitHelpCommandSRzKEB9 = true;
		const __helpCommandnameAndArgsPHRlGp = {
		
	}
		const _returnValueOtFbHb3 = []
		const _createCommandveCsJ3 = () => { return _returnValueOtFbHb3 };
		const __helpCommandDescriptionR2fPiUE = "MjQEF56bTzTlsShCCR4wUEPFKiiOMBE74XEGfsS9hQg9GrCPBeUTBceult7sEGpXji0bogyA1t";
		const _cmdEchp4f = {
			"commands": _commandsiF249UQ,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandSRzKEB9,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPHRlGp,
		"createCommand": _createCommandveCsJ3,
		"_helpCommandDescription": __helpCommandDescriptionR2fPiUE
	}
		const _returnValuehA0dBP9 = await _HelpAy8BdF4.visibleCommands(_cmdEchp4f)
	});

	it('test for Help', async () => {
		const _HelpvTWmNmr = new Help()
		const _arrayValueR8hXu6N = true;
		const _arrayValueSt2Ihjq = "vW1x1UWP4L5ojM6ZEAfk5Fehfm9EpbCsaaTj8u19nSn9GtmQ3ts";
		const _arrayValuebTEAgjW = null;
		const _cmdFLxtK4b = [_arrayValueR8hXu6N, _arrayValueSt2Ihjq, _arrayValuebTEAgjW]
		const _returnValuesYbWS5L = await _HelpvTWmNmr.visibleArguments(_cmdFLxtK4b)
		const _returnValuewPnMz7j = false;
		const _description4ol2am = () => { return _returnValuewPnMz7j };
		const _cmdrMgHld0 = {
			"description": _description4ol2am
	}
		const _returnValuepml0pEI = await _HelpvTWmNmr.subcommandDescription(_cmdrMgHld0)
	});

	it('test for Help', async () => {
		const _HelpwzdJn2a = new Help()
		const _argChoicesmhramL3 = {
		
	}
		const _returnValueGxtumr8 = true;
		const _negatevO225oI = () => { return _returnValueGxtumr8 };
		const _defaultValuei772XBR = undefined;
		const _returnValuemEBvfqi = undefined;
		const _defaultValueDescriptionkEIWzTG = () => { return _returnValuemEBvfqi };
		const _envVarqjuswce = undefined;
		const _descriptionGDByX1 = undefined;
		const _optionVsWYtHT = {
			"argChoices": _argChoicesmhramL3,
		"negate": _negatevO225oI,
		"defaultValue": _defaultValuei772XBR,
		"defaultValueDescription": _defaultValueDescriptionkEIWzTG,
		"envVar": _envVarqjuswce,
		"description": _descriptionGDByX1
	}
		const _returnValueyHS7sTC = await _HelpwzdJn2a.optionDescription(_optionVsWYtHT)
		const _cmdUtS1zsg = true;
		const _arrayValueW8AdaCE = 2.5425635619831013;
		const _helperekkjqHh = [_arrayValueW8AdaCE]
		const _returnValuepbxTUER = await _HelpwzdJn2a.longestOptionTermLength(_cmdUtS1zsg, _helperekkjqHh)
		const _argChoicesPRytxZ = {
		
	}
		const _negateBRlXq2 = false;
		const _defaultValuefMbtCA2 = undefined;
		const _defaultValueDescriptionA5dELSQ = false;
		const _envVariR4Uddp = undefined;
		const _descriptionOMeVpPF = null;
		const _optionSpPAFEN = {
			"argChoices": _argChoicesPRytxZ,
		"negate": _negateBRlXq2,
		"defaultValue": _defaultValuefMbtCA2,
		"defaultValueDescription": _defaultValueDescriptionA5dELSQ,
		"envVar": _envVariR4Uddp,
		"description": _descriptionOMeVpPF
	}
		const _returnValueDRnSUTo = await _HelpwzdJn2a.optionDescription(_optionSpPAFEN)
		const _cmdCaYhL2C = "QVJ379eXMKQoVMFkvmoj4wYhD2OMfzpUEx1";
		const _arrayValueZmRqnKE = {
		
	}
		const _helperE67Qmew = [_arrayValueZmRqnKE]
		const _returnValueYCD0Xde = await _HelpwzdJn2a.longestOptionTermLength(_cmdCaYhL2C, _helperE67Qmew)
	});

	it('test for Help', async () => {
		const _HelpYWKhlXC = new Help()
		const _arrayValueiZiYccY = null;
		const _returnValueuw7yosS = [_arrayValueiZiYccY]
		const _matchRGZW3tv = () => { return _returnValueuw7yosS };
		const _returnValueM5kVi20 = undefined;
		const _returnValued5vAwSl = () => { return _returnValueM5kVi20 };
		const _substrgdLLxgO = () => { return _returnValued5vAwSl };
		const _strP8T0Nfj = {
			"match": _matchRGZW3tv,
		"substr": _substrgdLLxgO
	}
		const _widthgRw18aa = -9.369288718633035;
		const _indentfzXC3kc = 0.28041837279914006;
		const _minColumnWidthQvdnIi = -7.617978454645821;
		const _returnValueFiRuh3v = await _HelpYWKhlXC.wrap(_strP8T0Nfj, _widthgRw18aa, _indentfzXC3kc, _minColumnWidthQvdnIi)
	});

	it('test for Help', async () => {
		const _HelpdWZNwip = new Help()
		const _argChoicesZF3dhiW = {
		
	}
		const _returnValueAvMoTVi = null;
		const _negatepRN2mgH = () => { return _returnValueAvMoTVi };
		const _defaultValuedA0h4bS = undefined;
		const _defaultValueDescriptionmsrfHIs = "yP0MefP9DMgjf63cHREIUXtTu5jEJxtmT8zp9hZlImt2AscENLooX6kscDDjtS22TyDO3nhXCPpok1AzEBnmbjFtR86NILCGT5";
		const _envVarAC8Enni = -7.072908674285092;
		const _descriptionHnjhq5M = null;
		const _optionBw4D2or = {
			"argChoices": _argChoicesZF3dhiW,
		"negate": _negatepRN2mgH,
		"defaultValue": _defaultValuedA0h4bS,
		"defaultValueDescription": _defaultValueDescriptionmsrfHIs,
		"envVar": _envVarAC8Enni,
		"description": _descriptionHnjhq5M
	}
		const _returnValuesGhx3Us = await _HelpdWZNwip.optionDescription(_optionBw4D2or)
		const _arrayValuelDEM0Yt = null;
		const _arrayValuesYEU7in = undefined;
		const _arrayValuewnKhD1q = null;
		const _arrayValueZKvdrwP = [_arrayValuelDEM0Yt, _arrayValuesYEU7in, _arrayValuewnKhD1q]
		const _returnValuesmefvKo = [_arrayValueZKvdrwP]
		const _cmdYkYVHqQ = () => { return _returnValuesmefvKo };
		const _returnValueFm8qeN8 = await _HelpdWZNwip.commandUsage(_cmdYkYVHqQ)
		const _arrayValueXx8caZc = undefined;
		const _arrayValueFjeyCJ = 6.01712847825188;
		const _cmdwMIYgEB = [_arrayValueXx8caZc, _arrayValueFjeyCJ]
		const _returnValueaWYvI2R = await _HelpdWZNwip.visibleArguments(_cmdwMIYgEB)
		const _returnValueMZQ5L82 = 7.917006372675036;
		const _cmdPPfwbDK = () => { return _returnValueMZQ5L82 };
		const _returnValueKaLHP8 = await _HelpdWZNwip.visibleCommands(_cmdPPfwbDK)
		const _arrayValueZ6orCqj = null;
		const _arrayValuesFuMX82 = false;
		const _arrayValueqkc8DI5 = undefined;
		const _arrayValuezRXpZzU = [_arrayValueZ6orCqj, _arrayValuesFuMX82, _arrayValueqkc8DI5]
		const _cmdWPSxRFU = [_arrayValuezRXpZzU]
		const _returnValuefNNpPr0 = await _HelpdWZNwip.visibleArguments(_cmdWPSxRFU)
	});

	it('test for Help', async () => {
		const _Helpnhuq0ZW = new Help()
		const _strW0ibHxT = "iFiSJ9TxuQvbOlQzk23aVmw5whO6apLpiRftxsRoYwtU17vNJR9zJTkCfcf58mdgYtumZdmdUI2V8G79tr2cL9IZ02Dn";
		const _widthe4aSRJ = -8.852408958146759;
		const _indentFsOq2jy = -4.4902835143787625;
		const _minColumnWidthayrViML = -4.574491799287038;
		const _returnValueVUe3iI = await _Helpnhuq0ZW.wrap(_strW0ibHxT, _widthe4aSRJ, _indentFsOq2jy, _minColumnWidthayrViML)
		const _nameEPnxew1 = 4.727454773096234;
		const _cmdLauuAz4 = new Command(_nameEPnxew1)
		const _returnValuelfMT6rO = await _cmdLauuAz4._processArguments()
		const _displayHelpA1ekzZM = {
		
	}
		const _returnValueeto5fwc = await _cmdLauuAz4.showHelpAfterError(_displayHelpA1ekzZM)
		const _exitCodebKNpWkB = false;
		const _codek0f68Yx = -5.781044399693387;
		const _messageadmvIvg = "qSCh5dyDY1iqRBCwB2QJnySxFthvIOWoK1EE7JY9C5gdAy4sBhXX69X5DuSsh6dJteQlGTeAAUn1TKUQ1bAhmqd79J";
		const _returnValueUM50GOQ = await _cmdLauuAz4._exit(_exitCodebKNpWkB, _codek0f68Yx, _messageadmvIvg)
		const _returnValuefYBkWOB = await _Helpnhuq0ZW.commandDescription(_cmdLauuAz4)
		const _cmdDIE1fov = undefined;
		const _sortSubcommandsyaYNpvE = "jWgqFqMIfnvmyqo754GySLTxt6TU6L97p7A9HTZbd4Mp3mEVurK9kF3dSyc55igAeYVflJjJIWni8yLmSdih21O6SOD25";
		const _returnValue72zFfV = null;
		const _subcommandTermyE84CM = () => { return _returnValue72zFfV };
		const _helperJ0JN0v = {
			"sortSubcommands": _sortSubcommandsyaYNpvE,
		"subcommandTerm": _subcommandTermyE84CM
	}
		const _returnValuePOfA0af = await _Helpnhuq0ZW.longestSubcommandTermLength(_cmdDIE1fov, _helperJ0JN0v)
		const _arrayValueM7JRyRZ = null;
		const _arrayValuegUsS4Ee = -8.152265246893204;
		const _arrayValueHScDOWF = [_arrayValueM7JRyRZ, _arrayValuegUsS4Ee]
		const _arrayValuekHuWs2L = true;
		const _arrayValueghtZdMB = undefined;
		const _argumentVTYETN = [_arrayValueHScDOWF, _arrayValuekHuWs2L, _arrayValueghtZdMB]
		const _returnValueiZVZfSd = await _Helpnhuq0ZW.argumentDescription(_argumentVTYETN)
	});

	it('test for Help', async () => {
		const _HelpafWpwLO = new Help()
		const _argChoices8lqUSH = {
		
	}
		const _negateMOc4QYk = false;
		const _defaultValueQWyOPyI = undefined;
		const _defaultValueDescriptionBF17YT = true;
		const _envVarZFJ4R0E = undefined;
		const _descriptionKLInsE8 = {
		
	}
		const _optionu586V3k = {
			"argChoices": _argChoices8lqUSH,
		"negate": _negateMOc4QYk,
		"defaultValue": _defaultValueQWyOPyI,
		"defaultValueDescription": _defaultValueDescriptionBF17YT,
		"envVar": _envVarZFJ4R0E,
		"description": _descriptionKLInsE8
	}
		const _returnValue86ZUaS = await _HelpafWpwLO.optionDescription(_optionu586V3k)
		const _argChoicesc1GnPWd = {
		
	}
		const _negatewB97NdL = false;
		const _defaultValueDQ1fSWa = undefined;
		const _defaultValueDescriptionValrlzt = 1.9072314194202722;
		const _envVarkq3Hg5D = undefined;
		const _descriptionxMvD0wX = true;
		const _optionqKeVxed = {
			"argChoices": _argChoicesc1GnPWd,
		"negate": _negatewB97NdL,
		"defaultValue": _defaultValueDQ1fSWa,
		"defaultValueDescription": _defaultValueDescriptionValrlzt,
		"envVar": _envVarkq3Hg5D,
		"description": _descriptionxMvD0wX
	}
		const _returnValueUnbtxpt = await _HelpafWpwLO.optionDescription(_optionqKeVxed)
	});

	it('test for Help', async () => {
		const _HelpvuEIFVH = new Help()
		const _strfdZ0Maz = "0QeWtnWh7bHYWXyLv6pQRFSxroXM2CqjqMu4unR7kWc9HScyPsIYGSXs64BPRbUCRtAiuGBaviJ1o7BbYQrxX";
		const _widthh42lnq = -9.254849133512153;
		const _indentggwY4qn = -5.113678419319982;
		const _minColumnWidthzZVOji1 = 7.188216139788036;
		const _returnValueVM7hoy = await _HelpvuEIFVH.wrap(_strfdZ0Maz, _widthh42lnq, _indentggwY4qn, _minColumnWidthzZVOji1)
		const _arrayValueh3chaoe = 3.642701959771184;
		const _arrayValueudse1hm = "IRL0THQaxHIGsBGTK";
		const _nameZ5fEE9w = [_arrayValueh3chaoe, _arrayValueudse1hm]
		const _cmdFuB5TH = new Command(_nameZ5fEE9w)
		const __named2FcAky = {
		
	}
		const _commandsMTnsRXn = null;
		const __hiddenF05GV9q = false;
		const _parentJSL2DnO = {
		
	}
		const _cmdCG4GdCG = {
			"_name": __named2FcAky,
		"commands": _commandsMTnsRXn,
		"_hidden": __hiddenF05GV9q,
		"parent": _parentJSL2DnO
	}
		const _arrayValueUFuFpVG = null;
		const _arrayValueqpnFdS0 = null;
		const _opts8ijzQV = [_arrayValueUFuFpVG, _arrayValueqpnFdS0]
		const _returnValuerHJpsQM = await _cmdFuB5TH.addCommand(_cmdCG4GdCG, _opts8ijzQV)
		const _errorbTbp2xR = []
		const _commandg4LsD2E = false;
		const _contextOptionszXEqhTH = {
			"error": _errorbTbp2xR,
		"command": _commandg4LsD2E
	}
		const _returnValue3inNQz = await _cmdFuB5TH.helpInformation(_contextOptionszXEqhTH)
		const _keyHDt3en = null;
		const _returnValuegnw0X8f = await _cmdFuB5TH.getOptionValueSource(_keyHDt3en)
		const _arrayValueuVygx35 = -8.393063327530344;
		const _arrayValueGJ33J0y = 8.074373197426393;
		const _exitCodeqvfjb4m = [_arrayValueuVygx35, _arrayValueGJ33J0y]
		const _codew9B34xO = true;
		const _messageym9K49C = []
		const _returnValueSvpUuvt = await _cmdFuB5TH._displayError(_exitCodeqvfjb4m, _codew9B34xO, _messageym9K49C)
		const _fnoI70EbX = {
		
	}
		const _returnValueAcEAydt = await _cmdFuB5TH.exitOverride(_fnoI70EbX)
		const _returnValuelYWwVo = await _HelpvuEIFVH.subcommandTerm(_cmdFuB5TH)
		const _cmdmApVFb = undefined;
		const _arrayValueiAeDfit = false;
		const _arrayValuefLm7z1O = 1.4193312319229996;
		const _arrayValueasLgJqT = null;
		const _arrayValuedtDbpBe = -3.17065213132733;
		const _returnValueiREEeFU = 6.237695904841413;
		const _arrayValuekKp8CkK = () => { return _returnValueiREEeFU };
		const _arrayValuezblM9A = [_arrayValueasLgJqT, _arrayValuedtDbpBe, _arrayValuekKp8CkK]
		const _returnValueZ0do8B3 = [_arrayValueiAeDfit, _arrayValuefLm7z1O, _arrayValuezblM9A]
		const _visibleOptionsFw5w4Qc = () => { return _returnValueZ0do8B3 };
		const _optionTermB5JF54x = undefined;
		const _helperG0t8P9 = {
			"visibleOptions": _visibleOptionsFw5w4Qc,
		"optionTerm": _optionTermB5JF54x
	}
		const _returnValuepwGipcR = await _HelpvuEIFVH.longestOptionTermLength(_cmdmApVFb, _helperG0t8P9)
		const _cmdDLJWFP = true;
		const _arrayValuefa5hnnT = null;
		const _returnValueP9LPNoY = false;
		const _arrayValueZgKyy7n = () => { return _returnValueP9LPNoY };
		const _arrayValuezc5Wh95 = [_arrayValuefa5hnnT, _arrayValueZgKyy7n]
		const _arrayValueIUKYTXs = 3.1810631657619233;
		const _helperivMA8yc = [_arrayValuezc5Wh95, _arrayValueIUKYTXs]
		const _returnValueS1KUakX = await _HelpvuEIFVH.longestArgumentTermLength(_cmdDLJWFP, _helperivMA8yc)
		const _cmdrzoFKdM = null;
		const _helper1XH7dP = new Help()
		const _nameBefOFIH = "DO4fgOgwJT9lVpp4qv9XrvtAkihIyjSXrbcTgTC7Jy";
		const _descriptionAvt4ng2 = undefined;
		const _cmdTYIMIG = new Argument(_nameBefOFIH, _descriptionAvt4ng2)
		const _returnValuewoC9YfW = await _cmdTYIMIG.argOptional()
		const _returnValueagT7qGc = await _cmdTYIMIG.argRequired()
		const _returnValueyJCLBU4 = await _cmdTYIMIG.argRequired()
		const _returnValueK1LWcvI = await _helper1XH7dP.subcommandDescription(_cmdTYIMIG)
		const _cmdSSk1Ngs = -4.1069040128510546;
		const _returnValueIcNYOOc = true;
		const _helpersWyfkB8 = () => { return _returnValueIcNYOOc };
		const _returnValuedvaBpcu = await _helper1XH7dP.padWidth(_cmdSSk1Ngs, _helpersWyfkB8)
		const _cmdvVeadMz = "jXyPKggDlW5firliTND7RCoUJLbfMltVNw8MCPXkVgP";
		const _returnValueuDx4UJB = -4.551094414641658;
		const _visibleOptionsjDwZ0vW = () => { return _returnValueuDx4UJB };
		const _returnValueNJ6w6Yo = false;
		const _optionTermOtEQxcJ = () => { return _returnValueNJ6w6Yo };
		const _helpers7VJ85Y = {
			"visibleOptions": _visibleOptionsjDwZ0vW,
		"optionTerm": _optionTermOtEQxcJ
	}
		const _returnValuejsdSxvS = await _helper1XH7dP.longestOptionTermLength(_cmdvVeadMz, _helpers7VJ85Y)
		const _returnValuecYGvOn = await _HelpvuEIFVH.longestSubcommandTermLength(_cmdrzoFKdM, _helper1XH7dP)
	});

	it('test for Help', async () => {
		const _HelptYDbhoo = new Help()
		const _cmdoJlW97r = "QUFW19";
		const _helperbfJM1xP = new Help()
		const _arrayValueaDnANlK = false;
		const _arrayValueeliUozy = 4.0610095808556075;
		const _returnValueMy3dWSo = [_arrayValueaDnANlK, _arrayValueeliUozy]
		const _arrayValueaeDDCY5 = () => { return _returnValueMy3dWSo };
		const _cmdziZcY07 = [_arrayValueaeDDCY5]
		const _helpergvZ7enc = new Help()
		const _namePxPGpWx = "Pa34VgwSCvez5H2PIQQvJk637dKIaYCzmnXaEQEWoWLM9Gqgv9MNvgAf";
		const _cmdvVnCnrd = new Command(_namePxPGpWx)
		const _fndj0OrFV = {
		
	}
		const _returnValueJB5XPak = await _cmdvVnCnrd.exitOverride(_fndj0OrFV)
		const _returnValues0BqMgc = await _helpergvZ7enc.subcommandTerm(_cmdvVnCnrd)
		const _strrrIabdP = "T3Sp9dDnNIzsuZu9TfDzYtVXtvIciltNeFIa";
		const _widthvNHhVik = -5.847748137674486;
		const _indentdX5Xy5R = 9.445638529088694;
		const _minColumnWidthrE3XkM8 = null;
		const _returnValueGVNm5k3 = await _helpergvZ7enc.wrap(_strrrIabdP, _widthvNHhVik, _indentdX5Xy5R, _minColumnWidthrE3XkM8)
		const _namehcgwW1E = null;
		const _cmddN5mLpA = new Command(_namehcgwW1E)
		const _returnValuek654skn = false;
		const _splitYjlemrP = () => { return _returnValuek654skn };
		const _namesVbN2yl = {
			"split": _splitYjlemrP
	}
		const _returnValuef1Ip9Rw = await _cmddN5mLpA.arguments(_namesVbN2yl)
		const _arrayValuewRxh55 = null;
		const _arrayValueAQwz8wV = undefined;
		const _arrayValueNHZg4b = null;
		const _arrayValueCryiAF = {
		
	}
		const _arrayValuea4anBCG = 5.83865904444699;
		const _arrayValuePfGAUlm = [_arrayValueNHZg4b, _arrayValueCryiAF, _arrayValuea4anBCG]
		const _exitCodemUC8oTA = [_arrayValuewRxh55, _arrayValueAQwz8wV, _arrayValuePfGAUlm]
		const _codeD7jfvc5 = false;
		const _messagemeUaXR8 = null;
		const _returnValuelh3Tx8a = await _cmddN5mLpA._exit(_exitCodemUC8oTA, _codeD7jfvc5, _messagemeUaXR8)
		const _arrayValueKdNx4LM = -7.728560555524509;
		const _returnValueLwBHmnx = [_arrayValueKdNx4LM]
		const _contextOptionsx6vR3vo = () => { return _returnValueLwBHmnx };
		const _returnValuekL9R5Cr = await _cmddN5mLpA.outputHelp(_contextOptionsx6vR3vo)
		const _strcBuHUPe = undefined;
		const _returnValueRmUafA = await _cmddN5mLpA.usage(_strcBuHUPe)
		const _returnValueeky0nK = await _helpergvZ7enc.subcommandTerm(_cmddN5mLpA)
		const _returnValuecajCCYJ = await _helperbfJM1xP.longestArgumentTermLength(_cmdziZcY07, _helpergvZ7enc)
		const _nameTz2F5u = null;
		const _argumentjFmWF9l = new Command(_nameTz2F5u)
		const _keyy56sZ9 = -9.111034199617107;
		const _returnValueQ4PSPom = await _argumentjFmWF9l.getOptionValueSource(_keyy56sZ9)
		const _flagsmZ0feq9 = true;
		const _descriptionnRsIsbv = null;
		const _returnValuexFQBZSQ = await _argumentjFmWF9l.helpOption(_flagsmZ0feq9, _descriptionnRsIsbv)
		const _arrayValuelk5ZBha = "LKqG0PzzvnAbnrgls";
		const _nameQlusDeK = [_arrayValuelk5ZBha]
		const _returnValuegAP4zNR = await _argumentjFmWF9l.missingArgument(_nameQlusDeK)
		const _passThroughnDnd6VR = true;
		const _returnValueijNURVG = await _argumentjFmWF9l.passThroughOptions(_passThroughnDnd6VR)
		const _returnValueROAFwxp = await _helperbfJM1xP.argumentTerm(_argumentjFmWF9l)
		const _returnValueZ8uucRc = await _HelptYDbhoo.longestOptionTermLength(_cmdoJlW97r, _helperbfJM1xP)
		const _cmdR43U8A8 = "97oZHTXslvB";
		const _returnValueCbBSL9 = await _HelptYDbhoo.commandUsage(_cmdR43U8A8)
		const _flagswQLFMI0 = true;
		const _optionui9Ea8A = {
			"flags": _flagswQLFMI0
	}
		const _returnValueu6DuZKJ = await _HelptYDbhoo.optionTerm(_optionui9Ea8A)
	});

	it('test for Help', async () => {
		const _HelpLpORsMT = new Help()
		const _flagsXaC0u9J = "OhJCIR7EsxSAulq9y46jQWUPjOLHmlxOh3OXfgtp7eZX3vWq0tbCg9knMCsy8O7Jnze2rMW5RVqQGzqghhDxKquMRfSAJd";
		const _arrayValuedlIZR1 = -1.7875091409756045;
		const _arrayValuetpGRCpf = "t9Rcd8BrLKN59nq6oDUWzLd8EHCLpw3iiBi2WSJVHBAl8iH7qujROXLV5KwXCsjlBEPMWcCAvmP1Xq";
		const _arrayValueez5lnoa = "PZS5VJyvMTW2ER6Ce3tzLWr1paKPwGd";
		const _descriptionToMON1h = [_arrayValuedlIZR1, _arrayValuetpGRCpf, _arrayValueez5lnoa]
		const _cmdoFq3RW6 = new Option(_flagsXaC0u9J, _descriptionToMON1h)
		const _fnQG5fuZ = undefined;
		const _returnValueQEF96ij = await _cmdoFq3RW6.argParser(_fnQG5fuZ)
		const _returnValueSTlcLf2 = await _cmdoFq3RW6.attributeName()
		const _mandatorycIUsJp = false;
		const _returnValuelA5sap = await _cmdoFq3RW6.makeOptionMandatory(_mandatorycIUsJp)
		const _returnValueQwGFAIq = await _HelpLpORsMT.subcommandDescription(_cmdoFq3RW6)
		const _flagsCJAk5e3 = "wiMr0yQJ3hIrdf5o5y8qJygPjidiMkm3hrgAHQtM3okUrpsUIB8LomU6kNIuKGhzyEcoMg3Nw6Z";
		const _descriptiono0Qth5z = null;
		const _argumentHw2zRxJ = new Option(_flagsCJAk5e3, _descriptiono0Qth5z)
		const _returnValuerfVbcX = 1.8333927193111634;
		const _valueOuDsHd5 = () => { return _returnValuerfVbcX };
		const _returnValuePy3cB1A = -2.072462992382361;
		const _concatfjVFJ8a = () => { return _returnValuePy3cB1A };
		const _previousYhZ44uv = {
			"concat": _concatfjVFJ8a
	}
		const _returnValuerX8701D = await _argumentHw2zRxJ._concatValue(_valueOuDsHd5, _previousYhZ44uv)
		const _valueYfbJsG = undefined;
		const _returnValueh4Rw4of = null;
		const _concatbFC4RD7 = () => { return _returnValueh4Rw4of };
		const _previousW2HGuSp = {
			"concat": _concatbFC4RD7
	}
		const _returnValueR33oDVu = await _argumentHw2zRxJ._concatValue(_valueYfbJsG, _previousW2HGuSp)
		const _returnValueX4s0CMS = await _HelpLpORsMT.argumentDescription(_argumentHw2zRxJ)
		const _returnValuezd6b5qx = "2Y9iwM";
		const _cmdpxjWQXc = () => { return _returnValuezd6b5qx };
		const _returnValuefleRcA = await _HelpLpORsMT.visibleArguments(_cmdpxjWQXc)
	});

	it('test for Help', async () => {
		const _HelpMrmV0yt = new Help()
		const __argsDescriptionLyqo1rI = {
		
	}
		const __argswKx3ama = {
		
	}
		const _cmdTJjqGU = {
			"_argsDescription": __argsDescriptionLyqo1rI,
		"_args": __argswKx3ama
	}
		const _returnValueNHFQgfL = await _HelpMrmV0yt.visibleArguments(_cmdTJjqGU)
		const _strKJCfIkc = "dp8jKwmiBCA7kV4RgrkqUGRVkogVA0mMkcS5EuhKdBvNQfDNHJpEvxnwp4Ww2zSyiGZWLflWP66LBlujE9FAIXT8B9NcVvaA";
		const _widtheOqu9zJ = 6.91305387626716;
		const _indentAGsNQRa = 8.135678762959252;
		const _minColumnWidthAs0NFL9 = 2.936515836644684;
		const _returnValuessBPLw = await _HelpMrmV0yt.wrap(_strKJCfIkc, _widtheOqu9zJ, _indentAGsNQRa, _minColumnWidthAs0NFL9)
	});

	it('test for Help', async () => {
		const _HelpSUc8vz7 = new Help()
		const _returnValueroXwge = true;
		const _arrayValuewyMiAyq = () => { return _returnValueroXwge };
		const _arrayValuec6Fi83G = 8.570431038231401;
		const _arrayValueTRKbSCl = undefined;
		const _nameJitZYRP = [_arrayValuewyMiAyq, _arrayValuec6Fi83G, _arrayValueTRKbSCl]
		const _cmdEdDWoov = new Command(_nameJitZYRP)
		const _returnValueKD97sVD = await _cmdEdDWoov.opts()
		const _returnValueZIicyJx = await _HelpSUc8vz7.visibleCommands(_cmdEdDWoov)
		const _cmdyzEwTBt = undefined;
		const _helperkxrUqpk = "bCtP5HP";
		const _returnValue0NWF80 = await _HelpSUc8vz7.longestSubcommandTermLength(_cmdyzEwTBt, _helperkxrUqpk)
		const _cmdexJ52ZS = 1.9306712214193986;
		const _returnValuerpmklST = undefined;
		const _helper8ZQNfX = () => { return _returnValuerpmklST };
		const _returnValuedEI8di = await _HelpSUc8vz7.padWidth(_cmdexJ52ZS, _helper8ZQNfX)
	});

	it('test for Help', async () => {
		const _HelpZL0hHS = new Help()
		const _namelHjeCE = "Aa3rSX5biDU8it39TEiKIsYqQWK5D6inzzQlwDmNv8r3I2c5qtDD3qh2mmXkG7LGLm2c7CD5Udw4OXNMBS6SCrYRepm8M";
		const _cmdMWGAlXF = new Command(_namelHjeCE)
		const _errorFPMnWM = undefined;
		const _commandFxfqVTt = -2.7038579430978924;
		const _contextOptionsoQV8sV0 = {
			"error": _errorFPMnWM,
		"command": _commandFxfqVTt
	}
		const _returnValuewgoZaKT = await _cmdMWGAlXF.helpInformation(_contextOptionsoQV8sV0)
		const _returnValuetpHT4gE = await _HelpZL0hHS.visibleOptions(_cmdMWGAlXF)
		const _flagslFHAuX = "GirgaByK3FtYEVRjzNUGb5PCwKjTR64KV7jRfAboW43C";
		const _descriptionNkgHdVK = undefined;
		const _argumentfTgOkW = new Option(_flagslFHAuX, _descriptionNkgHdVK)
		const _hideJVgVWCM = null;
		const _returnValuejNLqv1 = await _argumentfTgOkW.hideHelp(_hideJVgVWCM)
		const _fnFuP9L2j = undefined;
		const _returnValueT0VuQn7 = await _argumentfTgOkW.argParser(_fnFuP9L2j)
		const _returnValueCLq3LsR = await _HelpZL0hHS.argumentTerm(_argumentfTgOkW)
		const _nameoCQRONH = -8.878422931543485;
		const _cmdmnCeXJH = new Command(_nameoCQRONH)
		const _strSRzbhTk = undefined;
		const _returnValueMUltbkZ = await _cmdmnCeXJH.usage(_strSRzbhTk)
		const _flagsCzbXc1Q = "sZ0NvMFCn9flAe7ucKjeULOcUOVvUAaysXobg6MTx5s4K8yojmyBYUR4J8Hu";
		const _descriptionxgihh5y = null;
		const _returnValued6X0GN = await _cmdmnCeXJH.createOption(_flagsCzbXc1Q, _descriptionxgihh5y)
		const _returnValueObM4A0G = await _HelpZL0hHS.visibleOptions(_cmdmnCeXJH)
		const _cmdfdDDKkR = true;
		const _helperQESEwvT = "r4x6IS2CAo9fr6FHkxuJENhKAAadYbi9Gt3Q64mwZfcFnWfOdKEcXm9";
		const _returnValuesOjqKwQ = await _HelpZL0hHS.longestSubcommandTermLength(_cmdfdDDKkR, _helperQESEwvT)
		const _cmdnDPZX1r = {
		
	}
		const _returnValueFlNxugk = 9.747139066719637;
		const _helperSg4LQTv = () => { return _returnValueFlNxugk };
		const _returnValuexyixmS0 = await _HelpZL0hHS.padWidth(_cmdnDPZX1r, _helperSg4LQTv)
	});
})