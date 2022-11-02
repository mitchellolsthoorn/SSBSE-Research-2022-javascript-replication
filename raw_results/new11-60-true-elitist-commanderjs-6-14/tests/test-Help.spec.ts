export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpCVqe4XP = new Help()
		const _arrayValueLU6Hj5d = {
		
	}
		const _arrayValuedP1JktL = false;
		const _flagsybwRAau = [_arrayValueLU6Hj5d, _arrayValuedP1JktL]
		const _optionuz8uIVJ = {
			"flags": _flagsybwRAau
	}
		const _returnValueqKj17PL = await _HelpCVqe4XP.optionTerm(_optionuz8uIVJ)
		const _flagsSwP9v6T = null;
		const _optioncDOGlMG = {
			"flags": _flagsSwP9v6T
	}
		const _returnValueBy2iXSo = await _HelpCVqe4XP.optionTerm(_optioncDOGlMG)
	});

	it('test for Help', async () => {
		const _HelprdTy84f = new Help()
		const _argChoicesf5HOBdV = {
		
	}
		const _negateMnXZlRm = {
		
	}
		const _defaultValueN0kLJuj = undefined;
		const _defaultValueDescriptionrmmhpiv = -3.801345212521742;
		const _envVarYKMS6g8 = false;
		const _descriptionkev0tY = {
		
	}
		const _optioneheDOtF = {
			"argChoices": _argChoicesf5HOBdV,
		"negate": _negateMnXZlRm,
		"defaultValue": _defaultValueN0kLJuj,
		"defaultValueDescription": _defaultValueDescriptionrmmhpiv,
		"envVar": _envVarYKMS6g8,
		"description": _descriptionkev0tY
	}
		const _returnValueUryHPE = await _HelprdTy84f.optionDescription(_optioneheDOtF)
		const _arrayValueGWLt6pp = false;
		const _arrayValueKuMp7V8 = false;
		const _arrayValuera8Y4m = [_arrayValueGWLt6pp, _arrayValueKuMp7V8]
		const _cmdjDnUSD = [_arrayValuera8Y4m]
		const _returnValueooK4rDv = false;
		const _longestOptionTermLength7siyvK = () => { return _returnValueooK4rDv };
		const _longestSubcommandTermLengthGAxhpIa = undefined;
		const _returnValuePTTWbAt = 8.318676623099591;
		const _longestArgumentTermLengthx98OXxk = () => { return _returnValuePTTWbAt };
		const _helperWFTjsyj = {
			"longestOptionTermLength": _longestOptionTermLength7siyvK,
		"longestSubcommandTermLength": _longestSubcommandTermLengthGAxhpIa,
		"longestArgumentTermLength": _longestArgumentTermLengthx98OXxk
	}
		const _returnValuekr3QGZs = await _HelprdTy84f.padWidth(_cmdjDnUSD, _helperWFTjsyj)
		const _flagsAN8hjGr = {
		
	}
		const _optionlXOsIq = {
			"flags": _flagsAN8hjGr
	}
		const _returnValueKee4dOZ = await _HelprdTy84f.optionTerm(_optionlXOsIq)
		const _returnValuezJ4g2AE = "vfGrwnt1jPCOWmCFj2SCW2BLBUL4GK7jeozlcJNNOgbkmv8avN4svVjfBB3mIrnLrd9ftDBqkwSSwDGoph9QE8B";
		const _descriptionWiN1So7 = () => { return _returnValuezJ4g2AE };
		const _cmdow8ETpI = {
			"description": _descriptionWiN1So7
	}
		const _returnValuesnfP9jA = await _HelprdTy84f.commandDescription(_cmdow8ETpI)
	});

	it('test for Help', async () => {
		const _Helpm10AfDW = new Help()
		const __argsDescriptionKu3dyc = {
		
	}
		const __argsLFdGhHC = {
		
	}
		const _cmdVIzFfwc = {
			"_argsDescription": __argsDescriptionKu3dyc,
		"_args": __argsLFdGhHC
	}
		const _returnValuenZAU51Q = await _Helpm10AfDW.visibleArguments(_cmdVIzFfwc)
		const _returnValuedTHMs22 = true;
		const _descriptionqaOE6U7 = () => { return _returnValuedTHMs22 };
		const _cmddinYTQ7 = {
			"description": _descriptionqaOE6U7
	}
		const _returnValuePN1ilho = await _Helpm10AfDW.subcommandDescription(_cmddinYTQ7)
		const _cmdDUFILiq = -9.108401242760602;
		const _returnValuePj3rgUM = []
		const _longestOptionTermLengthNLzaVZ8 = () => { return _returnValuePj3rgUM };
		const _returnValuel2Rt8Hd = undefined;
		const _longestSubcommandTermLengthN7rRYO9 = () => { return _returnValuel2Rt8Hd };
		const _returnValueSPUaw0x = true;
		const _longestArgumentTermLengthKgSG3Gt = () => { return _returnValueSPUaw0x };
		const _helperbYaLtbn = {
			"longestOptionTermLength": _longestOptionTermLengthNLzaVZ8,
		"longestSubcommandTermLength": _longestSubcommandTermLengthN7rRYO9,
		"longestArgumentTermLength": _longestArgumentTermLengthKgSG3Gt
	}
		const _returnValueXK3cogg = await _Helpm10AfDW.padWidth(_cmdDUFILiq, _helperbYaLtbn)
	});

	it('test for Help', async () => {
		const _HelpfwCYFV6 = new Help()
		const _returnValueVdfWk2J = 3.2517428232353964;
		const _flagsVVkzVTX = () => { return _returnValueVdfWk2J };
		const _optionubAnWtR = {
			"flags": _flagsVVkzVTX
	}
		const _returnValuesNAGJJ7 = await _HelpfwCYFV6.optionTerm(_optionubAnWtR)
		const _returnValueK5OkyjA = "OxqUG2vrgAOQWJoJGas8NFlcFSOs3v94Ya7P5IDAVMbib";
		const _matchJxV0emK = () => { return _returnValueK5OkyjA };
		const _substrA5vmEs3 = "LrjcE";
		const _strYF6NnxM = {
			"match": _matchJxV0emK,
		"substr": _substrA5vmEs3
	}
		const _widthNOPzY4P = 6.922632204574036;
		const _indentYiPTXJB = -9.453153265102687;
		const _minColumnWidthyhNfQgC = -7.572028693890155;
		const _returnValueY6GCCCL = await _HelpfwCYFV6.wrap(_strYF6NnxM, _widthNOPzY4P, _indentYiPTXJB, _minColumnWidthyhNfQgC)
	});

	it('test for Help', async () => {
		const _HelpYkB6bgp = new Help()
		const _returnValueOgP5C9t = undefined;
		const _descriptionS4bwie = () => { return _returnValueOgP5C9t };
		const _cmdewmxRDx = {
			"description": _descriptionS4bwie
	}
		const _returnValueDFifTKl = await _HelpYkB6bgp.subcommandDescription(_cmdewmxRDx)
		const _returnValueqVI168G = "XbIVHWAt8PVxB";
		const _descriptionkQG3NsL = () => { return _returnValueqVI168G };
		const _cmdPrEO7ZQ = {
			"description": _descriptionkQG3NsL
	}
		const _returnValueUvGrPJA = await _HelpYkB6bgp.subcommandDescription(_cmdPrEO7ZQ)
	});

	it('test for Help', async () => {
		const _HelpQ1Z2nsH = new Help()
		const _argChoicesHlKhPNC = {
		
	}
		const _defaultValuePVtp3L4 = undefined;
		const _defaultValueDescriptiongrDQIyA = true;
		const _arrayValuei1rZti2 = true;
		const _descriptionNsDqlDS = [_arrayValuei1rZti2]
		const _argumentbLYMpEf = {
			"argChoices": _argChoicesHlKhPNC,
		"defaultValue": _defaultValuePVtp3L4,
		"defaultValueDescription": _defaultValueDescriptiongrDQIyA,
		"description": _descriptionNsDqlDS
	}
		const _returnValueIzTYd3j = await _HelpQ1Z2nsH.argumentDescription(_argumentbLYMpEf)
		const _returnValuedfRchJ = undefined;
		const _cmdixLocaU = () => { return _returnValuedfRchJ };
		const _sortSubcommandsDl07Rk = null;
		const _subcommandTermmTadEgd = "3DA8aUAxNOTaGck4SdyXOBG5IeEyd";
		const _helperNhhwq4P = {
			"sortSubcommands": _sortSubcommandsDl07Rk,
		"subcommandTerm": _subcommandTermmTadEgd
	}
		const _returnValueHa0hQo2 = await _HelpQ1Z2nsH.longestSubcommandTermLength(_cmdixLocaU, _helperNhhwq4P)
		const _optionsQbUzrus = {
		
	}
		const __hasHelpOptionFAH5a8j = "LcC56ftYLKyq";
		const __helpShortFlagRMRPLAh = {
		
	}
		const _returnValuedMONdvI = undefined;
		const __findOptionzVK0NqL = () => { return _returnValuedMONdvI };
		const __helpLongFlagp7eqH8v = false;
		const _returnValueqoECrvw = true;
		const _createOptionge0Djls = () => { return _returnValueqoECrvw };
		const __helpDescriptionQmsIheb = null;
		const __helpFlagspL5ib5L = "b62";
		const _cmdYZt7yG = {
			"options": _optionsQbUzrus,
		"_hasHelpOption": __hasHelpOptionFAH5a8j,
		"_helpShortFlag": __helpShortFlagRMRPLAh,
		"_findOption": __findOptionzVK0NqL,
		"_helpLongFlag": __helpLongFlagp7eqH8v,
		"createOption": _createOptionge0Djls,
		"_helpDescription": __helpDescriptionQmsIheb,
		"_helpFlags": __helpFlagspL5ib5L
	}
		const _returnValuepyqO2jl = await _HelpQ1Z2nsH.visibleOptions(_cmdYZt7yG)
	});

	it('test for Help', async () => {
		const _HelpaOkV4uV = new Help()
		const _arrayValueMY16Ik = null;
		const _arrayValueEzYZysZ = undefined;
		const _returnValueVXENeQK = [_arrayValueMY16Ik, _arrayValueEzYZysZ]
		const _descriptionP9tspe = () => { return _returnValueVXENeQK };
		const _cmdfLBV4rp = {
			"description": _descriptionP9tspe
	}
		const _returnValuekJqAtSH = await _HelpaOkV4uV.commandDescription(_cmdfLBV4rp)
		const _arrayValueUpO4usy = null;
		const _arrayValueMq6l1Q = {
		
	}
		const _cmdeaEXRp = [_arrayValueUpO4usy, _arrayValueMq6l1Q]
		const _arrayValuepwiaMl3 = {
		
	}
		const _arrayValueXos8HOd = undefined;
		const _arrayValuexLcxYRa = -4.784381891894078;
		const _arrayValueyxsPHOw = false;
		const _returnValueAdoWyEL = [_arrayValuepwiaMl3, _arrayValueXos8HOd, _arrayValuexLcxYRa, _arrayValueyxsPHOw]
		const _visibleArgumentswpsNDxJ = () => { return _returnValueAdoWyEL };
		const _arrayValuePMuDAqo = null;
		const _arrayValuescByFdS = "1MULCCyTrznFoqlqSmEHpPMGXs8MF6VLIBOWs5x";
		const _arrayValuesnQFUQL = [_arrayValuePMuDAqo, _arrayValuescByFdS]
		const _returnValueG5KiByl = [_arrayValuesnQFUQL]
		const _argumentTermEfcdR5j = () => { return _returnValueG5KiByl };
		const _helperX6zGsvC = {
			"visibleArguments": _visibleArgumentswpsNDxJ,
		"argumentTerm": _argumentTermEfcdR5j
	}
		const _returnValuevGrJjgN = await _HelpaOkV4uV.longestArgumentTermLength(_cmdeaEXRp, _helperX6zGsvC)
		const _cmdq4ljKj7 = true;
		const _arrayValueJLW0yWI = 4.697521575212768;
		const _arrayValueiIgbuLg = null;
		const _returnValuepR8QHAz = 1.1752103313843207;
		const _arrayValueCb1OqQE = () => { return _returnValuepR8QHAz };
		const _arrayValueaWpwFQX = undefined;
		const _arrayValuejK2wuaK = -4.903531013318848;
		const _arrayValueptl0e0U = [_arrayValueiIgbuLg, _arrayValueCb1OqQE, _arrayValueaWpwFQX, _arrayValuejK2wuaK]
		const _sortSubcommandszw0ZgIx = [_arrayValueJLW0yWI, _arrayValueptl0e0U]
		const _returnValuehvWD0Rv = undefined;
		const _subcommandTermQ7RZEjF = () => { return _returnValuehvWD0Rv };
		const _helperL7r8NwG = {
			"sortSubcommands": _sortSubcommandszw0ZgIx,
		"subcommandTerm": _subcommandTermQ7RZEjF
	}
		const _returnValueT8zrXcZ = await _HelpaOkV4uV.formatHelp(_cmdq4ljKj7, _helperL7r8NwG)
	});

	it('test for Help', async () => {
		const _HelpwHs2X29 = new Help()
		const _optionsQmioHpa = null;
		const __hasHelpOptionpkovD2G = null;
		const __helpShortFlagSeMxVMy = -2.8452090083269423;
		const _arrayValuerYXUllh = true;
		const _returnValueqHdCjlT = [_arrayValuerYXUllh]
		const __findOptionOvWGhbg = () => { return _returnValueqHdCjlT };
		const __helpLongFlagl15BqE = null;
		const _returnValueUVGO1MQ = true;
		const _createOptionDA82t0O = () => { return _returnValueUVGO1MQ };
		const __helpDescriptiong0MQUc6 = undefined;
		const _returnValueK72uFlj = undefined;
		const _returnValueJAlkeuj = () => { return _returnValueK72uFlj };
		const _arrayValueK17XdOF = () => { return _returnValueJAlkeuj };
		const __helpFlagsqfCDF09 = [_arrayValueK17XdOF]
		const _cmdWQ6djd = {
			"options": _optionsQmioHpa,
		"_hasHelpOption": __hasHelpOptionpkovD2G,
		"_helpShortFlag": __helpShortFlagSeMxVMy,
		"_findOption": __findOptionOvWGhbg,
		"_helpLongFlag": __helpLongFlagl15BqE,
		"createOption": _createOptionDA82t0O,
		"_helpDescription": __helpDescriptiong0MQUc6,
		"_helpFlags": __helpFlagsqfCDF09
	}
		const _returnValueYWtPzbq = await _HelpwHs2X29.visibleOptions(_cmdWQ6djd)
		const _cmdnH7dOe = undefined;
		const _returnValueGDLtlkk = undefined;
		const _longestOptionTermLengthDxG9AKJ = () => { return _returnValueGDLtlkk };
		const _returnValueDcjIYtz = undefined;
		const _longestSubcommandTermLengthINkt7Sf = () => { return _returnValueDcjIYtz };
		const _returnValueNecfMO = false;
		const _longestArgumentTermLengthZAAaAS1 = () => { return _returnValueNecfMO };
		const _helperW95tvNx = {
			"longestOptionTermLength": _longestOptionTermLengthDxG9AKJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthINkt7Sf,
		"longestArgumentTermLength": _longestArgumentTermLengthZAAaAS1
	}
		const _returnValueaGStT0T = await _HelpwHs2X29.padWidth(_cmdnH7dOe, _helperW95tvNx)
		const _arrayValuertBUnh6 = true;
		const _arrayValueKoWOYWl = "CzS01CC5Q9pHVADuTsRmSQtPIo4feFOnFX";
		const _cmdC3GbX7A = [_arrayValuertBUnh6, _arrayValueKoWOYWl]
		const _returnValuerqkvNO = true;
		const _visibleOptionsqtFCRGM = () => { return _returnValuerqkvNO };
		const _returnValueQMJk6Gr = -1.3059846479597343;
		const _optionTerm1yvCIV = () => { return _returnValueQMJk6Gr };
		const _helperUIc2SZm = {
			"visibleOptions": _visibleOptionsqtFCRGM,
		"optionTerm": _optionTerm1yvCIV
	}
		const _returnValueTrVtwZk = await _HelpwHs2X29.longestOptionTermLength(_cmdC3GbX7A, _helperUIc2SZm)
		const _cmdCl7rKiU = undefined;
		const _sortSubcommandsLjLRtpy = {
		
	}
		const _returnValueDkYKje = false;
		const _subcommandTermlgcvoRu = () => { return _returnValueDkYKje };
		const _helperyWG398t = {
			"sortSubcommands": _sortSubcommandsLjLRtpy,
		"subcommandTerm": _subcommandTermlgcvoRu
	}
		const _returnValueutRaiKe = await _HelpwHs2X29.formatHelp(_cmdCl7rKiU, _helperyWG398t)
		const _flagsCGNjaHL = {
		
	}
		const _optionJa3kFre = {
			"flags": _flagsCGNjaHL
	}
		const _returnValuevpGce7 = await _HelpwHs2X29.optionTerm(_optionJa3kFre)
	});

	it('test for Help', async () => {
		const _HelpjjOvzL = new Help()
		const __nameTsYRgE7 = {
		
	}
		const __aliasesgYzQg42 = {
		
	}
		const _parentVRsTISN = {
		
	}
		const _returnValuemI85E7H = undefined;
		const _usageIqE8MJG = () => { return _returnValuemI85E7H };
		const _cmdxjZnzaa = {
			"_name": __nameTsYRgE7,
		"_aliases": __aliasesgYzQg42,
		"parent": _parentVRsTISN,
		"usage": _usageIqE8MJG
	}
		const _returnValueVYOR4Iu = await _HelpjjOvzL.commandUsage(_cmdxjZnzaa)
		const _descriptionrQntN7q = undefined;
		const _cmdR3ipvU = {
			"description": _descriptionrQntN7q
	}
		const _returnValuerEaPTiD = await _HelpjjOvzL.subcommandDescription(_cmdR3ipvU)
		const _returnValuehNa6VpV = 2.232882995358805;
		const _cmdKRRggza = () => { return _returnValuehNa6VpV };
		const _returnValueCNevIjm = {
		
	}
		const _visibleOptions4g5rd6 = () => { return _returnValueCNevIjm };
		const _returnValueGV4US7C = -2.3560868861397397;
		const _optionTermekzfE21 = () => { return _returnValueGV4US7C };
		const _helpernUpRJri = {
			"visibleOptions": _visibleOptions4g5rd6,
		"optionTerm": _optionTermekzfE21
	}
		const _returnValuettgruGW = await _HelpjjOvzL.longestOptionTermLength(_cmdKRRggza, _helpernUpRJri)
		const _cmdMjc8pP4 = {
		
	}
		const _returnValuellSshE = false;
		const _longestOptionTermLengthJJpu9W6 = () => { return _returnValuellSshE };
		const _returnValuerUt6My = false;
		const _longestSubcommandTermLengthUDMPEh = () => { return _returnValuerUt6My };
		const _returnValuee3vqSHD = null;
		const _longestArgumentTermLengthriMiO0 = () => { return _returnValuee3vqSHD };
		const _helperq5SBhUO = {
			"longestOptionTermLength": _longestOptionTermLengthJJpu9W6,
		"longestSubcommandTermLength": _longestSubcommandTermLengthUDMPEh,
		"longestArgumentTermLength": _longestArgumentTermLengthriMiO0
	}
		const _returnValuehQelJNM = await _HelpjjOvzL.padWidth(_cmdMjc8pP4, _helperq5SBhUO)
	});

	it('test for Help', async () => {
		const _HelpePGG1d8 = new Help()
		const _returnValuewVd37Xz = undefined;
		const _nameoyXi6cH = () => { return _returnValuewVd37Xz };
		const _argumentwEW3uJ = {
			"name": _nameoyXi6cH
	}
		const _returnValuefO8uNS3 = await _HelpePGG1d8.argumentTerm(_argumentwEW3uJ)
		const _argChoicescMi73qO = {
		
	}
		const _negateCPjBqM8 = null;
		const _defaultValuexWhyJfP = undefined;
		const _defaultValueDescriptionCcZSKS8 = null;
		const _envVarcvm3JuD = "ZstnsGTUgrcH6r7D6PszTESA0UO09udvIu4LA9vVxFmo6xjUky9n9";
		const _descriptionLrZWqLN = "uVYpnpSCa54ejnq8x55hMe66GXwfGd0b";
		const _optionbGuCGty = {
			"argChoices": _argChoicescMi73qO,
		"negate": _negateCPjBqM8,
		"defaultValue": _defaultValuexWhyJfP,
		"defaultValueDescription": _defaultValueDescriptionCcZSKS8,
		"envVar": _envVarcvm3JuD,
		"description": _descriptionLrZWqLN
	}
		const _returnValueTPEtQjn = await _HelpePGG1d8.optionDescription(_optionbGuCGty)
		const _argChoicesnZiNfIs = {
		
	}
		const _negateyTeezhg = undefined;
		const _defaultValueje7GlV9 = undefined;
		const _defaultValueDescriptionIC4wTNC = undefined;
		const _envVarLlPdfcS = undefined;
		const _returnValueVdLbClu = 1.979952394431212;
		const _descriptionYmOJU0a = () => { return _returnValueVdLbClu };
		const _optionkp5PR2D = {
			"argChoices": _argChoicesnZiNfIs,
		"negate": _negateyTeezhg,
		"defaultValue": _defaultValueje7GlV9,
		"defaultValueDescription": _defaultValueDescriptionIC4wTNC,
		"envVar": _envVarLlPdfcS,
		"description": _descriptionYmOJU0a
	}
		const _returnValuebSgqNK = await _HelpePGG1d8.optionDescription(_optionkp5PR2D)
	});

	it('test for Help', async () => {
		const _HelppEoHloE = new Help()
		const _argChoicesnKXLuFq = {
		
	}
		const _negateZ1WeSB = []
		const _defaultValueOzWYc7z = undefined;
		const _defaultValueDescriptionwx1AlmB = false;
		const _envVarWHyiOwf = undefined;
		const _descriptionkXWFxYa = -6.900557051637103;
		const _option5tqbJz = {
			"argChoices": _argChoicesnKXLuFq,
		"negate": _negateZ1WeSB,
		"defaultValue": _defaultValueOzWYc7z,
		"defaultValueDescription": _defaultValueDescriptionwx1AlmB,
		"envVar": _envVarWHyiOwf,
		"description": _descriptionkXWFxYa
	}
		const _returnValuev9tqZsY = await _HelppEoHloE.optionDescription(_option5tqbJz)
		const _returnValueYeg7ZzZ = -9.053677608141964;
		const _descriptionH6QZwxM = () => { return _returnValueYeg7ZzZ };
		const _cmdwtRCbzD = {
			"description": _descriptionH6QZwxM
	}
		const _returnValuerPTXHyu = await _HelppEoHloE.subcommandDescription(_cmdwtRCbzD)
	});

	it('test for Help', async () => {
		const _HelpeliccBi = new Help()
		const __argswAjLiPZ = {
		
	}
		const __nameEAeotw = 1.2093977349377845;
		const __aliasesEE1QaTR = {
		
	}
		const _optionsE9Sza0U = {
		
	}
		const _cmdjHeKGTo = {
			"_args": __argswAjLiPZ,
		"_name": __nameEAeotw,
		"_aliases": __aliasesEE1QaTR,
		"options": _optionsE9Sza0U
	}
		const _returnValuefv3mcxO = await _HelpeliccBi.subcommandTerm(_cmdjHeKGTo)
		const __nameZwk8ok = {
		
	}
		const __aliasesk0foVTH = {
		
	}
		const _parentr3Y6LH = {
		
	}
		const _returnValueQH0XEW6 = false;
		const _usage9wQ9Bs = () => { return _returnValueQH0XEW6 };
		const _cmdeCOVAlL = {
			"_name": __nameZwk8ok,
		"_aliases": __aliasesk0foVTH,
		"parent": _parentr3Y6LH,
		"usage": _usage9wQ9Bs
	}
		const _returnValueGmus6x = await _HelpeliccBi.commandUsage(_cmdeCOVAlL)
	});

	it('test for Help', async () => {
		const _HelpvokM2Ls = new Help()
		const _returnValueoQgXuvS = false;
		const _descriptionrO5LIwF = () => { return _returnValueoQgXuvS };
		const _cmdaJBQtzj = {
			"description": _descriptionrO5LIwF
	}
		const _returnValueUE677Hk = await _HelpvokM2Ls.commandDescription(_cmdaJBQtzj)
		const _returnValueERvhOKh = undefined;
		const _nameLF4kWcX = () => { return _returnValueERvhOKh };
		const _argumentOfDVlUH = {
			"name": _nameLF4kWcX
	}
		const _returnValueUuubWio = await _HelpvokM2Ls.argumentTerm(_argumentOfDVlUH)
		const _cmdngFAHny = false;
		const _sortSubcommandsiruF86t = true;
		const _returnValuepkmyRh = 0.24300358432143554;
		const _subcommandTermZea0Ahg = () => { return _returnValuepkmyRh };
		const _helperlxpqbIf = {
			"sortSubcommands": _sortSubcommandsiruF86t,
		"subcommandTerm": _subcommandTermZea0Ahg
	}
		const _returnValueuTEmuF = await _HelpvokM2Ls.longestSubcommandTermLength(_cmdngFAHny, _helperlxpqbIf)
	});

	it('test for Help', async () => {
		const _Helpz659oVF = new Help()
		const _arrayValuekSsasJa = {
		
	}
		const _returnValuejD3wNXM = {
		
	}
		const _arrayValueYsv4ZP5 = () => { return _returnValuejD3wNXM };
		const _arrayValueKSoQERT = undefined;
		const _argumentVjuf4jv = [_arrayValuekSsasJa, _arrayValueYsv4ZP5, _arrayValueKSoQERT]
		const _returnValuemqXQg1H = await _Helpz659oVF.argumentDescription(_argumentVjuf4jv)
		const _cmduhTWojL = null;
		const _helpery5NihqV = []
		const _returnValuepnbH5rh = await _Helpz659oVF.padWidth(_cmduhTWojL, _helpery5NihqV)
		const _arrayValueaxIjwzF = null;
		const _arrayValuefSPkOPw = "brUJdj56UjuBqACRNAISpBRIQX0R4XolJ5KLl3SWO7T0uDoTrjioRDGuPYnG";
		const _arrayValued5FVl7f = undefined;
		const _arrayValueuGXfn5r = null;
		const _arrayValueBOsf2ZH = "u9gAyQVFCqG6GsePGVquScrcQQhT3qivuRV3c1XTtNfV91XKGP7gbbFD2RxmdTf3VuR3fSKDQhUw4jT1eoQhNnkUaPbT2DHal";
		const _argumentscthij = [_arrayValueaxIjwzF, _arrayValuefSPkOPw, _arrayValued5FVl7f, _arrayValueuGXfn5r, _arrayValueBOsf2ZH]
		const _returnValueRDF6bNK = await _Helpz659oVF.argumentDescription(_argumentscthij)
		const _arrayValuesJGHEpD = "lAQSKiWWKxiACImCB87u";
		const _argumentdBfMYkg = [_arrayValuesJGHEpD]
		const _returnValueTETPrUT = await _Helpz659oVF.argumentDescription(_argumentdBfMYkg)
		const _cmdDGRCf5y = -0.5054206599097668;
		const _arrayValueIitjwH3 = 2.415089694432705;
		const _helperTGJuWEr = [_arrayValueIitjwH3]
		const _returnValueUFyriw = await _Helpz659oVF.longestSubcommandTermLength(_cmdDGRCf5y, _helperTGJuWEr)
	});

	it('test for Help', async () => {
		const _HelpbfencnL = new Help()
		const _cmdfvqib5w = true;
		const _visibleOptionsXZvywy = null;
		const _returnValue7yAhHL = undefined;
		const _returnValueM64K6c = () => { return _returnValue7yAhHL };
		const _optionTermy72vDsl = () => { return _returnValueM64K6c };
		const _helperzNId29N = {
			"visibleOptions": _visibleOptionsXZvywy,
		"optionTerm": _optionTermy72vDsl
	}
		const _returnValuemdMgRon = await _HelpbfencnL.longestOptionTermLength(_cmdfvqib5w, _helperzNId29N)
	});

	it('test for Help', async () => {
		const _HelpXifFcW0 = new Help()
		const _commandsyjFh8aQ = {
		
	}
		const _returnValueZsPqmVi = true;
		const _returnValueyxw1GfZ = () => { return _returnValueZsPqmVi };
		const __hasImplicitHelpCommandkSRYhsS = () => { return _returnValueyxw1GfZ };
		const __helpCommandnameAndArgsxoQYCAr = {
		
	}
		const _arrayValueXIzvJsK = "eLNFRD5Rd2MHY86tdltzc9nS03fdylEZrF3ar3TKPr6zsjDWRO2Ceknl3xcfOt588IHthOQYNTkKJgon1Wk68ktIE9Pw";
		const _returnValueGtYxWfq = [_arrayValueXIzvJsK]
		const _createCommandZuYtvm5 = () => { return _returnValueGtYxWfq };
		const _arrayValueAVMLCjq = {
		
	}
		const _arrayValueecMkWnT = undefined;
		const __helpCommandDescriptionnsbQf3w = [_arrayValueAVMLCjq, _arrayValueecMkWnT]
		const _cmdqPN2J9E = {
			"commands": _commandsyjFh8aQ,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandkSRYhsS,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsxoQYCAr,
		"createCommand": _createCommandZuYtvm5,
		"_helpCommandDescription": __helpCommandDescriptionnsbQf3w
	}
		const _returnValueOLHifWW = await _HelpXifFcW0.visibleCommands(_cmdqPN2J9E)
		const _arrayValuewOlzeWn = true;
		const _arrayValuex1icEZz = undefined;
		const _arrayValueSCbcZPT = null;
		const _cmdrJ6DCc5 = [_arrayValuewOlzeWn, _arrayValuex1icEZz, _arrayValueSCbcZPT]
		const _returnValue5XSkuk = await _HelpXifFcW0.visibleOptions(_cmdrJ6DCc5)
		const _cmdTLY7Jxx = "58eq7GFOILxuCKRWOShUkaWtctP4Rb7hXkoWtIhdg2jSePKTox28Ch1vy7RBuTz5JsOe1Bo0Xsx5OnhRBeWPHvYugax46LrXKLD";
		const _returnValuebv9fFLB = await _HelpXifFcW0.visibleCommands(_cmdTLY7Jxx)
	});

	it('test for Help', async () => {
		const _HelprEwRjUO = new Help()
		const _returnValueCLleTrj = undefined;
		const _matchbxFkdv3 = () => { return _returnValueCLleTrj };
		const _returnValueHj4KhZZ = 0.13643887009233246;
		const _substrMlFvkv0 = () => { return _returnValueHj4KhZZ };
		const _strDtjZxM = {
			"match": _matchbxFkdv3,
		"substr": _substrMlFvkv0
	}
		const _widthpEzm7aa = -3.8559202556701324;
		const _indentURtZ0O = 0.027231366450770622;
		const _arrayValuehiBCqdI = null;
		const _arrayValueMb98Kg3 = null;
		const _arrayValueKrF398N = "m7RHVYzuELfRjH4fjGhwrDvg3VrtnYwwuwab5HWf3EJb";
		const _minColumnWidthI1a2dOD = [_arrayValuehiBCqdI, _arrayValueMb98Kg3, _arrayValueKrF398N]
		const _returnValueRf1eTTP = await _HelprEwRjUO.wrap(_strDtjZxM, _widthpEzm7aa, _indentURtZ0O, _minColumnWidthI1a2dOD)
		const _cmdU7rieNb = {
		
	}
		const _arrayValueeXjsOyF = {
		
	}
		const _arrayValuecBqoqw0 = undefined;
		const _arrayValueWv4lZy = true;
		const _arrayValuekBb6i3t = [_arrayValuecBqoqw0, _arrayValueWv4lZy]
		const _arrayValuek2LRx7q = true;
		const _returnValueduG05p = false;
		const _arrayValueXRtjDHx = () => { return _returnValueduG05p };
		const _arrayValueA6Xtps = [_arrayValuekBb6i3t, _arrayValuek2LRx7q, _arrayValueXRtjDHx]
		const _helperKKiH6Dq = [_arrayValueeXjsOyF, _arrayValueA6Xtps]
		const _returnValuedo4vBk1 = await _HelprEwRjUO.longestSubcommandTermLength(_cmdU7rieNb, _helperKKiH6Dq)
	});

	it('test for Help', async () => {
		const _HelpsvlVsB3 = new Help()
		const _returnValueQs6Zrfm = null;
		const _matchxp8ZauL = () => { return _returnValueQs6Zrfm };
		const _returnValueOl0HDij = null;
		const _substrIYZtiJy = () => { return _returnValueOl0HDij };
		const _strozuQp0q = {
			"match": _matchxp8ZauL,
		"substr": _substrIYZtiJy
	}
		const _width9jDWD9 = 0.012325084509399176;
		const _indentKblZB4H = 2.3367288967132875;
		const _minColumnWidthfTwvGjP = 1.4567095669767394;
		const _returnValueC22fUdT = await _HelpsvlVsB3.wrap(_strozuQp0q, _width9jDWD9, _indentKblZB4H, _minColumnWidthfTwvGjP)
		const _arrayValueR4D1yYk = "LWzMGOmvaK0ViD3ExrReKI1URSLw4fMviiKcM2VyTBxLrYjBvnwVYxYew14L1olitgaquSSpWoxwYf8nzuUarGE";
		const _arrayValue9mIJ5D = -5.981417565546647;
		const _arrayValueBrDyJRO = [_arrayValueR4D1yYk, _arrayValue9mIJ5D]
		const _arrayValuew5Mn3sG = undefined;
		const _arrayValuexSGJkk3 = [_arrayValuew5Mn3sG]
		const _cmdsyKm3ni = [_arrayValueBrDyJRO, _arrayValuexSGJkk3]
		const _helpertmb4R4 = "4U9TOL86l1PVU8YxqmuETdIXltb7SbTWFg3nAUZmRDU8kViNzGPPEJ";
		const _returnValueAFwScy1 = await _HelpsvlVsB3.longestSubcommandTermLength(_cmdsyKm3ni, _helpertmb4R4)
		const _cmdoP2KW8j = true;
		const _helperUDPdvHN = "ote1jvSnvumnURDH6BkFhfP8a9mWXEkT2cy36dy64OqOLnijCtyAAqhqKTCK6YpAMEaDedy3XwM685JKRykPTdj3iexsRFV";
		const _returnValueISMK4j = await _HelpsvlVsB3.padWidth(_cmdoP2KW8j, _helperUDPdvHN)
		const _cmdMoz4Zhq = undefined;
		const _helperSyGXXe = "lxFCgKISh1";
		const _returnValueKOYAn7J = await _HelpsvlVsB3.longestSubcommandTermLength(_cmdMoz4Zhq, _helperSyGXXe)
	});

	it('test for Help', async () => {
		const _HelpqFNjl6t = new Help()
		const _nameaRm7axo = -9.61584463868105;
		const _cmdtpJNDKg = new Command(_nameaRm7axo)
		const _arrayValueOZrgfSo = undefined;
		const _returnValueDEKzRMu = undefined;
		const _arrayValuedWmEixT = () => { return _returnValueDEKzRMu };
		const _arrayValuegNsjhpc = undefined;
		const _arrayValueIaMank3 = [_arrayValuedWmEixT, _arrayValuegNsjhpc]
		const _arrayValueLNdBOJV = null;
		const _arrayValuewQEHBUh = -1.3736405310125974;
		const _arrayValuePiCBaNR = [_arrayValuewQEHBUh]
		const _arrayValueeyNPiZo = {
		
	}
		const _errorIJ30YMO = [_arrayValueOZrgfSo, _arrayValueIaMank3, _arrayValueLNdBOJV, _arrayValuePiCBaNR, _arrayValueeyNPiZo]
		const _commandqt8fcHi = undefined;
		const _contextOptionsLxItLqr = {
			"error": _errorIJ30YMO,
		"command": _commandqt8fcHi
	}
		const _returnValueL7mqPSZ = await _cmdtpJNDKg.helpInformation(_contextOptionsLxItLqr)
		const _namegKxWzX3 = undefined;
		const _returnValuee8BYBo1 = await _cmdtpJNDKg._findCommand(_namegKxWzX3)
		const _returnValueY8k5Ref = await _HelpqFNjl6t.visibleCommands(_cmdtpJNDKg)
		const _cmdlvnq3ZY = null;
		const _helperhEIHZtw = new Help()
		const _cmdnsXJbta = {
		
	}
		const _arrayValueUrQtRfj = -1.3656997346861406;
		const _helperlnCp4AQ = [_arrayValueUrQtRfj]
		const _returnValuefgZv9tW = await _helperhEIHZtw.formatHelp(_cmdnsXJbta, _helperlnCp4AQ)
		const _cmdlSBvqqr = true;
		const _returnValueOXvPnGd = await _helperhEIHZtw.visibleArguments(_cmdlSBvqqr)
		const _returnValueFjnEtrD = await _HelpqFNjl6t.longestArgumentTermLength(_cmdlvnq3ZY, _helperhEIHZtw)
		const _cmdoMFReFb = 8.6730837914346;
		const _returnValueeiWFe5y = {
		
	}
		const _helperCG9jxR0 = () => { return _returnValueeiWFe5y };
		const _returnValueRYG0X8f = await _HelpqFNjl6t.longestOptionTermLength(_cmdoMFReFb, _helperCG9jxR0)
		const _nameP6SRp4 = "vs7spItVwI";
		const _cmdtzRKeL = new Command(_nameP6SRp4)
		const _configurationJ0gMog0 = undefined;
		const _returnValueNEEVFih = await _cmdtzRKeL.configureHelp(_configurationJ0gMog0)
		const _configurationo2HGiRE = undefined;
		const _returnValueKPDQKJC = await _cmdtzRKeL.configureOutput(_configurationo2HGiRE)
		const _returnValuecQ6hYS3 = null;
		const _startsWithgeIIYKU = () => { return _returnValuecQ6hYS3 };
		const _flagbLWpSyt = {
			"startsWith": _startsWithgeIIYKU
	}
		const _returnValuesINlWcg = await _cmdtzRKeL.unknownOption(_flagbLWpSyt)
		const _returnValueGxlGoSF = await _HelpqFNjl6t.subcommandTerm(_cmdtzRKeL)
	});

	it('test for Help', async () => {
		const _HelpZPieEaK = new Help()
		const _arrayValuebN2AxIv = {
		
	}
		const _returnValuei7CRj6P = {
		
	}
		const _arrayValueO79gtk6 = () => { return _returnValuei7CRj6P };
		const _namemo2raaC = [_arrayValuebN2AxIv, _arrayValueO79gtk6]
		const _cmdfzarJGj = new Command(_namemo2raaC)
		const _returnValuecIhYwGt = await _cmdfzarJGj.createHelp()
		const _nameiCdD1WZ = -3.6892823987892935;
		const _descriptionxocHdyd = null;
		const _returnValueCrRp7zT = await _cmdfzarJGj.createArgument(_nameiCdD1WZ, _descriptionxocHdyd)
		const _mandatoryb2gHLhu = 3.0548689140485052;
		const _configBTEHiKC = {
			"mandatory": _mandatoryb2gHLhu
	}
		const _flagsKBy1gI = "Pd3";
		const _descriptionyfv2gUD = {
		
	}
		const _fnL2SZ4OJ = {
		
	}
		const _defaultValuex4OkGKa = "ZNVdgrkHSoG065jhDRUnYF1hzoiGQvo2p4ESLtZ";
		const _returnValueQIeuHBg = await _cmdfzarJGj._optionEx(_configBTEHiKC, _flagsKBy1gI, _descriptionyfv2gUD, _fnL2SZ4OJ, _defaultValuex4OkGKa)
		const _returnValuedTrvUvm = await _HelpZPieEaK.subcommandTerm(_cmdfzarJGj)
		const _cmdIxgJ6xh = {
		
	}
		const _returnValuePMEZDB7 = 9.335773726084135;
		const _visibleArgumentsbyMhGTC = () => { return _returnValuePMEZDB7 };
		const _returnValueqQ4zN5S = undefined;
		const _argumentTermV8eFWd = () => { return _returnValueqQ4zN5S };
		const _helperc7fd1D = {
			"visibleArguments": _visibleArgumentsbyMhGTC,
		"argumentTerm": _argumentTermV8eFWd
	}
		const _returnValueCBa7LjK = await _HelpZPieEaK.longestArgumentTermLength(_cmdIxgJ6xh, _helperc7fd1D)
	});

	it('test for Help', async () => {
		const _HelpVmGPAxA = new Help()
		const __namepkgwsV5 = {
		
	}
		const _arrayValueW9HusDc = "zIkqgfADdJHxDi2AcdtEUb4NQjFUs4YovSeP6E";
		const _arrayValueNk7kc2 = -5.716739448541849;
		const __aliasesDKCf6zb = [_arrayValueW9HusDc, _arrayValueNk7kc2]
		const _parentTMriYY = {
		
	}
		const _returnValueNO1fA4A = null;
		const _usagev7weqmW = () => { return _returnValueNO1fA4A };
		const _cmdhplSORq = {
			"_name": __namepkgwsV5,
		"_aliases": __aliasesDKCf6zb,
		"parent": _parentTMriYY,
		"usage": _usagev7weqmW
	}
		const _returnValuepdPtbj3 = await _HelpVmGPAxA.commandUsage(_cmdhplSORq)
		const __nameQlU1l3i = {
		
	}
		const __aliasesdx8UuXH = {
		
	}
		const _parentG5Lgtq1 = null;
		const _returnValueWpeh2y = "ULtnTLpb83L3d3FXB4sP2ECdwvHg2G7sbpJhK3s4TA8yz4vfAXhYFA1BD5fyHqijabv5kJSwz7L1zspU3SAIwv9PKyvp2KX4k9";
		const _usageAaV7acy = () => { return _returnValueWpeh2y };
		const _cmdD5Q23MX = {
			"_name": __nameQlU1l3i,
		"_aliases": __aliasesdx8UuXH,
		"parent": _parentG5Lgtq1,
		"usage": _usageAaV7acy
	}
		const _returnValueQiu3qZm = await _HelpVmGPAxA.commandUsage(_cmdD5Q23MX)
		const __namerL59NDe = {
		
	}
		const __aliasesfrzRkCS = "lTObl2g2YeSR5evDjaYf6XBRN6Pqw6RWX2Wck9w5jMKywTJfigx33XeOqRi";
		const _parentiSUKqTF = {
		
	}
		const _returnValuelelHT1C = "cDSmAGkVKy4HItW6yl1kgqBX2s5OYTDItRHRh1XoCsnmUOqEFmVJ5JyI5xAf";
		const _usageaoZxVAz = () => { return _returnValuelelHT1C };
		const _cmdDcpYvpT = {
			"_name": __namerL59NDe,
		"_aliases": __aliasesfrzRkCS,
		"parent": _parentiSUKqTF,
		"usage": _usageaoZxVAz
	}
		const _returnValueFWxy9uw = await _HelpVmGPAxA.commandUsage(_cmdDcpYvpT)
	});

	it('test for Help', async () => {
		const _Helplg5vhNx = new Help()
		const _cmdso9fkxM = null;
		const _helperyp42Wse = new Help()
		const _returnValueapYvkm6 = 1.4115624411682877;
		const _arrayValueiwIqnsa = () => { return _returnValueapYvkm6 };
		const _namermwuAQ4 = [_arrayValueiwIqnsa]
		const _argumentNrvVIc3 = new Command(_namermwuAQ4)
		const _aliasm0UuMdl = undefined;
		const _returnValueNTjHMKW = await _argumentNrvVIc3.alias(_aliasm0UuMdl)
		const _passThroughVXjx8QT = true;
		const _returnValueqtMH3SH = await _argumentNrvVIc3.passThroughOptions(_passThroughVXjx8QT)
		const _combineDkwxxxb = true;
		const _returnValuebQSgscc = await _argumentNrvVIc3.combineFlagAndOptionalValue(_combineDkwxxxb)
		const _storeAsPropertiesNleewJv = false;
		const _returnValuegmHKZHn = await _argumentNrvVIc3.storeOptionsAsProperties(_storeAsPropertiesNleewJv)
		const _returnValuedGYMRzy = await _helperyp42Wse.argumentTerm(_argumentNrvVIc3)
		const _flagskwyFQ7T = "QtnGAnebPtBgOaieh";
		const _descriptionCepKvv = true;
		const _cmdztJ8NEf = new Option(_flagskwyFQ7T, _descriptionCepKvv)
		const _fnN9nhGJ = undefined;
		const _returnValueqOMzeKR = await _cmdztJ8NEf.argParser(_fnN9nhGJ)
		const _valueqJhA2tP = undefined;
		const _descriptionAiwZqnr = undefined;
		const _returnValueO6g1gvF = await _cmdztJ8NEf.default(_valueqJhA2tP, _descriptionAiwZqnr)
		const _nameWzEBqgA = undefined;
		const _returnValueQMd15eE = await _cmdztJ8NEf.env(_nameWzEBqgA)
		const _returnValuee7jbPs0 = await _cmdztJ8NEf.name()
		const _nameK1dxKvQ = undefined;
		const _returnValueUBKgWn = await _cmdztJ8NEf.env(_nameK1dxKvQ)
		const _returnValueyQeSCPs = await _helperyp42Wse.commandDescription(_cmdztJ8NEf)
		const _returnValuepUFr4WD = await _Helplg5vhNx.longestOptionTermLength(_cmdso9fkxM, _helperyp42Wse)
		const _argumentlSHDO5V = "wQHzLNUWRO8RHjER4ZXP4vUxBwmvLcXQnzAdt3WvRwCY3TkKL92IxSwW1yS7ObR1gx";
		const _returnValuesFiAws0 = await _Helplg5vhNx.argumentDescription(_argumentlSHDO5V)
		const _cmdTFymFXZ = null;
		const _helperjQr9qh2 = new Help()
		const _argumentYMxV2yj = "adEQF15aHNh5cJIG6bjIMXG";
		const _returnValueaGjnbLk = await _helperjQr9qh2.argumentDescription(_argumentYMxV2yj)
		const _optionOlOxG8 = "KdDtW9TXjj27V2dA62PjtiRE4J3GKWfL9YEb85PTmG";
		const _returnValuepF20Pnq = await _helperjQr9qh2.optionDescription(_optionOlOxG8)
		const _returnValuehEc9X68 = await _Helplg5vhNx.longestOptionTermLength(_cmdTFymFXZ, _helperjQr9qh2)
		const __namexs3mqZO = {
		
	}
		const __aliasesGupVtln = {
		
	}
		const _parentuR4Pwb = {
		
	}
		const _usagedXDkWWg = null;
		const _cmdcczYXJi = {
			"_name": __namexs3mqZO,
		"_aliases": __aliasesGupVtln,
		"parent": _parentuR4Pwb,
		"usage": _usagedXDkWWg
	}
		const _returnValueLX2sC6I = await _Helplg5vhNx.commandUsage(_cmdcczYXJi)
		const _cmdNQfctGS = 8.925565177261248;
		const _helperemdeWM = "4LkL1MAFk0MxyQbjUUMS4BsgmdXXvTwNcDom2NzhM";
		const _returnValueMBIewtd = await _Helplg5vhNx.longestOptionTermLength(_cmdNQfctGS, _helperemdeWM)
	});

	it('test for Help', async () => {
		const _HelpTKfnHC = new Help()
		const _nameEaypnje = "WzBoqChfKtk4Jqr4UbqmPUqYRBB51S7HDB8Po54dXDsCuJxRJQ8GJssuPGff0AJAYgROhJv4PQfQkbQuye4ryEV";
		const _cmdMU11y7o = new Command(_nameEaypnje)
		const _returnValueg4Bum3H = await _cmdMU11y7o._hasImplicitHelpCommand()
		const _enableOrNameAndArgsOs5KnuM = "r1k3nPH1UHoQt1njT4ISCbogwKvMCYGqoA5GkRQs9qb3DGXtJOLauu1ejmFFQo76TMakWDFh";
		const _descriptionRJqf7Xs = undefined;
		const _returnValueJnk5C2e = await _cmdMU11y7o.addHelpCommand(_enableOrNameAndArgsOs5KnuM, _descriptionRJqf7Xs)
		const _returnValuernhQw42 = await _HelpTKfnHC.visibleOptions(_cmdMU11y7o)
		const _returnValueVMEJCsU = null;
		const _cmddwpL1SV = () => { return _returnValueVMEJCsU };
		const _helperLqOCoh = new Help()
		const _cmddHZEWpE = false;
		const _helperGJe4l68 = new Help()
		const _cmdB0eUjId = undefined;
		const _returnValueKcYn27f = await _helperGJe4l68.visibleCommands(_cmdB0eUjId)
		const _arrayValueZZ0Vl2t = {
		
	}
		const _arrayValuemQpWzfg = null;
		const _descriptionOoqXgGX = [_arrayValueZZ0Vl2t, _arrayValuemQpWzfg]
		const _cmdEcC9Lzr = {
			"description": _descriptionOoqXgGX
	}
		const _returnValueeiMr0HX = await _helperGJe4l68.commandDescription(_cmdEcC9Lzr)
		const _returnValuez2vymr = null;
		const _nameYzpCP8t = () => { return _returnValuez2vymr };
		const _cmdQpjZLy8 = new Command(_nameYzpCP8t)
		const _storeAsPropertiesIHfrMRL = true;
		const _returnValueA8KJXUq = await _cmdQpjZLy8.storeOptionsAsProperties(_storeAsPropertiesIHfrMRL)
		const _displayHelpzlmpWZc = {
		
	}
		const _returnValueFbfJt9 = await _cmdQpjZLy8.showHelpAfterError(_displayHelpzlmpWZc)
		const _strPRKY1n = undefined;
		const _returnValuev8nFBu = await _cmdQpjZLy8.usage(_strPRKY1n)
		const _subcommanddKupDmE = "xF2BcOO54uOot9VGfCf18r";
		const _argsjY0BbKT = true;
		const _returnValueXfNuPP8 = await _cmdQpjZLy8._executeSubCommand(_subcommanddKupDmE, _argsjY0BbKT)
		const _returnValuesMUHzHS = await _helperGJe4l68.subcommandDescription(_cmdQpjZLy8)
		const _returnValueCULISSK = "UdC9nuFfqPOYW8P7UbtFNCOhCMrw1qFdVPhrtazc7Y8x9Pf0skhyek1tJvx";
		const _descriptionvxe21c = () => { return _returnValueCULISSK };
		const _cmdY3lNKwj = {
			"description": _descriptionvxe21c
	}
		const _returnValueIWuNAl = await _helperGJe4l68.commandDescription(_cmdY3lNKwj)
		const _returnValueYX1J6Ck = await _helperLqOCoh.longestOptionTermLength(_cmddHZEWpE, _helperGJe4l68)
		const _cmdbEUCYS9 = 3.245099186053288;
		const _helperdzhiA2 = new Help()
		const _cmdwnGpglg = undefined;
		const _helperwRgkJHJ = new Help()
		const _cmdYxmj1S = undefined;
		const _helperdLL38C6 = new Help()
		const _arrayValueQOF8wbq = {
		
	}
		const _nameASrEqay = [_arrayValueQOF8wbq]
		const _descriptionphgN4sN = "tn";
		const _argument1ViJQw = new Argument(_nameASrEqay, _descriptionphgN4sN)
		const _returnValuer2qVjua = null;
		const _includesQsZ3Wt7 = () => { return _returnValuer2qVjua };
		const _returnValueIL7lVcS = -9.847760071595912;
		const _joinRezXlve = () => { return _returnValueIL7lVcS };
		const _valuestwZ5ZO = {
			"includes": _includesQsZ3Wt7,
		"join": _joinRezXlve
	}
		const _returnValueuxD5a2W = await _argument1ViJQw.choices(_valuestwZ5ZO)
		const _fnXKTNKu6 = undefined;
		const _returnValue2Ox42l = await _argument1ViJQw.argParser(_fnXKTNKu6)
		const _returnValueJX6XE3e = await _argument1ViJQw.argOptional()
		const _returnValuehRe5cxn = await _argument1ViJQw.argRequired()
		const _returnValueothYdZu = await _helperdLL38C6.argumentDescription(_argument1ViJQw)
		const _flagsWsjQQFQ = "sl1uhTa7zrnaD5a8tNObxhlImeEs1gOb2fSSYBXQYeuDNjG6kiM1Syzf3fcIdl";
		const _descriptionHVp7hsC = false;
		const _optionGNwgjJu = new Option(_flagsWsjQQFQ, _descriptionHVp7hsC)
		const _hideEulDh1U = {
		
	}
		const _returnValuet93QWjB = await _optionGNwgjJu.hideHelp(_hideEulDh1U)
		const _nameUm3jZhR = undefined;
		const _returnValues79BXdK = await _optionGNwgjJu.env(_nameUm3jZhR)
		const _hideP7PPLvY = false;
		const _returnValueQsxohLx = await _optionGNwgjJu.hideHelp(_hideP7PPLvY)
		const _returnValuevIZ4Tlv = await _optionGNwgjJu.name()
		const _fnqhuyr7n = undefined;
		const _returnValue2DfB0B = await _optionGNwgjJu.argParser(_fnqhuyr7n)
		const _returnValue5jd3Gk = await _helperdLL38C6.optionDescription(_optionGNwgjJu)
		const _returnValuesk5Aw1T = {
		
	}
		const _cmdgjEeZNc = () => { return _returnValuesk5Aw1T };
		const _helperZG7EJVE = new Help()
		const _flagsTmEzEuG = "cBBXvbjdw44N5HueTwDLhDoDMFGDoBVy1uQYqok1je7nTIx";
		const _descriptionHFLajry = {
		
	}
		const _optionT8rp6id = new Option(_flagsTmEzEuG, _descriptionHFLajry)
		const _nameiVdXn1R = undefined;
		const _returnValuemZZs7kQ = await _optionT8rp6id.env(_nameiVdXn1R)
		const _hiden9gz05A = true;
		const _returnValueViJKGkS = await _optionT8rp6id.hideHelp(_hiden9gz05A)
		const _arrayValueNGZw8bF = {
		
	}
		const _arrayValuepFezPH = true;
		const _arrayValuecmZHFEd = {
		
	}
		const _arrayValueFVWNu9y = "GvSHZO49Jpx5ey76ijAbqmalGADpHoiz8ktDxo";
		const _arrayValuehjua3ax = [_arrayValuepFezPH, _arrayValuecmZHFEd, _arrayValueFVWNu9y]
		const _returnValuelGRd6tV = -1.6400231945772;
		const _arrayValuejmeDFi9 = () => { return _returnValuelGRd6tV };
		const _arrayValuecz27meV = [_arrayValuehjua3ax, _arrayValuejmeDFi9]
		const _arrayValueveZ1pok = null;
		const _valueU7DcRfm = [_arrayValueNGZw8bF, _arrayValuecz27meV, _arrayValueveZ1pok]
		const _concatoWZwvBC = 3.8232112195278987;
		const _previousqtwROGC = {
			"concat": _concatoWZwvBC
	}
		const _returnValueuWbxoi7 = await _optionT8rp6id._concatValue(_valueU7DcRfm, _previousqtwROGC)
		const _returnValueOcjW1B = await _helperZG7EJVE.optionDescription(_optionT8rp6id)
		const _flagsueDfYdN = "OzVCI7vn0HmTb4OqkpqHOWNNomLwugh";
		const _descriptionOLCz4V = null;
		const _optionh1mN6xu = new Option(_flagsueDfYdN, _descriptionOLCz4V)
		const _valuewj66ZWC = undefined;
		const _descriptionRJ7DYwR = undefined;
		const _returnValuep3OuVtu = await _optionh1mN6xu.default(_valuewj66ZWC, _descriptionRJ7DYwR)
		const _returnValuekjuTMms = await _optionh1mN6xu.attributeName()
		const _nameyiUjxN4 = "JfwUGi6xksrznUDQ";
		const _returnValueHQLmih4 = await _optionh1mN6xu.env(_nameyiUjxN4)
		const _namehD5EfWb = null;
		const _returnValueZwrJB4f = await _optionh1mN6xu.env(_namehD5EfWb)
		const _returnValuebLixwk1 = undefined;
		const _valueCLdAy8d = () => { return _returnValuebLixwk1 };
		const _returnValueKw8T2ap = {
		
	}
		const _concatB2cC0kl = () => { return _returnValueKw8T2ap };
		const _previousP9urvCn = {
			"concat": _concatB2cC0kl
	}
		const _returnValueeuF4ZBg = await _optionh1mN6xu._concatValue(_valueCLdAy8d, _previousP9urvCn)
		const _returnValueU9tTCqY = await _helperZG7EJVE.optionDescription(_optionh1mN6xu)
		const _cmdEaxIMj6 = undefined;
		const _helperWbUFTQx = new Help()
		const _arrayValueYxTy7q3 = undefined;
		const _returnValuen68kwli = {
		
	}
		const _arrayValuewY8t1jD = () => { return _returnValuen68kwli };
		const _arrayValueoKll9xj = {
		
	}
		const _nameGRTBXm = [_arrayValueYxTy7q3, _arrayValuewY8t1jD, _arrayValueoKll9xj]
		const _returnValueKypOSJh = null;
		const _descriptionnm6jtNL = () => { return _returnValueKypOSJh };
		const _argumentIYd8n2d = new Argument(_nameGRTBXm, _descriptionnm6jtNL)
		const _valueGEpYjkL = undefined;
		const _arrayValuept9qpOD = "TMkyvoMJPLiFxQX8Otf19z21cuardcn5imimC";
		const _descriptionndMBbuZ = [_arrayValuept9qpOD]
		const _returnValueIPXk0Ra = await _argumentIYd8n2d.default(_valueGEpYjkL, _descriptionndMBbuZ)
		const _returnValuebycQsY3 = undefined;
		const _includesn5ZeoqV = () => { return _returnValuebycQsY3 };
		const _returnValuePhMyCkl = undefined;
		const _joinoYIK6L = () => { return _returnValuePhMyCkl };
		const _valuesZ0g8pP1 = {
			"includes": _includesn5ZeoqV,
		"join": _joinoYIK6L
	}
		const _returnValuely7cZWk = await _argumentIYd8n2d.choices(_valuesZ0g8pP1)
		const _returnValueUjILGQ6 = await _helperWbUFTQx.argumentDescription(_argumentIYd8n2d)
		const _returnValuexaUZE59 = await _helperZG7EJVE.longestArgumentTermLength(_cmdEaxIMj6, _helperWbUFTQx)
		const _cmdjXoBN0n = 1.92932879278632;
		const _helperODdYdoL = new Help()
		const _cmdnsAgMe = "qdIOYbiAinxIx7kuZnNhVukta5f4XI2I78IiQSw0QBpgdTsFTETHEo29vagctnNnQLi8LGUYo";
		const _returnValuei3vF1Po = await _helperODdYdoL.visibleArguments(_cmdnsAgMe)
		const _strLz0zTo4 = "pxa43xYczFw5UTtqop1CFzR5n0sES";
		const _widthZ4yAo5 = -8.347465886417524;
		const _indentAj01Ve6 = -8.773743960861989;
		const _minColumnWidthnn2H4AJ = 9.425356715823735;
		const _returnValueeVnQAOS = await _helperODdYdoL.wrap(_strLz0zTo4, _widthZ4yAo5, _indentAj01Ve6, _minColumnWidthnn2H4AJ)
		const _strEZ4wtj = "Ej2ulx5cuAErF2sRmzKdOSI6Qkk2zsBNSA1L6btWXHpeSdLl4TkX99oXrGtePeSJdLXoThJWQGCC65Qx";
		const _widthFZwz7N0 = -1.7259272778561119;
		const _indentkCpaiWe = null;
		const _minColumnWidtha4UBqSd = 1.693264928627979;
		const _returnValueGIavN4l = await _helperODdYdoL.wrap(_strEZ4wtj, _widthFZwz7N0, _indentkCpaiWe, _minColumnWidtha4UBqSd)
		const _cmdQpKjN6H = "TljnxLrdvm6951YMSrlWqBjoJbXcftabUxF4IDdkPXI9xriJphXjM5au4tOqLla6grvGp7qSruy";
		const _returnValueVD1SUwF = await _helperODdYdoL.visibleArguments(_cmdQpKjN6H)
		const _returnValueuOiRny = await _helperZG7EJVE.longestArgumentTermLength(_cmdjXoBN0n, _helperODdYdoL)
		const _returnValueWhSSOkd = await _helperdLL38C6.longestSubcommandTermLength(_cmdgjEeZNc, _helperZG7EJVE)
		const _returnValueo2uS4aY = await _helperwRgkJHJ.longestSubcommandTermLength(_cmdYxmj1S, _helperdLL38C6)
		const _returnValueqPSco6U = await _helperdzhiA2.padWidth(_cmdwnGpglg, _helperwRgkJHJ)
		const _nameKfAR9UF = "OAVGSgJYMxu5fWaIArxdr5yz7Uvf1SPeBiGGDeo47ntzI2KSNz2mApuCm9lwqk5OqfuJw";
		const _cmdtPFJXcD = new Command(_nameKfAR9UF)
		const _returnValuejcgiPNO = await _cmdtPFJXcD._checkNumberOfArguments()
		const _returnValuezB7Bk1J = false;
		const _arrayValueyhdJdY6 = () => { return _returnValuezB7Bk1J };
		const _arrayValueIN5ceq = "itDvDk08qZ19sDN";
		const _returnValuec5hTZk8 = [_arrayValueIN5ceq]
		const _arrayValueCG426Da = () => { return _returnValuec5hTZk8 };
		const _arrayValueJg59iVY = undefined;
		const _nameiMVpzl2 = [_arrayValueyhdJdY6, _arrayValueCG426Da, _arrayValueJg59iVY]
		const _descriptionIrMr4gV = undefined;
		const _returnValueysaa0Fz = await _cmdtPFJXcD.createArgument(_nameiMVpzl2, _descriptionIrMr4gV)
		const _configurationDricQmX = undefined;
		const _returnValueTdUt30H = await _cmdtPFJXcD.configureOutput(_configurationDricQmX)
		const _arrayValueRi3UzcS = 0.6853674551698585;
		const _arrayValuei4FvKNy = undefined;
		const _optionmeVx9LB = [_arrayValueRi3UzcS, _arrayValuei4FvKNy]
		const _returnValuejyRzOkZ = await _cmdtPFJXcD.addOption(_optionmeVx9LB)
		const _returnValuezZuysbb = await _helperdzhiA2.subcommandDescription(_cmdtPFJXcD)
		const _returnValuexvP6yqH = await _helperLqOCoh.longestArgumentTermLength(_cmdbEUCYS9, _helperdzhiA2)
		const _arrayValueGb5fmNB = 3.0448915084548656;
		const _arrayValueL8qF7mg = true;
		const _arrayValueox1Yopw = 9.304981535419596;
		const _argumentM7zNYmX = [_arrayValueGb5fmNB, _arrayValueL8qF7mg, _arrayValueox1Yopw]
		const _returnValueJiO7Er4 = await _helperLqOCoh.argumentDescription(_argumentM7zNYmX)
		const _flagsuZTWqA6 = "lCELEOPVlSTh6SRW1FW0SSAShCtHgFlG2VFhQo9iqXgjuOZR7ui8GIjO7HlKXgz";
		const _descriptionu6dafzW = null;
		const _optionqkwalXu = new Option(_flagsuZTWqA6, _descriptionu6dafzW)
		const _returnValueXtNvgX = await _optionqkwalXu.name()
		const _valueFxJojBY = undefined;
		const _returnValueyuKocyw = null;
		const _concatsxbBxI1 = () => { return _returnValueyuKocyw };
		const _previousDWzrw9B = {
			"concat": _concatsxbBxI1
	}
		const _returnValueIMSTuqz = await _optionqkwalXu._concatValue(_valueFxJojBY, _previousDWzrw9B)
		const _returnValuewVbQNV = await _helperLqOCoh.optionDescription(_optionqkwalXu)
		const _returnValueOnohTiZ = await _HelpTKfnHC.padWidth(_cmddwpL1SV, _helperLqOCoh)
		const _nameVeW0Rng = null;
		const _cmdfe3994j = new Command(_nameVeW0Rng)
		const _flagssU7UZVm = undefined;
		const _option9pgtls = {
			"flags": _flagssU7UZVm
	}
		const _returnValuez6Rc69h = await _cmdfe3994j.missingMandatoryOptionValue(_option9pgtls)
		const _keyFAZ8TUB = null;
		const _valueolx5txX = "n91gxw8VArQIpcQHOA";
		const _sourceO5xqSCR = undefined;
		const _returnValueqQRjzqF = await _cmdfe3994j.setOptionValueWithSource(_keyFAZ8TUB, _valueolx5txX, _sourceO5xqSCR)
		const _displayHelprEGoHHO = {
		
	}
		const _returnValueg42kjLX = await _cmdfe3994j.showHelpAfterError(_displayHelprEGoHHO)
		const _returnValuezI7GCYL = true;
		const _thenwnjwY6U = () => { return _returnValuezI7GCYL };
		const _promiseI10PlwS = {
			"then": _thenwnjwY6U
	}
		const _fnOhptaX6 = null;
		const _returnValuew4dhcaT = await _cmdfe3994j._chainOrCall(_promiseI10PlwS, _fnOhptaX6)
		const _returnValueBbWsFKI = await _HelpTKfnHC.subcommandDescription(_cmdfe3994j)
		const _names1kpgZK = "Gy4XAXRoizebwnAwvWlkaD56lUAOD5ZgBRDFpy8WML4t4Y5GlEmLgv0hybNVncg6jRU5EvpT7SYctJVlq8BrO3w";
		const _cmddpCHdWi = new Command(_names1kpgZK)
		const _flags35cQAA = true;
		const _arrayValuel6aRr7i = null;
		const _arrayValuejApwxFp = -2.814518271115036;
		const _returnValueyeJKttX = null;
		const _arrayValuePIXDlf = () => { return _returnValueyeJKttX };
		const _descriptionFZ6GJYn = [_arrayValuel6aRr7i, _arrayValuejApwxFp, _arrayValuePIXDlf]
		const _returnValuej06x3YG = await _cmddpCHdWi.helpOption(_flags35cQAA, _descriptionFZ6GJYn)
		const _displayHelpHh8q2ac = {
		
	}
		const _returnValueTP6UfoB = await _cmddpCHdWi.showHelpAfterError(_displayHelpHh8q2ac)
		const _returnValuerKl67l = await _HelpTKfnHC.visibleOptions(_cmddpCHdWi)
	});

	it('test for Help', async () => {
		const _HelpGuWeen = new Help()
		const _cmdwAA0OPy = 7.56456108942362;
		const _helperZGWPTYZ = new Help()
		const _namekxK7w9H = 0.2182885985878702;
		const _cmdbYgt2LT = new Command(_namekxK7w9H)
		const _allowUnknownZDpMuDu = false;
		const _returnValueBEgdMhU = await _cmdbYgt2LT.allowUnknownOption(_allowUnknownZDpMuDu)
		const _arrayValuetDgoA12 = -5.260663543778184;
		const _arrayValuerUWlIRR = []
		const _arrayValuePFI8kg = null;
		const _returnValueUsYRNcj = [_arrayValuetDgoA12, _arrayValuerUWlIRR, _arrayValuePFI8kg]
		const _requiredBG1LjVi = () => { return _returnValueUsYRNcj };
		const _defaultValueupft2S = undefined;
		const _parseArgNeFWYjg = undefined;
		const _returnValuehgHll6 = false;
		const _namelEfXrJY = () => { return _returnValuehgHll6 };
		const _argumentPSmhY8 = {
			"required": _requiredBG1LjVi,
		"defaultValue": _defaultValueupft2S,
		"parseArg": _parseArgNeFWYjg,
		"name": _namelEfXrJY
	}
		const _returnValueUVYkDjc = await _cmdbYgt2LT.addArgument(_argumentPSmhY8)
		const _returnValueAyUjjbK = await _helperZGWPTYZ.subcommandTerm(_cmdbYgt2LT)
		const _cmdJLRlaeD = {
		
	}
		const _returnValueZ15l50U = {
		
	}
		const _helperFOmHuaI = () => { return _returnValueZ15l50U };
		const _returnValueMa2TJm = await _helperZGWPTYZ.longestSubcommandTermLength(_cmdJLRlaeD, _helperFOmHuaI)
		const _returnValuexNoNDVg = false;
		const _nameoIsEQPX = () => { return _returnValuexNoNDVg };
		const _cmdPpK86dL = new Command(_nameoIsEQPX)
		const _flagqRTdsYn = "tINYSuAvSQRw8bVDgVtLqlWTMp5TQMpNdrHUDqp";
		const _returnValueDUAxwMU = await _cmdPpK86dL.unknownOption(_flagqRTdsYn)
		const _returnValueotDD1o4 = true;
		const _slicedTkbqhJ = () => { return _returnValueotDD1o4 };
		const _argvGr58JHF = {
			"slice": _slicedTkbqhJ
	}
		const _returnValueh1wUWNB = await _cmdPpK86dL.parseOptions(_argvGr58JHF)
		const _returnValueGulMXCm = null;
		const _contextOptionsyK72qOT = () => { return _returnValueGulMXCm };
		const _returnValuecYK8G91 = await _cmdPpK86dL.outputHelp(_contextOptionsyK72qOT)
		const _arglXCwfSQ = false;
		const _returnValue4HQmpt = await _cmdPpK86dL._findOption(_arglXCwfSQ)
		const _namesw7dpjQm = "Sj6muVJQbG";
		const _returnValuedJn5rR = await _cmdPpK86dL.arguments(_namesw7dpjQm)
		const _returnValuepBAxmgO = await _helperZGWPTYZ.subcommandTerm(_cmdPpK86dL)
		const _arrayValueE1PjWu3 = -0.19970891464678964;
		const _arrayValuebo38a5M = [_arrayValueE1PjWu3]
		const _arrayValueVI13F9z = {
		
	}
		const _arrayValueUc05QvA = "5o11DC8uneeV2QvQ075H2";
		const _arrayValueHoOJGf9 = -6.689765294103725;
		const _arrayValuenkReGIW = [_arrayValuebo38a5M, _arrayValueVI13F9z, _arrayValueUc05QvA, _arrayValueHoOJGf9]
		const _arrayValueG6hSai = null;
		const _nameGPffQdr = [_arrayValuenkReGIW, _arrayValueG6hSai]
		const _cmdbM0CNKt = new Command(_nameGPffQdr)
		const _nameNlIL3Ju = undefined;
		const _returnValuepzeJ1lU = await _cmdbM0CNKt.missingArgument(_nameNlIL3Ju)
		const _displaySuggestionjxf5A48 = false;
		const _returnValueSmSdcoC = await _cmdbM0CNKt.showSuggestionAfterError(_displaySuggestionjxf5A48)
		const _namekl49Ksu = false;
		const _arrayValueUG5a3tG = null;
		const _arrayValueqSu4djs = "GaqnXVfsvzgX8gp";
		const _arrayValueTfFyjVI = 1.4848197547901485;
		const _descriptionI9SECj = [_arrayValueUG5a3tG, _arrayValueqSu4djs, _arrayValueTfFyjVI]
		const _arrayValueoodLIMc = null;
		const _arrayValueIJMHAev = 5.468295714151935;
		const _arrayValuep0E3x5C = undefined;
		const _arrayValuepq6SSNo = undefined;
		const _arrayValuetOPix2A = [_arrayValueIJMHAev, _arrayValuep0E3x5C, _arrayValuepq6SSNo]
		const _fnrfHJL5h = [_arrayValueoodLIMc, _arrayValuetOPix2A]
		const _defaultValuet5ulsKM = "FY3hfQEPG7lSDvbbH60FWThtZn0gIl9RGR9xBJ9RdSzoHF2pnHNwGfduJ9yJTSrgTQ8C3R0fcROsaFWj2x4sOYdC";
		const _returnValueLcL0GtY = await _cmdbM0CNKt.argument(_namekl49Ksu, _descriptionI9SECj, _fnrfHJL5h, _defaultValuet5ulsKM)
		const _returnValueUfQS0j = await _helperZGWPTYZ.subcommandTerm(_cmdbM0CNKt)
		const _returnValuempGEGbH = await _HelpGuWeen.formatHelp(_cmdwAA0OPy, _helperZGWPTYZ)
		const _flagsLxeGAqH = true;
		const _optionZW4mm9q = {
			"flags": _flagsLxeGAqH
	}
		const _returnValueON0ft0v = await _HelpGuWeen.optionTerm(_optionZW4mm9q)
		const _cmdTMUZ8k4 = -0.20153015605438185;
		const _returnValueEeMGAsS = 6.182870055507454;
		const _longestOptionTermLengthwLQK9s0 = () => { return _returnValueEeMGAsS };
		const _returnValuesGKnhY = null;
		const _longestSubcommandTermLengthvkTToWO = () => { return _returnValuesGKnhY };
		const _arrayValueBYMBeu = {
		
	}
		const _arrayValueceio1IC = null;
		const _returnValueuhsNfO = -1.2571935298951047;
		const _returnValueo5RyeFk = () => { return _returnValueuhsNfO };
		const _arrayValueW2pIcTI = () => { return _returnValueo5RyeFk };
		const _returnValueOC7tqU0 = [_arrayValueBYMBeu, _arrayValueceio1IC, _arrayValueW2pIcTI]
		const _longestArgumentTermLengthKi2qv3D = () => { return _returnValueOC7tqU0 };
		const _helperCRYHJr4 = {
			"longestOptionTermLength": _longestOptionTermLengthwLQK9s0,
		"longestSubcommandTermLength": _longestSubcommandTermLengthvkTToWO,
		"longestArgumentTermLength": _longestArgumentTermLengthKi2qv3D
	}
		const _returnValuejIfsMc = await _HelpGuWeen.padWidth(_cmdTMUZ8k4, _helperCRYHJr4)
		const _argumentduWDpL = "xo54zT0qaVVODgk8l5swCsxP7QuOEGcePxW3dq3rO8hGHlBfqkl";
		const _returnValuenMi1xax = await _HelpGuWeen.argumentDescription(_argumentduWDpL)
	});

	it('test for Help', async () => {
		const _Helpi7W15Ne = new Help()
		const _cmdhcXe5xy = "rKMyXkcSr4XFqqAPbdTKC5LI1KL6hrV4SOs";
		const _helperaLyQ4N0 = new Help()
		const _nameP2U9pn1 = undefined;
		const _cmdll3uIXo = new Command(_nameP2U9pn1)
		const _keyh5ng3dA = undefined;
		const _valuemnOJ7i8 = "cwSEcMPvnW9mJP9sn4gadpuUyZ2HRBn5AY4zq7sQNhqO5JJELsUhZhs70tbIAz7jj9oNUR40Fk7argq5D3e9NHVjY";
		const _sourceGtYekP = 9.955112362173981;
		const _returnValuedmiR9Nx = await _cmdll3uIXo.setOptionValueWithSource(_keyh5ng3dA, _valuemnOJ7i8, _sourceGtYekP)
		const _displaySuggestionDjHd5JX = true;
		const _returnValuex00jsH = await _cmdll3uIXo.showSuggestionAfterError(_displaySuggestionDjHd5JX)
		const _arrayValueER9Il8W = "PFZjEL7xmHx1EG0OnOSpArgDpCdu94KtTQdj2wBTFB5nu6eTeqVMjwNafIGVFpaS8R5k";
		const _receivedArgsr1IBhNb = [_arrayValueER9Il8W]
		const _returnValueuuwDxWj = await _cmdll3uIXo._excessArguments(_receivedArgsr1IBhNb)
		const _returnValuep8GbYWK = await _helperaLyQ4N0.visibleOptions(_cmdll3uIXo)
		const _arrayValueK3Xeq80 = -9.89207350148373;
		const _arrayValueCivg03u = null;
		const _nameZJ6mW86 = [_arrayValueK3Xeq80, _arrayValueCivg03u]
		const _cmdYzA7Lsv = new Command(_nameZJ6mW86)
		const _flagsSVIMGx = false;
		const _descriptionVkBdq6Q = null;
		const _returnValueXKQtNsY = await _cmdYzA7Lsv.helpOption(_flagsSVIMGx, _descriptionVkBdq6Q)
		const _nameRHbIgJk = {
		
	}
		const _returnValueaEVQ7ET = await _cmdYzA7Lsv._findCommand(_nameRHbIgJk)
		const _strzfUUzOV = undefined;
		const _returnValueRgw6gx = await _cmdYzA7Lsv.usage(_strzfUUzOV)
		const _returnValuezQ1Xh2f = await _helperaLyQ4N0.visibleOptions(_cmdYzA7Lsv)
		const _arrayValueQmOW3sm = -6.923867371658226;
		const _nameFldKvQr = [_arrayValueQmOW3sm]
		const _cmdEt4hhf = new Command(_nameFldKvQr)
		const _lengthVihaN1N = undefined;
		const _receivedArgsm6qSY8F = {
			"length": _lengthVihaN1N
	}
		const _returnValuegfc4st2 = await _cmdEt4hhf._excessArguments(_receivedArgsm6qSY8F)
		const _commandNameZNqor2s = true;
		const _returnValueVWR9Yol = []
		const _arrayValueUwmKIv = () => { return _returnValueVWR9Yol };
		const _arrayValueA3qeMP4 = true;
		const _operandsEwazZJ3 = [_arrayValueUwmKIv, _arrayValueA3qeMP4]
		const _unknownicX2vJ = false;
		const _returnValueqANTV2v = await _cmdEt4hhf._dispatchSubcommand(_commandNameZNqor2s, _operandsEwazZJ3, _unknownicX2vJ)
		const _strFuzHvz0 = {
		
	}
		const _returnValueULd0jom = await _cmdEt4hhf.name(_strFuzHvz0)
		const _returnValuexmXh3g2 = await _helperaLyQ4N0.commandDescription(_cmdEt4hhf)
		const _cmdnObtVx = 1.3548276212322925;
		const _helperbQhPVFD = []
		const _returnValuesTH6Pix = await _helperaLyQ4N0.longestSubcommandTermLength(_cmdnObtVx, _helperbQhPVFD)
		const _returnValueqAE5MNO = await _Helpi7W15Ne.longestArgumentTermLength(_cmdhcXe5xy, _helperaLyQ4N0)
		const _cmdIJzvWR8 = false;
		const _helperqPnSWs = new Help()
		const _descriptionkDWamUR = null;
		const _cmdGjHaDLf = {
			"description": _descriptionkDWamUR
	}
		const _returnValueN8KhDk = await _helperqPnSWs.subcommandDescription(_cmdGjHaDLf)
		const _namexHcezi = 2.224365656067473;
		const _cmdtpzSeYN = new Command(_namexHcezi)
		const _mandatoryVI9p4bf = -9.032111970705575;
		const _configJLRWlzu = {
			"mandatory": _mandatoryVI9p4bf
	}
		const _flagsjzHwQYw = undefined;
		const _description91LmRH = null;
		const _fnHk3sv28 = {
		
	}
		const _defaultValuedH4Jgjs = 4.181141877098664;
		const _returnValueFID0JKV = await _cmdtpzSeYN._optionEx(_configJLRWlzu, _flagsjzHwQYw, _description91LmRH, _fnHk3sv28, _defaultValuedH4Jgjs)
		const _keyECNkUAm = "CWYVNxLb4ZTAwYhzmsMEZPlOAfM4FsghbOb82SBrik3rTwHSGt0vjaLkPmxTk2LNbVJFWJ5EQaPhlH326Bel9lZkpl3XWY";
		const _returnValueLuNsPDQ = await _cmdtpzSeYN.getOptionValue(_keyECNkUAm)
		const _arrayValuedjnWWO4 = {
		
	}
		const _subcommandk5b2p8v = [_arrayValuedjnWWO4]
		const _argsl7YQhxp = undefined;
		const _returnValuecGG26j = await _cmdtpzSeYN._executeSubCommand(_subcommandk5b2p8v, _argsl7YQhxp)
		const __nameyHrMM8H = "yotc3zFEtY4XFl4IQIcHuxulU2dNKa1gJ9Ld9BD9cid8";
		const _commandsOURtH0o = null;
		const __hidden5Dsovd = false;
		const _parentohZPIra = {
		
	}
		const _cmdYSNa9vh = {
			"_name": __nameyHrMM8H,
		"commands": _commandsOURtH0o,
		"_hidden": __hidden5Dsovd,
		"parent": _parentohZPIra
	}
		const _arrayValueBF9n2F8 = "DmxdNLwq5p4TtXIaTXU9kOFow3ZVq8uVeWmOahNm7LrQ";
		const _arrayValuebyjn470 = -6.882386532523186;
		const _isDefaultQ42bxcN = [_arrayValueBF9n2F8, _arrayValuebyjn470]
		const _optsjBhAyni = {
			"isDefault": _isDefaultQ42bxcN
	}
		const _returnValueTMUvU9c = await _cmdtpzSeYN.addCommand(_cmdYSNa9vh, _optsjBhAyni)
		const _returnValuezQSJNo1 = await _helperqPnSWs.visibleOptions(_cmdtpzSeYN)
		const _returnValueTjaZ9A2 = await _Helpi7W15Ne.formatHelp(_cmdIJzvWR8, _helperqPnSWs)
		const _arrayValuec1AevC = "68vw5mA4FG7NVPh0g";
		const _arrayValuerjYxPxn = "uNOspIvBM2rVKzGnU1J761waPRrGJPYxrn6P5pgbKtWXXVkjxbWaNTfZcu7DhZVg2QSImrWg";
		const _arrayValueqy28EAJ = false;
		const _arrayValueHT34RI9 = null;
		const _optionZb57Zn = [_arrayValuec1AevC, _arrayValuerjYxPxn, _arrayValueqy28EAJ, _arrayValueHT34RI9]
		const _returnValueyl35Y9 = await _Helpi7W15Ne.optionTerm(_optionZb57Zn)
		const _cmdcMIXYef = "X";
		const _returnValueYRWiAg = await _Helpi7W15Ne.visibleCommands(_cmdcMIXYef)
	});

	it('test for Help', async () => {
		const _HelpahWolO0 = new Help()
		const _flagsoU6LquJ = "gkHQikJcH";
		const _descriptionTwthqRc = {
		
	}
		const _argumentOIhVRFg = new Option(_flagsoU6LquJ, _descriptionTwthqRc)
		const _returnValuenW279aC = await _argumentOIhVRFg.attributeName()
		const _valuehWfPkH = {
		
	}
		const _returnValueb59FRqX = 8.431806735593604;
		const _concatgHCfr4k = () => { return _returnValueb59FRqX };
		const _previouseP1XWZ = {
			"concat": _concatgHCfr4k
	}
		const _returnValueUVqLyOR = await _argumentOIhVRFg._concatValue(_valuehWfPkH, _previouseP1XWZ)
		const _returnValuedDghLfd = await _HelpahWolO0.argumentTerm(_argumentOIhVRFg)
		const _argChoicesTprrt8l = null;
		const _returnValueEPnoNGV = "Ad5P1RLDigxSgjE57kQAFNr0wJGqnEzzNe";
		const _defaultValueza5MaQJ = () => { return _returnValueEPnoNGV };
		const _arrayValueuaBw9k = undefined;
		const _arrayValue1PelyB = undefined;
		const _defaultValueDescriptionvM3nhhg = [_arrayValueuaBw9k, _arrayValue1PelyB]
		const _descriptionBIiX8kh = 7.839837282387723;
		const _argumentwdkbEHb = {
			"argChoices": _argChoicesTprrt8l,
		"defaultValue": _defaultValueza5MaQJ,
		"defaultValueDescription": _defaultValueDescriptionvM3nhhg,
		"description": _descriptionBIiX8kh
	}
		const _returnValueYTMqKBr = await _HelpahWolO0.argumentDescription(_argumentwdkbEHb)
		const _cmdyR5sBGJ = null;
		const _arrayValueuPq1LG = 7.919998050080764;
		const _arrayValuetMBYjGj = null;
		const _arrayValueZBpxGs4 = null;
		const _arrayValueRRdLacP = [_arrayValueuPq1LG, _arrayValuetMBYjGj, _arrayValueZBpxGs4]
		const _helpere9Sz9DM = [_arrayValueRRdLacP]
		const _returnValueS47KKJx = await _HelpahWolO0.formatHelp(_cmdyR5sBGJ, _helpere9Sz9DM)
		const _cmdeIWNzMU = "QBOzvFJzEEVW3CuRkVH6lOx3JkCGJDjR6BkI9PHWvBoYTn8Ek0ULrnbBqAeQHUfV6AAsBK6bsLxO4uNAtFAERqYM34huRTgyYr";
		const _returnValueMDMMCs = false;
		const _helperfc0Pz6 = () => { return _returnValueMDMMCs };
		const _returnValueyhiI0Z5 = await _HelpahWolO0.padWidth(_cmdeIWNzMU, _helperfc0Pz6)
		const _nameSAm9tvY = true;
		const _cmdv12ifsH = new Command(_nameSAm9tvY)
		const _positionh4wNy4L = undefined;
		const _arrayValueyxEftPY = {
		
	}
		const _returnValueZaPScj3 = [_arrayValueyxEftPY]
		const _returnValueFviAKB8 = () => { return _returnValueZaPScj3 };
		const _textCHeOfg0 = () => { return _returnValueFviAKB8 };
		const _returnValuefQGSL20 = await _cmdv12ifsH.addHelpText(_positionh4wNy4L, _textCHeOfg0)
		const _displaySuggestionMrz3K7R = false;
		const _returnValueGxo21K = await _cmdv12ifsH.showSuggestionAfterError(_displaySuggestionMrz3K7R)
		const _flagsy7dhptt = false;
		const _descriptionZhlzFgO = undefined;
		const _fnfjcxPJ9 = null;
		const _returnValueg2I7d7i = "hpxhj8pxcsyJjxClkiYBP1WTF16LcuUV6tftJ2HJTkKT6WxNAuqdRrNNBAyLg1kVU6VhzcuM1aG3nVqEBz";
		const _defaultValueuwcq0Fh = () => { return _returnValueg2I7d7i };
		const _returnValueft2CYbS = await _cmdv12ifsH.option(_flagsy7dhptt, _descriptionZhlzFgO, _fnfjcxPJ9, _defaultValueuwcq0Fh)
		const _returnValueyYg5iN = await _cmdv12ifsH.createHelp()
		const _arrayValueX1Lt6u = null;
		const _arrayValueqULRp4h = null;
		const _arrayValuesUZMMi4 = undefined;
		const _mandatorytRYX4xC = [_arrayValueX1Lt6u, _arrayValueqULRp4h, _arrayValuesUZMMi4]
		const _configjOcjE76 = {
			"mandatory": _mandatorytRYX4xC
	}
		const _flagsfOrOMZF = "0goeJ7eSTwaYHEJU1CzFBQgrwXSio3FEWRpNMPKFNP7Rt1hM4WpU";
		const _descriptionleiUbGm = false;
		const _fnEyikRjV = {
		
	}
		const _defaultValuepZdj0NW = false;
		const _returnValueDCX91Zi = await _cmdv12ifsH._optionEx(_configjOcjE76, _flagsfOrOMZF, _descriptionleiUbGm, _fnEyikRjV, _defaultValuepZdj0NW)
		const _returnValueoFmuJW4 = await _HelpahWolO0.commandDescription(_cmdv12ifsH)
	});

	it('test for Help', async () => {
		const _HelpOU0VpQh = new Help()
		const _namelPZGzt = {
		
	}
		const _cmdSAW2fde = new Command(_namelPZGzt)
		const _lengthcC2ja5f = null;
		const _receivedArgshqCgi6U = {
			"length": _lengthcC2ja5f
	}
		const _returnValueVQ2AhzS = await _cmdSAW2fde._excessArguments(_receivedArgshqCgi6U)
		const _arrayValuekvcn9br = 7.3548805425065105;
		const _argvI9xBBG = [_arrayValuekvcn9br]
		const _returnValue1D5gCV = await _cmdSAW2fde.parseOptions(_argvI9xBBG)
		const _contextOptionsPFAmb1 = null;
		const _returnValuePhUNe9 = await _cmdSAW2fde.helpInformation(_contextOptionsPFAmb1)
		const _nameAndArgsCPxeSy0 = "EaYRenQIK3fN8u53o7iDQxtNQVyFHtTzUuy3";
		const _actionOptsOrExecDescrx3UPy1 = null;
		const _execOptsXS5JHV7 = false;
		const _returnValuevYfhEZD = await _cmdSAW2fde.command(_nameAndArgsCPxeSy0, _actionOptsOrExecDescrx3UPy1, _execOptsXS5JHV7)
		const _subcommandX2R9VZ = undefined;
		const _argsPmCQtHY = []
		const _returnValueMqwhSn = await _cmdSAW2fde._executeSubCommand(_subcommandX2R9VZ, _argsPmCQtHY)
		const _returnValuemnisow7 = await _HelpOU0VpQh.visibleCommands(_cmdSAW2fde)
		const _namejipqOIL = null;
		const _cmdS21jZfa = new Command(_namejipqOIL)
		const _returnValuesdKpPJq = await _cmdS21jZfa._checkNumberOfArguments()
		const _returnValueiyRXQOi = await _HelpOU0VpQh.subcommandDescription(_cmdS21jZfa)
		const _cmdXnu4pTp = "aFa06ts92IXCWBhlz71Yjf8xujdZyCG4tjEyk99SRxEV1obEWbQTpfxWCPAPrIESBHrkEcDxyMqYq9LmBy1Qv";
		const _returnValuey11rz3 = 1.3959744879911185;
		const _helperI4N3TwS = () => { return _returnValuey11rz3 };
		const _returnValueJe4WFTd = await _HelpOU0VpQh.formatHelp(_cmdXnu4pTp, _helperI4N3TwS)
		const _cmdrBmM9DL = true;
		const _returnValuePow60tI = true;
		const _longestOptionTermLengthk8Vvb9x = () => { return _returnValuePow60tI };
		const _returnValueq4mMQdR = null;
		const _longestSubcommandTermLengthBW0dgtN = () => { return _returnValueq4mMQdR };
		const _returnValuepXGe2pA = 7.077273052801644;
		const _longestArgumentTermLengthJt2wMw1 = () => { return _returnValuepXGe2pA };
		const _helpermLaaerU = {
			"longestOptionTermLength": _longestOptionTermLengthk8Vvb9x,
		"longestSubcommandTermLength": _longestSubcommandTermLengthBW0dgtN,
		"longestArgumentTermLength": _longestArgumentTermLengthJt2wMw1
	}
		const _returnValueRCEPE37 = await _HelpOU0VpQh.padWidth(_cmdrBmM9DL, _helpermLaaerU)
	});
})