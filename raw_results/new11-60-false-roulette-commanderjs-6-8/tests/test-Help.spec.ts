export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpYlr7Cil = new Help()
		const _nameVRtArc = {
		
	}
		const _cmdP669Qjn = new Command(_nameVRtArc)
		const _nameeSFrFTq = {
		
	}
		const _returnValueFpnugY3 = await _cmdP669Qjn.missingArgument(_nameeSFrFTq)
		const _errorSeFuX3N = false;
		const _commandhjASPJ8 = null;
		const _contextOptionsDSJ3je = {
			"error": _errorSeFuX3N,
		"command": _commandhjASPJ8
	}
		const _returnValueh8xFE6i = await _cmdP669Qjn._getHelpContext(_contextOptionsDSJ3je)
		const _allowUnknownzzeAfVy = false;
		const _returnValuewuWeXT = await _cmdP669Qjn.allowUnknownOption(_allowUnknownzzeAfVy)
		const _aliasD0C4RSv = undefined;
		const _returnValuey2hmnhz = await _cmdP669Qjn.alias(_aliasD0C4RSv)
		const _nameAndArgsDEXgHCb = "6cCJJpHHaEiPRDzA7VV4rtrUn0OIuRI4xFHOpQraQ4G3H3QeFJkhfCXLr50Fll4RaenAGcGQJFvUmbJmByKk";
		const _actionOptsOrExecDesciMsFFyx = null;
		const _execOptsTSqauem = "P1rmh5ljxLuGYPSCds75DW8npf8JRPWRwCTQ0fyxzmWTsIJAj";
		const _returnValueSGfLgzY = await _cmdP669Qjn.command(_nameAndArgsDEXgHCb, _actionOptsOrExecDesciMsFFyx, _execOptsTSqauem)
		const _returnValuelYfVdQT = await _HelpYlr7Cil.commandUsage(_cmdP669Qjn)
		const _returnValuezeIJJiB = {
		
	}
		const _argumentZtyhWS = () => { return _returnValuezeIJJiB };
		const _returnValuef3HZtMW = await _HelpYlr7Cil.argumentDescription(_argumentZtyhWS)
	});

	it('test for Help', async () => {
		const _HelphWuAToo = new Help()
		const _named05RIs8 = "rzHs6uRhT4mYw2cWECNX6BBCJd4S9UVDos5RtbI8lJbo49LbiHbHGBlEf9N9gUBN";
		const _descriptionsB7Wk1v = null;
		const _cmddPl2tWr = new Argument(_named05RIs8, _descriptionsB7Wk1v)
		const _fnCgWjE44 = undefined;
		const _returnValueY2ABg7X = await _cmddPl2tWr.argParser(_fnCgWjE44)
		const _returnValueph7oZfX = false;
		const _valuesxBbZ6Nq = () => { return _returnValueph7oZfX };
		const _returnValueI7eNggE = await _cmddPl2tWr.choices(_valuesxBbZ6Nq)
		const _returnValueddnuO4E = true;
		const _valuessQFBffC = () => { return _returnValueddnuO4E };
		const _returnValuesJq6lv5 = await _cmddPl2tWr.choices(_valuessQFBffC)
		const _fna26XU7Z = {
		
	}
		const _returnValueMFMnQOQ = await _cmddPl2tWr.argParser(_fna26XU7Z)
		const _returnValuepwSyfxA = await _cmddPl2tWr.argOptional()
		const _returnValueS0p3467 = await _HelphWuAToo.subcommandDescription(_cmddPl2tWr)
		const _arrayValueODsuhKI = null;
		const _arrayValueLS0YPu6 = null;
		const _arrayValuelcahReu = null;
		const _arrayValueP7AQaay = false;
		const _arrayValueaVUOhZb = false;
		const _returnValueZNO3mrm = [_arrayValueP7AQaay, _arrayValueaVUOhZb]
		const _arrayValueWaZPMWI = () => { return _returnValueZNO3mrm };
		const _cmdpJEZBV = [_arrayValueODsuhKI, _arrayValueLS0YPu6, _arrayValuelcahReu, _arrayValueWaZPMWI]
		const _returnValuep4MKEx8 = await _HelphWuAToo.visibleCommands(_cmdpJEZBV)
		const _arrayValueEtRawSs = false;
		const _arrayValueVkgEpPv = null;
		const _cmdmBPivyw = [_arrayValueEtRawSs, _arrayValueVkgEpPv]
		const _returnValueBmuAf2U = "lC5dRfwccmxz0Bvroxpa3VghezRuf75kBf0KygEt1zIep5YMHMG45YBOwtlb";
		const _longestOptionTermLengthi8YAn7K = () => { return _returnValueBmuAf2U };
		const _returnValueRT52Y9O = "dRfnpOugVYn1wNPwidxVwxAwZWgwUaws13jQYbEtYehJt4lswRU9tkkdXPBP5NvQ";
		const _returnValueGkylYX0 = () => { return _returnValueRT52Y9O };
		const _longestSubcommandTermLengthY42tAFt = () => { return _returnValueGkylYX0 };
		const _returnValuepJnlpIK = false;
		const _returnValueCPxAtIL = () => { return _returnValuepJnlpIK };
		const _longestArgumentTermLengthtr73SPR = () => { return _returnValueCPxAtIL };
		const _helpere5YBQWk = {
			"longestOptionTermLength": _longestOptionTermLengthi8YAn7K,
		"longestSubcommandTermLength": _longestSubcommandTermLengthY42tAFt,
		"longestArgumentTermLength": _longestArgumentTermLengthtr73SPR
	}
		const _returnValueYtcox3Y = await _HelphWuAToo.padWidth(_cmdmBPivyw, _helpere5YBQWk)
		const _optionS8X1M9M = "96gwovysFq1ENy0IVdI9GkLNVRt";
		const _returnValueWL3gxM0 = await _HelphWuAToo.optionTerm(_optionS8X1M9M)
	});

	it('test for Help', async () => {
		const _HelpOwVIN21 = new Help()
		const _arrayValuevoZu0F3 = undefined;
		const _arrayValueAmK9jfl = -2.3015070452392052;
		const _arrayValueHJsggw = null;
		const _arrayValuedO7vcXW = "s25iuRLVF5B5Fr8TQWmLFBbwDg1s186GmQH4NllTE";
		const _arrayValuebqho2nJ = [_arrayValuedO7vcXW]
		const _cmdhEmGxxF = [_arrayValuevoZu0F3, _arrayValueAmK9jfl, _arrayValueHJsggw, _arrayValuebqho2nJ]
		const _returnValuef0T8tAg = await _HelpOwVIN21.visibleArguments(_cmdhEmGxxF)
		const __namevitzVuu = -1.125246929622234;
		const __aliasesVggQ8fB = {
		
	}
		const _parentiYc3nG = {
		
	}
		const _usageSdFGpju = {
		
	}
		const _cmdZ5grovV = {
			"_name": __namevitzVuu,
		"_aliases": __aliasesVggQ8fB,
		"parent": _parentiYc3nG,
		"usage": _usageSdFGpju
	}
		const _returnValueYT5SlUV = await _HelpOwVIN21.commandUsage(_cmdZ5grovV)
		const _argumentgpuM85e = "2UiFGvojhnsiUhVhKOn9Z1ST0eOhTt8BIlMjHMrYfSh6yKIU1q3XqV0bD3hjv8U7fn6ogcFDc";
		const _returnValueLO3z3Ur = await _HelpOwVIN21.argumentDescription(_argumentgpuM85e)
		const _arrayValuen9dGkll = []
		const _flagsvtz3jp = [_arrayValuen9dGkll]
		const _descriptionmaYhROU = "bsODQ2G8T9joDN2ADJJwj7knkZre";
		const _argumentBMOWljt = new Option(_flagsvtz3jp, _descriptionmaYhROU)
		const _hideDv2Tu9t = false;
		const _returnValueoZFp3SI = await _argumentBMOWljt.hideHelp(_hideDv2Tu9t)
		const _arrayValueV1OEvz = null;
		const _arrayValuekZc5Unh = {
		
	}
		const _valuey9xDHL4 = [_arrayValueV1OEvz, _arrayValuekZc5Unh]
		const _arrayValueDudMjoe = undefined;
		const _arrayValueWTPMzpp = 4.046032398571169;
		const _previousVv6J5WR = [_arrayValueDudMjoe, _arrayValueWTPMzpp]
		const _returnValueJkvn34 = await _argumentBMOWljt._concatValue(_valuey9xDHL4, _previousVv6J5WR)
		const _returnValuezWzKwZp = await _HelpOwVIN21.argumentDescription(_argumentBMOWljt)
	});

	it('test for Help', async () => {
		const _Helpb9rjVX = new Help()
		const _arrayValueNMygMM = false;
		const _argumentBRenn5y = [_arrayValueNMygMM]
		const _returnValueilu1SI2 = await _Helpb9rjVX.argumentDescription(_argumentBRenn5y)
		const _strZD2hnC4 = "O2Za361CldKAiQiTIvtjN9RORNYXyx4sbStCc9KZomzwTQLklkknAQw9OgTa73bSnqHrfK8WFvQ4P1QSjYEwKyJVUWu8Wl7";
		const _widthNnO9qt7 = 3.647613143922781;
		const _indentECPnzva = -4.57437057174658;
		const _minColumnWidthmKFf2RV = 2.48276830451751;
		const _returnValueFKbhiGt = await _Helpb9rjVX.wrap(_strZD2hnC4, _widthNnO9qt7, _indentECPnzva, _minColumnWidthmKFf2RV)
	});

	it('test for Help', async () => {
		const _HelpOowRakE = new Help()
		const _cmdeHessnB = undefined;
		const _helperzh2XWk9 = "KB7hHi05AJBMvjUJ3Bj";
		const _returnValueJq0Bhz6 = await _HelpOowRakE.longestSubcommandTermLength(_cmdeHessnB, _helperzh2XWk9)
		const _cmdb4pWuwj = "ffzmkoov2Fd5O1nHjOs8rDtnaMwwSsHUaSfd2hmMV3bNhSH2aeIrkN";
		const _returnValuePSSIdiC = -9.055530029009857;
		const _returnValueWFrELJZ = () => { return _returnValuePSSIdiC };
		const _longestOptionTermLengthHN0p2kr = () => { return _returnValueWFrELJZ };
		const _returnValuexEBPty = "rZWbnTp1guquQQODLCdaIWRQUdEpCuHFxkzOGkZqB7zjQ0a3uHmzdk5j2fTKFAX5nseCkLZbk1FqEqj9kVe05";
		const _longestSubcommandTermLengthcQDuiEh = () => { return _returnValuexEBPty };
		const _returnValueEBRLaY = undefined;
		const _longestArgumentTermLengthQ83fj9m = () => { return _returnValueEBRLaY };
		const _helper7l2j1w = {
			"longestOptionTermLength": _longestOptionTermLengthHN0p2kr,
		"longestSubcommandTermLength": _longestSubcommandTermLengthcQDuiEh,
		"longestArgumentTermLength": _longestArgumentTermLengthQ83fj9m
	}
		const _returnValueqQLNQwp = await _HelpOowRakE.padWidth(_cmdb4pWuwj, _helper7l2j1w)
		const _arrayValueQWbepzr = null;
		const _arrayValueOn6dvEI = null;
		const _cmddIQmYV = [_arrayValueQWbepzr, _arrayValueOn6dvEI]
		const _returnValueA9Dwi3b = await _HelpOowRakE.subcommandTerm(_cmddIQmYV)
		const _argumentZzy99VG = "VsHenv3";
		const _returnValueH8VW9lo = await _HelpOowRakE.argumentTerm(_argumentZzy99VG)
	});

	it('test for Help', async () => {
		const _HelpqhKdz9 = new Help()
		const _returnValueSduIgJk = true;
		const _optionDu7Chlk = () => { return _returnValueSduIgJk };
		const _returnValueYFLLejw = await _HelpqhKdz9.optionDescription(_optionDu7Chlk)
		const _returnValueQSlPQ39 = true;
		const _cmdlQGzXYV = () => { return _returnValueQSlPQ39 };
		const _returnValuewL6DDj = await _HelpqhKdz9.commandUsage(_cmdlQGzXYV)
		const _optionsFGX754B = {
		
	}
		const _arrayValueqFbRu2r = undefined;
		const _arrayValueUAXbv8y = [_arrayValueqFbRu2r]
		const __hasHelpOptionPJZvvnd = [_arrayValueUAXbv8y]
		const _arrayValueU05LtF = "ERz6zmVrnfQCcRKnWc47WY2gwwyvoa16k21YfvkvqVmk5IVyT47IHNv93utNkSMt4oeYEz0J65";
		const _arrayValueIyy0mBF = 5.8402065589871395;
		const _arrayValueWu9tjGQ = 4.506417051192688;
		const _returnValueDKw4Vd = [_arrayValueU05LtF, _arrayValueIyy0mBF, _arrayValueWu9tjGQ]
		const __helpShortFlagdsPY2k2 = () => { return _returnValueDKw4Vd };
		const _returnValueTrdTh2 = undefined;
		const __findOptionmdDV36M = () => { return _returnValueTrdTh2 };
		const __helpLongFlagnpC18e = undefined;
		const _returnValuetxs6dvc = false;
		const _createOptionUaVoxWW = () => { return _returnValuetxs6dvc };
		const __helpDescriptionsycyLlw = null;
		const __helpFlagsg6Tn1t6 = {
		
	}
		const _cmdTRlBQrg = {
			"options": _optionsFGX754B,
		"_hasHelpOption": __hasHelpOptionPJZvvnd,
		"_helpShortFlag": __helpShortFlagdsPY2k2,
		"_findOption": __findOptionmdDV36M,
		"_helpLongFlag": __helpLongFlagnpC18e,
		"createOption": _createOptionUaVoxWW,
		"_helpDescription": __helpDescriptionsycyLlw,
		"_helpFlags": __helpFlagsg6Tn1t6
	}
		const _returnValueXE0SfZd = await _HelpqhKdz9.visibleOptions(_cmdTRlBQrg)
	});

	it('test for Help', async () => {
		const _Helpbc6Guw6 = new Help()
		const _returnValueZyDa7aY = 9.88464281405157;
		const _cmdHWYzRU1 = () => { return _returnValueZyDa7aY };
		const _returnValueipfNUsa = await _Helpbc6Guw6.visibleOptions(_cmdHWYzRU1)
		const _cmdux1tzJp = {
		
	}
		const _returnValueYkxJuU = null;
		const _arrayValueR8JmJ3 = () => { return _returnValueYkxJuU };
		const _arrayValueoaHC32t = 0.6315975603737467;
		const _arrayValueH9EJseo = false;
		const _arrayValueBg8pfr = false;
		const _arrayValueUOQW23C = [_arrayValueBg8pfr]
		const _sortSubcommandslLR7qWC = [_arrayValueR8JmJ3, _arrayValueoaHC32t, _arrayValueH9EJseo, _arrayValueUOQW23C]
		const _returnValuewmbt04t = true;
		const _subcommandTermeSs9PvX = () => { return _returnValuewmbt04t };
		const _helperLz4fitn = {
			"sortSubcommands": _sortSubcommandslLR7qWC,
		"subcommandTerm": _subcommandTermeSs9PvX
	}
		const _returnValuesSlo0m = await _Helpbc6Guw6.longestSubcommandTermLength(_cmdux1tzJp, _helperLz4fitn)
		const _arrayValuetMklISc = null;
		const _arrayValueq5sv3K1 = undefined;
		const _optionIotPm6Z = [_arrayValuetMklISc, _arrayValueq5sv3K1]
		const _returnValuekoljYQX = await _Helpbc6Guw6.optionTerm(_optionIotPm6Z)
		const _arrayValueXvXNAHG = 6.611498378418414;
		const _arrayValueygew96f = "W0TgSWyMhRfgYSVATHzzV5L383NIIcGoxoHTrSm5ucPEQtnTj7wzeJd0wn7H3QZtK2Yrot";
		const _optionukzkKfz = [_arrayValueXvXNAHG, _arrayValueygew96f]
		const _returnValueIK0MSCf = await _Helpbc6Guw6.optionTerm(_optionukzkKfz)
		const _arrayValuez1oCwPc = 9.463488685634374;
		const _arrayValuejs7GopF = 6.36471171335273;
		const _cmdm1UCH7V = [_arrayValuez1oCwPc, _arrayValuejs7GopF]
		const _returnValueDlMCZgY = await _Helpbc6Guw6.subcommandTerm(_cmdm1UCH7V)
	});

	it('test for Help', async () => {
		const _HelpVxgpF1q = new Help()
		const _argChoicesVAlpVH7 = {
		
	}
		const _negatesxDijz2 = {
		
	}
		const _defaultValuebbdhvU = undefined;
		const _defaultValueDescriptionQFnZ0YG = null;
		const _envVarR02W3aj = undefined;
		const _descriptionBpN57mO = -3.9070057473499373;
		const _optionD8mX0zG = {
			"argChoices": _argChoicesVAlpVH7,
		"negate": _negatesxDijz2,
		"defaultValue": _defaultValuebbdhvU,
		"defaultValueDescription": _defaultValueDescriptionQFnZ0YG,
		"envVar": _envVarR02W3aj,
		"description": _descriptionBpN57mO
	}
		const _returnValuehJ0x6uG = await _HelpVxgpF1q.optionDescription(_optionD8mX0zG)
		const _arrayValueFdJsXL7 = null;
		const _arrayValuenOb13aK = null;
		const _returnValueTF1GD3y = [_arrayValueFdJsXL7, _arrayValuenOb13aK]
		const _argumentkKAtIaH = () => { return _returnValueTF1GD3y };
		const _returnValuelSpiT49 = await _HelpVxgpF1q.argumentTerm(_argumentkKAtIaH)
		const _argumentlNOc39u = "tOLTAl8gjb1EmzEGslD75xG74IAu2eRUSlsvu2FpmoJt8j";
		const _returnValuefHDGklN = await _HelpVxgpF1q.argumentDescription(_argumentlNOc39u)
		const _cmdtabrjyK = "0mHfz8rEFAppSYjNEDC9QCPbGOW19c";
		const _helperZAzwwft = "66vO1mc8Yti2eeGCxNMNCEHx8ergohwXV33mJT1CucHmpA6brJXb4jx6FfrlQEhn3s2nl";
		const _returnValueHjZIjYj = await _HelpVxgpF1q.longestSubcommandTermLength(_cmdtabrjyK, _helperZAzwwft)
	});

	it('test for Help', async () => {
		const _HelpQ0lPiYD = new Help()
		const __argsi0em4xE = {
		
	}
		const __nameCsf3ZNj = -0.35728617758989323;
		const __aliasesxxDy0K8 = {
		
	}
		const _optionspfXnme4 = {
		
	}
		const _cmdLJJru3J = {
			"_args": __argsi0em4xE,
		"_name": __nameCsf3ZNj,
		"_aliases": __aliasesxxDy0K8,
		"options": _optionspfXnme4
	}
		const _returnValuebNk8qI8 = await _HelpQ0lPiYD.subcommandTerm(_cmdLJJru3J)
		const _cmdRQ89m5 = false;
		const _returnValueoGlQo1o = await _HelpQ0lPiYD.commandUsage(_cmdRQ89m5)
		const _nameoUbboUk = undefined;
		const _cmdDkAVTc = new Command(_nameoUbboUk)
		const _returnValueBfbXUiJ = null;
		const _receivedArgsmI2lI7A = () => { return _returnValueBfbXUiJ };
		const _returnValueLFtySeJ = await _cmdDkAVTc._excessArguments(_receivedArgsmI2lI7A)
		const _exitCodeIxmMluR = undefined;
		const _codeoTPVNCO = {
		
	}
		const _messageycXoJM1 = "OEC1R3WUktTx3VwL3iewMLP1JfHr3zJvgOcUT52WHemqTWddOcpl";
		const _returnValuezomYuTd = await _cmdDkAVTc._exit(_exitCodeIxmMluR, _codeoTPVNCO, _messageycXoJM1)
		const _returnValueZKLRmzL = await _HelpQ0lPiYD.commandUsage(_cmdDkAVTc)
	});

	it('test for Help', async () => {
		const _HelpsuNn9PD = new Help()
		const _cmdloMXHu0 = "Orsd1AVqisQGlcmIBf28FK2qSQmBPqpwehB3SahqsrzlSCR7T";
		const _returnValueNkcvxGo = await _HelpsuNn9PD.visibleCommands(_cmdloMXHu0)
		const _arrayValueBKE9FQg = -4.064103170623376;
		const _arrayValue2BwRML = "v3Uo4GWn";
		const _arrayValuencKVDBi = 2.4247141353528097;
		const _arrayValueFmez1OS = [_arrayValuencKVDBi]
		const _exitCodeyqkoTlc = [_arrayValueBKE9FQg, _arrayValue2BwRML, _arrayValueFmez1OS]
		const _codeG2H1CaV = "UUOrwsdQHU1ijTVVoy9pkPMIcR";
		const _arrayValuevUvdGu3 = 7.7278691048933865;
		const _arrayValuePDI8742 = "JoBWWqsCfnAR88LP3t7Pi71SBBtjwCmkPtyD5bPySnDakymgzVuNdjAxX2BgH4dfSoNB0eb1";
		const _arrayValueWruppET = null;
		const _arrayValueNb4ABe6 = [_arrayValuePDI8742, _arrayValueWruppET]
		const _arrayValueZfBdCKi = false;
		const _messageMLCQeUr = [_arrayValuevUvdGu3, _arrayValueNb4ABe6, _arrayValueZfBdCKi]
		const _argumentlmyAbK1 = new CommanderError(_exitCodeyqkoTlc, _codeG2H1CaV, _messageMLCQeUr)
		const _returnValuelasKkt = await _HelpsuNn9PD.argumentTerm(_argumentlmyAbK1)
	});

	it('test for Help', async () => {
		const _HelpDbi6wI1 = new Help()
		const _returnValuejr1iFOD = "DDh3Foilzzfyp2SXmQEUHiOgXACFDd095luKcmcp";
		const _flagsWsnBvPP = () => { return _returnValuejr1iFOD };
		const _optionRfrz2nD = {
			"flags": _flagsWsnBvPP
	}
		const _returnValuefdjBO2 = await _HelpDbi6wI1.optionTerm(_optionRfrz2nD)
		const _cmdx01o3ZZ = 9.47700604868215;
		const _returnValueZqCuAZ = await _HelpDbi6wI1.visibleArguments(_cmdx01o3ZZ)
	});

	it('test for Help', async () => {
		const _HelpyME1GcL = new Help()
		const __argsDescriptionuZrGsxS = {
		
	}
		const __argsl6sfIRd = {
		
	}
		const _cmdmPYLIya = {
			"_argsDescription": __argsDescriptionuZrGsxS,
		"_args": __argsl6sfIRd
	}
		const _returnValueefbUDfT = await _HelpyME1GcL.visibleArguments(_cmdmPYLIya)
		const _arrayValuewlT516M = "eVtqqHoLqzjZXhfypht0Mh81nruJwt0SJ9";
		const _cmdmnpsAIS = [_arrayValuewlT516M]
		const _returnValuepSfYuJv = await _HelpyME1GcL.commandUsage(_cmdmnpsAIS)
		const _cmdLUv4uJL = undefined;
		const _returnValueOj0suiz = -2.855538566237339;
		const _helperHqrXIqW = () => { return _returnValueOj0suiz };
		const _returnValueqyQpnMh = await _HelpyME1GcL.longestOptionTermLength(_cmdLUv4uJL, _helperHqrXIqW)
	});

	it('test for Help', async () => {
		const _HelpUZhPVbb = new Help()
		const _arrayValuegvBuIz8 = {
		
	}
		const _arrayValuewj7uHe = null;
		const _returnValueTELm1Bq = [_arrayValuegvBuIz8, _arrayValuewj7uHe]
		const _returnValueJScMj0e = () => { return _returnValueTELm1Bq };
		const _matchde8b9Xi = () => { return _returnValueJScMj0e };
		const _arrayValueUXzYw4I = "RFjmzdC6SrAaTgvhIzmFA4iNUJiP";
		const _arrayValuelG4oyfu = "mCIoTOg4GHgjTIth3KOL9qmZPPA7roQgRzjyEJG8lRQYVx2QyClPvNbv4o7LnW";
		const _arrayValueR1tBf7z = -7.581874941049865;
		const _returnValueCgbfWxA = undefined;
		const _arrayValueeV05wfB = () => { return _returnValueCgbfWxA };
		const _arrayValuewArptuw = "5vJ9lxqWgAM12dvdPKuSPciuKinwvqHABIcOkYR755spqqMDbI7Qwh6ad4kP45xogdcnit3SC8IxAWQ2mn694cSbl4gB3ia3a";
		const _arrayValueuKpWLAH = {
		
	}
		const _arrayValuel45XTXm = [_arrayValuelG4oyfu, _arrayValueR1tBf7z, _arrayValueeV05wfB, _arrayValuewArptuw, _arrayValueuKpWLAH]
		const _arrayValueSdhUeLH = null;
		const _arrayValue62ERsp = [_arrayValueUXzYw4I, _arrayValuel45XTXm, _arrayValueSdhUeLH]
		const _arrayValueIA7WXnC = 1.9399551784392948;
		const _arrayValuezQ1urmp = -5.372674076923608;
		const _returnValueATi9Q1C = [_arrayValue62ERsp, _arrayValueIA7WXnC, _arrayValuezQ1urmp]
		const _substrwCDmps5 = () => { return _returnValueATi9Q1C };
		const _strCSaDTrq = {
			"match": _matchde8b9Xi,
		"substr": _substrwCDmps5
	}
		const _widthGsnFZtP = -9.357357009356473;
		const _indentqvvB5aM = 3.585771902766206;
		const _minColumnWidthzoxccHf = 5.36763056056753;
		const _returnValue2U8aVx = await _HelpUZhPVbb.wrap(_strCSaDTrq, _widthGsnFZtP, _indentqvvB5aM, _minColumnWidthzoxccHf)
		const _cmdxN1Cj8A = 0.43879718252960664;
		const _helpereRUsbY9 = "MPPJC0w1lE4GpI96ozKaUzyo6pGx1ISxvbr30KOYQ2CRggUdJYW8CMKKPS8gPtPNefRISgMEwFCZSqdg1";
		const _returnValueERwG6kT = await _HelpUZhPVbb.longestArgumentTermLength(_cmdxN1Cj8A, _helpereRUsbY9)
		const _returnValueqSKZ7lj = undefined;
		const _argumentgZ8wnDM = () => { return _returnValueqSKZ7lj };
		const _returnValuexZ6CXc = await _HelpUZhPVbb.argumentTerm(_argumentgZ8wnDM)
	});

	it('test for Help', async () => {
		const _HelpC2oEFOA = new Help()
		const _cmdJKRBUtZ = 8.414786914649248;
		const _helperdo1mwQ1 = 3.696799667141267;
		const _returnValueoArXQY = await _HelpC2oEFOA.padWidth(_cmdJKRBUtZ, _helperdo1mwQ1)
		const _cmdpZx1IYj = false;
		const _arrayValuey1uSkv8 = []
		const _arrayValuejP9LEqp = undefined;
		const _arrayValue4Oii8P = undefined;
		const _returnValueytY10xz = [_arrayValuey1uSkv8, _arrayValuejP9LEqp, _arrayValue4Oii8P]
		const _visibleOptionsfirCfB = () => { return _returnValueytY10xz };
		const _optionTermIaAiuRF = undefined;
		const _helperRdpPdPo = {
			"visibleOptions": _visibleOptionsfirCfB,
		"optionTerm": _optionTermIaAiuRF
	}
		const _returnValueC5qwUag = await _HelpC2oEFOA.longestOptionTermLength(_cmdpZx1IYj, _helperRdpPdPo)
	});

	it('test for Help', async () => {
		const _HelpW5E5oaA = new Help()
		const _cmdf4KAsT = "lrRIXdaE95o95UlMOUWqLZDBVEySYrNFFs9mqj4btvHJ4oBPba";
		const _returnValuergPkdOm = await _HelpW5E5oaA.commandDescription(_cmdf4KAsT)
		const _cmdK3dGQY = "6UpKSrUMUGSL2Wrebh";
		const _helperLE6JYHd = "EQfAg8Msbwm4lyvzTu";
		const _returnValueqEqfH94 = await _HelpW5E5oaA.longestOptionTermLength(_cmdK3dGQY, _helperLE6JYHd)
		const _arrayValueXeZ8nVR = true;
		const _arrayValueoK9E2PX = null;
		const _cmdQ1iFxR4 = [_arrayValueXeZ8nVR, _arrayValueoK9E2PX]
		const _helperKCsch16 = new Help()
		const _arrayValuesudq0iK = -8.262217930427857;
		const _arrayValuel9tFx3T = [_arrayValuesudq0iK]
		const _arrayValueSoUUqI3 = -2.0917256985574992;
		const _arrayValueTrI52V = null;
		const _arrayValuefgIi361 = [_arrayValueTrI52V]
		const _arrayValueNdaLa6k = 9.221831167849597;
		const _arrayValueOX4QlNt = "SmjXepVqcnX7TY9wUclKd8zhVgDBdYpeTmJ6q";
		const _arrayValueyomhHzc = [_arrayValueNdaLa6k, _arrayValueOX4QlNt]
		const _arrayValueeaVM0e = false;
		const _arrayValueXcUx3Tg = [_arrayValuefgIi361, _arrayValueyomhHzc, _arrayValueeaVM0e]
		const _cmdN8vTcyh = [_arrayValuel9tFx3T, _arrayValueSoUUqI3, _arrayValueXcUx3Tg]
		const _sortSubcommandsJG8fh2F = -8.675331869056285;
		const _returnValuenEPUZye = undefined;
		const _subcommandTermn85aAvr = () => { return _returnValuenEPUZye };
		const _helperUn8tiqy = {
			"sortSubcommands": _sortSubcommandsJG8fh2F,
		"subcommandTerm": _subcommandTermn85aAvr
	}
		const _returnValuepk5TGS = await _helperKCsch16.longestSubcommandTermLength(_cmdN8vTcyh, _helperUn8tiqy)
		const _cmdq0MPdkd = null;
		const _sortSubcommandsS0br988 = undefined;
		const _returnValueHGE3D8 = undefined;
		const _subcommandTermZBnBNmw = () => { return _returnValueHGE3D8 };
		const _helper2S2jDc = {
			"sortSubcommands": _sortSubcommandsS0br988,
		"subcommandTerm": _subcommandTermZBnBNmw
	}
		const _returnValuezunBIFC = await _helperKCsch16.longestSubcommandTermLength(_cmdq0MPdkd, _helper2S2jDc)
		const _returnValueWKZWinz = await _HelpW5E5oaA.longestSubcommandTermLength(_cmdQ1iFxR4, _helperKCsch16)
	});

	it('test for Help', async () => {
		const _HelpIUdOqkw = new Help()
		const _cmdtrCc2rk = -8.052082862738029;
		const _arrayValueVqM3EyJ = "HWTncYTWu4dDveaHDrY6uoVwvghuWbaNzC63QehzvBgW6u7KlUJd6h7qwJg7L5ae2BbBcCu0ygufWDwefexrfXfP";
		const _arrayValuekzNnIvY = undefined;
		const _arrayValueltyE1Qm = "nCwCqtQEx12IihObpJLy";
		const _returnValuel7QpvV4 = [_arrayValuekzNnIvY, _arrayValueltyE1Qm]
		const _arrayValuea7xwLOk = () => { return _returnValuel7QpvV4 };
		const _returnValueOliob4 = [_arrayValueVqM3EyJ, _arrayValuea7xwLOk]
		const _helperyWI9vct = () => { return _returnValueOliob4 };
		const _returnValuefb6r01q = await _HelpIUdOqkw.longestOptionTermLength(_cmdtrCc2rk, _helperyWI9vct)
	});

	it('test for Help', async () => {
		const _HelpSKpqnx = new Help()
		const _cmduEwFKU = "npJmWpQf14nrpr4tQdxatVZDSKqhWnXJxAsKhloXatpmoMTp8UeR";
		const _sortSubcommandsggqvBwD = true;
		const _returnValueCsWHhr5 = false;
		const _returnValuefcjuEQo = () => { return _returnValueCsWHhr5 };
		const _subcommandTermTHKApFU = () => { return _returnValuefcjuEQo };
		const _helperYp0fQNM = {
			"sortSubcommands": _sortSubcommandsggqvBwD,
		"subcommandTerm": _subcommandTermTHKApFU
	}
		const _returnValueeLUOFYp = await _HelpSKpqnx.formatHelp(_cmduEwFKU, _helperYp0fQNM)
		const _returnValuecQTkRWy = "Idn6YO8gMdlPq";
		const _cmdBpIEMtE = () => { return _returnValuecQTkRWy };
		const _returnValue5m7jhT = await _HelpSKpqnx.subcommandDescription(_cmdBpIEMtE)
		const _argumentydOtazl = "djtcQBRuNwAoFtxJaDyrREM8A3zqqiNHjL6QHMUGd";
		const _returnValueNKRepGO = await _HelpSKpqnx.argumentDescription(_argumentydOtazl)
		const _cmdAgXdO9D = {
		
	}
		const _helperYCzNLc = "PNQJ2sN1mqreUSpjt6Ny7IRVEEVu4AfJTm54QLHBsserKkGUrI9hPrewUFfXDF3xeXEpnQgkX8YzEBRUz";
		const _returnValueriRTxW5 = await _HelpSKpqnx.longestOptionTermLength(_cmdAgXdO9D, _helperYCzNLc)
	});

	it('test for Help', async () => {
		const _HelpNH0ScER = new Help()
		const _argChoicesG6bbVKb = {
		
	}
		const _defaultValuehHVvriy = "hCsLh3Rnnu2ivilxsR6YBfKIC65CcJmeKuk3ahi5aLieztZcAQ1pbGsI2oSenGOjsyC3lIGOlRRwgn5tGtIdkkp3raLDYYYTl";
		const _arrayValueAtUuVhq = false;
		const _arrayValuef7EAzi = false;
		const _arrayValue4XEWFJ = "cruDZeASPP2GsRXb6rPH6ycO4gAGo5qxXf12Fox";
		const _arrayValuektYdFwd = [_arrayValue4XEWFJ]
		const _arrayValueBcVnbO = null;
		const _defaultValueDescriptionDxchCJl = [_arrayValueAtUuVhq, _arrayValuef7EAzi, _arrayValuektYdFwd, _arrayValueBcVnbO]
		const _descriptionUu5eLAG = null;
		const _argumentuIAlkhZ = {
			"argChoices": _argChoicesG6bbVKb,
		"defaultValue": _defaultValuehHVvriy,
		"defaultValueDescription": _defaultValueDescriptionDxchCJl,
		"description": _descriptionUu5eLAG
	}
		const _returnValueSLSf44E = await _HelpNH0ScER.argumentDescription(_argumentuIAlkhZ)
		const _cmdOPVCrqa = 5.029286025082397;
		const _helperOUjOyDG = "bFzqgPkbsYOOITomW2Lh";
		const _returnValuegMnF9GV = await _HelpNH0ScER.longestArgumentTermLength(_cmdOPVCrqa, _helperOUjOyDG)
	});

	it('test for Help', async () => {
		const _HelpDmKLskG = new Help()
		const __nameocSTqKG = -9.546288888135862;
		const __aliasesnjmvKCI = {
		
	}
		const _parentvBJHmlI = {
		
	}
		const _returnValuec4b7Du7 = null;
		const _usageILrixdS = () => { return _returnValuec4b7Du7 };
		const _cmdrSMwCY = {
			"_name": __nameocSTqKG,
		"_aliases": __aliasesnjmvKCI,
		"parent": _parentvBJHmlI,
		"usage": _usageILrixdS
	}
		const _returnValueOmh0VwN = await _HelpDmKLskG.commandUsage(_cmdrSMwCY)
		const _cmddP10CRs = 9.734148647073347;
		const _returnValuel9npk0 = undefined;
		const _visibleArgumentsBsJcSu5 = () => { return _returnValuel9npk0 };
		const _returnValuew5jVJgh = true;
		const _argumentTermRLzm7G = () => { return _returnValuew5jVJgh };
		const _helpermTCoqJZ = {
			"visibleArguments": _visibleArgumentsBsJcSu5,
		"argumentTerm": _argumentTermRLzm7G
	}
		const _returnValueRoBG8pe = await _HelpDmKLskG.longestArgumentTermLength(_cmddP10CRs, _helpermTCoqJZ)
		const __namexUpIbbX = {
		
	}
		const __aliaseszHjBibe = {
		
	}
		const _parentBSl7Odq = {
		
	}
		const _usageA0FgBBp = "ltCodrwY17rxcnifPidnwRMu4XohXyFNegGgLX9OrzmyCE7zgSVtvmmqUyX8PK9k6QQQRUtICKlCDhrT8vp2J8bXNkA";
		const _cmdLj1LG3X = {
			"_name": __namexUpIbbX,
		"_aliases": __aliaseszHjBibe,
		"parent": _parentBSl7Odq,
		"usage": _usageA0FgBBp
	}
		const _returnValueJxRQZEc = await _HelpDmKLskG.commandUsage(_cmdLj1LG3X)
		const _returnValueTkrf7rf = null;
		const _cmdKOQBepE = () => { return _returnValueTkrf7rf };
		const _returnValueSKJ7CY = undefined;
		const _helperD3wGvPH = () => { return _returnValueSKJ7CY };
		const _returnValuejaKjQcM = await _HelpDmKLskG.longestArgumentTermLength(_cmdKOQBepE, _helperD3wGvPH)
		const _optionsT63v9Ck = {
		
	}
		const __hasHelpOptionc055guC = true;
		const __helpShortFlagpVoTE1y = null;
		const _returnValuecShg3e = undefined;
		const __findOptionTrOfpwa = () => { return _returnValuecShg3e };
		const _arrayValuemCjirlE = undefined;
		const _arrayValuecJO5oq = -6.961105449214163;
		const _arrayValuelHIphZ = undefined;
		const __helpLongFlagt0UnfPu = [_arrayValuemCjirlE, _arrayValuecJO5oq, _arrayValuelHIphZ]
		const _returnValueDY53xI = 2.804728999001046;
		const _createOptionzXviDC = () => { return _returnValueDY53xI };
		const __helpDescriptionOV4jT8 = "N9QIhkcJlQ93UEN6oPadcO2b7LwvkXjP6xqiOpA";
		const _arrayValueCzDkDti = 2.235051200795535;
		const _returnValueEGCG4tp = null;
		const _returnValuew6VMj5E = () => { return _returnValueEGCG4tp };
		const _arrayValueHfqx7N4 = () => { return _returnValuew6VMj5E };
		const _arrayValuexsn7Rmo = undefined;
		const _arrayValueORAJ001 = -8.50738142114516;
		const _arrayValueM8wBD0 = [_arrayValueHfqx7N4, _arrayValuexsn7Rmo, _arrayValueORAJ001]
		const __helpFlagsWA21flr = [_arrayValueCzDkDti, _arrayValueM8wBD0]
		const _cmdQyA6bQM = {
			"options": _optionsT63v9Ck,
		"_hasHelpOption": __hasHelpOptionc055guC,
		"_helpShortFlag": __helpShortFlagpVoTE1y,
		"_findOption": __findOptionTrOfpwa,
		"_helpLongFlag": __helpLongFlagt0UnfPu,
		"createOption": _createOptionzXviDC,
		"_helpDescription": __helpDescriptionOV4jT8,
		"_helpFlags": __helpFlagsWA21flr
	}
		const _returnValuea3EeDqo = await _HelpDmKLskG.visibleOptions(_cmdQyA6bQM)
	});

	it('test for Help', async () => {
		const _HelpMeGUoeK = new Help()
		const _strnJsHSEs = "tkbWUpdu9GzWHtfSxZqzo4JM7IdxGKUD4N892Ry0zKND4rbRdYwadA8FG8";
		const _widthRCJeUf3 = null;
		const _indentnGK13p = 0.07262198273608256;
		const _minColumnWidthCGBcce = 3.401106867667256;
		const _returnValueQsvMoYn = await _HelpMeGUoeK.wrap(_strnJsHSEs, _widthRCJeUf3, _indentnGK13p, _minColumnWidthCGBcce)
		const _optionserkdJGb = {
		
	}
		const __hasHelpOptionNXgVe2a = undefined;
		const __helpShortFlagBFbS4OF = true;
		const _returnValuexdEN7DN = null;
		const _returnValueJE1PLGa = () => { return _returnValuexdEN7DN };
		const __findOptionAKR6wns = () => { return _returnValueJE1PLGa };
		const __helpLongFlagb9ju0Qe = {
		
	}
		const _returnValuezEB4nxs = -6.6229857718555385;
		const _createOptionCIZUVuo = () => { return _returnValuezEB4nxs };
		const __helpDescriptionF7xregW = null;
		const __helpFlagsEsUZOuF = -2.89435453593911;
		const _cmd4NekCr = {
			"options": _optionserkdJGb,
		"_hasHelpOption": __hasHelpOptionNXgVe2a,
		"_helpShortFlag": __helpShortFlagBFbS4OF,
		"_findOption": __findOptionAKR6wns,
		"_helpLongFlag": __helpLongFlagb9ju0Qe,
		"createOption": _createOptionCIZUVuo,
		"_helpDescription": __helpDescriptionF7xregW,
		"_helpFlags": __helpFlagsEsUZOuF
	}
		const _returnValuev11dWaY = await _HelpMeGUoeK.visibleOptions(_cmd4NekCr)
		const _returnValueKLVr34F = null;
		const _cmdk82qIT = () => { return _returnValueKLVr34F };
		const _returnValueSnFbcFY = await _HelpMeGUoeK.subcommandDescription(_cmdk82qIT)
	});

	it('test for Help', async () => {
		const _HelpnIMj5r8 = new Help()
		const _argChoicesDWuPqaf = {
		
	}
		const _negateFO5Zm1D = undefined;
		const _defaultValueU7RaZx2 = undefined;
		const _defaultValueDescriptioneKqPhW6 = undefined;
		const _envVarC4Vvhv = undefined;
		const _descriptionlkWDOUf = undefined;
		const _optionmoxj3Xj = {
			"argChoices": _argChoicesDWuPqaf,
		"negate": _negateFO5Zm1D,
		"defaultValue": _defaultValueU7RaZx2,
		"defaultValueDescription": _defaultValueDescriptioneKqPhW6,
		"envVar": _envVarC4Vvhv,
		"description": _descriptionlkWDOUf
	}
		const _returnValueMMLCor = await _HelpnIMj5r8.optionDescription(_optionmoxj3Xj)
		const _cmdPsP4oXL = 2.0122576058941295;
		const _sortSubcommandsrOzV5V = "TxYqY7s";
		const _returnValueAHPi4qL = -4.077108207563547;
		const _subcommandTermC2t9uUH = () => { return _returnValueAHPi4qL };
		const _helperBuamUvv = {
			"sortSubcommands": _sortSubcommandsrOzV5V,
		"subcommandTerm": _subcommandTermC2t9uUH
	}
		const _returnValueDqGxLdh = await _HelpnIMj5r8.longestSubcommandTermLength(_cmdPsP4oXL, _helperBuamUvv)
		const _cmdd0h07x = {
		
	}
		const _sortSubcommandsAXqR8fP = {
		
	}
		const _returnValuehgz1pby = null;
		const _subcommandTermPgHIR7 = () => { return _returnValuehgz1pby };
		const _helperwLgeexw = {
			"sortSubcommands": _sortSubcommandsAXqR8fP,
		"subcommandTerm": _subcommandTermPgHIR7
	}
		const _returnValueLB4oOKP = await _HelpnIMj5r8.formatHelp(_cmdd0h07x, _helperwLgeexw)
		const _returnValuesPdc1zy = "JWLGOfgt187drhJClkyCMBFb9Dm9u63M0cYiUNQ265dEo7cqGydlVwyOOM8CqapOr3vsfsOhFI9";
		const _arrayValueWu8ET77 = () => { return _returnValuesPdc1zy };
		const _cmdieoNn8z = [_arrayValueWu8ET77]
		const _arrayValueb2THoBy = undefined;
		const _arrayValueVt8yth4 = [_arrayValueb2THoBy]
		const _arrayValueRXKHMLU = null;
		const _arrayValuetCiS9cv = true;
		const _helperBWgn8v2 = [_arrayValueVt8yth4, _arrayValueRXKHMLU, _arrayValuetCiS9cv]
		const _returnValueletYVPt = await _HelpnIMj5r8.formatHelp(_cmdieoNn8z, _helperBWgn8v2)
	});

	it('test for Help', async () => {
		const _HelpJmTXLRL = new Help()
		const _flagsSuCGTh0 = "0BKHCfRiOP6Y4MWxH8SAXI3mx7SEgKW3FZIjallQCA";
		const _descriptionSFrzods = undefined;
		const _argumentELVlszh = new Option(_flagsSuCGTh0, _descriptionSFrzods)
		const _fnVGAy2uK = {
		
	}
		const _returnValueUaZSscp = await _argumentELVlszh.argParser(_fnVGAy2uK)
		const _valueV7URtRh = undefined;
		const _previousDetiXY8 = "S";
		const _returnValueqVqbIzy = await _argumentELVlszh._concatValue(_valueV7URtRh, _previousDetiXY8)
		const _returnValueDT8BnaJ = -6.348817585371596;
		const _includesy7TEjDF = () => { return _returnValueDT8BnaJ };
		const _joinu8B8IYy = "5vDzFMLC4IyRsHJLLRZpHlVYNedMBaGa0bALLyyyzSRDwjm6";
		const _valuesiYcZs1h = {
			"includes": _includesy7TEjDF,
		"join": _joinu8B8IYy
	}
		const _returnValueU5IagD = await _argumentELVlszh.choices(_valuesiYcZs1h)
		const _mandatoryuLF9rKK = true;
		const _returnValueGhPdWyw = await _argumentELVlszh.makeOptionMandatory(_mandatoryuLF9rKK)
		const _returnValueOQYU021 = await _HelpJmTXLRL.argumentDescription(_argumentELVlszh)
		const _argChoicesgJSRQp5 = {
		
	}
		const _arrayValuepnZh2ey = -4.810379763342194;
		const _negateZte5vbc = [_arrayValuepnZh2ey]
		const _defaultValueAnd2UC5 = undefined;
		const _defaultValueDescription3tAmqC = false;
		const _envVarvvXAabs = undefined;
		const _descriptionviELpxk = null;
		const _optionHWAeCti = {
			"argChoices": _argChoicesgJSRQp5,
		"negate": _negateZte5vbc,
		"defaultValue": _defaultValueAnd2UC5,
		"defaultValueDescription": _defaultValueDescription3tAmqC,
		"envVar": _envVarvvXAabs,
		"description": _descriptionviELpxk
	}
		const _returnValuev3HBfzz = await _HelpJmTXLRL.optionDescription(_optionHWAeCti)
		const _cmdM6ruwPn = true;
		const _returnValuedqZ26Fd = await _HelpJmTXLRL.commandDescription(_cmdM6ruwPn)
		const _returnValueys2VbZo = null;
		const _nameb822Gdd = () => { return _returnValueys2VbZo };
		const _argumentFfpVy7j = {
			"name": _nameb822Gdd
	}
		const _returnValueYDQqwh = await _HelpJmTXLRL.argumentTerm(_argumentFfpVy7j)
	});

	it('test for Help', async () => {
		const _Helph32jMso = new Help()
		const _arrayValueXxDlmz = "cEvLyBmcEpMyTWqVAnTocZYUn6778ItndjYBcLOz";
		const _arrayValuezFMToA = {
		
	}
		const _arrayValuexxVMPQr = null;
		const _arrayValueDjo2WEi = [_arrayValuezFMToA, _arrayValuexxVMPQr]
		const _arrayValuebz6Ubwx = "2DiL74xSgjOMlYkmfdNbxfak8YAkhP";
		const _arrayValuecQljNwd = [_arrayValueDjo2WEi, _arrayValuebz6Ubwx]
		const _nameRIR0z5Z = [_arrayValueXxDlmz, _arrayValuecQljNwd]
		const _cmdTtrJbuP = new Command(_nameRIR0z5Z)
		const _keyWOyI375 = true;
		const _valueyUla35u = null;
		const _returnValueger1upm = await _cmdTtrJbuP.setOptionValue(_keyWOyI375, _valueyUla35u)
		const _displaySuggestionmx1imfs = "wnUND5BkJfaXKq0f5IgXUj8wNIfm0xNzv8QAm1oVmQrR8EzheQg0Wh0V";
		const _returnValueTZxIfKr = await _cmdTtrJbuP.showSuggestionAfterError(_displaySuggestionmx1imfs)
		const _errorvAIa0Uo = {
		
	}
		const _commandsvOndK = 2.4795480735502977;
		const _contextOptionsQ0y3IrO = {
			"error": _errorvAIa0Uo,
		"command": _commandsvOndK
	}
		const _returnValueWB0a1r = await _cmdTtrJbuP.helpInformation(_contextOptionsQ0y3IrO)
		const _aliasEkslwi = {
		
	}
		const _returnValuexDbQma7 = await _cmdTtrJbuP.alias(_aliasEkslwi)
		const _returnValueTBeGUJ = await _Helph32jMso.subcommandTerm(_cmdTtrJbuP)
	});

	it('test for Help', async () => {
		const _Helpiuss94U = new Help()
		const _optionO6LiTJ = "l8wO3sQj9LeucBzvHRYCAdmD33ihhdic10ntz5n24c36KJrN6Xc8sOzN3xt7Sn5RvU3Kv8z9xqQT86Kbvjc4C";
		const _returnValueeCCQopE = await _Helpiuss94U.optionDescription(_optionO6LiTJ)
		const _returnValuencS2kEN = 7.503071478069707;
		const _sliceQtTxn8W = () => { return _returnValuencS2kEN };
		const _nameuk1xsY = {
			"slice": _sliceQtTxn8W
	}
		const _descriptionT6QAJhA = undefined;
		const _argumentrDyHfK = new Argument(_nameuk1xsY, _descriptionT6QAJhA)
		const _returnValuep0z2dR3 = null;
		const _returnValueIU3ctZk = () => { return _returnValuep0z2dR3 };
		const _valueLJGD4wE = () => { return _returnValueIU3ctZk };
		const _descriptionm3Mi86c = undefined;
		const _returnValuemtgT2TS = await _argumentrDyHfK.default(_valueLJGD4wE, _descriptionm3Mi86c)
		const _valuesjYJAo3k = null;
		const _returnValueCc8pXuv = await _argumentrDyHfK.choices(_valuesjYJAo3k)
		const _valueII03yCi = "8XRFQX6IBm3HdvXCumjXH95a55k3xb7dqKwJS7gjIw";
		const _descriptionc92TO3d = undefined;
		const _returnValue9LBBa5 = await _argumentrDyHfK.default(_valueII03yCi, _descriptionc92TO3d)
		const _returnValueev84Cz = await _Helpiuss94U.argumentDescription(_argumentrDyHfK)
		const _cmdwwTezZs = undefined;
		const _helpersTNuJzt = "TCuUrKjda";
		const _returnValueFvuDIxO = await _Helpiuss94U.longestOptionTermLength(_cmdwwTezZs, _helpersTNuJzt)
		const _flagsRUwoxyS = []
		const _descriptionQiFx0UU = "GA4dzzDS9GrxnTnRSbRmFk3PPgQw9gAZZ2Et45tYQT2UbsM3Kg6dPbESLIr9JO";
		const _cmdk0A9LLp = new Option(_flagsRUwoxyS, _descriptionQiFx0UU)
		const _hideQz4m2cx = false;
		const _returnValues9eu7Gk = await _cmdk0A9LLp.hideHelp(_hideQz4m2cx)
		const _returnValueqLQl3xM = await _cmdk0A9LLp.attributeName()
		const _mandatoryXLp33M9 = false;
		const _returnValuel5jiWqL = await _cmdk0A9LLp.makeOptionMandatory(_mandatoryXLp33M9)
		const _mandatoryHK2pKSX = true;
		const _returnValueveVuTHd = await _cmdk0A9LLp.makeOptionMandatory(_mandatoryHK2pKSX)
		const _returnValueOjSnxxC = await _cmdk0A9LLp.name()
		const _returnValueplcuhI6 = await _Helpiuss94U.subcommandDescription(_cmdk0A9LLp)
	});

	it('test for Help', async () => {
		const _Helppl8adA4 = new Help()
		const _returnValueTXSawR = false;
		const _nameq5Go7ei = () => { return _returnValueTXSawR };
		const _descriptiondwfdl2f = 8.307553532831761;
		const _argumentHaZwUm = new Argument(_nameq5Go7ei, _descriptiondwfdl2f)
		const _valuesFSkik3g = "tXQ";
		const _returnValueQiHWg9Z = await _argumentHaZwUm.choices(_valuesFSkik3g)
		const _returnValuesrCtG0v = await _argumentHaZwUm.argRequired()
		const _valuesvVHUiA2 = []
		const _returnValueevUS3h = await _argumentHaZwUm.choices(_valuesvVHUiA2)
		const _returnValueqtEklKo = await _Helppl8adA4.argumentDescription(_argumentHaZwUm)
		const _arrayValuehQLbwm1 = {
		
	}
		const _cmdm2GgQgq = [_arrayValuehQLbwm1]
		const _returnValueUvLnYCu = await _Helppl8adA4.commandUsage(_cmdm2GgQgq)
		const _cmdLxh3dko = "F0vZsMvUl3BtsEeMqRPx8zOwolpXObFBiC92m5P3n2LTTWxnVRIqBbeluYBrAhvySru4YbG4";
		const _returnValuepYuHGKP = await _Helppl8adA4.visibleArguments(_cmdLxh3dko)
		const _arrayValueE9rpuaz = null;
		const _arrayValueZHF98tS = "fzWnqLD8U2LRjtRAks7SBJegivItQE7xTWsbnFG8EjV9DUmTGX42CAHjjfANwS0AZnPqVMCXNp77tFCnWf";
		const _flagsYfDEAJn = [_arrayValueE9rpuaz, _arrayValueZHF98tS]
		const _description7efdIe = true;
		const _cmdYE3xkLu = new Option(_flagsYfDEAJn, _description7efdIe)
		const _fnonuE7ig = "XY9tPo0rSCDHhw4T0PAkc1YicZ8imIEfByLvRKSUKFqu1mD7kLfqeWwwCDX6Zh4EEExixHUad3IpHiuKEz35xWhT3NM";
		const _returnValueIKAL8w2 = await _cmdYE3xkLu.argParser(_fnonuE7ig)
		const _returnValueF7bzbK3 = await _cmdYE3xkLu.attributeName()
		const _valueNXb3Pzg = {
		
	}
		const _returnValuesRr9PdM = null;
		const _concatJPIXlD = () => { return _returnValuesRr9PdM };
		const _previousDkP12up = {
			"concat": _concatJPIXlD
	}
		const _returnValueF3s9Uk5 = await _cmdYE3xkLu._concatValue(_valueNXb3Pzg, _previousDkP12up)
		const _returnValuebPs6dPA = await _Helppl8adA4.subcommandDescription(_cmdYE3xkLu)
	});

	it('test for Help', async () => {
		const _HelplqzUFTJ = new Help()
		const _argChoiceswxQM4N = "0Dz34wixQfHvJKDnBBqhvOhtz";
		const _negatec5N2igj = {
		
	}
		const _defaultValueskQvIo = undefined;
		const _defaultValueDescriptionq7Dn1xh = null;
		const _envVarDkiWWx0 = null;
		const _descriptionMAUrZXh = 5.698520768524279;
		const _optionEQG6nfv = {
			"argChoices": _argChoiceswxQM4N,
		"negate": _negatec5N2igj,
		"defaultValue": _defaultValueskQvIo,
		"defaultValueDescription": _defaultValueDescriptionq7Dn1xh,
		"envVar": _envVarDkiWWx0,
		"description": _descriptionMAUrZXh
	}
		const _returnValueZ3uysuu = await _HelplqzUFTJ.optionDescription(_optionEQG6nfv)
		const _cmdc6vEKzB = "C89kpNYN2LxHwrPpFwMgEY6oDeV2F";
		const _returnValuerQUkjLh = await _HelplqzUFTJ.visibleArguments(_cmdc6vEKzB)
	});

	it('test for Help', async () => {
		const _Helplv2NGry = new Help()
		const _returnValuemVxTMzO = undefined;
		const _name7IQNQd = () => { return _returnValuemVxTMzO };
		const _descriptionsKzC7Sw = 1.2016553623117758;
		const _optionDUEdcmf = new Argument(_name7IQNQd, _descriptionsKzC7Sw)
		const _valueudDMuKF = []
		const _descriptionjSRfnsn = {
		
	}
		const _returnValueEfOSbXX = await _optionDUEdcmf.default(_valueudDMuKF, _descriptionjSRfnsn)
		const _returnValuehNoVfgt = await _optionDUEdcmf.argRequired()
		const _returnValueD01PgA6 = await _optionDUEdcmf.name()
		const _fnXf7QBMK = undefined;
		const _returnValuePs99cNH = await _optionDUEdcmf.argParser(_fnXf7QBMK)
		const _returnValueG2HZEIZ = await _Helplv2NGry.optionDescription(_optionDUEdcmf)
	});

	it('test for Help', async () => {
		const _HelpWpXY4Fh = new Help()
		const _namerpWLHqX = null;
		const _cmdcdt6Ivl = new Command(_namerpWLHqX)
		const _configurationrU1HqS = undefined;
		const _returnValuewAwsDfz = await _cmdcdt6Ivl.configureOutput(_configurationrU1HqS)
		const _strBmQxPI0 = undefined;
		const _returnValueZs8Ufpz = await _cmdcdt6Ivl.name(_strBmQxPI0)
		const _returnValuelwceRMf = await _HelpWpXY4Fh.visibleCommands(_cmdcdt6Ivl)
		const _nameh9LTfwc = undefined;
		const _cmdR0uZ0AT = new Command(_nameh9LTfwc)
		const _promisePHkGDNs = {
		
	}
		const _eventm5Q7ynw = null;
		const _returnValueGmKbNRi = await _cmdR0uZ0AT._chainOrCallHooks(_promisePHkGDNs, _eventm5Q7ynw)
		const _allowExcessU94Bqcj = undefined;
		const _returnValueCFcT8Li = await _cmdR0uZ0AT.allowExcessArguments(_allowExcessU94Bqcj)
		const _displayHelpMNe0GL = {
		
	}
		const _returnValueHmSchyI = await _cmdR0uZ0AT.showHelpAfterError(_displayHelpMNe0GL)
		const _errorKtB0Mq5 = "Y4XCzbWick3WMnDdV8PnCrGGL5jefyGiFReN6QcepI4M6LDy7U6Crq7hLSHK6aZ7pvQDBaXUzEr81kThbbgg";
		const _commandq0XbuSl = null;
		const _contextOptionsJwPzyzv = {
			"error": _errorKtB0Mq5,
		"command": _commandq0XbuSl
	}
		const _returnValueu7LPfhr = await _cmdR0uZ0AT.help(_contextOptionsJwPzyzv)
		const _returnValueBbpRIUW = await _HelpWpXY4Fh.subcommandDescription(_cmdR0uZ0AT)
	});

	it('test for Help', async () => {
		const _Help6XpimS = new Help()
		const _namej9dUoQs = 6.511190259313292;
		const _cmdGSJTY2I = new Command(_namej9dUoQs)
		const _returnValue7Yuuli = await _cmdGSJTY2I._checkForMissingMandatoryOptions()
		const _returnValueDdPH9d = await _Help6XpimS.visibleOptions(_cmdGSJTY2I)
		const _cmdgSOqPLK = "5RqqNpJ3wHHnH68liKykiOEs1cvvsY9XLYW5djUooy0O9qQ4f8xd7GavzjPNIulwgI7LIU2trpALeSTEfylysFbMJd";
		const _helperwPKq67p = new Help()
		const _arrayValuelvADFkX = undefined;
		const _optionv5Qlc1l = [_arrayValuelvADFkX]
		const _returnValuejFZTzZ7 = await _helperwPKq67p.optionDescription(_optionv5Qlc1l)
		const _returnValueAOoBojw = 0.5421652459123187;
		const _returnValueJgDuOnc = () => { return _returnValueAOoBojw };
		const _cmdc38ZQFe = () => { return _returnValueJgDuOnc };
		const _returnValuerqQB6fB = await _helperwPKq67p.subcommandDescription(_cmdc38ZQFe)
		const _cmdpysywkg = -6.3811772426972;
		const _returnValueyNP4c7Q = false;
		const _returnValuerLQDxTH = () => { return _returnValueyNP4c7Q };
		const _helperxLkzPi = () => { return _returnValuerLQDxTH };
		const _returnValueg8hNDQy = await _helperwPKq67p.longestOptionTermLength(_cmdpysywkg, _helperxLkzPi)
		const _returnValueYsZC3Q6 = null;
		const _returnValuetLOK0gc = () => { return _returnValueYsZC3Q6 };
		const _returnValueUmpqFcM = () => { return _returnValuetLOK0gc };
		const _returnValuewt66023 = () => { return _returnValueUmpqFcM };
		const _returnValueHnIfX1Z = () => { return _returnValuewt66023 };
		const _argumentxvagwvM = () => { return _returnValueHnIfX1Z };
		const _returnValueDxZgR8g = await _helperwPKq67p.argumentDescription(_argumentxvagwvM)
		const _commandsmlouGmC = {
		
	}
		const _returnValueXjAEndC = "cInmJpn";
		const __hasImplicitHelpCommandZ7pgHi = () => { return _returnValueXjAEndC };
		const __helpCommandnameAndArgsSX8boj6 = {
		
	}
		const _returnValueSDV5gBe = null;
		const _createCommandj3DEjmQ = () => { return _returnValueSDV5gBe };
		const __helpCommandDescriptiongxfV19I = "dwPkP5d8Nyrui3cxm32jAaNnOTX7h05gPO4FyhRC";
		const _cmdcUQWIU0 = {
			"commands": _commandsmlouGmC,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandZ7pgHi,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsSX8boj6,
		"createCommand": _createCommandj3DEjmQ,
		"_helpCommandDescription": __helpCommandDescriptiongxfV19I
	}
		const _returnValues7MivIk = await _helperwPKq67p.visibleCommands(_cmdcUQWIU0)
		const _returnValueeaEINAI = await _Help6XpimS.longestArgumentTermLength(_cmdgSOqPLK, _helperwPKq67p)
	});

	it('test for Help', async () => {
		const _Helpug4bJs = new Help()
		const _nameXQsxbCh = null;
		const _cmdaDRvTKO = new Command(_nameXQsxbCh)
		const _returnValueAg5UEms = await _cmdaDRvTKO._checkForMissingMandatoryOptions()
		const _aliasMXIMZTg = 0.20835425118059625;
		const _returnValuema1SdE3 = await _cmdaDRvTKO.alias(_aliasMXIMZTg)
		const _returnValueY0IBqPe = undefined;
		const _applySJN6YFA = () => { return _returnValueY0IBqPe };
		const _fnKaTTfQ = {
			"apply": _applySJN6YFA
	}
		const _returnValueL8fOUGu = await _cmdaDRvTKO.action(_fnKaTTfQ)
		const _arrayValueJWy2x7 = undefined;
		const _returnValueDyoVh4f = undefined;
		const _arrayValueiOhA6MI = () => { return _returnValueDyoVh4f };
		const _arrayValueaKrDSrU = null;
		const _arrayValuekmocV9 = "vZf9ZbnmtkyXh7XR";
		const _returnValueZELGysl = [_arrayValuekmocV9]
		const _arrayValueXAv6YUa = () => { return _returnValueZELGysl };
		const _arrayValuenNGHJt0 = [_arrayValueiOhA6MI, _arrayValueaKrDSrU, _arrayValueXAv6YUa]
		const _fnxLPSNoK = [_arrayValueJWy2x7, _arrayValuenNGHJt0]
		const _returnValuezPmAGt = await _cmdaDRvTKO.action(_fnxLPSNoK)
		const _returnValueiU8tRck = await _Helpug4bJs.commandUsage(_cmdaDRvTKO)
		const _nameTJXopvY = undefined;
		const _optionUV8RY6 = new Command(_nameTJXopvY)
		const _arrayValueXiI4asx = 0.7081213262365793;
		const _arrayValueJBRnqT8 = {
		
	}
		const _arrayValueluZAzFE = -0.9099068598130202;
		const _arrayValueplhsuFN = [_arrayValueluZAzFE]
		const _arrayValueP2fMl6i = undefined;
		const _arrayValueORrxXRv = [_arrayValueplhsuFN, _arrayValueP2fMl6i]
		const _arrayValueoMNLfQg = [_arrayValueXiI4asx, _arrayValueJBRnqT8, _arrayValueORrxXRv]
		const _returnValueZATVG7N = -3.0232937993930484;
		const _arrayValueFsKjcFu = () => { return _returnValueZATVG7N };
		const _arrayValueZSp5qgr = 4.788249838368879;
		const _argvJRlNkIa = [_arrayValueoMNLfQg, _arrayValueFsKjcFu, _arrayValueZSp5qgr]
		const _parseOptionsCfeYkp = undefined;
		const _returnValueAtuXRpc = await _optionUV8RY6.parseAsync(_argvJRlNkIa, _parseOptionsCfeYkp)
		const _keyPS8yvhU = false;
		const _returnValuehsRWBiK = await _optionUV8RY6.getOptionValueSource(_keyPS8yvhU)
		const _strm78B7Ns = undefined;
		const _returnValueOOrTwyW = await _optionUV8RY6.name(_strm78B7Ns)
		const _arrayValueGrypA4H = "2FYMhiitk8IQnFFd77bqZEGsq0STPpPUgrhREPigmVCYawqHHD7dFj8V8x3b25NZsmvkRthtxsb";
		const _arrayValueaZEG8uD = -9.611029812818977;
		const _enableOrNameAndArgsr8ZZDy = [_arrayValueGrypA4H, _arrayValueaZEG8uD]
		const _descriptionibpCxlT = false;
		const _returnValuecgTyivl = await _optionUV8RY6.addHelpCommand(_enableOrNameAndArgsr8ZZDy, _descriptionibpCxlT)
		const _returnValueJPNAxMK = await _Helpug4bJs.optionDescription(_optionUV8RY6)
		const _arrayValueNIG4Qft = 4.5460266330988155;
		const _arrayValueRC55om = 5.320073098266477;
		const _arrayValuebytZ6Lv = "Ygg8WlDdrmP3Yayfbmz7";
		const _namemsjjceZ = [_arrayValueNIG4Qft, _arrayValueRC55om, _arrayValuebytZ6Lv]
		const _cmdN8ENrWf = new Command(_namemsjjceZ)
		const _allowExcesse7CE8U1 = true;
		const _returnValuehIIZ6t = await _cmdN8ENrWf.allowExcessArguments(_allowExcesse7CE8U1)
		const _strMeTxVl = "9JetlnwehrbECc8R8W5lP4iHTAznDvoiU3xBU5hr75uhNdpRY2SN5qXXtKVA1RUL6IjGbwKSIptNacsIXJfK";
		const _argsDescriptiond0dh1b3 = undefined;
		const _returnValueq05IPl = await _cmdN8ENrWf.description(_strMeTxVl, _argsDescriptiond0dh1b3)
		const _lengthU59AXqu = null;
		const _receivedArgsegTb3WV = {
			"length": _lengthU59AXqu
	}
		const _returnValueyLMFJt = await _cmdN8ENrWf._excessArguments(_receivedArgsegTb3WV)
		const _strAYMwMQd = undefined;
		const _returnValuelIexHir = await _cmdN8ENrWf.usage(_strAYMwMQd)
		const _returnValueiTUQR5 = null;
		const _concatmnR0FKQ = () => { return _returnValueiTUQR5 };
		const _returnValueNEj2R1B = undefined;
		const _slicepJt8Uc = () => { return _returnValueNEj2R1B };
		const _lengthVloUP2 = -9.482664380610451;
		const _operandsJ0GanDb = {
			"concat": _concatmnR0FKQ,
		"slice": _slicepJt8Uc,
		"length": _lengthVloUP2
	}
		const _unknownkfhI0iS = {
		
	}
		const _returnValueWu9MmK = await _cmdN8ENrWf._parseCommand(_operandsJ0GanDb, _unknownkfhI0iS)
		const _returnValueGBIbWjG = await _Helpug4bJs.subcommandTerm(_cmdN8ENrWf)
	});
})