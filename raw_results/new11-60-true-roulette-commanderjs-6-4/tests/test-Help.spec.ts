export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpQO8amAs = new Help()
		const _returnValuecVLMDdz = "tpLCJRlUOsqqGhrE6nOWEIypkakcTHLCq6drIjkBRjU7roWY";
		const _strJkqq9TD = () => { return _returnValuecVLMDdz };
		const _widthSUYDrkJ = 4.394969309374444;
		const _indentrQwZlup = -4.915436301261126;
		const _minColumnWidthrPIUd5F = false;
		const _returnValuelT7q9ZN = await _HelpQO8amAs.wrap(_strJkqq9TD, _widthSUYDrkJ, _indentrQwZlup, _minColumnWidthrPIUd5F)
		const _cmdCsZ6iNz = 5.540278334055593;
		const _sortSubcommandsxELVNn3 = null;
		const _returnValueIn5bOmS = false;
		const _subcommandTermIuskcxQ = () => { return _returnValueIn5bOmS };
		const _helperQhhMHQv = {
			"sortSubcommands": _sortSubcommandsxELVNn3,
		"subcommandTerm": _subcommandTermIuskcxQ
	}
		const _returnValueZbztQVU = await _HelpQO8amAs.longestSubcommandTermLength(_cmdCsZ6iNz, _helperQhhMHQv)
		const __argsoYvjZBJ = {
		
	}
		const __nameuvDWzu8 = -1.5255849963753292;
		const __aliaseszwSZz1i = {
		
	}
		const _optionsetIZ2lw = {
		
	}
		const _cmdK52eaH5 = {
			"_args": __argsoYvjZBJ,
		"_name": __nameuvDWzu8,
		"_aliases": __aliaseszwSZz1i,
		"options": _optionsetIZ2lw
	}
		const _returnValueJXG8FKD = await _HelpQO8amAs.subcommandTerm(_cmdK52eaH5)
	});

	it('test for Help', async () => {
		const _HelpBFsyVMX = new Help()
		const _arrayValuet6SpKv = undefined;
		const _arrayValueIvl0GWI = undefined;
		const _cmdfJJYP3q = [_arrayValuet6SpKv, _arrayValueIvl0GWI]
		const _helperElioB4w = "Gs7uGfhPZbuhCffA5hoeEdezHkQS5";
		const _returnValuendmfx6 = await _HelpBFsyVMX.formatHelp(_cmdfJJYP3q, _helperElioB4w)
		const _cmdHJs1TBl = undefined;
		const _helperCidaltJ = new Help()
		const _arrayValueohWCt2E = null;
		const _arrayValueezsDG8E = -5.373385728236379;
		const _arrayValueSgT5A1 = {
		
	}
		const _arrayValueeDeM6Bw = "MLQM9ybZsEC2Afd85v07ObGAMNAzQpuN4TXyNFNxYelGzab1mmxTl7aajAjayWcZoy8vtsB81F742CXfDqr6Hov";
		const _arrayValueCuirYrm = "SzSd6B51VaduPHQk4l5TdIUFauzQbexLVkvJsbGuaBUgkjfOxUumH9La3Q";
		const _arrayValuehsNi1N5 = "WDGIM4TgqfrIiUxsuHmU1cqnIx6uGsn2GSEtQ7n5kvIabdeRR";
		const _arrayValuea9jzYRk = [_arrayValuehsNi1N5]
		const _arrayValuejV0Sf00 = "lr7hdP6dPI57E8Em5rwmMkCkhDN";
		const _arrayValueojUlV8c = true;
		const _arrayValuemocXUcj = undefined;
		const _arrayValueCcMlTi = [_arrayValuejV0Sf00, _arrayValueojUlV8c, _arrayValuemocXUcj]
		const _arrayValueLOilVwU = [_arrayValueeDeM6Bw, _arrayValueCuirYrm, _arrayValuea9jzYRk, _arrayValueCcMlTi]
		const _arrayValueSpm8PHN = 0.7233511113400546;
		const _arrayValueRug9dz = undefined;
		const _arrayValueN1uDqYG = null;
		const _arrayValuemcLRXI8 = [_arrayValueRug9dz, _arrayValueN1uDqYG]
		const _arrayValuek5pVfK = -3.431929373589594;
		const _returnValueITPTKYK = [_arrayValueSpm8PHN, _arrayValuemcLRXI8, _arrayValuek5pVfK]
		const _arrayValueopF4dhV = () => { return _returnValueITPTKYK };
		const _returnValueQyn7qe = [_arrayValueezsDG8E, _arrayValueSgT5A1, _arrayValueLOilVwU, _arrayValueopF4dhV]
		const _returnValueFL6PoQk = () => { return _returnValueQyn7qe };
		const _arrayValuemIHI4RS = () => { return _returnValueFL6PoQk };
		const _cmdVHHHw3j = [_arrayValueohWCt2E, _arrayValuemIHI4RS]
		const _returnValuevB3KwJO = await _helperCidaltJ.commandUsage(_cmdVHHHw3j)
		const _arrayValueuWmqbZf = 0.5389410919518927;
		const _arrayValueZvEFhmO = null;
		const _arrayValueNlnmEFX = {
		
	}
		const _arrayValue218FbQ = false;
		const _cmdqvwsw6 = [_arrayValueuWmqbZf, _arrayValueZvEFhmO, _arrayValueNlnmEFX, _arrayValue218FbQ]
		const _returnValueeZObjDu = false;
		const _sortSubcommandsZYbSGF6 = () => { return _returnValueeZObjDu };
		const _returnValuel1eYB9V = "mwviJlkB35nd0d8JOtGiY9UDqcQZ7buMa0YX6bchCwjQREn2TKcu4FbER8QiWm5kP0W4cg67H";
		const _subcommandTermpupO0YL = () => { return _returnValuel1eYB9V };
		const _helperdJYXdNa = {
			"sortSubcommands": _sortSubcommandsZYbSGF6,
		"subcommandTerm": _subcommandTermpupO0YL
	}
		const _returnValueQ9Ri0Ab = await _helperCidaltJ.longestSubcommandTermLength(_cmdqvwsw6, _helperdJYXdNa)
		const _arrayValueGOqr11e = true;
		const _arrayValuekyGrrN8 = false;
		const _returnValueQoapOie = true;
		const _arrayValueAoqBmpf = () => { return _returnValueQoapOie };
		const _cmdibHHo91 = [_arrayValueGOqr11e, _arrayValuekyGrrN8, _arrayValueAoqBmpf]
		const _returnValuecROJCh = await _helperCidaltJ.subcommandTerm(_cmdibHHo91)
		const _returnValueJXBCXuH = undefined;
		const _returnValueKvwVES7 = () => { return _returnValueJXBCXuH };
		const _cmdlU7UEMP = () => { return _returnValueKvwVES7 };
		const _returnValueohnZFX5 = await _helperCidaltJ.visibleArguments(_cmdlU7UEMP)
		const _returnValueY640MG = await _HelpBFsyVMX.formatHelp(_cmdHJs1TBl, _helperCidaltJ)
		const _arrayValueaPuyUl4 = "3WNA6IGrpdpSruLIMb1tzf4Gps9jqP94vjgmTuKiOEkt9ljL9YbrdeZGDYTLj6T3dvlGreGAJe4lUNFRT5kuCF";
		const _arrayValueArbau0 = true;
		const _arrayValueGMuZuAy = null;
		const _strHEAHrVV = [_arrayValueaPuyUl4, _arrayValueArbau0, _arrayValueGMuZuAy]
		const _widthn15NLK0 = -6.478933690651436;
		const _indentUur2pcO = 0.30865303054428317;
		const _minColumnWidthn2iAkli = 3.2594766039071423;
		const _returnValueEX58gGc = await _HelpBFsyVMX.wrap(_strHEAHrVV, _widthn15NLK0, _indentUur2pcO, _minColumnWidthn2iAkli)
	});

	it('test for Help', async () => {
		const _HelpYjANBBG = new Help()
		const __argsDescriptionWrXhNVS = {
		
	}
		const __argsQwKYeMj = {
		
	}
		const _cmdx2KPzA = {
			"_argsDescription": __argsDescriptionWrXhNVS,
		"_args": __argsQwKYeMj
	}
		const _returnValueHNIVeRn = await _HelpYjANBBG.visibleArguments(_cmdx2KPzA)
		const _cmdxMhp58N = null;
		const _arrayValuetxHKZBW = -7.125628858677425;
		const _arrayValuep1iuyMM = true;
		const _arrayValueKzqQFdk = {
		
	}
		const _arrayValueNJTUmb = undefined;
		const _arrayValuePBEYiXQ = false;
		const _arrayValuelHUuAjC = undefined;
		const _arrayValueg5NAxwH = [_arrayValuePBEYiXQ, _arrayValuelHUuAjC]
		const _arrayValuedsQxnZT = {
		
	}
		const _arrayValuexudXKio = [_arrayValueNJTUmb, _arrayValueg5NAxwH, _arrayValuedsQxnZT]
		const _arrayValueXOpxkCS = 6.963533441337638;
		const _arrayValueyZHTDoO = [_arrayValueKzqQFdk, _arrayValuexudXKio, _arrayValueXOpxkCS]
		const _arrayValueT1QbI1X = undefined;
		const _sortSubcommandsMYMtqd = [_arrayValuetxHKZBW, _arrayValuep1iuyMM, _arrayValueyZHTDoO, _arrayValueT1QbI1X]
		const _returnValuemi0pm5E = false;
		const _subcommandTermOSKw63V = () => { return _returnValuemi0pm5E };
		const _helperMPSJC9N = {
			"sortSubcommands": _sortSubcommandsMYMtqd,
		"subcommandTerm": _subcommandTermOSKw63V
	}
		const _returnValuer6EMJY = await _HelpYjANBBG.formatHelp(_cmdxMhp58N, _helperMPSJC9N)
		const _cmdqsR3e81 = undefined;
		const _returnValue4x9n7Y = await _HelpYjANBBG.subcommandTerm(_cmdqsR3e81)
		const _returnValueU5qax46 = false;
		const _optionEYb80ep = () => { return _returnValueU5qax46 };
		const _returnValueMeGRlF9 = await _HelpYjANBBG.optionDescription(_optionEYb80ep)
	});

	it('test for Help', async () => {
		const _HelpkgG07R = new Help()
		const _cmduyLOBUH = "1BGJUlzedT98qRUIT";
		const _returnValueGYz5VkR = await _HelpkgG07R.commandDescription(_cmduyLOBUH)
		const _cmdS4FTlBQ = "EDf1U3wIu2rTRmcq1DHVNG9XlRTHf5g6QNxvujli4hY9y6OBXKg8cVinFaoQKeDNI";
		const _returnValuen0JHY9G = 3.742122763452034;
		const _helperO0szqSt = () => { return _returnValuen0JHY9G };
		const _returnValuemptYdTX = await _HelpkgG07R.longestOptionTermLength(_cmdS4FTlBQ, _helperO0szqSt)
		const _arrayValueUHo48eO = "QLi9XJ7Mc4Zc3BIGN1LSUtILbfAEpdneeO59hvVkadWBWJ139nU5PmKCCeHoeeiVKCzL66CgkpmcFi67HPGxS";
		const _arrayValueMhd4L3K = -8.123666389043937;
		const _arrayValue1xPPvO = 1.2809800936012845;
		const _arrayValuemWSs3dN = [_arrayValue1xPPvO]
		const _returnValueIT1YYux = [_arrayValueUHo48eO, _arrayValueMhd4L3K, _arrayValuemWSs3dN]
		const _returnValueLRLvYc = () => { return _returnValueIT1YYux };
		const _namenjGEWJg = () => { return _returnValueLRLvYc };
		const _argumentwVXWAeY = {
			"name": _namenjGEWJg
	}
		const _returnValueS2sRsvk = await _HelpkgG07R.argumentTerm(_argumentwVXWAeY)
		const _arrayValueM4fmOfj = {
		
	}
		const _returnValuek8EIEXI = {
		
	}
		const _arrayValueAZyzctT = () => { return _returnValuek8EIEXI };
		const _cmdSlZiQ4T = [_arrayValueM4fmOfj, _arrayValueAZyzctT]
		const _returnValueKZoHpbA = await _HelpkgG07R.commandUsage(_cmdSlZiQ4T)
		const _cmdScmCYZC = false;
		const _helperh9hqxVq = "VHn9iRwrMAk4rKPamc1euBRgFpH8l5vr";
		const _returnValueunhisuO = await _HelpkgG07R.formatHelp(_cmdScmCYZC, _helperh9hqxVq)
	});

	it('test for Help', async () => {
		const _HelpIXIIlcb = new Help()
		const _cmdYnkVQOk = {
		
	}
		const _helperUOlaXI = "sNHUAw3XnC7IvEOoAUyDeJLVf2ftjkpTh7zqC4FYw4CzyxGqDQduKdPj";
		const _returnValueXqOJIq = await _HelpIXIIlcb.longestOptionTermLength(_cmdYnkVQOk, _helperUOlaXI)
		const _arrayValuesY53Og = undefined;
		const _arrayValuePHWXZc = null;
		const _arrayValuebvFLzhJ = -2.997345813824399;
		const _returnValueZx3T0R = [_arrayValuesY53Og, _arrayValuePHWXZc, _arrayValuebvFLzhJ]
		const _descriptionA6iVkIm = () => { return _returnValueZx3T0R };
		const _cmdrw7I3V = {
			"description": _descriptionA6iVkIm
	}
		const _returnValueES09O0Y = await _HelpIXIIlcb.commandDescription(_cmdrw7I3V)
		const _optionscjWJY2w = {
		
	}
		const __hasHelpOptionUdKyMQM = false;
		const __helpShortFlagKtI4rJt = false;
		const _arrayValueyvCYoaY = null;
		const _returnValueJScwStu = [_arrayValueyvCYoaY]
		const __findOption42Era0 = () => { return _returnValueJScwStu };
		const __helpLongFlagl3K2FP = false;
		const _returnValueZ6W6y9S = "ufnA1CK897MEOqKk22TfI7LtKFZvCggxbSIELmLS2kRK6ddSLawJ34r9nQCvSyC7UyNn52tSMcKVMSNoYkHPt";
		const _createOptionZJ6E8Kx = () => { return _returnValueZ6W6y9S };
		const __helpDescriptionumZeQEz = -8.92983256453472;
		const __helpFlagsICogihA = undefined;
		const _cmdGl0EIE5 = {
			"options": _optionscjWJY2w,
		"_hasHelpOption": __hasHelpOptionUdKyMQM,
		"_helpShortFlag": __helpShortFlagKtI4rJt,
		"_findOption": __findOption42Era0,
		"_helpLongFlag": __helpLongFlagl3K2FP,
		"createOption": _createOptionZJ6E8Kx,
		"_helpDescription": __helpDescriptionumZeQEz,
		"_helpFlags": __helpFlagsICogihA
	}
		const _returnValueG1wG5a6 = await _HelpIXIIlcb.visibleOptions(_cmdGl0EIE5)
	});

	it('test for Help', async () => {
		const _HelpjCJiZAv = new Help()
		const _cmdmm5tKJ8 = true;
		const _helperVHJz0I8 = new Help()
		const _cmd17Aaj1 = true;
		const _helperliiOy2f = false;
		const _returnValuezj7r7U4 = await _helperVHJz0I8.padWidth(_cmd17Aaj1, _helperliiOy2f)
		const _argument7t9eX9 = "CuxQiSs8jbsTyA9h65hBpNJR6n1S5xqJvGXiGmqmJa1NDASG2B6rOq9BE5xuSktUGhwm5kJQTtC3";
		const _returnValueFGN5NFB = await _helperVHJz0I8.argumentTerm(_argument7t9eX9)
		const _arrayValuedqlPJIB = null;
		const _arrayValueB2Bf6V9 = {
		
	}
		const _arrayValueTeXJimS = null;
		const _returnValueXQx61Pn = [_arrayValuedqlPJIB, _arrayValueB2Bf6V9, _arrayValueTeXJimS]
		const _arrayValuexaBNzxi = () => { return _returnValueXQx61Pn };
		const _argumentJGUR7h4 = [_arrayValuexaBNzxi]
		const _returnValuearJbQ7s = await _helperVHJz0I8.argumentDescription(_argumentJGUR7h4)
		const _returnValuenbk7Un = await _HelpjCJiZAv.longestArgumentTermLength(_cmdmm5tKJ8, _helperVHJz0I8)
		const _nameIfA8NOS = "0Inpoiet9sXFEspArNnz";
		const _descriptionAXuhALy = "JBVj9B5Lw9SRM6RVO4OwvmbW3G8MY6L8GHmAh7nvT6ixpGHOzsCGUOdCc4tVOqJWZTiyb6BSXopKSFMmK2YFQC6beuGkijgb2B";
		const _argumentPy2K2W = new Argument(_nameIfA8NOS, _descriptionAXuhALy)
		const _returnValueWKMPFZz = await _argumentPy2K2W.name()
		const _returnValuePa6yw2m = await _argumentPy2K2W.argRequired()
		const _returnValueKBPYkuI = await _argumentPy2K2W.argRequired()
		const _returnValueTPKa8Zd = await _HelpjCJiZAv.argumentTerm(_argumentPy2K2W)
		const _cmdbFvpkhA = "Hixmb4v9QczyIBUBmgRSnbBgdr3d36q9BR76sVcNSF5Jy1am5Qcf7N9h";
		const _returnValuexyQ2kD6 = await _HelpjCJiZAv.commandUsage(_cmdbFvpkhA)
		const _cmdW8x0h88 = "HigKXJm2DajLVcrxuCspFPoK9fdfddvvobnkNNH20S7GDMp8G6rx18sPTDHD4lntzzA3Xs1Gud4q1ezpB4UdngSGD0Xzvz";
		const _arrayValueHcEFq0C = undefined;
		const _arrayValueZ6HvaIF = "RfnlWjyuOyNDqRGJyeccLR0";
		const _helperZfJIKm = [_arrayValueHcEFq0C, _arrayValueZ6HvaIF]
		const _returnValueoZ5fI1h = await _HelpjCJiZAv.longestArgumentTermLength(_cmdW8x0h88, _helperZfJIKm)
		const _returnValueu2FdOjb = {
		
	}
		const _flagsNmP7gAc = () => { return _returnValueu2FdOjb };
		const _descriptionJGLHJ10 = null;
		const _optionGIO5X7s = new Option(_flagsNmP7gAc, _descriptionJGLHJ10)
		const _valueEACP3Oh = null;
		const _arrayValuegBW3jpA = -2.730809540747022;
		const _previousW0KIkLj = [_arrayValuegBW3jpA]
		const _returnValueKN91IkJ = await _optionGIO5X7s._concatValue(_valueEACP3Oh, _previousW0KIkLj)
		const _namelHbBMI = undefined;
		const _returnValueQdqhHZs = await _optionGIO5X7s.env(_namelHbBMI)
		const _valueY7FtJiV = undefined;
		const _descriptionTw8NR0C = {
		
	}
		const _returnValuezrsBNZS = await _optionGIO5X7s.default(_valueY7FtJiV, _descriptionTw8NR0C)
		const _returnValuenmL4gm1 = await _HelpjCJiZAv.optionTerm(_optionGIO5X7s)
	});

	it('test for Help', async () => {
		const _HelpoC3pSI = new Help()
		const _returnValueYS3zs6n = -5.468471533571938;
		const _cmdyRbIbK = () => { return _returnValueYS3zs6n };
		const _sortSubcommandsx6I6Daf = undefined;
		const _returnValuevH02QlP = "GAFuhpgav3J5d2tCU1SqZWwSh4Bl68QQ7Cc6XOUtENoPI3o4QFB89kyOLSPwFMoQzub1MWG";
		const _subcommandTermIJnBY7p = () => { return _returnValuevH02QlP };
		const _helperWcOeGz6 = {
			"sortSubcommands": _sortSubcommandsx6I6Daf,
		"subcommandTerm": _subcommandTermIJnBY7p
	}
		const _returnValuefEki7wp = await _HelpoC3pSI.longestSubcommandTermLength(_cmdyRbIbK, _helperWcOeGz6)
		const _cmdbSLzH7H = []
		const _returnValuegCNoWze = await _HelpoC3pSI.subcommandTerm(_cmdbSLzH7H)
		const _arrayValuermXAEVN = -0.5537506779732961;
		const _returnValueehMXOmB = [_arrayValuermXAEVN]
		const _argumentZTMRX9 = () => { return _returnValueehMXOmB };
		const _returnValuejMuMpTt = await _HelpoC3pSI.argumentDescription(_argumentZTMRX9)
	});

	it('test for Help', async () => {
		const _HelpcIJBU1t = new Help()
		const _namewWLuS8 = "uhDfvAVb4X62Nzp4s27kkTYohEljfr4mkWmeVVS5gWR6JkWk7XnDozv8c1eyoWnaR";
		const _cmdYsv7Zf1 = new Command(_namewWLuS8)
		const _returnValueyFj4Pc1 = await _cmdYsv7Zf1._parseOptionsEnv()
		const _returnValuei2GXlfn = await _HelpcIJBU1t.subcommandTerm(_cmdYsv7Zf1)
		const _returnValuerfP75bn = undefined;
		const _sliceGGij2J = () => { return _returnValuerfP75bn };
		const _namea891rGG = {
			"slice": _sliceGGij2J
	}
		const _descriptiongfwm9yB = -3.90366154282614;
		const _optioncNBbS6R = new Argument(_namea891rGG, _descriptiongfwm9yB)
		const _arrayValueDfMTI4S = true;
		const _arrayValueQyjkfHT = "nD9bd9z";
		const _arrayValuepaqZEfj = "9y4ToURN5zf9OTdecuEPrsG69CmezlxV4SFUKPEuoqammrnsAVRayD";
		const _arrayValueCPwWbuP = undefined;
		const _valuetQoQwMO = [_arrayValueDfMTI4S, _arrayValueQyjkfHT, _arrayValuepaqZEfj, _arrayValueCPwWbuP]
		const _returnValueioYIfDQ = "AnpnsyXonkfRX1KLVE2quC6vUrWW08opR3norgHLDuLWUBqgu4DXFphj5mdLq39r8uB1aaQGxNc4JNhK";
		const _concatu0ZtVCz = () => { return _returnValueioYIfDQ };
		const _previouszF8ABa = {
			"concat": _concatu0ZtVCz
	}
		const _returnValuezDsqCq = await _optioncNBbS6R._concatValue(_valuetQoQwMO, _previouszF8ABa)
		const _fne8FMeBv = {
		
	}
		const _returnValuegjlBPi4 = await _optioncNBbS6R.argParser(_fne8FMeBv)
		const _arrayValueHSvMXSS = -4.845581302988401;
		const _arrayValueu4RITT8 = {
		
	}
		const _arrayValueYZoHlC5 = false;
		const _valueqLjyOUX = [_arrayValueHSvMXSS, _arrayValueu4RITT8, _arrayValueYZoHlC5]
		const _previousvNVbA1e = {
		
	}
		const _returnValueVA3Swr9 = await _optioncNBbS6R._concatValue(_valueqLjyOUX, _previousvNVbA1e)
		const _fnde76o6p = undefined;
		const _returnValuemXLoZuY = await _optioncNBbS6R.argParser(_fnde76o6p)
		const _returnValueb19gaF = await _HelpcIJBU1t.optionDescription(_optioncNBbS6R)
		const _cmd7o2LSN = null;
		const _returnValuepJDb73p = true;
		const _longestOptionTermLength2UQkQ3 = () => { return _returnValuepJDb73p };
		const _returnValueuzXx3LB = false;
		const _longestSubcommandTermLengthMky4ySY = () => { return _returnValueuzXx3LB };
		const _returnValueGBIGP3T = "VGvjIsonSYXON2kY4LJ7y3gljRf7u0OxB5KMionGzMhua1SoDLkE0A87MT60SqA5fzXYIzz3";
		const _longestArgumentTermLengthzFPV86l = () => { return _returnValueGBIGP3T };
		const _helpernNFe4TC = {
			"longestOptionTermLength": _longestOptionTermLength2UQkQ3,
		"longestSubcommandTermLength": _longestSubcommandTermLengthMky4ySY,
		"longestArgumentTermLength": _longestArgumentTermLengthzFPV86l
	}
		const _returnValueokD3mt = await _HelpcIJBU1t.padWidth(_cmd7o2LSN, _helpernNFe4TC)
		const _cmdPLRjRnr = "8w3hLPEecvSgwHc7D2AaCANyevbMjstyWENWr7bm";
		const _longestOptionTermLengthVjeZHFf = null;
		const _returnValuePFCpBO = undefined;
		const _returnValueMOVtYlo = () => { return _returnValuePFCpBO };
		const _returnValueJhJFKP = () => { return _returnValueMOVtYlo };
		const _longestSubcommandTermLengthmLpMWoq = () => { return _returnValueJhJFKP };
		const _returnValueH011Vv9 = null;
		const _longestArgumentTermLengthMHczod = () => { return _returnValueH011Vv9 };
		const _helperjl1U2F9 = {
			"longestOptionTermLength": _longestOptionTermLengthVjeZHFf,
		"longestSubcommandTermLength": _longestSubcommandTermLengthmLpMWoq,
		"longestArgumentTermLength": _longestArgumentTermLengthMHczod
	}
		const _returnValueYTwp4DW = await _HelpcIJBU1t.padWidth(_cmdPLRjRnr, _helperjl1U2F9)
	});

	it('test for Help', async () => {
		const _HelpiPJVPQm = new Help()
		const _arrayValueQTx7ZCe = false;
		const _optiona1o0Kzw = [_arrayValueQTx7ZCe]
		const _returnValueU16OsoB = await _HelpiPJVPQm.optionTerm(_optiona1o0Kzw)
	});

	it('test for Help', async () => {
		const _HelpPAQX27b = new Help()
		const _cmdVPcv2zX = 2.402987682094855;
		const _returnValuehPYCgxT = null;
		const _longestOptionTermLengthXlqNrlm = () => { return _returnValuehPYCgxT };
		const _returnValueyKzvuUF = {
		
	}
		const _longestSubcommandTermLengthvTSwZ0 = () => { return _returnValueyKzvuUF };
		const _returnValueYkwnAIE = null;
		const _longestArgumentTermLengthoPleq19 = () => { return _returnValueYkwnAIE };
		const _helperqaDxuZx = {
			"longestOptionTermLength": _longestOptionTermLengthXlqNrlm,
		"longestSubcommandTermLength": _longestSubcommandTermLengthvTSwZ0,
		"longestArgumentTermLength": _longestArgumentTermLengthoPleq19
	}
		const _returnValuedys9KyQ = await _HelpPAQX27b.padWidth(_cmdVPcv2zX, _helperqaDxuZx)
		const _returnValuextHNnE2 = -8.026551426709648;
		const _returnValueo3nE1BN = () => { return _returnValuextHNnE2 };
		const _arrayValueSonsU9A = () => { return _returnValueo3nE1BN };
		const _returnValueS5eF2JL = [_arrayValueSonsU9A]
		const _cmddMnZ2sk = () => { return _returnValueS5eF2JL };
		const _returnValuehWSdyHJ = await _HelpPAQX27b.subcommandDescription(_cmddMnZ2sk)
	});

	it('test for Help', async () => {
		const _HelpI3sHMdr = new Help()
		const _optionsJdoafrl = {
		
	}
		const __hasHelpOptionXvw6MN = -5.280986562785316;
		const __helpShortFlagx3kEjml = false;
		const _returnValueStGcJ0O = "T2u9nP8bfcOSbDpVvg";
		const __findOptionRErveyu = () => { return _returnValueStGcJ0O };
		const __helpLongFlagQoPzrT4 = undefined;
		const _returnValueGIKfolU = undefined;
		const _createOptionXXCq3b = () => { return _returnValueGIKfolU };
		const __helpDescriptiondR7TEBx = "uYkX22ECGxOavPKxe72WAqy3IcNRSetnIBpJ8KLLgqDBWblBE4laJUlodRw4UUp";
		const __helpFlagsX3iywBk = null;
		const _cmdTXNTTVg = {
			"options": _optionsJdoafrl,
		"_hasHelpOption": __hasHelpOptionXvw6MN,
		"_helpShortFlag": __helpShortFlagx3kEjml,
		"_findOption": __findOptionRErveyu,
		"_helpLongFlag": __helpLongFlagQoPzrT4,
		"createOption": _createOptionXXCq3b,
		"_helpDescription": __helpDescriptiondR7TEBx,
		"_helpFlags": __helpFlagsX3iywBk
	}
		const _returnValueqKhuVc4 = await _HelpI3sHMdr.visibleOptions(_cmdTXNTTVg)
		const _optionsY311DD2 = {
		
	}
		const __hasHelpOptionWTWJ829 = -5.125823490747512;
		const _arrayValueqTccRLB = undefined;
		const _arrayValueX1zBQ6 = undefined;
		const __helpShortFlagliZpSQs = [_arrayValueqTccRLB, _arrayValueX1zBQ6]
		const _arrayValueYx5fxpg = 2.2191117559124134;
		const _returnValuerdHp0la = [_arrayValueYx5fxpg]
		const __findOption8ToqhM = () => { return _returnValuerdHp0la };
		const __helpLongFlagHNf0VzU = null;
		const _arrayValuey3d57a3 = -1.2887777020983222;
		const _arrayValueSVuozfG = undefined;
		const _arrayValuepNikrI1 = "KQXHewrGr4lTLOPBcsGRyfeTFbACfzJ2KqNWfxIaysoBvBpA9";
		const _returnValuegZX901 = [_arrayValuey3d57a3, _arrayValueSVuozfG, _arrayValuepNikrI1]
		const _createOptioniGQ8goY = () => { return _returnValuegZX901 };
		const __helpDescriptionsBXeY0T = false;
		const __helpFlagsO143MDc = "di3MWWAGt5lY4LHOdDEUkjSr1gIOVfKmfD6AWIxBT7saY2fxwU";
		const _cmdiW42Y9l = {
			"options": _optionsY311DD2,
		"_hasHelpOption": __hasHelpOptionWTWJ829,
		"_helpShortFlag": __helpShortFlagliZpSQs,
		"_findOption": __findOption8ToqhM,
		"_helpLongFlag": __helpLongFlagHNf0VzU,
		"createOption": _createOptioniGQ8goY,
		"_helpDescription": __helpDescriptionsBXeY0T,
		"_helpFlags": __helpFlagsO143MDc
	}
		const _returnValuetGn2sbO = await _HelpI3sHMdr.visibleOptions(_cmdiW42Y9l)
		const _cmdeTtrPJW = true;
		const _returnValueri5CMnK = -1.117220668417378;
		const _helperiV9sAkS = () => { return _returnValueri5CMnK };
		const _returnValueiySvXO = await _HelpI3sHMdr.longestOptionTermLength(_cmdeTtrPJW, _helperiV9sAkS)
		const _options1HNCN7 = {
		
	}
		const __hasHelpOptionVWg5Sf7 = -2.6174194893442992;
		const __helpShortFlagR02rvk1 = undefined;
		const _returnValuet0gPY4H = false;
		const __findOptionQc7riRB = () => { return _returnValuet0gPY4H };
		const __helpLongFlagiMjKEjH = null;
		const _returnValuey15nl1z = undefined;
		const _createOptionSG5pAh7 = () => { return _returnValuey15nl1z };
		const __helpDescriptioneevjIz = []
		const __helpFlagszu3yKCF = "PRV27csrAwS";
		const _cmdxfu3TpW = {
			"options": _options1HNCN7,
		"_hasHelpOption": __hasHelpOptionVWg5Sf7,
		"_helpShortFlag": __helpShortFlagR02rvk1,
		"_findOption": __findOptionQc7riRB,
		"_helpLongFlag": __helpLongFlagiMjKEjH,
		"createOption": _createOptionSG5pAh7,
		"_helpDescription": __helpDescriptioneevjIz,
		"_helpFlags": __helpFlagszu3yKCF
	}
		const _returnValueMhMI0wg = await _HelpI3sHMdr.visibleOptions(_cmdxfu3TpW)
	});

	it('test for Help', async () => {
		const _HelpuxhVPJV = new Help()
		const _arrayValuekH3koZm = null;
		const _arrayValueNMOTAGE = {
		
	}
		const _nameEwplvJN = [_arrayValuekH3koZm, _arrayValueNMOTAGE]
		const _cmdXAztWda = new Command(_nameEwplvJN)
		const _returnValueEpAjlVf = await _cmdXAztWda.opts()
		const _returnValueIyIvp1 = await _HelpuxhVPJV.commandDescription(_cmdXAztWda)
		const _cmdPR1rtWG = {
		
	}
		const _arrayValueaIftW2M = "Qx8XAiRQIWAHnccGbMFRLGiJIamhdXXW1vqKYhPvXE3gMGbva";
		const _helpercBrF3yH = [_arrayValueaIftW2M]
		const _returnValueYXWWB7S = await _HelpuxhVPJV.longestArgumentTermLength(_cmdPR1rtWG, _helpercBrF3yH)
		const _arrayValueVc2Wx4 = 0.3876214880497031;
		const _arrayValuenoOAG3P = {
		
	}
		const _cmdJKSCxSx = [_arrayValueVc2Wx4, _arrayValuenoOAG3P]
		const _returnValuedfVzJ3w = await _HelpuxhVPJV.subcommandDescription(_cmdJKSCxSx)
		const _cmdb8KyYZ6 = undefined;
		const _returnValueLl9rAGl = "h0BpVX6nl0DnyvgzihaYetqrzYXQG9fp9iLl25rEc5xUTyzON18EYxKT9zlOYzmLUve1nDvxK";
		const _longestOptionTermLengthuXVqwF = () => { return _returnValueLl9rAGl };
		const _returnValuecT7Tw10 = null;
		const _longestSubcommandTermLengthIOSgT0N = () => { return _returnValuecT7Tw10 };
		const _returnValueSLV4YHy = false;
		const _longestArgumentTermLengthcVC8y0v = () => { return _returnValueSLV4YHy };
		const _helper5ooGFI = {
			"longestOptionTermLength": _longestOptionTermLengthuXVqwF,
		"longestSubcommandTermLength": _longestSubcommandTermLengthIOSgT0N,
		"longestArgumentTermLength": _longestArgumentTermLengthcVC8y0v
	}
		const _returnValuett4NrI = await _HelpuxhVPJV.padWidth(_cmdb8KyYZ6, _helper5ooGFI)
		const _cmdnELO5t1 = undefined;
		const _helperRK3NYeP = new Help()
		const _arrayValueYvz5vfu = {
		
	}
		const _arrayValueMGK74CM = null;
		const _cmdwuUt3n6 = [_arrayValueYvz5vfu, _arrayValueMGK74CM]
		const _helperPOJWmn = "1prRIUAvsUabH6JA63DuGVqhvYNj7mmoPJESA2dghGiflafnbWO5Re";
		const _returnValueLMEI5yt = await _helperRK3NYeP.formatHelp(_cmdwuUt3n6, _helperPOJWmn)
		const _optioneNhlaj = "8SmfDf";
		const _returnValueBrSPAnL = await _helperRK3NYeP.optionTerm(_optioneNhlaj)
		const _arrayValueG9WyXm6 = {
		
	}
		const _arrayValueB4v43Bv = "bRvprFnhUu3NKSaMQ245xZAyFz9JoDhDc5laTghN5Sowlw9PhyMBDE";
		const _nametKeuB0D = [_arrayValueG9WyXm6, _arrayValueB4v43Bv]
		const _descriptionK8vzLY6 = {
		
	}
		const _cmdTpeZAhL = new Argument(_nametKeuB0D, _descriptionK8vzLY6)
		const _valueLZr0eWK = "EAScxbPcOakdGzrhrpLVEGn6PMHgHlddYuIco9zgRZle6DiD1NnM5uedswT5IMbBG4134Bj23krsDYTM6sNSo3uWJG0La";
		const _descriptionPfHqt5 = undefined;
		const _returnValue7yoZhE = await _cmdTpeZAhL.default(_valueLZr0eWK, _descriptionPfHqt5)
		const _valuesd38FGmg = "ZNndES99oT276KKEuJhs";
		const _returnValuektnDoIs = await _cmdTpeZAhL.choices(_valuesd38FGmg)
		const _returnValueiwurTZI = await _cmdTpeZAhL.name()
		const _fndV01oGN = {
		
	}
		const _returnValuePKsgrcp = await _cmdTpeZAhL.argParser(_fndV01oGN)
		const _returnValueAEsSp1T = await _cmdTpeZAhL.name()
		const _returnValuehEfXiAf = await _helperRK3NYeP.subcommandDescription(_cmdTpeZAhL)
		const _returnValuerBb4Y0C = await _HelpuxhVPJV.longestOptionTermLength(_cmdnELO5t1, _helperRK3NYeP)
	});

	it('test for Help', async () => {
		const _Help1IHcLJ = new Help()
		const _returnValueFGGPwBl = 2.8728737559879285;
		const _nameSPaT78o = () => { return _returnValueFGGPwBl };
		const _argumentB2lhQHr = {
			"name": _nameSPaT78o
	}
		const _returnValueLENVzDR = await _Help1IHcLJ.argumentTerm(_argumentB2lhQHr)
		const _returnValuevah7JLo = null;
		const _arrayValuenZRD4le = () => { return _returnValuevah7JLo };
		const _arrayValuezPLXGkS = null;
		const _arrayValuevEcnPG = null;
		const _cmdUQRcwGM = [_arrayValuenZRD4le, _arrayValuezPLXGkS, _arrayValuevEcnPG]
		const _returnValuekpFAHE = 9.09830014883142;
		const _visibleArgumentsr6ty7K = () => { return _returnValuekpFAHE };
		const _returnValueiTuxICV = "6YTF9vFShnfpJqHiULfojqQLv45SH8dCrqkjeGzOfuAlRJSJhxN4933PvOLMxl2PABgFinzPv6E4OqgId9swBm";
		const _argumentTermjwlcl8d = () => { return _returnValueiTuxICV };
		const _helperzaleJHj = {
			"visibleArguments": _visibleArgumentsr6ty7K,
		"argumentTerm": _argumentTermjwlcl8d
	}
		const _returnValuewpUicyy = await _Help1IHcLJ.longestArgumentTermLength(_cmdUQRcwGM, _helperzaleJHj)
		const _strH0pRN8R = "s";
		const _widthGbXyKK = 3.60265090300439;
		const _indentXORT8s = 6.165166455651381;
		const _minColumnWidthPu0rns = -6.542939996947341;
		const _returnValueR3tK9Cj = await _Help1IHcLJ.wrap(_strH0pRN8R, _widthGbXyKK, _indentXORT8s, _minColumnWidthPu0rns)
	});

	it('test for Help', async () => {
		const _HelpxHmwM8m = new Help()
		const _cmdEKcvqf = false;
		const _helperLl3F4N = new Help()
		const _returnValuewkL4SHk = "Xf7gLiEBerlS7Vc4i5XaJK83BRsDnBqqZrhYBsPQlrBUzwyU1IJKURYHXw7XYqoVWVcjFZ5";
		const _cmdCFtyZov = () => { return _returnValuewkL4SHk };
		const _returnValuea4Q95LJ = await _helperLl3F4N.visibleCommands(_cmdCFtyZov)
		const _optiona1Z9pLB = undefined;
		const _returnValuejRk4F2B = await _helperLl3F4N.optionTerm(_optiona1Z9pLB)
		const _returnValuewLYdRJ = {
		
	}
		const _descriptionDNDjBqH = () => { return _returnValuewLYdRJ };
		const _cmdU9c7RHd = {
			"description": _descriptionDNDjBqH
	}
		const _returnValueZ3s87BN = await _helperLl3F4N.subcommandDescription(_cmdU9c7RHd)
		const _arrayValueYIFAiPy = {
		
	}
		const _returnValueXN3j0Tt = [_arrayValueYIFAiPy]
		const _returnValueKp0wIzA = () => { return _returnValueXN3j0Tt };
		const _cmdwwMRoY9 = () => { return _returnValueKp0wIzA };
		const _returnValuefY8KjO = await _helperLl3F4N.visibleOptions(_cmdwwMRoY9)
		const _returnValuej8rpVFm = await _HelpxHmwM8m.padWidth(_cmdEKcvqf, _helperLl3F4N)
		const _arrayValueUf12K3T = true;
		const _returnValuedM8Fcle = [_arrayValueUf12K3T]
		const _returnValuefqcLSIL = () => { return _returnValuedM8Fcle };
		const _matchKQ6nsNS = () => { return _returnValuefqcLSIL };
		const _returnValueA9JMiB0 = {
		
	}
		const _substrk1dcpNy = () => { return _returnValueA9JMiB0 };
		const _strkvPCv6S = {
			"match": _matchKQ6nsNS,
		"substr": _substrk1dcpNy
	}
		const _widthtyrVTOg = -5.691032675356416;
		const _indentJGGFH2d = -9.526030256693202;
		const _minColumnWidtho5BDWyn = 8.759870974528155;
		const _returnValuep46J1Ke = await _HelpxHmwM8m.wrap(_strkvPCv6S, _widthtyrVTOg, _indentJGGFH2d, _minColumnWidtho5BDWyn)
		const _cmdv7EX4DS = null;
		const _returnValueLYWuhbl = "Y1eVteATzhPBzehO1SZWg3VB8Ss3Q5zO";
		const _helperb0bndJN = () => { return _returnValueLYWuhbl };
		const _returnValueOyjh3cs = await _HelpxHmwM8m.longestArgumentTermLength(_cmdv7EX4DS, _helperb0bndJN)
		const _returnValuejSzZD8d = true;
		const _cmdgaXri6C = () => { return _returnValuejSzZD8d };
		const _returnValueTGpQf00 = await _HelpxHmwM8m.visibleOptions(_cmdgaXri6C)
		const _returnValuemGc6iOu = "IxehkSKSbN8RnqFSFXsMIAD7w2ctb0A0vYQ8gsy7zTcXDPORh667We352d8YRI14auYJREcoLm";
		const _descriptionqz89OSw = () => { return _returnValuemGc6iOu };
		const _cmdM0I6rIB = {
			"description": _descriptionqz89OSw
	}
		const _returnValueyQP496H = await _HelpxHmwM8m.subcommandDescription(_cmdM0I6rIB)
	});

	it('test for Help', async () => {
		const _HelpySt4L17 = new Help()
		const _cmdb84nEch = "mDj9YU6YlW3554oktoLXB2hLIbgvQCR75YDE7xtrkt8vx5zAL7DklQf78w26wu2Cq5yIBNNcIK4vpw7aAffpfIY5Au0V5gS6F";
		const _returnValueZGtHazt = await _HelpySt4L17.commandUsage(_cmdb84nEch)
		const _returnValueYlQuJW = "c7ETnjGeuYc7Uvw";
		const _sliceeDUmL3R = () => { return _returnValueYlQuJW };
		const _nameq7hildi = {
			"slice": _sliceeDUmL3R
	}
		const _descriptionIhGnguq = null;
		const _argumentNPxAJ1p = new Argument(_nameq7hildi, _descriptionIhGnguq)
		const _returnValuec6yQAju = await _argumentNPxAJ1p.argRequired()
		const _returnValueWJdtRcM = await _HelpySt4L17.argumentTerm(_argumentNPxAJ1p)
		const _returnValueahpqdJt = undefined;
		const _cmduS3RnOg = () => { return _returnValueahpqdJt };
		const _returnValue7F0i9i = await _HelpySt4L17.commandDescription(_cmduS3RnOg)
		const _arrayValueYMUeEvK = undefined;
		const _arrayValuemTk3SbP = -2.8697732409038768;
		const _arrayValueA5I01Rv = null;
		const _arrayValueD9arvPm = undefined;
		const _arrayValue0CYfS3 = [_arrayValueD9arvPm]
		const _arrayValueYKyZi4A = [_arrayValuemTk3SbP, _arrayValueA5I01Rv, _arrayValue0CYfS3]
		const _arrayValuesqCPok6 = {
		
	}
		const _optionW8PMqM = [_arrayValueYMUeEvK, _arrayValueYKyZi4A, _arrayValuesqCPok6]
		const _returnValueTipY8EO = await _HelpySt4L17.optionDescription(_optionW8PMqM)
		const _returnValueq4PxgEP = "yZ41WVtseByBlUWuqwPTHvWltBmfRRDtjXcvIZ5gcNd4nQSeAQpOXvxWbGPkNZIsZes5smND6D32qrVSANbi2VKEfDT7ti4lJ";
		const _flagsb1Y5XB2 = () => { return _returnValueq4PxgEP };
		const _descriptioni8Xe6Ih = null;
		const _cmdwClaSmP = new Option(_flagsb1Y5XB2, _descriptioni8Xe6Ih)
		const _arrayValueD7zqmqG = "TPIlHLSAIJ4G44CuPjJD1M699QozBoE9NLeaxBLxVIISQiseNA";
		const _valueste8WhD3 = [_arrayValueD7zqmqG]
		const _returnValueHe2X36E = await _cmdwClaSmP.choices(_valueste8WhD3)
		const _nameSkp7Zay = undefined;
		const _returnValueLLOT8J8 = await _cmdwClaSmP.env(_nameSkp7Zay)
		const _returnValueNt2iON = await _HelpySt4L17.subcommandDescription(_cmdwClaSmP)
	});

	it('test for Help', async () => {
		const _HelpX2MQ4l8 = new Help()
		const _strI50lyI = "5z8oxF2Mtwvs";
		const _widthbZv3Plz = false;
		const _indentelCRsH = 2.768978505382858;
		const _minColumnWidth2mHTbq = 9.839332371619637;
		const _returnValuedhHrv6a = await _HelpX2MQ4l8.wrap(_strI50lyI, _widthbZv3Plz, _indentelCRsH, _minColumnWidth2mHTbq)
		const _returnValueLqb1c2W = {
		
	}
		const _nameluXHjBV = () => { return _returnValueLqb1c2W };
		const _argumentvRJQ2mo = {
			"name": _nameluXHjBV
	}
		const _returnValueYmcQ7iN = await _HelpX2MQ4l8.argumentTerm(_argumentvRJQ2mo)
		const _cmdpwGIDZh = "CDXYDvBg1xeLiECR";
		const _returnValuerz5Hy8I = await _HelpX2MQ4l8.visibleArguments(_cmdpwGIDZh)
		const _namexzDzV1p = undefined;
		const _cmdiWTwji1 = new Command(_namexzDzV1p)
		const _keyYTV8wj1 = null;
		const _returnValuemw6q6v = await _cmdiWTwji1.getOptionValueSource(_keyYTV8wj1)
		const _passThroughxzHQkVj = false;
		const _returnValueKe9UEv = await _cmdiWTwji1.passThroughOptions(_passThroughxzHQkVj)
		const _returnValuei4n1DUK = null;
		const _argvKUWluva = () => { return _returnValuei4n1DUK };
		const _returnValueHkzA1Cl = await _cmdiWTwji1.parseOptions(_argvKUWluva)
		const _flagsgucHkCS = true;
		const _descriptionZMaLbYa = "PB9RtgxIYzXVwNzIQa0XYn7pKw4ByqfxDuTWhfYhQXNA";
		const _returnValueodlWxb = await _cmdiWTwji1.helpOption(_flagsgucHkCS, _descriptionZMaLbYa)
		const _configurationdC1ElkH = undefined;
		const _returnValuepFqPotB = await _cmdiWTwji1.configureHelp(_configurationdC1ElkH)
		const _returnValueQfXqCct = await _HelpX2MQ4l8.visibleOptions(_cmdiWTwji1)
	});

	it('test for Help', async () => {
		const _HelpZtbwyhh = new Help()
		const _returnValueo6ObW3Q = undefined;
		const _arrayValueGpRI87x = () => { return _returnValueo6ObW3Q };
		const _arrayValueB99hivQ = null;
		const _arrayValueBTqYgTk = -6.3555470922083614;
		const _arrayValueDmxK8r = null;
		const _argumentbuJxJEo = [_arrayValueGpRI87x, _arrayValueB99hivQ, _arrayValueBTqYgTk, _arrayValueDmxK8r]
		const _returnValueKe3EJCO = await _HelpZtbwyhh.argumentDescription(_argumentbuJxJEo)
		const _arrayValueNJYQQjD = null;
		const _cmdzX0q8MJ = [_arrayValueNJYQQjD]
		const _returnValueQPx7fB = await _HelpZtbwyhh.subcommandTerm(_cmdzX0q8MJ)
	});

	it('test for Help', async () => {
		const _HelpzEdjnJM = new Help()
		const _nameshw3dsI = undefined;
		const _argumentZCkiA0n = new Command(_nameshw3dsI)
		const _configurationA41LTVi = "zCUvDPvjwXsPjaM9PC8Gy27yYhoKYxuNKtjFiJ1JqFvpn817WNBmX8GwSY8U88wRlSFncxOv2eNxm";
		const _returnValuem4zVGBu = await _argumentZCkiA0n.configureHelp(_configurationA41LTVi)
		const _nameiVFYmLM = -4.342793039676974;
		const _returnValueKUD1v9d = await _argumentZCkiA0n._findCommand(_nameiVFYmLM)
		const __outputConfigurationXjK7Zp4 = {
		
	}
		const __hasHelpOption2NlSi9 = {
		
	}
		const __helpFlagszkGjxls = {
		
	}
		const __helpDescriptionzGZ7xNC = "KNknzidpzYzRq7DwWYVYJOHSL741RXUtRksRmEz7U4mfnQ78nZd3vwnKuQllaJtp7oqM7XogqWKIzRW64zGPuJyqNMECxQz6t0n";
		const __helpShortFlagkWbfUJk = {
		
	}
		const __helpLongFlagycxMVFw = "RA9cdLrQLy3zLxleLok48EOxwnqtYJH9Rid3hGpQXiy15DeA3kedwsmGVPbh7mUQKGAUCzBEzqPS93IvLJRvinicgvXJSIH7r8L";
		const __helpCommandNameol3JDT = {
		
	}
		const _arrayValuemWI8aXu = -4.711694512232213;
		const __helpCommandnameAndArgs55bve6 = [_arrayValuemWI8aXu]
		const __helpCommandDescriptionnBOala6 = {
		
	}
		const __helpConfigurationUjp4s6G = {
		
	}
		const __exitCallbacktWelR97 = {
		
	}
		const __storeOptionsAsPropertiesFqIDxsS = {
		
	}
		const __combineFlagAndOptionalValuepSZrAtX = {
		
	}
		const __allowExcessArgumentsGugx4bw = null;
		const __enablePositionalOptionsFE9NuZe = {
		
	}
		const __showHelpAfterErrorTh2IBwz = {
		
	}
		const __showSuggestionAfterErrorQ5Xfu4k = {
		
	}
		const _sourceCommandccXKk8x = {
			"_outputConfiguration": __outputConfigurationXjK7Zp4,
		"_hasHelpOption": __hasHelpOption2NlSi9,
		"_helpFlags": __helpFlagszkGjxls,
		"_helpDescription": __helpDescriptionzGZ7xNC,
		"_helpShortFlag": __helpShortFlagkWbfUJk,
		"_helpLongFlag": __helpLongFlagycxMVFw,
		"_helpCommandName": __helpCommandNameol3JDT,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgs55bve6,
		"_helpCommandDescription": __helpCommandDescriptionnBOala6,
		"_helpConfiguration": __helpConfigurationUjp4s6G,
		"_exitCallback": __exitCallbacktWelR97,
		"_storeOptionsAsProperties": __storeOptionsAsPropertiesFqIDxsS,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValuepSZrAtX,
		"_allowExcessArguments": __allowExcessArgumentsGugx4bw,
		"_enablePositionalOptions": __enablePositionalOptionsFE9NuZe,
		"_showHelpAfterError": __showHelpAfterErrorTh2IBwz,
		"_showSuggestionAfterError": __showSuggestionAfterErrorQ5Xfu4k
	}
		const _returnValueC1Qttsn = await _argumentZCkiA0n.copyInheritedSettings(_sourceCommandccXKk8x)
		const _positional09rRkH = true;
		const _returnValueRLLuTA1 = await _argumentZCkiA0n.enablePositionalOptions(_positional09rRkH)
		const _returnValuel71tnhe = await _HelpzEdjnJM.argumentTerm(_argumentZCkiA0n)
		const __nameINjt010 = "IdRxs7Qp1S34h0c035ve6BN9JYSOCVQADduOi97Fxxw08a7PJIPoteIh3Y3LWkbCh9CnFVOqfW2SPAc";
		const __aliasesDFhhNJs = {
		
	}
		const _parentoC7FKG3 = {
		
	}
		const _arrayValuejHSiHlS = false;
		const _arrayValueXunTk14 = undefined;
		const _arrayValueHMSkmAu = "osWsNukDjOeVliPxqBmGeCGPWCZkw9vXzvSuRLS3J";
		const _arrayValueI3N0X36 = true;
		const _arrayValueXsL9wyJ = [_arrayValuejHSiHlS, _arrayValueXunTk14, _arrayValueHMSkmAu, _arrayValueI3N0X36]
		const _returnValueXv3Zju0 = [_arrayValueXsL9wyJ]
		const _usageZWYCbJD = () => { return _returnValueXv3Zju0 };
		const _cmd9H52M5 = {
			"_name": __nameINjt010,
		"_aliases": __aliasesDFhhNJs,
		"parent": _parentoC7FKG3,
		"usage": _usageZWYCbJD
	}
		const _returnValuezb0fWQ = await _HelpzEdjnJM.commandUsage(_cmd9H52M5)
		const _arrayValuegH2anBt = null;
		const _cmdk6N2AeU = [_arrayValuegH2anBt]
		const _returnValueYN5aIM = await _HelpzEdjnJM.subcommandTerm(_cmdk6N2AeU)
	});

	it('test for Help', async () => {
		const _HelpelT81bG = new Help()
		const _strdnluw1 = "sDBHDXfb29KEgBGsnkYr1KCFoX5OHYI4H6aqX0LpGnYqEjEm536GchfzIIZidIT";
		const _widthXDTvHxk = 9.969317581667628;
		const _indentl8n3GH7 = 1.3684427495740898;
		const _minColumnWidthQ7wA6M7 = -2.317314546235938;
		const _returnValueBI0RBk5 = await _HelpelT81bG.wrap(_strdnluw1, _widthXDTvHxk, _indentl8n3GH7, _minColumnWidthQ7wA6M7)
		const _cmdP7kL68U = -3.732431833647359;
		const _arrayValueIVHuaLI = true;
		const _arrayValueXgHOxcm = false;
		const _arrayValueQYINtR6 = -7.151052505222671;
		const _arrayValueeyJtGQ = null;
		const _helperJyquT9T = [_arrayValueIVHuaLI, _arrayValueXgHOxcm, _arrayValueQYINtR6, _arrayValueeyJtGQ]
		const _returnValuea0I1iSW = await _HelpelT81bG.padWidth(_cmdP7kL68U, _helperJyquT9T)
		const _argumentmUbKzYY = true;
		const _returnValueD4255B = await _HelpelT81bG.argumentDescription(_argumentmUbKzYY)
		const _argChoicesqaiJ7cO = {
		
	}
		const _negateVXfnR0Q = false;
		const _defaultValueRDDf4Aw = undefined;
		const _defaultValueDescriptionSNSDc0I = true;
		const _envVarZBsrQ1e = undefined;
		const _descriptiono3scMyg = null;
		const _option2pxarp = {
			"argChoices": _argChoicesqaiJ7cO,
		"negate": _negateVXfnR0Q,
		"defaultValue": _defaultValueRDDf4Aw,
		"defaultValueDescription": _defaultValueDescriptionSNSDc0I,
		"envVar": _envVarZBsrQ1e,
		"description": _descriptiono3scMyg
	}
		const _returnValueHEsLsrb = await _HelpelT81bG.optionDescription(_option2pxarp)
	});

	it('test for Help', async () => {
		const _HelpP0p0TZF = new Help()
		const _flagsWXKWWUa = "bg1l4PH2jwE3w1YLBIPQaFc4tiMRSU2IIOHDzPAIhb";
		const _descriptionUyOndf1 = true;
		const _optionyhDvfA = new Option(_flagsWXKWWUa, _descriptionUyOndf1)
		const _returnValueVf3tEZB = await _optionyhDvfA.attributeName()
		const _fnEgMZ1Ux = undefined;
		const _returnValueBRiSv2l = await _optionyhDvfA.argParser(_fnEgMZ1Ux)
		const _returnValueVANnfCI = await _HelpP0p0TZF.optionDescription(_optionyhDvfA)
		const _arrayValuezcqKfZ2 = -8.159400420039606;
		const _returnValuetdEX3ZD = [_arrayValuezcqKfZ2]
		const _cmdL1K3yQd = () => { return _returnValuetdEX3ZD };
		const _returnValueEDnAv3 = await _HelpP0p0TZF.visibleOptions(_cmdL1K3yQd)
		const _cmdjnckOQ = undefined;
		const _returnValueZZvjwUm = await _HelpP0p0TZF.subcommandDescription(_cmdjnckOQ)
	});

	it('test for Help', async () => {
		const _HelpOi1w3R9 = new Help()
		const _returnValueJTg0Kun = "UW4hT6E3YAUcyypAV7oQDxFcXxXhuheajSPFWoCJedGYGpvgAg5gP";
		const _matchjJxWwB3 = () => { return _returnValueJTg0Kun };
		const _returnValuekzJRZCf = null;
		const _substrRhbN6Fx = () => { return _returnValuekzJRZCf };
		const _strAAJviU = {
			"match": _matchjJxWwB3,
		"substr": _substrRhbN6Fx
	}
		const _widthliAQFda = -8.895944377463612;
		const _indentdI6wgZb = 7.532727204383971;
		const _minColumnWidthr9aC68e = undefined;
		const _returnValuehgGltF5 = await _HelpOi1w3R9.wrap(_strAAJviU, _widthliAQFda, _indentdI6wgZb, _minColumnWidthr9aC68e)
	});

	it('test for Help', async () => {
		const _HelpWe7dQn3 = new Help()
		const _argChoicesZcN4Okz = {
		
	}
		const _negatePMW8nvO = null;
		const _defaultValueTVbQ0B = undefined;
		const _defaultValueDescriptionsuzVGfe = true;
		const _envVaragtccHq = undefined;
		const _descriptionQu0hYZc = false;
		const _optionDUMiWB3 = {
			"argChoices": _argChoicesZcN4Okz,
		"negate": _negatePMW8nvO,
		"defaultValue": _defaultValueTVbQ0B,
		"defaultValueDescription": _defaultValueDescriptionsuzVGfe,
		"envVar": _envVaragtccHq,
		"description": _descriptionQu0hYZc
	}
		const _returnValueit8SBnU = await _HelpWe7dQn3.optionDescription(_optionDUMiWB3)
		const _returnValuex0tbVb = null;
		const _cmdYB338M = () => { return _returnValuex0tbVb };
		const _returnValueC238zlm = await _HelpWe7dQn3.subcommandTerm(_cmdYB338M)
		const _nameAcp2OYY = -9.267311951643693;
		const _argumentT6JZJ0M = new Command(_nameAcp2OYY)
		const _returnValueXJGP0Gt = false;
		const _applydQmwpsW = () => { return _returnValueXJGP0Gt };
		const _fnSnDGhuN = {
			"apply": _applydQmwpsW
	}
		const _returnValuedgf7W49 = await _argumentT6JZJ0M.action(_fnSnDGhuN)
		const _arrayValueiQVhVsf = false;
		const _arrayValueKpwdVUS = undefined;
		const _operandsBwvLN5l = [_arrayValueiQVhVsf, _arrayValueKpwdVUS]
		const _unknownPh293Nc = true;
		const _returnValueF53iaOC = await _argumentT6JZJ0M._parseCommand(_operandsBwvLN5l, _unknownPh293Nc)
		const _allowExcessf39uco0 = true;
		const _returnValuee0Vs85X = await _argumentT6JZJ0M.allowExcessArguments(_allowExcessf39uco0)
		const _returnValueEKDGSlb = await _HelpWe7dQn3.argumentTerm(_argumentT6JZJ0M)
	});

	it('test for Help', async () => {
		const _HelprQoXsit = new Help()
		const _flagsamzNdfi = "kcWTYLoYWroX5xwKaOcYH2lPoPBn9B18y6A95Yk1J";
		const _arrayValueAQxKDeT = null;
		const _descriptionPCWztdo = [_arrayValueAQxKDeT]
		const _optionbBSWqzg = new Option(_flagsamzNdfi, _descriptionPCWztdo)
		const _returnValuelyUE6VL = null;
		const _arrayValuezpTxoeq = () => { return _returnValuelyUE6VL };
		const _arrayValueb284T5p = false;
		const _valuesH2dvd52 = [_arrayValuezpTxoeq, _arrayValueb284T5p]
		const _returnValueOOJ8gw2 = await _optionbBSWqzg.choices(_valuesH2dvd52)
		const _returnValueal4G8Ar = await _HelprQoXsit.optionDescription(_optionbBSWqzg)
		const _flagsA45SFbq = "DJlWow9SQpTiEqMmq2K2F9V4Wri4EJldv64kWv3ssvmralSRHsqkpjXmC36VQu4Pme1YIHufdkzt3geIf89KBfm1r4aHd97";
		const _descriptionI5irltH = {
		
	}
		const _optionVSDTb2 = new Option(_flagsA45SFbq, _descriptionI5irltH)
		const _valueFgb2tOo = -9.696536672615922;
		const _previousNhuP6OR = {
		
	}
		const _returnValueN9amC7b = await _optionVSDTb2._concatValue(_valueFgb2tOo, _previousNhuP6OR)
		const _mandatoryWkKn6K8 = false;
		const _returnValueaB6VU5s = await _optionVSDTb2.makeOptionMandatory(_mandatoryWkKn6K8)
		const _returnValueUUEdqYY = await _HelprQoXsit.optionTerm(_optionVSDTb2)
		const _cmdtWIzB2o = "vQ197k66TBAh6193PgAGUG42h7WwqsHHuJjgoczhtILevhkIh7ZKzDPr6sts";
		const _helpers4wcpLt = new Help()
		const _cmdLUSKtqJ = true;
		const _helperzPxk25A = 0.9973290083570259;
		const _returnValuemmfSOd7 = await _helpers4wcpLt.longestSubcommandTermLength(_cmdLUSKtqJ, _helperzPxk25A)
		const _cmdSGCk5eS = {
		
	}
		const _sortSubcommandsLE94dg8 = "jWcRZfRSmx";
		const _returnValueQFP38i1 = undefined;
		const _subcommandTermTFmOGvW = () => { return _returnValueQFP38i1 };
		const _helperI3r7YPS = {
			"sortSubcommands": _sortSubcommandsLE94dg8,
		"subcommandTerm": _subcommandTermTFmOGvW
	}
		const _returnValueB4pdbce = await _helpers4wcpLt.longestSubcommandTermLength(_cmdSGCk5eS, _helperI3r7YPS)
		const _cmddcw0q6D = {
		
	}
		const _helperg544oeL = new Help()
		const _arrayValueYr9LlAh = {
		
	}
		const _cmdLOqghZ1 = [_arrayValueYr9LlAh]
		const _helperIX8Z79c = -3.081825694129666;
		const _returnValuexq4w2t5 = await _helperg544oeL.formatHelp(_cmdLOqghZ1, _helperIX8Z79c)
		const _returnValueCkCvVIu = await _helpers4wcpLt.padWidth(_cmddcw0q6D, _helperg544oeL)
		const _cmdiQbwoZR = undefined;
		const _returnValuemu0Fp9w = undefined;
		const _visibleArgumentsp8KVck9 = () => { return _returnValuemu0Fp9w };
		const _returnValuet01Inna = null;
		const _argumentTermweCxIlh = () => { return _returnValuet01Inna };
		const _helperuZUUw6l = {
			"visibleArguments": _visibleArgumentsp8KVck9,
		"argumentTerm": _argumentTermweCxIlh
	}
		const _returnValuesTV04KU = await _helpers4wcpLt.longestArgumentTermLength(_cmdiQbwoZR, _helperuZUUw6l)
		const _returnValueqZLC9AC = await _HelprQoXsit.formatHelp(_cmdtWIzB2o, _helpers4wcpLt)
		const _arrayValuehZKcgVu = 9.814397116259908;
		const _arrayValueH0WngTz = {
		
	}
		const _nameMphoYWh = [_arrayValuehZKcgVu, _arrayValueH0WngTz]
		const _returnValuemdJPUe = false;
		const _arrayValuehm5oMz1 = () => { return _returnValuemdJPUe };
		const _arrayValuelny9wCc = true;
		const _returnValueL0A78Pj = "P5hnMkibiS42qoDmOd8a3psREFEI9RyfYaaCMHMXXXPeMdlNASaKnx3kWFjRHj";
		const _arrayValueJYU0wTI = () => { return _returnValueL0A78Pj };
		const _descriptiontk3xgV = [_arrayValuehm5oMz1, _arrayValuelny9wCc, _arrayValueJYU0wTI]
		const _argumentaRBWz0 = new Argument(_nameMphoYWh, _descriptiontk3xgV)
		const _valueVChXUaR = 0.991096894361716;
		const _previousspfkl1r = {
		
	}
		const _returnValuejt9XwB2 = await _argumentaRBWz0._concatValue(_valueVChXUaR, _previousspfkl1r)
		const _returnValueFnkZwnU = await _HelprQoXsit.argumentDescription(_argumentaRBWz0)
	});

	it('test for Help', async () => {
		const _HelpBSiSBwr = new Help()
		const _returnValueuVYADKj = -2.098499698537317;
		const _descriptionPaTwCW = () => { return _returnValueuVYADKj };
		const _cmdzLKNBI = {
			"description": _descriptionPaTwCW
	}
		const _returnValueplufB5P = await _HelpBSiSBwr.subcommandDescription(_cmdzLKNBI)
		const _nameLxkJHh2 = "A9IMm7psw";
		const _returnValuedgOBsll = undefined;
		const _arrayValueHxs3aJQ = () => { return _returnValuedgOBsll };
		const _arrayValuej6WXt9n = "Om5SgfG8QPvpCk1sNvlt7GRY3IneuaJ0ForSDS9VqQ9KhnjKzYzqPXIXmWYtvLlyQ";
		const _arrayValuexrVRJEc = undefined;
		const _arrayValueRswNbuC = undefined;
		const _arrayValueJ9vBfc3 = undefined;
		const _descriptionh6obwP = [_arrayValueHxs3aJQ, _arrayValuej6WXt9n, _arrayValuexrVRJEc, _arrayValueRswNbuC, _arrayValueJ9vBfc3]
		const _argumentAK1ITdj = new Argument(_nameLxkJHh2, _descriptionh6obwP)
		const _valueWRuuzdI = undefined;
		const _returnValue7g9HBd = {
		
	}
		const _descriptionIftrQjH = () => { return _returnValue7g9HBd };
		const _returnValueTVAztsR = await _argumentAK1ITdj.default(_valueWRuuzdI, _descriptionIftrQjH)
		const _returnValuenKLNOpd = await _argumentAK1ITdj.name()
		const _returnValueoNfpUlJ = await _argumentAK1ITdj.argRequired()
		const _returnValuehiK0e5l = await _argumentAK1ITdj.argRequired()
		const _arrayValueYAcMV63 = null;
		const _arrayValueV9EfYd = undefined;
		const _arrayValuecDUzjQl = true;
		const _arrayValueOjveFUg = undefined;
		const _returnValueigavNie = [_arrayValueYAcMV63, _arrayValueV9EfYd, _arrayValuecDUzjQl, _arrayValueOjveFUg]
		const _includesZbExTPX = () => { return _returnValueigavNie };
		const _arrayValueM4gVFbB = undefined;
		const _arrayValueTsYgVy0 = null;
		const _returnValueEm9eXT9 = [_arrayValueM4gVFbB, _arrayValueTsYgVy0]
		const _joindzrWIXB = () => { return _returnValueEm9eXT9 };
		const _valuesb2loX2 = {
			"includes": _includesZbExTPX,
		"join": _joindzrWIXB
	}
		const _returnValueIr7tihp = await _argumentAK1ITdj.choices(_valuesb2loX2)
		const _returnValuegAtkNG = await _HelpBSiSBwr.argumentDescription(_argumentAK1ITdj)
		const _namePE6iEFt = "kTJ5v9JC5bHvpAjjRLP89nJipGWLHcGQ1wiJnIA8oJW92ctsnAyO3ZODNw1oTBmWQ4ysAUOKsS3shlIlz4";
		const _cmdBGTXyKH = new Command(_namePE6iEFt)
		const _namexv0V3f5 = null;
		const _returnValueGQ6IQFS = await _cmdBGTXyKH.missingArgument(_namexv0V3f5)
		const _keyRtxgiK = 0.21735368271671618;
		const _returnValueUhIAQ9L = await _cmdBGTXyKH.getOptionValue(_keyRtxgiK)
		const _flagsD3y4NIq = true;
		const _arrayValueDZxgK7 = -1.366922618707008;
		const _descriptionVfCiynK = [_arrayValueDZxgK7]
		const _returnValueGjsKCQ7 = await _cmdBGTXyKH.helpOption(_flagsD3y4NIq, _descriptionVfCiynK)
		const _keyaw5hqH6 = []
		const _returnValueHObZ6M = await _cmdBGTXyKH.getOptionValueSource(_keyaw5hqH6)
		const _returnValueIul5C4N = await _HelpBSiSBwr.visibleArguments(_cmdBGTXyKH)
		const __namexNwS0es = "xPx1OaYzyOBMjLUNHvwpe3WObpUYUESJhm";
		const __aliasesrAnPTTk = {
		
	}
		const _returnValuedYR3C2s = undefined;
		const _parentpVgpeLo = () => { return _returnValuedYR3C2s };
		const _returnValuen7hcGFR = {
		
	}
		const _usagePSa8cDn = () => { return _returnValuen7hcGFR };
		const _cmdx0SoqTC = {
			"_name": __namexNwS0es,
		"_aliases": __aliasesrAnPTTk,
		"parent": _parentpVgpeLo,
		"usage": _usagePSa8cDn
	}
		const _returnValueiaBw43L = await _HelpBSiSBwr.commandUsage(_cmdx0SoqTC)
	});

	it('test for Help', async () => {
		const _HelpvzxKGsN = new Help()
		const _arrayValueUZiUL8b = "kc6aBKdiHF";
		const _arrayValuePJhpidg = []
		const _arrayValueFJyto0g = null;
		const _optionSUtzQxR = [_arrayValueUZiUL8b, _arrayValuePJhpidg, _arrayValueFJyto0g]
		const _returnValueQXJgh9 = await _HelpvzxKGsN.optionDescription(_optionSUtzQxR)
		const _nameekIkCmV = null;
		const _cmdhOgwWFD = new Command(_nameekIkCmV)
		const _keyOkZsdoi = false;
		const _returnValueK5n1KBL = await _cmdhOgwWFD.getOptionValue(_keyOkZsdoi)
		const _keyHgDMHKe = false;
		const _returnValueGsFnZb = await _cmdhOgwWFD.getOptionValueSource(_keyHgDMHKe)
		const _contextOptionsOAyyGBr = "8kd94mfvHRNNy";
		const _returnValueBAWFiMj = await _cmdhOgwWFD._getHelpContext(_contextOptionsOAyyGBr)
		const _returnValueO3hZcu = await _cmdhOgwWFD._parseOptionsEnv()
		const _returnValuepsUrmk4 = await _HelpvzxKGsN.visibleOptions(_cmdhOgwWFD)
		const _cmddfu8VrK = undefined;
		const _arrayValueTuPTdwb = false;
		const _arrayValuee2RLbfm = {
		
	}
		const _returnValuerRRRmtZ = [_arrayValueTuPTdwb, _arrayValuee2RLbfm]
		const _helperBAMs38C = () => { return _returnValuerRRRmtZ };
		const _returnValueZB2G52 = await _HelpvzxKGsN.padWidth(_cmddfu8VrK, _helperBAMs38C)
		const _cmdV0gdpGw = undefined;
		const _returnValueiaD3u83 = "vmEn8sNhY7C7IDKNJlz";
		const _visibleArgumentsMQTmGOc = () => { return _returnValueiaD3u83 };
		const _returnValuel1N2D87 = -8.970779655999555;
		const _argumentTermxCB6ADK = () => { return _returnValuel1N2D87 };
		const _helperWfbTBlM = {
			"visibleArguments": _visibleArgumentsMQTmGOc,
		"argumentTerm": _argumentTermxCB6ADK
	}
		const _returnValuep7fQiFu = await _HelpvzxKGsN.longestArgumentTermLength(_cmdV0gdpGw, _helperWfbTBlM)
	});

	it('test for Help', async () => {
		const _HelpeYfiedq = new Help()
		const _cmdiHrHzXf = -5.581438405777089;
		const _helperdhoSp7 = new Help()
		const _flagszzopDut = "9B9RpnWmBW18zpqwGYcCvD2cxKkxN4qV1Psm";
		const _descriptionPKmzpjI = undefined;
		const _optionrIatfqG = new Option(_flagszzopDut, _descriptionPKmzpjI)
		const _returnValuep1M94t = await _optionrIatfqG.attributeName()
		const _returnValueyRehzuS = -0.2573892294660265;
		const _fntoikFRv = () => { return _returnValueyRehzuS };
		const _returnValueT4xaZM5 = await _optionrIatfqG.argParser(_fntoikFRv)
		const _namewAFBiXc = true;
		const _returnValueQeak1kB = await _optionrIatfqG.env(_namewAFBiXc)
		const _returnValuef52iTAc = await _helperdhoSp7.optionDescription(_optionrIatfqG)
		const _arrayValueVuESuZt = true;
		const _returnValuenHN18KC = undefined;
		const _arrayValueAVv9acl = () => { return _returnValuenHN18KC };
		const _cmdwQoYW4Q = [_arrayValueVuESuZt, _arrayValueAVv9acl]
		const _returnValueD0wsbaX = await _helperdhoSp7.subcommandDescription(_cmdwQoYW4Q)
		const _returnValuelmT5TZe = "w1BwgfYB3AhLEhGT1L8m";
		const _flagsMDIHZvM = () => { return _returnValuelmT5TZe };
		const _descriptionN78Fiy4 = null;
		const _optionA0nHGVW = new Option(_flagsMDIHZvM, _descriptionN78Fiy4)
		const _argdMlE3L = {
		
	}
		const _returnValueqQObmQC = await _optionA0nHGVW.is(_argdMlE3L)
		const _returnValueuk6FCQB = await _optionA0nHGVW.attributeName()
		const _valueWKHM9PM = true;
		const _previouscEDLXUk = "EDcH7";
		const _returnValuea9CbB4t = await _optionA0nHGVW._concatValue(_valueWKHM9PM, _previouscEDLXUk)
		const _returnValuehl1R92 = await _helperdhoSp7.optionDescription(_optionA0nHGVW)
		const _returnValueXnBeQCK = await _HelpeYfiedq.longestSubcommandTermLength(_cmdiHrHzXf, _helperdhoSp7)
		const _cmdWxahb5X = -8.803247521506655;
		const _returnValueoevkF5 = "WXjGeeaBRzUx14T3BHsXRUlX28pZR9Yup8ZeNrE5koWBI9OvWLtCvwzMnbbTJK4VLkF8MCEd5N";
		const _helperSIqUkm = () => { return _returnValueoevkF5 };
		const _returnValueJiU3eRb = await _HelpeYfiedq.padWidth(_cmdWxahb5X, _helperSIqUkm)
		const _cmdBEEbWvs = -9.994608778010033;
		const _helperOl3S6kr = new Help()
		const _cmdhD7kGS = false;
		const _returnValuefgeW16C = await _helperOl3S6kr.commandUsage(_cmdhD7kGS)
		const _returnValue8hc4yi = await _HelpeYfiedq.longestArgumentTermLength(_cmdBEEbWvs, _helperOl3S6kr)
		const _cmdqeu49Vx = "sw";
		const _returnValuevnPuthf = await _HelpeYfiedq.visibleCommands(_cmdqeu49Vx)
		const _strjVWgHh = "58OEN";
		const _widthDMVSF9F = -5.724856262285475;
		const _indentdyYwM7F = 2.5223125406800833;
		const _minColumnWidthmEEePWB = -9.246482178769456;
		const _returnValueiHelpT9 = await _HelpeYfiedq.wrap(_strjVWgHh, _widthDMVSF9F, _indentdyYwM7F, _minColumnWidthmEEePWB)
	});

	it('test for Help', async () => {
		const _Helpu2pXhhp = new Help()
		const _returnValue4zNpSF = -7.748465897585076;
		const _sliceordLZC9 = () => { return _returnValue4zNpSF };
		const _nameEdWqcI6 = {
			"slice": _sliceordLZC9
	}
		const _descriptionRFRnU8 = "Nz60ROPuES33ukFVDFpqU4xNUmG9nd4ma2VTWafaIgIrRTTPENvo76wyOeATMEuseuk35wpHSXvpH";
		const _argumentO4VKL8B = new Argument(_nameEdWqcI6, _descriptionRFRnU8)
		const _valuerV0AWAi = 6.1264382609610415;
		const _returnValuejHtZ824 = 2.6337129395451964;
		const _descriptionIfjL9O = () => { return _returnValuejHtZ824 };
		const _returnValueWn7cOGl = await _argumentO4VKL8B.default(_valuerV0AWAi, _descriptionIfjL9O)
		const _returnValuesLu9E80 = await _Helpu2pXhhp.argumentDescription(_argumentO4VKL8B)
		const _cmdSCFLUlW = null;
		const _arrayValuejeU22eJ = "adWbh6y2gFKiT0ieYjpP9BGjW";
		const _arrayValueBRNUb2h = -4.649793451194802;
		const _returnValue8UGwwU = 7.315621545691943;
		const _arrayValuejf71puT = () => { return _returnValue8UGwwU };
		const _arrayValueyhHeH9S = {
		
	}
		const _arrayValueta5phcc = [_arrayValuejf71puT, _arrayValueyhHeH9S]
		const _returnValueDUTyrqC = [_arrayValuejeU22eJ, _arrayValueBRNUb2h, _arrayValueta5phcc]
		const _helperSJXkKc9 = () => { return _returnValueDUTyrqC };
		const _returnValueXg0uo09 = await _Helpu2pXhhp.padWidth(_cmdSCFLUlW, _helperSJXkKc9)
		const _cmdC6CdhFJ = "RPF1OkTiOY6OluOHcC6xT3thv1dqyE6rOP63LV7P8iy7Ymv9vEqEw1TIOc";
		const _returnValueajXRM2V = await _Helpu2pXhhp.subcommandDescription(_cmdC6CdhFJ)
		const _returnValueB0OtmvV = -9.473331303104262;
		const _optionrTwFLuP = () => { return _returnValueB0OtmvV };
		const _returnValueYfX6NVt = await _Helpu2pXhhp.optionTerm(_optionrTwFLuP)
		const _arrayValueinpyFs6 = false;
		const _cmdIL4fbJd = [_arrayValueinpyFs6]
		const _helperUsmdEa8 = []
		const _returnValuesOOlcIT = await _Helpu2pXhhp.longestSubcommandTermLength(_cmdIL4fbJd, _helperUsmdEa8)
	});

	it('test for Help', async () => {
		const _HelpRbxY0Bo = new Help()
		const _namePoac8fU = "hyPpiGlvbVeqQbwbTf4ebzR9Z2lIXKwhLlMMKXaEqg6ul6J96Ey8hYet2";
		const _cmdou9ll0N = new Command(_namePoac8fU)
		const _strol8qGiA = "BGTTHAW8bPtF0ePbHJEF4pcc7OEjKRmnjymqQArArpNiP";
		const _argsDescriptionHDIlDx = undefined;
		const _returnValueGeLLafK = await _cmdou9ll0N.description(_strol8qGiA, _argsDescriptionHDIlDx)
		const _allowUnknownNT5R1tF = false;
		const _returnValueWDmY2MB = await _cmdou9ll0N.allowUnknownOption(_allowUnknownNT5R1tF)
		const _returnValuel1UjriZ = await _HelpRbxY0Bo.visibleCommands(_cmdou9ll0N)
		const _flagsmsxIEV3 = "PnvyEqVwCNX0H7itLvnFPv9S5";
		const _descriptionnOxLtn = null;
		const _cmdN89ihef = new Option(_flagsmsxIEV3, _descriptionnOxLtn)
		const _mandatoryF4LW9s3 = true;
		const _returnValueB9dCV9X = await _cmdN89ihef.makeOptionMandatory(_mandatoryF4LW9s3)
		const _hideoMEY1c4 = false;
		const _returnValueA2D9oyb = await _cmdN89ihef.hideHelp(_hideoMEY1c4)
		const _returnValuepM45Ik = await _HelpRbxY0Bo.subcommandDescription(_cmdN89ihef)
		const _cmdrZKqlkN = false;
		const _sortSubcommandsS2fFoLB = "jReBwLtE";
		const _subcommandTermkPMmQsW = undefined;
		const _helpere5RzT0c = {
			"sortSubcommands": _sortSubcommandsS2fFoLB,
		"subcommandTerm": _subcommandTermkPMmQsW
	}
		const _returnValueKXlT9Zy = await _HelpRbxY0Bo.longestSubcommandTermLength(_cmdrZKqlkN, _helpere5RzT0c)
		const _cmdXkGg9kl = undefined;
		const _helpergDYPK5G = "7Xvd1LR";
		const _returnValue8JeFKA = await _HelpRbxY0Bo.longestOptionTermLength(_cmdXkGg9kl, _helpergDYPK5G)
		const _optionKgJmtK4 = "";
		const _returnValueOZShCvA = await _HelpRbxY0Bo.optionTerm(_optionKgJmtK4)
	});
})