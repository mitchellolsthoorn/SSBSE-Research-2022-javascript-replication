export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpcVENuSv = new Help()
		const __argsDescriptionLXN3wSa = {
		
	}
		const __argsXBxjD35 = {
		
	}
		const _cmds7eu9ug = {
			"_argsDescription": __argsDescriptionLXN3wSa,
		"_args": __argsXBxjD35
	}
		const _returnValuevVEBmqP = await _HelpcVENuSv.visibleArguments(_cmds7eu9ug)
		const _cmdULWqfYy = "tOEvWbIEeWqW1kPID17j7UbtPmyankEtvFCY92IOYFp3XMwZ75evxKXN7K";
		const _sortSubcommandsFFfT8Q7 = "4H0DBBEnVsHADkdYinGRAWw4qPUgPJEHE2aOxZpcOmKKltw";
		const _returnValuebKUgkvu = "JV";
		const _returnValueig7udD5 = () => { return _returnValuebKUgkvu };
		const _subcommandTermVif30zW = () => { return _returnValueig7udD5 };
		const _helperNEszxYL = {
			"sortSubcommands": _sortSubcommandsFFfT8Q7,
		"subcommandTerm": _subcommandTermVif30zW
	}
		const _returnValueExQAgle = await _HelpcVENuSv.formatHelp(_cmdULWqfYy, _helperNEszxYL)
	});

	it('test for Help', async () => {
		const _HelpUMGkZzY = new Help()
		const _argChoicesBTDRlSH = {
		
	}
		const _defaultValueCxi8rt8 = undefined;
		const _returnValueUXDWGhU = "kdNmmfQ8IZFdvJ4Pijzx4LlpQiutDUz1apMhCPst4DdgaCdI6TfS8iUdvp1Esl2LY559V7FxBBDO6PG9lFwRac";
		const _defaultValueDescriptioniUje5P = () => { return _returnValueUXDWGhU };
		const _descriptionlBA9tSB = false;
		const _argumentYEDqkwD = {
			"argChoices": _argChoicesBTDRlSH,
		"defaultValue": _defaultValueCxi8rt8,
		"defaultValueDescription": _defaultValueDescriptioniUje5P,
		"description": _descriptionlBA9tSB
	}
		const _returnValueEhdoi5 = await _HelpUMGkZzY.argumentDescription(_argumentYEDqkwD)
	});

	it('test for Help', async () => {
		const _HelpyBcF5Po = new Help()
		const _arrayValueZnQ2Afy = false;
		const _cmdOP0myUj = [_arrayValueZnQ2Afy]
		const _helpergwV61Sh = []
		const _returnValuev1SLHQe = await _HelpyBcF5Po.longestSubcommandTermLength(_cmdOP0myUj, _helpergwV61Sh)
		const _cmdPbu6LWC = true;
		const _helperL4CCaB9 = new Help()
		const _arrayValueIKasCFB = -9.017413329130687;
		const _cmdCPigfUW = [_arrayValueIKasCFB]
		const _arrayValueg6UNWxe = undefined;
		const _arrayValueqf28ZKj = "pnG83n9mEsNshP5WouXf2MdhAabd5o5XkqfAllsYCNqdCbmEtQJY4lozhM0AfwMidWFbRZmWExnFw";
		const _helperWcxTjq7 = [_arrayValueg6UNWxe, _arrayValueqf28ZKj]
		const _returnValueVOQgnn6 = await _helperL4CCaB9.padWidth(_cmdCPigfUW, _helperWcxTjq7)
		const _returnValueHRcGkWI = true;
		const _createCommandyZ1M5O = () => { return _returnValueHRcGkWI };
		const _cmdEGQN3Mr = {
			"createCommand": _createCommandyZ1M5O
	}
		const _returnValueOrgOEIZ = await _helperL4CCaB9.visibleCommands(_cmdEGQN3Mr)
		const _returnValue2D63BF = await _HelpyBcF5Po.longestSubcommandTermLength(_cmdPbu6LWC, _helperL4CCaB9)
	});

	it('test for Help', async () => {
		const _HelpjpPxHj0 = new Help()
		const _cmdMHmMeBr = "CaB417aE";
		const _helperzI20yqQ = new Help()
		const _arrayValue7pNjDP = undefined;
		const _arrayValuevjMzLb = null;
		const _optionhCqpXKZ = [_arrayValue7pNjDP, _arrayValuevjMzLb]
		const _returnValueJQoYtmO = await _helperzI20yqQ.optionDescription(_optionhCqpXKZ)
		const _cmdNtvB23 = null;
		const _longestOptionTermLengthddtu4tc = -1.345824355064833;
		const _longestSubcommandTermLengthunbZOXc = undefined;
		const _arrayValueGGTcRyt = undefined;
		const _returnValueG2SE0fp = "4TctrrynwOq1wQYN8VjKce9wQKdfE";
		const _arrayValueYB2YwvT = () => { return _returnValueG2SE0fp };
		const _arrayValuetyp5uWd = false;
		const _arrayValuewAPHy2i = true;
		const _returnValueOljw46b = [_arrayValueGGTcRyt, _arrayValueYB2YwvT, _arrayValuetyp5uWd, _arrayValuewAPHy2i]
		const _longestArgumentTermLengthEHNruRE = () => { return _returnValueOljw46b };
		const _helperejmK8x = {
			"longestOptionTermLength": _longestOptionTermLengthddtu4tc,
		"longestSubcommandTermLength": _longestSubcommandTermLengthunbZOXc,
		"longestArgumentTermLength": _longestArgumentTermLengthEHNruRE
	}
		const _returnValueBBAJvR = await _helperzI20yqQ.padWidth(_cmdNtvB23, _helperejmK8x)
		const _returnValueWFiJxq = await _HelpjpPxHj0.longestSubcommandTermLength(_cmdMHmMeBr, _helperzI20yqQ)
		const _messagepHefoQZ = "Sz1oAzjScRUgrYOLguoYwe5Ya6SiosurpvEFZg7qNwuXAlzq7A9kehMm8zk8dAMcmipwuM";
		const _argumentNse7sEO = new InvalidArgumentError(_messagepHefoQZ)
		const _returnValuehFZ80UY = await _HelpjpPxHj0.argumentTerm(_argumentNse7sEO)
		const _returnValuertZgqrN = null;
		const _cmddNaGlP = () => { return _returnValuertZgqrN };
		const _returnValueGpxH7Y0 = await _HelpjpPxHj0.subcommandTerm(_cmddNaGlP)
	});

	it('test for Help', async () => {
		const _HelpnyFjfg = new Help()
		const _cmdHaaMGgy = "6zaAJqQVQm4dkXuzx3KGfnYHgmtpnN1mRN1O9tvnWHtnqrsAC67UlprJkGpC";
		const _returnValueBfVs1W = await _HelpnyFjfg.subcommandDescription(_cmdHaaMGgy)
		const _returnValueXwaXWNI = false;
		const _arrayValuebeTVkYU = () => { return _returnValueXwaXWNI };
		const _arrayValuejLHIvEp = -8.06575367078077;
		const _arrayValueDWicQE = "DsG6S0Y24J6tP1SnHrDEvVVZi6tw4LiZ8qHyTHnQWZeHwJMrYUo7Kgxt3Tg9xVqGqtPIUiRm23XUN13";
		const _returnValueE7zkC0q = [_arrayValuebeTVkYU, _arrayValuejLHIvEp, _arrayValueDWicQE]
		const _cmdY0na0D = () => { return _returnValueE7zkC0q };
		const _returnValueXhdOZ6 = await _HelpnyFjfg.commandUsage(_cmdY0na0D)
	});

	it('test for Help', async () => {
		const _HelpekUhLFw = new Help()
		const _arrayValueMuGIyhu = null;
		const _arrayValueH007J7R = 8.01408893311729;
		const _arrayValueba0dZt0 = []
		const _arrayValueNHDCiN2 = "YPhH1fH2RcsYcsbMt5MazQgWdnQLgjxQ1tqTNB7TNzUxoV";
		const _arrayValuerT6SACK = [_arrayValueH007J7R, _arrayValueba0dZt0, _arrayValueNHDCiN2]
		const _arrayValueuJqRk1g = false;
		const _cmdevfvDfW = [_arrayValueMuGIyhu, _arrayValuerT6SACK, _arrayValueuJqRk1g]
		const _returnValueKSqLLZ5 = await _HelpekUhLFw.subcommandTerm(_cmdevfvDfW)
		const _cmdj3Q4g6Q = []
		const _returnValueNX1nxvk = await _HelpekUhLFw.visibleOptions(_cmdj3Q4g6Q)
	});

	it('test for Help', async () => {
		const _HelpnoSF9XA = new Help()
		const __nameKzzkGil = 4.529011217312821;
		const __aliasesUzd8c3 = {
		
	}
		const _parentki7EnTb = {
		
	}
		const _returnValuemt2B8OY = true;
		const _usageszd5ReZ = () => { return _returnValuemt2B8OY };
		const _cmdqV4nUK = {
			"_name": __nameKzzkGil,
		"_aliases": __aliasesUzd8c3,
		"parent": _parentki7EnTb,
		"usage": _usageszd5ReZ
	}
		const _returnValueF9x5EbJ = await _HelpnoSF9XA.commandUsage(_cmdqV4nUK)
		const _arrayValueTpLBFxw = undefined;
		const _optionQjGR70F = [_arrayValueTpLBFxw]
		const _returnValueNOjsCow = await _HelpnoSF9XA.optionDescription(_optionQjGR70F)
		const _cmdYWYYuKu = undefined;
		const _returnValueUD42gjf = true;
		const _helperQ0aL1xA = () => { return _returnValueUD42gjf };
		const _returnValuesAolmw6 = await _HelpnoSF9XA.formatHelp(_cmdYWYYuKu, _helperQ0aL1xA)
		const _cmdZwiJ8Im = []
		const _sortSubcommandsDgT4rkW = "htHLOLslHVhmvsftZyMTOYlo9l9YyVp1wh6fBXO8z1MDtBo99SzCVmG4Dk3SexiucXSTbu9O9NUjYgJcrKBnEFULo8XU7aCB";
		const _returnValuePsuRtg0 = "yX57v43tcYlBdGM7b9DKEsSYcmIlMHhP4aZyaf6R4mbVkUHKkEoqPwOqYF2VMNi6PskatV";
		const _subcommandTermY0Xk9oz = () => { return _returnValuePsuRtg0 };
		const _helperQtRMj3z = {
			"sortSubcommands": _sortSubcommandsDgT4rkW,
		"subcommandTerm": _subcommandTermY0Xk9oz
	}
		const _returnValueRf1ClGN = await _HelpnoSF9XA.longestSubcommandTermLength(_cmdZwiJ8Im, _helperQtRMj3z)
	});

	it('test for Help', async () => {
		const _HelpSspmoXu = new Help()
		const _cmddqzgDqX = true;
		const _returnValueGN8ojCX = undefined;
		const _sortSubcommandsdfJtDyw = () => { return _returnValueGN8ojCX };
		const _returnValuepVDAgC = undefined;
		const _subcommandTermxPzkXhy = () => { return _returnValuepVDAgC };
		const _helperdv0DpMD = {
			"sortSubcommands": _sortSubcommandsdfJtDyw,
		"subcommandTerm": _subcommandTermxPzkXhy
	}
		const _returnValueJXbetT6 = await _HelpSspmoXu.formatHelp(_cmddqzgDqX, _helperdv0DpMD)
		const _cmdCHlfOz6 = 4.020926704676111;
		const _arrayValuei2zK114 = 3.9638587770869798;
		const _helperFPo1Cnh = [_arrayValuei2zK114]
		const _returnValueLgZNjO5 = await _HelpSspmoXu.padWidth(_cmdCHlfOz6, _helperFPo1Cnh)
	});

	it('test for Help', async () => {
		const _HelpQxySYjy = new Help()
		const _cmdVSuN3qj = null;
		const _returnValuebptJiU9 = {
		
	}
		const _helpercQCRrMf = () => { return _returnValuebptJiU9 };
		const _returnValueh0ZbPtA = await _HelpQxySYjy.longestOptionTermLength(_cmdVSuN3qj, _helpercQCRrMf)
		const _cmdi9NCzfU = -4.981882356029633;
		const _returnValuehTID94O = false;
		const _visibleArgumentsu8bvh7x = () => { return _returnValuehTID94O };
		const _returnValuemrcPlEW = false;
		const _argumentTermlx2DotR = () => { return _returnValuemrcPlEW };
		const _helperW0YtYqa = {
			"visibleArguments": _visibleArgumentsu8bvh7x,
		"argumentTerm": _argumentTermlx2DotR
	}
		const _returnValueUcVejYU = await _HelpQxySYjy.longestArgumentTermLength(_cmdi9NCzfU, _helperW0YtYqa)
	});

	it('test for Help', async () => {
		const _Helpmch3dz = new Help()
		const _returnValueTLp1Qf = true;
		const _strOspEfH = () => { return _returnValueTLp1Qf };
		const _widthrdVY7AC = 5.754687781943053;
		const _indentU27plU = 7.377665978910009;
		const _minColumnWidthyE9SFwL = 3.703913831844261;
		const _returnValueGjNsku = await _Helpmch3dz.wrap(_strOspEfH, _widthrdVY7AC, _indentU27plU, _minColumnWidthyE9SFwL)
	});

	it('test for Help', async () => {
		const _HelpTv4GcJU = new Help()
		const _returnValuea6d8YTM = -6.862700098530115;
		const _argumentaveyQ6 = () => { return _returnValuea6d8YTM };
		const _returnValueOQp2VX9 = await _HelpTv4GcJU.argumentTerm(_argumentaveyQ6)
		const _nameLea8seF = -2.7673400184860153;
		const _optionPylGlyz = new Command(_nameLea8seF)
		const _allowUnknownHkML7jx = true;
		const _returnValueaNng41x = await _optionPylGlyz.allowUnknownOption(_allowUnknownHkML7jx)
		const _flagPqoDAck = "9l";
		const _returnValuezx9O2C8 = await _optionPylGlyz.unknownOption(_flagPqoDAck)
		const _commandNamegKLgJEc = true;
		const _operands2hbDwB = "cl9ksk3qoWITXY0DJsKaoYhr3JfVAPiqjUGd5iU2mHxjX2TbNtGuGX8OWtK95sB";
		const _unknownw6U0T5G = true;
		const _returnValuestfr1Qf = await _optionPylGlyz._dispatchSubcommand(_commandNamegKLgJEc, _operands2hbDwB, _unknownw6U0T5G)
		const _returnValueyfmvh9P = await _optionPylGlyz._checkForMissingMandatoryOptions()
		const _returnValueWrbypRz = await _HelpTv4GcJU.optionDescription(_optionPylGlyz)
	});

	it('test for Help', async () => {
		const _HelpoNuQVwn = new Help()
		const _returnValueEJzcQV = null;
		const _flagsAT2ZgiP = () => { return _returnValueEJzcQV };
		const _optionvHPIMdx = {
			"flags": _flagsAT2ZgiP
	}
		const _returnValueTxseuKw = await _HelpoNuQVwn.optionTerm(_optionvHPIMdx)
		const _cmdYxMtLlj = undefined;
		const _sortSubcommandstSBXSkQ = 5.235877961074699;
		const _returnValueAiMez41 = 5.365224762990215;
		const _subcommandTermeTAGUal = () => { return _returnValueAiMez41 };
		const _helperWc58VPn = {
			"sortSubcommands": _sortSubcommandstSBXSkQ,
		"subcommandTerm": _subcommandTermeTAGUal
	}
		const _returnValuebfV6QC7 = await _HelpoNuQVwn.formatHelp(_cmdYxMtLlj, _helperWc58VPn)
		const _cmdXQvc2S = []
		const _returnValueglUsyFZ = await _HelpoNuQVwn.visibleOptions(_cmdXQvc2S)
	});

	it('test for Help', async () => {
		const _HelpBiyM4y1 = new Help()
		const _returnValuetb1jgJt = -9.56255490632908;
		const _argumentmwMhCLF = () => { return _returnValuetb1jgJt };
		const _returnValueiEAKFa0 = await _HelpBiyM4y1.argumentDescription(_argumentmwMhCLF)
		const _cmdiXbTELE = undefined;
		const _arrayValueNwJ7Ns = -0.8543367358213221;
		const _helperlb3t4zL = [_arrayValueNwJ7Ns]
		const _returnValueYRblq84 = await _HelpBiyM4y1.longestArgumentTermLength(_cmdiXbTELE, _helperlb3t4zL)
	});

	it('test for Help', async () => {
		const _HelpfkW750Q = new Help()
		const _commandsEXeLwqF = {
		
	}
		const _returnValueFc9cfsN = 4.197591134098031;
		const _returnValuewD5yAVh = () => { return _returnValueFc9cfsN };
		const __hasImplicitHelpCommandRUmQX4o = () => { return _returnValuewD5yAVh };
		const __helpCommandnameAndArgsPXpG5Ll = {
		
	}
		const _createCommandwGPTqgq = "R9i47zWKjuN3DirCNRFtbn1BaI3w3G8wXNzETkRzYSzNw6q7Ctmawh5YlqeTFZ";
		const __helpCommandDescriptionYqKwCjl = null;
		const _cmdHx9Nw1R = {
			"commands": _commandsEXeLwqF,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandRUmQX4o,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPXpG5Ll,
		"createCommand": _createCommandwGPTqgq,
		"_helpCommandDescription": __helpCommandDescriptionYqKwCjl
	}
		const _returnValueuiqPsAX = await _HelpfkW750Q.visibleCommands(_cmdHx9Nw1R)
		const _cmdQRnUThf = {
		
	}
		const _arrayValuea8FOlJj = "gDasgwVoyWbvTHWpnwBp5cECBggrjWqEIVjQQcCUcWQNTTfWWGNvc62jwy6ZfuL128QPPAda9xvH6rzOvzFpbFYbsmkETzvSLT";
		const _arrayValueemDBtRN = undefined;
		const _arrayValueu7eUqzd = 1.931586293065548;
		const _arrayValuec7j2AxH = "xrHXBJ2AORXbu5j0oKBbeymQMO8TUDFCZHzpDchdreU8gLwu99wdvJJwCnegg5IJ1ja30L2IE8FwxDMm0C1cmuYYpiSe";
		const _helperu2tpSx1 = [_arrayValuea8FOlJj, _arrayValueemDBtRN, _arrayValueu7eUqzd, _arrayValuec7j2AxH]
		const _returnValueJXedrCP = await _HelpfkW750Q.formatHelp(_cmdQRnUThf, _helperu2tpSx1)
		const __argsaoqQxcq = {
		
	}
		const __nameoGEVdpH = 6.223343369772046;
		const __aliasesX1knqwR = {
		
	}
		const _optionswa8Q0TM = {
		
	}
		const _cmd5oLn0D = {
			"_args": __argsaoqQxcq,
		"_name": __nameoGEVdpH,
		"_aliases": __aliasesX1knqwR,
		"options": _optionswa8Q0TM
	}
		const _returnValuesWS3aQ5 = await _HelpfkW750Q.subcommandTerm(_cmd5oLn0D)
	});

	it('test for Help', async () => {
		const _HelpYEtyZTz = new Help()
		const _argumentFjp3N9N = "V2BFCQr7aNpuTJMfUwM2fbpVjpfdn8EfgRUOlCCmiiRNELQUH85o";
		const _returnValueTk3c79c = await _HelpYEtyZTz.argumentDescription(_argumentFjp3N9N)
		const _cmdrI8iHbm = "UjWfd0UP1u";
		const _returnValueCaN1U1 = await _HelpYEtyZTz.visibleOptions(_cmdrI8iHbm)
		const _nameJnQnW2I = undefined;
		const _cmddjdjCI4 = new Command(_nameJnQnW2I)
		const _errorprByhz2 = null;
		const _arrayValueU1MOy7v = "6lqbqCRe5ijXcyAXlZuMpPZo9U7V42z22Y5PnjSbDnF3r5DHKbnne679LvGqUad5ErssMpyoNWtqR5NGRD6YsWCZQZ";
		const _commandK2GVjyX = [_arrayValueU1MOy7v]
		const _contextOptionsGYJUh0p = {
			"error": _errorprByhz2,
		"command": _commandK2GVjyX
	}
		const _returnValuejj18rt6 = await _cmddjdjCI4.helpInformation(_contextOptionsGYJUh0p)
		const _returnValuemORKSXp = undefined;
		const _keyVa80l4U = () => { return _returnValuemORKSXp };
		const _valueG1owqZx = "U4a276q6vJ8nHtEmjCTaDtEenrY46yPF";
		const _returnValueR5PQYC = null;
		const _sourceP6ZuvCN = () => { return _returnValueR5PQYC };
		const _returnValueB66xCRP = await _cmddjdjCI4.setOptionValueWithSource(_keyVa80l4U, _valueG1owqZx, _sourceP6ZuvCN)
		const _argvWqdhiIb = true;
		const _parseOptionstPKs5Ss = false;
		const _returnValueMhwQglI = await _cmddjdjCI4.parse(_argvWqdhiIb, _parseOptionstPKs5Ss)
		const _returnValueQKSy0TD = await _HelpYEtyZTz.commandDescription(_cmddjdjCI4)
	});

	it('test for Help', async () => {
		const _HelpSk6FxHE = new Help()
		const _flagsVGD8cqR = "HNUUYhpc7D";
		const _descriptionbtAYFBD = false;
		const _optionmPeDaae = new Option(_flagsVGD8cqR, _descriptionbtAYFBD)
		const _arrayValueLF3db5z = -3.089457155089246;
		const _arrayValueEU4S3yL = "dT656g3oXfq11wT9v7QmkX2hKH5zF31CaSAFXjYQIYj";
		const _arrayValueDtbKK38 = true;
		const _arrayValueBX9E4oo = "xNmuyvLudrYpECVe2JZ9j49jtfDnV7rBko413NQcChPRswaAsNQqF5Sz9rFmjYa6UtPX";
		const _arrayValueHi4ZUPf = [_arrayValueLF3db5z, _arrayValueEU4S3yL, _arrayValueDtbKK38, _arrayValueBX9E4oo]
		const _arrayValueboMCnNx = 6.624975293296188;
		const _arrayValuexMHwtDe = [_arrayValueHi4ZUPf, _arrayValueboMCnNx]
		const _arrayValueEPe386i = {
		
	}
		const _arrayValueJlLz4ia = false;
		const _arrayValueEIKqbl = [_arrayValueEPe386i, _arrayValueJlLz4ia]
		const _arrayValueWqe2jJr = false;
		const _arrayValuerXde253 = null;
		const _nameSNZ5YHs = [_arrayValuexMHwtDe, _arrayValueEIKqbl, _arrayValueWqe2jJr, _arrayValuerXde253]
		const _returnValueZkwza33 = await _optionmPeDaae.env(_nameSNZ5YHs)
		const _argyeEkVJ4 = "kJcBvwmi5OqpXGKv36e19V7I0Z70NIyIMJHXUsekyVYc1TcdtQtw3mCz";
		const _returnValueVWDNXEP = await _optionmPeDaae.is(_argyeEkVJ4)
		const _hideP4V7XAV = "iVogVmttySH2DoE8pjULq";
		const _returnValueZjppjNA = await _optionmPeDaae.hideHelp(_hideP4V7XAV)
		const _returnValueFiwY8HV = await _HelpSk6FxHE.optionDescription(_optionmPeDaae)
		const _returnValueKya8D9P = 0.7234249747518433;
		const _matchCemmNL = () => { return _returnValueKya8D9P };
		const _returnValueOrnirN = null;
		const _substrVcJX6Gj = () => { return _returnValueOrnirN };
		const _strSA9UEQL = {
			"match": _matchCemmNL,
		"substr": _substrVcJX6Gj
	}
		const _widthha7LmSv = 0.018833609718260647;
		const _indentelV1bY2 = 3.5880471625081274;
		const _minColumnWidthrQqNYiV = 3.715614148762638;
		const _returnValuev8OMXm6 = await _HelpSk6FxHE.wrap(_strSA9UEQL, _widthha7LmSv, _indentelV1bY2, _minColumnWidthrQqNYiV)
		const _arrayValueRxf1wGT = undefined;
		const _arrayValueQFdhdE = null;
		const _arrayValued3evfCa = [_arrayValueQFdhdE]
		const _arrayValueD0YIZzV = 2.303803819178043;
		const _cmdaUofo0Z = [_arrayValueRxf1wGT, _arrayValued3evfCa, _arrayValueD0YIZzV]
		const _helperk0SlwrM = new Help()
		const _returnValueL7HhSu = null;
		const _cmdO3YnQd4 = () => { return _returnValueL7HhSu };
		const _returnValuefkFVJMs = await _helperk0SlwrM.visibleArguments(_cmdO3YnQd4)
		const _returnValueyFk2sLI = await _HelpSk6FxHE.longestArgumentTermLength(_cmdaUofo0Z, _helperk0SlwrM)
		const _argumentnLIlGPa = "dT1xfHI1JEXZRhtDrDKXhuMLWd7wcVQXUCna8Xza";
		const _returnValueRU3hm9R = await _HelpSk6FxHE.argumentTerm(_argumentnLIlGPa)
	});

	it('test for Help', async () => {
		const _Helpyv30yrV = new Help()
		const _returnValuehClt3rB = 2.120483319913804;
		const _descriptiongnZXM8M = () => { return _returnValuehClt3rB };
		const _cmdzikXTn7 = {
			"description": _descriptiongnZXM8M
	}
		const _returnValueg6txFwh = await _Helpyv30yrV.commandDescription(_cmdzikXTn7)
		const _cmdGJM4dU9 = "lAys72ejtiPx8Qv6FrNtaPK8GLjkJNjd1sfAkH66t6ylTIN68OPaOTX9iat5UKPD9Y6s8sapndrCIVRa4Hm10i";
		const _returnValueFrpFHpT = await _Helpyv30yrV.visibleArguments(_cmdGJM4dU9)
	});

	it('test for Help', async () => {
		const _HelpEJ2ofzJ = new Help()
		const _arrayValuePzQwehD = null;
		const _arrayValueUhyfUXn = "lNgHUpXRBginA7uG8BgyGTXxwQVCAVeo3YiL0IcuNW93PAv";
		const _namePkWd41o = [_arrayValuePzQwehD, _arrayValueUhyfUXn]
		const _descriptionwFGgblK = null;
		const _optionaalv0ta = new Argument(_namePkWd41o, _descriptionwFGgblK)
		const _arrayValuel4HzWlC = "o2p0iR7LR";
		const _arrayValueRuTYcfd = -2.009928655378525;
		const _arrayValueWNgXp7G = "KGus3U2v9uhfNzKsItRAmWBwWt29A4GfNWjj5jTnMiYtlbyRIvjmEqw7R1HmBFfn";
		const _arrayValueLi8bXrz = [_arrayValueWNgXp7G]
		const _arrayValuexyMztKJ = null;
		const _arrayValuefFj61u2 = [_arrayValuel4HzWlC, _arrayValueRuTYcfd, _arrayValueLi8bXrz, _arrayValuexyMztKJ]
		const _arrayValueUZaHmWf = {
		
	}
		const _arrayValuexpWmGAD = "nl7lK6bskIVH2J";
		const _arrayValuenqans2 = 7.335205366285209;
		const _valuesVgnghss = [_arrayValuefFj61u2, _arrayValueUZaHmWf, _arrayValuexpWmGAD, _arrayValuenqans2]
		const _returnValuey9EP0pt = await _optionaalv0ta.choices(_valuesVgnghss)
		const _returnValuef9vM3Qz = await _optionaalv0ta.argRequired()
		const _arrayValuex8wPFX8 = "maihawv0xI5uMiY42NSYEDQuajnAjioPkXCwKefbY9YVrhgmOF4HwylutOKNrupLFbxGH";
		const _arrayValuetxTacVb = true;
		const _arrayValuesjAltb2 = "X12jTnztT1HBaq8MFq9MR7kI3kG99AN";
		const _arrayValueW2aDR0i = [_arrayValuetxTacVb, _arrayValuesjAltb2]
		const _arrayValueRN1a7D = null;
		const _arrayValueQwja6AM = null;
		const _arrayValuegG3cLL = -7.2539215356767315;
		const _arrayValuebiHfLEd = null;
		const _arrayValuebTwn15 = [_arrayValuegG3cLL, _arrayValuebiHfLEd]
		const _arrayValueNGPOjY = [_arrayValueRN1a7D, _arrayValueQwja6AM, _arrayValuebTwn15]
		const _arrayValueUdpmHxC = [_arrayValueW2aDR0i, _arrayValueNGPOjY]
		const _valuesLTgEB1y = [_arrayValuex8wPFX8, _arrayValueUdpmHxC]
		const _returnValueqzzqzZJ = await _optionaalv0ta.choices(_valuesLTgEB1y)
		const _values9YESq = undefined;
		const _descriptionGsYBtDx = undefined;
		const _returnValueYklA4wt = await _optionaalv0ta.default(_values9YESq, _descriptionGsYBtDx)
		const _returnValueb7FjcS9 = await _HelpEJ2ofzJ.optionDescription(_optionaalv0ta)
		const _arrayValuejspljtW = true;
		const _arrayValuey1vSF4n = undefined;
		const _arrayValueS1BddDq = 9.21433684743674;
		const _returnValuegMWprB4 = [_arrayValuejspljtW, _arrayValuey1vSF4n, _arrayValueS1BddDq]
		const _cmdl5GW0kw = () => { return _returnValuegMWprB4 };
		const _returnValueTCvUqUB = await _HelpEJ2ofzJ.visibleOptions(_cmdl5GW0kw)
		const _cmdM1E3d2 = false;
		const _arrayValueeWR1Ygf = "eTuixfY3yDejQb";
		const _arrayValueGXdQU9 = {
		
	}
		const _arrayValuexbiNab3 = null;
		const _arrayValuet4gakL9 = [_arrayValueGXdQU9, _arrayValuexbiNab3]
		const _helperQ2hrQXS = [_arrayValueeWR1Ygf, _arrayValuet4gakL9]
		const _returnValueopOeZs = await _HelpEJ2ofzJ.longestOptionTermLength(_cmdM1E3d2, _helperQ2hrQXS)
	});

	it('test for Help', async () => {
		const _HelpNvt9AwC = new Help()
		const _returnValuexayypNQ = undefined;
		const _matchMTyRY0Z = () => { return _returnValuexayypNQ };
		const _returnValueOQ9COYs = -0.7825457365165782;
		const _substrTQZwlr = () => { return _returnValueOQ9COYs };
		const _strJSN3JMN = {
			"match": _matchMTyRY0Z,
		"substr": _substrTQZwlr
	}
		const _widthldi59z = null;
		const _arrayValuexC30qqT = undefined;
		const _indentwl6tjL = [_arrayValuexC30qqT]
		const _minColumnWidthWA2alEJ = 8.444979454516368;
		const _returnValuemc3rtDL = await _HelpNvt9AwC.wrap(_strJSN3JMN, _widthldi59z, _indentwl6tjL, _minColumnWidthWA2alEJ)
	});

	it('test for Help', async () => {
		const _HelpF3TiorH = new Help()
		const _flagsVE0iqVK = "CETtjzBzyQ2BmV2NdUbzMmznnG6JdGcoCkHWVuxrFKATdu6YmiiuqBGbPFg5LzDM43q6ob5g";
		const _descriptionfR48Gw2 = undefined;
		const _cmdJPpw51v = new Option(_flagsVE0iqVK, _descriptionfR48Gw2)
		const _mandatoryNsdOVXG = true;
		const _returnValueIcKOEqg = await _cmdJPpw51v.makeOptionMandatory(_mandatoryNsdOVXG)
		const _fnj5a9PkS = undefined;
		const _returnValuezL5ZFi = await _cmdJPpw51v.argParser(_fnj5a9PkS)
		const _returnValuetLNgV64 = false;
		const _returnValueEfP1OhL = () => { return _returnValuetLNgV64 };
		const _valueYJW5dck = () => { return _returnValueEfP1OhL };
		const _previousgFHmUUi = "WD3pSjUuWdRWL1Ejp0b5OYJxxv2yhgRnnRm4pPk4Azw5X8ft";
		const _returnValuezFoXIIR = await _cmdJPpw51v._concatValue(_valueYJW5dck, _previousgFHmUUi)
		const _returnValueEGQhZD = await _HelpF3TiorH.commandDescription(_cmdJPpw51v)
		const _returnValueiDEgOqp = 8.63408354609167;
		const _includesD7GtsRp = () => { return _returnValueiDEgOqp };
		const _flagsPH7pgDw = {
			"includes": _includesD7GtsRp
	}
		const _returnValuekHrJXlB = "naCfV3A";
		const _descriptionJGK0qU = () => { return _returnValuekHrJXlB };
		const _cmdA8NwZbO = new Option(_flagsPH7pgDw, _descriptionJGK0qU)
		const _fnBO4GOY1 = undefined;
		const _returnValuebFFsypB = await _cmdA8NwZbO.argParser(_fnBO4GOY1)
		const _mandatoryOFCQ9Yz = true;
		const _returnValuepoSNm1J = await _cmdA8NwZbO.makeOptionMandatory(_mandatoryOFCQ9Yz)
		const _returnValuezyw0RxC = await _HelpF3TiorH.subcommandDescription(_cmdA8NwZbO)
		const _argChoicesxXk6LD = {
		
	}
		const _negateJKoZRS = undefined;
		const _defaultValueC3Dzyeb = undefined;
		const _defaultValueDescription18O8Sz = "QIopcJIYHdceTPdaX7MEWIVJgc5MC4Br58llqpG8GmslAQKUg876oeS67";
		const _envVarVyCFTQj = undefined;
		const _descriptionGaV53J3 = -2.1096640763679195;
		const _optionYXT9RU = {
			"argChoices": _argChoicesxXk6LD,
		"negate": _negateJKoZRS,
		"defaultValue": _defaultValueC3Dzyeb,
		"defaultValueDescription": _defaultValueDescription18O8Sz,
		"envVar": _envVarVyCFTQj,
		"description": _descriptionGaV53J3
	}
		const _returnValuekYshbh0 = await _HelpF3TiorH.optionDescription(_optionYXT9RU)
		const _arrayValueIEyy76n = undefined;
		const _returnValueP2rOdCb = "3cTLGqQp";
		const _returnValueoFPY83R = () => { return _returnValueP2rOdCb };
		const _arrayValueq0lsA0 = () => { return _returnValueoFPY83R };
		const _returnValueg6jYI5U = 4.931869587201131;
		const _arrayValue2zeX2P = () => { return _returnValueg6jYI5U };
		const _returnValueq1iVp1u = [_arrayValueIEyy76n, _arrayValueq0lsA0, _arrayValue2zeX2P]
		const _cmdD34zTT = () => { return _returnValueq1iVp1u };
		const _returnValueMIeKeNf = await _HelpF3TiorH.subcommandDescription(_cmdD34zTT)
		const _cmdOuCyDFw = null;
		const _sortSubcommandsIN7XJhY = undefined;
		const _returnValueqBVcHtr = false;
		const _subcommandTermCWAkUDO = () => { return _returnValueqBVcHtr };
		const _helperj26yewL = {
			"sortSubcommands": _sortSubcommandsIN7XJhY,
		"subcommandTerm": _subcommandTermCWAkUDO
	}
		const _returnValueLr2hK5i = await _HelpF3TiorH.longestSubcommandTermLength(_cmdOuCyDFw, _helperj26yewL)
	});

	it('test for Help', async () => {
		const _HelpWa9Bf7d = new Help()
		const _namedvaeEMA = -0.33571088003920657;
		const _cmdwaoF2O1 = new Command(_namedvaeEMA)
		const _returnValuedWnZ8Yc = "egUB1kPhO2rSpkIqJwQ6hVkBwrvrJqcYWBWxULdsUdhZAHY4CR3BrN5I";
		const _contextOptionsvLSGPfg = () => { return _returnValuedWnZ8Yc };
		const _returnValuejHjkvmk = await _cmdwaoF2O1.outputHelp(_contextOptionsvLSGPfg)
		const _subcommandLc6wbY = true;
		const _argsV3cRcCq = {
		
	}
		const _returnValuelFoh7qe = await _cmdwaoF2O1._executeSubCommand(_subcommandLc6wbY, _argsV3cRcCq)
		const _returnValueVXyie0f = await _HelpWa9Bf7d.commandUsage(_cmdwaoF2O1)
		const _strGEbV9n = "7l5EGnsggoo6wCqHSWugR6iw8x9PDjxDkoNOh6woJdKz5BcS8hAnGztFhg4AjLwi1W8CmecEevNNXj";
		const _widthBx5KKLi = -8.10459779587334;
		const _indentVprruxF = 5.117495895127535;
		const _minColumnWidthnB7Jwg = -1.5945590889155277;
		const _returnValueGWq2khg = await _HelpWa9Bf7d.wrap(_strGEbV9n, _widthBx5KKLi, _indentVprruxF, _minColumnWidthnB7Jwg)
		const _strkRdxyNM = "393HLFnDUma0PoUE6aXTcEvvE6Dg7j6Eo1tePgANCOCf";
		const _widthinAQnY = -0.7003119876525883;
		const _returnValueUphbHoL = undefined;
		const _indentfENjATt = () => { return _returnValueUphbHoL };
		const _minColumnWidthVX5Jnoz = 3.0672503982952453;
		const _returnValueAyGnQch = await _HelpWa9Bf7d.wrap(_strkRdxyNM, _widthinAQnY, _indentfENjATt, _minColumnWidthVX5Jnoz)
		const _nameei2WsRU = -2.4292993905756335;
		const _cmdasXGABH = new Command(_nameei2WsRU)
		const _errorjHPdA1m = "azAwhA9WHe9Jufjk7CKQ";
		const _commandcSAEKEC = null;
		const _contextOptionsHnxEADs = {
			"error": _errorjHPdA1m,
		"command": _commandcSAEKEC
	}
		const _returnValueXyvbwK = await _cmdasXGABH.help(_contextOptionsHnxEADs)
		const _returnValuer6tNsyC = {
		
	}
		const _cmdbaQF6Go = () => { return _returnValuer6tNsyC };
		const _isDefaultvQF2eZp = {
		
	}
		const _optszy1znC8 = {
			"isDefault": _isDefaultvQF2eZp
	}
		const _returnValuezxHWrMA = await _cmdasXGABH.addCommand(_cmdbaQF6Go, _optszy1znC8)
		const _strqhvVdSW = {
		
	}
		const _returnValueRBU0AN = await _cmdasXGABH.name(_strqhvVdSW)
		const _returnValueyAAHpR4 = await _cmdasXGABH.unknownCommand()
		const _returnValuefM61wZG = await _HelpWa9Bf7d.visibleOptions(_cmdasXGABH)
	});

	it('test for Help', async () => {
		const _Helpv9hXI7 = new Help()
		const _nameUIlRZn6 = "BnlDr8a6gDPpGdHCkRqx0VUCmiw4vU0WBsqmyX9I2KCFPmRM75cfeMBvmn2ZAbUJ4p1CofllILnfbPLHrF8WjNyJ";
		const _cmdUSXSm6t = new Command(_nameUIlRZn6)
		const _keyKKuUO6Q = {
		
	}
		const _returnValueHszRG6d = await _cmdUSXSm6t.getOptionValue(_keyKKuUO6Q)
		const _allowUnknownfOPTWD1 = true;
		const _returnValueu9hHUgI = await _cmdUSXSm6t.allowUnknownOption(_allowUnknownfOPTWD1)
		const _returnValueLaB4HOY = await _Helpv9hXI7.subcommandTerm(_cmdUSXSm6t)
		const _flagsoUaUHc = "zhluMchaH6jkCw4wPCvoQPPlMXu719Vg6QvUyf6nGkyF6Ts";
		const _descriptiongu5XZi = []
		const _optionE3VRIGw = new Option(_flagsoUaUHc, _descriptiongu5XZi)
		const _returnValueIo1SBZ9 = await _optionE3VRIGw.name()
		const _returnValueJVYzGb1 = await _optionE3VRIGw.name()
		const _returnValuepaP2wzm = await _Helpv9hXI7.optionTerm(_optionE3VRIGw)
		const _returnValuetpCQgfs = 7.970135691043179;
		const _matchnW7ahPu = () => { return _returnValuetpCQgfs };
		const _returnValueWQeelms = 3.0140553007431805;
		const _substrE0iLfx0 = () => { return _returnValueWQeelms };
		const _stru7HSYAU = {
			"match": _matchnW7ahPu,
		"substr": _substrE0iLfx0
	}
		const _widthEuS73pH = 9.585186479112433;
		const _indentLA6dTBD = 0.06981637766792836;
		const _minColumnWidthrOJeMys = false;
		const _returnValuergnXaz = await _Helpv9hXI7.wrap(_stru7HSYAU, _widthEuS73pH, _indentLA6dTBD, _minColumnWidthrOJeMys)
	});

	it('test for Help', async () => {
		const _HelpCxLrVZi = new Help()
		const _cmdQQ8i3jN = "ZEWfaLiigbSee5SF7MPOFtfPIsIcC66JHJifSIYBhbmmQhfofTFhxGe8CjWLC8RKiaUHBxfJCMMgd3";
		const _returnValueJb1J3id = -5.249936692361969;
		const _longestOptionTermLengthdjNU3nt = () => { return _returnValueJb1J3id };
		const _returnValueiYFW3oi = null;
		const _longestSubcommandTermLengthEMUUuOC = () => { return _returnValueiYFW3oi };
		const _returnValueLxNnPx = "kIdFB3bI5q1BeLbbGFP96yGpuHVbzctTtHJD5oEwzclAegcRBYXNhhKor0kAHnav972CG5zdAQfxEMxQv";
		const _longestArgumentTermLengthfdgAeJ8 = () => { return _returnValueLxNnPx };
		const _helpermZDb0Tj = {
			"longestOptionTermLength": _longestOptionTermLengthdjNU3nt,
		"longestSubcommandTermLength": _longestSubcommandTermLengthEMUUuOC,
		"longestArgumentTermLength": _longestArgumentTermLengthfdgAeJ8
	}
		const _returnValueMZrQN9q = await _HelpCxLrVZi.padWidth(_cmdQQ8i3jN, _helpermZDb0Tj)
		const _arrayValuejuICm79 = null;
		const _arrayValueI5wOMOk = 0.7530048594177767;
		const _returnValuefHIAdeg = [_arrayValuejuICm79, _arrayValueI5wOMOk]
		const _argumentb4OXNl3 = () => { return _returnValuefHIAdeg };
		const _returnValueI8lZJpM = await _HelpCxLrVZi.argumentDescription(_argumentb4OXNl3)
		const _nameSOnFwcS = "niKsA4sVtj7KZvP9QoVajz4iwh2RoicpjULOvKlcWZRFQBxiDVhfQS";
		const _arrayValueMgsKBQc = "5hF9gVk4kiiDCXpBkRyknPQAlSASj3K";
		const _arrayValueVQm9K0n = [_arrayValueMgsKBQc]
		const _returnValueaEC8vAB = "cjFhBLVQPg2n8b";
		const _arrayValuee7HwzRK = () => { return _returnValueaEC8vAB };
		const _arrayValueOnUnaUX = false;
		const _descriptionJ7qa6bw = [_arrayValueVQm9K0n, _arrayValuee7HwzRK, _arrayValueOnUnaUX]
		const _optioniETRcy = new Argument(_nameSOnFwcS, _descriptionJ7qa6bw)
		const _arrayValueIr7kB8x = undefined;
		const _arrayValuebCyA8l = null;
		const _valuesGqsPpT = [_arrayValueIr7kB8x, _arrayValuebCyA8l]
		const _descriptionTwp9Q2 = {
		
	}
		const _returnValuehs9MJNv = await _optioniETRcy.default(_valuesGqsPpT, _descriptionTwp9Q2)
		const _returnValue7Dzm89 = await _optioniETRcy.argRequired()
		const _returnValuemWxNjSY = await _HelpCxLrVZi.optionDescription(_optioniETRcy)
	});

	it('test for Help', async () => {
		const _Helpnzf80UK = new Help()
		const _nameo3RpElr = true;
		const _cmdH4lZsQD = new Command(_nameo3RpElr)
		const _strA7b0gnE = undefined;
		const _returnValueWwMxZ8s = await _cmdH4lZsQD.usage(_strA7b0gnE)
		const _returnValuecgJp0Uw = await _cmdH4lZsQD._parseOptionsEnv()
		const _fnkppt2ij = null;
		const _returnValuegxIxTlY = await _cmdH4lZsQD.exitOverride(_fnkppt2ij)
		const _returnValueDTHrTjx = undefined;
		const _returnValueXFUd0v = () => { return _returnValueDTHrTjx };
		const _allowExcesskRcQRjr = () => { return _returnValueXFUd0v };
		const _returnValueEfRwPN = await _cmdH4lZsQD.allowExcessArguments(_allowExcesskRcQRjr)
		const _returnValueQ5aPfdp = await _Helpnzf80UK.visibleOptions(_cmdH4lZsQD)
		const _cmdT22ny81 = 0.5042187765077628;
		const _helperYklMHUw = undefined;
		const _returnValuebWHBXH = await _Helpnzf80UK.formatHelp(_cmdT22ny81, _helperYklMHUw)
		const _namenMpO5m = "mB2cGklnK5dNvGPKhjhhsE7yYogCCUgO7CPw9JnfigD9plwVRUrXSHmWXo8B1WPWYx5sQ5VZdEnLH7RuPvwwIxYv0nnn";
		const _cmddju3Ou = new Command(_namenMpO5m)
		const _namet8wSlcw = null;
		const _descriptionJwfjV9J = "IAujAud3qGWYLl3bcRRQUNvZLWglD5pUX9kDKBGXl3Nvop7P5XMQkqWfv8HQJFzcxcfKgHsc2FJ";
		const _arrayValueXiEGMng = "rdRY01DAFho1OoqpItFn5UrDjtWxPkg6qBSwdSkpuxmfe";
		const _arrayValueDKLJYgD = [_arrayValueXiEGMng]
		const _arrayValueeB4jIfY = null;
		const _arrayValueBK6dO72 = true;
		const _fncCqsVIv = [_arrayValueDKLJYgD, _arrayValueeB4jIfY, _arrayValueBK6dO72]
		const _defaultValuerC1zwIz = false;
		const _returnValueTjky4fk = await _cmddju3Ou.argument(_namet8wSlcw, _descriptionJwfjV9J, _fncCqsVIv, _defaultValuerC1zwIz)
		const _returnValuetY7a7zc = await _Helpnzf80UK.subcommandTerm(_cmddju3Ou)
		const _cmdD1Rc8q8 = null;
		const _returnValue7f4K5t = {
		
	}
		const _visibleArguments2xB52n = () => { return _returnValue7f4K5t };
		const _returnValuezkHEQn = undefined;
		const _argumentTermNkAMjCi = () => { return _returnValuezkHEQn };
		const _helperaoKPEUK = {
			"visibleArguments": _visibleArguments2xB52n,
		"argumentTerm": _argumentTermNkAMjCi
	}
		const _returnValuepljCoKQ = await _Helpnzf80UK.longestArgumentTermLength(_cmdD1Rc8q8, _helperaoKPEUK)
	});

	it('test for Help', async () => {
		const _Helpbc38jhr = new Help()
		const _returnValueSpGt9Bl = "bPVdffQsVuEiAhLYs4rfjrBBuO4aQwKrARisIiTbAJMg1dFh8XWsQ3UlvBvqyEGT3LSNQfRYuNhvVHeVS8guli";
		const _namecNfLgsa = () => { return _returnValueSpGt9Bl };
		const _descriptionoh2OMUu = {
		
	}
		const _argumentmmGbKNm = new Argument(_namecNfLgsa, _descriptionoh2OMUu)
		const _returnValueXglXGQy = await _argumentmmGbKNm.name()
		const _fnwNHYqWZ = undefined;
		const _returnValueonNNAwp = await _argumentmmGbKNm.argParser(_fnwNHYqWZ)
		const _valueVKjrdo7 = {
		
	}
		const _previousROBmtDG = "weMdqxqJ5NgfWBLSt41PJELnmGwuHAZ89rPUDRKB";
		const _returnValuegCYnkxf = await _argumentmmGbKNm._concatValue(_valueVKjrdo7, _previousROBmtDG)
		const _valueoyg56IS = {
		
	}
		const _descriptiong41G9vu = undefined;
		const _returnValueqkIrK62 = await _argumentmmGbKNm.default(_valueoyg56IS, _descriptiong41G9vu)
		const _returnValueyuoCSt9 = await _Helpbc38jhr.argumentDescription(_argumentmmGbKNm)
		const _cmdrbUdZ8u = "yh2ZADTdoeaF0PGrSfH5U6vAMZV8xPsQw8sLO7Roqz";
		const _returnValueUXNR1Ib = await _Helpbc38jhr.visibleOptions(_cmdrbUdZ8u)
		const _cmdIMd917A = null;
		const _arrayValuedjzumTb = 0.9732727808834181;
		const _arrayValueaUWe6O0 = -6.00944716670434;
		const _arrayValuerR8pIBp = -0.09705520607665363;
		const _helperwQuKhQr = [_arrayValuedjzumTb, _arrayValueaUWe6O0, _arrayValuerR8pIBp]
		const _returnValuek6Z4EuP = await _Helpbc38jhr.longestOptionTermLength(_cmdIMd917A, _helperwQuKhQr)
		const _cmdvjYUU9K = undefined;
		const _helperjzVemV = "eTQBr4NIzvck5";
		const _returnValueRNstKJ1 = await _Helpbc38jhr.longestSubcommandTermLength(_cmdvjYUU9K, _helperjzVemV)
	});

	it('test for Help', async () => {
		const _HelpAVW2Vm = new Help()
		const _argumentG7qa2WK = "f9YstAfOt6lBmSiFF9t3uvrWUWFUDyBft8XY0gy15S24bqWkg9ATh3ba5Cb6QgnBFn08tVYV7vPAIMaPJBNByWgKK";
		const _returnValueofOmPjK = await _HelpAVW2Vm.argumentDescription(_argumentG7qa2WK)
		const _nameVFl3qC = null;
		const _cmdw9w2wdE = new Command(_nameVFl3qC)
		const _flagscn8QS9 = "gTG7D5HtMRJkX2TTr8PXMiCaL2Z";
		const _descriptiongJC114E = {
		
	}
		const _returnValueH77qnd = 1.6399699365331841;
		const _fnYP96K6a = () => { return _returnValueH77qnd };
		const _arrayValueIp286ZJ = {
		
	}
		const _arrayValueQfmg1N8 = "oKjeJyI7bUplgam54QGtxnlrqP8JNNrtltGgYJX";
		const _arrayValueGxk0Qu = 1.68245054619641;
		const _defaultValueNn4nWw = [_arrayValueIp286ZJ, _arrayValueQfmg1N8, _arrayValueGxk0Qu]
		const _returnValueB5HAaHF = await _cmdw9w2wdE.option(_flagscn8QS9, _descriptiongJC114E, _fnYP96K6a, _defaultValueNn4nWw)
		const _flagskD1X98I = false;
		const _arrayValueMMqiKyv = undefined;
		const _arrayValueBI7hmy = undefined;
		const _descriptionphegiUs = [_arrayValueMMqiKyv, _arrayValueBI7hmy]
		const _returnValueSOt4sXA = await _cmdw9w2wdE.helpOption(_flagskD1X98I, _descriptionphegiUs)
		const _nameafPp9nF = "jAfUjr";
		const _arrayValueIPWZviQ = null;
		const _arrayValueaR7lh3h = "Kq5yvMULD0MgqJpyOBJ75c1kJvhy9mW22xOSXztXYXi2XxwWjunIoeWYPwpYN1L4tdOluSwYDU1fUfdaJlFyhMaqWs2enWsm";
		const _descriptionxuRT4Gs = [_arrayValueIPWZviQ, _arrayValueaR7lh3h]
		const _returnValueCEmuSSc = await _cmdw9w2wdE.createArgument(_nameafPp9nF, _descriptionxuRT4Gs)
		const _returnValueEGHUJvd = await _HelpAVW2Vm.subcommandTerm(_cmdw9w2wdE)
		const _namelwiprHh = true;
		const _cmdzCWy88 = new Command(_namelwiprHh)
		const _returnValuewugRwQT = await _cmdzCWy88.opts()
		const _returnValueOKgu7s = {
		
	}
		const _arrayValuekpWUKzm = () => { return _returnValueOKgu7s };
		const _arrayValuedt7esV = undefined;
		const _subcommandTlT99u9 = [_arrayValuekpWUKzm, _arrayValuedt7esV]
		const _argskZv7xL = true;
		const _returnValueA5IOOMm = await _cmdzCWy88._executeSubCommand(_subcommandTlT99u9, _argskZv7xL)
		const _arrayValuekGVz8Xz = null;
		const _nameV993UW = [_arrayValuekGVz8Xz]
		const _descriptionIyl5fUR = -3.554505760581703;
		const _returnValueAZ98Md5 = await _cmdzCWy88.createArgument(_nameV993UW, _descriptionIyl5fUR)
		const _returnValueZerYD2p = undefined;
		const _returnValueI9DehuJ = () => { return _returnValueZerYD2p };
		const _flagsNDR7ULI = () => { return _returnValueI9DehuJ };
		const _descriptiongBuwBQH = {
		
	}
		const _fnv4NxUkA = null;
		const _defaultValueSk1qBuv = {
		
	}
		const _returnValueid6wGHG = await _cmdzCWy88.requiredOption(_flagsNDR7ULI, _descriptiongBuwBQH, _fnv4NxUkA, _defaultValueSk1qBuv)
		const _returnValueL0gXIk1 = await _HelpAVW2Vm.commandUsage(_cmdzCWy88)
		const _nameyRDGTLv = "5RGullmW0";
		const _cmdF1lugWA = new Command(_nameyRDGTLv)
		const _argvtjteNSf = 5.560045631506199;
		const _parseOptionsdke7Qob = {
		
	}
		const _returnValuegv6vH9 = await _cmdF1lugWA.parse(_argvtjteNSf, _parseOptionsdke7Qob)
		const _argvHhSqp10 = "1JriCSSjb7g4nc1nuDqVJmkm6EXS76fpPZzAgIEw8elD6JDkvGf7qc5O2pgRISKWjXmGelYf66tAmH58ys2x4s4KCwsMGnGQI";
		const _returnValueoA7a3Ga = null;
		const _returnValueOVABkdo = () => { return _returnValueoA7a3Ga };
		const _returnValuerg8sPRp = () => { return _returnValueOVABkdo };
		const _parseOptionszaZUCE = () => { return _returnValuerg8sPRp };
		const _returnValuebaKUU3j = await _cmdF1lugWA._prepareUserArgs(_argvHhSqp10, _parseOptionszaZUCE)
		const _aliasesE5vNlqc = []
		const _returnValueL9uxXGZ = await _cmdF1lugWA.aliases(_aliasesE5vNlqc)
		const _returnValueJBuGZ8P = await _HelpAVW2Vm.subcommandDescription(_cmdF1lugWA)
	});

	it('test for Help', async () => {
		const _HelpsjBVwyP = new Help()
		const _cmdzi6Wc3J = undefined;
		const _helperxalyyQW = new Help()
		const _nameF6PxRgQ = false;
		const _cmdY6S7eOu = new Command(_nameF6PxRgQ)
		const _allowExcessxNrDMfj = true;
		const _returnValuecxEAHGk = await _cmdY6S7eOu.allowExcessArguments(_allowExcessxNrDMfj)
		const _arrayValueqxiHqU9 = -7.368153514478739;
		const _arrayValuerIhJUy2 = undefined;
		const _aliaseskOHZthW = [_arrayValueqxiHqU9, _arrayValuerIhJUy2]
		const _returnValuej8mF64E = await _cmdY6S7eOu.aliases(_aliaseskOHZthW)
		const _returnValueJwKU0Wc = await _helperxalyyQW.commandUsage(_cmdY6S7eOu)
		const _optionRCslhW5 = "W4yQkJPyKcaJujAyXoViLSDA";
		const _returnValueFDVHDCN = await _helperxalyyQW.optionTerm(_optionRCslhW5)
		const _returnValuelcFbMhx = "OIMRFNzqRNdNY6UFXCieyMMeVDOXFmZkLzENJSFK5Q3VnRkRFFEniCQRzrNwmF";
		const _arrayValueda6V6Px = () => { return _returnValuelcFbMhx };
		const _arrayValueYaXhyID = -6.174923935417588;
		const _arrayValueTi1Ygp = "qR6Zvbn2oyeouAiWs4BMf9XpGva6WgGnmJHrzdsarZxK2Os3mbHr5oHPsWLBifeFPsXeNSWdZp";
		const _returnValueO2qFxej = [_arrayValueda6V6Px, _arrayValueYaXhyID, _arrayValueTi1Ygp]
		const _cmdfu2Zs6 = () => { return _returnValueO2qFxej };
		const _arrayValuefRhPDK8 = 3.1321470002926173;
		const _helperOQB2RMS = [_arrayValuefRhPDK8]
		const _returnValueh4DCSLy = await _helperxalyyQW.formatHelp(_cmdfu2Zs6, _helperOQB2RMS)
		const _flagsZRsOCPl = "NPSFWU8rOTp6yyxU9rrum9888374adOPwvqSXYhhor9j6VWZsxge4uwFvuKfdvdKIlHHh76XNsVz1TGSS";
		const _descriptionf6tRGZ = null;
		const _optionOI6KEx = new Option(_flagsZRsOCPl, _descriptionf6tRGZ)
		const _valueQ86CiFi = undefined;
		const _returnValuek9w2ls = -9.687064170706487;
		const _descriptionyJ49EKG = () => { return _returnValuek9w2ls };
		const _returnValueZBZfVhd = await _optionOI6KEx.default(_valueQ86CiFi, _descriptionyJ49EKG)
		const _fnhXdiwzM = undefined;
		const _returnValueSw2rQ9g = await _optionOI6KEx.argParser(_fnhXdiwzM)
		const _returnValueh1uiSp = await _helperxalyyQW.optionTerm(_optionOI6KEx)
		const _returnValueVhRKwjM = await _HelpsjBVwyP.padWidth(_cmdzi6Wc3J, _helperxalyyQW)
		const _arrayValuegoHTblG = undefined;
		const _cmdI8sUnUw = [_arrayValuegoHTblG]
		const _returnValueBuHoeWV = await _HelpsjBVwyP.subcommandTerm(_cmdI8sUnUw)
		const _returnValueusqIZOe = -4.228962859709596;
		const _optionlsHxaL0 = () => { return _returnValueusqIZOe };
		const _returnValueATpspvf = await _HelpsjBVwyP.optionDescription(_optionlsHxaL0)
		const _cmdjmaMp7n = "N5";
		const _returnValuejMgKyCM = await _HelpsjBVwyP.visibleArguments(_cmdjmaMp7n)
	});

	it('test for Help', async () => {
		const _HelpZmAoPy6 = new Help()
		const _returnValued8cUwog = undefined;
		const _namepbF0GsM = () => { return _returnValued8cUwog };
		const _cmdSCTHn2a = new Command(_namepbF0GsM)
		const _fnbRkvbwz = {
		
	}
		const _returnValueV2gufNj = await _cmdSCTHn2a.exitOverride(_fnbRkvbwz)
		const _returnValueVgIRJtS = null;
		const _arrayValueCfeV9f = () => { return _returnValueVgIRJtS };
		const _arrayValueTXgRXx = undefined;
		const _arrayValueH0b1R4a = false;
		const _aliaseseNgMAyd = [_arrayValueCfeV9f, _arrayValueTXgRXx, _arrayValueH0b1R4a]
		const _returnValuegQFUf9o = await _cmdSCTHn2a.aliases(_aliaseseNgMAyd)
		const _returnValueqy459L4 = await _HelpZmAoPy6.subcommandTerm(_cmdSCTHn2a)
	});

	it('test for Help', async () => {
		const _HelpwCUA62N = new Help()
		const _returnValueIRkyCJt = -5.598100835619932;
		const _descriptioneczPwI6 = () => { return _returnValueIRkyCJt };
		const _cmdjuHx6i5 = {
			"description": _descriptioneczPwI6
	}
		const _returnValuehQ7cqI0 = await _HelpwCUA62N.subcommandDescription(_cmdjuHx6i5)
		const _cmdywUzBq = true;
		const _helperSd71GRy = new Help()
		const _nameJk9WkO3 = null;
		const _cmdXXFFGZ = new Command(_nameJk9WkO3)
		const _strs5zidUc = undefined;
		const _returnValueyG1GJ3v = await _cmdXXFFGZ.usage(_strs5zidUc)
		const _namerGOMaF = null;
		const _returnValueMItAH8G = await _cmdXXFFGZ.createCommand(_namerGOMaF)
		const _flags3GGxkK = "dB1kdWzfgwTLErhyfEI6ampWVBKF2Qckd3vK";
		const _descriptionP5AtwJ1 = -8.281677619193582;
		const _argumentA0I8QR = new Option(_flags3GGxkK, _descriptionP5AtwJ1)
		const _returnValueYJCXZn = await _argumentA0I8QR.attributeName()
		const _returnValuevzik6wa = await _argumentA0I8QR.name()
		const _argFL6OxYN = "erXCf4RyNpLNnL888k4U3sOqv6VpT6vDRbCRdozyiQ2WzkpxdQQHQKS9hyXvuYsVVy3sXqmc3B1pA5kKB5xuO3qDha";
		const _returnValuej2M71Ab = await _argumentA0I8QR.is(_argFL6OxYN)
		const _valueECb4lBC = true;
		const _previousAtwt307 = "4auHgXPdwWhsMozFYd4PKyGymGfxZISfGI9Gn8q3rjycdpNdOHl6Kv0xfrTqOxPD9MHmrlctf62Dwc15";
		const _returnValuehuzmWlf = await _argumentA0I8QR._concatValue(_valueECb4lBC, _previousAtwt307)
		const _returnValuezZVYDfD = await _cmdXXFFGZ.addArgument(_argumentA0I8QR)
		const _returnValueIVNChNa = await _cmdXXFFGZ._checkNumberOfArguments()
		const _returnValuelMtDav9 = await _helperSd71GRy.visibleCommands(_cmdXXFFGZ)
		const _nameRd2fqU = -0.8708548095157305;
		const _argumentU4xAKCa = new Command(_nameRd2fqU)
		const _exitCodeoUhMu7I = undefined;
		const _arrayValuepPsZbku = -8.778532780567772;
		const _codeB25CPDi = [_arrayValuepPsZbku]
		const _messagegPeaTlh = -1.048201902414963;
		const _returnValuevGEEUo9 = await _argumentU4xAKCa._exit(_exitCodeoUhMu7I, _codeB25CPDi, _messagegPeaTlh)
		const _returnValuem6jnlRE = await _argumentU4xAKCa.createHelp()
		const _allowExcessw2UmO84 = true;
		const _returnValueQw7mbZS = await _argumentU4xAKCa.allowExcessArguments(_allowExcessw2UmO84)
		const _returnValueM3zwbcO = await _helperSd71GRy.argumentDescription(_argumentU4xAKCa)
		const _returnValuehdjb6er = await _HelpwCUA62N.longestSubcommandTermLength(_cmdywUzBq, _helperSd71GRy)
		const _returnValueyInXfEN = {
		
	}
		const _optionAsnXWyD = () => { return _returnValueyInXfEN };
		const _returnValueDrNab9F = await _HelpwCUA62N.optionDescription(_optionAsnXWyD)
		const _returnValuematRGsd = "cUmqVKlgxTBGal1";
		const _optionfTFXcip = () => { return _returnValuematRGsd };
		const _returnValueZL7N22U = await _HelpwCUA62N.optionDescription(_optionfTFXcip)
		const _cmdHa3J8iy = {
		
	}
		const _arrayValueRh5gT2A = []
		const _arrayValuerH4ZXAn = null;
		const _helpereGPeCj = [_arrayValueRh5gT2A, _arrayValuerH4ZXAn]
		const _returnValuedYDPlzi = await _HelpwCUA62N.longestArgumentTermLength(_cmdHa3J8iy, _helpereGPeCj)
	});
})