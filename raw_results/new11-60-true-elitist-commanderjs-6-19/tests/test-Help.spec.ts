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
		const _HelpJ2GkLEJ = new Help()
		const _argChoicessTqE6X3 = {
		
	}
		const _negateePCDNAP = null;
		const _defaultValueEx2b6b = undefined;
		const _defaultValueDescriptionPIWb2uU = -3.58995537209445;
		const _envVarEjQd2j5 = undefined;
		const _descriptionCd0cTgq = 7.171730205626375;
		const _optionYJnOxJg = {
			"argChoices": _argChoicessTqE6X3,
		"negate": _negateePCDNAP,
		"defaultValue": _defaultValueEx2b6b,
		"defaultValueDescription": _defaultValueDescriptionPIWb2uU,
		"envVar": _envVarEjQd2j5,
		"description": _descriptionCd0cTgq
	}
		const _returnValueVOeqQs = await _HelpJ2GkLEJ.optionDescription(_optionYJnOxJg)
	});

	it('test for Help', async () => {
		const _HelpKRff3eu = new Help()
		const __nameMTOUBUg = {
		
	}
		const __aliasesyef5E3n = {
		
	}
		const _parentFmIvi7G = {
		
	}
		const _arrayValueyOsngjh = "yLrk085j26L81X3LxNMMfPfLAMCbl9TgbVnrroA6ylEvEwx2Hil57l";
		const _arrayValuetKaZtp = true;
		const _returnValue4SAcfC = [_arrayValueyOsngjh, _arrayValuetKaZtp]
		const _usageeisCPUb = () => { return _returnValue4SAcfC };
		const _cmdWYbHWeM = {
			"_name": __nameMTOUBUg,
		"_aliases": __aliasesyef5E3n,
		"parent": _parentFmIvi7G,
		"usage": _usageeisCPUb
	}
		const _returnValueb45G9Ya = await _HelpKRff3eu.commandUsage(_cmdWYbHWeM)
		const _cmdQfWoOfM = 2.5832756346484604;
		const _sortSubcommandsv4hE8U = undefined;
		const _returnValuedZj062 = undefined;
		const _subcommandTermeXqd1r = () => { return _returnValuedZj062 };
		const _helperRn1h7EQ = {
			"sortSubcommands": _sortSubcommandsv4hE8U,
		"subcommandTerm": _subcommandTermeXqd1r
	}
		const _returnValueXSuROuK = await _HelpKRff3eu.formatHelp(_cmdQfWoOfM, _helperRn1h7EQ)
		const _optionsZRXBxX9 = {
		
	}
		const _arrayValueDxMMkNd = null;
		const _arrayValuearvDVMi = null;
		const _arrayValueabZdE4p = [_arrayValueDxMMkNd, _arrayValuearvDVMi]
		const __hasHelpOptiontI9VkfJ = [_arrayValueabZdE4p]
		const _returnValueMKy3VXc = 6.171133685153809;
		const __helpShortFlagyqWCVCm = () => { return _returnValueMKy3VXc };
		const _returnValuexZrh5sm = -8.570999492976876;
		const __findOptionNwqMidz = () => { return _returnValuexZrh5sm };
		const __helpLongFlagHaPaXF0 = {
		
	}
		const _returnValueovo1KoY = undefined;
		const _createOptionhqUDOO = () => { return _returnValueovo1KoY };
		const __helpDescriptionFHuU1aS = {
		
	}
		const __helpFlagsVtlRrNH = "PXCWZGP8TWOAJMd7DxOKj9ByqU6Socz6XxA6NdiNTC7uoF53JKw";
		const _cmdTyX8lwF = {
			"options": _optionsZRXBxX9,
		"_hasHelpOption": __hasHelpOptiontI9VkfJ,
		"_helpShortFlag": __helpShortFlagyqWCVCm,
		"_findOption": __findOptionNwqMidz,
		"_helpLongFlag": __helpLongFlagHaPaXF0,
		"createOption": _createOptionhqUDOO,
		"_helpDescription": __helpDescriptionFHuU1aS,
		"_helpFlags": __helpFlagsVtlRrNH
	}
		const _returnValuempiAZ9K = await _HelpKRff3eu.visibleOptions(_cmdTyX8lwF)
	});

	it('test for Help', async () => {
		const _HelpqALr820 = new Help()
		const _cmdmedCuAM = "KR37psfZCzD2pht2pSW5mrW3";
		const _returnValuehF8KfmB = 0.6075263627200034;
		const _returnValuefW6PV3P = () => { return _returnValuehF8KfmB };
		const _visibleOptionsLlzaaZy = () => { return _returnValuefW6PV3P };
		const _optionTermuDvBDHG = null;
		const _helper6fXUq3 = {
			"visibleOptions": _visibleOptionsLlzaaZy,
		"optionTerm": _optionTermuDvBDHG
	}
		const _returnValuekM87zkj = await _HelpqALr820.longestOptionTermLength(_cmdmedCuAM, _helper6fXUq3)
		const _cmd0caP98 = 0.6247038606983715;
		const _helperJLC05ME = null;
		const _returnValuezUW3YgY = await _HelpqALr820.longestOptionTermLength(_cmd0caP98, _helperJLC05ME)
	});

	it('test for Help', async () => {
		const _HelpxcXrzTQ = new Help()
		const __argsDescriptionNkOo5S0 = {
		
	}
		const __argsAmughih = {
		
	}
		const _cmdZWFxfl = {
			"_argsDescription": __argsDescriptionNkOo5S0,
		"_args": __argsAmughih
	}
		const _returnValuefzwUIjK = await _HelpxcXrzTQ.visibleArguments(_cmdZWFxfl)
		const _cmdwDcMRq5 = {
		
	}
		const _returnValuem2useU = null;
		const _visibleOptionsrkzQJF = () => { return _returnValuem2useU };
		const _returnValuem8qLOiX = undefined;
		const _optionTermKRoPwIW = () => { return _returnValuem8qLOiX };
		const _helperz8Iye3P = {
			"visibleOptions": _visibleOptionsrkzQJF,
		"optionTerm": _optionTermKRoPwIW
	}
		const _returnValuesns185h = await _HelpxcXrzTQ.longestOptionTermLength(_cmdwDcMRq5, _helperz8Iye3P)
	});

	it('test for Help', async () => {
		const _HelpsM0X9Op = new Help()
		const _argChoicesxObiOwQ = {
		
	}
		const _negatelS0HDw = {
		
	}
		const _defaultValueN7iY0A3 = undefined;
		const _defaultValueDescriptionyoDRFuC = 6.758445036528382;
		const _envVarI5PZoH = undefined;
		const _descriptionHP9mDz7 = {
		
	}
		const _optiontzVCaSJ = {
			"argChoices": _argChoicesxObiOwQ,
		"negate": _negatelS0HDw,
		"defaultValue": _defaultValueN7iY0A3,
		"defaultValueDescription": _defaultValueDescriptionyoDRFuC,
		"envVar": _envVarI5PZoH,
		"description": _descriptionHP9mDz7
	}
		const _returnValueJ9Xqa41 = await _HelpsM0X9Op.optionDescription(_optiontzVCaSJ)
		const _cmdY5rszNE = undefined;
		const _helperqNV1cUi = true;
		const _returnValueT1SXmnv = await _HelpsM0X9Op.longestArgumentTermLength(_cmdY5rszNE, _helperqNV1cUi)
		const _returnValueUJBYDm = null;
		const _descriptionO90ZyXr = () => { return _returnValueUJBYDm };
		const _cmdet4822Z = {
			"description": _descriptionO90ZyXr
	}
		const _returnValueiErtUe = await _HelpsM0X9Op.commandDescription(_cmdet4822Z)
	});

	it('test for Help', async () => {
		const _HelpuGdt0Xd = new Help()
		const _cmdI8EB2ry = {
		
	}
		const _sortSubcommandsh76xmO = -5.829923717203581;
		const _returnValueRqOKXX = "XeiGHylnhIvOwohck9B4Zcx3AGwmuBEu3EFAHyhEGAL";
		const _returnValueT4DcRnM = () => { return _returnValueRqOKXX };
		const _subcommandTermhIj991k = () => { return _returnValueT4DcRnM };
		const _helpersnyHQQC = {
			"sortSubcommands": _sortSubcommandsh76xmO,
		"subcommandTerm": _subcommandTermhIj991k
	}
		const _returnValueqqtSmd = await _HelpuGdt0Xd.longestSubcommandTermLength(_cmdI8EB2ry, _helpersnyHQQC)
		const _cmdfsIDhp = true;
		const _returnValueToNaTw9 = {
		
	}
		const _visibleOptionsNpEjqS2 = () => { return _returnValueToNaTw9 };
		const _returnValueTY4es5q = "lnQT1dmpy67";
		const _optionTermM3Ma2Nr = () => { return _returnValueTY4es5q };
		const _helperrp1quLm = {
			"visibleOptions": _visibleOptionsNpEjqS2,
		"optionTerm": _optionTermM3Ma2Nr
	}
		const _returnValuekKQzUk1 = await _HelpuGdt0Xd.longestOptionTermLength(_cmdfsIDhp, _helperrp1quLm)
		const _cmdRSOoqh1 = 9.046383271248569;
		const _arrayValueJolBXSm = {
		
	}
		const _arrayValueD8tMjlP = null;
		const _helperKwvrwPP = [_arrayValueJolBXSm, _arrayValueD8tMjlP]
		const _returnValueKLVD8Hn = await _HelpuGdt0Xd.padWidth(_cmdRSOoqh1, _helperKwvrwPP)
		const _argChoices7a67jJ = {
		
	}
		const _arrayValueorxTNui = {
		
	}
		const _arrayValuenrFeSCE = -5.580284653349019;
		const _negatePBEgZex = [_arrayValueorxTNui, _arrayValuenrFeSCE]
		const _defaultValueFwdmrbU = undefined;
		const _defaultValueDescriptionSWXkZZX = "vLs6fkWetaDkBfis5iklJ8Zd281e06H75cAVpKji77a4RfotizR0VnMDnA3sM7BhuqKmDVXG9BFzoiS2lWeCXjFHj7B7OygyW";
		const _envVarD0j3v6z = undefined;
		const _descriptionp7lbYzH = false;
		const _optionE5mEgA2 = {
			"argChoices": _argChoices7a67jJ,
		"negate": _negatePBEgZex,
		"defaultValue": _defaultValueFwdmrbU,
		"defaultValueDescription": _defaultValueDescriptionSWXkZZX,
		"envVar": _envVarD0j3v6z,
		"description": _descriptionp7lbYzH
	}
		const _returnValueSAVqIZZ = await _HelpuGdt0Xd.optionDescription(_optionE5mEgA2)
	});

	it('test for Help', async () => {
		const _HelpJry9qX4 = new Help()
		const _returnValuejPEio9z = true;
		const _nameppHtZp2 = () => { return _returnValuejPEio9z };
		const _argumentVU0IRmS = {
			"name": _nameppHtZp2
	}
		const _returnValuexJHqqAi = await _HelpJry9qX4.argumentTerm(_argumentVU0IRmS)
	});

	it('test for Help', async () => {
		const _HelpVEx2Xz = new Help()
		const _returnValue6dbG3F = true;
		const _descriptionZnzyKfV = () => { return _returnValue6dbG3F };
		const _cmdOjXZi8F = {
			"description": _descriptionZnzyKfV
	}
		const _returnValueC1u7x1J = await _HelpVEx2Xz.commandDescription(_cmdOjXZi8F)
		const _argChoicesh8vVLb1 = {
		
	}
		const _negateTDGd7Ih = -4.881223777700969;
		const _defaultValueBZRu9Ud = undefined;
		const _arrayValueRoOzM6i = "kGjsXgBpverCBWqSu";
		const _defaultValueDescriptiongjrC0Rq = [_arrayValueRoOzM6i]
		const _envVarHt55gN = "gvhOwV";
		const _descriptionxqyW5IQ = undefined;
		const _optionKGttVw2 = {
			"argChoices": _argChoicesh8vVLb1,
		"negate": _negateTDGd7Ih,
		"defaultValue": _defaultValueBZRu9Ud,
		"defaultValueDescription": _defaultValueDescriptiongjrC0Rq,
		"envVar": _envVarHt55gN,
		"description": _descriptionxqyW5IQ
	}
		const _returnValueDLnufGM = await _HelpVEx2Xz.optionDescription(_optionKGttVw2)
		const _cmdP0bQffd = false;
		const _returnValuevwU7QLx = "faGnGajg";
		const _visibleOptionskWV9P95 = () => { return _returnValuevwU7QLx };
		const _returnValueQdPXoL = undefined;
		const _optionTermfDC7uOp = () => { return _returnValueQdPXoL };
		const _helperMsCAGc = {
			"visibleOptions": _visibleOptionskWV9P95,
		"optionTerm": _optionTermfDC7uOp
	}
		const _returnValueatgAxVn = await _HelpVEx2Xz.longestOptionTermLength(_cmdP0bQffd, _helperMsCAGc)
		const _descriptionDrUryon = 0.8353509996960966;
		const _cmdygIuNvO = {
			"description": _descriptionDrUryon
	}
		const _returnValueyk7Evwc = await _HelpVEx2Xz.commandDescription(_cmdygIuNvO)
	});

	it('test for Help', async () => {
		const _HelpBVwVnI = new Help()
		const _cmdYpl3ayI = null;
		const _arrayValuekx85dN4 = "slS6csS6mtEIHqa";
		const _returnValueOrBHHc = [_arrayValuekx85dN4]
		const _longestOptionTermLengthqiiEcZk = () => { return _returnValueOrBHHc };
		const _returnValueFiXCKjP = {
		
	}
		const _longestSubcommandTermLengthuHFceLm = () => { return _returnValueFiXCKjP };
		const _longestArgumentTermLengthMk2NUVC = true;
		const _helpereAUEgdK = {
			"longestOptionTermLength": _longestOptionTermLengthqiiEcZk,
		"longestSubcommandTermLength": _longestSubcommandTermLengthuHFceLm,
		"longestArgumentTermLength": _longestArgumentTermLengthMk2NUVC
	}
		const _returnValueg7WGREi = await _HelpBVwVnI.padWidth(_cmdYpl3ayI, _helpereAUEgdK)
		const _arrayValuegiTODld = null;
		const _arrayValueD7PXeNe = [_arrayValuegiTODld]
		const _arrayValueqLzU9l5 = {
		
	}
		const _flagsOq9DapN = [_arrayValueD7PXeNe, _arrayValueqLzU9l5]
		const _optioneKLXFlh = {
			"flags": _flagsOq9DapN
	}
		const _returnValueHdhW1gR = await _HelpBVwVnI.optionTerm(_optioneKLXFlh)
	});

	it('test for Help', async () => {
		const _HelpRqG3sa4 = new Help()
		const _argChoicesqFcQqYU = {
		
	}
		const _defaultValueO6oifUY = undefined;
		const _defaultValueDescriptiontAAkIgT = null;
		const _descriptionLZsuqJz = null;
		const _argumentpumYBcN = {
			"argChoices": _argChoicesqFcQqYU,
		"defaultValue": _defaultValueO6oifUY,
		"defaultValueDescription": _defaultValueDescriptiontAAkIgT,
		"description": _descriptionLZsuqJz
	}
		const _returnValuek0ouHRB = await _HelpRqG3sa4.argumentDescription(_argumentpumYBcN)
		const _cmdP6V7HWp = undefined;
		const _returnValuezt6xVAn = 0.5173414976834927;
		const _visibleArgumentsnMxIVqt = () => { return _returnValuezt6xVAn };
		const _returnValueFd5q8cu = undefined;
		const _argumentTermtMvoYSe = () => { return _returnValueFd5q8cu };
		const _helperRQClLfz = {
			"visibleArguments": _visibleArgumentsnMxIVqt,
		"argumentTerm": _argumentTermtMvoYSe
	}
		const _returnValuenYxrQNn = await _HelpRqG3sa4.longestArgumentTermLength(_cmdP6V7HWp, _helperRQClLfz)
	});

	it('test for Help', async () => {
		const _HelpQLJuEp5 = new Help()
		const __argso2Aeh55 = {
		
	}
		const __nameMm7Nisl = 0.34765175569404505;
		const __aliasesuG4a1QG = {
		
	}
		const _optionsOcKLfML = {
		
	}
		const _cmdRibuwZ = {
			"_args": __argso2Aeh55,
		"_name": __nameMm7Nisl,
		"_aliases": __aliasesuG4a1QG,
		"options": _optionsOcKLfML
	}
		const _returnValueU41jrwl = await _HelpQLJuEp5.subcommandTerm(_cmdRibuwZ)
	});

	it('test for Help', async () => {
		const _Helpv5SLPFu = new Help()
		const _returnValueix3yDPX = undefined;
		const _descriptionogCqFVN = () => { return _returnValueix3yDPX };
		const _cmdblgawz1 = {
			"description": _descriptionogCqFVN
	}
		const _returnValueDmhio8N = await _Helpv5SLPFu.subcommandDescription(_cmdblgawz1)
		const _cmdlFJLBaC = null;
		const _sortSubcommandsFCJ9Mj8 = "P473PwjyCBJKwSNgB7mZKNkhHl5ayYT881I";
		const _returnValueZPsddxI = undefined;
		const _subcommandTermxBmXQhv = () => { return _returnValueZPsddxI };
		const _helperiscUZuy = {
			"sortSubcommands": _sortSubcommandsFCJ9Mj8,
		"subcommandTerm": _subcommandTermxBmXQhv
	}
		const _returnValueTOTKnU1 = await _Helpv5SLPFu.longestSubcommandTermLength(_cmdlFJLBaC, _helperiscUZuy)
	});

	it('test for Help', async () => {
		const _HelpGNulmWP = new Help()
		const _flagsDvzgK5c = {
		
	}
		const _optionQxWPNi = {
			"flags": _flagsDvzgK5c
	}
		const _returnValued4Ud1YG = await _HelpGNulmWP.optionTerm(_optionQxWPNi)
		const _returnValueh3R9vu2 = []
		const _nameWDhCucd = () => { return _returnValueh3R9vu2 };
		const _argumentRsNYaJP = {
			"name": _nameWDhCucd
	}
		const _returnValueyURNJ3B = await _HelpGNulmWP.argumentTerm(_argumentRsNYaJP)
		const _commandsUX4Rloj = {
		
	}
		const _returnValueihcIYPc = undefined;
		const __hasImplicitHelpCommandCuqIKAB = () => { return _returnValueihcIYPc };
		const __helpCommandnameAndArgsEZsI8Ad = {
		
	}
		const _returnValuedWZLFLH = true;
		const _createCommandl7Xvzip = () => { return _returnValuedWZLFLH };
		const _arrayValueyd26JAP = {
		
	}
		const _arrayValuewbwBkiC = true;
		const __helpCommandDescriptionBe4Uf7r = [_arrayValueyd26JAP, _arrayValuewbwBkiC]
		const _cmdboMn0Jt = {
			"commands": _commandsUX4Rloj,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandCuqIKAB,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsEZsI8Ad,
		"createCommand": _createCommandl7Xvzip,
		"_helpCommandDescription": __helpCommandDescriptionBe4Uf7r
	}
		const _returnValueMGkkYfV = await _HelpGNulmWP.visibleCommands(_cmdboMn0Jt)
		const __argsDxgRY4Z = {
		
	}
		const __nameSjuG5SO = 3.2368072643864174;
		const __aliasesezGE89t = {
		
	}
		const _optionsDWOFo2m = {
		
	}
		const _cmdDFneDDk = {
			"_args": __argsDxgRY4Z,
		"_name": __nameSjuG5SO,
		"_aliases": __aliasesezGE89t,
		"options": _optionsDWOFo2m
	}
		const _returnValueBNJU9qz = await _HelpGNulmWP.subcommandTerm(_cmdDFneDDk)
	});

	it('test for Help', async () => {
		const _Helpk1AnnqI = new Help()
		const _argumentFt3jMB1 = "gJbSDdfV08hbip2KhuOOMRkHyHSUFhd8WNe4YOzMEzrfAb2uzuEHpHNkVBzXCDBdh6Cx6vURQ4Zq1B2UpZ9pRCElHwvdd";
		const _returnValueWqOyCSL = await _Helpk1AnnqI.argumentDescription(_argumentFt3jMB1)
		const _argChoicesR85zRlP = {
		
	}
		const _negateKlFJlPN = -7.698703718941726;
		const _defaultValueaCJhAVs = undefined;
		const _defaultValueDescriptionSRI4ab = undefined;
		const _envVarnevV0vF = undefined;
		const _arrayValueQHqJYYe = false;
		const _arrayValueOWoTBSh = -4.0770875355272995;
		const _descriptionFQ7V2l6 = [_arrayValueQHqJYYe, _arrayValueOWoTBSh]
		const _optionHHX8XbI = {
			"argChoices": _argChoicesR85zRlP,
		"negate": _negateKlFJlPN,
		"defaultValue": _defaultValueaCJhAVs,
		"defaultValueDescription": _defaultValueDescriptionSRI4ab,
		"envVar": _envVarnevV0vF,
		"description": _descriptionFQ7V2l6
	}
		const _returnValueLo0GVco = await _Helpk1AnnqI.optionDescription(_optionHHX8XbI)
		const _returnValueHLC1X88 = undefined;
		const _descriptionwJGepYc = () => { return _returnValueHLC1X88 };
		const _cmdbuxtB1M = {
			"description": _descriptionwJGepYc
	}
		const _returnValueIadK14P = await _Helpk1AnnqI.subcommandDescription(_cmdbuxtB1M)
		const _cmdxuRXsDQ = 6.050870272541754;
		const _sortSubcommandsmLQhc4Q = true;
		const _returnValueR3aSRDC = {
		
	}
		const _subcommandTermdW7Xwle = () => { return _returnValueR3aSRDC };
		const _helperb8uymIB = {
			"sortSubcommands": _sortSubcommandsmLQhc4Q,
		"subcommandTerm": _subcommandTermdW7Xwle
	}
		const _returnValueuEdpGTh = await _Helpk1AnnqI.longestSubcommandTermLength(_cmdxuRXsDQ, _helperb8uymIB)
	});

	it('test for Help', async () => {
		const _HelpLg7h9Y = new Help()
		const _cmdSSYZoh = "OsRerTdboWuBrEPmTloajOWxxuJDk9s4ipIW2mQtXpvictcQ2y";
		const _sortSubcommandsfkNiiq7 = "VRMhLzTGi404kjkP7kyRuafn9B86a9APvrIcqQQjbJm8XrudRQGKdzrMIX8rYj1z";
		const _returnValueX5QQ41f = undefined;
		const _subcommandTerm5xNRrj = () => { return _returnValueX5QQ41f };
		const _helpertdOt1ZT = {
			"sortSubcommands": _sortSubcommandsfkNiiq7,
		"subcommandTerm": _subcommandTerm5xNRrj
	}
		const _returnValuej375G1S = await _HelpLg7h9Y.formatHelp(_cmdSSYZoh, _helpertdOt1ZT)
		const _returnValuejtHqfM0 = undefined;
		const _returnValueO2a7NPW = () => { return _returnValuejtHqfM0 };
		const _descriptionvaym58f = () => { return _returnValueO2a7NPW };
		const _cmdWNrbOZo = {
			"description": _descriptionvaym58f
	}
		const _returnValueNTxN5jM = await _HelpLg7h9Y.subcommandDescription(_cmdWNrbOZo)
		const _returnValueTUNp04 = null;
		const _matchhI3a4r = () => { return _returnValueTUNp04 };
		const _returnValueEIVOgzB = {
		
	}
		const _returnValueV1WUTWE = () => { return _returnValueEIVOgzB };
		const _substrohoLRFO = () => { return _returnValueV1WUTWE };
		const _strApQ3s7u = {
			"match": _matchhI3a4r,
		"substr": _substrohoLRFO
	}
		const _widthXJ25ZgA = 8.668519271057619;
		const _indentCMfBETJ = -8.203358123923689;
		const _minColumnWidthnKqqhJc = 0.8875432972504438;
		const _returnValuedKssvQ0 = await _HelpLg7h9Y.wrap(_strApQ3s7u, _widthXJ25ZgA, _indentCMfBETJ, _minColumnWidthnKqqhJc)
	});

	it('test for Help', async () => {
		const _HelpiJEUZ8W = new Help()
		const _returnValuelUkl2Y4 = 0.38324793060585094;
		const _matchmmKEcBO = () => { return _returnValuelUkl2Y4 };
		const _returnValueu98xLbf = undefined;
		const _substrTToOB8T = () => { return _returnValueu98xLbf };
		const _strdv0LC4t = {
			"match": _matchmmKEcBO,
		"substr": _substrTToOB8T
	}
		const _widthkJEVnKC = 9.758334883263725;
		const _indentZmmRkzN = -9.327716646164559;
		const _minColumnWidthSQocNdC = 4.284039598957776;
		const _returnValue2vmlim = await _HelpiJEUZ8W.wrap(_strdv0LC4t, _widthkJEVnKC, _indentZmmRkzN, _minColumnWidthSQocNdC)
		const _cmdzPGtrM = {
		
	}
		const _sortSubcommandsFGe3Kr7 = {
		
	}
		const _returnValuexyPLenR = false;
		const _returnValuemJkiJLi = () => { return _returnValuexyPLenR };
		const _subcommandTermerBP5f0 = () => { return _returnValuemJkiJLi };
		const _helperD6Ni08F = {
			"sortSubcommands": _sortSubcommandsFGe3Kr7,
		"subcommandTerm": _subcommandTermerBP5f0
	}
		const _returnValueE5GveJA = await _HelpiJEUZ8W.formatHelp(_cmdzPGtrM, _helperD6Ni08F)
		const _cmdRjEW7tz = "u7Aor83U4jRxFrMxKek1hHXkHQ5bmabw";
		const _helperkstzHM = undefined;
		const _returnValueTqV2uDv = await _HelpiJEUZ8W.longestOptionTermLength(_cmdRjEW7tz, _helperkstzHM)
		const _arrayValuehRABGj = {
		
	}
		const _returnValueyOJJ58Q = [_arrayValuehRABGj]
		const _descriptionsV5Ggup = () => { return _returnValueyOJJ58Q };
		const _cmdI6Yc4Ng = {
			"description": _descriptionsV5Ggup
	}
		const _returnValueukx1xpI = await _HelpiJEUZ8W.subcommandDescription(_cmdI6Yc4Ng)
		const _optionsoVuY9hK = {
		
	}
		const __hasHelpOptione8DtHJ1 = undefined;
		const __helpShortFlagsnsJyBJ = {
		
	}
		const _returnValueAbnrjm = []
		const __findOptionHPZEIpH = () => { return _returnValueAbnrjm };
		const __helpLongFlagqOvmiNI = "v9Yl8GSLl5rs2Gzb2V8U0To2K4FCtiLmHD7tOC8bKeA7";
		const _returnValueGyvumxH = undefined;
		const _createOptionx16Xs5 = () => { return _returnValueGyvumxH };
		const __helpDescriptioniQx2KR = undefined;
		const __helpFlagsyYV2iu = undefined;
		const _cmdvlWoAUt = {
			"options": _optionsoVuY9hK,
		"_hasHelpOption": __hasHelpOptione8DtHJ1,
		"_helpShortFlag": __helpShortFlagsnsJyBJ,
		"_findOption": __findOptionHPZEIpH,
		"_helpLongFlag": __helpLongFlagqOvmiNI,
		"createOption": _createOptionx16Xs5,
		"_helpDescription": __helpDescriptioniQx2KR,
		"_helpFlags": __helpFlagsyYV2iu
	}
		const _returnValueswpW7NX = await _HelpiJEUZ8W.visibleOptions(_cmdvlWoAUt)
	});

	it('test for Help', async () => {
		const _HelpWOrNcJ = new Help()
		const _returnValueFuRyzcZ = null;
		const _nameko69ikg = () => { return _returnValueFuRyzcZ };
		const _argumentL9mM2Xf = {
			"name": _nameko69ikg
	}
		const _returnValuedDe8unH = await _HelpWOrNcJ.argumentTerm(_argumentL9mM2Xf)
		const _optionsjh5ZgbN = {
		
	}
		const __hasHelpOptionIJrrFa = true;
		const _arrayValueVYBCfe = undefined;
		const _arrayValueVAGo1vy = undefined;
		const __helpShortFlagMKeYxlF = [_arrayValueVYBCfe, _arrayValueVAGo1vy]
		const _returnValueQ0OY7Xm = null;
		const __findOptionglgjNBd = () => { return _returnValueQ0OY7Xm };
		const __helpLongFlagEl9ONBk = "iV7f2ZsPjBMqVT7cxUTfyrMnCmhip79OYLQ4Mb56iXtH1mbYk1f";
		const _returnValuez608Tp = undefined;
		const _createOptionqncOPlU = () => { return _returnValuez608Tp };
		const __helpDescriptionQzYZEsn = false;
		const __helpFlags0LPFOk = true;
		const _cmdBo9I2lK = {
			"options": _optionsjh5ZgbN,
		"_hasHelpOption": __hasHelpOptionIJrrFa,
		"_helpShortFlag": __helpShortFlagMKeYxlF,
		"_findOption": __findOptionglgjNBd,
		"_helpLongFlag": __helpLongFlagEl9ONBk,
		"createOption": _createOptionqncOPlU,
		"_helpDescription": __helpDescriptionQzYZEsn,
		"_helpFlags": __helpFlags0LPFOk
	}
		const _returnValueGtGuIL7 = await _HelpWOrNcJ.visibleOptions(_cmdBo9I2lK)
		const _arrayValueQKbdne1 = undefined;
		const _arrayValueWcjdE7d = true;
		const _returnValueMwPG8cq = {
		
	}
		const _arrayValuemcaIVhI = () => { return _returnValueMwPG8cq };
		const _arrayValueuiOjjzJ = [_arrayValueWcjdE7d, _arrayValuemcaIVhI]
		const _arrayValueZDwVz05 = "pMNZi6OoR1veRWWIT4O3y3KlxvoOsKbVFK2dMJq8OoJbKSRVPaWAblzscKBILuwLeMnJcebDO2M5TIBExcDEMZ9ZQYRlg";
		const _arrayValuexlyZV16 = "rCgvHy3QA0Sm6uEtVBMUGg7UvEHHpiOY76MVTxX2CdJpFkz7eoDMsBscsPinP36UgOQGfBYKA8f8";
		const _arrayValue7dDf9a = [_arrayValueZDwVz05, _arrayValuexlyZV16]
		const _arrayValueaOuk6MB = -6.510222885016096;
		const _arrayValueL7eWArh = []
		const _cmdHl03c8Q = [_arrayValueQKbdne1, _arrayValueuiOjjzJ, _arrayValue7dDf9a, _arrayValueaOuk6MB, _arrayValueL7eWArh]
		const _returnValueRa56FqT = await _HelpWOrNcJ.subcommandTerm(_cmdHl03c8Q)
		const _cmdf1AGCUo = undefined;
		const _arrayValueSeusiai = "GgRbXUVkTwzMquxnuXpNxavnBswXHhjyv7";
		const _arrayValuesL7vgY6 = false;
		const _arrayValuebBwLsrd = null;
		const _arrayValueJLaEvvW = [_arrayValuesL7vgY6, _arrayValuebBwLsrd]
		const _arrayValueheMDfz = null;
		const _arrayValueyCQNVC5 = false;
		const _arrayValueepJfOvv = 9.973749922760767;
		const _arrayValuecOuFPdN = [_arrayValueheMDfz, _arrayValueyCQNVC5, _arrayValueepJfOvv]
		const _arrayValueKzOThJ = [_arrayValueJLaEvvW, _arrayValuecOuFPdN]
		const _helperuhljnw0 = [_arrayValueSeusiai, _arrayValueKzOThJ]
		const _returnValueHJVNNK = await _HelpWOrNcJ.longestSubcommandTermLength(_cmdf1AGCUo, _helperuhljnw0)
	});

	it('test for Help', async () => {
		const _HelpOqqMxf8 = new Help()
		const _cmdyka9IF = false;
		const _returnValueaVsPeY = null;
		const _longestOptionTermLengthwJnRATE = () => { return _returnValueaVsPeY };
		const _returnValueSvzZUrn = {
		
	}
		const _longestSubcommandTermLengthPZ3jfxz = () => { return _returnValueSvzZUrn };
		const _returnValueqYWbL3p = "sJYcb";
		const _longestArgumentTermLengthIFR84hk = () => { return _returnValueqYWbL3p };
		const _helperVSmxwN = {
			"longestOptionTermLength": _longestOptionTermLengthwJnRATE,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPZ3jfxz,
		"longestArgumentTermLength": _longestArgumentTermLengthIFR84hk
	}
		const _returnValueGgNXohY = await _HelpOqqMxf8.padWidth(_cmdyka9IF, _helperVSmxwN)
		const _strBv7J9gg = "a2af7lOTRKAzXgfBcag6zv7ems5ShUWjZzJVRpWZIt";
		const _widthE6eWacp = true;
		const _indentW2Q7wq3 = 9.520762346167562;
		const _minColumnWidthsHax4ef = -3.849754657685102;
		const _returnValuevN0jX6d = await _HelpOqqMxf8.wrap(_strBv7J9gg, _widthE6eWacp, _indentW2Q7wq3, _minColumnWidthsHax4ef)
	});

	it('test for Help', async () => {
		const _HelpmvfhG1 = new Help()
		const _strTUECvXl = "lWxSnjcx2r31GJJ2OFDYllQQ";
		const _widthpCIHmFC = 5.220380840989293;
		const _indentq1Q6Nc = -6.758160377845979;
		const _minColumnWidthDe0Bbyj = 9.133467119463646;
		const _returnValueqwjH4y = await _HelpmvfhG1.wrap(_strTUECvXl, _widthpCIHmFC, _indentq1Q6Nc, _minColumnWidthDe0Bbyj)
		const _arrayValuei4vhB1q = "zu7Rq8CSr9qw7m";
		const _arrayValuewfOj4Vc = undefined;
		const _arrayValueT1fmfU3 = null;
		const _arrayValueCH8hZtp = [_arrayValuei4vhB1q, _arrayValuewfOj4Vc, _arrayValueT1fmfU3]
		const _arrayValueY0Q5AuG = [_arrayValueCH8hZtp]
		const _arrayValueBGy8pZw = -1.033287804615684;
		const _cmdFLLtTdl = [_arrayValueY0Q5AuG, _arrayValueBGy8pZw]
		const _helpereJR8u1s = "WZdpYLE8gvbcpvAnBLByXFqSFl6cotjHpgX2NCHpbrnenusfsG5dsrnHiOfOqbrboyg4sOSLvXFNtT92wkjHuDY1";
		const _returnValueanoBnmn = await _HelpmvfhG1.formatHelp(_cmdFLLtTdl, _helpereJR8u1s)
		const _returnValueHExFfRX = -3.039866129932455;
		const _flagsQ7Nufmo = () => { return _returnValueHExFfRX };
		const _optiong4aWuj6 = {
			"flags": _flagsQ7Nufmo
	}
		const _returnValueu2L1AJ3 = await _HelpmvfhG1.optionTerm(_optiong4aWuj6)
	});

	it('test for Help', async () => {
		const _HelpC4eE1vR = new Help()
		const _nameEuFcx1 = undefined;
		const _cmdEn8jmQE = new Command(_nameEuFcx1)
		const _returnValueNwW9q5 = await _cmdEn8jmQE._parseOptionsEnv()
		const _returnValueX8PiMMP = await _cmdEn8jmQE.createHelp()
		const _returnValueIaz7wvT = await _HelpC4eE1vR.subcommandTerm(_cmdEn8jmQE)
		const _cmdv2KwA3m = "zYhrPoDl1TGkOpoptDasPOWMKXTVoSsLqj6fqkLWzi9DDHe7muxnGEKCSTiEtACXB3ADqA0UwCOD3tESJW8kCERgmVXrS6o";
		const _returnValuegSeiOvu = await _HelpC4eE1vR.commandDescription(_cmdv2KwA3m)
		const _returnValueV1eYXEe = {
		
	}
		const _returnValueu2oF8SY = () => { return _returnValueV1eYXEe };
		const _cmdd2H6F4G = () => { return _returnValueu2oF8SY };
		const _helperRMloJIr = new Help()
		const _flagsnrFhHxo = "XMXdNOZc5FK4dBV6gVz1xpTvejZahy9mFdwXm0M2hdIsuke1A4TOTW6E2cHFlU67XIUJ2LAEqLFXFHsOqzDgPydBVDLVRT3hlJ";
		const _arrayValuele6fwJi = -7.540932960190071;
		const _arrayValuemk3Ua3J = "y8uJ2RGHfu2NvhYDi2q8VU48HZGX1bg";
		const _returnValuepSKmLOe = "Y9KNhBvq12HeL3BwtAif2KRCxGKh9nNLetfP5ikfj0FJf01TUBSY4dKibD4Pn9wGww3Fd";
		const _arrayValueLnyCKcF = () => { return _returnValuepSKmLOe };
		const _arrayValueCz9TWvu = -3.9100666007290306;
		const _arrayValuexo6MjPZ = undefined;
		const _arrayValuetLuYQ5x = undefined;
		const _arrayValueUWkQuGf = undefined;
		const _arrayValueauAEeO = "n8xlDIHPL3xLzb1EH8t7TC";
		const _arrayValuevHv1CFD = null;
		const _arrayValueLoGpta7 = [_arrayValueUWkQuGf, _arrayValueauAEeO, _arrayValuevHv1CFD]
		const _arrayValueSHD7wrK = [_arrayValuetLuYQ5x, _arrayValueLoGpta7]
		const _arrayValueTeKm0Ze = "N0r6CAg01iESWu7NK8we686ywNOy2uztAxRxvb29Xdg5FZSX9a80mBDgJBHgJHEdUF7NeoWQK8C";
		const _arrayValueAJ8xODt = [_arrayValuexo6MjPZ, _arrayValueSHD7wrK, _arrayValueTeKm0Ze]
		const _arrayValueSQgZF9s = [_arrayValueLnyCKcF, _arrayValueCz9TWvu, _arrayValueAJ8xODt]
		const _arrayValueAkMS93 = [_arrayValuele6fwJi, _arrayValuemk3Ua3J, _arrayValueSQgZF9s]
		const _arrayValueHfLQ4dv = [_arrayValueAkMS93]
		const _arrayValuemjBpojA = false;
		const _arrayValuelMbSzQE = [_arrayValuemjBpojA]
		const _descriptionQG17MDR = [_arrayValueHfLQ4dv, _arrayValuelMbSzQE]
		const _optionuXBe0Va = new Option(_flagsnrFhHxo, _descriptionQG17MDR)
		const _mandatoryArysOFv = true;
		const _returnValuegQL0x3X = await _optionuXBe0Va.makeOptionMandatory(_mandatoryArysOFv)
		const _valueznPiXkZ = {
		
	}
		const _returnValueN0OsItm = false;
		const _concatZsm0TwY = () => { return _returnValueN0OsItm };
		const _previousEwdJXKV = {
			"concat": _concatZsm0TwY
	}
		const _returnValuek96l9ty = await _optionuXBe0Va._concatValue(_valueznPiXkZ, _previousEwdJXKV)
		const _mandatoryA18NgQA = true;
		const _returnValueo8aHH5c = await _optionuXBe0Va.makeOptionMandatory(_mandatoryA18NgQA)
		const _returnValueekLtUu8 = await _optionuXBe0Va.attributeName()
		const _returnValuedNpYrzq = await _optionuXBe0Va.name()
		const _returnValuecQqxgjh = await _helperRMloJIr.optionDescription(_optionuXBe0Va)
		const _strDrJY0yE = "havNyoiTJ9mmkXdrLf5z5cwaBgoelkYeeSHB9sdqVSA9DnxE1MHmwNNhgqZHhTdkL0AdI";
		const _widthBKatC86 = -9.807688633001273;
		const _indentMyXrHoW = -0.5452628607157823;
		const _minColumnWidthCeJZLYJ = 3.467381677504491;
		const _returnValueG652J6 = await _helperRMloJIr.wrap(_strDrJY0yE, _widthBKatC86, _indentMyXrHoW, _minColumnWidthCeJZLYJ)
		const _returnValueQDVIrhv = await _HelpC4eE1vR.longestSubcommandTermLength(_cmdd2H6F4G, _helperRMloJIr)
		const _returnValueHRVhweS = undefined;
		const _option9psDh2 = () => { return _returnValueHRVhweS };
		const _returnValued254hFP = await _HelpC4eE1vR.optionTerm(_option9psDh2)
		const _cmdR9nTNS = null;
		const _helpersfiasVP = new Help()
		const _returnValueeyLdwq = null;
		const _argumentnTvyQ3J = () => { return _returnValueeyLdwq };
		const _returnValueOZM0rMr = await _helpersfiasVP.argumentDescription(_argumentnTvyQ3J)
		const _cmdbTRbGRr = false;
		const _helpervTrd1pS = new Help()
		const _returnValuemhsHOoh = {
		
	}
		const _cmdJ9fGGIj = () => { return _returnValuemhsHOoh };
		const _returnValueiEcDPY = await _helpervTrd1pS.commandDescription(_cmdJ9fGGIj)
		const _cmdx2TmaXn = "SEz7L04Vb9Ux6s8I8VyNqsqkPgmQTJToK3uNKXXzgEhGZqmYlgo87Jh19vG2gl15LzgpBv9RpFOkDi9CvZIt7U53QDh";
		const _returnValuebumVHhJ = await _helpervTrd1pS.commandDescription(_cmdx2TmaXn)
		const _returnValueOeGVzF0 = await _helpersfiasVP.longestOptionTermLength(_cmdbTRbGRr, _helpervTrd1pS)
		const _returnValueZIVWKTe = await _HelpC4eE1vR.longestOptionTermLength(_cmdR9nTNS, _helpersfiasVP)
	});

	it('test for Help', async () => {
		const _HelpG6MNXEk = new Help()
		const _flagsi5l0L9P = "kNesc8Se3bMI9KKnQ7ID";
		const _descriptionmsY0IWY = null;
		const _argumentMQnuvxD = new Option(_flagsi5l0L9P, _descriptionmsY0IWY)
		const _fnx2HDxKv = undefined;
		const _returnValueRzLPiqm = await _argumentMQnuvxD.argParser(_fnx2HDxKv)
		const _fnVjcHOa = undefined;
		const _returnValueVVIql9C = await _argumentMQnuvxD.argParser(_fnVjcHOa)
		const _nameBny4d38 = undefined;
		const _returnValueZgY3vkN = await _argumentMQnuvxD.env(_nameBny4d38)
		const _returnValue0ESrYp = await _HelpG6MNXEk.argumentDescription(_argumentMQnuvxD)
		const _cmdymjZGVR = {
		
	}
		const _returnValueJhuyUwb = {
		
	}
		const _returnValueqOWM2N2 = () => { return _returnValueJhuyUwb };
		const _helperQNaesFe = () => { return _returnValueqOWM2N2 };
		const _returnValuespPgpLj = await _HelpG6MNXEk.longestSubcommandTermLength(_cmdymjZGVR, _helperQNaesFe)
	});

	it('test for Help', async () => {
		const _HelpNZEaxVW = new Help()
		const _arrayValuenUtheT5 = undefined;
		const _namepqP4m6p = [_arrayValuenUtheT5]
		const _cmdDgCrFFn = new Command(_namepqP4m6p)
		const _combineLqGUJL = false;
		const _returnValueVxSDlk = await _cmdDgCrFFn.combineFlagAndOptionalValue(_combineLqGUJL)
		const _argdbHBZvf = -4.913897924968481;
		const _returnValueoBx9hpa = await _cmdDgCrFFn._findOption(_argdbHBZvf)
		const _arrayValuec3jsI11 = false;
		const _arrayValueGdGTCe3 = -8.380069186889724;
		const _arrayValueGg9f2p0 = "3zq2osAq3ErWfLro1lgT01McyGn691WIKw45";
		const _returnValueOum8F3 = [_arrayValuec3jsI11, _arrayValueGdGTCe3, _arrayValueGg9f2p0]
		const _errorDIS1rfW = () => { return _returnValueOum8F3 };
		const _commandY8570Dz = -5.407312509755527;
		const _contextOptionsnW7Y8oD = {
			"error": _errorDIS1rfW,
		"command": _commandY8570Dz
	}
		const _returnValue6NmsWS = await _cmdDgCrFFn.helpInformation(_contextOptionsnW7Y8oD)
		const _returnValueIQ7QonT = await _HelpNZEaxVW.visibleOptions(_cmdDgCrFFn)
		const _cmdlFp0npr = 1.4403168414991327;
		const _helperJLHofYX = true;
		const _returnValueAXEf3XZ = await _HelpNZEaxVW.longestSubcommandTermLength(_cmdlFp0npr, _helperJLHofYX)
		const _arrayValuegRwrstG = {
		
	}
		const _arrayValueN5Oa4K6 = {
		
	}
		const _arrayValueenTMD8P = "iLLLaDtwYdT4t2JEoxvM";
		const _namejheYX06 = [_arrayValuegRwrstG, _arrayValueN5Oa4K6, _arrayValueenTMD8P]
		const _cmdr6Ri9gv = new Command(_namejheYX06)
		const _allowExcessCpAHqAd = true;
		const _returnValueJqCfguI = await _cmdr6Ri9gv.allowExcessArguments(_allowExcessCpAHqAd)
		const _errorriXwnYd = undefined;
		const _commandrY55uQv = "eMMdVsbJwy6OHW3VJhmYAGyEVJxB4CuFxujJAYTwN52DMVsa";
		const _contextOptionscDwL3Li = {
			"error": _errorriXwnYd,
		"command": _commandrY55uQv
	}
		const _returnValueyA1Qnj4 = await _cmdr6Ri9gv.help(_contextOptionscDwL3Li)
		const _namegEv8i4i = {
		
	}
		const _returnValueGf3cCG = await _cmdr6Ri9gv.createCommand(_namegEv8i4i)
		const _flagjvbtxR = "arrQkgajuEKyHNOMPDK8vqxKUmrEjHxmmOASrjRnmvUhpEMQ7rNdlvRaiiqGBFr5E3YtmsIhIPXOmJuCuE";
		const _returnValuegJqSuqq = await _cmdr6Ri9gv.unknownOption(_flagjvbtxR)
		const _returnValueYN02fY2 = await _HelpNZEaxVW.visibleArguments(_cmdr6Ri9gv)
		const _cmdDtdBlfT = false;
		const _helperUtzeoi = new Help()
		const _arrayValuehXQgfY = null;
		const _cmdWPR1WYo = [_arrayValuehXQgfY]
		const _sortSubcommandsipeerv = -1.9894084437965418;
		const _returnValuesTqGgvq = false;
		const _returnValueeFLODuj = () => { return _returnValuesTqGgvq };
		const _returnValueyqv4XK9 = () => { return _returnValueeFLODuj };
		const _subcommandTermFj3wZBV = () => { return _returnValueyqv4XK9 };
		const _helperyDr10Qu = {
			"sortSubcommands": _sortSubcommandsipeerv,
		"subcommandTerm": _subcommandTermFj3wZBV
	}
		const _returnValuePBqKSDx = await _helperUtzeoi.formatHelp(_cmdWPR1WYo, _helperyDr10Qu)
		const _cmdAmAMbLM = null;
		const _returnValueCnev5U7 = false;
		const _visibleArgumentsZ6sV4Dg = () => { return _returnValueCnev5U7 };
		const _returnValuey5ORXnF = "uKBMO16tQTvR";
		const _argumentTermS2D93rw = () => { return _returnValuey5ORXnF };
		const _helperIkZM1ao = {
			"visibleArguments": _visibleArgumentsZ6sV4Dg,
		"argumentTerm": _argumentTermS2D93rw
	}
		const _returnValuevFU9RMD = await _helperUtzeoi.longestArgumentTermLength(_cmdAmAMbLM, _helperIkZM1ao)
		const _returnValuekSq6FzB = undefined;
		const _argumentauD4vv8 = () => { return _returnValuekSq6FzB };
		const _returnValueD89SoRk = await _helperUtzeoi.argumentDescription(_argumentauD4vv8)
		const _nameiIZMHAf = undefined;
		const _cmdwFEZZT4 = new Command(_nameiIZMHAf)
		const _commandNameGefT036 = undefined;
		const _returnValuejt2VBo6 = false;
		const _concatCnu8hj = () => { return _returnValuejt2VBo6 };
		const _operandsnHb7LET = {
			"concat": _concatCnu8hj
	}
		const _unknownNA5FBgO = "VmGqyWuXSEHq8YJl0m7GQQ8vSSu77CALk4iMlDmdSgOuvifrTg1E9pnkkqj2mYTi1kFDZtF";
		const _returnValuezv2av7V = await _cmdwFEZZT4._dispatchSubcommand(_commandNameGefT036, _operandsnHb7LET, _unknownNA5FBgO)
		const _flagsXKSJJM8 = true;
		const _descriptionR4eKjQZ = {
		
	}
		const _returnValuemI4ifg = await _cmdwFEZZT4.createOption(_flagsXKSJJM8, _descriptionR4eKjQZ)
		const _returnValuew49j2wf = await _cmdwFEZZT4.unknownCommand()
		const _strFMIuln4 = undefined;
		const _returnValueyBLFqvI = await _cmdwFEZZT4.usage(_strFMIuln4)
		const _returnValuePiX0CAr = await _helperUtzeoi.visibleOptions(_cmdwFEZZT4)
		const _returnValueymBWipj = await _HelpNZEaxVW.longestSubcommandTermLength(_cmdDtdBlfT, _helperUtzeoi)
	});

	it('test for Help', async () => {
		const _HelptW1udQJ = new Help()
		const _arrayValuefPP70eS = "PN1eWmNzEHGLamBD25AGDl2LQOUdqhtVLtY2WJfnCXTzDekAi1fPrKG8lpCOAh2Yo9nHUAkDzDuaCmJnJPkUHr4";
		const _namejY76R06 = [_arrayValuefPP70eS]
		const _cmdJRd549K = new Command(_namejY76R06)
		const _namesNU20To2 = "jfCPSES5rBNdMGkOG7ejPwyNeXlwvYO6SrKJI";
		const _returnValueglbDoe = await _cmdJRd549K.arguments(_namesNU20To2)
		const _fnRbmHoDw = {
		
	}
		const _returnValuekdY58aV = await _cmdJRd549K.exitOverride(_fnRbmHoDw)
		const _flagsxlXxpmO = "KUzCygEaPHh";
		const _descriptiontU9NPri = -0.6322819203481291;
		const _optionIvu69Tf = new Option(_flagsxlXxpmO, _descriptiontU9NPri)
		const _returnValue4sbEiB = await _optionIvu69Tf.name()
		const _fnIQzLbWI = undefined;
		const _returnValueQwoAID = await _optionIvu69Tf.argParser(_fnIQzLbWI)
		const _hidejd8B8y = false;
		const _returnValueLVTDtow = await _optionIvu69Tf.hideHelp(_hidejd8B8y)
		const _arrayValueq9w85U = null;
		const _arrayValueH2uHk7q = {
		
	}
		const _valuetAMa0D3 = [_arrayValueq9w85U, _arrayValueH2uHk7q]
		const _returnValueh7rz64x = null;
		const _previousVJgEh1m = () => { return _returnValueh7rz64x };
		const _returnValuetf2sWaG = await _optionIvu69Tf._concatValue(_valuetAMa0D3, _previousVJgEh1m)
		const _returnValueT1B8GsQ = await _cmdJRd549K.addOption(_optionIvu69Tf)
		const _returnValueWmFSioJ = await _HelptW1udQJ.subcommandTerm(_cmdJRd549K)
		const _nameZgvwYSh = 1.3859491188593598;
		const _cmdJeE9xp7 = new Command(_nameZgvwYSh)
		const _enableOrNameAndArgseta4tB0 = "ETlyZvqNNEV9GaLnrtIjM2jEYz4RZJfbbCU4kSNMnyzQfPU8tPb2jLsF24dhNuOYRnz46HHSfDK0WyOWYsGJ";
		const _descriptionNUTKpB4 = {
		
	}
		const _returnValueHnv7mFl = await _cmdJeE9xp7.addHelpCommand(_enableOrNameAndArgseta4tB0, _descriptionNUTKpB4)
		const _returnValueuiKttXB = null;
		const _forEachkQoiMhR = () => { return _returnValueuiKttXB };
		const _aliasesWIvCXci = {
			"forEach": _forEachkQoiMhR
	}
		const _returnValueFm3cVZq = await _cmdJeE9xp7.aliases(_aliasesWIvCXci)
		const _returnValuekiowKtn = await _HelptW1udQJ.subcommandDescription(_cmdJeE9xp7)
		const _returnValuemKfrL2S = []
		const _optionyPWb0Gd = () => { return _returnValuemKfrL2S };
		const _returnValuegy5yhK = await _HelptW1udQJ.optionTerm(_optionyPWb0Gd)
		const _arrayValuegfzL94A = null;
		const _optionLmi12fB = [_arrayValuegfzL94A]
		const _returnValueLwQtpqL = await _HelptW1udQJ.optionDescription(_optionLmi12fB)
		const _returnValueRcGyfzc = true;
		const _argumentIdpLSuX = () => { return _returnValueRcGyfzc };
		const _returnValueAJYd06 = await _HelptW1udQJ.argumentDescription(_argumentIdpLSuX)
	});

	it('test for Help', async () => {
		const _HelpGjWm255 = new Help()
		const _namenBfVglM = {
		
	}
		const _cmdrP3qEP = new Command(_namenBfVglM)
		const _keywodO66d = 2.509297477628042;
		const _valuevOK47xR = false;
		const _returnValuez9j0CY9 = await _cmdrP3qEP.setOptionValue(_keywodO66d, _valuevOK47xR)
		const _argfhhbEN2 = true;
		const _returnValuexAF3Aa = await _cmdrP3qEP._findOption(_argfhhbEN2)
		const _aliasaBbeva9 = undefined;
		const _returnValueGjdrCOT = await _cmdrP3qEP.alias(_aliasaBbeva9)
		const _nameRoPyEWj = null;
		const _returnValuegNCu6pE = await _cmdrP3qEP.createCommand(_nameRoPyEWj)
		const _displayHelpV74b7zY = {
		
	}
		const _returnValueI35JQqQ = await _cmdrP3qEP.showHelpAfterError(_displayHelpV74b7zY)
		const _returnValueT9SOLuB = await _HelpGjWm255.visibleCommands(_cmdrP3qEP)
		const _arrayValuegH3AZZv = -9.064773346761465;
		const _arrayValuenDCvbBq = 0.8995893621328666;
		const _arrayValueqcJergg = null;
		const _returnValuerzU8YE0 = [_arrayValueqcJergg]
		const _arrayValue71K3o7 = () => { return _returnValuerzU8YE0 };
		const _arrayValueS9oK0CG = [_arrayValuenDCvbBq, _arrayValue71K3o7]
		const _cmdcEAqz6n = [_arrayValuegH3AZZv, _arrayValueS9oK0CG]
		const _returnValueKDRvfCv = await _HelpGjWm255.visibleOptions(_cmdcEAqz6n)
	});

	it('test for Help', async () => {
		const _HelpHU1CAkG = new Help()
		const _cmdYodO6pv = undefined;
		const _helperCCBY6j = new Help()
		const __nameCxOLbfM = 8.093557580508048;
		const _arrayValueV3XpUt = {
		
	}
		const _arrayValueokIlzh7 = 1.528294077327196;
		const _arrayValueAZNJg8t = -3.679450416203526;
		const _arrayValueoBdqy4r = 0.2742052815827343;
		const __aliasesOgCguZk = [_arrayValueV3XpUt, _arrayValueokIlzh7, _arrayValueAZNJg8t, _arrayValueoBdqy4r]
		const _parentM86BB9h = {
		
	}
		const _returnValuehlEPNnK = false;
		const _usageMpacbxg = () => { return _returnValuehlEPNnK };
		const _cmdAFoPAHL = {
			"_name": __nameCxOLbfM,
		"_aliases": __aliasesOgCguZk,
		"parent": _parentM86BB9h,
		"usage": _usageMpacbxg
	}
		const _returnValueR4dPgNM = await _helperCCBY6j.commandUsage(_cmdAFoPAHL)
		const _nameiJ1Sll9 = "ATitz3pt1ZjvdUuAIT3x9fgzmGFi7uhmQEOlnQSZQVvCA7XfdT5GFcxk6il1cqBnFn";
		const _cmdXSmJmfR = new Command(_nameiJ1Sll9)
		const _flagsyumZVh = null;
		const _descriptionIx0Su9w = 7.695976234438838;
		const _returnValueckU12PT = await _cmdXSmJmfR.createOption(_flagsyumZVh, _descriptionIx0Su9w)
		const _returnValueacF0SLx = await _helperCCBY6j.subcommandTerm(_cmdXSmJmfR)
		const _arrayValuekiYNEGP = true;
		const _arrayValueHu0h3wl = true;
		const _arrayValuedJZ9YYz = [_arrayValueHu0h3wl]
		const _arrayValuedsT6nyA = 5.782366210551187;
		const _arrayValueG4ObyWy = null;
		const _arrayValueDoKDjqq = undefined;
		const _arrayValueGOqhwtg = [_arrayValueG4ObyWy, _arrayValueDoKDjqq]
		const _arrayValuevHh27gx = 4.219116488267247;
		const _returnValuezxwqF57 = [_arrayValuevHh27gx]
		const _arrayValuevGupvYp = () => { return _returnValuezxwqF57 };
		const _argumentWPA3zIH = [_arrayValuekiYNEGP, _arrayValuedJZ9YYz, _arrayValuedsT6nyA, _arrayValueGOqhwtg, _arrayValuevGupvYp]
		const _returnValueqcLIUav = await _helperCCBY6j.argumentDescription(_argumentWPA3zIH)
		const _returnValues9ICHm = await _HelpHU1CAkG.formatHelp(_cmdYodO6pv, _helperCCBY6j)
		const _flagsDMpeTnj = "q6IL6SBKXfsl";
		const _descriptionLnx3hDk = "K42XjnzLfwSVsGHShfSnDlnWBriXIFb";
		const _argumentVUuWYDm = new Option(_flagsDMpeTnj, _descriptionLnx3hDk)
		const _returnValuenixRbf = await _argumentVUuWYDm.attributeName()
		const _nameo2gUi7q = {
		
	}
		const _returnValue49iN4j = await _argumentVUuWYDm.env(_nameo2gUi7q)
		const _returnValueBhxSqpG = await _HelpHU1CAkG.argumentDescription(_argumentVUuWYDm)
		const _flagsr6nejUM = "ut4OyMfEJUEcPaskfHHK8WaFKgLTu6UWG7zLfxhwwmCQkPw79xcsXO28V641jGMVz5fv3y";
		const _arrayValueWzhdsEG = undefined;
		const _descriptionCHeqCo2 = [_arrayValueWzhdsEG]
		const _argumentkR39nHz = new Option(_flagsr6nejUM, _descriptionCHeqCo2)
		const _returnValuehJ7Sif = await _argumentkR39nHz.name()
		const _namevwwIHcJ = {
		
	}
		const _returnValueHJxgPOA = await _argumentkR39nHz.env(_namevwwIHcJ)
		const _arrayValueHvl3pCZ = undefined;
		const _arrayValuej4AHx6C = "";
		const _arrayValuejo96gEy = [_arrayValuej4AHx6C]
		const _arrayValueA7KQ1nM = {
		
	}
		const _arrayValueIGeAHhj = "gIbEAnDMSqyQSoVumhWwu95GXMu";
		const _arrayValueez0PEB = [_arrayValueIGeAHhj]
		const _arrayValuewbRgSsK = -3.5670889974136077;
		const _arrayValuerJltQv = [_arrayValuejo96gEy, _arrayValueA7KQ1nM, _arrayValueez0PEB, _arrayValuewbRgSsK]
		const _valuejeASuvG = [_arrayValueHvl3pCZ, _arrayValuerJltQv]
		const _returnValueCOcbuw = undefined;
		const _concatb8RBrNU = () => { return _returnValueCOcbuw };
		const _previousYjpHZv = {
			"concat": _concatb8RBrNU
	}
		const _returnValueasaW5qP = await _argumentkR39nHz._concatValue(_valuejeASuvG, _previousYjpHZv)
		const _returnValueI6vkxSt = await _HelpHU1CAkG.argumentDescription(_argumentkR39nHz)
	});
})