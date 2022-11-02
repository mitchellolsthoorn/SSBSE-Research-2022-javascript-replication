export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpxr0AVzY = new Help()
		const _cmdifFcPZ0 = null;
		const _helpertqmoY6V = null;
		const _returnValuevQyRf6l = await _Helpxr0AVzY.longestOptionTermLength(_cmdifFcPZ0, _helpertqmoY6V)
		const _arrayValueSrdaExM = false;
		const _arrayValueFVkuj3r = true;
		const _argumentWS3UBad = [_arrayValueSrdaExM, _arrayValueFVkuj3r]
		const _returnValueWBe2UFz = await _Helpxr0AVzY.argumentDescription(_argumentWS3UBad)
	});

	it('test for Help', async () => {
		const _HelpwVMEhmh = new Help()
		const _cmdCegUaDo = null;
		const _helperNxKiPna = null;
		const _returnValuelIX5PCS = await _HelpwVMEhmh.longestArgumentTermLength(_cmdCegUaDo, _helperNxKiPna)
		const _arrayValuekZ12ena = undefined;
		const _optionC7M0vN0 = [_arrayValuekZ12ena]
		const _returnValuesLgDSel = await _HelpwVMEhmh.optionDescription(_optionC7M0vN0)
		const _arrayValuedoooPu = false;
		const _arrayValuedUsSvq = [_arrayValuedoooPu]
		const _arrayValueOTw8aUU = -4.702166734759917;
		const _arrayValueAYqrsFN = true;
		const _arrayValueaG5d4nT = true;
		const _arrayValuevbC4P1I = [_arrayValueaG5d4nT]
		const _cmdbBLgeTd = [_arrayValuedUsSvq, _arrayValueOTw8aUU, _arrayValueAYqrsFN, _arrayValuevbC4P1I]
		const _helpersEMXRWJ = null;
		const _returnValuePFvWwgb = await _HelpwVMEhmh.formatHelp(_cmdbBLgeTd, _helpersEMXRWJ)
	});

	it('test for Help', async () => {
		const _HelpAWHcP11 = new Help()
		const _optionrPt6Dwo = {
		
	}
		const _returnValuezQUFr8p = await _HelpAWHcP11.optionDescription(_optionrPt6Dwo)
		const _cmdarEMC3 = "9CEi7labJ3SiT9QXoqk";
		const _helperjpFx38q = undefined;
		const _returnValueLRH6UsH = await _HelpAWHcP11.padWidth(_cmdarEMC3, _helperjpFx38q)
		const _argumentxZ0TqwK = 4.7432984719683375;
		const _returnValueLHnSIEU = await _HelpAWHcP11.argumentDescription(_argumentxZ0TqwK)
		const _arrayValueImioXH5 = -1.4345490970425896;
		const _arrayValuesxQrKIv = false;
		const _arrayValueBwBjTj7 = "88VHFDkwbPs";
		const _returnValueDqNt4GV = -4.30939288072136;
		const _arrayValueAOU6Ys = () => { return _returnValueDqNt4GV };
		const _arrayValuexoXYbKK = "ubs";
		const _arrayValueKLhsH0G = [_arrayValueBwBjTj7, _arrayValueAOU6Ys, _arrayValuexoXYbKK]
		const _arrayValueo8aqQ02 = [_arrayValuesxQrKIv, _arrayValueKLhsH0G]
		const _arrayValueyp0ob7S = [_arrayValueImioXH5, _arrayValueo8aqQ02]
		const _arrayValuenPrjq1 = [_arrayValueyp0ob7S]
		const _argumentYbn6scS = [_arrayValuenPrjq1]
		const _returnValueTKIwOy2 = await _HelpAWHcP11.argumentDescription(_argumentYbn6scS)
	});

	it('test for Help', async () => {
		const _HelpNjVHO6I = new Help()
		const _cmdNrKqt05 = 7.257597755364696;
		const _returnValueH1jOxG2 = await _HelpNjVHO6I.subcommandDescription(_cmdNrKqt05)
		const _arrayValueYoPab9p = "K81blcO2c9dMYffJjdrKx";
		const _arrayValueppxan0D = undefined;
		const _cmdyOjIbF8 = [_arrayValueYoPab9p, _arrayValueppxan0D]
		const _helperLrgGWyT = true;
		const _returnValueqHN90TK = await _HelpNjVHO6I.longestArgumentTermLength(_cmdyOjIbF8, _helperLrgGWyT)
	});

	it('test for Help', async () => {
		const _HelpK5Az9I = new Help()
		const _cmdmGuh97u = -2.162283827298692;
		const _returnValuemmOEEaj = await _HelpK5Az9I.visibleOptions(_cmdmGuh97u)
		const _arrayValueCNuqGR0 = "JNVyNCunXXy1vm8FGthcft45j9FNc4WUaoXjG6MNbt8fpnbH275ehwYfGJamrFUOmtDAILtjGCEIgUtSzPXbUm1";
		const _arrayValueeosOlDj = false;
		const _cmdbzhoIZR = [_arrayValueCNuqGR0, _arrayValueeosOlDj]
		const _returnValuePxdFgs7 = await _HelpK5Az9I.commandDescription(_cmdbzhoIZR)
		const _cmdCmcYMZG = null;
		const _returnValueQXN73P = await _HelpK5Az9I.visibleArguments(_cmdCmcYMZG)
	});

	it('test for Help', async () => {
		const _Helppu1N0nS = new Help()
		const _returnValueXRpZKX2 = 7.047296455301428;
		const _cmdjuj1aVf = () => { return _returnValueXRpZKX2 };
		const _helperxMwNRHa = true;
		const _returnValueJjDaWJo = await _Helppu1N0nS.longestSubcommandTermLength(_cmdjuj1aVf, _helperxMwNRHa)
		const _cmdTXtpK1V = null;
		const _returnValueJ3rONl = await _Helppu1N0nS.commandUsage(_cmdTXtpK1V)
		const _arrayValueFzwHnEE = true;
		const _arrayValueEEDPgz = {
		
	}
		const _arrayValueBD0dIPf = [_arrayValueEEDPgz]
		const _optionRMq4AYt = [_arrayValueFzwHnEE, _arrayValueBD0dIPf]
		const _returnValue42VHG4 = await _Helppu1N0nS.optionDescription(_optionRMq4AYt)
	});

	it('test for Help', async () => {
		const _HelpGV4AeG = new Help()
		const _cmdv6ZGO1C = 1.9842731805168174;
		const _returnValuedNgLmrC = await _HelpGV4AeG.visibleArguments(_cmdv6ZGO1C)
		const _arrayValueqM58uMc = {
		
	}
		const _cmddWoW5Ke = [_arrayValueqM58uMc]
		const _returnValueGgzsN0J = await _HelpGV4AeG.visibleOptions(_cmddWoW5Ke)
		const _cmdrhK8lmo = null;
		const _helperV27Zps = undefined;
		const _returnValueplzLD3l = await _HelpGV4AeG.formatHelp(_cmdrhK8lmo, _helperV27Zps)
		const _returnValuesbNTXu8 = undefined;
		const _cmdvX89yb = () => { return _returnValuesbNTXu8 };
		const _returnValueF7bjlXj = await _HelpGV4AeG.subcommandDescription(_cmdvX89yb)
		const _arrayValueKSPZRrH = []
		const _cmdCoPHf4C = [_arrayValueKSPZRrH]
		const _returnValueuqpyuL = await _HelpGV4AeG.subcommandDescription(_cmdCoPHf4C)
	});

	it('test for Help', async () => {
		const _HelpeDTOIPK = new Help()
		const _cmdDb1NofJ = "A23AvgUaPXsIWcI";
		const _helperOO8EWh = {
		
	}
		const _returnValuehI9YC8W = await _HelpeDTOIPK.formatHelp(_cmdDb1NofJ, _helperOO8EWh)
	});

	it('test for Help', async () => {
		const _HelpJMY7NYw = new Help()
		const _optionABSUi1g = 5.33111364434351;
		const _returnValueRjJkDph = await _HelpJMY7NYw.optionTerm(_optionABSUi1g)
		const _cmdR8ZsodJ = "M55oh2e4GSe3jvDuNiyWMSEVWeTaUuGOMMJgNMfvXXz9U5BbZRRGKHkv6tWH5i7OMMzGM7VGfV21thUn4ZDwd0MNLVk2";
		const _returnValueYhAApzo = await _HelpJMY7NYw.subcommandDescription(_cmdR8ZsodJ)
	});

	it('test for Help', async () => {
		const _HelpjfL7Cg0 = new Help()
		const _cmdFwnPa2 = true;
		const _returnValuehgZaEm1 = await _HelpjfL7Cg0.visibleCommands(_cmdFwnPa2)
		const _cmdKkffhN = []
		const _helperqLhQllA = -9.534801812880499;
		const _returnValuenZ0SA95 = await _HelpjfL7Cg0.longestOptionTermLength(_cmdKkffhN, _helperqLhQllA)
		const _cmdtyRz9PN = undefined;
		const _returnValueMUUTPZE = await _HelpjfL7Cg0.commandUsage(_cmdtyRz9PN)
		const _cmdZecJwJ = -8.028448307966707;
		const _returnValueXX77aRt = await _HelpjfL7Cg0.subcommandTerm(_cmdZecJwJ)
	});

	it('test for Help', async () => {
		const _HelpPgAbGeb = new Help()
		const _cmdwC9xWGW = -5.2538034661700825;
		const _returnValuethDc48Q = await _HelpPgAbGeb.commandUsage(_cmdwC9xWGW)
		const _cmdp5tMgg3 = undefined;
		const _arrayValueSL55PZP = true;
		const _arrayValuenFYlur2 = "qnFcI5ujqotqwJjR5pertMYOGb";
		const _helperqrVu6Bg = [_arrayValueSL55PZP, _arrayValuenFYlur2]
		const _returnValueHkpyo7M = await _HelpPgAbGeb.longestArgumentTermLength(_cmdp5tMgg3, _helperqrVu6Bg)
		const _arrayValuezrlNTEd = true;
		const _arrayValueDhEJrUs = null;
		const _returnValueCVG5qkj = 7.20224073529533;
		const _arrayValuexAVpxHq = () => { return _returnValueCVG5qkj };
		const _argumentwICEQP2 = [_arrayValuezrlNTEd, _arrayValueDhEJrUs, _arrayValuexAVpxHq]
		const _returnValuebC8niyk = await _HelpPgAbGeb.argumentDescription(_argumentwICEQP2)
	});

	it('test for Help', async () => {
		const _HelpcyfBVBP = new Help()
		const _cmdnhD2nad = "W2Q8GmD38pgOaLSQ3PTVS";
		const _returnValuev0GF5Np = await _HelpcyfBVBP.subcommandTerm(_cmdnhD2nad)
	});

	it('test for Help', async () => {
		const _HelpLhcFjyX = new Help()
		const _argumentf2Avu4 = false;
		const _returnValueIN38hzw = await _HelpLhcFjyX.argumentTerm(_argumentf2Avu4)
		const _cmdIJw4ezI = undefined;
		const _returnValueC3yKHL = await _HelpLhcFjyX.commandUsage(_cmdIJw4ezI)
		const _strnRntrio = true;
		const _widthydNGdi9 = null;
		const _indentdfSkDX3 = false;
		const _minColumnWidthiTyIyJN = false;
		const _returnValueLaAmfc6 = await _HelpLhcFjyX.wrap(_strnRntrio, _widthydNGdi9, _indentdfSkDX3, _minColumnWidthiTyIyJN)
		const _returnValuetakK0FE = {
		
	}
		const _cmdgUnryUv = () => { return _returnValuetakK0FE };
		const _returnValuexco6oZR = await _HelpLhcFjyX.subcommandTerm(_cmdgUnryUv)
	});

	it('test for Help', async () => {
		const _HelpR4iEcNT = new Help()
		const _argumentOxAyf6u = "lSFSP0DQqUPauxFq3O";
		const _returnValuev9Uv54y = await _HelpR4iEcNT.argumentDescription(_argumentOxAyf6u)
		const _cmdjfynKVT = false;
		const _returnValueZPt7rsF = await _HelpR4iEcNT.subcommandDescription(_cmdjfynKVT)
		const _cmd69Kv0f = "ffTyQQ6bWXpIJCNNKnQGz8y1kOX8T989WS1BmOFO7C8tfzSjl6pLGaa9oyVxn4fFXJ0BFSxEcRhcIc2yjbldSI";
		const _returnValueD5NUQZf = await _HelpR4iEcNT.visibleCommands(_cmd69Kv0f)
		const _cmdWwIi3x = 6.009732236044197;
		const _helperUbnNgpW = true;
		const _returnValuejP0iqRX = await _HelpR4iEcNT.padWidth(_cmdWwIi3x, _helperUbnNgpW)
		const _arrayValueaWTA2tu = true;
		const _cmdKlaoYO5 = [_arrayValueaWTA2tu]
		const _helperqStxAwW = null;
		const _returnValueDesNGkD = await _HelpR4iEcNT.longestSubcommandTermLength(_cmdKlaoYO5, _helperqStxAwW)
	});

	it('test for Help', async () => {
		const _HelpvB3qU2P = new Help()
		const _cmdm7Tevwv = null;
		const _returnValuetUQ5e5 = await _HelpvB3qU2P.commandDescription(_cmdm7Tevwv)
		const _cmdlk5yBa1 = undefined;
		const _returnValueZg62Thw = await _HelpvB3qU2P.visibleOptions(_cmdlk5yBa1)
		const _cmdlOyErss = -1.5342939063584442;
		const _helperRdHsugY = 8.853611308402218;
		const _returnValueDhNNobN = await _HelpvB3qU2P.longestOptionTermLength(_cmdlOyErss, _helperRdHsugY)
		const _cmdsFa2Zf = "JKn3Op5fadV3EldMSL323EnWaaaLWQ5g81gvTOjaauEK5fP0z7dyfh22Zv";
		const _returnValuewXEuesB = await _HelpvB3qU2P.commandUsage(_cmdsFa2Zf)
	});

	it('test for Help', async () => {
		const _HelpziMNjnY = new Help()
		const _arrayValuelArXWWV = "zhzpOG5cJMRk9EPG9cL2bAKvQyMuzeMctcCqJnWE1D6N";
		const _arrayValuePfYuAV3 = [_arrayValuelArXWWV]
		const _arrayValueU9mNmmd = undefined;
		const _returnValueBavAOSx = {
		
	}
		const _arrayValueUtjdTK = () => { return _returnValueBavAOSx };
		const _arrayValueDxqk3Ub = {
		
	}
		const _arrayValueIuCaSXh = -2.5700085235649315;
		const _arrayValueJcWplST = [_arrayValueU9mNmmd, _arrayValueUtjdTK, _arrayValueDxqk3Ub, _arrayValueIuCaSXh]
		const _arrayValuevEvzYOd = "xBlEGq1wlsneyMjFknrbqu3yuqIeXfRIV0xgZogUIYfAK5RL94afJdBpgwqtECVFBoHO1AXUMeEGaQAsA3U3JPeG9jeRcbrYoKl";
		const _strc570JoE = [_arrayValuePfYuAV3, _arrayValueJcWplST, _arrayValuevEvzYOd]
		const _widthW9cwz8F = "0";
		const _indentr5JU8lQ = "Wwlfd8HpKa4NN";
		const _minColumnWidthDZ2JI97 = "Zi6ouGjH1";
		const _returnValueenQ2Xqv = await _HelpziMNjnY.wrap(_strc570JoE, _widthW9cwz8F, _indentr5JU8lQ, _minColumnWidthDZ2JI97)
		const _cmdQ4cALo1 = undefined;
		const _returnValuef5kBN0H = await _HelpziMNjnY.visibleOptions(_cmdQ4cALo1)
		const _cmdO95Hvuk = "8w7VDp80PajctlAWs5r7uR2dV7UACNgfPECBdLyWbUVyK9RCOPeXC8";
		const _returnValueAeuMKse = await _HelpziMNjnY.visibleOptions(_cmdO95Hvuk)
		const _optionJGxtfy4 = true;
		const _returnValuelsDgp3R = await _HelpziMNjnY.optionTerm(_optionJGxtfy4)
		const _returnValueOTWERWE = null;
		const _arrayValuesu1ngUO = () => { return _returnValueOTWERWE };
		const _arrayValueUMPyDiI = "IVnsQQrbFJZaLvOnYwmj5hMiCtvCN0FT8NXPL8ow3lnRmJPaAKKSj68Orfixtb5K6e1U6SIjRu25K";
		const _arrayValuefG58D4 = -9.905131427934856;
		const _arrayValuexPw7qJS = undefined;
		const _optionR0SnMlK = [_arrayValuesu1ngUO, _arrayValueUMPyDiI, _arrayValuefG58D4, _arrayValuexPw7qJS]
		const _returnValuevkTVGt6 = await _HelpziMNjnY.optionDescription(_optionR0SnMlK)
	});

	it('test for Help', async () => {
		const _HelpTdO1cA = new Help()
		const _strn7wMpK = "QLZyMrnYRfvtzne5eYU9nKtKjr1rVmGeD519E";
		const _widthnvjEEx3 = "4oEHvSqj";
		const _indentiohgMo2 = null;
		const _arrayValuelMS55qa = null;
		const _arrayValueBcPAsvI = true;
		const _minColumnWidthKf2w25b = [_arrayValuelMS55qa, _arrayValueBcPAsvI]
		const _returnValueaLlNVvT = await _HelpTdO1cA.wrap(_strn7wMpK, _widthnvjEEx3, _indentiohgMo2, _minColumnWidthKf2w25b)
		const _cmdpaNKJEU = 8.908008178458694;
		const _returnValueARTFDAs = await _HelpTdO1cA.subcommandDescription(_cmdpaNKJEU)
		const _cmdsiSgdVm = null;
		const _helperZO4YHtj = null;
		const _returnValuehdPMMGV = await _HelpTdO1cA.padWidth(_cmdsiSgdVm, _helperZO4YHtj)
	});

	it('test for Help', async () => {
		const _HelpVSiMKs6 = new Help()
		const _arrayValueJcAftOz = true;
		const _arrayValuetpHwhI = [_arrayValueJcAftOz]
		const _arrayValueqajABV8 = false;
		const _returnValuewdqUdf = "rm4WPDFGwwJBLJas8ajtgnmX51Sc1S1bIurYci7l3Q4W4dvR";
		const _arrayValueTSxbUeh = () => { return _returnValuewdqUdf };
		const _argumentPCa6Fy = [_arrayValuetpHwhI, _arrayValueqajABV8, _arrayValueTSxbUeh]
		const _returnValueskfQ3Ag = await _HelpVSiMKs6.argumentDescription(_argumentPCa6Fy)
		const _strbuuYRe = "33ifxt4bU4BSfQN6JcnsBgKg3NyLfhQzCFmPtBmXo3tlqrKJ9QeNnAsDp0LN";
		const _widthe6tFLO = null;
		const _indentRA6sSlg = true;
		const _minColumnWidthAqWw20 = true;
		const _returnValueAmDRQSP = await _HelpVSiMKs6.wrap(_strbuuYRe, _widthe6tFLO, _indentRA6sSlg, _minColumnWidthAqWw20)
		const _cmdZiCwLsf = -4.906025373813495;
		const _returnValueUnLtBJ4 = -9.96736859307557;
		const _helperFMr9pCT = () => { return _returnValueUnLtBJ4 };
		const _returnValueNsXbfp = await _HelpVSiMKs6.padWidth(_cmdZiCwLsf, _helperFMr9pCT)
		const _cmdHnZZeF = -0.14152999112205755;
		const _helpersxbS7lk = "5npTpcIEeO62KDMtjf27dpdR2nUDTaxupxuW5eCplp3zobAREV6R65yVDIO4lKtcjJlE7";
		const _returnValueSR61CPG = await _HelpVSiMKs6.longestArgumentTermLength(_cmdHnZZeF, _helpersxbS7lk)
		const _cmdrMHZZyE = "Yy2QumqMDFOl0xzG8sgMuEnh3O78fj";
		const _helperz69muPP = null;
		const _returnValueR400tVP = await _HelpVSiMKs6.longestSubcommandTermLength(_cmdrMHZZyE, _helperz69muPP)
	});
})