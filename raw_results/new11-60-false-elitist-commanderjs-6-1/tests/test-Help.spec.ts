export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpsCpVfia = new Help()
		const _commandsEGbBm6A = {
		
	}
		const _returnValuepeZEqhb = 3.443059669121828;
		const __hasImplicitHelpCommandvCOGFdd = () => { return _returnValuepeZEqhb };
		const __helpCommandnameAndArgsuiONIv5 = {
		
	}
		const _arrayValuexGPzJIS = "OuNd2y6H4ESjcdgKYzjuooaGt";
		const _returnValuezQqpUqe = -0.013571608423742276;
		const _returnValueqjx7Umg = () => { return _returnValuezQqpUqe };
		const _returnValueIy3qWEt = () => { return _returnValueqjx7Umg };
		const _arrayValuewmu9sG9 = () => { return _returnValueIy3qWEt };
		const _returnValuec4hlKcM = [_arrayValuexGPzJIS, _arrayValuewmu9sG9]
		const _createCommands2ZSaNu = () => { return _returnValuec4hlKcM };
		const __helpCommandDescriptionXy262rP = "0kD0DaSuWRkom1x28Y8mFHp5ilDA3hMVe3xh4tNFkVshG1L7Rsi2WCxcdhc7DeGP7qNk7T5";
		const _cmdAxQEuQE = {
			"commands": _commandsEGbBm6A,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandvCOGFdd,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsuiONIv5,
		"createCommand": _createCommands2ZSaNu,
		"_helpCommandDescription": __helpCommandDescriptionXy262rP
	}
		const _returnValueLAHGlu5 = await _HelpsCpVfia.visibleCommands(_cmdAxQEuQE)
		const _cmdEeKG8Bt = undefined;
		const _arrayValueHsBH2r = null;
		const _sortSubcommandsVqagVv = [_arrayValueHsBH2r]
		const _returnValuejYv663K = "PVODq8tSXC5lQdBdLpPhvgDM3EtzsMPrNpDE7glcP2pW9ttk53RappbawSO2UaaqWfaeGTwA9FXCKdE3sdoDvgFYdTR5";
		const _subcommandTermYTIJcSZ = () => { return _returnValuejYv663K };
		const _helperDIgwJgD = {
			"sortSubcommands": _sortSubcommandsVqagVv,
		"subcommandTerm": _subcommandTermYTIJcSZ
	}
		const _returnValue5EFA0B = await _HelpsCpVfia.formatHelp(_cmdEeKG8Bt, _helperDIgwJgD)
		const _arrayValueoUCyKZT = []
		const _arrayValueCcrQyEn = null;
		const _arrayValuexE2mxit = undefined;
		const _arrayValuepd6kfx = "Bmf54Ma3mlMrscu9JLmV3sVlOBr2IxxN2dOa54SgYoUdaq1k";
		const _returnValuetSSl4UP = [_arrayValueoUCyKZT, _arrayValueCcrQyEn, _arrayValuexE2mxit, _arrayValuepd6kfx]
		const _descriptionFsfHUko = () => { return _returnValuetSSl4UP };
		const _cmdUgz33y = {
			"description": _descriptionFsfHUko
	}
		const _returnValueeBiMS4D = await _HelpsCpVfia.commandDescription(_cmdUgz33y)
	});

	it('test for Help', async () => {
		const _Helpa9JErxf = new Help()
		const __argssIjjdPN = {
		
	}
		const __namew7f0fYY = -2.414131239565882;
		const __aliasesnNSJ8Yp = {
		
	}
		const _optionsPdRBZD = {
		
	}
		const _cmdjl3FMk = {
			"_args": __argssIjjdPN,
		"_name": __namew7f0fYY,
		"_aliases": __aliasesnNSJ8Yp,
		"options": _optionsPdRBZD
	}
		const _returnValueQzgxVZn = await _Helpa9JErxf.subcommandTerm(_cmdjl3FMk)
		const _arrayValueQTOGJhK = []
		const _returnValues4oBwNb = [_arrayValueQTOGJhK]
		const _namem7HNl4t = () => { return _returnValues4oBwNb };
		const _argumentr6tQuBI = {
			"name": _namem7HNl4t
	}
		const _returnValueGbsJ3uV = await _Helpa9JErxf.argumentTerm(_argumentr6tQuBI)
		const __argsDescriptionCFhFmG = {
		
	}
		const __argsgPIbgwU = {
		
	}
		const _cmdVXeBv3P = {
			"_argsDescription": __argsDescriptionCFhFmG,
		"_args": __argsgPIbgwU
	}
		const _returnValuefwTgnER = await _Helpa9JErxf.visibleArguments(_cmdVXeBv3P)
		const _returnValuer7mfKdd = undefined;
		const _returnValuewWPArYk = () => { return _returnValuer7mfKdd };
		const _matchTLbQOiS = () => { return _returnValuewWPArYk };
		const _substrvQBuF15 = "zixlGj0ImWzPhdyIe1rrk22uwRfUDbA8ipUrywNK7XkU0WlTIDm6Ga1ovRrOYBLq1V";
		const _strtVmcXiM = {
			"match": _matchTLbQOiS,
		"substr": _substrvQBuF15
	}
		const _widthTIX5Rk1 = 6.471737045802403;
		const _indentrNfikf5 = -8.937102740450861;
		const _minColumnWidthH1Wc7WA = 4.146440802913585;
		const _returnValueJHrl7pV = await _Helpa9JErxf.wrap(_strtVmcXiM, _widthTIX5Rk1, _indentrNfikf5, _minColumnWidthH1Wc7WA)
	});

	it('test for Help', async () => {
		const _HelpLrXO2H = new Help()
		const _cmdoIPivoK = {
		
	}
		const _returnValueIpp8uN5 = null;
		const _visibleOptionsdIZvQvq = () => { return _returnValueIpp8uN5 };
		const _returnValuea0PNgwd = undefined;
		const _optionTermD6WWVMo = () => { return _returnValuea0PNgwd };
		const _helperKR11csv = {
			"visibleOptions": _visibleOptionsdIZvQvq,
		"optionTerm": _optionTermD6WWVMo
	}
		const _returnValuembZyt4l = await _HelpLrXO2H.longestOptionTermLength(_cmdoIPivoK, _helperKR11csv)
		const __argsfkNOtTd = {
		
	}
		const __namev93xWDN = -8.46793970620571;
		const __aliasesrUq2rDO = {
		
	}
		const _optionseRkanfR = {
		
	}
		const _cmdSoHhNkH = {
			"_args": __argsfkNOtTd,
		"_name": __namev93xWDN,
		"_aliases": __aliasesrUq2rDO,
		"options": _optionseRkanfR
	}
		const _returnValueFdEC2Fa = await _HelpLrXO2H.subcommandTerm(_cmdSoHhNkH)
		const _cmdADNJwDG = null;
		const _returnValue6VC2gz = false;
		const _visibleArgumentsBA0A6z = () => { return _returnValue6VC2gz };
		const _arrayValueKuIwOR9 = {
		
	}
		const _returnValuei24esjE = [_arrayValueKuIwOR9]
		const _argumentTerm7a0ky9 = () => { return _returnValuei24esjE };
		const _helpernLJChuT = {
			"visibleArguments": _visibleArgumentsBA0A6z,
		"argumentTerm": _argumentTerm7a0ky9
	}
		const _returnValueRN3JgP = await _HelpLrXO2H.longestArgumentTermLength(_cmdADNJwDG, _helpernLJChuT)
	});

	it('test for Help', async () => {
		const _HelpvYqfd62 = new Help()
		const _cmdARkTt8z = 5.323358424298945;
		const _sortSubcommandsYggYymW = "BDhsKyf3nTkEvDa1ImmHzpTzoWSOqTLxnRGlmtTg03HmqFe3Ni5YGqq";
		const _returnValuevSGv3tF = "h1osncYgNvW4FWIYUMOmHOR9zsbE";
		const _subcommandTermitY7jO = () => { return _returnValuevSGv3tF };
		const _helperpqWY7gE = {
			"sortSubcommands": _sortSubcommandsYggYymW,
		"subcommandTerm": _subcommandTermitY7jO
	}
		const _returnValueyZEQy26 = await _HelpvYqfd62.longestSubcommandTermLength(_cmdARkTt8z, _helperpqWY7gE)
		const _returnValuehsQUlFV = undefined;
		const _flagsmsoY8KN = () => { return _returnValuehsQUlFV };
		const _optioni0calq = {
			"flags": _flagsmsoY8KN
	}
		const _returnValueW0qruiW = await _HelpvYqfd62.optionTerm(_optioni0calq)
		const __argst19pADN = {
		
	}
		const __namejmcZ93U = -1.2869064290660202;
		const __aliasesQzsl96 = {
		
	}
		const _optionsD8udb8N = {
		
	}
		const _cmdhobGBFn = {
			"_args": __argst19pADN,
		"_name": __namejmcZ93U,
		"_aliases": __aliasesQzsl96,
		"options": _optionsD8udb8N
	}
		const _returnValueQp0KKpw = await _HelpvYqfd62.subcommandTerm(_cmdhobGBFn)
		const _optionsrkk5IVL = {
		
	}
		const __hasHelpOptionkfHlkgT = true;
		const __helpShortFlagQqC8mBC = "zVi";
		const _returnValueZ0unssR = null;
		const __findOptionBA75WY = () => { return _returnValueZ0unssR };
		const __helpLongFlagTAbtZZ = 1.4118496042664788;
		const _returnValueso7IHI1 = "fUbKeJsh1KVJDLvx9";
		const _createOptionpW6wau = () => { return _returnValueso7IHI1 };
		const __helpDescriptionq4KxVEd = {
		
	}
		const __helpFlagsFrZukk2 = null;
		const _cmdkCDpYPq = {
			"options": _optionsrkk5IVL,
		"_hasHelpOption": __hasHelpOptionkfHlkgT,
		"_helpShortFlag": __helpShortFlagQqC8mBC,
		"_findOption": __findOptionBA75WY,
		"_helpLongFlag": __helpLongFlagTAbtZZ,
		"createOption": _createOptionpW6wau,
		"_helpDescription": __helpDescriptionq4KxVEd,
		"_helpFlags": __helpFlagsFrZukk2
	}
		const _returnValueB3jZTOC = await _HelpvYqfd62.visibleOptions(_cmdkCDpYPq)
	});

	it('test for Help', async () => {
		const _HelpfMwpPq = new Help()
		const _returnValuehG8RjTa = true;
		const _descriptionJ2bFLx = () => { return _returnValuehG8RjTa };
		const _cmdZawHnl7 = {
			"description": _descriptionJ2bFLx
	}
		const _returnValueLizu9kY = await _HelpfMwpPq.subcommandDescription(_cmdZawHnl7)
		const _returnValueUMaEr7 = undefined;
		const _descriptionhDClXd3 = () => { return _returnValueUMaEr7 };
		const _cmdPn14du5 = {
			"description": _descriptionhDClXd3
	}
		const _returnValuevYNOwUw = await _HelpfMwpPq.commandDescription(_cmdPn14du5)
		const _cmdUR9ahgo = "DT2i5R";
		const _returnValuehpszJdO = false;
		const _longestOptionTermLengthmQ40FG4 = () => { return _returnValuehpszJdO };
		const _returnValueTGMV7gV = undefined;
		const _longestSubcommandTermLengthk46nM3r = () => { return _returnValueTGMV7gV };
		const _returnValuexpKoWsW = 9.99903906539441;
		const _longestArgumentTermLengthLVfp0N3 = () => { return _returnValuexpKoWsW };
		const _helperwHALXYw = {
			"longestOptionTermLength": _longestOptionTermLengthmQ40FG4,
		"longestSubcommandTermLength": _longestSubcommandTermLengthk46nM3r,
		"longestArgumentTermLength": _longestArgumentTermLengthLVfp0N3
	}
		const _returnValueOpRClV = await _HelpfMwpPq.padWidth(_cmdUR9ahgo, _helperwHALXYw)
		const _flagspD0wn2X = {
		
	}
		const _optiongdbncfG = {
			"flags": _flagspD0wn2X
	}
		const _returnValueEsUkjDU = await _HelpfMwpPq.optionTerm(_optiongdbncfG)
		const __argsElNv2WM = {
		
	}
		const __namePrYIbkv = 4.8223441851466795;
		const __aliasesWOe3eaF = {
		
	}
		const _optionsPh6WzG = {
		
	}
		const _cmdwQdpLLm = {
			"_args": __argsElNv2WM,
		"_name": __namePrYIbkv,
		"_aliases": __aliasesWOe3eaF,
		"options": _optionsPh6WzG
	}
		const _returnValueQJ7BSh5 = await _HelpfMwpPq.subcommandTerm(_cmdwQdpLLm)
	});

	it('test for Help', async () => {
		const _HelpIuhZBMk = new Help()
		const _returnValueSXxHmKW = 6.338524890621841;
		const _nameo9YsE8x = () => { return _returnValueSXxHmKW };
		const _argumentYKsnoJN = {
			"name": _nameo9YsE8x
	}
		const _returnValuexwGcux8 = await _HelpIuhZBMk.argumentTerm(_argumentYKsnoJN)
	});

	it('test for Help', async () => {
		const _HelpmEhzh3 = new Help()
		const _cmdIskm5E2 = 0.25780898008965636;
		const _returnValueVCjignq = {
		
	}
		const _visibleArgumentsNNxgsLh = () => { return _returnValueVCjignq };
		const _returnValueHA5h3Sr = "os99Iitb1WqlWuKIT19rpQWiBTAEGqWKXmurYWRu9XfM4Sj23illMne";
		const _argumentTermau46Cmi = () => { return _returnValueHA5h3Sr };
		const _helperTOPczln = {
			"visibleArguments": _visibleArgumentsNNxgsLh,
		"argumentTerm": _argumentTermau46Cmi
	}
		const _returnValueI59rW6y = await _HelpmEhzh3.longestArgumentTermLength(_cmdIskm5E2, _helperTOPczln)
	});

	it('test for Help', async () => {
		const _HelpghtvMrc = new Help()
		const _cmdNJxPjQm = "Vb4Kl98VI2GWYKtjhmF3Sy3NXyklmlEJJu4SdvADUztxRUdvrpX";
		const _returnValueKU5WBw = await _HelpghtvMrc.visibleOptions(_cmdNJxPjQm)
		const _cmdjXvrWy2 = undefined;
		const _returnValuegtxONUD = false;
		const _longestOptionTermLengthpiCYZyo = () => { return _returnValuegtxONUD };
		const _arrayValueanzJjYr = false;
		const _arrayValueyH53vn = -4.034216275238051;
		const _arrayValueH0qa3z = true;
		const _returnValuedG1XI8u = [_arrayValueanzJjYr, _arrayValueyH53vn, _arrayValueH0qa3z]
		const _longestSubcommandTermLengthzJvwfpF = () => { return _returnValuedG1XI8u };
		const _returnValueG5FMwgJ = "gBAuITjG4E99goqqK8QmYtITDu22IYP2QIs5tTIfuJQKkglGTyCrOsYLWif9sXA9Hp5EN51gvg7agiL5n9682NX48";
		const _longestArgumentTermLengthW2gqIL = () => { return _returnValueG5FMwgJ };
		const _helperQvEY5c2 = {
			"longestOptionTermLength": _longestOptionTermLengthpiCYZyo,
		"longestSubcommandTermLength": _longestSubcommandTermLengthzJvwfpF,
		"longestArgumentTermLength": _longestArgumentTermLengthW2gqIL
	}
		const _returnValueXQCTvRW = await _HelpghtvMrc.padWidth(_cmdjXvrWy2, _helperQvEY5c2)
		const _returnValuej8ieQdW = "JwjiMzTEc6MsrJmMAE";
		const _nameuVnhcnp = () => { return _returnValuej8ieQdW };
		const _argumentuVvzFST = {
			"name": _nameuVnhcnp
	}
		const _returnValueVazEo0i = await _HelpghtvMrc.argumentTerm(_argumentuVvzFST)
		const _cmdj33NnYb = true;
		const _sortSubcommandsrOQNuOt = "mKVIAQh7EutlBLM9wUDM6oJ6ne1QMYmiEJ16cqfaVmCfQRJNUuFPFxJSeIxz4wRy4vKUX8Wr4Kkyx";
		const _returnValueTcLd0Xc = -9.41135838823118;
		const _subcommandTermnS7t0lM = () => { return _returnValueTcLd0Xc };
		const _helperuUibe4Y = {
			"sortSubcommands": _sortSubcommandsrOQNuOt,
		"subcommandTerm": _subcommandTermnS7t0lM
	}
		const _returnValueEtIejkl = await _HelpghtvMrc.longestSubcommandTermLength(_cmdj33NnYb, _helperuUibe4Y)
	});

	it('test for Help', async () => {
		const _Helpm9f7Ueg = new Help()
		const _argChoicesPyCCHH = {
		
	}
		const _defaultValueNLdHIK = undefined;
		const _arrayValueBXucU8x = null;
		const _defaultValueDescriptionWt2HHo = [_arrayValueBXucU8x]
		const _returnValuenv4NU7 = null;
		const _arrayValue40dvQU = () => { return _returnValuenv4NU7 };
		const _arrayValuebPE30K = false;
		const _arrayValueqCo3IM = null;
		const _descriptionaPXqc1q = [_arrayValue40dvQU, _arrayValuebPE30K, _arrayValueqCo3IM]
		const _argumentsA0m0wk = {
			"argChoices": _argChoicesPyCCHH,
		"defaultValue": _defaultValueNLdHIK,
		"defaultValueDescription": _defaultValueDescriptionWt2HHo,
		"description": _descriptionaPXqc1q
	}
		const _returnValueWFGBWLh = await _Helpm9f7Ueg.argumentDescription(_argumentsA0m0wk)
		const __argsDescriptionPAdaP7x = {
		
	}
		const __argsNF0wJl2 = {
		
	}
		const _cmdjKLcgJr = {
			"_argsDescription": __argsDescriptionPAdaP7x,
		"_args": __argsNF0wJl2
	}
		const _returnValuevUyckvG = await _Helpm9f7Ueg.visibleArguments(_cmdjKLcgJr)
	});

	it('test for Help', async () => {
		const _Helpps1Ph9B = new Help()
		const __nametmDpz6a = {
		
	}
		const __aliasescgAFIFH = {
		
	}
		const _parentusX89un = {
		
	}
		const _returnValueoQVGDNJ = {
		
	}
		const _usageq9jd1KP = () => { return _returnValueoQVGDNJ };
		const _cmdJX6ESA = {
			"_name": __nametmDpz6a,
		"_aliases": __aliasescgAFIFH,
		"parent": _parentusX89un,
		"usage": _usageq9jd1KP
	}
		const _returnValuelWz6or = await _Helpps1Ph9B.commandUsage(_cmdJX6ESA)
		const _argumentMVaWZSk = false;
		const _returnValuehuT6b4w = await _Helpps1Ph9B.argumentTerm(_argumentMVaWZSk)
		const _cmdd7Zzwc2 = -9.615030665563115;
		const _sortSubcommandsxYwqRRq = true;
		const _returnValueDLZq8GC = undefined;
		const _subcommandTermIALrE6k = () => { return _returnValueDLZq8GC };
		const _helperM1IRHqM = {
			"sortSubcommands": _sortSubcommandsxYwqRRq,
		"subcommandTerm": _subcommandTermIALrE6k
	}
		const _returnValueyObEOB = await _Helpps1Ph9B.longestSubcommandTermLength(_cmdd7Zzwc2, _helperM1IRHqM)
		const _cmdA8TfYQ = -7.79104515169738;
		const _arrayValueNlRRdiX = -4.5055147460413245;
		const _arrayValuetrrnas8 = false;
		const _returnValueI6E17VO = [_arrayValueNlRRdiX, _arrayValuetrrnas8]
		const _longestOptionTermLengthx3bW7pI = () => { return _returnValueI6E17VO };
		const _returnValueNyZDdrX = false;
		const _longestSubcommandTermLengthhQovo4z = () => { return _returnValueNyZDdrX };
		const _returnValuexd3zbSH = null;
		const _longestArgumentTermLengthmqF6WbR = () => { return _returnValuexd3zbSH };
		const _helperxB3WQo = {
			"longestOptionTermLength": _longestOptionTermLengthx3bW7pI,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhQovo4z,
		"longestArgumentTermLength": _longestArgumentTermLengthmqF6WbR
	}
		const _returnValueozOASHP = await _Helpps1Ph9B.padWidth(_cmdA8TfYQ, _helperxB3WQo)
	});

	it('test for Help', async () => {
		const _HelpE9e9z44 = new Help()
		const __argsDescriptionWYsDGV = {
		
	}
		const __argseIs2bVo = {
		
	}
		const _cmdsnGsEPf = {
			"_argsDescription": __argsDescriptionWYsDGV,
		"_args": __argseIs2bVo
	}
		const _returnValuegwokIX6 = await _HelpE9e9z44.visibleArguments(_cmdsnGsEPf)
		const _argChoicesWubRiRO = {
		
	}
		const _defaultValuecxzG3kw = undefined;
		const _defaultValueDescriptionXDLQqJe = "RdwFN4M44OdYXHKQZ";
		const _descriptionxtM97RP = {
		
	}
		const _argumentQFLOfJZ = {
			"argChoices": _argChoicesWubRiRO,
		"defaultValue": _defaultValuecxzG3kw,
		"defaultValueDescription": _defaultValueDescriptionXDLQqJe,
		"description": _descriptionxtM97RP
	}
		const _returnValuelrP4n3D = await _HelpE9e9z44.argumentDescription(_argumentQFLOfJZ)
		const __argseVk7HZZ = {
		
	}
		const __namexlOhfIX = -2.430990158587994;
		const __aliasesWdAImI = {
		
	}
		const _optionsPsfOMS = {
		
	}
		const _cmdKL145vl = {
			"_args": __argseVk7HZZ,
		"_name": __namexlOhfIX,
		"_aliases": __aliasesWdAImI,
		"options": _optionsPsfOMS
	}
		const _returnValueYiXdpM2 = await _HelpE9e9z44.subcommandTerm(_cmdKL145vl)
		const _cmdciLKod = false;
		const _returnValueXdkavQA = true;
		const _sortSubcommands5vhuWG = () => { return _returnValueXdkavQA };
		const _returnValueXEzSXLc = null;
		const _subcommandTermYzzTgp = () => { return _returnValueXEzSXLc };
		const _helper7ZOrZR = {
			"sortSubcommands": _sortSubcommands5vhuWG,
		"subcommandTerm": _subcommandTermYzzTgp
	}
		const _returnValuecOMZqrz = await _HelpE9e9z44.longestSubcommandTermLength(_cmdciLKod, _helper7ZOrZR)
		const _argumentQIdTTLA = "y1wcqMeUjpoGJkLuhvkCPpJrQyO7wPHbgmFnVBTW85NC4UUwEgcUjSpG9YXyE";
		const _returnValueoGJ3znP = await _HelpE9e9z44.argumentTerm(_argumentQIdTTLA)
	});

	it('test for Help', async () => {
		const _HelpPPD2oo8 = new Help()
		const _argChoicesuDo5t1c = {
		
	}
		const _returnValueICrqsiW = "NrUOrBBXENHENaYnOCDoL5S5DNIurupuDq2NAyGNI1783y5BirJ5yokpBA2RDP93yQo4kWq9hsHPW4K7GSu";
		const _returnValueID5TWYT = () => { return _returnValueICrqsiW };
		const _negateFMwGWv9 = () => { return _returnValueID5TWYT };
		const _defaultValueRcl5XgX = undefined;
		const _defaultValueDescriptionEZhbTv = false;
		const _envVarJdOzBTT = undefined;
		const _descriptionWg8qjZX = undefined;
		const _optionlEo0Yb7 = {
			"argChoices": _argChoicesuDo5t1c,
		"negate": _negateFMwGWv9,
		"defaultValue": _defaultValueRcl5XgX,
		"defaultValueDescription": _defaultValueDescriptionEZhbTv,
		"envVar": _envVarJdOzBTT,
		"description": _descriptionWg8qjZX
	}
		const _returnValueUhFXAMj = await _HelpPPD2oo8.optionDescription(_optionlEo0Yb7)
		const _arrayValueqitFjSL = undefined;
		const _arrayValueDMtF2Cj = true;
		const _arrayValuelZ67pi = null;
		const _returnValuezjsaD5I = [_arrayValueqitFjSL, _arrayValueDMtF2Cj, _arrayValuelZ67pi]
		const _descriptionCEz65sB = () => { return _returnValuezjsaD5I };
		const _cmdGYsfVc = {
			"description": _descriptionCEz65sB
	}
		const _returnValuecE9g0pr = await _HelpPPD2oo8.commandDescription(_cmdGYsfVc)
		const _cmdSzJWod7 = null;
		const _sortSubcommandslW650DC = true;
		const _returnValueDXzA0Xk = true;
		const _subcommandTermnnH7yf = () => { return _returnValueDXzA0Xk };
		const _helperjCcrCqV = {
			"sortSubcommands": _sortSubcommandslW650DC,
		"subcommandTerm": _subcommandTermnnH7yf
	}
		const _returnValueaQcixfJ = await _HelpPPD2oo8.formatHelp(_cmdSzJWod7, _helperjCcrCqV)
		const __argsDescriptionVz3LaXL = {
		
	}
		const __argsEHeoiUi = {
		
	}
		const _cmdFunF1jE = {
			"_argsDescription": __argsDescriptionVz3LaXL,
		"_args": __argsEHeoiUi
	}
		const _returnValuefsLqJs2 = await _HelpPPD2oo8.visibleArguments(_cmdFunF1jE)
	});

	it('test for Help', async () => {
		const _HelpSI309Rl = new Help()
		const _returnValueifRVJil = "23B2jHE59fzE3AniOoKNGOjjc72BAmFJvcvD1bJfHPR96OX7qEqNqyJTwl7quFDzL9oyJFvmO";
		const _matchH3ET3tm = () => { return _returnValueifRVJil };
		const _returnValuew5GCjKa = null;
		const _substretbSKYd = () => { return _returnValuew5GCjKa };
		const _strpD2y6us = {
			"match": _matchH3ET3tm,
		"substr": _substretbSKYd
	}
		const _widthyA2mZ3f = 6.946941542260291;
		const _indentoA0NWI = -1.157422404851495;
		const _minColumnWidthHBINx3 = -1.8626742918579993;
		const _returnValueVAc2pDk = await _HelpSI309Rl.wrap(_strpD2y6us, _widthyA2mZ3f, _indentoA0NWI, _minColumnWidthHBINx3)
		const __nameQUt5Ogm = {
		
	}
		const __aliasesppGsuKz = {
		
	}
		const _parentvSQxUAE = {
		
	}
		const _arrayValuehJnAzU4 = undefined;
		const _arrayValuehCsoNZg = "ezNbX6sXqEVAkiu24pFI0Gnmc6DOZJnnfNpxty5o5Oki9vzXtXBiSOmxXf65vHZoAf7WKuEc";
		const _returnValueGl8YNn = [_arrayValuehJnAzU4, _arrayValuehCsoNZg]
		const _usageDfqoami = () => { return _returnValueGl8YNn };
		const _cmdMEW3TPS = {
			"_name": __nameQUt5Ogm,
		"_aliases": __aliasesppGsuKz,
		"parent": _parentvSQxUAE,
		"usage": _usageDfqoami
	}
		const _returnValueYv1L9e4 = await _HelpSI309Rl.commandUsage(_cmdMEW3TPS)
		const _arrayValueqwwyE6S = -1.315164692556646;
		const _arrayValuepLIK8bW = false;
		const _arrayValuePbi1AmB = undefined;
		const _arrayValueBVgd7Cc = 1.0141675610823917;
		const _flagshZ5xbs7 = [_arrayValueqwwyE6S, _arrayValuepLIK8bW, _arrayValuePbi1AmB, _arrayValueBVgd7Cc]
		const _optionRXNU66j = {
			"flags": _flagshZ5xbs7
	}
		const _returnValuebyRZHUM = await _HelpSI309Rl.optionTerm(_optionRXNU66j)
	});

	it('test for Help', async () => {
		const _HelpiFdzgno = new Help()
		const _returnValueGObB8XW = true;
		const _nameJMWQwYb = () => { return _returnValueGObB8XW };
		const _argumentoODcbVm = {
			"name": _nameJMWQwYb
	}
		const _returnValue3XCO7R = await _HelpiFdzgno.argumentTerm(_argumentoODcbVm)
		const _argChoicesEoMq2Dw = {
		
	}
		const _negateFxEy0cZ = false;
		const _defaultValueIRMytib = undefined;
		const _defaultValueDescriptionvf3nhHH = -7.136748921122514;
		const _envVaryEACjOr = -7.108613309110142;
		const _arrayValueSsKX6Zt = null;
		const _arrayValuenb7WhDd = "b6ib4NhYyXrPXaimdIh7elZL";
		const _descriptionJD5spJ = [_arrayValueSsKX6Zt, _arrayValuenb7WhDd]
		const _optionBURiWH6 = {
			"argChoices": _argChoicesEoMq2Dw,
		"negate": _negateFxEy0cZ,
		"defaultValue": _defaultValueIRMytib,
		"defaultValueDescription": _defaultValueDescriptionvf3nhHH,
		"envVar": _envVaryEACjOr,
		"description": _descriptionJD5spJ
	}
		const _returnValueHlQm8I = await _HelpiFdzgno.optionDescription(_optionBURiWH6)
	});

	it('test for Help', async () => {
		const _HelpFqcFWt = new Help()
		const _argumentQaXIQxJ = []
		const _returnValuersA48rh = await _HelpFqcFWt.argumentDescription(_argumentQaXIQxJ)
		const __namemtFtoSt = {
		
	}
		const __aliasesuaqZIww = {
		
	}
		const _parentrZpHPgv = {
		
	}
		const _returnValueEnPlGD8 = -3.0313483718995213;
		const _usagee2S7JQU = () => { return _returnValueEnPlGD8 };
		const _cmdRh8o4oz = {
			"_name": __namemtFtoSt,
		"_aliases": __aliasesuaqZIww,
		"parent": _parentrZpHPgv,
		"usage": _usagee2S7JQU
	}
		const _returnValuenF2aeB = await _HelpFqcFWt.commandUsage(_cmdRh8o4oz)
		const _arrayValuepFVmCwe = false;
		const _cmdpnHoqmn = [_arrayValuepFVmCwe]
		const _sortSubcommandsUqUnsCl = 8.302715319416617;
		const _returnValueMwfGdRm = null;
		const _subcommandTermB5pIWVC = () => { return _returnValueMwfGdRm };
		const _helpertQ0iucx = {
			"sortSubcommands": _sortSubcommandsUqUnsCl,
		"subcommandTerm": _subcommandTermB5pIWVC
	}
		const _returnValueEF3CNeC = await _HelpFqcFWt.formatHelp(_cmdpnHoqmn, _helpertQ0iucx)
		const _returnValueM0EpIS6 = true;
		const __argsz3M9hM3 = () => { return _returnValueM0EpIS6 };
		const __nameQaXBTUe = -1.8832595586067011;
		const __aliasesMDqkhpH = {
		
	}
		const _optionssJeSXa = {
		
	}
		const _cmde8Jyct = {
			"_args": __argsz3M9hM3,
		"_name": __nameQaXBTUe,
		"_aliases": __aliasesMDqkhpH,
		"options": _optionssJeSXa
	}
		const _returnValueuPtd88o = await _HelpFqcFWt.subcommandTerm(_cmde8Jyct)
	});

	it('test for Help', async () => {
		const _Helpg4lKJA1 = new Help()
		const _argChoicesLSADFDc = {
		
	}
		const _negateF9tbbBt = -7.593112340960509;
		const _defaultValueIs1wwJM = undefined;
		const _defaultValueDescriptionCabh5b = {
		
	}
		const _envVarR5GoVRT = 1.5804403642402924;
		const _descriptionsqxSvZ = false;
		const _optionLI2rg0W = {
			"argChoices": _argChoicesLSADFDc,
		"negate": _negateF9tbbBt,
		"defaultValue": _defaultValueIs1wwJM,
		"defaultValueDescription": _defaultValueDescriptionCabh5b,
		"envVar": _envVarR5GoVRT,
		"description": _descriptionsqxSvZ
	}
		const _returnValueG6CInWw = await _Helpg4lKJA1.optionDescription(_optionLI2rg0W)
		const _arrayValueYti0Z2 = "5c6C6mYy71u6xLsbuiQ9uGqC9IvCF1nZKuhsAtouj2fIrMUu3Dw9SRXAyfAoa5ghlTLpXDo49";
		const _arrayValueUfqe3lU = null;
		const _arrayValueErGzqU = [_arrayValueUfqe3lU]
		const _argumentyxQCeWj = [_arrayValueYti0Z2, _arrayValueErGzqU]
		const _returnValueMGIbBAY = await _Helpg4lKJA1.argumentTerm(_argumentyxQCeWj)
	});

	it('test for Help', async () => {
		const _HelpOLtwElq = new Help()
		const _returnValueSYgxgk = undefined;
		const _matchfZHzjKo = () => { return _returnValueSYgxgk };
		const _returnValueCyO8GmT = 9.852933682429374;
		const _substrZACMs11 = () => { return _returnValueCyO8GmT };
		const _strs2H0EQK = {
			"match": _matchfZHzjKo,
		"substr": _substrZACMs11
	}
		const _widthlmp3A3 = -0.37555789606270906;
		const _indentgcIQtnU = 6.555606139510569;
		const _minColumnWidthVptD69b = -8.133559403127261;
		const _returnValueUSbYwia = await _HelpOLtwElq.wrap(_strs2H0EQK, _widthlmp3A3, _indentgcIQtnU, _minColumnWidthVptD69b)
		const __nameAI1nr98 = {
		
	}
		const __aliasesc6xHHQu = {
		
	}
		const _parentYQKaep = {
		
	}
		const _returnValueMguXIe = false;
		const _usageP18gue7 = () => { return _returnValueMguXIe };
		const _cmdPt7F3X8 = {
			"_name": __nameAI1nr98,
		"_aliases": __aliasesc6xHHQu,
		"parent": _parentYQKaep,
		"usage": _usageP18gue7
	}
		const _returnValueEFi4Gvy = await _HelpOLtwElq.commandUsage(_cmdPt7F3X8)
		const _cmdS8lgtx0 = undefined;
		const _arrayValueyUUHPc1 = false;
		const _arrayValueVzztzf = {
		
	}
		const _sortSubcommandsFdvHUmD = [_arrayValueyUUHPc1, _arrayValueVzztzf]
		const _subcommandTerm5M4O6J = {
		
	}
		const _helpermk5Ixay = {
			"sortSubcommands": _sortSubcommandsFdvHUmD,
		"subcommandTerm": _subcommandTerm5M4O6J
	}
		const _returnValueLZ1BvdV = await _HelpOLtwElq.longestSubcommandTermLength(_cmdS8lgtx0, _helpermk5Ixay)
	});

	it('test for Help', async () => {
		const _HelpNUxF7gC = new Help()
		const __nameXvecmy1 = {
		
	}
		const _arrayValueKXmrPyd = null;
		const _arrayValueey7vKs = undefined;
		const _arrayValuerpBryoR = "XkxjrfYSBA6d4zlVUgm9eTiA1QAQmYzsa52KzPhTTa7XQIdqkpeSmCPhWWbeO0JomLV2kusj5VeC1";
		const _returnValueWh5SLgM = null;
		const _arrayValueqH9SRcr = () => { return _returnValueWh5SLgM };
		const _arrayValueimZBeCz = [_arrayValuerpBryoR, _arrayValueqH9SRcr]
		const _arrayValuejOUiWaq = {
		
	}
		const _arrayValueiExKeLo = [_arrayValueKXmrPyd, _arrayValueey7vKs, _arrayValueimZBeCz, _arrayValuejOUiWaq]
		const __aliasesGxRfkjr = [_arrayValueiExKeLo]
		const _parentxr7EZGs = {
		
	}
		const _returnValueW6XPQza = null;
		const _usageQRhbpd4 = () => { return _returnValueW6XPQza };
		const _cmdG4h1T2b = {
			"_name": __nameXvecmy1,
		"_aliases": __aliasesGxRfkjr,
		"parent": _parentxr7EZGs,
		"usage": _usageQRhbpd4
	}
		const _returnValueTA6y1zw = await _HelpNUxF7gC.commandUsage(_cmdG4h1T2b)
		const _returnValueeMoxI5 = false;
		const _descriptionoXDPWJR = () => { return _returnValueeMoxI5 };
		const _cmd3xIifJ = {
			"description": _descriptionoXDPWJR
	}
		const _returnValueOQlGzXr = await _HelpNUxF7gC.commandDescription(_cmd3xIifJ)
	});

	it('test for Help', async () => {
		const _HelpqEb3rGw = new Help()
		const _returnValueUw1X09W = null;
		const _matchm8CIMwk = () => { return _returnValueUw1X09W };
		const _returnValueqvePpfP = null;
		const _substrJe5Y5O = () => { return _returnValueqvePpfP };
		const _strqr5yqNv = {
			"match": _matchm8CIMwk,
		"substr": _substrJe5Y5O
	}
		const _widthsAbYxEN = 0.050108653682009674;
		const _indentqiuUZ13 = -1.952932416822149;
		const _minColumnWidthF4s9sW3 = 7.697135563469004;
		const _returnValueGuT5KK = await _HelpqEb3rGw.wrap(_strqr5yqNv, _widthsAbYxEN, _indentqiuUZ13, _minColumnWidthF4s9sW3)
		const _cmdgsaOjxx = true;
		const _returnValueZMj6Ejx = true;
		const _returnValueXHYafQN = () => { return _returnValueZMj6Ejx };
		const _visibleArgumentsScea1xC = () => { return _returnValueXHYafQN };
		const _returnValueiFqUur7 = 1.018778228874094;
		const _argumentTermPfRNief = () => { return _returnValueiFqUur7 };
		const _helperEcOsjIU = {
			"visibleArguments": _visibleArgumentsScea1xC,
		"argumentTerm": _argumentTermPfRNief
	}
		const _returnValueGyvRb6M = await _HelpqEb3rGw.longestArgumentTermLength(_cmdgsaOjxx, _helperEcOsjIU)
		const __argsQdOLat4 = {
		
	}
		const __namezGaggXA = -0.04851665292345686;
		const __aliasesj0Buftq = {
		
	}
		const _arrayValueMAZTufd = undefined;
		const _optionsHBFvtTu = [_arrayValueMAZTufd]
		const _cmdiFwVIbg = {
			"_args": __argsQdOLat4,
		"_name": __namezGaggXA,
		"_aliases": __aliasesj0Buftq,
		"options": _optionsHBFvtTu
	}
		const _returnValueICNWW9 = await _HelpqEb3rGw.subcommandTerm(_cmdiFwVIbg)
	});

	it('test for Help', async () => {
		const _HelpLTnTBbx = new Help()
		const _arrayValueHJLWscL = false;
		const _commandsqWDegC = [_arrayValueHJLWscL]
		const _returnValueUh71Fyx = {
		
	}
		const __hasImplicitHelpCommandmRY0qBd = () => { return _returnValueUh71Fyx };
		const __helpCommandnameAndArgsVC3q4hF = {
		
	}
		const _returnValueziUuIvt = false;
		const _returnValuedfG4NAI = () => { return _returnValueziUuIvt };
		const _createCommandw6T3KGk = () => { return _returnValuedfG4NAI };
		const _arrayValueFSrs05 = false;
		const __helpCommandDescriptionnCWAMro = [_arrayValueFSrs05]
		const _cmdgtPqV7G = {
			"commands": _commandsqWDegC,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandmRY0qBd,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsVC3q4hF,
		"createCommand": _createCommandw6T3KGk,
		"_helpCommandDescription": __helpCommandDescriptionnCWAMro
	}
		const _returnValueaFnrUBw = await _HelpLTnTBbx.visibleCommands(_cmdgtPqV7G)
		const _cmdnPCYDsk = -7.5701500024409505;
		const _returnValuefcOtNSB = await _HelpLTnTBbx.commandUsage(_cmdnPCYDsk)
	});

	it('test for Help', async () => {
		const _HelpscH2j5o = new Help()
		const _argChoicesO2V1kNx = {
		
	}
		const _negateXMicn4t = 5.3029352051633065;
		const _defaultValueHR3hspf = undefined;
		const _defaultValueDescriptionnkOMMQv = {
		
	}
		const _envVarYB82uZU = false;
		const _descriptiontyh22fb = undefined;
		const _optionV7qxPu6 = {
			"argChoices": _argChoicesO2V1kNx,
		"negate": _negateXMicn4t,
		"defaultValue": _defaultValueHR3hspf,
		"defaultValueDescription": _defaultValueDescriptionnkOMMQv,
		"envVar": _envVarYB82uZU,
		"description": _descriptiontyh22fb
	}
		const _returnValueM8RKux = await _HelpscH2j5o.optionDescription(_optionV7qxPu6)
		const _returnValuevyUI4IB = null;
		const _descriptionLIw25mu = () => { return _returnValuevyUI4IB };
		const _cmdsKR96i = {
			"description": _descriptionLIw25mu
	}
		const _returnValueAMZZURd = await _HelpscH2j5o.subcommandDescription(_cmdsKR96i)
		const _arrayValueEiFltBQ = false;
		const _arrayValueWvdwYuW = "LoNn3qvK";
		const _arrayValueeHsIbNi = [_arrayValueWvdwYuW]
		const _argChoicesMJDs4U1 = [_arrayValueEiFltBQ, _arrayValueeHsIbNi]
		const _negategKYjLti = undefined;
		const _returnValueDuygPMv = undefined;
		const _defaultValueJ0FgKlc = () => { return _returnValueDuygPMv };
		const _defaultValueDescriptionV1OslOI = {
		
	}
		const _envVarKf53QW = undefined;
		const _descriptionoYgmVEb = undefined;
		const _options4GZEq2 = {
			"argChoices": _argChoicesMJDs4U1,
		"negate": _negategKYjLti,
		"defaultValue": _defaultValueJ0FgKlc,
		"defaultValueDescription": _defaultValueDescriptionV1OslOI,
		"envVar": _envVarKf53QW,
		"description": _descriptionoYgmVEb
	}
		const _returnValueuVKizT = await _HelpscH2j5o.optionDescription(_options4GZEq2)
		const _arrayValueQHSCsuZ = false;
		const _arrayValueZJnQ0Id = undefined;
		const _arrayValueBvTWpRJ = null;
		const _argChoicescCTn3QE = [_arrayValueQHSCsuZ, _arrayValueZJnQ0Id, _arrayValueBvTWpRJ]
		const _arrayValueZxJM4Zu = null;
		const _arrayValueTE3fO2t = "es1r7";
		const _arrayValueADE3C6H = true;
		const _negateFkTp7ee = [_arrayValueZxJM4Zu, _arrayValueTE3fO2t, _arrayValueADE3C6H]
		const _defaultValueChGBS6A = true;
		const _defaultValueDescriptionkh4W04b = -4.909535652800651;
		const _envVarU9ScXJv = undefined;
		const _descriptionvbYTMaV = "QRCUu0nYgMF6PsqdcCaYPUcqqNv3pY8GMXvTYV4y6yEPXJDMvPtgSxrNNQ1kA8XyjJmsN3SNyhKQoilwV0bQPTKVDIrU0ZH";
		const _optionW03y3wW = {
			"argChoices": _argChoicescCTn3QE,
		"negate": _negateFkTp7ee,
		"defaultValue": _defaultValueChGBS6A,
		"defaultValueDescription": _defaultValueDescriptionkh4W04b,
		"envVar": _envVarU9ScXJv,
		"description": _descriptionvbYTMaV
	}
		const _returnValueLf8gbGw = await _HelpscH2j5o.optionDescription(_optionW03y3wW)
	});

	it('test for Help', async () => {
		const _HelpaXPfP5T = new Help()
		const _arrayValuewjJalRr = {
		
	}
		const _optionsmdaK1Ee = [_arrayValuewjJalRr]
		const __hasHelpOptionTVQqUQC = "T9TutBAYdmx9CdwbY9JGRtHd4hBrFeqAnmW";
		const __helpShortFlageMJlTC1 = undefined;
		const _returnValueAFtR2jO = undefined;
		const __findOptionVTjJRm = () => { return _returnValueAFtR2jO };
		const __helpLongFlagVKvifUU = null;
		const _createOptionuzvPhQ9 = null;
		const _arrayValueRqbhSt = "EhFEZKQbjj9EY29kL0RRpWP5HD0koxuRFzaJpRPzzfkkJN83BlWWX";
		const _arrayValuerSup7p = null;
		const _arrayValueERaMfE = "8OvMKJC6M7zQ9EGcaC1yLGd85uURaorDtfGtnVeyF7JOXGTtqr9haN7zT2xHfWTJs7JApqZ1p";
		const _arrayValueLct7pVZ = 7.851098935317026;
		const __helpDescriptiont8lJDML = [_arrayValueRqbhSt, _arrayValuerSup7p, _arrayValueERaMfE, _arrayValueLct7pVZ]
		const __helpFlagsWG8atf = true;
		const _cmdVLJ37Gd = {
			"options": _optionsmdaK1Ee,
		"_hasHelpOption": __hasHelpOptionTVQqUQC,
		"_helpShortFlag": __helpShortFlageMJlTC1,
		"_findOption": __findOptionVTjJRm,
		"_helpLongFlag": __helpLongFlagVKvifUU,
		"createOption": _createOptionuzvPhQ9,
		"_helpDescription": __helpDescriptiont8lJDML,
		"_helpFlags": __helpFlagsWG8atf
	}
		const _returnValuexaXnDkl = await _HelpaXPfP5T.visibleOptions(_cmdVLJ37Gd)
	});
})