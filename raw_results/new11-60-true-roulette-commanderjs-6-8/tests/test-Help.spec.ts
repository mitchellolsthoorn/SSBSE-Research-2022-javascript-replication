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
		const _Helprf98pvG = new Help()
		const _cmdDhagRqJ = undefined;
		const _helpergcJMCDv = "fluzErVILn2k1uhxaVcz4in2e3";
		const _returnValueKKjcVJd = await _Helprf98pvG.padWidth(_cmdDhagRqJ, _helpergcJMCDv)
	});

	it('test for Help', async () => {
		const _HelpzAJ14kr = new Help()
		const __argsDescriptionUIHZHN7 = {
		
	}
		const __argsyCNQhmN = null;
		const _cmdukDDobo = {
			"_argsDescription": __argsDescriptionUIHZHN7,
		"_args": __argsyCNQhmN
	}
		const _returnValuee2CY8A = await _HelpzAJ14kr.visibleArguments(_cmdukDDobo)
		const _arrayValueKRgaVnR = true;
		const _arrayValueFdwwyV = null;
		const _returnValueg0unJ2T = null;
		const _arrayValueNkeVv7v = () => { return _returnValueg0unJ2T };
		const _cmdxaCDtVN = [_arrayValueKRgaVnR, _arrayValueFdwwyV, _arrayValueNkeVv7v]
		const _returnValueEK2BRl = await _HelpzAJ14kr.visibleCommands(_cmdxaCDtVN)
		const _arrayValueTs7EmG0 = -8.325221566326046;
		const _stru1yr0ew = [_arrayValueTs7EmG0]
		const _widthAWS2jXL = -6.339247875883853;
		const _indentG6r1714 = -3.712145260169393;
		const _minColumnWidthzGucwic = 3.1808429745573576;
		const _returnValueUiK4atG = await _HelpzAJ14kr.wrap(_stru1yr0ew, _widthAWS2jXL, _indentG6r1714, _minColumnWidthzGucwic)
	});

	it('test for Help', async () => {
		const _HelppEaQiMh = new Help()
		const _arrayValueXH4zQy7 = undefined;
		const _arrayValueji1NUsN = "pgKpQwUE9IJsjcWPlug86nljtCpx7fpKkcXITVG9YkMIQFPPcb2Owmry00xtFprc4ymGesDcTgSiN8sd";
		const _cmdngFMeI1 = [_arrayValueXH4zQy7, _arrayValueji1NUsN]
		const _arrayValuehpNZ3Fo = undefined;
		const _arrayValueMZl2R8b = null;
		const _arrayValueAlGsbiN = null;
		const _arrayValueDpLwT52 = null;
		const _arrayValuehGaHWjE = [_arrayValueMZl2R8b, _arrayValueAlGsbiN, _arrayValueDpLwT52]
		const _arrayValueDBh55t7 = [_arrayValuehpNZ3Fo, _arrayValuehGaHWjE]
		const _sortSubcommandsz5XGZiu = [_arrayValueDBh55t7]
		const _returnValueXeJSAfz = "Jeq7eXskNqvjb9iSjmgIK3PMvja4ah2x8";
		const _subcommandTermZywpql1 = () => { return _returnValueXeJSAfz };
		const _helperB0LbyCL = {
			"sortSubcommands": _sortSubcommandsz5XGZiu,
		"subcommandTerm": _subcommandTermZywpql1
	}
		const _returnValueDMgyfFC = await _HelppEaQiMh.formatHelp(_cmdngFMeI1, _helperB0LbyCL)
	});

	it('test for Help', async () => {
		const _HelpR7HPduk = new Help()
		const _arrayValuexiMz93b = undefined;
		const _arrayValueZbPTrX = -9.27659401942928;
		const _arrayValueeSPJHhl = [_arrayValueZbPTrX]
		const _returnValue0OVyDh = true;
		const _arrayValueuK9nlp = () => { return _returnValue0OVyDh };
		const _arrayValuenip7Fm = {
		
	}
		const _arrayValueg4bPqU5 = [_arrayValuexiMz93b, _arrayValueeSPJHhl, _arrayValueuK9nlp, _arrayValuenip7Fm]
		const _arrayValueTXldt95 = undefined;
		const _cmdVPbTsxF = [_arrayValueg4bPqU5, _arrayValueTXldt95]
		const _returnValueu7mRbRb = await _HelpR7HPduk.visibleOptions(_cmdVPbTsxF)
		const _nameaheylY = undefined;
		const _cmdgBWpTT0 = new Command(_nameaheylY)
		const _returnValue1PZpz8 = await _cmdgBWpTT0.unknownCommand()
		const _returnValueXEnem5D = undefined;
		const _contextOptionsa6q5EGF = () => { return _returnValueXEnem5D };
		const _returnValuehIvrcX = await _cmdgBWpTT0.outputHelp(_contextOptionsa6q5EGF)
		const _optionET7Nsbu = "bDUuf3AHyXYIq7hkX8goqPdXe69GzDNkbfx6SYcGsdpxB";
		const _returnValueRXqNdiA = await _cmdgBWpTT0.missingMandatoryOptionValue(_optionET7Nsbu)
		const _returnValueROuFUAG = await _HelpR7HPduk.visibleArguments(_cmdgBWpTT0)
		const _cmdekpWRlt = false;
		const _returnValueazQ3TJ = await _HelpR7HPduk.commandUsage(_cmdekpWRlt)
	});

	it('test for Help', async () => {
		const _HelpeZC0csl = new Help()
		const _arrayValueYX8fjN = -0.7646398011820335;
		const _arrayValuejrLweHd = -1.4102238842641306;
		const _returnValuerUBEQ3 = [_arrayValueYX8fjN, _arrayValuejrLweHd]
		const _nameC2YXo4P = () => { return _returnValuerUBEQ3 };
		const _descriptionyWtQ1h0 = -8.37677965754921;
		const _cmdQrSd93G = new Argument(_nameC2YXo4P, _descriptionyWtQ1h0)
		const _returnValueu4GZrLV = await _cmdQrSd93G.argRequired()
		const _value4Ej6cN = 5.0901972597436345;
		const _previous5St9IN = "PUcXNaaoNOzahJCTYeKD2Nl4yPrbB8v2MPYEzM9GpqcB65kPDUS2EeUDXgJqacOr";
		const _returnValueH5jA9u6 = await _cmdQrSd93G._concatValue(_value4Ej6cN, _previous5St9IN)
		const _returnValueXhvQLCQ = await _cmdQrSd93G.argOptional()
		const _returnValueJDWkXE6 = await _HelpeZC0csl.commandDescription(_cmdQrSd93G)
		const _argChoicesMrCsXHU = null;
		const _negateY7oxH1k = "dpPSgEGpeFCyVm1mKP9YvvybDYeGwtMxh";
		const _defaultValueJKVaE6H = undefined;
		const _defaultValueDescriptioneS6wmDx = -3.146983707295278;
		const _envVarNJuSyVT = undefined;
		const _descriptiongJ4UGSb = 7.295560144912955;
		const _optionmFyMsAL = {
			"argChoices": _argChoicesMrCsXHU,
		"negate": _negateY7oxH1k,
		"defaultValue": _defaultValueJKVaE6H,
		"defaultValueDescription": _defaultValueDescriptioneS6wmDx,
		"envVar": _envVarNJuSyVT,
		"description": _descriptiongJ4UGSb
	}
		const _returnValueHQVRMaY = await _HelpeZC0csl.optionDescription(_optionmFyMsAL)
		const _arrayValuevNzR2cm = undefined;
		const _arrayValuepeQo0p = undefined;
		const _arrayValueLzk38ub = true;
		const _flagsRg8D0q = [_arrayValuevNzR2cm, _arrayValuepeQo0p, _arrayValueLzk38ub]
		const _arrayValued1Z8yXy = null;
		const _returnValueiLXXIjE = [_arrayValued1Z8yXy]
		const _descriptionNt74qC = () => { return _returnValueiLXXIjE };
		const _optionMeHkp1k = new Option(_flagsRg8D0q, _descriptionNt74qC)
		const _returnValuetX4bctJ = await _optionMeHkp1k.attributeName()
		const _fn60JW2j = undefined;
		const _returnValuelKdyTcZ = await _optionMeHkp1k.argParser(_fn60JW2j)
		const _returnValueaN6XrbF = await _HelpeZC0csl.optionTerm(_optionMeHkp1k)
		const _arrayValuecNyYiwS = null;
		const _arrayValueKaV46qd = undefined;
		const _argumentBtMezRn = [_arrayValuecNyYiwS, _arrayValueKaV46qd]
		const _returnValueWjUanLB = await _HelpeZC0csl.argumentDescription(_argumentBtMezRn)
	});

	it('test for Help', async () => {
		const _Helpn0PzZCz = new Help()
		const _optionknJAsWD = false;
		const _returnValuePL6VmUL = await _Helpn0PzZCz.optionTerm(_optionknJAsWD)
		const _cmdi2CRejq = true;
		const _sortSubcommandsB2JsGob = true;
		const _arrayValuejasgbYn = -9.637500688367375;
		const _arrayValueHYl9DT3 = false;
		const _arrayValueGxbYKn = null;
		const _returnValueBvnK2gJ = [_arrayValuejasgbYn, _arrayValueHYl9DT3, _arrayValueGxbYKn]
		const _subcommandTermEOD85x6 = () => { return _returnValueBvnK2gJ };
		const _helperZ0cCRdd = {
			"sortSubcommands": _sortSubcommandsB2JsGob,
		"subcommandTerm": _subcommandTermEOD85x6
	}
		const _returnValueCCXp5v7 = await _Helpn0PzZCz.formatHelp(_cmdi2CRejq, _helperZ0cCRdd)
	});

	it('test for Help', async () => {
		const _HelpLDk6jZl = new Help()
		const _optionncZDtK = true;
		const _returnValueJlDIRzk = await _HelpLDk6jZl.optionDescription(_optionncZDtK)
		const __nameHMYy9jM = {
		
	}
		const __aliasescFuMuxx = {
		
	}
		const _returnValuefs9HpD9 = false;
		const _parentOTdOwW = () => { return _returnValuefs9HpD9 };
		const _returnValuerOdPx4z = false;
		const _usagez0bBHXY = () => { return _returnValuerOdPx4z };
		const _cmdXUTT9Cb = {
			"_name": __nameHMYy9jM,
		"_aliases": __aliasescFuMuxx,
		"parent": _parentOTdOwW,
		"usage": _usagez0bBHXY
	}
		const _returnValueBursMPs = await _HelpLDk6jZl.commandUsage(_cmdXUTT9Cb)
		const _arrayValueWaMwG78 = "VKuduemg1knpN3mojxv";
		const _returnValuevYwP9l = [_arrayValueWaMwG78]
		const _optionz83Gvh = () => { return _returnValuevYwP9l };
		const _returnValue0hs5gg = await _HelpLDk6jZl.optionDescription(_optionz83Gvh)
		const _cmdULQ1qhS = "yQAZBmu2l89p2Z4RLRuaScCql5QqBawyjvaSXTQgzXX5c5VfbpAyi1FoEREq";
		const _sortSubcommandsxChLmg = {
		
	}
		const _arrayValueYw98bOL = null;
		const _subcommandTermf3jo3KD = [_arrayValueYw98bOL]
		const _helperlP67cmo = {
			"sortSubcommands": _sortSubcommandsxChLmg,
		"subcommandTerm": _subcommandTermf3jo3KD
	}
		const _returnValuePTLQwir = await _HelpLDk6jZl.formatHelp(_cmdULQ1qhS, _helperlP67cmo)
	});

	it('test for Help', async () => {
		const _HelpmO48MXS = new Help()
		const _returnValuenoOhMM2 = undefined;
		const _descriptiondxPWIGO = () => { return _returnValuenoOhMM2 };
		const _cmd9Pfpuk = {
			"description": _descriptiondxPWIGO
	}
		const _returnValuejNtNSEq = await _HelpmO48MXS.subcommandDescription(_cmd9Pfpuk)
		const _nameygXgOBd = false;
		const _cmdegReCWt = new Command(_nameygXgOBd)
		const _promiseD6h6Ktt = {
		
	}
		const _eventON2vMAc = "igJmHdwCcmJ3pvBrXl3Cvvc6aAdtufiv3D4ynuCS4wxwV149undL22IL";
		const _returnValueiRkAThS = await _cmdegReCWt._chainOrCallHooks(_promiseD6h6Ktt, _eventON2vMAc)
		const _arrayValuemSa5y5y = []
		const _arrayValueA8tjGn = -1.6091361001620932;
		const _cmdTOpF0ee = [_arrayValuemSa5y5y, _arrayValueA8tjGn]
		const _isDefaulthWqA51 = {
		
	}
		const _optsXTMLd5h = {
			"isDefault": _isDefaulthWqA51
	}
		const _returnValueJiGWck = await _cmdegReCWt.addCommand(_cmdTOpF0ee, _optsXTMLd5h)
		const _exitCodelVPFkTe = "k21c5dMLoBebH4kYtp5Tl50bm1b";
		const _codeUM6WVF9 = false;
		const _messagebBauh5X = "HWVmnSLefuiYFiSnFBT6NOqb4G1xuKIBtfWzV1Mve1JyaajCirrDA7XBwcWXyUe";
		const _returnValuewYsc0dH = await _cmdegReCWt._displayError(_exitCodelVPFkTe, _codeUM6WVF9, _messagebBauh5X)
		const _returnValueFicmMaR = await _cmdegReCWt._checkForMissingMandatoryOptions()
		const _returnValueQARL5oq = await _HelpmO48MXS.subcommandTerm(_cmdegReCWt)
		const __argsVw32wMm = {
		
	}
		const __nameXV0nij9 = -9.328775511901302;
		const __aliasesmDDpmtW = {
		
	}
		const _optionsrFiKxxu = {
		
	}
		const _cmdb3mkYIN = {
			"_args": __argsVw32wMm,
		"_name": __nameXV0nij9,
		"_aliases": __aliasesmDDpmtW,
		"options": _optionsrFiKxxu
	}
		const _returnValuee7u6QTY = await _HelpmO48MXS.subcommandTerm(_cmdb3mkYIN)
	});

	it('test for Help', async () => {
		const _HelpANlQUg5 = new Help()
		const _cmdE1Cix1 = -5.004115905904564;
		const _sortSubcommandsxhhFGdM = undefined;
		const _returnValueFt6QU7S = "tZdlqzfnsrLw7OLCg5OUn5gqDqE1VVaFbensKuqhNV7sfHFFh55ssd4jiQqx7RkcpiD10AJltMfUzL8EnJ1UOSTHA";
		const _subcommandTermrFkQIpc = () => { return _returnValueFt6QU7S };
		const _helperP6EcwXp = {
			"sortSubcommands": _sortSubcommandsxhhFGdM,
		"subcommandTerm": _subcommandTermrFkQIpc
	}
		const _returnValuea5NPJuP = await _HelpANlQUg5.longestSubcommandTermLength(_cmdE1Cix1, _helperP6EcwXp)
		const _cmdUKDRjmx = "nJroQKEAOEiBHvAsutiFFrZ9H57iN2PCZVCmTsvySjv4CQ8mGEUd6Y1SBe";
		const _returnValueJHDs2nw = await _HelpANlQUg5.visibleArguments(_cmdUKDRjmx)
		const _namekhDEyW = null;
		const _cmdeeJZLD = new Command(_namekhDEyW)
		const _returnValuegYkcwC9 = await _cmdeeJZLD.opts()
		const _flagsVdSMSm1 = 5.359709647744815;
		const _optionpeevdjs = {
			"flags": _flagsVdSMSm1
	}
		const _returnValueAs4veBL = await _cmdeeJZLD.optionMissingArgument(_optionpeevdjs)
		const _arrayValueafNzYDK = false;
		const _arrayValueRfavwv6 = undefined;
		const _keyxRvzdWX = [_arrayValueafNzYDK, _arrayValueRfavwv6]
		const _returnValueAcjFFhD = await _cmdeeJZLD.getOptionValueSource(_keyxRvzdWX)
		const _receivedArgspjjaqxx = "xK3Om5Y";
		const _returnValuec4ZaRtj = await _cmdeeJZLD._excessArguments(_receivedArgspjjaqxx)
		const _returnValuegpH3df2 = await _HelpANlQUg5.subcommandDescription(_cmdeeJZLD)
		const _cmdnq906Lm = undefined;
		const _helperqm2UJSD = "VGcC6MOlxgWKYAJcb7qZ5hH3T2Vs";
		const _returnValueTcYWQG0 = await _HelpANlQUg5.longestSubcommandTermLength(_cmdnq906Lm, _helperqm2UJSD)
	});

	it('test for Help', async () => {
		const _Helpa1xWPH4 = new Help()
		const _cmdDNuQvt = false;
		const _helpernPZHzH = 4.289656482725379;
		const _returnValueMxaTx8I = await _Helpa1xWPH4.longestOptionTermLength(_cmdDNuQvt, _helpernPZHzH)
		const _cmdjrShxPg = true;
		const _arrayValuenKULm6Q = undefined;
		const _arrayValuenXrDbHQ = false;
		const _arrayValueLPxnRI = undefined;
		const _arrayValueYU4jjVh = [_arrayValuenKULm6Q, _arrayValuenXrDbHQ, _arrayValueLPxnRI]
		const _arrayValueHmolIQ8 = undefined;
		const _arrayValuebgQwW8C = undefined;
		const _helperLpKcTeI = [_arrayValueYU4jjVh, _arrayValueHmolIQ8, _arrayValuebgQwW8C]
		const _returnValueh5yDz1L = await _Helpa1xWPH4.padWidth(_cmdjrShxPg, _helperLpKcTeI)
		const _cmdJSMVd2u = 8.07893250356095;
		const _sortSubcommandsjyMylQ8 = 8.820149251108443;
		const _returnValueHczropN = undefined;
		const _returnValueYe62rg8 = () => { return _returnValueHczropN };
		const _subcommandTermaRFLIoo = () => { return _returnValueYe62rg8 };
		const _helper4CRYci = {
			"sortSubcommands": _sortSubcommandsjyMylQ8,
		"subcommandTerm": _subcommandTermaRFLIoo
	}
		const _returnValueybEFoBA = await _Helpa1xWPH4.formatHelp(_cmdJSMVd2u, _helper4CRYci)
		const _cmdUEQVey = undefined;
		const _arrayValuejk2NmeQ = "LNo9eEKASRXNVAstndJunH";
		const _arrayValueq9tPso = 4.4178105835754735;
		const _helper788NSb = [_arrayValuejk2NmeQ, _arrayValueq9tPso]
		const _returnValuelMhvnZ4 = await _Helpa1xWPH4.longestOptionTermLength(_cmdUEQVey, _helper788NSb)
	});

	it('test for Help', async () => {
		const _HelpfmYdiIo = new Help()
		const _commandsZ5mevOA = {
		
	}
		const _returnValuesSjRQqk = -4.058071085536678;
		const __hasImplicitHelpCommandqDpDbAb = () => { return _returnValuesSjRQqk };
		const __helpCommandnameAndArgskOY0Ry = {
		
	}
		const _returnValueXG73YPW = 8.857848003695587;
		const _createCommandZUr6cdu = () => { return _returnValueXG73YPW };
		const __helpCommandDescriptiong9NuIPc = false;
		const _cmdptUIDOT = {
			"commands": _commandsZ5mevOA,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandqDpDbAb,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgskOY0Ry,
		"createCommand": _createCommandZUr6cdu,
		"_helpCommandDescription": __helpCommandDescriptiong9NuIPc
	}
		const _returnValuePCtEjhb = await _HelpfmYdiIo.visibleCommands(_cmdptUIDOT)
	});

	it('test for Help', async () => {
		const _HelpjOf6uL1 = new Help()
		const _argChoiceshJ4PNV3 = {
		
	}
		const _defaultValuekQrT8X = undefined;
		const _defaultValueDescriptionaIwKen = false;
		const _descriptionyYFQymk = undefined;
		const _argumentjDClsbm = {
			"argChoices": _argChoiceshJ4PNV3,
		"defaultValue": _defaultValuekQrT8X,
		"defaultValueDescription": _defaultValueDescriptionaIwKen,
		"description": _descriptionyYFQymk
	}
		const _returnValuepBwzySf = await _HelpjOf6uL1.argumentDescription(_argumentjDClsbm)
		const _cmdwP1MqEa = "7IECQvzTCQT4dXnlcS";
		const _returnValueeDuZSF9 = await _HelpjOf6uL1.subcommandTerm(_cmdwP1MqEa)
		const _cmdJIp6fHx = null;
		const _returnValuedrwMkML = null;
		const _helperszZurrS = () => { return _returnValuedrwMkML };
		const _returnValueJUp7ung = await _HelpjOf6uL1.longestSubcommandTermLength(_cmdJIp6fHx, _helperszZurrS)
		const _cmdS45f4QT = -7.98913076056388;
		const _helpergrNF49O = "G7h9uMVSgYqc6dBcZMWSpVfQ9U2igjsYa3dr3";
		const _returnValuedN6AcGE = await _HelpjOf6uL1.formatHelp(_cmdS45f4QT, _helpergrNF49O)
		const _arrayValueHR0Bqgc = null;
		const _arrayValueSCyUAa = false;
		const _arrayValuegxdlQsN = undefined;
		const _argumentejgJYZv = [_arrayValueHR0Bqgc, _arrayValueSCyUAa, _arrayValuegxdlQsN]
		const _returnValueHhS2vMv = await _HelpjOf6uL1.argumentTerm(_argumentejgJYZv)
	});

	it('test for Help', async () => {
		const _HelpO48EEpR = new Help()
		const _argumentZ9gdEHg = "j7HBQi";
		const _returnValuelDkcXCD = await _HelpO48EEpR.argumentDescription(_argumentZ9gdEHg)
		const __name43Zz3e = "d3uDZcpFvsbjG2fNHQufk4o3W5JJJ2Vou9mScp2vt15Fbm9xA0pIuweQuX3t62PuWSsD64GEIXx3umNcw0oAJorEH6";
		const __aliases4VRVCu = {
		
	}
		const _parent6J4UTo = {
		
	}
		const _returnValueWFTynoi = undefined;
		const _usageSJifAi7 = () => { return _returnValueWFTynoi };
		const _cmdxlbm0QX = {
			"_name": __name43Zz3e,
		"_aliases": __aliases4VRVCu,
		"parent": _parent6J4UTo,
		"usage": _usageSJifAi7
	}
		const _returnValueOU2vqxg = await _HelpO48EEpR.commandUsage(_cmdxlbm0QX)
		const _arrayValueLGZiwwt = null;
		const _cmdSStzANw = [_arrayValueLGZiwwt]
		const _returnValuedO1Yyfw = await _HelpO48EEpR.visibleCommands(_cmdSStzANw)
		const _returnValueN3G5935 = undefined;
		const _returnValuenWlNPlF = () => { return _returnValueN3G5935 };
		const _argumentoo3hQu9 = () => { return _returnValuenWlNPlF };
		const _returnValuek05caem = await _HelpO48EEpR.argumentTerm(_argumentoo3hQu9)
	});

	it('test for Help', async () => {
		const _HelpP9eRZY7 = new Help()
		const _cmdmsH0qT3 = null;
		const _returnValuekak9Fz8 = false;
		const _helperTFASsAB = () => { return _returnValuekak9Fz8 };
		const _returnValuezoEARWo = await _HelpP9eRZY7.longestArgumentTermLength(_cmdmsH0qT3, _helperTFASsAB)
	});

	it('test for Help', async () => {
		const _HelpQuUUcO = new Help()
		const __argsxrvEBQJ = {
		
	}
		const __namexPjvKA4 = 4.8984355896078355;
		const __aliasesSIKKDAP = {
		
	}
		const _arrayValueO7DF9GL = null;
		const _arrayValueeKmG6th = {
		
	}
		const _arrayValueDXSw7K5 = 8.86228654632393;
		const _arrayValuep8qdI5G = true;
		const _returnValuek1hLpVf = [_arrayValueO7DF9GL, _arrayValueeKmG6th, _arrayValueDXSw7K5, _arrayValuep8qdI5G]
		const _optionsMPDb6YX = () => { return _returnValuek1hLpVf };
		const _cmdwjvbLEW = {
			"_args": __argsxrvEBQJ,
		"_name": __namexPjvKA4,
		"_aliases": __aliasesSIKKDAP,
		"options": _optionsMPDb6YX
	}
		const _returnValueodgdeHr = await _HelpQuUUcO.subcommandTerm(_cmdwjvbLEW)
		const _cmdZqvSrDR = undefined;
		const _arrayValueAicZzZB = true;
		const _helpervqMuHSm = [_arrayValueAicZzZB]
		const _returnValueh7X38NK = await _HelpQuUUcO.formatHelp(_cmdZqvSrDR, _helpervqMuHSm)
		const _returnValueIzqCsEz = -2.0194912156028213;
		const _nameskCh7Wp = () => { return _returnValueIzqCsEz };
		const _argumentHW7gnM = {
			"name": _nameskCh7Wp
	}
		const _returnValueUCzN5h = await _HelpQuUUcO.argumentTerm(_argumentHW7gnM)
	});

	it('test for Help', async () => {
		const _HelpZMi0F4M = new Help()
		const _arrayValueNeRJhc = null;
		const _arrayValuesfDgXI7 = {
		
	}
		const _arrayValueOqf2db0 = undefined;
		const _arrayValueI17cIVt = [_arrayValuesfDgXI7, _arrayValueOqf2db0]
		const _argumentfHceLat = [_arrayValueNeRJhc, _arrayValueI17cIVt]
		const _returnValuejxaEn09 = await _HelpZMi0F4M.argumentTerm(_argumentfHceLat)
	});

	it('test for Help', async () => {
		const _HelpnbD8CYR = new Help()
		const _cmdyGQKg5N = undefined;
		const _helperP7lfYa1 = new Help()
		const _nameo7AsszB = "hjSJpAuYzSq1Po7jnbDzNlG2DqVOMUvIUOr3pKMYdiIV0MiYbIAhFX7LhLhD";
		const _descriptionPSb80aO = 9.442460275678187;
		const _optionD1v3ky = new Argument(_nameo7AsszB, _descriptionPSb80aO)
		const _returnValuelImwdZj = await _optionD1v3ky.argRequired()
		const _returnValueOaggXhl = await _optionD1v3ky.name()
		const _includesoDjge7F = true;
		const _returnValueeaCrmUM = true;
		const _joinYuK3Rx = () => { return _returnValueeaCrmUM };
		const _valuesGOdZzD8 = {
			"includes": _includesoDjge7F,
		"join": _joinYuK3Rx
	}
		const _returnValue37WRyc = await _optionD1v3ky.choices(_valuesGOdZzD8)
		const _returnValuev5HZIj6 = await _helperP7lfYa1.optionDescription(_optionD1v3ky)
		const _returnValueyIs7nu = true;
		const _cmd58nRev = () => { return _returnValueyIs7nu };
		const _returnValueTW2Z89Q = await _helperP7lfYa1.commandDescription(_cmd58nRev)
		const _cmdkMVZxHB = true;
		const _returnValueAtXpvXM = {
		
	}
		const _visibleArgumentszl2byrj = () => { return _returnValueAtXpvXM };
		const _returnValueMA9HyWK = null;
		const _argumentTermsGeLUAm = () => { return _returnValueMA9HyWK };
		const _helperLsRfvQe = {
			"visibleArguments": _visibleArgumentszl2byrj,
		"argumentTerm": _argumentTermsGeLUAm
	}
		const _returnValueZJxtLZ = await _helperP7lfYa1.longestArgumentTermLength(_cmdkMVZxHB, _helperLsRfvQe)
		const _argumentAMt0BOD = undefined;
		const _returnValueCP8ZN9 = await _helperP7lfYa1.argumentDescription(_argumentAMt0BOD)
		const _cmdmS4mPKV = "KusCy4DEGJHek4";
		const _returnValueoVzDgg = await _helperP7lfYa1.visibleCommands(_cmdmS4mPKV)
		const _returnValueynOaG4h = await _HelpnbD8CYR.longestSubcommandTermLength(_cmdyGQKg5N, _helperP7lfYa1)
		const _arrayValueAZFo8iY = true;
		const _cmdWeKHP0n = [_arrayValueAZFo8iY]
		const _helpermhginOy = "RjeCUadH6LDjawIoNyvbUjqc9KVmEhWHoh8w709naInXqvt11J7ymaQshsPizvFTVlKcPJU3Q1WJZ8lUeopaju";
		const _returnValueerQc51l = await _HelpnbD8CYR.longestOptionTermLength(_cmdWeKHP0n, _helpermhginOy)
		const _returnValuepqzH2Tg = -4.028460639633535;
		const _cmdm6LGDDD = () => { return _returnValuepqzH2Tg };
		const _returnValueEcBYNd7 = await _HelpnbD8CYR.visibleOptions(_cmdm6LGDDD)
		const _nameaoUtWVH = "5VMlqZpJbvqpKdVeuYggQvgGQQLBfA26AKZ8GNaacVvtKC4ulKqqbsHRtcqajIwn8ov8EYJ2jVQBDaT";
		const _descriptionLHjdO2d = false;
		const _cmdE3cZcM = new Argument(_nameaoUtWVH, _descriptionLHjdO2d)
		const _valuelSVVaW4 = undefined;
		const _arrayValuewv7VUrx = "BnuAJW6LX364wFL22Y78wBCWgiftiWDDrI97HofznwExjne9HuXtCtYGFMI";
		const _arrayValuesSLavir = -7.1447075747173505;
		const _arrayValueFsAahav = [_arrayValuewv7VUrx, _arrayValuesSLavir]
		const _previousWfCKnl = [_arrayValueFsAahav]
		const _returnValueKMO0Phq = await _cmdE3cZcM._concatValue(_valuelSVVaW4, _previousWfCKnl)
		const _returnValue65LQxm = await _HelpnbD8CYR.subcommandDescription(_cmdE3cZcM)
	});

	it('test for Help', async () => {
		const _Helpr7lN9I2 = new Help()
		const _returnValueeLtdCId = {
		
	}
		const _cmdxVG0OV3 = () => { return _returnValueeLtdCId };
		const _helper1nF4Hj = new Help()
		const _strWPdMlNI = "FS7ea8Y4lhH0rpI4eawKbZtW8JkIdGOsd4ZF7dgqFFLB4EVXKVfFtK7Lkf7xefbt4eLhxP7dUDgZ9KzZZmW";
		const _widthkWSlAhA = null;
		const _indentiDcCxHb = 9.980646554658616;
		const _minColumnWidthSXvJrll = -6.738710200274917;
		const _returnValuevE9y7uH = await _helper1nF4Hj.wrap(_strWPdMlNI, _widthkWSlAhA, _indentiDcCxHb, _minColumnWidthSXvJrll)
		const _cmdRP7jfAH = null;
		const _helperPEGRpYY = true;
		const _returnValueNrAmve5 = await _helper1nF4Hj.padWidth(_cmdRP7jfAH, _helperPEGRpYY)
		const _arrayValuessD51Ut = false;
		const _cmdjch4pJN = [_arrayValuessD51Ut]
		const _returnValueZTovD4 = await _helper1nF4Hj.visibleArguments(_cmdjch4pJN)
		const _returnValueEjj0y43 = 4.452260538891581;
		const _strImDYlgE = () => { return _returnValueEjj0y43 };
		const _widthtYnfOL = 8.899494403805413;
		const _indentKviBY1R = 5.589011978786127;
		const _minColumnWidthDiHPfmk = -5.184085781955019;
		const _returnValueAwxY5BF = await _helper1nF4Hj.wrap(_strImDYlgE, _widthtYnfOL, _indentKviBY1R, _minColumnWidthDiHPfmk)
		const _arrayValueEFHbSee = undefined;
		const _arrayValueqg5HDc7 = true;
		const _arrayValueYDk7Kpv = 3.37298584172294;
		const _optionLCgfYOe = [_arrayValueEFHbSee, _arrayValueqg5HDc7, _arrayValueYDk7Kpv]
		const _returnValueZQlQtV5 = await _helper1nF4Hj.optionTerm(_optionLCgfYOe)
		const _returnValuesgL4Sbv = await _Helpr7lN9I2.padWidth(_cmdxVG0OV3, _helper1nF4Hj)
		const _arrayValueF9fTaZB = []
		const _arrayValue1bXurC = true;
		const _returnValueSXaN0ut = [_arrayValueF9fTaZB, _arrayValue1bXurC]
		const _cmdSaHpr3 = () => { return _returnValueSXaN0ut };
		const _returnValueHSkTesV = await _Helpr7lN9I2.subcommandTerm(_cmdSaHpr3)
		const _cmdlbKy25S = "sMx1KBXVyAOQ3N";
		const _returnValueyiBLAby = true;
		const _visibleOptionsKCeCLr5 = () => { return _returnValueyiBLAby };
		const _arrayValuev7PiTsO = -2.940189239334055;
		const _arrayValueXtPtIrv = {
		
	}
		const _returnValueDqimS8u = [_arrayValuev7PiTsO, _arrayValueXtPtIrv]
		const _optionTerm6IuVP1 = () => { return _returnValueDqimS8u };
		const _helperykNXiI2 = {
			"visibleOptions": _visibleOptionsKCeCLr5,
		"optionTerm": _optionTerm6IuVP1
	}
		const _returnValuetIXwJJF = await _Helpr7lN9I2.longestOptionTermLength(_cmdlbKy25S, _helperykNXiI2)
		const _arrayValueN3MbJ2 = undefined;
		const _arrayValuesiXumwg = "l896uVcqPh804jAUiSAUyn1gjrjkAis5f";
		const _cmdPuhYFol = [_arrayValueN3MbJ2, _arrayValuesiXumwg]
		const _arrayValueuMsa6hU = 6.699356468250837;
		const _arrayValueg6uE6ce = "NEQZhFIkxtomx1GGBRXKFQR6jdl3tP5RDrXxDyr2oeL6eV5Edwmx6zWBLxU6B";
		const _returnValueKRJ2IHE = [_arrayValueuMsa6hU, _arrayValueg6uE6ce]
		const _helperulFENaE = () => { return _returnValueKRJ2IHE };
		const _returnValueuH6Fjm0 = await _Helpr7lN9I2.formatHelp(_cmdPuhYFol, _helperulFENaE)
		const _cmdkS47Xvy = false;
		const _returnValuewMaliuq = await _Helpr7lN9I2.commandUsage(_cmdkS47Xvy)
	});

	it('test for Help', async () => {
		const _HelpBgbEG92 = new Help()
		const _flagseBryvSD = "8mMuEIcWkrPflE5j7DOK3L11Wzt5rYQsDpKbsh6GY4BVgHB8XzaUjQ5F8MorbKenm7qnTYbZ0";
		const _descriptionfLpVRfq = undefined;
		const _optionybqC7k = new Option(_flagseBryvSD, _descriptionfLpVRfq)
		const _mandatoryt1gmX0 = false;
		const _returnValuejfrnBv = await _optionybqC7k.makeOptionMandatory(_mandatoryt1gmX0)
		const _returnValuenIFzMKP = await _optionybqC7k.attributeName()
		const _valuejioIkFV = -7.465649310558356;
		const _previousB4XoQrg = "x3HCMjrauP2J33xmOsWReyKvKwpO1qXSRvCs7tRhHeI6rMJyR6gpQFl5zx3nkP6BnZc3idIvio5DB4A26TPj9e8Ku";
		const _returnValuesNFYdXs = await _optionybqC7k._concatValue(_valuejioIkFV, _previousB4XoQrg)
		const _namemzHtnLz = {
		
	}
		const _returnValueJFJk90h = await _optionybqC7k.env(_namemzHtnLz)
		const _returnValuefFT5EIF = await _HelpBgbEG92.optionDescription(_optionybqC7k)
		const _arrayValueOBvdGAn = {
		
	}
		const _arrayValueHDRLoxl = null;
		const _arrayValueh2kjGPn = []
		const _arrayValueMQxGrGs = 1.54501382509984;
		const _arrayValueIqxVLOR = [_arrayValueOBvdGAn, _arrayValueHDRLoxl, _arrayValueh2kjGPn, _arrayValueMQxGrGs]
		const _returnValueNGfCI47 = [_arrayValueIqxVLOR]
		const _cmdvBeU2P3 = () => { return _returnValueNGfCI47 };
		const _returnValuemtsvj0L = await _HelpBgbEG92.subcommandTerm(_cmdvBeU2P3)
	});

	it('test for Help', async () => {
		const _HelpGLBm13P = new Help()
		const _flagsPbXW0t = "27r62QrKjvAHKk24cp9gfn6NvYXhdskadOwrtcSaKRDMcIsHPNm18ErJhLFVkuXroS";
		const _descriptionVvBapCN = null;
		const _argumentGV6muHp = new Option(_flagsPbXW0t, _descriptionVvBapCN)
		const _fnubthV6C = {
		
	}
		const _returnValuegoLt1Kc = await _argumentGV6muHp.argParser(_fnubthV6C)
		const _returnValueTsiW9Oh = await _argumentGV6muHp.name()
		const _valuekabDe2T = undefined;
		const _descriptionxx1doLe = undefined;
		const _returnValueAWTFS4w = await _argumentGV6muHp.default(_valuekabDe2T, _descriptionxx1doLe)
		const _fneiM4ch = {
		
	}
		const _returnValueXcdHosS = await _argumentGV6muHp.argParser(_fneiM4ch)
		const _returnValueHYl3PTY = await _HelpGLBm13P.argumentDescription(_argumentGV6muHp)
		const _cmdSlXNpPY = "cjsUBVCSMlS181ikJWbgf7OzrJeZ9NgTCVyXGDPhOYg5aJFWfp8tIDAC9BMAnS";
		const _arrayValuedoMsuU = undefined;
		const _arrayValueIKxvFU6 = false;
		const _helperCGsF3z7 = [_arrayValuedoMsuU, _arrayValueIKxvFU6]
		const _returnValueNxhnO03 = await _HelpGLBm13P.longestSubcommandTermLength(_cmdSlXNpPY, _helperCGsF3z7)
		const _returnValueW6n6RA = true;
		const _argumentnRyXC0o = () => { return _returnValueW6n6RA };
		const _returnValueF0eVz12 = await _HelpGLBm13P.argumentDescription(_argumentnRyXC0o)
	});

	it('test for Help', async () => {
		const _HelpPuQdKnu = new Help()
		const _strq54qwT7 = "3JjJNYpuue7rdYmA2WIHGpVHJbmUU9xtTBB4W9wpAtyUy0l9ciIFFMKzQeXIirJbEFNiaxD6yGEkUFuz";
		const _widthvvPjxvX = 1.9011084662441728;
		const _indentnAbGJk3 = "pMG8fQxF1H5AMNwv2u1zUN7RH2FLmT1Caf7b0MrnAU";
		const _minColumnWidthU705ded = -1.2348729218750982;
		const _returnValueOQLv9k0 = await _HelpPuQdKnu.wrap(_strq54qwT7, _widthvvPjxvX, _indentnAbGJk3, _minColumnWidthU705ded)
		const _nameu74Q8B2 = null;
		const _cmdwohHGuF = new Command(_nameu74Q8B2)
		const _storeAsPropertieswuqQ0P = true;
		const _returnValuejvw92ST = await _cmdwohHGuF.storeOptionsAsProperties(_storeAsPropertieswuqQ0P)
		const _fnTPCfwTr = {
		
	}
		const _returnValueDK7D7S5 = await _cmdwohHGuF.exitOverride(_fnTPCfwTr)
		const _returnValueRt96KuH = await _HelpPuQdKnu.subcommandTerm(_cmdwohHGuF)
		const _flagssfBYBrd = -0.43404137380485963;
		const _optionyWZXOM9 = {
			"flags": _flagssfBYBrd
	}
		const _returnValuekegblhs = await _HelpPuQdKnu.optionTerm(_optionyWZXOM9)
	});

	it('test for Help', async () => {
		const _HelpSWEhDpK = new Help()
		const _nameD8IbCKL = -8.110834183197372;
		const _cmdz3KRgXK = new Command(_nameD8IbCKL)
		const _displayHelpCUbW17l = {
		
	}
		const _returnValuefQGVPI = await _cmdz3KRgXK.showHelpAfterError(_displayHelpCUbW17l)
		const _returnValuexR0zN1Z = await _cmdz3KRgXK._hasImplicitHelpCommand()
		const _fnLjFwkve = {
		
	}
		const _returnValueEceMQ9M = await _cmdz3KRgXK.exitOverride(_fnLjFwkve)
		const _returnValueq8IdIxn = await _HelpSWEhDpK.visibleOptions(_cmdz3KRgXK)
		const _returnValuedLvKOgq = 1.3662107359628877;
		const _namerK29sn6 = () => { return _returnValuedLvKOgq };
		const _argumentPNu8jRf = {
			"name": _namerK29sn6
	}
		const _returnValueSE5Rfqj = await _HelpSWEhDpK.argumentTerm(_argumentPNu8jRf)
		const _arrayValuegOxVcxf = "ifC6z49S3IcBV2eGxyZzLm8LenSkKnApvOjP3OhexM8V4h3IPP7OeflEcK9GIN";
		const _arrayValuerDWIoke = -9.142904543949058;
		const _arrayValuefcU5dJw = undefined;
		const _cmdbeLnov1 = [_arrayValuegOxVcxf, _arrayValuerDWIoke, _arrayValuefcU5dJw]
		const _helperl7GniEL = new Help()
		const _nameRLi3Mni = undefined;
		const _cmdagjlGL9 = new Command(_nameRLi3Mni)
		const _promisejcJSY5v = {
		
	}
		const _eventdS7poe = "orlSt8KZ6IWQ8xWN";
		const _returnValueVQv9TjS = await _cmdagjlGL9._chainOrCallHooks(_promisejcJSY5v, _eventdS7poe)
		const _positionYMgQDLV = "kLsojW5umtcHDQT";
		const _textDSS8pLm = {
		
	}
		const _returnValuemg6hRsC = await _cmdagjlGL9.addHelpText(_positionYMgQDLV, _textDSS8pLm)
		const _returnValuecXX2xmz = undefined;
		const _match3UIftO = () => { return _returnValuecXX2xmz };
		const _nameAndArgseplKX5b = {
			"match": _match3UIftO
	}
		const _actionOptsOrExecDescChzaKWZ = {
		
	}
		const _execOptssarXLdK = null;
		const _returnValuePZ1l09N = await _cmdagjlGL9.command(_nameAndArgseplKX5b, _actionOptsOrExecDescChzaKWZ, _execOptssarXLdK)
		const _allowExcessRu7iP0m = false;
		const _returnValueqzE4EKY = await _cmdagjlGL9.allowExcessArguments(_allowExcessRu7iP0m)
		const __nameA0GhNaB = {
		
	}
		const _commandsu7aAakm = false;
		const __hiddenuHtYXY = false;
		const _arrayValuepeUMVe = "Vfjc5O2R";
		const _arrayValueL4JLN78 = "jlhApo78stVfCfeD0SfiVs5FgmnBsEiR6l4FRVsyqB89rNT0DnsvLwl6n9Yu32K0TAKoJLdZXnBReJreVDzejqL7mCgw";
		const _arrayValuey25TNp9 = null;
		const _arrayValueeTeFw6b = null;
		const _arrayValueLhermIL = true;
		const _arrayValueODIvkoX = false;
		const _arrayValuenvYvZcu = [_arrayValueLhermIL, _arrayValueODIvkoX]
		const _arrayValueRmOAVaY = [_arrayValuey25TNp9, _arrayValueeTeFw6b, _arrayValuenvYvZcu]
		const _returnValueJSFsygr = [_arrayValuepeUMVe, _arrayValueL4JLN78, _arrayValueRmOAVaY]
		const _parentb3LkcSc = () => { return _returnValueJSFsygr };
		const _cmdzi77OfN = {
			"_name": __nameA0GhNaB,
		"commands": _commandsu7aAakm,
		"_hidden": __hiddenuHtYXY,
		"parent": _parentb3LkcSc
	}
		const _isDefaultrKeOdT2 = null;
		const _optsiLLlZFh = {
			"isDefault": _isDefaultrKeOdT2
	}
		const _returnValueiUrDOy3 = await _cmdagjlGL9.addCommand(_cmdzi77OfN, _optsiLLlZFh)
		const _returnValue1tSFjT = await _helperl7GniEL.commandDescription(_cmdagjlGL9)
		const _cmdy0IxZD = null;
		const _returnValue9Tk14u = {
		
	}
		const _longestOptionTermLengthFzD4bpi = () => { return _returnValue9Tk14u };
		const _returnValueZKVmFr = "m34TN65TUTeIyN5XTI3GxfIUlDkn9IPEhgMUNpraPlod3nADuRSxDHKZcqhoTYU5Wx0oJh3P";
		const _longestSubcommandTermLengthKMMMtg = () => { return _returnValueZKVmFr };
		const _returnValueQCchMLz = null;
		const _longestArgumentTermLengthc2VEapk = () => { return _returnValueQCchMLz };
		const _helper5MWFr3 = {
			"longestOptionTermLength": _longestOptionTermLengthFzD4bpi,
		"longestSubcommandTermLength": _longestSubcommandTermLengthKMMMtg,
		"longestArgumentTermLength": _longestArgumentTermLengthc2VEapk
	}
		const _returnValueEpAsoD = await _helperl7GniEL.padWidth(_cmdy0IxZD, _helper5MWFr3)
		const _returnValueFhhMODb = await _HelpSWEhDpK.longestArgumentTermLength(_cmdbeLnov1, _helperl7GniEL)
	});

	it('test for Help', async () => {
		const _HelpCOIkaAz = new Help()
		const _arrayValueHB7d9jk = undefined;
		const _arrayValueyOl9jhO = [_arrayValueHB7d9jk]
		const _returnValueGvgQNkO = null;
		const _returnValueUCyxmj4 = () => { return _returnValueGvgQNkO };
		const _arrayValuecFLdLWD = () => { return _returnValueUCyxmj4 };
		const _cmduHfiV0L = [_arrayValueyOl9jhO, _arrayValuecFLdLWD]
		const _helperLMTOOpd = new Help()
		const _nameZ9UnGT = "cR8LvRAB75cOavNcLHta4SoeQlaa8fNGlrS5N9fPJxaYS6gH9Fc5TGKSBhsZ2I";
		const _descriptionnf5GHJx = true;
		const _argumentti560D7 = new Argument(_nameZ9UnGT, _descriptionnf5GHJx)
		const _valuef4v4uKY = undefined;
		const _descriptionc70weP = {
		
	}
		const _returnValueUHXAmXK = await _argumentti560D7.default(_valuef4v4uKY, _descriptionc70weP)
		const _returnValueGMPkSb = await _argumentti560D7.argOptional()
		const _arrayValuej5joxO9 = undefined;
		const _arrayValuerbe2M2C = undefined;
		const _arrayValueQNk43iC = false;
		const _returnValuesdCUzSK = []
		const _returnValueTP5Ghi = () => { return _returnValuesdCUzSK };
		const _arrayValuekoYlj9g = () => { return _returnValueTP5Ghi };
		const _arrayValueOPpJWFG = [_arrayValueQNk43iC, _arrayValuekoYlj9g]
		const _arrayValueV7oS5NV = false;
		const _arrayValueuTjvQJL = null;
		const _arrayValuePaXPOb6 = undefined;
		const _arrayValuebMf0L1g = [_arrayValueV7oS5NV, _arrayValueuTjvQJL, _arrayValuePaXPOb6]
		const _arrayValuewuuigxv = [_arrayValuebMf0L1g]
		const _arrayValueZxGCZDa = [_arrayValuerbe2M2C, _arrayValueOPpJWFG, _arrayValuewuuigxv]
		const _valueseDVeszJ = [_arrayValuej5joxO9, _arrayValueZxGCZDa]
		const _returnValueL7se6cw = await _argumentti560D7.choices(_valueseDVeszJ)
		const _returnValueX35iuLI = await _argumentti560D7.argRequired()
		const _returnValueopTkFmJ = await _helperLMTOOpd.argumentDescription(_argumentti560D7)
		const _returnValueIhlHubX = await _HelpCOIkaAz.longestArgumentTermLength(_cmduHfiV0L, _helperLMTOOpd)
		const _returnValueBoeuVGB = false;
		const _flagsI6we8Jj = () => { return _returnValueBoeuVGB };
		const _descriptionacxtWz = undefined;
		const _optionoSYNZBi = new Option(_flagsI6we8Jj, _descriptionacxtWz)
		const _hide47g0z1 = true;
		const _returnValueXmff6S = await _optionoSYNZBi.hideHelp(_hide47g0z1)
		const _argy06rU2T = "6P0bbANsedF0jWUdivIjbEtrPaJb2gYi13jqfyEKb21TQuIy7opuj6oBJGFQh9mo16AYYuW1Gg9TXRMWV1LdhBQMSEV4rm";
		const _returnValueO24XqVK = await _optionoSYNZBi.is(_argy06rU2T)
		const _argiCcmI2B = "dtvH1u27KqnaOSHkWoLvEgyd3TEf";
		const _returnValueVDn8krv = await _optionoSYNZBi.is(_argiCcmI2B)
		const _arrayValueChZc1Lr = "cLCBjS";
		const _arrayValueRuMvNOq = null;
		const _arrayValuekAJBBV7 = {
		
	}
		const _arrayValueEvptEMu = [_arrayValueRuMvNOq, _arrayValuekAJBBV7]
		const _valuesww8ThOn = [_arrayValueChZc1Lr, _arrayValueEvptEMu]
		const _returnValuehZjdFwm = await _optionoSYNZBi.choices(_valuesww8ThOn)
		const _returnValueKykpdC0 = await _HelpCOIkaAz.optionDescription(_optionoSYNZBi)
		const _flagsgot56Kz = "b8";
		const _descriptionrLFjoX = false;
		const _argumentNQXdd2i = new Option(_flagsgot56Kz, _descriptionrLFjoX)
		const _arrayValue3TmQ9R = 2.503975440998987;
		const _arrayValuehQlCO3b = 1.7243930284426963;
		const _arrayValueka7B6Z8 = null;
		const _hideRqKqrr7 = [_arrayValue3TmQ9R, _arrayValuehQlCO3b, _arrayValueka7B6Z8]
		const _returnValueGsuYiw = await _argumentNQXdd2i.hideHelp(_hideRqKqrr7)
		const _returnValuem0Odv3G = []
		const _valuesEcaFJzE = () => { return _returnValuem0Odv3G };
		const _returnValueCc4nDM7 = await _argumentNQXdd2i.choices(_valuesEcaFJzE)
		const _returnValuexVMiRJp = await _argumentNQXdd2i.attributeName()
		const _returnValueg7Oab1 = await _HelpCOIkaAz.argumentDescription(_argumentNQXdd2i)
	});

	it('test for Help', async () => {
		const _HelpCgHKMue = new Help()
		const _nameRixo4YN = -3.815836816383066;
		const _cmdzVkzkMn = new Command(_nameRixo4YN)
		const _returnValueAS8Yofx = await _cmdzVkzkMn.opts()
		const _configurationMhmmph7 = undefined;
		const _returnValuezuKaRyM = await _cmdzVkzkMn.configureOutput(_configurationMhmmph7)
		const _returnValuenUiJ9kN = await _HelpCgHKMue.visibleCommands(_cmdzVkzkMn)
		const _returnValuendDmEvv = 1.3700147008504242;
		const _descriptionKpNcE6G = () => { return _returnValuendDmEvv };
		const _cmdaU6UDr4 = {
			"description": _descriptionKpNcE6G
	}
		const _returnValueG8SxHGJ = await _HelpCgHKMue.commandDescription(_cmdaU6UDr4)
	});

	it('test for Help', async () => {
		const _HelpltEieQC = new Help()
		const _cmdaJ4Srti = false;
		const _helperYt4HejZ = new Help()
		const _returnValueC2djIAD = []
		const _sliceLE5ReD7 = () => { return _returnValueC2djIAD };
		const _namerb58lSp = {
			"slice": _sliceLE5ReD7
	}
		const _descriptionz2C1ugM = undefined;
		const _argumentTB7g3IX = new Argument(_namerb58lSp, _descriptionz2C1ugM)
		const _valueJmvoNfY = undefined;
		const _previousaM4jufC = "onkFE3cNsmPX9aOry7W3eD4vu6qJh5WvjGkcykYnuavJ7EirdVMu3TrWKL";
		const _returnValueLHsQF3y = await _argumentTB7g3IX._concatValue(_valueJmvoNfY, _previousaM4jufC)
		const _fno5mMPWs = undefined;
		const _returnValuewefEvzg = await _argumentTB7g3IX.argParser(_fno5mMPWs)
		const _returnValue6n8mUd = await _argumentTB7g3IX.argRequired()
		const _returnValueXXfIUmC = false;
		const _valueEH0r3B6 = () => { return _returnValueXXfIUmC };
		const _descriptiongEoIz1 = {
		
	}
		const _returnValuej7BjEBy = await _argumentTB7g3IX.default(_valueEH0r3B6, _descriptiongEoIz1)
		const _returnValueISyUFO = await _helperYt4HejZ.argumentDescription(_argumentTB7g3IX)
		const _argumentnLvkOxB = undefined;
		const _returnValueviDis7u = await _helperYt4HejZ.argumentTerm(_argumentnLvkOxB)
		const _nameP1jbA4s = "IE69lSin1vpbknYPEFhHGDCncR6XXyXo3SblYmgYWfdw2vmXgM12wWwYavFgdUKs9fR8zWv7";
		const _cmdcPaAiL6 = new Command(_nameP1jbA4s)
		const _argvyz7htS9 = -4.35210022588035;
		const _parseOptionsa8JCvSg = {
		
	}
		const _returnValue3HgBYT = await _cmdcPaAiL6.parse(_argvyz7htS9, _parseOptionsa8JCvSg)
		const _strYfVmvRm = "qmjrYZWsMC2QjVkY36pBHbDY6F0bi5HoaCIyH";
		const _argsDescriptionEUeU9Fw = "Y3gDl33rYjo7WbJxk4HbkHl9fbM2YQkoKjeHrqXfUc8fUnWLBF9du3S4b1R3g4Nb6nJnfXNRslXkwHkJnH1XH";
		const _returnValue2wC2Jw = await _cmdcPaAiL6.description(_strYfVmvRm, _argsDescriptionEUeU9Fw)
		const _returnValuesWwLFpX = await _helperYt4HejZ.subcommandDescription(_cmdcPaAiL6)
		const _nameHzuGOTw = "djOyGZEeL9KZIF";
		const _cmdDyykSt = new Command(_nameHzuGOTw)
		const _argvToM5ie = 8.209751855411959;
		const _parseOptionsCavVwHD = null;
		const _returnValueujyjonb = await _cmdDyykSt.parse(_argvToM5ie, _parseOptionsCavVwHD)
		const _configurationYrRt6Dl = undefined;
		const _returnValuen7d67OH = await _cmdDyykSt.configureOutput(_configurationYrRt6Dl)
		const _returnValueYlumA2s = await _helperYt4HejZ.visibleArguments(_cmdDyykSt)
		const _returnValueebxATsJ = await _HelpltEieQC.longestSubcommandTermLength(_cmdaJ4Srti, _helperYt4HejZ)
		const _returnValueIUv5T4E = true;
		const _argumentKyZryLH = () => { return _returnValueIUv5T4E };
		const _returnValuelIDUJTo = await _HelpltEieQC.argumentDescription(_argumentKyZryLH)
	});

	it('test for Help', async () => {
		const _Helpan8BIXZ = new Help()
		const _returnValue48Ktev = "U52IH6VLBa7Y8dfmIKZ2nYNmkjQBPt";
		const _matchuDXEtHO = () => { return _returnValue48Ktev };
		const _returnValuesTr1xrx = 1.5139496523073674;
		const _substraGee8Ck = () => { return _returnValuesTr1xrx };
		const _strtcUAxaA = {
			"match": _matchuDXEtHO,
		"substr": _substraGee8Ck
	}
		const _widthWU7N43j = -6.290560390277667;
		const _indentFdQjJh = -9.409096297929029;
		const _minColumnWidthypoNkdo = -4.768315013561835;
		const _returnValuevJonAZl = await _Helpan8BIXZ.wrap(_strtcUAxaA, _widthWU7N43j, _indentFdQjJh, _minColumnWidthypoNkdo)
		const _arrayValuebuLWth7 = true;
		const _optionxOs8Mw4 = [_arrayValuebuLWth7]
		const _returnValuerfbXk1A = await _Helpan8BIXZ.optionTerm(_optionxOs8Mw4)
		const _arrayValuePStL1zN = "Pt09QsVQm95";
		const _arrayValue9eQeum = false;
		const _returnValuez7y6pBB = undefined;
		const _arrayValuenoTbqz9 = () => { return _returnValuez7y6pBB };
		const _cmdfxwfAte = [_arrayValuePStL1zN, _arrayValue9eQeum, _arrayValuenoTbqz9]
		const _returnValuek0meFjy = await _Helpan8BIXZ.subcommandTerm(_cmdfxwfAte)
		const _arrayValueSDIW7TA = undefined;
		const _arrayValuedMoQAg0 = undefined;
		const _nameekO2ZSS = [_arrayValueSDIW7TA, _arrayValuedMoQAg0]
		const _returnValuerZd0fd = undefined;
		const _descriptionEe3SI9Z = () => { return _returnValuerZd0fd };
		const _argumentpG7pRCf = new Argument(_nameekO2ZSS, _descriptionEe3SI9Z)
		const _returnValueg1Qy0X = await _argumentpG7pRCf.name()
		const _returnValuex4mQal3 = await _argumentpG7pRCf.argRequired()
		const _returnValueAWxEGo = await _argumentpG7pRCf.name()
		const _arrayValuebbWtnbz = "RPTCDI";
		const _valuesGKeAHO5 = [_arrayValuebbWtnbz]
		const _returnValuemfnh8SB = await _argumentpG7pRCf.choices(_valuesGKeAHO5)
		const _returnValuelcRhWDm = await _Helpan8BIXZ.argumentDescription(_argumentpG7pRCf)
	});

	it('test for Help', async () => {
		const _HelpCcf3vIr = new Help()
		const _namenUP8Vh = null;
		const _cmdUKtkiho = new Command(_namenUP8Vh)
		const _configurationYOG8ZN = undefined;
		const _returnValueTycIeEX = await _cmdUKtkiho.configureHelp(_configurationYOG8ZN)
		const _configurationMaHSRaa = undefined;
		const _returnValueDvqh7F = await _cmdUKtkiho.configureHelp(_configurationMaHSRaa)
		const _returnValueFhQq3Ag = await _cmdUKtkiho._parseOptionsEnv()
		const _flagshTfaPPL = "jGj668XN4JLhpcp44wUvdBAN2tShY3BGYKqMl7cZCqnV6t";
		const _arrayValueyoopZQO = true;
		const _arrayValueWa8X7l9 = undefined;
		const _descriptionmmypf2b = [_arrayValueyoopZQO, _arrayValueWa8X7l9]
		const _fnD1xQ7sB = -3.2943112440989637;
		const _arrayValuev8lw3w6 = "1KmZguwn2lu8q6FUVG9mYq8MPIIzXQmYFMoCFn6xxaKn4Ax5TCRRKUX995a3L34zyDaJOxCcv9s7vOIGfpHrcLsv";
		const _arrayValueF9szEwO = [_arrayValuev8lw3w6]
		const _arrayValuevcgVQjl = false;
		const _defaultValueVzwHaz4 = [_arrayValueF9szEwO, _arrayValuevcgVQjl]
		const _returnValued8TMjuy = await _cmdUKtkiho.option(_flagshTfaPPL, _descriptionmmypf2b, _fnD1xQ7sB, _defaultValueVzwHaz4)
		const _returnValuepldxhk = await _cmdUKtkiho._parseOptionsEnv()
		const _returnValuepSxCXpi = await _HelpCcf3vIr.subcommandTerm(_cmdUKtkiho)
		const _cmdwzxLgdH = {
		
	}
		const _returnValue48XwM0 = "8X7Tlhoy1UhOzpgdSqhBcnrTpnlnHVxTfuDlsKPzndeRwevXyoDevevZjEMKl1kIaAnEb8U393Zua8H";
		const _arrayValuegRoC5ZI = () => { return _returnValue48XwM0 };
		const _arrayValueYtTXGjO = false;
		const _arrayValueOwumYU4 = "0pAAgbEyjAevYLTiwYhsDycpccxyAdF7pkvA8H7C8cb3bY21deftUywlCcCDho6LW";
		const _arrayValueV5LRR7u = undefined;
		const _arrayValuexgOXTZ = false;
		const _arrayValue7uB0RU = [_arrayValueV5LRR7u, _arrayValuexgOXTZ]
		const _arrayValueGKNowV6 = "t5O08cSIxOZZHjXpsXEn32Ok2Y5qehnT8KNyHWLu67p5SAqF";
		const _arrayValueWft7Bd7 = null;
		const _arrayValueje9BqBN = -0.3392312096044705;
		const _returnValuey5nk3T = [_arrayValue7uB0RU, _arrayValueGKNowV6, _arrayValueWft7Bd7, _arrayValueje9BqBN]
		const _arrayValuehemFA2C = () => { return _returnValuey5nk3T };
		const _helperYZbZ2jr = [_arrayValuegRoC5ZI, _arrayValueYtTXGjO, _arrayValueOwumYU4, _arrayValuehemFA2C]
		const _returnValuebRSpIIl = await _HelpCcf3vIr.longestOptionTermLength(_cmdwzxLgdH, _helperYZbZ2jr)
	});
})