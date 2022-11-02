export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpQVTO85Z = new Help()
		const _cmdI7f9pm = "gkN7ZJZc2Kj9xwKeQ5175fo8GNbxoDxhMUusrvN2i9Et1fdEsngydYNMbx3igkiXcEJe78gzC6jldq6D8fSy3aNf5Cndd8ETSx";
		const _helperI89SDOC = new Help()
		const __namebeMtEyI = {
		
	}
		const __aliasesArb511z = {
		
	}
		const _parentc1DrpjH = "M0iC3Fpvmrm94vn4CUIWlf5cOUNr7zFgcvwiWFOrMgF2zd8eergoxgGnFyEjcdOkwbKRW";
		const _returnValueYZ2wPAR = true;
		const _usageqZkxgnl = () => { return _returnValueYZ2wPAR };
		const _cmdnYYl7xy = {
			"_name": __namebeMtEyI,
		"_aliases": __aliasesArb511z,
		"parent": _parentc1DrpjH,
		"usage": _usageqZkxgnl
	}
		const _returnValueYswhxSo = await _helperI89SDOC.commandUsage(_cmdnYYl7xy)
		const _cmde3ZKPvL = false;
		const _returnValueQBYEMc = await _helperI89SDOC.visibleArguments(_cmde3ZKPvL)
		const _returnValuefEUOhxF = await _HelpQVTO85Z.padWidth(_cmdI7f9pm, _helperI89SDOC)
		const _messagekzRAibg = false;
		const _argumentgxqCKmf = new InvalidArgumentError(_messagekzRAibg)
		const _returnValueyC9ckG2 = await _HelpQVTO85Z.argumentTerm(_argumentgxqCKmf)
		const _arrayValuePbjfKJ8 = undefined;
		const _argumentWlXZbig = [_arrayValuePbjfKJ8]
		const _returnValuewucQ8yf = await _HelpQVTO85Z.argumentTerm(_argumentWlXZbig)
		const _cmdbQz1RJI = {
		
	}
		const _helperxj1pnHh = "LVrVYk4dBbqovqmYk8SVfmuv7jmy5vhlH1ebtcM3ykbrvTdGXzSADqo8Nd5qd";
		const _returnValuePldjrUJ = await _HelpQVTO85Z.longestArgumentTermLength(_cmdbQz1RJI, _helperxj1pnHh)
		const _arrayValuezqEOtIi = false;
		const _arrayValueADGDPj8 = null;
		const _arrayValuekdCcAGJ = undefined;
		const _arrayValueEIboBqu = [_arrayValuekdCcAGJ]
		const _cmdmqlTI1p = [_arrayValuezqEOtIi, _arrayValueADGDPj8, _arrayValueEIboBqu]
		const _helperlAPvrpb = new Help()
		const _arrayValueK0do9S = undefined;
		const _arrayValueEr5rygn = "kXOuUXvcqg78hUypEhOfrLjQnFATY5V61TQdegxScalG8SRK9Tgg8eJCeHb9dkhNNyNuSrFCkBmB";
		const _returnValuehgp6Blz = [_arrayValueK0do9S, _arrayValueEr5rygn]
		const _arrayValuejUTT3KL = () => { return _returnValuehgp6Blz };
		const _arrayValuefnqg4ct = false;
		const _nameCCMZv7i = [_arrayValuejUTT3KL, _arrayValuefnqg4ct]
		const _returnValueAmrOcCD = 6.310343663676452;
		const _arrayValuepcwGQZf = () => { return _returnValueAmrOcCD };
		const _arrayValueFagS1aJ = null;
		const _descriptionEIzJ2h0 = [_arrayValuepcwGQZf, _arrayValueFagS1aJ]
		const _cmdc7RS9aQ = new Argument(_nameCCMZv7i, _descriptionEIzJ2h0)
		const _returnValue3gqROR = await _cmdc7RS9aQ.argOptional()
		const _fnrJEY138 = {
		
	}
		const _returnValueogceRVQ = await _cmdc7RS9aQ.argParser(_fnrJEY138)
		const _returnValueIPFdGJ = await _cmdc7RS9aQ.name()
		const _returnValueLXRR0eL = await _helperlAPvrpb.subcommandDescription(_cmdc7RS9aQ)
		const _argumentfYFssOm = "hJkOwKtiA7c94hfT5KNj3wrbik0";
		const _returnValuecF7XjYQ = await _helperlAPvrpb.argumentDescription(_argumentfYFssOm)
		const _returnValuek5jYcA6 = await _HelpQVTO85Z.longestOptionTermLength(_cmdmqlTI1p, _helperlAPvrpb)
	});

	it('test for Help', async () => {
		const _HelpoaSIRg0 = new Help()
		const _cmdwX1R1eK = undefined;
		const _arrayValueXVn1GE = true;
		const _arrayValuee6i7Ssx = -2.4297427933785665;
		const _sortSubcommandsCrbLZvg = [_arrayValueXVn1GE, _arrayValuee6i7Ssx]
		const _returnValueiHm6Oab = "UYdsIrU26kVqMEgFcPB4uc5C35Pqd0wHlLvsR2NOHJNvyhuwyNeBhahpUmPMSVKMw";
		const _subcommandTermgscX2Sg = () => { return _returnValueiHm6Oab };
		const _helperXUPSCkT = {
			"sortSubcommands": _sortSubcommandsCrbLZvg,
		"subcommandTerm": _subcommandTermgscX2Sg
	}
		const _returnValueYlezbF = await _HelpoaSIRg0.formatHelp(_cmdwX1R1eK, _helperXUPSCkT)
	});

	it('test for Help', async () => {
		const _HelpbZ01KJK = new Help()
		const _cmdu5o0w0d = true;
		const _returnValueD2lPRNq = await _HelpbZ01KJK.commandDescription(_cmdu5o0w0d)
		const _cmdoMPX5sE = "VIlXgAVNdXUdvHCC2dhsWqOOUGPlqXDE4BDXV8LcpY5qED851";
		const _helperBQmyMKg = []
		const _returnValueW10cNB7 = await _HelpbZ01KJK.padWidth(_cmdoMPX5sE, _helperBQmyMKg)
		const _arrayValueD44xU1X = null;
		const _flagstaAzpLL = [_arrayValueD44xU1X]
		const _descriptionZ0G2q16 = false;
		const _cmdYMUFptV = new Option(_flagstaAzpLL, _descriptionZ0G2q16)
		const _returnValueFPlWpGN = await _cmdYMUFptV.attributeName()
		const _valuepqoGPX = {
		
	}
		const _descriptionHrj3DmA = undefined;
		const _returnValueE5YsPJf = await _cmdYMUFptV.default(_valuepqoGPX, _descriptionHrj3DmA)
		const _valuesQd8iV9a = "edpVCWWwaG2tfWx5eiL";
		const _returnValueYYPQNPi = await _cmdYMUFptV.choices(_valuesQd8iV9a)
		const _returnValueELqyOH = await _cmdYMUFptV.attributeName()
		const _returnValuefckXFgE = await _HelpbZ01KJK.commandDescription(_cmdYMUFptV)
	});

	it('test for Help', async () => {
		const _HelpAYGhJNs = new Help()
		const _cmdQnwVcE = undefined;
		const _returnValueOUyoQP = "xXUgFXlp2R32JhHTWCcFpCqxStbhabktHO2bs9lbLD4mhvIqHarkc9JQKxKWx566ULt2Tu5V0ivNS7zGpRKaBn7bcOI";
		const _helperQES74jC = () => { return _returnValueOUyoQP };
		const _returnValueCmnugDH = await _HelpAYGhJNs.longestOptionTermLength(_cmdQnwVcE, _helperQES74jC)
		const _cmdfdFazzh = "v7lJ72wYLByqBOL1hasxzEDGpyDOSePpsNdFjy3fMziFmxfw";
		const _returnValueoMSAOEw = await _HelpAYGhJNs.visibleOptions(_cmdfdFazzh)
		const _cmd7QNsiE = undefined;
		const _helperELwgFk0 = new Help()
		const _returnValuehE8VlId = -3.0467549398938534;
		const _cmdX4cPHW6 = () => { return _returnValuehE8VlId };
		const _returnValuely74Zt = await _helperELwgFk0.visibleOptions(_cmdX4cPHW6)
		const _cmdXFBkwvn = 3.56058842969051;
		const _arrayValueQJ8Nga5 = -8.69824862216528;
		const _arrayValueAVZWHhT = -0.7684023483921454;
		const _arrayValueyAxc4IU = undefined;
		const _helpervjN6Rh4 = [_arrayValueQJ8Nga5, _arrayValueAVZWHhT, _arrayValueyAxc4IU]
		const _returnValuezPXFYi = await _helperELwgFk0.longestArgumentTermLength(_cmdXFBkwvn, _helpervjN6Rh4)
		const _returnValuen4EOEL = await _HelpAYGhJNs.longestSubcommandTermLength(_cmd7QNsiE, _helperELwgFk0)
	});

	it('test for Help', async () => {
		const _Help2FiVdU = new Help()
		const _arrayValueAzsm9wI = "Xhj2SBTdCwT6NFPqequ1Af94SVo2mF2SM7HUr9z0D";
		const _arrayValuex1Qix2e = "yvQj7BxwyPJRPgskJDpaDeFwayIP2vTjIl";
		const _arrayValueRVk572 = "qJJcEGMFM45YniLGmAFmle3LBRkneJWkvK8O5mOUFp4sVxc23yrfLi8bQb6pGFBrf7rJTmxqCjxI41";
		const _arrayValuef8k2zQ1 = {
		
	}
		const _arrayValuedsjYQCL = [_arrayValuex1Qix2e, _arrayValueRVk572, _arrayValuef8k2zQ1]
		const _cmdExLQ6al = [_arrayValueAzsm9wI, _arrayValuedsjYQCL]
		const _returnValueBlPoYiw = -7.705366733404881;
		const _helperE2YpjOp = () => { return _returnValueBlPoYiw };
		const _returnValueHTDATL6 = await _Help2FiVdU.longestArgumentTermLength(_cmdExLQ6al, _helperE2YpjOp)
	});

	it('test for Help', async () => {
		const _Helppn96eP0 = new Help()
		const _returnValueqieN51v = false;
		const _strLbS4wIZ = () => { return _returnValueqieN51v };
		const _widthVchFdft = {
		
	}
		const _indentKAwK9sR = 1.1558782314883942;
		const _minColumnWidthLpZ9LCm = 5.8543661503794215;
		const _returnValueHjt8Ikf = await _Helppn96eP0.wrap(_strLbS4wIZ, _widthVchFdft, _indentKAwK9sR, _minColumnWidthLpZ9LCm)
		const __argsnxofe14 = {
		
	}
		const __nameYLLYCy = -4.924295487201443;
		const _arrayValuedt4jd7y = null;
		const _arrayValueF34q0qe = 9.298981847113538;
		const _arrayValueK0cikFc = null;
		const _arrayValuejd9HB0P = undefined;
		const _returnValuedNShzXX = [_arrayValuedt4jd7y, _arrayValueF34q0qe, _arrayValueK0cikFc, _arrayValuejd9HB0P]
		const __aliasesVbFWsqD = () => { return _returnValuedNShzXX };
		const _optionsOz9cU0x = {
		
	}
		const _cmddGjGiYr = {
			"_args": __argsnxofe14,
		"_name": __nameYLLYCy,
		"_aliases": __aliasesVbFWsqD,
		"options": _optionsOz9cU0x
	}
		const _returnValueIR2FWFz = await _Helppn96eP0.subcommandTerm(_cmddGjGiYr)
		const _arrayValuex40s5T = "vdzpNdwnSUo8F9yKZMk0hIHv4tKnF9XReMr4robS8wHwcUexBWZv7uxX3XHrEgEIMkqLRD94SxQOEdkyhij19obD3";
		const _arrayValueYfspmZD = "GYYRzdnoERcF4bS6Vz9wedqCOWaIJxVAJWIaVHTySz4s4Wl1cl";
		const _optionleAx5J = [_arrayValuex40s5T, _arrayValueYfspmZD]
		const _returnValueNvlLvIi = await _Helppn96eP0.optionTerm(_optionleAx5J)
	});

	it('test for Help', async () => {
		const _HelpoNiJ9EI = new Help()
		const _cmdmbHldyx = undefined;
		const _returnValuego0cPv = "s";
		const _longestOptionTermLengthxOvhsUW = () => { return _returnValuego0cPv };
		const _longestSubcommandTermLengthkaYm1Cy = undefined;
		const _returnValueXFhiBwi = undefined;
		const _longestArgumentTermLengthy0Ze9t4 = () => { return _returnValueXFhiBwi };
		const _helperiefusnF = {
			"longestOptionTermLength": _longestOptionTermLengthxOvhsUW,
		"longestSubcommandTermLength": _longestSubcommandTermLengthkaYm1Cy,
		"longestArgumentTermLength": _longestArgumentTermLengthy0Ze9t4
	}
		const _returnValuepwUbNGk = await _HelpoNiJ9EI.padWidth(_cmdmbHldyx, _helperiefusnF)
		const _returnValue0Wo6sq = "CqhVq8Y92u6YFBTHiZghqvR52I2cg3VXfyU5ctbUNccwjXclIkaMgKN3BI8EUVL";
		const _flagshhaB6hW = () => { return _returnValue0Wo6sq };
		const _descriptioni2th2q7 = undefined;
		const _cmddmv2w4p = new Option(_flagshhaB6hW, _descriptioni2th2q7)
		const _valuesqTpXoqT = 2.4971188109642917;
		const _returnValue4SD2r0 = await _cmddmv2w4p.choices(_valuesqTpXoqT)
		const _valuesZc1pYB2 = "aEGlhlhrijj1Ns3QemhkctzlvgpRQ8ltY9LpRynTrwUiXiI8hVemu5vPgv6efqhHuHcIbfQOyvL7bHReaR";
		const _returnValue6W80GN = await _cmddmv2w4p.choices(_valuesZc1pYB2)
		const _returnValueRNM0m86 = await _HelpoNiJ9EI.commandDescription(_cmddmv2w4p)
		const _cmdRqZfhGR = undefined;
		const _helperJnXcnWE = "xI";
		const _returnValueatcTu9a = await _HelpoNiJ9EI.longestSubcommandTermLength(_cmdRqZfhGR, _helperJnXcnWE)
	});

	it('test for Help', async () => {
		const _HelpdQrFv8w = new Help()
		const _cmdtxgMo9Y = -9.289996729370005;
		const _arrayValueGcRtqfV = {
		
	}
		const _arrayValuevzXY3Qk = -2.0613900999568378;
		const _arrayValuevJZBiA3 = null;
		const _arrayValueNrH8Bo8 = [_arrayValueGcRtqfV, _arrayValuevzXY3Qk, _arrayValuevJZBiA3]
		const _arrayValueYO37bn3 = 0.24707011733621265;
		const _arrayValueN0Qpe8U = "Svvz5HTTHEkKgS3QbFVXXtSryykS8YJqhiXkzrQxWjmEzSJFlJm6J0jL7Cu2s";
		const _returnValueOZGegB2 = 3.618705199254075;
		const _arrayValuevoBYzOk = () => { return _returnValueOZGegB2 };
		const _arrayValueIOk1I0n = [_arrayValuevoBYzOk]
		const _arrayValueFcC5KXW = -4.084396376706614;
		const _arrayValueg8krvKc = {
		
	}
		const _arrayValueh4aYICp = [_arrayValueFcC5KXW, _arrayValueg8krvKc]
		const _returnValueWzZpnKl = [_arrayValueYO37bn3, _arrayValueN0Qpe8U, _arrayValueIOk1I0n, _arrayValueh4aYICp]
		const _arrayValueqKwG5Tt = () => { return _returnValueWzZpnKl };
		const _returnValue8cDxpv = {
		
	}
		const _arrayValueGGJmY7 = () => { return _returnValue8cDxpv };
		const _helperX8GwHDs = [_arrayValueNrH8Bo8, _arrayValueqKwG5Tt, _arrayValueGGJmY7]
		const _returnValuea6olDsv = await _HelpdQrFv8w.longestSubcommandTermLength(_cmdtxgMo9Y, _helperX8GwHDs)
		const _arrayValueii1pCr = null;
		const _arrayValueEKyuDoz = null;
		const _arrayValuei8GoZt1 = null;
		const _cmdeTcO3V = [_arrayValueii1pCr, _arrayValueEKyuDoz, _arrayValuei8GoZt1]
		const _returnValueS6wIMVM = await _HelpdQrFv8w.visibleCommands(_cmdeTcO3V)
		const _optionsVbPezKe = {
		
	}
		const __hasHelpOptionlvy9nY0 = {
		
	}
		const __helpShortFlaguTSpLz1 = -6.546799288252002;
		const _returnValueyc6hVcF = "XyM32iq87OFAx94uGExSGUGeSzFBz2pFmcAY96R4J57vVNM4Ez";
		const __findOptionyblYBB = () => { return _returnValueyc6hVcF };
		const __helpLongFlagyYcjlLB = false;
		const _returnValuetOTpnYc = undefined;
		const _returnValueybD38Mj = () => { return _returnValuetOTpnYc };
		const _createOptionU1RTO9y = () => { return _returnValueybD38Mj };
		const __helpDescriptionWVoeOSM = undefined;
		const __helpFlagsLEAMI8Q = null;
		const _cmdfXMCYc = {
			"options": _optionsVbPezKe,
		"_hasHelpOption": __hasHelpOptionlvy9nY0,
		"_helpShortFlag": __helpShortFlaguTSpLz1,
		"_findOption": __findOptionyblYBB,
		"_helpLongFlag": __helpLongFlagyYcjlLB,
		"createOption": _createOptionU1RTO9y,
		"_helpDescription": __helpDescriptionWVoeOSM,
		"_helpFlags": __helpFlagsLEAMI8Q
	}
		const _returnValuen144IC = await _HelpdQrFv8w.visibleOptions(_cmdfXMCYc)
		const _returnValueyLcxh36 = true;
		const _cmdkHql4V0 = () => { return _returnValueyLcxh36 };
		const _returnValuePbKl0dX = await _HelpdQrFv8w.commandUsage(_cmdkHql4V0)
	});

	it('test for Help', async () => {
		const _HelpyncV5Ev = new Help()
		const _returnValueUN1V2j = 5.034925137419224;
		const _argumenteLTXjyv = () => { return _returnValueUN1V2j };
		const _returnValuevI04rZj = await _HelpyncV5Ev.argumentTerm(_argumenteLTXjyv)
	});

	it('test for Help', async () => {
		const _HelpIwDxYSJ = new Help()
		const __argsDescriptionLrS4tI1 = {
		
	}
		const __argssZa6qOD = {
		
	}
		const _cmdIrhAns8 = {
			"_argsDescription": __argsDescriptionLrS4tI1,
		"_args": __argssZa6qOD
	}
		const _returnValueQY6mtSO = await _HelpIwDxYSJ.visibleArguments(_cmdIrhAns8)
		const _cmdxsgRYGa = "ISwLOdVNOI5IEwvG";
		const _returnValueB8Z6Pwx = await _HelpIwDxYSJ.subcommandTerm(_cmdxsgRYGa)
		const _cmdBfsKYC6 = "m1NbI5pAcCcv7CrTq4r9pyI4XsSSgLQfDYyR4v2gCEcDN4yaX";
		const _returnValueGrcw5nv = await _HelpIwDxYSJ.visibleArguments(_cmdBfsKYC6)
		const _cmdsMVQd6Z = "oTkYyFSJqWUg8edf22Hnjgi9yTxfmdYzBGqdYJUK";
		const _returnValueRzlORax = await _HelpIwDxYSJ.visibleArguments(_cmdsMVQd6Z)
		const _arrayValuekqgkLf = null;
		const _arrayValuezdaxpQq = undefined;
		const _cmdvYbnzIG = [_arrayValuekqgkLf, _arrayValuezdaxpQq]
		const _arrayValueJwWa85Z = -0.7671039791095211;
		const _arrayValueMzfOtyA = {
		
	}
		const _arrayValueKrpxbg7 = null;
		const _arrayValuevtC3YME = [_arrayValueMzfOtyA, _arrayValueKrpxbg7]
		const _arrayValuest91K6A = "IXEXBPBTA5xW1LKroqhNyo1eEqTUxXUUlSE88GyAO36KHUyHxAHMjQRH5iKAQhI";
		const _returnValueXjteJc3 = [_arrayValueJwWa85Z, _arrayValuevtC3YME, _arrayValuest91K6A]
		const _helperwCt7qAB = () => { return _returnValueXjteJc3 };
		const _returnValuea9gQy52 = await _HelpIwDxYSJ.padWidth(_cmdvYbnzIG, _helperwCt7qAB)
	});

	it('test for Help', async () => {
		const _HelpxiVZzy2 = new Help()
		const _optionslxv4bOV = {
		
	}
		const __hasHelpOptionqTIvaj = {
		
	}
		const _arrayValue0Bks1u = 2.0090151690902225;
		const _arrayValueYAu63FL = "eWOjqNlh3SvL";
		const _arrayValueHqK3g4F = true;
		const __helpShortFlagfWpTa0k = [_arrayValue0Bks1u, _arrayValueYAu63FL, _arrayValueHqK3g4F]
		const _returnValueWDhbInJ = "dWIEBcSXp";
		const __findOptionEnDuXZ = () => { return _returnValueWDhbInJ };
		const __helpLongFlagmKSapwj = true;
		const _returnValueekcj8f8 = false;
		const _createOptionan3U9PK = () => { return _returnValueekcj8f8 };
		const __helpDescriptiong9wcIlg = "ARnqxMQFJrENPtDWKmacs7Uuhc5C8JFlkw15lfAFZxluEBaqbpEsrNRckiIeqEmiskyGXalkQjGxXu9Q0WS";
		const __helpFlagsnsofVoa = -6.266393701250446;
		const _cmdhLUL4ZW = {
			"options": _optionslxv4bOV,
		"_hasHelpOption": __hasHelpOptionqTIvaj,
		"_helpShortFlag": __helpShortFlagfWpTa0k,
		"_findOption": __findOptionEnDuXZ,
		"_helpLongFlag": __helpLongFlagmKSapwj,
		"createOption": _createOptionan3U9PK,
		"_helpDescription": __helpDescriptiong9wcIlg,
		"_helpFlags": __helpFlagsnsofVoa
	}
		const _returnValuesSaqOt3 = await _HelpxiVZzy2.visibleOptions(_cmdhLUL4ZW)
		const _arrayValueUjIJLDF = "sJkv82wfEbmfxvktwmSA9xT6qGwkKMTLDCba8Fw3T8xJIp26gADn90dPAolKwmnt1ciSoWRB7W9FHL1uF7ggYzynOs6cEd9";
		const _arrayValuewzOCho8 = false;
		const _arrayValueVdQpeoB = {
		
	}
		const _cmdBt82DHX = [_arrayValueUjIJLDF, _arrayValuewzOCho8, _arrayValueVdQpeoB]
		const _returnValueyNu3PAT = await _HelpxiVZzy2.visibleOptions(_cmdBt82DHX)
	});

	it('test for Help', async () => {
		const _HelplPsBNLy = new Help()
		const _flagsHPvkNN7 = false;
		const _optionLR2579n = {
			"flags": _flagsHPvkNN7
	}
		const _returnValuel13AcbQ = await _HelplPsBNLy.optionTerm(_optionLR2579n)
		const __argsq3el6fC = true;
		const __nameN3FvBMM = 5.417604538162388;
		const __aliasesigpVDEb = {
		
	}
		const _optionsjRjv2cA = {
		
	}
		const _cmdDjGMtXa = {
			"_args": __argsq3el6fC,
		"_name": __nameN3FvBMM,
		"_aliases": __aliasesigpVDEb,
		"options": _optionsjRjv2cA
	}
		const _returnValueZP2772j = await _HelplPsBNLy.subcommandTerm(_cmdDjGMtXa)
		const _argChoicesFyPMagG = {
		
	}
		const _defaultValueaH8WYr0 = undefined;
		const _defaultValueDescriptioncZP3rtA = null;
		const _descriptionlZbel00 = false;
		const _argumentBBo8oaY = {
			"argChoices": _argChoicesFyPMagG,
		"defaultValue": _defaultValueaH8WYr0,
		"defaultValueDescription": _defaultValueDescriptioncZP3rtA,
		"description": _descriptionlZbel00
	}
		const _returnValueIm1tNGo = await _HelplPsBNLy.argumentDescription(_argumentBBo8oaY)
	});

	it('test for Help', async () => {
		const _HelpoSxdaEx = new Help()
		const _returnValueFnG8CZf = -8.461914478452174;
		const _optionSatYyDU = () => { return _returnValueFnG8CZf };
		const _returnValueecXCvWv = await _HelpoSxdaEx.optionDescription(_optionSatYyDU)
		const _cmdwsYlYwm = "vMiEPsIt49cqAcCLaqac2";
		const _longestOptionTermLengthFwFxkv2 = undefined;
		const _returnValuedEWQVSv = true;
		const _returnValueXBhPVVl = () => { return _returnValuedEWQVSv };
		const _arrayValueB8l7e3X = () => { return _returnValueXBhPVVl };
		const _returnValuea39WfMu = [_arrayValueB8l7e3X]
		const _longestSubcommandTermLengthgwhFwMg = () => { return _returnValuea39WfMu };
		const _returnValueK06KcT2 = []
		const _longestArgumentTermLengthCz0u6Uv = () => { return _returnValueK06KcT2 };
		const _helpersQ1bjnC = {
			"longestOptionTermLength": _longestOptionTermLengthFwFxkv2,
		"longestSubcommandTermLength": _longestSubcommandTermLengthgwhFwMg,
		"longestArgumentTermLength": _longestArgumentTermLengthCz0u6Uv
	}
		const _returnValueaC1XFIm = await _HelpoSxdaEx.padWidth(_cmdwsYlYwm, _helpersQ1bjnC)
		const _arrayValueAf3wBx = -7.306025201056299;
		const _arrayValueMcWx5z5 = null;
		const _arrayValueP7F18c = {
		
	}
		const _cmdOtaCP2 = [_arrayValueAf3wBx, _arrayValueMcWx5z5, _arrayValueP7F18c]
		const _arrayValuekqwNjSJ = {
		
	}
		const _arrayValuefHhIDR7 = null;
		const _arrayValuezK8S54I = "nhIvwqKurRacAcVrULUU";
		const _arrayValueC81EKZZ = [_arrayValuefHhIDR7, _arrayValuezK8S54I]
		const _returnValueeJXt1Oe = [_arrayValuekqwNjSJ, _arrayValueC81EKZZ]
		const _arrayValueHDoBGa2 = () => { return _returnValueeJXt1Oe };
		const _helperUE29ahE = [_arrayValueHDoBGa2]
		const _returnValueq3556Us = await _HelpoSxdaEx.padWidth(_cmdOtaCP2, _helperUE29ahE)
		const _returnValueCNjoWYI = {
		
	}
		const _sliceRFv6oBY = () => { return _returnValueCNjoWYI };
		const _nameiNSGQnl = {
			"slice": _sliceRFv6oBY
	}
		const _descriptionpWIAIbY = -7.517600134026866;
		const _cmdg3KGzeF = new Argument(_nameiNSGQnl, _descriptionpWIAIbY)
		const _valueSvuMQe = undefined;
		const _descriptionHfCa3mR = undefined;
		const _returnValueD5DkBEv = await _cmdg3KGzeF.default(_valueSvuMQe, _descriptionHfCa3mR)
		const _valueywCaUOJ = undefined;
		const _arrayValuelLoHBSe = undefined;
		const _arrayValueF6mbI5a = [_arrayValuelLoHBSe]
		const _previousgC510IU = [_arrayValueF6mbI5a]
		const _returnValueLCF7IF = await _cmdg3KGzeF._concatValue(_valueywCaUOJ, _previousgC510IU)
		const _valuesb9TgGKZ = undefined;
		const _returnValueogpdMiH = await _cmdg3KGzeF.choices(_valuesb9TgGKZ)
		const _returnValueRHKYo3Y = await _HelpoSxdaEx.subcommandTerm(_cmdg3KGzeF)
		const _returnValueHsYsJpL = false;
		const _named4Chx0 = () => { return _returnValueHsYsJpL };
		const _cmdTu9lV0v = new Command(_named4Chx0)
		const _returnValueZboQq0d = null;
		const _sliceV0ZQ9hJ = () => { return _returnValueZboQq0d };
		const _argvDoJwb1N = {
			"slice": _sliceV0ZQ9hJ
	}
		const _arrayValueEFpe6mE = undefined;
		const _arrayValuesSqxiQ8 = "IAiAh2Q6GJKmDYHWcTYnT7sM2zZ30wkPT5qxBAVzfAeRVU8Neqn1BZm5snLTUVHJ8SqaHXnxrLyRpkW1GoeVK";
		const _arrayValueUb3cAYz = undefined;
		const _arrayValuepwxLK89 = [_arrayValuesSqxiQ8, _arrayValueUb3cAYz]
		const _arrayValuecqg9xfa = [_arrayValuepwxLK89]
		const _parseOptionsPgQbw5v = [_arrayValueEFpe6mE, _arrayValuecqg9xfa]
		const _returnValuelP5VnHf = await _cmdTu9lV0v._prepareUserArgs(_argvDoJwb1N, _parseOptionsPgQbw5v)
		const _returnValuew9Jw5b6 = await _HelpoSxdaEx.commandDescription(_cmdTu9lV0v)
	});

	it('test for Help', async () => {
		const _Helpvi3tdjM = new Help()
		const _returnValuekV2HwOs = 6.622310699852633;
		const _descriptionuzp7Any = () => { return _returnValuekV2HwOs };
		const _cmdY4XG2aj = {
			"description": _descriptionuzp7Any
	}
		const _returnValuefQI8pCG = await _Helpvi3tdjM.subcommandDescription(_cmdY4XG2aj)
	});

	it('test for Help', async () => {
		const _HelpOomoNta = new Help()
		const _argumentn8EgAO4 = "oTMNVRp7ksdxsBaMsNqpJR1LBw29UBve2JAUQTjKdOUx2RFFfSmK1IrbdCXzetJ0S9wg0BO";
		const _returnValueS7Z6bOW = await _HelpOomoNta.argumentDescription(_argumentn8EgAO4)
		const _cmdajoOsPJ = undefined;
		const _returnValuen2dwZf = undefined;
		const _visibleArgumentsZdObyE1 = () => { return _returnValuen2dwZf };
		const _argumentTermVa4gAvL = null;
		const _helperE33O8zr = {
			"visibleArguments": _visibleArgumentsZdObyE1,
		"argumentTerm": _argumentTermVa4gAvL
	}
		const _returnValuePQY8B3 = await _HelpOomoNta.longestArgumentTermLength(_cmdajoOsPJ, _helperE33O8zr)
		const _optionsSJwS8vw = {
		
	}
		const __hasHelpOptiontDYa2Xf = undefined;
		const __helpShortFlagBCCRX3a = undefined;
		const _returnValuedviYhFf = false;
		const __findOptionndYG9jT = () => { return _returnValuedviYhFf };
		const __helpLongFlagvK4l9L = null;
		const _returnValueF8Rv5ZP = -2.5058926400567936;
		const _createOptionQkpIWni = () => { return _returnValueF8Rv5ZP };
		const __helpDescriptionrZgPvIF = 9.42737580491913;
		const __helpFlagsgcKO8sk = -5.984040158096454;
		const _cmd1khWFl = {
			"options": _optionsSJwS8vw,
		"_hasHelpOption": __hasHelpOptiontDYa2Xf,
		"_helpShortFlag": __helpShortFlagBCCRX3a,
		"_findOption": __findOptionndYG9jT,
		"_helpLongFlag": __helpLongFlagvK4l9L,
		"createOption": _createOptionQkpIWni,
		"_helpDescription": __helpDescriptionrZgPvIF,
		"_helpFlags": __helpFlagsgcKO8sk
	}
		const _returnValueRdSalTh = await _HelpOomoNta.visibleOptions(_cmd1khWFl)
	});

	it('test for Help', async () => {
		const _HelpedTkW2 = new Help()
		const _arrayValuekM2OwTb = null;
		const _cmdj3PvM9s = [_arrayValuekM2OwTb]
		const _returnValueKYHInXL = await _HelpedTkW2.visibleCommands(_cmdj3PvM9s)
		const _flagsF0s2rZQ = null;
		const _optiontnDfx9z = {
			"flags": _flagsF0s2rZQ
	}
		const _returnValueZXUpLzQ = await _HelpedTkW2.optionTerm(_optiontnDfx9z)
		const _cmdA2wG4i = "X4B98klY5JjTNbvjYahXDLCcQjF8ewPuDNmWtyWyfwl43FgB4V0zZ6kwY3Ttsg";
		const _returnValueWWg0Ihv = await _HelpedTkW2.commandDescription(_cmdA2wG4i)
		const _returnValueh5gWue5 = null;
		const _nameXmHGktT = () => { return _returnValueh5gWue5 };
		const _argumentgw5soaE = {
			"name": _nameXmHGktT
	}
		const _returnValueGkLxDnN = await _HelpedTkW2.argumentTerm(_argumentgw5soaE)
	});

	it('test for Help', async () => {
		const _HelpcygzzLJ = new Help()
		const _returnValuexKx3zIP = undefined;
		const _matchgd6oHLR = () => { return _returnValuexKx3zIP };
		const _arrayValueXfSsdFW = undefined;
		const _arrayValueyprP5fj = 9.498402695029146;
		const _returnValueXVArYz2 = [_arrayValueXfSsdFW, _arrayValueyprP5fj]
		const _substroaVYW6o = () => { return _returnValueXVArYz2 };
		const _strAZAMxH1 = {
			"match": _matchgd6oHLR,
		"substr": _substroaVYW6o
	}
		const _widthkxGfmW = -5.255064437670432;
		const _indentq982UnP = 8.971718318130165;
		const _minColumnWidths2BdBfM = true;
		const _returnValueEUacYPC = await _HelpcygzzLJ.wrap(_strAZAMxH1, _widthkxGfmW, _indentq982UnP, _minColumnWidths2BdBfM)
	});

	it('test for Help', async () => {
		const _HelpTKAopd = new Help()
		const _returnValueMfRMzg = null;
		const _cmdFPZc7J = () => { return _returnValueMfRMzg };
		const _helpervKaEWG3 = new Help()
		const _argChoices87bgBu = {
		
	}
		const _negaterOHiKO1 = "4iTGV2CVXjFIx5N";
		const _defaultValueL9sB6uc = undefined;
		const _defaultValueDescriptionDZOhOfc = {
		
	}
		const _envVarxrayEEa = 3.300943219088026;
		const _descriptionQ8IKd3n = undefined;
		const _optionBp0kMyU = {
			"argChoices": _argChoices87bgBu,
		"negate": _negaterOHiKO1,
		"defaultValue": _defaultValueL9sB6uc,
		"defaultValueDescription": _defaultValueDescriptionDZOhOfc,
		"envVar": _envVarxrayEEa,
		"description": _descriptionQ8IKd3n
	}
		const _returnValueFFKXJdA = await _helpervKaEWG3.optionDescription(_optionBp0kMyU)
		const _cmdbzCCI5V = true;
		const _helperJdOgU1M = new Help()
		const _cmdSN9PmkR = "lIORCVTwLlvVDTk8f2lNRvsbajjaK64klNvcDR6SzA1nvW";
		const _returnValueCQO6lky = await _helperJdOgU1M.visibleArguments(_cmdSN9PmkR)
		const _returnValueAdhVNWu = await _helpervKaEWG3.longestSubcommandTermLength(_cmdbzCCI5V, _helperJdOgU1M)
		const _argumentwDIK6ue = "FahRpu9HqphxyG8OJRN3blhwe6A5bVlKjr5xfFswSRoeevYT";
		const _returnValueBQGC8ZC = await _helpervKaEWG3.argumentDescription(_argumentwDIK6ue)
		const _strTGv2WMx = "GESUaerRnlUeHPDkHG";
		const _widthnCQoCe0 = 5.499996149457026;
		const _arrayValueBTKfcc5 = undefined;
		const _arrayValueLk5axZO = "3mKyyAv1sAclrOPbgsX7vxC6mH7zagE390EClADYAzfnGf";
		const _arrayValueeuMz7HG = undefined;
		const _arrayValueV30ts5e = undefined;
		const _indentJQIdI2Y = [_arrayValueBTKfcc5, _arrayValueLk5axZO, _arrayValueeuMz7HG, _arrayValueV30ts5e]
		const _minColumnWidthOapZaZw = 5.854339327539968;
		const _returnValueKxZw7Es = await _helpervKaEWG3.wrap(_strTGv2WMx, _widthnCQoCe0, _indentJQIdI2Y, _minColumnWidthOapZaZw)
		const _nameoj65Qut = true;
		const _argumentLm58KLb = new Command(_nameoj65Qut)
		const _arrayValueknw9T6u = 4.57515987123757;
		const _arrayValueLQ8ewov = 1.986564766241674;
		const _returnValueUsZiu3q = undefined;
		const _arrayValuelC1Gx6i = () => { return _returnValueUsZiu3q };
		const _nameo7QGhMR = [_arrayValueknw9T6u, _arrayValueLQ8ewov, _arrayValuelC1Gx6i]
		const _descriptionJy50Jjl = null;
		const _returnValuemdrnDo0 = await _argumentLm58KLb.createArgument(_nameo7QGhMR, _descriptionJy50Jjl)
		const _returnValuea3lhnEC = await _helpervKaEWG3.argumentDescription(_argumentLm58KLb)
		const _returnValuezEE9a8i = await _HelpTKAopd.longestSubcommandTermLength(_cmdFPZc7J, _helpervKaEWG3)
		const _argumentpnMExfE = "DvTxNbjU5k0hyYYLpVuH7OjH9qATAKMA6y3VnzjjL6OPsfs1fLnpN1yJo7ml1F";
		const _returnValueDh1EYGa = await _HelpTKAopd.argumentDescription(_argumentpnMExfE)
		const _cmdb95O4Hs = "Ewm5JaoSpTSnvcyASlEBxDatVfRBqijDTdMPYB1JXVzGFxPBIkbRQRq3OIJVWWcdPELIG4g";
		const _returnValueoDqKxdG = undefined;
		const _helperRo4XNjn = () => { return _returnValueoDqKxdG };
		const _returnValueuhFYhat = await _HelpTKAopd.padWidth(_cmdb95O4Hs, _helperRo4XNjn)
		const _arrayValueAqHJYe1 = null;
		const _cmd1o5J2r = [_arrayValueAqHJYe1]
		const _returnValuejTSlKd = null;
		const _visibleArgumentsHHYyY6 = () => { return _returnValuejTSlKd };
		const _returnValueMbokT25 = true;
		const _argumentTermjiOy4ob = () => { return _returnValueMbokT25 };
		const _helperEkSwC0F = {
			"visibleArguments": _visibleArgumentsHHYyY6,
		"argumentTerm": _argumentTermjiOy4ob
	}
		const _returnValueiuus2LA = await _HelpTKAopd.longestArgumentTermLength(_cmd1o5J2r, _helperEkSwC0F)
	});

	it('test for Help', async () => {
		const _HelpPivKFB1 = new Help()
		const _cmdCp2Cr7K = "APnmqctT9p5XHCQeOmlw7gu9J3L7ClVSVxbDpsfcrV8vrOKAqU2";
		const _helperPnTlFSC = new Help()
		const _nameXvkntk7 = null;
		const _cmdbVx6Nqq = new Command(_nameXvkntk7)
		const _returnValueBJZyvE2 = await _cmdbVx6Nqq.opts()
		const _strbB4PXhS = {
		
	}
		const _returnValuewl1rRF5 = await _cmdbVx6Nqq.name(_strbB4PXhS)
		const _returnValuehLZgghf = await _cmdbVx6Nqq._checkForMissingMandatoryOptions()
		const _returnValue2A7GtS = await _helperPnTlFSC.subcommandTerm(_cmdbVx6Nqq)
		const _returnValueg5p9fC9 = await _HelpPivKFB1.longestSubcommandTermLength(_cmdCp2Cr7K, _helperPnTlFSC)
		const _arrayValueQe2bq4F = true;
		const _arrayValueR9OOpz0 = undefined;
		const _arrayValueib7vQu0 = [_arrayValueQe2bq4F, _arrayValueR9OOpz0]
		const _arrayValueR8ZQe03 = -8.047271905110607;
		const _optionxE3e1m = [_arrayValueib7vQu0, _arrayValueR8ZQe03]
		const _returnValueOEgErIz = await _HelpPivKFB1.optionDescription(_optionxE3e1m)
		const _cmdkVOY8xu = undefined;
		const _helperjTV02EQ = new Help()
		const _cmdk8Ii62e = undefined;
		const _returnValuegCilYVg = "UhgsNA4";
		const _returnValuemYJPTsO = () => { return _returnValuegCilYVg };
		const _returnValuezXgiw4F = () => { return _returnValuemYJPTsO };
		const _helperQuwMJIf = () => { return _returnValuezXgiw4F };
		const _returnValueMHQH43a = await _helperjTV02EQ.padWidth(_cmdk8Ii62e, _helperQuwMJIf)
		const _cmdhU5pCoT = -3.596571997215241;
		const _helperJaCudgC = false;
		const _returnValuexJKrqUM = await _helperjTV02EQ.longestSubcommandTermLength(_cmdhU5pCoT, _helperJaCudgC)
		const _cmdNaDjmK3 = "1HiOg4fKvE8o7xgLqOkAkcVBspHGspyX4L4iT7qntVBG2Gd6kaHClfqUnCGoIKLyI";
		const _returnValueuhq9GIo = await _helperjTV02EQ.subcommandDescription(_cmdNaDjmK3)
		const _returnValueZ2OWer = await _HelpPivKFB1.longestOptionTermLength(_cmdkVOY8xu, _helperjTV02EQ)
	});

	it('test for Help', async () => {
		const _HelpK4KaEiT = new Help()
		const _argumentUxzDGLk = "YFctb6qGufer3XVJzsDTZlsH1nlYNssEefgHI2l5Xe4rMqFWUIpuReT9X16Ejx04OOxOmgOvyo5ZMZXPCmaVI2fI";
		const _returnValueRHBh5MQ = await _HelpK4KaEiT.argumentDescription(_argumentUxzDGLk)
		const _argChoicesj80SW9M = {
		
	}
		const _negatevl5ejik = undefined;
		const _defaultValueFff10LK = undefined;
		const _defaultValueDescriptionYemaOS = {
		
	}
		const _envVarySsBtLp = undefined;
		const _returnValueni2U1vL = "NQa36XreKoGjUGYwc38dUgEDQNHC8nB7RHKDQWk7GE3bRiFigeVsLjRBWe1ZzAv253y7bodm2U1lC";
		const _descriptionSfAyDXG = () => { return _returnValueni2U1vL };
		const _optionXLh0yG7 = {
			"argChoices": _argChoicesj80SW9M,
		"negate": _negatevl5ejik,
		"defaultValue": _defaultValueFff10LK,
		"defaultValueDescription": _defaultValueDescriptionYemaOS,
		"envVar": _envVarySsBtLp,
		"description": _descriptionSfAyDXG
	}
		const _returnValueSVJIkBN = await _HelpK4KaEiT.optionDescription(_optionXLh0yG7)
		const _returnValuehKNgDX2 = {
		
	}
		const _includesQk3U9eu = () => { return _returnValuehKNgDX2 };
		const _flagsAXJ3Q8R = {
			"includes": _includesQk3U9eu
	}
		const _arrayValueHB00TH5 = false;
		const _returnValueuBQcvEq = undefined;
		const _arrayValuepKFCs8K = () => { return _returnValueuBQcvEq };
		const _descriptionfp9h4eo = [_arrayValueHB00TH5, _arrayValuepKFCs8K]
		const _optionAUMdy8T = new Option(_flagsAXJ3Q8R, _descriptionfp9h4eo)
		const _fneKfgTkz = undefined;
		const _returnValueDJGfYoo = await _optionAUMdy8T.argParser(_fneKfgTkz)
		const _hideBaiOco = true;
		const _returnValuewoUk8k0 = await _optionAUMdy8T.hideHelp(_hideBaiOco)
		const _returnValueh84ThD = await _HelpK4KaEiT.optionTerm(_optionAUMdy8T)
		const _returnValueJNG92AJ = 9.886054987138671;
		const _matchQ3UO7xy = () => { return _returnValueJNG92AJ };
		const _returnValuey9IdhMo = 5.761532334311369;
		const _substrIUo2r7Z = () => { return _returnValuey9IdhMo };
		const _strqIBo0DG = {
			"match": _matchQ3UO7xy,
		"substr": _substrIUo2r7Z
	}
		const _widthHo6hYiw = 9.786431180430327;
		const _indentYqOlDRa = 5.525297537491374;
		const _minColumnWidthcsOQJas = -6.608648403358201;
		const _returnValueYxbuqWB = await _HelpK4KaEiT.wrap(_strqIBo0DG, _widthHo6hYiw, _indentYqOlDRa, _minColumnWidthcsOQJas)
		const _cmdeYPoAQ = undefined;
		const _returnValueifbLJwX = "g5or4ztHHy7zXavtEKfjluq4vNlKzX3d6eqp5FtSdBHAnHeGpb2HPLGnNita8AbwbHqL9wJH8oFB";
		const _helperTuQa6Nc = () => { return _returnValueifbLJwX };
		const _returnValuetfuGjQX = await _HelpK4KaEiT.longestArgumentTermLength(_cmdeYPoAQ, _helperTuQa6Nc)
	});

	it('test for Help', async () => {
		const _HelpmQJDI2k = new Help()
		const _returnValuexbHHKVj = 9.629875554084599;
		const _optionoSSJqOc = () => { return _returnValuexbHHKVj };
		const _returnValueZLoYmvM = await _HelpmQJDI2k.optionDescription(_optionoSSJqOc)
		const _returnValueQgCXZDt = false;
		const _returnValueCIgro09 = () => { return _returnValueQgCXZDt };
		const _optionCxP7LNX = () => { return _returnValueCIgro09 };
		const _returnValueGkBiKlW = await _HelpmQJDI2k.optionTerm(_optionCxP7LNX)
		const _strjP0O6rE = "Ywvh3KMNogNddUVGAo3j7";
		const _widthZ1wIqPQ = -6.898138795081525;
		const _indentkXi9j7L = -7.871917678465355;
		const _minColumnWidthFrB6x9u = -2.542432642675002;
		const _returnValueKBDDXV2 = await _HelpmQJDI2k.wrap(_strjP0O6rE, _widthZ1wIqPQ, _indentkXi9j7L, _minColumnWidthFrB6x9u)
	});

	it('test for Help', async () => {
		const _HelppaPTZUy = new Help()
		const _argChoicesQCdejRG = {
		
	}
		const _defaultValuePYdADze = undefined;
		const _defaultValueDescriptioncVAfzU4 = undefined;
		const _descriptionb5YmpM = null;
		const _argumentMyG8Edd = {
			"argChoices": _argChoicesQCdejRG,
		"defaultValue": _defaultValuePYdADze,
		"defaultValueDescription": _defaultValueDescriptioncVAfzU4,
		"description": _descriptionb5YmpM
	}
		const _returnValueYTGH4wZ = await _HelppaPTZUy.argumentDescription(_argumentMyG8Edd)
		const _optionbbQ9jmD = []
		const _returnValueB9d1uQc = await _HelppaPTZUy.optionDescription(_optionbbQ9jmD)
		const _returnValueCv6HOq = "xU6wkStIobt5orRevwD2Mjk3apmldPSFGNkXOyd3V9EN6PWWCL39";
		const _returnValueMWb6Ld3 = () => { return _returnValueCv6HOq };
		const _sliceLzWLBT = () => { return _returnValueMWb6Ld3 };
		const _nameSsO2i1o = {
			"slice": _sliceLzWLBT
	}
		const _descriptionIrtosTn = "kBRwuEWTw2c5ogF9z4MPDrupQYBLxmHY3yORMVg";
		const _cmdSgU3E3N = new Argument(_nameSsO2i1o, _descriptionIrtosTn)
		const _returnValuewnvxXuy = await _cmdSgU3E3N.argRequired()
		const _returnValueMzUm7fI = await _cmdSgU3E3N.name()
		const _arrayValuesv7pwJa = null;
		const _returnValuezbVqFTy = [_arrayValuesv7pwJa]
		const _includesOECCBhn = () => { return _returnValuezbVqFTy };
		const _returnValueyIdzLe = {
		
	}
		const _joinejZ7Ip5 = () => { return _returnValueyIdzLe };
		const _valuesc7K1fTo = {
			"includes": _includesOECCBhn,
		"join": _joinejZ7Ip5
	}
		const _returnValueDP7MsYn = await _cmdSgU3E3N.choices(_valuesc7K1fTo)
		const _returnValuehFx5nCW = await _HelppaPTZUy.subcommandDescription(_cmdSgU3E3N)
		const _cmdjPDFAS = "F6iLr4VTybQYeVXv4xk2PeN8gnMZuL8agKTDzIUOkyPRDbtraGFgfcQAhKfEdkplQ8xQW2mCdaJACM7BG";
		const _returnValueIPBAw8 = await _HelppaPTZUy.commandDescription(_cmdjPDFAS)
	});

	it('test for Help', async () => {
		const _HelpnxP4cIQ = new Help()
		const _flagsgvzgIR = "j8VNXlmsDJtw7mcvV8FvzcvfoZR";
		const _description7DLVhF = "TkEWweVLUgtn7KlYIRQu86WErKWIZzMVgpSicS9tEhmeQlVZG";
		const _cmdierfQi7 = new Option(_flagsgvzgIR, _description7DLVhF)
		const _argu0FBDua = {
		
	}
		const _returnValueMIqjyHR = await _cmdierfQi7.is(_argu0FBDua)
		const _fnUH4Ss1l = undefined;
		const _returnValuePFxN2ve = await _cmdierfQi7.argParser(_fnUH4Ss1l)
		const _returnValueCgmiwnP = await _HelpnxP4cIQ.subcommandDescription(_cmdierfQi7)
		const _arrayValueY4ybu6I = "JdhFe4ta2XjMVN34eIkXyEi7J3nAJ2MHKzQswRAP9UyzpxGV7PGvKAGr1DVUhmgFEbh70SGz9aBzvGnNCnVWrX";
		const _arrayValueDwC2n6R = null;
		const _arrayValuey5WDqVc = {
		
	}
		const _arrayValuePLBW80n = false;
		const _optionXJxMGNn = [_arrayValueY4ybu6I, _arrayValueDwC2n6R, _arrayValuey5WDqVc, _arrayValuePLBW80n]
		const _returnValuegEhJQ3n = await _HelpnxP4cIQ.optionDescription(_optionXJxMGNn)
		const _cmdd8RTylC = "1xACH29Z2kZgQQr2ClYleX3wziTNmXIGYQr4CuTKdszAgWWf8LXIqXLkpQdOHqKSnUdhxknyEUbWSuE4O0Q8YK4G";
		const _returnValueJH28ju6 = await _HelpnxP4cIQ.commandDescription(_cmdd8RTylC)
		const _cmdWIKd5xT = -2.7496234548071676;
		const _arrayValueizWNjdQ = null;
		const _arrayValueFMO4vWC = null;
		const _arrayValuevW0xTJS = undefined;
		const _sortSubcommandslczUFQ = [_arrayValueizWNjdQ, _arrayValueFMO4vWC, _arrayValuevW0xTJS]
		const _subcommandTermzOL1I5r = -2.2284055509744105;
		const _helperuv6BmWO = {
			"sortSubcommands": _sortSubcommandslczUFQ,
		"subcommandTerm": _subcommandTermzOL1I5r
	}
		const _returnValueb67H9wM = await _HelpnxP4cIQ.longestSubcommandTermLength(_cmdWIKd5xT, _helperuv6BmWO)
	});

	it('test for Help', async () => {
		const _HelpYQLeMED = new Help()
		const _returnValueAVR6fdX = 4.6010674750441805;
		const _matchi44hrg = () => { return _returnValueAVR6fdX };
		const _arrayValueVVwnYO = 9.550878680059817;
		const _returnValue0iXAdi = [_arrayValueVVwnYO]
		const _substrHffXKUX = () => { return _returnValue0iXAdi };
		const _strI2KyBhE = {
			"match": _matchi44hrg,
		"substr": _substrHffXKUX
	}
		const _widthgaNHQ9c = 7.926486714048632;
		const _indentEfaAFcM = 2.1064693602962627;
		const _minColumnWidthKrFNrsK = -8.140619565967999;
		const _returnValuekW9b16o = await _HelpYQLeMED.wrap(_strI2KyBhE, _widthgaNHQ9c, _indentEfaAFcM, _minColumnWidthKrFNrsK)
		const _arrayValueC9w1DYW = false;
		const _arrayValueJmdU5xk = -1.0703269186358835;
		const _arrayValuegikiTUH = [_arrayValueJmdU5xk]
		const _arrayValueix5pQYi = [_arrayValueC9w1DYW, _arrayValuegikiTUH]
		const _arrayValueiktBvps = 5.47399634277572;
		const _arrayValuenSLq26 = []
		const _arrayValueVAejEFS = [_arrayValueiktBvps, _arrayValuenSLq26]
		const _cmdSQJzcN = [_arrayValueix5pQYi, _arrayValueVAejEFS]
		const _arrayValuefZSMaSt = 3.3635717046255245;
		const _arrayValueKdhik22 = null;
		const _arrayValueJltgX9S = true;
		const _arrayValuem6UIMU = []
		const _arrayValueDGvs086 = [_arrayValueJltgX9S, _arrayValuem6UIMU]
		const _arrayValueXiYxNgq = "BHYcGWzlNzhrSLT";
		const _arrayValueR0AYZwN = false;
		const _arrayValueNA4N5bq = [_arrayValueDGvs086, _arrayValueXiYxNgq, _arrayValueR0AYZwN]
		const _helperz0QGb9f = [_arrayValuefZSMaSt, _arrayValueKdhik22, _arrayValueNA4N5bq]
		const _returnValueNxef15i = await _HelpYQLeMED.padWidth(_cmdSQJzcN, _helperz0QGb9f)
		const _arrayValuek4jsetI = undefined;
		const _arrayValueWhEtSXB = false;
		const _arrayValueeMrzld = "f8n7J0BVQKrnyGHG2LydDkxfJBxRNPLRsskdX712cJHa8K";
		const _cmdDAnYNhF = [_arrayValuek4jsetI, _arrayValueWhEtSXB, _arrayValueeMrzld]
		const _returnValueGN3C9ot = await _HelpYQLeMED.subcommandTerm(_cmdDAnYNhF)
	});

	it('test for Help', async () => {
		const _HelpsBVmSTW = new Help()
		const _name85lyv3 = null;
		const _cmda6STK3c = new Command(_name85lyv3)
		const _displayHelpKJY5RYv = {
		
	}
		const _returnValueAXJYCbe = await _cmda6STK3c.showHelpAfterError(_displayHelpKJY5RYv)
		const _strpC2w875 = undefined;
		const _returnValueylZzz18 = await _cmda6STK3c.usage(_strpC2w875)
		const _returnValue2xM5Sq = await _HelpsBVmSTW.visibleOptions(_cmda6STK3c)
		const _cmdMskUCDS = null;
		const _helperjLrv0Ht = new Help()
		const _arrayValueA4InD0A = undefined;
		const _returnValueCO8x7Cd = null;
		const _arrayValuef5NJdM9 = () => { return _returnValueCO8x7Cd };
		const _arrayValueTkrrZZv = -1.8194706026414345;
		const _argumentrrhyXxJ = [_arrayValueA4InD0A, _arrayValuef5NJdM9, _arrayValueTkrrZZv]
		const _returnValueIzOnqXO = await _helperjLrv0Ht.argumentDescription(_argumentrrhyXxJ)
		const _optionstlm6zf = {
		
	}
		const _returnValuefTDiN9Z = -2.6145615014718517;
		const __hasHelpOptionMReWSj2 = () => { return _returnValuefTDiN9Z };
		const __helpShortFlaghaJmfuz = false;
		const __findOptionzv6SqYr = "sVganD7TsoLMQrpFasxxC4BfOwEvcN4KEE";
		const __helpLongFlagpijO7fH = false;
		const _returnValueKvyvjGG = 4.66002679347403;
		const _createOption2bSeRX = () => { return _returnValueKvyvjGG };
		const _returnValueIo7InSR = null;
		const __helpDescriptionTwY8Ol = () => { return _returnValueIo7InSR };
		const __helpFlagsS6Hr49Q = {
		
	}
		const _cmdtcXlfrZ = {
			"options": _optionstlm6zf,
		"_hasHelpOption": __hasHelpOptionMReWSj2,
		"_helpShortFlag": __helpShortFlaghaJmfuz,
		"_findOption": __findOptionzv6SqYr,
		"_helpLongFlag": __helpLongFlagpijO7fH,
		"createOption": _createOption2bSeRX,
		"_helpDescription": __helpDescriptionTwY8Ol,
		"_helpFlags": __helpFlagsS6Hr49Q
	}
		const _returnValueAdF3Bq = await _helperjLrv0Ht.visibleOptions(_cmdtcXlfrZ)
		const _returnValueP0ZhIBG = await _HelpsBVmSTW.longestOptionTermLength(_cmdMskUCDS, _helperjLrv0Ht)
		const _cmdUY9AF9l = undefined;
		const _helperX2re9FU = new Help()
		const _arrayValueP6RUZ7X = 7.610630085212279;
		const _cmdpgtIe7t = [_arrayValueP6RUZ7X]
		const _returnValueaspSLXr = await _helperX2re9FU.visibleOptions(_cmdpgtIe7t)
		const _cmdtb25sYD = "W7A9zsTQJV6Q8h5EskvjqosE9fiFxm0qRzMJQJGllwz5DWfjF3wsbglqR8";
		const _returnValueAqDXYdQ = await _helperX2re9FU.visibleCommands(_cmdtb25sYD)
		const _returnValue3BDm1w = await _HelpsBVmSTW.longestSubcommandTermLength(_cmdUY9AF9l, _helperX2re9FU)
		const _arrayValueD0UxLWq = true;
		const _arrayValueGZrd3Vx = undefined;
		const _arrayValueSch5wVU = [_arrayValueD0UxLWq, _arrayValueGZrd3Vx]
		const _arrayValuebn0HcBF = null;
		const _arrayValueJ1Re2w = undefined;
		const _cmd3pKrKD = [_arrayValueSch5wVU, _arrayValuebn0HcBF, _arrayValueJ1Re2w]
		const _returnValuep3MPCIM = await _HelpsBVmSTW.visibleArguments(_cmd3pKrKD)
		const _cmdcu8zoBM = undefined;
		const _returnValueMeSZGKb = await _HelpsBVmSTW.visibleArguments(_cmdcu8zoBM)
	});

	it('test for Help', async () => {
		const _Helpk98LTdp = new Help()
		const _returnValueO830twp = null;
		const _sliceLF3yBdC = () => { return _returnValueO830twp };
		const _namefirRZu1 = {
			"slice": _sliceLF3yBdC
	}
		const _descriptionDkNJYi = undefined;
		const _optionoPaD4Pj = new Argument(_namefirRZu1, _descriptionDkNJYi)
		const _arrayValueNfkvDPs = "NoV4HthUaZILcmoTSMnXIrh3v1grAvRtBC8pdFbjPvbAufeVAiHpMQ5niaRfl2pVyi7zwplR9SxBYdFn64pl0SKa";
		const _valueM2SdNAu = [_arrayValueNfkvDPs]
		const _descriptionjWNZoI = {
		
	}
		const _returnValueZKIXLMS = await _optionoPaD4Pj.default(_valueM2SdNAu, _descriptionjWNZoI)
		const _returnValueXq5aHw5 = await _optionoPaD4Pj.argOptional()
		const _valuevKUySEG = "M";
		const _descriptiondpIZPgM = {
		
	}
		const _returnValueA4qKEeK = await _optionoPaD4Pj.default(_valuevKUySEG, _descriptiondpIZPgM)
		const _returnValuerUBtLTC = await _Helpk98LTdp.optionDescription(_optionoPaD4Pj)
		const _arrayValuecVZsEFe = undefined;
		const _arrayValuecRbTmJ2 = undefined;
		const _arrayValue5qobNF = -1.3123238382768996;
		const _arrayValueo0pRk4Q = [_arrayValuecVZsEFe, _arrayValuecRbTmJ2, _arrayValue5qobNF]
		const _cmdJyYEso0 = [_arrayValueo0pRk4Q]
		const _helperOIAXRc = new Help()
		const _arrayValueyasGyv2 = null;
		const _arrayValuet0Vejb = [_arrayValueyasGyv2]
		const _arrayValuePcsees = 3.79068370347275;
		const _arrayValueyVcgD6 = -1.703244146172704;
		const _arrayValueV2c5ztO = 6.079876313005922;
		const _arrayValuewpnbk2y = [_arrayValueyVcgD6, _arrayValueV2c5ztO]
		const _nameL1hmNoU = [_arrayValuet0Vejb, _arrayValuePcsees, _arrayValuewpnbk2y]
		const _cmdiXiaLJB = new Command(_nameL1hmNoU)
		const _subcommand9vA6DW = 2.3355495239567823;
		const _argsXquAen = null;
		const _returnValuePS5cplm = await _cmdiXiaLJB._executeSubCommand(_subcommand9vA6DW, _argsXquAen)
		const _errorRSt47yL = "gTdGGkZZH5kxcI4GPsoXcr6N57cchGcobD5lxgXvUxYetF7Tcn";
		const _returnValueTaTnEe3 = true;
		const _commandCPTnu56 = () => { return _returnValueTaTnEe3 };
		const _contextOptionsAmJhTH = {
			"error": _errorRSt47yL,
		"command": _commandCPTnu56
	}
		const _returnValueOMtOBZk = await _cmdiXiaLJB.help(_contextOptionsAmJhTH)
		const _returnValueRBwnWyc = await _helperOIAXRc.commandUsage(_cmdiXiaLJB)
		const _returnValuerrS6t4W = await _Helpk98LTdp.formatHelp(_cmdJyYEso0, _helperOIAXRc)
		const _cmdaLzs2Em = {
		
	}
		const _helperX0TPP76 = new Help()
		const _strGEjZwBY = false;
		const _widthYE4jjdx = -5.41120144077481;
		const _indentDX23Awi = -8.741338650036184;
		const _minColumnWidthEAUXA73 = -6.923489148291872;
		const _returnValuedeJUmEd = await _helperX0TPP76.wrap(_strGEjZwBY, _widthYE4jjdx, _indentDX23Awi, _minColumnWidthEAUXA73)
		const _returnValuemJWoNW3 = 6.409360294363239;
		const _argumentH9cl6B = () => { return _returnValuemJWoNW3 };
		const _returnValuewRB274l = await _helperX0TPP76.argumentTerm(_argumentH9cl6B)
		const _returnValue3qAOaz = await _Helpk98LTdp.longestOptionTermLength(_cmdaLzs2Em, _helperX0TPP76)
	});

	it('test for Help', async () => {
		const _HelpGcUhooS = new Help()
		const _arrayValuebM2P8e9 = undefined;
		const _namenWdvCFw = [_arrayValuebM2P8e9]
		const _cmdMPEXop = new Command(_namenWdvCFw)
		const _arrayValueHNiK1p4 = undefined;
		const _arrayValueKhbrgR1 = -1.477819778229458;
		const _arrayValueWrbpZuC = null;
		const _arrayValueS9TeJD = true;
		const _arrayValueSeITwFw = [_arrayValueHNiK1p4, _arrayValueKhbrgR1, _arrayValueWrbpZuC, _arrayValueS9TeJD]
		const _arrayValueM0snELw = "uw4fpQGKsnnUq8RDuz7bwf7XPdjfANz9IiMm5W0YyqGcGsCY5eQh";
		const _returnValuejsAyj6Y = false;
		const _arrayValuesLKzzG4 = () => { return _returnValuejsAyj6Y };
		const _aliasesnR7xH3r = [_arrayValueSeITwFw, _arrayValueM0snELw, _arrayValuesLKzzG4]
		const _returnValueFr5aVjZ = await _cmdMPEXop.aliases(_aliasesnR7xH3r)
		const _returnValueMVOUm6B = await _HelpGcUhooS.subcommandTerm(_cmdMPEXop)
		const _returnValuegPaIDaK = 0.317763823083137;
		const _optionUthqM3M = () => { return _returnValuegPaIDaK };
		const _returnValueBPerpH = await _HelpGcUhooS.optionDescription(_optionUthqM3M)
		const _returnValuezwIGxNA = null;
		const _matcheYNaa5G = () => { return _returnValuezwIGxNA };
		const _substreTm0SpL = {
		
	}
		const _strkgUlJGy = {
			"match": _matcheYNaa5G,
		"substr": _substreTm0SpL
	}
		const _widthe1iFnAh = -6.515914548702696;
		const _arrayValuegpg2ZGd = undefined;
		const _arrayValuehzLlftD = undefined;
		const _returnValuewMpCai0 = "zKwIiWSrIyjXkHIIIlt60DExrdkmItyXpB7J5BpE";
		const _returnValueAHGk7eZ = () => { return _returnValuewMpCai0 };
		const _arrayValueXYwcDn5 = () => { return _returnValueAHGk7eZ };
		const _indentYSBr6Xt = [_arrayValuegpg2ZGd, _arrayValuehzLlftD, _arrayValueXYwcDn5]
		const _minColumnWidthvNKX3T0 = 0.039406996330477284;
		const _returnValueoADiODJ = await _HelpGcUhooS.wrap(_strkgUlJGy, _widthe1iFnAh, _indentYSBr6Xt, _minColumnWidthvNKX3T0)
	});

	it('test for Help', async () => {
		const _Help1i4D8b = new Help()
		const _namezolnJw = {
		
	}
		const _cmdGENMb8Y = new Command(_namezolnJw)
		const _strHO5O0z = undefined;
		const _returnValueiKTQuav = await _cmdGENMb8Y.usage(_strHO5O0z)
		const _namePSrTFie = -5.543735178883866;
		const _descriptionhoPQ1eo = undefined;
		const _returnValueSRzPd42 = await _cmdGENMb8Y.createArgument(_namePSrTFie, _descriptionhoPQ1eo)
		const _strsqcHRHA = undefined;
		const _returnValuecvEIJXy = await _cmdGENMb8Y.usage(_strsqcHRHA)
		const _returnValueJ2aYf0 = await _Help1i4D8b.visibleCommands(_cmdGENMb8Y)
		const _arrayValuepnuNfKE = undefined;
		const _arrayValuem6am9Ve = -0.4780138222843693;
		const _arrayValueSUCUd8I = [_arrayValuepnuNfKE, _arrayValuem6am9Ve]
		const _arrayValuewyDfNp2 = 8.549700465438526;
		const _arrayValueyD0M15O = undefined;
		const _arrayValueh3bRWsE = true;
		const _arrayValueiqNdjbz = 9.502908095743933;
		const _arrayValueHBTnhN = -4.626036091968851;
		const _arrayValueu5UAdK = "l5";
		const _arrayValueaPfqpm = [_arrayValueiqNdjbz, _arrayValueHBTnhN, _arrayValueu5UAdK]
		const _arrayValueniNZqn6 = [_arrayValuewyDfNp2, _arrayValueyD0M15O, _arrayValueh3bRWsE, _arrayValueaPfqpm]
		const _arrayValueNsGjDqG = true;
		const _cmdwENKzDO = [_arrayValueSUCUd8I, _arrayValueniNZqn6, _arrayValueNsGjDqG]
		const _helperkt2oqbv = new Help()
		const _namedQrJEaS = "C4aJusxGuMzB3gf4rwZjy6lat542nOvFHmnIW7Hwami3rVjywkTbZwIpz9xS81SQEc9fCC1VoJN";
		const _cmdEK7vm5s = new Command(_namedQrJEaS)
		const _nameAe1pJ3V = "HjLM4teWNalQMJOqQ";
		const _returnValueKmcdzMn = []
		const _descriptionEiwNjCL = () => { return _returnValueKmcdzMn };
		const _returnValueeRL3a1m = await _cmdEK7vm5s.createArgument(_nameAe1pJ3V, _descriptionEiwNjCL)
		const _argFBJ1XXS = true;
		const _returnValuebqj1ScJ = await _cmdEK7vm5s._findOption(_argFBJ1XXS)
		const _arrayValuee3Lobup = -2.6499647879171118;
		const _arrayValuerRGiGIX = "dnSxnODMnihFhP3uBQGsK58";
		const _subcommandKzf3HOq = [_arrayValuee3Lobup, _arrayValuerRGiGIX]
		const _argsHTHFNS = undefined;
		const _returnValuevBIgEL7 = await _cmdEK7vm5s._executeSubCommand(_subcommandKzf3HOq, _argsHTHFNS)
		const _keyHmCFrzw = null;
		const _value7fwQuF = undefined;
		const _sourcef2kzqkp = true;
		const _returnValuehtjpYxS = await _cmdEK7vm5s.setOptionValueWithSource(_keyHmCFrzw, _value7fwQuF, _sourcef2kzqkp)
		const _returnValueTU17Z9K = await _helperkt2oqbv.subcommandDescription(_cmdEK7vm5s)
		const _namelvWZk6y = false;
		const _argumentdFS1y6J = new Command(_namelvWZk6y)
		const _returnValueXvVLT4j = await _argumentdFS1y6J.createHelp()
		const _returnValueOWwjrEA = await _helperkt2oqbv.argumentTerm(_argumentdFS1y6J)
		const _cmdblrvBi = null;
		const _helperO5dXoI9 = "fT1XqmsdK5O2wuTZ0k5C29sxGcyr6cmZsB34ZQJLkhvOgUQQRx1In5FSNFejYcL266B3fkKJ5VrMpa2dfBYEVYInMDBs";
		const _returnValueSudcW7c = await _helperkt2oqbv.longestSubcommandTermLength(_cmdblrvBi, _helperO5dXoI9)
		const _arrayValueafKtyBs = undefined;
		const _arrayValuekqizIMZ = undefined;
		const _arrayValueG1nBatK = {
		
	}
		const _arrayValuege7bUg5 = undefined;
		const _arrayValueKr9cgt = [_arrayValueG1nBatK, _arrayValuege7bUg5]
		const _arrayValuetjqkQDx = [_arrayValuekqizIMZ, _arrayValueKr9cgt]
		const _returnValueEZnpRq = []
		const _returnValuesa1FEtI = () => { return _returnValueEZnpRq };
		const _arrayValuejNmYX9 = () => { return _returnValuesa1FEtI };
		const _arrayValueHggbnLV = null;
		const _arrayValued3sN7Dv = "rYHCZcY6tDoxoFeSbF6ssc5QWmqAn1ufppDDD6E44JaxxfBv8ZO";
		const _returnValueHHXuyEu = [_arrayValuejNmYX9, _arrayValueHggbnLV, _arrayValued3sN7Dv]
		const _arrayValueEwx8vfD = () => { return _returnValueHHXuyEu };
		const _arrayValuetPY4pGi = {
		
	}
		const _cmdcuNBDUl = [_arrayValueafKtyBs, _arrayValuetjqkQDx, _arrayValueEwx8vfD, _arrayValuetPY4pGi]
		const _returnValueKafr3Zc = await _helperkt2oqbv.commandUsage(_cmdcuNBDUl)
		const _returnValueYaVCYr = "2";
		const _descriptionN5aXUEF = () => { return _returnValueYaVCYr };
		const _cmdPpxLMNx = {
			"description": _descriptionN5aXUEF
	}
		const _returnValuecGjLIK1 = await _helperkt2oqbv.commandDescription(_cmdPpxLMNx)
		const _returnValueHsdgy6O = await _Help1i4D8b.longestArgumentTermLength(_cmdwENKzDO, _helperkt2oqbv)
	});

	it('test for Help', async () => {
		const _HelpXjHgW1 = new Help()
		const _flagsE4ju45n = "NqHNW4zXQ5q2wzba83cPsdUgoqVhufICX3uwxyB7DIJ7oLA9WETp9nzFwYC427p4RAQq2VDnVSz4U9Zbone245Mxyq5TWuCA";
		const _descriptionlDENZrs = "EYqKBaFHpO9jx4C6hPvoIqFrY7h2WDoT9Gf6m1wGIwsBrZXDp2J3cUsWjhB";
		const _argumentOTS39i = new Option(_flagsE4ju45n, _descriptionlDENZrs)
		const _hideIjEGr2s = false;
		const _returnValuelVXFcJm = await _argumentOTS39i.hideHelp(_hideIjEGr2s)
		const _returnValueL3GirSb = true;
		const _includesBpfG7Ej = () => { return _returnValueL3GirSb };
		const _arrayValueEmh02tM = -0.28729241485706325;
		const _arrayValuevlTdASx = undefined;
		const _returnValueo3XDc0k = [_arrayValueEmh02tM, _arrayValuevlTdASx]
		const _joincjVEAt6 = () => { return _returnValueo3XDc0k };
		const _valuesbYpCmh9 = {
			"includes": _includesBpfG7Ej,
		"join": _joincjVEAt6
	}
		const _returnValueQHGyzqu = await _argumentOTS39i.choices(_valuesbYpCmh9)
		const _arrayValueHab8ERa = true;
		const _values9Nr4Is = [_arrayValueHab8ERa]
		const _returnValueQWb5zI8 = await _argumentOTS39i.choices(_values9Nr4Is)
		const _mandatoryTZoxe80 = false;
		const _returnValuecIVhZmh = await _argumentOTS39i.makeOptionMandatory(_mandatoryTZoxe80)
		const _returnValueMKYzl4t = await _HelpXjHgW1.argumentDescription(_argumentOTS39i)
		const _cmd8NnjJV = "Dq3DkZz2RNvkhnSFf7L2DX1EYFAa9tlODvVUP";
		const _returnValueXElsyHV = await _HelpXjHgW1.visibleArguments(_cmd8NnjJV)
		const _nameMy1wnzT = undefined;
		const _cmdWCmvRO7 = new Command(_nameMy1wnzT)
		const _flagsI4s5Yzg = {
		
	}
		const _descriptionawOsuwy = {
		
	}
		const _returnValuehwmR3f2 = await _cmdWCmvRO7.createOption(_flagsI4s5Yzg, _descriptionawOsuwy)
		const _returnValueUu99IWL = await _HelpXjHgW1.visibleOptions(_cmdWCmvRO7)
	});

	it('test for Help', async () => {
		const _HelpZ32hPnK = new Help()
		const _arrayValueKBQBs5V = "D1okNrzWGuw10EjfUnpxOMku1k8";
		const _argumentZOk5RQx = [_arrayValueKBQBs5V]
		const _returnValueJJyMDk = await _HelpZ32hPnK.argumentDescription(_argumentZOk5RQx)
		const _nameICdQDiq = "BbB11m0oS4EozhWbDugtUBk4wEnVgAB10CDny2nRd";
		const _arrayValue4qs6wf = -3.85926609021673;
		const _descriptionrQ3j7Kp = [_arrayValue4qs6wf]
		const _argumentMBNpx6J = new Argument(_nameICdQDiq, _descriptionrQ3j7Kp)
		const _fnb6D6SUd = undefined;
		const _returnValueV1r5KcM = await _argumentMBNpx6J.argParser(_fnb6D6SUd)
		const _returnValueVcut9oK = await _argumentMBNpx6J.argRequired()
		const _returnValueNPteI8M = await _argumentMBNpx6J.name()
		const _valuenwiTBUY = []
		const _arrayValueA6Nx8ki = "D15f4wr0h1sOYQBAezkM";
		const _returnValueCjZdSzz = [_arrayValueA6Nx8ki]
		const _descriptionOpjW8T1 = () => { return _returnValueCjZdSzz };
		const _returnValueKhm1Vuy = await _argumentMBNpx6J.default(_valuenwiTBUY, _descriptionOpjW8T1)
		const _returnValuebTph4in = await _HelpZ32hPnK.argumentDescription(_argumentMBNpx6J)
		const _returnValueMvD7Ii9 = -7.763581079581318;
		const _returnValuetv3VfhK = () => { return _returnValueMvD7Ii9 };
		const _argumentwyVJ1Bm = () => { return _returnValuetv3VfhK };
		const _returnValueKECcNRx = await _HelpZ32hPnK.argumentDescription(_argumentwyVJ1Bm)
		const _cmdYXNU8aa = null;
		const _helper9hxIpi = new Help()
		const _arrayValueasLzqRn = undefined;
		const _arrayValueJCKxie = {
		
	}
		const _cmdRS34C2m = [_arrayValueasLzqRn, _arrayValueJCKxie]
		const _sortSubcommandsokyqqfz = undefined;
		const _arrayValuerAFBCuH = "PBW07hNdouCYODUsWyPvCuX6Mc";
		const _arrayValueBYf7H7x = null;
		const _returnValueGm4oQE8 = [_arrayValuerAFBCuH, _arrayValueBYf7H7x]
		const _subcommandTermIS6154h = () => { return _returnValueGm4oQE8 };
		const _helperQSzeIZ = {
			"sortSubcommands": _sortSubcommandsokyqqfz,
		"subcommandTerm": _subcommandTermIS6154h
	}
		const _returnValueLqotoQ = await _helper9hxIpi.formatHelp(_cmdRS34C2m, _helperQSzeIZ)
		const _cmdRzWtrz1 = undefined;
		const _sortSubcommandsrYDBbMm = true;
		const _returnValuemMt8z36 = "tqILl99hvxmgnQ2mL84MxK7ELeCwOdN2Rok54yYFF2KCUuIMz5UVCeF";
		const _subcommandTermgcMxH2D = () => { return _returnValuemMt8z36 };
		const _helperQbFkh62 = {
			"sortSubcommands": _sortSubcommandsrYDBbMm,
		"subcommandTerm": _subcommandTermgcMxH2D
	}
		const _returnValueoaOR4HC = await _helper9hxIpi.formatHelp(_cmdRzWtrz1, _helperQbFkh62)
		const __namezdnhxU = -4.823555303054574;
		const __aliasesJPjmiIz = {
		
	}
		const _arrayValuerHfZUvR = -3.86477852704531;
		const _returnValueR4v9Zy = true;
		const _arrayValueOTmSJB6 = () => { return _returnValueR4v9Zy };
		const _parentwv8TM9c = [_arrayValuerHfZUvR, _arrayValueOTmSJB6]
		const _returnValuerIjXYdT = true;
		const _usageHxeFA9z = () => { return _returnValuerIjXYdT };
		const _cmdjacfwoR = {
			"_name": __namezdnhxU,
		"_aliases": __aliasesJPjmiIz,
		"parent": _parentwv8TM9c,
		"usage": _usageHxeFA9z
	}
		const _returnValueAz4fOtV = await _helper9hxIpi.commandUsage(_cmdjacfwoR)
		const _returnValuemveT61T = await _HelpZ32hPnK.padWidth(_cmdYXNU8aa, _helper9hxIpi)
		const _returnValueNsOFhOw = true;
		const _descriptiontlOAeXH = () => { return _returnValueNsOFhOw };
		const _cmdP0IRjfV = {
			"description": _descriptiontlOAeXH
	}
		const _returnValueOOYPIp8 = await _HelpZ32hPnK.subcommandDescription(_cmdP0IRjfV)
	});
})