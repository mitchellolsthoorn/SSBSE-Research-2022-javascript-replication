export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Help2eh1j3 = new Help()
		const _cmdS6LcLR9 = true;
		const _returnValueEZPhkQo = "7kPyTuBRO3QLTeKwwprljSF2uT1jxB6Pw";
		const _helperhJpzaR = () => { return _returnValueEZPhkQo };
		const _returnValueKfiK34H = await _Help2eh1j3.longestArgumentTermLength(_cmdS6LcLR9, _helperhJpzaR)
		const _optionX7xBGO = {
		
	}
		const _returnValueWYh4KgS = await _Help2eh1j3.optionDescription(_optionX7xBGO)
		const _optionP21pwQx = undefined;
		const _returnValuehvnkLqa = await _Help2eh1j3.optionDescription(_optionP21pwQx)
	});

	it('test for Help', async () => {
		const _Helpj6VZull = new Help()
		const _cmdQDrYUlr = true;
		const _returnValuetsGuiXR = undefined;
		const _arrayValueR1kCfIE = () => { return _returnValuetsGuiXR };
		const _arrayValuecRQTTrZ = {
		
	}
		const _arrayValuewy9rrNQ = -5.547113774225613;
		const _arrayValues6xaaKV = null;
		const _arrayValuelF7zqmR = null;
		const _arrayValueawVKKZP = [_arrayValues6xaaKV, _arrayValuelF7zqmR]
		const _arrayValueKviDoNL = undefined;
		const _arrayValueJ7MmjMc = null;
		const _arrayValuefZnmil7 = [_arrayValuewy9rrNQ, _arrayValueawVKKZP, _arrayValueKviDoNL, _arrayValueJ7MmjMc]
		const _helperMHKHgMo = [_arrayValueR1kCfIE, _arrayValuecRQTTrZ, _arrayValuefZnmil7]
		const _returnValueNxnJTVQ = await _Helpj6VZull.longestOptionTermLength(_cmdQDrYUlr, _helperMHKHgMo)
		const _cmdmHL9Ui = 8.501843914405814;
		const _returnValueydQeMW3 = await _Helpj6VZull.visibleOptions(_cmdmHL9Ui)
	});

	it('test for Help', async () => {
		const _Helpf9FbcAm = new Help()
		const _cmdLMl9SXa = false;
		const _arrayValueByeEwkg = {
		
	}
		const _arrayValueCpUkkkl = undefined;
		const _helperVpl2Nxf = [_arrayValueByeEwkg, _arrayValueCpUkkkl]
		const _returnValueE0avYs4 = await _Helpf9FbcAm.formatHelp(_cmdLMl9SXa, _helperVpl2Nxf)
		const _cmdB8bpEIH = {
		
	}
		const _helpervo5jZX = null;
		const _returnValueqv4p8B5 = await _Helpf9FbcAm.longestOptionTermLength(_cmdB8bpEIH, _helpervo5jZX)
		const _optionCenpJr = "Lf9AmrbyCj6laq41WDKsAr6OsgaObmxcTjPrhcNt6IFNc09aBEsTdFThGUrXeK5LBUduJCD1v7wmQR5ESp";
		const _returnValueMpeD2Tg = await _Helpf9FbcAm.optionTerm(_optionCenpJr)
	});

	it('test for Help', async () => {
		const _HelpOqkj9qs = new Help()
		const _cmdiL0vWW2 = undefined;
		const _returnValueizJiVjx = await _HelpOqkj9qs.subcommandTerm(_cmdiL0vWW2)
		const _cmdrnZHzRf = null;
		const _helper22ixBv = "P6l7zItm2N8a9ZjcDgcVQu1sv0PdpQ0GjbvOlyT59jz1AQaJOXAjaHLrkjloYOHysnx";
		const _returnValueBV7HAcm = await _HelpOqkj9qs.formatHelp(_cmdrnZHzRf, _helper22ixBv)
		const _arrayValueY9kt0nc = undefined;
		const _arrayValuekWSIgz7 = true;
		const _arrayValuewKy079Y = []
		const _arrayValuedTz46jg = -1.2807512970519923;
		const _cmdP2hkiWI = [_arrayValueY9kt0nc, _arrayValuekWSIgz7, _arrayValuewKy079Y, _arrayValuedTz46jg]
		const _helperblcQB1I = null;
		const _returnValuelOXisLj = await _HelpOqkj9qs.longestOptionTermLength(_cmdP2hkiWI, _helperblcQB1I)
		const _cmdDkhZnAp = true;
		const _returnValuexHf4qk3 = await _HelpOqkj9qs.visibleOptions(_cmdDkhZnAp)
	});

	it('test for Help', async () => {
		const _HelpVvRXmsj = new Help()
		const _strBOcl3np = -2.0057151117007344;
		const _widthcwNplv8 = {
		
	}
		const _indenttcOrWM = -4.751834162039198;
		const _minColumnWidthwamtHw = null;
		const _returnValueQTUf3Xb = await _HelpVvRXmsj.wrap(_strBOcl3np, _widthcwNplv8, _indenttcOrWM, _minColumnWidthwamtHw)
		const _arrayValueh0VF3wF = {
		
	}
		const _arrayValueHVn4rH = null;
		const _optionAhwaOTr = [_arrayValueh0VF3wF, _arrayValueHVn4rH]
		const _returnValuePFoioop = await _HelpVvRXmsj.optionTerm(_optionAhwaOTr)
		const _optionZ24sPSG = "dVGFFbYzSunMfeKSxgbvSqjzDNJB08DLYnWXR4JwitCrKBDQPG5jmzsMrwkiMYw5NYKiOT";
		const _returnValuez4kobWJ = await _HelpVvRXmsj.optionDescription(_optionZ24sPSG)
		const _argumentD819HtU = undefined;
		const _returnValueY24Su8Y = await _HelpVvRXmsj.argumentDescription(_argumentD819HtU)
	});

	it('test for Help', async () => {
		const _HelpdBgfLoJ = new Help()
		const _optionxIzxmSb = false;
		const _returnValueAe903Qz = await _HelpdBgfLoJ.optionTerm(_optionxIzxmSb)
		const _cmdYYyZo9k = "VCLt8QWExbpnwmW6IXdZRfuIBdhvedyb8ipgmKQwRNeuMSmeezKXrSuIuxojwgPeoAkIv6RPgd2iyJFhYTqsntQFD";
		const _returnValueKfUjkd = await _HelpdBgfLoJ.commandUsage(_cmdYYyZo9k)
		const _argumentAUvVEHS = true;
		const _returnValue7lcdgB = await _HelpdBgfLoJ.argumentDescription(_argumentAUvVEHS)
		const _cmdvuCZq3q = 9.340327401501334;
		const _helperoEsffC = undefined;
		const _returnValues8Rh2uQ = await _HelpdBgfLoJ.longestArgumentTermLength(_cmdvuCZq3q, _helperoEsffC)
		const _optiongMsWpi = 1.5145201080332527;
		const _returnValueBeS3JTK = await _HelpdBgfLoJ.optionDescription(_optiongMsWpi)
	});

	it('test for Help', async () => {
		const _HelpQc90eWI = new Help()
		const _cmdeO4flFp = {
		
	}
		const _helperQ0y54Js = undefined;
		const _returnValueGA7438x = await _HelpQc90eWI.longestSubcommandTermLength(_cmdeO4flFp, _helperQ0y54Js)
		const _arrayValueHeqRRNm = 7.068983930307905;
		const _arrayValueP1xsI7s = "iGSN3y7HrqOQQqQnvA3J9M6N8HyJivawTeLnFWl3HPgKzJe2nMGAD3c9piE";
		const _arrayValueshII9zH = "ILw2SvpXMi4zptYECe2CxlvIqqSGES56MPRR0IAzJeFJn7rrRNRwSucy8u690hReTpzDr2c1X8frsLKYCfUN8rD5";
		const _cmdzjwgCl4 = [_arrayValueHeqRRNm, _arrayValueP1xsI7s, _arrayValueshII9zH]
		const _returnValuemiLstaF = await _HelpQc90eWI.visibleArguments(_cmdzjwgCl4)
		const _arrayValueVcpwzhZ = "6a2xApaOR8yUBhQgkqQzr5MkjMzW5lOdi1Su3obbkVi14tUCmrXMFsxUDT6sFGA1WVkxXdFRElYGpyu5yCbuDkHbl7g";
		const _arrayValueCnb2lDe = false;
		const _returnValueVeB1Vbp = undefined;
		const _arrayValueCL3xUQS = () => { return _returnValueVeB1Vbp };
		const _arrayValueNh5eKW0 = [_arrayValueCnb2lDe, _arrayValueCL3xUQS]
		const _arrayValuePbtQ21I = -6.7463847665917305;
		const _arrayValuewUVdtP2 = null;
		const _arrayValueLnQgfjq = {
		
	}
		const _arrayValueEvetKph = undefined;
		const _arrayValuenGFiUI6 = -2.3450201922976017;
		const _arrayValueXqtmpD7 = [_arrayValuewUVdtP2, _arrayValueLnQgfjq, _arrayValueEvetKph, _arrayValuenGFiUI6]
		const _optionLoK8fWk = [_arrayValueVcpwzhZ, _arrayValueNh5eKW0, _arrayValuePbtQ21I, _arrayValueXqtmpD7]
		const _returnValueHM2tKME = await _HelpQc90eWI.optionDescription(_optionLoK8fWk)
	});

	it('test for Help', async () => {
		const _HelpkZAhyWB = new Help()
		const _arrayValueYBztzjc = {
		
	}
		const _arrayValueAoL53p = true;
		const _arrayValueAwSugOF = -1.7871714394514218;
		const _arrayValueFhsGRLT = [_arrayValueAoL53p, _arrayValueAwSugOF]
		const _arrayValueqnJcj0m = [_arrayValueYBztzjc, _arrayValueFhsGRLT]
		const _returnValueEsOBEyB = "j4rfytRGUJvKtQz6hSuKpio5tUpAoTHw2iEYGGiBXCbCJ4KDtJVS0mDyzHpeBWxnQzJAsyU7g60fqCy8k6Ncx";
		const _arrayValueTLvjUq = () => { return _returnValueEsOBEyB };
		const _cmdaUyweBd = [_arrayValueqnJcj0m, _arrayValueTLvjUq]
		const _returnValueKdMcbxY = await _HelpkZAhyWB.commandDescription(_cmdaUyweBd)
		const _cmdoBeRYG = "YyFOWeWY9yMMZpOlPVzyASFsjeU80ZHmz2YsJf36GFPy8BL7fz";
		const _helperJzemNN = {
		
	}
		const _returnValuekRF3wue = await _HelpkZAhyWB.longestOptionTermLength(_cmdoBeRYG, _helperJzemNN)
		const _arrayValueDMZXHH = {
		
	}
		const _cmdRUfEsmv = [_arrayValueDMZXHH]
		const _helperUrF8fKL = {
		
	}
		const _returnValuepA1PiZe = await _HelpkZAhyWB.longestOptionTermLength(_cmdRUfEsmv, _helperUrF8fKL)
		const _cmdUB7iQsp = -3.6725368538346324;
		const _helperGOZM0us = null;
		const _returnValueCASMPX2 = await _HelpkZAhyWB.longestArgumentTermLength(_cmdUB7iQsp, _helperGOZM0us)
		const _cmdUcskwBq = undefined;
		const _returnValuerm8rTPx = await _HelpkZAhyWB.subcommandTerm(_cmdUcskwBq)
	});

	it('test for Help', async () => {
		const _HelpcKdT1vv = new Help()
		const _cmdBus715A = "KxgUXk7Ak4La9qOsaeTKh9SjMujFGQRawnY4utmYtqgMYh7iQmUHPrzHIVzl26fhDjMl0YCdkxKiDf1xWtT";
		const _returnValueygOfJuW = await _HelpcKdT1vv.visibleArguments(_cmdBus715A)
		const _cmdHtcodLE = {
		
	}
		const _helperjr3tPIG = "n9jNYay";
		const _returnValueGj1LfZ = await _HelpcKdT1vv.formatHelp(_cmdHtcodLE, _helperjr3tPIG)
		const _cmdcp86vq3 = undefined;
		const _returnValuetCGRnoA = await _HelpcKdT1vv.visibleArguments(_cmdcp86vq3)
		const _returnValueHozAeHV = undefined;
		const _cmdWIMeydL = () => { return _returnValueHozAeHV };
		const _returnValuebFqSgG = await _HelpcKdT1vv.visibleOptions(_cmdWIMeydL)
		const _cmdf3Jafhm = 6.53328221706218;
		const _returnValueH5905ch = await _HelpcKdT1vv.visibleOptions(_cmdf3Jafhm)
	});

	it('test for Help', async () => {
		const _Helpffh5KD9 = new Help()
		const _cmdW21Cq73 = null;
		const _returnValuegalTV9d = await _Helpffh5KD9.visibleOptions(_cmdW21Cq73)
		const _cmdmfBAWDl = {
		
	}
		const _arrayValueqDrK4cg = null;
		const _helperxMaQTsk = [_arrayValueqDrK4cg]
		const _returnValueWB2JS0t = await _Helpffh5KD9.longestArgumentTermLength(_cmdmfBAWDl, _helperxMaQTsk)
		const _optionnEleN1J = undefined;
		const _returnValueCH8iB8 = await _Helpffh5KD9.optionTerm(_optionnEleN1J)
		const _cmdhv38Bbk = undefined;
		const _returnValueic0JJtz = true;
		const _helperwVBbSMG = () => { return _returnValueic0JJtz };
		const _returnValueR79I36e = await _Helpffh5KD9.longestOptionTermLength(_cmdhv38Bbk, _helperwVBbSMG)
		const _optionNlrjN64 = true;
		const _returnValueygxzpvN = await _Helpffh5KD9.optionTerm(_optionNlrjN64)
	});

	it('test for Help', async () => {
		const _HelpNajM0lh = new Help()
		const _cmdmnr166 = 9.201012040412518;
		const _returnValueLgUJvAq = await _HelpNajM0lh.subcommandDescription(_cmdmnr166)
	});

	it('test for Help', async () => {
		const _Helpq8Ajw7C = new Help()
		const _arrayValuet3BxrlS = false;
		const _arrayValueDGJiP0m = null;
		const _returnValueLGNzWwK = -3.44431028133223;
		const _returnValueLXpvb2g = () => { return _returnValueLGNzWwK };
		const _arrayValueIDFWA3 = () => { return _returnValueLXpvb2g };
		const _argumentxCa1Jt0 = [_arrayValuet3BxrlS, _arrayValueDGJiP0m, _arrayValueIDFWA3]
		const _returnValueX3P2k7 = await _Helpq8Ajw7C.argumentDescription(_argumentxCa1Jt0)
	});

	it('test for Help', async () => {
		const _HelpTLaas7k = new Help()
		const _arrayValue8YOaHY = []
		const _arrayValuein359ge = {
		
	}
		const _arrayValueIA94rG0 = -3.7290334278410056;
		const _argumentNaH5cQX = [_arrayValue8YOaHY, _arrayValuein359ge, _arrayValueIA94rG0]
		const _returnValue9RNYvd = await _HelpTLaas7k.argumentTerm(_argumentNaH5cQX)
		const _optionB99lp1x = false;
		const _returnValuepayO2c = await _HelpTLaas7k.optionDescription(_optionB99lp1x)
	});

	it('test for Help', async () => {
		const _HelpNnbNg7Q = new Help()
		const _cmdmuW5dO1 = "hnAwDQTkkOGT";
		const _helperylKlAtH = false;
		const _returnValueKkgywFy = await _HelpNnbNg7Q.padWidth(_cmdmuW5dO1, _helperylKlAtH)
		const _cmdDQyetj = false;
		const _helpergzxY7Ba = true;
		const _returnValuelFWLPYe = await _HelpNnbNg7Q.longestOptionTermLength(_cmdDQyetj, _helpergzxY7Ba)
	});

	it('test for Help', async () => {
		const _HelpxTideH7 = new Help()
		const _optionfJcizq = "GgjEQnQiWxYvOoUGxV69tNzLlOol3VIuSG4epzG7fYPqhhq";
		const _returnValuexQGacR = await _HelpxTideH7.optionTerm(_optionfJcizq)
		const _optiontgtIMTG = null;
		const _returnValueMZ7qemR = await _HelpxTideH7.optionDescription(_optiontgtIMTG)
		const _cmdyIbTvdc = 3.9995446811301925;
		const _returnValueXJWZeBm = await _HelpxTideH7.commandUsage(_cmdyIbTvdc)
		const _cmdZCgV2eE = true;
		const _arrayValuerQABdb3 = undefined;
		const _helperxipetpp = [_arrayValuerQABdb3]
		const _returnValuePAaLwEI = await _HelpxTideH7.longestOptionTermLength(_cmdZCgV2eE, _helperxipetpp)
	});

	it('test for Help', async () => {
		const _HelpNvI2B4n = new Help()
		const _optionLr0BvGq = -7.704929745745967;
		const _returnValueFuir1gF = await _HelpNvI2B4n.optionTerm(_optionLr0BvGq)
		const _arrayValueC3V2kkz = true;
		const _arrayValueTtkpz3q = "yYyy6X4pM9PrpJfqCU8ZRn8zhbmSwmuDcrKor1bW2fq8BuAdVVqjft7Ey8Gg14PJrj91n6pEsU3u6oYM94imazuXSyv3CW";
		const _arrayValuecbzxKP = undefined;
		const _cmd6c5lz2 = [_arrayValueC3V2kkz, _arrayValueTtkpz3q, _arrayValuecbzxKP]
		const _returnValueRL8FS35 = await _HelpNvI2B4n.visibleCommands(_cmd6c5lz2)
		const _cmdBjPj7P = undefined;
		const _returnValueuJv7rVV = await _HelpNvI2B4n.commandUsage(_cmdBjPj7P)
	});

	it('test for Help', async () => {
		const _HelpzNbiWO2 = new Help()
		const _optionMWsU784 = 6.99299149096943;
		const _returnValueQAgKd7T = await _HelpzNbiWO2.optionDescription(_optionMWsU784)
		const _arrayValueNmVqvpp = 8.472344993831577;
		const _arrayValuejdEMBPj = {
		
	}
		const _arrayValueV1dLSL = undefined;
		const _arrayValuefGVpww = undefined;
		const _arrayValuemOjpq4P = "yP1GudCruKNJ9M";
		const _arrayValueQTrLEYR = [_arrayValueV1dLSL, _arrayValuefGVpww, _arrayValuemOjpq4P]
		const _arrayValueFZbpjn = "AqL1rE4mcWLIa0Ibx5ry0UwjU0x6XZPcGFsUBbWU17S61du9f8Q";
		const _arrayValueY7PFsol = [_arrayValueFZbpjn]
		const _cmdLGUwaH9 = [_arrayValueNmVqvpp, _arrayValuejdEMBPj, _arrayValueQTrLEYR, _arrayValueY7PFsol]
		const _returnValueHmUP7d = await _HelpzNbiWO2.subcommandTerm(_cmdLGUwaH9)
	});

	it('test for Help', async () => {
		const _HelpdjWwJky = new Help()
		const _strY76pOFE = "k3r99gP5GVzAmxaYBLS14W43O";
		const _widthFG4PjOP = []
		const _indentjlxYjVy = -8.445740432927167;
		const _minColumnWidthPk4o1j0 = undefined;
		const _returnValueltXPfX = await _HelpdjWwJky.wrap(_strY76pOFE, _widthFG4PjOP, _indentjlxYjVy, _minColumnWidthPk4o1j0)
		const _cmdmsQQPKO = 7.580734652131916;
		const _returnValueMYHxEcH = await _HelpdjWwJky.subcommandTerm(_cmdmsQQPKO)
		const _cmdAJqkU3t = true;
		const _returnValued8AhdQS = await _HelpdjWwJky.subcommandTerm(_cmdAJqkU3t)
		const _returnValueS35em8M = undefined;
		const _cmdh1xyN8n = () => { return _returnValueS35em8M };
		const _returnValuejjrrHNS = await _HelpdjWwJky.visibleOptions(_cmdh1xyN8n)
	});

	it('test for Help', async () => {
		const _HelpdsvRGM = new Help()
		const _strDdueIua = "nGcBikxme4dEaCaYIsCGY6VOGlTrJbyf1QlBVpB2AqwcnxpEMFVKnXU1ZHqaJzxXo1ecTLvFs";
		const _widthCxggJNK = undefined;
		const _arrayValuePTo6rDN = true;
		const _indentHVANn6g = [_arrayValuePTo6rDN]
		const _returnValuejbtmJpk = undefined;
		const _minColumnWidthW7l592 = () => { return _returnValuejbtmJpk };
		const _returnValueD8hKTWa = await _HelpdsvRGM.wrap(_strDdueIua, _widthCxggJNK, _indentHVANn6g, _minColumnWidthW7l592)
		const _cmdHiw09OO = undefined;
		const _returnValuenrnBbnv = await _HelpdsvRGM.visibleOptions(_cmdHiw09OO)
	});
})