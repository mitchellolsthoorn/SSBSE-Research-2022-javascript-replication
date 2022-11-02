export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpAPDBxiQ = new Help()
		const _cmdC0Veg3x = false;
		const _helperOnSXGiw = "PQKjOZvkW2mt5qIOJFFsp1TzoHMpQvFu3MXBTdFU3rb2oYMYPsyaq2tflGclUxgStsR9O4fCaLYl9A5bPmQ";
		const _returnValueoHKxp8j = await _HelpAPDBxiQ.longestOptionTermLength(_cmdC0Veg3x, _helperOnSXGiw)
		const _arrayValueYsfmrVa = null;
		const _returnValuevJ18wwz = [_arrayValueYsfmrVa]
		const _cmdTBc0Rgx = () => { return _returnValuevJ18wwz };
		const _returnValuenT1WMl = await _HelpAPDBxiQ.subcommandDescription(_cmdTBc0Rgx)
	});

	it('test for Help', async () => {
		const _HelpFauwFic = new Help()
		const _arrayValueJFEjboz = "1dk8RK";
		const _arrayValuez8t0R24 = null;
		const _arrayValueaz1tsr = true;
		const _cmdDcZqb4e = [_arrayValueJFEjboz, _arrayValuez8t0R24, _arrayValueaz1tsr]
		const _returnValueEB4cTaC = await _HelpFauwFic.visibleCommands(_cmdDcZqb4e)
	});

	it('test for Help', async () => {
		const _HelpwysgLwB = new Help()
		const _cmdKs4vY2b = true;
		const _helper93iXoe = new Help()
		const _cmdjMKp8nF = null;
		const _helperavzdcFQ = "5oTQvYpq7Vltx9GTJjMEXFBm74rRWgGO85yCKvCVdn9tNxq";
		const _returnValuebK8xHU = await _helper93iXoe.longestArgumentTermLength(_cmdjMKp8nF, _helperavzdcFQ)
		const _returnValuelAzQsqu = await _HelpwysgLwB.padWidth(_cmdKs4vY2b, _helper93iXoe)
		const _cmdiDHoN2k = undefined;
		const _helperNEsR5u = "PX5MHc3UrOR7Yevv7NafetlrMu8";
		const _returnValueisPfvQA = await _HelpwysgLwB.longestSubcommandTermLength(_cmdiDHoN2k, _helperNEsR5u)
		const _arrayValueShhBf3E = null;
		const _arrayValue3dqCBr = 9.361970705548714;
		const _cmdziO6hHF = [_arrayValueShhBf3E, _arrayValue3dqCBr]
		const _returnValueYuiFdh = await _HelpwysgLwB.subcommandTerm(_cmdziO6hHF)
	});

	it('test for Help', async () => {
		const _HelpVfBRNhU = new Help()
		const _optionqoVfYJY = "0xmpvPUNec5pDQ1oYxfUIHptFAGB3IPNwSjpW4Uqw";
		const _returnValueS5zpaEK = await _HelpVfBRNhU.optionDescription(_optionqoVfYJY)
		const _cmdmCJ4CZ = "Hv9sPU2ANVSmY4A8";
		const _returnValueMO1WXUF = await _HelpVfBRNhU.visibleArguments(_cmdmCJ4CZ)
		const _namepEhCw3u = "kLu6mFfwNdjNlGzyIKIWeh9t8imHG68Cvx0759UAPG09sb9bWHwt103iaSbRKnVd4o2JBNc";
		const _descriptionXiKoCsK = -4.9953171415231665;
		const _argumentK3o4cZm = new Argument(_namepEhCw3u, _descriptionXiKoCsK)
		const _valueZygLp7w = undefined;
		const _descriptionGwgVtmR = undefined;
		const _returnValueMzhUIry = await _argumentK3o4cZm.default(_valueZygLp7w, _descriptionGwgVtmR)
		const _returnValuezZkueIm = await _HelpVfBRNhU.argumentTerm(_argumentK3o4cZm)
		const _cmdEkbcFz = {
		
	}
		const _helperIQ33ARi = undefined;
		const _returnValuee1xWVBU = await _HelpVfBRNhU.formatHelp(_cmdEkbcFz, _helperIQ33ARi)
	});

	it('test for Help', async () => {
		const _HelpJLlJ0gi = new Help()
		const _cmdoXfosa7 = 7.263088239046649;
		const _sortSubcommandsWF9FIZW = 7.114113203439018;
		const _subcommandTermVLncM51 = null;
		const _helpertsQgau = {
			"sortSubcommands": _sortSubcommandsWF9FIZW,
		"subcommandTerm": _subcommandTermVLncM51
	}
		const _returnValueRebAgnY = await _HelpJLlJ0gi.formatHelp(_cmdoXfosa7, _helpertsQgau)
		const _cmdvhnQkaS = false;
		const _helperotMqR5T = false;
		const _returnValuef5BawqT = await _HelpJLlJ0gi.longestSubcommandTermLength(_cmdvhnQkaS, _helperotMqR5T)
	});

	it('test for Help', async () => {
		const _HelpSTRv5Bt = new Help()
		const _arrayValue8f3Btx = {
		
	}
		const _arrayValuelvhVw4u = "vIGhy9M1G0pOtzSe52RsZFw25Aoyu4ymlabTOexK3gHqLco";
		const _arrayValuedPE8QME = undefined;
		const _arrayValuefrenZj5 = undefined;
		const _arrayValue1u1GRG = [_arrayValuedPE8QME, _arrayValuefrenZj5]
		const _argumentNWjztl1 = [_arrayValue8f3Btx, _arrayValuelvhVw4u, _arrayValue1u1GRG]
		const _returnValueK4m9QK1 = await _HelpSTRv5Bt.argumentDescription(_argumentNWjztl1)
		const _cmdGlwO1o3 = "Q36UkW";
		const _arrayValueQB3jtU4 = true;
		const _sortSubcommandsf1kmi01 = [_arrayValueQB3jtU4]
		const _arrayValueLVw4H9y = "Ty5LwyKPLGbwE2ne5t3r";
		const _arrayValueH66Kr7F = null;
		const _arrayValueBQ44foA = -1.0994564321739304;
		const _arrayValuesxGw65Q = undefined;
		const _returnValuepEkd4Dw = [_arrayValueLVw4H9y, _arrayValueH66Kr7F, _arrayValueBQ44foA, _arrayValuesxGw65Q]
		const _subcommandTermzP5wXD6 = () => { return _returnValuepEkd4Dw };
		const _helperscMnDod = {
			"sortSubcommands": _sortSubcommandsf1kmi01,
		"subcommandTerm": _subcommandTermzP5wXD6
	}
		const _returnValuefcun37N = await _HelpSTRv5Bt.longestSubcommandTermLength(_cmdGlwO1o3, _helperscMnDod)
		const _cmdQRBTe70 = "pDet9zOqq9JDeMBDqrz5kepjYVV";
		const _returnValueb6TDhgU = await _HelpSTRv5Bt.commandDescription(_cmdQRBTe70)
		const _arrayValueKb2VibA = undefined;
		const _arrayValuezxR9jp5 = 7.558412043373568;
		const _arrayValueMbjorCz = [_arrayValueKb2VibA, _arrayValuezxR9jp5]
		const _cmdKGgvoaQ = [_arrayValueMbjorCz]
		const _returnValuezkyb4F = await _HelpSTRv5Bt.visibleOptions(_cmdKGgvoaQ)
		const _cmdALKZ77l = null;
		const _helperKZgCsFG = 4.671699140920229;
		const _returnValueFODlkRk = await _HelpSTRv5Bt.formatHelp(_cmdALKZ77l, _helperKZgCsFG)
	});

	it('test for Help', async () => {
		const _HelpeJrYUkz = new Help()
		const _returnValueJPgtsqj = "1Upzit91PwxADxukNIt1h";
		const _matchj0yo0A9 = () => { return _returnValueJPgtsqj };
		const _returnValuegwcLm4 = true;
		const _substrfr6N0sS = () => { return _returnValuegwcLm4 };
		const _streVY03sj = {
			"match": _matchj0yo0A9,
		"substr": _substrfr6N0sS
	}
		const _widthZNkoD8i = -0.05131969367264588;
		const _indentqDlhYd = -1.9548014514271692;
		const _minColumnWidthErBI4Qj = 0.19429770657381695;
		const _returnValue5Y91QG = await _HelpeJrYUkz.wrap(_streVY03sj, _widthZNkoD8i, _indentqDlhYd, _minColumnWidthErBI4Qj)
		const _arrayValuec8veOC7 = null;
		const _arrayValueGsf27Y5 = -5.391371708654451;
		const _arrayValueuvaF7FZ = undefined;
		const _cmdgmMi0Fd = [_arrayValuec8veOC7, _arrayValueGsf27Y5, _arrayValueuvaF7FZ]
		const _helperpdtsnKm = []
		const _returnValuedhgm79C = await _HelpeJrYUkz.longestSubcommandTermLength(_cmdgmMi0Fd, _helperpdtsnKm)
	});

	it('test for Help', async () => {
		const _Helperqlqai = new Help()
		const _returnValueLrhpvPD = null;
		const _returnValuemToOPgi = () => { return _returnValueLrhpvPD };
		const _argumentVcdEuBt = () => { return _returnValuemToOPgi };
		const _returnValueBOe8Zt = await _Helperqlqai.argumentDescription(_argumentVcdEuBt)
		const __nameOX30Fhk = "tHk7rq1p0CAs2XM8NQNC19AR";
		const __aliasesf4nQVJi = {
		
	}
		const _arrayValueTYTELy3 = 6.941988472054948;
		const _arrayValueU1v3c1E = null;
		const _arrayValuek9pBAJ = {
		
	}
		const _arrayValueyrkFhHq = [_arrayValueTYTELy3, _arrayValueU1v3c1E, _arrayValuek9pBAJ]
		const _arrayValuedYCH6Rh = undefined;
		const _parentbV8dSLF = [_arrayValueyrkFhHq, _arrayValuedYCH6Rh]
		const _returnValuetZ6aTEA = "UB5tPoDnYcFvPYjQAZ7B";
		const _usagexN5JlaM = () => { return _returnValuetZ6aTEA };
		const _cmdz8Phr0K = {
			"_name": __nameOX30Fhk,
		"_aliases": __aliasesf4nQVJi,
		"parent": _parentbV8dSLF,
		"usage": _usagexN5JlaM
	}
		const _returnValuecU0kvau = await _Helperqlqai.commandUsage(_cmdz8Phr0K)
		const _returnValuePfOmuNs = []
		const _includesC0Atv0K = () => { return _returnValuePfOmuNs };
		const _flagsqOqbDXr = {
			"includes": _includesC0Atv0K
	}
		const _descriptionTM7LK2 = {
		
	}
		const _optionwm5oNRZ = new Option(_flagsqOqbDXr, _descriptionTM7LK2)
		const _hidet0btmaQ = true;
		const _returnValuehPi7zEv = await _optionwm5oNRZ.hideHelp(_hidet0btmaQ)
		const _returnValueGVsr8lW = await _Helperqlqai.optionTerm(_optionwm5oNRZ)
	});

	it('test for Help', async () => {
		const _HelpJ2ujxeK = new Help()
		const _arrayValueA0N6xFA = undefined;
		const _arrayValuenUHuD8X = -3.4177781951761776;
		const _returnValuedM8A3A8 = undefined;
		const _arrayValuedboxZdB = () => { return _returnValuedM8A3A8 };
		const _arrayValueiBHsSAY = {
		
	}
		const _arrayValuegFHWPMn = [_arrayValuenUHuD8X, _arrayValuedboxZdB, _arrayValueiBHsSAY]
		const _arrayValue9TExcC = "GXT8DRg5SgtPrJYdrM0OkYPnL2XIz";
		const _returnValueQ20KPAD = [_arrayValueA0N6xFA, _arrayValuegFHWPMn, _arrayValue9TExcC]
		const _cmdTNkuQld = () => { return _returnValueQ20KPAD };
		const _returnValuej3SstZx = await _HelpJ2ujxeK.visibleOptions(_cmdTNkuQld)
		const _cmdxLz4Tj = undefined;
		const _helperu5sQqhE = "2JxRNIJX6rJvtHN2HqqRM5FqQkSyS7pCBd3W2pvdSYDxBZUmNFGEpp48ghkzmYcVKYKBp";
		const _returnValueunx1wn6 = await _HelpJ2ujxeK.formatHelp(_cmdxLz4Tj, _helperu5sQqhE)
		const _returnValue9AM0tg = false;
		const _matchH279wAR = () => { return _returnValue9AM0tg };
		const _returnValueOnFB9YD = -5.926991978498236;
		const _substrQWNHyPo = () => { return _returnValueOnFB9YD };
		const _strcNX6Et4 = {
			"match": _matchH279wAR,
		"substr": _substrQWNHyPo
	}
		const _widthwb4Uk2b = null;
		const _indentz4JjngG = -0.3413709473106117;
		const _minColumnWidths00LDGa = 9.58441143004342;
		const _returnValuee8I7JR5 = await _HelpJ2ujxeK.wrap(_strcNX6Et4, _widthwb4Uk2b, _indentz4JjngG, _minColumnWidths00LDGa)
		const _cmdYFpxA8 = "6uC7RHnnusxCFm2CEXE0AJhJ1wARYEoSBYqSlmqpVgYtZss2HCk";
		const _returnValueR28eU4i = await _HelpJ2ujxeK.visibleCommands(_cmdYFpxA8)
	});

	it('test for Help', async () => {
		const _HelpKUVKizS = new Help()
		const _exitCodebrYbKCC = 8.318270490098445;
		const _returnValueDK39AAH = null;
		const _codewTzRZTQ = () => { return _returnValueDK39AAH };
		const _messagegr8cvhf = "XauYDm7kwBvR5mmvRbMICwikljl7wwcWGgtv1oKozlmGdj3nzI0DHkct0HHsF219Ujzgv11j";
		const _argumentP51JoZ = new CommanderError(_exitCodebrYbKCC, _codewTzRZTQ, _messagegr8cvhf)
		const _returnValueUkYf9j6 = await _HelpKUVKizS.argumentTerm(_argumentP51JoZ)
		const _cmdOyl5TK = null;
		const _helperUxHhis3 = new Help()
		const _returnValuenmHyNrN = undefined;
		const _cmdtwKxwXL = () => { return _returnValuenmHyNrN };
		const _arrayValueVOAUZC = -4.9013989557682605;
		const _arrayValuet0mloHV = "DMxhnrtT1OzNybFk4e4uAUWOxLmSouE5obkFDeB4zsyABnRudGVw5opO4QE2ndCFNRJWGNY1nKVyfW";
		const _returnValueTwCPwGj = [_arrayValueVOAUZC, _arrayValuet0mloHV]
		const _visibleOptions4RYPGO = () => { return _returnValueTwCPwGj };
		const _returnValueC7Gjg2i = 2.0120714706782934;
		const _optionTermDmauDF = () => { return _returnValueC7Gjg2i };
		const _helperwPaHq4 = {
			"visibleOptions": _visibleOptions4RYPGO,
		"optionTerm": _optionTermDmauDF
	}
		const _returnValuecSGsXDR = await _helperUxHhis3.longestOptionTermLength(_cmdtwKxwXL, _helperwPaHq4)
		const _returnValueY1lYaaQ = 3.3281477600068072;
		const _argumentHW6EQ9N = () => { return _returnValueY1lYaaQ };
		const _returnValueHgx3wZB = await _helperUxHhis3.argumentTerm(_argumentHW6EQ9N)
		const _returnValueQujsRtb = await _HelpKUVKizS.longestOptionTermLength(_cmdOyl5TK, _helperUxHhis3)
	});

	it('test for Help', async () => {
		const _HelpqAc1ln2 = new Help()
		const _arrayValuebW0Do7a = "VDjP47wX7QmWp3loZEPTHiC3NpkidUvRYkK1NLlrKzOkk8qw6y5u2W";
		const _arrayValueFCIKCvB = null;
		const _nameFNu3S5z = [_arrayValuebW0Do7a, _arrayValueFCIKCvB]
		const _descriptionoOWU3Z1 = undefined;
		const _cmdCBcbWya = new Argument(_nameFNu3S5z, _descriptionoOWU3Z1)
		const _returnValuegfbdEfb = -1.202675704159999;
		const _arrayValueGDhSS5 = () => { return _returnValuegfbdEfb };
		const _arrayValuecCEgJp1 = null;
		const _arrayValueyMl2Jei = [_arrayValuecCEgJp1]
		const _arrayValueboYWrWk = undefined;
		const _arrayValueUMrDjdO = null;
		const _arrayValuesuduXHI = null;
		const _valuesPLPu5NG = [_arrayValueGDhSS5, _arrayValueyMl2Jei, _arrayValueboYWrWk, _arrayValueUMrDjdO, _arrayValuesuduXHI]
		const _returnValueXHP5p6a = await _cmdCBcbWya.choices(_valuesPLPu5NG)
		const _valuepyBwLFV = -0.8360813520849604;
		const _arrayValueK6CVP3a = null;
		const _arrayValueO2k1EhI = "t7BFROOKVdB6aKS";
		const _arrayValuePzsgJCd = "zCqIoZScBSLSjbiYiTrRURG1aGJu4L1jNlhK3wFUbgKqqwALJuPqzB4VeNNei14hFqyrsuNdL1xsQLJ28x8z4";
		const _arrayValued1FXIh7 = -8.63183876670083;
		const _arrayValueQ1grs8f = [_arrayValued1FXIh7]
		const _arrayValueQMOy4Rw = [_arrayValueQ1grs8f]
		const _arrayValuenQwFNgB = [_arrayValueO2k1EhI, _arrayValuePzsgJCd, _arrayValueQMOy4Rw]
		const _previouslm7JvZi = [_arrayValueK6CVP3a, _arrayValuenQwFNgB]
		const _returnValuejksoYlI = await _cmdCBcbWya._concatValue(_valuepyBwLFV, _previouslm7JvZi)
		const _valueaprGFV9 = "g5WkAPL";
		const _descriptionc0RgX7q = undefined;
		const _returnValuesvaDQX4 = await _cmdCBcbWya.default(_valueaprGFV9, _descriptionc0RgX7q)
		const _returnValueq2TPZkJ = 8.987501146963488;
		const _includesw5cVeZh = () => { return _returnValueq2TPZkJ };
		const _returnValuec85rt1s = "w8M4HSk7G6";
		const _jointiEzds0 = () => { return _returnValuec85rt1s };
		const _valuesL6eTCJ2 = {
			"includes": _includesw5cVeZh,
		"join": _jointiEzds0
	}
		const _returnValueFh0W3PO = await _cmdCBcbWya.choices(_valuesL6eTCJ2)
		const _returnValuePJ0WU9A = await _HelpqAc1ln2.commandDescription(_cmdCBcbWya)
		const _cmdDLT8XtK = null;
		const _arrayValuec27XSbq = null;
		const _helperz4Gz8l9 = [_arrayValuec27XSbq]
		const _returnValuefCXs5Ka = await _HelpqAc1ln2.longestArgumentTermLength(_cmdDLT8XtK, _helperz4Gz8l9)
		const _returnValuee4fjxcm = -2.4049071007045564;
		const _nameT3dz6bA = () => { return _returnValuee4fjxcm };
		const _argumentHidZPiw = {
			"name": _nameT3dz6bA
	}
		const _returnValueLpLL21k = await _HelpqAc1ln2.argumentTerm(_argumentHidZPiw)
		const _cmdh1pC9Y3 = -9.065040650749848;
		const _returnValueDvaiYP = await _HelpqAc1ln2.visibleOptions(_cmdh1pC9Y3)
	});

	it('test for Help', async () => {
		const _HelpRhFOrzk = new Help()
		const _flagsei5CT8Y = -0.9978923194450111;
		const _optionluiPQC = {
			"flags": _flagsei5CT8Y
	}
		const _returnValueEq6VKOD = await _HelpRhFOrzk.optionTerm(_optionluiPQC)
	});

	it('test for Help', async () => {
		const _HelpkIVpUno = new Help()
		const _cmdL4tp6Dm = true;
		const _arrayValueOP4hPyb = true;
		const _arrayValuehDYcP1R = null;
		const _returnValueMmY4tCY = undefined;
		const _arrayValueIQMYdHS = () => { return _returnValueMmY4tCY };
		const _returnValueq7AcLts = [_arrayValueOP4hPyb, _arrayValuehDYcP1R, _arrayValueIQMYdHS]
		const _longestOptionTermLengtheQxrLqW = () => { return _returnValueq7AcLts };
		const _returnValueCCcyogA = undefined;
		const _longestSubcommandTermLengthp3UZrCG = () => { return _returnValueCCcyogA };
		const _arrayValueyM3t190 = true;
		const _returnValuePtfpL1T = [_arrayValueyM3t190]
		const _longestArgumentTermLengthvzuQx3j = () => { return _returnValuePtfpL1T };
		const _helperbfbvoQM = {
			"longestOptionTermLength": _longestOptionTermLengtheQxrLqW,
		"longestSubcommandTermLength": _longestSubcommandTermLengthp3UZrCG,
		"longestArgumentTermLength": _longestArgumentTermLengthvzuQx3j
	}
		const _returnValuezB4CuHr = await _HelpkIVpUno.padWidth(_cmdL4tp6Dm, _helperbfbvoQM)
	});

	it('test for Help', async () => {
		const _Helpa5HtAyb = new Help()
		const _returnValueu580XRy = {
		
	}
		const _slicev7172e = () => { return _returnValueu580XRy };
		const _namepiCsf9D = {
			"slice": _slicev7172e
	}
		const _descriptionnRpdMp4 = 0.5714734879751973;
		const _argumentbaV7M2d = new Argument(_namepiCsf9D, _descriptionnRpdMp4)
		const _valuepjJmvOE = "XubLwUvfi70TjZB99V";
		const _descriptionDG7tUi7 = undefined;
		const _returnValueoVufS9t = await _argumentbaV7M2d.default(_valuepjJmvOE, _descriptionDG7tUi7)
		const _arrayValuegA9AmZp = {
		
	}
		const _valueszdFFheo = [_arrayValuegA9AmZp]
		const _returnValuetu1PEgs = await _argumentbaV7M2d.choices(_valueszdFFheo)
		const _arrayValuetJz4VYO = -4.48829904061959;
		const _arrayValueE9Vk9ty = "5WlZSPVzaUlVrsXDWMNDOnd0LVeCxK0yvviPYMWlxWr6";
		const _arrayValuebmokBrR = null;
		const _valuesiGvmgsb = [_arrayValuetJz4VYO, _arrayValueE9Vk9ty, _arrayValuebmokBrR]
		const _returnValueogwva3V = await _argumentbaV7M2d.choices(_valuesiGvmgsb)
		const _returnValuewO1x6n1 = await _Helpa5HtAyb.argumentTerm(_argumentbaV7M2d)
		const _arrayValueI5o7iRB = -2.5145095401669195;
		const _arrayValueDIrKtyP = "nXQNzNXjlXNcVGduB6tCFv7zNHOMqF2DfUdKFfeIDzrJj31VyoUKIfwBfvGmYrHakQ";
		const _arrayValuebeCBUpU = -6.760334313930975;
		const _arrayValue6afjXe = undefined;
		const _arrayValuemJjn8kj = [_arrayValuebeCBUpU, _arrayValue6afjXe]
		const _arrayValueWHS3jgU = 1.9170008688424733;
		const _arrayValuerc6oq3n = null;
		const _arrayValuebB5RLRm = [_arrayValueDIrKtyP, _arrayValuemJjn8kj, _arrayValueWHS3jgU, _arrayValuerc6oq3n]
		const _arrayValuexgfwIvK = undefined;
		const _arrayValueFJwKIet = [_arrayValuebB5RLRm, _arrayValuexgfwIvK]
		const _arrayValuei9wiF1U = null;
		const _arrayValueb9jMmCz = [_arrayValuei9wiF1U]
		const _namejL1mpHK = [_arrayValueI5o7iRB, _arrayValueFJwKIet, _arrayValueb9jMmCz]
		const _argumentgM6L8O8 = new Command(_namejL1mpHK)
		const _strtutezqS = undefined;
		const _flagsFgg18ar = true;
		const _descriptionaRcof0A = {
		
	}
		const _returnValueDQ6Tdux = await _argumentgM6L8O8.version(_strtutezqS, _flagsFgg18ar, _descriptionaRcof0A)
		const _returnValuefiXxjCP = -1.4524274753321116;
		const _argumentgE0aQhP = () => { return _returnValuefiXxjCP };
		const _returnValueVwRGgTR = await _argumentgM6L8O8.addArgument(_argumentgE0aQhP)
		const _returnValueFaUuZtg = await _Helpa5HtAyb.argumentTerm(_argumentgM6L8O8)
		const _arrayValuexhwmkyP = undefined;
		const _arrayValueptIqvL = 1.286992948914742;
		const _namewQmFveV = [_arrayValuexhwmkyP, _arrayValueptIqvL]
		const _cmdGP3LANE = new Command(_namewQmFveV)
		const _strqFkLwzd = undefined;
		const _returnValueqDnykyj = await _cmdGP3LANE.name(_strqFkLwzd)
		const _displaySuggestionEzcPPPJ = true;
		const _returnValuenKIAR7x = await _cmdGP3LANE.showSuggestionAfterError(_displaySuggestionEzcPPPJ)
		const _returnValueYSWYoma = await _Helpa5HtAyb.visibleOptions(_cmdGP3LANE)
		const _returnValuehk84o2C = null;
		const _returnValueWqOiH4E = () => { return _returnValuehk84o2C };
		const _cmdPVbADu1 = () => { return _returnValueWqOiH4E };
		const _sortSubcommandsk8biGtS = "zpRj";
		const _returnValuegW7EQ4O = false;
		const _subcommandTermNAHSnJS = () => { return _returnValuegW7EQ4O };
		const _helpert7sALZ1 = {
			"sortSubcommands": _sortSubcommandsk8biGtS,
		"subcommandTerm": _subcommandTermNAHSnJS
	}
		const _returnValueS9Vzb8 = await _Helpa5HtAyb.longestSubcommandTermLength(_cmdPVbADu1, _helpert7sALZ1)
	});

	it('test for Help', async () => {
		const _HelpBzBLN6Y = new Help()
		const _returnValuepTn5DTY = -4.931364122666398;
		const _cmdaFOiqa = () => { return _returnValuepTn5DTY };
		const _returnValueYeNZgx4 = await _HelpBzBLN6Y.subcommandTerm(_cmdaFOiqa)
		const _arrayValueb4nhq7r = "IORpKJBtcJXZkHULG8V5hukYMV5DbLzYLIODSKRyPN9KOuJwpDktrM0gJTwB";
		const _arrayValuewBy3xO6 = [_arrayValueb4nhq7r]
		const _arrayValue4hqqh1 = -5.424379084365253;
		const _arrayValueqAJpa8 = 1.9817575083654972;
		const _cmdne0UXe = [_arrayValuewBy3xO6, _arrayValue4hqqh1, _arrayValueqAJpa8]
		const _returnValuemDJ0b2F = await _HelpBzBLN6Y.subcommandTerm(_cmdne0UXe)
		const _returnValuevgyntij = true;
		const _argument3Yb27r = () => { return _returnValuevgyntij };
		const _returnValuesFSS2gu = await _HelpBzBLN6Y.argumentTerm(_argument3Yb27r)
	});

	it('test for Help', async () => {
		const _HelpzlWugvu = new Help()
		const _arrayValueC2KanOA = {
		
	}
		const _returnValuex44Vel4 = [_arrayValueC2KanOA]
		const _namexdbfdft = () => { return _returnValuex44Vel4 };
		const _argumentnbfwGHW = {
			"name": _namexdbfdft
	}
		const _returnValueTP8U2vZ = await _HelpzlWugvu.argumentTerm(_argumentnbfwGHW)
		const __argsDescriptionxaHies = {
		
	}
		const __argseTmuXhl = {
		
	}
		const _cmdJELm2x = {
			"_argsDescription": __argsDescriptionxaHies,
		"_args": __argseTmuXhl
	}
		const _returnValueY4ozg4F = await _HelpzlWugvu.visibleArguments(_cmdJELm2x)
		const _cmdmsHHczN = null;
		const _arrayValuexd1wC1A = null;
		const _arrayValuekHaEty = []
		const _returnValueCyJZUu = [_arrayValuexd1wC1A, _arrayValuekHaEty]
		const _helperk0L4GI = () => { return _returnValueCyJZUu };
		const _returnValuepnSEhzW = await _HelpzlWugvu.longestArgumentTermLength(_cmdmsHHczN, _helperk0L4GI)
	});

	it('test for Help', async () => {
		const _HelpKf3Itd = new Help()
		const _argChoicesy3hEfWa = {
		
	}
		const _negatepPqt6n = undefined;
		const _defaultValueOXsLbp8 = undefined;
		const _defaultValueDescriptionUOLj3lb = false;
		const _envVarFdq1Rce = undefined;
		const _descriptionJ29cWZr = "fJdIlc5wS1r3eszEQEk3DFJkcmQ";
		const _optionApxrbmn = {
			"argChoices": _argChoicesy3hEfWa,
		"negate": _negatepPqt6n,
		"defaultValue": _defaultValueOXsLbp8,
		"defaultValueDescription": _defaultValueDescriptionUOLj3lb,
		"envVar": _envVarFdq1Rce,
		"description": _descriptionJ29cWZr
	}
		const _returnValueXiN8VN = await _HelpKf3Itd.optionDescription(_optionApxrbmn)
	});

	it('test for Help', async () => {
		const _Helpv6NtaV = new Help()
		const _returnValueXhZIdWy = "44XL4hKDvCczC8zrsyFsdp4LKTnYxMFHEdA6LjKI2dRtmeLTCHv7uwicsXUYd2Z8FE46aqKoSD6xbKSHFnXobAu";
		const _nameFkRgdmN = () => { return _returnValueXhZIdWy };
		const _descriptionxcgY93L = 9.619458403970729;
		const _cmdlEvQPkx = new Argument(_nameFkRgdmN, _descriptionxcgY93L)
		const _valuebmfMmB = undefined;
		const _descriptionRZtJdh7 = undefined;
		const _returnValuevfhvdKu = await _cmdlEvQPkx.default(_valuebmfMmB, _descriptionRZtJdh7)
		const _fn7ATeCq = undefined;
		const _returnValueYBsV4m1 = await _cmdlEvQPkx.argParser(_fn7ATeCq)
		const _arrayValueEbMXp8Q = {
		
	}
		const _arrayValueTA2rSJp = -6.692460726868694;
		const _arrayValueLzUFtYS = {
		
	}
		const _returnValueiNU8Q1u = [_arrayValueEbMXp8Q, _arrayValueTA2rSJp, _arrayValueLzUFtYS]
		const _includesdLQORNG = () => { return _returnValueiNU8Q1u };
		const _returnValueK1UxFL = true;
		const _returnValueZ9N4rBx = () => { return _returnValueK1UxFL };
		const _joinBQb6DxB = () => { return _returnValueZ9N4rBx };
		const _valuescMoe7Zn = {
			"includes": _includesdLQORNG,
		"join": _joinBQb6DxB
	}
		const _returnValueNxkAd8x = await _cmdlEvQPkx.choices(_valuescMoe7Zn)
		const _returnValueXbi9RCw = await _Helpv6NtaV.subcommandDescription(_cmdlEvQPkx)
		const _cmdxfLX7AY = "yBclx5AWXpAiia";
		const _helperKWPLxXl = new Help()
		const __argsc6dVO64 = {
		
	}
		const __nameL6d4NPH = 3.59399959430586;
		const __aliasesOkuP4pw = {
		
	}
		const _optionsyR3UZGA = {
		
	}
		const _cmdRIJgPUT = {
			"_args": __argsc6dVO64,
		"_name": __nameL6d4NPH,
		"_aliases": __aliasesOkuP4pw,
		"options": _optionsyR3UZGA
	}
		const _returnValuepnrSDXa = await _helperKWPLxXl.subcommandTerm(_cmdRIJgPUT)
		const _arrayValuejO3VMLi = -6.802036700276448;
		const _arrayValueXuGE8hA = {
		
	}
		const _arrayValueKAaCm8S = [_arrayValueXuGE8hA]
		const _arrayValueEWSFNYW = [_arrayValuejO3VMLi, _arrayValueKAaCm8S]
		const _arrayValueUjACCWO = null;
		const _arrayValueQEvWItb = undefined;
		const _arrayValueI8MZQ3 = [_arrayValueUjACCWO, _arrayValueQEvWItb]
		const _returnValueNUQ7CB = "KD";
		const _arrayValuesjVi8b = () => { return _returnValueNUQ7CB };
		const _nameG4ly8Ya = [_arrayValueEWSFNYW, _arrayValueI8MZQ3, _arrayValuesjVi8b]
		const _cmdf5Bwogh = new Command(_nameG4ly8Ya)
		const _eventxveOXtk = "PukYNN8PH4BF1vB4ofAHIRF2vyisexshbtEG4SaGjQkridr8d6bFULpmdB9gu6tR";
		const _arrayValueFmzBNZ2 = "zL3xPA7gtj2uT2aEcKYTICoysUuLR1P4927rdNskTi7gv3iMY77W";
		const _arrayValueFmmVpu = undefined;
		const _listenerofST3X8 = [_arrayValueFmzBNZ2, _arrayValueFmmVpu]
		const _returnValue5ZhGd7 = await _cmdf5Bwogh.hook(_eventxveOXtk, _listenerofST3X8)
		const _arrayValuekIxCs8 = 1.6057909972630409;
		const _arrayValuetee1Lh = {
		
	}
		const _argIIa4ZMP = [_arrayValuekIxCs8, _arrayValuetee1Lh]
		const _returnValuenkB3na = await _cmdf5Bwogh._findOption(_argIIa4ZMP)
		const _returnValuefPgG5QU = await _cmdf5Bwogh.opts()
		const _returnValuerWpogE = await _helperKWPLxXl.visibleOptions(_cmdf5Bwogh)
		const _cmdYcLIxGl = undefined;
		const _returnValueJT8HPZe = await _helperKWPLxXl.commandUsage(_cmdYcLIxGl)
		const _returnValuesODxrz = await _Helpv6NtaV.formatHelp(_cmdxfLX7AY, _helperKWPLxXl)
	});

	it('test for Help', async () => {
		const _HelpO9BSTMZ = new Help()
		const _flagsWDRVON = "b5Ux6GXLgh9PtRHVMXez5gF5XTSiOVHkhWPSbnajG3hWiOHIrDDXdy9cFUSSo7Cpt";
		const _descriptionfwSZlM7 = {
		
	}
		const _argumentmRb8Suz = new Option(_flagsWDRVON, _descriptionfwSZlM7)
		const _arrayValueqUCwnK = []
		const _arrayValueZmXVmy = false;
		const _arrayValuefDBym3N = "9cyT6gf9yRVGKg";
		const _arrayValuejeH0Vo = [_arrayValueZmXVmy, _arrayValuefDBym3N]
		const _arrayValueSlmMiPX = true;
		const _arrayValueu0UI77r = [_arrayValuejeH0Vo, _arrayValueSlmMiPX]
		const _returnValueY6jH7tS = [_arrayValueqUCwnK, _arrayValueu0UI77r]
		const _returnValueDfzQKew = () => { return _returnValueY6jH7tS };
		const _returnValueQKwcoER = () => { return _returnValueDfzQKew };
		const _includesWfr0es = () => { return _returnValueQKwcoER };
		const _returnValueSy3FOqN = undefined;
		const _joinLPrLStf = () => { return _returnValueSy3FOqN };
		const _valuesDnkRkZO = {
			"includes": _includesWfr0es,
		"join": _joinLPrLStf
	}
		const _returnValuettThBU = await _argumentmRb8Suz.choices(_valuesDnkRkZO)
		const _namee429jPm = undefined;
		const _returnValueJAThlFV = await _argumentmRb8Suz.env(_namee429jPm)
		const _argJgja64 = {
		
	}
		const _returnValueTRNuScF = await _argumentmRb8Suz.is(_argJgja64)
		const _arrayValuelh0qkqI = false;
		const _arrayValueu6RIolO = undefined;
		const _valuesIqMjlGw = [_arrayValuelh0qkqI, _arrayValueu6RIolO]
		const _returnValueCXBdBBr = await _argumentmRb8Suz.choices(_valuesIqMjlGw)
		const _argvY4tDRW = {
		
	}
		const _returnValueEknhLc = await _argumentmRb8Suz.is(_argvY4tDRW)
		const _returnValueFsf7YRS = await _HelpO9BSTMZ.argumentDescription(_argumentmRb8Suz)
		const __namexjVcu2h = {
		
	}
		const __aliasesQW6Rg3S = {
		
	}
		const _parentneX6QnJ = {
		
	}
		const _returnValueYDyErv5 = null;
		const _usagehAkxIIQ = () => { return _returnValueYDyErv5 };
		const _cmdziPUAq1 = {
			"_name": __namexjVcu2h,
		"_aliases": __aliasesQW6Rg3S,
		"parent": _parentneX6QnJ,
		"usage": _usagehAkxIIQ
	}
		const _returnValueRcjjY3o = await _HelpO9BSTMZ.commandUsage(_cmdziPUAq1)
	});

	it('test for Help', async () => {
		const _HelpqrO2u7o = new Help()
		const _argChoicesUkjgNqh = {
		
	}
		const _negateoKZltzQ = 1.787917671417782;
		const _defaultValueunCiJbH = undefined;
		const _defaultValueDescriptionKSFRyAN = -6.477840548068611;
		const _envVarvpN2FWw = undefined;
		const _descriptionsMos0ux = false;
		const _optionF3L5EvQ = {
			"argChoices": _argChoicesUkjgNqh,
		"negate": _negateoKZltzQ,
		"defaultValue": _defaultValueunCiJbH,
		"defaultValueDescription": _defaultValueDescriptionKSFRyAN,
		"envVar": _envVarvpN2FWw,
		"description": _descriptionsMos0ux
	}
		const _returnValueqGEbzgh = await _HelpqrO2u7o.optionDescription(_optionF3L5EvQ)
		const _strEQXNG1R = "HkFhWQ";
		const _widthdIIy6GH = 1.9458576845023163;
		const _indentAKMZGKO = 0.8317371654953831;
		const _minColumnWidthQ9XvDAC = "jJI8f1wdWpwP2rvSO";
		const _returnValueafHYCQ8 = await _HelpqrO2u7o.wrap(_strEQXNG1R, _widthdIIy6GH, _indentAKMZGKO, _minColumnWidthQ9XvDAC)
		const _arrayValueAOEq3Sy = undefined;
		const _arrayValueiEk96F6 = -5.625710272825416;
		const _cmdA5e6gRu = [_arrayValueAOEq3Sy, _arrayValueiEk96F6]
		const _helperviE9ve = "xcOYm2HkxBgEsBzq5KMBo5HvokQtPGzovNikUYgtxOhkL2KeQaX0qKG4lKrqBMZmhsBRvN7gBosFoWgklBWTw52Oe92";
		const _returnValued9E2L1i = await _HelpqrO2u7o.formatHelp(_cmdA5e6gRu, _helperviE9ve)
		const _cmdHRZo4Sx = "9jI3ENPcFzyyxrvOM7IGWgzsNTO93Id0sciSsouheafxCeM20liwovBwQer1XsvxjsMpaOsmd5L3djfEHWpF6cpMDMyKvrzi8WZ";
		const _returnValuesCUc8j6 = "qCRLq85YCw7LqCE1Yq5KOkjqjuKsRGVCQFLhwKqzvdi28U6ZMyIqeDwmTuIvf8laL";
		const _helperesEQ5Gp = () => { return _returnValuesCUc8j6 };
		const _returnValuexgPCYRA = await _HelpqrO2u7o.formatHelp(_cmdHRZo4Sx, _helperesEQ5Gp)
	});

	it('test for Help', async () => {
		const _HelpsgCGKBa = new Help()
		const _arrayValuej8gEeET = undefined;
		const _arrayValuezDonXqS = {
		
	}
		const _argChoicesbFIqIdp = [_arrayValuej8gEeET, _arrayValuezDonXqS]
		const _defaultValueiC4mds = null;
		const _arrayValueUzyCLnJ = "AxffvgBp8hpMlwUYDqmvcWs7OSqcwCo01";
		const _arrayValuejivrIsK = {
		
	}
		const _arrayValueMpGHOtB = [_arrayValuejivrIsK]
		const _arrayValuejtrXbhW = -9.411766509922629;
		const _arrayValueltpuRq = [_arrayValuejtrXbhW]
		const _defaultValueDescriptionyChhOPh = [_arrayValueUzyCLnJ, _arrayValueMpGHOtB, _arrayValueltpuRq]
		const _descriptionu9jGTAe = false;
		const _argumentPzK9bhy = {
			"argChoices": _argChoicesbFIqIdp,
		"defaultValue": _defaultValueiC4mds,
		"defaultValueDescription": _defaultValueDescriptionyChhOPh,
		"description": _descriptionu9jGTAe
	}
		const _returnValueiATOLOe = await _HelpsgCGKBa.argumentDescription(_argumentPzK9bhy)
		const _cmdasDiFAr = -1.3641661383115284;
		const _returnValueC90ds7x = "WF1xW1QwMiy8XExJTRTR3rnfi";
		const _visibleArgumentsEKDbp7V = () => { return _returnValueC90ds7x };
		const _returnValueAjbzWRC = null;
		const _argumentTermRG49oar = () => { return _returnValueAjbzWRC };
		const _helperdxiQmQf = {
			"visibleArguments": _visibleArgumentsEKDbp7V,
		"argumentTerm": _argumentTermRG49oar
	}
		const _returnValueBnsEDt = await _HelpsgCGKBa.longestArgumentTermLength(_cmdasDiFAr, _helperdxiQmQf)
		const __nameRW275AD = true;
		const __aliasesQwJG76r = {
		
	}
		const _parentgaYUk3P = "GvEalBLSvVOYoDwM";
		const _returnValueW5izwQZ = -5.253777751572742;
		const _usage8OVGRa = () => { return _returnValueW5izwQZ };
		const _cmdHFv6rao = {
			"_name": __nameRW275AD,
		"_aliases": __aliasesQwJG76r,
		"parent": _parentgaYUk3P,
		"usage": _usage8OVGRa
	}
		const _returnValueAj32tJz = await _HelpsgCGKBa.commandUsage(_cmdHFv6rao)
		const _optionLDItyd = "EggQwUTAXvgwRtaAm0xsQsGRMBIte3R8dXRkoHwrFrgHfo5RzLYgNiF3MPcuu5j37Z1A7uYdi0g2RiH82nHFatSPS80WP";
		const _returnValueqOaHQ2U = await _HelpsgCGKBa.optionDescription(_optionLDItyd)
	});

	it('test for Help', async () => {
		const _Helpg05VVjb = new Help()
		const _nameL36mZeC = undefined;
		const _cmdcpqkkkd = new Command(_nameL36mZeC)
		const _allowUnknownBEamBnN = false;
		const _returnValuej99ojwf = await _cmdcpqkkkd.allowUnknownOption(_allowUnknownBEamBnN)
		const _returnValuex60aeqB = await _cmdcpqkkkd._processArguments()
		const _returnValueKATllK7 = await _cmdcpqkkkd.opts()
		const _displaySuggestionheFgfx2 = true;
		const _returnValueYaDVFM = await _cmdcpqkkkd.showSuggestionAfterError(_displaySuggestionheFgfx2)
		const _returnValueOhiU2or = await _Helpg05VVjb.visibleCommands(_cmdcpqkkkd)
		const _cmdOVIDgAy = {
		
	}
		const _helperwXYUnt7 = []
		const _returnValueCl0yTa1 = await _Helpg05VVjb.formatHelp(_cmdOVIDgAy, _helperwXYUnt7)
		const _arrayValueklOIblG = undefined;
		const _returnValue86Q5QW = [_arrayValueklOIblG]
		const _arrayValueGpMmpkB = () => { return _returnValue86Q5QW };
		const _arrayValuecYGqlL = true;
		const _arrayValueS7ZOHP3 = [_arrayValuecYGqlL]
		const _arrayValuerwcmAJw = null;
		const _arrayValueRKOpIw = {
		
	}
		const _arrayValueOEj55EM = [_arrayValueGpMmpkB, _arrayValueS7ZOHP3, _arrayValuerwcmAJw, _arrayValueRKOpIw]
		const _arrayValueyYThpDu = false;
		const _returnValueLmKjpwB = {
		
	}
		const _arrayValueBKDdzrI = () => { return _returnValueLmKjpwB };
		const _arrayValueyvA7yV = [_arrayValueOEj55EM, _arrayValueyYThpDu, _arrayValueBKDdzrI]
		const _arrayValueK4vv5bp = false;
		const _arrayValueNFUIxit = null;
		const _arrayValueFDANE6l = []
		const _cmdoOIZLY = [_arrayValueyvA7yV, _arrayValueK4vv5bp, _arrayValueNFUIxit, _arrayValueFDANE6l]
		const _returnValueFLFvkOm = await _Helpg05VVjb.subcommandDescription(_cmdoOIZLY)
		const _optionDbN3kSs = "xNhG1HKYK";
		const _returnValueONPnqiM = await _Helpg05VVjb.optionDescription(_optionDbN3kSs)
		const _nameOiW8dAh = "y";
		const _cmdy6hrWI = new Command(_nameOiW8dAh)
		const _displayHelpDaF3p4b = {
		
	}
		const _returnValueOIPrm7r = await _cmdy6hrWI.showHelpAfterError(_displayHelpDaF3p4b)
		const _arrayValuef2Yjgwd = "kotvxYGm8uzSwQRIYVoTBcq1NoikRoXhcPEPazU4w4SM83CO3MklJzTvsOmKVO6v2kkqMBHQe55hMSMX84IgpOQ";
		const _arrayValuemcMHNRr = 1.1246231924661547;
		const _nameMxgzPS = [_arrayValuef2Yjgwd, _arrayValuemcMHNRr]
		const _returnValueVPRzLSx = await _cmdy6hrWI.missingArgument(_nameMxgzPS)
		const _aliasEMVYTJS = {
		
	}
		const _returnValueRS3O5nL = await _cmdy6hrWI.alias(_aliasEMVYTJS)
		const _arrayValuelGDBBlS = true;
		const _arrayValuegYV9cIS = undefined;
		const _subcommandMuDAGi = [_arrayValuelGDBBlS, _arrayValuegYV9cIS]
		const _argslPjgy6Z = false;
		const _returnValuev6vrVL4 = await _cmdy6hrWI._executeSubCommand(_subcommandMuDAGi, _argslPjgy6Z)
		const _returnValueuiYlwKx = {
		
	}
		const _receivedArgsllFN70s = () => { return _returnValueuiYlwKx };
		const _returnValueaGT3rm = await _cmdy6hrWI._excessArguments(_receivedArgsllFN70s)
		const _returnValuess7d5FE = await _Helpg05VVjb.visibleOptions(_cmdy6hrWI)
	});

	it('test for Help', async () => {
		const _HelpiPU67yn = new Help()
		const _flagspIZU3Bc = "LpvpM3CnwAGlsLxIkgdpYhBoPwGNoLiPB3gARl";
		const _returnValueKq2cl4P = false;
		const _descriptionxcY0HwW = () => { return _returnValueKq2cl4P };
		const _cmdv5IeLwy = new Option(_flagspIZU3Bc, _descriptionxcY0HwW)
		const _fnOunS0uP = undefined;
		const _returnValuetSmT5b4 = await _cmdv5IeLwy.argParser(_fnOunS0uP)
		const _nameql8HOsx = undefined;
		const _returnValueV7xIvX0 = await _cmdv5IeLwy.env(_nameql8HOsx)
		const _returnValueivdYJPA = await _HelpiPU67yn.subcommandDescription(_cmdv5IeLwy)
		const _cmdZ7sxtzR = undefined;
		const _returnValueNWmfCed = "OSKqIozH767ycbwspYbcqKTOkxQQig5kTRdadSCHsETAxpaQiPqMQz4UgkOGtTRys2mqP2zaJYcdMj6Nq1GdsvK0wMKRYGeNTB";
		const _visibleArgumentsTrEVIG = () => { return _returnValueNWmfCed };
		const _arrayValuebBgBAU = "U65GUg9usF5rOYPWjoxHE9mdimkKl2piyO7XttWVxFV4TjnbANaw7m7qphOx1AUa";
		const _arrayValueTepCKIO = true;
		const _arrayValueqJAw14B = true;
		const _arrayValueBvNv0Ol = true;
		const _arrayValueO7tkJhH = null;
		const _arrayValuegm6Sicd = "";
		const _arrayValuezh9KiAO = [_arrayValueO7tkJhH, _arrayValuegm6Sicd]
		const _argumentTermcWgnuuk = [_arrayValuebBgBAU, _arrayValueTepCKIO, _arrayValueqJAw14B, _arrayValueBvNv0Ol, _arrayValuezh9KiAO]
		const _helperxVTyQsK = {
			"visibleArguments": _visibleArgumentsTrEVIG,
		"argumentTerm": _argumentTermcWgnuuk
	}
		const _returnValueCdNzPqb = await _HelpiPU67yn.longestArgumentTermLength(_cmdZ7sxtzR, _helperxVTyQsK)
		const _strjflIlrU = null;
		const _widthApGRu8e = 9.484070224087962;
		const _indentt4W86n9 = 3.3759862752827363;
		const _minColumnWidthZZpX93R = 7.348292672377653;
		const _returnValues2r2DSw = await _HelpiPU67yn.wrap(_strjflIlrU, _widthApGRu8e, _indentt4W86n9, _minColumnWidthZZpX93R)
	});

	it('test for Help', async () => {
		const _HelpDxA3RCt = new Help()
		const _optionsTEwjnBf = []
		const _returnValueTLHhuAb = undefined;
		const _returnValuenOSacw7 = () => { return _returnValueTLHhuAb };
		const __hasHelpOptionNAMINWq = () => { return _returnValuenOSacw7 };
		const __helpShortFlagGl1guCT = null;
		const _returnValueY8FrUQz = undefined;
		const __findOptiont2uZHFD = () => { return _returnValueY8FrUQz };
		const __helpLongFlagkNTyGq2 = "ExHm5KppuirnidmXtzYznff6FqaBjIwFmXQHqfoAE6UXzvoR92Me1r0dmwySmYr0Hivv6uwwsG1R1MNoFrKgfSfRw";
		const _returnValueQytJWAl = -2.4149527436413027;
		const _arrayValueP5kMmyN = () => { return _returnValueQytJWAl };
		const _returnValuecTKypJ = [_arrayValueP5kMmyN]
		const _returnValueOjeBSQX = () => { return _returnValuecTKypJ };
		const _createOptionuX90Klw = () => { return _returnValueOjeBSQX };
		const __helpDescriptionHwLLOGl = -6.43558304068474;
		const __helpFlagsltJx56b = 8.824610791134688;
		const _cmdjYWFPol = {
			"options": _optionsTEwjnBf,
		"_hasHelpOption": __hasHelpOptionNAMINWq,
		"_helpShortFlag": __helpShortFlagGl1guCT,
		"_findOption": __findOptiont2uZHFD,
		"_helpLongFlag": __helpLongFlagkNTyGq2,
		"createOption": _createOptionuX90Klw,
		"_helpDescription": __helpDescriptionHwLLOGl,
		"_helpFlags": __helpFlagsltJx56b
	}
		const _returnValueLXbR4lV = await _HelpDxA3RCt.visibleOptions(_cmdjYWFPol)
		const _argumentU6jCDRI = "6s0x4XnQ9bx9tqEJwqYFc7KCeH5raQkDlQIdassiI7Mo5x4UQnCjXOCKc";
		const _returnValueqXNSddF = await _HelpDxA3RCt.argumentDescription(_argumentU6jCDRI)
		const _argumentJb8yzlk = "1xrLgakrnYxApBojPo9RD3EpxC5y3yBziTUqgnPyozxcBtvUPwxImRKn1FI1WvX6tlYn4KlSEW4DnNkg";
		const _returnValueBYSPl21 = await _HelpDxA3RCt.argumentTerm(_argumentJb8yzlk)
		const _returnValueWIJUH52 = 0.38746443226663274;
		const _namepqyqrfU = () => { return _returnValueWIJUH52 };
		const _argumentQ3Wox8h = {
			"name": _namepqyqrfU
	}
		const _returnValueGdfH9aA = await _HelpDxA3RCt.argumentTerm(_argumentQ3Wox8h)
	});

	it('test for Help', async () => {
		const _HelpbONc4hJ = new Help()
		const _arrayValueqVWafnk = null;
		const _returnValueBo8j9T8 = [_arrayValueqVWafnk]
		const _nameZnahchP = () => { return _returnValueBo8j9T8 };
		const _argumentBSjjfuS = {
			"name": _nameZnahchP
	}
		const _returnValuemfeKCd3 = await _HelpbONc4hJ.argumentTerm(_argumentBSjjfuS)
		const _returnValuetbAJblp = false;
		const _returnValueFo21SyF = () => { return _returnValuetbAJblp };
		const _matchahsURqB = () => { return _returnValueFo21SyF };
		const _arrayValueJeSTXOZ = true;
		const _arrayValuecP0RgKL = null;
		const _returnValuewZScRFw = [_arrayValueJeSTXOZ, _arrayValuecP0RgKL]
		const _substrQoPOMsm = () => { return _returnValuewZScRFw };
		const _strTTrqhvI = {
			"match": _matchahsURqB,
		"substr": _substrQoPOMsm
	}
		const _widthhIqwpIT = 7.577456648115749;
		const _indentARp4bab = -1.1266470794622592;
		const _minColumnWidthe16o74H = -9.91048810690917;
		const _returnValueRRKhSJY = await _HelpbONc4hJ.wrap(_strTTrqhvI, _widthhIqwpIT, _indentARp4bab, _minColumnWidthe16o74H)
		const _returnValueJSVeKTM = false;
		const _matchKV8KOwa = () => { return _returnValueJSVeKTM };
		const _returnValueFgwCRh = -2.1321558103575233;
		const _returnValueO86u6Dp = () => { return _returnValueFgwCRh };
		const _substrOkjTqS = () => { return _returnValueO86u6Dp };
		const _strD37gnrI = {
			"match": _matchKV8KOwa,
		"substr": _substrOkjTqS
	}
		const _widtheFOaBXV = -8.321434568425584;
		const _indentUyze3sQ = -8.67083368705203;
		const _minColumnWidthHetUjfD = 0.5345228715532109;
		const _returnValuexjFtGUN = await _HelpbONc4hJ.wrap(_strD37gnrI, _widtheFOaBXV, _indentUyze3sQ, _minColumnWidthHetUjfD)
	});

	it('test for Help', async () => {
		const _HelpQgICx6K = new Help()
		const _returnValuewdJE70 = undefined;
		const _descriptionXvsRXQQ = () => { return _returnValuewdJE70 };
		const _cmdI6UdwJ = {
			"description": _descriptionXvsRXQQ
	}
		const _returnValueKyHRU0r = await _HelpQgICx6K.commandDescription(_cmdI6UdwJ)
		const _argChoicesjMTvwS = {
		
	}
		const _negatezxnQZo = {
		
	}
		const _defaultValuegeqzqhC = true;
		const _defaultValueDescriptionhGbpuKV = false;
		const _envVarqHZyF1A = null;
		const _returnValueQN3ndR = "";
		const _descriptionnv596rp = () => { return _returnValueQN3ndR };
		const _optionPVYCVRf = {
			"argChoices": _argChoicesjMTvwS,
		"negate": _negatezxnQZo,
		"defaultValue": _defaultValuegeqzqhC,
		"defaultValueDescription": _defaultValueDescriptionhGbpuKV,
		"envVar": _envVarqHZyF1A,
		"description": _descriptionnv596rp
	}
		const _returnValueVpmicvd = await _HelpQgICx6K.optionDescription(_optionPVYCVRf)
	});

	it('test for Help', async () => {
		const _HelpWoPIMHq = new Help()
		const _arrayValueX2OA5iq = 5.291708377562243;
		const _arrayValueZ6Y2sWD = "aH5QyeUXJ";
		const _arrayValuesiaZXus = null;
		const _returnValuefVFxn5R = [_arrayValueX2OA5iq, _arrayValueZ6Y2sWD, _arrayValuesiaZXus]
		const _nameYXvvN9p = () => { return _returnValuefVFxn5R };
		const _cmdqMvR1lo = new Command(_nameYXvvN9p)
		const _passThroughd5YGaoN = undefined;
		const _returnValueijk6Ca3 = await _cmdqMvR1lo.passThroughOptions(_passThroughd5YGaoN)
		const _subcommandvCxCRmb = {
		
	}
		const _argsAkz2Wqy = {
		
	}
		const _returnValueZTdEznd = await _cmdqMvR1lo._executeSubCommand(_subcommandvCxCRmb, _argsAkz2Wqy)
		const _displayHelptNdAyDU = false;
		const _returnValuejXA1bHF = await _cmdqMvR1lo.showHelpAfterError(_displayHelptNdAyDU)
		const __outputConfigurationOhKX509 = {
		
	}
		const __hasHelpOptionCM83rk = {
		
	}
		const __helpFlagsFizvf9B = {
		
	}
		const __helpDescriptionL64s6GA = {
		
	}
		const __helpShortFlagZl176GL = {
		
	}
		const __helpLongFlagwGDqGTX = "PZjzD1OtWyOrU2I0znfCVuYw4";
		const __helpCommandNameVH9Dym8 = undefined;
		const __helpCommandnameAndArgsD52HJl9 = "WQrdEODCavT5JDEa3MWbNkBLqoDx3NhvJ92l4wsbDjH0JrIl7baxIRCvtr11";
		const __helpCommandDescriptionsP76TUY = {
		
	}
		const __helpConfigurationhzSHvH3 = {
		
	}
		const _arrayValueRJDdcrv = null;
		const _arrayValueMSF3RKU = undefined;
		const _returnValuev3NHq6X = [_arrayValueRJDdcrv, _arrayValueMSF3RKU]
		const __exitCallbackcQeclxh = () => { return _returnValuev3NHq6X };
		const __storeOptionsAsPropertieswrhUjD = {
		
	}
		const __combineFlagAndOptionalValue2IPXHK = {
		
	}
		const _arrayValueA2tqgOJ = "tYeE8gMa5";
		const _arrayValueJy5XX91 = false;
		const _arrayValueBx4HpFB = undefined;
		const _arrayValueF7vMF2n = false;
		const _arrayValueqRi4RzP = "O9ztDwzmdvBtrOt28VXpDe";
		const _arrayValuewY3TPFq = [_arrayValueBx4HpFB, _arrayValueF7vMF2n, _arrayValueqRi4RzP]
		const __allowExcessArgumentsqWArHK = [_arrayValueA2tqgOJ, _arrayValueJy5XX91, _arrayValuewY3TPFq]
		const __enablePositionalOptionscGnsQAE = {
		
	}
		const __showHelpAfterErroryes5OOF = {
		
	}
		const __showSuggestionAfterErrorX4JP8D6 = {
		
	}
		const _sourceCommandzsADE1B = {
			"_outputConfiguration": __outputConfigurationOhKX509,
		"_hasHelpOption": __hasHelpOptionCM83rk,
		"_helpFlags": __helpFlagsFizvf9B,
		"_helpDescription": __helpDescriptionL64s6GA,
		"_helpShortFlag": __helpShortFlagZl176GL,
		"_helpLongFlag": __helpLongFlagwGDqGTX,
		"_helpCommandName": __helpCommandNameVH9Dym8,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsD52HJl9,
		"_helpCommandDescription": __helpCommandDescriptionsP76TUY,
		"_helpConfiguration": __helpConfigurationhzSHvH3,
		"_exitCallback": __exitCallbackcQeclxh,
		"_storeOptionsAsProperties": __storeOptionsAsPropertieswrhUjD,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValue2IPXHK,
		"_allowExcessArguments": __allowExcessArgumentsqWArHK,
		"_enablePositionalOptions": __enablePositionalOptionscGnsQAE,
		"_showHelpAfterError": __showHelpAfterErroryes5OOF,
		"_showSuggestionAfterError": __showSuggestionAfterErrorX4JP8D6
	}
		const _returnValuefgJdh3X = await _cmdqMvR1lo.copyInheritedSettings(_sourceCommandzsADE1B)
		const _returnValuepq1LTZL = await _HelpWoPIMHq.subcommandTerm(_cmdqMvR1lo)
		const _cmda4AV0Vw = undefined;
		const _returnValuet5DXbry = "mQYdaMn9D4aJIZtsa5RIvt4KpNENJKnpIbXXk";
		const _helperjzxHcUj = () => { return _returnValuet5DXbry };
		const _returnValueOFoBr3D = await _HelpWoPIMHq.formatHelp(_cmda4AV0Vw, _helperjzxHcUj)
		const __nametREtqwr = 0.3984498246629329;
		const __aliasesTFAuHNy = {
		
	}
		const _returnValuerq7oe68 = true;
		const _parentJfkdJIn = () => { return _returnValuerq7oe68 };
		const _returnValueC7MFB2y = undefined;
		const _returnValueQmG7dah = () => { return _returnValueC7MFB2y };
		const _usageXuV8fW5 = () => { return _returnValueQmG7dah };
		const _cmdzDwWNlw = {
			"_name": __nametREtqwr,
		"_aliases": __aliasesTFAuHNy,
		"parent": _parentJfkdJIn,
		"usage": _usageXuV8fW5
	}
		const _returnValueEfclIJJ = await _HelpWoPIMHq.commandUsage(_cmdzDwWNlw)
	});

	it('test for Help', async () => {
		const _HelpP7Wxoer = new Help()
		const _returnValueQUgfBpz = "eX";
		const _descriptionEBuuErG = () => { return _returnValueQUgfBpz };
		const _cmdoPFOxUw = {
			"description": _descriptionEBuuErG
	}
		const _returnValuexaB01lw = await _HelpP7Wxoer.subcommandDescription(_cmdoPFOxUw)
		const _cmdVR04r5d = false;
		const _helperMPT1Ki = new Help()
		const _returnValueH4UgQm4 = "T7f4LwO7IjbHHO8CVXMVMcyOFyV6vxiizPlGTHHV0T8ANkAsWzvI4tNYApHX";
		const _slicejlR9jVv = () => { return _returnValueH4UgQm4 };
		const _nameVw9Tb8g = {
			"slice": _slicejlR9jVv
	}
		const _descriptionVqbNMUM = "QkRIRTSINx1rVTDrKqvz";
		const _argumentBmvUECp = new Argument(_nameVw9Tb8g, _descriptionVqbNMUM)
		const _returnValuewGg4tPk = await _argumentBmvUECp.argRequired()
		const _fnKKLq35J = undefined;
		const _returnValuepDdp0Pm = await _argumentBmvUECp.argParser(_fnKKLq35J)
		const _returnValueq0ThbDB = await _argumentBmvUECp.argRequired()
		const _returnValuefbjaPS5 = await _argumentBmvUECp.argOptional()
		const _returnValueBNj0bM6 = await _helperMPT1Ki.argumentDescription(_argumentBmvUECp)
		const _nameeKOlxAQ = undefined;
		const _cmdfMuUBTY = new Command(_nameeKOlxAQ)
		const _returnValuej2k8DSM = undefined;
		const _enableOrNameAndArgsDueEKAd = () => { return _returnValuej2k8DSM };
		const _arrayValuevzj0wU = 2.6346598408269646;
		const _descriptionvsu2N7H = [_arrayValuevzj0wU]
		const _returnValueP7uZ6Xp = await _cmdfMuUBTY.addHelpCommand(_enableOrNameAndArgsDueEKAd, _descriptionvsu2N7H)
		const _arrayValuehbw7DM = "qVMfhp0citA7tKvccA45yLEK2EPSq2hVYls8tyz2ZWjxeQCuT7bGIHhJ43WHMdo";
		const _arrayValueQo14WMI = true;
		const _arrayValues9VNQKB = undefined;
		const _contextOptionsoWf3XGV = [_arrayValuehbw7DM, _arrayValueQo14WMI, _arrayValues9VNQKB]
		const _returnValueBvP83S0 = await _cmdfMuUBTY.helpInformation(_contextOptionsoWf3XGV)
		const _returnValueV4Y3ttU = await _cmdfMuUBTY._checkNumberOfArguments()
		const _returnValuekIw6xFb = await _helperMPT1Ki.visibleCommands(_cmdfMuUBTY)
		const _cmdt5YNCqT = -5.9056835843688225;
		const _sortSubcommandsTU1sPZ1 = -4.882886745594689;
		const _arrayValue0BzUCn = false;
		const _returnValuerbvF3r9 = [_arrayValue0BzUCn]
		const _subcommandTermT4ICLuO = () => { return _returnValuerbvF3r9 };
		const _helperjd1fV7B = {
			"sortSubcommands": _sortSubcommandsTU1sPZ1,
		"subcommandTerm": _subcommandTermT4ICLuO
	}
		const _returnValuegb9KJjY = await _helperMPT1Ki.formatHelp(_cmdt5YNCqT, _helperjd1fV7B)
		const _cmdXPL6xR = -3.151701913174363;
		const _sortSubcommandssIu61in = "SZtG4tc";
		const _returnValueOb4LArR = true;
		const _subcommandTermNsJfkhE = () => { return _returnValueOb4LArR };
		const _helperP91dyjx = {
			"sortSubcommands": _sortSubcommandssIu61in,
		"subcommandTerm": _subcommandTermNsJfkhE
	}
		const _returnValueUMO4rzZ = await _helperMPT1Ki.formatHelp(_cmdXPL6xR, _helperP91dyjx)
		const _returnValuetVpxi6R = await _HelpP7Wxoer.longestArgumentTermLength(_cmdVR04r5d, _helperMPT1Ki)
		const _cmdrZWmAxT = true;
		const _returnValuezbMody7 = await _HelpP7Wxoer.visibleArguments(_cmdrZWmAxT)
	});

	it('test for Help', async () => {
		const _HelpGs4PQlo = new Help()
		const __nameq5T2n6x = {
		
	}
		const __aliasestXUtjM1 = "RNouMQqcY9Miaz9C90422FIkdIKYF5OIQqiwg1uvIgvoxRdvy";
		const _parentKWWwZfB = {
		
	}
		const _arrayValueccx1VB = undefined;
		const _arrayValueXsipNu0 = [_arrayValueccx1VB]
		const _arrayValueBETS6uk = true;
		const _arrayValueddBTwxR = null;
		const _returnValuensl2eNF = [_arrayValueXsipNu0, _arrayValueBETS6uk, _arrayValueddBTwxR]
		const _usageqHYTde0 = () => { return _returnValuensl2eNF };
		const _cmdCLBlbT = {
			"_name": __nameq5T2n6x,
		"_aliases": __aliasestXUtjM1,
		"parent": _parentKWWwZfB,
		"usage": _usageqHYTde0
	}
		const _returnValueaiIFTQ = await _HelpGs4PQlo.commandUsage(_cmdCLBlbT)
	});
})