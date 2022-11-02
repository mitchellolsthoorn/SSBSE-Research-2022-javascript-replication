export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpeJbyLaG = new Help()
		const _argChoicesE77K8Ms = {
		
	}
		const _negatex3Tr1RE = null;
		const _defaultValueD7Xf7G = undefined;
		const _defaultValueDescriptionpZseTvM = -8.042133332808456;
		const _envVaru5EU392 = undefined;
		const _descriptionnpUlfHc = null;
		const _optionLJX70Hr = {
			"argChoices": _argChoicesE77K8Ms,
		"negate": _negatex3Tr1RE,
		"defaultValue": _defaultValueD7Xf7G,
		"defaultValueDescription": _defaultValueDescriptionpZseTvM,
		"envVar": _envVaru5EU392,
		"description": _descriptionnpUlfHc
	}
		const _returnValueW4FF094 = await _HelpeJbyLaG.optionDescription(_optionLJX70Hr)
		const _arrayValue8m5xtQ = null;
		const _arrayValuetbYtDHR = -1.3527940867491637;
		const _arrayValuexvG10hU = [_arrayValuetbYtDHR]
		const _flagsiBzL4HX = [_arrayValue8m5xtQ, _arrayValuexvG10hU]
		const _optionEdq28w6 = {
			"flags": _flagsiBzL4HX
	}
		const _returnValueQXc0WUt = await _HelpeJbyLaG.optionTerm(_optionEdq28w6)
	});

	it('test for Help', async () => {
		const _Help7eoAeF = new Help()
		const _commandsvAR1tOz = {
		
	}
		const _returnValueVevIFoZ = null;
		const __hasImplicitHelpCommandEAS5CYA = () => { return _returnValueVevIFoZ };
		const __helpCommandnameAndArgsuIqQkEX = {
		
	}
		const _returnValueeAxGJsP = 7.136587485585377;
		const _returnValueAOpA5mY = () => { return _returnValueeAxGJsP };
		const _createCommandFjawzZQ = () => { return _returnValueAOpA5mY };
		const _returnValueUqW8CW2 = null;
		const __helpCommandDescriptionYQqdsPp = () => { return _returnValueUqW8CW2 };
		const _cmdQB0to4 = {
			"commands": _commandsvAR1tOz,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandEAS5CYA,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsuIqQkEX,
		"createCommand": _createCommandFjawzZQ,
		"_helpCommandDescription": __helpCommandDescriptionYQqdsPp
	}
		const _returnValueyMvNib = await _Help7eoAeF.visibleCommands(_cmdQB0to4)
		const _argChoicessYxMXop = {
		
	}
		const _defaultValuee4rJj8R = undefined;
		const _defaultValueDescriptionPrp4a5 = true;
		const _descriptionpaSbjSq = false;
		const _argumentNO5Cqg = {
			"argChoices": _argChoicessYxMXop,
		"defaultValue": _defaultValuee4rJj8R,
		"defaultValueDescription": _defaultValueDescriptionPrp4a5,
		"description": _descriptionpaSbjSq
	}
		const _returnValueDKsXT9B = await _Help7eoAeF.argumentDescription(_argumentNO5Cqg)
		const _cmdpr9afEK = null;
		const _returnValueywxEfO6 = false;
		const _sortSubcommandsc3O6Vy5 = () => { return _returnValueywxEfO6 };
		const _returnValueqqKyF1N = "OwV72LEG91i29E7QELM0PQRC6UmyGzhzSaWiJoy2NURpaMzuDNCjU9XTCGIXeRr9p59Ip3JTEYy86sgaIar";
		const _subcommandTermXulYRRI = () => { return _returnValueqqKyF1N };
		const _helper3gvSlB = {
			"sortSubcommands": _sortSubcommandsc3O6Vy5,
		"subcommandTerm": _subcommandTermXulYRRI
	}
		const _returnValueg3kJG3U = await _Help7eoAeF.longestSubcommandTermLength(_cmdpr9afEK, _helper3gvSlB)
	});

	it('test for Help', async () => {
		const _HelpCzigFRN = new Help()
		const _returnValueFrgc9L9 = null;
		const _nameuVakFC3 = () => { return _returnValueFrgc9L9 };
		const _argumenti19rW21 = {
			"name": _nameuVakFC3
	}
		const _returnValueumZvkIO = await _HelpCzigFRN.argumentTerm(_argumenti19rW21)
		const _argChoicespSoEMXY = {
		
	}
		const _defaultValueWpHi2Po = undefined;
		const _arrayValueFnukuP = null;
		const _arrayValueqigBGDW = null;
		const _defaultValueDescriptionqAqBKHp = [_arrayValueFnukuP, _arrayValueqigBGDW]
		const _descriptionEoLtaSc = null;
		const _argumenty9XrUu = {
			"argChoices": _argChoicespSoEMXY,
		"defaultValue": _defaultValueWpHi2Po,
		"defaultValueDescription": _defaultValueDescriptionqAqBKHp,
		"description": _descriptionEoLtaSc
	}
		const _returnValueqLJ0nWS = await _HelpCzigFRN.argumentDescription(_argumenty9XrUu)
		const _cmdq634mSw = "1v6V2Da4osHwpppclqt";
		const _returnValuekPRCAOw = "MGowlVezuHRFGLZKtQrQUIM61nLS71S6WN3oNHRoqIAmTarosTghQltILvL7u3S4wZbFtHm7Z0BGT1";
		const _sortSubcommandsDXvssNn = () => { return _returnValuekPRCAOw };
		const _returnValueKQs9z1R = "BiPsBpqn8AqPAsf3WFfI1bhpbitnNLN4uruJDi6DoPrRQiczxxn";
		const _subcommandTermEfckqHI = () => { return _returnValueKQs9z1R };
		const _helperEhQp1k9 = {
			"sortSubcommands": _sortSubcommandsDXvssNn,
		"subcommandTerm": _subcommandTermEfckqHI
	}
		const _returnValuen9VHbMt = await _HelpCzigFRN.formatHelp(_cmdq634mSw, _helperEhQp1k9)
	});

	it('test for Help', async () => {
		const _HelpjDhTww = new Help()
		const _argChoiceso5QGrs4 = undefined;
		const _defaultValueKIwBX2N = undefined;
		const _defaultValueDescriptionzB3pOGZ = null;
		const _descriptionvNuNECh = undefined;
		const _argumentS6AybnV = {
			"argChoices": _argChoiceso5QGrs4,
		"defaultValue": _defaultValueKIwBX2N,
		"defaultValueDescription": _defaultValueDescriptionzB3pOGZ,
		"description": _descriptionvNuNECh
	}
		const _returnValueVWuMOhy = await _HelpjDhTww.argumentDescription(_argumentS6AybnV)
		const _cmdk3gohPF = []
		const _returnValueR2qsTY = await _HelpjDhTww.visibleOptions(_cmdk3gohPF)
	});

	it('test for Help', async () => {
		const _HelpgimHOQj = new Help()
		const _cmdR2VAgAi = null;
		const _sortSubcommandstVolut8 = undefined;
		const _returnValueFEA9Ej7 = "pvdtxXWrisi2PmLtWxwUCITATvrAP9x2GlUE7esioJObqKxASe6efK";
		const _subcommandTermOLebpdf = () => { return _returnValueFEA9Ej7 };
		const _helperXMMZwBW = {
			"sortSubcommands": _sortSubcommandstVolut8,
		"subcommandTerm": _subcommandTermOLebpdf
	}
		const _returnValueRB3mCuS = await _HelpgimHOQj.formatHelp(_cmdR2VAgAi, _helperXMMZwBW)
		const _cmdtHuxJzL = false;
		const _sortSubcommandswT1IZZR = null;
		const _returnValueWxreaA = -8.586812757937839;
		const _subcommandTermlWcUdo = () => { return _returnValueWxreaA };
		const _helperUwbJxzG = {
			"sortSubcommands": _sortSubcommandswT1IZZR,
		"subcommandTerm": _subcommandTermlWcUdo
	}
		const _returnValueavK6QQd = await _HelpgimHOQj.longestSubcommandTermLength(_cmdtHuxJzL, _helperUwbJxzG)
		const _arrayValueGZXW8W6 = 2.7374529881676857;
		const _arrayValueZskAitc = 2.9326338726802543;
		const _returnValueLPhQLJz = false;
		const _arrayValueWdBkV6 = () => { return _returnValueLPhQLJz };
		const _arrayValuejeARYQA = [_arrayValueGZXW8W6, _arrayValueZskAitc, _arrayValueWdBkV6]
		const _arrayValueiyVByoh = false;
		const _cmdZ0yhwBi = [_arrayValuejeARYQA, _arrayValueiyVByoh]
		const _returnValueKkERqoI = null;
		const _longestOptionTermLengthT7YAiNH = () => { return _returnValueKkERqoI };
		const _returnValuedweyNHe = true;
		const _longestSubcommandTermLengtht7hCIfY = () => { return _returnValuedweyNHe };
		const _returnValueoccRK4x = {
		
	}
		const _longestArgumentTermLengthQOgj3YF = () => { return _returnValueoccRK4x };
		const _helperAwEnxhk = {
			"longestOptionTermLength": _longestOptionTermLengthT7YAiNH,
		"longestSubcommandTermLength": _longestSubcommandTermLengtht7hCIfY,
		"longestArgumentTermLength": _longestArgumentTermLengthQOgj3YF
	}
		const _returnValueGD2VWKe = await _HelpgimHOQj.padWidth(_cmdZ0yhwBi, _helperAwEnxhk)
	});

	it('test for Help', async () => {
		const _Helpcv4VaO = new Help()
		const _cmdpt0ckSe = false;
		const _returnValueZ178OBc = await _Helpcv4VaO.subcommandTerm(_cmdpt0ckSe)
		const _argChoicesNsUqi9o = {
		
	}
		const _negateUUujo2g = "6eewrXx3nmWzwghkMZYc2wfayMO8wfege6a";
		const _defaultValuePqRZN2M = undefined;
		const _defaultValueDescriptionMHLkBMs = null;
		const _envVarpF5dK7B = undefined;
		const _descriptionaxmJiO = undefined;
		const _optionFdxSxaD = {
			"argChoices": _argChoicesNsUqi9o,
		"negate": _negateUUujo2g,
		"defaultValue": _defaultValuePqRZN2M,
		"defaultValueDescription": _defaultValueDescriptionMHLkBMs,
		"envVar": _envVarpF5dK7B,
		"description": _descriptionaxmJiO
	}
		const _returnValueb7aNXPf = await _Helpcv4VaO.optionDescription(_optionFdxSxaD)
		const _arrayValuek5x9D35 = null;
		const _arrayValueMxLa4cE = "1yiCqJq7XpEBRHLC7BUnZTCRWGCVr855MlQHjP6Cq0Jf6zHj1PEd6amBiF82YsEGHH6fxN3JrSwcz7hLWEOsMO";
		const _returnValueROZ792W = [_arrayValuek5x9D35, _arrayValueMxLa4cE]
		const _descriptionfwLfwFG = () => { return _returnValueROZ792W };
		const _cmdcAFNrAq = {
			"description": _descriptionfwLfwFG
	}
		const _returnValueaaqPnh7 = await _Helpcv4VaO.commandDescription(_cmdcAFNrAq)
	});

	it('test for Help', async () => {
		const _HelprfXEufW = new Help()
		const _returnValuein9Dcau = null;
		const _cmdUqVLABB = () => { return _returnValuein9Dcau };
		const _returnValueoxPV0uy = 1.864190607268526;
		const _visibleArguments5SPovG = () => { return _returnValueoxPV0uy };
		const _returnValued0WOD65 = true;
		const _argumentTermlHyJeqA = () => { return _returnValued0WOD65 };
		const _helpererHUQ9q = {
			"visibleArguments": _visibleArguments5SPovG,
		"argumentTerm": _argumentTermlHyJeqA
	}
		const _returnValueRnJrQK = await _HelprfXEufW.longestArgumentTermLength(_cmdUqVLABB, _helpererHUQ9q)
		const __argsvRURCCK = {
		
	}
		const __nameVPTsfs = null;
		const __aliasesuunblh = {
		
	}
		const _optionsjRz6Bq = {
		
	}
		const _cmdG6Rx7B = {
			"_args": __argsvRURCCK,
		"_name": __nameVPTsfs,
		"_aliases": __aliasesuunblh,
		"options": _optionsjRz6Bq
	}
		const _returnValuenGf0KP6 = await _HelprfXEufW.subcommandTerm(_cmdG6Rx7B)
		const _returnValueYrsK0rZ = null;
		const _descriptionA8T39tY = () => { return _returnValueYrsK0rZ };
		const _cmdE3VBpca = {
			"description": _descriptionA8T39tY
	}
		const _returnValueWXPRmla = await _HelprfXEufW.subcommandDescription(_cmdE3VBpca)
	});

	it('test for Help', async () => {
		const _Helpa72yg2M = new Help()
		const _cmdoArJ0DX = null;
		const _sortSubcommandsJYzndYJ = undefined;
		const _returnValueoNP9Fd1 = undefined;
		const _subcommandTermSp2hcNv = () => { return _returnValueoNP9Fd1 };
		const _helperwf0O7nr = {
			"sortSubcommands": _sortSubcommandsJYzndYJ,
		"subcommandTerm": _subcommandTermSp2hcNv
	}
		const _returnValueJfFBFEG = await _Helpa72yg2M.longestSubcommandTermLength(_cmdoArJ0DX, _helperwf0O7nr)
		const _cmd86rl8k = false;
		const _sortSubcommandsVpa7TQH = {
		
	}
		const _returnValueRHJSnsC = undefined;
		const _subcommandTermkmRsvp = () => { return _returnValueRHJSnsC };
		const _helperEeJQwkx = {
			"sortSubcommands": _sortSubcommandsVpa7TQH,
		"subcommandTerm": _subcommandTermkmRsvp
	}
		const _returnValueQ7Doshq = await _Helpa72yg2M.longestSubcommandTermLength(_cmd86rl8k, _helperEeJQwkx)
	});

	it('test for Help', async () => {
		const _HelpOjTzanb = new Help()
		const _arrayValueS1glyJ = undefined;
		const _arrayValueM3VBv0u = undefined;
		const _arrayValuemHBNOck = -4.219799031533799;
		const _returnValueSgBto2f = [_arrayValueS1glyJ, _arrayValueM3VBv0u, _arrayValuemHBNOck]
		const _descriptionAxQ9ZtG = () => { return _returnValueSgBto2f };
		const _cmdswjVzaF = {
			"description": _descriptionAxQ9ZtG
	}
		const _returnValueaXFh8n = await _HelpOjTzanb.subcommandDescription(_cmdswjVzaF)
		const _argChoiceso2zZboB = -2.7947711505521493;
		const _returnValuejjvMTwl = true;
		const _defaultValueAU6iU7X = () => { return _returnValuejjvMTwl };
		const _defaultValueDescriptionBIsfKBE = {
		
	}
		const _arrayValuebnTwnP3 = "7aEgqzGW7LmiLMn4eKHfTHET7crVEYtYqkPKeOtP4YRQPfXe9e8Z7h7uo9JfDWIDoOLQOVL";
		const _arrayValuefToRbnO = "5j8";
		const _arrayValueAxbiJVc = null;
		const _arrayValuers1KRba = undefined;
		const _descriptionUFpFHdk = [_arrayValuebnTwnP3, _arrayValuefToRbnO, _arrayValueAxbiJVc, _arrayValuers1KRba]
		const _argumentATUTJZV = {
			"argChoices": _argChoiceso2zZboB,
		"defaultValue": _defaultValueAU6iU7X,
		"defaultValueDescription": _defaultValueDescriptionBIsfKBE,
		"description": _descriptionUFpFHdk
	}
		const _returnValuePgwrgFN = await _HelpOjTzanb.argumentDescription(_argumentATUTJZV)
		const _flagsQAAbR7Q = "E1g1zQM1bezl1mvaBXjYGmUmDEbPLTJnYimUT24KRSkj5kum3oRjRi5DSDhtEEv";
		const _optionAwAmc07 = {
			"flags": _flagsQAAbR7Q
	}
		const _returnValueOScO76X = await _HelpOjTzanb.optionTerm(_optionAwAmc07)
	});

	it('test for Help', async () => {
		const _Helpw51yoni = new Help()
		const _cmdj9J6SWc = "UcbbCDdp2FR43j8GC77IH6p4cJ5W4NJc8TOcPu3edWz35ZwuUgsWisx7yFt1bnRs6M7RVbjqkvghHrmiIwxVNVmVdjlsI49A3Xs";
		const _returnValuexI79BeD = null;
		const _visibleOptionsvSTMibI = () => { return _returnValuexI79BeD };
		const _returnValueg44RBBP = true;
		const _returnValueQjgva9X = () => { return _returnValueg44RBBP };
		const _optionTermt5EX6jv = () => { return _returnValueQjgva9X };
		const _helperl7zOBNY = {
			"visibleOptions": _visibleOptionsvSTMibI,
		"optionTerm": _optionTermt5EX6jv
	}
		const _returnValueKu6AhEm = await _Helpw51yoni.longestOptionTermLength(_cmdj9J6SWc, _helperl7zOBNY)
	});

	it('test for Help', async () => {
		const _HelpA6xvj4o = new Help()
		const _arrayValuehhwkXAh = {
		
	}
		const _returnValueuZqwvZ3 = [_arrayValuehhwkXAh]
		const _matchTl3tFS = () => { return _returnValueuZqwvZ3 };
		const _arrayValuevkoTKPn = false;
		const _returnValueT7iJgzI = [_arrayValuevkoTKPn]
		const _substrbFsCDoM = () => { return _returnValueT7iJgzI };
		const _strrPwSpE6 = {
			"match": _matchTl3tFS,
		"substr": _substrbFsCDoM
	}
		const _width4aLulC = []
		const _indentEpRbXwj = false;
		const _minColumnWidthvz0uvAL = 1.0930178430808706;
		const _returnValueBNbJ3Qm = await _HelpA6xvj4o.wrap(_strrPwSpE6, _width4aLulC, _indentEpRbXwj, _minColumnWidthvz0uvAL)
	});

	it('test for Help', async () => {
		const _HelpPlQTHTh = new Help()
		const _returnValuevvwV9y = undefined;
		const _arrayValueB5KWATS = () => { return _returnValuevvwV9y };
		const _arrayValueenBd9qq = 8.091196315721717;
		const _returnValuejrwaAa0 = 7.638264077240645;
		const _arrayValueH2r61o = () => { return _returnValuejrwaAa0 };
		const _arrayValuevsvucWQ = 6.911287457910461;
		const _arrayValueQGWX9MQ = null;
		const _arrayValueCRCfk0R = [_arrayValuevsvucWQ, _arrayValueQGWX9MQ]
		const _arrayValuepabmFE2 = null;
		const _arrayValuevvbmKOh = [_arrayValueH2r61o, _arrayValueCRCfk0R, _arrayValuepabmFE2]
		const _flagsS5yzvkw = [_arrayValueB5KWATS, _arrayValueenBd9qq, _arrayValuevvbmKOh]
		const _optionCbAYZZ = {
			"flags": _flagsS5yzvkw
	}
		const _returnValueto2mYOk = await _HelpPlQTHTh.optionTerm(_optionCbAYZZ)
		const __argsDescriptionoFoaNzx = {
		
	}
		const __argsGoTkrL = {
		
	}
		const _cmde9iotCl = {
			"_argsDescription": __argsDescriptionoFoaNzx,
		"_args": __argsGoTkrL
	}
		const _returnValueIMZ1pJx = await _HelpPlQTHTh.visibleArguments(_cmde9iotCl)
	});

	it('test for Help', async () => {
		const _HelpCoqwQl = new Help()
		const _argChoiceseW9OTte = {
		
	}
		const _negatedijGVVu = -3.410014993851952;
		const _defaultValuemkCtl5i = undefined;
		const _arrayValueOBPxZJV = -7.553723241601613;
		const _arrayValueB8uCS0K = undefined;
		const _arrayValueEdeRgqd = [_arrayValueOBPxZJV, _arrayValueB8uCS0K]
		const _arrayValueBiQaSSZ = undefined;
		const _defaultValueDescriptioneIjthxH = [_arrayValueEdeRgqd, _arrayValueBiQaSSZ]
		const _envVarJxLdz5b = undefined;
		const _arrayValuepWbc2UN = "Rxh6FjWgWtzWTziL6h7fDOiY822JJXzMrIq0ttuWYMhEU9tZwEfGcOWhFAz";
		const _arrayValueSZTt9U0 = true;
		const _arrayValueTpVhGIj = [_arrayValuepWbc2UN, _arrayValueSZTt9U0]
		const _descriptiono9ViOpN = [_arrayValueTpVhGIj]
		const _optionW0o7BZ = {
			"argChoices": _argChoiceseW9OTte,
		"negate": _negatedijGVVu,
		"defaultValue": _defaultValuemkCtl5i,
		"defaultValueDescription": _defaultValueDescriptioneIjthxH,
		"envVar": _envVarJxLdz5b,
		"description": _descriptiono9ViOpN
	}
		const _returnValuewLEiuay = await _HelpCoqwQl.optionDescription(_optionW0o7BZ)
		const _flagsGX9xaRV = 4.472600794547851;
		const _optionqJ3OAtA = {
			"flags": _flagsGX9xaRV
	}
		const _returnValueVrQ5gap = await _HelpCoqwQl.optionTerm(_optionqJ3OAtA)
	});

	it('test for Help', async () => {
		const _HelpRrlVboX = new Help()
		const _arrayValueSXksLhU = {
		
	}
		const _arrayValueVNG73N1 = "qQa2dANy3vyO8wR04M26ejMBJvdEXRcaUX9ZCVEsQPEJY961TbNQU5nOML2N6qNaYa9";
		const _arrayValueqqmxnVx = {
		
	}
		const _cmdvQeoRGD = [_arrayValueSXksLhU, _arrayValueVNG73N1, _arrayValueqqmxnVx]
		const _returnValueYzTQcuL = undefined;
		const _longestOptionTermLengthTUT9NyS = () => { return _returnValueYzTQcuL };
		const _returnValueAhQVXRm = "buQndEWjmegehEwYkFbik2jS6M3hrwqhEaNSfnIbp5Xj2rZNqm2V6O";
		const _longestSubcommandTermLengthIJhw5O = () => { return _returnValueAhQVXRm };
		const _arrayValueFW0M5CY = 6.887296479250757;
		const _arrayValuegkavWpz = {
		
	}
		const _returnValuekLsegq0 = [_arrayValueFW0M5CY, _arrayValuegkavWpz]
		const _longestArgumentTermLengthF7bV9zm = () => { return _returnValuekLsegq0 };
		const _helperykVvyKy = {
			"longestOptionTermLength": _longestOptionTermLengthTUT9NyS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthIJhw5O,
		"longestArgumentTermLength": _longestArgumentTermLengthF7bV9zm
	}
		const _returnValueFKaVtX = await _HelpRrlVboX.padWidth(_cmdvQeoRGD, _helperykVvyKy)
	});

	it('test for Help', async () => {
		const _HelpIarGSu = new Help()
		const _returnValuenlFsbpm = 4.563874288502767;
		const _matchAZU8HwE = () => { return _returnValuenlFsbpm };
		const _returnValueYOeg9Ur = undefined;
		const _substrmEmBY7K = () => { return _returnValueYOeg9Ur };
		const _strLkNRp5b = {
			"match": _matchAZU8HwE,
		"substr": _substrmEmBY7K
	}
		const _widthjsAbwNk = -5.719370059869254;
		const _indentIrTEFMw = 4.582245623540217;
		const _minColumnWidthvfMqphi = -8.845643867525656;
		const _returnValuer5kslJM = await _HelpIarGSu.wrap(_strLkNRp5b, _widthjsAbwNk, _indentIrTEFMw, _minColumnWidthvfMqphi)
		const _returnValueu9yKMr8 = null;
		const _descriptiontZJq5bG = () => { return _returnValueu9yKMr8 };
		const _cmdg7819Ck = {
			"description": _descriptiontZJq5bG
	}
		const _returnValueJdGggzE = await _HelpIarGSu.commandDescription(_cmdg7819Ck)
		const _optionsFzFUw83 = {
		
	}
		const _arrayValuekvYWhUM = undefined;
		const _arrayValuel0PF3Xn = "1Blv48obaghoyY5llS6GbpCKFsc";
		const __hasHelpOptionILfRj7R = [_arrayValuekvYWhUM, _arrayValuel0PF3Xn]
		const __helpShortFlagkbTMJZ6 = null;
		const _returnValueyKhdY0c = "C2Y7WGmnr69y0dyOMUNzbaTBXxu6jfGg92U8ceS";
		const __findOptionZXgnbl8 = () => { return _returnValueyKhdY0c };
		const __helpLongFlagVLI5nP5 = true;
		const _returnValuerV2xEg = undefined;
		const _createOption2xxrBQ = () => { return _returnValuerV2xEg };
		const __helpDescriptionri6pPYb = []
		const __helpFlags98y1cI = "ahBvT3L1RPnQRfTnXdnf1L1qOADAuF9kn7mMFDWd8gfMUtt8AR2Rug8sJvmVd0d553bEWXUXwlVgvy7";
		const _cmduM8SL0P = {
			"options": _optionsFzFUw83,
		"_hasHelpOption": __hasHelpOptionILfRj7R,
		"_helpShortFlag": __helpShortFlagkbTMJZ6,
		"_findOption": __findOptionZXgnbl8,
		"_helpLongFlag": __helpLongFlagVLI5nP5,
		"createOption": _createOption2xxrBQ,
		"_helpDescription": __helpDescriptionri6pPYb,
		"_helpFlags": __helpFlags98y1cI
	}
		const _returnValueVCcOmS = await _HelpIarGSu.visibleOptions(_cmduM8SL0P)
	});

	it('test for Help', async () => {
		const _HelpSMkJneE = new Help()
		const __namemPW4Kd = {
		
	}
		const __aliasesGEv29qJ = {
		
	}
		const _parentmaXGrmr = {
		
	}
		const _returnValueNztrH5D = 6.922479437491884;
		const _usageTB2K4EK = () => { return _returnValueNztrH5D };
		const _cmdjhnAbx4 = {
			"_name": __namemPW4Kd,
		"_aliases": __aliasesGEv29qJ,
		"parent": _parentmaXGrmr,
		"usage": _usageTB2K4EK
	}
		const _returnValueqF1sAAx = await _HelpSMkJneE.commandUsage(_cmdjhnAbx4)
		const _arrayValueTGA0eAj = 3.826459895262726;
		const _arrayValuevfQKTl = true;
		const _flagsV87Tliz = [_arrayValueTGA0eAj, _arrayValuevfQKTl]
		const _optionm3coS4D = {
			"flags": _flagsV87Tliz
	}
		const _returnValue6Nvj1z = await _HelpSMkJneE.optionTerm(_optionm3coS4D)
		const _flagsAYqjlav = null;
		const _optionOrMaHQy = {
			"flags": _flagsAYqjlav
	}
		const _returnValuej4QqGl8 = await _HelpSMkJneE.optionTerm(_optionOrMaHQy)
		const _returnValuetJLMJ9 = {
		
	}
		const _descriptionmMUU8NJ = () => { return _returnValuetJLMJ9 };
		const _cmdVDcIOp = {
			"description": _descriptionmMUU8NJ
	}
		const _returnValue3Cq4v7 = await _HelpSMkJneE.commandDescription(_cmdVDcIOp)
	});

	it('test for Help', async () => {
		const _HelpntPRpxY = new Help()
		const _returnValuefT0JtWm = -6.631169187595625;
		const _descriptioncF138Hv = () => { return _returnValuefT0JtWm };
		const _cmdmsyk9w7 = {
			"description": _descriptioncF138Hv
	}
		const _returnValueCvZUEHY = await _HelpntPRpxY.subcommandDescription(_cmdmsyk9w7)
		const _argChoicesIQkLq3 = {
		
	}
		const _arrayValuebvlS5X = "RfDoRSFNiDnMAumbLMABWTlcYP1ub3gkSsGcNtiI111M5rkKZqHvjNJYEUJRa1JhUPWKxvKNTVJ0HLQ6kOKrVlXzX";
		const _arrayValuebCwaPzE = {
		
	}
		const _returnValueaHc83Uc = null;
		const _arrayValuedVb2oGK = () => { return _returnValueaHc83Uc };
		const _arrayValueLcKfFlh = [_arrayValuebCwaPzE, _arrayValuedVb2oGK]
		const _arrayValuet16rZGK = true;
		const _negateu52MpYt = [_arrayValuebvlS5X, _arrayValueLcKfFlh, _arrayValuet16rZGK]
		const _defaultValuerk0jU4Z = undefined;
		const _defaultValueDescriptionVytKvuR = []
		const _envVarePGlFOs = true;
		const _returnValueuu56d65 = undefined;
		const _descriptionCQUEzX = () => { return _returnValueuu56d65 };
		const _optionYqihUsd = {
			"argChoices": _argChoicesIQkLq3,
		"negate": _negateu52MpYt,
		"defaultValue": _defaultValuerk0jU4Z,
		"defaultValueDescription": _defaultValueDescriptionVytKvuR,
		"envVar": _envVarePGlFOs,
		"description": _descriptionCQUEzX
	}
		const _returnValueRxoAKHn = await _HelpntPRpxY.optionDescription(_optionYqihUsd)
		const _returnValuefFeKZHR = -9.172839686714815;
		const _descriptionHZRzY90 = () => { return _returnValuefFeKZHR };
		const _cmdV0n1Ooc = {
			"description": _descriptionHZRzY90
	}
		const _returnValueuRXRZH1 = await _HelpntPRpxY.subcommandDescription(_cmdV0n1Ooc)
	});

	it('test for Help', async () => {
		const _HelpTXpMk17 = new Help()
		const _returnValueo5jCNFW = 7.30300977806888;
		const _cmdpjpt1QK = () => { return _returnValueo5jCNFW };
		const _arrayValueJOkYyVs = undefined;
		const _arrayValueRuzGOCY = "YpP8Pknrds6bd8yBrQhQXN1KpHMkHEtGdciE2lrTWC2FoyHXZYoVKRgNdLMqfWzdit7pjrhZpT26CPE";
		const _returnValueNx6IhLi = [_arrayValueJOkYyVs, _arrayValueRuzGOCY]
		const _longestOptionTermLengthInM2bv4 = () => { return _returnValueNx6IhLi };
		const _returnValuer3JLcBj = undefined;
		const _longestSubcommandTermLengthsUNt4l1 = () => { return _returnValuer3JLcBj };
		const _returnValuesocv9VD = 3.37790500729734;
		const _longestArgumentTermLengthdnLGTpn = () => { return _returnValuesocv9VD };
		const _helperavZZvxd = {
			"longestOptionTermLength": _longestOptionTermLengthInM2bv4,
		"longestSubcommandTermLength": _longestSubcommandTermLengthsUNt4l1,
		"longestArgumentTermLength": _longestArgumentTermLengthdnLGTpn
	}
		const _returnValue6Ck31t = await _HelpTXpMk17.padWidth(_cmdpjpt1QK, _helperavZZvxd)
		const _returnValue4LFShV = null;
		const _matchLa2h4r = () => { return _returnValue4LFShV };
		const _returnValueS7PHua5 = "3fSDzJpqC0aKphVu0Gfa7Z2apWczE5ChLONfVX2PhrHv1MxEnFcnIknRmHLtBh3Fsa7SwpzkRlSaxZzaknd";
		const _returnValueFYBTaQf = () => { return _returnValueS7PHua5 };
		const _substrxwEUPin = () => { return _returnValueFYBTaQf };
		const _streitE1da = {
			"match": _matchLa2h4r,
		"substr": _substrxwEUPin
	}
		const _widthJvylyu5 = 6.267590058308137;
		const _indentXbOYpEa = 9.187209601768782;
		const _minColumnWidthkZIrLL5 = -3.1349420438912823;
		const _returnValuezBFX8mH = await _HelpTXpMk17.wrap(_streitE1da, _widthJvylyu5, _indentXbOYpEa, _minColumnWidthkZIrLL5)
		const _returnValueZbONN1Y = 6.721568571887307;
		const _descriptionP3I0EdM = () => { return _returnValueZbONN1Y };
		const _cmdXiZixWs = {
			"description": _descriptionP3I0EdM
	}
		const _returnValueIc9qNLR = await _HelpTXpMk17.commandDescription(_cmdXiZixWs)
		const __argsDescriptionaBjEXzd = {
		
	}
		const __argsRcmsSCr = {
		
	}
		const _cmdTpknZJM = {
			"_argsDescription": __argsDescriptionaBjEXzd,
		"_args": __argsRcmsSCr
	}
		const _returnValueCFvKBn8 = await _HelpTXpMk17.visibleArguments(_cmdTpknZJM)
		const _optionswCEcicS = {
		
	}
		const __hasHelpOptionE53HQD = -8.236036417774582;
		const __helpShortFlagjyuHyas = null;
		const _returnValuebc6sCJF = "hhCdTV2kXEmqWZe0bVV7HfyYdsQcfdMTQTqmhfliN8XdXVBbKYa4BMEj";
		const __findOptionfuiCrDo = () => { return _returnValuebc6sCJF };
		const _returnValueBee9Qnz = true;
		const __helpLongFlaggDvHYSY = () => { return _returnValueBee9Qnz };
		const _returnValueK6K8Ctr = null;
		const _createOptionj8zfgFW = () => { return _returnValueK6K8Ctr };
		const __helpDescriptiontDkXGAB = undefined;
		const __helpFlagsHGlavb9 = -6.75541768419848;
		const _cmdnYlEky3 = {
			"options": _optionswCEcicS,
		"_hasHelpOption": __hasHelpOptionE53HQD,
		"_helpShortFlag": __helpShortFlagjyuHyas,
		"_findOption": __findOptionfuiCrDo,
		"_helpLongFlag": __helpLongFlaggDvHYSY,
		"createOption": _createOptionj8zfgFW,
		"_helpDescription": __helpDescriptiontDkXGAB,
		"_helpFlags": __helpFlagsHGlavb9
	}
		const _returnValuemo5fkT2 = await _HelpTXpMk17.visibleOptions(_cmdnYlEky3)
	});

	it('test for Help', async () => {
		const _HelpaDtaId4 = new Help()
		const __named6HqCTg = {
		
	}
		const _arrayValueLCxlw75 = 7.712954430060165;
		const _arrayValueijsoQ09 = "izkKQ9TtQUf1QWUkcWMJj5Vw53p7IJfI42EP7Sdlttpz9MYXivyY14ribCFYxnX2U6b3nQpHaQis0HC";
		const _arrayValuejHoAey = [_arrayValueLCxlw75, _arrayValueijsoQ09]
		const _arrayValuew4ZA73e = "qLhVWMjgYbJvW9vrozpgmFi55xOWqmoXCXsj6gT8l4Glng9ZQRqn";
		const __aliasesRBS7LlO = [_arrayValuejHoAey, _arrayValuew4ZA73e]
		const _parentDklDRq9 = {
		
	}
		const _returnValuekhbdLQa = undefined;
		const _usageMltkkte = () => { return _returnValuekhbdLQa };
		const _cmdcYpabaw = {
			"_name": __named6HqCTg,
		"_aliases": __aliasesRBS7LlO,
		"parent": _parentDklDRq9,
		"usage": _usageMltkkte
	}
		const _returnValueyhiBjoS = await _HelpaDtaId4.commandUsage(_cmdcYpabaw)
		const _flagsw99gRyf = undefined;
		const _optionn0fmK2 = {
			"flags": _flagsw99gRyf
	}
		const _returnValuec11kWJ = await _HelpaDtaId4.optionTerm(_optionn0fmK2)
	});

	it('test for Help', async () => {
		const _HelphgDchyy = new Help()
		const _returnValueHxXmfzd = null;
		const _matchO1xNxI = () => { return _returnValueHxXmfzd };
		const _substrCljloHF = "5tkRDCsQCiYw5bgsFwW3cQTlsrm1RINmt5vfxO4N5tjRklgKBgnuydcOxW33";
		const _strsZVsHQM = {
			"match": _matchO1xNxI,
		"substr": _substrCljloHF
	}
		const _widthsl0zl7h = -7.460433888492414;
		const _indentjphNHng = 6.365765174546322;
		const _minColumnWidthzwQGlWs = -9.248032964263135;
		const _returnValueTIsTj4e = await _HelphgDchyy.wrap(_strsZVsHQM, _widthsl0zl7h, _indentjphNHng, _minColumnWidthzwQGlWs)
		const _arrayValueCtzRpfu = "nQ9FFvTfkOXC96PcxmILUSOcX";
		const _cmdLTMGaId = [_arrayValueCtzRpfu]
		const _helperu97DnzR = "WQcI6N9A5Ik5SueUlf0TTMlAh3pdX60DijOM9CZ58tRXJiRDaloz8Asglg";
		const _returnValueESmcnDl = await _HelphgDchyy.formatHelp(_cmdLTMGaId, _helperu97DnzR)
	});

	it('test for Help', async () => {
		const _HelpWZjOom0 = new Help()
		const _arrayValuembfFJ9 = true;
		const _arrayValueVSfSBpJ = 6.77202360837148;
		const _arrayValuejPvr1yb = true;
		const _optionsfuG4o5Q = [_arrayValuembfFJ9, _arrayValueVSfSBpJ, _arrayValuejPvr1yb]
		const __hasHelpOptionm4QTHwH = false;
		const __helpShortFlaguXBnViA = undefined;
		const _returnValue56OieV = null;
		const __findOptionHjoFmiq = () => { return _returnValue56OieV };
		const __helpLongFlagXl0Exq1 = false;
		const _returnValueV7UrFJU = undefined;
		const _returnValueaBMwqtu = () => { return _returnValueV7UrFJU };
		const _createOptiond3dxO1v = () => { return _returnValueaBMwqtu };
		const __helpDescriptionKKqYIB4 = undefined;
		const __helpFlagso7Ub213 = -5.73218964359042;
		const _cmdFe6zL4E = {
			"options": _optionsfuG4o5Q,
		"_hasHelpOption": __hasHelpOptionm4QTHwH,
		"_helpShortFlag": __helpShortFlaguXBnViA,
		"_findOption": __findOptionHjoFmiq,
		"_helpLongFlag": __helpLongFlagXl0Exq1,
		"createOption": _createOptiond3dxO1v,
		"_helpDescription": __helpDescriptionKKqYIB4,
		"_helpFlags": __helpFlagso7Ub213
	}
		const _returnValueeAWpK36 = await _HelpWZjOom0.visibleOptions(_cmdFe6zL4E)
		const __nameafBhlwO = {
		
	}
		const __aliasesOm6bAFC = {
		
	}
		const _parentGHc7lPV = {
		
	}
		const _usagerib1efv = true;
		const _cmdKilj80f = {
			"_name": __nameafBhlwO,
		"_aliases": __aliasesOm6bAFC,
		"parent": _parentGHc7lPV,
		"usage": _usagerib1efv
	}
		const _returnValueWpjAt49 = await _HelpWZjOom0.commandUsage(_cmdKilj80f)
		const _cmddjPtzVY = {
		
	}
		const _returnValuet6vuQC = {
		
	}
		const _visibleOptionsLJuPYGT = () => { return _returnValuet6vuQC };
		const _returnValueM1b8S6X = "JMt3gXRhupfi0hhuRpwQhyatOl45ihRMb9XoEoeQNq";
		const _optionTermfV8m2bm = () => { return _returnValueM1b8S6X };
		const _helperCD28Dmk = {
			"visibleOptions": _visibleOptionsLJuPYGT,
		"optionTerm": _optionTermfV8m2bm
	}
		const _returnValuehabpSQj = await _HelpWZjOom0.longestOptionTermLength(_cmddjPtzVY, _helperCD28Dmk)
	});

	it('test for Help', async () => {
		const _HelpUrIrze4 = new Help()
		const _arrayValuefjkdoiO = "k5WZefH9m2KBWcPisGQ5uj8zwgjzK0mKa87gsLg5pqqEXteODPac";
		const _arrayValuemSNgBW = 5.348079083797765;
		const _argChoicesGSkvQmd = [_arrayValuefjkdoiO, _arrayValuemSNgBW]
		const _defaultValueKUVFHTH = undefined;
		const _defaultValueDescriptionmNKAcA0 = "VkphrdKtvSRBT8mYHtjmsXs1YH4GsUWnwE2J6WXhAMCc2Pf5FgaXwGKL9cRDtm9DGO6DRqj3n5LLIBJQZxg5KonBQCX5";
		const _descriptionaQjBpgo = null;
		const _argumentOyN6l0m = {
			"argChoices": _argChoicesGSkvQmd,
		"defaultValue": _defaultValueKUVFHTH,
		"defaultValueDescription": _defaultValueDescriptionmNKAcA0,
		"description": _descriptionaQjBpgo
	}
		const _returnValueblnuZB = await _HelpUrIrze4.argumentDescription(_argumentOyN6l0m)
		const _returnValuelARhPhf = null;
		const _descriptionWKWROcL = () => { return _returnValuelARhPhf };
		const _cmdq5i6biF = {
			"description": _descriptionWKWROcL
	}
		const _returnValueXPfK1Fd = await _HelpUrIrze4.subcommandDescription(_cmdq5i6biF)
		const _returnValueZD1xlIQ = "sveb8O6DJXWeghFNXqwVaheL4te7STwtru3QuQbooq7fMA2KGEXEq4bHgPCamss82nvu33u8EBPgRbm3NHYPDJ";
		const _descriptionqzYCdGr = () => { return _returnValueZD1xlIQ };
		const _cmdyj231Gj = {
			"description": _descriptionqzYCdGr
	}
		const _returnValuenkM1vY3 = await _HelpUrIrze4.subcommandDescription(_cmdyj231Gj)
		const _arrayValueELSvvxd = "nMLxE1BSvdf8CHrtAmwPUAQj4BZbN8aqlmJUzlWYvNpS4hABaxzQ9A1Geqk37mB";
		const _cmdlGwkLCy = [_arrayValueELSvvxd]
		const _sortSubcommandsEYwKTD2 = -5.521933755971705;
		const _returnValueuxS2FxZ = null;
		const _subcommandTermrrkqsNB = () => { return _returnValueuxS2FxZ };
		const _helperJguLV2a = {
			"sortSubcommands": _sortSubcommandsEYwKTD2,
		"subcommandTerm": _subcommandTermrrkqsNB
	}
		const _returnValueHJFOS4 = await _HelpUrIrze4.formatHelp(_cmdlGwkLCy, _helperJguLV2a)
	});

	it('test for Help', async () => {
		const _HelpqHnqBKm = new Help()
		const _arrayValueQO3PeQ = -4.253997126114576;
		const _commandsym6CfV6 = [_arrayValueQO3PeQ]
		const _returnValuePUcGQKG = 2.497633369741868;
		const __hasImplicitHelpCommandb776N9t = () => { return _returnValuePUcGQKG };
		const __helpCommandnameAndArgsMtzcaPc = {
		
	}
		const _returnValuePSBePTD = false;
		const _createCommandqagwtEv = () => { return _returnValuePSBePTD };
		const _returnValuerGtMWuv = null;
		const __helpCommandDescriptionaNlS0Dc = () => { return _returnValuerGtMWuv };
		const _cmdLg7uEes = {
			"commands": _commandsym6CfV6,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandb776N9t,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsMtzcaPc,
		"createCommand": _createCommandqagwtEv,
		"_helpCommandDescription": __helpCommandDescriptionaNlS0Dc
	}
		const _returnValuefqwMKX = await _HelpqHnqBKm.visibleCommands(_cmdLg7uEes)
	});

	it('test for Help', async () => {
		const _HelpEFZcXF = new Help()
		const _argChoicessPXGZZ = null;
		const _defaultValueNwQlDij = null;
		const _defaultValueDescriptionGi100Ab = "weC4ZGgtGccu2rVdqTClAmB25LQZWtJBaadBwOD9EJGikfSCQwXc7W";
		const _descriptionR955As = 9.422368632276118;
		const _argumentOOFilty = {
			"argChoices": _argChoicessPXGZZ,
		"defaultValue": _defaultValueNwQlDij,
		"defaultValueDescription": _defaultValueDescriptionGi100Ab,
		"description": _descriptionR955As
	}
		const _returnValueV1b3sf = await _HelpEFZcXF.argumentDescription(_argumentOOFilty)
		const _cmdFtcZcG5 = false;
		const _sortSubcommandsOkD3JlM = "0RCaLsszmLfn9Sx3yJRVmWKx4bygYoxxFcEQqU3yr3KCXb7PNnEcCkurWFHC9FSYCiNpaDvkBGMlKAeMA1FN3sN1oGvKxS";
		const _arrayValueQeNqWYA = 2.001203496428195;
		const _returnValueTpjHaGy = true;
		const _arrayValueuFooEtF = () => { return _returnValueTpjHaGy };
		const _subcommandTermMrXkeEY = [_arrayValueQeNqWYA, _arrayValueuFooEtF]
		const _helperCppTyLb = {
			"sortSubcommands": _sortSubcommandsOkD3JlM,
		"subcommandTerm": _subcommandTermMrXkeEY
	}
		const _returnValueoihoJo9 = await _HelpEFZcXF.longestSubcommandTermLength(_cmdFtcZcG5, _helperCppTyLb)
		const _returnValueatMsNeH = true;
		const _matchuSYgxwo = () => { return _returnValueatMsNeH };
		const _returnValueJa4AM43 = null;
		const _substrcalcBWw = () => { return _returnValueJa4AM43 };
		const _strUJti6Y2 = {
			"match": _matchuSYgxwo,
		"substr": _substrcalcBWw
	}
		const _widthM3PDGhK = true;
		const _indentNHbzWF = -7.648980020713337;
		const _minColumnWidthCFvvN9c = -0.33457328665907404;
		const _returnValuetEc3GYs = await _HelpEFZcXF.wrap(_strUJti6Y2, _widthM3PDGhK, _indentNHbzWF, _minColumnWidthCFvvN9c)
		const _returnValueD63yocI = {
		
	}
		const _matchRBHupdp = () => { return _returnValueD63yocI };
		const _returnValueDv33EG = "ACzOFHInNimkpOGYGIELbgCxCsE7ouCfcXN4LHgwCSHuFQbE";
		const _substreOHtRLY = () => { return _returnValueDv33EG };
		const _strCfY9zGN = {
			"match": _matchRBHupdp,
		"substr": _substreOHtRLY
	}
		const _widthbbsLiBr = undefined;
		const _indentDD4azrF = 5.474493291530473;
		const _minColumnWidthRkdtL63 = -6.5757997827408055;
		const _returnValueMj9bOzR = await _HelpEFZcXF.wrap(_strCfY9zGN, _widthbbsLiBr, _indentDD4azrF, _minColumnWidthRkdtL63)
	});
})