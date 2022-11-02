export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelphiwYASh = new Help()
		const __argsDescriptionvGvFcA = {
		
	}
		const __argsR34wAxY = "OPbRpWu0kX6V";
		const _cmdtMzJxvd = {
			"_argsDescription": __argsDescriptionvGvFcA,
		"_args": __argsR34wAxY
	}
		const _returnValueviBaaZb = await _HelphiwYASh.visibleArguments(_cmdtMzJxvd)
		const _argChoiceskldz2sx = {
		
	}
		const _negateZJ9qinH = undefined;
		const _defaultValueBaYxtb5 = undefined;
		const _defaultValueDescriptionNhmdVB = {
		
	}
		const _envVarYElBwqS = undefined;
		const _descriptionwossfl = false;
		const _optionYsrggfZ = {
			"argChoices": _argChoiceskldz2sx,
		"negate": _negateZJ9qinH,
		"defaultValue": _defaultValueBaYxtb5,
		"defaultValueDescription": _defaultValueDescriptionNhmdVB,
		"envVar": _envVarYElBwqS,
		"description": _descriptionwossfl
	}
		const _returnValueWMOHkGV = await _HelphiwYASh.optionDescription(_optionYsrggfZ)
	});

	it('test for Help', async () => {
		const _HelpJdeaBG = new Help()
		const _cmd0IMYDD = undefined;
		const _returnValuekMjSWzr = null;
		const _longestOptionTermLengthnEfXmU = () => { return _returnValuekMjSWzr };
		const _returnValuekeTP9wz = -3.7327185036872637;
		const _longestSubcommandTermLengthbC6QZVR = () => { return _returnValuekeTP9wz };
		const _returnValuec0bL1V = -7.57503388565263;
		const _longestArgumentTermLengthdVec0Zc = () => { return _returnValuec0bL1V };
		const _helperLwyGRyB = {
			"longestOptionTermLength": _longestOptionTermLengthnEfXmU,
		"longestSubcommandTermLength": _longestSubcommandTermLengthbC6QZVR,
		"longestArgumentTermLength": _longestArgumentTermLengthdVec0Zc
	}
		const _returnValuecfkrDw = await _HelpJdeaBG.padWidth(_cmd0IMYDD, _helperLwyGRyB)
		const _cmdMsJQgW6 = []
		const _sortSubcommandsAePamfe = null;
		const _arrayValueSwMiUA9 = {
		
	}
		const _returnValueVFXP87x = [_arrayValueSwMiUA9]
		const _subcommandTermhhkbNn9 = () => { return _returnValueVFXP87x };
		const _helperE4NnhS8 = {
			"sortSubcommands": _sortSubcommandsAePamfe,
		"subcommandTerm": _subcommandTermhhkbNn9
	}
		const _returnValueqKNsUK6 = await _HelpJdeaBG.formatHelp(_cmdMsJQgW6, _helperE4NnhS8)
	});

	it('test for Help', async () => {
		const _HelpXS7BFxX = new Help()
		const _commandsVyFRN87 = {
		
	}
		const _returnValueRrkxmW = undefined;
		const __hasImplicitHelpCommandhv3J6zN = () => { return _returnValueRrkxmW };
		const __helpCommandnameAndArgsqcXrBPE = {
		
	}
		const _returnValuea3JVEe = null;
		const _createCommandprUrMKF = () => { return _returnValuea3JVEe };
		const __helpCommandDescriptionLTRk5HA = true;
		const _cmdG0UWbtc = {
			"commands": _commandsVyFRN87,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandhv3J6zN,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsqcXrBPE,
		"createCommand": _createCommandprUrMKF,
		"_helpCommandDescription": __helpCommandDescriptionLTRk5HA
	}
		const _returnValuertaC3RG = await _HelpXS7BFxX.visibleCommands(_cmdG0UWbtc)
		const _returnValuehC02RIp = false;
		const _arrayValuevndxdB = () => { return _returnValuehC02RIp };
		const _arrayValuebpZZPT = -1.1653220888353246;
		const _arrayValuep7sXvT4 = false;
		const _arrayValuesCNGLX = [_arrayValuevndxdB, _arrayValuebpZZPT, _arrayValuep7sXvT4]
		const _cmdSXfkSht = [_arrayValuesCNGLX]
		const _helperckLwB3L = undefined;
		const _returnValuezFIuuXF = await _HelpXS7BFxX.longestArgumentTermLength(_cmdSXfkSht, _helperckLwB3L)
		const _returnValueG3o3D57 = null;
		const _descriptionv82aFW = () => { return _returnValueG3o3D57 };
		const _cmdFYQrMEl = {
			"description": _descriptionv82aFW
	}
		const _returnValuePqpuJle = await _HelpXS7BFxX.commandDescription(_cmdFYQrMEl)
	});

	it('test for Help', async () => {
		const _Helprath3NS = new Help()
		const _cmdV5X9YwU = undefined;
		const _returnValueVlYxuJJ = null;
		const _visibleArgumentsNiXTYMj = () => { return _returnValueVlYxuJJ };
		const _returnValuewZdVqFr = undefined;
		const _argumentTermVVmX5UM = () => { return _returnValuewZdVqFr };
		const _helperQvxUYgZ = {
			"visibleArguments": _visibleArgumentsNiXTYMj,
		"argumentTerm": _argumentTermVVmX5UM
	}
		const _returnValueruZtv7 = await _Helprath3NS.longestArgumentTermLength(_cmdV5X9YwU, _helperQvxUYgZ)
		const _flagspFTH7xE = -7.662471647579442;
		const _optionyWgzbaR = {
			"flags": _flagspFTH7xE
	}
		const _returnValueNtcUsD = await _Helprath3NS.optionTerm(_optionyWgzbaR)
		const _optionsZFVTpiK = {
		
	}
		const __hasHelpOptionaGIGdXM = null;
		const __helpShortFlagx38kjTN = 1.9723397894336685;
		const _returnValuexAhoIDA = false;
		const __findOptionEhDYHN = () => { return _returnValuexAhoIDA };
		const __helpLongFlagM81poX = 3.5097596602920547;
		const _returnValuenz3Mnmt = null;
		const _createOptionhThctT3 = () => { return _returnValuenz3Mnmt };
		const __helpDescriptionvEM5QZ2 = "N5kv";
		const __helpFlagsHJ1nMkC = null;
		const _cmdk25ECeg = {
			"options": _optionsZFVTpiK,
		"_hasHelpOption": __hasHelpOptionaGIGdXM,
		"_helpShortFlag": __helpShortFlagx38kjTN,
		"_findOption": __findOptionEhDYHN,
		"_helpLongFlag": __helpLongFlagM81poX,
		"createOption": _createOptionhThctT3,
		"_helpDescription": __helpDescriptionvEM5QZ2,
		"_helpFlags": __helpFlagsHJ1nMkC
	}
		const _returnValuenvrTX8r = await _Helprath3NS.visibleOptions(_cmdk25ECeg)
	});

	it('test for Help', async () => {
		const _HelpsfSTesS = new Help()
		const _cmdTdkmKw7 = null;
		const _sortSubcommandsFg5dces = false;
		const _arrayValueOGKqpwU = "tPe1oILilbcwp8JlMxiUP";
		const _returnValueThjYw8M = [_arrayValueOGKqpwU]
		const _subcommandTermjlFwY3w = () => { return _returnValueThjYw8M };
		const _helperX5nsnnn = {
			"sortSubcommands": _sortSubcommandsFg5dces,
		"subcommandTerm": _subcommandTermjlFwY3w
	}
		const _returnValueG1yTNb = await _HelpsfSTesS.longestSubcommandTermLength(_cmdTdkmKw7, _helperX5nsnnn)
		const __namewYet8z = null;
		const __aliasesM9Mty5p = {
		
	}
		const _parenttvF3Gqb = {
		
	}
		const _returnValuetTIE5Kd = "ZvgdjWM0DczbgwU3Sv0jpKsab3eNsQazHNRqbYhzvedI8SaXgiDqoYKQfbUcxrIrsSe1NUD9TXzpOGeryC9dC7S";
		const _usageshIShSU = () => { return _returnValuetTIE5Kd };
		const _cmdGIi5PuB = {
			"_name": __namewYet8z,
		"_aliases": __aliasesM9Mty5p,
		"parent": _parenttvF3Gqb,
		"usage": _usageshIShSU
	}
		const _returnValueYipTRUa = await _HelpsfSTesS.commandUsage(_cmdGIi5PuB)
	});

	it('test for Help', async () => {
		const _HelpLb6UUHr = new Help()
		const _returnValuebTpcOiY = "bzVbeN2hkK14sA1rUtkDnS01ielJCMZdFBQ2KfbeS";
		const _nameE3vev5p = () => { return _returnValuebTpcOiY };
		const _argument4OHWef = {
			"name": _nameE3vev5p
	}
		const _returnValueWrOXBV = await _HelpLb6UUHr.argumentTerm(_argument4OHWef)
		const _cmdcDGq69Z = null;
		const _sortSubcommandsfN7GmXX = 6.2028877368927375;
		const _arrayValuepC7qF7j = {
		
	}
		const _arrayValuezDsBKW = undefined;
		const _returnValueP8ohT4T = [_arrayValuepC7qF7j, _arrayValuezDsBKW]
		const _subcommandTermTot853H = () => { return _returnValueP8ohT4T };
		const _helperwkhWSP2 = {
			"sortSubcommands": _sortSubcommandsfN7GmXX,
		"subcommandTerm": _subcommandTermTot853H
	}
		const _returnValuecvXQSWE = await _HelpLb6UUHr.longestSubcommandTermLength(_cmdcDGq69Z, _helperwkhWSP2)
		const _argChoiceswyPdqdD = {
		
	}
		const _negatesgZuTua = -0.2885973482015718;
		const _defaultValueld7VKU = undefined;
		const _defaultValueDescriptionzYfRIDo = 8.304659095370987;
		const _envVarVr3BV7F = undefined;
		const _descriptionyoF0vsQ = 4.488378843909231;
		const _optionWVc8a3I = {
			"argChoices": _argChoiceswyPdqdD,
		"negate": _negatesgZuTua,
		"defaultValue": _defaultValueld7VKU,
		"defaultValueDescription": _defaultValueDescriptionzYfRIDo,
		"envVar": _envVarVr3BV7F,
		"description": _descriptionyoF0vsQ
	}
		const _returnValueMKXxi0s = await _HelpLb6UUHr.optionDescription(_optionWVc8a3I)
		const _commandsdE8eH1R = {
		
	}
		const _returnValuekmxSRfm = -9.01733027782529;
		const __hasImplicitHelpCommandN1JtCLH = () => { return _returnValuekmxSRfm };
		const __helpCommandnameAndArgsxW3NJBU = "57p7VQvU657Oy";
		const _returnValuehZWAxKB = undefined;
		const _createCommandsPCPx3K = () => { return _returnValuehZWAxKB };
		const _returnValueWydRYlS = true;
		const __helpCommandDescription2yHHra = () => { return _returnValueWydRYlS };
		const _cmdzeDoir1 = {
			"commands": _commandsdE8eH1R,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandN1JtCLH,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsxW3NJBU,
		"createCommand": _createCommandsPCPx3K,
		"_helpCommandDescription": __helpCommandDescription2yHHra
	}
		const _returnValueWSLRGu9 = await _HelpLb6UUHr.visibleCommands(_cmdzeDoir1)
		const _cmdw9cDSDi = -1.059592362579263;
		const _sortSubcommandso1kALdk = {
		
	}
		const _arrayValueDQU9VNA = undefined;
		const _arrayValuevsOMvGE = null;
		const _arrayValueuF0o0L1 = false;
		const _arrayValuegh87YJA = [_arrayValueuF0o0L1]
		const _arrayValuer9KlEag = [_arrayValueDQU9VNA, _arrayValuevsOMvGE, _arrayValuegh87YJA]
		const _arrayValuetoxLh10 = null;
		const _returnValueN0DwzZn = [_arrayValuer9KlEag, _arrayValuetoxLh10]
		const _subcommandTermw3wvn9l = () => { return _returnValueN0DwzZn };
		const _helperhN6gSk = {
			"sortSubcommands": _sortSubcommandso1kALdk,
		"subcommandTerm": _subcommandTermw3wvn9l
	}
		const _returnValueJqrr9bT = await _HelpLb6UUHr.longestSubcommandTermLength(_cmdw9cDSDi, _helperhN6gSk)
	});

	it('test for Help', async () => {
		const _Helpgtk6CH1 = new Help()
		const _returnValuexgVprN = undefined;
		const _returnValuedGL4GtA = () => { return _returnValuexgVprN };
		const _nameEboQ0du = () => { return _returnValuedGL4GtA };
		const _argumentGetWS1B = {
			"name": _nameEboQ0du
	}
		const _returnValuexq8LQ1K = await _Helpgtk6CH1.argumentTerm(_argumentGetWS1B)
		const __argslIWKIoB = {
		
	}
		const __namef6RrZyJ = -4.366919184472893;
		const __aliasesVOt0UnE = {
		
	}
		const _optionsWJ3iLQ = {
		
	}
		const _cmddliUE6 = {
			"_args": __argslIWKIoB,
		"_name": __namef6RrZyJ,
		"_aliases": __aliasesVOt0UnE,
		"options": _optionsWJ3iLQ
	}
		const _returnValueKhkgKln = await _Helpgtk6CH1.subcommandTerm(_cmddliUE6)
		const __argsDescriptionda3z4oq = {
		
	}
		const __argsacDvvdP = {
		
	}
		const _cmdpgkyGoS = {
			"_argsDescription": __argsDescriptionda3z4oq,
		"_args": __argsacDvvdP
	}
		const _returnValuei1jfFkq = await _Helpgtk6CH1.visibleArguments(_cmdpgkyGoS)
		const _cmdLSLHSQI = true;
		const _sortSubcommandscsC6AuW = null;
		const _subcommandTermbYidDJq = false;
		const _helperc3w6Jqy = {
			"sortSubcommands": _sortSubcommandscsC6AuW,
		"subcommandTerm": _subcommandTermbYidDJq
	}
		const _returnValueWQyKqR = await _Helpgtk6CH1.longestSubcommandTermLength(_cmdLSLHSQI, _helperc3w6Jqy)
	});

	it('test for Help', async () => {
		const _HelpRbKxEL = new Help()
		const _arrayValuewVurd6I = undefined;
		const _arrayValuenB27UYI = [_arrayValuewVurd6I]
		const _arrayValuenBmA6Ca = undefined;
		const _cmdbNIdRN = [_arrayValuenB27UYI, _arrayValuenBmA6Ca]
		const _returnValueq9ml5W = 7.1377907244237875;
		const _visibleOptionsLW01sqS = () => { return _returnValueq9ml5W };
		const _optionTermh0x9N0u = null;
		const _helperNkDlKnm = {
			"visibleOptions": _visibleOptionsLW01sqS,
		"optionTerm": _optionTermh0x9N0u
	}
		const _returnValue5SPUhi = await _HelpRbKxEL.longestOptionTermLength(_cmdbNIdRN, _helperNkDlKnm)
		const _cmdZDk7wAw = true;
		const _arrayValueIu2vOEv = true;
		const _sortSubcommandsHPWFdO = [_arrayValueIu2vOEv]
		const _returnValue8oCUGv = "Q";
		const _subcommandTermvLtXlFf = () => { return _returnValue8oCUGv };
		const _helperMfRBMcm = {
			"sortSubcommands": _sortSubcommandsHPWFdO,
		"subcommandTerm": _subcommandTermvLtXlFf
	}
		const _returnValueRmFljP6 = await _HelpRbKxEL.longestSubcommandTermLength(_cmdZDk7wAw, _helperMfRBMcm)
	});

	it('test for Help', async () => {
		const _HelprMlzT8 = new Help()
		const _strGLtkzPe = undefined;
		const _widthJWYLxaS = -2.9508943980844933;
		const _indenth1DZNML = -9.06280950567487;
		const _minColumnWidthTiDsjF3 = undefined;
		const _returnValuelYE9c1w = await _HelprMlzT8.wrap(_strGLtkzPe, _widthJWYLxaS, _indenth1DZNML, _minColumnWidthTiDsjF3)
		const _returnValueZjgMBY = {
		
	}
		const _descriptionQNdFedv = () => { return _returnValueZjgMBY };
		const _cmdMTLnB79 = {
			"description": _descriptionQNdFedv
	}
		const _returnValuevt3W8KP = await _HelprMlzT8.subcommandDescription(_cmdMTLnB79)
		const __argsKvNP0uB = {
		
	}
		const __namejBqVEx = -2.1803607102823666;
		const __aliasesR52hxLv = {
		
	}
		const _optionsfeItaSs = {
		
	}
		const _cmdCAJq0Wt = {
			"_args": __argsKvNP0uB,
		"_name": __namejBqVEx,
		"_aliases": __aliasesR52hxLv,
		"options": _optionsfeItaSs
	}
		const _returnValueTQnIRhj = await _HelprMlzT8.subcommandTerm(_cmdCAJq0Wt)
		const _argChoicestoOwmzi = {
		
	}
		const _negateMgZOuzI = undefined;
		const _defaultValuetffUMyc = undefined;
		const _defaultValueDescriptionx21XmYT = undefined;
		const _envVar922lG1 = undefined;
		const _arrayValuetiKasiQ = undefined;
		const _returnValuee8Yx0i7 = {
		
	}
		const _arrayValueEU4ugkb = () => { return _returnValuee8Yx0i7 };
		const _descriptionfLN7jlF = [_arrayValuetiKasiQ, _arrayValueEU4ugkb]
		const _optionpyDN6tz = {
			"argChoices": _argChoicestoOwmzi,
		"negate": _negateMgZOuzI,
		"defaultValue": _defaultValuetffUMyc,
		"defaultValueDescription": _defaultValueDescriptionx21XmYT,
		"envVar": _envVar922lG1,
		"description": _descriptionfLN7jlF
	}
		const _returnValuexhLTQNO = await _HelprMlzT8.optionDescription(_optionpyDN6tz)
	});

	it('test for Help', async () => {
		const _HelpAxEODk5 = new Help()
		const _returnValuesoQDpbi = "BbWT8TJ17SufFLETj2rCg5B1erTpucgSlvt2SsP48Lr700SMXIkvxg2R";
		const _namekMpckJ = () => { return _returnValuesoQDpbi };
		const _argumentqewNfT = {
			"name": _namekMpckJ
	}
		const _returnValueljMuWsF = await _HelpAxEODk5.argumentTerm(_argumentqewNfT)
		const _returnValuetVAT3wM = "uXbNbxVIWJitZnJLOyNXLwMPqpjbAQggsyyIGeI5sswkAdAkEOyNw36WXnhHG";
		const _descriptionlfvCXiy = () => { return _returnValuetVAT3wM };
		const _cmdZI1tfLr = {
			"description": _descriptionlfvCXiy
	}
		const _returnValuebGWqacR = await _HelpAxEODk5.subcommandDescription(_cmdZI1tfLr)
		const _cmdRy8Dph = undefined;
		const _returnValueQbfnIos = -0.7806968976486957;
		const _visibleArgumentsI73HxOq = () => { return _returnValueQbfnIos };
		const _returnValueNyQWYxd = undefined;
		const _argumentTermUBioi4K = () => { return _returnValueNyQWYxd };
		const _helperF9BSHeX = {
			"visibleArguments": _visibleArgumentsI73HxOq,
		"argumentTerm": _argumentTermUBioi4K
	}
		const _returnValuetW1ysK = await _HelpAxEODk5.longestArgumentTermLength(_cmdRy8Dph, _helperF9BSHeX)
		const __argsNc66QW = {
		
	}
		const __namead5fNcu = -2.5099840881678386;
		const __aliasesjW08nZ3 = {
		
	}
		const _optionsImdUSuL = {
		
	}
		const _cmdWsZ4fpF = {
			"_args": __argsNc66QW,
		"_name": __namead5fNcu,
		"_aliases": __aliasesjW08nZ3,
		"options": _optionsImdUSuL
	}
		const _returnValuel8jc0Jf = await _HelpAxEODk5.subcommandTerm(_cmdWsZ4fpF)
	});

	it('test for Help', async () => {
		const _HelpcXjvjvM = new Help()
		const _arrayValueAHj6aq7 = {
		
	}
		const _arrayValueb36qta6 = {
		
	}
		const _arrayValuepqjGrwL = true;
		const _arrayValuemUtYAhd = "TdjPqd7uvFrCaarcQbOCRmjDRyq9C53t9aMEzWkyqDXsXa";
		const _arrayValueyf7DZvV = [_arrayValuemUtYAhd]
		const __nameF5G6K7h = [_arrayValueAHj6aq7, _arrayValueb36qta6, _arrayValuepqjGrwL, _arrayValueyf7DZvV]
		const __aliasesMu4Kfhx = {
		
	}
		const _parentjBF6Xg3 = {
		
	}
		const _returnValues8pttYH = -1.0539908472532868;
		const _usageLWpiZTF = () => { return _returnValues8pttYH };
		const _cmdAbQTCRG = {
			"_name": __nameF5G6K7h,
		"_aliases": __aliasesMu4Kfhx,
		"parent": _parentjBF6Xg3,
		"usage": _usageLWpiZTF
	}
		const _returnValueov69Hcc = await _HelpcXjvjvM.commandUsage(_cmdAbQTCRG)
		const _arrayValuesfCMZaX = -6.466679178059579;
		const _arrayValuemwnSnVw = false;
		const _arrayValueVgLpFt = undefined;
		const _cmdLYZfSNL = [_arrayValuesfCMZaX, _arrayValuemwnSnVw, _arrayValueVgLpFt]
		const _sortSubcommandsjegugsA = undefined;
		const _returnValueLJgHLSE = false;
		const _subcommandTermGVi1Zed = () => { return _returnValueLJgHLSE };
		const _helperFYMZg7j = {
			"sortSubcommands": _sortSubcommandsjegugsA,
		"subcommandTerm": _subcommandTermGVi1Zed
	}
		const _returnValueIMT201 = await _HelpcXjvjvM.formatHelp(_cmdLYZfSNL, _helperFYMZg7j)
		const _returnValueHQXFU4 = true;
		const _descriptionQpNJOnC = () => { return _returnValueHQXFU4 };
		const _cmdZNxSTkR = {
			"description": _descriptionQpNJOnC
	}
		const _returnValueoMfxiof = await _HelpcXjvjvM.subcommandDescription(_cmdZNxSTkR)
	});

	it('test for Help', async () => {
		const _HelpgfEDR2 = new Help()
		const _arrayValuejC8zY0 = null;
		const _arrayValueC1AAwm = "ur3X4Mwi1ZzwhFAjVRbJCQzmCzl2hQetjwKQJgr0fOE5lSsorplZ22RgcjDAQyzgE6TpMJcvfmxwmi";
		const _arrayValueiGp9RgI = [_arrayValuejC8zY0, _arrayValueC1AAwm]
		const _arrayValuetC56jmu = false;
		const _arrayValuetWs1bVg = -0.24434238714888679;
		const _returnValueH4hTkvw = null;
		const _arrayValueEtJpMzR = () => { return _returnValueH4hTkvw };
		const _returnValueaKy8Ha8 = [_arrayValueiGp9RgI, _arrayValuetC56jmu, _arrayValuetWs1bVg, _arrayValueEtJpMzR]
		const _descriptiongMHYoni = () => { return _returnValueaKy8Ha8 };
		const _cmduZRW3zM = {
			"description": _descriptiongMHYoni
	}
		const _returnValuecs0HZKb = await _HelpgfEDR2.commandDescription(_cmduZRW3zM)
		const _returnValuen41qDq1 = {
		
	}
		const _descriptionbyWqTp = () => { return _returnValuen41qDq1 };
		const _cmdht7E6bY = {
			"description": _descriptionbyWqTp
	}
		const _returnValuevC99bta = await _HelpgfEDR2.subcommandDescription(_cmdht7E6bY)
		const _commandszlQYQWS = {
		
	}
		const _returnValueZgbHtU0 = -3.829803136089791;
		const __hasImplicitHelpCommandqFErOqN = () => { return _returnValueZgbHtU0 };
		const __helpCommandnameAndArgschMRNVg = {
		
	}
		const _returnValueQN7pTXl = "KxARkaOfsOqzWMSdGhJCphphUfrH2TrhH50ao7GvV7xis2tG2x5U7K3WSd";
		const _createCommandAshwuZD = () => { return _returnValueQN7pTXl };
		const __helpCommandDescriptiongxEixXo = null;
		const _cmdq8Zcfv2 = {
			"commands": _commandszlQYQWS,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandqFErOqN,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgschMRNVg,
		"createCommand": _createCommandAshwuZD,
		"_helpCommandDescription": __helpCommandDescriptiongxEixXo
	}
		const _returnValueNJwbzF6 = await _HelpgfEDR2.visibleCommands(_cmdq8Zcfv2)
	});

	it('test for Help', async () => {
		const _HelpZ3P4Ds6 = new Help()
		const _flagsvdJtZoh = false;
		const _optionHoqaFbt = {
			"flags": _flagsvdJtZoh
	}
		const _returnValueCNMGcw = await _HelpZ3P4Ds6.optionTerm(_optionHoqaFbt)
		const _returnValueHU5OZI7 = "zHrj1YsVKIcX8w9hinvkVPyUbHni5qRs5TieYU5xVAAy7zryvL9vmfiqyx8xQz4zN4zJjFmeAKzNUMlRt3e0Fo6sgoX";
		const _nameu9SdlOj = () => { return _returnValueHU5OZI7 };
		const _argumentPFZj10e = {
			"name": _nameu9SdlOj
	}
		const _returnValueF5PndX = await _HelpZ3P4Ds6.argumentTerm(_argumentPFZj10e)
		const _cmdQgJeFB5 = "WFpLc5FpUPQNi6pDzHFXqPyazpX12fONzyUVzrhuNUSfRYCK37tGSyS14KbhyOX38B9UH6";
		const _sortSubcommandsXB52EoK = undefined;
		const _returnValuekskOEH9 = false;
		const _subcommandTermJFqYdfb = () => { return _returnValuekskOEH9 };
		const _helperGZmt5j4 = {
			"sortSubcommands": _sortSubcommandsXB52EoK,
		"subcommandTerm": _subcommandTermJFqYdfb
	}
		const _returnValue7nhzE3 = await _HelpZ3P4Ds6.formatHelp(_cmdQgJeFB5, _helperGZmt5j4)
	});

	it('test for Help', async () => {
		const _HelpN1VRSua = new Help()
		const _argChoicesowP9ddT = {
		
	}
		const _negateCwSStD = "sxwn37C5mJgzKU92lQRjnB0WbIx563xlBwVyP8w652pLsjnkIJCi0Hgyloa7bkQMwic5oNGLKGdMtb4qQ6sPadqmjGxT";
		const _defaultValuerILItfj = undefined;
		const _defaultValueDescriptionirXzsJo = "l5A2fw1IAaB1i";
		const _envVaryX6ybzf = undefined;
		const _descriptionPXZi3lD = "oKO7dkvXba6wOgbWkjomM";
		const _optionUl8nIdU = {
			"argChoices": _argChoicesowP9ddT,
		"negate": _negateCwSStD,
		"defaultValue": _defaultValuerILItfj,
		"defaultValueDescription": _defaultValueDescriptionirXzsJo,
		"envVar": _envVaryX6ybzf,
		"description": _descriptionPXZi3lD
	}
		const _returnValueSh6hJeH = await _HelpN1VRSua.optionDescription(_optionUl8nIdU)
		const _returnValueBIihm12 = {
		
	}
		const _descriptionwtrB0uw = () => { return _returnValueBIihm12 };
		const _cmdk5KH8Uy = {
			"description": _descriptionwtrB0uw
	}
		const _returnValueA8I81Gf = await _HelpN1VRSua.commandDescription(_cmdk5KH8Uy)
	});

	it('test for Help', async () => {
		const _HelplgdhI8H = new Help()
		const _argChoicesCbVILzr = {
		
	}
		const _defaultValueCMWWWn = undefined;
		const _defaultValueDescriptionym8wRIA = undefined;
		const _descriptiontnsqAhB = {
		
	}
		const _argumentXZColBd = {
			"argChoices": _argChoicesCbVILzr,
		"defaultValue": _defaultValueCMWWWn,
		"defaultValueDescription": _defaultValueDescriptionym8wRIA,
		"description": _descriptiontnsqAhB
	}
		const _returnValuePgUmA4 = await _HelplgdhI8H.argumentDescription(_argumentXZColBd)
		const _cmdVYZj36v = undefined;
		const _arrayValueF1Vskua = null;
		const _arrayValueGWHTqbt = undefined;
		const _arrayValueRWsjqab = null;
		const _arrayValuejrB2nw4 = [_arrayValueF1Vskua, _arrayValueGWHTqbt, _arrayValueRWsjqab]
		const _arrayValueUS9EsLT = false;
		const _returnValueQynC5zM = 6.815804654446435;
		const _arrayValueQniNF1f = () => { return _returnValueQynC5zM };
		const _arrayValuebeQCbR6 = [_arrayValueQniNF1f]
		const _arrayValueY3MnpZl = true;
		const _arrayValue60MTyx = undefined;
		const _arrayValueGzK01f = [_arrayValueUS9EsLT, _arrayValuebeQCbR6, _arrayValueY3MnpZl, _arrayValue60MTyx]
		const _helperZ4NnhMM = [_arrayValuejrB2nw4, _arrayValueGzK01f]
		const _returnValueMvlr0Eb = await _HelplgdhI8H.longestSubcommandTermLength(_cmdVYZj36v, _helperZ4NnhMM)
		const _arrayValueymIldbP = {
		
	}
		const _returnValueoobaSoI = [_arrayValueymIldbP]
		const _arrayValueAvb7uQ6 = () => { return _returnValueoobaSoI };
		const _cmduzia89 = [_arrayValueAvb7uQ6]
		const _returnValuevH0CROp = await _HelplgdhI8H.commandUsage(_cmduzia89)
		const _arrayValueuWk5s2y = undefined;
		const _arrayValueK9UCZX = undefined;
		const _arrayValuewJQQg5 = null;
		const _arrayValueSlgPLde = null;
		const _arrayValuepRHXxm = [_arrayValuewJQQg5, _arrayValueSlgPLde]
		const _arrayValueOScItm = [_arrayValueuWk5s2y, _arrayValueK9UCZX, _arrayValuepRHXxm]
		const _cmdoqAXJdk = [_arrayValueOScItm]
		const _returnValueglRyt7h = await _HelplgdhI8H.commandDescription(_cmdoqAXJdk)
		const _cmdBOUOCJz = []
		const _arrayValuezynaiP = false;
		const _helperbFjWT0q = [_arrayValuezynaiP]
		const _returnValues55mVZ1 = await _HelplgdhI8H.padWidth(_cmdBOUOCJz, _helperbFjWT0q)
	});

	it('test for Help', async () => {
		const _HelpIFUGvLk = new Help()
		const _optionskjh52Lu = {
		
	}
		const __hasHelpOptionevOBg6b = null;
		const _arrayValuee4bHdkN = null;
		const _arrayValuene3ED5O = {
		
	}
		const __helpShortFlagMxwWPG4 = [_arrayValuee4bHdkN, _arrayValuene3ED5O]
		const _returnValuekWPDcXO = true;
		const __findOptionrHJ4D1h = () => { return _returnValuekWPDcXO };
		const __helpLongFlaglleMUFa = true;
		const _returnValueDdgGSls = "uyfPqeAKuvTADMPKFyHIpZ2TDs78ijQkY2dfSXmvLCRhyRSgoEANYtEnHNeETNWs0Il7tSOzFMVnPV6BGGw6PjKoB";
		const _createOptionEr4d2AR = () => { return _returnValueDdgGSls };
		const __helpDescriptionOFRTfbZ = null;
		const _arrayValueCQXO5FU = true;
		const _arrayValueo6ELkbf = 3.4288194658813467;
		const _arrayValueOWEEgnt = 2.652514174924555;
		const _arrayValuenSSsM6A = null;
		const _arrayValuenYiXDb = undefined;
		const _arrayValuenp5TQPI = [_arrayValueOWEEgnt, _arrayValuenSSsM6A, _arrayValuenYiXDb]
		const _arrayValueGTFoalT = null;
		const _arrayValuemXa4AYd = null;
		const _arrayValuek8NfDHg = {
		
	}
		const _arrayValuevYbTzh8 = [_arrayValuenp5TQPI, _arrayValueGTFoalT, _arrayValuemXa4AYd, _arrayValuek8NfDHg]
		const _arrayValuegQAK5wv = [_arrayValueCQXO5FU, _arrayValueo6ELkbf, _arrayValuevYbTzh8]
		const __helpFlagsQQyiIC7 = [_arrayValuegQAK5wv]
		const _cmdz03BIg9 = {
			"options": _optionskjh52Lu,
		"_hasHelpOption": __hasHelpOptionevOBg6b,
		"_helpShortFlag": __helpShortFlagMxwWPG4,
		"_findOption": __findOptionrHJ4D1h,
		"_helpLongFlag": __helpLongFlaglleMUFa,
		"createOption": _createOptionEr4d2AR,
		"_helpDescription": __helpDescriptionOFRTfbZ,
		"_helpFlags": __helpFlagsQQyiIC7
	}
		const _returnValueCNdWRtQ = await _HelpIFUGvLk.visibleOptions(_cmdz03BIg9)
		const _cmdpuClP9i = -5.617362106350511;
		const _returnValueTFVl0F = await _HelpIFUGvLk.subcommandDescription(_cmdpuClP9i)
		const _cmdpzckNxY = "g3K75";
		const _arrayValueu201GNM = undefined;
		const _arrayValueN3yl2xp = 1.0999488664967672;
		const _helperU8Zd7Be = [_arrayValueu201GNM, _arrayValueN3yl2xp]
		const _returnValueyoDHvWE = await _HelpIFUGvLk.longestArgumentTermLength(_cmdpzckNxY, _helperU8Zd7Be)
	});

	it('test for Help', async () => {
		const _HelpF0lDTJo = new Help()
		const _arrayValueilRa8PT = "4oTGDVYJi25Jho5hCtNbqiZYEErqjNAGK6xwH34c7Tihz1VzqAaC";
		const _returnValueNOaAgfL = undefined;
		const _arrayValuekouhjAx = () => { return _returnValueNOaAgfL };
		const _returnValuedUrc7CE = [_arrayValueilRa8PT, _arrayValuekouhjAx]
		const _matchZHMXPeD = () => { return _returnValuedUrc7CE };
		const _returnValuehAuqWgw = false;
		const _substrkn8400t = () => { return _returnValuehAuqWgw };
		const _strbsoi9m8 = {
			"match": _matchZHMXPeD,
		"substr": _substrkn8400t
	}
		const _widthaXXx9Li = 2.714882929536323;
		const _indentjEFStmi = 1.8866245442042295;
		const _minColumnWidthMjE4dWZ = 5.427379143155795;
		const _returnValueEO1vDsF = await _HelpF0lDTJo.wrap(_strbsoi9m8, _widthaXXx9Li, _indentjEFStmi, _minColumnWidthMjE4dWZ)
		const _arrayValueB2khqUO = "l9uwj13f4tmoQRwKzfvPt8k9txeqXTeadnc3mEMpc7whcAui";
		const _cmdcGWwlGB = [_arrayValueB2khqUO]
		const _returnValueICWrOFz = await _HelpF0lDTJo.commandUsage(_cmdcGWwlGB)
		const _cmdYsBFaCR = false;
		const _returnValueG5oQOPu = "jxxgShiCYG7YxY9AetLfMt9ofaievz6NdSQIdlGRh0NqUd9rSGH9G3OKdI";
		const _helperBsKQoMo = () => { return _returnValueG5oQOPu };
		const _returnValueMmt4mVo = await _HelpF0lDTJo.longestOptionTermLength(_cmdYsBFaCR, _helperBsKQoMo)
		const _cmdINBjc1U = "ZQ1isSSeOgnEW3QrvGW4";
		const _arrayValueqgaHPO = undefined;
		const _returnValueMlrmwh = [_arrayValueqgaHPO]
		const _helperKzs3kdp = () => { return _returnValueMlrmwh };
		const _returnValueL2SZyj9 = await _HelpF0lDTJo.longestOptionTermLength(_cmdINBjc1U, _helperKzs3kdp)
		const _cmde3uWY4L = undefined;
		const _returnValueVDZXntt = undefined;
		const _helperYg4pOo4 = () => { return _returnValueVDZXntt };
		const _returnValuePOKFEhQ = await _HelpF0lDTJo.longestOptionTermLength(_cmde3uWY4L, _helperYg4pOo4)
	});

	it('test for Help', async () => {
		const _HelprLKvP4S = new Help()
		const _argChoiceskIB0MT = null;
		const _defaultValuebTOwh0e = undefined;
		const _defaultValueDescriptioni0Y6k0r = 4.772871451268564;
		const _descriptionpwBL1s = -2.824148372842342;
		const _argumentoCHkuJA = {
			"argChoices": _argChoiceskIB0MT,
		"defaultValue": _defaultValuebTOwh0e,
		"defaultValueDescription": _defaultValueDescriptioni0Y6k0r,
		"description": _descriptionpwBL1s
	}
		const _returnValueqwjLzvQ = await _HelprLKvP4S.argumentDescription(_argumentoCHkuJA)
		const _cmdoINxk6y = "TShluAl0YdPuBZZVhfLxosKel";
		const _returnValueaHSP8A = "zCfJqJgDqQKn8eL";
		const _arrayValueJSQ5ffY = () => { return _returnValueaHSP8A };
		const _arrayValuer2L4lEE = 0.040798800058720275;
		const _arrayValueCIzFj0n = undefined;
		const _helperTsqBxfY = [_arrayValueJSQ5ffY, _arrayValuer2L4lEE, _arrayValueCIzFj0n]
		const _returnValuecKxkOx4 = await _HelprLKvP4S.longestSubcommandTermLength(_cmdoINxk6y, _helperTsqBxfY)
		const _argChoicesIVX4ygV = {
		
	}
		const _defaultValuenDg5IJY = undefined;
		const _defaultValueDescriptionlvQ6wcQ = "pawR5If0LyUysmEQsu6M9aFkOSFnC7IECmpMAj6LPGpto";
		const _descriptionJ3lVJqK = {
		
	}
		const _argument26a5eQ = {
			"argChoices": _argChoicesIVX4ygV,
		"defaultValue": _defaultValuenDg5IJY,
		"defaultValueDescription": _defaultValueDescriptionlvQ6wcQ,
		"description": _descriptionJ3lVJqK
	}
		const _returnValueUVJsXPr = await _HelprLKvP4S.argumentDescription(_argument26a5eQ)
	});

	it('test for Help', async () => {
		const _HelpyYEdL5T = new Help()
		const _returnValuet3U5SFN = undefined;
		const _matchzncJD0p = () => { return _returnValuet3U5SFN };
		const _returnValuezne59u5 = "l8xKv6VTNeMd8DEMpOkKInArvadp2mwBo5kghrKHPH";
		const _substrp20KMP3 = () => { return _returnValuezne59u5 };
		const _strCeEGBSc = {
			"match": _matchzncJD0p,
		"substr": _substrp20KMP3
	}
		const _widthjNchjC = 4.436489279518286;
		const _indentIIZc967 = -8.893001865972401;
		const _minColumnWidthMnStOKO = -7.135595476055714;
		const _returnValueGH72Yt8 = await _HelpyYEdL5T.wrap(_strCeEGBSc, _widthjNchjC, _indentIIZc967, _minColumnWidthMnStOKO)
		const _cmdzBgNqa7 = -6.059928575553301;
		const _sortSubcommandsl2Ywd1 = false;
		const _returnValue9LtHnu = -7.778142856233439;
		const _subcommandTermHJF0Ttp = () => { return _returnValue9LtHnu };
		const _helperkM5ISyv = {
			"sortSubcommands": _sortSubcommandsl2Ywd1,
		"subcommandTerm": _subcommandTermHJF0Ttp
	}
		const _returnValuemHzE8gj = await _HelpyYEdL5T.formatHelp(_cmdzBgNqa7, _helperkM5ISyv)
		const _arrayValueKIJedXg = {
		
	}
		const _arrayValuelgw5Rs4 = null;
		const _arrayValueNAKMpjS = [_arrayValuelgw5Rs4]
		const _argumentAPTyvjX = [_arrayValueKIJedXg, _arrayValueNAKMpjS]
		const _returnValueIYbab65 = await _HelpyYEdL5T.argumentDescription(_argumentAPTyvjX)
		const __argsbXHIeP2 = {
		
	}
		const __namerTMMhiU = 8.795800102624753;
		const __aliasesdGsYTY = {
		
	}
		const _optionsmUT5sf9 = {
		
	}
		const _cmdg70IfgH = {
			"_args": __argsbXHIeP2,
		"_name": __namerTMMhiU,
		"_aliases": __aliasesdGsYTY,
		"options": _optionsmUT5sf9
	}
		const _returnValuewD3ygH = await _HelpyYEdL5T.subcommandTerm(_cmdg70IfgH)
	});

	it('test for Help', async () => {
		const _HelpkUpL781 = new Help()
		const _argChoicesv9uXy8c = {
		
	}
		const _negateCNkSszi = null;
		const _defaultValueH2TYSOe = false;
		const _arrayValuewOtykMs = undefined;
		const _arrayValueZhtRu6f = undefined;
		const _returnValueHHLBj5L = false;
		const _arrayValueGxHMCxe = () => { return _returnValueHHLBj5L };
		const _defaultValueDescriptionyn54cmI = [_arrayValuewOtykMs, _arrayValueZhtRu6f, _arrayValueGxHMCxe]
		const _envVarNO0q1o = undefined;
		const _descriptionAufu6dV = "PozOVyr4tz8JIWax48ouk1cBaigA9iV46cGAK7";
		const _optionXXzZInC = {
			"argChoices": _argChoicesv9uXy8c,
		"negate": _negateCNkSszi,
		"defaultValue": _defaultValueH2TYSOe,
		"defaultValueDescription": _defaultValueDescriptionyn54cmI,
		"envVar": _envVarNO0q1o,
		"description": _descriptionAufu6dV
	}
		const _returnValueVQ1wZgc = await _HelpkUpL781.optionDescription(_optionXXzZInC)
		const _returnValuewieJqOC = false;
		const _cmdWv0Cr1q = () => { return _returnValuewieJqOC };
		const _returnValueDyHmtHT = await _HelpkUpL781.commandDescription(_cmdWv0Cr1q)
		const _cmdTKv3is2 = "vCsUpA15S0TcCYFT1H7aMPWYv4m13UrcfKm1GSITEodF3xVuY";
		const _returnValueHs8P7y7 = await _HelpkUpL781.subcommandDescription(_cmdTKv3is2)
		const _arrayValueQeljRS5 = "kHDzkzhthv4aVJim2Z1XotkcWeIGoMGIF2Q32Ppgy2CQTbUVWWqqU7v";
		const _arrayValuehwkktC7 = true;
		const _arrayValuegCC5kA8 = 2.6904473144929835;
		const _arrayValuecfYoOot = [_arrayValueQeljRS5, _arrayValuehwkktC7, _arrayValuegCC5kA8]
		const _argumentMNP6pPB = [_arrayValuecfYoOot]
		const _returnValuenhxTW1h = await _HelpkUpL781.argumentDescription(_argumentMNP6pPB)
		const _cmdkggIJOI = 6.184657120900383;
		const _helperApySPkJ = "0QiRKCPw45Z57BMTZiPthu2hMYBpvqf9Xfg1fH3BleTAt9zB4oSWn22";
		const _returnValueCq7GOTg = await _HelpkUpL781.longestSubcommandTermLength(_cmdkggIJOI, _helperApySPkJ)
	});

	it('test for Help', async () => {
		const _Helps33ev1t = new Help()
		const _arrayValueDSaxZqq = false;
		const _arrayValuecSzX13 = {
		
	}
		const _arrayValuezh4bX56 = true;
		const _arrayValueqvQympw = -7.871290301340468;
		const _arrayValuekWSbFEQ = [_arrayValuezh4bX56, _arrayValueqvQympw]
		const _arrayValueLWgpk2t = undefined;
		const _arrayValueCl2LNYR = [_arrayValuecSzX13, _arrayValuekWSbFEQ, _arrayValueLWgpk2t]
		const _optionjHNcz3c = [_arrayValueDSaxZqq, _arrayValueCl2LNYR]
		const _returnValueSKq9Y1K = await _Helps33ev1t.optionDescription(_optionjHNcz3c)
		const _strKNIscyw = "z68EWcGg8o7O3C5smLEkFnCtuq5Fv7INnrAUpUgnWAzw9WP";
		const _widthPHmzJPe = -4.860216023209741;
		const _indentVXhYKjG = 3.6541082254958646;
		const _minColumnWidthZCs7Gz2 = -4.559363033630012;
		const _returnValuecdDNiQE = await _Helps33ev1t.wrap(_strKNIscyw, _widthPHmzJPe, _indentVXhYKjG, _minColumnWidthZCs7Gz2)
		const _returnValueeatKAz2 = null;
		const _argumentymphj1 = () => { return _returnValueeatKAz2 };
		const _returnValuemjw4Zkh = await _Helps33ev1t.argumentTerm(_argumentymphj1)
	});

	it('test for Help', async () => {
		const _HelpWzLZaTa = new Help()
		const _arrayValueslnjwLQ = undefined;
		const _flagsgHFqjMJ = [_arrayValueslnjwLQ]
		const _optionTmIXnCX = {
			"flags": _flagsgHFqjMJ
	}
		const _returnValuedV4cv3i = await _HelpWzLZaTa.optionTerm(_optionTmIXnCX)
		const _cmdCmDfoQ6 = 6.955138742612025;
		const _helperxhlq1dB = new Help()
		const _nameAR9RTFQ = undefined;
		const _cmdT40Wm7 = new Command(_nameAR9RTFQ)
		const _requiredU11Nrd = {
		
	}
		const _defaultValueGSQPEyu = undefined;
		const _parseArgxhJIxF4 = undefined;
		const _returnValueR6nAOTx = undefined;
		const _nameN9oIKE = () => { return _returnValueR6nAOTx };
		const _argumentM27RopG = {
			"required": _requiredU11Nrd,
		"defaultValue": _defaultValueGSQPEyu,
		"parseArg": _parseArgxhJIxF4,
		"name": _nameN9oIKE
	}
		const _returnValueJJQxEH2 = await _cmdT40Wm7.addArgument(_argumentM27RopG)
		const _returnValuemSlH1Fn = await _helperxhlq1dB.subcommandTerm(_cmdT40Wm7)
		const _returnValueqKQEEON = []
		const _descriptionYfI5NBK = () => { return _returnValueqKQEEON };
		const _cmdyf9zfEP = {
			"description": _descriptionYfI5NBK
	}
		const _returnValuerkmCTAu = await _helperxhlq1dB.commandDescription(_cmdyf9zfEP)
		const _returnValueKNgT8j = {
		
	}
		const _cmdxnKrmo = () => { return _returnValueKNgT8j };
		const _returnValueKkbKlxG = await _helperxhlq1dB.visibleCommands(_cmdxnKrmo)
		const _returnValueo9Ba8C3 = await _HelpWzLZaTa.formatHelp(_cmdCmDfoQ6, _helperxhlq1dB)
	});

	it('test for Help', async () => {
		const _HelpQscUWJD = new Help()
		const _cmddipwL1q = "YNbYsfb76P35E9AL82FfeB4x4";
		const _helperyfZxeYq = new Help()
		const _nameCK1orJ5 = "mSG2pw7bG4aHWnL90MHn4OhyKrN7zngZe7u3lM5s1lRAHoWKEmmH143L7il53mWnvn2Wme58";
		const _descriptionpne4eri = -9.407386956496616;
		const _argumentjVJ1bXm = new Argument(_nameCK1orJ5, _descriptionpne4eri)
		const _valueRZsUzsD = null;
		const _descriptionpJXDwFb = {
		
	}
		const _returnValuewsWA7Rq = await _argumentjVJ1bXm.default(_valueRZsUzsD, _descriptionpJXDwFb)
		const _returnValueS1qIMVu = await _argumentjVJ1bXm.argRequired()
		const _returnValueCXQZ6mk = await _argumentjVJ1bXm.name()
		const _returnValueopcmKD = await _argumentjVJ1bXm.name()
		const _returnValueVtixFfJ = await _helperyfZxeYq.argumentDescription(_argumentjVJ1bXm)
		const _arrayValue6FcjEx = undefined;
		const _arrayValuehKfSEa = "DhxM9gQMzW297CmdZ7uaRJXHqKLsjjyiOfyjhmwfc5viHFnBSHjt9nb7iBn7iS1qOKDdWpI";
		const _arrayValueESpztkX = null;
		const _arrayValueF63Oo2 = "FwEFK4Pihuy5ENSPdcAP7b68BGHxUlAS1FrdcUqcZILghQNyPS31lRAFkC1SI1mN6RmAKR2L5wEBpSkn6XqBDFdwJwLLe";
		const _arrayValueKjOhbQS = [_arrayValue6FcjEx, _arrayValuehKfSEa, _arrayValueESpztkX, _arrayValueF63Oo2]
		const _arrayValueglJJEaU = false;
		const _arrayValuewJoOeCH = undefined;
		const _arrayValueqRbpAe6 = []
		const _arrayValueAjvV9SF = 5.659681564737454;
		const _arrayValueZ6pf3uk = [_arrayValueglJJEaU, _arrayValuewJoOeCH, _arrayValueqRbpAe6, _arrayValueAjvV9SF]
		const _arrayValueszdBsh2 = null;
		const _optionisq0bxP = [_arrayValueKjOhbQS, _arrayValueZ6pf3uk, _arrayValueszdBsh2]
		const _returnValuelsuNIW = await _helperyfZxeYq.optionDescription(_optionisq0bxP)
		const _nameZzChyza = "ewb9DKXwaQQH7iGCwPDffO4N";
		const _descriptionWNlZFqO = {
		
	}
		const _argumentTjeCbe3 = new Argument(_nameZzChyza, _descriptionWNlZFqO)
		const _returnValuepUN5OXY = await _argumentTjeCbe3.argRequired()
		const _valuetmhNNSr = undefined;
		const _descriptionZop1r1j = {
		
	}
		const _returnValueA8y3LXI = await _argumentTjeCbe3.default(_valuetmhNNSr, _descriptionZop1r1j)
		const _returnValueivBp3KR = await _helperyfZxeYq.argumentDescription(_argumentTjeCbe3)
		const _returnValuePyCruVy = await _HelpQscUWJD.longestArgumentTermLength(_cmddipwL1q, _helperyfZxeYq)
	});

	it('test for Help', async () => {
		const _HelpGdWXBV = new Help()
		const _flagsLLl0DvA = "rUUnbqqzbD17vYl";
		const _descriptionG4LspDJ = undefined;
		const _cmdSAwref = new Option(_flagsLLl0DvA, _descriptionG4LspDJ)
		const _fnknq1E2B = undefined;
		const _returnValueHiIVYMf = await _cmdSAwref.argParser(_fnknq1E2B)
		const _returnValuelBV9HSp = await _HelpGdWXBV.subcommandDescription(_cmdSAwref)
		const _flagsg6OmXd7 = "jQbJKlecfSerXZ1TM8l";
		const _descriptionXWbtRL3 = true;
		const _cmdun1NZq7 = new Option(_flagsg6OmXd7, _descriptionXWbtRL3)
		const _nameZP8rPvr = undefined;
		const _returnValueoap3HF7 = await _cmdun1NZq7.env(_nameZP8rPvr)
		const _mandatorymLTIZSq = false;
		const _returnValuehLJyMOF = await _cmdun1NZq7.makeOptionMandatory(_mandatorymLTIZSq)
		const _name6WmQkc = "NvonJP5r718iE8I6iLfxA457ts22UJWos1mT5LddC3mL2oM4JJn6zjHPpJhQe67zVrlEjnZpUGkOi5kFI19mRh";
		const _returnValuehnYeEpL = await _cmdun1NZq7.env(_name6WmQkc)
		const _returnValuesB2wIIK = await _HelpGdWXBV.commandDescription(_cmdun1NZq7)
	});

	it('test for Help', async () => {
		const _HelpMobo7MX = new Help()
		const __nameRTmFCg6 = {
		
	}
		const __aliasesgLkVgTc = "tvEXYkiyTo7sG2qBIjHJPWPNCrLlcE1apiHev6fKJjTMWF3KeMdNzJrQPLROGhFGFzFgu3Mw6Eo5SK2eXx7HVJIoXN9R";
		const _arrayValuegHFBhFD = false;
		const _arrayValuetVTFcGU = {
		
	}
		const _arrayValuemtrmClf = "RdYOsOac0p8YlIn7xytyngjOcuDVeLHKCyNkgOCoLLwzXGKfHLYumEGVcTKsjOVLLeLOOtY57r3";
		const _parentul3U4K2 = [_arrayValuegHFBhFD, _arrayValuetVTFcGU, _arrayValuemtrmClf]
		const _usageqELGcut = -3.5962910893543674;
		const _cmdMIaLBir = {
			"_name": __nameRTmFCg6,
		"_aliases": __aliasesgLkVgTc,
		"parent": _parentul3U4K2,
		"usage": _usageqELGcut
	}
		const _returnValue8gnD6T = await _HelpMobo7MX.commandUsage(_cmdMIaLBir)
		const _cmdQ6zTxEb = []
		const _returnValueTm3RNT = await _HelpMobo7MX.subcommandTerm(_cmdQ6zTxEb)
		const _arrayValueRE7YB4n = null;
		const _arrayValuey4ZjbFy = {
		
	}
		const _arrayValueyUVn9k3 = [_arrayValuey4ZjbFy]
		const _arrayValueFpcRFsf = [_arrayValueyUVn9k3]
		const _optionKl2RBeF = [_arrayValueRE7YB4n, _arrayValueFpcRFsf]
		const _returnValueuiR3kRE = await _HelpMobo7MX.optionTerm(_optionKl2RBeF)
		const _cmdLamGkfW = undefined;
		const _returnValuew86pRZQ = undefined;
		const _helperD5m4Ze = () => { return _returnValuew86pRZQ };
		const _returnValueK57yFNq = await _HelpMobo7MX.longestArgumentTermLength(_cmdLamGkfW, _helperD5m4Ze)
		const _optionGCh79qU = "sUnJygdp7ngQLBPYmpHwBNrOxoZmQjta4DLTkmO6ml3gVC";
		const _returnValuepnUnNis = await _HelpMobo7MX.optionDescription(_optionGCh79qU)
	});

	it('test for Help', async () => {
		const _HelpVCKzHqq = new Help()
		const _returnValuez5sCoFU = null;
		const _descriptionYHYXps = () => { return _returnValuez5sCoFU };
		const _cmdXGW4DHK = {
			"description": _descriptionYHYXps
	}
		const _returnValueFRE2PbO = await _HelpVCKzHqq.commandDescription(_cmdXGW4DHK)
		const _nameuqJDQ6Q = -4.398968787681331;
		const _cmdY2snNOQ = new Command(_nameuqJDQ6Q)
		const _argumentIFXtiXg = 4.747095944852573;
		const _returnValuepewpxOw = await _cmdY2snNOQ.addArgument(_argumentIFXtiXg)
		const _keyclejdBA = undefined;
		const _valuelWmHSGe = true;
		const _sourceJNUCgfo = false;
		const _returnValuemVLCCsy = await _cmdY2snNOQ.setOptionValueWithSource(_keyclejdBA, _valuelWmHSGe, _sourceJNUCgfo)
		const _requiredDjOj6Py = undefined;
		const _defaultValuen3Ji0To = undefined;
		const _parseArgqEGUZR1 = undefined;
		const _returnValuenFt9gR = null;
		const _returnValueTRBQalG = () => { return _returnValuenFt9gR };
		const _nameBi6a2IP = () => { return _returnValueTRBQalG };
		const _argumentav6n8W = {
			"required": _requiredDjOj6Py,
		"defaultValue": _defaultValuen3Ji0To,
		"parseArg": _parseArgqEGUZR1,
		"name": _nameBi6a2IP
	}
		const _returnValuedpWGcM4 = await _cmdY2snNOQ.addArgument(_argumentav6n8W)
		const _combinef1X2mmP = false;
		const _returnValuetGeQtm0 = await _cmdY2snNOQ.combineFlagAndOptionalValue(_combinef1X2mmP)
		const _fnNpI4ykV = "HkJNVlnoRcQVXz4yl4HuCnVIzvaxXQ1tE8wVXfCjP6PzLZpwhzr4k61orr5EvLT8ashCm7hMq";
		const _returnValueTUs8xL = await _cmdY2snNOQ.exitOverride(_fnNpI4ykV)
		const _returnValueDnaD3oE = await _HelpVCKzHqq.visibleCommands(_cmdY2snNOQ)
		const _namervgx7Vb = null;
		const _argumentxxqaop = new Command(_namervgx7Vb)
		const _namei25PVkj = -5.594713163640666;
		const _descriptionexySLf = {
		
	}
		const _returnValueCCEFHpW = await _argumentxxqaop.createArgument(_namei25PVkj, _descriptionexySLf)
		const _streGkZdAj = undefined;
		const _flagsnIG0K5X = {
		
	}
		const _descriptionrSKQlkl = {
		
	}
		const _returnValueXKAeC4 = await _argumentxxqaop.version(_streGkZdAj, _flagsnIG0K5X, _descriptionrSKQlkl)
		const _returnValueczBO9A = "ZmLCEdsyBikfkGR";
		const _contextOptionsYRGBu2h = () => { return _returnValueczBO9A };
		const _returnValuejFZP5Pf = await _argumentxxqaop.outputHelp(_contextOptionsYRGBu2h)
		const _arrayValuensgCAlr = undefined;
		const _arrayValue1gZCER = -4.067364840464789;
		const _arrayValueDUJjjik = false;
		const _arrayValueROTvlWT = undefined;
		const _arrayValuegNtCpK3 = []
		const _arrayValueWoY5tKK = [_arrayValueDUJjjik, _arrayValueROTvlWT, _arrayValuegNtCpK3]
		const _lengthtei2Pw = [_arrayValuensgCAlr, _arrayValue1gZCER, _arrayValueWoY5tKK]
		const _receivedArgsjMC1D3m = {
			"length": _lengthtei2Pw
	}
		const _returnValueF6JpwG = await _argumentxxqaop._excessArguments(_receivedArgsjMC1D3m)
		const _returnValueqkiYgYy = await _HelpVCKzHqq.argumentTerm(_argumentxxqaop)
	});
})