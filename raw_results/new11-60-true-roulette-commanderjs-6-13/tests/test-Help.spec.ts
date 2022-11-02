export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpUH1YQqJ = new Help()
		const _flagsk0sj04 = null;
		const _optionEBcIvMZ = {
			"flags": _flagsk0sj04
	}
		const _returnValuegNsnkIT = await _HelpUH1YQqJ.optionTerm(_optionEBcIvMZ)
	});

	it('test for Help', async () => {
		const _HelpZSsFKeW = new Help()
		const _arrayValueLkktiVX = 5.806361810147131;
		const _exitCodeuKOJ0Dd = [_arrayValueLkktiVX]
		const _returnValueLOBsLNP = undefined;
		const _returnValue3HhViK = () => { return _returnValueLOBsLNP };
		const _codeOhU7o0U = () => { return _returnValue3HhViK };
		const _message0g7YeH = []
		const _argumentw1e0fIV = new CommanderError(_exitCodeuKOJ0Dd, _codeOhU7o0U, _message0g7YeH)
		const _returnValuegmY96G = await _HelpZSsFKeW.argumentTerm(_argumentw1e0fIV)
		const _cmdblrfWV = "6LBUE7HfD1TWH2APOwZwKt0dBYRAS5MyhIUzZ";
		const _arrayValueHjU7rbb = undefined;
		const _arrayValue3bgbss = "KJeHyBd3BfgMKIMvRFRb64F9MMFE6BzJLUxsBsqLMmbrc0rWM9EUF";
		const _returnValueFMs7c4Q = [_arrayValueHjU7rbb, _arrayValue3bgbss]
		const _helperPXoGmHE = () => { return _returnValueFMs7c4Q };
		const _returnValueP6MIkzZ = await _HelpZSsFKeW.longestOptionTermLength(_cmdblrfWV, _helperPXoGmHE)
		const _argumentnXQ64Jd = "fYp9vmTAgieQg97XGKV1RWIvT7Vb1CTCj8lCLYADuNkwIPDfq6x5yvrX1FzdKg7XQrFbrdXokjiIwx";
		const _returnValuePig6SFY = await _HelpZSsFKeW.argumentTerm(_argumentnXQ64Jd)
	});

	it('test for Help', async () => {
		const _HelpGlNwv59 = new Help()
		const _cmdIeqgYBr = false;
		const _returnValuegIa6KxW = -4.177886594847761;
		const _arrayValueb7y7DV = () => { return _returnValuegIa6KxW };
		const _arrayValueur4I3F = true;
		const _returnValuelszSfYK = [_arrayValueb7y7DV, _arrayValueur4I3F]
		const _visibleArgumentsglsntol = () => { return _returnValuelszSfYK };
		const _returnValueW6Fo4Y = "Rjx7eJRNbJpIf38NkCVvHmwIOkIKFgcUNRnIfE2B3KfVS68nQYT1BTEhQk96gcj7WeVylcinOiUGPihTARUCEWyU1bsnlQ9";
		const _argumentTermJZRBRpl = () => { return _returnValueW6Fo4Y };
		const _helperAkYl9on = {
			"visibleArguments": _visibleArgumentsglsntol,
		"argumentTerm": _argumentTermJZRBRpl
	}
		const _returnValueBXloUJM = await _HelpGlNwv59.longestArgumentTermLength(_cmdIeqgYBr, _helperAkYl9on)
		const _argChoicesGmqp6i = {
		
	}
		const _defaultValuefFDxIwx = undefined;
		const _arrayValueQ3lFn83 = "7fQPtzcJywUewUrijLT5u";
		const _arrayValuex7OMkuk = -6.278009771191911;
		const _defaultValueDescriptionNyz7ZY0 = [_arrayValueQ3lFn83, _arrayValuex7OMkuk]
		const _arrayValueHNE5R9m = undefined;
		const _arrayValuezdrZ2o8 = true;
		const _descriptionqAibwq9 = [_arrayValueHNE5R9m, _arrayValuezdrZ2o8]
		const _argumentjQej2sf = {
			"argChoices": _argChoicesGmqp6i,
		"defaultValue": _defaultValuefFDxIwx,
		"defaultValueDescription": _defaultValueDescriptionNyz7ZY0,
		"description": _descriptionqAibwq9
	}
		const _returnValueem1ynr5 = await _HelpGlNwv59.argumentDescription(_argumentjQej2sf)
	});

	it('test for Help', async () => {
		const _HelpBrlSRUS = new Help()
		const _cmdI6PwAAo = true;
		const _arrayValuefyvDeMl = 1.059983996621721;
		const _arrayValuedKaeJGD = 4.034190390595288;
		const _arrayValuepM2LxvY = undefined;
		const _arrayValuecPRZYK = [_arrayValuefyvDeMl, _arrayValuedKaeJGD, _arrayValuepM2LxvY]
		const _arrayValuecY9b4c1 = undefined;
		const _helperBklwlzT = [_arrayValuecPRZYK, _arrayValuecY9b4c1]
		const _returnValuegT5FSo6 = await _HelpBrlSRUS.longestSubcommandTermLength(_cmdI6PwAAo, _helperBklwlzT)
		const _cmde8Q96Zv = null;
		const _helperb40wQDd = undefined;
		const _returnValueToq5iqz = await _HelpBrlSRUS.longestSubcommandTermLength(_cmde8Q96Zv, _helperb40wQDd)
		const _optionyvLualZ = "AtLG8uiT2FSMXP4Tb0A3CFDRRda2NeoFj8";
		const _returnValueX7BJMZY = await _HelpBrlSRUS.optionTerm(_optionyvLualZ)
		const __argsda3iV8 = {
		
	}
		const __nameOICqFnD = 6.525367586848187;
		const __aliaseslEr6nJU = {
		
	}
		const _optionssf9SgUm = {
		
	}
		const _cmdxBDT2T = {
			"_args": __argsda3iV8,
		"_name": __nameOICqFnD,
		"_aliases": __aliaseslEr6nJU,
		"options": _optionssf9SgUm
	}
		const _returnValueEwrJxzu = await _HelpBrlSRUS.subcommandTerm(_cmdxBDT2T)
		const _cmdu4mcA1e = 7.708490706181671;
		const _arrayValueG6vRvrP = undefined;
		const _arrayValueBTRiiN1 = false;
		const _arrayValuetqYxkz = [_arrayValueG6vRvrP, _arrayValueBTRiiN1]
		const _returnValueMpw6Iuu = false;
		const _arrayValuegdnCdcN = () => { return _returnValueMpw6Iuu };
		const _arrayValuey9lLks1 = null;
		const _arrayValueZATXT3w = "dDEZD3";
		const _helperbQUOYH5 = [_arrayValuetqYxkz, _arrayValuegdnCdcN, _arrayValuey9lLks1, _arrayValueZATXT3w]
		const _returnValueMTEC9PK = await _HelpBrlSRUS.longestOptionTermLength(_cmdu4mcA1e, _helperbQUOYH5)
	});

	it('test for Help', async () => {
		const _Helpm6fIOpc = new Help()
		const _optionXWguQFu = true;
		const _returnValue9d5Fo8 = await _Helpm6fIOpc.optionDescription(_optionXWguQFu)
		const _arrayValueqhjhz3F = null;
		const _arrayValueusnY3Rs = null;
		const _arrayValuerHMZhzr = true;
		const _cmdoKuWKcf = [_arrayValueqhjhz3F, _arrayValueusnY3Rs, _arrayValuerHMZhzr]
		const _returnValueVFUa0Wq = await _Helpm6fIOpc.visibleOptions(_cmdoKuWKcf)
		const _cmdH4T8ALu = "tOSDYWxRUlooegFPOdN39yQXA2rakOz0TB8NS7E5Nf1rKPSKHTTMFTQJvcKQFjlUJC9ZrYVf3MdjQ2xCoTg2iivE39k0cM1HD";
		const _returnValuecrbx5vu = undefined;
		const _helperMAbvRSQ = () => { return _returnValuecrbx5vu };
		const _returnValueP0GoiMr = await _Helpm6fIOpc.longestSubcommandTermLength(_cmdH4T8ALu, _helperMAbvRSQ)
	});

	it('test for Help', async () => {
		const _HelpNGWX2HC = new Help()
		const _cmdWCobg7w = "Uo0ftOfrYT0bHoEA8uh8HzE0Yg8BP6IMvYBBF2QvrcbxwYlwL7KDL5Vq6YAepn4ctXNczU3xD9LcX6c4c";
		const _returnValueLRpBuT2 = await _HelpNGWX2HC.subcommandDescription(_cmdWCobg7w)
		const _strG5RsVi = "ptoUsB6WKHIZ3qEyDbBTQVXAqh8UL2N601KYZ6UQTcw";
		const _widthO5BejUS = -6.486406785142482;
		const _indentCwIfFBo = {
		
	}
		const _minColumnWidthufzFzdT = 3.149304927148389;
		const _returnValueyujt0wJ = await _HelpNGWX2HC.wrap(_strG5RsVi, _widthO5BejUS, _indentCwIfFBo, _minColumnWidthufzFzdT)
		const _returnValueudSfLf = 3.7782124858066553;
		const _argumentT0kL81y = () => { return _returnValueudSfLf };
		const _returnValuejt4XhgD = await _HelpNGWX2HC.argumentTerm(_argumentT0kL81y)
		const _cmdGMXVjJN = undefined;
		const _returnValuenApPHiU = "jQEDXl1SIoaLWPCMJYhVQX5qhm5hcTgLtWK4wuejGmRX4IG9YbT6lkGVhZUojyUwQsOvNpNmexAqsc8cETsLF";
		const _longestOptionTermLengthFVUFcDZ = () => { return _returnValuenApPHiU };
		const _returnValuezN71VMd = null;
		const _longestSubcommandTermLengthz8sYnzJ = () => { return _returnValuezN71VMd };
		const _returnValuehJG7b9y = false;
		const _longestArgumentTermLengthBrgd8QX = () => { return _returnValuehJG7b9y };
		const _helperHQ0Bwk9 = {
			"longestOptionTermLength": _longestOptionTermLengthFVUFcDZ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthz8sYnzJ,
		"longestArgumentTermLength": _longestArgumentTermLengthBrgd8QX
	}
		const _returnValueeaVhW1 = await _HelpNGWX2HC.padWidth(_cmdGMXVjJN, _helperHQ0Bwk9)
	});

	it('test for Help', async () => {
		const _HelpQ7DQ1JU = new Help()
		const _cmdOuOZsjZ = "aIWzIipfqeN6ArXseh5uUlzTxTzSlO6xnwNImOLVEE1dWkKG5xYV8WtM2cx2ZlYod";
		const _returnValuerJd6Zhq = await _HelpQ7DQ1JU.commandDescription(_cmdOuOZsjZ)
		const _arrayValueue8gKmX = null;
		const _returnValueWTSjiH = [_arrayValueue8gKmX]
		const _descriptionSgn9GJw = () => { return _returnValueWTSjiH };
		const _cmdlWtFQrb = {
			"description": _descriptionSgn9GJw
	}
		const _returnValuerl1CPP0 = await _HelpQ7DQ1JU.subcommandDescription(_cmdlWtFQrb)
		const _cmdVdRFdWo = null;
		const _returnValueLXPS0Xl = true;
		const _returnValueXh81jZv = () => { return _returnValueLXPS0Xl };
		const _helperIsq5bgE = () => { return _returnValueXh81jZv };
		const _returnValuepkHhvdj = await _HelpQ7DQ1JU.longestArgumentTermLength(_cmdVdRFdWo, _helperIsq5bgE)
		const _arrayValuepHhDOBc = undefined;
		const _arrayValuec6DWR0u = null;
		const _cmd0LC9XC = [_arrayValuepHhDOBc, _arrayValuec6DWR0u]
		const _helperGkVUOCE = "ITvg7piedX86bIpGJBOskNVVmH11Mvx8meRqieF9dWL5Y";
		const _returnValuepRRbbvI = await _HelpQ7DQ1JU.longestArgumentTermLength(_cmd0LC9XC, _helperGkVUOCE)
	});

	it('test for Help', async () => {
		const _HelpWQxeLV = new Help()
		const _cmdpdvEieS = null;
		const _helperKIBefYE = new Help()
		const _cmdUgWGhoE = null;
		const _returnValueDCVIhQf = null;
		const _helperqak28u7 = () => { return _returnValueDCVIhQf };
		const _returnValueHkijGkx = await _helperKIBefYE.longestOptionTermLength(_cmdUgWGhoE, _helperqak28u7)
		const _returnValueHn1oe0E = -5.365596409729801;
		const _matchZ18XXsa = () => { return _returnValueHn1oe0E };
		const _arrayValueHuG2Uts = false;
		const _returnValueRrnzvUU = [_arrayValueHuG2Uts]
		const _returnValueBJnUtO = () => { return _returnValueRrnzvUU };
		const _substrJTL2TqJ = () => { return _returnValueBJnUtO };
		const _strw3gsYDn = {
			"match": _matchZ18XXsa,
		"substr": _substrJTL2TqJ
	}
		const _widthCuLmal6 = -2.0253657419819184;
		const _indenteE9MBMv = -4.058845381784363;
		const _minColumnWidthVcJrbBN = -7.290054545776739;
		const _returnValueEq8XJLi = await _helperKIBefYE.wrap(_strw3gsYDn, _widthCuLmal6, _indenteE9MBMv, _minColumnWidthVcJrbBN)
		const _cmdX0MOlo = -6.016352339924062;
		const _sortSubcommandsnDhMKpa = "NmhqOm6qO2cVF6ogLPcykxtdfHRhr6r9wH5zVFyazTdHOz189dVHPcDHYZWcSHItg";
		const _returnValueHmyWAFz = -9.65304748272288;
		const _subcommandTermffFEdnR = () => { return _returnValueHmyWAFz };
		const _helperZv7GTBi = {
			"sortSubcommands": _sortSubcommandsnDhMKpa,
		"subcommandTerm": _subcommandTermffFEdnR
	}
		const _returnValueIvQtbh2 = await _helperKIBefYE.longestSubcommandTermLength(_cmdX0MOlo, _helperZv7GTBi)
		const _returnValueKBt3POy = await _HelpWQxeLV.longestOptionTermLength(_cmdpdvEieS, _helperKIBefYE)
		const _optionMfPLful = []
		const _returnValuezEaFqIA = await _HelpWQxeLV.optionDescription(_optionMfPLful)
		const _returnValuecwa1mV = false;
		const _returnValuehONpLJK = () => { return _returnValuecwa1mV };
		const _cmdp9sYDVr = () => { return _returnValuehONpLJK };
		const _returnValuen8U4gDo = await _HelpWQxeLV.subcommandTerm(_cmdp9sYDVr)
		const _arrayValuejOrtOgH = "qqF8tuvc8YhuD94Qglf43y7L6HECBlN8OCbapUe";
		const _arrayValueaOTjlIN = -0.08185666286323823;
		const _arrayValueDrrT9VA = -6.513517090138588;
		const _arrayValueK2XOyR = [_arrayValueaOTjlIN, _arrayValueDrrT9VA]
		const _arrayValuezsL2o2e = undefined;
		const _cmdY9kz1x = [_arrayValuejOrtOgH, _arrayValueK2XOyR, _arrayValuezsL2o2e]
		const _returnValuehEZ4I6z = -5.012687406329486;
		const _visibleOptionsJB5OLaf = () => { return _returnValuehEZ4I6z };
		const _returnValuerpm4Zo9 = -1.7681779214985216;
		const _optionTermBXF6ol6 = () => { return _returnValuerpm4Zo9 };
		const _helperZrLNju9 = {
			"visibleOptions": _visibleOptionsJB5OLaf,
		"optionTerm": _optionTermBXF6ol6
	}
		const _returnValueCfNUUm2 = await _HelpWQxeLV.longestOptionTermLength(_cmdY9kz1x, _helperZrLNju9)
	});

	it('test for Help', async () => {
		const _HelpQVjPD5S = new Help()
		const __argsDescriptionCMIBXHn = {
		
	}
		const __argsTZ3CYTh = {
		
	}
		const _cmdj6PAy0v = {
			"_argsDescription": __argsDescriptionCMIBXHn,
		"_args": __argsTZ3CYTh
	}
		const _returnValueYEVmiKd = await _HelpQVjPD5S.visibleArguments(_cmdj6PAy0v)
	});

	it('test for Help', async () => {
		const _HelpkhdhTWO = new Help()
		const _arrayValueGzEp9sI = {
		
	}
		const _arrayValuebLAjJFY = {
		
	}
		const _arrayValueiHeY3JS = [_arrayValueGzEp9sI, _arrayValuebLAjJFY]
		const _arrayValueRS5ekPT = [_arrayValueiHeY3JS]
		const _flagsLNY05Uf = [_arrayValueRS5ekPT]
		const _optioniVhAhBd = {
			"flags": _flagsLNY05Uf
	}
		const _returnValueIe3SLe = await _HelpkhdhTWO.optionTerm(_optioniVhAhBd)
		const _cmdOj1Auzt = undefined;
		const _helperZGf4goQ = new Help()
		const _returnValueBIWc4ZD = 9.228801520795137;
		const _argumentcJaUEkt = () => { return _returnValueBIWc4ZD };
		const _returnValueT1jxw9d = await _helperZGf4goQ.argumentDescription(_argumentcJaUEkt)
		const _returnValueOMwhrn8 = undefined;
		const _optionzSRrNAY = () => { return _returnValueOMwhrn8 };
		const _returnValueuFfvJrR = await _helperZGf4goQ.optionDescription(_optionzSRrNAY)
		const _commandsVuVGKvx = {
		
	}
		const _returnValueWildaml = 9.374291051634692;
		const __hasImplicitHelpCommandJjoogA = () => { return _returnValueWildaml };
		const __helpCommandnameAndArgsqFj1ACQ = {
		
	}
		const _arrayValuex1RdDub = -5.347893614580262;
		const _arrayValueTQva5PG = {
		
	}
		const _returnValuege9JaWy = [_arrayValuex1RdDub, _arrayValueTQva5PG]
		const _createCommand7qc9sN = () => { return _returnValuege9JaWy };
		const __helpCommandDescriptionGWSHSxz = true;
		const _cmdaANz29C = {
			"commands": _commandsVuVGKvx,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandJjoogA,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsqFj1ACQ,
		"createCommand": _createCommand7qc9sN,
		"_helpCommandDescription": __helpCommandDescriptionGWSHSxz
	}
		const _returnValuetqcN81j = await _helperZGf4goQ.visibleCommands(_cmdaANz29C)
		const _returnValueRqzaq2k = "Eybz5UfvtxoV1jJLK1Spp3Dq4iUjnZfqhSmSSXPukQvQB6vv7GwEjy2RuVT9sjX";
		const _matchDyy79Qd = () => { return _returnValueRqzaq2k };
		const _returnValueTeZ005Z = {
		
	}
		const _substrXwUPR4R = () => { return _returnValueTeZ005Z };
		const _strJ7AhRcQ = {
			"match": _matchDyy79Qd,
		"substr": _substrXwUPR4R
	}
		const _widthIhaNHBj = 9.25982015371784;
		const _indenttacZlSt = 9.004346571701795;
		const _minColumnWidthmUQSZZb = 9.626869623380966;
		const _returnValueZjEGTcs = await _helperZGf4goQ.wrap(_strJ7AhRcQ, _widthIhaNHBj, _indenttacZlSt, _minColumnWidthmUQSZZb)
		const _cmdWToyPcq = "Cc4h1Aw7gziLHJF0cNCLmir4TSIE4mBq4LEezoNSI9sKXRJPK1ZdevSBXdheVd3Pp3Grk6s087FajLh5wr5QaYH58azHRg1Cm";
		const _returnValueyMqYfxx = await _helperZGf4goQ.visibleOptions(_cmdWToyPcq)
		const _returnValueyYxoaNs = await _HelpkhdhTWO.formatHelp(_cmdOj1Auzt, _helperZGf4goQ)
		const _cmdhVwjydR = "AOQhBQSeEsyNKipixc8qBENm0HI7hQu6GSC9gw";
		const _returnValueUcM1OzU = await _HelpkhdhTWO.visibleOptions(_cmdhVwjydR)
		const _cmdAYM99Xm = true;
		const _sortSubcommandsPbVTzz = true;
		const _returnValuewapFOo4 = undefined;
		const _subcommandTermg2pg8hF = () => { return _returnValuewapFOo4 };
		const _helperqMiFK00 = {
			"sortSubcommands": _sortSubcommandsPbVTzz,
		"subcommandTerm": _subcommandTermg2pg8hF
	}
		const _returnValueNdwRBCG = await _HelpkhdhTWO.longestSubcommandTermLength(_cmdAYM99Xm, _helperqMiFK00)
	});

	it('test for Help', async () => {
		const _Helpc2NyP4h = new Help()
		const _cmdQdNyEde = 6.658346540842739;
		const _returnValueVLhJY1D = await _Helpc2NyP4h.subcommandTerm(_cmdQdNyEde)
		const _argumentlszRQKY = "wl1fsJsx7VlaPqwkgxxUtIHmtzqlsiRBzvSFeC";
		const _returnValueGfnqNwy = await _Helpc2NyP4h.argumentTerm(_argumentlszRQKY)
		const _optionv3cg7kR = null;
		const _returnValuepwTRq8h = await _Helpc2NyP4h.optionTerm(_optionv3cg7kR)
		const _cmdnPca1v = -0.9654146072521748;
		const _returnValuecvLerYT = await _Helpc2NyP4h.visibleArguments(_cmdnPca1v)
		const _cmdzUHipXj = undefined;
		const _returnValuer4rtGr = undefined;
		const _longestOptionTermLengthYzmlNLS = () => { return _returnValuer4rtGr };
		const _returnValueA7ktIz = true;
		const _longestSubcommandTermLengthe9mfQhn = () => { return _returnValueA7ktIz };
		const _returnValueFJtk9Tp = undefined;
		const _longestArgumentTermLengthPAiU1Ep = () => { return _returnValueFJtk9Tp };
		const _helpermNWVmuV = {
			"longestOptionTermLength": _longestOptionTermLengthYzmlNLS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthe9mfQhn,
		"longestArgumentTermLength": _longestArgumentTermLengthPAiU1Ep
	}
		const _returnValueb16RSWo = await _Helpc2NyP4h.padWidth(_cmdzUHipXj, _helpermNWVmuV)
	});

	it('test for Help', async () => {
		const _HelpcrAutl4 = new Help()
		const _returnValuekfdRX0P = undefined;
		const _cmdOuky5n = () => { return _returnValuekfdRX0P };
		const _returnValuer5F3Fgv = await _HelpcrAutl4.commandUsage(_cmdOuky5n)
		const __argsDescriptionFesHUQ8 = {
		
	}
		const __argsVUmJBwJ = {
		
	}
		const _cmdrPs1dc9 = {
			"_argsDescription": __argsDescriptionFesHUQ8,
		"_args": __argsVUmJBwJ
	}
		const _returnValueSChLr0e = await _HelpcrAutl4.visibleArguments(_cmdrPs1dc9)
		const _flagsjE3DSQN = "tRbw73";
		const _arrayValuelHaI5sg = -6.201639110349516;
		const _arrayValuesmednuk = false;
		const _arrayValuekCYvplC = [_arrayValuelHaI5sg, _arrayValuesmednuk]
		const _arrayValueHroNYXs = null;
		const _arrayValueMzVI31V = undefined;
		const _arrayValueKUvOZiF = [_arrayValuekCYvplC, _arrayValueHroNYXs, _arrayValueMzVI31V]
		const _arrayValueELzAsgN = {
		
	}
		const _arrayValueqPLinxc = -9.327393939857279;
		const _arrayValueqaeOoMt = undefined;
		const _arrayValuemliyOKR = [_arrayValueqPLinxc, _arrayValueqaeOoMt]
		const _returnValuedZoXS0S = undefined;
		const _arrayValue12Nf7k = () => { return _returnValuedZoXS0S };
		const _descriptionNWacfKM = [_arrayValueKUvOZiF, _arrayValueELzAsgN, _arrayValuemliyOKR, _arrayValue12Nf7k]
		const _cmdbCY0z59 = new Option(_flagsjE3DSQN, _descriptionNWacfKM)
		const _fnnOyna1d = undefined;
		const _returnValueSmoCJA = await _cmdbCY0z59.argParser(_fnnOyna1d)
		const _valuesU7Vnmxd = null;
		const _returnValueV4vRxu2 = await _cmdbCY0z59.choices(_valuesU7Vnmxd)
		const _valuesNuWpw5P = "spXK";
		const _returnValueSeU4q3x = await _cmdbCY0z59.choices(_valuesNuWpw5P)
		const _returnValueTpawfy9 = await _HelpcrAutl4.commandDescription(_cmdbCY0z59)
		const _cmdMwYQYO7 = undefined;
		const _arrayValueJ4rJi3h = -6.010165183985901;
		const _returnValueyKqUPRi = [_arrayValueJ4rJi3h]
		const _sortSubcommandsdjXyGsg = () => { return _returnValueyKqUPRi };
		const _returnValueTJpqFEj = -9.704040909726169;
		const _subcommandTermc5dSTiv = () => { return _returnValueTJpqFEj };
		const _helperENYcVNB = {
			"sortSubcommands": _sortSubcommandsdjXyGsg,
		"subcommandTerm": _subcommandTermc5dSTiv
	}
		const _returnValuejs5CDZE = await _HelpcrAutl4.longestSubcommandTermLength(_cmdMwYQYO7, _helperENYcVNB)
	});

	it('test for Help', async () => {
		const _HelprMCafvy = new Help()
		const _arrayValuePIw4aHB = undefined;
		const _cmdEDdpdX = [_arrayValuePIw4aHB]
		const _helperzGV4oa = "KpuypGgzAji9zoSSdq8qhcByv2plIwlE";
		const _returnValuel3wC04Y = await _HelprMCafvy.formatHelp(_cmdEDdpdX, _helperzGV4oa)
	});

	it('test for Help', async () => {
		const _HelppmpMuNg = new Help()
		const _cmdqZ3C8v = null;
		const _returnValueLPcqTRE = undefined;
		const _helperM3aM5b1 = () => { return _returnValueLPcqTRE };
		const _returnValueuEGG4i7 = await _HelppmpMuNg.padWidth(_cmdqZ3C8v, _helperM3aM5b1)
	});

	it('test for Help', async () => {
		const _HelpkmjOTBe = new Help()
		const _flagsttaPJ4u = "3ajZMA1lJOegPp0VofXffeJajltaI9TUOfaXhOp3uzBcv2Xu4H71RCatRx1n79mREPLgWpW1HQnGmcR57AbauhRoR1z";
		const _arrayValueuqKjnjx = -4.042564667886577;
		const _arrayValueM0BN96j = {
		
	}
		const _descriptionljTdpo = [_arrayValueuqKjnjx, _arrayValueM0BN96j]
		const _optionb2gPYR = new Option(_flagsttaPJ4u, _descriptionljTdpo)
		const _namezSUu9Ij = "nz3B3sbuRORmdtuaZH8OugHeA6isPbyVrhsSMQHWlrynRVCbcEMOvZplqQHfg9w7azI";
		const _returnValuenSIEGn = await _optionb2gPYR.env(_namezSUu9Ij)
		const _valueP45Z0va = undefined;
		const _descriptionyV4frYB = undefined;
		const _returnValueaAVmRAB = await _optionb2gPYR.default(_valueP45Z0va, _descriptionyV4frYB)
		const _argW41FHTB = {
		
	}
		const _returnValueYJ8Nlyk = await _optionb2gPYR.is(_argW41FHTB)
		const _nameYRwW6i6 = null;
		const _returnValuevcN4R6c = await _optionb2gPYR.env(_nameYRwW6i6)
		const _valueTjLi89 = undefined;
		const _descriptionKtdpI49 = undefined;
		const _returnValueg0U94c = await _optionb2gPYR.default(_valueTjLi89, _descriptionKtdpI49)
		const _returnValueiaanfG = await _HelpkmjOTBe.optionDescription(_optionb2gPYR)
		const _strm4HfwDh = "2PeDDBN8ymmmLXhyfVFIoeVwvyifyDbdoX32q2uRpPonu1hB1skRO7axTN7ZJYQtYVRuoBju08UflSoDWD";
		const _widthTT4srbu = 2.8493608554741012;
		const _indentnmXi1Y = 3.1874367520638014;
		const _minColumnWidth9Ao6sP = 0.16148913184345304;
		const _returnValueoAlnYgw = await _HelpkmjOTBe.wrap(_strm4HfwDh, _widthTT4srbu, _indentnmXi1Y, _minColumnWidth9Ao6sP)
		const _returnValueqR3zZvN = "q5ZPSE30EjIZgOFyPFwn0TETjxHdukUktjjghMcs4JQlIyIeA2J2VPROWhCyyKUEqrXEtiC7HYyG";
		const _cmdDKoOSrX = () => { return _returnValueqR3zZvN };
		const _returnValuelCMXryt = await _HelpkmjOTBe.subcommandDescription(_cmdDKoOSrX)
		const _argumentdzhe73Y = []
		const _returnValueSvgFmY = await _HelpkmjOTBe.argumentTerm(_argumentdzhe73Y)
	});

	it('test for Help', async () => {
		const _Helph4B3WkF = new Help()
		const _optionY1dHArS = "muJmqYaTF9Oh3bgp";
		const _returnValuenpdOwZo = await _Helph4B3WkF.optionDescription(_optionY1dHArS)
		const _optionjcK8TjB = "BcaqQzryxJwfrOqesCmY4OI7P27mzGRCUmVxNdCjc76F";
		const _returnValueBfFVdvG = await _Helph4B3WkF.optionDescription(_optionjcK8TjB)
		const _returnValuea5ysmo6 = "bnj9ySCJp8vKNI3aet4yRajZBWUVTiko1uH5p5W";
		const _slicehpFehuX = () => { return _returnValuea5ysmo6 };
		const _namevsLgjS = {
			"slice": _slicehpFehuX
	}
		const _descriptionenHnnsK = "in0HARiuIOZokz8yPcwjRvvWkPXOeBhW9vs7S2OonyPu6LkdGx6qGNl";
		const _option8FD0US = new Argument(_namevsLgjS, _descriptionenHnnsK)
		const _valueYX6urq = undefined;
		const _descriptionFP7PMO0 = undefined;
		const _returnValueUIuIJbP = await _option8FD0US.default(_valueYX6urq, _descriptionFP7PMO0)
		const _returnValueaMPqck = await _option8FD0US.name()
		const _arrayValueTEqYAgD = null;
		const _arrayValuerKHMIqm = false;
		const _valuesWiBXK78 = [_arrayValueTEqYAgD, _arrayValuerKHMIqm]
		const _returnValueTY0h8JR = await _option8FD0US.choices(_valuesWiBXK78)
		const _valueAFHEcxr = true;
		const _previousAjGyrl3 = {
		
	}
		const _returnValue9mFOtR = await _option8FD0US._concatValue(_valueAFHEcxr, _previousAjGyrl3)
		const _arrayValueVbyqkbw = 3.5999937672872733;
		const _arrayValuefJYZn0N = null;
		const _arrayValueaY0C8Oi = undefined;
		const _valuessY4i6M = [_arrayValueVbyqkbw, _arrayValuefJYZn0N, _arrayValueaY0C8Oi]
		const _returnValuegCBf3ZK = await _option8FD0US.choices(_valuessY4i6M)
		const _returnValueWAOXNXm = await _Helph4B3WkF.optionDescription(_option8FD0US)
		const _cmdyaeXU3z = 1.943891280174487;
		const _returnValueWHnSTH1 = undefined;
		const _helperFeTnQF7 = () => { return _returnValueWHnSTH1 };
		const _returnValuezlpQ6ip = await _Helph4B3WkF.longestArgumentTermLength(_cmdyaeXU3z, _helperFeTnQF7)
		const _returnValueXrG24fG = false;
		const _cmdvwZGSw = () => { return _returnValueXrG24fG };
		const _returnValuenYtze5v = await _Helph4B3WkF.subcommandTerm(_cmdvwZGSw)
	});

	it('test for Help', async () => {
		const _HelpmRnxBx4 = new Help()
		const _namechfb5F = false;
		const _cmdj6AaktE = new Command(_namechfb5F)
		const _returnValueMFSK0t0 = await _cmdj6AaktE.opts()
		const _arrayValueGKHLXhH = 4.305535250557462;
		const _arrayValueA8kIewT = 3.5578765873520695;
		const _arrayValueLw5RyIG = {
		
	}
		const _errorxLvHWoF = [_arrayValueGKHLXhH, _arrayValueA8kIewT, _arrayValueLw5RyIG]
		const _command9BlEwF = false;
		const _contextOptionsALnnkxr = {
			"error": _errorxLvHWoF,
		"command": _command9BlEwF
	}
		const _returnValueBCQVlbh = await _cmdj6AaktE._getHelpContext(_contextOptionsALnnkxr)
		const _returnValueUDVFpP8 = await _HelpmRnxBx4.visibleCommands(_cmdj6AaktE)
		const _arrayValueSCTyR0 = false;
		const _arrayValuezipHzq8 = -0.347974134573084;
		const _returnValuewPNUWHk = [_arrayValueSCTyR0, _arrayValuezipHzq8]
		const _namelyHy3pJ = () => { return _returnValuewPNUWHk };
		const _descriptionKNAxcop = 4.786787507880245;
		const _cmdioV3UFn = new Argument(_namelyHy3pJ, _descriptionKNAxcop)
		const _returnValueGxe20e = await _cmdioV3UFn.argRequired()
		const _arrayValuez3NkDbQ = undefined;
		const _valuesxtQu7cf = [_arrayValuez3NkDbQ]
		const _returnValueITdJ7TX = await _cmdioV3UFn.choices(_valuesxtQu7cf)
		const _fnvYNWa1o = undefined;
		const _returnValueIqdNoD = await _cmdioV3UFn.argParser(_fnvYNWa1o)
		const _returnValueRoY26ME = await _cmdioV3UFn.argRequired()
		const _returnValueRoiiTJZ = await _HelpmRnxBx4.commandDescription(_cmdioV3UFn)
	});

	it('test for Help', async () => {
		const _Helps4C3M46 = new Help()
		const _flagshQCsalL = "5WVPG1IEagNT9ddmdcVzSUbwiMsLlvCA5aGfXyjJz1rHHx";
		const _descriptionDlfTEnC = undefined;
		const _argumentspHojYY = new Option(_flagshQCsalL, _descriptionDlfTEnC)
		const _returnValuetbA9qu = await _argumentspHojYY.attributeName()
		const _namew7i9MZ4 = true;
		const _returnValueVLkKtoI = await _argumentspHojYY.env(_namew7i9MZ4)
		const _nameunyxNq = undefined;
		const _returnValueuNR7RA = await _argumentspHojYY.env(_nameunyxNq)
		const _returnValueYHKVnl = "zQaCye9CZCMR6NY9eRzJs8U3EBCbrg5GIjvmItvWRJAbw3R5nn1VOTq3HOc91FckGslcMsotNtrKm46ogd0T";
		const _valueWnI26wJ = () => { return _returnValueYHKVnl };
		const _arrayValuerzYfk9D = null;
		const _arrayValueYkFUdLm = true;
		const _previoushsTajwh = [_arrayValuerzYfk9D, _arrayValueYkFUdLm]
		const _returnValueoEP1ArG = await _argumentspHojYY._concatValue(_valueWnI26wJ, _previoushsTajwh)
		const _fneUEN0vS = undefined;
		const _returnValueSsBBAgF = await _argumentspHojYY.argParser(_fneUEN0vS)
		const _returnValueFgqyIKr = await _Helps4C3M46.argumentTerm(_argumentspHojYY)
		const _cmdI9RIEaj = "p7z";
		const _returnValueIlLF3w8 = 0.5820871365950104;
		const _visibleArgumentsTCuCga = () => { return _returnValueIlLF3w8 };
		const _arrayValueWVsiSx5 = undefined;
		const _returnValueiWdUaFQ = [_arrayValueWVsiSx5]
		const _argumentTermuYr5xO = () => { return _returnValueiWdUaFQ };
		const _helperwYMdFBH = {
			"visibleArguments": _visibleArgumentsTCuCga,
		"argumentTerm": _argumentTermuYr5xO
	}
		const _returnValueYHBQk0g = await _Helps4C3M46.longestArgumentTermLength(_cmdI9RIEaj, _helperwYMdFBH)
		const _arrayValuegnal0wE = undefined;
		const _arrayValuePe1Kdma = null;
		const _returnValuef3vjNCd = [_arrayValuegnal0wE, _arrayValuePe1Kdma]
		const _descriptionQR0mYk5 = () => { return _returnValuef3vjNCd };
		const _cmdTEPrZK8 = {
			"description": _descriptionQR0mYk5
	}
		const _returnValueRIfKVSZ = await _Helps4C3M46.commandDescription(_cmdTEPrZK8)
		const _cmdwaPGDZs = true;
		const _helperbJGKkFh = "dEekJIVA6O6kDBTdIgzmvzRme6gyrAYBa592LmcyHEKpZMha5smX2U21uONx";
		const _returnValuebI4CAk = await _Helps4C3M46.formatHelp(_cmdwaPGDZs, _helperbJGKkFh)
		const _arrayValueNhWRW3 = {
		
	}
		const _cmdszJC2rp = [_arrayValueNhWRW3]
		const _returnValueJxNgfLT = await _Helps4C3M46.visibleArguments(_cmdszJC2rp)
	});

	it('test for Help', async () => {
		const _HelpKpPiH5L = new Help()
		const _arrayValueD5c39R3 = false;
		const _arrayValuea6nJj6k = "kxtJ6R";
		const _arrayValueqfO3SiW = {
		
	}
		const _arrayValueU22zlw4 = [_arrayValueqfO3SiW]
		const _arrayValueByFdvGu = [_arrayValuea6nJj6k, _arrayValueU22zlw4]
		const _arrayValueHKnMDQ = true;
		const _arrayValuethegdW = [_arrayValueD5c39R3, _arrayValueByFdvGu, _arrayValueHKnMDQ]
		const _arrayValueNUwg2Rk = "6V96s2VgzLDKql4NiD9aWVKoBpSqkCcREnwda";
		const _returnValueaReMPuo = [_arrayValuethegdW, _arrayValueNUwg2Rk]
		const _arrayValuebJiMPvG = () => { return _returnValueaReMPuo };
		const _returnValueY3gHhNV = [_arrayValuebJiMPvG]
		const _matchPcaLwoN = () => { return _returnValueY3gHhNV };
		const _arrayValuerXc1Mi4 = -2.0468062999861054;
		const _returnValuegIEgW2 = [_arrayValuerXc1Mi4]
		const _substrlmeUiqD = () => { return _returnValuegIEgW2 };
		const _struYAjod9 = {
			"match": _matchPcaLwoN,
		"substr": _substrlmeUiqD
	}
		const _widthNfazjrM = false;
		const _indentFa3Wgy = 0.7572313989481998;
		const _minColumnWidthBcyvwAk = -4.42619714680856;
		const _returnValueiAo5vgA = await _HelpKpPiH5L.wrap(_struYAjod9, _widthNfazjrM, _indentFa3Wgy, _minColumnWidthBcyvwAk)
		const _returnValueYh9vzqr = undefined;
		const _cmdwM7nRsq = () => { return _returnValueYh9vzqr };
		const _returnValueg99HIf0 = await _HelpKpPiH5L.subcommandTerm(_cmdwM7nRsq)
		const _nameTyvH208 = 7.985417930207262;
		const _cmdsWNjy0 = new Command(_nameTyvH208)
		const _returnValuez6Q3pjO = undefined;
		const _returnValue1HlREd = () => { return _returnValuez6Q3pjO };
		const _concatFV5JzRs = () => { return _returnValue1HlREd };
		const _returnValue2scGwD = {
		
	}
		const _sliceQqfGjLy = () => { return _returnValue2scGwD };
		const _lengthnmLtiI5 = 0.47583803752030107;
		const _operandsDtGubQv = {
			"concat": _concatFV5JzRs,
		"slice": _sliceQqfGjLy,
		"length": _lengthnmLtiI5
	}
		const _unknownMn86F4U = {
		
	}
		const _returnValuemHEkxJ = await _cmdsWNjy0._parseCommand(_operandsDtGubQv, _unknownMn86F4U)
		const _displayHelpcTdGkHW = false;
		const _returnValuePEPAK1L = await _cmdsWNjy0.showHelpAfterError(_displayHelpcTdGkHW)
		const _positionGO0oLa = {
		
	}
		const _textrKOY4qR = {
		
	}
		const _returnValuehVvXUL = await _cmdsWNjy0.addHelpText(_positionGO0oLa, _textrKOY4qR)
		const _returnValueQwTmsgg = await _HelpKpPiH5L.commandDescription(_cmdsWNjy0)
	});

	it('test for Help', async () => {
		const _HelpeTrANyU = new Help()
		const _strZ6IWlTI = "BeR2v6EaGUfwm6E7K8Ki5pZhPFEM2PQLqoDV7";
		const _widthkAVVLn = "5MxcctNfPSEvMPeArJ5ZKO";
		const _indentlypgU3G = 7.128041486311666;
		const _minColumnWidthDL3UeMW = 5.395515706269121;
		const _returnValueClK5UDk = await _HelpeTrANyU.wrap(_strZ6IWlTI, _widthkAVVLn, _indentlypgU3G, _minColumnWidthDL3UeMW)
		const _argumentSvXMo71 = undefined;
		const _returnValuezgxVNw = await _HelpeTrANyU.argumentDescription(_argumentSvXMo71)
	});

	it('test for Help', async () => {
		const _HelpfLCOA85 = new Help()
		const _returnValueWX58nUk = null;
		const _sliceZAnybY = () => { return _returnValueWX58nUk };
		const _namecSiMLjs = {
			"slice": _sliceZAnybY
	}
		const _descriptiont8Rp6CR = null;
		const _argumentTXBTO6Q = new Argument(_namecSiMLjs, _descriptiont8Rp6CR)
		const _fnH7sAopw = undefined;
		const _returnValuexKejl8f = await _argumentTXBTO6Q.argParser(_fnH7sAopw)
		const _returnValuesnPixfc = await _HelpfLCOA85.argumentDescription(_argumentTXBTO6Q)
		const _namedBke4ty = 2.013634959911048;
		const _cmddJVS73D = new Command(_namedBke4ty)
		const _strMZZqdw3 = undefined;
		const _flagsEFEeJJm = {
		
	}
		const _descriptionEpZRL3H = {
		
	}
		const _returnValueZ3vF6V = await _cmddJVS73D.version(_strMZZqdw3, _flagsEFEeJJm, _descriptionEpZRL3H)
		const _subcommandiGciBYX = "sqvPaWrb7WKSaGsbyNBbHkfGH5qO6WpPF7EXI7cfQrLAi25eSjkzdEg3SDkz3weVsmAYICV7l";
		const _arrayValueq9xT9Nx = null;
		const _arrayValueKgdzxzz = -3.8904889580511073;
		const _returnValueuE329s2 = [_arrayValueKgdzxzz]
		const _arrayValuegCTTMoe = () => { return _returnValueuE329s2 };
		const _arrayValueuHG5ojm = [_arrayValueq9xT9Nx, _arrayValuegCTTMoe]
		const _arrayValued76sYm = -6.009814362198316;
		const _argsu2A7OE8 = [_arrayValueuHG5ojm, _arrayValued76sYm]
		const _returnValueb7HyHe = await _cmddJVS73D._executeSubCommand(_subcommandiGciBYX, _argsu2A7OE8)
		const _arrayValueVnMKjY6 = null;
		const _arrayValueN8YuHnj = null;
		const _arrayValuePSz9oPz = "mTDY9oQchrmcR4t2rjYpKUrXMvprRL7lYHclPiwCM2";
		const _strnLSKzGB = [_arrayValueVnMKjY6, _arrayValueN8YuHnj, _arrayValuePSz9oPz]
		const _returnValueOi184ul = await _cmddJVS73D.name(_strnLSKzGB)
		const _returnValueksjG7fF = await _HelpfLCOA85.commandUsage(_cmddJVS73D)
		const _cmd7H5bxz = undefined;
		const _arrayValueyztITYD = null;
		const _arrayValuen2WKAfK = undefined;
		const _arrayValueJlN9tHk = 6.153590970280295;
		const _arrayValueyNkjf6T = true;
		const _arrayValuej0ORSYI = [_arrayValueyNkjf6T]
		const _arrayValueO39TSpP = [_arrayValuen2WKAfK, _arrayValueJlN9tHk, _arrayValuej0ORSYI]
		const _arrayValueVKElu1 = "mHMF7Ie2QYsEEFGIYdsByS6jPxbd61tcqzySRIgmErkwJpMqsBtFQRX4E";
		const _arrayValueb1yybQg = null;
		const _arrayValueeaGEuh1 = [_arrayValueb1yybQg]
		const _helperaJaq9rf = [_arrayValueyztITYD, _arrayValueO39TSpP, _arrayValueVKElu1, _arrayValueeaGEuh1]
		const _returnValue24mj9M = await _HelpfLCOA85.longestOptionTermLength(_cmd7H5bxz, _helperaJaq9rf)
	});

	it('test for Help', async () => {
		const _Helpk2lKmyQ = new Help()
		const _nameDt5UMus = -6.140196379544845;
		const _descriptionvyvclSD = null;
		const _optionSmnYVQD = new Argument(_nameDt5UMus, _descriptionvyvclSD)
		const _returnValuekRb9ga3 = await _optionSmnYVQD.argRequired()
		const _valueckf1ipr = {
		
	}
		const _descriptionMc01fyt = undefined;
		const _returnValuehUrQksK = await _optionSmnYVQD.default(_valueckf1ipr, _descriptionMc01fyt)
		const _returnValueOvfKyyk = await _optionSmnYVQD.name()
		const _returnValueucf7p0A = undefined;
		const _arrayValueL1nzHTL = () => { return _returnValueucf7p0A };
		const _valuesaxq3Z7L = [_arrayValueL1nzHTL]
		const _returnValuebhW20sn = await _optionSmnYVQD.choices(_valuesaxq3Z7L)
		const _returnValuedTvVoD6 = await _Helpk2lKmyQ.optionDescription(_optionSmnYVQD)
		const _cmdoPfjgas = -6.64993700849927;
		const _arrayValueHZYLOeG = false;
		const _helperF0eSed = [_arrayValueHZYLOeG]
		const _returnValuesKaVcPw = await _Helpk2lKmyQ.longestArgumentTermLength(_cmdoPfjgas, _helperF0eSed)
		const _arrayValueFT1sIU = "rkASFsaD8UJR9drJpSmS3xDpvyEOKP8h7dV5cl0POaX1edFyZnR1PjVBxY";
		const _arrayValueh9GMuIO = 6.3882240643475825;
		const _arrayValueNKdesps = [_arrayValueFT1sIU, _arrayValueh9GMuIO]
		const _arrayValuee4EGFd8 = [_arrayValueNKdesps]
		const _optione08zUWh = [_arrayValuee4EGFd8]
		const _returnValueMzrSR28 = await _Helpk2lKmyQ.optionDescription(_optione08zUWh)
	});

	it('test for Help', async () => {
		const _HelpfdEXiBp = new Help()
		const _argumentFxkw3MJ = "vyn3QR";
		const _returnValueN4nKfIU = await _HelpfdEXiBp.argumentDescription(_argumentFxkw3MJ)
		const _argumentOF3KLya = "yw0JLGy41b8KguA6vqf7HiFsJvWNXFdgQccztf7B5eArRzVPsVlNo1tCtIDUjaNsCaXEDXJyz19XLKQgLWQUIzZtXlh";
		const _returnValueAEmOL0c = await _HelpfdEXiBp.argumentDescription(_argumentOF3KLya)
		const __nameXgvXuLk = -2.2139419622205647;
		const __aliasesOqvYPox = {
		
	}
		const _parentl7Q7rcP = {
		
	}
		const _returnValueRE1T4jr = "HpQRmGa8lyFc4wVIqtwXQhDEmiQmJSfV8g9WvPOdg7gXdsvh5QShPr1CjTUM6nEeOgDgbc1MCN67x2R9im";
		const _usageozS7ITH = () => { return _returnValueRE1T4jr };
		const _cmdCFO7YVQ = {
			"_name": __nameXgvXuLk,
		"_aliases": __aliasesOqvYPox,
		"parent": _parentl7Q7rcP,
		"usage": _usageozS7ITH
	}
		const _returnValuePAYRyH = await _HelpfdEXiBp.commandUsage(_cmdCFO7YVQ)
	});

	it('test for Help', async () => {
		const _HelpNShdnVA = new Help()
		const _nameUIsO6H9 = undefined;
		const _cmdmQpaLx2 = new Command(_nameUIsO6H9)
		const _aliasqishpLU = undefined;
		const _returnValuetIVSch0 = await _cmdmQpaLx2.alias(_aliasqishpLU)
		const _strTOsIeZ3 = undefined;
		const _flagsLDPRUZm = {
		
	}
		const _arrayValueuRHFIIV = undefined;
		const _returnValuenccoLUR = -8.971257712848152;
		const _arrayValueRvT4ha = () => { return _returnValuenccoLUR };
		const _arrayValuesmBiScA = undefined;
		const _descriptionufZg4yc = [_arrayValueuRHFIIV, _arrayValueRvT4ha, _arrayValuesmBiScA]
		const _returnValuegBLPirO = await _cmdmQpaLx2.version(_strTOsIeZ3, _flagsLDPRUZm, _descriptionufZg4yc)
		const _returnValueheBBLXW = await _HelpNShdnVA.subcommandTerm(_cmdmQpaLx2)
		const _cmdjk0vBQE = null;
		const _arrayValueTyDUBW6 = undefined;
		const _arrayValuelqwjmvl = undefined;
		const _arrayValueJCE7Ret = false;
		const _helperYBjpO3h = [_arrayValueTyDUBW6, _arrayValuelqwjmvl, _arrayValueJCE7Ret]
		const _returnValuePNQOGvc = await _HelpNShdnVA.padWidth(_cmdjk0vBQE, _helperYBjpO3h)
	});

	it('test for Help', async () => {
		const _Helpm58G3w = new Help()
		const _flagsNLYLGHe = "Ar33TgLkSr3EuGTBCnvTY7YBHim";
		const _descriptionaVhGKjM = "KzSZJnBqSYEHI8I28n8aI8K0wRDg6s1m4";
		const _argumentoREo5mP = new Option(_flagsNLYLGHe, _descriptionaVhGKjM)
		const _values9j4vGf = true;
		const _returnValueCGPy8aZ = await _argumentoREo5mP.choices(_values9j4vGf)
		const _returnValueFyHLHT = await _argumentoREo5mP.name()
		const _valueokDxyqb = false;
		const _previousnsKDVjK = {
		
	}
		const _returnValuehzYjhw7 = await _argumentoREo5mP._concatValue(_valueokDxyqb, _previousnsKDVjK)
		const _returnValueJ6YVJzO = await _argumentoREo5mP.name()
		const _arrayValueaBv3G7q = null;
		const _valuesbi1r4dT = [_arrayValueaBv3G7q]
		const _returnValueLUj5lSE = await _argumentoREo5mP.choices(_valuesbi1r4dT)
		const _returnValuehL8X5IZ = await _Helpm58G3w.argumentDescription(_argumentoREo5mP)
	});

	it('test for Help', async () => {
		const _HelpW9RxXIr = new Help()
		const _flagsgleP2rl = true;
		const _optionwpCVgKQ = {
			"flags": _flagsgleP2rl
	}
		const _returnValuecmr5Vja = await _HelpW9RxXIr.optionTerm(_optionwpCVgKQ)
		const _returnValueDlueoLW = "zNiDu38v83KVzqVsRrNYLNvg7MnH9u2VAQi0EeJnkaFxDnBraEJn6iVaBoIQUOmmTe";
		const _arrayValuee3gKEOg = () => { return _returnValueDlueoLW };
		const _name2ipH9u = [_arrayValuee3gKEOg]
		const _cmdsI3RPUB = new Command(_name2ipH9u)
		const _flagsR7nycwU = null;
		const _returnValueoAFhNYV = true;
		const _descriptionK2ku6C = () => { return _returnValueoAFhNYV };
		const _returnValueYf8Fkk1 = await _cmdsI3RPUB.helpOption(_flagsR7nycwU, _descriptionK2ku6C)
		const _returnValueFE5hTRQ = await _HelpW9RxXIr.visibleOptions(_cmdsI3RPUB)
		const _optionPOINCEI = "dBCjlQ3YVkN01KAv3HdNmFYgSFDAjpQOSXSUkGWEar5";
		const _returnValueS4FY8mg = await _HelpW9RxXIr.optionDescription(_optionPOINCEI)
		const _nameYYrDf2S = undefined;
		const _argumenteCISWnF = new Command(_nameYYrDf2S)
		const _flagst3BCeEr = false;
		const _descriptionBBIHvz3 = null;
		const _returnValueI3pGZpW = await _argumenteCISWnF.createOption(_flagst3BCeEr, _descriptionBBIHvz3)
		const _arrayValueLW09Z2Z = undefined;
		const _receivedArgsfveAozY = [_arrayValueLW09Z2Z]
		const _returnValue7dneIk = await _argumenteCISWnF._excessArguments(_receivedArgsfveAozY)
		const _flagsv55KC8H = true;
		const _descriptionP7NF7ZQ = "1i2MBNc7BmiA4euQVx3gg9OOAQX8rjwgbJVQKkLaCU7EfipQ8CPcyVFjvha3Y27IwinuuOQy8u7lLwLo2KU";
		const _fnRs7Fsm7 = 6.367701850116607;
		const _defaultValueJMZnJ0f = 1.8125376241868292;
		const _returnValueY7UmP1V = await _argumenteCISWnF.option(_flagsv55KC8H, _descriptionP7NF7ZQ, _fnRs7Fsm7, _defaultValueJMZnJ0f)
		const _contextOptionsOol2UZ0 = 4.759999910636099;
		const _returnValueJrefv4T = await _argumenteCISWnF.help(_contextOptionsOol2UZ0)
		const _returnValueKnJh8o = await _HelpW9RxXIr.argumentTerm(_argumenteCISWnF)
	});

	it('test for Help', async () => {
		const _HelpY9EHH2o = new Help()
		const _option1x6uHb = "5SC6vpg4SupaUMay74blbdKvgAG6XYUDheMhxpjaLt1VO7GLYGaYS3Ps";
		const _returnValuecQ0m5df = await _HelpY9EHH2o.optionDescription(_option1x6uHb)
		const _returnValueSO0Lo0I = null;
		const _sliceVE2Hme1 = () => { return _returnValueSO0Lo0I };
		const _namePmjOpD = {
			"slice": _sliceVE2Hme1
	}
		const _descriptionjLWQjlf = true;
		const _argumentNTjYEd = new Argument(_namePmjOpD, _descriptionjLWQjlf)
		const _returnValueD4hUi9x = await _argumentNTjYEd.argRequired()
		const _valuekvMDfKd = "7eIXJ2Imo8ftGrD79m0K9wCCDdq1IebsMsVe4cAHnwkVCjq9eASiPLJ1u8219owWMaLOw1fGlsqyQnKyXFXBr4N4JwQ4SvzC5H";
		const _descriptionmGsUJeE = undefined;
		const _returnValueBwFcNl = await _argumentNTjYEd.default(_valuekvMDfKd, _descriptionmGsUJeE)
		const _fnY35Tx6l = undefined;
		const _returnValuexVirccy = await _argumentNTjYEd.argParser(_fnY35Tx6l)
		const _returnValueIcfCGHm = await _HelpY9EHH2o.argumentDescription(_argumentNTjYEd)
		const _arrayValueCzxwwce = true;
		const _cmdf163GEj = [_arrayValueCzxwwce]
		const _returnValueEIZwxgM = await _HelpY9EHH2o.visibleOptions(_cmdf163GEj)
		const _cmdy6yihF2 = "FUXvGM0oP5VS9NSL3HSze4X6y7AhEaECYpSUtJme1O787ZmRbj5GuJwpfwnBbBOnpJGmy8Skw6iitnn3gXTpsY";
		const _returnValueOz5x34C = await _HelpY9EHH2o.subcommandTerm(_cmdy6yihF2)
		const _arrayValuece2weOu = {
		
	}
		const _arrayValuewxhQxE = null;
		const _arrayValueLRQbiVG = undefined;
		const _arrayValueoAIew1 = [_arrayValuewxhQxE, _arrayValueLRQbiVG]
		const _cmdAXGQJs9 = [_arrayValuece2weOu, _arrayValueoAIew1]
		const _returnValuerBt1Jw7 = await _HelpY9EHH2o.commandUsage(_cmdAXGQJs9)
	});

	it('test for Help', async () => {
		const _HelpFAp0Qja = new Help()
		const _nameigd5DvL = false;
		const _argumentMCW2RdH = new Command(_nameigd5DvL)
		const _returnValuejhAtZup = await _argumentMCW2RdH._hasImplicitHelpCommand()
		const _allowExcessdiziWF8 = true;
		const _returnValueg2vO0z = await _argumentMCW2RdH.allowExcessArguments(_allowExcessdiziWF8)
		const _storeAsPropertiesb3JKCve = true;
		const _returnValuejF32eZ1 = await _argumentMCW2RdH.storeOptionsAsProperties(_storeAsPropertiesb3JKCve)
		const _keyaqsUa8X = "bpqmr8ErRXx8vMyRMQtlcXIaEiNXu";
		const _returnValueFnHUoP6 = await _argumentMCW2RdH.getOptionValueSource(_keyaqsUa8X)
		const _returnValueuZ5so1a = await _HelpFAp0Qja.argumentTerm(_argumentMCW2RdH)
		const __nameiC3uj0v = -2.4109058481902714;
		const _arrayValueepDvx4S = {
		
	}
		const __aliasesdMIBhNi = [_arrayValueepDvx4S]
		const _parentslhjZWt = null;
		const _returnValueiSoIaie = undefined;
		const _usagerbWFV2r = () => { return _returnValueiSoIaie };
		const _cmdjkEJce4 = {
			"_name": __nameiC3uj0v,
		"_aliases": __aliasesdMIBhNi,
		"parent": _parentslhjZWt,
		"usage": _usagerbWFV2r
	}
		const _returnValueZsBifPw = await _HelpFAp0Qja.commandUsage(_cmdjkEJce4)
		const _returnValueBwS1rh = true;
		const _argumentfHbvpAX = () => { return _returnValueBwS1rh };
		const _returnValueZ5NDPqb = await _HelpFAp0Qja.argumentDescription(_argumentfHbvpAX)
		const _returnValuexxuXPke = -8.676587121926023;
		const _cmdy6XAs4T = () => { return _returnValuexxuXPke };
		const _returnValuehJ9mS4 = await _HelpFAp0Qja.visibleOptions(_cmdy6XAs4T)
	});
})