export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpQZZinDQ = new Help()
		const _nameKaKFj0U = 4.434357518328881;
		const _argumentZgkwwWa = {
			"name": _nameKaKFj0U
	}
		const _returnValueEScsZOM = await _HelpQZZinDQ.argumentTerm(_argumentZgkwwWa)
		const __nameX5jRQCL = {
		
	}
		const __aliasesQ1VX4jk = {
		
	}
		const _parentiLRo059 = {
		
	}
		const _returnValueDBxMrIH = undefined;
		const _usageN9PA4eN = () => { return _returnValueDBxMrIH };
		const _cmdUyMxnYb = {
			"_name": __nameX5jRQCL,
		"_aliases": __aliasesQ1VX4jk,
		"parent": _parentiLRo059,
		"usage": _usageN9PA4eN
	}
		const _returnValueBub5uHI = await _HelpQZZinDQ.commandUsage(_cmdUyMxnYb)
	});

	it('test for Help', async () => {
		const _HelpKmv54Up = new Help()
		const _cmdsSllQMg = -9.580317125767145;
		const _returnValuensQXDYR = await _HelpKmv54Up.subcommandTerm(_cmdsSllQMg)
	});

	it('test for Help', async () => {
		const _HelpLIrTLNX = new Help()
		const __nameJpnTGd2 = {
		
	}
		const __aliasesCZk1cNK = {
		
	}
		const _parentDm5bZCf = {
		
	}
		const _returnValueqjRGXqp = true;
		const _usagey4w3ndT = () => { return _returnValueqjRGXqp };
		const _cmdfhyLk9 = {
			"_name": __nameJpnTGd2,
		"_aliases": __aliasesCZk1cNK,
		"parent": _parentDm5bZCf,
		"usage": _usagey4w3ndT
	}
		const _returnValuele3I0xk = await _HelpLIrTLNX.commandUsage(_cmdfhyLk9)
		const __argsCIiZuyo = {
		
	}
		const __name1ivyam = -4.014543701570031;
		const __aliasesmbBjnnf = {
		
	}
		const _optionsOON6yh = {
		
	}
		const _cmdc10USi1 = {
			"_args": __argsCIiZuyo,
		"_name": __name1ivyam,
		"_aliases": __aliasesmbBjnnf,
		"options": _optionsOON6yh
	}
		const _returnValueCP0DeOI = await _HelpLIrTLNX.subcommandTerm(_cmdc10USi1)
		const _cmdXWjiiAO = "LvyyOTv";
		const _helperWCaQZ3W = "GnngXnzDCd6ilxNy1iUIHA6jVyvrgX5KUt6N1P00VmTnhoZ8k";
		const _returnValueLMuShds = await _HelpLIrTLNX.longestSubcommandTermLength(_cmdXWjiiAO, _helperWCaQZ3W)
		const _optionsdqs9wTQ = []
		const __hasHelpOptionQCbaWU = true;
		const __helpShortFlagUWSJmtH = {
		
	}
		const _returnValueto5177Z = true;
		const __findOptionBmTyq73 = () => { return _returnValueto5177Z };
		const __helpLongFlagIhRvWmw = true;
		const _returnValueUMTMhF = true;
		const _createOptionCcKZzWx = () => { return _returnValueUMTMhF };
		const __helpDescriptionbnZ6Dy2 = 8.729596190178384;
		const __helpFlagsgDa9ehp = -6.738096920857615;
		const _cmdVla0IYV = {
			"options": _optionsdqs9wTQ,
		"_hasHelpOption": __hasHelpOptionQCbaWU,
		"_helpShortFlag": __helpShortFlagUWSJmtH,
		"_findOption": __findOptionBmTyq73,
		"_helpLongFlag": __helpLongFlagIhRvWmw,
		"createOption": _createOptionCcKZzWx,
		"_helpDescription": __helpDescriptionbnZ6Dy2,
		"_helpFlags": __helpFlagsgDa9ehp
	}
		const _returnValuekDWxvKF = await _HelpLIrTLNX.visibleOptions(_cmdVla0IYV)
		const __nameDw5Ubju = {
		
	}
		const __aliasesWBF8x13 = {
		
	}
		const _parentgdIJtpl = {
		
	}
		const _returnValueeZEKK4K = false;
		const _usagePoAr5Ay = () => { return _returnValueeZEKK4K };
		const _cmdmaP3Wp3 = {
			"_name": __nameDw5Ubju,
		"_aliases": __aliasesWBF8x13,
		"parent": _parentgdIJtpl,
		"usage": _usagePoAr5Ay
	}
		const _returnValuegFuWocv = await _HelpLIrTLNX.commandUsage(_cmdmaP3Wp3)
	});

	it('test for Help', async () => {
		const _HelplOqEdPu = new Help()
		const _arrayValueGzCTfF2 = null;
		const _cmdmOQRydC = [_arrayValueGzCTfF2]
		const _sortSubcommandsUF2fVay = false;
		const _returnValueSnLHFuO = null;
		const _subcommandTermWn5xjbh = () => { return _returnValueSnLHFuO };
		const _helperh2cjUeC = {
			"sortSubcommands": _sortSubcommandsUF2fVay,
		"subcommandTerm": _subcommandTermWn5xjbh
	}
		const _returnValuelz58Gft = await _HelplOqEdPu.formatHelp(_cmdmOQRydC, _helperh2cjUeC)
		const _arrayValueJjlRZv3 = null;
		const _arrayValueU8g6UwW = "kuFVk73b8FP7k1fo4k5LLScXCpJQFlSebHWDxrZABISuGTiG6sYGV6KQkE4d6CI4d06O3RKTvL1RBbQvbFWEp3afLBEGVWFB";
		const _arrayValueMWAtjot = 7.187712805593595;
		const _arrayValuefO5KdFa = {
		
	}
		const _cmdoUtQWYy = [_arrayValueJjlRZv3, _arrayValueU8g6UwW, _arrayValueMWAtjot, _arrayValuefO5KdFa]
		const _returnValueAYoC68i = "wFiWvAEvPkmmmuHi";
		const _returnValueSlwOcr = () => { return _returnValueAYoC68i };
		const _returnValueNhf7MDg = () => { return _returnValueSlwOcr };
		const _visibleArgumentsZvAmrkO = () => { return _returnValueNhf7MDg };
		const _arrayValueUbSoGbM = "KSsu";
		const _arrayValuexHV0v0A = "pG4aVJEKkNlr0sS6EILBUlaEJTf2njl2";
		const _argumentTermUE0lsq8 = [_arrayValueUbSoGbM, _arrayValuexHV0v0A]
		const _helperJuzx4th = {
			"visibleArguments": _visibleArgumentsZvAmrkO,
		"argumentTerm": _argumentTermUE0lsq8
	}
		const _returnValueB0iR3B3 = await _HelplOqEdPu.longestArgumentTermLength(_cmdoUtQWYy, _helperJuzx4th)
		const _optionspFMjPw6 = {
		
	}
		const __hasHelpOptionwuUkK1g = undefined;
		const __helpShortFlagM3MyRcc = undefined;
		const _arrayValueZKWK4SM = {
		
	}
		const _arrayValuesiYWiMY = null;
		const _returnValuewgUbbih = [_arrayValueZKWK4SM, _arrayValuesiYWiMY]
		const __findOptionuRMlUJY = () => { return _returnValuewgUbbih };
		const __helpLongFlagNIqmWBa = "TXAlHP92CmBrCLUii9SBGAImve5oGQmPSq6D4puXP7SoKPnbwVOBWBuKg8CKepyTI8Ptdzz7nqCv2aXOnUEqHo06fkmkAAaED";
		const _returnValue9jXfWv = 7.961607740891569;
		const _createOptionw2pnZGg = () => { return _returnValue9jXfWv };
		const __helpDescriptionpz5m5pf = undefined;
		const __helpFlagsBo3shCI = -6.726395847210111;
		const _cmdsY9p1vT = {
			"options": _optionspFMjPw6,
		"_hasHelpOption": __hasHelpOptionwuUkK1g,
		"_helpShortFlag": __helpShortFlagM3MyRcc,
		"_findOption": __findOptionuRMlUJY,
		"_helpLongFlag": __helpLongFlagNIqmWBa,
		"createOption": _createOptionw2pnZGg,
		"_helpDescription": __helpDescriptionpz5m5pf,
		"_helpFlags": __helpFlagsBo3shCI
	}
		const _returnValuefhu54P5 = await _HelplOqEdPu.visibleOptions(_cmdsY9p1vT)
		const _arrayValueFkQ3beH = null;
		const _arrayValueAEvPydB = [_arrayValueFkQ3beH]
		const _arrayValueFslrfO = "IIiP4nqofj4tUGMa43fYQQKbEe6Ojju9YQKMFmA0IMHOcXdeTwzObGo";
		const _arrayValueTfmIvgE = []
		const _returnValuenn5XTdI = [_arrayValueAEvPydB, _arrayValueFslrfO, _arrayValueTfmIvgE]
		const _descriptionLb4cSPW = () => { return _returnValuenn5XTdI };
		const _cmdtGymSnS = {
			"description": _descriptionLb4cSPW
	}
		const _returnValuegeLwocL = await _HelplOqEdPu.commandDescription(_cmdtGymSnS)
	});

	it('test for Help', async () => {
		const _Helpb6JWjE = new Help()
		const _cmdSe0lYU = -4.099188777448132;
		const _sortSubcommandsDeaKKf1 = "pF0Q3HTPPept9nmemoM927gdu1oeoPhMaoNbWxduP1laCupenfHuqDD6cVdG";
		const _subcommandTermgjaEfGx = "H1HK1ZhswDyygTiW1dydRl8Uw5HVMszWrX2t3tcpcwnkrFkmy36uzvKiyZScn9M4eKAWa5aMbxhv5x3BrBiLVtfl";
		const _helperM6kqAbn = {
			"sortSubcommands": _sortSubcommandsDeaKKf1,
		"subcommandTerm": _subcommandTermgjaEfGx
	}
		const _returnValueiuWeuFZ = await _Helpb6JWjE.longestSubcommandTermLength(_cmdSe0lYU, _helperM6kqAbn)
		const _returnValueINE27lw = -5.2135329104262755;
		const _nameSmx0rEm = () => { return _returnValueINE27lw };
		const _argumentk6KNAB9 = {
			"name": _nameSmx0rEm
	}
		const _returnValuenD4Eck = await _Helpb6JWjE.argumentTerm(_argumentk6KNAB9)
		const _returnValueGFdMdpW = false;
		const _returnValueACghRp = () => { return _returnValueGFdMdpW };
		const _nameEokEu9R = () => { return _returnValueACghRp };
		const _argumenttmYobXy = {
			"name": _nameEokEu9R
	}
		const _returnValuesg47L70 = await _Helpb6JWjE.argumentTerm(_argumenttmYobXy)
		const _argChoicesya7hpNS = undefined;
		const _negateezHsJxa = -0.341118117162992;
		const _defaultValueVUKiku = undefined;
		const _defaultValueDescriptionR9dwwdD = undefined;
		const _envVariaX5a8S = undefined;
		const _descriptionjVFv20J = null;
		const _optioncz4SGZd = {
			"argChoices": _argChoicesya7hpNS,
		"negate": _negateezHsJxa,
		"defaultValue": _defaultValueVUKiku,
		"defaultValueDescription": _defaultValueDescriptionR9dwwdD,
		"envVar": _envVariaX5a8S,
		"description": _descriptionjVFv20J
	}
		const _returnValueeEyIPMt = await _Helpb6JWjE.optionDescription(_optioncz4SGZd)
		const _descriptionNjSFKaj = null;
		const _cmdUM6dJCs = {
			"description": _descriptionNjSFKaj
	}
		const _returnValueBq5ramB = await _Helpb6JWjE.commandDescription(_cmdUM6dJCs)
	});

	it('test for Help', async () => {
		const _Helpbeh92Pp = new Help()
		const _cmdGFLHkU = undefined;
		const _returnValueynYXp6L = await _Helpbeh92Pp.commandDescription(_cmdGFLHkU)
		const _argChoicesWBx43ij = {
		
	}
		const _negateDfqCI0r = -6.911071172651059;
		const _defaultValuesiOrjLj = undefined;
		const _defaultValueDescriptionnHrssKr = "NgsHcwUPL9L";
		const _envVarFmqEcbZ = undefined;
		const _descriptioni63QybL = undefined;
		const _optionTIgWrN8 = {
			"argChoices": _argChoicesWBx43ij,
		"negate": _negateDfqCI0r,
		"defaultValue": _defaultValuesiOrjLj,
		"defaultValueDescription": _defaultValueDescriptionnHrssKr,
		"envVar": _envVarFmqEcbZ,
		"description": _descriptioni63QybL
	}
		const _returnValuerP2A5MC = await _Helpbeh92Pp.optionDescription(_optionTIgWrN8)
		const _cmdDmckhZc = undefined;
		const _returnValuePHA7JzT = await _Helpbeh92Pp.visibleOptions(_cmdDmckhZc)
		const __argsrmOARQV = {
		
	}
		const __nameeXJmjJ7 = -0.803681505167269;
		const __aliasesPtEtz6H = {
		
	}
		const _optionsJkA6lo = {
		
	}
		const _cmdmq1ZW0w = {
			"_args": __argsrmOARQV,
		"_name": __nameeXJmjJ7,
		"_aliases": __aliasesPtEtz6H,
		"options": _optionsJkA6lo
	}
		const _returnValuecURboAv = await _Helpbeh92Pp.subcommandTerm(_cmdmq1ZW0w)
		const _returnValueSxLjesQ = true;
		const _namea9FfW98 = () => { return _returnValueSxLjesQ };
		const _argumentdPjbIWY = {
			"name": _namea9FfW98
	}
		const _returnValueU5QGRWY = await _Helpbeh92Pp.argumentTerm(_argumentdPjbIWY)
	});

	it('test for Help', async () => {
		const _HelpBI0m9vn = new Help()
		const _cmdcq5ObRx = 9.765078385106097;
		const _returnValuePAVkjG2 = true;
		const _visibleArgumentsR113nS = () => { return _returnValuePAVkjG2 };
		const _returnValuerCw3X8l = false;
		const _argumentTermVA4kCyw = () => { return _returnValuerCw3X8l };
		const _helperrVd7sZF = {
			"visibleArguments": _visibleArgumentsR113nS,
		"argumentTerm": _argumentTermVA4kCyw
	}
		const _returnValueW7RSm0 = await _HelpBI0m9vn.longestArgumentTermLength(_cmdcq5ObRx, _helperrVd7sZF)
		const _optionsrYaeLOa = {
		
	}
		const _arrayValueQ9vK39S = {
		
	}
		const _arrayValuer1pBvYt = -1.9424521373893455;
		const _arrayValuepqlwYp = {
		
	}
		const __hasHelpOptionKcxpo4 = [_arrayValueQ9vK39S, _arrayValuer1pBvYt, _arrayValuepqlwYp]
		const __helpShortFlagBDSDTrk = "eIrjPLQe7Gfmbgga3rmXIIzXc8FjgM9rk6Hfx3LmKwWaxo5EWN4cBkR5AdPXs2fJxMphSG7V8H7GWA3xmdrOOHAEJJk";
		const _returnValueNYU8KFF = {
		
	}
		const __findOptionsUWHQMY = () => { return _returnValueNYU8KFF };
		const __helpLongFlagidBaxCe = "qMtph4dGaA3fOyMVFYxYGVsCMQYv";
		const _returnValuerAgswbV = "gOLXJlw3wXTD4grrIP3yTtc9tY6CMmgWiRTKsBKaXatS9rguLTSNqUpyB";
		const _createOptionIQrfY4k = () => { return _returnValuerAgswbV };
		const __helpDescriptionQ4MZxRq = -6.6491756359086605;
		const _returnValuemQMEMyb = undefined;
		const __helpFlagsD7WSuVg = () => { return _returnValuemQMEMyb };
		const _cmdVE2CjK3 = {
			"options": _optionsrYaeLOa,
		"_hasHelpOption": __hasHelpOptionKcxpo4,
		"_helpShortFlag": __helpShortFlagBDSDTrk,
		"_findOption": __findOptionsUWHQMY,
		"_helpLongFlag": __helpLongFlagidBaxCe,
		"createOption": _createOptionIQrfY4k,
		"_helpDescription": __helpDescriptionQ4MZxRq,
		"_helpFlags": __helpFlagsD7WSuVg
	}
		const _returnValueQirdocI = await _HelpBI0m9vn.visibleOptions(_cmdVE2CjK3)
	});

	it('test for Help', async () => {
		const _HelpSg3yqgJ = new Help()
		const _argChoicesjHQJFYx = {
		
	}
		const _negateHAKz5E = -5.9570280840611165;
		const _defaultValueb57rp5I = undefined;
		const _defaultValueDescriptionODOfDfh = true;
		const _envVarcqDtE0U = undefined;
		const _descriptionQ4JRt7 = -4.9494222410765225;
		const _optionJS3m43k = {
			"argChoices": _argChoicesjHQJFYx,
		"negate": _negateHAKz5E,
		"defaultValue": _defaultValueb57rp5I,
		"defaultValueDescription": _defaultValueDescriptionODOfDfh,
		"envVar": _envVarcqDtE0U,
		"description": _descriptionQ4JRt7
	}
		const _returnValuehFEkQMj = await _HelpSg3yqgJ.optionDescription(_optionJS3m43k)
		const _flagsi77qsaF = -4.001920123490628;
		const _optionXnkOSWl = {
			"flags": _flagsi77qsaF
	}
		const _returnValueKMA918D = await _HelpSg3yqgJ.optionTerm(_optionXnkOSWl)
	});

	it('test for Help', async () => {
		const _HelpzNdng6D = new Help()
		const _returnValuebPZbkHg = -5.860229924068761;
		const _cmdTln6wO = () => { return _returnValuebPZbkHg };
		const _returnValueJhXWON4 = null;
		const _visibleOptionsMeBtUtq = () => { return _returnValueJhXWON4 };
		const _returnValueQnqhGGJ = null;
		const _optionTermahvyI4P = () => { return _returnValueQnqhGGJ };
		const _helperIQpXI1 = {
			"visibleOptions": _visibleOptionsMeBtUtq,
		"optionTerm": _optionTermahvyI4P
	}
		const _returnValuehaBPZ90 = await _HelpzNdng6D.longestOptionTermLength(_cmdTln6wO, _helperIQpXI1)
		const _cmdcN1hXxm = null;
		const _returnValueTxwAejl = false;
		const _longestOptionTermLengtheLnWl1a = () => { return _returnValueTxwAejl };
		const _returnValueBrpqBPh = -8.451051783458471;
		const _longestSubcommandTermLengthGpYCBUC = () => { return _returnValueBrpqBPh };
		const _arrayValuefPg730w = 3.2560404304522717;
		const _returnValueSlxofrG = 1.622878884623308;
		const _arrayValueRwzxcQB = () => { return _returnValueSlxofrG };
		const _arrayValuefQ133N6 = [_arrayValuefPg730w, _arrayValueRwzxcQB]
		const _arrayValue7TyRQ9 = -8.774252540081847;
		const _returnValueuZNYeut = [_arrayValuefQ133N6, _arrayValue7TyRQ9]
		const _longestArgumentTermLengthNTfwn0 = () => { return _returnValueuZNYeut };
		const _helperav1i05r = {
			"longestOptionTermLength": _longestOptionTermLengtheLnWl1a,
		"longestSubcommandTermLength": _longestSubcommandTermLengthGpYCBUC,
		"longestArgumentTermLength": _longestArgumentTermLengthNTfwn0
	}
		const _returnValuetfkSlfo = await _HelpzNdng6D.padWidth(_cmdcN1hXxm, _helperav1i05r)
		const _returnValueQKGE4Qq = null;
		const _descriptionMnH966E = () => { return _returnValueQKGE4Qq };
		const _cmdflHMIPw = {
			"description": _descriptionMnH966E
	}
		const _returnValueYf4DQjw = await _HelpzNdng6D.commandDescription(_cmdflHMIPw)
	});

	it('test for Help', async () => {
		const _HelphUm4ZAh = new Help()
		const _argChoicesvKk05Z = {
		
	}
		const _negatezOd3nQD = true;
		const _defaultValuewuYQwaj = undefined;
		const _defaultValueDescriptionVpjyw38 = undefined;
		const _envVarasT8CEm = undefined;
		const _descriptionL1BuB5C = "TgqEjGmY2IjiGIFtzs71xisxMIPBRVKwpslcve7Eb5YwS4cz3FtqSXKWxdvJUV3vnFUjsDOEkxihygltWr6zeQIb1lW5EG9";
		const _optionJ4pVbv3 = {
			"argChoices": _argChoicesvKk05Z,
		"negate": _negatezOd3nQD,
		"defaultValue": _defaultValuewuYQwaj,
		"defaultValueDescription": _defaultValueDescriptionVpjyw38,
		"envVar": _envVarasT8CEm,
		"description": _descriptionL1BuB5C
	}
		const _returnValueBNWx0sC = await _HelphUm4ZAh.optionDescription(_optionJ4pVbv3)
		const _flagsMrB53zC = undefined;
		const _optionYBzWfSS = {
			"flags": _flagsMrB53zC
	}
		const _returnValueBY3gFa = await _HelphUm4ZAh.optionTerm(_optionYBzWfSS)
		const _argChoicesKz87tk = "O5DTwJld02QVXGxpt0GoJ1ia1P5ZxBV8CRQDtkt";
		const _negatekKwJM1T = null;
		const _defaultValueWSDesBw = undefined;
		const _defaultValueDescriptionKx88Njz = undefined;
		const _envVarMInE7fU = undefined;
		const _descriptionMTWDcP = "A3J0jFQcVThjDXfMLADffd1XiDvEN3MQ8";
		const _optionvErsMuu = {
			"argChoices": _argChoicesKz87tk,
		"negate": _negatekKwJM1T,
		"defaultValue": _defaultValueWSDesBw,
		"defaultValueDescription": _defaultValueDescriptionKx88Njz,
		"envVar": _envVarMInE7fU,
		"description": _descriptionMTWDcP
	}
		const _returnValuebyNi57p = await _HelphUm4ZAh.optionDescription(_optionvErsMuu)
		const _cmdCZ3Cz09 = undefined;
		const _returnValueEVbNBzk = await _HelphUm4ZAh.commandUsage(_cmdCZ3Cz09)
	});

	it('test for Help', async () => {
		const _HelpPpDxDf0 = new Help()
		const _arrayValueqY3TO2y = null;
		const __argsDescriptionBzO8aaL = [_arrayValueqY3TO2y]
		const __argsD5jpuz = {
		
	}
		const _cmdmTlrReo = {
			"_argsDescription": __argsDescriptionBzO8aaL,
		"_args": __argsD5jpuz
	}
		const _returnValuewhCRt0c = await _HelpPpDxDf0.visibleArguments(_cmdmTlrReo)
		const _cmd8OetF3 = {
		
	}
		const _returnValueNzeZCOK = null;
		const _visibleOptionsC79qvQN = () => { return _returnValueNzeZCOK };
		const _returnValueRXS6RqJ = {
		
	}
		const _optionTermElFmXai = () => { return _returnValueRXS6RqJ };
		const _helperBPjsbxF = {
			"visibleOptions": _visibleOptionsC79qvQN,
		"optionTerm": _optionTermElFmXai
	}
		const _returnValuenUYf3wV = await _HelpPpDxDf0.longestOptionTermLength(_cmd8OetF3, _helperBPjsbxF)
		const _arrayValueaTDxjJz = undefined;
		const _arrayValueLSMWn6b = "pghHUGPKgT5CnjdbjY79axkM5ACJkNsqDIRZEsi9qNOAcWVFHcReuYcVXSI";
		const _striVNQrN = [_arrayValueaTDxjJz, _arrayValueLSMWn6b]
		const _widthSgx9YT = 9.560803165745888;
		const _indentSdSHsVT = -2.980013030223219;
		const _minColumnWidthHZSdgUd = -8.105055314348688;
		const _returnValuefuGOlp1 = await _HelpPpDxDf0.wrap(_striVNQrN, _widthSgx9YT, _indentSdSHsVT, _minColumnWidthHZSdgUd)
	});

	it('test for Help', async () => {
		const _HelpZjErA2R = new Help()
		const _cmdlpffibJ = false;
		const _returnValueilJMV0j = false;
		const _longestOptionTermLengthalG7LWG = () => { return _returnValueilJMV0j };
		const _returnValuetNd05Xk = 3.524153673870643;
		const _longestSubcommandTermLengthKphweuj = () => { return _returnValuetNd05Xk };
		const _returnValueQlkLX95 = {
		
	}
		const _longestArgumentTermLengthnbooXb = () => { return _returnValueQlkLX95 };
		const _helperYueAwnF = {
			"longestOptionTermLength": _longestOptionTermLengthalG7LWG,
		"longestSubcommandTermLength": _longestSubcommandTermLengthKphweuj,
		"longestArgumentTermLength": _longestArgumentTermLengthnbooXb
	}
		const _returnValuee194o2U = await _HelpZjErA2R.padWidth(_cmdlpffibJ, _helperYueAwnF)
		const _cmduRuq3vR = "verIYdqwvguU04Hl6aUtjAbamulGXn6qSkubcCEDaolNfPt4JqPxgdM4DFUxrHzzYiRtzlbXCh51cN";
		const _arrayValueML2xPMN = undefined;
		const _arrayValuerPnvkV1 = true;
		const _arrayValueoXnqcdN = null;
		const _arrayValueVMntbPH = [_arrayValuerPnvkV1, _arrayValueoXnqcdN]
		const _arrayValuekhMRuhs = [_arrayValueVMntbPH]
		const _returnValuej0k7Ch = [_arrayValuekhMRuhs]
		const _arrayValuedd2hMEI = () => { return _returnValuej0k7Ch };
		const _returnValueGI06hEZ = [_arrayValueML2xPMN, _arrayValuedd2hMEI]
		const _visibleOptionsgdAutwM = () => { return _returnValueGI06hEZ };
		const _returnValueluVlbv8 = "uHPfg4D";
		const _optionTermLwXVNq = () => { return _returnValueluVlbv8 };
		const _helperwZg7Tbt = {
			"visibleOptions": _visibleOptionsgdAutwM,
		"optionTerm": _optionTermLwXVNq
	}
		const _returnValues2atQpv = await _HelpZjErA2R.longestOptionTermLength(_cmduRuq3vR, _helperwZg7Tbt)
		const _argChoicespOiWVXy = {
		
	}
		const _defaultValueXETEhNz = undefined;
		const _defaultValueDescriptionIKVEwSY = "P7qboioS8gTBKDcOK9dG9K8IpgjDvK2G3bD2Bh3QmXE3uzWYffT3Gi5xQQ999rpI9G0jugM6Pck1eaQVuw1c3CDge";
		const _descriptionXLOud20 = -6.215318715178259;
		const _argumentCBkwkL = {
			"argChoices": _argChoicespOiWVXy,
		"defaultValue": _defaultValueXETEhNz,
		"defaultValueDescription": _defaultValueDescriptionIKVEwSY,
		"description": _descriptionXLOud20
	}
		const _returnValueos8cAdQ = await _HelpZjErA2R.argumentDescription(_argumentCBkwkL)
		const _commandssiE2MhH = {
		
	}
		const _returnValueP5HNBGN = 2.773836092480966;
		const __hasImplicitHelpCommandzimQLkP = () => { return _returnValueP5HNBGN };
		const __helpCommandnameAndArgskmzHRV4 = {
		
	}
		const _createCommandSP2ZfT5 = null;
		const __helpCommandDescriptionSELbU5s = undefined;
		const _cmdGrPin7i = {
			"commands": _commandssiE2MhH,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandzimQLkP,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgskmzHRV4,
		"createCommand": _createCommandSP2ZfT5,
		"_helpCommandDescription": __helpCommandDescriptionSELbU5s
	}
		const _returnValueOJPxtOA = await _HelpZjErA2R.visibleCommands(_cmdGrPin7i)
		const _cmdnPcbYcc = 4.349180706370639;
		const _returnValuezNGZIxv = "cwgE2XIMcTatqnJ9J4sWHB9eH3N";
		const _longestOptionTermLengthH7DS0k9 = () => { return _returnValuezNGZIxv };
		const _returnValueFJ6YYxW = "B7FN1aT3";
		const _longestSubcommandTermLengthIFAYjxb = () => { return _returnValueFJ6YYxW };
		const _arrayValueDBj5UzH = null;
		const _returnValuetmCiSr9 = [_arrayValueDBj5UzH]
		const _arrayValueptFF3XK = () => { return _returnValuetmCiSr9 };
		const _arrayValueedYggVH = []
		const _arrayValueSHXUGN = false;
		const _arrayValueeR68F5u = [_arrayValueptFF3XK, _arrayValueedYggVH, _arrayValueSHXUGN]
		const _arrayValueuG1bj2V = {
		
	}
		const _returnValueoEG3pNk = [_arrayValueeR68F5u, _arrayValueuG1bj2V]
		const _longestArgumentTermLengthTjbWA2N = () => { return _returnValueoEG3pNk };
		const _helperukUwzGq = {
			"longestOptionTermLength": _longestOptionTermLengthH7DS0k9,
		"longestSubcommandTermLength": _longestSubcommandTermLengthIFAYjxb,
		"longestArgumentTermLength": _longestArgumentTermLengthTjbWA2N
	}
		const _returnValueE7BPrU = await _HelpZjErA2R.padWidth(_cmdnPcbYcc, _helperukUwzGq)
	});

	it('test for Help', async () => {
		const _HelpvtDrykQ = new Help()
		const _cmddh6fRaY = 7.002000285475649;
		const _returnValueRvpBFfq = await _HelpvtDrykQ.visibleOptions(_cmddh6fRaY)
		const __argsDescriptioneAdDXsX = {
		
	}
		const _returnValuegsUqVDi = undefined;
		const __argsq4G8wvV = () => { return _returnValuegsUqVDi };
		const _cmdTbeUalr = {
			"_argsDescription": __argsDescriptioneAdDXsX,
		"_args": __argsq4G8wvV
	}
		const _returnValueq1Agn5J = await _HelpvtDrykQ.visibleArguments(_cmdTbeUalr)
		const _cmdICaxw7v = "fUnzGST9YlcE3jdiD2eXNGAWM9oocPOCsKPKk0s6Jnu5QRIq5HJEBQRyX775Jgy";
		const _sortSubcommandsCa5a2f5 = undefined;
		const _returnValueiOmCIWW = "aMYJXcKhtYjn1Q8V1Kyp7OpWD7O3jfYIg74hIsUfnMuAGJBdKnK50nTJ7ERqOvDDVaD";
		const _subcommandTermKWk73r9 = () => { return _returnValueiOmCIWW };
		const _helperXZfFWB1 = {
			"sortSubcommands": _sortSubcommandsCa5a2f5,
		"subcommandTerm": _subcommandTermKWk73r9
	}
		const _returnValueJCgGA35 = await _HelpvtDrykQ.longestSubcommandTermLength(_cmdICaxw7v, _helperXZfFWB1)
		const _returnValueTln7KJ9 = null;
		const _namek1j04rT = () => { return _returnValueTln7KJ9 };
		const _argumentLXJsTt = {
			"name": _namek1j04rT
	}
		const _returnValuekQaoDBa = await _HelpvtDrykQ.argumentTerm(_argumentLXJsTt)
		const _cmdtaU2QUD = "W1Bfk6vOjKcTbEYPASpoSsM57CBF";
		const _helperTLmgmn4 = false;
		const _returnValueMy2id25 = await _HelpvtDrykQ.padWidth(_cmdtaU2QUD, _helperTLmgmn4)
	});

	it('test for Help', async () => {
		const _HelpY6KUj9L = new Help()
		const _arrayValueTMLccgy = false;
		const _arrayValuegglLjoc = 7.221524341583795;
		const _returnValuebSnSvY = [_arrayValueTMLccgy, _arrayValuegglLjoc]
		const _descriptionniiMYB4 = () => { return _returnValuebSnSvY };
		const _cmdBU1C2xR = {
			"description": _descriptionniiMYB4
	}
		const _returnValueRfcpbfl = await _HelpY6KUj9L.subcommandDescription(_cmdBU1C2xR)
		const __argsU2B02Ld = {
		
	}
		const __namejP41H5B = -3.7518054015953792;
		const __aliaseskacZsU0 = {
		
	}
		const _optionssYrfzGj = {
		
	}
		const _cmdWZZqye4 = {
			"_args": __argsU2B02Ld,
		"_name": __namejP41H5B,
		"_aliases": __aliaseskacZsU0,
		"options": _optionssYrfzGj
	}
		const _returnValueNSAQ4t = await _HelpY6KUj9L.subcommandTerm(_cmdWZZqye4)
		const _optionsZQZQYE6 = {
		
	}
		const _arrayValuezYRtwZ = "Nborkd9t6IH1vgBQ28myMwFExnRn4uw8KJXWVGYQ4SpFbBRxxHzUY";
		const __hasHelpOptionS1QMTAk = [_arrayValuezYRtwZ]
		const __helpShortFlagLdzbabD = {
		
	}
		const _returnValuedkcV8yz = undefined;
		const __findOptionCFwgpX4 = () => { return _returnValuedkcV8yz };
		const __helpLongFlagdeha96O = -2.9559400012622934;
		const _returnValuejeMzMOR = 6.434468646402603;
		const _createOptionUE5PUP6 = () => { return _returnValuejeMzMOR };
		const __helpDescriptionhjMzFl = "HqAHNlrSDhwYRn7HdtHDPt2z3Jc3t2Ayuleug67GylCj3xSoLQZoGTSXPNMV1MhM4Lj8FLnaVez";
		const _returnValueMQgmTBG = "3EwiklqajCXDhr45iuFcItTGsfSR4apxx0UF4WiT";
		const __helpFlagseWC50Tz = () => { return _returnValueMQgmTBG };
		const _cmdinCbPTz = {
			"options": _optionsZQZQYE6,
		"_hasHelpOption": __hasHelpOptionS1QMTAk,
		"_helpShortFlag": __helpShortFlagLdzbabD,
		"_findOption": __findOptionCFwgpX4,
		"_helpLongFlag": __helpLongFlagdeha96O,
		"createOption": _createOptionUE5PUP6,
		"_helpDescription": __helpDescriptionhjMzFl,
		"_helpFlags": __helpFlagseWC50Tz
	}
		const _returnValueifoHGKT = await _HelpY6KUj9L.visibleOptions(_cmdinCbPTz)
		const _returnValuea01BmU5 = 8.136019467508628;
		const _flagsp8DKt68 = () => { return _returnValuea01BmU5 };
		const _optionpCoBPhW = {
			"flags": _flagsp8DKt68
	}
		const _returnValuer4OE1fh = await _HelpY6KUj9L.optionTerm(_optionpCoBPhW)
		const _argumentxMZrhJW = -6.12284917611605;
		const _returnValueg6AT4W = await _HelpY6KUj9L.argumentDescription(_argumentxMZrhJW)
	});

	it('test for Help', async () => {
		const _HelpxdjpR3G = new Help()
		const _arrayValuemGLdrGx = "Ajgq9HVg5tZt3Qa9bGBWFLMCBd3yfU5N49ftgfv1ndLV1DCAWaIuskeV";
		const _arrayValuewXwN3lt = {
		
	}
		const _argumentNFh7haK = [_arrayValuemGLdrGx, _arrayValuewXwN3lt]
		const _returnValueMoxWkHl = await _HelpxdjpR3G.argumentDescription(_argumentNFh7haK)
		const _arrayValuekybWx1J = null;
		const _arrayValueIO2C4in = [_arrayValuekybWx1J]
		const _cmdMvjxWF3 = [_arrayValueIO2C4in]
		const _returnValueIEktJ3 = await _HelpxdjpR3G.subcommandDescription(_cmdMvjxWF3)
		const _arrayValueMxfrSDf = 9.17662489518304;
		const _arrayValuedR3xYqi = 0.3048448554294563;
		const _optionJc2Orl = [_arrayValueMxfrSDf, _arrayValuedR3xYqi]
		const _returnValueyvl2UOL = await _HelpxdjpR3G.optionDescription(_optionJc2Orl)
		const __nameXXevwDp = {
		
	}
		const __aliasesaOQDEXA = {
		
	}
		const _returnValueqA4NXd = 3.04642101108408;
		const _parentMibl1M1 = () => { return _returnValueqA4NXd };
		const _usagecho3X69 = true;
		const _cmdhVvfn5o = {
			"_name": __nameXXevwDp,
		"_aliases": __aliasesaOQDEXA,
		"parent": _parentMibl1M1,
		"usage": _usagecho3X69
	}
		const _returnValueB4LFIz = await _HelpxdjpR3G.commandUsage(_cmdhVvfn5o)
	});

	it('test for Help', async () => {
		const _HelpHBxFHM = new Help()
		const _returnValuesFUBr2M = 7.548419024824302;
		const _matchQDzfm6h = () => { return _returnValuesFUBr2M };
		const _returnValueLEcJJ4U = "7CoeekF5";
		const _substrFoPYDRU = () => { return _returnValueLEcJJ4U };
		const _strjesR7os = {
			"match": _matchQDzfm6h,
		"substr": _substrFoPYDRU
	}
		const _widthGa1wuKd = -3.1855542540157264;
		const _indentRpxqja = -1.5012071156216624;
		const _minColumnWidthtPyIOOH = 6.1835383357064835;
		const _returnValuex8fivk = await _HelpHBxFHM.wrap(_strjesR7os, _widthGa1wuKd, _indentRpxqja, _minColumnWidthtPyIOOH)
		const _arrayValueINTJ85t = undefined;
		const _arrayValueJtfvqjW = 9.480762402872514;
		const _cmdoT7pcww = [_arrayValueINTJ85t, _arrayValueJtfvqjW]
		const _returnValueZhhaYE5 = await _HelpHBxFHM.visibleArguments(_cmdoT7pcww)
		const _returnValueg6Tt5o4 = {
		
	}
		const _arrayValuedYP5oFq = () => { return _returnValueg6Tt5o4 };
		const _arrayValueSmzSpYo = {
		
	}
		const _arrayValuePtYmVjg = {
		
	}
		const _arrayValuexFMqRQ6 = [_arrayValuePtYmVjg]
		const _optionSoq1iB = [_arrayValuedYP5oFq, _arrayValueSmzSpYo, _arrayValuexFMqRQ6]
		const _returnValueEpGDOA = await _HelpHBxFHM.optionTerm(_optionSoq1iB)
	});

	it('test for Help', async () => {
		const _HelpsgXf9J0 = new Help()
		const _commandsOb6hRTk = {
		
	}
		const _returnValuemWhFOSb = true;
		const __hasImplicitHelpCommandyc6MngX = () => { return _returnValuemWhFOSb };
		const __helpCommandnameAndArgsIyC5hNF = {
		
	}
		const _returnValuea9eyRK = "zi5yMgbE2JnIJS8UAreeDFMqV3DaWN";
		const _createCommandycLhEhP = () => { return _returnValuea9eyRK };
		const __helpCommandDescriptionqMiuQ20 = true;
		const _cmdj8h3wvF = {
			"commands": _commandsOb6hRTk,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandyc6MngX,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsIyC5hNF,
		"createCommand": _createCommandycLhEhP,
		"_helpCommandDescription": __helpCommandDescriptionqMiuQ20
	}
		const _returnValuedz7RdwE = await _HelpsgXf9J0.visibleCommands(_cmdj8h3wvF)
		const _cmdVZhWjWv = true;
		const _arrayValueJO8P1d1 = false;
		const _helperBLhksf = [_arrayValueJO8P1d1]
		const _returnValueKxurgwc = await _HelpsgXf9J0.longestOptionTermLength(_cmdVZhWjWv, _helperBLhksf)
	});

	it('test for Help', async () => {
		const _HelpmSq8yrQ = new Help()
		const _strnq2pPIm = "cPTRP4E";
		const _widthGG84Oj = 4.134672647185207;
		const _indentMDMvNVL = 0.7784290465935264;
		const _minColumnWidthKgZHle = 3.333429691826037;
		const _returnValueF965Rp = await _HelpmSq8yrQ.wrap(_strnq2pPIm, _widthGG84Oj, _indentMDMvNVL, _minColumnWidthKgZHle)
		const _returnValueHIzxqZz = null;
		const _arrayValuebpE60Vf = () => { return _returnValueHIzxqZz };
		const _arrayValueDR6jXNd = -5.990775649952212;
		const _arrayValueEwmWKOL = undefined;
		const _arrayValueDvX1KmS = undefined;
		const _arrayValuemSFDLzd = undefined;
		const _arrayValuenRBoeNV = "GYuqwcqqqmHS2HpI7bmfP9wD1B7WYF8UjdLA7WB3UriDFOKdO8Tp9AOMI9euG8IYqdVs78yefXf2nLOcXQSrWVJuTfi";
		const _arrayValuenMgPJs7 = [_arrayValueDvX1KmS, _arrayValuemSFDLzd, _arrayValuenRBoeNV]
		const _arrayValuebzIa0bn = -9.798893207461298;
		const _arrayValuetLqMcR2 = [_arrayValuebzIa0bn]
		const _returnValueihZoqU = null;
		const _arrayValueHKf4DZJ = () => { return _returnValueihZoqU };
		const _arrayValuehrdVsVE = 6.547489623736276;
		const _arrayValueBMpsyJS = [_arrayValueHKf4DZJ, _arrayValuehrdVsVE]
		const _arrayValueGNtkRhG = [_arrayValuenMgPJs7, _arrayValuetLqMcR2, _arrayValueBMpsyJS]
		const _cmdRharBnx = [_arrayValuebpE60Vf, _arrayValueDR6jXNd, _arrayValueEwmWKOL, _arrayValueGNtkRhG]
		const _returnValueLGurNU9 = await _HelpmSq8yrQ.visibleOptions(_cmdRharBnx)
	});

	it('test for Help', async () => {
		const _HelpQekgyAk = new Help()
		const _strurUNp4O = "8G7w1G8QMCl3jKQqIRf7UNsh9QVaHYKfolkmTjd9iQQm1dxeBI";
		const _widthsTjMfdw = -0.8019287351703568;
		const _indentNMTfzG = 3.488730555565292;
		const _minColumnWidthKyaBtGH = -1.0117716401381056;
		const _returnValueWmoS8OH = await _HelpQekgyAk.wrap(_strurUNp4O, _widthsTjMfdw, _indentNMTfzG, _minColumnWidthKyaBtGH)
		const _strilHfUHm = "c5Otzw9u";
		const _widthjBr5xE5 = -4.393151461622949;
		const _indent6uMAib = -1.8178396410217132;
		const _minColumnWidthek0f20z = -9.977274557667686;
		const _returnValueqHVecJ3 = await _HelpQekgyAk.wrap(_strilHfUHm, _widthjBr5xE5, _indent6uMAib, _minColumnWidthek0f20z)
		const _arrayValueubO63h = "ZJngoTojs4WYJmueN8NicJxWGm3dvYNDGkd2eaa9GVnpCYW";
		const _arrayValuegTZYEPP = true;
		const _arrayValueOlEDi2f = [_arrayValueubO63h, _arrayValuegTZYEPP]
		const _argumentvS9nP2a = [_arrayValueOlEDi2f]
		const _returnValuey2Sanj0 = await _HelpQekgyAk.argumentDescription(_argumentvS9nP2a)
	});

	it('test for Help', async () => {
		const _HelpFfTel2Y = new Help()
		const _flagsOZ7M7Qw = "vjDjE2MRxgCSthMOTz1vdLEIyPOf9FW51AQUOhKrq15UkT9kSOTarlc5Y";
		const _descriptionJlZ0LpC = null;
		const _cmdhJbsDBk = new Option(_flagsOZ7M7Qw, _descriptionJlZ0LpC)
		const _argm2G4OnF = {
		
	}
		const _returnValueLIzcwix = await _cmdhJbsDBk.is(_argm2G4OnF)
		const _mandatoryQqqC7c9 = undefined;
		const _returnValueUl6rnF1 = await _cmdhJbsDBk.makeOptionMandatory(_mandatoryQqqC7c9)
		const _valueCD1EEtt = false;
		const _returnValueW6LRKDg = {
		
	}
		const _concatQ9NpE8g = () => { return _returnValueW6LRKDg };
		const _previousmDZftBf = {
			"concat": _concatQ9NpE8g
	}
		const _returnValuetuQVG1I = await _cmdhJbsDBk._concatValue(_valueCD1EEtt, _previousmDZftBf)
		const _returnValueERnrYHV = null;
		const _includesqwTp3A6 = () => { return _returnValueERnrYHV };
		const _returnValuefquJPXC = 5.914126500474868;
		const _joinyjXN07Z = () => { return _returnValuefquJPXC };
		const _valuesFw2laEL = {
			"includes": _includesqwTp3A6,
		"join": _joinyjXN07Z
	}
		const _returnValuepG5M0nc = await _cmdhJbsDBk.choices(_valuesFw2laEL)
		const _fnGsZYczB = undefined;
		const _returnValuePdW8eo8 = await _cmdhJbsDBk.argParser(_fnGsZYczB)
		const _returnValuebhzxZTM = await _HelpFfTel2Y.commandDescription(_cmdhJbsDBk)
		const _cmdnFVtpdN = "r3YNAzTdeg5QqaAWKnhPTSpud54lxMiXS5m6Zy5VWyafi0h3b";
		const _returnValuelo1vwIJ = await _HelpFfTel2Y.commandUsage(_cmdnFVtpdN)
		const _nameS0cit7s = null;
		const _cmdwWeI3rq = new Command(_nameS0cit7s)
		const _erroraF32mcu = true;
		const _commandvSdcHJA = {
		
	}
		const _contextOptionsJtrczbn = {
			"error": _erroraF32mcu,
		"command": _commandvSdcHJA
	}
		const _returnValuea07Ns4 = await _cmdwWeI3rq.help(_contextOptionsJtrczbn)
		const _combineZCRr2O = true;
		const _returnValuewRUwvzE = await _cmdwWeI3rq.combineFlagAndOptionalValue(_combineZCRr2O)
		const _mandatoryEvGQnhZ = 9.387258686548662;
		const _configQyoYyZ = {
			"mandatory": _mandatoryEvGQnhZ
	}
		const _flagsmpIu5em = undefined;
		const _descriptionYQVReiT = null;
		const _fnaQJIE88 = {
		
	}
		const _returnValuePtoQR2O = true;
		const _defaultValueZDfP1FH = () => { return _returnValuePtoQR2O };
		const _returnValueYifQZwP = await _cmdwWeI3rq._optionEx(_configQyoYyZ, _flagsmpIu5em, _descriptionYQVReiT, _fnaQJIE88, _defaultValueZDfP1FH)
		const _returnValuewnGBCjK = await _HelpFfTel2Y.subcommandDescription(_cmdwWeI3rq)
		const _cmdeBDWyj3 = undefined;
		const _arrayValuewvC5uKo = "Bi9VJ7LftiStn2mHEmdVasAyZR1Lz5W5nZo6hHKNwZxsPWmObb7xdYtn9I9IhQvrNJYxV";
		const _arrayValuejlVnuvT = "XmKnfK2q8IeEnzzEGLKTkXxeODdK7OylD9b1fmkfsnTR9aELaE5vHRNSHBaqQshjM8IQ";
		const _arrayValuefdPD6Gz = false;
		const _helperIuylSMD = [_arrayValuewvC5uKo, _arrayValuejlVnuvT, _arrayValuefdPD6Gz]
		const _returnValueTrpgDt0 = await _HelpFfTel2Y.longestSubcommandTermLength(_cmdeBDWyj3, _helperIuylSMD)
	});

	it('test for Help', async () => {
		const _HelpHZTk6X6 = new Help()
		const _nameFrnW8PO = true;
		const _cmdWRcTJod = new Command(_nameFrnW8PO)
		const _returnValueHZgxBJ = await _cmdWRcTJod._hasImplicitHelpCommand()
		const _keyv7s0dzE = null;
		const _returnValueZjq6H0V = undefined;
		const _valuehU1LkAN = () => { return _returnValueZjq6H0V };
		const _sourcet7hj5tC = undefined;
		const _returnValuevTs5amX = await _cmdWRcTJod.setOptionValueWithSource(_keyv7s0dzE, _valuehU1LkAN, _sourcet7hj5tC)
		const _positionalCJO5Rf = false;
		const _returnValuebv9ih6 = await _cmdWRcTJod.enablePositionalOptions(_positionalCJO5Rf)
		const _positionalJd14XEJ = false;
		const _returnValueeJxsZIK = await _cmdWRcTJod.enablePositionalOptions(_positionalJd14XEJ)
		const _returnValueRg3arl = await _HelpHZTk6X6.visibleCommands(_cmdWRcTJod)
	});

	it('test for Help', async () => {
		const _HelpI6CUQK = new Help()
		const _arrayValuegKQtot = null;
		const _optionh4diS5 = [_arrayValuegKQtot]
		const _returnValuemm8jBAq = await _HelpI6CUQK.optionDescription(_optionh4diS5)
		const _arrayValuedJgEziv = null;
		const _arrayValueRz8pLym = "RNFIDb5BczbACd17VJC7qGoMoINPbmtrN3mtivzjy5MjJmGflYrXwPZsgV6IylLYrxQ2pgpFVsPUjR4tEsgC";
		const _arrayValuelKqkn19 = 5.720404092362692;
		const _optionBp2XThu = [_arrayValuedJgEziv, _arrayValueRz8pLym, _arrayValuelKqkn19]
		const _returnValueVo5EXPm = await _HelpI6CUQK.optionDescription(_optionBp2XThu)
		const _nameZHv1UM = false;
		const _cmdjYwHhDz = new Command(_nameZHv1UM)
		const _sourceCommandkWZR9hE = -1.428339996092621;
		const _returnValuekEOT29o = await _cmdjYwHhDz.copyInheritedSettings(_sourceCommandkWZR9hE)
		const _returnValuezokCS9F = null;
		const _returnValueRSrQlXx = () => { return _returnValuezokCS9F };
		const _sliceGPda2W2 = () => { return _returnValueRSrQlXx };
		const _argvyxVkNYn = {
			"slice": _sliceGPda2W2
	}
		const _returnValueT6wWHsH = await _cmdjYwHhDz.parseOptions(_argvyxVkNYn)
		const _returnValuextcWODv = await _HelpI6CUQK.subcommandTerm(_cmdjYwHhDz)
		const _cmdYwEhCc4 = "ldFjborjisSUCNwPVg81VmOXRaSr6PoGDmT3LV";
		const _arrayValuefZLfQGe = "hvAD6e4KafItr9y2uzmqznRuShIoUYLRzLl";
		const _arrayValueJx96exO = 7.609905023886444;
		const _returnValueYJQVCEv = [_arrayValuefZLfQGe, _arrayValueJx96exO]
		const _helpernSRvaf7 = () => { return _returnValueYJQVCEv };
		const _returnValueyI6bXIr = await _HelpI6CUQK.formatHelp(_cmdYwEhCc4, _helpernSRvaf7)
	});

	it('test for Help', async () => {
		const _HelpKpCtMpF = new Help()
		const _nameB52QqUk = false;
		const _arrayValuePyocm8B = undefined;
		const _arrayValueCFhAiWp = "9OaYJYYHEVUFwRwtjiBYYC2WUkVTUfVcedQg3YRn6DppXwGb1DM5fOLns5Co8laN";
		const _arrayValueIQBMFmh = true;
		const _arrayValuetIPnRvi = false;
		const _arrayValuecPTkd1G = [_arrayValueIQBMFmh, _arrayValuetIPnRvi]
		const _descriptionRm2PQao = [_arrayValuePyocm8B, _arrayValueCFhAiWp, _arrayValuecPTkd1G]
		const _argumentLWXcwma = new Argument(_nameB52QqUk, _descriptionRm2PQao)
		const _valuezXAyAaz = "JINmgKm9Dq7jteNxJXk2Eqb4g419d9VAoTCvjn5gKcHoel9YXYsC";
		const _descriptionHuxxjDT = {
		
	}
		const _returnValuevBeRT0c = await _argumentLWXcwma.default(_valuezXAyAaz, _descriptionHuxxjDT)
		const _returnValueDdy17DA = await _HelpKpCtMpF.argumentDescription(_argumentLWXcwma)
		const _returnValuedE6PCbT = "uUByuNMb5Cgvj1yhrGahO9krcVPJbY2xCIxQ35YMLnKIwbpidU9yfW";
		const _arrayValueWL2ARq = () => { return _returnValuedE6PCbT };
		const _arrayValueqhNuX9d = 2.836194971255754;
		const _arrayValueSRuPbh2 = [_arrayValueqhNuX9d]
		const _optionKZ3qMkM = [_arrayValueWL2ARq, _arrayValueSRuPbh2]
		const _returnValuebWJAFVc = await _HelpKpCtMpF.optionTerm(_optionKZ3qMkM)
		const _returnValuetUfLCSi = -7.651055323946457;
		const _cmdbDT80AK = () => { return _returnValuetUfLCSi };
		const _arrayValuemDUmVZQ = "a8SPNVOrOV27qilj1a8RnohKQrtpbNNmC9kEG5wTOzJXFmlYtx5XMDsmXtLi5oW";
		const _arrayValueEG6e1xB = "Qdc5F7a72T6zCzUL2oL651sMPIeh2XH1aYVwA0abKKY6f9mX8dBy";
		const _arrayValueVuN4MZH = [_arrayValuemDUmVZQ, _arrayValueEG6e1xB]
		const _arrayValueOltnT8n = 5.293356689883492;
		const _arrayValuepUxoUqO = -9.933313418704849;
		const _arrayValueByP59Wm = null;
		const _arrayValuesmlpjC = "IIIDVxQU9VyF9t4UXI62eGxkRAXoWrIKiiN8ESujknxRo1novAd2rzDO8le8fCS04lMHvkIkKl8";
		const _arrayValueBiqGfbh = false;
		const _returnValue7fIi8r = [_arrayValueByP59Wm, _arrayValuesmlpjC, _arrayValueBiqGfbh]
		const _returnValuejlYqW8r = () => { return _returnValue7fIi8r };
		const _arrayValuehcKdoD2 = () => { return _returnValuejlYqW8r };
		const _arrayValuerdUAOrf = null;
		const _arrayValuejjxYxo9 = [_arrayValuepUxoUqO, _arrayValuehcKdoD2, _arrayValuerdUAOrf]
		const _helperWgVyi5G = [_arrayValueVuN4MZH, _arrayValueOltnT8n, _arrayValuejjxYxo9]
		const _returnValuehduYE0N = await _HelpKpCtMpF.formatHelp(_cmdbDT80AK, _helperWgVyi5G)
	});

	it('test for Help', async () => {
		const _HelpX8FxShK = new Help()
		const _nameGdqCVK6 = false;
		const _cmdH1mxATt = new Command(_nameGdqCVK6)
		const _arrayValueQ7b46Ng = false;
		const _arrayValueOMyozD = 3.838662340299541;
		const _arrayValuerniyCPv = null;
		const _name7sXvcs = [_arrayValueQ7b46Ng, _arrayValueOMyozD, _arrayValuerniyCPv]
		const _descriptionFUGfBEt = "yqh0RFgNtwpOe5jtxQ4jqCLYFmEzVhjqRzhk4A5lkqc6MdO1wRQnjcFrDMYN9RJkzCTVl9VCxxpc1uOgBVOla";
		const _returnValueT6ouOeC = await _cmdH1mxATt.createArgument(_name7sXvcs, _descriptionFUGfBEt)
		const _enableOrNameAndArgsOJ03yMf = "49lP3VP9eOEGZSomYA68MtjZizXo5HmyPlVKtqc6LEREtRT7l1jQ0bwaFn9axQdwNu2810PDydrWY9GQUze";
		const _descriptionokEVwFh = null;
		const _returnValueTCWd8dM = await _cmdH1mxATt.addHelpCommand(_enableOrNameAndArgsOJ03yMf, _descriptionokEVwFh)
		const _returnValuenYcDh6 = await _cmdH1mxATt._hasImplicitHelpCommand()
		const _returnValueKESQji = "ReAwx3bqF7AzQF4ufRY9y5a0IkbNe6RirSwFnLl7YippsEwaE6uHCaPsJXmuGlO";
		const _contextOptionsqcWxtxR = () => { return _returnValueKESQji };
		const _returnValueMGgD40 = await _cmdH1mxATt.outputHelp(_contextOptionsqcWxtxR)
		const _returnValueQpZVH9 = false;
		const _keyheiiGQF = () => { return _returnValueQpZVH9 };
		const _returnValuehZdHOl = null;
		const _valuelD5pPS = () => { return _returnValuehZdHOl };
		const _sourcejSHDhdV = 5.157017737524193;
		const _returnValueMQcJOju = await _cmdH1mxATt.setOptionValueWithSource(_keyheiiGQF, _valuelD5pPS, _sourcejSHDhdV)
		const _returnValuedaQuh2 = await _HelpX8FxShK.visibleCommands(_cmdH1mxATt)
		const _cmdgCDDQKZ = null;
		const _helper2b2cbz = new Help()
		const _cmdsKCJqXu = 3.5581511370804897;
		const _returnValuepr8HBTM = true;
		const _visibleOptionsYXQuZOv = () => { return _returnValuepr8HBTM };
		const _returnValuewLGBPIz = 3.2001668076887917;
		const _optionTermPsyDLhp = () => { return _returnValuewLGBPIz };
		const _helperBf6PXAw = {
			"visibleOptions": _visibleOptionsYXQuZOv,
		"optionTerm": _optionTermPsyDLhp
	}
		const _returnValueW5B9Oij = await _helper2b2cbz.longestOptionTermLength(_cmdsKCJqXu, _helperBf6PXAw)
		const _cmdrZCpcGC = 3.396347532332637;
		const _arrayValueC0z794b = -4.5554596429657845;
		const _arrayValueSw5hZF7 = null;
		const _returnValueZQyei39 = [_arrayValueC0z794b, _arrayValueSw5hZF7]
		const _returnValuecv9n0bI = () => { return _returnValueZQyei39 };
		const _helperORAFHFP = () => { return _returnValuecv9n0bI };
		const _returnValueH8Qopf = await _helper2b2cbz.padWidth(_cmdrZCpcGC, _helperORAFHFP)
		const _returnValuekq8o7kA = await _HelpX8FxShK.formatHelp(_cmdgCDDQKZ, _helper2b2cbz)
	});
})