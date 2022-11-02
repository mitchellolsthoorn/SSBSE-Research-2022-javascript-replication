export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpyMsvwdU = new Help()
		const __nameSe8A2ce = {
		
	}
		const __aliaseshwHrSLS = {
		
	}
		const _parentA8rLj9U = {
		
	}
		const _returnValueAjpl41 = true;
		const _usageQwDVeB = () => { return _returnValueAjpl41 };
		const _cmdM0KIx2Z = {
			"_name": __nameSe8A2ce,
		"_aliases": __aliaseshwHrSLS,
		"parent": _parentA8rLj9U,
		"usage": _usageQwDVeB
	}
		const _returnValueiGReFkY = await _HelpyMsvwdU.commandUsage(_cmdM0KIx2Z)
		const __namek3DASYk = {
		
	}
		const __aliasescZzlpi9 = {
		
	}
		const _parentWbcveDH = {
		
	}
		const _returnValueQJU1Ldy = undefined;
		const _usagedeickKz = () => { return _returnValueQJU1Ldy };
		const _cmdM2wtrni = {
			"_name": __namek3DASYk,
		"_aliases": __aliasescZzlpi9,
		"parent": _parentWbcveDH,
		"usage": _usagedeickKz
	}
		const _returnValueYKa9oMW = await _HelpyMsvwdU.commandUsage(_cmdM2wtrni)
		const _argChoicesmP7g9b6 = {
		
	}
		const _negateRQ9Phln = "New6YTGWlv6Re7dc09HmyaNtJaE";
		const _defaultValuegSKXnVL = undefined;
		const _defaultValueDescriptionUCPBrvJ = null;
		const _envVarCjm1Not = undefined;
		const _descriptionjapvGg4 = undefined;
		const _optionXxKAUj = {
			"argChoices": _argChoicesmP7g9b6,
		"negate": _negateRQ9Phln,
		"defaultValue": _defaultValuegSKXnVL,
		"defaultValueDescription": _defaultValueDescriptionUCPBrvJ,
		"envVar": _envVarCjm1Not,
		"description": _descriptionjapvGg4
	}
		const _returnValueR1CgnYT = await _HelpyMsvwdU.optionDescription(_optionXxKAUj)
	});

	it('test for Help', async () => {
		const _Helpj1Xbbzc = new Help()
		const _arrayValueHXjtwGm = "NV8YDJujlvQHAmWeugTiIJyGCV2z9fdxQSvI6tjKeDVSCtS99nO4CC4qllvX7oLK2NFVf";
		const _cmdE55hSP = [_arrayValueHXjtwGm]
		const _sortSubcommandstFOzjFA = null;
		const _returnValueFuiLAqd = undefined;
		const _subcommandTermTvnW0CA = () => { return _returnValueFuiLAqd };
		const _helperVQwjYm = {
			"sortSubcommands": _sortSubcommandstFOzjFA,
		"subcommandTerm": _subcommandTermTvnW0CA
	}
		const _returnValueAPpuQ2C = await _Helpj1Xbbzc.longestSubcommandTermLength(_cmdE55hSP, _helperVQwjYm)
		const _arrayValuek74pps5 = "nLn1K";
		const _arrayValue4Ru7R8 = undefined;
		const _arrayValueYREHy7 = null;
		const _arrayValueMLrZIwH = [_arrayValuek74pps5, _arrayValue4Ru7R8, _arrayValueYREHy7]
		const _arrayValueENqfSyv = -2.526024705104226;
		const _arrayValueGYcDZpa = -1.5113475944668817;
		const _cmdqmt074 = [_arrayValueMLrZIwH, _arrayValueENqfSyv, _arrayValueGYcDZpa]
		const _returnValuedFKIQa = true;
		const _longestOptionTermLengthRhNm76 = () => { return _returnValuedFKIQa };
		const _returnValuehiOZyq1 = -2.6336316046399153;
		const _longestSubcommandTermLengthol505tQ = () => { return _returnValuehiOZyq1 };
		const _returnValueft8SA3j = -8.590410765436026;
		const _longestArgumentTermLengthkcmUM8E = () => { return _returnValueft8SA3j };
		const _helperV9jnL8Y = {
			"longestOptionTermLength": _longestOptionTermLengthRhNm76,
		"longestSubcommandTermLength": _longestSubcommandTermLengthol505tQ,
		"longestArgumentTermLength": _longestArgumentTermLengthkcmUM8E
	}
		const _returnValueoT2S0cb = await _Helpj1Xbbzc.padWidth(_cmdqmt074, _helperV9jnL8Y)
	});

	it('test for Help', async () => {
		const _HelpQyBzkn4 = new Help()
		const _flagsSn5kHmk = null;
		const _optionr93k9mV = {
			"flags": _flagsSn5kHmk
	}
		const _returnValue5hFx2f = await _HelpQyBzkn4.optionTerm(_optionr93k9mV)
		const _argChoicesNlNKJ6V = {
		
	}
		const _returnValueyMa0Orl = "2eEdz9QGie1qJcgrpH5HSyiGLtVeRzCcpJhUbrr9qjegZzO1dme6JfFAYsgTOI3gUxi9esWxTIO7lywZYGfCt6lh0nJOuuaCWun";
		const _negateq7gxBdA = () => { return _returnValueyMa0Orl };
		const _defaultValuelmNKiN8 = undefined;
		const _returnValueJKtIqAj = true;
		const _defaultValueDescriptionZHUtSSK = () => { return _returnValueJKtIqAj };
		const _envVarWDeLXPm = undefined;
		const _returnValueCKrrflu = 9.258992658470476;
		const _arrayValuewi01SYP = () => { return _returnValueCKrrflu };
		const _arrayValuefq78q0w = [_arrayValuewi01SYP]
		const _arrayValueQVo3w1a = false;
		const _descriptionm3WVsA6 = [_arrayValuefq78q0w, _arrayValueQVo3w1a]
		const _optionPkJMSQY = {
			"argChoices": _argChoicesNlNKJ6V,
		"negate": _negateq7gxBdA,
		"defaultValue": _defaultValuelmNKiN8,
		"defaultValueDescription": _defaultValueDescriptionZHUtSSK,
		"envVar": _envVarWDeLXPm,
		"description": _descriptionm3WVsA6
	}
		const _returnValuekPGpQBd = await _HelpQyBzkn4.optionDescription(_optionPkJMSQY)
	});

	it('test for Help', async () => {
		const _HelptFBqNIN = new Help()
		const __argsx3XyyfI = {
		
	}
		const __nameXd20em4 = "lmuFGbBogmnqKdodRePDVbSbBG44fnN";
		const __aliases9b5T3d = {
		
	}
		const _optionskP9o9Fj = {
		
	}
		const _cmdE21J81 = {
			"_args": __argsx3XyyfI,
		"_name": __nameXd20em4,
		"_aliases": __aliases9b5T3d,
		"options": _optionskP9o9Fj
	}
		const _returnValueyRPaWOV = await _HelptFBqNIN.subcommandTerm(_cmdE21J81)
		const _arrayValueLJ8dUnK = "LtgxS1PMFGMaJqcplbOPSZ";
		const _arrayValueDv9khTn = -7.2005790918014;
		const _arrayValueZlFaB9 = undefined;
		const _returnValueDx3TKTC = [_arrayValueLJ8dUnK, _arrayValueDv9khTn, _arrayValueZlFaB9]
		const _descriptionfuOeF2T = () => { return _returnValueDx3TKTC };
		const _cmdqrTpYo = {
			"description": _descriptionfuOeF2T
	}
		const _returnValueH5ckU5Y = await _HelptFBqNIN.subcommandDescription(_cmdqrTpYo)
	});

	it('test for Help', async () => {
		const _Helpn70sB1d = new Help()
		const _returnValueCyAJJxI = 1.0053942840726453;
		const _descriptionjZ80Hfr = () => { return _returnValueCyAJJxI };
		const _cmdhD2VJfQ = {
			"description": _descriptionjZ80Hfr
	}
		const _returnValuexJCgPwk = await _Helpn70sB1d.commandDescription(_cmdhD2VJfQ)
		const _cmdnVgGrZA = undefined;
		const _returnValuefUnUVX4 = await _Helpn70sB1d.subcommandDescription(_cmdnVgGrZA)
	});

	it('test for Help', async () => {
		const _HelptiquyfX = new Help()
		const _argChoiceskzMUHbp = {
		
	}
		const _defaultValuewkjfPdT = undefined;
		const _defaultValueDescriptionkW9rmeJ = "Pg9kumO63Qe4yUQzOs7Ac2pGCywegGm61UbSJCP0KrA8";
		const _descriptionR5ui5PQ = {
		
	}
		const _argumentsrdk0bl = {
			"argChoices": _argChoiceskzMUHbp,
		"defaultValue": _defaultValuewkjfPdT,
		"defaultValueDescription": _defaultValueDescriptionkW9rmeJ,
		"description": _descriptionR5ui5PQ
	}
		const _returnValuershef84 = await _HelptiquyfX.argumentDescription(_argumentsrdk0bl)
		const _argChoicesZHdjyow = {
		
	}
		const _negatebsw8A61 = null;
		const _defaultValuedGCH30 = undefined;
		const _defaultValueDescriptionIJ3vHvG = null;
		const _envVaroUmJ4fp = undefined;
		const _descriptionMK5ewt4 = "ETig2JJv8EJ";
		const _optionlko41l = {
			"argChoices": _argChoicesZHdjyow,
		"negate": _negatebsw8A61,
		"defaultValue": _defaultValuedGCH30,
		"defaultValueDescription": _defaultValueDescriptionIJ3vHvG,
		"envVar": _envVaroUmJ4fp,
		"description": _descriptionMK5ewt4
	}
		const _returnValued5xZajk = await _HelptiquyfX.optionDescription(_optionlko41l)
		const _flagstpNiX67 = undefined;
		const _optionrOXTsx = {
			"flags": _flagstpNiX67
	}
		const _returnValue4umNIq = await _HelptiquyfX.optionTerm(_optionrOXTsx)
		const _returnValueIsHyMar = null;
		const _descriptionWime3xp = () => { return _returnValueIsHyMar };
		const _cmdqx4mjf = {
			"description": _descriptionWime3xp
	}
		const _returnValueprYjzeE = await _HelptiquyfX.subcommandDescription(_cmdqx4mjf)
	});

	it('test for Help', async () => {
		const _HelpKa1ahJ4 = new Help()
		const _optionsahWO9DE = {
		
	}
		const __hasHelpOptionSgxWvs0 = -5.253551282494349;
		const __helpShortFlagdAuyeyB = false;
		const _returnValueGuBczQx = null;
		const __findOptionMycUzY = () => { return _returnValueGuBczQx };
		const __helpLongFlaguysQ6m = null;
		const _returnValuedLO6zdf = {
		
	}
		const _createOptionFXuDxBf = () => { return _returnValuedLO6zdf };
		const _returnValueBe8kMSS = null;
		const __helpDescriptionj7IUXqZ = () => { return _returnValueBe8kMSS };
		const __helpFlagsqvnRhw = false;
		const _cmdCwDkLUA = {
			"options": _optionsahWO9DE,
		"_hasHelpOption": __hasHelpOptionSgxWvs0,
		"_helpShortFlag": __helpShortFlagdAuyeyB,
		"_findOption": __findOptionMycUzY,
		"_helpLongFlag": __helpLongFlaguysQ6m,
		"createOption": _createOptionFXuDxBf,
		"_helpDescription": __helpDescriptionj7IUXqZ,
		"_helpFlags": __helpFlagsqvnRhw
	}
		const _returnValueBANPJuK = await _HelpKa1ahJ4.visibleOptions(_cmdCwDkLUA)
		const _cmdwCv2WZ = false;
		const _returnValueSRAF3vA = await _HelpKa1ahJ4.subcommandDescription(_cmdwCv2WZ)
		const _returnValueJOe4Tsx = "BLYEMpghAOokjleX";
		const _cmdTT37Afj = () => { return _returnValueJOe4Tsx };
		const _returnValueFldhrx = await _HelpKa1ahJ4.visibleArguments(_cmdTT37Afj)
		const _returnValuepJOzbT2 = true;
		const _nameDQvNH0 = () => { return _returnValuepJOzbT2 };
		const _argumentwmc1Mi = {
			"name": _nameDQvNH0
	}
		const _returnValueZ17qg34 = await _HelpKa1ahJ4.argumentTerm(_argumentwmc1Mi)
		const _returnValueJ8Sdfpx = {
		
	}
		const _description2KcB9K = () => { return _returnValueJ8Sdfpx };
		const _cmdv03ACi = {
			"description": _description2KcB9K
	}
		const _returnValuec6wNap = await _HelpKa1ahJ4.subcommandDescription(_cmdv03ACi)
	});

	it('test for Help', async () => {
		const _HelpSTzm0aJ = new Help()
		const _arrayValueKeunFPT = 8.924041590670633;
		const _arrayValueTmzThP = "Nj26u1EiulSfNcjK6YDWvDK";
		const _arrayValuebRlX3L = undefined;
		const _arrayValuesWW1h2n = null;
		const _arrayValueAuOkSnS = [_arrayValuebRlX3L, _arrayValuesWW1h2n]
		const _arrayValueYYGieTp = [_arrayValueAuOkSnS]
		const _returnValueizDcuTf = [_arrayValueKeunFPT, _arrayValueTmzThP, _arrayValueYYGieTp]
		const _nameGEUhocV = () => { return _returnValueizDcuTf };
		const _argumentKFzyDWU = {
			"name": _nameGEUhocV
	}
		const _returnValuem5qsnGa = await _HelpSTzm0aJ.argumentTerm(_argumentKFzyDWU)
		const _cmdHZahxBC = undefined;
		const _sortSubcommandsFSB3xCr = false;
		const _returnValueAWTw23U = undefined;
		const _subcommandTermOwY4DVK = () => { return _returnValueAWTw23U };
		const _helperjoPQnNv = {
			"sortSubcommands": _sortSubcommandsFSB3xCr,
		"subcommandTerm": _subcommandTermOwY4DVK
	}
		const _returnValueUYNXa7c = await _HelpSTzm0aJ.formatHelp(_cmdHZahxBC, _helperjoPQnNv)
	});

	it('test for Help', async () => {
		const _Helphi7mgA = new Help()
		const _returnValuejcqtb8b = -2.1187414873941535;
		const _namefCiiAkS = () => { return _returnValuejcqtb8b };
		const _argumentazd9s97 = {
			"name": _namefCiiAkS
	}
		const _returnValuewvoyB4h = await _Helphi7mgA.argumentTerm(_argumentazd9s97)
		const _arrayValuemimm7V = "szxOGy6KRefjzOpwwOO9ZoOUOyBdQEju673gpojQcmTEYyMo3elnaxlvRYE2dDLpdHhqG73lasDCgEkLERB";
		const _optionsChqmEoE = [_arrayValuemimm7V]
		const __hasHelpOptioniCbYz7 = "Hjk5MU0GKQRhDi1eGE9wDoibgHFT5ihe0g8H3P1VauOx6R2O3xV4";
		const __helpShortFlagWGpKyeK = -1.3821064019736742;
		const _returnValueItMAn7 = undefined;
		const __findOptionRNUSJVt = () => { return _returnValueItMAn7 };
		const __helpLongFlagSiAABtS = true;
		const _returnValuesyvaKm4 = "tJgqyc5FBe94Tk0V5x";
		const _createOptionU43GkrX = () => { return _returnValuesyvaKm4 };
		const __helpDescriptionRnSEM5a = {
		
	}
		const __helpFlagscAQCbd = 1.8495732575347574;
		const _cmdwrFK697 = {
			"options": _optionsChqmEoE,
		"_hasHelpOption": __hasHelpOptioniCbYz7,
		"_helpShortFlag": __helpShortFlagWGpKyeK,
		"_findOption": __findOptionRNUSJVt,
		"_helpLongFlag": __helpLongFlagSiAABtS,
		"createOption": _createOptionU43GkrX,
		"_helpDescription": __helpDescriptionRnSEM5a,
		"_helpFlags": __helpFlagscAQCbd
	}
		const _returnValueavQIq75 = await _Helphi7mgA.visibleOptions(_cmdwrFK697)
		const _returnValueXwGRc5 = null;
		const _matchEhtqLg4 = () => { return _returnValueXwGRc5 };
		const _returnValuel5lfLb = {
		
	}
		const _substrDcldrbQ = () => { return _returnValuel5lfLb };
		const _strEqgUqrs = {
			"match": _matchEhtqLg4,
		"substr": _substrDcldrbQ
	}
		const _widthmVi53Mq = -4.054972764477212;
		const _indent3N0nWL = -9.848129797633261;
		const _minColumnWidthYYx8KUV = -1.1733150250871578;
		const _returnValueOMj3e0Q = await _Helphi7mgA.wrap(_strEqgUqrs, _widthmVi53Mq, _indent3N0nWL, _minColumnWidthYYx8KUV)
		const _arrayValueIL2fsI = "XTxU36zDNBQgBBrSo3PAN5tDvdEr2RZE7naAm0RxAXxtUp9SKMiucV9dTeNaPV8FAx7eU0uLg4CoDSRsab7XW";
		const _arrayValueFIYQpe6 = true;
		const _arrayValueFmYen31 = undefined;
		const _arrayValuevslBz0N = 1.2758883518731245;
		const _arrayValuea1OsYZw = undefined;
		const _arrayValueENIpvin = [_arrayValuevslBz0N, _arrayValuea1OsYZw]
		const _returnValueDM4sMC = [_arrayValueIL2fsI, _arrayValueFIYQpe6, _arrayValueFmYen31, _arrayValueENIpvin]
		const _cmdol4U9dn = () => { return _returnValueDM4sMC };
		const _helper80BoBi = "yG25kZPqa1Fr";
		const _returnValueYc2fDB7 = await _Helphi7mgA.longestOptionTermLength(_cmdol4U9dn, _helper80BoBi)
	});

	it('test for Help', async () => {
		const _HelpZFL0Gbe = new Help()
		const _returnValueFpdxLKr = 8.533268489929082;
		const _matchtru7q7u = () => { return _returnValueFpdxLKr };
		const _returnValueHeSQ2Fn = null;
		const _substrTOi5xf = () => { return _returnValueHeSQ2Fn };
		const _strKdwmosg = {
			"match": _matchtru7q7u,
		"substr": _substrTOi5xf
	}
		const _widthtveS1F5 = 3.2388876668117668;
		const _indentr1Mkyw = 2.8936157921959786;
		const _minColumnWidthJbu2S3L = 7.846701571382681;
		const _returnValueh9lyK0M = await _HelpZFL0Gbe.wrap(_strKdwmosg, _widthtveS1F5, _indentr1Mkyw, _minColumnWidthJbu2S3L)
		const _optionsMCS84q = {
		
	}
		const __hasHelpOptionuiZYMEI = -1.7470360289456828;
		const __helpShortFlagD3fWyuM = undefined;
		const _arrayValueSkG3x09 = -1.9130824647490279;
		const _arrayValueKUeOaXV = undefined;
		const _arrayValuenmL7etJ = null;
		const _returnValuewrC5yRr = null;
		const _arrayValuehN0YMP6 = () => { return _returnValuewrC5yRr };
		const __findOptionG421yIE = [_arrayValueSkG3x09, _arrayValueKUeOaXV, _arrayValuenmL7etJ, _arrayValuehN0YMP6]
		const __helpLongFlagvAylbGG = -1.7970373011137823;
		const _returnValueH6QBff1 = -4.4403167404342145;
		const _createOptionaEqfVVW = () => { return _returnValueH6QBff1 };
		const __helpDescriptionlvLz328 = -4.750473333152101;
		const __helpFlagsTVLYLs2 = "Kc1HP3ke2GdNgkBHvbyAbIylDCBnH1w70cX7MBjM0X5zo5Rwyk";
		const _cmdp8YBTxF = {
			"options": _optionsMCS84q,
		"_hasHelpOption": __hasHelpOptionuiZYMEI,
		"_helpShortFlag": __helpShortFlagD3fWyuM,
		"_findOption": __findOptionG421yIE,
		"_helpLongFlag": __helpLongFlagvAylbGG,
		"createOption": _createOptionaEqfVVW,
		"_helpDescription": __helpDescriptionlvLz328,
		"_helpFlags": __helpFlagsTVLYLs2
	}
		const _returnValuegNC3MLs = await _HelpZFL0Gbe.visibleOptions(_cmdp8YBTxF)
		const _argChoicesaUoR10w = {
		
	}
		const _defaultValueM01Nsrs = undefined;
		const _defaultValueDescriptionXgUZAZb = undefined;
		const _descriptionNBsmqam = "oa0wYi8Queik4YYQplMAUQGe34t0ntDIJWSbtJfOuhcnlhwV8CeTKzHkjHifMJBECVIIaOuAI4JpnphPoLAnaWNQN";
		const _argumentrsl2LLD = {
			"argChoices": _argChoicesaUoR10w,
		"defaultValue": _defaultValueM01Nsrs,
		"defaultValueDescription": _defaultValueDescriptionXgUZAZb,
		"description": _descriptionNBsmqam
	}
		const _returnValueRZ58XCZ = await _HelpZFL0Gbe.argumentDescription(_argumentrsl2LLD)
		const __namef5MvbPD = {
		
	}
		const __aliasesWO34Yo = {
		
	}
		const _parentcaTxCfv = "DG";
		const _returnValueCxvw9Qs = true;
		const _usageKafche = () => { return _returnValueCxvw9Qs };
		const _cmdPDYBU9D = {
			"_name": __namef5MvbPD,
		"_aliases": __aliasesWO34Yo,
		"parent": _parentcaTxCfv,
		"usage": _usageKafche
	}
		const _returnValuem4mXurA = await _HelpZFL0Gbe.commandUsage(_cmdPDYBU9D)
	});

	it('test for Help', async () => {
		const _HelpIiHM5u5 = new Help()
		const _arrayValueQsbgccH = undefined;
		const _cmdP0Zo7EF = [_arrayValueQsbgccH]
		const _returnValueHB6mRTz = {
		
	}
		const _visibleArgumentsNt86KGQ = () => { return _returnValueHB6mRTz };
		const _argumentTermwO2WDYG = "iog2";
		const _helpergDiQDl = {
			"visibleArguments": _visibleArgumentsNt86KGQ,
		"argumentTerm": _argumentTermwO2WDYG
	}
		const _returnValuefpENWXE = await _HelpIiHM5u5.longestArgumentTermLength(_cmdP0Zo7EF, _helpergDiQDl)
		const __namelZQDTNR = {
		
	}
		const __aliasesV48ywsw = {
		
	}
		const _parentJ55Ufi = null;
		const _returnValuekz3LSQ8 = null;
		const _usageqBYfXeU = () => { return _returnValuekz3LSQ8 };
		const _cmdkqiNjI = {
			"_name": __namelZQDTNR,
		"_aliases": __aliasesV48ywsw,
		"parent": _parentJ55Ufi,
		"usage": _usageqBYfXeU
	}
		const _returnValueKPrSivJ = await _HelpIiHM5u5.commandUsage(_cmdkqiNjI)
		const __nameRnwpuL = {
		
	}
		const __aliasesrw0J63B = {
		
	}
		const _parentyRB85dJ = {
		
	}
		const _returnValueWKmfNjV = false;
		const _usageBOZEEg = () => { return _returnValueWKmfNjV };
		const _cmdhk691E1 = {
			"_name": __nameRnwpuL,
		"_aliases": __aliasesrw0J63B,
		"parent": _parentyRB85dJ,
		"usage": _usageBOZEEg
	}
		const _returnValueKSJT0Oy = await _HelpIiHM5u5.commandUsage(_cmdhk691E1)
	});

	it('test for Help', async () => {
		const _HelpfuyLwbS = new Help()
		const _argChoicesq9aYnF3 = {
		
	}
		const _negatef9OPjkN = {
		
	}
		const _arrayValueKEavw5T = 4.866174615895844;
		const _arrayValueWouInSZ = true;
		const _arrayValueVkhQOY7 = "nlnPyuPhWHmlBgCuWXXaKlwyAsADONqPa0JQLKi2HyjftQoKBydzVxO5vsjw";
		const _arrayValueFvvp1VB = "9iAkCVeavPFvD1FWVSWMhhJT4BPtfmIVPeZVMV2dNHwoHzzyKIb8lYnJ7bPCA8ZgjUPlzdnWTiu2IKOAXbJKAzDoyZjHEhwbwg";
		const _arrayValuebLVRFil = undefined;
		const _arrayValuehZE7V4Z = -7.6570721817983;
		const _arrayValueBVmkPE = 9.777493980954805;
		const _arrayValueQqy4hLv = [_arrayValuebLVRFil, _arrayValuehZE7V4Z, _arrayValueBVmkPE]
		const _arrayValueIHd4mV = undefined;
		const _arrayValueamGPKsC = [_arrayValueFvvp1VB, _arrayValueQqy4hLv, _arrayValueIHd4mV]
		const _arrayValuedNs5Cry = undefined;
		const _defaultValueAjEcdQR = [_arrayValueKEavw5T, _arrayValueWouInSZ, _arrayValueVkhQOY7, _arrayValueamGPKsC, _arrayValuedNs5Cry]
		const _defaultValueDescriptioncW9TyCe = "kIzNPS1J1CKfYCPbXXZdxzjTXGLwXSgrUHDcu4IVaUv3hAol6OlUkNMGj4PqeQ4ALW";
		const _envVarlbbRPBE = undefined;
		const _descriptionQwxAcUW = undefined;
		const _optiongLhL6B9 = {
			"argChoices": _argChoicesq9aYnF3,
		"negate": _negatef9OPjkN,
		"defaultValue": _defaultValueAjEcdQR,
		"defaultValueDescription": _defaultValueDescriptioncW9TyCe,
		"envVar": _envVarlbbRPBE,
		"description": _descriptionQwxAcUW
	}
		const _returnValueDU0bZLs = await _HelpfuyLwbS.optionDescription(_optiongLhL6B9)
		const _commandsuIwJir3 = {
		
	}
		const _returnValuekQSh9fw = null;
		const __hasImplicitHelpCommandnSKwu5K = () => { return _returnValuekQSh9fw };
		const __helpCommandnameAndArgsiNdqQwv = {
		
	}
		const _returnValuejKMxypp = null;
		const _createCommandgUMkz1 = () => { return _returnValuejKMxypp };
		const __helpCommandDescriptionfNPlPmF = 3.5052344967861355;
		const _cmdbhnq0V = {
			"commands": _commandsuIwJir3,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandnSKwu5K,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsiNdqQwv,
		"createCommand": _createCommandgUMkz1,
		"_helpCommandDescription": __helpCommandDescriptionfNPlPmF
	}
		const _returnValueQWPZUN8 = await _HelpfuyLwbS.visibleCommands(_cmdbhnq0V)
		const _cmdKEiA67m = undefined;
		const _sortSubcommandsJhESTBc = -6.859245345877177;
		const _returnValueLyVhp0M = null;
		const _arrayValueNGPsRvv = () => { return _returnValueLyVhp0M };
		const _arrayValueaWWrESk = null;
		const _arrayValuelGU9uuL = null;
		const _arrayValuer7e1D4a = false;
		const _arrayValueyTpJnxZ = [_arrayValuelGU9uuL, _arrayValuer7e1D4a]
		const _arrayValuesbsTbVX = null;
		const _returnValuerrWOvpp = [_arrayValueNGPsRvv, _arrayValueaWWrESk, _arrayValueyTpJnxZ, _arrayValuesbsTbVX]
		const _subcommandTermWiOJHqq = () => { return _returnValuerrWOvpp };
		const _helperwRbxAoR = {
			"sortSubcommands": _sortSubcommandsJhESTBc,
		"subcommandTerm": _subcommandTermWiOJHqq
	}
		const _returnValueXWEzlRx = await _HelpfuyLwbS.formatHelp(_cmdKEiA67m, _helperwRbxAoR)
		const _cmdfpeDPej = 0.7116386763667535;
		const _returnValuee2UzAw2 = {
		
	}
		const _visibleArgumentsMjPaQ4T = () => { return _returnValuee2UzAw2 };
		const _argumentTermXoDe0fE = "BVscdGLXJ2pydeE";
		const _helperZMwN47O = {
			"visibleArguments": _visibleArgumentsMjPaQ4T,
		"argumentTerm": _argumentTermXoDe0fE
	}
		const _returnValuenHjsYq7 = await _HelpfuyLwbS.longestArgumentTermLength(_cmdfpeDPej, _helperZMwN47O)
	});

	it('test for Help', async () => {
		const _HelpUUQjBiU = new Help()
		const _cmdywA3plR = undefined;
		const _arrayValueKOKCdDI = {
		
	}
		const _arrayValueAGPfmQZ = "BHUxtYuvCBB1VDKS7jwA42iBWiuVXkedRKrj9cLYNpkbCmdKmHaS5c2YWUQTJaCj9U3Mw9ALW6Q2vIsuIGYVxTPm7zvMUIJy";
		const _helpermotMsBM = [_arrayValueKOKCdDI, _arrayValueAGPfmQZ]
		const _returnValueVJKqpiP = await _HelpUUQjBiU.padWidth(_cmdywA3plR, _helpermotMsBM)
		const __argshyLZ9XL = {
		
	}
		const __nameYYbEt6 = 8.86239685552226;
		const __aliases3De7AJ = {
		
	}
		const _optionsFTPYDZ = {
		
	}
		const _cmdn4GdJkQ = {
			"_args": __argshyLZ9XL,
		"_name": __nameYYbEt6,
		"_aliases": __aliases3De7AJ,
		"options": _optionsFTPYDZ
	}
		const _returnValuejGjZISK = await _HelpUUQjBiU.subcommandTerm(_cmdn4GdJkQ)
		const _argChoicesTL1L9IT = {
		
	}
		const _negateioRTX7j = null;
		const _defaultValuegpfkrL = undefined;
		const _arrayValuedFuHpLk = {
		
	}
		const _arrayValueo0iviTJ = null;
		const _defaultValueDescriptionyIDboUZ = [_arrayValuedFuHpLk, _arrayValueo0iviTJ]
		const _envVarmP3wcV = undefined;
		const _descriptionAWJ5H5R = false;
		const _optioniC3HAZQ = {
			"argChoices": _argChoicesTL1L9IT,
		"negate": _negateioRTX7j,
		"defaultValue": _defaultValuegpfkrL,
		"defaultValueDescription": _defaultValueDescriptionyIDboUZ,
		"envVar": _envVarmP3wcV,
		"description": _descriptionAWJ5H5R
	}
		const _returnValueJ4RjEJe = await _HelpUUQjBiU.optionDescription(_optioniC3HAZQ)
		const _returnValuerRnhk1X = false;
		const _nameQFjGEou = () => { return _returnValuerRnhk1X };
		const _argumenth2yy03B = {
			"name": _nameQFjGEou
	}
		const _returnValuewLN5B2y = await _HelpUUQjBiU.argumentTerm(_argumenth2yy03B)
		const __argsFsKyhxC = {
		
	}
		const __nameYCovnC8 = 2.0397774842020784;
		const __aliasesxUliGGO = {
		
	}
		const _optionsFXpz9ys = {
		
	}
		const _cmdqNleS3t = {
			"_args": __argsFsKyhxC,
		"_name": __nameYCovnC8,
		"_aliases": __aliasesxUliGGO,
		"options": _optionsFXpz9ys
	}
		const _returnValuevK7yU1 = await _HelpUUQjBiU.subcommandTerm(_cmdqNleS3t)
	});

	it('test for Help', async () => {
		const _HelpaUB1Bq = new Help()
		const _argChoicesSMtN2y3 = {
		
	}
		const _negateXHkbIKZ = false;
		const _defaultValueuDdaXkR = undefined;
		const _defaultValueDescriptionadgnH0 = 0.02490733072950846;
		const _envVarfuvaDOt = -9.387051538817216;
		const _descriptionI4pGsRK = {
		
	}
		const _optionIox4Ohn = {
			"argChoices": _argChoicesSMtN2y3,
		"negate": _negateXHkbIKZ,
		"defaultValue": _defaultValueuDdaXkR,
		"defaultValueDescription": _defaultValueDescriptionadgnH0,
		"envVar": _envVarfuvaDOt,
		"description": _descriptionI4pGsRK
	}
		const _returnValueVAbMHq = await _HelpaUB1Bq.optionDescription(_optionIox4Ohn)
	});

	it('test for Help', async () => {
		const _HelpIFrp9au = new Help()
		const _cmdraUTxrj = undefined;
		const _returnValueYQ97rnr = "y3ibBtpW2iw41REvUy7OvmqJdo7dagVi3mv0SzwVkKebSmfdBvx7f938";
		const _visibleOptionsNoAAevD = () => { return _returnValueYQ97rnr };
		const _returnValuex0jMeCg = null;
		const _optionTermnFVbkAa = () => { return _returnValuex0jMeCg };
		const _helperqtAhIlB = {
			"visibleOptions": _visibleOptionsNoAAevD,
		"optionTerm": _optionTermnFVbkAa
	}
		const _returnValues6q9I6T = await _HelpIFrp9au.longestOptionTermLength(_cmdraUTxrj, _helperqtAhIlB)
		const __argsmCAz7PP = {
		
	}
		const __nameCjGgtFl = -9.624340298787583;
		const __aliasesKtEJ7wg = {
		
	}
		const _optionsEgUSMs7 = {
		
	}
		const _cmdUgCoBEQ = {
			"_args": __argsmCAz7PP,
		"_name": __nameCjGgtFl,
		"_aliases": __aliasesKtEJ7wg,
		"options": _optionsEgUSMs7
	}
		const _returnValuertVGuG = await _HelpIFrp9au.subcommandTerm(_cmdUgCoBEQ)
		const _arrayValueBlu5UCn = true;
		const _cmdBe7DFPJ = [_arrayValueBlu5UCn]
		const _returnValueJRLeyRZ = "CUA9qhSFPJeitrcgJOSBjHphC";
		const _visibleOptionsjgNAms = () => { return _returnValueJRLeyRZ };
		const _returnValue1732IX = "ZzBvevElY2H9IkfAocNDJLpJfLeC7lBUowtvuSGzwHSFbJtQydVnYRU07I";
		const _optionTermR3OSQDw = () => { return _returnValue1732IX };
		const _helperiUNmst = {
			"visibleOptions": _visibleOptionsjgNAms,
		"optionTerm": _optionTermR3OSQDw
	}
		const _returnValuePA7BCgh = await _HelpIFrp9au.longestOptionTermLength(_cmdBe7DFPJ, _helperiUNmst)
	});

	it('test for Help', async () => {
		const _HelpKFR8Er = new Help()
		const _flagsdTawUz = undefined;
		const _optionDZp19Mb = {
			"flags": _flagsdTawUz
	}
		const _returnValueEZ9qRrc = await _HelpKFR8Er.optionTerm(_optionDZp19Mb)
		const __argsDescriptionkL1nQVy = {
		
	}
		const __argsPUEnvBf = {
		
	}
		const _cmdnFv68Ex = {
			"_argsDescription": __argsDescriptionkL1nQVy,
		"_args": __argsPUEnvBf
	}
		const _returnValueiWrZuHz = await _HelpKFR8Er.visibleArguments(_cmdnFv68Ex)
		const _returnValueXPkd6W = "TXwQLpW8zMqjp6dYjQTODK23f9wqqDT";
		const _descriptiontAQIvle = () => { return _returnValueXPkd6W };
		const _cmdo3wYI92 = {
			"description": _descriptiontAQIvle
	}
		const _returnValuenYfiiU0 = await _HelpKFR8Er.commandDescription(_cmdo3wYI92)
		const _cmddKMLRt8 = false;
		const _sortSubcommandsC4Ns4no = {
		
	}
		const _returnValueriohJZ = "Eyohh9QlZpp7gTdKpTKOR9zpwgzRIgfxJI0flHGUIL7KNHUy3rfkDa19STyhOEsIzvSVSfPScjkwIVbRoE9cRX";
		const _subcommandTermoEem3CF = () => { return _returnValueriohJZ };
		const _helperTlrormZ = {
			"sortSubcommands": _sortSubcommandsC4Ns4no,
		"subcommandTerm": _subcommandTermoEem3CF
	}
		const _returnValuexgBeAsI = await _HelpKFR8Er.formatHelp(_cmddKMLRt8, _helperTlrormZ)
		const _cmdjiyJdnN = {
		
	}
		const _returnValuejXSEiBA = true;
		const _visibleArgumentsXydAgfT = () => { return _returnValuejXSEiBA };
		const _returnValueGVQXdG7 = undefined;
		const _argumentTermwB4jDjr = () => { return _returnValueGVQXdG7 };
		const _helperdLszSDF = {
			"visibleArguments": _visibleArgumentsXydAgfT,
		"argumentTerm": _argumentTermwB4jDjr
	}
		const _returnValueE0FcYWf = await _HelpKFR8Er.longestArgumentTermLength(_cmdjiyJdnN, _helperdLszSDF)
	});

	it('test for Help', async () => {
		const _HelpP5NijfX = new Help()
		const _arrayValueswR1Xy = []
		const _arrayValuensBG2O0 = undefined;
		const _argChoicesEsbWirs = [_arrayValueswR1Xy, _arrayValuensBG2O0]
		const _negateezDni6 = undefined;
		const _defaultValuemNWawfU = undefined;
		const _defaultValueDescriptionL8dbM9R = undefined;
		const _arrayValuewz8oMP4 = "tKiVxj9LmDPMSJ7PrH6H9hg3JWo1MbIE2Lk4dWNnNTSwxke7hrMU4M18ALgwXtvwKs5ESvgspRRhnlx4XgckSkY";
		const _arrayValuebF1EcXE = true;
		const _arrayValueMtzcG0F = "a1FQvU7CG2tLsIyqJlNo9083zgNh3oO9ey3ETdTksxIQkKmtyUSyVeMfIIjojlgdeNInYviDiFmhOsaw6n0PD";
		const _arrayValueYzYfBoO = []
		const _arrayValuewApUIP6 = -8.761112216373439;
		const _arrayValuel2uILYu = [_arrayValueMtzcG0F, _arrayValueYzYfBoO, _arrayValuewApUIP6]
		const _arrayValueeUaKXv7 = [_arrayValuewz8oMP4, _arrayValuebF1EcXE, _arrayValuel2uILYu]
		const _arrayValueYEtgN5j = undefined;
		const _envVarXS6g481 = [_arrayValueeUaKXv7, _arrayValueYEtgN5j]
		const _descriptionMmFNfnJ = true;
		const _optionCWULLAQ = {
			"argChoices": _argChoicesEsbWirs,
		"negate": _negateezDni6,
		"defaultValue": _defaultValuemNWawfU,
		"defaultValueDescription": _defaultValueDescriptionL8dbM9R,
		"envVar": _envVarXS6g481,
		"description": _descriptionMmFNfnJ
	}
		const _returnValueZi9r4C5 = await _HelpP5NijfX.optionDescription(_optionCWULLAQ)
		const _cmdD5jzRWz = null;
		const _sortSubcommandslxbFlHP = null;
		const _returnValueHFZvjIV = "tQPUKrSykKJyXtWI2pLMl5xRYk2fSJ6ISWr17nIf6qgjivzCCcWsAXm129unQSxiclVIiyFIb";
		const _subcommandTermKISEO3m = () => { return _returnValueHFZvjIV };
		const _helperurUe1sW = {
			"sortSubcommands": _sortSubcommandslxbFlHP,
		"subcommandTerm": _subcommandTermKISEO3m
	}
		const _returnValueaNIex18 = await _HelpP5NijfX.longestSubcommandTermLength(_cmdD5jzRWz, _helperurUe1sW)
		const __argsDescriptionTQfmIxI = {
		
	}
		const __argsJK6o8qg = {
		
	}
		const _cmdaWbcTZ5 = {
			"_argsDescription": __argsDescriptionTQfmIxI,
		"_args": __argsJK6o8qg
	}
		const _returnValuenccI4d7 = await _HelpP5NijfX.visibleArguments(_cmdaWbcTZ5)
	});

	it('test for Help', async () => {
		const _HelpBX4c9DM = new Help()
		const _returnValuecmIqAd = null;
		const _matchlFfns01 = () => { return _returnValuecmIqAd };
		const _substrzWVLdVk = null;
		const _strqJQ6JK = {
			"match": _matchlFfns01,
		"substr": _substrzWVLdVk
	}
		const _widthkSIIGFJ = 5.222415433808351;
		const _indentgqo2rjO = -3.49514536475529;
		const _minColumnWidthbg1Q180 = 9.697534587584798;
		const _returnValueotHeTbW = await _HelpBX4c9DM.wrap(_strqJQ6JK, _widthkSIIGFJ, _indentgqo2rjO, _minColumnWidthbg1Q180)
		const _argChoicesbSGVupR = {
		
	}
		const _negateIxArlZQ = null;
		const _defaultValuebz3X91e = undefined;
		const _defaultValueDescriptionTQkGY8O = undefined;
		const _envVardPRVIeL = undefined;
		const _descriptiondhHZ1GE = undefined;
		const _optionukAtKgw = {
			"argChoices": _argChoicesbSGVupR,
		"negate": _negateIxArlZQ,
		"defaultValue": _defaultValuebz3X91e,
		"defaultValueDescription": _defaultValueDescriptionTQkGY8O,
		"envVar": _envVardPRVIeL,
		"description": _descriptiondhHZ1GE
	}
		const _returnValueDxOfmay = await _HelpBX4c9DM.optionDescription(_optionukAtKgw)
		const _cmdpZcCmn = null;
		const _returnValueFnBpXEN = await _HelpBX4c9DM.subcommandDescription(_cmdpZcCmn)
	});

	it('test for Help', async () => {
		const _HelpVvTxdOW = new Help()
		const _argumentX3yEcKd = "5ImiRBFO2mKWyq";
		const _returnValue7UHITu = await _HelpVvTxdOW.argumentDescription(_argumentX3yEcKd)
	});

	it('test for Help', async () => {
		const _HelplXH7MP3 = new Help()
		const _arrayValuewBz7ND4 = false;
		const _arrayValueARvsX0o = []
		const _arrayValueNawJ0hF = "pBlRAI9n6lKoCOHnpF8APRDKCPGyUMiAQkEwedAtx2BEOWKvLunC1s";
		const _arrayValuehmoGksu = null;
		const _argChoicesIkG72Cl = [_arrayValuewBz7ND4, _arrayValueARvsX0o, _arrayValueNawJ0hF, _arrayValuehmoGksu]
		const _defaultValueUd1Gc9w = undefined;
		const _returnValueLNNIGCs = true;
		const _defaultValueDescriptionuKtWWkO = () => { return _returnValueLNNIGCs };
		const _description5MISLI = "bkGgR";
		const _argumentsMSqcpk = {
			"argChoices": _argChoicesIkG72Cl,
		"defaultValue": _defaultValueUd1Gc9w,
		"defaultValueDescription": _defaultValueDescriptionuKtWWkO,
		"description": _description5MISLI
	}
		const _returnValuedPcD2Rp = await _HelplXH7MP3.argumentDescription(_argumentsMSqcpk)
		const _returnValuedHjZWh1 = "UiV9XQnEqRcAEvUBuKQZvk5LSSBRpW";
		const _descriptionBJzKA62 = () => { return _returnValuedHjZWh1 };
		const _cmdZp7svMU = {
			"description": _descriptionBJzKA62
	}
		const _returnValuecgR20DQ = await _HelplXH7MP3.commandDescription(_cmdZp7svMU)
		const _argChoicesnmnxur = {
		
	}
		const _defaultValuegwMGldR = undefined;
		const _defaultValueDescriptionAtXA7Dz = false;
		const _description8vqiqL = null;
		const _argumentRtfxvc = {
			"argChoices": _argChoicesnmnxur,
		"defaultValue": _defaultValuegwMGldR,
		"defaultValueDescription": _defaultValueDescriptionAtXA7Dz,
		"description": _description8vqiqL
	}
		const _returnValueNIKrVvp = await _HelplXH7MP3.argumentDescription(_argumentRtfxvc)
	});

	it('test for Help', async () => {
		const _HelpC0e29Za = new Help()
		const __nameBo9CnNJ = {
		
	}
		const __aliasesRGUCsE = "zr65HamB1M7njfLKbrx";
		const _parentopyF9Ax = {
		
	}
		const _returnValueSLkXfdx = null;
		const _usagesGVETW2 = () => { return _returnValueSLkXfdx };
		const _cmdXT5c6qz = {
			"_name": __nameBo9CnNJ,
		"_aliases": __aliasesRGUCsE,
		"parent": _parentopyF9Ax,
		"usage": _usagesGVETW2
	}
		const _returnValueJXWqtFz = await _HelpC0e29Za.commandUsage(_cmdXT5c6qz)
		const _cmdY6lp4c8 = "Lxfi2BHeS3xl49edF5aExUeZBZucH9b";
		const _arrayValuegQt0hXm = -7.153134021766908;
		const _arrayValueHlAeN1 = 9.426386143253698;
		const _arrayValue4v0KUg = undefined;
		const _returnValueSIqWQpA = [_arrayValuegQt0hXm, _arrayValueHlAeN1, _arrayValue4v0KUg]
		const _visibleOptionsNODhQH = () => { return _returnValueSIqWQpA };
		const _returnValueSoua3Ui = -9.175175226434888;
		const _optionTermnpBS1C = () => { return _returnValueSoua3Ui };
		const _helperheicvkQ = {
			"visibleOptions": _visibleOptionsNODhQH,
		"optionTerm": _optionTermnpBS1C
	}
		const _returnValueIuHjvgr = await _HelpC0e29Za.longestOptionTermLength(_cmdY6lp4c8, _helperheicvkQ)
	});

	it('test for Help', async () => {
		const _HelpJ8AN2UC = new Help()
		const _argChoicesHoZDIaW = undefined;
		const _defaultValueCS36W2S = "b9RSFXIF";
		const _arrayValueXfBJmFs = null;
		const _arrayValuedljAVdt = undefined;
		const _defaultValueDescriptionIWSaRfd = [_arrayValueXfBJmFs, _arrayValuedljAVdt]
		const _returnValueQDDnu8H = "0N24RNykO34PQlfFQvb7FQpuX9lwbkAUl1n";
		const _descriptionhZRKxcO = () => { return _returnValueQDDnu8H };
		const _argumentYrBuTL = {
			"argChoices": _argChoicesHoZDIaW,
		"defaultValue": _defaultValueCS36W2S,
		"defaultValueDescription": _defaultValueDescriptionIWSaRfd,
		"description": _descriptionhZRKxcO
	}
		const _returnValueJvshg9d = await _HelpJ8AN2UC.argumentDescription(_argumentYrBuTL)
		const _returnValuepowUCJ = {
		
	}
		const _descriptionfAPGPGT = () => { return _returnValuepowUCJ };
		const _cmdlwGLpd = {
			"description": _descriptionfAPGPGT
	}
		const _returnValueuu3OORK = await _HelpJ8AN2UC.commandDescription(_cmdlwGLpd)
		const _cmd0k48BA = undefined;
		const _sortSubcommandsxG0VQQW = false;
		const _returnValueKAGsDo6 = "ZJRm94KuqcYPROE";
		const _subcommandTermHLEV0s8 = () => { return _returnValueKAGsDo6 };
		const _helperLHkp4o = {
			"sortSubcommands": _sortSubcommandsxG0VQQW,
		"subcommandTerm": _subcommandTermHLEV0s8
	}
		const _returnValueutwb6s = await _HelpJ8AN2UC.longestSubcommandTermLength(_cmd0k48BA, _helperLHkp4o)
		const __argsp9gWonu = {
		
	}
		const __namef75Ghv = -6.360416885997063;
		const __aliasesZpem9KK = "WPTioax9u9M7hKNIAeU46wbPVebqsF2fXzu3ov5xXchO6Ur9XXmCKxRWvQAo93OvpAqHqeSF2k";
		const _optionsxedj0EK = {
		
	}
		const _cmdSb72c4N = {
			"_args": __argsp9gWonu,
		"_name": __namef75Ghv,
		"_aliases": __aliasesZpem9KK,
		"options": _optionsxedj0EK
	}
		const _returnValues8uYCZZ = await _HelpJ8AN2UC.subcommandTerm(_cmdSb72c4N)
	});

	it('test for Help', async () => {
		const _HelplGmDBiP = new Help()
		const _optionspYpbcY = []
		const __hasHelpOptionJzjMBfa = -7.654728753662802;
		const _arrayValueT0F4Qyk = false;
		const _arrayValuez6omDge = "B3fspFM6xezf";
		const _returnValuel2XZBDf = [_arrayValueT0F4Qyk, _arrayValuez6omDge]
		const __helpShortFlagBSA57Q3 = () => { return _returnValuel2XZBDf };
		const _returnValueIxzMIYT = -7.893682628900837;
		const __findOptionLIRdGLx = () => { return _returnValueIxzMIYT };
		const _arrayValueFB6eoTf = true;
		const _arrayValuers5IBHA = undefined;
		const _arrayValueXfprgpN = 8.431604706663382;
		const __helpLongFlagzsrTI7o = [_arrayValueFB6eoTf, _arrayValuers5IBHA, _arrayValueXfprgpN]
		const _returnValueIF6CHvr = null;
		const _createOptionhwBYNq = () => { return _returnValueIF6CHvr };
		const __helpDescriptionV0UupII = true;
		const __helpFlagsM1YHN4 = false;
		const _cmdJa8hMMS = {
			"options": _optionspYpbcY,
		"_hasHelpOption": __hasHelpOptionJzjMBfa,
		"_helpShortFlag": __helpShortFlagBSA57Q3,
		"_findOption": __findOptionLIRdGLx,
		"_helpLongFlag": __helpLongFlagzsrTI7o,
		"createOption": _createOptionhwBYNq,
		"_helpDescription": __helpDescriptionV0UupII,
		"_helpFlags": __helpFlagsM1YHN4
	}
		const _returnValueAqoTFu = await _HelplGmDBiP.visibleOptions(_cmdJa8hMMS)
	});
})