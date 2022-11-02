export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelplUYHEKM = new Help()
		const __argsGSKt2Hw = {
		
	}
		const __namerNZ6PvD = -4.882730178195562;
		const __aliasesM6mRQb = {
		
	}
		const _optionsBq9jPiH = {
		
	}
		const _cmdg5YjQYH = {
			"_args": __argsGSKt2Hw,
		"_name": __namerNZ6PvD,
		"_aliases": __aliasesM6mRQb,
		"options": _optionsBq9jPiH
	}
		const _returnValueFdfFabs = await _HelplUYHEKM.subcommandTerm(_cmdg5YjQYH)
	});

	it('test for Help', async () => {
		const _HelpwG1Rkmy = new Help()
		const _cmdqgi8W2 = null;
		const _returnValueY9PVUcz = "YzWvIOAfNKlU6gtRQo8BxkDqUaiAAmrDxxto2HDVT9aOLGCb48ezgSXszXXqThv3g";
		const _visibleOptionsrxbHVHu = () => { return _returnValueY9PVUcz };
		const _returnValuexbKewEA = {
		
	}
		const _optionTermMURITSn = () => { return _returnValuexbKewEA };
		const _helperanjn2r = {
			"visibleOptions": _visibleOptionsrxbHVHu,
		"optionTerm": _optionTermMURITSn
	}
		const _returnValueSphCbAv = await _HelpwG1Rkmy.longestOptionTermLength(_cmdqgi8W2, _helperanjn2r)
		const _cmdDRVpu9Y = {
		
	}
		const _returnValueIcnrtce = null;
		const _longestOptionTermLengthsX2gRrE = () => { return _returnValueIcnrtce };
		const _returnValueitv4GTW = undefined;
		const _longestSubcommandTermLength69FmcN = () => { return _returnValueitv4GTW };
		const _arrayValuePMQNR8 = false;
		const _arrayValueHWop0XN = 2.564308861905795;
		const _arrayValuej8mdELy = null;
		const _arrayValueg3O5q5S = "dyToX9HpJuiLsvFZrNliM2UMp7Ezrrm";
		const _arrayValuev9gyIno = [_arrayValueHWop0XN, _arrayValuej8mdELy, _arrayValueg3O5q5S]
		const _returnValueZR3sJBV = [_arrayValuePMQNR8, _arrayValuev9gyIno]
		const _longestArgumentTermLengthdf3HDeB = () => { return _returnValueZR3sJBV };
		const _helpermtcWd7k = {
			"longestOptionTermLength": _longestOptionTermLengthsX2gRrE,
		"longestSubcommandTermLength": _longestSubcommandTermLength69FmcN,
		"longestArgumentTermLength": _longestArgumentTermLengthdf3HDeB
	}
		const _returnValuebRwjZjs = await _HelpwG1Rkmy.padWidth(_cmdDRVpu9Y, _helpermtcWd7k)
		const _cmdA3o8fO = "yNoSdb2OvjX5ftIGKwMVzlknhMIMgpkgYkrlpwQWA";
		const _sortSubcommandsSeSFA3S = null;
		const _returnValueio2fWVj = -7.8342452534282465;
		const _subcommandTermF7EMxBY = () => { return _returnValueio2fWVj };
		const _helpermVKfdkp = {
			"sortSubcommands": _sortSubcommandsSeSFA3S,
		"subcommandTerm": _subcommandTermF7EMxBY
	}
		const _returnValueQAGmuVK = await _HelpwG1Rkmy.formatHelp(_cmdA3o8fO, _helpermVKfdkp)
	});

	it('test for Help', async () => {
		const _HelpBenYlk = new Help()
		const _returnValueEd17D6N = true;
		const _returnValueLs9viAC = () => { return _returnValueEd17D6N };
		const _descriptionkFpkF1P = () => { return _returnValueLs9viAC };
		const _cmdOOYm6DG = {
			"description": _descriptionkFpkF1P
	}
		const _returnValueZJ600V5 = await _HelpBenYlk.commandDescription(_cmdOOYm6DG)
		const _arrayValueeYdwEix = undefined;
		const _arrayValueHOs1jIg = true;
		const _cmdLQf0Dl = [_arrayValueeYdwEix, _arrayValueHOs1jIg]
		const _returnValuexfFXBQ = "QX1T5LiWJQ6bTaRk9HlKKwn8DEWwt6eOxNO8JVqMTB0dopIbOMdMTHBJUOYczDjkxscZ5jF5T17xN8DU9MOvmfUU5Jj";
		const _visibleArgumentsGdnnKs3 = () => { return _returnValuexfFXBQ };
		const _returnValueqLDQvke = []
		const _argumentTermXiWcOL0 = () => { return _returnValueqLDQvke };
		const _helperPz0cD2M = {
			"visibleArguments": _visibleArgumentsGdnnKs3,
		"argumentTerm": _argumentTermXiWcOL0
	}
		const _returnValuevBVI1di = await _HelpBenYlk.longestArgumentTermLength(_cmdLQf0Dl, _helperPz0cD2M)
		const _cmdCZAafir = "yy0jf";
		const _sortSubcommandsGnjD3Oy = false;
		const _returnValuetnZGbEd = -0.31966661184496914;
		const _subcommandTermwzrMXxX = () => { return _returnValuetnZGbEd };
		const _helperR3nrZM1 = {
			"sortSubcommands": _sortSubcommandsGnjD3Oy,
		"subcommandTerm": _subcommandTermwzrMXxX
	}
		const _returnValuej7JbPEN = await _HelpBenYlk.formatHelp(_cmdCZAafir, _helperR3nrZM1)
	});

	it('test for Help', async () => {
		const _HelpiAFpfER = new Help()
		const _returnValueuRYNRXh = "psVHcEJShVjNynALWad8bW2pMg2fP2L312q7F9h3GDPlWcwqG2OZjTeRp";
		const _descriptionrgy3YJ = () => { return _returnValueuRYNRXh };
		const _cmdrof3aUG = {
			"description": _descriptionrgy3YJ
	}
		const _returnValueuK2EqIo = await _HelpiAFpfER.subcommandDescription(_cmdrof3aUG)
		const _cmdEJK3zJ = false;
		const _longestOptionTermLengthF14mqI = -6.442648474674565;
		const _returnValuecLbTZC1 = 3.1105606013947025;
		const _longestSubcommandTermLengthhJjsGse = () => { return _returnValuecLbTZC1 };
		const _arrayValueIFpe39k = {
		
	}
		const _returnValueFVOZFxY = [_arrayValueIFpe39k]
		const _longestArgumentTermLengthNyh7f5z = () => { return _returnValueFVOZFxY };
		const _helpersxv7Cay = {
			"longestOptionTermLength": _longestOptionTermLengthF14mqI,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhJjsGse,
		"longestArgumentTermLength": _longestArgumentTermLengthNyh7f5z
	}
		const _returnValueDzJSXNK = await _HelpiAFpfER.padWidth(_cmdEJK3zJ, _helpersxv7Cay)
		const _returnValuekJLuyPl = 0.09981940211754647;
		const _nameHC4QEBq = () => { return _returnValuekJLuyPl };
		const _argumentDqwrfwI = {
			"name": _nameHC4QEBq
	}
		const _returnValue9t3eQd = await _HelpiAFpfER.argumentTerm(_argumentDqwrfwI)
		const _cmdfD9TSEd = []
		const _returnValuezLpOivH = true;
		const _visibleOptionsBw6dfT0 = () => { return _returnValuezLpOivH };
		const _arrayValuefDRzI68 = true;
		const _arrayValueIltIMEN = undefined;
		const _arrayValueKVt0i2D = [_arrayValueIltIMEN]
		const _arrayValuelwAodCQ = 2.749741993359166;
		const _arrayValueWQTJ0WV = true;
		const _arrayValueAZsp5cl = [_arrayValuefDRzI68, _arrayValueKVt0i2D, _arrayValuelwAodCQ, _arrayValueWQTJ0WV]
		const _arrayValueknY4Orq = undefined;
		const _arrayValueonYcZS1 = 6.962960846914562;
		const _arrayValueq4AN4j = undefined;
		const _optionTermAGNKwwp = [_arrayValueAZsp5cl, _arrayValueknY4Orq, _arrayValueonYcZS1, _arrayValueq4AN4j]
		const _helperBMAqNGd = {
			"visibleOptions": _visibleOptionsBw6dfT0,
		"optionTerm": _optionTermAGNKwwp
	}
		const _returnValueCagg3wl = await _HelpiAFpfER.longestOptionTermLength(_cmdfD9TSEd, _helperBMAqNGd)
	});

	it('test for Help', async () => {
		const _Helpt9sxoep = new Help()
		const _returnValuediV1n0Y = null;
		const _argChoicesorYdltq = () => { return _returnValuediV1n0Y };
		const _defaultValueTWhIWpZ = true;
		const _defaultValueDescriptionkZ6haZ7 = true;
		const _descriptionTThj1NH = null;
		const _argumenttpLQCHL = {
			"argChoices": _argChoicesorYdltq,
		"defaultValue": _defaultValueTWhIWpZ,
		"defaultValueDescription": _defaultValueDescriptionkZ6haZ7,
		"description": _descriptionTThj1NH
	}
		const _returnValueRDtxDA2 = await _Helpt9sxoep.argumentDescription(_argumenttpLQCHL)
	});

	it('test for Help', async () => {
		const _HelponaGYWQ = new Help()
		const _arrayValuesTyCiQV = true;
		const _arrayValuerISbur2 = null;
		const _returnValuebzszcD3 = true;
		const _arrayValueRAtB0ID = () => { return _returnValuebzszcD3 };
		const _returnValueOHXWrAt = [_arrayValuesTyCiQV, _arrayValuerISbur2, _arrayValueRAtB0ID]
		const _matchyi0yUE8 = () => { return _returnValueOHXWrAt };
		const _returnValueFFewxIK = null;
		const _substrnrtn6k8 = () => { return _returnValueFFewxIK };
		const _stromxiIj5 = {
			"match": _matchyi0yUE8,
		"substr": _substrnrtn6k8
	}
		const _widthfgS9je = "7voQlQnFlVtMRpqWk4Lyb2oilSu78DIAn32fSJDIzAO7tAfCsSyM8lZOShb3o4RyB";
		const _indentWHoapiJ = {
		
	}
		const _minColumnWidths1OQ4ef = -1.6671001580519444;
		const _returnValuenC5vmsy = await _HelponaGYWQ.wrap(_stromxiIj5, _widthfgS9je, _indentWHoapiJ, _minColumnWidths1OQ4ef)
		const _argChoicesr9YLx0Q = {
		
	}
		const _defaultValuesOPag6h = undefined;
		const _defaultValueDescriptionAiUNFT = "Nuu77voTOR8Tx6erm7zqkm7eX1PdGlHujVCrIaDKdWvbxC";
		const _arrayValuecTl4XA = null;
		const _arrayValueH20cDaV = undefined;
		const _arrayValueLtvaMSZ = -6.940119612442295;
		const _arrayValuebGR1Gjf = {
		
	}
		const _descriptionUYnkSGF = [_arrayValuecTl4XA, _arrayValueH20cDaV, _arrayValueLtvaMSZ, _arrayValuebGR1Gjf]
		const _argumenteRlbrIO = {
			"argChoices": _argChoicesr9YLx0Q,
		"defaultValue": _defaultValuesOPag6h,
		"defaultValueDescription": _defaultValueDescriptionAiUNFT,
		"description": _descriptionUYnkSGF
	}
		const _returnValueqCCdCQc = await _HelponaGYWQ.argumentDescription(_argumenteRlbrIO)
		const _cmdRIIZZIS = -9.954977365213967;
		const _returnValueAyOn2Ve = {
		
	}
		const _visibleOptionsemQcYZK = () => { return _returnValueAyOn2Ve };
		const _returnValueKiSXS5a = null;
		const _optionTermXRY53Ba = () => { return _returnValueKiSXS5a };
		const _helperBEW9yPu = {
			"visibleOptions": _visibleOptionsemQcYZK,
		"optionTerm": _optionTermXRY53Ba
	}
		const _returnValuelXGTtN6 = await _HelponaGYWQ.longestOptionTermLength(_cmdRIIZZIS, _helperBEW9yPu)
		const __nameu5UhrbU = false;
		const __aliasesImLpnVF = {
		
	}
		const _parentiVDTD8 = {
		
	}
		const _returnValuemhRkRKs = null;
		const _returnValue84bcQL = () => { return _returnValuemhRkRKs };
		const _usageACiYkIj = () => { return _returnValue84bcQL };
		const _cmdFXpGSA4 = {
			"_name": __nameu5UhrbU,
		"_aliases": __aliasesImLpnVF,
		"parent": _parentiVDTD8,
		"usage": _usageACiYkIj
	}
		const _returnValueS31qKWS = await _HelponaGYWQ.commandUsage(_cmdFXpGSA4)
	});

	it('test for Help', async () => {
		const _HelpYgGP5nF = new Help()
		const _returnValueikkiXT6 = null;
		const _descriptiondYqm7d7 = () => { return _returnValueikkiXT6 };
		const _cmdc7Bs62H = {
			"description": _descriptiondYqm7d7
	}
		const _returnValueTfRcI0Z = await _HelpYgGP5nF.commandDescription(_cmdc7Bs62H)
		const _argChoicesXKbYsnn = {
		
	}
		const _negateJ908kp = null;
		const _defaultValueTe9qfw = undefined;
		const _defaultValueDescriptionzRruIrq = -2.410136327063096;
		const _envVarpmKjopa = undefined;
		const _returnValueK8qy7q = -6.169931793061733;
		const _descriptionk8yOv0 = () => { return _returnValueK8qy7q };
		const _optionhtHkYKh = {
			"argChoices": _argChoicesXKbYsnn,
		"negate": _negateJ908kp,
		"defaultValue": _defaultValueTe9qfw,
		"defaultValueDescription": _defaultValueDescriptionzRruIrq,
		"envVar": _envVarpmKjopa,
		"description": _descriptionk8yOv0
	}
		const _returnValuebdMohT4 = await _HelpYgGP5nF.optionDescription(_optionhtHkYKh)
		const _optionsh3ylyiS = {
		
	}
		const __hasHelpOptioneHq70PW = {
		
	}
		const __helpShortFlagWLf0Oeh = false;
		const _returnValued4freAG = 1.1171081169359987;
		const __findOptionUH3bKzU = () => { return _returnValued4freAG };
		const __helpLongFlagkqr4ye = null;
		const _arrayValueb4YQf2H = null;
		const _arrayValueFiMAP6T = "r8OxdUunWegiBmabOyhmb9ySG5gmIOnU";
		const _returnValueN6YIGLS = [_arrayValueb4YQf2H, _arrayValueFiMAP6T]
		const _createOptionyb4D7gf = () => { return _returnValueN6YIGLS };
		const _arrayValueeiEXP2U = undefined;
		const __helpDescriptioncm3qi8u = [_arrayValueeiEXP2U]
		const _arrayValuel8KUKCQ = undefined;
		const __helpFlagsZni3yV = [_arrayValuel8KUKCQ]
		const _cmdPCGnKov = {
			"options": _optionsh3ylyiS,
		"_hasHelpOption": __hasHelpOptioneHq70PW,
		"_helpShortFlag": __helpShortFlagWLf0Oeh,
		"_findOption": __findOptionUH3bKzU,
		"_helpLongFlag": __helpLongFlagkqr4ye,
		"createOption": _createOptionyb4D7gf,
		"_helpDescription": __helpDescriptioncm3qi8u,
		"_helpFlags": __helpFlagsZni3yV
	}
		const _returnValuekxeup9 = await _HelpYgGP5nF.visibleOptions(_cmdPCGnKov)
		const _argChoicesYLhSBAL = "87EVs7bRMTJD45w6RUUwX9l2xecbDig1HELOK7MTFxss6h3BBxs5SdQgc0";
		const _returnValueYzfVA3P = "e941zBHfgn";
		const _negateQ9SyNTe = () => { return _returnValueYzfVA3P };
		const _defaultValueAu739PK = undefined;
		const _defaultValueDescriptionkurRxJD = 7.915368375895742;
		const _envVarcgRJ7p9 = undefined;
		const _descriptionQghV9WM = 4.603284494239411;
		const _optionUAcURJE = {
			"argChoices": _argChoicesYLhSBAL,
		"negate": _negateQ9SyNTe,
		"defaultValue": _defaultValueAu739PK,
		"defaultValueDescription": _defaultValueDescriptionkurRxJD,
		"envVar": _envVarcgRJ7p9,
		"description": _descriptionQghV9WM
	}
		const _returnValueKdNg1jh = await _HelpYgGP5nF.optionDescription(_optionUAcURJE)
	});

	it('test for Help', async () => {
		const _HelpYK91UhY = new Help()
		const _cmddLhfcMZ = null;
		const _sortSubcommandsJHeOLGv = undefined;
		const _arrayValueVT8PoEE = null;
		const _returnValueAtzbFBz = 5.537666137372437;
		const _arrayValueQp16P12 = () => { return _returnValueAtzbFBz };
		const _arrayValuecxHqNRH = undefined;
		const _returnValuet9dTYS8 = [_arrayValueVT8PoEE, _arrayValueQp16P12, _arrayValuecxHqNRH]
		const _subcommandTermg4T4hlg = () => { return _returnValuet9dTYS8 };
		const _helperiBpP8YQ = {
			"sortSubcommands": _sortSubcommandsJHeOLGv,
		"subcommandTerm": _subcommandTermg4T4hlg
	}
		const _returnValuerdYir0X = await _HelpYK91UhY.longestSubcommandTermLength(_cmddLhfcMZ, _helperiBpP8YQ)
		const _returnValueVhZgy0e = "iXHJWcH20g";
		const _descriptionB90iia0 = () => { return _returnValueVhZgy0e };
		const _cmdf1t2K8 = {
			"description": _descriptionB90iia0
	}
		const _returnValuertqkhTs = await _HelpYK91UhY.subcommandDescription(_cmdf1t2K8)
		const _arrayValueeaObJqy = true;
		const _cmdt60CFBt = [_arrayValueeaObJqy]
		const _returnValueYt0mwWC = "FOVaza68l5wFpTK";
		const _longestOptionTermLengthLLrhEcO = () => { return _returnValueYt0mwWC };
		const _returnValuen7U6LwJ = false;
		const _longestSubcommandTermLengthI8CyNNY = () => { return _returnValuen7U6LwJ };
		const _returnValuejOA2Gc8 = null;
		const _longestArgumentTermLengths2Pc7eu = () => { return _returnValuejOA2Gc8 };
		const _helpergAtJUr = {
			"longestOptionTermLength": _longestOptionTermLengthLLrhEcO,
		"longestSubcommandTermLength": _longestSubcommandTermLengthI8CyNNY,
		"longestArgumentTermLength": _longestArgumentTermLengths2Pc7eu
	}
		const _returnValueno1itFk = await _HelpYK91UhY.padWidth(_cmdt60CFBt, _helpergAtJUr)
	});

	it('test for Help', async () => {
		const _Helpz1tXllT = new Help()
		const _commandsYV5cdPn = {
		
	}
		const _returnValueJAWurM = "hwDlW1WFxKThGpJ6nHE3GSijq3H6GkqaQ7Xzkw8mxrbF07kY6dR8g5tKDfX8OBBAEHWAryAKW9AQ9tvu7Rg4hndi";
		const __hasImplicitHelpCommandli68vTs = () => { return _returnValueJAWurM };
		const __helpCommandnameAndArgsfjL2KoK = {
		
	}
		const _arrayValueBnUsXK = true;
		const _arrayValueZ8Fp8P3 = true;
		const _returnValuesuhqNaM = [_arrayValueBnUsXK, _arrayValueZ8Fp8P3]
		const _createCommandTxLsx2v = () => { return _returnValuesuhqNaM };
		const __helpCommandDescriptionxBtSAPz = {
		
	}
		const _cmdFGNtWEb = {
			"commands": _commandsYV5cdPn,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandli68vTs,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsfjL2KoK,
		"createCommand": _createCommandTxLsx2v,
		"_helpCommandDescription": __helpCommandDescriptionxBtSAPz
	}
		const _returnValueOb5Bh1T = await _Helpz1tXllT.visibleCommands(_cmdFGNtWEb)
		const _cmdjx2DmmL = -1.4055130385653243;
		const _sortSubcommandsygAJ1yP = -9.251592751374211;
		const _returnValuexoeIxf = 3.9376368959981924;
		const _subcommandTermni35SSL = () => { return _returnValuexoeIxf };
		const _helpertnsjiUd = {
			"sortSubcommands": _sortSubcommandsygAJ1yP,
		"subcommandTerm": _subcommandTermni35SSL
	}
		const _returnValueGfOxhPI = await _Helpz1tXllT.longestSubcommandTermLength(_cmdjx2DmmL, _helpertnsjiUd)
	});

	it('test for Help', async () => {
		const _HelpiPWemA6 = new Help()
		const __argsDescriptionyGLRsND = {
		
	}
		const __argsTxiKfSA = {
		
	}
		const _cmdrbMfa2h = {
			"_argsDescription": __argsDescriptionyGLRsND,
		"_args": __argsTxiKfSA
	}
		const _returnValueZs8kuof = await _HelpiPWemA6.visibleArguments(_cmdrbMfa2h)
		const _arrayValueLncKtW9 = "kgycUsKrYBjkifoy";
		const _arrayValuehlZVfNt = {
		
	}
		const _arrayValueRdb3UVo = true;
		const _arrayValuetVJLPv = "wpQrlkZUjwUnV8pZdhHrxz7hQsrZ7PgCu6lg8XKsP26MuMSkSmaBvesHkqFzElHDOljG";
		const _cmdTyrGPov = [_arrayValueLncKtW9, _arrayValuehlZVfNt, _arrayValueRdb3UVo, _arrayValuetVJLPv]
		const _returnValueJVoSMt7 = await _HelpiPWemA6.subcommandDescription(_cmdTyrGPov)
		const _cmdmZghHbQ = false;
		const _sortSubcommandsmWQHQv = null;
		const _returnValuex8R096x = {
		
	}
		const _subcommandTermha2SZOY = () => { return _returnValuex8R096x };
		const _helperA4Kf64d = {
			"sortSubcommands": _sortSubcommandsmWQHQv,
		"subcommandTerm": _subcommandTermha2SZOY
	}
		const _returnValuehd0SgA = await _HelpiPWemA6.formatHelp(_cmdmZghHbQ, _helperA4Kf64d)
	});

	it('test for Help', async () => {
		const _Helpat7JdX = new Help()
		const _optionspBJx1KD = {
		
	}
		const __hasHelpOptionv4VyRSX = "B4akbNXzXJ4jlIO2cJAN5z9diHHeREOTO";
		const __helpShortFlagYQI7Wn9 = undefined;
		const _returnValueHgCOqgl = undefined;
		const __findOptionGhOraRr = () => { return _returnValueHgCOqgl };
		const __helpLongFlagB8vuwPl = null;
		const _returnValueL9ypza2 = 0.4162940428987465;
		const _createOptionYG05g35 = () => { return _returnValueL9ypza2 };
		const _returnValueH5wkZeD = {
		
	}
		const __helpDescriptionixPdrW4 = () => { return _returnValueH5wkZeD };
		const _returnValuesb9CZRC = -3.0865966124822206;
		const __helpFlags94nv89 = () => { return _returnValuesb9CZRC };
		const _cmdKGjM7x2 = {
			"options": _optionspBJx1KD,
		"_hasHelpOption": __hasHelpOptionv4VyRSX,
		"_helpShortFlag": __helpShortFlagYQI7Wn9,
		"_findOption": __findOptionGhOraRr,
		"_helpLongFlag": __helpLongFlagB8vuwPl,
		"createOption": _createOptionYG05g35,
		"_helpDescription": __helpDescriptionixPdrW4,
		"_helpFlags": __helpFlags94nv89
	}
		const _returnValuehkLk6rK = await _Helpat7JdX.visibleOptions(_cmdKGjM7x2)
		const _argChoicesAD9gf2c = {
		
	}
		const _defaultValuer8OSvhZ = true;
		const _defaultValueDescriptionM98HyGC = "ndGNrgVcU6pChT1QvqTLRRIwiYrSQ3KUeSYzg8lMIYLZl2NsQozjoKhO5eMa7nd7GbQWs4";
		const _arrayValueBdYLm6s = undefined;
		const _arrayValueUhhFNhw = undefined;
		const _arrayValueAvSzwYp = null;
		const _returnValuedZp1AnR = [_arrayValueBdYLm6s, _arrayValueUhhFNhw, _arrayValueAvSzwYp]
		const _descriptiondml94X7 = () => { return _returnValuedZp1AnR };
		const _argumentQdVJRaH = {
			"argChoices": _argChoicesAD9gf2c,
		"defaultValue": _defaultValuer8OSvhZ,
		"defaultValueDescription": _defaultValueDescriptionM98HyGC,
		"description": _descriptiondml94X7
	}
		const _returnValueXOOpwP = await _Helpat7JdX.argumentDescription(_argumentQdVJRaH)
		const _arrayValueRiG5qlf = true;
		const _cmddKvcSMb = [_arrayValueRiG5qlf]
		const _sortSubcommandsS8gKdBs = {
		
	}
		const _returnValuekstxEtW = 4.743790595743935;
		const _subcommandTermD1QQ8N = () => { return _returnValuekstxEtW };
		const _helperVIlUJj6 = {
			"sortSubcommands": _sortSubcommandsS8gKdBs,
		"subcommandTerm": _subcommandTermD1QQ8N
	}
		const _returnValuewNCfivs = await _Helpat7JdX.formatHelp(_cmddKvcSMb, _helperVIlUJj6)
		const _returnValuernY2kvi = {
		
	}
		const _returnValueva98SKs = () => { return _returnValuernY2kvi };
		const __namex8ufQlI = () => { return _returnValueva98SKs };
		const __aliasesu7jVjcc = {
		
	}
		const _parentbFegKQd = {
		
	}
		const _returnValuev64mxRy = "VTXGr67PMcdfYJp9fGSdx7Ej7CyjUU5MQTgXGuG1WN7L69ftPQ4HrbxCmxpDLGsi9I";
		const _usagex6MAhke = () => { return _returnValuev64mxRy };
		const _cmdpgMYF8K = {
			"_name": __namex8ufQlI,
		"_aliases": __aliasesu7jVjcc,
		"parent": _parentbFegKQd,
		"usage": _usagex6MAhke
	}
		const _returnValue0QLMCi = await _Helpat7JdX.commandUsage(_cmdpgMYF8K)
	});

	it('test for Help', async () => {
		const _HelpAGuY8yD = new Help()
		const __nameUTF3DBh = {
		
	}
		const __aliasesyNrgfqw = {
		
	}
		const _parentSehFvPq = {
		
	}
		const _returnValueDQV6VUS = false;
		const _usageTYhJUnu = () => { return _returnValueDQV6VUS };
		const _cmd0I2ETo = {
			"_name": __nameUTF3DBh,
		"_aliases": __aliasesyNrgfqw,
		"parent": _parentSehFvPq,
		"usage": _usageTYhJUnu
	}
		const _returnValueQ7Kiez = await _HelpAGuY8yD.commandUsage(_cmd0I2ETo)
		const _returnValueP8dtHA1 = null;
		const _nameiunzo0 = () => { return _returnValueP8dtHA1 };
		const _argumenttjqQOB = {
			"name": _nameiunzo0
	}
		const _returnValuejuCTgY = await _HelpAGuY8yD.argumentTerm(_argumenttjqQOB)
	});

	it('test for Help', async () => {
		const _HelpE6ROpyp = new Help()
		const _flagsfpOjSQ = -7.049552109641086;
		const _optionhybnRLi = {
			"flags": _flagsfpOjSQ
	}
		const _returnValueNUok57D = await _HelpE6ROpyp.optionTerm(_optionhybnRLi)
		const _returnValueo8zBCwm = null;
		const _nameqDdnBhT = () => { return _returnValueo8zBCwm };
		const _argumentPFbUIWd = {
			"name": _nameqDdnBhT
	}
		const _returnValueJeUztSK = await _HelpE6ROpyp.argumentTerm(_argumentPFbUIWd)
	});

	it('test for Help', async () => {
		const _HelpSOikOuo = new Help()
		const _returnValueHA2sWz2 = "V1Igv4EBr1BUKWD41OpPOcCQBvWKRXjtKM2wLqA5obe8N5yQLn2f";
		const _returnValueidr1NNg = () => { return _returnValueHA2sWz2 };
		const _matchvzVaQ1p = () => { return _returnValueidr1NNg };
		const _returnValuefHjMxZN = undefined;
		const _substrC5wx2V3 = () => { return _returnValuefHjMxZN };
		const _straqmoIFq = {
			"match": _matchvzVaQ1p,
		"substr": _substrC5wx2V3
	}
		const _widthyRvhDqB = -3.9932270904078226;
		const _indenthG93fkh = 5.942239147347209;
		const _minColumnWidthFMv7pww = 3.736859723516858;
		const _returnValuew5yalqW = await _HelpSOikOuo.wrap(_straqmoIFq, _widthyRvhDqB, _indenthG93fkh, _minColumnWidthFMv7pww)
		const _cmdWZlyg97 = []
		const _sortSubcommandscc7gygD = "cRaoEDhmnzk";
		const _returnValuesOaySNQ = null;
		const _subcommandTermkOoAOdg = () => { return _returnValuesOaySNQ };
		const _helperDApsEf = {
			"sortSubcommands": _sortSubcommandscc7gygD,
		"subcommandTerm": _subcommandTermkOoAOdg
	}
		const _returnValuemyQq9kc = await _HelpSOikOuo.formatHelp(_cmdWZlyg97, _helperDApsEf)
		const _returnValueauNzj2Y = null;
		const _returnValueWJrAylc = () => { return _returnValueauNzj2Y };
		const _nameZt1AVv9 = () => { return _returnValueWJrAylc };
		const _argumentnJPFmiV = {
			"name": _nameZt1AVv9
	}
		const _returnValueKr9epR2 = await _HelpSOikOuo.argumentTerm(_argumentnJPFmiV)
	});

	it('test for Help', async () => {
		const _HelpbuGetCP = new Help()
		const _returnValuellCSVRS = false;
		const _matchj313Xo = () => { return _returnValuellCSVRS };
		const _returnValueLZS7PR = null;
		const _substrd9SaECV = () => { return _returnValueLZS7PR };
		const _striuXBfSW = {
			"match": _matchj313Xo,
		"substr": _substrd9SaECV
	}
		const _widthhHC6oM3 = -4.638979098987138;
		const _indentyCUUoEn = -9.881903310266074;
		const _minColumnWidthYZcjkE = -0.21022190419347453;
		const _returnValueTAZLFAK = await _HelpbuGetCP.wrap(_striuXBfSW, _widthhHC6oM3, _indentyCUUoEn, _minColumnWidthYZcjkE)
		const _arrayValuehaWtCp9 = false;
		const _arrayValueI34w85P = null;
		const _cmdgNW4hew = [_arrayValuehaWtCp9, _arrayValueI34w85P]
		const _returnValueXJoC2S9 = true;
		const _returnValueA38L9XB = () => { return _returnValueXJoC2S9 };
		const _helperZzGWbQq = () => { return _returnValueA38L9XB };
		const _returnValuejmQzgu = await _HelpbuGetCP.longestArgumentTermLength(_cmdgNW4hew, _helperZzGWbQq)
	});

	it('test for Help', async () => {
		const _HelpEkjLtHn = new Help()
		const _arrayValueJFeuI0b = {
		
	}
		const _arrayValueu4faswZ = "1TiOYgz0jzFdoero4CkWlyU8";
		const _arrayValueUS28iW4 = false;
		const _arrayValueD1g0rqZ = "pmPAXvdLEJ8fkNGLp67zpUXafDGG1HXzSCX071RLXJJ2KM0nukEgGCzKSePog82PmlOVPBb9teAMmGuEf";
		const _arrayValuexWBSh9W = true;
		const _arrayValueu3klTkm = [_arrayValueUS28iW4, _arrayValueD1g0rqZ, _arrayValuexWBSh9W]
		const _argumentYExoHCe = [_arrayValueJFeuI0b, _arrayValueu4faswZ, _arrayValueu3klTkm]
		const _returnValuesHXBcbC = await _HelpEkjLtHn.argumentDescription(_argumentYExoHCe)
		const _cmdaQsTyHr = false;
		const _arrayValuefZsARoA = null;
		const _arrayValuesoFLlO8 = false;
		const _arrayValueFJvBhUF = false;
		const _helperNH7XfMF = [_arrayValuefZsARoA, _arrayValuesoFLlO8, _arrayValueFJvBhUF]
		const _returnValueIM1tixb = await _HelpEkjLtHn.padWidth(_cmdaQsTyHr, _helperNH7XfMF)
		const _optionz7kG5B1 = null;
		const _returnValueA374IlE = await _HelpEkjLtHn.optionDescription(_optionz7kG5B1)
		const _cmdGyF4ZYr = -6.712194877110258;
		const _arrayValueA5Qu4Fa = 2.2807880981271325;
		const _arrayValue72fn62 = "xH8EXRMWZ2ClgWUhLoOMhApvooejAlHdbg65ZLMcZIT5HYPe7mLwxA9kw4J7zNmq2S";
		const _arrayValueQVtPS3v = "zxYVVChaODyoexivqIw4PymxgcmmjFUSiWClXQVl";
		const _arrayValuemy0EQHS = [_arrayValueA5Qu4Fa, _arrayValue72fn62, _arrayValueQVtPS3v]
		const _arrayValuelQDKXXo = -0.8666864757048103;
		const _arrayValuerZayIxZ = false;
		const _helperfugdwEC = [_arrayValuemy0EQHS, _arrayValuelQDKXXo, _arrayValuerZayIxZ]
		const _returnValueuDafZi = await _HelpEkjLtHn.longestOptionTermLength(_cmdGyF4ZYr, _helperfugdwEC)
	});

	it('test for Help', async () => {
		const _HelpGnOuVhV = new Help()
		const _arrayValueazjZCM3 = -5.178177180681523;
		const _arrayValueOxbrx6y = undefined;
		const _arrayValuewMFaLSV = true;
		const _arrayValueMOht3bF = "qBCrnU8d7Ocf0j3yF4CXLlOX1EUYnfgSmKOaGTMvDog1ojPpLuilMcf";
		const _arrayValueAfBnEYe = [_arrayValueazjZCM3, _arrayValueOxbrx6y, _arrayValuewMFaLSV, _arrayValueMOht3bF]
		const _arrayValuejh1PJbL = [_arrayValueAfBnEYe]
		const _optionQoH8QqP = [_arrayValuejh1PJbL]
		const _returnValueeKZ4QzD = await _HelpGnOuVhV.optionDescription(_optionQoH8QqP)
		const _arrayValuewZmcfHW = null;
		const _cmdvJx1hoj = [_arrayValuewZmcfHW]
		const _returnValuemIXYeuv = await _HelpGnOuVhV.commandUsage(_cmdvJx1hoj)
		const _arrayValueJlJWdl1 = true;
		const _arrayValueUC40I9d = undefined;
		const _optioniJdQxe = [_arrayValueJlJWdl1, _arrayValueUC40I9d]
		const _returnValueQwnJb6A = await _HelpGnOuVhV.optionTerm(_optioniJdQxe)
	});

	it('test for Help', async () => {
		const _HelpcE9msPB = new Help()
		const _strIUzMTk2 = "CvsV3ipje";
		const _widthA6SNftR = 6.10036584201135;
		const _indentqE37V25 = 2.74935569931581;
		const _minColumnWidthk26ngTW = 7.774958177857535;
		const _returnValuedYQt8mW = await _HelpcE9msPB.wrap(_strIUzMTk2, _widthA6SNftR, _indentqE37V25, _minColumnWidthk26ngTW)
	});

	it('test for Help', async () => {
		const _HelpRtkzz42 = new Help()
		const _flagspUHYHeo = "EmrhJePCMheHRs5qJUvKleVDULUcXsVinaOZyEjBjUL";
		const _returnValueTE5sngO = "iDQEdE8OuvqIP";
		const _descriptionrCmOvGQ = () => { return _returnValueTE5sngO };
		const _argumentqpOoB12 = new Option(_flagspUHYHeo, _descriptionrCmOvGQ)
		const _fnJ3KlfAO = undefined;
		const _returnValueePDQU5J = await _argumentqpOoB12.argParser(_fnJ3KlfAO)
		const _mandatoryPUam2o4 = true;
		const _returnValuemD4Lucj = await _argumentqpOoB12.makeOptionMandatory(_mandatoryPUam2o4)
		const _returnValuega8IA8h = await _HelpRtkzz42.argumentTerm(_argumentqpOoB12)
		const _flagsNjx5dL3 = "6HpE9MU9aGthBhQlUxWSF5iJfUJ";
		const _optionXNd2hnP = {
			"flags": _flagsNjx5dL3
	}
		const _returnValueNJmstn = await _HelpRtkzz42.optionTerm(_optionXNd2hnP)
		const _cmdIHnl2Sa = 3.2975629267049165;
		const _arrayValueuTdKte7 = {
		
	}
		const _returnValuesszR70d = [_arrayValueuTdKte7]
		const _visibleArgumentsVZyAesd = () => { return _returnValuesszR70d };
		const _argumentTermhWTRrse = true;
		const _helperK9u0OB = {
			"visibleArguments": _visibleArgumentsVZyAesd,
		"argumentTerm": _argumentTermhWTRrse
	}
		const _returnValuenEGSVU0 = await _HelpRtkzz42.longestArgumentTermLength(_cmdIHnl2Sa, _helperK9u0OB)
		const _cmdgzhnHK3 = "PdCmCXfDS4";
		const _returnValueA2dG0QH = undefined;
		const _longestOptionTermLengthKz6vXMW = () => { return _returnValueA2dG0QH };
		const _returnValuetspQ3p3 = true;
		const _longestSubcommandTermLengthJcjT9jq = () => { return _returnValuetspQ3p3 };
		const _returnValueWB137Gx = 2.2628894099084302;
		const _returnValueavomLFe = () => { return _returnValueWB137Gx };
		const _longestArgumentTermLengths2GqUQJ = () => { return _returnValueavomLFe };
		const _helperQnEPvTh = {
			"longestOptionTermLength": _longestOptionTermLengthKz6vXMW,
		"longestSubcommandTermLength": _longestSubcommandTermLengthJcjT9jq,
		"longestArgumentTermLength": _longestArgumentTermLengths2GqUQJ
	}
		const _returnValueuPkTrqG = await _HelpRtkzz42.padWidth(_cmdgzhnHK3, _helperQnEPvTh)
		const _nameLVA2ali = false;
		const _cmdFtyUwXh = new Command(_nameLVA2ali)
		const _errorGrAdh68 = null;
		const _commandOLmD34H = []
		const _contextOptionsw1tDpx = {
			"error": _errorGrAdh68,
		"command": _commandOLmD34H
	}
		const _returnValuet4KAAT = await _cmdFtyUwXh.help(_contextOptionsw1tDpx)
		const _returnValueXEZhdme = true;
		const _theni2mzS8f = () => { return _returnValueXEZhdme };
		const _promiseSSDFaSs = {
			"then": _theni2mzS8f
	}
		const _returnValueVl4lfto = "aqm6nD7vFQKAoGfIG7C1VwWQ7";
		const _fnZUCzn9K = () => { return _returnValueVl4lfto };
		const _returnValueF0IfhFK = await _cmdFtyUwXh._chainOrCall(_promiseSSDFaSs, _fnZUCzn9K)
		const _returnValueKWtVzTV = await _HelpRtkzz42.subcommandDescription(_cmdFtyUwXh)
	});

	it('test for Help', async () => {
		const _HelpRQtwu1U = new Help()
		const _flagsbhj6uRj = "BOw6GWbmEwlpfWWfFqFqitDek20e7vFYqLg3QMbKI8tNoEPHUPB52i6v2c6zYAuxXL";
		const _descriptionsoQJs6Z = -1.656785683297274;
		const _argumentbhk4vJM = new Option(_flagsbhj6uRj, _descriptionsoQJs6Z)
		const _arrayValueGcXnbwH = "xN2XJUK8OEFtoCGSxMsdQTLe8mi87b52Ac";
		const _arrayValueTIBbygN = "G1F8EKgfec6d6YunwxNC9sfiTfICKfbC3hWmMrSzAKftujB6sf32ueDK";
		const _arrayValueV2T7UDQ = null;
		const _arrayValueDXPh1Z2 = [_arrayValueTIBbygN, _arrayValueV2T7UDQ]
		const _valuesQx7m54m = [_arrayValueGcXnbwH, _arrayValueDXPh1Z2]
		const _returnValueJcAfYEg = await _argumentbhk4vJM.choices(_valuesQx7m54m)
		const _fnLzGe74w = undefined;
		const _returnValueotAtFDv = await _argumentbhk4vJM.argParser(_fnLzGe74w)
		const _valueK2o0x04 = undefined;
		const _descriptionJnnEGE = {
		
	}
		const _returnValueifGCTW2 = await _argumentbhk4vJM.default(_valueK2o0x04, _descriptionJnnEGE)
		const _returnValuelvu8vP6 = await _argumentbhk4vJM.attributeName()
		const _returnValueZ1isD6J = await _HelpRQtwu1U.argumentDescription(_argumentbhk4vJM)
		const _flagsGrVYWxr = "CD";
		const _descriptionhtELVMq = -2.297731961723998;
		const _argumentYuWoa8C = new Option(_flagsGrVYWxr, _descriptionhtELVMq)
		const _returnValuewvagU75 = await _argumentYuWoa8C.attributeName()
		const _mandatoryA47to5w = true;
		const _returnValue8YW9ET = await _argumentYuWoa8C.makeOptionMandatory(_mandatoryA47to5w)
		const _returnValueqZj64EL = await _argumentYuWoa8C.attributeName()
		const _returnValueOMnIS5G = await _HelpRQtwu1U.argumentDescription(_argumentYuWoa8C)
		const _arrayValueuOfQHCJ = -5.0721735998140405;
		const _cmdgkdQe1Z = [_arrayValueuOfQHCJ]
		const _helperr8Rw5K1 = "yoK";
		const _returnValueLXixwgL = await _HelpRQtwu1U.longestSubcommandTermLength(_cmdgkdQe1Z, _helperr8Rw5K1)
		const _messageZAFw8eW = "cQGFXCBj";
		const _argumentWs1iVgi = new InvalidArgumentError(_messageZAFw8eW)
		const _returnValueUTgAkps = await _HelpRQtwu1U.argumentTerm(_argumentWs1iVgi)
		const _returnValueSa2549 = null;
		const _descriptionZIErP3p = () => { return _returnValueSa2549 };
		const _cmdImXsPiH = {
			"description": _descriptionZIErP3p
	}
		const _returnValuekRZNB1W = await _HelpRQtwu1U.commandDescription(_cmdImXsPiH)
	});

	it('test for Help', async () => {
		const _Helpuy7Atgm = new Help()
		const _returnValuepLeRM2r = {
		
	}
		const _namemqjDSY1 = () => { return _returnValuepLeRM2r };
		const _cmdEuYROCE = new Command(_namemqjDSY1)
		const _fnF9uvAuZ = {
		
	}
		const _returnValuea9lU70 = await _cmdEuYROCE.exitOverride(_fnF9uvAuZ)
		const _namec0bmew1 = -2.3365629384333166;
		const _descriptionBHOVAkW = 4.98671810849633;
		const _fnq2InONO = undefined;
		const _returnValueSRhKMmp = null;
		const _defaultValuejDjlRDG = () => { return _returnValueSRhKMmp };
		const _returnValueNPz6XhN = await _cmdEuYROCE.argument(_namec0bmew1, _descriptionBHOVAkW, _fnq2InONO, _defaultValuejDjlRDG)
		const _returnValueQa3CDuy = await _Helpuy7Atgm.subcommandTerm(_cmdEuYROCE)
		const _cmdFeP4jgA = undefined;
		const _returnValueSocf4ZJ = "vf37ODGneE4RR6Ngxp3avsggXgr7UhxhJ1jdwmW3Qy3";
		const _visibleOptionso7Rnq8 = () => { return _returnValueSocf4ZJ };
		const _returnValuew6xzluk = "eJhpjta";
		const _optionTermHVIhlcY = () => { return _returnValuew6xzluk };
		const _helperj3g7Qbh = {
			"visibleOptions": _visibleOptionso7Rnq8,
		"optionTerm": _optionTermHVIhlcY
	}
		const _returnValueSxhDla4 = await _Helpuy7Atgm.longestOptionTermLength(_cmdFeP4jgA, _helperj3g7Qbh)
		const _nameCEEQzp5 = false;
		const _cmdtZS9rjV = new Command(_nameCEEQzp5)
		const _returnValueSanAzTd = await _cmdtZS9rjV._checkNumberOfArguments()
		const _returnValueFG7yiJK = []
		const _argumentIkukFZJ = () => { return _returnValueFG7yiJK };
		const _returnValuenlfNB8P = await _cmdtZS9rjV.addArgument(_argumentIkukFZJ)
		const _returnValue7x1bC4 = undefined;
		const _namemZKz5Df = () => { return _returnValue7x1bC4 };
		const _returnValueLuPpnpN = await _cmdtZS9rjV._findCommand(_namemZKz5Df)
		const _returnValuecSyEdkr = await _Helpuy7Atgm.subcommandTerm(_cmdtZS9rjV)
		const _nameUmWH4FG = {
		
	}
		const _argumentnu6gW9w = new Command(_nameUmWH4FG)
		const _returnValueR3og4h = 8.291478756686818;
		const _contextOptionskXnjNtX = () => { return _returnValueR3og4h };
		const _returnValuekYb9Gp = await _argumentnu6gW9w._getHelpContext(_contextOptionskXnjNtX)
		const _eventIZZiMJz = null;
		const _arrayValuehU4NvJc = true;
		const _listenerBHJxq8S = [_arrayValuehU4NvJc]
		const _returnValueM6UutUF = await _argumentnu6gW9w.hook(_eventIZZiMJz, _listenerBHJxq8S)
		const _arrayValueqCMlky = false;
		const _arrayValue9WjRSO = {
		
	}
		const _arrayValueTBgSSp = [_arrayValue9WjRSO]
		const _contextOptionsmm9cO3l = [_arrayValueqCMlky, _arrayValueTBgSSp]
		const _returnValuezxhEYFx = await _argumentnu6gW9w.help(_contextOptionsmm9cO3l)
		const _returnValueIBnpEQ = await _Helpuy7Atgm.argumentDescription(_argumentnu6gW9w)
	});

	it('test for Help', async () => {
		const _HelpUK6jmj = new Help()
		const _namefJtS96 = false;
		const _cmdWeim0n3 = new Command(_namefJtS96)
		const _namesMRyk0rL = "FNOfrJmp3FpKgbzrZ2uA";
		const _returnValueNsIfPNJ = await _cmdWeim0n3.arguments(_namesMRyk0rL)
		const _keymwfcE3h = true;
		const _valueojKSBLm = "g2ExCLBslVrTJGIv3OnlfehjdkOtVSjPNvTL5dgzDDf0we549kKgJ6fzsRG45HAvtCUtORNbuNUe7YTcGztGO";
		const _sourceMk2XU0O = undefined;
		const _returnValueMuWRexp = await _cmdWeim0n3.setOptionValueWithSource(_keymwfcE3h, _valueojKSBLm, _sourceMk2XU0O)
		const _returnValueRrluqS = await _HelpUK6jmj.visibleCommands(_cmdWeim0n3)
		const _flagsWcYq8iQ = "gjXwiywVBocmfk8gCbcfnU";
		const _optionvCKfcEk = {
			"flags": _flagsWcYq8iQ
	}
		const _returnValuenaeaBAU = await _HelpUK6jmj.optionTerm(_optionvCKfcEk)
	});

	it('test for Help', async () => {
		const _HelpOOLPsvO = new Help()
		const _argumentIokOhyw = "bDNhM23XLB8TtbBXtVImXa215XLdEy2GOcoXhfh1amae9r89bsKuerIzGjdcndrzdwGVYeDgYztO";
		const _returnValuehA1Uzd7 = await _HelpOOLPsvO.argumentDescription(_argumentIokOhyw)
		const _nameSlDVvK2 = 6.62110767568992;
		const _cmdIMIKppK = new Command(_nameSlDVvK2)
		const _passThroughQndHm7 = true;
		const _returnValuehROiFxF = await _cmdIMIKppK.passThroughOptions(_passThroughQndHm7)
		const _arrayValueRAvOMme = "TXHfcuTMvCE9WQH8Lx5LRCeH7kpC2W";
		const _arrayValuelfYHTG2 = null;
		const _argvqN7kSLh = [_arrayValueRAvOMme, _arrayValuelfYHTG2]
		const _returnValueTsGKiT = await _cmdIMIKppK.parseOptions(_argvqN7kSLh)
		const _returnValuebdkax5B = await _HelpOOLPsvO.visibleOptions(_cmdIMIKppK)
	});

	it('test for Help', async () => {
		const _HelpeTOApJ = new Help()
		const __nameOb663Ac = {
		
	}
		const __aliasesT86DB7e = "p9a8uB52lx38j1kOEwDdV8sWST6hyk2JTRjiZH4Gp1nho";
		const _parentKiMbWAc = {
		
	}
		const _returnValueSPmHqDz = false;
		const _usageVDhyRO = () => { return _returnValueSPmHqDz };
		const _cmdybKvrjr = {
			"_name": __nameOb663Ac,
		"_aliases": __aliasesT86DB7e,
		"parent": _parentKiMbWAc,
		"usage": _usageVDhyRO
	}
		const _returnValueSGg6nEd = await _HelpeTOApJ.commandUsage(_cmdybKvrjr)
		const _returnValueYFpPTr = undefined;
		const _option9Lh62j = () => { return _returnValueYFpPTr };
		const _returnValueUq0TcmX = await _HelpeTOApJ.optionDescription(_option9Lh62j)
	});

	it('test for Help', async () => {
		const _HelpUE3999X = new Help()
		const _nameurwqx1Q = "LtDX";
		const _cmdo8QPwfv = new Command(_nameurwqx1Q)
		const _flagszpVShkl = "bybUqNa";
		const _description6BlFlo = {
		
	}
		const _fnUWd2avh = {
		
	}
		const _defaultValueUcPWXyr = "XbzogHMKwdwEbQJbllC3r7OMbpi";
		const _returnValueTJ2rIQv = await _cmdo8QPwfv.requiredOption(_flagszpVShkl, _description6BlFlo, _fnUWd2avh, _defaultValueUcPWXyr)
		const _returnValueg3NyF3D = await _HelpUE3999X.subcommandTerm(_cmdo8QPwfv)
		const _returnValueZ6BHQLj = "D2KP5Ud4wI5aYMooziCNqAjod745orw1slzfmtrUfgX8SN11jKRcKRvmO2qd";
		const _namezuwCBxL = () => { return _returnValueZ6BHQLj };
		const _cmdzD6RB5Z = new Command(_namezuwCBxL)
		const _commandNamekENKLlg = false;
		const _returnValuem7I54r0 = {
		
	}
		const _concat2MUFaK = () => { return _returnValuem7I54r0 };
		const _operandsRQlhHeF = {
			"concat": _concat2MUFaK
	}
		const _unknowngcEa9qz = undefined;
		const _returnValueiWOX4m = await _cmdzD6RB5Z._dispatchSubcommand(_commandNamekENKLlg, _operandsRQlhHeF, _unknowngcEa9qz)
		const _strjoDDf82 = undefined;
		const _flagsCfdKWwP = {
		
	}
		const _descriptionmWzcrjZ = 0.09428869703605791;
		const _returnValuen8j2Kkr = await _cmdzD6RB5Z.version(_strjoDDf82, _flagsCfdKWwP, _descriptionmWzcrjZ)
		const _keyuNrcFgf = false;
		const _returnValueUHR2hls = await _cmdzD6RB5Z.getOptionValue(_keyuNrcFgf)
		const _mandatoryHrzJu3s = undefined;
		const _configaVVbHRq = {
			"mandatory": _mandatoryHrzJu3s
	}
		const _flagspIrUrC1 = "t6mrVmI4wuqCn5wWCtYgD1rqLNjFTiN7IYtIu4QopMex";
		const _descriptionA1VHSnj = -3.604907279244487;
		const _fnq20tyPM = {
		
	}
		const _defaultValuexikbJtz = true;
		const _returnValueJ6lccov = await _cmdzD6RB5Z._optionEx(_configaVVbHRq, _flagspIrUrC1, _descriptionA1VHSnj, _fnq20tyPM, _defaultValuexikbJtz)
		const _returnValuexH8KXh9 = await _HelpUE3999X.subcommandDescription(_cmdzD6RB5Z)
		const _cmdjU8u2ml = undefined;
		const _arrayValuey77yhRG = false;
		const _arrayValueJSIbBD = null;
		const _arrayValueHdAGP4b = [_arrayValueJSIbBD]
		const _arrayValueEjrNdWK = [_arrayValuey77yhRG, _arrayValueHdAGP4b]
		const _arrayValuezvJeL77 = "uL0e2y94IVqMfoP9zRJMWu9nQbtGcydlDlq2NQk1drFN1tGMOON";
		const _arrayValuePE4nVoJ = -2.522695271015648;
		const _helperfGMLYqD = [_arrayValueEjrNdWK, _arrayValuezvJeL77, _arrayValuePE4nVoJ]
		const _returnValueith1EiA = await _HelpUE3999X.longestArgumentTermLength(_cmdjU8u2ml, _helperfGMLYqD)
		const _namezxZlPCw = 2.9644988595899306;
		const _cmdajMwHnU = new Command(_namezxZlPCw)
		const _keyf8lmuRj = -0.8819712473484742;
		const _returnValueLdKF6G = await _cmdajMwHnU.getOptionValue(_keyf8lmuRj)
		const _storeAsPropertiesDY7ihWA = false;
		const _returnValueaSdJI3D = await _cmdajMwHnU.storeOptionsAsProperties(_storeAsPropertiesDY7ihWA)
		const _returnValuedCPl4BE = await _cmdajMwHnU._checkForMissingMandatoryOptions()
		const _returnValueoGDmv9h = await _HelpUE3999X.subcommandDescription(_cmdajMwHnU)
		const _namehn9Zy6J = "wUI2wtih5ckYPE04zBBxfrtlvhRPXcrwwznKbElmMBIhYDr0WHZobpZlkwJIwkPXnmzR";
		const _cmdnAXXL9t = new Command(_namehn9Zy6J)
		const _fnxqAC8rI = {
		
	}
		const _returnValueOyERd9s = await _cmdnAXXL9t.exitOverride(_fnxqAC8rI)
		const _flagsCGgfOLv = "26T6RD314OKF6z8prXLJqhagN11mu7j9WEGaa36qHjfTPSybaeQkkTZRVoeilxU3iJvrqad6k4zjVH";
		const _optionwXTm7aq = {
			"flags": _flagsCGgfOLv
	}
		const _returnValueqhMcS2 = await _cmdnAXXL9t.missingMandatoryOptionValue(_optionwXTm7aq)
		const _aliaskpYZ4qJ = undefined;
		const _returnValueuLw2Q3a = await _cmdnAXXL9t.alias(_aliaskpYZ4qJ)
		const _promiseKy2rDA5 = {
		
	}
		const _eventfscOzf6 = "xfSLnb7blhGdPRSJmIr4bMbxKbNHk7FApKwy0bnNo4VjljfRxUA2";
		const _returnValuen71ggQZ = await _cmdnAXXL9t._chainOrCallHooks(_promiseKy2rDA5, _eventfscOzf6)
		const _returnValueGmPt2ez = await _HelpUE3999X.subcommandTerm(_cmdnAXXL9t)
	});
})