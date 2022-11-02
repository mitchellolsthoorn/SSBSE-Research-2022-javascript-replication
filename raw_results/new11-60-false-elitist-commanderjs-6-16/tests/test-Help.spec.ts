export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpT06OjOc = new Help()
		const _cmdWYFcGg1 = true;
		const _returnValuegnXAyLX = await _HelpT06OjOc.visibleOptions(_cmdWYFcGg1)
	});

	it('test for Help', async () => {
		const _HelpaUgflS8 = new Help()
		const __nameClPoUS = {
		
	}
		const __aliasesfKCLJvS = {
		
	}
		const _parentsQ8DKWz = {
		
	}
		const _returnValuexyeUwM8 = -8.019367134228524;
		const _usagexpZ6jq6 = () => { return _returnValuexyeUwM8 };
		const _cmdgCcuSHs = {
			"_name": __nameClPoUS,
		"_aliases": __aliasesfKCLJvS,
		"parent": _parentsQ8DKWz,
		"usage": _usagexpZ6jq6
	}
		const _returnValuex8w4MFw = await _HelpaUgflS8.commandUsage(_cmdgCcuSHs)
		const _arrayValuevFm6En7 = {
		
	}
		const _arrayValuerWlh5M = "3CnDK3QX3tZWxHjrYaCyhmVgOO1Lkj1vdbD";
		const _arrayValueSO0ihQx = undefined;
		const _arrayValuepglexDa = false;
		const _arrayValueRsDvtaZ = null;
		const _cmdo3UPLVf = [_arrayValuevFm6En7, _arrayValuerWlh5M, _arrayValueSO0ihQx, _arrayValuepglexDa, _arrayValueRsDvtaZ]
		const _returnValueqTZumWk = undefined;
		const _visibleArgumentscf4Zj2z = () => { return _returnValueqTZumWk };
		const _arrayValueP0ECWP2 = false;
		const _arrayValueF2AyvtT = [_arrayValueP0ECWP2]
		const _returnValueQ5kbF5 = [_arrayValueF2AyvtT]
		const _argumentTermU6UTiLK = () => { return _returnValueQ5kbF5 };
		const _helpervqzvqye = {
			"visibleArguments": _visibleArgumentscf4Zj2z,
		"argumentTerm": _argumentTermU6UTiLK
	}
		const _returnValuenXRzGes = await _HelpaUgflS8.longestArgumentTermLength(_cmdo3UPLVf, _helpervqzvqye)
		const _flagsUFd2yzK = true;
		const _optiontLycihJ = {
			"flags": _flagsUFd2yzK
	}
		const _returnValueSQNyeId = await _HelpaUgflS8.optionTerm(_optiontLycihJ)
	});

	it('test for Help', async () => {
		const _HelpQCRRvpm = new Help()
		const _struYHHtmY = undefined;
		const _widthFaYAQd = 0.9603490286094143;
		const _indentjC4bNrI = -2.414344158851943;
		const _minColumnWidthzc3GCci = 2.072272087561636;
		const _returnValueBXyfBWQ = await _HelpQCRRvpm.wrap(_struYHHtmY, _widthFaYAQd, _indentjC4bNrI, _minColumnWidthzc3GCci)
		const _flagskoa2N7 = undefined;
		const _optionJ97evDb = {
			"flags": _flagskoa2N7
	}
		const _returnValueBEOwhiF = await _HelpQCRRvpm.optionTerm(_optionJ97evDb)
		const _arrayValueCD8e5A5 = -6.2950295439818404;
		const _arrayValueG3OYUuZ = {
		
	}
		const _returnValueOe4QSJ = [_arrayValueCD8e5A5, _arrayValueG3OYUuZ]
		const _descriptionLTPRhE1 = () => { return _returnValueOe4QSJ };
		const _cmdAdaVCkn = {
			"description": _descriptionLTPRhE1
	}
		const _returnValuei3vdi3i = await _HelpQCRRvpm.subcommandDescription(_cmdAdaVCkn)
		const _returnValueGEXdf6z = undefined;
		const _matchLyknvxZ = () => { return _returnValueGEXdf6z };
		const _returnValuejbDniGX = null;
		const _substrLfRrog = () => { return _returnValuejbDniGX };
		const _strYw2j6tv = {
			"match": _matchLyknvxZ,
		"substr": _substrLfRrog
	}
		const _width0aHjWg = 3.016697686741159;
		const _indentaxZpWNy = -6.906244816576732;
		const _minColumnWidthsk8iDOT = -5.943705440219598;
		const _returnValuea1UBcS8 = await _HelpQCRRvpm.wrap(_strYw2j6tv, _width0aHjWg, _indentaxZpWNy, _minColumnWidthsk8iDOT)
		const _cmdZnj6DiG = 7.085381201724665;
		const _returnValueWCgVXZA = undefined;
		const _returnValueyYjevb0 = () => { return _returnValueWCgVXZA };
		const _visibleArgumentscvooNUW = () => { return _returnValueyYjevb0 };
		const _returnValuee1dRhT8 = 5.919106533044648;
		const _argumentTermaQU6ZQ = () => { return _returnValuee1dRhT8 };
		const _helperpbjGv3T = {
			"visibleArguments": _visibleArgumentscvooNUW,
		"argumentTerm": _argumentTermaQU6ZQ
	}
		const _returnValueXw0cJMF = await _HelpQCRRvpm.longestArgumentTermLength(_cmdZnj6DiG, _helperpbjGv3T)
	});

	it('test for Help', async () => {
		const _Helpp4i100C = new Help()
		const _cmdMJDYD9 = {
		
	}
		const _returnValueemw9NWF = "Y5YwxSqN8I12pEceH5i85wbSssBUOmUFgNUo6RTFSN4AQPE35CFrN2ReWkjg4kvGHRwJLcIGL";
		const _arrayValueKBSW9W = () => { return _returnValueemw9NWF };
		const _sortSubcommandsnmoIQZj = [_arrayValueKBSW9W]
		const _returnValueA129WL7 = null;
		const _subcommandTermV7fzgHH = () => { return _returnValueA129WL7 };
		const _helperby9vYc = {
			"sortSubcommands": _sortSubcommandsnmoIQZj,
		"subcommandTerm": _subcommandTermV7fzgHH
	}
		const _returnValueoGHLuq = await _Helpp4i100C.formatHelp(_cmdMJDYD9, _helperby9vYc)
		const __nameppET3Fk = {
		
	}
		const __aliasesBJQWMJK = {
		
	}
		const _parent5W3I9S = {
		
	}
		const _usagelExyX0T = null;
		const _cmdTIocqfg = {
			"_name": __nameppET3Fk,
		"_aliases": __aliasesBJQWMJK,
		"parent": _parent5W3I9S,
		"usage": _usagelExyX0T
	}
		const _returnValuea4ObMO8 = await _Helpp4i100C.commandUsage(_cmdTIocqfg)
		const _optionsSGncYaL = {
		
	}
		const __hasHelpOptionyopI07w = false;
		const _returnValuegKL3BB = true;
		const __helpShortFlagsFPONhd = () => { return _returnValuegKL3BB };
		const _returnValueoGTIs5a = "TK24zScItcF1NALWjAqnOWpE0Enxgy3uuV8";
		const __findOptionuUFg9Ml = () => { return _returnValueoGTIs5a };
		const __helpLongFlagFhbJqHB = null;
		const _arrayValueAvwaEa = null;
		const _returnValuenymSnc = [_arrayValueAvwaEa]
		const _createOptionhiMgxXC = () => { return _returnValuenymSnc };
		const __helpDescriptionis9Pv9 = false;
		const __helpFlagsFSRIjc6 = null;
		const _cmdYLBDYR = {
			"options": _optionsSGncYaL,
		"_hasHelpOption": __hasHelpOptionyopI07w,
		"_helpShortFlag": __helpShortFlagsFPONhd,
		"_findOption": __findOptionuUFg9Ml,
		"_helpLongFlag": __helpLongFlagFhbJqHB,
		"createOption": _createOptionhiMgxXC,
		"_helpDescription": __helpDescriptionis9Pv9,
		"_helpFlags": __helpFlagsFSRIjc6
	}
		const _returnValuentbskae = await _Helpp4i100C.visibleOptions(_cmdYLBDYR)
		const _returnValueBoNcf4M = "EuNnWvk48QCMruJ6h6P4XYWXzuXEsubkLyLxrUNC9HMTisyH1USvi09DRiLYeCSHgAXTkgF7K5J38OdmEJoi";
		const _descriptionSv1RhxO = () => { return _returnValueBoNcf4M };
		const _cmdbzUzSWr = {
			"description": _descriptionSv1RhxO
	}
		const _returnValuehaeYwJc = await _Helpp4i100C.subcommandDescription(_cmdbzUzSWr)
	});

	it('test for Help', async () => {
		const _HelpiXZWEPs = new Help()
		const _returnValueghN1KgA = "EMLLBvpGhWICjg8sSUX5CzP";
		const _argChoicesR5OOOEZ = () => { return _returnValueghN1KgA };
		const _negatexPNmThp = null;
		const _defaultValueau1LzzC = undefined;
		const _defaultValueDescriptionwwSPWp6 = -7.303595847279625;
		const _returnValueusYVRJT = null;
		const _envVarnpD5ZMV = () => { return _returnValueusYVRJT };
		const _returnValueeR34etf = null;
		const _descriptionXDi336K = () => { return _returnValueeR34etf };
		const _optionw4F4IXU = {
			"argChoices": _argChoicesR5OOOEZ,
		"negate": _negatexPNmThp,
		"defaultValue": _defaultValueau1LzzC,
		"defaultValueDescription": _defaultValueDescriptionwwSPWp6,
		"envVar": _envVarnpD5ZMV,
		"description": _descriptionXDi336K
	}
		const _returnValueKSosuBo = await _HelpiXZWEPs.optionDescription(_optionw4F4IXU)
		const _cmdMyFKyNu = null;
		const _sortSubcommandsDWnU9D5 = false;
		const _returnValueMAvmG5D = 1.0616201889720696;
		const _subcommandTermstv9GyS = () => { return _returnValueMAvmG5D };
		const _helperjHHxWZ = {
			"sortSubcommands": _sortSubcommandsDWnU9D5,
		"subcommandTerm": _subcommandTermstv9GyS
	}
		const _returnValueA6h7Lr = await _HelpiXZWEPs.longestSubcommandTermLength(_cmdMyFKyNu, _helperjHHxWZ)
		const _flagsMT3d2Oi = false;
		const _optionLnIhxhn = {
			"flags": _flagsMT3d2Oi
	}
		const _returnValuexlpiicR = await _HelpiXZWEPs.optionTerm(_optionLnIhxhn)
	});

	it('test for Help', async () => {
		const _HelpzDTQN8w = new Help()
		const _cmdN8PJxcn = "dXVTUOMVs64Vk28s4k8uCSX16wru28QPnCLIhkh51qCKR1xAoxrpOUpWq1I8yv4iYL";
		const _returnValueahazidV = null;
		const _longestOptionTermLengthVlN1mKB = () => { return _returnValueahazidV };
		const _returnValueOw8KQqk = -5.053857067393316;
		const _longestSubcommandTermLengthpvQjl7N = () => { return _returnValueOw8KQqk };
		const _returnValuevc9DHba = null;
		const _longestArgumentTermLength0ry8pj = () => { return _returnValuevc9DHba };
		const _helperBOm6iC5 = {
			"longestOptionTermLength": _longestOptionTermLengthVlN1mKB,
		"longestSubcommandTermLength": _longestSubcommandTermLengthpvQjl7N,
		"longestArgumentTermLength": _longestArgumentTermLength0ry8pj
	}
		const _returnValueFqpPtTM = await _HelpzDTQN8w.padWidth(_cmdN8PJxcn, _helperBOm6iC5)
	});

	it('test for Help', async () => {
		const _HelpkbUJvwG = new Help()
		const _option7SVK3K = false;
		const _returnValueu9leWAv = await _HelpkbUJvwG.optionDescription(_option7SVK3K)
		const _argChoiceshWY7xzl = {
		
	}
		const _defaultValueUBs3q8B = undefined;
		const _defaultValueDescriptioncVEMgvZ = undefined;
		const _descriptionnZGAKI = -8.990246608616491;
		const _argumentF6FtMGI = {
			"argChoices": _argChoiceshWY7xzl,
		"defaultValue": _defaultValueUBs3q8B,
		"defaultValueDescription": _defaultValueDescriptioncVEMgvZ,
		"description": _descriptionnZGAKI
	}
		const _returnValueCM8I4HR = await _HelpkbUJvwG.argumentDescription(_argumentF6FtMGI)
	});

	it('test for Help', async () => {
		const _HelpeKMmAD1 = new Help()
		const _cmdj9DSPT3 = "EskDynWDKFlI0JFD7XQgeL6UIbfwP9mITHGg06BZrYAG7yejyJZaJmMU9Y6e8qLUpQsasYGj";
		const _helperEgF3PWp = "TcDICa8WcUW4S1kE8saGKCloJcM0VKaFRGSPJAeCz9bWMPCcAlkwjG";
		const _returnValueKWyJqj = await _HelpeKMmAD1.longestArgumentTermLength(_cmdj9DSPT3, _helperEgF3PWp)
		const __argsDescriptionJW6ea26 = {
		
	}
		const __argsqrvBvdp = {
		
	}
		const _cmdESjjSsM = {
			"_argsDescription": __argsDescriptionJW6ea26,
		"_args": __argsqrvBvdp
	}
		const _returnValueJlVN72O = await _HelpeKMmAD1.visibleArguments(_cmdESjjSsM)
	});

	it('test for Help', async () => {
		const _HelpyRAADcF = new Help()
		const _arrayValueHvRvbok = "rqoGkhG57WdyprBXJ9UkuFDC";
		const _arrayValueVwn8m4u = -3.8332129972144466;
		const _returnValueWIibsdQ = false;
		const _arrayValuee146P4N = () => { return _returnValueWIibsdQ };
		const _returnValueptWcsU5 = [_arrayValueHvRvbok, _arrayValueVwn8m4u, _arrayValuee146P4N]
		const _matchGbkMcmO = () => { return _returnValueptWcsU5 };
		const _returnValueOVARTwl = "BtH6LpiWIxRYy6dWJV";
		const _substrRzpEgz3 = () => { return _returnValueOVARTwl };
		const _strkcdF7v0 = {
			"match": _matchGbkMcmO,
		"substr": _substrRzpEgz3
	}
		const _widthgC2a2Ck = -8.656620395059871;
		const _indentdu0T99M = -8.872369779227443;
		const _minColumnWidthuXDdeG4 = -3.7115233422135816;
		const _returnValueu8qDofi = await _HelpyRAADcF.wrap(_strkcdF7v0, _widthgC2a2Ck, _indentdu0T99M, _minColumnWidthuXDdeG4)
		const _cmdYnN9SSy = "RrKX8nSyMBCc3d91fDIjig5XuclaIyNfigFlbjfRHcQdWEqF";
		const _returnValuecow5PIM = "HBzDXuNgnzrEIFfUu8yDTdg3b39MMI";
		const _visibleOptionsExafrXl = () => { return _returnValuecow5PIM };
		const _optionTermb4iCP4 = {
		
	}
		const _helperWq95UEm = {
			"visibleOptions": _visibleOptionsExafrXl,
		"optionTerm": _optionTermb4iCP4
	}
		const _returnValueni5SAf = await _HelpyRAADcF.longestOptionTermLength(_cmdYnN9SSy, _helperWq95UEm)
		const _cmduUtdnTE = "cPzJu9sOul9kOd35xJJ";
		const _sortSubcommandsCLf8m2h = undefined;
		const _returnValuerbP5aJR = null;
		const _subcommandTermyin1aJW = () => { return _returnValuerbP5aJR };
		const _helperrZNlK4Q = {
			"sortSubcommands": _sortSubcommandsCLf8m2h,
		"subcommandTerm": _subcommandTermyin1aJW
	}
		const _returnValueKm2KSBK = await _HelpyRAADcF.formatHelp(_cmduUtdnTE, _helperrZNlK4Q)
		const __argsunK1u61 = {
		
	}
		const __nameZgRPYjs = 0.7467284623028867;
		const __aliasesgoUTVXI = {
		
	}
		const _optionsSUAekFW = {
		
	}
		const _cmdbZxtZih = {
			"_args": __argsunK1u61,
		"_name": __nameZgRPYjs,
		"_aliases": __aliasesgoUTVXI,
		"options": _optionsSUAekFW
	}
		const _returnValuezNAuEdU = await _HelpyRAADcF.subcommandTerm(_cmdbZxtZih)
	});

	it('test for Help', async () => {
		const _HelpSdWQ8ss = new Help()
		const _flagsXSMuojR = "1Hpp27Wm4lIc1pjR7KYtdGPcDayexB12";
		const _optionn0oNwwY = {
			"flags": _flagsXSMuojR
	}
		const _returnValuekLsNjHv = await _HelpSdWQ8ss.optionTerm(_optionn0oNwwY)
	});

	it('test for Help', async () => {
		const _Help6qpvyz = new Help()
		const _arrayValueSpdRJeh = false;
		const _arrayValued5u4CkS = undefined;
		const _returnValueTC8GgBY = null;
		const _arrayValueRquw6Kw = () => { return _returnValueTC8GgBY };
		const _arrayValueFHBw5qG = undefined;
		const _cmdTLjCPaZ = [_arrayValueSpdRJeh, _arrayValued5u4CkS, _arrayValueRquw6Kw, _arrayValueFHBw5qG]
		const _sortSubcommandset0JSGd = null;
		const _returnValueY3ZZX8M = undefined;
		const _subcommandTermnOYxBMb = () => { return _returnValueY3ZZX8M };
		const _helperfp9xTwj = {
			"sortSubcommands": _sortSubcommandset0JSGd,
		"subcommandTerm": _subcommandTermnOYxBMb
	}
		const _returnValuejFlZO9u = await _Help6qpvyz.longestSubcommandTermLength(_cmdTLjCPaZ, _helperfp9xTwj)
		const _returnValueBqaqfya = undefined;
		const _flagsQeMOPAa = () => { return _returnValueBqaqfya };
		const _optionEL15cY4 = {
			"flags": _flagsQeMOPAa
	}
		const _returnValueNYMnAjh = await _Help6qpvyz.optionTerm(_optionEL15cY4)
	});

	it('test for Help', async () => {
		const _HelpidAiZ2L = new Help()
		const __argsDescriptionJJOhb49 = {
		
	}
		const __argsARSii0v = {
		
	}
		const _cmdgc22Si7 = {
			"_argsDescription": __argsDescriptionJJOhb49,
		"_args": __argsARSii0v
	}
		const _returnValueACWFQ45 = await _HelpidAiZ2L.visibleArguments(_cmdgc22Si7)
		const _optionsWeULq2f = {
		
	}
		const __hasHelpOptionB7ZNo6e = "96BNrfUiknk4wIdoSAecfuRoeJv5FvTjrAWUCYFPRiPglKm9aDZCkdOtadRS";
		const __helpShortFlagRthgSTJ = {
		
	}
		const _arrayValueehfn5Wt = "niWMXOaouePUTvI64jLPthbXSbEyOBOLCxa0fYMeP2Og7ft9yCOx9cm3aeq968S4CbwdHybCW5EZBAHr2E";
		const _returnValuekM5sbFS = [_arrayValueehfn5Wt]
		const __findOptionUChyrE = () => { return _returnValuekM5sbFS };
		const __helpLongFlag1ISmNh = {
		
	}
		const _createOptionCzrHAHK = "SHP37jBgns0AezCLTUuK5rVgZzKpisetfLsApcqxowiIAz8SU9fUDRfUKmPVPVJ9OKjuYsOSdFKw5R5At0lqv8dazrEs7ieX";
		const __helpDescriptionOwJQb1Q = "6HGnxuitjInNofUXqpgEnhRh";
		const __helpFlagshbGxIcm = false;
		const _cmdlO2FtE = {
			"options": _optionsWeULq2f,
		"_hasHelpOption": __hasHelpOptionB7ZNo6e,
		"_helpShortFlag": __helpShortFlagRthgSTJ,
		"_findOption": __findOptionUChyrE,
		"_helpLongFlag": __helpLongFlag1ISmNh,
		"createOption": _createOptionCzrHAHK,
		"_helpDescription": __helpDescriptionOwJQb1Q,
		"_helpFlags": __helpFlagshbGxIcm
	}
		const _returnValueScIlwDW = await _HelpidAiZ2L.visibleOptions(_cmdlO2FtE)
		const _optionsgr5XwA3 = {
		
	}
		const __hasHelpOptionRX5tZej = false;
		const __helpShortFlagEV20maf = -5.699201360274696;
		const _returnValueWhse9ci = 0.4443857583399673;
		const __findOptionZcc372R = () => { return _returnValueWhse9ci };
		const __helpLongFlagOsmnrQU = {
		
	}
		const _arrayValuedaLdgMU = undefined;
		const _arrayValuesQQTJyO = {
		
	}
		const _returnValuenGNErBi = null;
		const _arrayValueUfA0v6U = () => { return _returnValuenGNErBi };
		const _arrayValuemImyxi = [_arrayValuedaLdgMU, _arrayValuesQQTJyO, _arrayValueUfA0v6U]
		const _returnValueSv9PCg7 = {
		
	}
		const _arrayValuexi2cSA1 = () => { return _returnValueSv9PCg7 };
		const _returnValuec2yVj3N = [_arrayValuemImyxi, _arrayValuexi2cSA1]
		const _createOptionDWkq8uG = () => { return _returnValuec2yVj3N };
		const __helpDescriptionoezBCOI = 0.21194934056935288;
		const __helpFlagsyfjhDF = null;
		const _cmdeE7CdPj = {
			"options": _optionsgr5XwA3,
		"_hasHelpOption": __hasHelpOptionRX5tZej,
		"_helpShortFlag": __helpShortFlagEV20maf,
		"_findOption": __findOptionZcc372R,
		"_helpLongFlag": __helpLongFlagOsmnrQU,
		"createOption": _createOptionDWkq8uG,
		"_helpDescription": __helpDescriptionoezBCOI,
		"_helpFlags": __helpFlagsyfjhDF
	}
		const _returnValue3iArA3 = await _HelpidAiZ2L.visibleOptions(_cmdeE7CdPj)
	});

	it('test for Help', async () => {
		const _HelpGcXhff1 = new Help()
		const _returnValuev1zsWR5 = "GANnCCLxbJAuI1CAzLSXxFSkKUrv4echMx";
		const _descriptioncvdo8Rs = () => { return _returnValuev1zsWR5 };
		const _cmdEvF79w7 = {
			"description": _descriptioncvdo8Rs
	}
		const _returnValuel84CNU = await _HelpGcXhff1.subcommandDescription(_cmdEvF79w7)
		const __argsDescriptionio44ZrT = {
		
	}
		const __argse5xA6kH = "g1LpyOJuSxVEguF";
		const _cmdlcEFP5j = {
			"_argsDescription": __argsDescriptionio44ZrT,
		"_args": __argse5xA6kH
	}
		const _returnValuevKpMvB = await _HelpGcXhff1.visibleArguments(_cmdlcEFP5j)
		const _descriptionMyyC3Rr = null;
		const _cmdCgGoD4W = {
			"description": _descriptionMyyC3Rr
	}
		const _returnValueXrMrzo = await _HelpGcXhff1.commandDescription(_cmdCgGoD4W)
		const _arrayValueyKGtnZY = "vUuH8P3j3YtTUz9bowxiC4bXCLcYbTTcRAnQRB88N6LF7kTUl";
		const _arrayValueKlVkuI4 = null;
		const _arrayValuepcIJK1S = -5.444840625841302;
		const _arrayValuel9Xupse = null;
		const _returnValuehe3WwlG = [_arrayValueyKGtnZY, _arrayValueKlVkuI4, _arrayValuepcIJK1S, _arrayValuel9Xupse]
		const _nameR6wveTN = () => { return _returnValuehe3WwlG };
		const _argumentkQhYpd6 = {
			"name": _nameR6wveTN
	}
		const _returnValuehQjy1cs = await _HelpGcXhff1.argumentTerm(_argumentkQhYpd6)
	});

	it('test for Help', async () => {
		const _HelpEfNULIe = new Help()
		const _returnValueIjmQZ3r = "XI1qwHTjRpI9aEg808t1VDO";
		const _descriptionvLiiiS0 = () => { return _returnValueIjmQZ3r };
		const _cmdcRUhed = {
			"description": _descriptionvLiiiS0
	}
		const _returnValueAKXHVN7 = await _HelpEfNULIe.commandDescription(_cmdcRUhed)
		const _descriptionY1Re36 = 3.0905775879317865;
		const _cmdI9OvgIY = {
			"description": _descriptionY1Re36
	}
		const _returnValueoHQ6CnZ = await _HelpEfNULIe.subcommandDescription(_cmdI9OvgIY)
		const _cmdInDIPJ6 = -8.502336892581164;
		const _helperc4dCRj = 3.19602330718439;
		const _returnValueCcQ7eFM = await _HelpEfNULIe.padWidth(_cmdInDIPJ6, _helperc4dCRj)
	});

	it('test for Help', async () => {
		const _Helpif1A6N1 = new Help()
		const _returnValueKEXZlDj = undefined;
		const _arrayValueaWmkNz = () => { return _returnValueKEXZlDj };
		const _returnValueUjLqQ2x = [_arrayValueaWmkNz]
		const _nameYnvWkb3 = () => { return _returnValueUjLqQ2x };
		const _argumentanS68nx = {
			"name": _nameYnvWkb3
	}
		const _returnValueTjukiDT = await _Helpif1A6N1.argumentTerm(_argumentanS68nx)
		const _returnValueWyzwJNw = "P2TtVqQbZt18MPoi7IsdrIJAu0ZCguaW";
		const _matchV9CmQY = () => { return _returnValueWyzwJNw };
		const _returnValuesWyGPj2 = false;
		const _substrl1vJiLA = () => { return _returnValuesWyGPj2 };
		const _streySmsSL = {
			"match": _matchV9CmQY,
		"substr": _substrl1vJiLA
	}
		const _widthjzVr45t = -6.668109549170952;
		const _indentypVpzcg = 5.69064840140156;
		const _minColumnWidthB3cnxqQ = []
		const _returnValueaAbez8d = await _Helpif1A6N1.wrap(_streySmsSL, _widthjzVr45t, _indentypVpzcg, _minColumnWidthB3cnxqQ)
		const _flagsduGaKm = "LKKS3zZ5qDmkDqqCa1SHUtTfaBLuwN31eyNGVSWVbcM2YjBWEUfkDooJVpJsfHDl3O0Nq";
		const _optionyLx0reO = {
			"flags": _flagsduGaKm
	}
		const _returnValueGHQHmu6 = await _Helpif1A6N1.optionTerm(_optionyLx0reO)
		const _cmdNmwqnMV = 3.156601530286146;
		const _returnValuefLoUHlx = undefined;
		const _returnValueNC61ET = () => { return _returnValuefLoUHlx };
		const _visibleArgumentsSCXUbTx = () => { return _returnValueNC61ET };
		const _argumentTermALyP1Kj = false;
		const _helperjXqXvQ = {
			"visibleArguments": _visibleArgumentsSCXUbTx,
		"argumentTerm": _argumentTermALyP1Kj
	}
		const _returnValueIALG39w = await _Helpif1A6N1.longestArgumentTermLength(_cmdNmwqnMV, _helperjXqXvQ)
		const __nameJ4nafcB = {
		
	}
		const __aliasesMnCjeMf = {
		
	}
		const _parentlySNKE = {
		
	}
		const _returnValueVvXu6DF = undefined;
		const _usagesbwyaRG = () => { return _returnValueVvXu6DF };
		const _cmdt3PNGbN = {
			"_name": __nameJ4nafcB,
		"_aliases": __aliasesMnCjeMf,
		"parent": _parentlySNKE,
		"usage": _usagesbwyaRG
	}
		const _returnValuecA4XHHX = await _Helpif1A6N1.commandUsage(_cmdt3PNGbN)
	});

	it('test for Help', async () => {
		const _HelpB8sOOYm = new Help()
		const _returnValueWlXvk1i = false;
		const _descriptionDrj4nTk = () => { return _returnValueWlXvk1i };
		const _cmdrgApZU = {
			"description": _descriptionDrj4nTk
	}
		const _returnValueFQJWv9H = await _HelpB8sOOYm.subcommandDescription(_cmdrgApZU)
		const __nameVNScgGI = {
		
	}
		const __aliasesksggdm = "VyFvQJk4co8SyVzeIHMjP3Ou7lYtDWJK3s225EfG9XOOoERnPWUW4VT7Y7qM5HDcrLU2a";
		const _parentkDmzwEg = {
		
	}
		const _returnValued6KMEC7 = "djX2Az4ljqFE5c4g6b5J5IP32S";
		const _usageuVNFKP = () => { return _returnValued6KMEC7 };
		const _cmdpSYpk8m = {
			"_name": __nameVNScgGI,
		"_aliases": __aliasesksggdm,
		"parent": _parentkDmzwEg,
		"usage": _usageuVNFKP
	}
		const _returnValuemE06ip3 = await _HelpB8sOOYm.commandUsage(_cmdpSYpk8m)
		const _returnValuerc2iHMO = undefined;
		const _cmdEepIbiz = () => { return _returnValuerc2iHMO };
		const _returnValueeAMcSjo = false;
		const _visibleOptionsRC0UNwB = () => { return _returnValueeAMcSjo };
		const _returnValueap28RX8 = 5.866857087538179;
		const _optionTermpXaar4l = () => { return _returnValueap28RX8 };
		const _helperzhrritp = {
			"visibleOptions": _visibleOptionsRC0UNwB,
		"optionTerm": _optionTermpXaar4l
	}
		const _returnValuenXuw3qh = await _HelpB8sOOYm.longestOptionTermLength(_cmdEepIbiz, _helperzhrritp)
	});

	it('test for Help', async () => {
		const _HelpRC1moSk = new Help()
		const _returnValueDmmCJZ = {
		
	}
		const _nameTOuCSYk = () => { return _returnValueDmmCJZ };
		const _argumentKYdZBy8 = {
			"name": _nameTOuCSYk
	}
		const _returnValuebcucUL = await _HelpRC1moSk.argumentTerm(_argumentKYdZBy8)
		const __argsuy9Ychn = {
		
	}
		const __namePbxKIz = 7.476363010798583;
		const __aliasesVsMlB5H = {
		
	}
		const _optionskC1gejY = {
		
	}
		const _cmdpEvt0U2 = {
			"_args": __argsuy9Ychn,
		"_name": __namePbxKIz,
		"_aliases": __aliasesVsMlB5H,
		"options": _optionskC1gejY
	}
		const _returnValueSRyFWK1 = await _HelpRC1moSk.subcommandTerm(_cmdpEvt0U2)
	});

	it('test for Help', async () => {
		const _HelpJX1TjIM = new Help()
		const _commandskx6OIv = {
		
	}
		const _returnValueuzc7PTR = "3vqSQpFxz8h1Jkmvq9OrEFa2CMC7";
		const __hasImplicitHelpCommandK5KpwL = () => { return _returnValueuzc7PTR };
		const __helpCommandnameAndArgsUXEHVa8 = {
		
	}
		const _returnValuet1KU8RX = "n27ohAA07WJPHLMLzNmknXiZ3A6cuzd68SVErHQe";
		const _returnValueDC4b9wA = () => { return _returnValuet1KU8RX };
		const _createCommandag28L16 = () => { return _returnValueDC4b9wA };
		const _arrayValueJvRgfUw = false;
		const _returnValuesjb8TwJ = [_arrayValueJvRgfUw]
		const _arrayValueTQ4Eijg = () => { return _returnValuesjb8TwJ };
		const _returnValuejOyFTJ = {
		
	}
		const _arrayValueJk1pHx7 = () => { return _returnValuejOyFTJ };
		const _arrayValuej1C7hNv = null;
		const __helpCommandDescriptionQ6Jz1W = [_arrayValueTQ4Eijg, _arrayValueJk1pHx7, _arrayValuej1C7hNv]
		const _cmdee8Xgf8 = {
			"commands": _commandskx6OIv,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandK5KpwL,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsUXEHVa8,
		"createCommand": _createCommandag28L16,
		"_helpCommandDescription": __helpCommandDescriptionQ6Jz1W
	}
		const _returnValuel9DWXXb = await _HelpJX1TjIM.visibleCommands(_cmdee8Xgf8)
		const _cmd9Zdg4G = "VxhGnYc2RGDjAkuVjkiYyav9zuG2L7Ki6gBoV";
		const _returnValuek8WyMWD = false;
		const _visibleArgumentsJIO8HPL = () => { return _returnValuek8WyMWD };
		const _returnValuehJTsTe5 = "HQ9vNw";
		const _argumentTermRM960IR = () => { return _returnValuehJTsTe5 };
		const _helperpqG58HN = {
			"visibleArguments": _visibleArgumentsJIO8HPL,
		"argumentTerm": _argumentTermRM960IR
	}
		const _returnValueKwOIFVq = await _HelpJX1TjIM.longestArgumentTermLength(_cmd9Zdg4G, _helperpqG58HN)
	});

	it('test for Help', async () => {
		const _HelpeJPa9Qm = new Help()
		const _argChoicesj4igYZT = {
		
	}
		const _negatejdHbeQe = "lMva7cMQA28udHJfhrN9aHJDSX5hvi3R5UA8l34mJpbSat6KWK2QNd8N8LD8IzW8yig5Nqv3z9GbHnuzGx2VioMFuuHy";
		const _defaultValueOwZY1c3 = undefined;
		const _defaultValueDescriptionqx1cywx = undefined;
		const _envVarmiDHvI6 = "J0clGQIbenqn8MnsrNUUEa7NC7W5Wy1Ww0XJayxyaKsGMq2SpVpGvEiIqnRJmMPPttJjRTUR4SDABwn";
		const _descriptionn1ETgvw = "VKIkXhVzDDnvqpXp6b5KIq5WNppqlCeDja134epUKxplkXgv8EKFsnau0DvfBycTKHlOqutj8K9OJW4BljJ4Bl9";
		const _optionHGR0yGm = {
			"argChoices": _argChoicesj4igYZT,
		"negate": _negatejdHbeQe,
		"defaultValue": _defaultValueOwZY1c3,
		"defaultValueDescription": _defaultValueDescriptionqx1cywx,
		"envVar": _envVarmiDHvI6,
		"description": _descriptionn1ETgvw
	}
		const _returnValueCFUBhTn = await _HelpeJPa9Qm.optionDescription(_optionHGR0yGm)
		const _returnValuepsWrBdh = {
		
	}
		const _descriptionYNkeg5q = () => { return _returnValuepsWrBdh };
		const _cmdzu2q8Ic = {
			"description": _descriptionYNkeg5q
	}
		const _returnValueBmxHtBM = await _HelpeJPa9Qm.commandDescription(_cmdzu2q8Ic)
		const _cmdRJOtpWz = "7";
		const _sortSubcommandsiuYsA5P = true;
		const _returnValuerizsk4g = null;
		const _arrayValueGKnCggt = () => { return _returnValuerizsk4g };
		const _returnValueeOzhFp = [_arrayValueGKnCggt]
		const _subcommandTermk4pUYP5 = () => { return _returnValueeOzhFp };
		const _helperYT4uGOs = {
			"sortSubcommands": _sortSubcommandsiuYsA5P,
		"subcommandTerm": _subcommandTermk4pUYP5
	}
		const _returnValuehGUJYqF = await _HelpeJPa9Qm.longestSubcommandTermLength(_cmdRJOtpWz, _helperYT4uGOs)
		const _returnValueBjFdv37 = {
		
	}
		const _descriptiondgE1UCy = () => { return _returnValueBjFdv37 };
		const _cmdXfSh8Gs = {
			"description": _descriptiondgE1UCy
	}
		const _returnValuemB8pODe = await _HelpeJPa9Qm.subcommandDescription(_cmdXfSh8Gs)
	});

	it('test for Help', async () => {
		const _HelpbRqrbnh = new Help()
		const _argumentsWjgA4j = "S";
		const _returnValueaEpyUNn = await _HelpbRqrbnh.argumentDescription(_argumentsWjgA4j)
	});

	it('test for Help', async () => {
		const _Helpp1aUnN = new Help()
		const _arrayValueOipP60w = "HDUkKtEYkkyPMVReKvT2fXkqGmNNa";
		const _arrayValueSk3ZRXB = [_arrayValueOipP60w]
		const _returnValueca1KwLC = [_arrayValueSk3ZRXB]
		const _matchuqA0HSA = () => { return _returnValueca1KwLC };
		const _returnValuec2jLocQ = {
		
	}
		const _returnValueQxIVGOI = () => { return _returnValuec2jLocQ };
		const _substrmPKaYB6 = () => { return _returnValueQxIVGOI };
		const _strHqDLAn = {
			"match": _matchuqA0HSA,
		"substr": _substrmPKaYB6
	}
		const _widthA0Y4zc2 = "";
		const _indentmYk1oQ8 = 2.686552220448071;
		const _minColumnWidthk9cKHTF = -0.48533029475591505;
		const _returnValue17zJOc = await _Helpp1aUnN.wrap(_strHqDLAn, _widthA0Y4zc2, _indentmYk1oQ8, _minColumnWidthk9cKHTF)
		const __argsHCytvmu = []
		const __nameTrUCL1F = 5.958732134306885;
		const __aliasesrNQ297h = {
		
	}
		const _optionsMnub47w = {
		
	}
		const _cmdt0mbGaa = {
			"_args": __argsHCytvmu,
		"_name": __nameTrUCL1F,
		"_aliases": __aliasesrNQ297h,
		"options": _optionsMnub47w
	}
		const _returnValuekkIdspG = await _Helpp1aUnN.subcommandTerm(_cmdt0mbGaa)
		const _returnValuebq1TOPL = 8.502801309422132;
		const _returnValueCLW8Lof = () => { return _returnValuebq1TOPL };
		const _descriptionq3NggGx = () => { return _returnValueCLW8Lof };
		const _cmdFrOC8V = {
			"description": _descriptionq3NggGx
	}
		const _returnValuebY53EGv = await _Helpp1aUnN.commandDescription(_cmdFrOC8V)
		const _cmdDqFfIan = true;
		const _returnValuebLob6D = true;
		const _visibleArgumentsz0HshcP = () => { return _returnValuebLob6D };
		const _returnValueowJ2Lm = null;
		const _argumentTermfKBy4t3 = () => { return _returnValueowJ2Lm };
		const _helperUITK5S = {
			"visibleArguments": _visibleArgumentsz0HshcP,
		"argumentTerm": _argumentTermfKBy4t3
	}
		const _returnValuevIkWBc4 = await _Helpp1aUnN.longestArgumentTermLength(_cmdDqFfIan, _helperUITK5S)
	});

	it('test for Help', async () => {
		const _HelpqdqkIHR = new Help()
		const _returnValueI5PHzk = null;
		const _matchIYsOBzH = () => { return _returnValueI5PHzk };
		const _returnValueKzKooFS = 4.6012735676824015;
		const _substrOlo45H = () => { return _returnValueKzKooFS };
		const _strUHyX2xv = {
			"match": _matchIYsOBzH,
		"substr": _substrOlo45H
	}
		const _widthMaDFo5 = 7.644237625977112;
		const _indentz9mwtou = 1.6240617082004078;
		const _minColumnWidthANaAL8c = -2.760898387813093;
		const _returnValueE9u9iLF = await _HelpqdqkIHR.wrap(_strUHyX2xv, _widthMaDFo5, _indentz9mwtou, _minColumnWidthANaAL8c)
		const _returnValueP6oqis2 = "hVlID45DFjJEzUeiRH60hobFbxeCGSxYKGF4s38f";
		const _descriptionPUlP2kf = () => { return _returnValueP6oqis2 };
		const _cmdXu2t9ik = {
			"description": _descriptionPUlP2kf
	}
		const _returnValuefjqTNu8 = await _HelpqdqkIHR.subcommandDescription(_cmdXu2t9ik)
		const __nameufXrz7T = {
		
	}
		const __aliasesnyP1SoE = {
		
	}
		const _parentWL4omcu = {
		
	}
		const _returnValueNb9Sn7 = "aha4Sge50Sytk9PpG8f3EMCQRoG6JXn6vX";
		const _usageSdKvPhS = () => { return _returnValueNb9Sn7 };
		const _cmdbsHCKl = {
			"_name": __nameufXrz7T,
		"_aliases": __aliasesnyP1SoE,
		"parent": _parentWL4omcu,
		"usage": _usageSdKvPhS
	}
		const _returnValueQkz5jmw = await _HelpqdqkIHR.commandUsage(_cmdbsHCKl)
		const _returnValueIWtZXF = {
		
	}
		const _descriptionL1evS04 = () => { return _returnValueIWtZXF };
		const _cmdF0Fiada = {
			"description": _descriptionL1evS04
	}
		const _returnValueU0cuYr = await _HelpqdqkIHR.subcommandDescription(_cmdF0Fiada)
	});

	it('test for Help', async () => {
		const _HelpvdPdBtU = new Help()
		const _flagspR5lhgD = "h5Uhm5za6HwWe7cnvUfLv1SRqXPUhnahI78";
		const _optionzWMomr = {
			"flags": _flagspR5lhgD
	}
		const _returnValueS2uCkim = await _HelpvdPdBtU.optionTerm(_optionzWMomr)
		const _returnValueQMhbeSN = undefined;
		const _match2X8yLu = () => { return _returnValueQMhbeSN };
		const _returnValueXCFVwFp = true;
		const _substrEwqW6s = () => { return _returnValueXCFVwFp };
		const _strC7hQRC4 = {
			"match": _match2X8yLu,
		"substr": _substrEwqW6s
	}
		const _widthMA44M1 = -1.5290468240604262;
		const _indents93MqsN = -8.62606604152765;
		const _minColumnWidthmk6M837 = undefined;
		const _returnValueXZvmu9z = await _HelpvdPdBtU.wrap(_strC7hQRC4, _widthMA44M1, _indents93MqsN, _minColumnWidthmk6M837)
	});

	it('test for Help', async () => {
		const _HelpK9q6Rm4 = new Help()
		const _arrayValuezA6UhWD = null;
		const _arrayValuegX49mir = -1.6355903130056326;
		const _returnValueG9pa638 = undefined;
		const _returnValueBzEaK7s = () => { return _returnValueG9pa638 };
		const _arrayValueIAb0nOG = () => { return _returnValueBzEaK7s };
		const _argChoicesfWpwrU1 = [_arrayValuezA6UhWD, _arrayValuegX49mir, _arrayValueIAb0nOG]
		const _defaultValueeGyX7Tk = undefined;
		const _defaultValueDescription8w8jHj = undefined;
		const _descriptionlB6N1Jr = 5.771740399792186;
		const _argumentqzSaR1f = {
			"argChoices": _argChoicesfWpwrU1,
		"defaultValue": _defaultValueeGyX7Tk,
		"defaultValueDescription": _defaultValueDescription8w8jHj,
		"description": _descriptionlB6N1Jr
	}
		const _returnValueYfYtQ8g = await _HelpK9q6Rm4.argumentDescription(_argumentqzSaR1f)
		const _flagsCbtUQZJ = null;
		const _optionye8exqB = {
			"flags": _flagsCbtUQZJ
	}
		const _returnValueM2ZRG5w = await _HelpK9q6Rm4.optionTerm(_optionye8exqB)
		const _cmdP26mkQx = undefined;
		const _helpere1ZEWFl = -1.4779009161476981;
		const _returnValueH24LcDD = await _HelpK9q6Rm4.longestOptionTermLength(_cmdP26mkQx, _helpere1ZEWFl)
		const __argsKFCrA9x = {
		
	}
		const __namecRYI3N = 6.8946178536673095;
		const __aliasesRlnIxZb = "UwsFNVTvBO4eE1ORH4ySiTTfWaIW2QOLK3klSTRFfr4qmepHpchY3yElyB5aQ2ca1focQjw5xv3l12sBS941zdEyuxUJpjiF";
		const _optionsI3GNmWH = {
		
	}
		const _cmdi1O24s = {
			"_args": __argsKFCrA9x,
		"_name": __namecRYI3N,
		"_aliases": __aliasesRlnIxZb,
		"options": _optionsI3GNmWH
	}
		const _returnValuegTesQZd = await _HelpK9q6Rm4.subcommandTerm(_cmdi1O24s)
	});

	it('test for Help', async () => {
		const _HelpbcnwmgH = new Help()
		const _arrayValueN5ovsg8 = "Wyqvw9gIxT4y9PINeElkAyLhkSTyLdxFUZSGLGNpTN6OWR917MqHpdE3xsKax5K8JKT6iHTQr";
		const _arrayValueV9QqbvS = "JMN6YDff3BiTdVlS6Lphr1yRlaD";
		const _commandsfxVctJg = [_arrayValueN5ovsg8, _arrayValueV9QqbvS]
		const _returnValueYTRXxMn = undefined;
		const __hasImplicitHelpCommandTo8IJfP = () => { return _returnValueYTRXxMn };
		const __helpCommandnameAndArgsoLDk9H6 = {
		
	}
		const _returnValueMPZiv3W = 2.578659654666861;
		const _createCommandtSBvHXK = () => { return _returnValueMPZiv3W };
		const __helpCommandDescriptioniubYPPi = true;
		const _cmdqb9Vosi = {
			"commands": _commandsfxVctJg,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandTo8IJfP,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsoLDk9H6,
		"createCommand": _createCommandtSBvHXK,
		"_helpCommandDescription": __helpCommandDescriptioniubYPPi
	}
		const _returnValueyYLnrN6 = await _HelpbcnwmgH.visibleCommands(_cmdqb9Vosi)
		const _cmdlPm46K6 = null;
		const _returnValueJK2epWj = {
		
	}
		const _visibleOptionstEAOxfJ = () => { return _returnValueJK2epWj };
		const _returnValuecl7SgHE = undefined;
		const _optionTermK6izZ1L = () => { return _returnValuecl7SgHE };
		const _helperQD0JUBa = {
			"visibleOptions": _visibleOptionstEAOxfJ,
		"optionTerm": _optionTermK6izZ1L
	}
		const _returnValuemdPs5Ic = await _HelpbcnwmgH.longestOptionTermLength(_cmdlPm46K6, _helperQD0JUBa)
		const _returnValuey1gCdqW = -8.002886152431245;
		const _matchRGaCSxl = () => { return _returnValuey1gCdqW };
		const _returnValuewW6LNY = true;
		const _substrbsLw6Ew = () => { return _returnValuewW6LNY };
		const _strFJWVgBv = {
			"match": _matchRGaCSxl,
		"substr": _substrbsLw6Ew
	}
		const _widthyxJ8Va3 = -5.77092669038486;
		const _indentMwO7kPL = 6.679824815116319;
		const _minColumnWidthoWwqcu5 = 1.7445601354224358;
		const _returnValuek6NoH8h = await _HelpbcnwmgH.wrap(_strFJWVgBv, _widthyxJ8Va3, _indentMwO7kPL, _minColumnWidthoWwqcu5)
	});

	it('test for Help', async () => {
		const _HelpPgaZ05f = new Help()
		const _argChoicesUTGlag7 = []
		const _defaultValuemO8dk9I = 6.499579723265686;
		const _defaultValueDescriptionnv6ycYv = false;
		const _descriptionktHmgo = undefined;
		const _argumenttONfowg = {
			"argChoices": _argChoicesUTGlag7,
		"defaultValue": _defaultValuemO8dk9I,
		"defaultValueDescription": _defaultValueDescriptionnv6ycYv,
		"description": _descriptionktHmgo
	}
		const _returnValueNBRFlAI = await _HelpPgaZ05f.argumentDescription(_argumenttONfowg)
		const _flagsLS8PrwQ = {
		
	}
		const _optionvVtL8S = {
			"flags": _flagsLS8PrwQ
	}
		const _returnValueGdY1sH9 = await _HelpPgaZ05f.optionTerm(_optionvVtL8S)
		const _returnValuemDpB5L4 = "YLSMFyJl91NozznffNoW2v0yFSZYYw1ejms41VImxLaDZHvbVKYBjgRDrG2h6fh5ibKbd5OaL1r5kxgcxN1cpP4pcFDABjCU";
		const _descriptionpCkJH7K = () => { return _returnValuemDpB5L4 };
		const _cmdAzqUc6B = {
			"description": _descriptionpCkJH7K
	}
		const _returnValueVBj0KnX = await _HelpPgaZ05f.commandDescription(_cmdAzqUc6B)
	});

	it('test for Help', async () => {
		const _HelpP67Fyw1 = new Help()
		const _returnValueXTfeUG7 = "utX9mzplWqy2uYoB7BV5vsRpxg4OaXzcNz21jahDK7k0EmPgtls7hbS6zgXwIOK";
		const _arrayValuey7uBbr = () => { return _returnValueXTfeUG7 };
		const _optionsN64Z31M = [_arrayValuey7uBbr]
		const __hasHelpOptionk08BmVd = null;
		const _returnValuesHi7fQ5 = "bAeuCqilyoyhNZ89lULmcA";
		const _arrayValuekRqpHGt = () => { return _returnValuesHi7fQ5 };
		const _arrayValueCsXlo8o = []
		const __helpShortFlagDaHDUIN = [_arrayValuekRqpHGt, _arrayValueCsXlo8o]
		const _returnValueMsOBNd4 = []
		const __findOptiongrCmpfZ = () => { return _returnValueMsOBNd4 };
		const __helpLongFlagYKEjUf = undefined;
		const _returnValuenA6Rmv9 = undefined;
		const _createOptionBWvre3e = () => { return _returnValuenA6Rmv9 };
		const __helpDescriptionrxqvhS = "JLT1ztoZXvdcCUna5kd44QtYQPEbl1KxDU5JoC7n2lkmgWat6DNaeeKCVnhNKUfyUBOWxQBRU0q1RH1IHnSDEdKPH";
		const __helpFlagspHeIhSd = true;
		const _cmde2SnblG = {
			"options": _optionsN64Z31M,
		"_hasHelpOption": __hasHelpOptionk08BmVd,
		"_helpShortFlag": __helpShortFlagDaHDUIN,
		"_findOption": __findOptiongrCmpfZ,
		"_helpLongFlag": __helpLongFlagYKEjUf,
		"createOption": _createOptionBWvre3e,
		"_helpDescription": __helpDescriptionrxqvhS,
		"_helpFlags": __helpFlagspHeIhSd
	}
		const _returnValueEOQRMHq = await _HelpP67Fyw1.visibleOptions(_cmde2SnblG)
		const __argsDescriptionlLAmq4V = {
		
	}
		const __argsPOmXBET = {
		
	}
		const _cmduImXAOe = {
			"_argsDescription": __argsDescriptionlLAmq4V,
		"_args": __argsPOmXBET
	}
		const _returnValuexcBC402 = await _HelpP67Fyw1.visibleArguments(_cmduImXAOe)
		const _cmdg2KujC1 = -9.916698938071207;
		const _sortSubcommandsvysWpQw = "Woj86CMnRBE6k9TojtT0jjDNBcIetsCmpmEXxuPE1hKpsuRYr7rhR7lOswTV9lsRCIJVsx4shwJTqgMtNkDYBxhaX6";
		const _returnValuehmxWcui = null;
		const _subcommandTermKZuDI4p = () => { return _returnValuehmxWcui };
		const _helperoxkibBu = {
			"sortSubcommands": _sortSubcommandsvysWpQw,
		"subcommandTerm": _subcommandTermKZuDI4p
	}
		const _returnValueu7tmAR = await _HelpP67Fyw1.longestSubcommandTermLength(_cmdg2KujC1, _helperoxkibBu)
		const _cmdgnAlLf7 = null;
		const _returnValueyhOFmDa = undefined;
		const _visibleOptionsupIElFB = () => { return _returnValueyhOFmDa };
		const _arrayValuegnCDRL = 2.906381906489308;
		const _arrayValueRvTukG8 = null;
		const _arrayValuehJlVPw4 = undefined;
		const _arrayValueJg9583O = [_arrayValuegnCDRL, _arrayValueRvTukG8, _arrayValuehJlVPw4]
		const _arrayValueP8fNyBA = undefined;
		const _arrayValuesnTot2f = {
		
	}
		const _arrayValueFifrjTR = [_arrayValueJg9583O, _arrayValueP8fNyBA, _arrayValuesnTot2f]
		const _arrayValueEJfJFd0 = 6.762435821944717;
		const _arrayValues5Se4dD = [_arrayValueFifrjTR, _arrayValueEJfJFd0]
		const _arrayValueWwdVHtx = 5.357173097995842;
		const _returnValuetMmcSQ6 = [_arrayValues5Se4dD, _arrayValueWwdVHtx]
		const _optionTermX6oecOf = () => { return _returnValuetMmcSQ6 };
		const _helpern33443K = {
			"visibleOptions": _visibleOptionsupIElFB,
		"optionTerm": _optionTermX6oecOf
	}
		const _returnValuexNBRUUk = await _HelpP67Fyw1.longestOptionTermLength(_cmdgnAlLf7, _helpern33443K)
	});
})