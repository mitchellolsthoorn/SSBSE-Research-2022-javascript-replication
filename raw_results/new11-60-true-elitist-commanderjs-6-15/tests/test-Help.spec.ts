export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpoDYCza = new Help()
		const _cmdgz7JCCJ = {
		
	}
		const _returnValueslGF8wb = null;
		const _sortSubcommandsrMboF7H = () => { return _returnValueslGF8wb };
		const _arrayValue3xZg7w = -0.41448387592953395;
		const _arrayValuefSof2J = null;
		const _arrayValueWSAbaYB = "eo1PFIyL6hgk2rlzGJGon3HsM1n4Kw1l6Us7Q8hUtyop1EohK";
		const _returnValueRMXY9e1 = [_arrayValue3xZg7w, _arrayValuefSof2J, _arrayValueWSAbaYB]
		const _subcommandTermfCAfCug = () => { return _returnValueRMXY9e1 };
		const _helperEFAN8O6 = {
			"sortSubcommands": _sortSubcommandsrMboF7H,
		"subcommandTerm": _subcommandTermfCAfCug
	}
		const _returnValueMANNAK = await _HelpoDYCza.formatHelp(_cmdgz7JCCJ, _helperEFAN8O6)
		const __argsDescriptionDjF0bWl = {
		
	}
		const __argsg72GQQ7 = {
		
	}
		const _cmdXsPh0JZ = {
			"_argsDescription": __argsDescriptionDjF0bWl,
		"_args": __argsg72GQQ7
	}
		const _returnValuedppSqfQ = await _HelpoDYCza.visibleArguments(_cmdXsPh0JZ)
	});

	it('test for Help', async () => {
		const _Helpo5JOof7 = new Help()
		const __argsDescriptionIroViW7 = {
		
	}
		const __argsJrKkpaK = {
		
	}
		const _cmdJrE3lK = {
			"_argsDescription": __argsDescriptionIroViW7,
		"_args": __argsJrKkpaK
	}
		const _returnValueCqBWOx = await _Helpo5JOof7.visibleArguments(_cmdJrE3lK)
		const _arrayValueWLlEOM0 = {
		
	}
		const _arrayValuej41I2Lv = 5.2152724048558134;
		const _cmdLhW6X7C = [_arrayValueWLlEOM0, _arrayValuej41I2Lv]
		const _helpervK1rMVq = 2.6243883810116824;
		const _returnValuevA0IHv = await _Helpo5JOof7.longestOptionTermLength(_cmdLhW6X7C, _helpervK1rMVq)
		const _commandsbmJH45b = {
		
	}
		const _returnValueePiBXkg = undefined;
		const __hasImplicitHelpCommandozRQfkg = () => { return _returnValueePiBXkg };
		const __helpCommandnameAndArgsHhNwQ5 = {
		
	}
		const _returnValueIXvsdIu = 7.140504865853842;
		const _createCommandtkEDd3I = () => { return _returnValueIXvsdIu };
		const __helpCommandDescriptionCZwV5Zo = "s5GFbdKxVgTbOLTuCDf6qnRrXQJwnlYvQ60fWGwPXMpE1BFhixgYas5zw51mIULq37FpQiZjDc";
		const _cmdnLL9lkE = {
			"commands": _commandsbmJH45b,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandozRQfkg,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsHhNwQ5,
		"createCommand": _createCommandtkEDd3I,
		"_helpCommandDescription": __helpCommandDescriptionCZwV5Zo
	}
		const _returnValueK0eW0kV = await _Helpo5JOof7.visibleCommands(_cmdnLL9lkE)
		const _returnValuerOHgcKB = "QzNM";
		const _descriptionSMaWoD3 = () => { return _returnValuerOHgcKB };
		const _cmdsd85KJG = {
			"description": _descriptionSMaWoD3
	}
		const _returnValuehMtAwi = await _Helpo5JOof7.commandDescription(_cmdsd85KJG)
	});

	it('test for Help', async () => {
		const _HelppH0Ph0 = new Help()
		const __argsQ4JVaXz = {
		
	}
		const __namerO2HW1U = 2.4674818424753973;
		const __aliasesTmPA9KE = {
		
	}
		const _optionsMDU6AEe = undefined;
		const _cmdh0Ar4G4 = {
			"_args": __argsQ4JVaXz,
		"_name": __namerO2HW1U,
		"_aliases": __aliasesTmPA9KE,
		"options": _optionsMDU6AEe
	}
		const _returnValuex3rZGfF = await _HelppH0Ph0.subcommandTerm(_cmdh0Ar4G4)
		const _cmdx16mxg = null;
		const _returnValueVqAXBUX = null;
		const _visibleOptionsIoA6Gw = () => { return _returnValueVqAXBUX };
		const _returnValueAhUsZJs = undefined;
		const _returnValuebhbVQDr = () => { return _returnValueAhUsZJs };
		const _optionTermR7BAPb3 = () => { return _returnValuebhbVQDr };
		const _helperZBAQG2C = {
			"visibleOptions": _visibleOptionsIoA6Gw,
		"optionTerm": _optionTermR7BAPb3
	}
		const _returnValuedTKykDs = await _HelppH0Ph0.longestOptionTermLength(_cmdx16mxg, _helperZBAQG2C)
		const __argsDescriptionfovB9Bo = {
		
	}
		const __args56WeTE = {
		
	}
		const _cmdAZRHe6S = {
			"_argsDescription": __argsDescriptionfovB9Bo,
		"_args": __args56WeTE
	}
		const _returnValueyIXyR6N = await _HelppH0Ph0.visibleArguments(_cmdAZRHe6S)
		const _returnValueqJpfY5 = -4.6163245532707;
		const _descriptionqvrWUD = () => { return _returnValueqJpfY5 };
		const _cmdjUF5Uh0 = {
			"description": _descriptionqvrWUD
	}
		const _returnValueNaFJC2T = await _HelppH0Ph0.commandDescription(_cmdjUF5Uh0)
	});

	it('test for Help', async () => {
		const _HelpjCK5bVb = new Help()
		const _arrayValueg9WoLrG = null;
		const _arrayValueS1A6hzH = true;
		const _arrayValueUVFbsCK = undefined;
		const _arrayValueN7nRCfW = []
		const _arrayValuePEvGuhB = [_arrayValueS1A6hzH, _arrayValueUVFbsCK, _arrayValueN7nRCfW]
		const _arrayValuezlPm01 = null;
		const _returnValues69W6D2 = [_arrayValueg9WoLrG, _arrayValuePEvGuhB, _arrayValuezlPm01]
		const _matchzkFBPid = () => { return _returnValues69W6D2 };
		const _arrayValueh7OaWEC = -6.393778871063577;
		const _returnValueAqDbeVh = [_arrayValueh7OaWEC]
		const _substrYHTYbiu = () => { return _returnValueAqDbeVh };
		const _strjbarOgZ = {
			"match": _matchzkFBPid,
		"substr": _substrYHTYbiu
	}
		const _width0nret7 = 5.729918514266224;
		const _indenti6467Mz = -3.4211228490706347;
		const _minColumnWidthSSTr4N8 = 1.5362693684195623;
		const _returnValueS7yXanG = await _HelpjCK5bVb.wrap(_strjbarOgZ, _width0nret7, _indenti6467Mz, _minColumnWidthSSTr4N8)
	});

	it('test for Help', async () => {
		const _Helpx9a7mrP = new Help()
		const _arrayValues4gnVPD = {
		
	}
		const _arrayValuecL7UBEf = 4.094389835532333;
		const _arrayValueGCkHxR7 = null;
		const _arrayValuebb7fY6 = [_arrayValues4gnVPD, _arrayValuecL7UBEf, _arrayValueGCkHxR7]
		const _arrayValuejIGIHZi = true;
		const _arrayValuenOUqFii = 2.8735746946910172;
		const _arrayValueikbkq4t = [_arrayValuejIGIHZi, _arrayValuenOUqFii]
		const _returnValueyemVdUm = [_arrayValuebb7fY6, _arrayValueikbkq4t]
		const _descriptionhXKY1pd = () => { return _returnValueyemVdUm };
		const _cmdYDany4i = {
			"description": _descriptionhXKY1pd
	}
		const _returnValuehhuJScJ = await _Helpx9a7mrP.subcommandDescription(_cmdYDany4i)
		const _returnValuestWmRF = true;
		const _flagsw3LY9q8 = () => { return _returnValuestWmRF };
		const _optionOz06pw0 = {
			"flags": _flagsw3LY9q8
	}
		const _returnValueHq4iANb = await _Helpx9a7mrP.optionTerm(_optionOz06pw0)
		const __nameluecaX = {
		
	}
		const __aliaseseQzIHAw = {
		
	}
		const _parentyAFVq9H = {
		
	}
		const _arrayValuec5SeYgy = null;
		const _arrayValuevxoC2Iw = true;
		const _returnValueq4uZXvv = [_arrayValuec5SeYgy, _arrayValuevxoC2Iw]
		const _usageisG0qcI = () => { return _returnValueq4uZXvv };
		const _cmdVwZScYE = {
			"_name": __nameluecaX,
		"_aliases": __aliaseseQzIHAw,
		"parent": _parentyAFVq9H,
		"usage": _usageisG0qcI
	}
		const _returnValuen0WgB4J = await _Helpx9a7mrP.commandUsage(_cmdVwZScYE)
	});

	it('test for Help', async () => {
		const _HelpJ4jEq5w = new Help()
		const _cmdFthA0S6 = null;
		const _helperEV0Tndl = undefined;
		const _returnValueRCq5BHf = await _HelpJ4jEq5w.longestArgumentTermLength(_cmdFthA0S6, _helperEV0Tndl)
		const _optionsXHAcuJR = {
		
	}
		const _returnValueRWzKepO = 4.539805788930021;
		const __hasHelpOptionShWSTL = () => { return _returnValueRWzKepO };
		const __helpShortFlagvtPIgCk = []
		const _returnValuevgp2fs = true;
		const __findOptionwU1IR4b = () => { return _returnValuevgp2fs };
		const __helpLongFlagTctQtiV = 1.2060517569229123;
		const _arrayValueGMO2Ie2 = "RbuET6leJCf5qOXLW6As1WWEz1lsbHLB2uU4o1MPAgrkMdmK5BaKqlMRjavtXl6he3FVOCy1aN4rsDOb77oyBe";
		const _arrayValueMy9q6u8 = null;
		const _returnValueVWtqlrd = [_arrayValueGMO2Ie2, _arrayValueMy9q6u8]
		const _returnValueAjeq9eq = () => { return _returnValueVWtqlrd };
		const _createOptionTSQUMLQ = () => { return _returnValueAjeq9eq };
		const __helpDescriptionZlQ01qZ = undefined;
		const __helpFlagsmUJP5v8 = false;
		const _cmdJcjjLxp = {
			"options": _optionsXHAcuJR,
		"_hasHelpOption": __hasHelpOptionShWSTL,
		"_helpShortFlag": __helpShortFlagvtPIgCk,
		"_findOption": __findOptionwU1IR4b,
		"_helpLongFlag": __helpLongFlagTctQtiV,
		"createOption": _createOptionTSQUMLQ,
		"_helpDescription": __helpDescriptionZlQ01qZ,
		"_helpFlags": __helpFlagsmUJP5v8
	}
		const _returnValueEDdoBp0 = await _HelpJ4jEq5w.visibleOptions(_cmdJcjjLxp)
		const _cmdADtZeJd = "H6IPx7YYJXVcLWzFuCBf8a8slz1MnekEujSq";
		const _returnValue6MRNwX = undefined;
		const _visibleArgumentsClG3bbB = () => { return _returnValue6MRNwX };
		const _returnValueAbgrgFv = null;
		const _argumentTermSwCkqgi = () => { return _returnValueAbgrgFv };
		const _helperln4eBP = {
			"visibleArguments": _visibleArgumentsClG3bbB,
		"argumentTerm": _argumentTermSwCkqgi
	}
		const _returnValuel4DV7MG = await _HelpJ4jEq5w.longestArgumentTermLength(_cmdADtZeJd, _helperln4eBP)
	});

	it('test for Help', async () => {
		const _HelplgSNsNJ = new Help()
		const _optionsptUKsJ = {
		
	}
		const _arrayValueyp1fxs = "uSUNIFjFPMl9gC5yQduYLH2hxN79U1w607JtT8GOEwa4wzioaZipPA3et8Y7fcN8pqYP72JBkmL3UxB1nh3SQRP8fYbr";
		const __hasHelpOptionW9wu0OG = [_arrayValueyp1fxs]
		const __helpShortFlagkJiT4SR = "UQDMDqPeTBlILBozVqbe2S2UQ1FH1VJulO6gm76qYIUOpRl2HeoD6dLN7GOMa7LRCGG932u9cPrIPgCHKSjFv9Hy";
		const _returnValueA2C0VMA = -9.1038223728097;
		const __findOptionTTAJe3D = () => { return _returnValueA2C0VMA };
		const __helpLongFlagNzRqI2y = "97JWwHzMMoYmTaXY6Ac5lbJkT7ruoNdGoK2basQ7bYtf1NBgUw0u7S11upJf8kN8iIMLRx5qUC9Mky2J3YDzIvy";
		const _returnValueVNcyfkR = "2ebbzvYtqFyejWxruXLdcCwO6UEfkCV";
		const _createOptionOrdjfql = () => { return _returnValueVNcyfkR };
		const _returnValueUDpET36 = null;
		const __helpDescriptionTqhBRPZ = () => { return _returnValueUDpET36 };
		const __helpFlagsDGqa2kw = {
		
	}
		const _cmdD4q6tlF = {
			"options": _optionsptUKsJ,
		"_hasHelpOption": __hasHelpOptionW9wu0OG,
		"_helpShortFlag": __helpShortFlagkJiT4SR,
		"_findOption": __findOptionTTAJe3D,
		"_helpLongFlag": __helpLongFlagNzRqI2y,
		"createOption": _createOptionOrdjfql,
		"_helpDescription": __helpDescriptionTqhBRPZ,
		"_helpFlags": __helpFlagsDGqa2kw
	}
		const _returnValuezyH2HUb = await _HelplgSNsNJ.visibleOptions(_cmdD4q6tlF)
		const _cmdz5rPs2l = false;
		const _returnValueWdmAXbR = -7.587102304444421;
		const _arrayValuecao32YB = () => { return _returnValueWdmAXbR };
		const _returnValueyxGHCHG = [_arrayValuecao32YB]
		const _longestOptionTermLengthTo3Ph6k = () => { return _returnValueyxGHCHG };
		const _returnValueXpn3kZe = undefined;
		const _longestSubcommandTermLengthlWPeoS1 = () => { return _returnValueXpn3kZe };
		const _returnValue6J7KSV = null;
		const _longestArgumentTermLengtheQdJMDb = () => { return _returnValue6J7KSV };
		const _helpershGYwc6 = {
			"longestOptionTermLength": _longestOptionTermLengthTo3Ph6k,
		"longestSubcommandTermLength": _longestSubcommandTermLengthlWPeoS1,
		"longestArgumentTermLength": _longestArgumentTermLengtheQdJMDb
	}
		const _returnValueiKyzvCG = await _HelplgSNsNJ.padWidth(_cmdz5rPs2l, _helpershGYwc6)
	});

	it('test for Help', async () => {
		const _HelpPSeH3Ci = new Help()
		const _descriptionxgObLyU = 9.014099528692395;
		const _cmdEVbabRs = {
			"description": _descriptionxgObLyU
	}
		const _returnValueAFyOM3 = await _HelpPSeH3Ci.commandDescription(_cmdEVbabRs)
		const _returnValueqdMppO = -0.7684841662164228;
		const _descriptionjrgXunB = () => { return _returnValueqdMppO };
		const _cmd6Wffo5 = {
			"description": _descriptionjrgXunB
	}
		const _returnValueY1QgTgN = await _HelpPSeH3Ci.subcommandDescription(_cmd6Wffo5)
	});

	it('test for Help', async () => {
		const _HelpYjGqooJ = new Help()
		const _cmdKdByvoN = "RC3mqis13ZqxVYgW5xjwcsLD1aYa1FYpNqfYUo1NAYy7aaRsUqcP";
		const _returnValue5dC7Kj = undefined;
		const _longestOptionTermLengthWHChoZr = () => { return _returnValue5dC7Kj };
		const _returnValueWu3AyXv = undefined;
		const _longestSubcommandTermLengthhZ46MfF = () => { return _returnValueWu3AyXv };
		const _returnValueHP5QTTY = null;
		const _longestArgumentTermLengthl2b9y38 = () => { return _returnValueHP5QTTY };
		const _helperhGIsRsu = {
			"longestOptionTermLength": _longestOptionTermLengthWHChoZr,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhZ46MfF,
		"longestArgumentTermLength": _longestArgumentTermLengthl2b9y38
	}
		const _returnValueL3QRWAa = await _HelpYjGqooJ.padWidth(_cmdKdByvoN, _helperhGIsRsu)
		const _argChoiceshCmpMdr = {
		
	}
		const _defaultValueda799n4 = undefined;
		const _defaultValueDescriptionyNouv33 = "CWJRGEJEG2Mc8PvXb6e8";
		const _descriptionP0G5lS3 = null;
		const _argumentfrKQ1ax = {
			"argChoices": _argChoiceshCmpMdr,
		"defaultValue": _defaultValueda799n4,
		"defaultValueDescription": _defaultValueDescriptionyNouv33,
		"description": _descriptionP0G5lS3
	}
		const _returnValuesM7cTBw = await _HelpYjGqooJ.argumentDescription(_argumentfrKQ1ax)
	});

	it('test for Help', async () => {
		const _HelpET6ieon = new Help()
		const _argChoicesqnJ7oPH = {
		
	}
		const _negateBsLNhLe = undefined;
		const _defaultValueZNFzwfK = undefined;
		const _defaultValueDescriptionFL9xTGN = 0.7052275202649056;
		const _envVarAmADCBZ = undefined;
		const _descriptioncKmmyJ = null;
		const _optionyVyS6cj = {
			"argChoices": _argChoicesqnJ7oPH,
		"negate": _negateBsLNhLe,
		"defaultValue": _defaultValueZNFzwfK,
		"defaultValueDescription": _defaultValueDescriptionFL9xTGN,
		"envVar": _envVarAmADCBZ,
		"description": _descriptioncKmmyJ
	}
		const _returnValueIF9jrX7 = await _HelpET6ieon.optionDescription(_optionyVyS6cj)
	});

	it('test for Help', async () => {
		const _HelpEA4U2Yu = new Help()
		const _returnValuejDtRFDw = null;
		const _namexH4n76 = () => { return _returnValuejDtRFDw };
		const _argument5Hz4m2 = {
			"name": _namexH4n76
	}
		const _returnValuebYxHC53 = await _HelpEA4U2Yu.argumentTerm(_argument5Hz4m2)
	});

	it('test for Help', async () => {
		const _Helpg7UbP2N = new Help()
		const _returnValueUC6OYsZ = {
		
	}
		const _cmdCKkCuw = () => { return _returnValueUC6OYsZ };
		const _returnValueIrKNgu = true;
		const _visibleOptionss93gogs = () => { return _returnValueIrKNgu };
		const _returnValueVGH2I4Z = -5.884360691192695;
		const _returnValueVErFb0c = () => { return _returnValueVGH2I4Z };
		const _optionTermITS5V5n = () => { return _returnValueVErFb0c };
		const _helpereMdxhxW = {
			"visibleOptions": _visibleOptionss93gogs,
		"optionTerm": _optionTermITS5V5n
	}
		const _returnValueoJGTFd = await _Helpg7UbP2N.longestOptionTermLength(_cmdCKkCuw, _helpereMdxhxW)
		const _optionsYMZpsDL = {
		
	}
		const _arrayValueEJNSJZ0 = false;
		const _arrayValueucE1kqj = undefined;
		const _arrayValuelTkncRY = undefined;
		const __hasHelpOptionlTDbmv = [_arrayValueEJNSJZ0, _arrayValueucE1kqj, _arrayValuelTkncRY]
		const __helpShortFlagMwayVDi = "U598e8TknlTiysEsU";
		const __findOptionhDlWKwX = "Udx1E14F4JvEJzXgxzC9Z6jjq9ieJqkkD86CJi02R8wq5U4XNYHEV4TKhX1wRxFi";
		const __helpLongFlago1YkIRy = true;
		const _returnValueaDM7zM7 = null;
		const _createOptionEdkFkHz = () => { return _returnValueaDM7zM7 };
		const _returnValueOMiXWgp = undefined;
		const __helpDescriptione1zGU9 = () => { return _returnValueOMiXWgp };
		const __helpFlagsXtXbzH8 = 7.983851466373007;
		const _cmdI4GfXbP = {
			"options": _optionsYMZpsDL,
		"_hasHelpOption": __hasHelpOptionlTDbmv,
		"_helpShortFlag": __helpShortFlagMwayVDi,
		"_findOption": __findOptionhDlWKwX,
		"_helpLongFlag": __helpLongFlago1YkIRy,
		"createOption": _createOptionEdkFkHz,
		"_helpDescription": __helpDescriptione1zGU9,
		"_helpFlags": __helpFlagsXtXbzH8
	}
		const _returnValueoTKjMxT = await _Helpg7UbP2N.visibleOptions(_cmdI4GfXbP)
		const _cmdhXagwnN = null;
		const _helperpy92oY = null;
		const _returnValueu1dCtQe = await _Helpg7UbP2N.longestSubcommandTermLength(_cmdhXagwnN, _helperpy92oY)
		const _cmdtj82htY = {
		
	}
		const _arrayValuehpOUjT5 = []
		const _arrayValueOLRikzq = {
		
	}
		const _sortSubcommandsHoItVoC = [_arrayValuehpOUjT5, _arrayValueOLRikzq]
		const _returnValuetWxj4dn = {
		
	}
		const _subcommandTermdgIjoI = () => { return _returnValuetWxj4dn };
		const _helperRThggrg = {
			"sortSubcommands": _sortSubcommandsHoItVoC,
		"subcommandTerm": _subcommandTermdgIjoI
	}
		const _returnValueeunNqdn = await _Helpg7UbP2N.longestSubcommandTermLength(_cmdtj82htY, _helperRThggrg)
		const _argChoicesfVd5gtv = {
		
	}
		const _defaultValuelRNlZpq = undefined;
		const _defaultValueDescriptionUONbVqz = undefined;
		const _descriptionob4uosH = undefined;
		const _argumentUYpDkEc = {
			"argChoices": _argChoicesfVd5gtv,
		"defaultValue": _defaultValuelRNlZpq,
		"defaultValueDescription": _defaultValueDescriptionUONbVqz,
		"description": _descriptionob4uosH
	}
		const _returnValueFQzHCH = await _Helpg7UbP2N.argumentDescription(_argumentUYpDkEc)
	});

	it('test for Help', async () => {
		const _HelpCW8nRk6 = new Help()
		const _returnValuesnRiFtI = 5.897280869593084;
		const _nameeQlXxDW = () => { return _returnValuesnRiFtI };
		const _argumentf9SqVz = {
			"name": _nameeQlXxDW
	}
		const _returnValuejPPMVlV = await _HelpCW8nRk6.argumentTerm(_argumentf9SqVz)
		const _cmdhiHWhUa = "szFtbspCAKrYh9KrpVAzBQHmr6u6Ank7dqnK4sTv6GXMTy3VdgMv4nu9zTtFlai0yo8KxxGoca65c9T3mL23oAOv5uA69";
		const _sortSubcommandsho7ZtMI = null;
		const _returnValueuDYlux6 = 9.705468394046807;
		const _subcommandTermgeRvZCf = () => { return _returnValueuDYlux6 };
		const _helperVD8IKp = {
			"sortSubcommands": _sortSubcommandsho7ZtMI,
		"subcommandTerm": _subcommandTermgeRvZCf
	}
		const _returnValueFOu71BF = await _HelpCW8nRk6.longestSubcommandTermLength(_cmdhiHWhUa, _helperVD8IKp)
		const _returnValueTUpj7m = false;
		const _arrayValueCZgvVB = () => { return _returnValueTUpj7m };
		const _arrayValuet7mdPHA = null;
		const _arrayValuecffM3M5 = [_arrayValuet7mdPHA]
		const _cmdsKae534 = [_arrayValueCZgvVB, _arrayValuecffM3M5]
		const _returnValuen3sNPkR = null;
		const _sortSubcommandsLbcrXre = () => { return _returnValuen3sNPkR };
		const _returnValuehqFdcoN = undefined;
		const _subcommandTermVnPhEc9 = () => { return _returnValuehqFdcoN };
		const _helpersskSlWG = {
			"sortSubcommands": _sortSubcommandsLbcrXre,
		"subcommandTerm": _subcommandTermVnPhEc9
	}
		const _returnValueG97rdwO = await _HelpCW8nRk6.longestSubcommandTermLength(_cmdsKae534, _helpersskSlWG)
	});

	it('test for Help', async () => {
		const _HelpXlwHTsj = new Help()
		const _arrayValueX27tdj = undefined;
		const _arrayValueo4VNPlK = 7.904930744289775;
		const _returnValuexiAjL8G = "mmPI3sJYfEAtETBRVKspVeWnYas2OPHTFURkf9wii8UK63ZTAua6pYJ9h7Qk";
		const _arrayValueqMuErBZ = () => { return _returnValuexiAjL8G };
		const _argumentd3AVna = [_arrayValueX27tdj, _arrayValueo4VNPlK, _arrayValueqMuErBZ]
		const _returnValueoBWL8zm = await _HelpXlwHTsj.argumentDescription(_argumentd3AVna)
		const _arrayValueEH68MYk = null;
		const _returnValueO6UM6n = -5.199362465463873;
		const _arrayValuef22ef8l = () => { return _returnValueO6UM6n };
		const _arrayValueJMswguz = false;
		const _cmdM2Vqxb = [_arrayValueEH68MYk, _arrayValuef22ef8l, _arrayValueJMswguz]
		const _returnValuep5KV6yP = await _HelpXlwHTsj.commandDescription(_cmdM2Vqxb)
		const _cmdbTT144z = 4.910680385212675;
		const _arrayValuePNTJzdq = false;
		const _arrayValuer40SyB1 = "TWIxp1QO6dEDubJSBRGoI3pGHU3Q9EaL8vab9qMeIraUSyRJMAEQ195cF";
		const _helperwhkcDax = [_arrayValuePNTJzdq, _arrayValuer40SyB1]
		const _returnValuemtFZYFA = await _HelpXlwHTsj.padWidth(_cmdbTT144z, _helperwhkcDax)
	});

	it('test for Help', async () => {
		const _HelpC0Jt5g = new Help()
		const _arrayValueLmKgzmB = null;
		const _argumentflXUKDX = [_arrayValueLmKgzmB]
		const _returnValuexSDuI5Z = await _HelpC0Jt5g.argumentDescription(_argumentflXUKDX)
		const _arrayValueGKjBPzk = null;
		const _arrayValuel4zMvd2 = "o32kWkjyCE8Xb1Yy3XzgGtJntaow5A5GII9DOj46lhrE9wzxaVCJmTSjMmen54640HwmNUbBrGB3Ao2NH";
		const _cmdNrZpMkr = [_arrayValueGKjBPzk, _arrayValuel4zMvd2]
		const _returnValue4bSRzd = await _HelpC0Jt5g.visibleCommands(_cmdNrZpMkr)
		const _returnValueYhwnDg2 = null;
		const _arrayValueu6KDGvv = () => { return _returnValueYhwnDg2 };
		const _arrayValueuRCQ3We = "iIsSUkSfiMbNQyxdUpYrGMNxUHLBzePke";
		const _arrayValueC0P2JJX = "jLvoPK";
		const _arrayValue33WSDx = "XA3fP9CRTphSYu17H4oPSx64lDVxmVOJJkbByrn";
		const _arrayValueWfibEtL = [_arrayValue33WSDx]
		const _arrayValueN4LIGm4 = "O4Y2ale5Rdy5GLtUcrj6GLxIiJiRSQuq0PyMguB4EDanwIrcN5OSp5yF7nTEHREKAjS0ajIjLa23Ctmi7aliL1NqbgaY";
		const _returnValuej52lgid = null;
		const _arrayValueCLXr69M = () => { return _returnValuej52lgid };
		const _arrayValueAxEda7p = "FJ";
		const _arrayValueUdR0qDP = [_arrayValueWfibEtL, _arrayValueN4LIGm4, _arrayValueCLXr69M, _arrayValueAxEda7p]
		const _arrayValueyP35mcd = undefined;
		const _arrayValueiw2ZCF = [_arrayValueUdR0qDP, _arrayValueyP35mcd]
		const _arrayValueUwdJ3j = [_arrayValueC0P2JJX, _arrayValueiw2ZCF]
		const _arrayValueXAs19rP = -7.003509390520871;
		const _arrayValueB8iounM = "ucdZQLCI81KGehFsq2lx95lqpgFfeQ9cvG2Na7KtZwkvbeUimci6QwoVYvx6cp3HfOPMB5PfI";
		const _arrayValuelIrhFW = [_arrayValueu6KDGvv, _arrayValueuRCQ3We, _arrayValueUwdJ3j, _arrayValueXAs19rP, _arrayValueB8iounM]
		const _arrayValuehdFjy4L = -3.194795870532408;
		const _arrayValueAxbDTiw = undefined;
		const _cmdAfhj1HT = [_arrayValuelIrhFW, _arrayValuehdFjy4L, _arrayValueAxbDTiw]
		const _arrayValueZyvuPi = false;
		const _helperPGQjymT = [_arrayValueZyvuPi]
		const _returnValueSAlLDq2 = await _HelpC0Jt5g.padWidth(_cmdAfhj1HT, _helperPGQjymT)
	});

	it('test for Help', async () => {
		const _HelpahyTqS = new Help()
		const _arrayValueGIb0bwP = {
		
	}
		const _arrayValueL4jTqGZ = false;
		const _arrayValuerKhQpMy = null;
		const _arrayValuejNIhKtY = null;
		const _arrayValuexjzkqpk = true;
		const _arrayValuevoUvnyT = undefined;
		const _returnValueYFsAIMw = [_arrayValuexjzkqpk, _arrayValuevoUvnyT]
		const _arrayValueBrDcNig = () => { return _returnValueYFsAIMw };
		const _arrayValueDeApZTK = undefined;
		const _arrayValuevtJ9qe = [_arrayValuejNIhKtY, _arrayValueBrDcNig, _arrayValueDeApZTK]
		const _optionRdvYU1A = [_arrayValueGIb0bwP, _arrayValueL4jTqGZ, _arrayValuerKhQpMy, _arrayValuevtJ9qe]
		const _returnValueIGEz1bP = await _HelpahyTqS.optionDescription(_optionRdvYU1A)
	});

	it('test for Help', async () => {
		const _HelpKPHl1ik = new Help()
		const _returnValuePGLqNUl = undefined;
		const _matche5TCByt = () => { return _returnValuePGLqNUl };
		const _returnValuelw0l3y8 = -3.8185011764381223;
		const _substrotFq5mo = () => { return _returnValuelw0l3y8 };
		const _strO8ycMS = {
			"match": _matche5TCByt,
		"substr": _substrotFq5mo
	}
		const _widthuYTAQI = 1.5821967625517175;
		const _indentgAQWnIC = 3.487185201159029;
		const _minColumnWidthmYnO9Bm = 5.225600251316946;
		const _returnValuecjoHgqO = await _HelpKPHl1ik.wrap(_strO8ycMS, _widthuYTAQI, _indentgAQWnIC, _minColumnWidthmYnO9Bm)
		const _returnValueJru6ysn = undefined;
		const _cmdpeBcc5u = () => { return _returnValueJru6ysn };
		const _helperxzwjSSQ = new Help()
		const _returnValueUePWZXv = false;
		const _cmdmXOLQH = () => { return _returnValueUePWZXv };
		const _returnValueQBUtzbR = await _helperxzwjSSQ.subcommandDescription(_cmdmXOLQH)
		const _returnValueoTntASg = "ASFR32cdLtMKnw7KGW1NLEo3XsO4hSOdf4FB4F8kwQ1Ox";
		const _cmdMZTxVN = () => { return _returnValueoTntASg };
		const _returnValueo7DCcA0 = await _helperxzwjSSQ.subcommandDescription(_cmdMZTxVN)
		const _cmdDTT2Wd5 = "6eLeEwdcMrFZDXjKKCh7FdBDpV90PiEJB8445d0KRr4sFgLyw89sACS5rkvrwNDzmenIT9srzDzUbk";
		const _returnValueJiKmHDp = await _helperxzwjSSQ.subcommandTerm(_cmdDTT2Wd5)
		const _returnValuehFTwqID = await _HelpKPHl1ik.padWidth(_cmdpeBcc5u, _helperxzwjSSQ)
		const _returnValueH0JZdj = undefined;
		const _sliceqZy31cT = () => { return _returnValueH0JZdj };
		const _namevfV1yf0 = {
			"slice": _sliceqZy31cT
	}
		const _descriptionPV71X9W = -7.810469424210005;
		const _cmdWfpKbc = new Argument(_namevfV1yf0, _descriptionPV71X9W)
		const _valueBGVmFdR = undefined;
		const _descriptionMP8tfwz = undefined;
		const _returnValuenXdO4kr = await _cmdWfpKbc.default(_valueBGVmFdR, _descriptionMP8tfwz)
		const _fnyAZPU6 = {
		
	}
		const _returnValueVi91sTw = await _cmdWfpKbc.argParser(_fnyAZPU6)
		const _returnValueH6BNdQg = {
		
	}
		const _includesC6t01kt = () => { return _returnValueH6BNdQg };
		const _returnValuem1bJRa0 = null;
		const _joinF94bWH3 = () => { return _returnValuem1bJRa0 };
		const _valuesPwOfa2U = {
			"includes": _includesC6t01kt,
		"join": _joinF94bWH3
	}
		const _returnValueEOWTRnO = await _cmdWfpKbc.choices(_valuesPwOfa2U)
		const _fnK6iDx3E = undefined;
		const _returnValueNRWhepa = await _cmdWfpKbc.argParser(_fnK6iDx3E)
		const _returnValueJJuRUJz = await _HelpKPHl1ik.commandDescription(_cmdWfpKbc)
	});

	it('test for Help', async () => {
		const _HelpxgYE42c = new Help()
		const _returnValueTGpY31q = {
		
	}
		const _argumentGqLX3xk = () => { return _returnValueTGpY31q };
		const _returnValueiP4yuC0 = await _HelpxgYE42c.argumentDescription(_argumentGqLX3xk)
		const _returnValueVUYK0oy = undefined;
		const _matchlmPcHy = () => { return _returnValueVUYK0oy };
		const _returnValueQMWHkMo = undefined;
		const _substryZqkne = () => { return _returnValueQMWHkMo };
		const _strHvkdmGS = {
			"match": _matchlmPcHy,
		"substr": _substryZqkne
	}
		const _widthDpCoiIH = -3.5811371043137985;
		const _indentUmXvsnv = -9.47736676104439;
		const _minColumnWidthIT4oppV = null;
		const _returnValueiDMapnV = await _HelpxgYE42c.wrap(_strHvkdmGS, _widthDpCoiIH, _indentUmXvsnv, _minColumnWidthIT4oppV)
		const _returnValuetTDfFWE = null;
		const _cmdm4qpDe0 = () => { return _returnValuetTDfFWE };
		const _returnValueNqlMZsi = await _HelpxgYE42c.commandUsage(_cmdm4qpDe0)
		const _returnValueKkrD3Jy = undefined;
		const _cmdX3a3l6u = () => { return _returnValueKkrD3Jy };
		const _returnValuedSdcbn1 = await _HelpxgYE42c.visibleArguments(_cmdX3a3l6u)
	});

	it('test for Help', async () => {
		const _HelpAAYT2E1 = new Help()
		const _namedyxsv9i = null;
		const _cmdiR0Ditm = new Command(_namedyxsv9i)
		const _returnValuetz6tydT = "BRxdhEGUskFGJyHw7tCS7cy9DedORunr5ahEMtXvHq3TP4TiFcgU2HKPRYfOxuGnFGD8pE304QuLxYCfaeQmmJjvrDIa1";
		const _thenYHWqL9p = () => { return _returnValuetz6tydT };
		const _promiseOqULdE = {
			"then": _thenYHWqL9p
	}
		const _returnValuezL7GSTi = false;
		const _arrayValueUXvNF3q = () => { return _returnValuezL7GSTi };
		const _returnValueRaWSJUX = [_arrayValueUXvNF3q]
		const _fnFRp9JJc = () => { return _returnValueRaWSJUX };
		const _returnValueIJZON4W = await _cmdiR0Ditm._chainOrCall(_promiseOqULdE, _fnFRp9JJc)
		const _fnDerxRJ4 = {
		
	}
		const _returnValueJ8loRuP = await _cmdiR0Ditm.exitOverride(_fnDerxRJ4)
		const _returnValueNipOLaR = await _HelpAAYT2E1.subcommandTerm(_cmdiR0Ditm)
		const _nameJyZat5z = 5.270340850612884;
		const _cmdr1FwbA2 = new Command(_nameJyZat5z)
		const _returnValueIauLWq1 = await _cmdr1FwbA2._parseOptionsEnv()
		const _flagsdmNTGVe = {
		
	}
		const _descriptionOjpJt4U = {
		
	}
		const _returnValueOeY6gjD = await _cmdr1FwbA2.createOption(_flagsdmNTGVe, _descriptionOjpJt4U)
		const _mandatoryDWXLimq = "DU3xG9pMtttG";
		const _configlrfdGS8 = {
			"mandatory": _mandatoryDWXLimq
	}
		const _arrayValuetfuL3CB = undefined;
		const _returnValueDwRDPOn = null;
		const _arrayValueA4BsLwb = () => { return _returnValueDwRDPOn };
		const _arrayValuemsQ1rWd = {
		
	}
		const _arrayValuecF9PGv = [_arrayValueA4BsLwb, _arrayValuemsQ1rWd]
		const _flagsUYTFGgP = [_arrayValuetfuL3CB, _arrayValuecF9PGv]
		const _descriptionpDkvW32 = null;
		const _fnlXKJaFs = {
		
	}
		const _defaultValuezC5BNd0 = "58QgSKUyILaagse6iaUKsK8EYBYanctjxb";
		const _returnValueZkYLvTK = await _cmdr1FwbA2._optionEx(_configlrfdGS8, _flagsUYTFGgP, _descriptionpDkvW32, _fnlXKJaFs, _defaultValuezC5BNd0)
		const _returnValueuJdqc73 = await _HelpAAYT2E1.commandDescription(_cmdr1FwbA2)
		const _cmdrKfjk7D = "PEMuII5O7XJ3ZLu44qmZJD";
		const _returnValueqKS7gTN = await _HelpAAYT2E1.visibleOptions(_cmdrKfjk7D)
		const _returnValueBVQAvX2 = null;
		const _returnValueyl16jGK = () => { return _returnValueBVQAvX2 };
		const _description0MRf9y = () => { return _returnValueyl16jGK };
		const _cmdpnNaz7h = {
			"description": _description0MRf9y
	}
		const _returnValuesS4Tafl = await _HelpAAYT2E1.subcommandDescription(_cmdpnNaz7h)
		const _nametVvBnFg = undefined;
		const _cmduFog2XQ = new Command(_nametVvBnFg)
		const _arrayValuefXKapzY = "tQN6udbuR3rRKWJyLo9myvbMQDyLZJyedKoSObfKUCRDS9MN4zgtafhWQlSN8iCnjYnR7Ft";
		const _returnValueTrw6t1p = [_arrayValuefXKapzY]
		const _thenFucCiAX = () => { return _returnValueTrw6t1p };
		const _promise1R2g1N = {
			"then": _thenFucCiAX
	}
		const _returnValuew9IBlsN = undefined;
		const _returnValueidIbLlz = () => { return _returnValuew9IBlsN };
		const _fni2utqAA = () => { return _returnValueidIbLlz };
		const _returnValuer0wH3CD = await _cmduFog2XQ._chainOrCall(_promise1R2g1N, _fni2utqAA)
		const _returnValueIQzLWmO = await _HelpAAYT2E1.subcommandTerm(_cmduFog2XQ)
	});

	it('test for Help', async () => {
		const _HelpfHGnVfG = new Help()
		const __namesZ5xZdl = {
		
	}
		const __aliasesgEb8AQd = "VHjaB9pD8yphjIWM15r97jwLLe";
		const _parentyiuvz9 = {
		
	}
		const _returnValuebFBEwmK = 5.731887945787058;
		const _usageNl8Q6hd = () => { return _returnValuebFBEwmK };
		const _cmdRS08yrB = {
			"_name": __namesZ5xZdl,
		"_aliases": __aliasesgEb8AQd,
		"parent": _parentyiuvz9,
		"usage": _usageNl8Q6hd
	}
		const _returnValueegrBs0z = await _HelpfHGnVfG.commandUsage(_cmdRS08yrB)
		const _cmdhVyC3ez = "R";
		const _returnValueInBHazk = await _HelpfHGnVfG.visibleOptions(_cmdhVyC3ez)
	});

	it('test for Help', async () => {
		const _HelpRu6XaAt = new Help()
		const _nameVBqHIMo = "cyXQBnW5nAeGVS57CmWEwlJXPUJImNXy6N9LkNBwiCsPavDYtBCoegLR3MihM34MBp";
		const _cmdww3Emzg = new Command(_nameVBqHIMo)
		const _returnValueotS8Zus = await _cmdww3Emzg._checkNumberOfArguments()
		const _returnValueefhFUrf = await _HelpRu6XaAt.visibleOptions(_cmdww3Emzg)
		const _cmdoKYkGQQ = null;
		const _helperr8h8gP9 = new Help()
		const _cmdun62ueU = "veS7N6XreibdUq4A5";
		const _returnValueEgHAyy0 = await _helperr8h8gP9.commandUsage(_cmdun62ueU)
		const _arrayValueqhJfJGo = false;
		const _cmdY5OmHz6 = [_arrayValueqhJfJGo]
		const _arrayValueyhwV9Fd = 5.142453994225919;
		const _arrayValueDOCrC5s = 1.704480141931711;
		const _arrayValueZvrvzy = true;
		const _helperxJEBaBE = [_arrayValueyhwV9Fd, _arrayValueDOCrC5s, _arrayValueZvrvzy]
		const _returnValuejg6A5mI = await _helperr8h8gP9.formatHelp(_cmdY5OmHz6, _helperxJEBaBE)
		const _arrayValuelO3XKm = undefined;
		const _arrayValueMexF0N = {
		
	}
		const _returnValuemz2Pvo = null;
		const _arrayValuetdLZcEt = () => { return _returnValuemz2Pvo };
		const _arrayValuecUU0y1t = [_arrayValuetdLZcEt]
		const _optionYHYtscD = [_arrayValuelO3XKm, _arrayValueMexF0N, _arrayValuecUU0y1t]
		const _returnValuetMkxRsb = await _helperr8h8gP9.optionDescription(_optionYHYtscD)
		const _returnValuem44jkjM = await _HelpRu6XaAt.longestSubcommandTermLength(_cmdoKYkGQQ, _helperr8h8gP9)
		const _returnValueNvR0oJf = undefined;
		const _includesZppbtNt = () => { return _returnValueNvR0oJf };
		const _flagszJvFf22 = {
			"includes": _includesZppbtNt
	}
		const _descriptionM36VN5c = undefined;
		const _argumente06tmA = new Option(_flagszJvFf22, _descriptionM36VN5c)
		const _returnValueDT7cRRb = await _argumente06tmA.name()
		const _returnValuevZExm6 = await _argumente06tmA.attributeName()
		const _returnValueEcZlzcp = await _HelpRu6XaAt.argumentTerm(_argumente06tmA)
		const _cmdvOXEIKi = "q8kiKAqWDgbmLOAqRMUJjFTNs4qLWYIfoLaTm2q9vPphPYfQvgRB";
		const _returnValueQVVAFFH = "qJ8EWlNFox2pmWkiqPyncA76WvTi7JoKq5RpAgR4tiP9M4uXEpVDTx4iSNqYEhWyGgnLBAdxOMtu6ng4MaRWr";
		const _longestOptionTermLengthT7eMTsX = () => { return _returnValueQVVAFFH };
		const _returnValueACrf33 = 2.4683127125064726;
		const _longestSubcommandTermLengthInU4S5 = () => { return _returnValueACrf33 };
		const _returnValuehTPhO4b = 5.533874109468272;
		const _longestArgumentTermLengthd4VkNF1 = () => { return _returnValuehTPhO4b };
		const _helperw5OJekU = {
			"longestOptionTermLength": _longestOptionTermLengthT7eMTsX,
		"longestSubcommandTermLength": _longestSubcommandTermLengthInU4S5,
		"longestArgumentTermLength": _longestArgumentTermLengthd4VkNF1
	}
		const _returnValuek3eclhC = await _HelpRu6XaAt.padWidth(_cmdvOXEIKi, _helperw5OJekU)
	});

	it('test for Help', async () => {
		const _HelpMR4kTuy = new Help()
		const _returnValuet4CRboc = undefined;
		const _name2rwTNF = () => { return _returnValuet4CRboc };
		const _returnValuebMHP7Z9 = true;
		const _descriptionhjzhO4w = () => { return _returnValuebMHP7Z9 };
		const _argumento7KTVHL = new Argument(_name2rwTNF, _descriptionhjzhO4w)
		const _valueU1hpgGL = {
		
	}
		const _arrayValueXh8j9zz = false;
		const _arrayValueQldRA2Y = null;
		const _arrayValueKZdCl2 = null;
		const _arrayValueBwdJUxz = {
		
	}
		const _descriptionJ0KOEVm = [_arrayValueXh8j9zz, _arrayValueQldRA2Y, _arrayValueKZdCl2, _arrayValueBwdJUxz]
		const _returnValuetJOMsyf = await _argumento7KTVHL.default(_valueU1hpgGL, _descriptionJ0KOEVm)
		const _returnValuetDhiOSE = await _argumento7KTVHL.argRequired()
		const _returnValueiNntNM8 = await _argumento7KTVHL.argOptional()
		const _returnValueknc5BEv = await _HelpMR4kTuy.argumentDescription(_argumento7KTVHL)
		const _cmdhtDDsOh = "uOmN55iHItqaKOYol6TPhvaGXkScNuhtQUrmp6eH0V1ktVcPfBvKRw1v8jNhkOlBiGqpf5VOmkLFmOdRLuaMegtSrCeFDO";
		const _returnValuePpZG8hT = await _HelpMR4kTuy.visibleArguments(_cmdhtDDsOh)
		const _cmdBSsOOvV = undefined;
		const _helperlGg6xAD = "CNCXQAMUaH7eg2qdEBXwNEOJBIxjxL1jVVtR4y3quon";
		const _returnValueQynprdP = await _HelpMR4kTuy.longestSubcommandTermLength(_cmdBSsOOvV, _helperlGg6xAD)
		const _returnValuecznUTT = -2.7860236609176408;
		const _cmdT5qR63 = () => { return _returnValuecznUTT };
		const _sortSubcommandsRlkHGsI = null;
		const _returnValuepGqQBo8 = "jM4LVPBCzJGdmv5YF";
		const _subcommandTermH6ttOEl = () => { return _returnValuepGqQBo8 };
		const _helperS0flznx = {
			"sortSubcommands": _sortSubcommandsRlkHGsI,
		"subcommandTerm": _subcommandTermH6ttOEl
	}
		const _returnValueVvord3K = await _HelpMR4kTuy.formatHelp(_cmdT5qR63, _helperS0flznx)
	});

	it('test for Help', async () => {
		const _Help40HbMn = new Help()
		const _cmdfJYkpoE = null;
		const _helperV5Df0Si = new Help()
		const _returnValueWR9tvXQ = -9.184697198425688;
		const _optionVuVRDfH = () => { return _returnValueWR9tvXQ };
		const _returnValueK1OQ4Yu = await _helperV5Df0Si.optionDescription(_optionVuVRDfH)
		const _cmdIzAXoRy = true;
		const _helperQTW606y = new Help()
		const _returnValueGSnJoTB = false;
		const _cmdAZchQVx = () => { return _returnValueGSnJoTB };
		const _helperW5lZ732 = new Help()
		const _flagsWPtSLWj = "opO3ka5dJ3G3jy5pj7v5HUGImyovOcihy8eArvLmowIffRaQsEJ2wzbPqqw";
		const _descriptionjAs2Scd = -7.324694358841628;
		const _cmdjdzmH7 = new Option(_flagsWPtSLWj, _descriptionjAs2Scd)
		const _fnMSZZlCD = undefined;
		const _returnValueLO7PuA = await _cmdjdzmH7.argParser(_fnMSZZlCD)
		const _hideocoYrxN = false;
		const _returnValueWYxjjDG = await _cmdjdzmH7.hideHelp(_hideocoYrxN)
		const _returnValueN2JuCWx = await _helperW5lZ732.commandDescription(_cmdjdzmH7)
		const _arrayValuehplVHwO = true;
		const _cmdGP5aJmP = [_arrayValuehplVHwO]
		const _returnValuecPw2gRS = await _helperW5lZ732.visibleOptions(_cmdGP5aJmP)
		const _returnValuePCitFAC = await _helperQTW606y.longestSubcommandTermLength(_cmdAZchQVx, _helperW5lZ732)
		const _returnValuebUOFeF3 = true;
		const _optionKfumMd5 = () => { return _returnValuebUOFeF3 };
		const _returnValueljE6FEg = await _helperQTW606y.optionDescription(_optionKfumMd5)
		const _returnValueupDYRYZ = await _helperV5Df0Si.padWidth(_cmdIzAXoRy, _helperQTW606y)
		const _namee7mTjG0 = true;
		const _cmdMpGPfJV = new Command(_namee7mTjG0)
		const _returnValueT6nxQv5 = false;
		const _applyvppJWly = () => { return _returnValueT6nxQv5 };
		const _fnk5oYMQF = {
			"apply": _applyvppJWly
	}
		const _returnValueLQ4nSSB = await _cmdMpGPfJV.action(_fnk5oYMQF)
		const _returnValueoH554uo = -1.2369026596264039;
		const _argumentovJtlGD = () => { return _returnValueoH554uo };
		const _returnValuegxCoYF = await _cmdMpGPfJV.addArgument(_argumentovJtlGD)
		const _returnValueFlNWIk = true;
		const _matcho0BjhLT = () => { return _returnValueFlNWIk };
		const _nameAndArgsyXuOEQh = {
			"match": _matcho0BjhLT
	}
		const _actionOptsOrExecDescnHFn8mt = null;
		const _execOptszTA9R3l = undefined;
		const _returnValueCeYUgHf = await _cmdMpGPfJV.command(_nameAndArgsyXuOEQh, _actionOptsOrExecDescnHFn8mt, _execOptszTA9R3l)
		const _eventnrBB0jO = 5.232134008759781;
		const _listenerP4KEkUw = "0MIJsxa";
		const _returnValuefPzRRev = await _cmdMpGPfJV.hook(_eventnrBB0jO, _listenerP4KEkUw)
		const _returnValueX8waHk = await _helperV5Df0Si.commandUsage(_cmdMpGPfJV)
		const _cmdABDeqMn = "QLYLmlIWgFb3Pam01iOdmdFvuE290kYME8Nyinu9gVopRB59AKcTXjT8sp1QqdUEefAvtDEGwEljIXaYmITFnKqJZ";
		const _returnValueyY669k = await _helperV5Df0Si.visibleArguments(_cmdABDeqMn)
		const _returnValueQV45g4O = await _Help40HbMn.longestSubcommandTermLength(_cmdfJYkpoE, _helperV5Df0Si)
		const _cmdL9eyUBx = true;
		const _helperezPiJTg = new Help()
		const _cmdoBi0sFT = "8dsnjf5TXcWlEovYMzo563FOrpn9AH05J2R6PrWadUPISenSrRjdijuMRJM5rj1dKSVLqLizRzVacn0djfaK5IqIME6AW";
		const _returnValueKeAp5b = await _helperezPiJTg.visibleCommands(_cmdoBi0sFT)
		const _cmdBTeWJNs = undefined;
		const _helperWOfUpG3 = new Help()
		const _cmdvfsAhC0 = null;
		const _helperFuQ4ZKS = new Help()
		const _nameBFXmGQ0 = null;
		const _cmdOTNLDDY = new Command(_nameBFXmGQ0)
		const _returnValueXFlJGUo = []
		const _argumentGN5DA9J = () => { return _returnValueXFlJGUo };
		const _returnValueaKmPB6V = await _cmdOTNLDDY.addArgument(_argumentGN5DA9J)
		const _strow6vyBF = undefined;
		const _flagsCXjrl6b = {
		
	}
		const _descriptionQ8tlZsn = {
		
	}
		const _returnValueRyTMNBl = await _cmdOTNLDDY.version(_strow6vyBF, _flagsCXjrl6b, _descriptionQ8tlZsn)
		const _configurationGMA8SuQ = undefined;
		const _returnValueCXivG58 = await _cmdOTNLDDY.configureHelp(_configurationGMA8SuQ)
		const _namesbLliS6t = "EsyL5YaDKOcBbZc6FoC1iyDIKECGETxt7xUS9eiE9tW2ve1qSUTLfV9br7xPbFCDK1bfgCsmCtDzsMPUy71oIK";
		const _returnValuexwEPEJu = await _cmdOTNLDDY.arguments(_namesbLliS6t)
		const _arrayValuedHtee5t = undefined;
		const _arrayValueMNH6QE4 = undefined;
		const _arrayValueyMm8Tcr = -2.9804390536264123;
		const _keyD92WVkF = [_arrayValuedHtee5t, _arrayValueMNH6QE4, _arrayValueyMm8Tcr]
		const _returnValues2Joxdo = await _cmdOTNLDDY.getOptionValueSource(_keyD92WVkF)
		const _returnValueHt9A825 = await _helperFuQ4ZKS.commandUsage(_cmdOTNLDDY)
		const _arrayValueF7yeMWm = null;
		const _arrayValuexAIkuOI = undefined;
		const _cmdyTgcMGZ = [_arrayValueF7yeMWm, _arrayValuexAIkuOI]
		const _returnValuesgYpl2i = await _helperFuQ4ZKS.visibleOptions(_cmdyTgcMGZ)
		const _nametpyvG92 = null;
		const _cmdLu2k5u3 = new Command(_nametpyvG92)
		const _arrayValueFU5hMk6 = {
		
	}
		const _arrayValueoSwAaqX = null;
		const _arrayValueBhwzAOY = null;
		const _cmdCUAD1xk = [_arrayValueFU5hMk6, _arrayValueoSwAaqX, _arrayValueBhwzAOY]
		const _returnValueso9aQg2 = "F7CL1Fk2qWqvbEbW9EK5yzU3";
		const _isDefaultIXt7doT = () => { return _returnValueso9aQg2 };
		const _optsq9tmkUY = {
			"isDefault": _isDefaultIXt7doT
	}
		const _returnValueMo3BWXk = await _cmdLu2k5u3.addCommand(_cmdCUAD1xk, _optsq9tmkUY)
		const _nameAeRgHZ = "4P7BpxjoO3K2dPB6wOavsEN4aaJ1LvbGLG8Gd1gE";
		const _returnValueYwL0Xxb = await _cmdLu2k5u3.createCommand(_nameAeRgHZ)
		const _returnValueSqheGp = await _helperFuQ4ZKS.subcommandDescription(_cmdLu2k5u3)
		const _returnValueI18dgKE = await _helperWOfUpG3.longestArgumentTermLength(_cmdvfsAhC0, _helperFuQ4ZKS)
		const _arrayValuehDWs7Ip = "mS0LF6cw2WXw8zG3pVuW53ZYkicqDd9vYlb7RLGmnBEuGA0c6o1Md9MYwulzYiKYylOmoBix";
		const _arrayValueclbGHCD = undefined;
		const _cmdMoT6Lus = [_arrayValuehDWs7Ip, _arrayValueclbGHCD]
		const _helperwwhUEE = new Help()
		const _flagsf20hQ4J = "l86JKRtwHsHnOkzFondge3GjdQKOyi4OjzjbEQK72o3SppdTu6dZsY5DHbQNLO8";
		const _descriptionAyicG0 = "TmY4eSJPpXSb9Ob5F2kDsnULJYSQLrMp8w39MJkJybR7JqKcMu6nWQOFgL6ELLJf7dvv4";
		const _argumentLEeOxGp = new Option(_flagsf20hQ4J, _descriptionAyicG0)
		const _hidewVxCnP0 = false;
		const _returnValuevkhfOco = await _argumentLEeOxGp.hideHelp(_hidewVxCnP0)
		const _valuepS1rfu = 9.372401688871346;
		const _returnValuerkwjU3X = "f6pnIwNNRwYCKdVyz1torQwKjPwkIIpB3x89";
		const _concatxhjqWl8 = () => { return _returnValuerkwjU3X };
		const _previousZledh9c = {
			"concat": _concatxhjqWl8
	}
		const _returnValueuyi8IhL = await _argumentLEeOxGp._concatValue(_valuepS1rfu, _previousZledh9c)
		const _returnValueDkiez48 = await _helperwwhUEE.argumentDescription(_argumentLEeOxGp)
		const _returnValueV0WOmcK = await _helperWOfUpG3.longestArgumentTermLength(_cmdMoT6Lus, _helperwwhUEE)
		const _optionBVsP4h0 = "8kLUdOeyx";
		const _returnValuebqDR30T = await _helperWOfUpG3.optionTerm(_optionBVsP4h0)
		const _returnValueCSFT8sO = await _helperezPiJTg.padWidth(_cmdBTeWJNs, _helperWOfUpG3)
		const _returnValuexa0ZO7U = await _Help40HbMn.longestArgumentTermLength(_cmdL9eyUBx, _helperezPiJTg)
		const _optionvVhKj1J = "Enx7DMyPc1On1rLrY54090YzRSa";
		const _returnValueMqTfdNM = await _Help40HbMn.optionTerm(_optionvVhKj1J)
		const _namedmcbgxE = "ZIBrCEJJVRR7gYnacXHlC98BPGoeRhTMF9SeAMBEJsYeiraRIlMNR1iaFqsamOvrzpWhzaBBd76Q21TzZCejhKv1mvwk6oylI";
		const _descriptionlqmW2lc = undefined;
		const _argumentsY2ebpu = new Argument(_namedmcbgxE, _descriptionlqmW2lc)
		const _fnQQwqFcY = true;
		const _returnValueLsx0h5o = await _argumentsY2ebpu.argParser(_fnQQwqFcY)
		const _returnValueso62nCI = await _argumentsY2ebpu.argRequired()
		const _returnValueeQgxc6E = await _argumentsY2ebpu.argRequired()
		const _returnValuevx9Loh9 = await _Help40HbMn.argumentTerm(_argumentsY2ebpu)
	});

	it('test for Help', async () => {
		const _HelpDwZmhVs = new Help()
		const _nameWtRDmz8 = undefined;
		const _cmdrKYScoj = new Command(_nameWtRDmz8)
		const _strAp9gYS9 = undefined;
		const _flagsMUvO3wj = {
		
	}
		const _descriptionhKNgJaB = {
		
	}
		const _returnValueXr0e9T4 = await _cmdrKYScoj.version(_strAp9gYS9, _flagsMUvO3wj, _descriptionhKNgJaB)
		const _returnValueGbV0pN8 = await _cmdrKYScoj._parseOptionsEnv()
		const _returnValuexBm1QRe = await _HelpDwZmhVs.visibleCommands(_cmdrKYScoj)
		const _cmdFp6TZFE = null;
		const _arrayValueOWY76HR = "HsR9aAVf5HQEbd2hC4q8YiurhagTsaHHQWvJRBTp23U5IMjSwmRaqTgsVGtefcLpqWF3pfl6LqGO6VObVC3QuTrlY";
		const _arrayValueiiVlkW8 = false;
		const _arrayValueez99HGM = null;
		const _returnValuelMT1tCv = [_arrayValueOWY76HR, _arrayValueiiVlkW8, _arrayValueez99HGM]
		const _visibleArgumentsY1v9Ucq = () => { return _returnValuelMT1tCv };
		const _argumentTermrd9mwTY = false;
		const _helperOnGLSe3 = {
			"visibleArguments": _visibleArgumentsY1v9Ucq,
		"argumentTerm": _argumentTermrd9mwTY
	}
		const _returnValuem1UvBHP = await _HelpDwZmhVs.longestArgumentTermLength(_cmdFp6TZFE, _helperOnGLSe3)
	});

	it('test for Help', async () => {
		const _HelpkFstvdg = new Help()
		const _nameTBFKXSJ = undefined;
		const _cmdWNcUlC8 = new Command(_nameTBFKXSJ)
		const _returnValueHQqlDij = await _cmdWNcUlC8._hasImplicitHelpCommand()
		const _flagscXlGKQs = "eENHCu5aR";
		const _arrayValueNalTOfU = -6.9589317093291285;
		const _descriptionRT26tB = [_arrayValueNalTOfU]
		const _fnptLXcm = "PfnaWVA2Mx3TTjoCcfbvOdl4supXUMnLkuvKqzEt2JbDmon7nQg0t27";
		const _returnValuezoazyRl = "PtoPn";
		const _defaultValuev5SZ1b5 = () => { return _returnValuezoazyRl };
		const _returnValuezrnO3o = await _cmdWNcUlC8.requiredOption(_flagscXlGKQs, _descriptionRT26tB, _fnptLXcm, _defaultValuev5SZ1b5)
		const _allowExcessWDIelqu = {
		
	}
		const _returnValuelBhlJER = await _cmdWNcUlC8.allowExcessArguments(_allowExcessWDIelqu)
		const _errorULE7GiM = false;
		const _commandi6ECTXW = -6.986705283167115;
		const _contextOptionsNWFRll = {
			"error": _errorULE7GiM,
		"command": _commandi6ECTXW
	}
		const _returnValueWggTSYs = await _cmdWNcUlC8.helpInformation(_contextOptionsNWFRll)
		const _fnzqrvTNa = {
		
	}
		const _returnValueSRYrIR5 = await _cmdWNcUlC8.exitOverride(_fnzqrvTNa)
		const _returnValuetfOHjMH = await _HelpkFstvdg.subcommandTerm(_cmdWNcUlC8)
		const _returnValuevsxoLW4 = 3.1563944198132354;
		const _optionhlCFOvc = () => { return _returnValuevsxoLW4 };
		const _returnValueWTFiAj9 = await _HelpkFstvdg.optionDescription(_optionhlCFOvc)
		const _nameOxvFqlz = {
		
	}
		const _cmdwJUHeiw = new Command(_nameOxvFqlz)
		const _arrayValueuoQP4D8 = "bEHSarv0LFFIQmojYgKNRLBVuENSPoPBnMwYB13ryUw9SHgHL7zJEjJ69Tcq4DzFr1BhC";
		const _arrayValueQFTGakN = null;
		const _arrayValueQXwCyKQ = true;
		const _arrayValuesSCY0l = [_arrayValueQFTGakN, _arrayValueQXwCyKQ]
		const _arrayValueUqVyNO = [_arrayValueuoQP4D8, _arrayValuesSCY0l]
		const _arrayValuePYucOwZ = -7.094878964562724;
		const _arrayValueLqOGurP = 4.2006993860411885;
		const _optionq8avSX = [_arrayValueUqVyNO, _arrayValuePYucOwZ, _arrayValueLqOGurP]
		const _returnValueSGjZ2Tf = await _cmdwJUHeiw.missingMandatoryOptionValue(_optionq8avSX)
		const _errorwuxGlNP = null;
		const _commandYtARxuL = undefined;
		const _contextOptionsvQkKQgO = {
			"error": _errorwuxGlNP,
		"command": _commandYtARxuL
	}
		const _returnValueHAP6xOx = await _cmdwJUHeiw.helpInformation(_contextOptionsvQkKQgO)
		const _arrayValueKWkrJjc = "ctWr8MGJEKuF868B7gcVvwskXOFAYZeyMO7vAYNHE97mgvnmPYAvfIzbzKVHzqmdhe28JbOp";
		const _arrayValueA57T2J5 = {
		
	}
		const _nameq0chpMq = [_arrayValueKWkrJjc, _arrayValueA57T2J5]
		const _returnValueHKygrMD = await _cmdwJUHeiw.missingArgument(_nameq0chpMq)
		const _returnValuek3V0hwr = await _cmdwJUHeiw._processArguments()
		const _returnValueKJVe619 = await _cmdwJUHeiw._hasImplicitHelpCommand()
		const _returnValuesDPiTZT = await _HelpkFstvdg.subcommandTerm(_cmdwJUHeiw)
	});

	it('test for Help', async () => {
		const _HelpjjmNOCo = new Help()
		const _returnValuelgFCrId = true;
		const _nameU4E9lND = () => { return _returnValuelgFCrId };
		const _cmdbm5cC2o = new Command(_nameU4E9lND)
		const _strj192zba = {
		
	}
		const _returnValueteXFKNO = await _cmdbm5cC2o.name(_strj192zba)
		const _allowUnknownxOOQjGb = false;
		const _returnValueGM1y1wu = await _cmdbm5cC2o.allowUnknownOption(_allowUnknownxOOQjGb)
		const _flagsCUM4SC4 = "kParwCLGczspWbSecK6ceVYR63WPbbztNX";
		const _descriptionIT7e3rM = "W5wVfIE159xIt558zU98AEaxJsaAsNFsLChPwTuPjfXe34useKI";
		const _optionMjmaLNv = new Option(_flagsCUM4SC4, _descriptionIT7e3rM)
		const _argGgsleVX = {
		
	}
		const _returnValueR4jvoaL = await _optionMjmaLNv.is(_argGgsleVX)
		const _nameMASaOS = undefined;
		const _returnValueVXDqpZS = await _optionMjmaLNv.env(_nameMASaOS)
		const _returnValuerXxypMu = await _cmdbm5cC2o.addOption(_optionMjmaLNv)
		const _keyplzltu = undefined;
		const _arrayValueghlZ4lJ = 5.962057883760242;
		const _arrayValuenQqhks4 = {
		
	}
		const _arrayValueL24bbbz = {
		
	}
		const _arrayValueC4QaWVS = undefined;
		const _arrayValueYZfcz8 = [_arrayValuenQqhks4, _arrayValueL24bbbz, _arrayValueC4QaWVS]
		const _arrayValueWSHT8qw = [_arrayValueYZfcz8]
		const _returnValueVdPRhw = [_arrayValueghlZ4lJ, _arrayValueWSHT8qw]
		const _valuePylym8S = () => { return _returnValueVdPRhw };
		const _sourceidWClhf = false;
		const _returnValueA1B1WGv = await _cmdbm5cC2o.setOptionValueWithSource(_keyplzltu, _valuePylym8S, _sourceidWClhf)
		const _namesbiFpqxF = "Wwaz8ebC69JTxpugKp9y1pDbIovXer5XhuVufyfvGtb9eqlaQnenPD7Qp9LLFdbdbV";
		const _returnValueCxb48d = await _cmdbm5cC2o.arguments(_namesbiFpqxF)
		const _returnValuebQrJXi7 = await _HelpjjmNOCo.subcommandTerm(_cmdbm5cC2o)
		const _cmdIcHR9Lo = {
		
	}
		const _helperAacsHZ = "qf9Eez91kTlnYhLQPpfERF7XrpkUxXMa5BfthUrenrx7so0oaP";
		const _returnValueKy8A9ID = await _HelpjjmNOCo.padWidth(_cmdIcHR9Lo, _helperAacsHZ)
		const _cmdEkgcjeY = 4.818199109111692;
		const _returnValueZ8QMfgY = await _HelpjjmNOCo.subcommandTerm(_cmdEkgcjeY)
		const _arrayValuesGLdCqP = {
		
	}
		const _cmdbDGpbag = [_arrayValuesGLdCqP]
		const _returnValueqlRdLV = await _HelpjjmNOCo.visibleArguments(_cmdbDGpbag)
	});
})