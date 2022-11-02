export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpS3RrOq1 = new Help()
		const _cmdBI2KE1f = "VhqAPCJqFF4m2nlv6b213epaesZ1QXIhTE2MDfHuMGJeRmM93cCnkGXysYPHR11QkJewyeFNO4KAYDElpm1nqsRItBo";
		const _returnValueQ0yqrb2 = await _HelpS3RrOq1.commandUsage(_cmdBI2KE1f)
		const _arrayValueYqQuPLr = true;
		const _arrayValueFpv9GmG = false;
		const _arrayValuez4QkgdA = "ZogTFDb5YdGdWlMPSSBARyL6O3pm3Ujyl6NmnWs7CL6FvQktNavkz6sbOG5zey9D4n3a3g3XAd2ELWi";
		const _cmdL5dMPWb = [_arrayValueYqQuPLr, _arrayValueFpv9GmG, _arrayValuez4QkgdA]
		const _returnValueJuHWWa = await _HelpS3RrOq1.subcommandDescription(_cmdL5dMPWb)
		const _cmdB1TzufX = null;
		const _helperugijg1j = "vIgUfsxLJroA5KAdgnl9lkQ14F86LQySJeqzOTCFlnCw";
		const _returnValuemUHvh9S = await _HelpS3RrOq1.longestOptionTermLength(_cmdB1TzufX, _helperugijg1j)
		const _optionFn4Uqet = "";
		const _returnValuevki363 = await _HelpS3RrOq1.optionTerm(_optionFn4Uqet)
	});

	it('test for Help', async () => {
		const _HelpRhJkOqy = new Help()
		const _cmdicAfIDc = "NEguqfliMA7kk";
		const _returnValuewad42OZ = await _HelpRhJkOqy.commandDescription(_cmdicAfIDc)
		const _nameOyH8pzQ = -0.014861654418465875;
		const _cmdM2cZOX8 = new Command(_nameOyH8pzQ)
		const _returnValueKQ2oxhE = {
		
	}
		const _optionj0mJtbv = () => { return _returnValueKQ2oxhE };
		const _returnValueB12DuDg = await _cmdM2cZOX8.addOption(_optionj0mJtbv)
		const _arrayValuehbc6Tjj = "m2vdkNWbCxLdeX6Woxf332eZDQKV0YuGxBbzsX4nb4A7BTOuRFNAai5EGMSLjTlXSaSM4bbP4PEx43Ownv0v3ByYXF6k";
		const _arrayValueutnNR7 = "8Tvj5Wma9ryuVjDRmUPJVTAkUMsLov";
		const _argv4gFKvd = [_arrayValuehbc6Tjj, _arrayValueutnNR7]
		const _parseOptionsm84Kyn8 = {
		
	}
		const _returnValueupLyKO1 = await _cmdM2cZOX8.parseAsync(_argv4gFKvd, _parseOptionsm84Kyn8)
		const _returnValueL8w0tYQ = await _cmdM2cZOX8._parseOptionsEnv()
		const _subcommandOaKPDeR = "wrPlmm0kqkXYWlhYBmle2FAPfKh3UeJvnc7NWHFCkobEii0cGmr6pGOgGDMWLxAbBTS3IE2Uvlt";
		const _argsILXvhnl = null;
		const _returnValueIeqTVQ = await _cmdM2cZOX8._executeSubCommand(_subcommandOaKPDeR, _argsILXvhnl)
		const _returnValueNgTTY6Y = await _HelpRhJkOqy.visibleCommands(_cmdM2cZOX8)
		const _cmdbQSNfsk = "aPwSFMeLCur5KFSIxSwQT";
		const _helperWOvUWGC = "nGBlY7uU7kvGJTUreo5YwAL8bwduD2DjxTfMmUEDwtQhg8hHgRrzYUK6V9X7vr8Z9ov8mYWVMncwi1zVAPEPCUcz";
		const _returnValueHWf2zmA = await _HelpRhJkOqy.longestOptionTermLength(_cmdbQSNfsk, _helperWOvUWGC)
	});

	it('test for Help', async () => {
		const _HelpxbMdDwV = new Help()
		const _cmdicTz6z8 = true;
		const _returnValueWEGBCEG = 0.6198391067397591;
		const _helperD69X2EZ = () => { return _returnValueWEGBCEG };
		const _returnValueLEwlll = await _HelpxbMdDwV.longestArgumentTermLength(_cmdicTz6z8, _helperD69X2EZ)
		const _cmdZdHFoGM = "2iGhdEazF8sU3psMI5l";
		const _arrayValueMSVMb7B = null;
		const _arrayValueMmEVeA2 = null;
		const _arrayValueNN096O6 = 4.278915298451496;
		const _arrayValueUNeeqoT = -5.5665554013990075;
		const _arrayValuedSBefMu = -7.862954328480367;
		const _arrayValuel5x6r5t = [_arrayValueMmEVeA2, _arrayValueNN096O6, _arrayValueUNeeqoT, _arrayValuedSBefMu]
		const _arrayValueHW44RXY = 0.613780914490798;
		const _arrayValuetlvX1aG = [_arrayValuel5x6r5t, _arrayValueHW44RXY]
		const _returnValueQBAWuYe = [_arrayValueMSVMb7B, _arrayValuetlvX1aG]
		const _visibleOptionsmXLfxph = () => { return _returnValueQBAWuYe };
		const _returnValueuu5j4y = "tmky5Fkl9QaJ7csFhzn0g";
		const _optionTermDwyB4DJ = () => { return _returnValueuu5j4y };
		const _helperoHdR9gf = {
			"visibleOptions": _visibleOptionsmXLfxph,
		"optionTerm": _optionTermDwyB4DJ
	}
		const _returnValueqml918G = await _HelpxbMdDwV.longestOptionTermLength(_cmdZdHFoGM, _helperoHdR9gf)
		const _arrayValueUWaApX7 = {
		
	}
		const _arrayValueVtk2kte = true;
		const _slicefkAVBNf = [_arrayValueUWaApX7, _arrayValueVtk2kte]
		const _nameTdbnErU = {
			"slice": _slicefkAVBNf
	}
		const _descriptionXNTj0JQ = undefined;
		const _cmdKsKKuKK = new Argument(_nameTdbnErU, _descriptionXNTj0JQ)
		const _returnValuenqsYWCh = await _cmdKsKKuKK.argRequired()
		const _returnValueSIDWNNy = await _cmdKsKKuKK.argRequired()
		const _returnValueYZPKesM = await _cmdKsKKuKK.argOptional()
		const _valuerd6UT4t = undefined;
		const _descriptionnpuUzog = {
		
	}
		const _returnValuegynxvNJ = await _cmdKsKKuKK.default(_valuerd6UT4t, _descriptionnpuUzog)
		const _valueyXGQg31 = undefined;
		const _descriptionpNHQ5H6 = undefined;
		const _returnValueGPVqGyl = await _cmdKsKKuKK.default(_valueyXGQg31, _descriptionpNHQ5H6)
		const _returnValueohx0QE8 = await _HelpxbMdDwV.commandUsage(_cmdKsKKuKK)
		const _namedjcE66Q = "v0g4YcJumFsoSpsD2wSWvIRsfuLz0vRM4s14IsDuURQllGx2oIyFGco764rpKW0n8I7MQflhzQpsIrr1";
		const _descriptionXsJJ3BD = "6C2B9Sb2bi4t9tpv3ZJ7gkGfuWgX1xL6ePWoeidFrf26OV9akyjMtOtiDljelfVMRgP4CPuTsAH6yGVhQYahRi";
		const _cmdYO2Xeae = new Argument(_namedjcE66Q, _descriptionXsJJ3BD)
		const _fnMGguUno = undefined;
		const _returnValueGLi2oSX = await _cmdYO2Xeae.argParser(_fnMGguUno)
		const _returnValuebKXTHsA = await _HelpxbMdDwV.subcommandDescription(_cmdYO2Xeae)
	});

	it('test for Help', async () => {
		const _HelpUCzSVHP = new Help()
		const _argChoicesGCzjMwv = {
		
	}
		const _defaultValueZnbb0OZ = undefined;
		const _arrayValueI8fHF2W = undefined;
		const _arrayValueFpN0S7U = false;
		const _defaultValueDescriptionGzOPmd4 = [_arrayValueI8fHF2W, _arrayValueFpN0S7U]
		const _descriptionWrSgO7T = undefined;
		const _argumentFbjsIMk = {
			"argChoices": _argChoicesGCzjMwv,
		"defaultValue": _defaultValueZnbb0OZ,
		"defaultValueDescription": _defaultValueDescriptionGzOPmd4,
		"description": _descriptionWrSgO7T
	}
		const _returnValueiWAhe8p = await _HelpUCzSVHP.argumentDescription(_argumentFbjsIMk)
		const _cmds4xRClH = "EJlAUvd9oWQsfQ0WmlgMeudBHLrae78eLWyef3skWJHEB";
		const _returnValueyfcVdIa = await _HelpUCzSVHP.commandUsage(_cmds4xRClH)
		const _arrayValueBoMTyUA = "AQ4";
		const _arrayValueHJJwoe = {
		
	}
		const _arrayValueb8EKdbU = {
		
	}
		const _arrayValueWY6NoHf = [_arrayValueBoMTyUA, _arrayValueHJJwoe, _arrayValueb8EKdbU]
		const _arrayValueKRlC8N = "qxTPTPIzz8v03vLVkn74sAlMprgb2zkFrwXDvb84P7RcnioMJhOaGZdctiqXOJwyA8jTbGG4H2trdh";
		const _arrayValue9UzHFI = null;
		const _arrayValuetdjYuP3 = [_arrayValueKRlC8N, _arrayValue9UzHFI]
		const _arrayValueDOZtvfV = "qgUiSoGrxcsyCmIOJp5IdYmGQqjOKLJ3OJDiFQJjzUDsLnP5bTetGK67IbcNZ8DTR4XTmPC";
		const _arrayValueAAvisR = "TIl4c6";
		const _arrayValueNkf79y = "YBflaVnaCFvZWv3tfgsvrEfeUDfyheue1";
		const _arrayValuePwPeGmQ = "135wAS4IBXbnvuAx8TL2kN";
		const _arrayValueHv57MeZ = [_arrayValueAAvisR, _arrayValueNkf79y, _arrayValuePwPeGmQ]
		const _arrayValueMHbThGy = -6.1692774591148085;
		const _arrayValueS5Up7Qz = [_arrayValueMHbThGy]
		const _arrayValuer41Irth = [_arrayValueDOZtvfV, _arrayValueHv57MeZ, _arrayValueS5Up7Qz]
		const _arrayValueJkORfW2 = undefined;
		const _returnValueM04SDaE = [_arrayValueWY6NoHf, _arrayValuetdjYuP3, _arrayValuer41Irth, _arrayValueJkORfW2]
		const _cmdLJQaQ7S = () => { return _returnValueM04SDaE };
		const _returnValueGmWRJ7 = await _HelpUCzSVHP.visibleOptions(_cmdLJQaQ7S)
		const _cmdbSiEuAb = 8.517430969165773;
		const _helperEHza73g = new Help()
		const _arrayValueE2TDlSt = false;
		const _flagsjuWHqKf = [_arrayValueE2TDlSt]
		const _descriptionGfOtyOi = false;
		const _argumentZOFGsKf = new Option(_flagsjuWHqKf, _descriptionGfOtyOi)
		const _valueser9rcK0 = []
		const _returnValueemaVsN5 = await _argumentZOFGsKf.choices(_valueser9rcK0)
		const _returnValueUQszVgd = await _argumentZOFGsKf.attributeName()
		const _arg3y0ZF5 = "vJ5VrkNbl1OyUeoCV";
		const _returnValueAzvivvi = await _argumentZOFGsKf.is(_arg3y0ZF5)
		const _hideNkPSeVW = false;
		const _returnValueiObXtEe = await _argumentZOFGsKf.hideHelp(_hideNkPSeVW)
		const _returnValueuN7OW5l = await _helperEHza73g.argumentDescription(_argumentZOFGsKf)
		const _arrayValueyQQJqEV = undefined;
		const _arrayValueVuSqBS = -1.3712701919414094;
		const _cmdnD5Uzy6 = [_arrayValueyQQJqEV, _arrayValueVuSqBS]
		const _helperrCA3Hl3 = new Help()
		const _returnValueDYthdxH = 9.723696045561525;
		const _descriptionQhcNpNZ = () => { return _returnValueDYthdxH };
		const _cmdcOdde9d = {
			"description": _descriptionQhcNpNZ
	}
		const _returnValuead0gQJS = await _helperrCA3Hl3.commandDescription(_cmdcOdde9d)
		const _returnValueiLwSyax = await _helperEHza73g.longestOptionTermLength(_cmdnD5Uzy6, _helperrCA3Hl3)
		const _returnValuelrMOnbX = await _HelpUCzSVHP.padWidth(_cmdbSiEuAb, _helperEHza73g)
	});

	it('test for Help', async () => {
		const _HelpBGWeLAk = new Help()
		const _arrayValuejCdbFOi = "r8yQkyVkpT9znoqPDp4niJy2pXlWar8tLix8nwq1li";
		const _arrayValuemXuj54R = -3.2345932989158968;
		const _arrayValuetKpZ1sj = [_arrayValuejCdbFOi, _arrayValuemXuj54R]
		const _arrayValuea8DmE3c = 9.681060757803387;
		const _returnValueJwBMfhP = [_arrayValuetKpZ1sj, _arrayValuea8DmE3c]
		const _argumentNlPYHMa = () => { return _returnValueJwBMfhP };
		const _returnValueOuMZ9mw = await _HelpBGWeLAk.argumentDescription(_argumentNlPYHMa)
		const _cmdRnr6wJx = "3";
		const _returnValueg6KQmnH = await _HelpBGWeLAk.commandUsage(_cmdRnr6wJx)
		const _cmdftH7tis = "tFgsKwhSM9kgMFgp5Q26dx8iAFczxP9T4gnFWGQaORy5iR";
		const _returnValuevNT2zZF = await _HelpBGWeLAk.subcommandDescription(_cmdftH7tis)
		const _cmdyDX5Hcl = "UI7XR7aM2amqwWZOmMauuoxyNA81";
		const _returnValueynnwpCR = await _HelpBGWeLAk.commandUsage(_cmdyDX5Hcl)
	});

	it('test for Help', async () => {
		const _HelpqARWC4M = new Help()
		const _returnValueUZZGFyp = null;
		const _cmdhDx4at = () => { return _returnValueUZZGFyp };
		const _returnValueGeXMEBw = await _HelpqARWC4M.subcommandTerm(_cmdhDx4at)
		const _cmdWKmelJ = true;
		const _helperI9NquIi = new Help()
		const _cmdTz1Tr2S = "zSVdOmw5yCLZbJDrzp4i4mOhoUVW596zzmWF4cZ9UVFWG8RM9Dgr7LwahON2q3Adpo5uPKivqRkeX6nYapD";
		const _returnValuevk0oPWG = await _helperI9NquIi.commandUsage(_cmdTz1Tr2S)
		const _returnValuehOs9iNj = true;
		const _nameXYSbMSb = () => { return _returnValuehOs9iNj };
		const _argumentRbWOEvQ = {
			"name": _nameXYSbMSb
	}
		const _returnValueuWMU8Rx = await _helperI9NquIi.argumentTerm(_argumentRbWOEvQ)
		const _argumentLqxpGxQ = "06J9o7yyWWawDJj8Nq6kpB6BLgYqo1Y70";
		const _returnValueuxHFOle = await _helperI9NquIi.argumentTerm(_argumentLqxpGxQ)
		const _messageUvH8A0 = undefined;
		const _argumentyxhFU3C = new InvalidArgumentError(_messageUvH8A0)
		const _returnValueIFlzu59 = await _helperI9NquIi.argumentTerm(_argumentyxhFU3C)
		const __argsfbCLTo0 = {
		
	}
		const __nameRixkenN = -1.7807170300054729;
		const __aliasesYKZz5e = {
		
	}
		const _optionswRZUiC6 = {
		
	}
		const _cmdgvanXg7 = {
			"_args": __argsfbCLTo0,
		"_name": __nameRixkenN,
		"_aliases": __aliasesYKZz5e,
		"options": _optionswRZUiC6
	}
		const _returnValuejZ1fpmm = await _helperI9NquIi.subcommandTerm(_cmdgvanXg7)
		const _returnValueZxohoZ = await _HelpqARWC4M.padWidth(_cmdWKmelJ, _helperI9NquIi)
	});

	it('test for Help', async () => {
		const _HelpesqbblJ = new Help()
		const _cmdTMrujPQ = "Qopypaq9ROY";
		const _returnValueTUJueXW = await _HelpesqbblJ.visibleCommands(_cmdTMrujPQ)
		const _arrayValuexDzGCNr = -4.834647580530936;
		const _cmdFMR2KYW = [_arrayValuexDzGCNr]
		const _returnValuevJIEOYg = await _HelpesqbblJ.visibleCommands(_cmdFMR2KYW)
		const _nameZoiVtIv = 2.9138587485891883;
		const _argumentL2v4Ug6 = new Command(_nameZoiVtIv)
		const _argv0SYIdR = "n4sdzsE4h9vfICU1COZsCHLi2eY7iuYSQYYRp";
		const _parseOptionsjyQiton = undefined;
		const _returnValueK6sbK6s = await _argumentL2v4Ug6.parse(_argv0SYIdR, _parseOptionsjyQiton)
		const _returnValuetmsUKVx = await _HelpesqbblJ.argumentTerm(_argumentL2v4Ug6)
		const _returnValueF02v0qW = undefined;
		const _cmdC4e0YNE = () => { return _returnValueF02v0qW };
		const _returnValueNATnIXI = await _HelpesqbblJ.subcommandTerm(_cmdC4e0YNE)
		const _arrayValueYORDDbe = undefined;
		const _arrayValueyWLrhIe = 8.814574390279777;
		const _arrayValueKdJtMz = null;
		const _arrayValueAUAr696 = null;
		const _optionXsSyZv4 = [_arrayValueYORDDbe, _arrayValueyWLrhIe, _arrayValueKdJtMz, _arrayValueAUAr696]
		const _returnValuek5WjL2 = await _HelpesqbblJ.optionDescription(_optionXsSyZv4)
	});

	it('test for Help', async () => {
		const _Helptbpz5U5 = new Help()
		const _cmdb81SGn1 = true;
		const _returnValueLRnO8uI = await _Helptbpz5U5.visibleArguments(_cmdb81SGn1)
		const _arrayValueLtmghOl = -8.694262873890155;
		const _arrayValueh41DFtP = undefined;
		const _cmdBiTyy37 = [_arrayValueLtmghOl, _arrayValueh41DFtP]
		const _returnValuemAPIorR = await _Helptbpz5U5.subcommandDescription(_cmdBiTyy37)
		const _cmdp0Umiom = "hBhfgunuu1FPWeCLnxPihEQ8aFp";
		const _returnValuergG0IU = await _Helptbpz5U5.subcommandDescription(_cmdp0Umiom)
		const _returnValueu0X6QnX = null;
		const _cmdKWzFnEh = () => { return _returnValueu0X6QnX };
		const _returnValuefL5hV5c = await _Helptbpz5U5.commandUsage(_cmdKWzFnEh)
	});

	it('test for Help', async () => {
		const _HelpzbaOxtu = new Help()
		const _arrayValueaerwuOk = 4.3612910906289155;
		const _arrayValueeEOwzdO = false;
		const _argumentAc2t1Ds = [_arrayValueaerwuOk, _arrayValueeEOwzdO]
		const _returnValueP7ii2v = await _HelpzbaOxtu.argumentDescription(_argumentAc2t1Ds)
		const _arrayValueTOj0qov = null;
		const _arrayValueKFFwSpd = [_arrayValueTOj0qov]
		const _optionLebRBp = [_arrayValueKFFwSpd]
		const _returnValueg6BixnI = await _HelpzbaOxtu.optionDescription(_optionLebRBp)
	});

	it('test for Help', async () => {
		const _HelpSAa34JX = new Help()
		const _cmd9QkH4i = 1.671489755586066;
		const _arrayValuelX5ylXw = "PaE9DsysLuJyBMRqcDgmudl4oMrcF6P8eJF4SLnKw";
		const _helperQYDge2m = [_arrayValuelX5ylXw]
		const _returnValueNSpLKrs = await _HelpSAa34JX.formatHelp(_cmd9QkH4i, _helperQYDge2m)
		const _cmdGAPO3Up = 9.220340458043722;
		const _arrayValueuZRmitr = 2.8330291087881463;
		const _helperymG19eU = [_arrayValueuZRmitr]
		const _returnValueiWMQZn2 = await _HelpSAa34JX.longestArgumentTermLength(_cmdGAPO3Up, _helperymG19eU)
		const _cmdUF5ZwG = false;
		const _returnValue0XzGox = await _HelpSAa34JX.visibleArguments(_cmdUF5ZwG)
	});

	it('test for Help', async () => {
		const _HelpTJAqxaE = new Help()
		const _arrayValueBh1jkk = true;
		const _arrayValueMjyKE8h = true;
		const _returnValueCccnaDl = [_arrayValueBh1jkk, _arrayValueMjyKE8h]
		const _cmdYzuLbLw = () => { return _returnValueCccnaDl };
		const _returnValuebIPWV1o = await _HelpTJAqxaE.visibleOptions(_cmdYzuLbLw)
		const _flagsaTbIAVR = "XoiSwkHsIzla2EvifvOLJgZlcC9Ja8WOisTkCWwpb2b23C5";
		const _descriptionUAMGj0q = "N79SzJ7enKDtE0j2z1db7Ck8dmAGOmtQyxELAJWRLwcZKcI5OE8dVbO9IVGbSI2xuPRRyelWFJRdbc";
		const _optionK4cdnap = new Option(_flagsaTbIAVR, _descriptionUAMGj0q)
		const _hidemeQ5S3j = false;
		const _returnValueQpZtqP = await _optionK4cdnap.hideHelp(_hidemeQ5S3j)
		const _returnValuekCO4YAS = await _optionK4cdnap.attributeName()
		const _returnValuewWB9TwJ = await _optionK4cdnap.name()
		const _returnValuexELeCzv = await _HelpTJAqxaE.optionTerm(_optionK4cdnap)
		const _argChoicesVb2Xsp7 = {
		
	}
		const _negateYveT1TI = null;
		const _defaultValuefzLYIiL = undefined;
		const _defaultValueDescriptionKGDS2ea = -9.555383733671116;
		const _envVarhog9xuw = undefined;
		const _returnValuegtdur94 = undefined;
		const _descriptionvbTmtz6 = () => { return _returnValuegtdur94 };
		const _optionXU1LWW5 = {
			"argChoices": _argChoicesVb2Xsp7,
		"negate": _negateYveT1TI,
		"defaultValue": _defaultValuefzLYIiL,
		"defaultValueDescription": _defaultValueDescriptionKGDS2ea,
		"envVar": _envVarhog9xuw,
		"description": _descriptionvbTmtz6
	}
		const _returnValuedpXbClj = await _HelpTJAqxaE.optionDescription(_optionXU1LWW5)
		const _returnValuedNUJjaU = 0.27096321235957355;
		const _optioncfG1nUN = () => { return _returnValuedNUJjaU };
		const _returnValueqL8yuEm = await _HelpTJAqxaE.optionTerm(_optioncfG1nUN)
		const _cmdGpzRXyF = 6.89697284141781;
		const _arrayValuezb14zZE = 1.1322115780235098;
		const _arrayValueG80Zp4 = -3.848178226465169;
		const _arrayValueKTNV28p = 2.2594112124923207;
		const _arrayValueNPxWD3Q = null;
		const _returnValuekfnoDdN = [_arrayValueNPxWD3Q]
		const _arrayValueHenjX61 = () => { return _returnValuekfnoDdN };
		const _arrayValueq46VCQs = "djVouP2nEO4kp6E9xOmANcQHlzVrRC96S8pby2mJ7rpHFh4QT4eXHbpKJjN7aNJgdKNuTAPpkBESfcJuOFxk1LDhSXIM";
		const _arrayValueHKcwmeK = [_arrayValueHenjX61, _arrayValueq46VCQs]
		const _arrayValueBA9zzGG = undefined;
		const _arrayValuezyXQzn = [_arrayValueG80Zp4, _arrayValueKTNV28p, _arrayValueHKcwmeK, _arrayValueBA9zzGG]
		const _helperwiKma66 = [_arrayValuezb14zZE, _arrayValuezyXQzn]
		const _returnValuewnomPGe = await _HelpTJAqxaE.formatHelp(_cmdGpzRXyF, _helperwiKma66)
	});

	it('test for Help', async () => {
		const _HelpWLn8Wc = new Help()
		const __nameVqdY4BZ = 5.674392173133256;
		const __aliasesi0B9SQU = {
		
	}
		const _parentYogrbv6 = {
		
	}
		const _usageJTvpVe = "zVxyz5EQI6jBBI5KqAd3Hme5FrxumG90mQpOUOLCiwgMJQYFTqRP4ciK5MAWty2nnQf2YIs9r7FomGAwirkjgf6";
		const _cmdlHjJI8 = {
			"_name": __nameVqdY4BZ,
		"_aliases": __aliasesi0B9SQU,
		"parent": _parentYogrbv6,
		"usage": _usageJTvpVe
	}
		const _returnValueVbkAKrV = await _HelpWLn8Wc.commandUsage(_cmdlHjJI8)
		const _returnValueYplAZlC = 4.28350801820233;
		const _arrayValueHgUjwlq = () => { return _returnValueYplAZlC };
		const _arrayValueUUo0QVn = true;
		const _strwegFLrD = [_arrayValueHgUjwlq, _arrayValueUUo0QVn]
		const _widthkjqulNc = 7.478755614427261;
		const _indenth8F4ds = 9.671985385437644;
		const _minColumnWidthp98XTcD = -7.641679768435887;
		const _returnValueRsDFfe1 = await _HelpWLn8Wc.wrap(_strwegFLrD, _widthkjqulNc, _indenth8F4ds, _minColumnWidthp98XTcD)
	});

	it('test for Help', async () => {
		const _HelpavlPsE1 = new Help()
		const _cmdJ4TJjBS = true;
		const _returnValueuyQspx5 = 0.7750933127654633;
		const _visibleOptionsq5ZpD1L = () => { return _returnValueuyQspx5 };
		const _returnValuey0q1uv = undefined;
		const _optionTermwrgAAV9 = () => { return _returnValuey0q1uv };
		const _helpertIVZR2O = {
			"visibleOptions": _visibleOptionsq5ZpD1L,
		"optionTerm": _optionTermwrgAAV9
	}
		const _returnValueeeDeels = await _HelpavlPsE1.longestOptionTermLength(_cmdJ4TJjBS, _helpertIVZR2O)
		const _returnValueu5AH8Ba = "yfGkV5RNoMbMb6nF18koauZA7dK5APgjQrNIajhYJTcCvkpcnlpcR42uydpTnWd6viyaXhlo";
		const _cmdUwhG8de = () => { return _returnValueu5AH8Ba };
		const _helperZwrkYmD = new Help()
		const __nameosX9X6R = 4.578348138016175;
		const __aliasesmgOeviX = {
		
	}
		const _parentqFPBQwa = {
		
	}
		const _returnValueWo7YFLb = "Rvn3pbrLyQErEDRUvF823BgKlfFhxng7tI10PlMJPUBUpfl1oS7JdODxnwYSxTq5DgzyQWjajJXihgszeGvI5P";
		const _usagecEtx6aM = () => { return _returnValueWo7YFLb };
		const _cmda76U4KJ = {
			"_name": __nameosX9X6R,
		"_aliases": __aliasesmgOeviX,
		"parent": _parentqFPBQwa,
		"usage": _usagecEtx6aM
	}
		const _returnValueTh2u1ew = await _helperZwrkYmD.commandUsage(_cmda76U4KJ)
		const _cmdn0emNWY = null;
		const _helperNmBULUw = new Help()
		const _cmdZKw6vgF = "EWbehhT";
		const _returnValueEXTGaL9 = await _helperNmBULUw.subcommandTerm(_cmdZKw6vgF)
		const _cmd04WHWQ = null;
		const _helperbhymQqd = new Help()
		const _cmdKjGiZxW = true;
		const _arrayValuesLbOBwJ = false;
		const _helperUWFs4FE = [_arrayValuesLbOBwJ]
		const _returnValueaxh4RRI = await _helperbhymQqd.longestSubcommandTermLength(_cmdKjGiZxW, _helperUWFs4FE)
		const _arrayValuervZr7et = {
		
	}
		const _namergUjUWD = [_arrayValuervZr7et]
		const _descriptionbmHq0S = null;
		const _argumentiyBKJD2 = new Argument(_namergUjUWD, _descriptionbmHq0S)
		const _value6V2L3I = null;
		const _previousymFLyRr = []
		const _returnValueAx3dOV1 = await _argumentiyBKJD2._concatValue(_value6V2L3I, _previousymFLyRr)
		const _valueXUZ1jJl = {
		
	}
		const _descriptioni3FvYJQ = undefined;
		const _returnValue6LA9Q7 = await _argumentiyBKJD2.default(_valueXUZ1jJl, _descriptioni3FvYJQ)
		const _returnValuehngZrGg = await _argumentiyBKJD2.argOptional()
		const _valueCV1WkWe = undefined;
		const _descriptionlu36jxu = undefined;
		const _returnValueKCQWgWi = await _argumentiyBKJD2.default(_valueCV1WkWe, _descriptionlu36jxu)
		const _returnValueYFSEPbK = await _helperbhymQqd.argumentTerm(_argumentiyBKJD2)
		const _returnValueHeJjPrF = await _helperNmBULUw.longestSubcommandTermLength(_cmd04WHWQ, _helperbhymQqd)
		const _returnValueIL5uGFj = await _helperZwrkYmD.longestOptionTermLength(_cmdn0emNWY, _helperNmBULUw)
		const _returnValueX1xSX0f = await _HelpavlPsE1.longestOptionTermLength(_cmdUwhG8de, _helperZwrkYmD)
		const _optionsBU28rWU = {
		
	}
		const _arrayValuesprx7ZR = "chn";
		const _arrayValueFU55ibb = {
		
	}
		const _returnValueGqZ5wsa = [_arrayValueFU55ibb]
		const _arrayValueNxoR99 = () => { return _returnValueGqZ5wsa };
		const _arrayValuevtjRxrw = undefined;
		const __hasHelpOptioncssnwOh = [_arrayValuesprx7ZR, _arrayValueNxoR99, _arrayValuevtjRxrw]
		const __helpShortFlagGCmoTQd = "TG3hO9yqg6IR6LEFVJ9JCNCG4gUTgpyAvVsN5Z5BvRlqQwhKn5ovhq0KpcX7iP9xM12Vg3zE911rKFSuRg";
		const _returnValueam4RnLT = undefined;
		const __findOptionOoSxPTn = () => { return _returnValueam4RnLT };
		const __helpLongFlagPwH83Jt = "hdq";
		const _returnValueOiPGdPO = "h9LR1nxTggEWxr8YJUsZTMkeAis7MbxOZ3MP9gvNThcBs6";
		const _createOptionkM4rTNf = () => { return _returnValueOiPGdPO };
		const __helpDescriptionLmAZWB = "4m4DljedYKjODJkKqyFJYJPPK9g5TJvPmjzv3AuduJvilQ8xBCHvOB8uwHvf9FLkUFNkddnobET6w4";
		const __helpFlagsJXJBsNQ = undefined;
		const _cmdYfudGiu = {
			"options": _optionsBU28rWU,
		"_hasHelpOption": __hasHelpOptioncssnwOh,
		"_helpShortFlag": __helpShortFlagGCmoTQd,
		"_findOption": __findOptionOoSxPTn,
		"_helpLongFlag": __helpLongFlagPwH83Jt,
		"createOption": _createOptionkM4rTNf,
		"_helpDescription": __helpDescriptionLmAZWB,
		"_helpFlags": __helpFlagsJXJBsNQ
	}
		const _returnValuejgxynIH = await _HelpavlPsE1.visibleOptions(_cmdYfudGiu)
		const _cmdaLBUYrk = true;
		const _helperz22p7c0 = new Help()
		const _cmdqrxZMgj = true;
		const _sortSubcommandsMMmtKQS = 4.1730269100666675;
		const _returnValuek9vVDcg = undefined;
		const _subcommandTermk56vOiJ = () => { return _returnValuek9vVDcg };
		const _helperOhJy9EQ = {
			"sortSubcommands": _sortSubcommandsMMmtKQS,
		"subcommandTerm": _subcommandTermk56vOiJ
	}
		const _returnValueSG8IX1O = await _helperz22p7c0.formatHelp(_cmdqrxZMgj, _helperOhJy9EQ)
		const _returnValueiQJExOG = await _HelpavlPsE1.longestOptionTermLength(_cmdaLBUYrk, _helperz22p7c0)
		const _cmdAikPB6K = undefined;
		const _arrayValueYYJtfZr = undefined;
		const _arrayValueDxU4ImH = 3.9273140174972543;
		const _arrayValuehGh2wrK = 9.531708573277587;
		const _arrayValueBuQz5Yb = 4.719764067455092;
		const _arrayValueIHwXYm = [_arrayValueBuQz5Yb]
		const _arrayValueWQwKOsB = [_arrayValuehGh2wrK, _arrayValueIHwXYm]
		const _helperrhP43Eo = [_arrayValueYYJtfZr, _arrayValueDxU4ImH, _arrayValueWQwKOsB]
		const _returnValueNnCqiE = await _HelpavlPsE1.longestOptionTermLength(_cmdAikPB6K, _helperrhP43Eo)
	});

	it('test for Help', async () => {
		const _HelpG0HZlOx = new Help()
		const _flagsv4rU8N = "ttPnR27knXt6lOPsKFHr3IV9RFR9Jf4i9abWIdI1aWCLbwIUnIFXGNVQ3A6vKeYcqBNIXJ62uNUaHFjV92pXqdJVp4lXOH0wb";
		const _descriptionBHf9UzF = undefined;
		const _optionfPf97Qs = new Option(_flagsv4rU8N, _descriptionBHf9UzF)
		const _valuel5lt9dJ = undefined;
		const _descriptionK6vahjT = undefined;
		const _returnValueQTa3id4 = await _optionfPf97Qs.default(_valuel5lt9dJ, _descriptionK6vahjT)
		const _returnValueCzOLtlw = await _optionfPf97Qs.name()
		const _returnValuejfuEtaV = await _optionfPf97Qs.name()
		const _argnvH910W = {
		
	}
		const _returnValuejOkzhO = await _optionfPf97Qs.is(_argnvH910W)
		const _returnValueFKQSxVr = await _HelpG0HZlOx.optionDescription(_optionfPf97Qs)
		const _optionq4dtdDB = 9.98715468923734;
		const _returnValuevkMVgSi = await _HelpG0HZlOx.optionTerm(_optionq4dtdDB)
		const _arrayValuedAXKSRO = undefined;
		const _arrayValueITlshLJ = 8.606122121961775;
		const _optionFVisE1s = [_arrayValuedAXKSRO, _arrayValueITlshLJ]
		const _returnValueXcV3aKj = await _HelpG0HZlOx.optionTerm(_optionFVisE1s)
	});

	it('test for Help', async () => {
		const _Helpm8gZEJe = new Help()
		const __argsDescriptioniDiH4oT = {
		
	}
		const __argsvQYKTGd = null;
		const _cmduLaNm5M = {
			"_argsDescription": __argsDescriptioniDiH4oT,
		"_args": __argsvQYKTGd
	}
		const _returnValueHXnkxws = await _Helpm8gZEJe.visibleArguments(_cmduLaNm5M)
		const _arrayValuehpSaQ8a = "XvDijNT83TGUGUzo1vlrPcdZ6ouUBaOImJ3En1qh";
		const _arrayValueMVjSJRy = {
		
	}
		const _cmdiFANR4y = [_arrayValuehpSaQ8a, _arrayValueMVjSJRy]
		const _returnValueJLRc8EW = await _Helpm8gZEJe.visibleOptions(_cmdiFANR4y)
		const _optionsI0BreVj = {
		
	}
		const __hasHelpOptionGkDljxk = "JBqBNHaVJfgmoacjJ6LKLUhWUGKer4Hd6VxXoWETjk77Oqyrnxg4XVvsiH5nzAWIpPk8lBKRVsoxUkOttlvp";
		const __helpShortFlaggNBIuJO = -9.40798944262662;
		const __findOptionw3B48pY = {
		
	}
		const __helpLongFlagej3Jlu = false;
		const _returnValueWBUPXdU = true;
		const _createOptiondEkeOTV = () => { return _returnValueWBUPXdU };
		const _arrayValuervL0f0 = 7.396922756737826;
		const __helpDescriptionSPBouT = [_arrayValuervL0f0]
		const __helpFlagsaYvmYop = "QNLXAs6Nj6RSoN8VlXTUWAXpDpPdmYDN2fvq11TRfWbSPVsRFto59cckvwEFCdXnCjDbcdpEU32f9CC9";
		const _cmdUHVzrP6 = {
			"options": _optionsI0BreVj,
		"_hasHelpOption": __hasHelpOptionGkDljxk,
		"_helpShortFlag": __helpShortFlaggNBIuJO,
		"_findOption": __findOptionw3B48pY,
		"_helpLongFlag": __helpLongFlagej3Jlu,
		"createOption": _createOptiondEkeOTV,
		"_helpDescription": __helpDescriptionSPBouT,
		"_helpFlags": __helpFlagsaYvmYop
	}
		const _returnValueUCHXRFy = await _Helpm8gZEJe.visibleOptions(_cmdUHVzrP6)
		const _argumentea50xZB = undefined;
		const _returnValueGnnPNp3 = await _Helpm8gZEJe.argumentTerm(_argumentea50xZB)
	});

	it('test for Help', async () => {
		const _HelpwnASmf = new Help()
		const _cmdttVKNl = null;
		const _returnValueRFEZ07d = await _HelpwnASmf.subcommandDescription(_cmdttVKNl)
		const _cmdk6wluLz = "KCHdDqjUUAdhGAOAyn8lq6vvFPX1LhAQVDYnzDV68";
		const _arrayValueDGj6NGs = undefined;
		const _arrayValueJQRdPpN = false;
		const _arrayValueBTyOAhW = null;
		const _helperqfNJy0M = [_arrayValueDGj6NGs, _arrayValueJQRdPpN, _arrayValueBTyOAhW]
		const _returnValueS4eatI5 = await _HelpwnASmf.padWidth(_cmdk6wluLz, _helperqfNJy0M)
		const _argumenttWRWJt = "YhL";
		const _returnValuezBBRAok = await _HelpwnASmf.argumentDescription(_argumenttWRWJt)
	});

	it('test for Help', async () => {
		const _HelpSnGJl2U = new Help()
		const _cmdOKf47M = "JQiD67pmJe2zpC7RVVrx8O7cSlPKlR5eQyIYuJFVFegBb9QwmSrFPHMHqOOg9CJiQ2jh5aJqN1ZbOOfvPtWEt6xOkxFJMhfUloE";
		const _helperhugHKZZ = "5pHuUrzI8WQcBH7Cxb5SFGhfJsCFi3vYcssdsgMifVgr86GMmJuEW9wKQt9cBTpzR0hXzStdZMGixCbKVrqYGHbJN9GR8S";
		const _returnValuev5BFWDp = await _HelpSnGJl2U.padWidth(_cmdOKf47M, _helperhugHKZZ)
	});

	it('test for Help', async () => {
		const _HelpgaLl4MF = new Help()
		const _nameXGDBZvY = "Tqr1MSl4x4rvd6gYS7HOIR4YfVviBMyUx";
		const _descriptionkpM8SHN = undefined;
		const _argumentaX68Llk = new Argument(_nameXGDBZvY, _descriptionkpM8SHN)
		const _arrayValueIDqgcXx = 1.5191705777729592;
		const _arrayValueEQEs0b2 = "DKpdJr5J8BvDPsnFnI7KUYWKLZ4JXak9r27mzwQGZ0sHLCcPUdH4JCvKlR14Pf7VDGvgNuNnjfoNB7k";
		const _arrayValueQXC07d = false;
		const _valuesGqmWN7 = [_arrayValueIDqgcXx, _arrayValueEQEs0b2, _arrayValueQXC07d]
		const _returnValueIcmZug = await _argumentaX68Llk.choices(_valuesGqmWN7)
		const _returnValuewDmH23Z = await _argumentaX68Llk.argRequired()
		const _valueG51crS = "pL3Lt99S5idtAcpPe1o7eLEJyofnDw7aWPwI9eiQ";
		const _previousetnChBp = "1xjV2IKDPgiPzC81b2miP6oq7L1AzTFCO3tX6r6jUa9R1vGPjXcUJANvUIswLZ1GtHb";
		const _returnValueYI5GXmi = await _argumentaX68Llk._concatValue(_valueG51crS, _previousetnChBp)
		const _returnValuelwJqJ8Z = await _argumentaX68Llk.argRequired()
		const _returnValuea4nlhH8 = await _HelpgaLl4MF.argumentDescription(_argumentaX68Llk)
		const _strTrRYeB0 = "TmcrbhDkvnFLeFRE8U56eBNISIu";
		const _widthqvmWdFG = 5.463540874800355;
		const _indentYW53uRs = -8.976284266833588;
		const _minColumnWidthZMGGONp = -4.59971763718959;
		const _returnValueVZV2UBg = await _HelpgaLl4MF.wrap(_strTrRYeB0, _widthqvmWdFG, _indentYW53uRs, _minColumnWidthZMGGONp)
	});

	it('test for Help', async () => {
		const _HelpPmE5VPV = new Help()
		const _cmdKabSPgI = "O7ORYBeuLmW58E2evrAOUWJljdRVSLDhzut1ooRh63deiS4kBkBG";
		const _helperrEeVPV5 = "7FWbRr53TK2HXjiVwpEvjnsqJsivaX";
		const _returnValuebZUlnGm = await _HelpPmE5VPV.longestSubcommandTermLength(_cmdKabSPgI, _helperrEeVPV5)
		const _cmdb7vx1Pv = {
		
	}
		const _helperh1qWU4T = "AHpEYYunOAOjtfFPTW9JyBPmCkgHFNZUuPo8FRP85fpiEqyDIKfd7qSMVfOp9mmoCRUE5hrRzXVno5DBowQjQIi";
		const _returnValuencNTGxL = await _HelpPmE5VPV.longestOptionTermLength(_cmdb7vx1Pv, _helperh1qWU4T)
		const _strt1ebuQt = "VWuHkkJw3bejFdGe2p4Lxpg7yx2AXpe1rLhPc71VgCDvYUtNAHt5";
		const _widthpxqQlhy = -1.6914074912663217;
		const _indentabSWGGD = "PK7jNe5NnOvXrs2wIPEboAcNQDAKJ9jJYe67rAmDwv2OQ7NHF3DPMjw5Ec";
		const _minColumnWidthavEqV9l = -8.36577148439899;
		const _returnValueaccY25 = await _HelpPmE5VPV.wrap(_strt1ebuQt, _widthpxqQlhy, _indentabSWGGD, _minColumnWidthavEqV9l)
	});

	it('test for Help', async () => {
		const _Helpfjp793 = new Help()
		const _strlLMIfYo = "RPx5ds3fPEsLuYhwu5wQ4xRoHmf1W4Go6xDFHqXJN8NAQshOyr55v4";
		const _widthwwJfg2z = 3.181379468631338;
		const _indentH1tE5k1 = 5.162680437539279;
		const _minColumnWidthQuU8lbV = 8.26277575152767;
		const _returnValueSjkSRbP = await _Helpfjp793.wrap(_strlLMIfYo, _widthwwJfg2z, _indentH1tE5k1, _minColumnWidthQuU8lbV)
		const _nameX2FOMoc = undefined;
		const _cmdNdGVQps = new Command(_nameX2FOMoc)
		const __namerMVFAba = {
		
	}
		const _commandsbJXRBG = null;
		const __hiddenMhymIIm = true;
		const _parentcma9jix = {
		
	}
		const _cmdzColOEU = {
			"_name": __namerMVFAba,
		"commands": _commandsbJXRBG,
		"_hidden": __hiddenMhymIIm,
		"parent": _parentcma9jix
	}
		const _optsusmeDXB = false;
		const _returnValueAOM6MeB = await _cmdNdGVQps.addCommand(_cmdzColOEU, _optsusmeDXB)
		const _returnValuelkuShX = await _Helpfjp793.subcommandTerm(_cmdNdGVQps)
		const _cmdE3LzJPk = null;
		const _helperJQICHmn = new Help()
		const _cmdtciClB7 = undefined;
		const _arrayValuevcAR41A = undefined;
		const _arrayValueTyyRJYE = -3.062005396932576;
		const _sortSubcommandsAj2QMvx = [_arrayValuevcAR41A, _arrayValueTyyRJYE]
		const _arrayValuezpRh73U = false;
		const _arrayValueFH0bHsQ = undefined;
		const _subcommandTermMKYIggV = [_arrayValuezpRh73U, _arrayValueFH0bHsQ]
		const _helperHRkQfoM = {
			"sortSubcommands": _sortSubcommandsAj2QMvx,
		"subcommandTerm": _subcommandTermMKYIggV
	}
		const _returnValuePionNw2 = await _helperJQICHmn.longestSubcommandTermLength(_cmdtciClB7, _helperHRkQfoM)
		const _cmdrtZyws = true;
		const _returnValuedfKACFJ = "Nmt3WXmDMlGD";
		const _helperBrpAEov = () => { return _returnValuedfKACFJ };
		const _returnValueRAeLj7w = await _helperJQICHmn.padWidth(_cmdrtZyws, _helperBrpAEov)
		const _returnValuezT4USTd = []
		const _argumentCcmH9Hr = () => { return _returnValuezT4USTd };
		const _returnValueSJtp2eH = await _helperJQICHmn.argumentTerm(_argumentCcmH9Hr)
		const _returnValueGSuONxM = await _Helpfjp793.longestArgumentTermLength(_cmdE3LzJPk, _helperJQICHmn)
	});

	it('test for Help', async () => {
		const _Helpb49CCeb = new Help()
		const _cmddAiXIIA = undefined;
		const _helperLzs9PuP = new Help()
		const _argChoicesYXGlGT = {
		
	}
		const _negatetPmhpZ8 = false;
		const _arrayValueEeSf92v = 6.380537089633599;
		const _arrayValuezVSbYUK = null;
		const _arrayValueNSeyGAz = null;
		const _arrayValueSuCVB7I = [_arrayValuezVSbYUK, _arrayValueNSeyGAz]
		const _arrayValue1SDiEp = undefined;
		const _arrayValueuWwSre = [_arrayValueEeSf92v, _arrayValueSuCVB7I, _arrayValue1SDiEp]
		const _arrayValueX7u4UJ9 = undefined;
		const _arrayValuer0j2ZZA = undefined;
		const _arrayValueszE8TNJ = "kbO4LJYaVzL97jyNi9FsK3fx95TulVFEC2H0CEfDe";
		const _arrayValuedGQGO1y = [_arrayValuer0j2ZZA, _arrayValueszE8TNJ]
		const _defaultValueCAcYTJw = [_arrayValueuWwSre, _arrayValueX7u4UJ9, _arrayValuedGQGO1y]
		const _defaultValueDescriptionrk2fI7I = -3.1143825663955464;
		const _envVar1dltja = undefined;
		const _descriptionp3A9Kur = undefined;
		const _optionyHPLTlq = {
			"argChoices": _argChoicesYXGlGT,
		"negate": _negatetPmhpZ8,
		"defaultValue": _defaultValueCAcYTJw,
		"defaultValueDescription": _defaultValueDescriptionrk2fI7I,
		"envVar": _envVar1dltja,
		"description": _descriptionp3A9Kur
	}
		const _returnValuek3gdpc = await _helperLzs9PuP.optionDescription(_optionyHPLTlq)
		const _namevV7upvg = "QhnsEk3dllytvAhmHDP0bOlOlUorrnQuURICpMDziXKssag6mmVMBoBDsXu6JpWAWLSvAevuyeR";
		const _descriptionx7PKF5h = {
		
	}
		const _cmdGyGFW2n = new Argument(_namevV7upvg, _descriptionx7PKF5h)
		const _fnunozlRQ = undefined;
		const _returnValueJNSTR3f = await _cmdGyGFW2n.argParser(_fnunozlRQ)
		const _arrayValuecgHn0N3 = undefined;
		const _arrayValueVXWcEbO = {
		
	}
		const _fnaUsGKs = [_arrayValuecgHn0N3, _arrayValueVXWcEbO]
		const _returnValuewxdVVr = await _cmdGyGFW2n.argParser(_fnaUsGKs)
		const _returnValuegqtPK1e = await _cmdGyGFW2n.name()
		const _arrayValueOmtgJYj = []
		const _valuekaQsNyF = [_arrayValueOmtgJYj]
		const _returnValueM7cDQqt = undefined;
		const _concatmt3yWNI = () => { return _returnValueM7cDQqt };
		const _previousWuQg4w = {
			"concat": _concatmt3yWNI
	}
		const _returnValueT74XyYt = await _cmdGyGFW2n._concatValue(_valuekaQsNyF, _previousWuQg4w)
		const _returnValuegXAQslv = await _helperLzs9PuP.subcommandDescription(_cmdGyGFW2n)
		const _returnValueElmA9dW = true;
		const _strHDu7Hzu = () => { return _returnValueElmA9dW };
		const _widthAHxqbiv = 0.12261192452516845;
		const _indentdtrapfn = 8.466961356020239;
		const _minColumnWidthUQKwq3p = 3.3614353739555938;
		const _returnValuenb3z2lU = await _helperLzs9PuP.wrap(_strHDu7Hzu, _widthAHxqbiv, _indentdtrapfn, _minColumnWidthUQKwq3p)
		const _nameryWAnM2 = undefined;
		const _cmduG1WFV = new Command(_nameryWAnM2)
		const _flagskM3OuB1 = false;
		const _descriptionufnnxFx = undefined;
		const _fnZnG8Zop = "NLx2YGdY";
		const _defaultValueAlHuXut = "rs8wnzpQWD9dnI3fvnesa2zuD3jOrQc9BbHWDlrW5lc5PUjV8RQe4rPJWJxVe1SqnoU";
		const _returnValuerhGVr8Z = await _cmduG1WFV.option(_flagskM3OuB1, _descriptionufnnxFx, _fnZnG8Zop, _defaultValueAlHuXut)
		const _fnEu8pwIT = {
		
	}
		const _returnValuedsMBsjx = await _cmduG1WFV.exitOverride(_fnEu8pwIT)
		const _exitCodefh0WJSY = null;
		const _codelGo91KJ = {
		
	}
		const _messageXm9Ma6e = "oADyrDPcCJVSGgXeLeFuIpiSbY";
		const _returnValueBmDefGo = await _cmduG1WFV._exit(_exitCodefh0WJSY, _codelGo91KJ, _messageXm9Ma6e)
		const _exitCodeSAaDhOG = {
		
	}
		const _arrayValueH48KA2G = null;
		const _codeiVEcwkm = [_arrayValueH48KA2G]
		const _messageCBokrR = "OTITa2vVlAL6E3G3pITayR7b8Mi8MoeNNCcGUgfSUsjGbCZ35C5OspwAWUwUySGFMOaNKU8nx7B";
		const _returnValueINn6QXw = await _cmduG1WFV._exit(_exitCodeSAaDhOG, _codeiVEcwkm, _messageCBokrR)
		const _returnValuegOqBwN9 = await _helperLzs9PuP.commandDescription(_cmduG1WFV)
		const _returnValueNLOZ7kH = await _Helpb49CCeb.longestOptionTermLength(_cmddAiXIIA, _helperLzs9PuP)
		const _cmdeWbr32J = {
		
	}
		const _helpert70Lw7a = new Help()
		const _arrayValueu9oRr8 = undefined;
		const _arrayValueBYFnDbw = true;
		const _cmdkuVc1sK = [_arrayValueu9oRr8, _arrayValueBYFnDbw]
		const _helperApk0V27 = new Help()
		const _arrayValueBGBuF14 = -1.899318797986103;
		const _cmdWaZopYS = [_arrayValueBGBuF14]
		const _arrayValueEwUq45 = false;
		const _helperL3KUoAB = [_arrayValueEwUq45]
		const _returnValuexjkvKEV = await _helperApk0V27.longestSubcommandTermLength(_cmdWaZopYS, _helperL3KUoAB)
		const _cmdokwd8RN = "n0ztP1fqDNANXXTmBlvKujgEJNQZElgjQj56CCLstvMxUFEEPkQ8wReQfNyNtowieLmLB1NVIhs6kg9fzBgNjAM54Gsn";
		const _returnValueaDQqToj = await _helperApk0V27.visibleArguments(_cmdokwd8RN)
		const _namexK1a0Im = "rbBWGtohu4y4aczm";
		const _cmdjgGOW2e = new Command(_namexK1a0Im)
		const _contextOptionsegmwQw0 = undefined;
		const _returnValueFxxfzeQ = await _cmdjgGOW2e.outputHelp(_contextOptionsegmwQw0)
		const _strIsPUgX = undefined;
		const _returnValueJ9w6iQ = await _cmdjgGOW2e.name(_strIsPUgX)
		const _argvlz3VwQx = null;
		const _parseOptionsyoflMXX = null;
		const _returnValuehrHrd2L = await _cmdjgGOW2e.parse(_argvlz3VwQx, _parseOptionsyoflMXX)
		const _returnValue57imGA = await _helperApk0V27.subcommandDescription(_cmdjgGOW2e)
		const _cmdeLprUtL = "lqARQtAit9W4YRzq20OJDLe3l1Eac2GPMlPbOyfwHvKNC97wdczgA8K6CC9TXQbgikl5M5EBGhq6mI9KGfyyU";
		const _returnValueZhtVRp1 = await _helperApk0V27.subcommandDescription(_cmdeLprUtL)
		const __namePoqFGW2 = "GPCD3EdKrc35K6Uu57bEwnaQwrfsS3R6bXShRyNW5jyCQxOtzx";
		const __aliasesfxAq0D4 = {
		
	}
		const _parentccbvt8a = {
		
	}
		const _arrayValueUbHZ2w2 = "jFIxVXbi30If8B2St7CzulOrg0yCiLQVry2M65H";
		const _arrayValuerrMXFy = undefined;
		const _arrayValuehU4DWh2 = undefined;
		const _returnValueLxRqC8X = [_arrayValueUbHZ2w2, _arrayValuerrMXFy, _arrayValuehU4DWh2]
		const _usager1SnUaP = () => { return _returnValueLxRqC8X };
		const _cmdYk2MAy0 = {
			"_name": __namePoqFGW2,
		"_aliases": __aliasesfxAq0D4,
		"parent": _parentccbvt8a,
		"usage": _usager1SnUaP
	}
		const _returnValueuH1zNhf = await _helperApk0V27.commandUsage(_cmdYk2MAy0)
		const _returnValueyA6HrnO = await _helpert70Lw7a.longestOptionTermLength(_cmdkuVc1sK, _helperApk0V27)
		const _cmdluuM2D9 = null;
		const _helperfuo36fv = new Help()
		const __nameaGFspjq = {
		
	}
		const __aliasestc78TX5 = {
		
	}
		const _parentUAtxfl2 = "IneV9rkQJpjeZar6kB6YXgNq5nmbiK7OW2RJkQ5RU6EmBdcKmGCqcNymiccrh6eNQrcMWdmkYkkvpdruuJEez60";
		const _arrayValueSUgx5dF = true;
		const _arrayValueUFrAxbO = null;
		const _returnValueTH64DIe = [_arrayValueSUgx5dF, _arrayValueUFrAxbO]
		const _usageNaQBTy0 = () => { return _returnValueTH64DIe };
		const _cmdCgAGOO = {
			"_name": __nameaGFspjq,
		"_aliases": __aliasestc78TX5,
		"parent": _parentUAtxfl2,
		"usage": _usageNaQBTy0
	}
		const _returnValueSD07z51 = await _helperfuo36fv.commandUsage(_cmdCgAGOO)
		const _cmdqyj5gZ0 = null;
		const _helperzHNmSbi = "cdFE1TSsTgbyQaJTwUxyWAnmoOgzyzzadSRdKSEhrUPY8bDP5bQ8jNSXbynhFJXxIz8LgPYaMoPkyWfJAibbHiKebKa";
		const _returnValuerhZa5Ad = await _helperfuo36fv.longestOptionTermLength(_cmdqyj5gZ0, _helperzHNmSbi)
		const _nameJJIxKKe = "bTjzoWE8VOgTQ4QgXsm4CfJCj6U7pRDQrXvGzs9RACXiTZH1KeHl5tQdTAsvwvdapblPq";
		const _descriptionprURsYJ = "ODbA";
		const _cmd2q6Zyt = new Argument(_nameJJIxKKe, _descriptionprURsYJ)
		const _valueuBCegzE = undefined;
		const _descriptionfYvnrhu = undefined;
		const _returnValuehs8RmH6 = await _cmd2q6Zyt.default(_valueuBCegzE, _descriptionfYvnrhu)
		const _fnHOnP0rM = undefined;
		const _returnValueXygNwq7 = await _cmd2q6Zyt.argParser(_fnHOnP0rM)
		const _returnValueGG7KUIc = 9.064548615270546;
		const _includesrtpoj2r = () => { return _returnValueGG7KUIc };
		const _arrayValuegh8ks1v = undefined;
		const _returnValueyNXRQOl = [_arrayValuegh8ks1v]
		const _join2Gf1zx = () => { return _returnValueyNXRQOl };
		const _valuesQ4raRj = {
			"includes": _includesrtpoj2r,
		"join": _join2Gf1zx
	}
		const _returnValueXO10fUF = await _cmd2q6Zyt.choices(_valuesQ4raRj)
		const _returnValueBoc7k9D = await _cmd2q6Zyt.argRequired()
		const _returnValueSMxOHSd = await _cmd2q6Zyt.argRequired()
		const _returnValueX5e22aC = await _helperfuo36fv.subcommandTerm(_cmd2q6Zyt)
		const _returnValuevj3gkKl = {
		
	}
		const _matchCpTPVe1 = () => { return _returnValuevj3gkKl };
		const _returnValuewtnW21Z = "bocEkPqeabtiP6dJGnegqzp49oRCTbAMjoJbjeyaihUSor6FXf6yLTCoWezIQOQM";
		const _substrzm2tVKX = () => { return _returnValuewtnW21Z };
		const _strf3QNcNu = {
			"match": _matchCpTPVe1,
		"substr": _substrzm2tVKX
	}
		const _widthp8E3hc = 9.191803844102711;
		const _indentNf8BJt5 = -7.024198194437647;
		const _minColumnWidthbxvHgpF = 7.864664012208706;
		const _returnValueQIOg17k = await _helperfuo36fv.wrap(_strf3QNcNu, _widthp8E3hc, _indentNf8BJt5, _minColumnWidthbxvHgpF)
		const _arrayValueHS5Hw3 = -0.9162275963021909;
		const _arrayValueNN6y8lg = null;
		const _cmdINGgJO7 = [_arrayValueHS5Hw3, _arrayValueNN6y8lg]
		const _returnValueOPpglYI = await _helperfuo36fv.commandUsage(_cmdINGgJO7)
		const _returnValueSmHigXI = await _helpert70Lw7a.longestSubcommandTermLength(_cmdluuM2D9, _helperfuo36fv)
		const _arrayValueoBEDfwu = {
		
	}
		const _cmdA04eXaI = [_arrayValueoBEDfwu]
		const _returnValue2aouiQ = await _helpert70Lw7a.commandUsage(_cmdA04eXaI)
		const _returnValuewARXEKU = await _Helpb49CCeb.formatHelp(_cmdeWbr32J, _helpert70Lw7a)
		const _returnValuet7UEmeA = "DCB7GnoHDLfkaD7MGVnepUICA8m0WNFBCbLQcwF2";
		const _descriptionYxN0buI = () => { return _returnValuet7UEmeA };
		const _cmddXRV8rM = {
			"description": _descriptionYxN0buI
	}
		const _returnValuemu8VRTc = await _Helpb49CCeb.subcommandDescription(_cmddXRV8rM)
	});

	it('test for Help', async () => {
		const _HelpDyYBcmq = new Help()
		const _returnValueQHE0jYL = "CfmfVqgY3";
		const _descriptionVsDmxq1 = () => { return _returnValueQHE0jYL };
		const _cmdHqjMUaa = {
			"description": _descriptionVsDmxq1
	}
		const _returnValueA5kxNsy = await _HelpDyYBcmq.subcommandDescription(_cmdHqjMUaa)
		const _arrayValueZxctxQ = "Mfas4HqTuN4EenkP61QEPaemTlOlb9uuea7CyLD3rD3";
		const _arrayValuemgOBcW3 = undefined;
		const _arrayValuefS6JcYS = null;
		const _arrayValueLtzOxU4 = [_arrayValueZxctxQ, _arrayValuemgOBcW3, _arrayValuefS6JcYS]
		const _arrayValueeYSGKR4 = undefined;
		const _nameX1RGrki = [_arrayValueLtzOxU4, _arrayValueeYSGKR4]
		const _arrayValueVVvbu79 = null;
		const _arrayValues71MX09 = null;
		const _arrayValueGRoN949 = true;
		const _arrayValueJsm58E = [_arrayValues71MX09, _arrayValueGRoN949]
		const _arrayValueGqXd3yC = "RmemQoQLoFKEMiLaLkslJT5Zox032NbWQj";
		const _arrayValue2RZu6U = undefined;
		const _arrayValueWntWVOG = 1.3809087930824138;
		const _arrayValueIl4RlrR = [_arrayValueGqXd3yC, _arrayValue2RZu6U, _arrayValueWntWVOG]
		const _arrayValueIhQe5yn = true;
		const _arrayValuebveNUkl = -1.0543047421827687;
		const _arrayValueatsnj1q = "9VcPlNZ93qaV";
		const _arrayValueOocZ3oF = [_arrayValueJsm58E, _arrayValueIl4RlrR, _arrayValueIhQe5yn, _arrayValuebveNUkl, _arrayValueatsnj1q]
		const _arrayValueASQuePN = {
		
	}
		const _descriptioniXVVW0k = [_arrayValueVVvbu79, _arrayValueOocZ3oF, _arrayValueASQuePN]
		const _argumenth3yZ6aj = new Argument(_nameX1RGrki, _descriptioniXVVW0k)
		const _arrayValueHQbvwPe = false;
		const _arrayValuelRMBH6 = 0.24809499992798933;
		const _valuey8cyYsB = [_arrayValueHQbvwPe, _arrayValuelRMBH6]
		const _descriptionHCTh83a = undefined;
		const _returnValueXNvlzTq = await _argumenth3yZ6aj.default(_valuey8cyYsB, _descriptionHCTh83a)
		const _returnValuesizhkV = await _argumenth3yZ6aj.argOptional()
		const _valueGFnQiYH = "87Q7mDluRmE8gKVi5xxnipoTAS3v5TaGqGtuzt4w7DBRFYNTJXgSVtpK3XIuG1VvvrNaDRZiyWVaeJqi2KTQGNm53lc";
		const _descriptionXy9hrom = undefined;
		const _returnValueuPfSfBn = await _argumenth3yZ6aj.default(_valueGFnQiYH, _descriptionXy9hrom)
		const _returnValueqG44BgB = await _HelpDyYBcmq.argumentDescription(_argumenth3yZ6aj)
		const _returnValuegApj7a = null;
		const _cmd7k25TQ = () => { return _returnValuegApj7a };
		const _returnValuep00Qt5h = 2.4514569076230064;
		const _helperZQElWcg = () => { return _returnValuep00Qt5h };
		const _returnValueXXih5HV = await _HelpDyYBcmq.padWidth(_cmd7k25TQ, _helperZQElWcg)
	});

	it('test for Help', async () => {
		const _HelpfBqSro = new Help()
		const _flagsRPbvxpF = "4lxuCM1RmAb8dppQ8cYsfeRjq2ntoF745PLmOzMAUtzJQRfDHw39qwyVwYMlhQjqxuSpmIY6FqD3Y";
		const _descriptionGTMWt7s = {
		
	}
		const _argumentWAUpBh = new Option(_flagsRPbvxpF, _descriptionGTMWt7s)
		const _fnpT2HbYZ = undefined;
		const _returnValuevzWAj0 = await _argumentWAUpBh.argParser(_fnpT2HbYZ)
		const _returnValueIjbgWTK = await _argumentWAUpBh.attributeName()
		const _returnValuePPyxDKV = await _HelpfBqSro.argumentTerm(_argumentWAUpBh)
		const _arrayValueNqgMKPq = undefined;
		const _cmdgdhXgh = [_arrayValueNqgMKPq]
		const _returnValueCi1h0h3 = await _HelpfBqSro.commandUsage(_cmdgdhXgh)
		const __nameBYVyDBs = {
		
	}
		const __aliasesT6tGtHN = {
		
	}
		const _returnValuesuJlDVc = null;
		const _parentaBXseEK = () => { return _returnValuesuJlDVc };
		const _arrayValuezunipJg = "2E9ukHcaiVpKpGupICoNf8iuerEQp53m6qD4R3rJJsgXhxVn0K";
		const _arrayValueLuKFGXi = null;
		const _returnValuepe3jkGy = [_arrayValuezunipJg, _arrayValueLuKFGXi]
		const _usageIO3h0EV = () => { return _returnValuepe3jkGy };
		const _cmdXXevefX = {
			"_name": __nameBYVyDBs,
		"_aliases": __aliasesT6tGtHN,
		"parent": _parentaBXseEK,
		"usage": _usageIO3h0EV
	}
		const _returnValuezzq9Z9 = await _HelpfBqSro.commandUsage(_cmdXXevefX)
		const _flagsGS6mSJ = 7.141126285567577;
		const _optionyThMURD = {
			"flags": _flagsGS6mSJ
	}
		const _returnValueyDbEos4 = await _HelpfBqSro.optionTerm(_optionyThMURD)
		const _cmdI0gF6Z = 3.997997863395902;
		const _arrayValueSRXHlDD = 1.9144044679797965;
		const _arrayValueKqkt7Tn = undefined;
		const _helperWe838sq = [_arrayValueSRXHlDD, _arrayValueKqkt7Tn]
		const _returnValuen8WiiA4 = await _HelpfBqSro.longestSubcommandTermLength(_cmdI0gF6Z, _helperWe838sq)
	});

	it('test for Help', async () => {
		const _HelpSJAQ3LY = new Help()
		const _arrayValueMs3vANF = null;
		const _cmdyGUZKWu = [_arrayValueMs3vANF]
		const _helperJw8T99w = new Help()
		const _flagsdYiAjey = "QMdApH43E744uBWQqNz3JnmdjDMKS";
		const _arrayValuefWUljd = undefined;
		const _arrayValueRpNhR5v = [_arrayValuefWUljd]
		const _descriptionYaMns2p = [_arrayValueRpNhR5v]
		const _argument9XXX9C = new Option(_flagsdYiAjey, _descriptionYaMns2p)
		const _returnValueyOUxW8B = await _argument9XXX9C.name()
		const _fnKG6FHGQ = undefined;
		const _returnValueuT2U9de = await _argument9XXX9C.argParser(_fnKG6FHGQ)
		const _returnValueu8cqiDA = await _argument9XXX9C.attributeName()
		const _arrayValueU4sVMXI = {
		
	}
		const _arrayValuedvuwRzd = 1.582347993961113;
		const _arrayValueDyHEg4r = null;
		const _arrayValueGnF8ctP = false;
		const _arrayValueRp2CWB1 = [_arrayValuedvuwRzd, _arrayValueDyHEg4r, _arrayValueGnF8ctP]
		const _nameSJ75dch = [_arrayValueU4sVMXI, _arrayValueRp2CWB1]
		const _returnValueUeE9zSo = await _argument9XXX9C.env(_nameSJ75dch)
		const _returnValueM89Qhbo = 6.864338530501783;
		const _nameEqSNT8a = () => { return _returnValueM89Qhbo };
		const _returnValue7xDvNA = await _argument9XXX9C.env(_nameEqSNT8a)
		const _returnValueOeP7D7b = await _helperJw8T99w.argumentTerm(_argument9XXX9C)
		const _nameG27fDfn = undefined;
		const _cmdefJI1Kp = new Command(_nameG27fDfn)
		const _returnValueD0Yc8bV = await _cmdefJI1Kp._parseOptionsEnv()
		const _displayHelptcK7uK = {
		
	}
		const _returnValueUbfheHK = await _cmdefJI1Kp.showHelpAfterError(_displayHelptcK7uK)
		const _fnYeYHMwf = null;
		const _returnValueQunnqGE = await _cmdefJI1Kp.exitOverride(_fnYeYHMwf)
		const _returnValueMZIMUkL = await _cmdefJI1Kp._hasImplicitHelpCommand()
		const _returnValueohNEGyn = await _helperJw8T99w.subcommandTerm(_cmdefJI1Kp)
		const _arrayValueb65J2g3 = undefined;
		const _arrayValueNDJdkmo = {
		
	}
		const _nameAZmVKOE = [_arrayValueb65J2g3, _arrayValueNDJdkmo]
		const _descriptionmNpr6Za = null;
		const _argumenthNRgJAA = new Argument(_nameAZmVKOE, _descriptionmNpr6Za)
		const _valueaD2pWb = undefined;
		const _descriptionDcP0CB = {
		
	}
		const _returnValueaoBxPBw = await _argumenthNRgJAA.default(_valueaD2pWb, _descriptionDcP0CB)
		const _returnValuermX6Eij = await _argumenthNRgJAA.name()
		const _returnValueYEMcO0c = await _helperJw8T99w.argumentTerm(_argumenthNRgJAA)
		const _returnValueOjR5RPj = await _HelpSJAQ3LY.longestSubcommandTermLength(_cmdyGUZKWu, _helperJw8T99w)
		const _returnValuemDqAF8m = "SOLtTgxYEzTAkLt5TLczwaoFBFd6bAf4RJ3kWKvw3F";
		const _cmdKk7K0Aw = () => { return _returnValuemDqAF8m };
		const _returnValueH9F63Vz = -3.5149300665239913;
		const _helperCxljMUU = () => { return _returnValueH9F63Vz };
		const _returnValueBZarUJe = await _HelpSJAQ3LY.longestOptionTermLength(_cmdKk7K0Aw, _helperCxljMUU)
		const _cmdKElvlsh = null;
		const _returnValueeaO4w5p = {
		
	}
		const _helperq9D4tpv = () => { return _returnValueeaO4w5p };
		const _returnValuet9fnmu = await _HelpSJAQ3LY.formatHelp(_cmdKElvlsh, _helperq9D4tpv)
	});

	it('test for Help', async () => {
		const _HelpzvRd0Me = new Help()
		const _arrayValueEZHJ51g = undefined;
		const _arrayValueCD0bgW = null;
		const _arrayValueqz0yoCN = undefined;
		const _arrayValueKF8PjBz = null;
		const _optionKfv7Z1i = [_arrayValueEZHJ51g, _arrayValueCD0bgW, _arrayValueqz0yoCN, _arrayValueKF8PjBz]
		const _returnValueh4dOY59 = await _HelpzvRd0Me.optionTerm(_optionKfv7Z1i)
		const _namemDhJZ7O = null;
		const _cmdjC5ON1X = new Command(_namemDhJZ7O)
		const _returnValueOkY72To = {
		
	}
		const _forEach4UcnHz = () => { return _returnValueOkY72To };
		const _aliasesQIuQLs = {
			"forEach": _forEach4UcnHz
	}
		const _returnValueYJhOhFi = await _cmdjC5ON1X.aliases(_aliasesQIuQLs)
		const _storeAsPropertiesVcmIBNI = false;
		const _returnValuecizH9j = await _cmdjC5ON1X.storeOptionsAsProperties(_storeAsPropertiesVcmIBNI)
		const _returnValuedNQoike = await _HelpzvRd0Me.visibleOptions(_cmdjC5ON1X)
		const _nameUUrShyu = undefined;
		const _cmduo3JLlZ = new Command(_nameUUrShyu)
		const _returnValuejolD1D4 = {
		
	}
		const _cmdEgFRaLX = () => { return _returnValuejolD1D4 };
		const _optsTH9lNaf = {
		
	}
		const _returnValueaOj7Sj5 = await _cmduo3JLlZ.addCommand(_cmdEgFRaLX, _optsTH9lNaf)
		const _returnValuepcS8HJH = await _cmduo3JLlZ.createHelp()
		const _returnValueP8GNtov = undefined;
		const _arrayValueVwCeFsE = () => { return _returnValueP8GNtov };
		const _arrayValueXWxWLv7 = 5.625680651854367;
		const _returnValuen9nXWdH = true;
		const _arrayValuedzhDJAO = () => { return _returnValuen9nXWdH };
		const _keyIWafTIa = [_arrayValueVwCeFsE, _arrayValueXWxWLv7, _arrayValuedzhDJAO]
		const _valuesS6SSUx = false;
		const _returnValueal90cXN = await _cmduo3JLlZ.setOptionValue(_keyIWafTIa, _valuesS6SSUx)
		const _flagziLAml5 = "N5YsDWKjARnTDMooimg6hO4LXrGK2kCckcQlaozlmaIISVsIgIzl0g7o1CriKQLQKqgncGJY2cix18XA4r9NHkOuhGb1";
		const _returnValueAKsiNun = await _cmduo3JLlZ.unknownOption(_flagziLAml5)
		const _returnValued6b4PP5 = await _HelpzvRd0Me.subcommandTerm(_cmduo3JLlZ)
		const _cmdLR6eSWy = null;
		const _returnValueYsuTYCa = -5.24239559162676;
		const _visibleArgumentsBEZ2i2 = () => { return _returnValueYsuTYCa };
		const _returnValueQnsErv6 = null;
		const _argumentTermDGWWgFq = () => { return _returnValueQnsErv6 };
		const _helperbXHhQUH = {
			"visibleArguments": _visibleArgumentsBEZ2i2,
		"argumentTerm": _argumentTermDGWWgFq
	}
		const _returnValueyJ5C7WE = await _HelpzvRd0Me.longestArgumentTermLength(_cmdLR6eSWy, _helperbXHhQUH)
	});

	it('test for Help', async () => {
		const _HelpRAjzBJr = new Help()
		const _arrayValueeEZcFPA = null;
		const _arrayValue1VbrE7 = [_arrayValueeEZcFPA]
		const _argumentPmBtoq5 = [_arrayValue1VbrE7]
		const _returnValueG4V7vID = await _HelpRAjzBJr.argumentDescription(_argumentPmBtoq5)
		const _nameiAlUd2 = undefined;
		const _cmdlmOQXZ = new Command(_nameiAlUd2)
		const _keyADQAzrX = null;
		const _returnValuesnAFVJm = await _cmdlmOQXZ.getOptionValue(_keyADQAzrX)
		const _returnValueVZsLb9g = await _cmdlmOQXZ._processArguments()
		const _lengthqhWErvJ = undefined;
		const _receivedArgsrUQcX5X = {
			"length": _lengthqhWErvJ
	}
		const _returnValuepWJDq34 = await _cmdlmOQXZ._excessArguments(_receivedArgsrUQcX5X)
		const _subcommand5bqxRI = undefined;
		const _argsYC9gHn2 = undefined;
		const _returnValueVQEkgkh = await _cmdlmOQXZ._executeSubCommand(_subcommand5bqxRI, _argsYC9gHn2)
		const _configurationKbs4jos = undefined;
		const _returnValueXWDuryr = await _cmdlmOQXZ.configureHelp(_configurationKbs4jos)
		const _returnValuex1nOpdJ = await _HelpRAjzBJr.visibleCommands(_cmdlmOQXZ)
		const _cmdttOL5g9 = "rPxBwietl7bzuTKYUkRYoV7p3LXTcYShDpKhOL4aBLlTDtAwyXZuVcx3w40GYOiE";
		const _arrayValueLXAFdW7 = -8.855513673065847;
		const _helperjgCAtLm = [_arrayValueLXAFdW7]
		const _returnValue8427UP = await _HelpRAjzBJr.longestArgumentTermLength(_cmdttOL5g9, _helperjgCAtLm)
		const _optiongoXELPS = "NSTkFngmmcvNgl6JNNRv6uwpxX3uLeH9hnT4dWUAjGbidjVxaSu";
		const _returnValueXD4RCgk = await _HelpRAjzBJr.optionDescription(_optiongoXELPS)
		const _arrayValueQiFTCzA = false;
		const _arrayValueiWYXKrD = {
		
	}
		const _returnValueTIQSBxp = [_arrayValueQiFTCzA, _arrayValueiWYXKrD]
		const _cmdfvXxL8N = () => { return _returnValueTIQSBxp };
		const _returnValueK71gwDJ = await _HelpRAjzBJr.subcommandDescription(_cmdfvXxL8N)
	});

	it('test for Help', async () => {
		const _HelpDAUJInp = new Help()
		const _returnValueuCv4wZM = "PmGHtaHWhMrM2oGsRz8NAEuY7BvGzhmjN8eegNohigX5FFkqbVAHdaI9KCcIHMbQ5";
		const _matchO4Ixbs8 = () => { return _returnValueuCv4wZM };
		const _substrAwLeoFW = 9.081017001859198;
		const _strGMigzYm = {
			"match": _matchO4Ixbs8,
		"substr": _substrAwLeoFW
	}
		const _widthxPzJGLi = -2.815133437829868;
		const _indentUJfvXOE = null;
		const _minColumnWidthf4fEyhE = -1.3543964581947794;
		const _returnValueYjyI9cY = await _HelpDAUJInp.wrap(_strGMigzYm, _widthxPzJGLi, _indentUJfvXOE, _minColumnWidthf4fEyhE)
		const _arrayValueKmx2OKt = -1.804620020866155;
		const _arrayValuezimAKsH = 8.618961299288618;
		const _arrayValueMugv3bW = []
		const _cmdU0F3Tk3 = [_arrayValueKmx2OKt, _arrayValuezimAKsH, _arrayValueMugv3bW]
		const _arrayValueCXLOlPg = 0.17875035663186623;
		const _helperK0ckkU0 = [_arrayValueCXLOlPg]
		const _returnValueawWo4BJ = await _HelpDAUJInp.longestArgumentTermLength(_cmdU0F3Tk3, _helperK0ckkU0)
		const _cmdo7uH70b = -5.542329746794529;
		const _helperwkAuWla = new Help()
		const _nameRLeaELN = "FC28";
		const _cmdpd7CjgJ = new Command(_nameRLeaELN)
		const _strz9XS1yt = undefined;
		const _flagsjbdqfuR = {
		
	}
		const _descriptiony24BH47 = {
		
	}
		const _returnValuesok3ESt = await _cmdpd7CjgJ.version(_strz9XS1yt, _flagsjbdqfuR, _descriptiony24BH47)
		const _arrayValueY3nwmLB = false;
		const _enableOrNameAndArgsQBnLq8 = [_arrayValueY3nwmLB]
		const _descriptionQZAGX13 = "HWJcPEU7XIS1MuLqQKTwEd2nfuh5wGpqoW2rPchx4MvbFF3hCX24vgLTlqYQIdoeq5vHxe3YivJvWH9mXLINNMhTDu4J";
		const _returnValuedNX9GU = await _cmdpd7CjgJ.addHelpCommand(_enableOrNameAndArgsQBnLq8, _descriptionQZAGX13)
		const _arglSMoJT3 = true;
		const _returnValueiRapNn = await _cmdpd7CjgJ._findOption(_arglSMoJT3)
		const _arrayValueO1sntju = true;
		const _arrayValuepHlRWQV = "bAmUmQmGu4E4CQAGP22Su7TOvsnmxkan";
		const _arrayValues8f0qA = [_arrayValueO1sntju, _arrayValuepHlRWQV]
		const _operandszN0Xr5D = [_arrayValues8f0qA]
		const _unknownr3DrfAj = {
		
	}
		const _returnValuemLRfrGg = await _cmdpd7CjgJ._parseCommand(_operandszN0Xr5D, _unknownr3DrfAj)
		const _returnValueat1lCGd = await _helperwkAuWla.subcommandTerm(_cmdpd7CjgJ)
		const _arrayValuejHqzKg = undefined;
		const _arrayValuenOZ4LD = "44NaQUvaceo6lo3sbPOeppcBFrFPDwHoWcHfquzgxkN0zU";
		const _cmdTXwIHRT = [_arrayValuejHqzKg, _arrayValuenOZ4LD]
		const _returnValueVa6xClq = await _helperwkAuWla.commandUsage(_cmdTXwIHRT)
		const _arrayValueVUAOaAV = "MPdUh1ZttjMAsUzkisegqem4H3UTybap8JFhnfxeuPSb4vno9e1L9NvTLtgLF";
		const _arrayValuePYVG3vW = -7.242591632942632;
		const _arrayValueUika5C = "qH5Wrki3NZ7L649nDJyzkhPUx5NDic3ws4r";
		const _arrayValueEOtrEkH = undefined;
		const _cmduvg5M45 = [_arrayValueVUAOaAV, _arrayValuePYVG3vW, _arrayValueUika5C, _arrayValueEOtrEkH]
		const _returnValueJRnms0E = await _helperwkAuWla.commandDescription(_cmduvg5M45)
		const _returnValueXH44qW = undefined;
		const _cmdqkZSf2K = () => { return _returnValueXH44qW };
		const _returnValuea7BFbov = await _helperwkAuWla.visibleOptions(_cmdqkZSf2K)
		const _returnValuePRwxFNq = await _HelpDAUJInp.padWidth(_cmdo7uH70b, _helperwkAuWla)
		const _returnValueD9IHPv = undefined;
		const _cmdMt0SdfJ = () => { return _returnValueD9IHPv };
		const _returnValueU22SvPu = true;
		const _helperRkd5z06 = () => { return _returnValueU22SvPu };
		const _returnValueX6gi5Ht = await _HelpDAUJInp.formatHelp(_cmdMt0SdfJ, _helperRkd5z06)
	});

	it('test for Help', async () => {
		const _HelpCzviCEk = new Help()
		const _flagssKm6J1 = "8hN1OSNu";
		const _descriptionVyQYev7 = null;
		const _optiony78tl3n = new Option(_flagssKm6J1, _descriptionVyQYev7)
		const _namedKI1q90 = undefined;
		const _returnValueOd1xoGU = await _optiony78tl3n.env(_namedKI1q90)
		const _hideNO07ShU = false;
		const _returnValuettuqT3U = await _optiony78tl3n.hideHelp(_hideNO07ShU)
		const _arrayValueps6sHmS = null;
		const _arrayValuewsU2NRG = 2.2624338490091827;
		const _valuesivvIvvv = [_arrayValueps6sHmS, _arrayValuewsU2NRG]
		const _returnValueogEdgQN = await _optiony78tl3n.choices(_valuesivvIvvv)
		const _returnValuezDVaqj0 = await _HelpCzviCEk.optionDescription(_optiony78tl3n)
		const _arrayValuemmVYi45 = false;
		const _arrayValueZNz06kh = undefined;
		const _cmdl29ZdQ = [_arrayValuemmVYi45, _arrayValueZNz06kh]
		const _helperULwR2YL = new Help()
		const _arrayValueuWcoB2b = undefined;
		const _arrayValueGkShtH = undefined;
		const _arrayValueKWTEIyL = "nzHv466CJMgCQSzaTz";
		const _arrayValuePxh4E7x = -3.517035627338969;
		const _cmdFZGu5CP = [_arrayValueuWcoB2b, _arrayValueGkShtH, _arrayValueKWTEIyL, _arrayValuePxh4E7x]
		const _returnValuezMH05ld = await _helperULwR2YL.commandUsage(_cmdFZGu5CP)
		const _returnValueh2XJ8h = await _HelpCzviCEk.longestArgumentTermLength(_cmdl29ZdQ, _helperULwR2YL)
	});

	it('test for Help', async () => {
		const _HelpSG5qQnc = new Help()
		const _arrayValuerH3SLOv = "B1gK8W0XDRr1hSndm9D20hAhBClqPlJedlW3aGhNpO";
		const _arrayValuepPqK6Dy = false;
		const _returnValueGd69NAJ = [_arrayValuerH3SLOv, _arrayValuepPqK6Dy]
		const _namewIERGoS = () => { return _returnValueGd69NAJ };
		const _descriptionBNffClS = "oM7kzuRsN3VRtsykNB1XiX3wvUDyKQ1OKZn4nD0LFBHhfGvDtzr";
		const _optiont9bxcbG = new Argument(_namewIERGoS, _descriptionBNffClS)
		const _returnValueBDvHupO = await _optiont9bxcbG.argOptional()
		const _valuexhrce2 = -7.957939622175521;
		const _returnValuea6UxfIn = false;
		const _arrayValueTPR1I5b = () => { return _returnValuea6UxfIn };
		const _arrayValuepvihb59 = 1.930901894806066;
		const _returnValueFYtFJMq = [_arrayValueTPR1I5b, _arrayValuepvihb59]
		const _concatDrEMc12 = () => { return _returnValueFYtFJMq };
		const _previousRMNRrY6 = {
			"concat": _concatDrEMc12
	}
		const _returnValueYznS84k = await _optiont9bxcbG._concatValue(_valuexhrce2, _previousRMNRrY6)
		const _returnValuelmaBSXp = await _optiont9bxcbG.name()
		const _valuemy8MorM = "QBcK8GtraKsuBqqhBBrj32snWPRQzy9Y8J3jTMGI3RBD1t9tfQRw2P1okhklKBg9E2";
		const _descriptionchQYR1Z = {
		
	}
		const _returnValueWUfMEY8 = await _optiont9bxcbG.default(_valuemy8MorM, _descriptionchQYR1Z)
		const _arrayValueGxO3CyR = true;
		const _arrayValueLguaOjm = -4.653518676449418;
		const _arrayValueRf2Hme = [_arrayValueGxO3CyR, _arrayValueLguaOjm]
		const _arrayValuewO7rDC = undefined;
		const _arrayValues9V7kmh = "1U4lGFUTPxJoe7eYDlRdzsRHqaWlM5ss";
		const _returnValueaA7IvJ = undefined;
		const _returnValuev1YExlC = () => { return _returnValueaA7IvJ };
		const _arrayValueowhzaR = () => { return _returnValuev1YExlC };
		const _arrayValueJog5xO4 = [_arrayValues9V7kmh, _arrayValueowhzaR]
		const _valuesx6VKOG = [_arrayValueRf2Hme, _arrayValuewO7rDC, _arrayValueJog5xO4]
		const _returnValuenmcz4U2 = await _optiont9bxcbG.choices(_valuesx6VKOG)
		const _returnValuegjfZuKO = await _HelpSG5qQnc.optionDescription(_optiont9bxcbG)
		const _cmdKftGUlQ = []
		const _returnValueiSWiuwa = 8.011814427002161;
		const _helpervHSjXj = () => { return _returnValueiSWiuwa };
		const _returnValuemvnwCn5 = await _HelpSG5qQnc.longestSubcommandTermLength(_cmdKftGUlQ, _helpervHSjXj)
		const _arrayValueA6X9pyI = 8.73449152167112;
		const _arrayValuewEKBvMU = null;
		const _returnValuezHRRmdK = null;
		const _arrayValueeD6YuLD = () => { return _returnValuezHRRmdK };
		const _arrayValuebZgraFI = true;
		const _arrayValueHBnr7Ep = [_arrayValueeD6YuLD, _arrayValuebZgraFI]
		const _arrayValueQehV8Kl = [_arrayValueA6X9pyI, _arrayValuewEKBvMU, _arrayValueHBnr7Ep]
		const _arrayValueq6IR323 = undefined;
		const _arrayValueM8jo9Hd = -9.6488283324808;
		const _arrayValueylw3EX4 = "zgjpkXCkxgRRj";
		const _arrayValueoFGA7HN = [_arrayValueq6IR323, _arrayValueM8jo9Hd, _arrayValueylw3EX4]
		const _optionEdBWEC7 = [_arrayValueQehV8Kl, _arrayValueoFGA7HN]
		const _returnValuekixXXSe = await _HelpSG5qQnc.optionDescription(_optionEdBWEC7)
		const __argsDescriptionkqR8u6 = {
		
	}
		const __argsggTZnaW = {
		
	}
		const _cmdSDvPhlV = {
			"_argsDescription": __argsDescriptionkqR8u6,
		"_args": __argsggTZnaW
	}
		const _returnValueuHUtyyy = await _HelpSG5qQnc.visibleArguments(_cmdSDvPhlV)
	});
})