export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpfK7cUdQ = new Help()
		const _cmdJwVVNC7 = "1zeswUq8F2RRN9TT";
		const _sortSubcommandsQ0oJ5b = undefined;
		const _returnValuez7ma6E = -0.9405931658711566;
		const _subcommandTermU12DM2G = () => { return _returnValuez7ma6E };
		const _helperk3kk4qv = {
			"sortSubcommands": _sortSubcommandsQ0oJ5b,
		"subcommandTerm": _subcommandTermU12DM2G
	}
		const _returnValueJPqsajh = await _HelpfK7cUdQ.longestSubcommandTermLength(_cmdJwVVNC7, _helperk3kk4qv)
		const _cmdYsC6Bm2 = null;
		const _helperVIQry5Z = new Help()
		const _argChoicesWvC54L6 = {
		
	}
		const _defaultValue6Ur78z = undefined;
		const _defaultValueDescriptionELrC2l1 = "kP9gocdT6s5w6N3gNDi431998hTjj";
		const _descriptionbg0OTVT = undefined;
		const _argumentNmOqDgv = {
			"argChoices": _argChoicesWvC54L6,
		"defaultValue": _defaultValue6Ur78z,
		"defaultValueDescription": _defaultValueDescriptionELrC2l1,
		"description": _descriptionbg0OTVT
	}
		const _returnValueldzQkTK = await _helperVIQry5Z.argumentDescription(_argumentNmOqDgv)
		const _arrayValueGjcnVDI = false;
		const _arrayValuepom4bLL = undefined;
		const _strasR32az = [_arrayValueGjcnVDI, _arrayValuepom4bLL]
		const _widthFuoWB8g = -7.79717002482104;
		const _indentFMTMoGj = 8.555316454729827;
		const _minColumnWidthLPx28JL = 6.922376863602061;
		const _returnValueRJUKnTx = await _helperVIQry5Z.wrap(_strasR32az, _widthFuoWB8g, _indentFMTMoGj, _minColumnWidthLPx28JL)
		const _cmdmd7F8u = undefined;
		const _arrayValuetGRoqdP = "BXf3NdOLSm2zLWfOybS4ODeHJEldsDHBus7ly7fGNMgEpiy1uVOQJBSRaVogx55P";
		const _arrayValuesZU0ubO = "lKAkqoR3wVCIVntEopmiv5aosbvzY0LVOCGUABZfNUl5OeqQWMdVozBtaqZCBgfgWmvT";
		const _arrayValueOco0XT5 = "2vByglrXpnlFeeIG4t66H8TjoinDgSu7ZLK";
		const _arrayValuekJZhQl = null;
		const _arrayValueN5mONU5 = [_arrayValueOco0XT5, _arrayValuekJZhQl]
		const _arrayValueMfOGqmG = [_arrayValuesZU0ubO, _arrayValueN5mONU5]
		const _arrayValueSsNC2tz = null;
		const _arrayValuedfUBcm8 = -4.964613693861729;
		const _helperCgNsAf8 = [_arrayValuetGRoqdP, _arrayValueMfOGqmG, _arrayValueSsNC2tz, _arrayValuedfUBcm8]
		const _returnValuesfgOZMy = await _helperVIQry5Z.longestArgumentTermLength(_cmdmd7F8u, _helperCgNsAf8)
		const _arrayValuekNdjsVK = undefined;
		const _cmdbEE7wjX = [_arrayValuekNdjsVK]
		const _arrayValueHyeQWnC = null;
		const _helperKrEKl0 = [_arrayValueHyeQWnC]
		const _returnValueCDntWjr = await _helperVIQry5Z.longestArgumentTermLength(_cmdbEE7wjX, _helperKrEKl0)
		const _arrayValuehMbCZkK = "TvFLsLZ6agnajRup4OXvGSLrEHoq6DViRsBnv9KZcnLtdewGtkFX7I5bmKoDxs2Jtb5mRHTAXE3jhtCGlf13a";
		const _cmdNxTJGW = [_arrayValuehMbCZkK]
		const _returnValueLnJgdjT = await _helperVIQry5Z.visibleCommands(_cmdNxTJGW)
		const _returnValueEInVb3Y = await _HelpfK7cUdQ.formatHelp(_cmdYsC6Bm2, _helperVIQry5Z)
		const _arrayValueUyErqnc = {
		
	}
		const _arrayValueModvPs8 = undefined;
		const _arrayValueG619ZdH = {
		
	}
		const _returnValuevNj3zYD = [_arrayValueUyErqnc, _arrayValueModvPs8, _arrayValueG619ZdH]
		const _includesSrmo4Ky = () => { return _returnValuevNj3zYD };
		const _flagsDsJhYcd = {
			"includes": _includesSrmo4Ky
	}
		const _descriptionaw7JJdF = {
		
	}
		const _optionHs1J74T = new Option(_flagsDsJhYcd, _descriptionaw7JJdF)
		const _valuesABsOxK = undefined;
		const _returnValuenE254S = await _optionHs1J74T.choices(_valuesABsOxK)
		const _returnValueE2Wnqk3 = await _HelpfK7cUdQ.optionTerm(_optionHs1J74T)
		const _returnValuefioRnYX = -1.2983555004517484;
		const _nameHBgJJnV = () => { return _returnValuefioRnYX };
		const _arrayValueddgL2X8 = null;
		const _returnValueQz6PUEy = undefined;
		const _arrayValuejDdmStG = () => { return _returnValueQz6PUEy };
		const _arrayValueLTZDUkT = "dhrI6OBlahbB4ikirmvOhvwAVksEebDFUCaxMI8fyA6bfxTkspaeHcIp";
		const _arrayValueoueBHuw = [_arrayValueLTZDUkT]
		const _descriptiondr2Q7zE = [_arrayValueddgL2X8, _arrayValuejDdmStG, _arrayValueoueBHuw]
		const _optionr7jRXkC = new Argument(_nameHBgJJnV, _descriptiondr2Q7zE)
		const _arrayValueF8lPpgj = "f2WSYlqn2jRmE0R6xkcLHpxbUmNPbR4Qnv8BvK8vpNUOLfBPotNABEkul7EOM8hf9S2mgzmBWnm7oqOJqCVVy0Aqq6DL";
		const _valuezOrtGU = [_arrayValueF8lPpgj]
		const _descriptionTgkPAU = 6.181006084091102;
		const _returnValueLgc7oME = await _optionr7jRXkC.default(_valuezOrtGU, _descriptionTgkPAU)
		const _returnValueWvkw3IW = await _HelpfK7cUdQ.optionDescription(_optionr7jRXkC)
	});

	it('test for Help', async () => {
		const _HelpD1CfBv = new Help()
		const _returnValueTLHmzOu = null;
		const _nameNARCZyg = () => { return _returnValueTLHmzOu };
		const _argumentopOpOZv = {
			"name": _nameNARCZyg
	}
		const _returnValueEoCFki4 = await _HelpD1CfBv.argumentTerm(_argumentopOpOZv)
		const _cmdgEsrTOh = undefined;
		const _arrayValueEu5itLR = {
		
	}
		const _helperKL6623k = [_arrayValueEu5itLR]
		const _returnValueaADfGWi = await _HelpD1CfBv.padWidth(_cmdgEsrTOh, _helperKL6623k)
		const _cmdMhhc4TX = true;
		const _arrayValuetYRk2Z = true;
		const _helperfuCu0qy = [_arrayValuetYRk2Z]
		const _returnValueh7e5pCT = await _HelpD1CfBv.formatHelp(_cmdMhhc4TX, _helperfuCu0qy)
	});

	it('test for Help', async () => {
		const _HelpjTbvGd2 = new Help()
		const _returnValueLHC00e7 = undefined;
		const _descriptionf87Smf = () => { return _returnValueLHC00e7 };
		const _cmdy2e4IVJ = {
			"description": _descriptionf87Smf
	}
		const _returnValuel6JdMp5 = await _HelpjTbvGd2.commandDescription(_cmdy2e4IVJ)
		const _arrayValuepcIE0R3 = undefined;
		const _strkFRFDI = [_arrayValuepcIE0R3]
		const _widthX6KaItK = 4.018671912613074;
		const _indentH6wnXLe = -2.8464580400717034;
		const _minColumnWidth1ScWEf = 2.78724473074627;
		const _returnValueJ9aRO7d = await _HelpjTbvGd2.wrap(_strkFRFDI, _widthX6KaItK, _indentH6wnXLe, _minColumnWidth1ScWEf)
		const __argsody6zKc = {
		
	}
		const __nameZbTYo3S = 0.7823882706782896;
		const __aliasesN7WkugD = {
		
	}
		const _optionssvCWx03 = {
		
	}
		const _cmddVGTXhe = {
			"_args": __argsody6zKc,
		"_name": __nameZbTYo3S,
		"_aliases": __aliasesN7WkugD,
		"options": _optionssvCWx03
	}
		const _returnValueG3sjxed = await _HelpjTbvGd2.subcommandTerm(_cmddVGTXhe)
		const _returnValuefkkRJoS = "e1FI8dSdyO9wvQENCDFzmoL4ShkYlG5B89d38NN3kWwloDoSAgWIDbRS2A24ykbbrEEshuYx3miynyJ2vucIgv";
		const _cmdlwn2c2J = () => { return _returnValuefkkRJoS };
		const _returnValueX3He8eZ = false;
		const _helperOVHcTcb = () => { return _returnValueX3He8eZ };
		const _returnValueTV30ALv = await _HelpjTbvGd2.longestArgumentTermLength(_cmdlwn2c2J, _helperOVHcTcb)
	});

	it('test for Help', async () => {
		const _HelpDWnBvoe = new Help()
		const _arrayValuelEAIj7g = {
		
	}
		const _arrayValueLfg3pP2 = false;
		const _arrayValueQ9F7AbO = false;
		const _cmdnqkejbO = [_arrayValuelEAIj7g, _arrayValueLfg3pP2, _arrayValueQ9F7AbO]
		const _arrayValueHAkGpSO = undefined;
		const _returnValueN2JFG5y = -5.324432429967229;
		const _arrayValueKiCilN = () => { return _returnValueN2JFG5y };
		const _arrayValue7fWiFJ = true;
		const _arrayValuePiad71X = -8.50803624165941;
		const _arrayValuevAR2OL = [_arrayValuePiad71X]
		const _arrayValuePIy9dJs = [_arrayValue7fWiFJ, _arrayValuevAR2OL]
		const _sortSubcommandsZFoItTc = [_arrayValueHAkGpSO, _arrayValueKiCilN, _arrayValuePIy9dJs]
		const _returnValuejAlNrD7 = null;
		const _subcommandTermvUCp8fN = () => { return _returnValuejAlNrD7 };
		const _helperugaPRJG = {
			"sortSubcommands": _sortSubcommandsZFoItTc,
		"subcommandTerm": _subcommandTermvUCp8fN
	}
		const _returnValuea23xt7S = await _HelpDWnBvoe.formatHelp(_cmdnqkejbO, _helperugaPRJG)
		const _cmdsZEkhmU = null;
		const _sortSubcommandsrWYctur = false;
		const _returnValueajT5P3Z = null;
		const _arrayValuelUHBcqS = () => { return _returnValueajT5P3Z };
		const _arrayValuef5j1vkE = 0.053528475797183006;
		const _returnValueyamp844 = [_arrayValuelUHBcqS, _arrayValuef5j1vkE]
		const _subcommandTermjVmscAD = () => { return _returnValueyamp844 };
		const _helpern8L9ktK = {
			"sortSubcommands": _sortSubcommandsrWYctur,
		"subcommandTerm": _subcommandTermjVmscAD
	}
		const _returnValueHaHvMNu = await _HelpDWnBvoe.formatHelp(_cmdsZEkhmU, _helpern8L9ktK)
		const _nametxUyw9g = "lCvfs7cTP";
		const _descriptionkBlvURo = undefined;
		const _argumentgnWTVhp = new Argument(_nametxUyw9g, _descriptionkBlvURo)
		const _returnValuehUCFsrX = {
		
	}
		const _includesF4bxu67 = () => { return _returnValuehUCFsrX };
		const _joincgCyFu = "dG3vX8NTUgQW3JtjJMgW7SziKEbdsPXDfHVnhYFxiA0sPDx54ePrMNWpa";
		const _valuesh3JGt0Q = {
			"includes": _includesF4bxu67,
		"join": _joincgCyFu
	}
		const _returnValueyeWr61S = await _argumentgnWTVhp.choices(_valuesh3JGt0Q)
		const _returnValuew4ci6h = await _HelpDWnBvoe.argumentTerm(_argumentgnWTVhp)
		const _arrayValueWdg3bzb = -8.980839950064237;
		const _cmdAOpwEq = [_arrayValueWdg3bzb]
		const _returnValueXHcuB25 = true;
		const _helperfiMUuXn = () => { return _returnValueXHcuB25 };
		const _returnValueW388fUj = await _HelpDWnBvoe.padWidth(_cmdAOpwEq, _helperfiMUuXn)
	});

	it('test for Help', async () => {
		const _HelpVKNBtAc = new Help()
		const _arrayValueGPQPqdB = true;
		const _arrayValuenGKpcer = {
		
	}
		const _arrayValuePYKsj75 = true;
		const _cmdZRQVBc5 = [_arrayValueGPQPqdB, _arrayValuenGKpcer, _arrayValuePYKsj75]
		const _helperhzUqhsP = false;
		const _returnValueuCyZyZG = await _HelpVKNBtAc.longestOptionTermLength(_cmdZRQVBc5, _helperhzUqhsP)
		const _cmdprKWZ6M = -5.73542837140589;
		const _helperl2Wxmzy = null;
		const _returnValuePgKAtMJ = await _HelpVKNBtAc.longestSubcommandTermLength(_cmdprKWZ6M, _helperl2Wxmzy)
		const _returnValueaGbKE1T = undefined;
		const _sliceP7ND3Rd = () => { return _returnValueaGbKE1T };
		const _namesrRRkyD = {
			"slice": _sliceP7ND3Rd
	}
		const _descriptionMjI8BS9 = "iX5riD6VYD3mvYG423RaEuD1ad";
		const _optionEMf8CuM = new Argument(_namesrRRkyD, _descriptionMjI8BS9)
		const _valueaqYanc = {
		
	}
		const _descriptionllps5YV = undefined;
		const _returnValuekMipxqh = await _optionEMf8CuM.default(_valueaqYanc, _descriptionllps5YV)
		const _returnValueWntjAkE = await _optionEMf8CuM.argRequired()
		const _returnValueeVbO1FC = await _optionEMf8CuM.argRequired()
		const _includesAj23uiJ = true;
		const _returnValueEyPk5Jr = 4.758975041731263;
		const _joinC00jaCD = () => { return _returnValueEyPk5Jr };
		const _valuesrSk4JuE = {
			"includes": _includesAj23uiJ,
		"join": _joinC00jaCD
	}
		const _returnValuepwNjHEP = await _optionEMf8CuM.choices(_valuesrSk4JuE)
		const _returnValueAKCfDSv = await _HelpVKNBtAc.optionDescription(_optionEMf8CuM)
	});

	it('test for Help', async () => {
		const _HelpLAluBlU = new Help()
		const _cmdsiAQUMj = []
		const _helperZ3JX4ND = "jbULUwlns8hto3GrMAEZEzcE4fvgVWcDDE1IFeV1GTk14nbQOd02eF3JMAx8b4MaAHK9k";
		const _returnValuetBnvouV = await _HelpLAluBlU.longestArgumentTermLength(_cmdsiAQUMj, _helperZ3JX4ND)
		const _cmdGrK7B9J = null;
		const _sortSubcommandsCGqRJZG = null;
		const _returnValueQuPtUcK = null;
		const _subcommandTermAsF6mIA = () => { return _returnValueQuPtUcK };
		const _helperzN5tYJ5 = {
			"sortSubcommands": _sortSubcommandsCGqRJZG,
		"subcommandTerm": _subcommandTermAsF6mIA
	}
		const _returnValueqSCVRr3 = await _HelpLAluBlU.formatHelp(_cmdGrK7B9J, _helperzN5tYJ5)
		const __nameXdxM0hm = {
		
	}
		const __aliasesAgOlEQQ = {
		
	}
		const _parentmmCSCpi = {
		
	}
		const _returnValueQp14ZGK = null;
		const _usageVYX1XI = () => { return _returnValueQp14ZGK };
		const _cmdWNnUKN = {
			"_name": __nameXdxM0hm,
		"_aliases": __aliasesAgOlEQQ,
		"parent": _parentmmCSCpi,
		"usage": _usageVYX1XI
	}
		const _returnValuex19nNTc = await _HelpLAluBlU.commandUsage(_cmdWNnUKN)
		const _nameF4KBbDG = "QHWKd2AVwaeTWusL8";
		const _argumentTHZDRdt = new Command(_nameF4KBbDG)
		const _eventfbZlFKj = 0.17594731991458445;
		const _listenervd5TtiW = true;
		const _returnValueZl2fLG3 = await _argumentTHZDRdt.hook(_eventfbZlFKj, _listenervd5TtiW)
		const _flagsmnVGHnl = {
		
	}
		const _descriptioncEvxOaL = 5.808484383749635;
		const _returnValuepZMQ6HJ = await _argumentTHZDRdt.helpOption(_flagsmnVGHnl, _descriptioncEvxOaL)
		const _subcommandQgsFCN0 = undefined;
		const _argsjQNijPS = {
		
	}
		const _returnValueKfBgXsi = await _argumentTHZDRdt._executeSubCommand(_subcommandQgsFCN0, _argsjQNijPS)
		const _returnValueMa7Ffz = await _HelpLAluBlU.argumentTerm(_argumentTHZDRdt)
	});

	it('test for Help', async () => {
		const _HelpDlb2Lpb = new Help()
		const _commands7B9iQR = {
		
	}
		const _returnValueD4rxtKM = -1.5205838866451753;
		const __hasImplicitHelpCommandioBHN56 = () => { return _returnValueD4rxtKM };
		const __helpCommandnameAndArgsBohSi4N = {
		
	}
		const _createCommandDuwraUS = "YPhzV9XPaQ6TH9xJW3wXsaMFbmmfsShgJtuU5OSxrgaBKWajW";
		const _arrayValueYZhtv1O = "s4fWjL";
		const _arrayValuezXdhL0M = "clOl4MvTfROQY45S5e3YfDCSpQgT86tCsyFcM7KkFhaPoSPrvwi86UYp";
		const _arrayValueWzynhZK = null;
		const _arrayValueQfLNYjM = [_arrayValueWzynhZK]
		const _arrayValuemSl4N6B = null;
		const __helpCommandDescriptionP8IFtG = [_arrayValueYZhtv1O, _arrayValuezXdhL0M, _arrayValueQfLNYjM, _arrayValuemSl4N6B]
		const _cmdMx2PJRf = {
			"commands": _commands7B9iQR,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandioBHN56,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBohSi4N,
		"createCommand": _createCommandDuwraUS,
		"_helpCommandDescription": __helpCommandDescriptionP8IFtG
	}
		const _returnValueSlEY6Vd = await _HelpDlb2Lpb.visibleCommands(_cmdMx2PJRf)
		const _arrayValueBeaV6N = {
		
	}
		const _strjxCap5b = [_arrayValueBeaV6N]
		const _widthoaxK6O2 = 0.9659884930568516;
		const _indentxF6Q8jp = 9.490391647860157;
		const _minColumnWidthlN6MK4k = -6.24682885685761;
		const _returnValueVM8F2eO = await _HelpDlb2Lpb.wrap(_strjxCap5b, _widthoaxK6O2, _indentxF6Q8jp, _minColumnWidthlN6MK4k)
		const _cmdC0Cf35z = false;
		const _helpersnA4aiA = new Help()
		const _cmdaTQ7Wrd = "dl3dwgIPEfQLPvv9UGn21QFl6sISmzgxqrwJ49mKFEZMInN0uoxns";
		const _visibleOptionsyhLml3s = undefined;
		const _returnValuec1uorJY = "E2zCSJHXb06dzGSYpcFuSblCpyBuYfA8ShJuQjmjzHX2g224eaEWmDfsEm9oLRxCPYT4JQDASgNFuXHxbLaPzJpFa";
		const _optionTermBtYhZ4P = () => { return _returnValuec1uorJY };
		const _helperOe9ptS = {
			"visibleOptions": _visibleOptionsyhLml3s,
		"optionTerm": _optionTermBtYhZ4P
	}
		const _returnValueM2Goqkl = await _helpersnA4aiA.longestOptionTermLength(_cmdaTQ7Wrd, _helperOe9ptS)
		const _arrayValuepJnLgya = false;
		const _arrayValuei9xctpH = "FsdAZK3tPsBhP6p1w9FAzloRvQfetasJDfZS30J2JTeCkWPeO5nsxQhBVWagWyWummyG8mrxpCre8WbmKlHB5TYV3C624";
		const _cmdAQ9hM52 = [_arrayValuepJnLgya, _arrayValuei9xctpH]
		const _returnValueElo8PzV = await _helpersnA4aiA.visibleOptions(_cmdAQ9hM52)
		const _returnValuenC0L1gv = await _HelpDlb2Lpb.longestArgumentTermLength(_cmdC0Cf35z, _helpersnA4aiA)
	});

	it('test for Help', async () => {
		const _Helpbx0e80r = new Help()
		const _optionsBPePHFE = {
		
	}
		const _returnValueRgvTTse = false;
		const __hasHelpOptionaZcfInD = () => { return _returnValueRgvTTse };
		const _arrayValueYkZS2DR = -2.143379530890881;
		const __helpShortFlagl7ef0dS = [_arrayValueYkZS2DR]
		const _returnValueQsu4ei = null;
		const _returnValueNOtWS3D = () => { return _returnValueQsu4ei };
		const __findOptionLE5k9RA = () => { return _returnValueNOtWS3D };
		const __helpLongFlagp9B6jpv = 8.515881478247962;
		const _returnValueEkWzzGb = true;
		const _createOptionEaUTRcV = () => { return _returnValueEkWzzGb };
		const __helpDescriptiongJAINWy = {
		
	}
		const _arrayValuefBEfQoy = false;
		const _arrayValueDuOWdqr = -3.264490409925555;
		const __helpFlagsLItJShC = [_arrayValuefBEfQoy, _arrayValueDuOWdqr]
		const _cmdkuIu4Ax = {
			"options": _optionsBPePHFE,
		"_hasHelpOption": __hasHelpOptionaZcfInD,
		"_helpShortFlag": __helpShortFlagl7ef0dS,
		"_findOption": __findOptionLE5k9RA,
		"_helpLongFlag": __helpLongFlagp9B6jpv,
		"createOption": _createOptionEaUTRcV,
		"_helpDescription": __helpDescriptiongJAINWy,
		"_helpFlags": __helpFlagsLItJShC
	}
		const _returnValueOSVllSR = await _Helpbx0e80r.visibleOptions(_cmdkuIu4Ax)
		const _cmdF4QGPqp = -3.60443242185848;
		const _helperqiznyv5 = new Help()
		const _returnValueoS2mIVR = 9.352914599430413;
		const _returnValueKQ3cKh = () => { return _returnValueoS2mIVR };
		const _slicerIbMy8 = () => { return _returnValueKQ3cKh };
		const _name1xxuES = {
			"slice": _slicerIbMy8
	}
		const _descriptionEDpTkRI = undefined;
		const _cmdvuJ9IMg = new Argument(_name1xxuES, _descriptionEDpTkRI)
		const _returnValuepfc0mB2 = await _cmdvuJ9IMg.argRequired()
		const _returnValuexQnKKYK = await _cmdvuJ9IMg.argOptional()
		const _fnctqM77T = undefined;
		const _returnValuerIjkEJw = await _cmdvuJ9IMg.argParser(_fnctqM77T)
		const _arrayValueUQuxMz7 = -8.825244089668974;
		const _valuesknc9ltl = [_arrayValueUQuxMz7]
		const _returnValuee8Jpmh = await _cmdvuJ9IMg.choices(_valuesknc9ltl)
		const _returnValuewgsg2ce = await _helperqiznyv5.commandDescription(_cmdvuJ9IMg)
		const _cmdUiOgsee = null;
		const _helperOqjSFro = "6V4m9EQKq";
		const _returnValuepa7N2rC = await _helperqiznyv5.longestArgumentTermLength(_cmdUiOgsee, _helperOqjSFro)
		const _cmdsZhLF4r = "jtTUiQBkmQM8IR3Sl7xJ1tOTFdALQHVeKK4buDao5FbygGhmR3hGfra6HN4DlbBoA2CuQmQG6oKc1WSLi";
		const _returnValuebhLtjw6 = await _helperqiznyv5.commandUsage(_cmdsZhLF4r)
		const _nameklYHzC0 = "OyP5omoLNIPxO9yQpgmq9NmnXa2IgN4Bkw8hCgOaDBIwO";
		const _returnValueUgPlaf = 0.15974857448587443;
		const _returnValueQinsTzl = () => { return _returnValueUgPlaf };
		const _descriptionZ62Bgug = () => { return _returnValueQinsTzl };
		const _optionYaZ3gGp = new Argument(_nameklYHzC0, _descriptionZ62Bgug)
		const _returnValuewdLTGd9 = await _optionYaZ3gGp.argRequired()
		const _returnValueCOO0ilP = await _optionYaZ3gGp.argRequired()
		const _valuewKA1vL8 = undefined;
		const _descriptionfW1JzUc = undefined;
		const _returnValuep9QA90 = await _optionYaZ3gGp.default(_valuewKA1vL8, _descriptionfW1JzUc)
		const _returnValueldCyAfy = false;
		const _includesp3DMSzN = () => { return _returnValueldCyAfy };
		const _returnValueiTyihiw = {
		
	}
		const _joinUb7Jcbn = () => { return _returnValueiTyihiw };
		const _valuesoxKQUvu = {
			"includes": _includesp3DMSzN,
		"join": _joinUb7Jcbn
	}
		const _returnValuehmbbk18 = await _optionYaZ3gGp.choices(_valuesoxKQUvu)
		const _returnValueyQE5Un2 = await _helperqiznyv5.optionDescription(_optionYaZ3gGp)
		const _returnValueuGkASxI = await _Helpbx0e80r.longestOptionTermLength(_cmdF4QGPqp, _helperqiznyv5)
	});

	it('test for Help', async () => {
		const _HelpeWZCdV = new Help()
		const _flagsLQrjbLh = "p3ByapjC7dYwDzFQvoEGckY1zJnYaF";
		const _arrayValueRnCJ8hk = false;
		const _descriptioneZExXWF = [_arrayValueRnCJ8hk]
		const _optionjJw9C7W = new Option(_flagsLQrjbLh, _descriptioneZExXWF)
		const _valuepmkglAd = true;
		const _arrayValuedrFJ9N = undefined;
		const _arrayValues78z9IS = null;
		const _arrayValueA8PqK4c = undefined;
		const _previousflkI71 = [_arrayValuedrFJ9N, _arrayValues78z9IS, _arrayValueA8PqK4c]
		const _returnValueXgiXHHi = await _optionjJw9C7W._concatValue(_valuepmkglAd, _previousflkI71)
		const _fno5CvzYx = undefined;
		const _returnValuec6hggsw = await _optionjJw9C7W.argParser(_fno5CvzYx)
		const _returnValuewx0t5RS = await _HelpeWZCdV.optionTerm(_optionjJw9C7W)
		const _cmdmObgS3o = true;
		const _helperpomurpO = new Help()
		const _cmdWYt4MY = -3.2206045472363964;
		const _arrayValueSgpGOIr = true;
		const _arrayValuecrJrtEr = false;
		const _returnValuewLpE5NW = [_arrayValueSgpGOIr, _arrayValuecrJrtEr]
		const _helpertP8khtI = () => { return _returnValuewLpE5NW };
		const _returnValuefJEMLC = await _helperpomurpO.padWidth(_cmdWYt4MY, _helpertP8khtI)
		const _arrayValueBoWXxdo = false;
		const _arrayValueYlkED06 = []
		const _cmdvat2aOD = [_arrayValueBoWXxdo, _arrayValueYlkED06]
		const _returnValued7ShBhO = await _helperpomurpO.subcommandDescription(_cmdvat2aOD)
		const _returnValueE2YSRWB = undefined;
		const _matchPnaH50B = () => { return _returnValueE2YSRWB };
		const _returnValuek8IqWIf = undefined;
		const _returnValueuzZRRH8 = () => { return _returnValuek8IqWIf };
		const _substrZJEcQQR = () => { return _returnValueuzZRRH8 };
		const _strxKKKbXX = {
			"match": _matchPnaH50B,
		"substr": _substrZJEcQQR
	}
		const _widthajqo42r = 9.184511236522262;
		const _indentRRQYhZ7 = 1.2076007833173037;
		const _minColumnWidthDKaipKd = "7AAcmW9s0F5wqIM9jfyfFssuRp54OqkHQbBJrfjNMvtOsqkCsIGHCnvBan7nxDllsH";
		const _returnValueqILosm = await _helperpomurpO.wrap(_strxKKKbXX, _widthajqo42r, _indentRRQYhZ7, _minColumnWidthDKaipKd)
		const _returnValueyL0aGsi = "oO7eroFnraMIPe6roK5DJR5rDyzd7SE3xHkDUjKLDLULk1BalN5kbT16q298LfNikP5swxT8sedpF3PpKtsVbEMCp3C";
		const _returnValueequCeuV = () => { return _returnValueyL0aGsi };
		const _cmdgrkisLh = () => { return _returnValueequCeuV };
		const _returnValueB9WhTN1 = await _helperpomurpO.visibleCommands(_cmdgrkisLh)
		const _returnValuekf9MIWq = await _HelpeWZCdV.padWidth(_cmdmObgS3o, _helperpomurpO)
		const _nameOark1nh = null;
		const _descriptionTt4uElF = "XpJGiuKegCiR6Qi4qUaAODwHQ4I72jYyAa7yeUk9FfMElOO4cdWJNwPg";
		const _cmdTskK369 = new Argument(_nameOark1nh, _descriptionTt4uElF)
		const _fnZXJ73KN = undefined;
		const _returnValueOZn3D2q = await _cmdTskK369.argParser(_fnZXJ73KN)
		const _returnValueOHcLJ3l = await _cmdTskK369.argRequired()
		const _returnValueGKj0Jd5 = await _cmdTskK369.argRequired()
		const _valueME1w1CP = {
		
	}
		const _descriptionhiAoTM7 = undefined;
		const _returnValuejQKHKo3 = await _cmdTskK369.default(_valueME1w1CP, _descriptionhiAoTM7)
		const _valuespdEd9h0 = false;
		const _returnValuefEoeNSO = await _cmdTskK369.choices(_valuespdEd9h0)
		const _returnValue89ZPcS = await _HelpeWZCdV.subcommandDescription(_cmdTskK369)
		const _cmdG49GD8R = "30Oqu5WBIXM6NdT";
		const _returnValueFN2IKFy = await _HelpeWZCdV.commandDescription(_cmdG49GD8R)
	});

	it('test for Help', async () => {
		const _HelpHmVtfdo = new Help()
		const __argsQNNNa1d = {
		
	}
		const __namefoCArDg = -1.0661959984376388;
		const __aliases76rQUA = {
		
	}
		const _optionsBZMOHjh = {
		
	}
		const _cmdDgobbVe = {
			"_args": __argsQNNNa1d,
		"_name": __namefoCArDg,
		"_aliases": __aliases76rQUA,
		"options": _optionsBZMOHjh
	}
		const _returnValueLtgMhm = await _HelpHmVtfdo.subcommandTerm(_cmdDgobbVe)
		const _returnValuesPnAs8W = 8.405795232435633;
		const _optionYc5Lfei = () => { return _returnValuesPnAs8W };
		const _returnValueIIx9g6A = await _HelpHmVtfdo.optionTerm(_optionYc5Lfei)
		const _arrayValueSfNzP63 = true;
		const _cmdCycvyr8 = [_arrayValueSfNzP63]
		const _returnValuesXEsaIP = null;
		const _longestOptionTermLengthfwlnAT0 = () => { return _returnValuesXEsaIP };
		const _returnValueYYjGAZb = "eIXXb9e3Jk2fRzMhjyZXceXxghsWrLRMYV3XpfhYJNXqxn80lJFW2jy7VrXUoFHly2XQ5WNnkbnMmJpW0VGhfvE";
		const _longestSubcommandTermLengthYZfvzDS = () => { return _returnValueYYjGAZb };
		const _returnValueMj4ZE1u = -5.001252423878261;
		const _longestArgumentTermLengthaJLqRGq = () => { return _returnValueMj4ZE1u };
		const _helperwvgXpjm = {
			"longestOptionTermLength": _longestOptionTermLengthfwlnAT0,
		"longestSubcommandTermLength": _longestSubcommandTermLengthYZfvzDS,
		"longestArgumentTermLength": _longestArgumentTermLengthaJLqRGq
	}
		const _returnValueuwm5a1y = await _HelpHmVtfdo.padWidth(_cmdCycvyr8, _helperwvgXpjm)
		const _returnValueAOlAXFV = false;
		const _cmdF8nowCy = () => { return _returnValueAOlAXFV };
		const _returnValueGNbnjNW = null;
		const _helpergEZu6fy = () => { return _returnValueGNbnjNW };
		const _returnValuen4miX3h = await _HelpHmVtfdo.formatHelp(_cmdF8nowCy, _helpergEZu6fy)
		const _cmdMo030yL = []
		const _arrayValuedCe0Bq6 = {
		
	}
		const _helperMkBz0L = [_arrayValuedCe0Bq6]
		const _returnValueXF35d2s = await _HelpHmVtfdo.longestOptionTermLength(_cmdMo030yL, _helperMkBz0L)
	});

	it('test for Help', async () => {
		const _Helpzz3WnYS = new Help()
		const _arrayValueifCIfZr = undefined;
		const _cmdBVzEPO = [_arrayValueifCIfZr]
		const _returnValueYYu9V1J = await _Helpzz3WnYS.visibleArguments(_cmdBVzEPO)
		const _returnValuehhg7a5L = true;
		const _returnValuem1chfgf = () => { return _returnValuehhg7a5L };
		const _name3izqKF = () => { return _returnValuem1chfgf };
		const _argumentkeuBWFh = {
			"name": _name3izqKF
	}
		const _returnValueBEAsAj0 = await _Helpzz3WnYS.argumentTerm(_argumentkeuBWFh)
		const _returnValueg6lrOIb = true;
		const _argumentxI2SwVD = () => { return _returnValueg6lrOIb };
		const _returnValue1damKY = await _Helpzz3WnYS.argumentDescription(_argumentxI2SwVD)
		const _arrayValuefcV3GUc = false;
		const _returnValueYjfUvPy = [_arrayValuefcV3GUc]
		const _cmdzOVbAc9 = () => { return _returnValueYjfUvPy };
		const _helperhDdoiDm = new Help()
		const _cmdDzffuna = 2.1900060627863294;
		const _sortSubcommandsBlsznnG = {
		
	}
		const _returnValuecgihMHN = {
		
	}
		const _subcommandTermHglVfKF = () => { return _returnValuecgihMHN };
		const _helperY1SVaI8 = {
			"sortSubcommands": _sortSubcommandsBlsznnG,
		"subcommandTerm": _subcommandTermHglVfKF
	}
		const _returnValuer9ip8UZ = await _helperhDdoiDm.longestSubcommandTermLength(_cmdDzffuna, _helperY1SVaI8)
		const _returnValueBXyoiA1 = await _Helpzz3WnYS.longestOptionTermLength(_cmdzOVbAc9, _helperhDdoiDm)
		const _cmdDwPu8C2 = undefined;
		const _returnValueAObWs8 = 7.410400028477454;
		const _visibleArgumentsiErGNk5 = () => { return _returnValueAObWs8 };
		const _arrayValueZkHPK5z = false;
		const _arrayValueZp3TSCH = null;
		const _returnValueG6znEvk = [_arrayValueZkHPK5z, _arrayValueZp3TSCH]
		const _argumentTermZMumEk8 = () => { return _returnValueG6znEvk };
		const _helperltR0um2 = {
			"visibleArguments": _visibleArgumentsiErGNk5,
		"argumentTerm": _argumentTermZMumEk8
	}
		const _returnValuejOPA27N = await _Helpzz3WnYS.longestArgumentTermLength(_cmdDwPu8C2, _helperltR0um2)
	});

	it('test for Help', async () => {
		const _HelpmW1oE4M = new Help()
		const _optionSgo7BEc = "jhUSq7gwsyVTaCtoMYbHDt1wpi1M7iPxotx1x5eLlmp4jOQnrDFBgYR69fzdGsrzYSeqkoe";
		const _returnValueZEFfXur = await _HelpmW1oE4M.optionDescription(_optionSgo7BEc)
		const _cmdcQeTE5t = []
		const _arrayValueBIeZoRL = undefined;
		const _arrayValuecJGtq7r = false;
		const _arrayValueIYzbSWw = "jNLD1O6UgPcHksB4zaNw3w6";
		const _returnValueWXmfIeL = [_arrayValueBIeZoRL, _arrayValuecJGtq7r, _arrayValueIYzbSWw]
		const _helpertssLpak = () => { return _returnValueWXmfIeL };
		const _returnValuemFQR8ZX = await _HelpmW1oE4M.formatHelp(_cmdcQeTE5t, _helpertssLpak)
	});

	it('test for Help', async () => {
		const _HelpFA3QwNy = new Help()
		const _returnValueRwopsV = 2.262429061694853;
		const _optionOFmxAj = () => { return _returnValueRwopsV };
		const _returnValuekCidZYX = await _HelpFA3QwNy.optionDescription(_optionOFmxAj)
		const _argumentMvLNqIy = "XnEHnQiutxL1aEvLT7DW4fRvKNSuhEBU7IRrq5PA5iMfi5YRfUQLHmvdJWyBn0uDT7961mmLGB";
		const _returnValuer9wBBfG = await _HelpFA3QwNy.argumentDescription(_argumentMvLNqIy)
		const _cmdtkKGd7Z = 1.5206876460830276;
		const _arrayValueZ3LtxUc = null;
		const _returnValue70Rtih = [_arrayValueZ3LtxUc]
		const _longestOptionTermLengthVahrLrf = () => { return _returnValue70Rtih };
		const _arrayValuegHD8oLq = undefined;
		const _arrayValuecIQbqom = "0MS8lj0V3eNgamr1Fdurz";
		const _returnValueYfuA9A = [_arrayValuegHD8oLq, _arrayValuecIQbqom]
		const _longestSubcommandTermLengthoB2xS26 = () => { return _returnValueYfuA9A };
		const _returnValueZAQ3qe5 = -4.928689710977958;
		const _longestArgumentTermLengthPP5tqrV = () => { return _returnValueZAQ3qe5 };
		const _helperxUAv3al = {
			"longestOptionTermLength": _longestOptionTermLengthVahrLrf,
		"longestSubcommandTermLength": _longestSubcommandTermLengthoB2xS26,
		"longestArgumentTermLength": _longestArgumentTermLengthPP5tqrV
	}
		const _returnValueZdGLC3d = await _HelpFA3QwNy.padWidth(_cmdtkKGd7Z, _helperxUAv3al)
	});

	it('test for Help', async () => {
		const _HelpR5bfnqi = new Help()
		const _arrayValueOottW8x = true;
		const _arrayValuepaKNO1 = undefined;
		const _arrayValueA1X1MiG = null;
		const _cmdD5fQthe = [_arrayValueOottW8x, _arrayValuepaKNO1, _arrayValueA1X1MiG]
		const _helperZsmomOj = new Help()
		const _cmdeJzEZd8 = "IFxlyveYWwyNNIuXeQR0ICfV17xeej56ChlEwDvC8ovt0XEnYtjPGVQJ4OClJ7xWz5XpUXtZY2weQvZ";
		const _returnValueyC4JvNd = await _helperZsmomOj.commandUsage(_cmdeJzEZd8)
		const _cmdYPAnVID = 3.064296834890781;
		const _sortSubcommandspjHYVeB = false;
		const _returnValue4sjjCB = true;
		const _subcommandTermyxT5cK = () => { return _returnValue4sjjCB };
		const _helperjifZYU6 = {
			"sortSubcommands": _sortSubcommandspjHYVeB,
		"subcommandTerm": _subcommandTermyxT5cK
	}
		const _returnValuel8VGIe = await _helperZsmomOj.formatHelp(_cmdYPAnVID, _helperjifZYU6)
		const _returnValueX6ESu34 = await _HelpR5bfnqi.padWidth(_cmdD5fQthe, _helperZsmomOj)
		const _returnValuexCpIQdL = false;
		const _descriptiontEusc96 = () => { return _returnValuexCpIQdL };
		const _cmdBsa0LvD = {
			"description": _descriptiontEusc96
	}
		const _returnValuekw4DJf3 = await _HelpR5bfnqi.subcommandDescription(_cmdBsa0LvD)
	});

	it('test for Help', async () => {
		const _HelpifmVzms = new Help()
		const _strszZM9CV = "RbeF9phfPAP";
		const _width2RiDhU = 4.0983228241675;
		const _indentlNpQADu = -2.09509054486551;
		const _minColumnWidthrq2ywnm = 0.9444616450957461;
		const _returnValuesbOzw1y = await _HelpifmVzms.wrap(_strszZM9CV, _width2RiDhU, _indentlNpQADu, _minColumnWidthrq2ywnm)
		const _returnValueM0ErVXw = 2.8095990480435233;
		const _arrayValuenCuqMUd = () => { return _returnValueM0ErVXw };
		const _arrayValuercutrQt = "8OR0AYBxqJGq6Ew19uMusVxcQLoB4EHoZEqW6zfqsOObzSxKTqxxRnTDp9epR";
		const _argumentrnN7BJu = [_arrayValuenCuqMUd, _arrayValuercutrQt]
		const _returnValuec3db2kK = await _HelpifmVzms.argumentDescription(_argumentrnN7BJu)
		const _returnValueOGf8ZcT = null;
		const _cmdUJ4cKBK = () => { return _returnValueOGf8ZcT };
		const _returnValue2VpaLz = await _HelpifmVzms.visibleOptions(_cmdUJ4cKBK)
		const _cmdiljh6Sq = -3.5902701813025892;
		const _helperPG9ktAE = new Help()
		const _flagsAbz3kNN = "V16E6GmkE6BUELnQy1Mk2qoFBFrbfiPf0mWfP7GawN79R5X3gP2Ueld1f5kO4jTC9NbM";
		const _descriptioneMGtIeP = -3.8157162342934248;
		const _cmdqtlOeIG = new Option(_flagsAbz3kNN, _descriptioneMGtIeP)
		const _returnValuekdDK4o6 = await _cmdqtlOeIG.attributeName()
		const _returnValueMpdNhH5 = await _helperPG9ktAE.subcommandDescription(_cmdqtlOeIG)
		const _returnValueqZjXuz8 = "J66buCjxq91ieFXL1bSpDTRPw8kL8q2Oxz476FYKfryCmVayEHHcKnuooHGdy";
		const _strVft833p = () => { return _returnValueqZjXuz8 };
		const _widthv6U4PxK = "FNUinko4DOYvijdZU2OoJahz3fYt4PjjiNHFpqS6qHVmlhcbjh6uV9hLn8N5KI8";
		const _indenthwRIQBZ = 1.5731580042711624;
		const _minColumnWidthm1yETQc = 5.222282974995238;
		const _returnValueIsv2A09 = await _helperPG9ktAE.wrap(_strVft833p, _widthv6U4PxK, _indenthwRIQBZ, _minColumnWidthm1yETQc)
		const _returnValueVDJLPxY = await _HelpifmVzms.longestSubcommandTermLength(_cmdiljh6Sq, _helperPG9ktAE)
	});

	it('test for Help', async () => {
		const _HelpW8poSyi = new Help()
		const _nameeHsFJ91 = "boEUUDhlfnRenfATkdOnXMhW2zWpAJ1xkJ5dmq1mLh4zd40ch";
		const _descriptionZvgRzUo = undefined;
		const _cmdhcJXuDr = new Argument(_nameeHsFJ91, _descriptionZvgRzUo)
		const _fngNsOjur = undefined;
		const _returnValueaXP5Tb3 = await _cmdhcJXuDr.argParser(_fngNsOjur)
		const _returnValue7JhNlH = await _HelpW8poSyi.subcommandDescription(_cmdhcJXuDr)
		const _returnValueqX6jwz2 = false;
		const _sliceKt6G730 = () => { return _returnValueqX6jwz2 };
		const _nameBs30hdy = {
			"slice": _sliceKt6G730
	}
		const _arrayValuep0lX1uv = null;
		const _arrayValueX4C0f8n = -6.535123028377895;
		const _descriptionRfRyl4N = [_arrayValuep0lX1uv, _arrayValueX4C0f8n]
		const _argumentiULUIdi = new Argument(_nameBs30hdy, _descriptionRfRyl4N)
		const _valueJCvxvSP = true;
		const _returnValueWtuSSu1 = null;
		const _previousHRcHYUI = () => { return _returnValueWtuSSu1 };
		const _returnValueURAywLH = await _argumentiULUIdi._concatValue(_valueJCvxvSP, _previousHRcHYUI)
		const _fnWOh8SF1 = undefined;
		const _returnValueyNgB86n = await _argumentiULUIdi.argParser(_fnWOh8SF1)
		const _returnValueD1Pz5I8 = await _argumentiULUIdi.argRequired()
		const _valueOnMGsVN = "LF7cT46hdde5RKZyQUa1U8vxJwhzExeL3XKwzICNXEgR1NyDFpmnX19LRwGFE2p4kxaAidtJZVv9U4NopKQcfN6owpetn4vcp";
		const _returnValueD5vfLi = null;
		const _concatS50u8Kc = () => { return _returnValueD5vfLi };
		const _previousYjAt4Eq = {
			"concat": _concatS50u8Kc
	}
		const _returnValueP1rom6z = await _argumentiULUIdi._concatValue(_valueOnMGsVN, _previousYjAt4Eq)
		const _returnValueZnM80sr = await _HelpW8poSyi.argumentTerm(_argumentiULUIdi)
	});

	it('test for Help', async () => {
		const _Helpb59DU8Y = new Help()
		const __namewRFYCW = "hupjojbzCajW3dHHDgO6J4rU1HDITXUIqF9U7BKLTJ4Ytg1bdvE5";
		const __aliasesbdO7835 = {
		
	}
		const _parentBL0zGA7 = {
		
	}
		const _returnValueRdc2BVp = {
		
	}
		const _usageRdf0q4x = () => { return _returnValueRdc2BVp };
		const _cmdLle31Jk = {
			"_name": __namewRFYCW,
		"_aliases": __aliasesbdO7835,
		"parent": _parentBL0zGA7,
		"usage": _usageRdf0q4x
	}
		const _returnValueAzihY5c = await _Helpb59DU8Y.commandUsage(_cmdLle31Jk)
		const _optionz7zf1c2 = -4.735863060477133;
		const _returnValueYijHH6p = await _Helpb59DU8Y.optionTerm(_optionz7zf1c2)
		const _argChoicesPNQqnEZ = {
		
	}
		const _defaultValueyq23i47 = undefined;
		const _defaultValueDescriptionu7TMy6B = -6.4968740978583615;
		const _descriptionDQmEfjr = "9rKoWevMKyhJ3LtWhFb5vy77V7FUUCi";
		const _argumentVwRODHu = {
			"argChoices": _argChoicesPNQqnEZ,
		"defaultValue": _defaultValueyq23i47,
		"defaultValueDescription": _defaultValueDescriptionu7TMy6B,
		"description": _descriptionDQmEfjr
	}
		const _returnValuetv2AZnl = await _Helpb59DU8Y.argumentDescription(_argumentVwRODHu)
		const _returnValueYdJW1B7 = false;
		const _namebcaNDtt = () => { return _returnValueYdJW1B7 };
		const _cmdiJO5reA = new Command(_namebcaNDtt)
		const _nameMLdlN0e = null;
		const _descriptionKmXQplZ = {
		
	}
		const _returnValuen9JI1yx = await _cmdiJO5reA.createArgument(_nameMLdlN0e, _descriptionKmXQplZ)
		const _keydffAwXg = "DcWb2E3I9OUMk2hBdyCJ5Fv6m1MMV4W52CwTKsH4CGo5OSuA7FqOVcEihFQkgdDU32Wo6W2dxAH";
		const _valuexmHbME = undefined;
		const _sourceT5eaoQr = undefined;
		const _returnValuebGvXmFA = await _cmdiJO5reA.setOptionValueWithSource(_keydffAwXg, _valuexmHbME, _sourceT5eaoQr)
		const _returnValueNbDpRy7 = await _Helpb59DU8Y.visibleArguments(_cmdiJO5reA)
	});

	it('test for Help', async () => {
		const _HelprkV5ZxY = new Help()
		const _arrayValueknTnGVd = "3OG8IGdFMv6PUZ7NKK2KjEUwWirNC8fuB4MD9jEnzX8OrXSzXWjNGl2BKgsIMfvOY4an3iCK9V6eCfdLFcEKhTAlgm1sEr";
		const _namekWeQZqV = [_arrayValueknTnGVd]
		const _descriptionVH6AkP5 = undefined;
		const _argumentZdPPQqy = new Argument(_namekWeQZqV, _descriptionVH6AkP5)
		const _arrayValueeDWVIpx = 3.9535789924251485;
		const _arrayValueWeynoVk = true;
		const _valuesjqDrTYC = [_arrayValueeDWVIpx, _arrayValueWeynoVk]
		const _returnValueCqdMf0 = await _argumentZdPPQqy.choices(_valuesjqDrTYC)
		const _fnQoas3ba = undefined;
		const _returnValuewf0eNXy = await _argumentZdPPQqy.argParser(_fnQoas3ba)
		const _returnValuej5i2jQs = await _argumentZdPPQqy.name()
		const _fnRDb6rQ = 2.8986221637341814;
		const _returnValue70ZvnS = await _argumentZdPPQqy.argParser(_fnRDb6rQ)
		const _returnValueFPiZLaV = await _HelprkV5ZxY.argumentDescription(_argumentZdPPQqy)
		const _nameje0Tv4C = "mjVCf5ShTwEs90oNQQxrFJtmStN8PBuYiQ3Y533JyEqBRBUsd1BI8BwZwKDHyjfzcRhj9LC6OvsM";
		const _cmdDlpJPLX = new Command(_nameje0Tv4C)
		const _messagevpdYB0v = true;
		const _optionVpsMQtL = new InvalidArgumentError(_messagevpdYB0v)
		const _returnValueDRRYAm2 = await _cmdDlpJPLX.addOption(_optionVpsMQtL)
		const _namec67QCO3 = false;
		const _returnValueLoYFSUs = await _cmdDlpJPLX.missingArgument(_namec67QCO3)
		const _returnValuegc7Q4Bm = await _HelprkV5ZxY.subcommandDescription(_cmdDlpJPLX)
	});

	it('test for Help', async () => {
		const _HelpBku0m76 = new Help()
		const _optionGc9HEeL = "feg0K0wV1olr3CqvzMj4X0SzVmbWGWHzUflO7JFAJYxmpuH9hocip";
		const _returnValueQE6s1ww = await _HelpBku0m76.optionTerm(_optionGc9HEeL)
		const __argsDescriptionxYDRSBk = {
		
	}
		const __argsUnwQKM1 = {
		
	}
		const _cmd9DgIdD = {
			"_argsDescription": __argsDescriptionxYDRSBk,
		"_args": __argsUnwQKM1
	}
		const _returnValuewrkZHEr = await _HelpBku0m76.visibleArguments(_cmd9DgIdD)
	});

	it('test for Help', async () => {
		const _HelpBpVGnRO = new Help()
		const _arrayValuehhj9ZDz = undefined;
		const _arrayValuefwg3X1v = 2.662262585414892;
		const _namek6Kz3pf = [_arrayValuehhj9ZDz, _arrayValuefwg3X1v]
		const _cmdDteZhng = new Command(_namek6Kz3pf)
		const _keye2CGtQ0 = undefined;
		const _returnValuevdkO8Ni = await _cmdDteZhng.getOptionValueSource(_keye2CGtQ0)
		const _aliaszi9hUzF = {
		
	}
		const _returnValueo7Weism = await _cmdDteZhng.alias(_aliaszi9hUzF)
		const _returnValueU36xquV = await _cmdDteZhng._parseOptionsEnv()
		const _returnValueov3WhAk = await _HelpBpVGnRO.visibleOptions(_cmdDteZhng)
		const _arrayValueH31PYo = {
		
	}
		const _arrayValueZolvXeo = null;
		const _arrayValuePAhxHKC = false;
		const _cmdWZaRYjQ = [_arrayValueH31PYo, _arrayValueZolvXeo, _arrayValuePAhxHKC]
		const _helpernVcwKOi = new Help()
		const _flagsdGIFma5 = "4S1oH6JE2CwLje7v5NKKiJ9B4VbtlYlVRci1h36Ck";
		const _optionB8vnb65 = {
			"flags": _flagsdGIFma5
	}
		const _returnValueMfEisSd = await _helpernVcwKOi.optionTerm(_optionB8vnb65)
		const _arrayValuep6eZJyi = -1.890474494501028;
		const _returnValueOF3khfX = "KhZGkzaJBbW";
		const _arrayValuexu9PKDK = () => { return _returnValueOF3khfX };
		const _arrayValuehdV7OgY = null;
		const _arrayValueT6Ky4bV = [_arrayValuexu9PKDK, _arrayValuehdV7OgY]
		const _arrayValuesGFK6Zf = null;
		const _arrayValueQejKDHS = [_arrayValuep6eZJyi, _arrayValueT6Ky4bV, _arrayValuesGFK6Zf]
		const _cmdpOQjY2 = [_arrayValueQejKDHS]
		const _returnValuezZmWub = {
		
	}
		const _returnValueXdsY5Gw = () => { return _returnValuezZmWub };
		const _sortSubcommandsxL7qBE8 = () => { return _returnValueXdsY5Gw };
		const _returnValuezwAChv = true;
		const _subcommandTermUtdQ1Ws = () => { return _returnValuezwAChv };
		const _helperO3yykHH = {
			"sortSubcommands": _sortSubcommandsxL7qBE8,
		"subcommandTerm": _subcommandTermUtdQ1Ws
	}
		const _returnValueUXlLfTn = await _helpernVcwKOi.longestSubcommandTermLength(_cmdpOQjY2, _helperO3yykHH)
		const _strt0TqALn = "JGgBLaGp86apFoK";
		const _widthKNQT3d = -7.202439741314205;
		const _indentqfORciC = -8.284275401819201;
		const _minColumnWidths4iMDzu = -5.012020817813061;
		const _returnValuevbs7ihb = await _helpernVcwKOi.wrap(_strt0TqALn, _widthKNQT3d, _indentqfORciC, _minColumnWidths4iMDzu)
		const _returnValueobXNPUy = await _HelpBpVGnRO.formatHelp(_cmdWZaRYjQ, _helpernVcwKOi)
		const _nameAobVgX6 = "4AbkRnH5g35Rl44i3MVAdAviax4OlH";
		const _cmdPxtHDC1 = new Command(_nameAobVgX6)
		const _allowUnknownajNcpyJ = false;
		const _returnValuefSjpwGA = await _cmdPxtHDC1.allowUnknownOption(_allowUnknownajNcpyJ)
		const _returnValueeOi5wPU = undefined;
		const _requiredUO3Aom = () => { return _returnValueeOi5wPU };
		const _defaultValueUg5RN89 = undefined;
		const _parseArgKLZcG84 = undefined;
		const _arrayValueI8zoUdH = true;
		const _returnValueTQCFVps = [_arrayValueI8zoUdH]
		const _nameitH45IE = () => { return _returnValueTQCFVps };
		const _argumento5rwhBT = {
			"required": _requiredUO3Aom,
		"defaultValue": _defaultValueUg5RN89,
		"parseArg": _parseArgKLZcG84,
		"name": _nameitH45IE
	}
		const _returnValuempY4z3u = await _cmdPxtHDC1.addArgument(_argumento5rwhBT)
		const _argumentZHo6wnw = "2x";
		const _returnValueEIpmzkG = await _cmdPxtHDC1.addArgument(_argumentZHo6wnw)
		const _returnValuet9mNrO6 = await _HelpBpVGnRO.visibleCommands(_cmdPxtHDC1)
		const _argChoicesTmTIs0f = {
		
	}
		const _negateHcIeRi = true;
		const _defaultValuen4sebYf = undefined;
		const _arrayValueK6Kbhh = "cl2DRibtRwjUJheoY8JtWYgksZ9MJB9tR8qXG1ToTiGsNFcsnB3OuMVb42RVRXI8";
		const _defaultValueDescriptionPuIwGR1 = [_arrayValueK6Kbhh]
		const _envVarktcL6TP = undefined;
		const _descriptiontgXlgqw = "jhdybg02MJNYfY7MLclX1GaHduPSd6Dn3LMRdD1aV";
		const _optionhkuZmvs = {
			"argChoices": _argChoicesTmTIs0f,
		"negate": _negateHcIeRi,
		"defaultValue": _defaultValuen4sebYf,
		"defaultValueDescription": _defaultValueDescriptionPuIwGR1,
		"envVar": _envVarktcL6TP,
		"description": _descriptiontgXlgqw
	}
		const _returnValueFMgCA0a = await _HelpBpVGnRO.optionDescription(_optionhkuZmvs)
		const _cmdsoNMjXf = true;
		const _helper3JfeQD = "WwPrw0TX61m5U2XNVeRMFDkbke2nsmWZqyNFA7pM7LrUh78tzgUuTHcBHc7Bc9n3V6IwNUu";
		const _returnValuepwghuR6 = await _HelpBpVGnRO.formatHelp(_cmdsoNMjXf, _helper3JfeQD)
	});

	it('test for Help', async () => {
		const _HelpZUZ5biW = new Help()
		const _argChoicesatpTd3 = undefined;
		const _defaultValuets7JKw = -9.782430670295366;
		const _defaultValueDescriptionmMoTLQO = []
		const _descriptionE3e40fe = undefined;
		const _argumentFbDErPy = {
			"argChoices": _argChoicesatpTd3,
		"defaultValue": _defaultValuets7JKw,
		"defaultValueDescription": _defaultValueDescriptionmMoTLQO,
		"description": _descriptionE3e40fe
	}
		const _returnValuedCpvbJw = await _HelpZUZ5biW.argumentDescription(_argumentFbDErPy)
		const _argChoiceso7UeBzt = {
		
	}
		const _defaultValuejeZ7Qy = undefined;
		const _defaultValueDescriptionlHxaS6k = false;
		const _descriptionIrwoubQ = true;
		const _argumentV6U1B4f = {
			"argChoices": _argChoiceso7UeBzt,
		"defaultValue": _defaultValuejeZ7Qy,
		"defaultValueDescription": _defaultValueDescriptionlHxaS6k,
		"description": _descriptionIrwoubQ
	}
		const _returnValueLZ2VYWA = await _HelpZUZ5biW.argumentDescription(_argumentV6U1B4f)
	});

	it('test for Help', async () => {
		const _Helpvhce1RX = new Help()
		const _argChoicesui2zfEo = {
		
	}
		const _negateFI024G = false;
		const _defaultValuehOskGdZ = undefined;
		const _arrayValueuC4WSFU = undefined;
		const _arrayValue6owm7N = "yL4H";
		const _arrayValueqZ6GmMG = {
		
	}
		const _arrayValueAbrcn17 = [_arrayValueuC4WSFU, _arrayValue6owm7N, _arrayValueqZ6GmMG]
		const _arrayValue96G7Tg = undefined;
		const _arrayValueDLeyz9L = undefined;
		const _defaultValueDescriptionO7iD35d = [_arrayValueAbrcn17, _arrayValue96G7Tg, _arrayValueDLeyz9L]
		const _envVarBqObBo = undefined;
		const _descriptionEcNFije = null;
		const _optionqA9u55F = {
			"argChoices": _argChoicesui2zfEo,
		"negate": _negateFI024G,
		"defaultValue": _defaultValuehOskGdZ,
		"defaultValueDescription": _defaultValueDescriptionO7iD35d,
		"envVar": _envVarBqObBo,
		"description": _descriptionEcNFije
	}
		const _returnValuekFZMqnm = await _Helpvhce1RX.optionDescription(_optionqA9u55F)
		const _returnValuetWdWXz5 = -0.8182667660376168;
		const _descriptioniMD80w1 = () => { return _returnValuetWdWXz5 };
		const _cmdU6cEkbJ = {
			"description": _descriptioniMD80w1
	}
		const _returnValueBPhhNxI = await _Helpvhce1RX.commandDescription(_cmdU6cEkbJ)
		const _returnValueo071FMv = true;
		const _descriptionFqHXtcQ = () => { return _returnValueo071FMv };
		const _cmd44rXtJ = {
			"description": _descriptionFqHXtcQ
	}
		const _returnValueLGdHKS1 = await _Helpvhce1RX.commandDescription(_cmd44rXtJ)
	});

	it('test for Help', async () => {
		const _HelpErywd0Y = new Help()
		const _flagsSSDulDi = "3bRSowkYxlkmJP4YdtVdi0hrnBidHL5msv6D6l31dwjrehWhLsF80FwIzLffxzbPRDQ0IkyHy6EgLxLnao56eTmr1zsw4CG328";
		const _descriptionFEsnXcr = {
		
	}
		const _argumentdgK6g1O = new Option(_flagsSSDulDi, _descriptionFEsnXcr)
		const _arrayValueKNjnE6K = "VSwKOD6f6Fh4mD98N3MFtXPKFf8x3tgCYVomNPcFgkVcwPFSbtfLOLT63DzJn4BJKbld4la1e19r";
		const _arrayValuegBi1SNh = "e3roESuWtamHL57mozwqJd823stCyuh9eHwDelYwXYV92Kcp9i4MAIuERQcIhGilnaUwRe3xmGWSazaKf7jRwrRB";
		const _valuesMli6L31 = [_arrayValueKNjnE6K, _arrayValuegBi1SNh]
		const _returnValueYXDWi2O = await _argumentdgK6g1O.choices(_valuesMli6L31)
		const _returnValueCjL1tp6 = await _argumentdgK6g1O.attributeName()
		const _mandatoryHaGYqPv = true;
		const _returnValueamnDwR = await _argumentdgK6g1O.makeOptionMandatory(_mandatoryHaGYqPv)
		const _mandatoryMiqYrW2 = false;
		const _returnValueHv2h1CM = await _argumentdgK6g1O.makeOptionMandatory(_mandatoryMiqYrW2)
		const _returnValuekX1fgKM = await _HelpErywd0Y.argumentDescription(_argumentdgK6g1O)
		const _cmdy5WRwcN = "mGLHf0t4FnmHqgl8wPSx4XVsLnaitWJDxiyVSRHgpnRnQDSIzoIfAJrDca6ldvEG8EXKT6NdTH4meqSJdjKml";
		const _returnValuepkdIRkf = await _HelpErywd0Y.visibleOptions(_cmdy5WRwcN)
		const _cmdWDX1t1o = "DKih5ydT2Kj8yhR3CiujbRvBoSDa1GMC1czhtszftrTzEX3eTDzMW9mX5X8zQiQdMlb2n5t1ebi";
		const _returnValueziygO7 = await _HelpErywd0Y.visibleOptions(_cmdWDX1t1o)
		const _returnValueF7dIs2J = "jWeKbHo2w4fpcvGKmNu6Nhvcv7wPNHCOOYmIVm6DalPtL6JI";
		const _optionbeLt4aH = () => { return _returnValueF7dIs2J };
		const _returnValueI1CCIvf = await _HelpErywd0Y.optionDescription(_optionbeLt4aH)
		const _returnValueQ3Q6ZC = null;
		const _nameBFSierA = () => { return _returnValueQ3Q6ZC };
		const _argumentz6t7BpC = new Command(_nameBFSierA)
		const _flagsR7mxWss = null;
		const _descriptionoI9bRe = undefined;
		const _returnValueiBF4iT3 = await _argumentz6t7BpC.createOption(_flagsR7mxWss, _descriptionoI9bRe)
		const _arrayValue6Xx1gg = true;
		const _arrayValue9c1Fu7 = undefined;
		const _arrayValuekvtv0U0 = false;
		const _arrayValueLmU755I = [_arrayValue6Xx1gg, _arrayValue9c1Fu7, _arrayValuekvtv0U0]
		const _arrayValuenKKAfed = [_arrayValueLmU755I]
		const _arrayValuefxltsvG = 5.076516823923535;
		const _arrayValuetTFYUlo = undefined;
		const _subcommandhh7W50 = [_arrayValuenKKAfed, _arrayValuefxltsvG, _arrayValuetTFYUlo]
		const _argsZHSBmVb = "ljQyMpOgq33UqccXl58DrDh76wv2GRzoChE3W41aHr5zxyZBkQCFlJKvwkixxwKrmGbq6fnw85qdD6uhX0SF";
		const _returnValue6Fz4wi = await _argumentz6t7BpC._executeSubCommand(_subcommandhh7W50, _argsZHSBmVb)
		const _returnValueua1Utlj = await _HelpErywd0Y.argumentTerm(_argumentz6t7BpC)
	});

	it('test for Help', async () => {
		const _HelpVm9ECjG = new Help()
		const _returnValueEcQw5It = null;
		const _matchaKS8nua = () => { return _returnValueEcQw5It };
		const _returnValuejhNNaqR = false;
		const _substraW4pMMT = () => { return _returnValuejhNNaqR };
		const _strrcY3C67 = {
			"match": _matchaKS8nua,
		"substr": _substraW4pMMT
	}
		const _widthaEajvxA = -6.194673997710586;
		const _indenttdjzOec = 1.1608425444663197;
		const _minColumnWidthYizhRk4 = 7.260255966029522;
		const _returnValuembQhU6c = await _HelpVm9ECjG.wrap(_strrcY3C67, _widthaEajvxA, _indenttdjzOec, _minColumnWidthYizhRk4)
	});

	it('test for Help', async () => {
		const _HelpTSHHDmA = new Help()
		const _cmdXqXsYqr = "V8xFT4FmpCW6gqCznjKYndDj2Bb13ruW98iPh9UcUgpv";
		const _helperSi37gT9 = new Help()
		const _namekQRKiiB = {
		
	}
		const _cmdwCeuciS = new Command(_namekQRKiiB)
		const _returnValueJ13GsGm = await _cmdwCeuciS._checkForMissingMandatoryOptions()
		const _returnValueylBzSWf = await _cmdwCeuciS._processArguments()
		const _returnValueyIo9DpK = await _helperSi37gT9.visibleCommands(_cmdwCeuciS)
		const _returnValuerbOm6uU = await _HelpTSHHDmA.padWidth(_cmdXqXsYqr, _helperSi37gT9)
		const _optionzBUI8Lu = null;
		const _returnValueLYA5UHE = await _HelpTSHHDmA.optionTerm(_optionzBUI8Lu)
	});

	it('test for Help', async () => {
		const _HelpyrUWc0d = new Help()
		const _flagsFbQl6sJ = "ihvPrREh31GrX3rpsru";
		const _descriptionYi9n1HX = "SVVxhLAMhhCGX56YVByLHPhk3SpQ2emsQlsiVLO1YnfsfnGbMfVfo419iD8iqV4EjrBOi9RiDYsk8ZnU";
		const _optiongkphojI = new Option(_flagsFbQl6sJ, _descriptionYi9n1HX)
		const _namebstVryu = {
		
	}
		const _returnValueKmjgH1 = await _optiongkphojI.env(_namebstVryu)
		const _mandatoryxnouZZZ = false;
		const _returnValueECqrSDV = await _optiongkphojI.makeOptionMandatory(_mandatoryxnouZZZ)
		const _returnValueYU3rIRx = await _optiongkphojI.attributeName()
		const _returnValueI1m8uE = await _HelpyrUWc0d.optionDescription(_optiongkphojI)
		const _optionzi3jC2y = "soWaFkmTswcFMixgKP1QFLQFyug9EP2b26zpLmXiPA7BV6kCq4IoIvi2MPyVAoTlCwo8X1UDzY";
		const _returnValuePqGVVNH = await _HelpyrUWc0d.optionDescription(_optionzi3jC2y)
	});

	it('test for Help', async () => {
		const _HelpfF8sX9K = new Help()
		const _returnValueouapMHI = "IG2fY7roXUWldWNgecsmELzpcTr";
		const _descriptionWPNWDLs = () => { return _returnValueouapMHI };
		const _cmdVa0fYpH = {
			"description": _descriptionWPNWDLs
	}
		const _returnValuenC1wTCP = await _HelpfF8sX9K.commandDescription(_cmdVa0fYpH)
		const _returnValuefqRQeAK = true;
		const _matchWQuKzVm = () => { return _returnValuefqRQeAK };
		const _returnValuelR7neOG = undefined;
		const _substrQilFRs = () => { return _returnValuelR7neOG };
		const _strrjvyapY = {
			"match": _matchWQuKzVm,
		"substr": _substrQilFRs
	}
		const _widthGKtWIdx = 4.830002415005579;
		const _indentkQSpbMo = 4.369552752458652;
		const _minColumnWidthnvOdNoY = 2.0994126089363903;
		const _returnValuejUsG2Z = await _HelpfF8sX9K.wrap(_strrjvyapY, _widthGKtWIdx, _indentkQSpbMo, _minColumnWidthnvOdNoY)
	});

	it('test for Help', async () => {
		const _HelpLLmsRJS = new Help()
		const _cmdlvcca9X = null;
		const _helperjRnlei5 = new Help()
		const __nameokBdyY = {
		
	}
		const __aliasesxWPv19Q = "uymzApqrOa9zn";
		const _parentziMy0R7 = {
		
	}
		const _arrayValueHVFt6ga = false;
		const _arrayValueKTTUQ0x = null;
		const _arrayValueGwmT3cy = true;
		const _returnValuenwj9V9W = [_arrayValueHVFt6ga, _arrayValueKTTUQ0x, _arrayValueGwmT3cy]
		const _usagepgxXA6A = () => { return _returnValuenwj9V9W };
		const _cmdjhYl7Zf = {
			"_name": __nameokBdyY,
		"_aliases": __aliasesxWPv19Q,
		"parent": _parentziMy0R7,
		"usage": _usagepgxXA6A
	}
		const _returnValuetmJowIw = await _helperjRnlei5.commandUsage(_cmdjhYl7Zf)
		const _nameRsXVzfx = -6.078662745623407;
		const _cmdbTUi8gH = new Command(_nameRsXVzfx)
		const _displaySuggestionmzV2XMP = true;
		const _returnValueROiAUIn = await _cmdbTUi8gH.showSuggestionAfterError(_displaySuggestionmzV2XMP)
		const _flagsdBYkloC = undefined;
		const _descriptionf96fUv = undefined;
		const _returnValueSYBoKbm = await _cmdbTUi8gH.helpOption(_flagsdBYkloC, _descriptionf96fUv)
		const _positionalCYZmI8Z = false;
		const _returnValueSNPDinA = await _cmdbTUi8gH.enablePositionalOptions(_positionalCYZmI8Z)
		const _returnValuema1obqp = await _helperjRnlei5.visibleArguments(_cmdbTUi8gH)
		const _returnValueff6ajbH = {
		
	}
		const _namelVaWV9L = () => { return _returnValueff6ajbH };
		const _argumentRFmql2 = {
			"name": _namelVaWV9L
	}
		const _returnValuecOm1lW = await _helperjRnlei5.argumentTerm(_argumentRFmql2)
		const _returnValueGHeDcgq = await _HelpLLmsRJS.padWidth(_cmdlvcca9X, _helperjRnlei5)
		const _arrayValueIzJxEc9 = 7.979651497536789;
		const _arrayValuen1F9buC = 5.924863191379615;
		const _arrayValueFFRfueC = 7.988370295121484;
		const _arrayValueOdg29Wh = [_arrayValuen1F9buC, _arrayValueFFRfueC]
		const _optionOOVL7ld = [_arrayValueIzJxEc9, _arrayValueOdg29Wh]
		const _returnValueQVzE9GJ = await _HelpLLmsRJS.optionTerm(_optionOOVL7ld)
	});

	it('test for Help', async () => {
		const _HelpZgRwqiR = new Help()
		const _namev8FKpV7 = {
		
	}
		const _descriptionzaR2eiR = false;
		const _optionGg0Ia8n = new Argument(_namev8FKpV7, _descriptionzaR2eiR)
		const _valueSEa0ElJ = undefined;
		const _returnValuegCL5e36 = {
		
	}
		const _concateYR5YMd = () => { return _returnValuegCL5e36 };
		const _previousZP59456 = {
			"concat": _concateYR5YMd
	}
		const _returnValueOmjJGTo = await _optionGg0Ia8n._concatValue(_valueSEa0ElJ, _previousZP59456)
		const _returnValuefRwHIk = await _optionGg0Ia8n.name()
		const _returnValueJQo9sXi = "qy8HPD1UQBfl4Ou3SK4xye3akmtxSvJIPQLG";
		const _valueAiw6LyV = () => { return _returnValueJQo9sXi };
		const _descriptionoqo0H7H = -9.122861250825665;
		const _returnValueipn5Qvr = await _optionGg0Ia8n.default(_valueAiw6LyV, _descriptionoqo0H7H)
		const _returnValuewTxdz9K = await _HelpZgRwqiR.optionDescription(_optionGg0Ia8n)
		const _cmdZzBdj0w = "mrYqlNfJ2sgQTzuY";
		const _arrayValueVBdXng1 = undefined;
		const _helperv8nSPa5 = [_arrayValueVBdXng1]
		const _returnValuePfIm46 = await _HelpZgRwqiR.longestSubcommandTermLength(_cmdZzBdj0w, _helperv8nSPa5)
		const _returnValueXc0FZly = 9.812900485944638;
		const _cmdOOLjICu = () => { return _returnValueXc0FZly };
		const _returnValue8L020H = await _HelpZgRwqiR.visibleOptions(_cmdOOLjICu)
	});

	it('test for Help', async () => {
		const _HelpD0lppWS = new Help()
		const _arrayValueC3OSsGj = "L1wodPtJM3yp6WOypaGp4H2jFGtqtnRZkZtU5";
		const _nameTQfpxUQ = [_arrayValueC3OSsGj]
		const _cmdHAFNI4D = new Command(_nameTQfpxUQ)
		const _namesDVU6rDy = "falzOp7riqB4iGFMF";
		const _returnValueEDIYQ6S = await _cmdHAFNI4D.arguments(_namesDVU6rDy)
		const _returnValueZCtIpwC = await _HelpD0lppWS.commandDescription(_cmdHAFNI4D)
		const _returnValueiZoq9WC = true;
		const _nameU7JwQ24 = () => { return _returnValueiZoq9WC };
		const _argumentcHGZnE = {
			"name": _nameU7JwQ24
	}
		const _returnValueS7P3cVb = await _HelpD0lppWS.argumentTerm(_argumentcHGZnE)
		const _arrayValueUXRHZO0 = {
		
	}
		const _nameARlHT86 = [_arrayValueUXRHZO0]
		const _cmdt1Eamp = new Command(_nameARlHT86)
		const _returnValueGySKtQT = await _cmdt1Eamp._checkForMissingMandatoryOptions()
		const _returnValuepmXx84W = await _HelpD0lppWS.subcommandTerm(_cmdt1Eamp)
		const _cmdRE5x2bR = undefined;
		const _sortSubcommandsNZbeWjA = false;
		const _returnValueAJKgJON = undefined;
		const _subcommandTermSxlL9eh = () => { return _returnValueAJKgJON };
		const _helper01KbGM = {
			"sortSubcommands": _sortSubcommandsNZbeWjA,
		"subcommandTerm": _subcommandTermSxlL9eh
	}
		const _returnValueqG1WVuP = await _HelpD0lppWS.longestSubcommandTermLength(_cmdRE5x2bR, _helper01KbGM)
	});

	it('test for Help', async () => {
		const _HelpqJt8RHz = new Help()
		const _optionNdrd2BX = "aWpjGzamnzJpFD35tY6PA";
		const _returnValuewTiGqm7 = await _HelpqJt8RHz.optionTerm(_optionNdrd2BX)
		const _cmdRnLLMQt = []
		const _helperYLCWoxA = new Help()
		const _arrayValuebPdK59a = "A4z03G50IaAT183MRUOr9";
		const _arrayValueATy8Uo = "3u7wAlqCUixUpyfjUB";
		const _arrayValuezoTnk9U = true;
		const _arrayValueZqpgUdG = true;
		const _arrayValuesczTotN = {
		
	}
		const _arrayValueR3gzy5e = [_arrayValuezoTnk9U, _arrayValueZqpgUdG, _arrayValuesczTotN]
		const _arrayValueFk0CJUo = null;
		const _arrayValueuAkleNt = true;
		const _optionLBXgOAA = [_arrayValuebPdK59a, _arrayValueATy8Uo, _arrayValueR3gzy5e, _arrayValueFk0CJUo, _arrayValueuAkleNt]
		const _returnValueg8eSz9j = await _helperYLCWoxA.optionTerm(_optionLBXgOAA)
		const _nameUec9VyW = null;
		const _cmdmXSyrtW = new Command(_nameUec9VyW)
		const _strcl6U65 = undefined;
		const _argsDescriptiongmpQaHi = undefined;
		const _returnValueXOlkPyB = await _cmdmXSyrtW.description(_strcl6U65, _argsDescriptiongmpQaHi)
		const _nameuigMaJ = 8.331980282706546;
		const _descriptionTFtJjNj = null;
		const _arrayValuejpa52Pu = undefined;
		const _arrayValueg51r7Om = null;
		const _arrayValueKqJBV3L = "WfyhEpXbNYKM15mQKBoSU4ODjgdTXnGr7R3lUC3A7vnWLVv7UU7N8I2l2C65VfGFspIHluk";
		const _arrayValueAYvXEqp = false;
		const _arrayValuejD2fwE5 = [_arrayValueKqJBV3L, _arrayValueAYvXEqp]
		const _returnValuetBHco3n = [_arrayValuejpa52Pu, _arrayValueg51r7Om, _arrayValuejD2fwE5]
		const _fnopdxpUw = () => { return _returnValuetBHco3n };
		const _defaultValueSp4Wue4 = null;
		const _returnValuejaAAHPb = await _cmdmXSyrtW.argument(_nameuigMaJ, _descriptionTFtJjNj, _fnopdxpUw, _defaultValueSp4Wue4)
		const _configurationmhCTMYu = undefined;
		const _returnValuenBWpKzm = await _cmdmXSyrtW.configureOutput(_configurationmhCTMYu)
		const _returnValueI4tN4i0 = await _helperYLCWoxA.subcommandTerm(_cmdmXSyrtW)
		const _flagsdI0IcPi = "hlI7LjXCUSC3yxlWwp6ofBPK8x2KbxeRq9";
		const _arrayValuepJ9HVmG = undefined;
		const _returnValueUpgeXe = "4d";
		const _arrayValuetSDlfVZ = () => { return _returnValueUpgeXe };
		const _descriptionbxsReoW = [_arrayValuepJ9HVmG, _arrayValuetSDlfVZ]
		const _argumentw0z68vO = new Option(_flagsdI0IcPi, _descriptionbxsReoW)
		const _mandatoryXKTukkl = true;
		const _returnValuePlaEbhy = await _argumentw0z68vO.makeOptionMandatory(_mandatoryXKTukkl)
		const _returnValuemrvCGzM = await _argumentw0z68vO.name()
		const _valuesecf6h15 = undefined;
		const _returnValuevC9khNv = await _argumentw0z68vO.choices(_valuesecf6h15)
		const _returnValueBWV2VUw = {
		
	}
		const _includese9U47x = () => { return _returnValueBWV2VUw };
		const _returnValuenZrLQx7 = "GOfYNePGYjNOE50CNX8W72PW4CD6f5Rk8ghAdJ2N8B0LIJWnv8amekdtsY3vBJSGcfBOVFAny6";
		const _joinjayFwrB = () => { return _returnValuenZrLQx7 };
		const _valuesuCZy1aT = {
			"includes": _includese9U47x,
		"join": _joinjayFwrB
	}
		const _returnValuea6e8xgM = await _argumentw0z68vO.choices(_valuesuCZy1aT)
		const _returnValuekVZqgz2 = "tB6XuCMMdcRMvDJaPBXpi4PzmqWBufYZvoRljgyfkSSpksxucFDBRuscx9mxmllmTum0YFE6qv0MXXdNCVICAt";
		const _fnPkc3wtg = () => { return _returnValuekVZqgz2 };
		const _returnValueZADZdxU = await _argumentw0z68vO.argParser(_fnPkc3wtg)
		const _returnValueLfAN4Tl = await _helperYLCWoxA.argumentDescription(_argumentw0z68vO)
		const _nameYan2BWf = "Ivx7XOsr0k11R58OwKdZotu2Eybksn43CviY8BQ6dKoLAGPDe8Wdbtt9t";
		const _cmduNprYbR = new Command(_nameYan2BWf)
		const _arrayValue7EcKjI = true;
		const _arrayValueqtvvuSm = -4.039784412512009;
		const _argvnfyUgm2 = [_arrayValue7EcKjI, _arrayValueqtvvuSm]
		const _parseOptionsoAnTCod = true;
		const _returnValueqiQLBRs = await _cmduNprYbR.parse(_argvnfyUgm2, _parseOptionsoAnTCod)
		const _keyXckIFF8 = true;
		const _returnValuePgU8MK = await _cmduNprYbR.getOptionValue(_keyXckIFF8)
		const _operandsqBhKacM = "Nho9i6qJzPAEaFyOxdxC2zDehuWedYXd3CtSmlNMaVYDKUNFrKRPXk6C3XAREeef1PyRAqPmF79UrDAxdADsqHtViHdYU";
		const _unknownIweaLLx = {
		
	}
		const _returnValueWdmETDE = await _cmduNprYbR._parseCommand(_operandsqBhKacM, _unknownIweaLLx)
		const _arrayValueyxBCQfR = -1.1312914632415456;
		const _arrayValueui6FaCm = null;
		const _erroraZcKO1P = [_arrayValueyxBCQfR, _arrayValueui6FaCm]
		const _commandKZym9dM = null;
		const _contextOptionsB5ZUq5D = {
			"error": _erroraZcKO1P,
		"command": _commandKZym9dM
	}
		const _returnValueOoyrca8 = await _cmduNprYbR.help(_contextOptionsB5ZUq5D)
		const _flagsuHrH2Fk = false;
		const _descriptionUZ0u19U = null;
		const _returnValueq7J8d1k = await _cmduNprYbR.helpOption(_flagsuHrH2Fk, _descriptionUZ0u19U)
		const _returnValueSM9mPNT = await _helperYLCWoxA.subcommandTerm(_cmduNprYbR)
		const _returnValuexSUZOmi = await _HelpqJt8RHz.formatHelp(_cmdRnLLMQt, _helperYLCWoxA)
		const _arrayValueq9wZEGZ = undefined;
		const _cmdIylf4tu = [_arrayValueq9wZEGZ]
		const _returnValueRA8KWs = await _HelpqJt8RHz.visibleOptions(_cmdIylf4tu)
		const _returnValueJspsQXO = "5TDO8DVAlIn4tLbo37lbQTvZM1GsHcQEnqx4K5OLBmiHajETRF";
		const _optionNOLCfHG = () => { return _returnValueJspsQXO };
		const _returnValuehyRojn = await _HelpqJt8RHz.optionDescription(_optionNOLCfHG)
	});

	it('test for Help', async () => {
		const _HelpUNPyPz7 = new Help()
		const _nameafs3MZV = 5.1014834184066;
		const _cmdYe8aTjU = new Command(_nameafs3MZV)
		const _namesU1BA5Nn = "gOb9SdfD5ElFlC3DJH80j8jLlcAmmC531Hc4IWrRn9uhRs2SEkouH2";
		const _returnValueu3Rou3X = await _cmdYe8aTjU.arguments(_namesU1BA5Nn)
		const _strAXado9f = undefined;
		const _flagsXxa6zzZ = {
		
	}
		const _descriptionb0x1G7R = {
		
	}
		const _returnValueucHfHF = await _cmdYe8aTjU.version(_strAXado9f, _flagsXxa6zzZ, _descriptionb0x1G7R)
		const _returnValueRvxYyr = await _cmdYe8aTjU._hasImplicitHelpCommand()
		const _aliasGKFV3LE = {
		
	}
		const _returnValuez5STGEt = await _cmdYe8aTjU.alias(_aliasGKFV3LE)
		const _keyS0g2okv = false;
		const _returnValueffB9qv6 = await _cmdYe8aTjU.getOptionValue(_keyS0g2okv)
		const _returnValuewLEQNoZ = await _HelpUNPyPz7.subcommandTerm(_cmdYe8aTjU)
	});
})