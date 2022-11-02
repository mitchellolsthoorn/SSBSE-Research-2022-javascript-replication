export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpWT4oHD7 = new Help()
		const _cmdVk2FELY = "h4ox3bKxlLlMBqebNWIXrW9TM0l37lPxhWtKLP1PCFsHNzRfGlvVG3PRzQ1CfxSfxYol4xQNTGXbG";
		const _returnValueCNVz1hu = await _HelpWT4oHD7.commandUsage(_cmdVk2FELY)
		const _cmdxde2eaV = "";
		const _returnValueKdWHgFc = await _HelpWT4oHD7.commandUsage(_cmdxde2eaV)
		const _cmdnpILbWH = "GpmKxCqmmyMTdOKqeYHG0XVEU45PFAybocD24Im58Oll3Ina8dlrr8vHxgd7IxaBku";
		const _returnValueZgNXPEb = await _HelpWT4oHD7.visibleOptions(_cmdnpILbWH)
		const __argsDescriptionTIEvMWm = {
		
	}
		const __argsoNweRUh = {
		
	}
		const _cmdnBdb1LB = {
			"_argsDescription": __argsDescriptionTIEvMWm,
		"_args": __argsoNweRUh
	}
		const _returnValueOEPpjML = await _HelpWT4oHD7.visibleArguments(_cmdnBdb1LB)
		const __argsm0BQtqG = {
		
	}
		const __nameps7S196 = -1.3667911985489098;
		const __aliasesLI7x3cp = {
		
	}
		const _optionsVS8yDVL = {
		
	}
		const _cmdAQuX0IC = {
			"_args": __argsm0BQtqG,
		"_name": __nameps7S196,
		"_aliases": __aliasesLI7x3cp,
		"options": _optionsVS8yDVL
	}
		const _returnValueyCXCDhl = await _HelpWT4oHD7.subcommandTerm(_cmdAQuX0IC)
	});

	it('test for Help', async () => {
		const _HelpcjFb3Tj = new Help()
		const _arrayValuerkS1neZ = null;
		const _arrayValueOTZ84PY = []
		const _argumentDHY3MuF = [_arrayValuerkS1neZ, _arrayValueOTZ84PY]
		const _returnValueRcsya8t = await _HelpcjFb3Tj.argumentDescription(_argumentDHY3MuF)
		const _cmdnqNEPxt = true;
		const _sortSubcommandsKvJnVyq = null;
		const _returnValuenBesreA = null;
		const _subcommandTermd5yVff = () => { return _returnValuenBesreA };
		const _helperqxV4eXh = {
			"sortSubcommands": _sortSubcommandsKvJnVyq,
		"subcommandTerm": _subcommandTermd5yVff
	}
		const _returnValuewQtY74Z = await _HelpcjFb3Tj.longestSubcommandTermLength(_cmdnqNEPxt, _helperqxV4eXh)
		const _arrayValuexuYoQe = null;
		const _arrayValueI7lHPqc = false;
		const _arrayValuem5Kz3Qz = null;
		const _arrayValuexh4cJLP = "FPbdNzWSAehjA3s3w2tRgKkRx";
		const _arrayValuepTyc5P4 = undefined;
		const _arrayValueKZscNhh = false;
		const _arrayValuewhM2HWF = [_arrayValuem5Kz3Qz, _arrayValuexh4cJLP, _arrayValuepTyc5P4, _arrayValueKZscNhh]
		const _arrayValuejP6yqJV = [_arrayValuexuYoQe, _arrayValueI7lHPqc, _arrayValuewhM2HWF]
		const _arrayValueuNgK2E5 = true;
		const _returnValueHX8998i = [_arrayValuejP6yqJV, _arrayValueuNgK2E5]
		const _cmdM9bJKOm = () => { return _returnValueHX8998i };
		const _returnValueM8vuieu = await _HelpcjFb3Tj.visibleOptions(_cmdM9bJKOm)
		const _cmdpIkLgA = undefined;
		const _returnValuerrNRoFM = "MZ41HFOgefrYvKni2QIkBG2nJOzUgd";
		const _longestOptionTermLengthrsiVYqD = () => { return _returnValuerrNRoFM };
		const _returnValuetPV54Cm = null;
		const _longestSubcommandTermLengthRWjTCs9 = () => { return _returnValuetPV54Cm };
		const _arrayValueNB6u6VH = 9.205883087074884;
		const _arrayValueD98H6oG = undefined;
		const _arrayValueyMNrvvc = null;
		const _arrayValueOUTLL4L = [_arrayValueD98H6oG, _arrayValueyMNrvvc]
		const _arrayValueyTz6utR = [_arrayValueNB6u6VH, _arrayValueOUTLL4L]
		const _arrayValueOSoxsxc = 3.2023584529305253;
		const _arrayValuedjzkN9K = undefined;
		const _returnValueaJb69e1 = [_arrayValueyTz6utR, _arrayValueOSoxsxc, _arrayValuedjzkN9K]
		const _longestArgumentTermLengthAZnn1Lx = () => { return _returnValueaJb69e1 };
		const _helpernDxRQCo = {
			"longestOptionTermLength": _longestOptionTermLengthrsiVYqD,
		"longestSubcommandTermLength": _longestSubcommandTermLengthRWjTCs9,
		"longestArgumentTermLength": _longestArgumentTermLengthAZnn1Lx
	}
		const _returnValuepRumA1p = await _HelpcjFb3Tj.padWidth(_cmdpIkLgA, _helpernDxRQCo)
	});

	it('test for Help', async () => {
		const _HelplQaKtmg = new Help()
		const _returnValueuXCzPTX = undefined;
		const _argumentr6KJnNB = () => { return _returnValueuXCzPTX };
		const _returnValueD9trleL = await _HelplQaKtmg.argumentTerm(_argumentr6KJnNB)
		const _returnValue355HT9 = []
		const _flagsmOmlAe5 = () => { return _returnValue355HT9 };
		const _descriptionONSsoSS = "EIYmb8w3mQ16Lbj1ytoqFGbJV69whBfiEfWLag1BgSiOFLeEaVZ5ad78TXVEBhW9AAdi";
		const _cmdcXjbmE = new Option(_flagsmOmlAe5, _descriptionONSsoSS)
		const _valueToeEQv = null;
		const _previousOlC22JZ = "MrlUxo0mj10DM4MkCFxdQjyFbGZUz";
		const _returnValueJsOOoaZ = await _cmdcXjbmE._concatValue(_valueToeEQv, _previousOlC22JZ)
		const _returnValuexcYqtDi = await _HelplQaKtmg.subcommandDescription(_cmdcXjbmE)
		const _returnValuerrbF6sP = {
		
	}
		const _returnValuelZOyezy = () => { return _returnValuerrbF6sP };
		const _nameFjWJumN = () => { return _returnValuelZOyezy };
		const _descriptionAAQH3gq = null;
		const _cmdjE8Q2C8 = new Argument(_nameFjWJumN, _descriptionAAQH3gq)
		const _valuehFjhtHD = undefined;
		const _previousYWFX0Yh = "Z18BO7PQjexEkF2bfYhVWvqTtTCHSLKcPYLJFckLsppmHGxGppVaoeSue34pG2TtCtdJzfvKHAf";
		const _returnValueSt9gusT = await _cmdjE8Q2C8._concatValue(_valuehFjhtHD, _previousYWFX0Yh)
		const _fnRpScKJO = undefined;
		const _returnValueiN6GjzP = await _cmdjE8Q2C8.argParser(_fnRpScKJO)
		const _returnValueCMN39qb = await _HelplQaKtmg.subcommandDescription(_cmdjE8Q2C8)
		const __namebsEQI9R = -9.857436030589614;
		const __aliasesGu0JOp = {
		
	}
		const _parentLK7Dpqv = {
		
	}
		const _returnValuewg7fqba = 2.7617442134528574;
		const _usageeofYQs = () => { return _returnValuewg7fqba };
		const _cmdBlDsnHp = {
			"_name": __namebsEQI9R,
		"_aliases": __aliasesGu0JOp,
		"parent": _parentLK7Dpqv,
		"usage": _usageeofYQs
	}
		const _returnValuee4yJpGn = await _HelplQaKtmg.commandUsage(_cmdBlDsnHp)
		const _cmdG8EyYsq = undefined;
		const _helperPLrQ1Id = "TKoK";
		const _returnValueWVsdxGp = await _HelplQaKtmg.longestArgumentTermLength(_cmdG8EyYsq, _helperPLrQ1Id)
	});

	it('test for Help', async () => {
		const _HelpPXzLcRg = new Help()
		const _arrayValuei5vQ4D = "LDHu2KW";
		const _arrayValuezS2cQpO = null;
		const _cmdVr5Ua42 = [_arrayValuei5vQ4D, _arrayValuezS2cQpO]
		const _helperhjtWc2v = "yRODOUFeXsvaVaeUD4bgmftNNKVckSo1";
		const _returnValueAbgy3Qg = await _HelpPXzLcRg.formatHelp(_cmdVr5Ua42, _helperhjtWc2v)
		const __nameOjbcJUI = 6.8070459232304685;
		const __aliasesA7nJtL1 = {
		
	}
		const _parentnplhr2F = {
		
	}
		const _returnValuejqoEyAn = -5.95843918648627;
		const _returnValueIua2X9x = () => { return _returnValuejqoEyAn };
		const _usageqOHNjY = () => { return _returnValueIua2X9x };
		const _cmdy0qX96x = {
			"_name": __nameOjbcJUI,
		"_aliases": __aliasesA7nJtL1,
		"parent": _parentnplhr2F,
		"usage": _usageqOHNjY
	}
		const _returnValueMxxzMk = await _HelpPXzLcRg.commandUsage(_cmdy0qX96x)
	});

	it('test for Help', async () => {
		const _HelpC3gYwsy = new Help()
		const _arrayValueV8kXhUG = undefined;
		const _cmdbz23ete = [_arrayValueV8kXhUG]
		const _arrayValuelr29gsM = {
		
	}
		const _helperWsC3w3 = [_arrayValuelr29gsM]
		const _returnValuedoAyaC = await _HelpC3gYwsy.padWidth(_cmdbz23ete, _helperWsC3w3)
		const _returnValuerGnWfn7 = false;
		const _namegKbEUpG = () => { return _returnValuerGnWfn7 };
		const _descriptionGAEM5gd = null;
		const _argumentZ0GHL1G = new Argument(_namegKbEUpG, _descriptionGAEM5gd)
		const _arrayValueRvBmGu8 = undefined;
		const _returnValueVg4i00 = true;
		const _arrayValuecXmVoSn = () => { return _returnValueVg4i00 };
		const _arrayValuehdayAc = undefined;
		const _valueQ0XqD1i = [_arrayValueRvBmGu8, _arrayValuecXmVoSn, _arrayValuehdayAc]
		const _descriptionVQXx3Lu = undefined;
		const _returnValueZPmAccC = await _argumentZ0GHL1G.default(_valueQ0XqD1i, _descriptionVQXx3Lu)
		const _returnValueDWpNVdl = await _argumentZ0GHL1G.argRequired()
		const _returnValueMH8uPKd = await _HelpC3gYwsy.argumentDescription(_argumentZ0GHL1G)
	});

	it('test for Help', async () => {
		const _HelpFr5OK6A = new Help()
		const _returnValuePEyBxfP = null;
		const _argumentxlUWdLf = () => { return _returnValuePEyBxfP };
		const _returnValuepnqmiNk = await _HelpFr5OK6A.argumentDescription(_argumentxlUWdLf)
		const _cmdBvTDz1h = null;
		const _arrayValueyrrkgEq = null;
		const _helperCBJZvz = [_arrayValueyrrkgEq]
		const _returnValuefKCxkp9 = await _HelpFr5OK6A.longestOptionTermLength(_cmdBvTDz1h, _helperCBJZvz)
	});

	it('test for Help', async () => {
		const _HelpY2nZzl1 = new Help()
		const __namet1HIi7P = {
		
	}
		const __aliasesoPRI052 = {
		
	}
		const _parentjOiWVr2 = {
		
	}
		const _arrayValueu6KGXVs = false;
		const _arrayValuelX03oY = {
		
	}
		const _arrayValueW2TpKn9 = undefined;
		const _arrayValuem3BoFuz = {
		
	}
		const _arrayValueVEKXj0C = 2.1655703855660295;
		const _arrayValuePCQPPxQ = [_arrayValueW2TpKn9, _arrayValuem3BoFuz, _arrayValueVEKXj0C]
		const _returnValueaW5EK76 = [_arrayValueu6KGXVs, _arrayValuelX03oY, _arrayValuePCQPPxQ]
		const _usage9hcKvq = () => { return _returnValueaW5EK76 };
		const _cmdVqfIAPP = {
			"_name": __namet1HIi7P,
		"_aliases": __aliasesoPRI052,
		"parent": _parentjOiWVr2,
		"usage": _usage9hcKvq
	}
		const _returnValueJuDAhYu = await _HelpY2nZzl1.commandUsage(_cmdVqfIAPP)
		const _cmdElq2l7S = null;
		const _returnValuedUgd4Q7 = "pmpUXgRiHxMeoacPSnHNrpqrtI1U5b8yRhSmkBSUF7J2hTdx6J01BILpE9OpVSIA4aAmVVOBTHq3bNnt13aTYkVo6LmQz";
		const _visibleArgumentsCAt9txO = () => { return _returnValuedUgd4Q7 };
		const _returnValuegfHjhpM = undefined;
		const _argumentTermu8mggyc = () => { return _returnValuegfHjhpM };
		const _helpermLynQPM = {
			"visibleArguments": _visibleArgumentsCAt9txO,
		"argumentTerm": _argumentTermu8mggyc
	}
		const _returnValueyWRApw4 = await _HelpY2nZzl1.longestArgumentTermLength(_cmdElq2l7S, _helpermLynQPM)
		const _returnValueMDTlb5h = 6.808706326376232;
		const _descriptioncaJE7xZ = () => { return _returnValueMDTlb5h };
		const _cmdgyUxivq = {
			"description": _descriptioncaJE7xZ
	}
		const _returnValuezGHAwn = await _HelpY2nZzl1.subcommandDescription(_cmdgyUxivq)
		const __nameZNTdNMf = "l2GAR4";
		const __aliasesf5nA1MG = {
		
	}
		const _arrayValueOsRpkVS = undefined;
		const _parentw7ew1pc = [_arrayValueOsRpkVS]
		const _returnValueqLqqVUh = false;
		const _usageUgYyjRD = () => { return _returnValueqLqqVUh };
		const _cmdJVyyuNp = {
			"_name": __nameZNTdNMf,
		"_aliases": __aliasesf5nA1MG,
		"parent": _parentw7ew1pc,
		"usage": _usageUgYyjRD
	}
		const _returnValuesX3RdPz = await _HelpY2nZzl1.commandUsage(_cmdJVyyuNp)
		const _cmdo7LWpW = 1.5885434812042938;
		const _returnValueOn3JFUE = null;
		const _longestOptionTermLengthRyDQTmv = () => { return _returnValueOn3JFUE };
		const _arrayValueqZeF2i = -4.180268213448359;
		const _returnValuez906fit = null;
		const _arrayValuelz6W0pX = () => { return _returnValuez906fit };
		const _returnValuenDeQax = [_arrayValueqZeF2i, _arrayValuelz6W0pX]
		const _longestSubcommandTermLengthrBfhMUU = () => { return _returnValuenDeQax };
		const _returnValueqtOdkeu = "uLqPaEUNUJ3DksvbrobOva";
		const _longestArgumentTermLengthtEWfVZL = () => { return _returnValueqtOdkeu };
		const _helperQ66hNh5 = {
			"longestOptionTermLength": _longestOptionTermLengthRyDQTmv,
		"longestSubcommandTermLength": _longestSubcommandTermLengthrBfhMUU,
		"longestArgumentTermLength": _longestArgumentTermLengthtEWfVZL
	}
		const _returnValuetSVR2Le = await _HelpY2nZzl1.padWidth(_cmdo7LWpW, _helperQ66hNh5)
	});

	it('test for Help', async () => {
		const _HelptpD1pb3 = new Help()
		const _arrayValuecQtscE = true;
		const _arrayValuePSx82RX = 2.6457456877571506;
		const _arrayValuewDPtPuP = "23yvDXDt8meSw7oQAkdbED52DpZ6a6udnhON";
		const _arrayValuepuyTui = undefined;
		const _arrayValueEV5tjkK = null;
		const _arrayValueWJowaKP = 8.869550678415816;
		const _arrayValueIBRhXZ = undefined;
		const _arrayValueoiVwTkF = 0.41653279121732467;
		const _arrayValuewz8GmM = [_arrayValueEV5tjkK, _arrayValueWJowaKP, _arrayValueIBRhXZ, _arrayValueoiVwTkF]
		const _arrayValuexfSN4sp = null;
		const _arrayValueGctISPf = [_arrayValuepuyTui, _arrayValuewz8GmM, _arrayValuexfSN4sp]
		const _arrayValueYwb7lCs = "plgowDWnU1yq6xZsonQMDcJGk1Ta2oVmww";
		const _strTW3NJf3 = [_arrayValuecQtscE, _arrayValuePSx82RX, _arrayValuewDPtPuP, _arrayValueGctISPf, _arrayValueYwb7lCs]
		const _widthe5b9gIh = -8.005847535116425;
		const _indentT7C7TT1 = -4.233047776197831;
		const _minColumnWidth6UYAIS = 3.347347195657168;
		const _returnValuevlmmHcZ = await _HelptpD1pb3.wrap(_strTW3NJf3, _widthe5b9gIh, _indentT7C7TT1, _minColumnWidth6UYAIS)
		const _returnValueWQKTHBf = false;
		const _returnValuevTB1cKK = () => { return _returnValueWQKTHBf };
		const _cmdZa1VK8R = () => { return _returnValuevTB1cKK };
		const _returnValueLJfCjR7 = null;
		const _helperQMvU96o = () => { return _returnValueLJfCjR7 };
		const _returnValueCeiYaAe = await _HelptpD1pb3.padWidth(_cmdZa1VK8R, _helperQMvU96o)
		const _cmdW0FLLr1 = undefined;
		const _helperkVT75H = new Help()
		const _arrayValueXNpcbhP = undefined;
		const _arrayValueJTZbCLw = true;
		const _arrayValueveaJTbW = "HFxvT52RQ1tm1y21VWpfncyuKFigUw7zS2l8WOIi15ck69YBbRW4MalhrKGKvaBCp6u9xe5lLdDhXX9rEOtJeifU5HAm";
		const _arrayValueEblb7q3 = [_arrayValueveaJTbW]
		const _arrayValueWdlNi22 = "gcEQtmljQP";
		const _returnValuex69rytq = []
		const _arrayValueBwSugKX = () => { return _returnValuex69rytq };
		const _arrayValueGAdyMbn = [_arrayValueJTZbCLw, _arrayValueEblb7q3, _arrayValueWdlNi22, _arrayValueBwSugKX]
		const _cmdCr5DrJg = [_arrayValueXNpcbhP, _arrayValueGAdyMbn]
		const _returnValueIk8wic = await _helperkVT75H.commandUsage(_cmdCr5DrJg)
		const _cmdtlOyKe = true;
		const _helperKbpqiZK = "vVN8oteaCgu";
		const _returnValueh5bsp5h = await _helperkVT75H.padWidth(_cmdtlOyKe, _helperKbpqiZK)
		const _cmdo3ieuik = null;
		const _arrayValueaW4NnTY = "k94N4cHjtSspEMbDMJsO91YoopLIQggu3MY2sqZO4iuuXb9rbmslMMIYu1SUnSnqnByeM";
		const _arrayValueJ15AGG3 = -6.486474611974225;
		const _arrayValueDtTGHAE = 7.6848281056971;
		const _arrayValuepXo1NNu = true;
		const _arrayValuehWwDFum = [_arrayValueDtTGHAE, _arrayValuepXo1NNu]
		const _arrayValues10PWnB = false;
		const _arrayValuenQ9NdnJ = [_arrayValuehWwDFum, _arrayValues10PWnB]
		const _returnValueENwZlKG = [_arrayValueJ15AGG3, _arrayValuenQ9NdnJ]
		const _arrayValuePOqEDAg = () => { return _returnValueENwZlKG };
		const _helperdFDIV76 = [_arrayValueaW4NnTY, _arrayValuePOqEDAg]
		const _returnValuekHncOlB = await _helperkVT75H.longestOptionTermLength(_cmdo3ieuik, _helperdFDIV76)
		const _arrayValuesugjtZ = "JNLINg295hkMgTtCtF6BAKq3jsPgK8aNbmUpiY1AecHXE1D";
		const _arrayValueTyTvvZC = 5.422978105856613;
		const _arrayValueWQsLadu = "kWFCUy1";
		const _arrayValueDFpLd90 = [_arrayValueTyTvvZC, _arrayValueWQsLadu]
		const _cmdhghGBSy = [_arrayValuesugjtZ, _arrayValueDFpLd90]
		const _helperdaTQpNt = undefined;
		const _returnValueGhwaGDW = await _helperkVT75H.longestArgumentTermLength(_cmdhghGBSy, _helperdaTQpNt)
		const _cmdKdnaFc = undefined;
		const _arrayValueowuK5p = {
		
	}
		const _arrayValueP4VjzIF = "92dIGgvcBcXY1rX28yTUwLRsO7Jx6tJNPH3QnvCAW6nkVgBWVKBSBlcE52szqOzHuKJe4BBkGuANzCKNnDvk9";
		const _helperwTQE2lr = [_arrayValueowuK5p, _arrayValueP4VjzIF]
		const _returnValueGDDrLU = await _helperkVT75H.longestSubcommandTermLength(_cmdKdnaFc, _helperwTQE2lr)
		const _returnValuefPMQkry = await _HelptpD1pb3.longestArgumentTermLength(_cmdW0FLLr1, _helperkVT75H)
	});

	it('test for Help', async () => {
		const _Helpx2uMzwQ = new Help()
		const _returnValueIXOPJC4 = 8.047876843711673;
		const _cmdvOmMike = () => { return _returnValueIXOPJC4 };
		const _returnValueh0fwHeo = await _Helpx2uMzwQ.subcommandTerm(_cmdvOmMike)
		const _flagsMsyxH6i = {
		
	}
		const _optionjOgumAA = {
			"flags": _flagsMsyxH6i
	}
		const _returnValuefxjHQ7L = await _Helpx2uMzwQ.optionTerm(_optionjOgumAA)
		const _arrayValuejJDZYtB = undefined;
		const _returnValuewa0UF6o = undefined;
		const _arrayValuelb4BGyk = () => { return _returnValuewa0UF6o };
		const _arrayValueZA5DDr4 = []
		const _cmdlqs0qTW = [_arrayValuejJDZYtB, _arrayValuelb4BGyk, _arrayValueZA5DDr4]
		const _helperdZY3vUN = new Help()
		const _returnValueS255qzL = true;
		const _cmdwS1fxvh = () => { return _returnValueS255qzL };
		const _returnValueQJuoCKe = await _helperdZY3vUN.commandUsage(_cmdwS1fxvh)
		const _arrayValueOGfFsjR = "ajO4xjW1rdYax";
		const _arrayValuegtiNhul = {
		
	}
		const _argumentjzv9Gb7 = [_arrayValueOGfFsjR, _arrayValuegtiNhul]
		const _returnValuejx4UrRr = await _helperdZY3vUN.argumentTerm(_argumentjzv9Gb7)
		const _returnValuektobH6T = {
		
	}
		const _cmdShC0Tpx = () => { return _returnValuektobH6T };
		const _returnValuenZMaJ3i = await _helperdZY3vUN.commandDescription(_cmdShC0Tpx)
		const _returnValuel97x3Rk = await _Helpx2uMzwQ.longestArgumentTermLength(_cmdlqs0qTW, _helperdZY3vUN)
		const _returnValueScEkfXk = "2gMDwyOXaXKlDvzu9hFop9StWqNphX3napK3IU";
		const _cmdV5QaG4O = () => { return _returnValueScEkfXk };
		const _arrayValueTDlG0Y5 = {
		
	}
		const _helperyNkZPPK = [_arrayValueTDlG0Y5]
		const _returnValuePwEe4K9 = await _Helpx2uMzwQ.longestOptionTermLength(_cmdV5QaG4O, _helperyNkZPPK)
		const _flagsnviFGM4 = 5.947030263233263;
		const _optionF2U5XZx = {
			"flags": _flagsnviFGM4
	}
		const _returnValueVz2ubzP = await _Helpx2uMzwQ.optionTerm(_optionF2U5XZx)
	});

	it('test for Help', async () => {
		const _HelpiKX1ll3 = new Help()
		const __argsDescriptionGgPD8GN = {
		
	}
		const __argslCuOLmA = {
		
	}
		const _cmdisPQDQK = {
			"_argsDescription": __argsDescriptionGgPD8GN,
		"_args": __argslCuOLmA
	}
		const _returnValuev2D5PIx = await _HelpiKX1ll3.visibleArguments(_cmdisPQDQK)
		const _arrayValuec28MEyu = true;
		const _arrayValueCouOtUS = -9.007095700512767;
		const _arrayValuekyolKZe = [_arrayValueCouOtUS]
		const _arrayValueYTS2syB = null;
		const _nameJqtLjso = [_arrayValuec28MEyu, _arrayValuekyolKZe, _arrayValueYTS2syB]
		const _arrayValuezIeSDAP = true;
		const _arrayValueSdV81LH = undefined;
		const _arrayValueoGpvqFO = -4.095855870537612;
		const _arrayValueOaOcg8O = [_arrayValueoGpvqFO]
		const _descriptionLASaQlC = [_arrayValuezIeSDAP, _arrayValueSdV81LH, _arrayValueOaOcg8O]
		const _cmdsg4EGxb = new Argument(_nameJqtLjso, _descriptionLASaQlC)
		const _returnValueSIRdux7 = await _cmdsg4EGxb.argRequired()
		const _returnValueV1QJkrT = true;
		const _includesQRS4EuO = () => { return _returnValueV1QJkrT };
		const _returnValuex9a2r9o = false;
		const _joinEgQBACe = () => { return _returnValuex9a2r9o };
		const _valuesLb0U9aY = {
			"includes": _includesQRS4EuO,
		"join": _joinEgQBACe
	}
		const _returnValueIODbX1k = await _cmdsg4EGxb.choices(_valuesLb0U9aY)
		const _fnSiuH9V = undefined;
		const _returnValueSloRz1E = await _cmdsg4EGxb.argParser(_fnSiuH9V)
		const _returnValue8ZT7PW = await _cmdsg4EGxb.argOptional()
		const _returnValue53ZgUC = await _HelpiKX1ll3.commandDescription(_cmdsg4EGxb)
		const _arrayValuedaF4ZOa = undefined;
		const _cmdOCxD73 = [_arrayValuedaF4ZOa]
		const _returnValueZuz0sKp = await _HelpiKX1ll3.subcommandDescription(_cmdOCxD73)
	});

	it('test for Help', async () => {
		const _HelpyLy644u = new Help()
		const _arrayValuehxu305J = "MIY";
		const _returnValuekymiLsw = 0.6176206163597442;
		const _arrayValueS4o6sI3 = () => { return _returnValuekymiLsw };
		const _optionmIky39u = [_arrayValuehxu305J, _arrayValueS4o6sI3]
		const _returnValueg9wB7O = await _HelpyLy644u.optionTerm(_optionmIky39u)
		const _returnValueFVxtswH = "ycwhVDoxur9Q6S4";
		const _optionJvpu6i8 = () => { return _returnValueFVxtswH };
		const _returnValue4Gh5Wx = await _HelpyLy644u.optionDescription(_optionJvpu6i8)
		const _cmdKJdLwwd = "9H0UNnGW";
		const _returnValuedWKOQ1u = await _HelpyLy644u.commandDescription(_cmdKJdLwwd)
	});

	it('test for Help', async () => {
		const _HelpeYUgdtJ = new Help()
		const _cmdWcXWx4u = false;
		const _helperRhLB6T = new Help()
		const _nameJBpYwWY = 5.3660138674668865;
		const _cmdowOFAvS = new Command(_nameJBpYwWY)
		const _allowExcessNJHetsF = false;
		const _returnValuettrOoia = await _cmdowOFAvS.allowExcessArguments(_allowExcessNJHetsF)
		const _strCwq9uKJ = undefined;
		const _flagsVPX9V8z = -9.970805157274318;
		const _descriptionDOD5el = {
		
	}
		const _returnValueyJlT4PE = await _cmdowOFAvS.version(_strCwq9uKJ, _flagsVPX9V8z, _descriptionDOD5el)
		const _configurationZIAP87r = undefined;
		const _returnValuenVZHwOe = await _cmdowOFAvS.configureOutput(_configurationZIAP87r)
		const _displayHelpiOTx5kL = true;
		const _returnValuewjqi4Oy = await _cmdowOFAvS.showHelpAfterError(_displayHelpiOTx5kL)
		const _namerHkYDPh = false;
		const _returnValuezAS86HB = await _cmdowOFAvS._findCommand(_namerHkYDPh)
		const _returnValueD0gl3bc = await _helperRhLB6T.visibleCommands(_cmdowOFAvS)
		const _cmdyR1GbHl = -8.646811059322074;
		const _returnValuetxo6ZBF = undefined;
		const _visibleArguments1YG8aH = () => { return _returnValuetxo6ZBF };
		const _arrayValueCyYn08C = undefined;
		const _arrayValueW1MFYrk = false;
		const _returnValueBBxm1EO = [_arrayValueCyYn08C, _arrayValueW1MFYrk]
		const _argumentTermZy1y4Yi = () => { return _returnValueBBxm1EO };
		const _helperX5FNDqB = {
			"visibleArguments": _visibleArguments1YG8aH,
		"argumentTerm": _argumentTermZy1y4Yi
	}
		const _returnValueKfhFyA3 = await _helperRhLB6T.longestArgumentTermLength(_cmdyR1GbHl, _helperX5FNDqB)
		const _returnValueGZX1Gaw = await _HelpeYUgdtJ.padWidth(_cmdWcXWx4u, _helperRhLB6T)
		const _returnValueuxzi04k = null;
		const _returnValuea7XK789 = () => { return _returnValueuxzi04k };
		const _returnValueHXlFCQV = () => { return _returnValuea7XK789 };
		const _matchk9qGci = () => { return _returnValueHXlFCQV };
		const _returnValueiRY1rXi = undefined;
		const _arrayValueIMHrz7u = () => { return _returnValueiRY1rXi };
		const _arrayValuebeKG77m = null;
		const _returnValued3YXyqO = [_arrayValueIMHrz7u, _arrayValuebeKG77m]
		const _substroG0OSHG = () => { return _returnValued3YXyqO };
		const _strpSsuwQo = {
			"match": _matchk9qGci,
		"substr": _substroG0OSHG
	}
		const _widthxHLvX2c = 1.4452043694626955;
		const _indentVwKoiF1 = 4.005612194631492;
		const _minColumnWidthPuQLu0Z = 0.7414183582597573;
		const _returnValueAHZRVuA = await _HelpeYUgdtJ.wrap(_strpSsuwQo, _widthxHLvX2c, _indentVwKoiF1, _minColumnWidthPuQLu0Z)
		const _strDNfTaWj = "EvXQbEiJf6Mjr85OrT3oqzvXkGKXeZgQSwmcjBvEL3ah07eVjmXy3bjvTHwg2wkkycJBcflDt2ya4WdjEACOTjXrWz";
		const _widthx8FQ9af = -8.194748542936916;
		const _indentYAJYTar = 4.179120469272339;
		const _minColumnWidthqtbwIva = 7.020367101707585;
		const _returnValuea4Xu4BO = await _HelpeYUgdtJ.wrap(_strDNfTaWj, _widthx8FQ9af, _indentYAJYTar, _minColumnWidthqtbwIva)
		const _arrayValuewGJCwLe = -4.612030645515715;
		const _arrayValueZBzXQ6A = null;
		const _arrayValueeIXhkG1 = undefined;
		const _arrayValueeCVnswT = [_arrayValueeIXhkG1]
		const _argumentvZnNzof = [_arrayValuewGJCwLe, _arrayValueZBzXQ6A, _arrayValueeCVnswT]
		const _returnValuezKBtNvN = await _HelpeYUgdtJ.argumentDescription(_argumentvZnNzof)
	});

	it('test for Help', async () => {
		const _HelpZOBYqBy = new Help()
		const _nameKt56ntk = true;
		const _cmdlRVQeE = new Command(_nameKt56ntk)
		const _allowUnknownc2O5v01 = true;
		const _returnValueCc5Fzak = await _cmdlRVQeE.allowUnknownOption(_allowUnknownc2O5v01)
		const _subcommandXvRi4Aa = null;
		const _argspi4AHme = null;
		const _returnValueYLAjTu8 = await _cmdlRVQeE._executeSubCommand(_subcommandXvRi4Aa, _argspi4AHme)
		const _combinekyqAhhe = true;
		const _returnValuedmvUexR = await _cmdlRVQeE.combineFlagAndOptionalValue(_combinekyqAhhe)
		const _returnValueN8PtWu2 = await _HelpZOBYqBy.visibleCommands(_cmdlRVQeE)
		const _arrayValueFgpeA6g = {
		
	}
		const _arrayValueVPdafF0 = undefined;
		const _arrayValueSNC59OF = {
		
	}
		const _cmdTiwyOqU = [_arrayValueFgpeA6g, _arrayValueVPdafF0, _arrayValueSNC59OF]
		const _returnValueQKDnGl9 = await _HelpZOBYqBy.visibleOptions(_cmdTiwyOqU)
		const _returnValuekigxXcL = "a7";
		const _cmdx56tKh = () => { return _returnValuekigxXcL };
		const _returnValueubrKBAm = await _HelpZOBYqBy.subcommandDescription(_cmdx56tKh)
	});

	it('test for Help', async () => {
		const _HelpJmGtFbE = new Help()
		const _cmdhvDRFA = []
		const _returnValueDfQBu2 = await _HelpJmGtFbE.subcommandDescription(_cmdhvDRFA)
		const _arrayValuegsInvk = true;
		const _arrayValuefYLv2qF = -9.530829598955643;
		const _arrayValuerLgBpJE = -9.381164320131287;
		const _arrayValuehqaYNWI = null;
		const _cmdwC16eYY = [_arrayValuegsInvk, _arrayValuefYLv2qF, _arrayValuerLgBpJE, _arrayValuehqaYNWI]
		const _returnValueBUYQUeD = await _HelpJmGtFbE.subcommandTerm(_cmdwC16eYY)
		const _cmdcAo0gMX = "KRvIMt9xaaGCULr5jBgWVzoDCAm8rLaQZFu4cnciyvOO5Ag8T89Y3";
		const _returnValuesDC4pOF = await _HelpJmGtFbE.commandUsage(_cmdcAo0gMX)
		const _argChoicesRUWqauU = {
		
	}
		const _defaultValueISSvfes = undefined;
		const _defaultValueDescriptionx2dej5x = null;
		const _descriptionsKYW4Og = undefined;
		const _argumenttLua4f = {
			"argChoices": _argChoicesRUWqauU,
		"defaultValue": _defaultValueISSvfes,
		"defaultValueDescription": _defaultValueDescriptionx2dej5x,
		"description": _descriptionsKYW4Og
	}
		const _returnValueBtELv4s = await _HelpJmGtFbE.argumentDescription(_argumenttLua4f)
		const _cmdgGppXBN = false;
		const _returnValuevzOxBxN = "CJj8dvI8DyTE7jijvjDtKVe7qB";
		const _sortSubcommandsLqnJm5 = () => { return _returnValuevzOxBxN };
		const _returnValuenqsVYvc = "AYmFQAUYr5oIyk2etG155cFQoQyoCP8sB3UsiZ6SylIW";
		const _subcommandTermNzZWDct = () => { return _returnValuenqsVYvc };
		const _helperpDC7FnX = {
			"sortSubcommands": _sortSubcommandsLqnJm5,
		"subcommandTerm": _subcommandTermNzZWDct
	}
		const _returnValuefqA0amK = await _HelpJmGtFbE.longestSubcommandTermLength(_cmdgGppXBN, _helperpDC7FnX)
	});

	it('test for Help', async () => {
		const _HelpvGmDMpY = new Help()
		const _returnValueav0gP1d = "3U6DnmmngaICo8jFeIxMn8PtnhNbMOOPyNo8xNsJj9AoENTbRIYn2tzxxqrzUTdrfMlKVDcl5buw7AqLOWNF7zyl9hXmGRngd";
		const _sliceBEIKsJs = () => { return _returnValueav0gP1d };
		const _nameCIHG1C = {
			"slice": _sliceBEIKsJs
	}
		const _returnValueL5vYWn = false;
		const _descriptionDnY0GgN = () => { return _returnValueL5vYWn };
		const _argumentzRWqXXR = new Argument(_nameCIHG1C, _descriptionDnY0GgN)
		const _valuea0pZwko = true;
		const _returnValuemN7PfC = -9.616886968407947;
		const _concat0QoFoK = () => { return _returnValuemN7PfC };
		const _previousid4UQg = {
			"concat": _concat0QoFoK
	}
		const _returnValueKmPeoG4 = await _argumentzRWqXXR._concatValue(_valuea0pZwko, _previousid4UQg)
		const _returnValuehvdeQLE = await _argumentzRWqXXR.argOptional()
		const _returnValueWrCb1bM = -0.42737032568944855;
		const _valuenikbqaB = () => { return _returnValueWrCb1bM };
		const _descriptionGDOpxlO = "sb";
		const _returnValueqvPNS98 = await _argumentzRWqXXR.default(_valuenikbqaB, _descriptionGDOpxlO)
		const _returnValuem06CZr = await _HelpvGmDMpY.argumentDescription(_argumentzRWqXXR)
		const _cmdNqo9X0r = undefined;
		const _returnValueWHDxMf0 = -6.8082924323021015;
		const _longestOptionTermLengthVEdEvVM = () => { return _returnValueWHDxMf0 };
		const _returnValuesrm78c = true;
		const _longestSubcommandTermLengthkWU1iTs = () => { return _returnValuesrm78c };
		const _returnValues6H6K72 = false;
		const _longestArgumentTermLengthRtm0O6w = () => { return _returnValues6H6K72 };
		const _helpermkYALjq = {
			"longestOptionTermLength": _longestOptionTermLengthVEdEvVM,
		"longestSubcommandTermLength": _longestSubcommandTermLengthkWU1iTs,
		"longestArgumentTermLength": _longestArgumentTermLengthRtm0O6w
	}
		const _returnValuePNUMAw = await _HelpvGmDMpY.padWidth(_cmdNqo9X0r, _helpermkYALjq)
		const _optionsAfg56vR = {
		
	}
		const __hasHelpOptionKrMyOhf = []
		const __helpShortFlag16103h = undefined;
		const _returnValueCNJ75Ww = null;
		const __findOptionbjLchsV = () => { return _returnValueCNJ75Ww };
		const __helpLongFlagZpSlxjz = false;
		const _arrayValuetKQA6CR = "grCvIAu55HR8s0weNDZwJwlSduSvok6Klm61Vpi3";
		const _arrayValuerZ53hhr = null;
		const _arrayValueVyDxJJ = undefined;
		const _arrayValuePB3XtIW = null;
		const _arrayValueNFr1u1v = false;
		const _returnValued2qlHW6 = [_arrayValuePB3XtIW, _arrayValueNFr1u1v]
		const _arrayValueFSWfvc = () => { return _returnValued2qlHW6 };
		const _arrayValueOaFCeSn = [_arrayValuerZ53hhr, _arrayValueVyDxJJ, _arrayValueFSWfvc]
		const _returnValuetPHeq45 = [_arrayValuetKQA6CR, _arrayValueOaFCeSn]
		const _createOptionRELDPAv = () => { return _returnValuetPHeq45 };
		const __helpDescriptionlkqrydz = "7d";
		const __helpFlagsKydT99X = false;
		const _cmdpQazGL = {
			"options": _optionsAfg56vR,
		"_hasHelpOption": __hasHelpOptionKrMyOhf,
		"_helpShortFlag": __helpShortFlag16103h,
		"_findOption": __findOptionbjLchsV,
		"_helpLongFlag": __helpLongFlagZpSlxjz,
		"createOption": _createOptionRELDPAv,
		"_helpDescription": __helpDescriptionlkqrydz,
		"_helpFlags": __helpFlagsKydT99X
	}
		const _returnValuekKqDVsP = await _HelpvGmDMpY.visibleOptions(_cmdpQazGL)
	});

	it('test for Help', async () => {
		const _HelpmzxxtF2 = new Help()
		const _argChoicesWkXdwC = {
		
	}
		const _negatemPiJZrk = false;
		const _defaultValueFznNFPB = undefined;
		const _defaultValueDescriptionvKlQzwf = null;
		const _envVari0Q8czO = undefined;
		const _descriptionTUFSOTV = null;
		const _optionFhifW9Y = {
			"argChoices": _argChoicesWkXdwC,
		"negate": _negatemPiJZrk,
		"defaultValue": _defaultValueFznNFPB,
		"defaultValueDescription": _defaultValueDescriptionvKlQzwf,
		"envVar": _envVari0Q8czO,
		"description": _descriptionTUFSOTV
	}
		const _returnValueyyLBASz = await _HelpmzxxtF2.optionDescription(_optionFhifW9Y)
		const _arrayValuedZcDvXx = true;
		const _arrayValuectBrw94 = null;
		const _arrayValueOgUNhWP = -6.245639995697285;
		const _arrayValueeFUF2uK = 4.104590012520424;
		const _arrayValueuA40WDQ = -8.256600151843788;
		const _arrayValueQQH62tI = [_arrayValueeFUF2uK, _arrayValueuA40WDQ]
		const _arrayValuejwbf8WI = [_arrayValuectBrw94, _arrayValueOgUNhWP, _arrayValueQQH62tI]
		const _cmdQYOgixT = [_arrayValuedZcDvXx, _arrayValuejwbf8WI]
		const _returnValueaxGeZsF = await _HelpmzxxtF2.commandUsage(_cmdQYOgixT)
	});

	it('test for Help', async () => {
		const _Helpj9XLbVx = new Help()
		const _namecrzobFt = "r0cSznpgpg4jCVG9uu";
		const _descriptionCFLRnui = {
		
	}
		const _optiongBXTq4S = new Argument(_namecrzobFt, _descriptionCFLRnui)
		const _valuegByFOy = 5.091985883358545;
		const _arrayValueAlWCqc8 = "NUdo2hIPiRiTADWohP12dOOmFX7ekmws6xGqt0H8XouGEVF6bYx1jk1xG2e4AsiW";
		const _arrayValuebSRyKm6 = "tJI";
		const _arrayValuebJWpada = {
		
	}
		const _previousAWpwfNV = [_arrayValueAlWCqc8, _arrayValuebSRyKm6, _arrayValuebJWpada]
		const _returnValuegpaq4vN = await _optiongBXTq4S._concatValue(_valuegByFOy, _previousAWpwfNV)
		const _returnValueAiEdqUi = await _optiongBXTq4S.name()
		const _arrayValueR3YFuj9 = undefined;
		const _arrayValueBUkSuAk = null;
		const _valueGeYEdI6 = [_arrayValueR3YFuj9, _arrayValueBUkSuAk]
		const _descriptionuct3mfj = undefined;
		const _returnValueWBUZFNC = await _optiongBXTq4S.default(_valueGeYEdI6, _descriptionuct3mfj)
		const _returnValuek5JfMl = await _optiongBXTq4S.argOptional()
		const _returnValueVBYyJxU = await _optiongBXTq4S.argRequired()
		const _returnValuePVjlLtl = await _Helpj9XLbVx.optionDescription(_optiongBXTq4S)
		const _strnHMRabL = "V4iLDVESXxFziuoufW0GYRA6VzyT4KyBnRO2RHCwGM4Ggaoqs1RQo9LRobprnnzlGVuHH4lzLBEff8mmuMBQEzUoXjR3Q5pu";
		const _widthNq0oSFb = 0.7782466262170384;
		const _indentB1P3MKl = 6.224989001338059;
		const _minColumnWidthwYH9xEI = {
		
	}
		const _returnValuetTP66lI = await _Helpj9XLbVx.wrap(_strnHMRabL, _widthNq0oSFb, _indentB1P3MKl, _minColumnWidthwYH9xEI)
		const _cmdZFOQvDY = 1.2043662849058698;
		const _helperfhhOvaf = "1ldrf3gW664aEA8jRRMFhh5ucemRsqA3SCAfahRKaWDVNMff9VkxpIIT41NXVEbGDk8OHOaUwtdCISjA4sErXR";
		const _returnValueelJT7u8 = await _Helpj9XLbVx.longestSubcommandTermLength(_cmdZFOQvDY, _helperfhhOvaf)
		const _arrayValuekfiMBM = null;
		const _optionUOwB1W = [_arrayValuekfiMBM]
		const _returnValuesFmUDFF = await _Helpj9XLbVx.optionTerm(_optionUOwB1W)
	});

	it('test for Help', async () => {
		const _HelpTP3bWtv = new Help()
		const _returnValueJy51m8R = "44DSiSaCD5zRXTUGPY44xUjEJiELsnn3FfEKt4cju2d97op5MGvmLQEIpKQ5WHYUgRH";
		const _matchR5PlLX = () => { return _returnValueJy51m8R };
		const _returnValuep4Ud71U = null;
		const _substrX2Q5DIo = () => { return _returnValuep4Ud71U };
		const _strwcK617V = {
			"match": _matchR5PlLX,
		"substr": _substrX2Q5DIo
	}
		const _widthnc8927 = 4.082141864276704;
		const _indents2yBQgQ = 2.1173186819271734;
		const _minColumnWidthM0ynAFE = null;
		const _returnValueaZICdgn = await _HelpTP3bWtv.wrap(_strwcK617V, _widthnc8927, _indents2yBQgQ, _minColumnWidthM0ynAFE)
	});

	it('test for Help', async () => {
		const _Helpx7jI1aN = new Help()
		const _argChoicesoQFwKr = {
		
	}
		const _defaultValuemuvKAYJ = undefined;
		const _defaultValueDescriptionk6tA3Ue = null;
		const _descriptionnMR3Vlm = undefined;
		const _argumentGfRbGvg = {
			"argChoices": _argChoicesoQFwKr,
		"defaultValue": _defaultValuemuvKAYJ,
		"defaultValueDescription": _defaultValueDescriptionk6tA3Ue,
		"description": _descriptionnMR3Vlm
	}
		const _returnValuelYBkkaZ = await _Helpx7jI1aN.argumentDescription(_argumentGfRbGvg)
		const _cmdXfcDvPs = []
		const _returnValueRZcBCxU = await _Helpx7jI1aN.visibleArguments(_cmdXfcDvPs)
		const __argsDescriptionwJokAY7 = {
		
	}
		const __argsf51E9QE = {
		
	}
		const _cmdvB6maTM = {
			"_argsDescription": __argsDescriptionwJokAY7,
		"_args": __argsf51E9QE
	}
		const _returnValueEDdGZw9 = await _Helpx7jI1aN.visibleArguments(_cmdvB6maTM)
	});

	it('test for Help', async () => {
		const _HelpEecrhqS = new Help()
		const _stry62RYEE = "Qun6MxuGSS7o5GQh71LASLlINhrWWIGTmAiiEuX1SXBzcO9yLkrVmR03tvBTRcTYWoLromGMBVBd";
		const _widthijjby9g = 2.0643577860906106;
		const _indentqvjTbZE = 2.9707514604908027;
		const _minColumnWidthVxIKoqO = 0.5381319527971691;
		const _returnValuehD0uniu = await _HelpEecrhqS.wrap(_stry62RYEE, _widthijjby9g, _indentqvjTbZE, _minColumnWidthVxIKoqO)
		const _flagsWGuEyr = undefined;
		const _descriptionQTrTU1 = {
		
	}
		const _cmdJ7VNhFa = new Option(_flagsWGuEyr, _descriptionQTrTU1)
		const _nameKYgQV6C = undefined;
		const _returnValueu8ZUMuE = await _cmdJ7VNhFa.env(_nameKYgQV6C)
		const _returnValueEy2PdUH = await _cmdJ7VNhFa.name()
		const _valuesIqc8obo = undefined;
		const _returnValueDtcelTF = await _cmdJ7VNhFa.choices(_valuesIqc8obo)
		const _hide9zZqUc = false;
		const _returnValueKxhh6eZ = await _cmdJ7VNhFa.hideHelp(_hide9zZqUc)
		const _mandatoryfPwZLuK = false;
		const _returnValueRTbW62k = await _cmdJ7VNhFa.makeOptionMandatory(_mandatoryfPwZLuK)
		const _returnValueomqWpWl = await _HelpEecrhqS.commandDescription(_cmdJ7VNhFa)
		const _returnValueS9WeXL5 = true;
		const _arrayValuezhVuoFx = () => { return _returnValueS9WeXL5 };
		const _arrayValuevWoW4cN = 6.443501639956306;
		const _arrayValuetolG5zC = "";
		const _arrayValueM7rq6p9 = undefined;
		const _optionvaAwWh8 = [_arrayValuezhVuoFx, _arrayValuevWoW4cN, _arrayValuetolG5zC, _arrayValueM7rq6p9]
		const _returnValuevbhkoa9 = await _HelpEecrhqS.optionTerm(_optionvaAwWh8)
		const _nameZUhlBp2 = false;
		const _cmdCJGEBbd = new Command(_nameZUhlBp2)
		const _flagsXA3jNz9 = true;
		const _optionwddLJPg = {
			"flags": _flagsXA3jNz9
	}
		const _returnValuehjdqeIz = await _cmdCJGEBbd.missingMandatoryOptionValue(_optionwddLJPg)
		const _positionalaIbr7hG = undefined;
		const _returnValueTZ8xYxz = await _cmdCJGEBbd.enablePositionalOptions(_positionalaIbr7hG)
		const _arrayValuedMd7we = true;
		const _operandsQCTSkhd = [_arrayValuedMd7we]
		const _unknownyCBL2je = {
		
	}
		const _returnValuelgrXd1e = await _cmdCJGEBbd._parseCommand(_operandsQCTSkhd, _unknownyCBL2je)
		const _returnValuefmeceuZ = await _HelpEecrhqS.visibleCommands(_cmdCJGEBbd)
		const _arrayValuemGUEfZE = null;
		const _arrayValuecZSvGGZ = false;
		const _returnValueTPyuuk0 = [_arrayValuemGUEfZE, _arrayValuecZSvGGZ]
		const _cmducjotY = () => { return _returnValueTPyuuk0 };
		const _returnValuekC50t9o = await _HelpEecrhqS.commandUsage(_cmducjotY)
	});

	it('test for Help', async () => {
		const _HelpQFCqw0X = new Help()
		const _flagsl9fhKUq = "Ck921TKs7htSaaaf1FBqRoJioT5LUMB";
		const _descriptionKWN7Rx = null;
		const _cmdxmHKEFQ = new Option(_flagsl9fhKUq, _descriptionKWN7Rx)
		const _returnValuef4NLjts = []
		const _fnrc0XLnc = () => { return _returnValuef4NLjts };
		const _returnValuej5RwZt7 = await _cmdxmHKEFQ.argParser(_fnrc0XLnc)
		const _returnValuewx9O4DC = await _cmdxmHKEFQ.name()
		const _nameVpMSMX7 = true;
		const _returnValuesI1VL6h = await _cmdxmHKEFQ.env(_nameVpMSMX7)
		const _fnYytUTyc = undefined;
		const _returnValuef2tUGS5 = await _cmdxmHKEFQ.argParser(_fnYytUTyc)
		const _returnValueNCJmLhf = await _HelpQFCqw0X.subcommandDescription(_cmdxmHKEFQ)
		const _arrayValueknn7ZBj = false;
		const _cmdJEpDGr = [_arrayValueknn7ZBj]
		const _returnValuepiUDX7q = await _HelpQFCqw0X.subcommandTerm(_cmdJEpDGr)
	});

	it('test for Help', async () => {
		const _HelpHLLzqP1 = new Help()
		const _nameKDmgmBu = null;
		const _cmdvDLciT1 = new Command(_nameKDmgmBu)
		const _configurationlMvjUk = {
		
	}
		const _returnValuej2D72R = await _cmdvDLciT1.configureHelp(_configurationlMvjUk)
		const _displayHelpnUgK9UF = false;
		const _returnValueh0W0qPn = await _cmdvDLciT1.showHelpAfterError(_displayHelpnUgK9UF)
		const _returnValueDB677QC = await _HelpHLLzqP1.subcommandTerm(_cmdvDLciT1)
		const _returnValue3mJ3mY = 7.8317581553496325;
		const _optionRjuWYf7 = () => { return _returnValue3mJ3mY };
		const _returnValued9wGRoT = await _HelpHLLzqP1.optionDescription(_optionRjuWYf7)
	});

	it('test for Help', async () => {
		const _HelpBAnQ0ZM = new Help()
		const _returnValueKOhsMrR = null;
		const _descriptionopOTG5a = () => { return _returnValueKOhsMrR };
		const _cmdf2ZTP0m = {
			"description": _descriptionopOTG5a
	}
		const _returnValueKevSlFb = await _HelpBAnQ0ZM.subcommandDescription(_cmdf2ZTP0m)
		const _namef4LtcAm = null;
		const _cmdFncJGy3 = new Command(_namef4LtcAm)
		const _promisemYchtHx = {
		
	}
		const _eventDFrwlc = "k1hQAPboUodJSrs51ODk9XNhNUuqNYxZViljqQb5oJnl7lTtIqrhVsrI5hfzV9frNC6Sq";
		const _returnValuedOkk2PC = await _cmdFncJGy3._chainOrCallHooks(_promisemYchtHx, _eventDFrwlc)
		const _displayHelpTIzhTqQ = false;
		const _returnValueElbQ9Vm = await _cmdFncJGy3.showHelpAfterError(_displayHelpTIzhTqQ)
		const _keyVwQoMoq = null;
		const _returnValuejVB7U3Y = true;
		const _returnValuegt2JXpy = () => { return _returnValuejVB7U3Y };
		const _returnValuefsMvBk5 = () => { return _returnValuegt2JXpy };
		const _valuedWiHRq2 = () => { return _returnValuefsMvBk5 };
		const _sourcejF4zSXS = null;
		const _returnValueotuIPYi = await _cmdFncJGy3.setOptionValueWithSource(_keyVwQoMoq, _valuedWiHRq2, _sourcejF4zSXS)
		const _returnValueMao9o1d = await _HelpBAnQ0ZM.visibleOptions(_cmdFncJGy3)
		const _cmduZnojER = "HtZu2QsIYPTb7sV";
		const _returnValuemvOjMeY = await _HelpBAnQ0ZM.visibleOptions(_cmduZnojER)
	});

	it('test for Help', async () => {
		const _HelpGVfRNry = new Help()
		const _arrayValueE7e7R0 = []
		const _arrayValueGmk05pR = false;
		const _argumentvDT5tYr = [_arrayValueE7e7R0, _arrayValueGmk05pR]
		const _returnValueevLWMm7 = await _HelpGVfRNry.argumentDescription(_argumentvDT5tYr)
		const _flagsMduewjl = "3vu1RS5EW5QEPv2zHSy4JiPcSg9DHfTbiLgyjMrlbV24nQKbpO";
		const _descriptionp37Gnxm = -4.169554279673306;
		const _optionZxZDC1I = new Option(_flagsMduewjl, _descriptionp37Gnxm)
		const _mandatoryR4TQI9d = true;
		const _returnValueNHvEOYA = await _optionZxZDC1I.makeOptionMandatory(_mandatoryR4TQI9d)
		const _mandatorysIQ9yvT = true;
		const _returnValuenzxCUF = await _optionZxZDC1I.makeOptionMandatory(_mandatorysIQ9yvT)
		const _namepj8nzq3 = "6fZ6iSX2QciR2XNxqfGrHzEv9pGHceHCOGVQmUnNTi6zI2GzCFhFdERPDa87naQSXMNjOtPlhCv5eiDjslVEg";
		const _returnValueihwxKPx = await _optionZxZDC1I.env(_namepj8nzq3)
		const _returnValuebBRLVPS = await _optionZxZDC1I.name()
		const _returnValuevAdJkbm = await _optionZxZDC1I.attributeName()
		const _returnValueJm8pyL7 = await _HelpGVfRNry.optionDescription(_optionZxZDC1I)
		const _returnValueCMR5mH = true;
		const _argumentFQxTspa = () => { return _returnValueCMR5mH };
		const _returnValueRKoS7fP = await _HelpGVfRNry.argumentDescription(_argumentFQxTspa)
	});

	it('test for Help', async () => {
		const _Helpqy2Urrj = new Help()
		const _nameP17xSjf = undefined;
		const _cmdJsM5G32 = new Command(_nameP17xSjf)
		const _configurationGP9xKUq = undefined;
		const _returnValueFBTIRaB = await _cmdJsM5G32.configureHelp(_configurationGP9xKUq)
		const _strYF3QkTW = undefined;
		const _returnValueJat9PQf = await _cmdJsM5G32.usage(_strYF3QkTW)
		const _nameAndArgsCdZ7V79 = "1tYqdVnkl7zZzV7vUGHkdoBPf4voT6cXycXxs9yipbJDUBFCCoLfi4m5";
		const _actionOptsOrExecDescyQqUvPC = {
		
	}
		const _execOptsMNGjQWt = true;
		const _returnValueY7aXGkC = await _cmdJsM5G32.command(_nameAndArgsCdZ7V79, _actionOptsOrExecDescyQqUvPC, _execOptsMNGjQWt)
		const _returnValueF2sxJIX = await _Helpqy2Urrj.visibleCommands(_cmdJsM5G32)
		const _optionlcsZu7P = null;
		const _returnValuecifeICB = await _Helpqy2Urrj.optionDescription(_optionlcsZu7P)
		const _returnValuehWEDjFA = -1.5675105335973818;
		const _cmdJaN1Tv1 = () => { return _returnValuehWEDjFA };
		const _returnValueEhyspGn = await _Helpqy2Urrj.visibleOptions(_cmdJaN1Tv1)
		const _cmdd7Rbu2y = undefined;
		const _returnValuexG0WXC3 = true;
		const _sortSubcommandsuclbMtN = () => { return _returnValuexG0WXC3 };
		const _returnValuePfGBeEA = undefined;
		const _subcommandTermKj9bWV = () => { return _returnValuePfGBeEA };
		const _helperr1FxLcM = {
			"sortSubcommands": _sortSubcommandsuclbMtN,
		"subcommandTerm": _subcommandTermKj9bWV
	}
		const _returnValuet8N3xNy = await _Helpqy2Urrj.longestSubcommandTermLength(_cmdd7Rbu2y, _helperr1FxLcM)
		const _cmdM10BE7v = "DJ2ivQk9z7DOlgvwW1qN38oLNznQWVaRNNv6b4GCniB";
		const _returnValuesCkiLcG = await _Helpqy2Urrj.visibleArguments(_cmdM10BE7v)
	});

	it('test for Help', async () => {
		const _HelpEzGk6JU = new Help()
		const _returnValueQIa9zRX = false;
		const _namepb1R9JD = () => { return _returnValueQIa9zRX };
		const _cmddVT0AD8 = new Command(_namepb1R9JD)
		const _fnhjSmAx = "MZJx98kWkhwbULh3oFbmaX2rN5FI0";
		const _returnValueSudIhCy = await _cmddVT0AD8.action(_fnhjSmAx)
		const _flagsxwqWFgq = "SW3jeQNm9sebZmHLRtEqWgT86FiEABD";
		const _descriptionrSWsP1l = false;
		const _fnDtgf5F = null;
		const _defaultValueoPErZbr = undefined;
		const _returnValueF8hvvzZ = await _cmddVT0AD8.requiredOption(_flagsxwqWFgq, _descriptionrSWsP1l, _fnDtgf5F, _defaultValueoPErZbr)
		const _contextOptionsE212mMz = false;
		const _returnValueZNT3cy6 = await _cmddVT0AD8._getHelpContext(_contextOptionsE212mMz)
		const _flagsnZtTLVD = false;
		const _descriptionyDPT6H8 = "QhPxSyyhlRYbrssLVAxBhIPuyAuGCc0EhbHj9Hhx4NATjlbr86JBWTUQPEfK1B6xmvpha1HwDiN8fTVL9qe7jA7";
		const _returnValueIsqPkqA = await _cmddVT0AD8.helpOption(_flagsnZtTLVD, _descriptionyDPT6H8)
		const _keyadL5tp8 = -0.9911142444474148;
		const _returnValueAvsVQI6 = await _cmddVT0AD8.getOptionValue(_keyadL5tp8)
		const _returnValuelvZToZT = await _HelpEzGk6JU.visibleOptions(_cmddVT0AD8)
		const _name3PxXFa = -7.212345078995839;
		const _argumentuYmWXmg = new Command(_name3PxXFa)
		const _namesgnVtZNW = "d0IM0YfHDff3kuMGW3p";
		const _returnValuee1NAst3 = await _argumentuYmWXmg.arguments(_namesgnVtZNW)
		const _exitCodeovmC41B = 0.13632333576430788;
		const _codegXUtRLO = null;
		const _messagetgiedBX = undefined;
		const _returnValueXZbhHSm = await _argumentuYmWXmg._displayError(_exitCodeovmC41B, _codegXUtRLO, _messagetgiedBX)
		const _returnValueJ87cuMn = await _argumentuYmWXmg._parseOptionsEnv()
		const _positionalc8FhOEG = true;
		const _returnValuefbylNTu = await _argumentuYmWXmg.enablePositionalOptions(_positionalc8FhOEG)
		const _promiseDaWZZoB = {
		
	}
		const _eventMVtbx56 = "kJdv";
		const _returnValueB4w4doH = await _argumentuYmWXmg._chainOrCallHooks(_promiseDaWZZoB, _eventMVtbx56)
		const _returnValuejw2Tfvk = await _HelpEzGk6JU.argumentDescription(_argumentuYmWXmg)
		const _cmdCHVWgdJ = undefined;
		const _helpertgNT1Fn = new Help()
		const _returnValueR8VRDBj = 3.0191377665763603;
		const _matchHFxPfD = () => { return _returnValueR8VRDBj };
		const _returnValuejwY3GTi = "ISELPV2GlBqdUqsYx5fg3QbhFKV0";
		const _substrZ6ZAFrL = () => { return _returnValuejwY3GTi };
		const _striZs3t1J = {
			"match": _matchHFxPfD,
		"substr": _substrZ6ZAFrL
	}
		const _widthdMZynTw = -7.778378800775723;
		const _indentbR0UULp = -1.0243814673580633;
		const _minColumnWidthV5tslOz = -4.013542031583781;
		const _returnValueTGgcd0h = await _helpertgNT1Fn.wrap(_striZs3t1J, _widthdMZynTw, _indentbR0UULp, _minColumnWidthV5tslOz)
		const _returnValuepSGXsr = await _HelpEzGk6JU.longestSubcommandTermLength(_cmdCHVWgdJ, _helpertgNT1Fn)
	});
})