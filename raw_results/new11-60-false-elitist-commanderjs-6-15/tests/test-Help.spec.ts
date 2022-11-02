export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpIllyJPv = new Help()
		const __argsMq1OYOo = {
		
	}
		const __namermejGEP = -3.5032417276374694;
		const __aliasesKpIUK3V = {
		
	}
		const _optionsx3l4g10 = {
		
	}
		const _cmdWxp2kgp = {
			"_args": __argsMq1OYOo,
		"_name": __namermejGEP,
		"_aliases": __aliasesKpIUK3V,
		"options": _optionsx3l4g10
	}
		const _returnValueV3idWow = await _HelpIllyJPv.subcommandTerm(_cmdWxp2kgp)
		const __nameHYxOfzL = {
		
	}
		const __aliasesRKnXEs4 = null;
		const _parentmvRz1xv = false;
		const _returnValueOQLhqT1 = -8.080184564017074;
		const _usageu5vrP92 = () => { return _returnValueOQLhqT1 };
		const _cmdLIwVe5u = {
			"_name": __nameHYxOfzL,
		"_aliases": __aliasesRKnXEs4,
		"parent": _parentmvRz1xv,
		"usage": _usageu5vrP92
	}
		const _returnValueP2vdYYA = await _HelpIllyJPv.commandUsage(_cmdLIwVe5u)
		const __argsDescriptionIU3ORm5 = true;
		const __args6rHEgo = {
		
	}
		const _cmdMUWWNdN = {
			"_argsDescription": __argsDescriptionIU3ORm5,
		"_args": __args6rHEgo
	}
		const _returnValueU3zoL5T = await _HelpIllyJPv.visibleArguments(_cmdMUWWNdN)
		const _cmduSvDtKD = {
		
	}
		const _sortSubcommands5bFIgv = null;
		const _arrayValueKVRPTJn = undefined;
		const _arrayValueQ4XB27 = false;
		const _returnValuezIg034s = [_arrayValueKVRPTJn, _arrayValueQ4XB27]
		const _subcommandTermIC4AJ2n = () => { return _returnValuezIg034s };
		const _helperKFcA1pj = {
			"sortSubcommands": _sortSubcommands5bFIgv,
		"subcommandTerm": _subcommandTermIC4AJ2n
	}
		const _returnValueJ5FabII = await _HelpIllyJPv.formatHelp(_cmduSvDtKD, _helperKFcA1pj)
		const _returnValueQ0ric5g = undefined;
		const _flagsMGqtne5 = () => { return _returnValueQ0ric5g };
		const _optionbTa8p0j = {
			"flags": _flagsMGqtne5
	}
		const _returnValuexexSi2j = await _HelpIllyJPv.optionTerm(_optionbTa8p0j)
	});

	it('test for Help', async () => {
		const _HelpKnSVdLE = new Help()
		const _arrayValuengVNZln = false;
		const _arrayValueIPlgZMd = -9.947582999276802;
		const _arrayValuetCxSv7U = 2.556465206016611;
		const _cmdks1DvlA = [_arrayValuengVNZln, _arrayValueIPlgZMd, _arrayValuetCxSv7U]
		const _sortSubcommandsffQDUr = false;
		const _returnValueXg0W4h5 = 8.491006924175512;
		const _subcommandTermcz3NR4P = () => { return _returnValueXg0W4h5 };
		const _helperbL0KXR = {
			"sortSubcommands": _sortSubcommandsffQDUr,
		"subcommandTerm": _subcommandTermcz3NR4P
	}
		const _returnValuevF2PXik = await _HelpKnSVdLE.formatHelp(_cmdks1DvlA, _helperbL0KXR)
		const __argsKPOdNwB = {
		
	}
		const __nameSsbhWtJ = -1.0038044057761297;
		const __aliasespbz21IL = {
		
	}
		const _optionsDUsE3s = {
		
	}
		const _cmdJ8cvJ1W = {
			"_args": __argsKPOdNwB,
		"_name": __nameSsbhWtJ,
		"_aliases": __aliasespbz21IL,
		"options": _optionsDUsE3s
	}
		const _returnValuegHMm5g1 = await _HelpKnSVdLE.subcommandTerm(_cmdJ8cvJ1W)
	});

	it('test for Help', async () => {
		const _HelpkAW7wdd = new Help()
		const _returnValueR1KadIk = undefined;
		const _descriptionvpnQIAy = () => { return _returnValueR1KadIk };
		const _cmdN6jjKPY = {
			"description": _descriptionvpnQIAy
	}
		const _returnValueb84or90 = await _HelpkAW7wdd.subcommandDescription(_cmdN6jjKPY)
		const _cmdgFvVGVM = []
		const _returnValueTobtF1S = "2uwCeOj7iihi3zySsgDG9M5n1pGI0T8y7BmeXmdsr2VoHiJT1yBVoDAbZlhWwRWsvoPmuMGuwzVJP9Sls";
		const _visibleArgumentsPPM0UI0 = () => { return _returnValueTobtF1S };
		const _returnValue9VIQa1 = {
		
	}
		const _argumentTermGbrd8t3 = () => { return _returnValue9VIQa1 };
		const _helperm4hMd2y = {
			"visibleArguments": _visibleArgumentsPPM0UI0,
		"argumentTerm": _argumentTermGbrd8t3
	}
		const _returnValueqQh4KH = await _HelpkAW7wdd.longestArgumentTermLength(_cmdgFvVGVM, _helperm4hMd2y)
	});

	it('test for Help', async () => {
		const _HelphBLcDfJ = new Help()
		const _flagsj7hVojT = "zWOxLToFRQCfuA565auVmEWBACXYrnGEWnchSzCAVoLcT74SP9qOz3uSppa365yHr2ucCL6kpv";
		const _optionSGt8oY9 = {
			"flags": _flagsj7hVojT
	}
		const _returnValuedzc8wn = await _HelphBLcDfJ.optionTerm(_optionSGt8oY9)
		const _argChoicesroQbujT = null;
		const _arrayValueWcMunEU = undefined;
		const _arrayValueYg4ROIu = "wMFRSIPt9bRAUVvelCqWGHZWhxlXa2OIDtn5KuQVi3JgGzJuAkzYRzYfGpWcLHNPNBDJyhJTIpF6TEQFylu4fBAKAOgL";
		const _arrayValueniawXyE = [_arrayValueWcMunEU, _arrayValueYg4ROIu]
		const _returnValueuN1dIvg = [_arrayValueniawXyE]
		const _negateW3yNu0i = () => { return _returnValueuN1dIvg };
		const _defaultValueapKYyvr = undefined;
		const _defaultValueDescriptionZAphLfc = 5.501482884022046;
		const _envVarxVXxoZv = undefined;
		const _descriptiondz7hxpY = "eYWX6y4d";
		const _optioniv9m5JQ = {
			"argChoices": _argChoicesroQbujT,
		"negate": _negateW3yNu0i,
		"defaultValue": _defaultValueapKYyvr,
		"defaultValueDescription": _defaultValueDescriptionZAphLfc,
		"envVar": _envVarxVXxoZv,
		"description": _descriptiondz7hxpY
	}
		const _returnValuef18MW1T = await _HelphBLcDfJ.optionDescription(_optioniv9m5JQ)
		const _argChoicesmUjOd0 = {
		
	}
		const _negateKAUL2ab = 4.790981076275676;
		const _defaultValuer1sW1wm = undefined;
		const _defaultValueDescriptionSXvGQ6p = "fixzRQkGrLEaoWk0xS";
		const _arrayValueCp2zk2q = 6.764363015695331;
		const _envVarBr8HOG6 = [_arrayValueCp2zk2q]
		const _descriptionbCXUMxv = "EX4kDMbS3Q1";
		const _optionuknkRR = {
			"argChoices": _argChoicesmUjOd0,
		"negate": _negateKAUL2ab,
		"defaultValue": _defaultValuer1sW1wm,
		"defaultValueDescription": _defaultValueDescriptionSXvGQ6p,
		"envVar": _envVarBr8HOG6,
		"description": _descriptionbCXUMxv
	}
		const _returnValuekwRmitg = await _HelphBLcDfJ.optionDescription(_optionuknkRR)
	});

	it('test for Help', async () => {
		const _HelpM3VzMW8 = new Help()
		const _argChoices0Dnlcs = {
		
	}
		const _defaultValuey80JRoW = undefined;
		const _defaultValueDescriptionJiQH75B = undefined;
		const _arrayValuebWhiVzP = null;
		const _descriptionmGMpRl3 = [_arrayValuebWhiVzP]
		const _argumentq7LWXNX = {
			"argChoices": _argChoices0Dnlcs,
		"defaultValue": _defaultValuey80JRoW,
		"defaultValueDescription": _defaultValueDescriptionJiQH75B,
		"description": _descriptionmGMpRl3
	}
		const _returnValuebUYNqPi = await _HelpM3VzMW8.argumentDescription(_argumentq7LWXNX)
		const _cmdUa3V4hb = null;
		const _returnValuePRZ3u4L = []
		const _longestOptionTermLengthyZo77XZ = () => { return _returnValuePRZ3u4L };
		const _returnValueWXet73f = null;
		const _longestSubcommandTermLengthsj3gra9 = () => { return _returnValueWXet73f };
		const _returnValuemAwOnK6 = true;
		const _longestArgumentTermLengthq370Nr3 = () => { return _returnValuemAwOnK6 };
		const _helperkXPAVYD = {
			"longestOptionTermLength": _longestOptionTermLengthyZo77XZ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthsj3gra9,
		"longestArgumentTermLength": _longestArgumentTermLengthq370Nr3
	}
		const _returnValuexE0HERi = await _HelpM3VzMW8.padWidth(_cmdUa3V4hb, _helperkXPAVYD)
		const __nameVOToN0p = {
		
	}
		const __aliasestbuVIX6 = {
		
	}
		const _parentkeDVWrh = {
		
	}
		const _usageFXJCexW = "lNAQnGgDWJUwLJd8696Ug7nH7PlJtj6VJ527pAPwWfPKD2VIJLAxmNIPJdYBowtG6iIVokZ80VEej5c9tFpQVMCrAsoxsHkOvA";
		const _cmdhGV6Bk2 = {
			"_name": __nameVOToN0p,
		"_aliases": __aliasestbuVIX6,
		"parent": _parentkeDVWrh,
		"usage": _usageFXJCexW
	}
		const _returnValuebNrNxMI = await _HelpM3VzMW8.commandUsage(_cmdhGV6Bk2)
		const __nameRRNB9nI = null;
		const __aliasesWeZqvMl = {
		
	}
		const _parent1SRcDU = {
		
	}
		const _returnValuewrZLIL4 = false;
		const _usagefjRjjZj = () => { return _returnValuewrZLIL4 };
		const _cmdR5HSrkH = {
			"_name": __nameRRNB9nI,
		"_aliases": __aliasesWeZqvMl,
		"parent": _parent1SRcDU,
		"usage": _usagefjRjjZj
	}
		const _returnValueuNQgCn = await _HelpM3VzMW8.commandUsage(_cmdR5HSrkH)
	});

	it('test for Help', async () => {
		const _HelpLTAEgfX = new Help()
		const _returnValueJ8qUrvl = null;
		const _matcheYjTrmk = () => { return _returnValueJ8qUrvl };
		const _returnValueMSrmVi = null;
		const _substruPPxglN = () => { return _returnValueMSrmVi };
		const _str1Xv0jf = {
			"match": _matcheYjTrmk,
		"substr": _substruPPxglN
	}
		const _widthxfImVBX = -6.32117650216364;
		const _indentHm2qNVb = 4.765084743801211;
		const _minColumnWidthH7uApxv = -4.269385957040944;
		const _returnValueoftUTW = await _HelpLTAEgfX.wrap(_str1Xv0jf, _widthxfImVBX, _indentHm2qNVb, _minColumnWidthH7uApxv)
		const _returnValuehpM8eTe = -8.741746581913795;
		const _returnValueZytLVsa = () => { return _returnValuehpM8eTe };
		const _nameqkjGVyc = () => { return _returnValueZytLVsa };
		const _argumentsYbauFC = {
			"name": _nameqkjGVyc
	}
		const _returnValueYFLM7uH = await _HelpLTAEgfX.argumentTerm(_argumentsYbauFC)
		const __argsDescriptionTtubJGY = {
		
	}
		const __argsHwjirE2 = {
		
	}
		const _cmdzzqHvZX = {
			"_argsDescription": __argsDescriptionTtubJGY,
		"_args": __argsHwjirE2
	}
		const _returnValueCQKTxwP = await _HelpLTAEgfX.visibleArguments(_cmdzzqHvZX)
	});

	it('test for Help', async () => {
		const _HelpGBjmMoA = new Help()
		const _cmdtyQr7bu = "FvpgzFXqAzhMA3TKtWWww";
		const _returnValuef3DeqG3 = await _HelpGBjmMoA.commandUsage(_cmdtyQr7bu)
		const _returnValueilU9nqw = "ypmqZ1nExao8ZiJcwWVUk08HwlgLLeULQrbmyXvkDabcDjpl366VK3gMTKBHa11nC3covixAKnUyIUVxewUAyonsgYWAW1N1kp";
		const _descriptionfztDQOc = () => { return _returnValueilU9nqw };
		const _cmdtVda8Nr = {
			"description": _descriptionfztDQOc
	}
		const _returnValueYZtjdtA = await _HelpGBjmMoA.subcommandDescription(_cmdtVda8Nr)
		const _cmddOdZikZ = 0.7783716286033577;
		const _returnValuebZWnqAE = null;
		const _sortSubcommandsPoFBt0l = () => { return _returnValuebZWnqAE };
		const _returnValueWsf3wx9 = null;
		const _subcommandTermeW7AkNO = () => { return _returnValueWsf3wx9 };
		const _helperoW4oN77 = {
			"sortSubcommands": _sortSubcommandsPoFBt0l,
		"subcommandTerm": _subcommandTermeW7AkNO
	}
		const _returnValueqCexvXx = await _HelpGBjmMoA.formatHelp(_cmddOdZikZ, _helperoW4oN77)
		const _cmdV7s30UU = undefined;
		const _returnValue0FqGMi = null;
		const _visibleOptionsnlaao7o = () => { return _returnValue0FqGMi };
		const _returnValueWxlKWP = "rR";
		const _optionTermiXFVbOJ = () => { return _returnValueWxlKWP };
		const _helperxZDTjCs = {
			"visibleOptions": _visibleOptionsnlaao7o,
		"optionTerm": _optionTermiXFVbOJ
	}
		const _returnValuelIOChff = await _HelpGBjmMoA.longestOptionTermLength(_cmdV7s30UU, _helperxZDTjCs)
		const _returnValuezPhnCo = undefined;
		const _nameGDjFNTW = () => { return _returnValuezPhnCo };
		const _argumentahRmK7m = {
			"name": _nameGDjFNTW
	}
		const _returnValueiAZh9sw = await _HelpGBjmMoA.argumentTerm(_argumentahRmK7m)
	});

	it('test for Help', async () => {
		const _HelplX3EyQk = new Help()
		const _arrayValue9NFq3U = null;
		const _arrayValueFiBTL3a = null;
		const _arrayValue0ObpKy = {
		
	}
		const _arrayValue42XLkE = [_arrayValue0ObpKy]
		const _arrayValueDrnXid3 = {
		
	}
		const _arrayValueqjQ1I1p = [_arrayValue42XLkE, _arrayValueDrnXid3]
		const _returnValueEnUaQCz = [_arrayValue9NFq3U, _arrayValueFiBTL3a, _arrayValueqjQ1I1p]
		const _descriptionjjzRhA3 = () => { return _returnValueEnUaQCz };
		const _cmd95t3ui = {
			"description": _descriptionjjzRhA3
	}
		const _returnValueEeOAdbj = await _HelplX3EyQk.subcommandDescription(_cmd95t3ui)
		const _options5NIIEB = {
		
	}
		const __hasHelpOptionjPOwHno = 9.151682451653691;
		const __helpShortFlagMjiSEO4 = "5cYmY9rsS9o";
		const _returnValueVqg0W8q = -9.366845174031457;
		const _returnValueZwpxJO6 = () => { return _returnValueVqg0W8q };
		const __findOptionccz1yKe = () => { return _returnValueZwpxJO6 };
		const __helpLongFlagSk2ZzUV = {
		
	}
		const _arrayValueOaXB9RO = "SRNAQ2E2yHyxifDMwehBQ1hK28g8h7LFMS2Zf1o";
		const _returnValuev0rMRF7 = [_arrayValueOaXB9RO]
		const _createOptionS75oMsE = () => { return _returnValuev0rMRF7 };
		const __helpDescriptionE3VvZYb = []
		const __helpFlagsyOSnTwL = 1.2314810098655862;
		const _cmdrBIDZW = {
			"options": _options5NIIEB,
		"_hasHelpOption": __hasHelpOptionjPOwHno,
		"_helpShortFlag": __helpShortFlagMjiSEO4,
		"_findOption": __findOptionccz1yKe,
		"_helpLongFlag": __helpLongFlagSk2ZzUV,
		"createOption": _createOptionS75oMsE,
		"_helpDescription": __helpDescriptionE3VvZYb,
		"_helpFlags": __helpFlagsyOSnTwL
	}
		const _returnValueqlvBQiZ = await _HelplX3EyQk.visibleOptions(_cmdrBIDZW)
		const __argsDescriptionKIAJ1cU = {
		
	}
		const __argsL0jlOgb = {
		
	}
		const _cmdANSmL5i = {
			"_argsDescription": __argsDescriptionKIAJ1cU,
		"_args": __argsL0jlOgb
	}
		const _returnValuezktHWLv = await _HelplX3EyQk.visibleArguments(_cmdANSmL5i)
		const _returnValuesvbCJkc = "4LF3x5TWdhULH6gb4KCw5wgqVOlxTSfjz8ajDu8PmAbyrJ2BL9RypQbeCxdLSUlqSrePqMFw8vwIxyMQIcqUCSWvV";
		const _description7JBqWa = () => { return _returnValuesvbCJkc };
		const _cmdYJIS61Z = {
			"description": _description7JBqWa
	}
		const _returnValuesJSX4p1 = await _HelplX3EyQk.subcommandDescription(_cmdYJIS61Z)
	});

	it('test for Help', async () => {
		const _HelpahmITFa = new Help()
		const __namePG3FLbh = {
		
	}
		const __aliasesXO5jpE = {
		
	}
		const _returnValuezYSyygT = false;
		const _returnValueST1vvg5 = () => { return _returnValuezYSyygT };
		const _parentEPcFST2 = () => { return _returnValueST1vvg5 };
		const _returnValueWiAiL12 = false;
		const _usageMb5qKpe = () => { return _returnValueWiAiL12 };
		const _cmdkonahbm = {
			"_name": __namePG3FLbh,
		"_aliases": __aliasesXO5jpE,
		"parent": _parentEPcFST2,
		"usage": _usageMb5qKpe
	}
		const _returnValueux7X2Xp = await _HelpahmITFa.commandUsage(_cmdkonahbm)
		const __nameVZriopW = {
		
	}
		const __aliasesBWwZCFi = true;
		const _parentdmy9r06 = {
		
	}
		const _returnValuewrOYkAd = 7.945782270939208;
		const _usagevZcTJ74 = () => { return _returnValuewrOYkAd };
		const _cmd7GQHrr = {
			"_name": __nameVZriopW,
		"_aliases": __aliasesBWwZCFi,
		"parent": _parentdmy9r06,
		"usage": _usagevZcTJ74
	}
		const _returnValuettMSr6b = await _HelpahmITFa.commandUsage(_cmd7GQHrr)
		const _argChoicesLaYEzxF = {
		
	}
		const _negateAa28Lj5 = 5.674054749631434;
		const _defaultValueKEwYsfW = undefined;
		const _defaultValueDescriptionVswmAkR = "RLooD8dlIYDtdzUXbaspOEoVL2jkc87C5WdaOUHRXBaRcJi7ucBAs1ITGB5I4eQCaNNk2Ri3PjF1l";
		const _envVarfl9q5mz = undefined;
		const _arrayValuesnPtXQf = "TEnrNcfYh5";
		const _descriptionBqsQK5C = [_arrayValuesnPtXQf]
		const _optionEfxSWnb = {
			"argChoices": _argChoicesLaYEzxF,
		"negate": _negateAa28Lj5,
		"defaultValue": _defaultValueKEwYsfW,
		"defaultValueDescription": _defaultValueDescriptionVswmAkR,
		"envVar": _envVarfl9q5mz,
		"description": _descriptionBqsQK5C
	}
		const _returnValueHHZM1Ym = await _HelpahmITFa.optionDescription(_optionEfxSWnb)
		const _returnValueq7ntHHI = null;
		const _namekVluWCi = () => { return _returnValueq7ntHHI };
		const _argumentCBPhXM6 = {
			"name": _namekVluWCi
	}
		const _returnValuexlsgOyL = await _HelpahmITFa.argumentTerm(_argumentCBPhXM6)
	});

	it('test for Help', async () => {
		const _HelpvnOcdRc = new Help()
		const _argChoicesxr2ADaK = {
		
	}
		const _negateecU0iWi = null;
		const _defaultValueESqY0mL = undefined;
		const _arrayValuedxncdRg = -9.267491467436628;
		const _defaultValueDescriptioneWQ7huh = [_arrayValuedxncdRg]
		const _envVarFHUhvGV = undefined;
		const _descriptionLhlPL2 = null;
		const _optionpImU40h = {
			"argChoices": _argChoicesxr2ADaK,
		"negate": _negateecU0iWi,
		"defaultValue": _defaultValueESqY0mL,
		"defaultValueDescription": _defaultValueDescriptioneWQ7huh,
		"envVar": _envVarFHUhvGV,
		"description": _descriptionLhlPL2
	}
		const _returnValueAYR3sif = await _HelpvnOcdRc.optionDescription(_optionpImU40h)
		const _flagsooU5fu6 = 0.10672466993517382;
		const _optionrAgMpgC = {
			"flags": _flagsooU5fu6
	}
		const _returnValueistAQ8f = await _HelpvnOcdRc.optionTerm(_optionrAgMpgC)
		const _cmdF4ouF1u = null;
		const _arrayValueqdyqW56 = true;
		const _arrayValuei1WzfsG = undefined;
		const _arrayValueRE162Ex = null;
		const _arrayValuePNyp1DB = [_arrayValueqdyqW56, _arrayValuei1WzfsG, _arrayValueRE162Ex]
		const _arrayValuedTP7uF6 = -5.963115996532633;
		const _arrayValueRlOLMKN = "tpUJ1CnufTeI7hpa2Y62bJeRKlRSR7camWoJ0dqYLxHZgJ8zVyC27oAt872UvYd2JQvvaESuZp4w";
		const _returnValueYO8hZq0 = [_arrayValuePNyp1DB, _arrayValuedTP7uF6, _arrayValueRlOLMKN]
		const _visibleOptionsmkrOFoH = () => { return _returnValueYO8hZq0 };
		const _returnValueQSsLjg5 = undefined;
		const _optionTermqyLIMpQ = () => { return _returnValueQSsLjg5 };
		const _helperLN9gsy = {
			"visibleOptions": _visibleOptionsmkrOFoH,
		"optionTerm": _optionTermqyLIMpQ
	}
		const _returnValueIW3wpH = await _HelpvnOcdRc.longestOptionTermLength(_cmdF4ouF1u, _helperLN9gsy)
		const __nameo52WpPv = {
		
	}
		const __aliasesb3QKvab = {
		
	}
		const _parentzoIzOjU = {
		
	}
		const _returnValueP1JNkoN = null;
		const _usagewiyvTlj = () => { return _returnValueP1JNkoN };
		const _cmdVTvO2Tv = {
			"_name": __nameo52WpPv,
		"_aliases": __aliasesb3QKvab,
		"parent": _parentzoIzOjU,
		"usage": _usagewiyvTlj
	}
		const _returnValue3IYplM = await _HelpvnOcdRc.commandUsage(_cmdVTvO2Tv)
	});

	it('test for Help', async () => {
		const _HelpHF0sjfb = new Help()
		const _cmdYKUqFN2 = null;
		const _returnValuek4DiW8e = null;
		const _visibleOptionsKNjuQ20 = () => { return _returnValuek4DiW8e };
		const _returnValueL5NGAr = 6.846953314181615;
		const _optionTermXE9UUr = () => { return _returnValueL5NGAr };
		const _helperhyR4dqA = {
			"visibleOptions": _visibleOptionsKNjuQ20,
		"optionTerm": _optionTermXE9UUr
	}
		const _returnValueLACJKlP = await _HelpHF0sjfb.longestOptionTermLength(_cmdYKUqFN2, _helperhyR4dqA)
		const _cmdoeQPDk = undefined;
		const _returnValuetEfS2EX = await _HelpHF0sjfb.subcommandDescription(_cmdoeQPDk)
		const _arrayValueRXCMWQ6 = -5.682805939612457;
		const _arrayValueW5ydnkx = false;
		const _arrayValueNoLeeMk = -9.127835882953468;
		const _returnValueTUWdLj9 = [_arrayValueRXCMWQ6, _arrayValueW5ydnkx, _arrayValueNoLeeMk]
		const _descriptionKT8nQXG = () => { return _returnValueTUWdLj9 };
		const _cmdbQt2jwg = {
			"description": _descriptionKT8nQXG
	}
		const _returnValuekfv9K4z = await _HelpHF0sjfb.commandDescription(_cmdbQt2jwg)
		const _optionsiIaLQYM = {
		
	}
		const _returnValueD285VXK = -1.2288655173252323;
		const __hasHelpOptionfmKUTBL = () => { return _returnValueD285VXK };
		const __helpShortFlagiJ7y4A0 = {
		
	}
		const _returnValueRaLE22Y = undefined;
		const __findOptionw8WXEX9 = () => { return _returnValueRaLE22Y };
		const __helpLongFlagVCU0Vnq = "fiY9YCWZy4RsoX4hF4zhDmVJcKRgk";
		const _returnValuej8KM70j = null;
		const _createOptionfwDt30b = () => { return _returnValuej8KM70j };
		const __helpDescriptionnNU96k2 = false;
		const __helpFlagsgOsqnN = null;
		const _cmdkEnSeOl = {
			"options": _optionsiIaLQYM,
		"_hasHelpOption": __hasHelpOptionfmKUTBL,
		"_helpShortFlag": __helpShortFlagiJ7y4A0,
		"_findOption": __findOptionw8WXEX9,
		"_helpLongFlag": __helpLongFlagVCU0Vnq,
		"createOption": _createOptionfwDt30b,
		"_helpDescription": __helpDescriptionnNU96k2,
		"_helpFlags": __helpFlagsgOsqnN
	}
		const _returnValuewpmA8SD = await _HelpHF0sjfb.visibleOptions(_cmdkEnSeOl)
		const _flagst67SY7F = 0.013648619430020048;
		const _optionlNp8CR = {
			"flags": _flagst67SY7F
	}
		const _returnValuewluLQt2 = await _HelpHF0sjfb.optionTerm(_optionlNp8CR)
	});

	it('test for Help', async () => {
		const _HelpsY1vAUn = new Help()
		const _flagsi3BQ9d5 = -1.187640033799866;
		const _optionHDJnpmV = {
			"flags": _flagsi3BQ9d5
	}
		const _returnValueC9485lT = await _HelpsY1vAUn.optionTerm(_optionHDJnpmV)
		const _returnValuea1NBfF = "4x1TcK4XS3BXqhzwxx7lCTkH0bH";
		const _returnValueC5qCC5G = () => { return _returnValuea1NBfF };
		const _cmdLzknVM = () => { return _returnValueC5qCC5G };
		const _returnValueK7XSFD7 = "P9LHnRCSRClOo2xa79QDJaOQiiq7hrxBjyKBMzWKUmL0rahzquW7cqCGsbKlkr6GvNG51";
		const _longestOptionTermLengthdCa8V1o = () => { return _returnValueK7XSFD7 };
		const _returnValueLZTHGdi = "1TDPouWeLX";
		const _longestSubcommandTermLengthrtJRw5 = () => { return _returnValueLZTHGdi };
		const _returnValued6WwOvt = {
		
	}
		const _longestArgumentTermLengthFHyl7wN = () => { return _returnValued6WwOvt };
		const _helperVPlnIV5 = {
			"longestOptionTermLength": _longestOptionTermLengthdCa8V1o,
		"longestSubcommandTermLength": _longestSubcommandTermLengthrtJRw5,
		"longestArgumentTermLength": _longestArgumentTermLengthFHyl7wN
	}
		const _returnValuec1yNUI7 = await _HelpsY1vAUn.padWidth(_cmdLzknVM, _helperVPlnIV5)
		const _argChoicese1ByGyT = {
		
	}
		const _returnValueVgtI0qL = "N9gphfM";
		const _arrayValuePe1DXw = () => { return _returnValueVgtI0qL };
		const _arrayValueXksVLTF = false;
		const _arrayValueap9f3M7 = "WYcDwJHeeoKMxsNieMElTCSLeZv3ztL7MS8moIwHwyYAP0YStvPjTgHcZgjN";
		const _arrayValueQiuCxfx = null;
		const _arrayValuev6yjCih = [_arrayValueXksVLTF, _arrayValueap9f3M7, _arrayValueQiuCxfx]
		const _negateOY7sjn9 = [_arrayValuePe1DXw, _arrayValuev6yjCih]
		const _defaultValued044qJC = undefined;
		const _defaultValueDescriptionQGjEMJb = {
		
	}
		const _envVarupoPyJJ = undefined;
		const _arrayValueSU5PpOi = undefined;
		const _arrayValueK1vJwXL = -1.7698873903312489;
		const _arrayValuecd1kN50 = [_arrayValueSU5PpOi, _arrayValueK1vJwXL]
		const _returnValuernMhwg3 = {
		
	}
		const _arrayValueQnzqtCk = () => { return _returnValuernMhwg3 };
		const _arrayValuezwrXaQa = undefined;
		const _descriptionrUnu79 = [_arrayValuecd1kN50, _arrayValueQnzqtCk, _arrayValuezwrXaQa]
		const _optionbf1Akfd = {
			"argChoices": _argChoicese1ByGyT,
		"negate": _negateOY7sjn9,
		"defaultValue": _defaultValued044qJC,
		"defaultValueDescription": _defaultValueDescriptionQGjEMJb,
		"envVar": _envVarupoPyJJ,
		"description": _descriptionrUnu79
	}
		const _returnValuexXxDSu8 = await _HelpsY1vAUn.optionDescription(_optionbf1Akfd)
	});

	it('test for Help', async () => {
		const _HelpuNCjVsT = new Help()
		const _returnValuetQzbHe = undefined;
		const _descriptionxNDekN = () => { return _returnValuetQzbHe };
		const _cmdPxH4ac = {
			"description": _descriptionxNDekN
	}
		const _returnValueY1Xum8W = await _HelpuNCjVsT.commandDescription(_cmdPxH4ac)
		const _commandsSXvL3Y = {
		
	}
		const _returnValueMNmu8a7 = false;
		const _returnValuejhjj29H = () => { return _returnValueMNmu8a7 };
		const __hasImplicitHelpCommandlXyyPEP = () => { return _returnValuejhjj29H };
		const __helpCommandnameAndArgsmR5JSkM = {
		
	}
		const _returnValuerMCbef5 = null;
		const _returnValueEF7lXtd = () => { return _returnValuerMCbef5 };
		const _createCommands8yoYQs = () => { return _returnValueEF7lXtd };
		const _arrayValueqbEuZMY = -8.59969434339971;
		const _arrayValueer1DYz1 = undefined;
		const __helpCommandDescriptiondXJ0EeO = [_arrayValueqbEuZMY, _arrayValueer1DYz1]
		const _cmdhgn23lD = {
			"commands": _commandsSXvL3Y,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandlXyyPEP,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsmR5JSkM,
		"createCommand": _createCommands8yoYQs,
		"_helpCommandDescription": __helpCommandDescriptiondXJ0EeO
	}
		const _returnValueoIVvsgF = await _HelpuNCjVsT.visibleCommands(_cmdhgn23lD)
		const __nameNmXw2yX = {
		
	}
		const __aliasesf6O3X6r = {
		
	}
		const _parentVdAluxn = {
		
	}
		const _usageXhw6GLc = -7.871138451404182;
		const _cmdkKr90Vt = {
			"_name": __nameNmXw2yX,
		"_aliases": __aliasesf6O3X6r,
		"parent": _parentVdAluxn,
		"usage": _usageXhw6GLc
	}
		const _returnValueVEUtesn = await _HelpuNCjVsT.commandUsage(_cmdkKr90Vt)
		const __argsGVHOZC3 = {
		
	}
		const __nameLUUeYFv = -5.110661716271461;
		const __aliasesAibkhMV = {
		
	}
		const _optionsaUA1F4u = {
		
	}
		const _cmdYx5Szsh = {
			"_args": __argsGVHOZC3,
		"_name": __nameLUUeYFv,
		"_aliases": __aliasesAibkhMV,
		"options": _optionsaUA1F4u
	}
		const _returnValuewGqAlP = await _HelpuNCjVsT.subcommandTerm(_cmdYx5Szsh)
	});

	it('test for Help', async () => {
		const _HelpDYZ89Nx = new Help()
		const _cmdUmkjp3K = undefined;
		const _sortSubcommandsHJVjgsa = "qcF8Xm2sNuC8WESqnCYh3CEweYO";
		const _returnValueCG0VQG = undefined;
		const _subcommandTermkGmZ1cw = () => { return _returnValueCG0VQG };
		const _helperQ6rxPP = {
			"sortSubcommands": _sortSubcommandsHJVjgsa,
		"subcommandTerm": _subcommandTermkGmZ1cw
	}
		const _returnValueMoGaS2s = await _HelpDYZ89Nx.longestSubcommandTermLength(_cmdUmkjp3K, _helperQ6rxPP)
		const _cmdzsJyrjh = {
		
	}
		const _sortSubcommandsnOtuSWp = undefined;
		const _returnValueCah24Mz = 3.5951743983045965;
		const _subcommandTermXQ3zPaK = () => { return _returnValueCah24Mz };
		const _helpermUkILH = {
			"sortSubcommands": _sortSubcommandsnOtuSWp,
		"subcommandTerm": _subcommandTermXQ3zPaK
	}
		const _returnValuezMIxHo2 = await _HelpDYZ89Nx.formatHelp(_cmdzsJyrjh, _helpermUkILH)
		const __argsDescriptionPmcU88F = {
		
	}
		const __argsJnYbnFH = {
		
	}
		const _cmdX0mrayj = {
			"_argsDescription": __argsDescriptionPmcU88F,
		"_args": __argsJnYbnFH
	}
		const _returnValueS8StqK9 = await _HelpDYZ89Nx.visibleArguments(_cmdX0mrayj)
		const _returnValuevsSbCZe = false;
		const _arrayValuegYZ6WMv = () => { return _returnValuevsSbCZe };
		const _arrayValueRiZRJ02 = null;
		const _cmdgplMx0o = [_arrayValuegYZ6WMv, _arrayValueRiZRJ02]
		const _returnValuevxjrPil = await _HelpDYZ89Nx.commandUsage(_cmdgplMx0o)
		const _cmdTuCR8R = {
		
	}
		const _sortSubcommandsd320jcW = -8.5694769837093;
		const _returnValuem40Db8g = undefined;
		const _subcommandTermlvooHU5 = () => { return _returnValuem40Db8g };
		const _helper9s2hRT = {
			"sortSubcommands": _sortSubcommandsd320jcW,
		"subcommandTerm": _subcommandTermlvooHU5
	}
		const _returnValuerZYfzb = await _HelpDYZ89Nx.formatHelp(_cmdTuCR8R, _helper9s2hRT)
	});

	it('test for Help', async () => {
		const _HelpcIlLPc = new Help()
		const _flagsKpWHHml = undefined;
		const _optionRbGqEz0 = {
			"flags": _flagsKpWHHml
	}
		const _returnValueXRGalP = await _HelpcIlLPc.optionTerm(_optionRbGqEz0)
		const _returnValueBuEtUVT = false;
		const _nameC9j1JV4 = () => { return _returnValueBuEtUVT };
		const _argumentAj6WR1 = {
			"name": _nameC9j1JV4
	}
		const _returnValueJGKRpG7 = await _HelpcIlLPc.argumentTerm(_argumentAj6WR1)
		const _arrayValuenQhAud = -3.1481473944009846;
		const _returnValuedbf2OJ = [_arrayValuenQhAud]
		const _matchsL29led = () => { return _returnValuedbf2OJ };
		const _returnValueClIZXby = null;
		const _substrKdqYbjP = () => { return _returnValueClIZXby };
		const _strUYpSo3m = {
			"match": _matchsL29led,
		"substr": _substrKdqYbjP
	}
		const _widthNJxeU5N = -2.498867770612355;
		const _indentdwBxFfM = -9.920207988096896;
		const _minColumnWidthVYVMcx4 = 8.607097394912032;
		const _returnValuenHY8Trf = await _HelpcIlLPc.wrap(_strUYpSo3m, _widthNJxeU5N, _indentdwBxFfM, _minColumnWidthVYVMcx4)
		const __nameGPDQt5c = {
		
	}
		const __aliasesW57j9P = undefined;
		const _parentwpJ6TyE = null;
		const _returnValueKSKewvZ = undefined;
		const _usagezuDX2eP = () => { return _returnValueKSKewvZ };
		const _cmdiJ8ea05 = {
			"_name": __nameGPDQt5c,
		"_aliases": __aliasesW57j9P,
		"parent": _parentwpJ6TyE,
		"usage": _usagezuDX2eP
	}
		const _returnValues3cONHZ = await _HelpcIlLPc.commandUsage(_cmdiJ8ea05)
	});

	it('test for Help', async () => {
		const _Helpw3pR6r0 = new Help()
		const _returnValueOp1X9sp = 7.274824322530449;
		const _argumentoxBnkva = () => { return _returnValueOp1X9sp };
		const _returnValuenc66NaG = await _Helpw3pR6r0.argumentDescription(_argumentoxBnkva)
		const __argsDescriptionH7gKgtA = {
		
	}
		const __argsow1zayc = {
		
	}
		const _cmdvgPgTaM = {
			"_argsDescription": __argsDescriptionH7gKgtA,
		"_args": __argsow1zayc
	}
		const _returnValueyftU8dJ = await _Helpw3pR6r0.visibleArguments(_cmdvgPgTaM)
		const __namemCFRLQ = {
		
	}
		const __aliasesaKHdBdI = {
		
	}
		const _parentFnsNn4d = {
		
	}
		const _returnValueoaoe9jz = undefined;
		const _returnValuezXu1uCI = () => { return _returnValueoaoe9jz };
		const _usageAuPC5vi = () => { return _returnValuezXu1uCI };
		const _cmdvikmB4 = {
			"_name": __namemCFRLQ,
		"_aliases": __aliasesaKHdBdI,
		"parent": _parentFnsNn4d,
		"usage": _usageAuPC5vi
	}
		const _returnValueCY0LpN8 = await _Helpw3pR6r0.commandUsage(_cmdvikmB4)
		const __argsQK8LSA = {
		
	}
		const __namewzQ7ThP = 3.519858436682547;
		const __aliasesXt4If4h = {
		
	}
		const _optionsZZ8i0yN = {
		
	}
		const _cmdI1ybnFT = {
			"_args": __argsQK8LSA,
		"_name": __namewzQ7ThP,
		"_aliases": __aliasesXt4If4h,
		"options": _optionsZZ8i0yN
	}
		const _returnValueLLmSTO = await _Helpw3pR6r0.subcommandTerm(_cmdI1ybnFT)
	});

	it('test for Help', async () => {
		const _HelpxLSf9qK = new Help()
		const _arrayValuezSLisr2 = "azFMZlWOBtYQshra2VDAAimSl7wCK1SXmI7OXRzGBn9YWzxB5OoJDrWt32oAADjeHs4uGeS";
		const _optionsCgcsLVX = [_arrayValuezSLisr2]
		const _arrayValueHgn1gVk = {
		
	}
		const __hasHelpOptionijQEcgB = [_arrayValueHgn1gVk]
		const __helpShortFlagMuIYDKo = {
		
	}
		const _returnValueJ1Y0bcS = 1.9603315380335307;
		const __findOptionqEc9zed = () => { return _returnValueJ1Y0bcS };
		const __helpLongFlagsXmCu28 = null;
		const _returnValueq8VERTY = undefined;
		const _createOptionPWUHuDo = () => { return _returnValueq8VERTY };
		const __helpDescriptionDEAQXC = "zWl5OsdaR8Cn4WVAF1dGxg9tXE48p8CmQBLWzogzMTatRVahbo27ek";
		const _arrayValueJjli2K = null;
		const _arrayValuerApAAfT = -9.368832855201292;
		const _arrayValuehCpO42 = 9.300938763931011;
		const __helpFlagsKdXmeiA = [_arrayValueJjli2K, _arrayValuerApAAfT, _arrayValuehCpO42]
		const _cmdnzEKIKs = {
			"options": _optionsCgcsLVX,
		"_hasHelpOption": __hasHelpOptionijQEcgB,
		"_helpShortFlag": __helpShortFlagMuIYDKo,
		"_findOption": __findOptionqEc9zed,
		"_helpLongFlag": __helpLongFlagsXmCu28,
		"createOption": _createOptionPWUHuDo,
		"_helpDescription": __helpDescriptionDEAQXC,
		"_helpFlags": __helpFlagsKdXmeiA
	}
		const _returnValuejl4ySte = await _HelpxLSf9qK.visibleOptions(_cmdnzEKIKs)
		const __argsDescriptioneIzaNU = {
		
	}
		const __args318KnF = {
		
	}
		const _cmdRRnN8RP = {
			"_argsDescription": __argsDescriptioneIzaNU,
		"_args": __args318KnF
	}
		const _returnValuev4GTGxo = await _HelpxLSf9qK.visibleArguments(_cmdRRnN8RP)
		const _cmdeJVYxeP = 5.029717619179943;
		const _returnValueYWFYFq = {
		
	}
		const _returnValueBVp8pk = () => { return _returnValueYWFYFq };
		const _returnValuemgWJ7EP = () => { return _returnValueBVp8pk };
		const _returnValuekgul5D = () => { return _returnValuemgWJ7EP };
		const _visibleArgumentshmHvBVK = () => { return _returnValuekgul5D };
		const _returnValueolQQql = "KCNwz3wFD2asdcqD4a4RLdIJ";
		const _argumentTermKsLo6zJ = () => { return _returnValueolQQql };
		const _helperFyZ2mza = {
			"visibleArguments": _visibleArgumentshmHvBVK,
		"argumentTerm": _argumentTermKsLo6zJ
	}
		const _returnValueNs1yiWF = await _HelpxLSf9qK.longestArgumentTermLength(_cmdeJVYxeP, _helperFyZ2mza)
		const __nameqxb5JGw = {
		
	}
		const __aliasesOu2UyuD = {
		
	}
		const _parentscgYTR = {
		
	}
		const _usageQyKtvpN = null;
		const _cmdz1U3wE = {
			"_name": __nameqxb5JGw,
		"_aliases": __aliasesOu2UyuD,
		"parent": _parentscgYTR,
		"usage": _usageQyKtvpN
	}
		const _returnValuei9UiwZ = await _HelpxLSf9qK.commandUsage(_cmdz1U3wE)
	});

	it('test for Help', async () => {
		const _HelpW6DHD15 = new Help()
		const _returnValueBD0WLsB = undefined;
		const _matchbGkhK4H = () => { return _returnValueBD0WLsB };
		const _returnValueEB1DyLD = true;
		const _substrmfbSH0I = () => { return _returnValueEB1DyLD };
		const _strqSwX1kg = {
			"match": _matchbGkhK4H,
		"substr": _substrmfbSH0I
	}
		const _widthPquoMEq = -4.715329923690689;
		const _indentcGcLupj = 0.24970561086790255;
		const _minColumnWidthZjhyuVU = -8.204571870886493;
		const _returnValueiPIShG4 = await _HelpW6DHD15.wrap(_strqSwX1kg, _widthPquoMEq, _indentcGcLupj, _minColumnWidthZjhyuVU)
		const __name4kZO3o = {
		
	}
		const __aliasesfZtHCtf = {
		
	}
		const _parentGYgJLSK = {
		
	}
		const _returnValuet4XahGD = undefined;
		const _usageqj1GYGQ = () => { return _returnValuet4XahGD };
		const _cmdYp56mRI = {
			"_name": __name4kZO3o,
		"_aliases": __aliasesfZtHCtf,
		"parent": _parentGYgJLSK,
		"usage": _usageqj1GYGQ
	}
		const _returnValueiqeWZZg = await _HelpW6DHD15.commandUsage(_cmdYp56mRI)
		const _returnValueJ9nbu3C = []
		const _cmdeY1rhm4 = () => { return _returnValueJ9nbu3C };
		const _returnValuepAdKfHJ = await _HelpW6DHD15.visibleOptions(_cmdeY1rhm4)
		const _argChoicesJZ9OUlQ = {
		
	}
		const _defaultValueO7ZbUFl = undefined;
		const _defaultValueDescriptionYtfVG2Z = false;
		const _arrayValueSmli97h = false;
		const _arrayValueGFTI5K8 = undefined;
		const _descriptionw3r26j4 = [_arrayValueSmli97h, _arrayValueGFTI5K8]
		const _argumentnksOGIG = {
			"argChoices": _argChoicesJZ9OUlQ,
		"defaultValue": _defaultValueO7ZbUFl,
		"defaultValueDescription": _defaultValueDescriptionYtfVG2Z,
		"description": _descriptionw3r26j4
	}
		const _returnValueOjnlva = await _HelpW6DHD15.argumentDescription(_argumentnksOGIG)
		const _optionsaMeqXZp = {
		
	}
		const _arrayValueODVgWl2 = "6joLdjThfOS8XKqAPMEGX9v3ERVgCI";
		const _arrayValuezYjWmM8 = {
		
	}
		const _arrayValueu1l6Mya = [_arrayValuezYjWmM8]
		const _arrayValueGTqln6T = true;
		const __hasHelpOptionsqgNQM = [_arrayValueODVgWl2, _arrayValueu1l6Mya, _arrayValueGTqln6T]
		const __helpShortFlagmMoDJLW = undefined;
		const __findOptionCpxSjm = undefined;
		const __helpLongFlagRl2a853 = undefined;
		const _returnValueJ3O2Ujh = "iV5a6WHLfNE741KVOQiswzi52GrlkY65zRpD19nth55KdJ6owHgMROdIORB405NBsNaajn1qCXWRjIQM4u8";
		const _createOptionPIWAaKw = () => { return _returnValueJ3O2Ujh };
		const __helpDescriptionYnDei7E = []
		const _arrayValueiVhzdPD = null;
		const __helpFlagsKL8BkNi = [_arrayValueiVhzdPD]
		const _cmdIdYssgz = {
			"options": _optionsaMeqXZp,
		"_hasHelpOption": __hasHelpOptionsqgNQM,
		"_helpShortFlag": __helpShortFlagmMoDJLW,
		"_findOption": __findOptionCpxSjm,
		"_helpLongFlag": __helpLongFlagRl2a853,
		"createOption": _createOptionPIWAaKw,
		"_helpDescription": __helpDescriptionYnDei7E,
		"_helpFlags": __helpFlagsKL8BkNi
	}
		const _returnValueIgyCDvI = await _HelpW6DHD15.visibleOptions(_cmdIdYssgz)
	});

	it('test for Help', async () => {
		const _HelpshH9YFv = new Help()
		const __name6t6ZOC = {
		
	}
		const __aliasesP8SAeDe = "7u4mJtj3aYy7dXtqE5uIWUv7Tgazq2fQOTJi73";
		const _parentU6XwRhI = {
		
	}
		const _arrayValueKvsMiCW = "tbUlF8TRBAQGn0wQaABEmuEMuf";
		const _arrayValuepX1dqBm = [_arrayValueKvsMiCW]
		const _returnValuebwr3Itw = [_arrayValuepX1dqBm]
		const _usagejS8Tko1 = () => { return _returnValuebwr3Itw };
		const _cmdGAlyye = {
			"_name": __name6t6ZOC,
		"_aliases": __aliasesP8SAeDe,
		"parent": _parentU6XwRhI,
		"usage": _usagejS8Tko1
	}
		const _returnValueERKJX0G = await _HelpshH9YFv.commandUsage(_cmdGAlyye)
		const _flagsh7sZjeK = null;
		const _optiono2rxd5c = {
			"flags": _flagsh7sZjeK
	}
		const _returnValuegwcXXM = await _HelpshH9YFv.optionTerm(_optiono2rxd5c)
		const _cmdZywH9LI = "luewCYY03ec7DX5NEDmhAakSL7gXywLQ49SmB56Lw";
		const _sortSubcommandsYqfcKcZ = true;
		const _returnValueT3hUS7e = 6.668055947622509;
		const _subcommandTermPXEGVsg = () => { return _returnValueT3hUS7e };
		const _helperVwHLWXS = {
			"sortSubcommands": _sortSubcommandsYqfcKcZ,
		"subcommandTerm": _subcommandTermPXEGVsg
	}
		const _returnValuemIDvfbe = await _HelpshH9YFv.formatHelp(_cmdZywH9LI, _helperVwHLWXS)
		const _commandsWpz2s2G = {
		
	}
		const _returnValueLEEC8E3 = "Z1jeAb5KBvGv9zf";
		const __hasImplicitHelpCommandXTtr72f = () => { return _returnValueLEEC8E3 };
		const __helpCommandnameAndArgsyIA3u3K = {
		
	}
		const _returnValuexXR4JHq = "K";
		const _createCommandXQQRJbp = () => { return _returnValuexXR4JHq };
		const __helpCommandDescriptionSDDTbyP = "9ayUxA8rWWNVtHrsdLvq3VNtOr7yJhrmSI3KzCgpwhrhueajkqmJXTbqYE2HBqSbGoP9C";
		const _cmdxKxZCD = {
			"commands": _commandsWpz2s2G,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandXTtr72f,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsyIA3u3K,
		"createCommand": _createCommandXQQRJbp,
		"_helpCommandDescription": __helpCommandDescriptionSDDTbyP
	}
		const _returnValueLTqpAyO = await _HelpshH9YFv.visibleCommands(_cmdxKxZCD)
	});

	it('test for Help', async () => {
		const _HelpA70uiow = new Help()
		const _returnValueOhLL6KG = undefined;
		const _descriptionZKcre4 = () => { return _returnValueOhLL6KG };
		const _cmdrJxMhRH = {
			"description": _descriptionZKcre4
	}
		const _returnValuexoXbUaQ = await _HelpA70uiow.commandDescription(_cmdrJxMhRH)
		const _optionsu4ONwav = []
		const __hasHelpOptionFLpS5ma = true;
		const __helpShortFlagviAybQi = undefined;
		const _returnValueUYJyz5Y = null;
		const __findOptionhOQ7iev = () => { return _returnValueUYJyz5Y };
		const __helpLongFlagvZIYOmy = false;
		const _createOptionGI2z46q = undefined;
		const __helpDescriptionJprWdMc = "6XJTEp1ui7BkfTdfNNL15TC761Ib6fsRHJqgJKVLkZFhxiAsZNQfcsqQXed65MaR1NbjiCtFzrcFp5Skk4IhgHxXRh";
		const __helpFlagsKFr6VT9 = null;
		const _cmdJBkbd4P = {
			"options": _optionsu4ONwav,
		"_hasHelpOption": __hasHelpOptionFLpS5ma,
		"_helpShortFlag": __helpShortFlagviAybQi,
		"_findOption": __findOptionhOQ7iev,
		"_helpLongFlag": __helpLongFlagvZIYOmy,
		"createOption": _createOptionGI2z46q,
		"_helpDescription": __helpDescriptionJprWdMc,
		"_helpFlags": __helpFlagsKFr6VT9
	}
		const _returnValueEUo6hsn = await _HelpA70uiow.visibleOptions(_cmdJBkbd4P)
		const _returnValueRSRl6Ga = undefined;
		const _descriptionxDjodC = () => { return _returnValueRSRl6Ga };
		const _cmdIqmUP8 = {
			"description": _descriptionxDjodC
	}
		const _returnValueXkVhIGU = await _HelpA70uiow.subcommandDescription(_cmdIqmUP8)
		const _argChoicesZvMHuSQ = null;
		const _defaultValueOFlzcXu = undefined;
		const _arrayValue5nvvxf = {
		
	}
		const _arrayValueTDqKGoG = "mJGvda0pBdxPsfjULps11hHLD22z1IckQ5oz3U2qNbPEtOqzLL";
		const _arrayValueYnTNLLg = "IsbHzSkpyxrmY";
		const _defaultValueDescriptionBWcs0Cu = [_arrayValue5nvvxf, _arrayValueTDqKGoG, _arrayValueYnTNLLg]
		const _descriptionsuAex3r = null;
		const _argumentiALXPJQ = {
			"argChoices": _argChoicesZvMHuSQ,
		"defaultValue": _defaultValueOFlzcXu,
		"defaultValueDescription": _defaultValueDescriptionBWcs0Cu,
		"description": _descriptionsuAex3r
	}
		const _returnValueV35MM24 = await _HelpA70uiow.argumentDescription(_argumentiALXPJQ)
		const _cmdVFpK20N = undefined;
		const _longestOptionTermLength1JCZ8P = "uejT3fV4WduulHrFfaQEJ3NM7feM4SU3vTn2Lc5LDg2oXNPDTp1J1os4tT7";
		const _returnValuehku0EXz = undefined;
		const _longestSubcommandTermLengthhk03070 = () => { return _returnValuehku0EXz };
		const _returnValuelzwoXps = "nx8tgb0A2ILDYVzI6iW9LFEIwrUr2d1q2DbabjLogEIYxEDB5s2y472xfUErtyufQEgSISIpoe1hWs9MLPBp9Fvu";
		const _returnValueEFcxEru = () => { return _returnValuelzwoXps };
		const _longestArgumentTermLengthVEjrWjz = () => { return _returnValueEFcxEru };
		const _helperPKbQBlJ = {
			"longestOptionTermLength": _longestOptionTermLength1JCZ8P,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhk03070,
		"longestArgumentTermLength": _longestArgumentTermLengthVEjrWjz
	}
		const _returnValue7ZYmXK = await _HelpA70uiow.padWidth(_cmdVFpK20N, _helperPKbQBlJ)
	});

	it('test for Help', async () => {
		const _HelpbPdCTTC = new Help()
		const _arrayValuePwgCFl4 = true;
		const _arrayValuewK0MfUj = "Ieh0XiBWGCAeCDabzHvDjyjpQ2Js0ARaI";
		const _argChoicesTD4GV2m = [_arrayValuePwgCFl4, _arrayValuewK0MfUj]
		const _defaultValueLQi7WF2 = undefined;
		const _returnValuegPFUNLw = undefined;
		const _defaultValueDescriptionu8wPer = () => { return _returnValuegPFUNLw };
		const _arrayValuewtnLm4C = false;
		const _descriptionpNLLd2z = [_arrayValuewtnLm4C]
		const _argumentDq0FIO = {
			"argChoices": _argChoicesTD4GV2m,
		"defaultValue": _defaultValueLQi7WF2,
		"defaultValueDescription": _defaultValueDescriptionu8wPer,
		"description": _descriptionpNLLd2z
	}
		const _returnValueCqB6RVv = await _HelpbPdCTTC.argumentDescription(_argumentDq0FIO)
		const _cmdhUUHfXx = false;
		const _sortSubcommandsbNHMjIL = 9.391912673451245;
		const _returnValuenCENXmD = undefined;
		const _subcommandTermvGvo2K = () => { return _returnValuenCENXmD };
		const _helperoqWsSpa = {
			"sortSubcommands": _sortSubcommandsbNHMjIL,
		"subcommandTerm": _subcommandTermvGvo2K
	}
		const _returnValueAzbcN6Q = await _HelpbPdCTTC.longestSubcommandTermLength(_cmdhUUHfXx, _helperoqWsSpa)
		const _cmdNKquvE7 = 7.048309290833178;
		const _returnValueMdbWrAy = undefined;
		const _visibleArgumentsC2HloyZ = () => { return _returnValueMdbWrAy };
		const _argumentTermKuNrwGS = null;
		const _helpernLHYBw4 = {
			"visibleArguments": _visibleArgumentsC2HloyZ,
		"argumentTerm": _argumentTermKuNrwGS
	}
		const _returnValuePrv0pvD = await _HelpbPdCTTC.longestArgumentTermLength(_cmdNKquvE7, _helpernLHYBw4)
		const __namePH41QXB = {
		
	}
		const __aliasesO3GRahr = {
		
	}
		const _parentDoAsW31 = {
		
	}
		const _usageGqSmGQ = true;
		const _cmduq6pBcw = {
			"_name": __namePH41QXB,
		"_aliases": __aliasesO3GRahr,
		"parent": _parentDoAsW31,
		"usage": _usageGqSmGQ
	}
		const _returnValuesedNpc = await _HelpbPdCTTC.commandUsage(_cmduq6pBcw)
	});
})