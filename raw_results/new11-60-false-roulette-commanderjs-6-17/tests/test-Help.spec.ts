export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpoNg2Hm3 = new Help()
		const __argsDescriptionCpq3VhS = {
		
	}
		const __argsWvfYKPd = {
		
	}
		const _cmdRHkLHy6 = {
			"_argsDescription": __argsDescriptionCpq3VhS,
		"_args": __argsWvfYKPd
	}
		const _returnValuen4rNeKM = await _HelpoNg2Hm3.visibleArguments(_cmdRHkLHy6)
	});

	it('test for Help', async () => {
		const _HelpY5WobRT = new Help()
		const _cmdB5tDtet = {
		
	}
		const _helpertiKeoa1 = new Help()
		const _arrayValueqIbwg22 = "hCznrBWBx";
		const _arrayValueZf2caCY = undefined;
		const _flagsuz4OAkl = [_arrayValueqIbwg22, _arrayValueZf2caCY]
		const _options6mNCi = {
			"flags": _flagsuz4OAkl
	}
		const _returnValuezd6etbL = await _helpertiKeoa1.optionTerm(_options6mNCi)
		const _cmdr5OK1TV = false;
		const _helperognuH8T = new Help()
		const _arrayValueph74Vk4 = false;
		const _arrayValueJpAZEhJ = false;
		const _cmdT2cLzm4 = [_arrayValueph74Vk4, _arrayValueJpAZEhJ]
		const _returnValueDQKxmnz = await _helperognuH8T.commandUsage(_cmdT2cLzm4)
		const _argumentnuy7JEk = "Fn1Yl4esRXLXFT9Xwd85QxaknqLsJEtQtzJ5Ssm8kTC2JU7krPiK7KjNqm0tj2EL88AXVGjwngugK";
		const _returnValue4K7m6l = await _helperognuH8T.argumentDescription(_argumentnuy7JEk)
		const _cmdLbc40i = "HBb2";
		const _returnValueXR4tJ6 = await _helperognuH8T.visibleOptions(_cmdLbc40i)
		const _cmdpSOi0r0 = null;
		const _arrayValueF9ramie = undefined;
		const _arrayValuexqPI1jP = {
		
	}
		const _arrayValueOGpevI = 5.395411961988781;
		const _returnValueCsS1fLW = undefined;
		const _arrayValuerI3PHFc = () => { return _returnValueCsS1fLW };
		const _arrayValuekOL1U0T = false;
		const _arrayValueK7JY0H = true;
		const _arrayValuePC0TQ9P = []
		const _arrayValuecdE0KcR = [_arrayValuePC0TQ9P]
		const _arrayValueo4MXSKR = [_arrayValuekOL1U0T, _arrayValueK7JY0H, _arrayValuecdE0KcR]
		const _arrayValueCqr5eP = "ynl5BtEVB3OmI4etIq5khjkOPdonvnCzGmSWQRyArpVPcJri5hIFYXZds1ByIAw6rCabipma1XOD9YqdLnWtbp7Z1Ips1J";
		const _arrayValuerGudyxH = "9P4VGBzbfi6F6m7YvJ52gOBIqWXh9dJAMuWJ";
		const _returnValuePKRjTOQ = true;
		const _arrayValueNFik65F = () => { return _returnValuePKRjTOQ };
		const _arrayValue36BMzf = [_arrayValueCqr5eP, _arrayValuerGudyxH, _arrayValueNFik65F]
		const _arrayValueDKAdM2C = [_arrayValuerI3PHFc, _arrayValueo4MXSKR, _arrayValue36BMzf]
		const _arrayValueqTpMaz = 8.425744470250507;
		const _arrayValuezbxL91h = [_arrayValueF9ramie, _arrayValuexqPI1jP, _arrayValueOGpevI, _arrayValueDKAdM2C, _arrayValueqTpMaz]
		const _arrayValuel9YEV3 = undefined;
		const _arrayValuelPo9C3 = undefined;
		const _arrayValueIGH5bOP = undefined;
		const _arrayValueL1ZG1TL = [_arrayValuezbxL91h, _arrayValuel9YEV3, _arrayValuelPo9C3, _arrayValueIGH5bOP]
		const _arrayValueyJ8vGl4 = true;
		const _arrayValuerTIEs7C = null;
		const _helpere0nRSPT = [_arrayValueL1ZG1TL, _arrayValueyJ8vGl4, _arrayValuerTIEs7C]
		const _returnValueTIKoG0I = await _helperognuH8T.longestOptionTermLength(_cmdpSOi0r0, _helpere0nRSPT)
		const _returnValueKJCxTW6 = await _helpertiKeoa1.longestArgumentTermLength(_cmdr5OK1TV, _helperognuH8T)
		const _arrayValueikHXUC = 3.9508206531252466;
		const _arrayValuehD2WVtc = null;
		const _argumentS2K7fl = [_arrayValueikHXUC, _arrayValuehD2WVtc]
		const _returnValueP9Z9vcA = await _helpertiKeoa1.argumentDescription(_argumentS2K7fl)
		const _cmdvp6ZQrX = undefined;
		const _helperRmKS6qy = []
		const _returnValues3GeIGZ = await _helpertiKeoa1.longestArgumentTermLength(_cmdvp6ZQrX, _helperRmKS6qy)
		const _returnValueh0rvBLA = await _HelpY5WobRT.longestSubcommandTermLength(_cmdB5tDtet, _helpertiKeoa1)
		const _returnValueFoKAm6l = false;
		const _includesRenHVDo = () => { return _returnValueFoKAm6l };
		const _flagsCEX8sgh = {
			"includes": _includesRenHVDo
	}
		const _descriptionb3Hf6r = "HEYcdpYKriniQ122kYRRF";
		const _optiondGOz0w6 = new Option(_flagsCEX8sgh, _descriptionb3Hf6r)
		const _valuegzzOV6Z = null;
		const _previouss3LOTJr = "uQ5RzPYwUu8mUtIIt1qR";
		const _returnValueKN8L2yT = await _optiondGOz0w6._concatValue(_valuegzzOV6Z, _previouss3LOTJr)
		const _includesdkuCPm5 = undefined;
		const _returnValueqnhpqED = "KoHYexPXqKeYgSIwANHez5";
		const _joinqslYanh = () => { return _returnValueqnhpqED };
		const _values8YJapf = {
			"includes": _includesdkuCPm5,
		"join": _joinqslYanh
	}
		const _returnValuecDPfcb = await _optiondGOz0w6.choices(_values8YJapf)
		const _mandatorytb37k2x = false;
		const _returnValueG6djG9 = await _optiondGOz0w6.makeOptionMandatory(_mandatorytb37k2x)
		const _returnValueUjpDW2U = await _HelpY5WobRT.optionTerm(_optiondGOz0w6)
	});

	it('test for Help', async () => {
		const _HelpuNFiQdE = new Help()
		const _returnValueoXZ07Gi = null;
		const _cmdLstlmn3 = () => { return _returnValueoXZ07Gi };
		const _returnValueTduiu4E = await _HelpuNFiQdE.visibleOptions(_cmdLstlmn3)
		const _cmdWnQ1tTZ = {
		
	}
		const _sortSubcommandsRtr67qW = undefined;
		const _returnValueq8Z5mh = false;
		const _subcommandTermp2fK9iN = () => { return _returnValueq8Z5mh };
		const _helperYJHvtt2 = {
			"sortSubcommands": _sortSubcommandsRtr67qW,
		"subcommandTerm": _subcommandTermp2fK9iN
	}
		const _returnValueIQ8eL8 = await _HelpuNFiQdE.longestSubcommandTermLength(_cmdWnQ1tTZ, _helperYJHvtt2)
		const _arrayValuejnLyJD5 = "42cmOy7on45dcQpe6tAx8MDUvcWUVdO4m48LvNt";
		const _namer8hhUzN = [_arrayValuejnLyJD5]
		const _descriptionwm2QMb = false;
		const _cmdJAqeJy = new Argument(_namer8hhUzN, _descriptionwm2QMb)
		const _returnValueNryHHle = await _cmdJAqeJy.argOptional()
		const _valuesZp0SD = "xcCWDLKz07xNIu";
		const _descriptionq9F1eaj = undefined;
		const _returnValueX7TXtcp = await _cmdJAqeJy.default(_valuesZp0SD, _descriptionq9F1eaj)
		const _returnValuegCq3K0g = await _HelpuNFiQdE.subcommandDescription(_cmdJAqeJy)
		const __argsOCoYFRi = {
		
	}
		const __namervpceLD = 1.68430790590633;
		const __aliasessZALEgk = {
		
	}
		const _optionstVyjsMn = {
		
	}
		const _cmdqhlWs1b = {
			"_args": __argsOCoYFRi,
		"_name": __namervpceLD,
		"_aliases": __aliasessZALEgk,
		"options": _optionstVyjsMn
	}
		const _returnValuew1I1Ppg = await _HelpuNFiQdE.subcommandTerm(_cmdqhlWs1b)
	});

	it('test for Help', async () => {
		const _HelpW6Cll4v = new Help()
		const _strPU2w1hu = "4dATpXWg8";
		const _widthB7NEWf5 = -2.416296836692978;
		const _indentIVAo2cA = -1.5047191786910101;
		const _minColumnWidth2hrJus = 3.445108617140054;
		const _returnValueZT45EYA = await _HelpW6Cll4v.wrap(_strPU2w1hu, _widthB7NEWf5, _indentIVAo2cA, _minColumnWidth2hrJus)
		const _arrayValuemtNqgEA = {
		
	}
		const _arrayValueXcVfBC = "y4VXUJnsiEuKVyOcFOQmJ6xKcQsCz3rYySExglPwaHablJRjzjwLQY5XSa11WRzEYpyD";
		const _argumenta4AjHjB = [_arrayValuemtNqgEA, _arrayValueXcVfBC]
		const _returnValuep0Gl4kp = await _HelpW6Cll4v.argumentTerm(_argumenta4AjHjB)
		const _nameG9S0dZd = 4.121524482609651;
		const _cmdFGXOhVM = new Command(_nameG9S0dZd)
		const _displayHelpYF2hcba = {
		
	}
		const _returnValuelI6CFeK = await _cmdFGXOhVM.showHelpAfterError(_displayHelpYF2hcba)
		const _returnValueLePNTu9 = await _HelpW6Cll4v.subcommandTerm(_cmdFGXOhVM)
	});

	it('test for Help', async () => {
		const _HelpzeMROTy = new Help()
		const _cmd5klXGH = undefined;
		const _helperQ6Qa7xm = "bmAVmdCIm";
		const _returnValueT4ySYIK = await _HelpzeMROTy.formatHelp(_cmd5klXGH, _helperQ6Qa7xm)
		const _cmdjmSGJcZ = "4M4c3nRlCF2pTSYuO1qwHSMEL9AQDu71XP4169f4WG42T";
		const _returnValuejBz3cNJ = await _HelpzeMROTy.subcommandTerm(_cmdjmSGJcZ)
		const _arrayValueXB0Cyxe = {
		
	}
		const _arrayValueVP3zOs = null;
		const _returnValueKQTxUOa = 3.8508056235250585;
		const _returnValueUOnwphw = () => { return _returnValueKQTxUOa };
		const _arrayValueLeYhTd9 = () => { return _returnValueUOnwphw };
		const _arrayValuerROUGNc = [_arrayValueLeYhTd9]
		const _arrayValueicDpLR = [_arrayValueVP3zOs, _arrayValuerROUGNc]
		const _cmdPwmRmUa = [_arrayValueXB0Cyxe, _arrayValueicDpLR]
		const _returnValueuU8gXS = await _HelpzeMROTy.subcommandDescription(_cmdPwmRmUa)
	});

	it('test for Help', async () => {
		const _HelpQhyLd8A = new Help()
		const _cmdWvdEaXr = "3QsyC7UNh6cJQwPWeTfvckDM2ILiignPvsItX83tmEgTbJQLrU33rfCsijshhChOUxKfAr73m6GVjxZw3Vmo";
		const _sortSubcommandsPYst7jR = {
		
	}
		const _returnValueqrIQLtZ = -3.711067860092916;
		const _subcommandTermMx21RbQ = () => { return _returnValueqrIQLtZ };
		const _helpernnDAtVt = {
			"sortSubcommands": _sortSubcommandsPYst7jR,
		"subcommandTerm": _subcommandTermMx21RbQ
	}
		const _returnValue1sm2WX = await _HelpQhyLd8A.longestSubcommandTermLength(_cmdWvdEaXr, _helpernnDAtVt)
		const _returnValue7n4tx0 = null;
		const _returnValueKaQswbO = () => { return _returnValue7n4tx0 };
		const _arrayValuebrSc7lm = () => { return _returnValueKaQswbO };
		const _arrayValueGa6rxq = "GYCCEePP2jJzPNNVnCTHD7";
		const _returnValuetAHZZol = [_arrayValuebrSc7lm, _arrayValueGa6rxq]
		const _option7JCZoN = () => { return _returnValuetAHZZol };
		const _returnValueAZ7iDnR = await _HelpQhyLd8A.optionTerm(_option7JCZoN)
		const _cmdR2JHSNE = "7sRYcURPn84Z1aM6bIUsOEa6EwnHvfoXNoTAzIHWkQw3XjHVBU8TEAvEbSgF7H7LIEEi4kfsd4t7JhLp9pxox3zb";
		const _returnValueirYwshS = await _HelpQhyLd8A.commandUsage(_cmdR2JHSNE)
	});

	it('test for Help', async () => {
		const _HelpDnceDoD = new Help()
		const _returnValueUsQ6pPI = -8.76946785682977;
		const _cmdfpBQbsH = () => { return _returnValueUsQ6pPI };
		const _returnValueUumcrJa = await _HelpDnceDoD.subcommandTerm(_cmdfpBQbsH)
		const _arrayValueAPlJHfh = "Tx1KIEWcRB650mJHB4mz2OSBWXs2m6uVK";
		const _arrayValueN8yI5Mb = -7.880266148357282;
		const _arrayValuewQdcdO = null;
		const _argumentSQUI8Gr = [_arrayValueAPlJHfh, _arrayValueN8yI5Mb, _arrayValuewQdcdO]
		const _returnValuej4o6eUj = await _HelpDnceDoD.argumentTerm(_argumentSQUI8Gr)
		const _arrayValueEQsrUHc = null;
		const _arrayValueKaZ7sJf = undefined;
		const _returnValueynaQCFO = false;
		const _arrayValuefxG0ZYP = () => { return _returnValueynaQCFO };
		const _returnValueg0q6MZZ = [_arrayValueEQsrUHc, _arrayValueKaZ7sJf, _arrayValuefxG0ZYP]
		const _argumentFWdmfFi = () => { return _returnValueg0q6MZZ };
		const _returnValueiEEZnlA = await _HelpDnceDoD.argumentTerm(_argumentFWdmfFi)
	});

	it('test for Help', async () => {
		const _HelpJIxCYpv = new Help()
		const _cmdOsZ6l53 = -8.615433434152816;
		const _returnValuet0d8Y7 = undefined;
		const _longestOptionTermLengthTHpgBWT = () => { return _returnValuet0d8Y7 };
		const _returnValueYL9Tz6X = 9.622822389117434;
		const _longestSubcommandTermLengthPq2dfVY = () => { return _returnValueYL9Tz6X };
		const _returnValueyxmsip = undefined;
		const _longestArgumentTermLengthLVbHuk9 = () => { return _returnValueyxmsip };
		const _helperyTXDZDA = {
			"longestOptionTermLength": _longestOptionTermLengthTHpgBWT,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPq2dfVY,
		"longestArgumentTermLength": _longestArgumentTermLengthLVbHuk9
	}
		const _returnValuedQsmuo6 = await _HelpJIxCYpv.padWidth(_cmdOsZ6l53, _helperyTXDZDA)
		const _cmdXhWAefO = null;
		const _arrayValueNfRWI63 = "wmPBvU0HjQj2jqSmnhYvXYFqrKbO8CxPWwahTGH3YNokUAdRym4OadR9TvkTA";
		const _arrayValueoacnIyh = "QvXjtPgIbUkkFpd5HJoOy72ndkzTXqT4YDhbafIXOCTHrHQljwagSXJTkKlpEKZ0Tvoij5kpPfOQ4qFCVivzQ1GO";
		const _arrayValuertrfmtf = {
		
	}
		const _helperR8MigDY = [_arrayValueNfRWI63, _arrayValueoacnIyh, _arrayValuertrfmtf]
		const _returnValueJOuHqkK = await _HelpJIxCYpv.longestOptionTermLength(_cmdXhWAefO, _helperR8MigDY)
		const _nametmSrRF2 = "QnOzbQcbbKbBnXRUYil7s391SeYVzEHth";
		const _arrayValueN5tK7nO = undefined;
		const _arrayValueJTA6AF8 = null;
		const _descriptionwpz0pV = [_arrayValueN5tK7nO, _arrayValueJTA6AF8]
		const _cmdbPOhkA = new Argument(_nametmSrRF2, _descriptionwpz0pV)
		const _valuePjoGoQf = "2reqFplFLxi0LgxC77apgmxdPpoUQ4txlyAV1bpV";
		const _arrayValueWgEu0Ks = false;
		const _arrayValueEtUiCRZ = "qoBIvCzmwn7m8CzG9afQO";
		const _arrayValue1VBSyW = "i9ADFnQrGI1bOpB1SdXJ2SdAjp6hz99RhO4MX2";
		const _previousRp69G9a = [_arrayValueWgEu0Ks, _arrayValueEtUiCRZ, _arrayValue1VBSyW]
		const _returnValueIRTdi28 = await _cmdbPOhkA._concatValue(_valuePjoGoQf, _previousRp69G9a)
		const _fnNQvyPLX = undefined;
		const _returnValuepoFyg2k = await _cmdbPOhkA.argParser(_fnNQvyPLX)
		const _fnkvLdDWB = undefined;
		const _returnValue5u3fee = await _cmdbPOhkA.argParser(_fnkvLdDWB)
		const _valueEkSFdVr = {
		
	}
		const _descriptionT3WiaOu = undefined;
		const _returnValueztMQl1t = await _cmdbPOhkA.default(_valueEkSFdVr, _descriptionT3WiaOu)
		const _returnValuehiX6KVH = await _cmdbPOhkA.name()
		const _returnValueAIaEoX = await _HelpJIxCYpv.commandDescription(_cmdbPOhkA)
		const _cmdCZoePs = true;
		const _helperZnhMnQt = new Help()
		const _names6m0DtY = true;
		const _cmdzsKyo6o = new Command(_names6m0DtY)
		const _flagsBOAxroT = null;
		const _descriptionsEVaIqv = undefined;
		const _fnBq47Bpj = false;
		const _arrayValuexiYGjE = false;
		const _arrayValueYdFQaJJ = null;
		const _defaultValuetRqLHF8 = [_arrayValuexiYGjE, _arrayValueYdFQaJJ]
		const _returnValueR8g6hii = await _cmdzsKyo6o.option(_flagsBOAxroT, _descriptionsEVaIqv, _fnBq47Bpj, _defaultValuetRqLHF8)
		const _returnValuefwhbQ8R = await _cmdzsKyo6o.createHelp()
		const _returnValueqCzKaA = await _helperZnhMnQt.subcommandTerm(_cmdzsKyo6o)
		const _cmd1bmJja = -3.7608363997169185;
		const _sortSubcommandsk0K4qjh = "e2HmxQxgVHMQii6tulYR95zcyE";
		const _returnValuekoVY0HL = undefined;
		const _arrayValueuMbeMr = () => { return _returnValuekoVY0HL };
		const _arrayValueZZ3GUr2 = "Nakx";
		const _arrayValueZczsIQa = [_arrayValueuMbeMr, _arrayValueZZ3GUr2]
		const _arrayValueQ5UCMdu = true;
		const _arrayValueBQKiFIj = true;
		const _arrayValuet87MPZb = null;
		const _subcommandTermUMuhdjl = [_arrayValueZczsIQa, _arrayValueQ5UCMdu, _arrayValueBQKiFIj, _arrayValuet87MPZb]
		const _helperd1nbBf = {
			"sortSubcommands": _sortSubcommandsk0K4qjh,
		"subcommandTerm": _subcommandTermUMuhdjl
	}
		const _returnValuemHXfzj0 = await _helperZnhMnQt.longestSubcommandTermLength(_cmd1bmJja, _helperd1nbBf)
		const _argChoicesy4a8aM1 = {
		
	}
		const _defaultValuetWU4OPo = undefined;
		const _defaultValueDescriptionc7UZLaV = {
		
	}
		const _returnValuehJEv5Ld = null;
		const _descriptionoTnyVc0 = () => { return _returnValuehJEv5Ld };
		const _argumentWXRnGcz = {
			"argChoices": _argChoicesy4a8aM1,
		"defaultValue": _defaultValuetWU4OPo,
		"defaultValueDescription": _defaultValueDescriptionc7UZLaV,
		"description": _descriptionoTnyVc0
	}
		const _returnValuexfLe63N = await _helperZnhMnQt.argumentDescription(_argumentWXRnGcz)
		const _cmd814yYB = false;
		const _arrayValueQdP9HZw = null;
		const _helperJANGfzH = [_arrayValueQdP9HZw]
		const _returnValuebLV11AX = await _helperZnhMnQt.formatHelp(_cmd814yYB, _helperJANGfzH)
		const _cmdgWudQJZ = false;
		const _arrayValuewgpWWsD = null;
		const _arrayValuejqfFxPo = undefined;
		const _helperA4iKjcT = [_arrayValuewgpWWsD, _arrayValuejqfFxPo]
		const _returnValue0A47mw = await _helperZnhMnQt.longestSubcommandTermLength(_cmdgWudQJZ, _helperA4iKjcT)
		const _returnValueYKRs6kI = await _HelpJIxCYpv.longestOptionTermLength(_cmdCZoePs, _helperZnhMnQt)
	});

	it('test for Help', async () => {
		const _Helpg82a9Fq = new Help()
		const _arrayValuexhg5o1u = undefined;
		const _returnValueEnkZpm7 = null;
		const _arrayValuetbybNvs = () => { return _returnValueEnkZpm7 };
		const _cmdDOWkmFd = [_arrayValuexhg5o1u, _arrayValuetbybNvs]
		const _returnValueCkR7tdy = await _Helpg82a9Fq.commandDescription(_cmdDOWkmFd)
		const _cmdPLGGBbb = undefined;
		const _helperFCfWmK = "FOgfMiYkdao6SENfEVGxW2661rul8tgAEPrKd";
		const _returnValueyxxmlqb = await _Helpg82a9Fq.longestArgumentTermLength(_cmdPLGGBbb, _helperFCfWmK)
	});

	it('test for Help', async () => {
		const _Helpuf2tUmr = new Help()
		const _arrayValueXd6xrBi = false;
		const _arrayValueCcs2voG = undefined;
		const _nameQtmHMAQ = [_arrayValueXd6xrBi, _arrayValueCcs2voG]
		const _cmduXUAbOz = new Command(_nameQtmHMAQ)
		const _displayHelppnceShK = false;
		const _returnValuellbNH4U = await _cmduXUAbOz.showHelpAfterError(_displayHelppnceShK)
		const _fnk9ikRsq = {
		
	}
		const _returnValuePOur3jJ = await _cmduXUAbOz.exitOverride(_fnk9ikRsq)
		const _returnValueApHZrrW = await _Helpuf2tUmr.visibleOptions(_cmduXUAbOz)
		const _arrayValueyl8IEg = -7.424380806228407;
		const _arrayValueGgiDPu8 = -3.7442310213285976;
		const _cmdVcxeePj = [_arrayValueyl8IEg, _arrayValueGgiDPu8]
		const _returnValuekH1vnKN = await _Helpuf2tUmr.visibleOptions(_cmdVcxeePj)
	});

	it('test for Help', async () => {
		const _HelpW2G2Evz = new Help()
		const _optionBx7zre5 = []
		const _returnValueWAj20Ll = await _HelpW2G2Evz.optionDescription(_optionBx7zre5)
		const _optionuutApQb = "KqBmL6NoGaE3Oy3gMcHmZnabVOrT2Pwo09w7rXJpzK0jVsncli8niFJ8Foyf6ArMUNnEiFdswemKrPBhWFUwbbF5xeop4s4QO";
		const _returnValueLyI7XQ = await _HelpW2G2Evz.optionDescription(_optionuutApQb)
		const _cmdLj4I1J = undefined;
		const _helperPOQucC = "m71N";
		const _returnValue0iUZVk = await _HelpW2G2Evz.padWidth(_cmdLj4I1J, _helperPOQucC)
		const _arrayValueniOhmnG = null;
		const _arrayValueAfachms = true;
		const _arrayValuedRDzwfn = "X8Gky4pV6AkLOAQjk8Q1ddpAFGG9ECcd3kOW26f8i";
		const _arrayValueKDmFB4x = [_arrayValuedRDzwfn]
		const _cmd1RsboY = [_arrayValueniOhmnG, _arrayValueAfachms, _arrayValueKDmFB4x]
		const _returnValuekot7hg9 = await _HelpW2G2Evz.visibleArguments(_cmd1RsboY)
		const _commandsFMA4VIg = {
		
	}
		const _returnValuediBIS9q = "cK7KL6WzDYO831yTYa5rDHYcD5RUwH1qx98wHCXgnDYp5";
		const _returnValueOLaRXaA = () => { return _returnValuediBIS9q };
		const __hasImplicitHelpCommandrRNhzie = () => { return _returnValueOLaRXaA };
		const __helpCommandnameAndArgsqOaWVYp = {
		
	}
		const _returnValueEssDkEJ = false;
		const _createCommandzxX7uow = () => { return _returnValueEssDkEJ };
		const __helpCommandDescriptionirP1IY5 = true;
		const _cmdbA9m4XT = {
			"commands": _commandsFMA4VIg,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandrRNhzie,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsqOaWVYp,
		"createCommand": _createCommandzxX7uow,
		"_helpCommandDescription": __helpCommandDescriptionirP1IY5
	}
		const _returnValueLy2a8NE = await _HelpW2G2Evz.visibleCommands(_cmdbA9m4XT)
	});

	it('test for Help', async () => {
		const _HelpaW62DLv = new Help()
		const _flagsmCAKaS8 = "eR55TixocvqfpE0HoTAGhoqjJPgwLRdREPFvwhJv18YBL2sYd3A5788ivd1r";
		const _optionQoTANzR = {
			"flags": _flagsmCAKaS8
	}
		const _returnValueNFuBEBq = await _HelpaW62DLv.optionTerm(_optionQoTANzR)
		const _arrayValueyypXy5 = true;
		const _arrayValueYCyBT6t = 5.796818237013749;
		const _cmdoGimSwu = [_arrayValueyypXy5, _arrayValueYCyBT6t]
		const _arrayValueBDUKVQJ = {
		
	}
		const _arrayValueRTZlWz0 = false;
		const _helperuShceM = [_arrayValueBDUKVQJ, _arrayValueRTZlWz0]
		const _returnValueIu4fe2Q = await _HelpaW62DLv.longestArgumentTermLength(_cmdoGimSwu, _helperuShceM)
	});

	it('test for Help', async () => {
		const _Helpll3QNM7 = new Help()
		const _argChoicesIrjgbfQ = {
		
	}
		const _defaultValueQvxaXZG = undefined;
		const _arrayValueuBEhGsK = true;
		const _arrayValuegVgx1yG = 0.9022291459231209;
		const _arrayValueUf4UTuj = "AZsESpDVKoNsx81yjDfUCnFnkwTAHLa";
		const _defaultValueDescriptionpmCx7Bm = [_arrayValueuBEhGsK, _arrayValuegVgx1yG, _arrayValueUf4UTuj]
		const _descriptionnyrHqzm = -1.2776549516985831;
		const _argumentoV5cHfA = {
			"argChoices": _argChoicesIrjgbfQ,
		"defaultValue": _defaultValueQvxaXZG,
		"defaultValueDescription": _defaultValueDescriptionpmCx7Bm,
		"description": _descriptionnyrHqzm
	}
		const _returnValuepPYb0J7 = await _Helpll3QNM7.argumentDescription(_argumentoV5cHfA)
		const _arrayValueEsULON2 = undefined;
		const _arrayValueidd8XIy = undefined;
		const _cmdrtaMZcJ = [_arrayValueEsULON2, _arrayValueidd8XIy]
		const _returnValuecPDHAWn = undefined;
		const _helpertUdoI8J = () => { return _returnValuecPDHAWn };
		const _returnValueFItTtmR = await _Helpll3QNM7.padWidth(_cmdrtaMZcJ, _helpertUdoI8J)
	});

	it('test for Help', async () => {
		const _HelpmU3P2YE = new Help()
		const _flagsZsGatFG = "xcJTeDMU4R7SnyRhyrAKQ77jXAeWJlmMp5WTkySl8eNPdloy7GLKFV1aMVAYOnr6I26xFfH5addLc8";
		const _optionBJSRi1c = {
			"flags": _flagsZsGatFG
	}
		const _returnValueb5yxESQ = await _HelpmU3P2YE.optionTerm(_optionBJSRi1c)
		const _cmdZQLTm6z = "HFE0R1Tw1GcT91peV97Q7XVgiXFqpIiJDl10eCJIXBWn73W3LnA03UyDubhEypTAJfJ9d3yhnlHTwZYe9x0Fe18ep38FFCV";
		const _returnValuevu6td4 = await _HelpmU3P2YE.visibleCommands(_cmdZQLTm6z)
		const _cmdsBfMNfE = undefined;
		const _returnValueqqI3d6y = "i1VVnviw4Vkb6pp3oTdL9qXUQ1ndFGBtmIRTU7SIacxG6s2rq1";
		const _visibleOptionsmt3Rwxb = () => { return _returnValueqqI3d6y };
		const _returnValueHXxQZ30 = "2skgKIHukYP";
		const _optionTermxWnJWg4 = () => { return _returnValueHXxQZ30 };
		const _helperb8uDQI4 = {
			"visibleOptions": _visibleOptionsmt3Rwxb,
		"optionTerm": _optionTermxWnJWg4
	}
		const _returnValueIxzqzvi = await _HelpmU3P2YE.longestOptionTermLength(_cmdsBfMNfE, _helperb8uDQI4)
		const _cmdDp1qpJM = "WwgB2uUEyIRrm666YshR6JOut1Eqz5oEMu6dFdbB1lnpRME93jUBmfRMOmVTPgSsMY1";
		const _returnValueNIlgng3 = await _HelpmU3P2YE.commandUsage(_cmdDp1qpJM)
	});

	it('test for Help', async () => {
		const _HelpyxHJZAu = new Help()
		const _argumentLs3EXR4 = "SkyEIkt9ECo22meNssrp6BbkLPyeOMpt2hALdsR";
		const _returnValuefPqJrDz = await _HelpyxHJZAu.argumentDescription(_argumentLs3EXR4)
		const _arrayValue2Z4hcp = null;
		const _arrayValueI54NHcJ = undefined;
		const _arrayValuetKZZP25 = null;
		const _arrayValueA4XLC9l = -6.885766622234633;
		const _arrayValuehOB57jC = [_arrayValueI54NHcJ, _arrayValuetKZZP25, _arrayValueA4XLC9l]
		const _arrayValuedXyuwk5 = false;
		const _cmdWpTCeOY = [_arrayValue2Z4hcp, _arrayValuehOB57jC, _arrayValuedXyuwk5]
		const _returnValuekNCSfdN = await _HelpyxHJZAu.commandDescription(_cmdWpTCeOY)
		const _argumentfGKOPnw = "sVfDifoSwlKoDP4mzPNkTKsfCTUhBddhcbFnlFwC1523aO5XebJjOo8UQeTMDcoR6oHoUc3DFnHwWzh";
		const _returnValueHZWscyJ = await _HelpyxHJZAu.argumentDescription(_argumentfGKOPnw)
		const _arrayValueK62Ywke = {
		
	}
		const _arrayValueRgrgnVQ = null;
		const _returnValueKWDNUGc = [_arrayValueK62Ywke, _arrayValueRgrgnVQ]
		const _cmdsz4QMTP = () => { return _returnValueKWDNUGc };
		const _returnValueV60GLL = await _HelpyxHJZAu.subcommandDescription(_cmdsz4QMTP)
	});

	it('test for Help', async () => {
		const _HelpqViKU0A = new Help()
		const _returnValueK4zYaqn = {
		
	}
		const _cmdoyIZcax = () => { return _returnValueK4zYaqn };
		const _returnValueNCzr43R = await _HelpqViKU0A.subcommandDescription(_cmdoyIZcax)
		const _cmdCeDYXo = undefined;
		const _sortSubcommandswThOVu5 = -8.64706385893002;
		const _returnValuedeC29G4 = "jWpRXzW6khCbZfU5rc0VtwMfn2LyKd33mGyuIDlR65XeOfcgAqYqnNBcnK4ibGvbVm1mv0dV6GeDtnV3Y8hefG32vgcN";
		const _subcommandTermcS0qTja = () => { return _returnValuedeC29G4 };
		const _helperEGi8pjy = {
			"sortSubcommands": _sortSubcommandswThOVu5,
		"subcommandTerm": _subcommandTermcS0qTja
	}
		const _returnValueQ7AI3rT = await _HelpqViKU0A.formatHelp(_cmdCeDYXo, _helperEGi8pjy)
		const _cmdEqaeUqL = "2tPElHzQROprjMe8ohxDawhS4uUe2FrCNmdF4ci6pY57QgzOMuLHSI0cCYDBuDtJo0qzMSJu0WRQyIFkOe8DM";
		const _returnValueq5CFkNG = null;
		const _visibleArgumentsjymsraB = () => { return _returnValueq5CFkNG };
		const _argumentTermJaUq8Z9 = undefined;
		const _helpergRptx2q = {
			"visibleArguments": _visibleArgumentsjymsraB,
		"argumentTerm": _argumentTermJaUq8Z9
	}
		const _returnValueBFx8okv = await _HelpqViKU0A.longestArgumentTermLength(_cmdEqaeUqL, _helpergRptx2q)
	});

	it('test for Help', async () => {
		const _HelpoiX65N7 = new Help()
		const _cmdgEAAUj = undefined;
		const _helperJwhNKU = new Help()
		const _returnValuejxCiDb = null;
		const _slicex86lmUD = () => { return _returnValuejxCiDb };
		const _namevX7tzXB = {
			"slice": _slicex86lmUD
	}
		const _descriptionvddlWZE = {
		
	}
		const _optionEHi7s7p = new Argument(_namevX7tzXB, _descriptionvddlWZE)
		const _arrayValueXvwbpJX = "2RugDiIkMphcAR6e5";
		const _arrayValueLv2UCNj = true;
		const _arrayValuejo8G9W = undefined;
		const _arrayValueOvi92bZ = -9.323290329575334;
		const _arrayValueQadvrBZ = [_arrayValueOvi92bZ]
		const _valuesRlC6hLb = [_arrayValueXvwbpJX, _arrayValueLv2UCNj, _arrayValuejo8G9W, _arrayValueQadvrBZ]
		const _returnValuezSRicuO = await _optionEHi7s7p.choices(_valuesRlC6hLb)
		const _arrayValueDAkksio = null;
		const _arrayValueKR88GPQ = undefined;
		const _arrayValuen7zEZu5 = "VY";
		const _returnValueNzwTaYE = [_arrayValueDAkksio, _arrayValueKR88GPQ, _arrayValuen7zEZu5]
		const _returnValueEPyj39 = () => { return _returnValueNzwTaYE };
		const _includesXNggdLe = () => { return _returnValueEPyj39 };
		const _returnValuexL7IYPX = {
		
	}
		const _joinbcFlWXp = () => { return _returnValuexL7IYPX };
		const _valuesFDVcNDO = {
			"includes": _includesXNggdLe,
		"join": _joinbcFlWXp
	}
		const _returnValuevrtGyyT = await _optionEHi7s7p.choices(_valuesFDVcNDO)
		const _returnValueMKF60hZ = await _helperJwhNKU.optionDescription(_optionEHi7s7p)
		const _returnValueidyxuTD = await _HelpoiX65N7.formatHelp(_cmdgEAAUj, _helperJwhNKU)
		const _optionsoiz4uJ = {
		
	}
		const _arrayValueRpTiOf2 = undefined;
		const _arrayValuezBJfxbA = undefined;
		const _arrayValueRzqk2Rn = null;
		const _arrayValueMxA04aB = false;
		const _returnValueloqVi7w = null;
		const _arrayValueaf4w6B8 = () => { return _returnValueloqVi7w };
		const _arrayValuebmhp2cj = [_arrayValueRzqk2Rn, _arrayValueMxA04aB, _arrayValueaf4w6B8]
		const _arrayValueJTLYk5g = null;
		const __hasHelpOptionH6uCxtA = [_arrayValueRpTiOf2, _arrayValuezBJfxbA, _arrayValuebmhp2cj, _arrayValueJTLYk5g]
		const __helpShortFlagQWFs2R9 = false;
		const _returnValueDVSwNMS = null;
		const __findOptionYwUMMDF = () => { return _returnValueDVSwNMS };
		const __helpLongFlagBYZUIO = {
		
	}
		const _arrayValueZXgYc3N = null;
		const _arrayValuee20yDTP = "SReQTFfNT4oQHepkKrwjuSMAjO1DMFEQp2tU82Yr8m1HiAdciWII7iShqzAIF7Sdh84Q3zg5XwLOfj7YgAo5puiPA10I";
		const _arrayValueTaozfXZ = [_arrayValueZXgYc3N, _arrayValuee20yDTP]
		const _arrayValueceiIwdo = false;
		const _returnValueMkLUHvJ = [_arrayValueTaozfXZ, _arrayValueceiIwdo]
		const _createOptioncO4UOAW = () => { return _returnValueMkLUHvJ };
		const __helpDescriptionXiiu26k = {
		
	}
		const __helpFlagskwoD91h = false;
		const _cmdek3wWio = {
			"options": _optionsoiz4uJ,
		"_hasHelpOption": __hasHelpOptionH6uCxtA,
		"_helpShortFlag": __helpShortFlagQWFs2R9,
		"_findOption": __findOptionYwUMMDF,
		"_helpLongFlag": __helpLongFlagBYZUIO,
		"createOption": _createOptioncO4UOAW,
		"_helpDescription": __helpDescriptionXiiu26k,
		"_helpFlags": __helpFlagskwoD91h
	}
		const _returnValuenEjRoSj = await _HelpoiX65N7.visibleOptions(_cmdek3wWio)
		const _nameoAa46B = undefined;
		const _cmdUsCHGX = new Command(_nameoAa46B)
		const _flagsblYmZvG = undefined;
		const _arrayValue9JPEOt = "pvgtCqC6hGg4q5tF5PP1Ku71oFzUsD6aTIiwf9yNvN1PbH9w";
		const _arrayValueICCuxK4 = null;
		const _descriptionVY6mMZx = [_arrayValue9JPEOt, _arrayValueICCuxK4]
		const _fnVSr5uYT = null;
		const _defaultValuesTbTtpa = null;
		const _returnValueyxIlYGT = await _cmdUsCHGX.option(_flagsblYmZvG, _descriptionVY6mMZx, _fnVSr5uYT, _defaultValuesTbTtpa)
		const _keySl8jT2v = false;
		const _valueTne4Es7 = "VtOR9j9a5ped2ASiLepezMCowfwCxnRIGd55QQa9huSFXrDKjjIYXUf1";
		const _returnValuera7nBin = await _cmdUsCHGX.setOptionValue(_keySl8jT2v, _valueTne4Es7)
		const _returnValueNgLJ38D = undefined;
		const _fnZPiA8Bg = () => { return _returnValueNgLJ38D };
		const _returnValuerJ3fMGC = await _cmdUsCHGX.action(_fnZPiA8Bg)
		const _strMJEZcjY = undefined;
		const _returnValueZN8f67N = await _cmdUsCHGX.name(_strMJEZcjY)
		const _returnValuectpcZhL = await _HelpoiX65N7.subcommandDescription(_cmdUsCHGX)
		const _cmdW4KJjw6 = {
		
	}
		const _helperImicNVU = new Help()
		const _nameLg0u8IS = true;
		const _cmdcb5wlLa = new Command(_nameLg0u8IS)
		const _combineGpAYdAY = true;
		const _returnValuetIFJE9 = await _cmdcb5wlLa.combineFlagAndOptionalValue(_combineGpAYdAY)
		const _returnValuecVGqgw8 = "5ZO76i";
		const _arrayValueQsAeLLS = () => { return _returnValuecVGqgw8 };
		const _promiseqtfgJ3j = [_arrayValueQsAeLLS]
		const _returnValuenydf6gE = null;
		const _fnt9WzwP9 = () => { return _returnValuenydf6gE };
		const _returnValueYyMNwuI = await _cmdcb5wlLa._chainOrCall(_promiseqtfgJ3j, _fnt9WzwP9)
		const _returnValueeFed5aI = await _helperImicNVU.commandDescription(_cmdcb5wlLa)
		const _messageXGDth1x = null;
		const _argumentUCH8znO = new InvalidArgumentError(_messageXGDth1x)
		const _returnValuevlI83Ra = await _helperImicNVU.argumentTerm(_argumentUCH8znO)
		const _returnValueL208pT = await _HelpoiX65N7.longestArgumentTermLength(_cmdW4KJjw6, _helperImicNVU)
		const _cmdICq0ONh = null;
		const _arrayValuezWtsf4G = null;
		const _helperxiTKMB9 = [_arrayValuezWtsf4G]
		const _returnValuedI4qBq0 = await _HelpoiX65N7.longestSubcommandTermLength(_cmdICq0ONh, _helperxiTKMB9)
	});

	it('test for Help', async () => {
		const _HelpvjH8O4k = new Help()
		const _returnValueSP3Gqfo = []
		const _matchvsjnbV = () => { return _returnValueSP3Gqfo };
		const _returnValueR4YTfIY = false;
		const _substrhNSsicQ = () => { return _returnValueR4YTfIY };
		const _strCFn4gE6 = {
			"match": _matchvsjnbV,
		"substr": _substrhNSsicQ
	}
		const _widthjR6DAc = -1.6300021410997232;
		const _indentZpzh25S = -0.47224035368104467;
		const _minColumnWidthEObqIcz = 5.119851534529614;
		const _returnValueo1nJYFR = await _HelpvjH8O4k.wrap(_strCFn4gE6, _widthjR6DAc, _indentZpzh25S, _minColumnWidthEObqIcz)
		const _returnValueVOrCKRZ = false;
		const _descriptionN0Izd7 = () => { return _returnValueVOrCKRZ };
		const _cmdqxTiBmR = {
			"description": _descriptionN0Izd7
	}
		const _returnValuePhOKaG2 = await _HelpvjH8O4k.subcommandDescription(_cmdqxTiBmR)
		const _arrayValueNlBGqJL = undefined;
		const _arrayValuemKVCV8s = undefined;
		const _arrayValueqjXzbO4 = [_arrayValuemKVCV8s]
		const _arrayValuenZCSz5S = "PEyd7iFFfTQIEkXdaeTVbLC4BsU";
		const _arrayValueXu2zUlF = [_arrayValueNlBGqJL, _arrayValueqjXzbO4, _arrayValuenZCSz5S]
		const _arrayValuerkpeje6 = "6tsHvB5tKPO3NWCKvWiLtiV1XiQvwGsnG42jo0XrihMBohpqydaju9k2rjM7xGtJPlMxlEwrldgte823n3gxE";
		const _cmdqyEuo2M = [_arrayValueXu2zUlF, _arrayValuerkpeje6]
		const _returnValuenZDfJ5d = undefined;
		const _visibleOptionsN1oOgO = () => { return _returnValuenZDfJ5d };
		const _returnValuezeM3ke = null;
		const _optionTermP6o0SM = () => { return _returnValuezeM3ke };
		const _helpermMRw8v4 = {
			"visibleOptions": _visibleOptionsN1oOgO,
		"optionTerm": _optionTermP6o0SM
	}
		const _returnValueO5f2brh = await _HelpvjH8O4k.longestOptionTermLength(_cmdqyEuo2M, _helpermMRw8v4)
	});

	it('test for Help', async () => {
		const _HelpwryRICq = new Help()
		const _arrayValuetoQ3GrA = null;
		const _arrayValueGTebKO3 = undefined;
		const _arrayValuefxWSDfC = false;
		const _arrayValuecDO7Trc = []
		const _arrayValuec9893IJ = {
		
	}
		const _arrayValuebg0jdkW = [_arrayValueGTebKO3, _arrayValuefxWSDfC, _arrayValuecDO7Trc, _arrayValuec9893IJ]
		const _arrayValuePe6jMk6 = {
		
	}
		const _arrayValueyjN2fXB = null;
		const _cmdC7wVJ7S = [_arrayValuetoQ3GrA, _arrayValuebg0jdkW, _arrayValuePe6jMk6, _arrayValueyjN2fXB]
		const _returnValueGUJ7OQm = []
		const _longestOptionTermLengthPj8wKyF = () => { return _returnValueGUJ7OQm };
		const _arrayValue3Il7xq = -4.421707141644074;
		const _arrayValueWYCAZtx = null;
		const _arrayValueVAxv7d = false;
		const _arrayValuekgew5kb = [_arrayValueVAxv7d]
		const _arrayValueGLE0Rv5 = 1.3221632642022403;
		const _arrayValueDpO9kuo = null;
		const _arrayValueRwpkBpT = [_arrayValuekgew5kb, _arrayValueGLE0Rv5, _arrayValueDpO9kuo]
		const _arrayValueC98xP5f = null;
		const _arrayValueHgnX1w1 = [_arrayValueRwpkBpT, _arrayValueC98xP5f]
		const _returnValueD3KJF2S = [_arrayValue3Il7xq, _arrayValueWYCAZtx, _arrayValueHgnX1w1]
		const _longestSubcommandTermLengthWbXqdZ8 = () => { return _returnValueD3KJF2S };
		const _returnValueoRXY9jo = "jGekwYlWKISvhVtYrttMAUHB21b4dDrM0rO5pWuE2t7t5SbrkoihAz7A4Ke90m";
		const _longestArgumentTermLengthfDRZSwT = () => { return _returnValueoRXY9jo };
		const _helperwv12eJ2 = {
			"longestOptionTermLength": _longestOptionTermLengthPj8wKyF,
		"longestSubcommandTermLength": _longestSubcommandTermLengthWbXqdZ8,
		"longestArgumentTermLength": _longestArgumentTermLengthfDRZSwT
	}
		const _returnValuedVDL6r4 = await _HelpwryRICq.padWidth(_cmdC7wVJ7S, _helperwv12eJ2)
		const __nameA8Lpvdz = 2.635971866492298;
		const __aliasesabp9fVH = {
		
	}
		const _parentLws54oh = {
		
	}
		const _returnValueHigGbK = -7.4415256546146145;
		const _usageqhy7IGY = () => { return _returnValueHigGbK };
		const _cmd9gRW4Y = {
			"_name": __nameA8Lpvdz,
		"_aliases": __aliasesabp9fVH,
		"parent": _parentLws54oh,
		"usage": _usageqhy7IGY
	}
		const _returnValueL80jzxY = await _HelpwryRICq.commandUsage(_cmd9gRW4Y)
		const _argumentQwc8pBN = "6s8nDnxX83GA6EMAeHHm66mR0xRIlUrDisVMkcL3j7";
		const _returnValueywHMmCQ = await _HelpwryRICq.argumentTerm(_argumentQwc8pBN)
		const _cmdOMWmqmU = null;
		const _sortSubcommandsbe7o2GZ = false;
		const _arrayValueyMPDbI = 3.1315992667034003;
		const _arrayValuey6Y2nte = undefined;
		const _arrayValueofQeNvz = 9.646387562223037;
		const _returnValueBnK4kkd = [_arrayValueyMPDbI, _arrayValuey6Y2nte, _arrayValueofQeNvz]
		const _subcommandTermJ7sz9Za = () => { return _returnValueBnK4kkd };
		const _helperpfu39jT = {
			"sortSubcommands": _sortSubcommandsbe7o2GZ,
		"subcommandTerm": _subcommandTermJ7sz9Za
	}
		const _returnValueOd4zsYz = await _HelpwryRICq.formatHelp(_cmdOMWmqmU, _helperpfu39jT)
	});

	it('test for Help', async () => {
		const _HelpNVyGjg = new Help()
		const _returnValueIiMAAXC = undefined;
		const _matchdW8zHI4 = () => { return _returnValueIiMAAXC };
		const _returnValueJ5hsthM = 1.4343043033841933;
		const _substrPR62M5J = () => { return _returnValueJ5hsthM };
		const _strU5jtxRu = {
			"match": _matchdW8zHI4,
		"substr": _substrPR62M5J
	}
		const _widthHlXKahx = -0.9564522221711762;
		const _indentYlFBnVZ = 5.9330550176430386;
		const _minColumnWidthHKTcfts = "0xEbtwtE7UTXTQ6dDxeCvux9IunaEwvsOUDfwgPn3fJR5o21sraGOdx";
		const _returnValueNU8ItE8 = await _HelpNVyGjg.wrap(_strU5jtxRu, _widthHlXKahx, _indentYlFBnVZ, _minColumnWidthHKTcfts)
		const _cmd6Zu1DJ = undefined;
		const _returnValueuweFFxR = await _HelpNVyGjg.visibleOptions(_cmd6Zu1DJ)
	});

	it('test for Help', async () => {
		const _Helpws7mM9 = new Help()
		const _nameDmkY6P = 5.608906706366355;
		const _cmdz0InTDO = new Command(_nameDmkY6P)
		const _arrayValuecqE1jq = undefined;
		const _arrayValuegxp6HMx = undefined;
		const _arrayValueavA7LHZ = -4.814463275291724;
		const _arrayValuebuyMzyS = [_arrayValuegxp6HMx, _arrayValueavA7LHZ]
		const _arrayValueckslfGq = undefined;
		const _keyVsjsPc8 = [_arrayValuecqE1jq, _arrayValuebuyMzyS, _arrayValueckslfGq]
		const _returnValuew1j9nuh = await _cmdz0InTDO.getOptionValueSource(_keyVsjsPc8)
		const _returnValueH3L1M3 = await _cmdz0InTDO._checkNumberOfArguments()
		const _contextOptionsACDjqa = undefined;
		const _returnValuey4MvJj1 = await _cmdz0InTDO._getHelpContext(_contextOptionsACDjqa)
		const _returnValuePA5x8RM = await _Helpws7mM9.subcommandTerm(_cmdz0InTDO)
		const _returnValuew2gkooi = undefined;
		const _cmdcK4fI4a = () => { return _returnValuew2gkooi };
		const _sortSubcommandsfsQZv6n = {
		
	}
		const _subcommandTermWZz37yo = true;
		const _helperKcP8lgp = {
			"sortSubcommands": _sortSubcommandsfsQZv6n,
		"subcommandTerm": _subcommandTermWZz37yo
	}
		const _returnValuetTh62Xf = await _Helpws7mM9.formatHelp(_cmdcK4fI4a, _helperKcP8lgp)
		const _flagsuhYpViM = []
		const _descriptionsGFJXkO = "CgznaYEBqD4V6fAuBQIQ6meSF9CndSn7U4wreNI5P8plGdy73HLlJN0OOowntXTAG3mONtlaAmgGGCdA6zykH";
		const _optionWOAVbWD = new Option(_flagsuhYpViM, _descriptionsGFJXkO)
		const _arrayValueLDhqLFj = "wvcZuMQqmlPDLn3cBA1TdTe39ort87L83ApY1Oi8yCXM5YaBdYia0gnoHhAWyXQmcYSgWKSipBkgQV55iOKmP";
		const _arrayValuerrusBqN = [_arrayValueLDhqLFj]
		const _arrayValuejayWhqg = null;
		const _arrayValueGeTziIm = false;
		const _returnValueH86hVAd = [_arrayValuerrusBqN, _arrayValuejayWhqg, _arrayValueGeTziIm]
		const _valuesnuHqyxF = () => { return _returnValueH86hVAd };
		const _returnValuePn8Z7U3 = await _optionWOAVbWD.choices(_valuesnuHqyxF)
		const _valueAFoCR3L = undefined;
		const _descriptionDXTksNr = undefined;
		const _returnValuexBV8xHq = await _optionWOAVbWD.default(_valueAFoCR3L, _descriptionDXTksNr)
		const _returnValueUxogxv = await _Helpws7mM9.optionTerm(_optionWOAVbWD)
		const _namekXHgNGU = false;
		const _cmdXYmaCsf = new Command(_namekXHgNGU)
		const _exitCodeNM7lRA = -7.489770114340024;
		const _codeeAZiC7 = true;
		const _messageNXqqq28 = null;
		const _returnValueLqmxbLa = await _cmdXYmaCsf._displayError(_exitCodeNM7lRA, _codeeAZiC7, _messageNXqqq28)
		const _arrayValuevkBJZNm = "NEnlkKhxr30T0wLeqpLS6G6MJdwjLlCPH75kD7AMesGnfze8mvMi9IKeKYGl17RFID0a4aqwqXHXHr";
		const _arrayValueUtl6vx = {
		
	}
		const _returnValuec5CTpfd = [_arrayValuevkBJZNm, _arrayValueUtl6vx]
		const _cmddB4KHPa = () => { return _returnValuec5CTpfd };
		const _returnValueJJHo9jZ = null;
		const _optsZMqMI1 = () => { return _returnValueJJHo9jZ };
		const _returnValuerdAy0FG = await _cmdXYmaCsf.addCommand(_cmddB4KHPa, _optsZMqMI1)
		const _returnValueb7yjec = await _Helpws7mM9.visibleOptions(_cmdXYmaCsf)
	});

	it('test for Help', async () => {
		const _HelpMn2ALp8 = new Help()
		const _flagsiDjSdSm = "Cdm2jkXSTuESr9E73UABcLskVz9mVGv3O9CffGxH9hAEwWPkyqJHb3cO4AxbRsk3fTWy6";
		const _descriptionlQD099s = "pczxejm8CI";
		const _cmdJDvjQPA = new Option(_flagsiDjSdSm, _descriptionlQD099s)
		const _valueTsVEZIv = null;
		const _returnValueugZmT4l = null;
		const _previoustehufhj = () => { return _returnValueugZmT4l };
		const _returnValueD2Ko6XO = await _cmdJDvjQPA._concatValue(_valueTsVEZIv, _previoustehufhj)
		const _fnHPOaz9v = "QyUmaxHzpe03LvLRnJWCV3YeNMX1iRrLAyV6WUiYxHi1BSw5q5KrHCbtMWhzw6vO7mR2AOMsr716pvLS8Msyif";
		const _returnValueVDpSh5l = await _cmdJDvjQPA.argParser(_fnHPOaz9v)
		const _valueSPkYkIN = {
		
	}
		const _previousLDHXhg = undefined;
		const _returnValueqecdeQo = await _cmdJDvjQPA._concatValue(_valueSPkYkIN, _previousLDHXhg)
		const _fnVgheeVD = undefined;
		const _returnValueFdk4CW5 = await _cmdJDvjQPA.argParser(_fnVgheeVD)
		const _returnValuei9zTdKz = await _cmdJDvjQPA.attributeName()
		const _returnValuedTwDtgQ = await _HelpMn2ALp8.subcommandDescription(_cmdJDvjQPA)
		const _cmdXns5Qr = undefined;
		const _returnValueWQj3my6 = undefined;
		const _returnValueN5a3kYi = () => { return _returnValueWQj3my6 };
		const _helperptgXLG = () => { return _returnValueN5a3kYi };
		const _returnValuedG05wqs = await _HelpMn2ALp8.padWidth(_cmdXns5Qr, _helperptgXLG)
		const _cmdsEvURS = null;
		const _helpercjA0zYk = "W3eyET2taGP9xwRuM1sN271RItqkkG9";
		const _returnValuepJAWWUx = await _HelpMn2ALp8.longestOptionTermLength(_cmdsEvURS, _helpercjA0zYk)
	});

	it('test for Help', async () => {
		const _Helpz270A56 = new Help()
		const _nameRu41YwW = {
		
	}
		const _cmdrP47oB7 = new Command(_nameRu41YwW)
		const _keyW3OMIrf = -6.89172578257815;
		const _returnValueMJodilS = await _cmdrP47oB7.getOptionValueSource(_keyW3OMIrf)
		const _returnValueNzooMiU = await _cmdrP47oB7.opts()
		const _aliasZa2aGsH = {
		
	}
		const _returnValueflcoV4A = await _cmdrP47oB7.alias(_aliasZa2aGsH)
		const _flagstpiLmq = "d2Sckx9Kh";
		const _descriptionEj18mow = 1.2765479006651077;
		const _returnValueEmTcQT = await _cmdrP47oB7.helpOption(_flagstpiLmq, _descriptionEj18mow)
		const _returnValueDahyc7r = await _Helpz270A56.visibleOptions(_cmdrP47oB7)
		const __argsNH4wqKI = {
		
	}
		const __nameV8h6Klh = 8.385185574640069;
		const __aliasesrCzbTs1 = {
		
	}
		const _optionsnygmM12 = {
		
	}
		const _cmdZ1KRpDS = {
			"_args": __argsNH4wqKI,
		"_name": __nameV8h6Klh,
		"_aliases": __aliasesrCzbTs1,
		"options": _optionsnygmM12
	}
		const _returnValueCjYYD0Z = await _Helpz270A56.subcommandTerm(_cmdZ1KRpDS)
		const _strfQBVpny = "BHc0te0G7QBMC8DbOlG7vdy1BFsceKLNqJ02xIfEHhIWf86RG";
		const _widthhGCs7hB = 3.53275759191364;
		const _indentBfXOUnO = -0.8154788693214581;
		const _minColumnWidthSvIowv = 9.210350093754151;
		const _returnValuex5QlXJV = await _Helpz270A56.wrap(_strfQBVpny, _widthhGCs7hB, _indentBfXOUnO, _minColumnWidthSvIowv)
	});

	it('test for Help', async () => {
		const _Helpa3vV2Tt = new Help()
		const _namedJsJOgu = undefined;
		const _cmdG8DkHBZ = new Command(_namedJsJOgu)
		const _aliaseyKeB6o = {
		
	}
		const _returnValuePW6F8bv = await _cmdG8DkHBZ.alias(_aliaseyKeB6o)
		const _returnValueyiZf8yz = await _cmdG8DkHBZ.opts()
		const _strh8WpJN8 = undefined;
		const _flagsJoseAyU = {
		
	}
		const _descriptionup4Ric = {
		
	}
		const _returnValuevIdy09z = await _cmdG8DkHBZ.version(_strh8WpJN8, _flagsJoseAyU, _descriptionup4Ric)
		const _returnValuePEI8aNN = await _Helpa3vV2Tt.subcommandTerm(_cmdG8DkHBZ)
	});

	it('test for Help', async () => {
		const _HelpxINbwKr = new Help()
		const __namea4Zohtr = {
		
	}
		const _arrayValueUh6TTp = true;
		const _arrayValueYIfMcVf = -8.06444846372648;
		const __aliasesk1Xk4c0 = [_arrayValueUh6TTp, _arrayValueYIfMcVf]
		const _arrayValueug8GmHi = []
		const _arrayValueO8O2hXy = 4.896621665429448;
		const _arrayValueh43kgOk = null;
		const _arrayValueXtZ58qz = true;
		const _parentheWptct = [_arrayValueug8GmHi, _arrayValueO8O2hXy, _arrayValueh43kgOk, _arrayValueXtZ58qz]
		const _returnValueG0gXJEs = "ahquIw3BVdPyr9jaCUSD9z2PX2NfvA81uChlzKgFCeucerD8bhJBwEYnCaGILjt";
		const _usageHhPt2Ur = () => { return _returnValueG0gXJEs };
		const _cmdYcYzn4t = {
			"_name": __namea4Zohtr,
		"_aliases": __aliasesk1Xk4c0,
		"parent": _parentheWptct,
		"usage": _usageHhPt2Ur
	}
		const _returnValueBJMv4r3 = await _HelpxINbwKr.commandUsage(_cmdYcYzn4t)
		const _cmdUpLLcwl = false;
		const _arrayValueMrPmXkh = "GuAni5OyP3KzZDnyIaJiBQYfzPYzh4gBDTSb9ih8aJWtC8O8Wxsw0tdo9s7uxke2yfsENAjCl9CthG6";
		const _helperjP4aw7Q = [_arrayValueMrPmXkh]
		const _returnValueJWJuLR4 = await _HelpxINbwKr.longestOptionTermLength(_cmdUpLLcwl, _helperjP4aw7Q)
		const _cmdzzLxViM = undefined;
		const _arrayValuez6zJh2S = -5.120614425153471;
		const _returnValueVjxNwDv = [_arrayValuez6zJh2S]
		const _helperO1h3yDM = () => { return _returnValueVjxNwDv };
		const _returnValueKGaxFcT = await _HelpxINbwKr.longestOptionTermLength(_cmdzzLxViM, _helperO1h3yDM)
		const _returnValuel9ImCH = undefined;
		const _optionPM0flsc = () => { return _returnValuel9ImCH };
		const _returnValuer6KrXo = await _HelpxINbwKr.optionDescription(_optionPM0flsc)
		const _argChoicesAalbzSs = {
		
	}
		const _negateV1cQpuo = null;
		const _defaultValueSWYevHn = undefined;
		const _arrayValueBtiJI8u = "4Pl5BOzK5cOPqOrsOudUnmeIq8xVH144acVAaurQXFHfrWooQoAejG";
		const _defaultValueDescriptiongrHKi9 = [_arrayValueBtiJI8u]
		const _envVarFOK8uiM = undefined;
		const _descriptionmfFnkou = undefined;
		const _optionHaFwNy0 = {
			"argChoices": _argChoicesAalbzSs,
		"negate": _negateV1cQpuo,
		"defaultValue": _defaultValueSWYevHn,
		"defaultValueDescription": _defaultValueDescriptiongrHKi9,
		"envVar": _envVarFOK8uiM,
		"description": _descriptionmfFnkou
	}
		const _returnValueqcsvktG = await _HelpxINbwKr.optionDescription(_optionHaFwNy0)
	});

	it('test for Help', async () => {
		const _HelpuCuYENL = new Help()
		const _argChoicesIFiIqI = {
		
	}
		const _negatet1O77g = {
		
	}
		const _defaultValueQ0EeGq8 = undefined;
		const _defaultValueDescriptionF3t1Iug = -3.0681716719796492;
		const _arrayValueobT0qZW = false;
		const _envVarjEI8zSp = [_arrayValueobT0qZW]
		const _arrayValueC1vC5eM = undefined;
		const _arrayValueLa3Hu5F = "EibDEbK6fFPPwKJsHE2pxlxMOveTMrc65cgyP2D3eTlEzXSjOGM5RjtlxEyg";
		const _arrayValuezoQzgU = undefined;
		const _descriptionEEkMIpF = [_arrayValueC1vC5eM, _arrayValueLa3Hu5F, _arrayValuezoQzgU]
		const _optionxrXtFbt = {
			"argChoices": _argChoicesIFiIqI,
		"negate": _negatet1O77g,
		"defaultValue": _defaultValueQ0EeGq8,
		"defaultValueDescription": _defaultValueDescriptionF3t1Iug,
		"envVar": _envVarjEI8zSp,
		"description": _descriptionEEkMIpF
	}
		const _returnValuehrllmF1 = await _HelpuCuYENL.optionDescription(_optionxrXtFbt)
		const _arrayValueJH9m4Pp = "kCnnSAtvB34XsuXG6ff7Rv3FBCOReDE7rw6RnFj2ubvSqMtOikxuYl9xLqhs2cLpsVu";
		const _arrayValueDEOPM2G = undefined;
		const _returnValuexMYJBlF = "MRBcnURY3ku1UC5FXIWqoNR4LSihlJcz1dgTsK9IBCSXuVnhv6LhH5B3y1YQktNJbxqEj32nIJfyXi";
		const _arrayValueDhZvpEh = () => { return _returnValuexMYJBlF };
		const _returnValueLa28OhE = null;
		const _arrayValuergNzLK = () => { return _returnValueLa28OhE };
		const _arrayValueoJfpijd = {
		
	}
		const _arrayValueVFoPkhR = []
		const _arrayValueEBYmTkr = [_arrayValueDhZvpEh, _arrayValuergNzLK, _arrayValueoJfpijd, _arrayValueVFoPkhR]
		const _cmdPpynUBj = [_arrayValueJH9m4Pp, _arrayValueDEOPM2G, _arrayValueEBYmTkr]
		const _arrayValuewu0ldMw = {
		
	}
		const _helperP56XndC = [_arrayValuewu0ldMw]
		const _returnValueZ05aqF3 = await _HelpuCuYENL.padWidth(_cmdPpynUBj, _helperP56XndC)
		const _arrayValueSJlTWKo = 9.82659803353923;
		const _arrayValueAPM4AT = 2.56636880494338;
		const _arrayValuezCBnMNN = [_arrayValueSJlTWKo, _arrayValueAPM4AT]
		const _arrayValueWFuEtWx = {
		
	}
		const _returnValueA74Vz0z = [_arrayValuezCBnMNN, _arrayValueWFuEtWx]
		const _cmdl9pkAlI = () => { return _returnValueA74Vz0z };
		const _returnValueaKY2SFP = await _HelpuCuYENL.visibleArguments(_cmdl9pkAlI)
	});

	it('test for Help', async () => {
		const _HelpLohOB1y = new Help()
		const _argChoicesYSLfx22 = undefined;
		const _defaultValuefTLm27Z = "ILkqOSGPTb9EI46wzsbcjrlihO1UKd6ybTGVKQMfMzvxDspDjmG0W6qMSVzLdVfuwrFxmTNbIpT2Eu";
		const _defaultValueDescriptionGN91MHv = null;
		const _returnValueEInNvxo = -8.967135516348073;
		const _descriptionF5EnDFx = () => { return _returnValueEInNvxo };
		const _argumentlIBzQyp = {
			"argChoices": _argChoicesYSLfx22,
		"defaultValue": _defaultValuefTLm27Z,
		"defaultValueDescription": _defaultValueDescriptionGN91MHv,
		"description": _descriptionF5EnDFx
	}
		const _returnValuenDFOYu0 = await _HelpLohOB1y.argumentDescription(_argumentlIBzQyp)
		const _returnValueznlDHTN = null;
		const _flagswRzZhAn = () => { return _returnValueznlDHTN };
		const _descriptionkSsmGqc = undefined;
		const _cmdmgN97l3 = new Option(_flagswRzZhAn, _descriptionkSsmGqc)
		const _nameK27IFPG = undefined;
		const _returnValuei8g4rDk = await _cmdmgN97l3.env(_nameK27IFPG)
		const _valuesmvrbpec = "kjC3z0nceDvyk3FYRvmoJVIxD";
		const _returnValueozrYR4L = await _cmdmgN97l3.choices(_valuesmvrbpec)
		const _namepDHE8W4 = undefined;
		const _returnValuec3jgODW = await _cmdmgN97l3.env(_namepDHE8W4)
		const _returnValueTMXKM0X = await _HelpLohOB1y.subcommandDescription(_cmdmgN97l3)
		const _cmdhhdAmZc = undefined;
		const _returnValuexquY1Jp = -2.2630991171785118;
		const _visibleArgumentso8vhnwt = () => { return _returnValuexquY1Jp };
		const _returnValuertVQZEk = 3.9813771229481034;
		const _argumentTermDqnJTD4 = () => { return _returnValuertVQZEk };
		const _helperruYczFx = {
			"visibleArguments": _visibleArgumentso8vhnwt,
		"argumentTerm": _argumentTermDqnJTD4
	}
		const _returnValuehOQbZn = await _HelpLohOB1y.longestArgumentTermLength(_cmdhhdAmZc, _helperruYczFx)
		const _cmdK2g579I = "3bT6HetatF";
		const _helperajkRUAl = new Help()
		const _arrayValuefLjtvkC = []
		const _nameGg4sc0Z = [_arrayValuefLjtvkC]
		const _descriptionv4ZNx2Z = -9.846774751498485;
		const _optionvi4czgE = new Argument(_nameGg4sc0Z, _descriptionv4ZNx2Z)
		const _returnValueodZdeWB = await _optionvi4czgE.name()
		const _returnValueqfbG4YM = await _optionvi4czgE.argOptional()
		const _fnzpuPDR = undefined;
		const _returnValuezjGfCv2 = await _optionvi4czgE.argParser(_fnzpuPDR)
		const _returnValueFbh7Yby = await _optionvi4czgE.argOptional()
		const _returnValuek9SFE7F = await _helperajkRUAl.optionDescription(_optionvi4czgE)
		const _optionsex1Be1K = {
		
	}
		const _returnValueuHKxqi1 = 2.6369392021944513;
		const __hasHelpOptioneQfgUko = () => { return _returnValueuHKxqi1 };
		const __helpShortFlaguv38mu7 = undefined;
		const __findOptionvPGwvU = "HTiweCSkiDdYD8x9MfOmGNJONXDfhXl8ePCSiuoj8Cf9AWODkl1vugObzJW4RMjPogYJrSDclerGaq2epaO84KsNBcJyfNz";
		const __helpLongFlagLKfSK9t = {
		
	}
		const _returnValueM9KQHI = null;
		const _createOptionMgVhiQ1 = () => { return _returnValueM9KQHI };
		const __helpDescriptionRP5K4rh = false;
		const __helpFlagsZNHrKhs = false;
		const _cmdkUxjXbZ = {
			"options": _optionsex1Be1K,
		"_hasHelpOption": __hasHelpOptioneQfgUko,
		"_helpShortFlag": __helpShortFlaguv38mu7,
		"_findOption": __findOptionvPGwvU,
		"_helpLongFlag": __helpLongFlagLKfSK9t,
		"createOption": _createOptionMgVhiQ1,
		"_helpDescription": __helpDescriptionRP5K4rh,
		"_helpFlags": __helpFlagsZNHrKhs
	}
		const _returnValueL3naO4s = await _helperajkRUAl.visibleOptions(_cmdkUxjXbZ)
		const _arrayValuegJsRFTM = "XTmnHJjVPfHeug58z";
		const _flagskXeUI8l = [_arrayValuegJsRFTM]
		const _descriptionhf7xZWW = null;
		const _optionH6zvU6g = new Option(_flagskXeUI8l, _descriptionhf7xZWW)
		const _hideufYxsp6 = true;
		const _returnValuePHldfKw = await _optionH6zvU6g.hideHelp(_hideufYxsp6)
		const _returnValueQiLJBUd = await _optionH6zvU6g.attributeName()
		const _returnValuejRNV4gQ = await _optionH6zvU6g.attributeName()
		const _argB54MKEV = "z8AXHrYUB7OZGT9oyy6cJ32";
		const _returnValueOnfyF0l = await _optionH6zvU6g.is(_argB54MKEV)
		const _returnValueHNItOA5 = await _helperajkRUAl.optionDescription(_optionH6zvU6g)
		const _cmdcwusa1H = undefined;
		const _returnValuezwliVQL = await _helperajkRUAl.subcommandTerm(_cmdcwusa1H)
		const _returnValuetbxikp = await _HelpLohOB1y.longestOptionTermLength(_cmdK2g579I, _helperajkRUAl)
	});

	it('test for Help', async () => {
		const _HelpWmedWc = new Help()
		const _arrayValueNaDsXmF = true;
		const _arrayValueThAgK9n = null;
		const _arrayValuevKVbGM5 = undefined;
		const _nameNzIXEsv = [_arrayValueNaDsXmF, _arrayValueThAgK9n, _arrayValuevKVbGM5]
		const _descriptionXeMzrT6 = false;
		const _optionVgXjjtd = new Argument(_nameNzIXEsv, _descriptionXeMzrT6)
		const _valueSqBVuYd = {
		
	}
		const _descriptionwAI2Fxt = -9.909609900009505;
		const _returnValuezne6PF1 = await _optionVgXjjtd.default(_valueSqBVuYd, _descriptionwAI2Fxt)
		const _fnCjFZGz = undefined;
		const _returnValuelWN88P5 = await _optionVgXjjtd.argParser(_fnCjFZGz)
		const _valueenw4PIG = undefined;
		const _arrayValueWkUpsUT = null;
		const _arrayValueQeNubpK = null;
		const _arrayValuevFC030 = undefined;
		const _arrayValueR8ogO7O = [_arrayValueWkUpsUT, _arrayValueQeNubpK, _arrayValuevFC030]
		const _arrayValueElyuUtT = {
		
	}
		const _arrayValuelyIJmtp = "MMnJDHaolJiaddojQJiz5n";
		const _arrayValuePTewYK = "16kgX30iMKjr2tsNtrJAllrm8rOXwnMAQttY5parIwBmt4QhSAQr34U5sUXhYnSCQ9MJRvsOAeb9On70k4nmKWUnaCpAxSPrTHH";
		const _returnValueSpv4FkF = {
		
	}
		const _arrayValueAnUSaIb = () => { return _returnValueSpv4FkF };
		const _arrayValueI3oYdWj = [_arrayValueElyuUtT, _arrayValuelyIJmtp, _arrayValuePTewYK, _arrayValueAnUSaIb]
		const _previouson6wAmD = [_arrayValueR8ogO7O, _arrayValueI3oYdWj]
		const _returnValuesZTcZO = await _optionVgXjjtd._concatValue(_valueenw4PIG, _previouson6wAmD)
		const _returnValuep8Evqgy = await _HelpWmedWc.optionDescription(_optionVgXjjtd)
		const __namezzLl2J4 = 2.568132472606683;
		const __aliaseszOHf4Tl = {
		
	}
		const _arrayValueVonKCdt = []
		const _returnValueBNrwZdj = [_arrayValueVonKCdt]
		const _parentWZdpGHm = () => { return _returnValueBNrwZdj };
		const _returnValueO0KplIO = null;
		const _usageawuC2e = () => { return _returnValueO0KplIO };
		const _cmdSLmooKf = {
			"_name": __namezzLl2J4,
		"_aliases": __aliaseszOHf4Tl,
		"parent": _parentWZdpGHm,
		"usage": _usageawuC2e
	}
		const _returnValueWwufm4w = await _HelpWmedWc.commandUsage(_cmdSLmooKf)
	});

	it('test for Help', async () => {
		const _HelpSLHBfKF = new Help()
		const _arrayValueH514arL = "bSgLTQMFt9ihEwfGV0i5QGygAUYAEuRpKud461PnoHfHyUHGkzSDnKaLi58A6hhiL8KMYgJ6AkR";
		const _arrayValueXS0OK5 = undefined;
		const _arrayValue79hoXT = null;
		const _arrayValuebv3oLQ = {
		
	}
		const _arrayValuefPBsXg1 = "weYWpeHMXmxENZDfnxoWGytVnOziFAtQCAo9Gtc8CEhT8R1eIojO8NGse7hdjp91cYPVaSTOB8Yjqs3p8NMWi83XTgZ";
		const _arrayValuehPAq4gR = [_arrayValue79hoXT, _arrayValuebv3oLQ, _arrayValuefPBsXg1]
		const _arrayValuefQ28ceW = {
		
	}
		const _arrayValuetMe4eJ8 = "mkWQJfPvWYjEYhCP8qnxtCa8gyuIeAlsX1nroriIM5XeqiDCvFhaKn78n";
		const _arrayValuekphEtoZ = [_arrayValuefQ28ceW, _arrayValuetMe4eJ8]
		const _arrayValueRc9CkIL = null;
		const _arrayValueZTvALKo = "OTA7tQq3Ir3ks";
		const _arrayValueJMvYGkT = [_arrayValuehPAq4gR, _arrayValuekphEtoZ, _arrayValueRc9CkIL, _arrayValueZTvALKo]
		const _arrayValueSpNRJPc = [_arrayValueH514arL, _arrayValueXS0OK5, _arrayValueJMvYGkT]
		const _arrayValueyJBtlbK = -8.626353451837165;
		const _nameaGMmecS = [_arrayValueSpNRJPc, _arrayValueyJBtlbK]
		const _cmdw4sPqQL = new Command(_nameaGMmecS)
		const _namebU8cajk = "YuPtnoia1GFAntKLqIuKwE2zRnvwnIM61ewUcO4pOqAu70YfI3tU5vszylXIrF3Yac9ZS6HzE4acpcajXsWWqT";
		const _returnValueHBAlcCd = await _cmdw4sPqQL.createCommand(_namebU8cajk)
		const _allowExcessqlo10bo = true;
		const _returnValuejCT6Xf = await _cmdw4sPqQL.allowExcessArguments(_allowExcessqlo10bo)
		const _returnValueyuNFVCf = await _HelpSLHBfKF.visibleCommands(_cmdw4sPqQL)
		const _returnValueibNaypE = false;
		const _arrayValueZvNxp8P = () => { return _returnValueibNaypE };
		const _arrayValueDkofN9J = undefined;
		const _arrayValueJJGShsX = [_arrayValueDkofN9J]
		const _cmdLhTz7H = [_arrayValueZvNxp8P, _arrayValueJJGShsX]
		const _returnValuewX2t6Q7 = await _HelpSLHBfKF.visibleArguments(_cmdLhTz7H)
		const _optionY6pnN24 = 3.03347265854576;
		const _returnValueyaT8PW8 = await _HelpSLHBfKF.optionTerm(_optionY6pnN24)
	});
})