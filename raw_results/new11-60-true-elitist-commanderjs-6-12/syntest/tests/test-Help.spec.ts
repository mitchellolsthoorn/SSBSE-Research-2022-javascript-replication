export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpDix8Dfk = new Help()
		const _arrayValuevPAA16K = []
		const _arrayValueBUBtMoq = false;
		const _cmdOWZ8sY = [_arrayValuevPAA16K, _arrayValueBUBtMoq]
		const _returnValuembOQ55W = null;
		const _visibleArgumentsOuyrfU8 = () => { return _returnValuembOQ55W };
		const _arrayValueqTQ0h0L = 5.234650146009052;
		const _returnValueXVmYOJl = [_arrayValueqTQ0h0L]
		const _argumentTermavUai2w = () => { return _returnValueXVmYOJl };
		const _helperGCVeRAt = {
			"visibleArguments": _visibleArgumentsOuyrfU8,
		"argumentTerm": _argumentTermavUai2w
	}
		const _returnValuegjgJbY = await _HelpDix8Dfk.longestArgumentTermLength(_cmdOWZ8sY, _helperGCVeRAt)
	});

	it('test for Help', async () => {
		const _HelpjlAiSm = new Help()
		const _cmdD1KjVpg = null;
		const _sortSubcommandsMqn6idu = {
		
	}
		const _returnValued10ZxS2 = true;
		const _subcommandTermHs5wUh = () => { return _returnValued10ZxS2 };
		const _helperoMM0ww = {
			"sortSubcommands": _sortSubcommandsMqn6idu,
		"subcommandTerm": _subcommandTermHs5wUh
	}
		const _returnValueU7Q1arA = await _HelpjlAiSm.formatHelp(_cmdD1KjVpg, _helperoMM0ww)
	});

	it('test for Help', async () => {
		const _Help5yO35q = new Help()
		const _arrayValueEb4PEU8 = "UV4HoDTkz80jTnyLpVPN6RUjCHC8A4LTCCApSCdJDZGEwiggVqX2XIcq8JUu1frMtNMY5";
		const _arrayValueRQlJxEv = undefined;
		const _arrayValuerVkNhjw = false;
		const _cmdDljwx8 = [_arrayValueEb4PEU8, _arrayValueRQlJxEv, _arrayValuerVkNhjw]
		const _sortSubcommandsQba2SGk = undefined;
		const _returnValueqJ43dOl = "svUmWN1flFwvTsk1uXfc2cHYqYiFdmHxw1jCrRYFFX1551sZLW4GmowvSWEpX7VhKrS83gApPQK698Vsr9B";
		const _subcommandTermaOj1xod = () => { return _returnValueqJ43dOl };
		const _helperS2tV5DI = {
			"sortSubcommands": _sortSubcommandsQba2SGk,
		"subcommandTerm": _subcommandTermaOj1xod
	}
		const _returnValueivow7Y = await _Help5yO35q.longestSubcommandTermLength(_cmdDljwx8, _helperS2tV5DI)
		const _returnValueN7dExqA = "xGvhfiDqySV26CdBPj9gekB";
		const _namey8EljUV = () => { return _returnValueN7dExqA };
		const _argumentX1M76Za = {
			"name": _namey8EljUV
	}
		const _returnValueU7Zm7pN = await _Help5yO35q.argumentTerm(_argumentX1M76Za)
	});

	it('test for Help', async () => {
		const _HelpmfWeiir = new Help()
		const _cmdqXh2ocs = -5.108043406234683;
		const _returnValueTmyxlBE = undefined;
		const _arrayValueTMqVEGt = () => { return _returnValueTmyxlBE };
		const _returnValueK7O89WJ = [_arrayValueTMqVEGt]
		const _longestOptionTermLengthgcxolMX = () => { return _returnValueK7O89WJ };
		const _returnValuevZO2Cnv = null;
		const _longestSubcommandTermLengthqeaNKZE = () => { return _returnValuevZO2Cnv };
		const _longestArgumentTermLengthvUOFUB = null;
		const _helperp0P2LKT = {
			"longestOptionTermLength": _longestOptionTermLengthgcxolMX,
		"longestSubcommandTermLength": _longestSubcommandTermLengthqeaNKZE,
		"longestArgumentTermLength": _longestArgumentTermLengthvUOFUB
	}
		const _returnValuedrpfnkA = await _HelpmfWeiir.padWidth(_cmdqXh2ocs, _helperp0P2LKT)
		const __namem0kOO5G = {
		
	}
		const __aliasesQLv790d = {
		
	}
		const _parenttbElUE7 = {
		
	}
		const _returnValuebnqz5n = true;
		const _usageYN92vMy = () => { return _returnValuebnqz5n };
		const _cmdG47iKlY = {
			"_name": __namem0kOO5G,
		"_aliases": __aliasesQLv790d,
		"parent": _parenttbElUE7,
		"usage": _usageYN92vMy
	}
		const _returnValueHTWzYPs = await _HelpmfWeiir.commandUsage(_cmdG47iKlY)
		const _arrayValuehKB1Qsa = 9.957628189735342;
		const _returnValuei9qJsdL = 7.004347003571024;
		const _arrayValuen6S192J = () => { return _returnValuei9qJsdL };
		const _arrayValueIwMACwB = false;
		const _arrayValueovgD9yG = -2.0427730541444644;
		const _arrayValuefWLzioM = undefined;
		const _arrayValuexln2899 = [_arrayValueIwMACwB, _arrayValueovgD9yG, _arrayValuefWLzioM]
		const _returnValueVUxBLf8 = [_arrayValuehKB1Qsa, _arrayValuen6S192J, _arrayValuexln2899]
		const _optionJVAs3xy = () => { return _returnValueVUxBLf8 };
		const _returnValuefTsJdQ = await _HelpmfWeiir.optionDescription(_optionJVAs3xy)
	});

	it('test for Help', async () => {
		const _HelpVO8eHww = new Help()
		const _argChoicesdNl3mbA = {
		
	}
		const _defaultValuepa7lDgv = undefined;
		const _defaultValueDescriptionOd3l8VG = {
		
	}
		const _arrayValuepZqnQ79 = null;
		const _arrayValueS3qXCaJ = [_arrayValuepZqnQ79]
		const _arrayValueVj6Vod6 = -1.0497985427956422;
		const _returnValuebWGMywi = null;
		const _arrayValueD7RwrmJ = () => { return _returnValuebWGMywi };
		const _descriptionIjOXxk = [_arrayValueS3qXCaJ, _arrayValueVj6Vod6, _arrayValueD7RwrmJ]
		const _argumentiMGh97L = {
			"argChoices": _argChoicesdNl3mbA,
		"defaultValue": _defaultValuepa7lDgv,
		"defaultValueDescription": _defaultValueDescriptionOd3l8VG,
		"description": _descriptionIjOXxk
	}
		const _returnValueeSYu1D = await _HelpVO8eHww.argumentDescription(_argumentiMGh97L)
	});

	it('test for Help', async () => {
		const _HelpnTqe0nr = new Help()
		const _returnValuefzpHPla = -9.985869242583727;
		const _returnValueYzt6yf8 = () => { return _returnValuefzpHPla };
		const _descriptionYVM4B3z = () => { return _returnValueYzt6yf8 };
		const _cmdAzJfj1X = {
			"description": _descriptionYVM4B3z
	}
		const _returnValueOER2G2J = await _HelpnTqe0nr.subcommandDescription(_cmdAzJfj1X)
		const _returnValueVePUK64 = undefined;
		const _descriptionqH9suwe = () => { return _returnValueVePUK64 };
		const _cmdpBdx3WV = {
			"description": _descriptionqH9suwe
	}
		const _returnValuezTTMtoa = await _HelpnTqe0nr.commandDescription(_cmdpBdx3WV)
	});

	it('test for Help', async () => {
		const _HelpdQR5N0 = new Help()
		const _cmdkcGoQU0 = true;
		const _returnValuesFIhgFl = null;
		const _visibleOptionsQQtiVf = () => { return _returnValuesFIhgFl };
		const _returnValueLjAIl4 = {
		
	}
		const _optionTermh69tEDz = () => { return _returnValueLjAIl4 };
		const _helperd951eb = {
			"visibleOptions": _visibleOptionsQQtiVf,
		"optionTerm": _optionTermh69tEDz
	}
		const _returnValueLpbyf7E = await _HelpdQR5N0.longestOptionTermLength(_cmdkcGoQU0, _helperd951eb)
	});

	it('test for Help', async () => {
		const _Help3ItcnE = new Help()
		const _commandsfPVNzS2 = {
		
	}
		const _returnValueq73ko7j = "WE4MNE18LIiRzXj1hdmWkDjXHTX8aopt8ErfVoo71STwR2FFQLzf4kYQWrhlw3Hb";
		const __hasImplicitHelpCommandNaDgeY7 = () => { return _returnValueq73ko7j };
		const __helpCommandnameAndArgsSjf6Wu = {
		
	}
		const _returnValueQAPUZ1 = -0.9772775686949053;
		const _returnValueneGAl1 = () => { return _returnValueQAPUZ1 };
		const _createCommandKcD7zq = () => { return _returnValueneGAl1 };
		const __helpCommandDescriptioneoXEdY = undefined;
		const _cmd94kVxr = {
			"commands": _commandsfPVNzS2,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandNaDgeY7,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsSjf6Wu,
		"createCommand": _createCommandKcD7zq,
		"_helpCommandDescription": __helpCommandDescriptioneoXEdY
	}
		const _returnValueOe0WL4A = await _Help3ItcnE.visibleCommands(_cmd94kVxr)
		const _arrayValueUTu8UsQ = "3twxVxAgIkMmxybKck";
		const _arrayValueuW08kM = "hqRIIHA2D2vnsMe52XTQEcjLjeqVkMnWsMvLqWkAxKyQGuDnFc1Allwayjdo50l2ai4rICeuNtuRT";
		const _arrayValueSNfKvFt = 6.076906087129338;
		const _arrayValueKgqlE4 = "R1czbMM0vAhFN0xcIxelnWU7bzrZKswdFHZm2SyP24Xng4qLoKjlPQ7UTUDIAW9l1bpNfqiGj6H";
		const _arrayValueTLBkLap = [_arrayValueSNfKvFt, _arrayValueKgqlE4]
		const _returnValueo2BDND = [_arrayValueUTu8UsQ, _arrayValueuW08kM, _arrayValueTLBkLap]
		const _returnValueuebxoUr = () => { return _returnValueo2BDND };
		const _matchWw9WGMu = () => { return _returnValueuebxoUr };
		const _returnValueGXV6Aab = null;
		const _substri7w3MfL = () => { return _returnValueGXV6Aab };
		const _strzCG3hu8 = {
			"match": _matchWw9WGMu,
		"substr": _substri7w3MfL
	}
		const _widthX7HpyBN = 2.657280296952223;
		const _indentVpCo67i = 6.963165129764835;
		const _minColumnWidthM9GwAhi = -8.159063945674484;
		const _returnValueiJALPqF = await _Help3ItcnE.wrap(_strzCG3hu8, _widthX7HpyBN, _indentVpCo67i, _minColumnWidthM9GwAhi)
		const _returnValuecQ0Pel3 = {
		
	}
		const _cmdUVHr4EA = () => { return _returnValuecQ0Pel3 };
		const _sortSubcommandsp28aUPv = -1.659461653744037;
		const _returnValueSsiUxr = null;
		const _returnValueTFCJv7 = () => { return _returnValueSsiUxr };
		const _subcommandTermkV1xpCc = () => { return _returnValueTFCJv7 };
		const _helperG9snM7H = {
			"sortSubcommands": _sortSubcommandsp28aUPv,
		"subcommandTerm": _subcommandTermkV1xpCc
	}
		const _returnValueHxyDOPa = await _Help3ItcnE.longestSubcommandTermLength(_cmdUVHr4EA, _helperG9snM7H)
		const _returnValuea3x26Tc = 0.8874407096011243;
		const _cmdha5xvaj = () => { return _returnValuea3x26Tc };
		const _returnValuekl7ARzi = undefined;
		const _visibleOptionsPom4De6 = () => { return _returnValuekl7ARzi };
		const _returnValueWCxq9gl = true;
		const _optionTermT4tDgc = () => { return _returnValueWCxq9gl };
		const _helperxQL72HV = {
			"visibleOptions": _visibleOptionsPom4De6,
		"optionTerm": _optionTermT4tDgc
	}
		const _returnValueKUo5wV = await _Help3ItcnE.longestOptionTermLength(_cmdha5xvaj, _helperxQL72HV)
		const _cmdGPvoQeZ = -2.3639683917585765;
		const _returnValuei9A5MdW = "XubNV84r4bxFOO2RGIzzGD";
		const _sortSubcommandswHG8oBN = () => { return _returnValuei9A5MdW };
		const _returnValueIbN4G9N = undefined;
		const _subcommandTermQLg4KFD = () => { return _returnValueIbN4G9N };
		const _helpermWwBBil = {
			"sortSubcommands": _sortSubcommandswHG8oBN,
		"subcommandTerm": _subcommandTermQLg4KFD
	}
		const _returnValueSSAEorB = await _Help3ItcnE.formatHelp(_cmdGPvoQeZ, _helpermWwBBil)
	});

	it('test for Help', async () => {
		const _Helppjv771z = new Help()
		const _returnValuexFVMJhe = "816OXOkY1WNBssZBDpJhe5vKE3RtLqAmIOAmOPS9Ey2je1MFo6Bf7";
		const _returnValuexfiN0xf = () => { return _returnValuexFVMJhe };
		const _descriptionKJVOOA = () => { return _returnValuexfiN0xf };
		const _cmdvEONqV3 = {
			"description": _descriptionKJVOOA
	}
		const _returnValueLFii0T8 = await _Helppjv771z.commandDescription(_cmdvEONqV3)
		const __name8gKsR7 = {
		
	}
		const __aliasesvKEA4I2 = {
		
	}
		const _parentQcWJBnZ = {
		
	}
		const _usageJoWD9o = 5.110758809636888;
		const _cmdcIEc67 = {
			"_name": __name8gKsR7,
		"_aliases": __aliasesvKEA4I2,
		"parent": _parentQcWJBnZ,
		"usage": _usageJoWD9o
	}
		const _returnValueuiAwZRT = await _Helppjv771z.commandUsage(_cmdcIEc67)
	});

	it('test for Help', async () => {
		const _HelpvNQWsaS = new Help()
		const _returnValuei2Jc02C = 8.853836660554364;
		const _nameu8nbixi = () => { return _returnValuei2Jc02C };
		const _argumentsFNgKg1 = {
			"name": _nameu8nbixi
	}
		const _returnValueZ6WGZiw = await _HelpvNQWsaS.argumentTerm(_argumentsFNgKg1)
		const _cmdG7Ms3m = undefined;
		const _sortSubcommandsYkdvjaJ = null;
		const _subcommandTermGXRB7j = undefined;
		const _helperY06BnCK = {
			"sortSubcommands": _sortSubcommandsYkdvjaJ,
		"subcommandTerm": _subcommandTermGXRB7j
	}
		const _returnValueFHNF5ke = await _HelpvNQWsaS.longestSubcommandTermLength(_cmdG7Ms3m, _helperY06BnCK)
		const _cmdeRezY9S = null;
		const _returnValueS55vUW6 = await _HelpvNQWsaS.visibleOptions(_cmdeRezY9S)
	});

	it('test for Help', async () => {
		const _HelpWMcbW7l = new Help()
		const __argsDescriptiontsNe6LV = null;
		const __argsWCyaMv = {
		
	}
		const _cmdZIYq8sl = {
			"_argsDescription": __argsDescriptiontsNe6LV,
		"_args": __argsWCyaMv
	}
		const _returnValueZa5w5cW = await _HelpWMcbW7l.visibleArguments(_cmdZIYq8sl)
		const _optionsTjD50uu = {
		
	}
		const __hasHelpOptionV18GBF = "vFpjRZOp8CQaNmH7AUivan2BTgH1GitRJvgB978YiAWmyqJvbaDofhpqfEkYWvAmJfJnbaXIvW3T3K4fPRSgXXaIwysaZUmK";
		const _arrayValueVRKV94k = -8.722035112587886;
		const _arrayValueJ62Okms = true;
		const __helpShortFlagJhQyHk5 = [_arrayValueVRKV94k, _arrayValueJ62Okms]
		const _returnValuewUt8W3i = []
		const __findOptionAwIPJg = () => { return _returnValuewUt8W3i };
		const __helpLongFlagwdXvNG7 = 3.3020069344575766;
		const _returnValuebYqQOw = []
		const _createOptionG9w6qkg = () => { return _returnValuebYqQOw };
		const __helpDescriptionp444dFI = undefined;
		const __helpFlagsg2w5VFv = {
		
	}
		const _cmdh0r8STo = {
			"options": _optionsTjD50uu,
		"_hasHelpOption": __hasHelpOptionV18GBF,
		"_helpShortFlag": __helpShortFlagJhQyHk5,
		"_findOption": __findOptionAwIPJg,
		"_helpLongFlag": __helpLongFlagwdXvNG7,
		"createOption": _createOptionG9w6qkg,
		"_helpDescription": __helpDescriptionp444dFI,
		"_helpFlags": __helpFlagsg2w5VFv
	}
		const _returnValueNL6QOy8 = await _HelpWMcbW7l.visibleOptions(_cmdh0r8STo)
	});

	it('test for Help', async () => {
		const _HelpD4saY2P = new Help()
		const _matchYF7Tdil = {
		
	}
		const _arrayValueP7mDj8P = "WmQDGkbsI5Q8nXaJyj1UMKV0r9VXfld6qp67dxXcg6vo1fyGuXeGE53F";
		const _returnValueUV40OOT = [_arrayValueP7mDj8P]
		const _substrSi7XsFh = () => { return _returnValueUV40OOT };
		const _strdmsOJsY = {
			"match": _matchYF7Tdil,
		"substr": _substrSi7XsFh
	}
		const _widthAhErATH = -6.654980755514954;
		const _indentf1F00Qf = 3.6915023813393297;
		const _minColumnWidtheXI0VnP = null;
		const _returnValueOXtPUq2 = await _HelpD4saY2P.wrap(_strdmsOJsY, _widthAhErATH, _indentf1F00Qf, _minColumnWidtheXI0VnP)
		const _cmdBAlD4Mw = null;
		const _sortSubcommandstKcop22 = null;
		const _returnValueAu4tDr = undefined;
		const _returnValueSRUwgW = () => { return _returnValueAu4tDr };
		const _subcommandTermEGacAnt = () => { return _returnValueSRUwgW };
		const _helperggnZn75 = {
			"sortSubcommands": _sortSubcommandstKcop22,
		"subcommandTerm": _subcommandTermEGacAnt
	}
		const _returnValuebCIiC6K = await _HelpD4saY2P.longestSubcommandTermLength(_cmdBAlD4Mw, _helperggnZn75)
		const __argsI3HjbF = {
		
	}
		const __nameDyIdgXN = -6.51628914762038;
		const __aliasescq75eLf = {
		
	}
		const _optionsK1wfWiL = {
		
	}
		const _cmdQCYqzP = {
			"_args": __argsI3HjbF,
		"_name": __nameDyIdgXN,
		"_aliases": __aliasescq75eLf,
		"options": _optionsK1wfWiL
	}
		const _returnValueOyGCYES = await _HelpD4saY2P.subcommandTerm(_cmdQCYqzP)
		const _cmdLvj8Zri = null;
		const _arrayValueIAgEdwm = undefined;
		const _arrayValuekYhhNqs = "xLgeZS2Y3ANOYt5dXTB9UWrojit4UmAnW";
		const _returnValuevKkvX43 = [_arrayValueIAgEdwm, _arrayValuekYhhNqs]
		const _longestOptionTermLengthVkBIPs5 = () => { return _returnValuevKkvX43 };
		const _returnValuesYOZUiZ = {
		
	}
		const _longestSubcommandTermLengthOQZkHWT = () => { return _returnValuesYOZUiZ };
		const _returnValuerSlroW2 = null;
		const _longestArgumentTermLengthT0o85ma = () => { return _returnValuerSlroW2 };
		const _helpert0EyDPJ = {
			"longestOptionTermLength": _longestOptionTermLengthVkBIPs5,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOQZkHWT,
		"longestArgumentTermLength": _longestArgumentTermLengthT0o85ma
	}
		const _returnValueTumHwgC = await _HelpD4saY2P.padWidth(_cmdLvj8Zri, _helpert0EyDPJ)
		const _cmdMnO2d6I = -8.323751476970973;
		const _returnValuem9FJPXv = await _HelpD4saY2P.subcommandDescription(_cmdMnO2d6I)
	});

	it('test for Help', async () => {
		const _HelpbkWT4jF = new Help()
		const __argsgIfIfoH = {
		
	}
		const __namet7fmqrS = 8.72942645374913;
		const __aliasespzQLoqa = {
		
	}
		const _optionslGBaEzx = {
		
	}
		const _cmdUeU5Aa = {
			"_args": __argsgIfIfoH,
		"_name": __namet7fmqrS,
		"_aliases": __aliasespzQLoqa,
		"options": _optionslGBaEzx
	}
		const _returnValuetPYP6kP = await _HelpbkWT4jF.subcommandTerm(_cmdUeU5Aa)
		const _cmdRbGiKRD = "NhWlpivZm1lrtZILCAVJP17GnGo1deL7riF1tQ1pWcyA3N1VJQeojwzelGKdigui4UWMGp0YbuOkL2YKPuSGTQBpuaiDSb";
		const _returnValueb9GKfxt = true;
		const _arrayValuehNzYeQ7 = () => { return _returnValueb9GKfxt };
		const _returnValueGVX6fcg = false;
		const _arrayValueYYcdYj = () => { return _returnValueGVX6fcg };
		const _arrayValueVKYWmIE = 7.995433093396432;
		const _returnValue5m6A5q = [_arrayValuehNzYeQ7, _arrayValueYYcdYj, _arrayValueVKYWmIE]
		const _visibleArgumentsCEvj02t = () => { return _returnValue5m6A5q };
		const _returnValueRlRulGw = -7.0103833291755215;
		const _argumentTermZJbLvzq = () => { return _returnValueRlRulGw };
		const _helpertfQ1Vzy = {
			"visibleArguments": _visibleArgumentsCEvj02t,
		"argumentTerm": _argumentTermZJbLvzq
	}
		const _returnValueWNyoNjz = await _HelpbkWT4jF.longestArgumentTermLength(_cmdRbGiKRD, _helpertfQ1Vzy)
		const __argsZKd6HVs = {
		
	}
		const __nameHQUdrqX = -0.768650864344254;
		const __aliasesiTqtnPC = {
		
	}
		const _optionsDrJm9Bl = {
		
	}
		const _cmdms50Kgf = {
			"_args": __argsZKd6HVs,
		"_name": __nameHQUdrqX,
		"_aliases": __aliasesiTqtnPC,
		"options": _optionsDrJm9Bl
	}
		const _returnValuedLg4r7M = await _HelpbkWT4jF.subcommandTerm(_cmdms50Kgf)
	});

	it('test for Help', async () => {
		const _Helpyr3ga0A = new Help()
		const _optionsr2cBrvh = {
		
	}
		const __hasHelpOptionXCi5hpp = null;
		const __helpShortFlagYgH6gaz = undefined;
		const _returnValueFXqESqt = true;
		const __findOptionIr5Foqq = () => { return _returnValueFXqESqt };
		const __helpLongFlagoEkNkDd = -5.149380856238766;
		const _returnValuePCg6vCC = null;
		const _createOptionDIhHfNx = () => { return _returnValuePCg6vCC };
		const __helpDescriptionX9jnk3M = false;
		const __helpFlagseUfcvwi = []
		const _cmdFIQtPA7 = {
			"options": _optionsr2cBrvh,
		"_hasHelpOption": __hasHelpOptionXCi5hpp,
		"_helpShortFlag": __helpShortFlagYgH6gaz,
		"_findOption": __findOptionIr5Foqq,
		"_helpLongFlag": __helpLongFlagoEkNkDd,
		"createOption": _createOptionDIhHfNx,
		"_helpDescription": __helpDescriptionX9jnk3M,
		"_helpFlags": __helpFlagseUfcvwi
	}
		const _returnValuedk5GuVc = await _Helpyr3ga0A.visibleOptions(_cmdFIQtPA7)
		const _returnValuelyAu0Ts = false;
		const _returnValueW0n7lFG = () => { return _returnValuelyAu0Ts };
		const _descriptionRnjYHg = () => { return _returnValueW0n7lFG };
		const _cmd5JM0XA = {
			"description": _descriptionRnjYHg
	}
		const _returnValueKip4qB = await _Helpyr3ga0A.subcommandDescription(_cmd5JM0XA)
	});

	it('test for Help', async () => {
		const _HelpThNbemu = new Help()
		const _argChoicesPjRgYYk = {
		
	}
		const _negatexhauzz4 = false;
		const _defaultValueKpYnHKF = undefined;
		const _defaultValueDescriptionqedB9dv = 8.632256446976193;
		const _envVarkPem67l = undefined;
		const _descriptioncRxQwE8 = undefined;
		const _optionZL9Vpf = {
			"argChoices": _argChoicesPjRgYYk,
		"negate": _negatexhauzz4,
		"defaultValue": _defaultValueKpYnHKF,
		"defaultValueDescription": _defaultValueDescriptionqedB9dv,
		"envVar": _envVarkPem67l,
		"description": _descriptioncRxQwE8
	}
		const _returnValueih79cyq = await _HelpThNbemu.optionDescription(_optionZL9Vpf)
		const __argsDfBlvq = {
		
	}
		const __namePYxZC1u = -3.9925406304946707;
		const __aliasesxOUeYwO = true;
		const _optionsjrjujmt = {
		
	}
		const _cmdpFzK7D = {
			"_args": __argsDfBlvq,
		"_name": __namePYxZC1u,
		"_aliases": __aliasesxOUeYwO,
		"options": _optionsjrjujmt
	}
		const _returnValuen1UwSE = await _HelpThNbemu.subcommandTerm(_cmdpFzK7D)
	});

	it('test for Help', async () => {
		const _HelpoGGcaNz = new Help()
		const _arrayValueu4f11O = false;
		const _argumentkhdKak = [_arrayValueu4f11O]
		const _returnValueDlGgssl = await _HelpoGGcaNz.argumentDescription(_argumentkhdKak)
	});

	it('test for Help', async () => {
		const _HelpDXIT7ga = new Help()
		const _returnValueqOjr34 = undefined;
		const _flags88mdXm = () => { return _returnValueqOjr34 };
		const _optionJeV7nbG = {
			"flags": _flags88mdXm
	}
		const _returnValueMpFK9k4 = await _HelpDXIT7ga.optionTerm(_optionJeV7nbG)
		const _cmdXSZpIGL = true;
		const _arrayValuehWR6sx = null;
		const _arrayValueBJ4xrB3 = -7.723616727060849;
		const _helpertWe4l2z = [_arrayValuehWR6sx, _arrayValueBJ4xrB3]
		const _returnValuePmXPe5m = await _HelpDXIT7ga.padWidth(_cmdXSZpIGL, _helpertWe4l2z)
	});

	it('test for Help', async () => {
		const _HelpxsaG1c9 = new Help()
		const _strdeaNXbA = "pZzEMuS1rv3FrSV6EwLpaC4D99ywBcovAnKbLkeiivLxXz5xLKPyyVEsOQKcCV8ATms";
		const _widthw0EXoW = "GD9yrMSdh4vVSiQDGXqVXqBgm24tjuaxvP";
		const _indentresfs2J = -7.4331762668145585;
		const _minColumnWidthx8RJzdj = -1.7204641187161585;
		const _returnValueGI7Rpt7 = await _HelpxsaG1c9.wrap(_strdeaNXbA, _widthw0EXoW, _indentresfs2J, _minColumnWidthx8RJzdj)
		const _arrayValuekEt7zGq = null;
		const _arrayValueZXfKfiU = undefined;
		const _returnValuen8KBjZa = true;
		const _arrayValueZkhXvKN = () => { return _returnValuen8KBjZa };
		const _cmdSBlz6RQ = [_arrayValuekEt7zGq, _arrayValueZXfKfiU, _arrayValueZkhXvKN]
		const _returnValuek7hR67u = await _HelpxsaG1c9.commandDescription(_cmdSBlz6RQ)
	});

	it('test for Help', async () => {
		const _HelpDi9JPky = new Help()
		const _flagsEg0EeVc = {
		
	}
		const _optionPYVG3FB = {
			"flags": _flagsEg0EeVc
	}
		const _returnValuexLzR9vH = await _HelpDi9JPky.optionTerm(_optionPYVG3FB)
		const _arrayValueL7OxLkt = undefined;
		const _arrayValueiG4wDiZ = []
		const _arrayValueVrkvU3Y = -8.868721249667615;
		const _optionhe6oLwu = [_arrayValueL7OxLkt, _arrayValueiG4wDiZ, _arrayValueVrkvU3Y]
		const _returnValuefUC1ai = await _HelpDi9JPky.optionDescription(_optionhe6oLwu)
	});

	it('test for Help', async () => {
		const _Helpt521M3 = new Help()
		const _strzoOACgC = "X66MFQKjpkoam1eUQXNjfEhMiXKcnFnuPgtkkcA1zZgATSdp2sZgVqBiqnmFfG0RwPN";
		const _widthSJFf05 = 2.013858829374417;
		const _indentWkSaFbg = -1.323545725238997;
		const _minColumnWidthK65rVJ = 5.812508790202088;
		const _returnValueZDicDU = await _Helpt521M3.wrap(_strzoOACgC, _widthSJFf05, _indentWkSaFbg, _minColumnWidthK65rVJ)
		const _returnValueAzEqw0V = -9.778009498779399;
		const _arrayValueWeNt4hZ = () => { return _returnValueAzEqw0V };
		const _cmdH7Xnmu = [_arrayValueWeNt4hZ]
		const _returnValueZ7XcmrO = await _Helpt521M3.visibleOptions(_cmdH7Xnmu)
		const _arrayValueuyhwq4g = null;
		const _arrayValue0ES5Uw = null;
		const _arrayValueuicXcW6 = undefined;
		const _arrayValues9IBdmt = [_arrayValueuyhwq4g, _arrayValue0ES5Uw, _arrayValueuicXcW6]
		const _arrayValueEYPaRCl = 8.246076498102852;
		const _arrayValuehQOYi3S = "K0c0hBvPu1c44vvqdD7yhtYvrQmdC4F2xPLRIY5ubP9fdYjAvhPndebK98nS3vhve6MfUD6mJyfY";
		const _cmdYVU4ABl = [_arrayValues9IBdmt, _arrayValueEYPaRCl, _arrayValuehQOYi3S]
		const _returnValuesh3DpAh = await _Helpt521M3.commandUsage(_cmdYVU4ABl)
		const _arrayValueqT5F6BC = true;
		const _arrayValuepe9MBEb = null;
		const _arrayValuenQGarbr = -4.396977056568989;
		const _arrayValueshHjuy = undefined;
		const _cmdET68V4Y = [_arrayValueqT5F6BC, _arrayValuepe9MBEb, _arrayValuenQGarbr, _arrayValueshHjuy]
		const _returnValueuGOZ97h = await _Helpt521M3.visibleOptions(_cmdET68V4Y)
	});

	it('test for Help', async () => {
		const _HelpJgTCpGr = new Help()
		const _namelxAcwl0 = undefined;
		const _cmddj8USsX = new Command(_namelxAcwl0)
		const _allowExcessr4GR9IW = false;
		const _returnValueAmCy5Z = await _cmddj8USsX.allowExcessArguments(_allowExcessr4GR9IW)
		const _returnValueBNRq7ZB = await _HelpJgTCpGr.subcommandTerm(_cmddj8USsX)
		const _arrayValuezzTSzE = {
		
	}
		const _namem7EaSFc = [_arrayValuezzTSzE]
		const _descriptionfK09sIX = undefined;
		const _cmdX8ktrPB = new Argument(_namem7EaSFc, _descriptionfK09sIX)
		const _returnValueEXNZz8 = await _cmdX8ktrPB.argOptional()
		const _valuePRxa3B3 = {
		
	}
		const _descriptionaatmscE = {
		
	}
		const _returnValueOIdIOM = await _cmdX8ktrPB.default(_valuePRxa3B3, _descriptionaatmscE)
		const _returnValueG4aW3y = {
		
	}
		const _includesSYHjqX = () => { return _returnValueG4aW3y };
		const _returnValueSPTrr6l = -1.3975282568307374;
		const _joinBvK002z = () => { return _returnValueSPTrr6l };
		const _valuesBrgqJVm = {
			"includes": _includesSYHjqX,
		"join": _joinBvK002z
	}
		const _returnValueKM752lg = await _cmdX8ktrPB.choices(_valuesBrgqJVm)
		const _valuees4e15x = "lSqajfh18I6qeVw5etRe4oK1HerVUeqWYtfkewWZLBwLDEj6bEKrg1ifLiIDBru413lDHzch648JmvyJXaxuXAhA";
		const _returnValueQHh83m5 = 5.730182780940838;
		const _concatVGgg2z = () => { return _returnValueQHh83m5 };
		const _previousKtbk1VQ = {
			"concat": _concatVGgg2z
	}
		const _returnValueL8BoI6M = await _cmdX8ktrPB._concatValue(_valuees4e15x, _previousKtbk1VQ)
		const _returnValueNHSiRdg = await _HelpJgTCpGr.commandDescription(_cmdX8ktrPB)
		const _arrayValueNT0gjBj = "3VibJsRmcpEO";
		const _arrayValueXVuu6kj = "SDz6OPqcnUXf7bmVnraDCyxMMJXx6JmFY5H8nL";
		const _optiong0zkyvm = [_arrayValueNT0gjBj, _arrayValueXVuu6kj]
		const _returnValuemQnmZvW = await _HelpJgTCpGr.optionDescription(_optiong0zkyvm)
		const _arrayValue9vfg9C = -1.1584142496663823;
		const _arrayValueqXiqnZi = undefined;
		const _arrayValuesERIoFB = "Jj1vtabR4MT";
		const _cmdAw6F2r7 = [_arrayValue9vfg9C, _arrayValueqXiqnZi, _arrayValuesERIoFB]
		const _helperhm1SFkW = new Help()
		const _cmdeoMdjf2 = "mb1vugPAOrX2z6mg9s35yrXBQzwKpJWOnJB6zmrGwo4UL2LmIc8Hs54Hi4VxmTCXEVysoY92x474EKbQkI4M";
		const _returnValueuRa910 = await _helperhm1SFkW.commandUsage(_cmdeoMdjf2)
		const _cmdQsKsKgQ = 6.828801926146369;
		const _arrayValueo0xaOAi = null;
		const _arrayValuewy4AktB = undefined;
		const _returnValued9xwJY = [_arrayValueo0xaOAi, _arrayValuewy4AktB]
		const _helperBtCt5TF = () => { return _returnValued9xwJY };
		const _returnValueKSxUndX = await _helperhm1SFkW.padWidth(_cmdQsKsKgQ, _helperBtCt5TF)
		const _returnValueWBM4Iu = 6.8721471647197205;
		const _includeshUEluSu = () => { return _returnValueWBM4Iu };
		const _flagsulVc3mn = {
			"includes": _includeshUEluSu
	}
		const _descriptionLiAOoOd = 3.166411663627972;
		const _cmdjP6I2sG = new Option(_flagsulVc3mn, _descriptionLiAOoOd)
		const _valuewCyWbdO = 4.6667622717153066;
		const _returnValueHax9Zbd = 7.944400929909101;
		const _concatfifYLYU = () => { return _returnValueHax9Zbd };
		const _previousYqZnbcc = {
			"concat": _concatfifYLYU
	}
		const _returnValuekOmNSEg = await _cmdjP6I2sG._concatValue(_valuewCyWbdO, _previousYqZnbcc)
		const _valuePz1kIhb = undefined;
		const _descriptiondNhJ0jf = undefined;
		const _returnValueLFlOciE = await _cmdjP6I2sG.default(_valuePz1kIhb, _descriptiondNhJ0jf)
		const _returnValueKAFhlae = await _helperhm1SFkW.subcommandDescription(_cmdjP6I2sG)
		const _returnValuegzkkseo = await _HelpJgTCpGr.longestOptionTermLength(_cmdAw6F2r7, _helperhm1SFkW)
	});

	it('test for Help', async () => {
		const _HelpmoB88u = new Help()
		const _flagsZcr6ekU = "BamwfsZrSPaspta5SnX";
		const _descriptionYXRqAPk = null;
		const _argumenthHIgYJF = new Option(_flagsZcr6ekU, _descriptionYXRqAPk)
		const _fnbqVvKt = undefined;
		const _returnValuev0Gt2cY = await _argumenthHIgYJF.argParser(_fnbqVvKt)
		const _fnArFiUbK = undefined;
		const _returnValuesyj4x3r = await _argumenthHIgYJF.argParser(_fnArFiUbK)
		const _mandatorylKPHQgW = true;
		const _returnValueifciHTi = await _argumenthHIgYJF.makeOptionMandatory(_mandatorylKPHQgW)
		const _mandatorykPkC6cC = true;
		const _returnValueH8z1kNV = await _argumenthHIgYJF.makeOptionMandatory(_mandatorykPkC6cC)
		const _returnValuex1lvFlh = await _HelpmoB88u.argumentDescription(_argumenthHIgYJF)
		const _returnValueENFswbx = true;
		const _cmdRtkyLsL = () => { return _returnValueENFswbx };
		const _returnValueI7KGWR = await _HelpmoB88u.visibleArguments(_cmdRtkyLsL)
		const _cmdDm9x0yI = "535rkiCKEIU2xBaPxHwz6mxysuQpWYfk4U";
		const _returnValuecRhaT4l = await _HelpmoB88u.visibleCommands(_cmdDm9x0yI)
		const _nameYvm3Ged = undefined;
		const _cmdBvc7qAl = new Command(_nameYvm3Ged)
		const _errorvJsingv = true;
		const _commandZGhAqS1 = -6.389770522233027;
		const _contextOptionsjlc6IDm = {
			"error": _errorvJsingv,
		"command": _commandZGhAqS1
	}
		const _returnValueHkimdFL = await _cmdBvc7qAl.help(_contextOptionsjlc6IDm)
		const _displayHelpHF9eDvm = {
		
	}
		const _returnValuebISSZJx = await _cmdBvc7qAl.showHelpAfterError(_displayHelpHF9eDvm)
		const _returnValueQf03nBh = "vzjWxnHCR6A1ZeLaBL6AwChVF";
		const _thent22W9zc = () => { return _returnValueQf03nBh };
		const _promisenUdjUEM = {
			"then": _thent22W9zc
	}
		const _fnDM9kghH = 3.297488775900545;
		const _returnValuezMUyf6G = await _cmdBvc7qAl._chainOrCall(_promisenUdjUEM, _fnDM9kghH)
		const _returnValueLFPEyST = await _HelpmoB88u.commandDescription(_cmdBvc7qAl)
		const _returnValueDcyT2p = undefined;
		const _nameupGzXI9 = () => { return _returnValueDcyT2p };
		const _cmdR9zd8k9 = new Command(_nameupGzXI9)
		const _configZycq8PU = "KjkkhXIALxDlWKMyrBBwBkArXLAQ1Y6pUuARLods5DZTsAaVno";
		const _flagsTR2X3s = "21xPk0SsjHnyuHd2aPgqd35EhGN1g2epXNlaB1eOMuegdotyFJCjIobjlLN5dxAdlWg9BPyfICuYA";
		const _descriptionYxFrRGD = "nELUjD1GjAer4wjFlXzS1nhtPB498nnIDMbaoCGVM1ovcDODKZ";
		const _fnp58vX3O = {
		
	}
		const _defaultValuekF1zT9e = true;
		const _returnValueWPSWPVy = await _cmdR9zd8k9._optionEx(_configZycq8PU, _flagsTR2X3s, _descriptionYxFrRGD, _fnp58vX3O, _defaultValuekF1zT9e)
		const _configurationY8gAnyx = undefined;
		const _returnValueKoCTGH0 = await _cmdR9zd8k9.configureOutput(_configurationY8gAnyx)
		const _returnValuezoAkPNR = await _HelpmoB88u.commandUsage(_cmdR9zd8k9)
	});

	it('test for Help', async () => {
		const _Helpgwxkq6 = new Help()
		const _arrayValuefknNT4h = true;
		const _arrayValueTelcW1s = true;
		const _arrayValuelat7TlK = "YNsCd6a4pVjTLkEjCr1xI7SKte9l99ApI62bgxGnKDTjpqZvAXCCWMS3YMSPTcS";
		const _arrayValuewwipKKw = "665YtI71iHRbLVC7Ltqtc";
		const _arrayValueUSeRtPJ = false;
		const _arrayValuesqM9qgV = [_arrayValueUSeRtPJ]
		const _arrayValuekZ08YIy = null;
		const _arrayValueCJU0LKm = [_arrayValuelat7TlK, _arrayValuewwipKKw, _arrayValuesqM9qgV, _arrayValuekZ08YIy]
		const _nameLFs2xC = [_arrayValuefknNT4h, _arrayValueTelcW1s, _arrayValueCJU0LKm]
		const _descriptionStXvZPg = undefined;
		const _argumentxnPB80 = new Argument(_nameLFs2xC, _descriptionStXvZPg)
		const _fneGefuPB = undefined;
		const _returnValuecYdFvXG = await _argumentxnPB80.argParser(_fneGefuPB)
		const _returnValueIFwLxPy = await _argumentxnPB80.name()
		const _arrayValueaZjsAPH = {
		
	}
		const _valuesSmjFilB = [_arrayValueaZjsAPH]
		const _returnValueEmO1h5V = await _argumentxnPB80.choices(_valuesSmjFilB)
		const _returnValueB5HkLm6 = await _argumentxnPB80.argRequired()
		const _returnValuexWWVHYq = await _Helpgwxkq6.argumentDescription(_argumentxnPB80)
		const _cmdOF81f4O = undefined;
		const _helpers1KBAkG = new Help()
		const _cmdmot2uq5 = {
		
	}
		const _helperxD4yVnS = "pL38nrbFfrkgQYJxjo3qFyGdwAxYtsXTr1Ed8MEiCET4rYasafUDYvpxH";
		const _returnValueU4ZDAsu = await _helpers1KBAkG.formatHelp(_cmdmot2uq5, _helperxD4yVnS)
		const _flagsfJtlmEI = "iMBNQdaPyk7zDPSMkwhtDhuErGdCXrLWatkryqUTTshLd9rjDKGM1QR";
		const _optionxIthcOy = {
			"flags": _flagsfJtlmEI
	}
		const _returnValueHBTht6R = await _helpers1KBAkG.optionTerm(_optionxIthcOy)
		const _nameNnXnRI = undefined;
		const _cmdVPbmKpC = new Command(_nameNnXnRI)
		const _nameuRfUiZk = []
		const _returnValueGH7ORPp = await _cmdVPbmKpC._findCommand(_nameuRfUiZk)
		const _configurationV8gpsZ = false;
		const _returnValueJAM62sf = await _cmdVPbmKpC.configureHelp(_configurationV8gpsZ)
		const _fnAFbAGcZ = {
		
	}
		const _returnValueEhG9yRU = await _cmdVPbmKpC.exitOverride(_fnAFbAGcZ)
		const _positionHrTfuM = 3.87096596396956;
		const _returnValueyY6TJNh = false;
		const _texthnYnPbV = () => { return _returnValueyY6TJNh };
		const _returnValueccLSv6 = await _cmdVPbmKpC.addHelpText(_positionHrTfuM, _texthnYnPbV)
		const _positionLoXk6P = null;
		const _returnValueMCGguyC = null;
		const _textIF18VZF = () => { return _returnValueMCGguyC };
		const _returnValuejRfVm7s = await _cmdVPbmKpC.addHelpText(_positionLoXk6P, _textIF18VZF)
		const _returnValueDoQ7hu = await _helpers1KBAkG.subcommandDescription(_cmdVPbmKpC)
		const _cmdoumyz6Q = []
		const _helperHmnTWhQ = "Lo36Q6aQj6ikxXha4TeXtzYSfko97dMWH2gtUr2l4RVOWVlrs";
		const _returnValueCdMATmg = await _helpers1KBAkG.formatHelp(_cmdoumyz6Q, _helperHmnTWhQ)
		const _returnValueUI0Anin = null;
		const _cmdchPRfFp = () => { return _returnValueUI0Anin };
		const _returnValuev3J5R4a = await _helpers1KBAkG.visibleArguments(_cmdchPRfFp)
		const _returnValuef6RtKRZ = await _Helpgwxkq6.longestOptionTermLength(_cmdOF81f4O, _helpers1KBAkG)
	});

	it('test for Help', async () => {
		const _HelpZeolsuU = new Help()
		const _cmdPdrROem = null;
		const _helperX7DdOfN = new Help()
		const _nameLvMxBpz = undefined;
		const _cmdHLlgnYA = new Command(_nameLvMxBpz)
		const _mandatoryvc4V7t = true;
		const _configm9glgfW = {
			"mandatory": _mandatoryvc4V7t
	}
		const _flagsPTcNp3F = "jQ4tjNGjCpR5IVWsm75k";
		const _returnValueggq8TeL = true;
		const _descriptionUDA5Ysz = () => { return _returnValueggq8TeL };
		const _fni7ihhCj = {
		
	}
		const _defaultValuepZXB568 = null;
		const _returnValueSn2Rs0J = await _cmdHLlgnYA._optionEx(_configm9glgfW, _flagsPTcNp3F, _descriptionUDA5Ysz, _fni7ihhCj, _defaultValuepZXB568)
		const _returnValuep5wMjCc = await _helperX7DdOfN.visibleOptions(_cmdHLlgnYA)
		const _arrayValueaawVSFM = "sITtdf7vGmQyid2wluKP2TRlJAsOfENLpSKQYMw66eBeVbfrpori9PIDPhQuSN7hthHktmY8VSKpu1hR0";
		const _arrayValueazGgI1e = true;
		const _arrayValueS77PGpd = -7.150740955950022;
		const _arrayValueXwIm5wv = [_arrayValueS77PGpd]
		const _arrayValueRBEoc75 = []
		const _arrayValueX2fGxd2 = "IgwGaC1xe2PJXNiGDPoXZbMLJE";
		const _arrayValuebDpZ7Ug = "JMj0x9YiyiuFLj53FA58HhxDWi3MZGfkP3iAPBURgwHG8a9rmm6EPMAmF7Cg";
		const _arrayValuemIn4aYj = [_arrayValueX2fGxd2, _arrayValuebDpZ7Ug]
		const _arrayValue7liLeN = null;
		const _arrayValueOs3Bn6x = [_arrayValueXwIm5wv, _arrayValueRBEoc75, _arrayValuemIn4aYj, _arrayValue7liLeN]
		const _optiontjSRKh2 = [_arrayValueaawVSFM, _arrayValueazGgI1e, _arrayValueOs3Bn6x]
		const _returnValueXVMyQqv = await _helperX7DdOfN.optionDescription(_optiontjSRKh2)
		const _cmdssQ2gx0 = "94eEXFMBh3cH7OTlNe9f2l5vxitOfwe7aLYVMQgNxNm9mI7vXaeOzu58qtiP5iny0b6rkmDSOx";
		const _returnValueFcwV6cD = await _helperX7DdOfN.visibleOptions(_cmdssQ2gx0)
		const _cmdub8ffbq = undefined;
		const _helperlTpiN5s = "PQcZcL9zUvvPyutyiQwQi2Sf22Gd7Ep94cWwXBMkjyFtHsBDGMTiRbFFvuf8aODYJie1rNpbM6LoX";
		const _returnValuekpTjn8c = await _helperX7DdOfN.longestOptionTermLength(_cmdub8ffbq, _helperlTpiN5s)
		const _returnValueEGRKUEE = await _HelpZeolsuU.formatHelp(_cmdPdrROem, _helperX7DdOfN)
		const _cmdPZysYkm = "R7xlkcyOP72GGoamta4F8oelEetK4uZIZRsa3id9WBz4o6ZmfIAY4C3vgDFKgA9ql976xwTD3AL3YgLU442dEwUFAkFA4W";
		const _returnValueuEipfa = await _HelpZeolsuU.visibleCommands(_cmdPZysYkm)
	});

	it('test for Help', async () => {
		const _HelpTzgFXuG = new Help()
		const _returnValueTViqNsy = false;
		const _namegDOgNnH = () => { return _returnValueTViqNsy };
		const _descriptionc0BalTx = "L3H2bTO7DWftx9UPbv9I77bR5l3Fuu4ateBZv3rfz2O12xkGtea4CiCWXmkx8XSPk3Wu2TblAMtMj7wO";
		const _optionptkqTjx = new Argument(_namegDOgNnH, _descriptionc0BalTx)
		const _arrayValuenBKklOA = 4.204005466115346;
		const _arrayValueRjO0zzQ = null;
		const _returnValueIBPl0lI = "ovceCVDc0MaPFKitquzoBQN2eO8X7XaesFb0emNznQIHGZnAAwVMVit3ntxYdwc2uRVIFUrVKlCeEs4TqJFMGf79dai";
		const _arrayValueg5hNAGf = () => { return _returnValueIBPl0lI };
		const _valuerKWHtGh = [_arrayValuenBKklOA, _arrayValueRjO0zzQ, _arrayValueg5hNAGf]
		const _concatlK4j3I = {
		
	}
		const _previousqI6hLmL = {
			"concat": _concatlK4j3I
	}
		const _returnValueayqxlgW = await _optionptkqTjx._concatValue(_valuerKWHtGh, _previousqI6hLmL)
		const _arrayValueVRqoDJ = 7.060137844935678;
		const _returnValuemPh2G6C = true;
		const _arrayValueMLnc9LY = () => { return _returnValuemPh2G6C };
		const _arrayValuerdQ5MUB = false;
		const _arrayValue0jju7h = [_arrayValueVRqoDJ, _arrayValueMLnc9LY, _arrayValuerdQ5MUB]
		const _arrayValueDIptS0d = "8UovPte";
		const _valueTTDV5YH = [_arrayValue0jju7h, _arrayValueDIptS0d]
		const _descriptionKcsg0vo = {
		
	}
		const _returnValuen35afoc = await _optionptkqTjx.default(_valueTTDV5YH, _descriptionKcsg0vo)
		const _fnLG4IgWP = undefined;
		const _returnValueb5T5g50 = await _optionptkqTjx.argParser(_fnLG4IgWP)
		const _fnCUcIHXX = undefined;
		const _returnValueXjaXEjZ = await _optionptkqTjx.argParser(_fnCUcIHXX)
		const _returnValueEcUTnQW = await _HelpTzgFXuG.optionDescription(_optionptkqTjx)
		const _namejBuAuhj = true;
		const _descriptionHvTQVGy = "cH84vbvxOMdSOL8tedl7GE3TNALAljEiF9x08cBVS5mRVgoDHbjMxjihyXnjDI7aKJQdYH5C70NcU4DB2M5GCespphYLP";
		const _optionq0eIIas = new Argument(_namejBuAuhj, _descriptionHvTQVGy)
		const _valueTYvDQFe = "QpYfTFDGQbcxvNwmuyHkfFeWJ4XabQSyujL7whGMYlMIHPkTqcwDC6";
		const _returnValueE0aiDwC = true;
		const _concatpnsSvFH = () => { return _returnValueE0aiDwC };
		const _previousSJHCoEP = {
			"concat": _concatpnsSvFH
	}
		const _returnValueRHEwudb = await _optionq0eIIas._concatValue(_valueTYvDQFe, _previousSJHCoEP)
		const _fnRirTjXX = undefined;
		const _returnValueC7ZKOE8 = await _optionq0eIIas.argParser(_fnRirTjXX)
		const _valuexalVhYQ = true;
		const _returnValueH1bBPbh = true;
		const _concatSeThi7H = () => { return _returnValueH1bBPbh };
		const _previousonEeTGm = {
			"concat": _concatSeThi7H
	}
		const _returnValuePCejSAY = await _optionq0eIIas._concatValue(_valuexalVhYQ, _previousonEeTGm)
		const _returnValueDv31u1H = 7.749866811522271;
		const _includesrGyW8fx = () => { return _returnValueDv31u1H };
		const _joinuByqGDu = {
		
	}
		const _valuesDXxjY5u = {
			"includes": _includesrGyW8fx,
		"join": _joinuByqGDu
	}
		const _returnValuehub3yzN = await _optionq0eIIas.choices(_valuesDXxjY5u)
		const _fnE89VT5I = undefined;
		const _returnValuesj5cXMK = await _optionq0eIIas.argParser(_fnE89VT5I)
		const _returnValueXfXeds1 = await _HelpTzgFXuG.optionDescription(_optionq0eIIas)
	});

	it('test for Help', async () => {
		const _HelpElRJl9d = new Help()
		const _cmdiVAigXI = null;
		const _helperMecUev1 = new Help()
		const _strfDyfz64 = "QXoujxPw5rz7rMHPMm1JYxxYjXC5JQcFqvJatbj5Te7C3y";
		const _widthXAz89k6 = -8.11571165032756;
		const _indentMj3l1Sk = 5.954633356692998;
		const _minColumnWidthMguO1aW = -4.006278085872341;
		const _returnValueDKRDZF = await _helperMecUev1.wrap(_strfDyfz64, _widthXAz89k6, _indentMj3l1Sk, _minColumnWidthMguO1aW)
		const _nameAGfrSGP = []
		const _cmdMTIF6Te = new Command(_nameAGfrSGP)
		const _arrayValueZS7YQ0K = 0.23954394192317885;
		const _returnValueCU044E = {
		
	}
		const _arrayValueepTnZNX = () => { return _returnValueCU044E };
		const _argvz21lFh9 = [_arrayValueZS7YQ0K, _arrayValueepTnZNX]
		const _returnValueAuUgVqu = await _cmdMTIF6Te.parseOptions(_argvz21lFh9)
		const _returnValueYVQ1Nz1 = await _helperMecUev1.visibleCommands(_cmdMTIF6Te)
		const _returnValueC6Rsdqi = await _HelpElRJl9d.longestSubcommandTermLength(_cmdiVAigXI, _helperMecUev1)
		const _arrayValuez89Y2u6 = undefined;
		const _argumentPVd2HL9 = [_arrayValuez89Y2u6]
		const _returnValuegJBwbXF = await _HelpElRJl9d.argumentTerm(_argumentPVd2HL9)
		const _cmdATnmLAM = "MTNRpJEK7dViC5X0p02ThEU6rSGWGkhE27z8gekcFtg0cyfDeV0Jb6Re9yR94C1NfVsE6NYUAnLwbEtqMODMobpkRF6MEo";
		const _returnValueEghE4N7 = {
		
	}
		const _arrayValuebB0cvuY = () => { return _returnValueEghE4N7 };
		const _helperstbRJ7h = [_arrayValuebB0cvuY]
		const _returnValueJdqlCl1 = await _HelpElRJl9d.formatHelp(_cmdATnmLAM, _helperstbRJ7h)
	});

	it('test for Help', async () => {
		const _HelpPIwqcV6 = new Help()
		const __argsDescriptionRH77f2i = {
		
	}
		const __argshgme2W = {
		
	}
		const _cmdCvRuCKk = {
			"_argsDescription": __argsDescriptionRH77f2i,
		"_args": __argshgme2W
	}
		const _returnValueoPSbHT = await _HelpPIwqcV6.visibleArguments(_cmdCvRuCKk)
		const __nameNpjJEIt = {
		
	}
		const __aliasesILzQy3O = {
		
	}
		const _parentAo7DviD = {
		
	}
		const _returnValueqgTPZjc = true;
		const _usagewJA30sX = () => { return _returnValueqgTPZjc };
		const _cmdYc0q24b = {
			"_name": __nameNpjJEIt,
		"_aliases": __aliasesILzQy3O,
		"parent": _parentAo7DviD,
		"usage": _usagewJA30sX
	}
		const _returnValuei3HtBij = await _HelpPIwqcV6.commandUsage(_cmdYc0q24b)
		const __argsDescriptionhC5vI0S = {
		
	}
		const __argsPeJMnrz = {
		
	}
		const _cmdzJmlOzF = {
			"_argsDescription": __argsDescriptionhC5vI0S,
		"_args": __argsPeJMnrz
	}
		const _returnValuegsqx9QP = await _HelpPIwqcV6.visibleArguments(_cmdzJmlOzF)
	});
})