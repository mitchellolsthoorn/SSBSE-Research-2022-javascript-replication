export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpasy2LgK = new Help()
		const _optionshvANlL7 = {
		
	}
		const __hasHelpOptionmpKhSjR = 4.074970801074997;
		const __helpShortFlagl1J5C3Y = false;
		const _returnValueKjWcq5f = true;
		const __findOptionZ9XyZyb = () => { return _returnValueKjWcq5f };
		const __helpLongFlagxNlR8St = true;
		const _createOptionxtoJlpD = "Dj8SHchuBdoAQsrrSUu61iNv4RsXkAwfen6bv8OHoPaS2IXnwo";
		const __helpDescriptionyGedvT = null;
		const __helpFlagsUrNQV4J = undefined;
		const _cmdyZ8NnG5 = {
			"options": _optionshvANlL7,
		"_hasHelpOption": __hasHelpOptionmpKhSjR,
		"_helpShortFlag": __helpShortFlagl1J5C3Y,
		"_findOption": __findOptionZ9XyZyb,
		"_helpLongFlag": __helpLongFlagxNlR8St,
		"createOption": _createOptionxtoJlpD,
		"_helpDescription": __helpDescriptionyGedvT,
		"_helpFlags": __helpFlagsUrNQV4J
	}
		const _returnValueU3d8Tb8 = await _Helpasy2LgK.visibleOptions(_cmdyZ8NnG5)
		const _argChoicesNNARS4u = {
		
	}
		const _defaultValueS2LhDa8 = undefined;
		const _defaultValueDescriptionO3xexGl = undefined;
		const _descriptionv0MuLpJ = false;
		const _argumentqEjtcC = {
			"argChoices": _argChoicesNNARS4u,
		"defaultValue": _defaultValueS2LhDa8,
		"defaultValueDescription": _defaultValueDescriptionO3xexGl,
		"description": _descriptionv0MuLpJ
	}
		const _returnValueGuCbOmq = await _Helpasy2LgK.argumentDescription(_argumentqEjtcC)
		const _returnValueyLLkcUN = 0.6280968429562677;
		const _matchZBTybs = () => { return _returnValueyLLkcUN };
		const _returnValuen9qTmat = true;
		const _substrJV3fWnB = () => { return _returnValuen9qTmat };
		const _strk7uouJO = {
			"match": _matchZBTybs,
		"substr": _substrJV3fWnB
	}
		const _widthP7wui14 = 0.06593906450638087;
		const _indentOsesptv = 2.561993210449007;
		const _minColumnWidthR9JQrr1 = -3.4792385247733106;
		const _returnValueEXo11jh = await _Helpasy2LgK.wrap(_strk7uouJO, _widthP7wui14, _indentOsesptv, _minColumnWidthR9JQrr1)
		const _cmdmvxUhxz = {
		
	}
		const _returnValueVUekQG9 = 0.6865337215954899;
		const _longestOptionTermLengthxPMFBco = () => { return _returnValueVUekQG9 };
		const _longestSubcommandTermLengthDCkvEk = undefined;
		const _arrayValueCHuR8Pd = true;
		const _arrayValueU7LqOk6 = 9.51154691625186;
		const _returnValuehMWH5Fv = [_arrayValueCHuR8Pd, _arrayValueU7LqOk6]
		const _longestArgumentTermLengthmD1YI2X = () => { return _returnValuehMWH5Fv };
		const _helperYwiVN3t = {
			"longestOptionTermLength": _longestOptionTermLengthxPMFBco,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDCkvEk,
		"longestArgumentTermLength": _longestArgumentTermLengthmD1YI2X
	}
		const _returnValueqC20uzX = await _Helpasy2LgK.padWidth(_cmdmvxUhxz, _helperYwiVN3t)
	});

	it('test for Help', async () => {
		const _HelpfDTRoXp = new Help()
		const _commandsU1SZvc = null;
		const __hasImplicitHelpCommandWNCe2ve = undefined;
		const __helpCommandnameAndArgsnovlo2X = {
		
	}
		const _returnValueS61yRyh = undefined;
		const _createCommandJfA00Ez = () => { return _returnValueS61yRyh };
		const __helpCommandDescriptioncWwxlpp = undefined;
		const _cmdsF79qv2 = {
			"commands": _commandsU1SZvc,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandWNCe2ve,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsnovlo2X,
		"createCommand": _createCommandJfA00Ez,
		"_helpCommandDescription": __helpCommandDescriptioncWwxlpp
	}
		const _returnValuefMJMcme = await _HelpfDTRoXp.visibleCommands(_cmdsF79qv2)
	});

	it('test for Help', async () => {
		const _HelpjgKPvox = new Help()
		const _argChoicesFqUJNMO = {
		
	}
		const _arrayValuecUBdG5S = undefined;
		const _arrayValueWuIU36X = true;
		const _returnValueQoLWcUM = null;
		const _arrayValueGYjOfWe = () => { return _returnValueQoLWcUM };
		const _arrayValueiLMw3uP = []
		const _arrayValueiyAXpFn = [_arrayValueGYjOfWe, _arrayValueiLMw3uP]
		const _negateJfWteht = [_arrayValuecUBdG5S, _arrayValueWuIU36X, _arrayValueiyAXpFn]
		const _defaultValueCog5WX6 = undefined;
		const _defaultValueDescriptionu8iUKYA = "3AU6hDtlqx8LGGXGtnhqXlnUyWYX2mbGpMBZbXw9npqOdmALzK1dEj9PrcqxckCUxy9XKKvqxqqCYzd2qquV2exEZ";
		const _envVarlsAKABm = undefined;
		const _descriptioneWxo9On = "z7fJaEDJCMdmQJwlIcNv8W7flrzz6vuuP8fW5Lf1j1uAZJaCXYkIxgqlT";
		const _optionjfCVLz = {
			"argChoices": _argChoicesFqUJNMO,
		"negate": _negateJfWteht,
		"defaultValue": _defaultValueCog5WX6,
		"defaultValueDescription": _defaultValueDescriptionu8iUKYA,
		"envVar": _envVarlsAKABm,
		"description": _descriptioneWxo9On
	}
		const _returnValuew8KsY3 = await _HelpjgKPvox.optionDescription(_optionjfCVLz)
		const _optionsOC5hFAk = {
		
	}
		const __hasHelpOptionUnaYpK8 = false;
		const __helpShortFlagGjui8gW = []
		const _returnValuex8Tjuo0 = {
		
	}
		const __findOptionrxYGXh = () => { return _returnValuex8Tjuo0 };
		const _arrayValueZvnDaes = false;
		const _returnValueD1KMIsY = undefined;
		const _arrayValuezDiJXr = () => { return _returnValueD1KMIsY };
		const _arrayValueKlczyy0 = true;
		const __helpLongFlagcy6hyG5 = [_arrayValueZvnDaes, _arrayValuezDiJXr, _arrayValueKlczyy0]
		const _createOptionKfTX0Xs = undefined;
		const _arrayValueMuUQKd = false;
		const _arrayValueug8Tth2 = true;
		const _arrayValueGKQbtEG = undefined;
		const _arrayValueNGGyFWd = [_arrayValueug8Tth2, _arrayValueGKQbtEG]
		const _arrayValueytgHbDk = -0.31163682219633415;
		const __helpDescriptionNny9Yll = [_arrayValueMuUQKd, _arrayValueNGGyFWd, _arrayValueytgHbDk]
		const __helpFlagsffuDcUO = 4.779336213457039;
		const _cmdkgpMddK = {
			"options": _optionsOC5hFAk,
		"_hasHelpOption": __hasHelpOptionUnaYpK8,
		"_helpShortFlag": __helpShortFlagGjui8gW,
		"_findOption": __findOptionrxYGXh,
		"_helpLongFlag": __helpLongFlagcy6hyG5,
		"createOption": _createOptionKfTX0Xs,
		"_helpDescription": __helpDescriptionNny9Yll,
		"_helpFlags": __helpFlagsffuDcUO
	}
		const _returnValueYeK72gw = await _HelpjgKPvox.visibleOptions(_cmdkgpMddK)
		const _cmdrJhDoTH = -9.429036816221577;
		const _returnValueNiNzKXH = null;
		const _visibleArgumentso7Xny2d = () => { return _returnValueNiNzKXH };
		const _returnValuee1YrF0 = "7othmJfyd6O9gRU6bic9CQvi3XaYFpoBa3EvHg3CekeqoNKOBXnFUDaSyov9AOh1tkpXtwyzt2HZ0fg4pyci";
		const _returnValuea3SiOtN = () => { return _returnValuee1YrF0 };
		const _argumentTermpA7Ilno = () => { return _returnValuea3SiOtN };
		const _helperQVC5NyV = {
			"visibleArguments": _visibleArgumentso7Xny2d,
		"argumentTerm": _argumentTermpA7Ilno
	}
		const _returnValueeznYnO1 = await _HelpjgKPvox.longestArgumentTermLength(_cmdrJhDoTH, _helperQVC5NyV)
	});

	it('test for Help', async () => {
		const _HelpCrzpiee = new Help()
		const __argsftN6AWq = {
		
	}
		const __nameP3AZrkV = -8.180164445486973;
		const __aliasesUudxMBy = {
		
	}
		const _optionsJ0ETyRX = {
		
	}
		const _cmdzsIFnrZ = {
			"_args": __argsftN6AWq,
		"_name": __nameP3AZrkV,
		"_aliases": __aliasesUudxMBy,
		"options": _optionsJ0ETyRX
	}
		const _returnValueOFUJd7P = await _HelpCrzpiee.subcommandTerm(_cmdzsIFnrZ)
	});

	it('test for Help', async () => {
		const _Helpv4sq20v = new Help()
		const _cmdgxgi0JR = "r";
		const _sortSubcommandstKsSYpU = {
		
	}
		const _subcommandTermA7i1Ezd = null;
		const _helperaFGhkKI = {
			"sortSubcommands": _sortSubcommandstKsSYpU,
		"subcommandTerm": _subcommandTermA7i1Ezd
	}
		const _returnValueYdJ0ib = await _Helpv4sq20v.longestSubcommandTermLength(_cmdgxgi0JR, _helperaFGhkKI)
	});

	it('test for Help', async () => {
		const _HelpiqDIsbe = new Help()
		const __nameQbB8bhQ = {
		
	}
		const __aliasesSJla8dT = {
		
	}
		const _parentA4WcCSF = {
		
	}
		const _returnValueVZ6BQIV = -0.5107601358156337;
		const _usagefAQcvSi = () => { return _returnValueVZ6BQIV };
		const _cmdatxLfl6 = {
			"_name": __nameQbB8bhQ,
		"_aliases": __aliasesSJla8dT,
		"parent": _parentA4WcCSF,
		"usage": _usagefAQcvSi
	}
		const _returnValue0V0GCv = await _HelpiqDIsbe.commandUsage(_cmdatxLfl6)
		const _cmdMT4xJNG = null;
		const _returnValuezAj43vd = false;
		const _longestOptionTermLengthjDntJKz = () => { return _returnValuezAj43vd };
		const _returnValueTbqfo8Q = null;
		const _longestSubcommandTermLength86I892 = () => { return _returnValueTbqfo8Q };
		const _returnValuef5CxGcj = null;
		const _longestArgumentTermLengtho6fSmf = () => { return _returnValuef5CxGcj };
		const _helpery74bWe6 = {
			"longestOptionTermLength": _longestOptionTermLengthjDntJKz,
		"longestSubcommandTermLength": _longestSubcommandTermLength86I892,
		"longestArgumentTermLength": _longestArgumentTermLengtho6fSmf
	}
		const _returnValueNSmBNLA = await _HelpiqDIsbe.padWidth(_cmdMT4xJNG, _helpery74bWe6)
		const _cmdJwA36J6 = true;
		const _returnValueXo1EvMj = []
		const _longestOptionTermLengthZko0A5x = () => { return _returnValueXo1EvMj };
		const _returnValuec1HvoDH = "3blfoTMSqNil1emlCOjFooX8f";
		const _longestSubcommandTermLength3tVGli = () => { return _returnValuec1HvoDH };
		const _longestArgumentTermLengthGe62eub = "6eIJTQO7gERabUrHJXxvdmos6aezdW541TjhtHSp1rXGAhHjJ5szlAl7pGsUDFmepc9E1NBBxuFsBZFut8XCepzS7QP";
		const _helperzwY6JTE = {
			"longestOptionTermLength": _longestOptionTermLengthZko0A5x,
		"longestSubcommandTermLength": _longestSubcommandTermLength3tVGli,
		"longestArgumentTermLength": _longestArgumentTermLengthGe62eub
	}
		const _returnValueKEBF6OG = await _HelpiqDIsbe.padWidth(_cmdJwA36J6, _helperzwY6JTE)
	});

	it('test for Help', async () => {
		const _HelppCshgRq = new Help()
		const _returnValueH4h0znF = true;
		const _matchxH9VidO = () => { return _returnValueH4h0znF };
		const _returnValuezFbBRO6 = null;
		const _substrSPdKE4M = () => { return _returnValuezFbBRO6 };
		const _strvw9u0r7 = {
			"match": _matchxH9VidO,
		"substr": _substrSPdKE4M
	}
		const _widthn3C6MED = -9.386295874565596;
		const _indentWm5MMeH = 9.465924647267492;
		const _minColumnWidthBrnM785 = -3.7922049575610615;
		const _returnValueR9a2kRU = await _HelppCshgRq.wrap(_strvw9u0r7, _widthn3C6MED, _indentWm5MMeH, _minColumnWidthBrnM785)
		const __argsOMsYtp = {
		
	}
		const __nameUz5qJ7 = -4.327751049645903;
		const __aliasesnz0vgHQ = {
		
	}
		const _optionsFcOEYEO = {
		
	}
		const _cmdTFb7WBq = {
			"_args": __argsOMsYtp,
		"_name": __nameUz5qJ7,
		"_aliases": __aliasesnz0vgHQ,
		"options": _optionsFcOEYEO
	}
		const _returnValueRtbf05j = await _HelppCshgRq.subcommandTerm(_cmdTFb7WBq)
		const _argChoicesOGkYHeM = null;
		const _defaultValueKqFzO0M = undefined;
		const _defaultValueDescriptionH7M40iz = {
		
	}
		const _descriptionsSMXMJZ = "1cTEIGM4pt2dSMnokOVIErUMCPiLWU4TT85zGwsclRyDDVvRFzu08wmo7ajWXFnW";
		const _argumentddkBd2R = {
			"argChoices": _argChoicesOGkYHeM,
		"defaultValue": _defaultValueKqFzO0M,
		"defaultValueDescription": _defaultValueDescriptionH7M40iz,
		"description": _descriptionsSMXMJZ
	}
		const _returnValuewOApPd = await _HelppCshgRq.argumentDescription(_argumentddkBd2R)
	});

	it('test for Help', async () => {
		const _Helpt2cXBd5 = new Help()
		const _cmdsNwKJn0 = true;
		const _returnValuel0mruTX = {
		
	}
		const _visibleArgumentsu5k2nGD = () => { return _returnValuel0mruTX };
		const _returnValueaBbKpHL = null;
		const _returnValueYKlkX7g = () => { return _returnValueaBbKpHL };
		const _argumentTermt0iQMb8 = () => { return _returnValueYKlkX7g };
		const _helpermzvWyju = {
			"visibleArguments": _visibleArgumentsu5k2nGD,
		"argumentTerm": _argumentTermt0iQMb8
	}
		const _returnValuekvsrQ8g = await _Helpt2cXBd5.longestArgumentTermLength(_cmdsNwKJn0, _helpermzvWyju)
	});

	it('test for Help', async () => {
		const _HelpHXm87u = new Help()
		const _flagsW8DeIAT = false;
		const _optioniK6Rnd6 = {
			"flags": _flagsW8DeIAT
	}
		const _returnValueVnx803Q = await _HelpHXm87u.optionTerm(_optioniK6Rnd6)
		const _arrayValueimiBidV = "7tyI4l9LzC7yfWVhTnrb2cIHrla8DrVIjEVDUnrxaRMQhUQaZg4zz";
		const _cmdfWU7p9f = [_arrayValueimiBidV]
		const _sortSubcommandsHX7P3gd = false;
		const _returnValueWPDDW7C = undefined;
		const _subcommandTerm17rCgn = () => { return _returnValueWPDDW7C };
		const _helpergjrzVbr = {
			"sortSubcommands": _sortSubcommandsHX7P3gd,
		"subcommandTerm": _subcommandTerm17rCgn
	}
		const _returnValueZaBu76s = await _HelpHXm87u.formatHelp(_cmdfWU7p9f, _helpergjrzVbr)
		const _returnValuepyXvu8 = undefined;
		const _strI8m26Ko = () => { return _returnValuepyXvu8 };
		const _widthjJUrhfg = -2.57968310454668;
		const _indentbqAIRGS = 4.756597399852986;
		const _minColumnWidthW1mpk6s = 4.2928167547964335;
		const _returnValueAv1MkLS = await _HelpHXm87u.wrap(_strI8m26Ko, _widthjJUrhfg, _indentbqAIRGS, _minColumnWidthW1mpk6s)
		const _arrayValueSJtQAtb = true;
		const _arrayValuexG9WeZ = undefined;
		const _flagsBvTHvpu = [_arrayValueSJtQAtb, _arrayValuexG9WeZ]
		const _optionvatZ1Ki = {
			"flags": _flagsBvTHvpu
	}
		const _returnValueQMhwx1 = await _HelpHXm87u.optionTerm(_optionvatZ1Ki)
	});

	it('test for Help', async () => {
		const _Helpoxz47iT = new Help()
		const _returnValuehYxu3Ue = false;
		const _arrayValueAW0yXfA = () => { return _returnValuehYxu3Ue };
		const _arrayValueP2sd93 = false;
		const _arrayValuecNk1Z8F = 6.435799234493725;
		const _descriptionbWoAO2C = [_arrayValueAW0yXfA, _arrayValueP2sd93, _arrayValuecNk1Z8F]
		const _cmdr2SgnE3 = {
			"description": _descriptionbWoAO2C
	}
		const _returnValueVf8UnlQ = await _Helpoxz47iT.subcommandDescription(_cmdr2SgnE3)
		const _commandsXCMYRn = {
		
	}
		const _returnValueDjg6qoK = true;
		const __hasImplicitHelpCommand3GQpBb = () => { return _returnValueDjg6qoK };
		const __helpCommandnameAndArgsT9Bl9t6 = {
		
	}
		const _returnValueckwdrJ = undefined;
		const _createCommanduhMpeiI = () => { return _returnValueckwdrJ };
		const __helpCommandDescriptioniuGkUMy = false;
		const _cmdn4ZE5C = {
			"commands": _commandsXCMYRn,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommand3GQpBb,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsT9Bl9t6,
		"createCommand": _createCommanduhMpeiI,
		"_helpCommandDescription": __helpCommandDescriptioniuGkUMy
	}
		const _returnValuecz5tRDt = await _Helpoxz47iT.visibleCommands(_cmdn4ZE5C)
	});

	it('test for Help', async () => {
		const _Helpk5ErEo = new Help()
		const _returnValueqjemCRx = "iIuPAHBxC4BHGqG8VjYWXEgqeOpBjQr";
		const _nameTjt5Dnm = () => { return _returnValueqjemCRx };
		const _argumentFrALWzR = {
			"name": _nameTjt5Dnm
	}
		const _returnValueTNlu6Zw = await _Helpk5ErEo.argumentTerm(_argumentFrALWzR)
		const _returnValueNsS54wZ = undefined;
		const _descriptionXaku75 = () => { return _returnValueNsS54wZ };
		const _cmduHUh0mU = {
			"description": _descriptionXaku75
	}
		const _returnValuekhoxps = await _Helpk5ErEo.subcommandDescription(_cmduHUh0mU)
	});

	it('test for Help', async () => {
		const _HelpzqJVnY3 = new Help()
		const _returnValueigwOVQq = "0DXwvtSPLOMMLBzPwvQdjXqIf27";
		const _returnValuemMnGWo1 = () => { return _returnValueigwOVQq };
		const _descriptionAX3KM9b = () => { return _returnValuemMnGWo1 };
		const _cmdeSuaanT = {
			"description": _descriptionAX3KM9b
	}
		const _returnValuerP2nMl = await _HelpzqJVnY3.commandDescription(_cmdeSuaanT)
		const _cmdPBRZZ3o = undefined;
		const _sortSubcommandsnfgVbE = "YktEhGpF";
		const _returnValuet0xkkOu = -8.903940939684158;
		const _subcommandTermFJKqX5A = () => { return _returnValuet0xkkOu };
		const _helpervRoTYJm = {
			"sortSubcommands": _sortSubcommandsnfgVbE,
		"subcommandTerm": _subcommandTermFJKqX5A
	}
		const _returnValuesbDPkpj = await _HelpzqJVnY3.formatHelp(_cmdPBRZZ3o, _helpervRoTYJm)
		const _returnValuelW742M = true;
		const _descriptionl8r1fXW = () => { return _returnValuelW742M };
		const _cmdLHAQ7MN = {
			"description": _descriptionl8r1fXW
	}
		const _returnValueuRoehpI = await _HelpzqJVnY3.commandDescription(_cmdLHAQ7MN)
		const _cmdDvPCNxL = false;
		const _returnValueq1dWhma = null;
		const _visibleArgumentse1noqCg = () => { return _returnValueq1dWhma };
		const _returnValueVzBHitf = -6.984344089279366;
		const _argumentTermwm8ZYjY = () => { return _returnValueVzBHitf };
		const _helperH2C9RJS = {
			"visibleArguments": _visibleArgumentse1noqCg,
		"argumentTerm": _argumentTermwm8ZYjY
	}
		const _returnValueHFWx0G = await _HelpzqJVnY3.longestArgumentTermLength(_cmdDvPCNxL, _helperH2C9RJS)
	});

	it('test for Help', async () => {
		const _HelpOtV5Yc = new Help()
		const _argChoicesmPiVO0 = {
		
	}
		const _defaultValueqyMrqZM = undefined;
		const _defaultValueDescriptionBPSYwd = "iDBSWnHBAIkJuahHoqx9EERfsi5wlceq6";
		const _descriptionVVGQ1ON = "OKWfrEdgd8gEHtbRzlvxgMrTR5aOS6tatL7tzCfSL4tkLtWT9tW";
		const _argumentIM2zVvm = {
			"argChoices": _argChoicesmPiVO0,
		"defaultValue": _defaultValueqyMrqZM,
		"defaultValueDescription": _defaultValueDescriptionBPSYwd,
		"description": _descriptionVVGQ1ON
	}
		const _returnValuelQyVRCa = await _HelpOtV5Yc.argumentDescription(_argumentIM2zVvm)
		const __nameYTnK40j = {
		
	}
		const __aliasesClMXgHm = {
		
	}
		const _parentEbZNGb1 = {
		
	}
		const _arrayValuevQMK6XS = "7c6EeoMAdLxYATq1iLVyzfgfBLGyz7fFO49bsvxAtkIfqVaKwzSam0nP";
		const _returnValueUfevXS = [_arrayValuevQMK6XS]
		const _usageMBMwYlI = () => { return _returnValueUfevXS };
		const _cmdg77U2s = {
			"_name": __nameYTnK40j,
		"_aliases": __aliasesClMXgHm,
		"parent": _parentEbZNGb1,
		"usage": _usageMBMwYlI
	}
		const _returnValueKRBf8bS = await _HelpOtV5Yc.commandUsage(_cmdg77U2s)
		const _returnValueMIdQxB = {
		
	}
		const _arrayValuepR4zHRQ = () => { return _returnValueMIdQxB };
		const _arrayValuebrg6iG = true;
		const _returnValueN2BTct = [_arrayValuepR4zHRQ, _arrayValuebrg6iG]
		const _matchQAUjSym = () => { return _returnValueN2BTct };
		const _arrayValueDbuY1d = null;
		const _arrayValueLGhfPHy = undefined;
		const _arrayValueBnIZDVU = true;
		const _arrayValuebARxwp1 = true;
		const _arrayValuesmergf = [_arrayValueLGhfPHy, _arrayValueBnIZDVU, _arrayValuebARxwp1]
		const _arrayValueTCfvsG = {
		
	}
		const _returnValueYDRj9DT = false;
		const _arrayValuelPWXgOY = () => { return _returnValueYDRj9DT };
		const _returnValueu0GUSL = [_arrayValueDbuY1d, _arrayValuesmergf, _arrayValueTCfvsG, _arrayValuelPWXgOY]
		const _substrsvLdL9W = () => { return _returnValueu0GUSL };
		const _strd39pkPM = {
			"match": _matchQAUjSym,
		"substr": _substrsvLdL9W
	}
		const _widthEJNK4ov = -4.415007628327975;
		const _indentFlOhV2K = 5.951891655339942;
		const _minColumnWidthfZRtieo = -4.6635626171041045;
		const _returnValuelV6yM7t = await _HelpOtV5Yc.wrap(_strd39pkPM, _widthEJNK4ov, _indentFlOhV2K, _minColumnWidthfZRtieo)
	});

	it('test for Help', async () => {
		const _Helpq64trsQ = new Help()
		const _cmdfATBuCE = {
		
	}
		const _returnValueovfqo0x = "ddey3qbohFP99SGqzTPrGQ5pPYXdupDz938X5yVcJFD7pWYp1FXtMjOFhd75y1lq7E1f4ujQk3WM5XPFrAT9jd4";
		const _longestOptionTermLengthXoW7Kmi = () => { return _returnValueovfqo0x };
		const _returnValueckPUU0z = -2.2070247639671825;
		const _longestSubcommandTermLengthv1uozGG = () => { return _returnValueckPUU0z };
		const _arrayValuexuoXj0x = null;
		const _returnValueFqd6H7r = [_arrayValuexuoXj0x]
		const _longestArgumentTermLengthKBpg3uc = () => { return _returnValueFqd6H7r };
		const _helperSLym7VV = {
			"longestOptionTermLength": _longestOptionTermLengthXoW7Kmi,
		"longestSubcommandTermLength": _longestSubcommandTermLengthv1uozGG,
		"longestArgumentTermLength": _longestArgumentTermLengthKBpg3uc
	}
		const _returnValueHC3u2Xp = await _Helpq64trsQ.padWidth(_cmdfATBuCE, _helperSLym7VV)
		const _cmdMBoB5Jw = null;
		const _sortSubcommandsavXBzAC = {
		
	}
		const _returnValueR0PJ8u7 = 7.11317980712575;
		const _subcommandTermGQK56Vt = () => { return _returnValueR0PJ8u7 };
		const _helperUUVSAIP = {
			"sortSubcommands": _sortSubcommandsavXBzAC,
		"subcommandTerm": _subcommandTermGQK56Vt
	}
		const _returnValueAyaSzE2 = await _Helpq64trsQ.formatHelp(_cmdMBoB5Jw, _helperUUVSAIP)
		const _argChoicesELhAynO = {
		
	}
		const _negatevmBHE1 = "RQsGnaXTnWtrAo6gPyD58Jvm9";
		const _defaultValueSksy8pD = undefined;
		const _defaultValueDescriptionvEMZT8K = {
		
	}
		const _envVarTMS4IQX = undefined;
		const _arrayValueW4OBexP = true;
		const _arrayValue1rrD6v = [_arrayValueW4OBexP]
		const _arrayValueqeJqRdt = undefined;
		const _descriptiontTvNPdJ = [_arrayValue1rrD6v, _arrayValueqeJqRdt]
		const _optiontPtugc2 = {
			"argChoices": _argChoicesELhAynO,
		"negate": _negatevmBHE1,
		"defaultValue": _defaultValueSksy8pD,
		"defaultValueDescription": _defaultValueDescriptionvEMZT8K,
		"envVar": _envVarTMS4IQX,
		"description": _descriptiontTvNPdJ
	}
		const _returnValuear2oCTd = await _Helpq64trsQ.optionDescription(_optiontPtugc2)
		const _arrayValueNW8amO = false;
		const _arrayValueDQPFq0S = null;
		const _arrayValueKfo3PPy = -5.286150263863302;
		const _arrayValuexsap4aN = 8.604369563909259;
		const _returnValuevdzSsv = [_arrayValueNW8amO, _arrayValueDQPFq0S, _arrayValueKfo3PPy, _arrayValuexsap4aN]
		const _arrayValueVW5Y5h = () => { return _returnValuevdzSsv };
		const _arrayValuel3077da = null;
		const _arrayValueAfgjtd4 = undefined;
		const _arrayValueXk7FnU = "8SVGmKb5tOsWVhixomyXeQ6ADFLzjvwI";
		const _arrayValueQboq06q = [_arrayValuel3077da, _arrayValueAfgjtd4, _arrayValueXk7FnU]
		const _cmdjf13RTE = [_arrayValueVW5Y5h, _arrayValueQboq06q]
		const _returnValuemvO2Qpn = true;
		const _visibleArgumentshXZiGw = () => { return _returnValuemvO2Qpn };
		const _returnValuevgbMIU4 = {
		
	}
		const _argumentTermqd6utdi = () => { return _returnValuevgbMIU4 };
		const _helperkPVf0NI = {
			"visibleArguments": _visibleArgumentshXZiGw,
		"argumentTerm": _argumentTermqd6utdi
	}
		const _returnValueLNZTuO1 = await _Helpq64trsQ.longestArgumentTermLength(_cmdjf13RTE, _helperkPVf0NI)
	});

	it('test for Help', async () => {
		const _HelpWpkpCc = new Help()
		const _arrayValueJacZ9Ka = undefined;
		const _arrayValueDaUKgSk = false;
		const _arrayValueH8na1Ov = [_arrayValueJacZ9Ka, _arrayValueDaUKgSk]
		const _arrayValuevQZzcgI = {
		
	}
		const _arrayValuehpRprq = null;
		const _arrayValuePYWFsS = true;
		const _cmdJNfDYYB = [_arrayValueH8na1Ov, _arrayValuevQZzcgI, _arrayValuehpRprq, _arrayValuePYWFsS]
		const _helperUvpGryQ = undefined;
		const _returnValuekxFUE5E = await _HelpWpkpCc.longestOptionTermLength(_cmdJNfDYYB, _helperUvpGryQ)
	});

	it('test for Help', async () => {
		const _HelpqDYZiuC = new Help()
		const _argChoicesSvwIMXy = {
		
	}
		const _negategAjTkx8 = "EJEOXsTLuUJeU5Ot1fvYOFa1jWwRSKw4oHyfTq9GiWxfirgpSs8fIuaMUVeCW9Wr";
		const _defaultValueGyzDnEE = undefined;
		const _defaultValueDescriptionziNi1kx = undefined;
		const _envVarSCKx5aD = undefined;
		const _descriptiontYEA9O8 = false;
		const _optionHWHZziz = {
			"argChoices": _argChoicesSvwIMXy,
		"negate": _negategAjTkx8,
		"defaultValue": _defaultValueGyzDnEE,
		"defaultValueDescription": _defaultValueDescriptionziNi1kx,
		"envVar": _envVarSCKx5aD,
		"description": _descriptiontYEA9O8
	}
		const _returnValueGGv72FL = await _HelpqDYZiuC.optionDescription(_optionHWHZziz)
		const _argChoicescxZkWyS = {
		
	}
		const _negateTwAjkFy = 6.996192130925309;
		const _defaultValuePBsCqm = undefined;
		const _defaultValueDescriptionlArlku3 = undefined;
		const _envVarSO9Vsn2 = undefined;
		const _arrayValuefsHHvm = {
		
	}
		const _arrayValueObBdvy = "NcQwBHSceQh185ciFRgF3bbdTgsT4";
		const _arrayValueuSylaNP = null;
		const _arrayValuepL2pAz = undefined;
		const _arrayValueyQg4mwO = [_arrayValueuSylaNP, _arrayValuepL2pAz]
		const _arrayValue8fAXRq = null;
		const _descriptionUa9uO9y = [_arrayValuefsHHvm, _arrayValueObBdvy, _arrayValueyQg4mwO, _arrayValue8fAXRq]
		const _optionFLHZBwr = {
			"argChoices": _argChoicescxZkWyS,
		"negate": _negateTwAjkFy,
		"defaultValue": _defaultValuePBsCqm,
		"defaultValueDescription": _defaultValueDescriptionlArlku3,
		"envVar": _envVarSO9Vsn2,
		"description": _descriptionUa9uO9y
	}
		const _returnValueXxCOfO5 = await _HelpqDYZiuC.optionDescription(_optionFLHZBwr)
		const _argumentHV0uMZS = false;
		const _returnValues6tfjPA = await _HelpqDYZiuC.argumentDescription(_argumentHV0uMZS)
		const _flagsDtUCCIs = null;
		const _optionearcOht = {
			"flags": _flagsDtUCCIs
	}
		const _returnValueI8YAaDW = await _HelpqDYZiuC.optionTerm(_optionearcOht)
	});

	it('test for Help', async () => {
		const _Helpg8QNk6y = new Help()
		const __argsDescriptionf3rhK1V = {
		
	}
		const __argskUwnPCk = {
		
	}
		const _cmdWao1hfr = {
			"_argsDescription": __argsDescriptionf3rhK1V,
		"_args": __argskUwnPCk
	}
		const _returnValueWOH4ECA = await _Helpg8QNk6y.visibleArguments(_cmdWao1hfr)
	});

	it('test for Help', async () => {
		const _HelpKN8Y8FH = new Help()
		const _returnValueD9znyOb = undefined;
		const _matchpKUsM1g = () => { return _returnValueD9znyOb };
		const _substrC0DQqfH = {
		
	}
		const _str1BjJNJ = {
			"match": _matchpKUsM1g,
		"substr": _substrC0DQqfH
	}
		const _widtha7pUINl = 4.00564380739667;
		const _indentGKnkH0r = -6.198735630707874;
		const _minColumnWidthZ6wZ4km = 3.997420515791969;
		const _returnValuezuBbN7n = await _HelpKN8Y8FH.wrap(_str1BjJNJ, _widtha7pUINl, _indentGKnkH0r, _minColumnWidthZ6wZ4km)
		const _arrayValuepBjPQDp = false;
		const _cmdrV6vPlk = [_arrayValuepBjPQDp]
		const _returnValueNlujaaQ = await _HelpKN8Y8FH.visibleOptions(_cmdrV6vPlk)
		const _arrayValueNMcsqy6 = undefined;
		const _cmdgrXdzKp = [_arrayValueNMcsqy6]
		const _returnValueHGLzkM5 = "vPh";
		const _helperB6imjAe = () => { return _returnValueHGLzkM5 };
		const _returnValueXNbBhMR = await _HelpKN8Y8FH.padWidth(_cmdgrXdzKp, _helperB6imjAe)
	});

	it('test for Help', async () => {
		const _Helpo9mD2m = new Help()
		const _strDke3MO7 = "fPvuhnaWwNXu6kbgQECnCknjizMTCqRYReuElinuZKULMB445pkaVXwPUnDAhzJzQsae5WMLs1dXSVgx";
		const _widthIKPoBvI = 8.207590618565405;
		const _indentPKaOak = 9.3873499944726;
		const _minColumnWidthoIdMsID = null;
		const _returnValueBKZM7wi = await _Helpo9mD2m.wrap(_strDke3MO7, _widthIKPoBvI, _indentPKaOak, _minColumnWidthoIdMsID)
		const _cmdluFbFWh = undefined;
		const _helperbC5kP9H = new Help()
		const _cmdiZLBJrr = "a8Hu45h2zoJCqp7CV7zFmd9ecucQnMkXb2JQo972PkjAZ5bBgr3XwQfeCkj1ppIGXlwojrI6FxNbSDL1YKJIqunk9V";
		const _returnValueD2ZrOJ = 9.379632080913026;
		const _longestOptionTermLengthAmzkPzX = () => { return _returnValueD2ZrOJ };
		const _returnValueUGZqPVF = undefined;
		const _longestSubcommandTermLengtht5TfuTP = () => { return _returnValueUGZqPVF };
		const _returnValueUBldJB = "uFnXK3omr1dczQwKSO8puKcmO547uWpWD3n1an3luOXEtFAj9LYOYHyqHOVdd2zLzspj6e6FXkcFHMdOOdBvyxWD";
		const _longestArgumentTermLength9fRAzN = () => { return _returnValueUBldJB };
		const _helperYxvuCNg = {
			"longestOptionTermLength": _longestOptionTermLengthAmzkPzX,
		"longestSubcommandTermLength": _longestSubcommandTermLengtht5TfuTP,
		"longestArgumentTermLength": _longestArgumentTermLength9fRAzN
	}
		const _returnValueHtTbWOb = await _helperbC5kP9H.padWidth(_cmdiZLBJrr, _helperYxvuCNg)
		const _cmddvciQuB = "rwuKryKcrqthtxnngs0nSjN7FA1Aeml1ACqtViSJdkJu";
		const _returnValuecArCwTW = await _helperbC5kP9H.visibleOptions(_cmddvciQuB)
		const _arrayValuezTAMUSz = "lKCpb4SwTNPDSHYHkSn4wgyhD8OSUSMulB2u6FpOFK4cPaNipt8CnqRQtEjf3DsHl4";
		const _argumentOWb9rwZ = [_arrayValuezTAMUSz]
		const _returnValueWjkquaL = await _helperbC5kP9H.argumentTerm(_argumentOWb9rwZ)
		const _returnValueXkU1Hj = await _Helpo9mD2m.formatHelp(_cmdluFbFWh, _helperbC5kP9H)
		const _cmdfY3yYu8 = "znEitvbcynhYD5";
		const _returnValueXICCViE = await _Helpo9mD2m.visibleArguments(_cmdfY3yYu8)
		const _optionGVWx279 = []
		const _returnValueiq3ntv2 = await _Helpo9mD2m.optionDescription(_optionGVWx279)
		const _strPPM8UwH = "sWpoiNpqDx8X19uEPXfBmUo71hDEPQZSPMAFOL2GUtJXmaLwmczynhziWoHtkGb99fIXg6DYqEo";
		const _widthGpJuhZv = 8.526324886969824;
		const _indentPWMsgAT = -8.622255869709754;
		const _minColumnWidthGc8sSkL = 6.376058469099323;
		const _returnValueCfsh5D = await _Helpo9mD2m.wrap(_strPPM8UwH, _widthGpJuhZv, _indentPWMsgAT, _minColumnWidthGc8sSkL)
	});

	it('test for Help', async () => {
		const _HelpszNifv2 = new Help()
		const _cmdSG5pqW = "YXKh7gqNaRuH12vuoqBsqO8Na9USwtp76QqgG77ClDUVtu4JWxAEBtxkyDCYzyIg5GsmOEhxX5YNgd7Fu2ft6yNYkspbXbO9p5";
		const _helperhEDQRAK = new Help()
		const _nameeTLFYdk = 8.88972849276129;
		const _cmdTuHt3O = new Command(_nameeTLFYdk)
		const _returnValueDZLE682 = await _cmdTuHt3O._hasImplicitHelpCommand()
		const _flagsMAiKJmY = "qvSe3qBLjQoASy6gu9wgwTCMATduTkRkcNE31SSiQFJ79Mnly3pKRjIiXxvQuplKTkN";
		const _descriptionI1JNKrX = undefined;
		const _optionWpE6R8s = new Option(_flagsMAiKJmY, _descriptionI1JNKrX)
		const _hideDQZnou7 = true;
		const _returnValueU9gi4QO = await _optionWpE6R8s.hideHelp(_hideDQZnou7)
		const _returnValueXA7Di0e = 6.705074427797356;
		const _includestHBTbRX = () => { return _returnValueXA7Di0e };
		const _returnValueDuh1sYY = undefined;
		const _joinj0ZhjBO = () => { return _returnValueDuh1sYY };
		const _valuesSqL95rO = {
			"includes": _includestHBTbRX,
		"join": _joinj0ZhjBO
	}
		const _returnValueQH6KUxD = await _optionWpE6R8s.choices(_valuesSqL95rO)
		const _mandatoryU3w2ddT = false;
		const _returnValuehlK63FK = await _optionWpE6R8s.makeOptionMandatory(_mandatoryU3w2ddT)
		const _mandatoryYBawMDI = true;
		const _returnValuexu34r96 = await _optionWpE6R8s.makeOptionMandatory(_mandatoryYBawMDI)
		const _valuevA9DIc0 = false;
		const _returnValueUwTgxRM = undefined;
		const _concatejthmp = () => { return _returnValueUwTgxRM };
		const _previousycpErIW = {
			"concat": _concatejthmp
	}
		const _returnValueNOKrh7w = await _optionWpE6R8s._concatValue(_valuevA9DIc0, _previousycpErIW)
		const _returnValuerqL5zlK = await _cmdTuHt3O.addOption(_optionWpE6R8s)
		const _returnValuehUV2zLa = await _helperhEDQRAK.visibleCommands(_cmdTuHt3O)
		const _nameHSIzLu = undefined;
		const _cmdnkvGcFd = new Command(_nameHSIzLu)
		const __outputConfigurationUKhKaUh = {
		
	}
		const __hasHelpOptionOwDZMBX = {
		
	}
		const __helpFlagslqwI1f8 = {
		
	}
		const __helpDescriptionB0j44TF = null;
		const __helpShortFlagFOnRbzV = {
		
	}
		const __helpLongFlagPtKNtM = {
		
	}
		const _arrayValue5GcUOD = true;
		const _arrayValuewqQJZ6a = "NH1iSvTtYYKd0JjXI8HboouevAeQEUDrpdwFBCzX6s1kQVLUcG";
		const __helpCommandNameMwhQP8j = [_arrayValue5GcUOD, _arrayValuewqQJZ6a]
		const __helpCommandnameAndArgsihl8oRT = {
		
	}
		const __helpCommandDescriptionqSLG9rm = "Yg7BII1Dp1OlKLdslzqNNl1nZ4IkGQ2X5n6w";
		const __helpConfigurationqU0oSUL = {
		
	}
		const __exitCallbackLm0T8cx = {
		
	}
		const __storeOptionsAsPropertieszaSI9Vy = undefined;
		const __combineFlagAndOptionalValueTQMuO7B = {
		
	}
		const __allowExcessArgumentsVNXViTD = {
		
	}
		const __enablePositionalOptionsKXCYqJ9 = {
		
	}
		const __showHelpAfterError16xbBg = {
		
	}
		const __showSuggestionAfterErrorzj9dMiW = -9.536775715746199;
		const _sourceCommandVRIFBxw = {
			"_outputConfiguration": __outputConfigurationUKhKaUh,
		"_hasHelpOption": __hasHelpOptionOwDZMBX,
		"_helpFlags": __helpFlagslqwI1f8,
		"_helpDescription": __helpDescriptionB0j44TF,
		"_helpShortFlag": __helpShortFlagFOnRbzV,
		"_helpLongFlag": __helpLongFlagPtKNtM,
		"_helpCommandName": __helpCommandNameMwhQP8j,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsihl8oRT,
		"_helpCommandDescription": __helpCommandDescriptionqSLG9rm,
		"_helpConfiguration": __helpConfigurationqU0oSUL,
		"_exitCallback": __exitCallbackLm0T8cx,
		"_storeOptionsAsProperties": __storeOptionsAsPropertieszaSI9Vy,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValueTQMuO7B,
		"_allowExcessArguments": __allowExcessArgumentsVNXViTD,
		"_enablePositionalOptions": __enablePositionalOptionsKXCYqJ9,
		"_showHelpAfterError": __showHelpAfterError16xbBg,
		"_showSuggestionAfterError": __showSuggestionAfterErrorzj9dMiW
	}
		const _returnValueXhAzXno = await _cmdnkvGcFd.copyInheritedSettings(_sourceCommandVRIFBxw)
		const _configurationQ52JcA9 = undefined;
		const _returnValueGtFudGf = await _cmdnkvGcFd.configureHelp(_configurationQ52JcA9)
		const _returnValuediiQZ2F = await _cmdnkvGcFd.opts()
		const _returnValueK6zsYow = await _helperhEDQRAK.subcommandDescription(_cmdnkvGcFd)
		const _returnValuekI0e5iL = undefined;
		const _cmdw6iLw3B = () => { return _returnValuekI0e5iL };
		const _returnValueThvGX2d = await _helperhEDQRAK.commandUsage(_cmdw6iLw3B)
		const _returnValuehsVTKvp = await _HelpszNifv2.longestSubcommandTermLength(_cmdSG5pqW, _helperhEDQRAK)
		const _argumentcSOj7DO = "4Yz2gTeVOwCt";
		const _returnValuelC15vfW = await _HelpszNifv2.argumentDescription(_argumentcSOj7DO)
		const _nameqxlcke4 = "pUP5f621Qr24whcKh23GyyOjuFsylfWFDjs8";
		const _cmdc1HZoUS = new Command(_nameqxlcke4)
		const _argvxSPQHk2 = null;
		const _arrayValueGHMgbnx = 0.16609216975275842;
		const _arrayValueTEh6Vwk = 7.008347220626881;
		const _arrayValueKudI1B6 = "BeU40obhMwbyCeujPwWQh6xnodkhDlAJCobQiqSrxqQR";
		const _parseOptionsmJY793o = [_arrayValueGHMgbnx, _arrayValueTEh6Vwk, _arrayValueKudI1B6]
		const _returnValuebissKp = await _cmdc1HZoUS.parseAsync(_argvxSPQHk2, _parseOptionsmJY793o)
		const _returnValueUctWmgE = await _cmdc1HZoUS.opts()
		const _returnValuen17zy1U = await _HelpszNifv2.subcommandDescription(_cmdc1HZoUS)
	});

	it('test for Help', async () => {
		const _HelpAwf33L8 = new Help()
		const _argumentYlPF8tw = "1vvGoRgINJJbnNTBTYVtXIq5WE2xc2IMTGxuXl5Qb0PJAdsWiYLt17Skg0pY";
		const _returnValueMdSfM8u = await _HelpAwf33L8.argumentDescription(_argumentYlPF8tw)
		const _nameWGU4DjN = false;
		const _cmdiHrSjB = new Command(_nameWGU4DjN)
		const _arrayValuebYep21q = 6.648590823015773;
		const _arrayValueuZrVX5V = true;
		const _arrayValue3eaWka = "93cNj7zUdGAX2lgrwot4MQVKD1KaPtipWNdAOuOqrvlgS3vrdYhr";
		const _returnValueewjDke7 = [_arrayValuebYep21q, _arrayValueuZrVX5V, _arrayValue3eaWka]
		const _matchh1jfjDd = () => { return _returnValueewjDke7 };
		const _nameAndArgsBLYeYJX = {
			"match": _matchh1jfjDd
	}
		const _actionOptsOrExecDescBPaSmL = null;
		const _execOptsu4zNFxd = false;
		const _returnValueJaZ3nh = await _cmdiHrSjB.command(_nameAndArgsBLYeYJX, _actionOptsOrExecDescBPaSmL, _execOptsu4zNFxd)
		const _keyXFgRG5s = null;
		const _valueRUuZ2S5 = {
		
	}
		const _returnValueSMUH7op = await _cmdiHrSjB.setOptionValue(_keyXFgRG5s, _valueRUuZ2S5)
		const _returnValuev028Ujz = await _HelpAwf33L8.visibleCommands(_cmdiHrSjB)
		const _cmdZwcg1Pf = undefined;
		const _helperTzVxLcO = new Help()
		const _arrayValueHYNMBrb = 9.6306381128629;
		const _arrayValuevIgyauM = false;
		const _nameeY0sNJs = [_arrayValueHYNMBrb, _arrayValuevIgyauM]
		const _cmdRrGVtI = new Command(_nameeY0sNJs)
		const _returnValuelXc2SxB = await _cmdRrGVtI._processArguments()
		const _combineuqlkSDL = true;
		const _returnValuejNMUEEx = await _cmdRrGVtI.combineFlagAndOptionalValue(_combineuqlkSDL)
		const _displayHelpgGXnjQH = {
		
	}
		const _returnValueAFYVFBd = await _cmdRrGVtI.showHelpAfterError(_displayHelpgGXnjQH)
		const _returnValuel68S5oO = await _helperTzVxLcO.commandDescription(_cmdRrGVtI)
		const _returnValueb79p8BL = null;
		const _namedFy8CJ = () => { return _returnValueb79p8BL };
		const _argumentxa7HUHY = {
			"name": _namedFy8CJ
	}
		const _returnValueIWw7Gm3 = await _helperTzVxLcO.argumentTerm(_argumentxa7HUHY)
		const _cmdviBwmmU = -0.36617127993936194;
		const _returnValueyocfT6b = await _helperTzVxLcO.commandUsage(_cmdviBwmmU)
		const _returnValue0ngmYe = undefined;
		const _namejJnJjnW = () => { return _returnValue0ngmYe };
		const _argument52633u = {
			"name": _namejJnJjnW
	}
		const _returnValueswCPVac = await _helperTzVxLcO.argumentTerm(_argument52633u)
		const __argsSJCaDmi = {
		
	}
		const __nameTeJoD54 = -3.383433460444076;
		const __aliasesvIHaSnb = {
		
	}
		const _optionsz3id8xw = {
		
	}
		const _cmdA2dRhgs = {
			"_args": __argsSJCaDmi,
		"_name": __nameTeJoD54,
		"_aliases": __aliasesvIHaSnb,
		"options": _optionsz3id8xw
	}
		const _returnValueAQO07dj = await _helperTzVxLcO.subcommandTerm(_cmdA2dRhgs)
		const _returnValueOSCkgaM = await _HelpAwf33L8.padWidth(_cmdZwcg1Pf, _helperTzVxLcO)
		const _cmdfEKODMp = "sc2ILS5tIJUxHqtQAIKMm9jI4VdOKRC";
		const _arrayValueR8KjGb = undefined;
		const _arrayValueRaLtqPW = false;
		const _arrayValuejNRamCx = 9.308559451986273;
		const _arrayValueWkxru6e = undefined;
		const _returnValuexXQ0E40 = [_arrayValueR8KjGb, _arrayValueRaLtqPW, _arrayValuejNRamCx, _arrayValueWkxru6e]
		const _visibleOptionsLOPLYBR = () => { return _returnValuexXQ0E40 };
		const _arrayValueXAWtkME = null;
		const _arrayValuecER1Tn8 = 1.1493790531785884;
		const _returnValueTUb75k3 = [_arrayValueXAWtkME, _arrayValuecER1Tn8]
		const _optionTermAQ5A9cU = () => { return _returnValueTUb75k3 };
		const _helperhKJ0wvl = {
			"visibleOptions": _visibleOptionsLOPLYBR,
		"optionTerm": _optionTermAQ5A9cU
	}
		const _returnValuepNGWy2N = await _HelpAwf33L8.longestOptionTermLength(_cmdfEKODMp, _helperhKJ0wvl)
	});

	it('test for Help', async () => {
		const _Helpu1KjGQK = new Help()
		const _flagsiE7iDst = "1aUetDdlPu7JPjdOHZpEp4O3lFpCwefFuHHjywrsKU9mZ9fWe2";
		const _descriptionu24hNv2 = false;
		const _argumentLlYA6yA = new Option(_flagsiE7iDst, _descriptionu24hNv2)
		const _returnValueXofFjwL = false;
		const _includesPiX2uRH = () => { return _returnValueXofFjwL };
		const _returnValueth9vlLX = null;
		const _jointoPxXk8 = () => { return _returnValueth9vlLX };
		const _valueslrM1zl = {
			"includes": _includesPiX2uRH,
		"join": _jointoPxXk8
	}
		const _returnValueYSyrXdF = await _argumentLlYA6yA.choices(_valueslrM1zl)
		const _returnValueGLqRy7c = await _argumentLlYA6yA.name()
		const _returnValueQv8jvBj = await _argumentLlYA6yA.attributeName()
		const _fnGGKBrWh = undefined;
		const _returnValuelK3azaV = await _argumentLlYA6yA.argParser(_fnGGKBrWh)
		const _fnKyFz7oV = undefined;
		const _returnValueNozgHhK = await _argumentLlYA6yA.argParser(_fnKyFz7oV)
		const _returnValueMuZKPS = await _Helpu1KjGQK.argumentTerm(_argumentLlYA6yA)
	});

	it('test for Help', async () => {
		const _HelpPsXaYt3 = new Help()
		const _flagsUbzvSin = "96tYbiiOyN9nNluHJCHQM1DW3hxpltDjw7m2";
		const _descriptiondqh5A3T = null;
		const _optiongrAPdQ = new Option(_flagsUbzvSin, _descriptiondqh5A3T)
		const _returnValueKuSjjAS = "utHkmK1N3TcGVh0u6oG8gwf0AthhEHTENX1j";
		const _includesMPN3Axu = () => { return _returnValueKuSjjAS };
		const _returnValueWRmSu6J = 8.567009368508685;
		const _joinAmHfBS1 = () => { return _returnValueWRmSu6J };
		const _valuesWQyk5KK = {
			"includes": _includesMPN3Axu,
		"join": _joinAmHfBS1
	}
		const _returnValue7cATHx = await _optiongrAPdQ.choices(_valuesWQyk5KK)
		const _argav3bg9E = "ORVsXt5jahxQJ75jXilK9I65jep91pv7SBd8SMQpVzlQYPbH7dqgr8bFw6PojNem6Kq497w";
		const _returnValueG6b6WYQ = await _optiongrAPdQ.is(_argav3bg9E)
		const _valueWvYNBMH = null;
		const _arrayValueiNDKA6F = "hUwwa1o471Pj9MdcNU2d9icflk8Z9eYDTLm4GjX";
		const _arrayValuelLTpQQu = {
		
	}
		const _arrayValueN8CnMii = -1.8945000441414024;
		const _returnValueqv4iQH = [_arrayValueiNDKA6F, _arrayValuelLTpQQu, _arrayValueN8CnMii]
		const _concatvJ6rBh5 = () => { return _returnValueqv4iQH };
		const _previousW3s7a5 = {
			"concat": _concatvJ6rBh5
	}
		const _returnValuehnfPi7v = await _optiongrAPdQ._concatValue(_valueWvYNBMH, _previousW3s7a5)
		const _mandatorymCxOnqC = true;
		const _returnValueIp3cTra = await _optiongrAPdQ.makeOptionMandatory(_mandatorymCxOnqC)
		const _mandatoryddjL8aK = false;
		const _returnValueHYUj96I = await _optiongrAPdQ.makeOptionMandatory(_mandatoryddjL8aK)
		const _returnValuea82W8Hp = await _HelpPsXaYt3.optionDescription(_optiongrAPdQ)
		const _cmdZmU6ND = {
		
	}
		const _arrayValueMZJ7evT = {
		
	}
		const _returnValueKqjGMi9 = true;
		const _arrayValueOA30GGN = () => { return _returnValueKqjGMi9 };
		const _returnValueC0oygr = -9.051112557659168;
		const _arrayValueHWkpikF = () => { return _returnValueC0oygr };
		const _helperu0imjSa = [_arrayValueMZJ7evT, _arrayValueOA30GGN, _arrayValueHWkpikF]
		const _returnValuewtKvEk0 = await _HelpPsXaYt3.longestSubcommandTermLength(_cmdZmU6ND, _helperu0imjSa)
		const _nameVLkQY2s = true;
		const _cmdPKEfiIw = new Command(_nameVLkQY2s)
		const _flagsnszWAC6 = "4IzsdjRUBvxowxUAspwDocMheokHKbkFB5ER1L21ekVWTur2IOBToI7AC78FKz2vlIxprBswWUYp4tV1hAzHfydhnT4Bq22ADQ";
		const _optiono1SzCU = {
			"flags": _flagsnszWAC6
	}
		const _returnValueUZ46Mul = await _cmdPKEfiIw.optionMissingArgument(_optiono1SzCU)
		const _returnValuew5GfN2X = await _HelpPsXaYt3.commandDescription(_cmdPKEfiIw)
		const _returnValueQj4AQHc = undefined;
		const _arrayValuepjqs7Jy = () => { return _returnValueQj4AQHc };
		const _nameMYLndsN = [_arrayValuepjqs7Jy]
		const _argumentFxdijwZ = new Command(_nameMYLndsN)
		const _fnd7aQcW = {
		
	}
		const _returnValuetCHHWEI = await _argumentFxdijwZ.exitOverride(_fnd7aQcW)
		const _returnValueTMZsmCr = true;
		const _sliceKVLDbxA = () => { return _returnValueTMZsmCr };
		const _argvKqKHV59 = {
			"slice": _sliceKVLDbxA
	}
		const _returnValuejkpTDhi = await _argumentFxdijwZ.parseOptions(_argvKqKHV59)
		const _allowExcessGGtTjaE = true;
		const _returnValueEgDQqL0 = await _argumentFxdijwZ.allowExcessArguments(_allowExcessGGtTjaE)
		const _returnValuea3JAF2S = await _HelpPsXaYt3.argumentTerm(_argumentFxdijwZ)
	});

	it('test for Help', async () => {
		const _HelprbxmsRF = new Help()
		const _namemge1Z0R = "uwD8m2vYaF";
		const _descriptionRUTWRAy = []
		const _optionahtBzQV = new Argument(_namemge1Z0R, _descriptionRUTWRAy)
		const _fnOsqK869 = undefined;
		const _returnValueWGddsyo = await _optionahtBzQV.argParser(_fnOsqK869)
		const _valueRqBpbo8 = undefined;
		const _previousSv2ihDz = 4.863414503476735;
		const _returnValueSENA28B = await _optionahtBzQV._concatValue(_valueRqBpbo8, _previousSv2ihDz)
		const _arrayValueme9PWH = null;
		const _returnValuepyN9nP = null;
		const _arrayValueqxEvmxz = () => { return _returnValuepyN9nP };
		const _arrayValuep8J4G3z = undefined;
		const _valuesEzivcjE = [_arrayValueme9PWH, _arrayValueqxEvmxz, _arrayValuep8J4G3z]
		const _returnValueDZ6OXmk = await _optionahtBzQV.choices(_valuesEzivcjE)
		const _returnValueUdpeYEv = await _HelprbxmsRF.optionDescription(_optionahtBzQV)
		const _nameLTptG8Y = "e44kSsFJAAqPCY3dtEThf550kFFM";
		const _descriptionDNIdtjj = true;
		const _argumentB1AyDz = new Argument(_nameLTptG8Y, _descriptionDNIdtjj)
		const _returnValuejcmRC11 = await _argumentB1AyDz.argRequired()
		const _returnValueLX0wyJI = await _argumentB1AyDz.argOptional()
		const _returnValue9LJ1aU = await _argumentB1AyDz.argRequired()
		const _returnValueJsc84G7 = await _HelprbxmsRF.argumentTerm(_argumentB1AyDz)
		const _cmdLppRvcx = null;
		const _returnValueSbcseLG = {
		
	}
		const _visibleArgumentsCUtNBK = () => { return _returnValueSbcseLG };
		const _returnValueXO4zFCJ = "f";
		const _argumentTermDFkWyaq = () => { return _returnValueXO4zFCJ };
		const _helperzUGYW5N = {
			"visibleArguments": _visibleArgumentsCUtNBK,
		"argumentTerm": _argumentTermDFkWyaq
	}
		const _returnValueL8R2rB8 = await _HelprbxmsRF.longestArgumentTermLength(_cmdLppRvcx, _helperzUGYW5N)
		const _nameH0LdGYh = undefined;
		const _cmdYXWtLcG = new Command(_nameH0LdGYh)
		const _strCVcB9vC = undefined;
		const _argsDescriptionOmoXMml = undefined;
		const _returnValueYAdZQt0 = await _cmdYXWtLcG.description(_strCVcB9vC, _argsDescriptionOmoXMml)
		const _flagsTpQtdnW = undefined;
		const _returnValueMobNN1C = "STjgtQT7nW4mlFqwO8T";
		const _descriptionPx9t8d = () => { return _returnValueMobNN1C };
		const _arrayValuefeJSX7U = -9.718994217389888;
		const _fnoqiiqGF = [_arrayValuefeJSX7U]
		const _defaultValueoUmAZYP = undefined;
		const _returnValueoeD6b5O = await _cmdYXWtLcG.option(_flagsTpQtdnW, _descriptionPx9t8d, _fnoqiiqGF, _defaultValueoUmAZYP)
		const _arrayValuepA322iY = null;
		const _commandNameSEVpyu = [_arrayValuepA322iY]
		const _concatueqFk9d = "uXGJ89ebJ9eYmeTEHiNVqPfIqGD7R9OuXZhYEdzlQnZdUU1R83f4m6jgpzLhXiQGRUBhttytvV6YNl6WsnjOCjsoebtF23D";
		const _operandsj24DL1X = {
			"concat": _concatueqFk9d
	}
		const _unknownp5Maupu = undefined;
		const _returnValueaZKisJS = await _cmdYXWtLcG._dispatchSubcommand(_commandNameSEVpyu, _operandsj24DL1X, _unknownp5Maupu)
		const _returnValueMNsR1YF = await _HelprbxmsRF.visibleOptions(_cmdYXWtLcG)
	});

	it('test for Help', async () => {
		const _Help9B2Y3n = new Help()
		const _namerLmlSmI = undefined;
		const _cmdpt8iFw = new Command(_namerLmlSmI)
		const _returnValueWONBAbX = await _cmdpt8iFw._hasImplicitHelpCommand()
		const _namesu9bl6IR = "yVywWAWs71OcBiM6SLs7zfU58F9YTlXBNSnj9GfJVLMcYOwodKFxyxivJz4rSanJSx";
		const _returnValueap9NyAQ = await _cmdpt8iFw.arguments(_namesu9bl6IR)
		const _returnValuemMrup4d = await _Help9B2Y3n.visibleOptions(_cmdpt8iFw)
		const __namea0c7rFD = {
		
	}
		const __aliasesVCWRnh = {
		
	}
		const _parentrZZaQ5t = "yuFZfVFMJoscByDBnwWHN";
		const _returnValuean4qxI = []
		const _usagerLwlNlv = () => { return _returnValuean4qxI };
		const _cmdmd12QSZ = {
			"_name": __namea0c7rFD,
		"_aliases": __aliasesVCWRnh,
		"parent": _parentrZZaQ5t,
		"usage": _usagerLwlNlv
	}
		const _returnValuev4x3dwg = await _Help9B2Y3n.commandUsage(_cmdmd12QSZ)
	});

	it('test for Help', async () => {
		const _Helpb8sxUYt = new Help()
		const __namePirTptB = {
		
	}
		const _returnValueiluzjr = null;
		const _arrayValueVH2ibJG = () => { return _returnValueiluzjr };
		const __aliasesS3F3Nq = [_arrayValueVH2ibJG]
		const _parentWY52AcE = "ioMVgB8m6djDStj2HFGrBRrBm8a4dqOIWIeXnvSnzNSJuc84n2hmWG8DFFrQNxoIK";
		const _arrayValueExdAuza = true;
		const _arrayValueHB4RtZD = undefined;
		const _arrayValueUJhu3Zv = 4.447321422997135;
		const _arrayValue2QYdpf = "eiNAwNaM3BeF81ScVD2oeKKkzeMjb";
		const _returnValueYr5XRIo = [_arrayValue2QYdpf]
		const _arrayValueW3rWXRG = () => { return _returnValueYr5XRIo };
		const _arrayValueEztlH4z = null;
		const _arrayValuej8eHO3W = [_arrayValueHB4RtZD, _arrayValueUJhu3Zv, _arrayValueW3rWXRG, _arrayValueEztlH4z]
		const _returnValueaCu79x2 = [_arrayValueExdAuza, _arrayValuej8eHO3W]
		const _usagerqrIWLL = () => { return _returnValueaCu79x2 };
		const _cmdsQ3m84A = {
			"_name": __namePirTptB,
		"_aliases": __aliasesS3F3Nq,
		"parent": _parentWY52AcE,
		"usage": _usagerqrIWLL
	}
		const _returnValueNNfTYEe = await _Helpb8sxUYt.commandUsage(_cmdsQ3m84A)
		const _returnValuek4YTbPK = "9nQSIvsMlnY8ABONra6JfXYSl2bBtlyw";
		const _nameaP5LcKo = () => { return _returnValuek4YTbPK };
		const _descriptionKJQAtVi = 6.787708416053885;
		const _optionSgIyylf = new Argument(_nameaP5LcKo, _descriptionKJQAtVi)
		const _valueBdc4Bc = {
		
	}
		const _returnValueNwvhDwk = "ibnWExQcjiYOTQfaGy9nLHamBSS4BivOtHMJICkIgu4HLS7jxAcJKifXEwOK66K";
		const _concatxnt9RPG = () => { return _returnValueNwvhDwk };
		const _previousXAbOOZC = {
			"concat": _concatxnt9RPG
	}
		const _returnValueP2q1dad = await _optionSgIyylf._concatValue(_valueBdc4Bc, _previousXAbOOZC)
		const _valuelPDddAg = true;
		const _returnValuezwW7bjo = -6.872360099636998;
		const _concatcHG8CrX = () => { return _returnValuezwW7bjo };
		const _previouss6ybz6w = {
			"concat": _concatcHG8CrX
	}
		const _returnValuePhdWNGT = await _optionSgIyylf._concatValue(_valuelPDddAg, _previouss6ybz6w)
		const _returnValuerq3Ev8M = await _Helpb8sxUYt.optionDescription(_optionSgIyylf)
		const _cmdFMaRVI = "UbjNAU9SzFx4XPAx";
		const _helperARdEgol = "B1UjbHY6SHInfYMQD3fhn1hHoRwV7sE6bofQKQfH8q";
		const _returnValueafrJXWl = await _Helpb8sxUYt.longestArgumentTermLength(_cmdFMaRVI, _helperARdEgol)
		const _returnValuefBXAn2b = false;
		const _arrayValueY7rBjTp = () => { return _returnValuefBXAn2b };
		const _arrayValuenpZabW7 = "QTDYBA6LawjSpOYFMFV";
		const _cmdhphvxWB = [_arrayValueY7rBjTp, _arrayValuenpZabW7]
		const _returnValuexQAfJ2p = await _Helpb8sxUYt.visibleCommands(_cmdhphvxWB)
	});
})