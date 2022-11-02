export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpAODjMf = new Help()
		const _returnValuehBfKeI4 = false;
		const _descriptionCr4wC40 = () => { return _returnValuehBfKeI4 };
		const _cmdQbYTVNB = {
			"description": _descriptionCr4wC40
	}
		const _returnValueVc1xsBg = await _HelpAODjMf.commandDescription(_cmdQbYTVNB)
		const _returnValueagnLYZZ = null;
		const _returnValueU1TNTY9 = () => { return _returnValueagnLYZZ };
		const _cmd0SlSIC = () => { return _returnValueU1TNTY9 };
		const _returnValueCkGZ4KN = await _HelpAODjMf.subcommandDescription(_cmd0SlSIC)
		const _cmddv3bmJ5 = "O6oFO4xiv9OLFU1L1CLozMJusAsSWpQtFBJu1k7IUE4PYOnY";
		const _returnValueFxmI74a = await _HelpAODjMf.commandUsage(_cmddv3bmJ5)
		const _cmdSTeIdyd = 5.414630179637632;
		const _helperf0Xa4s = "WnA2OmUpDmh3aLyMMYTQRi1bpOT2jKbnF2HrIEXupUQSe1k81fKW4bOieb5";
		const _returnValueoJh9uw = await _HelpAODjMf.padWidth(_cmdSTeIdyd, _helperf0Xa4s)
	});

	it('test for Help', async () => {
		const _HelpgkOdOw9 = new Help()
		const _argChoicesIo9umom = {
		
	}
		const _defaultValueHzJx0xT = null;
		const _defaultValueDescriptionZ7yba5O = undefined;
		const _descriptionPWhNhKO = null;
		const _argumentMLqy6s = {
			"argChoices": _argChoicesIo9umom,
		"defaultValue": _defaultValueHzJx0xT,
		"defaultValueDescription": _defaultValueDescriptionZ7yba5O,
		"description": _descriptionPWhNhKO
	}
		const _returnValuepdkGtx = await _HelpgkOdOw9.argumentDescription(_argumentMLqy6s)
		const _argumentEZgmpqg = false;
		const _returnValueRsqDukl = await _HelpgkOdOw9.argumentTerm(_argumentEZgmpqg)
		const _cmdZENLH8j = undefined;
		const _sortSubcommandsHxGJyF6 = 6.965047922105189;
		const _returnValuekKl9hrE = "um8ux1lp";
		const _subcommandTermSdyiXJz = () => { return _returnValuekKl9hrE };
		const _helpera6qAhP2 = {
			"sortSubcommands": _sortSubcommandsHxGJyF6,
		"subcommandTerm": _subcommandTermSdyiXJz
	}
		const _returnValueGo4tbst = await _HelpgkOdOw9.formatHelp(_cmdZENLH8j, _helpera6qAhP2)
		const _returnValuec6C8wTR = -1.118824157474526;
		const _returnValueGVclzDh = () => { return _returnValuec6C8wTR };
		const _argumentYH9GDO2 = () => { return _returnValueGVclzDh };
		const _returnValuee9iMpJ = await _HelpgkOdOw9.argumentDescription(_argumentYH9GDO2)
		const _cmdPCu7fcz = 0.899954729194123;
		const _returnValuevLRhVMH = true;
		const _returnValuenyyKvQ2 = () => { return _returnValuevLRhVMH };
		const _longestOptionTermLengthioKvzhg = () => { return _returnValuenyyKvQ2 };
		const _arrayValueW4x3ZBh = undefined;
		const _arrayValueJsKVSOk = 1.2237406839185674;
		const _arrayValueZ6eKEhO = false;
		const _arrayValueZ6BYBLe = [_arrayValueJsKVSOk, _arrayValueZ6eKEhO]
		const _arrayValueDko06qu = true;
		const _returnValuessZDcAX = undefined;
		const _arrayValueZgDaeV = () => { return _returnValuessZDcAX };
		const _arrayValuehRATFFE = [_arrayValueZgDaeV]
		const _arrayValuedb39obx = [_arrayValueW4x3ZBh, _arrayValueZ6BYBLe, _arrayValueDko06qu, _arrayValuehRATFFE]
		const _arrayValuebsSp2nh = null;
		const _arrayValueQJi5HOJ = null;
		const _returnValuepcbutrd = [_arrayValuedb39obx, _arrayValuebsSp2nh, _arrayValueQJi5HOJ]
		const _longestSubcommandTermLengthuCDW3zt = () => { return _returnValuepcbutrd };
		const _returnValuewpHOMj = "ZJGqh8LApcRTaay54wMYIHWndC0YGRLRh64XhoAreo52sNFrk";
		const _longestArgumentTermLengthN7CxbY = () => { return _returnValuewpHOMj };
		const _helperawjcRX = {
			"longestOptionTermLength": _longestOptionTermLengthioKvzhg,
		"longestSubcommandTermLength": _longestSubcommandTermLengthuCDW3zt,
		"longestArgumentTermLength": _longestArgumentTermLengthN7CxbY
	}
		const _returnValuepTmEPno = await _HelpgkOdOw9.padWidth(_cmdPCu7fcz, _helperawjcRX)
	});

	it('test for Help', async () => {
		const _HelpBgv3uRn = new Help()
		const _arrayValueORzTlbI = null;
		const _returnValuexGgCHM = [_arrayValueORzTlbI]
		const _nameCYqBxvP = () => { return _returnValuexGgCHM };
		const _argumentgPDUVsV = {
			"name": _nameCYqBxvP
	}
		const _returnValuejmYB4yn = await _HelpBgv3uRn.argumentTerm(_argumentgPDUVsV)
		const _stroQNyfX7 = "ViQ08RVpfqx8AT3dsZgbq";
		const _widthsB6f6hR = -2.3604796765609937;
		const _indentpdZhBIb = -4.575848402149282;
		const _minColumnWidthAwVJEtb = 9.852224702188273;
		const _returnValueMF2aPlu = await _HelpBgv3uRn.wrap(_stroQNyfX7, _widthsB6f6hR, _indentpdZhBIb, _minColumnWidthAwVJEtb)
		const _cmdYlwNhFd = null;
		const _sortSubcommandsdysu1pT = "48vPDdjk5oYU8CH4WtNFnvWIS1QCo527uQI84hJpPf4KOU02qmcLfvK81WxbaRSdCqTVwJ6uKhpI6fRMK";
		const _returnValueLlKQjW = true;
		const _subcommandTermJnG0PcJ = () => { return _returnValueLlKQjW };
		const _helperYPdGZFx = {
			"sortSubcommands": _sortSubcommandsdysu1pT,
		"subcommandTerm": _subcommandTermJnG0PcJ
	}
		const _returnValueJiJ6Mw = await _HelpBgv3uRn.longestSubcommandTermLength(_cmdYlwNhFd, _helperYPdGZFx)
		const _returnValueSRnBCXN = "15Rr5Zo7KzPmaB5fxgP0K8sw61lQ7hxYo7I3tHxapW308SL1F2XIpvFOcVMCtk";
		const _returnValuen82a5MW = () => { return _returnValueSRnBCXN };
		const _arrayValue9rVnVm = () => { return _returnValuen82a5MW };
		const _returnValuePXnepJY = null;
		const _arrayValueGT7ATV1 = () => { return _returnValuePXnepJY };
		const _namejQLwc2B = [_arrayValue9rVnVm, _arrayValueGT7ATV1]
		const _argumentnpugihR = new Command(_namejQLwc2B)
		const _commandNamez2rojkC = null;
		const _arrayValueGO9mSDw = -3.550413066164718;
		const _arrayValueoz3stuz = null;
		const _arrayValueloeZnbC = false;
		const _operandspy7MzJh = [_arrayValueGO9mSDw, _arrayValueoz3stuz, _arrayValueloeZnbC]
		const _arrayValuetnXfcw0 = null;
		const _arrayValueBNXLYEX = null;
		const _arrayValueCyNtL3 = [_arrayValuetnXfcw0, _arrayValueBNXLYEX]
		const _arrayValuesv08aJw = 7.978663991243064;
		const _unknownHK0UUcm = [_arrayValueCyNtL3, _arrayValuesv08aJw]
		const _returnValueVHHeP0S = await _argumentnpugihR._dispatchSubcommand(_commandNamez2rojkC, _operandspy7MzJh, _unknownHK0UUcm)
		const _returnValueTvoVZrh = await _argumentnpugihR._processArguments()
		const _exitCodeKcPNFIs = -3.800691358424019;
		const _arrayValueBkEvIAT = -6.164430127827725;
		const _arrayValuelHVxKq = null;
		const _returnValuezn7k2pg = -6.574595910137622;
		const _arrayValueHMNHzEG = () => { return _returnValuezn7k2pg };
		const _arrayValueQ9JU887 = "q29qdhDAJfMJr8NKbW1K";
		const _codeZT8exzW = [_arrayValueBkEvIAT, _arrayValuelHVxKq, _arrayValueHMNHzEG, _arrayValueQ9JU887]
		const _messagemQnfTq5 = false;
		const _returnValueDusaPUF = await _argumentnpugihR._displayError(_exitCodeKcPNFIs, _codeZT8exzW, _messagemQnfTq5)
		const _contextOptionsrE0efOG = {
		
	}
		const _returnValuePFERdTH = await _argumentnpugihR._getHelpContext(_contextOptionsrE0efOG)
		const _returnValueyVAMrj6 = await _HelpBgv3uRn.argumentTerm(_argumentnpugihR)
	});

	it('test for Help', async () => {
		const _HelpLQ7037K = new Help()
		const _cmdyI2vAJJ = "HsuJ0FKzY39OmBs8PBIM03hIcKhaxuDVJTsF2u7PLflO";
		const _returnValuezYUz1E1 = await _HelpLQ7037K.visibleOptions(_cmdyI2vAJJ)
	});

	it('test for Help', async () => {
		const _HelpjmiHPd = new Help()
		const _cmdpAMMcpQ = null;
		const _helperRRPm6PT = new Help()
		const _arrayValueDv940zZ = "EIZVW0Z6TjzqlAJpHMaCFaAYDI9rE5XFBH8wmlNchf6ePsQDaoIo8XvFDEHBSyROuV7w7tBwC2PrpeL656X1vgsDQWUx9";
		const _flagsu98mH4b = [_arrayValueDv940zZ]
		const _optionriZVPWD = {
			"flags": _flagsu98mH4b
	}
		const _returnValueeebdxg2 = await _helperRRPm6PT.optionTerm(_optionriZVPWD)
		const _returnValuerhvltUf = await _HelpjmiHPd.longestArgumentTermLength(_cmdpAMMcpQ, _helperRRPm6PT)
		const _cmdA7TVHO = true;
		const _returnValueuP0nH8G = null;
		const _visibleOptionsfWPzo3 = () => { return _returnValueuP0nH8G };
		const _returnValueaPF0VtP = true;
		const _optionTermJnSKpPs = () => { return _returnValueaPF0VtP };
		const _helperkwxmMyG = {
			"visibleOptions": _visibleOptionsfWPzo3,
		"optionTerm": _optionTermJnSKpPs
	}
		const _returnValueti99knI = await _HelpjmiHPd.longestOptionTermLength(_cmdA7TVHO, _helperkwxmMyG)
		const _cmdSWVEgTy = false;
		const _returnValuesQZeiTm = await _HelpjmiHPd.subcommandDescription(_cmdSWVEgTy)
		const _arrayValueigF1yLs = null;
		const _cmdqC0vqI = [_arrayValueigF1yLs]
		const _helperq9OReWF = "cqUJuCpZy7XqRIxIDWTimCyXxtABKUQ";
		const _returnValueqsE04As = await _HelpjmiHPd.longestOptionTermLength(_cmdqC0vqI, _helperq9OReWF)
	});

	it('test for Help', async () => {
		const _HelpCLQLPif = new Help()
		const _cmdfRi0GZ = -2.97539447665872;
		const _arrayValueWqQbVP3 = undefined;
		const _helpervFtOFg2 = [_arrayValueWqQbVP3]
		const _returnValueodXrVgP = await _HelpCLQLPif.longestOptionTermLength(_cmdfRi0GZ, _helpervFtOFg2)
		const _exitCodezKySwES = null;
		const _codentnUcw = false;
		const _messageYPNeqxS = 4.07203014037248;
		const _argumentAqfQ2RH = new CommanderError(_exitCodezKySwES, _codentnUcw, _messageYPNeqxS)
		const _returnValueoML0hMP = await _HelpCLQLPif.argumentTerm(_argumentAqfQ2RH)
	});

	it('test for Help', async () => {
		const _HelprmerQCJ = new Help()
		const _arrayValueSlVTkA = false;
		const _cmdJ39fR0H = [_arrayValueSlVTkA]
		const _arrayValueCWLpp1d = null;
		const _arrayValueqP0YSxF = true;
		const _helperjhiMkzb = [_arrayValueCWLpp1d, _arrayValueqP0YSxF]
		const _returnValueGal6djI = await _HelprmerQCJ.padWidth(_cmdJ39fR0H, _helperjhiMkzb)
		const _argChoicesVeL9qip = {
		
	}
		const _negateCyPk17K = null;
		const _defaultValueA10eLEc = undefined;
		const _defaultValueDescriptionGnVJLIJ = undefined;
		const _envVarLH94GsC = undefined;
		const _descriptionLhbzJ83 = true;
		const _optionOpr2T4w = {
			"argChoices": _argChoicesVeL9qip,
		"negate": _negateCyPk17K,
		"defaultValue": _defaultValueA10eLEc,
		"defaultValueDescription": _defaultValueDescriptionGnVJLIJ,
		"envVar": _envVarLH94GsC,
		"description": _descriptionLhbzJ83
	}
		const _returnValueIN8ydh5 = await _HelprmerQCJ.optionDescription(_optionOpr2T4w)
		const _arrayValueIelLgYf = null;
		const _arrayValueswh2ZiT = {
		
	}
		const _optionckNpQ23 = [_arrayValueIelLgYf, _arrayValueswh2ZiT]
		const _returnValuecuaUTy = await _HelprmerQCJ.optionTerm(_optionckNpQ23)
	});

	it('test for Help', async () => {
		const _Helpn9Z2LNq = new Help()
		const _arrayValuekrcddHu = "8uyjxhoyTptDoy8orEN6t457WB3Te5rlisrDlUh1XRJrNUwqMeIgnvdUbSnkgaTMyqsCnGEGA";
		const _arrayValueOMfg2yy = {
		
	}
		const _argumentm58uJk = [_arrayValuekrcddHu, _arrayValueOMfg2yy]
		const _returnValueM9ce10T = await _Helpn9Z2LNq.argumentDescription(_argumentm58uJk)
		const _nameCD9jswO = null;
		const _argumentFk53eB9 = new Command(_nameCD9jswO)
		const _allowExcessVRTiwF4 = true;
		const _returnValueeRsi1pz = await _argumentFk53eB9.allowExcessArguments(_allowExcessVRTiwF4)
		const _returnValueC6407vr = await _Helpn9Z2LNq.argumentDescription(_argumentFk53eB9)
	});

	it('test for Help', async () => {
		const _HelpkKRA2xV = new Help()
		const _arrayValueD4daVR0 = null;
		const _arrayValueaPBMw9 = [_arrayValueD4daVR0]
		const _arrayValueavooE7K = "Pp9OeUEhSnGgkCRXKfSxnDKd";
		const _arrayValueDkZSm1v = 0.9225116802682578;
		const _arrayValueO8YWRao = {
		
	}
		const _optionYChXVcA = [_arrayValueaPBMw9, _arrayValueavooE7K, _arrayValueDkZSm1v, _arrayValueO8YWRao]
		const _returnValueqYrNs5B = await _HelpkKRA2xV.optionDescription(_optionYChXVcA)
		const _returnValuetzGfzQ6 = false;
		const _cmdxPD2i7q = () => { return _returnValuetzGfzQ6 };
		const _returnValueizt1jp = "28TdyeL7I6499noTGzbjjoNT";
		const _visibleArgumentsZRLFOUu = () => { return _returnValueizt1jp };
		const _returnValuelR7h6Il = "uEMKGLzBGieeFbQgz5WUc5DJUGBbYb6akk5eEEij4qOXpPbpi";
		const _argumentTermlIED5B3 = () => { return _returnValuelR7h6Il };
		const _helperv320dC = {
			"visibleArguments": _visibleArgumentsZRLFOUu,
		"argumentTerm": _argumentTermlIED5B3
	}
		const _returnValueGyWMVGC = await _HelpkKRA2xV.longestArgumentTermLength(_cmdxPD2i7q, _helperv320dC)
		const _cmdntbiLvg = undefined;
		const _helperTXGY1Bi = "eE";
		const _returnValueYE6mWCM = await _HelpkKRA2xV.formatHelp(_cmdntbiLvg, _helperTXGY1Bi)
	});

	it('test for Help', async () => {
		const _HelpDJZJOaN = new Help()
		const _returnValueFuP6Tzx = undefined;
		const _matchRlRQe4C = () => { return _returnValueFuP6Tzx };
		const _arrayValueDp1mm9 = "P5BIxGsfWYlWskKQlGXmTkkBedu2UA6WAUZ6EFnOnLUKKQFz7MC9NhjFuhjuiF7BeS91eFgmBGCUad8oQxI1Pkl";
		const _arrayValuemm4ZnWs = false;
		const _returnValueMSwKnGa = [_arrayValueDp1mm9, _arrayValuemm4ZnWs]
		const _substrqYw43zg = () => { return _returnValueMSwKnGa };
		const _strRcajy44 = {
			"match": _matchRlRQe4C,
		"substr": _substrqYw43zg
	}
		const _widthWwDEYFb = -5.7104845304311365;
		const _arrayValueCoaXTac = {
		
	}
		const _arrayValueg40axIq = undefined;
		const _indentmne1VX3 = [_arrayValueCoaXTac, _arrayValueg40axIq]
		const _minColumnWidthUifJT7T = {
		
	}
		const _returnValueuLfiMKY = await _HelpDJZJOaN.wrap(_strRcajy44, _widthWwDEYFb, _indentmne1VX3, _minColumnWidthUifJT7T)
		const _returnValuebyBlTLx = 2.1920089513425527;
		const _cmdbYETpES = () => { return _returnValuebyBlTLx };
		const _returnValuef327nPF = await _HelpDJZJOaN.visibleOptions(_cmdbYETpES)
		const _arrayValuerG5rUXi = "g96oSU9ohK700xGhc5xpQiQsHq2KIuKgUGw3LY6iRjB8e1HijN7CkTB0nOuS5A3ulmpOkl4q6nsslmJkHK";
		const _arrayValueFKL6ANi = 4.301964159912563;
		const _cmdstS8DnY = [_arrayValuerG5rUXi, _arrayValueFKL6ANi]
		const _returnValuexo1a2Ho = await _HelpDJZJOaN.subcommandTerm(_cmdstS8DnY)
	});

	it('test for Help', async () => {
		const _HelpMClVVOG = new Help()
		const _argChoicesNhOa3mg = {
		
	}
		const _negateEveFGrb = undefined;
		const _defaultValuecvYqpn1 = undefined;
		const _defaultValueDescriptionxOCeWtm = undefined;
		const _envVarRFnTFEK = undefined;
		const _descriptionqCicz6t = false;
		const _optionTiAqIXZ = {
			"argChoices": _argChoicesNhOa3mg,
		"negate": _negateEveFGrb,
		"defaultValue": _defaultValuecvYqpn1,
		"defaultValueDescription": _defaultValueDescriptionxOCeWtm,
		"envVar": _envVarRFnTFEK,
		"description": _descriptionqCicz6t
	}
		const _returnValuemCAQkXV = await _HelpMClVVOG.optionDescription(_optionTiAqIXZ)
		const __argsDescriptiondqWNV5J = {
		
	}
		const __argsN8XJRwb = {
		
	}
		const _cmdsRMCJTU = {
			"_argsDescription": __argsDescriptiondqWNV5J,
		"_args": __argsN8XJRwb
	}
		const _returnValuefW5C1Eg = await _HelpMClVVOG.visibleArguments(_cmdsRMCJTU)
	});

	it('test for Help', async () => {
		const _HelpVFFbaHE = new Help()
		const __argsDescriptionZx7L00 = {
		
	}
		const __argsXzIITaN = {
		
	}
		const _cmdqTOE2Hp = {
			"_argsDescription": __argsDescriptionZx7L00,
		"_args": __argsXzIITaN
	}
		const _returnValuevzqij0M = await _HelpVFFbaHE.visibleArguments(_cmdqTOE2Hp)
		const _returnValueviK3K8V = undefined;
		const _matchWoKYFOv = () => { return _returnValueviK3K8V };
		const _returnValueB8ny0CU = "QteiDv5nv7zmwT1JTQB7Uoxj4vcevDph1drIgY6UVVSseLa";
		const _substrY1EPLMo = () => { return _returnValueB8ny0CU };
		const _strzXHEBxM = {
			"match": _matchWoKYFOv,
		"substr": _substrY1EPLMo
	}
		const _widthy3BL9M3 = 9.574146208917004;
		const _indentWCYTsfO = 3.0802611154373096;
		const _minColumnWidthhyje0W = 6.228400952519852;
		const _returnValuemnIC04z = await _HelpVFFbaHE.wrap(_strzXHEBxM, _widthy3BL9M3, _indentWCYTsfO, _minColumnWidthhyje0W)
		const _returnValuehzCAsg1 = true;
		const _arrayValueZaCrVUO = () => { return _returnValuehzCAsg1 };
		const _arrayValueLDG80Q5 = "qiV5TXZyppUrlEdvzMpoyCFAO6uqSiJF8PKxKk9qSuXB9LflNfw6sYdVw2rcdNorOan1klVP0Yni";
		const _arrayValuekT4awBw = -2.383852754223321;
		const _argumentC7OeDDr = [_arrayValueZaCrVUO, _arrayValueLDG80Q5, _arrayValuekT4awBw]
		const _returnValueaD70eoA = await _HelpVFFbaHE.argumentDescription(_argumentC7OeDDr)
	});

	it('test for Help', async () => {
		const _HelpwyvMf8O = new Help()
		const __namelpLBx79 = "1dV5eX1YynKQHRz1Mwg4oNOsEPcwAyjm1SmXw6";
		const __aliasesWTyDgd = {
		
	}
		const _arrayValueBugPkIP = "rlOhmMCSHBQmCK16klpk8VVx4JpynIIDh921szzXhMmiN3w84QT0hdCRvinM1eUAkK";
		const _arrayValueEUPiatU = true;
		const _parentebUqIP9 = [_arrayValueBugPkIP, _arrayValueEUPiatU]
		const _returnValueDXU08a = true;
		const _usagexQjE6Ui = () => { return _returnValueDXU08a };
		const _cmdTadeLnC = {
			"_name": __namelpLBx79,
		"_aliases": __aliasesWTyDgd,
		"parent": _parentebUqIP9,
		"usage": _usagexQjE6Ui
	}
		const _returnValuekHhvZnI = await _HelpwyvMf8O.commandUsage(_cmdTadeLnC)
		const _cmdGYYxiqA = "plpvACaxBz7ZKg986sX4UNTdi4WOeius7WXTfEMZRJ3";
		const _returnValuehSET9Nc = await _HelpwyvMf8O.visibleArguments(_cmdGYYxiqA)
		const _cmdtE3nuHp = true;
		const _returnValueMQTEFPF = await _HelpwyvMf8O.commandDescription(_cmdtE3nuHp)
		const _flagsEPdWqki = null;
		const _optionddpSXSd = {
			"flags": _flagsEPdWqki
	}
		const _returnValuehPGhfBM = await _HelpwyvMf8O.optionTerm(_optionddpSXSd)
	});

	it('test for Help', async () => {
		const _HelpVPPe4S = new Help()
		const _returnValueCnTqmtw = -6.57963185416829;
		const _descriptionHySWS9g = () => { return _returnValueCnTqmtw };
		const _cmdifXoTHo = {
			"description": _descriptionHySWS9g
	}
		const _returnValueaGYqTS = await _HelpVPPe4S.subcommandDescription(_cmdifXoTHo)
		const _cmdJNiSslH = false;
		const _helperWIMQIbr = "UUwnjGtKgPPNjgP5CH5vzlWp7r5SPO3oFRjZR6voK5KMIR2x9t1u";
		const _returnValueXU5hk3Z = await _HelpVPPe4S.formatHelp(_cmdJNiSslH, _helperWIMQIbr)
		const _arrayValue5MgcUP = false;
		const _cmdKHH1db = [_arrayValue5MgcUP]
		const _returnValueSi2Irmm = await _HelpVPPe4S.visibleOptions(_cmdKHH1db)
	});

	it('test for Help', async () => {
		const _HelpgDiyZf = new Help()
		const _arrayValueKvU6TW = false;
		const __argsyiqWFKa = [_arrayValueKvU6TW]
		const __nameLoN47EH = 0.6515158733376971;
		const __aliasesMRVidze = {
		
	}
		const _optionspdqP5sR = {
		
	}
		const _cmdYHWDvpP = {
			"_args": __argsyiqWFKa,
		"_name": __nameLoN47EH,
		"_aliases": __aliasesMRVidze,
		"options": _optionspdqP5sR
	}
		const _returnValueRBqvHR1 = await _HelpgDiyZf.subcommandTerm(_cmdYHWDvpP)
		const _returnValueVf9IF7G = null;
		const _arrayValuePJRFKfv = () => { return _returnValueVf9IF7G };
		const _arrayValuef1nUNRN = {
		
	}
		const _arrayValueGFpEFO5 = null;
		const _arrayValueRDYEeZa = undefined;
		const _arrayValue1hv62e = [_arrayValuePJRFKfv, _arrayValuef1nUNRN, _arrayValueGFpEFO5, _arrayValueRDYEeZa]
		const _arrayValueHtqSrs8 = true;
		const _cmdJJmehEq = [_arrayValue1hv62e, _arrayValueHtqSrs8]
		const _arrayValuee4d9IO6 = "VmnXuP8CCIC8rOJpd2Mt37Qbn6";
		const _returnValuekQC8zk = [_arrayValuee4d9IO6]
		const _helperDWXSQiD = () => { return _returnValuekQC8zk };
		const _returnValueytKlt1v = await _HelpgDiyZf.formatHelp(_cmdJJmehEq, _helperDWXSQiD)
		const _argumentHOVQbLY = "vcRvV4SRalNvN1QkSE7ZqVc";
		const _returnValuehkdHV0D = await _HelpgDiyZf.argumentDescription(_argumentHOVQbLY)
		const _cmdIoj9Hso = {
		
	}
		const _sortSubcommandsx8FHkb = undefined;
		const _returnValueiZM2oqZ = false;
		const _subcommandTermWD4sP4L = () => { return _returnValueiZM2oqZ };
		const _helpery6bG0bf = {
			"sortSubcommands": _sortSubcommandsx8FHkb,
		"subcommandTerm": _subcommandTermWD4sP4L
	}
		const _returnValueu3XOxr9 = await _HelpgDiyZf.formatHelp(_cmdIoj9Hso, _helpery6bG0bf)
	});

	it('test for Help', async () => {
		const _HelpDfRero = new Help()
		const _argChoicesuuLD2A1 = {
		
	}
		const _negatesQUc4p = -5.658298062056557;
		const _defaultValuezccu5fi = undefined;
		const _defaultValueDescriptionzvUuPXm = {
		
	}
		const _envVarP5DWCHi = "CBpI9tfyRA8ycm9IcQVd3PXo0LgYfHidSYwjfm6q";
		const _returnValuewoQK9wD = "o6";
		const _descriptionmkeNZMw = () => { return _returnValuewoQK9wD };
		const _optionHoYghVn = {
			"argChoices": _argChoicesuuLD2A1,
		"negate": _negatesQUc4p,
		"defaultValue": _defaultValuezccu5fi,
		"defaultValueDescription": _defaultValueDescriptionzvUuPXm,
		"envVar": _envVarP5DWCHi,
		"description": _descriptionmkeNZMw
	}
		const _returnValueeeyQVI = await _HelpDfRero.optionDescription(_optionHoYghVn)
		const _cmdsitLwzf = "veqtnml6GFQAlfUJxcPnlfLw7MtvRNhOGjIbBuTOTnlwjS5Floay8luXtrIJmpMqV0SyQwxOk";
		const _returnValueckYCvpS = await _HelpDfRero.commandUsage(_cmdsitLwzf)
	});

	it('test for Help', async () => {
		const _HelpkO8f3Ak = new Help()
		const _cmdL0Uz28h = "cWgB6aq8WV1p75q5zARrYrmIpXS0PfxKGt0hjTfy395VQH8NlcFgVO2vRVGOxGVwTcSPc61x4uGiysMFWI4HNkQrpvcopbn";
		const _returnValuemJL5VvI = await _HelpkO8f3Ak.visibleCommands(_cmdL0Uz28h)
		const _namewqjXhtG = undefined;
		const _cmdeocVggQ = new Command(_namewqjXhtG)
		const _keyBVZvcx4 = "PRvESBpyYYHp88dEmBJ9tyi";
		const _valuephnzH7U = "83yPvkLqnBh7hUCqR4cDA4eD";
		const _returnValueq9jqV1 = await _cmdeocVggQ.setOptionValue(_keyBVZvcx4, _valuephnzH7U)
		const _returnValueyBbvmYU = await _HelpkO8f3Ak.visibleArguments(_cmdeocVggQ)
	});

	it('test for Help', async () => {
		const _HelpMircQqP = new Help()
		const __nameJhuO6Kq = "D35BPSm0KfrmiVGO2GefvxVgfVHdcv1";
		const _arrayValuebYhNN2X = "6nBmTnROCW6ajXerQBSFlceVwITvCIQUVYrCiJvizkJVd31YHfajT514DIUUsSpAjkp4mwyeFXeF4GAwo";
		const __aliasesAyLdkvP = [_arrayValuebYhNN2X]
		const _parentzKgBlQL = {
		
	}
		const _returnValueY4Jnme = null;
		const _usageCsSWdJ5 = () => { return _returnValueY4Jnme };
		const _cmdNfCTI93 = {
			"_name": __nameJhuO6Kq,
		"_aliases": __aliasesAyLdkvP,
		"parent": _parentzKgBlQL,
		"usage": _usageCsSWdJ5
	}
		const _returnValueOqa85Hv = await _HelpMircQqP.commandUsage(_cmdNfCTI93)
		const _arrayValue9Ydfxo = "PS6dSb8fmbmDb05SIqWJg2vlqRMkkbqMy1MI5zEnAHsrmegj97";
		const _arrayValuec8jEeFV = false;
		const _arrayValuetsXkNAy = false;
		const _arrayValueGEITvNq = [_arrayValuec8jEeFV, _arrayValuetsXkNAy]
		const _arrayValueITb52IS = true;
		const _cmdHxERAyN = [_arrayValue9Ydfxo, _arrayValueGEITvNq, _arrayValueITb52IS]
		const _returnValuegNdCxxA = await _HelpMircQqP.commandDescription(_cmdHxERAyN)
		const _nameXFFPbWc = "Zbg8Mv8nBJFjjrNvuK88A4GtUvkALN2ZI9pMz3egIQHpNq";
		const _descriptionH20gQwH = undefined;
		const _argumentIjBEJ6j = new Argument(_nameXFFPbWc, _descriptionH20gQwH)
		const _returnValueD8OvHQQ = await _argumentIjBEJ6j.name()
		const _arrayValuewcQ5ug8 = true;
		const _arrayValuegQPgaIm = "qThLiUAf9Tp51GX04mtXs1zf4rnJkboxWQ7K8qB6bzVN6QQV2HdkcPiKB9fjrk4djew9UrQkv4lTP2b0UAEE9jj3GtkaIy4XZJy";
		const _valuepyprode = [_arrayValuewcQ5ug8, _arrayValuegQPgaIm]
		const _descriptionwSWxz6T = undefined;
		const _returnValueaWVPgLF = await _argumentIjBEJ6j.default(_valuepyprode, _descriptionwSWxz6T)
		const _returnValueXj55U9j = await _HelpMircQqP.argumentTerm(_argumentIjBEJ6j)
	});

	it('test for Help', async () => {
		const _HelpwMavWJ = new Help()
		const _returnValueWOCfx4s = null;
		const _returnValueJtuyXRo = () => { return _returnValueWOCfx4s };
		const _matchHL0hyty = () => { return _returnValueJtuyXRo };
		const _arrayValueiGeOO39 = "HpWWGRLPYTBLn7mEcwAbCxAFIvisJXrAPjiqt1N7pbPpBPaXo";
		const _arrayValuextn2kP2 = undefined;
		const _arrayValueMoIXb5Z = 5.173376007254211;
		const _arrayValueRMXa7X = "gXEiCx3wIjIxVYq4nWx99oXqAE72HVAaRVv8XVuGQ5yAmkSera3N7HJ7wNW52EpxmaBnb1CIKGZ4CwjpYarBwQY32DU";
		const _returnValueT3ojNp = -6.360570521374843;
		const _arrayValuemHUxhQb = () => { return _returnValueT3ojNp };
		const _arrayValueuZIv5J0 = {
		
	}
		const _arrayValueWs5sYhW = "JoDVdQkhWUjIhQjmWA8OAecN51JZqWBZqYMI";
		const _arrayValueOsJsYFV = [_arrayValueuZIv5J0, _arrayValueWs5sYhW]
		const _arrayValueZEZ4Ny8 = undefined;
		const _arrayValueq1mVfzM = [_arrayValuemHUxhQb, _arrayValueOsJsYFV, _arrayValueZEZ4Ny8]
		const _arrayValueEMINLGy = [_arrayValueRMXa7X, _arrayValueq1mVfzM]
		const _arrayValueFberLXj = [_arrayValueMoIXb5Z, _arrayValueEMINLGy]
		const _arrayValueMVwUqJe = null;
		const _arrayValueBaw2p1Z = [_arrayValueFberLXj, _arrayValueMVwUqJe]
		const _arrayValueVqRnznn = null;
		const _arrayValueVT5AIxU = [_arrayValuextn2kP2, _arrayValueBaw2p1Z, _arrayValueVqRnznn]
		const _arrayValue3VKPup = undefined;
		const _substrqT8ZEAO = [_arrayValueiGeOO39, _arrayValueVT5AIxU, _arrayValue3VKPup]
		const _strIH0OGd = {
			"match": _matchHL0hyty,
		"substr": _substrqT8ZEAO
	}
		const _widthRvIZwom = -4.699881216430379;
		const _indentHUf6EDO = -0.0638531421820403;
		const _minColumnWidthLHf73Df = -7.966486442240306;
		const _returnValueKJ5OjCv = await _HelpwMavWJ.wrap(_strIH0OGd, _widthRvIZwom, _indentHUf6EDO, _minColumnWidthLHf73Df)
		const _cmdFzVN9Rl = "zSQt3n2gEdh6RK2V9T1x6d2k4OGCh2UtNWaElD4G4AgkDjCJ";
		const _returnValuezq9jAsw = await _HelpwMavWJ.commandDescription(_cmdFzVN9Rl)
		const _cmdT7H1r9R = undefined;
		const _returnValue59J7LL = null;
		const _helperueBUKs = () => { return _returnValue59J7LL };
		const _returnValueTaAkuTk = await _HelpwMavWJ.formatHelp(_cmdT7H1r9R, _helperueBUKs)
	});

	it('test for Help', async () => {
		const _Help0r69Jt = new Help()
		const _cmdHUpds53 = "v89liHtpeg5qdluCp7v5YFJTKgjx1bnXbn0rPWBHRUFxsaHnX";
		const _returnValueSXGBvv6 = true;
		const _longestOptionTermLengthbaaAdp = () => { return _returnValueSXGBvv6 };
		const _returnValueIoRG3sK = null;
		const _longestSubcommandTermLengthrfkjtBx = () => { return _returnValueIoRG3sK };
		const _returnValuezTteifj = -5.309370888922239;
		const _longestArgumentTermLengthxKTK3Z2 = () => { return _returnValuezTteifj };
		const _helperoG157He = {
			"longestOptionTermLength": _longestOptionTermLengthbaaAdp,
		"longestSubcommandTermLength": _longestSubcommandTermLengthrfkjtBx,
		"longestArgumentTermLength": _longestArgumentTermLengthxKTK3Z2
	}
		const _returnValuek4XcTCt = await _Help0r69Jt.padWidth(_cmdHUpds53, _helperoG157He)
		const _flagsT3Xa6N3 = true;
		const _optionOHBjrze = {
			"flags": _flagsT3Xa6N3
	}
		const _returnValuejw0d883 = await _Help0r69Jt.optionTerm(_optionOHBjrze)
		const _flagsz44sjTU = "8A308cbL3O1hD7NEFmhxyN88CzDW90sbpovJVdMfbWEsJS6USarDpF1XPOS";
		const _descriptionRxtAV1B = "kwF9fluu6yaUyretOm8JkVgVmvY";
		const _argumenthpJ9dv = new Option(_flagsz44sjTU, _descriptionRxtAV1B)
		const _returnValuekJ8Omxh = 9.698375562210387;
		const _arrayValuePv3DN2r = () => { return _returnValuekJ8Omxh };
		const _arrayValueXqbYNXy = null;
		const _arrayValuedJsaak = -8.028380043622294;
		const _arrayValueeRHIRCm = null;
		const _arrayValueJaLYKgg = [_arrayValueeRHIRCm]
		const _fnoVpMCZo = [_arrayValuePv3DN2r, _arrayValueXqbYNXy, _arrayValuedJsaak, _arrayValueJaLYKgg]
		const _returnValueJEdzeyl = await _argumenthpJ9dv.argParser(_fnoVpMCZo)
		const _fnRiIBiwU = undefined;
		const _returnValueafPsPSE = await _argumenthpJ9dv.argParser(_fnRiIBiwU)
		const _hideGAl3hBK = false;
		const _returnValueFOIddWP = await _argumenthpJ9dv.hideHelp(_hideGAl3hBK)
		const _returnValueMBwyA3 = await _Help0r69Jt.argumentTerm(_argumenthpJ9dv)
		const _argumentd8IIuuv = "oLdFvk2l1OeSINFJdXPv75RzLXptAyETkTquDo8CbgGHgIimSO3QWhIM5rQqYZQjJS5CxuRiCUOe";
		const _returnValueNXNQ1Of = await _Help0r69Jt.argumentTerm(_argumentd8IIuuv)
	});

	it('test for Help', async () => {
		const _HelpnDIEeFW = new Help()
		const _arrayValueko7QJHj = undefined;
		const _arrayValueqpNX3QT = {
		
	}
		const _arrayValuefYKqwXp = false;
		const _arrayValuehW2twA6 = {
		
	}
		const _arrayValuevenG5ym = [_arrayValueko7QJHj, _arrayValueqpNX3QT, _arrayValuefYKqwXp, _arrayValuehW2twA6]
		const _arrayValueK33gWhX = null;
		const _returnValueC0AW5c = [_arrayValuevenG5ym, _arrayValueK33gWhX]
		const _arrayValueuN6oQuK = () => { return _returnValueC0AW5c };
		const _arrayValueDo0Y1Ak = true;
		const _argChoices5J5Gce = [_arrayValueuN6oQuK, _arrayValueDo0Y1Ak]
		const _defaultValuehGB7f8h = undefined;
		const _defaultValueDescriptionbY8oSBH = undefined;
		const _returnValueqyu2mkX = {
		
	}
		const _descriptionbhy3wyz = () => { return _returnValueqyu2mkX };
		const _argumentX47HXXr = {
			"argChoices": _argChoices5J5Gce,
		"defaultValue": _defaultValuehGB7f8h,
		"defaultValueDescription": _defaultValueDescriptionbY8oSBH,
		"description": _descriptionbhy3wyz
	}
		const _returnValueCuJLUFP = await _HelpnDIEeFW.argumentDescription(_argumentX47HXXr)
		const _returnValueXpyEhEO = "RRwlnpnhzIJ2yAA1OOu6BNcxYN92PKulwpXTCTtKJPqQDCPLT7ojschfFxh4EdFLdT0p";
		const _cmdVZqKE9u = () => { return _returnValueXpyEhEO };
		const _returnValueC4JPwV = await _HelpnDIEeFW.commandUsage(_cmdVZqKE9u)
		const _arrayValuezljldMc = false;
		const _arrayValuehWg4y7a = {
		
	}
		const _cmdhvhOeHH = [_arrayValuezljldMc, _arrayValuehWg4y7a]
		const _returnValueemY5D8L = await _HelpnDIEeFW.visibleOptions(_cmdhvhOeHH)
		const _nameUtQk2IG = 8.158718922419368;
		const _cmdZCAGM97 = new Command(_nameUtQk2IG)
		const _fnKTFlyUo = {
		
	}
		const _returnValueJ7yvuLD = await _cmdZCAGM97.exitOverride(_fnKTFlyUo)
		const _returnValueoMO9uR = 9.85173561523127;
		const _mandatoryxcOVA25 = () => { return _returnValueoMO9uR };
		const _confighmbA5Va = {
			"mandatory": _mandatoryxcOVA25
	}
		const _flagsW2u8YaJ = 3.428200984152605;
		const _descriptionKJXZBKN = false;
		const _fnhQaU7CT = {
		
	}
		const _defaultValuehp8iYWO = null;
		const _returnValuepMRY1K9 = await _cmdZCAGM97._optionEx(_confighmbA5Va, _flagsW2u8YaJ, _descriptionKJXZBKN, _fnhQaU7CT, _defaultValuehp8iYWO)
		const _returnValueCwKJiYI = await _HelpnDIEeFW.subcommandTerm(_cmdZCAGM97)
		const _arrayValueQUKthIU = -6.3675215539914145;
		const _arrayValueGBXl9P4 = {
		
	}
		const _arrayValueVYpxoX = false;
		const _returnValue3L9fl0 = [_arrayValueQUKthIU, _arrayValueGBXl9P4, _arrayValueVYpxoX]
		const _nameOVojs7z = () => { return _returnValue3L9fl0 };
		const _argumentCm9W4ix = {
			"name": _nameOVojs7z
	}
		const _returnValueujdBmsb = await _HelpnDIEeFW.argumentTerm(_argumentCm9W4ix)
	});

	it('test for Help', async () => {
		const _HelpaXO91L6 = new Help()
		const _arrayValuec37BkkW = 3.6184713101832067;
		const _arrayValuehtjfIGB = undefined;
		const _arrayValuetgff8Jq = false;
		const _arrayValueTL6DQ8p = [_arrayValuetgff8Jq]
		const _arrayValueGWwM1tp = [_arrayValuehtjfIGB, _arrayValueTL6DQ8p]
		const _arrayValueQKF41IE = 6.485518933720119;
		const _nameU5CDTJM = [_arrayValuec37BkkW, _arrayValueGWwM1tp, _arrayValueQKF41IE]
		const _cmdCyeNFi = new Command(_nameU5CDTJM)
		const _promiseMkEoeiE = {
		
	}
		const _eventITcUnKJ = "DEXe6Vky8vwBPbfGkk9K4C4xOdHHLCxhZXnHFoIsL";
		const _returnValuey596uxT = await _cmdCyeNFi._chainOrCallHooks(_promiseMkEoeiE, _eventITcUnKJ)
		const _returnValuec0rVGa = await _HelpaXO91L6.visibleOptions(_cmdCyeNFi)
		const _cmdZ42PKyk = undefined;
		const _returnValueN3NZNJ6 = await _HelpaXO91L6.commandDescription(_cmdZ42PKyk)
		const _cmdhDSVBa0 = -5.911467851130514;
		const _sortSubcommandsJa64YVO = false;
		const _arrayValuesBRHMSX = 0.36211023444346324;
		const _arrayValueX5VXmzq = undefined;
		const _returnValuestENU0O = [_arrayValuesBRHMSX, _arrayValueX5VXmzq]
		const _subcommandTermLS7fBJE = () => { return _returnValuestENU0O };
		const _helperwD8qxJ = {
			"sortSubcommands": _sortSubcommandsJa64YVO,
		"subcommandTerm": _subcommandTermLS7fBJE
	}
		const _returnValueNkNvwbh = await _HelpaXO91L6.longestSubcommandTermLength(_cmdhDSVBa0, _helperwD8qxJ)
		const _nameIiMV1Iy = true;
		const _cmdinOy1n = new Command(_nameIiMV1Iy)
		const __nameMdDmTgo = {
		
	}
		const _commandsG9Tycwx = "u";
		const __hiddenqjyDNTa = false;
		const _parentZp0l2II = "JQTJ9VOMRajnGO2OQxIMBETfzvlGYeOEd31ny8JeYRQHKo6rm0zU2NSMeY75eR";
		const _cmdNc2GryX = {
			"_name": __nameMdDmTgo,
		"commands": _commandsG9Tycwx,
		"_hidden": __hiddenqjyDNTa,
		"parent": _parentZp0l2II
	}
		const _returnValuebZXLCKC = null;
		const _optsbEtpG25 = () => { return _returnValuebZXLCKC };
		const _returnValuebKHW850 = await _cmdinOy1n.addCommand(_cmdNc2GryX, _optsbEtpG25)
		const _allowExcessUMis8cQ = true;
		const _returnValueii6p8y1 = await _cmdinOy1n.allowExcessArguments(_allowExcessUMis8cQ)
		const _returnValueWMDsRXQ = undefined;
		const _configurationKAfSdXn = () => { return _returnValueWMDsRXQ };
		const _returnValuedGvK1cC = await _cmdinOy1n.configureHelp(_configurationKAfSdXn)
		const _positionFeJTbRW = null;
		const _returnValueGuy38fW = undefined;
		const _textOFBqUtb = () => { return _returnValueGuy38fW };
		const _returnValueVIwlrht = await _cmdinOy1n.addHelpText(_positionFeJTbRW, _textOFBqUtb)
		const _returnValueLQvVFIp = await _HelpaXO91L6.subcommandTerm(_cmdinOy1n)
	});

	it('test for Help', async () => {
		const _HelpIw0w9l4 = new Help()
		const _arrayValueH4Zvvtm = "6";
		const _arrayValueFY7v1WJ = 6.770466199973701;
		const _arrayValueScCLX4f = undefined;
		const _namedsjieqQ = [_arrayValueH4Zvvtm, _arrayValueFY7v1WJ, _arrayValueScCLX4f]
		const _arrayValueWUNbhe = {
		
	}
		const _arrayValuewkNwpl = true;
		const _returnValueLrDZYCa = [_arrayValueWUNbhe, _arrayValuewkNwpl]
		const _description2utkOS = () => { return _returnValueLrDZYCa };
		const _optionv7UP1ms = new Argument(_namedsjieqQ, _description2utkOS)
		const _returnValueiQg3aaF = false;
		const _includesRD18g8a = () => { return _returnValueiQg3aaF };
		const _returnValueXjJEfEG = {
		
	}
		const _joinyE6USFD = () => { return _returnValueXjJEfEG };
		const _valuesUmIzSuZ = {
			"includes": _includesRD18g8a,
		"join": _joinyE6USFD
	}
		const _returnValue6WcRIg = await _optionv7UP1ms.choices(_valuesUmIzSuZ)
		const _arrayValuePw4mfI = null;
		const _arrayValuewZL0wjJ = -1.3321192615663264;
		const _arrayValuepGYX6ov = "w7WfxP6zbTiSM3n1EyzTNVqSAFVaouc8UIORzJR1P1j3b5IK7E33U5bNQJ3NOH6bzs40slrq";
		const _valuesAf96rpE = [_arrayValuePw4mfI, _arrayValuewZL0wjJ, _arrayValuepGYX6ov]
		const _returnValueMQltYAw = await _optionv7UP1ms.choices(_valuesAf96rpE)
		const _valueo3Hr5od = "MlCWVg7ujf3qW5m4qJHzOvN";
		const _descriptionrkkCz5c = undefined;
		const _returnValueKR6PBsN = await _optionv7UP1ms.default(_valueo3Hr5od, _descriptionrkkCz5c)
		const _returnValueNWmbJW5 = await _HelpIw0w9l4.optionDescription(_optionv7UP1ms)
		const _commandstXYs2fL = {
		
	}
		const _returnValueL6U3BNO = {
		
	}
		const _returnValuehDYppck = () => { return _returnValueL6U3BNO };
		const __hasImplicitHelpCommandN3PBWvB = () => { return _returnValuehDYppck };
		const __helpCommandnameAndArgsWWJUsq = {
		
	}
		const _returnValuejHCjaaf = "15Vt8UjwJkD36xr0nYkIWDsdez5klwSC1qHByAT0XKlAAKoKAxxUxZoKikEjpkQ5ca2NeFqbHeKZ9x36ni9EW5e7BEmcI";
		const _createCommandtHGT5yh = () => { return _returnValuejHCjaaf };
		const __helpCommandDescriptionPS5oHr8 = undefined;
		const _cmdZF0LmdM = {
			"commands": _commandstXYs2fL,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandN3PBWvB,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsWWJUsq,
		"createCommand": _createCommandtHGT5yh,
		"_helpCommandDescription": __helpCommandDescriptionPS5oHr8
	}
		const _returnValueQ2wkIqC = await _HelpIw0w9l4.visibleCommands(_cmdZF0LmdM)
	});

	it('test for Help', async () => {
		const _HelpG7rUMa7 = new Help()
		const _returnValueBAfHi7A = "qJs4EIMyhibuM6z2lgBrWBBX1t7MtaKX4VmB";
		const _sliceZjzR3CT = () => { return _returnValueBAfHi7A };
		const _nameYlQQwc = {
			"slice": _sliceZjzR3CT
	}
		const _descriptionqZKd75Q = -6.741864316623891;
		const _argumentNPF7Ga8 = new Argument(_nameYlQQwc, _descriptionqZKd75Q)
		const _arrayValueMVlz2x2 = undefined;
		const _arrayValuemSpbCZ = undefined;
		const _valuesxTC4iBx = [_arrayValueMVlz2x2, _arrayValuemSpbCZ]
		const _returnValuegwNr0al = await _argumentNPF7Ga8.choices(_valuesxTC4iBx)
		const _returnValueILLzjdv = 2.9564903553295316;
		const _valueFIsA1Qu = () => { return _returnValueILLzjdv };
		const _descriptionIiigE84 = undefined;
		const _returnValueCv98iDn = await _argumentNPF7Ga8.default(_valueFIsA1Qu, _descriptionIiigE84)
		const _arrayValuePVbuwJR = undefined;
		const _valuesZUlRpbS = [_arrayValuePVbuwJR]
		const _returnValuesPuoFMg = await _argumentNPF7Ga8.choices(_valuesZUlRpbS)
		const _returnValueyTS5jK = await _HelpG7rUMa7.argumentDescription(_argumentNPF7Ga8)
		const _arrayValuevUabFw3 = "YjbOYxG9xjtzX";
		const _arrayValueFKkUuO = {
		
	}
		const _flagsFxE5fNx = [_arrayValuevUabFw3, _arrayValueFKkUuO]
		const _optionobwEgI1 = {
			"flags": _flagsFxE5fNx
	}
		const _returnValueo9U93rJ = await _HelpG7rUMa7.optionTerm(_optionobwEgI1)
	});

	it('test for Help', async () => {
		const _HelpCXYqUeu = new Help()
		const _nameksVs1Qi = 7.692082503364283;
		const _cmdb15jq4Z = new Command(_nameksVs1Qi)
		const _returnValueGOkKaHw = await _cmdb15jq4Z.opts()
		const _returnValueeeDAbqU = await _cmdb15jq4Z.opts()
		const _returnValueVCvPL6d = await _HelpCXYqUeu.subcommandTerm(_cmdb15jq4Z)
		const _cmdN7kg4L = "BrgR125QHnpqVMrorXpx32xS7ge3fuEzHU5u975pynpdSPbJej5ISsxiRaK";
		const _returnValueOTvHpPa = await _HelpCXYqUeu.visibleCommands(_cmdN7kg4L)
		const _arrayValueheu6XE2 = {
		
	}
		const _flagsQdlrjJZ = [_arrayValueheu6XE2]
		const _descriptionq0GmNH = false;
		const _cmdHx5NhYY = new Option(_flagsQdlrjJZ, _descriptionq0GmNH)
		const _valueJ2DE4bC = {
		
	}
		const _arrayValueu9VZhli = undefined;
		const _arrayValuepbDtSt = false;
		const _arrayValueHD5BcYG = null;
		const _arrayValuefcDALki = "2qOefzHFlnFgmoI9Jxf7uC";
		const _returnValueci8ryNz = undefined;
		const _returnValueWimHza2 = () => { return _returnValueci8ryNz };
		const _arrayValue9vuaeR = () => { return _returnValueWimHza2 };
		const _arrayValueRVwwDMg = [_arrayValuefcDALki, _arrayValue9vuaeR]
		const _arrayValued3m69c5 = true;
		const _arrayValuepQ9b51N = [_arrayValueHD5BcYG, _arrayValueRVwwDMg, _arrayValued3m69c5]
		const _arrayValueku5V01Y = undefined;
		const _arrayValuee8mUrrd = [_arrayValuepbDtSt, _arrayValuepQ9b51N, _arrayValueku5V01Y]
		const _arrayValuedtlWLJf = [_arrayValuee8mUrrd]
		const _previousAw2HfpL = [_arrayValueu9VZhli, _arrayValuedtlWLJf]
		const _returnValue5xLuOW = await _cmdHx5NhYY._concatValue(_valueJ2DE4bC, _previousAw2HfpL)
		const _returnValueISt2mSw = await _cmdHx5NhYY.name()
		const _returnValuen7UYKFc = await _HelpCXYqUeu.commandDescription(_cmdHx5NhYY)
		const _cmdxi8Er25 = -4.9784738111483895;
		const _sortSubcommandsIOonH4 = null;
		const _returnValuewdi7hMr = {
		
	}
		const _subcommandTermD6JRMAf = () => { return _returnValuewdi7hMr };
		const _helperiSJBn09 = {
			"sortSubcommands": _sortSubcommandsIOonH4,
		"subcommandTerm": _subcommandTermD6JRMAf
	}
		const _returnValuecJbxcP5 = await _HelpCXYqUeu.formatHelp(_cmdxi8Er25, _helperiSJBn09)
	});

	it('test for Help', async () => {
		const _HelpOOoBO9S = new Help()
		const _nameUjC2bgG = "1tsfSizwuwBrB0In805jiHZlfgg9ltk3OkTod9NNckGYF9JKmsjDFONGe";
		const _cmdE3kCmCD = new Command(_nameUjC2bgG)
		const _returnValueW7deCTu = await _cmdE3kCmCD._processArguments()
		const _returnValueZQc4uE9 = 3.9560815156319684;
		const _splitUjkFdTx = () => { return _returnValueZQc4uE9 };
		const _enableOrNameAndArgslws2dHi = {
			"split": _splitUjkFdTx
	}
		const _arrayValueejiF0sV = true;
		const _arrayValueN8dDTr2 = "qA7RK3nfLt3Pw53sVuuLwIw1DcVuqAmT0IuIo6kh5yD5GNQEDXcvUTVgSN0RRx";
		const _returnValuexe1c5Za = [_arrayValueejiF0sV, _arrayValueN8dDTr2]
		const _descriptionC2q5DsS = () => { return _returnValuexe1c5Za };
		const _returnValueNjqvKT9 = await _cmdE3kCmCD.addHelpCommand(_enableOrNameAndArgslws2dHi, _descriptionC2q5DsS)
		const _arrayValueZsG1TcF = false;
		const _returnValueZ59ZBlV = [_arrayValueZsG1TcF]
		const _forEachOq0TvAD = () => { return _returnValueZ59ZBlV };
		const _aliasescOjL4gd = {
			"forEach": _forEachOq0TvAD
	}
		const _returnValuewNd3bc6 = await _cmdE3kCmCD.aliases(_aliasescOjL4gd)
		const _returnValueJlHUtsO = await _cmdE3kCmCD._checkNumberOfArguments()
		const _returnValuej0fnxE3 = await _HelpOOoBO9S.visibleCommands(_cmdE3kCmCD)
		const _argumenteIbOZ3i = null;
		const _returnValuekmWVdLj = await _HelpOOoBO9S.argumentTerm(_argumenteIbOZ3i)
		const __argshwmsqnB = {
		
	}
		const __nameirLAswq = -7.891575292441383;
		const __aliasestdk6NyW = {
		
	}
		const _optionsUJQnnpe = {
		
	}
		const _cmdOOhFyA = {
			"_args": __argshwmsqnB,
		"_name": __nameirLAswq,
		"_aliases": __aliasestdk6NyW,
		"options": _optionsUJQnnpe
	}
		const _returnValuei1GPCAC = await _HelpOOoBO9S.subcommandTerm(_cmdOOhFyA)
		const __argsDescriptionV39nbZ = {
		
	}
		const __argsROu8tjk = {
		
	}
		const _cmdMEqZ9hN = {
			"_argsDescription": __argsDescriptionV39nbZ,
		"_args": __argsROu8tjk
	}
		const _returnValueYAJqZQd = await _HelpOOoBO9S.visibleArguments(_cmdMEqZ9hN)
		const _cmdjic2KmA = "pEGEWTEmL5FcfjWTmcWNILnTFjVmN38KYuU8qaie";
		const _returnValueAevf6yX = await _HelpOOoBO9S.visibleArguments(_cmdjic2KmA)
	});
})