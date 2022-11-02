export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpEDSlp9I = new Help()
		const _cmdNdtF2dY = []
		const _returnValueBLAC1jv = await _HelpEDSlp9I.visibleCommands(_cmdNdtF2dY)
		const _arrayValueq9dqrsp = null;
		const _cmdcWSY6M5 = [_arrayValueq9dqrsp]
		const _returnValuelfWW1wZ = await _HelpEDSlp9I.visibleCommands(_cmdcWSY6M5)
		const _argChoiceskViQ0xj = {
		
	}
		const _returnValuehZ8tT5B = null;
		const _negateybyBWly = () => { return _returnValuehZ8tT5B };
		const _defaultValueOC6pXk6 = undefined;
		const _arrayValuerfGd1R = false;
		const _arrayValueh8CXHLA = null;
		const _returnValuehjHpI1 = 2.3189871679335425;
		const _arrayValueeI2buNX = () => { return _returnValuehjHpI1 };
		const _returnValuewxI4WvH = [_arrayValuerfGd1R, _arrayValueh8CXHLA, _arrayValueeI2buNX]
		const _defaultValueDescriptionlXLdznP = () => { return _returnValuewxI4WvH };
		const _envVarZhJWoMG = undefined;
		const _descriptionrYKMqNd = true;
		const _optionGLJSSr = {
			"argChoices": _argChoiceskViQ0xj,
		"negate": _negateybyBWly,
		"defaultValue": _defaultValueOC6pXk6,
		"defaultValueDescription": _defaultValueDescriptionlXLdznP,
		"envVar": _envVarZhJWoMG,
		"description": _descriptionrYKMqNd
	}
		const _returnValueWGglyg4 = await _HelpEDSlp9I.optionDescription(_optionGLJSSr)
	});

	it('test for Help', async () => {
		const _HelpaCQDRxs = new Help()
		const _arrayValuerkE0bMq = true;
		const _cmdqJfbyl8 = [_arrayValuerkE0bMq]
		const _arrayValueByG4l4B = {
		
	}
		const _arrayValueAWYtGI7 = "1xirnM";
		const _arrayValue8BE7Mg = undefined;
		const _arrayValuesdGBVzR = undefined;
		const _arrayValueEIiAbY = [_arrayValueByG4l4B, _arrayValueAWYtGI7, _arrayValue8BE7Mg, _arrayValuesdGBVzR]
		const _arrayValueypFC8bu = "Jn4lHRI3gae5or8yxiTg3BI682cnc8Lp6rG6QxRqLMMjNfwgU37uJgE671EYYG6B1a92KU7IPMUHe2HLUqZW1Y";
		const _arrayValueiwC32H = 1.264040651098652;
		const _helperotqMz5g = [_arrayValueEIiAbY, _arrayValueypFC8bu, _arrayValueiwC32H]
		const _returnValuetTP9NbE = await _HelpaCQDRxs.longestArgumentTermLength(_cmdqJfbyl8, _helperotqMz5g)
		const _cmdxrskbti = undefined;
		const _arrayValueEepBBt = null;
		const _helpermEuw2Kb = [_arrayValueEepBBt]
		const _returnValuexajXL31 = await _HelpaCQDRxs.longestSubcommandTermLength(_cmdxrskbti, _helpermEuw2Kb)
		const _arrayValuexMohbc = undefined;
		const _cmdIWBlFSg = [_arrayValuexMohbc]
		const _returnValueatGedg4 = await _HelpaCQDRxs.commandUsage(_cmdIWBlFSg)
		const _cmdcw7Xwfw = undefined;
		const _helperqrP9Z4c = new Help()
		const _arrayValueonic8aX = "rYqCK3CC2qnZnPplywohzRz7TeYM14qrHKOTtNq0sdKzNNFHvbCJ6XKWUA0b";
		const _arrayValuey1CpUB = false;
		const _returnValueSwa71eO = null;
		const _arrayValueUDEiZcT = () => { return _returnValueSwa71eO };
		const _cmdtLKJvk = [_arrayValueonic8aX, _arrayValuey1CpUB, _arrayValueUDEiZcT]
		const _returnValuedpIJ160 = await _helperqrP9Z4c.commandDescription(_cmdtLKJvk)
		const _cmdgOQdiSX = false;
		const _helperEM6LX7g = []
		const _returnValueuI9zp3 = await _helperqrP9Z4c.longestSubcommandTermLength(_cmdgOQdiSX, _helperEM6LX7g)
		const _arrayValuem2rX2s = "pGW3NapMaIxwtoPOnyJLRg0e1Oe2L3SdNX0KYCxkcmk7r7d6MEu1G1QwaIDdIQ";
		const _arrayValuex7MHENM = [_arrayValuem2rX2s]
		const _arrayValuenqIgqE = {
		
	}
		const _cmdOvz6y1K = [_arrayValuex7MHENM, _arrayValuenqIgqE]
		const _returnValueNLHYieB = await _helperqrP9Z4c.visibleArguments(_cmdOvz6y1K)
		const _returnValueMGsQbhJ = true;
		const _cmdxWnQg6o = () => { return _returnValueMGsQbhJ };
		const _returnValueC42apNQ = await _helperqrP9Z4c.commandUsage(_cmdxWnQg6o)
		const _returnValueOUBEAU = await _HelpaCQDRxs.longestArgumentTermLength(_cmdcw7Xwfw, _helperqrP9Z4c)
	});

	it('test for Help', async () => {
		const _Helpf63z7MV = new Help()
		const _returnValueCTBgGYM = undefined;
		const _cmdRFlkBcg = () => { return _returnValueCTBgGYM };
		const _arrayValuejRPZ04Z = undefined;
		const _arrayValuencH1Hxe = false;
		const _returnValueDb3VjB7 = [_arrayValuejRPZ04Z, _arrayValuencH1Hxe]
		const _helperhbrVzqc = () => { return _returnValueDb3VjB7 };
		const _returnValueNyVjmVc = await _Helpf63z7MV.padWidth(_cmdRFlkBcg, _helperhbrVzqc)
		const _namefRxO381 = "88DeGn55xOFz7zOvotYvv8by10xJlK";
		const _arrayValueGQrQILT = 0.06800017912641998;
		const _arrayValueOg8OKXl = "Elx2irYEfajBUiWS";
		const _arrayValueQtGYfxw = -9.025020794619142;
		const _arrayValueEHVu5kU = null;
		const _arrayValueLVUTCy6 = [_arrayValueOg8OKXl, _arrayValueQtGYfxw, _arrayValueEHVu5kU]
		const _arrayValueb2ZgFSG = {
		
	}
		const _descriptionNththhO = [_arrayValueGQrQILT, _arrayValueLVUTCy6, _arrayValueb2ZgFSG]
		const _argumentmd7v1fo = new Argument(_namefRxO381, _descriptionNththhO)
		const _valueMhtb4iI = {
		
	}
		const _descriptiontTCfeXp = {
		
	}
		const _returnValueEthrJob = await _argumentmd7v1fo.default(_valueMhtb4iI, _descriptiontTCfeXp)
		const _valuecMwrVF5 = undefined;
		const _descriptionm5uJrqO = {
		
	}
		const _returnValuezao7PW0 = await _argumentmd7v1fo.default(_valuecMwrVF5, _descriptionm5uJrqO)
		const _returnValuebm8TvBN = undefined;
		const _valuesvvMAAH = () => { return _returnValuebm8TvBN };
		const _descriptionEk5Zzit = undefined;
		const _returnValueNp2rJZg = await _argumentmd7v1fo.default(_valuesvvMAAH, _descriptionEk5Zzit)
		const _fnYNP5Hj5 = 6.772716267736499;
		const _returnValueFkVmn1b = await _argumentmd7v1fo.argParser(_fnYNP5Hj5)
		const _returnValueTr5W0E8 = await _Helpf63z7MV.argumentTerm(_argumentmd7v1fo)
		const _cmdKuQt757 = null;
		const _helperBBZMVYb = "a9mUMGk2nt9J2PzGSBkR3Wf99Ul8IfcSrdIc5ciTwHSIpKzWhDqTWnwAtQsbOJnwSxtauef3WTyOp5yoppzxJ";
		const _returnValueEaSXMdf = await _Helpf63z7MV.longestArgumentTermLength(_cmdKuQt757, _helperBBZMVYb)
		const _cmdlny7q2s = null;
		const _returnValuePkhly52 = await _Helpf63z7MV.visibleArguments(_cmdlny7q2s)
	});

	it('test for Help', async () => {
		const _HelpaRMH0IV = new Help()
		const _arrayValuezwUwaTV = true;
		const _arrayValuevS8KBz = undefined;
		const _nameW5l4EHv = [_arrayValuezwUwaTV, _arrayValuevS8KBz]
		const _descriptionGdl8z66 = "MjXKADXqk6PzBGGBUQfzcKJpudvppsxsgKuNIAOfbJWLser7VMV2Tl9RXNxGJpWU7";
		const _argumentOZFKdKQ = new Argument(_nameW5l4EHv, _descriptionGdl8z66)
		const _valuen7jb1Ht = {
		
	}
		const _descriptionbnKWWES = 5.437405297692745;
		const _returnValueGcbzb5L = await _argumentOZFKdKQ.default(_valuen7jb1Ht, _descriptionbnKWWES)
		const _fnToYrXde = undefined;
		const _returnValuedCdP1nE = await _argumentOZFKdKQ.argParser(_fnToYrXde)
		const _returnValueFcZkhHP = await _HelpaRMH0IV.argumentDescription(_argumentOZFKdKQ)
		const _cmdICMOTo = true;
		const _sortSubcommandsE86kQjl = undefined;
		const _returnValueUpbAwy = -2.922988775674046;
		const _subcommandTermGTTQwm = () => { return _returnValueUpbAwy };
		const _helperZSbktkT = {
			"sortSubcommands": _sortSubcommandsE86kQjl,
		"subcommandTerm": _subcommandTermGTTQwm
	}
		const _returnValuedAYHUk4 = await _HelpaRMH0IV.longestSubcommandTermLength(_cmdICMOTo, _helperZSbktkT)
		const _struWtMlQy = "zjZk5wdi9EoHdCfju";
		const _widthDE553Dy = 3.3244793789980136;
		const _indentOQVEJkc = 4.73036427191159;
		const _minColumnWidthm2aZhwu = -6.50148333133081;
		const _returnValueWsnPyxq = await _HelpaRMH0IV.wrap(_struWtMlQy, _widthDE553Dy, _indentOQVEJkc, _minColumnWidthm2aZhwu)
	});

	it('test for Help', async () => {
		const _HelpdnfaHtH = new Help()
		const _returnValuegcCu2hl = undefined;
		const _descriptione9SQXNJ = () => { return _returnValuegcCu2hl };
		const _cmdYlsrXLF = {
			"description": _descriptione9SQXNJ
	}
		const _returnValueFug4k5L = await _HelpdnfaHtH.subcommandDescription(_cmdYlsrXLF)
		const __argsDescriptionPEUnHox = {
		
	}
		const __argsk4BXe58 = {
		
	}
		const _cmdU49RzAG = {
			"_argsDescription": __argsDescriptionPEUnHox,
		"_args": __argsk4BXe58
	}
		const _returnValuejwHsv6f = await _HelpdnfaHtH.visibleArguments(_cmdU49RzAG)
	});

	it('test for Help', async () => {
		const _HelpgKfnxij = new Help()
		const _arrayValuehmMNxS = null;
		const _arrayValuej3HFxmz = -2.9552684502925093;
		const _arrayValueKa2PHrB = null;
		const _returnValueRYFG9TJ = [_arrayValuehmMNxS, _arrayValuej3HFxmz, _arrayValueKa2PHrB]
		const _descriptionsX0sdi4 = () => { return _returnValueRYFG9TJ };
		const _cmdyqAp7CM = {
			"description": _descriptionsX0sdi4
	}
		const _returnValueryKttHe = await _HelpgKfnxij.commandDescription(_cmdyqAp7CM)
		const _returnValuepLwXl6Q = "YUETFtMb8S5nBVzCcmFvrECW5GrnA2RGnPzmN3K3GyhOibR9CHBiIUUDbAnEddAHkwqHJvvIimWOC5YuEbgjTY49AlFQ";
		const _cmdPGTFkFC = () => { return _returnValuepLwXl6Q };
		const _returnValuetpqslAs = await _HelpgKfnxij.visibleCommands(_cmdPGTFkFC)
		const _returnValueaLRHs7s = undefined;
		const _flagsCwuAG2L = () => { return _returnValueaLRHs7s };
		const _descriptionuJed2K0 = undefined;
		const _cmdhgUmW0C = new Option(_flagsCwuAG2L, _descriptionuJed2K0)
		const _returnValueT6Vt0Fd = await _cmdhgUmW0C.attributeName()
		const _valuepJ9zySM = undefined;
		const _descriptionvG683Y = "kXIjLkloZZ6av7BRenbSFEug5ooXI3J3InOR";
		const _returnValueQgiTiYI = await _cmdhgUmW0C.default(_valuepJ9zySM, _descriptionvG683Y)
		const _returnValueE8GfRkS = await _cmdhgUmW0C.attributeName()
		const _nameMj4R3Fc = undefined;
		const _returnValueBzbfyQH = await _cmdhgUmW0C.env(_nameMj4R3Fc)
		const _returnValueUzrQg5I = await _cmdhgUmW0C.name()
		const _returnValueeeLUBZg = await _HelpgKfnxij.commandDescription(_cmdhgUmW0C)
		const __argsV7fiCA = {
		
	}
		const __nameysRKced = -5.893071527895034;
		const __aliasesDLUIFIl = {
		
	}
		const _optionsDbkehL = {
		
	}
		const _cmd37ncpH = {
			"_args": __argsV7fiCA,
		"_name": __nameysRKced,
		"_aliases": __aliasesDLUIFIl,
		"options": _optionsDbkehL
	}
		const _returnValuekBen3j0 = await _HelpgKfnxij.subcommandTerm(_cmd37ncpH)
		const _cmdautdsq = null;
		const _sortSubcommandsWX0JvB4 = "po7h373NkxIeh8swW5IXP77IOqVtHpHhbmUF5lTfDp87aCDVbj6sgUPcj2i8hi";
		const _returnValuevpb2NXc = false;
		const _subcommandTermnTVP6JZ = () => { return _returnValuevpb2NXc };
		const _helperrEC4V26 = {
			"sortSubcommands": _sortSubcommandsWX0JvB4,
		"subcommandTerm": _subcommandTermnTVP6JZ
	}
		const _returnValueqUClhO8 = await _HelpgKfnxij.longestSubcommandTermLength(_cmdautdsq, _helperrEC4V26)
	});

	it('test for Help', async () => {
		const _Helpq1ngdx = new Help()
		const _returnValuebPLmGbJ = undefined;
		const _matchZdFUZR3 = () => { return _returnValuebPLmGbJ };
		const _returnValuefJLDLQx = {
		
	}
		const _substrao7z91H = () => { return _returnValuefJLDLQx };
		const _strLhZuMQh = {
			"match": _matchZdFUZR3,
		"substr": _substrao7z91H
	}
		const _widthA2jLoO4 = 5.996636293112019;
		const _indentyHlIg3x = 7.170834946205755;
		const _minColumnWidthWYGAGW7 = 3.0312092194271667;
		const _returnValueg6n5SEN = await _Helpq1ngdx.wrap(_strLhZuMQh, _widthA2jLoO4, _indentyHlIg3x, _minColumnWidthWYGAGW7)
		const _arrayValueqeLf62p = null;
		const _arrayValueH8woLWO = null;
		const _cmduBoVzFH = [_arrayValueqeLf62p, _arrayValueH8woLWO]
		const _returnValueROM6vNs = await _Helpq1ngdx.visibleArguments(_cmduBoVzFH)
		const _returnValueWi5P1gu = null;
		const _returnValueX3N6ZtH = () => { return _returnValueWi5P1gu };
		const _cmdZvz9fXs = () => { return _returnValueX3N6ZtH };
		const _returnValueaWle0iD = await _Helpq1ngdx.subcommandTerm(_cmdZvz9fXs)
		const __nameIjNNbgK = {
		
	}
		const __aliasesE8GUwxK = {
		
	}
		const _returnValueJQf4k1N = -3.3730781781858177;
		const _parentuNhyqJR = () => { return _returnValueJQf4k1N };
		const _returnValueK7KJ5XG = null;
		const _returnValuehp2bDDk = () => { return _returnValueK7KJ5XG };
		const _usageAkRNazD = () => { return _returnValuehp2bDDk };
		const _cmdThHaLvN = {
			"_name": __nameIjNNbgK,
		"_aliases": __aliasesE8GUwxK,
		"parent": _parentuNhyqJR,
		"usage": _usageAkRNazD
	}
		const _returnValueTF8r4Lx = await _Helpq1ngdx.commandUsage(_cmdThHaLvN)
		const _cmdQYsunst = undefined;
		const _helperWEsI1Ws = "1O14w7qOTrKeRtNOKyPelC9T4ErCF743LjiY7Tggp1PK";
		const _returnValueXQIZmr3 = await _Helpq1ngdx.longestSubcommandTermLength(_cmdQYsunst, _helperWEsI1Ws)
	});

	it('test for Help', async () => {
		const _Helps8nyRuM = new Help()
		const _flagsjmHJVaY = "VJkdttl1SVgeYtfFWu51T4FoMT3XaLYkon4QgARqxmthuKSCNZ78xWnAuLHKjcNoqgsa2bawqJfHJmCDFvv";
		const _optionocYjxXP = {
			"flags": _flagsjmHJVaY
	}
		const _returnValueUUgECzr = await _Helps8nyRuM.optionTerm(_optionocYjxXP)
		const _cmdm5LomkC = undefined;
		const _helper9lgqrY = "JrpALvJLdWCOFbu2Qz1H3BX98nJga5VjxUg8Ky3LvL3pljm01";
		const _returnValuedv7Eodh = await _Helps8nyRuM.longestArgumentTermLength(_cmdm5LomkC, _helper9lgqrY)
		const _descriptionk0s2E9p = undefined;
		const _cmdezgoNn = {
			"description": _descriptionk0s2E9p
	}
		const _returnValueaBJfLpD = await _Helps8nyRuM.commandDescription(_cmdezgoNn)
	});

	it('test for Help', async () => {
		const _HelpEYMosz0 = new Help()
		const _cmdnMRa7bA = "LMWxIqppmxV6UOQmEFbGNer44g3Up8rVOd52QcVWQVvaCTx0FuOgnZTyUy1";
		const _returnValuej407pE = await _HelpEYMosz0.visibleOptions(_cmdnMRa7bA)
		const _argumentOdoTHyC = "Cddz";
		const _returnValueM8Nq5iq = await _HelpEYMosz0.argumentDescription(_argumentOdoTHyC)
		const _cmdrWtIJRu = undefined;
		const _sortSubcommandsoivNnUK = -0.5486120664099019;
		const _arrayValueh285pTz = -2.4413558086041647;
		const _arrayValuelIn5N3k = null;
		const _returnValueqJYcyot = [_arrayValueh285pTz, _arrayValuelIn5N3k]
		const _subcommandTermMjXDKNt = () => { return _returnValueqJYcyot };
		const _helperCsi1peZ = {
			"sortSubcommands": _sortSubcommandsoivNnUK,
		"subcommandTerm": _subcommandTermMjXDKNt
	}
		const _returnValueko5ehCm = await _HelpEYMosz0.longestSubcommandTermLength(_cmdrWtIJRu, _helperCsi1peZ)
		const _arrayValue9OMGxg = "IBXHmQkjDRKdCnpwOUd3RSV3tROYnIZjvfC2QpFh24QTBRCpTf4aWpT6ZqjBc";
		const _arrayValuefojn5f1 = -0.04192774775730257;
		const _returnValueUQnF4M = undefined;
		const _arrayValueP8LHNZU = () => { return _returnValueUQnF4M };
		const _returnValueMv0gCzE = [_arrayValue9OMGxg, _arrayValuefojn5f1, _arrayValueP8LHNZU]
		const _flagsNOvBnYm = () => { return _returnValueMv0gCzE };
		const _descriptionKIr2brc = undefined;
		const _cmdh4YUa3Q = new Option(_flagsNOvBnYm, _descriptionKIr2brc)
		const _arrayValueUCacoDT = "YXrwYMAMQpkesPFQDWHqxLMJTsAkd0aOtvtHHKvldli7I7v1Lqu0Et9kO3T";
		const _arrayValueW2dLZC6 = "LxcLqQHWXcokbwJFnIkv5jIKe91B2So7b0pHdHzrVLhYEaKd88rA8eMnrjKhwrMU3erOX3rQa1U6uEob";
		const _valuesetMvIVY = [_arrayValueUCacoDT, _arrayValueW2dLZC6]
		const _returnValueM5TahMf = await _cmdh4YUa3Q.choices(_valuesetMvIVY)
		const _returnValueDfqI5S = false;
		const _valuesk7y8yTQ = () => { return _returnValueDfqI5S };
		const _returnValueX7sRA0D = await _cmdh4YUa3Q.choices(_valuesk7y8yTQ)
		const _arggRrIU9A = {
		
	}
		const _returnValuegTkysW9 = await _cmdh4YUa3Q.is(_arggRrIU9A)
		const _mandatorymFbcNJU = {
		
	}
		const _returnValuePIVXyiL = await _cmdh4YUa3Q.makeOptionMandatory(_mandatorymFbcNJU)
		const _returnValueZu3wmqx = await _HelpEYMosz0.subcommandDescription(_cmdh4YUa3Q)
	});

	it('test for Help', async () => {
		const _HelpQQBPbdl = new Help()
		const _nameqxrdU1Y = 1.8968029110713562;
		const _cmdR7g8Czm = new Command(_nameqxrdU1Y)
		const _returnValuerF5Arth = await _cmdR7g8Czm.opts()
		const _configurationqrafzwg = {
		
	}
		const _returnValueaXPM6M = await _cmdR7g8Czm.configureHelp(_configurationqrafzwg)
		const _returnValueMoLDd5U = await _HelpQQBPbdl.visibleOptions(_cmdR7g8Czm)
		const _cmdhfnKL4H = "7pAjPkdU6EvWmV9zS99fc";
		const _arrayValueeVMYPj = null;
		const _arrayValuem6M8wNv = {
		
	}
		const _arrayValueTW5X238 = undefined;
		const _helpery5IgfLS = [_arrayValueeVMYPj, _arrayValuem6M8wNv, _arrayValueTW5X238]
		const _returnValuep3E0Ho8 = await _HelpQQBPbdl.longestArgumentTermLength(_cmdhfnKL4H, _helpery5IgfLS)
		const _returnValuePN0UWgY = 5.856646212732333;
		const _cmdaR34of = () => { return _returnValuePN0UWgY };
		const _helperaAOpawP = undefined;
		const _returnValueeSyK0Ix = await _HelpQQBPbdl.formatHelp(_cmdaR34of, _helperaAOpawP)
		const _optionM70ksy = "nxUXArdPMw6q858in2CXqKfSFnADJi6ljQrzbJaFkXsKimv0P9xMGdj41KtMuOBMWK5t8j66YS847oRadoUZDtRweCUFkC2aJ";
		const _returnValuecBaKU30 = await _HelpQQBPbdl.optionTerm(_optionM70ksy)
		const _cmd2z4Ybg = "4lb4l5boMauGcjNRh9MvkjliLYK5BP3PKY7CTRX6hROlfb6a1K4zSHsmSG1QhzawpnER7N5yD59c1Bho";
		const _returnValueOnvo0Qc = await _HelpQQBPbdl.visibleArguments(_cmd2z4Ybg)
	});

	it('test for Help', async () => {
		const _HelpsVL2Muu = new Help()
		const _argChoicesl4r5CXi = {
		
	}
		const _defaultValueFdYgVo = undefined;
		const _defaultValueDescriptionXuzZBaW = 0.5919980442257788;
		const _descriptionNJnApfR = false;
		const _argumentVA5YFE = {
			"argChoices": _argChoicesl4r5CXi,
		"defaultValue": _defaultValueFdYgVo,
		"defaultValueDescription": _defaultValueDescriptionXuzZBaW,
		"description": _descriptionNJnApfR
	}
		const _returnValue7PPCBC = await _HelpsVL2Muu.argumentDescription(_argumentVA5YFE)
		const _optionuWbTl4l = null;
		const _returnValuexjmRpLe = await _HelpsVL2Muu.optionTerm(_optionuWbTl4l)
		const _cmdU4UpzvB = "ea";
		const _helperRsnXXD = "gkpMKHsYlHxes4bFrMtg6FfmDV5duUt3lFa6bQxENa5p1MX6q4WJCak9iQ3mE2oHiPGhK1iNfLI74qoEoLMz";
		const _returnValuegX5xokE = await _HelpsVL2Muu.longestSubcommandTermLength(_cmdU4UpzvB, _helperRsnXXD)
		const _nameC3gN1Ul = undefined;
		const _cmdIj9evCA = new Command(_nameC3gN1Ul)
		const _returnValuejAbRiGJ = {
		
	}
		const _configsYyHkug = () => { return _returnValuejAbRiGJ };
		const _flagsVE2s2rk = "dQ271cptUjsFBFCZY98jlM5a3zeeJ3B7OQgjVibi1jtNHjjy4jmSsKSFg69tGRaQ6HmoGQ5EPMn0vTd";
		const _description71nVkG = null;
		const _fnNH8W39P = {
		
	}
		const _defaultValuefKGNPj1 = "Tqlh24SXp3Wv71qndRwYVBb5LF4gnhmUa52bj6Zt2baX3ucTfIzWVKl4EHCy4COlajNoCsgDuc5foy1RVFTnHXPpqj6bFWyh3j";
		const _returnValuerMmAuhD = await _cmdIj9evCA._optionEx(_configsYyHkug, _flagsVE2s2rk, _description71nVkG, _fnNH8W39P, _defaultValuefKGNPj1)
		const _strK9fBKH9 = undefined;
		const _flagseN4AvjE = {
		
	}
		const _descriptionkf2YYld = {
		
	}
		const _returnValueyH5caKQ = await _cmdIj9evCA.version(_strK9fBKH9, _flagseN4AvjE, _descriptionkf2YYld)
		const _returnValuemmg2dP7 = false;
		const _includesUqrMcfT = () => { return _returnValuemmg2dP7 };
		const _flagsvCIY67y = {
			"includes": _includesUqrMcfT
	}
		const _descriptionBEkW79c = "mk2lvHXalFbGjez42uirS0hwHJbq4bwRsQRmsnQR55rQykHOAoBbfNmg1DOySKrOlow";
		const _optioncW93n5Q = new Option(_flagsvCIY67y, _descriptionBEkW79c)
		const _returnValue554cXx = "FlkAS2uhQDgiAIZcHHEIozz31DHbsHK8bjzv0JimE0tUXZnMvOirppTD6puGlxlRvEW8yyTMbPuM2nIj";
		const _valueoAusrTR = () => { return _returnValue554cXx };
		const _arrayValueuXLqqm = undefined;
		const _arrayValueiw8DCFu = undefined;
		const _arrayValuexeEgIXo = undefined;
		const _arrayValueCI8FLpy = "cYq9nvzJPFTafTsaP4Ssznj6NWuYeKt9m9Ta6dpJ1Thy8ceicOv3Gpek6RjbTEIgAYjW";
		const _arrayValuecOYqHRj = undefined;
		const _arrayValuevIZueIw = [_arrayValueCI8FLpy, _arrayValuecOYqHRj]
		const _arrayValueXcGF6Hj = [_arrayValueuXLqqm, _arrayValueiw8DCFu, _arrayValuexeEgIXo, _arrayValuevIZueIw]
		const _previousKRVjMVZ = [_arrayValueXcGF6Hj]
		const _returnValuevJJgE38 = await _optioncW93n5Q._concatValue(_valueoAusrTR, _previousKRVjMVZ)
		const _mandatorycnD9Lma = false;
		const _returnValueN21XJBr = await _optioncW93n5Q.makeOptionMandatory(_mandatorycnD9Lma)
		const _valueCPpc4oP = undefined;
		const _descriptionNagJLAo = undefined;
		const _returnValueh4Soi0U = await _optioncW93n5Q.default(_valueCPpc4oP, _descriptionNagJLAo)
		const _returnValueEhZf2zd = await _optioncW93n5Q.name()
		const _hideOGJz4xN = true;
		const _returnValuePB0ObKg = await _optioncW93n5Q.hideHelp(_hideOGJz4xN)
		const _returnValueId1e6Tz = await _cmdIj9evCA.optionMissingArgument(_optioncW93n5Q)
		const _returnValueutFt6WX = await _HelpsVL2Muu.visibleOptions(_cmdIj9evCA)
	});

	it('test for Help', async () => {
		const _HelpCimWDC = new Help()
		const _cmdoUFoNRM = false;
		const _helperttVSbyD = []
		const _returnValueV6ubrxl = await _HelpCimWDC.longestOptionTermLength(_cmdoUFoNRM, _helperttVSbyD)
		const _returnValuep79138f = undefined;
		const _arrayValue9U0QMI = () => { return _returnValuep79138f };
		const _arrayValueizJaYbS = undefined;
		const _arrayValueKxia267 = null;
		const _arrayValuerrlUAMo = [_arrayValueizJaYbS, _arrayValueKxia267]
		const _nameb2ZLlJ = [_arrayValue9U0QMI, _arrayValuerrlUAMo]
		const _descriptionBtTbvoR = {
		
	}
		const _cmda4o3Zn9 = new Argument(_nameb2ZLlJ, _descriptionBtTbvoR)
		const _returnValueLzsWJ0F = await _cmda4o3Zn9.argRequired()
		const _valuesWfb9VNH = 9.482261346117806;
		const _returnValueXdZE4Qr = await _cmda4o3Zn9.choices(_valuesWfb9VNH)
		const _returnValueTOU84zr = await _HelpCimWDC.commandDescription(_cmda4o3Zn9)
	});

	it('test for Help', async () => {
		const _HelpWma2um0 = new Help()
		const _arrayValueNy5dBvA = -0.47231177448996675;
		const _cmdrrJvLCB = [_arrayValueNy5dBvA]
		const _returnValueps9o4nc = await _HelpWma2um0.subcommandTerm(_cmdrrJvLCB)
		const _cmdvvLLiZy = undefined;
		const _helperKGm8IIV = "rRMnE5fHQh62bs2UmERqcQYKBF8NGY";
		const _returnValueE6lqlzc = await _HelpWma2um0.longestOptionTermLength(_cmdvvLLiZy, _helperKGm8IIV)
		const _cmdaqAhaIa = true;
		const _returnValueE5YRGN0 = undefined;
		const _longestOptionTermLengthlKhurwa = () => { return _returnValueE5YRGN0 };
		const _returnValueDYnGNmY = "JOb2PXi0VXb3fcC";
		const _longestSubcommandTermLengthcVdLbzf = () => { return _returnValueDYnGNmY };
		const _returnValueOj5Vqq = 5.537531770570119;
		const _longestArgumentTermLengthnedOrhO = () => { return _returnValueOj5Vqq };
		const _helperBJov6l7 = {
			"longestOptionTermLength": _longestOptionTermLengthlKhurwa,
		"longestSubcommandTermLength": _longestSubcommandTermLengthcVdLbzf,
		"longestArgumentTermLength": _longestArgumentTermLengthnedOrhO
	}
		const _returnValueriMIwDe = await _HelpWma2um0.padWidth(_cmdaqAhaIa, _helperBJov6l7)
	});

	it('test for Help', async () => {
		const _HelpnT8JW7r = new Help()
		const _cmdDTcNCh = "GzQGsYmHl6Wk9gdNqv2INsZjOuiYWdJoBCUWQU7P3k7EsgrMuOPqVgJy";
		const _returnValueSP4RfO = await _HelpnT8JW7r.commandUsage(_cmdDTcNCh)
	});

	it('test for Help', async () => {
		const _HelpjMKmTRk = new Help()
		const _cmdHlVqYca = true;
		const _returnValueAXWWqWV = true;
		const _arrayValueRU2XcLy = () => { return _returnValueAXWWqWV };
		const _arrayValueBLeSQuc = "2SDg48Tx0ZU3PvEzYEWDwChuxPe4jXErLVZAN8txsJPlpsoFBkG4F";
		const _arrayValueDwvrYoB = "skehv78Yr1ibLAJipQGsOO1RHA4XympN7s0vcvIDQ4zC8x8sH6BvrByxen3L1lDwUCXctAaM4A0AnRPGxTcW2tIXjB0";
		const _arrayValueEURorlH = [_arrayValueBLeSQuc, _arrayValueDwvrYoB]
		const _arrayValueRJSE40I = [_arrayValueRU2XcLy, _arrayValueEURorlH]
		const _returnValuefwlUgzk = [_arrayValueRJSE40I]
		const _visibleOptionsLq4Y16D = () => { return _returnValuefwlUgzk };
		const _returnValueVXUJpk = false;
		const _returnValuea3T50CN = () => { return _returnValueVXUJpk };
		const _optionTermy53rR4T = () => { return _returnValuea3T50CN };
		const _helperdYLtW0Q = {
			"visibleOptions": _visibleOptionsLq4Y16D,
		"optionTerm": _optionTermy53rR4T
	}
		const _returnValuecWfg6U8 = await _HelpjMKmTRk.longestOptionTermLength(_cmdHlVqYca, _helperdYLtW0Q)
		const _cmdvzg603q = true;
		const _arrayValuejVqQET2 = {
		
	}
		const _arrayValuezKfgRsb = "QBeskHeeCk1KWSrLK6RqWC8wPsVKk0iAvrrLR7sEB6XOaXrsHGgGW7FcUAxd9JPC7p51W9PNcbJK";
		const _helperL1Q3NnA = [_arrayValuejVqQET2, _arrayValuezKfgRsb]
		const _returnValueBk0bIl = await _HelpjMKmTRk.formatHelp(_cmdvzg603q, _helperL1Q3NnA)
	});

	it('test for Help', async () => {
		const _HelpDK9fWts = new Help()
		const _returnValuer6QlMC = 5.558927097247173;
		const _argumentNjORo5e = () => { return _returnValuer6QlMC };
		const _returnValueWhYlohi = await _HelpDK9fWts.argumentTerm(_argumentNjORo5e)
		const _arrayValueBz5SaxI = null;
		const _nameRSFt4av = [_arrayValueBz5SaxI]
		const _descriptionCmG3E3k = "kfFgxV1NnqX53rt7sUHgJPPqTX3P";
		const _argumentU4bfDIn = new Argument(_nameRSFt4av, _descriptionCmG3E3k)
		const _returnValueegyXvlT = await _argumentU4bfDIn.name()
		const _returnValueIPPuG1o = "1sqzVNWUSdTnojtjVawGKi3tY66Qm8VZgyOs";
		const _valueX1m5CcG = () => { return _returnValueIPPuG1o };
		const _descriptionRvoANP = undefined;
		const _returnValuer5J0nV = await _argumentU4bfDIn.default(_valueX1m5CcG, _descriptionRvoANP)
		const _returnValueligEDW6 = await _argumentU4bfDIn.argRequired()
		const _fnMXlMSu2 = undefined;
		const _returnValueGkUF2k = await _argumentU4bfDIn.argParser(_fnMXlMSu2)
		const _returnValueVjQpevN = await _HelpDK9fWts.argumentDescription(_argumentU4bfDIn)
		const _nameTdzXBZs = -7.308882908575694;
		const _cmd0D8LA2 = new Command(_nameTdzXBZs)
		const _storeAsPropertiesLV3eoxb = false;
		const _returnValueiwa3Cc4 = await _cmd0D8LA2.storeOptionsAsProperties(_storeAsPropertiesLV3eoxb)
		const _exitCodeMRjtx4z = "3";
		const _code0lputB = 5.5561419233835565;
		const _messageXwBZVNW = -1.538511174373248;
		const _returnValueeLr6FhF = await _cmd0D8LA2._exit(_exitCodeMRjtx4z, _code0lputB, _messageXwBZVNW)
		const _commandNameWnufI2 = {
		
	}
		const _returnValueyW1pqy3 = null;
		const _concatB48eqDq = () => { return _returnValueyW1pqy3 };
		const _operandsnBz7MJ = {
			"concat": _concatB48eqDq
	}
		const _unknownAlWe7dW = "RyLJO1qc3k9gUBXr8pv2mqPviWh23ave9MDYdtyFGl8qjJZo1pMCKq8etjoFJdSaxUgq8ECOGS8U1gxlCDS9qrSqMieqaz1";
		const _returnValueVONwe1u = await _cmd0D8LA2._dispatchSubcommand(_commandNameWnufI2, _operandsnBz7MJ, _unknownAlWe7dW)
		const _returnValuehdMx5Ie = await _HelpDK9fWts.subcommandTerm(_cmd0D8LA2)
	});

	it('test for Help', async () => {
		const _HelpaAlUd1F = new Help()
		const _returnValueb7x8zbZ = undefined;
		const _slicejN5PQH0 = () => { return _returnValueb7x8zbZ };
		const _nameZnJxIEs = {
			"slice": _slicejN5PQH0
	}
		const _descriptioneq3qaMM = null;
		const _argumentJaoYvsR = new Argument(_nameZnJxIEs, _descriptioneq3qaMM)
		const _valueixvwF2V = undefined;
		const _previousKiOR1Aq = -3.4384743232765373;
		const _returnValuetCw36z = await _argumentJaoYvsR._concatValue(_valueixvwF2V, _previousKiOR1Aq)
		const _returnValueRk0EWha = await _argumentJaoYvsR.argRequired()
		const _fntWbSLZk = undefined;
		const _returnValueZG5fIgJ = await _argumentJaoYvsR.argParser(_fntWbSLZk)
		const _returnValueBPJnBX5 = await _HelpaAlUd1F.argumentDescription(_argumentJaoYvsR)
	});

	it('test for Help', async () => {
		const _HelpOEBld0m = new Help()
		const _returnValuegJ993kv = 8.873699446660396;
		const _argumentzc4gciI = () => { return _returnValuegJ993kv };
		const _returnValueMwkBuOx = await _HelpOEBld0m.argumentDescription(_argumentzc4gciI)
		const __nameQPx1T5C = 3.428094375047854;
		const __aliasesNuoT3TN = {
		
	}
		const _parentG1svSCr = {
		
	}
		const _returnValuefziHTp6 = true;
		const _usagexx8eIkK = () => { return _returnValuefziHTp6 };
		const _cmda3XqLbG = {
			"_name": __nameQPx1T5C,
		"_aliases": __aliasesNuoT3TN,
		"parent": _parentG1svSCr,
		"usage": _usagexx8eIkK
	}
		const _returnValuemvWS8Bm = await _HelpOEBld0m.commandUsage(_cmda3XqLbG)
	});

	it('test for Help', async () => {
		const _HelpqOpe2G = new Help()
		const _optionN7122cq = "uGSH3HFCyTgBLdJxsMDo0tvF7eLbxwDjAJgBAyrke8diJCOraWefr9FSlVU8EfUbcS8vJh79lJa";
		const _returnValueuqAuQzw = await _HelpqOpe2G.optionDescription(_optionN7122cq)
		const _returnValuePaOkdde = null;
		const _descriptionNwvqSC2 = () => { return _returnValuePaOkdde };
		const _cmdx0nz4nM = {
			"description": _descriptionNwvqSC2
	}
		const _returnValueJ0tiU6k = await _HelpqOpe2G.commandDescription(_cmdx0nz4nM)
		const _cmdAWKeZCM = -0.14972216560308027;
		const _helperqyOgQAo = "UCTtOhHhAVhWEUaq0Ja6lSeL98QnSKYWUBKYngPMQQ1vIyAeKUlfPPywoeDBk9I68E4AOcNwuBmFHFJYX9AVLF";
		const _returnValueJ9fNCUk = await _HelpqOpe2G.longestSubcommandTermLength(_cmdAWKeZCM, _helperqyOgQAo)
		const _cmdllnB2Sh = 1.1466068560092797;
		const _returnValueLTDfwZR = undefined;
		const _visibleOptionsQyB4B15 = () => { return _returnValueLTDfwZR };
		const _returnValueL82WTEz = -9.239524890537927;
		const _optionTermrUWj8JO = () => { return _returnValueL82WTEz };
		const _helperyuWwkXz = {
			"visibleOptions": _visibleOptionsQyB4B15,
		"optionTerm": _optionTermrUWj8JO
	}
		const _returnValuevaCQuH = await _HelpqOpe2G.longestOptionTermLength(_cmdllnB2Sh, _helperyuWwkXz)
	});

	it('test for Help', async () => {
		const _HelpFmHeeBo = new Help()
		const _argChoicesVzPlhJ = {
		
	}
		const _negateKWuFdV = null;
		const _defaultValueyPh7KXo = undefined;
		const _defaultValueDescriptiongbF5zb5 = {
		
	}
		const _envVarkTeDlh5 = undefined;
		const _arrayValuePWo8L7z = false;
		const _arrayValueccdV9au = "qwmshelTxqE2I2w4we9W0tJ5w";
		const _descriptionfkvxlzf = [_arrayValuePWo8L7z, _arrayValueccdV9au]
		const _optionM6w9op0 = {
			"argChoices": _argChoicesVzPlhJ,
		"negate": _negateKWuFdV,
		"defaultValue": _defaultValueyPh7KXo,
		"defaultValueDescription": _defaultValueDescriptiongbF5zb5,
		"envVar": _envVarkTeDlh5,
		"description": _descriptionfkvxlzf
	}
		const _returnValueBawlUQO = await _HelpFmHeeBo.optionDescription(_optionM6w9op0)
	});

	it('test for Help', async () => {
		const _HelpcIWkpV = new Help()
		const _strDSjs2JQ = "IeuKUyEHfLCoqxdLMfl6HrRiTqUBM";
		const _widthwUlsD1R = 7.476215073079448;
		const _indentbx0NdZl = -3.5525955247934737;
		const _minColumnWidthoTc2Am6 = -2.7992032942282883;
		const _returnValueyZx8nOe = await _HelpcIWkpV.wrap(_strDSjs2JQ, _widthwUlsD1R, _indentbx0NdZl, _minColumnWidthoTc2Am6)
		const _arrayValuewmfYIiq = "7PpXEOHie4GSVU3doAJhDdCYpAq6RIiTJRTJoc7cwmtoqRvP1NtXaC9Dg5Q3w0GcpTJicvPlJQoESTjJ";
		const _cmdSDdlhU1 = [_arrayValuewmfYIiq]
		const _arrayValueUFiJQHY = undefined;
		const _arrayValueJ06hgYC = null;
		const _arrayValuehfxxt8 = undefined;
		const _arrayValueU79KnCj = {
		
	}
		const _arrayValueHTNrqBe = [_arrayValueUFiJQHY, _arrayValueJ06hgYC, _arrayValuehfxxt8, _arrayValueU79KnCj]
		const _helpernYiNEnT = [_arrayValueHTNrqBe]
		const _returnValueL19ZKPf = await _HelpcIWkpV.formatHelp(_cmdSDdlhU1, _helpernYiNEnT)
		const _returnValuehILbTO4 = null;
		const _names8QBDUW = () => { return _returnValuehILbTO4 };
		const _argumentRQvQdOU = {
			"name": _names8QBDUW
	}
		const _returnValuebLcrSSR = await _HelpcIWkpV.argumentTerm(_argumentRQvQdOU)
		const __nameJAAEA9F = 4.305418745407234;
		const __aliasesq5vrmar = {
		
	}
		const _parentrjIx4LC = {
		
	}
		const _returnValueGTueSap = true;
		const _usagetxj1bmv = () => { return _returnValueGTueSap };
		const _cmdSF9Qsgx = {
			"_name": __nameJAAEA9F,
		"_aliases": __aliasesq5vrmar,
		"parent": _parentrjIx4LC,
		"usage": _usagetxj1bmv
	}
		const _returnValueYpi2kJN = await _HelpcIWkpV.commandUsage(_cmdSF9Qsgx)
	});

	it('test for Help', async () => {
		const _HelpVzD1rBI = new Help()
		const _nameOUUhofl = true;
		const _cmdiqoEEFg = new Command(_nameOUUhofl)
		const _returnValueIQLYSB = await _cmdiqoEEFg._checkForMissingMandatoryOptions()
		const _aliasCFC5dBz = {
		
	}
		const _returnValuea8JCss5 = await _cmdiqoEEFg.alias(_aliasCFC5dBz)
		const _arrayValueqejjsI = undefined;
		const _arrayValueZILJtgi = true;
		const _nameThVjb9r = [_arrayValueqejjsI, _arrayValueZILJtgi]
		const _returnValuelF8UIB1 = await _cmdiqoEEFg.createCommand(_nameThVjb9r)
		const _returnValueEtfdPRB = await _HelpVzD1rBI.subcommandTerm(_cmdiqoEEFg)
		const _cmd5gcrxI = undefined;
		const _arrayValueoj983y9 = null;
		const _returnValueTUX2aTz = [_arrayValueoj983y9]
		const _visibleOptionsOWjHdt2 = () => { return _returnValueTUX2aTz };
		const _returnValuecYfTlMG = 2.4145222429763873;
		const _optionTermazl3Zn = () => { return _returnValuecYfTlMG };
		const _helperhzBFLpH = {
			"visibleOptions": _visibleOptionsOWjHdt2,
		"optionTerm": _optionTermazl3Zn
	}
		const _returnValuenfq0yl1 = await _HelpVzD1rBI.longestOptionTermLength(_cmd5gcrxI, _helperhzBFLpH)
		const _cmdzzBJx7o = "1uZQn2kQpHMC9Sl";
		const _returnValueMYPlWHt = "ZnTtS3rpWkMmkd7FwbYhk7x9v9sPH";
		const _helpermAjQx0P = () => { return _returnValueMYPlWHt };
		const _returnValueVkJ3mcx = await _HelpVzD1rBI.longestSubcommandTermLength(_cmdzzBJx7o, _helpermAjQx0P)
		const _cmdeRrMjn2 = true;
		const _returnValueDq2qtvW = null;
		const _helperHPcwhfc = () => { return _returnValueDq2qtvW };
		const _returnValueXL4PvFa = await _HelpVzD1rBI.longestOptionTermLength(_cmdeRrMjn2, _helperHPcwhfc)
		const _arrayValuegiuobO = 4.433842963972044;
		const _cmdYlzcQI = [_arrayValuegiuobO]
		const _returnValueNA5GPnk = false;
		const _visibleOptionsRz6f0Hg = () => { return _returnValueNA5GPnk };
		const _returnValueNOZx7Ll = []
		const _optionTermYPilcge = () => { return _returnValueNOZx7Ll };
		const _helpercRZf8YH = {
			"visibleOptions": _visibleOptionsRz6f0Hg,
		"optionTerm": _optionTermYPilcge
	}
		const _returnValuehsJxSHe = await _HelpVzD1rBI.longestOptionTermLength(_cmdYlzcQI, _helpercRZf8YH)
	});

	it('test for Help', async () => {
		const _HelpnLCAfqG = new Help()
		const _returnValuebIJxxn = "zPlnL6qVo3y9CbdMrjOBfzAqDUimRGt3EhXEJyArlV1KH3zrNWZVhmo5Ek9csJEfqj8sYZWuLh";
		const _matchlJVorfb = () => { return _returnValuebIJxxn };
		const _returnValuejJ8ASB = "KhMl3GZhPBQasefYv8yhNbPJaK3r6DzAG7nlsW768eEio2Pa16SKCBxkjFt2sQ9t7qpOWvreDWX3A3XBYrH5mQajzaO7";
		const _substrAWXqdQL = () => { return _returnValuejJ8ASB };
		const _struVw4BSl = {
			"match": _matchlJVorfb,
		"substr": _substrAWXqdQL
	}
		const _widthT6XbjgG = 3.1439221484535125;
		const _indentgcP4Yz = -5.551677326421272;
		const _minColumnWidthmpzduHS = 2.871246747749769;
		const _returnValuexx29hXu = await _HelpnLCAfqG.wrap(_struVw4BSl, _widthT6XbjgG, _indentgcP4Yz, _minColumnWidthmpzduHS)
	});

	it('test for Help', async () => {
		const _HelpOokjzQZ = new Help()
		const _arrayValueIShrsOi = undefined;
		const _arrayValuevNCMZK = {
		
	}
		const _arrayValueSWGCJ9i = [_arrayValuevNCMZK]
		const _nameWO5D5yA = [_arrayValueIShrsOi, _arrayValueSWGCJ9i]
		const _descriptionUiB6PNd = "GOxRI6xfbExDIM7oOgYtRnBocDAELt4YFYVs9w";
		const _optionKxaDBN = new Argument(_nameWO5D5yA, _descriptionUiB6PNd)
		const _returnValuexQK3eLd = await _optionKxaDBN.name()
		const _arrayValueYxibIws = true;
		const _arrayValuetu4PXQV = "TsigiGJlsLOobE0HRUuRAJLwnoUcorSbXlKthwVU1GZjoHUN9CqWF8xlGAHXZqViql09FwMKca0EBF8GYuBieDlXRAhE2etf";
		const _valuesrO0gEiq = [_arrayValueYxibIws, _arrayValuetu4PXQV]
		const _returnValueiJVLTQX = await _optionKxaDBN.choices(_valuesrO0gEiq)
		const _returnValueEekcOBw = await _HelpOokjzQZ.optionDescription(_optionKxaDBN)
		const _arrayValueODXz7pI = undefined;
		const _arrayValueghBST8O = undefined;
		const _arrayValueudc71N3 = "XEaz6XQwrn7HwTVHvYmNqIRdoKN9Fu7o7imiGUBG7KB54LjRGIzPkQ7ojNwQuU1ZCmPHmAlRtEijS0EwL4R2mTLMW9dUg0";
		const _flagsZ5uAjJY = [_arrayValueODXz7pI, _arrayValueghBST8O, _arrayValueudc71N3]
		const _descriptionJ0hatl = null;
		const _optionsiebNmL = new Option(_flagsZ5uAjJY, _descriptionJ0hatl)
		const _argvMKJnk = "mn13RmBm5MaQgtfhvhcb6UJlvX943jtdDdsfmYJrfincOvlcNndDV46tCRe8KdN";
		const _returnValueSCSngB3 = await _optionsiebNmL.is(_argvMKJnk)
		const _fnohBsym = undefined;
		const _returnValueBd6VK88 = await _optionsiebNmL.argParser(_fnohBsym)
		const _returnValueMGtXPn0 = await _optionsiebNmL.name()
		const _returnValuenqoXb5Q = await _HelpOokjzQZ.optionDescription(_optionsiebNmL)
	});

	it('test for Help', async () => {
		const _Helpn7mtIMd = new Help()
		const _argChoicesSMWanaQ = {
		
	}
		const _negateRAlXXjs = true;
		const _defaultValuee8LRf7k = undefined;
		const _defaultValueDescriptioneaJys6h = {
		
	}
		const _envVarmktXn1C = false;
		const _arrayValue9PQQCu = undefined;
		const _arrayValueY3JtUY6 = undefined;
		const _returnValueqhw6NzW = "LMMn6NhNhpSvFWN3E";
		const _arrayValueOxabLSB = () => { return _returnValueqhw6NzW };
		const _descriptionz8tJKTU = [_arrayValue9PQQCu, _arrayValueY3JtUY6, _arrayValueOxabLSB]
		const _optionufK5CQ = {
			"argChoices": _argChoicesSMWanaQ,
		"negate": _negateRAlXXjs,
		"defaultValue": _defaultValuee8LRf7k,
		"defaultValueDescription": _defaultValueDescriptioneaJys6h,
		"envVar": _envVarmktXn1C,
		"description": _descriptionz8tJKTU
	}
		const _returnValueUoES2Xt = await _Helpn7mtIMd.optionDescription(_optionufK5CQ)
		const _cmdWl9OPWX = {
		
	}
		const _returnValueBJldtQh = false;
		const _helperoNfgbWm = () => { return _returnValueBJldtQh };
		const _returnValueqahZVP3 = await _Helpn7mtIMd.longestArgumentTermLength(_cmdWl9OPWX, _helperoNfgbWm)
		const _cmdyngSPGQ = "IMgVFjdgho";
		const _returnValueFSBqFaD = await _Helpn7mtIMd.subcommandTerm(_cmdyngSPGQ)
	});

	it('test for Help', async () => {
		const _HelpHwanzm = new Help()
		const _returnValueX4pIVxK = undefined;
		const _argumentKkysZ85 = () => { return _returnValueX4pIVxK };
		const _returnValueBKQHkhF = await _HelpHwanzm.argumentDescription(_argumentKkysZ85)
		const _cmdJtINEte = undefined;
		const _returnValuenliXHmO = {
		
	}
		const _longestOptionTermLengthOC219EJ = () => { return _returnValuenliXHmO };
		const _returnValueldw2VI6 = {
		
	}
		const _longestSubcommandTermLengthvAHjHB = () => { return _returnValueldw2VI6 };
		const _arrayValuejTLu9mO = null;
		const _arrayValuecrjnKaC = "6XRubuKPwwpnju71cnGbt7UD43VxZPue39DVF1hjeMsreGy7HCBFnl5LRxCNql5ou";
		const _returnValueuvfInuc = [_arrayValuejTLu9mO, _arrayValuecrjnKaC]
		const _longestArgumentTermLengthWDgPvn2 = () => { return _returnValueuvfInuc };
		const _helperoeZpN9 = {
			"longestOptionTermLength": _longestOptionTermLengthOC219EJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthvAHjHB,
		"longestArgumentTermLength": _longestArgumentTermLengthWDgPvn2
	}
		const _returnValueml4DEue = await _HelpHwanzm.padWidth(_cmdJtINEte, _helperoeZpN9)
		const _flagsZZp41IA = "8swYoR0fzBvw3Q399me";
		const _returnValuehrGGD1h = {
		
	}
		const _descriptionD1jii4n = () => { return _returnValuehrGGD1h };
		const _optionJyROL2B = new Option(_flagsZZp41IA, _descriptionD1jii4n)
		const _fnWkcfzo = undefined;
		const _returnValueUxlZylt = await _optionJyROL2B.argParser(_fnWkcfzo)
		const _arrayValueELj1VeV = null;
		const _arrayValueg3YDp9 = "XgnGaHFktlpTyHLzWwt7vbkLNy96KogiueXy5doEMoCKYpr1YApYtFSF7E1TAaFOMQtMa0FEtOPMSBeS6w5";
		const _arrayValueiL0knkK = null;
		const _arrayValueDzNO1D = {
		
	}
		const _arrayValuedhf0HXf = [_arrayValueiL0knkK, _arrayValueDzNO1D]
		const _arrayValueoPIpqXC = "DNu3cCKJezkrmAXtIzzPE9GwOShKKdskBj92r2UNynaQrtPaUiX";
		const _mandatoryqd0wy6 = [_arrayValueELj1VeV, _arrayValueg3YDp9, _arrayValuedhf0HXf, _arrayValueoPIpqXC]
		const _returnValueuQrx4Bz = await _optionJyROL2B.makeOptionMandatory(_mandatoryqd0wy6)
		const _fnoiDnhk = undefined;
		const _returnValueycvYloP = await _optionJyROL2B.argParser(_fnoiDnhk)
		const _arghkODFqH = "jjupePVcIap7CTjUbAAuScZrpWXFMpT6OFZdLn";
		const _returnValueDzDyCZI = await _optionJyROL2B.is(_arghkODFqH)
		const _returnValueVQJvAx2 = await _HelpHwanzm.optionDescription(_optionJyROL2B)
	});

	it('test for Help', async () => {
		const _Help8A8uQS = new Help()
		const _namezd23LPy = "cGbRXDjDKUy78DKgtACiDjTIcbJR475FwsVqU4U2rV86E";
		const _descriptionuqX5xkT = null;
		const _optionmwp1nJL = new Argument(_namezd23LPy, _descriptionuqX5xkT)
		const _valueXESqQsL = "ds4gijNEIZGXVovBaR7CHjiRaMDXrUgVWskIyXEgqFRaCQYEhskvCfNhD3xBPC85OJf3zwmwWpdJgebFxhd";
		const _descriptionSnte4HM = {
		
	}
		const _returnValuefI1iXV5 = await _optionmwp1nJL.default(_valueXESqQsL, _descriptionSnte4HM)
		const _returnValueusG8msr = await _Help8A8uQS.optionDescription(_optionmwp1nJL)
		const _cmdnuDf7qp = "E9SHNGxlNMVwBUkz9HqKSF7HxHV1KxMhJwHHhDe8UsyD1pz3cY";
		const _arrayValuePLeY5S = {
		
	}
		const _arrayValuenUjmUrF = "phmh8Bw92dMYBSdjYBie9LPqvFrUam5RJauEOTSSeNWGuzzgsYnmMXgnOiKCjQ8mvG27yvLesPq8hikaoQHbjb";
		const _arrayValueeFvYoEz = "DsLfoSvHMnGWttvPjuk8YsyMO5Y3Pqe1tfzviskHV4RrqI0Lc2OYVz8iKE1Jy5hbypbmOQB8ptmI";
		const _arrayValueTLwdj0t = [_arrayValuePLeY5S, _arrayValuenUjmUrF, _arrayValueeFvYoEz]
		const _arrayValueBRbc1HJ = undefined;
		const _arrayValueMWY2gpK = "93zyJiv";
		const _arrayValueHYMqyGo = null;
		const _arrayValuePEHndYN = [_arrayValueBRbc1HJ, _arrayValueMWY2gpK, _arrayValueHYMqyGo]
		const _arrayValuebZvF00 = -6.528795122542965;
		const _arrayValueUiG9lFZ = null;
		const _arrayValueWtIvxOK = "l2xxb0OROQXc9Lc25xqBcc6ToLifZKsX6sTMjiQlOlUhVYrNCo0nQbOnyQxP77RStUBl4yZSfsONXldUkKEatFdSbT8nh9M";
		const _arrayValueKxU48zz = [_arrayValuebZvF00, _arrayValueUiG9lFZ, _arrayValueWtIvxOK]
		const _helperTOvuY4N = [_arrayValueTLwdj0t, _arrayValuePEHndYN, _arrayValueKxU48zz]
		const _returnValueelV3SLZ = await _Help8A8uQS.formatHelp(_cmdnuDf7qp, _helperTOvuY4N)
		const _arrayValuefCXjKz4 = false;
		const _arrayValueXmiBzTc = false;
		const _cmdHP811b = [_arrayValuefCXjKz4, _arrayValueXmiBzTc]
		const _returnValue8fkFBS = await _Help8A8uQS.commandUsage(_cmdHP811b)
	});

	it('test for Help', async () => {
		const _HelpRaUnavK = new Help()
		const _nameguy5Gkh = undefined;
		const _cmdZBXsAlo = new Command(_nameguy5Gkh)
		const _arrayValueFAGzsiS = undefined;
		const _arrayValuevmVhMrw = null;
		const _returnValuea745JZH = "udxvQiKkWz5FXgFukaitsifuxDNWmPLLodUxn2RBNso6vxHueonW4Iu8R4JN4CLg68FNvdhjET98VBAjVW4f7rtK6G8V8UN";
		const _arrayValueAwNRugQ = () => { return _returnValuea745JZH };
		const _arrayValueYQtL0OW = undefined;
		const _keyMcAdxQs = [_arrayValueFAGzsiS, _arrayValuevmVhMrw, _arrayValueAwNRugQ, _arrayValueYQtL0OW]
		const _returnValuehm7wDzC = await _cmdZBXsAlo.getOptionValueSource(_keyMcAdxQs)
		const _aliasCvFkdJ = undefined;
		const _returnValue0eOsjB = await _cmdZBXsAlo.alias(_aliasCvFkdJ)
		const _returnValueelraIvv = await _HelpRaUnavK.visibleCommands(_cmdZBXsAlo)
		const _cmdtlBfrAx = "TkpIBHUdRhYXXvxTMtPoQKSJBCVFPvHF3bndNE5kw7yxXpxL7d7";
		const _returnValueWhRAEad = await _HelpRaUnavK.commandDescription(_cmdtlBfrAx)
		const __namerktZKxS = "xQtCo5oEmzt92HBeuvBzfFesWPIwBI6eQVvYnnbnSIjgI4kSqPFUS95H";
		const __aliasesulSd4n = {
		
	}
		const _arrayValueRSUMfV = null;
		const _parentjul8DY = [_arrayValueRSUMfV]
		const _returnValueZt2CpN = "5Le";
		const _usageu8eOb9Y = () => { return _returnValueZt2CpN };
		const _cmdIKvX6O = {
			"_name": __namerktZKxS,
		"_aliases": __aliasesulSd4n,
		"parent": _parentjul8DY,
		"usage": _usageu8eOb9Y
	}
		const _returnValuewnyaP5N = await _HelpRaUnavK.commandUsage(_cmdIKvX6O)
	});

	it('test for Help', async () => {
		const _Helpiw5QgLV = new Help()
		const _arrayValueVaQsZ8W = "JQcC7WP4NPxdwGAzVAcIeGKhSs8lCZRustC0EUQSqe9z3GebKCnI4MpyiPPcr7SgBqrdyAQnZHEsIoWmqsvwJA";
		const _arrayValueEdyOI40 = "nX";
		const _arrayValueOL8j4P2 = null;
		const _arrayValueRFG4psv = null;
		const _arrayValueaTvnwqS = [_arrayValueVaQsZ8W, _arrayValueEdyOI40, _arrayValueOL8j4P2, _arrayValueRFG4psv]
		const _commandscVRyvQr = [_arrayValueaTvnwqS]
		const _returnValuecHhqoE = true;
		const __hasImplicitHelpCommandp9HEwlE = () => { return _returnValuecHhqoE };
		const __helpCommandnameAndArgsPKzbIcb = {
		
	}
		const _returnValueQjgNNJv = 6.031197052288128;
		const _createCommandO1f7Kl = () => { return _returnValueQjgNNJv };
		const __helpCommandDescriptionoCMJGhK = "NGN5oIUJBIXmOORGW3jRq8K7T1If9yDmq7BSxVuqXIcooQmeYhTqZFRw9q3daDvcGrjbimA0hJzyH9W1cIoLXgePqw";
		const _cmdEnhuP7o = {
			"commands": _commandscVRyvQr,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandp9HEwlE,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPKzbIcb,
		"createCommand": _createCommandO1f7Kl,
		"_helpCommandDescription": __helpCommandDescriptionoCMJGhK
	}
		const _returnValueShvAwhY = await _Helpiw5QgLV.visibleCommands(_cmdEnhuP7o)
		const _returnValueksQJPV6 = "HIZ7PI";
		const _matchFZetdce = () => { return _returnValueksQJPV6 };
		const _returnValue0kG61f = false;
		const _substrTBJQnth = () => { return _returnValue0kG61f };
		const _strI5HiVJV = {
			"match": _matchFZetdce,
		"substr": _substrTBJQnth
	}
		const _widthAcqEUwJ = 8.526139177722104;
		const _indentgdOGDf1 = -0.6581588473018272;
		const _minColumnWidthRWRBjnE = 3.0355290628932146;
		const _returnValueFOUQjs7 = await _Helpiw5QgLV.wrap(_strI5HiVJV, _widthAcqEUwJ, _indentgdOGDf1, _minColumnWidthRWRBjnE)
	});
})