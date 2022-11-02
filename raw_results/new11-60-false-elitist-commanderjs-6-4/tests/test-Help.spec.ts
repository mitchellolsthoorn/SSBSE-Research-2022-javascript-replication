export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpcgdilH = new Help()
		const _cmdOmzRiwQ = "UQ4Gb6oVxXWRGRMqGA3rRX2awdJJkzgxureUHbVhVsfEEvNzkKvYUB3bLnUH0jAyk6DpNf9CD5AVJY2tn6Ibkgmf15N7zWzt";
		const _sortSubcommandsjtsMKzH = true;
		const _returnValuesCnNju = undefined;
		const _subcommandTermBg195Y = () => { return _returnValuesCnNju };
		const _helperw5Pc5jZ = {
			"sortSubcommands": _sortSubcommandsjtsMKzH,
		"subcommandTerm": _subcommandTermBg195Y
	}
		const _returnValuehk8oSwN = await _HelpcgdilH.formatHelp(_cmdOmzRiwQ, _helperw5Pc5jZ)
		const _cmdmnlCZ9c = false;
		const _helperJ7SgbG2 = "xfFGP5rl5ejuaLxz3LN4KlXVPRvIysG6Bl3uXIFjluwqmXSmUEMjrqqO";
		const _returnValuevAKGxER = await _HelpcgdilH.longestOptionTermLength(_cmdmnlCZ9c, _helperJ7SgbG2)
		const _returnValueIGBOUc = false;
		const _descriptionupf8hAK = () => { return _returnValueIGBOUc };
		const _cmdPq7H1Xn = {
			"description": _descriptionupf8hAK
	}
		const _returnValueLaQgDo = await _HelpcgdilH.commandDescription(_cmdPq7H1Xn)
		const _cmdGiCgY27 = "34m0N8gR549lhSocsEDvGSLzLm8wKBearFrwEIWPGYVePatnQFxUMiX3l4YtW8AWxJc5Ee3sYp93u";
		const _returnValue8vcG8G = "XAdIhDcCjGLBHFxiB68HyCPwujMIk1Rv30jTRH8WvGYTFn8azEqNuzfE";
		const _sortSubcommandsAMf79i = () => { return _returnValue8vcG8G };
		const _returnValuezQY38QJ = false;
		const _subcommandTermtG1Ms6r = () => { return _returnValuezQY38QJ };
		const _helperYhSqwAN = {
			"sortSubcommands": _sortSubcommandsAMf79i,
		"subcommandTerm": _subcommandTermtG1Ms6r
	}
		const _returnValuefVzGNcI = await _HelpcgdilH.formatHelp(_cmdGiCgY27, _helperYhSqwAN)
	});

	it('test for Help', async () => {
		const _HelpAEv8in8 = new Help()
		const _argChoicesnk7V7Mh = {
		
	}
		const _defaultValueSbAG7Zh = undefined;
		const _defaultValueDescriptione7qKCl6 = "EuI9WCzUdnKUFeHmUtQH7SAEUXn9Q52Beq3KPUkVlUnc2S2s2Du4ymntf5XzGNBfIWttMeVfr2K";
		const _descriptionL5q4iH8 = undefined;
		const _argumentAN6nGa = {
			"argChoices": _argChoicesnk7V7Mh,
		"defaultValue": _defaultValueSbAG7Zh,
		"defaultValueDescription": _defaultValueDescriptione7qKCl6,
		"description": _descriptionL5q4iH8
	}
		const _returnValueqvXKexq = await _HelpAEv8in8.argumentDescription(_argumentAN6nGa)
		const _cmdNizZrgm = null;
		const _sortSubcommandswc8BxGU = "2O7R2GSHeL2eispwsBwS4LahnugEOaRH6Q4dPVNHTU2E5Qrz6dhd1dIfqqi2mlEIpEsJUsyiO3vzqyv2N7RMRLgOUCvf4lSe";
		const _returnValues07pSec = -1.6886954971577346;
		const _subcommandTermg1B4ARU = () => { return _returnValues07pSec };
		const _helper2U1AYN = {
			"sortSubcommands": _sortSubcommandswc8BxGU,
		"subcommandTerm": _subcommandTermg1B4ARU
	}
		const _returnValueVqFpcq7 = await _HelpAEv8in8.longestSubcommandTermLength(_cmdNizZrgm, _helper2U1AYN)
		const _returnValueRQGO5Uq = null;
		const _nameCwCfTV4 = () => { return _returnValueRQGO5Uq };
		const _argumentm83Ff4P = {
			"name": _nameCwCfTV4
	}
		const _returnValueaPcgIbO = await _HelpAEv8in8.argumentTerm(_argumentm83Ff4P)
		const _arrayValueulB9GqQ = null;
		const _arrayValuebTfguOy = {
		
	}
		const _returnValueAzqPIzs = [_arrayValueulB9GqQ, _arrayValuebTfguOy]
		const _descriptionj4jeJ1 = () => { return _returnValueAzqPIzs };
		const _cmdFTjeil7 = {
			"description": _descriptionj4jeJ1
	}
		const _returnValueFZTJBkD = await _HelpAEv8in8.subcommandDescription(_cmdFTjeil7)
	});

	it('test for Help', async () => {
		const _HelpCrHF5ok = new Help()
		const __nameg8epnxq = {
		
	}
		const __aliasesaPyAFc = {
		
	}
		const _arrayValuexh6Ydp3 = undefined;
		const _parentheRhPqV = [_arrayValuexh6Ydp3]
		const _returnValueNaqwcfy = null;
		const _usagel2QzRyS = () => { return _returnValueNaqwcfy };
		const _cmdYh8M3fD = {
			"_name": __nameg8epnxq,
		"_aliases": __aliasesaPyAFc,
		"parent": _parentheRhPqV,
		"usage": _usagel2QzRyS
	}
		const _returnValuexJs6HI = await _HelpCrHF5ok.commandUsage(_cmdYh8M3fD)
		const _cmdK0jB1HR = undefined;
		const _returnValueWbtqd0P = []
		const _longestOptionTermLengthrUmzrjP = () => { return _returnValueWbtqd0P };
		const _returnValueAMu8aoo = 6.322231794941395;
		const _longestSubcommandTermLengthgLyfHc = () => { return _returnValueAMu8aoo };
		const _returnValueyFaagJd = false;
		const _longestArgumentTermLengthjPzeMgS = () => { return _returnValueyFaagJd };
		const _helpersWcjeYS = {
			"longestOptionTermLength": _longestOptionTermLengthrUmzrjP,
		"longestSubcommandTermLength": _longestSubcommandTermLengthgLyfHc,
		"longestArgumentTermLength": _longestArgumentTermLengthjPzeMgS
	}
		const _returnValueDzoHlna = await _HelpCrHF5ok.padWidth(_cmdK0jB1HR, _helpersWcjeYS)
		const _arrayValueaA8cZqx = false;
		const _arrayValuev3XXzQK = [_arrayValueaA8cZqx]
		const _cmdR0Aq3Rp = [_arrayValuev3XXzQK]
		const _returnValuepjEgP0 = "G2xelejbTN4RG87pa5b8cu1NObLbllbbAFBYd2uxdOlytM9gQAx7PUuhLuhfJbHH1y8A2Tf";
		const _visibleArgumentseW30Ef3 = () => { return _returnValuepjEgP0 };
		const _returnValueqq6kze = undefined;
		const _argumentTermBRvLFP2 = () => { return _returnValueqq6kze };
		const _helperNi1qYAw = {
			"visibleArguments": _visibleArgumentseW30Ef3,
		"argumentTerm": _argumentTermBRvLFP2
	}
		const _returnValueI3X6rSv = await _HelpCrHF5ok.longestArgumentTermLength(_cmdR0Aq3Rp, _helperNi1qYAw)
		const __argsCir0cX2 = {
		
	}
		const __nameO0ofUHY = -1.4680686496913058;
		const __aliasestR8QnuM = {
		
	}
		const _optionsSQJNOXM = {
		
	}
		const _cmd4gV7f7 = {
			"_args": __argsCir0cX2,
		"_name": __nameO0ofUHY,
		"_aliases": __aliasestR8QnuM,
		"options": _optionsSQJNOXM
	}
		const _returnValueTeJ3eVB = await _HelpCrHF5ok.subcommandTerm(_cmd4gV7f7)
		const _arrayValueL96ppVB = null;
		const _cmdlDbL3Zt = [_arrayValueL96ppVB]
		const _returnValuedBvipXx = undefined;
		const _visibleOptionsCSFpKFP = () => { return _returnValuedBvipXx };
		const _returnValuepwToaYA = 4.5078378749867465;
		const _optionTermP8jvWSa = () => { return _returnValuepwToaYA };
		const _helperryun8VW = {
			"visibleOptions": _visibleOptionsCSFpKFP,
		"optionTerm": _optionTermP8jvWSa
	}
		const _returnValuep7bOV3d = await _HelpCrHF5ok.longestOptionTermLength(_cmdlDbL3Zt, _helperryun8VW)
	});

	it('test for Help', async () => {
		const _Helpakq9kSS = new Help()
		const _arrayValueYT2xgO9 = undefined;
		const _arrayValueRTtqzIB = -3.519042202515391;
		const _returnValueXOtLm1d = [_arrayValueYT2xgO9, _arrayValueRTtqzIB]
		const _descriptionbELSihn = () => { return _returnValueXOtLm1d };
		const _cmdcwrUVO6 = {
			"description": _descriptionbELSihn
	}
		const _returnValueviwk9cC = await _Helpakq9kSS.commandDescription(_cmdcwrUVO6)
		const _cmdo8IX83x = 6.835810340421972;
		const _arrayValueklYoki7 = true;
		const _arrayValueMOydlCq = false;
		const _arrayValueiixdhl = undefined;
		const _sortSubcommandsNZ6OliR = [_arrayValueklYoki7, _arrayValueMOydlCq, _arrayValueiixdhl]
		const _returnValuewJT1flg = "ENPalj2qQ6uL1BrotXpTnoXMVQCiEntQr92IDYN9dlclJTIrstgQfkOIMGt1SqRPfHhI7cfWTIBK";
		const _subcommandTermYeZPWKq = () => { return _returnValuewJT1flg };
		const _helperJ7C3Vq = {
			"sortSubcommands": _sortSubcommandsNZ6OliR,
		"subcommandTerm": _subcommandTermYeZPWKq
	}
		const _returnValueFsf787g = await _Helpakq9kSS.formatHelp(_cmdo8IX83x, _helperJ7C3Vq)
		const _cmdlWdjEhe = -9.102940602256831;
		const _sortSubcommandsSqQaF9h = 2.5182674216799086;
		const _returnValueplZ0KDr = -3.425393159287264;
		const _subcommandTermmztLyO = () => { return _returnValueplZ0KDr };
		const _helperfMylbBV = {
			"sortSubcommands": _sortSubcommandsSqQaF9h,
		"subcommandTerm": _subcommandTermmztLyO
	}
		const _returnValueAWPRRz5 = await _Helpakq9kSS.longestSubcommandTermLength(_cmdlWdjEhe, _helperfMylbBV)
	});

	it('test for Help', async () => {
		const _HelpOvQrItZ = new Help()
		const _cmdth32b7j = {
		
	}
		const _returnValuemDhfqXL = "juGRd7IOkfiUDLdXtw";
		const _longestOptionTermLengthH2ykuhI = () => { return _returnValuemDhfqXL };
		const _returnValuezlvCarY = -7.954063128460115;
		const _longestSubcommandTermLengthTEZfg8z = () => { return _returnValuezlvCarY };
		const _arrayValuelb3UArg = -0.7771050623897935;
		const _returnValueGji0slS = [_arrayValuelb3UArg]
		const _longestArgumentTermLengthd3LaRhG = () => { return _returnValueGji0slS };
		const _helperoWsgYml = {
			"longestOptionTermLength": _longestOptionTermLengthH2ykuhI,
		"longestSubcommandTermLength": _longestSubcommandTermLengthTEZfg8z,
		"longestArgumentTermLength": _longestArgumentTermLengthd3LaRhG
	}
		const _returnValueZZiVaCh = await _HelpOvQrItZ.padWidth(_cmdth32b7j, _helperoWsgYml)
		const _returnValueEckwPnM = false;
		const _matcheLnMQKc = () => { return _returnValueEckwPnM };
		const _returnValueqyoOjM3 = true;
		const _substrOfXnj5T = () => { return _returnValueqyoOjM3 };
		const _stroNxoI2l = {
			"match": _matcheLnMQKc,
		"substr": _substrOfXnj5T
	}
		const _widthUaxNJFe = 3.654584405601618;
		const _indentRjXsk6v = undefined;
		const _minColumnWidthCAUwS0O = -7.259691572849788;
		const _returnValueItCtInW = await _HelpOvQrItZ.wrap(_stroNxoI2l, _widthUaxNJFe, _indentRjXsk6v, _minColumnWidthCAUwS0O)
		const _cmdoVPolk0 = -2.409347617183827;
		const _returnValueepKVmbN = await _HelpOvQrItZ.subcommandTerm(_cmdoVPolk0)
	});

	it('test for Help', async () => {
		const _HelpHP6Rmdj = new Help()
		const _cmdUVn0lsl = undefined;
		const _arrayValueoymxxcA = false;
		const _visibleOptionsIR6U3R = [_arrayValueoymxxcA]
		const _returnValueJPqvRaM = null;
		const _optionTermvgeaOXN = () => { return _returnValueJPqvRaM };
		const _helpert18eZ7l = {
			"visibleOptions": _visibleOptionsIR6U3R,
		"optionTerm": _optionTermvgeaOXN
	}
		const _returnValueLF465ks = await _HelpHP6Rmdj.longestOptionTermLength(_cmdUVn0lsl, _helpert18eZ7l)
		const _cmdWwZxh3r = []
		const _sortSubcommandsO5Z2IZh = "fyVeLFpA41knKlOUUpsCJRl5KcFCLmyqVJTAm3bQRWvrUAsMAmpxKEeFagaetNegenHKLtEoI6R4Ogi2nsbDc9MBAp4YJ";
		const _returnValuemQc2bT2 = true;
		const _returnValuem4nh11v = () => { return _returnValuemQc2bT2 };
		const _subcommandTermq3uSGGL = () => { return _returnValuem4nh11v };
		const _helperzxUn3r = {
			"sortSubcommands": _sortSubcommandsO5Z2IZh,
		"subcommandTerm": _subcommandTermq3uSGGL
	}
		const _returnValued1HIr4T = await _HelpHP6Rmdj.longestSubcommandTermLength(_cmdWwZxh3r, _helperzxUn3r)
	});

	it('test for Help', async () => {
		const _Helpaxka19o = new Help()
		const _cmdPLUHONF = -7.317195589730856;
		const _helperqrFfnPa = undefined;
		const _returnValuefdpLnsv = await _Helpaxka19o.longestSubcommandTermLength(_cmdPLUHONF, _helperqrFfnPa)
	});

	it('test for Help', async () => {
		const _HelpzfWDNC1 = new Help()
		const __argsvJ5jrk = {
		
	}
		const __nameA9JqN9L = 7.223645629003862;
		const __aliasesOdvVqwh = {
		
	}
		const _optionsVNxQlqR = {
		
	}
		const _cmdiJnL80m = {
			"_args": __argsvJ5jrk,
		"_name": __nameA9JqN9L,
		"_aliases": __aliasesOdvVqwh,
		"options": _optionsVNxQlqR
	}
		const _returnValueEipg2n0 = await _HelpzfWDNC1.subcommandTerm(_cmdiJnL80m)
		const _returnValueKdbwrri = "oo9gGHzwum4h";
		const _descriptionuxHHlzJ = () => { return _returnValueKdbwrri };
		const _cmdAc6UAGD = {
			"description": _descriptionuxHHlzJ
	}
		const _returnValueGHgQKup = await _HelpzfWDNC1.subcommandDescription(_cmdAc6UAGD)
		const _cmdpM1BPw3 = false;
		const _returnValuenPFQpPY = null;
		const _visibleArgumentsC8yah55 = () => { return _returnValuenPFQpPY };
		const _arrayValuerp8Q9PZ = undefined;
		const _arrayValueUBQ9IXQ = null;
		const _arrayValuejA4KoxK = undefined;
		const _arrayValueXGR8hl = false;
		const _arrayValueIFvx20T = [_arrayValuejA4KoxK, _arrayValueXGR8hl]
		const _returnValuef55Y6pF = [_arrayValuerp8Q9PZ, _arrayValueUBQ9IXQ, _arrayValueIFvx20T]
		const _argumentTermy6S5uN6 = () => { return _returnValuef55Y6pF };
		const _helperAfyTn5 = {
			"visibleArguments": _visibleArgumentsC8yah55,
		"argumentTerm": _argumentTermy6S5uN6
	}
		const _returnValueM7ujy0f = await _HelpzfWDNC1.longestArgumentTermLength(_cmdpM1BPw3, _helperAfyTn5)
	});

	it('test for Help', async () => {
		const _HelpTSvP2Je = new Help()
		const _returnValueEgRg6hT = true;
		const _matchLgy53w5 = () => { return _returnValueEgRg6hT };
		const _returnValueHYzyXAb = false;
		const _substryHOXr4 = () => { return _returnValueHYzyXAb };
		const _strQ4cdIGw = {
			"match": _matchLgy53w5,
		"substr": _substryHOXr4
	}
		const _widthFcuDr7N = -1.1445587476321748;
		const _indentSW2BchO = 7.740050740092531;
		const _minColumnWidthYVk7m2e = 3.7937134590753274;
		const _returnValueF41NMLH = await _HelpTSvP2Je.wrap(_strQ4cdIGw, _widthFcuDr7N, _indentSW2BchO, _minColumnWidthYVk7m2e)
		const __argsDescriptiontO3hSlD = {
		
	}
		const __argsRvqXuZN = {
		
	}
		const _cmdsgXsya = {
			"_argsDescription": __argsDescriptiontO3hSlD,
		"_args": __argsRvqXuZN
	}
		const _returnValueWuNsEg = await _HelpTSvP2Je.visibleArguments(_cmdsgXsya)
		const _returnValueTbIKqtY = -2.2543474207057104;
		const _descriptionHo9CTIz = () => { return _returnValueTbIKqtY };
		const _cmdZkljrT = {
			"description": _descriptionHo9CTIz
	}
		const _returnValueJ4IAEzf = await _HelpTSvP2Je.subcommandDescription(_cmdZkljrT)
		const __namehWIUYZh = {
		
	}
		const __aliaseshU7ycPG = {
		
	}
		const _parentcDgl2bL = {
		
	}
		const _returnValueDAjiW1h = true;
		const _usagezYl6tb4 = () => { return _returnValueDAjiW1h };
		const _cmdrquBjv3 = {
			"_name": __namehWIUYZh,
		"_aliases": __aliaseshU7ycPG,
		"parent": _parentcDgl2bL,
		"usage": _usagezYl6tb4
	}
		const _returnValueIzqSyRX = await _HelpTSvP2Je.commandUsage(_cmdrquBjv3)
	});

	it('test for Help', async () => {
		const _HelpK6hr0ON = new Help()
		const _optionsdef2piy = {
		
	}
		const __hasHelpOptionJjaSOvB = "pWIzGSKtwIuKvrzsoRPihBSktAlf6yMgVpXVDtxs122olDt4zCpPA4H1JLnz7iDbLIuYYi5Jdj3vzcM974BbCfh";
		const _arrayValueinz6cpM = -0.2325190255887737;
		const _arrayValueQPgSL2e = "lyLMauZp9UHYHbAkTcScsY2jW70msQvSjOhSA8G5mV570EA9MZG1TArS";
		const __helpShortFlagmwP9eaZ = [_arrayValueinz6cpM, _arrayValueQPgSL2e]
		const _returnValuebGytMaX = true;
		const __findOptionklbG4kE = () => { return _returnValuebGytMaX };
		const _returnValueYWKrYiq = "NhCD6KcSeLsY3yMRnDoStwlUOa9zvaGeDcCT9WKm4dCyzts2dWKJkkf5sGso";
		const __helpLongFlagBUegyKY = () => { return _returnValueYWKrYiq };
		const _returnValueJAt9Y0B = true;
		const _createOptiong9vNogV = () => { return _returnValueJAt9Y0B };
		const __helpDescriptionQI8OjN7 = null;
		const __helpFlagsozCELb6 = true;
		const _cmdrBf9nBt = {
			"options": _optionsdef2piy,
		"_hasHelpOption": __hasHelpOptionJjaSOvB,
		"_helpShortFlag": __helpShortFlagmwP9eaZ,
		"_findOption": __findOptionklbG4kE,
		"_helpLongFlag": __helpLongFlagBUegyKY,
		"createOption": _createOptiong9vNogV,
		"_helpDescription": __helpDescriptionQI8OjN7,
		"_helpFlags": __helpFlagsozCELb6
	}
		const _returnValueWzuAVOa = await _HelpK6hr0ON.visibleOptions(_cmdrBf9nBt)
		const _cmdehk8ZE5 = "kbQyXUNgvDxkD16OG7k7";
		const _returnValueNk5UjQC = "uaiFt8E37zOnFXZksuhlPcYV7KzInU4GKWoJFvBGNNN8ISvtYIvRmhssf55toxDFcUTc1sE34bQP6M4L2ajURNn2J7f";
		const _sortSubcommandsqCKxoB2 = () => { return _returnValueNk5UjQC };
		const _returnValuesgribuE = undefined;
		const _returnValuexyH0HQM = () => { return _returnValuesgribuE };
		const _subcommandTermVOb1zSO = () => { return _returnValuexyH0HQM };
		const _helperwkEITaz = {
			"sortSubcommands": _sortSubcommandsqCKxoB2,
		"subcommandTerm": _subcommandTermVOb1zSO
	}
		const _returnValuevtdcWIP = await _HelpK6hr0ON.longestSubcommandTermLength(_cmdehk8ZE5, _helperwkEITaz)
		const _arrayValueqIhUF2l = undefined;
		const _arrayValueHmbWOGw = "NlQmncqmcpfxVjTTF8KDSqKNS3Nwca5W2pb9qVn";
		const _returnValueH4oOvU5 = [_arrayValueqIhUF2l, _arrayValueHmbWOGw]
		const _nameH5wWX1B = () => { return _returnValueH4oOvU5 };
		const _argumentEK27Km = {
			"name": _nameH5wWX1B
	}
		const _returnValueoyk63Em = await _HelpK6hr0ON.argumentTerm(_argumentEK27Km)
	});

	it('test for Help', async () => {
		const _HelpjCsAf3k = new Help()
		const _cmdH6KwrgN = null;
		const _visibleArgumentsVaZtoqn = null;
		const _returnValueIKyZgYR = "U89hKERrjJkmeF52Cyz3osdyp3V1YxDvj3Wdk3AdkX78GznH9IpsWYoNvyB4YHDHVadrRWuOcf4lrgRXf5U";
		const _argumentTermbfFrMCc = () => { return _returnValueIKyZgYR };
		const _helperOTAE9Vj = {
			"visibleArguments": _visibleArgumentsVaZtoqn,
		"argumentTerm": _argumentTermbfFrMCc
	}
		const _returnValuegK3PiKQ = await _HelpjCsAf3k.longestArgumentTermLength(_cmdH6KwrgN, _helperOTAE9Vj)
		const _commandsANDbM4q = {
		
	}
		const _returnValuep1Xxk6l = {
		
	}
		const __hasImplicitHelpCommand8gCCpy = () => { return _returnValuep1Xxk6l };
		const __helpCommandnameAndArgsee536kc = {
		
	}
		const _returnValueKWOQGoL = undefined;
		const _createCommandsTK7axY = () => { return _returnValueKWOQGoL };
		const __helpCommandDescriptione2oyUsM = undefined;
		const _cmdkWCWCzv = {
			"commands": _commandsANDbM4q,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommand8gCCpy,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsee536kc,
		"createCommand": _createCommandsTK7axY,
		"_helpCommandDescription": __helpCommandDescriptione2oyUsM
	}
		const _returnValueesBpoi3 = await _HelpjCsAf3k.visibleCommands(_cmdkWCWCzv)
	});

	it('test for Help', async () => {
		const _Help952Vjv = new Help()
		const _argChoicesW6TFiqJ = {
		
	}
		const _negateT0ne9s = undefined;
		const _defaultValueKer2PpI = undefined;
		const _defaultValueDescriptionRMQTOmB = null;
		const _envVarOlJLWD = undefined;
		const _returnValueHLxpweF = undefined;
		const _descriptionbzNV543 = () => { return _returnValueHLxpweF };
		const _optionHrFzZfF = {
			"argChoices": _argChoicesW6TFiqJ,
		"negate": _negateT0ne9s,
		"defaultValue": _defaultValueKer2PpI,
		"defaultValueDescription": _defaultValueDescriptionRMQTOmB,
		"envVar": _envVarOlJLWD,
		"description": _descriptionbzNV543
	}
		const _returnValueMWQwRch = await _Help952Vjv.optionDescription(_optionHrFzZfF)
		const _returnValueldG4QgG = 7.049894358523947;
		const _descriptionOGQMsHe = () => { return _returnValueldG4QgG };
		const _cmdTndkP11 = {
			"description": _descriptionOGQMsHe
	}
		const _returnValuegYsBxGs = await _Help952Vjv.commandDescription(_cmdTndkP11)
		const _cmdvdv6dk4 = true;
		const _helpervxlNex = -3.608944057442871;
		const _returnValueBW6KALc = await _Help952Vjv.padWidth(_cmdvdv6dk4, _helpervxlNex)
	});

	it('test for Help', async () => {
		const _HelpXlOC79P = new Help()
		const _commandsoFB9fdz = {
		
	}
		const _returnValue98kLrm = "4jhPHQe5MPPbOYRE8biu9RaONCJGbzUr2NdaCH9lMXPQjtd1udvtDjcp1rc1OfwPgB4AqG35YnrDcbytMrkEjV4ouP8DWx5oE";
		const __hasImplicitHelpCommandPpwXfpI = () => { return _returnValue98kLrm };
		const __helpCommandnameAndArgsXMreuJI = {
		
	}
		const _returnValueOypQ909 = null;
		const _createCommandm0cH0Gv = () => { return _returnValueOypQ909 };
		const __helpCommandDescriptionIXAOOyC = null;
		const _cmde6cYBv1 = {
			"commands": _commandsoFB9fdz,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandPpwXfpI,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsXMreuJI,
		"createCommand": _createCommandm0cH0Gv,
		"_helpCommandDescription": __helpCommandDescriptionIXAOOyC
	}
		const _returnValueApJpbaK = await _HelpXlOC79P.visibleCommands(_cmde6cYBv1)
		const _nameA3EQbVR = undefined;
		const _argumentzJ444Nv = {
			"name": _nameA3EQbVR
	}
		const _returnValueYQ5KjfX = await _HelpXlOC79P.argumentTerm(_argumentzJ444Nv)
		const _returnValueoBk0WW = "4g4x30f5Ow6iR1sSMbqMVbI8LX1G3Ztcf3NhbjP1IRQyrMch7TY";
		const _descriptionhZUloM = () => { return _returnValueoBk0WW };
		const _cmdeswqCbW = {
			"description": _descriptionhZUloM
	}
		const _returnValuee6yd91D = await _HelpXlOC79P.subcommandDescription(_cmdeswqCbW)
	});

	it('test for Help', async () => {
		const _HelpwWFevha = new Help()
		const _cmdd0B0O5K = null;
		const _returnValueE8I7QtR = []
		const _visibleOptionsnX4QdD0 = () => { return _returnValueE8I7QtR };
		const _returnValueaIp7kCE = false;
		const _optionTermtjcKVZo = () => { return _returnValueaIp7kCE };
		const _helperJqjSQby = {
			"visibleOptions": _visibleOptionsnX4QdD0,
		"optionTerm": _optionTermtjcKVZo
	}
		const _returnValueizvpxIQ = await _HelpwWFevha.longestOptionTermLength(_cmdd0B0O5K, _helperJqjSQby)
		const _returnValuebsMENXQ = null;
		const _nameBJfqkXg = () => { return _returnValuebsMENXQ };
		const _argumentmEMPwAD = {
			"name": _nameBJfqkXg
	}
		const _returnValueBbQ2wtJ = await _HelpwWFevha.argumentTerm(_argumentmEMPwAD)
		const _commandsk7d9PXS = {
		
	}
		const _returnValueQ2pqUH = undefined;
		const __hasImplicitHelpCommandAf2HzrU = () => { return _returnValueQ2pqUH };
		const __helpCommandnameAndArgsOLkA3L = {
		
	}
		const _returnValueo6klSjZ = undefined;
		const _createCommandiptKYTB = () => { return _returnValueo6klSjZ };
		const __helpCommandDescriptionAdj5nNd = "hnNuaOZUMkQGm3TsfThSp0EqfPcj8mJGRC89oexHkFn0TjndPw5fymwLlh7U2i4BguhN7";
		const _cmdKxyx1VZ = {
			"commands": _commandsk7d9PXS,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandAf2HzrU,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsOLkA3L,
		"createCommand": _createCommandiptKYTB,
		"_helpCommandDescription": __helpCommandDescriptionAdj5nNd
	}
		const _returnValueo6Pry7T = await _HelpwWFevha.visibleCommands(_cmdKxyx1VZ)
	});

	it('test for Help', async () => {
		const _HelpzF6dqp3 = new Help()
		const _arrayValuegJm32T7 = null;
		const _arrayValuevfDJac = "io1OmchKw7uOvmkCShg0n8GUQa3hEBGXxMpjEmB615tWJyIneHMSSlL";
		const _arrayValueTdQqFN8 = 0.5664566558440516;
		const _cmdw0ETMr = [_arrayValuegJm32T7, _arrayValuevfDJac, _arrayValueTdQqFN8]
		const _arrayValuenKhl3fv = undefined;
		const _arrayValueJ2aowCw = false;
		const _arrayValueFGSFlWk = true;
		const _arrayValuejsGG5XL = {
		
	}
		const _arrayValueRPuMyD4 = null;
		const _arrayValueHVeHe44 = []
		const _arrayValuevK9ivBE = false;
		const _arrayValueK0elQqh = [_arrayValueHVeHe44, _arrayValuevK9ivBE]
		const _arrayValuep515Luj = []
		const _returnValuePdlnhwS = -2.2036011268105105;
		const _arrayValuesXEvlo = () => { return _returnValuePdlnhwS };
		const _arrayValuePDJRmdi = [_arrayValueRPuMyD4, _arrayValueK0elQqh, _arrayValuep515Luj, _arrayValuesXEvlo]
		const _arrayValueeZv7IU1 = [_arrayValueFGSFlWk, _arrayValuejsGG5XL, _arrayValuePDJRmdi]
		const _arrayValueXjPvnw1 = [_arrayValuenKhl3fv, _arrayValueJ2aowCw, _arrayValueeZv7IU1]
		const _returnValuecZHxk0Y = [_arrayValueXjPvnw1]
		const _visibleOptionsEixN9tz = () => { return _returnValuecZHxk0Y };
		const _returnValueo5NKQjQ = "7p21eCpztTvgQHyL1w9";
		const _optionTermMzLDopV = () => { return _returnValueo5NKQjQ };
		const _helperYeXM8Q2 = {
			"visibleOptions": _visibleOptionsEixN9tz,
		"optionTerm": _optionTermMzLDopV
	}
		const _returnValueFisEB0 = await _HelpzF6dqp3.longestOptionTermLength(_cmdw0ETMr, _helperYeXM8Q2)
		const _flagssI7sduq = -9.201414561146281;
		const _optionmY1eoje = {
			"flags": _flagssI7sduq
	}
		const _returnValueK2DMA95 = await _HelpzF6dqp3.optionTerm(_optionmY1eoje)
		const _cmdApNp3nJ = null;
		const _returnValueJPu24YY = "JXOXIJ5OylabGP5DVKKemqg";
		const _visibleOptionswnXqfZ7 = () => { return _returnValueJPu24YY };
		const _returnValuetpGCnqk = "GDyfFuysgPLqDL9pSddvcYsqiWpwnEx1Ft3aDIolALlPH2Ju";
		const _returnValueuMIyBi = () => { return _returnValuetpGCnqk };
		const _optionTermSs0wTeu = () => { return _returnValueuMIyBi };
		const _helperYk4SsFG = {
			"visibleOptions": _visibleOptionswnXqfZ7,
		"optionTerm": _optionTermSs0wTeu
	}
		const _returnValuebS0H7zh = await _HelpzF6dqp3.longestOptionTermLength(_cmdApNp3nJ, _helperYk4SsFG)
		const _cmdl5NwTYL = undefined;
		const _returnValueHc7ERh = await _HelpzF6dqp3.commandDescription(_cmdl5NwTYL)
		const _argChoiceslXwAnZ4 = "Ttb6VMesLPgqS5hOWtR1EAZ6wRt80EsdIU0NpX3dwJrHL0EBY1JR7iy43yC0xGr3jN";
		const _defaultValuewiQB2kv = undefined;
		const _defaultValueDescriptionxpqF8g2 = true;
		const _returnValueYnRVCOg = "uxtV2eepBF1CUSnJbWQowkLAa";
		const _descriptionJQsf5v5 = () => { return _returnValueYnRVCOg };
		const _argumentGHOFQr4 = {
			"argChoices": _argChoiceslXwAnZ4,
		"defaultValue": _defaultValuewiQB2kv,
		"defaultValueDescription": _defaultValueDescriptionxpqF8g2,
		"description": _descriptionJQsf5v5
	}
		const _returnValueLYw0LNo = await _HelpzF6dqp3.argumentDescription(_argumentGHOFQr4)
	});

	it('test for Help', async () => {
		const _HelpFrhIXm = new Help()
		const _argChoicesCsH326w = {
		
	}
		const _negateqq4e9x = 7.057110269049758;
		const _defaultValueAHmZyUj = undefined;
		const _defaultValueDescriptioncMO74NS = 9.233770641254164;
		const _envVarayY9DU = undefined;
		const _description1Lgzuy = undefined;
		const _optionojWPLsd = {
			"argChoices": _argChoicesCsH326w,
		"negate": _negateqq4e9x,
		"defaultValue": _defaultValueAHmZyUj,
		"defaultValueDescription": _defaultValueDescriptioncMO74NS,
		"envVar": _envVarayY9DU,
		"description": _description1Lgzuy
	}
		const _returnValue0iFNEK = await _HelpFrhIXm.optionDescription(_optionojWPLsd)
		const _cmdKoCyXgm = undefined;
		const _sortSubcommandsCHwWp5n = {
		
	}
		const _returnValueb2xzAaO = false;
		const _subcommandTermFcc2cj8 = () => { return _returnValueb2xzAaO };
		const _helperpyNMSN = {
			"sortSubcommands": _sortSubcommandsCHwWp5n,
		"subcommandTerm": _subcommandTermFcc2cj8
	}
		const _returnValueuPmPkO = await _HelpFrhIXm.formatHelp(_cmdKoCyXgm, _helperpyNMSN)
		const _returnValueSH7CoNj = false;
		const _cmdvoadoeZ = () => { return _returnValueSH7CoNj };
		const _sortSubcommands3gi9CK = null;
		const _returnValuevnZhGWg = undefined;
		const _subcommandTermyNnViDa = () => { return _returnValuevnZhGWg };
		const _helperkNkvLEx = {
			"sortSubcommands": _sortSubcommands3gi9CK,
		"subcommandTerm": _subcommandTermyNnViDa
	}
		const _returnValuePcLEoMI = await _HelpFrhIXm.longestSubcommandTermLength(_cmdvoadoeZ, _helperkNkvLEx)
		const __argsC6wSdK6 = {
		
	}
		const __namePzD6kVf = 0.713427593274794;
		const __aliasesZzRXNE9 = {
		
	}
		const _optionsTx4r4bB = {
		
	}
		const _cmdigGot2Q = {
			"_args": __argsC6wSdK6,
		"_name": __namePzD6kVf,
		"_aliases": __aliasesZzRXNE9,
		"options": _optionsTx4r4bB
	}
		const _returnValue3Y8bVn = await _HelpFrhIXm.subcommandTerm(_cmdigGot2Q)
		const _cmdbEoYe3 = null;
		const _returnValuembXQEb1 = 8.025568646069381;
		const _visibleArgumentsDSlDrC1 = () => { return _returnValuembXQEb1 };
		const _returnValueoTMe3jt = null;
		const _argumentTermSwoCwnu = () => { return _returnValueoTMe3jt };
		const _helperrVxO4P2 = {
			"visibleArguments": _visibleArgumentsDSlDrC1,
		"argumentTerm": _argumentTermSwoCwnu
	}
		const _returnValueEarPTDL = await _HelpFrhIXm.longestArgumentTermLength(_cmdbEoYe3, _helperrVxO4P2)
	});

	it('test for Help', async () => {
		const _HelpovW0Ki0 = new Help()
		const _returnValueZFzAide = true;
		const _descriptionIFE7pAB = () => { return _returnValueZFzAide };
		const _cmdUUL00UP = {
			"description": _descriptionIFE7pAB
	}
		const _returnValuev4Ci1el = await _HelpovW0Ki0.subcommandDescription(_cmdUUL00UP)
		const _optionsJpNKKZT = {
		
	}
		const _returnValueFGFmBOn = true;
		const __hasHelpOptionHvsHden = () => { return _returnValueFGFmBOn };
		const _arrayValueHBu4gS9 = "C33pr8mBiR4JYViis0YuLtLdy6PCthKAQeJjW1ZDFipN";
		const _arrayValueZXR3Ckh = true;
		const __helpShortFlagEGZOdv6 = [_arrayValueHBu4gS9, _arrayValueZXR3Ckh]
		const _returnValueyZQzYdf = "XdArf1SA8tUliNAHiBjhAjv3sCS7KwOnp";
		const __findOptionaSObLi = () => { return _returnValueyZQzYdf };
		const __helpLongFlagQsBYAzP = -8.51982422366661;
		const _returnValueMKCl5zS = false;
		const _createOptionTG2v7Z = () => { return _returnValueMKCl5zS };
		const __helpDescriptionjHHgS9K = -2.2659894415367665;
		const __helpFlagsEZcRkMX = 6.913030808488152;
		const _cmdT6TG1V1 = {
			"options": _optionsJpNKKZT,
		"_hasHelpOption": __hasHelpOptionHvsHden,
		"_helpShortFlag": __helpShortFlagEGZOdv6,
		"_findOption": __findOptionaSObLi,
		"_helpLongFlag": __helpLongFlagQsBYAzP,
		"createOption": _createOptionTG2v7Z,
		"_helpDescription": __helpDescriptionjHHgS9K,
		"_helpFlags": __helpFlagsEZcRkMX
	}
		const _returnValueG4KmPnB = await _HelpovW0Ki0.visibleOptions(_cmdT6TG1V1)
		const _returnValuedVDM3Rr = -4.6272067837465976;
		const _descriptionPVfR8GN = () => { return _returnValuedVDM3Rr };
		const _cmdYbWmzHP = {
			"description": _descriptionPVfR8GN
	}
		const _returnValuegrNFF1U = await _HelpovW0Ki0.commandDescription(_cmdYbWmzHP)
		const __argsHNGSMew = {
		
	}
		const __namewzHl5oI = 3.615219637185911;
		const __aliasesLGcmvlj = {
		
	}
		const _optionsl6ywOTq = {
		
	}
		const _cmdWveQXT = {
			"_args": __argsHNGSMew,
		"_name": __namewzHl5oI,
		"_aliases": __aliasesLGcmvlj,
		"options": _optionsl6ywOTq
	}
		const _returnValueJ9E7K3J = await _HelpovW0Ki0.subcommandTerm(_cmdWveQXT)
		const _commandszcJAoIi = {
		
	}
		const _returnValueAZdcakc = "9RMR78i8lyC6oVN85jiXTXe4PKmazkbzT5x4ioJN1bZI2cPdkn";
		const __hasImplicitHelpCommandVBlxisZ = () => { return _returnValueAZdcakc };
		const __helpCommandnameAndArgsVC85OFg = {
		
	}
		const _arrayValueYU72Mv = false;
		const _arrayValueSi9LV4F = "m3NEPdntgSEgEvSQ5zZUC9U6poHOD21BAGbRzPrfTYi9WQciwMHIL4U8K4Vaas";
		const _arrayValueUKIOrhZ = 4.055400253258906;
		const _returnValueJWY2tqC = [_arrayValueYU72Mv, _arrayValueSi9LV4F, _arrayValueUKIOrhZ]
		const _createCommandHXSBlUy = () => { return _returnValueJWY2tqC };
		const __helpCommandDescriptionM5itXJQ = null;
		const _cmdEFgaoi = {
			"commands": _commandszcJAoIi,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandVBlxisZ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsVC85OFg,
		"createCommand": _createCommandHXSBlUy,
		"_helpCommandDescription": __helpCommandDescriptionM5itXJQ
	}
		const _returnValuex5FWtxe = await _HelpovW0Ki0.visibleCommands(_cmdEFgaoi)
	});

	it('test for Help', async () => {
		const _HelpacjbVqv = new Help()
		const _argChoicesYY19BzJ = {
		
	}
		const _returnValueuKdQuq = null;
		const _negateB59IR0z = () => { return _returnValueuKdQuq };
		const _arrayValueb2wuYkK = -4.4567306651584815;
		const _arrayValuek7t03om = false;
		const _arrayValuevua8BaR = "MbIFmCs6vkYBnowBPQXe2HeUefe4Rnp8cD16VqeRsJpRQ9sgyrv9149leTKtKM7SuqPgVp9YNT5NmKqOReFqWs6eE9KupqPyYu";
		const _defaultValuekX07Mgq = [_arrayValueb2wuYkK, _arrayValuek7t03om, _arrayValuevua8BaR]
		const _returnValueTc5qmnO = true;
		const _defaultValueDescriptionPXVszsa = () => { return _returnValueTc5qmnO };
		const _envVari5hZ5Nw = undefined;
		const _descriptionY7sxiPv = "ljLd1dgExnLSa7s7RvGkKaGZgCLbQITrZJNmMqTQOr8RK9caZ4grClwCfyn0oQ8LOWjlaLhie5gO";
		const _optionthjgfTY = {
			"argChoices": _argChoicesYY19BzJ,
		"negate": _negateB59IR0z,
		"defaultValue": _defaultValuekX07Mgq,
		"defaultValueDescription": _defaultValueDescriptionPXVszsa,
		"envVar": _envVari5hZ5Nw,
		"description": _descriptionY7sxiPv
	}
		const _returnValueKc8JtL0 = await _HelpacjbVqv.optionDescription(_optionthjgfTY)
		const _argChoicesRnSouTT = undefined;
		const _defaultValueDXCAbWl = undefined;
		const _defaultValueDescriptionwjVTrz = null;
		const _arrayValueHsGTylD = null;
		const _arrayValuewVVFL6X = undefined;
		const _arrayValuet4Ru6tT = 5.393772419728862;
		const _descriptionr04yeVI = [_arrayValueHsGTylD, _arrayValuewVVFL6X, _arrayValuet4Ru6tT]
		const _argumentIB79p4B = {
			"argChoices": _argChoicesRnSouTT,
		"defaultValue": _defaultValueDXCAbWl,
		"defaultValueDescription": _defaultValueDescriptionwjVTrz,
		"description": _descriptionr04yeVI
	}
		const _returnValueKCijSC4 = await _HelpacjbVqv.argumentDescription(_argumentIB79p4B)
		const _cmdNv56N9m = 3.1192302920462147;
		const _returnValueA6AcXCN = await _HelpacjbVqv.visibleOptions(_cmdNv56N9m)
		const _argChoicesgoEGUE5 = {
		
	}
		const _negatexUcDoVr = {
		
	}
		const _defaultValuec7NfKDF = undefined;
		const _returnValueS03dqHX = 3.523016183730178;
		const _defaultValueDescriptionmwUkErk = () => { return _returnValueS03dqHX };
		const _envVaramHcbWs = undefined;
		const _descriptionDqgFHVG = undefined;
		const _optiontfMGZK = {
			"argChoices": _argChoicesgoEGUE5,
		"negate": _negatexUcDoVr,
		"defaultValue": _defaultValuec7NfKDF,
		"defaultValueDescription": _defaultValueDescriptionmwUkErk,
		"envVar": _envVaramHcbWs,
		"description": _descriptionDqgFHVG
	}
		const _returnValuefkWp1I = await _HelpacjbVqv.optionDescription(_optiontfMGZK)
	});

	it('test for Help', async () => {
		const _HelppfYthAD = new Help()
		const __namebsyH2Bx = {
		
	}
		const __aliasesIrhr6iE = "cgrPz7H99M6fYMo";
		const _parentZswZlKZ = {
		
	}
		const _returnValueZJWL5wk = 2.0956994540636025;
		const _usagerEFYo5n = () => { return _returnValueZJWL5wk };
		const _cmdlH8bC9N = {
			"_name": __namebsyH2Bx,
		"_aliases": __aliasesIrhr6iE,
		"parent": _parentZswZlKZ,
		"usage": _usagerEFYo5n
	}
		const _returnValueQRgreqV = await _HelppfYthAD.commandUsage(_cmdlH8bC9N)
		const _cmdXaAZB5n = null;
		const _sortSubcommandsILNVziy = null;
		const _returnValueCqCZSUA = false;
		const _subcommandTermxTgv0e = () => { return _returnValueCqCZSUA };
		const _helpertSL2ZFj = {
			"sortSubcommands": _sortSubcommandsILNVziy,
		"subcommandTerm": _subcommandTermxTgv0e
	}
		const _returnValueSyc3B67 = await _HelppfYthAD.formatHelp(_cmdXaAZB5n, _helpertSL2ZFj)
	});

	it('test for Help', async () => {
		const _HelpmbaPanw = new Help()
		const _returnValueNqlkihI = null;
		const _matchb859DbZ = () => { return _returnValueNqlkihI };
		const _returnValueq4FGIa8 = -6.8804452643805245;
		const _substrVKKhP6F = () => { return _returnValueq4FGIa8 };
		const _str4Wps2J = {
			"match": _matchb859DbZ,
		"substr": _substrVKKhP6F
	}
		const _widthh0FJHJH = -0.6743843341888187;
		const _indentK3qnDV8 = 3.0131325739504096;
		const _minColumnWidthiPGUGuL = 8.278983704402204;
		const _returnValueLwfIxtc = await _HelpmbaPanw.wrap(_str4Wps2J, _widthh0FJHJH, _indentK3qnDV8, _minColumnWidthiPGUGuL)
		const _arrayValueSMAEK5u = null;
		const _arrayValuea4Xunhf = {
		
	}
		const _arrayValueDZXxtq4 = false;
		const _cmdoM8pVi5 = [_arrayValueSMAEK5u, _arrayValuea4Xunhf, _arrayValueDZXxtq4]
		const _returnValueooNYGL6 = []
		const _visibleArgumentsVV7KGms = () => { return _returnValueooNYGL6 };
		const _returnValuewqViIYI = {
		
	}
		const _arrayValuetYzvs6p = () => { return _returnValuewqViIYI };
		const _arrayValueAEhLe1 = null;
		const _returnValueB7svd5T = [_arrayValuetYzvs6p, _arrayValueAEhLe1]
		const _argumentTermudKjmEX = () => { return _returnValueB7svd5T };
		const _helperI7eBZK2 = {
			"visibleArguments": _visibleArgumentsVV7KGms,
		"argumentTerm": _argumentTermudKjmEX
	}
		const _returnValueqsg3SvZ = await _HelpmbaPanw.longestArgumentTermLength(_cmdoM8pVi5, _helperI7eBZK2)
		const _cmdfDE5oq = undefined;
		const _arrayValueFMOAJh7 = -8.719749327081804;
		const _arrayValueFpxZjtF = null;
		const _returnValueVmJ7xfw = [_arrayValueFMOAJh7, _arrayValueFpxZjtF]
		const _sortSubcommandsm0AxYQN = () => { return _returnValueVmJ7xfw };
		const _returnValueAeDejlV = "sz4RophiYKPIuJVSx5bL54kY9";
		const _subcommandTerm4ZxKu2 = () => { return _returnValueAeDejlV };
		const _helperMuzDTpa = {
			"sortSubcommands": _sortSubcommandsm0AxYQN,
		"subcommandTerm": _subcommandTerm4ZxKu2
	}
		const _returnValueNqXXyaw = await _HelpmbaPanw.longestSubcommandTermLength(_cmdfDE5oq, _helperMuzDTpa)
		const _cmdWTNyN40 = 1.2015891407030352;
		const _sortSubcommandscFohSXl = true;
		const _returnValueVSC4gFT = null;
		const _subcommandTermHQw4Q5 = () => { return _returnValueVSC4gFT };
		const _helperqe0bcm = {
			"sortSubcommands": _sortSubcommandscFohSXl,
		"subcommandTerm": _subcommandTermHQw4Q5
	}
		const _returnValuehUuapnc = await _HelpmbaPanw.longestSubcommandTermLength(_cmdWTNyN40, _helperqe0bcm)
		const _arrayValuehSoCQCS = 8.310041026206147;
		const _arrayValueJuNg0jU = 4.896224570915187;
		const _cmdKbgGGQd = [_arrayValuehSoCQCS, _arrayValueJuNg0jU]
		const _returnValueN0OCGMq = await _HelpmbaPanw.subcommandTerm(_cmdKbgGGQd)
	});

	it('test for Help', async () => {
		const _HelpMa7GtPH = new Help()
		const _argChoicesw6pzWTv = {
		
	}
		const _negatesWp2s05 = 4.541852765919902;
		const _defaultValueRKPiHw6 = undefined;
		const _defaultValueDescriptionz8idjrb = 3.1566009781483473;
		const _envVargtPtsGF = 8.15001155500585;
		const _descriptionqPqdZ2l = undefined;
		const _optionD9qFaQU = {
			"argChoices": _argChoicesw6pzWTv,
		"negate": _negatesWp2s05,
		"defaultValue": _defaultValueRKPiHw6,
		"defaultValueDescription": _defaultValueDescriptionz8idjrb,
		"envVar": _envVargtPtsGF,
		"description": _descriptionqPqdZ2l
	}
		const _returnValueomdhK9R = await _HelpMa7GtPH.optionDescription(_optionD9qFaQU)
		const _argumenta0IXSP4 = false;
		const _returnValueIZfrBr = await _HelpMa7GtPH.argumentTerm(_argumenta0IXSP4)
		const _argChoiceshvHGzMv = {
		
	}
		const _defaultValueQwAlVYb = undefined;
		const _defaultValueDescriptionY68kyuF = false;
		const _descriptionpgaEozA = false;
		const _argumentvTOoQUy = {
			"argChoices": _argChoiceshvHGzMv,
		"defaultValue": _defaultValueQwAlVYb,
		"defaultValueDescription": _defaultValueDescriptionY68kyuF,
		"description": _descriptionpgaEozA
	}
		const _returnValueu6aEp7c = await _HelpMa7GtPH.argumentDescription(_argumentvTOoQUy)
		const _cmdHD0l9oZ = {
		
	}
		const _sortSubcommandshbRnO9 = 6.002072229831981;
		const _returnValuewbdtl6i = "awKnroKIJbhUICxCcHCnwxpwJ7cFts5ff3m51h";
		const _subcommandTermlTUM4GD = () => { return _returnValuewbdtl6i };
		const _helperqzAXmKw = {
			"sortSubcommands": _sortSubcommandshbRnO9,
		"subcommandTerm": _subcommandTermlTUM4GD
	}
		const _returnValueRcP0Uy = await _HelpMa7GtPH.longestSubcommandTermLength(_cmdHD0l9oZ, _helperqzAXmKw)
	});

	it('test for Help', async () => {
		const _HelplPwXKXo = new Help()
		const _optionB2EWBOj = 5.6800482009745075;
		const _returnValueM77Lz8u = await _HelplPwXKXo.optionDescription(_optionB2EWBOj)
		const _argChoicesTElHWg9 = {
		
	}
		const _negateCp9dOZR = "ulGeilh8djHa0X0J1OQtWl";
		const _defaultValuecnBAbVF = undefined;
		const _returnValueTDmE1m4 = null;
		const _defaultValueDescriptionmfIoWG7 = () => { return _returnValueTDmE1m4 };
		const _envVarw1RKJTz = undefined;
		const _descriptionYnPl3D = undefined;
		const _optionhUd0Hvh = {
			"argChoices": _argChoicesTElHWg9,
		"negate": _negateCp9dOZR,
		"defaultValue": _defaultValuecnBAbVF,
		"defaultValueDescription": _defaultValueDescriptionmfIoWG7,
		"envVar": _envVarw1RKJTz,
		"description": _descriptionYnPl3D
	}
		const _returnValueR2npG2b = await _HelplPwXKXo.optionDescription(_optionhUd0Hvh)
		const _argChoicesjrrYgmB = false;
		const _defaultValueJ31USJu = false;
		const _returnValuevs9owGE = undefined;
		const _arrayValueVVZxv8G = () => { return _returnValuevs9owGE };
		const _arrayValueJNePFc7 = undefined;
		const _arrayValuenCT4idP = null;
		const _arrayValueXbgWYsc = true;
		const _arrayValuest3lIUi = undefined;
		const _arrayValueUEg6FL = "m";
		const _arrayValueCnGydrn = 8.151663950153111;
		const _arrayValuekWwYHG1 = [_arrayValueCnGydrn]
		const _arrayValuemeXcD2x = -8.294759458178406;
		const _arrayValueoqEtTM = [_arrayValuemeXcD2x]
		const _arrayValueJUpSG2c = true;
		const _arrayValueFs850zz = [_arrayValueoqEtTM, _arrayValueJUpSG2c]
		const _arrayValuedkMGXCd = true;
		const _arrayValue9jwipA = undefined;
		const _arrayValueWE67UK = [_arrayValuekWwYHG1, _arrayValueFs850zz, _arrayValuedkMGXCd, _arrayValue9jwipA]
		const _arrayValueSNh2Cqf = [_arrayValuest3lIUi, _arrayValueUEg6FL, _arrayValueWE67UK]
		const _arrayValueppFidHG = [_arrayValuenCT4idP, _arrayValueXbgWYsc, _arrayValueSNh2Cqf]
		const _defaultValueDescriptionvN86rew = [_arrayValueVVZxv8G, _arrayValueJNePFc7, _arrayValueppFidHG]
		const _descriptionsoKV54j = 0.9299752766091665;
		const _argumentIlogw7 = {
			"argChoices": _argChoicesjrrYgmB,
		"defaultValue": _defaultValueJ31USJu,
		"defaultValueDescription": _defaultValueDescriptionvN86rew,
		"description": _descriptionsoKV54j
	}
		const _returnValuegcodnp = await _HelplPwXKXo.argumentDescription(_argumentIlogw7)
		const _cmdwLeXFXX = {
		
	}
		const _arrayValuesz25B4j = undefined;
		const _arrayValuefOUocZB = [_arrayValuesz25B4j]
		const _arrayValueQEEjxYq = "6PyOHckE1os13HakH34TX8UtGorrRiBltWfAP3O8vQn7Afb";
		const _returnValueqtAzZLZ = [_arrayValuefOUocZB, _arrayValueQEEjxYq]
		const _longestOptionTermLengthhOJh08m = () => { return _returnValueqtAzZLZ };
		const _returnValueRwfalC = -1.2646363234727627;
		const _longestSubcommandTermLengthUcRptd4 = () => { return _returnValueRwfalC };
		const _returnValuexXsQAy8 = false;
		const _longestArgumentTermLengthEE8f0hC = () => { return _returnValuexXsQAy8 };
		const _helperrgwjEH = {
			"longestOptionTermLength": _longestOptionTermLengthhOJh08m,
		"longestSubcommandTermLength": _longestSubcommandTermLengthUcRptd4,
		"longestArgumentTermLength": _longestArgumentTermLengthEE8f0hC
	}
		const _returnValueWCLKZvA = await _HelplPwXKXo.padWidth(_cmdwLeXFXX, _helperrgwjEH)
	});

	it('test for Help', async () => {
		const _Help0TuPBA = new Help()
		const _arrayValueqtHWc51 = true;
		const _arrayValueHorcZFE = "F0p7dGOTS091puxObcvy7dJcCuWOqLzyoW3Hs3yrYhlH8CAGeoVLwbK1ydoEAHlF4Jj84Y7HwNQupF";
		const _arrayValuexckmMpA = 6.563923094629313;
		const _commandsq2BUN7J = [_arrayValueqtHWc51, _arrayValueHorcZFE, _arrayValuexckmMpA]
		const _returnValueLL9TyIf = -5.516283198422877;
		const __hasImplicitHelpCommandCoG9ew = () => { return _returnValueLL9TyIf };
		const __helpCommandnameAndArgsdgYh23v = {
		
	}
		const _arrayValueJXrT2v1 = 0.2621331139466889;
		const _arrayValueiIIOGNN = -0.2006016770596002;
		const _arrayValuebQbVaqv = null;
		const _returnValueJXEvuWP = [_arrayValueJXrT2v1, _arrayValueiIIOGNN, _arrayValuebQbVaqv]
		const _createCommandhfaXT6p = () => { return _returnValueJXEvuWP };
		const __helpCommandDescriptionJBJva8i = 3.46142868723782;
		const _cmdnEw4lwT = {
			"commands": _commandsq2BUN7J,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandCoG9ew,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsdgYh23v,
		"createCommand": _createCommandhfaXT6p,
		"_helpCommandDescription": __helpCommandDescriptionJBJva8i
	}
		const _returnValuefHgjeg = await _Help0TuPBA.visibleCommands(_cmdnEw4lwT)
	});

	it('test for Help', async () => {
		const _Helptr8QjVP = new Help()
		const _optionssrcBjyQ = []
		const _arrayValuemLoLFwB = 1.983656193729873;
		const __hasHelpOptionBrjUbHr = [_arrayValuemLoLFwB]
		const __helpShortFlagdG69HsJ = 8.871961813856487;
		const _returnValueeoslX39 = null;
		const __findOptionkiQioEm = () => { return _returnValueeoslX39 };
		const __helpLongFlagNOGqAwz = 6.705258330805556;
		const _arrayValueXzMgOo4 = "FYcTc8zdzLKmIXCvX1C8uKc4EKKyIQFCBR";
		const _arrayValuev7Tyb6r = {
		
	}
		const _arrayValueixdcuME = null;
		const _returnValueugRS7Ae = []
		const _arrayValueiWcbScE = () => { return _returnValueugRS7Ae };
		const _arrayValueCuqzh6J = []
		const _arrayValuenADAqzO = undefined;
		const _arrayValueotjKwUv = [_arrayValueCuqzh6J, _arrayValuenADAqzO]
		const _arrayValueEFbcyYs = undefined;
		const _arrayValueP8wP2XU = [_arrayValueotjKwUv, _arrayValueEFbcyYs]
		const _returnValueJXywfb = [_arrayValueXzMgOo4, _arrayValuev7Tyb6r, _arrayValueixdcuME, _arrayValueiWcbScE, _arrayValueP8wP2XU]
		const _createOptionNY0coSK = () => { return _returnValueJXywfb };
		const __helpDescriptionq5Rn8nU = 2.7523913081074944;
		const __helpFlagsRQ9QeS5 = {
		
	}
		const _cmdXTd9ECv = {
			"options": _optionssrcBjyQ,
		"_hasHelpOption": __hasHelpOptionBrjUbHr,
		"_helpShortFlag": __helpShortFlagdG69HsJ,
		"_findOption": __findOptionkiQioEm,
		"_helpLongFlag": __helpLongFlagNOGqAwz,
		"createOption": _createOptionNY0coSK,
		"_helpDescription": __helpDescriptionq5Rn8nU,
		"_helpFlags": __helpFlagsRQ9QeS5
	}
		const _returnValueN4F4xXt = await _Helptr8QjVP.visibleOptions(_cmdXTd9ECv)
		const _matchxTu0JpR = true;
		const _returnValueblJekw8 = null;
		const _substrViFd00B = () => { return _returnValueblJekw8 };
		const _strU6Alkt3 = {
			"match": _matchxTu0JpR,
		"substr": _substrViFd00B
	}
		const _widthUOrhbo = 5.758566888562948;
		const _indentNZuZO4s = {
		
	}
		const _minColumnWidthS4uXfMW = 1.6585077006813975;
		const _returnValueUf26o4F = await _Helptr8QjVP.wrap(_strU6Alkt3, _widthUOrhbo, _indentNZuZO4s, _minColumnWidthS4uXfMW)
	});

	it('test for Help', async () => {
		const _HelpO8D3l5x = new Help()
		const _arrayValueLkgHceA = undefined;
		const _arrayValueU3wdvXW = [_arrayValueLkgHceA]
		const _arrayValueWbHstcg = false;
		const _commandsY3gFut8 = [_arrayValueU3wdvXW, _arrayValueWbHstcg]
		const _returnValueGnOQQ3R = undefined;
		const __hasImplicitHelpCommandqBqI4NX = () => { return _returnValueGnOQQ3R };
		const __helpCommandnameAndArgsBUD3pJy = {
		
	}
		const _returnValueCiM1Fu5 = {
		
	}
		const _createCommandBMk6mv4 = () => { return _returnValueCiM1Fu5 };
		const __helpCommandDescriptionGMvRkhx = null;
		const _cmdOowvFiE = {
			"commands": _commandsY3gFut8,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandqBqI4NX,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBUD3pJy,
		"createCommand": _createCommandBMk6mv4,
		"_helpCommandDescription": __helpCommandDescriptionGMvRkhx
	}
		const _returnValuew4eGDB = await _HelpO8D3l5x.visibleCommands(_cmdOowvFiE)
		const _cmddMeWITp = undefined;
		const _arrayValueMfjDGHO = undefined;
		const _returnValue60XOjH = [_arrayValueMfjDGHO]
		const _visibleOptionsxzg8Jv = () => { return _returnValue60XOjH };
		const _returnValueNZUC3h3 = -5.526876151064604;
		const _optionTermEVW4lLt = () => { return _returnValueNZUC3h3 };
		const _helperyVbH2hp = {
			"visibleOptions": _visibleOptionsxzg8Jv,
		"optionTerm": _optionTermEVW4lLt
	}
		const _returnValueqHY2hZg = await _HelpO8D3l5x.longestOptionTermLength(_cmddMeWITp, _helperyVbH2hp)
		const _flagsN5ROxBL = true;
		const _optionI6vYrsw = {
			"flags": _flagsN5ROxBL
	}
		const _returnValueI1qz9JG = await _HelpO8D3l5x.optionTerm(_optionI6vYrsw)
		const _cmdR9dDa6F = true;
		const _arrayValueQMo67EF = true;
		const _arrayValuebRE55Et = undefined;
		const _arrayValue6GJfbu = 8.28794329110045;
		const _helperVvQ6FbV = [_arrayValueQMo67EF, _arrayValuebRE55Et, _arrayValue6GJfbu]
		const _returnValueg8BTCNi = await _HelpO8D3l5x.padWidth(_cmdR9dDa6F, _helperVvQ6FbV)
	});

	it('test for Help', async () => {
		const _HelpRIfPZMT = new Help()
		const _argChoicesQEzCt1n = {
		
	}
		const _negateXF8V4v0 = -0.15617892872820605;
		const _defaultValueASuZdM7 = undefined;
		const _defaultValueDescription9QrKwx = undefined;
		const _envVarORo5B8 = undefined;
		const _descriptionoAsPyX2 = "B6nt75JEfUzTiDCl9NnjE7BkZ2XPMeqkzWL";
		const _optionPE9IUGH = {
			"argChoices": _argChoicesQEzCt1n,
		"negate": _negateXF8V4v0,
		"defaultValue": _defaultValueASuZdM7,
		"defaultValueDescription": _defaultValueDescription9QrKwx,
		"envVar": _envVarORo5B8,
		"description": _descriptionoAsPyX2
	}
		const _returnValueBw5Msyj = await _HelpRIfPZMT.optionDescription(_optionPE9IUGH)
		const _arrayValuelK9wiAD = -8.615153736159149;
		const _arrayValueJQJrh5 = -7.219714114110463;
		const _optionszzo1EcU = [_arrayValuelK9wiAD, _arrayValueJQJrh5]
		const __hasHelpOptionZwdrquD = 1.2120026663451107;
		const __helpShortFlagFjbpBG3 = null;
		const _returnValueVCSDIcQ = undefined;
		const __findOptionlQYeGl = () => { return _returnValueVCSDIcQ };
		const __helpLongFlagr288kCE = 2.847120848227643;
		const _returnValueGjFc7wk = false;
		const _createOptioninZ7qvQ = () => { return _returnValueGjFc7wk };
		const __helpDescriptiondPVTBGD = -0.7237116119480476;
		const __helpFlagshRrBQWA = undefined;
		const _cmdSYlVz5C = {
			"options": _optionszzo1EcU,
		"_hasHelpOption": __hasHelpOptionZwdrquD,
		"_helpShortFlag": __helpShortFlagFjbpBG3,
		"_findOption": __findOptionlQYeGl,
		"_helpLongFlag": __helpLongFlagr288kCE,
		"createOption": _createOptioninZ7qvQ,
		"_helpDescription": __helpDescriptiondPVTBGD,
		"_helpFlags": __helpFlagshRrBQWA
	}
		const _returnValueREESfJg = await _HelpRIfPZMT.visibleOptions(_cmdSYlVz5C)
		const __argsjXci2Hn = {
		
	}
		const __nameDKJxP5P = 7.739934127381947;
		const __aliasesKUPj9Y = {
		
	}
		const _optionsnP32xMM = {
		
	}
		const _cmdowYPVcT = {
			"_args": __argsjXci2Hn,
		"_name": __nameDKJxP5P,
		"_aliases": __aliasesKUPj9Y,
		"options": _optionsnP32xMM
	}
		const _returnValueC2YTobj = await _HelpRIfPZMT.subcommandTerm(_cmdowYPVcT)
	});
})