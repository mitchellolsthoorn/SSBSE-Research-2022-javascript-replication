export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpXSWF5dL = new Help()
		const _arrayValueTIMtR5e = null;
		const _arrayValueqaO9i7L = {
		
	}
		const _arrayValuejeLQReC = false;
		const _nameCEDzIE = [_arrayValueTIMtR5e, _arrayValueqaO9i7L, _arrayValuejeLQReC]
		const _argumentg8OLalb = new Command(_nameCEDzIE)
		const _allowExcesszyo2Ryx = true;
		const _returnValueIEmuf9i = await _argumentg8OLalb.allowExcessArguments(_allowExcesszyo2Ryx)
		const _arrayValueSDntZOj = false;
		const _arrayValueBVAqYQZ = 2.8260986611602874;
		const _arrayValuetbbEMk7 = undefined;
		const _argvHh1EGSC = [_arrayValueSDntZOj, _arrayValueBVAqYQZ, _arrayValuetbbEMk7]
		const _fromTYZjO3b = "Y8jrICvxHFqIXPHUyFImwNgL";
		const _parseOptionsJ53JscI = {
			"from": _fromTYZjO3b
	}
		const _returnValuejc7x51R = await _argumentg8OLalb._prepareUserArgs(_argvHh1EGSC, _parseOptionsJ53JscI)
		const _returnValueVOGAHB7 = false;
		const _exitCodexzIMOLY = () => { return _returnValueVOGAHB7 };
		const _arrayValueecA3CX4 = 1.779158679397483;
		const _codeQKQOO7P = [_arrayValueecA3CX4]
		const _messageRQdqmaN = {
		
	}
		const _returnValueP6QPG9Z = await _argumentg8OLalb._displayError(_exitCodexzIMOLY, _codeQKQOO7P, _messageRQdqmaN)
		const _returnValuemsfyXR = await _argumentg8OLalb._checkNumberOfArguments()
		const _returnValuelIWMbgl = await _HelpXSWF5dL.argumentTerm(_argumentg8OLalb)
		const _arrayValueT39W0k = null;
		const _cmdbKIVhH = [_arrayValueT39W0k]
		const _returnValuev2nNysN = await _HelpXSWF5dL.visibleOptions(_cmdbKIVhH)
		const _cmdzabH6j = {
		
	}
		const _returnValueihOq0AL = undefined;
		const _longestOptionTermLengthipLIxFS = () => { return _returnValueihOq0AL };
		const _arrayValueedBDwt4 = -5.8784116512233355;
		const _arrayValuefmqnaZv = 6.538421600032734;
		const _arrayValueJRvAMXE = -4.393467838877623;
		const _arrayValueILXX5UZ = [_arrayValuefmqnaZv, _arrayValueJRvAMXE]
		const _arrayValuee0xvA2V = 6.029167685529988;
		const _arrayValueePPvuUF = 8.847792469307876;
		const _arrayValueIWgIiV = 0.08289325032937356;
		const _arrayValueBlaxYZ = [_arrayValueePPvuUF, _arrayValueIWgIiV]
		const _returnValueSu0T6vJ = [_arrayValueedBDwt4, _arrayValueILXX5UZ, _arrayValuee0xvA2V, _arrayValueBlaxYZ]
		const _longestSubcommandTermLengthWy9ppn8 = () => { return _returnValueSu0T6vJ };
		const _returnValue2bnejt = -7.551181570539568;
		const _longestArgumentTermLengthVkQYGya = () => { return _returnValue2bnejt };
		const _helpervOem3iy = {
			"longestOptionTermLength": _longestOptionTermLengthipLIxFS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthWy9ppn8,
		"longestArgumentTermLength": _longestArgumentTermLengthVkQYGya
	}
		const _returnValueQU5XnKb = await _HelpXSWF5dL.padWidth(_cmdzabH6j, _helpervOem3iy)
		const _cmdog2ButI = "6PlgFQ8KQSvjNGHpmyMLaBAsIYfezerRWaoqWb3DzWB4Fq3liyOqYswzd6NGQV4lp8W20N4Fsk";
		const _returnValuekqMDvof = await _HelpXSWF5dL.subcommandDescription(_cmdog2ButI)
		const _cmdYPeOuC0 = "wkbTiLlZzlKi8HELSAC8fC";
		const _helpermuADfIl = new Help()
		const _cmdHUXarYN = "kPyRYw23CFPJUaDE5ngOwhwmnFfRdSAjKgrSBmvdbq212EgKVirPMvC5rHSV8G4ikRwBocDhKRN";
		const _returnValueFc79Nn6 = await _helpermuADfIl.subcommandTerm(_cmdHUXarYN)
		const _returnValueI1hQraO = await _HelpXSWF5dL.padWidth(_cmdYPeOuC0, _helpermuADfIl)
	});

	it('test for Help', async () => {
		const _HelpVSoORHV = new Help()
		const _optionTS5VvYZ = "94KbUgY6YF3rgxlnjaurl5rBJ3716vYi9HgJmD1WeOzO3AlKWO8NmVfVWARy2tEU6n31tm1hzMUPGoHa2c";
		const _returnValueElj8scC = await _HelpVSoORHV.optionTerm(_optionTS5VvYZ)
		const _argChoicestNXpqqU = {
		
	}
		const _defaultValue0tQ3fJ = undefined;
		const _defaultValueDescriptionr8P5dtJ = false;
		const _descriptioncTe0c9D = "UL0o2SMFlBNSHYdPTTz6XuVzFOH3NpfwLKBgxHIMXOziiO5R5qoXG4M88Tv2g8cGH79l5DiadWKH";
		const _argument9fq2Ta = {
			"argChoices": _argChoicestNXpqqU,
		"defaultValue": _defaultValue0tQ3fJ,
		"defaultValueDescription": _defaultValueDescriptionr8P5dtJ,
		"description": _descriptioncTe0c9D
	}
		const _returnValueq9Tt9zA = await _HelpVSoORHV.argumentDescription(_argument9fq2Ta)
		const _returnValueNecWQiH = undefined;
		const _nameLQvuT6M = () => { return _returnValueNecWQiH };
		const _arrayValuei97t7lV = {
		
	}
		const _descriptiona62Aak = [_arrayValuei97t7lV]
		const _cmd0Spx2r = new Argument(_nameLQvuT6M, _descriptiona62Aak)
		const _fnS533v2h = {
		
	}
		const _returnValueyycZEmx = await _cmd0Spx2r.argParser(_fnS533v2h)
		const _fnBfEeA59 = undefined;
		const _returnValuerwp7pWW = await _cmd0Spx2r.argParser(_fnBfEeA59)
		const _valueepUJkjA = null;
		const _descriptionWW5EKY = undefined;
		const _returnValueGqJlZoo = await _cmd0Spx2r.default(_valueepUJkjA, _descriptionWW5EKY)
		const _returnValueoLKJyYB = await _HelpVSoORHV.commandDescription(_cmd0Spx2r)
	});

	it('test for Help', async () => {
		const _Helpd3Y6In2 = new Help()
		const _cmdAVc0AMH = []
		const _returnValueaPM4CcK = undefined;
		const _helperHzHKAtQ = () => { return _returnValueaPM4CcK };
		const _returnValuemQWYW7 = await _Helpd3Y6In2.longestArgumentTermLength(_cmdAVc0AMH, _helperHzHKAtQ)
		const _returnValueVV40aYc = null;
		const _returnValueVkShcHE = () => { return _returnValueVV40aYc };
		const _returnValueyiosRKw = () => { return _returnValueVkShcHE };
		const _descriptionPzziTNZ = () => { return _returnValueyiosRKw };
		const _cmdXfEmT21 = {
			"description": _descriptionPzziTNZ
	}
		const _returnValueRrozPwc = await _Helpd3Y6In2.commandDescription(_cmdXfEmT21)
		const _cmdRfMfXqq = "leoJSJXyJUFU2yOGWTco3";
		const _returnValueOw7U6O4 = await _Helpd3Y6In2.visibleOptions(_cmdRfMfXqq)
		const _arrayValueaMKSp5g = null;
		const _arrayValueljyJkL5 = "OuRqvVyXZiGpxmwCd48vgbimzj2TXYOQTjwuaGAeN7DP0IKc";
		const _cmdTFtdDCO = [_arrayValueaMKSp5g, _arrayValueljyJkL5]
		const _returnValueaMw01TL = await _Helpd3Y6In2.visibleOptions(_cmdTFtdDCO)
	});

	it('test for Help', async () => {
		const _Helpd3IYWI = new Help()
		const _returnValueqQV6j1 = undefined;
		const _cmdFGUMvs = () => { return _returnValueqQV6j1 };
		const _returnValueb1O4JyR = await _Helpd3IYWI.subcommandDescription(_cmdFGUMvs)
		const __argsVVgbJz3 = {
		
	}
		const __nameikQ5VMI = 9.161507861182457;
		const __aliasesKsAx0VD = {
		
	}
		const _optionsSstM1WX = {
		
	}
		const _cmdvQfwsmW = {
			"_args": __argsVVgbJz3,
		"_name": __nameikQ5VMI,
		"_aliases": __aliasesKsAx0VD,
		"options": _optionsSstM1WX
	}
		const _returnValueuUUTcIj = await _Helpd3IYWI.subcommandTerm(_cmdvQfwsmW)
	});

	it('test for Help', async () => {
		const _Helpj56AVR8 = new Help()
		const _cmdzBzVqG = "e4mm2RSfI80x6jBxz39mbLrDonrPug6UGkXCSGympYzrrIrgdWz4bBArvKYzoZRJ6kraR6BUqiNO6Fe6D2lzvsOuo9ZhZ";
		const _returnValuemptCtOP = await _Helpj56AVR8.visibleArguments(_cmdzBzVqG)
		const _cmdA76Fca0 = "mkKSQKEWcu1j8soYd8hncvPDrlQJWbtqa4wnwNfNGHUZfl3fBek4BBI43qxqEwID0B";
		const _returnValueb0Y7yAU = await _Helpj56AVR8.commandUsage(_cmdA76Fca0)
		const _strQQWULBW = "RPVyd";
		const _widthqsPvJLw = 6.271878263584718;
		const _indent0LI8Lk = 5.21811396828549;
		const _minColumnWidthEPhYsYs = -5.766065061405245;
		const _returnValueeLXhDx0 = await _Helpj56AVR8.wrap(_strQQWULBW, _widthqsPvJLw, _indent0LI8Lk, _minColumnWidthEPhYsYs)
	});

	it('test for Help', async () => {
		const _HelpzKRlNaK = new Help()
		const _arrayValueklG8LBf = undefined;
		const _arrayValuepW4u94y = "H76CCpc6i3PA9kMXNyD6gXOs54ez98qMIT74P";
		const _returnValueyEnWedE = [_arrayValueklG8LBf, _arrayValuepW4u94y]
		const _cmdkBYfUwe = () => { return _returnValueyEnWedE };
		const _returnValuehTRVYUV = await _HelpzKRlNaK.visibleCommands(_cmdkBYfUwe)
		const __argsDescriptiontGI8Zj = {
		
	}
		const __argsQCH7TG4 = {
		
	}
		const _cmdqHlxMb0 = {
			"_argsDescription": __argsDescriptiontGI8Zj,
		"_args": __argsQCH7TG4
	}
		const _returnValueLCZWQil = await _HelpzKRlNaK.visibleArguments(_cmdqHlxMb0)
		const _cmdeyrcTxi = {
		
	}
		const _helperAaVO4Rz = new Help()
		const _returnValue2cWzPA = 3.145245966064195;
		const _optionGoHSQJ1 = () => { return _returnValue2cWzPA };
		const _returnValue85WUbQ = await _helperAaVO4Rz.optionTerm(_optionGoHSQJ1)
		const _returnValuebZilXIb = -1.1873986771662217;
		const _argumentZNdBMxI = () => { return _returnValuebZilXIb };
		const _returnValueMjnRYic = await _helperAaVO4Rz.argumentDescription(_argumentZNdBMxI)
		const _cmdKWrDMre = "E2NlPcClzIrAMjDMr4mU0IR2yVDjFCbZ11lVTfP5zdRBBnMEyF3qkAOqWD";
		const _returnValuebu7nPS = await _helperAaVO4Rz.subcommandTerm(_cmdKWrDMre)
		const _returnValueZ0lOGn = await _HelpzKRlNaK.padWidth(_cmdeyrcTxi, _helperAaVO4Rz)
		const _cmdpZ3Ee9h = {
		
	}
		const _returnValueE5SyfD8 = true;
		const _helpermQcnMu3 = () => { return _returnValueE5SyfD8 };
		const _returnValueOngyWx = await _HelpzKRlNaK.longestArgumentTermLength(_cmdpZ3Ee9h, _helpermQcnMu3)
		const _flagsWFitDll = false;
		const _optionm8kDJ5I = {
			"flags": _flagsWFitDll
	}
		const _returnValueodd9y7b = await _HelpzKRlNaK.optionTerm(_optionm8kDJ5I)
	});

	it('test for Help', async () => {
		const _Helpbe6bij0 = new Help()
		const _arrayValueF1uaa5u = undefined;
		const _arrayValueYfumNp = undefined;
		const _arrayValueZiR30ZN = true;
		const _cmdcVb6EEL = [_arrayValueF1uaa5u, _arrayValueYfumNp, _arrayValueZiR30ZN]
		const _returnValueTvndRPD = await _Helpbe6bij0.visibleOptions(_cmdcVb6EEL)
		const __argsEeyGmto = {
		
	}
		const __namekuOPjjB = -0.017918216566133793;
		const __aliasesQ3Eap1K = {
		
	}
		const _optionsXx8cNJ0 = {
		
	}
		const _cmdLhR99ju = {
			"_args": __argsEeyGmto,
		"_name": __namekuOPjjB,
		"_aliases": __aliasesQ3Eap1K,
		"options": _optionsXx8cNJ0
	}
		const _returnValueFYHK7GP = await _Helpbe6bij0.subcommandTerm(_cmdLhR99ju)
	});

	it('test for Help', async () => {
		const _HelpT99YtRT = new Help()
		const _argChoicesPruxO31 = {
		
	}
		const _negatev7gUYvI = {
		
	}
		const _defaultValueUILAUVl = undefined;
		const _defaultValueDescriptionX0mMDf0 = 7.132392510118311;
		const _envVar8bTKCx = undefined;
		const _descriptionCcdJczv = null;
		const _optionPN94akY = {
			"argChoices": _argChoicesPruxO31,
		"negate": _negatev7gUYvI,
		"defaultValue": _defaultValueUILAUVl,
		"defaultValueDescription": _defaultValueDescriptionX0mMDf0,
		"envVar": _envVar8bTKCx,
		"description": _descriptionCcdJczv
	}
		const _returnValueoMuNUOz = await _HelpT99YtRT.optionDescription(_optionPN94akY)
		const _nameSKRbMCG = null;
		const _cmds1M4cqy = new Command(_nameSKRbMCG)
		const _nameSP8cMax = null;
		const _returnValueRbmlDDV = await _cmds1M4cqy.createCommand(_nameSP8cMax)
		const _contextOptionsxvS5cfg = "nuo0tNfcoh8Sy5UpeGuOocQY5FUFRLobq3KPbFEeASfVsRWezyDNHRuyWJKwesyFAHXji79vVRToOBnhWh";
		const _returnValuedYWzHSN = await _cmds1M4cqy.help(_contextOptionsxvS5cfg)
		const _returnValueG58lllS = await _HelpT99YtRT.visibleArguments(_cmds1M4cqy)
		const _cmdXDJr5d4 = null;
		const _helperncsyG36 = "c4xOe7czDrCALA28d";
		const _returnValueBbDKRJP = await _HelpT99YtRT.longestSubcommandTermLength(_cmdXDJr5d4, _helperncsyG36)
		const _argumentauXDa6n = "5CqERE6xcITgwBXie";
		const _returnValuee9H8Uvn = await _HelpT99YtRT.argumentTerm(_argumentauXDa6n)
		const _cmdtgqDuJh = "FzaMSGEcmGqF3YjuE6nugcLyMJ5SCswE9TDNISB8QjKgPX6nrbRmQBfzAlBanBv5N1IDmEEBhYovY9AcWtG9";
		const _returnValuecTg4Urd = await _HelpT99YtRT.visibleArguments(_cmdtgqDuJh)
	});

	it('test for Help', async () => {
		const _Helpq0Ddir = new Help()
		const _cmdOVhLwN = null;
		const _helpere9j26rs = "YErjA7tvj9uhm6vPAayYvhoPSuYMiDAiqGd6GDU0bks8lIB";
		const _returnValuelKxiQ6k = await _Helpq0Ddir.longestSubcommandTermLength(_cmdOVhLwN, _helpere9j26rs)
		const _returnValuegiI1tCC = undefined;
		const _cmdipUUv6H = () => { return _returnValuegiI1tCC };
		const _returnValuezn3cC8d = await _Helpq0Ddir.visibleCommands(_cmdipUUv6H)
		const _cmdcn5VXY = "Rvpj0PKqWYmSUgBrPbeWbtwd8rtrRrnnaTruUsbz7IzpeX";
		const _returnValueRzzfuyI = await _Helpq0Ddir.visibleOptions(_cmdcn5VXY)
		const _cmdJgYyY1 = null;
		const _sortSubcommandssk3VrBR = false;
		const _returnValueJjFBzQK = null;
		const _subcommandTermEOCirJN = () => { return _returnValueJjFBzQK };
		const _helperVJl8UX = {
			"sortSubcommands": _sortSubcommandssk3VrBR,
		"subcommandTerm": _subcommandTermEOCirJN
	}
		const _returnValuetZFmy5t = await _Helpq0Ddir.formatHelp(_cmdJgYyY1, _helperVJl8UX)
	});

	it('test for Help', async () => {
		const _HelpauRO54d = new Help()
		const _cmdl9s1CRD = false;
		const _helperRmT4jv = "fJ47Oy9FiVkdwSNUFdKcBqJfAvMWQ9AmuSuWQCqCW";
		const _returnValuesICmvNz = await _HelpauRO54d.longestOptionTermLength(_cmdl9s1CRD, _helperRmT4jv)
		const _arrayValue9euiqX = false;
		const _arrayValueRx9RnC7 = null;
		const _cmdwrOvdhA = [_arrayValue9euiqX, _arrayValueRx9RnC7]
		const _helperMXDtZu4 = "DFaT2sZZKS56Opobdw4aiR2fZQhpkTYbVmXQDnpPgD5QD2MMJ1stqtE03dcLa99Iw8Zcf6j7Tpp4wvEtE3MRZf6lcB5B8";
		const _returnValueGAE7Q7 = await _HelpauRO54d.padWidth(_cmdwrOvdhA, _helperMXDtZu4)
		const _flagsGjO28IB = "Cc6uj4Hwkp1NH47TcmYDTKj9k8sKQWVgh1DVb67ox1RVBrVI3BoxZqHdHXM";
		const _descriptionRUFi1bT = "HgEMJStD48dfgqR2T0K0iwD7srKVgt9BkD5B93UfeIb";
		const _cmdOWa51vn = new Option(_flagsGjO28IB, _descriptionRUFi1bT)
		const _argIF0NHn4 = {
		
	}
		const _returnValuenVNIoOO = await _cmdOWa51vn.is(_argIF0NHn4)
		const _argEgb8MIc = "TvvmsEzn99yiTwMNjG9F4JD1zy";
		const _returnValuetc0miSV = await _cmdOWa51vn.is(_argEgb8MIc)
		const _returnValueLqoMIAx = await _HelpauRO54d.subcommandDescription(_cmdOWa51vn)
	});

	it('test for Help', async () => {
		const _HelprNLjl5O = new Help()
		const _strOR7qgQ9 = "IU6EtAokzUYsuk1ZDv9eDJYHiebHSkMeQ3airAHFFabzJbeyL";
		const _widthkm89Oz6 = -8.207123446175846;
		const _indentALCNSaB = -2.8241690256115444;
		const _minColumnWidthEsoQl6 = 4.484130432975897;
		const _returnValueXkY5S2 = await _HelprNLjl5O.wrap(_strOR7qgQ9, _widthkm89Oz6, _indentALCNSaB, _minColumnWidthEsoQl6)
		const _returnValueUzdxtW1 = undefined;
		const _nameUJ28gLh = () => { return _returnValueUzdxtW1 };
		const _descriptionChiJIAr = null;
		const _cmdIPQIUnn = new Argument(_nameUJ28gLh, _descriptionChiJIAr)
		const _returnValueRRpt7x = undefined;
		const _includesM8KXQnU = () => { return _returnValueRRpt7x };
		const _returnValue7lirTk = {
		
	}
		const _joinHwtIxCG = () => { return _returnValue7lirTk };
		const _valueskFjGsdw = {
			"includes": _includesM8KXQnU,
		"join": _joinHwtIxCG
	}
		const _returnValueXDeH6bL = await _cmdIPQIUnn.choices(_valueskFjGsdw)
		const _returnValuePqLPYPi = await _HelprNLjl5O.subcommandTerm(_cmdIPQIUnn)
		const _returnValueFQQFJuP = -8.11886319332564;
		const _namepBlTvOc = () => { return _returnValueFQQFJuP };
		const _argumenthY5dvZy = {
			"name": _namepBlTvOc
	}
		const _returnValueB2xGmtO = await _HelprNLjl5O.argumentTerm(_argumenthY5dvZy)
		const _cmdqFgxwc3 = "6cUMrndTRYLunLQ8FB3GJPh5bXPdfrPNH5h6EPKSAKTAUGwHj";
		const _sortSubcommandsZSuukDW = undefined;
		const _returnValuef9CKFDR = undefined;
		const _subcommandTermXFQsBR = () => { return _returnValuef9CKFDR };
		const _helperIvEvkWW = {
			"sortSubcommands": _sortSubcommandsZSuukDW,
		"subcommandTerm": _subcommandTermXFQsBR
	}
		const _returnValueZI5ArFd = await _HelprNLjl5O.longestSubcommandTermLength(_cmdqFgxwc3, _helperIvEvkWW)
	});

	it('test for Help', async () => {
		const _HelpG1lHSyn = new Help()
		const _arrayValuelWmxec2 = "6InHjepdBTcAKdZpHBCUFFOV9gOvHa5IdPHMx36tzeJYp5cjIbuujoJLPS0";
		const _arrayValuejKkiuPV = undefined;
		const _cmdQy8mQ7 = [_arrayValuelWmxec2, _arrayValuejKkiuPV]
		const _helperkA2RvJY = null;
		const _returnValueKw4GUEp = await _HelpG1lHSyn.formatHelp(_cmdQy8mQ7, _helperkA2RvJY)
		const _arrayValuelwlxdYw = null;
		const _arrayValueru7leoe = true;
		const _arrayValueP2z9kJ9 = null;
		const _arrayValueGk7MoVP = [_arrayValuelwlxdYw, _arrayValueru7leoe, _arrayValueP2z9kJ9]
		const _arrayValueukoOxY = undefined;
		const _arrayValueXfjD54b = 7.820101011061887;
		const _arrayValueLn18qx = 1.561986298282763;
		const _arrayValuefuM72i5 = [_arrayValueukoOxY, _arrayValueXfjD54b, _arrayValueLn18qx]
		const _arrayValueBTGNszn = null;
		const _arrayValueUBlVge3 = [_arrayValueGk7MoVP, _arrayValuefuM72i5, _arrayValueBTGNszn]
		const _arrayValuei82qs8S = undefined;
		const _optionV287EI = [_arrayValueUBlVge3, _arrayValuei82qs8S]
		const _returnValueQwdDwr4 = await _HelpG1lHSyn.optionDescription(_optionV287EI)
		const _namegdxBJf = -6.651037848293099;
		const _cmdfBmhQnE = new Command(_namegdxBJf)
		const _namerHqjsHi = "Dw3vQLNIGVFJRLzHYjLSM4TqbxmIhlujWBTl1bIMRRfN15foJ7BL9Xb83Qh5UEfstp3cnhyOT8u";
		const _returnValueXpswVx8 = await _cmdfBmhQnE._findCommand(_namerHqjsHi)
		const _returnValuelmU3Yiz = await _cmdfBmhQnE.opts()
		const _returnValuezSKU0h7 = await _HelpG1lHSyn.visibleCommands(_cmdfBmhQnE)
	});

	it('test for Help', async () => {
		const _HelpuGmQcsP = new Help()
		const _returnValuetDCyQx8 = null;
		const _nameH8jxQ0 = () => { return _returnValuetDCyQx8 };
		const _argumentIiTYLNK = {
			"name": _nameH8jxQ0
	}
		const _returnValuelRnEdhH = await _HelpuGmQcsP.argumentTerm(_argumentIiTYLNK)
		const _argumentjAAimKX = []
		const _returnValueTWIRdCY = await _HelpuGmQcsP.argumentDescription(_argumentjAAimKX)
		const _arrayValueJZTVp9S = null;
		const _arrayValueksQJJrQ = undefined;
		const _cmdtGgDSd8 = [_arrayValueJZTVp9S, _arrayValueksQJJrQ]
		const _returnValuecMchEhC = await _HelpuGmQcsP.visibleOptions(_cmdtGgDSd8)
		const _returnValueHRZOHbI = 9.85852437525379;
		const _nameGCBV5nX = () => { return _returnValueHRZOHbI };
		const _argumentQhRb5N0 = {
			"name": _nameGCBV5nX
	}
		const _returnValueSXQcXt = await _HelpuGmQcsP.argumentTerm(_argumentQhRb5N0)
	});

	it('test for Help', async () => {
		const _HelpynsSOKM = new Help()
		const _returnValuerYYWwx = true;
		const _descriptione5QWiu4 = () => { return _returnValuerYYWwx };
		const _cmduNgQATW = {
			"description": _descriptione5QWiu4
	}
		const _returnValuezC3ccBd = await _HelpynsSOKM.commandDescription(_cmduNgQATW)
		const _cmdy1lXpqF = []
		const _sortSubcommandsTY1b8i8 = true;
		const _subcommandTermpbgYcLn = true;
		const _helperoF67qNK = {
			"sortSubcommands": _sortSubcommandsTY1b8i8,
		"subcommandTerm": _subcommandTermpbgYcLn
	}
		const _returnValueFg9GSO = await _HelpynsSOKM.longestSubcommandTermLength(_cmdy1lXpqF, _helperoF67qNK)
		const _namezbaZrJ4 = 5.290741769184686;
		const _descriptionp6fb9VB = null;
		const _cmdybAySu = new Argument(_namezbaZrJ4, _descriptionp6fb9VB)
		const _valueNb0qIym = "53uKPSMN9pmtWuucPhW5X5UvltKSFFeY4n2AqfjLOkOx7BOAm3iKSzuZ2K8lDVpHJUrlKlUX3nR4NBNc";
		const _descriptionQUtut7 = undefined;
		const _returnValuehWpxshy = await _cmdybAySu.default(_valueNb0qIym, _descriptionQUtut7)
		const _valueMyygrmn = "94NYjxQj";
		const _descriptionUCKVEXO = undefined;
		const _returnValueHgqxlF1 = await _cmdybAySu.default(_valueMyygrmn, _descriptionUCKVEXO)
		const _returnValueRGRzkqx = "7HU3MqBEGujuwJg8FoNJUjMu7Hh8KgnnydBngerUiYtrBQvp4msNlVvDHbdAyMNcwoRroNkd5hyVMiIa6DE4F";
		const _valueZX5NSkN = () => { return _returnValueRGRzkqx };
		const _descriptionwC2Zwfv = undefined;
		const _returnValuevCUOn88 = await _cmdybAySu.default(_valueZX5NSkN, _descriptionwC2Zwfv)
		const _returnValuexFe6UV3 = await _HelpynsSOKM.subcommandDescription(_cmdybAySu)
	});

	it('test for Help', async () => {
		const _Helpgerhw24 = new Help()
		const _arrayValuemMRAqrR = null;
		const _returnValueVQB5Qkw = [_arrayValuemMRAqrR]
		const _arrayValueqI3tH74 = () => { return _returnValueVQB5Qkw };
		const _arrayValueGfTMufA = undefined;
		const _cmdimWkbQ1 = [_arrayValueqI3tH74, _arrayValueGfTMufA]
		const _helperY56pmCI = "YMPeFnfimSCngHixpTsYWv8Kecn6PkGaGCT9wnykgAvtwscNfwqmFAUjGjbgsqyG6XH";
		const _returnValueX3CV1dE = await _Helpgerhw24.padWidth(_cmdimWkbQ1, _helperY56pmCI)
		const _cmdICuQkcJ = {
		
	}
		const _arrayValueNT7OUtt = undefined;
		const _arrayValuezX5936g = [_arrayValueNT7OUtt]
		const _arrayValuei2WPx9I = "74Et9MAxtIQWdLeRzpbAYXxFtnVi3dZGAo4lt2NmhVukmqFdkj0SwyWzT";
		const _helperfYTT9U5 = [_arrayValuezX5936g, _arrayValuei2WPx9I]
		const _returnValueSj6l0dC = await _Helpgerhw24.longestArgumentTermLength(_cmdICuQkcJ, _helperfYTT9U5)
		const _cmdjN3qWaQ = "ptD89lyu72iNTHm129kU6ebCsBykU7cP50g7OU9ilf33nj12ocrB9aDkvYoAfkf7Inb7";
		const _returnValueYiVXNOw = await _Helpgerhw24.subcommandTerm(_cmdjN3qWaQ)
	});

	it('test for Help', async () => {
		const _Helpj9930F = new Help()
		const _returnValueoRz7JGe = null;
		const _cmdh1emy46 = () => { return _returnValueoRz7JGe };
		const _returnValuetkOguTZ = await _Helpj9930F.commandUsage(_cmdh1emy46)
		const _arrayValuetkPOeXJ = -4.803267951363809;
		const _cmdC4fmVRK = [_arrayValuetkPOeXJ]
		const _returnValuezPLSeq1 = await _Helpj9930F.visibleArguments(_cmdC4fmVRK)
		const _arrayValueZHFYqx = "6fN11ax6GmXJhEVilsJKqONvpphwI9vEuMXj2cXNJwLP8BkLgvUeSRjbHbMEAsiaFo0aBOOjkB6w9d";
		const _argumentzya741y = [_arrayValueZHFYqx]
		const _returnValuepaB1C35 = await _Helpj9930F.argumentDescription(_argumentzya741y)
		const _cmdIuUk11 = false;
		const _returnValueElyv3gq = null;
		const _sortSubcommandsT8HZBOc = () => { return _returnValueElyv3gq };
		const _returnValueAOkfj1g = 4.468280982389727;
		const _subcommandTermWqkzkE = () => { return _returnValueAOkfj1g };
		const _helperrnll43L = {
			"sortSubcommands": _sortSubcommandsT8HZBOc,
		"subcommandTerm": _subcommandTermWqkzkE
	}
		const _returnValueFoLifFy = await _Helpj9930F.longestSubcommandTermLength(_cmdIuUk11, _helperrnll43L)
		const _nameymHZ0dX = -0.4386492221403895;
		const _descriptionrevBgmw = null;
		const _optionAm6mx1e = new Argument(_nameymHZ0dX, _descriptionrevBgmw)
		const _valueWpy7Uj3 = null;
		const _previousf7hpLG = {
		
	}
		const _returnValuee1Y1z3 = await _optionAm6mx1e._concatValue(_valueWpy7Uj3, _previousf7hpLG)
		const _valuesOupFnRO = "NmDMPy5lYvsfrUP89JNJj11k9Ybthd6DYQiHxsNtWG7CV3kHGZOOrwwruKwNaOtWoRZiY2d2DCbURrHiOMiOxQO0Epb63c3xJFk";
		const _returnValueGuPwOQO = await _optionAm6mx1e.choices(_valuesOupFnRO)
		const _fnJZTkng = 3.49574020376156;
		const _returnValueWHvAlfe = await _optionAm6mx1e.argParser(_fnJZTkng)
		const _valuebervysO = true;
		const _returnValueOGSzAdy = undefined;
		const _concatjvFjhQZ = () => { return _returnValueOGSzAdy };
		const _previouss001a4 = {
			"concat": _concatjvFjhQZ
	}
		const _returnValueS0TrOX = await _optionAm6mx1e._concatValue(_valuebervysO, _previouss001a4)
		const _returnValueJs2SqJ1 = await _Helpj9930F.optionDescription(_optionAm6mx1e)
	});

	it('test for Help', async () => {
		const _HelpbV4lwYS = new Help()
		const __nameWwHJtjw = -4.481209231987737;
		const __aliasesWhnLXQq = {
		
	}
		const _parentgdz2peT = {
		
	}
		const _returnValuevizEmBB = null;
		const _usageGXRWCXu = () => { return _returnValuevizEmBB };
		const _cmdzN73hse = {
			"_name": __nameWwHJtjw,
		"_aliases": __aliasesWhnLXQq,
		"parent": _parentgdz2peT,
		"usage": _usageGXRWCXu
	}
		const _returnValueoJlhoM = await _HelpbV4lwYS.commandUsage(_cmdzN73hse)
		const _cmd7M2AmO = "wzpoNI4OpvfIY3QNcMvSWRy";
		const _returnValueBkRIjO = await _HelpbV4lwYS.subcommandTerm(_cmd7M2AmO)
		const _argChoicesfFzyK3k = {
		
	}
		const _negatevfrfsn = null;
		const _defaultValueFt3HpfV = undefined;
		const _defaultValueDescriptionyFZQi0t = null;
		const _envVarV1poUd1 = undefined;
		const _descriptionMH0Pdqb = {
		
	}
		const _optionPpqGOjl = {
			"argChoices": _argChoicesfFzyK3k,
		"negate": _negatevfrfsn,
		"defaultValue": _defaultValueFt3HpfV,
		"defaultValueDescription": _defaultValueDescriptionyFZQi0t,
		"envVar": _envVarV1poUd1,
		"description": _descriptionMH0Pdqb
	}
		const _returnValuepbEzVI = await _HelpbV4lwYS.optionDescription(_optionPpqGOjl)
		const _arrayValueOcYYkQ8 = null;
		const _arrayValueZhMcOp1 = null;
		const _returnValuewiQ5OOh = [_arrayValueOcYYkQ8, _arrayValueZhMcOp1]
		const _includesHEPZkU = () => { return _returnValuewiQ5OOh };
		const _flagseSAvjbc = {
			"includes": _includesHEPZkU
	}
		const _descriptionhZLsLVJ = "COiSVEEX6m72F1JPT8pTDvDYPTp0tlVAQKT3XYN1lbN1Aq";
		const _cmdGZ7TUZj = new Option(_flagseSAvjbc, _descriptionhZLsLVJ)
		const _namerqguy0A = undefined;
		const _returnValueYYSVBwE = await _cmdGZ7TUZj.env(_namerqguy0A)
		const _fnaCV7na8 = undefined;
		const _returnValueNNazzLQ = await _cmdGZ7TUZj.argParser(_fnaCV7na8)
		const _returnValueelOotUX = await _HelpbV4lwYS.subcommandDescription(_cmdGZ7TUZj)
	});

	it('test for Help', async () => {
		const _HelpHmTxCF0 = new Help()
		const _argChoicespTDOOtr = {
		
	}
		const _negateWwLdwJB = undefined;
		const _defaultValueHjL7xB6 = undefined;
		const _defaultValueDescriptionpAlPM2R = undefined;
		const _envVarHXhJAwx = undefined;
		const _descriptionkXr6AjH = "gUeKR1fUPnLW50x3OLHBnZyVrpetPqWJ422WKKoD0W8t7TS7kocZ5w1SVVfedE3";
		const _optionaOgfmpn = {
			"argChoices": _argChoicespTDOOtr,
		"negate": _negateWwLdwJB,
		"defaultValue": _defaultValueHjL7xB6,
		"defaultValueDescription": _defaultValueDescriptionpAlPM2R,
		"envVar": _envVarHXhJAwx,
		"description": _descriptionkXr6AjH
	}
		const _returnValued8s1Px = await _HelpHmTxCF0.optionDescription(_optionaOgfmpn)
		const _descriptionLFSZKai = "J4Vn9zVKphVLf9tDSNsivgQJpUjZ9fMr1Wl5xqq2rzQhLVRbpCDSYjil";
		const _cmdGuxfHkq = {
			"description": _descriptionLFSZKai
	}
		const _returnValuezY3Bi52 = await _HelpHmTxCF0.commandDescription(_cmdGuxfHkq)
		const _returnValueVUn04qU = "fQPNMOmblgsEV7GV6mPkGSzdgh5";
		const _argumenteZ0X7ri = () => { return _returnValueVUn04qU };
		const _returnValueYcY252z = await _HelpHmTxCF0.argumentTerm(_argumenteZ0X7ri)
		const _returnValuegYckgcZ = "zT3oNr41WatI0Mza9AoRPdH46GUSYIw7W6RPB36C2gm59WH1bgryX2813jyxuGp6ngxEvQwHhn10ML";
		const _optionYEf9GkU = () => { return _returnValuegYckgcZ };
		const _returnValuePYhPBiN = await _HelpHmTxCF0.optionDescription(_optionYEf9GkU)
	});

	it('test for Help', async () => {
		const _HelpXxA8RY = new Help()
		const _cmdudQqugx = -7.559879245241897;
		const _helperQoA1e1u = new Help()
		const _returnValueo5uyQyz = []
		const _namegdzXjH = () => { return _returnValueo5uyQyz };
		const _returnValuex1jURyU = true;
		const _descriptionvi0m473 = () => { return _returnValuex1jURyU };
		const _cmdcFfNHI = new Argument(_namegdzXjH, _descriptionvi0m473)
		const _valuessNgW9vR = "F6CwJtLhSTlDB4HhSxd3SMY1S9zVLZSLsyC9LVq1PssuTbGaPXPah6pnhPkS8frbrlG9dyhbvl";
		const _returnValuexR30Qo1 = await _cmdcFfNHI.choices(_valuessNgW9vR)
		const _fnvo5qFqE = undefined;
		const _returnValueQvzWqy4 = await _cmdcFfNHI.argParser(_fnvo5qFqE)
		const _valueeP78Axr = 1.1580826451097863;
		const _returnValuezjnqV0q = false;
		const _concatb8Hs9Aj = () => { return _returnValuezjnqV0q };
		const _previousaNJtTHU = {
			"concat": _concatb8Hs9Aj
	}
		const _returnValueJjh5nFY = await _cmdcFfNHI._concatValue(_valueeP78Axr, _previousaNJtTHU)
		const _fnm0lXmfJ = true;
		const _returnValueE9Za3jz = await _cmdcFfNHI.argParser(_fnm0lXmfJ)
		const _returnValuesrDLw3e = await _helperQoA1e1u.commandDescription(_cmdcFfNHI)
		const _returnValueg9s1JjY = false;
		const _matchH5mtphX = () => { return _returnValueg9s1JjY };
		const _arrayValueQ4oSF3 = 5.13863264944662;
		const _returnValuel24j2ac = [_arrayValueQ4oSF3]
		const _substrJmFEHnu = () => { return _returnValuel24j2ac };
		const _strPptML8D = {
			"match": _matchH5mtphX,
		"substr": _substrJmFEHnu
	}
		const _widthXMRaPOx = 4.711771146260531;
		const _indents0vKNzf = -5.243524400297946;
		const _minColumnWidthYEnmrAj = -0.8464700909576877;
		const _returnValuew7sEkdm = await _helperQoA1e1u.wrap(_strPptML8D, _widthXMRaPOx, _indents0vKNzf, _minColumnWidthYEnmrAj)
		const _cmdFYRpuuw = null;
		const _sortSubcommandsW25lvGV = null;
		const _arrayValueRCAmbz9 = false;
		const _returnValueEypAOnD = [_arrayValueRCAmbz9]
		const _subcommandTermGMMQxAe = () => { return _returnValueEypAOnD };
		const _helperxupsldg = {
			"sortSubcommands": _sortSubcommandsW25lvGV,
		"subcommandTerm": _subcommandTermGMMQxAe
	}
		const _returnValuexZA63DT = await _helperQoA1e1u.formatHelp(_cmdFYRpuuw, _helperxupsldg)
		const _argumentIdhehe1 = "ypwafSyj";
		const _returnValuexN6HRdI = await _helperQoA1e1u.argumentTerm(_argumentIdhehe1)
		const _arrayValueqRcRLQ = null;
		const _cmdbcdERyE = [_arrayValueqRcRLQ]
		const _returnValueSzPB9bA = await _helperQoA1e1u.subcommandTerm(_cmdbcdERyE)
		const _returnValuei1XSP0Z = await _HelpXxA8RY.longestSubcommandTermLength(_cmdudQqugx, _helperQoA1e1u)
		const _arrayValue24jDfY = -9.189382081776406;
		const _arrayValueNs4rGZj = undefined;
		const _returnValuegQUeOu = 8.946054540641125;
		const _arrayValuebqmYML = () => { return _returnValuegQUeOu };
		const _arrayValueN9qxy1v = {
		
	}
		const _nameMIyt3Xy = [_arrayValue24jDfY, _arrayValueNs4rGZj, _arrayValuebqmYML, _arrayValueN9qxy1v]
		const _descriptionox0kGwv = true;
		const _optionMiSh0XK = new Argument(_nameMIyt3Xy, _descriptionox0kGwv)
		const _valuevtzZAyr = undefined;
		const _descriptionwgcdM6j = {
		
	}
		const _returnValueqL0ClOF = await _optionMiSh0XK.default(_valuevtzZAyr, _descriptionwgcdM6j)
		const _valueHyUFO1L = true;
		const _previousoB9bTJv = "BOLzsphIiBxVB2fKjoCLCDH97KCQXn0";
		const _returnValuegF4yNA0 = await _optionMiSh0XK._concatValue(_valueHyUFO1L, _previousoB9bTJv)
		const _returnValueFL5Yj0D = await _HelpXxA8RY.optionDescription(_optionMiSh0XK)
	});

	it('test for Help', async () => {
		const _HelpVRiJYSq = new Help()
		const _cmdokRdD0k = null;
		const _helpera7d6yXo = new Help()
		const _name37C0R4 = "eoYwxbvHaOKfqCWSpjLGcsEqIwpx7BmKKYUiyh2rDGeUn1DxnYD5sSAeY4PhVf54s5m3vX1EFDIOogwHcnUkRLtfrehgoKIg";
		const _returnValuer8b69k7 = 4.265775060123147;
		const _returnValuen5tnwN4 = () => { return _returnValuer8b69k7 };
		const _arrayValueTFD2dsX = () => { return _returnValuen5tnwN4 };
		const _descriptionZBnbCtH = [_arrayValueTFD2dsX]
		const _argumentZpZ2mrW = new Argument(_name37C0R4, _descriptionZBnbCtH)
		const _returnValueuNzIV7W = await _argumentZpZ2mrW.argRequired()
		const _arrayValueY2qNf0 = null;
		const _arrayValueGQn7s59 = "2KaxPo8y1TbIL1gQ2DGnwV48l55AkjUOrHkiv5phWLKRcGhoHSUvdamqkdKrbCgVR";
		const _valuesuKJLtcN = [_arrayValueY2qNf0, _arrayValueGQn7s59]
		const _returnValueaYlbEo = await _argumentZpZ2mrW.choices(_valuesuKJLtcN)
		const _valueOCOO6j2 = {
		
	}
		const _previouscfXGnyK = {
		
	}
		const _returnValuegg6mTN5 = await _argumentZpZ2mrW._concatValue(_valueOCOO6j2, _previouscfXGnyK)
		const _returnValueUadJXGS = await _helpera7d6yXo.argumentDescription(_argumentZpZ2mrW)
		const _returnValuel18NZLQ = {
		
	}
		const _nameHToC60 = () => { return _returnValuel18NZLQ };
		const _argumentQGOcdQk = {
			"name": _nameHToC60
	}
		const _returnValuewrogWXu = await _helpera7d6yXo.argumentTerm(_argumentQGOcdQk)
		const _argumentGvLkg8f = "OMGrUM2F16adR3qPBa1";
		const _returnValuercRQAk = await _helpera7d6yXo.argumentTerm(_argumentGvLkg8f)
		const _returnValueYJ6CqyG = await _HelpVRiJYSq.padWidth(_cmdokRdD0k, _helpera7d6yXo)
		const _returnValueyHdIwPF = undefined;
		const _optionEHdNAdP = () => { return _returnValueyHdIwPF };
		const _returnValuevBCaKLX = await _HelpVRiJYSq.optionDescription(_optionEHdNAdP)
		const _cmdENsXDxK = "gh8jXqXd1T3qvhzNXNI80Flzu8Ff62QqTBnaXpxiPSMR1GHTHAuNXX9p3F3xN93bKsJFqirgI2";
		const _returnValueDWYhvN7 = await _HelpVRiJYSq.subcommandTerm(_cmdENsXDxK)
	});

	it('test for Help', async () => {
		const _HelpZAQXL3i = new Help()
		const _nameZ6hfoMs = undefined;
		const _cmdtnKqUl4 = new Command(_nameZ6hfoMs)
		const _returnValueRQhgSDi = await _cmdtnKqUl4._hasImplicitHelpCommand()
		const _arrayValuegMxusGM = -5.331288346169919;
		const _arrayValueQtg9Ud3 = undefined;
		const _arrayValueCdlR0ml = [_arrayValuegMxusGM, _arrayValueQtg9Ud3]
		const _arrayValuedaVFgB0 = null;
		const _returnValueD3yDpFw = [_arrayValueCdlR0ml, _arrayValuedaVFgB0]
		const _forEachXy80Ix = () => { return _returnValueD3yDpFw };
		const _aliasesASvzJj2 = {
			"forEach": _forEachXy80Ix
	}
		const _returnValueUZcJIKH = await _cmdtnKqUl4.aliases(_aliasesASvzJj2)
		const _nameTDQofVv = "DYPJAckZCRhOW2BLOTdkm3CduSo5mvouoyU";
		const _returnValueftKesQ = await _cmdtnKqUl4._findCommand(_nameTDQofVv)
		const _returnValuezI8XE8E = await _HelpZAQXL3i.subcommandTerm(_cmdtnKqUl4)
		const _cmdxo1x32Z = 6.280606594175875;
		const _helperzZelR1 = -4.083376514276786;
		const _returnValueGmOzXIx = await _HelpZAQXL3i.longestSubcommandTermLength(_cmdxo1x32Z, _helperzZelR1)
	});

	it('test for Help', async () => {
		const _HelpvnBv6vU = new Help()
		const _strCIZwhyb = "eBquLZlGbnvQCQx2iP00blGC4UiBRfqsS19YB54rawdG5elXiXYGvE";
		const _widthYBy2cuC = -5.567379474184685;
		const _indentwHyYfF0 = 8.524049817546135;
		const _minColumnWidthHmqdf8T = 9.090441793518593;
		const _returnValueBM3fFUb = await _HelpvnBv6vU.wrap(_strCIZwhyb, _widthYBy2cuC, _indentwHyYfF0, _minColumnWidthHmqdf8T)
		const _arrayValueNjAf5Sh = "orC2wADyCcfEgY8G7M9TQaBRmJh7QAJhvvCS942Ek95Agi1KDEMgzKUjgQsJ9p1n3c";
		const _arrayValuenez9Wob = undefined;
		const _returnValuex5oKkns = [_arrayValueNjAf5Sh, _arrayValuenez9Wob]
		const _matchna5qTyI = () => { return _returnValuex5oKkns };
		const _substrrbZlOXT = undefined;
		const _strkgIph0 = {
			"match": _matchna5qTyI,
		"substr": _substrrbZlOXT
	}
		const _widthViU7nIT = 0.08282595391114711;
		const _indent8Dg0v9 = 7.580166658805435;
		const _minColumnWidthVfmFqu5 = 4.181009974362041;
		const _returnValuejjSJUpb = await _HelpvnBv6vU.wrap(_strkgIph0, _widthViU7nIT, _indent8Dg0v9, _minColumnWidthVfmFqu5)
		const _returnValuejww4K06 = undefined;
		const _cmdHzXbbdg = () => { return _returnValuejww4K06 };
		const _returnValueTrCKbBE = await _HelpvnBv6vU.visibleArguments(_cmdHzXbbdg)
		const _returnValueHdS7mq5 = -8.816856557698827;
		const _cmdh0yU0p = () => { return _returnValueHdS7mq5 };
		const _returnValueJPiYPiW = await _HelpvnBv6vU.subcommandTerm(_cmdh0yU0p)
	});

	it('test for Help', async () => {
		const _HelpEdLKZpL = new Help()
		const _flagsMAe1pTv = "6vPkrPZ4p0rLpORB6Ls9au";
		const _arrayValue81DyAb = null;
		const _arrayValueDlm8yOf = {
		
	}
		const _descriptionqXDc4Pm = [_arrayValue81DyAb, _arrayValueDlm8yOf]
		const _cmdAYIxUll = new Option(_flagsMAe1pTv, _descriptionqXDc4Pm)
		const _returnValueka3QfN = await _cmdAYIxUll.attributeName()
		const _hideX4ZeC2 = true;
		const _returnValueAWC8abJ = await _cmdAYIxUll.hideHelp(_hideX4ZeC2)
		const _valuefMpEjU = undefined;
		const _descriptionG3a9THf = undefined;
		const _returnValuesvvBeBn = await _cmdAYIxUll.default(_valuefMpEjU, _descriptionG3a9THf)
		const _fnR4OA1Ph = "gyQRhRusBTqXuo5F4RoDFvTXHofItbgt7iuX928LegvYqNSC8l6KUntIq";
		const _returnValueDSqa4Og = await _cmdAYIxUll.argParser(_fnR4OA1Ph)
		const _returnValueAAj4nMp = await _HelpEdLKZpL.subcommandDescription(_cmdAYIxUll)
		const _cmdfLC1Jt9 = undefined;
		const _returnValueoZcRfA = await _HelpEdLKZpL.subcommandDescription(_cmdfLC1Jt9)
		const _arrayValuedfS1h6U = null;
		const _arrayValueCax1lXJ = null;
		const _arrayValuevjSul0n = [_arrayValueCax1lXJ]
		const _arrayValueF2KXpX9 = []
		const _arrayValueOhTZ4HJ = -6.493941724402443;
		const _returnValueg1OewiY = true;
		const _arrayValueLQ6fMI = () => { return _returnValueg1OewiY };
		const _arrayValuee3S5K0 = -5.2744257030380854;
		const _arrayValuey24Zdg7 = [_arrayValueLQ6fMI, _arrayValuee3S5K0]
		const _arrayValueh5wC4Y0 = [_arrayValueF2KXpX9, _arrayValueOhTZ4HJ, _arrayValuey24Zdg7]
		const _cmdz22IbSM = [_arrayValuedfS1h6U, _arrayValuevjSul0n, _arrayValueh5wC4Y0]
		const _returnValueJMJC16p = null;
		const _longestOptionTermLengthkhPoUBp = () => { return _returnValueJMJC16p };
		const _returnValueiPdQc88 = undefined;
		const _longestSubcommandTermLengthC9O6JZU = () => { return _returnValueiPdQc88 };
		const _returnValueqg8yZnR = "y4TuqVL6pj8VYAOJ3VHatMMuqdvR3CLxUEAmdapWTYgQ3spozTUlkSMVSoB0Q9yaVSS";
		const _longestArgumentTermLengthMlA3tVj = () => { return _returnValueqg8yZnR };
		const _helperLIlWS8 = {
			"longestOptionTermLength": _longestOptionTermLengthkhPoUBp,
		"longestSubcommandTermLength": _longestSubcommandTermLengthC9O6JZU,
		"longestArgumentTermLength": _longestArgumentTermLengthMlA3tVj
	}
		const _returnValuesVBvWT = await _HelpEdLKZpL.padWidth(_cmdz22IbSM, _helperLIlWS8)
	});

	it('test for Help', async () => {
		const _HelpVV5Ce5 = new Help()
		const __argsDescriptionb8DcBPU = {
		
	}
		const __argstqNiIFH = {
		
	}
		const _cmdui1rPa = {
			"_argsDescription": __argsDescriptionb8DcBPU,
		"_args": __argstqNiIFH
	}
		const _returnValuehH7dzd5 = await _HelpVV5Ce5.visibleArguments(_cmdui1rPa)
		const _returnValueISRQ1PJ = "2khAnJfJV2GtjNCGOkTdZ5tO1adskgaiodBRVR9xfrYi8EXztN4QGKr74XLoflW06YsyNKtlYEKeOOCn1IEm";
		const _nameonVNsx5 = () => { return _returnValueISRQ1PJ };
		const _argumentchbfWit = {
			"name": _nameonVNsx5
	}
		const _returnValueBaYtCdN = await _HelpVV5Ce5.argumentTerm(_argumentchbfWit)
		const _messageUlyCSdQ = 6.522500014341443;
		const _argumentDGUtEXs = new InvalidArgumentError(_messageUlyCSdQ)
		const _returnValueIwt1cvA = await _HelpVV5Ce5.argumentTerm(_argumentDGUtEXs)
	});

	it('test for Help', async () => {
		const _HelpD5DpuR = new Help()
		const _arrayValuel2anwl3 = false;
		const _nameYUHpEmP = [_arrayValuel2anwl3]
		const _descriptionAb7Mk4a = null;
		const _argumentpiU2IJQ = new Argument(_nameYUHpEmP, _descriptionAb7Mk4a)
		const _returnValueJVMNJa8 = await _argumentpiU2IJQ.name()
		const _valueduB1u0z = {
		
	}
		const _descriptionSw2WYMH = undefined;
		const _returnValueFiyftYR = await _argumentpiU2IJQ.default(_valueduB1u0z, _descriptionSw2WYMH)
		const _valuespMNH5Eo = undefined;
		const _returnValuewYSnRiO = await _argumentpiU2IJQ.choices(_valuespMNH5Eo)
		const _arrayValueDtiyJOW = undefined;
		const _arrayValuefJKIV1i = true;
		const _valuesr2wuWKE = [_arrayValueDtiyJOW, _arrayValuefJKIV1i]
		const _returnValueY2FYoQ = await _argumentpiU2IJQ.choices(_valuesr2wuWKE)
		const _returnValueyHgT8Uz = await _HelpD5DpuR.argumentDescription(_argumentpiU2IJQ)
	});

	it('test for Help', async () => {
		const _Helpn0KvFTs = new Help()
		const _namelLiDCx = {
		
	}
		const _cmdOqgMPEi = new Command(_namelLiDCx)
		const _strEcsSYvR = "EHt2RJ1cwrucw1JnUxa";
		const _argsDescriptioniAKBCYw = undefined;
		const _returnValueUG2o3td = await _cmdOqgMPEi.description(_strEcsSYvR, _argsDescriptioniAKBCYw)
		const _flagsQ51piVx = "QVohxyPSMS1sHUPEMLzYCFsAhgaeOHkfw6thFlMXn5q14PHt1VLINHPl9IWq1ElX7lGRvlnD5Bl4cYMoc3KSfItiUT";
		const _description6FXLQ6 = "VVzhb6DGzwE90rgtNSdfqttRkliG5AdjycWr";
		const _arrayValueO7rUN9Y = 1.0274729197975176;
		const _arrayValueXQ8hW2O = true;
		const _fnJnEvHZR = [_arrayValueO7rUN9Y, _arrayValueXQ8hW2O]
		const _defaultValueIFcX734 = false;
		const _returnValueruJBGqT = await _cmdOqgMPEi.option(_flagsQ51piVx, _description6FXLQ6, _fnJnEvHZR, _defaultValueIFcX734)
		const _returnValueQBusBg4 = await _Helpn0KvFTs.visibleCommands(_cmdOqgMPEi)
		const _optionppmSD3Q = "ms2bJw84aMdckpkVMoPAoS2tWTfQmLBBGF6WbT9U9iYUp1yCkkrSLOJIrwAEAe0NG04zZ4r2k3";
		const _returnValuez7MsPwA = await _Helpn0KvFTs.optionTerm(_optionppmSD3Q)
		const _arrayValuelgN0jtf = null;
		const _returnValueQg8dSUs = [_arrayValuelgN0jtf]
		const _cmdxCksUq3 = () => { return _returnValueQg8dSUs };
		const _returnValuegeQnKEO = await _Helpn0KvFTs.subcommandTerm(_cmdxCksUq3)
	});

	it('test for Help', async () => {
		const _HelpCLSNlxV = new Help()
		const _namesADjszV = false;
		const _cmdbWW0O6L = new Command(_namesADjszV)
		const _argEQ0n6gB = null;
		const _returnValuezWwpPGp = await _cmdbWW0O6L._findOption(_argEQ0n6gB)
		const _enableOrNameAndArgseWiDU9W = true;
		const _descriptionYQOfNu3 = 5.497579382473486;
		const _returnValuewyuIaam = await _cmdbWW0O6L.addHelpCommand(_enableOrNameAndArgseWiDU9W, _descriptionYQOfNu3)
		const _promiseRHQMUIo = {
		
	}
		const _eventIpUjbka = "g4ge8RamcKFW5v90boapcHXHqvQJG6XO4Y5MGdgNwkg";
		const _returnValueAnRvt3G = await _cmdbWW0O6L._chainOrCallHooks(_promiseRHQMUIo, _eventIpUjbka)
		const _returnValuePjeytXw = await _HelpCLSNlxV.visibleCommands(_cmdbWW0O6L)
		const _arrayValuejYY0TCT = "yk5B2NL6KoAGhlDmxp2640hEKWMdCdDvBkEGXP1KV82sa5fjTo3xRDCoHR4Ol9HbHJj";
		const _arrayValuevwivdhb = undefined;
		const _arrayValueNjm5NSO = "JwnCfAEHPHATNNWK1DwOOjff3OTHFMYaGXSMFzBT0aJr5Irv5y2AtFGst5q5SpyghoSvPUr5h2SzE30WsorhKaY5dRdjLhUV";
		const _cmdQtrij4m = [_arrayValuejYY0TCT, _arrayValuevwivdhb, _arrayValueNjm5NSO]
		const _returnValuemXUfiSU = await _HelpCLSNlxV.commandUsage(_cmdQtrij4m)
		const _arrayValueTeDdDNn = 6.3412126472393275;
		const _arrayValueF2rnuWl = false;
		const _arrayValueVbVeji4 = -6.636952063404867;
		const _arrayValueJsbW8fz = []
		const _optionA0wEWiM = [_arrayValueTeDdDNn, _arrayValueF2rnuWl, _arrayValueVbVeji4, _arrayValueJsbW8fz]
		const _returnValueAdWF7M = await _HelpCLSNlxV.optionDescription(_optionA0wEWiM)
		const _namemHbE14 = "p2bluMRiTpjGnEesZkMOkzbVSjIcbVqbCkv9TaO8SWQDgMh3Ijpx28OSb";
		const _descriptionpkh6ZR = undefined;
		const _cmdn3ezNPU = new Argument(_namemHbE14, _descriptionpkh6ZR)
		const _returnValuewV8nszw = await _cmdn3ezNPU.name()
		const _fnT7jphe5 = true;
		const _returnValueZgyfek7 = await _cmdn3ezNPU.argParser(_fnT7jphe5)
		const _returnValueeJi13dE = await _cmdn3ezNPU.argRequired()
		const _returnValuewbatLH6 = await _HelpCLSNlxV.subcommandDescription(_cmdn3ezNPU)
	});

	it('test for Help', async () => {
		const _HelpOgEfw7 = new Help()
		const _nameACKCRr = false;
		const _cmdfIUnH5i = new Command(_nameACKCRr)
		const _configuratione7WjkRC = undefined;
		const _returnValueG5iZ6M = await _cmdfIUnH5i.configureOutput(_configuratione7WjkRC)
		const _returnValuedeHh8Li = await _HelpOgEfw7.visibleOptions(_cmdfIUnH5i)
	});

	it('test for Help', async () => {
		const _HelpTrufEZ1 = new Help()
		const _returnValuezP7ynd0 = 6.360200289135538;
		const _matchND2S4h0 = () => { return _returnValuezP7ynd0 };
		const _returnValueV8TVUTg = null;
		const _substrWlVcT29 = () => { return _returnValueV8TVUTg };
		const _stroIPNbTk = {
			"match": _matchND2S4h0,
		"substr": _substrWlVcT29
	}
		const _widthNHCE1Gd = -4.128499341701588;
		const _indentWEsiwsQ = {
		
	}
		const _minColumnWidthchP8hvO = -7.125635878978036;
		const _returnValues5MVHkl = await _HelpTrufEZ1.wrap(_stroIPNbTk, _widthNHCE1Gd, _indentWEsiwsQ, _minColumnWidthchP8hvO)
		const _arrayValuePgXDmtd = -9.243792286139866;
		const _arrayValueGTvEGO = "LoyBo8u18tutyF9Am1rb5AK1eh6xj08VbFM2yNjn7O3a";
		const _arrayValueOIMj5QD = undefined;
		const _arrayValueBQJChEY = [_arrayValueGTvEGO, _arrayValueOIMj5QD]
		const _argChoicesbt0YPTc = [_arrayValuePgXDmtd, _arrayValueBQJChEY]
		const _negateunTef6 = undefined;
		const _defaultValuezPWLeHX = undefined;
		const _defaultValueDescriptionOzVifgi = undefined;
		const _envVarbHAqIFX = undefined;
		const _descriptionqDscAJJ = null;
		const _optiondzKP1o = {
			"argChoices": _argChoicesbt0YPTc,
		"negate": _negateunTef6,
		"defaultValue": _defaultValuezPWLeHX,
		"defaultValueDescription": _defaultValueDescriptionOzVifgi,
		"envVar": _envVarbHAqIFX,
		"description": _descriptionqDscAJJ
	}
		const _returnValuecKiP3S4 = await _HelpTrufEZ1.optionDescription(_optiondzKP1o)
		const _cmdIB0LVJ2 = "p3vpLSFcgHdf4Rn0VOL2udVZ9epjCSXAEes";
		const _returnValueACj4rjj = await _HelpTrufEZ1.visibleCommands(_cmdIB0LVJ2)
		const _argumentljPO1pq = "W7QsFGwMWRjyK12em";
		const _returnValuenPMRkBd = await _HelpTrufEZ1.argumentTerm(_argumentljPO1pq)
	});

	it('test for Help', async () => {
		const _HelpBD2KIYy = new Help()
		const __namePOGQaBF = {
		
	}
		const _arrayValueE8wk4DN = {
		
	}
		const __aliasesqlpipK7 = [_arrayValueE8wk4DN]
		const _returnValueMu2JP4r = {
		
	}
		const _parentgYow099 = () => { return _returnValueMu2JP4r };
		const _returnValueEfg582d = undefined;
		const _usagek8OaArj = () => { return _returnValueEfg582d };
		const _cmdO6PXZY = {
			"_name": __namePOGQaBF,
		"_aliases": __aliasesqlpipK7,
		"parent": _parentgYow099,
		"usage": _usagek8OaArj
	}
		const _returnValueO7z28So = await _HelpBD2KIYy.commandUsage(_cmdO6PXZY)
		const _cmdfKdXMzR = "9fOkkJyKWTfWqEuO4CUw97H4FMVxw4FtxuMxgnQaO3fCiavfvc1Tiv4J9v6iNHxsReROrbTju4MQn";
		const _returnValuesl2hfXA = await _HelpBD2KIYy.subcommandTerm(_cmdfKdXMzR)
	});

	it('test for Help', async () => {
		const _HelpiOzVBX = new Help()
		const _argChoicesy0Eb7Ss = {
		
	}
		const _arrayValuekaRHU6K = false;
		const _arrayValuezppc3a = null;
		const _arrayValuexbGo39h = undefined;
		const _negategUGQYfj = [_arrayValuekaRHU6K, _arrayValuezppc3a, _arrayValuexbGo39h]
		const _defaultValueW2blv8T = undefined;
		const _defaultValueDescriptiongTAXaW6 = -7.531513174952428;
		const _envVarHiDKVh = {
		
	}
		const _descriptionEaBTdEQ = undefined;
		const _optionM0WAmPY = {
			"argChoices": _argChoicesy0Eb7Ss,
		"negate": _negategUGQYfj,
		"defaultValue": _defaultValueW2blv8T,
		"defaultValueDescription": _defaultValueDescriptiongTAXaW6,
		"envVar": _envVarHiDKVh,
		"description": _descriptionEaBTdEQ
	}
		const _returnValuej3mg8W = await _HelpiOzVBX.optionDescription(_optionM0WAmPY)
	});

	it('test for Help', async () => {
		const _HelpsTkjqr = new Help()
		const _arrayValue3cIMqe = {
		
	}
		const _returnValueumd9HD = 7.168154769348117;
		const _arrayValueJLQq3eS = () => { return _returnValueumd9HD };
		const _arrayValueJtkrvMq = "BVmbGkzw2zgYkdinNVVVPzxYo";
		const _nametpAfft = [_arrayValue3cIMqe, _arrayValueJLQq3eS, _arrayValueJtkrvMq]
		const _cmdWE0sgu = new Command(_nametpAfft)
		const _flagsFB2FAgO = "peaBwSscz7pbYFQV7bJLFlZDdSalu43T77kfSo48GfvgYaP4snpwio6IqshXb3EDUIiu4haR";
		const _descriptionQU2LbdQ = 3.626476946668859;
		const _fnk9ONviJ = -1.5375783808896557;
		const _defaultValueKqvs3uf = undefined;
		const _returnValueK6BH8dh = await _cmdWE0sgu.requiredOption(_flagsFB2FAgO, _descriptionQU2LbdQ, _fnk9ONviJ, _defaultValueKqvs3uf)
		const _returnValuei1jh6lO = await _cmdWE0sgu.opts()
		const _returnValueH7fuhLI = await _HelpsTkjqr.subcommandTerm(_cmdWE0sgu)
		const _returnValueCg7Zcso = true;
		const _strhz5opqT = () => { return _returnValueCg7Zcso };
		const _widthb1Uqasq = -2.827718629171713;
		const _indentkY7iAj = 6.756338906396138;
		const _minColumnWidthgAmnHDX = -4.048090769931666;
		const _returnValueVq9bPh = await _HelpsTkjqr.wrap(_strhz5opqT, _widthb1Uqasq, _indentkY7iAj, _minColumnWidthgAmnHDX)
		const _cmdebWESFk = "szbKmlbR1xEARiG4zmnMmg71ZZ97jRHLRBWGiFS2BtxDX9TN5KDoZUyi4eZzvPdN8hKp";
		const _returnValueaFgjpNv = await _HelpsTkjqr.subcommandDescription(_cmdebWESFk)
		const _arrayValueo1oXOdd = 4.115281522178192;
		const _cmdn2sGqJ8 = [_arrayValueo1oXOdd]
		const _returnValueMxp7dTh = await _HelpsTkjqr.visibleArguments(_cmdn2sGqJ8)
	});
})