export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpgggzQkN = new Help()
		const _cmdZgzKcGf = undefined;
		const _returnValueewaA7PO = await _HelpgggzQkN.visibleArguments(_cmdZgzKcGf)
	});

	it('test for Help', async () => {
		const _HelpZnkbmUX = new Help()
		const _cmdryOW6b = "i2CZOhj";
		const _arrayValueJ4xUld9 = false;
		const _arrayValueiPTzae0 = {
		
	}
		const _helperPaUl85 = [_arrayValueJ4xUld9, _arrayValueiPTzae0]
		const _returnValueMrWhHAt = await _HelpZnkbmUX.longestOptionTermLength(_cmdryOW6b, _helperPaUl85)
		const _cmdRo6D516 = true;
		const _helperIBWcCRL = null;
		const _returnValued3LvsSM = await _HelpZnkbmUX.formatHelp(_cmdRo6D516, _helperIBWcCRL)
	});

	it('test for Help', async () => {
		const _HelpulKgH7 = new Help()
		const _cmdXNGPlyY = -6.345742781055666;
		const _helpert56tz9U = null;
		const _returnValueRp0FU1U = await _HelpulKgH7.longestSubcommandTermLength(_cmdXNGPlyY, _helpert56tz9U)
		const _cmd6wDTNA = null;
		const _helperORLbFre = "jbhXpxveqzOE0wE2qAPF9mH1AFcWEfOK5js4d";
		const _returnValueekuWFAh = await _HelpulKgH7.longestOptionTermLength(_cmd6wDTNA, _helperORLbFre)
		const _strAQOYdKB = null;
		const _arrayValueOBs86I3 = {
		
	}
		const _arrayValuedJ9UdDT = null;
		const _widthaRDMvuk = [_arrayValueOBs86I3, _arrayValuedJ9UdDT]
		const _indenta5hlHJO = false;
		const _minColumnWidthcVJtDqg = 6.87839129545986;
		const _returnValuewl9B3I1 = await _HelpulKgH7.wrap(_strAQOYdKB, _widthaRDMvuk, _indenta5hlHJO, _minColumnWidthcVJtDqg)
	});

	it('test for Help', async () => {
		const _HelpgAmNZge = new Help()
		const _returnValueQxbWi6b = true;
		const _cmdPXIoEAE = () => { return _returnValueQxbWi6b };
		const _arrayValueSlGgBa = true;
		const _arrayValueoXlcSgY = {
		
	}
		const _returnValueLmQ86M = true;
		const _arrayValueizJTzFi = () => { return _returnValueLmQ86M };
		const _arrayValuepS1A1Ao = 9.345783685600427;
		const _arrayValueedcUJ1o = [_arrayValueoXlcSgY, _arrayValueizJTzFi, _arrayValuepS1A1Ao]
		const _arrayValueB58L5h = undefined;
		const _arrayValuesUYTGcq = -8.807586439970725;
		const _helperY4ur7pU = [_arrayValueSlGgBa, _arrayValueedcUJ1o, _arrayValueB58L5h, _arrayValuesUYTGcq]
		const _returnValuehfRdsmG = await _HelpgAmNZge.formatHelp(_cmdPXIoEAE, _helperY4ur7pU)
		const _cmdcWKQGri = undefined;
		const _returnValueWycO4zz = await _HelpgAmNZge.subcommandDescription(_cmdcWKQGri)
		const _cmdQuaOQMt = false;
		const _helperwfgVFm7 = undefined;
		const _returnValuex9aGsvN = await _HelpgAmNZge.padWidth(_cmdQuaOQMt, _helperwfgVFm7)
		const _cmdKqu2W7u = "Ju7wnVmyYxiA21dkQgIR5iP4g0GkiJp1SBSt2Uv27M41X4q0tD8613iTGRqJoFTJCfBXavNLMv8LWMwNPxGrSHCCWPEAbQJLK";
		const _returnValuebTVJCM5 = await _HelpgAmNZge.subcommandDescription(_cmdKqu2W7u)
	});

	it('test for Help', async () => {
		const _HelpH7ecnkQ = new Help()
		const _cmdClSIqAd = null;
		const _returnValueHTx8iYl = await _HelpH7ecnkQ.visibleOptions(_cmdClSIqAd)
		const _cmdTpdmXax = -3.191644748670427;
		const _returnValuekQEyYBp = await _HelpH7ecnkQ.subcommandTerm(_cmdTpdmXax)
		const _arrayValuedJkj9eF = null;
		const _arrayValueChmeSL4 = true;
		const _arrayValueSagK67f = true;
		const _arrayValueUOqtQ2z = 2.320502632127706;
		const _arrayValuec9y1Lc2 = 2.278926222664605;
		const _arrayValuettu2rVU = [_arrayValueSagK67f, _arrayValueUOqtQ2z, _arrayValuec9y1Lc2]
		const _arrayValueRHQpi25 = undefined;
		const _arrayValueYry9BRx = [_arrayValuettu2rVU, _arrayValueRHQpi25]
		const _arrayValuebtynEtc = [_arrayValuedJkj9eF, _arrayValueChmeSL4, _arrayValueYry9BRx]
		const _arrayValuejgukQJu = true;
		const _cmdxc333r9 = [_arrayValuebtynEtc, _arrayValuejgukQJu]
		const _returnValuessGjBkA = await _HelpH7ecnkQ.commandDescription(_cmdxc333r9)
		const _cmdV4RVPL7 = undefined;
		const _helperNfbzaxE = "YC2TYh7J7BfrFRhsuyIjfrT44PCZrsp4XJ4cN3XRH";
		const _returnValueMbp46gF = await _HelpH7ecnkQ.formatHelp(_cmdV4RVPL7, _helperNfbzaxE)
		const _arrayValueoJHLqJ = "QVKNhsv0CvFgB6biR9x1DyWLWGQaQjmK9KzxP";
		const _arrayValueeJJLOI = null;
		const _cmdnWVkh2 = [_arrayValueoJHLqJ, _arrayValueeJJLOI]
		const _returnValueXbsjim = await _HelpH7ecnkQ.commandUsage(_cmdnWVkh2)
	});

	it('test for Help', async () => {
		const _HelpRH5oNaN = new Help()
		const _optionfcuFQCG = -3.0704730317629734;
		const _returnValueG1iBhbC = await _HelpRH5oNaN.optionDescription(_optionfcuFQCG)
		const _cmdSEga7G = 5.81378580351325;
		const _returnValueAepYaFj = await _HelpRH5oNaN.visibleCommands(_cmdSEga7G)
		const _cmdN7mz84 = "lM7gqxMVgEMfQyKO4kmRNUNJ7BUYj5Pk1LQw24XGJuVkswKi4LOmV6gl3Fz1WYtv77TguIH";
		const _helperiuGtmW = null;
		const _returnValueAcnp0O1 = await _HelpRH5oNaN.longestOptionTermLength(_cmdN7mz84, _helperiuGtmW)
		const _cmdFnuAqDD = null;
		const _helperPYdg5h = false;
		const _returnValuepwkya3A = await _HelpRH5oNaN.longestSubcommandTermLength(_cmdFnuAqDD, _helperPYdg5h)
	});

	it('test for Help', async () => {
		const _HelpxAqo2Cf = new Help()
		const _cmdS1k87Fn = {
		
	}
		const _returnValueQ4yz4BZ = await _HelpxAqo2Cf.commandDescription(_cmdS1k87Fn)
		const _cmdDS2mTZX = null;
		const _returnValueN6tmCBc = await _HelpxAqo2Cf.commandDescription(_cmdDS2mTZX)
	});

	it('test for Help', async () => {
		const _HelpBUR6LLE = new Help()
		const _cmdPkKCcjU = undefined;
		const _helpergLiDVS4 = "SQ5gozpneDlU9FluaoBWdE5sonkbS2NqNgU4D4i";
		const _returnValueLFpNIM = await _HelpBUR6LLE.padWidth(_cmdPkKCcjU, _helpergLiDVS4)
		const _argumentMx5LQMD = []
		const _returnValueh9GFvH6 = await _HelpBUR6LLE.argumentTerm(_argumentMx5LQMD)
	});

	it('test for Help', async () => {
		const _HelpzqlTK3q = new Help()
		const _returnValueY15RU2 = {
		
	}
		const _cmdcMSXNCL = () => { return _returnValueY15RU2 };
		const _helpernC5XB1C = "FYpVMafUhRnzNKV1mgUgXtD4v8qI3BRgdrlEeKa4g9r7KwcRICULSLTvq8HkzB";
		const _returnValueiMXH5CC = await _HelpzqlTK3q.longestArgumentTermLength(_cmdcMSXNCL, _helpernC5XB1C)
	});

	it('test for Help', async () => {
		const _HelpGd0Hq9m = new Help()
		const _arrayValueOhtIVK = true;
		const _arrayValuez8tfMWu = "dj9ffCqF998nhKmRemEdCqphdVEgUjtDObHN64Cu6sSuSZ3hvlSazPCwN2YBHnHO1bkPngVzdDOcBh4p7rVUKJL";
		const _arrayValuecAXmrRH = {
		
	}
		const _optionOkQetZA = [_arrayValueOhtIVK, _arrayValuez8tfMWu, _arrayValuecAXmrRH]
		const _returnValuee89NtdQ = await _HelpGd0Hq9m.optionTerm(_optionOkQetZA)
	});

	it('test for Help', async () => {
		const _HelpQzOfHRS = new Help()
		const _cmdYXgHC5 = null;
		const _returnValueZfUgG4q = await _HelpQzOfHRS.subcommandDescription(_cmdYXgHC5)
	});

	it('test for Help', async () => {
		const _HelpbJjqF3d = new Help()
		const _strx2JBzui = "NhgzDuF9hn1daA3cmlBaBhKlUwZaU7TpkI";
		const _widthzMXQC5K = false;
		const _indentYTmkxI0 = false;
		const _minColumnWidthDjZykOI = null;
		const _returnValuezS244mi = await _HelpbJjqF3d.wrap(_strx2JBzui, _widthzMXQC5K, _indentYTmkxI0, _minColumnWidthDjZykOI)
		const _stri0XK4ud = "S6H4TQPErQPdCVC0DuIXcRkeq56tqKtuKEpnpWrdSin4AID93EabrtNSCyLig1W46PmUUStpNbW";
		const _returnValueWKCrcDy = true;
		const _returnValuehQ9aR7G = () => { return _returnValueWKCrcDy };
		const _widthJOZvu13 = () => { return _returnValuehQ9aR7G };
		const _indentS60KaJh = false;
		const _arrayValuekQGCafe = true;
		const _arrayValue83nMgZ = "Tm3";
		const _minColumnWidthDGYwFF = [_arrayValuekQGCafe, _arrayValue83nMgZ]
		const _returnValuezTdsiUR = await _HelpbJjqF3d.wrap(_stri0XK4ud, _widthJOZvu13, _indentS60KaJh, _minColumnWidthDGYwFF)
	});

	it('test for Help', async () => {
		const _Help9hJ2yw = new Help()
		const _cmdXd6FbbR = "UP";
		const _returnValuemyinwyS = await _Help9hJ2yw.subcommandTerm(_cmdXd6FbbR)
		const _cmdMjEX9yY = null;
		const _helperkXHsY8Y = false;
		const _returnValueWVwqHTR = await _Help9hJ2yw.longestArgumentTermLength(_cmdMjEX9yY, _helperkXHsY8Y)
		const _cmdTrWPwJ6 = 4.928991818752788;
		const _returnValueSM0k2pd = await _Help9hJ2yw.subcommandTerm(_cmdTrWPwJ6)
	});

	it('test for Help', async () => {
		const _HelpkLDmFIo = new Help()
		const _argumentNExB2iF = "x7VrE7tbD73hJYIb";
		const _returnValuegJXsaCn = await _HelpkLDmFIo.argumentDescription(_argumentNExB2iF)
		const _cmdKVqk7MZ = "EUjxdboj1JZLGdtlAEGnyjbLPhKSe7zqNLa3K";
		const _returnValuerCu4qR8 = true;
		const _helpersiW4UsU = () => { return _returnValuerCu4qR8 };
		const _returnValueNeAjWas = await _HelpkLDmFIo.formatHelp(_cmdKVqk7MZ, _helpersiW4UsU)
	});

	it('test for Help', async () => {
		const _Helplz3MFa = new Help()
		const _argumentRA2jgNd = null;
		const _returnValuelhpyMJ7 = await _Helplz3MFa.argumentTerm(_argumentRA2jgNd)
		const _argumentHWFEjHW = false;
		const _returnValuescQK5Po = await _Helplz3MFa.argumentDescription(_argumentHWFEjHW)
		const _argumenthKxl7pR = {
		
	}
		const _returnValuefq402Rg = await _Helplz3MFa.argumentDescription(_argumenthKxl7pR)
		const _arrayValueRYTeTpM = false;
		const _arrayValues8HEryp = [_arrayValueRYTeTpM]
		const _arrayValueb9tcjaz = "4F";
		const _arrayValueKKdrIGu = "2q0Yqjlbjzk5OMQtnvF5Y6G";
		const _cmdjkE2T9w = [_arrayValues8HEryp, _arrayValueb9tcjaz, _arrayValueKKdrIGu]
		const _helperQGMXl2C = null;
		const _returnValueuPBJQZv = await _Helplz3MFa.longestArgumentTermLength(_cmdjkE2T9w, _helperQGMXl2C)
	});

	it('test for Help', async () => {
		const _HelpnJpuqNe = new Help()
		const _cmdCUSU7sL = "U29J4hgPvOyVCfhKeQNXhxGM5xvmz0QeyM";
		const _returnValuePt00X19 = await _HelpnJpuqNe.commandUsage(_cmdCUSU7sL)
		const _argumentI1RdJOw = false;
		const _returnValueATOjPzM = await _HelpnJpuqNe.argumentDescription(_argumentI1RdJOw)
	});

	it('test for Help', async () => {
		const _HelpQM1rItK = new Help()
		const _strqJoUgH = "lWzKkbFG43QF8";
		const _width9YViRh = []
		const _indentelqkJe = null;
		const _minColumnWidthiqlDwn = 4.0517845992305155;
		const _returnValueqfRcEeA = await _HelpQM1rItK.wrap(_strqJoUgH, _width9YViRh, _indentelqkJe, _minColumnWidthiqlDwn)
		const _cmdx0HJH7P = undefined;
		const _returnValueJ6rlpSU = await _HelpQM1rItK.subcommandDescription(_cmdx0HJH7P)
		const _cmduScUaw6 = "pIPfrNlvAkRe9JSkbiYAA44MMp3EI0BP4dS6jdltRtBn3iAEx4GxDvEsCtMheczG2CRstns";
		const _helperpkc9uHx = false;
		const _returnValueiPPG88m = await _HelpQM1rItK.longestArgumentTermLength(_cmduScUaw6, _helperpkc9uHx)
		const _returnValueFbJH9Pb = undefined;
		const _cmdRwgfyAC = () => { return _returnValueFbJH9Pb };
		const _helperFNvK3If = -3.5170171869353553;
		const _returnValueSzm4n1p = await _HelpQM1rItK.padWidth(_cmdRwgfyAC, _helperFNvK3If)
	});
})