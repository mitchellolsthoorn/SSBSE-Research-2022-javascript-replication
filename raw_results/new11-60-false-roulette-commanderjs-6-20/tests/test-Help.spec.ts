export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpiDDKa1j = new Help()
		const _optionHj1ul2s = "WgAlvgQQIlCuhYnC3GtpQU1AiqO2tkFuXPqcygh1iiEFLVGqDhhY5naOM8gcK4Ls9FUlo7RFr8CpaR6dkXHx96P88o";
		const _returnValueBGUZwCi = await _HelpiDDKa1j.optionTerm(_optionHj1ul2s)
		const _cmd7OngFt = "s83m";
		const _helperA83bBB = false;
		const _returnValueVRy23F0 = await _HelpiDDKa1j.formatHelp(_cmd7OngFt, _helperA83bBB)
		const _flagszibzM4o = "p52FYEmKUvEIAszYlbEhDoUFOHrl2UhCyp5YGnmIW76";
		const _descriptionwlyyfF = {
		
	}
		const _optionmmaLq5 = new Option(_flagszibzM4o, _descriptionwlyyfF)
		const _fnorzPJI7 = -4.018456765159644;
		const _returnValueTekjTQS = await _optionmmaLq5.argParser(_fnorzPJI7)
		const _returnValueKSHyHHZ = await _HelpiDDKa1j.optionTerm(_optionmmaLq5)
		const _namezgg5KIr = "lvfLN4yg8immngYvPcyTQxFjD1mwh3aArIZS3dHDfIyYe66MxfJDH6bhzMm3lgahtKbkOG";
		const _descriptiondAIUIky = {
		
	}
		const _cmdwzEY7a = new Argument(_namezgg5KIr, _descriptiondAIUIky)
		const _returnValueuMVWpp = "qtgJ1ja6YKgGXe6";
		const _includesGjKKaiy = () => { return _returnValueuMVWpp };
		const _returnValueAf0uZg = undefined;
		const _joinnRgq1Gg = () => { return _returnValueAf0uZg };
		const _valueshN0BVzj = {
			"includes": _includesGjKKaiy,
		"join": _joinnRgq1Gg
	}
		const _returnValueNX5Kr0c = await _cmdwzEY7a.choices(_valueshN0BVzj)
		const _returnValueGMFEEwA = await _cmdwzEY7a.argRequired()
		const _returnValueswF736F = await _HelpiDDKa1j.subcommandDescription(_cmdwzEY7a)
	});

	it('test for Help', async () => {
		const _Help29mpyR = new Help()
		const _argumentoxgc5Gb = null;
		const _returnValuebM9SHa9 = await _Help29mpyR.argumentDescription(_argumentoxgc5Gb)
		const _returnValueJmHt3Ox = "nYDV3g0ysfg";
		const _cmdSqcRmIg = () => { return _returnValueJmHt3Ox };
		const _returnValueHUEhm1U = await _Help29mpyR.commandUsage(_cmdSqcRmIg)
		const _nameY6FJ3qc = 9.890392241974638;
		const _cmdMbgaKJg = new Command(_nameY6FJ3qc)
		const _errorK1OeYOe = null;
		const _commandi4ihyDs = undefined;
		const _contextOptionsP8dPo8T = {
			"error": _errorK1OeYOe,
		"command": _commandi4ihyDs
	}
		const _returnValuet1y8Qo = await _cmdMbgaKJg.helpInformation(_contextOptionsP8dPo8T)
		const _returnValueRqHvawL = await _Help29mpyR.subcommandTerm(_cmdMbgaKJg)
	});

	it('test for Help', async () => {
		const _Helpvm3zc14 = new Help()
		const _cmdS8L7W2X = null;
		const _arrayValueMKd9DeN = {
		
	}
		const _returnValueQsHsIQO = [_arrayValueMKd9DeN]
		const _sortSubcommandslTLf0Ey = () => { return _returnValueQsHsIQO };
		const _returnValuerKa4c9L = "v83kjvCl0Q61zVksOabK1M7wrE6jUDHcIHeAxqp3KA0aBOUyEDIzRwbuU4XOqmNWeZ65aEeG6tuimnhuQmM9UbO7uI2Fip";
		const _subcommandTermGM4rd37 = () => { return _returnValuerKa4c9L };
		const _helperivX5mFC = {
			"sortSubcommands": _sortSubcommandslTLf0Ey,
		"subcommandTerm": _subcommandTermGM4rd37
	}
		const _returnValueNnRnKqZ = await _Helpvm3zc14.longestSubcommandTermLength(_cmdS8L7W2X, _helperivX5mFC)
		const _optionoPgjLcs = true;
		const _returnValueliuDpxO = await _Helpvm3zc14.optionDescription(_optionoPgjLcs)
		const _cmdaYCKZqy = "tG8teCJmd1K";
		const _returnValueWNVAuVb = await _Helpvm3zc14.visibleOptions(_cmdaYCKZqy)
	});

	it('test for Help', async () => {
		const _HelpXzzodqU = new Help()
		const _arrayValuesjkfUWy = "5ksG42h6rhMjKf20ecr3LGfNXMAMMEorsMFVLp";
		const _cmdi4AKyJF = [_arrayValuesjkfUWy]
		const _returnValue8yF1Hs = undefined;
		const _returnValuetTjMBpm = () => { return _returnValue8yF1Hs };
		const _visibleOptionsU8NR99S = () => { return _returnValuetTjMBpm };
		const _returnValueBs3ZGE = null;
		const _optionTermtoTLNtw = () => { return _returnValueBs3ZGE };
		const _helperersLmKH = {
			"visibleOptions": _visibleOptionsU8NR99S,
		"optionTerm": _optionTermtoTLNtw
	}
		const _returnValueV2urLlp = await _HelpXzzodqU.longestOptionTermLength(_cmdi4AKyJF, _helperersLmKH)
		const _flagsWEy4i8v = -4.282467435762479;
		const _optionInZ845Q = {
			"flags": _flagsWEy4i8v
	}
		const _returnValuejdNjXBL = await _HelpXzzodqU.optionTerm(_optionInZ845Q)
		const _arrayValueUjdIu7h = undefined;
		const _cmdjVjChsI = [_arrayValueUjdIu7h]
		const _returnValuewZhRYgU = await _HelpXzzodqU.visibleOptions(_cmdjVjChsI)
	});

	it('test for Help', async () => {
		const _HelpQfBPeRZ = new Help()
		const _argumentFLKIuw = "zOXik4APNqNg";
		const _returnValuep31f1Az = await _HelpQfBPeRZ.argumentDescription(_argumentFLKIuw)
		const _cmdOvSOtq = undefined;
		const _helperT4YjfGK = "c2sFCL9Sk5AjtWG0GONjgLXW2c8RgexrpkhXIKRAQTTlPRY9";
		const _returnValuezHYRaDk = await _HelpQfBPeRZ.formatHelp(_cmdOvSOtq, _helperT4YjfGK)
		const _cmdhf5Aj1U = 7.692278776707436;
		const _returnValuegfUTFbn = []
		const _helperUK7e82i = () => { return _returnValuegfUTFbn };
		const _returnValueFneaNr = await _HelpQfBPeRZ.longestArgumentTermLength(_cmdhf5Aj1U, _helperUK7e82i)
		const _arrayValueTQ3RsqJ = -0.07746090049863419;
		const _returnValue8BSssh = []
		const _arrayValueeOrW3G7 = () => { return _returnValue8BSssh };
		const _strD9Tz4eS = [_arrayValueTQ3RsqJ, _arrayValueeOrW3G7]
		const _widthvagWscb = 7.408594092109226;
		const _indentDfcnbW4 = 9.073978067398546;
		const _minColumnWidthFh7iWOP = -3.4414136466269056;
		const _returnValueDNtduil = await _HelpQfBPeRZ.wrap(_strD9Tz4eS, _widthvagWscb, _indentDfcnbW4, _minColumnWidthFh7iWOP)
		const _cmdZwq3i3n = true;
		const _returnValueNxCqGQa = "BNvIsbI3VyRW24fyAqvLVlIBOgWbhApqN3z43Eo5eDkBixevkUhgxRaVMJBp1W";
		const _longestOptionTermLengthFA2JPXt = () => { return _returnValueNxCqGQa };
		const _returnValuedQRVSMU = null;
		const _longestSubcommandTermLengtheXJlUlb = () => { return _returnValuedQRVSMU };
		const _returnValueeWXurCO = -4.648861756273726;
		const _longestArgumentTermLengthL58oMDf = () => { return _returnValueeWXurCO };
		const _helperGH9GcPw = {
			"longestOptionTermLength": _longestOptionTermLengthFA2JPXt,
		"longestSubcommandTermLength": _longestSubcommandTermLengtheXJlUlb,
		"longestArgumentTermLength": _longestArgumentTermLengthL58oMDf
	}
		const _returnValuecQXjlA = await _HelpQfBPeRZ.padWidth(_cmdZwq3i3n, _helperGH9GcPw)
	});

	it('test for Help', async () => {
		const _HelpFXrTR8W = new Help()
		const _returnValuechIfAIA = "j5cDWk94KuCEASucy9GG1QU9fLWPeBc2XvknjtHphdSETIP3v7iMdMwFsJydKLUR7SdszxeFs";
		const _argumentZa2v3p1 = () => { return _returnValuechIfAIA };
		const _returnValuehV3vFH = await _HelpFXrTR8W.argumentDescription(_argumentZa2v3p1)
		const _cmduDCnHK8 = []
		const _returnValueAOrkEbd = await _HelpFXrTR8W.commandUsage(_cmduDCnHK8)
		const _argChoicesJMEnf4B = {
		
	}
		const _defaultValuenuzJeZS = undefined;
		const _defaultValueDescriptionHd7ICTf = -8.531442033953553;
		const _descriptionuxfpWHN = undefined;
		const _argumentRnDc6vx = {
			"argChoices": _argChoicesJMEnf4B,
		"defaultValue": _defaultValuenuzJeZS,
		"defaultValueDescription": _defaultValueDescriptionHd7ICTf,
		"description": _descriptionuxfpWHN
	}
		const _returnValuenUU9rVJ = await _HelpFXrTR8W.argumentDescription(_argumentRnDc6vx)
	});

	it('test for Help', async () => {
		const _HelpQLCOcqr = new Help()
		const _cmdN9ya6ni = -6.9556224265312085;
		const _returnValueT3GEcjg = await _HelpQLCOcqr.commandDescription(_cmdN9ya6ni)
		const _cmdfhzHLML = 6.043514323542642;
		const _helpers1Tqi7U = "BW1DL8byLxYOJN2l9tK8lU7Pb2n";
		const _returnValuef5wX8oj = await _HelpQLCOcqr.longestOptionTermLength(_cmdfhzHLML, _helpers1Tqi7U)
		const _cmdwprRDjW = {
		
	}
		const _helpereEfUpl = "8gFFLo1cqNt2uJB33v6vDjcazlVmcPyhIHKm4vthwtAtnwnRSjUzlH5jPEYEkmvU2jqLnc1aURKwuJKe8Ym107oML2oRw7Y";
		const _returnValueg3kNfQm = await _HelpQLCOcqr.longestArgumentTermLength(_cmdwprRDjW, _helpereEfUpl)
		const _arrayValueDtBnQKo = -8.928973376956504;
		const _strfbUSas = [_arrayValueDtBnQKo]
		const _widthNk66Y3N = -8.857783721353151;
		const _indentunazdhp = -8.724231244536696;
		const _minColumnWidthuGiENak = -1.0999883066433505;
		const _returnValuel3ZTfi = await _HelpQLCOcqr.wrap(_strfbUSas, _widthNk66Y3N, _indentunazdhp, _minColumnWidthuGiENak)
	});

	it('test for Help', async () => {
		const _Helpq3OVcYh = new Help()
		const __argspu665b = {
		
	}
		const __namepK6vpa2 = -3.1472055212589565;
		const __aliasessmu58MX = {
		
	}
		const _optionssWBUDS4 = {
		
	}
		const _cmdELYNzYB = {
			"_args": __argspu665b,
		"_name": __namepK6vpa2,
		"_aliases": __aliasessmu58MX,
		"options": _optionssWBUDS4
	}
		const _returnValuexitQvov = await _Helpq3OVcYh.subcommandTerm(_cmdELYNzYB)
		const _argumentJkksFCY = "hLQjKnyGy2XQ7jRkAroqXba7gnE55wsV2Rz78xk13aQQc6p8ZpeiAMc2lETh7uIIaYecMfF";
		const _returnValueUG7Kqes = await _Helpq3OVcYh.argumentDescription(_argumentJkksFCY)
		const _cmdSrY0Bdf = {
		
	}
		const _sortSubcommandsPVYdrFy = undefined;
		const _returnValuelK7Dxv1 = null;
		const _subcommandTermuptndz = () => { return _returnValuelK7Dxv1 };
		const _helpero0PCQj = {
			"sortSubcommands": _sortSubcommandsPVYdrFy,
		"subcommandTerm": _subcommandTermuptndz
	}
		const _returnValueDf5EBK3 = await _Helpq3OVcYh.formatHelp(_cmdSrY0Bdf, _helpero0PCQj)
		const _arrayValueinikYxi = false;
		const _cmdWcKkde5 = [_arrayValueinikYxi]
		const _returnValueb5u6Xmt = await _Helpq3OVcYh.subcommandDescription(_cmdWcKkde5)
	});

	it('test for Help', async () => {
		const _HelpxLPtoq5 = new Help()
		const _returnValueZCevUHE = true;
		const _argumentOtG9uIY = () => { return _returnValueZCevUHE };
		const _returnValueq7G1b9y = await _HelpxLPtoq5.argumentTerm(_argumentOtG9uIY)
		const _returnValueirjcjk = 5.555585144242752;
		const _nameAl6GsD = () => { return _returnValueirjcjk };
		const _cmdcKV8Nqk = new Command(_nameAl6GsD)
		const _optionOGwLJSt = "t9yVTfjhG1ARI7t0NjduuVnjlkWHtTubub23vUSm9Vd6HhtiqdjclUrxdo1ijV1Hg28H8tQEg6zKz3";
		const _returnValueU9gTWOo = await _cmdcKV8Nqk.missingMandatoryOptionValue(_optionOGwLJSt)
		const _namehggdClG = null;
		const _descriptiongoxgEIW = "mqXqrYkRKt99HLpemleUmeDo6uzR6nJ7DrXUmFXvEbKw2";
		const _fnWMSYZ7P = undefined;
		const _defaultValueQ747Tbu = true;
		const _returnValueZyyKsAT = await _cmdcKV8Nqk.argument(_namehggdClG, _descriptiongoxgEIW, _fnWMSYZ7P, _defaultValueQ747Tbu)
		const _returnValuewIGCbr6 = await _cmdcKV8Nqk._checkNumberOfArguments()
		const _returnValuezyBooyl = await _HelpxLPtoq5.commandDescription(_cmdcKV8Nqk)
	});

	it('test for Help', async () => {
		const _HelpYxiapqc = new Help()
		const _commandsqvWLbvW = {
		
	}
		const _returnValueajilKZP = "8vC8n6iqNmi8OUHu261rKA372g";
		const __hasImplicitHelpCommandcbzSZtg = () => { return _returnValueajilKZP };
		const __helpCommandnameAndArgskS9wAn = undefined;
		const _returnValuemtwwusA = null;
		const _returnValueQbTomY3 = () => { return _returnValuemtwwusA };
		const _createCommandUAmZR4g = () => { return _returnValueQbTomY3 };
		const __helpCommandDescriptionPSroijz = true;
		const _cmdLgWjl6 = {
			"commands": _commandsqvWLbvW,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandcbzSZtg,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgskS9wAn,
		"createCommand": _createCommandUAmZR4g,
		"_helpCommandDescription": __helpCommandDescriptionPSroijz
	}
		const _returnValuemnoNFRd = await _HelpYxiapqc.visibleCommands(_cmdLgWjl6)
		const _arrayValueXE7j9d3 = true;
		const _returnValueoNCaeR = [_arrayValueXE7j9d3]
		const _cmdPpprMEC = () => { return _returnValueoNCaeR };
		const _returnValueaYjWhV0 = await _HelpYxiapqc.subcommandDescription(_cmdPpprMEC)
		const _returnValue8M7djo = null;
		const _cmdV6qGJwr = () => { return _returnValue8M7djo };
		const _returnValuem5UMaxg = await _HelpYxiapqc.commandDescription(_cmdV6qGJwr)
	});

	it('test for Help', async () => {
		const _HelpLECmM5j = new Help()
		const _flagsJ1aB13w = -6.750584755858641;
		const _optionVvS6hp5 = {
			"flags": _flagsJ1aB13w
	}
		const _returnValueu7Zxmcy = await _HelpLECmM5j.optionTerm(_optionVvS6hp5)
		const _cmdHd8MTI9 = null;
		const _returnValueY4pF7sS = await _HelpLECmM5j.visibleOptions(_cmdHd8MTI9)
		const _arrayValueLfvaMcI = undefined;
		const _arrayValueNKnKQZj = null;
		const _arrayValueu4O3UtK = [_arrayValueNKnKQZj]
		const _cmdcRmyW30 = [_arrayValueLfvaMcI, _arrayValueu4O3UtK]
		const _returnValueM7lvQOi = await _HelpLECmM5j.commandUsage(_cmdcRmyW30)
		const __argsDescriptionC1rANzn = "zUVkvvTBcK73YCeveYf9EjugbIM4lKNzqyswGI9jhohXedFvYUyqspO2lCChNChqrrdYpB9OKbqe";
		const __argseU4tYKz = {
		
	}
		const _cmdlxpwv99 = {
			"_argsDescription": __argsDescriptionC1rANzn,
		"_args": __argseU4tYKz
	}
		const _returnValueNdOP7Ot = await _HelpLECmM5j.visibleArguments(_cmdlxpwv99)
		const _cmdsqb5219 = {
		
	}
		const _arrayValueEeMvOAD = true;
		const _arrayValueF2x4qj = "KwO1bgPw8nE8l3A";
		const _sortSubcommandsI01F17 = [_arrayValueEeMvOAD, _arrayValueF2x4qj]
		const _returnValueHRk8ZRT = undefined;
		const _subcommandTermb0Nkw0Z = () => { return _returnValueHRk8ZRT };
		const _helperdutj3f = {
			"sortSubcommands": _sortSubcommandsI01F17,
		"subcommandTerm": _subcommandTermb0Nkw0Z
	}
		const _returnValueZZnHMfd = await _HelpLECmM5j.formatHelp(_cmdsqb5219, _helperdutj3f)
	});

	it('test for Help', async () => {
		const _HelppJisQay = new Help()
		const _argChoicesh6syHM = true;
		const _defaultValueLUmRvHW = undefined;
		const _defaultValueDescriptionnbOzBfJ = null;
		const _descriptionb6y1Ap = undefined;
		const _argumentwYqTFDt = {
			"argChoices": _argChoicesh6syHM,
		"defaultValue": _defaultValueLUmRvHW,
		"defaultValueDescription": _defaultValueDescriptionnbOzBfJ,
		"description": _descriptionb6y1Ap
	}
		const _returnValuevKrJOp = await _HelppJisQay.argumentDescription(_argumentwYqTFDt)
		const _cmdILHW34n = "TRJPnMveX9tyozPzNdJpKyhSJBhvq4eCNmAXa1YmLyndpLa4xq0Ebvhsy6qGniaC8RxIcV7rI684FgQL";
		const _returnValueeAPsXFO = await _HelppJisQay.visibleArguments(_cmdILHW34n)
		const _cmdNuJh7q = "TCLwG";
		const _helpermwqmt6R = -3.3688586545407695;
		const _returnValueZIA8TyX = await _HelppJisQay.formatHelp(_cmdNuJh7q, _helpermwqmt6R)
		const _argumentdcBFSPX = "7K2WuZ1KmnMrqpuZU5s2EEVAEYcpMJ8l8nVij2HcEMnsnKbtVz3tazN";
		const _returnValueZBPKR00 = await _HelppJisQay.argumentDescription(_argumentdcBFSPX)
	});

	it('test for Help', async () => {
		const _HelpEDi1I5v = new Help()
		const _returnValueUHmpE65 = {
		
	}
		const _arrayValuexOknr5R = () => { return _returnValueUHmpE65 };
		const _arrayValueXKULaR9 = null;
		const _returnValueDcI1dBZ = [_arrayValuexOknr5R, _arrayValueXKULaR9]
		const _cmdZq58K52 = () => { return _returnValueDcI1dBZ };
		const _helperrQgSOsB = []
		const _returnValuehr10R3 = await _HelpEDi1I5v.longestArgumentTermLength(_cmdZq58K52, _helperrQgSOsB)
	});

	it('test for Help', async () => {
		const _HelpjUQdolc = new Help()
		const _optionQTuRV4G = 9.830851965368897;
		const _returnValueI3HFojB = await _HelpjUQdolc.optionDescription(_optionQTuRV4G)
		const __argsDescriptiontGs1OfH = {
		
	}
		const __argswW0dCYF = {
		
	}
		const _cmdKpdKmcv = {
			"_argsDescription": __argsDescriptiontGs1OfH,
		"_args": __argswW0dCYF
	}
		const _returnValuel82lLM3 = await _HelpjUQdolc.visibleArguments(_cmdKpdKmcv)
		const _returnValueV8aM4J8 = "mPh22xPlyheZbuwrXuxmjqDKsm2sHYeKMZvmq7yxXjfbNzPk3DSNaGwe1udV9LnmzQM88zfUnrx0YLYmypl6e3bEABMSDGRJ9o";
		const _cmdbhlP0ax = () => { return _returnValueV8aM4J8 };
		const _returnValuepguL4j = await _HelpjUQdolc.subcommandTerm(_cmdbhlP0ax)
	});

	it('test for Help', async () => {
		const _HelpJy59bqY = new Help()
		const _returnValueXmIBPeg = null;
		const _descriptionrEKX5uX = () => { return _returnValueXmIBPeg };
		const _cmdnrR7so = {
			"description": _descriptionrEKX5uX
	}
		const _returnValueEJvnQSY = await _HelpJy59bqY.subcommandDescription(_cmdnrR7so)
		const __argsMXV1VNp = {
		
	}
		const __nameq9L0cXx = 4.028188402156756;
		const __aliasesR2nMUgY = {
		
	}
		const _optionsRhm3A8n = {
		
	}
		const _cmdcGGUpRM = {
			"_args": __argsMXV1VNp,
		"_name": __nameq9L0cXx,
		"_aliases": __aliasesR2nMUgY,
		"options": _optionsRhm3A8n
	}
		const _returnValueDPiWibU = await _HelpJy59bqY.subcommandTerm(_cmdcGGUpRM)
		const _arrayValueONnRns6 = 0.025131267705276628;
		const _arrayValueL7YSZpr = false;
		const _returnValueVGfDAZa = [_arrayValueONnRns6, _arrayValueL7YSZpr]
		const _optionEyUlm4 = () => { return _returnValueVGfDAZa };
		const _returnValueiCstqFE = await _HelpJy59bqY.optionTerm(_optionEyUlm4)
	});

	it('test for Help', async () => {
		const _HelphQ5K6zX = new Help()
		const _cmdFXDaeJd = "tpVk5bSKshwzxjFuVl0lE4nVSed2v4lqXuVKbhIgQDsFzKerlso2lVnruBxxj7RQk3e7LK6N0yO9Q0e8V1ELJcEhiAjyFiz6c9T";
		const _returnValuermgT0Uy = -2.8016171077763383;
		const _longestOptionTermLengthfpe4Q8L = () => { return _returnValuermgT0Uy };
		const _returnValueNmYaqUd = false;
		const _longestSubcommandTermLengthbBIXiz = () => { return _returnValueNmYaqUd };
		const _returnValueWWR5lJP = null;
		const _longestArgumentTermLengthymqBW8 = () => { return _returnValueWWR5lJP };
		const _helper8gwQYp = {
			"longestOptionTermLength": _longestOptionTermLengthfpe4Q8L,
		"longestSubcommandTermLength": _longestSubcommandTermLengthbBIXiz,
		"longestArgumentTermLength": _longestArgumentTermLengthymqBW8
	}
		const _returnValueera4IIG = await _HelphQ5K6zX.padWidth(_cmdFXDaeJd, _helper8gwQYp)
		const _flagsUiGKRcx = "M5W4lcqH";
		const _descriptioncjGN5F = {
		
	}
		const _cmdLcWVuRm = new Option(_flagsUiGKRcx, _descriptioncjGN5F)
		const _hideyK7K9VD = false;
		const _returnValuejqyEnLG = await _cmdLcWVuRm.hideHelp(_hideyK7K9VD)
		const _returnValueyvZshT0 = await _HelphQ5K6zX.commandDescription(_cmdLcWVuRm)
		const _flagsx97L0JC = undefined;
		const _optioncI8IhMN = {
			"flags": _flagsx97L0JC
	}
		const _returnValuexTYlLlz = await _HelphQ5K6zX.optionTerm(_optioncI8IhMN)
	});

	it('test for Help', async () => {
		const _HelpIoqYDu = new Help()
		const _cmdQafpDY = undefined;
		const _helpertAE8Rk5 = new Help()
		const _argChoicesqtgq4kq = {
		
	}
		const _negateUEjGcTT = undefined;
		const _defaultValueTcGk9Qf = undefined;
		const _arrayValueN2Y8x8v = undefined;
		const _arrayValueAKwMt4X = null;
		const _returnValueprzQJv2 = [_arrayValueN2Y8x8v, _arrayValueAKwMt4X]
		const _defaultValueDescriptionUmG5N9N = () => { return _returnValueprzQJv2 };
		const _envVarm5Nzn09 = undefined;
		const _descriptionxB18Z9p = true;
		const _optioncTbjau = {
			"argChoices": _argChoicesqtgq4kq,
		"negate": _negateUEjGcTT,
		"defaultValue": _defaultValueTcGk9Qf,
		"defaultValueDescription": _defaultValueDescriptionUmG5N9N,
		"envVar": _envVarm5Nzn09,
		"description": _descriptionxB18Z9p
	}
		const _returnValuezZaZBZc = await _helpertAE8Rk5.optionDescription(_optioncTbjau)
		const _returnValueukg7ftl = undefined;
		const _argumentF5I7rz7 = () => { return _returnValueukg7ftl };
		const _returnValuexsj48id = await _helpertAE8Rk5.argumentDescription(_argumentF5I7rz7)
		const _returnValuezmwBGQX = await _HelpIoqYDu.longestOptionTermLength(_cmdQafpDY, _helpertAE8Rk5)
		const __name4xMcFD = false;
		const __aliasesqYrun34 = {
		
	}
		const _parentgpkFq8y = {
		
	}
		const _returnValueuRhvR8e = undefined;
		const _usageNdMFuNf = () => { return _returnValueuRhvR8e };
		const _cmdVEn1sx7 = {
			"_name": __name4xMcFD,
		"_aliases": __aliasesqYrun34,
		"parent": _parentgpkFq8y,
		"usage": _usageNdMFuNf
	}
		const _returnValuemaiDELU = await _HelpIoqYDu.commandUsage(_cmdVEn1sx7)
		const _returnValueon248fT = null;
		const _returnValuedAPZ9Xp = () => { return _returnValueon248fT };
		const _descriptioneowh7Bv = () => { return _returnValuedAPZ9Xp };
		const _cmdKYdvRN = {
			"description": _descriptioneowh7Bv
	}
		const _returnValueDlnZViv = await _HelpIoqYDu.commandDescription(_cmdKYdvRN)
		const _arrayValueJOsPznZ = null;
		const _arrayValueC9uBLaj = "m3WXIjTf9r7r8LJbyY";
		const _argumentLSjjlI3 = [_arrayValueJOsPznZ, _arrayValueC9uBLaj]
		const _returnValueFt0Fd5W = await _HelpIoqYDu.argumentDescription(_argumentLSjjlI3)
		const __nameUhftfHc = {
		
	}
		const _arrayValueFSw6Phy = -9.349778247017024;
		const _arrayValueSt6g798 = "5h71TRGJOCogjY4IbaDr7ih5oQ6fKG13xA9TgYFMw8tSaYXvno3IlU5bPWzJQigYPWUml3Nh11EbzfGk4cT1";
		const __aliasesDGLMFZ5 = [_arrayValueFSw6Phy, _arrayValueSt6g798]
		const _parentDkdHgxl = {
		
	}
		const _returnValueFpgdyi = false;
		const _usageuvI3ye2 = () => { return _returnValueFpgdyi };
		const _cmdabqkhCs = {
			"_name": __nameUhftfHc,
		"_aliases": __aliasesDGLMFZ5,
		"parent": _parentDkdHgxl,
		"usage": _usageuvI3ye2
	}
		const _returnValuepdGCeXJ = await _HelpIoqYDu.commandUsage(_cmdabqkhCs)
	});

	it('test for Help', async () => {
		const _HelpmW6rJ1s = new Help()
		const _arrayValueW0bfI6K = "NzTUssf4CqwtBrfKFzfibJSRh7MkbMRTvbM625oXYsljZ4u4fI8kf7K";
		const _arrayValuew0A1OXB = [_arrayValueW0bfI6K]
		const _arrayValuesXtZkok = 6.00302156139028;
		const _arrayValue60BRfT = -2.7601631641373103;
		const _arrayValuePvgQUWZ = -7.643980566639905;
		const _strOnHVAb = [_arrayValuew0A1OXB, _arrayValuesXtZkok, _arrayValue60BRfT, _arrayValuePvgQUWZ]
		const _widthVRMlG8E = -1.5996183505024817;
		const _indentV7m85er = 0.07372608154650528;
		const _minColumnWidthohUd3Y2 = 3.9486703807789922;
		const _returnValuemP6Hyik = await _HelpmW6rJ1s.wrap(_strOnHVAb, _widthVRMlG8E, _indentV7m85er, _minColumnWidthohUd3Y2)
		const _cmd1ijFuS = "Fo6id0Rq3";
		const _returnValuedGghLwf = await _HelpmW6rJ1s.visibleArguments(_cmd1ijFuS)
	});

	it('test for Help', async () => {
		const _HelpmP2D5y = new Help()
		const _strxdhLFl = "QhYLNugcQ99j1UCys2ZMxb95XGFD";
		const _widthLYkJpEr = -3.1282635020623957;
		const _indenttHXHurA = 6.958882430762468;
		const _minColumnWidthgfCjszI = 1.689488736052546;
		const _returnValuemgDLT9o = await _HelpmP2D5y.wrap(_strxdhLFl, _widthLYkJpEr, _indenttHXHurA, _minColumnWidthgfCjszI)
		const _returnValueXZAobRd = true;
		const _argumentogDJO6a = () => { return _returnValueXZAobRd };
		const _returnValueq8zreHW = await _HelpmP2D5y.argumentTerm(_argumentogDJO6a)
		const _flagsiVS2Tbe = null;
		const _optionmgo47RL = {
			"flags": _flagsiVS2Tbe
	}
		const _returnValuec9L8afb = await _HelpmP2D5y.optionTerm(_optionmgo47RL)
	});

	it('test for Help', async () => {
		const _HelpUP1eMSV = new Help()
		const __namenAZTxHL = {
		
	}
		const __aliasesgbskZXv = {
		
	}
		const _parentkHRcXp = {
		
	}
		const _returnValueVwRuZsi = null;
		const _arrayValueTRRfnUK = () => { return _returnValueVwRuZsi };
		const _arrayValuevN0b4kh = null;
		const _arrayValuetqWQHG = undefined;
		const _arrayValueyidfcF8 = [_arrayValuetqWQHG]
		const _arrayValueU1BakCz = "OxMiWcURLDL86zEOQR9vr";
		const _arrayValuenDeV53X = undefined;
		const _arrayValueZxnGSF = null;
		const _arrayValueD1Bfmqy = [_arrayValueyidfcF8, _arrayValueU1BakCz, _arrayValuenDeV53X, _arrayValueZxnGSF]
		const _arrayValueKViTdHy = null;
		const _arrayValuezmyeIGi = [_arrayValuevN0b4kh, _arrayValueD1Bfmqy, _arrayValueKViTdHy]
		const _arrayValueeVOzGUQ = "UNwhT9zKz";
		const _arrayValueycTilTc = [_arrayValuezmyeIGi, _arrayValueeVOzGUQ]
		const _returnValuec7tMJ31 = [_arrayValueTRRfnUK, _arrayValueycTilTc]
		const _usageojJppG9 = () => { return _returnValuec7tMJ31 };
		const _cmdYWW2Rjv = {
			"_name": __namenAZTxHL,
		"_aliases": __aliasesgbskZXv,
		"parent": _parentkHRcXp,
		"usage": _usageojJppG9
	}
		const _returnValuewj5sdup = await _HelpUP1eMSV.commandUsage(_cmdYWW2Rjv)
		const _arrayValuelWz0NlE = false;
		const _cmdF4Cvwl8 = [_arrayValuelWz0NlE]
		const _returnValuezs5vkD2 = await _HelpUP1eMSV.visibleOptions(_cmdF4Cvwl8)
	});

	it('test for Help', async () => {
		const _HelpQWb1pbZ = new Help()
		const _returnValueE3rp1CW = true;
		const _matchczK7r9 = () => { return _returnValueE3rp1CW };
		const _returnValueOPdypl9 = null;
		const _arrayValueDZ66Y0B = () => { return _returnValueOPdypl9 };
		const _returnValuemAr2nSq = [_arrayValueDZ66Y0B]
		const _substrPCKAvEw = () => { return _returnValuemAr2nSq };
		const _strRYaYwsO = {
			"match": _matchczK7r9,
		"substr": _substrPCKAvEw
	}
		const _widthjPJNaLb = 3.738248471740457;
		const _indentlSyVCqq = -1.3605811995506567;
		const _minColumnWidthWgmvRhE = -4.9115360366855345;
		const _returnValueOD24sKg = await _HelpQWb1pbZ.wrap(_strRYaYwsO, _widthjPJNaLb, _indentlSyVCqq, _minColumnWidthWgmvRhE)
		const _optionCpjpSqA = []
		const _returnValueweeawJj = await _HelpQWb1pbZ.optionDescription(_optionCpjpSqA)
		const __nameg0fC8ls = {
		
	}
		const __aliasesY0pNqkE = {
		
	}
		const _parentNmrzXgu = {
		
	}
		const _returnValueP5ZNOFb = "kzgTYmFEOi7vbGfIeKlK9dchZqpjaRFCKUC5BrVbChNV2Q6pKlfucAIiYsaj31aPv6l27gh";
		const _usagegdljfqt = () => { return _returnValueP5ZNOFb };
		const _cmdUwPrCxH = {
			"_name": __nameg0fC8ls,
		"_aliases": __aliasesY0pNqkE,
		"parent": _parentNmrzXgu,
		"usage": _usagegdljfqt
	}
		const _returnValuecRVgA6l = await _HelpQWb1pbZ.commandUsage(_cmdUwPrCxH)
	});

	it('test for Help', async () => {
		const _HelpM91fH0r = new Help()
		const _stro3sjnrB = "nCCIDfGUIRIWoCBT5FK5oJxDS8dcqiIhbzi";
		const _widthT9jCFwK = 7.712443978499465;
		const _indentgOYOHP = 9.678990279358125;
		const _minColumnWidthMpHxmna = -7.453928504883107;
		const _returnValueKCZMr1 = await _HelpM91fH0r.wrap(_stro3sjnrB, _widthT9jCFwK, _indentgOYOHP, _minColumnWidthMpHxmna)
		const _returnValue3i86TU = undefined;
		const _strRGfdSio = () => { return _returnValue3i86TU };
		const _widthTV1AR94 = -5.047750872639089;
		const _indentq4IWLhL = -2.2889533721949062;
		const _minColumnWidthQlmm9WV = -0.6911653798495241;
		const _returnValuevoIhXv = await _HelpM91fH0r.wrap(_strRGfdSio, _widthTV1AR94, _indentq4IWLhL, _minColumnWidthQlmm9WV)
	});

	it('test for Help', async () => {
		const _HelpqxUvsBc = new Help()
		const _arrayValuehZyHwP9 = undefined;
		const _returnValuejA19Dyl = undefined;
		const _arrayValuexoRbzGe = () => { return _returnValuejA19Dyl };
		const _arrayValuefFdnIxA = null;
		const _arrayValueUofcM4x = undefined;
		const _arrayValueIK87pGk = [_arrayValuehZyHwP9, _arrayValuexoRbzGe, _arrayValuefFdnIxA, _arrayValueUofcM4x]
		const _arrayValueQikyoei = -4.477965487237566;
		const _cmdQVqWbEd = [_arrayValueIK87pGk, _arrayValueQikyoei]
		const _helperkyxCjGi = new Help()
		const _nameuvAqenG = false;
		const _cmdIjwv5b = new Command(_nameuvAqenG)
		const _storeAsPropertiesziJn1S3 = true;
		const _returnValueXf38Tqm = await _cmdIjwv5b.storeOptionsAsProperties(_storeAsPropertiesziJn1S3)
		const _fnmygCxma = "vUAxoOZslZ9y2KoEfg";
		const _returnValueJOXIp0e = await _cmdIjwv5b.action(_fnmygCxma)
		const _returnValueiC3f8nM = await _helperkyxCjGi.visibleCommands(_cmdIjwv5b)
		const _argumentJm1k5sz = "n1DNelajR2JgWTDfBHqnm9o3jEOx25f5WZnmwoKCKzYmMeO8HKSjc3Ki958aEfBw5ePp";
		const _returnValueV91ELci = await _helperkyxCjGi.argumentTerm(_argumentJm1k5sz)
		const _returnValueYwmrR6u = "IFJXjfwy4q7oZj7To2GmnchL23y4BSsDyrcqyEXv1y";
		const _cmdzuOimAL = () => { return _returnValueYwmrR6u };
		const _returnValueMPi48ER = await _helperkyxCjGi.visibleOptions(_cmdzuOimAL)
		const _cmdRrTXwT0 = 4.795787892631854;
		const _helperYlwFaQ = "9r";
		const _returnValueTSvVet1 = await _helperkyxCjGi.padWidth(_cmdRrTXwT0, _helperYlwFaQ)
		const _returnValueZhYhcgQ = await _HelpqxUvsBc.longestArgumentTermLength(_cmdQVqWbEd, _helperkyxCjGi)
		const _cmdyLnyAF8 = true;
		const _helperJtM5Fnx = "GlHm4dcks63j3XYplG9usi";
		const _returnValueA3P9A2C = await _HelpqxUvsBc.longestOptionTermLength(_cmdyLnyAF8, _helperJtM5Fnx)
		const _arrayValuelIsVs0M = null;
		const _returnValuez74iY67 = null;
		const _arrayValueZVkObF = () => { return _returnValuez74iY67 };
		const _returnValuef4rA0M3 = [_arrayValuelIsVs0M, _arrayValueZVkObF]
		const _cmdXGP3hJ = () => { return _returnValuef4rA0M3 };
		const _returnValuehcTlg31 = await _HelpqxUvsBc.commandDescription(_cmdXGP3hJ)
	});

	it('test for Help', async () => {
		const _HelpxEdkBvR = new Help()
		const _returnValueOWTFuv = undefined;
		const _namefhm9PgX = () => { return _returnValueOWTFuv };
		const _descriptionNN4Chj6 = -3.975331082685062;
		const _argumentmgaFLP5 = new Argument(_namefhm9PgX, _descriptionNN4Chj6)
		const _returnValuetfrDHny = await _argumentmgaFLP5.name()
		const _arrayValuecLrjJUj = false;
		const _arrayValuerb4IBDE = "UD3DWZdzPP4qKNJTKq";
		const _arrayValueJUMPpK6 = [_arrayValuecLrjJUj, _arrayValuerb4IBDE]
		const _valuesgrDpXyi = [_arrayValueJUMPpK6]
		const _returnValueaDyfEfF = await _argumentmgaFLP5.choices(_valuesgrDpXyi)
		const _returnValueNifnHe1 = await _HelpxEdkBvR.argumentTerm(_argumentmgaFLP5)
		const _nameqrTnUl = "ImjNiexj67a5N4Q8S5UOy9XuxplI4KvKBPtKpwSb8hxLfbMmfIkarVGxLebpoHbLwFvVk8vlH7QVO5t7MiBuYqzV8k8J";
		const _cmd1saVbX = new Command(_nameqrTnUl)
		const _displaySuggestionzgT4y5Q = false;
		const _returnValueAAq75A0 = await _cmd1saVbX.showSuggestionAfterError(_displaySuggestionzgT4y5Q)
		const _promiseNmvC7qo = {
		
	}
		const _eventYkXd7L7 = "HGMjc2FihoosCw6JHaeGfDYiTZZVWQDqLI4mLXUUvrsFhBKNXlhZO";
		const _returnValueoo6o1HX = await _cmd1saVbX._chainOrCallHooks(_promiseNmvC7qo, _eventYkXd7L7)
		const _combinegHwLHe = false;
		const _returnValueeS6xdvW = await _cmd1saVbX.combineFlagAndOptionalValue(_combinegHwLHe)
		const _returnValueCeIdCsC = await _HelpxEdkBvR.subcommandTerm(_cmd1saVbX)
		const _cmd3RTdz2 = -5.179596677205675;
		const _arrayValuet1RGcvN = undefined;
		const _returnValueadRxcLV = [_arrayValuet1RGcvN]
		const _visibleArgumentsEDTCZAK = () => { return _returnValueadRxcLV };
		const _returnValueqhyIZfE = {
		
	}
		const _argumentTermOZJM8WI = () => { return _returnValueqhyIZfE };
		const _helperelcEII = {
			"visibleArguments": _visibleArgumentsEDTCZAK,
		"argumentTerm": _argumentTermOZJM8WI
	}
		const _returnValueT4rOliK = await _HelpxEdkBvR.longestArgumentTermLength(_cmd3RTdz2, _helperelcEII)
		const _argChoiceso1CXCgC = {
		
	}
		const _negatePoEgXmu = -9.238201842788197;
		const _defaultValueuplxKQN = undefined;
		const _defaultValueDescriptionBOH1bex = "SZ7";
		const _envVaroh7tWGs = undefined;
		const _descriptionUiBVgpm = undefined;
		const _optionKkZ3bEG = {
			"argChoices": _argChoiceso1CXCgC,
		"negate": _negatePoEgXmu,
		"defaultValue": _defaultValueuplxKQN,
		"defaultValueDescription": _defaultValueDescriptionBOH1bex,
		"envVar": _envVaroh7tWGs,
		"description": _descriptionUiBVgpm
	}
		const _returnValuedF3wYob = await _HelpxEdkBvR.optionDescription(_optionKkZ3bEG)
	});

	it('test for Help', async () => {
		const _Helpx9H8TlO = new Help()
		const _argChoices79k1J5 = {
		
	}
		const _returnValueiqRluHb = null;
		const _negatedNr9Ik6 = () => { return _returnValueiqRluHb };
		const _defaultValueu5Oialn = undefined;
		const _defaultValueDescriptionp1qgY4v = undefined;
		const _envVarZLAr0nM = "UspnmJHWsE1S93mFQt55CMjfaeriLSVYk";
		const _descriptionBiN8MUc = null;
		const _optionblKMKoc = {
			"argChoices": _argChoices79k1J5,
		"negate": _negatedNr9Ik6,
		"defaultValue": _defaultValueu5Oialn,
		"defaultValueDescription": _defaultValueDescriptionp1qgY4v,
		"envVar": _envVarZLAr0nM,
		"description": _descriptionBiN8MUc
	}
		const _returnValueDXGFqcG = await _Helpx9H8TlO.optionDescription(_optionblKMKoc)
		const _cmdi9xxhQP = undefined;
		const _arrayValueEm4OZ2 = {
		
	}
		const _arrayValueD8Ebx6 = false;
		const _arrayValuemDvHgj2 = null;
		const _helperwZbnI1r = [_arrayValueEm4OZ2, _arrayValueD8Ebx6, _arrayValuemDvHgj2]
		const _returnValuei0ah34o = await _Helpx9H8TlO.longestArgumentTermLength(_cmdi9xxhQP, _helperwZbnI1r)
	});

	it('test for Help', async () => {
		const _HelpO1Vsl1m = new Help()
		const _flagsl9bg37i = "yg5GJt";
		const _descriptionyJMIM4e = false;
		const _cmdHs8YzR9 = new Option(_flagsl9bg37i, _descriptionyJMIM4e)
		const _nametQ2zvLr = "iC3PpyYhPtRL";
		const _returnValuedXdSzOp = await _cmdHs8YzR9.env(_nametQ2zvLr)
		const _fnwZZCWeG = []
		const _returnValueVDweZU = await _cmdHs8YzR9.argParser(_fnwZZCWeG)
		const _fnzuAKu10 = undefined;
		const _returnValue6c7QRQ = await _cmdHs8YzR9.argParser(_fnzuAKu10)
		const _valueuJuEYAS = null;
		const _descriptionpcson3I = {
		
	}
		const _returnValueRG8hek = await _cmdHs8YzR9.default(_valueuJuEYAS, _descriptionpcson3I)
		const _returnValuegb3rv8A = await _HelpO1Vsl1m.subcommandDescription(_cmdHs8YzR9)
		const _returnValueCyueGju = []
		const _cmdu1Y6C8 = () => { return _returnValueCyueGju };
		const _returnValuezPpbaiR = await _HelpO1Vsl1m.subcommandDescription(_cmdu1Y6C8)
		const _cmdXZXBkjy = true;
		const _returnValueYTTh6yX = undefined;
		const _helperpnavwOM = () => { return _returnValueYTTh6yX };
		const _returnValuekK1hQiO = await _HelpO1Vsl1m.padWidth(_cmdXZXBkjy, _helperpnavwOM)
		const _argChoicesYCLWmzW = undefined;
		const _defaultValueRpXl7Tu = null;
		const _defaultValueDescriptionM4CLaHh = undefined;
		const _descriptionfT7WXoN = undefined;
		const _argumentopJgBeT = {
			"argChoices": _argChoicesYCLWmzW,
		"defaultValue": _defaultValueRpXl7Tu,
		"defaultValueDescription": _defaultValueDescriptionM4CLaHh,
		"description": _descriptionfT7WXoN
	}
		const _returnValueO4Achup = await _HelpO1Vsl1m.argumentDescription(_argumentopJgBeT)
	});

	it('test for Help', async () => {
		const _Helpuj0Hwh = new Help()
		const _returnValueeqgncj4 = undefined;
		const _optionoKgLBPH = () => { return _returnValueeqgncj4 };
		const _returnValuez8u3yPf = await _Helpuj0Hwh.optionDescription(_optionoKgLBPH)
		const _arrayValueYOYVtO = undefined;
		const _arrayValueQhyNJGt = null;
		const _arrayValueeBSi0IB = undefined;
		const _arrayValuel4mhlvX = {
		
	}
		const _arrayValueXzfHqNR = null;
		const _returnValueneCFBGn = [_arrayValuel4mhlvX, _arrayValueXzfHqNR]
		const _arrayValueEDvLgSn = () => { return _returnValueneCFBGn };
		const _cmdPa4g4XV = [_arrayValueYOYVtO, _arrayValueQhyNJGt, _arrayValueeBSi0IB, _arrayValueEDvLgSn]
		const _returnValueNgOdSQp = 9.808092726808066;
		const _longestOptionTermLengthZmDIAC = () => { return _returnValueNgOdSQp };
		const _returnValueQ5K8IZd = "pUWQQ8JDifKUW7b5XDGlbYKBd2BI62JBYlgqZvoFu6ogVeWuE5n4JydWmTuvYTMeA1wBCS3UL";
		const _longestSubcommandTermLengthDAAMuWw = () => { return _returnValueQ5K8IZd };
		const _returnValuesloitd = 2.6906731096254326;
		const _longestArgumentTermLengthqlzhGGW = () => { return _returnValuesloitd };
		const _helperqb2fEVa = {
			"longestOptionTermLength": _longestOptionTermLengthZmDIAC,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDAAMuWw,
		"longestArgumentTermLength": _longestArgumentTermLengthqlzhGGW
	}
		const _returnValuerAHyX7A = await _Helpuj0Hwh.padWidth(_cmdPa4g4XV, _helperqb2fEVa)
		const _arrayValueuw7QrVA = {
		
	}
		const _returnValueqdQ5hyF = undefined;
		const _arrayValueFPaMeAS = () => { return _returnValueqdQ5hyF };
		const _arrayValueDukw7VZ = [_arrayValueuw7QrVA, _arrayValueFPaMeAS]
		const _arrayValueoexhuh = 4.682249373004437;
		const _arrayValueyJBtlY = [_arrayValueoexhuh]
		const _cmdQCNLbWE = [_arrayValueDukw7VZ, _arrayValueyJBtlY]
		const _arrayValueANfSdSC = -6.48989428447927;
		const _arrayValueM97HTgd = {
		
	}
		const _arrayValuew3UaxmK = false;
		const _returnValuepPygpfm = [_arrayValueANfSdSC, _arrayValueM97HTgd, _arrayValuew3UaxmK]
		const _longestOptionTermLengthMquhOle = () => { return _returnValuepPygpfm };
		const _returnValueK51KCcV = "HqmxFYXZEywOYnLY1ZaFmu4Dte0PKLAPQ38CU1D12";
		const _longestSubcommandTermLengthNl5w2QF = () => { return _returnValueK51KCcV };
		const _returnValuel97OH7 = {
		
	}
		const _longestArgumentTermLengthaFzrDUi = () => { return _returnValuel97OH7 };
		const _helper1YXdDz = {
			"longestOptionTermLength": _longestOptionTermLengthMquhOle,
		"longestSubcommandTermLength": _longestSubcommandTermLengthNl5w2QF,
		"longestArgumentTermLength": _longestArgumentTermLengthaFzrDUi
	}
		const _returnValuej6wgUSR = await _Helpuj0Hwh.padWidth(_cmdQCNLbWE, _helper1YXdDz)
		const _nameXL7tUpJ = null;
		const _cmdm7okFs3 = new Command(_nameXL7tUpJ)
		const _contextOptionsPe8ZzUM = "eNOoKupuKmnMlNJbdMJPAekJ2EM8dePV8TQ5z7Hj1XtYrO0ng2hCtOyHeOZPk3ftAehY8JCU5DHEgwQwDPpEzDV7o";
		const _returnValueJZRKsSR = await _cmdm7okFs3._getHelpContext(_contextOptionsPe8ZzUM)
		const _lengthFL2s5q9 = undefined;
		const _receivedArgsWGAeyu = {
			"length": _lengthFL2s5q9
	}
		const _returnValuexOFPNw8 = await _cmdm7okFs3._excessArguments(_receivedArgsWGAeyu)
		const _returnValueLYMjH4I = await _Helpuj0Hwh.visibleOptions(_cmdm7okFs3)
		const _cmdYvYoGUC = "LKex6gOjGEXpNyNKNp8";
		const _returnValueUZdgem9 = await _Helpuj0Hwh.subcommandTerm(_cmdYvYoGUC)
	});

	it('test for Help', async () => {
		const _HelpMSc3np = new Help()
		const _returnValuetqaUBJ = "67arkKcJdWxGO3EPIQIKufcoevlFF2o63OQ4hThCHlpiFWGT9nhl2Me7okLmTXbAc1zrbAX2WF5c";
		const _descriptionohbjTyG = () => { return _returnValuetqaUBJ };
		const _cmdlc6An7 = {
			"description": _descriptionohbjTyG
	}
		const _returnValueS9Vd8JX = await _HelpMSc3np.subcommandDescription(_cmdlc6An7)
		const _returnValueHq5BVpp = -2.749029565151093;
		const _sliceVP3VGJB = () => { return _returnValueHq5BVpp };
		const _nametzGmTT = {
			"slice": _sliceVP3VGJB
	}
		const _descriptionB74K5fS = 2.729183022374338;
		const _argumentIfmc9NX = new Argument(_nametzGmTT, _descriptionB74K5fS)
		const _returnValueFqMWwM = await _argumentIfmc9NX.argRequired()
		const _fnliDRBi = -4.020820390088719;
		const _returnValuepWHVRZE = await _argumentIfmc9NX.argParser(_fnliDRBi)
		const _returnValueRvdnvt = await _argumentIfmc9NX.argRequired()
		const _returnValuek0viFq4 = await _argumentIfmc9NX.name()
		const _valueScQhIb = {
		
	}
		const _descriptionP6WwefY = undefined;
		const _returnValueLDyyZus = await _argumentIfmc9NX.default(_valueScQhIb, _descriptionP6WwefY)
		const _returnValueURmIRTz = await _HelpMSc3np.argumentDescription(_argumentIfmc9NX)
	});

	it('test for Help', async () => {
		const _HelpuZMotEs = new Help()
		const _returnValuezomCGJ = undefined;
		const _namefY3ZVK5 = () => { return _returnValuezomCGJ };
		const _descriptionkxBGgqU = -5.289582139412005;
		const _optionolzyRgN = new Argument(_namefY3ZVK5, _descriptionkxBGgqU)
		const _returnValuek6codFo = await _optionolzyRgN.argRequired()
		const _valueAkXvZNz = false;
		const _arrayValuerD2xwcv = {
		
	}
		const _returnValueX1DMOv = [_arrayValuerD2xwcv]
		const _previousdyOk2e2 = () => { return _returnValueX1DMOv };
		const _returnValueeSZYRnG = await _optionolzyRgN._concatValue(_valueAkXvZNz, _previousdyOk2e2)
		const _valueXlHVHjT = {
		
	}
		const _descriptiondTZKV3i = {
		
	}
		const _returnValueeMx4XLj = await _optionolzyRgN.default(_valueXlHVHjT, _descriptiondTZKV3i)
		const _returnValueiSzryPI = await _HelpuZMotEs.optionDescription(_optionolzyRgN)
	});

	it('test for Help', async () => {
		const _Helpfgi8OtI = new Help()
		const _nameK8HXuzI = false;
		const _cmdGikEfoK = new Command(_nameK8HXuzI)
		const _aliasmKvqRFp = {
		
	}
		const _returnValuerpur2Pv = await _cmdGikEfoK.alias(_aliasmKvqRFp)
		const _returnValue4pQr6M = await _Helpfgi8OtI.subcommandTerm(_cmdGikEfoK)
		const _argChoicesoz1Epr6 = {
		
	}
		const _defaultValueGjHEB1e = undefined;
		const _defaultValueDescriptionkkJFS0K = {
		
	}
		const _descriptionLCKr6zn = null;
		const _argumentU8hX1Ig = {
			"argChoices": _argChoicesoz1Epr6,
		"defaultValue": _defaultValueGjHEB1e,
		"defaultValueDescription": _defaultValueDescriptionkkJFS0K,
		"description": _descriptionLCKr6zn
	}
		const _returnValuee05QiWS = await _Helpfgi8OtI.argumentDescription(_argumentU8hX1Ig)
	});
})