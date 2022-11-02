export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpLAzcnS9 = new Help()
		const _argChoicesM7DLRT = {
		
	}
		const _defaultValueGWehXVg = undefined;
		const _defaultValueDescriptionxT0WUSl = 6.940035001727644;
		const _arrayValueUnp2AUR = undefined;
		const _arrayValueVe1eKRp = "ROqaeiXzCmPC7iTc5NkaY3CTKzXRCO5PJQKnhwPK49oJrkHO6L94iUBO8yzKAJaDqgnTu9YsLzmvRFmOzP8zod2S81Ah";
		const _descriptionFCCkE6S = [_arrayValueUnp2AUR, _arrayValueVe1eKRp]
		const _argumentb7ggeU = {
			"argChoices": _argChoicesM7DLRT,
		"defaultValue": _defaultValueGWehXVg,
		"defaultValueDescription": _defaultValueDescriptionxT0WUSl,
		"description": _descriptionFCCkE6S
	}
		const _returnValueLmfVvm = await _HelpLAzcnS9.argumentDescription(_argumentb7ggeU)
		const _flagsQfMGYE9 = "EtAoKLDzVXpdYT1z";
		const _optionGyb7tuI = {
			"flags": _flagsQfMGYE9
	}
		const _returnValueXoShbx6 = await _HelpLAzcnS9.optionTerm(_optionGyb7tuI)
		const __argsDescriptionP5Eatco = {
		
	}
		const __argsiGnDBN = {
		
	}
		const _cmdKCr7TnX = {
			"_argsDescription": __argsDescriptionP5Eatco,
		"_args": __argsiGnDBN
	}
		const _returnValueMtV99uN = await _HelpLAzcnS9.visibleArguments(_cmdKCr7TnX)
		const _cmdcXwbzMf = false;
		const _returnValueP9iYfeA = -2.5475472002711097;
		const _visibleOptionshjAYGuz = () => { return _returnValueP9iYfeA };
		const _arrayValueajKfoBv = -6.7107767272065235;
		const _arrayValuepl1RKXZ = false;
		const _optionTermSwCgCUw = [_arrayValueajKfoBv, _arrayValuepl1RKXZ]
		const _helperRjQ0nLT = {
			"visibleOptions": _visibleOptionshjAYGuz,
		"optionTerm": _optionTermSwCgCUw
	}
		const _returnValueOE3j27i = await _HelpLAzcnS9.longestOptionTermLength(_cmdcXwbzMf, _helperRjQ0nLT)
	});

	it('test for Help', async () => {
		const _HelpFKspJdb = new Help()
		const _cmdZQlqBxA = {
		
	}
		const _returnValueGeCloNx = false;
		const _visibleArgumentsH19B3Y = () => { return _returnValueGeCloNx };
		const _returnValuetHVZ1oS = -0.3790423043040452;
		const _argumentTermVtKM9x9 = () => { return _returnValuetHVZ1oS };
		const _helperQqTiwlP = {
			"visibleArguments": _visibleArgumentsH19B3Y,
		"argumentTerm": _argumentTermVtKM9x9
	}
		const _returnValueiDdaN0e = await _HelpFKspJdb.longestArgumentTermLength(_cmdZQlqBxA, _helperQqTiwlP)
		const _optionsk3xpo6U = {
		
	}
		const __hasHelpOptionQE2wJkM = {
		
	}
		const __helpShortFlagW124p4o = -5.159567557672823;
		const _arrayValueg5n7QYN = null;
		const _arrayValuereVU1oH = undefined;
		const _arrayValuexvkyllk = [_arrayValueg5n7QYN, _arrayValuereVU1oH]
		const _arrayValueXeUgt6 = {
		
	}
		const _returnValuevrCoA7 = [_arrayValuexvkyllk, _arrayValueXeUgt6]
		const __findOptionsVaX3JM = () => { return _returnValuevrCoA7 };
		const __helpLongFlagcFNq5de = 0.8370640296067435;
		const _returnValueYrGai5Y = {
		
	}
		const _createOptionlW1PstP = () => { return _returnValueYrGai5Y };
		const _arrayValueWq1UWG5 = false;
		const _arrayValuemvCeEm = "QU9L2ICF9vrBBlILbYXIZvuGPeCqp2dAsY";
		const __helpDescriptionJ9EZX6 = [_arrayValueWq1UWG5, _arrayValuemvCeEm]
		const __helpFlagsXoUM2wv = 9.439276075153359;
		const _cmdSUO8Sc8 = {
			"options": _optionsk3xpo6U,
		"_hasHelpOption": __hasHelpOptionQE2wJkM,
		"_helpShortFlag": __helpShortFlagW124p4o,
		"_findOption": __findOptionsVaX3JM,
		"_helpLongFlag": __helpLongFlagcFNq5de,
		"createOption": _createOptionlW1PstP,
		"_helpDescription": __helpDescriptionJ9EZX6,
		"_helpFlags": __helpFlagsXoUM2wv
	}
		const _returnValuefvAT5MB = await _HelpFKspJdb.visibleOptions(_cmdSUO8Sc8)
		const __argsi8y6oq = {
		
	}
		const __nameFhk8uh9 = -0.2848892803922016;
		const __aliaseswfvHxkf = {
		
	}
		const _optionsPUuawup = {
		
	}
		const _cmdpvRA9dL = {
			"_args": __argsi8y6oq,
		"_name": __nameFhk8uh9,
		"_aliases": __aliaseswfvHxkf,
		"options": _optionsPUuawup
	}
		const _returnValueu2fuYls = await _HelpFKspJdb.subcommandTerm(_cmdpvRA9dL)
		const _commandsr46vEE3 = {
		
	}
		const _arrayValueqlP7x9Y = {
		
	}
		const _returnValueU9s8LX8 = [_arrayValueqlP7x9Y]
		const _returnValueIEQnqOE = () => { return _returnValueU9s8LX8 };
		const __hasImplicitHelpCommandxiJcNpp = () => { return _returnValueIEQnqOE };
		const __helpCommandnameAndArgsTj57lMk = {
		
	}
		const _returnValueH27VVgg = 9.087163960167082;
		const _createCommandTNoiwR9 = () => { return _returnValueH27VVgg };
		const __helpCommandDescriptionaJlCDTx = 8.97242050138443;
		const _cmdqgZZxfu = {
			"commands": _commandsr46vEE3,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandxiJcNpp,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsTj57lMk,
		"createCommand": _createCommandTNoiwR9,
		"_helpCommandDescription": __helpCommandDescriptionaJlCDTx
	}
		const _returnValueIM7bTQ = await _HelpFKspJdb.visibleCommands(_cmdqgZZxfu)
		const _cmdsv3KdFw = "w4YzRLW310RUPi3j9snuvZOV2uDLNjGqO8rNk6kntShi2Jh6CNgUDCib0VKNA";
		const _returnValueQ4paU5s = false;
		const _visibleOptionsYR3lezs = () => { return _returnValueQ4paU5s };
		const _returnValuez1ECOJM = "tLzAp";
		const _optionTermTY14fQu = () => { return _returnValuez1ECOJM };
		const _helperzPS2EHq = {
			"visibleOptions": _visibleOptionsYR3lezs,
		"optionTerm": _optionTermTY14fQu
	}
		const _returnValueb6l5OG2 = await _HelpFKspJdb.longestOptionTermLength(_cmdsv3KdFw, _helperzPS2EHq)
	});

	it('test for Help', async () => {
		const _HelpliwMW9U = new Help()
		const _commandsvVuzpYM = "JbmNBFQrPkBdiFiJbz";
		const _returnValuekuK6rDh = true;
		const __hasImplicitHelpCommand97y0bT = () => { return _returnValuekuK6rDh };
		const __helpCommandnameAndArgsrIvUhqp = {
		
	}
		const _returnValuew69octp = []
		const _createCommandYdWDHe = () => { return _returnValuew69octp };
		const _returnValueYyEA7Nu = 9.935081942144613;
		const __helpCommandDescriptiontkSqHDr = () => { return _returnValueYyEA7Nu };
		const _cmdIcl0o8N = {
			"commands": _commandsvVuzpYM,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommand97y0bT,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsrIvUhqp,
		"createCommand": _createCommandYdWDHe,
		"_helpCommandDescription": __helpCommandDescriptiontkSqHDr
	}
		const _returnValueTrlbaHj = await _HelpliwMW9U.visibleCommands(_cmdIcl0o8N)
		const _argChoicesBBXuCrF = {
		
	}
		const _returnValueqmi4L4 = {
		
	}
		const _negatewHtpQzz = () => { return _returnValueqmi4L4 };
		const _defaultValuewYBRPON = undefined;
		const _returnValueErDAn9z = "UKtO9uhL";
		const _defaultValueDescriptionCr531M = () => { return _returnValueErDAn9z };
		const _envVarFvEAITK = undefined;
		const _descriptioncVZKump = "KGVjBJG0MasgQbmyPXsPkf0GvSuDtK2LayQfAm1D9jlMTp2LDflwSqwCy7dlZWVKD";
		const _optionWF1uxlR = {
			"argChoices": _argChoicesBBXuCrF,
		"negate": _negatewHtpQzz,
		"defaultValue": _defaultValuewYBRPON,
		"defaultValueDescription": _defaultValueDescriptionCr531M,
		"envVar": _envVarFvEAITK,
		"description": _descriptioncVZKump
	}
		const _returnValueSfxy5yT = await _HelpliwMW9U.optionDescription(_optionWF1uxlR)
	});

	it('test for Help', async () => {
		const _Helpj5pXZne = new Help()
		const _cmdY22zXdp = true;
		const _returnValuebNSCsQs = -3.5743035041012794;
		const _visibleOptionsTCctG8 = () => { return _returnValuebNSCsQs };
		const _returnValueBh0K2WZ = null;
		const _optionTermUmWKCyW = () => { return _returnValueBh0K2WZ };
		const _helperElo5fsm = {
			"visibleOptions": _visibleOptionsTCctG8,
		"optionTerm": _optionTermUmWKCyW
	}
		const _returnValue3CGHGa = await _Helpj5pXZne.longestOptionTermLength(_cmdY22zXdp, _helperElo5fsm)
		const _cmdqYZytfs = 7.683558275289631;
		const _sortSubcommands60QUwo = []
		const _returnValue8FOYNS = null;
		const _returnValuegS45rRt = () => { return _returnValue8FOYNS };
		const _subcommandTermdzvL1my = () => { return _returnValuegS45rRt };
		const _helperlOWlIT3 = {
			"sortSubcommands": _sortSubcommands60QUwo,
		"subcommandTerm": _subcommandTermdzvL1my
	}
		const _returnValueL4sTHd0 = await _Helpj5pXZne.longestSubcommandTermLength(_cmdqYZytfs, _helperlOWlIT3)
		const _arrayValueuC22w3 = -6.910885628155405;
		const _optionUwuxvM0 = [_arrayValueuC22w3]
		const _returnValuegptsxWV = await _Helpj5pXZne.optionTerm(_optionUwuxvM0)
	});

	it('test for Help', async () => {
		const _HelpM1B8OG = new Help()
		const __argsDescriptiondCyIPq = {
		
	}
		const __argsdwZxtRX = {
		
	}
		const _cmdh2pIcup = {
			"_argsDescription": __argsDescriptiondCyIPq,
		"_args": __argsdwZxtRX
	}
		const _returnValueQU2hYWG = await _HelpM1B8OG.visibleArguments(_cmdh2pIcup)
		const __name0avQKf = {
		
	}
		const __aliasesM8cA6B2 = {
		
	}
		const _parentDBZACQo = {
		
	}
		const _arrayValuec3brygT = undefined;
		const _arrayValuesxAygkZ = {
		
	}
		const _arrayValueVjbu9p = "QXgdG43cPyUlcO7BVMLgAE1S9";
		const _arrayValueW6hYqs = -4.261882028148988;
		const _returnValueDAD5t8o = [_arrayValuec3brygT, _arrayValuesxAygkZ, _arrayValueVjbu9p, _arrayValueW6hYqs]
		const _usageUurEZsn = () => { return _returnValueDAD5t8o };
		const _cmdrqGu8jq = {
			"_name": __name0avQKf,
		"_aliases": __aliasesM8cA6B2,
		"parent": _parentDBZACQo,
		"usage": _usageUurEZsn
	}
		const _returnValueLxRrZP = await _HelpM1B8OG.commandUsage(_cmdrqGu8jq)
		const _cmdvgHLfZ = []
		const _sortSubcommandsQ87tC9n = null;
		const _returnValuemv697ek = null;
		const _subcommandTermkkMB9lk = () => { return _returnValuemv697ek };
		const _helperfIEPuyH = {
			"sortSubcommands": _sortSubcommandsQ87tC9n,
		"subcommandTerm": _subcommandTermkkMB9lk
	}
		const _returnValueIQeXi3i = await _HelpM1B8OG.longestSubcommandTermLength(_cmdvgHLfZ, _helperfIEPuyH)
		const _cmdyxQQpPo = "vDhJHCeROgFhw31oxba53yxhNvU66DU7HnqxgwmyFOhKV2885yjng3GcX2QWgbDgSP2Sz3RT5Qv1I6BqaQeaG";
		const _arrayValueT0mvKUj = undefined;
		const _sortSubcommandsdMcGA9c = [_arrayValueT0mvKUj]
		const _returnValueamE7AgN = false;
		const _subcommandTermHWeXCNL = () => { return _returnValueamE7AgN };
		const _helperhPVX0Af = {
			"sortSubcommands": _sortSubcommandsdMcGA9c,
		"subcommandTerm": _subcommandTermHWeXCNL
	}
		const _returnValueZSyek3F = await _HelpM1B8OG.longestSubcommandTermLength(_cmdyxQQpPo, _helperhPVX0Af)
	});

	it('test for Help', async () => {
		const _HelpV9gQRxX = new Help()
		const _optionsswOaD0R = {
		
	}
		const __hasHelpOptionyVNdL1Y = 8.856619626218443;
		const _returnValuehPA1zfR = 8.888835153659201;
		const _returnValueQLLsxIC = () => { return _returnValuehPA1zfR };
		const __helpShortFlag589EhN = () => { return _returnValueQLLsxIC };
		const _returnValueOxHc6Av = undefined;
		const __findOptionppkLPIw = () => { return _returnValueOxHc6Av };
		const __helpLongFlagbPFm1EZ = {
		
	}
		const _returnValuelzbdAF = undefined;
		const _createOptionbIp6SR5 = () => { return _returnValuelzbdAF };
		const __helpDescriptionAzBOAQa = "rlnmU2UtxE4BxiPoNfvCMlPPOAzrozSJiYrMgEjP8YAPJqkSaDX2IvSkMv8a8w2";
		const __helpFlagsR9v7scz = undefined;
		const _cmdIDFKfe = {
			"options": _optionsswOaD0R,
		"_hasHelpOption": __hasHelpOptionyVNdL1Y,
		"_helpShortFlag": __helpShortFlag589EhN,
		"_findOption": __findOptionppkLPIw,
		"_helpLongFlag": __helpLongFlagbPFm1EZ,
		"createOption": _createOptionbIp6SR5,
		"_helpDescription": __helpDescriptionAzBOAQa,
		"_helpFlags": __helpFlagsR9v7scz
	}
		const _returnValueZUHPS13 = await _HelpV9gQRxX.visibleOptions(_cmdIDFKfe)
		const _cmdcmJnjnZ = {
		
	}
		const _visibleOptionsaJvUVbb = true;
		const _returnValueep2mkmM = false;
		const _optionTermYbKEmBq = () => { return _returnValueep2mkmM };
		const _helpervgAizwd = {
			"visibleOptions": _visibleOptionsaJvUVbb,
		"optionTerm": _optionTermYbKEmBq
	}
		const _returnValuewFlGl1 = await _HelpV9gQRxX.longestOptionTermLength(_cmdcmJnjnZ, _helpervgAizwd)
		const _cmddax7FxV = 4.550120445730272;
		const _returnValuezTqPx9a = null;
		const _visibleOptionsRbGc89A = () => { return _returnValuezTqPx9a };
		const _returnValueiEGZSlA = {
		
	}
		const _optionTermN7iGCr = () => { return _returnValueiEGZSlA };
		const _helperSFRN4iG = {
			"visibleOptions": _visibleOptionsRbGc89A,
		"optionTerm": _optionTermN7iGCr
	}
		const _returnValueJg5KgGi = await _HelpV9gQRxX.longestOptionTermLength(_cmddax7FxV, _helperSFRN4iG)
	});

	it('test for Help', async () => {
		const _HelpSTCmLAw = new Help()
		const _argChoicesz2prvv1 = {
		
	}
		const _negatel93GPds = null;
		const _defaultValueoNDvtJQ = undefined;
		const _defaultValueDescriptioniDRkEPL = undefined;
		const _envVarR1glbT = "M6sPillgyIXIqZ2njRc75CBjKLHlkVVflA2Yh0NGjW8VNUZXTp5oYKlcYYQlEjzMePR6vj3NBw2E";
		const _descriptionhFgIfYT = "iKetwumI293SwuXzEbiDcNyb1WRhggizvL8GxVqhFnRSW73kT9Qolj7lK5X0K7T6bnrbyCkvn";
		const _optionkRScA9w = {
			"argChoices": _argChoicesz2prvv1,
		"negate": _negatel93GPds,
		"defaultValue": _defaultValueoNDvtJQ,
		"defaultValueDescription": _defaultValueDescriptioniDRkEPL,
		"envVar": _envVarR1glbT,
		"description": _descriptionhFgIfYT
	}
		const _returnValuehb1MR2T = await _HelpSTCmLAw.optionDescription(_optionkRScA9w)
		const _nameri3DF2H = -2.9428450899143543;
		const _argumentjfhr3WC = {
			"name": _nameri3DF2H
	}
		const _returnValuexkhrGJ = await _HelpSTCmLAw.argumentTerm(_argumentjfhr3WC)
		const _cmdDXPHTBW = null;
		const _returnValueE24rlwD = {
		
	}
		const _longestOptionTermLengthBhvh1XM = () => { return _returnValueE24rlwD };
		const _returnValuehCNjB7 = true;
		const _longestSubcommandTermLengthOUZ3TgP = () => { return _returnValuehCNjB7 };
		const _returnValuePLVe4XL = undefined;
		const _longestArgumentTermLengthEkIZQJO = () => { return _returnValuePLVe4XL };
		const _helperLibGCzG = {
			"longestOptionTermLength": _longestOptionTermLengthBhvh1XM,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOUZ3TgP,
		"longestArgumentTermLength": _longestArgumentTermLengthEkIZQJO
	}
		const _returnValueFzQMbc = await _HelpSTCmLAw.padWidth(_cmdDXPHTBW, _helperLibGCzG)
	});

	it('test for Help', async () => {
		const _Helpo5V26nr = new Help()
		const _returnValueN1F4TOy = null;
		const _description6eHnRu = () => { return _returnValueN1F4TOy };
		const _cmduUoCM3Y = {
			"description": _description6eHnRu
	}
		const _returnValueUFWk40g = await _Helpo5V26nr.commandDescription(_cmduUoCM3Y)
		const _cmdmOG7EfI = "pL9N4CVklXKB";
		const _sortSubcommandsy6A9LTn = true;
		const _returnValuesnPiO7o = []
		const _subcommandTermMGLBmYb = () => { return _returnValuesnPiO7o };
		const _helperB5SyUhN = {
			"sortSubcommands": _sortSubcommandsy6A9LTn,
		"subcommandTerm": _subcommandTermMGLBmYb
	}
		const _returnValueSmHkU7 = await _Helpo5V26nr.formatHelp(_cmdmOG7EfI, _helperB5SyUhN)
	});

	it('test for Help', async () => {
		const _HelpVc90XKL = new Help()
		const _returnValueDuQDX0q = undefined;
		const _nameJISR9zf = () => { return _returnValueDuQDX0q };
		const _argumentfxJq04 = {
			"name": _nameJISR9zf
	}
		const _returnValueaFXgNP = await _HelpVc90XKL.argumentTerm(_argumentfxJq04)
		const _optionsaHlNjNK = {
		
	}
		const __hasHelpOptionoZC8UVC = 8.335078799383492;
		const __helpShortFlagrHw70cD = undefined;
		const _returnValuePbqOGC1 = []
		const __findOptionYfbQwWy = () => { return _returnValuePbqOGC1 };
		const __helpLongFlagO7O0rOl = -5.536449790411205;
		const _createOptionQelXui = null;
		const __helpDescriptionNh8yGbP = {
		
	}
		const _returnValueiAJOjJB = false;
		const _arrayValueTzWoeuu = () => { return _returnValueiAJOjJB };
		const _arrayValuepSrB36X = "vPYEkQWsNYmsucljpTNVatQm2VblVqt2786zpaMRcS2h9vrVxVm1EPW97E5WKG4i0c5ssXAbHSgBlOjwdaR";
		const __helpFlagsv8puege = [_arrayValueTzWoeuu, _arrayValuepSrB36X]
		const _cmdIXELsBt = {
			"options": _optionsaHlNjNK,
		"_hasHelpOption": __hasHelpOptionoZC8UVC,
		"_helpShortFlag": __helpShortFlagrHw70cD,
		"_findOption": __findOptionYfbQwWy,
		"_helpLongFlag": __helpLongFlagO7O0rOl,
		"createOption": _createOptionQelXui,
		"_helpDescription": __helpDescriptionNh8yGbP,
		"_helpFlags": __helpFlagsv8puege
	}
		const _returnValueBpJ0Bjy = await _HelpVc90XKL.visibleOptions(_cmdIXELsBt)
		const _argChoicesYfonyO2 = {
		
	}
		const _defaultValuePilbzx7 = undefined;
		const _defaultValueDescriptionMKTZ745 = "9V";
		const _descriptionvzf5dBV = undefined;
		const _argumentahoCOFe = {
			"argChoices": _argChoicesYfonyO2,
		"defaultValue": _defaultValuePilbzx7,
		"defaultValueDescription": _defaultValueDescriptionMKTZ745,
		"description": _descriptionvzf5dBV
	}
		const _returnValueB7bbYT = await _HelpVc90XKL.argumentDescription(_argumentahoCOFe)
		const _returnValuezOT3Rg = undefined;
		const _namewU4CoUM = () => { return _returnValuezOT3Rg };
		const _argumentebReLiq = {
			"name": _namewU4CoUM
	}
		const _returnValueiDBUqyQ = await _HelpVc90XKL.argumentTerm(_argumentebReLiq)
	});

	it('test for Help', async () => {
		const _HelpHLwbpBE = new Help()
		const _cmdiqsPfVU = "yF30IgwmLSod9E1Qi7n4XoHpQopNgReesSsUmKutC4NEtUvqlTC9dwoD69vefdm86S4";
		const _returnValueZRxiLgi = await _HelpHLwbpBE.subcommandTerm(_cmdiqsPfVU)
		const _argChoicesS3mPK0u = "JANPv7q5PZ5rw1mnpZ9MwByKkDzmGAUJkHbqUwOv6Jx7iUJSzS3aOo1qNlfTveJYTOLSqP02fYTRoiIeedJaR";
		const _defaultValue03Bvto = undefined;
		const _returnValueyrbnAyD = null;
		const _returnValuelZOcawE = () => { return _returnValueyrbnAyD };
		const _defaultValueDescriptionHxJZTYM = () => { return _returnValuelZOcawE };
		const _descriptionfsLkoid = true;
		const _argumentUKDXhdS = {
			"argChoices": _argChoicesS3mPK0u,
		"defaultValue": _defaultValue03Bvto,
		"defaultValueDescription": _defaultValueDescriptionHxJZTYM,
		"description": _descriptionfsLkoid
	}
		const _returnValueeycPUOG = await _HelpHLwbpBE.argumentDescription(_argumentUKDXhdS)
		const _arrayValuem5G27Ov = undefined;
		const _arrayValueNojKdOJ = null;
		const _cmdwPB0KAF = [_arrayValuem5G27Ov, _arrayValueNojKdOJ]
		const _arrayValuesQgdCRq = 8.392542713642701;
		const _sortSubcommandsNDrcLQ = [_arrayValuesQgdCRq]
		const _returnValuexYa9qv = false;
		const _subcommandTermHS2DR5d = () => { return _returnValuexYa9qv };
		const _helperavVza1I = {
			"sortSubcommands": _sortSubcommandsNDrcLQ,
		"subcommandTerm": _subcommandTermHS2DR5d
	}
		const _returnValuevVOTdAj = await _HelpHLwbpBE.longestSubcommandTermLength(_cmdwPB0KAF, _helperavVza1I)
		const _argChoicesVQeiXxl = {
		
	}
		const _negatewLu4XX4 = false;
		const _defaultValueDWb262s = undefined;
		const _defaultValueDescriptiono02B7d6 = "NxjTvVleYtK";
		const _envVarolejT18 = undefined;
		const _descriptionG0747Te = true;
		const _optiontMW5brV = {
			"argChoices": _argChoicesVQeiXxl,
		"negate": _negatewLu4XX4,
		"defaultValue": _defaultValueDWb262s,
		"defaultValueDescription": _defaultValueDescriptiono02B7d6,
		"envVar": _envVarolejT18,
		"description": _descriptionG0747Te
	}
		const _returnValuehKHIO8F = await _HelpHLwbpBE.optionDescription(_optiontMW5brV)
	});

	it('test for Help', async () => {
		const _HelpmX5YcZh = new Help()
		const _cmdYLUs7aD = "hh9JR";
		const _returnValuexC3McY3 = null;
		const _longestOptionTermLengthZ1CgpNX = () => { return _returnValuexC3McY3 };
		const _returnValueH6htfNJ = undefined;
		const _longestSubcommandTermLengthlU9V2Dy = () => { return _returnValueH6htfNJ };
		const _returnValueD2JCrUl = null;
		const _longestArgumentTermLengthuonKTx6 = () => { return _returnValueD2JCrUl };
		const _helperxVPOLZx = {
			"longestOptionTermLength": _longestOptionTermLengthZ1CgpNX,
		"longestSubcommandTermLength": _longestSubcommandTermLengthlU9V2Dy,
		"longestArgumentTermLength": _longestArgumentTermLengthuonKTx6
	}
		const _returnValuekIHZaS = await _HelpmX5YcZh.padWidth(_cmdYLUs7aD, _helperxVPOLZx)
		const _optionsLZOf37u = undefined;
		const _arrayValueijG1eNm = {
		
	}
		const _arrayValueHdyi9lf = true;
		const _arrayValuehPy5HIe = 2.758789452040384;
		const __hasHelpOptionPxEf8ZU = [_arrayValueijG1eNm, _arrayValueHdyi9lf, _arrayValuehPy5HIe]
		const __helpShortFlaguvls9dK = undefined;
		const _returnValueHpiTYQ9 = undefined;
		const __findOptionAet6YOJ = () => { return _returnValueHpiTYQ9 };
		const __helpLongFlagnxolic7 = {
		
	}
		const _returnValuexJ3kXnM = undefined;
		const _createOptionpFVQOqe = () => { return _returnValuexJ3kXnM };
		const __helpDescription9WHDIB = "RE4R0SQh2Ip0BYFHi8Q2HKbyxrxYKL57oFC2pHEIudt";
		const _arrayValuerpMxqxo = -5.295476303152074;
		const __helpFlags2wTtx4 = [_arrayValuerpMxqxo]
		const _cmdw9TiAgw = {
			"options": _optionsLZOf37u,
		"_hasHelpOption": __hasHelpOptionPxEf8ZU,
		"_helpShortFlag": __helpShortFlaguvls9dK,
		"_findOption": __findOptionAet6YOJ,
		"_helpLongFlag": __helpLongFlagnxolic7,
		"createOption": _createOptionpFVQOqe,
		"_helpDescription": __helpDescription9WHDIB,
		"_helpFlags": __helpFlags2wTtx4
	}
		const _returnValueXa7fobC = await _HelpmX5YcZh.visibleOptions(_cmdw9TiAgw)
		const _cmdsTOYvz3 = 8.210258165316091;
		const _sortSubcommandsXtqbQWe = null;
		const _returnValueQDl0nks = false;
		const _subcommandTermBPWBTpQ = () => { return _returnValueQDl0nks };
		const _helperv6nPYz = {
			"sortSubcommands": _sortSubcommandsXtqbQWe,
		"subcommandTerm": _subcommandTermBPWBTpQ
	}
		const _returnValueQiGBvLH = await _HelpmX5YcZh.formatHelp(_cmdsTOYvz3, _helperv6nPYz)
		const __nameeICTe7 = {
		
	}
		const __aliasesB2B3tIc = {
		
	}
		const _parentbRosDvm = undefined;
		const _returnValuexFMrtxe = 0.21496774927402917;
		const _usagegVzfTA4 = () => { return _returnValuexFMrtxe };
		const _cmdiguzJK = {
			"_name": __nameeICTe7,
		"_aliases": __aliasesB2B3tIc,
		"parent": _parentbRosDvm,
		"usage": _usagegVzfTA4
	}
		const _returnValuenXtUE4F = await _HelpmX5YcZh.commandUsage(_cmdiguzJK)
		const _returnValueUetxec = 0.9171887125168254;
		const _namezDqDp6m = () => { return _returnValueUetxec };
		const _argumentxgPHo8l = {
			"name": _namezDqDp6m
	}
		const _returnValuejqrAZwz = await _HelpmX5YcZh.argumentTerm(_argumentxgPHo8l)
	});

	it('test for Help', async () => {
		const _HelpfYUiVOo = new Help()
		const _flagsvk8LlRA = undefined;
		const _optionDjqf7NJ = {
			"flags": _flagsvk8LlRA
	}
		const _returnValuezPTBqkN = await _HelpfYUiVOo.optionTerm(_optionDjqf7NJ)
		const _arrayValuezQx8j1M = null;
		const _arrayValueEWG514 = [_arrayValuezQx8j1M]
		const _arrayValueXxh9mx = null;
		const _returnValueQEUCczj = true;
		const _arrayValuehcVL4AJ = () => { return _returnValueQEUCczj };
		const _returnValueSigE4Ce = null;
		const _arrayValue8tpIiG = () => { return _returnValueSigE4Ce };
		const _returnValueP1nhgub = null;
		const _arrayValuePgOcaX = () => { return _returnValueP1nhgub };
		const _returnValuePezi1fJ = [_arrayValuehcVL4AJ, _arrayValue8tpIiG, _arrayValuePgOcaX]
		const _arrayValueVVwau9t = () => { return _returnValuePezi1fJ };
		const _arrayValueU3rHZ3p = null;
		const _arrayValueWi6nI6Q = [_arrayValueXxh9mx, _arrayValueVVwau9t, _arrayValueU3rHZ3p]
		const _returnValueVQFMXm = {
		
	}
		const _arrayValuepus8es = () => { return _returnValueVQFMXm };
		const __argsUwY8Fz = [_arrayValueEWG514, _arrayValueWi6nI6Q, _arrayValuepus8es]
		const __nameJU5mZm = -5.0660410566730985;
		const __aliasesH3mlR6O = {
		
	}
		const _optionsvEwwfJ4 = {
		
	}
		const _cmdc4it559 = {
			"_args": __argsUwY8Fz,
		"_name": __nameJU5mZm,
		"_aliases": __aliasesH3mlR6O,
		"options": _optionsvEwwfJ4
	}
		const _returnValueXDFv7W1 = await _HelpfYUiVOo.subcommandTerm(_cmdc4it559)
	});

	it('test for Help', async () => {
		const _HelpC1enVv = new Help()
		const _flagsJ3WeVw = undefined;
		const _optionV3QcgFH = {
			"flags": _flagsJ3WeVw
	}
		const _returnValueEcYhJMv = await _HelpC1enVv.optionTerm(_optionV3QcgFH)
		const _cmdEj8RwgV = "TvW9s5dNwKwHKqlE8dVBRMtEho76YIKlalo0";
		const _returnValuePN9p8d3 = -9.590163383636451;
		const _sortSubcommandsRZztGlM = () => { return _returnValuePN9p8d3 };
		const _returnValueojOLrbr = false;
		const _subcommandTermPkClqIW = () => { return _returnValueojOLrbr };
		const _helperCrnlMSJ = {
			"sortSubcommands": _sortSubcommandsRZztGlM,
		"subcommandTerm": _subcommandTermPkClqIW
	}
		const _returnValuezWcfWu = await _HelpC1enVv.longestSubcommandTermLength(_cmdEj8RwgV, _helperCrnlMSJ)
	});

	it('test for Help', async () => {
		const _HelpzHZNVLo = new Help()
		const __namewXkitUr = {
		
	}
		const __aliasesuhze8TK = {
		
	}
		const _parentrGzrkE = {
		
	}
		const _returnValuevpoH51C = "2W";
		const _arrayValueADw4agQ = () => { return _returnValuevpoH51C };
		const _arrayValueUcYQqk = undefined;
		const _returnValueVlmFtqB = [_arrayValueADw4agQ, _arrayValueUcYQqk]
		const _usageFuFzutL = () => { return _returnValueVlmFtqB };
		const _cmdMpM0JEQ = {
			"_name": __namewXkitUr,
		"_aliases": __aliasesuhze8TK,
		"parent": _parentrGzrkE,
		"usage": _usageFuFzutL
	}
		const _returnValueJ6LiZoo = await _HelpzHZNVLo.commandUsage(_cmdMpM0JEQ)
		const _cmdgqz4WZi = {
		
	}
		const _returnValueqyYNZOY = -6.4247413959544835;
		const _visibleOptionsy7xUWW4 = () => { return _returnValueqyYNZOY };
		const _returnValueKNwaKNX = true;
		const _optionTermQckVuMM = () => { return _returnValueKNwaKNX };
		const _helpersobH8tW = {
			"visibleOptions": _visibleOptionsy7xUWW4,
		"optionTerm": _optionTermQckVuMM
	}
		const _returnValuesZzMfDQ = await _HelpzHZNVLo.longestOptionTermLength(_cmdgqz4WZi, _helpersobH8tW)
	});

	it('test for Help', async () => {
		const _Helpi1ON549 = new Help()
		const _returnValueEiObVEy = null;
		const _descriptionZMjwq78 = () => { return _returnValueEiObVEy };
		const _cmdSng332N = {
			"description": _descriptionZMjwq78
	}
		const _returnValueuXMpyyj = await _Helpi1ON549.subcommandDescription(_cmdSng332N)
		const _returnValuewa7MmFS = {
		
	}
		const _cmdJWgQ8zt = () => { return _returnValuewa7MmFS };
		const _visibleOptionsb8eGN0a = true;
		const _returnValueb5ZnNY1 = false;
		const _optionTermmcp1joF = () => { return _returnValueb5ZnNY1 };
		const _helperqzEm5Q7 = {
			"visibleOptions": _visibleOptionsb8eGN0a,
		"optionTerm": _optionTermmcp1joF
	}
		const _returnValuexjvBItL = await _Helpi1ON549.longestOptionTermLength(_cmdJWgQ8zt, _helperqzEm5Q7)
		const _argChoicesMod87xf = {
		
	}
		const _arrayValueJ3tqhJy = {
		
	}
		const _arrayValue3qduHd = []
		const _arrayValuepZztNRD = null;
		const _negatee1jwlI = [_arrayValueJ3tqhJy, _arrayValue3qduHd, _arrayValuepZztNRD]
		const _defaultValueAdvm2Kb = undefined;
		const _defaultValueDescriptionrT9Dmgi = undefined;
		const _envVarIEbiMe1 = undefined;
		const _arrayValueD4ZWIK8 = undefined;
		const _descriptionylHuxQV = [_arrayValueD4ZWIK8]
		const _optionBRZyH89 = {
			"argChoices": _argChoicesMod87xf,
		"negate": _negatee1jwlI,
		"defaultValue": _defaultValueAdvm2Kb,
		"defaultValueDescription": _defaultValueDescriptionrT9Dmgi,
		"envVar": _envVarIEbiMe1,
		"description": _descriptionylHuxQV
	}
		const _returnValueZvsWR7J = await _Helpi1ON549.optionDescription(_optionBRZyH89)
		const _returnValueu7U8Hvs = "qLRIMwmANmDTVIb7zqLPmhLuRChLY7JFUJgxwd9";
		const _descriptionF8aQjzJ = () => { return _returnValueu7U8Hvs };
		const _cmdAhm4N3p = {
			"description": _descriptionF8aQjzJ
	}
		const _returnValuewssKPvz = await _Helpi1ON549.commandDescription(_cmdAhm4N3p)
	});

	it('test for Help', async () => {
		const _HelpqxYlycS = new Help()
		const _argChoicesOfzIkpc = {
		
	}
		const _arrayValueV7HgKTA = false;
		const _arrayValue0Pt1ty = null;
		const _arrayValueBbroAvq = undefined;
		const _arrayValueWCcz01R = [_arrayValueBbroAvq]
		const _arrayValuemoN36Kf = [_arrayValue0Pt1ty, _arrayValueWCcz01R]
		const _returnValuepPau3yo = [_arrayValueV7HgKTA, _arrayValuemoN36Kf]
		const _negateLXQnPb = () => { return _returnValuepPau3yo };
		const _defaultValuePigQKeg = undefined;
		const _defaultValueDescriptionpE98ga1 = undefined;
		const _envVartxS8xTc = undefined;
		const _descriptionMh9k1i = false;
		const _optionCwWwtFo = {
			"argChoices": _argChoicesOfzIkpc,
		"negate": _negateLXQnPb,
		"defaultValue": _defaultValuePigQKeg,
		"defaultValueDescription": _defaultValueDescriptionpE98ga1,
		"envVar": _envVartxS8xTc,
		"description": _descriptionMh9k1i
	}
		const _returnValueQ81WXBi = await _HelpqxYlycS.optionDescription(_optionCwWwtFo)
		const _cmdAAnSa1t = false;
		const _helperdJRXrC = -8.838300786238682;
		const _returnValuekTVYZs0 = await _HelpqxYlycS.longestSubcommandTermLength(_cmdAAnSa1t, _helperdJRXrC)
		const _argChoicesPS6G5YB = {
		
	}
		const _defaultValuejp4GGVH = undefined;
		const _defaultValueDescriptionwzj4eRa = 0.8608721344150343;
		const _descriptionrm73Jy9 = undefined;
		const _argumentXNjhrCB = {
			"argChoices": _argChoicesPS6G5YB,
		"defaultValue": _defaultValuejp4GGVH,
		"defaultValueDescription": _defaultValueDescriptionwzj4eRa,
		"description": _descriptionrm73Jy9
	}
		const _returnValueRapkuem = await _HelpqxYlycS.argumentDescription(_argumentXNjhrCB)
		const _cmded5iQYz = "lpG5uVexr4En2UPplYZ627dcDnJltgPTU82Mp7jXjbFxY6lV6OBr9wSQoDraup2FGIfjkkGkcJ4pgpBNJOkB5sK4SfxG";
		const _sortSubcommandsitWv6Ee = "RnrQqqqvXP5TSHJAhqFmuywHowrLkBlmWFWjP0Q1pWrAePWmi";
		const _returnValueaCa0qnR = null;
		const _subcommandTermriug4K = () => { return _returnValueaCa0qnR };
		const _helpert9FzF87 = {
			"sortSubcommands": _sortSubcommandsitWv6Ee,
		"subcommandTerm": _subcommandTermriug4K
	}
		const _returnValuepXCTGjm = await _HelpqxYlycS.longestSubcommandTermLength(_cmded5iQYz, _helpert9FzF87)
		const _returnValueY7PWVNr = 9.921433892965275;
		const _descriptionbrSI28h = () => { return _returnValueY7PWVNr };
		const _cmdGmOMrCD = {
			"description": _descriptionbrSI28h
	}
		const _returnValue5G9YwM = await _HelpqxYlycS.commandDescription(_cmdGmOMrCD)
	});

	it('test for Help', async () => {
		const _HelpmRHpXWF = new Help()
		const _argChoicesOGjVAk4 = undefined;
		const _defaultValuej1viJ3H = undefined;
		const _defaultValueDescriptionsYY5PWF = -4.559045800669395;
		const _arrayValuejIndJTw = "DvIGrsSCca0j1APRRDwDVKBfDHRN8rF85QRiharBN965rXIkfUzx";
		const _arrayValuejsUd13 = false;
		const _arrayValueoupXwjH = {
		
	}
		const _descriptionnorFtWL = [_arrayValuejIndJTw, _arrayValuejsUd13, _arrayValueoupXwjH]
		const _argumentnh1uqj2 = {
			"argChoices": _argChoicesOGjVAk4,
		"defaultValue": _defaultValuej1viJ3H,
		"defaultValueDescription": _defaultValueDescriptionsYY5PWF,
		"description": _descriptionnorFtWL
	}
		const _returnValueCovfAf8 = await _HelpmRHpXWF.argumentDescription(_argumentnh1uqj2)
		const _cmdLjXoLNa = 2.2060206485149934;
		const _sortSubcommandsEnoquj0 = 8.981560529265519;
		const _returnValueuX64LSU = null;
		const _returnValuegCfBlNm = () => { return _returnValueuX64LSU };
		const _returnValueyFweEKk = () => { return _returnValuegCfBlNm };
		const _returnValuet1G6GA1 = () => { return _returnValueyFweEKk };
		const _returnValuehyc5mxD = () => { return _returnValuet1G6GA1 };
		const _subcommandTermFVLFXo = () => { return _returnValuehyc5mxD };
		const _helperApBtuP2 = {
			"sortSubcommands": _sortSubcommandsEnoquj0,
		"subcommandTerm": _subcommandTermFVLFXo
	}
		const _returnValueUNJP5I6 = await _HelpmRHpXWF.formatHelp(_cmdLjXoLNa, _helperApBtuP2)
		const _cmdIPRYDF9 = 4.524478791686544;
		const _returnValueyydu6Yx = await _HelpmRHpXWF.commandDescription(_cmdIPRYDF9)
		const _returnValuePIjvBE = false;
		const _cmdaDWjHea = () => { return _returnValuePIjvBE };
		const _longestOptionTermLengthSTfJjuJ = undefined;
		const _arrayValueVrlfBqA = undefined;
		const _arrayValueCXjWr34 = -4.889657798362139;
		const _arrayValueyBaeFBt = [_arrayValueVrlfBqA, _arrayValueCXjWr34]
		const _arrayValueqsiz2Xm = null;
		const _arrayValueL3kFGDL = -5.48353255683827;
		const _returnValuereouvt9 = [_arrayValueyBaeFBt, _arrayValueqsiz2Xm, _arrayValueL3kFGDL]
		const _returnValuenpTvRKv = () => { return _returnValuereouvt9 };
		const _longestSubcommandTermLengthiPpnKR = () => { return _returnValuenpTvRKv };
		const _longestArgumentTermLengthiAirpKu = null;
		const _helpereLi9KTz = {
			"longestOptionTermLength": _longestOptionTermLengthSTfJjuJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthiPpnKR,
		"longestArgumentTermLength": _longestArgumentTermLengthiAirpKu
	}
		const _returnValuevHLTuAr = await _HelpmRHpXWF.padWidth(_cmdaDWjHea, _helpereLi9KTz)
	});

	it('test for Help', async () => {
		const _HelpVXG3Cd2 = new Help()
		const _argChoicesoAOb8L5 = {
		
	}
		const _negateaVB6AME = "HlkPJVtZw7wSeQkY5j";
		const _defaultValueOzysoTd = undefined;
		const _defaultValueDescriptionGJy47w = false;
		const _envVarDAy9uL7 = 2.4621026732673315;
		const _descriptionZykht4E = undefined;
		const _optionOeh2GYr = {
			"argChoices": _argChoicesoAOb8L5,
		"negate": _negateaVB6AME,
		"defaultValue": _defaultValueOzysoTd,
		"defaultValueDescription": _defaultValueDescriptionGJy47w,
		"envVar": _envVarDAy9uL7,
		"description": _descriptionZykht4E
	}
		const _returnValuequZhfvy = await _HelpVXG3Cd2.optionDescription(_optionOeh2GYr)
		const _returnValueVnVuVh1 = undefined;
		const _flagsz4nCa6s = () => { return _returnValueVnVuVh1 };
		const _optionnTsgNwy = {
			"flags": _flagsz4nCa6s
	}
		const _returnValueZfyS3D2 = await _HelpVXG3Cd2.optionTerm(_optionnTsgNwy)
	});

	it('test for Help', async () => {
		const _HelpUJhekS = new Help()
		const _strGjcUq6n = "76hEYmBcDzqkshWBo6LM6VWteyuoyCp4Dc9x8O7YFJAhqi3b6EpWc4hOEgYVAPEvW7YcP";
		const _widthgTZ2RS = 7.409904846213156;
		const _indentfRMGIAc = -9.596122543497383;
		const _minColumnWidthOqhv8YU = 5.668483911050934;
		const _returnValueA9nQkBY = await _HelpUJhekS.wrap(_strGjcUq6n, _widthgTZ2RS, _indentfRMGIAc, _minColumnWidthOqhv8YU)
		const _optionsCN4f958 = {
		
	}
		const __hasHelpOptionNOgg2WU = null;
		const __helpShortFlag1eN8pN = "XkYwldQKn7IHcLBk2KUHWUTnsk6khyaUg1EkOaZhT";
		const _returnValuePk6N6cC = {
		
	}
		const __findOptionIcIl6VF = () => { return _returnValuePk6N6cC };
		const __helpLongFlagtzP3iKt = "Lw3McniYkI85yQKuIz2q3tLh8eqv5fx2JB2yXFZYfWQEu2VgGfYT1sigw4scnH7eHY8qhpcvuBNbcT5or8RGipmnA";
		const _returnValuecSd9G0F = false;
		const _createOptionpDFJyZ = () => { return _returnValuecSd9G0F };
		const __helpDescriptionKF5K9DM = null;
		const _returnValuemvxNzVx = "xj6uiKHRfuOK";
		const __helpFlagsiy3uzGE = () => { return _returnValuemvxNzVx };
		const _cmdJ3C7Egd = {
			"options": _optionsCN4f958,
		"_hasHelpOption": __hasHelpOptionNOgg2WU,
		"_helpShortFlag": __helpShortFlag1eN8pN,
		"_findOption": __findOptionIcIl6VF,
		"_helpLongFlag": __helpLongFlagtzP3iKt,
		"createOption": _createOptionpDFJyZ,
		"_helpDescription": __helpDescriptionKF5K9DM,
		"_helpFlags": __helpFlagsiy3uzGE
	}
		const _returnValueS56wRPA = await _HelpUJhekS.visibleOptions(_cmdJ3C7Egd)
		const _cmdydmZWaq = undefined;
		const _returnValueb1t5az8 = undefined;
		const _longestOptionTermLengthyTQrbqS = () => { return _returnValueb1t5az8 };
		const _returnValuexoyfUsy = {
		
	}
		const _longestSubcommandTermLengthfjJymf9 = () => { return _returnValuexoyfUsy };
		const _longestArgumentTermLengthhepmis = -2.6322864416567935;
		const _helperzx5jHBf = {
			"longestOptionTermLength": _longestOptionTermLengthyTQrbqS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthfjJymf9,
		"longestArgumentTermLength": _longestArgumentTermLengthhepmis
	}
		const _returnValueUtK0zD = await _HelpUJhekS.padWidth(_cmdydmZWaq, _helperzx5jHBf)
	});

	it('test for Help', async () => {
		const _HelpvAZcu6S = new Help()
		const _returnValueca3n5EI = []
		const _matchqMueGd = () => { return _returnValueca3n5EI };
		const _returnValueXSHruCa = true;
		const _substrXKaHbni = () => { return _returnValueXSHruCa };
		const _stri88N56K = {
			"match": _matchqMueGd,
		"substr": _substrXKaHbni
	}
		const _widthOf9szDS = -9.42214787398056;
		const _indentaaApld = 2.9684825048495522;
		const _minColumnWidthkGMLZrm = -1.8344687134183744;
		const _returnValuetFvf0nu = await _HelpvAZcu6S.wrap(_stri88N56K, _widthOf9szDS, _indentaaApld, _minColumnWidthkGMLZrm)
		const __argsDescriptionogqTFLy = {
		
	}
		const __argsHV9rzAn = {
		
	}
		const _cmdY3VK3PJ = {
			"_argsDescription": __argsDescriptionogqTFLy,
		"_args": __argsHV9rzAn
	}
		const _returnValuek53M1F0 = await _HelpvAZcu6S.visibleArguments(_cmdY3VK3PJ)
		const _cmdvnzf8AA = -8.432688202516331;
		const _returnValuep5ve4XL = {
		
	}
		const _visibleArgumentsoQBRBw = () => { return _returnValuep5ve4XL };
		const _returnValueYqG8dUL = false;
		const _argumentTermChuPMwD = () => { return _returnValueYqG8dUL };
		const _helperH6wTU89 = {
			"visibleArguments": _visibleArgumentsoQBRBw,
		"argumentTerm": _argumentTermChuPMwD
	}
		const _returnValueKBX1u8I = await _HelpvAZcu6S.longestArgumentTermLength(_cmdvnzf8AA, _helperH6wTU89)
	});

	it('test for Help', async () => {
		const _HelpMRZF8AQ = new Help()
		const _flagsT7iRvMT = -6.90084480283626;
		const _optionm3lANIH = {
			"flags": _flagsT7iRvMT
	}
		const _returnValueoNOSgG = await _HelpMRZF8AQ.optionTerm(_optionm3lANIH)
		const __namePZeCpDN = {
		
	}
		const __aliasesgTOqMi = "3Wmww712USqKY7yxNNwljwMmiHAOeKHnpX";
		const _parentTokahzB = {
		
	}
		const _arrayValueZx0hqLy = -8.397738409690442;
		const _returnValueW2ylA2W = 8.92344287854613;
		const _arrayValueUjm0lwE = () => { return _returnValueW2ylA2W };
		const _arrayValuem8icu9C = "3IZISHnexhBXWoC8LEZTmT5zAlBocr6";
		const _arrayValueQTFvORQ = false;
		const _arrayValuePt6OXbu = []
		const _returnValueuv2t2Jr = [_arrayValueZx0hqLy, _arrayValueUjm0lwE, _arrayValuem8icu9C, _arrayValueQTFvORQ, _arrayValuePt6OXbu]
		const _usageOwYAltL = () => { return _returnValueuv2t2Jr };
		const _cmdnF684w7 = {
			"_name": __namePZeCpDN,
		"_aliases": __aliasesgTOqMi,
		"parent": _parentTokahzB,
		"usage": _usageOwYAltL
	}
		const _returnValuem2PY2Z5 = await _HelpMRZF8AQ.commandUsage(_cmdnF684w7)
		const __argsy9OUbUc = {
		
	}
		const __nameziRf8Y = -1.6894405468960638;
		const __aliasesJ21wear = {
		
	}
		const _optionsjhOaZTd = {
		
	}
		const _cmdu5KIrgh = {
			"_args": __argsy9OUbUc,
		"_name": __nameziRf8Y,
		"_aliases": __aliasesJ21wear,
		"options": _optionsjhOaZTd
	}
		const _returnValueiTxs7XC = await _HelpMRZF8AQ.subcommandTerm(_cmdu5KIrgh)
		const __argsDescriptioniLPURkZ = {
		
	}
		const __argsvfsGqLL = {
		
	}
		const _cmdUJmTMp5 = {
			"_argsDescription": __argsDescriptioniLPURkZ,
		"_args": __argsvfsGqLL
	}
		const _returnValueuyAf6Wf = await _HelpMRZF8AQ.visibleArguments(_cmdUJmTMp5)
		const _returnValueo9s6yAW = 8.99201805272384;
		const _nameHoRftcn = () => { return _returnValueo9s6yAW };
		const _argumentgGSiCOI = {
			"name": _nameHoRftcn
	}
		const _returnValueGgkMq0H = await _HelpMRZF8AQ.argumentTerm(_argumentgGSiCOI)
	});

	it('test for Help', async () => {
		const _HelpIAXFQNa = new Help()
		const _arrayValueYmsdsDQ = undefined;
		const _arrayValuehIzghYf = "q9C9wQpA3kcsxOXnU17LMfVrtBCCol4PnMyl2";
		const _argChoicesuFhq9Og = [_arrayValueYmsdsDQ, _arrayValuehIzghYf]
		const _defaultValuejHOoJT = undefined;
		const _defaultValueDescriptionMgjPN7R = undefined;
		const _returnValueDRvOLXD = 8.728840389398574;
		const _descriptionx9n4FUI = () => { return _returnValueDRvOLXD };
		const _argumentaSA6tKX = {
			"argChoices": _argChoicesuFhq9Og,
		"defaultValue": _defaultValuejHOoJT,
		"defaultValueDescription": _defaultValueDescriptionMgjPN7R,
		"description": _descriptionx9n4FUI
	}
		const _returnValuevZxJhBr = await _HelpIAXFQNa.argumentDescription(_argumentaSA6tKX)
		const _cmdjnqRKBI = "tkUoMRDTHXoHlv5gP2YlztqvwpYBwgPu6yJa6swfnK9waEA6N7ckIZzcW4ys1Ba5xRFTIEb8LqMq1YwkT82UTxADdmhV";
		const _returnValueeLXxqr0 = true;
		const _longestOptionTermLengthCHmBRX = () => { return _returnValueeLXxqr0 };
		const _arrayValuebqUDe0B = undefined;
		const _returnValueDCTGbmS = -6.189998484381896;
		const _arrayValueCiQKibf = () => { return _returnValueDCTGbmS };
		const _arrayValuevLJewS3 = "fYAqr2LFvlOnWmdQ8vvLSFApGTBrJp9KdFaGMKcblHXHSAdlIeDbPyJctnKYFMOn78LfOBlEbeTORkPrEIpKyvUMGDriGRD3FS";
		const _returnValuegLyfqtI = [_arrayValuebqUDe0B, _arrayValueCiQKibf, _arrayValuevLJewS3]
		const _longestSubcommandTermLengthgm3ddfF = () => { return _returnValuegLyfqtI };
		const _longestArgumentTermLengthBjjUH9D = true;
		const _helperlIJI3eU = {
			"longestOptionTermLength": _longestOptionTermLengthCHmBRX,
		"longestSubcommandTermLength": _longestSubcommandTermLengthgm3ddfF,
		"longestArgumentTermLength": _longestArgumentTermLengthBjjUH9D
	}
		const _returnValueUI195d = await _HelpIAXFQNa.padWidth(_cmdjnqRKBI, _helperlIJI3eU)
		const _cmdxs9hnFi = undefined;
		const _sortSubcommandsvJXJDr = null;
		const _returnValueCXJoReH = {
		
	}
		const _subcommandTermVf8K4hq = () => { return _returnValueCXJoReH };
		const _helperbnjFkKe = {
			"sortSubcommands": _sortSubcommandsvJXJDr,
		"subcommandTerm": _subcommandTermVf8K4hq
	}
		const _returnValueWLNiCIC = await _HelpIAXFQNa.longestSubcommandTermLength(_cmdxs9hnFi, _helperbnjFkKe)
		const _flagsD2gXKQ7 = -5.249368380710019;
		const _option9TLFt9 = {
			"flags": _flagsD2gXKQ7
	}
		const _returnValueOvoqW8e = await _HelpIAXFQNa.optionTerm(_option9TLFt9)
	});

	it('test for Help', async () => {
		const _HelpGTRQty = new Help()
		const _returnValuelAuJVT6 = undefined;
		const _matchgTMGFjp = () => { return _returnValuelAuJVT6 };
		const _arrayValuemxx3XD = true;
		const _arrayValueMckcWeP = "5ZKXlDXI1xXrjQwFi";
		const _arrayValueABxfqnD = [_arrayValueMckcWeP]
		const _returnValueCQm0DfI = [_arrayValuemxx3XD, _arrayValueABxfqnD]
		const _substrqFlmltB = () => { return _returnValueCQm0DfI };
		const _strWRvek5 = {
			"match": _matchgTMGFjp,
		"substr": _substrqFlmltB
	}
		const _width4Ztp2v = -8.381702020915363;
		const _indentQBTOzw8 = 0.7877144863783592;
		const _minColumnWidthEW3L7m6 = -6.905982279705065;
		const _returnValuem6bIStD = await _HelpGTRQty.wrap(_strWRvek5, _width4Ztp2v, _indentQBTOzw8, _minColumnWidthEW3L7m6)
		const __nameXfh1Bul = {
		
	}
		const __aliasesGbkSdtH = {
		
	}
		const _parentSJ45JcR = {
		
	}
		const _returnValueSgAa6sW = false;
		const _usageb9UsGhQ = () => { return _returnValueSgAa6sW };
		const _cmdstYoRmO = {
			"_name": __nameXfh1Bul,
		"_aliases": __aliasesGbkSdtH,
		"parent": _parentSJ45JcR,
		"usage": _usageb9UsGhQ
	}
		const _returnValueKc11QgN = await _HelpGTRQty.commandUsage(_cmdstYoRmO)
	});

	it('test for Help', async () => {
		const _HelppH5RFAJ = new Help()
		const _arrayValueccAcddH = true;
		const _commandsMUc6rXe = [_arrayValueccAcddH]
		const _returnValueRYChBi = null;
		const __hasImplicitHelpCommandZVseWS = () => { return _returnValueRYChBi };
		const __helpCommandnameAndArgsvc4noYT = {
		
	}
		const _arrayValueS9MzFaA = null;
		const _arrayValueeTEtrV = false;
		const _arrayValuesPqOvFG = -3.164513993463663;
		const _returnValueb8ntKG = [_arrayValueS9MzFaA, _arrayValueeTEtrV, _arrayValuesPqOvFG]
		const _createCommandgSvVN5T = () => { return _returnValueb8ntKG };
		const __helpCommandDescriptionk7VuweK = {
		
	}
		const _cmdp96Vqg = {
			"commands": _commandsMUc6rXe,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandZVseWS,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsvc4noYT,
		"createCommand": _createCommandgSvVN5T,
		"_helpCommandDescription": __helpCommandDescriptionk7VuweK
	}
		const _returnValueXlLF1w1 = await _HelppH5RFAJ.visibleCommands(_cmdp96Vqg)
		const _arrayValuecnNWOM = false;
		const _returnValuesZJA4y = [_arrayValuecnNWOM]
		const _cmdPIzkKnx = () => { return _returnValuesZJA4y };
		const _returnValuehfbF9S6 = 6.465712420600401;
		const _longestOptionTermLengthGmolRWW = () => { return _returnValuehfbF9S6 };
		const _returnValuet3XJ0E1 = "KdWOYOuGOJwAMMXEP3y2xlN2";
		const _longestSubcommandTermLengthM4sWuV8 = () => { return _returnValuet3XJ0E1 };
		const _returnValuejLYRtKi = "4cBHX3hV8IPD1NvXTGOmtOKDGWPBwww6BXyT4IKXPoEXCq4g2LijM56BLT8heDAlGsgjnqj6sLW7cA2";
		const _longestArgumentTermLengthWjIpOrP = () => { return _returnValuejLYRtKi };
		const _helperRxNMtvn = {
			"longestOptionTermLength": _longestOptionTermLengthGmolRWW,
		"longestSubcommandTermLength": _longestSubcommandTermLengthM4sWuV8,
		"longestArgumentTermLength": _longestArgumentTermLengthWjIpOrP
	}
		const _returnValuejGaGRdb = await _HelppH5RFAJ.padWidth(_cmdPIzkKnx, _helperRxNMtvn)
		const _cmdAx4WVq4 = 5.845332658590703;
		const _returnValueHmMcuj1 = await _HelppH5RFAJ.visibleArguments(_cmdAx4WVq4)
	});

	it('test for Help', async () => {
		const _HelpwXNVBP4 = new Help()
		const _arrayValueazPwOF = []
		const _optionsEuGMo6r = [_arrayValueazPwOF]
		const __hasHelpOptionoxnpTNU = {
		
	}
		const _arrayValueze8ycNR = undefined;
		const _returnValuegC57CHO = [_arrayValueze8ycNR]
		const __helpShortFlagVcnLL4n = () => { return _returnValuegC57CHO };
		const _returnValueeMJ8tvq = undefined;
		const __findOptionCe37NnI = () => { return _returnValueeMJ8tvq };
		const __helpLongFlagPkea3eX = undefined;
		const _returnValueSJ988Cd = "l1N3Uqg74rFVEenQemR2pcukhmPdOC3LhgqGQef";
		const _createOptionHFhQ60w = () => { return _returnValueSJ988Cd };
		const __helpDescriptionfBsySjJ = "xHTc8tdTYzjjLUW7xfru3l2xKB6kCqLlKxQYk9gqp98pMtxQ0Dw1";
		const __helpFlagsYsAk5JI = true;
		const _cmdWT4eYh = {
			"options": _optionsEuGMo6r,
		"_hasHelpOption": __hasHelpOptionoxnpTNU,
		"_helpShortFlag": __helpShortFlagVcnLL4n,
		"_findOption": __findOptionCe37NnI,
		"_helpLongFlag": __helpLongFlagPkea3eX,
		"createOption": _createOptionHFhQ60w,
		"_helpDescription": __helpDescriptionfBsySjJ,
		"_helpFlags": __helpFlagsYsAk5JI
	}
		const _returnValuewFWiCT6 = await _HelpwXNVBP4.visibleOptions(_cmdWT4eYh)
		const _cmdK3hDk4n = undefined;
		const _returnValuenq3dfA6 = false;
		const _helperI1S4pqG = () => { return _returnValuenq3dfA6 };
		const _returnValueIUQhKQt = await _HelpwXNVBP4.formatHelp(_cmdK3hDk4n, _helperI1S4pqG)
		const __argsDescriptionOZTi9B = {
		
	}
		const __argslFKomPT = {
		
	}
		const _cmdIhIGb2f = {
			"_argsDescription": __argsDescriptionOZTi9B,
		"_args": __argslFKomPT
	}
		const _returnValueVIr9maz = await _HelpwXNVBP4.visibleArguments(_cmdIhIGb2f)
		const _returnValueTUMUWCZ = null;
		const _namewBSPUp = () => { return _returnValueTUMUWCZ };
		const _argumentwfAp4qp = {
			"name": _namewBSPUp
	}
		const _returnValuemhvXWel = await _HelpwXNVBP4.argumentTerm(_argumentwfAp4qp)
	});

	it('test for Help', async () => {
		const _HelpeYNxuR4 = new Help()
		const _returnValuerkEHJ30 = undefined;
		const _descriptionsYUJZH3 = () => { return _returnValuerkEHJ30 };
		const _cmdihkF59A = {
			"description": _descriptionsYUJZH3
	}
		const _returnValueMEam6L = await _HelpeYNxuR4.subcommandDescription(_cmdihkF59A)
		const _arrayValueHE8hXI = undefined;
		const _arrayValueF9OvcpB = [_arrayValueHE8hXI]
		const _arrayValue4W1exy = "L1hCwTcpzVX2ynRKsf1A70YHmfO5zsTblbu99VKM6e9NwwVEmoahd2gpH3lip0ViJD1IP1eHZPmcA56DHBOCQBhv";
		const _commandsYWxQJ3t = [_arrayValueF9OvcpB, _arrayValue4W1exy]
		const _arrayValueglKyk6b = {
		
	}
		const _arrayValueQUO6sb4 = "RroJVAl16pndBoMX7kFRxJEr9edyQGctN";
		const _arrayValueGu0UyL = 0.41809036897521956;
		const _returnValueHmZ1MvG = [_arrayValueglKyk6b, _arrayValueQUO6sb4, _arrayValueGu0UyL]
		const __hasImplicitHelpCommandEcfbAft = () => { return _returnValueHmZ1MvG };
		const __helpCommandnameAndArgsf7I5Ml7 = {
		
	}
		const _returnValueq6EErpK = null;
		const _createCommandaq4ZYQD = () => { return _returnValueq6EErpK };
		const __helpCommandDescriptionIAQcrEn = null;
		const _cmdpQNBPE0 = {
			"commands": _commandsYWxQJ3t,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandEcfbAft,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsf7I5Ml7,
		"createCommand": _createCommandaq4ZYQD,
		"_helpCommandDescription": __helpCommandDescriptionIAQcrEn
	}
		const _returnValueIOEM6S = await _HelpeYNxuR4.visibleCommands(_cmdpQNBPE0)
		const _argChoicesZhKhoB = {
		
	}
		const _negatex2haP9t = false;
		const _defaultValueEumxtWs = undefined;
		const _arrayValueapde6dG = false;
		const _arrayValueVv1Dm72 = [_arrayValueapde6dG]
		const _arrayValueeHEhQkK = 0.6234041514078683;
		const _defaultValueDescriptiongatyaA = [_arrayValueVv1Dm72, _arrayValueeHEhQkK]
		const _envVarMLTki0K = undefined;
		const _descriptionC06ig4g = null;
		const _optionkARVd3t = {
			"argChoices": _argChoicesZhKhoB,
		"negate": _negatex2haP9t,
		"defaultValue": _defaultValueEumxtWs,
		"defaultValueDescription": _defaultValueDescriptiongatyaA,
		"envVar": _envVarMLTki0K,
		"description": _descriptionC06ig4g
	}
		const _returnValueHnuavxx = await _HelpeYNxuR4.optionDescription(_optionkARVd3t)
	});
})