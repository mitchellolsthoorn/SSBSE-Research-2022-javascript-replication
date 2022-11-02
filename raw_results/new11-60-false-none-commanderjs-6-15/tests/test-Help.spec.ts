export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpDH0cAg5 = new Help()
		const _returnValuelhDsPe7 = {
		
	}
		const _arrayValueS1ttgFh = () => { return _returnValuelhDsPe7 };
		const _cmdeIKWKmE = [_arrayValueS1ttgFh]
		const _returnValuehmmIuPC = await _HelpDH0cAg5.visibleOptions(_cmdeIKWKmE)
		const _optionjC7066d = undefined;
		const _returnValueJ4mQY3N = await _HelpDH0cAg5.optionTerm(_optionjC7066d)
		const _cmdtq6NTxA = -7.604041825655049;
		const _helpercXZBBcO = 2.7538653515711218;
		const _returnValueyYs1zlD = await _HelpDH0cAg5.formatHelp(_cmdtq6NTxA, _helpercXZBBcO)
		const _argumentqgy6x4h = true;
		const _returnValueTOAhgQ = await _HelpDH0cAg5.argumentDescription(_argumentqgy6x4h)
		const _cmdMBbpFEw = {
		
	}
		const _returnValueFmFcVVr = await _HelpDH0cAg5.commandUsage(_cmdMBbpFEw)
	});

	it('test for Help', async () => {
		const _HelpOhsCtV = new Help()
		const _argumentXxhQQbZ = undefined;
		const _returnValueraeryey = await _HelpOhsCtV.argumentDescription(_argumentXxhQQbZ)
		const _arrayValueFQ0YblL = undefined;
		const _arrayValueQRm2T5x = null;
		const _cmdzaLdrPT = [_arrayValueFQ0YblL, _arrayValueQRm2T5x]
		const _returnValuefDaKQWp = await _HelpOhsCtV.subcommandTerm(_cmdzaLdrPT)
		const _cmdJJ7ZJ1J = undefined;
		const _returnValuebAPR1vw = -7.215049007154708;
		const _helperOShErxd = () => { return _returnValuebAPR1vw };
		const _returnValueYBcegR8 = await _HelpOhsCtV.longestSubcommandTermLength(_cmdJJ7ZJ1J, _helperOShErxd)
	});

	it('test for Help', async () => {
		const _Helpbm8V2KY = new Help()
		const _strFhJ5jh = "CUKuvVPLD6jheN8DgQkrouX8U2ursQnuyibGmgNiglQOLQbMeAcFVm0XIs1IsoiTPoSfe73Otc6pbRGnSiwHMX6bw0zUwGqQN";
		const _widthNUmZkiU = null;
		const _indentSlxdcCS = undefined;
		const _minColumnWidthgZKchoW = -1.4362738270275202;
		const _returnValueZkWIIbA = await _Helpbm8V2KY.wrap(_strFhJ5jh, _widthNUmZkiU, _indentSlxdcCS, _minColumnWidthgZKchoW)
		const _cmdwF5H3o = true;
		const _helperwU4WbIG = true;
		const _returnValueP0b61lO = await _Helpbm8V2KY.longestOptionTermLength(_cmdwF5H3o, _helperwU4WbIG)
		const _cmdhPs88tV = "xRMX7cyCKiBWXMsBO08xC9mZD27opsh6Cmb7izAEwSoGuiWyNjHO9v2kpCsBElLT";
		const _helperbGq4xm9 = false;
		const _returnValueCneY8na = await _Helpbm8V2KY.longestOptionTermLength(_cmdhPs88tV, _helperbGq4xm9)
		const _optionSjs2Rs5 = "1et9Kg6ZzJeWbRyy2APHvL8jiSRuvxOM8OQEWGMvCo";
		const _returnValuewdc8dUs = await _Helpbm8V2KY.optionTerm(_optionSjs2Rs5)
	});

	it('test for Help', async () => {
		const _HelpA10AvVM = new Help()
		const _cmdnSfl2IE = "7J5aalS1mLBJ3HWOynMR1r7ASU9VL7R3uLmfHHlIKNeidsXNhmuKU1ObJH0FN9";
		const _helperAUpXpk8 = {
		
	}
		const _returnValueYa8eha = await _HelpA10AvVM.padWidth(_cmdnSfl2IE, _helperAUpXpk8)
	});

	it('test for Help', async () => {
		const _HelpJaayqXm = new Help()
		const _cmdF2HcvIT = undefined;
		const _returnValueradjBCp = await _HelpJaayqXm.commandDescription(_cmdF2HcvIT)
		const _cmdDovHlSj = "M4TU2F2WJXf3KTghmKmfziu3rBjdObDQEsnPuMXAp8Crqm";
		const _arrayValueaITtvTn = undefined;
		const _arrayValuetbegs9b = "kOWnpRX";
		const _helperTrFkDe = [_arrayValueaITtvTn, _arrayValuetbegs9b]
		const _returnValuelnilx5M = await _HelpJaayqXm.longestArgumentTermLength(_cmdDovHlSj, _helperTrFkDe)
		const _cmdpoIDuSB = 5.879966971132898;
		const _helperMWdiMDJ = null;
		const _returnValuenmgLOKx = await _HelpJaayqXm.longestSubcommandTermLength(_cmdpoIDuSB, _helperMWdiMDJ)
		const _optionTpFaEXC = -6.010505254852312;
		const _returnValueQGqrFYj = await _HelpJaayqXm.optionTerm(_optionTpFaEXC)
		const _cmdrNriOeW = undefined;
		const _arrayValueIBPAmNk = true;
		const _helperV5d7XjS = [_arrayValueIBPAmNk]
		const _returnValuejUnUnhU = await _HelpJaayqXm.longestOptionTermLength(_cmdrNriOeW, _helperV5d7XjS)
	});

	it('test for Help', async () => {
		const _Helpu5d3uVX = new Help()
		const _cmdTTga0y5 = false;
		const _returnValueWsbQySA = await _Helpu5d3uVX.commandUsage(_cmdTTga0y5)
		const _cmdHXMnSy = null;
		const _returnValueq7VHYpD = 6.481798326854896;
		const _helperb19vmJq = () => { return _returnValueq7VHYpD };
		const _returnValue4MPLaV = await _Helpu5d3uVX.padWidth(_cmdHXMnSy, _helperb19vmJq)
		const _argumentmeGl2wC = null;
		const _returnValuehFqDwz = await _Helpu5d3uVX.argumentTerm(_argumentmeGl2wC)
		const _cmdvkUoL0 = {
		
	}
		const _helperylMpG3h = {
		
	}
		const _returnValuebeM4eOu = await _Helpu5d3uVX.formatHelp(_cmdvkUoL0, _helperylMpG3h)
		const _cmdZAR1QDg = -4.814765350267297;
		const _helperkQNMr7 = 7.688914936090217;
		const _returnValuexkEDJ6u = await _Helpu5d3uVX.longestSubcommandTermLength(_cmdZAR1QDg, _helperkQNMr7)
	});

	it('test for Help', async () => {
		const _HelpuyXh3pr = new Help()
		const _cmdiDWEqIF = {
		
	}
		const _returnValueTb3ybC7 = await _HelpuyXh3pr.visibleArguments(_cmdiDWEqIF)
		const _cmdYsS7Za2 = undefined;
		const _helperryE0ZMI = true;
		const _returnValuePTMswnu = await _HelpuyXh3pr.formatHelp(_cmdYsS7Za2, _helperryE0ZMI)
		const _cmdhDkSFg8 = undefined;
		const _helper15NnjQ = -3.1140806022712972;
		const _returnValuePgoTFQd = await _HelpuyXh3pr.longestOptionTermLength(_cmdhDkSFg8, _helper15NnjQ)
	});

	it('test for Help', async () => {
		const _HelpJXfQLkj = new Help()
		const _cmdQpjTkVm = undefined;
		const _returnValueaDJ8m8o = await _HelpJXfQLkj.subcommandDescription(_cmdQpjTkVm)
		const _arrayValuefjyJu3 = "7IcWHwxhMAuqVxFvc82LlqqQg4ATFULaPmXlF36OWwTBqUPeRx4M1SKP2roKYsqU9w7r";
		const _arrayValueh98xLYp = -1.194796762649469;
		const _cmdJKP8Krm = [_arrayValuefjyJu3, _arrayValueh98xLYp]
		const _returnValueMvqOID = await _HelpJXfQLkj.visibleCommands(_cmdJKP8Krm)
		const _arrayValuevrRvor4 = null;
		const _arrayValuetqDtFm0 = null;
		const _arrayValueG4NVNpe = true;
		const _arrayValuexSEHoe5 = [_arrayValuetqDtFm0, _arrayValueG4NVNpe]
		const _arrayValueuGUpbvM = "iVNWv164MBmPCSGM9Ay";
		const _cmdHgZim4y = [_arrayValuevrRvor4, _arrayValuexSEHoe5, _arrayValueuGUpbvM]
		const _returnValuefHFhloV = await _HelpJXfQLkj.subcommandDescription(_cmdHgZim4y)
		const _cmdtaKybO2 = undefined;
		const _helperF99iciX = -2.5059536810487035;
		const _returnValueDmH6dx = await _HelpJXfQLkj.longestSubcommandTermLength(_cmdtaKybO2, _helperF99iciX)
	});

	it('test for Help', async () => {
		const _Helpl1LWURu = new Help()
		const _arrayValuejA6rXU = null;
		const _cmdmLki1F5 = [_arrayValuejA6rXU]
		const _returnValueEiXe3Sx = await _Helpl1LWURu.subcommandTerm(_cmdmLki1F5)
	});

	it('test for Help', async () => {
		const _HelpkZciTCM = new Help()
		const _argumentmfG6SF = -4.464767108922657;
		const _returnValueQ8EZTdJ = await _HelpkZciTCM.argumentDescription(_argumentmfG6SF)
		const _cmdXL8EYc8 = -1.4389039063878393;
		const _returnValueT4V5Ew4 = null;
		const _helperwCvBdnJ = () => { return _returnValueT4V5Ew4 };
		const _returnValuelVoqCdu = await _HelpkZciTCM.longestOptionTermLength(_cmdXL8EYc8, _helperwCvBdnJ)
		const _arrayValueyaTO5XB = undefined;
		const _arrayValuegTLFTBZ = 7.904480062661243;
		const _cmdNkF3qEa = [_arrayValueyaTO5XB, _arrayValuegTLFTBZ]
		const _returnValueIVsN9CW = await _HelpkZciTCM.commandDescription(_cmdNkF3qEa)
		const _cmdEO0l3LN = -5.9955213758073915;
		const _returnValueV8XBlHe = await _HelpkZciTCM.commandDescription(_cmdEO0l3LN)
	});

	it('test for Help', async () => {
		const _HelpzbHC2bm = new Help()
		const _optionVSnrCc = "WxwCR84iPYfWvsRs3U2ypIBYAUvv69AgxPEfosLIUbhxKN8uJA7lopptRxrmOaNV5Ggy393qnyD9fbtRXIExR9QKo4H";
		const _returnValueprAzpFF = await _HelpzbHC2bm.optionTerm(_optionVSnrCc)
		const _cmdvZfNy93 = null;
		const _returnValueFIJho7r = await _HelpzbHC2bm.commandDescription(_cmdvZfNy93)
		const _cmdoBqgc1X = -0.4385594607778831;
		const _helperswBxpL = undefined;
		const _returnValuelixxNxt = await _HelpzbHC2bm.longestOptionTermLength(_cmdoBqgc1X, _helperswBxpL)
		const _returnValued5zI0zj = 5.5256548002125445;
		const _cmdtNDD9Wm = () => { return _returnValued5zI0zj };
		const _helperiUKSoCp = {
		
	}
		const _returnValuetYxADsv = await _HelpzbHC2bm.formatHelp(_cmdtNDD9Wm, _helperiUKSoCp)
		const _cmdo3nBqyL = null;
		const _returnValueaD6nA3T = await _HelpzbHC2bm.visibleArguments(_cmdo3nBqyL)
	});

	it('test for Help', async () => {
		const _Helpgtmb5ub = new Help()
		const _optionO5I3zb = undefined;
		const _returnValueyOfUG1j = await _Helpgtmb5ub.optionDescription(_optionO5I3zb)
		const _arrayValueuiD9IRi = null;
		const _arrayValueUbEXa3T = [_arrayValueuiD9IRi]
		const _arrayValuenLP15d9 = undefined;
		const _arrayValuemQkX4nJ = undefined;
		const _arrayValueFn0EfqF = null;
		const _arrayValueNorBNI0 = null;
		const _arrayValueiY95Xbh = [_arrayValuemQkX4nJ, _arrayValueFn0EfqF, _arrayValueNorBNI0]
		const _arrayValuesfNBWCS = [_arrayValueUbEXa3T, _arrayValuenLP15d9, _arrayValueiY95Xbh]
		const _arrayValueed0rVIt = -4.1999390558662135;
		const _arrayValueCzm8FiI = [_arrayValuesfNBWCS, _arrayValueed0rVIt]
		const _arrayValue4FWUC8 = true;
		const _optionJKEbkym = [_arrayValueCzm8FiI, _arrayValue4FWUC8]
		const _returnValueaLU5ynu = await _Helpgtmb5ub.optionTerm(_optionJKEbkym)
		const _cmdTvhqdnZ = false;
		const _helperJs2YX2C = "yxTh";
		const _returnValuedIhkijy = await _Helpgtmb5ub.formatHelp(_cmdTvhqdnZ, _helperJs2YX2C)
		const _optionXckTNjF = undefined;
		const _returnValueuAvyh3f = await _Helpgtmb5ub.optionDescription(_optionXckTNjF)
	});

	it('test for Help', async () => {
		const _HelpPPoYL4T = new Help()
		const _cmdtgiZaCD = false;
		const _helperme4p3xQ = -0.7047298519853857;
		const _returnValueF99Jy7o = await _HelpPPoYL4T.longestSubcommandTermLength(_cmdtgiZaCD, _helperme4p3xQ)
	});

	it('test for Help', async () => {
		const _HelpfH2ZcRM = new Help()
		const _argumentabgGc5I = undefined;
		const _returnValuekQAnMF = await _HelpfH2ZcRM.argumentTerm(_argumentabgGc5I)
		const _cmdbhUDOIk = false;
		const _returnValueO4nZA7i = await _HelpfH2ZcRM.visibleCommands(_cmdbhUDOIk)
	});

	it('test for Help', async () => {
		const _Helpj3QwJ8B = new Help()
		const _cmdE4gS7t = undefined;
		const _arrayValuewBdxgMU = 2.4792046448178784;
		const _arrayValuesy7z8cg = []
		const _helperCCLUg8J = [_arrayValuewBdxgMU, _arrayValuesy7z8cg]
		const _returnValueKOMGGm9 = await _Helpj3QwJ8B.longestArgumentTermLength(_cmdE4gS7t, _helperCCLUg8J)
		const _cmdQybCTbB = "MNvSTuunNEZKaBcOwxbttfD4KduufE6bB9l5CI3";
		const _helperCNnYozF = true;
		const _returnValueX6ED0Jf = await _Helpj3QwJ8B.longestSubcommandTermLength(_cmdQybCTbB, _helperCNnYozF)
		const _cmdAcziWGy = 6.817485619545568;
		const _returnValueQ8Uhe2O = await _Helpj3QwJ8B.visibleOptions(_cmdAcziWGy)
		const _cmdMZVafiA = true;
		const _returnValuema5Sb59 = await _Helpj3QwJ8B.commandDescription(_cmdMZVafiA)
	});

	it('test for Help', async () => {
		const _HelpfcjaaVD = new Help()
		const _optionLgwFZqW = "cyVdSG2sHWuVl98h5hUJ5";
		const _returnValuexNaxvte = await _HelpfcjaaVD.optionDescription(_optionLgwFZqW)
		const _arrayValueLv898hb = false;
		const _argumentyY45kyr = [_arrayValueLv898hb]
		const _returnValueIjq9Hwu = await _HelpfcjaaVD.argumentTerm(_argumentyY45kyr)
	});

	it('test for Help', async () => {
		const _HelpV7VxRcD = new Help()
		const _cmd8H8rI0 = undefined;
		const _returnValueG5kjqTP = await _HelpV7VxRcD.visibleCommands(_cmd8H8rI0)
	});

	it('test for Help', async () => {
		const _HelpIAbDz8 = new Help()
		const _optionFRuekkR = true;
		const _returnValuexsxK51 = await _HelpIAbDz8.optionTerm(_optionFRuekkR)
		const _cmdpL1HP1c = null;
		const _arrayValueE34BAf5 = "hShckUfLxPdlEbbVFkJ";
		const _arrayValueC1Sjyyy = "jLnYPR";
		const _arrayValuedQrXav5 = [_arrayValueE34BAf5, _arrayValueC1Sjyyy]
		const _arrayValuezUX2nC = null;
		const _helperIywvNC = [_arrayValuedQrXav5, _arrayValuezUX2nC]
		const _returnValueHAiRVrV = await _HelpIAbDz8.formatHelp(_cmdpL1HP1c, _helperIywvNC)
		const _arrayValuej8mSHTg = false;
		const _arrayValueEn4I2nd = 4.4842649211544945;
		const _arrayValueFBF8dLK = null;
		const _cmdI9nSIP = [_arrayValuej8mSHTg, _arrayValueEn4I2nd, _arrayValueFBF8dLK]
		const _returnValueyNhHtcq = await _HelpIAbDz8.visibleCommands(_cmdI9nSIP)
	});

	it('test for Help', async () => {
		const _Help4pL4ic = new Help()
		const _strjdufp9o = "fqCtHHtVQMSui4XzsdaceRBWrP9kABKJuHWIJDvA9O5WFx6CDBMHOJ";
		const _widthcb8fRNS = true;
		const _indentzQQ2el7 = null;
		const _minColumnWidthgENyqO = 5.6957774704193795;
		const _returnValueHxIf2Zr = await _Help4pL4ic.wrap(_strjdufp9o, _widthcb8fRNS, _indentzQQ2el7, _minColumnWidthgENyqO)
		const _cmdVMySltP = {
		
	}
		const _returnValueg4s9gR2 = await _Help4pL4ic.commandUsage(_cmdVMySltP)
	});
})