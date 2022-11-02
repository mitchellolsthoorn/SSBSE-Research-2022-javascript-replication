export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpcsSRNo9 = new Help()
		const _returnValuejPgvDxW = null;
		const _arrayValuemhnHp1K = () => { return _returnValuejPgvDxW };
		const _arrayValueorG6Hbx = {
		
	}
		const _cmdbOgSEUp = [_arrayValuemhnHp1K, _arrayValueorG6Hbx]
		const _returnValueuGx2EGC = await _HelpcsSRNo9.visibleArguments(_cmdbOgSEUp)
		const _arrayValuenQTnzH6 = null;
		const _arrayValuelTb16LX = 1.1205946818883135;
		const _arrayValueWQEtqg9 = undefined;
		const _cmdNCoB59c = [_arrayValuenQTnzH6, _arrayValuelTb16LX, _arrayValueWQEtqg9]
		const _returnValueoLKs2Lx = await _HelpcsSRNo9.subcommandTerm(_cmdNCoB59c)
		const _cmdi6vZeV8 = "EVcFcUA27qhna9yzheS";
		const _returnValuegZnfAVp = await _HelpcsSRNo9.visibleArguments(_cmdi6vZeV8)
		const _returnValuezNKHT4I = "iim1v9mXvWkbDtTrYOBH6jeO7X72EHvxbKCSEN0tQnl2DiIvvfs";
		const _includesK0968VD = () => { return _returnValuezNKHT4I };
		const _flagsg3yjSRX = {
			"includes": _includesK0968VD
	}
		const _arrayValueuAHF8ij = true;
		const _arrayValueyhSM0Yr = "61Mu8VVjletF6yunDhRNE8LrH4DCaoNWJyIwTigUz7zYfOCji9anNW9myFHbPxdXJy9B5Nf5rFgEzMhCU3m";
		const _arrayValuecL2oYko = null;
		const _descriptionr5k6jVP = [_arrayValueuAHF8ij, _arrayValueyhSM0Yr, _arrayValuecL2oYko]
		const _optioni9aXYqS = new Option(_flagsg3yjSRX, _descriptionr5k6jVP)
		const _fnUgBIPkF = {
		
	}
		const _returnValueX3eduW1 = await _optioni9aXYqS.argParser(_fnUgBIPkF)
		const _argVUl67vN = "wpgSSowNSw19yPzqQlw7kNPXuHpTUsddJDQS9IaS9y";
		const _returnValueTU7IqV = await _optioni9aXYqS.is(_argVUl67vN)
		const _returnValuewlroik5 = await _HelpcsSRNo9.optionTerm(_optioni9aXYqS)
	});

	it('test for Help', async () => {
		const _HelpUVQaFGJ = new Help()
		const _returnValuelMVfw2O = true;
		const _cmdo1VcCDI = () => { return _returnValuelMVfw2O };
		const _helperuAoLl7J = new Help()
		const _strbPtbkQM = "hCKOyLaWsXK2YmdQBTYbPLQhtOl9b7SiWf1I0afa6wayNYcVr77Nt2e8dNwrVyvdkjPCJFwdLAsQKycHwSsxOP";
		const _widthmTe1N6S = 0.5945162158528721;
		const _indentv1YfXTZ = 7.350123534466714;
		const _minColumnWidthLgc9IMn = undefined;
		const _returnValueZxhePzP = await _helperuAoLl7J.wrap(_strbPtbkQM, _widthmTe1N6S, _indentv1YfXTZ, _minColumnWidthLgc9IMn)
		const _cmdDyn2VA = 2.431238994862179;
		const _returnValuetgncoD = await _helperuAoLl7J.subcommandTerm(_cmdDyn2VA)
		const _flagsJFPjihl = 2.904735921491106;
		const _optionUsiPxyM = {
			"flags": _flagsJFPjihl
	}
		const _returnValued0yILsH = await _helperuAoLl7J.optionTerm(_optionUsiPxyM)
		const _flagsSYd2BS = null;
		const _optionFVUiZJB = {
			"flags": _flagsSYd2BS
	}
		const _returnValuediJvvEK = await _helperuAoLl7J.optionTerm(_optionFVUiZJB)
		const _returnValuez0aR72Y = await _HelpUVQaFGJ.formatHelp(_cmdo1VcCDI, _helperuAoLl7J)
		const _cmdwOTlDnQ = "8jmbQ7RA4hKptCn4nKNl";
		const _returnValueUeG7smE = await _HelpUVQaFGJ.visibleArguments(_cmdwOTlDnQ)
	});

	it('test for Help', async () => {
		const _HelpVmOHGRR = new Help()
		const _arrayValueJTeLUCH = {
		
	}
		const _arrayValueXvgeQd = true;
		const _cmdespwHVf = [_arrayValueJTeLUCH, _arrayValueXvgeQd]
		const _returnValueIxJwQdz = await _HelpVmOHGRR.commandUsage(_cmdespwHVf)
		const _cmdFi8UgkC = -8.281502230596326;
		const _returnValueYGQTKz2 = null;
		const _helperHn7VOY2 = () => { return _returnValueYGQTKz2 };
		const _returnValuetVsVjdY = await _HelpVmOHGRR.longestArgumentTermLength(_cmdFi8UgkC, _helperHn7VOY2)
		const _strAEJ6KTe = "ljai1sXu4IrEMqIX4uK9xzkvpIfaoobsxm413REaFuwyov2rKFLQT1RqtJpnTWe4n3M";
		const _widthTOugbz = 1.8562519928818801;
		const _indentUrziJrA = -5.273834943378219;
		const _minColumnWidthXK1FFfP = -6.047847085231184;
		const _returnValueioTYhKp = await _HelpVmOHGRR.wrap(_strAEJ6KTe, _widthTOugbz, _indentUrziJrA, _minColumnWidthXK1FFfP)
	});

	it('test for Help', async () => {
		const _HelpWvGeznV = new Help()
		const _cmdiISMmrm = null;
		const _sortSubcommandsJG9mrAV = -3.177004162606689;
		const _arrayValueZ9d2Pe = {
		
	}
		const _arrayValueBZ5YO55 = {
		
	}
		const _arrayValuelZCUL3 = undefined;
		const _arrayValuefvFraJJ = "1noNenItRyxdhGcc0tRjhFs13xUU3eEiEw8rX44mp7jstHFz9hWnXaoK9rS2CkMh2JhZ9mvkAjjwssMBCgbYo7WbRIljkl7T";
		const _arrayValueToakOsn = [_arrayValueZ9d2Pe, _arrayValueBZ5YO55, _arrayValuelZCUL3, _arrayValuefvFraJJ]
		const _arrayValues7A4wUi = true;
		const _arrayValueGbcRrX1 = "l4ipisyfFAOzk9gQyyOcnFZVF1lRyrIrd0dxfQrIXgoecbNfNnByvmSr2LPKYxF3E2";
		const _returnValueK9DMSbC = [_arrayValueToakOsn, _arrayValues7A4wUi, _arrayValueGbcRrX1]
		const _subcommandTermEXgGqR = () => { return _returnValueK9DMSbC };
		const _helpernefPlMl = {
			"sortSubcommands": _sortSubcommandsJG9mrAV,
		"subcommandTerm": _subcommandTermEXgGqR
	}
		const _returnValuewRekzxR = await _HelpWvGeznV.longestSubcommandTermLength(_cmdiISMmrm, _helpernefPlMl)
		const _options1oN9hv = {
		
	}
		const __hasHelpOptionLQeUNT = "K5jxO4qjHAvhFTBiN3rIwbN9hkyrfFE2Yv2rqCjoanrePCrXUcaNgl2E9aBMJlQLCa";
		const __helpShortFlagLzKgLW6 = "Lh2DoNtwroyayJT4ps3DHrQ3QzWg9Ehe6O5xL2Iw298lN";
		const _arrayValueFxXq2Jb = null;
		const _arrayValueYIjBP2X = undefined;
		const _arrayValuen9SRRoZ = true;
		const _arrayValuee8xW9Gv = 0.02154753904622808;
		const _arrayValueSA9cDlP = {
		
	}
		const _arrayValuex0gY2MK = [_arrayValuen9SRRoZ, _arrayValuee8xW9Gv, _arrayValueSA9cDlP]
		const _arrayValueabKJmqs = 5.105477420718241;
		const _returnValuerXEm2KF = [_arrayValuex0gY2MK, _arrayValueabKJmqs]
		const _arrayValuelVgEXY5 = () => { return _returnValuerXEm2KF };
		const _returnValueFSD7aGQ = [_arrayValueFxXq2Jb, _arrayValueYIjBP2X, _arrayValuelVgEXY5]
		const __findOptionofqp4wt = () => { return _returnValueFSD7aGQ };
		const __helpLongFlagtaKnVOn = null;
		const _returnValuewY2T7As = "iVl8J45EzKNwXVPLQYRLp7pP2oEcVVeEcWmUYP1AnwoH2Dy1sFgCLImWIJ1rIkdi6k7gvHLVY9KtyxPbjurKGcYN5XvW8VA";
		const _createOptionXKjU1wT = () => { return _returnValuewY2T7As };
		const __helpDescriptionQPKpLiH = {
		
	}
		const __helpFlagsmlM4tLT = {
		
	}
		const _cmdQ7WJXYP = {
			"options": _options1oN9hv,
		"_hasHelpOption": __hasHelpOptionLQeUNT,
		"_helpShortFlag": __helpShortFlagLzKgLW6,
		"_findOption": __findOptionofqp4wt,
		"_helpLongFlag": __helpLongFlagtaKnVOn,
		"createOption": _createOptionXKjU1wT,
		"_helpDescription": __helpDescriptionQPKpLiH,
		"_helpFlags": __helpFlagsmlM4tLT
	}
		const _returnValueWCzHV9 = await _HelpWvGeznV.visibleOptions(_cmdQ7WJXYP)
	});

	it('test for Help', async () => {
		const _HelpX4z6fC = new Help()
		const _cmddqqfeJU = 0.6973998380335829;
		const _arrayValuey7pkv3 = 7.551521400421166;
		const _arrayValuePzblkS8 = "3Hq2e5qwqyby5una7Ii0PqpXLMnj6zlTJ21TW2oOlogF7P9l5VCRXlXvITf6PBmGvFUKE";
		const _helperE6mYq9 = [_arrayValuey7pkv3, _arrayValuePzblkS8]
		const _returnValueWJumiX = await _HelpX4z6fC.longestOptionTermLength(_cmddqqfeJU, _helperE6mYq9)
		const _cmdHrKGWah = "kQwNen7djHNZo8ybECRqfr7jwE5tM6YU9MjMihwiA9UcZIf3gO2Bp";
		const _returnValuebR3nLA = await _HelpX4z6fC.commandUsage(_cmdHrKGWah)
		const _cmdsG2CRu5 = "zviIQYnlypfIrM740lffMMnj4v7YsUiGbNPJJbHHteVDovJ";
		const _returnValuelqY0pK = await _HelpX4z6fC.visibleArguments(_cmdsG2CRu5)
		const _arrayValueVRKjxfH = 0.72702746438285;
		const _arrayValueLG7Ct2Y = 8.320299407820709;
		const _returnValuebebTwcc = undefined;
		const _arrayValuei4hbkzs = () => { return _returnValuebebTwcc };
		const _optionbk3ZHgW = [_arrayValueVRKjxfH, _arrayValueLG7Ct2Y, _arrayValuei4hbkzs]
		const _returnValuexmYiFH2 = await _HelpX4z6fC.optionDescription(_optionbk3ZHgW)
	});

	it('test for Help', async () => {
		const _Helpc88hMKq = new Help()
		const _argumentIdepfRs = "fSnqtf6E11OL6jCEcWUCdYLUgujnMl8gJfG8zyEc244BI5sEoV84EmhtFpoxDlV2AzNrBGuaXlnzwMmXracfp835vcilcLQGzA";
		const _returnValueLDFjrO = await _Helpc88hMKq.argumentTerm(_argumentIdepfRs)
		const _cmdKdgd8zD = false;
		const _returnValuehCBg2xt = null;
		const _helperqx9pjGj = () => { return _returnValuehCBg2xt };
		const _returnValue1uhA9t = await _Helpc88hMKq.longestOptionTermLength(_cmdKdgd8zD, _helperqx9pjGj)
		const _nameAOVM7SR = 3.2587449474627235;
		const _argumentbnUdK92 = {
			"name": _nameAOVM7SR
	}
		const _returnValuenwsWONY = await _Helpc88hMKq.argumentTerm(_argumentbnUdK92)
		const _argChoicesRwTvwW = {
		
	}
		const _negateJaQXi6z = true;
		const _defaultValuei4DP55l = undefined;
		const _arrayValueAQ2P1dI = undefined;
		const _arrayValuepahRBD = undefined;
		const _arrayValuekcT7bTR = undefined;
		const _arrayValuePlG5Spe = [_arrayValueAQ2P1dI, _arrayValuepahRBD, _arrayValuekcT7bTR]
		const _arrayValuejfnQQ2 = null;
		const _defaultValueDescriptionshw2Ncl = [_arrayValuePlG5Spe, _arrayValuejfnQQ2]
		const _envVarSutvvs9 = undefined;
		const _returnValue1B8oT9 = false;
		const _descriptionKs2woQ = () => { return _returnValue1B8oT9 };
		const _optionZ3ApZ41 = {
			"argChoices": _argChoicesRwTvwW,
		"negate": _negateJaQXi6z,
		"defaultValue": _defaultValuei4DP55l,
		"defaultValueDescription": _defaultValueDescriptionshw2Ncl,
		"envVar": _envVarSutvvs9,
		"description": _descriptionKs2woQ
	}
		const _returnValueyZ8N4KK = await _Helpc88hMKq.optionDescription(_optionZ3ApZ41)
	});

	it('test for Help', async () => {
		const _HelpVffM1Rs = new Help()
		const _optionOuQbn8j = []
		const _returnValueKPW5dK = await _HelpVffM1Rs.optionDescription(_optionOuQbn8j)
	});

	it('test for Help', async () => {
		const _HelpUKITdsN = new Help()
		const _flagsD6iZV5 = 1.4650400987143186;
		const _optionDmrRO9M = {
			"flags": _flagsD6iZV5
	}
		const _returnValuevY6sdyB = await _HelpUKITdsN.optionTerm(_optionDmrRO9M)
		const _cmdsRGoFVm = "vTTtPKTpc9b7wu26RZz5rP3bknA";
		const _helperva6PECx = new Help()
		const _returnValueAFjxTNf = null;
		const _optionrBcmq0D = () => { return _returnValueAFjxTNf };
		const _returnValuemf2JLrQ = await _helperva6PECx.optionTerm(_optionrBcmq0D)
		const _cmdrHbH0Po = undefined;
		const _helperG5xAX5t = []
		const _returnValueqGhHAtt = await _helperva6PECx.longestArgumentTermLength(_cmdrHbH0Po, _helperG5xAX5t)
		const _arrayValueBVTqTUa = null;
		const _arrayValueZ9lbSf0 = "yEmxC3qs5TGCfHttXqGKSgblbCKYuX1Q6i6";
		const _returnValuergA6zv = [_arrayValueBVTqTUa, _arrayValueZ9lbSf0]
		const _sliceT0cESr7 = () => { return _returnValuergA6zv };
		const _namez4a4zKR = {
			"slice": _sliceT0cESr7
	}
		const _descriptionZ2duv7 = "2n0DIHKvjhjnpgyTVco7acCOr9KhUuKlSeISpyIwnmnMcmFupkKkxYgJhjDd845GqwunI";
		const _cmdyFUAk0A = new Argument(_namez4a4zKR, _descriptionZ2duv7)
		const _fnEOcbAWX = {
		
	}
		const _returnValuev28F27F = await _cmdyFUAk0A.argParser(_fnEOcbAWX)
		const _valuei9B7OJ = "EM7OA9iU6WfUZUuCylrmNo6twymu5oebaONajiZ7UdwRukSduuFpYZ7AiWff";
		const _descriptioncci8h2Y = "YQI2JCViz3KqhIqqCyVQ7aDu";
		const _returnValueJL5zL7B = await _cmdyFUAk0A.default(_valuei9B7OJ, _descriptioncci8h2Y)
		const _valueH8j0UT = "9uzWYidvHWVNlaUKKS7iMVX4zZ3md9SGj";
		const _descriptionuXUnBXg = undefined;
		const _returnValueiWMh38 = await _cmdyFUAk0A.default(_valueH8j0UT, _descriptionuXUnBXg)
		const _valuePPAf6jS = "nUo7BVKG3ACMihpB0z23B894P9DDytchklFuhtdPa1JjuW1oJPPc";
		const _arrayValueQ9kVYUX = {
		
	}
		const _arrayValueFsyx9Yb = null;
		const _previousbgML0EG = [_arrayValueQ9kVYUX, _arrayValueFsyx9Yb]
		const _returnValueZ7dpVUf = await _cmdyFUAk0A._concatValue(_valuePPAf6jS, _previousbgML0EG)
		const _returnValueqh3pli0 = await _helperva6PECx.commandDescription(_cmdyFUAk0A)
		const _strNlu32sx = "GzFJ1geKBsUBev249ELRqUr767MzPK6yH07Od7JfTTFPAq80Xj2MBENxcVc7XtXVMwEf9wm";
		const _widthflVIluO = "buZBMGo0spojzOa4rILTr6DVq";
		const _indentPyfGdzP = -8.817271864820855;
		const _minColumnWidthpxSsivX = -6.318736120967151;
		const _returnValuetNUBlWV = await _helperva6PECx.wrap(_strNlu32sx, _widthflVIluO, _indentPyfGdzP, _minColumnWidthpxSsivX)
		const _cmdgSKPQpY = 6.44662853684882;
		const _helperL32lpWl = new Help()
		const _cmdT3PUkcM = "458ITrE1b1wwBifk4CIE70aSDHvFv4mI5gwk";
		const _returnValueASZxXY3 = {
		
	}
		const _visibleArgumentshb6Uu7 = () => { return _returnValueASZxXY3 };
		const _returnValueHOjIJgg = {
		
	}
		const _argumentTermXfH68FJ = () => { return _returnValueHOjIJgg };
		const _helperHxSYdAg = {
			"visibleArguments": _visibleArgumentshb6Uu7,
		"argumentTerm": _argumentTermXfH68FJ
	}
		const _returnValueV9gKWf6 = await _helperL32lpWl.longestArgumentTermLength(_cmdT3PUkcM, _helperHxSYdAg)
		const __argsB1eLffS = {
		
	}
		const __namedf9FnUw = 6.705578625749176;
		const __aliases842nmr = {
		
	}
		const _optionslWOZwi = {
		
	}
		const _cmdKJjSdCi = {
			"_args": __argsB1eLffS,
		"_name": __namedf9FnUw,
		"_aliases": __aliases842nmr,
		"options": _optionslWOZwi
	}
		const _returnValueVoIcw9T = await _helperL32lpWl.subcommandTerm(_cmdKJjSdCi)
		const __argsDescriptiontUYoSid = "omYlBqNluH92rfFWCpK5fRLBh1UlNGLbagfdIHXwDhPPd7";
		const __argscs2vtEZ = {
		
	}
		const _cmdgCujRJA = {
			"_argsDescription": __argsDescriptiontUYoSid,
		"_args": __argscs2vtEZ
	}
		const _returnValueEzZ8kOm = await _helperL32lpWl.visibleArguments(_cmdgCujRJA)
		const _optionRZYPlo = 4.292839776227527;
		const _returnValuehMPIxKk = await _helperL32lpWl.optionDescription(_optionRZYPlo)
		const _returnValuech08SKQ = await _helperva6PECx.longestOptionTermLength(_cmdgSKPQpY, _helperL32lpWl)
		const _returnValuee4XeX4 = await _HelpUKITdsN.longestOptionTermLength(_cmdsRGoFVm, _helperva6PECx)
		const __nameHfUYN6A = "gJk7LnlyXWw3xmhQoY5Q1b4";
		const __aliaseszoV7RUO = {
		
	}
		const _parentsWCOWrn = {
		
	}
		const _returnValuerMXMODy = undefined;
		const _usageajeLcgN = () => { return _returnValuerMXMODy };
		const _cmdFqUexFp = {
			"_name": __nameHfUYN6A,
		"_aliases": __aliaseszoV7RUO,
		"parent": _parentsWCOWrn,
		"usage": _usageajeLcgN
	}
		const _returnValueiA1RMu8 = await _HelpUKITdsN.commandUsage(_cmdFqUexFp)
		const _arrayValueYrbjQwI = true;
		const _arrayValuerPEjFUx = "uhi3VHjzTfKrQFitFynIaovfLhJXbe7kJHIUYHVcfg5BAbihF";
		const _arrayValueS9rwxS = false;
		const _arrayValueyOCHZbN = null;
		const _arrayValueTf998aE = [_arrayValueYrbjQwI, _arrayValuerPEjFUx, _arrayValueS9rwxS, _arrayValueyOCHZbN]
		const _arrayValuecZoOsKx = undefined;
		const _cmdrgMkbgh = [_arrayValueTf998aE, _arrayValuecZoOsKx]
		const _returnValueEVITt5o = await _HelpUKITdsN.visibleArguments(_cmdrgMkbgh)
		const _cmdGuL3Qaq = "4T82goTnfyDKp0E1kAlvJOKinl1NBBSWYjQYBJJio5jbXnYOJId5aI7mqAAKxH7VPXoH8sC9awJYB";
		const _returnValueL0D7eNN = await _HelpUKITdsN.commandDescription(_cmdGuL3Qaq)
	});

	it('test for Help', async () => {
		const _Help0hxdF9 = new Help()
		const _returnValueZPVbRMm = false;
		const _descriptionL5zxytj = () => { return _returnValueZPVbRMm };
		const _cmdDh9cH1E = {
			"description": _descriptionL5zxytj
	}
		const _returnValueLVgk38b = await _Help0hxdF9.commandDescription(_cmdDh9cH1E)
	});

	it('test for Help', async () => {
		const _HelpaRcvMdn = new Help()
		const _cmdhTgOF8z = "Inp3WhiD6hZGh3c18aYk8SNLQSKAcI6eH";
		const _returnValue4IWGzV = await _HelpaRcvMdn.visibleOptions(_cmdhTgOF8z)
		const _cmdPYG7qyH = "cHb7yZqqGANMyr6CS3m91tTgX1WVadaEu7NzHrKKo5wPerxjNEo3";
		const _returnValueQOglwb = await _HelpaRcvMdn.visibleOptions(_cmdPYG7qyH)
		const _cmdbcEFY9g = null;
		const _returnValueG5ocVrh = null;
		const _visibleArgumentsadwUOTa = () => { return _returnValueG5ocVrh };
		const _returnValueqyhDUYH = {
		
	}
		const _returnValuea1p615n = () => { return _returnValueqyhDUYH };
		const _argumentTermHZigysf = () => { return _returnValuea1p615n };
		const _helperlzRzIc = {
			"visibleArguments": _visibleArgumentsadwUOTa,
		"argumentTerm": _argumentTermHZigysf
	}
		const _returnValuepnpMZV3 = await _HelpaRcvMdn.longestArgumentTermLength(_cmdbcEFY9g, _helperlzRzIc)
		const _returnValueVkIhx2 = []
		const _returnValueVluON5D = () => { return _returnValueVkIhx2 };
		const _returnValueDwgkn0 = () => { return _returnValueVluON5D };
		const _matchpbdu7Oa = () => { return _returnValueDwgkn0 };
		const _returnValuewTcFxCV = undefined;
		const _substrfppHgLj = () => { return _returnValuewTcFxCV };
		const _strpgoYE7n = {
			"match": _matchpbdu7Oa,
		"substr": _substrfppHgLj
	}
		const _widthi1Sk8Vc = -2.9390605962693197;
		const _indentz3ZzuHM = -9.067758635638768;
		const _minColumnWidthqVuGegG = 9.262423919479005;
		const _returnValueBxl6qP6 = await _HelpaRcvMdn.wrap(_strpgoYE7n, _widthi1Sk8Vc, _indentz3ZzuHM, _minColumnWidthqVuGegG)
		const __argsDX9A4tv = {
		
	}
		const __nameE02i0i1 = 7.39333350086396;
		const __aliasesgyRgkzU = {
		
	}
		const _optionsKKBVRiU = null;
		const _cmd3gRqqE = {
			"_args": __argsDX9A4tv,
		"_name": __nameE02i0i1,
		"_aliases": __aliasesgyRgkzU,
		"options": _optionsKKBVRiU
	}
		const _returnValuebWVlQOk = await _HelpaRcvMdn.subcommandTerm(_cmd3gRqqE)
	});

	it('test for Help', async () => {
		const _HelpSUjlwao = new Help()
		const _cmddx8MGhp = null;
		const _helperJO8pY8G = true;
		const _returnValuex8w3Md7 = await _HelpSUjlwao.formatHelp(_cmddx8MGhp, _helperJO8pY8G)
		const _flagsfqSpcEa = undefined;
		const _optiongYmkZHe = {
			"flags": _flagsfqSpcEa
	}
		const _returnValuex0wAHN8 = await _HelpSUjlwao.optionTerm(_optiongYmkZHe)
		const _argumentrFmpd1o = "JGr8Jkes8Ruyx6JDDhe5Ztwloa8DWL4X8RWlXsDXSQWOVV6aYzBiiJcehPoh";
		const _returnValueSlzouJq = await _HelpSUjlwao.argumentTerm(_argumentrFmpd1o)
		const _returnValueblsR0UV = "E0q9KY";
		const _arrayValueSTxXL2p = () => { return _returnValueblsR0UV };
		const _arrayValueNvYoyn9 = "k5fImfh7Ec6MOQny9FwKxyJbC5BTkbPLc8NnLJieOMri8Ts";
		const _arrayValueknTEgY = -6.538372527482796;
		const _arrayValueEEbdNA1 = undefined;
		const _returnValuegix0EYj = [_arrayValueSTxXL2p, _arrayValueNvYoyn9, _arrayValueknTEgY, _arrayValueEEbdNA1]
		const _optionDf0ZuS = () => { return _returnValuegix0EYj };
		const _returnValuewAaLuPc = await _HelpSUjlwao.optionDescription(_optionDf0ZuS)
	});

	it('test for Help', async () => {
		const _HelpUermQaR = new Help()
		const _cmd9ihRux = undefined;
		const _returnValuedlc5M0M = true;
		const _longestOptionTermLengthejMwU6 = () => { return _returnValuedlc5M0M };
		const _returnValueEyhyIvu = false;
		const _longestSubcommandTermLengthHuf3Wy = () => { return _returnValueEyhyIvu };
		const _returnValuel13z3Jx = -2.4438152284562875;
		const _longestArgumentTermLengthHPk6IZT = () => { return _returnValuel13z3Jx };
		const _helperMpBj49n = {
			"longestOptionTermLength": _longestOptionTermLengthejMwU6,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHuf3Wy,
		"longestArgumentTermLength": _longestArgumentTermLengthHPk6IZT
	}
		const _returnValuesXS1OKp = await _HelpUermQaR.padWidth(_cmd9ihRux, _helperMpBj49n)
		const _arrayValueUTVnuIS = "K";
		const _returnValueotA9hdp = "pvuzYw9gGC3yvpvz171yiIAH2Li36uzBawmzo3XKe90f183lNyISY";
		const _arrayValueq3RTkeE = () => { return _returnValueotA9hdp };
		const _returnValueSpmWqVq = [_arrayValueUTVnuIS, _arrayValueq3RTkeE]
		const _arrayValueslfYDHU = () => { return _returnValueSpmWqVq };
		const _arrayValueXUHkEBS = {
		
	}
		const _arrayValueWSoxLm = [_arrayValueslfYDHU, _arrayValueXUHkEBS]
		const _arrayValueEpSByXv = "sDUjOxmyQi5H1chM66beKJ8OyEy3AYoV1pZBcBFdF6Lr8DWmp3bHm1852Y1MGbYTpNePRScIsBH9";
		const _optionRV2JNvu = [_arrayValueWSoxLm, _arrayValueEpSByXv]
		const _returnValueE2cvw78 = await _HelpUermQaR.optionTerm(_optionRV2JNvu)
	});

	it('test for Help', async () => {
		const _HelpuoMyR8g = new Help()
		const _arrayValueKlIcexM = undefined;
		const _arrayValuempMNDZV = "Mrq6";
		const _arrayValuef3BxP2d = false;
		const _arrayValueEbUdbhr = null;
		const _arrayValueJ8Kbv1K = [_arrayValuef3BxP2d, _arrayValueEbUdbhr]
		const _arrayValueRS5L2RP = [_arrayValuempMNDZV, _arrayValueJ8Kbv1K]
		const _arrayValuekXPeY90 = false;
		const _returnValueN8XeZe8 = [_arrayValueKlIcexM, _arrayValueRS5L2RP, _arrayValuekXPeY90]
		const _descriptionrF9z5uB = () => { return _returnValueN8XeZe8 };
		const _cmdjX5Ld0 = {
			"description": _descriptionrF9z5uB
	}
		const _returnValueSyk6xn = await _HelpuoMyR8g.subcommandDescription(_cmdjX5Ld0)
		const _commandsRFLIkgr = {
		
	}
		const _returnValueNcTfDB = 7.244713109229931;
		const __hasImplicitHelpCommandFZr7JcQ = () => { return _returnValueNcTfDB };
		const __helpCommandnameAndArgslEI7sbH = {
		
	}
		const _returnValueOZaU9wy = undefined;
		const _createCommandV2Wjqb6 = () => { return _returnValueOZaU9wy };
		const __helpCommandDescriptionzZEixk6 = null;
		const _cmdoOgbOfT = {
			"commands": _commandsRFLIkgr,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandFZr7JcQ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgslEI7sbH,
		"createCommand": _createCommandV2Wjqb6,
		"_helpCommandDescription": __helpCommandDescriptionzZEixk6
	}
		const _returnValuexoF33tt = await _HelpuoMyR8g.visibleCommands(_cmdoOgbOfT)
		const _optionsSWxyGfU = {
		
	}
		const __hasHelpOptionbr4zJ7 = "HpdrAmqFed3LaV4Zpfyrp3z8lp73ER3oud9";
		const __helpShortFlagMn2l7dw = false;
		const _returnValueRpC2S8L = undefined;
		const __findOptionXvjmdt2 = () => { return _returnValueRpC2S8L };
		const __helpLongFlagxWQgsld = 7.291891192887359;
		const _returnValueg6RuZDH = 0.5861058194934028;
		const _createOptionCexImci = () => { return _returnValueg6RuZDH };
		const __helpDescriptionhuON0Pb = undefined;
		const __helpFlagsD1xK9G9 = 6.270545624534204;
		const _cmdvkeGngv = {
			"options": _optionsSWxyGfU,
		"_hasHelpOption": __hasHelpOptionbr4zJ7,
		"_helpShortFlag": __helpShortFlagMn2l7dw,
		"_findOption": __findOptionXvjmdt2,
		"_helpLongFlag": __helpLongFlagxWQgsld,
		"createOption": _createOptionCexImci,
		"_helpDescription": __helpDescriptionhuON0Pb,
		"_helpFlags": __helpFlagsD1xK9G9
	}
		const _returnValueC8Vv571 = await _HelpuoMyR8g.visibleOptions(_cmdvkeGngv)
	});

	it('test for Help', async () => {
		const _HelpDfzmprh = new Help()
		const _argChoicesnCAFyXl = {
		
	}
		const _defaultValueLnUvs5F = undefined;
		const _defaultValueDescriptionLnIjTMl = 6.719873873235802;
		const _returnValueAZZs2N = undefined;
		const _description09ooIG = () => { return _returnValueAZZs2N };
		const _argumentR0sjzR = {
			"argChoices": _argChoicesnCAFyXl,
		"defaultValue": _defaultValueLnUvs5F,
		"defaultValueDescription": _defaultValueDescriptionLnIjTMl,
		"description": _description09ooIG
	}
		const _returnValuetZDTAVs = await _HelpDfzmprh.argumentDescription(_argumentR0sjzR)
		const _cmdUrvZdbZ = 3.848551011195715;
		const _returnValuemE86YkA = {
		
	}
		const _helpers6SPCUz = () => { return _returnValuemE86YkA };
		const _returnValueprbiUjN = await _HelpDfzmprh.padWidth(_cmdUrvZdbZ, _helpers6SPCUz)
		const _returnValueMir7M4H = undefined;
		const _cmdMZTPUXB = () => { return _returnValueMir7M4H };
		const _returnValueZhyysY = null;
		const _helpert5V5rK8 = () => { return _returnValueZhyysY };
		const _returnValueFLWgMvs = await _HelpDfzmprh.padWidth(_cmdMZTPUXB, _helpert5V5rK8)
		const _returnValuek3F6QvZ = 7.950894487570984;
		const _cmdtbl6GVp = () => { return _returnValuek3F6QvZ };
		const _returnValueyVPG6YD = await _HelpDfzmprh.visibleOptions(_cmdtbl6GVp)
		const _argumentNsW90T9 = "t1U";
		const _returnValuecAgzcqD = await _HelpDfzmprh.argumentDescription(_argumentNsW90T9)
	});

	it('test for Help', async () => {
		const _HelpnpXH5EA = new Help()
		const _returnValuejEJjBEh = undefined;
		const _argumenthjJDcCu = () => { return _returnValuejEJjBEh };
		const _returnValueiwHeVCv = await _HelpnpXH5EA.argumentDescription(_argumenthjJDcCu)
		const _namepI8mynE = "jXKSEst9";
		const _descriptionVq8gXnk = true;
		const _argumentm6dYOzJ = new Argument(_namepI8mynE, _descriptionVq8gXnk)
		const _fnS5KQqRd = {
		
	}
		const _returnValueckKYiKE = await _argumentm6dYOzJ.argParser(_fnS5KQqRd)
		const _returnValuebsgRuch = await _argumentm6dYOzJ.argRequired()
		const _returnValueCPNJbf = await _argumentm6dYOzJ.argOptional()
		const _fnGfA7RkM = {
		
	}
		const _returnValueJmVBOIn = await _argumentm6dYOzJ.argParser(_fnGfA7RkM)
		const _returnValueEsfwaPa = await _HelpnpXH5EA.argumentDescription(_argumentm6dYOzJ)
		const _returnValuemoat6f = true;
		const _includesn4ngJD6 = () => { return _returnValuemoat6f };
		const _flagssP39Qf7 = {
			"includes": _includesn4ngJD6
	}
		const _descriptionhrbS2Fa = false;
		const _optionxXHb1K = new Option(_flagssP39Qf7, _descriptionhrbS2Fa)
		const _valuejBKQgrh = undefined;
		const _previousYbeZQ73 = {
		
	}
		const _returnValueZ5FBDa = await _optionxXHb1K._concatValue(_valuejBKQgrh, _previousYbeZQ73)
		const _hideinuZR39 = true;
		const _returnValuefElGdOv = await _optionxXHb1K.hideHelp(_hideinuZR39)
		const _valueG3ce7zg = true;
		const _previousKBJMrH = {
		
	}
		const _returnValuewj2V1Ad = await _optionxXHb1K._concatValue(_valueG3ce7zg, _previousKBJMrH)
		const _argGUzC9fJ = {
		
	}
		const _returnValueqJg4y7f = await _optionxXHb1K.is(_argGUzC9fJ)
		const _returnValueY9Gs49 = await _HelpnpXH5EA.optionTerm(_optionxXHb1K)
		const _returnValueEFFLJ1c = true;
		const _descriptionGb8IVzX = () => { return _returnValueEFFLJ1c };
		const _cmdUoWQzkv = {
			"description": _descriptionGb8IVzX
	}
		const _returnValueHDczOyS = await _HelpnpXH5EA.commandDescription(_cmdUoWQzkv)
	});

	it('test for Help', async () => {
		const _HelpFfCCv2a = new Help()
		const __argsDescriptionKwH8kI7 = {
		
	}
		const __argsFTP34wi = null;
		const _cmdQ1FpFAQ = {
			"_argsDescription": __argsDescriptionKwH8kI7,
		"_args": __argsFTP34wi
	}
		const _returnValuevPdmVcA = await _HelpFfCCv2a.visibleArguments(_cmdQ1FpFAQ)
	});

	it('test for Help', async () => {
		const _Helpg6NeYe = new Help()
		const _flagsD4r4Wme = "fFJ19qTmSGarNxT0No7SbRjdScNuN4B1UvMP5RALPc4br4tiGsZEQ2aoRKL98RecE10SEujM";
		const _descriptionCrQpA1S = "9bqTytvhQGVD4icBmhUMx7sXgCSGo9RAlfbFzmgx";
		const _optiondXNfvKs = new Option(_flagsD4r4Wme, _descriptionCrQpA1S)
		const _hidemL6zko = false;
		const _returnValuexxySlXf = await _optiondXNfvKs.hideHelp(_hidemL6zko)
		const _arrayValueEpjnO0 = undefined;
		const _arrayValue6pvTTg = 7.9072203499253995;
		const _arrayValuexLcIQcJ = "s";
		const _valuesZ1wBbyP = [_arrayValueEpjnO0, _arrayValue6pvTTg, _arrayValuexLcIQcJ]
		const _returnValueTjUmsZ8 = await _optiondXNfvKs.choices(_valuesZ1wBbyP)
		const _returnValuenYixzWX = await _Helpg6NeYe.optionDescription(_optiondXNfvKs)
		const _arrayValuedBVFMrx = null;
		const _arrayValuexZUmeA = undefined;
		const _returnValueqwEOs2i = -1.3829409585785992;
		const _returnValuesoQPeQd = () => { return _returnValueqwEOs2i };
		const _arrayValue6wHNWJ = () => { return _returnValuesoQPeQd };
		const _cmdZlFnbl3 = [_arrayValuedBVFMrx, _arrayValuexZUmeA, _arrayValue6wHNWJ]
		const _returnValueetXgVK = await _Helpg6NeYe.subcommandDescription(_cmdZlFnbl3)
		const _returnValueXz2pQXM = true;
		const _cmdVxUiO9m = () => { return _returnValueXz2pQXM };
		const _returnValuemBOfhlh = await _Helpg6NeYe.commandUsage(_cmdVxUiO9m)
	});

	it('test for Help', async () => {
		const _HelpPdwMfrr = new Help()
		const __nameKHm0dUp = 7.412770075622927;
		const __aliasesF4xMplm = {
		
	}
		const _parentQde6Vfl = -7.621304703466531;
		const _returnValueOjdkle = undefined;
		const _usageC64KUKz = () => { return _returnValueOjdkle };
		const _cmdB8nmm6x = {
			"_name": __nameKHm0dUp,
		"_aliases": __aliasesF4xMplm,
		"parent": _parentQde6Vfl,
		"usage": _usageC64KUKz
	}
		const _returnValueroYbLrG = await _HelpPdwMfrr.commandUsage(_cmdB8nmm6x)
		const _arrayValueDtVG8BJ = null;
		const _cmdgmHyd9C = [_arrayValueDtVG8BJ]
		const _returnValueZMCK0Dm = await _HelpPdwMfrr.subcommandTerm(_cmdgmHyd9C)
		const _cmdsnANceu = false;
		const _returnValueiHh7B9p = false;
		const _visibleOptionse0NhaTO = () => { return _returnValueiHh7B9p };
		const _returnValueSt8sMN7 = undefined;
		const _returnValuecHYKne = () => { return _returnValueSt8sMN7 };
		const _optionTermGuTY3i8 = () => { return _returnValuecHYKne };
		const _helpertdHRLJh = {
			"visibleOptions": _visibleOptionse0NhaTO,
		"optionTerm": _optionTermGuTY3i8
	}
		const _returnValueubnMrFZ = await _HelpPdwMfrr.longestOptionTermLength(_cmdsnANceu, _helpertdHRLJh)
		const _flagslXGGAtC = "rtRSJnnMZ3du1DGWJyFecHfPb6i65z7O0tmlADxhoQvmO3u6DZQFoSS0L4jxKEwpCiC5AxLj";
		const _descriptionjhONM76 = false;
		const _optioncp5GJS = new Option(_flagslXGGAtC, _descriptionjhONM76)
		const _returnValuemsk1ezk = await _optioncp5GJS.name()
		const _returnValueMr5oBt1 = await _optioncp5GJS.name()
		const _argCzd2GOM = {
		
	}
		const _returnValuey6EY29t = await _optioncp5GJS.is(_argCzd2GOM)
		const _fnbWolLP7 = undefined;
		const _returnValueeJaRfkH = await _optioncp5GJS.argParser(_fnbWolLP7)
		const _mandatorycBFUGz9 = true;
		const _returnValuejEiC44h = await _optioncp5GJS.makeOptionMandatory(_mandatorycBFUGz9)
		const _returnValuegaGpnX9 = await _HelpPdwMfrr.optionTerm(_optioncp5GJS)
	});

	it('test for Help', async () => {
		const _HelpnB0QNXc = new Help()
		const _flagsAVBvYn8 = "tdavlsj1FKyrbTFUEhZmIBAGp6kqSFnD5QAhWQ7K";
		const _descriptionp0vODNL = undefined;
		const _cmdN1ys4uJ = new Option(_flagsAVBvYn8, _descriptionp0vODNL)
		const _namewwWMsC9 = undefined;
		const _returnValueALBrQQP = await _cmdN1ys4uJ.env(_namewwWMsC9)
		const _fnnMk5wUD = {
		
	}
		const _returnValueX9stD5 = await _cmdN1ys4uJ.argParser(_fnnMk5wUD)
		const _returnValuehLACXo = await _HelpnB0QNXc.subcommandDescription(_cmdN1ys4uJ)
	});

	it('test for Help', async () => {
		const _HelpZOkmDxm = new Help()
		const _returnValuei0JU6i = {
		
	}
		const _matchM4vlDnh = () => { return _returnValuei0JU6i };
		const _returnValueaLwORAF = false;
		const _substrm9S6MMn = () => { return _returnValueaLwORAF };
		const _strxHPfBPd = {
			"match": _matchM4vlDnh,
		"substr": _substrm9S6MMn
	}
		const _widthveSGywj = -5.880379722080617;
		const _indentbJXNHiL = 3.0251443393714066;
		const _minColumnWidthmcae5R6 = 0.05414181242113614;
		const _returnValueLVjfOSe = await _HelpZOkmDxm.wrap(_strxHPfBPd, _widthveSGywj, _indentbJXNHiL, _minColumnWidthmcae5R6)
		const _arrayValuebqr6aVh = undefined;
		const _returnValueI11onNC = 8.648308433301569;
		const _arrayValueZkPRItl = () => { return _returnValueI11onNC };
		const _arrayValueK1mXwLe = true;
		const _arrayValuer0tQd54 = -6.102619155662206;
		const _arrayValueBNoSYaz = [_arrayValuer0tQd54]
		const _arrayValuetRXkgL9 = false;
		const _arrayValueZOVKoOr = [_arrayValueK1mXwLe, _arrayValueBNoSYaz, _arrayValuetRXkgL9]
		const _arrayValuePV1563S = [_arrayValueZOVKoOr]
		const _cmd53ijho = [_arrayValuebqr6aVh, _arrayValueZkPRItl, _arrayValuePV1563S]
		const _returnValuedNMd7r = await _HelpZOkmDxm.visibleArguments(_cmd53ijho)
		const _arrayValueJ7EmlDa = {
		
	}
		const _returnValueOnYKUQi = "j3FnlEQk";
		const _arrayValueNtDmRu = () => { return _returnValueOnYKUQi };
		const _arrayValueRXoTvOq = "eou6x87weAlNna8y4T6joxpQremIcIMCsyAULHYIkDKmlS2oxM8ljgk8yJtgsIcGv";
		const _cmdsKFT1CO = [_arrayValueJ7EmlDa, _arrayValueNtDmRu, _arrayValueRXoTvOq]
		const _returnValuePmFybFH = await _HelpZOkmDxm.subcommandTerm(_cmdsKFT1CO)
	});

	it('test for Help', async () => {
		const _HelpDaLOR7 = new Help()
		const _cmdrd7Hq7Q = 8.271813719722733;
		const _arrayValueOArK6fh = 8.203271012975804;
		const _arrayValueW3bemsq = undefined;
		const _returnValueei7db8K = [_arrayValueOArK6fh, _arrayValueW3bemsq]
		const _longestOptionTermLengthz2eX6zt = () => { return _returnValueei7db8K };
		const _returnValueEXVvmgc = -6.157050177595505;
		const _longestSubcommandTermLengthDNmM6oQ = () => { return _returnValueEXVvmgc };
		const _returnValueAI3325F = null;
		const _returnValueLwRgyOJ = () => { return _returnValueAI3325F };
		const _longestArgumentTermLengthuIbQm9e = () => { return _returnValueLwRgyOJ };
		const _helperW5yzBAi = {
			"longestOptionTermLength": _longestOptionTermLengthz2eX6zt,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDNmM6oQ,
		"longestArgumentTermLength": _longestArgumentTermLengthuIbQm9e
	}
		const _returnValuebz7kXHy = await _HelpDaLOR7.padWidth(_cmdrd7Hq7Q, _helperW5yzBAi)
		const _returnValueKwnW713 = null;
		const _matchhHyaVlz = () => { return _returnValueKwnW713 };
		const _returnValueiiBGeUN = undefined;
		const _substrk7ti2jK = () => { return _returnValueiiBGeUN };
		const _strKbzuJCv = {
			"match": _matchhHyaVlz,
		"substr": _substrk7ti2jK
	}
		const _widthIkXCiqN = 6.877639786664865;
		const _indenthJQFVVf = -8.441772394529165;
		const _minColumnWidthSK5X6aE = 5.941153545830904;
		const _returnValueTVYRpSs = await _HelpDaLOR7.wrap(_strKbzuJCv, _widthIkXCiqN, _indenthJQFVVf, _minColumnWidthSK5X6aE)
		const _nameuNZhKN = null;
		const _argumentYCcUXIL = new Command(_nameuNZhKN)
		const _enableOrNameAndArgsAjy5iid = "AjTxa3XOKXacDomLI16YQh2FhsSs4EElsE8Akg8pb4fdsvSOQCZxx";
		const _arrayValueAXqqgau = false;
		const _arrayValueXzzA80f = "XzPndEJx9453ecMxNox8j1OJdxblavNt";
		const _arrayValuepbhJhtR = undefined;
		const _arrayValuekKFkCi6 = [_arrayValueAXqqgau, _arrayValueXzzA80f, _arrayValuepbhJhtR]
		const _arrayValuepgsm002 = "UR3e9GJeT3hdt5TvICs4pOx5T1AxKxlDl5NATmpFGeU43zxsFDl7aMLM6YEYaSOLTiFMuTsolaU8sv8bsJkmdnFV2D1Qp0ht2";
		const _arrayValueiX0LSaj = null;
		const _descriptionY7vHww = [_arrayValuekKFkCi6, _arrayValuepgsm002, _arrayValueiX0LSaj]
		const _returnValueyRLE5Lt = await _argumentYCcUXIL.addHelpCommand(_enableOrNameAndArgsAjy5iid, _descriptionY7vHww)
		const _fnu3M3Ce = {
		
	}
		const _returnValueAaqQpUV = await _argumentYCcUXIL.exitOverride(_fnu3M3Ce)
		const _returnValuepcuyMDY = false;
		const _keyNBprtBI = () => { return _returnValuepcuyMDY };
		const _valuejfVnd4R = undefined;
		const _sourceb3zoI7 = undefined;
		const _returnValueqt5LBsL = await _argumentYCcUXIL.setOptionValueWithSource(_keyNBprtBI, _valuejfVnd4R, _sourceb3zoI7)
		const _keymwRUoR = -2.793464792494894;
		const _valuex6rGN9S = undefined;
		const _sourcezVWmqXS = "3w9R2VyB14MqC1nmrY8ykKROcYXe5fr5d4ktcK9PRemqozAfqPUlnEpDo0o7fdQwaD8";
		const _returnValuelwssQs = await _argumentYCcUXIL.setOptionValueWithSource(_keymwRUoR, _valuex6rGN9S, _sourcezVWmqXS)
		const _returnValuepCR8OBM = await _HelpDaLOR7.argumentTerm(_argumentYCcUXIL)
	});

	it('test for Help', async () => {
		const _HelpM2osn7V = new Help()
		const _flagswliicdu = undefined;
		const _optionP8Wa0c = {
			"flags": _flagswliicdu
	}
		const _returnValuepiZZGp1 = await _HelpM2osn7V.optionTerm(_optionP8Wa0c)
		const _nameCXAYlnD = null;
		const _cmdK6LOcGK = new Command(_nameCXAYlnD)
		const _keyaHKs93r = undefined;
		const _returnValuebDNNZEL = await _cmdK6LOcGK.getOptionValueSource(_keyaHKs93r)
		const _strZbBiDaH = null;
		const _returnValueW2OOcVK = await _cmdK6LOcGK.usage(_strZbBiDaH)
		const _positionalqJdoaxM = true;
		const _returnValueFErqHhH = await _cmdK6LOcGK.enablePositionalOptions(_positionalqJdoaxM)
		const _promiseXNtntb1 = {
		
	}
		const _eventBhhQ3Xm = "mH2yoMmbByBzT68wpTozPGtCgR2EKwNR4moW";
		const _returnValue2pg0KR = await _cmdK6LOcGK._chainOrCallHooks(_promiseXNtntb1, _eventBhhQ3Xm)
		const _nameUTdGRvs = undefined;
		const _returnValueF7jQvn2 = await _cmdK6LOcGK._findCommand(_nameUTdGRvs)
		const _returnValueJA5Q4mk = await _HelpM2osn7V.subcommandTerm(_cmdK6LOcGK)
		const _cmdT2zg6A9 = 3.7794155090672845;
		const _helperScmIRqT = new Help()
		const _cmdxEoVNK = undefined;
		const _helperU1KC3mP = undefined;
		const _returnValuebNhUXe1 = await _helperScmIRqT.longestSubcommandTermLength(_cmdxEoVNK, _helperU1KC3mP)
		const _arrayValuenIbEHh4 = undefined;
		const _arrayValuesCozOXX = 3.2952822031702045;
		const _cmdSGS7Nxm = [_arrayValuenIbEHh4, _arrayValuesCozOXX]
		const _returnValuejVSqssW = true;
		const _returnValuenY5zGbM = () => { return _returnValuejVSqssW };
		const _helperrdaTAaY = () => { return _returnValuenY5zGbM };
		const _returnValueSkPjZJd = await _helperScmIRqT.formatHelp(_cmdSGS7Nxm, _helperrdaTAaY)
		const _returnValuenPjlVfp = await _HelpM2osn7V.formatHelp(_cmdT2zg6A9, _helperScmIRqT)
		const _arrayValueoyqUgn = undefined;
		const _arrayValuedQbjiQ8 = null;
		const _cmdjU9KZii = [_arrayValueoyqUgn, _arrayValuedQbjiQ8]
		const _returnValuenlxmpD = await _HelpM2osn7V.visibleArguments(_cmdjU9KZii)
	});

	it('test for Help', async () => {
		const _HelpkIiNQeM = new Help()
		const _namejyOcrXe = "8On46SlJ3QA5boVPOtYvkBdWrNL76UeKPv7a9Er7OnY0YjXYAeDoRkuwWvC1KIsiXWdb";
		const _cmdqBh3KQM = new Command(_namejyOcrXe)
		const _allowExcessTIDSvO = true;
		const _returnValueMxmSnlt = await _cmdqBh3KQM.allowExcessArguments(_allowExcessTIDSvO)
		const _strvZGbZTV = undefined;
		const _returnValuetn8t6HF = await _cmdqBh3KQM.usage(_strvZGbZTV)
		const _returnValuencznQKj = await _HelpkIiNQeM.visibleOptions(_cmdqBh3KQM)
		const _nameXqK3c2z = null;
		const _cmdjn0c8Y = new Command(_nameXqK3c2z)
		const _returnValueexg9iqt = await _cmdjn0c8Y.createHelp()
		const _returnValue9wfW1x = await _HelpkIiNQeM.commandDescription(_cmdjn0c8Y)
	});

	it('test for Help', async () => {
		const _HelpfY2BQNm = new Help()
		const _nameTixqdDD = "9SS8Tr3eH4hSbAK3wOCzRjnyK1QLt9JSQ32dadV8wYOW1o7";
		const _cmdBHIYpTY = new Command(_nameTixqdDD)
		const _namedpwgPlU = false;
		const _descriptionxa0h2px = undefined;
		const _returnValueLfzgybN = await _cmdBHIYpTY.createArgument(_namedpwgPlU, _descriptionxa0h2px)
		const _aliasehdeoTG = {
		
	}
		const _returnValuel4iiS0L = await _cmdBHIYpTY.alias(_aliasehdeoTG)
		const _positionalGu2SZ4m = true;
		const _returnValuejILoAJP = await _cmdBHIYpTY.enablePositionalOptions(_positionalGu2SZ4m)
		const _keyhZ0gCSx = null;
		const _valuek5I7AWr = null;
		const _returnValueQkX4o7w = 8.333037581339745;
		const _returnValuevo2t43s = () => { return _returnValueQkX4o7w };
		const _sourceawIKaYI = () => { return _returnValuevo2t43s };
		const _returnValueBmL66YO = await _cmdBHIYpTY.setOptionValueWithSource(_keyhZ0gCSx, _valuek5I7AWr, _sourceawIKaYI)
		const _returnValuel9zA1NX = await _HelpfY2BQNm.subcommandTerm(_cmdBHIYpTY)
		const _cmdT2pV6Z0 = true;
		const _helperABtFmxa = "IgFpxHho2giaDBUE8LHx84eU8C348V";
		const _returnValuePTYHp9E = await _HelpfY2BQNm.longestSubcommandTermLength(_cmdT2pV6Z0, _helperABtFmxa)
		const _optionCDyN22p = "dNUhRFIFzLBOC5cfnmLEizj4fyqcIlczTpyUgKiIYK9FOwd6EHT0ySq4fjP4NJ3Ehg6";
		const _returnValueMDbZ31x = await _HelpfY2BQNm.optionTerm(_optionCDyN22p)
		const _arrayValueVFDTnOO = "Kry9bC";
		const _cmdEkmGkGm = [_arrayValueVFDTnOO]
		const _returnValueRpaLqIN = await _HelpfY2BQNm.visibleArguments(_cmdEkmGkGm)
	});

	it('test for Help', async () => {
		const _HelpwO8Z4mo = new Help()
		const _namezVn5Vuv = []
		const _descriptionB2IWTzT = -1.7107466910480067;
		const _argumentwwbggF9 = new Argument(_namezVn5Vuv, _descriptionB2IWTzT)
		const _arrayValueTkcykZG = undefined;
		const _arrayValuetxLyrb6 = undefined;
		const _arrayValuekei0o45 = null;
		const _valueeJIPIMH = [_arrayValueTkcykZG, _arrayValuetxLyrb6, _arrayValuekei0o45]
		const _descriptionyEs5hYb = {
		
	}
		const _returnValuemX3NdiX = await _argumentwwbggF9.default(_valueeJIPIMH, _descriptionyEs5hYb)
		const _valueslMujBQ = undefined;
		const _returnValuexdEmdMi = true;
		const _previousPc96ad = () => { return _returnValuexdEmdMi };
		const _returnValueOTlCo2t = await _argumentwwbggF9._concatValue(_valueslMujBQ, _previousPc96ad)
		const _valuenQTd5in = {
		
	}
		const _returnValueGXcqmlH = -0.6503869228794219;
		const _concatBQzFdl = () => { return _returnValueGXcqmlH };
		const _previousxNeu2yV = {
			"concat": _concatBQzFdl
	}
		const _returnValuevBDCzLn = await _argumentwwbggF9._concatValue(_valuenQTd5in, _previousxNeu2yV)
		const _returnValueLfrelFr = await _HelpwO8Z4mo.argumentDescription(_argumentwwbggF9)
		const _cmdZbQedF = undefined;
		const _returnValuen0NxyvF = null;
		const _visibleArgumentstoxMD10 = () => { return _returnValuen0NxyvF };
		const _returnValueuUKaSoM = false;
		const _argumentTermXhH7aLM = () => { return _returnValueuUKaSoM };
		const _helperzQiSRlS = {
			"visibleArguments": _visibleArgumentstoxMD10,
		"argumentTerm": _argumentTermXhH7aLM
	}
		const _returnValueKFDnvGy = await _HelpwO8Z4mo.longestArgumentTermLength(_cmdZbQedF, _helperzQiSRlS)
	});
})