export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelprahsVon = new Help()
		const _cmdtMZ4UjI = 1.348201005634948;
		const _returnValuehJ69dXe = await _HelprahsVon.visibleCommands(_cmdtMZ4UjI)
	});

	it('test for Help', async () => {
		const _HelptcQKbLJ = new Help()
		const _argChoiceshGiHrhJ = {
		
	}
		const _negatejpKxzv = undefined;
		const _defaultValueUk9Lwp3 = false;
		const _defaultValueDescriptionzE5ZuW1 = -0.6246815518164368;
		const _envVarcZ7hbZn = undefined;
		const _arrayValueeQfufXx = "3KjBYSN4";
		const _arrayValuexAATEf = 5.89620613709171;
		const _arrayValuelzMaBFg = 8.713304403061496;
		const _arrayValueC7bpInk = [_arrayValuelzMaBFg]
		const _arrayValueIrcKZaD = 6.451973813497375;
		const _arrayValuepzSEy1 = [_arrayValueeQfufXx, _arrayValuexAATEf, _arrayValueC7bpInk, _arrayValueIrcKZaD]
		const _arrayValuefLF19vu = undefined;
		const _arrayValueLVDkhna = 9.936965302424433;
		const _arrayValuerYrx4Ur = [_arrayValuepzSEy1, _arrayValuefLF19vu, _arrayValueLVDkhna]
		const _arrayValueoYH0Q3O = "uPTnVq9erJTY85GDsFIW4LRuUU4QMdpmPTDrvRwGWt8gVIEnTKAreVCIze1a8qa32gsYksdPy3z9SJ";
		const _returnValuenCOX8pr = undefined;
		const _arrayValueWA6doY8 = () => { return _returnValuenCOX8pr };
		const _descriptioni4KCxLY = [_arrayValuerYrx4Ur, _arrayValueoYH0Q3O, _arrayValueWA6doY8]
		const _optioni2DZl3H = {
			"argChoices": _argChoiceshGiHrhJ,
		"negate": _negatejpKxzv,
		"defaultValue": _defaultValueUk9Lwp3,
		"defaultValueDescription": _defaultValueDescriptionzE5ZuW1,
		"envVar": _envVarcZ7hbZn,
		"description": _descriptioni4KCxLY
	}
		const _returnValueAhkfMAV = await _HelptcQKbLJ.optionDescription(_optioni2DZl3H)
		const _returnValueOEaT0RG = 3.8367983679600766;
		const _cmdMk2xkX = () => { return _returnValueOEaT0RG };
		const _returnValueORutIBm = await _HelptcQKbLJ.commandDescription(_cmdMk2xkX)
		const _argumentvCfUP7K = "0WCB9DjjKfaXNuUUPoc2R489BmK";
		const _returnValueQjr71Z = await _HelptcQKbLJ.argumentDescription(_argumentvCfUP7K)
		const _returnValuePUEkcoX = null;
		const _cmdhMDqAl = () => { return _returnValuePUEkcoX };
		const _returnValueIgyFTh0 = await _HelptcQKbLJ.subcommandTerm(_cmdhMDqAl)
	});

	it('test for Help', async () => {
		const _Helpx8GxPEQ = new Help()
		const _argumentJPE4jZO = undefined;
		const _returnValueqY9zGUP = await _Helpx8GxPEQ.argumentTerm(_argumentJPE4jZO)
	});

	it('test for Help', async () => {
		const _HelpxI5zCQp = new Help()
		const _cmdfmLoCns = -0.29624178475363117;
		const _helperUhyPSPd = new Help()
		const _optionF5o5j9m = "";
		const _returnValueKkOJgjV = await _helperUhyPSPd.optionTerm(_optionF5o5j9m)
		const _returnValuen2duS2l = undefined;
		const _cmdbEnmlEX = () => { return _returnValuen2duS2l };
		const _returnValueTAUlzzo = await _helperUhyPSPd.visibleArguments(_cmdbEnmlEX)
		const _cmdlj5HLmV = undefined;
		const _arrayValuexTREZ6k = undefined;
		const _arrayValuevDH6VMy = undefined;
		const _arrayValueLGx4heE = null;
		const _helperWwVkc3B = [_arrayValuexTREZ6k, _arrayValuevDH6VMy, _arrayValueLGx4heE]
		const _returnValueROMmK7Q = await _helperUhyPSPd.longestOptionTermLength(_cmdlj5HLmV, _helperWwVkc3B)
		const _returnValueZy2KvF9 = await _HelpxI5zCQp.longestArgumentTermLength(_cmdfmLoCns, _helperUhyPSPd)
	});

	it('test for Help', async () => {
		const _HelphrscS1K = new Help()
		const _returnValues1km1Ey = null;
		const _cmdQSdQrp = () => { return _returnValues1km1Ey };
		const _returnValuezPorAwN = await _HelphrscS1K.subcommandTerm(_cmdQSdQrp)
		const _argumentVhj29Rf = undefined;
		const _returnValueXwSyIo = await _HelphrscS1K.argumentDescription(_argumentVhj29Rf)
		const _cmdcyWWQ1q = false;
		const _helperP50dJMJ = new Help()
		const _cmdznkhilI = null;
		const _returnValuedsWrYOY = true;
		const _visibleOptionsKCaa6xS = () => { return _returnValuedsWrYOY };
		const _returnValueTNAxNBw = false;
		const _optionTermjXp4rvs = () => { return _returnValueTNAxNBw };
		const _helperjzangHY = {
			"visibleOptions": _visibleOptionsKCaa6xS,
		"optionTerm": _optionTermjXp4rvs
	}
		const _returnValueezrK2An = await _helperP50dJMJ.longestOptionTermLength(_cmdznkhilI, _helperjzangHY)
		const _returnValuek3HUaU7 = await _HelphrscS1K.formatHelp(_cmdcyWWQ1q, _helperP50dJMJ)
	});

	it('test for Help', async () => {
		const _HelpOi7mCCP = new Help()
		const _cmdY7hGEkp = null;
		const _sortSubcommandsI21bkTy = "HkY83wh2Ty2yoIIIHtxV9Wa8UTsCroAnXsZynCd1Alq1iwsL7V78SsOFuOdLNsmnNu3ifRldoXYRKlek7rDrhkP";
		const _subcommandTermiWlf39R = undefined;
		const _helpernQaCki7 = {
			"sortSubcommands": _sortSubcommandsI21bkTy,
		"subcommandTerm": _subcommandTermiWlf39R
	}
		const _returnValuexdGZ7o7 = await _HelpOi7mCCP.formatHelp(_cmdY7hGEkp, _helpernQaCki7)
		const __argsyXfhLzQ = {
		
	}
		const __nameRauAMGe = -5.078246982580744;
		const __aliasesuUZLqE8 = {
		
	}
		const _optionsxvOTeTZ = {
		
	}
		const _cmddzqn2Qe = {
			"_args": __argsyXfhLzQ,
		"_name": __nameRauAMGe,
		"_aliases": __aliasesuUZLqE8,
		"options": _optionsxvOTeTZ
	}
		const _returnValue0A6OYh = await _HelpOi7mCCP.subcommandTerm(_cmddzqn2Qe)
		const _arrayValueGl40q1 = undefined;
		const _returnValueaifHTMm = {
		
	}
		const _arrayValueDERlpWH = () => { return _returnValueaifHTMm };
		const _returnValueH3rnNXP = [_arrayValueGl40q1, _arrayValueDERlpWH]
		const _nameEs8rpJW = () => { return _returnValueH3rnNXP };
		const _cmdpZ3qRy = new Command(_nameEs8rpJW)
		const _aliaslJsJJb8 = undefined;
		const _returnValueIxhlFp5 = await _cmdpZ3qRy.alias(_aliaslJsJJb8)
		const _arrayValueUsi0LXv = 2.1951596626885532;
		const _arrayValuewmtD9ok = null;
		const _argvKJ4Sem3 = [_arrayValueUsi0LXv, _arrayValuewmtD9ok]
		const _parseOptionsdi1e92v = null;
		const _returnValuepoNmyQo = await _cmdpZ3qRy._prepareUserArgs(_argvKJ4Sem3, _parseOptionsdi1e92v)
		const _namesrKbd6C = "LrPK6AfCCHF6gEXSJVbMUZDPTShq5vuH1yFQaSAHXpirDsAGtc1mWdloe2kRB8TABdU228Els";
		const _returnValueUdP8Y0N = await _cmdpZ3qRy.arguments(_namesrKbd6C)
		const _arrayValueyXGvrW4 = undefined;
		const _returnValueZNsNDfl = {
		
	}
		const _arrayValueXugVG6 = () => { return _returnValueZNsNDfl };
		const _arrayValueFAGoExq = null;
		const _struuHXlzS = [_arrayValueyXGvrW4, _arrayValueXugVG6, _arrayValueFAGoExq]
		const _argsDescriptionsmAsJgn = undefined;
		const _returnValuexnUNqE = await _cmdpZ3qRy.description(_struuHXlzS, _argsDescriptionsmAsJgn)
		const _returnValueIE56YKL = await _HelpOi7mCCP.visibleOptions(_cmdpZ3qRy)
		const _cmdQFx2mVe = "qVPjmUm8emACCwDKGEO3fGGnD";
		const _returnValueCnOArqv = await _HelpOi7mCCP.subcommandDescription(_cmdQFx2mVe)
	});

	it('test for Help', async () => {
		const _HelpeMy2owc = new Help()
		const _cmdr8IWHSH = {
		
	}
		const _returnValueIkrywPM = "vBzxyPTcqio4bXgn4g2UcmHUdkYfhnT1SEUg88EJRlxUr8UDrnrTJH";
		const _helperO6Hj1nG = () => { return _returnValueIkrywPM };
		const _returnValuewZsLEIr = await _HelpeMy2owc.padWidth(_cmdr8IWHSH, _helperO6Hj1nG)
		const _returnValuehhOq44A = true;
		const _cmdssFzl9 = () => { return _returnValuehhOq44A };
		const _returnValuegRMcjJj = await _HelpeMy2owc.visibleArguments(_cmdssFzl9)
		const __argsJmCNTL = {
		
	}
		const __nameP1dn2g = -2.0385245547737574;
		const __aliases458PaB = {
		
	}
		const _optionshepuVdK = {
		
	}
		const _cmdKTVYxeB = {
			"_args": __argsJmCNTL,
		"_name": __nameP1dn2g,
		"_aliases": __aliases458PaB,
		"options": _optionshepuVdK
	}
		const _returnValueI1VP2m8 = await _HelpeMy2owc.subcommandTerm(_cmdKTVYxeB)
	});

	it('test for Help', async () => {
		const _HelpktlBeOn = new Help()
		const _nameXh98EMF = "HI5XNjvD4BNWMW1iRKMkWB6XcVmhrHlWLCnm8ASjsTSzWehX31Y6ZP9m0j7Sa8br9xiNCOrBrJDwMEW9m8VRtbtkJTB3t";
		const _cmdkc9wwZh = new Command(_nameXh98EMF)
		const _argxAny03p = {
		
	}
		const _returnValueZD9Tgw0 = await _cmdkc9wwZh._findOption(_argxAny03p)
		const _returnValuep1PtdiV = await _HelpktlBeOn.commandDescription(_cmdkc9wwZh)
		const _returnValueGuQLix2 = 6.019211560655123;
		const _returnValuenk5LSuD = () => { return _returnValueGuQLix2 };
		const _argumentuBEugbm = () => { return _returnValuenk5LSuD };
		const _returnValueNBWiN6 = await _HelpktlBeOn.argumentDescription(_argumentuBEugbm)
		const _cmdN77fsc = 1.2159544756146197;
		const _returnValuenFMZPmc = undefined;
		const _helpero6Uq6IS = () => { return _returnValuenFMZPmc };
		const _returnValueKpnrr9q = await _HelpktlBeOn.longestOptionTermLength(_cmdN77fsc, _helpero6Uq6IS)
		const _returnValueMfN20sn = false;
		const _cmdZIZBLyI = () => { return _returnValueMfN20sn };
		const _returnValuew1NkIg = await _HelpktlBeOn.visibleCommands(_cmdZIZBLyI)
	});

	it('test for Help', async () => {
		const _HelpHs9vpR6 = new Help()
		const _cmdXKHR5Ph = "ksxL4";
		const _returnValueeIxSym6 = await _HelpHs9vpR6.subcommandDescription(_cmdXKHR5Ph)
		const _cmdvXdE5pV = -6.969571107477058;
		const _helperAPUpc2i = "WEAIkYNYLsLuAbjsS38d1dazNgWfXOuy1D2Q84DbkmcAyExx5BcaoiHxy2tzFxqfZ9wghTBNKbd6rm1o7Rr2aUhVRzWwTa";
		const _returnValuezW8VmCO = await _HelpHs9vpR6.longestOptionTermLength(_cmdvXdE5pV, _helperAPUpc2i)
		const _cmdx0AeDuC = undefined;
		const _returnValuewAggoO9 = await _HelpHs9vpR6.visibleOptions(_cmdx0AeDuC)
		const _returnValueLRfBBWr = "JjQowbfHvjRP1wpSbmAtVXzUjAKvU48mu64MV8";
		const _arrayValueQEnPOgz = () => { return _returnValueLRfBBWr };
		const _cmdggr6bDr = [_arrayValueQEnPOgz]
		const _arrayValueDB96cDL = false;
		const _arrayValueakUicCY = 1.5031588516791174;
		const _helperXKwVb2x = [_arrayValueDB96cDL, _arrayValueakUicCY]
		const _returnValueIWeDjGV = await _HelpHs9vpR6.longestOptionTermLength(_cmdggr6bDr, _helperXKwVb2x)
	});

	it('test for Help', async () => {
		const _HelpLAPIaqg = new Help()
		const _argChoicesVpteIFm = {
		
	}
		const _defaultValueWLXlMF1 = undefined;
		const _defaultValueDescriptionVf6t5d = null;
		const _descriptionvdsTKQO = "21wuQzN9WdlNxoUmRpDzz9aftVvdI7IEfhdJRqnJVb4XblOa2";
		const _arguments527Scb = {
			"argChoices": _argChoicesVpteIFm,
		"defaultValue": _defaultValueWLXlMF1,
		"defaultValueDescription": _defaultValueDescriptionVf6t5d,
		"description": _descriptionvdsTKQO
	}
		const _returnValueMs0mzO = await _HelpLAPIaqg.argumentDescription(_arguments527Scb)
		const _arrayValueJfnezxy = null;
		const _arrayValue7nQagT = "tS55YUnNCyuw52wTIW2HTF3wYedDPusJbFBiMhOj9hZi4NR534RzjRUaRpuNgjFK6urOKdDxMxuyjmL6RS8zeuauGhvU7d";
		const _optionSmNB1xk = [_arrayValueJfnezxy, _arrayValue7nQagT]
		const _returnValueDhFCwk3 = await _HelpLAPIaqg.optionDescription(_optionSmNB1xk)
		const _returnValuegAIkS3V = -6.787605499292317;
		const _argumentllE0yQY = () => { return _returnValuegAIkS3V };
		const _returnValuezjZi2hg = await _HelpLAPIaqg.argumentTerm(_argumentllE0yQY)
		const _cmdtvMExTh = undefined;
		const _helperSBvxIQi = "Kj7LOD0dsYRmOGKt4tyjw390ll2AgXFFdpILKAJYh3MPfn6Ofl16uAyFLGy";
		const _returnValueen2HaNH = await _HelpLAPIaqg.formatHelp(_cmdtvMExTh, _helperSBvxIQi)
		const _arrayValueXySyyGN = true;
		const _cmdK6fBH7b = [_arrayValueXySyyGN]
		const _returnValuekQ4r2ry = await _HelpLAPIaqg.visibleOptions(_cmdK6fBH7b)
	});

	it('test for Help', async () => {
		const _HelpILNv8G1 = new Help()
		const __namelySXZjs = "zLax3zLY569PEdNgMlsOHtHdIPYx9g3xh7SzXcq8LPAbiPvJuPb6H9I9qoXtlvbmKaUyX6p4tHQA";
		const __aliasesxwohthi = {
		
	}
		const _parentQVbTR9 = {
		
	}
		const _returnValueNGpeOkq = "m1N2wDrP6hqXnDUxihbIbN3AkVjShWKa5YKgJ";
		const _usageRECj9lj = () => { return _returnValueNGpeOkq };
		const _cmdWi1jcKo = {
			"_name": __namelySXZjs,
		"_aliases": __aliasesxwohthi,
		"parent": _parentQVbTR9,
		"usage": _usageRECj9lj
	}
		const _returnValueSOOyf2N = await _HelpILNv8G1.commandUsage(_cmdWi1jcKo)
		const _optionRS24CIG = "rMEc8L4BlzisiwR2hXZ5d3f0G4atTwUtsD2wvNCV";
		const _returnValuejERRKv = await _HelpILNv8G1.optionTerm(_optionRS24CIG)
	});

	it('test for Help', async () => {
		const _HelpmLDJ7wM = new Help()
		const _arrayValueYIBlBfS = -3.513706472336068;
		const _cmdeJWXvs = [_arrayValueYIBlBfS]
		const _returnValuey2DV2QR = await _HelpmLDJ7wM.visibleOptions(_cmdeJWXvs)
		const _returnValuenf4YZRU = 1.8125242311864262;
		const _nameM2rCHB = () => { return _returnValuenf4YZRU };
		const _optionCZeEcNl = new Command(_nameM2rCHB)
		const _subcommandDU3FuJn = 0.5204994156113933;
		const _args4yvJ6Q = null;
		const _returnValueRatrtC1 = await _optionCZeEcNl._executeSubCommand(_subcommandDU3FuJn, _args4yvJ6Q)
		const _returnValueB7Gb62F = await _optionCZeEcNl._checkForMissingMandatoryOptions()
		const _returnValueYsL130U = null;
		const _contextOptionsGM1EVnQ = () => { return _returnValueYsL130U };
		const _returnValueYq8RyNY = await _optionCZeEcNl.outputHelp(_contextOptionsGM1EVnQ)
		const _allowExcesseTJ88zz = false;
		const _returnValueVPeJgxj = await _optionCZeEcNl.allowExcessArguments(_allowExcesseTJ88zz)
		const _returnValueLANYjax = await _HelpmLDJ7wM.optionDescription(_optionCZeEcNl)
		const _argChoiceseNmMtSN = {
		
	}
		const _defaultValueuujzyC = undefined;
		const _defaultValueDescriptionHT2BKib = []
		const _descriptionaSZT88s = null;
		const _argumentptVNEWZ = {
			"argChoices": _argChoiceseNmMtSN,
		"defaultValue": _defaultValueuujzyC,
		"defaultValueDescription": _defaultValueDescriptionHT2BKib,
		"description": _descriptionaSZT88s
	}
		const _returnValueCwafTY = await _HelpmLDJ7wM.argumentDescription(_argumentptVNEWZ)
	});

	it('test for Help', async () => {
		const _HelpqHj6KwV = new Help()
		const _cmdSVhexm1 = null;
		const _sortSubcommandsCeEYEUJ = null;
		const _returnValueYWvwj5t = "RXVsHnRe5V1oI3DlItCycluLkrt6JT9mFdbloRPYrUgasPTxnNdYz5KeioOK57exz";
		const _subcommandTermSkszh6c = () => { return _returnValueYWvwj5t };
		const _helperDindurc = {
			"sortSubcommands": _sortSubcommandsCeEYEUJ,
		"subcommandTerm": _subcommandTermSkszh6c
	}
		const _returnValuerdsYfJt = await _HelpqHj6KwV.longestSubcommandTermLength(_cmdSVhexm1, _helperDindurc)
		const _returnValueIKKIcIf = null;
		const _strGnXqBPx = () => { return _returnValueIKKIcIf };
		const _widthZVvvWu = 7.697150645255729;
		const _indentFX9trVY = -3.079919907812253;
		const _minColumnWidthwwkmL29 = 9.86514314333585;
		const _returnValuecuJiYC1 = await _HelpqHj6KwV.wrap(_strGnXqBPx, _widthZVvvWu, _indentFX9trVY, _minColumnWidthwwkmL29)
	});

	it('test for Help', async () => {
		const _HelpDRtB8X = new Help()
		const _optioncWZcbmz = "b4jLM6R3IlT3WJpyhrYuTjcP860S84ZMlQyA3mPMjlVROA8bPpunHoBwi89W7wB";
		const _returnValuer6741Y7 = await _HelpDRtB8X.optionDescription(_optioncWZcbmz)
		const _arrayValueE3SU052 = -2.6152828296236343;
		const _arrayValueLhcK14K = 3.2065975206459214;
		const _arrayValuevqzLISu = false;
		const _cmdukblych = [_arrayValueE3SU052, _arrayValueLhcK14K, _arrayValuevqzLISu]
		const _returnValuegmqbEkY = await _HelpDRtB8X.subcommandTerm(_cmdukblych)
	});

	it('test for Help', async () => {
		const _HelpxIjDY6Y = new Help()
		const __argsDescriptionqXw8kBF = {
		
	}
		const __argsOtieMYF = {
		
	}
		const _cmdY06KWw = {
			"_argsDescription": __argsDescriptionqXw8kBF,
		"_args": __argsOtieMYF
	}
		const _returnValueOD2g9RG = await _HelpxIjDY6Y.visibleArguments(_cmdY06KWw)
		const _arrayValueXeaOFxd = true;
		const _flagsnxXnNTO = [_arrayValueXeaOFxd]
		const _descriptionUbEzysF = undefined;
		const _cmdWUJyK0j = new Option(_flagsnxXnNTO, _descriptionUbEzysF)
		const _nameiaciM8k = undefined;
		const _returnValueQiCM71c = await _cmdWUJyK0j.env(_nameiaciM8k)
		const _namevlQr8Qc = undefined;
		const _returnValuedzUZMbw = await _cmdWUJyK0j.env(_namevlQr8Qc)
		const _arrayValueWLy6lu4 = null;
		const _arrayValuewkkaIba = "Ecjfsg4KKPGBuhaU8aoyHz8HEyDEIOK1AsA4IiLTiYS8AlH3JsltQLbHflPwnSDRGTS3RiQDNwvNv";
		const _valuesjh3VEYQ = [_arrayValueWLy6lu4, _arrayValuewkkaIba]
		const _returnValueC05RAc = await _cmdWUJyK0j.choices(_valuesjh3VEYQ)
		const _mandatorymC5p9Hs = false;
		const _returnValueloW3lbe = await _cmdWUJyK0j.makeOptionMandatory(_mandatorymC5p9Hs)
		const _returnValueilPoJl = await _HelpxIjDY6Y.subcommandDescription(_cmdWUJyK0j)
	});

	it('test for Help', async () => {
		const _Helpj5YVIJ = new Help()
		const _returnValueNc6GYZ = undefined;
		const _strUpzDGJi = () => { return _returnValueNc6GYZ };
		const _widthv1pQPs = -6.413785396901699;
		const _indentIrmkgOk = 4.188927676266456;
		const _minColumnWidthLqYv98t = -6.716351554654949;
		const _returnValued2PwUwC = await _Helpj5YVIJ.wrap(_strUpzDGJi, _widthv1pQPs, _indentIrmkgOk, _minColumnWidthLqYv98t)
		const _cmdUBU7N9Z = true;
		const _helperTk0jjSN = new Help()
		const _cmdhRGYF1D = "qm7XHYu00Q0yYEgZUw9CsUFvl4uv8r5MiwULxumX5OXaFqmAncioSH8XfWRHFqRa1XoCkejSjtzttne";
		const _helperZYVCno = new Help()
		const _messagecKkJHD = undefined;
		const _argumentXcmv0p4 = new InvalidArgumentError(_messagecKkJHD)
		const _returnValue7ADYh7 = await _helperZYVCno.argumentTerm(_argumentXcmv0p4)
		const _cmdV73xlnk = null;
		const _returnValueRTJAKXG = {
		
	}
		const _arrayValueERzP81E = () => { return _returnValueRTJAKXG };
		const _arrayValueug8mEhI = null;
		const _arrayValueAfGUcs7 = {
		
	}
		const _arrayValuetCB86c8 = true;
		const _arrayValueOjsCtWM = -0.6883612784890953;
		const _arrayValueIIAFtlc = [_arrayValueAfGUcs7, _arrayValuetCB86c8, _arrayValueOjsCtWM]
		const _arrayValuezXy02lz = -3.458242021235516;
		const _returnValueilg3Q8C = [_arrayValueERzP81E, _arrayValueug8mEhI, _arrayValueIIAFtlc, _arrayValuezXy02lz]
		const _visibleOptionsDSgn4Km = () => { return _returnValueilg3Q8C };
		const _returnValuebX7s6sG = true;
		const _optionTermf4UJr23 = () => { return _returnValuebX7s6sG };
		const _helperJMCwkm3 = {
			"visibleOptions": _visibleOptionsDSgn4Km,
		"optionTerm": _optionTermf4UJr23
	}
		const _returnValueEHZrk4 = await _helperZYVCno.longestOptionTermLength(_cmdV73xlnk, _helperJMCwkm3)
		const _cmdUqJGyMZ = false;
		const _returnValuev9N0znI = -2.8107116615468772;
		const _visibleOptionsSEkiqG1 = () => { return _returnValuev9N0znI };
		const _arrayValuewGNTfEa = undefined;
		const _arrayValueIC8bQa1 = null;
		const _arrayValuex40minF = false;
		const _arrayValuex7mExaq = [_arrayValuex40minF]
		const _returnValue7JuH9Q = [_arrayValuewGNTfEa, _arrayValueIC8bQa1, _arrayValuex7mExaq]
		const _optionTermNRn8vUu = () => { return _returnValue7JuH9Q };
		const _helperO1dWSld = {
			"visibleOptions": _visibleOptionsSEkiqG1,
		"optionTerm": _optionTermNRn8vUu
	}
		const _returnValuegCyylBP = await _helperZYVCno.longestOptionTermLength(_cmdUqJGyMZ, _helperO1dWSld)
		const _cmdgO3PUG7 = "TQKtcZMSIQ";
		const _returnValuegdQqs3y = await _helperZYVCno.commandUsage(_cmdgO3PUG7)
		const _returnValueq2Eabhv = null;
		const _cmdun17KEm = () => { return _returnValueq2Eabhv };
		const _arrayValueyYcxLgL = null;
		const _arrayValuel5LZSZ4 = undefined;
		const _arrayValuehsCFyrs = "Y46FRztobxlIq";
		const _arrayValueUXNGl6J = "JF6asf4mN0YY0XnMooasC3rYOrc9vuuyH1ktq52h0zRRhKJSiSikToq6konrmc";
		const _helperDNFtyv4 = [_arrayValueyYcxLgL, _arrayValuel5LZSZ4, _arrayValuehsCFyrs, _arrayValueUXNGl6J]
		const _returnValueggA3F9r = await _helperZYVCno.padWidth(_cmdun17KEm, _helperDNFtyv4)
		const _returnValueUKMzlWE = await _helperTk0jjSN.longestOptionTermLength(_cmdhRGYF1D, _helperZYVCno)
		const _returnValuejNVHXq8 = null;
		const _cmdUppo4i1 = () => { return _returnValuejNVHXq8 };
		const _returnValuesauwBr = await _helperTk0jjSN.visibleOptions(_cmdUppo4i1)
		const __nameqRVeo0p = {
		
	}
		const __aliasesXckaME4 = {
		
	}
		const _parentqttNby7 = {
		
	}
		const _returnValueENoz8wk = null;
		const _usageqJEP9AN = () => { return _returnValueENoz8wk };
		const _cmdmKMlyCY = {
			"_name": __nameqRVeo0p,
		"_aliases": __aliasesXckaME4,
		"parent": _parentqttNby7,
		"usage": _usageqJEP9AN
	}
		const _returnValueof4SXyC = await _helperTk0jjSN.commandUsage(_cmdmKMlyCY)
		const _cmdKOCbyel = -7.293029376848837;
		const _sortSubcommandscqbZP4i = undefined;
		const _returnValueygGWMeV = "DCVw5wvMpc9a8V1nHYYZYzmrfXbxLyX1cnjPHS";
		const _subcommandTermtVXq6R = () => { return _returnValueygGWMeV };
		const _helperm4spI7b = {
			"sortSubcommands": _sortSubcommandscqbZP4i,
		"subcommandTerm": _subcommandTermtVXq6R
	}
		const _returnValuecy2CXlK = await _helperTk0jjSN.longestSubcommandTermLength(_cmdKOCbyel, _helperm4spI7b)
		const _returnValueS1815Pe = await _Helpj5YVIJ.longestSubcommandTermLength(_cmdUBU7N9Z, _helperTk0jjSN)
		const _arrayValueJLzAfnH = null;
		const _cmdk1nd8ho = [_arrayValueJLzAfnH]
		const _returnValuePCAkEnF = false;
		const _helpermYCs6DZ = () => { return _returnValuePCAkEnF };
		const _returnValueql5Rp9d = await _Helpj5YVIJ.formatHelp(_cmdk1nd8ho, _helpermYCs6DZ)
		const _cmdgxUKV6m = "xJpe";
		const _returnValueTzCBiTY = "JSgdAxCQRAxQeNPA36zwVgGXCIPLza";
		const _visibleOptionsdmQX0ER = () => { return _returnValueTzCBiTY };
		const _returnValueDMPzu95 = true;
		const _optionTermzdSsuvf = () => { return _returnValueDMPzu95 };
		const _helperLpBajRA = {
			"visibleOptions": _visibleOptionsdmQX0ER,
		"optionTerm": _optionTermzdSsuvf
	}
		const _returnValueAXEa5ad = await _Helpj5YVIJ.longestOptionTermLength(_cmdgxUKV6m, _helperLpBajRA)
	});

	it('test for Help', async () => {
		const _HelpcAaGywo = new Help()
		const _argumentepZ0oE = "qYW9NdM8Mzn8zhlu1rYlLgeG5fWgdsGtq4WNqKppcINHswHo8Rw0PYZuooXAZe9P4qOiOczVxkFMXKx6";
		const _returnValuebfpbRzZ = await _HelpcAaGywo.argumentDescription(_argumentepZ0oE)
		const _arrayValueHX4UNyW = true;
		const _cmd3ZZ7Ti = [_arrayValueHX4UNyW]
		const _returnValued1FJuTR = false;
		const _visibleArgumentsMWMQoxA = () => { return _returnValued1FJuTR };
		const _returnValueHaso2m5 = {
		
	}
		const _argumentTermhtAdnzM = () => { return _returnValueHaso2m5 };
		const _helperC5yCpfs = {
			"visibleArguments": _visibleArgumentsMWMQoxA,
		"argumentTerm": _argumentTermhtAdnzM
	}
		const _returnValueKJe7BQ3 = await _HelpcAaGywo.longestArgumentTermLength(_cmd3ZZ7Ti, _helperC5yCpfs)
	});

	it('test for Help', async () => {
		const _HelpcweiLFm = new Help()
		const _arrayValueFQGp6Ep = 8.068536472148708;
		const _arrayValueeTY366P = []
		const _argChoicesZ4f3p6 = [_arrayValueFQGp6Ep, _arrayValueeTY366P]
		const _negateFFceJDB = undefined;
		const _defaultValueSWd1HY = undefined;
		const _defaultValueDescriptionGpMI9Zh = null;
		const _envVarOqzBgC = undefined;
		const _descriptionevSi3sT = []
		const _optionE5EKzED = {
			"argChoices": _argChoicesZ4f3p6,
		"negate": _negateFFceJDB,
		"defaultValue": _defaultValueSWd1HY,
		"defaultValueDescription": _defaultValueDescriptionGpMI9Zh,
		"envVar": _envVarOqzBgC,
		"description": _descriptionevSi3sT
	}
		const _returnValueNIFQ8zm = await _HelpcweiLFm.optionDescription(_optionE5EKzED)
		const _optionseQF5pHR = {
		
	}
		const __hasHelpOptionh6bNnVH = "LDWP6CperPNGn9R85K7ROggtvoDGKQoQm1RBi1sJx3d2Pq2X8meRufV5GPi37XwqhewFetrBUMdfh9Xl1ue";
		const __helpShortFlagpXU6rDX = undefined;
		const _returnValueClgmXgN = -0.247812386177106;
		const __findOptionPPZF3F = () => { return _returnValueClgmXgN };
		const __helpLongFlagZe4O9gl = "znjV4rVmuqzjPNcNELsqG1WOgFGVp5204kbfh6AKMiGYtCjRhz244KTICxL2yd9kYN6Y8MrP8yq1usfdl7wU3aWe6vQ";
		const _arrayValueapot53v = undefined;
		const _returnValueFHgdYec = [_arrayValueapot53v]
		const _createOptionQKbAXGn = () => { return _returnValueFHgdYec };
		const __helpDescription8K06yN = {
		
	}
		const __helpFlagsLnUFUVF = undefined;
		const _cmdZ15A5bY = {
			"options": _optionseQF5pHR,
		"_hasHelpOption": __hasHelpOptionh6bNnVH,
		"_helpShortFlag": __helpShortFlagpXU6rDX,
		"_findOption": __findOptionPPZF3F,
		"_helpLongFlag": __helpLongFlagZe4O9gl,
		"createOption": _createOptionQKbAXGn,
		"_helpDescription": __helpDescription8K06yN,
		"_helpFlags": __helpFlagsLnUFUVF
	}
		const _returnValuesoVO7sA = await _HelpcweiLFm.visibleOptions(_cmdZ15A5bY)
		const _cmdxrbwWdv = {
		
	}
		const _helperqDIrPwl = "D8GfbKkobtIVfLpEVbZBmERFdQrRZ92FYcN9AyxYs75iM0UPkLGOOPUrSJi";
		const _returnValuei8LZ0J = await _HelpcweiLFm.longestSubcommandTermLength(_cmdxrbwWdv, _helperqDIrPwl)
	});

	it('test for Help', async () => {
		const _HelpQRndVQQ = new Help()
		const _strpO2KgJp = "QYrXyEvRA1Fp7K1RRCiFfOT8PRN5tpR83owpBrvlVgjis";
		const _arrayValuew3lXHzu = {
		
	}
		const _widthF0vHXnR = [_arrayValuew3lXHzu]
		const _indentcf8CoYk = -9.651796708275423;
		const _minColumnWidth8823rY = 0.10788836439346028;
		const _returnValuegoVFKgM = await _HelpQRndVQQ.wrap(_strpO2KgJp, _widthF0vHXnR, _indentcf8CoYk, _minColumnWidth8823rY)
		const _cmdrin2pP = 3.4269620350098347;
		const _returnValueG3L9GEt = "qhlt1KDG9pniHx8m5xyO";
		const _helperAWwj89 = () => { return _returnValueG3L9GEt };
		const _returnValueCNOXUDV = await _HelpQRndVQQ.longestSubcommandTermLength(_cmdrin2pP, _helperAWwj89)
		const _argChoicesHunCSWO = {
		
	}
		const _defaultValueXWSDNb0 = undefined;
		const _defaultValueDescriptions0XsMCO = "OYCM9pHBwnOUspXqnWsCToxpQtRlizA4XsGd6ctkuMuSoPgEMczm1rL8oPJd";
		const _descriptionr1dmY8g = -0.14493782089259355;
		const _argumentr2et5av = {
			"argChoices": _argChoicesHunCSWO,
		"defaultValue": _defaultValueXWSDNb0,
		"defaultValueDescription": _defaultValueDescriptions0XsMCO,
		"description": _descriptionr1dmY8g
	}
		const _returnValueA3LNhIL = await _HelpQRndVQQ.argumentDescription(_argumentr2et5av)
		const __argsDescriptione6L1OL1 = "QDSqrqULP7vGSW1ovSXn2A3G";
		const __argshAMixbk = {
		
	}
		const _cmdM1rFFsJ = {
			"_argsDescription": __argsDescriptione6L1OL1,
		"_args": __argshAMixbk
	}
		const _returnValueHYI9A6a = await _HelpQRndVQQ.visibleArguments(_cmdM1rFFsJ)
	});

	it('test for Help', async () => {
		const _HelplQbAXxD = new Help()
		const _flagsU5RoVxs = null;
		const _optionrt6Lz7a = {
			"flags": _flagsU5RoVxs
	}
		const _returnValuembVzIk9 = await _HelplQbAXxD.optionTerm(_optionrt6Lz7a)
		const _argChoicesZCdk1vi = {
		
	}
		const _negategXq3ln = {
		
	}
		const _defaultValue6N2M89 = undefined;
		const _defaultValueDescriptionBRMWvm4 = null;
		const _envVarsjdWHxd = null;
		const _descriptioniOkIH2p = null;
		const _optionfSntat = {
			"argChoices": _argChoicesZCdk1vi,
		"negate": _negategXq3ln,
		"defaultValue": _defaultValue6N2M89,
		"defaultValueDescription": _defaultValueDescriptionBRMWvm4,
		"envVar": _envVarsjdWHxd,
		"description": _descriptioniOkIH2p
	}
		const _returnValue3mBUTL = await _HelplQbAXxD.optionDescription(_optionfSntat)
		const _returnValueRShhvfu = undefined;
		const _namehUfVhzl = () => { return _returnValueRShhvfu };
		const _argumentJAGMcDJ = {
			"name": _namehUfVhzl
	}
		const _returnValueuKuFzgd = await _HelplQbAXxD.argumentTerm(_argumentJAGMcDJ)
		const _nameFn95CWl = null;
		const _argumentLkCuvVl = new Command(_nameFn95CWl)
		const _strKOEfp6a = undefined;
		const _returnValueWYfeyPG = await _argumentLkCuvVl.usage(_strKOEfp6a)
		const _configurationLmIrXLE = undefined;
		const _returnValuenOhLakd = await _argumentLkCuvVl.configureOutput(_configurationLmIrXLE)
		const _flagsd13EgVy = null;
		const _optionE6bUJYg = {
			"flags": _flagsd13EgVy
	}
		const _returnValueVFwG2P3 = await _argumentLkCuvVl.optionMissingArgument(_optionE6bUJYg)
		const _returnValueQ8e6SrV = await _HelplQbAXxD.argumentTerm(_argumentLkCuvVl)
		const _argumentOcA775 = "BdIObHTqv66QbKMnEvxixn88Hkd5VAGHrmN2K";
		const _returnValueSOhSfsE = await _HelplQbAXxD.argumentTerm(_argumentOcA775)
	});

	it('test for Help', async () => {
		const _HelphGK0wew = new Help()
		const _returnValueepTJUP0 = "yVYbo1OnYLvYwosBd6Ls3aeFolVaGXSuqQ5hKUudIuXaWWIsW1Ubg3tCOSvx5YKfbkR4KmA3hFJKoLvT7adswQpXa";
		const _returnValuebDlVpYT = () => { return _returnValueepTJUP0 };
		const _match4f3Bj1 = () => { return _returnValuebDlVpYT };
		const _substrmW69lx = false;
		const _strKuFgwVx = {
			"match": _match4f3Bj1,
		"substr": _substrmW69lx
	}
		const _widthRtA0hXK = 4.731598231734022;
		const _indentO5fIzXU = -1.311280634928739;
		const _minColumnWidthjxZRrsB = -7.558494681640862;
		const _returnValueFBCglK = await _HelphGK0wew.wrap(_strKuFgwVx, _widthRtA0hXK, _indentO5fIzXU, _minColumnWidthjxZRrsB)
		const _cmdYAWTUfF = []
		const _returnValueChYXU6l = await _HelphGK0wew.visibleOptions(_cmdYAWTUfF)
	});

	it('test for Help', async () => {
		const _HelpfFNCwrn = new Help()
		const _argumentapEAxs = "WFrsTLQOD8Egu4P";
		const _returnValueOKKSNA0 = await _HelpfFNCwrn.argumentDescription(_argumentapEAxs)
		const _flagstNubcRR = "Tjp47Lv0vjkyIGmmOeDu39t11uKfCw9ivj2rbcfPCCbsU3W10y3wb1M7p";
		const _descriptionE42WCcR = undefined;
		const _optionHX5kOyi = new Option(_flagstNubcRR, _descriptionE42WCcR)
		const _fnV9ANU7g = undefined;
		const _returnValueStQecQ9 = await _optionHX5kOyi.argParser(_fnV9ANU7g)
		const _returnValuerrJUZKY = await _optionHX5kOyi.name()
		const _returnValueW64lirW = await _optionHX5kOyi.name()
		const _returnValuey0336Ag = await _HelpfFNCwrn.optionTerm(_optionHX5kOyi)
	});

	it('test for Help', async () => {
		const _HelputRd44d = new Help()
		const _strIWQoX1V = "CwyLPHWRqYPpGjtnXEoYgvQ1PSwQgprPIhRfa6Kmx4Vh763N3yvAygGQUH5GaTeBN41U";
		const _widthFbKQ1jm = 7.351423698830125;
		const _indentHDYYaWD = 6.590077451241218;
		const _minColumnWidthGBpi5XL = 3.5294086804043268;
		const _returnValuexNQMFVw = await _HelputRd44d.wrap(_strIWQoX1V, _widthFbKQ1jm, _indentHDYYaWD, _minColumnWidthGBpi5XL)
		const _arrayValueiT2NUIO = undefined;
		const _returnValueApNfZA4 = [_arrayValueiT2NUIO]
		const _cmdY0b7OA = () => { return _returnValueApNfZA4 };
		const _returnValuegrwVOZ = await _HelputRd44d.visibleArguments(_cmdY0b7OA)
		const _cmdpNOY60 = 8.804656362003712;
		const _helperJ1vN9FR = new Help()
		const _returnValueV5PIPj = null;
		const _returnValuefFhYsUs = () => { return _returnValueV5PIPj };
		const _argumentN8nSh1o = () => { return _returnValuefFhYsUs };
		const _returnValueaa80VDR = await _helperJ1vN9FR.argumentDescription(_argumentN8nSh1o)
		const _returnValuelztP8TL = null;
		const _cmdbeFBIh2 = () => { return _returnValuelztP8TL };
		const _returnValue0HkQV8 = await _helperJ1vN9FR.subcommandTerm(_cmdbeFBIh2)
		const _cmdBrxNv4U = undefined;
		const _helperirFHGtB = "ApwEI69CUSo28D5tEcsyR4S6St3";
		const _returnValuemt2VsGd = await _helperJ1vN9FR.formatHelp(_cmdBrxNv4U, _helperirFHGtB)
		const _arrayValuePaiGBUz = "NAYyF9trlnXV52coX4fnrzGAxEbGvXwhxcpGsApgrqYbI7xTbg5gIAmCQ2hdLveHTrAQg7ns9znAyZJlWt1";
		const _arrayValuer5V3VlH = undefined;
		const _cmdToTvji = [_arrayValuePaiGBUz, _arrayValuer5V3VlH]
		const _longestOptionTermLengthPib6cDN = undefined;
		const _returnValueSpB0c6X = null;
		const _longestSubcommandTermLengthlF5ghde = () => { return _returnValueSpB0c6X };
		const _returnValuebbA5sy = "BNnrC1dsRYUfAGpGeAxfoEbIsponhbGlz0SVNfcA5qEJS8gwjeWriFwXdinTZyRGAR9pVnfoxZ6bQacqBV";
		const _longestArgumentTermLengthsG1omIp = () => { return _returnValuebbA5sy };
		const _helperARNBWdZ = {
			"longestOptionTermLength": _longestOptionTermLengthPib6cDN,
		"longestSubcommandTermLength": _longestSubcommandTermLengthlF5ghde,
		"longestArgumentTermLength": _longestArgumentTermLengthsG1omIp
	}
		const _returnValueixt9D6I = await _helperJ1vN9FR.padWidth(_cmdToTvji, _helperARNBWdZ)
		const _cmdoJb8qMa = false;
		const _returnValueNapR2O7 = await _helperJ1vN9FR.visibleCommands(_cmdoJb8qMa)
		const _returnValueouYNE3f = await _HelputRd44d.longestOptionTermLength(_cmdpNOY60, _helperJ1vN9FR)
		const _cmdMxIyXOD = "CAbouGDvM5AOtm4TAU0ZjzYfIjxhPCayxpme1OWekHGViLWKr";
		const _returnValueQ3KGxJu = null;
		const _longestOptionTermLengthGe2Lj2 = () => { return _returnValueQ3KGxJu };
		const _returnValue47azyN = false;
		const _longestSubcommandTermLengthYbNOfCx = () => { return _returnValue47azyN };
		const _longestArgumentTermLengthqi7ENrK = undefined;
		const _helper2Yvnc1 = {
			"longestOptionTermLength": _longestOptionTermLengthGe2Lj2,
		"longestSubcommandTermLength": _longestSubcommandTermLengthYbNOfCx,
		"longestArgumentTermLength": _longestArgumentTermLengthqi7ENrK
	}
		const _returnValuePTM03G8 = await _HelputRd44d.padWidth(_cmdMxIyXOD, _helper2Yvnc1)
		const _arrayValuen1wvAJn = "cTNbonSPPpRrRE9qw0Xi4tWHttiAkLQIeT4Us1bJsKCU2WsDWHrBXzzbvdYCJqa5rOYN";
		const _arrayValueRFfJp5r = null;
		const _arrayValueBASIcHB = null;
		const _arrayValueSGfSmX = false;
		const _arrayValueR4BOHDP = 3.080715948406274;
		const _returnValuePooxkN = [_arrayValuen1wvAJn, _arrayValueRFfJp5r, _arrayValueBASIcHB, _arrayValueSGfSmX, _arrayValueR4BOHDP]
		const _cmdhPPNNMU = () => { return _returnValuePooxkN };
		const _returnValuePyvf33 = await _HelputRd44d.visibleOptions(_cmdhPPNNMU)
	});

	it('test for Help', async () => {
		const _HelplkbbjoH = new Help()
		const _arrayValueV0Ahktd = false;
		const _arrayValuej7iMpot = 9.859332823192538;
		const _arrayValuerXdgRhk = null;
		const _arrayValuei6qV9pY = null;
		const _name3IhMd5 = [_arrayValueV0Ahktd, _arrayValuej7iMpot, _arrayValuerXdgRhk, _arrayValuei6qV9pY]
		const _cmdwZ7phy = new Command(_name3IhMd5)
		const _aliastXpp4qy = undefined;
		const _returnValuen9pEQy7 = await _cmdwZ7phy.alias(_aliastXpp4qy)
		const _returnValueFPMKU7S = await _cmdwZ7phy._checkNumberOfArguments()
		const _aliasoO1ltsa = undefined;
		const _returnValuenhV9eWk = await _cmdwZ7phy.alias(_aliasoO1ltsa)
		const _returnValueUeIzmRO = await _HelplkbbjoH.visibleOptions(_cmdwZ7phy)
		const _returnValueRnuK9iA = "Izd29eBh5CA7ArSQxTw9OSwZxblr5BYofuMCOmOq95at";
		const _matchBnhXSUi = () => { return _returnValueRnuK9iA };
		const _arrayValueEAMaAC = false;
		const _arrayValuedv61nNS = true;
		const _arrayValuenpgFv4H = {
		
	}
		const _arrayValuej7f0oye = [_arrayValuedv61nNS, _arrayValuenpgFv4H]
		const _arrayValueGFaRIZE = [_arrayValueEAMaAC, _arrayValuej7f0oye]
		const _returnValueeYQ6a3R = -8.491084387499479;
		const _arrayValuel2g1MTl = () => { return _returnValueeYQ6a3R };
		const _returnValueOB5fxZZ = [_arrayValueGFaRIZE, _arrayValuel2g1MTl]
		const _substru0yHTb = () => { return _returnValueOB5fxZZ };
		const _strWal6fY = {
			"match": _matchBnhXSUi,
		"substr": _substru0yHTb
	}
		const _widthwc6gdaF = 7.09047247114562;
		const _indentaioQP8k = -6.259234144215795;
		const _minColumnWidthAwlCDW = 0.3220370148087177;
		const _returnValueh8xDMIn = await _HelplkbbjoH.wrap(_strWal6fY, _widthwc6gdaF, _indentaioQP8k, _minColumnWidthAwlCDW)
		const _argChoicesesJkyKs = {
		
	}
		const _negates4Ljaer = false;
		const _defaultValueTEtSYby = undefined;
		const _defaultValueDescriptionX3JHUna = {
		
	}
		const _envVarD3BHk7 = undefined;
		const _descriptionqYiG5Gw = "9H9nCXCAA3h2pIEJVVwUJdFojltIwpcpKk9aUTV";
		const _optiontuoSQpI = {
			"argChoices": _argChoicesesJkyKs,
		"negate": _negates4Ljaer,
		"defaultValue": _defaultValueTEtSYby,
		"defaultValueDescription": _defaultValueDescriptionX3JHUna,
		"envVar": _envVarD3BHk7,
		"description": _descriptionqYiG5Gw
	}
		const _returnValueOwCM2z = await _HelplkbbjoH.optionDescription(_optiontuoSQpI)
		const _optionZbv5eOe = "Va9NhgJCWiYNktSn1GOPg06kaYiUTWXm6Pp05EqA1EOG";
		const _returnValuejzC6vkU = await _HelplkbbjoH.optionTerm(_optionZbv5eOe)
	});

	it('test for Help', async () => {
		const _HelpVi5QZuw = new Help()
		const _namegGetcte = false;
		const _cmdmq9tXOV = new Command(_namegGetcte)
		const _arrayValueQ813Tj6 = "TQJ8Yc7xbZBIC6DtegxSeX5546bKypzYMaVEfGzm3YF8WeIGJkqJ9X0";
		const _contextOptionsNoQRqXP = [_arrayValueQ813Tj6]
		const _returnValueUyxIvIR = await _cmdmq9tXOV.helpInformation(_contextOptionsNoQRqXP)
		const _returnValueMKxpnOV = await _cmdmq9tXOV._parseOptionsEnv()
		const _aliasesgnXtzVa = undefined;
		const _returnValuezONJO3O = await _cmdmq9tXOV.aliases(_aliasesgnXtzVa)
		const _arrayValuetQs6fr = null;
		const _subcommandR5N7el = [_arrayValuetQs6fr]
		const _argsJEjvOnV = undefined;
		const _returnValuenwMir8C = await _cmdmq9tXOV._executeSubCommand(_subcommandR5N7el, _argsJEjvOnV)
		const _returnValue9BVwJu = await _HelpVi5QZuw.visibleCommands(_cmdmq9tXOV)
		const _cmdwwu6W34 = "bjhHwuxlAZH3AGfysLg1hm1ZKx1DC61FAiJeSSKD5V4iCfx9iFOfILTfys0JKZpz7E";
		const _helperhkMH90K = undefined;
		const _returnValuePHEmQId = await _HelpVi5QZuw.padWidth(_cmdwwu6W34, _helperhkMH90K)
		const _returnValuelarZi0g = "YeuluJfWT6PiUuyXubREJ1n6CjYAkBrBYVgLgeLKj6Q5T3Gdx9eIYekzbHqqGGj6ANalRxzIc2KH";
		const _cmdmYyNa6m = () => { return _returnValuelarZi0g };
		const _returnValuev0NKBGo = await _HelpVi5QZuw.visibleOptions(_cmdmYyNa6m)
		const _arrayValueG3CN5uH = null;
		const _cmdzJiAIB = [_arrayValueG3CN5uH]
		const _returnValuesArORy9 = await _HelpVi5QZuw.subcommandTerm(_cmdzJiAIB)
	});

	it('test for Help', async () => {
		const _HelpbATU0ZD = new Help()
		const _nameXcm1b0 = null;
		const _cmdbTeL9Pq = new Command(_nameXcm1b0)
		const _configurationNVVrgwC = {
		
	}
		const _returnValuem5LzR2n = await _cmdbTeL9Pq.configureHelp(_configurationNVVrgwC)
		const _configurationdSoLLjX = undefined;
		const _returnValuevdHR5HN = await _cmdbTeL9Pq.configureOutput(_configurationdSoLLjX)
		const _returnValuev05BhXx = await _HelpbATU0ZD.subcommandTerm(_cmdbTeL9Pq)
		const _returnValueDHNvlct = null;
		const _includeswiItY1K = () => { return _returnValueDHNvlct };
		const _flagsrNrE7j2 = {
			"includes": _includeswiItY1K
	}
		const _descriptionK4bDThH = "bJvK1rLXqobgrufWXs7DcUATDnL5tc2X6rmfxra7a2cUpH3JEJD3NcUXRlAVGeQA1";
		const _cmdo0Cj9zq = new Option(_flagsrNrE7j2, _descriptionK4bDThH)
		const _fnRGbAXo3 = undefined;
		const _returnValuef1vFS8m = await _cmdo0Cj9zq.argParser(_fnRGbAXo3)
		const _returnValuexWfzY55 = await _cmdo0Cj9zq.attributeName()
		const _returnValueU3LX50h = await _HelpbATU0ZD.commandDescription(_cmdo0Cj9zq)
	});

	it('test for Help', async () => {
		const _HelptjtSEit = new Help()
		const _returnValueoS1x4tQ = undefined;
		const _sliceDdmjL85 = () => { return _returnValueoS1x4tQ };
		const _namejDJC5td = {
			"slice": _sliceDdmjL85
	}
		const _descriptionkmTkW4X = undefined;
		const _argumentpg1VfL6 = new Argument(_namejDJC5td, _descriptionkmTkW4X)
		const _valueQvgxkMg = "fymHM8js8jhf6XQMProoA8bvVqPLuvxMS3niMXo26nl9dWCmJMzRAgYO3sIzQkSdPYOXRGk82D3K2cJEr720OK92C8Wa2sF2f";
		const _descriptionvW6Mkny = undefined;
		const _returnValueaMy2sKs = await _argumentpg1VfL6.default(_valueQvgxkMg, _descriptionvW6Mkny)
		const _returnValueDW6aQ71 = await _argumentpg1VfL6.name()
		const _returnValuewyUK0Y0 = await _argumentpg1VfL6.name()
		const _returnValuegDG0DXU = await _HelptjtSEit.argumentDescription(_argumentpg1VfL6)
		const _optionaQPyn4u = undefined;
		const _returnValuehSYIaQ9 = await _HelptjtSEit.optionDescription(_optionaQPyn4u)
		const _optionXoZqRxP = "LIYdl091c";
		const _returnValuejsW8W6e = await _HelptjtSEit.optionDescription(_optionXoZqRxP)
	});

	it('test for Help', async () => {
		const _HelphiACesu = new Help()
		const _returnValuejtfOJaA = true;
		const _arrayValuetTsULnf = () => { return _returnValuejtfOJaA };
		const _arrayValueLRZPllP = true;
		const _arrayValuezwi4WbP = [_arrayValueLRZPllP]
		const _namejZyL1rw = [_arrayValuetTsULnf, _arrayValuezwi4WbP]
		const _cmdnfr5sGW = new Command(_namejZyL1rw)
		const _fnXkDaXbo = {
		
	}
		const _returnValuesgtbVP7 = await _cmdnfr5sGW.exitOverride(_fnXkDaXbo)
		const _returnValueQDd0NL0 = await _cmdnfr5sGW._processArguments()
		const _alias3yLphc = {
		
	}
		const _returnValueBYpx8aY = await _cmdnfr5sGW.alias(_alias3yLphc)
		const _returnValues03RZpv = await _HelphiACesu.subcommandTerm(_cmdnfr5sGW)
		const _argumentdB5uhJL = "oTOAx7JcNcmB2Nk2kbeqyYD7WV5BzYH1elL2eQGncaI7bLRjcEI";
		const _returnValueaGGpE8 = await _HelphiACesu.argumentDescription(_argumentdB5uhJL)
		const __argsVZf0ie = undefined;
		const __nameX85qdbj = 4.726756297110493;
		const __aliasesrsbD7Op = {
		
	}
		const _optionswkk9b4w = {
		
	}
		const _cmdB5KpAcB = {
			"_args": __argsVZf0ie,
		"_name": __nameX85qdbj,
		"_aliases": __aliasesrsbD7Op,
		"options": _optionswkk9b4w
	}
		const _returnValuepOH7vG6 = await _HelphiACesu.subcommandTerm(_cmdB5KpAcB)
		const _cmdgqJYewI = null;
		const _returnValuedJt3ky = false;
		const _helperIPI3NOS = () => { return _returnValuedJt3ky };
		const _returnValueQErWF9W = await _HelphiACesu.formatHelp(_cmdgqJYewI, _helperIPI3NOS)
	});

	it('test for Help', async () => {
		const _HelpGG5XOht = new Help()
		const _flagsCEOGiGE = "oK64QZxXoi3nAmBco2c5AsSnxoa5IyVI7E7xcF486ZC4VmCNOoyVrT8SOFyEMfnBrHu30LIDf1Y2eV83";
		const _descriptionuFejr86 = true;
		const _argument23Mtoq = new Option(_flagsCEOGiGE, _descriptionuFejr86)
		const _namePdYE2Z = undefined;
		const _returnValueyiGmRqL = await _argument23Mtoq.env(_namePdYE2Z)
		const _hided27CYom = false;
		const _returnValuekLZYqiW = await _argument23Mtoq.hideHelp(_hided27CYom)
		const _mandatoryzLlesld = false;
		const _returnValueHyaHijI = await _argument23Mtoq.makeOptionMandatory(_mandatoryzLlesld)
		const _returnValueDFI9Wa = await _HelpGG5XOht.argumentTerm(_argument23Mtoq)
		const _namertWmbid = "5bWJv6JywLJfoU9CD77zLWWzHZqqEK5vWJlACALJ3JSN24PXggBCLUzVHMWKXMIDTMPaPQcTgjS9C3";
		const _arrayValueWAYTxRx = undefined;
		const _arrayValuew0sBsvl = {
		
	}
		const _returnValueSlDxCDb = [_arrayValueWAYTxRx, _arrayValuew0sBsvl]
		const _arrayValueCin8nT = () => { return _returnValueSlDxCDb };
		const _arrayValueuXzo2Ra = "fP3UDDSjtMvymWGmadUdkelQEFpIqPsZcpjjqTeq8yYhguT4yV5";
		const _arrayValuekdVvQMW = undefined;
		const _descriptiont8P0aTa = [_arrayValueCin8nT, _arrayValueuXzo2Ra, _arrayValuekdVvQMW]
		const _argumentCV6Kyfo = new Argument(_namertWmbid, _descriptiont8P0aTa)
		const _returnValueDhQAIBF = "DLYscCawQt0xhFls0sjUGcB4h37Xfk5U11xSQKjoHiU2YEqwiMSDhII91CjyEW4s";
		const _valueF67S1a8 = () => { return _returnValueDhQAIBF };
		const _descriptionMQPJkf = "4zgmCua9DBedjLmFhafVQuuXliFvPifLiliiw9e";
		const _returnValueiCbiFkr = await _argumentCV6Kyfo.default(_valueF67S1a8, _descriptionMQPJkf)
		const _valuesMXBpZlU = []
		const _returnValueyOjhwGC = await _argumentCV6Kyfo.choices(_valuesMXBpZlU)
		const _valuecFVSjCR = {
		
	}
		const _descriptionNCDZ6Db = undefined;
		const _returnValueAtuGVzM = await _argumentCV6Kyfo.default(_valuecFVSjCR, _descriptionNCDZ6Db)
		const _returnValuezTElKs = await _argumentCV6Kyfo.argRequired()
		const _returnValuedTaHNu = await _HelpGG5XOht.argumentDescription(_argumentCV6Kyfo)
		const _argChoiceseGAX3q = {
		
	}
		const _arrayValuegruXrSB = {
		
	}
		const _arrayValueuIA85MX = {
		
	}
		const _returnValueQGgO4SI = "noiZg5obiNinrhmQM2TSRsnMoGDZgtcIwRuLvIewvl4";
		const _arrayValuet4x58U = () => { return _returnValueQGgO4SI };
		const _negateed5OUP = [_arrayValuegruXrSB, _arrayValueuIA85MX, _arrayValuet4x58U]
		const _defaultValueUnXcuQr = undefined;
		const _defaultValueDescription3I90pE = true;
		const _envVarcGLF7xU = undefined;
		const _arrayValueuiYXxqr = 9.601423026961648;
		const _arrayValuexfXGLAe = null;
		const _arrayValueb8Crmqm = null;
		const _arrayValueN5I7J3J = [_arrayValueb8Crmqm]
		const _descriptionYyZUnML = [_arrayValueuiYXxqr, _arrayValuexfXGLAe, _arrayValueN5I7J3J]
		const _optionu5CxiV = {
			"argChoices": _argChoiceseGAX3q,
		"negate": _negateed5OUP,
		"defaultValue": _defaultValueUnXcuQr,
		"defaultValueDescription": _defaultValueDescription3I90pE,
		"envVar": _envVarcGLF7xU,
		"description": _descriptionYyZUnML
	}
		const _returnValueXQltQUA = await _HelpGG5XOht.optionDescription(_optionu5CxiV)
	});

	it('test for Help', async () => {
		const _HelphvzepVB = new Help()
		const _nameG5LjJND = true;
		const _cmdIzDhzlH = new Command(_nameG5LjJND)
		const _positionaliucL5FK = true;
		const _returnValueRlnxes5 = await _cmdIzDhzlH.enablePositionalOptions(_positionaliucL5FK)
		const _nameEEgWFyJ = {
		
	}
		const _descriptionCQxbj5E = {
		
	}
		const _returnValuenSFuw1Y = await _cmdIzDhzlH.createArgument(_nameEEgWFyJ, _descriptionCQxbj5E)
		const _returnValueA4HAO1W = undefined;
		const _thenYjPk4Rx = () => { return _returnValueA4HAO1W };
		const _promisegV9jj5A = {
			"then": _thenYjPk4Rx
	}
		const _fn2hwEH0 = {
		
	}
		const _returnValuecE1fE3i = await _cmdIzDhzlH._chainOrCall(_promisegV9jj5A, _fn2hwEH0)
		const _requiredflGfg77 = []
		const _defaultValuevC7S7Iw = undefined;
		const _parseArgqEYvJd = undefined;
		const _returnValueBsj2cbn = true;
		const _nameAnvmZcW = () => { return _returnValueBsj2cbn };
		const _argumentM7ziMtN = {
			"required": _requiredflGfg77,
		"defaultValue": _defaultValuevC7S7Iw,
		"parseArg": _parseArgqEYvJd,
		"name": _nameAnvmZcW
	}
		const _returnValuepdxCFQC = await _cmdIzDhzlH.addArgument(_argumentM7ziMtN)
		const _returnValuevXjs3QD = await _HelphvzepVB.subcommandTerm(_cmdIzDhzlH)
		const _returnValueXgalbf = undefined;
		const _cmdfZyCr1L = () => { return _returnValueXgalbf };
		const _returnValueBIpqifl = await _HelphvzepVB.subcommandTerm(_cmdfZyCr1L)
		const _argChoicese3tVBz7 = {
		
	}
		const _negateduw1wTq = "eUzK3xt8e4GaZ3YbnnLsj0XcwyW8rSupiEsMg8wLYS1ddwya0jfo9vVVbKkJfj8rMVCX8NxAfTQkX8SBSDbUSWr1K5ut2wAt9wW";
		const _defaultValueOCL508D = undefined;
		const _returnValuegrsM83e = null;
		const _defaultValueDescriptionrjOKcei = () => { return _returnValuegrsM83e };
		const _envVarmurXOg4 = undefined;
		const _descriptioncAQ7L10 = -7.552880980176676;
		const _optionnvAmljQ = {
			"argChoices": _argChoicese3tVBz7,
		"negate": _negateduw1wTq,
		"defaultValue": _defaultValueOCL508D,
		"defaultValueDescription": _defaultValueDescriptionrjOKcei,
		"envVar": _envVarmurXOg4,
		"description": _descriptioncAQ7L10
	}
		const _returnValueY1g7bsV = await _HelphvzepVB.optionDescription(_optionnvAmljQ)
		const _returnValueiXMSGLm = {
		
	}
		const _optionRVaAry5 = () => { return _returnValueiXMSGLm };
		const _returnValuehTzRYb = await _HelphvzepVB.optionDescription(_optionRVaAry5)
		const _argumentE2isptR = "ObEyaupqrdxPnlm9SPtfBhdUcdcOEG62CnWxxzFBqHpHCGdBJbSf9wUe9NCjkgzAp2wuLOXFAJA";
		const _returnValueO6KwTsJ = await _HelphvzepVB.argumentDescription(_argumentE2isptR)
	});

	it('test for Help', async () => {
		const _HelpioyI1S6 = new Help()
		const _returnValueKxow98c = false;
		const _sliceZR81ZQo = () => { return _returnValueKxow98c };
		const _nameBk2Kcai = {
			"slice": _sliceZR81ZQo
	}
		const _descriptionMc4gt9E = null;
		const _optionA9ZoQ5I = new Argument(_nameBk2Kcai, _descriptionMc4gt9E)
		const _arrayValueIpdl2Tt = "A";
		const _arrayValues3rVqnW = 0.7510992497946134;
		const _valueLGy95S5 = [_arrayValueIpdl2Tt, _arrayValues3rVqnW]
		const _descriptionslhokhs = undefined;
		const _returnValueJEihXir = await _optionA9ZoQ5I.default(_valueLGy95S5, _descriptionslhokhs)
		const _returnValue6axYrr = await _optionA9ZoQ5I.argRequired()
		const _valueUSOV2cP = {
		
	}
		const _descriptionZHOk4I = -4.423662583796193;
		const _returnValueRFLbv0j = await _optionA9ZoQ5I.default(_valueUSOV2cP, _descriptionZHOk4I)
		const _fnjDtdsrR = undefined;
		const _returnValueG985Dt6 = await _optionA9ZoQ5I.argParser(_fnjDtdsrR)
		const _returnValueWcYYk3g = await _HelpioyI1S6.optionDescription(_optionA9ZoQ5I)
		const _returnValuePO0gaQK = -1.4876273355554623;
		const _matchiepKaGF = () => { return _returnValuePO0gaQK };
		const _substrJVGYBVI = true;
		const _strvfMddwK = {
			"match": _matchiepKaGF,
		"substr": _substrJVGYBVI
	}
		const _widthELIghcR = -5.7448142021588415;
		const _indentEtf6hUb = 7.262398678208555;
		const _minColumnWidthdQ9OguB = -4.78355885568333;
		const _returnValuerbWf0xW = await _HelpioyI1S6.wrap(_strvfMddwK, _widthELIghcR, _indentEtf6hUb, _minColumnWidthdQ9OguB)
		const _arrayValueM6eQxfV = {
		
	}
		const _arrayValuemW5uX1V = undefined;
		const _cmdZmZYuS9 = [_arrayValueM6eQxfV, _arrayValuemW5uX1V]
		const _returnValueZqpJqH = await _HelpioyI1S6.visibleArguments(_cmdZmZYuS9)
	});

	it('test for Help', async () => {
		const _HelpWRReLU = new Help()
		const _arrayValuePN6ZSqA = null;
		const _arrayValuezVNXAtb = {
		
	}
		const _arrayValueaCZY8Hw = undefined;
		const _arrayValueMhHhewZ = false;
		const _returnValueQnktIJU = [_arrayValuePN6ZSqA, _arrayValuezVNXAtb, _arrayValueaCZY8Hw, _arrayValueMhHhewZ]
		const _descriptionhVIIxt = () => { return _returnValueQnktIJU };
		const _cmdRPQWSby = {
			"description": _descriptionhVIIxt
	}
		const _returnValueZoIhHko = await _HelpWRReLU.subcommandDescription(_cmdRPQWSby)
		const _nameKqZ3JSc = false;
		const _cmdIT8Ol1M = new Command(_nameKqZ3JSc)
		const _flagslujVV1s = "b03MFU2WcnSqfOF8Lk8E";
		const _arrayValueqz6enyy = "ur4JKVvGibCJTKepduBSNNtpcsjGirnWYPYa6OFcDHtUQXbpl0gJcU6JLIj6x";
		const _arrayValuei7rhw1y = undefined;
		const _returnValueCo3gxN = undefined;
		const _arrayValueSD6HisS = () => { return _returnValueCo3gxN };
		const _arrayValuePwirUXp = [_arrayValueqz6enyy, _arrayValuei7rhw1y, _arrayValueSD6HisS]
		const _descriptionGy0nGeC = [_arrayValuePwirUXp]
		const _fnj8gLApX = -0.5441766818722691;
		const _defaultValuecv6fnw0 = null;
		const _returnValuebpmReke = await _cmdIT8Ol1M.requiredOption(_flagslujVV1s, _descriptionGy0nGeC, _fnj8gLApX, _defaultValuecv6fnw0)
		const _arrayValueSjpalQ = null;
		const _arrayValueRwGClX7 = undefined;
		const _keyZR8qhKh = [_arrayValueSjpalQ, _arrayValueRwGClX7]
		const _returnValuemcZgIgS = await _cmdIT8Ol1M.getOptionValueSource(_keyZR8qhKh)
		const _subcommandN0hzEKd = 8.304260847370223;
		const _argsZ8Pu5IX = true;
		const _returnValuearuKfqC = await _cmdIT8Ol1M._executeSubCommand(_subcommandN0hzEKd, _argsZ8Pu5IX)
		const _returnValueEmvWjS0 = {
		
	}
		const _sliceh54vluc = () => { return _returnValueEmvWjS0 };
		const _argvW1zL9bn = {
			"slice": _sliceh54vluc
	}
		const _returnValueBJFQ7s7 = await _cmdIT8Ol1M.parseOptions(_argvW1zL9bn)
		const _returnValueIL8PKdE = await _HelpWRReLU.subcommandTerm(_cmdIT8Ol1M)
		const _optionKQYBxDK = "r8f6uiMPxtQ5aw";
		const _returnValueBifOWCR = await _HelpWRReLU.optionDescription(_optionKQYBxDK)
		const _returnValuefG5b1co = true;
		const _cmdv9cpBPL = () => { return _returnValuefG5b1co };
		const _returnValue8drNyR = await _HelpWRReLU.visibleOptions(_cmdv9cpBPL)
	});
})