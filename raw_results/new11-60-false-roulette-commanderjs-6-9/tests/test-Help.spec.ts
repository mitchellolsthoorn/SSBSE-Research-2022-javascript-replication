export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelptBUOiIH = new Help()
		const _arrayValueUtuqEb = undefined;
		const _arrayValueJzA0DsV = false;
		const _arrayValuefcgeYNk = "8bqjXt7v6VNoGSoooBwBWeAuE2I9iM05GtaKypZsjs";
		const _returnValueXVRWfAn = [_arrayValueUtuqEb, _arrayValueJzA0DsV, _arrayValuefcgeYNk]
		const _arrayValues5x9tOZ = () => { return _returnValueXVRWfAn };
		const _returnValueTxCcmAl = undefined;
		const _arrayValuex5yahiE = () => { return _returnValueTxCcmAl };
		const _arrayValueJFgRtWr = [_arrayValuex5yahiE]
		const _namem8DEA5x = [_arrayValues5x9tOZ, _arrayValueJFgRtWr]
		const _descriptioneNMhw1h = "DKzNPXeSMz8W5eECYLWzl5vTTagR5huay1FmRVunJ7SL3XAoRvXGEYHjbll2qfY3Fwk0PaILeljV8T";
		const _argumentumTkSZf = new Argument(_namem8DEA5x, _descriptioneNMhw1h)
		const _valuenOeh6P = 9.114042971115634;
		const _arrayValueWTuxfMz = null;
		const _arrayValueTfeIvA = undefined;
		const _arrayValuePTVDCTs = "8PeHTaPIoh9hE4ylk59yCMkEpcJrTtzVPMo17tT2oGbvb9YcLsg91zMQ8uW4lod55J3GIkluHvPMF5UK7wXe";
		const _arrayValuefex01lF = [_arrayValueWTuxfMz, _arrayValueTfeIvA, _arrayValuePTVDCTs]
		const _arrayValueM7t6u7C = "ptH98GBix4gKx2IGEwbITXxdjz0vRAS96WwB3LtcEjcgpPfZKFKpKYrTOq5prHW08PIziYJ82GXOlNOlq0h7PG5yxC7Dh28Ctu";
		const _arrayValuesiVG2TZ = [_arrayValuefex01lF, _arrayValueM7t6u7C]
		const _arrayValuefPxiT0H = "yQxD5oINz";
		const _arrayValueJq6qln = -6.600135671119002;
		const _arrayValueQDqPWJl = null;
		const _returnValuelzECWwO = [_arrayValuesiVG2TZ, _arrayValuefPxiT0H, _arrayValueJq6qln, _arrayValueQDqPWJl]
		const _previousWUBwzpO = () => { return _returnValuelzECWwO };
		const _returnValuesdezN4c = await _argumentumTkSZf._concatValue(_valuenOeh6P, _previousWUBwzpO)
		const _fnWagtD50 = undefined;
		const _returnValueFwXtmnQ = await _argumentumTkSZf.argParser(_fnWagtD50)
		const _returnValueDG3BR4M = await _HelptBUOiIH.argumentDescription(_argumentumTkSZf)
		const _optionu9o5AEn = "1Z63p7OyBHDJcl784a8ESpqmbrUrax6dYsDFlyOQaxVoP6avnzPFwmoFtHqcRHti4kBpp8oxNNcgSnSYz3k0";
		const _returnValueEgG6LMc = await _HelptBUOiIH.optionTerm(_optionu9o5AEn)
		const _cmdnkTq0FV = -8.059639664969017;
		const _helperId0uXth = "U104AZMq";
		const _returnValueQ3br48 = await _HelptBUOiIH.longestSubcommandTermLength(_cmdnkTq0FV, _helperId0uXth)
		const _returnValueFffl4TH = "lXMINtUOfVk1SAPjvl";
		const _cmdTTIRChx = () => { return _returnValueFffl4TH };
		const _returnValue7poMSd = await _HelptBUOiIH.visibleOptions(_cmdTTIRChx)
		const _arrayValuebJ0iCAf = null;
		const _arrayValueHLr8eKJ = {
		
	}
		const _flagsvh7MFas = [_arrayValuebJ0iCAf, _arrayValueHLr8eKJ]
		const _descriptionJrGgiTt = undefined;
		const _cmdn8vCOOu = new Option(_flagsvh7MFas, _descriptionJrGgiTt)
		const _includescfPo6QV = 4.702620618819559;
		const _arrayValueZpyVozs = false;
		const _arrayValueZRRx3RR = undefined;
		const _returnValueH0EJBR9 = [_arrayValueZpyVozs, _arrayValueZRRx3RR]
		const _joinXXbQDtU = () => { return _returnValueH0EJBR9 };
		const _valuesiNyy2a1 = {
			"includes": _includescfPo6QV,
		"join": _joinXXbQDtU
	}
		const _returnValueqcZDfTh = await _cmdn8vCOOu.choices(_valuesiNyy2a1)
		const _returnValueEvQP1U6 = await _cmdn8vCOOu.attributeName()
		const _fnSMEDoW = undefined;
		const _returnValuey3Aejz = await _cmdn8vCOOu.argParser(_fnSMEDoW)
		const _returnValueCcYt3IX = await _cmdn8vCOOu.attributeName()
		const _returnValuePx4YB7 = await _HelptBUOiIH.subcommandDescription(_cmdn8vCOOu)
	});

	it('test for Help', async () => {
		const _HelpVjv5iHM = new Help()
		const _cmdmZzLaCs = null;
		const _arrayValueCeFoDtp = -4.510555994495333;
		const _arrayValueksyNt3G = "NjffhEpIQBqqQvEd1iDk8m1vd5h5LwihU6UBhtkYtnKD4JqdHezsMRCabPQzslXh14QHrAr2";
		const _arrayValuePK1GFaB = [_arrayValueCeFoDtp, _arrayValueksyNt3G]
		const _returnValuePOLFgKc = [_arrayValuePK1GFaB]
		const _arrayValueZg5xD3i = () => { return _returnValuePOLFgKc };
		const _arrayValueCwX4PNn = false;
		const _helperx6NO91f = [_arrayValueZg5xD3i, _arrayValueCwX4PNn]
		const _returnValuePHgsElh = await _HelpVjv5iHM.longestArgumentTermLength(_cmdmZzLaCs, _helperx6NO91f)
		const _returnValueu13XS8C = "LIXisFdPohJztknAdV8pq0TwGtzcisbqp05ZnPsqE5HGbIL7nkCVuYIuQdGtbKXPbi9IhCWzG89Tus";
		const _slicebK1wN8z = () => { return _returnValueu13XS8C };
		const _nameWBY5LtH = {
			"slice": _slicebK1wN8z
	}
		const _descriptionXwCMNax = undefined;
		const _optionxMPNgIz = new Argument(_nameWBY5LtH, _descriptionXwCMNax)
		const _value1TZo1b = "EObDpUnsNuPdSYgPPBX5Xqp9G4OjqyBteUcbg49qPPC8hnQ3ECRXqhCLmgO7AOQkNr8XmOSFJCug1Mp3ncRG5x";
		const _descriptionexbBgy5 = undefined;
		const _returnValueJLBmvst = await _optionxMPNgIz.default(_value1TZo1b, _descriptionexbBgy5)
		const _returnValuen67fnJW = await _optionxMPNgIz.argRequired()
		const _returnValueSL7wzi = await _HelpVjv5iHM.optionDescription(_optionxMPNgIz)
		const __nameLMvuaTu = {
		
	}
		const __aliasesMoPDDfO = {
		
	}
		const _parentIBQMn5c = {
		
	}
		const _returnValueuC07TVG = true;
		const _usageesjkNjf = () => { return _returnValueuC07TVG };
		const _cmdfOgen78 = {
			"_name": __nameLMvuaTu,
		"_aliases": __aliasesMoPDDfO,
		"parent": _parentIBQMn5c,
		"usage": _usageesjkNjf
	}
		const _returnValuek94Grko = await _HelpVjv5iHM.commandUsage(_cmdfOgen78)
		const _arrayValuel1cmDS = 2.7547114083605493;
		const _arrayValueTB1PNIe = null;
		const _arrayValuePjRbWta = null;
		const _arrayValueqBHl9gX = null;
		const _arrayValuevJM3YRE = 3.7507886137390933;
		const _arrayValuegjr1aQV = [_arrayValuePjRbWta, _arrayValueqBHl9gX, _arrayValuevJM3YRE]
		const _cmdYKpTfDb = [_arrayValuel1cmDS, _arrayValueTB1PNIe, _arrayValuegjr1aQV]
		const _returnValueRo83fZ9 = await _HelpVjv5iHM.visibleArguments(_cmdYKpTfDb)
		const _cmdbtv5hTz = false;
		const _returnValueZys2xdH = "GPk2ubYSa";
		const _helperTq86nkQ = () => { return _returnValueZys2xdH };
		const _returnValuenXQQnI = await _HelpVjv5iHM.formatHelp(_cmdbtv5hTz, _helperTq86nkQ)
	});

	it('test for Help', async () => {
		const _HelpxwWpblB = new Help()
		const _flagswKOWcGW = "DjU5";
		const _returnValueXvCSBH0 = true;
		const _returnValueXgWmM6O = () => { return _returnValueXvCSBH0 };
		const _descriptionkUTTOW7 = () => { return _returnValueXgWmM6O };
		const _cmdM2EIz1u = new Option(_flagswKOWcGW, _descriptionkUTTOW7)
		const _returnValuecH5yjJB = await _cmdM2EIz1u.attributeName()
		const _returnValuefaRILaM = await _cmdM2EIz1u.attributeName()
		const _namejMPXlGR = undefined;
		const _returnValuetzkdHfx = await _cmdM2EIz1u.env(_namejMPXlGR)
		const _hidetnxOfTr = -6.509108369719454;
		const _returnValueLXhNRxo = await _cmdM2EIz1u.hideHelp(_hidetnxOfTr)
		const _returnValuee9rmNx = await _HelpxwWpblB.commandDescription(_cmdM2EIz1u)
		const _returnValuefx516Cr = true;
		const _descriptionHVIE77 = () => { return _returnValuefx516Cr };
		const _cmdWkqeyr = {
			"description": _descriptionHVIE77
	}
		const _returnValuennylsAa = await _HelpxwWpblB.commandDescription(_cmdWkqeyr)
		const _cmdzfyS2zD = "kHNUlcwJUaMtmnbXSSi3l";
		const _returnValueF4AmlN0 = -2.0552230437512176;
		const _helperFvPGli2 = () => { return _returnValueF4AmlN0 };
		const _returnValueM2WrUov = await _HelpxwWpblB.padWidth(_cmdzfyS2zD, _helperFvPGli2)
		const _returnValueQ9NkOCO = null;
		const _descriptionlc4JWp1 = () => { return _returnValueQ9NkOCO };
		const _cmdyRe4skM = {
			"description": _descriptionlc4JWp1
	}
		const _returnValueiOh2H84 = await _HelpxwWpblB.subcommandDescription(_cmdyRe4skM)
	});

	it('test for Help', async () => {
		const _HelpnRmLRhC = new Help()
		const __argsW02dxe2 = {
		
	}
		const __namesbgEHK = 4.296828843555803;
		const __aliasesRmabjOb = {
		
	}
		const _optionsIejCcYr = {
		
	}
		const _cmdP4Kg9at = {
			"_args": __argsW02dxe2,
		"_name": __namesbgEHK,
		"_aliases": __aliasesRmabjOb,
		"options": _optionsIejCcYr
	}
		const _returnValuesg7rpZ = await _HelpnRmLRhC.subcommandTerm(_cmdP4Kg9at)
		const _arrayValuemErtdu7 = "lNB6tPw5fvTVmu4GxwH7DU5EhQJWDaV22FBoUAgGNbW";
		const _arrayValuec9LtBKs = {
		
	}
		const _arrayValueXctc25C = null;
		const _strdsRFQe3 = [_arrayValuemErtdu7, _arrayValuec9LtBKs, _arrayValueXctc25C]
		const _widthOWkbKW = 2.7544455412539293;
		const _indentIuHGPc4 = -1.3080818858285106;
		const _minColumnWidthn3Ge7R3 = 5.128755459903992;
		const _returnValuepGObt6C = await _HelpnRmLRhC.wrap(_strdsRFQe3, _widthOWkbKW, _indentIuHGPc4, _minColumnWidthn3Ge7R3)
	});

	it('test for Help', async () => {
		const _HelpmjkjXNG = new Help()
		const _flagsx7gXbV = "1eaoPd823Ygp5fuPEio6nfNnNcoKRLy2jO2RuwXxlQo2wRuticBOVYSIrx";
		const _arrayValuewDlhNKE = 9.614801884154776;
		const _arrayValuehvKGEwJ = "DJufc9";
		const _arrayValuefcBpbCN = null;
		const _arrayValuePwEnXnL = [_arrayValuewDlhNKE, _arrayValuehvKGEwJ, _arrayValuefcBpbCN]
		const _descriptionbxTs6E = [_arrayValuePwEnXnL]
		const _optionoawhJTG = new Option(_flagsx7gXbV, _descriptionbxTs6E)
		const _fnt6MVWqb = undefined;
		const _returnValueBJ6O5rv = await _optionoawhJTG.argParser(_fnt6MVWqb)
		const _valueNnF2MA7 = undefined;
		const _description2FDaIO = undefined;
		const _returnValueJhpAxYO = await _optionoawhJTG.default(_valueNnF2MA7, _description2FDaIO)
		const _argBdmu0M3 = {
		
	}
		const _returnValueFKup8xc = await _optionoawhJTG.is(_argBdmu0M3)
		const _returnValueqpeMqJx = await _HelpmjkjXNG.optionTerm(_optionoawhJTG)
		const _returnValueQhqmI9D = null;
		const _returnValueJYhRuky = () => { return _returnValueQhqmI9D };
		const _returnValueyPFSmF = () => { return _returnValueJYhRuky };
		const _cmddDDGc6S = () => { return _returnValueyPFSmF };
		const _returnValuee95yJBk = await _HelpmjkjXNG.visibleOptions(_cmddDDGc6S)
		const _descriptionllbrFSk = null;
		const _cmd4o8pBq = {
			"description": _descriptionllbrFSk
	}
		const _returnValueJnu2EOW = await _HelpmjkjXNG.subcommandDescription(_cmd4o8pBq)
	});

	it('test for Help', async () => {
		const _Help6r4Ywx = new Help()
		const _cmdvo9u7Uy = undefined;
		const _returnValueaemCGHR = "KNpoJN4iheEGh2wjnbCbMc3lGKMg9RNXviNvE7O1QL2jFnmKG5Xgnp59BHV4aEd5NbNSQYzAJpaJ4";
		const _longestOptionTermLengthdEDB1HE = () => { return _returnValueaemCGHR };
		const _returnValuexNdFf7 = false;
		const _longestSubcommandTermLengthQE1Ctdu = () => { return _returnValuexNdFf7 };
		const _returnValueN7ewbPS = true;
		const _longestArgumentTermLengthiEQJZdR = () => { return _returnValueN7ewbPS };
		const _helperpmHfMu6 = {
			"longestOptionTermLength": _longestOptionTermLengthdEDB1HE,
		"longestSubcommandTermLength": _longestSubcommandTermLengthQE1Ctdu,
		"longestArgumentTermLength": _longestArgumentTermLengthiEQJZdR
	}
		const _returnValueA7LbVaT = await _Help6r4Ywx.padWidth(_cmdvo9u7Uy, _helperpmHfMu6)
		const _arrayValuejMti3q9 = -2.9245221798942813;
		const _returnValueBDWAP7r = undefined;
		const _arrayValuep6QGrrW = () => { return _returnValueBDWAP7r };
		const _optionlJHOLy0 = [_arrayValuejMti3q9, _arrayValuep6QGrrW]
		const _returnValuelQdHNpn = await _Help6r4Ywx.optionTerm(_optionlJHOLy0)
		const _cmdHyKNc1 = true;
		const _sortSubcommandsJUB2sdq = undefined;
		const _returnValueyz4e0I6 = {
		
	}
		const _subcommandTermiXGbeMC = () => { return _returnValueyz4e0I6 };
		const _helperddG7pqc = {
			"sortSubcommands": _sortSubcommandsJUB2sdq,
		"subcommandTerm": _subcommandTermiXGbeMC
	}
		const _returnValueFpZoDWy = await _Help6r4Ywx.formatHelp(_cmdHyKNc1, _helperddG7pqc)
	});

	it('test for Help', async () => {
		const _Helplyut2D4 = new Help()
		const _cmdL1d4yAZ = 5.58661542935303;
		const _arrayValueeaMCC7x = "kj8zT0iDC6psvlm2R5xGocbiMusTahp3JRx7RMqukqvGlhFfC";
		const _returnValueEZg4yPp = [_arrayValueeaMCC7x]
		const _visibleOptionsta8r5WU = () => { return _returnValueEZg4yPp };
		const _returnValueoZmIpo = -1.9011057028443403;
		const _optionTermXg2L6BO = () => { return _returnValueoZmIpo };
		const _helperbWwP1Iq = {
			"visibleOptions": _visibleOptionsta8r5WU,
		"optionTerm": _optionTermXg2L6BO
	}
		const _returnValueGleH56N = await _Helplyut2D4.longestOptionTermLength(_cmdL1d4yAZ, _helperbWwP1Iq)
	});

	it('test for Help', async () => {
		const _HelpW8CcGEw = new Help()
		const _arrayValuehX2zJ5t = -5.056342460608497;
		const _arrayValueWwHcSf4 = "gxRip7yvPcTO7ZLFIDftiAQMOF5BpEpB358WaLDJjBV5PatrZKlBhAnDejYiAvclN";
		const _cmdS2vX3Tl = [_arrayValuehX2zJ5t, _arrayValueWwHcSf4]
		const _returnValueX85hmd = await _HelpW8CcGEw.commandUsage(_cmdS2vX3Tl)
		const _cmdBHuc7nb = null;
		const _helperk62gaWf = "7B97TE1ypvhbVLADyUII5d4LQf3KScHUUINxema4lWjBNUxty37L9UTpHWe";
		const _returnValueqCtESNV = await _HelpW8CcGEw.longestSubcommandTermLength(_cmdBHuc7nb, _helperk62gaWf)
		const _cmdmFgt7KS = "oMWgGd3";
		const _returnValueNqlcj4g = await _HelpW8CcGEw.visibleCommands(_cmdmFgt7KS)
	});

	it('test for Help', async () => {
		const _HelpXVa1RlG = new Help()
		const _cmdH6gykQV = "5DXvk0IyVhYzSGTUDhx6Wff72MCNo6Eb3PP4nG5cR9n7pOwHcM4Qjv";
		const _returnValuesGhrJaM = await _HelpXVa1RlG.subcommandDescription(_cmdH6gykQV)
		const _cmd8HoLrL = null;
		const _returnValuedqiK3fq = false;
		const _helperc6kv5Y = () => { return _returnValuedqiK3fq };
		const _returnValuepFtMM6L = await _HelpXVa1RlG.longestOptionTermLength(_cmd8HoLrL, _helperc6kv5Y)
		const _cmdSJ0SbTO = "PDoY";
		const _returnValue4YcB2U = await _HelpXVa1RlG.visibleCommands(_cmdSJ0SbTO)
	});

	it('test for Help', async () => {
		const _Helpxl2LxJV = new Help()
		const __namezNckdyF = {
		
	}
		const __aliasesQ6Me3UT = {
		
	}
		const _parentBDEVbG7 = undefined;
		const _returnValueFyxpEgZ = "Tsf9DduBLosyx8uO5IcCqUozVvL08iEriSsEEjMwaqlz49WXdDA5URTvPXnRLLn481Pjweo";
		const _usagejxXKFCX = () => { return _returnValueFyxpEgZ };
		const _cmdB4niMKz = {
			"_name": __namezNckdyF,
		"_aliases": __aliasesQ6Me3UT,
		"parent": _parentBDEVbG7,
		"usage": _usagejxXKFCX
	}
		const _returnValuezMZ6dI1 = await _Helpxl2LxJV.commandUsage(_cmdB4niMKz)
		const _cmdGirZjD7 = "vyx6zND6NOTQUMErXxG2N9nlvpLILf8XwOtg2vXdeWr1c3Yf3Yy5QqXjiIRrFRGtFQDRYFqtW";
		const _returnValuefc8gYQc = await _Helpxl2LxJV.visibleArguments(_cmdGirZjD7)
		const _cmdG25NeYb = []
		const _sortSubcommandsvWBr9MA = 1.2789209103609593;
		const _returnValue5OKCX9 = null;
		const _subcommandTermPrRb8k = () => { return _returnValue5OKCX9 };
		const _helperppNBxHV = {
			"sortSubcommands": _sortSubcommandsvWBr9MA,
		"subcommandTerm": _subcommandTermPrRb8k
	}
		const _returnValueMIzDnKs = await _Helpxl2LxJV.longestSubcommandTermLength(_cmdG25NeYb, _helperppNBxHV)
	});

	it('test for Help', async () => {
		const _HelpxzDwy8 = new Help()
		const _cmdLRluq0 = "fQLw1bl4bBW2UdldFLAgYa";
		const _returnValueIWW9ULF = await _HelpxzDwy8.visibleCommands(_cmdLRluq0)
		const _namehEW8rbX = undefined;
		const _cmdZnMO5V = new Command(_namehEW8rbX)
		const _strCdacEaV = "UckMXMjRQJlumIUfqMXrivMukavK4tnuEhJM2AgozaR1qRpoFnZiCoInfE1nLesO8qQPQCN8Y4rjuwjF1ZYUt";
		const _argsDescriptionklwAvGg = undefined;
		const _returnValueLHZhWvf = await _cmdZnMO5V.description(_strCdacEaV, _argsDescriptionklwAvGg)
		const _keyvUMlJC6 = 5.669626962034272;
		const _arrayValuebQlwcOd = -5.577524146677221;
		const _arrayValueNtgKYII = []
		const _valueTaH3Ri5 = [_arrayValuebQlwcOd, _arrayValueNtgKYII]
		const _sourceMi1nKJ4 = -8.042725125488168;
		const _returnValueERQoLKO = await _cmdZnMO5V.setOptionValueWithSource(_keyvUMlJC6, _valueTaH3Ri5, _sourceMi1nKJ4)
		const _strucIdCnM = undefined;
		const _argsDescriptiongsnw25x = undefined;
		const _returnValueNoIgy5 = await _cmdZnMO5V.description(_strucIdCnM, _argsDescriptiongsnw25x)
		const _returnValuenLT3AUp = undefined;
		const _returnValueYyk75a = () => { return _returnValuenLT3AUp };
		const _fnO3biwtm = () => { return _returnValueYyk75a };
		const _returnValueptO8YfS = await _cmdZnMO5V.action(_fnO3biwtm)
		const _returnValuewbjQe96 = await _HelpxzDwy8.subcommandDescription(_cmdZnMO5V)
		const _returnValueQe7wbPc = -4.741192653095383;
		const _cmdsfvwgU2 = () => { return _returnValueQe7wbPc };
		const _returnValueaU02rIb = await _HelpxzDwy8.subcommandDescription(_cmdsfvwgU2)
		const __namebmlQMF = {
		
	}
		const __aliasesBUBSI4i = {
		
	}
		const _parentCPh6bXc = {
		
	}
		const _returnValueAuaDutF = -3.157614965040998;
		const _usageLu63TSN = () => { return _returnValueAuaDutF };
		const _cmdg9hin8q = {
			"_name": __namebmlQMF,
		"_aliases": __aliasesBUBSI4i,
		"parent": _parentCPh6bXc,
		"usage": _usageLu63TSN
	}
		const _returnValueyyP8ZyR = await _HelpxzDwy8.commandUsage(_cmdg9hin8q)
	});

	it('test for Help', async () => {
		const _HelpBYJWMdu = new Help()
		const _optionSXDBUIO = "cELmDDXh78VnlxFaGiWVAOxEp";
		const _returnValueBxelanp = await _HelpBYJWMdu.optionDescription(_optionSXDBUIO)
		const _cmdLoHYVzL = "ISaoy2Nhb257kKMTvcCcrJfTlHyflY1N5pnIc3DfKTE0N2fxHl8bdKb4jYYDjJX8YVn85nUE095NbRGXPdMQK2PLPznsLIRjfjz";
		const _returnValueaxJK72D = await _HelpBYJWMdu.subcommandDescription(_cmdLoHYVzL)
		const _returnValuen4Ivzgh = true;
		const _cmd3dF11H = () => { return _returnValuen4Ivzgh };
		const _returnValuegiNdIpO = "efXnf8DPwE4xBxPdhcNtDpQ9rxgVqIS8qRUNP34U3bJjtB32ND1gBqBqor75aFWomqJugBo";
		const _helperJGWzegz = () => { return _returnValuegiNdIpO };
		const _returnValueMQ5PseU = await _HelpBYJWMdu.longestSubcommandTermLength(_cmd3dF11H, _helperJGWzegz)
	});

	it('test for Help', async () => {
		const _HelpY6Mkyvd = new Help()
		const _returnValueVYXJryP = null;
		const _matchC2Kaptw = () => { return _returnValueVYXJryP };
		const _returnValuelAP2EG4 = null;
		const _substraWh1Yxn = () => { return _returnValuelAP2EG4 };
		const _strczrNByn = {
			"match": _matchC2Kaptw,
		"substr": _substraWh1Yxn
	}
		const _widthb2E7RML = 3.704829754439796;
		const _indentciZCz5n = -9.518391859168537;
		const _minColumnWidthLRaIuab = -3.816314795533181;
		const _returnValueWajGd83 = await _HelpY6Mkyvd.wrap(_strczrNByn, _widthb2E7RML, _indentciZCz5n, _minColumnWidthLRaIuab)
		const _returnValueZqSuHhD = undefined;
		const __nameV4XWCP8 = () => { return _returnValueZqSuHhD };
		const __aliaseszB6VuaY = {
		
	}
		const _parentcLAwMNY = {
		
	}
		const _returnValueEoaWDMu = null;
		const _usageUx8KCDl = () => { return _returnValueEoaWDMu };
		const _cmdJvyBrRD = {
			"_name": __nameV4XWCP8,
		"_aliases": __aliaseszB6VuaY,
		"parent": _parentcLAwMNY,
		"usage": _usageUx8KCDl
	}
		const _returnValuezrCWuH = await _HelpY6Mkyvd.commandUsage(_cmdJvyBrRD)
		const _cmdOZSny4 = true;
		const _arrayValueKe8aqlm = {
		
	}
		const _arrayValuenl8zG9R = null;
		const _arrayValueI8wokTs = [_arrayValuenl8zG9R]
		const _returnValuekF3pOlW = [_arrayValueKe8aqlm, _arrayValueI8wokTs]
		const _visibleArgumentswQ7vBWB = () => { return _returnValuekF3pOlW };
		const _returnValuetCBWfCL = false;
		const _argumentTermwsAKv2H = () => { return _returnValuetCBWfCL };
		const _helperYJePIC = {
			"visibleArguments": _visibleArgumentswQ7vBWB,
		"argumentTerm": _argumentTermwsAKv2H
	}
		const _returnValuezDU1dRK = await _HelpY6Mkyvd.longestArgumentTermLength(_cmdOZSny4, _helperYJePIC)
		const _cmdIrxRjAU = true;
		const _helpernMBMgjt = "NBajxE91dsObnua9ivbBiCYU7EcwN3H0gH3RE88BxmUGeUr3TGHEAxgenYQnla7Nk6FFC5z1rJOWbuKu0O7tDI7h2e";
		const _returnValueMOqxKzu = await _HelpY6Mkyvd.padWidth(_cmdIrxRjAU, _helpernMBMgjt)
		const _returnValueq6ZQY8V = false;
		const _cmdo1dpCs5 = () => { return _returnValueq6ZQY8V };
		const _returnValuePjabHo = await _HelpY6Mkyvd.commandUsage(_cmdo1dpCs5)
	});

	it('test for Help', async () => {
		const _HelpG8hnS3w = new Help()
		const _returnValueSzsvVEv = undefined;
		const _arrayValueQdJCSef = () => { return _returnValueSzsvVEv };
		const _arrayValue8tf26p = null;
		const _arrayValueNYjAWi3 = true;
		const _returnValueMFEyc1K = [_arrayValueQdJCSef, _arrayValue8tf26p, _arrayValueNYjAWi3]
		const _matchYx52RP = () => { return _returnValueMFEyc1K };
		const _returnValuefAfmwH = "194gtUtXmOs7NhNaxgNb6oG44U7HmEeIbOUWyMLM5rMIRQi1DVlzVDTLvKxOtlbiobs31";
		const _substrlRPDa72 = () => { return _returnValuefAfmwH };
		const _strOafUvI2 = {
			"match": _matchYx52RP,
		"substr": _substrlRPDa72
	}
		const _widthCyY066T = -9.356147037154482;
		const _indentcisgxH9 = 5.3760870262513905;
		const _minColumnWidthk3vkz3d = -8.145558916772552;
		const _returnValuef2xdTPs = await _HelpG8hnS3w.wrap(_strOafUvI2, _widthCyY066T, _indentcisgxH9, _minColumnWidthk3vkz3d)
		const _flagsF36L4K = false;
		const _optionsoJKRrc = {
			"flags": _flagsF36L4K
	}
		const _returnValueve66svH = await _HelpG8hnS3w.optionTerm(_optionsoJKRrc)
	});

	it('test for Help', async () => {
		const _HelprpWUGXh = new Help()
		const _strkRBlYM = "";
		const _widthczuW3e9 = -7.276846542251912;
		const _indentvPaWsuR = -2.5627543133128086;
		const _minColumnWidthwxuMeg7 = 2.8495268941307383;
		const _returnValueAvc5MrK = await _HelprpWUGXh.wrap(_strkRBlYM, _widthczuW3e9, _indentvPaWsuR, _minColumnWidthwxuMeg7)
		const _arrayValueEGBGiIj = undefined;
		const _arrayValueUl2ldcZ = 4.3262779734818935;
		const _cmdROgjWFy = [_arrayValueEGBGiIj, _arrayValueUl2ldcZ]
		const _returnValuecFjf5ck = undefined;
		const _helpertVsAxGh = () => { return _returnValuecFjf5ck };
		const _returnValueAAjNa2k = await _HelprpWUGXh.longestSubcommandTermLength(_cmdROgjWFy, _helpertVsAxGh)
		const _nameJxqZ0r = "6CQSrGg5Hb4RvVeX7Ad546FuZxpGYTJ";
		const _cmd4UuYyd = new Command(_nameJxqZ0r)
		const _namepYHLhIF = false;
		const _returnValueReNfTTm = await _cmd4UuYyd.createCommand(_namepYHLhIF)
		const _returnValuehgzRSim = false;
		const _contextOptionsSL2N0R = () => { return _returnValuehgzRSim };
		const _returnValueZvd99Fu = await _cmd4UuYyd.help(_contextOptionsSL2N0R)
		const _returnValueP0dkj9 = await _HelprpWUGXh.commandUsage(_cmd4UuYyd)
		const _optionjTxIOHZ = "o2uSZb7Lxv31UM2yyz7PVjKNeIzh69n8QUdAqECYtPF";
		const _returnValueqI3BDQ4 = await _HelprpWUGXh.optionDescription(_optionjTxIOHZ)
		const _arrayValue5VZlwk = "aHlmm6rI7KvIMOvQgYsRjYk60oDX9BmXMgV5TB4CR2B1cPR7BlvKOapOa5qy8fqwYs5FtC26y";
		const _cmdK83b9cq = [_arrayValue5VZlwk]
		const _sortSubcommandseUElceA = undefined;
		const _returnValuemuAFryA = null;
		const _subcommandTermDKCVFe6 = () => { return _returnValuemuAFryA };
		const _helperk3Wbc5e = {
			"sortSubcommands": _sortSubcommandseUElceA,
		"subcommandTerm": _subcommandTermDKCVFe6
	}
		const _returnValuesrvgYy4 = await _HelprpWUGXh.longestSubcommandTermLength(_cmdK83b9cq, _helperk3Wbc5e)
	});

	it('test for Help', async () => {
		const _HelptMJFYqZ = new Help()
		const _returnValueecud2C8 = "cYwuh8vhqwfmBDzLaEWaP6tgDxjKKr7HCHVGNRLgVEcMNuXKLEv8gRhk9czNzPTK7it7wkyX9k6uYOeApwmb4S9ZDw4gKV";
		const _descriptionCPrWsks = () => { return _returnValueecud2C8 };
		const _cmdcV11ugk = {
			"description": _descriptionCPrWsks
	}
		const _returnValueL73ij0F = await _HelptMJFYqZ.commandDescription(_cmdcV11ugk)
		const _argChoicesQ0varGe = {
		
	}
		const _defaultValuehh4C0FA = undefined;
		const _defaultValueDescriptionfFe8DGA = false;
		const _descriptionaOGK0z8 = null;
		const _argumentEVawRWB = {
			"argChoices": _argChoicesQ0varGe,
		"defaultValue": _defaultValuehh4C0FA,
		"defaultValueDescription": _defaultValueDescriptionfFe8DGA,
		"description": _descriptionaOGK0z8
	}
		const _returnValueJycHAaf = await _HelptMJFYqZ.argumentDescription(_argumentEVawRWB)
		const _arrayValueCxhndD = "klVMIfqZpRDdK9Zoq8FIY8UdcAfkJ8o5eqevvb8KMb";
		const _optionp312Ey9 = [_arrayValueCxhndD]
		const _returnValueSNd3xPY = await _HelptMJFYqZ.optionDescription(_optionp312Ey9)
		const _returnValueXErCOVB = undefined;
		const _argumentYEVaGHN = () => { return _returnValueXErCOVB };
		const _returnValueVqHe9hk = await _HelptMJFYqZ.argumentDescription(_argumentYEVaGHN)
	});

	it('test for Help', async () => {
		const _HelpAnImZRG = new Help()
		const _nameFdBUw6 = []
		const _cmdM9U38J1 = new Command(_nameFdBUw6)
		const _promisezHvKJgD = 1.491481474644285;
		const _eventr5CE3TT = "dkTY4Wg447etPQojzUjv4";
		const _returnValueskRBHHJ = await _cmdM9U38J1._chainOrCallHooks(_promisezHvKJgD, _eventr5CE3TT)
		const _returnValueeHWF33s = await _HelpAnImZRG.visibleCommands(_cmdM9U38J1)
	});

	it('test for Help', async () => {
		const _HelpYJ2Nq2T = new Help()
		const _cmdD7vP50y = -5.9539324733651915;
		const _helperQGQraZX = new Help()
		const __namet1va8z2 = "8k9SyfV7coAMH0";
		const __aliasesnqYl9pA = {
		
	}
		const _returnValueDHlhuOr = null;
		const _parentTjtS4Ka = () => { return _returnValueDHlhuOr };
		const _returnValueAIaGJyb = -6.732444512365892;
		const _usageyqHN8U7 = () => { return _returnValueAIaGJyb };
		const _cmdn9dfWx = {
			"_name": __namet1va8z2,
		"_aliases": __aliasesnqYl9pA,
		"parent": _parentTjtS4Ka,
		"usage": _usageyqHN8U7
	}
		const _returnValuero50mUh = await _helperQGQraZX.commandUsage(_cmdn9dfWx)
		const _cmdVu7wQ5D = "olBCHNxzB1YPmwHWjNen";
		const _returnValuer8S4KKl = await _helperQGQraZX.subcommandTerm(_cmdVu7wQ5D)
		const __argsDescriptionppEkQfD = {
		
	}
		const __argsA0u4mv = {
		
	}
		const _cmdXxnwZL3 = {
			"_argsDescription": __argsDescriptionppEkQfD,
		"_args": __argsA0u4mv
	}
		const _returnValuePeqrZxL = await _helperQGQraZX.visibleArguments(_cmdXxnwZL3)
		const _returnValueQuLpR6d = await _HelpYJ2Nq2T.padWidth(_cmdD7vP50y, _helperQGQraZX)
		const _arrayValueU4oH0r = []
		const _arrayValuedV4uXEc = "pmJ1nqQXKp21tCoqnsLXth";
		const _cmdojrZvR7 = [_arrayValueU4oH0r, _arrayValuedV4uXEc]
		const _returnValuebmN3Ci = await _HelpYJ2Nq2T.visibleCommands(_cmdojrZvR7)
	});

	it('test for Help', async () => {
		const _HelpmKnKz4v = new Help()
		const _arrayValuegGrP2Kz = "oqWXUsLwAg0v3puOWnF4rw9I3JNMOp5nt8R8IziOUtd3o";
		const _arrayValuecnM168P = null;
		const _arrayValueqg2hIMX = null;
		const _nameJYWDEU9 = [_arrayValuegGrP2Kz, _arrayValuecnM168P, _arrayValueqg2hIMX]
		const _descriptionF7QjDmq = undefined;
		const _optione4ria6u = new Argument(_nameJYWDEU9, _descriptionF7QjDmq)
		const _returnValuezhumEZv = "Sf9W4oP86kSbSBi2ctH6r4zdAUxrE3mWfUzvF2sQdaJI7hgtKfMXNJmxqdYRXupCv";
		const _valuesegWj65k = () => { return _returnValuezhumEZv };
		const _returnValueqoNyAlq = await _optione4ria6u.choices(_valuesegWj65k)
		const _returnValuehiSgTFy = await _HelpmKnKz4v.optionDescription(_optione4ria6u)
		const _optionNkKP5bh = "6tN8fvzMhfM7LrRSwKaBj6x6fgkeOofwV7K5tOYNWIAf8jT1jAyAvSt7y6UJYYjUNm6rPKMUeHCb6dB5zb8ClsMed8iFrbruSV";
		const _returnValueZKqzLMg = await _HelpmKnKz4v.optionDescription(_optionNkKP5bh)
		const _cmdNNMVfBK = -9.494161525180745;
		const _returnValuepEfYGlK = undefined;
		const _helpercS3D6yK = () => { return _returnValuepEfYGlK };
		const _returnValuexTeFst8 = await _HelpmKnKz4v.formatHelp(_cmdNNMVfBK, _helpercS3D6yK)
		const _cmdRk5enP = []
		const _returnValueuSwx27O = await _HelpmKnKz4v.commandDescription(_cmdRk5enP)
	});

	it('test for Help', async () => {
		const _HelpEQ1gnB3 = new Help()
		const __argsDescriptionYxa55kE = {
		
	}
		const __argsGdOOiZe = {
		
	}
		const _cmdu2UJRLh = {
			"_argsDescription": __argsDescriptionYxa55kE,
		"_args": __argsGdOOiZe
	}
		const _returnValueWMUbMUx = await _HelpEQ1gnB3.visibleArguments(_cmdu2UJRLh)
		const __argsmsIqYzv = {
		
	}
		const __name8iRvWB = -5.799456883545572;
		const __aliasesJMPGLn = {
		
	}
		const _optionsdpDjS9a = {
		
	}
		const _cmdATaFi95 = {
			"_args": __argsmsIqYzv,
		"_name": __name8iRvWB,
		"_aliases": __aliasesJMPGLn,
		"options": _optionsdpDjS9a
	}
		const _returnValueBfqiQdb = await _HelpEQ1gnB3.subcommandTerm(_cmdATaFi95)
		const _returnValueBqdArN1 = "wN26stQcESEkGJ17M9j6jahlEnzhOuxqz";
		const _namedkObgU2 = () => { return _returnValueBqdArN1 };
		const _argumentoREzQCu = {
			"name": _namedkObgU2
	}
		const _returnValuepEg3ed0 = await _HelpEQ1gnB3.argumentTerm(_argumentoREzQCu)
	});

	it('test for Help', async () => {
		const _Help8vvCer = new Help()
		const _arrayValueLhYwh8 = undefined;
		const _arrayValueBRtxeWw = "e69jfGxIuAFtWkStyDpEl5h3c9SwHGm";
		const _arrayValuexYi1jTB = false;
		const _arrayValueoqKYcWD = [_arrayValueLhYwh8, _arrayValueBRtxeWw, _arrayValuexYi1jTB]
		const _returnValueOwzAi4g = "j9kFWpzdOijzLWLVVW9RANkfk82eNuTfCZ4bLWR3HAOWyZ1ljOYmLR6AVssufDeV8qRdNUuMeGiZalYbulkWnGvpiEsR";
		const _arrayValueADCHkIe = () => { return _returnValueOwzAi4g };
		const _optionsb5E4kjs = [_arrayValueoqKYcWD, _arrayValueADCHkIe]
		const _arrayValueHtG4du = "231qZ9RKuY1PELPdYV5TUYT1NJyWDwVjwuEukARMvYc5qep6q6rg9mGAyyOJjMPqoJ72sW13cP2bvCETWcS";
		const _returnValueMZ3TW5u = {
		
	}
		const _arrayValueLzX082u = () => { return _returnValueMZ3TW5u };
		const _arrayValuexFSVzg0 = -0.7516454631721601;
		const __hasHelpOptionWRZ6FlX = [_arrayValueHtG4du, _arrayValueLzX082u, _arrayValuexFSVzg0]
		const __helpShortFlagswRDG6Z = {
		
	}
		const _returnValueMkICbzv = true;
		const __findOptionajVxyf = () => { return _returnValueMkICbzv };
		const __helpLongFlagkX0Hj8S = false;
		const _returnValueiqWRJMX = true;
		const _createOption92DSMC = () => { return _returnValueiqWRJMX };
		const __helpDescriptionH5cErJ6 = -8.765821877073963;
		const __helpFlagsXZ62uFk = undefined;
		const _cmdEpysFZg = {
			"options": _optionsb5E4kjs,
		"_hasHelpOption": __hasHelpOptionWRZ6FlX,
		"_helpShortFlag": __helpShortFlagswRDG6Z,
		"_findOption": __findOptionajVxyf,
		"_helpLongFlag": __helpLongFlagkX0Hj8S,
		"createOption": _createOption92DSMC,
		"_helpDescription": __helpDescriptionH5cErJ6,
		"_helpFlags": __helpFlagsXZ62uFk
	}
		const _returnValueGaCi6ic = await _Help8vvCer.visibleOptions(_cmdEpysFZg)
		const _returnValue6b0ZFq = false;
		const _cmdSa7rXRX = () => { return _returnValue6b0ZFq };
		const _returnValueW7f2KA1 = await _Help8vvCer.subcommandTerm(_cmdSa7rXRX)
		const __nameVjMhTNH = {
		
	}
		const __aliasesXDAfgfF = {
		
	}
		const _parentJLa8cpJ = {
		
	}
		const _returnValueRt52IGw = "5miTFHp1xMCYNib7Yub";
		const _usageqaUCj3I = () => { return _returnValueRt52IGw };
		const _cmdglV6DuQ = {
			"_name": __nameVjMhTNH,
		"_aliases": __aliasesXDAfgfF,
		"parent": _parentJLa8cpJ,
		"usage": _usageqaUCj3I
	}
		const _returnValueg56UuUW = await _Help8vvCer.commandUsage(_cmdglV6DuQ)
		const _returnValuezVShWN0 = true;
		const _descriptionPKCzA4P = () => { return _returnValuezVShWN0 };
		const _cmdr0T9qeP = {
			"description": _descriptionPKCzA4P
	}
		const _returnValueI3pn76d = await _Help8vvCer.subcommandDescription(_cmdr0T9qeP)
		const _nameRDLnfcr = true;
		const _argumentZjUWF0t = new Command(_nameRDLnfcr)
		const _arrayValueIQQKaD4 = "d5YSPKdKuBEmVcq5sGgXSIo";
		const _arrayValuekRzdgXn = "7GlZByXXRPOEBzK87";
		const _arrayValuewgUxOC = "GdNnamJu2NLeUCbpyPfbqVxSpHF4OlzGAA9Eby9T8DmmvLB9w3bHywA7GGRAw88UbF9tnS9vVboeUGn03nInlBaoc8Ff";
		const _arrayValueoIVys2T = "Ev0py5RnXaqV7qR72MauQmquOKhpw7Ndp6CQFMX3IOuxzvegGoiM3KhqK2x15uJWNpW5MxaLYMmvxeXrAoUo4IfXzbg8uOmQjI";
		const _arrayValueLkwfN6W = -9.366701649741938;
		const _arrayValuet7lZDVQ = [_arrayValuewgUxOC, _arrayValueoIVys2T, _arrayValueLkwfN6W]
		const _fnjGFiC9L = [_arrayValueIQQKaD4, _arrayValuekRzdgXn, _arrayValuet7lZDVQ]
		const _returnValueqLaj4im = await _argumentZjUWF0t.action(_fnjGFiC9L)
		const _returnValueDx9J0lO = await _argumentZjUWF0t._parseOptionsEnv()
		const _commandNames5pnEoe = "bDt3Bg0TAqQTaBFsCo110SXf3GuuOCVWASSh7P5onB2JlMrTImaTtgkUY";
		const _returnValueM2jiu5 = "jqOh2pbiMIc5YBqizLGqJ8fz6w8C6oXCg0a2B5qia36kifGBkxfhrLNxPN4kCTYIpNPhwmVDcL9nWxCVl5qeb043EmjGHrb";
		const _concatbBHgWso = () => { return _returnValueM2jiu5 };
		const _operandsV5wpZl = {
			"concat": _concatbBHgWso
	}
		const _unknownjjFMUPL = {
		
	}
		const _returnValueGWTrxKy = await _argumentZjUWF0t._dispatchSubcommand(_commandNames5pnEoe, _operandsV5wpZl, _unknownjjFMUPL)
		const _returnValueDLMFu1 = await _Help8vvCer.argumentDescription(_argumentZjUWF0t)
	});

	it('test for Help', async () => {
		const _HelpvD7x6de = new Help()
		const _returnValueNyZ4nEz = {
		
	}
		const _slicejB2K2nK = () => { return _returnValueNyZ4nEz };
		const _namelTt2oPj = {
			"slice": _slicejB2K2nK
	}
		const _descriptionKiJHBKI = false;
		const _argumentltFWCJV = new Argument(_namelTt2oPj, _descriptionKiJHBKI)
		const _returnValueIEm351N = await _argumentltFWCJV.name()
		const _valueuDgkkn = {
		
	}
		const _returnValueJCVbsPJ = undefined;
		const _descriptionSgNIm48 = () => { return _returnValueJCVbsPJ };
		const _returnValueEYdwnUX = await _argumentltFWCJV.default(_valueuDgkkn, _descriptionSgNIm48)
		const _returnValuelnAgKox = await _HelpvD7x6de.argumentDescription(_argumentltFWCJV)
		const _cmdjSRqg0n = undefined;
		const _arrayValuesfLZUJQ = -0.596051181623098;
		const _helperK8SmIMX = [_arrayValuesfLZUJQ]
		const _returnValueLrT3LfC = await _HelpvD7x6de.longestSubcommandTermLength(_cmdjSRqg0n, _helperK8SmIMX)
		const _cmdzabpioY = "oL5Kj7WUQx3FKNjQU67eqcbNDA279bccTacKtU1XYFtqI7LWraiRwPO9Q40eka8ZkXMo6qjmqkG8atpU";
		const _returnValueHGztXTO = await _HelpvD7x6de.commandUsage(_cmdzabpioY)
	});

	it('test for Help', async () => {
		const _HelpwmPGLs1 = new Help()
		const _returnValueJVcUdJO = []
		const _nameNTlxYwy = () => { return _returnValueJVcUdJO };
		const _cmdzzIieBc = new Command(_nameNTlxYwy)
		const _configurationmRzud9F = {
		
	}
		const _returnValueSmXvgZX = await _cmdzzIieBc.configureHelp(_configurationmRzud9F)
		const _promiseY1SB6v = {
		
	}
		const _eventCOEYedX = "xnxWNj5FKaTA7QFzLTCju0vePsfWsYmDLZqeDp8kbMyN63TtTUeENa3U0AUDl1JfE8c557F";
		const _returnValuefGawAZ7 = await _cmdzzIieBc._chainOrCallHooks(_promiseY1SB6v, _eventCOEYedX)
		const _returnValueaMxZFwP = await _HelpwmPGLs1.visibleOptions(_cmdzzIieBc)
		const _cmdoP343gB = false;
		const _returnValueuKi0aZQ = false;
		const _returnValuep59qKTC = () => { return _returnValueuKi0aZQ };
		const _visibleArgumentsLzQjX1z = () => { return _returnValuep59qKTC };
		const _returnValuevnKlYpL = false;
		const _argumentTermyUlbi6F = () => { return _returnValuevnKlYpL };
		const _helperjzI6eNe = {
			"visibleArguments": _visibleArgumentsLzQjX1z,
		"argumentTerm": _argumentTermyUlbi6F
	}
		const _returnValueZhMFYgS = await _HelpwmPGLs1.longestArgumentTermLength(_cmdoP343gB, _helperjzI6eNe)
		const _arrayValuexgD2wXz = "orKhVFml3KQiulDkxXjGubWzooLt6tlcLVKyA";
		const _cmdjsKYdMd = [_arrayValuexgD2wXz]
		const _returnValueyIsuPkS = await _HelpwmPGLs1.visibleOptions(_cmdjsKYdMd)
	});

	it('test for Help', async () => {
		const _HelpeXca04Q = new Help()
		const _nametuAXwX1 = false;
		const _arrayValuekvMXJOI = false;
		const _arrayValueO96Z8ej = null;
		const _descriptionK5kd8Lw = [_arrayValuekvMXJOI, _arrayValueO96Z8ej]
		const _argumentX8tqdO = new Argument(_nametuAXwX1, _descriptionK5kd8Lw)
		const _returnValueCHXIK0x = await _argumentX8tqdO.argOptional()
		const _returnValueDUDYJyc = {
		
	}
		const _arrayValueTFzxwm = () => { return _returnValueDUDYJyc };
		const _arrayValueh8LEbOa = {
		
	}
		const _arrayValueXyeqgFb = null;
		const _arrayValueYsLHfIR = null;
		const _arrayValueMDJcVQ = undefined;
		const _arrayValueaIBWHv9 = [_arrayValueXyeqgFb, _arrayValueYsLHfIR, _arrayValueMDJcVQ]
		const _arrayValueyvu4xiI = undefined;
		const _valuesbS2xEM = [_arrayValueTFzxwm, _arrayValueh8LEbOa, _arrayValueaIBWHv9, _arrayValueyvu4xiI]
		const _returnValueb1n17G8 = await _argumentX8tqdO.choices(_valuesbS2xEM)
		const _returnValuevxZpHsT = await _HelpeXca04Q.argumentDescription(_argumentX8tqdO)
		const _arrayValuej7rjJuG = "9orNuejlpqlYVCLLpf";
		const _arrayValueaAthUPY = true;
		const _cmdZbGBv4 = [_arrayValuej7rjJuG, _arrayValueaAthUPY]
		const _returnValuemI2I96e = true;
		const _helperG4oinoK = () => { return _returnValuemI2I96e };
		const _returnValueTaKETEo = await _HelpeXca04Q.formatHelp(_cmdZbGBv4, _helperG4oinoK)
	});

	it('test for Help', async () => {
		const _HelpYe0wyAG = new Help()
		const _argChoicesBRatXrb = {
		
	}
		const _negateQx70dYy = 6.436054212320666;
		const _defaultValueIZsdQdi = undefined;
		const _defaultValueDescriptionDaBCcyU = false;
		const _arrayValuefsMpyeZ = "kdaoIyuARbPQUUJpAOpaqCBGAqiXeyWSvv3pvLis2XuagyJSIXskShUfrc";
		const _arrayValueHe1HIT = null;
		const _arrayValueUsbkqEj = null;
		const _arrayValueDZ9Plv6 = true;
		const _arrayValueeyLl6NK = [_arrayValuefsMpyeZ, _arrayValueHe1HIT, _arrayValueUsbkqEj, _arrayValueDZ9Plv6]
		const _arrayValueEztDv6v = "16eapzbNeu8V7LGoRQ61bIem4XJ7";
		const _arrayValuewTMd8LY = false;
		const _envVarHsCC2Hz = [_arrayValueeyLl6NK, _arrayValueEztDv6v, _arrayValuewTMd8LY]
		const _descriptionyQy54J = false;
		const _optionCzsFXAy = {
			"argChoices": _argChoicesBRatXrb,
		"negate": _negateQx70dYy,
		"defaultValue": _defaultValueIZsdQdi,
		"defaultValueDescription": _defaultValueDescriptionDaBCcyU,
		"envVar": _envVarHsCC2Hz,
		"description": _descriptionyQy54J
	}
		const _returnValueFDT1ckC = await _HelpYe0wyAG.optionDescription(_optionCzsFXAy)
	});

	it('test for Help', async () => {
		const _HelpvgY2x5B = new Help()
		const _arrayValuegAEtbsu = -4.445352276696816;
		const _nameshuIMkh = [_arrayValuegAEtbsu]
		const _arrayValuePfOnRQ2 = -4.5435877445030135;
		const _arrayValuexq1CSo = {
		
	}
		const _arrayValue5YMbMF = "7DFKYc48CJsLcaSPC4zXLWxXLabYFQROIzUPiU5euXoSwNcRFqYpwi31n0OgHdor2p4NCrIRlw1wP1TfGeHLFdQGKUth";
		const _arrayValuejr2YMoB = -0.08726285721182236;
		const _descriptionJu9v4V5 = [_arrayValuePfOnRQ2, _arrayValuexq1CSo, _arrayValue5YMbMF, _arrayValuejr2YMoB]
		const _optionSM34Dnf = new Argument(_nameshuIMkh, _descriptionJu9v4V5)
		const _returnValueZAahGrd = await _optionSM34Dnf.argRequired()
		const _returnValueGf2r9yh = await _optionSM34Dnf.argOptional()
		const _arrayValueYVTTBk = false;
		const _arrayValuedfks4GK = "xhE3O3RThRExLlUDHR1zgJfAXODwLTI";
		const _arrayValuefOcsueG = [_arrayValueYVTTBk, _arrayValuedfks4GK]
		const _valueqt2frco = [_arrayValuefOcsueG]
		const _descriptionbuLrNwn = undefined;
		const _returnValueZ61M35t = await _optionSM34Dnf.default(_valueqt2frco, _descriptionbuLrNwn)
		const _returnValueuG0ye6B = await _HelpvgY2x5B.optionDescription(_optionSM34Dnf)
	});

	it('test for Help', async () => {
		const _HelpSjlXLws = new Help()
		const _namegRS9ec5 = undefined;
		const _cmdOwYI09Y = new Command(_namegRS9ec5)
		const _subcommandNjgY9UO = "QrSoeKX4WJrhLXd29mEVGRwseIF8KvrYsyGzSzCmUGs6IfD8KcEDOHJXoqD4erYkyJKcKxkgvohqTiIol7fJjx61l8JiZi";
		const _argsXpcr8Fl = undefined;
		const _returnValueXoBebPb = await _cmdOwYI09Y._executeSubCommand(_subcommandNjgY9UO, _argsXpcr8Fl)
		const _keyzQ0rS0i = -7.163020838188887;
		const _valuewFRyLC1 = 8.522293208567579;
		const _returnValueTHP9qyF = await _cmdOwYI09Y.setOptionValue(_keyzQ0rS0i, _valuewFRyLC1)
		const _returnValueSV5H4eH = await _HelpSjlXLws.subcommandTerm(_cmdOwYI09Y)
	});

	it('test for Help', async () => {
		const _HelpYxb0zje = new Help()
		const __nameZvOo4Fn = "DMSN1RoXoQ99rH6AaSjt0rgWzVbxYTHJri1wLD15wdZRTYtBM8w3s5JGTrX96KiYg";
		const __aliasesZShiahA = "oUKAX3QnG";
		const _arrayValueqbsS0pQ = null;
		const _arrayValuepu96d5y = -1.8570085838754444;
		const _arrayValuenDoslvK = null;
		const _parentFHsRld = [_arrayValueqbsS0pQ, _arrayValuepu96d5y, _arrayValuenDoslvK]
		const _returnValuel2GqKVD = "zLzFjg16qAQKuIB1zi4zSnWb7LO1IMKrUaX2PJojdP9ajyl86R15sPD8Wfg58S43RV";
		const _arrayValueyJxBeA7 = () => { return _returnValuel2GqKVD };
		const _arrayValuef63R2VS = null;
		const _arrayValueAdIDTjw = 4.84239203466748;
		const _arrayValueIRuqsrT = "jKzOLdglvNadAu3ThSxeJhdUCoqUiBHPubg5PLxAvJMpW9DVW21rPzdXbl87rIb9";
		const _arrayValueFNvuKxb = null;
		const _arrayValuetzrMMU = "2xaonQzRHuGRCfuPgXtEDL4tP8jbsSaVFnINTJ58JvyDyoAHpKKlHLINM5fgRBxv6kAmYBhC7CZEqB4b9WmAuam";
		const _arrayValueqqYNSwh = [_arrayValueIRuqsrT, _arrayValueFNvuKxb, _arrayValuetzrMMU]
		const _returnValueul7Uoaw = [_arrayValueyJxBeA7, _arrayValuef63R2VS, _arrayValueAdIDTjw, _arrayValueqqYNSwh]
		const _usagex4NNJ1B = () => { return _returnValueul7Uoaw };
		const _cmdhKVR8Tb = {
			"_name": __nameZvOo4Fn,
		"_aliases": __aliasesZShiahA,
		"parent": _parentFHsRld,
		"usage": _usagex4NNJ1B
	}
		const _returnValueny3BERI = await _HelpYxb0zje.commandUsage(_cmdhKVR8Tb)
		const _arrayValueqXsVWYj = null;
		const _arrayValuendwRgKF = undefined;
		const _arrayValueCvdkFJ = "HNt4R3U9YBNbcPAP7W";
		const _optionfXjF24W = [_arrayValueqXsVWYj, _arrayValuendwRgKF, _arrayValueCvdkFJ]
		const _returnValuejd73f0z = await _HelpYxb0zje.optionDescription(_optionfXjF24W)
	});
})