export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpAdVAlak = new Help()
		const _cmdblBuy5p = undefined;
		const _returnValueVWPbnuy = await _HelpAdVAlak.visibleArguments(_cmdblBuy5p)
		const _cmdYqMfqPb = null;
		const _returnValueCzWfHTW = await _HelpAdVAlak.subcommandDescription(_cmdYqMfqPb)
		const _cmdQrSxv56 = undefined;
		const _returnValueroR5tsP = await _HelpAdVAlak.subcommandDescription(_cmdQrSxv56)
		const _cmdoriro7W = false;
		const _arrayValueqwMTMnb = "vQAGX1TrZcxBZsoxVtrRzSadr9hrRsPobBugy1akoMs11OoaMR9kuB";
		const _arrayValuebKXgZkA = 2.512690613181496;
		const _helperpT9myEo = [_arrayValueqwMTMnb, _arrayValuebKXgZkA]
		const _returnValueYaRhSI = await _HelpAdVAlak.longestOptionTermLength(_cmdoriro7W, _helperpT9myEo)
	});

	it('test for Help', async () => {
		const _HelpPGBhgi = new Help()
		const _cmdQb18NN = null;
		const _returnValueCVr4bnM = await _HelpPGBhgi.commandUsage(_cmdQb18NN)
	});

	it('test for Help', async () => {
		const _HelpLayUDL = new Help()
		const _cmdfpvTFZs = 7.7700282192759715;
		const _returnValueFmDZVIv = await _HelpLayUDL.subcommandTerm(_cmdfpvTFZs)
		const _cmdaCQwujw = null;
		const _helperUuPhiU1 = undefined;
		const _returnValueFN6eq15 = await _HelpLayUDL.formatHelp(_cmdaCQwujw, _helperUuPhiU1)
	});

	it('test for Help', async () => {
		const _HelpHxDiNQB = new Help()
		const _argumentKbqCF2 = {
		
	}
		const _returnValueSb2KnHr = await _HelpHxDiNQB.argumentTerm(_argumentKbqCF2)
		const _optionQVH840m = "MpfuXRMTS5NxzEbl9942RMMAQwk37dqhbOpFtTw1OBtL9sy4c7dFjT9y";
		const _returnValuePm3S7dt = await _HelpHxDiNQB.optionDescription(_optionQVH840m)
		const _arrayValueshQohN4 = null;
		const _arrayValueD34Mo8d = {
		
	}
		const _cmdypnZU7r = [_arrayValueshQohN4, _arrayValueD34Mo8d]
		const _returnValuepXvS8xP = await _HelpHxDiNQB.visibleCommands(_cmdypnZU7r)
		const _cmdyNp0UI = null;
		const _helperhKeKRd9 = 0.8810403822943798;
		const _returnValuefFcQHjV = await _HelpHxDiNQB.formatHelp(_cmdyNp0UI, _helperhKeKRd9)
		const _optionSAZkaXV = undefined;
		const _returnValuez1t6PJa = await _HelpHxDiNQB.optionTerm(_optionSAZkaXV)
	});

	it('test for Help', async () => {
		const _HelpJi3wVFH = new Help()
		const _optionfk4bRxZ = undefined;
		const _returnValuemLPSLyg = await _HelpJi3wVFH.optionDescription(_optionfk4bRxZ)
	});

	it('test for Help', async () => {
		const _HelpuRRWiu4 = new Help()
		const _returnValueizlraIF = undefined;
		const _cmdvtO0IgS = () => { return _returnValueizlraIF };
		const _returnValueypr5A7I = await _HelpuRRWiu4.visibleCommands(_cmdvtO0IgS)
		const _cmdUoOo9lB = true;
		const _returnValue0YCBb8 = await _HelpuRRWiu4.visibleArguments(_cmdUoOo9lB)
		const _strI90lZ0C = null;
		const _widthnqSFUyB = -1.2377650147303818;
		const _returnValueKuU0nt = null;
		const _returnValueaZ0DZW = () => { return _returnValueKuU0nt };
		const _indentUPnTkAK = () => { return _returnValueaZ0DZW };
		const _arrayValueJTA7flw = 5.019197810590722;
		const _arrayValuedoZuclB = -2.9434507030243937;
		const _arrayValueTJPRF2S = 4.111590471734871;
		const _minColumnWidthnIz3BDY = [_arrayValueJTA7flw, _arrayValuedoZuclB, _arrayValueTJPRF2S]
		const _returnValueoBcCwJX = await _HelpuRRWiu4.wrap(_strI90lZ0C, _widthnqSFUyB, _indentUPnTkAK, _minColumnWidthnIz3BDY)
		const _cmdoFJ65YW = true;
		const _returnValuewG8gUKx = await _HelpuRRWiu4.commandDescription(_cmdoFJ65YW)
	});

	it('test for Help', async () => {
		const _HelpFFwi2BE = new Help()
		const _arrayValuefIyCOdm = undefined;
		const _arrayValuet1cskgM = {
		
	}
		const _arrayValueNOy3Ag = [_arrayValuefIyCOdm, _arrayValuet1cskgM]
		const _arrayValueyAK3zrf = "rb6sClc6tEhaLPPF6bIFkeHMMyDIrOcTQAS68RcM2OKyBycPoS";
		const _arrayValuePBki1yu = "HfuPWYVCV3ROnxoeRPcbhN7bMhv8QF5bBZ2b1NmNCLsPAzhUZwcGKASsqhzZy5WUlWhsndBm4oeQyrBr4Gag1MFy4";
		const _returnValueVfi3no = {
		
	}
		const _arrayValueI3eQzpO = () => { return _returnValueVfi3no };
		const _cmdwdDqVYz = [_arrayValueNOy3Ag, _arrayValueyAK3zrf, _arrayValuePBki1yu, _arrayValueI3eQzpO]
		const _arrayValueaI8l7To = undefined;
		const _arrayValue6J7vLi = true;
		const _arrayValuexTw6WgV = "jzp4cAbGM2BjET";
		const _arrayValueLIpESCD = {
		
	}
		const _arrayValuejY776mB = undefined;
		const _arrayValueDUGWjoN = false;
		const _arrayValueThz2qXx = [_arrayValuexTw6WgV, _arrayValueLIpESCD, _arrayValuejY776mB, _arrayValueDUGWjoN]
		const _returnValueL7TTdl7 = [_arrayValue6J7vLi, _arrayValueThz2qXx]
		const _arrayValueDmwKpW5 = () => { return _returnValueL7TTdl7 };
		const _returnValueO6Fxk9m = null;
		const _arrayValueHwk4YQl = () => { return _returnValueO6Fxk9m };
		const _arrayValuehwh66RU = undefined;
		const _helperP8e5v1o = [_arrayValueaI8l7To, _arrayValueDmwKpW5, _arrayValueHwk4YQl, _arrayValuehwh66RU]
		const _returnValuewrOmRNf = await _HelpFFwi2BE.longestSubcommandTermLength(_cmdwdDqVYz, _helperP8e5v1o)
	});

	it('test for Help', async () => {
		const _HelphhO1Xt9 = new Help()
		const _returnValueQQuhIqp = undefined;
		const _arrayValueXCRRhwq = () => { return _returnValueQQuhIqp };
		const _strOSzm8rq = [_arrayValueXCRRhwq]
		const _widthf41Z0XB = 0.8530949935441949;
		const _arrayValuewVftwj1 = true;
		const _arrayValuedX0qNfE = null;
		const _returnValueHTso9H2 = undefined;
		const _arrayValueEXH0yjJ = () => { return _returnValueHTso9H2 };
		const _arrayValuegnduOtl = {
		
	}
		const _indentlhMgde = [_arrayValuewVftwj1, _arrayValuedX0qNfE, _arrayValueEXH0yjJ, _arrayValuegnduOtl]
		const _arrayValueWn7BWB1 = undefined;
		const _arrayValueb31qASs = true;
		const _minColumnWidthPCl9cmv = [_arrayValueWn7BWB1, _arrayValueb31qASs]
		const _returnValuecyomYV = await _HelphhO1Xt9.wrap(_strOSzm8rq, _widthf41Z0XB, _indentlhMgde, _minColumnWidthPCl9cmv)
		const _cmdlAyjJpc = []
		const _helperbgFOZyn = undefined;
		const _returnValueZpU7UKx = await _HelphhO1Xt9.longestSubcommandTermLength(_cmdlAyjJpc, _helperbgFOZyn)
		const _cmdV7bmmlT = null;
		const _returnValuesH5fG1c = await _HelphhO1Xt9.visibleOptions(_cmdV7bmmlT)
	});

	it('test for Help', async () => {
		const _HelpD9pFfJ = new Help()
		const _optionRA2dNUw = true;
		const _returnValuewMuE9P = await _HelpD9pFfJ.optionDescription(_optionRA2dNUw)
		const _argumentQCL0dak = 2.0786611718905768;
		const _returnValuew7kUguC = await _HelpD9pFfJ.argumentTerm(_argumentQCL0dak)
		const _optionz0ysIT = undefined;
		const _returnValuegFuF2mG = await _HelpD9pFfJ.optionTerm(_optionz0ysIT)
		const _cmd9AYXdZ = null;
		const _helperjmnWcv = []
		const _returnValue2NQd28 = await _HelpD9pFfJ.padWidth(_cmd9AYXdZ, _helperjmnWcv)
	});

	it('test for Help', async () => {
		const _HelpQa8qPz5 = new Help()
		const _cmdT2nEO8W = undefined;
		const _helperSKXQzkk = "KX9fqTCBQUgqIUh2LTTwW91OZ26tiUchQUOjxwhRlPmu09U0gDJ";
		const _returnValueYTV7AYl = await _HelpQa8qPz5.longestOptionTermLength(_cmdT2nEO8W, _helperSKXQzkk)
		const _cmdPBGFRjK = "dpURKHAWEBFCezAMBFxo5jd";
		const _helperKkZGtm = false;
		const _returnValueqXS08Sw = await _HelpQa8qPz5.longestSubcommandTermLength(_cmdPBGFRjK, _helperKkZGtm)
		const _cmdjFQmgK = 5.44138219190531;
		const _returnValueCVfnkRC = await _HelpQa8qPz5.visibleOptions(_cmdjFQmgK)
		const _returnValueAxRFzTs = undefined;
		const _cmdQCGanlD = () => { return _returnValueAxRFzTs };
		const _helperwfh7hIz = true;
		const _returnValuejpLY0CK = await _HelpQa8qPz5.longestSubcommandTermLength(_cmdQCGanlD, _helperwfh7hIz)
	});

	it('test for Help', async () => {
		const _HelpMoKszD = new Help()
		const _optionDDUQjuG = undefined;
		const _returnValueqiSwdkE = await _HelpMoKszD.optionTerm(_optionDDUQjuG)
	});

	it('test for Help', async () => {
		const _HelpXvPZlUz = new Help()
		const _cmdaoHQ6Gj = 4.718784991851566;
		const _arrayValueYroS4z7 = "d5F136yu";
		const _arrayValuerySwDKX = undefined;
		const _helperg8tcftE = [_arrayValueYroS4z7, _arrayValuerySwDKX]
		const _returnValueqfHQhta = await _HelpXvPZlUz.longestArgumentTermLength(_cmdaoHQ6Gj, _helperg8tcftE)
		const _returnValueuGaKbIg = 2.4726935482689143;
		const _cmdzp5bMKM = () => { return _returnValueuGaKbIg };
		const _helperA4l48rq = -7.919336292876433;
		const _returnValueKosrgVZ = await _HelpXvPZlUz.longestOptionTermLength(_cmdzp5bMKM, _helperA4l48rq)
	});

	it('test for Help', async () => {
		const _HelpdnXuxNR = new Help()
		const _optionjAvKUJ = {
		
	}
		const _returnValueYpuAUv = await _HelpdnXuxNR.optionTerm(_optionjAvKUJ)
		const _cmdzu2qAee = "RoE";
		const _returnValueqyyNwee = await _HelpdnXuxNR.commandUsage(_cmdzu2qAee)
		const _cmdiJQgz8 = "Yu";
		const _returnValuehbb5n7l = await _HelpdnXuxNR.visibleOptions(_cmdiJQgz8)
	});

	it('test for Help', async () => {
		const _HelpqBrZakz = new Help()
		const _cmdsk8oiUe = "LvVzdzqXziTX3vxKB3ms20J4buJGZ7Txx4HOpRmcBmg1RGoDh8yglUw9NTd3xsD3XMphQ4gDXQ";
		const _helperaZ3ZCyb = null;
		const _returnValuexkpeAgZ = await _HelpqBrZakz.padWidth(_cmdsk8oiUe, _helperaZ3ZCyb)
		const _cmdHU1DJEU = {
		
	}
		const _returnValuebliSb6 = await _HelpqBrZakz.visibleOptions(_cmdHU1DJEU)
	});

	it('test for Help', async () => {
		const _HelpVkiTtYG = new Help()
		const _cmdWrwFv28 = "SQs3K8E2YGQw3F2GURqp3Hwy6syyXEcfXWXkCSSxsx2rVKFK91g3RoPtD07";
		const _helperGRjuFvQ = undefined;
		const _returnValueoRSlIsW = await _HelpVkiTtYG.formatHelp(_cmdWrwFv28, _helperGRjuFvQ)
		const _optionhGuR3mH = false;
		const _returnValue7lSFDw = await _HelpVkiTtYG.optionTerm(_optionhGuR3mH)
		const _cmdAMfj7M = "FGiS5c";
		const _helperlQxNFdP = "";
		const _returnValueG5YNW7S = await _HelpVkiTtYG.longestOptionTermLength(_cmdAMfj7M, _helperlQxNFdP)
	});

	it('test for Help', async () => {
		const _HelpVaShQS1 = new Help()
		const _argumentmYRzZz = true;
		const _returnValueU7Nt03V = await _HelpVaShQS1.argumentDescription(_argumentmYRzZz)
		const _cmdFXror4i = 4.051185987248205;
		const _returnValueuQ1H0nS = await _HelpVaShQS1.visibleArguments(_cmdFXror4i)
		const _options8naxpa = "CTpV55MB6JUvTPhilF4Fwf3fn768Lkw45dYzpUyQayz";
		const _returnValueWdglUEd = await _HelpVaShQS1.optionDescription(_options8naxpa)
	});

	it('test for Help', async () => {
		const _Helpx8NBYQ1 = new Help()
		const _returnValueE9aS6mO = 4.112577584882093;
		const _cmdEWiAe9 = () => { return _returnValueE9aS6mO };
		const _returnValueTMe4MtQ = await _Helpx8NBYQ1.subcommandDescription(_cmdEWiAe9)
		const _optionfcJzK3x = true;
		const _returnValueLh3umKR = await _Helpx8NBYQ1.optionDescription(_optionfcJzK3x)
		const _returnValueYbPVNF8 = {
		
	}
		const _cmdceYRyKI = () => { return _returnValueYbPVNF8 };
		const _returnValueKBlSJ5G = await _Helpx8NBYQ1.subcommandTerm(_cmdceYRyKI)
		const _returnValuePoblEcM = undefined;
		const _cmdmYKChq = () => { return _returnValuePoblEcM };
		const _helperZLFsBnD = undefined;
		const _returnValueQ16q240 = await _Helpx8NBYQ1.padWidth(_cmdmYKChq, _helperZLFsBnD)
	});

	it('test for Help', async () => {
		const _Helpe7Bl1BT = new Help()
		const _cmdRAXb7K = undefined;
		const _returnValueeUbTI3 = await _Helpe7Bl1BT.visibleOptions(_cmdRAXb7K)
		const _cmdMlr4ilI = null;
		const _returnValuedTRkNMo = await _Helpe7Bl1BT.subcommandDescription(_cmdMlr4ilI)
	});

	it('test for Help', async () => {
		const _HelpHOyKLcs = new Help()
		const _cmdeFbvZmf = "8Nf85orfcPnvGoPwymzOyTAGcF9Anb2BucWroiNtyPXonlogC3f9AREi1l3YH8sbA9UdwDnw";
		const _returnValueqlWdjS2 = await _HelpHOyKLcs.commandDescription(_cmdeFbvZmf)
		const _cmdeYGZ8t1 = "";
		const _returnValuek8EWdD = await _HelpHOyKLcs.commandUsage(_cmdeYGZ8t1)
		const _strjo8HnVP = "CiOpq4pvlBjGfAYn3BKgpoPTXMA3z6SlgbdjpN3WApSWZ7agt5VzmO8";
		const _returnValueIAdZVYj = []
		const _widthOHLG8I = () => { return _returnValueIAdZVYj };
		const _indentHhkQZJE = undefined;
		const _minColumnWidthRmwC027 = -0.01942421373138359;
		const _returnValueehNngH = await _HelpHOyKLcs.wrap(_strjo8HnVP, _widthOHLG8I, _indentHhkQZJE, _minColumnWidthRmwC027)
	});

	it('test for Help', async () => {
		const _Helpfmbj4U1 = new Help()
		const _returnValuefix9KWn = -7.780860087164646;
		const _optiondu2XFzC = () => { return _returnValuefix9KWn };
		const _returnValueCDNHWcS = await _Helpfmbj4U1.optionTerm(_optiondu2XFzC)
		const _strN77BpR3 = "4UxNCc4FY49DIwEmxxpT2yw1wDmynePqFVk9bVna0KTfXShuWy9LqvnB8Tl8aHRUddW6JWmNkK4avmNCVW";
		const _widthFZqpmu2 = {
		
	}
		const _indentGcUYmo = undefined;
		const _minColumnWidthUMrD3Y0 = "jApTeitrC9PQwz6nIGUhoDnu8QR84OeTfsC5ib";
		const _returnValuedmvll1E = await _Helpfmbj4U1.wrap(_strN77BpR3, _widthFZqpmu2, _indentGcUYmo, _minColumnWidthUMrD3Y0)
		const _optionjdsvZl1 = null;
		const _returnValueHRuhd8R = await _Helpfmbj4U1.optionTerm(_optionjdsvZl1)
		const _returnValuet5ogy77 = []
		const _optionQ8dsybT = () => { return _returnValuet5ogy77 };
		const _returnValueaSDMXwk = await _Helpfmbj4U1.optionDescription(_optionQ8dsybT)
	});

	it('test for Help', async () => {
		const _HelpuydSVbE = new Help()
		const _argumentbX5PXx6 = "mNovdnminSn5jQzWe8bb7kkzMJrtmX4i1gOTv1TuQncNHw8oIR8IWz9g7eC67nicjVgqVMZuWlqDjh51vuXrAhoRUr8U";
		const _returnValuexarHDx = await _HelpuydSVbE.argumentDescription(_argumentbX5PXx6)
		const _strWomOUpW = "ew37ftmtFaKlwNJtXOX8JerYfGJwHf309hJf91dcOUr4Xsr9E";
		const _widthPRc1Dey = null;
		const _indentLfU4JG1 = null;
		const _minColumnWidthC84tME = true;
		const _returnValuewam33yQ = await _HelpuydSVbE.wrap(_strWomOUpW, _widthPRc1Dey, _indentLfU4JG1, _minColumnWidthC84tME)
		const _cmduIhqKSo = undefined;
		const _helperfiR6Ilr = true;
		const _returnValueXcRPnQJ = await _HelpuydSVbE.formatHelp(_cmduIhqKSo, _helperfiR6Ilr)
	});
})