export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpWjkWxwS = new Help()
		const _optionseRaHntu = {
		
	}
		const __hasHelpOptionUoehuWS = 4.752210216428075;
		const __helpShortFlagmCAa2N8 = {
		
	}
		const _arrayValueoTSeTHT = []
		const _arrayValuewT3nKx9 = 3.9078758077012328;
		const _arrayValueO9xaW4d = false;
		const _returnValuei3iGLvE = [_arrayValueoTSeTHT, _arrayValuewT3nKx9, _arrayValueO9xaW4d]
		const __findOptiont9cEic = () => { return _returnValuei3iGLvE };
		const __helpLongFlaghe6BQTY = "58YwhN";
		const _createOptionYS1W8xa = {
		
	}
		const __helpDescriptionSha64EI = null;
		const _returnValuerqfJQed = "IIa6AhgFLRzNQOtcnq5AAH7sA6s6msRD67sP3WSrKBiC9fGaO9TJrCKjf7IEayITOuoCnB";
		const _returnValueZ1ya3k9 = () => { return _returnValuerqfJQed };
		const __helpFlagslb4l15t = () => { return _returnValueZ1ya3k9 };
		const _cmdluHaeE0 = {
			"options": _optionseRaHntu,
		"_hasHelpOption": __hasHelpOptionUoehuWS,
		"_helpShortFlag": __helpShortFlagmCAa2N8,
		"_findOption": __findOptiont9cEic,
		"_helpLongFlag": __helpLongFlaghe6BQTY,
		"createOption": _createOptionYS1W8xa,
		"_helpDescription": __helpDescriptionSha64EI,
		"_helpFlags": __helpFlagslb4l15t
	}
		const _returnValuenKmzai = await _HelpWjkWxwS.visibleOptions(_cmdluHaeE0)
		const _argChoicesq2sYuyj = {
		
	}
		const _defaultValueOcKvGx2 = undefined;
		const _defaultValueDescriptionsLfUzUi = -8.74717595637314;
		const _descriptionndhaqYw = {
		
	}
		const _argumentYYecbNS = {
			"argChoices": _argChoicesq2sYuyj,
		"defaultValue": _defaultValueOcKvGx2,
		"defaultValueDescription": _defaultValueDescriptionsLfUzUi,
		"description": _descriptionndhaqYw
	}
		const _returnValueUd3pe5S = await _HelpWjkWxwS.argumentDescription(_argumentYYecbNS)
	});

	it('test for Help', async () => {
		const _HelpFcjHyzH = new Help()
		const _cmdx4G1JI3 = true;
		const _returnValueeG9rzqp = await _HelpFcjHyzH.commandUsage(_cmdx4G1JI3)
		const _cmdqEU89kx = "TBlI4AzmBJKrNJHBAiK155cXuREwqjspi1cr6NzlXA5FQ1KAeWWnx5YrBefsKlopmwocJWzXNnktLp0qh7tLyT0";
		const _arrayValuefeBxkZc = "rNAgNYpLcqpEqnwjqfeqn03DI8ax2yDIXKwui";
		const _arrayValuev2cE5vB = false;
		const _arrayValueJeuiKk2 = []
		const _arrayValuebFYPLa8 = undefined;
		const _sortSubcommandsGixOX8N = [_arrayValuefeBxkZc, _arrayValuev2cE5vB, _arrayValueJeuiKk2, _arrayValuebFYPLa8]
		const _subcommandTermv9gxjt8 = undefined;
		const _helperNmymB81 = {
			"sortSubcommands": _sortSubcommandsGixOX8N,
		"subcommandTerm": _subcommandTermv9gxjt8
	}
		const _returnValueoGgGpCO = await _HelpFcjHyzH.formatHelp(_cmdqEU89kx, _helperNmymB81)
	});

	it('test for Help', async () => {
		const _HelpORA3J5t = new Help()
		const _returnValuerWOPWfN = true;
		const _namexBeeSKZ = () => { return _returnValuerWOPWfN };
		const _argumentqnUObbe = {
			"name": _namexBeeSKZ
	}
		const _returnValuelETJFge = await _HelpORA3J5t.argumentTerm(_argumentqnUObbe)
		const _cmdYdjwsBZ = "LoFE8cHpDVDgkEFliDLPcDNlvhmLPhDDxqRLfCPLowAxUN1awAjCKCkEBFo1HZ28fcrB5QViHyKLAxOlfGJhfwdBBPNjhP";
		const _returnValueg3Z3Nuo = {
		
	}
		const _visibleOptionsa130yBg = () => { return _returnValueg3Z3Nuo };
		const _arrayValueenv7Zi = "J9R";
		const _arrayValueE5rJJjZ = undefined;
		const _arrayValuePiHr8lT = true;
		const _returnValueoIWvpQG = [_arrayValueenv7Zi, _arrayValueE5rJJjZ, _arrayValuePiHr8lT]
		const _optionTermsBepL11 = () => { return _returnValueoIWvpQG };
		const _helperXdar4qd = {
			"visibleOptions": _visibleOptionsa130yBg,
		"optionTerm": _optionTermsBepL11
	}
		const _returnValuesdh54EI = await _HelpORA3J5t.longestOptionTermLength(_cmdYdjwsBZ, _helperXdar4qd)
		const _returnValueTpt9zWj = "TWovCadNLObsQ6xPiLiq5RSNTxEHGnO5bD";
		const _nameWPOZ5zi = () => { return _returnValueTpt9zWj };
		const _argumentigAxut0 = {
			"name": _nameWPOZ5zi
	}
		const _returnValueGwJirY = await _HelpORA3J5t.argumentTerm(_argumentigAxut0)
		const _returnValueQ0yODPr = "qDEZQcqB9x7nWfXk27Hj";
		const _nameIwBE93n = () => { return _returnValueQ0yODPr };
		const _argumentyx0WoFc = {
			"name": _nameIwBE93n
	}
		const _returnValuepS6orb7 = await _HelpORA3J5t.argumentTerm(_argumentyx0WoFc)
		const _returnValueeNB2KHM = "ymVt";
		const _descriptionPreZccg = () => { return _returnValueeNB2KHM };
		const _cmdqleYJTQ = {
			"description": _descriptionPreZccg
	}
		const _returnValueTaVA0Cn = await _HelpORA3J5t.subcommandDescription(_cmdqleYJTQ)
	});

	it('test for Help', async () => {
		const _HelploGefq5 = new Help()
		const _cmdwOieV0n = "T427TNw8y3s1Wyu6UxBe4MyQPPyMcioBYIMQXhYHqdLaAAr86drVTe6D91E3zliFyFxH";
		const _returnValueAbdaMaE = await _HelploGefq5.visibleArguments(_cmdwOieV0n)
		const __argsJzVIOHn = {
		
	}
		const __nameZh4GpdT = -9.915397922658077;
		const __aliasesr2oKM5w = {
		
	}
		const _optionseoeu2LL = {
		
	}
		const _cmdZCgmpeF = {
			"_args": __argsJzVIOHn,
		"_name": __nameZh4GpdT,
		"_aliases": __aliasesr2oKM5w,
		"options": _optionseoeu2LL
	}
		const _returnValueVBYPtgG = await _HelploGefq5.subcommandTerm(_cmdZCgmpeF)
		const _cmdlJG7toz = "K";
		const _returnValueffs58QA = {
		
	}
		const _visibleOptionsweDIfWH = () => { return _returnValueffs58QA };
		const _returnValue9Rrsga = 5.265167570478489;
		const _optionTermRz0pRO6 = () => { return _returnValue9Rrsga };
		const _helperXFccxsI = {
			"visibleOptions": _visibleOptionsweDIfWH,
		"optionTerm": _optionTermRz0pRO6
	}
		const _returnValueZOOqiCU = await _HelploGefq5.longestOptionTermLength(_cmdlJG7toz, _helperXFccxsI)
	});

	it('test for Help', async () => {
		const _Helpc54CfF4 = new Help()
		const _argChoicesWv2yyJ = {
		
	}
		const _negateNYBzC1j = undefined;
		const _defaultValueG3nnCgN = undefined;
		const _returnValueH5uTaD = false;
		const _defaultValueDescriptionYc6whj = () => { return _returnValueH5uTaD };
		const _envVarnd6aKMF = undefined;
		const _descriptioncUs5pDk = false;
		const _optionx48S5Ns = {
			"argChoices": _argChoicesWv2yyJ,
		"negate": _negateNYBzC1j,
		"defaultValue": _defaultValueG3nnCgN,
		"defaultValueDescription": _defaultValueDescriptionYc6whj,
		"envVar": _envVarnd6aKMF,
		"description": _descriptioncUs5pDk
	}
		const _returnValueZwsOcOs = await _Helpc54CfF4.optionDescription(_optionx48S5Ns)
		const _argChoicesxN4Yymq = {
		
	}
		const _negateajNq9dk = false;
		const _defaultValueApU0aLN = undefined;
		const _defaultValueDescriptionoewxcxr = null;
		const _envVarJBCjrf = undefined;
		const _descriptioneryIEHG = {
		
	}
		const _optionC9JytZM = {
			"argChoices": _argChoicesxN4Yymq,
		"negate": _negateajNq9dk,
		"defaultValue": _defaultValueApU0aLN,
		"defaultValueDescription": _defaultValueDescriptionoewxcxr,
		"envVar": _envVarJBCjrf,
		"description": _descriptioneryIEHG
	}
		const _returnValuedIhA9pX = await _Helpc54CfF4.optionDescription(_optionC9JytZM)
		const _flagsCpeCZEN = -3.416635899329064;
		const _optionywDmIR = {
			"flags": _flagsCpeCZEN
	}
		const _returnValuem91H4z = await _Helpc54CfF4.optionTerm(_optionywDmIR)
	});

	it('test for Help', async () => {
		const _Helpd4yjjTq = new Help()
		const __argsJzSgU0 = false;
		const __nameYny1BCG = -5.431326154975608;
		const _returnValueQkGZBOh = undefined;
		const __aliasescs65vA = () => { return _returnValueQkGZBOh };
		const _optionsov4LeSo = {
		
	}
		const _cmdyIaCfbn = {
			"_args": __argsJzSgU0,
		"_name": __nameYny1BCG,
		"_aliases": __aliasescs65vA,
		"options": _optionsov4LeSo
	}
		const _returnValuevDJBtL5 = await _Helpd4yjjTq.subcommandTerm(_cmdyIaCfbn)
	});

	it('test for Help', async () => {
		const _HelpHdtzBR5 = new Help()
		const __nameKkEqS50 = {
		
	}
		const __aliasesX5hKWk0 = {
		
	}
		const _parentwOaVKl = {
		
	}
		const _returnValuemJccvP3 = true;
		const _usageGw35n5B = () => { return _returnValuemJccvP3 };
		const _cmdVatZrsx = {
			"_name": __nameKkEqS50,
		"_aliases": __aliasesX5hKWk0,
		"parent": _parentwOaVKl,
		"usage": _usageGw35n5B
	}
		const _returnValueW9M9GwH = await _HelpHdtzBR5.commandUsage(_cmdVatZrsx)
	});

	it('test for Help', async () => {
		const _HelpkD520m1 = new Help()
		const _returnValueGgSbNS1 = null;
		const _cmdpD9J5fL = () => { return _returnValueGgSbNS1 };
		const _longestOptionTermLengthMTTgklG = null;
		const _returnValuesDyLa4l = undefined;
		const _longestSubcommandTermLengthOgsyCKV = () => { return _returnValuesDyLa4l };
		const _returnValuegjdtQiN = true;
		const _longestArgumentTermLengthkw3B22 = () => { return _returnValuegjdtQiN };
		const _helperHP6aJNn = {
			"longestOptionTermLength": _longestOptionTermLengthMTTgklG,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOgsyCKV,
		"longestArgumentTermLength": _longestArgumentTermLengthkw3B22
	}
		const _returnValueDD5YsNl = await _HelpkD520m1.padWidth(_cmdpD9J5fL, _helperHP6aJNn)
		const _flagsptkl1aY = undefined;
		const _optionBfLxWvz = {
			"flags": _flagsptkl1aY
	}
		const _returnValueEiAwqZR = await _HelpkD520m1.optionTerm(_optionBfLxWvz)
		const _returnValuePQERtx1 = undefined;
		const _descriptionZ57niSW = () => { return _returnValuePQERtx1 };
		const _cmdv9GK8Cn = {
			"description": _descriptionZ57niSW
	}
		const _returnValueTNjYroc = await _HelpkD520m1.commandDescription(_cmdv9GK8Cn)
		const _flagsmS3Ird3 = undefined;
		const _optionnf2usaI = {
			"flags": _flagsmS3Ird3
	}
		const _returnValueVd5wF8w = await _HelpkD520m1.optionTerm(_optionnf2usaI)
	});

	it('test for Help', async () => {
		const _HelpdXJZDS = new Help()
		const _cmdpyOY6FY = "GEkF8I4bVLK9d8ifx9cpeSGvG473b6Mb9P5lijh3YiMP9pAU";
		const _sortSubcommandsChiz5oE = false;
		const _returnValueL9q1Qn7 = true;
		const _subcommandTermaQq592L = () => { return _returnValueL9q1Qn7 };
		const _helperpHbmCYS = {
			"sortSubcommands": _sortSubcommandsChiz5oE,
		"subcommandTerm": _subcommandTermaQq592L
	}
		const _returnValueN8goBZ7 = await _HelpdXJZDS.formatHelp(_cmdpyOY6FY, _helperpHbmCYS)
		const _arrayValuebB6xX5v = false;
		const _cmdJMeXHY = [_arrayValuebB6xX5v]
		const _returnValueijImzz5 = await _HelpdXJZDS.commandDescription(_cmdJMeXHY)
		const _cmdGVaDdBw = "OYzTh255dRZ9WMbjwJjq8cOXP6IDpFlpkxXXGOuNlkqsbMoRW5KJmABFkzRN";
		const _returnValueMmkKHRn = "Qry8ydUIGg2mubx6gt5U5v9sExgGN";
		const _visibleArgumentsPswkyN = () => { return _returnValueMmkKHRn };
		const _returnValueayAORDI = true;
		const _argumentTermI63IBc4 = () => { return _returnValueayAORDI };
		const _helperfngyxRR = {
			"visibleArguments": _visibleArgumentsPswkyN,
		"argumentTerm": _argumentTermI63IBc4
	}
		const _returnValuehoAQlb = await _HelpdXJZDS.longestArgumentTermLength(_cmdGVaDdBw, _helperfngyxRR)
	});

	it('test for Help', async () => {
		const _HelpBOfHRr = new Help()
		const _arrayValueX6u7SS2 = true;
		const _cmdXTbq4Pf = [_arrayValueX6u7SS2]
		const _sortSubcommandszbBp8KM = undefined;
		const _returnValueEjrVtRW = "1ZSL6OoygjfPfzvVEPb1UVEI8MmqXJjSEVtF2cpykGzY";
		const _subcommandTermVKm4c0O = () => { return _returnValueEjrVtRW };
		const _helperFUNTOn7 = {
			"sortSubcommands": _sortSubcommandszbBp8KM,
		"subcommandTerm": _subcommandTermVKm4c0O
	}
		const _returnValueAufjRpm = await _HelpBOfHRr.longestSubcommandTermLength(_cmdXTbq4Pf, _helperFUNTOn7)
		const _argChoiceseD5CITF = {
		
	}
		const _defaultValuePAiOYUr = undefined;
		const _defaultValueDescriptionpYqgI0B = undefined;
		const _descriptionrF5MzqS = false;
		const _argumentAB4ELJK = {
			"argChoices": _argChoiceseD5CITF,
		"defaultValue": _defaultValuePAiOYUr,
		"defaultValueDescription": _defaultValueDescriptionpYqgI0B,
		"description": _descriptionrF5MzqS
	}
		const _returnValueFu1NHmI = await _HelpBOfHRr.argumentDescription(_argumentAB4ELJK)
		const _cmdQYyCR4Y = "8BHbiWzOw8VlHZmFeNp4WL5lXeYEvXSg1duw7SpfUzjQ9JKsEQBIj5cUB9Kg";
		const _sortSubcommandsUaqgJ5 = {
		
	}
		const _returnValueIl0zgCW = 2.6888092940030184;
		const _subcommandTermEbI2UiK = () => { return _returnValueIl0zgCW };
		const _helperrE469qD = {
			"sortSubcommands": _sortSubcommandsUaqgJ5,
		"subcommandTerm": _subcommandTermEbI2UiK
	}
		const _returnValueMp99Qoo = await _HelpBOfHRr.formatHelp(_cmdQYyCR4Y, _helperrE469qD)
		const _returnValueehihPuE = "8tAIcPt4tOFN38i5EG4EpaPccXPmd66cUtBtzgTobPPWjc46DWqnCVdXf8liTdpDc2p5NpuFYFYL73KjluUzUnyB98e0hbc";
		const _descriptionRFoh1Nb = () => { return _returnValueehihPuE };
		const _cmdU1VLA3f = {
			"description": _descriptionRFoh1Nb
	}
		const _returnValueEzyCrfv = await _HelpBOfHRr.subcommandDescription(_cmdU1VLA3f)
	});

	it('test for Help', async () => {
		const _HelpyHe8LkX = new Help()
		const _commandspZDjvxM = {
		
	}
		const _returnValueyVrsfuz = null;
		const __hasImplicitHelpCommandYNzonyb = () => { return _returnValueyVrsfuz };
		const __helpCommandnameAndArgsfUGaa3 = {
		
	}
		const _returnValuesopCGu2 = -2.5652352560058667;
		const _createCommandTwg0iI = () => { return _returnValuesopCGu2 };
		const __helpCommandDescriptionptoedkl = -3.5628669921063407;
		const _cmdw2T4Wbs = {
			"commands": _commandspZDjvxM,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandYNzonyb,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsfUGaa3,
		"createCommand": _createCommandTwg0iI,
		"_helpCommandDescription": __helpCommandDescriptionptoedkl
	}
		const _returnValueks4vwhS = await _HelpyHe8LkX.visibleCommands(_cmdw2T4Wbs)
		const _cmdgHtSs4Y = undefined;
		const _sortSubcommandsT1kPTP = undefined;
		const _returnValuexLToQpV = []
		const _subcommandTermOQrHiJ8 = () => { return _returnValuexLToQpV };
		const _helpereLxTdFj = {
			"sortSubcommands": _sortSubcommandsT1kPTP,
		"subcommandTerm": _subcommandTermOQrHiJ8
	}
		const _returnValuefdh2SE = await _HelpyHe8LkX.formatHelp(_cmdgHtSs4Y, _helpereLxTdFj)
		const _flagsgriXcjN = []
		const _option6oMP0v = {
			"flags": _flagsgriXcjN
	}
		const _returnValuelQF00l = await _HelpyHe8LkX.optionTerm(_option6oMP0v)
	});

	it('test for Help', async () => {
		const _HelpgHOXVw = new Help()
		const _cmdGiOiait = null;
		const _helperffzSMTz = false;
		const _returnValueQTTIdOY = await _HelpgHOXVw.longestArgumentTermLength(_cmdGiOiait, _helperffzSMTz)
		const _argChoicesEXtPmjl = {
		
	}
		const _defaultValueBNnpjU6 = undefined;
		const _defaultValueDescriptionCVbozSy = -1.3944538935287056;
		const _descriptioncSsPmyO = null;
		const _argumenttOz7rOy = {
			"argChoices": _argChoicesEXtPmjl,
		"defaultValue": _defaultValueBNnpjU6,
		"defaultValueDescription": _defaultValueDescriptionCVbozSy,
		"description": _descriptioncSsPmyO
	}
		const _returnValuesSAyBhD = await _HelpgHOXVw.argumentDescription(_argumenttOz7rOy)
		const _returnValueu8gt5Y7 = true;
		const _descriptionwhNgP8 = () => { return _returnValueu8gt5Y7 };
		const _cmdwqOUzw = {
			"description": _descriptionwhNgP8
	}
		const _returnValueMopyvKl = await _HelpgHOXVw.commandDescription(_cmdwqOUzw)
		const _cmdrb5OCh6 = true;
		const _sortSubcommandsHObk7QV = false;
		const _arrayValuexX6ZFRT = 4.3791384208353925;
		const _returnValueA5XZd6H = -7.095300073793115;
		const _arrayValuev4wCTSR = () => { return _returnValueA5XZd6H };
		const _arrayValuelNsuo9X = "H";
		const _arrayValueDutlBTr = [_arrayValuexX6ZFRT, _arrayValuev4wCTSR, _arrayValuelNsuo9X]
		const _arrayValueDLRcqM = [_arrayValueDutlBTr]
		const _arrayValueT181nhQ = -4.101512600529156;
		const _arrayValueeQbEoMj = null;
		const _arrayValue5my0cL = true;
		const _returnValueO6ITSsb = [_arrayValueDLRcqM, _arrayValueT181nhQ, _arrayValueeQbEoMj, _arrayValue5my0cL]
		const _subcommandTermCMfVNVx = () => { return _returnValueO6ITSsb };
		const _helperKB5Qeev = {
			"sortSubcommands": _sortSubcommandsHObk7QV,
		"subcommandTerm": _subcommandTermCMfVNVx
	}
		const _returnValueCzTfBoH = await _HelpgHOXVw.longestSubcommandTermLength(_cmdrb5OCh6, _helperKB5Qeev)
	});

	it('test for Help', async () => {
		const _HelpxVLOpEe = new Help()
		const _arrayValueQBYdgHo = {
		
	}
		const _flagspjcF2AT = [_arrayValueQBYdgHo]
		const _optionexKbghZ = {
			"flags": _flagspjcF2AT
	}
		const _returnValueFD6Z6cX = await _HelpxVLOpEe.optionTerm(_optionexKbghZ)
		const _cmdhaed360 = "dYceM3tY2wwG9Hgqt26g5ZkQTtK3EnMYXs6bH";
		const _returnValueeboqjJx = await _HelpxVLOpEe.visibleOptions(_cmdhaed360)
	});

	it('test for Help', async () => {
		const _HelptWUUInn = new Help()
		const _argChoicesiOb5iW = {
		
	}
		const _defaultValueCbswqK2 = undefined;
		const _defaultValueDescriptiongsGRrlO = true;
		const _descriptionaa7CBKV = "CHv3L6IN378aqAIxCmIc5qzmYgyeE86bfxGKFv2eXSAGyR";
		const _argumentfkF3no8 = {
			"argChoices": _argChoicesiOb5iW,
		"defaultValue": _defaultValueCbswqK2,
		"defaultValueDescription": _defaultValueDescriptiongsGRrlO,
		"description": _descriptionaa7CBKV
	}
		const _returnValueVjZEiWe = await _HelptWUUInn.argumentDescription(_argumentfkF3no8)
	});

	it('test for Help', async () => {
		const _HelpcqUYgwc = new Help()
		const _arrayValuehJP2iK = null;
		const _arrayValueHvzlVjd = null;
		const _arrayValueAy6lkte = [_arrayValueHvzlVjd]
		const _arrayValueMYIf0V0 = -0.265295428261501;
		const _arrayValueRs62wX = "NBk98TA2ZBmtKVhPajgyGLuREIAiMYyVHU7AIrpSz95cyAIULtMhtdzgVIkTm77UIEgcCo973dhbQ";
		const _arrayValuejtMNiHf = true;
		const _arrayValuemTzAT5f = undefined;
		const _arrayValuej3CH6MT = [_arrayValueRs62wX, _arrayValuejtMNiHf, _arrayValuemTzAT5f]
		const _arrayValuemQHY9Iw = undefined;
		const _arrayValue8RQ1oF = false;
		const _arrayValuedOMy0N = undefined;
		const _arrayValueyAft0P9 = {
		
	}
		const _arrayValuecxhdcK = [_arrayValue8RQ1oF, _arrayValuedOMy0N, _arrayValueyAft0P9]
		const _arrayValuexclISkJ = [_arrayValueMYIf0V0, _arrayValuej3CH6MT, _arrayValuemQHY9Iw, _arrayValuecxhdcK]
		const _returnValuel5Ryq18 = [_arrayValuehJP2iK, _arrayValueAy6lkte, _arrayValuexclISkJ]
		const _descriptionYqWiPiz = () => { return _returnValuel5Ryq18 };
		const _cmdVDy4Ezx = {
			"description": _descriptionYqWiPiz
	}
		const _returnValuebu1wOAy = await _HelpcqUYgwc.subcommandDescription(_cmdVDy4Ezx)
		const _cmdgWFV4ar = 9.741342155603;
		const _returnValueT5Ckvpy = -1.9938286707398376;
		const _visibleOptionsSt4hzGW = () => { return _returnValueT5Ckvpy };
		const _returnValueGw6VmIQ = "NQIyoP4JJv72YISGtmWB";
		const _optionTermfqTWwlK = () => { return _returnValueGw6VmIQ };
		const _helperWvPFcJj = {
			"visibleOptions": _visibleOptionsSt4hzGW,
		"optionTerm": _optionTermfqTWwlK
	}
		const _returnValueh8TSUgp = await _HelpcqUYgwc.longestOptionTermLength(_cmdgWFV4ar, _helperWvPFcJj)
	});

	it('test for Help', async () => {
		const _HelpPJDuIUW = new Help()
		const __argsDescriptionsKlHA9Y = {
		
	}
		const __argskZ2Z0dm = {
		
	}
		const _cmdKLmMDQi = {
			"_argsDescription": __argsDescriptionsKlHA9Y,
		"_args": __argskZ2Z0dm
	}
		const _returnValueeO8h9Lq = await _HelpPJDuIUW.visibleArguments(_cmdKLmMDQi)
		const _argChoicesv0N8yIx = {
		
	}
		const _negateWYtoA9 = 2.498269372264751;
		const _defaultValueInXIAfY = undefined;
		const _defaultValueDescriptiongDkTrrb = false;
		const _envVarB09tbH1 = undefined;
		const _returnValueOYgdGyk = "nQACv2xwQ2iKnwzwqi7rwSIULS2Wrf6OMZiRT";
		const _descriptionFxDnmkh = () => { return _returnValueOYgdGyk };
		const _optionNfp5PeV = {
			"argChoices": _argChoicesv0N8yIx,
		"negate": _negateWYtoA9,
		"defaultValue": _defaultValueInXIAfY,
		"defaultValueDescription": _defaultValueDescriptiongDkTrrb,
		"envVar": _envVarB09tbH1,
		"description": _descriptionFxDnmkh
	}
		const _returnValuemaZC5A8 = await _HelpPJDuIUW.optionDescription(_optionNfp5PeV)
		const _returnValue9ZPF9n = 5.109270649192483;
		const _descriptionbbHCt4D = () => { return _returnValue9ZPF9n };
		const _cmdtFIlXe0 = {
			"description": _descriptionbbHCt4D
	}
		const _returnValueMOfCie = await _HelpPJDuIUW.subcommandDescription(_cmdtFIlXe0)
		const _returnValueJYdUqAi = null;
		const _nameKKG11u4 = () => { return _returnValueJYdUqAi };
		const _argumentO4PH3j = {
			"name": _nameKKG11u4
	}
		const _returnValueZZEXFkV = await _HelpPJDuIUW.argumentTerm(_argumentO4PH3j)
		const __argsDescriptionfCT5vH = {
		
	}
		const __argsacdIVyp = {
		
	}
		const _cmdIoqISV = {
			"_argsDescription": __argsDescriptionfCT5vH,
		"_args": __argsacdIVyp
	}
		const _returnValueJNbPSzm = await _HelpPJDuIUW.visibleArguments(_cmdIoqISV)
	});

	it('test for Help', async () => {
		const _HelputOuqFS = new Help()
		const _argChoiceseeifibg = {
		
	}
		const _negateu6WT33r = {
		
	}
		const _defaultValuetyyM9Y = undefined;
		const _defaultValueDescriptionFaFqvhU = 6.6764468380011905;
		const _envVarIlO0C8q = undefined;
		const _descriptiong34n3Dy = 4.210269352579484;
		const _optionrKrLyVi = {
			"argChoices": _argChoiceseeifibg,
		"negate": _negateu6WT33r,
		"defaultValue": _defaultValuetyyM9Y,
		"defaultValueDescription": _defaultValueDescriptionFaFqvhU,
		"envVar": _envVarIlO0C8q,
		"description": _descriptiong34n3Dy
	}
		const _returnValuepvnG8DB = await _HelputOuqFS.optionDescription(_optionrKrLyVi)
		const _cmdhVgiRWi = undefined;
		const _returnValuewBYhQW8 = {
		
	}
		const _longestOptionTermLengthIIlks7i = () => { return _returnValuewBYhQW8 };
		const _returnValueJOcOPcA = undefined;
		const _longestSubcommandTermLengthIAAdVPy = () => { return _returnValueJOcOPcA };
		const _arrayValueablzbXY = "dC6rpfVXsdyz4g2jHqMCBPSpL";
		const _returnValueEWOFKzZ = [_arrayValueablzbXY]
		const _longestArgumentTermLengthaFsL24Y = () => { return _returnValueEWOFKzZ };
		const _helperEy9asK8 = {
			"longestOptionTermLength": _longestOptionTermLengthIIlks7i,
		"longestSubcommandTermLength": _longestSubcommandTermLengthIAAdVPy,
		"longestArgumentTermLength": _longestArgumentTermLengthaFsL24Y
	}
		const _returnValueRN81uc = await _HelputOuqFS.padWidth(_cmdhVgiRWi, _helperEy9asK8)
		const _cmdY5IvUb = -5.871974264938934;
		const _returnValueOl7w3zQ = false;
		const _visibleArgumentsLWMRafk = () => { return _returnValueOl7w3zQ };
		const _returnValueBkLkikg = "3Oq93IaNR2nTU";
		const _argumentTermULLsXfk = () => { return _returnValueBkLkikg };
		const _helperHqwPH7t = {
			"visibleArguments": _visibleArgumentsLWMRafk,
		"argumentTerm": _argumentTermULLsXfk
	}
		const _returnValueTwG6EW = await _HelputOuqFS.longestArgumentTermLength(_cmdY5IvUb, _helperHqwPH7t)
		const _returnValuebhM9y7U = false;
		const _descriptionYeJlgD9 = () => { return _returnValuebhM9y7U };
		const _cmdnRglL5 = {
			"description": _descriptionYeJlgD9
	}
		const _returnValueQm9l30w = await _HelputOuqFS.commandDescription(_cmdnRglL5)
	});

	it('test for Help', async () => {
		const _Helpdg5gwN = new Help()
		const _argChoicesvmnrOVI = undefined;
		const _defaultValueOVgrfNX = undefined;
		const _defaultValueDescriptionOb9AAFX = "dfYJu6MHKNg";
		const _descriptionl3iz2a = undefined;
		const _argumentVLNYoBe = {
			"argChoices": _argChoicesvmnrOVI,
		"defaultValue": _defaultValueOVgrfNX,
		"defaultValueDescription": _defaultValueDescriptionOb9AAFX,
		"description": _descriptionl3iz2a
	}
		const _returnValueWkhsKPC = await _Helpdg5gwN.argumentDescription(_argumentVLNYoBe)
		const _argChoicesLt5PrEH = null;
		const _negatez9qWiyO = -1.4755379501762942;
		const _defaultValueCIT7CPp = undefined;
		const _defaultValueDescriptionTU4CAI0 = null;
		const _envVarMXqDDU6 = undefined;
		const _descriptionUcjeOG = "ANAmwteIkRqZ3BG7xBvkn93ENRdq6SG2EwpkehAW5TGK2wVT8FAWd2n8A1";
		const _optionLrcRlhC = {
			"argChoices": _argChoicesLt5PrEH,
		"negate": _negatez9qWiyO,
		"defaultValue": _defaultValueCIT7CPp,
		"defaultValueDescription": _defaultValueDescriptionTU4CAI0,
		"envVar": _envVarMXqDDU6,
		"description": _descriptionUcjeOG
	}
		const _returnValueuCvIDZg = await _Helpdg5gwN.optionDescription(_optionLrcRlhC)
		const __argsDescriptionbOf5Tct = {
		
	}
		const __argsvoLW6MU = {
		
	}
		const _cmdwSVZkS = {
			"_argsDescription": __argsDescriptionbOf5Tct,
		"_args": __argsvoLW6MU
	}
		const _returnValuebgA1lz = await _Helpdg5gwN.visibleArguments(_cmdwSVZkS)
	});

	it('test for Help', async () => {
		const _HelpuBM9fzU = new Help()
		const _argChoicesX7eshcD = {
		
	}
		const _negateXJxOzS = "JBjowu4w45JQgRLNtRBqL12jXPIfzHQwHcoXhkyFMxHyoSqx7KFNmnTPYiQWWHwDF24bcRNwm";
		const _defaultValuev4usEEy = undefined;
		const _defaultValueDescriptionij9VogO = true;
		const _arrayValueXGdNwAA = undefined;
		const _arrayValueGyRIhBg = "HdeWKi";
		const _arrayValueHWDMUcN = undefined;
		const _envVars0wk7Zn = [_arrayValueXGdNwAA, _arrayValueGyRIhBg, _arrayValueHWDMUcN]
		const _descriptionfsENmHh = null;
		const _option3xDYXS = {
			"argChoices": _argChoicesX7eshcD,
		"negate": _negateXJxOzS,
		"defaultValue": _defaultValuev4usEEy,
		"defaultValueDescription": _defaultValueDescriptionij9VogO,
		"envVar": _envVars0wk7Zn,
		"description": _descriptionfsENmHh
	}
		const _returnValueGGkFCW6 = await _HelpuBM9fzU.optionDescription(_option3xDYXS)
	});

	it('test for Help', async () => {
		const _HelpvfMq2zF = new Help()
		const _returnValueOJ48Rx = {
		
	}
		const _descriptionboGFWsz = () => { return _returnValueOJ48Rx };
		const _cmdDlnc36h = {
			"description": _descriptionboGFWsz
	}
		const _returnValueNWVyjHz = await _HelpvfMq2zF.commandDescription(_cmdDlnc36h)
		const _optionsatlOT5o = {
		
	}
		const _arrayValueBx6wJl2 = false;
		const _arrayValuenh0kmbg = null;
		const __hasHelpOptionpMrCgF5 = [_arrayValueBx6wJl2, _arrayValuenh0kmbg]
		const __helpShortFlagtBkt8ju = 4.00614698837234;
		const _arrayValue6Iu012 = "XtEMXr1EsS4RaqjYlgcCMJpXzxFYRaEPdtYuTuslMPJXwzB3TQdolQXFxOcPRYRAQPPOZ2YugydM3tmadgd2JvV";
		const _arrayValueHsPsc1Z = {
		
	}
		const _arrayValueXDHMhK1 = [_arrayValue6Iu012, _arrayValueHsPsc1Z]
		const _arrayValueUMyhFQ = "btyxE45JJQrHJb";
		const _returnValueZpMUSbq = [_arrayValueXDHMhK1, _arrayValueUMyhFQ]
		const __findOptionLIGDf5g = () => { return _returnValueZpMUSbq };
		const _returnValueIM2qhne = {
		
	}
		const __helpLongFlagKl55cw4 = () => { return _returnValueIM2qhne };
		const _returnValueOg4vmbT = false;
		const _createOptionw1gD2y1 = () => { return _returnValueOg4vmbT };
		const _returnValueOZguq8H = -5.594842051817134;
		const __helpDescriptionrg3eNke = () => { return _returnValueOZguq8H };
		const __helpFlagsUl7EKz = 2.2656071896570023;
		const _cmdPTQmiYA = {
			"options": _optionsatlOT5o,
		"_hasHelpOption": __hasHelpOptionpMrCgF5,
		"_helpShortFlag": __helpShortFlagtBkt8ju,
		"_findOption": __findOptionLIGDf5g,
		"_helpLongFlag": __helpLongFlagKl55cw4,
		"createOption": _createOptionw1gD2y1,
		"_helpDescription": __helpDescriptionrg3eNke,
		"_helpFlags": __helpFlagsUl7EKz
	}
		const _returnValuepF7MCqf = await _HelpvfMq2zF.visibleOptions(_cmdPTQmiYA)
	});

	it('test for Help', async () => {
		const _HelpWPNR9VH = new Help()
		const _returnValueYTdg4k2 = null;
		const _matchC7S0He0 = () => { return _returnValueYTdg4k2 };
		const _substrYDFGCva = undefined;
		const _strb9y4ygt = {
			"match": _matchC7S0He0,
		"substr": _substrYDFGCva
	}
		const _widthMLDVJHj = -4.844489009268125;
		const _indentBfs5QRD = -3.7547019981082874;
		const _minColumnWidthagjhUV = 3.8591296168107814;
		const _returnValueklVE1MC = await _HelpWPNR9VH.wrap(_strb9y4ygt, _widthMLDVJHj, _indentBfs5QRD, _minColumnWidthagjhUV)
		const _returnValueCGumtIo = undefined;
		const _arrayValuegTHbKHK = () => { return _returnValueCGumtIo };
		const _returnValueDrbRE3h = [_arrayValuegTHbKHK]
		const _descriptionnwfI1HG = () => { return _returnValueDrbRE3h };
		const _cmdxgZWGP1 = {
			"description": _descriptionnwfI1HG
	}
		const _returnValueFanXW95 = await _HelpWPNR9VH.commandDescription(_cmdxgZWGP1)
	});

	it('test for Help', async () => {
		const _HelpZcOkAq9 = new Help()
		const _returnValueUr8ymMn = undefined;
		const _returnValueEEh7Xsg = () => { return _returnValueUr8ymMn };
		const _matchIhGPkJv = () => { return _returnValueEEh7Xsg };
		const _returnValue39zLV0 = null;
		const _substrnsX23LI = () => { return _returnValue39zLV0 };
		const _strRqjLtXD = {
			"match": _matchIhGPkJv,
		"substr": _substrnsX23LI
	}
		const _widthD19HGjO = 7.46709078372119;
		const _indentBmHp4lj = -2.3490875867464736;
		const _minColumnWidthPYyPFO = -7.551266092600881;
		const _returnValueJJ099hs = await _HelpZcOkAq9.wrap(_strRqjLtXD, _widthD19HGjO, _indentBmHp4lj, _minColumnWidthPYyPFO)
	});

	it('test for Help', async () => {
		const _HelpGGolrg = new Help()
		const _argChoicesO8BSfyo = null;
		const _defaultValueXGDi5px = true;
		const _arrayValuebFfCJZa = "4fsjEP5Jx4HRrhCbm5sL4UA4CINruCvUxfrQREYe1PeQblzdnWgGltYA991sl4vfjOvoFlIjMKDlM";
		const _arrayValuexCh7og = null;
		const _defaultValueDescriptionPySoUD = [_arrayValuebFfCJZa, _arrayValuexCh7og]
		const _descriptionLdYhqm4 = "55ROS7S3Vq";
		const _argumentohzvEHF = {
			"argChoices": _argChoicesO8BSfyo,
		"defaultValue": _defaultValueXGDi5px,
		"defaultValueDescription": _defaultValueDescriptionPySoUD,
		"description": _descriptionLdYhqm4
	}
		const _returnValuexZQxY7u = await _HelpGGolrg.argumentDescription(_argumentohzvEHF)
		const _arrayValuetSBeprZ = {
		
	}
		const _arrayValuej0aHOpG = undefined;
		const _returnValueql61VRz = "ucr9qAa4et8JoPfl3k2FnIqQ6cCguw3dJXtFHzjFGhXxJUeB2T";
		const _returnValuewjtwVNl = () => { return _returnValueql61VRz };
		const _arrayValueJO3yXFE = () => { return _returnValuewjtwVNl };
		const _descriptionGEEFEAG = [_arrayValuetSBeprZ, _arrayValuej0aHOpG, _arrayValueJO3yXFE]
		const _cmddZPnxp0 = {
			"description": _descriptionGEEFEAG
	}
		const _returnValueoy9Fh22 = await _HelpGGolrg.subcommandDescription(_cmddZPnxp0)
		const _commandsiVEMMf2 = {
		
	}
		const _returnValuePaYBO2 = 2.4022050946238664;
		const __hasImplicitHelpCommandrxoYcTQ = () => { return _returnValuePaYBO2 };
		const __helpCommandnameAndArgsp7XMhK = {
		
	}
		const _returnValueKVkNxvc = true;
		const _createCommandiLEe9q5 = () => { return _returnValueKVkNxvc };
		const __helpCommandDescriptionGIRMFg4 = -0.16427652009609517;
		const _cmdujfUm9J = {
			"commands": _commandsiVEMMf2,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandrxoYcTQ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsp7XMhK,
		"createCommand": _createCommandiLEe9q5,
		"_helpCommandDescription": __helpCommandDescriptionGIRMFg4
	}
		const _returnValuemBggBQS = await _HelpGGolrg.visibleCommands(_cmdujfUm9J)
	});

	it('test for Help', async () => {
		const _HelpoQWkfpJ = new Help()
		const _returnValuew4hMhFu = null;
		const _matchfmPMqfL = () => { return _returnValuew4hMhFu };
		const _returnValueym1c7ul = undefined;
		const _substrdMjxvfB = () => { return _returnValueym1c7ul };
		const _strI2ZpXld = {
			"match": _matchfmPMqfL,
		"substr": _substrdMjxvfB
	}
		const _widthB5WscCx = 7.829391708506687;
		const _indentuWQelPe = 3.2353346439996944;
		const _minColumnWidthIiNs519 = 1.1840770841332358;
		const _returnValueI63nXY0 = await _HelpoQWkfpJ.wrap(_strI2ZpXld, _widthB5WscCx, _indentuWQelPe, _minColumnWidthIiNs519)
		const _cmdm3sxZsz = true;
		const _returnValueKISAeW6 = undefined;
		const _visibleOptionsgoEMLi = () => { return _returnValueKISAeW6 };
		const _returnValuenlmgD5H = null;
		const _optionTermnr1mRPE = () => { return _returnValuenlmgD5H };
		const _helperIT5F8HB = {
			"visibleOptions": _visibleOptionsgoEMLi,
		"optionTerm": _optionTermnr1mRPE
	}
		const _returnValueIYm9ylh = await _HelpoQWkfpJ.longestOptionTermLength(_cmdm3sxZsz, _helperIT5F8HB)
	});

	it('test for Help', async () => {
		const _HelpwRQCMXF = new Help()
		const _arrayValueB0XPqtP = false;
		const __nameAoRSelG = [_arrayValueB0XPqtP]
		const _arrayValuecDo4SCI = true;
		const __aliasesRGp2FYp = [_arrayValuecDo4SCI]
		const _returnValuemQhnzbO = {
		
	}
		const _parentH77Md6o = () => { return _returnValuemQhnzbO };
		const _returnValueDdJNNbM = -9.628583079476348;
		const _usageLRXf7hE = () => { return _returnValueDdJNNbM };
		const _cmdRdUrL9 = {
			"_name": __nameAoRSelG,
		"_aliases": __aliasesRGp2FYp,
		"parent": _parentH77Md6o,
		"usage": _usageLRXf7hE
	}
		const _returnValueDWNw4fL = await _HelpwRQCMXF.commandUsage(_cmdRdUrL9)
		const _returnValueWgU7mcO = -7.411724326785941;
		const _cmdVvtF4M3 = () => { return _returnValueWgU7mcO };
		const _returnValuexDQDiRk = {
		
	}
		const _longestOptionTermLengthZZcnt3 = () => { return _returnValuexDQDiRk };
		const _returnValueVt9gAro = true;
		const _longestSubcommandTermLengthhmCrzPd = () => { return _returnValueVt9gAro };
		const _returnValueBZETU7y = undefined;
		const _longestArgumentTermLengthuv1DN3r = () => { return _returnValueBZETU7y };
		const _helpernJosG0U = {
			"longestOptionTermLength": _longestOptionTermLengthZZcnt3,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhmCrzPd,
		"longestArgumentTermLength": _longestArgumentTermLengthuv1DN3r
	}
		const _returnValuelf4pKiY = await _HelpwRQCMXF.padWidth(_cmdVvtF4M3, _helpernJosG0U)
		const _returnValueqlMRFC5 = undefined;
		const _matchgUrc3Yd = () => { return _returnValueqlMRFC5 };
		const _returnValuemxSMsH = true;
		const _substraBk2k5U = () => { return _returnValuemxSMsH };
		const _strK12aIG = {
			"match": _matchgUrc3Yd,
		"substr": _substraBk2k5U
	}
		const _widthJ1xLXOT = -0.2847379140709254;
		const _indentikGM5Vv = -5.042299019387687;
		const _minColumnWidthqtG8oF7 = 3.410964040706615;
		const _returnValueMVUlwvm = await _HelpwRQCMXF.wrap(_strK12aIG, _widthJ1xLXOT, _indentikGM5Vv, _minColumnWidthqtG8oF7)
	});

	it('test for Help', async () => {
		const _HelpuqAfDHT = new Help()
		const _optionsBrkoYP0 = []
		const __hasHelpOptionXTYb9qg = null;
		const __helpShortFlagO5yYAWH = 0.8285347876695699;
		const _returnValuefLiW0Pw = null;
		const __findOptionulMvzJC = () => { return _returnValuefLiW0Pw };
		const __helpLongFlagYHmerHE = "1EupQgtFA9g30GaecisrpwOTzq5QbcumesBjctP31Ewclyq7iLFKyyN7vNrvcF89Nsum";
		const _returnValuezxAG0j = 3.1735234560076684;
		const _createOptionlDLIIHB = () => { return _returnValuezxAG0j };
		const __helpDescriptionWohWOBd = 3.4815770388237155;
		const __helpFlagsiTnN7ju = {
		
	}
		const _cmdSbUBeDD = {
			"options": _optionsBrkoYP0,
		"_hasHelpOption": __hasHelpOptionXTYb9qg,
		"_helpShortFlag": __helpShortFlagO5yYAWH,
		"_findOption": __findOptionulMvzJC,
		"_helpLongFlag": __helpLongFlagYHmerHE,
		"createOption": _createOptionlDLIIHB,
		"_helpDescription": __helpDescriptionWohWOBd,
		"_helpFlags": __helpFlagsiTnN7ju
	}
		const _returnValuefKVAdS4 = await _HelpuqAfDHT.visibleOptions(_cmdSbUBeDD)
	});

	it('test for Help', async () => {
		const _HelpMzs7h8v = new Help()
		const __argsPcacLPZ = []
		const __namexF6ITUS = 8.626216505673717;
		const __aliasesPkZLyec = {
		
	}
		const _optionsuvxsYj8 = {
		
	}
		const _cmdAcOUifq = {
			"_args": __argsPcacLPZ,
		"_name": __namexF6ITUS,
		"_aliases": __aliasesPkZLyec,
		"options": _optionsuvxsYj8
	}
		const _returnValueLJQ7o0e = await _HelpMzs7h8v.subcommandTerm(_cmdAcOUifq)
		const __nameAqLbgtH = {
		
	}
		const __aliasesMF9nCDe = {
		
	}
		const _parentzCrmy5S = {
		
	}
		const _returnValuet5Yt76O = undefined;
		const _usageClPy50 = () => { return _returnValuet5Yt76O };
		const _cmdQXIwX5H = {
			"_name": __nameAqLbgtH,
		"_aliases": __aliasesMF9nCDe,
		"parent": _parentzCrmy5S,
		"usage": _usageClPy50
	}
		const _returnValuei2Ah00E = await _HelpMzs7h8v.commandUsage(_cmdQXIwX5H)
		const __argsifMj8Ys = true;
		const __nameA8VhUn = 6.564945974326726;
		const __aliasesNElILt = undefined;
		const _optionsqduAg6 = {
		
	}
		const _cmdngYQ9OZ = {
			"_args": __argsifMj8Ys,
		"_name": __nameA8VhUn,
		"_aliases": __aliasesNElILt,
		"options": _optionsqduAg6
	}
		const _returnValuepmH6bI1 = await _HelpMzs7h8v.subcommandTerm(_cmdngYQ9OZ)
		const _argChoicesWY5IlKj = {
		
	}
		const _negaterZVFP6y = 1.186436969788197;
		const _defaultValuet1jkTKE = undefined;
		const _defaultValueDescriptionM48xnbQ = undefined;
		const _envVarrnhWH1F = undefined;
		const _descriptionGeSok3j = 6.728176232983898;
		const _optionl2NzL0C = {
			"argChoices": _argChoicesWY5IlKj,
		"negate": _negaterZVFP6y,
		"defaultValue": _defaultValuet1jkTKE,
		"defaultValueDescription": _defaultValueDescriptionM48xnbQ,
		"envVar": _envVarrnhWH1F,
		"description": _descriptionGeSok3j
	}
		const _returnValueXuBIGr = await _HelpMzs7h8v.optionDescription(_optionl2NzL0C)
	});
})