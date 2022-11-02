export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpOa7i5zg = new Help()
		const _cmdUC7y9lZ = undefined;
		const _returnValuevbfapMj = true;
		const _longestOptionTermLengthNZcAKQ1 = () => { return _returnValuevbfapMj };
		const _returnValueE3mojhD = "qTN7lp9KC19wx63GGeii8B5KwYxrvlpzm5W5qMYnXXkxO3ar";
		const _longestSubcommandTermLengthnQTnWQ5 = () => { return _returnValueE3mojhD };
		const _arrayValueEGlzy7K = -8.45956638276672;
		const _arrayValuea881YyR = "RumJ";
		const _returnValuecH78OF2 = [_arrayValueEGlzy7K, _arrayValuea881YyR]
		const _longestArgumentTermLengthrXWj5ww = () => { return _returnValuecH78OF2 };
		const _helperVGf6ZL = {
			"longestOptionTermLength": _longestOptionTermLengthNZcAKQ1,
		"longestSubcommandTermLength": _longestSubcommandTermLengthnQTnWQ5,
		"longestArgumentTermLength": _longestArgumentTermLengthrXWj5ww
	}
		const _returnValueyMNKXJI = await _HelpOa7i5zg.padWidth(_cmdUC7y9lZ, _helperVGf6ZL)
		const _argChoicesap8J5H0 = {
		
	}
		const _defaultValuem8HVvd = undefined;
		const _defaultValueDescriptionvjBMtu8 = 4.226347640384866;
		const _arrayValueXjXzjv = undefined;
		const _arrayValueroCWhp9 = true;
		const _arrayValuexrkDSHp = undefined;
		const _descriptionPxxkMSH = [_arrayValueXjXzjv, _arrayValueroCWhp9, _arrayValuexrkDSHp]
		const _argumentmTHNAyh = {
			"argChoices": _argChoicesap8J5H0,
		"defaultValue": _defaultValuem8HVvd,
		"defaultValueDescription": _defaultValueDescriptionvjBMtu8,
		"description": _descriptionPxxkMSH
	}
		const _returnValuexrAUjZn = await _HelpOa7i5zg.argumentDescription(_argumentmTHNAyh)
		const _commandsNmaWpGk = {
		
	}
		const __hasImplicitHelpCommandc1TjFUD = {
		
	}
		const __helpCommandnameAndArgsPcONYgx = {
		
	}
		const _returnValuezr9euv = undefined;
		const _createCommandgkcGAo = () => { return _returnValuezr9euv };
		const __helpCommandDescriptionma0XRe = false;
		const _cmdcH1G8j = {
			"commands": _commandsNmaWpGk,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandc1TjFUD,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPcONYgx,
		"createCommand": _createCommandgkcGAo,
		"_helpCommandDescription": __helpCommandDescriptionma0XRe
	}
		const _returnValuettxZlWu = await _HelpOa7i5zg.visibleCommands(_cmdcH1G8j)
		const _argChoicesjp30gB = {
		
	}
		const _defaultValueXbYobs = undefined;
		const _arrayValueAYP0xGy = "TgLNfAD8dlUT";
		const _arrayValue25MovS = "e48p84izQ9f9HLDU7aWMBv0oUoFy2x0wjxFGrMaWRr4pWUa7sPbyt57O8uWVWeKtpodn6wu0LCYz9jcLNpA";
		const _defaultValueDescriptionJ7aW4TK = [_arrayValueAYP0xGy, _arrayValue25MovS]
		const _descriptionmYA9pa4 = "jvhknR7drkJnCSfMze3uJESAJrE6MTbNuU4rqnepToFDk7YiE541V3hA766P40qKUNMijbRtHpnctrRfQsNToh3kP7hf";
		const _argumentatcu1K = {
			"argChoices": _argChoicesjp30gB,
		"defaultValue": _defaultValueXbYobs,
		"defaultValueDescription": _defaultValueDescriptionJ7aW4TK,
		"description": _descriptionmYA9pa4
	}
		const _returnValuebRnd2DJ = await _HelpOa7i5zg.argumentDescription(_argumentatcu1K)
		const _strH6w7qU7 = undefined;
		const _widthVTaWqo4 = 8.710198392163782;
		const _indentQYRK8Fs = -1.6680828215808816;
		const _minColumnWidthpi8u1nS = 1.3992772230359325;
		const _returnValueVs7yUHO = await _HelpOa7i5zg.wrap(_strH6w7qU7, _widthVTaWqo4, _indentQYRK8Fs, _minColumnWidthpi8u1nS)
	});

	it('test for Help', async () => {
		const _Helphs8ZOwj = new Help()
		const _optionfaycubS = 2.1402306366190587;
		const _returnValueHipnQZm = await _Helphs8ZOwj.optionDescription(_optionfaycubS)
		const _returnValueUtnyRy5 = true;
		const _nameHVvL9zM = () => { return _returnValueUtnyRy5 };
		const _argumentPOeEMcY = {
			"name": _nameHVvL9zM
	}
		const _returnValuerQYtQiK = await _Helphs8ZOwj.argumentTerm(_argumentPOeEMcY)
		const _returnValuepJOAAET = -7.192126533108292;
		const _nameZZrN1nH = () => { return _returnValuepJOAAET };
		const _argumentHpdZu4V = {
			"name": _nameZZrN1nH
	}
		const _returnValueCMH5EWK = await _Helphs8ZOwj.argumentTerm(_argumentHpdZu4V)
	});

	it('test for Help', async () => {
		const _HelpfnQUdt = new Help()
		const _cmdMQ4xA36 = "NyFbn4TnyFthFcYfpxTwZMgppcX7FdghhyA9G3pj3a7dXovqaPpfPe3AaOrchenBnHuLfJHph9KPAW3AMjvP";
		const _sortSubcommandseL62bPc = null;
		const _returnValuegvrpe2 = undefined;
		const _subcommandTermM4cTYGb = () => { return _returnValuegvrpe2 };
		const _helperUby7K1y = {
			"sortSubcommands": _sortSubcommandseL62bPc,
		"subcommandTerm": _subcommandTermM4cTYGb
	}
		const _returnValuetzacpmn = await _HelpfnQUdt.formatHelp(_cmdMQ4xA36, _helperUby7K1y)
		const _cmdl7i0jqA = "wl27Omj16xQ1qcj8LQV4fzDaeKoFfvGs6ce53ezQptvsvYrFvbYNIaiV6AKJJGcNMcjyZSGQ5XK5liDkSw";
		const _sortSubcommandsbNEQtPS = true;
		const _returnValueiAzoSA3 = null;
		const _subcommandTermYQsrO8 = () => { return _returnValueiAzoSA3 };
		const _helpersjPtf8S = {
			"sortSubcommands": _sortSubcommandsbNEQtPS,
		"subcommandTerm": _subcommandTermYQsrO8
	}
		const _returnValuec6axAgD = await _HelpfnQUdt.formatHelp(_cmdl7i0jqA, _helpersjPtf8S)
		const _cmdoe7wOFz = 3.165883391227302;
		const _sortSubcommandsO6KMri = undefined;
		const _arrayValueV8BK0EJ = undefined;
		const _arrayValueE2L14gB = [_arrayValueV8BK0EJ]
		const _arrayValueZcTiBk4 = 8.372346370567062;
		const _arrayValuevI4BNmX = false;
		const _arrayValueW9riLcH = null;
		const _returnValueYVY06O = [_arrayValueE2L14gB, _arrayValueZcTiBk4, _arrayValuevI4BNmX, _arrayValueW9riLcH]
		const _subcommandTermle3FmT1 = () => { return _returnValueYVY06O };
		const _helperaciNI5U = {
			"sortSubcommands": _sortSubcommandsO6KMri,
		"subcommandTerm": _subcommandTermle3FmT1
	}
		const _returnValuetYselM4 = await _HelpfnQUdt.formatHelp(_cmdoe7wOFz, _helperaciNI5U)
		const _optionsMb82vJT = {
		
	}
		const __hasHelpOptionU3rrjw = "QMdx";
		const _arrayValue3uhkhH = undefined;
		const _arrayValueGquVlXP = false;
		const __helpShortFlagUszIVw = [_arrayValue3uhkhH, _arrayValueGquVlXP]
		const _returnValueIwAvgcN = 5.978592815056356;
		const __findOptionSIiuW4Q = () => { return _returnValueIwAvgcN };
		const __helpLongFlagRgYDNRU = "hQD9h0hlp7B7okjVQ9etnV3njYVosYvSmtvCwOB8nbav3tK7RWPHMpnOpXflSSbnbOJKalRMj7Iwv8uUmNIvz";
		const _returnValueMxEewM9 = 2.2328447190818714;
		const _returnValuemMZqRF9 = () => { return _returnValueMxEewM9 };
		const _createOptionwDuDGRq = () => { return _returnValuemMZqRF9 };
		const _arrayValueGstYBLA = null;
		const __helpDescriptionll2IsQY = [_arrayValueGstYBLA]
		const __helpFlagsUMFZr4 = true;
		const _cmdDxmoKge = {
			"options": _optionsMb82vJT,
		"_hasHelpOption": __hasHelpOptionU3rrjw,
		"_helpShortFlag": __helpShortFlagUszIVw,
		"_findOption": __findOptionSIiuW4Q,
		"_helpLongFlag": __helpLongFlagRgYDNRU,
		"createOption": _createOptionwDuDGRq,
		"_helpDescription": __helpDescriptionll2IsQY,
		"_helpFlags": __helpFlagsUMFZr4
	}
		const _returnValueyOWgZue = await _HelpfnQUdt.visibleOptions(_cmdDxmoKge)
	});

	it('test for Help', async () => {
		const _HelpZtAGTs = new Help()
		const _flagscI67UfD = null;
		const _optionZTEo6Mc = {
			"flags": _flagscI67UfD
	}
		const _returnValuen3df45f = await _HelpZtAGTs.optionTerm(_optionZTEo6Mc)
		const __argsDescriptionEML9U9 = {
		
	}
		const __argsX93mQxA = {
		
	}
		const _cmdeNAxdD = {
			"_argsDescription": __argsDescriptionEML9U9,
		"_args": __argsX93mQxA
	}
		const _returnValueSHh2kOt = await _HelpZtAGTs.visibleArguments(_cmdeNAxdD)
		const _optionQ8BmS3k = false;
		const _returnValueGTBKg5E = await _HelpZtAGTs.optionTerm(_optionQ8BmS3k)
	});

	it('test for Help', async () => {
		const _HelpZcBNLsX = new Help()
		const __nameKlUf2qO = {
		
	}
		const __aliasesIasjtdZ = true;
		const _parentwRz7Z96 = {
		
	}
		const _returnValueNrMo5PT = undefined;
		const _usageAMRsUbK = () => { return _returnValueNrMo5PT };
		const _cmdnG1zJWn = {
			"_name": __nameKlUf2qO,
		"_aliases": __aliasesIasjtdZ,
		"parent": _parentwRz7Z96,
		"usage": _usageAMRsUbK
	}
		const _returnValuelU6So62 = await _HelpZcBNLsX.commandUsage(_cmdnG1zJWn)
		const _returnValuee8wjID = 9.446749225530393;
		const _matchsLGHyvx = () => { return _returnValuee8wjID };
		const _returnValueQ8Q8PYi = "5fxAvbxLaLrXan3AKmvFw18QAu5Uj7";
		const _substrTUh9mj = () => { return _returnValueQ8Q8PYi };
		const _strG7UYPwq = {
			"match": _matchsLGHyvx,
		"substr": _substrTUh9mj
	}
		const _returnValuevPXXWGE = {
		
	}
		const _returnValueuX1rD0 = () => { return _returnValuevPXXWGE };
		const _widthIurjDub = () => { return _returnValueuX1rD0 };
		const _indentdQYzoEy = -2.878528799399919;
		const _minColumnWidthH3J5Tfb = 3.8656809011896343;
		const _returnValueqjgyEQn = await _HelpZcBNLsX.wrap(_strG7UYPwq, _widthIurjDub, _indentdQYzoEy, _minColumnWidthH3J5Tfb)
		const _flagseqD7uz = false;
		const _optiongltq46p = {
			"flags": _flagseqD7uz
	}
		const _returnValueRQRYDWw = await _HelpZcBNLsX.optionTerm(_optiongltq46p)
	});

	it('test for Help', async () => {
		const _HelpLJFpin3 = new Help()
		const _cmdFuS8qDQ = undefined;
		const _sortSubcommandscxyNUG = {
		
	}
		const _returnValueL8PENDV = {
		
	}
		const _subcommandTerm1Pi5dk = () => { return _returnValueL8PENDV };
		const _helperJHRt5EB = {
			"sortSubcommands": _sortSubcommandscxyNUG,
		"subcommandTerm": _subcommandTerm1Pi5dk
	}
		const _returnValuexJq6BeF = await _HelpLJFpin3.longestSubcommandTermLength(_cmdFuS8qDQ, _helperJHRt5EB)
		const _cmd9Az0Q9 = undefined;
		const _sortSubcommandsR3883Kg = -7.014816202838461;
		const _arrayValuekF6rtC = undefined;
		const _returnValueSHGeFi = [_arrayValuekF6rtC]
		const _subcommandTermXIq98yL = () => { return _returnValueSHGeFi };
		const _helperG4DFzsq = {
			"sortSubcommands": _sortSubcommandsR3883Kg,
		"subcommandTerm": _subcommandTermXIq98yL
	}
		const _returnValueeQweLd6 = await _HelpLJFpin3.longestSubcommandTermLength(_cmd9Az0Q9, _helperG4DFzsq)
	});

	it('test for Help', async () => {
		const _Helpqr2yQBK = new Help()
		const _cmdK1SBSA = 3.5607942428918253;
		const _returnValuegeQEoE = undefined;
		const _visibleOptionsUHT6cUA = () => { return _returnValuegeQEoE };
		const _returnValueO5WgpzJ = 1.2006430680298035;
		const _optionTermIyvHS9V = () => { return _returnValueO5WgpzJ };
		const _helperpnBsBpL = {
			"visibleOptions": _visibleOptionsUHT6cUA,
		"optionTerm": _optionTermIyvHS9V
	}
		const _returnValueXIasf7n = await _Helpqr2yQBK.longestOptionTermLength(_cmdK1SBSA, _helperpnBsBpL)
		const __argsDescriptionXpXpZI6 = {
		
	}
		const __argspzL2RoW = {
		
	}
		const _cmddxWKBvP = {
			"_argsDescription": __argsDescriptionXpXpZI6,
		"_args": __argspzL2RoW
	}
		const _returnValueoDbXyE3 = await _Helpqr2yQBK.visibleArguments(_cmddxWKBvP)
	});

	it('test for Help', async () => {
		const _HelpclFPubk = new Help()
		const _cmdX14bCmb = "7184kAzB5vb2UzwriwmmQ3GWfEGVfaamRaWEcKQHDFvhox";
		const _helperq1qAUl = -5.486234351160992;
		const _returnValueCtR8jYf = await _HelpclFPubk.longestArgumentTermLength(_cmdX14bCmb, _helperq1qAUl)
		const _cmdAfBX5tK = -1.3257718307330144;
		const _visibleOptionsRTFGEhZ = []
		const _returnValuerd36ttN = "3YlJGtfpONzDgw4QOHkP1oczE";
		const _optionTermKQt6Dh = () => { return _returnValuerd36ttN };
		const _helperY7CCACH = {
			"visibleOptions": _visibleOptionsRTFGEhZ,
		"optionTerm": _optionTermKQt6Dh
	}
		const _returnValuex4zJWO5 = await _HelpclFPubk.longestOptionTermLength(_cmdAfBX5tK, _helperY7CCACH)
		const _arrayValuexAXEIvq = undefined;
		const _arrayValuepZzj5v8 = null;
		const _cmdNU7d6wG = [_arrayValuexAXEIvq, _arrayValuepZzj5v8]
		const _returnValueFiit65g = undefined;
		const _visibleArgumentsBIrZBz2 = () => { return _returnValueFiit65g };
		const _returnValueCyCCTQ0 = undefined;
		const _returnValuegjKvvYv = () => { return _returnValueCyCCTQ0 };
		const _argumentTermH3xVuO0 = () => { return _returnValuegjKvvYv };
		const _helperczpNm8H = {
			"visibleArguments": _visibleArgumentsBIrZBz2,
		"argumentTerm": _argumentTermH3xVuO0
	}
		const _returnValuen1pGvme = await _HelpclFPubk.longestArgumentTermLength(_cmdNU7d6wG, _helperczpNm8H)
	});

	it('test for Help', async () => {
		const _HelpSFRZYI3 = new Help()
		const _returnValuecyQfkra = null;
		const _descriptionKyYhNTS = () => { return _returnValuecyQfkra };
		const _cmdxun0cMY = {
			"description": _descriptionKyYhNTS
	}
		const _returnValuer5tC7N0 = await _HelpSFRZYI3.subcommandDescription(_cmdxun0cMY)
	});

	it('test for Help', async () => {
		const _HelpJB060eU = new Help()
		const _cmdn6BuZOK = true;
		const _returnValueBw89qXq = {
		
	}
		const _longestOptionTermLengthTJiYscH = () => { return _returnValueBw89qXq };
		const _returnValueWpWXYTD = 8.48532094537945;
		const _longestSubcommandTermLengthjq7pmWI = () => { return _returnValueWpWXYTD };
		const _returnValuebvZDthk = undefined;
		const _longestArgumentTermLengthz2Bes9H = () => { return _returnValuebvZDthk };
		const _helperNBmXQAR = {
			"longestOptionTermLength": _longestOptionTermLengthTJiYscH,
		"longestSubcommandTermLength": _longestSubcommandTermLengthjq7pmWI,
		"longestArgumentTermLength": _longestArgumentTermLengthz2Bes9H
	}
		const _returnValuen6WBxe = await _HelpJB060eU.padWidth(_cmdn6BuZOK, _helperNBmXQAR)
		const _strqT48qlI = false;
		const _widthad3hL0P = -0.01304291344227515;
		const _indentXgXGSdB = 8.99130215971616;
		const _minColumnWidthvdlXdR6 = 0.061567610550836704;
		const _returnValueQoFJqPU = await _HelpJB060eU.wrap(_strqT48qlI, _widthad3hL0P, _indentXgXGSdB, _minColumnWidthvdlXdR6)
		const _cmdlP7Ysk = -8.79641903799044;
		const _returnValuegHQHabV = undefined;
		const _visibleOptionsqcit0n = () => { return _returnValuegHQHabV };
		const _returnValueCylrxFg = {
		
	}
		const _optionTermCmeocb6 = () => { return _returnValueCylrxFg };
		const _helperPkbIPla = {
			"visibleOptions": _visibleOptionsqcit0n,
		"optionTerm": _optionTermCmeocb6
	}
		const _returnValuey5FWtH = await _HelpJB060eU.longestOptionTermLength(_cmdlP7Ysk, _helperPkbIPla)
		const _commandsT642sfB = {
		
	}
		const _returnValueWUA3zqh = true;
		const __hasImplicitHelpCommandN4ApLoU = () => { return _returnValueWUA3zqh };
		const __helpCommandnameAndArgsgZQIPx = {
		
	}
		const _returnValueHNwvCIN = false;
		const _createCommandCJzsch9 = () => { return _returnValueHNwvCIN };
		const __helpCommandDescriptionvzWWw1a = {
		
	}
		const _cmdVKumypi = {
			"commands": _commandsT642sfB,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandN4ApLoU,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsgZQIPx,
		"createCommand": _createCommandCJzsch9,
		"_helpCommandDescription": __helpCommandDescriptionvzWWw1a
	}
		const _returnValueZNBLxrx = await _HelpJB060eU.visibleCommands(_cmdVKumypi)
	});

	it('test for Help', async () => {
		const _Helpf5eBT4i = new Help()
		const _optionsXzpFXYa = {
		
	}
		const __hasHelpOptionqe4VpB = undefined;
		const __helpShortFlaglbY5wU = true;
		const _returnValuehcNLA9y = {
		
	}
		const __findOptionGCE7Xbq = () => { return _returnValuehcNLA9y };
		const __helpLongFlagIdtqeaq = -7.779875851424863;
		const _returnValueLmR6jLv = "NhR1CxEp9f6kRAFCOWxEsdzGgRCEch6HLrwOx";
		const _createOptionnit52wb = () => { return _returnValueLmR6jLv };
		const __helpDescriptionLoIcwT = true;
		const _arrayValueKkYxmMh = undefined;
		const _arrayValueyVOmZmR = undefined;
		const __helpFlagsgJigl6v = [_arrayValueKkYxmMh, _arrayValueyVOmZmR]
		const _cmdzI1g5fB = {
			"options": _optionsXzpFXYa,
		"_hasHelpOption": __hasHelpOptionqe4VpB,
		"_helpShortFlag": __helpShortFlaglbY5wU,
		"_findOption": __findOptionGCE7Xbq,
		"_helpLongFlag": __helpLongFlagIdtqeaq,
		"createOption": _createOptionnit52wb,
		"_helpDescription": __helpDescriptionLoIcwT,
		"_helpFlags": __helpFlagsgJigl6v
	}
		const _returnValueJ9o2B4u = await _Helpf5eBT4i.visibleOptions(_cmdzI1g5fB)
		const _cmdnp4scie = true;
		const _returnValueAAaniVL = -1.4121115541489981;
		const _longestOptionTermLength6qhfyJ = () => { return _returnValueAAaniVL };
		const _longestSubcommandTermLengthGktAEqB = -3.9626637227920174;
		const _arrayValuewDDzsV = false;
		const _arrayValueeJJK9qU = undefined;
		const _arrayValueideOVtj = null;
		const _arrayValueDjqxOZ = "n21JoIm3NYaZVkv2tkGAINct0sDXRHK5elL8HeShgOMl";
		const _arrayValueGwUWKu4 = [_arrayValueDjqxOZ]
		const _arrayValueGTYshgj = null;
		const _arrayValuefnRuho = [_arrayValueeJJK9qU, _arrayValueideOVtj, _arrayValueGwUWKu4, _arrayValueGTYshgj]
		const _returnValuetXSVALu = [_arrayValuewDDzsV, _arrayValuefnRuho]
		const _longestArgumentTermLengthqxt9dFX = () => { return _returnValuetXSVALu };
		const _helperR45ljiH = {
			"longestOptionTermLength": _longestOptionTermLength6qhfyJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthGktAEqB,
		"longestArgumentTermLength": _longestArgumentTermLengthqxt9dFX
	}
		const _returnValueQsZKhnf = await _Helpf5eBT4i.padWidth(_cmdnp4scie, _helperR45ljiH)
		const _arrayValuelInziLR = true;
		const _arrayValuea4de6fG = true;
		const _arrayValueTdSEYiV = true;
		const _returnValuepuMjRsu = [_arrayValuelInziLR, _arrayValuea4de6fG, _arrayValueTdSEYiV]
		const _descriptionKoqzYD = () => { return _returnValuepuMjRsu };
		const _cmdRXAuKOm = {
			"description": _descriptionKoqzYD
	}
		const _returnValueAGgwlrz = await _Helpf5eBT4i.subcommandDescription(_cmdRXAuKOm)
		const _cmdxEF6WC = {
		
	}
		const _sortSubcommandsMPfichm = true;
		const _subcommandTermrr4Uo6y = "FPgSDYPECAAQSeXMOUHttF7tykbirAQZAxasX8Cscq4K7sxa7vpGDjamMFowUyd9YUph81FUUz";
		const _helperwbhWWeq = {
			"sortSubcommands": _sortSubcommandsMPfichm,
		"subcommandTerm": _subcommandTermrr4Uo6y
	}
		const _returnValueQNOSjMp = await _Helpf5eBT4i.formatHelp(_cmdxEF6WC, _helperwbhWWeq)
		const _cmdwlJpCB3 = undefined;
		const _sortSubcommandsUuedDs = {
		
	}
		const _arrayValuePtS6Dnl = -9.176683309119579;
		const _returnValueikbCQ7H = [_arrayValuePtS6Dnl]
		const _returnValueMxEDKyk = () => { return _returnValueikbCQ7H };
		const _subcommandTermrKOMFaJ = () => { return _returnValueMxEDKyk };
		const _helperZ6IerPU = {
			"sortSubcommands": _sortSubcommandsUuedDs,
		"subcommandTerm": _subcommandTermrKOMFaJ
	}
		const _returnValuesc1BZZW = await _Helpf5eBT4i.longestSubcommandTermLength(_cmdwlJpCB3, _helperZ6IerPU)
	});

	it('test for Help', async () => {
		const _Helpndf17w = new Help()
		const _returnValueO8NZoJC = true;
		const _descriptionLf6ixl3 = () => { return _returnValueO8NZoJC };
		const _cmdbtfPhA = {
			"description": _descriptionLf6ixl3
	}
		const _returnValueJdmHWqQ = await _Helpndf17w.commandDescription(_cmdbtfPhA)
		const _cmdFsOXRm = undefined;
		const _sortSubcommandsyR9kRLr = 8.256541164335676;
		const _arrayValueVNxeGwD = 8.670604562731604;
		const _arrayValueNrJb2DY = "iKka7LfmuG6Ia9GCNhabY";
		const _arrayValuerLTkulO = null;
		const _returnValueOysu4Xr = [_arrayValueVNxeGwD, _arrayValueNrJb2DY, _arrayValuerLTkulO]
		const _subcommandTermbs1bHC3 = () => { return _returnValueOysu4Xr };
		const _helperoQCKqDy = {
			"sortSubcommands": _sortSubcommandsyR9kRLr,
		"subcommandTerm": _subcommandTermbs1bHC3
	}
		const _returnValueTf2JG6X = await _Helpndf17w.formatHelp(_cmdFsOXRm, _helperoQCKqDy)
		const _argChoicesuPR6QAR = {
		
	}
		const _negateNblddi9 = false;
		const _defaultValuehkXZvtb = undefined;
		const _defaultValueDescriptionSOCiGTJ = 8.985428469066939;
		const _envVarZv8kfSb = undefined;
		const _descriptionrtwWitH = 4.31552041460257;
		const _optionZWGR3xZ = {
			"argChoices": _argChoicesuPR6QAR,
		"negate": _negateNblddi9,
		"defaultValue": _defaultValuehkXZvtb,
		"defaultValueDescription": _defaultValueDescriptionSOCiGTJ,
		"envVar": _envVarZv8kfSb,
		"description": _descriptionrtwWitH
	}
		const _returnValueeTBVSKI = await _Helpndf17w.optionDescription(_optionZWGR3xZ)
		const _cmdxMmq6ZH = null;
		const _returnValueV4BpThK = "YvEGWHNabvythwuPGpYATF279FSpLBAUau7";
		const _helperOoKpSOF = () => { return _returnValueV4BpThK };
		const _returnValueZIA8Btb = await _Helpndf17w.longestArgumentTermLength(_cmdxMmq6ZH, _helperOoKpSOF)
		const _arrayValueUOYmjVl = -8.738548012782166;
		const _arrayValueHb1QJPR = false;
		const _arrayValueHciyWc = [_arrayValueUOYmjVl, _arrayValueHb1QJPR]
		const _arrayValueyGKGNWJ = null;
		const _arrayValueZBJPTUv = undefined;
		const _cmdzsrM6vA = [_arrayValueHciyWc, _arrayValueyGKGNWJ, _arrayValueZBJPTUv]
		const _returnValueyuRo40J = undefined;
		const _returnValuewNzoKII = () => { return _returnValueyuRo40J };
		const _longestOptionTermLengthdwyQQ8t = () => { return _returnValuewNzoKII };
		const _arrayValueDabwVqD = null;
		const _arrayValueB6jNAC = [_arrayValueDabwVqD]
		const _arrayValuecqIzeRs = undefined;
		const _arrayValueZBjlNX1 = "b8WvgSVoD6MkhHn7DjQOC2KwLpTk8ib6iIXxinH5roYS8USXcVgHmOuoA4EPLdJAO47WaWsnp3BMTGkk6l";
		const _returnValueIfYENOp = [_arrayValueB6jNAC, _arrayValuecqIzeRs, _arrayValueZBjlNX1]
		const _longestSubcommandTermLengthiKmUDpm = () => { return _returnValueIfYENOp };
		const _returnValueey7NbuY = undefined;
		const _longestArgumentTermLengthPipfpHc = () => { return _returnValueey7NbuY };
		const _helperKRuOyi = {
			"longestOptionTermLength": _longestOptionTermLengthdwyQQ8t,
		"longestSubcommandTermLength": _longestSubcommandTermLengthiKmUDpm,
		"longestArgumentTermLength": _longestArgumentTermLengthPipfpHc
	}
		const _returnValueE863fdY = await _Helpndf17w.padWidth(_cmdzsrM6vA, _helperKRuOyi)
	});

	it('test for Help', async () => {
		const _HelpQqvvg1I = new Help()
		const _arrayValuelm8VSc5 = null;
		const _arrayValue2OwGpt = undefined;
		const _arrayValueymFtaPx = null;
		const _cmdDZFu6x = [_arrayValuelm8VSc5, _arrayValue2OwGpt, _arrayValueymFtaPx]
		const _returnValueeGQeIhi = await _HelpQqvvg1I.subcommandTerm(_cmdDZFu6x)
		const _cmdjkr9wIW = "TXinrWbfsDrWbwrRy9NW6IqfHMxvKu9RJCQLrDGCh4XHcAlYwIhO1yI4dleft";
		const _arrayValueKTHHkb = -2.9101220030884303;
		const _arrayValueKzM5J0 = [_arrayValueKTHHkb]
		const _arrayValuezptV02c = false;
		const _arrayValuelWBiJDp = "9T4p5TeQn8zf2jEZK3xN7fOITdTJMcuG3BzCEbOhUI4HsQp4EBjWzL";
		const _arrayValuerTd5nH = true;
		const _arrayValueg6I9Wum = undefined;
		const _arrayValuezQNK3hM = [_arrayValuezptV02c, _arrayValuelWBiJDp, _arrayValuerTd5nH, _arrayValueg6I9Wum]
		const _arrayValueukj21M7 = "PSsoNvfpOVT9bKHpqNh5D6yuQWDYSYJDMt4BWKwm2E2FL6dLGSCvsudNokdRU4JnSRYmSIRbcyjNTrHI";
		const _helperGX01E54 = [_arrayValueKzM5J0, _arrayValuezQNK3hM, _arrayValueukj21M7]
		const _returnValueOqO4LW = await _HelpQqvvg1I.longestArgumentTermLength(_cmdjkr9wIW, _helperGX01E54)
	});

	it('test for Help', async () => {
		const _HelpgHP32Si = new Help()
		const _arrayValueDJse1la = false;
		const _argumentZtILb0 = [_arrayValueDJse1la]
		const _returnValuejRIldLm = await _HelpgHP32Si.argumentDescription(_argumentZtILb0)
		const _arrayValuezk08yCO = {
		
	}
		const _arrayValue42p0zP = "aR2KjUXn6p7UJWwW5VF5UrQmCWhgU4IVRhhhSK8QA6A759mwiPNYb7nor1VAnhfi1qLINqpqy17ckVhNNb";
		const _arrayValuecXrwlcO = undefined;
		const _arrayValuej8l67Xl = false;
		const _arrayValuea8Kjaiu = []
		const _arrayValueh02vJnz = -3.6798505082818185;
		const _arrayValueZbuXCg9 = [_arrayValuej8l67Xl, _arrayValuea8Kjaiu, _arrayValueh02vJnz]
		const _arrayValueImUFdPP = [_arrayValue42p0zP, _arrayValuecXrwlcO, _arrayValueZbuXCg9]
		const _arrayValuebM08EOD = 8.790714994871834;
		const _returnValueR31aZ4s = [_arrayValueImUFdPP, _arrayValuebM08EOD]
		const _arrayValueJ57KuJ = () => { return _returnValueR31aZ4s };
		const _arrayValueAXgnoja = null;
		const _cmdxrMK0dm = [_arrayValuezk08yCO, _arrayValueJ57KuJ, _arrayValueAXgnoja]
		const _returnValuezO4LKH6 = await _HelpgHP32Si.visibleArguments(_cmdxrMK0dm)
		const _cmdQvJCcLL = "WlA3eLIzt47aYHppf3ttcgfpnGLr9JIVMqyWEgiAdozpGp5ehPHJmkY3DUBKt1OHU7UWiaF3WEemeOty3CH";
		const _arrayValuexjTla3t = false;
		const _arrayValuedJKWL1y = false;
		const _arrayValuecm0YEpO = [_arrayValuexjTla3t, _arrayValuedJKWL1y]
		const _arrayValueNx5fYNi = {
		
	}
		const _returnValuex2yxMT = true;
		const _arrayValueU974XXO = () => { return _returnValuex2yxMT };
		const _returnValuer7FChTU = [_arrayValueNx5fYNi, _arrayValueU974XXO]
		const _arrayValueey1gENN = () => { return _returnValuer7FChTU };
		const _arrayValuexKxx9XQ = 0.9280603403082708;
		const _arrayValuex8qg8u = [_arrayValuecm0YEpO, _arrayValueey1gENN, _arrayValuexKxx9XQ]
		const _arrayValuerUccTGN = undefined;
		const _helperF489UJM = [_arrayValuex8qg8u, _arrayValuerUccTGN]
		const _returnValueVD3VVvU = await _HelpgHP32Si.longestArgumentTermLength(_cmdQvJCcLL, _helperF489UJM)
	});

	it('test for Help', async () => {
		const _Helprbsfo0j = new Help()
		const _argChoicesoHoxZ2C = {
		
	}
		const _returnValuey0h8nu = false;
		const _returnValuesqDXJJw = () => { return _returnValuey0h8nu };
		const _arrayValuef4mBlLk = () => { return _returnValuesqDXJJw };
		const _returnValuepmktmM4 = undefined;
		const _arrayValueC8cSdKo = () => { return _returnValuepmktmM4 };
		const _returnValue44DF0k = false;
		const _arrayValuempLJDJh = () => { return _returnValue44DF0k };
		const _negatevH7gAVu = [_arrayValuef4mBlLk, _arrayValueC8cSdKo, _arrayValuempLJDJh]
		const _defaultValueF3lfP4 = undefined;
		const _arrayValued5fASrY = true;
		const _arrayValueS3z5nD = 4.3252312004651206;
		const _arrayValueDfSj4NH = -0.2077983132868937;
		const _defaultValueDescriptionXYko3ZQ = [_arrayValued5fASrY, _arrayValueS3z5nD, _arrayValueDfSj4NH]
		const _envVarmbCwBQ = undefined;
		const _returnValueK1mx4o3 = null;
		const _descriptionh9XvAfl = () => { return _returnValueK1mx4o3 };
		const _optionL78OBuE = {
			"argChoices": _argChoicesoHoxZ2C,
		"negate": _negatevH7gAVu,
		"defaultValue": _defaultValueF3lfP4,
		"defaultValueDescription": _defaultValueDescriptionXYko3ZQ,
		"envVar": _envVarmbCwBQ,
		"description": _descriptionh9XvAfl
	}
		const _returnValueqBLJ5ES = await _Helprbsfo0j.optionDescription(_optionL78OBuE)
		const _argChoiceseUvXoV = {
		
	}
		const _negateDDubbGx = null;
		const _defaultValuenOaMnEX = undefined;
		const _arrayValuerYOFHN9 = undefined;
		const _defaultValueDescriptionWJbvKn8 = [_arrayValuerYOFHN9]
		const _envVarAX5QVVw = 5.872880567757846;
		const _descriptionLNQZN49 = undefined;
		const _optiondNyJEW4 = {
			"argChoices": _argChoiceseUvXoV,
		"negate": _negateDDubbGx,
		"defaultValue": _defaultValuenOaMnEX,
		"defaultValueDescription": _defaultValueDescriptionWJbvKn8,
		"envVar": _envVarAX5QVVw,
		"description": _descriptionLNQZN49
	}
		const _returnValueJJtPlI5 = await _Helprbsfo0j.optionDescription(_optiondNyJEW4)
	});

	it('test for Help', async () => {
		const _HelpfT2xtV6 = new Help()
		const _strMglxs0X = "kOghaGuYrBDMsuYLa8Ly1L1P7vlhWJcvwjXbYB5T5aKD9hLKdWf";
		const _widthBqx98l = 2.97323443686032;
		const _indentjF90W0K = -2.9363308299070257;
		const _minColumnWidthQvWjvUk = 9.096124887765342;
		const _returnValuevOhHdz7 = await _HelpfT2xtV6.wrap(_strMglxs0X, _widthBqx98l, _indentjF90W0K, _minColumnWidthQvWjvUk)
		const _optionYcpSD4b = null;
		const _returnValuecdupljA = await _HelpfT2xtV6.optionDescription(_optionYcpSD4b)
		const _commandsgT22hw4 = {
		
	}
		const _returnValuesPmC10H = null;
		const __hasImplicitHelpCommandJuw11B8 = () => { return _returnValuesPmC10H };
		const __helpCommandnameAndArgskJaE5O = {
		
	}
		const _returnValueoD2K6zh = undefined;
		const _createCommand570AVN = () => { return _returnValueoD2K6zh };
		const __helpCommandDescriptionGDK0wwc = -5.6457550626715705;
		const _cmdEHFuUdI = {
			"commands": _commandsgT22hw4,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandJuw11B8,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgskJaE5O,
		"createCommand": _createCommand570AVN,
		"_helpCommandDescription": __helpCommandDescriptionGDK0wwc
	}
		const _returnValuetmtARJl = await _HelpfT2xtV6.visibleCommands(_cmdEHFuUdI)
	});

	it('test for Help', async () => {
		const _HelpsxZOokB = new Help()
		const _arrayValueRBHOEpu = "Ibu7EHWCCVLDzdCZCoKLTiuyPQAUx2OGIyQKqVmjLATNk5yOL";
		const _arrayValueWO1rrRx = false;
		const _arrayValueAa6YqbD = undefined;
		const _returnValueqR6YBMt = [_arrayValueRBHOEpu, _arrayValueWO1rrRx, _arrayValueAa6YqbD]
		const _argumentZHCQ6eO = () => { return _returnValueqR6YBMt };
		const _returnValueTAshObT = await _HelpsxZOokB.argumentDescription(_argumentZHCQ6eO)
		const _strFFbOuey = "Vy4Hjb28XpO5MyR0RKvPe6mBWPhbwgDbwYQGrYKJuUEltdmVS967rH749vO3r6V6V0fnwCVTO3pzoJ";
		const _widthkybjUCo = -2.8210625855229843;
		const _indentKbXzY0i = -2.874706275041011;
		const _minColumnWidthR9w90oo = -0.9266296999733754;
		const _returnValueSI3cxl6 = await _HelpsxZOokB.wrap(_strFFbOuey, _widthkybjUCo, _indentKbXzY0i, _minColumnWidthR9w90oo)
		const _arrayValuebTtXHu6 = {
		
	}
		const _returnValueTjcHhCX = undefined;
		const _arrayValuepsPMflI = () => { return _returnValueTjcHhCX };
		const _arrayValueMXF9nxM = -5.247785680439273;
		const _arrayValueTsLTuU3 = [_arrayValuepsPMflI, _arrayValueMXF9nxM]
		const _cmdDenYODo = [_arrayValuebTtXHu6, _arrayValueTsLTuU3]
		const _returnValuewmKmJXv = await _HelpsxZOokB.visibleArguments(_cmdDenYODo)
		const _returnValuegMIkFLq = 1.2869387521864155;
		const _cmdHGTdPaF = () => { return _returnValuegMIkFLq };
		const _returnValueWhxfIBf = await _HelpsxZOokB.subcommandDescription(_cmdHGTdPaF)
		const _cmdUpQAt1h = null;
		const _helperJUdHSxl = "hpb7Dz0QiRnYOrM56S2s54xQBnVRSSfmDGvgF3tmn6y3AmwqfFqTPgWWz1";
		const _returnValueZ0Gh3Eh = await _HelpsxZOokB.longestArgumentTermLength(_cmdUpQAt1h, _helperJUdHSxl)
	});

	it('test for Help', async () => {
		const _HelpXbaYMGV = new Help()
		const _arrayValueUcpaTCk = false;
		const _arrayValueF2YheNO = null;
		const _arrayValueCo6Ey5Z = [_arrayValueF2YheNO]
		const _arrayValueKwOZEmE = true;
		const _returnValuetAHFWY7 = [_arrayValueUcpaTCk, _arrayValueCo6Ey5Z, _arrayValueKwOZEmE]
		const _argumenttr5Mxuw = () => { return _returnValuetAHFWY7 };
		const _returnValueff8Q06 = await _HelpXbaYMGV.argumentDescription(_argumenttr5Mxuw)
		const _arrayValuef7kLnd7 = null;
		const _cmdNlm1OSi = [_arrayValuef7kLnd7]
		const _helperxDMqOZU = new Help()
		const _commandsSE7ISl = {
		
	}
		const _returnValueO6Z9JYV = undefined;
		const __hasImplicitHelpCommandzxBZImk = () => { return _returnValueO6Z9JYV };
		const __helpCommandnameAndArgsf44YEhL = {
		
	}
		const _returnValueDTr6GM2 = null;
		const _createCommandoezzxNd = () => { return _returnValueDTr6GM2 };
		const __helpCommandDescriptionzwBcopL = undefined;
		const _cmdfWBlxxj = {
			"commands": _commandsSE7ISl,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandzxBZImk,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsf44YEhL,
		"createCommand": _createCommandoezzxNd,
		"_helpCommandDescription": __helpCommandDescriptionzwBcopL
	}
		const _returnValueDnTXDWO = await _helperxDMqOZU.visibleCommands(_cmdfWBlxxj)
		const _returnValueqeet0rO = await _HelpXbaYMGV.formatHelp(_cmdNlm1OSi, _helperxDMqOZU)
	});

	it('test for Help', async () => {
		const _HelpBxBF1Va = new Help()
		const _namegtexCkw = 9.839218154455295;
		const _cmdnT8oBxe = new Command(_namegtexCkw)
		const _returnValueCt5EO2J = await _cmdnT8oBxe._parseOptionsEnv()
		const _namey6Yjm0 = "8xgQ9fab2dGbBnZ9q1RIRAseOM6Hg0lg8PHuROzjpLC8E9jIc1gPODbPo6U78hoBe4bV";
		const _descriptionrObDd64 = "xnYkCOAjXZA7r6MIKWcvAtXYs5ltwxD3g7Z5uru9TI4xQwCBHwawEYvANsx8YpjGOuc7hhXWx9CT3JywEu";
		const _returnValueamtQcms = await _cmdnT8oBxe.createArgument(_namey6Yjm0, _descriptionrObDd64)
		const _positionalf2GsAR7 = false;
		const _returnValueViLmjw9 = await _cmdnT8oBxe.enablePositionalOptions(_positionalf2GsAR7)
		const _returnValueOJanh2x = "qfOP27DDNR9cJzCimxJoOQqcqiT5AWzZA2FOvAlz4J1OwcucoHro9vEzWwmfDX2Oc0Xh0PFCGPpxCj88FidFxISN";
		const _forEachcmkYf6 = () => { return _returnValueOJanh2x };
		const _aliasesjI6nwZ = {
			"forEach": _forEachcmkYf6
	}
		const _returnValue2v27Ws = await _cmdnT8oBxe.aliases(_aliasesjI6nwZ)
		const _returnValued0dADgC = await _HelpBxBF1Va.subcommandTerm(_cmdnT8oBxe)
		const _namejOv8eca = -8.480402637406566;
		const _argumentNEBhFoZ = new Command(_namejOv8eca)
		const _returnValuej3bp2hv = 9.270500929772417;
		const _returnValueWd86EAF = () => { return _returnValuej3bp2hv };
		const _splitwrgPEqJ = () => { return _returnValueWd86EAF };
		const _namesGmnFnxl = {
			"split": _splitwrgPEqJ
	}
		const _returnValueGm6pTms = await _argumentNEBhFoZ.arguments(_namesGmnFnxl)
		const _returnValuerUlJlKt = await _argumentNEBhFoZ.createHelp()
		const _operandsEOrOpRH = -4.294353601614022;
		const _unknownWYr09Im = {
		
	}
		const _returnValueHdRhn9G = await _argumentNEBhFoZ._parseCommand(_operandsEOrOpRH, _unknownWYr09Im)
		const _returnValueqwY1prj = await _argumentNEBhFoZ._checkNumberOfArguments()
		const _returnValueUwDMjUV = await _HelpBxBF1Va.argumentTerm(_argumentNEBhFoZ)
	});

	it('test for Help', async () => {
		const _HelpyO8n89T = new Help()
		const _flagsp1o9pd = "pvutl1DsauWinyXcDTsEOVAkg4pp";
		const _descriptionvsqxSp = {
		
	}
		const _cmdvdDMNBz = new Option(_flagsp1o9pd, _descriptionvsqxSp)
		const _argaFosru0 = {
		
	}
		const _returnValuejoss1E = await _cmdvdDMNBz.is(_argaFosru0)
		const _fnleuFfM = undefined;
		const _returnValuezd5WEEv = await _cmdvdDMNBz.argParser(_fnleuFfM)
		const _namezTLwcbG = undefined;
		const _returnValueJtPxCCJ = await _cmdvdDMNBz.env(_namezTLwcbG)
		const _returnValuemztBrap = await _HelpyO8n89T.subcommandDescription(_cmdvdDMNBz)
		const _arrayValueXcWCxqT = -5.575298863719803;
		const _arrayValuecBHyoQz = 2.4716529491207737;
		const _arrayValuezcvQiUb = 2.4487662771979757;
		const _arrayValuelUqtqUP = false;
		const _cmdYS6HWrC = [_arrayValueXcWCxqT, _arrayValuecBHyoQz, _arrayValuezcvQiUb, _arrayValuelUqtqUP]
		const _returnValue1Qj0zj = await _HelpyO8n89T.subcommandTerm(_cmdYS6HWrC)
		const _flagsxOEyccJ = false;
		const _optionJf09vH = {
			"flags": _flagsxOEyccJ
	}
		const _returnValueADZdvHK = await _HelpyO8n89T.optionTerm(_optionJf09vH)
	});

	it('test for Help', async () => {
		const _HelpGquYQxO = new Help()
		const _returnValueyKWUYB2 = null;
		const _arrayValuehToErXr = () => { return _returnValueyKWUYB2 };
		const _arrayValuezHsZfVq = 8.427027111382959;
		const _returnValuex236pam = [_arrayValuehToErXr, _arrayValuezHsZfVq]
		const _matchZCFmXSb = () => { return _returnValuex236pam };
		const _arrayValueUg1Md76 = -1.1662396679272096;
		const _returnValueMayNMa1 = [_arrayValueUg1Md76]
		const _substrVBli51I = () => { return _returnValueMayNMa1 };
		const _strcHPV6PV = {
			"match": _matchZCFmXSb,
		"substr": _substrVBli51I
	}
		const _widthhUg4DRP = 4.249675925791417;
		const _indentThCImod = 0.7573461427454671;
		const _minColumnWidthzz1qJ9t = 3.5583458877248493;
		const _returnValueckvx64l = await _HelpGquYQxO.wrap(_strcHPV6PV, _widthhUg4DRP, _indentThCImod, _minColumnWidthzz1qJ9t)
		const _cmdbGQBLtB = undefined;
		const _returnValuepdCoBXi = null;
		const _helperNDejRLw = () => { return _returnValuepdCoBXi };
		const _returnValueXvtQquz = await _HelpGquYQxO.formatHelp(_cmdbGQBLtB, _helperNDejRLw)
	});

	it('test for Help', async () => {
		const _HelpeZXIHQI = new Help()
		const _namepaCAsOD = undefined;
		const _cmdXup6YAm = new Command(_namepaCAsOD)
		const _subcommandq25Nwv = {
		
	}
		const _argsEo9jN6A = null;
		const _returnValuevSyH1M = await _cmdXup6YAm._executeSubCommand(_subcommandq25Nwv, _argsEo9jN6A)
		const _returnValuezIiJui9 = await _HelpeZXIHQI.visibleCommands(_cmdXup6YAm)
		const _returnValuejriwhgO = true;
		const _cmdLFvDS5l = () => { return _returnValuejriwhgO };
		const _returnValueHHfBq3H = await _HelpeZXIHQI.visibleOptions(_cmdLFvDS5l)
		const _cmdOTt7b8O = -0.6276605730560227;
		const _arrayValueaIeCuNc = 0.8919007387961813;
		const _arrayValuea7zZ2w = "BlW03xjHxstEP4achAyIbw0kD9Jvma8F1XIyu8nBsuTmYTw6JnQCv1paTxqLznoa1M0IwGFrO67kJgdg3uRa";
		const _arrayValueiVUG4x = null;
		const _helpernNhD9M = [_arrayValueaIeCuNc, _arrayValuea7zZ2w, _arrayValueiVUG4x]
		const _returnValuePQEHPuv = await _HelpeZXIHQI.longestSubcommandTermLength(_cmdOTt7b8O, _helpernNhD9M)
	});

	it('test for Help', async () => {
		const _Helpwu6v00j = new Help()
		const _nameMLs1SNk = null;
		const _cmd0gcEhR = new Command(_nameMLs1SNk)
		const _flagsNopaDPf = false;
		const _descriptionWKnEJa = undefined;
		const _returnValueQIgQ0cq = await _cmd0gcEhR.helpOption(_flagsNopaDPf, _descriptionWKnEJa)
		const _combinePmxAXYx = false;
		const _returnValueBp3vYPg = await _cmd0gcEhR.combineFlagAndOptionalValue(_combinePmxAXYx)
		const _namesEChS3cF = "9pcErl5Lc";
		const _returnValuen5zuIX9 = await _cmd0gcEhR.arguments(_namesEChS3cF)
		const _errorDcj7QNJ = []
		const _commandKnRjX5Q = false;
		const _contextOptionsxnohlMc = {
			"error": _errorDcj7QNJ,
		"command": _commandKnRjX5Q
	}
		const _returnValueEZ1l0bm = await _cmd0gcEhR.helpInformation(_contextOptionsxnohlMc)
		const _returnValues8h5Ns = await _Helpwu6v00j.subcommandTerm(_cmd0gcEhR)
	});
})