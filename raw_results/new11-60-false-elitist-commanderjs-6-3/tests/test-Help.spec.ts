export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpTUlOSu6 = new Help()
		const __argsbnBvBL8 = {
		
	}
		const __nameOmlYBGk = -1.3098268103144957;
		const __aliasesuAd76jh = {
		
	}
		const _optionsymNKXgW = {
		
	}
		const _cmdatTrjOM = {
			"_args": __argsbnBvBL8,
		"_name": __nameOmlYBGk,
		"_aliases": __aliasesuAd76jh,
		"options": _optionsymNKXgW
	}
		const _returnValuen0PdMC = await _HelpTUlOSu6.subcommandTerm(_cmdatTrjOM)
		const _cmd2g07Iy = undefined;
		const _sortSubcommandsbqR4ZWY = null;
		const _returnValuejhy2ED = false;
		const _returnValuelvcBSlH = () => { return _returnValuejhy2ED };
		const _subcommandTermmsQ8kXB = () => { return _returnValuelvcBSlH };
		const _helperJyLoNhj = {
			"sortSubcommands": _sortSubcommandsbqR4ZWY,
		"subcommandTerm": _subcommandTermmsQ8kXB
	}
		const _returnValue1jedPA = await _HelpTUlOSu6.longestSubcommandTermLength(_cmd2g07Iy, _helperJyLoNhj)
		const __namefhq9GBp = {
		
	}
		const __aliasesh9KmEFO = {
		
	}
		const _parentYKwfOU3 = {
		
	}
		const _returnValueVIoX0Sw = null;
		const _usagequfnhxX = () => { return _returnValueVIoX0Sw };
		const _cmdH6S70W = {
			"_name": __namefhq9GBp,
		"_aliases": __aliasesh9KmEFO,
		"parent": _parentYKwfOU3,
		"usage": _usagequfnhxX
	}
		const _returnValuesIm6ekU = await _HelpTUlOSu6.commandUsage(_cmdH6S70W)
		const _cmdR2Yy9xY = undefined;
		const _sortSubcommandsb696IMf = "8cDG9iYWWwKGhPaJMHgz";
		const _returnValueTwJY9FS = null;
		const _subcommandTermMOOYaBm = () => { return _returnValueTwJY9FS };
		const _helpergPcCVci = {
			"sortSubcommands": _sortSubcommandsb696IMf,
		"subcommandTerm": _subcommandTermMOOYaBm
	}
		const _returnValuetDfBatu = await _HelpTUlOSu6.longestSubcommandTermLength(_cmdR2Yy9xY, _helpergPcCVci)
	});

	it('test for Help', async () => {
		const _HelprzU6jjz = new Help()
		const _flagsz68fkDc = -6.247226659674585;
		const _optionB3xExgV = {
			"flags": _flagsz68fkDc
	}
		const _returnValueSjj49bv = await _HelprzU6jjz.optionTerm(_optionB3xExgV)
		const _returnValueaVe3KH1 = undefined;
		const _descriptionhRBcHAk = () => { return _returnValueaVe3KH1 };
		const _cmdIIU7Vag = {
			"description": _descriptionhRBcHAk
	}
		const _returnValueVBAQkqI = await _HelprzU6jjz.commandDescription(_cmdIIU7Vag)
		const _cmdMrjJ6vZ = undefined;
		const _sortSubcommandsbZ3tK6U = undefined;
		const _returnValueCz2a3SP = undefined;
		const _subcommandTermcQylaJM = () => { return _returnValueCz2a3SP };
		const _helperbc5xquS = {
			"sortSubcommands": _sortSubcommandsbZ3tK6U,
		"subcommandTerm": _subcommandTermcQylaJM
	}
		const _returnValueAw8aMyo = await _HelprzU6jjz.formatHelp(_cmdMrjJ6vZ, _helperbc5xquS)
		const _commandsmTI9Jvo = {
		
	}
		const _returnValuevP8q92H = undefined;
		const __hasImplicitHelpCommandxLWLOiW = () => { return _returnValuevP8q92H };
		const __helpCommandnameAndArgsoutsW3 = {
		
	}
		const _createCommandjo68Fti = false;
		const __helpCommandDescriptioncaUWFqr = true;
		const _cmdpcCwA6H = {
			"commands": _commandsmTI9Jvo,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandxLWLOiW,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsoutsW3,
		"createCommand": _createCommandjo68Fti,
		"_helpCommandDescription": __helpCommandDescriptioncaUWFqr
	}
		const _returnValueGWdlL6 = await _HelprzU6jjz.visibleCommands(_cmdpcCwA6H)
		const _cmdJIFMZSw = []
		const _arrayValuefY0sbMj = "XUuNESgMBYg1Ta14cYoDc5qBkDyXQydBnxLnU2TGD";
		const _arrayValueZjrx3qU = 1.6172638381185571;
		const _returnValueH7Btim = [_arrayValuefY0sbMj, _arrayValueZjrx3qU]
		const _returnValue7jLCsI = () => { return _returnValueH7Btim };
		const _visibleArgumentsXal3bj = () => { return _returnValue7jLCsI };
		const _returnValueE5PmbyC = true;
		const _argumentTermM3HvjrH = () => { return _returnValueE5PmbyC };
		const _helperBJoaKqz = {
			"visibleArguments": _visibleArgumentsXal3bj,
		"argumentTerm": _argumentTermM3HvjrH
	}
		const _returnValueLLXXnqu = await _HelprzU6jjz.longestArgumentTermLength(_cmdJIFMZSw, _helperBJoaKqz)
	});

	it('test for Help', async () => {
		const _HelpjawUSa = new Help()
		const __nameq4zHZI = {
		
	}
		const __aliasesQZe4ZWy = {
		
	}
		const _parentd1f7gjd = {
		
	}
		const _arrayValueJ6hZjdw = undefined;
		const _arrayValueONH7rIv = "J3SrpPVTrO1zFOaGbtGuF6hBgewqpSxmKcYPnDPAas1bK09EEmuIsiqp644r4grriQM";
		const _arrayValueutB4FMV = false;
		const _returnValueBIfsXLq = [_arrayValueJ6hZjdw, _arrayValueONH7rIv, _arrayValueutB4FMV]
		const _usagec68i3UJ = () => { return _returnValueBIfsXLq };
		const _cmdRMvsMx9 = {
			"_name": __nameq4zHZI,
		"_aliases": __aliasesQZe4ZWy,
		"parent": _parentd1f7gjd,
		"usage": _usagec68i3UJ
	}
		const _returnValueekPE38 = await _HelpjawUSa.commandUsage(_cmdRMvsMx9)
	});

	it('test for Help', async () => {
		const _HelphbxqUEN = new Help()
		const _commandsXkOV69A = null;
		const _arrayValuecozuBP8 = false;
		const _arrayValueYE2PDZ = "HMVFjObb6mmkPYYzB";
		const _arrayValueifemiT = 0.8524401237919719;
		const _returnValueMkxK4mf = [_arrayValuecozuBP8, _arrayValueYE2PDZ, _arrayValueifemiT]
		const __hasImplicitHelpCommandYU5oEdA = () => { return _returnValueMkxK4mf };
		const __helpCommandnameAndArgsRYwc0h5 = {
		
	}
		const _returnValueKFdbNC7 = null;
		const _createCommandKR3pNEO = () => { return _returnValueKFdbNC7 };
		const __helpCommandDescriptionA59HF4I = -2.5482450656384703;
		const _cmdi4cXKG8 = {
			"commands": _commandsXkOV69A,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandYU5oEdA,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsRYwc0h5,
		"createCommand": _createCommandKR3pNEO,
		"_helpCommandDescription": __helpCommandDescriptionA59HF4I
	}
		const _returnValuewXsAbn5 = await _HelphbxqUEN.visibleCommands(_cmdi4cXKG8)
	});

	it('test for Help', async () => {
		const _HelpzpPwNfI = new Help()
		const _arrayValueAYK2Qvz = "Y6mycYNl92En1igerRHgOG4i3HJc73zyfQRtSBkrtO04l4UubCH8iVnYAiRE00eJjswSDLufDCdCmmD2HLtbpdZa";
		const _arrayValueGz4pGib = 7.171530777968165;
		const _arrayValueb5g3p1s = {
		
	}
		const _arrayValueNBfcHSf = 0.7571251240629238;
		const _argumentm7Pe3DH = [_arrayValueAYK2Qvz, _arrayValueGz4pGib, _arrayValueb5g3p1s, _arrayValueNBfcHSf]
		const _returnValueN5TaslB = await _HelpzpPwNfI.argumentTerm(_argumentm7Pe3DH)
		const _cmd6CC8pX = {
		
	}
		const _sortSubcommandsjVbYvhQ = "aTqjVHS7FBPC96KodX8HkD3CFTG5RlxDjPEhp2JP13N0ANqDUS1zN3NnqyPYkEz5ZuJ82mGruQupL2qHtOuNhuMe2G5pmnXsLj";
		const _arrayValueZkvc8Z = null;
		const _arrayValuesrTQwwd = [_arrayValueZkvc8Z]
		const _arrayValueTn40dHd = -9.969630009457187;
		const _returnValueJiNpWw = [_arrayValuesrTQwwd, _arrayValueTn40dHd]
		const _subcommandTermgAkoH28 = () => { return _returnValueJiNpWw };
		const _helperXo4a3Rx = {
			"sortSubcommands": _sortSubcommandsjVbYvhQ,
		"subcommandTerm": _subcommandTermgAkoH28
	}
		const _returnValueiHythX0 = await _HelpzpPwNfI.formatHelp(_cmd6CC8pX, _helperXo4a3Rx)
	});

	it('test for Help', async () => {
		const _HelpEasmyn3 = new Help()
		const _cmdNGSXJ3s = undefined;
		const _returnValuemmT0V63 = true;
		const _visibleOptionsiN8E5XR = () => { return _returnValuemmT0V63 };
		const _returnValueMayt8LW = "uYmhDxfk7x0UI5clHTTMRty7fEbmp4GkNaOMgQqrHQ1btsN5Ugg5vcEh7n2JtMM";
		const _optionTermO7wxD6X = () => { return _returnValueMayt8LW };
		const _helperBE5NZmQ = {
			"visibleOptions": _visibleOptionsiN8E5XR,
		"optionTerm": _optionTermO7wxD6X
	}
		const _returnValueqq0sv5G = await _HelpEasmyn3.longestOptionTermLength(_cmdNGSXJ3s, _helperBE5NZmQ)
		const __argsO8JehJw = {
		
	}
		const __nameyVw0KhL = -1.7891657984662501;
		const __aliaseshuLPis9 = {
		
	}
		const _optionsybW8JVh = {
		
	}
		const _cmdtqlnvFW = {
			"_args": __argsO8JehJw,
		"_name": __nameyVw0KhL,
		"_aliases": __aliaseshuLPis9,
		"options": _optionsybW8JVh
	}
		const _returnValueyTqO1FS = await _HelpEasmyn3.subcommandTerm(_cmdtqlnvFW)
		const _cmdxA89HUk = null;
		const _returnValueZIT7qj6 = null;
		const _arrayValueXCdUwIp = () => { return _returnValueZIT7qj6 };
		const _arrayValueG7mlZyT = true;
		const _returnValueeLP4s3G = -7.0789077612547056;
		const _arrayValuet6dm2u4 = () => { return _returnValueeLP4s3G };
		const _returnValuesfY6FZJ = [_arrayValueXCdUwIp, _arrayValueG7mlZyT, _arrayValuet6dm2u4]
		const _longestOptionTermLengthGZR9Kr = () => { return _returnValuesfY6FZJ };
		const _returnValueAc9Ca7B = -3.067833105935981;
		const _longestSubcommandTermLengthKfIEBD8 = () => { return _returnValueAc9Ca7B };
		const _returnValuefjwjLpk = undefined;
		const _longestArgumentTermLengthT5X0siG = () => { return _returnValuefjwjLpk };
		const _helperq7fJtG6 = {
			"longestOptionTermLength": _longestOptionTermLengthGZR9Kr,
		"longestSubcommandTermLength": _longestSubcommandTermLengthKfIEBD8,
		"longestArgumentTermLength": _longestArgumentTermLengthT5X0siG
	}
		const _returnValueztYYMIB = await _HelpEasmyn3.padWidth(_cmdxA89HUk, _helperq7fJtG6)
		const _flags1uHjxy = -2.18990243699505;
		const _optionUhjTPov = {
			"flags": _flags1uHjxy
	}
		const _returnValuef3QSo1 = await _HelpEasmyn3.optionTerm(_optionUhjTPov)
	});

	it('test for Help', async () => {
		const _Helpch0E4bc = new Help()
		const _argChoiceseETIEpT = {
		
	}
		const _defaultValuezBWe2Oa = undefined;
		const _defaultValueDescription77mIVM = undefined;
		const _returnValueSyKhqao = "xl4ktQUz8Qzi93YuAUSHYMYvygetWcpCtfXbo89Xva1elWEhQEQMZOi3Imwj9ZsJ3Pod1APkmAkWEWiYD";
		const _descriptionegHhqiO = () => { return _returnValueSyKhqao };
		const _argumentQEkWv3r = {
			"argChoices": _argChoiceseETIEpT,
		"defaultValue": _defaultValuezBWe2Oa,
		"defaultValueDescription": _defaultValueDescription77mIVM,
		"description": _descriptionegHhqiO
	}
		const _returnValueF91sPRM = await _Helpch0E4bc.argumentDescription(_argumentQEkWv3r)
	});

	it('test for Help', async () => {
		const _HelpdFSd2iV = new Help()
		const _arrayValuewU2yaa0 = "lk4G2VlBOB3uGPClxqW8WqVpOTgBrWZo12G4CbQV2GfN4QucQQu4gRflaLCkvQWgv9lkGHbNAeheQ3azfUOIKA";
		const _arrayValuee7Cd6W = "nIEitNoQ8qalUB4gy5PGIT5yscIsUlHENdJTuW5kLqmDW6ytVbkrfJW7a9jwTf7KAUR3WFNay1RrkiqGcReEQfArPquFXjQua";
		const _arrayValueyWngoot = "3nnKZPPrZIqfisL9Xht7QWVyGuPRsL1";
		const _arrayValueELi0trP = -9.684810807515579;
		const _arrayValueb49mVkk = [_arrayValuee7Cd6W, _arrayValueyWngoot, _arrayValueELi0trP]
		const _arrayValueYBiqHp6 = {
		
	}
		const _arrayValuei13azqX = null;
		const _cmdPufhYiN = [_arrayValuewU2yaa0, _arrayValueb49mVkk, _arrayValueYBiqHp6, _arrayValuei13azqX]
		const _returnValueN7mYYsz = await _HelpdFSd2iV.visibleArguments(_cmdPufhYiN)
		const _cmdoI55WQL = true;
		const _returnValueCotic9f = 0.11282514724315718;
		const _visibleArgumentsUsLvHB = () => { return _returnValueCotic9f };
		const _returnValueCv4ztbg = undefined;
		const _argumentTermWw7TVXa = () => { return _returnValueCv4ztbg };
		const _helperjl2XHt = {
			"visibleArguments": _visibleArgumentsUsLvHB,
		"argumentTerm": _argumentTermWw7TVXa
	}
		const _returnValueu60MkJ4 = await _HelpdFSd2iV.longestArgumentTermLength(_cmdoI55WQL, _helperjl2XHt)
		const _cmddFt2Fs = "9Iy5PyO5SbmVoalGIJJo7L3iPEXOakhZTQfO2opsppzO6VjyNcJpzxw7AbnFqhRGCKWe";
		const _returnValueM5QZ0T = -5.571382329594169;
		const _longestOptionTermLengthBcsyHq0 = () => { return _returnValueM5QZ0T };
		const _longestSubcommandTermLengthQMLrkz6 = "Z8c1TF";
		const _returnValuebQ3mqwj = "UPGG9JpAMLKik1A6PzgINkG3GaRH07mY2ZXS7tyByOdN9wfRX2pEqIU9A4rJBYsIPJmqcn3NSgbFMmHA95zi9Uw";
		const _longestArgumentTermLengtheKRfrhz = () => { return _returnValuebQ3mqwj };
		const _helperHBbXlJ4 = {
			"longestOptionTermLength": _longestOptionTermLengthBcsyHq0,
		"longestSubcommandTermLength": _longestSubcommandTermLengthQMLrkz6,
		"longestArgumentTermLength": _longestArgumentTermLengtheKRfrhz
	}
		const _returnValuemQHjKOv = await _HelpdFSd2iV.padWidth(_cmddFt2Fs, _helperHBbXlJ4)
		const _flagsZF1jU1W = null;
		const _optionNcvg45O = {
			"flags": _flagsZF1jU1W
	}
		const _returnValueuCFuMac = await _HelpdFSd2iV.optionTerm(_optionNcvg45O)
		const _argChoicesIOTQjEV = {
		
	}
		const _defaultValueL6k2c8x = undefined;
		const _arrayValueKSqsTMT = undefined;
		const _arrayValuetgM88Xo = 7.559038415266375;
		const _arrayValuekOliSxl = "teBaHzVGMHBozXTZZVc6lEYvLyGhtjqfIx8FWovYyiXB7ePi6TsDM7EyLTlB3SJZrvxUmhtH";
		const _arrayValueLhKMCNm = true;
		const _arrayValueeLyrLWq = [_arrayValuetgM88Xo, _arrayValuekOliSxl, _arrayValueLhKMCNm]
		const _defaultValueDescriptionBdSymr8 = [_arrayValueKSqsTMT, _arrayValueeLyrLWq]
		const _descriptiontX1rPu = true;
		const _argumentO3mK5Gu = {
			"argChoices": _argChoicesIOTQjEV,
		"defaultValue": _defaultValueL6k2c8x,
		"defaultValueDescription": _defaultValueDescriptionBdSymr8,
		"description": _descriptiontX1rPu
	}
		const _returnValueyN4T06u = await _HelpdFSd2iV.argumentDescription(_argumentO3mK5Gu)
	});

	it('test for Help', async () => {
		const _HelpjeOnMiV = new Help()
		const _cmdULNDZJw = -7.760699091711315;
		const _sortSubcommandsWV5BSm4 = -5.7010476134776935;
		const _returnValueNxMJl2m = undefined;
		const _returnValueDsrvhid = () => { return _returnValueNxMJl2m };
		const _subcommandTermgL7YmQ7 = () => { return _returnValueDsrvhid };
		const _helper1jVfEN = {
			"sortSubcommands": _sortSubcommandsWV5BSm4,
		"subcommandTerm": _subcommandTermgL7YmQ7
	}
		const _returnValueyuJtGXR = await _HelpjeOnMiV.longestSubcommandTermLength(_cmdULNDZJw, _helper1jVfEN)
		const _arrayValueMVuOyWj = "KjcuNWKfzrVXfsewCpqKvf3LAkVgSLXL7LRHM1JiSeyYoDP";
		const _arrayValuewlgEZ0s = "PaUn3KaTWFbwOKpcA9tVt1KCrkoJoOA3dJ5fjp8lh8GblQt9MFviCrrs4iTq1eOlHNd5sl";
		const _arrayValueCTjPVTB = undefined;
		const _cmddfPDHOU = [_arrayValueMVuOyWj, _arrayValuewlgEZ0s, _arrayValueCTjPVTB]
		const _sortSubcommandsF6fdI0 = undefined;
		const _returnValuef39Kpoj = true;
		const _subcommandTermNmnTwx = () => { return _returnValuef39Kpoj };
		const _helperzQHN3XS = {
			"sortSubcommands": _sortSubcommandsF6fdI0,
		"subcommandTerm": _subcommandTermNmnTwx
	}
		const _returnValuexZ9hPzs = await _HelpjeOnMiV.longestSubcommandTermLength(_cmddfPDHOU, _helperzQHN3XS)
		const _cmdQuJXi9 = 1.9841532959744654;
		const _returnValueW96VAQJ = "WBi0gXWrmKkKS0PeP69aUKehzrGYzKRHUIe";
		const _visibleOptionstvALL9j = () => { return _returnValueW96VAQJ };
		const _returnValuehP92yUF = 5.063705128633924;
		const _optionTermHHYVF4f = () => { return _returnValuehP92yUF };
		const _helperetqxMcW = {
			"visibleOptions": _visibleOptionstvALL9j,
		"optionTerm": _optionTermHHYVF4f
	}
		const _returnValueY8U9tyL = await _HelpjeOnMiV.longestOptionTermLength(_cmdQuJXi9, _helperetqxMcW)
	});

	it('test for Help', async () => {
		const _HelpZJoxKr = new Help()
		const _optionR6vEupR = null;
		const _returnValuexWe3qT0 = await _HelpZJoxKr.optionDescription(_optionR6vEupR)
		const _optionsU3kNKdD = {
		
	}
		const __hasHelpOptionjJK6Rrt = true;
		const __helpShortFlagWYCfblq = {
		
	}
		const __findOptionWaLPxBj = true;
		const __helpLongFlagn2bSRJm = undefined;
		const _returnValueUw967u6 = "CrrLSFiAihoOxTHGZa8XlPwmyQ1kry0t383tidsQggS31QaA7rs9hNnMxVDUFUqFmpBkF6nCIJetxGO8XRacB4zhFp3FXy";
		const _createOptionUhEb61Y = () => { return _returnValueUw967u6 };
		const __helpDescriptionx6BOSJ8 = null;
		const __helpFlagskDiqVRn = "Qt2gJKLcyvmiNAarji6HbEpPY8vKEMFoEzXSugmGRZkCiuI24tRNxx4Xf";
		const _cmdxklml1g = {
			"options": _optionsU3kNKdD,
		"_hasHelpOption": __hasHelpOptionjJK6Rrt,
		"_helpShortFlag": __helpShortFlagWYCfblq,
		"_findOption": __findOptionWaLPxBj,
		"_helpLongFlag": __helpLongFlagn2bSRJm,
		"createOption": _createOptionUhEb61Y,
		"_helpDescription": __helpDescriptionx6BOSJ8,
		"_helpFlags": __helpFlagskDiqVRn
	}
		const _returnValueJAroomJ = await _HelpZJoxKr.visibleOptions(_cmdxklml1g)
		const _options4zFDpz = {
		
	}
		const __hasHelpOptionwRaOpt7 = undefined;
		const _returnValueUhFQOvu = undefined;
		const __helpShortFlagHQLlkY1 = () => { return _returnValueUhFQOvu };
		const _returnValuegVyoAI = undefined;
		const __findOptionqQVBEvt = () => { return _returnValuegVyoAI };
		const __helpLongFlagiHzwm6d = 1.6314551892004694;
		const _returnValuesuihbZN = true;
		const _createOptiondovaqSl = () => { return _returnValuesuihbZN };
		const __helpDescriptionv1gbVQf = 8.139326357840094;
		const __helpFlagswSDtUQD = 5.211800500532068;
		const _cmdMsTUZWR = {
			"options": _options4zFDpz,
		"_hasHelpOption": __hasHelpOptionwRaOpt7,
		"_helpShortFlag": __helpShortFlagHQLlkY1,
		"_findOption": __findOptionqQVBEvt,
		"_helpLongFlag": __helpLongFlagiHzwm6d,
		"createOption": _createOptiondovaqSl,
		"_helpDescription": __helpDescriptionv1gbVQf,
		"_helpFlags": __helpFlagswSDtUQD
	}
		const _returnValuerMR6B0e = await _HelpZJoxKr.visibleOptions(_cmdMsTUZWR)
		const _returnValueeSlJDxt = "9462A4v1oO70mMuO7w6lmoipeOPtBRugqBwNX6rZznjpSEy2qQnw3VksKLPRXYgopIomYtt";
		const _descriptionC89mPN6 = () => { return _returnValueeSlJDxt };
		const _cmdknzZOQ = {
			"description": _descriptionC89mPN6
	}
		const _returnValueRKPWNwW = await _HelpZJoxKr.commandDescription(_cmdknzZOQ)
	});

	it('test for Help', async () => {
		const _HelpGah0Wic = new Help()
		const _argChoicesozoDEMi = {
		
	}
		const _negateZbsLEe2 = -7.841095310460658;
		const _defaultValuexu1Netn = undefined;
		const _defaultValueDescriptionBruBk3b = undefined;
		const _envVarGcne4Oa = undefined;
		const _descriptionRxchwc7 = null;
		const _optionhNFDedh = {
			"argChoices": _argChoicesozoDEMi,
		"negate": _negateZbsLEe2,
		"defaultValue": _defaultValuexu1Netn,
		"defaultValueDescription": _defaultValueDescriptionBruBk3b,
		"envVar": _envVarGcne4Oa,
		"description": _descriptionRxchwc7
	}
		const _returnValuejuU1a9z = await _HelpGah0Wic.optionDescription(_optionhNFDedh)
		const _cmdALKH9f = undefined;
		const _returnValueRRlPML = undefined;
		const _visibleArgumentsAHELKaD = () => { return _returnValueRRlPML };
		const _argumentTermjBV7A8X = undefined;
		const _helperXUX1taW = {
			"visibleArguments": _visibleArgumentsAHELKaD,
		"argumentTerm": _argumentTermjBV7A8X
	}
		const _returnValueS1GtL6z = await _HelpGah0Wic.longestArgumentTermLength(_cmdALKH9f, _helperXUX1taW)
		const _optionsnBSdiD = {
		
	}
		const _arrayValueJT0wIvk = "boPpbfronFv4Tci0OENthxjtJbb4kEPXkwtoQXERD1rhVOS7n3a73nzRCT";
		const _arrayValue72QRmY = {
		
	}
		const _arrayValueaSFOKo = undefined;
		const _arrayValueg7Ok2sj = undefined;
		const _returnValueDPdH5x = [_arrayValue72QRmY, _arrayValueaSFOKo, _arrayValueg7Ok2sj]
		const _arrayValueelG6w8Z = () => { return _returnValueDPdH5x };
		const __hasHelpOptionSjf6qQn = [_arrayValueJT0wIvk, _arrayValueelG6w8Z]
		const __helpShortFlagbkwj8Ec = true;
		const _returnValueiunm8aF = true;
		const __findOptionb7kDMlm = () => { return _returnValueiunm8aF };
		const __helpLongFlagNrUQCL9 = -5.689415331627888;
		const _returnValueRKqlPeW = -1.5841391247126424;
		const _createOptiondbywB83 = () => { return _returnValueRKqlPeW };
		const __helpDescriptionBWrctv = null;
		const __helpFlagsjOvkN8o = undefined;
		const _cmdNn6R9z = {
			"options": _optionsnBSdiD,
		"_hasHelpOption": __hasHelpOptionSjf6qQn,
		"_helpShortFlag": __helpShortFlagbkwj8Ec,
		"_findOption": __findOptionb7kDMlm,
		"_helpLongFlag": __helpLongFlagNrUQCL9,
		"createOption": _createOptiondbywB83,
		"_helpDescription": __helpDescriptionBWrctv,
		"_helpFlags": __helpFlagsjOvkN8o
	}
		const _returnValue05ilMq = await _HelpGah0Wic.visibleOptions(_cmdNn6R9z)
		const _cmdvzMXS3K = undefined;
		const _returnValuebEwUkFy = {
		
	}
		const _longestOptionTermLengthL1jSHV5 = () => { return _returnValuebEwUkFy };
		const _returnValuegZeKCHd = {
		
	}
		const _longestSubcommandTermLengthp1mD3Hw = () => { return _returnValuegZeKCHd };
		const _returnValuet8MmFjK = "WQpT9mediFFV7OWSJLZ8";
		const _returnValueNTnLaY = () => { return _returnValuet8MmFjK };
		const _longestArgumentTermLengthI4of3yl = () => { return _returnValueNTnLaY };
		const _helperVLvkLoV = {
			"longestOptionTermLength": _longestOptionTermLengthL1jSHV5,
		"longestSubcommandTermLength": _longestSubcommandTermLengthp1mD3Hw,
		"longestArgumentTermLength": _longestArgumentTermLengthI4of3yl
	}
		const _returnValuei7KxH97 = await _HelpGah0Wic.padWidth(_cmdvzMXS3K, _helperVLvkLoV)
		const _cmdgK6PRx = "FY3NrV3ohLtQyr446w1CmK9YEnqMy65g5JMsvOVeApngrUc";
		const _returnValueS9EA82U = null;
		const _visibleArgumentsWUl4cBy = () => { return _returnValueS9EA82U };
		const _returnValuejcHGeOZ = -4.6707314525981865;
		const _argumentTermvLRgPX9 = () => { return _returnValuejcHGeOZ };
		const _helperROOCX6B = {
			"visibleArguments": _visibleArgumentsWUl4cBy,
		"argumentTerm": _argumentTermvLRgPX9
	}
		const _returnValueJRvWcon = await _HelpGah0Wic.longestArgumentTermLength(_cmdgK6PRx, _helperROOCX6B)
	});

	it('test for Help', async () => {
		const _HelpvT6jIDd = new Help()
		const _cmdSh6lKRp = null;
		const _returnValueexmlOKM = -9.089968031679724;
		const _longestOptionTermLengthvqGtPgK = () => { return _returnValueexmlOKM };
		const _arrayValuex6EuVmQ = {
		
	}
		const _arrayValueEu5XmlG = true;
		const _returnValuead2lSQS = [_arrayValuex6EuVmQ, _arrayValueEu5XmlG]
		const _longestSubcommandTermLengthBfc2NUu = () => { return _returnValuead2lSQS };
		const _returnValueMJ7i0hg = {
		
	}
		const _longestArgumentTermLengthJjZNv5c = () => { return _returnValueMJ7i0hg };
		const _helpergcN12iA = {
			"longestOptionTermLength": _longestOptionTermLengthvqGtPgK,
		"longestSubcommandTermLength": _longestSubcommandTermLengthBfc2NUu,
		"longestArgumentTermLength": _longestArgumentTermLengthJjZNv5c
	}
		const _returnValue6vByMP = await _HelpvT6jIDd.padWidth(_cmdSh6lKRp, _helpergcN12iA)
		const _cmdEhSOQ0x = "OxHe9sIwzOQ1qMPlpwi202wsNI7HsL7uxNQ4nPCko";
		const _returnValueWBuWYnY = undefined;
		const _returnValueFdG6RRL = () => { return _returnValueWBuWYnY };
		const _visibleOptionspM7lL9v = () => { return _returnValueFdG6RRL };
		const _returnValueqCeaDxp = undefined;
		const _returnValueGqsOGBr = () => { return _returnValueqCeaDxp };
		const _optionTermpH20gWM = () => { return _returnValueGqsOGBr };
		const _helperJCi95IB = {
			"visibleOptions": _visibleOptionspM7lL9v,
		"optionTerm": _optionTermpH20gWM
	}
		const _returnValuehf2Rh9m = await _HelpvT6jIDd.longestOptionTermLength(_cmdEhSOQ0x, _helperJCi95IB)
	});

	it('test for Help', async () => {
		const _HelpnpKmQvu = new Help()
		const _optionsOKWSSyT = {
		
	}
		const __hasHelpOptionUZL63n7 = null;
		const __helpShortFlaguZPjhli = null;
		const _returnValuebwIogd = true;
		const __findOption1lFFMS = () => { return _returnValuebwIogd };
		const _returnValueoYFRQad = false;
		const _arrayValueibhShg8 = () => { return _returnValueoYFRQad };
		const _arrayValuehZWNSYs = -7.6650714252935925;
		const _arrayValuewceCja = undefined;
		const __helpLongFlagiqXsXt7 = [_arrayValueibhShg8, _arrayValuehZWNSYs, _arrayValuewceCja]
		const _returnValuePezOeyx = null;
		const _createOptionS83I7N = () => { return _returnValuePezOeyx };
		const __helpDescriptioneKrBOf7 = null;
		const __helpFlagsXmXltn = false;
		const _cmdts2SiCI = {
			"options": _optionsOKWSSyT,
		"_hasHelpOption": __hasHelpOptionUZL63n7,
		"_helpShortFlag": __helpShortFlaguZPjhli,
		"_findOption": __findOption1lFFMS,
		"_helpLongFlag": __helpLongFlagiqXsXt7,
		"createOption": _createOptionS83I7N,
		"_helpDescription": __helpDescriptioneKrBOf7,
		"_helpFlags": __helpFlagsXmXltn
	}
		const _returnValueMACt360 = await _HelpnpKmQvu.visibleOptions(_cmdts2SiCI)
		const __argsd4suzqr = {
		
	}
		const __nameAlW4eVz = -4.04022254159746;
		const __aliaseseeV7q3C = {
		
	}
		const _optionsbuYf8XJ = {
		
	}
		const _cmdIceny8q = {
			"_args": __argsd4suzqr,
		"_name": __nameAlW4eVz,
		"_aliases": __aliaseseeV7q3C,
		"options": _optionsbuYf8XJ
	}
		const _returnValuew4cvhUW = await _HelpnpKmQvu.subcommandTerm(_cmdIceny8q)
		const __argsWHR8M0 = {
		
	}
		const __nameizQrIN7 = 9.443645611357582;
		const __aliasesfYt4DC8 = {
		
	}
		const _optionsI5sTW9 = 1.4721043255161366;
		const _cmdO8uoHPE = {
			"_args": __argsWHR8M0,
		"_name": __nameizQrIN7,
		"_aliases": __aliasesfYt4DC8,
		"options": _optionsI5sTW9
	}
		const _returnValueswgylzD = await _HelpnpKmQvu.subcommandTerm(_cmdO8uoHPE)
	});

	it('test for Help', async () => {
		const _Helpr2hUQGA = new Help()
		const __argsDescriptionOTLouv9 = {
		
	}
		const __argsgOmRDfq = {
		
	}
		const _cmdSYQAWQB = {
			"_argsDescription": __argsDescriptionOTLouv9,
		"_args": __argsgOmRDfq
	}
		const _returnValueKnaCAh4 = await _Helpr2hUQGA.visibleArguments(_cmdSYQAWQB)
		const __namemBaZ9fN = {
		
	}
		const __aliasesu3v5Y1R = {
		
	}
		const _parentcq6RNpO = {
		
	}
		const _usagePMcssZA = undefined;
		const _cmdvR2hVEV = {
			"_name": __namemBaZ9fN,
		"_aliases": __aliasesu3v5Y1R,
		"parent": _parentcq6RNpO,
		"usage": _usagePMcssZA
	}
		const _returnValueOFg9HC = await _Helpr2hUQGA.commandUsage(_cmdvR2hVEV)
		const _optionsRbf4WP = {
		
	}
		const __hasHelpOptionw4yNCaf = "kS0siJB1iYQw5EADE7mSZnnl40lhvOvbOQPtLY5khGFkXzOhiXMRn9vyor8vP3GViCOvj8m8";
		const _arrayValueVj29dc7 = -6.362972987648453;
		const _arrayValueRe9EU1A = 8.239659929079266;
		const _arrayValuepoDdfg = false;
		const _arrayValuettgSjGp = "56lkSsiR2ib9BAkr4usA9lr5K3QekFqmlT8qNkE2O13FkJ";
		const _arrayValueE47cQQU = undefined;
		const _arrayValueKAynrJ = [_arrayValuepoDdfg, _arrayValuettgSjGp, _arrayValueE47cQQU]
		const _arrayValueqTQZqgJ = "nYPVqqkFb7TvHThCvYkfuXLxkeYGCErlNdvfGV2VMS9d";
		const _returnValuef989jjf = [_arrayValueKAynrJ, _arrayValueqTQZqgJ]
		const _returnValuejv5fSk1 = () => { return _returnValuef989jjf };
		const _arrayValueTXaYcV = () => { return _returnValuejv5fSk1 };
		const _arrayValueeKFi0LH = null;
		const _arrayValuezQ9Ckx = true;
		const _arrayValuekRshIUi = [_arrayValuezQ9Ckx]
		const _returnValuetiY7dJv = [_arrayValueTXaYcV, _arrayValueeKFi0LH, _arrayValuekRshIUi]
		const _arrayValueWkAJbJb = () => { return _returnValuetiY7dJv };
		const __helpShortFlags4KI4iL = [_arrayValueVj29dc7, _arrayValueRe9EU1A, _arrayValueWkAJbJb]
		const _returnValueXwpiNSq = 9.91158313816911;
		const __findOptionSnwVPBR = () => { return _returnValueXwpiNSq };
		const _arrayValueOwenQBw = null;
		const _arrayValue6Y6MbL = {
		
	}
		const __helpLongFlagumawLwr = [_arrayValueOwenQBw, _arrayValue6Y6MbL]
		const _returnValuemERLT5R = null;
		const _createOptionOY8f7gX = () => { return _returnValuemERLT5R };
		const __helpDescriptionx4KSI31 = null;
		const __helpFlagsQY9gc1S = false;
		const _cmdFaDMtKn = {
			"options": _optionsRbf4WP,
		"_hasHelpOption": __hasHelpOptionw4yNCaf,
		"_helpShortFlag": __helpShortFlags4KI4iL,
		"_findOption": __findOptionSnwVPBR,
		"_helpLongFlag": __helpLongFlagumawLwr,
		"createOption": _createOptionOY8f7gX,
		"_helpDescription": __helpDescriptionx4KSI31,
		"_helpFlags": __helpFlagsQY9gc1S
	}
		const _returnValuejkL6ek = await _Helpr2hUQGA.visibleOptions(_cmdFaDMtKn)
		const _optionslnW3TTk = {
		
	}
		const __hasHelpOptionyB9Z2ZP = null;
		const _returnValueaaBhBNq = -9.636361459938177;
		const __helpShortFlagtfu2NtG = () => { return _returnValueaaBhBNq };
		const _returnValuenOmy0sW = undefined;
		const _returnValuecsNnPyb = () => { return _returnValuenOmy0sW };
		const __findOptionZ2xy5Tp = () => { return _returnValuecsNnPyb };
		const __helpLongFlagZO265Dy = 0.14295375182767422;
		const _returnValuexBpkcNt = null;
		const _createOptionjlhoo8 = () => { return _returnValuexBpkcNt };
		const __helpDescriptionbDJawvP = 9.490521649905407;
		const __helpFlagsx0RKXSM = undefined;
		const _cmdtOLuHsC = {
			"options": _optionslnW3TTk,
		"_hasHelpOption": __hasHelpOptionyB9Z2ZP,
		"_helpShortFlag": __helpShortFlagtfu2NtG,
		"_findOption": __findOptionZ2xy5Tp,
		"_helpLongFlag": __helpLongFlagZO265Dy,
		"createOption": _createOptionjlhoo8,
		"_helpDescription": __helpDescriptionbDJawvP,
		"_helpFlags": __helpFlagsx0RKXSM
	}
		const _returnValueIh2fU53 = await _Helpr2hUQGA.visibleOptions(_cmdtOLuHsC)
	});

	it('test for Help', async () => {
		const _HelprAP3LtQ = new Help()
		const _returnValuey2hd0LX = null;
		const _descriptiont8ciUrq = () => { return _returnValuey2hd0LX };
		const _cmdpdgR2Lp = {
			"description": _descriptiont8ciUrq
	}
		const _returnValueoknoK6q = await _HelprAP3LtQ.subcommandDescription(_cmdpdgR2Lp)
		const _commandsxvpEKH3 = {
		
	}
		const _returnValueJJT0ldc = "9nuaVti68K2SqP6aAgmfJxs9w6jYUUCezq2OC5GyiyatWbTVJq5v4R5gleX8pTA";
		const __hasImplicitHelpCommanddNztG1W = () => { return _returnValueJJT0ldc };
		const __helpCommandnameAndArgsxrmnrie = {
		
	}
		const _returnValueyJ6VDnJ = true;
		const _returnValuerUmq5u7 = () => { return _returnValueyJ6VDnJ };
		const _createCommandAwPF9uO = () => { return _returnValuerUmq5u7 };
		const __helpCommandDescriptionjxtHJm = []
		const _cmdwXEc7S = {
			"commands": _commandsxvpEKH3,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommanddNztG1W,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsxrmnrie,
		"createCommand": _createCommandAwPF9uO,
		"_helpCommandDescription": __helpCommandDescriptionjxtHJm
	}
		const _returnValueSzZb7QT = await _HelprAP3LtQ.visibleCommands(_cmdwXEc7S)
	});

	it('test for Help', async () => {
		const _HelpdXni8TX = new Help()
		const _returnValuequQEvam = undefined;
		const _returnValuebFPVGtH = () => { return _returnValuequQEvam };
		const _matchfhEFMJe = () => { return _returnValuebFPVGtH };
		const _returnValueCjldwpJ = null;
		const _substreS2NEET = () => { return _returnValueCjldwpJ };
		const _strlQ6evWE = {
			"match": _matchfhEFMJe,
		"substr": _substreS2NEET
	}
		const _widthgGw2r3S = 7.613392126065612;
		const _indentEQpupCS = -5.239033672944271;
		const _returnValuerOkA0C4 = {
		
	}
		const _minColumnWidthBWHJWZL = () => { return _returnValuerOkA0C4 };
		const _returnValuerTR9ZFF = await _HelpdXni8TX.wrap(_strlQ6evWE, _widthgGw2r3S, _indentEQpupCS, _minColumnWidthBWHJWZL)
		const _optionsJZpyfG3 = {
		
	}
		const __hasHelpOptionMWVfw6D = null;
		const _arrayValuenYhKYs8 = 1.8340728083831088;
		const _arrayValueKdQ00qs = [_arrayValuenYhKYs8]
		const __helpShortFlagbRcVuKx = [_arrayValueKdQ00qs]
		const _returnValuehD35x2Y = null;
		const __findOptionllNYUwW = () => { return _returnValuehD35x2Y };
		const __helpLongFlagu79nwpt = "dfxgiYRnhvUI6DAtcbcax1CFo3wkdnQChdyPcEiRYagVZEQxW1PU3vDPEtJlb9D2NxlIMwDvMHg9m3elV2z8lRx4q7hU5";
		const _returnValueUauoesD = "9oqL1FonhyWuLsANdjGPWVwRmTGQEvog";
		const _returnValueIyaji4A = () => { return _returnValueUauoesD };
		const _createOptionN1SYXXP = () => { return _returnValueIyaji4A };
		const __helpDescriptionH06g9Xk = true;
		const __helpFlagsMhVoEx5 = 2.3437733808644055;
		const _cmdHUC8XxZ = {
			"options": _optionsJZpyfG3,
		"_hasHelpOption": __hasHelpOptionMWVfw6D,
		"_helpShortFlag": __helpShortFlagbRcVuKx,
		"_findOption": __findOptionllNYUwW,
		"_helpLongFlag": __helpLongFlagu79nwpt,
		"createOption": _createOptionN1SYXXP,
		"_helpDescription": __helpDescriptionH06g9Xk,
		"_helpFlags": __helpFlagsMhVoEx5
	}
		const _returnValuecbOI0nl = await _HelpdXni8TX.visibleOptions(_cmdHUC8XxZ)
		const _cmdKbYxpJ7 = false;
		const _returnValuenShUjfd = null;
		const _sortSubcommandstyu7dU0 = () => { return _returnValuenShUjfd };
		const _arrayValueCthxYfZ = null;
		const _arrayValuee4jVpSs = null;
		const _returnValuejyHXAgI = [_arrayValueCthxYfZ, _arrayValuee4jVpSs]
		const _returnValueqFzXSqq = () => { return _returnValuejyHXAgI };
		const _subcommandTermlwRE1F = () => { return _returnValueqFzXSqq };
		const _helpereNhVlD = {
			"sortSubcommands": _sortSubcommandstyu7dU0,
		"subcommandTerm": _subcommandTermlwRE1F
	}
		const _returnValueNwv16t1 = await _HelpdXni8TX.longestSubcommandTermLength(_cmdKbYxpJ7, _helpereNhVlD)
		const _returnValueOsbRcKV = undefined;
		const _descriptionZvesoRK = () => { return _returnValueOsbRcKV };
		const _cmdLSGBse0 = {
			"description": _descriptionZvesoRK
	}
		const _returnValueZwuIraD = await _HelpdXni8TX.subcommandDescription(_cmdLSGBse0)
	});

	it('test for Help', async () => {
		const _Helpe7SMeeg = new Help()
		const _flagsl76BCX = 6.883272212398829;
		const _optionygCvhG = {
			"flags": _flagsl76BCX
	}
		const _returnValuePFcEGsR = await _Helpe7SMeeg.optionTerm(_optionygCvhG)
		const _returnValueRgIYTc = {
		
	}
		const _descriptiondDQiuY5 = () => { return _returnValueRgIYTc };
		const _cmdhl2nl7 = {
			"description": _descriptiondDQiuY5
	}
		const _returnValueuqLQWe = await _Helpe7SMeeg.commandDescription(_cmdhl2nl7)
		const _argChoicesyqQzJAh = {
		
	}
		const _negatehu1f7Dx = null;
		const _defaultValueVLqtnCl = undefined;
		const _defaultValueDescriptiongDzVCjb = 7.037182041821769;
		const _envVarECnYIlY = undefined;
		const _descriptionD7qyZxN = undefined;
		const _optionjLE0YgD = {
			"argChoices": _argChoicesyqQzJAh,
		"negate": _negatehu1f7Dx,
		"defaultValue": _defaultValueVLqtnCl,
		"defaultValueDescription": _defaultValueDescriptiongDzVCjb,
		"envVar": _envVarECnYIlY,
		"description": _descriptionD7qyZxN
	}
		const _returnValueRK8LUB6 = await _Helpe7SMeeg.optionDescription(_optionjLE0YgD)
		const _optionsaNdgVam = {
		
	}
		const __hasHelpOptionNSudtmG = undefined;
		const __helpShortFlagYkb4bOb = undefined;
		const _returnValuebX3Php = {
		
	}
		const __findOptionbJ5cKKJ = () => { return _returnValuebX3Php };
		const _returnValuedgQmAbc = null;
		const __helpLongFlagoXq56l2 = () => { return _returnValuedgQmAbc };
		const _returnValueiNJyFsZ = false;
		const _createOptionSgx5usI = () => { return _returnValueiNJyFsZ };
		const __helpDescriptionF6Ryhw = []
		const __helpFlagsMUkfvlf = -2.125300008052565;
		const _cmduYTmr8 = {
			"options": _optionsaNdgVam,
		"_hasHelpOption": __hasHelpOptionNSudtmG,
		"_helpShortFlag": __helpShortFlagYkb4bOb,
		"_findOption": __findOptionbJ5cKKJ,
		"_helpLongFlag": __helpLongFlagoXq56l2,
		"createOption": _createOptionSgx5usI,
		"_helpDescription": __helpDescriptionF6Ryhw,
		"_helpFlags": __helpFlagsMUkfvlf
	}
		const _returnValueJly3Zws = await _Helpe7SMeeg.visibleOptions(_cmduYTmr8)
		const _returnValueOvvVheu = undefined;
		const _matchGGYamdx = () => { return _returnValueOvvVheu };
		const _returnValuem6akBDp = null;
		const _substrUBAkNhZ = () => { return _returnValuem6akBDp };
		const _strU1QXyjq = {
			"match": _matchGGYamdx,
		"substr": _substrUBAkNhZ
	}
		const _widtheGaqZyO = 9.273978851045033;
		const _indentiWeAHRj = 5.735931069612175;
		const _minColumnWidth2iEPdv = -3.0058319555014625;
		const _returnValueLV85WWj = await _Helpe7SMeeg.wrap(_strU1QXyjq, _widtheGaqZyO, _indentiWeAHRj, _minColumnWidth2iEPdv)
	});

	it('test for Help', async () => {
		const _Helpis4cXCI = new Help()
		const _returnValuezheXzY = null;
		const _match4Qy1wm = () => { return _returnValuezheXzY };
		const _returnValueWOJSy3o = 6.741532877575082;
		const _substrrESdq2 = () => { return _returnValueWOJSy3o };
		const _strshxb0JF = {
			"match": _match4Qy1wm,
		"substr": _substrrESdq2
	}
		const _widthVk9wupm = -5.50720590912812;
		const _indentIJv7dRn = -9.207399840793773;
		const _minColumnWidthCvIUfRZ = -2.962940166771081;
		const _returnValuecKGVDw6 = await _Helpis4cXCI.wrap(_strshxb0JF, _widthVk9wupm, _indentIJv7dRn, _minColumnWidthCvIUfRZ)
		const _arrayValueaikSpYh = "6eFhb7uX7FTmOY8rKIDpFZe3VTZiuwGv";
		const _arrayValueg60BDoB = 5.8749339720091776;
		const _arrayValueLgYJ00y = [_arrayValueaikSpYh, _arrayValueg60BDoB]
		const _cmdaMv5e1G = [_arrayValueLgYJ00y]
		const _returnValueLt6GLgW = -7.938314110357026;
		const _sortSubcommandsL76uep = () => { return _returnValueLt6GLgW };
		const _returnValueyYMbjEg = undefined;
		const _subcommandTermIgJWZO1 = () => { return _returnValueyYMbjEg };
		const _helperJjrry4 = {
			"sortSubcommands": _sortSubcommandsL76uep,
		"subcommandTerm": _subcommandTermIgJWZO1
	}
		const _returnValueOH2Mci = await _Helpis4cXCI.formatHelp(_cmdaMv5e1G, _helperJjrry4)
	});

	it('test for Help', async () => {
		const _HelpIZ48ruZ = new Help()
		const _returnValueSrcnp9k = -1.3765603565892857;
		const _nameiLfpimC = () => { return _returnValueSrcnp9k };
		const _argumentgBiYREa = {
			"name": _nameiLfpimC
	}
		const _returnValuehEp9QKh = await _HelpIZ48ruZ.argumentTerm(_argumentgBiYREa)
		const _arrayValuenvTYDn = true;
		const _returnValueDV58qu3 = [_arrayValuenvTYDn]
		const _nametLS7YKw = () => { return _returnValueDV58qu3 };
		const _argumentvjjvzZR = {
			"name": _nametLS7YKw
	}
		const _returnValuenfgCgHm = await _HelpIZ48ruZ.argumentTerm(_argumentvjjvzZR)
		const _arrayValueKCrEsEV = -1.4865774883432543;
		const _arrayValuee9Stq49 = "oJR2kkNBOh8cNSPescZ2nu";
		const _arrayValueyn8EiVG = [_arrayValuee9Stq49]
		const _arrayValuee2Ydhic = null;
		const _argChoiceskROHyGJ = [_arrayValueKCrEsEV, _arrayValueyn8EiVG, _arrayValuee2Ydhic]
		const _defaultValueRd0uohg = undefined;
		const _defaultValueDescriptionTZqpJVX = undefined;
		const _descriptionI0dPFwB = -5.4416726855444635;
		const _argumentlSRHGsI = {
			"argChoices": _argChoiceskROHyGJ,
		"defaultValue": _defaultValueRd0uohg,
		"defaultValueDescription": _defaultValueDescriptionTZqpJVX,
		"description": _descriptionI0dPFwB
	}
		const _returnValuehJADoV7 = await _HelpIZ48ruZ.argumentDescription(_argumentlSRHGsI)
		const _returnValueS94uA0W = undefined;
		const _descriptionlhnzISv = () => { return _returnValueS94uA0W };
		const _cmdKWejBie = {
			"description": _descriptionlhnzISv
	}
		const _returnValuer961j4 = await _HelpIZ48ruZ.commandDescription(_cmdKWejBie)
		const _returnValueBkLdBy = -7.067441715151851;
		const _nameChpaDV = () => { return _returnValueBkLdBy };
		const _argumentRR3SKz4 = {
			"name": _nameChpaDV
	}
		const _returnValueJnVlk9u = await _HelpIZ48ruZ.argumentTerm(_argumentRR3SKz4)
	});

	it('test for Help', async () => {
		const _HelpdgulIY2 = new Help()
		const _returnValuelbmlAko = null;
		const _matchmYoXSCx = () => { return _returnValuelbmlAko };
		const _returnValuexO5OIvL = {
		
	}
		const _substr95tAz0 = () => { return _returnValuexO5OIvL };
		const _strD1CefJe = {
			"match": _matchmYoXSCx,
		"substr": _substr95tAz0
	}
		const _widthIEOZyJu = -3.114663027373882;
		const _indentX0FyJJ = 4.360752627483786;
		const _minColumnWidthHjL604L = -4.8373153297448654;
		const _returnValuey5L3yO = await _HelpdgulIY2.wrap(_strD1CefJe, _widthIEOZyJu, _indentX0FyJJ, _minColumnWidthHjL604L)
		const _returnValue9alfIi = null;
		const _nameJbj1qi = () => { return _returnValue9alfIi };
		const _argumentqlgLcc2 = {
			"name": _nameJbj1qi
	}
		const _returnValueahA6KAB = await _HelpdgulIY2.argumentTerm(_argumentqlgLcc2)
		const _cmdlxCHw6N = {
		
	}
		const _sortSubcommandsoCjiKd3 = []
		const _returnValueCIv4LkQ = null;
		const _subcommandTermbPcvlMB = () => { return _returnValueCIv4LkQ };
		const _helperXjWaCOX = {
			"sortSubcommands": _sortSubcommandsoCjiKd3,
		"subcommandTerm": _subcommandTermbPcvlMB
	}
		const _returnValueBVsDqCO = await _HelpdgulIY2.formatHelp(_cmdlxCHw6N, _helperXjWaCOX)
	});

	it('test for Help', async () => {
		const _HelpJzbhM79 = new Help()
		const _argChoicesBBlX09C = undefined;
		const _defaultValueoF3yKpa = undefined;
		const _defaultValueDescriptionAk2Og3r = -3.935503068284153;
		const _descriptionSEgQIu = {
		
	}
		const _argumentIEzmdIW = {
			"argChoices": _argChoicesBBlX09C,
		"defaultValue": _defaultValueoF3yKpa,
		"defaultValueDescription": _defaultValueDescriptionAk2Og3r,
		"description": _descriptionSEgQIu
	}
		const _returnValuebaXckde = await _HelpJzbhM79.argumentDescription(_argumentIEzmdIW)
		const _returnValuedha2qPi = "phKYWmGNW71mRwrySCaQmfGXGhBvWlWcxcOhRMefx6gFUXihnIKWLHKOMn9eMD5vnh1IHFe1JeJ8q3IF9eMsbPyydo";
		const _descriptioncIGiexh = () => { return _returnValuedha2qPi };
		const _cmdMcjHjXg = {
			"description": _descriptioncIGiexh
	}
		const _returnValueSErZiVH = await _HelpJzbhM79.subcommandDescription(_cmdMcjHjXg)
		const _argChoicesfh8TS1 = {
		
	}
		const _negateW57UiLe = {
		
	}
		const _defaultValueq42mKWl = undefined;
		const _defaultValueDescriptionUmiZuuz = -9.680468316809632;
		const _envVarDGQtfgU = undefined;
		const _arrayValueaCCo0ps = false;
		const _descriptionU08Fwf = [_arrayValueaCCo0ps]
		const _optioncCbNlvr = {
			"argChoices": _argChoicesfh8TS1,
		"negate": _negateW57UiLe,
		"defaultValue": _defaultValueq42mKWl,
		"defaultValueDescription": _defaultValueDescriptionUmiZuuz,
		"envVar": _envVarDGQtfgU,
		"description": _descriptionU08Fwf
	}
		const _returnValueXb4Upq1 = await _HelpJzbhM79.optionDescription(_optioncCbNlvr)
		const __argsCiJiBsd = {
		
	}
		const __namehJGGtHg = -6.324303156891606;
		const __aliasesM2vbNHy = {
		
	}
		const _optionsLVIh37 = {
		
	}
		const _cmdvAc6yJI = {
			"_args": __argsCiJiBsd,
		"_name": __namehJGGtHg,
		"_aliases": __aliasesM2vbNHy,
		"options": _optionsLVIh37
	}
		const _returnValuechYLVBa = await _HelpJzbhM79.subcommandTerm(_cmdvAc6yJI)
	});

	it('test for Help', async () => {
		const _Help8k20pV = new Help()
		const _argChoicesLGJqWeZ = {
		
	}
		const _negateLIemh19 = true;
		const _defaultValueLy2UlPw = undefined;
		const _defaultValueDescriptionYuGFQoP = -5.882102026527118;
		const _envVartsbNn05 = "RPr59I";
		const _returnValuenybN1rn = false;
		const _descriptionIQyPm9l = () => { return _returnValuenybN1rn };
		const _optionmEpSwI9 = {
			"argChoices": _argChoicesLGJqWeZ,
		"negate": _negateLIemh19,
		"defaultValue": _defaultValueLy2UlPw,
		"defaultValueDescription": _defaultValueDescriptionYuGFQoP,
		"envVar": _envVartsbNn05,
		"description": _descriptionIQyPm9l
	}
		const _returnValuecQ7Z9Qd = await _Help8k20pV.optionDescription(_optionmEpSwI9)
		const _returnValuepWfOxJ = 8.352254533648448;
		const _returnValueKfTEBEY = () => { return _returnValuepWfOxJ };
		const _cmdD4kAsfy = () => { return _returnValueKfTEBEY };
		const _returnValueQEVsA7Y = null;
		const _longestOptionTermLengthEMKmCdL = () => { return _returnValueQEVsA7Y };
		const _returnValueKzaD8Y = undefined;
		const _longestSubcommandTermLengthR2yUc1A = () => { return _returnValueKzaD8Y };
		const _returnValuesoIT5C0 = undefined;
		const _longestArgumentTermLengthjjkZyJ0 = () => { return _returnValuesoIT5C0 };
		const _helperPQ5eZAz = {
			"longestOptionTermLength": _longestOptionTermLengthEMKmCdL,
		"longestSubcommandTermLength": _longestSubcommandTermLengthR2yUc1A,
		"longestArgumentTermLength": _longestArgumentTermLengthjjkZyJ0
	}
		const _returnValueu0w3NQE = await _Help8k20pV.padWidth(_cmdD4kAsfy, _helperPQ5eZAz)
		const _options11BDqc = 5.089912600496207;
		const __hasHelpOptionZPBcpj5 = null;
		const __helpShortFlagTKX0ufY = null;
		const _returnValueU1VI3F7 = {
		
	}
		const __findOptionBlb1daa = () => { return _returnValueU1VI3F7 };
		const __helpLongFlaglv49xon = true;
		const _createOptionWYnr1s = "lDKndQQ5km7pKhNaCx2RCm7aqtpqMJxQH4tdkBxJuuTywdYVjOzgvUwKGol8bFmQ1dMlOyRWKLpV1P7tD4S2RU";
		const __helpDescriptionRjrllQU = false;
		const __helpFlagsmVQLdsr = "w3pPpSKFHqCdiVHKEs1MfR2edejOkAMLAo91pkdiH3Qy2t38YpZldNGUnJyD3YOlDXWK9NNX8OOb9s9aDhIpvaUwhi3BeAg";
		const _cmdZbyAasO = {
			"options": _options11BDqc,
		"_hasHelpOption": __hasHelpOptionZPBcpj5,
		"_helpShortFlag": __helpShortFlagTKX0ufY,
		"_findOption": __findOptionBlb1daa,
		"_helpLongFlag": __helpLongFlaglv49xon,
		"createOption": _createOptionWYnr1s,
		"_helpDescription": __helpDescriptionRjrllQU,
		"_helpFlags": __helpFlagsmVQLdsr
	}
		const _returnValueDOqk9JR = await _Help8k20pV.visibleOptions(_cmdZbyAasO)
		const _returnValueJ3sdfgv = 2.0941271802590045;
		const _cmdfbVzcNw = () => { return _returnValueJ3sdfgv };
		const _returnValueWqaNht = false;
		const _visibleArgumentsM2SdHXU = () => { return _returnValueWqaNht };
		const _returnValueLJPOtkd = false;
		const _returnValueZef3v2L = () => { return _returnValueLJPOtkd };
		const _argumentTermJwgyRFo = () => { return _returnValueZef3v2L };
		const _helperZ00NS5x = {
			"visibleArguments": _visibleArgumentsM2SdHXU,
		"argumentTerm": _argumentTermJwgyRFo
	}
		const _returnValueQpxmzLH = await _Help8k20pV.longestArgumentTermLength(_cmdfbVzcNw, _helperZ00NS5x)
		const __argsFHwg5En = {
		
	}
		const __nameSfZ76tz = -2.7407551810659836;
		const __aliasesiuMNJrJ = {
		
	}
		const _optionsGuoZsik = {
		
	}
		const _cmd8yCnb9 = {
			"_args": __argsFHwg5En,
		"_name": __nameSfZ76tz,
		"_aliases": __aliasesiuMNJrJ,
		"options": _optionsGuoZsik
	}
		const _returnValueVx0M3et = await _Help8k20pV.subcommandTerm(_cmd8yCnb9)
	});

	it('test for Help', async () => {
		const _HelpuFRXmQP = new Help()
		const _arrayValueUmgyz9 = null;
		const _arrayValueKG27P8x = -2.5023880088857897;
		const _arrayValuebmf5pPw = "kNvnD9eqg8u7cKsZyt6AqAUzJuYHUhor9IvWnmLfJFKElMaYatKapOmb4swj4pmBrWhUmP6xmxARUnyIWXNV";
		const _arrayValuexmffHeL = [_arrayValuebmf5pPw]
		const _arrayValueEaB45pk = undefined;
		const _arrayValueCd2dvSb = [_arrayValuexmffHeL, _arrayValueEaB45pk]
		const _argChoicesch0qfUJ = [_arrayValueUmgyz9, _arrayValueKG27P8x, _arrayValueCd2dvSb]
		const _defaultValueY0V9ypV = {
		
	}
		const _defaultValueDescriptionRnz5ddC = false;
		const _descriptionVpiFnqS = undefined;
		const _argumentYecy6F = {
			"argChoices": _argChoicesch0qfUJ,
		"defaultValue": _defaultValueY0V9ypV,
		"defaultValueDescription": _defaultValueDescriptionRnz5ddC,
		"description": _descriptionVpiFnqS
	}
		const _returnValueMRpFKjS = await _HelpuFRXmQP.argumentDescription(_argumentYecy6F)
		const _returnValueDTi1i9H = null;
		const _namezhOoS7O = () => { return _returnValueDTi1i9H };
		const _argumentiSoa4eC = {
			"name": _namezhOoS7O
	}
		const _returnValuew0Rc9cO = await _HelpuFRXmQP.argumentTerm(_argumentiSoa4eC)
		const _argChoicesMWPo8hZ = {
		
	}
		const _defaultValuelCIgJe7 = undefined;
		const _defaultValueDescriptioncRsLqVO = null;
		const _descriptiondiaoUgw = -6.311053852597032;
		const _argumentu24VZkd = {
			"argChoices": _argChoicesMWPo8hZ,
		"defaultValue": _defaultValuelCIgJe7,
		"defaultValueDescription": _defaultValueDescriptioncRsLqVO,
		"description": _descriptiondiaoUgw
	}
		const _returnValue1WVYk0 = await _HelpuFRXmQP.argumentDescription(_argumentu24VZkd)
		const _cmdVWnvpmg = "CJenVOIAsnu";
		const _returnValuey0ev3HS = undefined;
		const _longestOptionTermLengthpABn8bS = () => { return _returnValuey0ev3HS };
		const _returnValueSdtidqr = true;
		const _longestSubcommandTermLengthEiVwTO = () => { return _returnValueSdtidqr };
		const _returnValueApsR9O6 = -8.612324392890452;
		const _longestArgumentTermLengthcwsIB8k = () => { return _returnValueApsR9O6 };
		const _helperDTO3MO5 = {
			"longestOptionTermLength": _longestOptionTermLengthpABn8bS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthEiVwTO,
		"longestArgumentTermLength": _longestArgumentTermLengthcwsIB8k
	}
		const _returnValuewRPL00L = await _HelpuFRXmQP.padWidth(_cmdVWnvpmg, _helperDTO3MO5)
	});

	it('test for Help', async () => {
		const _HelpntBcxoz = new Help()
		const _arrayValueDNp3myb = true;
		const _returnValueonj2PrC = undefined;
		const _returnValuez6UqNOD = () => { return _returnValueonj2PrC };
		const _arrayValuemz9YivY = () => { return _returnValuez6UqNOD };
		const _commandsFO6bVO7 = [_arrayValueDNp3myb, _arrayValuemz9YivY]
		const _returnValueKYHKW3h = "WwetmJhC490xXyccwqdqe4Vx2DDzSVengTw8uRBOwi899f4PW0Nz04";
		const __hasImplicitHelpCommandsxttI6 = () => { return _returnValueKYHKW3h };
		const __helpCommandnameAndArgsScmQUUm = {
		
	}
		const _returnValueJzrNdLI = "Y6ldKS1E6e6GYJSIuBif1VyZNcpkpJJ3OvqNad67T7yb8OKTdiJ0ZzvJdtRP5P46hBQjhLR1L8MyD8d9lY0EeRsRBnePeSOSf";
		const _createCommandgQj7aKK = () => { return _returnValueJzrNdLI };
		const __helpCommandDescriptionVvg0Ton = "qwgXFErSB6J1";
		const _cmdVV2OIB = {
			"commands": _commandsFO6bVO7,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandsxttI6,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsScmQUUm,
		"createCommand": _createCommandgQj7aKK,
		"_helpCommandDescription": __helpCommandDescriptionVvg0Ton
	}
		const _returnValueZpfbDzg = await _HelpntBcxoz.visibleCommands(_cmdVV2OIB)
		const _arrayValuezrXW9CU = undefined;
		const _arrayValuesidSVPb = null;
		const _returnValueqJGJqAi = "MehbVj5YycqnFeGBiK4E1bVNMzlbA6dgnSXdowvtRmTgFSuIvHwxk7cfAoxIq";
		const _arrayValueNzQ9rOI = () => { return _returnValueqJGJqAi };
		const _returnValueAC18Fiy = [_arrayValuesidSVPb, _arrayValueNzQ9rOI]
		const _arrayValuei4doSc = () => { return _returnValueAC18Fiy };
		const _returnValueRBBV5Ot = []
		const _arrayValueiVJP46U = () => { return _returnValueRBBV5Ot };
		const _arrayValuewQJcmrP = null;
		const _arrayValuePE25CSJ = undefined;
		const _arrayValue6ekeCx = [_arrayValuewQJcmrP, _arrayValuePE25CSJ]
		const _arrayValueIBIrFSm = [_arrayValuei4doSc, _arrayValueiVJP46U, _arrayValue6ekeCx]
		const _arrayValueN4u779P = [_arrayValuezrXW9CU, _arrayValueIBIrFSm]
		const _cmdmwLUavS = [_arrayValueN4u779P]
		const _helperc5fPF2Z = null;
		const _returnValueMjEv5l = await _HelpntBcxoz.longestSubcommandTermLength(_cmdmwLUavS, _helperc5fPF2Z)
	});

	it('test for Help', async () => {
		const _HelpArQAko = new Help()
		const __nameMWdjRq6 = {
		
	}
		const __aliasesCFTkbp8 = "BKV8bz3Pu3nYoROmC5qR98Y3js";
		const _parentfYRuAL8 = "f3LKhOVcNS1CLPwgXUC5vDgtlpzupN33YntSwjufhY1bfSNeg3SmrPeJ6T7rqbX64698tLzGImnsGbV9GOair2Noi";
		const _returnValueodhSldC = "2ZB8a8xeQ2NnFRh39sXrGE2wOd8xN2unGzW5ii9KELQv9IlSuuxlg5kaX0DwOgQ4bpxj74Tzluiu1";
		const _usageSFQeIpM = () => { return _returnValueodhSldC };
		const _cmdBkalh5X = {
			"_name": __nameMWdjRq6,
		"_aliases": __aliasesCFTkbp8,
		"parent": _parentfYRuAL8,
		"usage": _usageSFQeIpM
	}
		const _returnValueCdw5wyN = await _HelpArQAko.commandUsage(_cmdBkalh5X)
		const _commandsfSN9aU8 = {
		
	}
		const _returnValueWEXfQ8u = true;
		const __hasImplicitHelpCommandl1BrKX = () => { return _returnValueWEXfQ8u };
		const __helpCommandnameAndArgs1j8Yt5 = {
		
	}
		const _returnValueFftJ0D = undefined;
		const _createCommandQK1AYtQ = () => { return _returnValueFftJ0D };
		const __helpCommandDescriptionMciS0b = "cfCaXNRvfzViuGkG9G9ZoWYCka1raiG9p";
		const _cmdPpP7Oa = {
			"commands": _commandsfSN9aU8,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandl1BrKX,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgs1j8Yt5,
		"createCommand": _createCommandQK1AYtQ,
		"_helpCommandDescription": __helpCommandDescriptionMciS0b
	}
		const _returnValuegx39Lji = await _HelpArQAko.visibleCommands(_cmdPpP7Oa)
		const _cmdXjzB2TW = "n49YxJ6fPIGceIdkvFLaDr8lKevai3rnKPh27EH15Lsb1QPwHxJ2FkSqOdi8B6kMzKVltneibqmmzILKkb8DYKFxsXcx3BzLqgn";
		const _sortSubcommandsytr8ttg = 6.67301035469864;
		const _returnValuepnQkjeZ = null;
		const _subcommandTermVai0mPh = () => { return _returnValuepnQkjeZ };
		const _helperQtdhNl = {
			"sortSubcommands": _sortSubcommandsytr8ttg,
		"subcommandTerm": _subcommandTermVai0mPh
	}
		const _returnValuegLg7pHR = await _HelpArQAko.formatHelp(_cmdXjzB2TW, _helperQtdhNl)
		const _argChoicesWnwRNmC = {
		
	}
		const _negateYEHxLu4 = "uoLkNo5Nswnxj8U9gG4zN16kXGPTBQ9BkgJB2zSRAvd5rv2WFqxiPcjX5TgezfQ8";
		const _defaultValueVRZRW4 = undefined;
		const _defaultValueDescriptionOYwoSW = undefined;
		const _envVarqMdUs1x = undefined;
		const _descriptionPBgX9nO = "Q1NbzDcMnyDmVzvxBiqRA";
		const _optionjrXk3dB = {
			"argChoices": _argChoicesWnwRNmC,
		"negate": _negateYEHxLu4,
		"defaultValue": _defaultValueVRZRW4,
		"defaultValueDescription": _defaultValueDescriptionOYwoSW,
		"envVar": _envVarqMdUs1x,
		"description": _descriptionPBgX9nO
	}
		const _returnValueFWHCLIp = await _HelpArQAko.optionDescription(_optionjrXk3dB)
	});
})