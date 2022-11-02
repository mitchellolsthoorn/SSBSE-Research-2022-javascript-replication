export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpywHbR0w = new Help()
		const _returnValueZb9wX4V = "UHmI";
		const _cmdrTeLl1v = () => { return _returnValueZb9wX4V };
		const _returnValuePcXax7Z = await _HelpywHbR0w.subcommandTerm(_cmdrTeLl1v)
		const _returnValueq6Tcwn = "D7VeGlT8dsYZayJvJ9VYqDwLsRmP9piafEFH4TfH35R0UxfRQdpnQraX1hpNwoH7ntAZa8kSY7FAWHrkaEXhSDoyCdjNv";
		const _includesRi5xmM3 = () => { return _returnValueq6Tcwn };
		const _flags7NDeOg = {
			"includes": _includesRi5xmM3
	}
		const _descriptionhcLL78a = undefined;
		const _optionYTKc4Zp = new Option(_flags7NDeOg, _descriptionhcLL78a)
		const _hideUPRAy0 = true;
		const _returnValueVSoeKzj = await _optionYTKc4Zp.hideHelp(_hideUPRAy0)
		const _returnValuejELxwJR = await _HelpywHbR0w.optionDescription(_optionYTKc4Zp)
		const _strEcbLOfm = "3mPb9WCMfeY";
		const _widthSJuV9hF = -6.450181752241352;
		const _indentE3kENXS = -2.099428690763631;
		const _minColumnWidthPxGF6bR = undefined;
		const _returnValueAQJKFBI = await _HelpywHbR0w.wrap(_strEcbLOfm, _widthSJuV9hF, _indentE3kENXS, _minColumnWidthPxGF6bR)
		const _cmdo7P10Ar = "PLzXRUtwvJhBjo49JsUN2D1A28vamSlAQW7t8zpt2h1h5";
		const _returnValueTLzGV6Z = await _HelpywHbR0w.subcommandTerm(_cmdo7P10Ar)
	});

	it('test for Help', async () => {
		const _HelpYsyNGpS = new Help()
		const _argumentk9EO31P = "vKxMRWrlyyENd1zAXrnmP3U";
		const _returnValuewFYiKWS = await _HelpYsyNGpS.argumentDescription(_argumentk9EO31P)
		const _arrayValueU8JlVF = 2.2163861194464367;
		const _arrayValueGDwU19Z = null;
		const _namevtId0MP = [_arrayValueU8JlVF, _arrayValueGDwU19Z]
		const _cmdCapYoDo = new Command(_namevtId0MP)
		const _strRZW8hRR = undefined;
		const _argsDescriptionozKKLsy = undefined;
		const _returnValueiNDbcLJ = await _cmdCapYoDo.description(_strRZW8hRR, _argsDescriptionozKKLsy)
		const _returnValuefV55h4e = await _HelpYsyNGpS.visibleOptions(_cmdCapYoDo)
	});

	it('test for Help', async () => {
		const _HelppgohdTz = new Help()
		const _returnValueU8rTH95 = []
		const _descriptionynSHuRY = () => { return _returnValueU8rTH95 };
		const _cmdvE7bO4M = {
			"description": _descriptionynSHuRY
	}
		const _returnValuepfNzKdu = await _HelppgohdTz.subcommandDescription(_cmdvE7bO4M)
	});

	it('test for Help', async () => {
		const _HelpRaHQT8 = new Help()
		const __argsDescriptionO0hNGSX = {
		
	}
		const __argsyMyQrG = undefined;
		const _cmdsuaCjRM = {
			"_argsDescription": __argsDescriptionO0hNGSX,
		"_args": __argsyMyQrG
	}
		const _returnValueANj3mfn = await _HelpRaHQT8.visibleArguments(_cmdsuaCjRM)
		const _nameBYp069B = false;
		const _cmdjwUNcO = new Command(_nameBYp069B)
		const _returnValuek89hm28 = "LuN6zLykRRpFEJMkuziyd1zAi3gh7pIVR53PKw";
		const _arrayValueubVBBA5 = () => { return _returnValuek89hm28 };
		const _arrayValueI8oCYNh = false;
		const _returnValueyoQR9Fy = "hZ1hEIGK81LBF6eDuwrDR6yHPk0VvHthbwfsh6FykK";
		const _returnValueOJPEcsn = () => { return _returnValueyoQR9Fy };
		const _arrayValueTWFmdq2 = () => { return _returnValueOJPEcsn };
		const _argvSW0NMtz = [_arrayValueubVBBA5, _arrayValueI8oCYNh, _arrayValueTWFmdq2]
		const _parseOptionscQPnXbY = null;
		const _returnValuecHng6w = await _cmdjwUNcO.parseAsync(_argvSW0NMtz, _parseOptionscQPnXbY)
		const _returnValueYlNcNXg = await _cmdjwUNcO._processArguments()
		const _configwJPpLwf = "balQd5Ka31XHb3d3bxhWTkyYK8rYt3FUqTS2qv4vP3fSDHyPp9l26kjEvSr";
		const _flagsgULr5N9 = null;
		const _descriptionyCv74zq = {
		
	}
		const _fnAdHKIMI = {
		
	}
		const _defaultValueRrfBRUu = 3.5135216372799682;
		const _returnValueJQmq8Lf = await _cmdjwUNcO._optionEx(_configwJPpLwf, _flagsgULr5N9, _descriptionyCv74zq, _fnAdHKIMI, _defaultValueRrfBRUu)
		const _returnValueSUrLvge = await _cmdjwUNcO._processArguments()
		const _returnValuep7r39Z0 = await _HelpRaHQT8.visibleOptions(_cmdjwUNcO)
	});

	it('test for Help', async () => {
		const _HelpCSkpRL = new Help()
		const _cmdp4K0vOm = null;
		const _returnValueblKuKu = "iWLzANgt5UYIMi9aLHFMXH9gSFUDhuey0I9igcS5iE60tzSi2Miqzar07fWu";
		const _visibleOptionsiegiRBP = () => { return _returnValueblKuKu };
		const _returnValueeBhNHDX = undefined;
		const _optionTermHrrmMUc = () => { return _returnValueeBhNHDX };
		const _helperi2hEUBi = {
			"visibleOptions": _visibleOptionsiegiRBP,
		"optionTerm": _optionTermHrrmMUc
	}
		const _returnValueqePH35T = await _HelpCSkpRL.longestOptionTermLength(_cmdp4K0vOm, _helperi2hEUBi)
		const _returnValueDKmC1RD = "CX1XG8qn9BN29kbWNH4m4UbYl5gzoXckWBjsi8NFf2udGQ3BzSM4toV0Yvu";
		const _flagsEH0lZrP = () => { return _returnValueDKmC1RD };
		const _arrayValueyE0xuzz = false;
		const _descriptionUNHFQyd = [_arrayValueyE0xuzz]
		const _argumentzU7Hafo = new Option(_flagsEH0lZrP, _descriptionUNHFQyd)
		const _valueZafZS8B = 8.183113775063738;
		const _previouswE1HTDB = {
		
	}
		const _returnValuecKfl5AS = await _argumentzU7Hafo._concatValue(_valueZafZS8B, _previouswE1HTDB)
		const _argt9ERjkV = {
		
	}
		const _returnValuevUIazmX = await _argumentzU7Hafo.is(_argt9ERjkV)
		const _returnValueZfo5YeQ = await _HelpCSkpRL.argumentTerm(_argumentzU7Hafo)
	});

	it('test for Help', async () => {
		const _HelpVdChhar = new Help()
		const _optionfrtNBsj = "FcORqBEwEy3KdTy934c9PYfqUnnFNDS";
		const _returnValueI6KvaUZ = await _HelpVdChhar.optionDescription(_optionfrtNBsj)
		const _messageP0FnUQ8 = true;
		const _argumentf1HXTrR = new InvalidArgumentError(_messageP0FnUQ8)
		const _returnValuey7K0Pig = await _HelpVdChhar.argumentTerm(_argumentf1HXTrR)
	});

	it('test for Help', async () => {
		const _HelpU3yAsg = new Help()
		const _cmdEsxRcqH = "mmqXwuyrDZqXuQ18p8unTthSm766XDMDJW1TOhtmLTVwRablIlp1CE1XbzoF8AtdVPvlrV4yytdx0FFgFgnuGaaEDb0";
		const _arrayValueuBjycl = undefined;
		const _arrayValueScnj4O = [_arrayValueuBjycl]
		const _sortSubcommands0E1tvN = [_arrayValueScnj4O]
		const _returnValueFHUFDmJ = -0.5693466684853359;
		const _subcommandTermbzpFMy9 = () => { return _returnValueFHUFDmJ };
		const _helperMloe9PR = {
			"sortSubcommands": _sortSubcommands0E1tvN,
		"subcommandTerm": _subcommandTermbzpFMy9
	}
		const _returnValueW692666 = await _HelpU3yAsg.formatHelp(_cmdEsxRcqH, _helperMloe9PR)
	});

	it('test for Help', async () => {
		const _HelplqOEXu6 = new Help()
		const _returnValueCqdW1S6 = -0.6880343358784771;
		const _returnValuesqAqiz0 = () => { return _returnValueCqdW1S6 };
		const _flagspf3Mczb = () => { return _returnValuesqAqiz0 };
		const _optionCKnhcla = {
			"flags": _flagspf3Mczb
	}
		const _returnValuew1qjNdd = await _HelplqOEXu6.optionTerm(_optionCKnhcla)
	});

	it('test for Help', async () => {
		const _HelpkJ5rhNh = new Help()
		const __namejVwGE3K = "UfgwrgvlGyRuFISs8U9Ra0rbGUb7OE8uZxuXNAop4IxqZDOUqvtQcZfaWU3bkB1L7SSCmJhyX9niLdEhWZo";
		const __aliasesVXdvLjB = {
		
	}
		const _parentG5M9Eix = {
		
	}
		const _returnValuepvBYyBs = 5.7473381907297;
		const _usagejlMHhr1 = () => { return _returnValuepvBYyBs };
		const _cmdnpQx3hU = {
			"_name": __namejVwGE3K,
		"_aliases": __aliasesVXdvLjB,
		"parent": _parentG5M9Eix,
		"usage": _usagejlMHhr1
	}
		const _returnValueEE9TnK = await _HelpkJ5rhNh.commandUsage(_cmdnpQx3hU)
		const _returnValueOC9IhD7 = -2.3140730613057245;
		const _cmdW9rwM2v = () => { return _returnValueOC9IhD7 };
		const _returnValuezuRMHgP = await _HelpkJ5rhNh.visibleArguments(_cmdW9rwM2v)
	});

	it('test for Help', async () => {
		const _HelpQ6PRLZW = new Help()
		const _arrayValueRvNflNa = null;
		const _arrayValueI1plJcy = false;
		const _arrayValueTkrYFhF = true;
		const _arrayValueZtQZO73 = [_arrayValueTkrYFhF]
		const _arrayValuevm25Gby = [_arrayValueI1plJcy, _arrayValueZtQZO73]
		const _arrayValueFBnUpf0 = [_arrayValueRvNflNa, _arrayValuevm25Gby]
		const _cmdmxdRfj = [_arrayValueFBnUpf0]
		const _arrayValuey5dkNbU = 7.506035073966878;
		const _helpernNGuLyw = [_arrayValuey5dkNbU]
		const _returnValuefsGPabK = await _HelpQ6PRLZW.longestArgumentTermLength(_cmdmxdRfj, _helpernNGuLyw)
		const _returnValueAiYH7Mk = -7.3933652639568;
		const _sliceAQJyVBE = () => { return _returnValueAiYH7Mk };
		const _namejbQU304 = {
			"slice": _sliceAQJyVBE
	}
		const _descriptionRqDOelN = "laaqyzvBtoIQiA54nBUBMUYxmdPWPe59T4GcxszqwPecQGNLkytraI2fD4XACGNPAu67IAna9fYIxAjQc";
		const _argumentYcdxL2N = new Argument(_namejbQU304, _descriptionRqDOelN)
		const _valuelYgoTKe = null;
		const _previousNkeqGtg = "Tphsho12oBg53FOEN5fgekVriPxKPlUsLQFUnoIzXtyXSvJIbAIe5ds";
		const _returnValueLpsK5OA = await _argumentYcdxL2N._concatValue(_valuelYgoTKe, _previousNkeqGtg)
		const _returnValueML6pTYj = await _argumentYcdxL2N.name()
		const _returnValuemA3GOk9 = {
		
	}
		const _includesqE8jQ8P = () => { return _returnValuemA3GOk9 };
		const _returnValueyaTOwXP = undefined;
		const _joinElqHov6 = () => { return _returnValueyaTOwXP };
		const _valuesyJYTC8p = {
			"includes": _includesqE8jQ8P,
		"join": _joinElqHov6
	}
		const _returnValueShg7k71 = await _argumentYcdxL2N.choices(_valuesyJYTC8p)
		const _valuerkk9SSU = false;
		const _previoustjiRR5 = "Dnzg18";
		const _returnValueIDvtcI2 = await _argumentYcdxL2N._concatValue(_valuerkk9SSU, _previoustjiRR5)
		const _returnValueNElTMLj = await _HelpQ6PRLZW.argumentDescription(_argumentYcdxL2N)
		const _arrayValuedtlceBg = null;
		const _returnValuesxI520l = [_arrayValuedtlceBg]
		const _sliceVVGtr6A = () => { return _returnValuesxI520l };
		const _nameBKKUMD = {
			"slice": _sliceVVGtr6A
	}
		const _descriptionU5bjRx = false;
		const _cmdUvoHhdT = new Argument(_nameBKKUMD, _descriptionU5bjRx)
		const _returnValuedfoYqzz = await _cmdUvoHhdT.argRequired()
		const _returnValuekeYGath = undefined;
		const _valuesic97A8x = () => { return _returnValuekeYGath };
		const _returnValueRMmJOIO = await _cmdUvoHhdT.choices(_valuesic97A8x)
		const _returnValueedUst1A = await _HelpQ6PRLZW.subcommandDescription(_cmdUvoHhdT)
		const _commandsZg1YRkp = {
		
	}
		const _returnValueP4HoUS9 = "mcImcUkAQz8KQYe";
		const __hasImplicitHelpCommandi7RfWlw = () => { return _returnValueP4HoUS9 };
		const __helpCommandnameAndArgsxhP042C = {
		
	}
		const _returnValuel03NyHs = undefined;
		const _createCommandBUt5DDo = () => { return _returnValuel03NyHs };
		const __helpCommandDescriptiontI75ZHv = "i5";
		const _cmdtGDYn6R = {
			"commands": _commandsZg1YRkp,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandi7RfWlw,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsxhP042C,
		"createCommand": _createCommandBUt5DDo,
		"_helpCommandDescription": __helpCommandDescriptiontI75ZHv
	}
		const _returnValuedgNthz6 = await _HelpQ6PRLZW.visibleCommands(_cmdtGDYn6R)
		const _cmdlu958v = null;
		const _returnValuewtj58K6 = await _HelpQ6PRLZW.visibleOptions(_cmdlu958v)
	});

	it('test for Help', async () => {
		const _HelpayQIQ8i = new Help()
		const _returnValuepXWKHds = false;
		const _descriptionA8NXetY = () => { return _returnValuepXWKHds };
		const _cmdP8Bjqns = {
			"description": _descriptionA8NXetY
	}
		const _returnValuetbTcjS = await _HelpayQIQ8i.commandDescription(_cmdP8Bjqns)
		const _cmdEPlzAm = {
		
	}
		const _returnValuexDG05GS = undefined;
		const _visibleOptionsQ6eQ1Oc = () => { return _returnValuexDG05GS };
		const _returnValuejlcjsal = true;
		const _optionTermk0CfqBh = () => { return _returnValuejlcjsal };
		const _helperH8Y1IGK = {
			"visibleOptions": _visibleOptionsQ6eQ1Oc,
		"optionTerm": _optionTermk0CfqBh
	}
		const _returnValueUGTuJOQ = await _HelpayQIQ8i.longestOptionTermLength(_cmdEPlzAm, _helperH8Y1IGK)
		const _arrayValuenlNJ4aE = {
		
	}
		const _arrayValueCqwy67t = "VQnoaQKdUOkIIJU";
		const _optionsW1fKpX = [_arrayValuenlNJ4aE, _arrayValueCqwy67t]
		const __hasHelpOptionKDJRYEd = undefined;
		const __helpShortFlagw1EiltP = []
		const _returnValueHsHJL0 = undefined;
		const __findOptionbl4ckRg = () => { return _returnValueHsHJL0 };
		const _returnValuexu7UoD8 = "JZllfb3EPcxU2KGeU2jzof10iCygSMa48vRin6L3f5QfOeqcJQM8VWvNpAEIlodPH";
		const _arrayValuefOjUhue = () => { return _returnValuexu7UoD8 };
		const _arrayValueXB3PoM = null;
		const __helpLongFlagHYhCpK = [_arrayValuefOjUhue, _arrayValueXB3PoM]
		const _returnValuetiPMo9y = {
		
	}
		const _createOptionUuWTgUc = () => { return _returnValuetiPMo9y };
		const __helpDescriptionnBhxYeT = undefined;
		const __helpFlagskRaWOke = undefined;
		const _cmdWFFhsmS = {
			"options": _optionsW1fKpX,
		"_hasHelpOption": __hasHelpOptionKDJRYEd,
		"_helpShortFlag": __helpShortFlagw1EiltP,
		"_findOption": __findOptionbl4ckRg,
		"_helpLongFlag": __helpLongFlagHYhCpK,
		"createOption": _createOptionUuWTgUc,
		"_helpDescription": __helpDescriptionnBhxYeT,
		"_helpFlags": __helpFlagskRaWOke
	}
		const _returnValuetGCVwEm = await _HelpayQIQ8i.visibleOptions(_cmdWFFhsmS)
		const _arrayValuefRPtrhX = true;
		const _returnValueBtppJii = undefined;
		const _arrayValuecjvnsmN = () => { return _returnValueBtppJii };
		const _returnValuehZGV9A = [_arrayValuefRPtrhX, _arrayValuecjvnsmN]
		const _sliceYSyvW2d = () => { return _returnValuehZGV9A };
		const _nameiprU2pN = {
			"slice": _sliceYSyvW2d
	}
		const _descriptiongzQSyWf = undefined;
		const _option1QVbQc = new Argument(_nameiprU2pN, _descriptiongzQSyWf)
		const _valueHLf8hKt = "pfxV50OrcHOMf02cubE95uesZBYgK25Uz8DOJ2RipEBENZ";
		const _previousxwDcFvd = "Vd7YH2BFazt3LGJFpmz0Oa7Qbxy0fLbHj2jsyqgLP";
		const _returnValueXACL1IW = await _option1QVbQc._concatValue(_valueHLf8hKt, _previousxwDcFvd)
		const _includesYRG201W = false;
		const _arrayValueYgXaEwj = -8.815846319379215;
		const _arrayValuezfJUCy = null;
		const _arrayValue21j2xL = true;
		const _returnValueENamErD = [_arrayValueYgXaEwj, _arrayValuezfJUCy, _arrayValue21j2xL]
		const _joinlCb9CQ = () => { return _returnValueENamErD };
		const _valueseH4qXoM = {
			"includes": _includesYRG201W,
		"join": _joinlCb9CQ
	}
		const _returnValuemt3SJKL = await _option1QVbQc.choices(_valueseH4qXoM)
		const _returnValueJv6mJG = await _option1QVbQc.name()
		const _returnValueQsliKtK = await _option1QVbQc.argRequired()
		const _returnValueJWxMUbm = await _option1QVbQc.name()
		const _returnValueqofcBWg = await _HelpayQIQ8i.optionDescription(_option1QVbQc)
	});

	it('test for Help', async () => {
		const _Helph8nkQsv = new Help()
		const _arrayValuesZVMH0m = false;
		const _arrayValueb52YG58 = undefined;
		const _strp8HrTfx = [_arrayValuesZVMH0m, _arrayValueb52YG58]
		const _widthMCve3z = -3.2149899848422496;
		const _indentzLn8NcX = 8.059797395309147;
		const _minColumnWidtheauEBP2 = 0.1155856691694126;
		const _returnValuelCcItD = await _Helph8nkQsv.wrap(_strp8HrTfx, _widthMCve3z, _indentzLn8NcX, _minColumnWidtheauEBP2)
		const _returnValueJvayQW = true;
		const _name8UvD9m = () => { return _returnValueJvayQW };
		const _argumentTdLSmVr = {
			"name": _name8UvD9m
	}
		const _returnValuebpRxlJg = await _Helph8nkQsv.argumentTerm(_argumentTdLSmVr)
		const _optionB8GyYhC = "g8g0zcSKg28TNFiQMhsk3boCPKBSciuNS5RF76WnpXafV688ryZPiWYS6UNbiIOQ9VsiFd6MaT2Hwmvu7Qoii";
		const _returnValueIo1sVV = await _Helph8nkQsv.optionTerm(_optionB8GyYhC)
		const _cmdtk3Rm4 = "xgJWSJkwTwdfWCyeVuoAI0UJoIweIDmt4AI41lSjt4QfYpIJy4luwwBh7m3ZVkYKlbdo2d3HCFgnJzSklWG6oOXTJc";
		const _returnValueghdMHHd = await _Helph8nkQsv.commandDescription(_cmdtk3Rm4)
	});

	it('test for Help', async () => {
		const _HelpGstmBOf = new Help()
		const _cmdVtCvpA7 = {
		
	}
		const _sortSubcommandsXIWfuNM = "SQl120qAZcBH2fMXUt5CXzTtWsd91N6B94p6gZO4osNhT9n5tIFi3E8EDwcsC3ctpMUEQAwfH";
		const _returnValuei5k4o1 = null;
		const _subcommandTermyelxtIq = () => { return _returnValuei5k4o1 };
		const _helpermg9cTKE = {
			"sortSubcommands": _sortSubcommandsXIWfuNM,
		"subcommandTerm": _subcommandTermyelxtIq
	}
		const _returnValueOz0dPQa = await _HelpGstmBOf.longestSubcommandTermLength(_cmdVtCvpA7, _helpermg9cTKE)
	});

	it('test for Help', async () => {
		const _HelpsCdI61T = new Help()
		const _returnValueGWUPDqQ = "6l0xTgXG9zSxnEPpzmKAA";
		const _namep0tAQzm = () => { return _returnValueGWUPDqQ };
		const _argumentwQjGeSh = {
			"name": _namep0tAQzm
	}
		const _returnValueAvXcolo = await _HelpsCdI61T.argumentTerm(_argumentwQjGeSh)
		const _flagsTRvOY9j = "0TMQQj3jg7AlSFkTFwjuGIk9eiyVeRTCzpZ5etonQQzqRSk5a8L9Lv4hFjd2xUa4XA5yPNtvtpFUXz";
		const _returnValueuPsFUEY = "QUmeQlbFR0O4HHSOjvybdPFKOxPz2SAeo5Chdg5k";
		const _descriptioncXLhOnr = () => { return _returnValueuPsFUEY };
		const _cmdnjy43lr = new Option(_flagsTRvOY9j, _descriptioncXLhOnr)
		const _returnValueXxiwY9y = await _cmdnjy43lr.attributeName()
		const _returnValueYdEHUN = await _HelpsCdI61T.subcommandDescription(_cmdnjy43lr)
	});

	it('test for Help', async () => {
		const _HelpTFzFiaH = new Help()
		const _argChoicesf4dSZM = {
		
	}
		const _defaultValuef2J6Ai = "vcGxCgL1ParIxJyOt0gerMKxGumyXZF3rHo8eGQanfNiq7Xs9paGY";
		const _defaultValueDescriptionXeHnJav = []
		const _descriptionYCSOzkX = null;
		const _argumentPifriIZ = {
			"argChoices": _argChoicesf4dSZM,
		"defaultValue": _defaultValuef2J6Ai,
		"defaultValueDescription": _defaultValueDescriptionXeHnJav,
		"description": _descriptionYCSOzkX
	}
		const _returnValuexVVKmOq = await _HelpTFzFiaH.argumentDescription(_argumentPifriIZ)
		const _arrayValueJ35gYNI = "eWNGW5en14rMUIInTwxGRb18GbQv12KRzRyF4QvxWfz";
		const _arrayValueWWaySSw = "iuBmpD6oUCpazIAvgnMnOIJod1pZktb3fE9j2jKvxPGC59c6sL8qXegNdp18bpFMBJs2cCSbPrDZ";
		const _cmdwlEpY3P = [_arrayValueJ35gYNI, _arrayValueWWaySSw]
		const _returnValuetkPfKwD = await _HelpTFzFiaH.subcommandTerm(_cmdwlEpY3P)
	});

	it('test for Help', async () => {
		const _HelpTmId3F = new Help()
		const _returnValueqOfueDK = "E4FL";
		const _cmdG60z8q8 = () => { return _returnValueqOfueDK };
		const _returnValuelCukhZJ = -8.521022025887834;
		const _longestOptionTermLengthDOht5I = () => { return _returnValuelCukhZJ };
		const _returnValueTx76ucW = "hycyqf1ag4vkJi8yvSK75MB38qYQugqtAAlMeIcTkG3BYi2CN8KnVqtZZNC";
		const _longestSubcommandTermLengthXQEkNsd = () => { return _returnValueTx76ucW };
		const _returnValuekiT34qE = 0.08085477298369881;
		const _longestArgumentTermLengthrRMNZQe = () => { return _returnValuekiT34qE };
		const _helperH8GvIlp = {
			"longestOptionTermLength": _longestOptionTermLengthDOht5I,
		"longestSubcommandTermLength": _longestSubcommandTermLengthXQEkNsd,
		"longestArgumentTermLength": _longestArgumentTermLengthrRMNZQe
	}
		const _returnValuejcLGvO = await _HelpTmId3F.padWidth(_cmdG60z8q8, _helperH8GvIlp)
		const _argChoicesrAxZQct = {
		
	}
		const _defaultValueFZbyuba = undefined;
		const _defaultValueDescriptionkKv7kP = -4.498222852747553;
		const _descriptionqa5eloK = undefined;
		const _argumentCtoKeb7 = {
			"argChoices": _argChoicesrAxZQct,
		"defaultValue": _defaultValueFZbyuba,
		"defaultValueDescription": _defaultValueDescriptionkKv7kP,
		"description": _descriptionqa5eloK
	}
		const _returnValuemyEASsZ = await _HelpTmId3F.argumentDescription(_argumentCtoKeb7)
		const _arrayValuebbxoFd2 = undefined;
		const _arrayValueS5x8nIX = "9jDJMfscUZQgrq6TpeoSPcYz36YmCKW5WYqXonXkiJabWLqOcVlpByq";
		const _argumentctCMneg = [_arrayValuebbxoFd2, _arrayValueS5x8nIX]
		const _returnValueAob6ro = await _HelpTmId3F.argumentTerm(_argumentctCMneg)
		const _cmdxkN5oks = false;
		const _arrayValuenBiveLS = true;
		const _helperjjqwGxU = [_arrayValuenBiveLS]
		const _returnValueLHpGaVL = await _HelpTmId3F.formatHelp(_cmdxkN5oks, _helperjjqwGxU)
	});

	it('test for Help', async () => {
		const _Helpw03bqad = new Help()
		const _returnValuekeSlXCv = undefined;
		const _matchNeE6WBd = () => { return _returnValuekeSlXCv };
		const _substrHKNdjk = -5.706727621874598;
		const _strabCS2O0 = {
			"match": _matchNeE6WBd,
		"substr": _substrHKNdjk
	}
		const _widthmsF3a3s = -6.257663710269394;
		const _indentqsKAv7a = -7.093999257514926;
		const _minColumnWidthtCqurzb = -0.5479217856727168;
		const _returnValueSKnXxUJ = await _Helpw03bqad.wrap(_strabCS2O0, _widthmsF3a3s, _indentqsKAv7a, _minColumnWidthtCqurzb)
		const _flagsfa8vIQ = "ujAsA18EGanJsQyw6Ya7sHcf7RQbumwEvuuiWfRenxRKj43OTNqrGTqNAQXIHhVhKRTM7";
		const _descriptionRpfUZKU = "98roprocqKyAUhW2";
		const _argumentE4aFqc1 = new Option(_flagsfa8vIQ, _descriptionRpfUZKU)
		const _arrayValueBfKtjmu = null;
		const _valueseWbci6u = [_arrayValueBfKtjmu]
		const _returnValuegvIxKzV = await _argumentE4aFqc1.choices(_valueseWbci6u)
		const _hideWetBPvw = true;
		const _returnValueC2pPIk = await _argumentE4aFqc1.hideHelp(_hideWetBPvw)
		const _namek1d5Dqv = undefined;
		const _returnValueO0LJBVp = await _argumentE4aFqc1.env(_namek1d5Dqv)
		const _returnValueSDZX1J0 = await _argumentE4aFqc1.attributeName()
		const _returnValuekkB90OP = await _Helpw03bqad.argumentTerm(_argumentE4aFqc1)
	});

	it('test for Help', async () => {
		const _HelpWigggc8 = new Help()
		const _arrayValueWg5G7Sr = 4.169358863744092;
		const _arrayValuex1QgLd0 = "U49r8uVlw1IvIx7QL";
		const _arrayValueMwleLlS = 7.166844664644742;
		const _cmdAhQRT1k = [_arrayValueWg5G7Sr, _arrayValuex1QgLd0, _arrayValueMwleLlS]
		const _helperdwzqLpx = new Help()
		const _returnValueqpw60V6 = undefined;
		const _descriptionAosr8zk = () => { return _returnValueqpw60V6 };
		const _cmdtqVUAtZ = {
			"description": _descriptionAosr8zk
	}
		const _returnValueDEIJhb = await _helperdwzqLpx.subcommandDescription(_cmdtqVUAtZ)
		const _returnValueI8fdZt = await _HelpWigggc8.longestSubcommandTermLength(_cmdAhQRT1k, _helperdwzqLpx)
		const _cmdgph7GIO = "yNcnwmvTClA5AVkWzKzW9SG0Fh2osNoVvQASOMd4uC4uacEznhW4xT2IbmQRowcyzd7fHiYUOt4QQOWfhGc1irSAUsvvgdrLB";
		const _returnValuehcFYZmB = await _HelpWigggc8.commandUsage(_cmdgph7GIO)
		const _argumentzyu8bMJ = "XFN3xNPTgm9xIS4g8aN1JLtLvNNaJRlGgTgYmPyUDuwsOG6LpE";
		const _returnValueM57Jfys = await _HelpWigggc8.argumentDescription(_argumentzyu8bMJ)
		const _arrayValueKGaL51U = -2.8259943663345712;
		const _arrayValueMn1KU3 = -2.9130996236050644;
		const _returnValueW8KCczH = undefined;
		const _arrayValueM5R1QzN = () => { return _returnValueW8KCczH };
		const _namemNvSljh = [_arrayValueKGaL51U, _arrayValueMn1KU3, _arrayValueM5R1QzN]
		const _optionXNy1jzf = new Command(_namemNvSljh)
		const _positionalislRawF = true;
		const _returnValueGIigQ1M = await _optionXNy1jzf.enablePositionalOptions(_positionalislRawF)
		const _arrayValueedFy6JN = "5OnA42uYjQJOUO2HCUKk75AfbchyHdBDjJcY4";
		const _exitCodegzSdYg7 = [_arrayValueedFy6JN]
		const _codeU1QS5oA = {
		
	}
		const _messageHSXeMab = -4.128459525338343;
		const _returnValueuQKJR3o = await _optionXNy1jzf._displayError(_exitCodegzSdYg7, _codeU1QS5oA, _messageHSXeMab)
		const _returnValuex6ArNa8 = await _HelpWigggc8.optionDescription(_optionXNy1jzf)
	});

	it('test for Help', async () => {
		const _HelphQ4Yuak = new Help()
		const _strusmrAYW = "CfDMOkVAnVt49pngQosjofcxxRwPEMFFB";
		const _widthWRvXbD = 2.167801357281686;
		const _indentkEl3Gwy = 9.346817927272586;
		const _minColumnWidthYEfl9HQ = 8.328298140557656;
		const _returnValueTvytYLP = await _HelphQ4Yuak.wrap(_strusmrAYW, _widthWRvXbD, _indentkEl3Gwy, _minColumnWidthYEfl9HQ)
	});

	it('test for Help', async () => {
		const _HelpIk8gKKm = new Help()
		const _flagsu5yn53f = "53L3SrQXp";
		const _descriptionm6teg05 = -2.520757579838179;
		const _argumentmZjYfTk = new Option(_flagsu5yn53f, _descriptionm6teg05)
		const _fnPMEOCXp = {
		
	}
		const _returnValuebKRD0c2 = await _argumentmZjYfTk.argParser(_fnPMEOCXp)
		const _valueQurLMSH = undefined;
		const _arrayValueJ6aRleP = -0.4632979186947157;
		const _arrayValueHci4MJ5 = false;
		const _previousWvdv1lj = [_arrayValueJ6aRleP, _arrayValueHci4MJ5]
		const _returnValuetGMldkL = await _argumentmZjYfTk._concatValue(_valueQurLMSH, _previousWvdv1lj)
		const _argcWq4QuB = {
		
	}
		const _returnValueYITxv5V = await _argumentmZjYfTk.is(_argcWq4QuB)
		const _mandatorywjChjW9 = false;
		const _returnValueA9VBIqZ = await _argumentmZjYfTk.makeOptionMandatory(_mandatorywjChjW9)
		const _returnValueJ7wLL8W = await _HelpIk8gKKm.argumentTerm(_argumentmZjYfTk)
		const _arrayValuexCDgKnf = null;
		const _arrayValuepEpgsuJ = undefined;
		const _arrayValueYTfnHKw = true;
		const _flagsVlTHleY = [_arrayValuexCDgKnf, _arrayValuepEpgsuJ, _arrayValueYTfnHKw]
		const _optionfX1dyOK = {
			"flags": _flagsVlTHleY
	}
		const _returnValueIq6NeV = await _HelpIk8gKKm.optionTerm(_optionfX1dyOK)
	});

	it('test for Help', async () => {
		const _HelpGClYqPm = new Help()
		const _argumentNxRIAtz = "DqRqeXcoNU4M7mykH1i4FDVxvWKHdCYCGD4lAwx4cTUG9dxr7bAXnchzlxCNqdz26J3Lznrh4uXGWHJH";
		const _returnValueBu3KSYj = await _HelpGClYqPm.argumentDescription(_argumentNxRIAtz)
		const _namejA4QbI = "pb0";
		const _cmdv0fkHuZ = new Command(_namejA4QbI)
		const _passThroughEMc0zBW = false;
		const _returnValueK34MALY = await _cmdv0fkHuZ.passThroughOptions(_passThroughEMc0zBW)
		const _returnValuejWTFmHp = await _HelpGClYqPm.subcommandTerm(_cmdv0fkHuZ)
	});

	it('test for Help', async () => {
		const _Helpdq9cdyR = new Help()
		const _flagsSPUmxPr = "f1m4r5wfvzCtrsyBXel4Jbb88OfeUgk8x2lQR3RLARGy7XDjQTRrQFi4SBEpLxmS5c8nSSpXc6FNYbLx123AHTrg";
		const _descriptionseuIJu = "rIX4nrlwYNyHBQtsDTwgBccOdj5XVIHXVns4GmUBBEYyGa2jva9xpNEdkv2MXy1BaRL";
		const _optionn5zkUs3 = new Option(_flagsSPUmxPr, _descriptionseuIJu)
		const _mandatoryMl7VfQp = false;
		const _returnValueHVby0mg = await _optionn5zkUs3.makeOptionMandatory(_mandatoryMl7VfQp)
		const _returnValueXizFVY9 = await _optionn5zkUs3.attributeName()
		const _namefzOZsEf = undefined;
		const _returnValueWKL9lXa = await _optionn5zkUs3.env(_namefzOZsEf)
		const _returnValueXurxZm = await _Helpdq9cdyR.optionDescription(_optionn5zkUs3)
		const _returnValueG7MVkmO = {
		
	}
		const _nameybqZD3b = () => { return _returnValueG7MVkmO };
		const _descriptionLBRQs98 = undefined;
		const _argumentxog5kI = new Argument(_nameybqZD3b, _descriptionLBRQs98)
		const _valuexnuDuKp = true;
		const _descriptionUdBi5EB = {
		
	}
		const _returnValueVYorlh = await _argumentxog5kI.default(_valuexnuDuKp, _descriptionUdBi5EB)
		const _returnValueyCJxFfd = await _argumentxog5kI.argRequired()
		const _fnqP2AzFv = undefined;
		const _returnValuevpl5CJn = await _argumentxog5kI.argParser(_fnqP2AzFv)
		const _returnValuemHP5TJR = await _Helpdq9cdyR.argumentDescription(_argumentxog5kI)
		const _strikC7MIc = "dxBrvTpYJJG9bMh0pjEKUqgRDNWdMKqHsjtelCuCwv8l3yPXDcDXm77be2gTXsnG";
		const _widthehfyf2 = -1.1724670249346598;
		const _indentMI1Fp70 = -7.119094953225843;
		const _minColumnWidthkcnjeGE = 7.245330811121754;
		const _returnValueUklm8k = await _Helpdq9cdyR.wrap(_strikC7MIc, _widthehfyf2, _indentMI1Fp70, _minColumnWidthkcnjeGE)
		const _cmdWBzNmR = "RCT5bbtyNNepyb7stQM8uQa1sFIyQBrjAAr3wBnoiU8dbznqcnjasJbVqMJIqPSevVP";
		const _returnValueWyjPA36 = await _Helpdq9cdyR.visibleArguments(_cmdWBzNmR)
	});

	it('test for Help', async () => {
		const _HelphzMvteD = new Help()
		const _argChoicesMcA2Yhf = {
		
	}
		const _negateUs4cqqA = false;
		const _defaultValueKDxYsZr = undefined;
		const _defaultValueDescriptionCbPX2xH = null;
		const _envVar28aDlm = undefined;
		const _descriptionGjT03Sr = null;
		const _optionnOvQMsz = {
			"argChoices": _argChoicesMcA2Yhf,
		"negate": _negateUs4cqqA,
		"defaultValue": _defaultValueKDxYsZr,
		"defaultValueDescription": _defaultValueDescriptionCbPX2xH,
		"envVar": _envVar28aDlm,
		"description": _descriptionGjT03Sr
	}
		const _returnValueRb5yJzD = await _HelphzMvteD.optionDescription(_optionnOvQMsz)
		const _arrayValuepDCVUBv = 0.11602495610994268;
		const _arrayValueMcmiDtN = "lhtGVnF0L8PSlo9ufPhzxmcxrThEBydreBoHLisKZABgcGNbJUQB1XOS2hYcW3y3TTgUujSkZCBUx3uGX85wbK5yPBh";
		const _arrayValuelt0dE6I = undefined;
		const _argumentXiqm5EZ = [_arrayValuepDCVUBv, _arrayValueMcmiDtN, _arrayValuelt0dE6I]
		const _returnValueh0SutA4 = await _HelphzMvteD.argumentDescription(_argumentXiqm5EZ)
	});

	it('test for Help', async () => {
		const _HelpuKjgntf = new Help()
		const _namexIC6Er = {
		
	}
		const _descriptionmTbPaFh = true;
		const _argumentBlIyVg = new Argument(_namexIC6Er, _descriptionmTbPaFh)
		const _returnValueICOytPK = await _argumentBlIyVg.argRequired()
		const _valueLtXLbIq = "IDXlZwlwI8DYdZg62pu";
		const _descriptionp0qzRtH = undefined;
		const _returnValueO3WfQJc = await _argumentBlIyVg.default(_valueLtXLbIq, _descriptionp0qzRtH)
		const _valuefB80Lgx = undefined;
		const _descriptionzyBfCrj = false;
		const _returnValueDfSMcoT = await _argumentBlIyVg.default(_valuefB80Lgx, _descriptionzyBfCrj)
		const _fnkGpLz9w = undefined;
		const _returnValueEqajq0 = await _argumentBlIyVg.argParser(_fnkGpLz9w)
		const _returnValuecGqNIvz = await _HelpuKjgntf.argumentTerm(_argumentBlIyVg)
		const _nameWK1YoGh = {
		
	}
		const _descriptionMFHdcCQ = true;
		const _argumentro5FEPX = new Argument(_nameWK1YoGh, _descriptionMFHdcCQ)
		const _valueN68oQPc = undefined;
		const _descriptionkN18OVy = undefined;
		const _returnValueqxNaT1U = await _argumentro5FEPX.default(_valueN68oQPc, _descriptionkN18OVy)
		const _valueKGFoguL = false;
		const _returnValuewiwlREy = null;
		const _concatxUvajoO = () => { return _returnValuewiwlREy };
		const _previousjfk0QBe = {
			"concat": _concatxUvajoO
	}
		const _returnValueffaV1ww = await _argumentro5FEPX._concatValue(_valueKGFoguL, _previousjfk0QBe)
		const _arrayValuePV8DVfl = false;
		const _valueLQQxBwp = [_arrayValuePV8DVfl]
		const _descriptionJSJLOGM = undefined;
		const _returnValueKGcjsjG = await _argumentro5FEPX.default(_valueLQQxBwp, _descriptionJSJLOGM)
		const _returnValuekGN0g2 = await _argumentro5FEPX.argOptional()
		const _returnValueMueHwLJ = await _HelpuKjgntf.argumentDescription(_argumentro5FEPX)
		const _returnValuebBeR3G = []
		const _cmdMfOIrV = () => { return _returnValuebBeR3G };
		const _arrayValuez2zaQb = false;
		const _arrayValueEUTKAcT = false;
		const _helperhlkGoUv = [_arrayValuez2zaQb, _arrayValueEUTKAcT]
		const _returnValueBmUiLEC = await _HelpuKjgntf.longestOptionTermLength(_cmdMfOIrV, _helperhlkGoUv)
	});

	it('test for Help', async () => {
		const _HelpjTFKPoy = new Help()
		const _nameIhUvbIw = null;
		const _cmdXZCRuMI = new Command(_nameIhUvbIw)
		const _returnValuetALDOXG = await _cmdXZCRuMI._checkNumberOfArguments()
		const _strPKZe01L = undefined;
		const _returnValueI6aZrDo = await _cmdXZCRuMI.name(_strPKZe01L)
		const _returnValueVtlKQlg = "VPwdlDzI5yjwx1Hpw57KOBsMrM61pqGT5ifEttYRXihtcFxpKU6fo7yLRSfP4ohodl1VrbnT6s2VTTtahzOB";
		const _matchRZrpKUZ = () => { return _returnValueVtlKQlg };
		const _nameAndArgsxTZDpvb = {
			"match": _matchRZrpKUZ
	}
		const _actionOptsOrExecDescOXobC8F = null;
		const _execOptsttE5AdU = -5.916259646079765;
		const _returnValueAmfanbe = await _cmdXZCRuMI.command(_nameAndArgsxTZDpvb, _actionOptsOrExecDescOXobC8F, _execOptsttE5AdU)
		const _returnValuePn7IWFz = await _HelpjTFKPoy.visibleCommands(_cmdXZCRuMI)
		const _returnValueWYnmqj = undefined;
		const _cmdiYiCp51 = () => { return _returnValueWYnmqj };
		const _returnValuenrf0e13 = await _HelpjTFKPoy.visibleCommands(_cmdiYiCp51)
		const _cmdd6QKURO = []
		const _returnValuemcgFas = await _HelpjTFKPoy.visibleOptions(_cmdd6QKURO)
		const _cmdDw0glL5 = undefined;
		const _helperO5pgOH = "BAH4LHOhB0XbNUnqox";
		const _returnValueG6vKsFd = await _HelpjTFKPoy.longestArgumentTermLength(_cmdDw0glL5, _helperO5pgOH)
	});

	it('test for Help', async () => {
		const _HelpGWeZFN = new Help()
		const _arrayValueVyaqkog = {
		
	}
		const _arrayValueqrbM5zr = "1xLpgMrya9zVUNLNkCu1PcK7yfeMcGfXK8m7BCAWaGiflrP5aMU6uLV5s7kxwKfkwaKFCigkeZrVbIYNuGX4xba9ud4k";
		const _arrayValueCyK8B57 = false;
		const _returnValueDTyLhv = [_arrayValueVyaqkog, _arrayValueqrbM5zr, _arrayValueCyK8B57]
		const _matchcJPZ9c = () => { return _returnValueDTyLhv };
		const _returnValueG6HuYk = {
		
	}
		const _substrfFMIDKc = () => { return _returnValueG6HuYk };
		const _stryW0houO = {
			"match": _matchcJPZ9c,
		"substr": _substrfFMIDKc
	}
		const _widthAgbQ1L0 = -7.423545249111783;
		const _indentnWtgEwV = -2.2533316891076103;
		const _minColumnWidthMlyGHS2 = 2.0659967947606788;
		const _returnValueLCkoemT = await _HelpGWeZFN.wrap(_stryW0houO, _widthAgbQ1L0, _indentnWtgEwV, _minColumnWidthMlyGHS2)
		const _cmdAAyMGOL = "6uDHAbA";
		const _returnValuemxgXDsq = await _HelpGWeZFN.visibleArguments(_cmdAAyMGOL)
		const _argumentG1B1tig = "oo8pwokflB4flOhXCzygP0fjO3wCYovcc0O9q3UVnAw34rvrOkr3cDq624tWKC4geRzOfGm0Xp6LkEURp3qChD6";
		const _returnValuedRScw7q = await _HelpGWeZFN.argumentDescription(_argumentG1B1tig)
		const _cmdC3qjnLy = true;
		const _arrayValueoJZTTZ = {
		
	}
		const _helperJ8KSJmM = [_arrayValueoJZTTZ]
		const _returnValuefFIDJub = await _HelpGWeZFN.longestSubcommandTermLength(_cmdC3qjnLy, _helperJ8KSJmM)
	});

	it('test for Help', async () => {
		const _HelpELcF0CM = new Help()
		const _nameInuaEK1 = {
		
	}
		const _descriptionEksLnGx = false;
		const _optionQNPoT6H = new Argument(_nameInuaEK1, _descriptionEksLnGx)
		const _returnValueuOSNOeB = "ghyt478veMjkfK8eAOTfIo2L3VAu4fZ5fF7ZtInrsOj3l41FPXxyiBeIahLw9hQm";
		const _valuefZzGTy2 = () => { return _returnValueuOSNOeB };
		const _arrayValuesGA9qaf = true;
		const _arrayValuevuoVSCp = [_arrayValuesGA9qaf]
		const _arrayValueqk8zVwP = undefined;
		const _descriptionGwlvYSI = [_arrayValuevuoVSCp, _arrayValueqk8zVwP]
		const _returnValueG9Iqx3G = await _optionQNPoT6H.default(_valuefZzGTy2, _descriptionGwlvYSI)
		const _valueuM9lGP9 = "Tqg3qolqbh7iOSWY41UHn7r7CJjaiuNzG1tJWNDxemkGogVuYV5Zy8d9PdslE4Rg5kxb2GB3gPeUWqKfSEzypM2KSHTeN531pE";
		const _descriptionE0qwfxp = undefined;
		const _returnValueMXAKn0x = await _optionQNPoT6H.default(_valueuM9lGP9, _descriptionE0qwfxp)
		const _returnValueLLFW6n8 = await _optionQNPoT6H.argRequired()
		const _returnValueq29lK2H = null;
		const _includesBUW1cqY = () => { return _returnValueq29lK2H };
		const _returnValuenf8jrgP = -1.8577291198754846;
		const _joinBpyug8A = () => { return _returnValuenf8jrgP };
		const _valuesRCHWlyH = {
			"includes": _includesBUW1cqY,
		"join": _joinBpyug8A
	}
		const _returnValueMDutWc7 = await _optionQNPoT6H.choices(_valuesRCHWlyH)
		const _valuesShLac9z = undefined;
		const _returnValueQVlYHd0 = await _optionQNPoT6H.choices(_valuesShLac9z)
		const _returnValuewmQpFW = await _HelpELcF0CM.optionDescription(_optionQNPoT6H)
		const _optionAjJp0GS = "Xs6QM44Eg6LzeOwXDRbcIa";
		const _returnValuevfwVEz = await _HelpELcF0CM.optionDescription(_optionAjJp0GS)
	});
})