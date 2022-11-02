export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpTyx6WTF = new Help()
		const _commandsvycVjPD = {
		
	}
		const _arrayValueDcy4CwK = "dfN5IVmHxllvu8qOKurD5";
		const _returnValueaQsAm85 = [_arrayValueDcy4CwK]
		const __hasImplicitHelpCommandTvTViAU = () => { return _returnValueaQsAm85 };
		const __helpCommandnameAndArgsGBtlWqk = {
		
	}
		const _returnValuelG3GR50 = "CPQoE9P362x3Y3VvKDi2A9f9bysyapEWVE";
		const _createCommandn9qoRS = () => { return _returnValuelG3GR50 };
		const _arrayValueIFWEXj = undefined;
		const _arrayValue7Qtoc7 = null;
		const __helpCommandDescriptionO7oISmL = [_arrayValueIFWEXj, _arrayValue7Qtoc7]
		const _cmdhw1CFqC = {
			"commands": _commandsvycVjPD,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandTvTViAU,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsGBtlWqk,
		"createCommand": _createCommandn9qoRS,
		"_helpCommandDescription": __helpCommandDescriptionO7oISmL
	}
		const _returnValues2pJjMq = await _HelpTyx6WTF.visibleCommands(_cmdhw1CFqC)
		const _argChoicesiviM8qu = {
		
	}
		const _defaultValuejsDwUU1 = undefined;
		const _defaultValueDescriptionKtTDw9J = undefined;
		const _returnValuepHcoH8Q = -5.235708457785181;
		const _descriptionoUZXKT9 = () => { return _returnValuepHcoH8Q };
		const _argumentqPfn96a = {
			"argChoices": _argChoicesiviM8qu,
		"defaultValue": _defaultValuejsDwUU1,
		"defaultValueDescription": _defaultValueDescriptionKtTDw9J,
		"description": _descriptionoUZXKT9
	}
		const _returnValueR0nm78P = await _HelpTyx6WTF.argumentDescription(_argumentqPfn96a)
		const _arrayValueOKTpE1t = 2.940939814496746;
		const _arrayValuebs8jVDH = 1.9921390986920766;
		const _arrayValueI7UxqDH = {
		
	}
		const _cmdvJgu6zq = [_arrayValueOKTpE1t, _arrayValuebs8jVDH, _arrayValueI7UxqDH]
		const _returnValueC7x5how = null;
		const _visibleArgumentsv1udGOE = () => { return _returnValueC7x5how };
		const _returnValuerm4wWzq = "hMOmhEsCB7YVARMQWuFBUm5UBCfDwe3aMmHFEVzbQBSqsQZbm5bhYgG5OP5CQheugJGwiTt5yI6g";
		const _argumentTermMEKZwIq = () => { return _returnValuerm4wWzq };
		const _helperzY9gKvP = {
			"visibleArguments": _visibleArgumentsv1udGOE,
		"argumentTerm": _argumentTermMEKZwIq
	}
		const _returnValueyUg9fcz = await _HelpTyx6WTF.longestArgumentTermLength(_cmdvJgu6zq, _helperzY9gKvP)
		const _argChoicesl8bxTgO = {
		
	}
		const _defaultValuetFknJ8o = "uWc8lcgiqOG5nvz4qVz15Y3sK79DuLNPIqOFGm8";
		const _defaultValueDescriptionM1cAAHM = "F2h2MCjR4US5c1ep3mbuEf40GFJqYpQcickkKDttSy9YmF897lQfpMT2l6hMCWTxUF3onBK2";
		const _arrayValuekWo1Srf = "gfL7OvTEuyq1N3Y8";
		const _arrayValuehqWcktP = "XEnv6vvLaHacj4";
		const _arrayValuebqllwCw = [_arrayValuekWo1Srf, _arrayValuehqWcktP]
		const _arrayValueMUI4JUk = "Fl0FoNr8zxdCuDsviIKXl6hiNAl785F0hbAIFMKc1L";
		const _arrayValueXgTWF8p = [_arrayValueMUI4JUk]
		const _descriptioneZtgWHA = [_arrayValuebqllwCw, _arrayValueXgTWF8p]
		const _argumentYQxlVIZ = {
			"argChoices": _argChoicesl8bxTgO,
		"defaultValue": _defaultValuetFknJ8o,
		"defaultValueDescription": _defaultValueDescriptionM1cAAHM,
		"description": _descriptioneZtgWHA
	}
		const _returnValueJDpHGpa = await _HelpTyx6WTF.argumentDescription(_argumentYQxlVIZ)
		const _commandszX2RRW5 = {
		
	}
		const _returnValuegj9PmiW = 0.5859288230715798;
		const __hasImplicitHelpCommandOmDENoB = () => { return _returnValuegj9PmiW };
		const __helpCommandnameAndArgsE4xjf7 = {
		
	}
		const _returnValueUeuUHhM = true;
		const _createCommandaOAXxZI = () => { return _returnValueUeuUHhM };
		const _returnValuesUH7Lo1 = null;
		const __helpCommandDescriptionCGbjlB7 = () => { return _returnValuesUH7Lo1 };
		const _cmdiHsBlRY = {
			"commands": _commandszX2RRW5,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandOmDENoB,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsE4xjf7,
		"createCommand": _createCommandaOAXxZI,
		"_helpCommandDescription": __helpCommandDescriptionCGbjlB7
	}
		const _returnValueBhUUYVM = await _HelpTyx6WTF.visibleCommands(_cmdiHsBlRY)
	});

	it('test for Help', async () => {
		const _HelpnkF4I81 = new Help()
		const _optionsLWslr0C = {
		
	}
		const __hasHelpOptionKVPYD57 = -5.106106015083624;
		const __helpShortFlagJE89ryy = 7.510490809779856;
		const _returnValueGGGuqO7 = null;
		const __findOptionPNjkfk = () => { return _returnValueGGGuqO7 };
		const _arrayValueejdFQs = undefined;
		const _arrayValueKC0Mxdp = false;
		const __helpLongFlagrsRweU6 = [_arrayValueejdFQs, _arrayValueKC0Mxdp]
		const _createOptionB72KWLb = undefined;
		const _arrayValuevOoCx3z = {
		
	}
		const _arrayValuenVIFFa = null;
		const _arrayValueuLiOHWh = undefined;
		const _arrayValueLInCaF9 = "4VCz";
		const _arrayValuevIQCjW = undefined;
		const _arrayValueODbZgWi = false;
		const _returnValueRKZ2hGl = [_arrayValuevIQCjW, _arrayValueODbZgWi]
		const _arrayValueq9FCG9 = () => { return _returnValueRKZ2hGl };
		const _arrayValuekpQuhRa = [_arrayValueq9FCG9]
		const _arrayValueJ5Qy6wg = [_arrayValuekpQuhRa]
		const _arrayValueENZo0Jq = [_arrayValueLInCaF9, _arrayValueJ5Qy6wg]
		const _arrayValueTgxM45 = [_arrayValueuLiOHWh, _arrayValueENZo0Jq]
		const _arrayValuekhmCseO = "Fni0WjpHXwND989Y9PIr5scnguJTez8zEffA8VMzjGvNzOY7pkGW5YpUQg7WxoLmdTGT1agJobNnXCuKd8siZTC";
		const _arrayValueCfQNAa = undefined;
		const __helpDescriptionAwyqib1 = [_arrayValuevOoCx3z, _arrayValuenVIFFa, _arrayValueTgxM45, _arrayValuekhmCseO, _arrayValueCfQNAa]
		const __helpFlagsEw0ekVq = undefined;
		const _cmdFZDPpbg = {
			"options": _optionsLWslr0C,
		"_hasHelpOption": __hasHelpOptionKVPYD57,
		"_helpShortFlag": __helpShortFlagJE89ryy,
		"_findOption": __findOptionPNjkfk,
		"_helpLongFlag": __helpLongFlagrsRweU6,
		"createOption": _createOptionB72KWLb,
		"_helpDescription": __helpDescriptionAwyqib1,
		"_helpFlags": __helpFlagsEw0ekVq
	}
		const _returnValuenCZxq7M = await _HelpnkF4I81.visibleOptions(_cmdFZDPpbg)
		const _cmdbSRVh69 = true;
		const _returnValuee1hHXoq = await _HelpnkF4I81.subcommandTerm(_cmdbSRVh69)
		const _returnValueK3HbR16 = false;
		const _descriptionGbvIhC7 = () => { return _returnValueK3HbR16 };
		const _cmdBG6VDvI = {
			"description": _descriptionGbvIhC7
	}
		const _returnValueLX47A7N = await _HelpnkF4I81.commandDescription(_cmdBG6VDvI)
		const _returnValueyn5axk = null;
		const _matchzZYVfVa = () => { return _returnValueyn5axk };
		const _returnValueWOawgc = {
		
	}
		const _substro91aftS = () => { return _returnValueWOawgc };
		const _strxuSc02 = {
			"match": _matchzZYVfVa,
		"substr": _substro91aftS
	}
		const _widthixay8ix = -9.534869204255914;
		const _indentorlnIvJ = null;
		const _minColumnWidthW0OZNwr = 2.196163594387526;
		const _returnValueJGcjosr = await _HelpnkF4I81.wrap(_strxuSc02, _widthixay8ix, _indentorlnIvJ, _minColumnWidthW0OZNwr)
	});

	it('test for Help', async () => {
		const _HelpDYh6f40 = new Help()
		const _namew9Iy0dB = -6.8575256169841;
		const _argumentALd29Qj = {
			"name": _namew9Iy0dB
	}
		const _returnValueuFRTWXN = await _HelpDYh6f40.argumentTerm(_argumentALd29Qj)
		const _returnValuerwQ60yB = undefined;
		const _matcht8ECVlE = () => { return _returnValuerwQ60yB };
		const _returnValueNC5XHhW = null;
		const _substrSeBoI1U = () => { return _returnValueNC5XHhW };
		const _strdiauBDq = {
			"match": _matcht8ECVlE,
		"substr": _substrSeBoI1U
	}
		const _widthXwxhTEJ = 2.8602945836706013;
		const _indentFkqd7j = 7.531740799453907;
		const _minColumnWidthywu0RrU = -2.313710141864089;
		const _returnValueZ01Cbl9 = await _HelpDYh6f40.wrap(_strdiauBDq, _widthXwxhTEJ, _indentFkqd7j, _minColumnWidthywu0RrU)
		const __nameRTLWWzT = {
		
	}
		const __aliasesdkV8lzU = {
		
	}
		const _parentVyn7W53 = {
		
	}
		const _arrayValueGXMgaI7 = undefined;
		const _arrayValuebMJKOUl = false;
		const _arrayValueulEF7QL = false;
		const _arrayValueIUMiShg = -8.524050885448812;
		const _arrayValueOwkyLge = 2.421878878039095;
		const _returnValueAQlhDXp = false;
		const _arrayValueiAnrnsu = () => { return _returnValueAQlhDXp };
		const _returnValueggP6eRB = [_arrayValueulEF7QL, _arrayValueIUMiShg, _arrayValueOwkyLge, _arrayValueiAnrnsu]
		const _arrayValueungby6 = () => { return _returnValueggP6eRB };
		const _returnValuePxNSXZf = [_arrayValueGXMgaI7, _arrayValuebMJKOUl, _arrayValueungby6]
		const _usageMy9hEuy = () => { return _returnValuePxNSXZf };
		const _cmdtdW9d4S = {
			"_name": __nameRTLWWzT,
		"_aliases": __aliasesdkV8lzU,
		"parent": _parentVyn7W53,
		"usage": _usageMy9hEuy
	}
		const _returnValueGT7pfl = await _HelpDYh6f40.commandUsage(_cmdtdW9d4S)
	});

	it('test for Help', async () => {
		const _Helpl0pzybq = new Help()
		const __nameSBndZ96 = {
		
	}
		const __aliasespi9pSIv = {
		
	}
		const _parentn9gmlNB = true;
		const _returnValuehdTx4tB = undefined;
		const _usagePfnhhyU = () => { return _returnValuehdTx4tB };
		const _cmdEtWcVqK = {
			"_name": __nameSBndZ96,
		"_aliases": __aliasespi9pSIv,
		"parent": _parentn9gmlNB,
		"usage": _usagePfnhhyU
	}
		const _returnValue6anEPO = await _Helpl0pzybq.commandUsage(_cmdEtWcVqK)
		const __argsDescriptionPKNcDwP = {
		
	}
		const __argsWttFAk0 = {
		
	}
		const _cmdJisZYEI = {
			"_argsDescription": __argsDescriptionPKNcDwP,
		"_args": __argsWttFAk0
	}
		const _returnValue1SpgzN = await _Helpl0pzybq.visibleArguments(_cmdJisZYEI)
		const _arrayValueILRcrAM = undefined;
		const _arrayValuedDebU4Q = null;
		const _returnValueTSznSfm = true;
		const _arrayValueyGZ8Tz = () => { return _returnValueTSznSfm };
		const _returnValuehMCbIVC = [_arrayValueILRcrAM, _arrayValuedDebU4Q, _arrayValueyGZ8Tz]
		const _descriptionFWd3elt = () => { return _returnValuehMCbIVC };
		const _cmdDUcwCOf = {
			"description": _descriptionFWd3elt
	}
		const _returnValuegy4Nf3O = await _Helpl0pzybq.commandDescription(_cmdDUcwCOf)
		const _optionsshugLNS = {
		
	}
		const __hasHelpOptionZ5pSTkE = []
		const __helpShortFlagLlc33iV = "FwfIhRDg8Ex7bgB1L3yR8xep1aPeKpSGV0bLIp96EsgVsc";
		const _returnValuegIOu93q = "2lgnHCc6oqzebxCN4T2tyF74dDxZ4ic7Wc3jAtaWIT0Ipsy4uILOOX3fM7tv9SyzdfCf2xMX";
		const __findOptionSvM4B67 = () => { return _returnValuegIOu93q };
		const __helpLongFlago6ZCM69 = true;
		const _returnValueHcg6qkX = []
		const _createOptionbPP97GH = () => { return _returnValueHcg6qkX };
		const _arrayValueLaMYnaM = "Ofa3RFfEDmQov5RzvJtAE";
		const _arrayValuedsxzWPu = undefined;
		const _arrayValueUED52Y3 = 1.4505880432170812;
		const _arrayValueP5ifqUX = {
		
	}
		const _arrayValuejuaHLgL = undefined;
		const _arrayValuec6PZD1K = [_arrayValuejuaHLgL]
		const __helpDescriptionTh3aHRm = [_arrayValueLaMYnaM, _arrayValuedsxzWPu, _arrayValueUED52Y3, _arrayValueP5ifqUX, _arrayValuec6PZD1K]
		const __helpFlagslVcpD3 = "47l7hPKxRQdrV16S22Byt379ru5s0w";
		const _cmdOAaQBj3 = {
			"options": _optionsshugLNS,
		"_hasHelpOption": __hasHelpOptionZ5pSTkE,
		"_helpShortFlag": __helpShortFlagLlc33iV,
		"_findOption": __findOptionSvM4B67,
		"_helpLongFlag": __helpLongFlago6ZCM69,
		"createOption": _createOptionbPP97GH,
		"_helpDescription": __helpDescriptionTh3aHRm,
		"_helpFlags": __helpFlagslVcpD3
	}
		const _returnValuebYLak1V = await _Helpl0pzybq.visibleOptions(_cmdOAaQBj3)
		const _arrayValue0zBd1F = 2.344551850489381;
		const _flagsarebLa3 = [_arrayValue0zBd1F]
		const _optionKvSL7yA = {
			"flags": _flagsarebLa3
	}
		const _returnValuejjWMWAm = await _Helpl0pzybq.optionTerm(_optionKvSL7yA)
	});

	it('test for Help', async () => {
		const _HelpnzmF7W0 = new Help()
		const _returnValueWNbclY6 = undefined;
		const _descriptionwaL719i = () => { return _returnValueWNbclY6 };
		const _cmdktVRbWy = {
			"description": _descriptionwaL719i
	}
		const _returnValuemHdosYe = await _HelpnzmF7W0.commandDescription(_cmdktVRbWy)
		const _returnValueWDzUi0a = null;
		const _descriptionyTR7rj1 = () => { return _returnValueWDzUi0a };
		const _cmdcIpRYaC = {
			"description": _descriptionyTR7rj1
	}
		const _returnValuejQXbI6H = await _HelpnzmF7W0.commandDescription(_cmdcIpRYaC)
		const __argskjyWHWu = {
		
	}
		const __nameH8Ah4iL = 0.9399994372383347;
		const __aliasesUPHmkxK = {
		
	}
		const _optionsijLm5sq = {
		
	}
		const _cmdvyZiTk0 = {
			"_args": __argskjyWHWu,
		"_name": __nameH8Ah4iL,
		"_aliases": __aliasesUPHmkxK,
		"options": _optionsijLm5sq
	}
		const _returnValuebNp9aEE = await _HelpnzmF7W0.subcommandTerm(_cmdvyZiTk0)
	});

	it('test for Help', async () => {
		const _HelpHNx89Ls = new Help()
		const __argsDescriptionZcMWf3l = {
		
	}
		const __argsKIN0IFT = "S3";
		const _cmdIGkt6cp = {
			"_argsDescription": __argsDescriptionZcMWf3l,
		"_args": __argsKIN0IFT
	}
		const _returnValueYPB6Z7n = await _HelpHNx89Ls.visibleArguments(_cmdIGkt6cp)
		const _argChoicesuw9wWqx = {
		
	}
		const _defaultValuebU5dxlH = undefined;
		const _defaultValueDescriptionstrdrKc = "WAmJr1xx5rZx7SSM7xgLQTOpQEeLYAopUVPR8Rnha6lzeK9gbEDMw0wKUQiWFFhoMBrocydHLUi";
		const _descriptionynutKwF = "TYiUKzJuCtm5oMaY3f5JnBrShfDnpYspiOVdpzuF3LbdpWfs4lRnid6EX";
		const _argumentLCM1qZr = {
			"argChoices": _argChoicesuw9wWqx,
		"defaultValue": _defaultValuebU5dxlH,
		"defaultValueDescription": _defaultValueDescriptionstrdrKc,
		"description": _descriptionynutKwF
	}
		const _returnValueKjjaAdg = await _HelpHNx89Ls.argumentDescription(_argumentLCM1qZr)
		const _arrayValuep1lUBDk = "jTJfNdRwEXo4VPgysZxHt3gmfBwcnVc3LuUPm2zWnCfnEutw";
		const _arrayValueXyd3Mou = 4.968116297331251;
		const _cmdu6E6I4B = [_arrayValuep1lUBDk, _arrayValueXyd3Mou]
		const _returnValuedOLoYaF = "K";
		const _visibleOptionsIvs1o2u = () => { return _returnValuedOLoYaF };
		const _optionTermKugJcaB = -6.689959730431777;
		const _helperupVZzfk = {
			"visibleOptions": _visibleOptionsIvs1o2u,
		"optionTerm": _optionTermKugJcaB
	}
		const _returnValueO60qVo = await _HelpHNx89Ls.longestOptionTermLength(_cmdu6E6I4B, _helperupVZzfk)
		const _optionsFlOh57 = {
		
	}
		const __hasHelpOptionTECffwt = null;
		const __helpShortFlagNx9toLi = false;
		const _returnValueUtMa9VA = null;
		const __findOptionGff95tA = () => { return _returnValueUtMa9VA };
		const __helpLongFlagS6UUMCC = null;
		const _returnValueUCv52Xn = "PVrXWUwzImszMjegpBboyVPPu9sYkg3qPKHzUELReYWrKZxQqTFV";
		const _createOptioneSTw7p8 = () => { return _returnValueUCv52Xn };
		const __helpDescriptionV68f5xA = 1.3904295466605614;
		const __helpFlagsRIt96Tc = false;
		const _cmdC6nye79 = {
			"options": _optionsFlOh57,
		"_hasHelpOption": __hasHelpOptionTECffwt,
		"_helpShortFlag": __helpShortFlagNx9toLi,
		"_findOption": __findOptionGff95tA,
		"_helpLongFlag": __helpLongFlagS6UUMCC,
		"createOption": _createOptioneSTw7p8,
		"_helpDescription": __helpDescriptionV68f5xA,
		"_helpFlags": __helpFlagsRIt96Tc
	}
		const _returnValuew1LEhIn = await _HelpHNx89Ls.visibleOptions(_cmdC6nye79)
	});

	it('test for Help', async () => {
		const _Helps93zUHK = new Help()
		const _argChoicesrJDPRBS = {
		
	}
		const _negateU2YbScI = true;
		const _returnValueaoCneZj = 9.445020078429309;
		const _arrayValueASkwYk8 = () => { return _returnValueaoCneZj };
		const _arrayValueSWmNvxs = "ERe5x";
		const _arrayValueB84hVpC = -6.106220834253717;
		const _defaultValueVUSLrX3 = [_arrayValueASkwYk8, _arrayValueSWmNvxs, _arrayValueB84hVpC]
		const _defaultValueDescriptionXMQmvUo = 9.820047734245328;
		const _arrayValueORmUFh9 = undefined;
		const _arrayValuelGjpww3 = -6.316828044639921;
		const _arrayValueMHOnIN = false;
		const _envVarGQBXyvf = [_arrayValueORmUFh9, _arrayValuelGjpww3, _arrayValueMHOnIN]
		const _descriptionqhsHsa = undefined;
		const _optionZJx9t1K = {
			"argChoices": _argChoicesrJDPRBS,
		"negate": _negateU2YbScI,
		"defaultValue": _defaultValueVUSLrX3,
		"defaultValueDescription": _defaultValueDescriptionXMQmvUo,
		"envVar": _envVarGQBXyvf,
		"description": _descriptionqhsHsa
	}
		const _returnValueWNngbqD = await _Helps93zUHK.optionDescription(_optionZJx9t1K)
	});

	it('test for Help', async () => {
		const _HelpNeR5NCo = new Help()
		const _arrayValuePjk5QoH = 0.49744451355288;
		const _arrayValuepYgRAK = undefined;
		const _returnValuerurlLmS = []
		const _arrayValueJSUE88R = () => { return _returnValuerurlLmS };
		const _arrayValueKBZnhOD = true;
		const _arrayValueQaJjbHx = [_arrayValueJSUE88R, _arrayValueKBZnhOD]
		const _cmd4j4bKP = [_arrayValuePjk5QoH, _arrayValuepYgRAK, _arrayValueQaJjbHx]
		const _sortSubcommandsQdqb31 = true;
		const _returnValueONsnpjW = "UlciOVtldTkvubgLn7Zd8VorAx4DCN6WTtWGzPYmYqjHkJ4iBagc6xHUibrtXkDptP";
		const _subcommandTermp0JjN4I = () => { return _returnValueONsnpjW };
		const _helperq2siaUY = {
			"sortSubcommands": _sortSubcommandsQdqb31,
		"subcommandTerm": _subcommandTermp0JjN4I
	}
		const _returnValuep96F9GW = await _HelpNeR5NCo.formatHelp(_cmd4j4bKP, _helperq2siaUY)
		const _argChoicesj13BWx = null;
		const _negateuNltji = undefined;
		const _defaultValueGcsbW8U = false;
		const _defaultValueDescriptionqhOYdbN = -0.2508394911744869;
		const _envVarva9djb6 = undefined;
		const _descriptionNLj2LX1 = "TBYX6aftsBQvilpCbhXlGsnV58xeqPByFP5VB1vHrJ0qBNzQoBdC";
		const _optionhy0Glck = {
			"argChoices": _argChoicesj13BWx,
		"negate": _negateuNltji,
		"defaultValue": _defaultValueGcsbW8U,
		"defaultValueDescription": _defaultValueDescriptionqhOYdbN,
		"envVar": _envVarva9djb6,
		"description": _descriptionNLj2LX1
	}
		const _returnValueqOUTJns = await _HelpNeR5NCo.optionDescription(_optionhy0Glck)
		const __name2ZSfcO = {
		
	}
		const __aliasesE6PjJlg = {
		
	}
		const _parenttclkXW7 = {
		
	}
		const _arrayValuedbSdqO = undefined;
		const _arrayValuejrkAc87 = 7.082964131644239;
		const _arrayValuetdp829W = "WW3NvfZ98Yqdy4fHoLRj9MB9A4TJnXhxFSwsQJc7SpXibzQ4K7xbRDwszRhqIeqvpBkhg6pyXMAMrZLCKNFEPdoDlax7i5";
		const _returnValueKltSNjc = [_arrayValuejrkAc87, _arrayValuetdp829W]
		const _arrayValueY3KCiQA = () => { return _returnValueKltSNjc };
		const _arrayValueMGgs4cP = -1.7788332223279557;
		const _arrayValuevnb0Q9y = "z16go85CEao2wEULK8ddilpx6b38F8gPyy0KKN96St6aKrC1iKUBgybgUh73";
		const _arrayValueWuooIHX = [_arrayValuedbSdqO, _arrayValueY3KCiQA, _arrayValueMGgs4cP, _arrayValuevnb0Q9y]
		const _returnValueDaWgqQE = [_arrayValueWuooIHX]
		const _usage3EkUam = () => { return _returnValueDaWgqQE };
		const _cmdMEfG2yf = {
			"_name": __name2ZSfcO,
		"_aliases": __aliasesE6PjJlg,
		"parent": _parenttclkXW7,
		"usage": _usage3EkUam
	}
		const _returnValueEslWc1K = await _HelpNeR5NCo.commandUsage(_cmdMEfG2yf)
		const _cmd2p2PS4 = {
		
	}
		const _returnValueLb2VEen = undefined;
		const _visibleArgumentsQInKPB = () => { return _returnValueLb2VEen };
		const _returnValuexfo5Kdk = true;
		const _returnValueKTJOzv = () => { return _returnValuexfo5Kdk };
		const _argumentTermkN4OjGM = () => { return _returnValueKTJOzv };
		const _helperSBp8Thc = {
			"visibleArguments": _visibleArgumentsQInKPB,
		"argumentTerm": _argumentTermkN4OjGM
	}
		const _returnValuecQS5yKO = await _HelpNeR5NCo.longestArgumentTermLength(_cmd2p2PS4, _helperSBp8Thc)
		const _commandsPwGJCE1 = {
		
	}
		const _returnValuePUKnPm = undefined;
		const __hasImplicitHelpCommandyZvR7X = () => { return _returnValuePUKnPm };
		const __helpCommandnameAndArgsW7l2v6Z = {
		
	}
		const _returnValuehI3cQgg = {
		
	}
		const _createCommandUwwO8U = () => { return _returnValuehI3cQgg };
		const __helpCommandDescriptiontK9z2yL = null;
		const _cmdfKZvfHM = {
			"commands": _commandsPwGJCE1,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandyZvR7X,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsW7l2v6Z,
		"createCommand": _createCommandUwwO8U,
		"_helpCommandDescription": __helpCommandDescriptiontK9z2yL
	}
		const _returnValuem7X3Nzg = await _HelpNeR5NCo.visibleCommands(_cmdfKZvfHM)
	});

	it('test for Help', async () => {
		const _HelpCFB6NaT = new Help()
		const _flagsfpDQaQ7 = undefined;
		const _optionfoU1uE = {
			"flags": _flagsfpDQaQ7
	}
		const _returnValueDqyO43R = await _HelpCFB6NaT.optionTerm(_optionfoU1uE)
	});

	it('test for Help', async () => {
		const _HelpjxWm5SX = new Help()
		const _cmdz1kut35 = {
		
	}
		const _helperQBMd3yG = undefined;
		const _returnValuemQwrurQ = await _HelpjxWm5SX.longestArgumentTermLength(_cmdz1kut35, _helperQBMd3yG)
		const _arrayValueFggy8MO = undefined;
		const _arrayValueq0hT2Wc = 5.5974143175872335;
		const _arrayValueOhOZlQQ = undefined;
		const _arrayValuedJV8TK7 = undefined;
		const _arrayValueVIgdAUH = "4zvhGCF1ZPQby9vXCS83XQqEc3nqnBJqxMVvVFGsOVbHgrvKma";
		const _arrayValuegCEWgO = [_arrayValueVIgdAUH]
		const _returnValueaHlYXec = [_arrayValueFggy8MO, _arrayValueq0hT2Wc, _arrayValueOhOZlQQ, _arrayValuedJV8TK7, _arrayValuegCEWgO]
		const _descriptionh4myVLR = () => { return _returnValueaHlYXec };
		const _cmdqxXxsFy = {
			"description": _descriptionh4myVLR
	}
		const _returnValueULnqglk = await _HelpjxWm5SX.subcommandDescription(_cmdqxXxsFy)
		const _optionsHl5YGpr = {
		
	}
		const __hasHelpOptionUOgShec = -3.777017477562933;
		const __helpShortFlag1ObjLr = undefined;
		const _returnValueprx8O8N = "LajztC9H4hz7B4RvFmNwvvjlKUgVybnpQ7ssAM4LHCVMGSQJ6InLNivoLNyceCo9jUcjddRXkiQ8LTwx6JDt3UTcGsxf";
		const __findOptionqpGuv7Q = () => { return _returnValueprx8O8N };
		const _arrayValueJWR6Zk5 = -2.5241623054518927;
		const _arrayValueFuCyLeU = -8.261316455531004;
		const _arrayValuee0M6com = undefined;
		const _returnValuejDnlr69 = [_arrayValuee0M6com]
		const _arrayValuevahntJJ = () => { return _returnValuejDnlr69 };
		const __helpLongFlagujZOtRQ = [_arrayValueJWR6Zk5, _arrayValueFuCyLeU, _arrayValuevahntJJ]
		const _returnValueyFHqb02 = -8.2089001284455;
		const _createOptionkz6GWg6 = () => { return _returnValueyFHqb02 };
		const _returnValueJnX0sI = null;
		const __helpDescriptionMk99w4H = () => { return _returnValueJnX0sI };
		const __helpFlagscy2utg = false;
		const _cmdCntVjeo = {
			"options": _optionsHl5YGpr,
		"_hasHelpOption": __hasHelpOptionUOgShec,
		"_helpShortFlag": __helpShortFlag1ObjLr,
		"_findOption": __findOptionqpGuv7Q,
		"_helpLongFlag": __helpLongFlagujZOtRQ,
		"createOption": _createOptionkz6GWg6,
		"_helpDescription": __helpDescriptionMk99w4H,
		"_helpFlags": __helpFlagscy2utg
	}
		const _returnValueOwvJoT = await _HelpjxWm5SX.visibleOptions(_cmdCntVjeo)
		const _cmd1KGeTL = {
		
	}
		const _returnValueGnnd8hf = "qzUN7CNVfy3oKMDrbAgwO7E0quQQ7H8dsbs6e";
		const _visibleOptionsZHv9q6 = () => { return _returnValueGnnd8hf };
		const _optionTermcoCHDpZ = undefined;
		const _helpernGer6U = {
			"visibleOptions": _visibleOptionsZHv9q6,
		"optionTerm": _optionTermcoCHDpZ
	}
		const _returnValuedz28Vve = await _HelpjxWm5SX.longestOptionTermLength(_cmd1KGeTL, _helpernGer6U)
		const _cmdfPyx4uQ = null;
		const _sortSubcommandstsmSkHs = null;
		const _returnValueybLwSm = undefined;
		const _subcommandTermlxMkGZP = () => { return _returnValueybLwSm };
		const _helperI690Tvs = {
			"sortSubcommands": _sortSubcommandstsmSkHs,
		"subcommandTerm": _subcommandTermlxMkGZP
	}
		const _returnValuembaaeyu = await _HelpjxWm5SX.longestSubcommandTermLength(_cmdfPyx4uQ, _helperI690Tvs)
	});

	it('test for Help', async () => {
		const _HelpLbZS2Wq = new Help()
		const _flagsTzk2XL = {
		
	}
		const _optionOmOoOip = {
			"flags": _flagsTzk2XL
	}
		const _returnValueW4W7Nhy = await _HelpLbZS2Wq.optionTerm(_optionOmOoOip)
		const _returnValueUtq9hnh = 9.0978811090242;
		const _matchbML4cbY = () => { return _returnValueUtq9hnh };
		const _returnValueiqrDBc = true;
		const _substrvxQjvlK = () => { return _returnValueiqrDBc };
		const _strxitdmml = {
			"match": _matchbML4cbY,
		"substr": _substrvxQjvlK
	}
		const _widthz1zaKiW = 7.884953474801371;
		const _indentwrKCrXz = 0.058072682047722424;
		const _minColumnWidthcFdRGHa = -0.15386776343673958;
		const _returnValuemYQ72dk = await _HelpLbZS2Wq.wrap(_strxitdmml, _widthz1zaKiW, _indentwrKCrXz, _minColumnWidthcFdRGHa)
	});

	it('test for Help', async () => {
		const _HelpXjIsDhR = new Help()
		const _cmdpkHXuFk = {
		
	}
		const _sortSubcommandsFTDCp6 = {
		
	}
		const _subcommandTermRKvVFma = true;
		const _helperdUfMmM = {
			"sortSubcommands": _sortSubcommandsFTDCp6,
		"subcommandTerm": _subcommandTermRKvVFma
	}
		const _returnValuearBlvI5 = await _HelpXjIsDhR.longestSubcommandTermLength(_cmdpkHXuFk, _helperdUfMmM)
		const _returnValuehecQHQ7 = undefined;
		const _descriptionyMgpOU4 = () => { return _returnValuehecQHQ7 };
		const _cmdbHnXZcP = {
			"description": _descriptionyMgpOU4
	}
		const _returnValueVDsNgIB = await _HelpXjIsDhR.subcommandDescription(_cmdbHnXZcP)
	});

	it('test for Help', async () => {
		const _HelpTg4fmwa = new Help()
		const _cmdP7BmWZ3 = {
		
	}
		const _returnValueVbOAEXT = 4.55823913407222;
		const _visibleOptionskQBHelU = () => { return _returnValueVbOAEXT };
		const _optionTermIboMPPP = 7.694008746858479;
		const _helperVvqHSbN = {
			"visibleOptions": _visibleOptionskQBHelU,
		"optionTerm": _optionTermIboMPPP
	}
		const _returnValueTFPr1Eq = await _HelpTg4fmwa.longestOptionTermLength(_cmdP7BmWZ3, _helperVvqHSbN)
		const __argsAX6fXYh = {
		
	}
		const __nameg2xvJYM = -7.095336790703257;
		const __aliasesW1Bfcm = {
		
	}
		const _optionsijhvkmG = {
		
	}
		const _cmdD5GRA0e = {
			"_args": __argsAX6fXYh,
		"_name": __nameg2xvJYM,
		"_aliases": __aliasesW1Bfcm,
		"options": _optionsijhvkmG
	}
		const _returnValueRZGIYaC = await _HelpTg4fmwa.subcommandTerm(_cmdD5GRA0e)
		const _arrayValueSGPLGts = "NNplqXJ1NKIJBJkbFLYpX7VfJMdKpSJVBAKkc7";
		const _arrayValueu0IwIhJ = false;
		const _cmdfe4mPNk = [_arrayValueSGPLGts, _arrayValueu0IwIhJ]
		const _returnValueWlC3DOU = await _HelpTg4fmwa.subcommandTerm(_cmdfe4mPNk)
	});

	it('test for Help', async () => {
		const _HelpKyn3lzr = new Help()
		const _argChoicesM3Hp4Ga = {
		
	}
		const _negateXFYYJHV = undefined;
		const _defaultValueTk9FDGh = undefined;
		const _defaultValueDescriptionpEuORtj = true;
		const _envVarty7GY2f = undefined;
		const _descriptionHbmDtvg = null;
		const _optionnyhPh8O = {
			"argChoices": _argChoicesM3Hp4Ga,
		"negate": _negateXFYYJHV,
		"defaultValue": _defaultValueTk9FDGh,
		"defaultValueDescription": _defaultValueDescriptionpEuORtj,
		"envVar": _envVarty7GY2f,
		"description": _descriptionHbmDtvg
	}
		const _returnValueMjKLHJo = await _HelpKyn3lzr.optionDescription(_optionnyhPh8O)
		const _cmdD9CsPyX = undefined;
		const _returnValueeIbFnMd = undefined;
		const _visibleOptionsLTXQ2sM = () => { return _returnValueeIbFnMd };
		const _returnValuep7jhCOQ = undefined;
		const _optionTermRMPUbwQ = () => { return _returnValuep7jhCOQ };
		const _helperr1nCU1z = {
			"visibleOptions": _visibleOptionsLTXQ2sM,
		"optionTerm": _optionTermRMPUbwQ
	}
		const _returnValuerMlKmZ5 = await _HelpKyn3lzr.longestOptionTermLength(_cmdD9CsPyX, _helperr1nCU1z)
	});

	it('test for Help', async () => {
		const _Help2N0fX4 = new Help()
		const _cmdXLZDMc2 = 6.9412502330230765;
		const _arrayValueo0MasRI = "28SBGcXXhBjPzoat2PhOajv7ISVvLkiEFuQ58IHDiAoDyaJUEl7GFjfTQBiB9pFhrA";
		const _arrayValuehtQ6nUw = {
		
	}
		const _helperQv2nSbF = [_arrayValueo0MasRI, _arrayValuehtQ6nUw]
		const _returnValuegIyFjQV = await _Help2N0fX4.padWidth(_cmdXLZDMc2, _helperQv2nSbF)
		const _arrayValuekF6e84Z = "sembUqogaLkoMbKQlN1Fe4Rusl1xmcNrlfdR6Bylj5ilA7RCTlvBHcvPh6J";
		const _arrayValueBwKJZ6f = undefined;
		const _arrayValueZ8Dn68e = "YEYitJCVl147Tb70LJK4PiA1Hvfq2sUVVWxi";
		const _arrayValuepGQDkG2 = "1c8fcYQUGWf7HHdogSxhXnQPwOBlCnFz2aYebtlhrJ9bjIwE8sjargvR";
		const _arrayValueGykmZwc = false;
		const _arrayValueTIN0hSq = null;
		const _arrayValuede1SRZ = [_arrayValueZ8Dn68e, _arrayValuepGQDkG2, _arrayValueGykmZwc, _arrayValueTIN0hSq]
		const _arrayValueGjAoc76 = null;
		const _arrayValueT9LDfb = null;
		const _arrayValues8mTz9Q = [_arrayValuede1SRZ, _arrayValueGjAoc76, _arrayValueT9LDfb]
		const _arrayValueFUAqywC = -6.664791956894257;
		const _cmdbIxEy9M = [_arrayValuekF6e84Z, _arrayValueBwKJZ6f, _arrayValues8mTz9Q, _arrayValueFUAqywC]
		const _returnValueG2dHHj = await _Help2N0fX4.subcommandTerm(_cmdbIxEy9M)
	});

	it('test for Help', async () => {
		const _HelpT2qzp5L = new Help()
		const _arrayValueui5QZ80 = 0.4980980047643655;
		const _arrayValuezMs6HA = true;
		const _arrayValueTg3KMj5 = [_arrayValueui5QZ80, _arrayValuezMs6HA]
		const _arrayValueL36FEw1 = -9.813472307521373;
		const _arrayValuezURvQmx = {
		
	}
		const _optionEgcmUK6 = [_arrayValueTg3KMj5, _arrayValueL36FEw1, _arrayValuezURvQmx]
		const _returnValuexU5iTfj = await _HelpT2qzp5L.optionDescription(_optionEgcmUK6)
		const _cmdMPN5huW = undefined;
		const _arrayValuegmyW1b4 = null;
		const _helperMbKz0Ye = [_arrayValuegmyW1b4]
		const _returnValueOTlXyx = await _HelpT2qzp5L.longestOptionTermLength(_cmdMPN5huW, _helperMbKz0Ye)
	});

	it('test for Help', async () => {
		const _HelpOAQCgIn = new Help()
		const _arrayValueTsRxZ5d = undefined;
		const _arrayValuezQkJOtG = undefined;
		const _cmdXiIbnXk = [_arrayValueTsRxZ5d, _arrayValuezQkJOtG]
		const _returnValuebbRnvCl = await _HelpOAQCgIn.subcommandDescription(_cmdXiIbnXk)
		const _returnValueQy8ZjmZ = true;
		const _arrayValuejLtl0kY = () => { return _returnValueQy8ZjmZ };
		const _arrayValuemagSXje = null;
		const _cmdC6hfi0P = [_arrayValuejLtl0kY, _arrayValuemagSXje]
		const _returnValueK4a0cnh = await _HelpOAQCgIn.visibleOptions(_cmdC6hfi0P)
	});

	it('test for Help', async () => {
		const _HelpWooQwSY = new Help()
		const _argChoicesyfTOilP = {
		
	}
		const _defaultValueFDgLDLG = undefined;
		const _defaultValueDescriptionuQSXwCH = undefined;
		const _descriptionZYRyxYb = false;
		const _argumentePkyLJ = {
			"argChoices": _argChoicesyfTOilP,
		"defaultValue": _defaultValueFDgLDLG,
		"defaultValueDescription": _defaultValueDescriptionuQSXwCH,
		"description": _descriptionZYRyxYb
	}
		const _returnValuenz7odJY = await _HelpWooQwSY.argumentDescription(_argumentePkyLJ)
	});

	it('test for Help', async () => {
		const _HelpYbcNwRx = new Help()
		const _argChoices34HHOm = null;
		const _defaultValueUv5kFXI = undefined;
		const _defaultValueDescriptionrXdvtW6 = -1.5966710424520443;
		const _descriptionhd7flX8 = "6NMDHljB4bUGFW8Dm2LFxgBdf5qD6IOfrwKv1GUCrsm0l1N0U";
		const _argumentoC9ykR = {
			"argChoices": _argChoices34HHOm,
		"defaultValue": _defaultValueUv5kFXI,
		"defaultValueDescription": _defaultValueDescriptionrXdvtW6,
		"description": _descriptionhd7flX8
	}
		const _returnValuegoSOjEE = await _HelpYbcNwRx.argumentDescription(_argumentoC9ykR)
	});

	it('test for Help', async () => {
		const _HelpPOjssU0 = new Help()
		const _returnValueUjtwVSJ = undefined;
		const _matchfpmZSzc = () => { return _returnValueUjtwVSJ };
		const _returnValueOgWfV0p = "ZYc3oZbI1yC70LbC2sPwzXBQ19EgEwUjCbJnJ4kNaqdELnpKQAzQIDWupgi2PWPNnBVZxBbEllkkzQMbpQK";
		const _substrjlUsXuh = () => { return _returnValueOgWfV0p };
		const _strpAMHIRT = {
			"match": _matchfpmZSzc,
		"substr": _substrjlUsXuh
	}
		const _widthjUlviFT = -0.18488264737659676;
		const _indentVIeTUtp = 1.5189859785308073;
		const _minColumnWidthPYcYj2j = -3.0426450637568445;
		const _returnValueYuokQjz = await _HelpPOjssU0.wrap(_strpAMHIRT, _widthjUlviFT, _indentVIeTUtp, _minColumnWidthPYcYj2j)
		const _arrayValue72MNwe = null;
		const _arrayValueXqVKw3u = null;
		const _cmdyav3MgV = [_arrayValue72MNwe, _arrayValueXqVKw3u]
		const _returnValueFVWToi = true;
		const _helpercePGe6F = () => { return _returnValueFVWToi };
		const _returnValuepC5ZfDw = await _HelpPOjssU0.padWidth(_cmdyav3MgV, _helpercePGe6F)
		const _cmdmPl0qD8 = false;
		const _longestOptionTermLengthu7KspRJ = false;
		const _returnValueXWrFZL = true;
		const _longestSubcommandTermLengthPJElITz = () => { return _returnValueXWrFZL };
		const _returnValuemf5eB6m = null;
		const _longestArgumentTermLengthcAUvhJK = () => { return _returnValuemf5eB6m };
		const _helperydns6dY = {
			"longestOptionTermLength": _longestOptionTermLengthu7KspRJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPJElITz,
		"longestArgumentTermLength": _longestArgumentTermLengthcAUvhJK
	}
		const _returnValuehUAMnsK = await _HelpPOjssU0.padWidth(_cmdmPl0qD8, _helperydns6dY)
	});

	it('test for Help', async () => {
		const _HelpKO6nXsR = new Help()
		const _cmdrt2HMO = undefined;
		const _helperAll37e7 = new Help()
		const _strqZRuOvM = "mrKsbe55VszA145p2lOqMqGPC1";
		const _widthADHUpqH = -7.5932284537801475;
		const _indentw2IL73J = -7.690763679731975;
		const _minColumnWidthYPgviBd = 0.4323925062280445;
		const _returnValueZFWTPwy = await _helperAll37e7.wrap(_strqZRuOvM, _widthADHUpqH, _indentw2IL73J, _minColumnWidthYPgviBd)
		const _optionBOOS4IB = undefined;
		const _returnValueRyzhBM = await _helperAll37e7.optionDescription(_optionBOOS4IB)
		const _returnValueru86mNS = 2.7129176252072167;
		const _cmduhGK4j = () => { return _returnValueru86mNS };
		const _returnValuef96ttW = await _helperAll37e7.visibleOptions(_cmduhGK4j)
		const _returnValueLbJ6MVo = await _HelpKO6nXsR.longestArgumentTermLength(_cmdrt2HMO, _helperAll37e7)
		const _cmdjNpiS9g = "HjVBNV5";
		const _returnValueZIeiOsG = await _HelpKO6nXsR.visibleArguments(_cmdjNpiS9g)
	});

	it('test for Help', async () => {
		const _HelpsMCEnmW = new Help()
		const _nameoshB5Ki = 0.8988354261671994;
		const _cmdLtm3Um = new Command(_nameoshB5Ki)
		const _subcommandtorXyWC = null;
		const _argsEUrgXcz = 0.8408326395746357;
		const _returnValuede1hX8 = await _cmdLtm3Um._executeSubCommand(_subcommandtorXyWC, _argsEUrgXcz)
		const _returnValueDyY81lZ = await _HelpsMCEnmW.subcommandTerm(_cmdLtm3Um)
		const _returnValueyvHc9Gt = 6.176585148722339;
		const _cmdu94oOlv = () => { return _returnValueyvHc9Gt };
		const _returnValueG6lCgCq = await _HelpsMCEnmW.commandUsage(_cmdu94oOlv)
		const _returnValueeRrmY95 = -5.552042239785712;
		const _cmdba1RT75 = () => { return _returnValueeRrmY95 };
		const _returnValueLMyblTq = await _HelpsMCEnmW.commandUsage(_cmdba1RT75)
	});

	it('test for Help', async () => {
		const _HelpEIf0M8d = new Help()
		const _flagsYsMntQH = "uSsGVxcbBfDcAXWpKZchVSJCg2GK9QqEooyeKE";
		const _descriptionS6ESUr7 = undefined;
		const _cmdZSagkD9 = new Option(_flagsYsMntQH, _descriptionS6ESUr7)
		const _returnValueCbix9ll = await _cmdZSagkD9.attributeName()
		const _returnValueGhNq5p7 = await _cmdZSagkD9.name()
		const _fntXN2qOK = undefined;
		const _returnValueTZGUEVJ = await _cmdZSagkD9.argParser(_fntXN2qOK)
		const _returnValueZ3Etg06 = await _HelpEIf0M8d.commandDescription(_cmdZSagkD9)
		const _returnValueu0Va6AD = true;
		const _optionypJ7s88 = () => { return _returnValueu0Va6AD };
		const _returnValuetrxIjNs = await _HelpEIf0M8d.optionDescription(_optionypJ7s88)
		const _arrayValuep8k6Cmr = -7.269767819770124;
		const _arrayValueVx4GUq7 = null;
		const _cmdp4GPj16 = [_arrayValuep8k6Cmr, _arrayValueVx4GUq7]
		const _arrayValueb1WuxlJ = undefined;
		const _arrayValueqEoxFI = [_arrayValueb1WuxlJ]
		const _arrayValueRyMZKH2 = null;
		const _returnValueoXhaYw = false;
		const _arrayValueRN0smdk = () => { return _returnValueoXhaYw };
		const _helpergpO0QSX = [_arrayValueqEoxFI, _arrayValueRyMZKH2, _arrayValueRN0smdk]
		const _returnValueetVmnWt = await _HelpEIf0M8d.longestSubcommandTermLength(_cmdp4GPj16, _helpergpO0QSX)
		const _returnValuekXYipnJ = "s4JmmhdYJzTnM8SWL66OwMi1U";
		const _argumentY503A5O = () => { return _returnValuekXYipnJ };
		const _returnValueASzfRwD = await _HelpEIf0M8d.argumentTerm(_argumentY503A5O)
	});

	it('test for Help', async () => {
		const _Helpk6RZ7UI = new Help()
		const _arrayValueJM8zhAI = false;
		const _nameKzjgpa1 = [_arrayValueJM8zhAI]
		const _cmdJWTVexE = new Command(_nameKzjgpa1)
		const _argJHYqWbY = undefined;
		const _returnValueqji5oxY = await _cmdJWTVexE._findOption(_argJHYqWbY)
		const _erroreaD0srm = false;
		const _returnValuesgX1Cwm = null;
		const _commandhq0YlZ = () => { return _returnValuesgX1Cwm };
		const _contextOptionsMLmZ4mp = {
			"error": _erroreaD0srm,
		"command": _commandhq0YlZ
	}
		const _returnValueBth76oG = await _cmdJWTVexE._getHelpContext(_contextOptionsMLmZ4mp)
		const _returnValuezweB0YZ = await _cmdJWTVexE._parseOptionsEnv()
		const _returnValueyjtpjV1 = await _Helpk6RZ7UI.visibleOptions(_cmdJWTVexE)
		const _messagevCnnLP6 = "Ys19gquXVyH7qyK7edFwSYP3G";
		const _argumentxtw7AGS = new InvalidArgumentError(_messagevCnnLP6)
		const _returnValueN6uRHB0 = await _Helpk6RZ7UI.argumentTerm(_argumentxtw7AGS)
		const _flagsEKlFyf = undefined;
		const _optionEz0pMO = {
			"flags": _flagsEKlFyf
	}
		const _returnValueBKoeCCQ = await _Helpk6RZ7UI.optionTerm(_optionEz0pMO)
	});

	it('test for Help', async () => {
		const _HelpljMqMB = new Help()
		const _flagsKhATS94 = "ibNFPTHFdcj41";
		const _descriptionlImDqly = {
		
	}
		const _argumentVqLXEvt = new Option(_flagsKhATS94, _descriptionlImDqly)
		const _returnValueVYrjpxz = await _argumentVqLXEvt.attributeName()
		const _nameJn3oZeY = {
		
	}
		const _returnValueGsOTh0V = await _argumentVqLXEvt.env(_nameJn3oZeY)
		const _returnValueR98HTa5 = await _argumentVqLXEvt.attributeName()
		const _nameiyZrKg8 = {
		
	}
		const _returnValueOBE90Kj = await _argumentVqLXEvt.env(_nameiyZrKg8)
		const _returnValueIEaw1p8 = await _HelpljMqMB.argumentTerm(_argumentVqLXEvt)
		const _namewt0edjK = {
		
	}
		const _cmdkmMbVAs = new Command(_namewt0edjK)
		const _flagsZpRqoe8 = false;
		const _arrayValueRl5a2lf = undefined;
		const _arrayValuejpdiuxp = "KGGhOVkl68izyJ79rneloxM85CPBvlcMck3yvgRyn";
		const _descriptionirGPfy0 = [_arrayValueRl5a2lf, _arrayValuejpdiuxp]
		const _returnValuekWbCUD0 = await _cmdkmMbVAs.helpOption(_flagsZpRqoe8, _descriptionirGPfy0)
		const _returnValueZOzjwBn = await _HelpljMqMB.visibleOptions(_cmdkmMbVAs)
		const _cmdqIBsH9p = "xv1dtsPVHw191np7JJHg3CPqp7kxNLvBwtzup5MOPgedrYcUKBL1wW5PatnqsHMKQToKX1DnSs4JnFFFss1gCCQC8oem329";
		const _returnValueMw2I5m9 = await _HelpljMqMB.commandUsage(_cmdqIBsH9p)
		const _arrayValuebIYujX8 = false;
		const _arrayValueN266P5V = undefined;
		const _cmdsCoa3Wb = [_arrayValuebIYujX8, _arrayValueN266P5V]
		const _returnValuedIJH13d = await _HelpljMqMB.subcommandTerm(_cmdsCoa3Wb)
		const _returnValueie7QqJt = 4.048113052424963;
		const _arrayValueWaVzfjA = () => { return _returnValueie7QqJt };
		const _arrayValueUyew4AF = undefined;
		const _optionvcbNrAJ = [_arrayValueWaVzfjA, _arrayValueUyew4AF]
		const _returnValueuN3X71h = await _HelpljMqMB.optionTerm(_optionvcbNrAJ)
	});

	it('test for Help', async () => {
		const _Helpj4Vb1ie = new Help()
		const _flagsoJOiOtn = "MPJUJxGkFheFwXmwndUm2xAu4htGc8CgUkjfe7Q3bE7nSdQ9zI0DgMS8BXY6InGqWa5UpVd900cMd4KlOcm";
		const _returnValuefVtVLc4 = undefined;
		const _descriptionOsSl6oF = () => { return _returnValuefVtVLc4 };
		const _argumentTTufeb5 = new Option(_flagsoJOiOtn, _descriptionOsSl6oF)
		const _valued1X6a6H = "5r2pHA2FGhVTJ5mmwQaNN9ZOWGAv7WIdoGDm561rmAQdxmoCFqUjO";
		const _description3mS4Ay = {
		
	}
		const _returnValuebz9zCFp = await _argumentTTufeb5.default(_valued1X6a6H, _description3mS4Ay)
		const _returnValuebB9XdO9 = await _argumentTTufeb5.attributeName()
		const _returnValuerT4rjc = await _argumentTTufeb5.attributeName()
		const _argkgMvuef = {
		
	}
		const _returnValueUw54AS = await _argumentTTufeb5.is(_argkgMvuef)
		const _returnValuerTtxQay = await _argumentTTufeb5.name()
		const _returnValueZwSo1Ng = await _Helpj4Vb1ie.argumentDescription(_argumentTTufeb5)
		const _cmdenhY9w = "lApahA7Go1v5Vf3ql1GhjDKNIbp1SV55Y2yD6g1xYJ2TajpmPuwDOQOQTKVZGERMhbaxC0ovUFWUGoBlBRHmr8UAY8FBqh8cy";
		const _returnValuedpQdvl6 = await _Helpj4Vb1ie.commandUsage(_cmdenhY9w)
		const _arrayValueVp6dBql = true;
		const _arrayValuexQGDx4L = 5.528783378206088;
		const _arrayValueD5cwTO = -5.87401268811454;
		const _namezwGU936 = [_arrayValueVp6dBql, _arrayValuexQGDx4L, _arrayValueD5cwTO]
		const _cmdcMPi5wH = new Command(_namezwGU936)
		const _argvp88Eies = []
		const _returnValueZusvU2Y = await _cmdcMPi5wH.parseOptions(_argvp88Eies)
		const _allowUnknownVz0NtJR = false;
		const _returnValuezcDwtsl = await _cmdcMPi5wH.allowUnknownOption(_allowUnknownVz0NtJR)
		const _nameM97ayu7 = -8.390109754098432;
		const _returnValueNl3pWU3 = await _cmdcMPi5wH._findCommand(_nameM97ayu7)
		const _returnValueh3DXMOl = await _Helpj4Vb1ie.commandDescription(_cmdcMPi5wH)
		const _arrayValueaLRPTSM = 8.135998247773632;
		const _optionVm5oEGl = [_arrayValueaLRPTSM]
		const _returnValuetIJNHLb = await _Helpj4Vb1ie.optionTerm(_optionVm5oEGl)
		const _namera5LBS6 = null;
		const _cmdFGeKXqg = new Command(_namera5LBS6)
		const _arrayValueF1FSJ3H = -7.693718050453212;
		const _arrayValueLakw3Fn = false;
		const _arrayValueA79SWmE = [_arrayValueF1FSJ3H, _arrayValueLakw3Fn]
		const _arrayValuezv3i46k = true;
		const _commandNameBzdie63 = [_arrayValueA79SWmE, _arrayValuezv3i46k]
		const _concatbrZd8dQ = "0pL5Fo36rLNwpoiqdQqFEkyvOLkE";
		const _operandsH3kuis = {
			"concat": _concatbrZd8dQ
	}
		const _returnValueubx3xk = true;
		const _unknown50q4AW = () => { return _returnValueubx3xk };
		const _returnValueesMMy4J = await _cmdFGeKXqg._dispatchSubcommand(_commandNameBzdie63, _operandsH3kuis, _unknown50q4AW)
		const _displaySuggestionGP9uUgY = true;
		const _returnValuemR3Z3Sc = await _cmdFGeKXqg.showSuggestionAfterError(_displaySuggestionGP9uUgY)
		const _namedjsVtIm = "vl6hLw2bJ";
		const _returnValueMeJtxva = await _cmdFGeKXqg.missingArgument(_namedjsVtIm)
		const _strYFkOJ0l = undefined;
		const _returnValue13cYvE = await _cmdFGeKXqg.usage(_strYFkOJ0l)
		const _allowUnknownY8NLdVZ = true;
		const _returnValueZE45zLX = await _cmdFGeKXqg.allowUnknownOption(_allowUnknownY8NLdVZ)
		const _returnValuegcOoLfF = await _Helpj4Vb1ie.subcommandDescription(_cmdFGeKXqg)
	});

	it('test for Help', async () => {
		const _HelpGEtQP5d = new Help()
		const _nameYnKVxRe = true;
		const _cmdgu63161 = new Command(_nameYnKVxRe)
		const _returnValueBeU8JoB = await _cmdgu63161.opts()
		const _returnValueO0US9D0 = await _HelpGEtQP5d.subcommandDescription(_cmdgu63161)
		const _arrayValueNt4Ji04 = "utSGfd";
		const _arrayValueAWo9wqI = false;
		const _arrayValuePaFPR5 = "heL6ST2vCjWBePBmPCvm97fLQWyDiEtFzfX1qnvjteBWEuGVIHaB92SbN9wB83ftgWhifCS";
		const _arrayValueEkCg5zw = -9.244066554402904;
		const _arrayValueKe9EPFL = [_arrayValueNt4Ji04, _arrayValueAWo9wqI, _arrayValuePaFPR5, _arrayValueEkCg5zw]
		const _arrayValueGDi22g3 = [_arrayValueKe9EPFL]
		const _arrayValuefze74ym = {
		
	}
		const _optionWXT26YQ = [_arrayValueGDi22g3, _arrayValuefze74ym]
		const _returnValueIrYKbJM = await _HelpGEtQP5d.optionDescription(_optionWXT26YQ)
		const _nameXvfXV6X = "N6S97JGZKv1qNlJAJxxQ1nLq7rGUGOwK6A0he9TGVpHEJnuGAE2SifbmVtUdwPpDKnKs5IMA6uoS1PzgzaPqpyOmcUjYTxXs";
		const _cmdmkG8QWS = new Command(_nameXvfXV6X)
		const _enableOrNameAndArgsTmn1Jlu = "YwISeN8boEUuLA86EArD1n7O1nan4HQLODjgfcxIlP9M3y";
		const _descriptionSAVbbVy = 7.722613286959941;
		const _returnValueD9ywvbT = await _cmdmkG8QWS.addHelpCommand(_enableOrNameAndArgsTmn1Jlu, _descriptionSAVbbVy)
		const _arrayValueDjlSuuS = {
		
	}
		const _arrayValuebzuNdEE = "nUFGN9JWmkl315Ytba272Cpo3eXSPKaCayz2dNl4uPtJKoUVPLke1qNe3UuJKz5UDnhnsJwq17KyFpNjBxZBu6IMG9By";
		const _arrayValuesTKg1IY = [_arrayValuebzuNdEE]
		const _arrayValuep1hlPkx = [_arrayValueDjlSuuS, _arrayValuesTKg1IY]
		const _arrayValueRqJDsbx = undefined;
		const _arrayValueZI7xnn = undefined;
		const _arrayValuerQ1KRp = [_arrayValuep1hlPkx, _arrayValueRqJDsbx, _arrayValueZI7xnn]
		const _arrayValuee5e3Ne = {
		
	}
		const _arrayValueNCOJRAN = {
		
	}
		const _returnValueOwPNIOk = [_arrayValuerQ1KRp, _arrayValuee5e3Ne, _arrayValueNCOJRAN]
		const _applyjovlt8X = () => { return _returnValueOwPNIOk };
		const _fnjMnlRrc = {
			"apply": _applyjovlt8X
	}
		const _returnValueWdymDjZ = await _cmdmkG8QWS.action(_fnjMnlRrc)
		const _returnValuexbIs9N6 = await _HelpGEtQP5d.visibleCommands(_cmdmkG8QWS)
	});

	it('test for Help', async () => {
		const _HelpFfvjzcW = new Help()
		const _arrayValuemlsPT3 = null;
		const _nameh1BWhD1 = [_arrayValuemlsPT3]
		const _cmdcSnldR = new Command(_nameh1BWhD1)
		const _displaySuggestionWoV0M8h = true;
		const _returnValuemLPkyA = await _cmdcSnldR.showSuggestionAfterError(_displaySuggestionWoV0M8h)
		const _displayHelpXTHMTcN = {
		
	}
		const _returnValueanPYQYa = await _cmdcSnldR.showHelpAfterError(_displayHelpXTHMTcN)
		const _nameAndArgsC3EiGT = "wrrqyMJefjwJees2Gl8RkaU7SxtUtrUoD66u3kcqSDR6xujZfHO3X5pYNsG93kWvGkcOddIx1LcKg2IPDcHGMMi8";
		const _actionOptsOrExecDesccZTmRlr = null;
		const _execOptsxHl0jti = "EYXN15aMPe6r3MP0cMEO2loGzg46X7K4w4K5MWjJx5HkM5";
		const _returnValuefYJS8Ek = await _cmdcSnldR.command(_nameAndArgsC3EiGT, _actionOptsOrExecDesccZTmRlr, _execOptsxHl0jti)
		const _returnValueo9YHsx4 = await _HelpFfvjzcW.visibleCommands(_cmdcSnldR)
		const _cmdTFfPk7r = "rTOlfS6HEAuFoWdyQ6CtSPwPakrodpFbjv";
		const _returnValueLJXxWl = await _HelpFfvjzcW.visibleArguments(_cmdTFfPk7r)
		const _arrayValueZSAqe6m = "BQFJjjGYgyTB1AbfKhHu1qXwIT9z";
		const _arrayValuejX0uWwV = false;
		const _arrayValueq63FH8Q = "GHM81j8JcR7AGB8IhYkofT3KIoN5Xnrotogo4SS7lDMj4ONB29Pw2G0rrYeoBF";
		const _optionr0fb3qM = [_arrayValueZSAqe6m, _arrayValuejX0uWwV, _arrayValueq63FH8Q]
		const _returnValuee59XY1 = await _HelpFfvjzcW.optionTerm(_optionr0fb3qM)
		const _strw70PojE = "lYOmJUOLPwDTaqFqPIbIcaNS2vr08lr4AdsrFdEqUYmvvZDPMMnY2bWMUzPwvefQh8dOVBlDR7aT0axUPR7XJIifRBqEy8olD";
		const _widthohPnIhV = -7.37778111997789;
		const _indentYaEU1Xw = 7.940018489376953;
		const _minColumnWidthmVhh11 = -3.4186962393792246;
		const _returnValueeteGQHL = await _HelpFfvjzcW.wrap(_strw70PojE, _widthohPnIhV, _indentYaEU1Xw, _minColumnWidthmVhh11)
	});

	it('test for Help', async () => {
		const _HelpTdudfSD = new Help()
		const _cmdTahdhjU = "MKC";
		const _helperUuQRaP8 = new Help()
		const _nameeIaXRdx = undefined;
		const _cmdLMJ8c1d = new Command(_nameeIaXRdx)
		const _flagsrtO2Hhm = "wjbxXFTfiIkpv48PnrVXJjpTdpa48aqVfd2SmuwkYbi3Q88YAjD";
		const _returnValueCIekWGX = "YvpryEAsesp363KE6l3jJsQbWPrCFXFCxqhVSgU7Ylztab6cAtDUEotGgt";
		const _arrayValueZcftPII = () => { return _returnValueCIekWGX };
		const _descriptionUdJYgn1 = [_arrayValueZcftPII]
		const _optionI5SPQEr = new Option(_flagsrtO2Hhm, _descriptionUdJYgn1)
		const _returnValueKHQdM1j = await _optionI5SPQEr.attributeName()
		const _arrayValuesqTyPkF = "Ey5EmJWqilXTd4g3Euh8eqtksyITsLXHyIWVxHqEGgdscicmCtCX4K9AkKftwVX";
		const _returnValuer57aHs4 = [_arrayValuesqTyPkF]
		const _nameSLPg02X = () => { return _returnValuer57aHs4 };
		const _returnValuemUEglvy = await _optionI5SPQEr.env(_nameSLPg02X)
		const _returnValuej37krT = await _cmdLMJ8c1d.addOption(_optionI5SPQEr)
		const _strAtSIHU = undefined;
		const _returnValuek4SOXRJ = await _cmdLMJ8c1d.usage(_strAtSIHU)
		const _returnValueIyosSI = await _helperUuQRaP8.subcommandTerm(_cmdLMJ8c1d)
		const _cmdioFjJ2P = undefined;
		const _returnValuekShprc = undefined;
		const _helperxacihE = () => { return _returnValuekShprc };
		const _returnValuez31ypVZ = await _helperUuQRaP8.formatHelp(_cmdioFjJ2P, _helperxacihE)
		const _returnValueHv5v1Ig = await _HelpTdudfSD.padWidth(_cmdTahdhjU, _helperUuQRaP8)
		const _returnValues1W0GH = "8WS8";
		const _cmdl71R9zW = () => { return _returnValues1W0GH };
		const _returnValueVQ1Jotp = await _HelpTdudfSD.visibleArguments(_cmdl71R9zW)
		const _arrayValueOowG7DR = "RG7a6UJwMdfUuZzo1aFtBwvEERygYD3F3anOkp2O6FvipfUM5mDpgIdcVLDA7pDZLKqkx";
		const _optionE6k9KN = [_arrayValueOowG7DR]
		const _returnValueLLOz6L = await _HelpTdudfSD.optionTerm(_optionE6k9KN)
		const _nameUkAiu4z = false;
		const _argumentE8xPZq1 = new Command(_nameUkAiu4z)
		const _nameUvMqzZN = "KqEwqdoDsgGlqCUdgYy6cG5IVyV5WnKIJwm5ulOJr1GXQ35KcUL5YWF";
		const _returnValuerk430bZ = await _argumentE8xPZq1.createCommand(_nameUvMqzZN)
		const __namexXgogu = {
		
	}
		const _commandsqrYV6d4 = {
		
	}
		const __hiddenDDzdJFT = false;
		const _parentseMJKUD = {
		
	}
		const _cmdgThJu3z = {
			"_name": __namexXgogu,
		"commands": _commandsqrYV6d4,
		"_hidden": __hiddenDDzdJFT,
		"parent": _parentseMJKUD
	}
		const _isDefaulthtQ6k09 = "A6ZdmeYmBz9BrkxVx8nrykztuqbeYYLisKrfd5Ln6DCxtB1jeltqSIe";
		const _optsmLfHq2D = {
			"isDefault": _isDefaulthtQ6k09
	}
		const _returnValueGV2NRBz = await _argumentE8xPZq1.addCommand(_cmdgThJu3z, _optsmLfHq2D)
		const _returnValuevQxNxRt = await _HelpTdudfSD.argumentTerm(_argumentE8xPZq1)
	});
})