export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helprq4WL8N = new Help()
		const _cmdioc9wBw = {
		
	}
		const _sortSubcommandsy1M4CdM = []
		const _returnValueHIM3ULQ = undefined;
		const _subcommandTermowsGWVD = () => { return _returnValueHIM3ULQ };
		const _helperJiBQp6X = {
			"sortSubcommands": _sortSubcommandsy1M4CdM,
		"subcommandTerm": _subcommandTermowsGWVD
	}
		const _returnValueySFZWGo = await _Helprq4WL8N.formatHelp(_cmdioc9wBw, _helperJiBQp6X)
		const _cmdaIqGGo = true;
		const _returnValueiaHssku = false;
		const _visibleArgumentsTtdd0t4 = () => { return _returnValueiaHssku };
		const _returnValuekIJMjk1 = false;
		const _argumentTermESOzJUV = () => { return _returnValuekIJMjk1 };
		const _helperdqESZYc = {
			"visibleArguments": _visibleArgumentsTtdd0t4,
		"argumentTerm": _argumentTermESOzJUV
	}
		const _returnValuePXuNfUu = await _Helprq4WL8N.longestArgumentTermLength(_cmdaIqGGo, _helperdqESZYc)
		const _returnValuerBtooXZ = 6.716818825519152;
		const _returnValueHALyaGM = () => { return _returnValuerBtooXZ };
		const _sliced9bZGK2 = () => { return _returnValueHALyaGM };
		const _nameBDtMYqy = {
			"slice": _sliced9bZGK2
	}
		const _descriptionDWRVNa5 = undefined;
		const _cmdG65hkIP = new Argument(_nameBDtMYqy, _descriptionDWRVNa5)
		const _returnValuedNyDa29 = await _cmdG65hkIP.argRequired()
		const _arrayValueFWE0fDp = "n6OTe4Qd8uhgh1KqrOLN1ynfb2LyBeNVrrdE";
		const _returnValue4o8O5f = [_arrayValueFWE0fDp]
		const _includesR9uw3Z = () => { return _returnValue4o8O5f };
		const _returnValue3vA4Wx = undefined;
		const _joinYZRv8DT = () => { return _returnValue3vA4Wx };
		const _valuesn0fEQZS = {
			"includes": _includesR9uw3Z,
		"join": _joinYZRv8DT
	}
		const _returnValueBHmDMPZ = await _cmdG65hkIP.choices(_valuesn0fEQZS)
		const _returnValuegbdZ1gv = await _cmdG65hkIP.name()
		const _valueCAqpxEg = null;
		const _concatJNmi8bB = {
		
	}
		const _previousEJcfDzF = {
			"concat": _concatJNmi8bB
	}
		const _returnValueweEg7z7 = await _cmdG65hkIP._concatValue(_valueCAqpxEg, _previousEJcfDzF)
		const _returnValuei5DKCee = await _Helprq4WL8N.subcommandDescription(_cmdG65hkIP)
		const _returnValuerG5UrN7 = "Bxk3r4a6scKl1qJzfKFys1hypRTOlcrqkQvlfm3evQEjV1WFrD5xTaxRqit1SExAQhDg6OQenZ8i7j";
		const _optionwvnj2b7 = () => { return _returnValuerG5UrN7 };
		const _returnValuewui9N9x = await _Helprq4WL8N.optionDescription(_optionwvnj2b7)
	});

	it('test for Help', async () => {
		const _Helps71XZDt = new Help()
		const _cmdPbHiK4E = []
		const _helperJyhK3B2 = new Help()
		const _arrayValuecpsiA7U = undefined;
		const _arrayValueHE9VZK = {
		
	}
		const _arrayValuezFdTS5E = undefined;
		const _arrayValuejAnuhHt = -9.986962565834295;
		const _arrayValuetSCYA3Y = "hJQSPHKhE4z4pDVyr6HD1a4sun5KXVjcXgNxyibLTt9X4tYEU";
		const _arrayValueEi1gBs = [_arrayValueHE9VZK, _arrayValuezFdTS5E, _arrayValuejAnuhHt, _arrayValuetSCYA3Y]
		const _arrayValueo7QZeZ3 = undefined;
		const _nameap3EZIi = [_arrayValuecpsiA7U, _arrayValueEi1gBs, _arrayValueo7QZeZ3]
		const _descriptionhXCShoP = -8.09286730455312;
		const _cmduZdAzig = new Argument(_nameap3EZIi, _descriptionhXCShoP)
		const _returnValueVkBSR6 = null;
		const _valueJQjFTN = () => { return _returnValueVkBSR6 };
		const _descriptionfVrl9dI = {
		
	}
		const _returnValueefGkKJl = await _cmduZdAzig.default(_valueJQjFTN, _descriptionfVrl9dI)
		const _valueGDMhJ7q = {
		
	}
		const _previousBgwyKm1 = []
		const _returnValueCa87u1a = await _cmduZdAzig._concatValue(_valueGDMhJ7q, _previousBgwyKm1)
		const _arrayValuent3HNYG = {
		
	}
		const _valuewMdqatQ = [_arrayValuent3HNYG]
		const _arrayValueDo0UpTw = false;
		const _returnValuesPEFBA = [_arrayValueDo0UpTw]
		const _previousOXvupWm = () => { return _returnValuesPEFBA };
		const _returnValuedHnwWpx = await _cmduZdAzig._concatValue(_valuewMdqatQ, _previousOXvupWm)
		const _valuetE8lu4C = {
		
	}
		const _arrayValueuG9kXYN = -3.5932335450697908;
		const _arrayValueUXEUOWy = null;
		const _returnValueCNYFGoX = undefined;
		const _returnValuem0fleez = () => { return _returnValueCNYFGoX };
		const _arrayValueh16xzvV = () => { return _returnValuem0fleez };
		const _arrayValueY5OPlPu = [_arrayValueuG9kXYN, _arrayValueUXEUOWy, _arrayValueh16xzvV]
		const _arrayValuez1tNRUp = null;
		const _previousnlNaCGG = [_arrayValueY5OPlPu, _arrayValuez1tNRUp]
		const _returnValueGra8TEi = await _cmduZdAzig._concatValue(_valuetE8lu4C, _previousnlNaCGG)
		const _returnValueu7dOWIv = await _helperJyhK3B2.subcommandDescription(_cmduZdAzig)
		const _arrayValueXkQAfWb = null;
		const _arrayValueXHLYJ6M = true;
		const _arrayValuexZHZLT3 = -4.824849355646187;
		const _flagsBhwaFH = [_arrayValueXkQAfWb, _arrayValueXHLYJ6M, _arrayValuexZHZLT3]
		const _arrayValuekiToStq = -4.406657938073454;
		const _arrayValueV2S1Cfs = {
		
	}
		const _descriptionafql7FI = [_arrayValuekiToStq, _arrayValueV2S1Cfs]
		const _option3WUfYM = new Option(_flagsBhwaFH, _descriptionafql7FI)
		const _returnValueWv9APoC = -5.731214395264549;
		const _includesPkgEus = () => { return _returnValueWv9APoC };
		const _arrayValuegQLS6i6 = 2.04635570493811;
		const _arrayValueJTxyTJ2 = null;
		const _arrayValuerlTFLo = [_arrayValuegQLS6i6, _arrayValueJTxyTJ2]
		const _returnValueEP7kML4 = [_arrayValuerlTFLo]
		const _returnValuecWfXwMh = () => { return _returnValueEP7kML4 };
		const _joinerEoYW = () => { return _returnValuecWfXwMh };
		const _valuesGepHnGv = {
			"includes": _includesPkgEus,
		"join": _joinerEoYW
	}
		const _returnValueBsKHMP = await _option3WUfYM.choices(_valuesGepHnGv)
		const _hideV7vnStp = true;
		const _returnValuegXJgQ07 = await _option3WUfYM.hideHelp(_hideV7vnStp)
		const _returnValueBmjcvxw = await _option3WUfYM.attributeName()
		const _returnValueWeO4wsD = await _helperJyhK3B2.optionTerm(_option3WUfYM)
		const _returnValueJaPzwVD = "EGQhewjBtaC9Cw251yXxWSQsqCe2v4m73ywRlD2mOsfiJgu8WRCwOgGGHZNT";
		const _includes8H0u1n = () => { return _returnValueJaPzwVD };
		const _flagsosooIl4 = {
			"includes": _includes8H0u1n
	}
		const _descriptionvtD66h5 = false;
		const _optionD8r0xCn = new Option(_flagsosooIl4, _descriptionvtD66h5)
		const _nameYjTVPi = undefined;
		const _returnValueqeiIQHP = await _optionD8r0xCn.env(_nameYjTVPi)
		const _returnValuef5gpQ61 = await _helperJyhK3B2.optionDescription(_optionD8r0xCn)
		const _cmda8eYXpR = 2.5340733500359;
		const _arrayValuejA3sjCD = undefined;
		const _arrayValueMDCdQP3 = false;
		const _returnValuekv2gL2V = "52dqE7upVu0nnV9qTz5xse9nPWXUKsOIKSptXL4ojpww8Y1ztOrNO1PCB5zi8HUzIcggOcbWeaLVAs1O8dIol";
		const _arrayValuezxn7yEv = () => { return _returnValuekv2gL2V };
		const _arrayValuefJs1fOS = undefined;
		const _arrayValueM3mrbDN = [_arrayValueMDCdQP3, _arrayValuezxn7yEv, _arrayValuefJs1fOS]
		const _arrayValueFs78UI3 = false;
		const _arrayValuegXKuOGC = -9.180252907150392;
		const _arrayValueKEHaAr6 = [_arrayValueM3mrbDN, _arrayValueFs78UI3, _arrayValuegXKuOGC]
		const _arrayValueRMRUxs = -5.675011804021935;
		const _arrayValuemNIUsZa = 3.9305995040890203;
		const _arrayValueS5aPguK = null;
		const _helperkwOKVL7 = [_arrayValuejA3sjCD, _arrayValueKEHaAr6, _arrayValueRMRUxs, _arrayValuemNIUsZa, _arrayValueS5aPguK]
		const _returnValueY5W0yfv = await _helperJyhK3B2.longestSubcommandTermLength(_cmda8eYXpR, _helperkwOKVL7)
		const _returnValuepQ1QwOw = await _Helps71XZDt.longestOptionTermLength(_cmdPbHiK4E, _helperJyhK3B2)
		const _namelsXChl7 = undefined;
		const _cmdAZZre5J = new Command(_namelsXChl7)
		const _lengthR6Zcsmi = "rTiilltXXjUPt5JdbNjkVpLDk3fRQL";
		const _receivedArgsZp54DLA = {
			"length": _lengthR6Zcsmi
	}
		const _returnValueqW1vg0z = await _cmdAZZre5J._excessArguments(_receivedArgsZp54DLA)
		const _keyr48XXbA = false;
		const _returnValuee8gM462 = await _cmdAZZre5J.getOptionValueSource(_keyr48XXbA)
		const _returnValueFRSSFWC = await _cmdAZZre5J._parseOptionsEnv()
		const _returnValue5KqggJ = true;
		const _nameasp8PA = () => { return _returnValue5KqggJ };
		const _attributeNameDfT2xPj = -7.075423334667892;
		const _defaultValuezsHGN5 = {
		
	}
		const _negateuK9lyQ = -8.0747704030783;
		const _arrayValueoDcNFlH = true;
		const _arrayValueaxAlgC = [_arrayValueoDcNFlH]
		const _arrayValueSUTwnpA = "27lPiSisoB6FErhSHvlp0WtHNgCxB4bXQwU8ltkgb";
		const _arrayValueQ6W9c9k = "wzBjJA7WgPHgXWFImLtEEmpevXxSdqvp571CiBtym";
		const _arrayValueUsdFTdK = undefined;
		const _arrayValue9ejUcL = [_arrayValueUsdFTdK]
		const _arrayValueGU4rZWd = {
		
	}
		const _arrayValueP6tVtvK = 2.431669231703852;
		const _arrayValuegHUWQcG = [_arrayValueQ6W9c9k, _arrayValue9ejUcL, _arrayValueGU4rZWd, _arrayValueP6tVtvK]
		const _optionalL3atOKO = [_arrayValueaxAlgC, _arrayValueSUTwnpA, _arrayValuegHUWQcG]
		const _requiredSmmd7f6 = undefined;
		const _longzrzfONK = {
		
	}
		const _parseArgQT64gwG = "1pJOyBVVfkqRXGXzVl6ZivjQjlFhwoqN3yxfLqQN6PtukOY6XfheNdIeJvOUY5ndcq";
		const _variadicY79JY40 = 9.361454461169401;
		const _returnValuedpfNhg = "J2Z8bIABK5jn79mEl8A2l2OyBuQSJQxHKMa2iS5Iwp0bhHjBfL5TABsECoHFTjHbukMiXA2G67";
		const __concatValueW6ZFrzt = () => { return _returnValuedpfNhg };
		const _arrayValuexqfQwme = null;
		const _arrayValueZIGRnQT = null;
		const _flagsLaqN3aI = [_arrayValuexqfQwme, _arrayValueZIGRnQT]
		const _envVarufbuNg = true;
		const _optionUfgYAU4 = {
			"name": _nameasp8PA,
		"attributeName": _attributeNameDfT2xPj,
		"defaultValue": _defaultValuezsHGN5,
		"negate": _negateuK9lyQ,
		"optional": _optionalL3atOKO,
		"required": _requiredSmmd7f6,
		"long": _longzrzfONK,
		"parseArg": _parseArgQT64gwG,
		"variadic": _variadicY79JY40,
		"_concatValue": __concatValueW6ZFrzt,
		"flags": _flagsLaqN3aI,
		"envVar": _envVarufbuNg
	}
		const _returnValuesDT6S6 = await _cmdAZZre5J.addOption(_optionUfgYAU4)
		const _returnValueGsOuuxY = await _Helps71XZDt.commandUsage(_cmdAZZre5J)
		const _returnValueevXFDDL = "TJNzgdrDN4A9RqfiDI72abs7";
		const _cmdDvyc4YP = () => { return _returnValueevXFDDL };
		const _returnValuehwZYxB1 = {
		
	}
		const _visibleArgumentsPRbPCK = () => { return _returnValuehwZYxB1 };
		const _returnValueZZ2bT0w = {
		
	}
		const _argumentTermz83uAP = () => { return _returnValueZZ2bT0w };
		const _helperXsZsAAV = {
			"visibleArguments": _visibleArgumentsPRbPCK,
		"argumentTerm": _argumentTermz83uAP
	}
		const _returnValueAsiRuSU = await _Helps71XZDt.longestArgumentTermLength(_cmdDvyc4YP, _helperXsZsAAV)
		const _cmdXVI4ds = false;
		const _helperO4yxNsv = new Help()
		const _argChoicesd8N9PfT = {
		
	}
		const _negateVjwfN8j = undefined;
		const _defaultValueNDv6Xyc = undefined;
		const _returnValue7og9Z5 = 2.083252479140734;
		const _defaultValueDescriptiondJB9uNE = () => { return _returnValue7og9Z5 };
		const _envVarttltjVJ = undefined;
		const _descriptionwfO7Fzm = null;
		const _optionY26V2z5 = {
			"argChoices": _argChoicesd8N9PfT,
		"negate": _negateVjwfN8j,
		"defaultValue": _defaultValueNDv6Xyc,
		"defaultValueDescription": _defaultValueDescriptiondJB9uNE,
		"envVar": _envVarttltjVJ,
		"description": _descriptionwfO7Fzm
	}
		const _returnValuevlNwW7p = await _helperO4yxNsv.optionDescription(_optionY26V2z5)
		const _cmdMl7nyp8 = -4.203971789624972;
		const _helper3uljip = "Ev7deEebltE6SQplb2xg5FF5VDJ27YR57lI7xk5UA";
		const _returnValueoPKRHkM = await _helperO4yxNsv.longestArgumentTermLength(_cmdMl7nyp8, _helper3uljip)
		const _returnValueu1MnPij = {
		
	}
		const _optionF974MiT = () => { return _returnValueu1MnPij };
		const _returnValuedABCtiK = await _helperO4yxNsv.optionTerm(_optionF974MiT)
		const _returnValueQNEdup = await _Helps71XZDt.padWidth(_cmdXVI4ds, _helperO4yxNsv)
	});

	it('test for Help', async () => {
		const _HelpWu951q = new Help()
		const _argChoicesAbxUI3y = {
		
	}
		const _negatebmllAxq = 1.4417963375892562;
		const _defaultValueM2vhuC8 = undefined;
		const _arrayValueQtXxOrm = -3.6628580164992606;
		const _defaultValueDescriptionrWq6Pm = [_arrayValueQtXxOrm]
		const _envVares8YRgD = undefined;
		const _descriptionfpKoDWg = false;
		const _optionEunjvGN = {
			"argChoices": _argChoicesAbxUI3y,
		"negate": _negatebmllAxq,
		"defaultValue": _defaultValueM2vhuC8,
		"defaultValueDescription": _defaultValueDescriptionrWq6Pm,
		"envVar": _envVares8YRgD,
		"description": _descriptionfpKoDWg
	}
		const _returnValue9C9SjK = await _HelpWu951q.optionDescription(_optionEunjvGN)
		const _cmd1ZSS0s = {
		
	}
		const _returnValueEIHSusS = {
		
	}
		const _helpergrE63CM = () => { return _returnValueEIHSusS };
		const _returnValueY1uoFeT = await _HelpWu951q.longestOptionTermLength(_cmd1ZSS0s, _helpergrE63CM)
		const _returnValuezOldUsJ = "6oVidiDMWwd4NioBPdofyb6QhwT117dg9xi8tI1hrcGqne1mCojuUkSSCFBkJBCHU1w8nIsasWQc3fmVxp9UFX";
		const _exitCodeBUExNrM = () => { return _returnValuezOldUsJ };
		const _codeXjebERt = undefined;
		const _arrayValuehKh7cCn = {
		
	}
		const _arrayValueiPNbxyK = undefined;
		const _messageCE73DNn = [_arrayValuehKh7cCn, _arrayValueiPNbxyK]
		const _argumentD2VsmLn = new CommanderError(_exitCodeBUExNrM, _codeXjebERt, _messageCE73DNn)
		const _returnValuekW6jLk9 = await _HelpWu951q.argumentTerm(_argumentD2VsmLn)
		const _argChoicespag2HbT = {
		
	}
		const _negatev3STP3B = false;
		const _defaultValuetp2EqQC = undefined;
		const _defaultValueDescriptionRojFDFg = false;
		const _envVarTBFPsES = undefined;
		const _descriptionToH6tTw = "jh6QNtMvY4ohLRSXBD472Wo2yuJCZixdpD3TiUBDnUdFh16S9t9kc5niJVuT0HfpRktC8DEYtuC3YFU6DRT1N8SAJdYO1K";
		const _optionSVOR6z = {
			"argChoices": _argChoicespag2HbT,
		"negate": _negatev3STP3B,
		"defaultValue": _defaultValuetp2EqQC,
		"defaultValueDescription": _defaultValueDescriptionRojFDFg,
		"envVar": _envVarTBFPsES,
		"description": _descriptionToH6tTw
	}
		const _returnValueOBotyOv = await _HelpWu951q.optionDescription(_optionSVOR6z)
		const _optionsT6ftgB = {
		
	}
		const __hasHelpOptionAmXzD4w = "Yn3FOAp3tw2Al5cxha";
		const _arrayValueNp5uk3l = 6.150721328250523;
		const _arrayValuelCj1L9S = 4.508889865478281;
		const _arrayValueNC8qgKd = "opg7IPwNucwjsYVTlqHDyQrFOYhYbTEd8bpuq6aNqKqeByAjcQzzSiKHdCnpjPDQR6lmU";
		const _arrayValuemymkeB2 = [_arrayValueNC8qgKd]
		const _arrayValuelqenTcP = [_arrayValueNp5uk3l, _arrayValuelCj1L9S, _arrayValuemymkeB2]
		const _arrayValuesvRwqM = null;
		const __helpShortFlagYZj4NQU = [_arrayValuelqenTcP, _arrayValuesvRwqM]
		const _returnValueZ8PK8dc = null;
		const __findOptionWkRWbwa = () => { return _returnValueZ8PK8dc };
		const __helpLongFlagU4yyOzC = undefined;
		const _returnValueNpnyLY = null;
		const _createOptionz98Tex = () => { return _returnValueNpnyLY };
		const _arrayValueCq3BCu4 = false;
		const __helpDescriptionrnztkA = [_arrayValueCq3BCu4]
		const __helpFlagsLdt2SAy = null;
		const _cmdG1lB7Qx = {
			"options": _optionsT6ftgB,
		"_hasHelpOption": __hasHelpOptionAmXzD4w,
		"_helpShortFlag": __helpShortFlagYZj4NQU,
		"_findOption": __findOptionWkRWbwa,
		"_helpLongFlag": __helpLongFlagU4yyOzC,
		"createOption": _createOptionz98Tex,
		"_helpDescription": __helpDescriptionrnztkA,
		"_helpFlags": __helpFlagsLdt2SAy
	}
		const _returnValuecTXQD9n = await _HelpWu951q.visibleOptions(_cmdG1lB7Qx)
	});

	it('test for Help', async () => {
		const _HelpuYvZ2Mq = new Help()
		const __nameDXcIRge = "kD6m2KoN3JjPTdM";
		const __aliasesj4MsfD = {
		
	}
		const _parentlxhJES5 = {
		
	}
		const _returnValueyGdTw1d = true;
		const _usagepIa5M5L = () => { return _returnValueyGdTw1d };
		const _cmdqtubygI = {
			"_name": __nameDXcIRge,
		"_aliases": __aliasesj4MsfD,
		"parent": _parentlxhJES5,
		"usage": _usagepIa5M5L
	}
		const _returnValueBeDAtZZ = await _HelpuYvZ2Mq.commandUsage(_cmdqtubygI)
		const _returnValueDzddMBs = {
		
	}
		const _argumentjxxiuxM = () => { return _returnValueDzddMBs };
		const _returnValueWHY4zoX = await _HelpuYvZ2Mq.argumentTerm(_argumentjxxiuxM)
		const _cmdHNO6DSy = 9.2043601940345;
		const _helperYiUANkU = new Help()
		const _cmdn6wJJYa = "vQ70e4n2febgF4ywpkzuD18c1q4i1VaB82y6m52b83Hno4v";
		const _returnValueeGdFR7W = await _helperYiUANkU.visibleCommands(_cmdn6wJJYa)
		const _strJGC0RYY = "Aohka1Vj";
		const _widthQvvP9Sd = true;
		const _indentfz389ck = 3.1388559334882835;
		const _minColumnWidthc8QqRVF = -8.947442069387916;
		const _returnValuetY20nvV = await _helperYiUANkU.wrap(_strJGC0RYY, _widthQvvP9Sd, _indentfz389ck, _minColumnWidthc8QqRVF)
		const _returnValuenndmANQ = "dwztZkmHwnz2GiKefI6fapDrzT4WiJKxmOnfIsmlpwz77XNvtW9CTBUa";
		const _namecQAv64 = () => { return _returnValuenndmANQ };
		const _argumentEOa8cFi = {
			"name": _namecQAv64
	}
		const _returnValueC3u6tUm = await _helperYiUANkU.argumentTerm(_argumentEOa8cFi)
		const _nameDrVmILR = undefined;
		const _descriptioniNxep60 = "FVEhLFQxnIcQEeoIfo4S8ETHJwYxVLSVMdxPC1ws1dNqwZ2VdymGduPOVH6ezv4gJVHd";
		const _cmdSJPPjoU = new Argument(_nameDrVmILR, _descriptioniNxep60)
		const _fnqneBOF = undefined;
		const _returnValuetw2YXgG = await _cmdSJPPjoU.argParser(_fnqneBOF)
		const _valueWrrJoxG = {
		
	}
		const _descriptionk5xpkGu = undefined;
		const _returnValueUP60Dmq = await _cmdSJPPjoU.default(_valueWrrJoxG, _descriptionk5xpkGu)
		const _returnValueVuRdBCs = await _cmdSJPPjoU.argRequired()
		const _returnValueQo2W334 = await _cmdSJPPjoU.argRequired()
		const _returnValueiqwd7d0 = await _helperYiUANkU.commandDescription(_cmdSJPPjoU)
		const _returnValueB1DgA5I = await _HelpuYvZ2Mq.longestArgumentTermLength(_cmdHNO6DSy, _helperYiUANkU)
	});

	it('test for Help', async () => {
		const _HelpSwenix3 = new Help()
		const _cmdPCQkH4h = "XOj";
		const _returnValueZ6BlltY = await _HelpSwenix3.visibleArguments(_cmdPCQkH4h)
	});

	it('test for Help', async () => {
		const _HelpNHvrc2I = new Help()
		const _returnValuetldmDJe = true;
		const _cmduQ6k1Pc = () => { return _returnValuetldmDJe };
		const _returnValue6hdSi8 = await _HelpNHvrc2I.subcommandTerm(_cmduQ6k1Pc)
		const _arrayValueljXq4bn = null;
		const _arrayValueaWNTcr = [_arrayValueljXq4bn]
		const _arrayValueq5Bz6gb = -3.015176654022202;
		const _arrayValuesKhygNA = true;
		const _arrayValuenOFJRVu = undefined;
		const _arrayValueUuqwuRq = null;
		const _arrayValuewQqTnBW = "ecWcEEYnaWyxi3hOCz6YaW15QAS5T";
		const _arrayValueGUqL6W8 = [_arrayValuenOFJRVu, _arrayValueUuqwuRq, _arrayValuewQqTnBW]
		const _arrayValuetZ9bhCy = 8.64135111952799;
		const _arrayValueD6r81gS = undefined;
		const _returnValueP69AfMa = [_arrayValuesKhygNA, _arrayValueGUqL6W8, _arrayValuetZ9bhCy, _arrayValueD6r81gS]
		const _arrayValuei6o5eMD = () => { return _returnValueP69AfMa };
		const _arrayValueaGSFtsA = "p93eh9L9bDiDG9K8";
		const _arrayValueplCSYwz = false;
		const _arrayValueVs1XZUT = [_arrayValuei6o5eMD, _arrayValueaGSFtsA, _arrayValueplCSYwz]
		const _optioncPXPvJk = [_arrayValueaWNTcr, _arrayValueq5Bz6gb, _arrayValueVs1XZUT]
		const _returnValueWOvuNCB = await _HelpNHvrc2I.optionDescription(_optioncPXPvJk)
		const _returnValueh2X4iwL = "mx060ZuYhxBRiJ6X1RfU4DxHaAyOHAam7g";
		const _cmdhJ08VuH = () => { return _returnValueh2X4iwL };
		const _returnValueBNkxd6o = await _HelpNHvrc2I.visibleArguments(_cmdhJ08VuH)
	});

	it('test for Help', async () => {
		const _Helpv0Jaib = new Help()
		const _cmdXGC18x = false;
		const _helperWX6yBmP = "fWgJByyD9x5slgymIrE9r65UJXtU45T05";
		const _returnValueitj3flz = await _Helpv0Jaib.longestSubcommandTermLength(_cmdXGC18x, _helperWX6yBmP)
	});

	it('test for Help', async () => {
		const _HelpsYceKfu = new Help()
		const _cmdoMATxRz = "A29BUabWntVymXQ9L8h4EczrtlXGdHG7PzstEbnxpO6cID8Q";
		const _helperVgXpaxk = new Help()
		const _flagso5FQ0xZ = {
		
	}
		const _optionAFhILjM = {
			"flags": _flagso5FQ0xZ
	}
		const _returnValuekBNUS9E = await _helperVgXpaxk.optionTerm(_optionAFhILjM)
		const _optionssUWFgio = false;
		const __hasHelpOption5DRQQ1 = true;
		const __helpShortFlagJs82CXC = undefined;
		const _returnValuehbEPk3V = "6dwAsvSqzYKVkygTFdO4GzTjNYFZSfOV2O75IKc6J80LoWQiv7K755kLkAH7bNGLeR9pwNQSwGkkKxyr6XqYWySl8WKjb";
		const __findOption9hB6UP = () => { return _returnValuehbEPk3V };
		const _arrayValuexCs46LD = null;
		const _arrayValuecCg1eRo = true;
		const _arrayValueJh867C = [_arrayValuecCg1eRo]
		const __helpLongFlagGyFtfF = [_arrayValuexCs46LD, _arrayValueJh867C]
		const _returnValuetCZtc5u = undefined;
		const _createOptionk0BosR3 = () => { return _returnValuetCZtc5u };
		const __helpDescriptionZm7IPMM = -7.472719460235391;
		const __helpFlagsHJN4oED = "zJzQv";
		const _cmdxVPoIw = {
			"options": _optionssUWFgio,
		"_hasHelpOption": __hasHelpOption5DRQQ1,
		"_helpShortFlag": __helpShortFlagJs82CXC,
		"_findOption": __findOption9hB6UP,
		"_helpLongFlag": __helpLongFlagGyFtfF,
		"createOption": _createOptionk0BosR3,
		"_helpDescription": __helpDescriptionZm7IPMM,
		"_helpFlags": __helpFlagsHJN4oED
	}
		const _returnValuei6Z3zAg = await _helperVgXpaxk.visibleOptions(_cmdxVPoIw)
		const _arrayValuestHX13p = {
		
	}
		const _name91PWMi = [_arrayValuestHX13p]
		const _descriptionWoUtGr = {
		
	}
		const _cmdd2laPuY = new Argument(_name91PWMi, _descriptionWoUtGr)
		const _valuesB2UQgSU = "NFpe89cqoAbhHmYtTvPKoWbfOzaTvFmqGPQ9tU3";
		const _returnValueAiMQ87F = await _cmdd2laPuY.choices(_valuesB2UQgSU)
		const _arrayValuefqaJ8l = true;
		const _arrayValueR9LOUf8 = "9Plcb3nV8vrhGjxqL29zNzo9vT4r7sPoWiLZrFL86MHB1xqyLJ";
		const _returnValuehtvRCj3 = [_arrayValuefqaJ8l, _arrayValueR9LOUf8]
		const _includesB6LOSa = () => { return _returnValuehtvRCj3 };
		const _returnValuefY9yNTx = null;
		const _joinn1HQlo = () => { return _returnValuefY9yNTx };
		const _valuesm8RER1 = {
			"includes": _includesB6LOSa,
		"join": _joinn1HQlo
	}
		const _returnValuejtgd5P = await _cmdd2laPuY.choices(_valuesm8RER1)
		const _valueRCQpU7 = 1.9761851967985304;
		const _returnValueospJ5YE = 1.8885149843785136;
		const _previouszXD6Ew = () => { return _returnValueospJ5YE };
		const _returnValuerbH4LG9 = await _cmdd2laPuY._concatValue(_valueRCQpU7, _previouszXD6Ew)
		const _fnTvEHNWG = undefined;
		const _returnValueyQQYW4U = await _cmdd2laPuY.argParser(_fnTvEHNWG)
		const _returnValueMEdK5Hc = await _helperVgXpaxk.commandDescription(_cmdd2laPuY)
		const __nameoPmqciF = 0.6697708798051778;
		const __aliasesKvdaFMv = {
		
	}
		const _parentvZIMYjJ = "4ULN1W3g6vf";
		const _returnValuebLrrFyq = {
		
	}
		const _usaget2ZuFJo = () => { return _returnValuebLrrFyq };
		const _cmduBEOzln = {
			"_name": __nameoPmqciF,
		"_aliases": __aliasesKvdaFMv,
		"parent": _parentvZIMYjJ,
		"usage": _usaget2ZuFJo
	}
		const _returnValuehjknJRG = await _helperVgXpaxk.commandUsage(_cmduBEOzln)
		const _returnValuerPDEI8V = await _HelpsYceKfu.longestArgumentTermLength(_cmdoMATxRz, _helperVgXpaxk)
		const _cmdaGCOyLG = undefined;
		const _arrayValueazdiAF = undefined;
		const _arrayValuevEznq17 = null;
		const _arrayValueTO325At = null;
		const _arrayValueCX3CARL = [_arrayValuevEznq17, _arrayValueTO325At]
		const _arrayValueDSFGxaW = undefined;
		const _helperO1Z9mgD = [_arrayValueazdiAF, _arrayValueCX3CARL, _arrayValueDSFGxaW]
		const _returnValuezRjm0wB = await _HelpsYceKfu.longestArgumentTermLength(_cmdaGCOyLG, _helperO1Z9mgD)
		const _arrayValueN6syx6e = false;
		const _arrayValueGQUHM7 = "TYjo7CjMw4KJrBjkQ8tPoLgU9JknLmalyldKLQnDitme772hiLVZGDTvZCV0";
		const _arrayValuepFkde7A = undefined;
		const _cmdOvhjMT1 = [_arrayValueN6syx6e, _arrayValueGQUHM7, _arrayValuepFkde7A]
		const _returnValuelMWtZBL = {
		
	}
		const _longestOptionTermLengthEZnIIEq = () => { return _returnValuelMWtZBL };
		const _returnValuecwXRUSf = false;
		const _longestSubcommandTermLengthbFUYOT8 = () => { return _returnValuecwXRUSf };
		const _returnValueuXHJXHY = "4VZjgrE1UwH7A6drN8KaBlHCIFKhhWwmdcZ";
		const _longestArgumentTermLengthZhF0fgn = () => { return _returnValueuXHJXHY };
		const _helperW288MJ = {
			"longestOptionTermLength": _longestOptionTermLengthEZnIIEq,
		"longestSubcommandTermLength": _longestSubcommandTermLengthbFUYOT8,
		"longestArgumentTermLength": _longestArgumentTermLengthZhF0fgn
	}
		const _returnValuezM0Guu5 = await _HelpsYceKfu.padWidth(_cmdOvhjMT1, _helperW288MJ)
	});

	it('test for Help', async () => {
		const _HelpNPTAjdj = new Help()
		const _argumentFZIJIRG = "80SSxtfleT";
		const _returnValueoXmGLBA = await _HelpNPTAjdj.argumentTerm(_argumentFZIJIRG)
		const _cmdNxu6MBh = 3.0737893392321496;
		const _helperGDqKVpx = new Help()
		const _cmdRvVAN9v = undefined;
		const _returnValueMhLbOfT = undefined;
		const _visibleArgumentsUM5Bt7u = () => { return _returnValueMhLbOfT };
		const _returnValuegIZ3AC9 = "yhkjszBxJspD9BkiNQRGMGY9DTzVgLlBLDReH";
		const _argumentTermuKSEMmo = () => { return _returnValuegIZ3AC9 };
		const _helperKyyhsQk = {
			"visibleArguments": _visibleArgumentsUM5Bt7u,
		"argumentTerm": _argumentTermuKSEMmo
	}
		const _returnValuevrm8gw5 = await _helperGDqKVpx.longestArgumentTermLength(_cmdRvVAN9v, _helperKyyhsQk)
		const _returnValueFl7Ipv5 = 5.071314795342376;
		const _matchXJOBtV = () => { return _returnValueFl7Ipv5 };
		const _returnValueUgajiGU = undefined;
		const _substrZZr6AWI = () => { return _returnValueUgajiGU };
		const _strtDM4bqo = {
			"match": _matchXJOBtV,
		"substr": _substrZZr6AWI
	}
		const _widthyQ1Af8O = -4.564155755517238;
		const _indentuIbowfQ = 4.221291142873934;
		const _minColumnWidthfL7RIN0 = 1.1047416573474251;
		const _returnValueOd4Dld4 = await _helperGDqKVpx.wrap(_strtDM4bqo, _widthyQ1Af8O, _indentuIbowfQ, _minColumnWidthfL7RIN0)
		const _nameAXxxbk = false;
		const _cmdqVZn0Zt = new Command(_nameAXxxbk)
		const _arrayValueK5vjMv = "BA9JP93rrmSmxpYSwWg6qYOEcdgSubGcAet2V1fQ2uAR34CwDDHqbq89z4PD6jPeZfnI20lh42SQ9aUNmx5lTk";
		const _arrayValueLWllonm = undefined;
		const _arrayValueVXJs0bz = "Q7tOZ7dCmtCCFGK1FClUA3s0xHFhHJG20LABmiKTSMUTMLc44fIdDoX8XRhCgKS11";
		const _returnValueu9UJV3M = [_arrayValueK5vjMv, _arrayValueLWllonm, _arrayValueVXJs0bz]
		const _contextOptionsXJtpg3L = () => { return _returnValueu9UJV3M };
		const _returnValueObqKqzT = await _cmdqVZn0Zt.helpInformation(_contextOptionsXJtpg3L)
		const _flagsCX3Dysx = undefined;
		const _descriptionh7lg9LZ = "zHe0TpmGB1JCcEMWGJTOmq6vAdojnTaPOwQ8awHmBtCVTXLGuBpvthf7h13OmAqmvYRWm5StWOp2Uz";
		const _returnValueFwxutXL = await _cmdqVZn0Zt.createOption(_flagsCX3Dysx, _descriptionh7lg9LZ)
		const _flagsH6XOV8Z = "9QRnOQ4wbGysRkvKNJhT";
		const _optionZxMbWpt = {
			"flags": _flagsH6XOV8Z
	}
		const _returnValueOW8S4oG = await _cmdqVZn0Zt.optionMissingArgument(_optionZxMbWpt)
		const _returnValuesoZCE08 = "NJMVNr6MB4LMn";
		const _cmdPWTRN2I = () => { return _returnValuesoZCE08 };
		const _returnValuevJ81uh = 2.210576605859192;
		const _optsW9SyMjG = () => { return _returnValuevJ81uh };
		const _returnValuekHzJEYJ = await _cmdqVZn0Zt.addCommand(_cmdPWTRN2I, _optsW9SyMjG)
		const _returnValueBccpu8k = await _helperGDqKVpx.subcommandTerm(_cmdqVZn0Zt)
		const _returnValueVT3ZCyV = await _HelpNPTAjdj.padWidth(_cmdNxu6MBh, _helperGDqKVpx)
	});

	it('test for Help', async () => {
		const _HelpTMpEy4C = new Help()
		const _name39pSLb = "eQCX3qyOTGH2XDjb7jOCq6tvVtvawfiKOB7fJxiK";
		const _cmdvIKyK5 = new Command(_name39pSLb)
		const _strZTvFe20 = undefined;
		const _argsDescriptionvJ0DyyQ = undefined;
		const _returnValueulIqbWV = await _cmdvIKyK5.description(_strZTvFe20, _argsDescriptionvJ0DyyQ)
		const _returnValuexCyThW = await _HelpTMpEy4C.commandUsage(_cmdvIKyK5)
		const _arrayValuemI7MATQ = 9.588385669771526;
		const _arrayValueRYvAovp = "HYJR9jFwB1oc05X1lGr8aIrXxrawLfqYpS4QNvJtDrglmAgW1y8Xc2khGitK9";
		const _arrayValueErgzs5H = {
		
	}
		const _arrayValueBUkzGrg = undefined;
		const _returnValueVUe6Lq = [_arrayValuemI7MATQ, _arrayValueRYvAovp, _arrayValueErgzs5H, _arrayValueBUkzGrg]
		const _argumentFwPdCJs = () => { return _returnValueVUe6Lq };
		const _returnValueCDIR3Q1 = await _HelpTMpEy4C.argumentDescription(_argumentFwPdCJs)
	});

	it('test for Help', async () => {
		const _HelpST1eXiA = new Help()
		const _cmdKlqp9OE = false;
		const _helperNCblbgw = "auV1x8sSI";
		const _returnValuelPdAFoI = await _HelpST1eXiA.longestArgumentTermLength(_cmdKlqp9OE, _helperNCblbgw)
	});

	it('test for Help', async () => {
		const _HelpAiHZ2c = new Help()
		const _cmdWm3WgW2 = "TOBt1etjYTzADf8NsK4lRNxnvYRt1ocE7yCrt1N3LfVfPQcXmjkKInHySFBbnHj2hJxEJPFUy6qm4GCKG59AlP4QfRhjEU";
		const _returnValueCR2IiQE = "3XfXIybzQnQ0yemHWteC2C6alKy8zUnO9Tu96x05CJorG96gmQOqhx128BpIC6gRwWHF44oob";
		const _longestOptionTermLengthaTG8uuK = () => { return _returnValueCR2IiQE };
		const _returnValueQxBkGfz = false;
		const _longestSubcommandTermLengtho7g8FSn = () => { return _returnValueQxBkGfz };
		const _arrayValueVcgxGoL = []
		const _arrayValuebrdxJJD = false;
		const _returnValueHRY0V1b = [_arrayValueVcgxGoL, _arrayValuebrdxJJD]
		const _longestArgumentTermLengthf4Og9x = () => { return _returnValueHRY0V1b };
		const _helperwUZS6P = {
			"longestOptionTermLength": _longestOptionTermLengthaTG8uuK,
		"longestSubcommandTermLength": _longestSubcommandTermLengtho7g8FSn,
		"longestArgumentTermLength": _longestArgumentTermLengthf4Og9x
	}
		const _returnValuefw2bI4e = await _HelpAiHZ2c.padWidth(_cmdWm3WgW2, _helperwUZS6P)
		const _optionxCVZ1f0 = "o3rOf0tG5VuJg8hKilsIs3HhWtbdcyUbSptWZfWMzrcJQ7EU1ohNuByQSumsaPQturN4M9pfSW9Ve";
		const _returnValuePnxb8JU = await _HelpAiHZ2c.optionDescription(_optionxCVZ1f0)
	});

	it('test for Help', async () => {
		const _HelpKJqGL7I = new Help()
		const _nameSB5ZrMR = "5Yi5V3";
		const _descriptiony0fuHGy = {
		
	}
		const _argumentvnoiRq9 = new Argument(_nameSB5ZrMR, _descriptiony0fuHGy)
		const _valuesF8V2gnv = "QJabvQFsqsauVe54QxmoHRNEipQYdxywPwGmfCQcT5V4qsJ6uG34vgpF3LiJyTXqAup9aKV9elvzglv3OUtz";
		const _returnValuecg1GFw6 = await _argumentvnoiRq9.choices(_valuesF8V2gnv)
		const _returnValueNshPUbA = await _argumentvnoiRq9.argRequired()
		const _valueAdgBiIG = true;
		const _previousGzF8TxE = "erXisvTG83bTTZ3zDzJGuqWnSZE4TSBOwOYNPF7wCbIB8UyIehGLBEPbCiLjghE4ROC7jxDh";
		const _returnValueKA5414 = await _argumentvnoiRq9._concatValue(_valueAdgBiIG, _previousGzF8TxE)
		const _returnValueN3SZSdx = await _HelpKJqGL7I.argumentTerm(_argumentvnoiRq9)
		const _commandsrTaIHa4 = {
		
	}
		const _returnValueIj58EZG = null;
		const __hasImplicitHelpCommandwB7kpg7 = () => { return _returnValueIj58EZG };
		const __helpCommandnameAndArgsYDVj915 = {
		
	}
		const _returnValuedp8EUpJ = "Y3krcwzXTMCLF6PriuINwme5cU4ipnhSfZhwuWqs";
		const _createCommandFD5QWWF = () => { return _returnValuedp8EUpJ };
		const _returnValuea9qBhQp = undefined;
		const __helpCommandDescriptionSJz9Azj = () => { return _returnValuea9qBhQp };
		const _cmdUvgAcc6 = {
			"commands": _commandsrTaIHa4,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandwB7kpg7,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsYDVj915,
		"createCommand": _createCommandFD5QWWF,
		"_helpCommandDescription": __helpCommandDescriptionSJz9Azj
	}
		const _returnValueeyp9amo = await _HelpKJqGL7I.visibleCommands(_cmdUvgAcc6)
		const _arrayValueC839yw = {
		
	}
		const _arrayValueBrve3CD = undefined;
		const _argumentcYJXAwT = [_arrayValueC839yw, _arrayValueBrve3CD]
		const _returnValuegFSdE9i = await _HelpKJqGL7I.argumentDescription(_argumentcYJXAwT)
		const _cmdzCIQZUP = "J9f06RK8hCFA8SN9Qrz1arKmTv7LEMVljR3Rrp2qLzAETh4sb2hulxwzlYcZdtMijpXmBi4SBVUcHfFxSOs";
		const _returnValuetgHDTd2 = 0.2146497798201974;
		const _visibleArgumentsYBr87T = () => { return _returnValuetgHDTd2 };
		const _returnValueQ5ttgWU = undefined;
		const _argumentTermVjB3F9F = () => { return _returnValueQ5ttgWU };
		const _helperUkEWjuD = {
			"visibleArguments": _visibleArgumentsYBr87T,
		"argumentTerm": _argumentTermVjB3F9F
	}
		const _returnValueY6PQF0g = await _HelpKJqGL7I.longestArgumentTermLength(_cmdzCIQZUP, _helperUkEWjuD)
	});

	it('test for Help', async () => {
		const _HelpOQxMwy5 = new Help()
		const _nameOxbACah = undefined;
		const _cmdyIdjHp0 = new Command(_nameOxbACah)
		const _argf5LuGVq = []
		const _returnValuekN1nCSJ = await _cmdyIdjHp0._findOption(_argf5LuGVq)
		const _arrayValueMbEQbrV = -9.836832944680229;
		const _arrayValuesk9XYi5 = undefined;
		const _arrayValuexzOM9Ut = "8PjJuHoNbeDh1zIPUvTs1T7Wlk08draqF2mxGhmiWwKPAFvOxZqcaXCGkeOqRKgjEFydEiU2I8IYv22gdSW7fudKsPL4I";
		const _receivedArgsj269mSm = [_arrayValueMbEQbrV, _arrayValuesk9XYi5, _arrayValuexzOM9Ut]
		const _returnValueaFdwdp6 = await _cmdyIdjHp0._excessArguments(_receivedArgsj269mSm)
		const _returnValueV6RTFZi = await _cmdyIdjHp0._hasImplicitHelpCommand()
		const _returnValue0kDdxk = await _HelpOQxMwy5.subcommandTerm(_cmdyIdjHp0)
		const _cmdbLV8GuZ = null;
		const _returnValueYyGwE9Y = false;
		const _visibleOptionsQLeAn6q = () => { return _returnValueYyGwE9Y };
		const _returnValueijmKeQr = null;
		const _optionTermtmQjh6 = () => { return _returnValueijmKeQr };
		const _helperO0pPgWo = {
			"visibleOptions": _visibleOptionsQLeAn6q,
		"optionTerm": _optionTermtmQjh6
	}
		const _returnValueTO86MKJ = await _HelpOQxMwy5.longestOptionTermLength(_cmdbLV8GuZ, _helperO0pPgWo)
		const _arrayValuefKmxSlY = undefined;
		const _arrayValuehAnwvEk = false;
		const _returnValuei6fSNdi = "PZgiGACRI54wEy6TqEExTDPsFQD3XUcsoP";
		const _arrayValuesoPuD5W = () => { return _returnValuei6fSNdi };
		const _arrayValuedNjmbwT = [_arrayValuefKmxSlY, _arrayValuehAnwvEk, _arrayValuesoPuD5W]
		const _arrayValuelZm1P9c = "ETU29Rf";
		const _arrayValue8RycIU = "737UBaT1VaKawe38pUs3wYdd8Cd9u5jJyyNGlf94aS79hGG9LaY4A4rQQfLJ7PBx97p4Kwmp6PRVIJ0ulPj9XUlhDkI";
		const _cmdaMdqAy1 = [_arrayValuedNjmbwT, _arrayValuelZm1P9c, _arrayValue8RycIU]
		const _returnValueeETMAsv = await _HelpOQxMwy5.visibleOptions(_cmdaMdqAy1)
	});

	it('test for Help', async () => {
		const _Helpl4fVSP2 = new Help()
		const _cmdeSuHlzW = "0K2AQrecaFJs5ArrCGKkb1boevk2gypT5oPloOKgdwXJMmt4JBNXsIJpirK7XnU12AcYJR1Xh3Xa4kVUNiNadkSX4Ahq";
		const _returnValuehLTxA1R = await _Helpl4fVSP2.commandDescription(_cmdeSuHlzW)
		const _cmdqbRisdN = true;
		const _arrayValueC9IrSeU = null;
		const _arrayValuePVzLrZ = false;
		const _returnValueIezWqwr = [_arrayValueC9IrSeU, _arrayValuePVzLrZ]
		const _returnValuegr7ayQ = () => { return _returnValueIezWqwr };
		const _helperpWaaxB = () => { return _returnValuegr7ayQ };
		const _returnValueqVgGIRh = await _Helpl4fVSP2.padWidth(_cmdqbRisdN, _helperpWaaxB)
		const _arrayValueK8sZqFT = "B7qQCt";
		const _arrayValueyQ6cDSg = [_arrayValueK8sZqFT]
		const _arrayValuebOX2LNY = null;
		const _arrayValueaXXGS3 = false;
		const _arrayValuePhNdCPv = null;
		const _arrayValueHQqdO7m = [_arrayValueaXXGS3, _arrayValuePhNdCPv]
		const _arrayValueuk8h6z6 = [_arrayValueHQqdO7m]
		const _arrayValueZOK0CcI = undefined;
		const _arrayValueirZ1TKD = [_arrayValuebOX2LNY, _arrayValueuk8h6z6, _arrayValueZOK0CcI]
		const _arrayValueSomM3Yf = [_arrayValueyQ6cDSg, _arrayValueirZ1TKD]
		const _arrayValueTv0hErX = {
		
	}
		const _arrayValueYhY9SiE = "MNTYJMxbRTzW4wk62k23OdQAcnYhgyLMyV";
		const _arrayValueFQVLrTY = [_arrayValueYhY9SiE]
		const _cmdbOEYPQf = [_arrayValueSomM3Yf, _arrayValueTv0hErX, _arrayValueFQVLrTY]
		const _returnValuen09GxF5 = await _Helpl4fVSP2.subcommandTerm(_cmdbOEYPQf)
		const _cmdVIdmaX5 = false;
		const _arrayValuezyPiyd = 3.3123513182757787;
		const _arrayValuehrkyVST = null;
		const _returnValueTx02HGc = false;
		const _arrayValued9CeJ7r = () => { return _returnValueTx02HGc };
		const _arrayValuelvEidjP = "ceUn6mhaP";
		const _returnValuezVotIUH = null;
		const _arrayValuef8oIcye = () => { return _returnValuezVotIUH };
		const _arrayValueRh66Slw = [_arrayValued9CeJ7r, _arrayValuelvEidjP, _arrayValuef8oIcye]
		const _arrayValueZRNFmr = 2.888209869726115;
		const _arrayValuejdc454o = null;
		const _arrayValuewNwKe0 = undefined;
		const _arrayValueCNnkrIE = {
		
	}
		const _arrayValueYHQ4DdB = [_arrayValueZRNFmr, _arrayValuejdc454o, _arrayValuewNwKe0, _arrayValueCNnkrIE]
		const _sortSubcommandsbTIEeK = [_arrayValuezyPiyd, _arrayValuehrkyVST, _arrayValueRh66Slw, _arrayValueYHQ4DdB]
		const _returnValueXfF5x8Y = undefined;
		const _subcommandTermUrbKfpo = () => { return _returnValueXfF5x8Y };
		const _helperAbBOEgD = {
			"sortSubcommands": _sortSubcommandsbTIEeK,
		"subcommandTerm": _subcommandTermUrbKfpo
	}
		const _returnValueyAcDZT = await _Helpl4fVSP2.longestSubcommandTermLength(_cmdVIdmaX5, _helperAbBOEgD)
	});

	it('test for Help', async () => {
		const _Helpwxja0Ou = new Help()
		const _strfCeE2fB = "vK4N6AJn21m3JjUrHcbb7uTOjV4Ib3";
		const _widthKKVrZhH = 9.403856286918607;
		const _indentBEVXff7 = -1.588119499758493;
		const _minColumnWidthYSeRS7Q = {
		
	}
		const _returnValuejUBB36A = await _Helpwxja0Ou.wrap(_strfCeE2fB, _widthKKVrZhH, _indentBEVXff7, _minColumnWidthYSeRS7Q)
		const _arrayValueB0RRe9C = null;
		const _arrayValuewpUCURa = undefined;
		const _arrayValuekYz8abL = false;
		const _cmdLNGNaBz = [_arrayValueB0RRe9C, _arrayValuewpUCURa, _arrayValuekYz8abL]
		const _returnValuerwuOCI5 = await _Helpwxja0Ou.commandUsage(_cmdLNGNaBz)
		const _cmddt4dqD = "r6CdpcEaGlYFxEPQFot6BbIdpMcxEBOrndHFMCNIb05CBS";
		const _returnValueaE5WGq = undefined;
		const _visibleOptionsnwPwPLS = () => { return _returnValueaE5WGq };
		const _returnValuee83t3oy = "t6i4mHfgUV";
		const _optionTermHqTatZf = () => { return _returnValuee83t3oy };
		const _helperyJYgVkQ = {
			"visibleOptions": _visibleOptionsnwPwPLS,
		"optionTerm": _optionTermHqTatZf
	}
		const _returnValuetvBYQag = await _Helpwxja0Ou.longestOptionTermLength(_cmddt4dqD, _helperyJYgVkQ)
	});

	it('test for Help', async () => {
		const _Helpdldtrmv = new Help()
		const __argsDescriptionAl3AgAi = {
		
	}
		const __argsEpngUHQ = undefined;
		const _cmdWHGEQ9 = {
			"_argsDescription": __argsDescriptionAl3AgAi,
		"_args": __argsEpngUHQ
	}
		const _returnValueWuEpVEh = await _Helpdldtrmv.visibleArguments(_cmdWHGEQ9)
		const _cmdK5mvouZ = "O1Tc";
		const _returnValuefyrUioV = await _Helpdldtrmv.subcommandDescription(_cmdK5mvouZ)
	});

	it('test for Help', async () => {
		const _HelpBZWt4eF = new Help()
		const _argChoicesKnJF3C = {
		
	}
		const _negatejn70o3z = false;
		const _defaultValued5sEhFe = undefined;
		const _defaultValueDescriptionjbRvk9Z = -0.4389716393171934;
		const _envVarKdllZHP = undefined;
		const _descriptionzcRATJM = "LtKV8TW1rBv85Ht2F0z6Vs8E8fdr1unTXMAnVqqA1NcxEt7FWEUOG3RySLU7GxvKsow9jNoKOIfELb";
		const _optionA2fiZlY = {
			"argChoices": _argChoicesKnJF3C,
		"negate": _negatejn70o3z,
		"defaultValue": _defaultValued5sEhFe,
		"defaultValueDescription": _defaultValueDescriptionjbRvk9Z,
		"envVar": _envVarKdllZHP,
		"description": _descriptionzcRATJM
	}
		const _returnValueivW4Iwr = await _HelpBZWt4eF.optionDescription(_optionA2fiZlY)
		const _returnValuefCl9IYU = null;
		const _named6NcWz6 = () => { return _returnValuefCl9IYU };
		const _argumentYRRIyHX = {
			"name": _named6NcWz6
	}
		const _returnValuecdpavc7 = await _HelpBZWt4eF.argumentTerm(_argumentYRRIyHX)
	});

	it('test for Help', async () => {
		const _HelpPDnzu91 = new Help()
		const _namellA7d8t = null;
		const _cmdT2cyUsc = new Command(_namellA7d8t)
		const _allowExcess91Fj8E = false;
		const _returnValueaLynhQ = await _cmdT2cyUsc.allowExcessArguments(_allowExcess91Fj8E)
		const _returnValueXLUpFxu = await _HelpPDnzu91.visibleCommands(_cmdT2cyUsc)
		const _cmdPabK5rg = false;
		const _returnValuevhlV9Hk = await _HelpPDnzu91.commandDescription(_cmdPabK5rg)
		const _arrayValue8LTN8d = null;
		const _arrayValueoJjSH0T = undefined;
		const _returnValuebZ5BRxo = 7.349617748381402;
		const _arrayValuePqUjGa3 = () => { return _returnValuebZ5BRxo };
		const _arrayValueit0l6x9 = true;
		const _cmdi6cF1S6 = [_arrayValue8LTN8d, _arrayValueoJjSH0T, _arrayValuePqUjGa3, _arrayValueit0l6x9]
		const _returnValueSuQNhoj = await _HelpPDnzu91.visibleOptions(_cmdi6cF1S6)
		const _nameNTYwK1b = null;
		const _cmdsJ1XlXC = new Command(_nameNTYwK1b)
		const _keyQOXxvec = undefined;
		const _returnValueKtK2xC3 = await _cmdsJ1XlXC.getOptionValue(_keyQOXxvec)
		const _aliasesChsfBm6 = "eQwh9pl6b8UbBteJy2Fve7xeEclnsQ58Fj1mpLUh47bQ7Eucw3MVL7aLvO6oF2c8jlgBiW4e92ilupxK6RN";
		const _returnValueVOFYwDa = await _cmdsJ1XlXC.aliases(_aliasesChsfBm6)
		const _nameyjIWkEo = 4.121312703482333;
		const _returnValueVGin9Di = await _cmdsJ1XlXC.missingArgument(_nameyjIWkEo)
		const _returnValueh60F2mN = await _HelpPDnzu91.subcommandDescription(_cmdsJ1XlXC)
		const _flagsNM670SA = "zyR1Tlu1bkvCZ3irO";
		const _returnValueCni7QcN = undefined;
		const _descriptionjUIF54q = () => { return _returnValueCni7QcN };
		const _optionAQ1xKYd = new Option(_flagsNM670SA, _descriptionjUIF54q)
		const _returnValueeTtWtHJ = await _optionAQ1xKYd.attributeName()
		const _returnValueH1EkrCS = null;
		const _includesObCvPK = () => { return _returnValueH1EkrCS };
		const _returnValuebPHjY0B = false;
		const _joinamV1gZ9 = () => { return _returnValuebPHjY0B };
		const _valuesx48dMBc = {
			"includes": _includesObCvPK,
		"join": _joinamV1gZ9
	}
		const _returnValuefvcd9oW = await _optionAQ1xKYd.choices(_valuesx48dMBc)
		const _returnValuexCi2ofX = await _HelpPDnzu91.optionDescription(_optionAQ1xKYd)
	});

	it('test for Help', async () => {
		const _HelppgQbbD4 = new Help()
		const _returnValuemiV1YIj = false;
		const _matchpHOReVU = () => { return _returnValuemiV1YIj };
		const _returnValuenQRbfVF = true;
		const _substrO1nluan = () => { return _returnValuenQRbfVF };
		const _str1ggArj = {
			"match": _matchpHOReVU,
		"substr": _substrO1nluan
	}
		const _widthXPXVejk = 1.2499589180874047;
		const _indentURzV7vb = -2.6138121218144903;
		const _minColumnWidthNEXDD7l = 8.668952973046647;
		const _returnValueg518hg = await _HelppgQbbD4.wrap(_str1ggArj, _widthXPXVejk, _indentURzV7vb, _minColumnWidthNEXDD7l)
		const _flagsbmHpkp = "Buk1WsUURVE2UvXBnz641N1zqDBCdhPOT3V4ZPDRENCara1AOyRC3MgD8";
		const _optionjGwn35Z = {
			"flags": _flagsbmHpkp
	}
		const _returnValuerpvUWjM = await _HelppgQbbD4.optionTerm(_optionjGwn35Z)
	});

	it('test for Help', async () => {
		const _Helpni8Aftt = new Help()
		const _argChoicesiy7zLhb = {
		
	}
		const _arrayValuesaB7agd = null;
		const _arrayValueVZaHO0 = false;
		const _negate2FZiuC = [_arrayValuesaB7agd, _arrayValueVZaHO0]
		const _defaultValuexmgPWWf = undefined;
		const _defaultValueDescriptionbOr9sHm = 9.992677269466512;
		const _envVarT2hTadt = undefined;
		const _descriptionwY6hdJ = null;
		const _optionNiQ8h2L = {
			"argChoices": _argChoicesiy7zLhb,
		"negate": _negate2FZiuC,
		"defaultValue": _defaultValuexmgPWWf,
		"defaultValueDescription": _defaultValueDescriptionbOr9sHm,
		"envVar": _envVarT2hTadt,
		"description": _descriptionwY6hdJ
	}
		const _returnValueGSBPwAO = await _Helpni8Aftt.optionDescription(_optionNiQ8h2L)
		const _flagsN3mtcDu = "euhqWY2cO";
		const _descriptionGiss9oH = undefined;
		const _argumenty0FArqh = new Option(_flagsN3mtcDu, _descriptionGiss9oH)
		const _returnValueILjq1TJ = await _argumenty0FArqh.name()
		const _returnValueULsgMKO = await _argumenty0FArqh.attributeName()
		const _valuesm3iBsyx = undefined;
		const _returnValueMVJNSTM = await _argumenty0FArqh.choices(_valuesm3iBsyx)
		const _returnValueDQBDtkp = true;
		const _includes7ERSRS = () => { return _returnValueDQBDtkp };
		const _arrayValueGEjpTtP = {
		
	}
		const _arrayValueoyfOCu = undefined;
		const _arrayValueNP6C9t = [_arrayValueoyfOCu]
		const _arrayValuekAOZY6J = undefined;
		const _returnValueFhGCP6w = [_arrayValueGEjpTtP, _arrayValueNP6C9t, _arrayValuekAOZY6J]
		const _joinuEH2rY = () => { return _returnValueFhGCP6w };
		const _valuesFiDnjvJ = {
			"includes": _includes7ERSRS,
		"join": _joinuEH2rY
	}
		const _returnValueHjA247y = await _argumenty0FArqh.choices(_valuesFiDnjvJ)
		const _returnValue9VwxYR = await _Helpni8Aftt.argumentDescription(_argumenty0FArqh)
		const __argsLSBoB5Y = {
		
	}
		const __namef8zzyQ = 8.948401310819207;
		const __aliasesAKrfME = {
		
	}
		const _optionsGYjiCNx = {
		
	}
		const _cmdqywtX5l = {
			"_args": __argsLSBoB5Y,
		"_name": __namef8zzyQ,
		"_aliases": __aliasesAKrfME,
		"options": _optionsGYjiCNx
	}
		const _returnValueqedleXS = await _Helpni8Aftt.subcommandTerm(_cmdqywtX5l)
	});

	it('test for Help', async () => {
		const _HelpRd9Jz52 = new Help()
		const _arrayValueNFF1unB = {
		
	}
		const _arrayValueU26Rhir = true;
		const _arrayValueAwnmQJm = null;
		const _nameQRsZ8ac = [_arrayValueNFF1unB, _arrayValueU26Rhir, _arrayValueAwnmQJm]
		const _cmdrTudoov = new Command(_nameQRsZ8ac)
		const _aliasDD7cJGw = {
		
	}
		const _returnValuesHcpqgj = await _cmdrTudoov.alias(_aliasDD7cJGw)
		const _returnValuewpHYxUW = await _HelpRd9Jz52.commandUsage(_cmdrTudoov)
		const _arrayValuef2LIR9d = true;
		const _nameaSbPmQK = [_arrayValuef2LIR9d]
		const _descriptionwL3eZ9O = 7.882959957475034;
		const _argumentlAu5VMN = new Argument(_nameaSbPmQK, _descriptionwL3eZ9O)
		const _fnvB4YQ2 = undefined;
		const _returnValuetSU8a2 = await _argumentlAu5VMN.argParser(_fnvB4YQ2)
		const _returnValuen6sOKNI = await _argumentlAu5VMN.argRequired()
		const _returnValuezRfIdPZ = await _argumentlAu5VMN.argRequired()
		const _returnValueZjYdL5p = await _argumentlAu5VMN.argRequired()
		const _valuescZTczbB = undefined;
		const _returnValuemmjb837 = await _argumentlAu5VMN.choices(_valuescZTczbB)
		const _returnValuehvC98S = await _HelpRd9Jz52.argumentTerm(_argumentlAu5VMN)
		const _returnValuejscTfuj = {
		
	}
		const _cmdCMFiGl = () => { return _returnValuejscTfuj };
		const _returnValuex2aDdXE = await _HelpRd9Jz52.visibleCommands(_cmdCMFiGl)
	});

	it('test for Help', async () => {
		const _HelpwRoOxE3 = new Help()
		const _arrayValueS3dzSr = null;
		const _arrayValuehRkYmuK = null;
		const _arrayValueATCgGnw = undefined;
		const _optionXRYTE0e = [_arrayValueS3dzSr, _arrayValuehRkYmuK, _arrayValueATCgGnw]
		const _returnValuemMoq13 = await _HelpwRoOxE3.optionDescription(_optionXRYTE0e)
		const _returnValuehJJ7Vi6 = {
		
	}
		const _matchfNO3Vp3 = () => { return _returnValuehJJ7Vi6 };
		const _returnValuectXZ9Gq = "Zx66ZmE5ImOu9J4LkDeLDQLrl5eGUnEydf52g8nxJcvEiF";
		const _returnValuemDrDdnE = () => { return _returnValuectXZ9Gq };
		const _substrxgKwGRj = () => { return _returnValuemDrDdnE };
		const _strdg8hkoR = {
			"match": _matchfNO3Vp3,
		"substr": _substrxgKwGRj
	}
		const _widthFIHD6m0 = 6.951112349758187;
		const _indentsvbCjpD = -7.749565744953323;
		const _returnValuejGcsfoV = null;
		const _arrayValuexTVwt1 = () => { return _returnValuejGcsfoV };
		const _arrayValueLeYFJhy = undefined;
		const _arrayValueN4P6qHA = false;
		const _arrayValuekc4HYfK = [_arrayValueN4P6qHA]
		const _arrayValueB8TzS3g = -3.0088616115143063;
		const _arrayValueaJJKHt = [_arrayValueLeYFJhy, _arrayValuekc4HYfK, _arrayValueB8TzS3g]
		const _minColumnWidtheL4tOWV = [_arrayValuexTVwt1, _arrayValueaJJKHt]
		const _returnValueHO7XpyB = await _HelpwRoOxE3.wrap(_strdg8hkoR, _widthFIHD6m0, _indentsvbCjpD, _minColumnWidtheL4tOWV)
	});

	it('test for Help', async () => {
		const _HelpGExiJMY = new Help()
		const _cmdAxAt14 = undefined;
		const _helperiMNTvE8 = new Help()
		const _arrayValueeNMpspg = false;
		const _argChoicesmT9ELFr = [_arrayValueeNMpspg]
		const _defaultValuezRFwri = undefined;
		const _defaultValueDescriptionApJ7REI = "UpwxPfC1THbV";
		const _returnValueKLyh8rE = undefined;
		const _descriptionFz2ImD8 = () => { return _returnValueKLyh8rE };
		const _argumentMfeXzM0 = {
			"argChoices": _argChoicesmT9ELFr,
		"defaultValue": _defaultValuezRFwri,
		"defaultValueDescription": _defaultValueDescriptionApJ7REI,
		"description": _descriptionFz2ImD8
	}
		const _returnValueqDEr0R = await _helperiMNTvE8.argumentDescription(_argumentMfeXzM0)
		const _cmdvrn1MQg = null;
		const _arrayValueHAr6b8 = true;
		const _returnValueDAj9zUv = undefined;
		const _arrayValuejDvPbdv = () => { return _returnValueDAj9zUv };
		const _arrayValuevG58RYp = undefined;
		const _arrayValuejwKkOvG = null;
		const _arrayValuehMpPW0h = 1.4523720810688534;
		const _arrayValuey3rq0Mq = "89aVm7YQa6eUPOzRBvSAhoEyU364SqYEx";
		const _arrayValueSb9D4pv = "ryuY5KQ2o3qbIk";
		const _arrayValueR2926Yx = [_arrayValuehMpPW0h, _arrayValuey3rq0Mq, _arrayValueSb9D4pv]
		const _arrayValuekyjDkxX = []
		const _arrayValuexYQfC6U = [_arrayValuevG58RYp, _arrayValuejwKkOvG, _arrayValueR2926Yx, _arrayValuekyjDkxX]
		const _arrayValueWOvrR9 = [_arrayValuejDvPbdv, _arrayValuexYQfC6U]
		const _arrayValueCnswVm = undefined;
		const _arrayValueLgJoxRt = null;
		const _arrayValuebkMhyCL = [_arrayValueCnswVm, _arrayValueLgJoxRt]
		const _returnValuecCpjpjA = undefined;
		const _returnValuegtCY14l = () => { return _returnValuecCpjpjA };
		const _arrayValueBG2gbw4 = () => { return _returnValuegtCY14l };
		const _arrayValuePH2dz8r = [_arrayValueHAr6b8, _arrayValueWOvrR9, _arrayValuebkMhyCL, _arrayValueBG2gbw4]
		const _arrayValuefb34GHI = "RY9JR6UPYdWf1zwdU38wiyQATh";
		const _arrayValueNluQfX9 = "tYU5BwIKOH2vz7AF6OHu1ZaaiZLjkDMCMGIxQTef";
		const _sortSubcommandsfNCtZh = [_arrayValuePH2dz8r, _arrayValuefb34GHI, _arrayValueNluQfX9]
		const _arrayValueip2Bjky = 0.44766836423815093;
		const _arrayValuelP2h7LA = undefined;
		const _returnValueiVJ9omv = [_arrayValueip2Bjky, _arrayValuelP2h7LA]
		const _subcommandTermPWQsBHI = () => { return _returnValueiVJ9omv };
		const _helperrjJnhx = {
			"sortSubcommands": _sortSubcommandsfNCtZh,
		"subcommandTerm": _subcommandTermPWQsBHI
	}
		const _returnValuea3Rt00s = await _helperiMNTvE8.formatHelp(_cmdvrn1MQg, _helperrjJnhx)
		const _returnValuejW4Aatv = null;
		const _cmdDqhi7B = () => { return _returnValuejW4Aatv };
		const _helperohvE6z = 1.1664273878708968;
		const _returnValueioameQW = await _helperiMNTvE8.padWidth(_cmdDqhi7B, _helperohvE6z)
		const _option1IGmV3 = "fKlMjBH1DQth9fkaXhdDl0m67Ol0Qk4RpgQaKbEjTJEaHD61l8xqrvT8rZanP7AC5C6zHjfpT1AuUuAdhtxaST57Nmr1LP";
		const _returnValueReVKOQ5 = await _helperiMNTvE8.optionTerm(_option1IGmV3)
		const _returnValuexlPv38W = -4.2133390267180975;
		const _argumenth5U2Dg = () => { return _returnValuexlPv38W };
		const _returnValueExBKIvC = await _helperiMNTvE8.argumentTerm(_argumenth5U2Dg)
		const _returnValueAN2QyMK = await _HelpGExiJMY.longestArgumentTermLength(_cmdAxAt14, _helperiMNTvE8)
		const _cmdpca23X8 = "uUG4PQamKrr4NqRwRaBwCxm4d2lXJHLfYUF7GBUPQLVssGsGNS9n61qTjcoGmtOYabGwVwiNlP6hftfrhI";
		const _helperW7J2fIT = new Help()
		const _returnValueWzeP5sK = 6.354870893373274;
		const _cmdoNfBOHs = () => { return _returnValueWzeP5sK };
		const _returnValuejVOIiDj = await _helperW7J2fIT.visibleOptions(_cmdoNfBOHs)
		const _returnValueTzcofK4 = 1.892721161610746;
		const _includesRlpRHrb = () => { return _returnValueTzcofK4 };
		const _flagsjrW3vdR = {
			"includes": _includesRlpRHrb
	}
		const _arrayValueXqzEV0r = undefined;
		const _arrayValueYuNnD8W = {
		
	}
		const _descriptionzxhk2yA = [_arrayValueXqzEV0r, _arrayValueYuNnD8W]
		const _optionEqnt38V = new Option(_flagsjrW3vdR, _descriptionzxhk2yA)
		const _arrayValuelkSzGQ0 = true;
		const _nameskOAXj = [_arrayValuelkSzGQ0]
		const _returnValueYRatNYf = await _optionEqnt38V.env(_nameskOAXj)
		const _returnValuegJo3fD = await _helperW7J2fIT.optionTerm(_optionEqnt38V)
		const _cmdiAJnmgf = 3.700641637611648;
		const _returnValuegYrGW8I = "pioYOCLF2SK0BDNykWXBp7";
		const _helper1p6HV2 = () => { return _returnValuegYrGW8I };
		const _returnValue4GNkws = await _helperW7J2fIT.longestArgumentTermLength(_cmdiAJnmgf, _helper1p6HV2)
		const _returnValueSn1Ewp8 = await _HelpGExiJMY.formatHelp(_cmdpca23X8, _helperW7J2fIT)
	});

	it('test for Help', async () => {
		const _HelpoyoCzNR = new Help()
		const _arrayValueieoLcdr = false;
		const _arrayValuem7sacZ = false;
		const _arrayValuesRG52wK = "PXNBuLBUNGwfWX92XeYdqphBBM6MP5f2epaQt9ixNrBs6yXD8itpoFz";
		const _optionspYcwpN7 = [_arrayValueieoLcdr, _arrayValuem7sacZ, _arrayValuesRG52wK]
		const __hasHelpOptionNDxBvRt = false;
		const __helpShortFlagHSZtRlD = undefined;
		const _returnValueTniNuww = undefined;
		const __findOptionHz3qfCJ = () => { return _returnValueTniNuww };
		const _returnValuedWzTCtz = "AmcbMqRxZv898BUU";
		const _arrayValuevgZNgz3 = () => { return _returnValuedWzTCtz };
		const __helpLongFlagL6gNxg9 = [_arrayValuevgZNgz3]
		const _returnValuexpCn1e = "PGu4uMc7KylYUAVs6L4LoZAmEQDKyykHrXtBAn5c";
		const _createOptionwGjFWRX = () => { return _returnValuexpCn1e };
		const __helpDescriptionkwCWGTp = 4.9409021657607965;
		const __helpFlagspSPHLiV = "F8M38ofENA158nota44lRJvpshQHdufpEIdBSSgOHhtQnaQ2jXcUhcLBLQhPnlLbl";
		const _cmdO45UqGp = {
			"options": _optionspYcwpN7,
		"_hasHelpOption": __hasHelpOptionNDxBvRt,
		"_helpShortFlag": __helpShortFlagHSZtRlD,
		"_findOption": __findOptionHz3qfCJ,
		"_helpLongFlag": __helpLongFlagL6gNxg9,
		"createOption": _createOptionwGjFWRX,
		"_helpDescription": __helpDescriptionkwCWGTp,
		"_helpFlags": __helpFlagspSPHLiV
	}
		const _returnValueDswfQf = await _HelpoyoCzNR.visibleOptions(_cmdO45UqGp)
		const _arrayValueJCH6dzW = false;
		const _arrayValueBhoWVJB = undefined;
		const _optioniKaZa6 = [_arrayValueJCH6dzW, _arrayValueBhoWVJB]
		const _returnValuePYvYy5S = await _HelpoyoCzNR.optionTerm(_optioniKaZa6)
		const _nametsqMvhx = 0.9877418851387141;
		const _cmdSkI2rBt = new Command(_nametsqMvhx)
		const _errorTWEzMVV = undefined;
		const _commandrvaBFYo = false;
		const _contextOptionsdGwDAVL = {
			"error": _errorTWEzMVV,
		"command": _commandrvaBFYo
	}
		const _returnValuee3TM8rB = await _cmdSkI2rBt.help(_contextOptionsdGwDAVL)
		const _arrayValuecenYCd3 = "5qNZvUKYBvDBmO9xxym8TLUKVM2cCzrx4v36IjCzgE6TMXM2pw1IupTKwp6C7XUaY8BHmqYVS7F4hO";
		const _returnValuefOdGdAj = {
		
	}
		const _arrayValueuC40Jk4 = () => { return _returnValuefOdGdAj };
		const _arrayValueiFHe78s = null;
		const _positionlhN3rM = [_arrayValuecenYCd3, _arrayValueuC40Jk4, _arrayValueiFHe78s]
		const _returnValueDS6Ali2 = 7.837640109594332;
		const _textVjMUo9x = () => { return _returnValueDS6Ali2 };
		const _returnValues4ThVS5 = await _cmdSkI2rBt.addHelpText(_positionlhN3rM, _textVjMUo9x)
		const _returnValuelERgszr = await _cmdSkI2rBt.createHelp()
		const _returnValue6y7AuD = await _HelpoyoCzNR.subcommandTerm(_cmdSkI2rBt)
	});

	it('test for Help', async () => {
		const _HelpbrKJjbo = new Help()
		const _argChoicesAyweyK = {
		
	}
		const _negateLw8NzAy = true;
		const _defaultValueVu0PxyU = undefined;
		const _defaultValueDescriptionpDDCAvx = undefined;
		const _returnValueDI3GwzF = {
		
	}
		const _envVarl37akh0 = () => { return _returnValueDI3GwzF };
		const _descriptionHXSRate = undefined;
		const _optionlY1OZzv = {
			"argChoices": _argChoicesAyweyK,
		"negate": _negateLw8NzAy,
		"defaultValue": _defaultValueVu0PxyU,
		"defaultValueDescription": _defaultValueDescriptionpDDCAvx,
		"envVar": _envVarl37akh0,
		"description": _descriptionHXSRate
	}
		const _returnValueXpyGvQd = await _HelpbrKJjbo.optionDescription(_optionlY1OZzv)
		const _arrayValuefTbcrVe = "5yvK9QxTJ5qgtaHmJajOMygh9xxjJwjrMM54x5cZfnnKrsRfh9WqOC4nLNW18bYhiPv5w5jyFLgvwc";
		const _cmdiALpY63 = [_arrayValuefTbcrVe]
		const _returnValuepN00Bl5 = undefined;
		const _helperJDTnFe4 = () => { return _returnValuepN00Bl5 };
		const _returnValuezLT3K9F = await _HelpbrKJjbo.longestArgumentTermLength(_cmdiALpY63, _helperJDTnFe4)
	});

	it('test for Help', async () => {
		const _Helph2tstDh = new Help()
		const _optionhttQcC = "fx5";
		const _returnValueHmDV6oY = await _Helph2tstDh.optionTerm(_optionhttQcC)
		const _nameMIHctm = []
		const _descriptionLMRfudv = "UvsnhYDDOoKl5VuQpWRuvYZGbHB3gu89pyHohZOb1a7seufTdNMVHDh4DyMrQwq3U";
		const _argumentn1AN2Ou = new Argument(_nameMIHctm, _descriptionLMRfudv)
		const _arrayValueynzNgXy = 4.343944305967698;
		const _arrayValueaKtYTZm = null;
		const _valueqnfRMrZ = [_arrayValueynzNgXy, _arrayValueaKtYTZm]
		const _arrayValueGw4CJps = true;
		const _arrayValueifGur7q = null;
		const _previousDXew68K = [_arrayValueGw4CJps, _arrayValueifGur7q]
		const _returnValue9jdoGN = await _argumentn1AN2Ou._concatValue(_valueqnfRMrZ, _previousDXew68K)
		const _returnValuen4HK4hX = await _argumentn1AN2Ou.argRequired()
		const _valuerr5qXn = {
		
	}
		const _descriptionAFqDPMZ = undefined;
		const _returnValueQIK5iwa = await _argumentn1AN2Ou.default(_valuerr5qXn, _descriptionAFqDPMZ)
		const _fnAJbYeNm = undefined;
		const _returnValueB7HeMx = await _argumentn1AN2Ou.argParser(_fnAJbYeNm)
		const _returnValuedutOBO = await _Helph2tstDh.argumentDescription(_argumentn1AN2Ou)
		const _cmdwAeAhys = undefined;
		const _returnValueFPIOhVA = await _Helph2tstDh.subcommandDescription(_cmdwAeAhys)
		const _flagsEpuRe2Q = "UfQJHu19whcolZNE9iuVxnFXiKbmg2j7bJWBz0riQIUwiL3T91eq6dM9tz1zajufuEZz5rU5qMxLqyWoJcy7B2VpNyTbA";
		const _descriptionAxtTGx1 = 6.163938597583385;
		const _optionB0vomtB = new Option(_flagsEpuRe2Q, _descriptionAxtTGx1)
		const _returnValueHD9DySi = await _optionB0vomtB.attributeName()
		const _fnUMmJ53v = undefined;
		const _returnValueKySE1u = await _optionB0vomtB.argParser(_fnUMmJ53v)
		const _returnValueZdCJTnA = await _optionB0vomtB.attributeName()
		const _fnU35bMaS = undefined;
		const _returnValuetrgYDee = await _optionB0vomtB.argParser(_fnU35bMaS)
		const _returnValueMCkNRHY = await _Helph2tstDh.optionTerm(_optionB0vomtB)
	});

	it('test for Help', async () => {
		const _HelpxZ4ioF0 = new Help()
		const _arrayValuesLWeXza = -8.997891254515624;
		const _arrayValueFBWVWz4 = null;
		const _returnValuecGVVnhE = "5QwoH1cipbkeEjFhq371Lp6vB7lz851";
		const _arrayValueJaVj1nZ = () => { return _returnValuecGVVnhE };
		const _namerwITjj = [_arrayValuesLWeXza, _arrayValueFBWVWz4, _arrayValueJaVj1nZ]
		const _descriptionIbCTATJ = null;
		const _optionWMB45pw = new Argument(_namerwITjj, _descriptionIbCTATJ)
		const _returnValuekupH7mV = await _optionWMB45pw.name()
		const _returnValueE2wosRO = await _optionWMB45pw.argOptional()
		const _returnValueCWitvX = undefined;
		const _arrayValuelqzjFr9 = () => { return _returnValueCWitvX };
		const _arrayValuexek8YQ = null;
		const _arrayValueO7GL3mB = [_arrayValuelqzjFr9, _arrayValuexek8YQ]
		const _arrayValuePpRhaWO = 7.354443832844872;
		const _arrayValueXkU4iS7 = "fqWYPfQ0OSOKlZy0ovRMBBqy3iWYvtUb5h8wXT1DGBHaHplCa87XWepq3";
		const _arrayValueWDAjH3i = [_arrayValueO7GL3mB, _arrayValuePpRhaWO, _arrayValueXkU4iS7]
		const _arrayValueKoHWJFd = {
		
	}
		const _arrayValuevDahJqm = {
		
	}
		const _arrayValuecyRl2vX = null;
		const _returnValuedi2A6MP = [_arrayValuevDahJqm, _arrayValuecyRl2vX]
		const _arrayValue5FjKui = () => { return _returnValuedi2A6MP };
		const _arrayValueC4xKT7v = [_arrayValueKoHWJFd, _arrayValue5FjKui]
		const _arrayValueTZo6FIY = -5.062147193354901;
		const _arrayValuebEKtGF8 = undefined;
		const _arrayValuezlgiqOc = "1ShSFaRzEYn3pEc9Kvf4N9bDWuR2DdtmeyAdFD56CqrzOJxHJstL1";
		const _arrayValue1vnM53 = false;
		const _arrayValuew3qsqg = "VUKWYacVBKvi6cW6N4B5Y2yDBfORIinpx40r1XEbsGkXwaewzaPTMgJOlSis1gzn5CdQiY87ifPnfmyOjLEEyVbXIu";
		const _arrayValue1n5oAx = [_arrayValuezlgiqOc, _arrayValue1vnM53, _arrayValuew3qsqg]
		const _arrayValueIHncTll = false;
		const _arrayValuevWerwZi = [_arrayValue1n5oAx, _arrayValueIHncTll]
		const _arrayValueVTRU4Wf = [_arrayValueTZo6FIY, _arrayValuebEKtGF8, _arrayValuevWerwZi]
		const _valueo3QfQYP = [_arrayValueWDAjH3i, _arrayValueC4xKT7v, _arrayValueVTRU4Wf]
		const _returnValuehzS3apq = undefined;
		const _descriptionmXWjvHE = () => { return _returnValuehzS3apq };
		const _returnValueUr3aWEi = await _optionWMB45pw.default(_valueo3QfQYP, _descriptionmXWjvHE)
		const _valueDFgyeDb = true;
		const _returnValueuZ7QHU = -1.2933998013261245;
		const _concatqM2Nzs = () => { return _returnValueuZ7QHU };
		const _previousUX8Hwyp = {
			"concat": _concatqM2Nzs
	}
		const _returnValueSRkeyH4 = await _optionWMB45pw._concatValue(_valueDFgyeDb, _previousUX8Hwyp)
		const _returnValuegZA1479 = await _HelpxZ4ioF0.optionDescription(_optionWMB45pw)
		const _cmdZO2M7D = -5.81592963401023;
		const _arrayValuembXlqIA = undefined;
		const _arrayValueeK212jd = {
		
	}
		const _helperp6vzA2 = [_arrayValuembXlqIA, _arrayValueeK212jd]
		const _returnValueKZSJce3 = await _HelpxZ4ioF0.longestArgumentTermLength(_cmdZO2M7D, _helperp6vzA2)
		const _cmdZWL6oKi = undefined;
		const _sortSubcommandsGrkJrhF = "WWVOhPgv96nhC6DXSzPLnfPdIieOu6wOdmHlGbAnfpbP0OVUFiG9SzXeGWSppeNspDFKUYtbXxxosuejDczhxBKoNUj4Uv2A";
		const _returnValuenPcb5ZD = null;
		const _subcommandTerm5VUYeT = () => { return _returnValuenPcb5ZD };
		const _helperk9PvfrH = {
			"sortSubcommands": _sortSubcommandsGrkJrhF,
		"subcommandTerm": _subcommandTerm5VUYeT
	}
		const _returnValuecXBOM4w = await _HelpxZ4ioF0.formatHelp(_cmdZWL6oKi, _helperk9PvfrH)
		const _arrayValueUngLEIo = "RBmURnA4XSIIKqo9xCn6qP1TnXx5DsXyCIcPdqOy3fVEwyBOhpHbuTc5n9BVmqiCvaSyke";
		const _cmdE0yWel = [_arrayValueUngLEIo]
		const _returnValuew25MMtu = true;
		const _helpertPXcPgH = () => { return _returnValuew25MMtu };
		const _returnValueDhSR2Z = await _HelpxZ4ioF0.padWidth(_cmdE0yWel, _helpertPXcPgH)
		const _cmdDA0t6U = undefined;
		const _returnValueBlBFmXI = []
		const _longestOptionTermLengthZllbKYO = () => { return _returnValueBlBFmXI };
		const _returnValuelAh64On = undefined;
		const _longestSubcommandTermLengthPTFWHEN = () => { return _returnValuelAh64On };
		const _returnValuevMqi5Nb = undefined;
		const _longestArgumentTermLengthbzn0oq = () => { return _returnValuevMqi5Nb };
		const _helpereROGQVi = {
			"longestOptionTermLength": _longestOptionTermLengthZllbKYO,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPTFWHEN,
		"longestArgumentTermLength": _longestArgumentTermLengthbzn0oq
	}
		const _returnValuesKPrPXp = await _HelpxZ4ioF0.padWidth(_cmdDA0t6U, _helpereROGQVi)
	});

	it('test for Help', async () => {
		const _HelpvbnObl6 = new Help()
		const _arrayValuedNvfXN = "CCQFl";
		const _arrayValuelOwxySd = [_arrayValuedNvfXN]
		const _returnValuexIX0fXD = [_arrayValuelOwxySd]
		const _arrayValuecfGrKeX = () => { return _returnValuexIX0fXD };
		const _arrayValueM6KcxB = "HyusEbA8jqW";
		const _arrayValueCfUESvy = 4.655028221485871;
		const _returnValuei1IMY6H = undefined;
		const _arrayValueu2Sp1WT = () => { return _returnValuei1IMY6H };
		const _returnValuepWzfoAC = true;
		const _arrayValuegbwD02 = () => { return _returnValuepWzfoAC };
		const _arrayValueETTE4Gm = [_arrayValueu2Sp1WT, _arrayValuegbwD02]
		const _optionsw2ERjHZ = [_arrayValuecfGrKeX, _arrayValueM6KcxB, _arrayValueCfUESvy, _arrayValueETTE4Gm]
		const __hasHelpOptionK6XANra = "WqeMtj87hiKRzJBwKowV0RhYjDSgZPwEljcacKKEcD2mwQeGVneLtXCdaMvtsr4wMVu3eLRD6FWIM";
		const __helpShortFlagwa8YzUr = "zmfPFqGNaQGLXFCIWiF2LvV7SoTEtR3QQVMfL95eerRbpMOIXqYySL48V5b0T8rnIYSTq4y27xzvzsMDtXATGdMaEy";
		const _returnValuec2FDdul = undefined;
		const __findOptionZBT4Hi = () => { return _returnValuec2FDdul };
		const __helpLongFlags72c2ob = undefined;
		const _createOptionAKPAfqL = undefined;
		const __helpDescriptionUb18xY6 = "N3F8B34pGBn3Vu8syKmiPJR5pSDG0aFdYVti55xlsTad7uuQQ";
		const __helpFlags7g1DpR = {
		
	}
		const _cmdnQfgE7I = {
			"options": _optionsw2ERjHZ,
		"_hasHelpOption": __hasHelpOptionK6XANra,
		"_helpShortFlag": __helpShortFlagwa8YzUr,
		"_findOption": __findOptionZBT4Hi,
		"_helpLongFlag": __helpLongFlags72c2ob,
		"createOption": _createOptionAKPAfqL,
		"_helpDescription": __helpDescriptionUb18xY6,
		"_helpFlags": __helpFlags7g1DpR
	}
		const _returnValuehcKkZoK = await _HelpvbnObl6.visibleOptions(_cmdnQfgE7I)
		const _optionITCi4m = "BTvcD28UafWO0OLO9Fh5EHZYnOcWFARnGy266wzg4LUjM8NlsGy0IDxuXKf5bL";
		const _returnValuek7iqpWE = await _HelpvbnObl6.optionDescription(_optionITCi4m)
		const _arrayValuemf5YliM = {
		
	}
		const _arrayValuexgyViu = undefined;
		const _cmdwxVIslH = [_arrayValuemf5YliM, _arrayValuexgyViu]
		const _returnValueNTKVgFb = await _HelpvbnObl6.commandUsage(_cmdwxVIslH)
	});

	it('test for Help', async () => {
		const _HelpVlJSnP = new Help()
		const _returnValueuxqCDd1 = "N2VoMpizDyXPjmzO0sWRmGqc53yEq1mjaKNzpJhbcFGKyvzuaDNdSUXirUoh77GMik5i7pSEg1nMXbGiZxBsvEJnyAqTTrzE5dw";
		const _namesdahD6 = () => { return _returnValueuxqCDd1 };
		const _descriptionsuvUcQ = undefined;
		const _argumentRTK7Y5X = new Argument(_namesdahD6, _descriptionsuvUcQ)
		const _valueEDuWddQ = false;
		const _previousiR5YHa4 = {
		
	}
		const _returnValueOfL10Z = await _argumentRTK7Y5X._concatValue(_valueEDuWddQ, _previousiR5YHa4)
		const _returnValueGRsALSF = await _argumentRTK7Y5X.argOptional()
		const _returnValuew9xnajS = await _HelpVlJSnP.argumentDescription(_argumentRTK7Y5X)
		const _flags7vKInS = "NuIKvstueH";
		const _returnValueO28mTnY = -7.445109648579244;
		const _arrayValueSKWHzEH = () => { return _returnValueO28mTnY };
		const _arrayValueSYJFe66 = true;
		const _arrayValueF1p62i = [_arrayValueSKWHzEH, _arrayValueSYJFe66]
		const _arrayValueaGh4tMq = "YSjrzEJcoVwISj1LL7WS8udd9Ad1ezWjOG5bANs3dV2eOkRLbnopsgtBUYceCKNC8Ub4LihA";
		const _descriptionMX00alS = [_arrayValueF1p62i, _arrayValueaGh4tMq]
		const _cmdIv3CXbW = new Option(_flags7vKInS, _descriptionMX00alS)
		const _fnXIm21UV = undefined;
		const _returnValueVu2pOF = await _cmdIv3CXbW.argParser(_fnXIm21UV)
		const _returnValueyMzql5f = await _cmdIv3CXbW.name()
		const _valuegJjrZr9 = false;
		const _returnValuenKO1MBI = null;
		const _previousdeOWxue = () => { return _returnValuenKO1MBI };
		const _returnValueg9WLawd = await _cmdIv3CXbW._concatValue(_valuegJjrZr9, _previousdeOWxue)
		const _valuesnXKyD56 = "9x0fQwukYxonVG5JM3diABHS9T40EhdDPWb";
		const _returnValueUdksxXH = await _cmdIv3CXbW.choices(_valuesnXKyD56)
		const _mandatoryU9IkbtV = false;
		const _returnValueSbJgyo4 = await _cmdIv3CXbW.makeOptionMandatory(_mandatoryU9IkbtV)
		const _returnValuea5ccL6 = await _HelpVlJSnP.subcommandDescription(_cmdIv3CXbW)
		const _returnValuewC3ua3O = null;
		const _optionaeWACh8 = () => { return _returnValuewC3ua3O };
		const _returnValueQISf4hu = await _HelpVlJSnP.optionTerm(_optionaeWACh8)
		const _cmdeqCtv7I = null;
		const _returnValueeF0uvYH = null;
		const _longestOptionTermLengthB1Iw0O = () => { return _returnValueeF0uvYH };
		const _returnValueMRh5RUK = "F4zPlTMdYE59Y2E2Ow1GJpacTXGmT1gxL7jejojzgksWlpUsqRCoStkEHNh6eq";
		const _longestSubcommandTermLengthe4Oi5AZ = () => { return _returnValueMRh5RUK };
		const _returnValueKC6SwMY = "4UdQwH6JIPzTr3";
		const _longestArgumentTermLengthHmQpWRT = () => { return _returnValueKC6SwMY };
		const _helperw2nUvh4 = {
			"longestOptionTermLength": _longestOptionTermLengthB1Iw0O,
		"longestSubcommandTermLength": _longestSubcommandTermLengthe4Oi5AZ,
		"longestArgumentTermLength": _longestArgumentTermLengthHmQpWRT
	}
		const _returnValueiqKgega = await _HelpVlJSnP.padWidth(_cmdeqCtv7I, _helperw2nUvh4)
		const _returnValueyJ6wLCA = null;
		const _arrayValueR8ayrP9 = () => { return _returnValueyJ6wLCA };
		const _arrayValuedh89mmb = "UQDdmXXrQEgvjQceMSqdW76vDBeVtBumYak2bo9dcwLcVkCXrYA4dUfQTsSLlgv5OorX";
		const _arrayValuexvA3UDs = [_arrayValueR8ayrP9, _arrayValuedh89mmb]
		const _returnValueCvyhpr = [_arrayValuexvA3UDs]
		const _cmdpFnnTh = () => { return _returnValueCvyhpr };
		const _returnValueUmYOltr = await _HelpVlJSnP.subcommandDescription(_cmdpFnnTh)
	});
})