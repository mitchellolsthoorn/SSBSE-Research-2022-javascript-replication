export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpWQtO4se = new Help()
		const _cmdsUFD7xU = false;
		const _helperQ300QzZ = new Help()
		const _cmdEGBW63a = undefined;
		const _arrayValuevq23CHS = "o1SMPxDwtAvU0HdHlh7snhjvZFUiDsoRyrtM5EvS4tlL2Gnj9FIUXlrLgJFDNpX";
		const _arrayValueaONoiYn = {
		
	}
		const _helperzCpq7v = [_arrayValuevq23CHS, _arrayValueaONoiYn]
		const _returnValueZFf5qpV = await _helperQ300QzZ.longestOptionTermLength(_cmdEGBW63a, _helperzCpq7v)
		const _cmdQBzlNEa = "3MVcYbg1CMojtTSJUS6d8v4SmTekFepKRPidwp3bO5ZN6ljQ9BFuKJACy99nHKN16jiokOlNWp5A4l6QmXr5NHl29";
		const _helperiJdpKNG = new Help()
		const _cmd1s8ePL = "z47oyqDOmpOIevmpdkFUHtsiwYXwO48CmoEJg9b15R2GkV474GkRjdN8njOuASb";
		const _returnValuexm6xiIy = await _helperiJdpKNG.subcommandDescription(_cmd1s8ePL)
		const _argumentZuKNPX0 = "GOdq1SOkw3yELk5XhahazbeWP7cSfutgOOTvyexx86Cd2daheFy94jmMhTTPOr";
		const _returnValuekAXi30L = await _helperiJdpKNG.argumentTerm(_argumentZuKNPX0)
		const _arrayValuedwFLIgl = null;
		const _arrayValueeNGsr8a = -9.981569774263598;
		const _arrayValuerExQBtw = true;
		const _optionU3On2c6 = [_arrayValuedwFLIgl, _arrayValueeNGsr8a, _arrayValuerExQBtw]
		const _returnValueLkSFxv8 = await _helperiJdpKNG.optionDescription(_optionU3On2c6)
		const _returnValuew71RJ17 = null;
		const _returnValueWvLfK90 = () => { return _returnValuew71RJ17 };
		const _cmdGW4Pev7 = () => { return _returnValueWvLfK90 };
		const _returnValueZnjAvai = await _helperiJdpKNG.subcommandDescription(_cmdGW4Pev7)
		const _arrayValuenfykl6N = "IrXha81csKuDhylPLkA31j1G";
		const _arrayValueb5j03kZ = [_arrayValuenfykl6N]
		const _cmdcbykOvS = [_arrayValueb5j03kZ]
		const _returnValueWLumVJ = await _helperiJdpKNG.visibleArguments(_cmdcbykOvS)
		const _returnValueILyXjB = await _helperQ300QzZ.longestArgumentTermLength(_cmdQBzlNEa, _helperiJdpKNG)
		const _flagsKgbSuIc = "SvLrfH9EzH4qrVzxcwXKW1CSiI2TmHfnSnEPHkdWOyh32dpyNQTdVSIMaBunrdLFwPMzaK5ypDUUW48CoY";
		const _descriptionTX2UxvI = "";
		const _argumentqUBEnZR = new Option(_flagsKgbSuIc, _descriptionTX2UxvI)
		const _argzv4hcJj = {
		
	}
		const _returnValueiJAdJls = await _argumentqUBEnZR.is(_argzv4hcJj)
		const _fnqZxXOy3 = {
		
	}
		const _returnValueLOLfH6E = await _argumentqUBEnZR.argParser(_fnqZxXOy3)
		const _returnValuevCS01jY = await _helperQ300QzZ.argumentDescription(_argumentqUBEnZR)
		const _returnValuegQdCNz = await _HelpWQtO4se.longestSubcommandTermLength(_cmdsUFD7xU, _helperQ300QzZ)
		const _cmdc55mXSk = "Wd1fmq6S2P7I7VWEsAxU0nvjIRMIau";
		const _returnValueXUig6bS = undefined;
		const _returnValuewkN4Qkx = () => { return _returnValueXUig6bS };
		const _arrayValuevLV5Bm = () => { return _returnValuewkN4Qkx };
		const _returnValueEuLiyYm = null;
		const _returnValuepdWEftd = () => { return _returnValueEuLiyYm };
		const _returnValuesK3Y3G = () => { return _returnValuepdWEftd };
		const _arrayValueC5MUo2h = () => { return _returnValuesK3Y3G };
		const _returnValueF2k39m6 = [_arrayValuevLV5Bm, _arrayValueC5MUo2h]
		const _helperr8Jb8tf = () => { return _returnValueF2k39m6 };
		const _returnValueUG61pN = await _HelpWQtO4se.longestSubcommandTermLength(_cmdc55mXSk, _helperr8Jb8tf)
		const _cmdbgpUw88 = 9.717446903981333;
		const _returnValue5oFYij = await _HelpWQtO4se.visibleOptions(_cmdbgpUw88)
		const _returnValueo5jwXT5 = undefined;
		const _cmdFYOpWgo = () => { return _returnValueo5jwXT5 };
		const _returnValueoxHhD2f = await _HelpWQtO4se.visibleCommands(_cmdFYOpWgo)
		const _arrayValueJ5Q2BLv = false;
		const _argumentwuWKgRi = [_arrayValueJ5Q2BLv]
		const _returnValueBgxa9sL = await _HelpWQtO4se.argumentTerm(_argumentwuWKgRi)
	});

	it('test for Help', async () => {
		const _HelpVoswJ4k = new Help()
		const _cmdSkwlQeE = undefined;
		const _helpergGVmWA = new Help()
		const _returnValue7sV3E2 = undefined;
		const _cmdSvtLQt3 = () => { return _returnValue7sV3E2 };
		const _returnValueupLkiR4 = undefined;
		const _visibleArgumentswChK8AQ = () => { return _returnValueupLkiR4 };
		const _returnValueBUNMuzE = undefined;
		const _argumentTermynQDTu5 = () => { return _returnValueBUNMuzE };
		const _helperZaGZRxd = {
			"visibleArguments": _visibleArgumentswChK8AQ,
		"argumentTerm": _argumentTermynQDTu5
	}
		const _returnValuetizRmNj = await _helpergGVmWA.longestArgumentTermLength(_cmdSvtLQt3, _helperZaGZRxd)
		const _returnValueVlqFScP = false;
		const _argumentwKSDchJ = () => { return _returnValueVlqFScP };
		const _returnValueKgNcgV8 = await _helpergGVmWA.argumentTerm(_argumentwKSDchJ)
		const _cmdCvOG7Mo = undefined;
		const _helperifLS1c5 = 9.784948885456373;
		const _returnValuewmLiTcX = await _helpergGVmWA.longestArgumentTermLength(_cmdCvOG7Mo, _helperifLS1c5)
		const _returnValueUlkIiWu = await _HelpVoswJ4k.longestOptionTermLength(_cmdSkwlQeE, _helpergGVmWA)
	});

	it('test for Help', async () => {
		const _HelpnKyieSp = new Help()
		const __nametKHyrb1 = {
		
	}
		const __aliasesfa7G8eQ = {
		
	}
		const _parent8clDtZ = null;
		const _returnValueM33x5KC = -7.1719571530151285;
		const _usageJwrAUTb = () => { return _returnValueM33x5KC };
		const _cmdpqRLDBG = {
			"_name": __nametKHyrb1,
		"_aliases": __aliasesfa7G8eQ,
		"parent": _parent8clDtZ,
		"usage": _usageJwrAUTb
	}
		const _returnValuekj8oUF = await _HelpnKyieSp.commandUsage(_cmdpqRLDBG)
		const _cmdtbcyFWu = null;
		const _arrayValueHLD00Qe = "o";
		const _arrayValueQjKI9bc = -6.759133769689788;
		const _arrayValuebgTnMOj = true;
		const _arrayValuec5cqFkw = "GgR4CfrmuGZy8Xw2";
		const _helperlgtgG6V = [_arrayValueHLD00Qe, _arrayValueQjKI9bc, _arrayValuebgTnMOj, _arrayValuec5cqFkw]
		const _returnValuet758FrV = await _HelpnKyieSp.padWidth(_cmdtbcyFWu, _helperlgtgG6V)
		const _arrayValueqiJhChT = undefined;
		const _arrayValueuw8Saxw = false;
		const _returnValuee4Cf9js = {
		
	}
		const _arrayValueo9LtKor = () => { return _returnValuee4Cf9js };
		const _arrayValueRaZC63K = 2.28698005578914;
		const _cmdkutoOvQ = [_arrayValueqiJhChT, _arrayValueuw8Saxw, _arrayValueo9LtKor, _arrayValueRaZC63K]
		const _returnValueYgBi5XS = await _HelpnKyieSp.commandUsage(_cmdkutoOvQ)
		const _nameKMwGsl = false;
		const _argumentikOD8cz = new Command(_nameKMwGsl)
		const _returnValueCTwbsvF = -7.854699088074149;
		const _aliasesQSfvTGY = () => { return _returnValueCTwbsvF };
		const _returnValueodPJvZb = await _argumentikOD8cz.aliases(_aliasesQSfvTGY)
		const _returnValueCnVVGO7 = "nQDGXBLYESVX3gpvSWQjyr5aA9MkVpCtp1on9ORfwChRodqGb";
		const _returnValuezvy51uO = () => { return _returnValueCnVVGO7 };
		const _arrayValueRMv9JA4 = () => { return _returnValuezvy51uO };
		const _arrayValuejXswPx9 = -2.155930223859598;
		const _mandatoryN5JtAMO = [_arrayValueRMv9JA4, _arrayValuejXswPx9]
		const _configsgqMGHA = {
			"mandatory": _mandatoryN5JtAMO
	}
		const _arrayValueJtY4Ckc = "7RrIC4LskyGZxEoMUnVyGEEzJoJC5mfEE9GcPKHqlnHo5N7TwfNWygZWClhpYYSZxUf4L4eLM";
		const _arrayValueV3OUb9t = true;
		const _flagsQJE4syl = [_arrayValueJtY4Ckc, _arrayValueV3OUb9t]
		const _description0G3tLC = undefined;
		const _fnTB0zseh = {
		
	}
		const _defaultValuenYrrEFy = false;
		const _returnValueDirkib4 = await _argumentikOD8cz._optionEx(_configsgqMGHA, _flagsQJE4syl, _description0G3tLC, _fnTB0zseh, _defaultValuenYrrEFy)
		const _returnValuepJIHIdr = await _HelpnKyieSp.argumentTerm(_argumentikOD8cz)
		const _arrayValueCbSB2Hi = false;
		const _nameW3OErG = [_arrayValueCbSB2Hi]
		const _descriptionffgm8UA = undefined;
		const _cmdjiQjqS3 = new Argument(_nameW3OErG, _descriptionffgm8UA)
		const _valuesjJyFasu = "3iet6oVgeApuAZ5nkyq6z2FXUr2jOQPcSLDDUcPKJxpVjqiwT6365Dut1dXgJgicb3ZPI9i2kQhkZQq8cuFTk";
		const _returnValueKvMxzU8 = await _cmdjiQjqS3.choices(_valuesjJyFasu)
		const _returnValueRsrfXrZ = await _cmdjiQjqS3.argRequired()
		const _returnValueffnCJ7u = await _cmdjiQjqS3.argOptional()
		const _returnValueQKQHZdO = null;
		const _returnValueLf2Mduu = () => { return _returnValueQKQHZdO };
		const _valuesUIn9aHr = () => { return _returnValueLf2Mduu };
		const _returnValuebZiJ3cu = await _cmdjiQjqS3.choices(_valuesUIn9aHr)
		const _fnPvitvRY = undefined;
		const _returnValueu0Fad59 = await _cmdjiQjqS3.argParser(_fnPvitvRY)
		const _returnValueur45GYX = await _HelpnKyieSp.commandDescription(_cmdjiQjqS3)
	});

	it('test for Help', async () => {
		const _HelpEUD2tEw = new Help()
		const _returnValueq5MR4F = "yg8cXKtTws2jWJlsIObQzhecBTrVBYUz";
		const _cmdVBV4rbF = () => { return _returnValueq5MR4F };
		const _returnValueN4HwlhJ = await _HelpEUD2tEw.subcommandDescription(_cmdVBV4rbF)
		const _returnValueDowWpY = {
		
	}
		const _descriptionqmYLbi9 = () => { return _returnValueDowWpY };
		const _cmdz5sH2dQ = {
			"description": _descriptionqmYLbi9
	}
		const _returnValueaRmctNR = await _HelpEUD2tEw.commandDescription(_cmdz5sH2dQ)
		const _cmdgjAGGCS = true;
		const _helperJVbHCtG = new Help()
		const _optionhRAowsn = "o0v7AFff7aQQVGXGRfGfrLB";
		const _returnValueQesp98g = await _helperJVbHCtG.optionDescription(_optionhRAowsn)
		const _returnValueoYYpuBi = await _HelpEUD2tEw.formatHelp(_cmdgjAGGCS, _helperJVbHCtG)
	});

	it('test for Help', async () => {
		const _HelpdQqKYY = new Help()
		const _argumentzx9RlUP = "k8ijm9IiVq60wLlUa";
		const _returnValueUEeHTDD = await _HelpdQqKYY.argumentTerm(_argumentzx9RlUP)
		const _cmdr3vFOY8 = null;
		const _returnValuetxpl7j = "tXGHzO4";
		const _sortSubcommandsV8R0PIr = () => { return _returnValuetxpl7j };
		const _returnValueyQHCfpR = []
		const _subcommandTermzHEsNwz = () => { return _returnValueyQHCfpR };
		const _helperfBCXsvk = {
			"sortSubcommands": _sortSubcommandsV8R0PIr,
		"subcommandTerm": _subcommandTermzHEsNwz
	}
		const _returnValuepsCMCQm = await _HelpdQqKYY.longestSubcommandTermLength(_cmdr3vFOY8, _helperfBCXsvk)
		const _cmdW2DSObs = "NG8St";
		const _returnValueNZkKeCW = await _HelpdQqKYY.visibleArguments(_cmdW2DSObs)
	});

	it('test for Help', async () => {
		const _HelpbdOpDOu = new Help()
		const _returnValuebMRxi6b = "beWniUzHwFe03uBEI10wUl4quPu3pO";
		const _argumentiho9mN4 = () => { return _returnValuebMRxi6b };
		const _returnValueKrjbmK = await _HelpbdOpDOu.argumentDescription(_argumentiho9mN4)
		const _arrayValuefSgrShz = undefined;
		const _returnValueInGCXRE = [_arrayValuefSgrShz]
		const _cmdYqbcaVB = () => { return _returnValueInGCXRE };
		const _returnValuemIJSmUn = await _HelpbdOpDOu.visibleArguments(_cmdYqbcaVB)
		const _arrayValueVjShGjf = null;
		const _cmdi3eVyNo = [_arrayValueVjShGjf]
		const _sortSubcommandsk0M068z = false;
		const _returnValueaG0RhBl = "NHucLpAICvgVG6fsMSbT9T8fhmqKIz338ZcfgDrM9XX";
		const _subcommandTermaOH3Nec = () => { return _returnValueaG0RhBl };
		const _helperl4RJQXu = {
			"sortSubcommands": _sortSubcommandsk0M068z,
		"subcommandTerm": _subcommandTermaOH3Nec
	}
		const _returnValuekveeQyR = await _HelpbdOpDOu.formatHelp(_cmdi3eVyNo, _helperl4RJQXu)
		const _cmdHfZBwY4 = true;
		const _arrayValueoxRITa = "Bd0i8FR3ExO8NxGPbiD53ue5WWq2wCB6CtYBlTlitKMR9OJNHDFh9i51HLskV9vsPGFPDsVMWMEnUKezBljLnkWolrYxcWj6h";
		const _arrayValueBtHtwx = "WUGLDEDYmqfzxOBTTHiUmwLdHYLCw7wLHA7IfUFVkXLaap";
		const _helperaf1Giss = [_arrayValueoxRITa, _arrayValueBtHtwx]
		const _returnValueM898N9 = await _HelpbdOpDOu.longestOptionTermLength(_cmdHfZBwY4, _helperaf1Giss)
		const _cmdoKPrbWo = null;
		const _arrayValuepAP2KV1 = {
		
	}
		const _arrayValueL9SIr2d = {
		
	}
		const _arrayValuemHz6twE = undefined;
		const _longestOptionTermLengthJiPBUt = [_arrayValuepAP2KV1, _arrayValueL9SIr2d, _arrayValuemHz6twE]
		const _returnValuelvQgxoO = {
		
	}
		const _longestSubcommandTermLengthDj7eBzv = () => { return _returnValuelvQgxoO };
		const _returnValueqboTcpE = true;
		const _longestArgumentTermLengthdH85yh7 = () => { return _returnValueqboTcpE };
		const _helperb3kEX3 = {
			"longestOptionTermLength": _longestOptionTermLengthJiPBUt,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDj7eBzv,
		"longestArgumentTermLength": _longestArgumentTermLengthdH85yh7
	}
		const _returnValuentYPeX4 = await _HelpbdOpDOu.padWidth(_cmdoKPrbWo, _helperb3kEX3)
	});

	it('test for Help', async () => {
		const _HelpyuLYBdZ = new Help()
		const _returnValueNQpTu3B = undefined;
		const _cmdAKVR83K = () => { return _returnValueNQpTu3B };
		const _returnValuehFLghcu = await _HelpyuLYBdZ.commandDescription(_cmdAKVR83K)
		const _cmdgFyEfgV = -6.361238679552714;
		const _returnValueemD2iC0 = null;
		const _helpereHdrW9Z = () => { return _returnValueemD2iC0 };
		const _returnValueBUqT9uc = await _HelpyuLYBdZ.formatHelp(_cmdgFyEfgV, _helpereHdrW9Z)
		const _cmdwjEE35b = "2OuOynPjE7DqGYJ5IvHOvFF7cHbpPVs9wXKdxM0vuqmQAuu4mu";
		const _returnValueIcMym48 = "fB3";
		const _helperVLZfj7w = () => { return _returnValueIcMym48 };
		const _returnValue8u7u2E = await _HelpyuLYBdZ.padWidth(_cmdwjEE35b, _helperVLZfj7w)
	});

	it('test for Help', async () => {
		const _HelpOzSqWyo = new Help()
		const _cmdlQ7xhqJ = {
		
	}
		const _helperlBWm8AS = new Help()
		const _returnValuedb1QJ9s = null;
		const _optionAETkvMB = () => { return _returnValuedb1QJ9s };
		const _returnValuejMgvBQB = await _helperlBWm8AS.optionDescription(_optionAETkvMB)
		const _cmdSYQJgZT = true;
		const _returnValueqMJKmCw = await _helperlBWm8AS.subcommandTerm(_cmdSYQJgZT)
		const _returnValuenYf0Q1w = -8.08433587673931;
		const _flagsq5NDbo6 = () => { return _returnValuenYf0Q1w };
		const _optionZcxYOgR = {
			"flags": _flagsq5NDbo6
	}
		const _returnValueXH6r4tG = await _helperlBWm8AS.optionTerm(_optionZcxYOgR)
		const _returnValueqANivZ = await _HelpOzSqWyo.longestOptionTermLength(_cmdlQ7xhqJ, _helperlBWm8AS)
		const _cmdJ7mMqFw = false;
		const _returnValuef7YY4r = {
		
	}
		const _visibleOptionsJLqRuhF = () => { return _returnValuef7YY4r };
		const _returnValueFiKxTZ = "tm291rSk1pgc9cOaZeWeyy";
		const _optionTermxBpY6FR = () => { return _returnValueFiKxTZ };
		const _helper8QtAcR = {
			"visibleOptions": _visibleOptionsJLqRuhF,
		"optionTerm": _optionTermxBpY6FR
	}
		const _returnValuesFDSVU2 = await _HelpOzSqWyo.longestOptionTermLength(_cmdJ7mMqFw, _helper8QtAcR)
		const _argumentl7UrpDp = "9pNHJTHjqXp9WPsDMv5zdBYOS46QzqVGlbMTZDCT4vFXAjBRTrOPPfPRx2Dq91n9BwbnVq6EW5efSriuDZ4EiKefxnUsj0NI31";
		const _returnValuekkYvp84 = await _HelpOzSqWyo.argumentDescription(_argumentl7UrpDp)
	});

	it('test for Help', async () => {
		const _HelpyePxZs = new Help()
		const _returnValueCt1cZ1v = true;
		const _descriptionsSctM6s = () => { return _returnValueCt1cZ1v };
		const _cmduLmke4F = {
			"description": _descriptionsSctM6s
	}
		const _returnValueX5r6kw = await _HelpyePxZs.commandDescription(_cmduLmke4F)
		const _cmdtNEjIpn = "Gz1hAhIYLAunTKACr";
		const _returnValueORHbLbD = await _HelpyePxZs.visibleOptions(_cmdtNEjIpn)
		const _cmdkXfV6EN = undefined;
		const _helperxHBVq6W = []
		const _returnValueq2OqnFX = await _HelpyePxZs.longestArgumentTermLength(_cmdkXfV6EN, _helperxHBVq6W)
		const _returnValuez8HoFL8 = undefined;
		const _cmdNAjgMZL = () => { return _returnValuez8HoFL8 };
		const _returnValuewY4GbV4 = await _HelpyePxZs.subcommandDescription(_cmdNAjgMZL)
		const _commandsh1dkBrB = {
		
	}
		const _arrayValue163oXP = null;
		const _returnValueiq0U09L = [_arrayValue163oXP]
		const __hasImplicitHelpCommandPZWEjM = () => { return _returnValueiq0U09L };
		const __helpCommandnameAndArgstkKRPbJ = {
		
	}
		const _returnValueUZGaFkR = true;
		const _createCommandzD1r9F = () => { return _returnValueUZGaFkR };
		const __helpCommandDescriptionLYs4XWQ = true;
		const _cmdA3at5VN = {
			"commands": _commandsh1dkBrB,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandPZWEjM,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgstkKRPbJ,
		"createCommand": _createCommandzD1r9F,
		"_helpCommandDescription": __helpCommandDescriptionLYs4XWQ
	}
		const _returnValuenJnMW9j = await _HelpyePxZs.visibleCommands(_cmdA3at5VN)
	});

	it('test for Help', async () => {
		const _Helpz5z9rmS = new Help()
		const _flagsiZ2AB7I = {
		
	}
		const _optionkCFss0I = {
			"flags": _flagsiZ2AB7I
	}
		const _returnValueF2kCmUS = await _Helpz5z9rmS.optionTerm(_optionkCFss0I)
		const _cmdAe8Ku5u = -0.5709430825596726;
		const _returnValuelI3qXzy = 8.462338292340917;
		const _longestOptionTermLengthRYF740a = () => { return _returnValuelI3qXzy };
		const _arrayValuePemhCTZ = -5.973576113250042;
		const _arrayValueW2uIZsw = "pRmGMD4f1BxDN9bi14J6hjpuDoHKLTGSuMbQRSgML4Wi087Suz7iDeesdV6aTAVBSuZJ59bjKrD7o1wsOpbyG";
		const _arrayValue5QTuQF = false;
		const _returnValueeDNU7lm = [_arrayValuePemhCTZ, _arrayValueW2uIZsw, _arrayValue5QTuQF]
		const _longestSubcommandTermLengthBM61zzW = () => { return _returnValueeDNU7lm };
		const _returnValuevSWX5vg = null;
		const _longestArgumentTermLengthQ5HjwL9 = () => { return _returnValuevSWX5vg };
		const _helpergZmpjw = {
			"longestOptionTermLength": _longestOptionTermLengthRYF740a,
		"longestSubcommandTermLength": _longestSubcommandTermLengthBM61zzW,
		"longestArgumentTermLength": _longestArgumentTermLengthQ5HjwL9
	}
		const _returnValueoUZ5PcP = await _Helpz5z9rmS.padWidth(_cmdAe8Ku5u, _helpergZmpjw)
	});

	it('test for Help', async () => {
		const _HelpfLmD6vo = new Help()
		const _argChoicesLj1W9Dt = {
		
	}
		const _defaultValueZaL3B6z = undefined;
		const _defaultValueDescriptionNQaTsS = "xvHB7ND4lIqSXzvcNYwfRabye1TpPs1ydkipWHMHM4OxkF3ne7e7gTPETVtglJxhTHAkVyQ9LGriXXXC7ZbXb9GD";
		const _returnValueYNe3gIP = null;
		const _descriptionFIZm4xz = () => { return _returnValueYNe3gIP };
		const _argumentjZQwi3b = {
			"argChoices": _argChoicesLj1W9Dt,
		"defaultValue": _defaultValueZaL3B6z,
		"defaultValueDescription": _defaultValueDescriptionNQaTsS,
		"description": _descriptionFIZm4xz
	}
		const _returnValueVVrMlX = await _HelpfLmD6vo.argumentDescription(_argumentjZQwi3b)
		const _cmduFykbIs = "Gttlirwk9MDCwnqLybg7uhVySn3tPKqcKJd425QcCT7eJHGXOSpuLUNhgE5phG3sPBHQJEgx7n8mPLf83D9xs";
		const _returnValueMqv6YJ1 = await _HelpfLmD6vo.commandDescription(_cmduFykbIs)
	});

	it('test for Help', async () => {
		const _HelpXInaFqS = new Help()
		const _flagsswRLKP0 = 5.514533159872002;
		const _optionnDBIShk = {
			"flags": _flagsswRLKP0
	}
		const _returnValueFehdaSA = await _HelpXInaFqS.optionTerm(_optionnDBIShk)
		const _flagsTGkLyDj = "2t1Wuca0fnn5";
		const _descriptionwRM2HfJ = 3.3674436776559595;
		const _argumentGLv1f28 = new Option(_flagsTGkLyDj, _descriptionwRM2HfJ)
		const _nameOqQyG8K = undefined;
		const _returnValueZckXZJ6 = await _argumentGLv1f28.env(_nameOqQyG8K)
		const _nameSAlGsJr = undefined;
		const _returnValueI7UOj9 = await _argumentGLv1f28.env(_nameSAlGsJr)
		const _returnValueMrSNCk = await _HelpXInaFqS.argumentDescription(_argumentGLv1f28)
		const _returnValueKPRO5r9 = false;
		const _returnValueBv0SkQo = () => { return _returnValueKPRO5r9 };
		const _cmdy7qFPMs = () => { return _returnValueBv0SkQo };
		const _helperx5xb7qt = new Help()
		const _arrayValuebbolUze = undefined;
		const _arrayValueKRkz1mo = true;
		const _returnValuexGAs595 = [_arrayValuebbolUze, _arrayValueKRkz1mo]
		const _cmdPVWa4sF = () => { return _returnValuexGAs595 };
		const _returnValueohdOL8c = await _helperx5xb7qt.visibleArguments(_cmdPVWa4sF)
		const __argsoeBWgCK = {
		
	}
		const __namedkHLmmh = -1.4043967228777294;
		const __aliasesacsKwA = {
		
	}
		const _optionsEDZMnHA = true;
		const _cmdsnlYPBm = {
			"_args": __argsoeBWgCK,
		"_name": __namedkHLmmh,
		"_aliases": __aliasesacsKwA,
		"options": _optionsEDZMnHA
	}
		const _returnValueuK0gZg6 = await _helperx5xb7qt.subcommandTerm(_cmdsnlYPBm)
		const _cmdF6eSNci = "6ccR3gTxrFL8TTrLmpkNXvgP4rH4DHznmORpwOUxHpiUJihUF9GrkpisIC8WEB1PjRwhUy8";
		const _arrayValueCP2ndIj = {
		
	}
		const _arrayValueNHCvsw2 = undefined;
		const _helperFwfWJdZ = [_arrayValueCP2ndIj, _arrayValueNHCvsw2]
		const _returnValueGhqIxbO = await _helperx5xb7qt.longestOptionTermLength(_cmdF6eSNci, _helperFwfWJdZ)
		const _returnValuegcTA9Y8 = await _HelpXInaFqS.longestSubcommandTermLength(_cmdy7qFPMs, _helperx5xb7qt)
		const _argChoicesi0mWNG3 = {
		
	}
		const _arrayValueTcmGkWl = "0QQ68D28Hc";
		const _negatejH7EFkU = [_arrayValueTcmGkWl]
		const _defaultValuerYTlBnH = undefined;
		const _arrayValuezdD0BaA = undefined;
		const _arrayValueg7u9RQp = undefined;
		const _arrayValueddFAY3A = 3.08596974061998;
		const _defaultValueDescriptionIENi18K = [_arrayValuezdD0BaA, _arrayValueg7u9RQp, _arrayValueddFAY3A]
		const _envVarA5zbjTj = undefined;
		const _returnValueTw2aL2o = "YhtZV9gSXt6NOHhpPh8Stf1SYfysaNkOEFPxGpmEgxYOBlo3dUny159sI4X3WDEGgnUkweTvw1";
		const _descriptionSizRfF1 = () => { return _returnValueTw2aL2o };
		const _optionaCF34IX = {
			"argChoices": _argChoicesi0mWNG3,
		"negate": _negatejH7EFkU,
		"defaultValue": _defaultValuerYTlBnH,
		"defaultValueDescription": _defaultValueDescriptionIENi18K,
		"envVar": _envVarA5zbjTj,
		"description": _descriptionSizRfF1
	}
		const _returnValuewnhGbF6 = await _HelpXInaFqS.optionDescription(_optionaCF34IX)
		const __nameRzOVG2q = "ELIIeFhrCGFQfnQ";
		const __aliasesFqNI2W7 = {
		
	}
		const _parentmwi3j1 = {
		
	}
		const _returnValue6x2Mye = false;
		const _usagem6lzwSI = () => { return _returnValue6x2Mye };
		const _cmdVrsrKGV = {
			"_name": __nameRzOVG2q,
		"_aliases": __aliasesFqNI2W7,
		"parent": _parentmwi3j1,
		"usage": _usagem6lzwSI
	}
		const _returnValuer7WyBDt = await _HelpXInaFqS.commandUsage(_cmdVrsrKGV)
	});

	it('test for Help', async () => {
		const _HelptlWobyZ = new Help()
		const _cmdV5Kerty = 1.1338757590953303;
		const _sortSubcommandskh38ZaL = true;
		const _returnValueiUYeJnr = null;
		const _subcommandTermGuINq1W = () => { return _returnValueiUYeJnr };
		const _helperKl8nXq = {
			"sortSubcommands": _sortSubcommandskh38ZaL,
		"subcommandTerm": _subcommandTermGuINq1W
	}
		const _returnValuej5zSDvr = await _HelptlWobyZ.formatHelp(_cmdV5Kerty, _helperKl8nXq)
		const _arrayValueYwa42Ze = "LzLQnrptuPeICf82dok7VTBzibpeJoflNAKAywfTNRP2hBmpKWrsNFkobzGGwjgfl8kdlh0mq9bfbXqjoKx";
		const _arrayValuevYgYCAP = "uCRF0DqEg6EjIEui3oBrwpb4PymUmUROKQqOnigOqXKQr33g2lc";
		const _returnValueowti8bm = [_arrayValueYwa42Ze, _arrayValuevYgYCAP]
		const _strKPiQ8fY = () => { return _returnValueowti8bm };
		const _widthtIWoFqG = -5.366743592639517;
		const _indentJdBe7eo = -0.11801936223308118;
		const _minColumnWidthxSaoAW6 = 8.542936682839994;
		const _returnValuekOWhdkP = await _HelptlWobyZ.wrap(_strKPiQ8fY, _widthtIWoFqG, _indentJdBe7eo, _minColumnWidthxSaoAW6)
		const _cmdSF6qYPR = false;
		const _arrayValueizpvDFa = undefined;
		const _arrayValuehk2055 = "1BEwXVmCqx2AlO32Dg6oc8fjzTDtoX6jvdhEwpIi2hz7vqfxkU1ltSkbnczunVGciACy849qxXfZJX7eBtQU";
		const _arrayValueD335aQZ = {
		
	}
		const _helperXNofrpo = [_arrayValueizpvDFa, _arrayValuehk2055, _arrayValueD335aQZ]
		const _returnValueFfnxtSh = await _HelptlWobyZ.longestSubcommandTermLength(_cmdSF6qYPR, _helperXNofrpo)
	});

	it('test for Help', async () => {
		const _Helpq4RDQJz = new Help()
		const _cmdosPeWW = "y21LMGCpVjeoI";
		const _helperUf1JlD = "BOyTTCnS4CNpUNYBzdCjC3l5dHzyci2T5lMXoZM3Y11fnx1OVIFncCqY5cY8EjZJpq41IqLEzKftYEW877";
		const _returnValueTsyop1k = await _Helpq4RDQJz.longestSubcommandTermLength(_cmdosPeWW, _helperUf1JlD)
		const __nameREXDgW = {
		
	}
		const __aliasesEOQ2e0G = {
		
	}
		const _arrayValueE2eB7Su = undefined;
		const _arrayValueFmrl4f7 = "t20BcaQvi7uWQQU8ncN55vobahiSnzaWu6veQYsmkd7EnZiy8LQ1opKXDW2PmK9AbKSIMCeZrRllUdOAX";
		const _arrayValueDN31I4n = "axsjs8hwfV2K3f";
		const _arrayValueHB5rqq = [_arrayValueDN31I4n]
		const _arrayValuevXWF2Pm = [_arrayValueFmrl4f7, _arrayValueHB5rqq]
		const _arrayValueILu7T6h = null;
		const _arrayValueY4ysli = "ROihmggaEkqsG8Gk1wrPjPL6ratQXft36mfgDKCuGfR0K8lOdNrHfAho1PNlu0vaANqop4CD3cJN96fvVMdNUfdaIxVxO8KF";
		const _parentOcx6nPU = [_arrayValueE2eB7Su, _arrayValuevXWF2Pm, _arrayValueILu7T6h, _arrayValueY4ysli]
		const _returnValueWqkfaL = null;
		const _usageN7sqSq = () => { return _returnValueWqkfaL };
		const _cmdllfIyjT = {
			"_name": __nameREXDgW,
		"_aliases": __aliasesEOQ2e0G,
		"parent": _parentOcx6nPU,
		"usage": _usageN7sqSq
	}
		const _returnValueCy0cyaV = await _Helpq4RDQJz.commandUsage(_cmdllfIyjT)
		const _cmdHxftqLr = null;
		const _helperQJuMGbV = new Help()
		const _arrayValueCNntw9A = undefined;
		const _arrayValuevjFgaBN = null;
		const _returnValueWwyGGDP = [_arrayValueCNntw9A, _arrayValuevjFgaBN]
		const _namejDWf2zK = () => { return _returnValueWwyGGDP };
		const _cmdl39qP6S = new Command(_namejDWf2zK)
		const _argvn5JmvBi = "pmMXJpSVAN3lKS1OoUzTsJACeRvBYizavILfCR4nUFAnFfMgGx9ViR";
		const _arrayValueDvDldeL = {
		
	}
		const _arrayValuerNKqo0 = "xyDCTnqkr3adlJ7YWbVYqkTPqbGucYGgSwQUej2kwNpcIcXfm1sT0";
		const _arrayValueFJez45i = "2OXXYqF7Nu37LmOqCCglSI4fdF";
		const _arrayValuep7K5RsY = [_arrayValueFJez45i]
		const _parseOptions4YXmKv = [_arrayValueDvDldeL, _arrayValuerNKqo0, _arrayValuep7K5RsY]
		const _returnValueMQKHQ9I = await _cmdl39qP6S._prepareUserArgs(_argvn5JmvBi, _parseOptions4YXmKv)
		const _flagsexGSoI4 = null;
		const _descriptionK77lm6D = []
		const _arrayValueZbjUidQ = "eqmP9U30yX6Haes7dHFfdkjV8os2Xi7vmWBClfpl";
		const _arrayValuehJPyKS = undefined;
		const _fnGFg4hL = [_arrayValueZbjUidQ, _arrayValuehJPyKS]
		const _defaultValuegLQ8CHW = false;
		const _returnValuezoYCiGf = await _cmdl39qP6S.requiredOption(_flagsexGSoI4, _descriptionK77lm6D, _fnGFg4hL, _defaultValuegLQ8CHW)
		const _arrayValuew6kNgH = -6.610546258119308;
		const _arrayValuemC9zdz1 = [_arrayValuew6kNgH]
		const _arrayValueYv1rsCG = undefined;
		const _contextOptionsUsWjzRE = [_arrayValuemC9zdz1, _arrayValueYv1rsCG]
		const _returnValueu9JwaEK = await _cmdl39qP6S.helpInformation(_contextOptionsUsWjzRE)
		const _promiseipuk017 = {
		
	}
		const _eventiLERYWO = 8.847373607116563;
		const _returnValueeQBCCV9 = await _cmdl39qP6S._chainOrCallHooks(_promiseipuk017, _eventiLERYWO)
		const _returnValueJxvYd37 = await _helperQJuMGbV.commandDescription(_cmdl39qP6S)
		const _returnValueIzeqL9i = await _Helpq4RDQJz.formatHelp(_cmdHxftqLr, _helperQJuMGbV)
		const _returnValueQzg9uV = {
		
	}
		const _optionvIT0PbP = () => { return _returnValueQzg9uV };
		const _returnValueDIPokvQ = await _Helpq4RDQJz.optionTerm(_optionvIT0PbP)
	});

	it('test for Help', async () => {
		const _HelpAK7xsD2 = new Help()
		const _cmdDhiSjsn = false;
		const _helperGw9WR5I = new Help()
		const _arrayValuehSR7Do = "ek8YvaaM4dnOV81A8sWJbXQfH8pGcE9mqUUZMJRCXXQOlKC5uZIzGTgCgB";
		const _argumentfuTx4P7 = [_arrayValuehSR7Do]
		const _returnValuej1C7fPW = await _helperGw9WR5I.argumentDescription(_argumentfuTx4P7)
		const __argsDescriptionezwntYl = {
		
	}
		const __argsXNmo2CD = {
		
	}
		const _cmdSGvWShU = {
			"_argsDescription": __argsDescriptionezwntYl,
		"_args": __argsXNmo2CD
	}
		const _returnValueVeawORN = await _helperGw9WR5I.visibleArguments(_cmdSGvWShU)
		const _cmdwZvotns = true;
		const _sortSubcommandsvhMFJ8k = "MGEiuyfu6k2GkmxI0soL6hzUwlY4ocQHtaQZqTYOUtbhi1FeI6RdyCzSF9KEvnwZMQerpWE8KyvZ3";
		const _returnValuerAEh1Xv = undefined;
		const _subcommandTermk5fcwBY = () => { return _returnValuerAEh1Xv };
		const _helperPLl7hTd = {
			"sortSubcommands": _sortSubcommandsvhMFJ8k,
		"subcommandTerm": _subcommandTermk5fcwBY
	}
		const _returnValueRJ5tgcY = await _helperGw9WR5I.longestSubcommandTermLength(_cmdwZvotns, _helperPLl7hTd)
		const _cmdJBwbMZU = null;
		const _arrayValueMLrLuXF = {
		
	}
		const _arrayValueoGXzpDC = null;
		const _arrayValuetLYWgKW = -4.50026540221054;
		const _arrayValueT7AboCy = [_arrayValueMLrLuXF, _arrayValueoGXzpDC, _arrayValuetLYWgKW]
		const _arrayValueOP8AMvI = -7.881076229559653;
		const _arrayValue9sDw22 = false;
		const _arrayValueYYZaBJG = [_arrayValueT7AboCy, _arrayValueOP8AMvI, _arrayValue9sDw22]
		const _arrayValueToUj8Vb = null;
		const _arrayValueqFTBoYQ = []
		const _sortSubcommandswvptVy = [_arrayValueYYZaBJG, _arrayValueToUj8Vb, _arrayValueqFTBoYQ]
		const _returnValueDEdThfm = null;
		const _subcommandTermSgIAm7a = () => { return _returnValueDEdThfm };
		const _helperbzgk8G3 = {
			"sortSubcommands": _sortSubcommandswvptVy,
		"subcommandTerm": _subcommandTermSgIAm7a
	}
		const _returnValueKsKG3mH = await _helperGw9WR5I.formatHelp(_cmdJBwbMZU, _helperbzgk8G3)
		const _returnValuejaGsiOx = await _HelpAK7xsD2.formatHelp(_cmdDhiSjsn, _helperGw9WR5I)
		const _cmdaVH4vTt = {
		
	}
		const _returnValue5S3Siy = null;
		const _helperuZJzFh1 = () => { return _returnValue5S3Siy };
		const _returnValueFNmI6pD = await _HelpAK7xsD2.longestArgumentTermLength(_cmdaVH4vTt, _helperuZJzFh1)
	});

	it('test for Help', async () => {
		const _Helpq4Ct1MR = new Help()
		const _arrayValueKd1NzGu = true;
		const _arrayValueSRO1BfD = undefined;
		const _arrayValuex3WF6Zn = -3.1151201359477554;
		const _arrayValues0oscLV = [_arrayValueKd1NzGu, _arrayValueSRO1BfD, _arrayValuex3WF6Zn]
		const _arrayValuekhG6HhW = false;
		const _arrayValueAbv9i55 = false;
		const _arrayValuerK71XZK = undefined;
		const _returnValueiwdjUQ3 = [_arrayValuekhG6HhW, _arrayValueAbv9i55, _arrayValuerK71XZK]
		const _arrayValuebxPgp6b = () => { return _returnValueiwdjUQ3 };
		const _arrayValuenOPtrmf = {
		
	}
		const _arrayValueW6i0n7H = [_arrayValues0oscLV, _arrayValuebxPgp6b, _arrayValuenOPtrmf]
		const _arrayValueNKhPlL1 = false;
		const _arrayValuex1ztQG5 = null;
		const _arrayValueW703e1 = "ynkI4vYcOLOpck8brC1TNnLKc8J9x83i6BnnRgbp79bsCyXsIL1ByV2ohk0WvLpaDxsf36dJI2";
		const _nameK18d6K = [_arrayValueW6i0n7H, _arrayValueNKhPlL1, _arrayValuex1ztQG5, _arrayValueW703e1]
		const _returnValueoqHPWTs = undefined;
		const _descriptionn2peyI = () => { return _returnValueoqHPWTs };
		const _optionHfY9AHn = new Argument(_nameK18d6K, _descriptionn2peyI)
		const _valueRBpsEhS = "KX0gHeSsrsVnMvlmqOFfzDd8";
		const _descriptioncwW3fGK = undefined;
		const _returnValuewTkJ2G6 = await _optionHfY9AHn.default(_valueRBpsEhS, _descriptioncwW3fGK)
		const _valuesqAQVVlT = "qfoP";
		const _returnValueqSqgScH = await _optionHfY9AHn.choices(_valuesqAQVVlT)
		const _valueXP5mmw0 = {
		
	}
		const _descriptionWVrAsaW = undefined;
		const _returnValueNe3ZgRt = await _optionHfY9AHn.default(_valueXP5mmw0, _descriptionWVrAsaW)
		const _returnValueyq65Hn = await _optionHfY9AHn.argRequired()
		const _valueRNO2dTu = null;
		const _previousP1rPQw3 = "LRIFw6k6L1luzmNJpqJs73ClLg5VuSzv2MELnnWk6v5";
		const _returnValuehGPrRYF = await _optionHfY9AHn._concatValue(_valueRNO2dTu, _previousP1rPQw3)
		const _returnValuexkvhlfF = await _Helpq4Ct1MR.optionDescription(_optionHfY9AHn)
		const _cmdpPkfqRd = "ltJ0sXD96tC2RPG2lBqvBshbMHjUmOdboMYiukAvI8kh5YKaHtDiKg8e39jeJ7gDjijPscjvq9A8pEIitBJNtaTa";
		const _arrayValuekzOe7GU = 0.9712616771930414;
		const _helperZ6yK7xR = [_arrayValuekzOe7GU]
		const _returnValueGsgP0Uj = await _Helpq4Ct1MR.formatHelp(_cmdpPkfqRd, _helperZ6yK7xR)
		const _cmdoAIejhg = "ffHVUI15IYLWCfDymobs2rp7m6slmva96TJaupjVoXBds4O7uzdvl3IsblDPW3zSrThS2RnGgwihWjSh82eLfSCg";
		const _returnValueHMyhYEF = await _Helpq4Ct1MR.visibleOptions(_cmdoAIejhg)
	});

	it('test for Help', async () => {
		const _Help8UCWmc = new Help()
		const _cmdnUAk4ma = -2.9608942382763823;
		const _helperzIyn69 = new Help()
		const _returnValueESvie8 = undefined;
		const _nameJ8t2R4 = () => { return _returnValueESvie8 };
		const _descriptioniREKhBm = "PErbWle8EoBbcvlK6voveeCSXI8pXegWv7Hq6BbB7yOOGWRQ2sGgRYhq6BqYTI6eR1VCBxu6KQ";
		const _argumentUbtrikj = new Argument(_nameJ8t2R4, _descriptioniREKhBm)
		const _fnJvDwYUJ = 2.021859250507676;
		const _returnValuel4wORd2 = await _argumentUbtrikj.argParser(_fnJvDwYUJ)
		const _valueUqmlKa6 = {
		
	}
		const _descriptionVyJiNKc = undefined;
		const _returnValueb2ni5GY = await _argumentUbtrikj.default(_valueUqmlKa6, _descriptionVyJiNKc)
		const _arrayValueJDKQya7 = null;
		const _valuesZcbxWdi = [_arrayValueJDKQya7]
		const _returnValueqgskTJV = await _argumentUbtrikj.choices(_valuesZcbxWdi)
		const _returnValuefqiFBTA = await _helperzIyn69.argumentDescription(_argumentUbtrikj)
		const _arrayValueP180oZo = true;
		const _arrayValueuVkFVUW = undefined;
		const _arrayValuelFt7lE8 = "w3gBmb2bjRcIfdC6xTU0NA";
		const _arrayValuer5EhY7F = false;
		const _cmdiHqdRK7 = [_arrayValueP180oZo, _arrayValueuVkFVUW, _arrayValuelFt7lE8, _arrayValuer5EhY7F]
		const _returnValueylfYzGS = await _helperzIyn69.commandUsage(_cmdiHqdRK7)
		const _strgKrBns9 = null;
		const _widthekKeWGV = -3.2784384041866375;
		const _indentBiWnoin = -0.4168430925399651;
		const _minColumnWidthgWU9fd = -2.8312457360456644;
		const _returnValueh4vNSgx = await _helperzIyn69.wrap(_strgKrBns9, _widthekKeWGV, _indentBiWnoin, _minColumnWidthgWU9fd)
		const _cmdO2Lt3Lm = "o6AliLSeOeYn97wbYAqNlbKTeIwGa";
		const _arrayValuennexldo = false;
		const _arrayValueYqtU5YJ = true;
		const _arrayValueHfKR6FN = undefined;
		const _arrayValuebTUyerQ = {
		
	}
		const _arrayValueHdQtk4j = [_arrayValuennexldo, _arrayValueYqtU5YJ, _arrayValueHfKR6FN, _arrayValuebTUyerQ]
		const _arrayValueXOGoK6 = undefined;
		const _arrayValuefwDJIRW = null;
		const _arrayValueHC1HIK = "CYQJsBAzWWiFlQKCwcLpjqNqjCT0X5BEukRwBEkgCEMUTzqB2lLnXunXpYvRnPt";
		const _helperxXaqkQW = [_arrayValueHdQtk4j, _arrayValueXOGoK6, _arrayValuefwDJIRW, _arrayValueHC1HIK]
		const _returnValuenX3KkBb = await _helperzIyn69.longestArgumentTermLength(_cmdO2Lt3Lm, _helperxXaqkQW)
		const _returnValueGvB6K9N = await _Help8UCWmc.longestOptionTermLength(_cmdnUAk4ma, _helperzIyn69)
		const _exitCodeYHAb5FE = "3gYQgAWrXO5WzZTX2kCbPxcvfAuAsbjVuL3Bokbk7F7O4UTCliFu1hqwBQ8ba49qazIMMbedeNSCZYpdGRNiphprbmv";
		const _returnValueWvR2nNF = {
		
	}
		const _codeIFQoXWG = () => { return _returnValueWvR2nNF };
		const _messageekb5DP = "s5qCHAEv1ISX8GK3MnRutyBSq7vbqIiTa";
		const _argumentj9kyz2M = new CommanderError(_exitCodeYHAb5FE, _codeIFQoXWG, _messageekb5DP)
		const _returnValuewL8fYIC = await _Help8UCWmc.argumentTerm(_argumentj9kyz2M)
		const _cmdpcOnsaI = true;
		const _sortSubcommandszpAQYCJ = undefined;
		const _returnValueWX772pL = {
		
	}
		const _subcommandTermF7HgIGv = () => { return _returnValueWX772pL };
		const _helperJFvp68g = {
			"sortSubcommands": _sortSubcommandszpAQYCJ,
		"subcommandTerm": _subcommandTermF7HgIGv
	}
		const _returnValueKudfdfP = await _Help8UCWmc.formatHelp(_cmdpcOnsaI, _helperJFvp68g)
		const _exitCodeYObQxLA = {
		
	}
		const _returnValueOrzGyGW = 4.746943309099159;
		const _codelFLuHZH = () => { return _returnValueOrzGyGW };
		const _messageblCO9ov = -0.6787924453420544;
		const _argumentwVmK55R = new CommanderError(_exitCodeYObQxLA, _codelFLuHZH, _messageblCO9ov)
		const _returnValueJOKHUlQ = await _Help8UCWmc.argumentTerm(_argumentwVmK55R)
		const _arrayValuefnfxuJf = 3.012439892155342;
		const _cmdfCngfHM = [_arrayValuefnfxuJf]
		const _returnValuef1P9QX = await _Help8UCWmc.subcommandTerm(_cmdfCngfHM)
	});

	it('test for Help', async () => {
		const _HelpRxlPOXi = new Help()
		const __nameAVpRmz3 = -2.762719085546415;
		const __aliasesyx3xXkl = {
		
	}
		const _returnValueM4xYw2s = -5.926315080374422;
		const _arrayValue6PLYRa = () => { return _returnValueM4xYw2s };
		const _arrayValueqxkVjzq = true;
		const _arrayValueHHtWr3d = "2W4MPvOL4eQgYhtXpQW17FslpoD0v5Xaupn9OQqM1mBcHIIdLDfD3aDdRkTArlvBxjtc8LqEnAwqJ24y4P2uzXkAQgkXgRbq";
		const _parentsmFPeg2 = [_arrayValue6PLYRa, _arrayValueqxkVjzq, _arrayValueHHtWr3d]
		const _arrayValueV1vMLTz = {
		
	}
		const _arrayValueDW2ig7x = "8hbSk8hPOzA8lsmVlYjixCoIaQaSnVRMRCSiDxfGpl4KN0So8SXtCAy5w6DDiEhwWwy24Vib56kO1iGw";
		const _returnValueVvxOWTi = [_arrayValueV1vMLTz, _arrayValueDW2ig7x]
		const _usagex2byJ7h = () => { return _returnValueVvxOWTi };
		const _cmdbuwuFZ3 = {
			"_name": __nameAVpRmz3,
		"_aliases": __aliasesyx3xXkl,
		"parent": _parentsmFPeg2,
		"usage": _usagex2byJ7h
	}
		const _returnValueBULmqyu = await _HelpRxlPOXi.commandUsage(_cmdbuwuFZ3)
		const _cmdDrSrFKk = "0SqjlPoKiBgoeY6KB3NS6pMSQzMyBopPlxopdtYMZ27ulL7QiCzM3RXfFBZkiGqtLs";
		const _returnValueRx1qlt = await _HelpRxlPOXi.visibleArguments(_cmdDrSrFKk)
		const _cmdWTXeEPK = null;
		const _sortSubcommandsl4R8uNj = null;
		const _subcommandTermVEBkxGT = true;
		const _helperkfqsye4 = {
			"sortSubcommands": _sortSubcommandsl4R8uNj,
		"subcommandTerm": _subcommandTermVEBkxGT
	}
		const _returnValueIeEFLIa = await _HelpRxlPOXi.longestSubcommandTermLength(_cmdWTXeEPK, _helperkfqsye4)
	});

	it('test for Help', async () => {
		const _HelpduQprJl = new Help()
		const _commandsNTAcv8h = {
		
	}
		const _returnValuebXVMImY = null;
		const __hasImplicitHelpCommandfh7B0v5 = () => { return _returnValuebXVMImY };
		const __helpCommandnameAndArgsEsYrgEr = {
		
	}
		const _returnValueSpWIxws = null;
		const _createCommandoGWPISa = () => { return _returnValueSpWIxws };
		const _returnValueE4FMncu = 5.353931931721007;
		const __helpCommandDescriptiondHAfgta = () => { return _returnValueE4FMncu };
		const _cmdIvpno5 = {
			"commands": _commandsNTAcv8h,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandfh7B0v5,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsEsYrgEr,
		"createCommand": _createCommandoGWPISa,
		"_helpCommandDescription": __helpCommandDescriptiondHAfgta
	}
		const _returnValueOcZyRb = await _HelpduQprJl.visibleCommands(_cmdIvpno5)
		const _returnValueSZRnnOt = undefined;
		const _striXhAXN = () => { return _returnValueSZRnnOt };
		const _widthF3PET2P = -9.154762145947306;
		const _indentBwgompm = 4.368110676717002;
		const _minColumnWidthc0fQcmK = -1.4769328170056912;
		const _returnValuesdw5Gxc = await _HelpduQprJl.wrap(_striXhAXN, _widthF3PET2P, _indentBwgompm, _minColumnWidthc0fQcmK)
		const _cmdlowLZzc = "trF6JXNpslWLk9vHqELBVRGnWvgaP1bgS";
		const _returnValueraA4a9L = await _HelpduQprJl.subcommandTerm(_cmdlowLZzc)
		const _arrayValueUoPN7Do = 6.846520979407174;
		const _cmdTXjMqrY = [_arrayValueUoPN7Do]
		const _returnValuel1g5VHW = await _HelpduQprJl.visibleArguments(_cmdTXjMqrY)
	});

	it('test for Help', async () => {
		const _HelpIB2t1Bb = new Help()
		const _arrayValuebSlljcI = 0.01945205221562496;
		const _strKrTtfhe = [_arrayValuebSlljcI]
		const _widthZ4zyYPT = -7.759893411190918;
		const _indentzteLB5D = 0.155984813301691;
		const _minColumnWidthfVHUUCd = 4.507670952623355;
		const _returnValueCC1gZ2A = await _HelpIB2t1Bb.wrap(_strKrTtfhe, _widthZ4zyYPT, _indentzteLB5D, _minColumnWidthfVHUUCd)
		const _arrayValuecb94JhE = -9.399974204565146;
		const _arrayValueFHQIVJT = {
		
	}
		const _arrayValuept8vi9f = "TjU8PF2Y8INyPV";
		const _returnValuecGQr2SS = [_arrayValuecb94JhE, _arrayValueFHQIVJT, _arrayValuept8vi9f]
		const _descriptionKB9uLy = () => { return _returnValuecGQr2SS };
		const _cmdyG6xU0i = {
			"description": _descriptionKB9uLy
	}
		const _returnValuexuVamu8 = await _HelpIB2t1Bb.subcommandDescription(_cmdyG6xU0i)
		const _arrayValueHFCk3II = true;
		const _arrayValueqhDVj69 = [_arrayValueHFCk3II]
		const _arrayValueMHO6oha = [_arrayValueqhDVj69]
		const _arrayValue3Upr8y = null;
		const _cmdbrps8hU = [_arrayValueMHO6oha, _arrayValue3Upr8y]
		const _returnValuedMRtRwA = await _HelpIB2t1Bb.subcommandDescription(_cmdbrps8hU)
		const _cmdiI28Baz = {
		
	}
		const _helperlYcEpif = "HsBcdhkyvYeNqcNt2RIRqpHmtHzscD7r4XzNNw57MPtXsctMaQzY4luwvjwep0wwgawRyIO3mTmmUS";
		const _returnValueCq91y1I = await _HelpIB2t1Bb.longestSubcommandTermLength(_cmdiI28Baz, _helperlYcEpif)
	});

	it('test for Help', async () => {
		const _HelpxoXMHUt = new Help()
		const _namePOfdT5P = []
		const _cmd9G17MG = new Command(_namePOfdT5P)
		const _storeAsPropertiesrEbWIXl = true;
		const _returnValueIICMlZf = await _cmd9G17MG.storeOptionsAsProperties(_storeAsPropertiesrEbWIXl)
		const _returnValueqOkvhuG = await _HelpxoXMHUt.visibleCommands(_cmd9G17MG)
		const _argumentppz3rMN = []
		const _returnValueDiP4F2X = await _HelpxoXMHUt.argumentDescription(_argumentppz3rMN)
		const _returnValueyyNfBBY = null;
		const _returnValuexwnuoKw = () => { return _returnValueyyNfBBY };
		const _cmdUdgqrET = () => { return _returnValuexwnuoKw };
		const _returnValueQMtrc5V = await _HelpxoXMHUt.visibleOptions(_cmdUdgqrET)
		const _flagsc3F9JuV = "YRI1q5JahbjUWwmTd7EboVFVq";
		const _descriptionVp8yrP = 3.020928247216478;
		const _cmdryqiXuZ = new Option(_flagsc3F9JuV, _descriptionVp8yrP)
		const _returnValuegVmeofo = await _cmdryqiXuZ.attributeName()
		const _returnValueHNLYT5R = await _HelpxoXMHUt.commandDescription(_cmdryqiXuZ)
	});

	it('test for Help', async () => {
		const _HelptzNIiKb = new Help()
		const _argumentPjseoDD = "2Jcu27BA534umvIl3fRE8GYtMiSWCR98zODqgp36tkEjVKTs1710aqOBu7";
		const _returnValuesko1PRP = await _HelptzNIiKb.argumentDescription(_argumentPjseoDD)
		const _returnValueHyaUacz = -2.4406352385620265;
		const _returnValuerAK9FM3 = () => { return _returnValueHyaUacz };
		const _matchfiQbu02 = () => { return _returnValuerAK9FM3 };
		const _returnValuevfTtc51 = 5.064780684219823;
		const _substrPwKZcgd = () => { return _returnValuevfTtc51 };
		const _strNRBWGud = {
			"match": _matchfiQbu02,
		"substr": _substrPwKZcgd
	}
		const _widthb17tQ1j = -2.530952437640021;
		const _indentsur1j1Z = -4.8134928714341925;
		const _minColumnWidtheHpjpn = -1.1310171655317252;
		const _returnValuepq2V44H = await _HelptzNIiKb.wrap(_strNRBWGud, _widthb17tQ1j, _indentsur1j1Z, _minColumnWidtheHpjpn)
	});

	it('test for Help', async () => {
		const _Helpp6LEIht = new Help()
		const _returnValuebj4uYKD = null;
		const _matchR1f7yN = () => { return _returnValuebj4uYKD };
		const _returnValueWYLnaQc = false;
		const _substrFeEDnhB = () => { return _returnValueWYLnaQc };
		const _strCaXN07F = {
			"match": _matchR1f7yN,
		"substr": _substrFeEDnhB
	}
		const _widthD6jDXfF = 0.47481473615972547;
		const _indentOeHFtK = -8.180595178330591;
		const _minColumnWidthWabm1Od = undefined;
		const _returnValueVU18laR = await _Helpp6LEIht.wrap(_strCaXN07F, _widthD6jDXfF, _indentOeHFtK, _minColumnWidthWabm1Od)
		const _cmdROBGmhH = null;
		const _helperjwa7STc = new Help()
		const _cmdOF2vKP = {
		
	}
		const _returnValueX1uznDY = "VazKfqSdPq3kXQJ2";
		const _helpermYodLCg = () => { return _returnValueX1uznDY };
		const _returnValuejb07ikI = await _helperjwa7STc.longestArgumentTermLength(_cmdOF2vKP, _helpermYodLCg)
		const _cmdCRTdiX = null;
		const _returnValueYRRbd3k = await _helperjwa7STc.subcommandDescription(_cmdCRTdiX)
		const _arrayValueOURTVtq = true;
		const _arrayValueJzxNzRd = true;
		const _cmda2StHd2 = [_arrayValueOURTVtq, _arrayValueJzxNzRd]
		const _returnValuePa7lXMe = -8.8986334442982;
		const _helpert1zPXVf = () => { return _returnValuePa7lXMe };
		const _returnValueg9SVY9I = await _helperjwa7STc.longestArgumentTermLength(_cmda2StHd2, _helpert1zPXVf)
		const _returnValueElCScgc = await _Helpp6LEIht.longestArgumentTermLength(_cmdROBGmhH, _helperjwa7STc)
	});

	it('test for Help', async () => {
		const _HelpdXMPi0f = new Help()
		const _strFkB2C7f = "iCGQM6pjhKVJfEPLTpusMa9fDVYepvxzXEPYcUg4DMX69XxHRvsk5sZek1wxtutlakkzjqdQoBsd8uRqJHhIb9oNsO1k0AUrg";
		const _widthDQYLeWZ = -1.9038670247793092;
		const _indentx69VFI7 = 4.431344630671308;
		const _minColumnWidthR1IEPAg = -6.6481473149543024;
		const _returnValuePBvemaD = await _HelpdXMPi0f.wrap(_strFkB2C7f, _widthDQYLeWZ, _indentx69VFI7, _minColumnWidthR1IEPAg)
		const _arrayValueUe8k4xg = []
		const _arrayValueiEdeBal = "vD5wR2s3MyWsBjUJtUVcXMg1HDcex";
		const _arrayValuep5KMNeq = "guQUCjDSjbg0uLjLFmIgwpo0VDf3r08D8q9b9exAxzcVKJrDb5irGhDbuyG9wZ7Jhm6Q";
		const _arrayValueXzOt6Sl = false;
		const _optioncbIUbnP = [_arrayValueUe8k4xg, _arrayValueiEdeBal, _arrayValuep5KMNeq, _arrayValueXzOt6Sl]
		const _returnValueeIkLs7g = await _HelpdXMPi0f.optionDescription(_optioncbIUbnP)
		const _cmdOUs5D53 = null;
		const _helperGLDeuNJ = new Help()
		const _cmdVlhy9iz = -5.203015827926389;
		const _sortSubcommandsq6xj4qL = undefined;
		const _returnValueiPqzvWI = []
		const _subcommandTermUa05jq8 = () => { return _returnValueiPqzvWI };
		const _helperkP4diQt = {
			"sortSubcommands": _sortSubcommandsq6xj4qL,
		"subcommandTerm": _subcommandTermUa05jq8
	}
		const _returnValueiYh7p1h = await _helperGLDeuNJ.longestSubcommandTermLength(_cmdVlhy9iz, _helperkP4diQt)
		const _flagsKZsz6Nw = "iB7gmTni9Fc7MgMB1JQKyiDdcuqALp4UwQYxaWbrQp6axA5NxA17AuNu";
		const _descriptionshnHbJo = 9.449702203606044;
		const _optionelWdkEi = new Option(_flagsKZsz6Nw, _descriptionshnHbJo)
		const _returnValuedTT8o5K = await _optionelWdkEi.name()
		const _mandatorydqWI5C = false;
		const _returnValuemTvsNZu = await _optionelWdkEi.makeOptionMandatory(_mandatorydqWI5C)
		const _mandatoryiWO7laV = true;
		const _returnValueU1UXMwh = await _optionelWdkEi.makeOptionMandatory(_mandatoryiWO7laV)
		const _returnValueKzhghT5 = await _helperGLDeuNJ.optionTerm(_optionelWdkEi)
		const _returnValuelg50BMF = -7.894271448424078;
		const _cmdYIg9rK7 = () => { return _returnValuelg50BMF };
		const _returnValueL9Vq39a = await _helperGLDeuNJ.commandUsage(_cmdYIg9rK7)
		const _flagshPh0JKH = "HwWmzgsBMu3gg88aSITcaWg7RIdu7DE3Nvrp1D93npzB3z3PzUqpFB7zuMRyZ1JRb15V";
		const _descriptionAIdGLVE = {
		
	}
		const _optionXU6JqYE = new Option(_flagshPh0JKH, _descriptionAIdGLVE)
		const _returnValueer50Gwe = await _optionXU6JqYE.name()
		const _returnValueQymd0jE = await _helperGLDeuNJ.optionDescription(_optionXU6JqYE)
		const _flagsotAwKMw = "";
		const _descriptionFhIsWq = {
		
	}
		const _cmdAjcg8zy = new Option(_flagsotAwKMw, _descriptionFhIsWq)
		const _nameC2pneIN = {
		
	}
		const _returnValueKCY7ktk = await _cmdAjcg8zy.env(_nameC2pneIN)
		const _hidep3V9FKo = false;
		const _returnValueAVzaNTg = await _cmdAjcg8zy.hideHelp(_hidep3V9FKo)
		const _returnValuem35MyHA = await _helperGLDeuNJ.subcommandDescription(_cmdAjcg8zy)
		const _returnValue7Ov8Qq = await _HelpdXMPi0f.longestOptionTermLength(_cmdOUs5D53, _helperGLDeuNJ)
	});

	it('test for Help', async () => {
		const _HelpF5UoAIl = new Help()
		const _arrayValueqaXpDCx = "k4rSJ5Wj3wUhes4xUeF3G8bKeajeYaytAZOZhlefm1XoYsRi";
		const _arrayValueOvQfGaT = 6.975312010106812;
		const _arrayValuevV2KAqY = "nUVVooRtxRLO2eDNSOVL5RG33zJMKUhxw3lgcSIdflIImKUMLBk0eQ8owKsGTS2tdWEeICeRn4KOH0rRP4bK1vaAiU";
		const _argumentzriAjmv = [_arrayValueqaXpDCx, _arrayValueOvQfGaT, _arrayValuevV2KAqY]
		const _returnValueLuyQJUs = await _HelpF5UoAIl.argumentDescription(_argumentzriAjmv)
		const _returnValue2qoxii = {
		
	}
		const _cmdcQ8HBpy = () => { return _returnValue2qoxii };
		const _helperpj5SDph = new Help()
		const _returnValueZOMqdwD = null;
		const _namel0wAgD = () => { return _returnValueZOMqdwD };
		const _descriptionharEgOu = undefined;
		const _argumentWDS5Zsg = new Argument(_namel0wAgD, _descriptionharEgOu)
		const _arrayValueAKBqFEE = 1.4441872949831076;
		const _valuesj1LL16 = [_arrayValueAKBqFEE]
		const _returnValueeCc9hTb = await _argumentWDS5Zsg.choices(_valuesj1LL16)
		const _valueCioDKrp = {
		
	}
		const _arrayValueiVHrKZ8 = undefined;
		const _arrayValues0P7w8N = "Qfg8VUfExWt5rBvr9tvpiFk8s1qKKcHDHCvnpWX9mieJERLhtLeBNlP9E7z6C4r9Cddv55PWMq";
		const _arrayValueErNxBKM = undefined;
		const _arrayValueJAydCHB = [_arrayValueiVHrKZ8, _arrayValues0P7w8N, _arrayValueErNxBKM]
		const _arrayValueuDH4gDl = [_arrayValueJAydCHB]
		const _descriptioneJQtahI = [_arrayValueuDH4gDl]
		const _returnValuedRYpMG = await _argumentWDS5Zsg.default(_valueCioDKrp, _descriptioneJQtahI)
		const _valueXRH6hPW = -3.1183245775209265;
		const _previousk6eVmL3 = "oBbT6IjjyKA1NLECBjSQvsukblyMPS4HEsJXNz9FKNsa8LKIRo1Kak9CkSuQeJfGYqINhdaOn226IIP8iRv";
		const _returnValueE1TeqLY = await _argumentWDS5Zsg._concatValue(_valueXRH6hPW, _previousk6eVmL3)
		const _returnValueQbZfF2 = await _helperpj5SDph.argumentTerm(_argumentWDS5Zsg)
		const _cmdXKBOYeI = undefined;
		const _helperj35998r = new Help()
		const _flagscoNY70j = "LYh2rEiY6XkB7BIE12";
		const _descriptionOClVjeg = true;
		const _cmdguIwOq = new Option(_flagscoNY70j, _descriptionOClVjeg)
		const _returnValueHZBh8Uf = await _cmdguIwOq.name()
		const _arrayValueTSc3Psq = undefined;
		const _arrayValuecdUBXX9 = {
		
	}
		const _arrayValuel9ZbUr = -7.901629021656264;
		const _arrayValueJaCKNKN = false;
		const _namew6w0PB9 = [_arrayValueTSc3Psq, _arrayValuecdUBXX9, _arrayValuel9ZbUr, _arrayValueJaCKNKN]
		const _returnValuerMcZ7av = await _cmdguIwOq.env(_namew6w0PB9)
		const _returnValueTRDuPPP = await _cmdguIwOq.name()
		const _fnijg2fFk = {
		
	}
		const _returnValueI60mzUF = await _cmdguIwOq.argParser(_fnijg2fFk)
		const _returnValueHJvzev = await _helperj35998r.subcommandDescription(_cmdguIwOq)
		const _returnValuezWRBdF7 = null;
		const _descriptionVstRr6v = () => { return _returnValuezWRBdF7 };
		const _cmdLiezGg = {
			"description": _descriptionVstRr6v
	}
		const _returnValueMtFtB0T = await _helperj35998r.subcommandDescription(_cmdLiezGg)
		const _returnValuesOIVfLB = true;
		const _optionPd3nmd2 = () => { return _returnValuesOIVfLB };
		const _returnValuehks2uYe = await _helperj35998r.optionTerm(_optionPd3nmd2)
		const _cmdBCf0V9w = "b4HmxYLtx9zlxuFHiWDq38J9E42uTQdhUNVppbfHEGmmsHJSYr315ynJRJdfa114rlA6";
		const _returnValuekAaApnq = await _helperj35998r.visibleArguments(_cmdBCf0V9w)
		const _strtFJxIwb = "pDsdNXMhLnCU1u7If6ugvMt4j4ak6L7h3NLYnfZRtBU1xUJULS";
		const _widthsCnzN6O = -6.181380902833597;
		const _indentofGFrLq = -6.643654511875882;
		const _minColumnWidthNPfqNcG = -9.399804782676938;
		const _returnValuexq90IJt = await _helperj35998r.wrap(_strtFJxIwb, _widthsCnzN6O, _indentofGFrLq, _minColumnWidthNPfqNcG)
		const _returnValueSQgpVv3 = await _helperpj5SDph.longestArgumentTermLength(_cmdXKBOYeI, _helperj35998r)
		const _returnValueHoTbTDO = await _HelpF5UoAIl.longestArgumentTermLength(_cmdcQ8HBpy, _helperpj5SDph)
		const _arrayValueRVip1yU = -6.132462389208577;
		const _arrayValueFfeLcV9 = undefined;
		const _argumentOSB5YLY = [_arrayValueRVip1yU, _arrayValueFfeLcV9]
		const _returnValuelHKc6Ei = await _HelpF5UoAIl.argumentDescription(_argumentOSB5YLY)
		const _arrayValueGcxD3qG = null;
		const _arrayValueHJXlnmG = false;
		const _cmdAYOmAWz = [_arrayValueGcxD3qG, _arrayValueHJXlnmG]
		const _returnValueWMQiYVJ = await _HelpF5UoAIl.subcommandTerm(_cmdAYOmAWz)
	});

	it('test for Help', async () => {
		const _HelprA3Ib5b = new Help()
		const _namedJXx9DE = false;
		const _cmdftEk37P = new Command(_namedJXx9DE)
		const _returnValuegDRw9St = undefined;
		const _arrayValueIrXDt0z = () => { return _returnValuegDRw9St };
		const _enableOrNameAndArgsoZgLVN1 = [_arrayValueIrXDt0z]
		const _descriptionVrI176C = -9.110355500875341;
		const _returnValuesJmbFDY = await _cmdftEk37P.addHelpCommand(_enableOrNameAndArgsoZgLVN1, _descriptionVrI176C)
		const _displaySuggestionXs6fkyB = false;
		const _returnValueNikvXBB = await _cmdftEk37P.showSuggestionAfterError(_displaySuggestionXs6fkyB)
		const _returnValueD8Tp4WI = await _HelprA3Ib5b.visibleCommands(_cmdftEk37P)
		const _optionsmD5Byp = {
		
	}
		const __hasHelpOptionC3oK4Pq = {
		
	}
		const __helpShortFlagVPZY0CN = false;
		const _returnValuebyrjW3c = null;
		const __findOptionmzZbvKH = () => { return _returnValuebyrjW3c };
		const __helpLongFlagkQ1llZn = 2.871443204129875;
		const _returnValuebqLvt9B = undefined;
		const _createOptionPiDs2HK = () => { return _returnValuebqLvt9B };
		const __helpDescriptionalV9txJ = null;
		const _arrayValueF7oIDnf = true;
		const _arrayValueH0ZBp8v = undefined;
		const __helpFlagsjYX7mhm = [_arrayValueF7oIDnf, _arrayValueH0ZBp8v]
		const _cmdMYQajWl = {
			"options": _optionsmD5Byp,
		"_hasHelpOption": __hasHelpOptionC3oK4Pq,
		"_helpShortFlag": __helpShortFlagVPZY0CN,
		"_findOption": __findOptionmzZbvKH,
		"_helpLongFlag": __helpLongFlagkQ1llZn,
		"createOption": _createOptionPiDs2HK,
		"_helpDescription": __helpDescriptionalV9txJ,
		"_helpFlags": __helpFlagsjYX7mhm
	}
		const _returnValueeLwXNuY = await _HelprA3Ib5b.visibleOptions(_cmdMYQajWl)
		const _cmdpKaLEfv = "WpNc1YeuJd2hgEUKVrxplFzu3rCkfebXtp5Rep9TEp7ik2";
		const _returnValuegrBKnjq = await _HelprA3Ib5b.visibleArguments(_cmdpKaLEfv)
		const _returnValue7OQwby = "RAR16p6kssV2cTnVgwrin3TK6IFqqIycSnFpdXggm9QmaDFJdLvvTJj2Jtt7EHPQn6fLRGgTE2dg4ZVsplbGPp7zwthKf42";
		const _cmdXo49mAt = () => { return _returnValue7OQwby };
		const _helperBoydqnZ = "q5WAHrCcsohRlUkhNlowoFL1pKIE5FpZKacV6k0AyCBCe8mDaJQPeTlP8sOGhSHol5";
		const _returnValuetQ1Xmf6 = await _HelprA3Ib5b.longestOptionTermLength(_cmdXo49mAt, _helperBoydqnZ)
	});

	it('test for Help', async () => {
		const _HelpLPKpim3 = new Help()
		const _flagsWVgwTza = "ho9IJyKbQM";
		const _descriptionF8fPJjj = 2.5926109163059436;
		const _optionRFn5W5V = new Option(_flagsWVgwTza, _descriptionF8fPJjj)
		const _arrayValueY2VZeup = null;
		const _valueshxE8msy = [_arrayValueY2VZeup]
		const _returnValueOUE6TDa = await _optionRFn5W5V.choices(_valueshxE8msy)
		const _valueZpWuPga = "FrsO63eGtcyoGH";
		const _previousE8PzEtP = {
		
	}
		const _returnValueRmNa8K0 = await _optionRFn5W5V._concatValue(_valueZpWuPga, _previousE8PzEtP)
		const _returnValueh815yo6 = await _optionRFn5W5V.name()
		const _returnValueGzDAk8r = await _optionRFn5W5V.attributeName()
		const _arrayValueLC8C4nQ = {
		
	}
		const _returnValuevno0QRN = [_arrayValueLC8C4nQ]
		const _valuenY3K3Mi = () => { return _returnValuevno0QRN };
		const _previousolYzyzD = "KCySsT9X8PbOtoaoQ4bp6vrcIEZc9vSKUK38khcmlN8sf7TMz60NmrJLFhp";
		const _returnValueGZmrdSu = await _optionRFn5W5V._concatValue(_valuenY3K3Mi, _previousolYzyzD)
		const _returnValueBGD0wCF = await _HelpLPKpim3.optionDescription(_optionRFn5W5V)
	});

	it('test for Help', async () => {
		const _HelpcRP6rKk = new Help()
		const _nameknosipN = undefined;
		const _cmdKgl2fIl = new Command(_nameknosipN)
		const _errorw79nrqJ = false;
		const _commandbWGuOzR = "IXTK4rtoFwjhPFt257K3YidE054cAE2yHC6PSilsX6JvnFKSsj6vKuDXbM6Uya15wVf";
		const _contextOptionsxdMgliO = {
			"error": _errorw79nrqJ,
		"command": _commandbWGuOzR
	}
		const _returnValuekJ8iZJW = await _cmdKgl2fIl._getHelpContext(_contextOptionsxdMgliO)
		const _keyHxFcCRj = "Pz59uVnCobSyx46yapexBuEwuObAIDccgOqIWFxB5N3TlJjoYysiC3M8yvqyS6mm3dwgInoEUV3LCLzMcyxDyioC93";
		const _valueXcqz4wI = true;
		const _arrayValueAOrTGOJ = "yzQYkMvAQ2SOgtny2dDmMJ36Yqy2rKuIms5XBuSjnnDE25M5xarRTdmTbrMMhHjK2CILd";
		const _arrayValueeqnaMdV = undefined;
		const _sourcexqVV4If = [_arrayValueAOrTGOJ, _arrayValueeqnaMdV]
		const _returnValueC9qHuXJ = await _cmdKgl2fIl.setOptionValueWithSource(_keyHxFcCRj, _valueXcqz4wI, _sourcexqVV4If)
		const _flagsYRQfjAL = true;
		const _returnValuePmCFQH3 = undefined;
		const _descriptiony1dioby = () => { return _returnValuePmCFQH3 };
		const _returnValueHs4TVOH = await _cmdKgl2fIl.helpOption(_flagsYRQfjAL, _descriptiony1dioby)
		const _returnValueYq4qLhG = await _HelpcRP6rKk.visibleOptions(_cmdKgl2fIl)
		const _arrayValuevuWLRiw = -2.469328869356512;
		const _arrayValuepRSwwQq = 1.332678230488657;
		const _returnValueyJFOBR = [_arrayValuevuWLRiw, _arrayValuepRSwwQq]
		const _includesUF4DaB0 = () => { return _returnValueyJFOBR };
		const _flagsIdjanCP = {
			"includes": _includesUF4DaB0
	}
		const _arrayValuejozd67P = "17zORn2GaGA65PQT2syPBMEVTarvbSx";
		const _descriptionM2tka5 = [_arrayValuejozd67P]
		const _optionWUBFPGT = new Option(_flagsIdjanCP, _descriptionM2tka5)
		const _mandatorygPDHzy = true;
		const _returnValuepJPIp3N = await _optionWUBFPGT.makeOptionMandatory(_mandatorygPDHzy)
		const _hideAGsSQnK = true;
		const _returnValueGyQ3kah = await _optionWUBFPGT.hideHelp(_hideAGsSQnK)
		const _returnValueYL5gMLF = await _optionWUBFPGT.attributeName()
		const _valueUMfwMl7 = undefined;
		const _descriptionbkOTaf = undefined;
		const _returnValuecAFDnGF = await _optionWUBFPGT.default(_valueUMfwMl7, _descriptionbkOTaf)
		const _returnValue9aQ7ZY = await _HelpcRP6rKk.optionTerm(_optionWUBFPGT)
		const __nameBbFSM9x = {
		
	}
		const __aliasesc4xaAoB = {
		
	}
		const _parent37zDej = []
		const _returnValuein3il5 = null;
		const _usageuDaqEH0 = () => { return _returnValuein3il5 };
		const _cmd2sWmMx = {
			"_name": __nameBbFSM9x,
		"_aliases": __aliasesc4xaAoB,
		"parent": _parent37zDej,
		"usage": _usageuDaqEH0
	}
		const _returnValueifww0go = await _HelpcRP6rKk.commandUsage(_cmd2sWmMx)
		const _cmdrSP62Q8 = null;
		const _returnValueEQih9Hx = -7.520622154526542;
		const _visibleArgumentsml6SoY = () => { return _returnValueEQih9Hx };
		const _returnValuemvaHnJT = undefined;
		const _argumentTermeqJMOTq = () => { return _returnValuemvaHnJT };
		const _helperj2OCIbE = {
			"visibleArguments": _visibleArgumentsml6SoY,
		"argumentTerm": _argumentTermeqJMOTq
	}
		const _returnValueuDdzX0M = await _HelpcRP6rKk.longestArgumentTermLength(_cmdrSP62Q8, _helperj2OCIbE)
	});

	it('test for Help', async () => {
		const _HelpxAJgOa8 = new Help()
		const _flagsVoWDEc = "zAHLRxMUPrbHLHOGlJHOK2JoDzXeLwup6KhoGV0x5WQ2zTfGJYlelQ4WLxEDOAHdiM";
		const _descriptionlqWZ3o = -0.8770004070789827;
		const _optionHmfZSU = new Option(_flagsVoWDEc, _descriptionlqWZ3o)
		const _valuegDXlPpM = null;
		const _previousCmSD9Ot = "CHSXN2D83fCPSUGWvJt1dBwu7IFucnozI1dT31n4wUadGGARCfreqWojdOQ7TwmDEtNeORcspi5qjHTheCI3sHgwrt1FEoYnb";
		const _returnValuerZPDorr = await _optionHmfZSU._concatValue(_valuegDXlPpM, _previousCmSD9Ot)
		const _returnValueaGk8TfK = await _optionHmfZSU.attributeName()
		const _fnA9YEN2T = {
		
	}
		const _returnValueE1Z0zAB = await _optionHmfZSU.argParser(_fnA9YEN2T)
		const _nameWC4KAC6 = {
		
	}
		const _returnValueZE8Q0xp = await _optionHmfZSU.env(_nameWC4KAC6)
		const _returnValuevSINnTN = await _HelpxAJgOa8.optionDescription(_optionHmfZSU)
		const _arrayValueuA6EOV = false;
		const _arrayValueu5jniQe = false;
		const _cmdzgvZ2SL = [_arrayValueuA6EOV, _arrayValueu5jniQe]
		const _sortSubcommandsGJedpxm = "VRuljbpGPGU89KAiwiNB1pTVj9F6wwFVHQFdDXf1DUoMxwb7rXS50OdaE8knks0d3YifvDZ6lxSrmKDCQISJWDVtC2jg";
		const _returnValueXWKzVeV = undefined;
		const _subcommandTermjMA11PG = () => { return _returnValueXWKzVeV };
		const _helperb8YeEXO = {
			"sortSubcommands": _sortSubcommandsGJedpxm,
		"subcommandTerm": _subcommandTermjMA11PG
	}
		const _returnValueyycrl1B = await _HelpxAJgOa8.formatHelp(_cmdzgvZ2SL, _helperb8YeEXO)
		const _returnValueQundYC9 = "3dYTCTcfdJxIqA98oZGuJi3kYzKB1u6XGHj4L0oMCAJoqTpyRYgM8SYXuBc27GWkDwu4eubJF6lVAj";
		const _matchEYU2ZRg = () => { return _returnValueQundYC9 };
		const _returnValueLLdBE0P = null;
		const _substrZPDr3sl = () => { return _returnValueLLdBE0P };
		const _strGWl2bWX = {
			"match": _matchEYU2ZRg,
		"substr": _substrZPDr3sl
	}
		const _widthcCqGD2X = 2.7782545335990605;
		const _indentCqN2ksb = -8.996061854824521;
		const _minColumnWidthJimPZCM = -4.758350744727756;
		const _returnValuefdplbEC = await _HelpxAJgOa8.wrap(_strGWl2bWX, _widthcCqGD2X, _indentCqN2ksb, _minColumnWidthJimPZCM)
	});

	it('test for Help', async () => {
		const _Help8Eeony = new Help()
		const _arrayValueebVMM6u = "ffynNLCH9UCAmpBghtGOaRxLlPy7BeMHq4GUCsivo3";
		const _optionsrQEsv9Q = [_arrayValueebVMM6u]
		const __hasHelpOptionKgGQVk3 = "1cVP6sOLAo7rNuz1aA4Fv";
		const __helpShortFlagSLxYC40 = undefined;
		const _returnValueW86ECrm = undefined;
		const __findOptionoDfd8ud = () => { return _returnValueW86ECrm };
		const __helpLongFlag24btaa = "PyjBw8YF8wFhSbxm";
		const _returnValueBd875Cl = "wMjoqSDKFtqF4weFVtchLhgUwaHRfR23jiGXQV8Ko8jzEizN6FgTH9JEDpY9ZkKiTqKBpK8XjFJRvkr";
		const _createOptionY0JdSTz = () => { return _returnValueBd875Cl };
		const __helpDescriptionRgktYyD = "K9Jg7hNwTiCJGVL3cK2kFWYFIUxXecKqVUReov4SDTwi3SOmxp3Yq7CXvc5rgXPuGfrLWvtvXy";
		const _arrayValueyJbDxex = null;
		const _arrayValuehvNwj9y = {
		
	}
		const _arrayValueVyY4pDv = "6a1Z1AuQWOmxoughQBpnl82SLN7uNpZPLI2gvFodWH";
		const _arrayValueAkfSWlt = [_arrayValueyJbDxex, _arrayValuehvNwj9y, _arrayValueVyY4pDv]
		const _arrayValueh9eGKPo = -2.6494933716352165;
		const __helpFlagsTj3yRkg = [_arrayValueAkfSWlt, _arrayValueh9eGKPo]
		const _cmdGBnxGay = {
			"options": _optionsrQEsv9Q,
		"_hasHelpOption": __hasHelpOptionKgGQVk3,
		"_helpShortFlag": __helpShortFlagSLxYC40,
		"_findOption": __findOptionoDfd8ud,
		"_helpLongFlag": __helpLongFlag24btaa,
		"createOption": _createOptionY0JdSTz,
		"_helpDescription": __helpDescriptionRgktYyD,
		"_helpFlags": __helpFlagsTj3yRkg
	}
		const _returnValueLd7Ziun = await _Help8Eeony.visibleOptions(_cmdGBnxGay)
		const _arrayValuewbTTkqx = -5.1059777557634325;
		const _arrayValueUqv7bys = false;
		const _arrayValuelmc0y0Q = [_arrayValuewbTTkqx, _arrayValueUqv7bys]
		const _arrayValuetgeie9E = false;
		const _returnValueCbGEl8c = {
		
	}
		const _arrayValueUPq3mRS = () => { return _returnValueCbGEl8c };
		const _nameJUziohz = [_arrayValuelmc0y0Q, _arrayValuetgeie9E, _arrayValueUPq3mRS]
		const _argumenti1ErQ7Z = new Command(_nameJUziohz)
		const _passThroughkHj0b6G = false;
		const _returnValueYOYvB8 = await _argumenti1ErQ7Z.passThroughOptions(_passThroughkHj0b6G)
		const _flagsF66Cf3 = "zCnVJaxFAmUjgVFWVoks8deISn6FlDdb1ioGVi1h7BOL4";
		const _descriptionasUn53N = true;
		const _returnValueevQIc3A = await _argumenti1ErQ7Z.createOption(_flagsF66Cf3, _descriptionasUn53N)
		const _keyGzhKdmF = "mD77GxdSqDWhqZgdm6lSlVtL1K2JE7CH1HpBokq9FvPdtsRoIjDf96LxGqOpzA0rQcLFXLKNtytghT2TWUojCPX";
		const _returnValuenAQMI1 = await _argumenti1ErQ7Z.getOptionValue(_keyGzhKdmF)
		const _keyaE3pkQH = {
		
	}
		const _returnValuemGloctq = 7.903923350805904;
		const _valueIRzWreq = () => { return _returnValuemGloctq };
		const _arrayValueHXglj43 = 2.6458411357985145;
		const _arrayValueLF3Kl0h = undefined;
		const _arrayValueYwIzG7v = 2.1719543955489584;
		const _sourceW3kBeuN = [_arrayValueHXglj43, _arrayValueLF3Kl0h, _arrayValueYwIzG7v]
		const _returnValuefvccfLJ = await _argumenti1ErQ7Z.setOptionValueWithSource(_keyaE3pkQH, _valueIRzWreq, _sourceW3kBeuN)
		const _arrayValueKZVqt6x = null;
		const _operandspe5mZ1 = [_arrayValueKZVqt6x]
		const _unknownh2V6R8F = {
		
	}
		const _returnValueF8PoE8z = await _argumenti1ErQ7Z._parseCommand(_operandspe5mZ1, _unknownh2V6R8F)
		const _returnValueivM2XzT = await _Help8Eeony.argumentDescription(_argumenti1ErQ7Z)
	});

	it('test for Help', async () => {
		const _HelpUPGmjG = new Help()
		const _arrayValuenC58JQ = false;
		const _arrayValueGnXXtCD = undefined;
		const _arrayValueCcYuas = null;
		const _arrayValueVZso9uo = false;
		const _arrayValueW2MSPaw = [_arrayValueVZso9uo]
		const _arrayValuedaU7PSv = [_arrayValueGnXXtCD, _arrayValueCcYuas, _arrayValueW2MSPaw]
		const _returnValueTziNNz = [_arrayValuenC58JQ, _arrayValuedaU7PSv]
		const _descriptionmur0Wq = () => { return _returnValueTziNNz };
		const _cmdOXn7Eqf = {
			"description": _descriptionmur0Wq
	}
		const _returnValuenJXCrnc = await _HelpUPGmjG.subcommandDescription(_cmdOXn7Eqf)
		const _arrayValueYP0AwYh = null;
		const _arrayValueFfaP9P = null;
		const _arrayValueC2sBpm0 = null;
		const _arrayValueub1dviR = [_arrayValueYP0AwYh, _arrayValueFfaP9P, _arrayValueC2sBpm0]
		const _nameWPWDdc = [_arrayValueub1dviR]
		const _cmdTnmdyXv = new Command(_nameWPWDdc)
		const _configurationrVevrI = undefined;
		const _returnValuefRHVPEj = await _cmdTnmdyXv.configureOutput(_configurationrVevrI)
		const _passThroughixZFSz = true;
		const _returnValueXssi4r5 = await _cmdTnmdyXv.passThroughOptions(_passThroughixZFSz)
		const _returnValuer6CiRPm = await _HelpUPGmjG.subcommandTerm(_cmdTnmdyXv)
		const _cmdD25y9ac = undefined;
		const _returnValuezqcQ2a = await _HelpUPGmjG.subcommandTerm(_cmdD25y9ac)
		const _namee3sUT1Y = {
		
	}
		const _cmdxmiouUe = new Command(_namee3sUT1Y)
		const _arrayValuepSYL6mT = 1.6125951340996547;
		const _arrayValueYnqnyh = {
		
	}
		const _arrayValueoqm8F7 = true;
		const _returnValueuoS2bA2 = [_arrayValuepSYL6mT, _arrayValueYnqnyh, _arrayValueoqm8F7]
		const _flagKNGi1Zz = () => { return _returnValueuoS2bA2 };
		const _returnValueHxDfHQK = await _cmdxmiouUe.unknownOption(_flagKNGi1Zz)
		const _errorxupn2Wl = undefined;
		const _arrayValuedFYV6TZ = null;
		const _arrayValue6gAKpJ = 6.823612425046825;
		const _arrayValuevdYnpsq = false;
		const _commandK10RG2o = [_arrayValuedFYV6TZ, _arrayValue6gAKpJ, _arrayValuevdYnpsq]
		const _contextOptionsmyuZdl2 = {
			"error": _errorxupn2Wl,
		"command": _commandK10RG2o
	}
		const _returnValueTbbEci = await _cmdxmiouUe.help(_contextOptionsmyuZdl2)
		const _returnValuedMduLqj = {
		
	}
		const _applyFSzoIJZ = () => { return _returnValuedMduLqj };
		const _fnGRCV6NF = {
			"apply": _applyFSzoIJZ
	}
		const _returnValuetKlUj7F = await _cmdxmiouUe.action(_fnGRCV6NF)
		const _returnValuehurTw6E = await _HelpUPGmjG.visibleArguments(_cmdxmiouUe)
		const _returnValueChFty8j = "H6GTR5qMiDfbQQEyDZV4cz1uYyaVs8Me7PzqdtxNA4Mkja9jYVpI1A0Jya1aU";
		const _nameZAJkSwI = () => { return _returnValueChFty8j };
		const _argumentZVRGV4P = {
			"name": _nameZAJkSwI
	}
		const _returnValuePiGIP7M = await _HelpUPGmjG.argumentTerm(_argumentZVRGV4P)
	});
})