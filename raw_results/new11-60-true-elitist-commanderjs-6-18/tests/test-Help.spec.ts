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
		const _HelpfxF9Zcy = new Help()
		const _returnValueMMASYBT = null;
		const _descriptionEqhaHb = () => { return _returnValueMMASYBT };
		const _cmdpGqLb8J = {
			"description": _descriptionEqhaHb
	}
		const _returnValuexH2YOns = await _HelpfxF9Zcy.commandDescription(_cmdpGqLb8J)
		const __argsHMQc4DH = {
		
	}
		const __nameM6HJXx = -2.6570268982460092;
		const __aliasesf87Qb6l = {
		
	}
		const _optionsupruSgR = {
		
	}
		const _cmdJieEdk9 = {
			"_args": __argsHMQc4DH,
		"_name": __nameM6HJXx,
		"_aliases": __aliasesf87Qb6l,
		"options": _optionsupruSgR
	}
		const _returnValueSkhSqQL = await _HelpfxF9Zcy.subcommandTerm(_cmdJieEdk9)
	});

	it('test for Help', async () => {
		const _HelpsS94X2T = new Help()
		const __argsDescription7Y7Qwq = {
		
	}
		const __argsXNsq9El = {
		
	}
		const _cmdpQJ2cqD = {
			"_argsDescription": __argsDescription7Y7Qwq,
		"_args": __argsXNsq9El
	}
		const _returnValuelld5JWg = await _HelpsS94X2T.visibleArguments(_cmdpQJ2cqD)
	});

	it('test for Help', async () => {
		const _HelpbVRtcjR = new Help()
		const _cmdJd4nbJ5 = {
		
	}
		const _visibleOptionsTyykYpt = {
		
	}
		const _returnValueaBjvXsB = -7.8449348517690325;
		const _optionTerm5XIPDj = () => { return _returnValueaBjvXsB };
		const _helperki3xmwQ = {
			"visibleOptions": _visibleOptionsTyykYpt,
		"optionTerm": _optionTerm5XIPDj
	}
		const _returnValuewSKIXP = await _HelpbVRtcjR.longestOptionTermLength(_cmdJd4nbJ5, _helperki3xmwQ)
		const _commandsTmFzZ9F = {
		
	}
		const _returnValuebPFD1sQ = null;
		const __hasImplicitHelpCommandqSafzLT = () => { return _returnValuebPFD1sQ };
		const __helpCommandnameAndArgsd626MWp = {
		
	}
		const _arrayValueSjDWga = true;
		const _arrayValueQWasHeE = {
		
	}
		const _arrayValueXvQdqio = [_arrayValueQWasHeE]
		const _returnValuePewM10C = [_arrayValueSjDWga, _arrayValueXvQdqio]
		const _createCommandt3NKTtB = () => { return _returnValuePewM10C };
		const __helpCommandDescriptionKjoLMW = true;
		const _cmdNxKD1PO = {
			"commands": _commandsTmFzZ9F,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandqSafzLT,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsd626MWp,
		"createCommand": _createCommandt3NKTtB,
		"_helpCommandDescription": __helpCommandDescriptionKjoLMW
	}
		const _returnValueRMHwi8b = await _HelpbVRtcjR.visibleCommands(_cmdNxKD1PO)
	});

	it('test for Help', async () => {
		const _HelpUTVKfRY = new Help()
		const _cmdbKApvfC = -8.91829020292238;
		const _returnValueaIourMD = await _HelpUTVKfRY.visibleCommands(_cmdbKApvfC)
		const _returnValueqaWEot = 3.8732791529533106;
		const _descriptionHmUqyV4 = () => { return _returnValueqaWEot };
		const _cmdvIoQLjb = {
			"description": _descriptionHmUqyV4
	}
		const _returnValued9l9tWb = await _HelpUTVKfRY.commandDescription(_cmdvIoQLjb)
		const _commandsTD725ys = {
		
	}
		const _returnValueZ7QhOqG = {
		
	}
		const __hasImplicitHelpCommandD3pbE8H = () => { return _returnValueZ7QhOqG };
		const __helpCommandnameAndArgsWZDFgy9 = {
		
	}
		const _arrayValuewwENohr = null;
		const _arrayValuee8oyqCV = 2.1797628962934024;
		const _createCommandw16aOVB = [_arrayValuewwENohr, _arrayValuee8oyqCV]
		const __helpCommandDescriptionMv2nk8 = "jnwH64tBoBlNhwtsH9PDzCDTZ8kzvgkhlK2Aaqnfn29CXfj8QDmHKeZeoywJfqHTQ21g4tKfKfv7EQVlbF";
		const _cmdbiwI1u1 = {
			"commands": _commandsTD725ys,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandD3pbE8H,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsWZDFgy9,
		"createCommand": _createCommandw16aOVB,
		"_helpCommandDescription": __helpCommandDescriptionMv2nk8
	}
		const _returnValueTPEUP06 = await _HelpUTVKfRY.visibleCommands(_cmdbiwI1u1)
		const __argshFaIUlb = {
		
	}
		const __nameHWILuC = 9.65884860872714;
		const __aliasesG9shQuV = {
		
	}
		const _optionsR5lctVj = {
		
	}
		const _cmdt5Bx3Ub = {
			"_args": __argshFaIUlb,
		"_name": __nameHWILuC,
		"_aliases": __aliasesG9shQuV,
		"options": _optionsR5lctVj
	}
		const _returnValuelzMgL5w = await _HelpUTVKfRY.subcommandTerm(_cmdt5Bx3Ub)
	});

	it('test for Help', async () => {
		const _HelpyY56PYJ = new Help()
		const _argChoicesG6DzM5W = {
		
	}
		const _defaultValueg4X6IM6 = undefined;
		const _arrayValueBwH4374 = false;
		const _arrayValuekLvkfmB = -0.9053456581042525;
		const _arrayValuevfREusN = 5.139055643663404;
		const _arrayValuehwhpOgI = -7.712027197673303;
		const _defaultValueDescriptionCkkdpsC = [_arrayValueBwH4374, _arrayValuekLvkfmB, _arrayValuevfREusN, _arrayValuehwhpOgI]
		const _descriptionKmgxBTV = true;
		const _argumentJVSMPW = {
			"argChoices": _argChoicesG6DzM5W,
		"defaultValue": _defaultValueg4X6IM6,
		"defaultValueDescription": _defaultValueDescriptionCkkdpsC,
		"description": _descriptionKmgxBTV
	}
		const _returnValueXPdSSfK = await _HelpyY56PYJ.argumentDescription(_argumentJVSMPW)
		const _returnValuenWkK2vP = 3.0165067576948026;
		const _descriptionfwDx57L = () => { return _returnValuenWkK2vP };
		const _cmdcqODb4X = {
			"description": _descriptionfwDx57L
	}
		const _returnValuez2szJFi = await _HelpyY56PYJ.commandDescription(_cmdcqODb4X)
		const _argChoicesvYZrCX = 3.0094373835053325;
		const _defaultValuem1rpIuk = false;
		const _defaultValueDescriptionPm7vJvm = true;
		const _descriptionV6654iZ = null;
		const _argumentqeiJc24 = {
			"argChoices": _argChoicesvYZrCX,
		"defaultValue": _defaultValuem1rpIuk,
		"defaultValueDescription": _defaultValueDescriptionPm7vJvm,
		"description": _descriptionV6654iZ
	}
		const _returnValuent0MjaQ = await _HelpyY56PYJ.argumentDescription(_argumentqeiJc24)
	});

	it('test for Help', async () => {
		const _HelptFiYPIG = new Help()
		const _arrayValuezcfWNHv = false;
		const _arrayValueTtCO0GU = -2.491916188325124;
		const _arrayValueE8TIcCF = [_arrayValuezcfWNHv, _arrayValueTtCO0GU]
		const _arrayValuefV2rtTR = []
		const _arrayValueg3tjGIp = null;
		const _arrayValueFwCTOjy = true;
		const _returnValuefUCQGKH = [_arrayValueE8TIcCF, _arrayValuefV2rtTR, _arrayValueg3tjGIp, _arrayValueFwCTOjy]
		const _cmdrZZhm1G = () => { return _returnValuefUCQGKH };
		const _sortSubcommandsiKyuPe9 = -1.1277356424507765;
		const _returnValueaib7xFE = "cLpHzuZ";
		const _subcommandTermbN9RWyg = () => { return _returnValueaib7xFE };
		const _helperejNOX4M = {
			"sortSubcommands": _sortSubcommandsiKyuPe9,
		"subcommandTerm": _subcommandTermbN9RWyg
	}
		const _returnValueb1FCZl4 = await _HelptFiYPIG.longestSubcommandTermLength(_cmdrZZhm1G, _helperejNOX4M)
		const _flagsBWzQeF = true;
		const _optionUir8xD = {
			"flags": _flagsBWzQeF
	}
		const _returnValuedUG2Al9 = await _HelptFiYPIG.optionTerm(_optionUir8xD)
		const __argsDescriptionmWi2wP = {
		
	}
		const __argsRiJ3hX3 = {
		
	}
		const _cmdRfuvFob = {
			"_argsDescription": __argsDescriptionmWi2wP,
		"_args": __argsRiJ3hX3
	}
		const _returnValuevjpyjDg = await _HelptFiYPIG.visibleArguments(_cmdRfuvFob)
	});

	it('test for Help', async () => {
		const _HelpRYjI5kx = new Help()
		const __namecGgeuu = {
		
	}
		const __aliasesRCDQFYy = {
		
	}
		const _parentBLIqX07 = {
		
	}
		const _returnValueshTg5wP = {
		
	}
		const _usagefefSm6z = () => { return _returnValueshTg5wP };
		const _cmdCv3qLNQ = {
			"_name": __namecGgeuu,
		"_aliases": __aliasesRCDQFYy,
		"parent": _parentBLIqX07,
		"usage": _usagefefSm6z
	}
		const _returnValuecTN054F = await _HelpRYjI5kx.commandUsage(_cmdCv3qLNQ)
		const _arrayValueeC0OFMZ = undefined;
		const _arrayValuez2uMumM = "GdQd1V5MPe7jIXmGxvfs2eBiUloAkfqPuUzrmhTn9szfOM58DxFORp5ArbyWtPiXNqUUFit8AzUu8";
		const _arrayValueiVzEqdO = undefined;
		const _returnValuee8Y2srQ = undefined;
		const _arrayValueqEEtxuT = () => { return _returnValuee8Y2srQ };
		const _arrayValueuSrxVjv = [_arrayValueiVzEqdO, _arrayValueqEEtxuT]
		const _arrayValuePc5yGqQ = undefined;
		const _cmdRqm7guo = [_arrayValueeC0OFMZ, _arrayValuez2uMumM, _arrayValueuSrxVjv, _arrayValuePc5yGqQ]
		const _returnValueauiPhQC = await _HelpRYjI5kx.commandDescription(_cmdRqm7guo)
	});

	it('test for Help', async () => {
		const _Helpj5cUrA = new Help()
		const _cmdo5QoWPV = {
		
	}
		const _helperCpPUbPE = "k8ZJA8Rnl8A6OfqS";
		const _returnValuegEmFTz = await _Helpj5cUrA.formatHelp(_cmdo5QoWPV, _helperCpPUbPE)
		const __namezxzdcNb = {
		
	}
		const __aliases0z4qFw = {
		
	}
		const _parentpZuEhf = false;
		const _arrayValuehzmdbqX = false;
		const _arrayValuemuGqWMU = "cagVDkbUq6nbfngRXx83nl43rYDiXmkIspfHgRmWZtCQrxTmdRLV";
		const _arrayValuegfcUb00 = {
		
	}
		const _arrayValuebJCQRo = "R6wKVQjN4Maz2ijAv3W7pgDViF1VeTygHVL6J1s9gNCiG2WzTlCG";
		const _arrayValuePWZlFKa = null;
		const _arrayValuea7dzIzP = -8.330545522474669;
		const _arrayValuepjA9hYk = null;
		const _returnValuejcDhFI = [_arrayValuebJCQRo, _arrayValuePWZlFKa, _arrayValuea7dzIzP, _arrayValuepjA9hYk]
		const _returnValuexuMkVBk = () => { return _returnValuejcDhFI };
		const _arrayValueS1WZ9pi = () => { return _returnValuexuMkVBk };
		const _arrayValuea44LWMl = [_arrayValuemuGqWMU, _arrayValuegfcUb00, _arrayValueS1WZ9pi]
		const _returnValuezzoeqas = [_arrayValuehzmdbqX, _arrayValuea44LWMl]
		const _usages6KbgXc = () => { return _returnValuezzoeqas };
		const _cmdDkjbGM0 = {
			"_name": __namezxzdcNb,
		"_aliases": __aliases0z4qFw,
		"parent": _parentpZuEhf,
		"usage": _usages6KbgXc
	}
		const _returnValuez2TmlOV = await _Helpj5cUrA.commandUsage(_cmdDkjbGM0)
		const __nameLccnj13 = {
		
	}
		const __aliasesIvo9wYD = {
		
	}
		const _parentk4hcKHl = {
		
	}
		const _returnValuevIxLdd = {
		
	}
		const _usagerJCb79I = () => { return _returnValuevIxLdd };
		const _cmdQ3QDCpE = {
			"_name": __nameLccnj13,
		"_aliases": __aliasesIvo9wYD,
		"parent": _parentk4hcKHl,
		"usage": _usagerJCb79I
	}
		const _returnValueJXm1sMh = await _Helpj5cUrA.commandUsage(_cmdQ3QDCpE)
		const _returnValuek7Ldf0M = false;
		const _namecYakIW = () => { return _returnValuek7Ldf0M };
		const _argumentKjh7ysG = {
			"name": _namecYakIW
	}
		const _returnValuelsNYI3 = await _Helpj5cUrA.argumentTerm(_argumentKjh7ysG)
	});

	it('test for Help', async () => {
		const _HelpUWjpRUr = new Help()
		const _returnValueOhrg3NK = -1.3638357328753674;
		const _returnValuepyxqlxN = () => { return _returnValueOhrg3NK };
		const _namelHy2fpi = () => { return _returnValuepyxqlxN };
		const _argumentmtXt8V = {
			"name": _namelHy2fpi
	}
		const _returnValueQAde9VJ = await _HelpUWjpRUr.argumentTerm(_argumentmtXt8V)
		const _argChoicesnVekS3v = {
		
	}
		const _defaultValuePMCQp8q = undefined;
		const _defaultValueDescriptiongvkOVv8 = undefined;
		const _arrayValueVJRAjpY = "o";
		const _arrayValuelPr9PRV = -5.685110379548812;
		const _arrayValueFKu7iF5 = true;
		const _descriptionk2cjQr6 = [_arrayValueVJRAjpY, _arrayValuelPr9PRV, _arrayValueFKu7iF5]
		const _argumentO8ARM0 = {
			"argChoices": _argChoicesnVekS3v,
		"defaultValue": _defaultValuePMCQp8q,
		"defaultValueDescription": _defaultValueDescriptiongvkOVv8,
		"description": _descriptionk2cjQr6
	}
		const _returnValuek8nwI4D = await _HelpUWjpRUr.argumentDescription(_argumentO8ARM0)
	});

	it('test for Help', async () => {
		const _HelpcahH11x = new Help()
		const _cmdyjvtSRT = "sBK4RqJWsTImMfiHFpwLL4BxQutE1DBuggKP";
		const _returnValueVzSgKDL = {
		
	}
		const _longestOptionTermLengthZDL0oUi = () => { return _returnValueVzSgKDL };
		const _returnValueYiLRoP = "onNo8MMvqYLYEixcCknfKeagGSUL63XopuYCf1xhaCQAtxRwGvICsUM8uITHyIYl4BEHGLNQ6KYpnV2lhY4BNka83BjV";
		const _longestSubcommandTermLengthtwvbTZ6 = () => { return _returnValueYiLRoP };
		const _arrayValueag1z6C8 = undefined;
		const _returnValueTAC8wI3 = [_arrayValueag1z6C8]
		const _longestArgumentTermLengthkrd96vz = () => { return _returnValueTAC8wI3 };
		const _helperNUmZFPz = {
			"longestOptionTermLength": _longestOptionTermLengthZDL0oUi,
		"longestSubcommandTermLength": _longestSubcommandTermLengthtwvbTZ6,
		"longestArgumentTermLength": _longestArgumentTermLengthkrd96vz
	}
		const _returnValueIGIK1ts = await _HelpcahH11x.padWidth(_cmdyjvtSRT, _helperNUmZFPz)
		const _optionsTeeFO9b = {
		
	}
		const __hasHelpOptionSYXAeNi = 9.43543211603728;
		const __helpShortFlagNpOIzs = null;
		const __findOptionFvgtYGY = null;
		const __helpLongFlagPtzmHm = undefined;
		const _returnValueWT3J0k = false;
		const _createOptionZ5PSzu = () => { return _returnValueWT3J0k };
		const _arrayValueY5NsTJ = 4.49189307342264;
		const __helpDescriptionYQpPZr1 = [_arrayValueY5NsTJ]
		const __helpFlagsKxj4Zou = 0.3265451576044285;
		const _cmdkm3kYza = {
			"options": _optionsTeeFO9b,
		"_hasHelpOption": __hasHelpOptionSYXAeNi,
		"_helpShortFlag": __helpShortFlagNpOIzs,
		"_findOption": __findOptionFvgtYGY,
		"_helpLongFlag": __helpLongFlagPtzmHm,
		"createOption": _createOptionZ5PSzu,
		"_helpDescription": __helpDescriptionYQpPZr1,
		"_helpFlags": __helpFlagsKxj4Zou
	}
		const _returnValueJUxnRZ0 = await _HelpcahH11x.visibleOptions(_cmdkm3kYza)
	});

	it('test for Help', async () => {
		const _HelpIovrl4l = new Help()
		const _argChoicesHgzUA5P = {
		
	}
		const _negater6M7cCk = null;
		const _defaultValueVqo9lyy = undefined;
		const _defaultValueDescription3KCGgn = false;
		const _envVarp6IwDU = false;
		const _descriptionH5JmsaK = -7.398737929389359;
		const _optiondJN12c = {
			"argChoices": _argChoicesHgzUA5P,
		"negate": _negater6M7cCk,
		"defaultValue": _defaultValueVqo9lyy,
		"defaultValueDescription": _defaultValueDescription3KCGgn,
		"envVar": _envVarp6IwDU,
		"description": _descriptionH5JmsaK
	}
		const _returnValuel0V4or8 = await _HelpIovrl4l.optionDescription(_optiondJN12c)
		const _cmd9omTcI = undefined;
		const _returnValueUYAia0u = await _HelpIovrl4l.commandUsage(_cmd9omTcI)
	});

	it('test for Help', async () => {
		const _HelpEQmIM1O = new Help()
		const _returnValueEi0N7xH = 7.22967508396782;
		const _nameZeal6t = () => { return _returnValueEi0N7xH };
		const _argumentEJKlGFD = {
			"name": _nameZeal6t
	}
		const _returnValueRHGeM0B = await _HelpEQmIM1O.argumentTerm(_argumentEJKlGFD)
		const _cmdENa8P8B = "KWLVWGQ8nA4purda50viqkeFimDGxesBUf7M0GHm37nT6rM4QzbUnc1BeBRulcj";
		const _returnValuep96ylTT = false;
		const _longestOptionTermLengthEy6xxKw = () => { return _returnValuep96ylTT };
		const _returnValuej8fzpKo = null;
		const _longestSubcommandTermLengthArO3mSA = () => { return _returnValuej8fzpKo };
		const _returnValueTROYilM = undefined;
		const _longestArgumentTermLengthqFUaBS = () => { return _returnValueTROYilM };
		const _helperugqBorS = {
			"longestOptionTermLength": _longestOptionTermLengthEy6xxKw,
		"longestSubcommandTermLength": _longestSubcommandTermLengthArO3mSA,
		"longestArgumentTermLength": _longestArgumentTermLengthqFUaBS
	}
		const _returnValueK8EoJDL = await _HelpEQmIM1O.padWidth(_cmdENa8P8B, _helperugqBorS)
		const _arrayValueCK6eizL = true;
		const _returnValuest81M8U = [_arrayValueCK6eizL]
		const _matchzLFOAfv = () => { return _returnValuest81M8U };
		const _returnValueyPBQjPM = undefined;
		const _substrfJ2zg6I = () => { return _returnValueyPBQjPM };
		const _strfQwaIx6 = {
			"match": _matchzLFOAfv,
		"substr": _substrfJ2zg6I
	}
		const _widthZUhokT7 = -4.578525543881526;
		const _indentQ9RFDY6 = 8.307106288641378;
		const _minColumnWidthmgpVKeI = 3.480918451412098;
		const _returnValueVYReheI = await _HelpEQmIM1O.wrap(_strfQwaIx6, _widthZUhokT7, _indentQ9RFDY6, _minColumnWidthmgpVKeI)
		const _optionsd1AVXb7 = {
		
	}
		const __hasHelpOptionllbebmo = "n3neUB0VkX83HjypAbQo58n4TBWKfKDsvOPHfseq3lRthK37dc8r";
		const _arrayValueXmQu1el = undefined;
		const __helpShortFlagdsefbwn = [_arrayValueXmQu1el]
		const _returnValuePrHiTz7 = null;
		const __findOptionDDfGw8k = () => { return _returnValuePrHiTz7 };
		const __helpLongFlagaGbHVE9 = "jv4oKgKm9Lb2ZHBzuog9KKOh0e77b5ifuyD9e7qWS8ltgRpK7hJ45gsj8Tp66UAcjnluUId9T";
		const _returnValueUKdIRV5 = "WWd4ih5q3GWpWmUA";
		const _createOptionHrEvJzt = () => { return _returnValueUKdIRV5 };
		const __helpDescriptionkoi7ksq = null;
		const __helpFlagsKMUM5F5 = 1.2315611474940233;
		const _cmdn6TGW5 = {
			"options": _optionsd1AVXb7,
		"_hasHelpOption": __hasHelpOptionllbebmo,
		"_helpShortFlag": __helpShortFlagdsefbwn,
		"_findOption": __findOptionDDfGw8k,
		"_helpLongFlag": __helpLongFlagaGbHVE9,
		"createOption": _createOptionHrEvJzt,
		"_helpDescription": __helpDescriptionkoi7ksq,
		"_helpFlags": __helpFlagsKMUM5F5
	}
		const _returnValuen7SgH3w = await _HelpEQmIM1O.visibleOptions(_cmdn6TGW5)
		const _cmdmEeeDDm = false;
		const _sortSubcommandsFbyYG5 = undefined;
		const _arrayValuefr7Pe5x = null;
		const _arrayValueiDUBD55 = 7.646921617093369;
		const _returnValuebhQl7j = [_arrayValuefr7Pe5x, _arrayValueiDUBD55]
		const _subcommandTermDCP7He = () => { return _returnValuebhQl7j };
		const _helperxIpAOSI = {
			"sortSubcommands": _sortSubcommandsFbyYG5,
		"subcommandTerm": _subcommandTermDCP7He
	}
		const _returnValueM8W5PFM = await _HelpEQmIM1O.longestSubcommandTermLength(_cmdmEeeDDm, _helperxIpAOSI)
	});

	it('test for Help', async () => {
		const _HelpDJUIJbL = new Help()
		const _cmdEblzMP0 = undefined;
		const _returnValueg1fPqHm = undefined;
		const _visibleArgumentsD8unqjj = () => { return _returnValueg1fPqHm };
		const _returnValuekDU0QZ = -9.268987627752585;
		const _argumentTermhlihdfI = () => { return _returnValuekDU0QZ };
		const _helperRhRyRbE = {
			"visibleArguments": _visibleArgumentsD8unqjj,
		"argumentTerm": _argumentTermhlihdfI
	}
		const _returnValuecbx7Wl6 = await _HelpDJUIJbL.longestArgumentTermLength(_cmdEblzMP0, _helperRhRyRbE)
	});

	it('test for Help', async () => {
		const _HelpQuE9XRz = new Help()
		const _cmdqetU4bN = []
		const _returnValueEesIkpO = await _HelpQuE9XRz.subcommandDescription(_cmdqetU4bN)
		const _cmdaG75hwa = undefined;
		const _arrayValues4f9bAf = null;
		const _arrayValueEXS73Nf = false;
		const _helperVY4Mir = [_arrayValues4f9bAf, _arrayValueEXS73Nf]
		const _returnValueYHUbQ6E = await _HelpQuE9XRz.longestSubcommandTermLength(_cmdaG75hwa, _helperVY4Mir)
		const _cmdkC5IdxJ = undefined;
		const _returnValueawh1PE = -7.705841517817627;
		const _visibleArguments0D7c5o = () => { return _returnValueawh1PE };
		const _returnValueZgqSqy = undefined;
		const _argumentTermgHTZRQ = () => { return _returnValueZgqSqy };
		const _helperCA9hFVw = {
			"visibleArguments": _visibleArguments0D7c5o,
		"argumentTerm": _argumentTermgHTZRQ
	}
		const _returnValuepFC3pez = await _HelpQuE9XRz.longestArgumentTermLength(_cmdkC5IdxJ, _helperCA9hFVw)
	});

	it('test for Help', async () => {
		const _HelpV4XKp8y = new Help()
		const _flagsr7MX0Yr = "EDrUzhmU5bZUb5WVaQOmxVbxhtqxwM1Zx3C7iVHPDcqoW3t2Z11iQaRMVar87RK3e";
		const _optionCk1tMmu = {
			"flags": _flagsr7MX0Yr
	}
		const _returnValueWN57UpT = await _HelpV4XKp8y.optionTerm(_optionCk1tMmu)
		const _arrayValuehInCmUE = "Bb449v4GsULtJzmhmrPPh2D3FW1IeqluB6UZGuK2Qeq7PTpmEmtyfTyhoJfIkVLp8qyIshuvJqoA0";
		const _arrayValuecJ8etuu = true;
		const _arrayValuejgh4OtS = true;
		const _arrayValuexzdAKMi = {
		
	}
		const _arrayValueZ4Jv7La = true;
		const _arrayValuerapjBFl = [_arrayValuejgh4OtS, _arrayValuexzdAKMi, _arrayValueZ4Jv7La]
		const _arrayValueuNfphF = [_arrayValuehInCmUE, _arrayValuecJ8etuu, _arrayValuerapjBFl]
		const _cmdtkwtzIG = [_arrayValueuNfphF]
		const _returnValueGd46Qa = await _HelpV4XKp8y.subcommandDescription(_cmdtkwtzIG)
	});

	it('test for Help', async () => {
		const _HelpAG4g0Ae = new Help()
		const _arrayValueSRpxi7 = null;
		const _arrayValueakxQR0D = {
		
	}
		const _argumentnGpi8P = [_arrayValueSRpxi7, _arrayValueakxQR0D]
		const _returnValueTrOzqUK = await _HelpAG4g0Ae.argumentDescription(_argumentnGpi8P)
		const _cmdUe7THwa = undefined;
		const _returnValueX0kahic = 7.647174208657525;
		const _longestOptionTermLengthb3r9lTa = () => { return _returnValueX0kahic };
		const _returnValuesjBsSoL = "uimVwxdbJxKMq0uQcdWF5AOLl";
		const _returnValueAly5amT = () => { return _returnValuesjBsSoL };
		const _longestSubcommandTermLengthav89o4O = () => { return _returnValueAly5amT };
		const _returnValuewH8VNxG = undefined;
		const _longestArgumentTermLengthjNlLgD = () => { return _returnValuewH8VNxG };
		const _helperfvU582S = {
			"longestOptionTermLength": _longestOptionTermLengthb3r9lTa,
		"longestSubcommandTermLength": _longestSubcommandTermLengthav89o4O,
		"longestArgumentTermLength": _longestArgumentTermLengthjNlLgD
	}
		const _returnValuer5VwAn = await _HelpAG4g0Ae.padWidth(_cmdUe7THwa, _helperfvU582S)
		const _cmdmuVQtKU = -5.6473767284124685;
		const _arrayValuejoOM6Rz = undefined;
		const _helperfjxV8Bu = [_arrayValuejoOM6Rz]
		const _returnValueHxSydCe = await _HelpAG4g0Ae.longestOptionTermLength(_cmdmuVQtKU, _helperfjxV8Bu)
	});

	it('test for Help', async () => {
		const _HelpouqdyLo = new Help()
		const _returnValuetOaZNzq = undefined;
		const _matchMhrWvQZ = () => { return _returnValuetOaZNzq };
		const _arrayValueEyzUGM = null;
		const _arrayValueqxxsgfg = 1.0650688383055673;
		const _arrayValueDEN7IEp = null;
		const _arrayValueMFgZDTP = "hb6FQLjjyGdseBKBJSFfZLfe5vBFzWXa8ShNskwyPvRKfrs3WFI";
		const _returnValuehBsUEMq = [_arrayValueEyzUGM, _arrayValueqxxsgfg, _arrayValueDEN7IEp, _arrayValueMFgZDTP]
		const _substrO2P0CvX = () => { return _returnValuehBsUEMq };
		const _stricOcPAI = {
			"match": _matchMhrWvQZ,
		"substr": _substrO2P0CvX
	}
		const _widths2DNoHR = -0.9797660313603203;
		const _indentWZED6LO = -7.065025074392114;
		const _minColumnWidthbcMFMpC = -5.639301195381593;
		const _returnValueQIaimP = await _HelpouqdyLo.wrap(_stricOcPAI, _widths2DNoHR, _indentWZED6LO, _minColumnWidthbcMFMpC)
		const _arrayValueDVgc4lv = null;
		const _arrayValuegxiZOer = null;
		const _arrayValueySciDbA = 6.728988719326136;
		const _arrayValuehFX9Kn = []
		const _arrayValueRn9lFJR = "uCvIX2745vswi7aneWugzw3MCitFa27PirrTpCKI";
		const _arrayValuebq7K0eR = undefined;
		const _arrayValueUSDK4L = [_arrayValuehFX9Kn, _arrayValueRn9lFJR, _arrayValuebq7K0eR]
		const _arrayValuemTnVGTZ = [_arrayValueUSDK4L]
		const _returnValueRfFTXV1 = [_arrayValueDVgc4lv, _arrayValuegxiZOer, _arrayValueySciDbA, _arrayValuemTnVGTZ]
		const _cmdHxwr6J = () => { return _returnValueRfFTXV1 };
		const _returnValueGPYzQaa = await _HelpouqdyLo.visibleOptions(_cmdHxwr6J)
		const _cmdy8MPUeu = "LRXnPoeDmSTgk5q4zELGxFYVNeJKbvw1CBU6bSlfz6nJdEH7KnhN3";
		const _arrayValueGtVOIqP = undefined;
		const _arrayValuepvDopn = {
		
	}
		const _arrayValueXyU6Xv = "rTDYlCER6AZO7ENr9p3VMZyVGiaM3vb2t5tHhDgX0AJV1YtaeGxXTIUz3dA";
		const _helpergr1FeQm = [_arrayValueGtVOIqP, _arrayValuepvDopn, _arrayValueXyU6Xv]
		const _returnValuecssriR2 = await _HelpouqdyLo.padWidth(_cmdy8MPUeu, _helpergr1FeQm)
		const _arrayValuenqI5Ot = "lBC3kIoWAMa1noHxqxDuNJRkTVMPt3EpwXqc1t5MhYUlPp6L7URA8M";
		const _arrayValueFMaOrgL = 0.2793379850122726;
		const _cmdNHGyE8o = [_arrayValuenqI5Ot, _arrayValueFMaOrgL]
		const _arrayValueVPeK0sA = null;
		const _arrayValueMVTrqv6 = undefined;
		const _arrayValuehXpE8s = null;
		const _returnValueGDQ9oE6 = [_arrayValueVPeK0sA, _arrayValueMVTrqv6, _arrayValuehXpE8s]
		const _helpergJUntfk = () => { return _returnValueGDQ9oE6 };
		const _returnValuedkHwiJw = await _HelpouqdyLo.formatHelp(_cmdNHGyE8o, _helpergJUntfk)
	});

	it('test for Help', async () => {
		const _HelpToTXPxW = new Help()
		const _returnValuepvILTbQ = -1.2501997245983816;
		const _argumentDHQquYx = () => { return _returnValuepvILTbQ };
		const _returnValueWMwdc8 = await _HelpToTXPxW.argumentDescription(_argumentDHQquYx)
		const _arrayValuec3s2YSc = null;
		const _arrayValuecJDSmYX = 7.8005516520373135;
		const _arrayValueiIpU2RQ = "69StvkPm6Z2mixRSjIJXlX4ihQtIcawPlkY3tcZqE60OB1nWH1G";
		const _optionNsN9AGV = [_arrayValuec3s2YSc, _arrayValuecJDSmYX, _arrayValueiIpU2RQ]
		const _returnValueZjVTqLb = await _HelpToTXPxW.optionDescription(_optionNsN9AGV)
		const _returnValueTwQLUL = "QuRyvCGJCFxZ";
		const _cmdh7Al1pG = () => { return _returnValueTwQLUL };
		const _returnValuebegFXRv = await _HelpToTXPxW.commandDescription(_cmdh7Al1pG)
		const _flagsn5OtP3i = -1.3675900144401893;
		const _optionLs9OCb9 = {
			"flags": _flagsn5OtP3i
	}
		const _returnValueHPbDoV9 = await _HelpToTXPxW.optionTerm(_optionLs9OCb9)
	});

	it('test for Help', async () => {
		const _HelpqWjm9jF = new Help()
		const _namesj8W6dS = undefined;
		const _cmd8qRE1A = new Command(_namesj8W6dS)
		const _displaySuggestionXO1dRev = true;
		const _returnValueW60QMOS = await _cmd8qRE1A.showSuggestionAfterError(_displaySuggestionXO1dRev)
		const _arrayValueqnVTt9S = 5.332250518039093;
		const _arrayValueBuEhiK = true;
		const _returnValueoRr57AS = [_arrayValueqnVTt9S, _arrayValueBuEhiK]
		const _matchNA3ov01 = () => { return _returnValueoRr57AS };
		const _nameAndArgsHd0g2YB = {
			"match": _matchNA3ov01
	}
		const _actionOptsOrExecDescA2uGG5q = null;
		const _execOptsaDjs6B = null;
		const _returnValueQy25YSB = await _cmd8qRE1A.command(_nameAndArgsHd0g2YB, _actionOptsOrExecDescA2uGG5q, _execOptsaDjs6B)
		const _errormyZvN9M = {
		
	}
		const _commandTBRPsfh = 3.843815119742631;
		const _contextOptionsdS57YAd = {
			"error": _errormyZvN9M,
		"command": _commandTBRPsfh
	}
		const _returnValueLiDlNts = await _cmd8qRE1A.helpInformation(_contextOptionsdS57YAd)
		const _returnValueujb9RzF = await _HelpqWjm9jF.subcommandTerm(_cmd8qRE1A)
		const _returnValueToTJhgc = "FwruwVrktACyjUptisSEo9GC54GHQwwe5R2Ym";
		const _arrayValueF20BZCE = () => { return _returnValueToTJhgc };
		const _arrayValuelbE9elm = undefined;
		const _optionlrp9ht2 = [_arrayValueF20BZCE, _arrayValuelbE9elm]
		const _returnValueAXeqtIL = await _HelpqWjm9jF.optionDescription(_optionlrp9ht2)
	});

	it('test for Help', async () => {
		const _HelpoG6ZAQX = new Help()
		const _returnValueQBOqRGT = 2.663504046910452;
		const _arrayValuerokTn4 = () => { return _returnValueQBOqRGT };
		const _arrayValuewE6habi = false;
		const _arrayValuedU9rH3 = "Z";
		const _arrayValuet1b2H7e = "d5uvyRN3rSLOxw3LyYA2R3A4mq69pSRcqpQKK4DafifUMRufPJrOoily7cLgUWoYyCLO9dB7HeFLrA7PptMnCWq5HnV3";
		const _cmdQFDJ0hy = [_arrayValuerokTn4, _arrayValuewE6habi, _arrayValuedU9rH3, _arrayValuet1b2H7e]
		const _helperGJUVF5s = new Help()
		const _returnValueMWjh1VV = null;
		const _matchHuHwM7a = () => { return _returnValueMWjh1VV };
		const _returnValueJyzWZhy = {
		
	}
		const _substrLuLUPZu = () => { return _returnValueJyzWZhy };
		const _strgEbt7F = {
			"match": _matchHuHwM7a,
		"substr": _substrLuLUPZu
	}
		const _widthI4qSlLr = -3.448917761603072;
		const _indentMkRT6n4 = 3.0503254871327705;
		const _minColumnWidthGLoEk5 = 3.979301702920308;
		const _returnValueGiqM8Qj = await _helperGJUVF5s.wrap(_strgEbt7F, _widthI4qSlLr, _indentMkRT6n4, _minColumnWidthGLoEk5)
		const _cmdrrYPNPt = undefined;
		const _sortSubcommandsb2Awc5x = {
		
	}
		const _returnValuem60pCfk = null;
		const _subcommandTermX6KUKfM = () => { return _returnValuem60pCfk };
		const _helperKin8pN = {
			"sortSubcommands": _sortSubcommandsb2Awc5x,
		"subcommandTerm": _subcommandTermX6KUKfM
	}
		const _returnValueSJtd988 = await _helperGJUVF5s.formatHelp(_cmdrrYPNPt, _helperKin8pN)
		const _arrayValueSCzjFzo = 1.526908131699841;
		const _cmdZnHm3l = [_arrayValueSCzjFzo]
		const _returnValuen1A1lso = undefined;
		const _longestOptionTermLengthq505C0c = () => { return _returnValuen1A1lso };
		const _longestSubcommandTermLengthga6BqiT = {
		
	}
		const _returnValueoodoMb = null;
		const _longestArgumentTermLengthWjLNGvD = () => { return _returnValueoodoMb };
		const _helperD8JcVTa = {
			"longestOptionTermLength": _longestOptionTermLengthq505C0c,
		"longestSubcommandTermLength": _longestSubcommandTermLengthga6BqiT,
		"longestArgumentTermLength": _longestArgumentTermLengthWjLNGvD
	}
		const _returnValueBMdNAUS = await _helperGJUVF5s.padWidth(_cmdZnHm3l, _helperD8JcVTa)
		const _returnValueV4XnN6j = await _HelpoG6ZAQX.longestArgumentTermLength(_cmdQFDJ0hy, _helperGJUVF5s)
		const _returnValueRcnXUgF = -2.590280475543178;
		const _returnValueslhPOet = () => { return _returnValueRcnXUgF };
		const _descriptionGuD5aYL = () => { return _returnValueslhPOet };
		const _cmdsRI5Dka = {
			"description": _descriptionGuD5aYL
	}
		const _returnValueCXSvEH = await _HelpoG6ZAQX.subcommandDescription(_cmdsRI5Dka)
		const _cmdkZkRAFN = undefined;
		const _helperO39eWCL = new Help()
		const _cmdEhJjwQK = 8.501948764647793;
		const _returnValuenBlsNUw = "TqHkn61hlH3uo4sd74qebjwF9v81VsxiXsMaccFjdta2OYUtVq2kbw";
		const _longestOptionTermLengthXLAvKCb = () => { return _returnValuenBlsNUw };
		const _arrayValuepB2IeJA = true;
		const _returnValuejIT1yv6 = [_arrayValuepB2IeJA]
		const _longestSubcommandTermLengthcgmM5as = () => { return _returnValuejIT1yv6 };
		const _returnValuefmec2Qh = 3.9179362198263483;
		const _longestArgumentTermLengthmUtwXD6 = () => { return _returnValuefmec2Qh };
		const _helper7V2kRl = {
			"longestOptionTermLength": _longestOptionTermLengthXLAvKCb,
		"longestSubcommandTermLength": _longestSubcommandTermLengthcgmM5as,
		"longestArgumentTermLength": _longestArgumentTermLengthmUtwXD6
	}
		const _returnValueQGae4VH = await _helperO39eWCL.padWidth(_cmdEhJjwQK, _helper7V2kRl)
		const _cmdk6Fstux = false;
		const _sortSubcommandsCQTVH0o = "mfkorRJtz3hQfBActahPRjuUYsgO4eI0sUuEEEJz";
		const _returnValuedHpZ28X = null;
		const _subcommandTermjtcwX9u = () => { return _returnValuedHpZ28X };
		const _helperSjN9cc9 = {
			"sortSubcommands": _sortSubcommandsCQTVH0o,
		"subcommandTerm": _subcommandTermjtcwX9u
	}
		const _returnValueVsoryr7 = await _helperO39eWCL.formatHelp(_cmdk6Fstux, _helperSjN9cc9)
		const _cmdbjGveYZ = true;
		const _returnValueTkqADy = await _helperO39eWCL.visibleOptions(_cmdbjGveYZ)
		const _returnValuejT6BW1G = await _HelpoG6ZAQX.longestArgumentTermLength(_cmdkZkRAFN, _helperO39eWCL)
	});

	it('test for Help', async () => {
		const _HelpmFhHOsF = new Help()
		const _flagsEa7eO44 = "v4Eu2uLsOO6BpjaHWWhzfDjdKH4elWXjY47qr6IYHKjxNa0b0THPipNSb51QhEDVxhbVTcJO2KfCUqIq7mh6juawgyR";
		const _descriptionfnakfXF = "D77rSkcnxDm8dxcHdiGWO8acPn1qp4QmGwRYvaO6Y1WweLIc5OjaJ86qLPzn92i1wcResdfjbjrXSttR6JCGiils";
		const _argumentYINo7q8 = new Option(_flagsEa7eO44, _descriptionfnakfXF)
		const _arrayValuecJqiCAo = undefined;
		const _arrayValuedbIVbqU = [_arrayValuecJqiCAo]
		const _arrayValueT0bvHE = [_arrayValuedbIVbqU]
		const _valueI4A9wcY = [_arrayValueT0bvHE]
		const _returnValueqHb4sm4 = undefined;
		const _concatCPHOTOA = () => { return _returnValueqHb4sm4 };
		const _previousY74C9MF = {
			"concat": _concatCPHOTOA
	}
		const _returnValueCu5vG2Q = await _argumentYINo7q8._concatValue(_valueI4A9wcY, _previousY74C9MF)
		const _returnValuennPiAks = await _argumentYINo7q8.attributeName()
		const _nametGsCbEY = undefined;
		const _returnValueltw81iX = await _argumentYINo7q8.env(_nametGsCbEY)
		const _nameBLprPXE = undefined;
		const _returnValueFf1bfJL = await _argumentYINo7q8.env(_nameBLprPXE)
		const _fndBaBsP = {
		
	}
		const _returnValueOxJoAPt = await _argumentYINo7q8.argParser(_fndBaBsP)
		const _returnValuem3Zbh8O = await _HelpmFhHOsF.argumentTerm(_argumentYINo7q8)
		const _flagslMMPYjg = {
		
	}
		const _optionGqMNluS = {
			"flags": _flagslMMPYjg
	}
		const _returnValuepQmYlPa = await _HelpmFhHOsF.optionTerm(_optionGqMNluS)
		const _cmdeBOZfBG = "ctcaBIav7cZJG8FUajT4EbsnDDHJE3pQoBHHUnODd9AnI5UkUSdynQl23Yy6d1YcQIJ";
		const _returnValueE8A8wvv = await _HelpmFhHOsF.visibleOptions(_cmdeBOZfBG)
		const _arrayValueyUivluP = 9.235856171935168;
		const _arrayValuetukQKdP = []
		const _arrayValuezRtanpv = undefined;
		const _cmdq8eNsik = [_arrayValueyUivluP, _arrayValuetukQKdP, _arrayValuezRtanpv]
		const _returnValueXFLYn04 = await _HelpmFhHOsF.visibleCommands(_cmdq8eNsik)
	});

	it('test for Help', async () => {
		const _Helpp7sKLU = new Help()
		const _namebzaxps7 = false;
		const _cmdWkjPApb = new Command(_namebzaxps7)
		const _storeAsPropertiesvpfhsnp = true;
		const _returnValuePOiy0DJ = await _cmdWkjPApb.storeOptionsAsProperties(_storeAsPropertiesvpfhsnp)
		const _returnValueKamGgj = await _cmdWkjPApb._processArguments()
		const _strFJrY0A9 = undefined;
		const _argsDescriptionteUeBf8 = undefined;
		const _returnValueMcyZYK8 = await _cmdWkjPApb.description(_strFJrY0A9, _argsDescriptionteUeBf8)
		const _returnValueGL3WRzS = await _Helpp7sKLU.visibleOptions(_cmdWkjPApb)
	});

	it('test for Help', async () => {
		const _HelplPKlfl = new Help()
		const _nameapOmmAN = "SFMKKC8q5Q3MwFb6x2lwg3Tn8ns";
		const _cmdHYpPoEp = new Command(_nameapOmmAN)
		const _aliasLN04p3w = -6.975261215771975;
		const _returnValueUnoNb6l = await _cmdHYpPoEp.alias(_aliasLN04p3w)
		const _keyL4QHpHh = true;
		const _returnValueSTqmKD = await _cmdHYpPoEp.getOptionValueSource(_keyL4QHpHh)
		const _nameVHZV3OH = {
		
	}
		const _returnValueCOaNlHL = await _cmdHYpPoEp._findCommand(_nameVHZV3OH)
		const _returnValuerQQLh0 = await _HelplPKlfl.commandUsage(_cmdHYpPoEp)
	});

	it('test for Help', async () => {
		const _HelpGu0s3Kh = new Help()
		const _nameEuImQbF = "oYkiVxWsHfQ1Urboo8fSw";
		const _cmdoIGbRAE = new Command(_nameEuImQbF)
		const _arrayValueoDlkC0q = -1.0068661389593476;
		const _key1J3sLX = [_arrayValueoDlkC0q]
		const _returnValuephDcQOl = await _cmdoIGbRAE.getOptionValueSource(_key1J3sLX)
		const _keyAQ9uf2 = -3.254264754453083;
		const _valuenTigYCG = null;
		const _sourceyRTVCIn = true;
		const _returnValuezGrxEkU = await _cmdoIGbRAE.setOptionValueWithSource(_keyAQ9uf2, _valuenTigYCG, _sourceyRTVCIn)
		const _returnValueAcafYdw = await _HelpGu0s3Kh.visibleCommands(_cmdoIGbRAE)
		const _cmdvZSck3p = false;
		const _sortSubcommandsSkAGtwu = false;
		const _returnValuehifiGg7 = "eJVw5yFk0I9hhafEXHA4bRQVcOJzHt0PmdN3zWwLEyYjIeQ8aIhc7H5bBVW0tEzUd7xyvDn1lT8Vnmt36m";
		const _subcommandTermHChlcG = () => { return _returnValuehifiGg7 };
		const _helperY7UwvF5 = {
			"sortSubcommands": _sortSubcommandsSkAGtwu,
		"subcommandTerm": _subcommandTermHChlcG
	}
		const _returnValueltXnsdS = await _HelpGu0s3Kh.longestSubcommandTermLength(_cmdvZSck3p, _helperY7UwvF5)
		const _cmdCfuXUPe = false;
		const _arrayValueoO7V5Vl = 2.9501486482607895;
		const _arrayValuevE914AK = null;
		const _helperORbDEaG = [_arrayValueoO7V5Vl, _arrayValuevE914AK]
		const _returnValuek8o66aj = await _HelpGu0s3Kh.formatHelp(_cmdCfuXUPe, _helperORbDEaG)
	});
})