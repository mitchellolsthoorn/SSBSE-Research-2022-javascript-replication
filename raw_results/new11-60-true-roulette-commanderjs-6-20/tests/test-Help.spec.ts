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
		const _HelpmZPR64x = new Help()
		const _cmdqBhdA2q = "72S5Cw9xLqiNof1GvIrvbjyIZVlM7x8z5gK061hFC85jcV7IomCQhEt3gUsopcyNSP9rYY2ttLTILl7K2yp7KPw3yiN52BSZ0v";
		const _arrayValuellaa1B0 = undefined;
		const _returnValueQ2rD2eE = [_arrayValuellaa1B0]
		const _helperGh2aN9 = () => { return _returnValueQ2rD2eE };
		const _returnValueiE0lXHZ = await _HelpmZPR64x.longestOptionTermLength(_cmdqBhdA2q, _helperGh2aN9)
		const _cmdQAifwvZ = "XGhZlV7Un5KSsB2HctJVlO7jYxZzkXD";
		const _helpergxoL9rP = "igI13SiKxdJQZBgaacspp8Pt9UgsdUkueMzsVBU8dzee7SNa4MwHd12a338iDAqd77tMTLlnM2w";
		const _returnValueJiMeo8a = await _HelpmZPR64x.formatHelp(_cmdQAifwvZ, _helpergxoL9rP)
		const _returnValueq9sneo8 = "NKPBCg";
		const _returnValueF11DMai = () => { return _returnValueq9sneo8 };
		const _matchm9fd9sI = () => { return _returnValueF11DMai };
		const _returnValueiQQPJZR = null;
		const _substrZROh9hF = () => { return _returnValueiQQPJZR };
		const _stru5kzIiE = {
			"match": _matchm9fd9sI,
		"substr": _substrZROh9hF
	}
		const _widthV1UJtWP = 8.378732571216474;
		const _indentRZcxcFj = 6.791552669942469;
		const _minColumnWidthyRtq4D = 7.710672379546445;
		const _returnValuexTOzJmO = await _HelpmZPR64x.wrap(_stru5kzIiE, _widthV1UJtWP, _indentRZcxcFj, _minColumnWidthyRtq4D)
		const _cmdmXFuUdV = null;
		const _returnValuedpQTWjB = "iplpEIlnEkL3qXlaRY8Qb8";
		const _helperpjxDGaG = () => { return _returnValuedpQTWjB };
		const _returnValuemKbJc8X = await _HelpmZPR64x.longestArgumentTermLength(_cmdmXFuUdV, _helperpjxDGaG)
	});

	it('test for Help', async () => {
		const _Helpy5auSLG = new Help()
		const _argChoicesP0YmyTw = {
		
	}
		const _defaultValueA1E9gYM = undefined;
		const _defaultValueDescriptionX1om5yn = 0.30676098131009866;
		const _descriptionATAZGNc = "Tzlgde25wGOSqNtt";
		const _argumentmUPFMlY = {
			"argChoices": _argChoicesP0YmyTw,
		"defaultValue": _defaultValueA1E9gYM,
		"defaultValueDescription": _defaultValueDescriptionX1om5yn,
		"description": _descriptionATAZGNc
	}
		const _returnValueSxIq2jz = await _Helpy5auSLG.argumentDescription(_argumentmUPFMlY)
		const _cmdewmFmjH = null;
		const _sortSubcommandsYyc5N7W = "X6WN2Blak88Ppn4eWUyehw";
		const _returnValuegu6l1nA = -5.329572140437568;
		const _subcommandTermEFMsBT9 = () => { return _returnValuegu6l1nA };
		const _helperDoEpjQU = {
			"sortSubcommands": _sortSubcommandsYyc5N7W,
		"subcommandTerm": _subcommandTermEFMsBT9
	}
		const _returnValuebUJR1MW = await _Helpy5auSLG.longestSubcommandTermLength(_cmdewmFmjH, _helperDoEpjQU)
	});

	it('test for Help', async () => {
		const _HelpEKjIIlE = new Help()
		const _returnValuelObbWEN = 8.414903091249613;
		const _cmdxp03n2u = () => { return _returnValuelObbWEN };
		const _returnValuenhM2mH8 = await _HelpEKjIIlE.commandUsage(_cmdxp03n2u)
		const _cmdGI4boK9 = true;
		const _returnValueCuNNJiZ = "vGY";
		const _sortSubcommandsk3VYYaE = () => { return _returnValueCuNNJiZ };
		const _returnValuex54TwMm = false;
		const _subcommandTermz11Gm47 = () => { return _returnValuex54TwMm };
		const _helpera5zYO7 = {
			"sortSubcommands": _sortSubcommandsk3VYYaE,
		"subcommandTerm": _subcommandTermz11Gm47
	}
		const _returnValueKdkRwEo = await _HelpEKjIIlE.formatHelp(_cmdGI4boK9, _helpera5zYO7)
		const _arrayValueRoYpwI = null;
		const _arrayValueBCUjaLN = true;
		const _cmdMPAKKiu = [_arrayValueRoYpwI, _arrayValueBCUjaLN]
		const _returnValuenAsb7k2 = await _HelpEKjIIlE.visibleOptions(_cmdMPAKKiu)
		const _arrayValuetE3rdg = {
		
	}
		const _cmdJC5nyEa = [_arrayValuetE3rdg]
		const _returnValuexsEja8m = await _HelpEKjIIlE.subcommandDescription(_cmdJC5nyEa)
	});

	it('test for Help', async () => {
		const _HelpEzveOW = new Help()
		const _cmdq61rKn6 = "vrbzbLuymL3uFTkXsPMjgeov";
		const _returnValuexQY4jMn = await _HelpEzveOW.visibleArguments(_cmdq61rKn6)
		const _arrayValueAL6TgOh = "MxzCsAPw4Gu6wudXWI51rR4eUzfVrhqKQQNKcljS5mvEd8SmsULHWrQ4VmH";
		const _arrayValueXWTRKN = 0.5826285817024335;
		const _returnValuedTqTn3N = undefined;
		const _arrayValueV0bOBb = () => { return _returnValuedTqTn3N };
		const _returnValueJNwDqld = [_arrayValueV0bOBb]
		const _arrayValued5sh2rK = () => { return _returnValueJNwDqld };
		const _returnValueFNYFIQE = [_arrayValueAL6TgOh, _arrayValueXWTRKN, _arrayValued5sh2rK]
		const _nameBD0aLk = () => { return _returnValueFNYFIQE };
		const _argumentCzPN4oU = {
			"name": _nameBD0aLk
	}
		const _returnValueimWu4Pf = await _HelpEzveOW.argumentTerm(_argumentCzPN4oU)
	});

	it('test for Help', async () => {
		const _HelplA8hdzm = new Help()
		const _returnValueZJlN9z9 = -7.573168403474324;
		const _matchvJIOcu = () => { return _returnValueZJlN9z9 };
		const _returnValueJsmgHcT = 7.413754819015335;
		const _substrW4Rky5W = () => { return _returnValueJsmgHcT };
		const _strKOASxvF = {
			"match": _matchvJIOcu,
		"substr": _substrW4Rky5W
	}
		const _widthmSjQpEz = -9.237180282234098;
		const _indentDwYHfhe = -3.870476254183121;
		const _minColumnWidthaegqPx = 2.712950838180724;
		const _returnValueEfqhf1 = await _HelplA8hdzm.wrap(_strKOASxvF, _widthmSjQpEz, _indentDwYHfhe, _minColumnWidthaegqPx)
		const _returnValuegbnlQyG = null;
		const _cmdeFdlbda = () => { return _returnValuegbnlQyG };
		const _returnValueWvBgXDM = await _HelplA8hdzm.commandDescription(_cmdeFdlbda)
	});

	it('test for Help', async () => {
		const _HelprP9kMaH = new Help()
		const _returnValueSKEhnah = 6.355362129944897;
		const _cmdMxDdZ9p = () => { return _returnValueSKEhnah };
		const _sortSubcommandsnAwHh1G = "FMQoElYKbsuFnt9Ynpb3fokJMCxFR6oAnNDyc5xFTOMXDVmcaLKuMqcfas7";
		const _returnValueCGaKI9 = undefined;
		const _subcommandTermjaLu2x9 = () => { return _returnValueCGaKI9 };
		const _helpereaVLDu = {
			"sortSubcommands": _sortSubcommandsnAwHh1G,
		"subcommandTerm": _subcommandTermjaLu2x9
	}
		const _returnValuevZhm8YN = await _HelprP9kMaH.longestSubcommandTermLength(_cmdMxDdZ9p, _helpereaVLDu)
		const _arrayValueDMTO88U = -9.796055592223107;
		const _arrayValueQCt4bGa = "4YdohOG7E9lwLJ3K8O3iOgzMgOzH446snXWfFs";
		const _cmdHwese13 = [_arrayValueDMTO88U, _arrayValueQCt4bGa]
		const _returnValuevfMD4g = await _HelprP9kMaH.visibleArguments(_cmdHwese13)
		const _arrayValuezI5rGKY = {
		
	}
		const _optionPhaxM7i = [_arrayValuezI5rGKY]
		const _returnValuee3XCz5j = await _HelprP9kMaH.optionDescription(_optionPhaxM7i)
		const _cmdpwb6q1M = 8.261952167569987;
		const _returnValuew7dDERi = false;
		const _longestOptionTermLengtheH5Ys2g = () => { return _returnValuew7dDERi };
		const _returnValue9YEU3z = null;
		const _longestSubcommandTermLengthOgNTRWQ = () => { return _returnValue9YEU3z };
		const _arrayValueDoeU7p2 = null;
		const _returnValueYDLfa1T = {
		
	}
		const _arrayValueUe7UEZ6 = () => { return _returnValueYDLfa1T };
		const _arrayValuewvvhYTV = null;
		const _returnValueI1JJnBi = [_arrayValueDoeU7p2, _arrayValueUe7UEZ6, _arrayValuewvvhYTV]
		const _returnValuedlEbzLV = () => { return _returnValueI1JJnBi };
		const _longestArgumentTermLengthaDabbXN = () => { return _returnValuedlEbzLV };
		const _helperWP4UD6 = {
			"longestOptionTermLength": _longestOptionTermLengtheH5Ys2g,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOgNTRWQ,
		"longestArgumentTermLength": _longestArgumentTermLengthaDabbXN
	}
		const _returnValue6pDFuq = await _HelprP9kMaH.padWidth(_cmdpwb6q1M, _helperWP4UD6)
	});

	it('test for Help', async () => {
		const _HelpVmaocNm = new Help()
		const _arrayValueJMfzX0W = -6.7699228113729095;
		const _arrayValueghrEoEZ = [_arrayValueJMfzX0W]
		const _arrayValuexOH7525 = undefined;
		const _arrayValuezh68qNu = [_arrayValuexOH7525]
		const _nameHWXieE = [_arrayValueghrEoEZ, _arrayValuezh68qNu]
		const _descriptionmZ10bv8 = null;
		const _optionZemNHCl = new Argument(_nameHWXieE, _descriptionmZ10bv8)
		const _valuegA5fLQ = undefined;
		const _descriptionWGo7hQ6 = undefined;
		const _returnValueeawdWn = await _optionZemNHCl.default(_valuegA5fLQ, _descriptionWGo7hQ6)
		const _valueocU8ijh = "j3jF4iyHRKi";
		const _returnValuevb4maA = {
		
	}
		const _concatqKbKxru = () => { return _returnValuevb4maA };
		const _previousiE1UaW = {
			"concat": _concatqKbKxru
	}
		const _returnValueMVNg78K = await _optionZemNHCl._concatValue(_valueocU8ijh, _previousiE1UaW)
		const _returnValueGh71YH1 = await _HelpVmaocNm.optionDescription(_optionZemNHCl)
		const _cmdCmPC6PU = false;
		const _returnValueZP0u0YZ = true;
		const _longestOptionTermLengthJmkP2UH = () => { return _returnValueZP0u0YZ };
		const _returnValueWElLiwD = true;
		const _longestSubcommandTermLengthKg2IEuE = () => { return _returnValueWElLiwD };
		const _longestArgumentTermLengthGfvIHNW = null;
		const _helperKxfzWCs = {
			"longestOptionTermLength": _longestOptionTermLengthJmkP2UH,
		"longestSubcommandTermLength": _longestSubcommandTermLengthKg2IEuE,
		"longestArgumentTermLength": _longestArgumentTermLengthGfvIHNW
	}
		const _returnValueoauYrwQ = await _HelpVmaocNm.padWidth(_cmdCmPC6PU, _helperKxfzWCs)
		const _cmdGYNVrTO = false;
		const _returnValueAnoaBZK = await _HelpVmaocNm.commandDescription(_cmdGYNVrTO)
	});

	it('test for Help', async () => {
		const _HelpbvtYQH3 = new Help()
		const _optiondu4v4p1 = "LFEDgkwAkeLuH1XzN7NX1wQ4r6T5oal4a4u3";
		const _returnValuehXdyzKE = await _HelpbvtYQH3.optionTerm(_optiondu4v4p1)
		const _returnValuemNyw9w1 = {
		
	}
		const _includeslMGEKQ = () => { return _returnValuemNyw9w1 };
		const _flagsq4y2dcf = {
			"includes": _includeslMGEKQ
	}
		const _arrayValueT9Srw66 = -6.0357675711685115;
		const _arrayValueda1bUqJ = {
		
	}
		const _arrayValueOpz5PZz = []
		const _descriptionkKPR6t1 = [_arrayValueT9Srw66, _arrayValueda1bUqJ, _arrayValueOpz5PZz]
		const _cmdk0LCZm = new Option(_flagsq4y2dcf, _descriptionkKPR6t1)
		const _nameGMLAYl = undefined;
		const _returnValuen5gqdhU = await _cmdk0LCZm.env(_nameGMLAYl)
		const _mandatorykxPzxib = true;
		const _returnValueeMDUixF = await _cmdk0LCZm.makeOptionMandatory(_mandatorykxPzxib)
		const _mandatorybB6pW2T = true;
		const _returnValuemt1M7As = await _cmdk0LCZm.makeOptionMandatory(_mandatorybB6pW2T)
		const _returnValuesO1CiCF = await _cmdk0LCZm.name()
		const _fnew1LOhV = {
		
	}
		const _returnValueQ0XgEDy = await _cmdk0LCZm.argParser(_fnew1LOhV)
		const _returnValueg75uMBQ = await _HelpbvtYQH3.subcommandDescription(_cmdk0LCZm)
		const _returnValueShFhwaf = null;
		const _cmdpZmhap = () => { return _returnValueShFhwaf };
		const _returnValuesgXReMY = await _HelpbvtYQH3.visibleOptions(_cmdpZmhap)
		const _cmdqwBJhkB = null;
		const _helperP9URiTe = "dc8ZTiRiJiqsLILydMHFii1aO1trBDxrzHynLqkaVYMtqOBtEbUGL";
		const _returnValueLJe0dM0 = await _HelpbvtYQH3.longestOptionTermLength(_cmdqwBJhkB, _helperP9URiTe)
		const _namekDfNSX6 = undefined;
		const _cmdtOF036p = new Command(_namekDfNSX6)
		const _argvlrUCAHH = true;
		const _parseOptionsBKQN13H = 5.588160335927313;
		const _returnValueTbq4RBh = await _cmdtOF036p.parse(_argvlrUCAHH, _parseOptionsBKQN13H)
		const _returnValuePP100FE = "7NGZV9IstyBEU6p9YURakyeacPF4r0D0HKifDHpsm2j7XYE4qCdr95L9XzrwfpUqmIw8B8DzAVxtj6P";
		const _arrayValuePn0mCxi = () => { return _returnValuePP100FE };
		const _arrayValueqSXbxd = true;
		const _arrayValueLlxCMcE = undefined;
		const _arrayValueVH3IUqT = [_arrayValuePn0mCxi, _arrayValueqSXbxd, _arrayValueLlxCMcE]
		const _arrayValueDoxgWG7 = 3.272197299690804;
		const _arrayValueEnjWPVK = -2.730011875800427;
		const _arrayValueIKcfbHP = true;
		const _keyhRli5OP = [_arrayValueVH3IUqT, _arrayValueDoxgWG7, _arrayValueEnjWPVK, _arrayValueIKcfbHP]
		const _valueIrNHOGj = "HuDhFtuqbnFnoex";
		const _returnValuee3etCyf = await _cmdtOF036p.setOptionValue(_keyhRli5OP, _valueIrNHOGj)
		const _returnValuekOlv4uv = await _HelpbvtYQH3.commandDescription(_cmdtOF036p)
	});

	it('test for Help', async () => {
		const _HelpLc2IIRi = new Help()
		const _arrayValuejuH0c98 = null;
		const _arrayValueFz8K5PR = undefined;
		const _argChoicesJEQtaaY = [_arrayValuejuH0c98, _arrayValueFz8K5PR]
		const _negatezBieQAF = null;
		const _defaultValueHaWEXMp = undefined;
		const _defaultValueDescriptionw2aepNm = {
		
	}
		const _envVarvPRMki = undefined;
		const _descriptionm1Uaebh = null;
		const _optionXAauIlQ = {
			"argChoices": _argChoicesJEQtaaY,
		"negate": _negatezBieQAF,
		"defaultValue": _defaultValueHaWEXMp,
		"defaultValueDescription": _defaultValueDescriptionw2aepNm,
		"envVar": _envVarvPRMki,
		"description": _descriptionm1Uaebh
	}
		const _returnValueIsBag1p = await _HelpLc2IIRi.optionDescription(_optionXAauIlQ)
		const _namegaNbyF = 9.283941150596192;
		const _cmdrsvZs5K = new Command(_namegaNbyF)
		const _flagsxMNgiQ = "prlrTzoW9baffGmTnOQkrP7mu59SvLn7qZnXkxar4zOL2AhkrFbiLH29zmVL230R1wst9i";
		const _descriptionnVKou77 = "kqNrdgGD9FNDm8SO71hVjDdcl8gK0cS6E4sYBLLF7gKIW5tS354zmkXxmEGbBR6dpRmCI7";
		const _arrayValuekrMdMQQ = null;
		const _arrayValuedi5CYed = false;
		const _arrayValuedGEmN2p = false;
		const _arrayValueHVMq6jY = true;
		const _fnMr1OScI = [_arrayValuekrMdMQQ, _arrayValuedi5CYed, _arrayValuedGEmN2p, _arrayValueHVMq6jY]
		const _defaultValueY4cL8T0 = undefined;
		const _returnValueSl1in0 = await _cmdrsvZs5K.requiredOption(_flagsxMNgiQ, _descriptionnVKou77, _fnMr1OScI, _defaultValueY4cL8T0)
		const _returnValuesyV1pxo = undefined;
		const _contextOptionsWsc2IJt = () => { return _returnValuesyV1pxo };
		const _returnValuejVENMtx = await _cmdrsvZs5K.outputHelp(_contextOptionsWsc2IJt)
		const _strOqkSUn8 = undefined;
		const _argsDescriptionw8MCltD = undefined;
		const _returnValueffLEsYE = await _cmdrsvZs5K.description(_strOqkSUn8, _argsDescriptionw8MCltD)
		const _positionaloC186wh = true;
		const _returnValueVrcfTaM = await _cmdrsvZs5K.enablePositionalOptions(_positionaloC186wh)
		const _returnValueXXV8n5H = await _HelpLc2IIRi.commandUsage(_cmdrsvZs5K)
		const _returnValuevWSs5hR = 3.055433395786057;
		const _argumentbld6bkG = () => { return _returnValuevWSs5hR };
		const _returnValueEMFULzN = await _HelpLc2IIRi.argumentDescription(_argumentbld6bkG)
		const _argumentfAr5Mo = "FiANQgZwlBWtSL8azU2xBmeKlUvCPhddCBpBTHt62jrrbHnbhBtrmh";
		const _returnValueYgjISYQ = await _HelpLc2IIRi.argumentDescription(_argumentfAr5Mo)
	});

	it('test for Help', async () => {
		const _HelpQtNtNHv = new Help()
		const _commandsZUrkYpu = {
		
	}
		const __hasImplicitHelpCommandOBBVEI = false;
		const __helpCommandnameAndArgsyqoGJfs = {
		
	}
		const _createCommandHVEzccN = {
		
	}
		const __helpCommandDescriptionTcS9i6L = null;
		const _cmdmEWRhZW = {
			"commands": _commandsZUrkYpu,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandOBBVEI,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsyqoGJfs,
		"createCommand": _createCommandHVEzccN,
		"_helpCommandDescription": __helpCommandDescriptionTcS9i6L
	}
		const _returnValuefjbFHfQ = await _HelpQtNtNHv.visibleCommands(_cmdmEWRhZW)
	});

	it('test for Help', async () => {
		const _HelpRvPOur = new Help()
		const _cmdm5UA7sS = {
		
	}
		const _returnValueCoZxcwn = null;
		const _helpervPtICzK = () => { return _returnValueCoZxcwn };
		const _returnValueg8tK0GT = await _HelpRvPOur.longestArgumentTermLength(_cmdm5UA7sS, _helpervPtICzK)
		const _cmdavdQ6sM = -8.319912272123446;
		const _helperngaPc4j = new Help()
		const _nameGVWVtNO = undefined;
		const _cmdAmuPnkL = new Command(_nameGVWVtNO)
		const _returnValuepdttz4h = "HCEAhT7dGsCinb1yj9WtY9zDuCMfYpDmLkKFhNuGHx2fEDEXwekksuRBifQEJsN63ayItGVXggkaiHSjf4gNEd";
		const _forEachn8wqV0P = () => { return _returnValuepdttz4h };
		const _aliasespuc1IYw = {
			"forEach": _forEachn8wqV0P
	}
		const _returnValueTtf4tsD = await _cmdAmuPnkL.aliases(_aliasespuc1IYw)
		const _strhKPutH2 = undefined;
		const _returnValuevGGdEdM = await _cmdAmuPnkL.name(_strhKPutH2)
		const _returnValuejcFhn7 = await _cmdAmuPnkL._checkForMissingMandatoryOptions()
		const _returnValueMvbt5Ey = await _cmdAmuPnkL._parseOptionsEnv()
		const _combinehZTFaZ8 = false;
		const _returnValueWh9gppE = await _cmdAmuPnkL.combineFlagAndOptionalValue(_combinehZTFaZ8)
		const _returnValuevBBcYld = await _helperngaPc4j.commandDescription(_cmdAmuPnkL)
		const _cmdkDpwHVI = "kHz2sfDbVrDY7kgyvyOWR58r3mbynuka5kS";
		const _returnValueh49vAIr = await _helperngaPc4j.subcommandTerm(_cmdkDpwHVI)
		const _nameFo4eQQx = -3.2463319565521074;
		const _cmdTmrnBgl = new Command(_nameFo4eQQx)
		const _returnValuePBf0228 = await _cmdTmrnBgl._processArguments()
		const _arrayValuel3Rfl75 = undefined;
		const _arrayValueUgo0R1g = "g4JS3B6clPn8BzsmTrJY3omoHQw9ea4k2oGXbIc7LInYLww7EQXNPM6TFEhA9QcfyJUkyCoAfmMV8CswZACUFh";
		const _arrayValueA6fcWOe = false;
		const _arrayValueeqFrGks = [_arrayValueUgo0R1g, _arrayValueA6fcWOe]
		const _arrayValuer2ywh7L = undefined;
		const _arrayValueHLtHnP3 = null;
		const _arrayValuezyReosf = [_arrayValuel3Rfl75, _arrayValueeqFrGks, _arrayValuer2ywh7L, _arrayValueHLtHnP3]
		const _contextOptionsaYMJ3Um = [_arrayValuezyReosf]
		const _returnValueFQeIYC5 = await _cmdTmrnBgl.helpInformation(_contextOptionsaYMJ3Um)
		const _returnValueDYKCAp9 = await _cmdTmrnBgl.unknownCommand()
		const _returnValuex5HzYRG = await _helperngaPc4j.subcommandTerm(_cmdTmrnBgl)
		const _cmdXFJj5n = "NlEBfL0OK6XqYPjoL9whV0x2ElnDUV4hyV31LDmgvgzjAuaR3";
		const _returnValueImPHkB3 = await _helperngaPc4j.visibleOptions(_cmdXFJj5n)
		const _arrayValueCGHdAoy = false;
		const _nameYMKmK2q = [_arrayValueCGHdAoy]
		const _cmdaZ11NhV = new Command(_nameYMKmK2q)
		const _nameomUua2 = undefined;
		const _arrayValueaPBsKs1 = -3.4660686749525746;
		const _arrayValuecif2Mzb = undefined;
		const _arrayValueZNQ3D3j = true;
		const _descriptionH0rVeNt = [_arrayValueaPBsKs1, _arrayValuecif2Mzb, _arrayValueZNQ3D3j]
		const _fnbBuDeN0 = "XPlD";
		const _defaultValueoUDTvb = -6.568909081302707;
		const _returnValuevcYUdm = await _cmdaZ11NhV.argument(_nameomUua2, _descriptionH0rVeNt, _fnbBuDeN0, _defaultValueoUDTvb)
		const _returnValuehwfsVyv = false;
		const _fnlHd7bom = () => { return _returnValuehwfsVyv };
		const _returnValueTTzohfX = await _cmdaZ11NhV.action(_fnlHd7bom)
		const _returnValuezEMDHum = null;
		const _fngAp0CP2 = () => { return _returnValuezEMDHum };
		const _returnValue89FCVf = await _cmdaZ11NhV.action(_fngAp0CP2)
		const _returnValuehZoLYY = await _cmdaZ11NhV.opts()
		const _returnValuepwwPF5L = await _helperngaPc4j.visibleOptions(_cmdaZ11NhV)
		const _returnValueHwyfbZw = await _HelpRvPOur.longestArgumentTermLength(_cmdavdQ6sM, _helperngaPc4j)
		const _cmdzYb1vZk = null;
		const _helperJgWkGIK = "jphu2lQCL8zArbNhZNGIZ8hx8pzKA84XiMAhQhSwYqPjN1bptVWx6oz7uvjUE0bfkVgBudnabvBw";
		const _returnValueff3XEjq = await _HelpRvPOur.padWidth(_cmdzYb1vZk, _helperJgWkGIK)
		const __argsqmZfzVi = {
		
	}
		const __namehemZLq0 = -3.1482526195187797;
		const __aliasestDIt6zp = {
		
	}
		const _optionsaSKbKGH = {
		
	}
		const _cmdu34ZOU = {
			"_args": __argsqmZfzVi,
		"_name": __namehemZLq0,
		"_aliases": __aliasestDIt6zp,
		"options": _optionsaSKbKGH
	}
		const _returnValueEZTKXAh = await _HelpRvPOur.subcommandTerm(_cmdu34ZOU)
	});

	it('test for Help', async () => {
		const _HelpmOMS8gK = new Help()
		const _returnValuelzoLUFy = "iroWNH7Hl1jDsnpMO9vXI79EpxGwATeXfTQ9adPC5JB9rN";
		const _nameaCAaHs8 = () => { return _returnValuelzoLUFy };
		const _argumentxpSWjba = {
			"name": _nameaCAaHs8
	}
		const _returnValuewujUkmr = await _HelpmOMS8gK.argumentTerm(_argumentxpSWjba)
	});

	it('test for Help', async () => {
		const _HelpkA9ukNL = new Help()
		const _arrayValueQDTtcYD = undefined;
		const _arrayValue7Wp2QU = undefined;
		const _argumentzRN5GsP = [_arrayValueQDTtcYD, _arrayValue7Wp2QU]
		const _returnValuekVxqMOv = await _HelpkA9ukNL.argumentDescription(_argumentzRN5GsP)
	});

	it('test for Help', async () => {
		const _HelpPUjtjy = new Help()
		const _returnValueQGOxiiy = "5vYpLhxo64EErHnPUpPzufvvyy8sGeWXKHacSrm9zbK1og";
		const _descriptionl2SZJ7J = () => { return _returnValueQGOxiiy };
		const _cmdZj9Facl = {
			"description": _descriptionl2SZJ7J
	}
		const _returnValuerRuonuE = await _HelpPUjtjy.subcommandDescription(_cmdZj9Facl)
		const _cmdjRzn1CF = undefined;
		const _arrayValuefkPYY3d = undefined;
		const _helperABvpHhW = [_arrayValuefkPYY3d]
		const _returnValueKVB3mIH = await _HelpPUjtjy.longestArgumentTermLength(_cmdjRzn1CF, _helperABvpHhW)
		const _cmdyibFgs = null;
		const _helperimvCTO = "fFlBBcWIZi2OSzQ685nRfXSQpsISW5A7UtigzPkjcIn6zHWi73r2JhYN2pW0XF";
		const _returnValueP0OIMMX = await _HelpPUjtjy.padWidth(_cmdyibFgs, _helperimvCTO)
		const _optionVjEC4nN = "XEaDKVADWkfJRq52Tg2BfnZbeN8JQS13JDB1a6Mrvf1PIftrmlh2AIaz";
		const _returnValueEXu0sE = await _HelpPUjtjy.optionTerm(_optionVjEC4nN)
	});

	it('test for Help', async () => {
		const _HelpFyLxfBX = new Help()
		const _arrayValueNbcejmR = undefined;
		const _arrayValueiSprg7x = false;
		const _arrayValuelbQp3J = false;
		const _arrayValueJncrmZz = 5.927225477114494;
		const _arrayValueJKNRMsE = [_arrayValueiSprg7x, _arrayValuelbQp3J, _arrayValueJncrmZz]
		const _arrayValueLohTUMz = null;
		const _arrayValuem8PU79S = 1.776586592426586;
		const _arrayValue8aCOqt = -0.6018547530912794;
		const _arrayValuePBMOpsG = [_arrayValueLohTUMz, _arrayValuem8PU79S, _arrayValue8aCOqt]
		const _arrayValuehpDSmEb = {
		
	}
		const _cmdNodPQeQ = [_arrayValueNbcejmR, _arrayValueJKNRMsE, _arrayValuePBMOpsG, _arrayValuehpDSmEb]
		const _returnValuedrjzsgS = await _HelpFyLxfBX.subcommandTerm(_cmdNodPQeQ)
		const _cmdspGmsUX = "Hg2yL9zACM4695Tkh5WMXxD0jNbaYVvSBJDCH";
		const _helperjB7hTRr = true;
		const _returnValueiRKvLb9 = await _HelpFyLxfBX.formatHelp(_cmdspGmsUX, _helperjB7hTRr)
	});

	it('test for Help', async () => {
		const _HelpKowg8A = new Help()
		const _cmdHyJJMLG = "LpYrJDN4wywXCotTRXpVphwSXPE";
		const _returnValuecTrR74U = await _HelpKowg8A.visibleOptions(_cmdHyJJMLG)
		const _nameO7SSZb = -4.2152210606471465;
		const _cmdu5CeJi6 = new Command(_nameO7SSZb)
		const _displayHelpxgZfxfG = {
		
	}
		const _returnValuesuAUGbd = await _cmdu5CeJi6.showHelpAfterError(_displayHelpxgZfxfG)
		const _returnValuezqIxaMS = false;
		const _optionI8boqtI = () => { return _returnValuezqIxaMS };
		const _returnValuezTmJAsT = await _cmdu5CeJi6.addOption(_optionI8boqtI)
		const _returnValueL0Ie0gX = await _HelpKowg8A.subcommandTerm(_cmdu5CeJi6)
		const _returnValueRtMjm5k = []
		const _arrayValueXScnDfo = () => { return _returnValueRtMjm5k };
		const _arrayValuejwz4B6 = null;
		const _flagssChafxx = [_arrayValueXScnDfo, _arrayValuejwz4B6]
		const _descriptionWZGbcuz = true;
		const _cmdciC492B = new Option(_flagssChafxx, _descriptionWZGbcuz)
		const _returnValuee4GIrQe = await _cmdciC492B.name()
		const _hideSiSgyJV = false;
		const _returnValuek5JCBUr = await _cmdciC492B.hideHelp(_hideSiSgyJV)
		const _nametkuJiOe = undefined;
		const _returnValuekpVAwjY = await _cmdciC492B.env(_nametkuJiOe)
		const _valuesnSbrTiG = "uLwPUKaIHnz";
		const _returnValueWlmTWIL = await _cmdciC492B.choices(_valuesnSbrTiG)
		const _nameZVu2ITJ = null;
		const _returnValueM3Fbxsp = await _cmdciC492B.env(_nameZVu2ITJ)
		const _returnValueAqztKa = await _HelpKowg8A.subcommandDescription(_cmdciC492B)
	});

	it('test for Help', async () => {
		const _HelpIirpK2q = new Help()
		const _flagspXRw55o = "PX4QI1b0hzoMvnDsJTz7I8fPcGIFc7xyE";
		const _descriptionaWzWx4c = null;
		const _optionFTwfaGy = new Option(_flagspXRw55o, _descriptionaWzWx4c)
		const _nameRhPgsKP = undefined;
		const _returnValuezUXPfoO = await _optionFTwfaGy.env(_nameRhPgsKP)
		const _returnValueujGaJC = {
		
	}
		const _nameZkUjlnV = () => { return _returnValueujGaJC };
		const _returnValuelSiGXgD = await _optionFTwfaGy.env(_nameZkUjlnV)
		const _valuejS3y3zi = "ACYFb2OP13UGDEDh81jhMnRoEpqiamZ45GYyorsuegBg5rBxDzfNR8iv6H3L";
		const _returnValue8FbbZw = "xa56IqmogOkozQikCkjgNqNXryerWMOII";
		const _previousd0OSE57 = () => { return _returnValue8FbbZw };
		const _returnValuee0v3Gw6 = await _optionFTwfaGy._concatValue(_valuejS3y3zi, _previousd0OSE57)
		const _mandatoryXmE2orv = true;
		const _returnValueHriOcfs = await _optionFTwfaGy.makeOptionMandatory(_mandatoryXmE2orv)
		const _returnValuenmebtNq = await _optionFTwfaGy.name()
		const _returnValuemAByt3l = await _HelpIirpK2q.optionDescription(_optionFTwfaGy)
		const _arrayValueh9sjWa = null;
		const _cmdAP2ENV9 = [_arrayValueh9sjWa]
		const _returnValueGPfgwq6 = await _HelpIirpK2q.subcommandDescription(_cmdAP2ENV9)
		const _returnValueP5dIj9V = -7.968551936378825;
		const _argumentr7bZtNw = () => { return _returnValueP5dIj9V };
		const _returnValueoLfr8VM = await _HelpIirpK2q.argumentDescription(_argumentr7bZtNw)
	});

	it('test for Help', async () => {
		const _HelpqRhergB = new Help()
		const __argsDescriptioncMCmUlw = 7.837584197414426;
		const __argsFH0Z0NL = {
		
	}
		const _cmdpgHTu3j = {
			"_argsDescription": __argsDescriptioncMCmUlw,
		"_args": __argsFH0Z0NL
	}
		const _returnValueI5gXxl4 = await _HelpqRhergB.visibleArguments(_cmdpgHTu3j)
		const _cmdCMMSsGg = "w";
		const _returnValuegksrIlA = await _HelpqRhergB.visibleOptions(_cmdCMMSsGg)
		const _returnValuebCvzoO = null;
		const _returnValuez8Y5rOz = () => { return _returnValuebCvzoO };
		const _returnValueJcB9LM = () => { return _returnValuez8Y5rOz };
		const _cmdb8m2cEu = () => { return _returnValueJcB9LM };
		const _returnValueJjMFTe = await _HelpqRhergB.commandUsage(_cmdb8m2cEu)
		const _returnValueKEMeO68 = null;
		const _optionsrKyn44 = () => { return _returnValueKEMeO68 };
		const _returnValueqnFDe78 = await _HelpqRhergB.optionTerm(_optionsrKyn44)
	});

	it('test for Help', async () => {
		const _HelpTz8Xtv = new Help()
		const _returnValueoKdDvuF = undefined;
		const _matchsWi96Tg = () => { return _returnValueoKdDvuF };
		const _returnValuerRUOvh0 = -2.2692219897043895;
		const _substrZhysNm = () => { return _returnValuerRUOvh0 };
		const _strRPW4IOQ = {
			"match": _matchsWi96Tg,
		"substr": _substrZhysNm
	}
		const _width6v5KCS = null;
		const _indentFk2BLh3 = 2.4812520066894557;
		const _minColumnWidthCSG1czQ = {
		
	}
		const _returnValueMji0kOF = await _HelpTz8Xtv.wrap(_strRPW4IOQ, _width6v5KCS, _indentFk2BLh3, _minColumnWidthCSG1czQ)
		const __nameQJyzsWI = {
		
	}
		const __aliasesi1nGzs = {
		
	}
		const _parentNxFpzXr = {
		
	}
		const _arrayValueVtXvTv0 = null;
		const _arrayValueFCTAc6 = false;
		const _arrayValueJzd6gYB = 5.081578110358638;
		const _returnValuewH4jwFR = [_arrayValueVtXvTv0, _arrayValueFCTAc6, _arrayValueJzd6gYB]
		const _usagePiV3c3 = () => { return _returnValuewH4jwFR };
		const _cmd47nc7e = {
			"_name": __nameQJyzsWI,
		"_aliases": __aliasesi1nGzs,
		"parent": _parentNxFpzXr,
		"usage": _usagePiV3c3
	}
		const _returnValueDD4k3Vx = await _HelpTz8Xtv.commandUsage(_cmd47nc7e)
		const _nameeIIQFrb = 0.3116999088415895;
		const _optionehZCBgi = new Command(_nameeIIQFrb)
		const _positionalLXYBCPz = true;
		const _returnValuePRbt8Ws = await _optionehZCBgi.enablePositionalOptions(_positionalLXYBCPz)
		const _contextOptionsIJwAUpm = "dephXa4cSGXiDDfGpPNTYCdQalUN0A1amqH6P3ma3zusFcSQuUjivkRUMGDPYIj7L8Ele8PMwy";
		const _returnValueYjLTWKJ = await _optionehZCBgi.helpInformation(_contextOptionsIJwAUpm)
		const _subcommandCDVLCM = true;
		const _argsHmWUhQO = -1.039690527863744;
		const _returnValueMgDcziF = await _optionehZCBgi._executeSubCommand(_subcommandCDVLCM, _argsHmWUhQO)
		const _returnValueMVjcyec = await _optionehZCBgi._checkNumberOfArguments()
		const _returnValuepw29YZk = await _HelpTz8Xtv.optionDescription(_optionehZCBgi)
	});

	it('test for Help', async () => {
		const _Helpwb6W8Z = new Help()
		const _cmdABGihkd = "PmpzvINJsyP7tuTWTKkB7u8mnjbV9lqyF8iNpgAnrBFAFEDy9ySJMFpcURHuDcr2pMYJW3yL7rGsIUvuF";
		const _arrayValuevJcMSMB = {
		
	}
		const _arrayValueHKxEbtM = null;
		const _helperpDSwKoq = [_arrayValuevJcMSMB, _arrayValueHKxEbtM]
		const _returnValued8fBP4M = await _Helpwb6W8Z.formatHelp(_cmdABGihkd, _helperpDSwKoq)
		const _returnValueTJVCpto = null;
		const _cmdsKFspA6 = () => { return _returnValueTJVCpto };
		const _returnValuePUr3rXf = await _Helpwb6W8Z.subcommandDescription(_cmdsKFspA6)
		const _arrayValueg4dbseu = -5.404943045142195;
		const _arrayValueuPHuUN = undefined;
		const _arrayValueT8dDMsn = {
		
	}
		const _cmdoquCqJR = [_arrayValueg4dbseu, _arrayValueuPHuUN, _arrayValueT8dDMsn]
		const _returnValueGFzP14d = await _Helpwb6W8Z.commandDescription(_cmdoquCqJR)
	});

	it('test for Help', async () => {
		const _HelpoPrylTt = new Help()
		const __nameNURIql1 = {
		
	}
		const __aliasesT1S2qPq = {
		
	}
		const _parentkGXks9j = null;
		const _usageYdAvjiA = 8.672795573181702;
		const _cmduFU8O1N = {
			"_name": __nameNURIql1,
		"_aliases": __aliasesT1S2qPq,
		"parent": _parentkGXks9j,
		"usage": _usageYdAvjiA
	}
		const _returnValuey8fstCI = await _HelpoPrylTt.commandUsage(_cmduFU8O1N)
		const _returnValueGoyxlt = -5.747427877961791;
		const _descriptionsYhcu9D = () => { return _returnValueGoyxlt };
		const _cmdmO1FtdB = {
			"description": _descriptionsYhcu9D
	}
		const _returnValueWEJj5JX = await _HelpoPrylTt.commandDescription(_cmdmO1FtdB)
		const _optionsmEmpeEU = {
		
	}
		const _arrayValuetU4OXG = null;
		const _returnValueDodyurX = undefined;
		const _arrayValuesrfNm5 = () => { return _returnValueDodyurX };
		const __hasHelpOptionsYJmlmp = [_arrayValuetU4OXG, _arrayValuesrfNm5]
		const _arrayValueUEDRrRE = false;
		const _arrayValueKNzpuUw = [_arrayValueUEDRrRE]
		const _returnValueOUZA9i2 = null;
		const _arrayValueLT6UeTO = () => { return _returnValueOUZA9i2 };
		const _arrayValueLhCzGQ = [_arrayValueKNzpuUw, _arrayValueLT6UeTO]
		const __helpShortFlagt7rPu7B = [_arrayValueLhCzGQ]
		const _returnValueauo8hQh = null;
		const __findOptionMqabK6w = () => { return _returnValueauo8hQh };
		const __helpLongFlagHnWFQkG = "eyd30B1icQfpPWDfF6AXI2GqVyJJSBWX27fXt1Dfh6NbKYibp2HzmvY14udtmEHIsWYa4xBbcVUAsF";
		const _arrayValuebMXfiFA = false;
		const _arrayValueuBTJr3r = null;
		const _returnValueC3jWzdk = [_arrayValuebMXfiFA, _arrayValueuBTJr3r]
		const _createOptionaYuq530 = () => { return _returnValueC3jWzdk };
		const __helpDescriptionAZPSf79 = -1.5341085485812815;
		const __helpFlagstCU3AD = null;
		const _cmdJ0kHdX = {
			"options": _optionsmEmpeEU,
		"_hasHelpOption": __hasHelpOptionsYJmlmp,
		"_helpShortFlag": __helpShortFlagt7rPu7B,
		"_findOption": __findOptionMqabK6w,
		"_helpLongFlag": __helpLongFlagHnWFQkG,
		"createOption": _createOptionaYuq530,
		"_helpDescription": __helpDescriptionAZPSf79,
		"_helpFlags": __helpFlagstCU3AD
	}
		const _returnValueXQrsxxj = await _HelpoPrylTt.visibleOptions(_cmdJ0kHdX)
		const _arrayValuePXLhEKL = undefined;
		const _arrayValueCmcIp45 = {
		
	}
		const _arrayValueQnSDd3 = false;
		const _optionBfVi0nB = [_arrayValuePXLhEKL, _arrayValueCmcIp45, _arrayValueQnSDd3]
		const _returnValueFyeVUQ = await _HelpoPrylTt.optionTerm(_optionBfVi0nB)
	});

	it('test for Help', async () => {
		const _HelpPoErNrX = new Help()
		const _strWm6HQ8h = "hUsqVEUdb7ARW4SzhQSW2l9aXHcuHUjB6pp6VALkcH8ppN5g3";
		const _widthDWbSpVE = -3.720212591967104;
		const _indentgLnsNdn = 8.15121732030606;
		const _minColumnWidthrIVQegd = 9.83302248640831;
		const _returnValueYz6y7kK = await _HelpPoErNrX.wrap(_strWm6HQ8h, _widthDWbSpVE, _indentgLnsNdn, _minColumnWidthrIVQegd)
		const _arrayValuesA13fbv = "R8FVj1ABulyF5qIAhIvqk";
		const _arrayValueYCBmfes = null;
		const _arrayValueErMTZmJ = "xy4QOjvzD48XLfhb6bXzVT5AROupM3kNRniwgSasp9bfsM9TWMTW8853ogsYCSzMTlM6CAtt";
		const _arrayValueHFMBkVg = undefined;
		const _arrayValueY49wdPN = "k2J6MKJbwXMk57mPmSLMHVGL8wxkLNKAeC7FTnUcwXVD4KLPVxIt13KkmijxxR5XFMAicoVlSjwh8xWat3N1L70StSVE";
		const _arrayValue96OSyr = []
		const _arrayValueio5G8B = [_arrayValueY49wdPN, _arrayValue96OSyr]
		const _arrayValuetsGrsFQ = [_arrayValueHFMBkVg, _arrayValueio5G8B]
		const _arrayValued1x9omo = {
		
	}
		const _arrayValuet0rXlmt = [_arrayValueYCBmfes, _arrayValueErMTZmJ, _arrayValuetsGrsFQ, _arrayValued1x9omo]
		const _arrayValuedLfFk8Q = [_arrayValuesA13fbv, _arrayValuet0rXlmt]
		const _arrayValuebyZusvn = {
		
	}
		const _arrayValuewSaM5LK = {
		
	}
		const _arrayValueRxVdRrv = [_arrayValuedLfFk8Q, _arrayValuebyZusvn, _arrayValuewSaM5LK]
		const _arrayValuegzSqJpY = {
		
	}
		const _arrayValue5Qy0Hn = true;
		const _cmdriNC6Yk = [_arrayValueRxVdRrv, _arrayValuegzSqJpY, _arrayValue5Qy0Hn]
		const _returnValueCYNhFvY = await _HelpPoErNrX.visibleOptions(_cmdriNC6Yk)
		const _arrayValue9A5Znx = undefined;
		const _arrayValuePo8OyVx = null;
		const _arrayValuevgdX3NJ = false;
		const _cmdhIp1G9C = [_arrayValue9A5Znx, _arrayValuePo8OyVx, _arrayValuevgdX3NJ]
		const _returnValuel4gQ8Ps = await _HelpPoErNrX.visibleOptions(_cmdhIp1G9C)
		const _cmdTzO3Vi9 = "xVIvyKmtFZO3W0fMh7mXF";
		const _returnValuel6oelyM = await _HelpPoErNrX.subcommandTerm(_cmdTzO3Vi9)
	});

	it('test for Help', async () => {
		const _HelpBkP2BCI = new Help()
		const _nameyV7OQQ6 = "dBAQL1";
		const _descriptionk9pRpz = null;
		const _option3AG2qq = new Argument(_nameyV7OQQ6, _descriptionk9pRpz)
		const _arrayValueIwSpjo = undefined;
		const _arrayValuevXm7taT = "cWwPzWvB7ULC6L02dtRaaqAil8UikD3B26ioTAmP0gdB5jHnQpzms4IKy5fz1a";
		const _arrayValuei292ZXF = null;
		const _valuesijAuvAh = [_arrayValueIwSpjo, _arrayValuevXm7taT, _arrayValuei292ZXF]
		const _returnValueEyP02vD = await _option3AG2qq.choices(_valuesijAuvAh)
		const _valueTEw4HXw = undefined;
		const _descriptionniisehZ = undefined;
		const _returnValueN3pOYkY = await _option3AG2qq.default(_valueTEw4HXw, _descriptionniisehZ)
		const _returnValue7eghxX = -4.752322978345656;
		const _valueTxXvfGR = () => { return _returnValue7eghxX };
		const _descriptionjKs8Da6 = undefined;
		const _returnValuedsnY2y3 = await _option3AG2qq.default(_valueTxXvfGR, _descriptionjKs8Da6)
		const _returnValueZD1ZY0S = await _option3AG2qq.name()
		const _returnValueBG6dN2x = await _HelpBkP2BCI.optionDescription(_option3AG2qq)
	});

	it('test for Help', async () => {
		const _HelpqWhmf5y = new Help()
		const _cmdHHLrBsW = null;
		const _helpernjSVaUT = new Help()
		const _namelA0chcJ = undefined;
		const _cmdC6K7Zs0 = new Command(_namelA0chcJ)
		const _returnValuewRKcwE = "cKc1uF7s30iBSlMM29ioOGj714d5TlD8g1RwsRwNg4UkUxM99W2iWvXr83gG4OVfRWSe1Pm7BAUv4DozP52EgAxqSy0NIdsJKEh";
		const _key1O4dZw = () => { return _returnValuewRKcwE };
		const _returnValueWFqFSji = await _cmdC6K7Zs0.getOptionValueSource(_key1O4dZw)
		const _returnValuegAxNWo6 = await _helpernjSVaUT.subcommandTerm(_cmdC6K7Zs0)
		const _arrayValuemZw9ESl = {
		
	}
		const _arrayValuewtKUAPp = undefined;
		const _cmdTrgf67 = [_arrayValuemZw9ESl, _arrayValuewtKUAPp]
		const _helperMFBn6c = new Help()
		const _arrayValueEfvtrzn = null;
		const _arrayValuec8LMVBX = undefined;
		const _arrayValueWiIoLjr = {
		
	}
		const _cmdVp3QeIC = [_arrayValueEfvtrzn, _arrayValuec8LMVBX, _arrayValueWiIoLjr]
		const _returnValueCKg11ut = await _helperMFBn6c.visibleOptions(_cmdVp3QeIC)
		const _cmdrzZ1M4C = "Jkbp8qnVS2Q05bWQFXgn2hnN2GM";
		const _returnValuewuvV0zs = await _helperMFBn6c.commandDescription(_cmdrzZ1M4C)
		const _returnValueen5i8cM = await _helpernjSVaUT.formatHelp(_cmdTrgf67, _helperMFBn6c)
		const _cmdZVhnFS9 = "dHMnMCzFvxE1cF14BYmYLjlIU9gbvv79DaIjoR";
		const _returnValueFMfEhS = await _helpernjSVaUT.visibleOptions(_cmdZVhnFS9)
		const _arrayValuegDl2X9c = undefined;
		const _arrayValueM2tc8Tf = [_arrayValuegDl2X9c]
		const _arrayValue16HicY = undefined;
		const _arrayValueQ53uMXA = false;
		const _cmdfCP17Cn = [_arrayValueM2tc8Tf, _arrayValue16HicY, _arrayValueQ53uMXA]
		const _returnValuejYx6AIh = await _helpernjSVaUT.subcommandTerm(_cmdfCP17Cn)
		const _cmdvA111g6 = 1.6458499072009936;
		const _helpern4R9ZM = -4.731045701665973;
		const _returnValueriyU7WT = await _helpernjSVaUT.longestSubcommandTermLength(_cmdvA111g6, _helpern4R9ZM)
		const _returnValueBn4SpRF = await _HelpqWhmf5y.longestOptionTermLength(_cmdHHLrBsW, _helpernjSVaUT)
		const _cmdE0Z3Ykz = "TyhJMtH6hkxqKZ7fFPdf8hKcnjgGnQALwLqwwJ8quoSeHRdCMPEDeM3Nk5Q7YSphbOcG";
		const _helperWgpjPgp = new Help()
		const _returnValueGC99LGR = false;
		const _cmdjWIX5WG = () => { return _returnValueGC99LGR };
		const _returnValueFPrOIA = await _helperWgpjPgp.subcommandTerm(_cmdjWIX5WG)
		const _cmdu5ih0SI = undefined;
		const _helperX5SUMZx = "vPnGJwoynf8g0WpGA";
		const _returnValueqZOf42u = await _helperWgpjPgp.longestArgumentTermLength(_cmdu5ih0SI, _helperX5SUMZx)
		const _returnValuelNuyT0 = await _HelpqWhmf5y.longestArgumentTermLength(_cmdE0Z3Ykz, _helperWgpjPgp)
		const _cmduk4aFmv = "oojnfUx5ujqZV0Lj6UGnajixhn0tvi5crDP8N5mmWhxn4N0NziUTEO5ecAMAUEVDk5qAfhNuJyk2EnIiRJkXqM8n9j4";
		const _returnValueltT5aBP = await _HelpqWhmf5y.visibleOptions(_cmduk4aFmv)
		const _cmdtS8CUN = "lgUnzLDCOGBk5IORjT7E2b3nwImzN9EaKXJv5T68wOkXjfPn2ATWEyVQMnRJ4Ddo5V8D6eaAG15L2Iv6HqEpDdVsdOpQR";
		const _helper1PaqGH = new Help()
		const _optionyglJqBz = "LYZRnw4APgz5SZ4bbLbQUK78GzGnOZPwv6vxScAGgb1Dln80kz4zojK7OlJpjbS7LYMhBVL";
		const _returnValueZbp71De = await _helper1PaqGH.optionTerm(_optionyglJqBz)
		const _arrayValueyOpx1BR = undefined;
		const _arrayValueCfwrkyR = -7.3022224665388915;
		const _arrayValueWOCnBk = [_arrayValueyOpx1BR, _arrayValueCfwrkyR]
		const _returnValueM5KY1gn = false;
		const _arrayValueq5d6VyB = () => { return _returnValueM5KY1gn };
		const _returnValueAfGjkOP = [_arrayValueWOCnBk, _arrayValueq5d6VyB]
		const _cmdWXS6sX4 = () => { return _returnValueAfGjkOP };
		const _helperf6oWKCN = new Help()
		const _arrayValueesBZIEN = null;
		const _arrayValuejPSiyNF = -9.308522031050561;
		const _arrayValueDQUUXli = undefined;
		const _cmdXF2uli9 = [_arrayValueesBZIEN, _arrayValuejPSiyNF, _arrayValueDQUUXli]
		const _returnValuemGlrdK = await _helperf6oWKCN.commandUsage(_cmdXF2uli9)
		const _arrayValueGri3INN = false;
		const _arrayValueyA4eg6C = -2.5094484714780894;
		const _returnValuezuvU1MO = null;
		const _arrayValueGn6KHqi = () => { return _returnValuezuvU1MO };
		const _arrayValueabm4YSf = "F7n7qYH";
		const _returnValueerUdlIE = [_arrayValueGn6KHqi, _arrayValueabm4YSf]
		const _arrayValuecaRnKj3 = () => { return _returnValueerUdlIE };
		const _arrayValueyuwWqZ = [_arrayValueyA4eg6C, _arrayValuecaRnKj3]
		const _cmdm8iCGg = [_arrayValueGri3INN, _arrayValueyuwWqZ]
		const _returnValueNiSM5T5 = await _helperf6oWKCN.subcommandTerm(_cmdm8iCGg)
		const _returnValuejMuALlc = await _helper1PaqGH.padWidth(_cmdWXS6sX4, _helperf6oWKCN)
		const _arrayValuePYcFIrX = undefined;
		const _cmdtvGbIN = [_arrayValuePYcFIrX]
		const _returnValuecca6DCV = await _helper1PaqGH.commandUsage(_cmdtvGbIN)
		const _returnValueRtZ4uyJ = await _HelpqWhmf5y.longestArgumentTermLength(_cmdtS8CUN, _helper1PaqGH)
	});

	it('test for Help', async () => {
		const _HelpFB4tdoB = new Help()
		const _flagsFM08k5y = "6LoL7thSGV1DUn7IYimxDbR9te1FQfjWjHYloYFIfWJKNrrFGibfMmQ7tBzKyoeEvjzmXYzva3NrmLHvWWONoRdsqWKt";
		const _descriptionoNIjb16 = true;
		const _cmdJiUPKdT = new Option(_flagsFM08k5y, _descriptionoNIjb16)
		const _fnJZXM8WP = {
		
	}
		const _returnValuecyhoXrd = await _cmdJiUPKdT.argParser(_fnJZXM8WP)
		const _returnValuegujtnvk = undefined;
		const _valuesCGqRvCa = () => { return _returnValuegujtnvk };
		const _returnValueljYEnES = await _cmdJiUPKdT.choices(_valuesCGqRvCa)
		const _returnValuev1v46FG = await _HelpFB4tdoB.subcommandDescription(_cmdJiUPKdT)
	});

	it('test for Help', async () => {
		const _HelpGeDFaol = new Help()
		const _returnValueZLbbLPM = 9.972431544758788;
		const _nameL5YKfaQ = () => { return _returnValueZLbbLPM };
		const _argumentxz5YLfh = {
			"name": _nameL5YKfaQ
	}
		const _returnValueMC4AXlh = await _HelpGeDFaol.argumentTerm(_argumentxz5YLfh)
		const _arrayValueVVjSmlr = "wNfmNuVIb6RoyiI2evu4xNcydUn0IioONj";
		const _arrayValueYmaQ1Fd = -0.8454356014448265;
		const _arrayValuet6d4T0 = -6.646620029584078;
		const _namegaqPeG = [_arrayValueVVjSmlr, _arrayValueYmaQ1Fd, _arrayValuet6d4T0]
		const _cmdq2QXdoA = new Command(_namegaqPeG)
		const _strVW1RLYL = undefined;
		const _flagsqCJ0EgY = {
		
	}
		const _descriptionBLtJSE = {
		
	}
		const _returnValuecXGJI1i = await _cmdq2QXdoA.version(_strVW1RLYL, _flagsqCJ0EgY, _descriptionBLtJSE)
		const _aliasbhh0A6Y = {
		
	}
		const _returnValuepgv3ZJI = await _cmdq2QXdoA.alias(_aliasbhh0A6Y)
		const _promisejqSZtlh = {
		
	}
		const _eventL8U5TPg = "o7RkH6mD2wbSKq8ynX6umDHa2JheYPh0BuTFdIEvjotOw7X38EkYdHUXgfbl7oKMxVRPQ5cAOIPTXDdx6rMGq97ubj";
		const _returnValueLARq7Ce = await _cmdq2QXdoA._chainOrCallHooks(_promisejqSZtlh, _eventL8U5TPg)
		const _returnValueGvg9O8M = await _HelpGeDFaol.visibleOptions(_cmdq2QXdoA)
		const _cmdaiHvI5U = null;
		const _returnValuea6ophDN = 2.437550669479034;
		const _visibleArgumentsaiBRDAm = () => { return _returnValuea6ophDN };
		const _returnValueSct0Ej = false;
		const _argumentTermZrsiFzH = () => { return _returnValueSct0Ej };
		const _helpervKAPLb = {
			"visibleArguments": _visibleArgumentsaiBRDAm,
		"argumentTerm": _argumentTermZrsiFzH
	}
		const _returnValuecUefrr = await _HelpGeDFaol.longestArgumentTermLength(_cmdaiHvI5U, _helpervKAPLb)
		const _cmdRH49v10 = "R68N8sv3RdGXP02k6";
		const _returnValuejklyqIR = await _HelpGeDFaol.visibleOptions(_cmdRH49v10)
	});

	it('test for Help', async () => {
		const _HelpSpIGDV = new Help()
		const _flagsCwQ3ThQ = "Mh0YCjuhFtfee3IIJPFtlSs4fhqhqweOVDP1F6HvljLnqJ8RcsQ3skWMeeB3UVJNMKBWbD1eslIIUhK1tgS53cMcw";
		const _arrayValueXn5O2rp = null;
		const _arrayValueCqGUR8w = undefined;
		const _descriptionliibbKj = [_arrayValueXn5O2rp, _arrayValueCqGUR8w]
		const _optionVzh7eow = new Option(_flagsCwQ3ThQ, _descriptionliibbKj)
		const _arrayValueKNZI2BW = false;
		const _arrayValueIyqmdRX = null;
		const _valueY4ZQmSP = [_arrayValueKNZI2BW, _arrayValueIyqmdRX]
		const _previousEtesY2O = "294Uc3w3bLQ355FW4SZD56f";
		const _returnValuedJDBi0 = await _optionVzh7eow._concatValue(_valueY4ZQmSP, _previousEtesY2O)
		const _valuesSLf491b = "9lkmo2uYdmoj6aY4AxnaguGPNWXnMchiHwS4FyDJY3MOlCs2zs1Gl7lyctLiF";
		const _returnValueMn8mmzu = await _optionVzh7eow.choices(_valuesSLf491b)
		const _fnkpXaxfd = undefined;
		const _returnValueR2s5RDb = await _optionVzh7eow.argParser(_fnkpXaxfd)
		const _nameBxH1JKv = undefined;
		const _returnValueSykWpXr = await _optionVzh7eow.env(_nameBxH1JKv)
		const _returnValuedbdxym = await _optionVzh7eow.attributeName()
		const _returnValueMdRbHKp = await _HelpSpIGDV.optionTerm(_optionVzh7eow)
		const __nameey6AaJ6 = true;
		const __aliases9u4QAS = {
		
	}
		const _arrayValueMmtYhjy = 1.7496874025111318;
		const _parentyd320We = [_arrayValueMmtYhjy]
		const _returnValueMiCNDDv = -6.12736217009334;
		const _usageBtP1dt = () => { return _returnValueMiCNDDv };
		const _cmdBU9sZSL = {
			"_name": __nameey6AaJ6,
		"_aliases": __aliases9u4QAS,
		"parent": _parentyd320We,
		"usage": _usageBtP1dt
	}
		const _returnValueX0RzSm = await _HelpSpIGDV.commandUsage(_cmdBU9sZSL)
	});

	it('test for Help', async () => {
		const _HelpNt68KZU = new Help()
		const __namekrjSwya = 5.59397037105799;
		const __aliasesDa9cnBj = "Qn81LNJnmTR26fpUtJCdgVd3fW1ckqqbaX0XPtxFE5lmeaG";
		const _parentzGw7rgt = {
		
	}
		const _returnValueT2Lv3UD = "gVHhr2TIzftnDvW7RGMbsu4TrRQQBgRlgriatDCH5DK";
		const _usageoM4em5z = () => { return _returnValueT2Lv3UD };
		const _cmdamP2N5v = {
			"_name": __namekrjSwya,
		"_aliases": __aliasesDa9cnBj,
		"parent": _parentzGw7rgt,
		"usage": _usageoM4em5z
	}
		const _returnValuejvxdj4U = await _HelpNt68KZU.commandUsage(_cmdamP2N5v)
		const _cmdJf6urVD = null;
		const _returnValueMZCL0Bz = await _HelpNt68KZU.commandUsage(_cmdJf6urVD)
		const _flagsRkzZsa = null;
		const _descriptionnKT80Yu = "liMTXASLbUWuPqeIPYB1oBuBSXXKGZOInfIWGFIIzPbLwLUvx47dUsAV5f2umUo2G626Bujb6wVDrHLOHIhCTW7sWms";
		const _option9P8bPw = new Option(_flagsRkzZsa, _descriptionnKT80Yu)
		const _returnValueAo3JVDE = await _option9P8bPw.attributeName()
		const _mandatoryPlb9nHK = false;
		const _returnValuem8QxpT = await _option9P8bPw.makeOptionMandatory(_mandatoryPlb9nHK)
		const _returnValuelpm4p1E = await _HelpNt68KZU.optionDescription(_option9P8bPw)
	});

	it('test for Help', async () => {
		const _HelpirQEMmj = new Help()
		const _arrayValueWImZTup = []
		const _arrayValueywsvm1 = true;
		const _arrayValueZdHcXAq = undefined;
		const _arrayValueRU8hJd = false;
		const _arrayValueWB8kOI = 6.9705979568045215;
		const _arrayValueSAsFgtc = [_arrayValueZdHcXAq, _arrayValueRU8hJd, _arrayValueWB8kOI]
		const _nameknUX8g = [_arrayValueWImZTup, _arrayValueywsvm1, _arrayValueSAsFgtc]
		const _descriptionIKdPEET = {
		
	}
		const _argumentWitCq5b = new Argument(_nameknUX8g, _descriptionIKdPEET)
		const _returnValueYYjsV4D = await _argumentWitCq5b.argRequired()
		const _returnValueD9MWcTW = await _argumentWitCq5b.argOptional()
		const _returnValueKDICgGC = await _argumentWitCq5b.argRequired()
		const _valueDBiam8 = -4.496445468631886;
		const _descriptionPj4C351 = "IJPFlWcRCY3IxmBgTFvuApzWMJ24Wgjl4dsM";
		const _returnValueodHzdHV = await _argumentWitCq5b.default(_valueDBiam8, _descriptionPj4C351)
		const _returnValuehgSJ7s = await _HelpirQEMmj.argumentDescription(_argumentWitCq5b)
		const _returnValue4StDry = true;
		const _optionsSYiPm = () => { return _returnValue4StDry };
		const _returnValueSCuDxHA = await _HelpirQEMmj.optionDescription(_optionsSYiPm)
		const _flagshRNvnWr = "60X5vYWpCI1d9YaMLRjA5m1pLWtsrfrPtL1boC4";
		const _descriptionUos5QWy = null;
		const _optioniuvNMTg = new Option(_flagshRNvnWr, _descriptionUos5QWy)
		const _valuezKc5Wqa = true;
		const _returnValuerOdZgCF = "GsOyQgZcuHF";
		const _concatzZA1sgD = () => { return _returnValuerOdZgCF };
		const _previoushGFYwOn = {
			"concat": _concatzZA1sgD
	}
		const _returnValueunA8mg = await _optioniuvNMTg._concatValue(_valuezKc5Wqa, _previoushGFYwOn)
		const _valueVuvM3Rn = undefined;
		const _returnValueBAYkoWU = {
		
	}
		const _concata38YsPo = () => { return _returnValueBAYkoWU };
		const _previousMISAhgc = {
			"concat": _concata38YsPo
	}
		const _returnValueBju4yF = await _optioniuvNMTg._concatValue(_valueVuvM3Rn, _previousMISAhgc)
		const _arrayValueWow37UZ = 2.092291814883712;
		const _arrayValueNkl0gvN = "tXzntaniSnWzxpEVUuPtkzifrMBO1qyMCPNj7C9c3GDnpjT";
		const _arrayValueSwUnl8X = null;
		const _arrayValue6e9x5A = -9.456346983377497;
		const _valuesGWnwqa4 = [_arrayValueWow37UZ, _arrayValueNkl0gvN, _arrayValueSwUnl8X, _arrayValue6e9x5A]
		const _returnValuehVuExAh = await _optioniuvNMTg.choices(_valuesGWnwqa4)
		const _valuegYA4Vt = true;
		const _previousWuFKz0p = "DBmvIAc269PhqwffS7UkqowDYFq2OhTRn9e5DCKZf5aDhWiFC7DBppfUSBkvkLYizwFFHTM5iGMOfeeB5c";
		const _returnValuehXnzimS = await _optioniuvNMTg._concatValue(_valuegYA4Vt, _previousWuFKz0p)
		const _valuezInTyt = undefined;
		const _previousIohlVBK = {
		
	}
		const _returnValueC0MuZA5 = await _optioniuvNMTg._concatValue(_valuezInTyt, _previousIohlVBK)
		const _returnValueMGmd1uM = await _HelpirQEMmj.optionDescription(_optioniuvNMTg)
	});

	it('test for Help', async () => {
		const _Helpm9HvL71 = new Help()
		const _nameslqUDVm = 8.781891334220887;
		const _cmdcSEhNd4 = new Command(_nameslqUDVm)
		const _keyj8LGjsh = "Sm9cee2Jmdiy3vFvWX31GA";
		const _returnValueZ7YLKID = await _cmdcSEhNd4.getOptionValue(_keyj8LGjsh)
		const _returnValueAl4Y0aK = await _Helpm9HvL71.visibleCommands(_cmdcSEhNd4)
	});

	it('test for Help', async () => {
		const _HelpASXqZ4x = new Help()
		const _namey4j6rAz = "COJBggw9l5Chd4uFOWQ4q5q6Q55HcKbMEhFuHzOdfN13by5BVPwemFHmIllsycJFDF";
		const _cmdgbeEDN8 = new Command(_namey4j6rAz)
		const _aliasIzABrn5 = {
		
	}
		const _returnValueo8yxB9Y = await _cmdgbeEDN8.alias(_aliasIzABrn5)
		const _returnValuePeJeOx = await _HelpASXqZ4x.subcommandTerm(_cmdgbeEDN8)
		const _cmdbv5TLui = "Kq95K74lkCA1RhNFwYwvumH9yLv";
		const _returnValueFC6n4aq = await _HelpASXqZ4x.commandUsage(_cmdbv5TLui)
	});

	it('test for Help', async () => {
		const _Helpym6jEFn = new Help()
		const _str0GS7nm = "h2gsQJQsytoPaDAIvQSatwP2t5u3H61MEa07WExYJn7nay9120wToMSBi9pTcrQsYWua";
		const _widthedNeDvI = 7.81161724221192;
		const _indentt07rak = 5.412388112431717;
		const _minColumnWidthfmamt3D = 4.553934831034015;
		const _returnValueaPxZE9n = await _Helpym6jEFn.wrap(_str0GS7nm, _widthedNeDvI, _indentt07rak, _minColumnWidthfmamt3D)
		const _namebQaH7oN = null;
		const _cmdbX8Ms7K = new Command(_namebQaH7oN)
		const _keyoLyJh0F = null;
		const _arrayValueJMxS4DI = {
		
	}
		const _arrayValuewFfhAA = undefined;
		const _arrayValueldzU6DD = true;
		const _arrayValueWmrplCb = 2.1153413514699224;
		const _arrayValueftpxegO = true;
		const _arrayValuezn53MF = [_arrayValuewFfhAA, _arrayValueldzU6DD, _arrayValueWmrplCb, _arrayValueftpxegO]
		const _valueSJqZDlg = [_arrayValueJMxS4DI, _arrayValuezn53MF]
		const _sourcex82vVq4 = null;
		const _returnValuevNaf4p9 = await _cmdbX8Ms7K.setOptionValueWithSource(_keyoLyJh0F, _valueSJqZDlg, _sourcex82vVq4)
		const _flagsfrzenAc = "1";
		const _descriptioniI5DsLu = 6.313964582047483;
		const _returnValuekxN7Tlc = 3.0272806878732617;
		const _fnV9dvZZD = () => { return _returnValuekxN7Tlc };
		const _defaultValueCAkoXzC = undefined;
		const _returnValuep2ZsPEE = await _cmdbX8Ms7K.requiredOption(_flagsfrzenAc, _descriptioniI5DsLu, _fnV9dvZZD, _defaultValueCAkoXzC)
		const _returnValueKrmfLjj = await _cmdbX8Ms7K.createHelp()
		const _requiredZXSOcnP = 7.912640795954413;
		const _defaultValueaeX7615 = undefined;
		const _parseArgTpJF7Qx = null;
		const _returnValueizqVyY3 = {
		
	}
		const _nameSUgKtPq = () => { return _returnValueizqVyY3 };
		const _argumentTnF3YGv = {
			"required": _requiredZXSOcnP,
		"defaultValue": _defaultValueaeX7615,
		"parseArg": _parseArgTpJF7Qx,
		"name": _nameSUgKtPq
	}
		const _returnValuexv3u4yU = await _cmdbX8Ms7K.addArgument(_argumentTnF3YGv)
		const _returnValueiVz2kHG = await _cmdbX8Ms7K._hasImplicitHelpCommand()
		const _returnValuevWwJtda = await _Helpym6jEFn.subcommandTerm(_cmdbX8Ms7K)
		const _flagsqJGvCnd = null;
		const _optionljOnt51 = {
			"flags": _flagsqJGvCnd
	}
		const _returnValuewnurOj = await _Helpym6jEFn.optionTerm(_optionljOnt51)
		const _returnValueu9tlOqN = true;
		const _optionolbqNMN = () => { return _returnValueu9tlOqN };
		const _returnValueKHOIF43 = await _Helpym6jEFn.optionTerm(_optionolbqNMN)
		const _arrayValuehwysObx = true;
		const _arrayValueUVYZWkS = undefined;
		const _cmdPP1V6ge = [_arrayValuehwysObx, _arrayValueUVYZWkS]
		const _returnValuecLu81Ea = await _Helpym6jEFn.commandUsage(_cmdPP1V6ge)
	});
})