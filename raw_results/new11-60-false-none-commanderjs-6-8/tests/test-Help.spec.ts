export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpeC74C0l = new Help()
		const _cmdy9bVkHj = true;
		const _helperYIw0BQO = false;
		const _returnValueot5B4V2 = await _HelpeC74C0l.padWidth(_cmdy9bVkHj, _helperYIw0BQO)
		const _returnValueHVYOIJe = undefined;
		const _optionWv46ri = () => { return _returnValueHVYOIJe };
		const _returnValuejd4Vygw = await _HelpeC74C0l.optionTerm(_optionWv46ri)
		const _arrayValueJJ4mHP = "qXeXRwzXeVV8YpH8ub";
		const _arrayValueNs3Dm0 = "6XPkkOjnn";
		const _arrayValueDrGtBOn = undefined;
		const _arrayValueJhF7Wu = "8PnE5";
		const _cmdwlOhfSa = [_arrayValueJJ4mHP, _arrayValueNs3Dm0, _arrayValueDrGtBOn, _arrayValueJhF7Wu]
		const _helperFIclLmh = false;
		const _returnValueoDlGHT = await _HelpeC74C0l.longestSubcommandTermLength(_cmdwlOhfSa, _helperFIclLmh)
	});

	it('test for Help', async () => {
		const _HelpSZkgg1b = new Help()
		const _returnValuezdmxnHh = null;
		const _cmde2V0w2g = () => { return _returnValuezdmxnHh };
		const _returnValueIe1KGL = await _HelpSZkgg1b.subcommandDescription(_cmde2V0w2g)
		const _optionUxRYR0Q = null;
		const _returnValuep3qVM1U = await _HelpSZkgg1b.optionDescription(_optionUxRYR0Q)
		const _cmdqKSdQi0 = null;
		const _returnValueu3kPPbj = await _HelpSZkgg1b.visibleArguments(_cmdqKSdQi0)
	});

	it('test for Help', async () => {
		const _HelpdyCbCQK = new Help()
		const _arrayValueOMSijxb = 9.640019526790198;
		const _cmdzOQvVWm = [_arrayValueOMSijxb]
		const _returnValuecrV2tJ = await _HelpdyCbCQK.subcommandTerm(_cmdzOQvVWm)
		const _returnValuecTXUwM = {
		
	}
		const _cmdISinMc7 = () => { return _returnValuecTXUwM };
		const _returnValueOYSbm1G = await _HelpdyCbCQK.subcommandTerm(_cmdISinMc7)
		const _argumentIjF1bu2 = null;
		const _returnValueTPdWOEG = await _HelpdyCbCQK.argumentDescription(_argumentIjF1bu2)
		const _argumenthm4Q5VS = null;
		const _returnValueLKbFEld = await _HelpdyCbCQK.argumentTerm(_argumenthm4Q5VS)
		const _cmdDeMKrj = {
		
	}
		const _returnValuexDMTTUd = await _HelpdyCbCQK.commandDescription(_cmdDeMKrj)
	});

	it('test for Help', async () => {
		const _HelpoMOcMA = new Help()
		const _argumentq1sv2GV = []
		const _returnValueCc7FONK = await _HelpoMOcMA.argumentDescription(_argumentq1sv2GV)
		const _cmdU4Aef6S = null;
		const _returnValuetR40PvV = await _HelpoMOcMA.visibleOptions(_cmdU4Aef6S)
	});

	it('test for Help', async () => {
		const _HelpcJxw0Bo = new Help()
		const _optionhevm2JB = null;
		const _returnValueDBkfhb2 = await _HelpcJxw0Bo.optionTerm(_optionhevm2JB)
		const _cmdx8mCF8w = {
		
	}
		const _helperztTw6fI = undefined;
		const _returnValueIiMi6IP = await _HelpcJxw0Bo.padWidth(_cmdx8mCF8w, _helperztTw6fI)
	});

	it('test for Help', async () => {
		const _HelpU8TCwg = new Help()
		const _cmdfEWuP2V = "s1NrdUtsInvErNnvbsRKQ5UexJ4K4wdSTc";
		const _returnValuezFneErN = await _HelpU8TCwg.commandDescription(_cmdfEWuP2V)
		const _argumentSzLJV63 = {
		
	}
		const _returnValueXw7ExGu = await _HelpU8TCwg.argumentDescription(_argumentSzLJV63)
		const _cmdSi3QBC8 = false;
		const _returnValueW8fT8mi = await _HelpU8TCwg.subcommandTerm(_cmdSi3QBC8)
		const _cmdZl2jtRh = undefined;
		const _helperugdEDGU = -0.0427781567619796;
		const _returnValueTe352X7 = await _HelpU8TCwg.longestSubcommandTermLength(_cmdZl2jtRh, _helperugdEDGU)
	});

	it('test for Help', async () => {
		const _HelpWol9BkJ = new Help()
		const _strWA0r06y = undefined;
		const _widthm2Z30Qt = false;
		const _indentg1bzBcc = undefined;
		const _minColumnWidthkOmJzGD = "rMqlWpejOYjQ1Eo547fUIMyudc9Wwva7GnfXu4uazd";
		const _returnValueCObUVit = await _HelpWol9BkJ.wrap(_strWA0r06y, _widthm2Z30Qt, _indentg1bzBcc, _minColumnWidthkOmJzGD)
		const _returnValueKKyruz = true;
		const _cmdYJM9ufs = () => { return _returnValueKKyruz };
		const _arrayValueiptG0N4 = null;
		const _arrayValueTmlAvOS = false;
		const _arrayValueWsSnekO = false;
		const _helperF5wsqTQ = [_arrayValueiptG0N4, _arrayValueTmlAvOS, _arrayValueWsSnekO]
		const _returnValuePeygDtu = await _HelpWol9BkJ.longestArgumentTermLength(_cmdYJM9ufs, _helperF5wsqTQ)
		const _cmdzdmXET = undefined;
		const _arrayValuex1LwiLE = {
		
	}
		const _helperSb4MUHZ = [_arrayValuex1LwiLE]
		const _returnValuempSTko1 = await _HelpWol9BkJ.padWidth(_cmdzdmXET, _helperSb4MUHZ)
		const _cmdFVBUimW = 7.4541808389833335;
		const _returnValueDzDUVcS = await _HelpWol9BkJ.visibleArguments(_cmdFVBUimW)
		const _cmdXcOv3EE = true;
		const _returnValueGG3RMs7 = await _HelpWol9BkJ.commandDescription(_cmdXcOv3EE)
	});

	it('test for Help', async () => {
		const _Helpt9aG3lU = new Help()
		const _cmdUsk1ON9 = null;
		const _helpersd52aVH = "Ww";
		const _returnValuerOWCfLG = await _Helpt9aG3lU.formatHelp(_cmdUsk1ON9, _helpersd52aVH)
		const _cmdci2Ly4E = 6.989721149669975;
		const _arrayValueZCzjR57 = true;
		const _arrayValueO2famTZ = true;
		const _arrayValueYQHG6qO = false;
		const _arrayValuem4abWBR = false;
		const _returnValueVfNyusM = [_arrayValueO2famTZ, _arrayValueYQHG6qO, _arrayValuem4abWBR]
		const _arrayValuevLoYNu = () => { return _returnValueVfNyusM };
		const _helperrIZKALD = [_arrayValueZCzjR57, _arrayValuevLoYNu]
		const _returnValue4AT2X6 = await _Helpt9aG3lU.longestOptionTermLength(_cmdci2Ly4E, _helperrIZKALD)
		const _cmdIi7gsQQ = undefined;
		const _arrayValueOdbjjqS = {
		
	}
		const _arrayValuefOf3LzS = -9.323105307123768;
		const _helperQiUwm6Y = [_arrayValueOdbjjqS, _arrayValuefOf3LzS]
		const _returnValuemPy6avo = await _Helpt9aG3lU.longestSubcommandTermLength(_cmdIi7gsQQ, _helperQiUwm6Y)
	});

	it('test for Help', async () => {
		const _HelpkPKMvRx = new Help()
		const _cmdkeJEnXq = undefined;
		const _returnValuex9Kg5D9 = await _HelpkPKMvRx.visibleCommands(_cmdkeJEnXq)
		const _cmdIuKi9bu = 6.814319170665154;
		const _helperZuRepeo = -7.82285846215723;
		const _returnValuehTnqGq = await _HelpkPKMvRx.formatHelp(_cmdIuKi9bu, _helperZuRepeo)
		const _cmdm4FOXmS = false;
		const _returnValuerffGhP = await _HelpkPKMvRx.subcommandTerm(_cmdm4FOXmS)
		const _cmdHw56XLI = false;
		const _returnValueCzWApRv = await _HelpkPKMvRx.visibleArguments(_cmdHw56XLI)
	});

	it('test for Help', async () => {
		const _HelpCOjDs8X = new Help()
		const _optionQWepq18 = undefined;
		const _returnValueyGbUHgl = await _HelpCOjDs8X.optionDescription(_optionQWepq18)
		const _argumentwU4DCAm = {
		
	}
		const _returnValueF5EKjNS = await _HelpCOjDs8X.argumentTerm(_argumentwU4DCAm)
		const _cmdB6ibj9 = "mvaLsnCWGIXV12rv3WG2j3Qo31xyJBaDh";
		const _returnValueWMg3RHD = await _HelpCOjDs8X.commandUsage(_cmdB6ibj9)
		const _arrayValuen9iOrh = {
		
	}
		const _cmdwb0cZ6P = [_arrayValuen9iOrh]
		const _helperxoC9Nlv = {
		
	}
		const _returnValueAVW3YRC = await _HelpCOjDs8X.formatHelp(_cmdwb0cZ6P, _helperxoC9Nlv)
	});

	it('test for Help', async () => {
		const _HelpF1POVk = new Help()
		const _cmdTLlbvjl = null;
		const _helper5W4Tjr = null;
		const _returnValueTkHV2AM = await _HelpF1POVk.longestOptionTermLength(_cmdTLlbvjl, _helper5W4Tjr)
		const _optionQA3RPcE = undefined;
		const _returnValueaGkM7Pp = await _HelpF1POVk.optionTerm(_optionQA3RPcE)
	});

	it('test for Help', async () => {
		const _HelpDC7KyL = new Help()
		const _cmdodyMiEg = undefined;
		const _returnValuem9cVBR = await _HelpDC7KyL.commandUsage(_cmdodyMiEg)
		const _arrayValueQSFx2T = null;
		const _arrayValuetRo2hni = 2.960065223906982;
		const _cmdQPRGFvR = [_arrayValueQSFx2T, _arrayValuetRo2hni]
		const _arrayValuerxhoOl = null;
		const _arrayValuezsECBF = true;
		const _arrayValueOTiTRM8 = undefined;
		const _helperkcO9ok = [_arrayValuerxhoOl, _arrayValuezsECBF, _arrayValueOTiTRM8]
		const _returnValueLc8Ybp = await _HelpDC7KyL.formatHelp(_cmdQPRGFvR, _helperkcO9ok)
		const _cmdaHwZYde = null;
		const _returnValueT8EXcAv = await _HelpDC7KyL.visibleArguments(_cmdaHwZYde)
	});

	it('test for Help', async () => {
		const _HelpHCKuI2h = new Help()
		const _cmdWJvQoW = -6.710621614489941;
		const _helpernxAhTNA = {
		
	}
		const _returnValuet91g2fY = await _HelpHCKuI2h.longestSubcommandTermLength(_cmdWJvQoW, _helpernxAhTNA)
		const _cmdx0APMg = -1.0403762608487597;
		const _returnValueCzwcFv5 = await _HelpHCKuI2h.visibleCommands(_cmdx0APMg)
		const _cmdS5RrxmU = undefined;
		const _helperqqmv3m2 = "GiXkuTcrBvK8SeCCOhzA1wyCUx7EDCl91CQRYWqOWe5CHvwdff3vW7lB6iinta8wKYQnSBWNAQgEQhyXral4ed3aw9uBh";
		const _returnValuePHOlQCk = await _HelpHCKuI2h.longestSubcommandTermLength(_cmdS5RrxmU, _helperqqmv3m2)
		const _returnValueE16r5j = -2.0334639062742577;
		const _argumentfB0sjqe = () => { return _returnValueE16r5j };
		const _returnValuentdWyBK = await _HelpHCKuI2h.argumentTerm(_argumentfB0sjqe)
		const _cmdCZ1VMv1 = false;
		const _helperQKElVzv = []
		const _returnValueB2RWduk = await _HelpHCKuI2h.padWidth(_cmdCZ1VMv1, _helperQKElVzv)
	});

	it('test for Help', async () => {
		const _HelptyXi1bm = new Help()
		const _argumentZc3jvex = undefined;
		const _returnValueeTZG80S = await _HelptyXi1bm.argumentTerm(_argumentZc3jvex)
		const _arrayValueKSsCxCM = false;
		const _arrayValueFeJqsaL = 2.1395353908616705;
		const _arrayValuekkoe6tA = undefined;
		const _arrayValueeYSwxlh = [_arrayValueFeJqsaL, _arrayValuekkoe6tA]
		const _arrayValueVEve8b = undefined;
		const _cmddJfIEZ2 = [_arrayValueKSsCxCM, _arrayValueeYSwxlh, _arrayValueVEve8b]
		const _returnValueXSw4Oow = await _HelptyXi1bm.commandDescription(_cmddJfIEZ2)
		const _cmdZvQ98e9 = "BWdtpURL5Hze6o43dyeiLA9XE2zylBQjozFJde7P2RBYyU7qPWWW9MFFMxKnmFbeiV6fYgNwoKhsMQktJemjAvNMDf4B";
		const _returnValuee4WxMYp = await _HelptyXi1bm.subcommandDescription(_cmdZvQ98e9)
	});

	it('test for Help', async () => {
		const _HelpJtCX23 = new Help()
		const _arrayValueRzJjCP = {
		
	}
		const _arrayValuetCh5mA3 = "YTIzkRrd2zxpD1HwLRrhDvHKYVC2YLKDtf4yvmk4IiVrMgUQzIn7d8wJsi9FuKZTwPnyJRf2yJSJXWbGc";
		const _arrayValuefhzO4cj = [_arrayValueRzJjCP, _arrayValuetCh5mA3]
		const _returnValueTsnUyBJ = -6.656955289105131;
		const _arrayValueFb1V1Zy = () => { return _returnValueTsnUyBJ };
		const _optionhODvuYJ = [_arrayValuefhzO4cj, _arrayValueFb1V1Zy]
		const _returnValuesqn8urP = await _HelpJtCX23.optionDescription(_optionhODvuYJ)
		const _cmdIB8BcaY = "V0DkG4I2RwaTzmRQVrQ1wSg0JbrEcHQf46LtAxT54umMOxWWjjWHr1Th0THuWfxwrp5RsB4pKa6KW7";
		const _arrayValueMhR5s0n = null;
		const _arrayValueMVx1xwr = false;
		const _arrayValueGJTNMc6 = {
		
	}
		const _helperU8JzanO = [_arrayValueMhR5s0n, _arrayValueMVx1xwr, _arrayValueGJTNMc6]
		const _returnValuekOLzWT = await _HelpJtCX23.longestArgumentTermLength(_cmdIB8BcaY, _helperU8JzanO)
	});

	it('test for Help', async () => {
		const _HelppP8NyG = new Help()
		const _cmdQSUwsGQ = []
		const _returnValuerxiAyK = await _HelppP8NyG.visibleArguments(_cmdQSUwsGQ)
		const _cmdxZLeSxQ = 3.2065988983367752;
		const _returnValueNRbWSm = await _HelppP8NyG.subcommandTerm(_cmdxZLeSxQ)
		const _argumentlSNkzgc = "a6S5C5EtE3WcE";
		const _returnValueRywXiUn = await _HelppP8NyG.argumentTerm(_argumentlSNkzgc)
		const _optionVWh5Kya = {
		
	}
		const _returnValuexWPw7rP = await _HelppP8NyG.optionTerm(_optionVWh5Kya)
	});

	it('test for Help', async () => {
		const _HelprtG6Po4 = new Help()
		const _arrayValueaC8BHPi = {
		
	}
		const _arrayValueXoHAUc = 9.834388912224682;
		const _arrayValueSCrJJd = false;
		const _arrayValueurTQVB = undefined;
		const _arrayValuewddotd2 = 9.034684069209764;
		const _arrayValuegIixEY = [_arrayValueurTQVB, _arrayValuewddotd2]
		const _arrayValueOGpA5mu = [_arrayValueSCrJJd, _arrayValuegIixEY]
		const _arrayValueOsBYL6 = null;
		const _arrayValuetJkvRnU = false;
		const _arrayValueM0mkzbN = [_arrayValueXoHAUc, _arrayValueOGpA5mu, _arrayValueOsBYL6, _arrayValuetJkvRnU]
		const _arrayValuehAx5bcJ = undefined;
		const _returnValuelVoJFNr = 7.709158719631176;
		const _arrayValueJP5rT8G = () => { return _returnValuelVoJFNr };
		const _arrayValueqK0Idi8 = [_arrayValuehAx5bcJ, _arrayValueJP5rT8G]
		const _cmdigRqri = [_arrayValueaC8BHPi, _arrayValueM0mkzbN, _arrayValueqK0Idi8]
		const _returnValuel3mljvl = await _HelprtG6Po4.commandUsage(_cmdigRqri)
		const _cmdwFioY3h = undefined;
		const _helperh1XYOW8 = undefined;
		const _returnValueHwGGWLu = await _HelprtG6Po4.formatHelp(_cmdwFioY3h, _helperh1XYOW8)
		const _cmdu1dGmPs = true;
		const _helperwtGUNl2 = undefined;
		const _returnValueGkyHkdP = await _HelprtG6Po4.padWidth(_cmdu1dGmPs, _helperwtGUNl2)
		const _cmdVbf1zUH = {
		
	}
		const _returnValueyWxG5x = await _HelprtG6Po4.visibleOptions(_cmdVbf1zUH)
	});

	it('test for Help', async () => {
		const _HelpaXGjLAc = new Help()
		const _stroxs9ah = "uiWwG9zMGLO9VA3qpSIFrarAgBMNa36NLzNUAjHs";
		const _widthwtS97wE = null;
		const _arrayValueRKEvtz7 = {
		
	}
		const _arrayValuegbpn740 = true;
		const _indentOMbPAxa = [_arrayValueRKEvtz7, _arrayValuegbpn740]
		const _minColumnWidthkDYXXw8 = undefined;
		const _returnValueiBRD9Z = await _HelpaXGjLAc.wrap(_stroxs9ah, _widthwtS97wE, _indentOMbPAxa, _minColumnWidthkDYXXw8)
		const _cmdcsOSiRl = null;
		const _returnValuenq6DCi = await _HelpaXGjLAc.visibleArguments(_cmdcsOSiRl)
	});
})