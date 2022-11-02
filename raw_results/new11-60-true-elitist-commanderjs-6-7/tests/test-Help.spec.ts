export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpNVcNmqc = new Help()
		const _cmdxOxy3jI = "nrqiZfDvmdNbds3fR1h2n2mmGJRrYbVGutaqvRBsDrX4MPz43oR5Qe6ObxcP8CvamteLnhPrlMCb0FU8KGAVb6dNG";
		const _longestOptionTermLengthmP1VJV1 = {
		
	}
		const _returnValuebvkpOik = true;
		const _longestSubcommandTermLengthTmn4UX = () => { return _returnValuebvkpOik };
		const _returnValuekJ5DzMh = "s5gChe47xyxoyAHyXnSsap";
		const _longestArgumentTermLengthTSpC8CT = () => { return _returnValuekJ5DzMh };
		const _helperRVduJf6 = {
			"longestOptionTermLength": _longestOptionTermLengthmP1VJV1,
		"longestSubcommandTermLength": _longestSubcommandTermLengthTmn4UX,
		"longestArgumentTermLength": _longestArgumentTermLengthTSpC8CT
	}
		const _returnValueF8KJXf4 = await _HelpNVcNmqc.padWidth(_cmdxOxy3jI, _helperRVduJf6)
		const _cmdbWXFeKI = false;
		const _returnValueEzoONET = "hoHFxtOjvteo1CEoOyY6NUK";
		const _visibleOptionsbadBLKm = () => { return _returnValueEzoONET };
		const _optionTermkxi09JC = -9.295106863355665;
		const _helperyUsWWHe = {
			"visibleOptions": _visibleOptionsbadBLKm,
		"optionTerm": _optionTermkxi09JC
	}
		const _returnValue22drGk = await _HelpNVcNmqc.longestOptionTermLength(_cmdbWXFeKI, _helperyUsWWHe)
	});

	it('test for Help', async () => {
		const _HelplrqdjAY = new Help()
		const __nameYHw6nIn = {
		
	}
		const __aliasesR9Vad47 = {
		
	}
		const _parentuCiVbps = {
		
	}
		const _returnValueUL4S6V0 = null;
		const _returnValuecDgk1ju = () => { return _returnValueUL4S6V0 };
		const _usageUc3NTx = () => { return _returnValuecDgk1ju };
		const _cmdBytW4Ol = {
			"_name": __nameYHw6nIn,
		"_aliases": __aliasesR9Vad47,
		"parent": _parentuCiVbps,
		"usage": _usageUc3NTx
	}
		const _returnValue16tOmn = await _HelplrqdjAY.commandUsage(_cmdBytW4Ol)
		const __argso45AdHV = {
		
	}
		const __nameN6aWcog = undefined;
		const __aliasespPpm8aI = {
		
	}
		const _optionsyxOxOOo = {
		
	}
		const _cmdhJbhr1 = {
			"_args": __argso45AdHV,
		"_name": __nameN6aWcog,
		"_aliases": __aliasespPpm8aI,
		"options": _optionsyxOxOOo
	}
		const _returnValueCo3TBI1 = await _HelplrqdjAY.subcommandTerm(_cmdhJbhr1)
		const _cmdoOEszO = undefined;
		const _returnValuelFGMDZK = await _HelplrqdjAY.subcommandDescription(_cmdoOEszO)
	});

	it('test for Help', async () => {
		const _Helppm2x3bX = new Help()
		const _arrayValuen81nLmI = "qCSrUw142DUTlWpov46qv6hQcqvwVNEkjvuRipLJerlXJj6IqWOQkt6xedyxpC9JPcoSET0cCMTRMOuCk";
		const _arrayValuetxKAsoK = 8.992190582995981;
		const _arrayValuex9RfnJ = -3.766555344658091;
		const _arrayValueKDsW21i = -6.213056958812324;
		const _arrayValuezREOUu = -8.028718436488074;
		const _arrayValuennhjLFK = undefined;
		const _arrayValueSeweppr = [_arrayValueKDsW21i, _arrayValuezREOUu, _arrayValuennhjLFK]
		const _arrayValueWwEaIbT = null;
		const _arrayValueaQN2rcD = [_arrayValuetxKAsoK, _arrayValuex9RfnJ, _arrayValueSeweppr, _arrayValueWwEaIbT]
		const _arrayValuePmMi4dM = false;
		const _arrayValueW3ZG10t = undefined;
		const _returnValueSxM0AEA = [_arrayValuen81nLmI, _arrayValueaQN2rcD, _arrayValuePmMi4dM, _arrayValueW3ZG10t]
		const _cmdo6H6YIl = () => { return _returnValueSxM0AEA };
		const _returnValuejwMuU8x = await _Helppm2x3bX.visibleArguments(_cmdo6H6YIl)
		const __argsDescriptionJWWecXI = {
		
	}
		const __argsGQO6Onx = {
		
	}
		const _cmdRfckIHE = {
			"_argsDescription": __argsDescriptionJWWecXI,
		"_args": __argsGQO6Onx
	}
		const _returnValuehpEP9A = await _Helppm2x3bX.visibleArguments(_cmdRfckIHE)
		const _cmd8QsA4p = {
		
	}
		const _sortSubcommandsJZ6P3CD = false;
		const _returnValueshdvkWe = null;
		const _subcommandTermREsL6Dn = () => { return _returnValueshdvkWe };
		const _helperm1xZ6Tu = {
			"sortSubcommands": _sortSubcommandsJZ6P3CD,
		"subcommandTerm": _subcommandTermREsL6Dn
	}
		const _returnValueRhYtG8q = await _Helppm2x3bX.longestSubcommandTermLength(_cmd8QsA4p, _helperm1xZ6Tu)
		const __nametWqN6e1 = {
		
	}
		const __aliasesRNIM5uW = {
		
	}
		const _parentOX0nZIT = {
		
	}
		const _returnValueN4YHdMf = null;
		const _usagexW5Kywz = () => { return _returnValueN4YHdMf };
		const _cmdRt9mEti = {
			"_name": __nametWqN6e1,
		"_aliases": __aliasesRNIM5uW,
		"parent": _parentOX0nZIT,
		"usage": _usagexW5Kywz
	}
		const _returnValuehj0uHxf = await _Helppm2x3bX.commandUsage(_cmdRt9mEti)
		const __namemgZ6dTU = {
		
	}
		const __aliasesR9RHFy3 = {
		
	}
		const _parentbRqU55 = {
		
	}
		const _arrayValuekXBNq0u = "Msz8cGF5GtYICqrRCmlNLaX25FLJNaGCTcb0T3MfaHOmFP9SnknrQRlJLp5xgVlDeebjgqdkCXI7WUaNJuqd";
		const _arrayValueIxLvuSz = undefined;
		const _returnValuebhMKhgJ = [_arrayValuekXBNq0u, _arrayValueIxLvuSz]
		const _usageaoAJZGw = () => { return _returnValuebhMKhgJ };
		const _cmdmI0u9qG = {
			"_name": __namemgZ6dTU,
		"_aliases": __aliasesR9RHFy3,
		"parent": _parentbRqU55,
		"usage": _usageaoAJZGw
	}
		const _returnValuejzwYlsb = await _Helppm2x3bX.commandUsage(_cmdmI0u9qG)
	});

	it('test for Help', async () => {
		const _HelpAtZ8ueH = new Help()
		const _cmdhMx7g82 = null;
		const _helperSAKogpn = undefined;
		const _returnValuenwVebJx = await _HelpAtZ8ueH.longestSubcommandTermLength(_cmdhMx7g82, _helperSAKogpn)
		const _returnValueP607Lb6 = "676oClELk8Nj6ydA5y5L";
		const _nameEc7ejuK = () => { return _returnValueP607Lb6 };
		const _argumentuTG0Ur5 = {
			"name": _nameEc7ejuK
	}
		const _returnValueGLom661 = await _HelpAtZ8ueH.argumentTerm(_argumentuTG0Ur5)
		const __argsDescriptionwbAyRX = {
		
	}
		const __argsOFwY3Ms = {
		
	}
		const _cmdiSFW8K = {
			"_argsDescription": __argsDescriptionwbAyRX,
		"_args": __argsOFwY3Ms
	}
		const _returnValue6Drm5E = await _HelpAtZ8ueH.visibleArguments(_cmdiSFW8K)
	});

	it('test for Help', async () => {
		const _HelpsOmNNGB = new Help()
		const __argsDescriptionlg4KZIC = {
		
	}
		const __argsXx09cJF = {
		
	}
		const _cmdm0SkQWv = {
			"_argsDescription": __argsDescriptionlg4KZIC,
		"_args": __argsXx09cJF
	}
		const _returnValueCRPqGl3 = await _HelpsOmNNGB.visibleArguments(_cmdm0SkQWv)
	});

	it('test for Help', async () => {
		const _HelpvEnwSl1 = new Help()
		const _returnValuezq4B7O = 2.548488326227563;
		const _descriptionSlFPCBx = () => { return _returnValuezq4B7O };
		const _cmdXgu4s9 = {
			"description": _descriptionSlFPCBx
	}
		const _returnValuecD19tzA = await _HelpvEnwSl1.commandDescription(_cmdXgu4s9)
		const _cmddFeqyKc = true;
		const _returnValueInyyMok = null;
		const _longestOptionTermLengthh8vfWHD = () => { return _returnValueInyyMok };
		const _returnValueEIHoiBU = false;
		const _longestSubcommandTermLengthc5x34Cb = () => { return _returnValueEIHoiBU };
		const _returnValuej4e3U6X = true;
		const _longestArgumentTermLengthVxGF69K = () => { return _returnValuej4e3U6X };
		const _helperi4x21s = {
			"longestOptionTermLength": _longestOptionTermLengthh8vfWHD,
		"longestSubcommandTermLength": _longestSubcommandTermLengthc5x34Cb,
		"longestArgumentTermLength": _longestArgumentTermLengthVxGF69K
	}
		const _returnValueL5LOyb = await _HelpvEnwSl1.padWidth(_cmddFeqyKc, _helperi4x21s)
		const __argsDescriptionmzgQwCA = {
		
	}
		const __argsIRH1vZ = {
		
	}
		const _cmdEVwMJL8 = {
			"_argsDescription": __argsDescriptionmzgQwCA,
		"_args": __argsIRH1vZ
	}
		const _returnValuerPjT4uu = await _HelpvEnwSl1.visibleArguments(_cmdEVwMJL8)
		const __argsDescriptionVeWrBLe = {
		
	}
		const __argsAEm8H5 = {
		
	}
		const _cmdIw5nqMn = {
			"_argsDescription": __argsDescriptionVeWrBLe,
		"_args": __argsAEm8H5
	}
		const _returnValueHYEHtBw = await _HelpvEnwSl1.visibleArguments(_cmdIw5nqMn)
		const _cmdVVBE1oF = undefined;
		const _returnValueYFS0E0J = true;
		const _visibleArgumentsdCnM3VB = () => { return _returnValueYFS0E0J };
		const _returnValuelm6KIX = true;
		const _argumentTermPDxfmM = () => { return _returnValuelm6KIX };
		const _helperYib5M1A = {
			"visibleArguments": _visibleArgumentsdCnM3VB,
		"argumentTerm": _argumentTermPDxfmM
	}
		const _returnValuesXCKd46 = await _HelpvEnwSl1.longestArgumentTermLength(_cmdVVBE1oF, _helperYib5M1A)
	});

	it('test for Help', async () => {
		const _HelpQNjK5w = new Help()
		const _returnValueddJK9GS = "21LeP3mMuqp3jiHe28gCID";
		const _returnValueLBUMGoZ = () => { return _returnValueddJK9GS };
		const _descriptionCbpStKF = () => { return _returnValueLBUMGoZ };
		const _cmdY7HyOko = {
			"description": _descriptionCbpStKF
	}
		const _returnValueHxIEIqM = await _HelpQNjK5w.subcommandDescription(_cmdY7HyOko)
		const _arrayValueXeIfT03 = {
		
	}
		const _arrayValuez71wYf0 = 3.4440301421844275;
		const _returnValuezZQcQ46 = [_arrayValueXeIfT03, _arrayValuez71wYf0]
		const _namerEOidHu = () => { return _returnValuezZQcQ46 };
		const _argumentvNHhKCU = {
			"name": _namerEOidHu
	}
		const _returnValuea8Zv454 = await _HelpQNjK5w.argumentTerm(_argumentvNHhKCU)
		const __argsLcHr2W = {
		
	}
		const __nameYMoqJp9 = -2.7748170220754274;
		const __aliasesBwxAaZ2 = {
		
	}
		const _optionsj80b1P = {
		
	}
		const _cmdllcFY5 = {
			"_args": __argsLcHr2W,
		"_name": __nameYMoqJp9,
		"_aliases": __aliasesBwxAaZ2,
		"options": _optionsj80b1P
	}
		const _returnValueqdCer8 = await _HelpQNjK5w.subcommandTerm(_cmdllcFY5)
		const _returnValueJWK53G8 = null;
		const _arrayValueHpuatAn = () => { return _returnValueJWK53G8 };
		const _flagsYUA33t = [_arrayValueHpuatAn]
		const _optionLu5M8b = {
			"flags": _flagsYUA33t
	}
		const _returnValueyT01NX1 = await _HelpQNjK5w.optionTerm(_optionLu5M8b)
	});

	it('test for Help', async () => {
		const _HelpKCDu6KQ = new Help()
		const _optionp7GcU1I = undefined;
		const _returnValuegGs3MRb = await _HelpKCDu6KQ.optionDescription(_optionp7GcU1I)
	});

	it('test for Help', async () => {
		const _Helpkx6sMPU = new Help()
		const _returnValueUWAWdf4 = true;
		const _matchuI9Uauz = () => { return _returnValueUWAWdf4 };
		const _returnValuepu8SMv9 = null;
		const _substrg2glkqc = () => { return _returnValuepu8SMv9 };
		const _strTxjzpTi = {
			"match": _matchuI9Uauz,
		"substr": _substrg2glkqc
	}
		const _widthYY6Lo7p = 9.707642829658148;
		const _indentLKU4Jxp = 6.889536042802533;
		const _minColumnWidthIbnyWFb = -0.9744727249322462;
		const _returnValuex3524VD = await _Helpkx6sMPU.wrap(_strTxjzpTi, _widthYY6Lo7p, _indentLKU4Jxp, _minColumnWidthIbnyWFb)
		const _argChoiceszszSybR = "ymXMcKaHUKVseStFXrrDTdDJLfDNIQ9AaWAdh4oiPEDD3sDuigX9OcukpCDgrmRfdXU";
		const _defaultValueqbZIS3 = undefined;
		const _defaultValueDescriptionpoxyLxc = -4.673227801742156;
		const _descriptionU9lORmW = true;
		const _argumentgXcmEi7 = {
			"argChoices": _argChoiceszszSybR,
		"defaultValue": _defaultValueqbZIS3,
		"defaultValueDescription": _defaultValueDescriptionpoxyLxc,
		"description": _descriptionU9lORmW
	}
		const _returnValueWZ1fLu8 = await _Helpkx6sMPU.argumentDescription(_argumentgXcmEi7)
	});

	it('test for Help', async () => {
		const _HelpJwS0aBP = new Help()
		const _cmdPdYNWAX = "stTeMnTzw37xJeHOT412FtCIOaoKbc";
		const _returnValuefZXRNZT = null;
		const _longestOptionTermLengthP6VY4yS = () => { return _returnValuefZXRNZT };
		const _returnValueE4643ib = undefined;
		const _returnValueomwtCGd = () => { return _returnValueE4643ib };
		const _longestSubcommandTermLengthsI2wIJ = () => { return _returnValueomwtCGd };
		const _returnValueo17v2E2 = undefined;
		const _longestArgumentTermLengthAlzuOm7 = () => { return _returnValueo17v2E2 };
		const _helperFvlcUXp = {
			"longestOptionTermLength": _longestOptionTermLengthP6VY4yS,
		"longestSubcommandTermLength": _longestSubcommandTermLengthsI2wIJ,
		"longestArgumentTermLength": _longestArgumentTermLengthAlzuOm7
	}
		const _returnValueLISCVDN = await _HelpJwS0aBP.padWidth(_cmdPdYNWAX, _helperFvlcUXp)
		const _cmdPlXnZDl = "ShROsdBx53IVtQCQds1Hpg2Nj06s6lqlLyv3uEgSR1IvBuoXM7uIG4saMW3";
		const _returnValuewTev90N = undefined;
		const _visibleOptionsQBhfxwQ = () => { return _returnValuewTev90N };
		const _returnValuewKC0e2 = null;
		const _optionTermQTL1SiG = () => { return _returnValuewKC0e2 };
		const _helperyzzsXkl = {
			"visibleOptions": _visibleOptionsQBhfxwQ,
		"optionTerm": _optionTermQTL1SiG
	}
		const _returnValueOfPfiPX = await _HelpJwS0aBP.longestOptionTermLength(_cmdPlXnZDl, _helperyzzsXkl)
	});

	it('test for Help', async () => {
		const _HelpDHKDvrW = new Help()
		const _returnValuebQ2mtPA = null;
		const _matchyZjfJDw = () => { return _returnValuebQ2mtPA };
		const _returnValuekyYjVQR = 8.277514045367226;
		const _returnValueHFVMOD = () => { return _returnValuekyYjVQR };
		const _substrm3V54Sc = () => { return _returnValueHFVMOD };
		const _strHgQ6Gtq = {
			"match": _matchyZjfJDw,
		"substr": _substrm3V54Sc
	}
		const _widthoDJy22h = -6.155639924893422;
		const _indentNGJ0zr = -8.476875072900759;
		const _minColumnWidthEnqGW2O = -0.8587872176510398;
		const _returnValuezrRaD82 = await _HelpDHKDvrW.wrap(_strHgQ6Gtq, _widthoDJy22h, _indentNGJ0zr, _minColumnWidthEnqGW2O)
		const _cmdVpJfUGg = undefined;
		const _returnValuecxy67y4 = -7.979244711657262;
		const _visibleOptionsxWOogoj = () => { return _returnValuecxy67y4 };
		const _optionTermn7NthIr = 1.3151554892370871;
		const _helperfbUdU52 = {
			"visibleOptions": _visibleOptionsxWOogoj,
		"optionTerm": _optionTermn7NthIr
	}
		const _returnValueFAiGf3b = await _HelpDHKDvrW.longestOptionTermLength(_cmdVpJfUGg, _helperfbUdU52)
		const _optionscjuu4ni = {
		
	}
		const _returnValueudxjhph = null;
		const __hasHelpOptionzDRfTFE = () => { return _returnValueudxjhph };
		const __helpShortFlagq0x3Fiu = null;
		const _returnValueHGq9al = false;
		const _arrayValueeVF2FX = () => { return _returnValueHGq9al };
		const _returnValuezb0ZYDg = [_arrayValueeVF2FX]
		const __findOptionLQgNE5U = () => { return _returnValuezb0ZYDg };
		const __helpLongFlagVhVx3pj = false;
		const _returnValueB5tVr6Q = 1.220493286185107;
		const _createOptionX76CboB = () => { return _returnValueB5tVr6Q };
		const _arrayValued6YgHe = -1.768155929197464;
		const _arrayValueytqfdeE = true;
		const __helpDescriptionDLd0Bpa = [_arrayValued6YgHe, _arrayValueytqfdeE]
		const __helpFlagslrqKUQ = undefined;
		const _cmdHIDDl9V = {
			"options": _optionscjuu4ni,
		"_hasHelpOption": __hasHelpOptionzDRfTFE,
		"_helpShortFlag": __helpShortFlagq0x3Fiu,
		"_findOption": __findOptionLQgNE5U,
		"_helpLongFlag": __helpLongFlagVhVx3pj,
		"createOption": _createOptionX76CboB,
		"_helpDescription": __helpDescriptionDLd0Bpa,
		"_helpFlags": __helpFlagslrqKUQ
	}
		const _returnValueiTZbbfm = await _HelpDHKDvrW.visibleOptions(_cmdHIDDl9V)
		const _optionsr8Xk028 = {
		
	}
		const __hasHelpOptionPl1bOXV = true;
		const _arrayValuefc7gNan = "tDjwwYRVXtWJvSHrGnwIjWDSMhl2sQraI2qSDjvbrF3pTI6Cw1z5yVUksquWdYT6er0VmZBGFO6";
		const _arrayValuef0w7Zkd = 2.404561237948604;
		const _arrayValueEKxmf1f = null;
		const _arrayValuezTdOp3 = true;
		const __helpShortFlagOtIXT43 = [_arrayValuefc7gNan, _arrayValuef0w7Zkd, _arrayValueEKxmf1f, _arrayValuezTdOp3]
		const _returnValuevsvqbPj = undefined;
		const __findOptionyxTM8yz = () => { return _returnValuevsvqbPj };
		const __helpLongFlagEOZ3kFn = "WkaeSFEOLDFG6pRLxB9NJ6LiszPM7cJBkGemqfzB2B3xz0uv2iaBfDkJi9rM3D1L7JbtEp52tARr1IF";
		const _returnValueXfgwdsk = -1.1429525611537876;
		const _createOptionLICkiWU = () => { return _returnValueXfgwdsk };
		const __helpDescriptionrxaf4dz = true;
		const __helpFlagsOg26ggE = undefined;
		const _cmdflgPJMe = {
			"options": _optionsr8Xk028,
		"_hasHelpOption": __hasHelpOptionPl1bOXV,
		"_helpShortFlag": __helpShortFlagOtIXT43,
		"_findOption": __findOptionyxTM8yz,
		"_helpLongFlag": __helpLongFlagEOZ3kFn,
		"createOption": _createOptionLICkiWU,
		"_helpDescription": __helpDescriptionrxaf4dz,
		"_helpFlags": __helpFlagsOg26ggE
	}
		const _returnValuepv0z1oN = await _HelpDHKDvrW.visibleOptions(_cmdflgPJMe)
	});

	it('test for Help', async () => {
		const _HelpIvsi2K = new Help()
		const _cmdCphSayG = false;
		const _returnValueea27uYZ = true;
		const _visibleArgumentsAPVZLVF = () => { return _returnValueea27uYZ };
		const _returnValueaYC68tP = null;
		const _argumentTermt22Vkyd = () => { return _returnValueaYC68tP };
		const _helperE06fMHn = {
			"visibleArguments": _visibleArgumentsAPVZLVF,
		"argumentTerm": _argumentTermt22Vkyd
	}
		const _returnValueYqTRGT = await _HelpIvsi2K.longestArgumentTermLength(_cmdCphSayG, _helperE06fMHn)
		const _returnValueT3cKm7j = false;
		const _matchNj1KPv4 = () => { return _returnValueT3cKm7j };
		const _returnValueeQTMrA1 = undefined;
		const _substrHvnRwP6 = () => { return _returnValueeQTMrA1 };
		const _strcHFpji = {
			"match": _matchNj1KPv4,
		"substr": _substrHvnRwP6
	}
		const _widthcaGqXPA = -6.2953319489208965;
		const _indentYyaNaMH = -8.060935404900707;
		const _minColumnWidthUSOExu = -6.194752289186898;
		const _returnValueSvfJRyq = await _HelpIvsi2K.wrap(_strcHFpji, _widthcaGqXPA, _indentYyaNaMH, _minColumnWidthUSOExu)
	});

	it('test for Help', async () => {
		const _HelpmuMZid0 = new Help()
		const _argChoicesqD8S6Il = {
		
	}
		const _negateJ86KjVh = 8.021390393909329;
		const _defaultValueImLZBfY = "f11ev8XukYHc1e4N7c4vJUu";
		const _defaultValueDescriptionLuAshGb = undefined;
		const _envVari4UW8k7 = undefined;
		const _arrayValueqSUj7ka = true;
		const _arrayValueA02Zkca = null;
		const _arrayValueDOvebYh = null;
		const _arrayValuemXRTMvH = null;
		const _descriptionYMpy54c = [_arrayValueqSUj7ka, _arrayValueA02Zkca, _arrayValueDOvebYh, _arrayValuemXRTMvH]
		const _optionkzwfvQn = {
			"argChoices": _argChoicesqD8S6Il,
		"negate": _negateJ86KjVh,
		"defaultValue": _defaultValueImLZBfY,
		"defaultValueDescription": _defaultValueDescriptionLuAshGb,
		"envVar": _envVari4UW8k7,
		"description": _descriptionYMpy54c
	}
		const _returnValueAfVAqVa = await _HelpmuMZid0.optionDescription(_optionkzwfvQn)
		const _returnValueFa7Kxxe = -0.25595195730855913;
		const _cmdeh9qJJq = () => { return _returnValueFa7Kxxe };
		const _returnValueGz8ztY = await _HelpmuMZid0.commandUsage(_cmdeh9qJJq)
		const __argsDescriptionoo6tDbJ = {
		
	}
		const __argsK7eMHu = {
		
	}
		const _cmddaAWI6c = {
			"_argsDescription": __argsDescriptionoo6tDbJ,
		"_args": __argsK7eMHu
	}
		const _returnValue7UyGwe = await _HelpmuMZid0.visibleArguments(_cmddaAWI6c)
		const _cmdBUuHlVe = undefined;
		const _returnValueHKyNCta = "6kBVb9YanuUE64qGbAmrBYr8JKQGu4LqXCT5b0ILbcRKBdLHjEVtmpnh3OKcgi";
		const _visibleArguments1WNeuZ = () => { return _returnValueHKyNCta };
		const _returnValueVfRXGk = -1.2587357894352103;
		const _argumentTermsyaKaXu = () => { return _returnValueVfRXGk };
		const _helperX8C7B1Z = {
			"visibleArguments": _visibleArguments1WNeuZ,
		"argumentTerm": _argumentTermsyaKaXu
	}
		const _returnValueVxOvXDb = await _HelpmuMZid0.longestArgumentTermLength(_cmdBUuHlVe, _helperX8C7B1Z)
		const __argsDescriptionA2tc5dJ = {
		
	}
		const __argsxlu2C6 = {
		
	}
		const _cmdcFprtT = {
			"_argsDescription": __argsDescriptionA2tc5dJ,
		"_args": __argsxlu2C6
	}
		const _returnValueDP8TGtZ = await _HelpmuMZid0.visibleArguments(_cmdcFprtT)
	});

	it('test for Help', async () => {
		const _HelpFPb6Fq = new Help()
		const _returnValuebLPZCXN = {
		
	}
		const _descriptionduYYJnb = () => { return _returnValuebLPZCXN };
		const _cmdrnvw2HO = {
			"description": _descriptionduYYJnb
	}
		const _returnValueIoS0liR = await _HelpFPb6Fq.commandDescription(_cmdrnvw2HO)
		const _optionsMPvMeSm = {
		
	}
		const __hasHelpOptionMIIaZE1 = "wlQFl3x3w1LJEoezxprWodTu8yUpndFQcPV";
		const __helpShortFlagopZzgI = null;
		const _returnValueXapATew = null;
		const __findOption86s6OO = () => { return _returnValueXapATew };
		const __helpLongFlagk8MK5V = {
		
	}
		const _returnValuezhZlK2 = 1.5080471556632187;
		const _createOptionJPNWqiI = () => { return _returnValuezhZlK2 };
		const __helpDescriptionnbYVgNv = 3.996921327477697;
		const __helpFlagspuuGU7c = {
		
	}
		const _cmdUOHTN7Q = {
			"options": _optionsMPvMeSm,
		"_hasHelpOption": __hasHelpOptionMIIaZE1,
		"_helpShortFlag": __helpShortFlagopZzgI,
		"_findOption": __findOption86s6OO,
		"_helpLongFlag": __helpLongFlagk8MK5V,
		"createOption": _createOptionJPNWqiI,
		"_helpDescription": __helpDescriptionnbYVgNv,
		"_helpFlags": __helpFlagspuuGU7c
	}
		const _returnValueNgqwhIH = await _HelpFPb6Fq.visibleOptions(_cmdUOHTN7Q)
		const __argsUMgVAf6 = {
		
	}
		const __namezECXSaO = -3.344113226015752;
		const __aliasesCNGdzRV = {
		
	}
		const _optionsBMWKJ1 = {
		
	}
		const _cmd6jmMox = {
			"_args": __argsUMgVAf6,
		"_name": __namezECXSaO,
		"_aliases": __aliasesCNGdzRV,
		"options": _optionsBMWKJ1
	}
		const _returnValueXQr4YYL = await _HelpFPb6Fq.subcommandTerm(_cmd6jmMox)
		const _cmdJQyw0ea = true;
		const _returnValuenZFZI7p = await _HelpFPb6Fq.visibleOptions(_cmdJQyw0ea)
	});

	it('test for Help', async () => {
		const _HelpKqfeXS4 = new Help()
		const _arrayValuecyRJYWT = null;
		const _arrayValueOdGu3ad = undefined;
		const _arrayValueA8X6vu7 = "qdse4TuyGFzbniUhN1Jlmb4hKMbC8wSKvahK9uN75qptQcCOfvu9hBxNoBaIsdRgnpLIgjiOi8Ll4KeYFyahvBW";
		const _cmdeJ1jK8Z = [_arrayValuecyRJYWT, _arrayValueOdGu3ad, _arrayValueA8X6vu7]
		const _sortSubcommandsNk1JvTK = undefined;
		const _returnValueijNuuOO = undefined;
		const _subcommandTermtbvHW42 = () => { return _returnValueijNuuOO };
		const _helperQQyml0C = {
			"sortSubcommands": _sortSubcommandsNk1JvTK,
		"subcommandTerm": _subcommandTermtbvHW42
	}
		const _returnValueblSa9Wq = await _HelpKqfeXS4.formatHelp(_cmdeJ1jK8Z, _helperQQyml0C)
		const __argsSlYs7g = {
		
	}
		const __namedSQ8HEw = -7.528048305577891;
		const __aliasesb689cIs = {
		
	}
		const _optionsmhFcDZg = {
		
	}
		const _cmdhUaN6LJ = {
			"_args": __argsSlYs7g,
		"_name": __namedSQ8HEw,
		"_aliases": __aliasesb689cIs,
		"options": _optionsmhFcDZg
	}
		const _returnValueU6zkq1I = await _HelpKqfeXS4.subcommandTerm(_cmdhUaN6LJ)
		const _arrayValueHhzGT6 = undefined;
		const _arrayValueJ3Wn41H = true;
		const _arrayValueEBU0Hw3 = undefined;
		const _returnValuevut7T3 = [_arrayValueHhzGT6, _arrayValueJ3Wn41H, _arrayValueEBU0Hw3]
		const _descriptionWreSSvy = () => { return _returnValuevut7T3 };
		const _cmdRa37nhA = {
			"description": _descriptionWreSSvy
	}
		const _returnValueP0uqojB = await _HelpKqfeXS4.commandDescription(_cmdRa37nhA)
		const __argsDescriptionC7IOIBA = {
		
	}
		const __argsoCTT09K = {
		
	}
		const _cmdXIWii4 = {
			"_argsDescription": __argsDescriptionC7IOIBA,
		"_args": __argsoCTT09K
	}
		const _returnValuemY1G5AL = await _HelpKqfeXS4.visibleArguments(_cmdXIWii4)
	});

	it('test for Help', async () => {
		const _HelpWanfcO = new Help()
		const _flagsOizEytU = null;
		const _optionBXUHVfX = {
			"flags": _flagsOizEytU
	}
		const _returnValuevY9xcwl = await _HelpWanfcO.optionTerm(_optionBXUHVfX)
		const _argumentHE4TQ0C = true;
		const _returnValueqtNS5rf = await _HelpWanfcO.argumentTerm(_argumentHE4TQ0C)
		const __argsDescriptionCsjLO4t = {
		
	}
		const __argsnjOGUjZ = {
		
	}
		const _cmdn2XF60e = {
			"_argsDescription": __argsDescriptionCsjLO4t,
		"_args": __argsnjOGUjZ
	}
		const _returnValuehtOxemZ = await _HelpWanfcO.visibleArguments(_cmdn2XF60e)
		const _returnValuePH5mQDs = {
		
	}
		const __argsDescriptionnyNJNd3 = () => { return _returnValuePH5mQDs };
		const __argsJhOqQ4L = {
		
	}
		const _cmdfUCqUid = {
			"_argsDescription": __argsDescriptionnyNJNd3,
		"_args": __argsJhOqQ4L
	}
		const _returnValuelCX9YxO = await _HelpWanfcO.visibleArguments(_cmdfUCqUid)
	});

	it('test for Help', async () => {
		const _HelpnQLljqj = new Help()
		const _flagscnP8yjb = undefined;
		const _optiongFiagq = {
			"flags": _flagscnP8yjb
	}
		const _returnValueplPsPA0 = await _HelpnQLljqj.optionTerm(_optiongFiagq)
		const _argChoicesIk9aKc5 = {
		
	}
		const _negateZ2Ub8X = false;
		const _defaultValuebwbPfgr = undefined;
		const _arrayValueaR6yYMY = undefined;
		const _arrayValueZMB8LNE = undefined;
		const _arrayValueHrlPmuj = undefined;
		const _arrayValuebPPfhyq = [_arrayValueHrlPmuj]
		const _arrayValueQ74048V = [_arrayValueZMB8LNE, _arrayValuebPPfhyq]
		const _arrayValueAsNQu3R = undefined;
		const _defaultValueDescriptiongqzBHnG = [_arrayValueaR6yYMY, _arrayValueQ74048V, _arrayValueAsNQu3R]
		const _envVarUnUTHlu = undefined;
		const _descriptionzxOB3gL = undefined;
		const _optionJVKykFH = {
			"argChoices": _argChoicesIk9aKc5,
		"negate": _negateZ2Ub8X,
		"defaultValue": _defaultValuebwbPfgr,
		"defaultValueDescription": _defaultValueDescriptiongqzBHnG,
		"envVar": _envVarUnUTHlu,
		"description": _descriptionzxOB3gL
	}
		const _returnValueX6gkAQn = await _HelpnQLljqj.optionDescription(_optionJVKykFH)
		const _arrayValueuk1mIbH = "QQdwiFPSU8hLalJ7M9hvOjI5Ed4B1lvSsTxz3RIFuy13Rd5xdsTlsHa68x25Bw9vHxrjyQLAtsHFvHjEm5J";
		const _cmdEduqawz = [_arrayValueuk1mIbH]
		const _arrayValueIIQhEUV = -6.1677945188919825;
		const _arrayValueEBISIz6 = true;
		const _helperkU17VzJ = [_arrayValueIIQhEUV, _arrayValueEBISIz6]
		const _returnValuelOf8S6 = await _HelpnQLljqj.longestOptionTermLength(_cmdEduqawz, _helperkU17VzJ)
		const _returnValuewH5Ci0d = null;
		const _arrayValueqw3IgX = () => { return _returnValuewH5Ci0d };
		const _arrayValueLwalgki = "4gtV1HZe4q3QthH3sOz";
		const _arrayValueE253YbS = [_arrayValueLwalgki]
		const _arrayValueHaZgQdx = undefined;
		const _cmdnVE8Yv = [_arrayValueqw3IgX, _arrayValueE253YbS, _arrayValueHaZgQdx]
		const _returnValuehVuUiJi = await _HelpnQLljqj.visibleOptions(_cmdnVE8Yv)
	});

	it('test for Help', async () => {
		const _HelpgfIQGlU = new Help()
		const _argumentOTiMg0d = true;
		const _returnValuecFt6onG = await _HelpgfIQGlU.argumentDescription(_argumentOTiMg0d)
		const _arrayValuezavzsay = false;
		const _optionGZ6f3k2 = [_arrayValuezavzsay]
		const _returnValuemoDHbP8 = await _HelpgfIQGlU.optionTerm(_optionGZ6f3k2)
		const _returnValuer2pMx2p = "IIzDIbEPsJCOWXQnD";
		const _cmdeWSj8bL = () => { return _returnValuer2pMx2p };
		const _returnValueEm4FD1N = await _HelpgfIQGlU.commandDescription(_cmdeWSj8bL)
		const _arrayValueJ9BJoP9 = false;
		const _optionqkkRUjs = [_arrayValueJ9BJoP9]
		const _returnValueHmHyu5U = await _HelpgfIQGlU.optionDescription(_optionqkkRUjs)
		const _cmdrX9vSL1 = undefined;
		const _returnValuerqzWiwx = false;
		const _helperrBq5Q24 = () => { return _returnValuerqzWiwx };
		const _returnValuee4lo8NW = await _HelpgfIQGlU.longestSubcommandTermLength(_cmdrX9vSL1, _helperrBq5Q24)
	});

	it('test for Help', async () => {
		const _HelpHslTDLE = new Help()
		const _arrayValuemEfVN3x = null;
		const _arrayValuePgHmrPC = {
		
	}
		const _arrayValueDsAVgIh = false;
		const _arrayValueeZMypn = 0.5442004639202676;
		const _arrayValueei96TDI = -1.2000529286281356;
		const _returnValueT3Jpwy = null;
		const _arrayValuegsCaM2X = () => { return _returnValueT3Jpwy };
		const _arrayValuezM11cKN = true;
		const _arrayValueYO0fpN = [_arrayValuezM11cKN]
		const _arrayValuekHFQOvv = [_arrayValueeZMypn, _arrayValueei96TDI, _arrayValuegsCaM2X, _arrayValueYO0fpN]
		const _arrayValuenP7HWBH = "Qn9OO";
		const _arrayValuewkSzYY = "JOTmnr1L";
		const _arrayValuexviZZAm = undefined;
		const _arrayValueK08WtGJ = [_arrayValuekHFQOvv, _arrayValuenP7HWBH, _arrayValuewkSzYY, _arrayValuexviZZAm]
		const _arrayValueP7QXuvM = null;
		const _arrayValuerv4LsKx = [_arrayValueDsAVgIh, _arrayValueK08WtGJ, _arrayValueP7QXuvM]
		const _cmdT9Syvnz = [_arrayValuemEfVN3x, _arrayValuePgHmrPC, _arrayValuerv4LsKx]
		const _returnValuesR8HMuN = await _HelpHslTDLE.visibleCommands(_cmdT9Syvnz)
		const _arrayValuezh5SNB0 = "9iqAznCauRZiXfPgpm5cTgtTIQceCxqRXofk5dwFUPS5NhYoN64DCt9HawEBXuVvhGCfgWwoFcPsUkJ32";
		const _cmdDqMQp2 = [_arrayValuezh5SNB0]
		const _returnValueIBUJjo = true;
		const _helperd5U1xX9 = () => { return _returnValueIBUJjo };
		const _returnValuejteTU6x = await _HelpHslTDLE.longestSubcommandTermLength(_cmdDqMQp2, _helperd5U1xX9)
		const _cmdKXIU6PC = -2.465990941803308;
		const _returnValueq5UDp7a = undefined;
		const _helperDnKhPV = () => { return _returnValueq5UDp7a };
		const _returnValueL8pF2lb = await _HelpHslTDLE.longestArgumentTermLength(_cmdKXIU6PC, _helperDnKhPV)
	});

	it('test for Help', async () => {
		const _Helpdj1f097 = new Help()
		const _strdtIzcx9 = "4FzHtPJ5p4hFoAIrMnpMHBmN3mLLLRCJRIAIHlpF2jeaf4KcxdIS37UqDfe0aGw4Wzcn3GQsgrv4OEOj8ATTpSOX4BZY6HEu";
		const _widthpkqMTuQ = 0.985159590600162;
		const _indentl0d8UdN = -0.7017769189049865;
		const _minColumnWidthzlZf5ko = 7.5798257723460765;
		const _returnValueHxhcgh5 = await _Helpdj1f097.wrap(_strdtIzcx9, _widthpkqMTuQ, _indentl0d8UdN, _minColumnWidthzlZf5ko)
		const _returnValuePavW3uk = []
		const _returnValueBxCGDOO = () => { return _returnValuePavW3uk };
		const _slicelPPK0VB = () => { return _returnValueBxCGDOO };
		const _nameOO680ZG = {
			"slice": _slicelPPK0VB
	}
		const _descriptionliuyj6 = {
		
	}
		const _cmdUAtuL4 = new Argument(_nameOO680ZG, _descriptionliuyj6)
		const _returnValuevcOqw3r = await _cmdUAtuL4.argRequired()
		const _valueCHCSra = true;
		const _returnValueRCaAS1d = null;
		const _concataH7uf8j = () => { return _returnValueRCaAS1d };
		const _previousL5lo5ku = {
			"concat": _concataH7uf8j
	}
		const _returnValueXDTn7Cw = await _cmdUAtuL4._concatValue(_valueCHCSra, _previousL5lo5ku)
		const _returnValueBV1KO3F = await _Helpdj1f097.commandDescription(_cmdUAtuL4)
	});

	it('test for Help', async () => {
		const _HelpaGDapQS = new Help()
		const _cmdRO86x7 = undefined;
		const _helperJfCnNzs = new Help()
		const _cmdfXX4Ft4 = false;
		const _helperbxIGIvK = new Help()
		const _namentLO3VQ = null;
		const _cmdG80HTn3 = new Command(_namentLO3VQ)
		const _returnValuetQNqpjG = 7.856258509990056;
		const _nameM18M8zh = () => { return _returnValuetQNqpjG };
		const _arrayValueQOu8rfz = 9.577062512362538;
		const _arrayValueR34hPTX = null;
		const _arrayValueHPCddLr = -8.200011160374206;
		const _arrayValuemlpsphi = null;
		const _arrayValuewzZcQOY = false;
		const _arrayValuee5QHWeO = 1.609939924551007;
		const _arrayValueTDeSS1V = [_arrayValuee5QHWeO]
		const _arrayValuexnxzOo = [_arrayValuewzZcQOY, _arrayValueTDeSS1V]
		const _arrayValueTG9eXZq = null;
		const _arrayValueDxW2Noh = [_arrayValueTG9eXZq]
		const _arrayValuehBitbCa = null;
		const _arrayValuelkmThc = [_arrayValuemlpsphi, _arrayValuexnxzOo, _arrayValueDxW2Noh, _arrayValuehBitbCa]
		const _arrayValuem0X4K8b = [_arrayValueHPCddLr, _arrayValuelkmThc]
		const _descriptionxQQ5RmB = [_arrayValueQOu8rfz, _arrayValueR34hPTX, _arrayValuem0X4K8b]
		const _returnValuef6ryFa8 = await _cmdG80HTn3.createArgument(_nameM18M8zh, _descriptionxQQ5RmB)
		const _passThroughxPttc9B = true;
		const _returnValue5dckAf = await _cmdG80HTn3.passThroughOptions(_passThroughxPttc9B)
		const _enableOrNameAndArgsDxszXMZ = "PPFNOsqAdbrfg44h3OaHEr0zoTT5K9E7UToWZ2jPhGIDJDYER8slfNW2hzXARI7U6SBdeltkjHzn53n5BL";
		const _descriptionFsaz0jf = undefined;
		const _returnValuefYRatay = await _cmdG80HTn3.addHelpCommand(_enableOrNameAndArgsDxszXMZ, _descriptionFsaz0jf)
		const _returnValuey1dhddP = await _cmdG80HTn3.opts()
		const _returnValuebk7ANrL = await _helperbxIGIvK.visibleOptions(_cmdG80HTn3)
		const _cmda9JGsMt = "6zdfIFBV0tQG2EbGiNFEh8pc1tkIxGY25sRv8BFdYVqz8sUEjtxTrJudMEYJ3enV3U2L1vv7w1toVmZZr";
		const _returnValuea7x8TJQ = await _helperbxIGIvK.visibleCommands(_cmda9JGsMt)
		const _cmdzRKZAHf = "pwk3ei9aDV52UcxivEnpvo9nPJavvplZdHwKYJv3kprnxxO205DUh";
		const _returnValuepyrn8xe = await _helperbxIGIvK.subcommandTerm(_cmdzRKZAHf)
		const _cmdp0KYy0C = false;
		const _helperRIBd7Y = new Help()
		const _flagsX0WVAlp = "fpj1NJO5Oefvol0J";
		const _descriptionEOqTISl = true;
		const _argumentv14KwAk = new Option(_flagsX0WVAlp, _descriptionEOqTISl)
		const _argwVpKsdu = {
		
	}
		const _returnValueA8fyf22 = await _argumentv14KwAk.is(_argwVpKsdu)
		const _nameG6pBGD3 = undefined;
		const _returnValueQJhrK0Q = await _argumentv14KwAk.env(_nameG6pBGD3)
		const _returnValueGe7ZN5W = await _helperRIBd7Y.argumentDescription(_argumentv14KwAk)
		const _cmdjT6Jfl = null;
		const _helperqBcAeL = new Help()
		const _cmdqna0JRr = true;
		const _returnValueljjAuRG = await _helperqBcAeL.commandUsage(_cmdqna0JRr)
		const _returnValueNQZzUcG = "u1KRx9s6WeIK5i2uLMfG4t5RHs4YcE0O8Ar40Abt4oUIT8v8XHRCHnhft4rb2CMhwjvv7";
		const _optionak7Y0MF = () => { return _returnValueNQZzUcG };
		const _returnValues8bSJq3 = await _helperqBcAeL.optionDescription(_optionak7Y0MF)
		const _returnValueGzbMSGf = await _helperRIBd7Y.longestSubcommandTermLength(_cmdjT6Jfl, _helperqBcAeL)
		const _cmdNQUNRyN = 3.0201895718655116;
		const _returnValueVBiFskl = await _helperRIBd7Y.visibleOptions(_cmdNQUNRyN)
		const _cmdYr8gmEe = -0.7968090595070478;
		const _returnValueB0NhAtS = "ntBgxtPhzBGJAcoMXZFV5Y8KK2FVRsEEOx2RjvFzwfspVDIyi1pNgF4t1PBfcD91VHPBQddy";
		const _returnValuemB1hSZD = () => { return _returnValueB0NhAtS };
		const _arrayValueUE27Zbl = () => { return _returnValuemB1hSZD };
		const _returnValuenb5joa0 = [_arrayValueUE27Zbl]
		const _helperiGG3EM8 = () => { return _returnValuenb5joa0 };
		const _returnValueuXowr5v = await _helperRIBd7Y.formatHelp(_cmdYr8gmEe, _helperiGG3EM8)
		const _cmdw1SPaHf = "cmnsrUis0RMNkjmsCCg5eWSpzI7hH9VCYItRhcIYrkDaw84CvffmlkZke6CFfV2RgW";
		const _returnValuefDTKNZ = await _helperRIBd7Y.visibleCommands(_cmdw1SPaHf)
		const _returnValuePlCRw5Y = await _helperbxIGIvK.longestOptionTermLength(_cmdp0KYy0C, _helperRIBd7Y)
		const _cmdLFBQ9H = 6.729525117105144;
		const _returnValueSFx4fVP = true;
		const _helpervFgsKpa = () => { return _returnValueSFx4fVP };
		const _returnValueC3GUxUJ = await _helperbxIGIvK.formatHelp(_cmdLFBQ9H, _helpervFgsKpa)
		const _returnValuep4qSjYB = await _helperJfCnNzs.longestOptionTermLength(_cmdfXX4Ft4, _helperbxIGIvK)
		const _arrayValuehSDFZni = null;
		const _arrayValuesbcGlzS = false;
		const _nameTNb9jCP = [_arrayValuehSDFZni, _arrayValuesbcGlzS]
		const _cmdrl0fhV = new Command(_nameTNb9jCP)
		const _returnValueyU0GJVt = await _cmdrl0fhV.createHelp()
		const _arrayValueePfArX = undefined;
		const _arrayValuerPNJrQQ = undefined;
		const _namehzC7Zq = [_arrayValueePfArX, _arrayValuerPNJrQQ]
		const _descriptionQ1bYQev = true;
		const _returnValuezvXkyCR = await _cmdrl0fhV.createArgument(_namehzC7Zq, _descriptionQ1bYQev)
		const _strF7UXOk1 = undefined;
		const _returnValueM5csQyk = await _cmdrl0fhV.usage(_strF7UXOk1)
		const _displayHelpnN0rfYo = {
		
	}
		const _returnValue79FSoX = await _cmdrl0fhV.showHelpAfterError(_displayHelpnN0rfYo)
		const _returnValueAqnLl25 = await _helperJfCnNzs.visibleOptions(_cmdrl0fhV)
		const _cmdDr1zgxJ = "pZAVh0Gy5oXR9l1CFED9gbw";
		const _returnValueSh26tdd = await _helperJfCnNzs.visibleCommands(_cmdDr1zgxJ)
		const _returnValueDRQlum0 = await _HelpaGDapQS.padWidth(_cmdRO86x7, _helperJfCnNzs)
		const _arrayValuehdObPSr = null;
		const _cmdZ4iEUEA = [_arrayValuehdObPSr]
		const _helperRrRO7iI = new Help()
		const _exitCodebVkd8b8 = "cX8GithSryJ7gBL7JwN7";
		const _codeUHhaNNO = {
		
	}
		const _messageHuzvbUO = null;
		const _argumenteqRvlGR = new CommanderError(_exitCodebVkd8b8, _codeUHhaNNO, _messageHuzvbUO)
		const _returnValuej1AIhN3 = await _helperRrRO7iI.argumentTerm(_argumenteqRvlGR)
		const _cmd6VoDRA = "2l2zx3pxjFvoovl5YGLA";
		const _helperJBPTLhj = new Help()
		const _returnValueGGvcejI = 0.9547572331643739;
		const _optionOjpJ9Fl = () => { return _returnValueGGvcejI };
		const _returnValuebWRnmn = await _helperJBPTLhj.optionTerm(_optionOjpJ9Fl)
		const _namepCii2Um = 0.9823355506964138;
		const _cmdonDMEOa = new Command(_namepCii2Um)
		const _exitCodeDGCs7Q6 = {
		
	}
		const _codexjdx71g = -4.1647493611092;
		const _messagevL4dzxf = null;
		const _returnValueEC2zf3n = await _cmdonDMEOa._displayError(_exitCodeDGCs7Q6, _codexjdx71g, _messagevL4dzxf)
		const _arrayValueAawNkM = -2.033871667500975;
		const _arrayValueeqAI242 = 7.155287233705419;
		const _arrayValueRHNIQQ6 = "r8ITp4CbGVQk5Cwk0wOw4YwNxxakzV1JZTWnQKkn16wX3VzruGpIzJJfmmo7aAj6bb4Qf2xi7GG4JM";
		const _arrayValueWs0mGTp = {
		
	}
		const _arrayValuebMqAkds = [_arrayValueRHNIQQ6, _arrayValueWs0mGTp]
		const _eventdiddXeE = [_arrayValueAawNkM, _arrayValueeqAI242, _arrayValuebMqAkds]
		const _listenerxOVN0P7 = -4.012034320013078;
		const _returnValueFY8mha = await _cmdonDMEOa.hook(_eventdiddXeE, _listenerxOVN0P7)
		const _arrayValuel6ccSeh = "jHtH4jRdN0iX9ajDKlloECQ6rOHjTubXS7isK71Lt2E7x8HpJsJzpWESVoIdksHxD3KijWDfAwm";
		const _arrayValuebY1AIuu = null;
		const __outputConfigurationYKMgy3f = [_arrayValuel6ccSeh, _arrayValuebY1AIuu]
		const __hasHelpOptionQNLDd4T = {
		
	}
		const __helpFlagsv7rQeOO = {
		
	}
		const __helpDescriptionMcmDUN9 = {
		
	}
		const __helpShortFlagVCTRCQV = {
		
	}
		const __helpLongFlagfgzCEJJ = undefined;
		const _arrayValueV9Yenft = null;
		const __helpCommandNameojPsjP = [_arrayValueV9Yenft]
		const __helpCommandnameAndArgsPulEeJG = {
		
	}
		const __helpCommandDescriptiont81OkMW = {
		
	}
		const __helpConfigurationklbFvbX = {
		
	}
		const _returnValueq8dWh6 = 2.2950076336390097;
		const __exitCallbacku8SSB2 = () => { return _returnValueq8dWh6 };
		const __storeOptionsAsPropertiesaKazAx = {
		
	}
		const __combineFlagAndOptionalValuehFB3DWe = {
		
	}
		const __allowExcessArgumentsNte3sUN = {
		
	}
		const __enablePositionalOptionsXYASQzf = {
		
	}
		const __showHelpAfterErrorotYVfhL = {
		
	}
		const __showSuggestionAfterErrorWbj9B8E = {
		
	}
		const _sourceCommandNEm5bh8 = {
			"_outputConfiguration": __outputConfigurationYKMgy3f,
		"_hasHelpOption": __hasHelpOptionQNLDd4T,
		"_helpFlags": __helpFlagsv7rQeOO,
		"_helpDescription": __helpDescriptionMcmDUN9,
		"_helpShortFlag": __helpShortFlagVCTRCQV,
		"_helpLongFlag": __helpLongFlagfgzCEJJ,
		"_helpCommandName": __helpCommandNameojPsjP,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPulEeJG,
		"_helpCommandDescription": __helpCommandDescriptiont81OkMW,
		"_helpConfiguration": __helpConfigurationklbFvbX,
		"_exitCallback": __exitCallbacku8SSB2,
		"_storeOptionsAsProperties": __storeOptionsAsPropertiesaKazAx,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValuehFB3DWe,
		"_allowExcessArguments": __allowExcessArgumentsNte3sUN,
		"_enablePositionalOptions": __enablePositionalOptionsXYASQzf,
		"_showHelpAfterError": __showHelpAfterErrorotYVfhL,
		"_showSuggestionAfterError": __showSuggestionAfterErrorWbj9B8E
	}
		const _returnValueb64cftS = await _cmdonDMEOa.copyInheritedSettings(_sourceCommandNEm5bh8)
		const _enableOrNameAndArgsbzbeME = "ooAnKnugAozvi1HzPKEheLLSSG34NfHo";
		const _descriptionPSWILu5 = 4.571723864155112;
		const _returnValueFgSkibg = await _cmdonDMEOa.addHelpCommand(_enableOrNameAndArgsbzbeME, _descriptionPSWILu5)
		const _returnValuenjN3Vsw = await _helperJBPTLhj.commandUsage(_cmdonDMEOa)
		const _cmdunXcYWq = "Xd1NtLB34R9qXzhFCYeGIiRlo75LwwerwI6BNVBDn4f6iAbEvJFtSljffvtoMV4aIBYzvhoywFvvimnHrtQyVHqTufRdWJuLe3t";
		const _returnValueuJxXH17 = await _helperJBPTLhj.visibleArguments(_cmdunXcYWq)
		const _returnValueFHwK9Y = null;
		const _optionKmtpba9 = () => { return _returnValueFHwK9Y };
		const _returnValues5J02pp = await _helperJBPTLhj.optionDescription(_optionKmtpba9)
		const _cmdzmf1vGM = "QJAk2DpwW1oNhS5yaCRvXXh5n5Q81Lad2uo5O";
		const _returnValuel1ygC5R = await _helperJBPTLhj.visibleArguments(_cmdzmf1vGM)
		const _returnValuef4spTP = await _helperRrRO7iI.padWidth(_cmd6VoDRA, _helperJBPTLhj)
		const _returnValueZo6aCP = await _HelpaGDapQS.longestSubcommandTermLength(_cmdZ4iEUEA, _helperRrRO7iI)
		const _namehFNJMe = undefined;
		const _cmdBf1bw5 = new Command(_namehFNJMe)
		const _flagsIDTdLpe = null;
		const _descriptionvyORE5 = 4.368719433481523;
		const _arrayValueV6LCO1j = true;
		const _arrayValueEkbStEM = -9.002218986543667;
		const _arrayValuePdJwMrD = [_arrayValueV6LCO1j, _arrayValueEkbStEM]
		const _arrayValueQCXzUqi = [_arrayValuePdJwMrD]
		const _arrayValued60wR7n = undefined;
		const _fncxe08Ap = [_arrayValueQCXzUqi, _arrayValued60wR7n]
		const _defaultValueAbxTX0P = undefined;
		const _returnValueo83bBJJ = await _cmdBf1bw5.option(_flagsIDTdLpe, _descriptionvyORE5, _fncxe08Ap, _defaultValueAbxTX0P)
		const _stravNviBB = undefined;
		const _returnValuexSgm7n = await _cmdBf1bw5.usage(_stravNviBB)
		const _requiredSlFUEv = null;
		const _defaultValuea2XiPdd = undefined;
		const _parseArgT0J2XiU = undefined;
		const _namethIQvMu = 3.379247063087753;
		const _argumentxflGvUx = {
			"required": _requiredSlFUEv,
		"defaultValue": _defaultValuea2XiPdd,
		"parseArg": _parseArgT0J2XiU,
		"name": _namethIQvMu
	}
		const _returnValueHP7foZT = await _cmdBf1bw5.addArgument(_argumentxflGvUx)
		const _returnValuenOFPTQZ = await _HelpaGDapQS.visibleOptions(_cmdBf1bw5)
	});

	it('test for Help', async () => {
		const _HelpRek0RHy = new Help()
		const _arrayValuekicdibm = false;
		const _arrayValueJViXF8W = null;
		const _namegYFoHfJ = [_arrayValuekicdibm, _arrayValueJViXF8W]
		const _cmdvyO5VCt = new Command(_namegYFoHfJ)
		const _strKAf4yPl = undefined;
		const _returnValuebtimQBC = await _cmdvyO5VCt.name(_strKAf4yPl)
		const _lengthzMYHQQ = "b3YaQskkpsQ2aeP4Fxb5Br77w16nR2TkIBCPBqB8ENN6GrkwJhXckOG4lobJbIANnYqmV7NKQiUuCaKYyaqc";
		const _receivedArgsnHpE81P = {
			"length": _lengthzMYHQQ
	}
		const _returnValueXhwRChU = await _cmdvyO5VCt._excessArguments(_receivedArgsnHpE81P)
		const _configurationArpYkX = undefined;
		const _returnValueEyz0vvJ = await _cmdvyO5VCt.configureOutput(_configurationArpYkX)
		const _returnValueWMNPRT0 = await _HelpRek0RHy.subcommandTerm(_cmdvyO5VCt)
		const _returnValuefLSuj3Q = null;
		const _optionUvIEx9f = () => { return _returnValuefLSuj3Q };
		const _returnValueNoKyO7 = await _HelpRek0RHy.optionTerm(_optionUvIEx9f)
		const __namei4OXeXq = {
		
	}
		const __aliasesVdrvIl9 = {
		
	}
		const _parentBkbC13k = {
		
	}
		const _returnValueHblLsx5 = "rQgdBSqYQIZs";
		const _usageuHKqTzE = () => { return _returnValueHblLsx5 };
		const _cmdOd0rhPg = {
			"_name": __namei4OXeXq,
		"_aliases": __aliasesVdrvIl9,
		"parent": _parentBkbC13k,
		"usage": _usageuHKqTzE
	}
		const _returnValueWoURiy = await _HelpRek0RHy.commandUsage(_cmdOd0rhPg)
	});

	it('test for Help', async () => {
		const _HelpjEcZY2p = new Help()
		const _nameNfQiUjl = "WhSVD7D9KwmAaPMtOCa761jKMox5BSP68su9EPERYNpPjvOKGP4b1pzxqetIiNBmjc5jwStU3MqOw";
		const _cmdkq0cJ9I = new Command(_nameNfQiUjl)
		const _contextOptionso9mAAhi = true;
		const _returnValuedXz5gst = await _cmdkq0cJ9I.helpInformation(_contextOptionso9mAAhi)
		const _returnValuelfV5x5f = await _cmdkq0cJ9I._checkNumberOfArguments()
		const _allowUnknownFevKNkB = false;
		const _returnValueH0Eqe8Z = await _cmdkq0cJ9I.allowUnknownOption(_allowUnknownFevKNkB)
		const _returnValueWuWgTV3 = await _HelpjEcZY2p.visibleCommands(_cmdkq0cJ9I)
		const _returnValuenOThsc = -1.9519450470046635;
		const _optionevRdTU0 = () => { return _returnValuenOThsc };
		const _returnValueL5XZLWB = await _HelpjEcZY2p.optionTerm(_optionevRdTU0)
		const _cmdAZepmU = 5.718995845631278;
		const _helperqTAOuI = new Help()
		const _cmdwaOmeik = "KsRIitnxL8jVh1OAHfG1KdN6ZvNv7dm07Ps34w6EuCNOFlne";
		const _helper6BKs1I = "St6F5dSB2KasaRMmyFGYFBzTKAFwYR2CdPOmV1OqwE5csUsFVzX5kWxNelcQy59VEMVIJQ3ZmD0vknDuEmr";
		const _returnValuetwupE99 = await _helperqTAOuI.padWidth(_cmdwaOmeik, _helper6BKs1I)
		const _arrayValuewPcKXxQ = true;
		const _arrayValuegC5XOKY = undefined;
		const _arrayValuerNNH6q0 = -5.163144355435908;
		const _arrayValuex14hFuS = [_arrayValuegC5XOKY, _arrayValuerNNH6q0]
		const _namehc17ogi = [_arrayValuewPcKXxQ, _arrayValuex14hFuS]
		const _cmd92lPdi = new Command(_namehc17ogi)
		const __namexm8a6OA = {
		
	}
		const _commandsY6O0ZFR = null;
		const __hiddenVzcGcQr = true;
		const _parentPINviXL = {
		
	}
		const _cmdlz3XDCv = {
			"_name": __namexm8a6OA,
		"commands": _commandsY6O0ZFR,
		"_hidden": __hiddenVzcGcQr,
		"parent": _parentPINviXL
	}
		const _isDefaultQStrgTW = null;
		const _optswIGx4a = {
			"isDefault": _isDefaultQStrgTW
	}
		const _returnValueh6qwPd = await _cmd92lPdi.addCommand(_cmdlz3XDCv, _optswIGx4a)
		const _exitCodeoZmtHqS = null;
		const _codeLmKMEoO = "3p";
		const _messageBROxss8 = true;
		const _returnValuebIiFAAP = await _cmd92lPdi._exit(_exitCodeoZmtHqS, _codeLmKMEoO, _messageBROxss8)
		const _flagsadzDJL2 = true;
		const _optionsvpv3xl = {
			"flags": _flagsadzDJL2
	}
		const _returnValuef5xihY = await _cmd92lPdi.missingMandatoryOptionValue(_optionsvpv3xl)
		const _keyeHUlx7q = {
		
	}
		const _valuecAr6NS5 = null;
		const _sourceKQOG2w3 = true;
		const _returnValueneEDW86 = await _cmd92lPdi.setOptionValueWithSource(_keyeHUlx7q, _valuecAr6NS5, _sourceKQOG2w3)
		const _returnValuenLmGqDU = await _helperqTAOuI.subcommandDescription(_cmd92lPdi)
		const _arrayValueyWmkknZ = -3.6726633474781494;
		const _arrayValuelxoFiwJ = undefined;
		const _cmdKp27Jgl = [_arrayValueyWmkknZ, _arrayValuelxoFiwJ]
		const _returnValueaibQXVl = await _helperqTAOuI.subcommandTerm(_cmdKp27Jgl)
		const _returnValue3OnHjb = await _HelpjEcZY2p.formatHelp(_cmdAZepmU, _helperqTAOuI)
		const _cmdwc4WuK = null;
		const _helperjmAUNm6 = new Help()
		const _cmdGxGZphl = undefined;
		const _helper8D6pA6 = new Help()
		const _cmdkONkfGa = undefined;
		const _helperhfnLwc = new Help()
		const _namej82HuE2 = undefined;
		const _cmdezYqqnn = new Command(_namej82HuE2)
		const _subcommandczpEU1Q = undefined;
		const _argsZHs4xRb = undefined;
		const _returnValueMGvXBN = await _cmdezYqqnn._executeSubCommand(_subcommandczpEU1Q, _argsZHs4xRb)
		const _displaySuggestionhjasELc = true;
		const _returnValuepwaQN2h = await _cmdezYqqnn.showSuggestionAfterError(_displaySuggestionhjasELc)
		const _returnValueNHTDxIK = await _helperhfnLwc.subcommandDescription(_cmdezYqqnn)
		const _returnValuebLfkIhp = await _helper8D6pA6.longestArgumentTermLength(_cmdkONkfGa, _helperhfnLwc)
		const _cmdqaeo2x = -4.546621480660294;
		const _helperyFbZePG = new Help()
		const _cmdXgPqHZz = -5.312394799861712;
		const _helperHu3Hydl = new Help()
		const _cmdXBR6vH = -1.2043472368767674;
		const _helperck8SjaP = new Help()
		const _returnValuecTnPq2 = true;
		const _optionX1AM4F2 = () => { return _returnValuecTnPq2 };
		const _returnValuew2KfNc = await _helperck8SjaP.optionDescription(_optionX1AM4F2)
		const _returnValuekvvDS2Y = 0.6227140511882112;
		const _returnValueQDS9Ndi = () => { return _returnValuekvvDS2Y };
		const _returnValueD3Ksji = () => { return _returnValueQDS9Ndi };
		const _returnValuePICvPHk = () => { return _returnValueD3Ksji };
		const _cmdmn7pgHy = () => { return _returnValuePICvPHk };
		const _returnValueFPVvqcH = await _helperck8SjaP.subcommandTerm(_cmdmn7pgHy)
		const _returnValueatKM2qz = await _helperHu3Hydl.longestArgumentTermLength(_cmdXBR6vH, _helperck8SjaP)
		const _cmdRvm1hEv = 5.271660080415332;
		const _helperMqGfYrv = "2SSSg6EwHKoNQELDKBOhNG4z9Yc9wj3aQLHp";
		const _returnValueSk9U41J = await _helperHu3Hydl.padWidth(_cmdRvm1hEv, _helperMqGfYrv)
		const _returnValueKGKoB7y = undefined;
		const _flagshvdDVi0 = () => { return _returnValueKGKoB7y };
		const _descriptionqPzDYbh = null;
		const _argumentejHh5RY = new Option(_flagshvdDVi0, _descriptionqPzDYbh)
		const _nameEtTptFW = undefined;
		const _returnValuex6Vro7T = await _argumentejHh5RY.env(_nameEtTptFW)
		const _hidelPGjzer = false;
		const _returnValueVgVO0l = await _argumentejHh5RY.hideHelp(_hidelPGjzer)
		const _argwxG6NuH = true;
		const _returnValuefxuYCkf = await _argumentejHh5RY.is(_argwxG6NuH)
		const _returnValueithGIv7 = await _argumentejHh5RY.attributeName()
		const _valueWOu13y5 = true;
		const _returnValuexQ4rliH = "seDJkkh769AD2OdKUszeLO8tSWPJbhXPjIG8G4xtedzlCZfXNsP2fYN";
		const _concatpVOac0Y = () => { return _returnValuexQ4rliH };
		const _previousbuO69ym = {
			"concat": _concatpVOac0Y
	}
		const _returnValuemJxgo6k = await _argumentejHh5RY._concatValue(_valueWOu13y5, _previousbuO69ym)
		const _returnValuekQAqZlE = await _helperHu3Hydl.argumentTerm(_argumentejHh5RY)
		const __namee6AGjZA = {
		
	}
		const __aliasesFcGsPnl = "xzujEjRWKsCBdxpufAM3JRKxYUFgVx22JIM32EZxm";
		const _parentTHPg3bM = "ifgxTLT3sOJOkq2HT9YMlKUDt1vCcgFxf92eP50KCn4jRchXrQJpN7SJt1BOTSoOnvzznKstcUSWfwgzt3iHE";
		const _arrayValuekFKWAlW = 7.893189505751337;
		const _usagemveNmbQ = [_arrayValuekFKWAlW]
		const _cmdVnJXQrr = {
			"_name": __namee6AGjZA,
		"_aliases": __aliasesFcGsPnl,
		"parent": _parentTHPg3bM,
		"usage": _usagemveNmbQ
	}
		const _returnValueRBTfsKw = await _helperHu3Hydl.commandUsage(_cmdVnJXQrr)
		const _returnValuePqOH72 = await _helperyFbZePG.formatHelp(_cmdXgPqHZz, _helperHu3Hydl)
		const _cmdNsgIvSV = false;
		const _helperkoFCWjo = new Help()
		const _cmdEETXbtC = "zrmMx4evVoCTTwKSoKkgw1HPuv3zxFcYkORyGWIBhJP2qGXthgccjvX6r0LvB88zGjRQXKuBxUdzXyJhVVRg";
		const _helpergFX7aZ0 = "LhHu61zAU8Zu8BHunqEz0X6";
		const _returnValuebkn9POP = await _helperkoFCWjo.longestSubcommandTermLength(_cmdEETXbtC, _helpergFX7aZ0)
		const _arrayValueUoQc1BC = {
		
	}
		const _cmdIgEW7v6 = [_arrayValueUoQc1BC]
		const _returnValuertqukUg = await _helperkoFCWjo.visibleOptions(_cmdIgEW7v6)
		const _cmdr5lTVpt = []
		const _returnValuecaKxIxM = await _helperkoFCWjo.visibleArguments(_cmdr5lTVpt)
		const __nameB1vKXoH = {
		
	}
		const __aliasesM1mqhV1 = {
		
	}
		const _parentTKQVyjx = {
		
	}
		const _arrayValueN900Tdz = null;
		const _arrayValueUaf6Lj = undefined;
		const _returnValuevipUhUx = [_arrayValueN900Tdz, _arrayValueUaf6Lj]
		const _usageGp6KKQO = () => { return _returnValuevipUhUx };
		const _cmdEkYhYeJ = {
			"_name": __nameB1vKXoH,
		"_aliases": __aliasesM1mqhV1,
		"parent": _parentTKQVyjx,
		"usage": _usageGp6KKQO
	}
		const _returnValuenfoliHW = await _helperkoFCWjo.commandUsage(_cmdEkYhYeJ)
		const _arrayValuea9VUfn0 = null;
		const _cmduyq9MgS = [_arrayValuea9VUfn0]
		const _helpersTE58Nx = "vwl5XjjnlzVttsKD3s76GbVVXiGRBo5Ef9SoNsHfgVCOocAKy";
		const _returnValuew5tuDRo = await _helperkoFCWjo.longestSubcommandTermLength(_cmduyq9MgS, _helpersTE58Nx)
		const _returnValuebIJcT3D = await _helperyFbZePG.longestOptionTermLength(_cmdNsgIvSV, _helperkoFCWjo)
		const _arrayValueU5JhD4K = false;
		const _arrayValueTTL298K = null;
		const _returnValueYiwMld7 = undefined;
		const _returnValueme5v8QI = () => { return _returnValueYiwMld7 };
		const _arrayValuexKY8q0I = () => { return _returnValueme5v8QI };
		const _arrayValuejxcifuS = [_arrayValueTTL298K, _arrayValuexKY8q0I]
		const _returnValuemgvSRb6 = [_arrayValueU5JhD4K, _arrayValuejxcifuS]
		const _optiontFVtyPX = () => { return _returnValuemgvSRb6 };
		const _returnValueN0mvHis = await _helperyFbZePG.optionDescription(_optiontFVtyPX)
		const _returnValuexxfLdWl = true;
		const _option5hJno2 = () => { return _returnValuexxfLdWl };
		const _returnValueymOvDE = await _helperyFbZePG.optionDescription(_option5hJno2)
		const _returnValueqUJSg2f = await _helper8D6pA6.formatHelp(_cmdqaeo2x, _helperyFbZePG)
		const _returnValue9rmRLA = await _helperjmAUNm6.longestOptionTermLength(_cmdGxGZphl, _helper8D6pA6)
		const _returnValueA89Bae6 = null;
		const _optionRrf5Uex = () => { return _returnValueA89Bae6 };
		const _returnValuemsmy1VH = await _helperjmAUNm6.optionDescription(_optionRrf5Uex)
		const _cmdzMuEuRD = "p5gmbte6YbWaz4qu3GpwjFdxIjQednBVJQmCbwibfrlTqbEXBEIiBaSGsshhGH15QHY";
		const _helperrfza0fV = "enc5ueXvoOCFkG6hR8Ud30p5w15p1UHLPNUPbztNrCV9cO3R3zPxaF2RKREtFq0cYXh3RR4TKo3t";
		const _returnValuex10OeXy = await _helperjmAUNm6.padWidth(_cmdzMuEuRD, _helperrfza0fV)
		const _returnValuec2qqzba = await _HelpjEcZY2p.formatHelp(_cmdwc4WuK, _helperjmAUNm6)
	});

	it('test for Help', async () => {
		const _HelpkCcQIaF = new Help()
		const _flagscGvT4sY = "mmTu1eZoWNotjHzj";
		const _descriptionhIBHcHQ = undefined;
		const _argumentCdtqtVs = new Option(_flagscGvT4sY, _descriptionhIBHcHQ)
		const _fnXVx1dk9 = {
		
	}
		const _returnValueLyugPYq = await _argumentCdtqtVs.argParser(_fnXVx1dk9)
		const _nameCyUaBEP = undefined;
		const _returnValuesYkxM84 = await _argumentCdtqtVs.env(_nameCyUaBEP)
		const _valuealtYTVW = "lqehVDlpGq35YWk1EDgBLjjgMcpfUvpNMQtLX40OnvuZr99j0VXq6zcQmta5vEcEVbYwKp5PTDCRP5f3rn";
		const _returnValuenXivgk1 = false;
		const _concatxQWZxIa = () => { return _returnValuenXivgk1 };
		const _previousPpy3nyX = {
			"concat": _concatxQWZxIa
	}
		const _returnValueYNCJ7Te = await _argumentCdtqtVs._concatValue(_valuealtYTVW, _previousPpy3nyX)
		const _returnValueEKEiUGQ = await _argumentCdtqtVs.attributeName()
		const _returnValuew4aXzfS = await _HelpkCcQIaF.argumentTerm(_argumentCdtqtVs)
		const _cmdNlpe7mS = 5.805558283902748;
		const _helperjHlOijp = "H4zYNNO33Qx6qFFWHANfu5P1rD2hpIBG398iTiA8y1cM9TNun6KLkEnemm8l5X5mYsSqaX1B1K";
		const _returnValuetkAwyb = await _HelpkCcQIaF.longestArgumentTermLength(_cmdNlpe7mS, _helperjHlOijp)
	});

	it('test for Help', async () => {
		const _HelpHzXUnlB = new Help()
		const _flagsruA2Yql = "FMcNXtFw97jjof9n7ioKKmMn8VkEWzsv2twcJoB";
		const _descriptionpgm74D4 = false;
		const _argumentlryLwog = new Option(_flagsruA2Yql, _descriptionpgm74D4)
		const _mandatoryfHAXIxP = true;
		const _returnValueKNWmznH = await _argumentlryLwog.makeOptionMandatory(_mandatoryfHAXIxP)
		const _valuejCJIMlF = undefined;
		const _descriptiondyKNTfh = undefined;
		const _returnValueTOhpUZj = await _argumentlryLwog.default(_valuejCJIMlF, _descriptiondyKNTfh)
		const _fnLAse6uc = {
		
	}
		const _returnValueGa3oFG0 = await _argumentlryLwog.argParser(_fnLAse6uc)
		const _returnValueQpCtBlE = await _HelpHzXUnlB.argumentTerm(_argumentlryLwog)
		const _returnValueToZYEc = null;
		const _nameXfswJfS = () => { return _returnValueToZYEc };
		const _descriptionlou3x7l = false;
		const _argumentJlIirYS = new Argument(_nameXfswJfS, _descriptionlou3x7l)
		const _valuelu0K1de = {
		
	}
		const _returnValuenphU5Lu = {
		
	}
		const _concatNfiUJm = () => { return _returnValuenphU5Lu };
		const _previousekF5Ar2 = {
			"concat": _concatNfiUJm
	}
		const _returnValueNgcnp7f = await _argumentJlIirYS._concatValue(_valuelu0K1de, _previousekF5Ar2)
		const _valuenJKXBq8 = undefined;
		const _descriptionMdFxpzO = {
		
	}
		const _returnValueyptMZMC = await _argumentJlIirYS.default(_valuenJKXBq8, _descriptionMdFxpzO)
		const _fnCokFP9E = undefined;
		const _returnValueRmDRhXB = await _argumentJlIirYS.argParser(_fnCokFP9E)
		const _arrayValueqwmYEZT = -9.206255843565614;
		const _arrayValueZa88a4c = "nNMXG8zbArKYM4Ip8Hq3coxxvuUgKjMCkv5jQD9FgGKjAR1xNo5IYQ";
		const _returnValueYs5r5YD = "3JEe3fkWynKIVrHtl9Kc2C0ETrRU9567JARI1SD5CYYI";
		const _arrayValueCjXJnaD = () => { return _returnValueYs5r5YD };
		const _valueGdRHnPH = [_arrayValueqwmYEZT, _arrayValueZa88a4c, _arrayValueCjXJnaD]
		const _descriptiont9CD55x = {
		
	}
		const _returnValuezQ1xNb = await _argumentJlIirYS.default(_valueGdRHnPH, _descriptiont9CD55x)
		const _returnValueHafcOgl = await _HelpHzXUnlB.argumentDescription(_argumentJlIirYS)
		const _returnValuekCzktZ = "iJ7Q4p4PHHJOEQEwgpraGT51BLteAzjhOwf1aPqhdt5R1AamK3CgpjJHHo";
		const _arrayValue6U7wJz = () => { return _returnValuekCzktZ };
		const _arrayValuePaabPKn = 2.908101012473047;
		const _arrayValueaoDDGxc = "yEt0ZTSPqn";
		const _returnValueEPaqJTp = [_arrayValue6U7wJz, _arrayValuePaabPKn, _arrayValueaoDDGxc]
		const _namesvVtSqs = () => { return _returnValueEPaqJTp };
		const _cmdQ3lUlLo = new Command(_namesvVtSqs)
		const _returnValueAXA7Ybk = null;
		const _strEw134uk = () => { return _returnValueAXA7Ybk };
		const _returnValuegZDpU8z = await _cmdQ3lUlLo.name(_strEw134uk)
		const _allowExcesscIi88ts = true;
		const _returnValueCQWN8sx = await _cmdQ3lUlLo.allowExcessArguments(_allowExcesscIi88ts)
		const _strkmAQTtN = undefined;
		const _argsDescriptiongdoUgPB = undefined;
		const _returnValueSimCVVW = await _cmdQ3lUlLo.description(_strkmAQTtN, _argsDescriptiongdoUgPB)
		const _returnValueUUV1qr8 = await _cmdQ3lUlLo.createHelp()
		const _returnValueMa1Rwno = await _HelpHzXUnlB.subcommandDescription(_cmdQ3lUlLo)
		const _cmdjQsUclH = false;
		const _arrayValueSw7tLeG = undefined;
		const _arrayValueR5v7Xx5 = null;
		const _arrayValuelLWRWaZ = true;
		const _helperEioHBbG = [_arrayValueSw7tLeG, _arrayValueR5v7Xx5, _arrayValuelLWRWaZ]
		const _returnValuet8BLh1n = await _HelpHzXUnlB.padWidth(_cmdjQsUclH, _helperEioHBbG)
		const _arrayValueq6gXv1A = "INFkNUBCbINamn4SIL8iKUJcg3HM1pxeN1CAEtEtaC3cMXxbthAKr4czz5oxy3g88";
		const _cmdKTLZ5B3 = [_arrayValueq6gXv1A]
		const _helperO6NaTnS = undefined;
		const _returnValueNiVQQO = await _HelpHzXUnlB.longestArgumentTermLength(_cmdKTLZ5B3, _helperO6NaTnS)
	});

	it('test for Help', async () => {
		const _HelpfrUhqdY = new Help()
		const __name2O9kxS = {
		
	}
		const __aliasesQbmkF3 = "MypsHF95UHTizc1rc62sgX2Uzsb9hFvGnjwsD4v1tV5KxLOXgG9mEaA9M";
		const _returnValuejaTRW6f = 9.42567656769122;
		const _parentvZklW7a = () => { return _returnValuejaTRW6f };
		const _returnValuexhbeius = "vinxahTiGDRIWr5uIsQXaFny4uM1bU85HSjbjxRb9M4tfWmbz5xseu2x6dGSZWZczdIRtC7";
		const _usagevX5g8M8 = () => { return _returnValuexhbeius };
		const _cmdvR1JcM = {
			"_name": __name2O9kxS,
		"_aliases": __aliasesQbmkF3,
		"parent": _parentvZklW7a,
		"usage": _usagevX5g8M8
	}
		const _returnValuefB1KB8 = await _HelpfrUhqdY.commandUsage(_cmdvR1JcM)
	});

	it('test for Help', async () => {
		const _HelpAbmLDVR = new Help()
		const _optionPfB0aUs = 6.081859551108593;
		const _returnValuedjZUpQ5 = await _HelpAbmLDVR.optionTerm(_optionPfB0aUs)
		const _arrayValueT5poac2 = -7.586989215346841;
		const _namenjWB07a = [_arrayValueT5poac2]
		const _descriptionkm6yaXS = "mCEjqlUYT9TPiWQ3JG7GfHFobhco43THnCWXKHwdgeYp8O8u8cS5jGu";
		const _argumentvBHpP9s = new Argument(_namenjWB07a, _descriptionkm6yaXS)
		const _arrayValueokHtaWN = "Oxe9BAWih1prO9eTqWVb4";
		const _valueZfG73nU = [_arrayValueokHtaWN]
		const _descriptionx7FgLHz = {
		
	}
		const _returnValuebsC9RBy = await _argumentvBHpP9s.default(_valueZfG73nU, _descriptionx7FgLHz)
		const _valueXBcGCQ0 = undefined;
		const _returnValueHu7zctJ = false;
		const _concatqg7ucVF = () => { return _returnValueHu7zctJ };
		const _previousCMDAmF7 = {
			"concat": _concatqg7ucVF
	}
		const _returnValueqDS0IvQ = await _argumentvBHpP9s._concatValue(_valueXBcGCQ0, _previousCMDAmF7)
		const _returnValueKwNcrnT = await _argumentvBHpP9s.argOptional()
		const _valueHkx8Jrr = {
		
	}
		const _descriptionn60wbh = {
		
	}
		const _returnValueWeboL60 = await _argumentvBHpP9s.default(_valueHkx8Jrr, _descriptionn60wbh)
		const _returnValuehgmEr7g = await _argumentvBHpP9s.name()
		const _returnValuedhJYJwI = await _HelpAbmLDVR.argumentDescription(_argumentvBHpP9s)
	});

	it('test for Help', async () => {
		const _HelptJ7US9C = new Help()
		const _arrayValuePGFlbHj = null;
		const _name0Zxb2u = [_arrayValuePGFlbHj]
		const _descriptionvIMZHr6 = true;
		const _argumentngGcaXH = new Argument(_name0Zxb2u, _descriptionvIMZHr6)
		const _fnea87Oyb = undefined;
		const _returnValueOkV2y9A = await _argumentngGcaXH.argParser(_fnea87Oyb)
		const _returnValuezusZpYS = await _argumentngGcaXH.argRequired()
		const _returnValue6FKVXd = await _argumentngGcaXH.argOptional()
		const _returnValueVxhMZKj = await _HelptJ7US9C.argumentDescription(_argumentngGcaXH)
		const _nameHAcr8PK = "5DFxCgQVAWb3vH3ngNafdRs8NZvrsIBloZjF7gxRBhh3ikUmI9w";
		const _cmdduFB9Oy = new Command(_nameHAcr8PK)
		const _strzPJUT2d = undefined;
		const _returnValueiCC7EHC = await _cmdduFB9Oy.name(_strzPJUT2d)
		const _flagsJHpybk3 = "FQCcz3jwPuI0khDz2IH9WhLNSAhoexG2Ken65VaHzQDJmc6xN6y61gKwS9haD7b5bPFeaAc4kyfQHhAX";
		const _description8arVWz = undefined;
		const _fnoMBo0td = "jVOGR7V6sh8i2Fm5aS1Z4fcKezUAbGCN1T";
		const _defaultValuewWq3UDN = "mpNxU72WggKVxelmcBI5TmT7mElF8KRwOOTmgLu2LdjEMyZvdUgU41MeqWbwfFt4siekdpPtpDG1OTwIKsOwL6qrAv";
		const _returnValuepFCoUCT = await _cmdduFB9Oy.requiredOption(_flagsJHpybk3, _description8arVWz, _fnoMBo0td, _defaultValuewWq3UDN)
		const _returnValueqoT5pYb = await _cmdduFB9Oy.opts()
		const _stretEZrlb = undefined;
		const _returnValuewNVIw2O = await _cmdduFB9Oy.name(_stretEZrlb)
		const _returnValueQ94nUR = await _HelptJ7US9C.subcommandTerm(_cmdduFB9Oy)
		const _arrayValueRgiHD0 = "q9PwzgH8lJTNxnhOtw1EZcAhoejmIuw48PNaU6Q7cGagGmLvQ5httj1AqStMU7BrHWE6WOhhd23PH6Xhatu";
		const _arrayValuefYCpYft = "YZQdr5U9S2OtVCO6UOLGfeSn0sMeruH2nVO6Pho6nccTXxDmTYnDY9wE522DxzBbUx7nYqc";
		const _arrayValuem8WhAR = [_arrayValueRgiHD0, _arrayValuefYCpYft]
		const _arrayValueLaZFJwe = "RT4aY3CEFB92Z4Bzlf7My4F8fyuB6Gsk9SzJGzxpgOOjjKjH2GVczf3k5cp3o6oDpDdL3rrriyFGMyPUo8xhAm6D";
		const _arrayValueiYxs39x = "PEeY5BEHDmrs";
		const _arrayValueCDRZc5H = "byvesCQd0C8hTvcADiyYC1OPmUT9fR53D5TKqvlvsUCKKyImboiJO";
		const _arrayValuezVzj6YS = undefined;
		const _arrayValueunkJZs8 = [_arrayValueLaZFJwe, _arrayValueiYxs39x, _arrayValueCDRZc5H, _arrayValuezVzj6YS]
		const _arrayValueFoS6l1y = 6.7604589074570285;
		const _cmdmXD72dA = [_arrayValuem8WhAR, _arrayValueunkJZs8, _arrayValueFoS6l1y]
		const _returnValueZWGVmfO = await _HelptJ7US9C.commandUsage(_cmdmXD72dA)
	});
})