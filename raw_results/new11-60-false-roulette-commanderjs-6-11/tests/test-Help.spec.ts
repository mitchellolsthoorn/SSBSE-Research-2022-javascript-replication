export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpX3FzEEc = new Help()
		const _returnValueZDTKAwL = -0.7535821389243544;
		const _cmda1JGUu = () => { return _returnValueZDTKAwL };
		const _returnValuexzgKnvu = await _HelpX3FzEEc.visibleCommands(_cmda1JGUu)
		const _cmdRQ8gvpZ = {
		
	}
		const _sortSubcommandsIyhvLMw = "WUe47OqRzsxgMRafyFU8VjSQoIrER";
		const _returnValueuZ6165U = -9.047516068444326;
		const _subcommandTermeIQJQ2F = () => { return _returnValueuZ6165U };
		const _helpergF45a4k = {
			"sortSubcommands": _sortSubcommandsIyhvLMw,
		"subcommandTerm": _subcommandTermeIQJQ2F
	}
		const _returnValueggpeEVI = await _HelpX3FzEEc.longestSubcommandTermLength(_cmdRQ8gvpZ, _helpergF45a4k)
		const __namecr7pcmq = true;
		const __aliasesMAFXCpV = null;
		const _parentaQe7qGD = {
		
	}
		const _returnValuexICa6p5 = {
		
	}
		const _usageaPP3Xtw = () => { return _returnValuexICa6p5 };
		const _cmdn9wDGr = {
			"_name": __namecr7pcmq,
		"_aliases": __aliasesMAFXCpV,
		"parent": _parentaQe7qGD,
		"usage": _usageaPP3Xtw
	}
		const _returnValueWNfl6z = await _HelpX3FzEEc.commandUsage(_cmdn9wDGr)
		const _cmdFhgsQAv = -9.994981360632833;
		const _helperVPbNRLV = "GkAZNMZjXq9cwr1q2yRnqxCSP5ufvJUH9263S2GyG";
		const _returnValueT1vXcQJ = await _HelpX3FzEEc.longestSubcommandTermLength(_cmdFhgsQAv, _helperVPbNRLV)
		const __argsDescriptionJp9xr7Y = {
		
	}
		const __argsLNiEWsj = {
		
	}
		const _cmdvW9jMCu = {
			"_argsDescription": __argsDescriptionJp9xr7Y,
		"_args": __argsLNiEWsj
	}
		const _returnValuemEc2jHA = await _HelpX3FzEEc.visibleArguments(_cmdvW9jMCu)
	});

	it('test for Help', async () => {
		const _HelpmPSprXv = new Help()
		const _strzgTUaaO = "sXxYlMsDnuOZKy26FrzICpBVXCl75H4neq7RNp4VTf2lJvnOlttX3vDkQWVaBknk7Wbtnl0USq28bTrdweErFFGP0T";
		const _widtho0oAHkU = 0.21537069618797133;
		const _indentw8UYApi = -7.941464524901454;
		const _minColumnWidthup0JUzF = 5.9370024929514855;
		const _returnValueCMvsUxw = await _HelpmPSprXv.wrap(_strzgTUaaO, _widtho0oAHkU, _indentw8UYApi, _minColumnWidthup0JUzF)
		const _cmdsakRL1R = "DZOcyzDbGw6dcZ";
		const _arrayValues4EzdJI = 7.10301017801476;
		const _arrayValuessYsCl1 = null;
		const _arrayValuejkX0Dmr = undefined;
		const _arrayValueZnaFA5M = null;
		const _helpernXuQ0ZU = [_arrayValues4EzdJI, _arrayValuessYsCl1, _arrayValuejkX0Dmr, _arrayValueZnaFA5M]
		const _returnValuetOkBD8Z = await _HelpmPSprXv.longestSubcommandTermLength(_cmdsakRL1R, _helpernXuQ0ZU)
		const _cmdOJe1PIP = "2LXpGUS6R5";
		const _helperHL49Wna = "X6HCa5HKqjuLpTVkHBWnW";
		const _returnValueCSXwtsK = await _HelpmPSprXv.longestOptionTermLength(_cmdOJe1PIP, _helperHL49Wna)
		const _arrayValuek8UIqSU = undefined;
		const _arrayValueVBAKd7o = [_arrayValuek8UIqSU]
		const _cmdJPje6jY = [_arrayValueVBAKd7o]
		const _returnValueiy8eOLm = null;
		const _longestOptionTermLengthugfGbJD = () => { return _returnValueiy8eOLm };
		const _returnValueKFIKbJU = false;
		const _longestSubcommandTermLengthMuudOVk = () => { return _returnValueKFIKbJU };
		const _returnValueIKLjBbo = 2.2754651673822206;
		const _longestArgumentTermLengtheQa4vPt = () => { return _returnValueIKLjBbo };
		const _helperVmmBKcr = {
			"longestOptionTermLength": _longestOptionTermLengthugfGbJD,
		"longestSubcommandTermLength": _longestSubcommandTermLengthMuudOVk,
		"longestArgumentTermLength": _longestArgumentTermLengtheQa4vPt
	}
		const _returnValuesl4sZhR = await _HelpmPSprXv.padWidth(_cmdJPje6jY, _helperVmmBKcr)
	});

	it('test for Help', async () => {
		const _HelpFRlpl5N = new Help()
		const _cmdqoWP9tf = null;
		const _returnValueIZ9EJCn = await _HelpFRlpl5N.visibleArguments(_cmdqoWP9tf)
		const _cmdmSXyoTZ = "7ql7tuL1pZnD8kIgp";
		const _returnValueCo1kxSK = await _HelpFRlpl5N.commandUsage(_cmdmSXyoTZ)
		const _optioncE8NPzi = undefined;
		const _returnValueLXeS4Ru = await _HelpFRlpl5N.optionTerm(_optioncE8NPzi)
		const _returnValueMx9DL5 = "LoKwV0QJIpSD3m7WsXdEOoUis7o9mtLYxkArmwEOgn1MxgASSi6ufrEVoAwa3KSNC7ttkEQsAQrWFIwUoxPNYD3qeUu13";
		const _str2noxB6 = () => { return _returnValueMx9DL5 };
		const _widthZM6fXWI = -5.24274820551266;
		const _indentTHdrm0p = -0.15757767077026763;
		const _minColumnWidthXvkITpU = 5.653602079514963;
		const _returnValueLGfTMJx = await _HelpFRlpl5N.wrap(_str2noxB6, _widthZM6fXWI, _indentTHdrm0p, _minColumnWidthXvkITpU)
	});

	it('test for Help', async () => {
		const _HelpH9QCVy = new Help()
		const _arrayValueojEKJrt = 0.6937530977296635;
		const _cmdyl5mapb = [_arrayValueojEKJrt]
		const _returnValueWsZEIYj = await _HelpH9QCVy.visibleOptions(_cmdyl5mapb)
		const _cmdy5OjBYT = false;
		const _arrayValueknnSO1v = -2.175061457722217;
		const _helperIS8tnUM = [_arrayValueknnSO1v]
		const _returnValueQEcImZq = await _HelpH9QCVy.formatHelp(_cmdy5OjBYT, _helperIS8tnUM)
		const _arrayValueyKtsOKi = 9.81675821758219;
		const _arrayValuepXmk3JZ = "DtU3a74O9IxxuJ1q8RraWhIBb7zkmacoGkxnqSL119ybJ8tTFUbh1jipjhIfi7efxToFwi3kLRJPRGUOPYfC7oJ3Ga6uJ";
		const _argumentmPDlJE = [_arrayValueyKtsOKi, _arrayValuepXmk3JZ]
		const _returnValueQkvhuqv = await _HelpH9QCVy.argumentDescription(_argumentmPDlJE)
	});

	it('test for Help', async () => {
		const _Helpt2DHR5E = new Help()
		const _cmdXpkj1R1 = true;
		const _helperXD1rGok = "QUfYDNsScfeMlNjxQAAYKIzxbCYsvzLkH2bDTRvTmBNshTcOYfqLcmfOFLG2Gj5NCAn3IIDHMeD1";
		const _returnValueuE024JG = await _Helpt2DHR5E.padWidth(_cmdXpkj1R1, _helperXD1rGok)
		const _cmdxqaNUo0 = "RgHJY7FjbEes8UyBYVkQxgnFw4OeobQY6kjoi83RTWvJ1MjM1X15qOrFL8TGrt1gTKd9l2F6tIXTTou";
		const _arrayValueMVhBSlq = null;
		const _arrayValueglNiub = -3.2193655408131345;
		const _arrayValuec01Lu3g = [_arrayValueMVhBSlq, _arrayValueglNiub]
		const _arrayValueD76UJhp = {
		
	}
		const _arrayValuet00ok3d = []
		const _helper2Z6xCE = [_arrayValuec01Lu3g, _arrayValueD76UJhp, _arrayValuet00ok3d]
		const _returnValueX0tgaUu = await _Helpt2DHR5E.formatHelp(_cmdxqaNUo0, _helper2Z6xCE)
		const _returnValuemiJTjbd = -3.284536877632985;
		const _argumentM7iSJSx = () => { return _returnValuemiJTjbd };
		const _returnValuewOJeqYu = await _Helpt2DHR5E.argumentTerm(_argumentM7iSJSx)
	});

	it('test for Help', async () => {
		const _HelpgHCGFJN = new Help()
		const _cmdLpYdnQA = "YgUmsivGxMRTpBGk98gsi8uKisVdKeGeUA6fv3KaJpaqSFv38q6UF1sUrWaiigZ1R9QocESwQToUlIMNzi";
		const _returnValueC0nLnGr = await _HelpgHCGFJN.subcommandTerm(_cmdLpYdnQA)
		const _arrayValuevHLqBi2 = "nUmwoabF5ap2LI9WU1";
		const _cmdMBeVE7 = [_arrayValuevHLqBi2]
		const _returnValueZKVb9k9 = await _HelpgHCGFJN.visibleOptions(_cmdMBeVE7)
	});

	it('test for Help', async () => {
		const _HelpYmSNxZc = new Help()
		const _cmdCF9Cs0M = null;
		const _returnValueP4YbqtO = undefined;
		const _helperbzFnqLC = () => { return _returnValueP4YbqtO };
		const _returnValuerNvddwa = await _HelpYmSNxZc.longestArgumentTermLength(_cmdCF9Cs0M, _helperbzFnqLC)
		const _returnValue4VgVp5 = null;
		const _descriptionk6oku5e = () => { return _returnValue4VgVp5 };
		const _cmdRxjaIzh = {
			"description": _descriptionk6oku5e
	}
		const _returnValuecRKiRH = await _HelpYmSNxZc.subcommandDescription(_cmdRxjaIzh)
		const _cmdUua2ti4 = "N4keRn4xm4TOqTWc7dMYDZpTMqCPlHHIipKfaLdhjqGNUv2Ky1KSd64YXa6SqA";
		const _returnValuekdJD7tA = true;
		const _helperYh2vmla = () => { return _returnValuekdJD7tA };
		const _returnValue3DIy9Q = await _HelpYmSNxZc.longestSubcommandTermLength(_cmdUua2ti4, _helperYh2vmla)
	});

	it('test for Help', async () => {
		const _Helpo14c5Bw = new Help()
		const _returnValuecnt8BMQ = null;
		const _cmdo7pVQhv = () => { return _returnValuecnt8BMQ };
		const _sortSubcommandsldf4cX = 6.382484970050431;
		const _returnValueq2LOd3 = 4.118117057331736;
		const _returnValueny82bjA = () => { return _returnValueq2LOd3 };
		const _subcommandTermEnBDkBG = () => { return _returnValueny82bjA };
		const _helperyaPP9RZ = {
			"sortSubcommands": _sortSubcommandsldf4cX,
		"subcommandTerm": _subcommandTermEnBDkBG
	}
		const _returnValuedX7EUl0 = await _Helpo14c5Bw.formatHelp(_cmdo7pVQhv, _helperyaPP9RZ)
		const _argChoicesYx3J40B = {
		
	}
		const _negateTai9mY6 = "OkxnSu3EDhkIIRSlc7FNJ9R7eTQ8v4p9yg7NCJCTwjC";
		const _defaultValueVHu452 = undefined;
		const _returnValueOOZFld7 = true;
		const _defaultValueDescriptionyEwsSFN = () => { return _returnValueOOZFld7 };
		const _envVareGVXd6h = undefined;
		const _descriptionWu7xlGk = "jwycOGgRiYhmX6er2Gytjs6aoa";
		const _optionJCmfEia = {
			"argChoices": _argChoicesYx3J40B,
		"negate": _negateTai9mY6,
		"defaultValue": _defaultValueVHu452,
		"defaultValueDescription": _defaultValueDescriptionyEwsSFN,
		"envVar": _envVareGVXd6h,
		"description": _descriptionWu7xlGk
	}
		const _returnValueePSwW27 = await _Helpo14c5Bw.optionDescription(_optionJCmfEia)
	});

	it('test for Help', async () => {
		const _HelpkciUtzt = new Help()
		const _argChoicesBi6bX0x = {
		
	}
		const _defaultValueZQ8tHpx = undefined;
		const _defaultValueDescriptionCVUCUIL = null;
		const _descriptionWrNAZdc = 4.999861175226135;
		const _argumentGBYIze3 = {
			"argChoices": _argChoicesBi6bX0x,
		"defaultValue": _defaultValueZQ8tHpx,
		"defaultValueDescription": _defaultValueDescriptionCVUCUIL,
		"description": _descriptionWrNAZdc
	}
		const _returnValuePi4ob28 = await _HelpkciUtzt.argumentDescription(_argumentGBYIze3)
		const _arrayValueX7DDRkN = "xrqUSL46";
		const _arrayValueVFeDHvY = 9.836517065692082;
		const _arrayValueREJffSq = [_arrayValueX7DDRkN, _arrayValueVFeDHvY]
		const _arrayValue5HXuKy = [_arrayValueREJffSq]
		const _arrayValueIlIm7P = 7.005564471724963;
		const _cmdvRYKkvQ = [_arrayValue5HXuKy, _arrayValueIlIm7P]
		const _returnValueJgjBY30 = await _HelpkciUtzt.subcommandTerm(_cmdvRYKkvQ)
		const _cmdBjTBvoS = null;
		const _returnValueX4hVUHk = undefined;
		const _helperTWD5aeZ = () => { return _returnValueX4hVUHk };
		const _returnValuevuIax5S = await _HelpkciUtzt.padWidth(_cmdBjTBvoS, _helperTWD5aeZ)
		const _optionsGunMv9h = {
		
	}
		const __hasHelpOptionJUeK8QF = undefined;
		const __helpShortFlageaeZ5wd = {
		
	}
		const _returnValueXfFe5yG = true;
		const __findOption0ODjgl = () => { return _returnValueXfFe5yG };
		const __helpLongFlagMc6UbJM = null;
		const _createOptionCVjPw9 = {
		
	}
		const __helpDescriptionsvO6zQK = "YW8OMDbel64hCSxjHNbpVhnJaeI6J1b97tyCgloAE5hBj9jxD41vOOGxJMqSE4zLOZkFauCV15NFcyDpsURX";
		const __helpFlagsuncFwGC = -8.157328446048288;
		const _cmdnc3b0NG = {
			"options": _optionsGunMv9h,
		"_hasHelpOption": __hasHelpOptionJUeK8QF,
		"_helpShortFlag": __helpShortFlageaeZ5wd,
		"_findOption": __findOption0ODjgl,
		"_helpLongFlag": __helpLongFlagMc6UbJM,
		"createOption": _createOptionCVjPw9,
		"_helpDescription": __helpDescriptionsvO6zQK,
		"_helpFlags": __helpFlagsuncFwGC
	}
		const _returnValuebvLLzBB = await _HelpkciUtzt.visibleOptions(_cmdnc3b0NG)
	});

	it('test for Help', async () => {
		const _HelpNS9jwjC = new Help()
		const _argumentXhdopaC = "ybrA6DuwTsIXjvB1fqHeqcA9kX8jbp0xNMBvzUMKO6at2liKYIVzuocuOYbZH";
		const _returnValuegEDgR4 = await _HelpNS9jwjC.argumentDescription(_argumentXhdopaC)
		const _returnValuerk3WWH0 = 4.262179404618765;
		const _optionNnW5Kou = () => { return _returnValuerk3WWH0 };
		const _returnValuezxYO0G = await _HelpNS9jwjC.optionDescription(_optionNnW5Kou)
	});

	it('test for Help', async () => {
		const _HelpFYPPCOv = new Help()
		const _strCcjxEaH = "1eUvL6hZ9O5bnUYawVuYrsG0kPs9EsDSxrol";
		const _widthlPCGBJp = -2.2425404947926673;
		const _arrayValuekm553Io = null;
		const _arrayValueRxwmMnM = {
		
	}
		const _arrayValuee6IeEYb = 4.784063571707684;
		const _arrayValueTdvkxVO = [_arrayValuekm553Io, _arrayValueRxwmMnM, _arrayValuee6IeEYb]
		const _arrayValueeDBXESs = undefined;
		const _indenthGJwh1I = [_arrayValueTdvkxVO, _arrayValueeDBXESs]
		const _minColumnWidthSL5YVVz = 7.911147898547743;
		const _returnValueprs46jW = await _HelpFYPPCOv.wrap(_strCcjxEaH, _widthlPCGBJp, _indenthGJwh1I, _minColumnWidthSL5YVVz)
		const _argumentzEp8S69 = -9.704114868546485;
		const _returnValueJ98Sfws = await _HelpFYPPCOv.argumentTerm(_argumentzEp8S69)
		const _returnValuer0ebixB = false;
		const _descriptiongbSgQ6p = () => { return _returnValuer0ebixB };
		const _cmdN4pUuAZ = {
			"description": _descriptiongbSgQ6p
	}
		const _returnValuePnXmY2b = await _HelpFYPPCOv.commandDescription(_cmdN4pUuAZ)
		const _argumentFo8vSCF = null;
		const _returnValueHh3raQ = await _HelpFYPPCOv.argumentTerm(_argumentFo8vSCF)
	});

	it('test for Help', async () => {
		const _HelpmgFkL4D = new Help()
		const _returnValueY4Okou = "ix03fwKN";
		const _descriptionMmR4B1 = () => { return _returnValueY4Okou };
		const _cmduyS3JLt = {
			"description": _descriptionMmR4B1
	}
		const _returnValueWEaA4z6 = await _HelpmgFkL4D.commandDescription(_cmduyS3JLt)
		const _cmdZc7Cg6q = "g2BN4DQfkFUaHNArt1FBocvafnVnd5hMoaGFNqWJrqss6";
		const _returnValuePljWAxc = await _HelpmgFkL4D.visibleOptions(_cmdZc7Cg6q)
		const _namecdJUe8G = null;
		const _cmdsPfEZHG = new Command(_namecdJUe8G)
		const _flagsh0MvTOL = "tCGCexOauMg5GJiI0dwadCh741Pq1wboQGMckzZuLAnNEhScLmV86cKRB96Kg53YRUR2RcU2U4lj2Y9oXX9unysxa";
		const _descriptionYxELw86 = "FXehHvNbwHK6GxqGhoqoSFoYICcUtc7xMIfdYhWBeKR7efbvbvefOlz4UlpD5QcQGl6qFV3";
		const _optionCxqEtOA = new Option(_flagsh0MvTOL, _descriptionYxELw86)
		const _mandatorynWzY9F6 = false;
		const _returnValueXcU1Hc = await _optionCxqEtOA.makeOptionMandatory(_mandatorynWzY9F6)
		const _hideIuBVJI = true;
		const _returnValuedUYEWwp = await _optionCxqEtOA.hideHelp(_hideIuBVJI)
		const _returnValue39Lwsk = await _cmdsPfEZHG.missingMandatoryOptionValue(_optionCxqEtOA)
		const _contextOptionsxMqzCCd = undefined;
		const _returnValuej9qWgkY = await _cmdsPfEZHG.outputHelp(_contextOptionsxMqzCCd)
		const _cmdXnAgksc = "StrdqLPKRS4MEzpsUUjdON5dciMjW7O3foSMjgEYf2icN1gby7FesORcStaeYxazviLyh5USiLtd6QxW6cWZXiaCYvHd38Vd";
		const _returnValuemNHhPEb = true;
		const _optsWdlPxpO = () => { return _returnValuemNHhPEb };
		const _returnValuemy7FeK3 = await _cmdsPfEZHG.addCommand(_cmdXnAgksc, _optsWdlPxpO)
		const _returnValuemWLLEmw = await _HelpmgFkL4D.commandDescription(_cmdsPfEZHG)
	});

	it('test for Help', async () => {
		const _HelpfwdDuAs = new Help()
		const _cmdsxdIH7 = null;
		const _arrayValueLVWh5rB = null;
		const _arrayValueQ9kcnU2 = undefined;
		const _arrayValueMRjUs4c = "Oc";
		const _helperPKgsLVr = [_arrayValueLVWh5rB, _arrayValueQ9kcnU2, _arrayValueMRjUs4c]
		const _returnValue35X3Zr = await _HelpfwdDuAs.longestOptionTermLength(_cmdsxdIH7, _helperPKgsLVr)
		const _arrayValueVFi2qR = "RweVjSTgHbK1QYhI5xLlLrHDd4LcmrSNvVpmvpIjBbG8bzO6CiaFGB1eLvS5eQY62ee15rfhk3afKnJqR6F0f";
		const _cmdyPCDvwC = [_arrayValueVFi2qR]
		const _helpervQgLnvb = "LisPbTZuiOlUUxgDU3hlmRFnzMgaIYVrZfBE";
		const _returnValueZyyQzqt = await _HelpfwdDuAs.longestArgumentTermLength(_cmdyPCDvwC, _helpervQgLnvb)
		const _optionKRwfdKX = true;
		const _returnValueVwJ9hOm = await _HelpfwdDuAs.optionDescription(_optionKRwfdKX)
	});

	it('test for Help', async () => {
		const _HelpPUYk6S0 = new Help()
		const __namegRl08ks = 7.543386917191896;
		const _returnValueAPpV4r = -9.732195225175756;
		const __aliasesozx7pWL = () => { return _returnValueAPpV4r };
		const _parentNjKeH75 = -9.25393156101325;
		const _arrayValueoLq29LV = {
		
	}
		const _returnValueDAhQ4S6 = undefined;
		const _arrayValueuhHLF1b = () => { return _returnValueDAhQ4S6 };
		const _arrayValueC3DH23z = false;
		const _arrayValueyZdLFey = -7.685615149845916;
		const _returnValueaF5wpKV = [_arrayValueoLq29LV, _arrayValueuhHLF1b, _arrayValueC3DH23z, _arrayValueyZdLFey]
		const _usageMG3F8fp = () => { return _returnValueaF5wpKV };
		const _cmdGv8mkw3 = {
			"_name": __namegRl08ks,
		"_aliases": __aliasesozx7pWL,
		"parent": _parentNjKeH75,
		"usage": _usageMG3F8fp
	}
		const _returnValue4wSBSt = await _HelpPUYk6S0.commandUsage(_cmdGv8mkw3)
		const _cmdrpu8CDS = -4.704030885621512;
		const _helpereSvrmVy = new Help()
		const _arrayValuegSAPV5y = 9.996852283159004;
		const _arrayValuebXSq5hq = null;
		const _nameBqnaGR = [_arrayValuegSAPV5y, _arrayValuebXSq5hq]
		const _cmdOcmrxD5 = new Command(_nameBqnaGR)
		const _displayHelpIp4B9dk = false;
		const _returnValuegfqqYXq = await _cmdOcmrxD5.showHelpAfterError(_displayHelpIp4B9dk)
		const __namerBvBybP = {
		
	}
		const _commandsS7ZwJM = undefined;
		const __hiddenviWHGFx = false;
		const _arrayValueIYPuPnk = undefined;
		const _arrayValuebuVr8lM = null;
		const _arrayValuemfDUm2F = null;
		const _parentQOyP1sq = [_arrayValueIYPuPnk, _arrayValuebuVr8lM, _arrayValuemfDUm2F]
		const _cmdUXeNJH3 = {
			"_name": __namerBvBybP,
		"commands": _commandsS7ZwJM,
		"_hidden": __hiddenviWHGFx,
		"parent": _parentQOyP1sq
	}
		const _isDefaultdSaZryI = false;
		const _optsQL6nyIZ = {
			"isDefault": _isDefaultdSaZryI
	}
		const _returnValueWCJFJRe = await _cmdOcmrxD5.addCommand(_cmdUXeNJH3, _optsQL6nyIZ)
		const _fnjnaP1n = {
		
	}
		const _returnValueSPY76C = await _cmdOcmrxD5.exitOverride(_fnjnaP1n)
		const _returnValueCFGneKs = await _helpereSvrmVy.visibleOptions(_cmdOcmrxD5)
		const _cmdGUBLM6O = true;
		const _helperruKdTiK = "Kr9iOD9bWQMV74pkgknAd";
		const _returnValuekXGg9dW = await _helpereSvrmVy.formatHelp(_cmdGUBLM6O, _helperruKdTiK)
		const _returnValueJ2hLHIt = await _HelpPUYk6S0.longestOptionTermLength(_cmdrpu8CDS, _helpereSvrmVy)
		const _returnValueQKELB24 = 7.568588505898457;
		const _descriptionOCuP7G7 = () => { return _returnValueQKELB24 };
		const _cmdhAdJsaO = {
			"description": _descriptionOCuP7G7
	}
		const _returnValuewCfzsId = await _HelpPUYk6S0.subcommandDescription(_cmdhAdJsaO)
		const _cmdJLZEFnu = true;
		const _returnValueQFL65u3 = await _HelpPUYk6S0.visibleCommands(_cmdJLZEFnu)
	});

	it('test for Help', async () => {
		const _HelphqNnNjT = new Help()
		const _returnValueXgfoBB4 = {
		
	}
		const _nameOwpP90t = () => { return _returnValueXgfoBB4 };
		const _descriptionipBojq5 = {
		
	}
		const _cmdK8Z6gaD = new Argument(_nameOwpP90t, _descriptionipBojq5)
		const _valuehYEoFpf = null;
		const _previousaaEgDrS = "cl8gSEoeFRZ";
		const _returnValueWTfRz8p = await _cmdK8Z6gaD._concatValue(_valuehYEoFpf, _previousaaEgDrS)
		const _returnValuetKRkn79 = await _cmdK8Z6gaD.name()
		const _fnO5PTmWh = undefined;
		const _returnValuew8Gqk5h = await _cmdK8Z6gaD.argParser(_fnO5PTmWh)
		const _arrayValueG6o7Dx = undefined;
		const _returnValueVlgnYjj = undefined;
		const _arrayValuexf1q7IC = () => { return _returnValueVlgnYjj };
		const _arrayValuebAgE4py = undefined;
		const _arrayValueLTB8jrn = -0.6098020016862442;
		const _valueH2ScTn = [_arrayValueG6o7Dx, _arrayValuexf1q7IC, _arrayValuebAgE4py, _arrayValueLTB8jrn]
		const _descriptionenCcVE4 = null;
		const _returnValueXoAQyea = await _cmdK8Z6gaD.default(_valueH2ScTn, _descriptionenCcVE4)
		const _returnValueeQ9abnD = await _HelphqNnNjT.subcommandDescription(_cmdK8Z6gaD)
		const _flagsG1iey8P = true;
		const _descriptionIbGQlX = "lAbNZKna0mlHewXHFgIyaQ5HSilbh8H";
		const _optionQdIZz1 = new Option(_flagsG1iey8P, _descriptionIbGQlX)
		const _fn8MrmPG = undefined;
		const _returnValue1dhZ6h = await _optionQdIZz1.argParser(_fn8MrmPG)
		const _mandatoryw8caO4F = false;
		const _returnValueTJgz8Ti = await _optionQdIZz1.makeOptionMandatory(_mandatoryw8caO4F)
		const _valuez4ueIaF = {
		
	}
		const _returnValueub89NIn = undefined;
		const _returnValueWvlgGWI = () => { return _returnValueub89NIn };
		const _concatmac25kD = () => { return _returnValueWvlgGWI };
		const _previousBPQOJEu = {
			"concat": _concatmac25kD
	}
		const _returnValuerUkOWXH = await _optionQdIZz1._concatValue(_valuez4ueIaF, _previousBPQOJEu)
		const _returnValueZ60JjhI = await _optionQdIZz1.attributeName()
		const _returnValueHvaJorT = await _HelphqNnNjT.optionTerm(_optionQdIZz1)
	});

	it('test for Help', async () => {
		const _HelpURA9ZYG = new Help()
		const _cmdQDzzWTd = "GHG328yFipJ53l7Zp7VSFuEgmIKbDcMFGbAuvXi3y6";
		const _sortSubcommandskBr5Fm5 = true;
		const _returnValuexfQbYvM = {
		
	}
		const _subcommandTermWrWkOMv = () => { return _returnValuexfQbYvM };
		const _helperpxHZo8e = {
			"sortSubcommands": _sortSubcommandskBr5Fm5,
		"subcommandTerm": _subcommandTermWrWkOMv
	}
		const _returnValueAWTKL7C = await _HelpURA9ZYG.longestSubcommandTermLength(_cmdQDzzWTd, _helperpxHZo8e)
		const _nameXhUkeJB = true;
		const _argumentnoYAfxO = new Command(_nameXhUkeJB)
		const _argvqxefEkg = -1.3128037559810206;
		const _arrayValueRyswN4I = -0.7743059804584771;
		const _arrayValueCwiKH0 = 2.377972417943413;
		const _arrayValuebwy8S0h = [_arrayValueRyswN4I, _arrayValueCwiKH0]
		const _arrayValue40ulYo = []
		const _parseOptionsfUN2XH = [_arrayValuebwy8S0h, _arrayValue40ulYo]
		const _returnValueTiW4DI = await _argumentnoYAfxO.parseAsync(_argvqxefEkg, _parseOptionsfUN2XH)
		const _argLRU85HY = 0.7966469329223358;
		const _returnValuerABzdKV = await _argumentnoYAfxO._findOption(_argLRU85HY)
		const _promisej4HUBc5 = {
		
	}
		const _eventyg4uC8Y = "d43RHBh3WOAbOTiEVMmoi7j3ZcVyyBCh7vsAP5IFCAhyMbxHw3C6kfN1iBFjsVrPJC6GYiIopr25VM8KmFAGbOi0E7Piw7X1";
		const _returnValueLvvh4qv = await _argumentnoYAfxO._chainOrCallHooks(_promisej4HUBc5, _eventyg4uC8Y)
		const _returnValueMQxihj9 = await _HelpURA9ZYG.argumentTerm(_argumentnoYAfxO)
		const _arrayValuethly6pZ = undefined;
		const _arrayValuesDUsKC2 = null;
		const _arrayValuerHXVYEZ = undefined;
		const _arrayValueqBlmhu6 = undefined;
		const _arrayValueHIOPjT6 = "ETKZBhjEtTAORB3l7eyGAruGgsldAUIGDt9Dy4B1NktcoGB9e3s3ydM8XsYq";
		const _arrayValuejT4VJn = [_arrayValuerHXVYEZ, _arrayValueqBlmhu6, _arrayValueHIOPjT6]
		const _arrayValuesLzS3Zj = [_arrayValuethly6pZ, _arrayValuesDUsKC2, _arrayValuejT4VJn]
		const _arrayValueAIcRXzz = "jdtRXcClgotaBvgtVqZBtl8ftY";
		const _cmdvnoMAoN = [_arrayValuesLzS3Zj, _arrayValueAIcRXzz]
		const _helperpvXPCgK = "Qj6Crt51JdtaOYbfLUkKkJXcjoWPAf1zsoexj82Pn";
		const _returnValueAK4GNDp = await _HelpURA9ZYG.longestOptionTermLength(_cmdvnoMAoN, _helperpvXPCgK)
	});

	it('test for Help', async () => {
		const _Helpnu8mT0n = new Help()
		const _flagsODcBf72 = "KgrmD4fc1sKNOc4OdDiFAMYG9zzcyNipB5X5SzFvKd7xAwniXWxFB6lXphlRY2Qrnly8lW9uW9ds2mVLLdPyGp";
		const _descriptionNS3pEb5 = "iDEJ7rd16hcl9Ok5nt3cR9PsXsugsvPxjD6XwS1ooh2E";
		const _argumentss9ssHv = new Option(_flagsODcBf72, _descriptionNS3pEb5)
		const _fnLuRT26N = undefined;
		const _returnValuesi7Od8b = await _argumentss9ssHv.argParser(_fnLuRT26N)
		const _hidezkD2gtt = false;
		const _returnValueeCj8FXO = await _argumentss9ssHv.hideHelp(_hidezkD2gtt)
		const _valueJzTuYgZ = undefined;
		const _descriptiona2r32Xy = undefined;
		const _returnValuehO1uDgn = await _argumentss9ssHv.default(_valueJzTuYgZ, _descriptiona2r32Xy)
		const _returnValuekvvV1sn = await _Helpnu8mT0n.argumentTerm(_argumentss9ssHv)
	});

	it('test for Help', async () => {
		const _HelplZLQp3Z = new Help()
		const _returnValueIPbhJml = "SV5y5pvBf2zt4fsLYalvqdz3JW6Y7fmco7wap5X9cU8MSSNrlvclfd";
		const _optioncYiITiO = () => { return _returnValueIPbhJml };
		const _returnValuevxiAuuu = await _HelplZLQp3Z.optionTerm(_optioncYiITiO)
		const _nameH94Nkp1 = null;
		const _cmdUCNHJdc = new Command(_nameH94Nkp1)
		const _returnValueiOlFWFM = null;
		const _arrayValueFfo0D4 = () => { return _returnValueiOlFWFM };
		const _arrayValueceerQlX = null;
		const _arrayValueSTcH1Bq = -4.3669673709926204;
		const _arrayValueSOL8UZ = true;
		const _arrayValueLz1qRzW = [_arrayValueSOL8UZ]
		const _nameeeFFIwB = [_arrayValueFfo0D4, _arrayValueceerQlX, _arrayValueSTcH1Bq, _arrayValueLz1qRzW]
		const _returnValueXqhvZnj = await _cmdUCNHJdc.missingArgument(_nameeeFFIwB)
		const _keyZnWox3 = null;
		const _returnValuevzjHAxh = await _cmdUCNHJdc.getOptionValue(_keyZnWox3)
		const _displayHelpJBeNizn = {
		
	}
		const _returnValuekrxgOJ8 = await _cmdUCNHJdc.showHelpAfterError(_displayHelpJBeNizn)
		const _returnValuePCQNcrH = await _HelplZLQp3Z.visibleArguments(_cmdUCNHJdc)
	});

	it('test for Help', async () => {
		const _Helpm3dwITP = new Help()
		const _returnValuejEnaNaB = undefined;
		const _matchcZnU4pP = () => { return _returnValuejEnaNaB };
		const _arrayValueLmUaFbc = null;
		const _arrayValuexummKOn = {
		
	}
		const _returnValuey3yWEVT = [_arrayValueLmUaFbc, _arrayValuexummKOn]
		const _substrCBW2T7A = () => { return _returnValuey3yWEVT };
		const _stroeV2TWO = {
			"match": _matchcZnU4pP,
		"substr": _substrCBW2T7A
	}
		const _widthJidd70 = -4.0192701067875145;
		const _indentN80xaIm = -0.9667914921799081;
		const _minColumnWidthW4QSXi9 = -2.7198957318269485;
		const _returnValueGGBbzP0 = await _Helpm3dwITP.wrap(_stroeV2TWO, _widthJidd70, _indentN80xaIm, _minColumnWidthW4QSXi9)
		const _arrayValueTyGVQ0a = undefined;
		const _arrayValuedjoLiS = "SiMwciec45ZlQosknRQT3KgfiDF1PnLVWVX7GXWmclt5kpRQCm7glfjoLwB";
		const _returnValuesqduLo = [_arrayValueTyGVQ0a, _arrayValuedjoLiS]
		const _optionqSAQ3e9 = () => { return _returnValuesqduLo };
		const _returnValueH9HUGKg = await _Helpm3dwITP.optionDescription(_optionqSAQ3e9)
		const _returnValuePjiK0VB = "l0N341ng9FY1RJPDGAPzeb0P0DuO24dvWQsC97ugv2KFTRT2DIUvLDK5V";
		const _cmdCoofhYB = () => { return _returnValuePjiK0VB };
		const _returnValueSVgd0wv = await _Helpm3dwITP.visibleOptions(_cmdCoofhYB)
	});

	it('test for Help', async () => {
		const _HelppuTmhSG = new Help()
		const _arrayValueEEKT1lX = null;
		const _returnValueYnwdIhP = [_arrayValueEEKT1lX]
		const _nameYcHk5eD = () => { return _returnValueYnwdIhP };
		const _argumentencmyrn = {
			"name": _nameYcHk5eD
	}
		const _returnValueaIxnIqi = await _HelppuTmhSG.argumentTerm(_argumentencmyrn)
		const _returnValuej2GvbIA = {
		
	}
		const _matchSmjshht = () => { return _returnValuej2GvbIA };
		const _returnValuepHDpnTP = undefined;
		const _substrvsagCX7 = () => { return _returnValuepHDpnTP };
		const _strr1AzYBw = {
			"match": _matchSmjshht,
		"substr": _substrvsagCX7
	}
		const _widthHgQ7CAG = 9.35331486180771;
		const _indentywFIH4R = -9.652291983524812;
		const _minColumnWidthtkyKER = -3.212890275413306;
		const _returnValuedXGmQuT = await _HelppuTmhSG.wrap(_strr1AzYBw, _widthHgQ7CAG, _indentywFIH4R, _minColumnWidthtkyKER)
		const _arrayValueXM3hpqz = null;
		const _arrayValueZQTswNc = -2.0208129263239227;
		const _optionOlFCIHu = [_arrayValueXM3hpqz, _arrayValueZQTswNc]
		const _returnValueZj5zabH = await _HelppuTmhSG.optionDescription(_optionOlFCIHu)
		const _returnValueYvuSIl4 = -9.283177125907859;
		const _cmdytLtlD3 = () => { return _returnValueYvuSIl4 };
		const _returnValueDC9ocCc = await _HelppuTmhSG.visibleArguments(_cmdytLtlD3)
	});

	it('test for Help', async () => {
		const _HelpxgxEvKG = new Help()
		const _argumentecSxhEQ = "kdzNEHesNkL31q8RvgrE15n59sljy3cXEAG1Jfyt6bGUUg4sNswPcxeKpa2L5FEFiJAqn4XKIV5e4YMbqYH3Yg5FSLlVyAbe";
		const _returnValueDREv0On = await _HelpxgxEvKG.argumentDescription(_argumentecSxhEQ)
		const _name8LFHkM = undefined;
		const _cmdiI8VXf7 = new Command(_name8LFHkM)
		const _strsXXEO8W = undefined;
		const _argsDescriptionX6xaRMz = undefined;
		const _returnValuehyCnK5T = await _cmdiI8VXf7.description(_strsXXEO8W, _argsDescriptionX6xaRMz)
		const _returnValues4dYG8r = await _HelpxgxEvKG.subcommandTerm(_cmdiI8VXf7)
	});

	it('test for Help', async () => {
		const _Helprp9Mc0e = new Help()
		const _nameFss7zPq = undefined;
		const _cmdDBSvtnH = new Command(_nameFss7zPq)
		const _arrayValueMI001hH = "GxLCyWqdgyqKvBp2hU6wliT1Mpew";
		const _arrayValuetzShbYZ = -7.532772540416467;
		const _arrayValueGYBTEk = "aSTw95";
		const _arrayValue7jkpTG = null;
		const _arrayValuePlb3Ifg = true;
		const _arrayValueKorQZ2s = undefined;
		const _arrayValueaCqG7Tv = [_arrayValueGYBTEk, _arrayValue7jkpTG, _arrayValuePlb3Ifg, _arrayValueKorQZ2s]
		const _arrayValueV9xSF6Z = {
		
	}
		const _aliasesPAGhHSI = [_arrayValueMI001hH, _arrayValuetzShbYZ, _arrayValueaCqG7Tv, _arrayValueV9xSF6Z]
		const _returnValuej9f40Of = await _cmdDBSvtnH.aliases(_aliasesPAGhHSI)
		const _strV1pd3Rm = undefined;
		const _argsDescriptionxQRqwEQ = undefined;
		const _returnValueQimc6B4 = await _cmdDBSvtnH.description(_strV1pd3Rm, _argsDescriptionxQRqwEQ)
		const _returnValueApk2uCy = await _Helprp9Mc0e.visibleCommands(_cmdDBSvtnH)
		const _nameYn99GSy = "t9fi8lxAHYexc5NfmQEmnf5rQUVdvnXKfcJKPUU";
		const _optioniZskkq = new Command(_nameYn99GSy)
		const _positionalpNTKp9O = false;
		const _returnValueiHb2on6 = await _optioniZskkq.enablePositionalOptions(_positionalpNTKp9O)
		const _aliasJnStNAR = {
		
	}
		const _returnValuew4fPXQw = await _optioniZskkq.alias(_aliasJnStNAR)
		const _returnValueVyNPKvk = await _Helprp9Mc0e.optionDescription(_optioniZskkq)
	});

	it('test for Help', async () => {
		const _HelpftTm1by = new Help()
		const __argsDescriptionyQKLE3w = {
		
	}
		const __argsrireqNa = {
		
	}
		const _cmdf2nvux7 = {
			"_argsDescription": __argsDescriptionyQKLE3w,
		"_args": __argsrireqNa
	}
		const _returnValuePH94RNX = await _HelpftTm1by.visibleArguments(_cmdf2nvux7)
		const _cmdjiTKsHt = "lTzDqSIuqqSnjiNSEq";
		const _returnValuejj4qjUR = await _HelpftTm1by.visibleArguments(_cmdjiTKsHt)
		const _arrayValuea4y1jty = true;
		const _arrayValueQe68ZgA = true;
		const _arrayValueOzevLna = undefined;
		const _arrayValueZRrRkuA = {
		
	}
		const _argumentkeeBbC = [_arrayValuea4y1jty, _arrayValueQe68ZgA, _arrayValueOzevLna, _arrayValueZRrRkuA]
		const _returnValuetymRopc = await _HelpftTm1by.argumentTerm(_argumentkeeBbC)
		const _cmdifArh4o = "NSvnrMasC3IUu3";
		const _helperEMi1FUC = new Help()
		const _cmdbaailk = "wTpNn1JoxBbhrXAcmJTerqxAirCrnDkJuVmazrHwsj4St9R9bPP";
		const _returnValuelpzq1aH = {
		
	}
		const _visibleOptionsTSDFQD = () => { return _returnValuelpzq1aH };
		const _returnValue8buE32 = false;
		const _optionTermKX8hlAH = () => { return _returnValue8buE32 };
		const _helperA6t9C5k = {
			"visibleOptions": _visibleOptionsTSDFQD,
		"optionTerm": _optionTermKX8hlAH
	}
		const _returnValuebrL0g0 = await _helperEMi1FUC.longestOptionTermLength(_cmdbaailk, _helperA6t9C5k)
		const _cmdTpcByHm = false;
		const _helperMH0d0y = new Help()
		const _arrayValueJgITMZT = "4QwdRrO8QYXGJIjRq40R7Cd8FjjjPzhWMf5Uq8WOJMxHqVtasOMqGs4jb7r9dSM3Yqly";
		const _arrayValueteWBXh1 = 8.054289409964369;
		const _arrayValueXtzJJx = null;
		const _cmdZTQsv5 = [_arrayValueJgITMZT, _arrayValueteWBXh1, _arrayValueXtzJJx]
		const _returnValueuRsMKr = await _helperMH0d0y.visibleArguments(_cmdZTQsv5)
		const _nameBoHIKU4 = null;
		const _cmdBDfLi7b = new Command(_nameBoHIKU4)
		const _returnValueiqn32Us = await _cmdBDfLi7b._checkNumberOfArguments()
		const _argfcpjYz = true;
		const _returnValueRQX2h0R = await _cmdBDfLi7b._findOption(_argfcpjYz)
		const _arrayValueIntBvsk = 0.36600028359318415;
		const _commandNamecoapjaz = [_arrayValueIntBvsk]
		const _operandsUGNDkbT = "BQ7K5sfhyKfbj6Frzldc60tMGobhFgNm1i4DzL";
		const _unknownbCKEYLb = null;
		const _returnValueSVI5XLv = await _cmdBDfLi7b._dispatchSubcommand(_commandNamecoapjaz, _operandsUGNDkbT, _unknownbCKEYLb)
		const _returnValueotU79lK = await _helperMH0d0y.visibleCommands(_cmdBDfLi7b)
		const _returnValueqP0KRom = await _helperEMi1FUC.longestOptionTermLength(_cmdTpcByHm, _helperMH0d0y)
		const _returnValuecbkKtm4 = "EI40wOVDl4LWsovpjo";
		const _cmdrBlTXmM = () => { return _returnValuecbkKtm4 };
		const _returnValue7mqOGR = await _helperEMi1FUC.commandDescription(_cmdrBlTXmM)
		const _returnValueUntaXji = await _HelpftTm1by.longestOptionTermLength(_cmdifArh4o, _helperEMi1FUC)
	});

	it('test for Help', async () => {
		const _HelpdesTs4H = new Help()
		const _cmdZTiXkz8 = null;
		const _helpermE1isF = new Help()
		const _cmdbqj5j1 = 5.463026180738597;
		const _helperKhxGxaa = new Help()
		const _flagsXkhPFx = "jHazFUxG2F5THnMoYcwz616ApxG1w7nSPdObBvCfksT1AQzNA9mcwEt0BVlNwAfYxO4Uc";
		const _option51GOIZ = {
			"flags": _flagsXkhPFx
	}
		const _returnValuenNZMeU = await _helperKhxGxaa.optionTerm(_option51GOIZ)
		const _cmdN1ZjjWR = "VcCjhS5ZRxr8Wi3cCQeimCtdj4hI1FfBKCt5aPxDRa2Oodni0naOqTSebjtfPVTd";
		const _helperLC59yF = new Help()
		const _argChoicesRHW7aC = {
		
	}
		const _negatenDUjT6U = undefined;
		const _defaultValueCtNFdRT = undefined;
		const _arrayValueEV5qUB0 = true;
		const _defaultValueDescriptionVERE5Sb = [_arrayValueEV5qUB0]
		const _envVarVXYxUcK = undefined;
		const _descriptiondfCFSjS = undefined;
		const _optionhP3BN4v = {
			"argChoices": _argChoicesRHW7aC,
		"negate": _negatenDUjT6U,
		"defaultValue": _defaultValueCtNFdRT,
		"defaultValueDescription": _defaultValueDescriptionVERE5Sb,
		"envVar": _envVarVXYxUcK,
		"description": _descriptiondfCFSjS
	}
		const _returnValueG6lFuKR = await _helperLC59yF.optionDescription(_optionhP3BN4v)
		const _returnValueuXBMGL = await _helperKhxGxaa.longestSubcommandTermLength(_cmdN1ZjjWR, _helperLC59yF)
		const _returnValueO9a6f9P = await _helpermE1isF.formatHelp(_cmdbqj5j1, _helperKhxGxaa)
		const _returnValueuxuDmZZ = -5.612583533512499;
		const _includesoAreVoG = () => { return _returnValueuxuDmZZ };
		const _flagslUVw8fu = {
			"includes": _includesoAreVoG
	}
		const _descriptionIEWyh9U = -1.5849424842822692;
		const _optionDN1vGlv = new Option(_flagslUVw8fu, _descriptionIEWyh9U)
		const _argsdXfFZu = {
		
	}
		const _returnValueq5oiV64 = await _optionDN1vGlv.is(_argsdXfFZu)
		const _mandatoryNIbt6Vr = false;
		const _returnValueYfytZSy = await _optionDN1vGlv.makeOptionMandatory(_mandatoryNIbt6Vr)
		const _mandatoryyzAqzcp = false;
		const _returnValueRyzGKw = await _optionDN1vGlv.makeOptionMandatory(_mandatoryyzAqzcp)
		const _returnValueMAB48Pj = await _helpermE1isF.optionDescription(_optionDN1vGlv)
		const _cmdLMVf1k2 = undefined;
		const _returnValueeHIo48w = -6.744511052993252;
		const _helpermN3wYPl = () => { return _returnValueeHIo48w };
		const _returnValuebYwtdBV = await _helpermE1isF.longestArgumentTermLength(_cmdLMVf1k2, _helpermN3wYPl)
		const _cmdAQzPEDs = undefined;
		const _helperaia8oqu = "NgTYNM9VEGpCN5nlTmkDQQLnJY";
		const _returnValuemIUh4Ht = await _helpermE1isF.formatHelp(_cmdAQzPEDs, _helperaia8oqu)
		const _cmdpyUFvnf = true;
		const _sortSubcommandsGgmrkyt = false;
		const _returnValueeq5Gl6n = -4.868033680847787;
		const _subcommandTermmdLFbz3 = () => { return _returnValueeq5Gl6n };
		const _helpergystKJc = {
			"sortSubcommands": _sortSubcommandsGgmrkyt,
		"subcommandTerm": _subcommandTermmdLFbz3
	}
		const _returnValuevp94pbc = await _helpermE1isF.formatHelp(_cmdpyUFvnf, _helpergystKJc)
		const _returnValueooGTrP = await _HelpdesTs4H.longestOptionTermLength(_cmdZTiXkz8, _helpermE1isF)
		const _cmdge7VtiP = "SmLJyLH1dNvAiw499Bx";
		const _returnValueVuJNgJj = await _HelpdesTs4H.visibleArguments(_cmdge7VtiP)
		const _optionscuCRtgn = {
		
	}
		const __hasHelpOptionr52RkMP = "15ArPjBiMNlbE6auDTV7RD7SVVTQLAwFNgXth2J9pg7H1fzUYYMckrDfaBDIGGt";
		const __helpShortFlagJN0YkEp = true;
		const _returnValueiLxwci0 = false;
		const _returnValuexKlSlf6 = () => { return _returnValueiLxwci0 };
		const __findOptionbIkhwkq = () => { return _returnValuexKlSlf6 };
		const __helpLongFlagajX8GlK = false;
		const _returnValuetjZpIm = true;
		const _createOptionTJQPWSt = () => { return _returnValuetjZpIm };
		const _arrayValuebIlnS2 = {
		
	}
		const __helpDescriptiony7qes0q = [_arrayValuebIlnS2]
		const _returnValueRnVLn78 = undefined;
		const _arrayValueHGG9gTz = () => { return _returnValueRnVLn78 };
		const _arrayValuejplFdON = undefined;
		const _arrayValueu40fmK = {
		
	}
		const _arrayValueoGK5dSK = [_arrayValueHGG9gTz, _arrayValuejplFdON, _arrayValueu40fmK]
		const _arrayValuemER6Vic = undefined;
		const __helpFlagsNQaMrbl = [_arrayValueoGK5dSK, _arrayValuemER6Vic]
		const _cmdtpvH9TP = {
			"options": _optionscuCRtgn,
		"_hasHelpOption": __hasHelpOptionr52RkMP,
		"_helpShortFlag": __helpShortFlagJN0YkEp,
		"_findOption": __findOptionbIkhwkq,
		"_helpLongFlag": __helpLongFlagajX8GlK,
		"createOption": _createOptionTJQPWSt,
		"_helpDescription": __helpDescriptiony7qes0q,
		"_helpFlags": __helpFlagsNQaMrbl
	}
		const _returnValuesbimm40 = await _HelpdesTs4H.visibleOptions(_cmdtpvH9TP)
		const _cmdvJVljF9 = "aWGLlV8bJJI5VXEc1erXaR9f72frdTmvhtZaro1WxUgIf20EQ2";
		const _returnValueZ1EGvfI = await _HelpdesTs4H.commandUsage(_cmdvJVljF9)
	});

	it('test for Help', async () => {
		const _HelpN4K4SkL = new Help()
		const _nametuQvHiN = []
		const _descriptionvt5FMc3 = undefined;
		const _argumentQKGnvMP = new Argument(_nametuQvHiN, _descriptionvt5FMc3)
		const _arrayValueg4JZ7Q = {
		
	}
		const _arrayValuejHbfDGq = null;
		const _valuetUj3IHI = [_arrayValueg4JZ7Q, _arrayValuejHbfDGq]
		const _descriptionU025rc = undefined;
		const _returnValuewrH5ot2 = await _argumentQKGnvMP.default(_valuetUj3IHI, _descriptionU025rc)
		const _fn5zuM47 = undefined;
		const _returnValue7RkQif = await _argumentQKGnvMP.argParser(_fn5zuM47)
		const _fnsZm8uo0 = undefined;
		const _returnValuedllPz9W = await _argumentQKGnvMP.argParser(_fnsZm8uo0)
		const _valueXoANsq = undefined;
		const _arrayValuepeoG7Fc = true;
		const _arrayValueESqsG9 = true;
		const _arrayValueZHvuzDU = -7.291120099030618;
		const _arrayValuefwGob1K = "MDWMNXSHmjDv9aKExKUzustbJoVADQr3rpo79mcnG";
		const _previousrZlInhJ = [_arrayValuepeoG7Fc, _arrayValueESqsG9, _arrayValueZHvuzDU, _arrayValuefwGob1K]
		const _returnValueqqgaBGY = await _argumentQKGnvMP._concatValue(_valueXoANsq, _previousrZlInhJ)
		const _returnValuee2uMhHx = await _HelpN4K4SkL.argumentDescription(_argumentQKGnvMP)
		const _cmdkEDE5I = "WvtnY7Ges5mf0wfB9KOxyj23rcOtAp5Sjw8Z";
		const _helper00srAX = "DmN8FK62pz6KuXDGgdg84TuZzLVLPyHeTX74gZXpOVWrSawj9NnseJgK0kkN";
		const _returnValueDjX3ICp = await _HelpN4K4SkL.longestOptionTermLength(_cmdkEDE5I, _helper00srAX)
		const _returnValueqsX08tE = []
		const _strnYZUaXG = () => { return _returnValueqsX08tE };
		const _widthjrX1UwV = -9.090653691953175;
		const _indentUu66luR = 8.389272881795044;
		const _minColumnWidthGAton5u = 9.979436332449684;
		const _returnValueJuseVpZ = await _HelpN4K4SkL.wrap(_strnYZUaXG, _widthjrX1UwV, _indentUu66luR, _minColumnWidthGAton5u)
	});

	it('test for Help', async () => {
		const _HelpJHHYiJ = new Help()
		const _arrayValuefXhC4qK = null;
		const _arrayValueyMgwbH2 = true;
		const _arrayValuehkcc3HU = null;
		const _arrayValueTZ9QiJS = [_arrayValueyMgwbH2, _arrayValuehkcc3HU]
		const _returnValuejb6bEXa = {
		
	}
		const _arrayValueZYCo0p3 = () => { return _returnValuejb6bEXa };
		const _optionpfkpxEW = [_arrayValuefXhC4qK, _arrayValueTZ9QiJS, _arrayValueZYCo0p3]
		const _returnValueu9dCDqq = await _HelpJHHYiJ.optionTerm(_optionpfkpxEW)
		const _returnValuesyUnBZT = false;
		const _namexbSqWaA = () => { return _returnValuesyUnBZT };
		const _cmdVWXNUN1 = new Command(_namexbSqWaA)
		const _fnxsVIpeQ = {
		
	}
		const _returnValueqyImVEc = await _cmdVWXNUN1.exitOverride(_fnxsVIpeQ)
		const _returnValueYJOBzBB = await _cmdVWXNUN1._checkForMissingMandatoryOptions()
		const _returnValuervWevxv = await _cmdVWXNUN1._hasImplicitHelpCommand()
		const _returnValueU9T1LG5 = await _HelpJHHYiJ.visibleOptions(_cmdVWXNUN1)
	});

	it('test for Help', async () => {
		const _HelpUtu2E7Y = new Help()
		const _optionpN2Q4lL = []
		const _returnValueZ72E3OJ = await _HelpUtu2E7Y.optionDescription(_optionpN2Q4lL)
		const _arrayValueSZRLDcC = false;
		const _nameVPq3Uhx = [_arrayValueSZRLDcC]
		const _descriptionw2noaCP = "mXBCMxOCNCUUMvgUR9eZj3ETU7BEMr8cR3JZnY4TSYYvP0g0oF3uZld7KT39BgsgjKqL4Hr5QS8s33nytvzvUsgarI4TCr";
		const _optionBgdfRao = new Argument(_nameVPq3Uhx, _descriptionw2noaCP)
		const _valueWuXTqc = "cYYWUMKtGQDUmCTbXSzRlEsw7MiCwQEIjJU37gAdlbJ1DMZFUdXuJ1s";
		const _descriptionyGk3Pyd = undefined;
		const _returnValueojJfeGl = await _optionBgdfRao.default(_valueWuXTqc, _descriptionyGk3Pyd)
		const _fnUKd0wvn = undefined;
		const _returnValueyr4CoNG = await _optionBgdfRao.argParser(_fnUKd0wvn)
		const _returnValueNf3jhYL = await _optionBgdfRao.name()
		const _valueRPEHPlo = {
		
	}
		const _descriptionXv672Tk = -3.6067310269787924;
		const _returnValueCCZPFz0 = await _optionBgdfRao.default(_valueRPEHPlo, _descriptionXv672Tk)
		const _returnValueyvcMnxe = await _HelpUtu2E7Y.optionDescription(_optionBgdfRao)
		const _cmdt2VciUv = null;
		const _helpergw2xgW = new Help()
		const _returnValueRZ38HFC = null;
		const _argumentqGDegAu = () => { return _returnValueRZ38HFC };
		const _returnValueaPnMjJa = await _helpergw2xgW.argumentTerm(_argumentqGDegAu)
		const _cmdmgq6sCj = undefined;
		const _helperOBtlJX = 6.912363844341304;
		const _returnValueXTHKypa = await _helpergw2xgW.formatHelp(_cmdmgq6sCj, _helperOBtlJX)
		const _cmdYTUrlvg = 2.8023239034427547;
		const _returnValueHt96hpE = false;
		const _helperxIXLHZ8 = () => { return _returnValueHt96hpE };
		const _returnValueWflvvz = await _helpergw2xgW.padWidth(_cmdYTUrlvg, _helperxIXLHZ8)
		const _cmdvHzWrSd = "lWeM4ojaVfm5tOjimOAAjKQdxkLy9tTfKXBha6ZljkEMslTlqry7rhMYqDBBnCemb3N";
		const _returnValueZYtR2GF = "LVYQi1fDNd2VAxmsNTzbDjgaOKh4Ux";
		const _helperqAahT0 = () => { return _returnValueZYtR2GF };
		const _returnValuevdr6Zzr = await _helpergw2xgW.longestSubcommandTermLength(_cmdvHzWrSd, _helperqAahT0)
		const _returnValuePU2TLuZ = await _HelpUtu2E7Y.longestOptionTermLength(_cmdt2VciUv, _helpergw2xgW)
		const _cmdMCpI2xd = true;
		const _returnValueO56ddXz = await _HelpUtu2E7Y.commandDescription(_cmdMCpI2xd)
	});

	it('test for Help', async () => {
		const _HelpGPxp3GW = new Help()
		const _arrayValueHJyYzqA = undefined;
		const _arrayValueiiUu0u1 = null;
		const _arrayValuevN5gICX = [_arrayValueiiUu0u1]
		const _arrayValueTaUVY6k = null;
		const _arrayValuesxhBIuV = true;
		const _arrayValueuEPyOxK = -9.250660157437823;
		const _arrayValuecEPVtDQ = [_arrayValueTaUVY6k, _arrayValuesxhBIuV, _arrayValueuEPyOxK]
		const _returnValueuWMsdbT = [_arrayValueHJyYzqA, _arrayValuevN5gICX, _arrayValuecEPVtDQ]
		const _returnValuefprFfQg = () => { return _returnValueuWMsdbT };
		const _nameJJNQcEy = () => { return _returnValuefprFfQg };
		const _descriptionXrh97G = true;
		const _argumentwrCKNt = new Argument(_nameJJNQcEy, _descriptionXrh97G)
		const _returnValueFCoh7pl = await _argumentwrCKNt.argRequired()
		const _valueTEvGAL = {
		
	}
		const _descriptionc0a5nTZ = undefined;
		const _returnValueya6Ri8N = await _argumentwrCKNt.default(_valueTEvGAL, _descriptionc0a5nTZ)
		const _arrayValueWrQaRu5 = false;
		const _arrayValueOFQ0sUl = false;
		const _arrayValueM9eyVR5 = undefined;
		const _arrayValueymZIZup = false;
		const _arrayValueYnoHhiM = [_arrayValueM9eyVR5, _arrayValueymZIZup]
		const _arrayValueindrH5w = [_arrayValueYnoHhiM]
		const _arrayValuepkMNrI8 = [_arrayValueWrQaRu5, _arrayValueOFQ0sUl, _arrayValueindrH5w]
		const _arrayValueYKwxcPs = "kVlaOSGrQQleKyW6sZJYNctE1xuCe4Fq97x9wkQpRo3kY5LOc20i6mwz9";
		const _returnValueggSueW3 = null;
		const _arrayValuekQCF55C = () => { return _returnValueggSueW3 };
		const _arrayValuep5w41KN = null;
		const _arrayValuenL0NTJD = null;
		const _arrayValueqnTeZE8 = [_arrayValuekQCF55C, _arrayValuep5w41KN, _arrayValuenL0NTJD]
		const _returnValueNThVWQ = {
		
	}
		const _arrayValuewtZcREU = () => { return _returnValueNThVWQ };
		const _valuegLR309O = [_arrayValuepkMNrI8, _arrayValueYKwxcPs, _arrayValueqnTeZE8, _arrayValuewtZcREU]
		const _descriptiong1PUzOb = {
		
	}
		const _returnValueQWvma6P = await _argumentwrCKNt.default(_valuegLR309O, _descriptiong1PUzOb)
		const _returnValueMjcBLfx = await _HelpGPxp3GW.argumentDescription(_argumentwrCKNt)
	});

	it('test for Help', async () => {
		const _HelpAk5WxUQ = new Help()
		const _nameGBQw8Ou = 9.402352975311075;
		const _cmdbpKrWq8 = new Command(_nameGBQw8Ou)
		const _returnValuenz9fiL = {
		
	}
		const _arrayValuevxTcWtg = () => { return _returnValuenz9fiL };
		const _aliasescVqwOwr = [_arrayValuevxTcWtg]
		const _returnValueyBzwqd4 = await _cmdbpKrWq8.aliases(_aliasescVqwOwr)
		const _returnValuepDbJPpa = await _HelpAk5WxUQ.commandUsage(_cmdbpKrWq8)
		const _cmdKkhEAVf = null;
		const _sortSubcommands1kvkmw = false;
		const _returnValuekgditwN = false;
		const _subcommandTermzkucuyK = () => { return _returnValuekgditwN };
		const _helperrXG4LI = {
			"sortSubcommands": _sortSubcommands1kvkmw,
		"subcommandTerm": _subcommandTermzkucuyK
	}
		const _returnValueMiSVKmj = await _HelpAk5WxUQ.formatHelp(_cmdKkhEAVf, _helperrXG4LI)
		const _returnValueGYwLUTi = null;
		const _cmdkZcjs4 = () => { return _returnValueGYwLUTi };
		const _returnValuesvrD9vv = await _HelpAk5WxUQ.visibleArguments(_cmdkZcjs4)
	});

	it('test for Help', async () => {
		const _Helpgj7NFKK = new Help()
		const _argChoicesl7MgTAo = {
		
	}
		const _returnValuelBdhRI = null;
		const _negateNVwahBC = () => { return _returnValuelBdhRI };
		const _defaultValueYGCt4zE = undefined;
		const _defaultValueDescriptionR7lsCBq = "fn18OI546uloOZS4hARW4FbtlxRnCMuhQzrF149lGmyFAbU9vXz2TKjF3v";
		const _envVarzxeqQo3 = true;
		const _descriptionB1gnBHX = true;
		const _optionHcuC8ZD = {
			"argChoices": _argChoicesl7MgTAo,
		"negate": _negateNVwahBC,
		"defaultValue": _defaultValueYGCt4zE,
		"defaultValueDescription": _defaultValueDescriptionR7lsCBq,
		"envVar": _envVarzxeqQo3,
		"description": _descriptionB1gnBHX
	}
		const _returnValueTrPkS6h = await _Helpgj7NFKK.optionDescription(_optionHcuC8ZD)
		const _returnValuek7nZ9Y2 = "PZILce8OUMgOKqHPyrAOp6UFoCqznTzlECOXaeC76RsJvxciSlW";
		const _cmdzrctPdk = () => { return _returnValuek7nZ9Y2 };
		const _returnValueM6x6Ea0 = await _Helpgj7NFKK.commandDescription(_cmdzrctPdk)
		const _returnValueu0wPHK5 = undefined;
		const _flagsBXCSREJ = () => { return _returnValueu0wPHK5 };
		const _descriptionlZGoQ9S = undefined;
		const _argumentQaLF3tq = new Option(_flagsBXCSREJ, _descriptionlZGoQ9S)
		const _returnValueIcbq254 = await _argumentQaLF3tq.attributeName()
		const _mandatoryjQILW2Y = false;
		const _returnValueahmAVZ = await _argumentQaLF3tq.makeOptionMandatory(_mandatoryjQILW2Y)
		const _fnUzAexsX = null;
		const _returnValueAFjgFmI = await _argumentQaLF3tq.argParser(_fnUzAexsX)
		const _returnValueK4FHIn = await _argumentQaLF3tq.attributeName()
		const _returnValueormoYcC = await _Helpgj7NFKK.argumentTerm(_argumentQaLF3tq)
		const _returnValueu9IYZ36 = "irBppgfNl1ZQK06fE1aayQjHzjYCJYS3KpfzSPOaLdKcLZGLtPxZK1PpljoQ8ZtD2LI8yKH9XL1iQkKH6RzhaWW";
		const _cmdfT41Hfv = () => { return _returnValueu9IYZ36 };
		const _returnValueVjqP4We = await _Helpgj7NFKK.visibleArguments(_cmdfT41Hfv)
	});
})