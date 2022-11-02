export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpYVQG2qP = new Help()
		const _returnValuee8jjCuw = null;
		const _optionMWMlCU = () => { return _returnValuee8jjCuw };
		const _returnValueVjiwdef = await _HelpYVQG2qP.optionTerm(_optionMWMlCU)
		const _strKHln4E9 = "4Y6OboG7oiov7nWqulReT4zUxxjYqJYjHaOOzeIg9Liwl5MCbczseFeySi4i1IOSLwfO";
		const _widthADWluS = 1.5757403904661231;
		const _indentRsZzR3K = -0.9681146301254255;
		const _minColumnWidthND2uhIs = -4.37781351614869;
		const _returnValueuf04wXp = await _HelpYVQG2qP.wrap(_strKHln4E9, _widthADWluS, _indentRsZzR3K, _minColumnWidthND2uhIs)
	});

	it('test for Help', async () => {
		const _HelpMXedJjQ = new Help()
		const _cmdfWhFoD = "wtzPAl8MYGRqBXk5VdhRSHAmIO7";
		const _returnValueu4oQFfF = await _HelpMXedJjQ.visibleArguments(_cmdfWhFoD)
		const _arrayValueaHczNWM = true;
		const _arrayValueK9qfN5 = -1.8994643280177375;
		const _arrayValueQ6zWico = true;
		const _arrayValueRuqSqqS = "j1AcjhRS955Ot5OVpcfctlbBE2yhRm";
		const _returnValueIPt3tD = null;
		const _arrayValuebjvYb9o = () => { return _returnValueIPt3tD };
		const _arrayValueH1xChIU = [_arrayValueK9qfN5, _arrayValueQ6zWico, _arrayValueRuqSqqS, _arrayValuebjvYb9o]
		const _cmdVJgo99u = [_arrayValueaHczNWM, _arrayValueH1xChIU]
		const _arrayValueiOltvf = undefined;
		const _helperJxJZmBm = [_arrayValueiOltvf]
		const _returnValueTAxAUmk = await _HelpMXedJjQ.padWidth(_cmdVJgo99u, _helperJxJZmBm)
		const _returnValueCrt5cIa = -5.925167266301069;
		const _cmdWB4JJcp = () => { return _returnValueCrt5cIa };
		const _returnValuePg7pLG8 = await _HelpMXedJjQ.visibleOptions(_cmdWB4JJcp)
	});

	it('test for Help', async () => {
		const _HelpSFKElJp = new Help()
		const _exitCode1xbG4C = 7.677854321516044;
		const _codet2KX4RJ = "9jvs5SXQUv4YNEx6z6sIPqO4jyYl6JFBOWbzw9LFgOzdu4nE9fQr3PdlOckPjgNQU3";
		const _messagek0R2d1v = "5YJDYaQCNgryV9NM4EhYuauT8BzjQJmc13tJVs5B0p";
		const _argumentKZcDBKX = new CommanderError(_exitCode1xbG4C, _codet2KX4RJ, _messagek0R2d1v)
		const _returnValuetJWYSbx = await _HelpSFKElJp.argumentTerm(_argumentKZcDBKX)
		const _argChoicesP4NxUS = {
		
	}
		const _arrayValuehOCXarh = "jOC3CpAbqJRQJTqLWJzqQqOhRdKjRyii27GyMm34uuBBxFZ3OhTEu73koEmAvIAw";
		const _arrayValuegabFqcu = {
		
	}
		const _negateosSE7i = [_arrayValuehOCXarh, _arrayValuegabFqcu]
		const _defaultValueOUQGx3Z = undefined;
		const _defaultValueDescriptionMsUj0E = 1.6970382967329005;
		const _envVarQlcCds = undefined;
		const _descriptionLAowQ4Y = "YdBoEbrPoGHsMUUD0uHR";
		const _optionU9UHEc = {
			"argChoices": _argChoicesP4NxUS,
		"negate": _negateosSE7i,
		"defaultValue": _defaultValueOUQGx3Z,
		"defaultValueDescription": _defaultValueDescriptionMsUj0E,
		"envVar": _envVarQlcCds,
		"description": _descriptionLAowQ4Y
	}
		const _returnValuebikuC3O = await _HelpSFKElJp.optionDescription(_optionU9UHEc)
		const _cmdmzQq6qt = "oEmAOvBTExFc3Om55LMkjV9Nygwpu9piLCldE1ymC8m7lRlTvL1gL9KS5DMJxwwi2wir2Q";
		const _helperMjgeYO5 = new Help()
		const _arrayValueRCThkaJ = undefined;
		const _arrayValueLsPVNr4 = undefined;
		const _nameF61r1v = [_arrayValueRCThkaJ, _arrayValueLsPVNr4]
		const _descriptiondEFrMHU = "HYJ7aR8RQ";
		const _cmdasz2Ynz = new Argument(_nameF61r1v, _descriptiondEFrMHU)
		const _returnValueKArjjF6 = await _cmdasz2Ynz.name()
		const _returnValueaExKVMK = await _helperMjgeYO5.subcommandDescription(_cmdasz2Ynz)
		const _cmdQHfBRTJ = -4.14179378520855;
		const _returnValueXJq9Q8p = null;
		const _returnValuemwPsw2t = () => { return _returnValueXJq9Q8p };
		const _helperHHcQH9L = () => { return _returnValuemwPsw2t };
		const _returnValuesKtiFFq = await _helperMjgeYO5.longestArgumentTermLength(_cmdQHfBRTJ, _helperHHcQH9L)
		const _returnValuehfOH81r = undefined;
		const _name0uDgro = () => { return _returnValuehfOH81r };
		const _argumentjqdOzMt = {
			"name": _name0uDgro
	}
		const _returnValuedFHdHjR = await _helperMjgeYO5.argumentTerm(_argumentjqdOzMt)
		const _cmdvK9MxE = "YpqfdrCuYz86YE2VfQqa2koqh8guJaSLtC1KVWXzscv7IljM14bql9pL4qsKIUaCTi6F79wi21IFEzsNyI";
		const _sortSubcommandsOJLnGdO = true;
		const _returnValuepAnkyIJ = undefined;
		const _subcommandTermq8sWESV = () => { return _returnValuepAnkyIJ };
		const _helperUYep3QK = {
			"sortSubcommands": _sortSubcommandsOJLnGdO,
		"subcommandTerm": _subcommandTermq8sWESV
	}
		const _returnValueANg5Mrj = await _helperMjgeYO5.longestSubcommandTermLength(_cmdvK9MxE, _helperUYep3QK)
		const _optioniFV6bq = "M9vh0H1ztKi6N4Fx2g4a2ddv3aQ6AIYy0t";
		const _returnValueP7tQxvb = await _helperMjgeYO5.optionDescription(_optioniFV6bq)
		const _returnValuerTAwZmD = await _HelpSFKElJp.formatHelp(_cmdmzQq6qt, _helperMjgeYO5)
		const _cmdP9rGUo = 3.828609977396173;
		const _helperx4pHgBx = "4wSLPOwGRS9NAsgRcsQVPqiZOf8gS4V3UHhCxXVPo8AiRY58ppwSYUEP1dt3KJyCfsWsYCnNNXDUQn9";
		const _returnValueGkJJenc = await _HelpSFKElJp.longestSubcommandTermLength(_cmdP9rGUo, _helperx4pHgBx)
	});

	it('test for Help', async () => {
		const _HelpkCEtzGk = new Help()
		const _cmdGDZ9UDg = false;
		const _arrayValueEsWB7aX = -6.728702324317785;
		const _arrayValuegEjdGUa = undefined;
		const _helperUjOJbOR = [_arrayValueEsWB7aX, _arrayValuegEjdGUa]
		const _returnValuexeKsir7 = await _HelpkCEtzGk.longestArgumentTermLength(_cmdGDZ9UDg, _helperUjOJbOR)
		const _cmdNYbJ9W0 = null;
		const _sortSubcommandscN3PGI0 = "TC95c78pRq2GpVKWR0NFbjrYfB18iMczar2BJ4DXbplBeUlKI722FwFTD75LLyCg0w8prRHWzbVpFkK471FbFmPWJ0HGO4S";
		const _subcommandTermQB6q7w = "jSDpthKIzAYjxy4nbMYkXrXlimjH1QhTJBIP762pb9EKagboHaPHGCesGN";
		const _helperXw6bwM3 = {
			"sortSubcommands": _sortSubcommandscN3PGI0,
		"subcommandTerm": _subcommandTermQB6q7w
	}
		const _returnValueF6Y6844 = await _HelpkCEtzGk.formatHelp(_cmdNYbJ9W0, _helperXw6bwM3)
		const _cmdk5Jc8WW = "piMeVItf8mhKvdCcc79LAnXE58LHIkxBnOVE9He24CrNf8aik8qrszxrm3qf4t2H73wzGpUTzSj3VhLMSucmUIdRSUerzz";
		const _returnValueau8sM6y = {
		
	}
		const _helperLEMjvGR = () => { return _returnValueau8sM6y };
		const _returnValueebiYwNj = await _HelpkCEtzGk.longestOptionTermLength(_cmdk5Jc8WW, _helperLEMjvGR)
		const _cmdGHIxyw9 = true;
		const _arrayValueSAJ61wr = 1.4761279011259454;
		const _arrayValuezEBnN3 = undefined;
		const _helperXHlgADU = [_arrayValueSAJ61wr, _arrayValuezEBnN3]
		const _returnValueNg57k8B = await _HelpkCEtzGk.longestOptionTermLength(_cmdGHIxyw9, _helperXHlgADU)
		const _arrayValueB53WugQ = 2.9194966572578522;
		const _arrayValueqDPsy9K = undefined;
		const _arrayValueBQ0pZZL = -3.265007257305612;
		const _arrayValuePm4yXYx = [_arrayValueqDPsy9K, _arrayValueBQ0pZZL]
		const _cmdhJKSWE9 = [_arrayValueB53WugQ, _arrayValuePm4yXYx]
		const _returnValueB4qUmiH = await _HelpkCEtzGk.subcommandTerm(_cmdhJKSWE9)
	});

	it('test for Help', async () => {
		const _Helpi3t4TOY = new Help()
		const _argChoicesTWLegMd = {
		
	}
		const _negateEMxNGps = {
		
	}
		const _defaultValueAvJSwYm = undefined;
		const _defaultValueDescriptionlNYozDu = null;
		const _envVarCNDDK3S = undefined;
		const _descriptionxw3QsiZ = false;
		const _optionl38G4C = {
			"argChoices": _argChoicesTWLegMd,
		"negate": _negateEMxNGps,
		"defaultValue": _defaultValueAvJSwYm,
		"defaultValueDescription": _defaultValueDescriptionlNYozDu,
		"envVar": _envVarCNDDK3S,
		"description": _descriptionxw3QsiZ
	}
		const _returnValueAUeFcty = await _Helpi3t4TOY.optionDescription(_optionl38G4C)
		const __argsDescriptionbmIOmo5 = {
		
	}
		const _arrayValueikMf5Ea = "YObmJuV8UVaJYh6ADxjEU7hu1Rmh75GsagMzkScfyTP58rAnjC4UXnBBLWY6dr1sL8XQJzkI6vlwfH2";
		const _arrayValuef99Lodm = "QakmfQvzjsK6z4Du";
		const __argsIOlilO = [_arrayValueikMf5Ea, _arrayValuef99Lodm]
		const _cmddPepxaF = {
			"_argsDescription": __argsDescriptionbmIOmo5,
		"_args": __argsIOlilO
	}
		const _returnValueuGdhRbu = await _Helpi3t4TOY.visibleArguments(_cmddPepxaF)
	});

	it('test for Help', async () => {
		const _HelpChul4TW = new Help()
		const _returnValueTa7TcDZ = {
		
	}
		const _descriptionVTYrjD = () => { return _returnValueTa7TcDZ };
		const _cmdaqZiLky = {
			"description": _descriptionVTYrjD
	}
		const _returnValueNnFeJKe = await _HelpChul4TW.commandDescription(_cmdaqZiLky)
		const _cmdA1l2jgv = []
		const _returnValueBMhalUn = await _HelpChul4TW.visibleOptions(_cmdA1l2jgv)
		const _cmdAp2UwlR = 7.125213346494505;
		const _sortSubcommandsxqtdZYa = []
		const _arrayValueprlv5GQ = "Hw8nJyeFslqtlmFEwSwT7lUFqpKNFA8jEcdaMF6";
		const _arrayValuep6Fuebc = true;
		const _arrayValuemMMFOTo = [_arrayValueprlv5GQ, _arrayValuep6Fuebc]
		const _arrayValueAabeyH6 = "hXByar21e9rXRO5w0BdEVDBEgqfFk0GhLr6aOxRKM8Jjki2ufOtlj";
		const _arrayValueQO2ZHtM = [_arrayValuemMMFOTo, _arrayValueAabeyH6]
		const _arrayValuegGFlIiq = true;
		const _returnValuej7hNEgd = [_arrayValueQO2ZHtM, _arrayValuegGFlIiq]
		const _subcommandTermFiqkUtH = () => { return _returnValuej7hNEgd };
		const _helperMj1jaOB = {
			"sortSubcommands": _sortSubcommandsxqtdZYa,
		"subcommandTerm": _subcommandTermFiqkUtH
	}
		const _returnValueKAxnaRs = await _HelpChul4TW.longestSubcommandTermLength(_cmdAp2UwlR, _helperMj1jaOB)
	});

	it('test for Help', async () => {
		const _HelpRXhlFzn = new Help()
		const _cmdOqKwAkq = null;
		const _arrayValuezN49phJ = undefined;
		const _arrayValueQDdJIml = null;
		const _helpergZBjVhB = [_arrayValuezN49phJ, _arrayValueQDdJIml]
		const _returnValueDdJLLr3 = await _HelpRXhlFzn.padWidth(_cmdOqKwAkq, _helpergZBjVhB)
		const _cmduqyPUeq = "lMRgivjBU3MUaxIskefrbXGU8djAi2";
		const _returnValuei5bwsi = {
		
	}
		const _helperqr2mSZ = () => { return _returnValuei5bwsi };
		const _returnValueF5rbAo = await _HelpRXhlFzn.padWidth(_cmduqyPUeq, _helperqr2mSZ)
		const _returnValueIqRpzcX = "8K6SxxtS91TD1mvTdnrUrXzeFouM0ur5lYIAN8fmpTfyxRGp3hGFH19ucDYHZ247rUNZvh2dHVPs";
		const _includesvlJnvHc = () => { return _returnValueIqRpzcX };
		const _flags8Z6aoU = {
			"includes": _includesvlJnvHc
	}
		const _descriptionCHp6cnG = {
		
	}
		const _optionnttgwR5 = new Option(_flags8Z6aoU, _descriptionCHp6cnG)
		const _mandatoryITQa7dQ = false;
		const _returnValueJ3MWqYO = await _optionnttgwR5.makeOptionMandatory(_mandatoryITQa7dQ)
		const _returnValuek2IQyO8 = await _optionnttgwR5.name()
		const _hidevSUrQUh = false;
		const _returnValuecpguyp = await _optionnttgwR5.hideHelp(_hidevSUrQUh)
		const _returnValueMmoRp7F = await _optionnttgwR5.name()
		const _returnValueGW4ViTF = await _optionnttgwR5.attributeName()
		const _returnValuenO4y9I = await _HelpRXhlFzn.optionDescription(_optionnttgwR5)
	});

	it('test for Help', async () => {
		const _HelpEE7wgow = new Help()
		const _cmdoSEiQcI = null;
		const _helperD2ZiU8 = "PeVyESLxJtH7DLC9WizjXlXy86mafL2hXEwLE3Q0ESLKSc1F2u";
		const _returnValuehVhmGfx = await _HelpEE7wgow.longestOptionTermLength(_cmdoSEiQcI, _helperD2ZiU8)
		const _arrayValuejzuj8ym = "b";
		const _arrayValueOoK6oVd = null;
		const _arrayValuevpGGOqE = 9.433007089585598;
		const _returnValuewNHbodz = [_arrayValuejzuj8ym, _arrayValueOoK6oVd, _arrayValuevpGGOqE]
		const _namem67FHhw = () => { return _returnValuewNHbodz };
		const _descriptionba1QXF = null;
		const _cmd4XzI34 = new Argument(_namem67FHhw, _descriptionba1QXF)
		const _returnValueFYbVNKU = await _cmd4XzI34.name()
		const _fnpy9fJc = undefined;
		const _returnValue5Suj7m = await _cmd4XzI34.argParser(_fnpy9fJc)
		const _returnValuefuMG4Em = await _cmd4XzI34.name()
		const _returnValueZ1Aw1Xe = await _HelpEE7wgow.commandDescription(_cmd4XzI34)
	});

	it('test for Help', async () => {
		const _HelpOkBuWk = new Help()
		const _arrayValuemRFfjCs = null;
		const _argumentUOM5mz = [_arrayValuemRFfjCs]
		const _returnValuexqbdstO = await _HelpOkBuWk.argumentDescription(_argumentUOM5mz)
		const _cmdLUU6Fy1 = null;
		const _sortSubcommandsMwao9Pg = "f0OUqTKUlJwbNimA41n7WDRBHG9bQzcS6lefxRBRXNvGCV6XGEk";
		const _returnValuevzSZeFX = false;
		const _subcommandTermLJm70S = () => { return _returnValuevzSZeFX };
		const _helperz6Rlaeq = {
			"sortSubcommands": _sortSubcommandsMwao9Pg,
		"subcommandTerm": _subcommandTermLJm70S
	}
		const _returnValueDZxFVCX = await _HelpOkBuWk.formatHelp(_cmdLUU6Fy1, _helperz6Rlaeq)
		const _returnValuekKtSHRG = []
		const _arrayValueiQH0z9s = () => { return _returnValuekKtSHRG };
		const _arrayValueFzkj6ke = null;
		const _returnValueTrRfDgs = [_arrayValueiQH0z9s, _arrayValueFzkj6ke]
		const _arrayValuepwXFMFT = () => { return _returnValueTrRfDgs };
		const _arrayValueLHklgd2 = true;
		const _arrayValueMojNvbc = undefined;
		const _cmdcabgk6L = [_arrayValuepwXFMFT, _arrayValueLHklgd2, _arrayValueMojNvbc]
		const _returnValueDbBvsJi = null;
		const _helperr7UO5lU = () => { return _returnValueDbBvsJi };
		const _returnValueC3JLEDM = await _HelpOkBuWk.longestSubcommandTermLength(_cmdcabgk6L, _helperr7UO5lU)
	});

	it('test for Help', async () => {
		const _HelpSXcn3yj = new Help()
		const _returnValuei8tdQtX = null;
		const _returnValueH8wQjuw = () => { return _returnValuei8tdQtX };
		const _cmdFKbRAef = () => { return _returnValueH8wQjuw };
		const _returnValuealR7wg4 = await _HelpSXcn3yj.subcommandDescription(_cmdFKbRAef)
		const _cmdan6Jks = null;
		const _helperGXvEVR = new Help()
		const _returnValueZ4SEXkY = undefined;
		const _namecjF3H1l = () => { return _returnValueZ4SEXkY };
		const _cmdu9wsh6K = new Command(_namecjF3H1l)
		const _strdT2JvY7 = undefined;
		const _returnValueiDtna9R = await _cmdu9wsh6K.usage(_strdT2JvY7)
		const _argvkxpOh2S = {
		
	}
		const _parseOptionshFJdwR = false;
		const _returnValuerWjLsL7 = await _cmdu9wsh6K.parse(_argvkxpOh2S, _parseOptionshFJdwR)
		const _fnCOqWq5W = {
		
	}
		const _returnValueZxRT4Cu = await _cmdu9wsh6K.exitOverride(_fnCOqWq5W)
		const _returnValuechvQrDD = await _helperGXvEVR.visibleOptions(_cmdu9wsh6K)
		const _nameY5TMLR8 = false;
		const _cmdXQKavNI = new Command(_nameY5TMLR8)
		const _configurationpS97pi = undefined;
		const _returnValuesiFEbof = await _cmdXQKavNI.configureHelp(_configurationpS97pi)
		const _aliasesYHL3roA = undefined;
		const _returnValueGwzDPb8 = await _cmdXQKavNI.aliases(_aliasesYHL3roA)
		const _returnValuelzid6SC = await _helperGXvEVR.subcommandDescription(_cmdXQKavNI)
		const _returnValueBJ3hfd4 = await _HelpSXcn3yj.longestArgumentTermLength(_cmdan6Jks, _helperGXvEVR)
		const _argumentZfGeoYr = -5.3903148102022636;
		const _returnValueeKVx4Jh = await _HelpSXcn3yj.argumentDescription(_argumentZfGeoYr)
		const _arrayValueGwbnq5y = {
		
	}
		const _arrayValueavkgqC0 = "fcIC8ZOAV4nC4xbGaN0VntUULC82QVVkvY2wqdUWxHRbqfLi27xPOqUJYiM6Z1Y7HOAOA2FYITHu73GH5OA";
		const _arrayValueG8LwWDc = [_arrayValueGwbnq5y, _arrayValueavkgqC0]
		const _cmdeM85Cqa = [_arrayValueG8LwWDc]
		const _returnValueUa1XIzw = true;
		const _returnValueYzDXOYi = () => { return _returnValueUa1XIzw };
		const _visibleOptionsm5FIIe1 = () => { return _returnValueYzDXOYi };
		const _returnValueN07obQG = "NxfayuTOJlHt8KGdzg5VGCa7CSGzVpr3ZDaHvheB4QLFhzCTaAPKpGknuU2WD";
		const _optionTermvn4W2hj = () => { return _returnValueN07obQG };
		const _helpercVcZ1Fh = {
			"visibleOptions": _visibleOptionsm5FIIe1,
		"optionTerm": _optionTermvn4W2hj
	}
		const _returnValuewXtqHI = await _HelpSXcn3yj.longestOptionTermLength(_cmdeM85Cqa, _helpercVcZ1Fh)
		const _optionsf7EzDWW = {
		
	}
		const __hasHelpOption8qPWe0 = "UE6Ffnk7R";
		const __helpShortFlagilPWTZa = {
		
	}
		const _returnValueHCbsOD8 = null;
		const __findOptionJg0DjeB = () => { return _returnValueHCbsOD8 };
		const _arrayValueE63MiLI = 0.9055500231069509;
		const _arrayValueozHPzXF = false;
		const __helpLongFlagjlMrAVA = [_arrayValueE63MiLI, _arrayValueozHPzXF]
		const _returnValueDwbq1Gg = 4.434179802861923;
		const _returnValuedQBfMEv = () => { return _returnValueDwbq1Gg };
		const _createOptionD9xEIh = () => { return _returnValuedQBfMEv };
		const __helpDescriptionm01nSZ8 = "KT4iuu5vDYhryXbFG6SDlCHWvEUhM3AHFvWJRad7BjKy4eUAh9Nunn0ND6gGLcvGfvjPCIBMVM3";
		const __helpFlags8etRY5 = null;
		const _cmdGRhWqeU = {
			"options": _optionsf7EzDWW,
		"_hasHelpOption": __hasHelpOption8qPWe0,
		"_helpShortFlag": __helpShortFlagilPWTZa,
		"_findOption": __findOptionJg0DjeB,
		"_helpLongFlag": __helpLongFlagjlMrAVA,
		"createOption": _createOptionD9xEIh,
		"_helpDescription": __helpDescriptionm01nSZ8,
		"_helpFlags": __helpFlags8etRY5
	}
		const _returnValueolnPoUb = await _HelpSXcn3yj.visibleOptions(_cmdGRhWqeU)
	});

	it('test for Help', async () => {
		const _HelpsWGvuay = new Help()
		const _returnValueV2Taob7 = "Mz2f78UMjEl1E8MmcIqvH3EYDUkFWHJjXnAAxk2U68cm6nLSh2zHlfQTphsDtrDxpDINqpV9meX";
		const _slicekJZ5Nyq = () => { return _returnValueV2Taob7 };
		const _nameEQG8D3a = {
			"slice": _slicekJZ5Nyq
	}
		const _returnValuekxjH97k = 1.4318567612492181;
		const _descriptionQrMAU8m = () => { return _returnValuekxjH97k };
		const _cmdqLZOvFq = new Argument(_nameEQG8D3a, _descriptionQrMAU8m)
		const _returnValuetYHfuhe = "tcIjJAUXNOIwp2mRXAh0ElPEbaN5CGS7pwmA";
		const _includesaEPaSfw = () => { return _returnValuetYHfuhe };
		const _joinjl1PbPg = false;
		const _valuesam30eeb = {
			"includes": _includesaEPaSfw,
		"join": _joinjl1PbPg
	}
		const _returnValuey1J4JUf = await _cmdqLZOvFq.choices(_valuesam30eeb)
		const _returnValuenR99Yhk = await _cmdqLZOvFq.argRequired()
		const _returnValueiJXh3V = null;
		const _valuesPb8YESo = () => { return _returnValueiJXh3V };
		const _returnValueDv5bljk = await _cmdqLZOvFq.choices(_valuesPb8YESo)
		const _returnValuebmRAeo4 = await _HelpsWGvuay.commandUsage(_cmdqLZOvFq)
		const _arrayValued7YfoHr = -6.216714583527148;
		const _arrayValuefc2Ye6N = 7.7348936197201255;
		const _cmdTHkQMf = [_arrayValued7YfoHr, _arrayValuefc2Ye6N]
		const _returnValueKY951p = await _HelpsWGvuay.visibleArguments(_cmdTHkQMf)
		const _returnValueQCT7rCy = {
		
	}
		const _flagsAbQnhJo = () => { return _returnValueQCT7rCy };
		const _descriptionCHI6l7B = {
		
	}
		const _argumentXpHORtr = new Option(_flagsAbQnhJo, _descriptionCHI6l7B)
		const _returnValueeuYFnlE = 3.864557870008758;
		const _valuesN4R9eDg = () => { return _returnValueeuYFnlE };
		const _returnValueysJviM7 = await _argumentXpHORtr.choices(_valuesN4R9eDg)
		const _valuezXOh14x = undefined;
		const _descriptionZons5c6 = undefined;
		const _returnValueEUGxEX9 = await _argumentXpHORtr.default(_valuezXOh14x, _descriptionZons5c6)
		const _fnSe3k3h9 = undefined;
		const _returnValueMrCVSbe = await _argumentXpHORtr.argParser(_fnSe3k3h9)
		const _returnValuevtI1YJs = await _HelpsWGvuay.argumentTerm(_argumentXpHORtr)
		const _matchUN1ueps = null;
		const _returnValuegYTEcv = undefined;
		const _substrcA7fksg = () => { return _returnValuegYTEcv };
		const _strQg3rBR3 = {
			"match": _matchUN1ueps,
		"substr": _substrcA7fksg
	}
		const _widthm77CwIQ = 2.4664853427458837;
		const _indentPFCFRHF = -1.0922541035551436;
		const _minColumnWidthorvgdBs = 3.699676034233331;
		const _returnValuez6tcz17 = await _HelpsWGvuay.wrap(_strQg3rBR3, _widthm77CwIQ, _indentPFCFRHF, _minColumnWidthorvgdBs)
		const _cmdDdBHczA = undefined;
		const _helperdJa8TEz = "mfpm4y634mpgECK5bpMFPRxBlDAdcP4ObevPMOfZI9E";
		const _returnValueLpOCRC = await _HelpsWGvuay.longestOptionTermLength(_cmdDdBHczA, _helperdJa8TEz)
	});

	it('test for Help', async () => {
		const _HelpTVrhPKW = new Help()
		const _arrayValuerLLh9pc = undefined;
		const _arrayValueuntf0Wq = "1leKANhl8Dljq7cmd4U0unJsalhKkcFvPDeIn8jQkepO2RoY2QMtl3wdhMH7v9AZmhVxGDxTTLOoiL";
		const _returnValueMOOyZeN = false;
		const _arrayValueKfAK3eu = () => { return _returnValueMOOyZeN };
		const _argumentOvtQ3fn = [_arrayValuerLLh9pc, _arrayValueuntf0Wq, _arrayValueKfAK3eu]
		const _returnValuebRdeyNI = await _HelpTVrhPKW.argumentDescription(_argumentOvtQ3fn)
		const _cmdkc4sMZ1 = "avGWYLdrgM3SyfbfcEwbDVq4aWQKGk7GSwuOvo9kdgtL5YnBdXHw1j5PKDfiagKaGwl";
		const _returnValuevjB37b5 = await _HelpTVrhPKW.subcommandTerm(_cmdkc4sMZ1)
		const _arrayValueaxAetJV = undefined;
		const _arrayValueeK1H19I = -1.9616340717787164;
		const _descriptionHrtGC4z = [_arrayValueaxAetJV, _arrayValueeK1H19I]
		const _cmdsIIlNc3 = {
			"description": _descriptionHrtGC4z
	}
		const _returnValueE6QwaWD = await _HelpTVrhPKW.commandDescription(_cmdsIIlNc3)
		const _argumentKQrIHAa = "0KCzlwD7XldBYODUICSqEE7EzWg5yWXKBaYjp905jdTdllmwRpFn";
		const _returnValuemaKdHvT = await _HelpTVrhPKW.argumentTerm(_argumentKQrIHAa)
	});

	it('test for Help', async () => {
		const _HelprugH7cw = new Help()
		const _cmdaULbqbs = "LJV3gf";
		const _arrayValuevP0Nk1Z = -7.502532668595022;
		const _arrayValueNKfNbFS = -2.2966871394379273;
		const _arrayValueTDyiZdH = 6.640071013539789;
		const _helperTshLsdn = [_arrayValuevP0Nk1Z, _arrayValueNKfNbFS, _arrayValueTDyiZdH]
		const _returnValuenXhxWAG = await _HelprugH7cw.longestSubcommandTermLength(_cmdaULbqbs, _helperTshLsdn)
		const _cmdAvFpYg = null;
		const _returnValueUX4iu2D = await _HelprugH7cw.subcommandTerm(_cmdAvFpYg)
		const _cmdNxdKtWc = true;
		const _returnValueze42xHQ = "jAnP1RyP5jVswhimxvixZc2pv1Px4BkTyfyjvQHA1OIrpmoJdjMb76EM91";
		const _visibleArgumentscdvJHsf = () => { return _returnValueze42xHQ };
		const _returnValuehmmHfrr = "GWop1n4usaQICSITdCKQMBjLc1SCIWYOi183Y7IKP4ByRrDdPu15Wy1e3rd0nmqGjcgf69";
		const _argumentTermjg5T31 = () => { return _returnValuehmmHfrr };
		const _helperqEymvDh = {
			"visibleArguments": _visibleArgumentscdvJHsf,
		"argumentTerm": _argumentTermjg5T31
	}
		const _returnValueEaPYjHH = await _HelprugH7cw.longestArgumentTermLength(_cmdNxdKtWc, _helperqEymvDh)
	});

	it('test for Help', async () => {
		const _Helps4Thfdh = new Help()
		const __nametfhL9y0 = 1.72622780492852;
		const __aliasesmFQUnst = {
		
	}
		const _parentcfWTVVF = undefined;
		const _returnValueDSIBny3 = -3.5234656277859147;
		const _usageZlBTVX = () => { return _returnValueDSIBny3 };
		const _cmdiyNk2hd = {
			"_name": __nametfhL9y0,
		"_aliases": __aliasesmFQUnst,
		"parent": _parentcfWTVVF,
		"usage": _usageZlBTVX
	}
		const _returnValueboCWqvA = await _Helps4Thfdh.commandUsage(_cmdiyNk2hd)
		const _arrayValueLoFu1m9 = null;
		const _arrayValueCpkpbPR = -4.069180179361743;
		const _arrayValuesjqslKW = {
		
	}
		const _arrayValues3KBdIT = [_arrayValuesjqslKW]
		const _arrayValueoFXnR3w = null;
		const _flagsEudgkUg = [_arrayValueLoFu1m9, _arrayValueCpkpbPR, _arrayValues3KBdIT, _arrayValueoFXnR3w]
		const _optionTQ4KvnT = {
			"flags": _flagsEudgkUg
	}
		const _returnValueK7NWOST = await _Helps4Thfdh.optionTerm(_optionTQ4KvnT)
		const __namek5wuMZQ = -9.872805992101174;
		const __aliasesSLTcpOa = {
		
	}
		const _parentuI752OM = {
		
	}
		const _returnValueozgDhYL = true;
		const _usagexVUjRG = () => { return _returnValueozgDhYL };
		const _cmdog9FcFn = {
			"_name": __namek5wuMZQ,
		"_aliases": __aliasesSLTcpOa,
		"parent": _parentuI752OM,
		"usage": _usagexVUjRG
	}
		const _returnValueDSGNmC = await _Helps4Thfdh.commandUsage(_cmdog9FcFn)
		const _cmdZOvD0js = undefined;
		const _helpermUNL4H9 = "PjRAmowortdCRpjxyR5xnPeZ9zKCVd2hI1BvZSC";
		const _returnValuePuKj2z = await _Helps4Thfdh.formatHelp(_cmdZOvD0js, _helpermUNL4H9)
		const _cmdO6t9Ajm = {
		
	}
		const _sortSubcommandsPMyVozb = "L9Cof8HCxqQ";
		const _returnValuetH1JSFi = -8.844184010711507;
		const _subcommandTermot9jBla = () => { return _returnValuetH1JSFi };
		const _helpere3JHmYp = {
			"sortSubcommands": _sortSubcommandsPMyVozb,
		"subcommandTerm": _subcommandTermot9jBla
	}
		const _returnValueASCCsxv = await _Helps4Thfdh.formatHelp(_cmdO6t9Ajm, _helpere3JHmYp)
	});

	it('test for Help', async () => {
		const _Helpf0inGBR = new Help()
		const _arrayValueBqtz6z = true;
		const _cmdqUtBZl9 = [_arrayValueBqtz6z]
		const _returnValueEufqg3c = await _Helpf0inGBR.visibleCommands(_cmdqUtBZl9)
	});

	it('test for Help', async () => {
		const _HelpgG5LAsH = new Help()
		const _namecc1HRy1 = []
		const _descriptionSajOB6T = null;
		const _argumentHfcg6y = new Argument(_namecc1HRy1, _descriptionSajOB6T)
		const _includesW4KzJ1A = -0.1354904088004396;
		const _arrayValueA5BJJao = {
		
	}
		const _arrayValuelq6sF3X = undefined;
		const _returnValueBpJfTNT = [_arrayValueA5BJJao, _arrayValuelq6sF3X]
		const _joinIUqgzI = () => { return _returnValueBpJfTNT };
		const _valueschhrZEh = {
			"includes": _includesW4KzJ1A,
		"join": _joinIUqgzI
	}
		const _returnValueRBHyQg = await _argumentHfcg6y.choices(_valueschhrZEh)
		const _returnValue0B2ohm = await _argumentHfcg6y.argOptional()
		const _returnValuexlQM98D = await _HelpgG5LAsH.argumentTerm(_argumentHfcg6y)
		const _argChoicesmbuJDW5 = {
		
	}
		const _defaultValuentNueAA = null;
		const _defaultValueDescriptionV2uiDke = undefined;
		const _descriptionApZPshh = null;
		const _argumentCA28vgo = {
			"argChoices": _argChoicesmbuJDW5,
		"defaultValue": _defaultValuentNueAA,
		"defaultValueDescription": _defaultValueDescriptionV2uiDke,
		"description": _descriptionApZPshh
	}
		const _returnValuetyh5rJ = await _HelpgG5LAsH.argumentDescription(_argumentCA28vgo)
	});

	it('test for Help', async () => {
		const _Helpm2IZ2tQ = new Help()
		const _strr1udyGj = "ThHf1G6RZvy8yPz1uRFRSgZ58LFQj8PS";
		const _widthpgBI95F = -1.69070141599666;
		const _indentJKD3cje = 7.417752870768858;
		const _minColumnWidthi8y8m85 = -6.597453808371634;
		const _returnValueww0E3TH = await _Helpm2IZ2tQ.wrap(_strr1udyGj, _widthpgBI95F, _indentJKD3cje, _minColumnWidthi8y8m85)
	});

	it('test for Help', async () => {
		const _HelpI8a7IwM = new Help()
		const _cmdO3lPaS = undefined;
		const _helperqk72Lrc = new Help()
		const _arrayValuewAbPhjY = -5.629471492686045;
		const _arrayValueabNvPLA = 2.1088919921830485;
		const _arrayValueY8CnXL = 8.247313208777793;
		const _arrayValueY9c8fyq = [_arrayValuewAbPhjY, _arrayValueabNvPLA, _arrayValueY8CnXL]
		const _arrayValueVipTpOK = "i53cIDRYIcgwAC4wRDBeTDw8Y4KugDXcqzAQPLY4k2Pt8T8MhTU2CGt8JopmXeieigkb3l6QjEaieB8wvCp0VjibJPx";
		const _cmdUl1c3WE = [_arrayValueY9c8fyq, _arrayValueVipTpOK]
		const _arrayValueLYFkrRg = undefined;
		const _arrayValueQmGZeaS = true;
		const _returnValuepwlNXx = [_arrayValueLYFkrRg, _arrayValueQmGZeaS]
		const _visibleArgumentsqnl2fGX = () => { return _returnValuepwlNXx };
		const _returnValueCEPKsVv = 9.44539932671876;
		const _argumentTermAnVEnJ3 = () => { return _returnValueCEPKsVv };
		const _helperC4CR6Nb = {
			"visibleArguments": _visibleArgumentsqnl2fGX,
		"argumentTerm": _argumentTermAnVEnJ3
	}
		const _returnValueQbmZvA8 = await _helperqk72Lrc.longestArgumentTermLength(_cmdUl1c3WE, _helperC4CR6Nb)
		const _arrayValueUODcZAE = true;
		const _arrayValueMBTFRTo = true;
		const _namej9eg1m0 = [_arrayValueUODcZAE, _arrayValueMBTFRTo]
		const _cmdyPHG29e = new Command(_namej9eg1m0)
		const _returnValueVdCW4zj = await _cmdyPHG29e._checkForMissingMandatoryOptions()
		const _arrayValue1Z8O02 = 2.6898103282395134;
		const _keyPwyWYf7 = [_arrayValue1Z8O02]
		const _returnValueb3EyBas = await _cmdyPHG29e.getOptionValueSource(_keyPwyWYf7)
		const _keydnYAUfb = "Ys26zA";
		const _arrayValueERkSubb = 2.168989665869077;
		const _arrayValuelZtsSGu = "lh9C8BxDdQVC6Kj83mWIzXqBfHA9cdG4";
		const _returnValueNyOLgGO = [_arrayValueERkSubb, _arrayValuelZtsSGu]
		const _valuejrmLKtn = () => { return _returnValueNyOLgGO };
		const _arrayValueSHSKIls = []
		const _arrayValueb7AmE46 = 0.26299849878134296;
		const _arrayValueqeBzVrW = true;
		const _returnValues1kwiLN = {
		
	}
		const _arrayValueJLjiYNw = () => { return _returnValues1kwiLN };
		const _sourcelXxafCD = [_arrayValueSHSKIls, _arrayValueb7AmE46, _arrayValueqeBzVrW, _arrayValueJLjiYNw]
		const _returnValuebjCHdac = await _cmdyPHG29e.setOptionValueWithSource(_keydnYAUfb, _valuejrmLKtn, _sourcelXxafCD)
		const _returnValueD2OOeMR = await _helperqk72Lrc.visibleOptions(_cmdyPHG29e)
		const _arrayValuecSkW3SZ = -2.487900491005587;
		const _arrayValueQIEd4J8 = null;
		const _cmdROjbNpY = [_arrayValuecSkW3SZ, _arrayValueQIEd4J8]
		const _arrayValueX1pcP5A = undefined;
		const _arrayValueyk5KGXv = null;
		const _arrayValueW9tLUH9 = "JxACsH9rtdkmmdvVagLkC594Gef7DDiBInNUvh1l708D5TXO";
		const _arrayValueLg30Xd3 = 7.994078597909343;
		const _helperzTiN4zU = [_arrayValueX1pcP5A, _arrayValueyk5KGXv, _arrayValueW9tLUH9, _arrayValueLg30Xd3]
		const _returnValuetwxOyg = await _helperqk72Lrc.formatHelp(_cmdROjbNpY, _helperzTiN4zU)
		const _cmdR4VCwDu = "9TpIIzUKs0GzQ7QyJzPkr3F9jry7JsEfGNKzXWpnxQgB7IPhd2MG8q3dP79b9lkwbVyUEWRqT1lTdc7b";
		const _returnValueOzoIrQ8 = await _helperqk72Lrc.commandDescription(_cmdR4VCwDu)
		const _returnValueEkYrtKq = await _HelpI8a7IwM.formatHelp(_cmdO3lPaS, _helperqk72Lrc)
		const _returnValuekQoPIWa = false;
		const _createCommandY0vfMPk = () => { return _returnValuekQoPIWa };
		const _cmdOTmTqyP = {
			"createCommand": _createCommandY0vfMPk
	}
		const _returnValueC0kDzg = await _HelpI8a7IwM.visibleCommands(_cmdOTmTqyP)
		const _cmdoJUg9cv = undefined;
		const _helperUy9bI2H = new Help()
		const _returnValueEak0haJ = {
		
	}
		const _cmdjI3mU7B = () => { return _returnValueEak0haJ };
		const _returnValuefSfrQPX = await _helperUy9bI2H.visibleArguments(_cmdjI3mU7B)
		const _argumentkosNqSl = "xXBmrF3zTkl7mbpxDcNWdyXshxianTq5MvVP1zLFDl";
		const _returnValueztXMHX = await _helperUy9bI2H.argumentDescription(_argumentkosNqSl)
		const _returnValueDnkP4xy = await _HelpI8a7IwM.longestArgumentTermLength(_cmdoJUg9cv, _helperUy9bI2H)
		const _arrayValueVDucNqL = {
		
	}
		const _arrayValuesyPse4R = "NMKY4uDgxV82RC8Cs4F53NXMTAtOduHIC6E3apGkrC7rrh6KWwO2Nwj3nxk4N2xB3TMDOa9QRKNBGq5Q27mmSxHx8lBiYin";
		const _arrayValueaUaEvqp = 2.9879095333294163;
		const _arrayValueZIek0ot = [_arrayValuesyPse4R, _arrayValueaUaEvqp]
		const _returnValueWkITI3D = [_arrayValueVDucNqL, _arrayValueZIek0ot]
		const _cmdGi7AIjN = () => { return _returnValueWkITI3D };
		const _returnValueceznSup = await _HelpI8a7IwM.visibleArguments(_cmdGi7AIjN)
	});

	it('test for Help', async () => {
		const _HelpgkpHU6H = new Help()
		const _returnValuekMzGzZA = null;
		const _namefX8bKDc = () => { return _returnValuekMzGzZA };
		const _cmdTPSXmNH = new Command(_namefX8bKDc)
		const _promiseW5Ik1qY = {
		
	}
		const _eventBqLLHo2 = "RDwk2uHdUXUYTyqja5nWb1seugB54jv4JUMDEWtA0xCY27iFcEWhO1n9FpsY4u";
		const _returnValuejDvSNrE = await _cmdTPSXmNH._chainOrCallHooks(_promiseW5Ik1qY, _eventBqLLHo2)
		const _configurationd9cu2n = undefined;
		const _returnValueK1iZnO = await _cmdTPSXmNH.configureOutput(_configurationd9cu2n)
		const _returnValueyRnqJUn = await _cmdTPSXmNH._checkNumberOfArguments()
		const _arrayValueOPSALzp = "tCQePcB3S4BImqdH8nkizB17EjhNuG1sydqfk";
		const _arrayValueOLOIW5L = null;
		const _arrayValuevDeLzJU = -8.129875338574283;
		const _argvHQfMTew = [_arrayValueOPSALzp, _arrayValueOLOIW5L, _arrayValuevDeLzJU]
		const _parseOptionsHEMz6tL = null;
		const _returnValueS2qD0c = await _cmdTPSXmNH.parse(_argvHQfMTew, _parseOptionsHEMz6tL)
		const _returnValueHHsBoJw = await _HelpgkpHU6H.subcommandTerm(_cmdTPSXmNH)
		const _nameXUWQ6Q = "XuhgBHlhRQakK16o6TtXPU619IueI1y8Db1TjHL5L4rgW7zgUGthC8VpFUc1NxULHTl3fnxpxJrvO";
		const _descriptionTYXEapD = "GXnOlkrNxSdETulBcwxejOWpq835xjpGsN6UAYahGEQhBpvV1P7t3UFOTYGuVCj2zrXQUTWj50kEWMfiXb9yajE4Xn8A";
		const _cmdfLGA8FH = new Argument(_nameXUWQ6Q, _descriptionTYXEapD)
		const _valuejQyCmcf = undefined;
		const _descriptionhZayuk0 = "PhwP4rIxFxM9RAULmNXy9TMSdeUkTy6pvkujPgWyX9lEV6uTgTL2e9eUfPsTRAyJl9aCAyMkcsGw52ruTRlCvJ4gubXFnyCFYh";
		const _returnValueUUbQSOH = await _cmdfLGA8FH.default(_valuejQyCmcf, _descriptionhZayuk0)
		const _fncYYRJFq = {
		
	}
		const _returnValueGocXlWD = await _cmdfLGA8FH.argParser(_fncYYRJFq)
		const _returnValueq24P8Zb = await _HelpgkpHU6H.commandDescription(_cmdfLGA8FH)
		const _arrayValueWsJ5rdC = null;
		const _cmdfXtI2Id = [_arrayValueWsJ5rdC]
		const _sortSubcommandsndTXJhh = undefined;
		const _returnValue6Fk5P4 = "Jd3f0XxYou9F7EqXbXEPSKmLKgoz3BvVxuIcqH9awmHT5om5kTjV";
		const _subcommandTermil56A8 = () => { return _returnValue6Fk5P4 };
		const _helperZBpRMkr = {
			"sortSubcommands": _sortSubcommandsndTXJhh,
		"subcommandTerm": _subcommandTermil56A8
	}
		const _returnValueXqkxcdV = await _HelpgkpHU6H.formatHelp(_cmdfXtI2Id, _helperZBpRMkr)
	});

	it('test for Help', async () => {
		const _HelplkabSoA = new Help()
		const _argChoicesXXQFdoo = {
		
	}
		const _negatef8dOQDh = false;
		const _defaultValuepDtsL4 = undefined;
		const _returnValueMO61T6b = null;
		const _defaultValueDescriptionPbRn7CK = () => { return _returnValueMO61T6b };
		const _envVarbWR3gum = undefined;
		const _descriptionMInW4lc = "PeR56QH0GDvzP4C2FjO3aF1n3ACt1GahvLuu5sAhOBnzS30JNELauuHH4nUKM312jpq5hOruf86C5IWFi4ns1eyk";
		const _optionhcOVLCl = {
			"argChoices": _argChoicesXXQFdoo,
		"negate": _negatef8dOQDh,
		"defaultValue": _defaultValuepDtsL4,
		"defaultValueDescription": _defaultValueDescriptionPbRn7CK,
		"envVar": _envVarbWR3gum,
		"description": _descriptionMInW4lc
	}
		const _returnValueS9FjsFF = await _HelplkabSoA.optionDescription(_optionhcOVLCl)
	});

	it('test for Help', async () => {
		const _HelpJ4akz6 = new Help()
		const _argChoicest3YsYbJ = {
		
	}
		const _negateKxJqbm5 = 9.867428125315712;
		const _defaultValued4RPpGq = undefined;
		const _defaultValueDescriptionBYX3Tpg = {
		
	}
		const _envVarNWINlAg = 0.7898526335493692;
		const _descriptionN49ueHn = undefined;
		const _optionKWOESXJ = {
			"argChoices": _argChoicest3YsYbJ,
		"negate": _negateKxJqbm5,
		"defaultValue": _defaultValued4RPpGq,
		"defaultValueDescription": _defaultValueDescriptionBYX3Tpg,
		"envVar": _envVarNWINlAg,
		"description": _descriptionN49ueHn
	}
		const _returnValueqhn36pI = await _HelpJ4akz6.optionDescription(_optionKWOESXJ)
	});

	it('test for Help', async () => {
		const _HelpeBmsFND = new Help()
		const _returnValueI4ycL4 = -4.981415360909437;
		const _matcheuYXF3E = () => { return _returnValueI4ycL4 };
		const _arrayValueYfXZf4o = "k3IR16KCjWHPsvBe4";
		const _returnValueu7OyDuB = [_arrayValueYfXZf4o]
		const _substrG1U2jHI = () => { return _returnValueu7OyDuB };
		const _strld22xyi = {
			"match": _matcheuYXF3E,
		"substr": _substrG1U2jHI
	}
		const _widthh8WyUoZ = 8.189484708864065;
		const _indentAHX1LoI = -3.65926056925162;
		const _minColumnWidthcweA9sj = 1.5457570394633091;
		const _returnValueq2aTh2s = await _HelpeBmsFND.wrap(_strld22xyi, _widthh8WyUoZ, _indentAHX1LoI, _minColumnWidthcweA9sj)
		const _cmdEmB8Ct4 = 0.4511074567266746;
		const _helperPnYIQEk = new Help()
		const _optionf1vazil = "rsO4MookqItlCiTda9rIAxddAGcUL21WFcdQ3cQfasDhCcyUsIqowJhO8VGG1vC8qPkbXB";
		const _returnValueL51NC1D = await _helperPnYIQEk.optionDescription(_optionf1vazil)
		const _returnValueFFahJMM = null;
		const _cmdw7paPur = () => { return _returnValueFFahJMM };
		const _returnValueiC3h5pv = await _helperPnYIQEk.visibleOptions(_cmdw7paPur)
		const _arrayValuePTQx7Q = true;
		const _arrayValueSK0xSbp = 0.3323879904644542;
		const _arrayValueeteKAny = null;
		const _cmdmq2iTiF = [_arrayValuePTQx7Q, _arrayValueSK0xSbp, _arrayValueeteKAny]
		const _returnValueZIq7dsI = await _helperPnYIQEk.subcommandTerm(_cmdmq2iTiF)
		const _cmdyvgrRFT = undefined;
		const _returnValueAyAw5yR = true;
		const _visibleArgumentsYE4V37o = () => { return _returnValueAyAw5yR };
		const _arrayValueqyOSsvE = null;
		const _arrayValuen79mn4 = undefined;
		const _arrayValueBJzFT6i = null;
		const _arrayValuecPYo9kz = [_arrayValuen79mn4, _arrayValueBJzFT6i]
		const _arrayValuePsGUjB3 = "R0ueD9CwlTxbwu7EOP97RQ75QCO9nwmxnUtO7uRzVBAJTVUrRXX5YY8gi5wUcamVLgMLESKdpYqDFi2P4j";
		const _arrayValueVSFHiWq = undefined;
		const _arrayValueV4ViFVA = null;
		const _arrayValue4RSl0Y = [_arrayValuecPYo9kz, _arrayValuePsGUjB3, _arrayValueVSFHiWq, _arrayValueV4ViFVA]
		const _arrayValueZrK8o0B = "4Vw8kcLa39V71tESxUbF1OO6I1XjnUvyofAt6EGHieokIjvOGg17S4FpT6bbttEMs6Duj6DXVGsbHdyzMH5g1YCqx";
		const _returnValueD0BYdn = "hLVMABMlUXIOGzl8K1hm9kvUAhe7OTTS8frDhXnKy1PoHyCEc7FW3I2ljUwKdSeCT0kP90IFg8hESMqIKWg5Fe7O7gx";
		const _arrayValuelIWxjQ = () => { return _returnValueD0BYdn };
		const _arrayValuewvxvZQK = [_arrayValueZrK8o0B, _arrayValuelIWxjQ]
		const _arrayValueUYGvpFO = false;
		const _arrayValueDuiP9Ix = [_arrayValue4RSl0Y, _arrayValuewvxvZQK, _arrayValueUYGvpFO]
		const _arrayValuepcZStol = undefined;
		const _arrayValueidTHOMb = [_arrayValueqyOSsvE, _arrayValueDuiP9Ix, _arrayValuepcZStol]
		const _arrayValueaSWJP9 = -7.987248476816741;
		const _arrayValueA6Emz3Y = true;
		const _returnValuek8Xixm = null;
		const _arrayValueulKiH3b = () => { return _returnValuek8Xixm };
		const _returnValueQHCJkvL = [_arrayValueidTHOMb, _arrayValueaSWJP9, _arrayValueA6Emz3Y, _arrayValueulKiH3b]
		const _argumentTermfI1uWx0 = () => { return _returnValueQHCJkvL };
		const _helperUe3IK67 = {
			"visibleArguments": _visibleArgumentsYE4V37o,
		"argumentTerm": _argumentTermfI1uWx0
	}
		const _returnValuel36Y246 = await _helperPnYIQEk.longestArgumentTermLength(_cmdyvgrRFT, _helperUe3IK67)
		const _returnValuew65OpZd = await _HelpeBmsFND.formatHelp(_cmdEmB8Ct4, _helperPnYIQEk)
		const _cmdfZhZgeW = "jv1prCLNvw8kAg4idw18Fqbx8kDyCYGo8dk2zJCJ72iW21sImDbh8MBk4bQR5PvaTVulH0g26yz5AVusHdP13MBwVnRa";
		const _returnValuesdW9O4W = await _HelpeBmsFND.subcommandTerm(_cmdfZhZgeW)
	});

	it('test for Help', async () => {
		const _HelpNNT9ONM = new Help()
		const _argChoicesBgONrhh = []
		const _defaultValueLwuWWMU = undefined;
		const _defaultValueDescriptionjKweOYI = undefined;
		const _descriptionc0RebEz = false;
		const _argumentBIaiINu = {
			"argChoices": _argChoicesBgONrhh,
		"defaultValue": _defaultValueLwuWWMU,
		"defaultValueDescription": _defaultValueDescriptionjKweOYI,
		"description": _descriptionc0RebEz
	}
		const _returnValueiojO36V = await _HelpNNT9ONM.argumentDescription(_argumentBIaiINu)
	});

	it('test for Help', async () => {
		const _HelphiN5eSr = new Help()
		const _arrayValuerajya9g = {
		
	}
		const _arrayValueH5PJYFf = 9.751278181455739;
		const _arrayValueMEbZS80 = null;
		const _arrayValuekGvRWM = null;
		const _arrayValueMt5hWyL = null;
		const _arrayValuem4hqZ0B = null;
		const _arrayValueVy3fVl = [_arrayValueH5PJYFf, _arrayValueMEbZS80, _arrayValuekGvRWM, _arrayValueMt5hWyL, _arrayValuem4hqZ0B]
		const _arrayValueO6xzmco = "G0Y4zJRh8nYLmRk7J0PgRGXT8H0rP9dDozV9HeuR3IWCANwJpf2AcE1v7kwqGdcBP6UzIxrKpn0abu5QHihOQhg";
		const _commandsNU5OsYk = [_arrayValuerajya9g, _arrayValueVy3fVl, _arrayValueO6xzmco]
		const _returnValueuLntvCk = []
		const __hasImplicitHelpCommandGEFGV6d = () => { return _returnValueuLntvCk };
		const __helpCommandnameAndArgswU8fbr2 = {
		
	}
		const _returnValueS9c5EK0 = undefined;
		const _createCommandmjVJAJb = () => { return _returnValueS9c5EK0 };
		const __helpCommandDescriptionnNXPgnp = undefined;
		const _cmdDNO9LG1 = {
			"commands": _commandsNU5OsYk,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandGEFGV6d,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgswU8fbr2,
		"createCommand": _createCommandmjVJAJb,
		"_helpCommandDescription": __helpCommandDescriptionnNXPgnp
	}
		const _returnValuexJk7rsi = await _HelphiN5eSr.visibleCommands(_cmdDNO9LG1)
		const _arrayValueoVriuRj = 6.156360335606223;
		const _returnValueAB7W1O = undefined;
		const _arrayValueU9PDDys = () => { return _returnValueAB7W1O };
		const _returnValueo8CIE9D = [_arrayValueoVriuRj, _arrayValueU9PDDys]
		const _argumentTwr1sLq = () => { return _returnValueo8CIE9D };
		const _returnValueDKmf8Ci = await _HelphiN5eSr.argumentTerm(_argumentTwr1sLq)
	});

	it('test for Help', async () => {
		const _HelpmKVmYaB = new Help()
		const _flagsxnPCJva = "eCEQARg3Qqk42DHYlr9djnx8Ft5PnyWN35n8GPlnJVqNyxJIBKQicKrZUgSK7U4RhgwEuENM6vOamuAciW3kVtA7y75UOUw";
		const _descriptionptwzCVL = null;
		const _optionHAO1fn = new Option(_flagsxnPCJva, _descriptionptwzCVL)
		const _valueSpgridz = null;
		const _arrayValuepgLDmef = true;
		const _arrayValueuiE15QK = -3.0256047802935173;
		const _previousucbVKQr = [_arrayValuepgLDmef, _arrayValueuiE15QK]
		const _returnValueOoOiUK8 = await _optionHAO1fn._concatValue(_valueSpgridz, _previousucbVKQr)
		const _mandatoryjDHScyS = false;
		const _returnValueKtmrDzr = await _optionHAO1fn.makeOptionMandatory(_mandatoryjDHScyS)
		const _fnrGXO3hD = undefined;
		const _returnValueFcIOqpV = await _optionHAO1fn.argParser(_fnrGXO3hD)
		const _returnValueIUXjJl = await _HelpmKVmYaB.optionDescription(_optionHAO1fn)
	});

	it('test for Help', async () => {
		const _HelpQTfE5MH = new Help()
		const _nameOkrAStF = "7Hn3A8bGzEHBebRqAoYBuYao61L77wp8uDnfVlO68uMpmd81zcTrPEJ1xqbITzCRPzKIqr2xqAwshDxmvXMdtjglZ0GdBy5T";
		const _descriptionEhKrVDn = false;
		const _argumentXTKwGmt = new Argument(_nameOkrAStF, _descriptionEhKrVDn)
		const _valueKuYx1X = {
		
	}
		const _descriptionJZij8Ee = undefined;
		const _returnValuexXix6vL = await _argumentXTKwGmt.default(_valueKuYx1X, _descriptionJZij8Ee)
		const _returnValueXVijh9u = await _HelpQTfE5MH.argumentDescription(_argumentXTKwGmt)
		const _returnValuex7pDBju = 2.0183274671777163;
		const _cmdywLrtBd = () => { return _returnValuex7pDBju };
		const _returnValuexTruew1 = await _HelpQTfE5MH.commandUsage(_cmdywLrtBd)
	});

	it('test for Help', async () => {
		const _HelpQWKs3ye = new Help()
		const _returnValueXg4FjKa = -1.6419433815891118;
		const _returnValueAKC8gRR = () => { return _returnValueXg4FjKa };
		const _nameuQJelXl = () => { return _returnValueAKC8gRR };
		const _cmdvxgGdso = new Command(_nameuQJelXl)
		const _nameshV1Gszm = "hshGsidRocVE3oLvmPxBuWr2THCpcb9Jpci3dW2Zz1dEcWSHWjBxbuSG1if7CAZKwYk0cIp7AYPTr";
		const _returnValuenYcWk7H = await _cmdvxgGdso.arguments(_nameshV1Gszm)
		const _returnValueiOWJn90 = await _HelpQWKs3ye.visibleCommands(_cmdvxgGdso)
		const _arrayValuez4IXCEs = null;
		const _cmdM8k57db = [_arrayValuez4IXCEs]
		const _helperyy263UU = "";
		const _returnValueiBPlXN1 = await _HelpQWKs3ye.padWidth(_cmdM8k57db, _helperyy263UU)
		const _name8EHlTv = undefined;
		const _cmdfDVcWrl = new Command(_name8EHlTv)
		const _flags5jGQnQ = null;
		const _descriptioncyq5kh2 = undefined;
		const _returnValueObY0jT = await _cmdfDVcWrl.createOption(_flags5jGQnQ, _descriptioncyq5kh2)
		const _returnValueodBB7xZ = 5.036276560940562;
		const _contextOptionsGfW8sFO = () => { return _returnValueodBB7xZ };
		const _returnValueyUW3Ihy = await _cmdfDVcWrl.outputHelp(_contextOptionsGfW8sFO)
		const _keyfx6C7Y2 = null;
		const _returnValueuwRgA8v = await _cmdfDVcWrl.getOptionValueSource(_keyfx6C7Y2)
		const _receivedArgsrT9TC3 = "zjNZtzjJFvCSvJK28nPDQl";
		const _returnValueatqcaFW = await _cmdfDVcWrl._excessArguments(_receivedArgsrT9TC3)
		const _returnValueObmHzR6 = await _HelpQWKs3ye.subcommandTerm(_cmdfDVcWrl)
		const _arrayValuejB395IW = 5.087404679091417;
		const _returnValueRkQ2qLg = null;
		const _arrayValueddIhemP = () => { return _returnValueRkQ2qLg };
		const _arrayValuewbvsKLv = [_arrayValueddIhemP]
		const _returnValuedJystNa = 9.844391019509487;
		const _returnValuebR74C8 = () => { return _returnValuedJystNa };
		const _arrayValueEzQYpH = () => { return _returnValuebR74C8 };
		const _optionNjYyjAB = [_arrayValuejB395IW, _arrayValuewbvsKLv, _arrayValueEzQYpH]
		const _returnValueu85QM10 = await _HelpQWKs3ye.optionDescription(_optionNjYyjAB)
		const _returnValueAZwua8q = "jaDG2BcHwCeXx56bRUlplgLmOBuZ7WXKXCwgZAyukEfDMLM1Q3CBN";
		const _cmdMfLgcgy = () => { return _returnValueAZwua8q };
		const _helperaqDweZC = "EPhoVfqGL9TRrwX10rTjlcQ1T42kEA5OlfghRGIqLlfbhuk2dnrzISG6k0WVvWXme4RW";
		const _returnValuehOB2NjZ = await _HelpQWKs3ye.formatHelp(_cmdMfLgcgy, _helperaqDweZC)
	});

	it('test for Help', async () => {
		const _HelplrKWXAQ = new Help()
		const _optionc1Rvunw = "NgmNz22RmTxhxbTfjOVSZfuCZo4T25XcuWzs72TgHXJayzkm9V1mO3O394mGSrOY";
		const _returnValueqWvL6Ks = await _HelplrKWXAQ.optionDescription(_optionc1Rvunw)
		const _nameALrJ5Mb = undefined;
		const _cmdz8cuRtS = new Command(_nameALrJ5Mb)
		const _nameO9pDrM = undefined;
		const _returnValuenXagwG = await _cmdz8cuRtS.createCommand(_nameO9pDrM)
		const _contextOptionsmTLRs3Y = null;
		const _returnValuetjWf9Z = await _cmdz8cuRtS._getHelpContext(_contextOptionsmTLRs3Y)
		const _enableOrNameAndArgskj5PUwn = null;
		const _arrayValueuQh9Z7w = undefined;
		const _arrayValueBufwb5 = {
		
	}
		const _arrayValuex5jCqqK = null;
		const _descriptiond6orHkw = [_arrayValueuQh9Z7w, _arrayValueBufwb5, _arrayValuex5jCqqK]
		const _returnValuefFniqfc = await _cmdz8cuRtS.addHelpCommand(_enableOrNameAndArgskj5PUwn, _descriptiond6orHkw)
		const _aliasdnkAHk1 = {
		
	}
		const _returnValuelSMX77a = await _cmdz8cuRtS.alias(_aliasdnkAHk1)
		const _returnValueCLWG9u5 = await _HelplrKWXAQ.subcommandTerm(_cmdz8cuRtS)
	});

	it('test for Help', async () => {
		const _HelpZ3aCCC = new Help()
		const _flagslROmQ2K = undefined;
		const _optionBjamfQy = {
			"flags": _flagslROmQ2K
	}
		const _returnValueyVNWFYg = await _HelpZ3aCCC.optionTerm(_optionBjamfQy)
		const _slicenK4JKqY = "5YOckN7nrQjOXnPSTwbxaX9L6EAI1Y7PFh3O6c9f0RBYSkak2sAQNMwvKI7viaTwhYr0xtcowlMDzjEbAxL9mrxxS7y27J3Dt";
		const _nameEj0sqYu = {
			"slice": _slicenK4JKqY
	}
		const _descriptionsSnfQhJ = undefined;
		const _optionRGVpg1p = new Argument(_nameEj0sqYu, _descriptionsSnfQhJ)
		const _returnValuegXS3INQ = await _optionRGVpg1p.argOptional()
		const _returnValueospu7hp = undefined;
		const _returnValuenDm4M6p = () => { return _returnValueospu7hp };
		const _arrayValueU021snB = () => { return _returnValuenDm4M6p };
		const _arrayValueutHozkb = undefined;
		const _returnValuezExIwSJ = true;
		const _returnValuejZN1l61 = () => { return _returnValuezExIwSJ };
		const _arrayValueVaYOfeU = () => { return _returnValuejZN1l61 };
		const _arrayValueYksIrlP = 7.69202381347182;
		const _arrayValueVnHsNfg = [_arrayValueU021snB, _arrayValueutHozkb, _arrayValueVaYOfeU, _arrayValueYksIrlP]
		const _valueRqG2F0a = [_arrayValueVnHsNfg]
		const _descriptionr5P9aa = undefined;
		const _returnValueDsUxxrq = await _optionRGVpg1p.default(_valueRqG2F0a, _descriptionr5P9aa)
		const _valuezngq475 = undefined;
		const _returnValueDe7WuME = 6.6328927440958125;
		const _arrayValuey0l1oP4 = () => { return _returnValueDe7WuME };
		const _arrayValueHBbvIPe = null;
		const _arrayValuex8FQfZw = [_arrayValuey0l1oP4, _arrayValueHBbvIPe]
		const _arrayValueN7Vbacx = "BR";
		const _previousiqJ1kwk = [_arrayValuex8FQfZw, _arrayValueN7Vbacx]
		const _returnValueZfTKJ9u = await _optionRGVpg1p._concatValue(_valuezngq475, _previousiqJ1kwk)
		const _returnValueHaGFV7D = await _HelpZ3aCCC.optionDescription(_optionRGVpg1p)
	});

	it('test for Help', async () => {
		const _HelpdOLPm3u = new Help()
		const __namejHpl9Dn = {
		
	}
		const _arrayValueUC8m7cM = "83fD";
		const _arrayValuePE5fwaK = true;
		const _arrayValueHlBXG1 = undefined;
		const __aliasesiPr8cn2 = [_arrayValueUC8m7cM, _arrayValuePE5fwaK, _arrayValueHlBXG1]
		const _parentpLcUBaR = {
		
	}
		const _returnValueQ8i3wf = undefined;
		const _usagexCFX9aM = () => { return _returnValueQ8i3wf };
		const _cmdlrhtgTd = {
			"_name": __namejHpl9Dn,
		"_aliases": __aliasesiPr8cn2,
		"parent": _parentpLcUBaR,
		"usage": _usagexCFX9aM
	}
		const _returnValueJzXaD6J = await _HelpdOLPm3u.commandUsage(_cmdlrhtgTd)
		const _cmdX1FfSj8 = "qqOheWHJHzmHk2pdcFZ0993xFoiBwho9Zq9o6kRNvlbXmaCkPYCWDi6RxxFPmRYPIMHYGiPUNecychhobZkU7b";
		const _returnValueVoLqQNG = await _HelpdOLPm3u.subcommandDescription(_cmdX1FfSj8)
	});

	it('test for Help', async () => {
		const _HelpK3USbVz = new Help()
		const _name6y1rqA = true;
		const _cmdqUcP0yA = new Command(_name6y1rqA)
		const _returnValuegDeMgwA = await _cmdqUcP0yA.opts()
		const _returnValueQ9OLR7K = null;
		const _splitC4OC2Q1 = () => { return _returnValueQ9OLR7K };
		const _enableOrNameAndArgsev7fawc = {
			"split": _splitC4OC2Q1
	}
		const _descriptionYqh5GP = null;
		const _returnValueuyOlSAt = await _cmdqUcP0yA.addHelpCommand(_enableOrNameAndArgsev7fawc, _descriptionYqh5GP)
		const _keyrOJHK8y = true;
		const _returnValueL1a7zey = await _cmdqUcP0yA.getOptionValue(_keyrOJHK8y)
		const _returnValuej5DZev = await _HelpK3USbVz.visibleCommands(_cmdqUcP0yA)
		const _argumentROtgwV0 = null;
		const _returnValueAntFSp9 = await _HelpK3USbVz.argumentDescription(_argumentROtgwV0)
		const _returnValueCBOLalO = {
		
	}
		const _returnValueTd1jfX = () => { return _returnValueCBOLalO };
		const _slicepEOhdfk = () => { return _returnValueTd1jfX };
		const _nameHi0BToo = {
			"slice": _slicepEOhdfk
	}
		const _arrayValuekRoge13 = "AumEgPFmCq4FwFVYKSz4cGSQQsROKMNnWmfC09Rs3oRAtqOfZ4dmWGhYFyDz45S35KJCo085nOAWt";
		const _arrayValuelqscgvl = null;
		const _descriptionJzWKvZ9 = [_arrayValuekRoge13, _arrayValuelqscgvl]
		const _cmdPjkbVSB = new Argument(_nameHi0BToo, _descriptionJzWKvZ9)
		const _returnValueuWvKNHu = await _cmdPjkbVSB.argOptional()
		const _arrayValuebsEBRMJ = true;
		const _arrayValuejSambm = {
		
	}
		const _valuesFG6geI5 = [_arrayValuebsEBRMJ, _arrayValuejSambm]
		const _returnValuePVLknAQ = await _cmdPjkbVSB.choices(_valuesFG6geI5)
		const _arrayValuewReX6kq = true;
		const _arrayValueAVfrCUB = {
		
	}
		const _fnXAusLON = [_arrayValuewReX6kq, _arrayValueAVfrCUB]
		const _returnValuexNz5qFd = await _cmdPjkbVSB.argParser(_fnXAusLON)
		const _returnValueFRnosua = await _HelpK3USbVz.commandDescription(_cmdPjkbVSB)
		const _returnValueW4xG5jt = true;
		const _cmd25nA7E = () => { return _returnValueW4xG5jt };
		const _returnValueSLTCgJP = await _HelpK3USbVz.subcommandTerm(_cmd25nA7E)
	});

	it('test for Help', async () => {
		const _Help2TBnxt = new Help()
		const _arrayValuebJmxHCI = undefined;
		const _arrayValueqvunXap = null;
		const _arrayValueKoH2Ese = 6.932804394368663;
		const _arrayValuedTIMLaU = {
		
	}
		const _namengJiAvB = [_arrayValuebJmxHCI, _arrayValueqvunXap, _arrayValueKoH2Ese, _arrayValuedTIMLaU]
		const _arrayValueOQp7QBh = null;
		const _descriptionUa3q7LM = [_arrayValueOQp7QBh]
		const _argumentYzV8KoP = new Argument(_namengJiAvB, _descriptionUa3q7LM)
		const _valueJOk0c4R = null;
		const _previouspDcTdL = "n1jUo1GzMKhYQDxrdcmdCdYrWmiC3ti4bgEDyIVuEXXEt7spa6T8YM4AgdfwWXb3aAJvbAJkRLKzD2YKsEN1Xf";
		const _returnValueAkRpVgK = await _argumentYzV8KoP._concatValue(_valueJOk0c4R, _previouspDcTdL)
		const _returnValueXqmEQ1X = await _argumentYzV8KoP.argOptional()
		const _returnValuecDyT7Nd = undefined;
		const _valueJixiubR = () => { return _returnValuecDyT7Nd };
		const _descriptionPVb7JKb = undefined;
		const _returnValues8r22FL = await _argumentYzV8KoP.default(_valueJixiubR, _descriptionPVb7JKb)
		const _returnValuePlPptG = await _Help2TBnxt.argumentDescription(_argumentYzV8KoP)
		const _arrayValuelSzUwlG = []
		const _argumentTsONndr = [_arrayValuelSzUwlG]
		const _returnValuewN7GNf = await _Help2TBnxt.argumentDescription(_argumentTsONndr)
		const _cmdvnNrRAM = 4.817743926396371;
		const _arrayValueRVgMef4 = {
		
	}
		const _sortSubcommandshslQQH = [_arrayValueRVgMef4]
		const _returnValuePCad32K = false;
		const _subcommandTermhT4XEk1 = () => { return _returnValuePCad32K };
		const _helpermG1tpin = {
			"sortSubcommands": _sortSubcommandshslQQH,
		"subcommandTerm": _subcommandTermhT4XEk1
	}
		const _returnValueljQ8dCU = await _Help2TBnxt.longestSubcommandTermLength(_cmdvnNrRAM, _helpermG1tpin)
	});

	it('test for Help', async () => {
		const _Helpesfo90S = new Help()
		const _arrayValueDnUAnSX = -8.06407564390952;
		const _arrayValuegH6ASR = undefined;
		const _arrayValueLzKxlEg = [_arrayValueDnUAnSX, _arrayValuegH6ASR]
		const _arrayValueapT0RbY = false;
		const _arrayValueJWmXD0N = [_arrayValueapT0RbY]
		const _optionspS5juq = [_arrayValueLzKxlEg, _arrayValueJWmXD0N]
		const __hasHelpOptionsXfqWaA = false;
		const __helpShortFlagtPUceP9 = undefined;
		const _returnValueH2LyTKv = true;
		const _returnValueqTrHIY = () => { return _returnValueH2LyTKv };
		const _returnValueadZmVTK = () => { return _returnValueqTrHIY };
		const __findOptionL8EHjem = () => { return _returnValueadZmVTK };
		const __helpLongFlagUHEnCOq = null;
		const _arrayValueQElDso = true;
		const _arrayValueg7NGB9 = "PpyrSNAYAloRmlJ8bFlCDh41CKiW4M9mGnexZywl6HLYcEqroZlL6IfSg2Bxv68IxCNJllaEMWHqI9W7nqSfv7K9bNY5jJMLQeV";
		const _arrayValueeW4Q1L = -4.614437237729396;
		const _arrayValueeRfVvzB = false;
		const _arrayValueu6CJRMd = [_arrayValueg7NGB9, _arrayValueeW4Q1L, _arrayValueeRfVvzB]
		const _returnValueFvmApc = [_arrayValueQElDso, _arrayValueu6CJRMd]
		const _createOptionnvfjssz = () => { return _returnValueFvmApc };
		const __helpDescriptionbPkQNHb = 4.749288160335443;
		const __helpFlagsYHu73cG = undefined;
		const _cmdvGGraL = {
			"options": _optionspS5juq,
		"_hasHelpOption": __hasHelpOptionsXfqWaA,
		"_helpShortFlag": __helpShortFlagtPUceP9,
		"_findOption": __findOptionL8EHjem,
		"_helpLongFlag": __helpLongFlagUHEnCOq,
		"createOption": _createOptionnvfjssz,
		"_helpDescription": __helpDescriptionbPkQNHb,
		"_helpFlags": __helpFlagsYHu73cG
	}
		const _returnValuelOoBaco = await _Helpesfo90S.visibleOptions(_cmdvGGraL)
	});
})