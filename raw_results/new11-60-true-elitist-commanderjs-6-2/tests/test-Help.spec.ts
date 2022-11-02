export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpiRRuq1 = new Help()
		const _returnValuewi3Hakl = "uqiNG3BrhjWVEMb2oeRmUv2FHxsyPX1YfpxX1it6Kji7NYqggtCZseni3CSyuegILDeTd1hRYiLPABabjVlIgBbMmcloS";
		const _descriptioniR2Vlw = () => { return _returnValuewi3Hakl };
		const _cmdAL726XR = {
			"description": _descriptioniR2Vlw
	}
		const _returnValueTG7kUvj = await _HelpiRRuq1.subcommandDescription(_cmdAL726XR)
		const __argsDescriptionGFXMf9Y = {
		
	}
		const __argsEiNJCux = {
		
	}
		const _cmd49sRjt = {
			"_argsDescription": __argsDescriptionGFXMf9Y,
		"_args": __argsEiNJCux
	}
		const _returnValuexwqZyVj = await _HelpiRRuq1.visibleArguments(_cmd49sRjt)
		const __argsDescriptionDVcnf1F = {
		
	}
		const __argsGcprVsL = {
		
	}
		const _cmdDOBDq94 = {
			"_argsDescription": __argsDescriptionDVcnf1F,
		"_args": __argsGcprVsL
	}
		const _returnValuezLmF67z = await _HelpiRRuq1.visibleArguments(_cmdDOBDq94)
	});

	it('test for Help', async () => {
		const _HelpZTCZFLN = new Help()
		const _flagsLxeDdxG = 1.3974791503689143;
		const _optionXIwJHzj = {
			"flags": _flagsLxeDdxG
	}
		const _returnValuexpiG8bq = await _HelpZTCZFLN.optionTerm(_optionXIwJHzj)
		const __argsqWjyWDP = {
		
	}
		const __nameBsSoOSP = -4.002903903913458;
		const __aliasesCuKYdlQ = {
		
	}
		const _optionsgfB52qV = {
		
	}
		const _cmd9LWMdB = {
			"_args": __argsqWjyWDP,
		"_name": __nameBsSoOSP,
		"_aliases": __aliasesCuKYdlQ,
		"options": _optionsgfB52qV
	}
		const _returnValuegsJMM1F = await _HelpZTCZFLN.subcommandTerm(_cmd9LWMdB)
	});

	it('test for Help', async () => {
		const _HelpazgvCRO = new Help()
		const _returnValuesOaoVfR = -2.5085753212917385;
		const _descriptionFlba1V = () => { return _returnValuesOaoVfR };
		const _cmdAWxfj1L = {
			"description": _descriptionFlba1V
	}
		const _returnValuend6hWzE = await _HelpazgvCRO.commandDescription(_cmdAWxfj1L)
	});

	it('test for Help', async () => {
		const _HelpdUftpMs = new Help()
		const _argChoicesdZFMQsp = {
		
	}
		const _negatet4bkNm = false;
		const _defaultValuefTHC0GW = undefined;
		const _defaultValueDescriptionO60HBcn = undefined;
		const _envVaraxjSPNQ = undefined;
		const _descriptionyHQzESj = "962y7GwlwPJ8BJXaW99kXplObfZ64AZTVKt7jl7XMxDyBEAzoKhp3goGPVEFt89oB";
		const _optionaeHOiIm = {
			"argChoices": _argChoicesdZFMQsp,
		"negate": _negatet4bkNm,
		"defaultValue": _defaultValuefTHC0GW,
		"defaultValueDescription": _defaultValueDescriptionO60HBcn,
		"envVar": _envVaraxjSPNQ,
		"description": _descriptionyHQzESj
	}
		const _returnValueG8CYq8t = await _HelpdUftpMs.optionDescription(_optionaeHOiIm)
		const _arrayValueCPzqylm = null;
		const _cmdiDyXhy1 = [_arrayValueCPzqylm]
		const _returnValueA4YLP6Q = "BwUBqPcsI28ePrF8iOAhvXjNRF4kx0ht7YdSol4Nw";
		const _arrayValuecGR5Mdb = () => { return _returnValueA4YLP6Q };
		const _arrayValuegMv7Mwg = "uXTQRRMcr4kB11x4XFmTVfYGVCAXqxBqKTd";
		const _returnValueeukIhGA = [_arrayValuecGR5Mdb, _arrayValuegMv7Mwg]
		const _visibleOptionsNsSgDm8 = () => { return _returnValueeukIhGA };
		const _returnValuebmxRcuJ = undefined;
		const _optionTermgJ2AWfr = () => { return _returnValuebmxRcuJ };
		const _helperEUQnOiR = {
			"visibleOptions": _visibleOptionsNsSgDm8,
		"optionTerm": _optionTermgJ2AWfr
	}
		const _returnValueJaYURt = await _HelpdUftpMs.longestOptionTermLength(_cmdiDyXhy1, _helperEUQnOiR)
	});

	it('test for Help', async () => {
		const _HelpOuXUJ8Q = new Help()
		const _cmdAsh5fi = undefined;
		const _returnValuewxe8MW = "tX6VY4n5MTI3EtK20RZJv43BYhssCo0YV8DceY5yyKyivfv2Ldx4R2twvabTz53AozRmsryNqXfIKFIrP";
		const _visibleOptionsQ1Dcvf9 = () => { return _returnValuewxe8MW };
		const _returnValueiby5Jkc = -6.056682982238526;
		const _optionTermaK2yXuO = () => { return _returnValueiby5Jkc };
		const _helperaHSZcrQ = {
			"visibleOptions": _visibleOptionsQ1Dcvf9,
		"optionTerm": _optionTermaK2yXuO
	}
		const _returnValueDrzZ7ym = await _HelpOuXUJ8Q.longestOptionTermLength(_cmdAsh5fi, _helperaHSZcrQ)
		const _cmd1li6tV = undefined;
		const _arrayValuedgJTopQ = null;
		const _arrayValueEQGBGq = "hNXLfqKUmtqQpuPKq3TxTHARYVkrn3S8iLDwK209uQg";
		const _arrayValuejuYdTfE = null;
		const _returnValueH9j1ueU = [_arrayValuedgJTopQ, _arrayValueEQGBGq, _arrayValuejuYdTfE]
		const _visibleArgumentsWiywD0 = () => { return _returnValueH9j1ueU };
		const _arrayValuefbZMyxS = 4.066408602334102;
		const _arrayValueWVsbK3W = 0.12780809515448688;
		const _arrayValuep4kqiVT = true;
		const _returnValueBQckNUC = [_arrayValuefbZMyxS, _arrayValueWVsbK3W, _arrayValuep4kqiVT]
		const _argumentTermvKMBmof = () => { return _returnValueBQckNUC };
		const _helperYt0P4Hp = {
			"visibleArguments": _visibleArgumentsWiywD0,
		"argumentTerm": _argumentTermvKMBmof
	}
		const _returnValueoAjeaQQ = await _HelpOuXUJ8Q.longestArgumentTermLength(_cmd1li6tV, _helperYt0P4Hp)
	});

	it('test for Help', async () => {
		const _HelpK15oCl8 = new Help()
		const _optionsQvgBaoP = {
		
	}
		const __hasHelpOptionmYKHqAH = false;
		const __helpShortFlagLdp8IT3 = false;
		const _returnValueAJPhk5 = true;
		const __findOptionSyfAkwV = () => { return _returnValueAJPhk5 };
		const __helpLongFlagDwsA0g9 = 4.727960676656126;
		const _returnValuer7YbJ4P = {
		
	}
		const _createOptionM3TyWS = () => { return _returnValuer7YbJ4P };
		const __helpDescriptionCLkngQ1 = undefined;
		const __helpFlagsAgBPddm = false;
		const _cmddS96odR = {
			"options": _optionsQvgBaoP,
		"_hasHelpOption": __hasHelpOptionmYKHqAH,
		"_helpShortFlag": __helpShortFlagLdp8IT3,
		"_findOption": __findOptionSyfAkwV,
		"_helpLongFlag": __helpLongFlagDwsA0g9,
		"createOption": _createOptionM3TyWS,
		"_helpDescription": __helpDescriptionCLkngQ1,
		"_helpFlags": __helpFlagsAgBPddm
	}
		const _returnValueK7GvqQh = await _HelpK15oCl8.visibleOptions(_cmddS96odR)
		const _arrayValue4DViE4 = "WolMrUY7pYxIAiTHhTTrQwS";
		const _cmdBvMRjh = [_arrayValue4DViE4]
		const _arrayValueCBPtgeq = null;
		const _arrayValueKDdIRDW = false;
		const _visibleArgumentsF541Uy = [_arrayValueCBPtgeq, _arrayValueKDdIRDW]
		const _returnValueE02Lxmp = null;
		const _argumentTermy3OZuIx = () => { return _returnValueE02Lxmp };
		const _helperZP1PVhP = {
			"visibleArguments": _visibleArgumentsF541Uy,
		"argumentTerm": _argumentTermy3OZuIx
	}
		const _returnValuecBcX8v = await _HelpK15oCl8.longestArgumentTermLength(_cmdBvMRjh, _helperZP1PVhP)
		const __argsDescriptioniuyU1kL = undefined;
		const __argsSMFEfMT = {
		
	}
		const _cmdZ7XROAb = {
			"_argsDescription": __argsDescriptioniuyU1kL,
		"_args": __argsSMFEfMT
	}
		const _returnValuehQqJwu5 = await _HelpK15oCl8.visibleArguments(_cmdZ7XROAb)
		const _optionsMFvWT1 = {
		
	}
		const __hasHelpOptionL7mNAyJ = true;
		const __helpShortFlagTRADAVS = 8.222685954116308;
		const _returnValuecOlsfVL = 5.670102958963694;
		const __findOptionw62Icoy = () => { return _returnValuecOlsfVL };
		const __helpLongFlagrqgWpOT = true;
		const _arrayValuekkbnIP = undefined;
		const _arrayValueOYexQJ = {
		
	}
		const _returnValuehp1TOUG = [_arrayValuekkbnIP, _arrayValueOYexQJ]
		const _createOptionU9kruKw = () => { return _returnValuehp1TOUG };
		const __helpDescriptionDGu6UVR = undefined;
		const _returnValuegEMiyMF = "tqCI9GOFrGTRYogFgVp7NXzr268ewBs19D4iO";
		const __helpFlagsunvuboU = () => { return _returnValuegEMiyMF };
		const _cmdkz28Eur = {
			"options": _optionsMFvWT1,
		"_hasHelpOption": __hasHelpOptionL7mNAyJ,
		"_helpShortFlag": __helpShortFlagTRADAVS,
		"_findOption": __findOptionw62Icoy,
		"_helpLongFlag": __helpLongFlagrqgWpOT,
		"createOption": _createOptionU9kruKw,
		"_helpDescription": __helpDescriptionDGu6UVR,
		"_helpFlags": __helpFlagsunvuboU
	}
		const _returnValueyR3sPjw = await _HelpK15oCl8.visibleOptions(_cmdkz28Eur)
	});

	it('test for Help', async () => {
		const _HelpD3PrsP = new Help()
		const _cmdpfcfxq9 = null;
		const _returnValues64v1YR = -2.8593895725129403;
		const _visibleArgumentsbP4sinJ = () => { return _returnValues64v1YR };
		const _arrayValuewkMmeyh = "yMdCLSj5Fbd6TDHRz4jIde9KyfUlPLDBVTDOkq3qxanSMWrGYAbDaRnAJym52Isq7PPQzOuncjIbjH2LXWD5dN";
		const _arrayValueOdOSGHE = undefined;
		const _arrayValueFMB4SAP = [_arrayValuewkMmeyh, _arrayValueOdOSGHE]
		const _returnValuex7WIPWL = [_arrayValueFMB4SAP]
		const _arrayValuePqXy6NC = () => { return _returnValuex7WIPWL };
		const _returnValueYVkYTc3 = [_arrayValuePqXy6NC]
		const _argumentTermapDIkiv = () => { return _returnValueYVkYTc3 };
		const _helper8dKrSV = {
			"visibleArguments": _visibleArgumentsbP4sinJ,
		"argumentTerm": _argumentTermapDIkiv
	}
		const _returnValueMyvEYHN = await _HelpD3PrsP.longestArgumentTermLength(_cmdpfcfxq9, _helper8dKrSV)
		const _returnValuerhfqCc = undefined;
		const _matchosrUXRF = () => { return _returnValuerhfqCc };
		const _returnValueW0MgeQx = false;
		const _substr31Aw7i = () => { return _returnValueW0MgeQx };
		const _strNROXSOO = {
			"match": _matchosrUXRF,
		"substr": _substr31Aw7i
	}
		const _widthYRJtLjT = -4.229572314545398;
		const _indentZdzftSY = -8.240337698876854;
		const _minColumnWidthRJAXXin = 6.128759215505106;
		const _returnValueHpL4nG4 = await _HelpD3PrsP.wrap(_strNROXSOO, _widthYRJtLjT, _indentZdzftSY, _minColumnWidthRJAXXin)
		const __argsDescriptionQUBv1IX = {
		
	}
		const _arrayValueEuPlIht = undefined;
		const _arrayValuehK3W3v = true;
		const _returnValueHegKQf9 = [_arrayValueEuPlIht, _arrayValuehK3W3v]
		const __argsXLKoH0i = () => { return _returnValueHegKQf9 };
		const _cmdViqKmDU = {
			"_argsDescription": __argsDescriptionQUBv1IX,
		"_args": __argsXLKoH0i
	}
		const _returnValuezcoNaG = await _HelpD3PrsP.visibleArguments(_cmdViqKmDU)
		const _returnValuewcdpOJg = {
		
	}
		const _descriptionctZbQZq = () => { return _returnValuewcdpOJg };
		const _cmdNtngESU = {
			"description": _descriptionctZbQZq
	}
		const _returnValueBlxylns = await _HelpD3PrsP.commandDescription(_cmdNtngESU)
	});

	it('test for Help', async () => {
		const _HelpuCgk84v = new Help()
		const _cmdrgV3Gp = undefined;
		const _sortSubcommandsgkFCwbd = null;
		const _arrayValuefdeZqys = 2.36068736052135;
		const _returnValue73F0HB = [_arrayValuefdeZqys]
		const _subcommandTermXBJTQBW = () => { return _returnValue73F0HB };
		const _helperWWvZ2eE = {
			"sortSubcommands": _sortSubcommandsgkFCwbd,
		"subcommandTerm": _subcommandTermXBJTQBW
	}
		const _returnValueNoSnYjO = await _HelpuCgk84v.formatHelp(_cmdrgV3Gp, _helperWWvZ2eE)
		const __namefdfBXyt = {
		
	}
		const _arrayValuexSx8kEv = -6.891166216021089;
		const _arrayValuejPBoFp = undefined;
		const __aliasesPfO9FhX = [_arrayValuexSx8kEv, _arrayValuejPBoFp]
		const _arrayValueukiNa1k = false;
		const _arrayValueMwDOE3P = -2.8601163479054756;
		const _arrayValueCSug1ba = "nYk6lGgF72txhbypoWNCB6gs66eDoSH3Ry4J5aZEkE4vCymptMd";
		const _arrayValueACCXDy1 = [_arrayValueMwDOE3P, _arrayValueCSug1ba]
		const _arrayValueusnMuMp = "ecXESqRYnMzirzWwRk";
		const _parentny9gpOz = [_arrayValueukiNa1k, _arrayValueACCXDy1, _arrayValueusnMuMp]
		const _returnValuer4OCpno = true;
		const _usageHGF6Ke = () => { return _returnValuer4OCpno };
		const _cmdH8cOyCl = {
			"_name": __namefdfBXyt,
		"_aliases": __aliasesPfO9FhX,
		"parent": _parentny9gpOz,
		"usage": _usageHGF6Ke
	}
		const _returnValueaOQYw3Q = await _HelpuCgk84v.commandUsage(_cmdH8cOyCl)
		const _cmdqQsLrce = null;
		const _sortSubcommandsLxrbCRe = null;
		const _arrayValueX8uH5qT = null;
		const _arrayValueGkbhYT = "3ovULjp6AIgk0wLfxRfGKffecXHn33KWVrlv6yfrUWyfNbILeO168ACUZbeBb5P6";
		const _arrayValueAvCkWg2 = "Zt8HDciMWvIYG9bUHTI37N2Pci2LFs9SpiVDgjJEe1U85Zc2h0zvSUPTIJM1LisetE3LamEtXfACSN";
		const _subcommandTermwfKIqW = [_arrayValueX8uH5qT, _arrayValueGkbhYT, _arrayValueAvCkWg2]
		const _helperIlY2g8s = {
			"sortSubcommands": _sortSubcommandsLxrbCRe,
		"subcommandTerm": _subcommandTermwfKIqW
	}
		const _returnValueeD9vmIl = await _HelpuCgk84v.formatHelp(_cmdqQsLrce, _helperIlY2g8s)
		const _cmdIENRQTU = "i9s5gWN9fNMp6YyWKjZeoDt4HjXviQAx1nsen7EEttjwFjQI2nqNfEQ2Ctd8g9EEKPxL";
		const _arrayValueCzJz3R8 = "zQUFp4X9dU3JmC94TA5vDXvazSPRh3ACWvkqct7IukqHYCzPJnENNaIvBFepgVJVN4";
		const _arrayValueZCK7pfV = undefined;
		const _returnValuerAQwazF = [_arrayValueCzJz3R8, _arrayValueZCK7pfV]
		const _longestOptionTermLengthnYxK6Vu = () => { return _returnValuerAQwazF };
		const _arrayValueNrTwN78 = "o03r";
		const _arrayValueVpYjCM6 = null;
		const _arrayValueOE6Pici = undefined;
		const _arrayValueDqW7jiF = null;
		const _returnValueF7n4mnl = [_arrayValueNrTwN78, _arrayValueVpYjCM6, _arrayValueOE6Pici, _arrayValueDqW7jiF]
		const _longestSubcommandTermLengthHEcwbi0 = () => { return _returnValueF7n4mnl };
		const _returnValueMfd4Q2S = null;
		const _longestArgumentTermLengthV2lwoRB = () => { return _returnValueMfd4Q2S };
		const _helperKhaHeHN = {
			"longestOptionTermLength": _longestOptionTermLengthnYxK6Vu,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHEcwbi0,
		"longestArgumentTermLength": _longestArgumentTermLengthV2lwoRB
	}
		const _returnValueJNGB91i = await _HelpuCgk84v.padWidth(_cmdIENRQTU, _helperKhaHeHN)
		const _cmdo5S56jl = null;
		const _returnValueXWe5EAq = await _HelpuCgk84v.visibleOptions(_cmdo5S56jl)
	});

	it('test for Help', async () => {
		const _HelpcBIoyjV = new Help()
		const _cmdbBUNhaH = "VQdLS5dCme0W5THMKQKJoBsPbdPy630zAQWSrIgL8C40xJJ7POmKOMz39J4T1dnBn";
		const _returnValuerImNsGa = false;
		const _longestOptionTermLengthcrXVZWa = () => { return _returnValuerImNsGa };
		const _returnValueeynq1Eg = true;
		const _longestSubcommandTermLengthnr9YS3q = () => { return _returnValueeynq1Eg };
		const _returnValueFBid0MI = -3.1930085422067664;
		const _longestArgumentTermLengthzfuAUqG = () => { return _returnValueFBid0MI };
		const _helperTEohRsV = {
			"longestOptionTermLength": _longestOptionTermLengthcrXVZWa,
		"longestSubcommandTermLength": _longestSubcommandTermLengthnr9YS3q,
		"longestArgumentTermLength": _longestArgumentTermLengthzfuAUqG
	}
		const _returnValueE3vSW0b = await _HelpcBIoyjV.padWidth(_cmdbBUNhaH, _helperTEohRsV)
		const _cmdZ4OaKI = "XTo6GPWP9D3quVO3Ae21W37RzPyjw5gLv4iHfa6nMl8NPI1nISS7d62JqzPmgsKPKCEZbawCfmth";
		const _returnValuexybKz9b = null;
		const _longestOptionTermLengthsAH77j3 = () => { return _returnValuexybKz9b };
		const _returnValuebjAHB38 = undefined;
		const _longestSubcommandTermLengthjxlvTWo = () => { return _returnValuebjAHB38 };
		const _returnValuelIWi2rT = "jlb5dP4ayX1P9fhbqQ93kQllVlWMVAAD9e3LwTtH4KX1ifdKYRFeJXeLdLvS4DM2RPjeOSYD5";
		const _longestArgumentTermLengthzr87I0H = () => { return _returnValuelIWi2rT };
		const _helperCOQPLJ7 = {
			"longestOptionTermLength": _longestOptionTermLengthsAH77j3,
		"longestSubcommandTermLength": _longestSubcommandTermLengthjxlvTWo,
		"longestArgumentTermLength": _longestArgumentTermLengthzr87I0H
	}
		const _returnValues0vjG3p = await _HelpcBIoyjV.padWidth(_cmdZ4OaKI, _helperCOQPLJ7)
	});

	it('test for Help', async () => {
		const _HelphTXbKU9 = new Help()
		const _arrayValuemHUB9uH = true;
		const _arrayValuexbTTpyA = false;
		const _arrayValueEk2xhPr = [_arrayValuexbTTpyA]
		const _arrayValueVrlaEB = null;
		const _arrayValuekBsDfnw = undefined;
		const _returnValueVls0VCL = [_arrayValuemHUB9uH, _arrayValueEk2xhPr, _arrayValueVrlaEB, _arrayValuekBsDfnw]
		const _nameEaaiZyX = () => { return _returnValueVls0VCL };
		const _argumentX2L6MXs = {
			"name": _nameEaaiZyX
	}
		const _returnValueKjLluAR = await _HelphTXbKU9.argumentTerm(_argumentX2L6MXs)
		const _optionsZ4MbqMB = {
		
	}
		const __hasHelpOptionoPDt7PG = null;
		const __helpShortFlagHwfQAR = -4.535028767872974;
		const _returnValueMZ2nOkb = null;
		const __findOptionesFQ5g = () => { return _returnValueMZ2nOkb };
		const __helpLongFlagrl5qwLk = 1.3992373595608587;
		const _returnValueV054Tu3 = "JL2awuv2XwwSm5b0JUWcKbhtqnj8LLmLh8q7OQaGY9DSG8q";
		const _createOptioncKsck0Z = () => { return _returnValueV054Tu3 };
		const __helpDescriptionFMCQVTY = undefined;
		const _arrayValuew5v8tMU = "R";
		const _arrayValueytxG4AV = [_arrayValuew5v8tMU]
		const _arrayValuev0K9s0r = null;
		const _arrayValueQ8kRZLk = [_arrayValuev0K9s0r]
		const __helpFlags96XNH0 = [_arrayValueytxG4AV, _arrayValueQ8kRZLk]
		const _cmdWtL1egv = {
			"options": _optionsZ4MbqMB,
		"_hasHelpOption": __hasHelpOptionoPDt7PG,
		"_helpShortFlag": __helpShortFlagHwfQAR,
		"_findOption": __findOptionesFQ5g,
		"_helpLongFlag": __helpLongFlagrl5qwLk,
		"createOption": _createOptioncKsck0Z,
		"_helpDescription": __helpDescriptionFMCQVTY,
		"_helpFlags": __helpFlags96XNH0
	}
		const _returnValuetSaqXc2 = await _HelphTXbKU9.visibleOptions(_cmdWtL1egv)
	});

	it('test for Help', async () => {
		const _HelpHrlRX0 = new Help()
		const _arrayValueUIqHYVZ = 5.389819510143862;
		const _arrayValuedBNkzyJ = {
		
	}
		const _arrayValuej7nkS9O = null;
		const _arrayValueqRtjC8B = -1.749880850045459;
		const _argumentHDVQWir = [_arrayValueUIqHYVZ, _arrayValuedBNkzyJ, _arrayValuej7nkS9O, _arrayValueqRtjC8B]
		const _returnValuejfLkfw = await _HelpHrlRX0.argumentDescription(_argumentHDVQWir)
	});

	it('test for Help', async () => {
		const _HelpwlKKUUh = new Help()
		const _returnValuevqHeJEj = undefined;
		const _matchoZ8rtUr = () => { return _returnValuevqHeJEj };
		const _returnValuem5mxaNN = undefined;
		const _substrtVyQoCl = () => { return _returnValuem5mxaNN };
		const _strTY9dFlv = {
			"match": _matchoZ8rtUr,
		"substr": _substrtVyQoCl
	}
		const _widthVb2O1KS = null;
		const _arrayValueIa0dqe9 = {
		
	}
		const _arrayValuelWkB0e = "lD6kCSHUbGtdBqBEl6MhLkiLvH9gTWkQL89yNKwLv0igup69QKTwgVjvTXXWX5e5G5HeyYvRgzx5XW6bd2mqx2r8Lt0PIVxF";
		const _arrayValueyVV0Fyi = "uLHRORNTfAVHzqd";
		const _indentIqL8Efy = [_arrayValueIa0dqe9, _arrayValuelWkB0e, _arrayValueyVV0Fyi]
		const _minColumnWidthar7nKzz = -7.448543714554014;
		const _returnValuenXdojtH = await _HelpwlKKUUh.wrap(_strTY9dFlv, _widthVb2O1KS, _indentIqL8Efy, _minColumnWidthar7nKzz)
		const _returnValueAN7gvT4 = false;
		const _descriptionAyBgEjz = () => { return _returnValueAN7gvT4 };
		const _cmdGY9RJpD = {
			"description": _descriptionAyBgEjz
	}
		const _returnValuecSLA02c = await _HelpwlKKUUh.commandDescription(_cmdGY9RJpD)
		const _arrayValueeuQyxrE = true;
		const _arrayValuesOP2bk = null;
		const _cmdrfgLNo = [_arrayValueeuQyxrE, _arrayValuesOP2bk]
		const _sortSubcommandsJHDw7o8 = undefined;
		const _arrayValueuhvXYGc = 5.001326567479538;
		const _arrayValueZ602Cc1 = undefined;
		const _returnValuemoecoS9 = [_arrayValueuhvXYGc, _arrayValueZ602Cc1]
		const _subcommandTermQuKnnDB = () => { return _returnValuemoecoS9 };
		const _helperTHBqMBa = {
			"sortSubcommands": _sortSubcommandsJHDw7o8,
		"subcommandTerm": _subcommandTermQuKnnDB
	}
		const _returnValuepMmUfVA = await _HelpwlKKUUh.longestSubcommandTermLength(_cmdrfgLNo, _helperTHBqMBa)
	});

	it('test for Help', async () => {
		const _HelpFhntlOF = new Help()
		const _argChoicesCRRWaP = {
		
	}
		const _defaultValueLJ5vJnW = undefined;
		const _arrayValueLBl3rOO = null;
		const _arrayValueiMfTHOy = -0.40907590008147743;
		const _arrayValueXTmvJM0 = undefined;
		const _arrayValueQZ23AI5 = undefined;
		const _arrayValueLjG0Ofd = -0.5981719679076498;
		const _arrayValuehgChN4 = [_arrayValueiMfTHOy, _arrayValueXTmvJM0, _arrayValueQZ23AI5, _arrayValueLjG0Ofd]
		const _arrayValueWXcoSoq = false;
		const _defaultValueDescriptionKkDGtN1 = [_arrayValueLBl3rOO, _arrayValuehgChN4, _arrayValueWXcoSoq]
		const _arrayValuervb9mIX = -4.120721398758053;
		const _descriptiontbRKQnr = [_arrayValuervb9mIX]
		const _argumentIJQPwTV = {
			"argChoices": _argChoicesCRRWaP,
		"defaultValue": _defaultValueLJ5vJnW,
		"defaultValueDescription": _defaultValueDescriptionKkDGtN1,
		"description": _descriptiontbRKQnr
	}
		const _returnValueiVLJOfw = await _HelpFhntlOF.argumentDescription(_argumentIJQPwTV)
		const _flagsfZq4cE = true;
		const _options4PQsb6 = {
			"flags": _flagsfZq4cE
	}
		const _returnValueIcPrD9f = await _HelpFhntlOF.optionTerm(_options4PQsb6)
	});

	it('test for Help', async () => {
		const _HelplvGzL5J = new Help()
		const __nameDl0FTU7 = {
		
	}
		const __aliaseskY5Roal = {
		
	}
		const _parenthRIkOra = {
		
	}
		const _returnValuegrodYv = undefined;
		const _usagenpc10gU = () => { return _returnValuegrodYv };
		const _cmdhJuk1g = {
			"_name": __nameDl0FTU7,
		"_aliases": __aliaseskY5Roal,
		"parent": _parenthRIkOra,
		"usage": _usagenpc10gU
	}
		const _returnValuebcA7Bux = await _HelplvGzL5J.commandUsage(_cmdhJuk1g)
		const _arrayValueSFkRLeV = null;
		const _arrayValue6tYObK = undefined;
		const _arrayValuevjo7L2k = null;
		const _cmdPFydugm = [_arrayValueSFkRLeV, _arrayValue6tYObK, _arrayValuevjo7L2k]
		const _returnValueGpdpdGn = await _HelplvGzL5J.visibleOptions(_cmdPFydugm)
	});

	it('test for Help', async () => {
		const _HelpM8AGhyU = new Help()
		const _arrayValueJ6KtzFW = undefined;
		const _arrayValuehzH7e3 = -8.534556728487523;
		const _arrayValuear7Bp7W = true;
		const _optionqCwlMO = [_arrayValueJ6KtzFW, _arrayValuehzH7e3, _arrayValuear7Bp7W]
		const _returnValuepJDsXYW = await _HelpM8AGhyU.optionDescription(_optionqCwlMO)
		const _arrayValuewQhirSe = "5wjc";
		const _cmdamg6lvd = [_arrayValuewQhirSe]
		const _returnValueNAE9qu = await _HelpM8AGhyU.subcommandDescription(_cmdamg6lvd)
	});

	it('test for Help', async () => {
		const _Help1N0hCO = new Help()
		const _optionxbWyxm = true;
		const _returnValueoBIsJa = await _Help1N0hCO.optionDescription(_optionxbWyxm)
		const _cmdd7ymQhs = "gmwDWJEdn8DYI1Lgk8MQlbRcWg0BjvSiBzqvB1Ri51YnmXAuAKgHaFP5PnfEX3BQu2LZmraV6lRSrG4J1d8DEOVEqrhiAGnwy";
		const _sortSubcommandseSizHZn = false;
		const _returnValuey2a0rzs = null;
		const _subcommandTermkCPnQXF = () => { return _returnValuey2a0rzs };
		const _helpers48O14h = {
			"sortSubcommands": _sortSubcommandseSizHZn,
		"subcommandTerm": _subcommandTermkCPnQXF
	}
		const _returnValuegSx6rTD = await _Help1N0hCO.longestSubcommandTermLength(_cmdd7ymQhs, _helpers48O14h)
		const _arrayValueR5Yr1BS = null;
		const _arrayValuevwSIT9j = "dVJDQEmw3akjZNM67SioTvzEtgfArBEzD3qlYyQmt5prBIQTw1XKmrZMxfHLieeJwt7w5tB3oHfxdYpCFyEuLjycn5ENvQAS";
		const _arrayValueFG6TRzR = {
		
	}
		const _arrayValuey7FumNY = [_arrayValueR5Yr1BS, _arrayValuevwSIT9j, _arrayValueFG6TRzR]
		const _arrayValuea2gWjiH = null;
		const _cmdtUcGFG2 = [_arrayValuey7FumNY, _arrayValuea2gWjiH]
		const _returnValuellVhg1a = await _Help1N0hCO.subcommandDescription(_cmdtUcGFG2)
	});

	it('test for Help', async () => {
		const _HelpED8aiFi = new Help()
		const _returnValuehnk2uy = true;
		const _matchIe0yCYw = () => { return _returnValuehnk2uy };
		const _returnValueM9KnvNJ = "Sm6ad475nfDOCVDWZhxjwivxgxdjn89GSz8Qg9D6E";
		const _returnValuerfOH3l3 = () => { return _returnValueM9KnvNJ };
		const _substrbodMU3l = () => { return _returnValuerfOH3l3 };
		const _strPzr1m2D = {
			"match": _matchIe0yCYw,
		"substr": _substrbodMU3l
	}
		const _widthtdbqq1b = -6.823951580957049;
		const _indentVN7SPl6 = -1.6755774758007718;
		const _minColumnWidthtCSosCf = 1.9633796801985746;
		const _returnValueAzCi8YO = await _HelpED8aiFi.wrap(_strPzr1m2D, _widthtdbqq1b, _indentVN7SPl6, _minColumnWidthtCSosCf)
		const _arrayValuesvHille = "DEq7kbulIohQfzAfCzENxv1KbPuT5FMuJjatLRJbXA7OAFoqWtUW68SAql1i2fq";
		const _arrayValueq0QfSY = false;
		const _arrayValueAxaybja = {
		
	}
		const _arrayValues1v1pOQ = [_arrayValueq0QfSY, _arrayValueAxaybja]
		const _arrayValue9CyYjj = [_arrayValues1v1pOQ]
		const _arrayValueBdFn789 = 4.205757383946814;
		const _arrayValueTmEywqL = [_arrayValue9CyYjj, _arrayValueBdFn789]
		const _arrayValuePmGSne3 = "LU6VtfiEfE5KNToSzTO2JU1y1naCy9ymHdBco8NdRt8DCC68";
		const _returnValuerr0Uguo = undefined;
		const _arrayValueIHa217O = () => { return _returnValuerr0Uguo };
		const _arrayValueps1B6eJ = [_arrayValueTmEywqL, _arrayValuePmGSne3, _arrayValueIHa217O]
		const _returnValueNuEab9 = {
		
	}
		const _arrayValue36nUT2 = () => { return _returnValueNuEab9 };
		const _returnValuedZI4hWf = [_arrayValuesvHille, _arrayValueps1B6eJ, _arrayValue36nUT2]
		const _nameAmBvT5E = () => { return _returnValuedZI4hWf };
		const _argument8aJ4bc = {
			"name": _nameAmBvT5E
	}
		const _returnValueXcHPkei = await _HelpED8aiFi.argumentTerm(_argument8aJ4bc)
		const _arrayValueYhoqB2X = null;
		const _arrayValueCtLHD9V = "FAONPXOddmhYJSj9qwYeoMXqfrazSFWy";
		const _cmdvOrmIwn = [_arrayValueYhoqB2X, _arrayValueCtLHD9V]
		const _returnValueOahPZ5 = await _HelpED8aiFi.visibleArguments(_cmdvOrmIwn)
		const _arrayValuegD2Y353 = "11plXEdShhws5J";
		const _cmdgzsVQQ = [_arrayValuegD2Y353]
		const _arrayValueIDhSjLP = "8vuBq11N9dGXvYuqWV8g18avhroNetbiCkjIIa6JzHXdHRsKvifsQMdBgDt";
		const _arrayValueSnpn2J = 1.929321002249722;
		const _helperAvtzCmR = [_arrayValueIDhSjLP, _arrayValueSnpn2J]
		const _returnValueNlrahUF = await _HelpED8aiFi.formatHelp(_cmdgzsVQQ, _helperAvtzCmR)
	});

	it('test for Help', async () => {
		const _HelpKrnVmTY = new Help()
		const _commandsr6qSqOd = {
		
	}
		const _returnValueeAYGNcH = true;
		const __hasImplicitHelpCommandY5yDVXP = () => { return _returnValueeAYGNcH };
		const __helpCommandnameAndArgsb8Ya3H2 = {
		
	}
		const _returnValuev6Mh11B = null;
		const _createCommandwBAUkqL = () => { return _returnValuev6Mh11B };
		const __helpCommandDescriptionOQyiMkl = true;
		const _cmdULUnIUm = {
			"commands": _commandsr6qSqOd,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandY5yDVXP,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsb8Ya3H2,
		"createCommand": _createCommandwBAUkqL,
		"_helpCommandDescription": __helpCommandDescriptionOQyiMkl
	}
		const _returnValuelUXTfui = await _HelpKrnVmTY.visibleCommands(_cmdULUnIUm)
		const _cmdWwiZwm = {
		
	}
		const _returnValueMoHJVMm = "s7xEyakbGfN65oPUn3rVs569JERX4tlNFWUtYHkhF85VVRP3cbHJry4Wc2MtsRZGnPpRD2Wvcna";
		const _helperroj25dR = () => { return _returnValueMoHJVMm };
		const _returnValueuCvlVGt = await _HelpKrnVmTY.padWidth(_cmdWwiZwm, _helperroj25dR)
	});

	it('test for Help', async () => {
		const _HelpFLwqQ6F = new Help()
		const _returnValueINWJv8d = undefined;
		const _matchmcfL1Zp = () => { return _returnValueINWJv8d };
		const _returnValueVRa1qME = true;
		const _substriT7rt3p = () => { return _returnValueVRa1qME };
		const _strIglKlIR = {
			"match": _matchmcfL1Zp,
		"substr": _substriT7rt3p
	}
		const _widthanyOFey = -9.405703471034887;
		const _indents4xeWBf = -9.447923146150826;
		const _minColumnWidthEVIe1iK = 0.42142519643401855;
		const _returnValueqswnwYQ = await _HelpFLwqQ6F.wrap(_strIglKlIR, _widthanyOFey, _indents4xeWBf, _minColumnWidthEVIe1iK)
		const _cmdF0fvJ8M = 7.157362426524234;
		const _returnValuexnNRvhw = true;
		const _helperlIqlBQK = () => { return _returnValuexnNRvhw };
		const _returnValuewdHpqQF = await _HelpFLwqQ6F.formatHelp(_cmdF0fvJ8M, _helperlIqlBQK)
		const _returnValueBi7Byqz = 7.022154769208619;
		const _returnValues6wbZg = () => { return _returnValueBi7Byqz };
		const _returnValueLDpogvY = () => { return _returnValues6wbZg };
		const _cmdKjVJzNy = () => { return _returnValueLDpogvY };
		const _returnValuesLiniu4 = await _HelpFLwqQ6F.visibleOptions(_cmdKjVJzNy)
	});

	it('test for Help', async () => {
		const _HelpZhcOsMI = new Help()
		const _flagshsAFvxt = "bGAO2Fz4AV949FDzzayRcy2ERFtAsc8Xrvx4jn3oWtTmFM8RroJU";
		const _descriptionwR86UT5 = null;
		const _cmd3AR9Sz = new Option(_flagshsAFvxt, _descriptionwR86UT5)
		const _fnRmAnNV = undefined;
		const _returnValuekB9m7nE = await _cmd3AR9Sz.argParser(_fnRmAnNV)
		const _arg16Gd0j = {
		
	}
		const _returnValueG5wBNRf = await _cmd3AR9Sz.is(_arg16Gd0j)
		const _argVbdZFLB = {
		
	}
		const _returnValueglABOAU = await _cmd3AR9Sz.is(_argVbdZFLB)
		const _valueskSoN1fk = undefined;
		const _returnValuerkm3uY = await _cmd3AR9Sz.choices(_valueskSoN1fk)
		const _returnValuecvyDexk = await _HelpZhcOsMI.subcommandDescription(_cmd3AR9Sz)
		const _cmdpmcQZyc = null;
		const _helperOgXkAW1 = new Help()
		const _cmdhfzRwhu = "vTjLnjtTzUgwRamVhwgEuHdoeA0tDMdfW5vhEPnSFka4RHkb4irzOepxypCw14HvnDEdn1GmFcwnxeSGv6srwTlbD9ia2Hw";
		const _returnValueU4juvTH = await _helperOgXkAW1.visibleArguments(_cmdhfzRwhu)
		const _nameCRcykhp = {
		
	}
		const _cmdGdmwtcW = new Command(_nameCRcykhp)
		const _returnValue4MSedW = true;
		const _forEachINFq0o2 = () => { return _returnValue4MSedW };
		const _aliasesplbLI0D = {
			"forEach": _forEachINFq0o2
	}
		const _returnValueno290qD = await _cmdGdmwtcW.aliases(_aliasesplbLI0D)
		const _returnValueHU2ZEl6 = undefined;
		const _matchnuQlPyd = () => { return _returnValueHU2ZEl6 };
		const _nameAndArgsmHucABo = {
			"match": _matchnuQlPyd
	}
		const _actionOptsOrExecDescs8lpjyd = {
		
	}
		const _arrayValueZQ7qfTZ = null;
		const _arrayValuexNmAk2 = "o65dtnsru05VQD1bBKf2lkrB7Hj";
		const _execOptsPadNs1 = [_arrayValueZQ7qfTZ, _arrayValuexNmAk2]
		const _returnValueHrLMgyF = await _cmdGdmwtcW.command(_nameAndArgsmHucABo, _actionOptsOrExecDescs8lpjyd, _execOptsPadNs1)
		const _returnValueWCYSlPf = false;
		const _sliceqVHPaTI = () => { return _returnValueWCYSlPf };
		const _argveNz25Sd = {
			"slice": _sliceqVHPaTI
	}
		const _returnValueIXrbUA2 = await _cmdGdmwtcW.parseOptions(_argveNz25Sd)
		const _strBOYbObs = undefined;
		const _argsDescriptionxfKkcPv = undefined;
		const _returnValueijDRPRR = await _cmdGdmwtcW.description(_strBOYbObs, _argsDescriptionxfKkcPv)
		const _returnValuebbGvLgQ = await _helperOgXkAW1.commandDescription(_cmdGdmwtcW)
		const _arrayValuedi0aSgM = undefined;
		const _arrayValueRgRAwqB = undefined;
		const _optionXcyIdIS = [_arrayValuedi0aSgM, _arrayValueRgRAwqB]
		const _returnValuesq5wv62 = await _helperOgXkAW1.optionDescription(_optionXcyIdIS)
		const _returnValuefDXZuE0 = await _HelpZhcOsMI.padWidth(_cmdpmcQZyc, _helperOgXkAW1)
		const _returnValuevfVO1TN = null;
		const _nameyW5Y1xI = () => { return _returnValuevfVO1TN };
		const _argumentsX2TYny = new Command(_nameyW5Y1xI)
		const _allowExcessYElchB = false;
		const _returnValueCuhAjcv = await _argumentsX2TYny.allowExcessArguments(_allowExcessYElchB)
		const _argument1tsuit = true;
		const _returnValueWDQv286 = await _argumentsX2TYny.addArgument(_argument1tsuit)
		const _returnValuefwrdTRd = await _HelpZhcOsMI.argumentTerm(_argumentsX2TYny)
		const _nameOMCcXoy = null;
		const _argumenthk0rzhe = new Command(_nameOMCcXoy)
		const _positionZcUD5gk = "28e34RBpnRA";
		const _textU73Y2Cp = null;
		const _returnValuevjpn8AG = await _argumenthk0rzhe.addHelpText(_positionZcUD5gk, _textU73Y2Cp)
		const _displayHelpabWSFhq = {
		
	}
		const _returnValueXY3WfT = await _argumenthk0rzhe.showHelpAfterError(_displayHelpabWSFhq)
		const _arrayValueNz6B3gQ = undefined;
		const _arrayValueIkI7ip9 = [_arrayValueNz6B3gQ]
		const _arrayValuek4YGI6V = "oLUQ8GWDl2nbezVuWMx81YtDMezWWhICkjLqKvTXk30HcHvADk9hxtcn1pTYKTX3j562Kd761d";
		const _arrayValuepCG8ytO = 7.13296097123337;
		const _flagsgkmrE1 = [_arrayValueIkI7ip9, _arrayValuek4YGI6V, _arrayValuepCG8ytO]
		const _descriptiono029L7j = null;
		const _fnhBLypjS = false;
		const _defaultValuedymuDNU = -0.028864975295677553;
		const _returnValueZaA7Zix = await _argumenthk0rzhe.requiredOption(_flagsgkmrE1, _descriptiono029L7j, _fnhBLypjS, _defaultValuedymuDNU)
		const _returnValuePSSrIRS = await _HelpZhcOsMI.argumentTerm(_argumenthk0rzhe)
	});

	it('test for Help', async () => {
		const _HelpX4moNCx = new Help()
		const _nameSKObDA7 = 7.427333218607007;
		const _cmdvCOv9uA = new Command(_nameSKObDA7)
		const _storeAsPropertiesMtJg5Vi = true;
		const _returnValueUZeXoow = await _cmdvCOv9uA.storeOptionsAsProperties(_storeAsPropertiesMtJg5Vi)
		const _lengthk1gAjL1 = undefined;
		const _receivedArgsiPGCAS = {
			"length": _lengthk1gAjL1
	}
		const _returnValuegCPnR9U = await _cmdvCOv9uA._excessArguments(_receivedArgsiPGCAS)
		const _keyC7UYE1S = undefined;
		const _valued9UZBnY = -6.886914789856355;
		const _returnValuegHZPKpg = await _cmdvCOv9uA.setOptionValue(_keyC7UYE1S, _valued9UZBnY)
		const _returnValueaTHWuxC = await _HelpX4moNCx.visibleOptions(_cmdvCOv9uA)
		const _cmdbReo8qF = true;
		const _helperDTMuRqI = "YeYF5zpMYQ9wUUhtpnPlca3idAGyxNnXg3eIp2XSx";
		const _returnValuewBc2s1 = await _HelpX4moNCx.longestOptionTermLength(_cmdbReo8qF, _helperDTMuRqI)
	});

	it('test for Help', async () => {
		const _HelpV4ihRpW = new Help()
		const _namesPaxeGX = "hOs9Cv7M0MaZ2hqeuj8DgT6Z5gRzJJ5nUrM8xzWEV1WVMwuecgsFDg";
		const _cmdGiH3wHh = new Command(_namesPaxeGX)
		const _enableOrNameAndArgsnIkToSM = "Ft6z2BKAxhDeh1NDsSXwbwzdU3jKVVXrVYSPyYrlq9E865FPuCLy7fJrWTvE8rYb2JNjbJ9nPLOn7M2e3PLc7po";
		const _descriptionkWXViB = undefined;
		const _returnValueKVh5C9v = await _cmdGiH3wHh.addHelpCommand(_enableOrNameAndArgsnIkToSM, _descriptionkWXViB)
		const _returnValueckF5zY7 = await _cmdGiH3wHh._checkForMissingMandatoryOptions()
		const _returnValue5kRq7T = false;
		const _argumentSpSzCfG = () => { return _returnValue5kRq7T };
		const _returnValueJIvtztI = await _cmdGiH3wHh.addArgument(_argumentSpSzCfG)
		const _flagsMDnoJd8 = false;
		const _descriptionALPMohv = "Xg0EeRpbAxfuhJbe8HlB6ltY32ZnzIOyU58pJYWdB5436LYfW28";
		const _returnValuegm0mbhi = await _cmdGiH3wHh.helpOption(_flagsMDnoJd8, _descriptionALPMohv)
		const _returnValueHlrvYuw = "zLaRXCNrWmhNKh3EIGQQPWYkLQf0iPvDcNDjSIPGoldXLvc5PtdqNzQrUutcDWsWwmJ8U3riq";
		const _forEachFr4OMus = () => { return _returnValueHlrvYuw };
		const _aliasessHoZ0XI = {
			"forEach": _forEachFr4OMus
	}
		const _returnValueiUiS5ZE = await _cmdGiH3wHh.aliases(_aliasessHoZ0XI)
		const _returnValuefXsMmuV = await _HelpV4ihRpW.visibleCommands(_cmdGiH3wHh)
		const _arrayValueqnCQ9gv = undefined;
		const _cmdlieUVLG = [_arrayValueqnCQ9gv]
		const _helperkoaUTkD = "6ZATpY4eBV9Grlq4wWLhWmp4GTK3NBZwUH4Djb59LN4itIlmfRpVy4EQPCVPQzYaSd5W7diYDB1gHop";
		const _returnValueYLqiChE = await _HelpV4ihRpW.longestOptionTermLength(_cmdlieUVLG, _helperkoaUTkD)
		const _cmd1C2ozY = -2.513286875267279;
		const _helperWz98ueU = "CihRFFRdhlSnzRBWQa7RUxoeA97r5A8Em6YkRuRI7QAkwdPB";
		const _returnValueQ1VHHuF = await _HelpV4ihRpW.longestOptionTermLength(_cmd1C2ozY, _helperWz98ueU)
		const _nameZV5rpti = null;
		const _cmdR9SF1aq = new Command(_nameZV5rpti)
		const _returnValueO880EPB = await _cmdR9SF1aq.createHelp()
		const _returnValueVxXvZiQ = await _HelpV4ihRpW.visibleOptions(_cmdR9SF1aq)
		const _cmdy6rFcW = "cvAdk3N2PF1BTBAtJ68hNpF4NJTTNo4WXSs7G7MIFE6Qo1f3EulzbtJWdVV2va";
		const _returnValuepI8pmE1 = await _HelpV4ihRpW.visibleArguments(_cmdy6rFcW)
	});

	it('test for Help', async () => {
		const _HelpHxokLRn = new Help()
		const _nameQ9kpQSg = null;
		const _cmdCrmnuLz = new Command(_nameQ9kpQSg)
		const _returnValueCSNJR2G = await _cmdCrmnuLz._parseOptionsEnv()
		const _returnValueZLAvwjz = await _HelpHxokLRn.subcommandTerm(_cmdCrmnuLz)
		const _arrayValuehMVjJ4F = {
		
	}
		const _arrayValueyudh0cX = null;
		const _optiongiu25jD = [_arrayValuehMVjJ4F, _arrayValueyudh0cX]
		const _returnValueIXAa2bi = await _HelpHxokLRn.optionDescription(_optiongiu25jD)
	});

	it('test for Help', async () => {
		const _HelpW0qpQUC = new Help()
		const _namej4H4ixM = "LiCeeC";
		const _cmdaxiJUUt = new Command(_namej4H4ixM)
		const _aliasuVlIvTE = []
		const _returnValueQujil0d = await _cmdaxiJUUt.alias(_aliasuVlIvTE)
		const _returnValueYduZIyI = await _HelpW0qpQUC.commandUsage(_cmdaxiJUUt)
		const _arrayValuegRHdAp = 1.5396397831376092;
		const _arrayValueKP7asco = undefined;
		const _arrayValueeTNc53 = {
		
	}
		const _arrayValueX6k6x7p = undefined;
		const _optionBNEQePs = [_arrayValuegRHdAp, _arrayValueKP7asco, _arrayValueeTNc53, _arrayValueX6k6x7p]
		const _returnValueS0JUty = await _HelpW0qpQUC.optionTerm(_optionBNEQePs)
	});

	it('test for Help', async () => {
		const _HelptrQ5cMi = new Help()
		const _cmdmpuyZ0G = {
		
	}
		const _helperAlOYheF = new Help()
		const _namezdG57v = -8.102894869834882;
		const _cmdzCG0LNi = new Command(_namezdG57v)
		const _returnValueP8vrZzP = await _cmdzCG0LNi.createHelp()
		const _configurationguYsfr = undefined;
		const _returnValuewh3UG8r = await _cmdzCG0LNi.configureOutput(_configurationguYsfr)
		const _passThroughguXOChd = true;
		const _returnValuegMuZjuW = await _cmdzCG0LNi.passThroughOptions(_passThroughguXOChd)
		const _namesWH3nlAp = "2aJaUYQKYKSt0DWahJ1mNsjrlNboJiVzrl3LVILjut2vt17OAwGcwWeHPzJwjIguCVsL0vaFh";
		const _returnValueRKTW8W2 = await _cmdzCG0LNi.arguments(_namesWH3nlAp)
		const _returnValuekPlxUJF = await _helperAlOYheF.subcommandTerm(_cmdzCG0LNi)
		const _arrayValueUQ6U1kv = null;
		const _arrayValueoc54vMi = 6.842955066157941;
		const _argumentHFbBmhR = [_arrayValueUQ6U1kv, _arrayValueoc54vMi]
		const _returnValueF3J2tCV = await _helperAlOYheF.argumentDescription(_argumentHFbBmhR)
		const _cmdIy6X6Jv = 9.803617298164589;
		const _helperXWLMFJv = new Help()
		const _arrayValuenAXEgYx = []
		const _arrayValueKv9y5Ef = "vK85";
		const _arrayValueu9l3elg = false;
		const _arrayValuejeWflP = [_arrayValueKv9y5Ef, _arrayValueu9l3elg]
		const _arrayValueqqsEOX5 = [_arrayValuejeWflP]
		const _arrayValueig9zQVY = {
		
	}
		const _argumentRBeJ5C4 = [_arrayValuenAXEgYx, _arrayValueqqsEOX5, _arrayValueig9zQVY]
		const _returnValuemXf5Gpc = await _helperXWLMFJv.argumentDescription(_argumentRBeJ5C4)
		const _returnValueAMNV2ph = undefined;
		const _arrayValuePCmWIFp = () => { return _returnValueAMNV2ph };
		const _arrayValueAGkTCQP = 6.361125544904446;
		const _cmdad8n06V = [_arrayValuePCmWIFp, _arrayValueAGkTCQP]
		const _helper1m9FHq = new Help()
		const _cmdxMEsuE6 = "8zG3WW1SRXAoKn4";
		const _helperXXyYsEX = new Help()
		const _nameNzrvhN9 = undefined;
		const _cmdOYxWvb = new Command(_nameNzrvhN9)
		const _arrayValueUOb2UQX = undefined;
		const _arrayValueabucqy0 = true;
		const _returnValueKDAS0zW = true;
		const _arrayValueBeuCIeq = () => { return _returnValueKDAS0zW };
		const _arrayValueIpQNdZm = "UVBzQdXr6S4";
		const _arrayValueVdG595 = [_arrayValueBeuCIeq, _arrayValueIpQNdZm]
		const _arrayValueftnM51f = "coiPDHgyTRf5AOJtHvH4Cji1MiWUBPjUWPoCCRWvlnoDnkqFojkbOoGlnR";
		const _returnValueU2vHOV = "yUcslN72cbyufhLqEDxNhxPbeBkg6KZ4Mf5YxerGbzRwh5E78Opcl560m1tce6ioGXlKVECUwRw0hR2UNnOjgPA4b";
		const _arrayValueCBKazz = () => { return _returnValueU2vHOV };
		const _arrayValueieKKCnV = [_arrayValueftnM51f, _arrayValueCBKazz]
		const _argvmEbWbn9 = [_arrayValueUOb2UQX, _arrayValueabucqy0, _arrayValueVdG595, _arrayValueieKKCnV]
		const _returnValueHmjBTpm = await _cmdOYxWvb.parseOptions(_argvmEbWbn9)
		const _keyrytTh4F = 3.2450178397144995;
		const _arrayValueR5nLnW7 = {
		
	}
		const _arrayValueZXcUVgD = false;
		const _valueAANfadZ = [_arrayValueR5nLnW7, _arrayValueZXcUVgD]
		const _returnValue8SERKd = await _cmdOYxWvb.setOptionValue(_keyrytTh4F, _valueAANfadZ)
		const _returnValueR2go8q = await _helperXXyYsEX.visibleArguments(_cmdOYxWvb)
		const _namekHyMgKV = "ooNMPZXwMAIGLyEIt686YG46plqwuyjXqLhCFryj7BK5Tc2dSPKGOOCpVudzVjM5w16tG9Pe";
		const _cmdFqekZjU = new Command(_namekHyMgKV)
		const _flagsUeQO1wC = []
		const _descriptionH6TP3Nk = null;
		const _fndQYT7DF = undefined;
		const _defaultValueacuqfGZ = undefined;
		const _returnValueHgbNm6N = await _cmdFqekZjU.option(_flagsUeQO1wC, _descriptionH6TP3Nk, _fndQYT7DF, _defaultValueacuqfGZ)
		const _optionO2QvEC7 = "y8BE7ySrbXjPKqojAcj5pAKdZwMECOFivDq2lC0UjWGlUmOmeNkQ9mc8RuVg81kXijayQwx7oAJfHeP3QeMOO";
		const _returnValueYqmiAAo = await _cmdFqekZjU.addOption(_optionO2QvEC7)
		const _returnValuectuzArX = await _cmdFqekZjU._hasImplicitHelpCommand()
		const _positionalkfpWG = "pjWmhKpnthjFVWKKuifB5MyaphjhdFMlTbonilwOxOirGnoBVGHofQPMmP53Mu7aVlwTGxaWrF3tipUp94S";
		const _returnValuestL4UWl = 3.4943150099760967;
		const _textLumfjX8 = () => { return _returnValuestL4UWl };
		const _returnValuepofa3s6 = await _cmdFqekZjU.addHelpText(_positionalkfpWG, _textLumfjX8)
		const _returnValueGJtKJXy = await _helperXXyYsEX.visibleArguments(_cmdFqekZjU)
		const _namePntiYsQ = undefined;
		const _cmdwNOY2j9 = new Command(_namePntiYsQ)
		const _nameAndArgscBT3ka0 = "mWGwchoBY8Cfj21qvRlNLHvSMMYkTx5Q7HSi2FVzxLVMqB8oxAYqosipZnD";
		const _actionOptsOrExecDesckAk0qqi = null;
		const _execOptsyCCtCZM = null;
		const _returnValueA7LyxLJ = await _cmdwNOY2j9.command(_nameAndArgscBT3ka0, _actionOptsOrExecDesckAk0qqi, _execOptsyCCtCZM)
		const _nameV9iwXyy = -9.385235709885611;
		const _returnValuezCRf7Xi = await _cmdwNOY2j9.missingArgument(_nameV9iwXyy)
		const _nameZ0I4Xm = null;
		const _returnValueroSZOv = await _cmdwNOY2j9.missingArgument(_nameZ0I4Xm)
		const _combineqL90LEb = true;
		const _returnValue1grHV8 = await _cmdwNOY2j9.combineFlagAndOptionalValue(_combineqL90LEb)
		const _returnValueokpUQV6 = await _helperXXyYsEX.commandUsage(_cmdwNOY2j9)
		const _namejHGTKHl = 9.92868918172142;
		const _cmdxUjF61G = new Command(_namejHGTKHl)
		const _returnValueGSUMxi1 = await _cmdxUjF61G._checkForMissingMandatoryOptions()
		const _returnValueN57RNd = undefined;
		const _argumentTRhlU7r = () => { return _returnValueN57RNd };
		const _returnValueKquhN18 = await _cmdxUjF61G.addArgument(_argumentTRhlU7r)
		const _returnValuehweySM0 = await _helperXXyYsEX.subcommandDescription(_cmdxUjF61G)
		const _returnValueag9rS6y = await _helper1m9FHq.formatHelp(_cmdxMEsuE6, _helperXXyYsEX)
		const _nameGInyp6S = undefined;
		const _cmdTXjCnVK = new Command(_nameGInyp6S)
		const _flagsSh4DcI = []
		const _optionjSSqW1 = {
			"flags": _flagsSh4DcI
	}
		const _returnValueaXF88Xh = await _cmdTXjCnVK.missingMandatoryOptionValue(_optionjSSqW1)
		const _returnValueSIdImX3 = await _helper1m9FHq.commandDescription(_cmdTXjCnVK)
		const _returnValueJ6izC64 = 7.052628179953025;
		const _nameOZpRux = () => { return _returnValueJ6izC64 };
		const _cmdWbQ3Rg5 = new Command(_nameOZpRux)
		const _fnfZL6LDt = {
		
	}
		const _returnValueQRwpNAl = await _cmdWbQ3Rg5.exitOverride(_fnfZL6LDt)
		const _positionalHZBXExd = true;
		const _returnValuewx67Ayu = await _cmdWbQ3Rg5.enablePositionalOptions(_positionalHZBXExd)
		const _commandNamevkN1Rf = "9opMdvTaqrywYjrrHAP7mnM5nSgTs1AOHk7afiI4NGqlcK0gJXpisTZUikOMMfCU7hu3XM7LuZSY";
		const _returnValueW6W6yt = null;
		const _concatEceRfX = () => { return _returnValueW6W6yt };
		const _operandsRbyz25M = {
			"concat": _concatEceRfX
	}
		const _unknownrIozn2O = null;
		const _returnValuex4JWnoJ = await _cmdWbQ3Rg5._dispatchSubcommand(_commandNamevkN1Rf, _operandsRbyz25M, _unknownrIozn2O)
		const _returnValueCTG4ZJr = await _helper1m9FHq.subcommandTerm(_cmdWbQ3Rg5)
		const _returnValueNoIJ6ZC = await _helperXWLMFJv.longestArgumentTermLength(_cmdad8n06V, _helper1m9FHq)
		const _cmdnB4hxyI = undefined;
		const _helperP6e7ye7 = new Help()
		const _arrayValuelQ1EhPv = null;
		const _arrayValueGjOjtZJ = {
		
	}
		const _arrayValuesCBGBdQ = "s6PM7KROsw4W4Gos6YkkwqFnKuupxI3EPvok2Qk7";
		const _nameIqvGumI = [_arrayValuelQ1EhPv, _arrayValueGjOjtZJ, _arrayValuesCBGBdQ]
		const _cmdZbk3eFa = new Command(_nameIqvGumI)
		const _allowUnknownCeUUQN6 = false;
		const _returnValuevQQHeCj = await _cmdZbk3eFa.allowUnknownOption(_allowUnknownCeUUQN6)
		const _returnValueTb1GLN1 = await _helperP6e7ye7.commandDescription(_cmdZbk3eFa)
		const _nameF7DunxA = "jGMYDUCrMtv";
		const _cmdYGoDM4x = new Command(_nameF7DunxA)
		const __nameYd54wHc = {
		
	}
		const _commandsoXA20A = "rstfbFkJEK8L5LFgl0KOdGR7Y0s9pvGjsw2aIrR3sjfKVpXOSDCWgwhonIsI4FDiG7n5hD";
		const __hiddenXtJg55y = true;
		const _arrayValuekkB2nb = null;
		const _parentkCcfmCY = [_arrayValuekkB2nb]
		const _cmdokKlpl7 = {
			"_name": __nameYd54wHc,
		"commands": _commandsoXA20A,
		"_hidden": __hiddenXtJg55y,
		"parent": _parentkCcfmCY
	}
		const _isDefaults6ue48q = false;
		const _optsQAKNgmo = {
			"isDefault": _isDefaults6ue48q
	}
		const _returnValueNOpTXh = await _cmdYGoDM4x.addCommand(_cmdokKlpl7, _optsQAKNgmo)
		const _namesrB3uJs = {
		
	}
		const _returnValueVK87dGl = await _cmdYGoDM4x._findCommand(_namesrB3uJs)
		const _returnValuerI3nmIc = await _cmdYGoDM4x._hasImplicitHelpCommand()
		const _arrayValuezOYFCmm = "5g1q9QNAI3VrwNRsvMzUM9l3ZSR6euHfcD4MEjtsU66jJefWA7IRCuwFQ6vlTakn1vRNzy5M1LBHaeoCXmEEU";
		const _arrayValuel5NP2P2 = [_arrayValuezOYFCmm]
		const _returnValueLUrFY8a = undefined;
		const _arrayValueSLHYeLy = () => { return _returnValueLUrFY8a };
		const _arrayValuegmahFE6 = "Ud6RNuqqaHKMiYvmCuT98HGIs7lkHVPrOI31lwKg7q19wIagYefuNc2Od52LkRzu3c6hKFIPi9tAoFFiEpgXZUXl";
		const _returnValueQFmleub = 0.03267385963364511;
		const _arrayValuePvCyACu = () => { return _returnValueQFmleub };
		const _arrayValueMCQWz2s = [_arrayValueSLHYeLy, _arrayValuegmahFE6, _arrayValuePvCyACu]
		const _arrayValueUUq8uFk = undefined;
		const _subcommandMyWXxP4 = [_arrayValuel5NP2P2, _arrayValueMCQWz2s, _arrayValueUUq8uFk]
		const _argsi99SOP = "pl";
		const _returnValuetyVMC9D = await _cmdYGoDM4x._executeSubCommand(_subcommandMyWXxP4, _argsi99SOP)
		const _returnValuerQQTvt = await _helperP6e7ye7.subcommandTerm(_cmdYGoDM4x)
		const _returnValuebTW4Npq = await _helperXWLMFJv.formatHelp(_cmdnB4hxyI, _helperP6e7ye7)
		const _returnValue3mrUjc = await _helperAlOYheF.longestArgumentTermLength(_cmdIy6X6Jv, _helperXWLMFJv)
		const _namebG52W4z = 1.0294848220643953;
		const _cmdmI0HXck = new Command(_namebG52W4z)
		const _returnValueYoyLSDE = await _cmdmI0HXck._processArguments()
		const _errorPnNpSPP = undefined;
		const _commandWtM56E = 2.264978991134239;
		const _contextOptionsKaaHPXl = {
			"error": _errorPnNpSPP,
		"command": _commandWtM56E
	}
		const _returnValueKke9DPd = await _cmdmI0HXck.helpInformation(_contextOptionsKaaHPXl)
		const _allowExcessQuqceBg = true;
		const _returnValuegmjKAKJ = await _cmdmI0HXck.allowExcessArguments(_allowExcessQuqceBg)
		const _returnValueDGjemE = await _helperAlOYheF.visibleArguments(_cmdmI0HXck)
		const _returnValueTtDA8VS = await _HelptrQ5cMi.formatHelp(_cmdmpuyZ0G, _helperAlOYheF)
		const _namePSm3p1i = undefined;
		const _cmdOXJQjxU = new Command(_namePSm3p1i)
		const _flagsI6Auwr = 1.703351254664705;
		const _optionQ1bF5vG = {
			"flags": _flagsI6Auwr
	}
		const _returnValuejO1TpJ9 = await _cmdOXJQjxU.optionMissingArgument(_optionQ1bF5vG)
		const _optionOKJT5El = "5WDyPwM";
		const _returnValueeFq6pSZ = await _cmdOXJQjxU.addOption(_optionOKJT5El)
		const _returnValueFsDvF1O = await _HelptrQ5cMi.visibleArguments(_cmdOXJQjxU)
	});
})