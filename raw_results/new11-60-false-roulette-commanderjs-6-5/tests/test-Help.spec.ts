export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpZsLolC0 = new Help()
		const _cmdbgxcr6Q = -3.937216899965753;
		const _returnValuenJ5qbgu = undefined;
		const _helpersLa5wxW = () => { return _returnValuenJ5qbgu };
		const _returnValueF0yxJ4o = await _HelpZsLolC0.padWidth(_cmdbgxcr6Q, _helpersLa5wxW)
		const _arrayValueEx1SpV8 = -8.886332159269937;
		const _cmdvDBt1j1 = [_arrayValueEx1SpV8]
		const _returnValuehNE2JXh = await _HelpZsLolC0.visibleOptions(_cmdvDBt1j1)
	});

	it('test for Help', async () => {
		const _Helpj8JrlAx = new Help()
		const _cmdGkRHDL1 = "HfIUWMizbwxqjeVZtKZmoHdP6EDMvwdKk9bvdYep8BmlYMNLGeF96TmNAc3J1fYQQ5HaBOjANLgf53fSZ8mO0Ik9Yni9o";
		const _returnValueu537T9k = await _Helpj8JrlAx.subcommandTerm(_cmdGkRHDL1)
		const _cmdvw00SkC = "xP9ex9tN9JusFw5Mu8NisZ69be9aQcB5MFKUtoRK";
		const _returnValuejBJK2pQ = await _Helpj8JrlAx.commandDescription(_cmdvw00SkC)
	});

	it('test for Help', async () => {
		const _HelplcwCVv = new Help()
		const _optiont3MICFF = true;
		const _returnValueeq4TMP9 = await _HelplcwCVv.optionDescription(_optiont3MICFF)
		const _cmdtliDTZV = {
		
	}
		const _helperenFB7OF = "D9X9HIXkferpFdbAYUjmFYSxAK";
		const _returnValueht7nvsx = await _HelplcwCVv.longestArgumentTermLength(_cmdtliDTZV, _helperenFB7OF)
	});

	it('test for Help', async () => {
		const _HelpmYmBAhI = new Help()
		const _arrayValueQXPuub = null;
		const _arrayValuePsEbmEc = false;
		const _arrayValuenKhdhAF = [_arrayValueQXPuub, _arrayValuePsEbmEc]
		const _arrayValueOtHRJz2 = null;
		const _arrayValueFSkjnyr = null;
		const _cmdbwr9uj6 = [_arrayValuenKhdhAF, _arrayValueOtHRJz2, _arrayValueFSkjnyr]
		const _returnValueomYAob3 = await _HelpmYmBAhI.visibleOptions(_cmdbwr9uj6)
		const _cmddenojAU = []
		const _returnValuegCw5tGf = await _HelpmYmBAhI.subcommandDescription(_cmddenojAU)
		const _argumentiY2301b = "QtlSP8z7PbsgXyzlLYuyY0e1zbqd6E14Eo2ju47v";
		const _returnValuemtV3WUy = await _HelpmYmBAhI.argumentDescription(_argumentiY2301b)
		const _cmdaJa2XcC = false;
		const _helperhBCnyLZ = "fFRYmGQoTgfHld0QPItLOwjeDmYRLCPAQhxPwEbm2QKzhtcbhlEXvP3h0SaI3M3G";
		const _returnValueTiRcy8G = await _HelpmYmBAhI.formatHelp(_cmdaJa2XcC, _helperhBCnyLZ)
	});

	it('test for Help', async () => {
		const _HelpdYBDI1i = new Help()
		const _commandsENx5rGv = {
		
	}
		const _returnValueuruoHtK = "3uPrUdzsrf0c5i7xduKWN4VekFA662HOKSmthAokYaSwpmEjWjLhi7AoTsC";
		const __hasImplicitHelpCommandQDRYokg = () => { return _returnValueuruoHtK };
		const __helpCommandnameAndArgsOp8gH3b = undefined;
		const _returnValuel8rGkTa = "oGqSfNabt5bWTfE46dXoYWsc6UjI22xPeSQO7PDzqasUAtFUOyMKOt8aGUmPaqfZSWARgogY0XvV8hm6YGHQOuOhwziWE9Tb";
		const _createCommandY0uq2Yi = () => { return _returnValuel8rGkTa };
		const __helpCommandDescriptiontOPAsEb = undefined;
		const _cmdk6PQpv7 = {
			"commands": _commandsENx5rGv,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandQDRYokg,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsOp8gH3b,
		"createCommand": _createCommandY0uq2Yi,
		"_helpCommandDescription": __helpCommandDescriptiontOPAsEb
	}
		const _returnValueei51848 = await _HelpdYBDI1i.visibleCommands(_cmdk6PQpv7)
		const _returnValueEvf3o4C = false;
		const _includesBHqsOx7 = () => { return _returnValueEvf3o4C };
		const _flagsELCvZSH = {
			"includes": _includesBHqsOx7
	}
		const _descriptionOAdPbsM = "KplvG1ztmRGmfQdr2ruZuJnbqNHLK4Bqyr2eMViBlY4bCdKJUiNZp4acl9tIBGPM7g";
		const _cmdm2xWE2w = new Option(_flagsELCvZSH, _descriptionOAdPbsM)
		const _hidenuc8y3j = true;
		const _returnValuerc2cL9 = await _cmdm2xWE2w.hideHelp(_hidenuc8y3j)
		const _hideKuEUTAS = true;
		const _returnValueze1d4sH = await _cmdm2xWE2w.hideHelp(_hideKuEUTAS)
		const _valuesBkjDZa = "URgpV6mAW7YWw2FplZxpIFj98PcbkOtTLwtHootlK7TnAG8r3PD5dSdOogK44uF";
		const _returnValuebrT7gck = await _cmdm2xWE2w.choices(_valuesBkjDZa)
		const _returnValueXzxZl8o = await _cmdm2xWE2w.name()
		const _returnValueVgFzwxi = await _HelpdYBDI1i.commandDescription(_cmdm2xWE2w)
		const _cmdbOmV9Ju = undefined;
		const _returnValueAu6Xxp0 = await _HelpdYBDI1i.visibleOptions(_cmdbOmV9Ju)
	});

	it('test for Help', async () => {
		const _HelpcVi3Swj = new Help()
		const _cmdGUNeRrJ = false;
		const _helpers4M9Uhv = []
		const _returnValueuYxwXm3 = await _HelpcVi3Swj.longestOptionTermLength(_cmdGUNeRrJ, _helpers4M9Uhv)
		const _argumentw2sbCXk = -1.3499505530888474;
		const _returnValueKMnpPXy = await _HelpcVi3Swj.argumentDescription(_argumentw2sbCXk)
		const _cmdUY9vtFX = undefined;
		const _helperA4RQ2gj = new Help()
		const _cmdS6q1Tbu = "PA26AtZ6WrHqppaN69FIcdaxGGeeWTOnUh";
		const _returnValuesCCcoy8 = await _helperA4RQ2gj.subcommandTerm(_cmdS6q1Tbu)
		const _optionryjcOBU = "A9LSsAbCNVZh3fLHc16tBejVFRtGV";
		const _returnValueObOPJEa = await _helperA4RQ2gj.optionTerm(_optionryjcOBU)
		const _cmdcGdFYkH = true;
		const _helper3vfUeG = new Help()
		const _cmdfxYuMQq = null;
		const _arrayValuetdaQrv = "Tgmer5MVWIFD6s95R0RNT1avGm8euc7Y7H117oP0vtNbov985QRz";
		const _helperNqlNTQB = [_arrayValuetdaQrv]
		const _returnValueWfCWkEi = await _helper3vfUeG.longestArgumentTermLength(_cmdfxYuMQq, _helperNqlNTQB)
		const _arrayValueRK55STZ = false;
		const _arrayValueMdEQgMR = "63";
		const _arrayValueYsbs4H1 = null;
		const _strQGAY785 = [_arrayValueRK55STZ, _arrayValueMdEQgMR, _arrayValueYsbs4H1]
		const _widthZBifWep = 0.15512618277413992;
		const _indentwcQPm0 = 3.7200776441294323;
		const _minColumnWidthJ3Mrk56 = {
		
	}
		const _returnValueL3k8sqY = await _helper3vfUeG.wrap(_strQGAY785, _widthZBifWep, _indentwcQPm0, _minColumnWidthJ3Mrk56)
		const _nameBIIOQog = false;
		const _argumenthpNNuE8 = new Command(_nameBIIOQog)
		const _returnValuezLfkz7z = undefined;
		const _matchRMSAclD = () => { return _returnValuezLfkz7z };
		const _nameAndArgsNt7Wpo = {
			"match": _matchRMSAclD
	}
		const _actionOptsOrExecDescf5jOV4r = "Irsxx2w8Jf3Jsc2AYtg7km4Vdbj0QW7xou9lxEd1ixtePrhmF37Tjvab4H2OAacUF3GTPR860Y2wuCMc8JI";
		const _execOptsAu8xTRF = 8.654059284110435;
		const _returnValueWMFjaxN = await _argumenthpNNuE8.command(_nameAndArgsNt7Wpo, _actionOptsOrExecDescf5jOV4r, _execOptsAu8xTRF)
		const _arrayValuedeOqSBL = false;
		const _arrayValuePoUZJly = 6.945818276065971;
		const _sourceCommandaNB0nga = [_arrayValuedeOqSBL, _arrayValuePoUZJly]
		const _returnValuePxQPUF = await _argumenthpNNuE8.copyInheritedSettings(_sourceCommandaNB0nga)
		const _returnValueFhlIBW9 = await _helper3vfUeG.argumentTerm(_argumenthpNNuE8)
		const _returnValueB7r3GHH = await _helperA4RQ2gj.padWidth(_cmdcGdFYkH, _helper3vfUeG)
		const _returnValuef6YM34 = await _HelpcVi3Swj.longestArgumentTermLength(_cmdUY9vtFX, _helperA4RQ2gj)
		const _optionsLW7gZuq = {
		
	}
		const __hasHelpOptionkztMegR = undefined;
		const _arrayValuedkbFxuX = null;
		const _arrayValueqnRyYp = null;
		const _arrayValueMDdtRf4 = "BAt8uaEs";
		const __helpShortFlagnyK6hR5 = [_arrayValuedkbFxuX, _arrayValueqnRyYp, _arrayValueMDdtRf4]
		const _returnValueZHjvNio = null;
		const __findOptionfR21hUr = () => { return _returnValueZHjvNio };
		const __helpLongFlagFHi0PO = undefined;
		const _returnValueVkKF7TG = "G2Mlm2X4ylShVhkip7QSKMqHBQhynL5";
		const _returnValue75l2Ik = () => { return _returnValueVkKF7TG };
		const _arrayValueDcR589s = () => { return _returnValue75l2Ik };
		const _returnValuewJRG1j = undefined;
		const _arrayValueoK7YArc = () => { return _returnValuewJRG1j };
		const _arrayValueJKL7Ugp = null;
		const _returnValueeyr99tS = [_arrayValueoK7YArc, _arrayValueJKL7Ugp]
		const _arrayValueM2m7No = () => { return _returnValueeyr99tS };
		const _returnValuej6ZqsCS = [_arrayValueDcR589s, _arrayValueM2m7No]
		const _createOptionxDMgMcN = () => { return _returnValuej6ZqsCS };
		const __helpDescriptionYDFV6ln = false;
		const __helpFlagsxnGeiYJ = "uD3RMBOaSHhhQTVxwymVmLPJvzUb8n9UNqFF7IxEt79Opavxdg29k2ooUkt5Gd4OwwXfWbCcZM32sf4rs1XYm5kbSNkWJp";
		const _cmdPmHG2Xs = {
			"options": _optionsLW7gZuq,
		"_hasHelpOption": __hasHelpOptionkztMegR,
		"_helpShortFlag": __helpShortFlagnyK6hR5,
		"_findOption": __findOptionfR21hUr,
		"_helpLongFlag": __helpLongFlagFHi0PO,
		"createOption": _createOptionxDMgMcN,
		"_helpDescription": __helpDescriptionYDFV6ln,
		"_helpFlags": __helpFlagsxnGeiYJ
	}
		const _returnValuebC2W47p = await _HelpcVi3Swj.visibleOptions(_cmdPmHG2Xs)
	});

	it('test for Help', async () => {
		const _HelpCxklx8Y = new Help()
		const _returnValueEHPSdTc = null;
		const _sliceB5X61fj = () => { return _returnValueEHPSdTc };
		const _namerJgYXLC = {
			"slice": _sliceB5X61fj
	}
		const _descriptionzFUH3Z = null;
		const _cmdTNKjdUc = new Argument(_namerJgYXLC, _descriptionzFUH3Z)
		const _returnValueVWGO4lB = await _cmdTNKjdUc.argRequired()
		const _returnValuejxVdceI = await _cmdTNKjdUc.argRequired()
		const _returnValuez538UHD = await _HelpCxklx8Y.subcommandDescription(_cmdTNKjdUc)
	});

	it('test for Help', async () => {
		const _HelpfNMHjAT = new Help()
		const _returnValueN2DFOc5 = "QEr1h5XlcZ";
		const _namediB9RNb = () => { return _returnValueN2DFOc5 };
		const _argumentiP96cz5 = {
			"name": _namediB9RNb
	}
		const _returnValuer8bUw5p = await _HelpfNMHjAT.argumentTerm(_argumentiP96cz5)
		const _arrayValuexPns0JI = false;
		const _arrayValueYZsGgOU = undefined;
		const _cmdubynhWs = [_arrayValuexPns0JI, _arrayValueYZsGgOU]
		const _arrayValuebtXp3KE = false;
		const _arrayValuezUV6CmL = null;
		const _helperyTOTsNt = [_arrayValuebtXp3KE, _arrayValuezUV6CmL]
		const _returnValuekVJQnCC = await _HelpfNMHjAT.formatHelp(_cmdubynhWs, _helperyTOTsNt)
		const _optionrfGdIYn = "JXxB13vUtMXEt4UOfDGRSt2aUgAk9JPCHVv1k3rHUFL5Smyk2XfrfxOF8";
		const _returnValueZ1VWmBe = await _HelpfNMHjAT.optionTerm(_optionrfGdIYn)
	});

	it('test for Help', async () => {
		const _HelpLjn6QPs = new Help()
		const _argChoicesArJkWTT = {
		
	}
		const _defaultValue6IGg4D = undefined;
		const _defaultValueDescriptionOWZhv2V = "XDAdXgaVsqTt59epPeNiIyOVzVSYhPgyapVD4jzovFnXBFTdbIIFLZBb4FWs4Pg79XGIb7VcP8wdHhiFsVm4lPo";
		const _descriptionE7dRJfy = false;
		const _argumentWgFRfH = {
			"argChoices": _argChoicesArJkWTT,
		"defaultValue": _defaultValue6IGg4D,
		"defaultValueDescription": _defaultValueDescriptionOWZhv2V,
		"description": _descriptionE7dRJfy
	}
		const _returnValuesCMTavR = await _HelpLjn6QPs.argumentDescription(_argumentWgFRfH)
		const _arrayValuefyu4dyL = undefined;
		const _cmdH6dgYN = [_arrayValuefyu4dyL]
		const _returnValueCeLoF1Y = await _HelpLjn6QPs.commandDescription(_cmdH6dgYN)
	});

	it('test for Help', async () => {
		const _HelpdsXktJ = new Help()
		const _optionpIaoxQS = "0zhIGW6uVHS9SCtHHxEIbMLUNUTTQDcbx2ydM8y3dkyhl9X84Ac3lfRRe2e6mTW1vqH9S49j7LMNvrJwaqSOgq2R3T";
		const _returnValueBEMTaG = await _HelpdsXktJ.optionTerm(_optionpIaoxQS)
		const _messageysFzQR0 = null;
		const _argumentORwXkR = new InvalidArgumentError(_messageysFzQR0)
		const _returnValueW7KTl4S = await _HelpdsXktJ.argumentTerm(_argumentORwXkR)
	});

	it('test for Help', async () => {
		const _HelpVtxsDS2 = new Help()
		const _cmdoGcHWkW = null;
		const _helpermXluuWX = new Help()
		const _arrayValuestzKQOD = []
		const _arrayValuegwHlxT1 = [_arrayValuestzKQOD]
		const _returnValueFWB3F2a = [_arrayValuegwHlxT1]
		const _cmdmxIV5IF = () => { return _returnValueFWB3F2a };
		const _helperD2q97wj = new Help()
		const _cmdQH6ATB3 = "5WnwbinDqdOs6RSUJOYIt5LpuSsq4yDhIsjJUbol56WsJM1zCmIM6QemNxqmI86B1dpJQYQGkbg1GzMXXviW4";
		const _returnValue4Ec5br = await _helperD2q97wj.visibleArguments(_cmdQH6ATB3)
		const _flagsIMIA8oC = null;
		const _optionTcXb5r2 = {
			"flags": _flagsIMIA8oC
	}
		const _returnValueyUzuZYX = await _helperD2q97wj.optionTerm(_optionTcXb5r2)
		const _returnValueVNDD0jd = await _helpermXluuWX.formatHelp(_cmdmxIV5IF, _helperD2q97wj)
		const _returnValueNq4lr3t = "AyhsFhR4j59weVDwKiEChslsjrcwfgcKyLWbhsYB1uH";
		const _cmdVV3YtGY = () => { return _returnValueNq4lr3t };
		const _returnValuecFiP7Jh = await _helpermXluuWX.visibleOptions(_cmdVV3YtGY)
		const __namezMd0t8H = -8.961274755326988;
		const __aliasesn9pfQp9 = {
		
	}
		const _parentl2YD6Vw = -9.17773837274449;
		const _arrayValuev17qEp1 = -2.4303500711061146;
		const _returnValueEuRX6Ko = [_arrayValuev17qEp1]
		const _usagejMF7GbE = () => { return _returnValueEuRX6Ko };
		const _cmdIQCbt4o = {
			"_name": __namezMd0t8H,
		"_aliases": __aliasesn9pfQp9,
		"parent": _parentl2YD6Vw,
		"usage": _usagejMF7GbE
	}
		const _returnValueGh1gooe = await _helpermXluuWX.commandUsage(_cmdIQCbt4o)
		const _flagsJqelv3 = 7.0551564879318605;
		const _optionEinH8Nm = {
			"flags": _flagsJqelv3
	}
		const _returnValue0fP1n8 = await _helpermXluuWX.optionTerm(_optionEinH8Nm)
		const _returnValueL0O0Zl = await _HelpVtxsDS2.longestSubcommandTermLength(_cmdoGcHWkW, _helpermXluuWX)
		const _cmdUOEzo2O = 0.49198200902477573;
		const _returnValuejpWzEB4 = await _HelpVtxsDS2.commandUsage(_cmdUOEzo2O)
	});

	it('test for Help', async () => {
		const _HelpDDafnXB = new Help()
		const _returnValuesb2TkZI = null;
		const _descriptionRyqyvyN = () => { return _returnValuesb2TkZI };
		const _cmdg14z6B7 = {
			"description": _descriptionRyqyvyN
	}
		const _returnValuevojsCi9 = await _HelpDDafnXB.commandDescription(_cmdg14z6B7)
		const _returnValueYcARnJX = 2.069632335746469;
		const _returnValueBpKW4Kv = () => { return _returnValueYcARnJX };
		const _cmdh7nN6ln = () => { return _returnValueBpKW4Kv };
		const _helperGdlXTdz = "zYO0hbbWCjeFUFdfXzHcOSQ3SGBEKCj8gzTsMnBT2QLBD70Ez92phsH38";
		const _returnValueIx97XCV = await _HelpDDafnXB.padWidth(_cmdh7nN6ln, _helperGdlXTdz)
	});

	it('test for Help', async () => {
		const _HelpbiIaqrJ = new Help()
		const _cmdlJZgpc7 = "bYS1UbnxCoyuf1Us4iwQWAGwzTSlKibgvy3HbptlXoUi8cSsnwaN4UPy66XswUYDzbHCkeCBCF";
		const _returnValueGybvNH4 = await _HelpbiIaqrJ.commandUsage(_cmdlJZgpc7)
		const _namecd77oWS = "2vTJRQ1hA3IeXTtpJ4ijw96";
		const _cmdUBoPBZq = new Command(_namecd77oWS)
		const _returnValueijHWZ5 = "FHvT";
		const _splitK4SnRMp = () => { return _returnValueijHWZ5 };
		const _namesnPMOHfz = {
			"split": _splitK4SnRMp
	}
		const _returnValueppV2OAS = await _cmdUBoPBZq.arguments(_namesnPMOHfz)
		const _arrayValueNNYiLDJ = {
		
	}
		const _argvTd4tjiY = [_arrayValueNNYiLDJ]
		const _parseOptionsbNQDXSV = null;
		const _returnValuesgaoe29 = await _cmdUBoPBZq.parseAsync(_argvTd4tjiY, _parseOptionsbNQDXSV)
		const _flagsIeMIvao = {
		
	}
		const _descriptionm6JaAX = false;
		const _fnCpFqUGy = undefined;
		const _defaultValueOdfhi2C = false;
		const _returnValuejGjLfoC = await _cmdUBoPBZq.requiredOption(_flagsIeMIvao, _descriptionm6JaAX, _fnCpFqUGy, _defaultValueOdfhi2C)
		const _keyVdny00c = 8.72389916410339;
		const _valuevz1zom8 = "PpznByKmlAFnDwAixlzzb8aCZd2flobwXwTasO9pfTVP26nFz";
		const _sourceSMxKHu4 = undefined;
		const _returnValueiPkGOjA = await _cmdUBoPBZq.setOptionValueWithSource(_keyVdny00c, _valuevz1zom8, _sourceSMxKHu4)
		const _returnValueIDzRxyZ = await _HelpbiIaqrJ.visibleArguments(_cmdUBoPBZq)
		const _returnValuetTyRy80 = 3.780646715703586;
		const _cmdzPc4pSM = () => { return _returnValuetTyRy80 };
		const _returnValuehlrnWnW = await _HelpbiIaqrJ.subcommandTerm(_cmdzPc4pSM)
	});

	it('test for Help', async () => {
		const _HelpkoQvbtE = new Help()
		const __argsDescriptionxQEcUo7 = {
		
	}
		const __argslRWKeLA = {
		
	}
		const _cmd75lMoD = {
			"_argsDescription": __argsDescriptionxQEcUo7,
		"_args": __argslRWKeLA
	}
		const _returnValueYoNloQ = await _HelpkoQvbtE.visibleArguments(_cmd75lMoD)
		const _returnValueJ2WZoHS = "QIjIki89KTPa4ehJxXnXUegsYYF2fBCRd1ZmoKF7lKx7ze2RDLsrOaFsTtmnUcB8CGCK";
		const _cmdstBlyjB = () => { return _returnValueJ2WZoHS };
		const _helperLBmUTFw = new Help()
		const _returnValuesNaezeq = "waAIeLbIoQmMk35kFtdoRynMCdiSnmzdY2FRJbp8EFktKTDfrHXkDAFRdhBObvaU9tlwhweVcC";
		const _cmdLRSLfXa = () => { return _returnValuesNaezeq };
		const _sortSubcommandsOQfa3b = undefined;
		const _returnValueg8GM7Zi = true;
		const _subcommandTermUQfo3T8 = () => { return _returnValueg8GM7Zi };
		const _helperyAGNoY4 = {
			"sortSubcommands": _sortSubcommandsOQfa3b,
		"subcommandTerm": _subcommandTermUQfo3T8
	}
		const _returnValueXzYeYmy = await _helperLBmUTFw.formatHelp(_cmdLRSLfXa, _helperyAGNoY4)
		const _returnValuexExpbQs = undefined;
		const _cmdSGOzlj4 = () => { return _returnValuexExpbQs };
		const _returnValueeFf0zjD = await _helperLBmUTFw.subcommandTerm(_cmdSGOzlj4)
		const __argsDescriptionVoA1oM0 = {
		
	}
		const _arrayValueRAYLPZc = "lpnzj068PT";
		const _returnValuetwjrjX5 = null;
		const _arrayValueDooSORi = () => { return _returnValuetwjrjX5 };
		const _arrayValueIKnuMsg = false;
		const __argsjRuw4i = [_arrayValueRAYLPZc, _arrayValueDooSORi, _arrayValueIKnuMsg]
		const _cmdXj7YQi = {
			"_argsDescription": __argsDescriptionVoA1oM0,
		"_args": __argsjRuw4i
	}
		const _returnValueyPs4yVL = await _helperLBmUTFw.visibleArguments(_cmdXj7YQi)
		const _returnValuerZ4T3yp = await _HelpkoQvbtE.longestSubcommandTermLength(_cmdstBlyjB, _helperLBmUTFw)
		const _cmdDcChO2Q = 6.281127670090971;
		const _helperi8Wagaj = "byzcVYQYYhspc1gRJF38sDYj4ZY1mLsgdUnepYkxUiruHTbmCFMEC4aFW8kT3GOX7uvIMVVVe4aQqFIG7";
		const _returnValueUTVOSES = await _HelpkoQvbtE.longestArgumentTermLength(_cmdDcChO2Q, _helperi8Wagaj)
	});

	it('test for Help', async () => {
		const _HelpTQCmmEt = new Help()
		const _argumentCTYAizg = "AKS8NEcWovIFAj4rbBNcsvcNIEMtk9a8dlEQEyHoV7bcdS00PyEx7JIOtMQUrYJSVp6U";
		const _returnValueUI8rAbt = await _HelpTQCmmEt.argumentDescription(_argumentCTYAizg)
		const _commandsa7GrRI2 = {
		
	}
		const _returnValueP5abCZK = "LT6ore6to9ChlLoAc";
		const __hasImplicitHelpCommandtqMHG8G = () => { return _returnValueP5abCZK };
		const __helpCommandnameAndArgsxDeFFdN = {
		
	}
		const _returnValueEQg9Ee9 = null;
		const _createCommandGOaYRMy = () => { return _returnValueEQg9Ee9 };
		const _arrayValuewJcqQO = null;
		const __helpCommandDescriptionLOpmYdV = [_arrayValuewJcqQO]
		const _cmdbJ9Opxd = {
			"commands": _commandsa7GrRI2,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandtqMHG8G,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsxDeFFdN,
		"createCommand": _createCommandGOaYRMy,
		"_helpCommandDescription": __helpCommandDescriptionLOpmYdV
	}
		const _returnValueVSUvFko = await _HelpTQCmmEt.visibleCommands(_cmdbJ9Opxd)
		const _arrayValueOTCJcPK = true;
		const _cmd5hRQdQ = [_arrayValueOTCJcPK]
		const _returnValuePrGUqai = await _HelpTQCmmEt.subcommandTerm(_cmd5hRQdQ)
	});

	it('test for Help', async () => {
		const _HelpgM3c24 = new Help()
		const _cmdEH2Su0I = true;
		const _helperMbDtmIJ = "L1gR0iyttoaiQuTMiWD4fRjqiHbQDrJZRvhNjJKWJhPQAm4icJC55GSn";
		const _returnValueHYCwhfr = await _HelpgM3c24.longestSubcommandTermLength(_cmdEH2Su0I, _helperMbDtmIJ)
	});

	it('test for Help', async () => {
		const _HelpgofjAmB = new Help()
		const _returnValued0MO4GF = -1.7050845741760874;
		const _matchVvvmJhQ = () => { return _returnValued0MO4GF };
		const _returnValueH4TfSzX = null;
		const _substrYsDqLhN = () => { return _returnValueH4TfSzX };
		const _strwOCPn7 = {
			"match": _matchVvvmJhQ,
		"substr": _substrYsDqLhN
	}
		const _widthXvbm4o7 = 2.740759890640515;
		const _indentgskCPhx = -6.5829407423306066;
		const _minColumnWidthUmFGxF = -7.280785642736547;
		const _returnValuesCvt7V6 = await _HelpgofjAmB.wrap(_strwOCPn7, _widthXvbm4o7, _indentgskCPhx, _minColumnWidthUmFGxF)
		const _cmdd9ltis2 = "dJN";
		const _returnValueHjyIrGM = await _HelpgofjAmB.visibleArguments(_cmdd9ltis2)
		const _cmdu9duVlJ = "FXcbWc7eN1U6yz5yG8tEhIVl0ndhMmHUBYtK";
		const _returnValueguDE8Yr = await _HelpgofjAmB.visibleOptions(_cmdu9duVlJ)
	});

	it('test for Help', async () => {
		const _HelpCXcFnQK = new Help()
		const _argChoiceszrq4yh = {
		
	}
		const _negate0YKMAy = null;
		const _defaultValuePhjtrT1 = undefined;
		const _defaultValueDescriptionyXAGbBs = true;
		const _envVarpiYke2L = undefined;
		const _descriptionYuSpoIt = undefined;
		const _optionUEsYfyo = {
			"argChoices": _argChoiceszrq4yh,
		"negate": _negate0YKMAy,
		"defaultValue": _defaultValuePhjtrT1,
		"defaultValueDescription": _defaultValueDescriptionyXAGbBs,
		"envVar": _envVarpiYke2L,
		"description": _descriptionYuSpoIt
	}
		const _returnValuexShN05h = await _HelpCXcFnQK.optionDescription(_optionUEsYfyo)
		const _returnValueDVxiWEB = false;
		const _cmdi2o9497 = () => { return _returnValueDVxiWEB };
		const _helperT9KIsP = "qFUHEP3mNnXFyMT4AOL3JH4C4p3A3eA6CMYEAWFzGI6Wza";
		const _returnValueYfMCS9j = await _HelpCXcFnQK.longestOptionTermLength(_cmdi2o9497, _helperT9KIsP)
		const _argumente2Iwoo0 = "RMTD3sQICuuqZGNh8q1YBGVmPPLXCYkKQsDHovPF42QMOyzJiIE6FIyy3jgBI4LYFRvNFdEn1pHeei6cfjT9M";
		const _returnValueSQGqKJC = await _HelpCXcFnQK.argumentTerm(_argumente2Iwoo0)
		const _arrayValuelvrVPb = "d8w98XOrDyim8fuIjaOkx4fHdSvTLsOD3xySKvIf63L4CRFCpK";
		const _arrayValuejEDRTnI = undefined;
		const _arrayValuelPaDEDU = {
		
	}
		const _cmdY5fO6PY = [_arrayValuelvrVPb, _arrayValuejEDRTnI, _arrayValuelPaDEDU]
		const _helperPW3oIu5 = "IOjN9alrmCYqBL7b49mpUxsb5JEpiWe";
		const _returnValuefHpVp8O = await _HelpCXcFnQK.longestSubcommandTermLength(_cmdY5fO6PY, _helperPW3oIu5)
		const _optionsIyezwgP = {
		
	}
		const __hasHelpOptionsIwRRkC = null;
		const __helpShortFlageHJ4Ds = "mead2PqMwMR69VyfCPB5m4FytHumGzGFTShGCJV1EK4lP461kPc4GEbQjoMCguLWPLFDGZnoB";
		const _returnValueSDAMzIX = "2s8Ncqhxyj3njaovspmcV34n3Psxc";
		const __findOptionmSitYtN = () => { return _returnValueSDAMzIX };
		const __helpLongFlag4MoKdE = null;
		const _returnValueOrcOLJN = 9.326287400584789;
		const _createOptionSDdeiAa = () => { return _returnValueOrcOLJN };
		const __helpDescriptionrKTPCt1 = undefined;
		const _returnValueAduHkvt = {
		
	}
		const __helpFlagsEvEGH6K = () => { return _returnValueAduHkvt };
		const _cmdewvpzKa = {
			"options": _optionsIyezwgP,
		"_hasHelpOption": __hasHelpOptionsIwRRkC,
		"_helpShortFlag": __helpShortFlageHJ4Ds,
		"_findOption": __findOptionmSitYtN,
		"_helpLongFlag": __helpLongFlag4MoKdE,
		"createOption": _createOptionSDdeiAa,
		"_helpDescription": __helpDescriptionrKTPCt1,
		"_helpFlags": __helpFlagsEvEGH6K
	}
		const _returnValueqD2GdVf = await _HelpCXcFnQK.visibleOptions(_cmdewvpzKa)
	});

	it('test for Help', async () => {
		const _HelpvcPTH5D = new Help()
		const _strJshEDyb = "CItIoWVPavGX8HLARvQuAT";
		const _widthYmqy2uz = -7.18748536495376;
		const _indentysbCuvm = 4.116315602068536;
		const _minColumnWidthZbYPbE = 1.4699724049383907;
		const _returnValueYy6AD32 = await _HelpvcPTH5D.wrap(_strJshEDyb, _widthYmqy2uz, _indentysbCuvm, _minColumnWidthZbYPbE)
		const _returnValuet2ImUXB = undefined;
		const _cmdHFv8TxU = () => { return _returnValuet2ImUXB };
		const _arrayValuepEsH5jj = 7.005380346359988;
		const _arrayValued2vsxTl = "2OfOZNm2s7YSnzRgZzz3zvpXjexP2JT2TkDjjYJ8TTPTb2mW7bhSX";
		const _helperjZU3Du4 = [_arrayValuepEsH5jj, _arrayValued2vsxTl]
		const _returnValueE2b9Cn7 = await _HelpvcPTH5D.longestSubcommandTermLength(_cmdHFv8TxU, _helperjZU3Du4)
		const _optionLfyPys4 = false;
		const _returnValuellT5boR = await _HelpvcPTH5D.optionTerm(_optionLfyPys4)
	});

	it('test for Help', async () => {
		const _HelpADEvIk8 = new Help()
		const __namefF4pzVj = {
		
	}
		const __aliasesPYMvYFM = {
		
	}
		const _arrayValueVYaNNac = false;
		const _returnValuevBaIfPR = [_arrayValueVYaNNac]
		const _parentAg6dx9N = () => { return _returnValuevBaIfPR };
		const _returnValueLTHyrO = []
		const _usageboveRT7 = () => { return _returnValueLTHyrO };
		const _cmdkOItUvi = {
			"_name": __namefF4pzVj,
		"_aliases": __aliasesPYMvYFM,
		"parent": _parentAg6dx9N,
		"usage": _usageboveRT7
	}
		const _returnValueo8AURoQ = await _HelpADEvIk8.commandUsage(_cmdkOItUvi)
		const _arrayValueEoAIYZM = "wFfETnKFVrgRca1Aepn8rK6nYXgSjAJiCFVsR9dUDMiRutnIhTwrothuzvIV1xMkUEKyXaWjD8E2WXpaUpb";
		const _arrayValuesGQ0Yo = null;
		const _arrayValuefrvo5Ud = undefined;
		const _cmdlnpVgq6 = [_arrayValueEoAIYZM, _arrayValuesGQ0Yo, _arrayValuefrvo5Ud]
		const _returnValueH819R3F = true;
		const _returnValuemXJjwxF = () => { return _returnValueH819R3F };
		const _visibleArgumentsjtn2lJs = () => { return _returnValuemXJjwxF };
		const _returnValueHas6BSY = {
		
	}
		const _argumentTermoAr6yO0 = () => { return _returnValueHas6BSY };
		const _helperGjT7kkU = {
			"visibleArguments": _visibleArgumentsjtn2lJs,
		"argumentTerm": _argumentTermoAr6yO0
	}
		const _returnValueMYOQJ3w = await _HelpADEvIk8.longestArgumentTermLength(_cmdlnpVgq6, _helperGjT7kkU)
		const _returnValueRwvCPhx = "U6H2gptmvuqLGJCKjrnuvFEUuZu6DqxlthvgPnSXlnZy2FHq9";
		const _namemhz7SEQ = () => { return _returnValueRwvCPhx };
		const _cmdiN6Qlg = new Command(_namemhz7SEQ)
		const _configurationPVg6H4z = undefined;
		const _returnValueLY7qWG1 = await _cmdiN6Qlg.configureHelp(_configurationPVg6H4z)
		const _returnValueRAjsXox = await _HelpADEvIk8.subcommandDescription(_cmdiN6Qlg)
	});

	it('test for Help', async () => {
		const _HelpTgXpATT = new Help()
		const _arrayValuea2ecOLt = null;
		const _arrayValueOyiSuCR = "Oa9q1BiQ5hsGmPHTjoRMr0UaVcVJEcIOOIyWNdQTOhzWO65np7nI5iXUPG";
		const _returnValuengRo1C = null;
		const _arrayValueZgIA6yU = () => { return _returnValuengRo1C };
		const _returnValuepP5kFIP = [_arrayValueOyiSuCR, _arrayValueZgIA6yU]
		const _arrayValueXuNmmCr = () => { return _returnValuepP5kFIP };
		const _argChoicesGSnpAr = [_arrayValuea2ecOLt, _arrayValueXuNmmCr]
		const _negateIGuI2r = null;
		const _defaultValueNIRT034 = undefined;
		const _defaultValueDescriptionRl43Sjz = undefined;
		const _envVarHaGCZak = undefined;
		const _description1DD71y = undefined;
		const _optionclu19EP = {
			"argChoices": _argChoicesGSnpAr,
		"negate": _negateIGuI2r,
		"defaultValue": _defaultValueNIRT034,
		"defaultValueDescription": _defaultValueDescriptionRl43Sjz,
		"envVar": _envVarHaGCZak,
		"description": _description1DD71y
	}
		const _returnValueTdp7vwh = await _HelpTgXpATT.optionDescription(_optionclu19EP)
		const _cmdYYxZhU6 = "imIEKwv1qhKi5TDo4izVGoN85fTqPyG1nCUX1FlD2LRNQbWSYqNpX15INzlIcMNzg8YrdzcKtxYkCjbeB";
		const _returnValuecLvd6o1 = await _HelpTgXpATT.commandUsage(_cmdYYxZhU6)
		const _cmds5XwLjH = 9.965489334975388;
		const _helperC9owSnQ = new Help()
		const _cmdPs9o1Q7 = undefined;
		const _helperEDcw21V = new Help()
		const _cmdP8jrcEy = 4.175432079566335;
		const _returnValueZ0bG8DW = null;
		const _helperRwgO2A6 = () => { return _returnValueZ0bG8DW };
		const _returnValueZIB1A6h = await _helperEDcw21V.padWidth(_cmdP8jrcEy, _helperRwgO2A6)
		const _cmdv6RC7j = false;
		const _returnValuezOmtm7J = "iIa7zedkmNqA2xbGBRDPtcU3cg0Q6XxehnjqeGLRQxuY2zoDgqbNJUVSNkd6MXu4CurztcuG8LDJc86StCpu";
		const _helperjuqG9Ct = () => { return _returnValuezOmtm7J };
		const _returnValueMHjimAT = await _helperEDcw21V.padWidth(_cmdv6RC7j, _helperjuqG9Ct)
		const _arrayValuecnFM1G2 = false;
		const _arrayValue3LB5L4 = false;
		const _optionkK3jfrA = [_arrayValuecnFM1G2, _arrayValue3LB5L4]
		const _returnValueU2BQuaw = await _helperEDcw21V.optionTerm(_optionkK3jfrA)
		const _optionxECdF3C = "gbke0nO7vBkP8QMnTGRJPGT5jd6WpG3HlQUkPUGDCV";
		const _returnValueLYyD8x4 = await _helperEDcw21V.optionDescription(_optionxECdF3C)
		const _returnValuevfsCUGg = await _helperC9owSnQ.formatHelp(_cmdPs9o1Q7, _helperEDcw21V)
		const _returnValuesd7fgE = {
		
	}
		const _slicedmXikin = () => { return _returnValuesd7fgE };
		const _nameg3vtm5a = {
			"slice": _slicedmXikin
	}
		const _descriptiontbfOaE = false;
		const _cmdgGYATnD = new Argument(_nameg3vtm5a, _descriptiontbfOaE)
		const _fnDZLyLUs = undefined;
		const _returnValueHbuAUGa = await _cmdgGYATnD.argParser(_fnDZLyLUs)
		const _valueHSFgveE = {
		
	}
		const _descriptionab2YkEo = undefined;
		const _returnValue1wDupP = await _cmdgGYATnD.default(_valueHSFgveE, _descriptionab2YkEo)
		const _arrayValueytm7Wyd = undefined;
		const _arrayValueTcQ6s3b = undefined;
		const _arrayValueRwYEy3 = [_arrayValueTcQ6s3b]
		const _returnValueIlI0Wk0 = [_arrayValueRwYEy3]
		const _arrayValueXuSib3i = () => { return _returnValueIlI0Wk0 };
		const _valuesXYs9RrE = [_arrayValueytm7Wyd, _arrayValueXuSib3i]
		const _returnValueezb7h9D = await _cmdgGYATnD.choices(_valuesXYs9RrE)
		const _returnValueMmZA0oR = await _cmdgGYATnD.argRequired()
		const _returnValuerEz8bAz = await _helperC9owSnQ.commandDescription(_cmdgGYATnD)
		const _arrayValueFGa3xKL = {
		
	}
		const _cmdDb0GT0k = [_arrayValueFGa3xKL]
		const _returnValueRM1hRzG = await _helperC9owSnQ.commandDescription(_cmdDb0GT0k)
		const _returnValuebfpXXRo = await _HelpTgXpATT.longestOptionTermLength(_cmds5XwLjH, _helperC9owSnQ)
	});

	it('test for Help', async () => {
		const _HelpE3KgU7b = new Help()
		const _returnValueuWG240t = null;
		const _optionG9VvTe = () => { return _returnValueuWG240t };
		const _returnValueAVo5ZXc = await _HelpE3KgU7b.optionDescription(_optionG9VvTe)
		const _arrayValueQgRaRVH = "IUbMFQwLzOPKbAJhEf5iwUc7wF6dmyjtufWWmkNDecmFwWvBy6Xp5SpkTlF";
		const _arrayValueKDEzDrS = [_arrayValueQgRaRVH]
		const _arrayValuesoL9wV9 = "zSqCrcuXsQiz5kG6W6boXqGO6yfTyt5SLlYITtuwuRbEhZCMeae326Fa5umtEJSVd3LJQC7ytft";
		const _arrayValueyudAfeF = true;
		const _returnValueovEzddj = null;
		const _arrayValueFu5OfDb = () => { return _returnValueovEzddj };
		const _arrayValueQspTLYv = undefined;
		const _arrayValuew4bzl7 = [_arrayValueFu5OfDb, _arrayValueQspTLYv]
		const _arrayValueWmMvfQC = [_arrayValueyudAfeF, _arrayValuew4bzl7]
		const _arrayValueBYW2xeF = undefined;
		const _argChoicesUyx6lUo = [_arrayValueKDEzDrS, _arrayValuesoL9wV9, _arrayValueWmMvfQC, _arrayValueBYW2xeF]
		const _defaultValueMfgp88c = undefined;
		const _defaultValueDescriptionaF1oTQw = false;
		const _descriptionTXHlVQe = -8.7982231255368;
		const _argumentYVZkaC = {
			"argChoices": _argChoicesUyx6lUo,
		"defaultValue": _defaultValueMfgp88c,
		"defaultValueDescription": _defaultValueDescriptionaF1oTQw,
		"description": _descriptionTXHlVQe
	}
		const _returnValueJauMZUX = await _HelpE3KgU7b.argumentDescription(_argumentYVZkaC)
		const _cmdDRdQCmI = 3.0940953446369885;
		const _returnValueoMyjg38 = false;
		const _visibleOptions0pZxsd = () => { return _returnValueoMyjg38 };
		const _returnValueq96h5Q = undefined;
		const _optionTermgt1Gca8 = () => { return _returnValueq96h5Q };
		const _helperL72Anmr = {
			"visibleOptions": _visibleOptions0pZxsd,
		"optionTerm": _optionTermgt1Gca8
	}
		const _returnValueSqVgXsK = await _HelpE3KgU7b.longestOptionTermLength(_cmdDRdQCmI, _helperL72Anmr)
		const _cmdHjwJ5gJ = "4uqncggu5tB1tFPwRxEel2iEsnEntdEymCFC6dinG0jttmbH9FGLcCSrLJ0bq0E9TqgsbLtKHYn1i";
		const _returnValuekxOWkQD = await _HelpE3KgU7b.subcommandTerm(_cmdHjwJ5gJ)
	});

	it('test for Help', async () => {
		const _HelpVpuifgK = new Help()
		const _strbc6LjT2 = "QodgtxVJbMLUtU1qkGM0JN8suFdKfhGCPnIVZpsIayr6UQAdyYCXfCYY5y3HIWImP7IVwboyaULrx75pM2SMYNhyUDQ3LcAuKS";
		const _widthFkc1utZ = -5.3376394430227965;
		const _indentk4jQvPJ = -4.555686197967599;
		const _minColumnWidthBA8hM7f = -8.963013043058043;
		const _returnValuesPJf37W = await _HelpVpuifgK.wrap(_strbc6LjT2, _widthFkc1utZ, _indentk4jQvPJ, _minColumnWidthBA8hM7f)
		const _optionOcwEnsB = "qumShSjBfFzQirtTCxvVjMZUYyTm4OKyTfySMkFN3OucG8idY7jiRyEPqgo6v";
		const _returnValueRpUj1fO = await _HelpVpuifgK.optionTerm(_optionOcwEnsB)
		const _returnValuehOimQ9L = true;
		const _namePqGcZEo = () => { return _returnValuehOimQ9L };
		const _argumentJvgLYpj = {
			"name": _namePqGcZEo
	}
		const _returnValueyNPIXit = await _HelpVpuifgK.argumentTerm(_argumentJvgLYpj)
		const _strL3l4UnE = "cs3JnpipgFiv1eusU7u3UNVpc1jxasThscCTHYv51";
		const _widthWCU5M7m = 5.109575366604869;
		const _indentUqVgekx = 4.834889634752287;
		const _minColumnWidthBCSpr7 = 4.577547436068876;
		const _returnValueIvPNP9P = await _HelpVpuifgK.wrap(_strL3l4UnE, _widthWCU5M7m, _indentUqVgekx, _minColumnWidthBCSpr7)
	});

	it('test for Help', async () => {
		const _HelpY9AbHns = new Help()
		const _namezLEPFy = 4.400262675687689;
		const _cmdHN0U2uW = new Command(_namezLEPFy)
		const _allowExcess0h1Vwj = false;
		const _returnValuemosHNG0 = await _cmdHN0U2uW.allowExcessArguments(_allowExcess0h1Vwj)
		const _returnValuesPrekGS = await _cmdHN0U2uW._hasImplicitHelpCommand()
		const _configurationTksuNlk = undefined;
		const _returnValueIG9LhN8 = await _cmdHN0U2uW.configureHelp(_configurationTksuNlk)
		const _returnValueGb9lBwA = await _HelpY9AbHns.visibleOptions(_cmdHN0U2uW)
		const _returnValueRU3CqpW = null;
		const _cmdfkGR0Fn = () => { return _returnValueRU3CqpW };
		const _returnValuejHSax6d = await _HelpY9AbHns.subcommandTerm(_cmdfkGR0Fn)
	});

	it('test for Help', async () => {
		const _HelpKUNTuBU = new Help()
		const _nameTJI4KfL = 8.058194008247948;
		const _cmdiQZJFb = new Command(_nameTJI4KfL)
		const _positionalzEFuwYX = false;
		const _returnValuelSnUuEa = await _cmdiQZJFb.enablePositionalOptions(_positionalzEFuwYX)
		const _nameIzQIGVu = null;
		const _returnValueQTBJ8eM = await _cmdiQZJFb.createCommand(_nameIzQIGVu)
		const _strJVBYC9s = undefined;
		const _returnValueWaGMPWL = await _cmdiQZJFb.name(_strJVBYC9s)
		const _returnValueWWUpnw4 = await _HelpKUNTuBU.subcommandTerm(_cmdiQZJFb)
		const _argumentreOCkhU = "OTndyHkAUZop7";
		const _returnValuei9yyZ6 = await _HelpKUNTuBU.argumentTerm(_argumentreOCkhU)
		const _cmdCBBuHW = undefined;
		const _returnValueNWgCqwj = false;
		const _visibleArgumentsQXODtQG = () => { return _returnValueNWgCqwj };
		const _returnValueMW20pu = "Va9Y5MA2Yo0xm2jrOlHo4tDCdwjnQaIeu6vXOfyQ9IvmamdiDBop5";
		const _argumentTermE6PUuvg = () => { return _returnValueMW20pu };
		const _helperrMz5RFA = {
			"visibleArguments": _visibleArgumentsQXODtQG,
		"argumentTerm": _argumentTermE6PUuvg
	}
		const _returnValueflBonOp = await _HelpKUNTuBU.longestArgumentTermLength(_cmdCBBuHW, _helperrMz5RFA)
		const _cmd9ACDsf = "cQgwKFqBmJwSPhlalJU9VF9nffIiCINFf4AgCSNHJokyR3c40KzqhfJPT3wRoBA1fKIZ4v8H7TGwDGTwna";
		const _returnValueFJUMxlY = -9.699197528390037;
		const _visibleOptionsHpsD1kN = () => { return _returnValueFJUMxlY };
		const _returnValuerxRN1e9 = "SlwegL0IefoBdWaq7ph";
		const _optionTermHEhNGkf = () => { return _returnValuerxRN1e9 };
		const _helperOOGpl5a = {
			"visibleOptions": _visibleOptionsHpsD1kN,
		"optionTerm": _optionTermHEhNGkf
	}
		const _returnValueIBpdhHJ = await _HelpKUNTuBU.longestOptionTermLength(_cmd9ACDsf, _helperOOGpl5a)
		const _returnValueZ6OJC79 = null;
		const _arrayValueX12MHIp = () => { return _returnValueZ6OJC79 };
		const _arrayValued7zHWo = undefined;
		const _optionhb3SRiR = [_arrayValueX12MHIp, _arrayValued7zHWo]
		const _returnValueqz1CgyU = await _HelpKUNTuBU.optionTerm(_optionhb3SRiR)
	});

	it('test for Help', async () => {
		const _HelpHrVXY1u = new Help()
		const _returnValueChPW6WK = 1.9891404630617675;
		const _slicefABmGBD = () => { return _returnValueChPW6WK };
		const _nameqSBBDG = {
			"slice": _slicefABmGBD
	}
		const _descriptionjpf6wFE = []
		const _optiontJXENQt = new Argument(_nameqSBBDG, _descriptionjpf6wFE)
		const _valueuiIYuMe = "65HGpdYnDIcOcLesRWeizyJ6WLXtL5anN3W5TfSCjzNeU2TPEVOZNLtwFCCzfDLQYJXjBzkscZBJtjHOEbDOyR6HKNOP9MA";
		const _descriptionCEgL1pu = undefined;
		const _returnValuepp40TRA = await _optiontJXENQt.default(_valueuiIYuMe, _descriptionCEgL1pu)
		const _returnValueMcCeAIC = await _optiontJXENQt.argOptional()
		const _returnValuefx7Vio1 = await _HelpHrVXY1u.optionDescription(_optiontJXENQt)
		const _cmdCUPp01p = false;
		const _returnValuezlYsb4s = "ABitUSS8huSlgFtVgoj7bskrr0z6MgBNPlMWwRwuVphKBlOUP";
		const _visibleOptionsFELFaPA = () => { return _returnValuezlYsb4s };
		const _arrayValuedm5yPRe = undefined;
		const _arrayValuehDZ1grk = false;
		const _arrayValue56hjp8 = "mED6NxkyWBK65wP6SQxlR3f6cmIwugFGRl1444tkHOyksjDwFuEEscf0AfO4ggMpLOIO7FqpETdm9yUP6";
		const _returnValuea9o8Ssl = [_arrayValuedm5yPRe, _arrayValuehDZ1grk, _arrayValue56hjp8]
		const _optionTermC0NhRJ2 = () => { return _returnValuea9o8Ssl };
		const _helperlbjxfqF = {
			"visibleOptions": _visibleOptionsFELFaPA,
		"optionTerm": _optionTermC0NhRJ2
	}
		const _returnValueIFbGLO0 = await _HelpHrVXY1u.longestOptionTermLength(_cmdCUPp01p, _helperlbjxfqF)
	});

	it('test for Help', async () => {
		const _Helpq9lSfC6 = new Help()
		const _flagsdeF3isy = "y64y2Sm7KThzbrQYzUaQszGKjBWDknyNHrlyLqrC66Ymqre54GUBat4a7j3Jgg9ZqBkhoFM4vZFkITsDGhFCTVodoIb6";
		const _descriptionmUPUgDm = "sxRBetuqIAjqTeX1yUUgz3rPcFcbdEqOEQocXwt4SlfGn2b9seEXadU4hNtlk";
		const _cmdnV6Swg = new Option(_flagsdeF3isy, _descriptionmUPUgDm)
		const _fnbh8BwcG = undefined;
		const _returnValueWCOdpZe = await _cmdnV6Swg.argParser(_fnbh8BwcG)
		const _returnValuea6zhx6X = await _cmdnV6Swg.name()
		const _valuezR9CArt = undefined;
		const _descriptionjBZaN68 = false;
		const _returnValueLjo1RtG = await _cmdnV6Swg.default(_valuezR9CArt, _descriptionjBZaN68)
		const _argPOj6czn = "8WwKm4aQKp99xjzsUTVk3poaloP2paBTjGuRLfsCLswYN6UKVHeMt4";
		const _returnValueMgojSi7 = await _cmdnV6Swg.is(_argPOj6czn)
		const _returnValueqhTgUYj = null;
		const _arrayValueLVNrKBb = () => { return _returnValueqhTgUYj };
		const _valuesQn4V8ft = [_arrayValueLVNrKBb]
		const _returnValueA8YkoOj = await _cmdnV6Swg.choices(_valuesQn4V8ft)
		const _returnValuebjw1g5S = await _Helpq9lSfC6.commandDescription(_cmdnV6Swg)
		const _cmdNZTZRsn = null;
		const _helperkcPTQGP = "95dTvdJHHkdrkmLi90ttnvDX1Wl2UdBfREHcWcGPIEfTvV2CQ46bVnIdLFt8J";
		const _returnValuek0Wr0TY = await _Helpq9lSfC6.padWidth(_cmdNZTZRsn, _helperkcPTQGP)
		const _argumentG1aZf60 = undefined;
		const _returnValuewIXK72K = await _Helpq9lSfC6.argumentDescription(_argumentG1aZf60)
		const _cmdlNE0JXJ = undefined;
		const _arrayValueQGMLUck = 8.080764624069218;
		const _arrayValueIZC1hz9 = false;
		const _arrayValueSkekmZQ = -7.198067519622059;
		const _arrayValuecvscUjM = -8.562585584381942;
		const _helpern1h045z = [_arrayValueQGMLUck, _arrayValueIZC1hz9, _arrayValueSkekmZQ, _arrayValuecvscUjM]
		const _returnValueU1dcsOz = await _Helpq9lSfC6.longestArgumentTermLength(_cmdlNE0JXJ, _helpern1h045z)
		const _cmdRVUX1ZY = true;
		const _returnValueswXe2C = await _Helpq9lSfC6.visibleOptions(_cmdRVUX1ZY)
	});

	it('test for Help', async () => {
		const _HelpBXFt6j5 = new Help()
		const _nametG2szof = "OJP5Mbbidm02aGz78cAjGZDORdZcBAjq4mV0q3DszwbaZ70HjD4gWDU1yg1f7Q22KBSD";
		const _cmdypSR5UK = new Command(_nametG2szof)
		const _argikgX5Uz = true;
		const _returnValuen04Exou = await _cmdypSR5UK._findOption(_argikgX5Uz)
		const _strdln0LG2 = undefined;
		const _returnValuepbHfPvm = await _cmdypSR5UK.usage(_strdln0LG2)
		const _returnValuer5WU0OV = await _HelpBXFt6j5.visibleCommands(_cmdypSR5UK)
		const _cmdTwzRfDD = "EC84QW66LWViO4n86BeIJrttf4S2zEA6oXbySKBLYjeAdGrWhpPfnrQKw41biU54";
		const _returnValueC6vczss = await _HelpBXFt6j5.visibleCommands(_cmdTwzRfDD)
		const _namecUFcHhA = null;
		const _cmdBHy3psW = new Command(_namecUFcHhA)
		const _arrayValuevudbws7 = "cKgdou8h9Rb6HGzmfYm0CMagSWDEUNfK1qwUBjPVJueTDbl92QfLexDvt3DL";
		const _arrayValuexOhrea6 = false;
		const _arrayValueA9pQcsw = 1.666972075856851;
		const _arrayValueY90uzML = [_arrayValuevudbws7, _arrayValuexOhrea6, _arrayValueA9pQcsw]
		const _returnValuek4qZDc1 = "QT";
		const _arrayValueVPtEDE = () => { return _returnValuek4qZDc1 };
		const _arrayValue1E9ykD = "SsQW2Zh4oq5LD0R18Kxz4RIGLWXUjEjNo4s2Ve5diKbalQqnyCC";
		const _optionaOBzvl5 = [_arrayValueY90uzML, _arrayValueVPtEDE, _arrayValue1E9ykD]
		const _returnValueoCztKA = await _cmdBHy3psW.optionMissingArgument(_optionaOBzvl5)
		const _arrayValuen4IqTJR = null;
		const _returnValuewW00E6D = [_arrayValuen4IqTJR]
		const _subcommandXc8vm9 = () => { return _returnValuewW00E6D };
		const _argsWE7RO3 = undefined;
		const _returnValueiEKSOMv = await _cmdBHy3psW._executeSubCommand(_subcommandXc8vm9, _argsWE7RO3)
		const _argumentKSPWMgx = null;
		const _returnValueIWbJ2Kc = await _cmdBHy3psW.addArgument(_argumentKSPWMgx)
		const _arrayValuepEKVfKM = "WlPOrkbvWtMkJgO";
		const _arrayValueCmYwy9k = undefined;
		const _argvr9CH7tl = [_arrayValuepEKVfKM, _arrayValueCmYwy9k]
		const _parseOptionsNM2gtW5 = false;
		const _returnValueDtYsSwN = await _cmdBHy3psW.parseAsync(_argvr9CH7tl, _parseOptionsNM2gtW5)
		const _returnValuebtxXfk = await _cmdBHy3psW._checkForMissingMandatoryOptions()
		const _returnValueLVysxbw = await _HelpBXFt6j5.subcommandDescription(_cmdBHy3psW)
	});

	it('test for Help', async () => {
		const _HelpU6kd223 = new Help()
		const _arrayValuerfzB99n = true;
		const _arrayValueiIbvYyw = null;
		const _optionZSmhJ0a = [_arrayValuerfzB99n, _arrayValueiIbvYyw]
		const _returnValueHh703p = await _HelpU6kd223.optionDescription(_optionZSmhJ0a)
		const _nameWhN09rz = {
		
	}
		const _cmde04frXA = new Command(_nameWhN09rz)
		const _aliaspygguR = {
		
	}
		const _returnValueMvkWPmQ = await _cmde04frXA.alias(_aliaspygguR)
		const _strwveQjcJ = "EJp13IMl8N7tj5ov2itmvWUKLyd3PJvPcz9GoqxDYeIuFcBLRyuaIuDBD83NYKqXSLpRB3nyRLjYNFvGhZo";
		const _argsDescriptionlvNptG5 = undefined;
		const _returnValuePB736TB = await _cmde04frXA.description(_strwveQjcJ, _argsDescriptionlvNptG5)
		const _arrayValue9S3zn6 = false;
		const _arrayValueh3bxPMd = 1.1184000309884468;
		const _arrayValuelnGBHSX = null;
		const _keyCFUev2k = [_arrayValue9S3zn6, _arrayValueh3bxPMd, _arrayValuelnGBHSX]
		const _returnValueIR0zD2l = await _cmde04frXA.getOptionValueSource(_keyCFUev2k)
		const _returnValuewDoV60e = await _HelpU6kd223.commandUsage(_cmde04frXA)
		const _cmdZbc9MPw = true;
		const _arrayValueXBddWe1 = 7.447906108557369;
		const _arrayValueLfqwB50 = "";
		const _arrayValuehAKGE8H = "OK1rZhmvkVY6i9oJDNf7YD7AsFCPRwteq6skp1NPYoCjrgji4IyM";
		const _arrayValueJfOIYBv = -7.480614849250804;
		const _arrayValueJa5htmT = [_arrayValueLfqwB50, _arrayValuehAKGE8H, _arrayValueJfOIYBv]
		const _arrayValueAqjba7D = "mVSZIVLtIEgbshorYbOL7Xg5PJsunEhdTYzm5T5KBs5mpr8tMB4g2fjXvr9fefma4JHBppQbXBbD";
		const _arrayValueOKPqmay = [_arrayValueJa5htmT, _arrayValueAqjba7D]
		const _arrayValueCv33GAD = 1.461806078727184;
		const _arrayValueUeMW0WM = -6.974619276885326;
		const _arrayValuenvuKJgN = null;
		const _helperrHcKcN3 = [_arrayValueXBddWe1, _arrayValueOKPqmay, _arrayValueCv33GAD, _arrayValueUeMW0WM, _arrayValuenvuKJgN]
		const _returnValueWOPz1K = await _HelpU6kd223.padWidth(_cmdZbc9MPw, _helperrHcKcN3)
		const _arrayValueaaV6rbI = 9.630349192120732;
		const _arrayValuefA2GZt = false;
		const _arrayValueXI7ZT9a = false;
		const _cmdmYFXt1E = [_arrayValueaaV6rbI, _arrayValuefA2GZt, _arrayValueXI7ZT9a]
		const _returnValueLDidBos = -2.9297257272637625;
		const _visibleOptionsAVNFOxb = () => { return _returnValueLDidBos };
		const _optionTermkaGcMEr = null;
		const _helpervN9VJGl = {
			"visibleOptions": _visibleOptionsAVNFOxb,
		"optionTerm": _optionTermkaGcMEr
	}
		const _returnValueHWHJABi = await _HelpU6kd223.longestOptionTermLength(_cmdmYFXt1E, _helpervN9VJGl)
	});

	it('test for Help', async () => {
		const _HelpxmFkSEB = new Help()
		const _nameYxPp8X8 = "Dkn52dCtOlk5FigLGIttIsDJC62iruT4TT9PpU30rsHbXwVlenS";
		const _cmdARYCiM = new Command(_nameYxPp8X8)
		const _contextOptionsT4mSvGH = 4.197188066096578;
		const _returnValuegHoan0 = await _cmdARYCiM._getHelpContext(_contextOptionsT4mSvGH)
		const _namejPgj0S = "49vlSBWr6WdaoCP2O1WXEICHs7xVkwzSIsx3cyP1f4kV17kyPKWobbX1348laoRXqi3hhV";
		const _arrayValuekgkMbU = undefined;
		const _arrayValueIgnjLbe = true;
		const _descriptionAMKhwO = [_arrayValuekgkMbU, _arrayValueIgnjLbe]
		const _returnValueYJWFi5k = true;
		const _fna1QTNbE = () => { return _returnValueYJWFi5k };
		const _defaultValueVXbSTMU = undefined;
		const _returnValueubL8gVG = await _cmdARYCiM.argument(_namejPgj0S, _descriptionAMKhwO, _fna1QTNbE, _defaultValueVXbSTMU)
		const _errorkPSvIfr = null;
		const _commands6aWTXr = null;
		const _contextOptionsTbUgMLB = {
			"error": _errorkPSvIfr,
		"command": _commands6aWTXr
	}
		const _returnValueyhPWd82 = await _cmdARYCiM.helpInformation(_contextOptionsTbUgMLB)
		const _returnValue28c6pq = await _HelpxmFkSEB.subcommandTerm(_cmdARYCiM)
		const _arrayValuekOTqGDM = "5nx3EmBtpwvCmkPMKUcOQ6jD2lLtwFV6aXLing2xP9yN9lGqjEvKCxNVNKldLD4AbgOFW69PEN9KWnuPI7csBCpgcit";
		const _arrayValuewfbxDf = undefined;
		const _returnValuejz5NPe = [_arrayValuekOTqGDM, _arrayValuewfbxDf]
		const _matchImr0MtH = () => { return _returnValuejz5NPe };
		const _returnValueW59jc5c = {
		
	}
		const _substrIoldkop = () => { return _returnValueW59jc5c };
		const _strYii5mVI = {
			"match": _matchImr0MtH,
		"substr": _substrIoldkop
	}
		const _widthToRRODC = -3.3622715847324134;
		const _indentyo0IQ32 = 9.155391132527633;
		const _minColumnWidthJifSopz = 9.082638889573758;
		const _returnValueO4cNjdx = await _HelpxmFkSEB.wrap(_strYii5mVI, _widthToRRODC, _indentyo0IQ32, _minColumnWidthJifSopz)
		const _cmdz0Z12b1 = true;
		const _helperxsCD4o = "98mNzqa7skog48EYXGIglyH";
		const _returnValueRbq3A1z = await _HelpxmFkSEB.longestOptionTermLength(_cmdz0Z12b1, _helperxsCD4o)
	});

	it('test for Help', async () => {
		const _HelpX5x7MsG = new Help()
		const _cmdMjlCjsD = 7.829391093415595;
		const _arrayValueiEh9qU0 = undefined;
		const _arrayValueln6vFyP = undefined;
		const _returnValueUvWJwlT = [_arrayValueiEh9qU0, _arrayValueln6vFyP]
		const _visibleArgumentsAwqqiUr = () => { return _returnValueUvWJwlT };
		const _returnValuegzOTxA7 = false;
		const _argumentTermhuLejsT = () => { return _returnValuegzOTxA7 };
		const _helperZQC20N = {
			"visibleArguments": _visibleArgumentsAwqqiUr,
		"argumentTerm": _argumentTermhuLejsT
	}
		const _returnValuet5mDgx3 = await _HelpX5x7MsG.longestArgumentTermLength(_cmdMjlCjsD, _helperZQC20N)
		const _returnValueAigHlv = -5.70100291194152;
		const _slicekdUD18w = () => { return _returnValueAigHlv };
		const _nameAEhx2W = {
			"slice": _slicekdUD18w
	}
		const _descriptionLW3cOFv = {
		
	}
		const _argumentdBYaSTh = new Argument(_nameAEhx2W, _descriptionLW3cOFv)
		const _returnValuenkQna5d = await _argumentdBYaSTh.argRequired()
		const _valueitYjwg = undefined;
		const _descriptionmbF9hHX = undefined;
		const _returnValueyB5hFqF = await _argumentdBYaSTh.default(_valueitYjwg, _descriptionmbF9hHX)
		const _valueoLkjdhu = {
		
	}
		const _descriptionaBfgkl3 = {
		
	}
		const _returnValuerkoDdZC = await _argumentdBYaSTh.default(_valueoLkjdhu, _descriptionaBfgkl3)
		const _fntLJv1WH = undefined;
		const _returnValueAxzbbz = await _argumentdBYaSTh.argParser(_fntLJv1WH)
		const _returnValuemlbI208 = await _argumentdBYaSTh.argRequired()
		const _returnValue0aKutG = await _HelpX5x7MsG.argumentDescription(_argumentdBYaSTh)
		const _cmdMk9KZpy = {
		
	}
		const _sortSubcommandsvYtQnfM = {
		
	}
		const _returnValue87CYIO = {
		
	}
		const _subcommandTermOoYanUp = () => { return _returnValue87CYIO };
		const _helpersorDjwZ = {
			"sortSubcommands": _sortSubcommandsvYtQnfM,
		"subcommandTerm": _subcommandTermOoYanUp
	}
		const _returnValueHWirSkK = await _HelpX5x7MsG.longestSubcommandTermLength(_cmdMk9KZpy, _helpersorDjwZ)
		const _arrayValueKI3puLs = "Uzm8ktVJW8SFYG7YmEXixT935dSy760FtEppQpUqMD7jAQp";
		const _arrayValueXL1BiEb = "11oLo7K";
		const _arrayValuepPYpta9 = "efAMzYLRVdaKIDf";
		const _arrayValueeXOhrXT = "GjLjEO5xNEZUQu8N6g14fxBKSgeqQtBEocHYvyzA";
		const _arrayValuezj3XCAy = null;
		const _arrayValueYVTCUTT = [_arrayValueXL1BiEb, _arrayValuepPYpta9, _arrayValueeXOhrXT, _arrayValuezj3XCAy]
		const _cmdtMWCEnm = [_arrayValueKI3puLs, _arrayValueYVTCUTT]
		const _returnValueOpADXP7 = await _HelpX5x7MsG.subcommandDescription(_cmdtMWCEnm)
	});

	it('test for Help', async () => {
		const _HelpWw1CnVn = new Help()
		const _arrayValueNj1ZyYc = "T6zvqJZ4ltQQfmMWUnz175TWC1HNhu8TP";
		const _arrayValuetDolysE = null;
		const _arrayValueb5CTdgt = [_arrayValuetDolysE]
		const _commandsGWB2xSu = [_arrayValueNj1ZyYc, _arrayValueb5CTdgt]
		const _returnValuele6hFuf = {
		
	}
		const __hasImplicitHelpCommandpAb8buT = () => { return _returnValuele6hFuf };
		const __helpCommandnameAndArgsQRNcK0 = {
		
	}
		const _returnValue8dnMDx = false;
		const _createCommandCckRf48 = () => { return _returnValue8dnMDx };
		const __helpCommandDescriptionDjsH0lv = undefined;
		const _cmdXH4sPAR = {
			"commands": _commandsGWB2xSu,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandpAb8buT,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsQRNcK0,
		"createCommand": _createCommandCckRf48,
		"_helpCommandDescription": __helpCommandDescriptionDjsH0lv
	}
		const _returnValueQ3PGeK = await _HelpWw1CnVn.visibleCommands(_cmdXH4sPAR)
		const _cmdD5wkHIY = {
		
	}
		const _helperYsv27K5 = "PkSGWEkxOoIjxsaRJM0U3zpOvQwKBfIj9EJeL3UWKwd78H8K";
		const _returnValuehGGi4rw = await _HelpWw1CnVn.padWidth(_cmdD5wkHIY, _helperYsv27K5)
		const _cmdcMREWe0 = "oFErnxwCEweN5x9gB0eCAlg6awJTmMtXNKeSzXVNJ3boG0UhsUsV8r8HurZ5jzZgGzCmhyrTaBEm5TrY";
		const _helperelMW6mH = "MQ2zW5zxRhtyNhIuGvcFWKtbJjmvtH2Zl7oTOmkdQVVvFrrJ6VvEAPSls2ogLJKHImV9JGThtfKqxu";
		const _returnValuea8QwImP = await _HelpWw1CnVn.longestArgumentTermLength(_cmdcMREWe0, _helperelMW6mH)
		const _returnValue6hUYmy = false;
		const _includesvDyoX2r = () => { return _returnValue6hUYmy };
		const _flagsl3UuD4u = {
			"includes": _includesvDyoX2r
	}
		const _arrayValueQUNHCL = false;
		const _descriptionnwwLSO = [_arrayValueQUNHCL]
		const _argumentNSnsdKU = new Option(_flagsl3UuD4u, _descriptionnwwLSO)
		const _hideDED0Tz7 = true;
		const _returnValuexYV8pvE = await _argumentNSnsdKU.hideHelp(_hideDED0Tz7)
		const _hideylJAZix = true;
		const _returnValuewVQcnjR = await _argumentNSnsdKU.hideHelp(_hideylJAZix)
		const _namecpWuCSs = undefined;
		const _returnValuer2q0J18 = await _argumentNSnsdKU.env(_namecpWuCSs)
		const _namevu0KybN = undefined;
		const _returnValueMd6OyhM = await _argumentNSnsdKU.env(_namevu0KybN)
		const _returnValueQH7HO87 = await _HelpWw1CnVn.argumentDescription(_argumentNSnsdKU)
		const _cmdDIrhHKn = "xMmm7bVX7R7PwRO3yW3tn6w";
		const _returnValueAb5T2ka = await _HelpWw1CnVn.subcommandDescription(_cmdDIrhHKn)
	});
})