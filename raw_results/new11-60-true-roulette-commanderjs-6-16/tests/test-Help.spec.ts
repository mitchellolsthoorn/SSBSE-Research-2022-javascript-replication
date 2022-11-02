export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpy8TQk1u = new Help()
		const _cmdL40wlDb = -3.6214771054888466;
		const _helperOXYVA6E = new Help()
		const _cmdFKrqdPd = undefined;
		const _helperAxbMUV9 = "1iufvcb2XmjuOur0wpx4uSqJ0u0UnTXF6CWE9492XUxnreIOk2dIXOloshJjo5ryPTe7i3tPGODwJLneEoL";
		const _returnValuegSQIrpl = await _helperOXYVA6E.padWidth(_cmdFKrqdPd, _helperAxbMUV9)
		const _cmdau38b7u = "M9DYYNvInn3Cph7TtCvXFi5eYwx1DnekYwgzZNRdxVGJ9ufqb1rRssRkt25P9ts1wfI2nn";
		const _returnValueH2ghNB = await _helperOXYVA6E.subcommandDescription(_cmdau38b7u)
		const _cmdCMGDK0I = undefined;
		const _helperXfFgZIp = "jm9wuRARO5JoiNC5Wg8BjDibLRlwjb8mSwLbFfgQt4xQHuI";
		const _returnValuedsVvhKK = await _helperOXYVA6E.longestArgumentTermLength(_cmdCMGDK0I, _helperXfFgZIp)
		const _returnValueJR3pEZ = await _Helpy8TQk1u.formatHelp(_cmdL40wlDb, _helperOXYVA6E)
		const _cmdf0EGo3O = -8.386594030509855;
		const _sortSubcommandsSR6ecR0 = -7.532929619515918;
		const _returnValueoXG0QKs = -1.9447058125169079;
		const _arrayValueJajAZT2 = () => { return _returnValueoXG0QKs };
		const _arrayValueXMPpP2A = [_arrayValueJajAZT2]
		const _arrayValuesQf00ka = true;
		const _arrayValueswIFfs = "gLygOn71HWwLQLekT4tYDeDLKxpuwIyoylKNYkTNQjm284nmBTTPv7ia7etEkohkpM";
		const _subcommandTermt4gh8or = [_arrayValueXMPpP2A, _arrayValuesQf00ka, _arrayValueswIFfs]
		const _helpersLfBH8Y = {
			"sortSubcommands": _sortSubcommandsSR6ecR0,
		"subcommandTerm": _subcommandTermt4gh8or
	}
		const _returnValueZ0jyFC7 = await _Helpy8TQk1u.formatHelp(_cmdf0EGo3O, _helpersLfBH8Y)
		const _arrayValuehHNDy3m = "41gyKAffLjgnue768lAq1sSt5Se9MpZtftJNTFYttA49EwaBIIA8SXdqc0PPHnS";
		const _arrayValuefYpKu0o = [_arrayValuehHNDy3m]
		const _arrayValueRHORMsH = [_arrayValuefYpKu0o]
		const _arrayValueQOSltv = null;
		const _flagspBhE0KA = [_arrayValueRHORMsH, _arrayValueQOSltv]
		const _optionQA1yiHS = {
			"flags": _flagspBhE0KA
	}
		const _returnValueyrds4I7 = await _Helpy8TQk1u.optionTerm(_optionQA1yiHS)
	});

	it('test for Help', async () => {
		const _HelpZlxCv8u = new Help()
		const _arrayValueySa5bDf = -1.528258534005948;
		const _arrayValueclD2X6G = null;
		const _arrayValuelan3RO6 = [_arrayValueySa5bDf, _arrayValueclD2X6G]
		const _arrayValueuJiwUR = true;
		const _arrayValuek8tmIr = true;
		const _cmdXus8FxX = [_arrayValuelan3RO6, _arrayValueuJiwUR, _arrayValuek8tmIr]
		const _helperTupjBcQ = "tiCRdxouCLNN8";
		const _returnValuebwRFz3z = await _HelpZlxCv8u.longestArgumentTermLength(_cmdXus8FxX, _helperTupjBcQ)
		const _cmdV2ZURx = null;
		const _returnValueDs2DdkH = await _HelpZlxCv8u.subcommandDescription(_cmdV2ZURx)
	});

	it('test for Help', async () => {
		const _HelppHwHhhT = new Help()
		const __nameaxurlPj = "mW5OAM5ur9jda7NfgC1mW4hH1rvdvz9NPrqr9c1MMF8OHE6S3oIJyzwFMcXCwjVL6t3EkDW";
		const __aliasesYUmCqTK = {
		
	}
		const _returnValueUtJUDWq = "fvEf9xJgos9oeQchPv5b7lBHghKpQRvNTHcUG5bSAcAhqjFmMY";
		const _parentJlCEOxn = () => { return _returnValueUtJUDWq };
		const _returnValueatFYgcA = undefined;
		const _usagerF0Yhv7 = () => { return _returnValueatFYgcA };
		const _cmdt1MAdvX = {
			"_name": __nameaxurlPj,
		"_aliases": __aliasesYUmCqTK,
		"parent": _parentJlCEOxn,
		"usage": _usagerF0Yhv7
	}
		const _returnValuemQcvu76 = await _HelppHwHhhT.commandUsage(_cmdt1MAdvX)
		const _returnValuevzNearW = 2.3680521390904214;
		const _optionDiZoXlO = () => { return _returnValuevzNearW };
		const _returnValueOojQ0w = await _HelppHwHhhT.optionTerm(_optionDiZoXlO)
		const _optionsj7Xxy0 = {
		
	}
		const _arrayValuetAy873 = 4.084254092850037;
		const _arrayValuetNREJq = "fWrApo9UsDMqjh8JTIzZKcorF684QQJtODCqet8jMH";
		const _arrayValueJnZffPv = -5.1073696771672195;
		const __hasHelpOptionPZ4NSrv = [_arrayValuetAy873, _arrayValuetNREJq, _arrayValueJnZffPv]
		const _returnValuerfv5NJE = "XnwpqtcmzDKp0ICWBCP9Kh1vmiXh";
		const __helpShortFlagxVSbB5N = () => { return _returnValuerfv5NJE };
		const _arrayValueCSRibgS = null;
		const _arrayValuenMhXCvk = "GtT03TcUGsXJOnOzmR5Z3A76oRj8jyYeqwXUD77RHrPvBXkTnHMEdVLu9";
		const _arrayValuejP7bZvd = {
		
	}
		const _arrayValuecbosvXi = "f4";
		const _returnValueVNZeea4 = [_arrayValueCSRibgS, _arrayValuenMhXCvk, _arrayValuejP7bZvd, _arrayValuecbosvXi]
		const __findOptionVqns9fj = () => { return _returnValueVNZeea4 };
		const __helpLongFlagiKbVFCZ = true;
		const _returnValuePcpNcqX = "hdvvw9foBNpHLjHYVHkKTucPDIOpbK1n7fy92Ce8u7cbKzLjeeFl8uD7DisTkvM4JOGLIq";
		const _createOptionwOO5lNQ = () => { return _returnValuePcpNcqX };
		const __helpDescriptionlcwNKik = "urmiQGK0E47uAKEkIsXFRu7";
		const __helpFlagsAfTYt7G = 5.957160416572101;
		const _cmdsBz2V6U = {
			"options": _optionsj7Xxy0,
		"_hasHelpOption": __hasHelpOptionPZ4NSrv,
		"_helpShortFlag": __helpShortFlagxVSbB5N,
		"_findOption": __findOptionVqns9fj,
		"_helpLongFlag": __helpLongFlagiKbVFCZ,
		"createOption": _createOptionwOO5lNQ,
		"_helpDescription": __helpDescriptionlcwNKik,
		"_helpFlags": __helpFlagsAfTYt7G
	}
		const _returnValueYZkipoK = await _HelppHwHhhT.visibleOptions(_cmdsBz2V6U)
	});

	it('test for Help', async () => {
		const _HelpHUsNAcs = new Help()
		const _cmdqOp2IFc = "ZYTQmo7Cp7UhSFubWaPOBjvtPRZXgT0cb2UPum5kyYam1lKBVoeNfgXAtarcGEzzcAXrzmTh1L1pDxKa36twoJHCzLF8";
		const _helperO5Nxniz = "W824Vkmd3QlJxIWdYwJcOm21Nv4BvDbMwPj18WKICFhx8Gys13AhBSsgqRmoUjGbvrJeNNHtvasXtH2jXWE";
		const _returnValuePKWgWt = await _HelpHUsNAcs.formatHelp(_cmdqOp2IFc, _helperO5Nxniz)
		const _arrayValueLcIRUl0 = false;
		const _arrayValueL3betO1 = null;
		const _arrayValuedmbMjq = [_arrayValueLcIRUl0, _arrayValueL3betO1]
		const _arrayValueFW7fp4Z = undefined;
		const _arrayValueb3wiVEs = -1.6865364610503235;
		const _optiond6l6Nr1 = [_arrayValuedmbMjq, _arrayValueFW7fp4Z, _arrayValueb3wiVEs]
		const _returnValueUGaly0D = await _HelpHUsNAcs.optionTerm(_optiond6l6Nr1)
		const _cmdb2kVx53 = undefined;
		const _returnValueu6zHzDk = "Mu2qspW1aQyPZ7YhYzKcDAy4m4pm0VqIHFOt65zdUz38eryDQGkgjNf";
		const _helperv4NbHIG = () => { return _returnValueu6zHzDk };
		const _returnValuelmKDcA = await _HelpHUsNAcs.padWidth(_cmdb2kVx53, _helperv4NbHIG)
	});

	it('test for Help', async () => {
		const _HelpWVFHY5F = new Help()
		const _cmde2NSjSQ = {
		
	}
		const _arrayValuexIFuM9T = undefined;
		const _arrayValueV2VaRBu = true;
		const _arrayValueIPgm9hu = {
		
	}
		const _arrayValueoSdDU8 = -3.111748916631888;
		const _arrayValueMJcrV0b = [_arrayValueV2VaRBu, _arrayValueIPgm9hu, _arrayValueoSdDU8]
		const _helperSbUZYG5 = [_arrayValuexIFuM9T, _arrayValueMJcrV0b]
		const _returnValuejZbtA6 = await _HelpWVFHY5F.longestOptionTermLength(_cmde2NSjSQ, _helperSbUZYG5)
		const _cmdkWmG7PY = null;
		const _returnValueXJycl8 = "O1kf9BypuXHUIhcfbPJxLEXBU";
		const _returnValueghbX8EC = () => { return _returnValueXJycl8 };
		const _returnValueNzOwP2 = () => { return _returnValueghbX8EC };
		const _helperD04IYQD = () => { return _returnValueNzOwP2 };
		const _returnValuej9O95Z = await _HelpWVFHY5F.longestSubcommandTermLength(_cmdkWmG7PY, _helperD04IYQD)
	});

	it('test for Help', async () => {
		const _HelpSd0tctI = new Help()
		const _arrayValued7uZ7tf = "2Ke7ar59Xht5ktQPqvFt1rNYtroYIP2w5409W97w";
		const _arrayValueJ49WEOg = null;
		const _cmds5zZfnR = [_arrayValued7uZ7tf, _arrayValueJ49WEOg]
		const _helperS0CmDCO = new Help()
		const _arrayValueMFCXgee = {
		
	}
		const _arrayValuet1k4ywm = "lZKTY57khrucHgGlDJBkXSy4vsUkITTIPOqSG9ReJ378e7e9LVnpu8j5ijeEbTxW2HeApTjrhO7mY6Ctmr0Fh1R3Vi2t5zWm9h";
		const _arrayValue6YEDaf = "gsQPyXLRImmCjOVUuM3LcBScmcmAojVIabA5rs6qfOqceoqFI8mX5dnOSJxa8WPwQ7Fpvl3";
		const _arrayValueurmhnSE = "s8A8Nyd244ca0C";
		const _arrayValuedGVQnfg = "RMhXSUJD2Kjr22irjqI3tuZFp0ulXiRtEnNeNLljIH0cb6dyDbNYu7sNtHAKyauk7nW";
		const _arrayValueEtyWljV = undefined;
		const _arrayValuealiG0Pv = undefined;
		const _arrayValue2hZgNA = 5.234793822042507;
		const _arrayValueyzrp1G = [_arrayValueurmhnSE, _arrayValuedGVQnfg, _arrayValueEtyWljV, _arrayValuealiG0Pv, _arrayValue2hZgNA]
		const _cmdNGfQlrs = [_arrayValueMFCXgee, _arrayValuet1k4ywm, _arrayValue6YEDaf, _arrayValueyzrp1G]
		const _sortSubcommandst30jlfo = "MYsCQICsgz23VvXAvgARWhlmkuLISAfzdOCVKuLnxumskPOVBwHgt";
		const _returnValueufg7fOR = {
		
	}
		const _subcommandTermo5Zx9Lo = () => { return _returnValueufg7fOR };
		const _helpergaS8pDs = {
			"sortSubcommands": _sortSubcommandst30jlfo,
		"subcommandTerm": _subcommandTermo5Zx9Lo
	}
		const _returnValueafh3n4n = await _helperS0CmDCO.longestSubcommandTermLength(_cmdNGfQlrs, _helpergaS8pDs)
		const _argumentnPb9xMg = true;
		const _returnValueSVE72Ax = await _helperS0CmDCO.argumentDescription(_argumentnPb9xMg)
		const _messagealTPosm = true;
		const _argumentL2xxoo = new InvalidArgumentError(_messagealTPosm)
		const _returnValueFIS4e4p = await _helperS0CmDCO.argumentTerm(_argumentL2xxoo)
		const _cmdR5z5iW8 = {
		
	}
		const _helperJSJmLNk = new Help()
		const _arrayValueSThaUeQ = null;
		const _arrayValueX0mPdoF = null;
		const _cmddof7JQ7 = [_arrayValueSThaUeQ, _arrayValueX0mPdoF]
		const _returnValuell69EJu = await _helperJSJmLNk.commandUsage(_cmddof7JQ7)
		const _exitCodeVjynKgQ = "ekqBLVltB";
		const _codeRpKuyg = undefined;
		const _messageXHLXxjw = "CPqS6A";
		const _argumentar1ZOQB = new CommanderError(_exitCodeVjynKgQ, _codeRpKuyg, _messageXHLXxjw)
		const _returnValueb2xF8LX = await _helperJSJmLNk.argumentTerm(_argumentar1ZOQB)
		const _cmdYdEViWo = 6.299869168139722;
		const _arrayValueawdalw = null;
		const _arrayValuexgO00nj = null;
		const _arrayValueY53Wyyt = "31b6lBGInYJVEMNitGPSQcVNsJONJdjGXo72xdDL4PENpPf0BRGNV3q1yxod4Ou7aM5BhxMc7wdeKn7Ert5VsKFQ5mM5hcGE";
		const _returnValueBUV4iLc = [_arrayValueawdalw, _arrayValuexgO00nj, _arrayValueY53Wyyt]
		const _sortSubcommandsbCj6gWV = () => { return _returnValueBUV4iLc };
		const _returnValuefEhrmNa = undefined;
		const _subcommandTermMCQq6Ob = () => { return _returnValuefEhrmNa };
		const _helpersBTQW4e = {
			"sortSubcommands": _sortSubcommandsbCj6gWV,
		"subcommandTerm": _subcommandTermMCQq6Ob
	}
		const _returnValueCPkA7yg = await _helperJSJmLNk.longestSubcommandTermLength(_cmdYdEViWo, _helpersBTQW4e)
		const _arrayValueG8Krbe0 = false;
		const _nameIRmp34P = [_arrayValueG8Krbe0]
		const _cmdKJtwok0 = new Command(_nameIRmp34P)
		const _configurationtbYf54 = {
		
	}
		const _returnValueMo8Uz9G = await _cmdKJtwok0.configureHelp(_configurationtbYf54)
		const _returnValuePmOYfe9 = await _helperJSJmLNk.subcommandDescription(_cmdKJtwok0)
		const _returnValuefKStG7o = {
		
	}
		const _cmdf6Copfm = () => { return _returnValuefKStG7o };
		const _returnValuetnVFzvP = await _helperJSJmLNk.visibleOptions(_cmdf6Copfm)
		const _returnValueaKUq8lc = await _helperS0CmDCO.longestOptionTermLength(_cmdR5z5iW8, _helperJSJmLNk)
		const _descriptionFSl4uIS = null;
		const _cmdOJRawir = {
			"description": _descriptionFSl4uIS
	}
		const _returnValueZB0JITS = await _helperS0CmDCO.subcommandDescription(_cmdOJRawir)
		const _returnValuetCk7Tov = await _HelpSd0tctI.longestOptionTermLength(_cmds5zZfnR, _helperS0CmDCO)
		const _returnValueikGovfT = undefined;
		const _cmdcZsX1P2 = () => { return _returnValueikGovfT };
		const _returnValueEhzjVDj = await _HelpSd0tctI.commandUsage(_cmdcZsX1P2)
	});

	it('test for Help', async () => {
		const _HelppvJS9Cb = new Help()
		const _cmdAnYBCRX = null;
		const _helperyqM8Tqe = new Help()
		const _returnValuejxNHn9Z = undefined;
		const _descriptionEnI7AQj = () => { return _returnValuejxNHn9Z };
		const _cmdCm5hIx3 = {
			"description": _descriptionEnI7AQj
	}
		const _returnValueJ72KL25 = await _helperyqM8Tqe.subcommandDescription(_cmdCm5hIx3)
		const _argumentu5p0yZM = "B8HnDvcS5MmDaiugyBBl1ud39mSUdPDEU3GUODKg7fvQiwUBQlv1WFENkdXZWtPtofGh5WhPiWYssltezHPYkPssyeHP2e";
		const _returnValueOpI0Zyk = await _helperyqM8Tqe.argumentDescription(_argumentu5p0yZM)
		const _returnValueWjGEBb = await _HelppvJS9Cb.formatHelp(_cmdAnYBCRX, _helperyqM8Tqe)
		const _cmddP367jG = []
		const _longestOptionTermLengthiODLXXS = null;
		const _returnValueI8XbQFS = -7.222442100181135;
		const _longestSubcommandTermLengthiGgwro = () => { return _returnValueI8XbQFS };
		const _returnValueJt2dUX = -0.049465911513991045;
		const _longestArgumentTermLengthNcxdmKz = () => { return _returnValueJt2dUX };
		const _helperBb9E038 = {
			"longestOptionTermLength": _longestOptionTermLengthiODLXXS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthiGgwro,
		"longestArgumentTermLength": _longestArgumentTermLengthNcxdmKz
	}
		const _returnValueq8cYYut = await _HelppvJS9Cb.padWidth(_cmddP367jG, _helperBb9E038)
		const _arrayValuesomBlw3 = "AlrAjesmUJrezYDDqVUVe15zNvjv69k9lRrGVRzOQYSblmHAldbCDlUchObFIz8xCet5tCXv";
		const _arrayValueu89ITA3 = -7.787730769839953;
		const _arrayValueeQZoz53 = {
		
	}
		const _argumentxWJiggR = [_arrayValuesomBlw3, _arrayValueu89ITA3, _arrayValueeQZoz53]
		const _returnValueJhU1yQ = await _HelppvJS9Cb.argumentTerm(_argumentxWJiggR)
		const _cmdNH2FCZq = {
		
	}
		const _arrayValueHrjzkV0 = -3.397985226162054;
		const _returnValuedXuvi8l = null;
		const _arrayValueWYU1NjO = () => { return _returnValuedXuvi8l };
		const _sortSubcommandsj8U03l = [_arrayValueHrjzkV0, _arrayValueWYU1NjO]
		const _returnValueXTaqYk1 = 2.773753806307507;
		const _subcommandTermUbzqKC = () => { return _returnValueXTaqYk1 };
		const _helpercZj7Ywp = {
			"sortSubcommands": _sortSubcommandsj8U03l,
		"subcommandTerm": _subcommandTermUbzqKC
	}
		const _returnValueXa9NA7a = await _HelppvJS9Cb.formatHelp(_cmdNH2FCZq, _helpercZj7Ywp)
	});

	it('test for Help', async () => {
		const _HelpLfRe3i4 = new Help()
		const _nameEmhNfPW = "fuoOZrCaWa4dZvM4CDi6p5Ynucs3SAIueLDNqZrt7KENSn3LQAvKM";
		const _descriptionSVAl4N = undefined;
		const _argumentwkzvOwU = new Argument(_nameEmhNfPW, _descriptionSVAl4N)
		const _returnValuezGm0h9 = await _argumentwkzvOwU.name()
		const _returnValueK2Ry2tS = await _argumentwkzvOwU.argOptional()
		const _returnValueRlbhZ5 = await _HelpLfRe3i4.argumentTerm(_argumentwkzvOwU)
		const _returnValueOygtxm = {
		
	}
		const _matchn0bbUYO = () => { return _returnValueOygtxm };
		const _returnValuexXGb7qu = 7.294851094887818;
		const _substrydyymR = () => { return _returnValuexXGb7qu };
		const _strsO4XuOz = {
			"match": _matchn0bbUYO,
		"substr": _substrydyymR
	}
		const _widthKpy671d = -8.787972667953257;
		const _indentbwYd4Xp = 5.97189268607325;
		const _minColumnWidthL8A8OBR = -3.00528120372695;
		const _returnValuemajdgKH = await _HelpLfRe3i4.wrap(_strsO4XuOz, _widthKpy671d, _indentbwYd4Xp, _minColumnWidthL8A8OBR)
		const _cmdAfFWd17 = "JPWO9r32XQJfPGk5gCjz2KWhPwCp1hcyP8";
		const _sortSubcommandsEpkgRmg = null;
		const _returnValueMUtdvAm = null;
		const _subcommandTermb1w4n7d = () => { return _returnValueMUtdvAm };
		const _helperXp2ru1H = {
			"sortSubcommands": _sortSubcommandsEpkgRmg,
		"subcommandTerm": _subcommandTermb1w4n7d
	}
		const _returnValuek1cAy9K = await _HelpLfRe3i4.formatHelp(_cmdAfFWd17, _helperXp2ru1H)
	});

	it('test for Help', async () => {
		const _HelpxPNoBfn = new Help()
		const _cmdT91bvbN = "Uh58Kruy7XHXFtmZx0qOH7c3dSW6kJSW7cIpr2NRqVIuA0W7QpdmAONxW1tP1pOe66jciJXmGrJmzTV";
		const _returnValuec56m2vJ = await _HelpxPNoBfn.visibleArguments(_cmdT91bvbN)
		const _argChoicesuBUOMoZ = {
		
	}
		const _defaultValueEENNXWt = undefined;
		const _arrayValuedVrMlrj = false;
		const _defaultValueDescription9GZ1NZ = [_arrayValuedVrMlrj]
		const _arrayValuenVCotec = undefined;
		const _descriptionrcxles0 = [_arrayValuenVCotec]
		const _argumentxlApbPc = {
			"argChoices": _argChoicesuBUOMoZ,
		"defaultValue": _defaultValueEENNXWt,
		"defaultValueDescription": _defaultValueDescription9GZ1NZ,
		"description": _descriptionrcxles0
	}
		const _returnValueqifSurB = await _HelpxPNoBfn.argumentDescription(_argumentxlApbPc)
		const __argsDescriptionzZjbRlE = {
		
	}
		const __argszF7X37D = {
		
	}
		const _cmdc4QBH9 = {
			"_argsDescription": __argsDescriptionzZjbRlE,
		"_args": __argszF7X37D
	}
		const _returnValueYRoXcO1 = await _HelpxPNoBfn.visibleArguments(_cmdc4QBH9)
		const _argChoiceshyO1x1 = {
		
	}
		const _negateFPiKneE = -1.6939333333962878;
		const _defaultValueplkc8Uj = undefined;
		const _arrayValueIkEblSA = 7.415049092302311;
		const _arrayValuela9CIKQ = false;
		const _defaultValueDescriptioneBD4gDe = [_arrayValueIkEblSA, _arrayValuela9CIKQ]
		const _envVarDvKJYUh = undefined;
		const _descriptionB0qhYAL = undefined;
		const _optionDTOHZkK = {
			"argChoices": _argChoiceshyO1x1,
		"negate": _negateFPiKneE,
		"defaultValue": _defaultValueplkc8Uj,
		"defaultValueDescription": _defaultValueDescriptioneBD4gDe,
		"envVar": _envVarDvKJYUh,
		"description": _descriptionB0qhYAL
	}
		const _returnValuegzAJBpz = await _HelpxPNoBfn.optionDescription(_optionDTOHZkK)
	});

	it('test for Help', async () => {
		const _HelpY4QQANB = new Help()
		const _returnValuegXBjq6I = 4.338775148642771;
		const _descriptionBZFovI = () => { return _returnValuegXBjq6I };
		const _cmdojFHFo = {
			"description": _descriptionBZFovI
	}
		const _returnValuelFtR55j = await _HelpY4QQANB.commandDescription(_cmdojFHFo)
		const _cmdaND2M4n = 5.9549298868299125;
		const _returnValueg8FPmhA = undefined;
		const _helperc8z3WQ = () => { return _returnValueg8FPmhA };
		const _returnValueTw0KU3g = await _HelpY4QQANB.longestOptionTermLength(_cmdaND2M4n, _helperc8z3WQ)
	});

	it('test for Help', async () => {
		const _HelptLZm5Gq = new Help()
		const _returnValueiQXfHsb = -0.3222165758162703;
		const _optionpSgiLTw = () => { return _returnValueiQXfHsb };
		const _returnValueSKzQrkl = await _HelptLZm5Gq.optionDescription(_optionpSgiLTw)
		const _cmdJEvDeQu = false;
		const _arrayValueX9xKoDf = null;
		const _helperN1YNEbG = [_arrayValueX9xKoDf]
		const _returnValueAx4LWe7 = await _HelptLZm5Gq.padWidth(_cmdJEvDeQu, _helperN1YNEbG)
		const _cmdYMgpTjR = true;
		const _helperUtAIc4v = new Help()
		const _arrayValueuVmiKhe = undefined;
		const _arrayValueD6dYOL0 = undefined;
		const _arrayValuedcI13Ws = "jAViAd59qCVDRFXc89Rwr24LHCv0ZgyVHgeQyV7Cim0R9WIpngs0JqG4f0Eh6goU2WGx";
		const _arrayValueUXIlUfK = false;
		const _arrayValuemZdhnIS = null;
		const _arrayValueFD9cMJL = [_arrayValuedcI13Ws, _arrayValueUXIlUfK, _arrayValuemZdhnIS]
		const _returnValueuG9IHR4 = [_arrayValueuVmiKhe, _arrayValueD6dYOL0, _arrayValueFD9cMJL]
		const _arrayValuejWvN3oX = () => { return _returnValueuG9IHR4 };
		const _arrayValueTQzMv0b = undefined;
		const _arrayValuejLCPVJo = true;
		const _arrayValuel0GjQIl = undefined;
		const _arrayValueK0z4gOi = undefined;
		const _strQixXPk0 = [_arrayValuejWvN3oX, _arrayValueTQzMv0b, _arrayValuejLCPVJo, _arrayValuel0GjQIl, _arrayValueK0z4gOi]
		const _widthnjx0sMb = -1.897939664134892;
		const _indentYUJdmkx = 2.899586805459858;
		const _minColumnWidthwKotsgF = null;
		const _returnValuewIZCMcc = await _helperUtAIc4v.wrap(_strQixXPk0, _widthnjx0sMb, _indentYUJdmkx, _minColumnWidthwKotsgF)
		const _returnValuecz7iaAi = "LklpXUucC0ChcJQyWSmhuYiXPOSU5AmF29mOy1rzqE32UyqkAdoH31W5Hgb9enkJs1zrbaWNfV4HIqMtmVdlQ5upLYlDtX";
		const _descriptionqvocS52 = () => { return _returnValuecz7iaAi };
		const _cmdPg46ITz = {
			"description": _descriptionqvocS52
	}
		const _returnValuei4bP1eI = await _helperUtAIc4v.commandDescription(_cmdPg46ITz)
		const _optionWOkfsIX = null;
		const _returnValuefSlv9Wd = await _helperUtAIc4v.optionDescription(_optionWOkfsIX)
		const _returnValueGTUyX12 = await _HelptLZm5Gq.formatHelp(_cmdYMgpTjR, _helperUtAIc4v)
		const _nameIaOIjeQ = false;
		const _cmdQWlUJbr = new Command(_nameIaOIjeQ)
		const _returnValueGn0AMzV = true;
		const _nameB4trxRU = () => { return _returnValueGn0AMzV };
		const _descriptiono8pmiy8 = true;
		const _returnValuetzhwpcf = await _cmdQWlUJbr.createArgument(_nameB4trxRU, _descriptiono8pmiy8)
		const _aliaseszVyLbSr = undefined;
		const _returnValuerqAsSpJ = await _cmdQWlUJbr.aliases(_aliaseszVyLbSr)
		const _arrayValueVJS3lRf = "kiukffs8baWmQhiRVaoqFbujFI1IuN8";
		const _optionEld68N = [_arrayValueVJS3lRf]
		const _returnValueON0L27I = await _cmdQWlUJbr.optionMissingArgument(_optionEld68N)
		const _nameG2qU4tl = null;
		const _cmdBfCQXeE = new Command(_nameG2qU4tl)
		const _strJnTNLQp = true;
		const _returnValuedg3NIqU = await _cmdBfCQXeE.usage(_strJnTNLQp)
		const _strNOZaRf = undefined;
		const _returnValuey5dq6VP = await _cmdBfCQXeE.usage(_strNOZaRf)
		const _returnValueHWtnl1r = await _cmdBfCQXeE.unknownCommand()
		const _arrayValueekgEoK = 1.2081896449853744;
		const _arrayValuezWu6CxV = undefined;
		const _returnValueq17LfwU = [_arrayValueekgEoK, _arrayValuezWu6CxV]
		const _fnq7QAQ4z = () => { return _returnValueq17LfwU };
		const _returnValuebSjlYYE = await _cmdBfCQXeE.exitOverride(_fnq7QAQ4z)
		const _optsjeYpY5n = "wVeqjFvbatgxWyiRa0oCSLYpzOYwgQbjvcAANbEaz19PmRItx5";
		const _returnValueFo08JTM = await _cmdQWlUJbr.addCommand(_cmdBfCQXeE, _optsjeYpY5n)
		const _returnValueMEGbXZe = await _HelptLZm5Gq.visibleOptions(_cmdQWlUJbr)
	});

	it('test for Help', async () => {
		const _HelpEFD7gtu = new Help()
		const _flagsxjzhUxI = "aAtTWv8jzdbybm0hOYN2gwffSCyWV1ZIwqGLtoypRvznF0lBfWm8hVuToGrUcFMrDi1llriuTAwiKrEvrJA94Ad27EzF0DA6Sn";
		const _option2Ja3Bq = {
			"flags": _flagsxjzhUxI
	}
		const _returnValueiiCpuAd = await _HelpEFD7gtu.optionTerm(_option2Ja3Bq)
		const _arrayValuegusSrbN = 3.2948910560268203;
		const _arrayValueFSiSy4m = undefined;
		const _argumentqAwTg1B = [_arrayValuegusSrbN, _arrayValueFSiSy4m]
		const _returnValueYb6TLJ3 = await _HelpEFD7gtu.argumentDescription(_argumentqAwTg1B)
		const _argChoicesWJGKlL = {
		
	}
		const _defaultValueHzfyiin = undefined;
		const _defaultValueDescriptionMsvdXx = false;
		const _descriptioniJv0oUs = 7.24068914383286;
		const _argumentsQmXbDk = {
			"argChoices": _argChoicesWJGKlL,
		"defaultValue": _defaultValueHzfyiin,
		"defaultValueDescription": _defaultValueDescriptionMsvdXx,
		"description": _descriptioniJv0oUs
	}
		const _returnValueyBriDyU = await _HelpEFD7gtu.argumentDescription(_argumentsQmXbDk)
		const _arrayValuey9r4Szw = null;
		const _arrayValueLVzRTUw = "yfwQNUDEbNoDymY1Fuw6doxqoirNlxVpTAwQyp";
		const _flagsMkTXBdN = [_arrayValuey9r4Szw, _arrayValueLVzRTUw]
		const _descriptionp8tLBuc = "jU4fFN1uM3t4GNhvRQJ9E2zm7pL3V9B42Ppc2UlcYyztQkuHqr2qiVQOf1VTvICGoobdxXIrA7vjWRxLEbpkvml8Bv";
		const _cmdaJBgIhg = new Option(_flagsMkTXBdN, _descriptionp8tLBuc)
		const _valuesFC1FRR1 = "tltH44d6WGoh74P5vBGnVBBTM7tQAZZq7RL0RjbEA5WDjELaSd5dp3jjse9COaGmLPXChgezPGNMRbc9AIny6IHD";
		const _returnValuevfIY9dk = await _cmdaJBgIhg.choices(_valuesFC1FRR1)
		const _nameWk7c72T = undefined;
		const _returnValueAFUTA7i = await _cmdaJBgIhg.env(_nameWk7c72T)
		const _returnValueMfdT00k = await _HelpEFD7gtu.subcommandDescription(_cmdaJBgIhg)
	});

	it('test for Help', async () => {
		const _HelpZE1sZOP = new Help()
		const _flagsKzuDZ9R = "gt8bxZnW9fhvOC0vrlv1h87uhn4XcB";
		const _descriptioninLNotY = "ivwJ5X5LGjFhY8pIe2lD2zQOss8fROvJfAnEsAO2BgkFXIRk32NqSSqPjnUteSJmgyfhXv9Y3Fl2";
		const _optionkq3Pspb = new Option(_flagsKzuDZ9R, _descriptioninLNotY)
		const _returnValueeCeEICR = await _optionkq3Pspb.name()
		const _returnValuePmajdrE = await _optionkq3Pspb.attributeName()
		const _valueXZ4p83c = "xOi4VeJOlxeqVNBCEae8njR3jlPXYaOZYEGzbTW3XJFLJyEospieezvTiN8wbX4A8b7i";
		const _returnValuePDiCrJv = undefined;
		const _concateua9lku = () => { return _returnValuePDiCrJv };
		const _previousddHVZS = {
			"concat": _concateua9lku
	}
		const _returnValue5Dzv6t = await _optionkq3Pspb._concatValue(_valueXZ4p83c, _previousddHVZS)
		const _hideMRGhPFG = true;
		const _returnValueKnxI8IA = await _optionkq3Pspb.hideHelp(_hideMRGhPFG)
		const _returnValuem9uXSy = {
		
	}
		const _includesJLt4uQI = () => { return _returnValuem9uXSy };
		const _returnValuelKHCmaX = false;
		const _joinWUv4qrr = () => { return _returnValuelKHCmaX };
		const _valuesWOoHlex = {
			"includes": _includesJLt4uQI,
		"join": _joinWUv4qrr
	}
		const _returnValuej07xntQ = await _optionkq3Pspb.choices(_valuesWOoHlex)
		const _returnValueoLxPVWi = await _HelpZE1sZOP.optionTerm(_optionkq3Pspb)
		const _arrayValueLQsRVgn = undefined;
		const _arrayValueRlLPi77 = undefined;
		const _arrayValueHzXVwq4 = null;
		const _arrayValueKvzqUFT = true;
		const _optionRiFYNz = [_arrayValueLQsRVgn, _arrayValueRlLPi77, _arrayValueHzXVwq4, _arrayValueKvzqUFT]
		const _returnValueAZEQunS = await _HelpZE1sZOP.optionTerm(_optionRiFYNz)
		const _arrayValueh2xJGkc = -9.520801359535975;
		const _arrayValuep4SaxIK = false;
		const _arrayValueUGQsmRG = undefined;
		const _cmdFOFQ6em = [_arrayValueh2xJGkc, _arrayValuep4SaxIK, _arrayValueUGQsmRG]
		const _returnValueG6sUmkA = await _HelpZE1sZOP.visibleArguments(_cmdFOFQ6em)
		const _returnValueZpjmv9v = {
		
	}
		const _cmdP7Rsa9 = () => { return _returnValueZpjmv9v };
		const _returnValueQec4mE = await _HelpZE1sZOP.visibleCommands(_cmdP7Rsa9)
		const _returnValuerhWAP5 = undefined;
		const _flagsaKKXyKS = () => { return _returnValuerhWAP5 };
		const _optionjUoCbvf = {
			"flags": _flagsaKKXyKS
	}
		const _returnValuePcs648S = await _HelpZE1sZOP.optionTerm(_optionjUoCbvf)
	});

	it('test for Help', async () => {
		const _HelpbdLmZli = new Help()
		const _namevxY8pXL = undefined;
		const _cmdFs9KisX = new Command(_namevxY8pXL)
		const _keybi3YYnY = null;
		const _valueotf6LvE = "AdREvWa9R8AlCjmbe7yVIhUI8vq127neCSTA8MLER";
		const _sourceWeg1h6y = undefined;
		const _returnValueBoj5jHc = await _cmdFs9KisX.setOptionValueWithSource(_keybi3YYnY, _valueotf6LvE, _sourceWeg1h6y)
		const _passThroughqxE2d21 = true;
		const _returnValueQxetJA2 = await _cmdFs9KisX.passThroughOptions(_passThroughqxE2d21)
		const _storeAsPropertiesFoHiqJJ = true;
		const _returnValueaFWJTeT = await _cmdFs9KisX.storeOptionsAsProperties(_storeAsPropertiesFoHiqJJ)
		const _returnValuep5AijzV = await _HelpbdLmZli.subcommandTerm(_cmdFs9KisX)
		const _cmdrvcCsMd = null;
		const _helpergf6zMv = []
		const _returnValueTesMSbw = await _HelpbdLmZli.longestArgumentTermLength(_cmdrvcCsMd, _helpergf6zMv)
	});

	it('test for Help', async () => {
		const _HelpoftIFjG = new Help()
		const _arrayValuecwtZ1tA = -4.364703181897936;
		const _arrayValueAg4cCUg = -1.069382408450064;
		const _arrayValueqZPotW9 = -4.348437557306498;
		const _argument8v6Vwg = [_arrayValuecwtZ1tA, _arrayValueAg4cCUg, _arrayValueqZPotW9]
		const _returnValueJ05Mto5 = await _HelpoftIFjG.argumentDescription(_argument8v6Vwg)
		const __argsDescriptionNuhpuf = {
		
	}
		const __argsNuq3K7z = {
		
	}
		const _cmdht85JaF = {
			"_argsDescription": __argsDescriptionNuhpuf,
		"_args": __argsNuq3K7z
	}
		const _returnValueUgdnwJh = await _HelpoftIFjG.visibleArguments(_cmdht85JaF)
		const _cmduX3ue8C = {
		
	}
		const _helperbXCQ8a3 = "rr2pSVg2LfnwG6Aurz2DFRLOrvkoa3EWq6zsOc93yA2LBeqob";
		const _returnValueQEakniG = await _HelpoftIFjG.longestOptionTermLength(_cmduX3ue8C, _helperbXCQ8a3)
		const _arrayValueEPGAojm = 5.474976940538845;
		const _arrayValuevZ46FLw = null;
		const _arrayValuelC7yUQP = [_arrayValuevZ46FLw]
		const _arrayValueYpzSORU = -9.844088692127265;
		const _flagsW75JvmA = [_arrayValueEPGAojm, _arrayValuelC7yUQP, _arrayValueYpzSORU]
		const _descriptionsgB4itE = {
		
	}
		const _optionfsqRSEX = new Option(_flagsW75JvmA, _descriptionsgB4itE)
		const _returnValuelhdMVq7 = null;
		const _arrayValueBXWmraR = () => { return _returnValuelhdMVq7 };
		const _arrayValueCPUo06f = null;
		const _arrayValueu7LWBrH = "48KOHzJBmIHSkJVTHTjp458hbLS5aK38CQfJYPcj4NIPSJxYSiycUlACkMhmhde3FYaeoCsNj";
		const _arrayValuegOyBa5I = [_arrayValueu7LWBrH]
		const _returnValueRJFWnpf = "21g9l6Agngd90sxu0do3ypSpduHrTs5P4pCoE8L8gJFOIeH46fSFTLGiOY2ziHclFN";
		const _returnValueypBAUXH = () => { return _returnValueRJFWnpf };
		const _arrayValueotzn2XG = () => { return _returnValueypBAUXH };
		const _value0EaNIU = [_arrayValueBXWmraR, _arrayValueCPUo06f, _arrayValuegOyBa5I, _arrayValueotzn2XG]
		const _arrayValuegXcAqK = {
		
	}
		const _arrayValueO9ATHBj = true;
		const _arrayValueeo7yETB = {
		
	}
		const _previousbyCWjq6 = [_arrayValuegXcAqK, _arrayValueO9ATHBj, _arrayValueeo7yETB]
		const _returnValueUOiS3Ja = await _optionfsqRSEX._concatValue(_value0EaNIU, _previousbyCWjq6)
		const _returnValueG044hPB = await _optionfsqRSEX.name()
		const _hideVKBEKgL = true;
		const _returnValuev2MKrAL = await _optionfsqRSEX.hideHelp(_hideVKBEKgL)
		const _valueSwRrOkc = undefined;
		const _descriptionrFS8u7t = undefined;
		const _returnValuer1PM7cl = await _optionfsqRSEX.default(_valueSwRrOkc, _descriptionrFS8u7t)
		const _returnValuexhhgSce = await _HelpoftIFjG.optionDescription(_optionfsqRSEX)
	});

	it('test for Help', async () => {
		const _HelpOm5bfqH = new Help()
		const _returnValueSWZLTGB = true;
		const _descriptiony6Tg5UB = () => { return _returnValueSWZLTGB };
		const _cmdGOo74Q1 = {
			"description": _descriptiony6Tg5UB
	}
		const _returnValueaL99T59 = await _HelpOm5bfqH.commandDescription(_cmdGOo74Q1)
		const _returnValueYkfCUIO = true;
		const _nametT9m1f0 = () => { return _returnValueYkfCUIO };
		const _cmdYy1tVdi = new Command(_nametT9m1f0)
		const _returnValueOfXjdjn = await _cmdYy1tVdi._checkNumberOfArguments()
		const _flagssSuvWM2 = true;
		const _arrayValueOdJNPcx = undefined;
		const _returnValueQlYTTMG = 3.3655467403893944;
		const _arrayValueyRjfyha = () => { return _returnValueQlYTTMG };
		const _descriptionk9eHC7b = [_arrayValueOdJNPcx, _arrayValueyRjfyha]
		const _returnValueeKsYyzs = await _cmdYy1tVdi.helpOption(_flagssSuvWM2, _descriptionk9eHC7b)
		const _allowUnknownU0ZWqW6 = false;
		const _returnValueb4cZsw6 = await _cmdYy1tVdi.allowUnknownOption(_allowUnknownU0ZWqW6)
		const _returnValueK42wbPL = await _HelpOm5bfqH.visibleCommands(_cmdYy1tVdi)
	});

	it('test for Help', async () => {
		const _HelpK6QsHq6 = new Help()
		const _arrayValueoyrwoDC = "PKcHaT1R0zENOIo7YIChq7tK16ynfWecgJx";
		const _arrayValueSTXt47H = 0.33010381993086924;
		const _arrayValueZAg15X2 = undefined;
		const _cmdynJyx1 = [_arrayValueoyrwoDC, _arrayValueSTXt47H, _arrayValueZAg15X2]
		const _helperphsHLuU = new Help()
		const _argChoicesjBZkRwT = {
		
	}
		const _negateiaA9HqM = null;
		const _defaultValueqanGDne = null;
		const _defaultValueDescriptionTqwU7NI = true;
		const _envVarHZwwcQM = undefined;
		const _descriptionya3waIu = undefined;
		const _optionG9R22if = {
			"argChoices": _argChoicesjBZkRwT,
		"negate": _negateiaA9HqM,
		"defaultValue": _defaultValueqanGDne,
		"defaultValueDescription": _defaultValueDescriptionTqwU7NI,
		"envVar": _envVarHZwwcQM,
		"description": _descriptionya3waIu
	}
		const _returnValuesLa3x6A = await _helperphsHLuU.optionDescription(_optionG9R22if)
		const _returnValuekp5In53 = await _HelpK6QsHq6.longestSubcommandTermLength(_cmdynJyx1, _helperphsHLuU)
		const _arrayValueVojUm2y = {
		
	}
		const _arrayValueVEy94B1 = undefined;
		const _cmdHMnGOha = [_arrayValueVojUm2y, _arrayValueVEy94B1]
		const _returnValuekjxHefn = await _HelpK6QsHq6.commandUsage(_cmdHMnGOha)
		const _arrayValueDBJyVjL = "Ln3njCDND4hctvp";
		const _arrayValueEiBx04 = -7.70427397176104;
		const _arrayValuevh4OOOw = false;
		const _cmdZcrsh7u = [_arrayValueDBJyVjL, _arrayValueEiBx04, _arrayValuevh4OOOw]
		const _returnValuevqmpBcW = await _HelpK6QsHq6.visibleArguments(_cmdZcrsh7u)
		const _arrayValueLSIYkP = "fUr18vftDQEQCF0DSTc6DUEVCAGXirMZmislfdx";
		const _arrayValueZdfHT4F = false;
		const _arrayValueQAAI3Qg = "wOYNariKLGwuil57ozAOPnkm5mNFnO9pLgZDEqaRA4TJfLrDbgY2dCh15FVuD4UlXtKpz6x2oCPubw1iMgPW4mutJbN";
		const _cmdGg836sh = [_arrayValueLSIYkP, _arrayValueZdfHT4F, _arrayValueQAAI3Qg]
		const _helperQJ2xBdq = "A6wu0OaWTptadEGi8dTRx0yVYrqbJFKilPDm09dGwkHGLw8S3iD7fr4IJMCgTapTfgrY";
		const _returnValueJSBfYt = await _HelpK6QsHq6.longestOptionTermLength(_cmdGg836sh, _helperQJ2xBdq)
	});

	it('test for Help', async () => {
		const _HelpJo7bU58 = new Help()
		const _returnValueDdGXIld = 9.595405458658526;
		const _optionaYLVMv = () => { return _returnValueDdGXIld };
		const _returnValueMRtIxJX = await _HelpJo7bU58.optionTerm(_optionaYLVMv)
		const _strToW28TW = "dpDABri6cpW2UR3GvDgorQg3OVZbt6bd6wC4yG44WtgYZxu2dVV2dgjmqqjsIGgzn7anpaJ6rENjA4hUOuqi";
		const _widthlabDHDD = 6.290402686326793;
		const _indentgz7FWRu = -0.679603562151124;
		const _minColumnWidthspajiq2 = -1.6067359755730664;
		const _returnValueRR1yjij = await _HelpJo7bU58.wrap(_strToW28TW, _widthlabDHDD, _indentgz7FWRu, _minColumnWidthspajiq2)
	});

	it('test for Help', async () => {
		const _HelpKsJPQkb = new Help()
		const _flagsls5nx4e = "L7mrwGbhxY56KdzCKSLsJ518q6RyuFLiIj";
		const _descriptionEi40vzI = undefined;
		const _argumentSlg2F2 = new Option(_flagsls5nx4e, _descriptionEi40vzI)
		const _returnValuehnzesMZ = await _argumentSlg2F2.attributeName()
		const _fnv1tYr8V = undefined;
		const _returnValueP0auWDi = await _argumentSlg2F2.argParser(_fnv1tYr8V)
		const _returnValueP45zCun = await _argumentSlg2F2.attributeName()
		const _nameZ8q03xe = undefined;
		const _returnValuejMLlGb = await _argumentSlg2F2.env(_nameZ8q03xe)
		const _returnValueDmyZp8P = null;
		const _valuesBqtrTX = () => { return _returnValueDmyZp8P };
		const _returnValuebtBbnbh = await _argumentSlg2F2.choices(_valuesBqtrTX)
		const _returnValuejl3zqPq = await _HelpKsJPQkb.argumentTerm(_argumentSlg2F2)
		const _nameGpm7ZoP = "EdoFFDrCKnnv40MUI4oXRQr3GWLTD36TF9Qk8KahtwxBsTF3oB5KJnQ7wMxd7npeuPBAz2fekVC7k5kxLxGNVL";
		const _cmdLHl1UXC = new Command(_nameGpm7ZoP)
		const _configurationsIkmnNr = undefined;
		const _returnValueNJDYvnd = await _cmdLHl1UXC.configureOutput(_configurationsIkmnNr)
		const _returnValueHeKbxWV = await _cmdLHl1UXC._checkForMissingMandatoryOptions()
		const _displaySuggestionyUa5seh = true;
		const _returnValueXOGBCyQ = await _cmdLHl1UXC.showSuggestionAfterError(_displaySuggestionyUa5seh)
		const _namesB5m6g2 = "XhpMLh1YzUMA7U8n5xUlgvv1rfD30kNZeidLHZBSjxqZm2ehxLQAIyHpc21MaUKFai30OUn5U";
		const _returnValueoThpSBt = await _cmdLHl1UXC.arguments(_namesB5m6g2)
		const _returnValueKnLhIn = await _HelpKsJPQkb.visibleArguments(_cmdLHl1UXC)
		const _argumentP5APcJ8 = "OAIIIgLi6UaK2kmYUzWzJdNHDdeiPFl5BrpyjzPFpCfXcFujBTVEOyYAkz6GkcfvPov6kkn6p6Mncl0CG";
		const _returnValueH07QZQq = await _HelpKsJPQkb.argumentDescription(_argumentP5APcJ8)
	});

	it('test for Help', async () => {
		const _HelpsOaYhH5 = new Help()
		const _arrayValueI3N7HrJ = true;
		const _arrayValuevo2xfFk = null;
		const _arrayValuecob5vBd = "HqJHQKwll178j";
		const _cmdHBGIFln = [_arrayValueI3N7HrJ, _arrayValuevo2xfFk, _arrayValuecob5vBd]
		const _helperxgyNWUg = new Help()
		const _nameNcvRvfO = null;
		const _cmdbhswEjj = new Command(_nameNcvRvfO)
		const _combinerUrOop3 = false;
		const _returnValueIaLqcqj = await _cmdbhswEjj.combineFlagAndOptionalValue(_combinerUrOop3)
		const _aliasMFw9R1N = {
		
	}
		const _returnValueYcufNL = await _cmdbhswEjj.alias(_aliasMFw9R1N)
		const _keyR2WV89I = 5.086265205328758;
		const _returnValueeb5ao0d = await _cmdbhswEjj.getOptionValue(_keyR2WV89I)
		const _returnValuedAOMGQ = await _helperxgyNWUg.subcommandTerm(_cmdbhswEjj)
		const _namePfiltCN = "S4Of9CVOW5ZnWPBV8cXIpk2yvMi89kMM2p4UQMe8e6zejRvLTmcjD9bVD5HXEUmSIGdRVYCJxpAtL2Jtt6";
		const _cmdVut36Af = new Command(_namePfiltCN)
		const _strpeU0FIh = undefined;
		const _returnValueCooPUZI = await _cmdVut36Af.usage(_strpeU0FIh)
		const _returnValueYRGDeCf = await _cmdVut36Af._processArguments()
		const _returnValuea78XlIS = await _helperxgyNWUg.visibleArguments(_cmdVut36Af)
		const _returnValueYaUM0m6 = -4.89523287299005;
		const _descriptionSTvCRSf = () => { return _returnValueYaUM0m6 };
		const _cmdzSIrP0Y = {
			"description": _descriptionSTvCRSf
	}
		const _returnValueIjqsvrZ = await _helperxgyNWUg.subcommandDescription(_cmdzSIrP0Y)
		const _cmdBHTevYg = {
		
	}
		const _helperyu6lSSm = "UYjwvbvWAgv1rJeydbGc4WRLL14C2uV26JsSgWmuyryeSwb";
		const _returnValueeAY7yTS = await _helperxgyNWUg.longestOptionTermLength(_cmdBHTevYg, _helperyu6lSSm)
		const _returnValueafO3IyG = await _HelpsOaYhH5.longestSubcommandTermLength(_cmdHBGIFln, _helperxgyNWUg)
		const _argChoicesa52H2mK = {
		
	}
		const _negatehNOYQ3V = {
		
	}
		const _defaultValueM67qYgZ = undefined;
		const _arrayValueYRSgpb0 = false;
		const _arrayValueizovDDl = undefined;
		const _arrayValueSjvDvVC = undefined;
		const _arrayValueMNPQ2ae = [_arrayValueYRSgpb0, _arrayValueizovDDl, _arrayValueSjvDvVC]
		const _arrayValueuCvB6ib = "pJNjYkIqZvktIdPJvuK8S6k2ElwYzneK49FKhHJfRHvGG9v9GsiJmuJ";
		const _arrayValueoVkeo8R = 2.2844097161643067;
		const _arrayValuegmxftHy = -3.7509236847378205;
		const _arrayValueLKsveQX = true;
		const _arrayValueVGlnZSK = [_arrayValuegmxftHy, _arrayValueLKsveQX]
		const _arrayValuelfJi9Er = [_arrayValueMNPQ2ae, _arrayValueuCvB6ib, _arrayValueoVkeo8R, _arrayValueVGlnZSK]
		const _arrayValueiqYso7g = 3.0110236552305345;
		const _defaultValueDescriptionjMy28UM = [_arrayValuelfJi9Er, _arrayValueiqYso7g]
		const _envVarstF9O9q = undefined;
		const _descriptionjOBKchi = null;
		const _optionNcw9zh7 = {
			"argChoices": _argChoicesa52H2mK,
		"negate": _negatehNOYQ3V,
		"defaultValue": _defaultValueM67qYgZ,
		"defaultValueDescription": _defaultValueDescriptionjMy28UM,
		"envVar": _envVarstF9O9q,
		"description": _descriptionjOBKchi
	}
		const _returnValueTb5As9O = await _HelpsOaYhH5.optionDescription(_optionNcw9zh7)
		const _cmdoKC8B82 = undefined;
		const _helperXPz3abq = new Help()
		const _returnValueBKlm4HM = undefined;
		const _returnValueWtIxmpi = () => { return _returnValueBKlm4HM };
		const _descriptionawy5pk8 = () => { return _returnValueWtIxmpi };
		const _cmdjy4qrFq = {
			"description": _descriptionawy5pk8
	}
		const _returnValuevQxb3is = await _helperXPz3abq.subcommandDescription(_cmdjy4qrFq)
		const _returnValueXLGEvvO = -8.462306427253022;
		const _description38yuGv = () => { return _returnValueXLGEvvO };
		const _cmdSjaGlL9 = {
			"description": _description38yuGv
	}
		const _returnValueAfwSHaE = await _helperXPz3abq.subcommandDescription(_cmdSjaGlL9)
		const _returnValueqcFkHT = undefined;
		const _slicepteigbu = () => { return _returnValueqcFkHT };
		const _namejymYQQa = {
			"slice": _slicepteigbu
	}
		const _descriptionhNcEquH = null;
		const _cmdD3ONgFe = new Argument(_namejymYQQa, _descriptionhNcEquH)
		const _arrayValueQpdyLBv = null;
		const _arrayValueSXz6HI9 = 4.369800487057287;
		const _arrayValueQSqO8GC = -9.432629871552471;
		const _arrayValueYmOuN3U = false;
		const _arrayValuenf41As6 = "NKWRPd6SicVIriOLURw1Dk0OJkSav9kKq";
		const _arrayValuerCWI8va = {
		
	}
		const _arrayValueD2MaNL5 = [_arrayValueYmOuN3U, _arrayValuenf41As6, _arrayValuerCWI8va]
		const _arrayValueonPzyh4 = [_arrayValueQpdyLBv, _arrayValueSXz6HI9, _arrayValueQSqO8GC, _arrayValueD2MaNL5]
		const _arrayValuew86dOTe = "sZ6OLqeyynsuNSY4XXIT7dKwGiQ3Y8DhNrvxJlMmTcZkGGIZ7hxKO9Tp1tmh6N6mulipRf4TsGhrd";
		const _valuesct5jAb2 = [_arrayValueonPzyh4, _arrayValuew86dOTe]
		const _returnValueNAgU9T = await _cmdD3ONgFe.choices(_valuesct5jAb2)
		const _arrayValueVfZBJPN = undefined;
		const _arrayValuePV5Vgb = undefined;
		const _arrayValueyvkPi6 = 2.0350678480621767;
		const _arrayValue0QGb2Q = [_arrayValueVfZBJPN, _arrayValuePV5Vgb, _arrayValueyvkPi6]
		const _arrayValuevEXVxDq = true;
		const _arrayValueGlGaku = undefined;
		const _valueFwAuR7S = [_arrayValue0QGb2Q, _arrayValuevEXVxDq, _arrayValueGlGaku]
		const _previoushVAgyxE = {
		
	}
		const _returnValue3Dc6WX = await _cmdD3ONgFe._concatValue(_valueFwAuR7S, _previoushVAgyxE)
		const _valuelNixhFM = {
		
	}
		const _arrayValueYe55k7G = undefined;
		const _arrayValueblLifRS = "lYAtubN2D37fUTbTzHjX1QTEGDBD7AYaHqcvmj4F5yTlHcN7FpvgygxyeYxkdDXkdgL472";
		const _arrayValuenjCR0e0 = false;
		const _descriptionbB8xpH1 = [_arrayValueYe55k7G, _arrayValueblLifRS, _arrayValuenjCR0e0]
		const _returnValueEHJeDes = await _cmdD3ONgFe.default(_valuelNixhFM, _descriptionbB8xpH1)
		const _returnValueZfiqdB = await _cmdD3ONgFe.argRequired()
		const _valueQKyhjUd = {
		
	}
		const _descriptionmDGg80V = undefined;
		const _returnValueBNwuDgW = await _cmdD3ONgFe.default(_valueQKyhjUd, _descriptionmDGg80V)
		const _returnValueBAgL11G = await _helperXPz3abq.subcommandDescription(_cmdD3ONgFe)
		const _returnValuegbxPy8u = {
		
	}
		const _descriptionrpnmRz8 = () => { return _returnValuegbxPy8u };
		const _cmdtjWI7FP = {
			"description": _descriptionrpnmRz8
	}
		const _returnValueWfjJc45 = await _helperXPz3abq.commandDescription(_cmdtjWI7FP)
		const _returnValuef0LM8eF = await _HelpsOaYhH5.padWidth(_cmdoKC8B82, _helperXPz3abq)
		const _nameJA0QfR7 = -7.166896423163269;
		const _cmdR7iEKn = new Command(_nameJA0QfR7)
		const _arrayValuegJMjKa = "UqCAFzGy0rBNjDfStzxNwEWadFnf71Enj9hyOvVIA7kg8pk0rdAcZAIVH38bRmdenF3aLdveBp6ZoEm16";
		const _arrayValuefsvJaCm = undefined;
		const _contextOptionsQ2DMAmH = [_arrayValuegJMjKa, _arrayValuefsvJaCm]
		const _returnValuebd30wov = await _cmdR7iEKn.help(_contextOptionsQ2DMAmH)
		const _returnValueFwu7OUe = await _HelpsOaYhH5.subcommandTerm(_cmdR7iEKn)
	});

	it('test for Help', async () => {
		const _HelpdRFTnE = new Help()
		const _cmdZLLQ4EV = null;
		const _helperLjkJrhA = new Help()
		const _strZzn5UyV = "1l2K4ISDemPz24RT2CtrXYYVFlxNN91A9DAR7CWcCjgK";
		const _widthCrZ9I2F = 1.807461002444894;
		const _indentGveYJS = 0.32086793591053464;
		const _minColumnWidthsviUqVd = 8.679342632764083;
		const _returnValuedgqVKzd = await _helperLjkJrhA.wrap(_strZzn5UyV, _widthCrZ9I2F, _indentGveYJS, _minColumnWidthsviUqVd)
		const _cmdbwrZ0e = null;
		const _returnValueHbMhu3y = await _helperLjkJrhA.visibleCommands(_cmdbwrZ0e)
		const _returnValuet6G7s7P = await _HelpdRFTnE.formatHelp(_cmdZLLQ4EV, _helperLjkJrhA)
	});

	it('test for Help', async () => {
		const _HelpIfvDKbF = new Help()
		const _arrayValuexmWWLPm = null;
		const _returnValuejCvUpX = [_arrayValuexmWWLPm]
		const _sliceX063qRQ = () => { return _returnValuejCvUpX };
		const _namevg0koZ1 = {
			"slice": _sliceX063qRQ
	}
		const _descriptionwZ25zGZ = "Lkbj1CNBmkplYTPjEab2FzNU1O";
		const _argumentWItTwOm = new Argument(_namevg0koZ1, _descriptionwZ25zGZ)
		const _valueFkStPic = 2.8554504958528213;
		const _arrayValueIUJnz8V = "5ORhfC4U18fKPdCX";
		const _arrayValuexE9GfJV = "w4uKU21moA26KhMmnfUjmqlvvrMaVvlXCyUONhtwibq3q27EXeSeB55lJjOvNECPEcZ3RfzHtUhvD8HRlFY6x";
		const _arrayValuehMhWPkg = []
		const _arrayValuecu0yefh = [_arrayValueIUJnz8V, _arrayValuexE9GfJV, _arrayValuehMhWPkg]
		const _arrayValueuMXRu7S = []
		const _arrayValuePTwPF4V = undefined;
		const _previousJCpb7Hg = [_arrayValuecu0yefh, _arrayValueuMXRu7S, _arrayValuePTwPF4V]
		const _returnValuehCPTASH = await _argumentWItTwOm._concatValue(_valueFkStPic, _previousJCpb7Hg)
		const _returnValueRYvHHj = await _argumentWItTwOm.argRequired()
		const _arrayValueykTSU7Z = undefined;
		const _valuesp2gp25 = [_arrayValueykTSU7Z]
		const _returnValuew2qmaX0 = await _argumentWItTwOm.choices(_valuesp2gp25)
		const _returnValueBOUq5Ln = await _HelpIfvDKbF.argumentDescription(_argumentWItTwOm)
		const _cmdGelI5G8 = false;
		const _helperDT9g8g2 = "leNvfYkFEEztheial";
		const _returnValueordU2W = await _HelpIfvDKbF.longestArgumentTermLength(_cmdGelI5G8, _helperDT9g8g2)
		const _nameI33Hup7 = null;
		const _cmdq3UrEaI = new Command(_nameI33Hup7)
		const _exitCodeB0eCUN5 = false;
		const _codeA4fJfge = null;
		const _arrayValueGORAP5W = undefined;
		const _arrayValuexhXfq8i = [_arrayValueGORAP5W]
		const _messagepR0g7NZ = [_arrayValuexhXfq8i]
		const _returnValuepMc7zLF = await _cmdq3UrEaI._exit(_exitCodeB0eCUN5, _codeA4fJfge, _messagepR0g7NZ)
		const _str78hzG2 = undefined;
		const _returnValueMz1irj = await _cmdq3UrEaI.name(_str78hzG2)
		const _returnValueCTZJfc3 = await _cmdq3UrEaI._checkNumberOfArguments()
		const _returnValueKvu64hI = await _HelpIfvDKbF.commandDescription(_cmdq3UrEaI)
		const _arrayValuehhllBDl = undefined;
		const _namexDinFWK = [_arrayValuehhllBDl]
		const _argumentJbfqgwW = new Command(_namexDinFWK)
		const _allowUnknownDh4XtoO = true;
		const _returnValueqWF6HP = await _argumentJbfqgwW.allowUnknownOption(_allowUnknownDh4XtoO)
		const _returnValueIvvRsZS = undefined;
		const _contextOptionsaAOJrGC = () => { return _returnValueIvvRsZS };
		const _returnValueqOyu4mA = await _argumentJbfqgwW.outputHelp(_contextOptionsaAOJrGC)
		const _returnValueM6IZr77 = await _HelpIfvDKbF.argumentTerm(_argumentJbfqgwW)
		const _optionRFRxzA = []
		const _returnValueXY61e2j = await _HelpIfvDKbF.optionTerm(_optionRFRxzA)
	});

	it('test for Help', async () => {
		const _HelpcxpYqYL = new Help()
		const _arrayValueEIovEse = 2.378216913745476;
		const _arrayValueWHEoJCw = [_arrayValueEIovEse]
		const _arrayValuejKdu3RN = -1.5081997917728813;
		const _returnValueWIOlLHY = [_arrayValueWHEoJCw, _arrayValuejKdu3RN]
		const _nameEdvpPKy = () => { return _returnValueWIOlLHY };
		const _descriptionT6U8uN8 = {
		
	}
		const _argumentmuZgYG = new Argument(_nameEdvpPKy, _descriptionT6U8uN8)
		const _valuePluH1rl = undefined;
		const _arrayValuelCzxN5 = {
		
	}
		const _descriptionOMRbzVU = [_arrayValuelCzxN5]
		const _returnValueKmcKnnf = await _argumentmuZgYG.default(_valuePluH1rl, _descriptionOMRbzVU)
		const _arrayValuebWAiB2E = null;
		const _arrayValueH3xs4f9 = -3.681704354824972;
		const _arrayValuevkFer6 = undefined;
		const _returnValueTJlJYS = [_arrayValuebWAiB2E, _arrayValueH3xs4f9, _arrayValuevkFer6]
		const _valueCba3Ec = () => { return _returnValueTJlJYS };
		const _descriptiont0Dt2A9 = {
		
	}
		const _returnValuevCp1TcD = await _argumentmuZgYG.default(_valueCba3Ec, _descriptiont0Dt2A9)
		const _returnValuerXSTgJM = await _argumentmuZgYG.argRequired()
		const _returnValuevj275ER = await _HelpcxpYqYL.argumentDescription(_argumentmuZgYG)
		const _flagsB8FHa5C = 7.976319644281634;
		const _descriptionSnJD9qd = true;
		const _option2YmpUK = new Option(_flagsB8FHa5C, _descriptionSnJD9qd)
		const _returnValueK5kFSD = await _option2YmpUK.attributeName()
		const _returnValueh6FZNo7 = await _option2YmpUK.attributeName()
		const _argQMEAavF = {
		
	}
		const _returnValuesxY6aLy = await _option2YmpUK.is(_argQMEAavF)
		const _returnValueowuJld5 = {
		
	}
		const _includesz8U3WC = () => { return _returnValueowuJld5 };
		const _returnValueUJqVolZ = true;
		const _joinLv8N6aR = () => { return _returnValueUJqVolZ };
		const _valuesyzBiVm9 = {
			"includes": _includesz8U3WC,
		"join": _joinLv8N6aR
	}
		const _returnValueHVwPVbM = await _option2YmpUK.choices(_valuesyzBiVm9)
		const _returnValueZhKol5O = await _HelpcxpYqYL.optionTerm(_option2YmpUK)
		const _optionFi6prEL = "KhXuY86JzkNoMURdR27O0uoJuT0Mz2VWM6TIcfLTQXanADF4irmGrUv94NMRtIYuX";
		const _returnValueaV0pMj = await _HelpcxpYqYL.optionDescription(_optionFi6prEL)
		const _returnValueLuu4550 = false;
		const _nameCnNUwT3 = () => { return _returnValueLuu4550 };
		const _argumentDmb60uD = {
			"name": _nameCnNUwT3
	}
		const _returnValuefvQd4H = await _HelpcxpYqYL.argumentTerm(_argumentDmb60uD)
	});

	it('test for Help', async () => {
		const _HelptZyzc5K = new Help()
		const _arrayValueUUwe23D = false;
		const _arrayValueNgjXlNd = undefined;
		const _arrayValuePBtwESB = "fXpeoYPEuVxwstk57tSWurxodmwZIEwORv";
		const _nameHRB8r7T = [_arrayValueUUwe23D, _arrayValueNgjXlNd, _arrayValuePBtwESB]
		const _cmdEjlovOh = new Command(_nameHRB8r7T)
		const _nameqDbR2js = -7.239226424108997;
		const _returnValueG3a7t9 = await _cmdEjlovOh.createCommand(_nameqDbR2js)
		const _returnValueyEGgvoi = await _HelptZyzc5K.visibleOptions(_cmdEjlovOh)
	});

	it('test for Help', async () => {
		const _HelpX9KDbLv = new Help()
		const _nameF4pFhiO = -2.193313825436423;
		const _cmdblSzHN2 = new Command(_nameF4pFhiO)
		const _promisezISkJO3 = {
		
	}
		const _eventau29rVe = "XdAF4u9RNAlP1tFqeH3CCNhH6LVMaoF4SbFtIrvBtJpixpdA2QbwBKfksP54lMPMNsy";
		const _returnValueCIlkK3e = await _cmdblSzHN2._chainOrCallHooks(_promisezISkJO3, _eventau29rVe)
		const _nameGAknFKH = true;
		const _returnValueaFabTb7 = await _cmdblSzHN2._findCommand(_nameGAknFKH)
		const _fnZ4W7P72 = {
		
	}
		const _returnValueGNErdNJ = await _cmdblSzHN2.exitOverride(_fnZ4W7P72)
		const _positionalcGbfRzr = true;
		const _returnValueaJAbWFd = await _cmdblSzHN2.enablePositionalOptions(_positionalcGbfRzr)
		const _aliasUirO5M2 = {
		
	}
		const _returnValuelDkYRBV = await _cmdblSzHN2.alias(_aliasUirO5M2)
		const _returnValueek2fiL9 = await _HelpX9KDbLv.commandUsage(_cmdblSzHN2)
		const _arrayValueX8wrJy = true;
		const _returnValueRF5JZxk = {
		
	}
		const _arrayValuegwzZbjP = () => { return _returnValueRF5JZxk };
		const _arrayValueHHkPv3f = [_arrayValueX8wrJy, _arrayValuegwzZbjP]
		const _arrayValuecT66Acu = 0.13534704746405168;
		const _argumentvzNFryn = [_arrayValueHHkPv3f, _arrayValuecT66Acu]
		const _returnValue1tourd = await _HelpX9KDbLv.argumentDescription(_argumentvzNFryn)
		const _cmduKFGBrZ = {
		
	}
		const _arrayValueQC7XivW = null;
		const _arrayValueHFTjaHh = "XcrIZlKLfv0MBiVbqQTN2EKnDzWbUDjaMgOlsV8HC2R7YU9GRfENWByL8qqfjiTNq3On3tiJUalXra8Da6o7cvePm";
		const _helperKuiZMhT = [_arrayValueQC7XivW, _arrayValueHFTjaHh]
		const _returnValueLIGoNG6 = await _HelpX9KDbLv.formatHelp(_cmduKFGBrZ, _helperKuiZMhT)
		const _cmdXdPK9lf = "Xx917jONaheL3epjRTwkyIr9v6RmpLMamQI2dbCoTj5wC4KRjVUTwIKQGZVMx0W89zCntn9hiEV76dk";
		const _returnValuegpjPXdP = await _HelpX9KDbLv.subcommandTerm(_cmdXdPK9lf)
	});
})