export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpHQK5Aro = new Help()
		const _returnValueivDIsbv = {
		
	}
		const _returnValuelc2WXgz = () => { return _returnValueivDIsbv };
		const _cmdUiRp0X4 = () => { return _returnValuelc2WXgz };
		const _arrayValueIYwYikM = "TcU1rwVOITcSz0OXVG6pC";
		const _arrayValuefiHXId4 = true;
		const _arrayValuefb6viME = false;
		const _arrayValueLauBjnW = null;
		const _arrayValueQHsf0Uw = undefined;
		const _returnValueDA6kA40 = false;
		const _arrayValueLPGAG0e = () => { return _returnValueDA6kA40 };
		const _arrayValueivvbOIa = [_arrayValueQHsf0Uw, _arrayValueLPGAG0e]
		const _arrayValueOUTmxWD = "NfIBBlYwQHgivAU6lGCEeEzBhCqsvbECcCx3pIcd6EN";
		const _arrayValueSozEk0e = [_arrayValuefb6viME, _arrayValueLauBjnW, _arrayValueivvbOIa, _arrayValueOUTmxWD]
		const _arrayValueq6Vfh0s = [_arrayValueSozEk0e]
		const _arrayValueEU3nt5G = [_arrayValuefiHXId4, _arrayValueq6Vfh0s]
		const _arrayValueCTEZDn3 = false;
		const _helperQBD6fpY = [_arrayValueIYwYikM, _arrayValueEU3nt5G, _arrayValueCTEZDn3]
		const _returnValueXZPNa53 = await _HelpHQK5Aro.longestOptionTermLength(_cmdUiRp0X4, _helperQBD6fpY)
	});

	it('test for Help', async () => {
		const _HelpNNIXP8u = new Help()
		const _cmdjtE6dmW = "aPadNe9gPFZdpaMBIjoLnSrA6Ole9oi";
		const _returnValuexqkTQdJ = await _HelpNNIXP8u.visibleArguments(_cmdjtE6dmW)
	});

	it('test for Help', async () => {
		const _HelpCbMOFAq = new Help()
		const _cmdF1MKzbv = {
		
	}
		const _returnValueSwquwec = await _HelpCbMOFAq.commandDescription(_cmdF1MKzbv)
		const _cmdSnUF1UH = true;
		const _returnValueYwvGtB = await _HelpCbMOFAq.commandUsage(_cmdSnUF1UH)
		const _arrayValuec3VzPje = 7.13367078372783;
		const _arrayValuesW4OJ9K = "dqdaw9oQQBMNsysDxIo5nvs9PcU5Ot5fDagTDbNGWCdCAHVp4Cihm";
		const _arrayValuemgkeT6 = undefined;
		const _arrayValueXTSlLlo = [_arrayValuesW4OJ9K, _arrayValuemgkeT6]
		const _cmdXeli0Lb = [_arrayValuec3VzPje, _arrayValueXTSlLlo]
		const _helperu6QBd4 = null;
		const _returnValueBXZe1Ec = await _HelpCbMOFAq.longestArgumentTermLength(_cmdXeli0Lb, _helperu6QBd4)
	});

	it('test for Help', async () => {
		const _HelptvEEnce = new Help()
		const _cmdlRqLbEE = null;
		const _returnValuej7mL9PE = await _HelptvEEnce.subcommandTerm(_cmdlRqLbEE)
		const _cmdCG2Xbjn = -0.05752425933824412;
		const _returnValueKNAxpLA = await _HelptvEEnce.subcommandDescription(_cmdCG2Xbjn)
	});

	it('test for Help', async () => {
		const _HelpRQykvlr = new Help()
		const _argumentC0EJCnC = undefined;
		const _returnValueJAEFmvZ = await _HelpRQykvlr.argumentDescription(_argumentC0EJCnC)
		const _argumentoXtnBVF = undefined;
		const _returnValueDNvMnz5 = await _HelpRQykvlr.argumentDescription(_argumentoXtnBVF)
		const _cmdoAUOQlx = "bL56bRjIc6TnBihW1mPoWKaFQ84bRoRU7SO1mZgOsU6wVn4AsjQhq2f4SCo1s8mIMgistoTtstSB";
		const _returnValuewNFI7o3 = await _HelpRQykvlr.commandDescription(_cmdoAUOQlx)
		const _arrayValuerNfayae = undefined;
		const _arrayValueGle5Acc = false;
		const _arrayValueC4P5aHp = true;
		const _cmdZyJxQcY = [_arrayValuerNfayae, _arrayValueGle5Acc, _arrayValueC4P5aHp]
		const _helperY5ODlIH = "NJUgIs5qYI3nMdryuQaFx5b3ij6dExJHaComeLjaDvcXm";
		const _returnValue3QYvYP = await _HelpRQykvlr.longestSubcommandTermLength(_cmdZyJxQcY, _helperY5ODlIH)
	});

	it('test for Help', async () => {
		const _HelpVhdwFcQ = new Help()
		const _optioniXsgfKd = false;
		const _returnValuezEh54c = await _HelpVhdwFcQ.optionTerm(_optioniXsgfKd)
		const _arrayValuezA12YpW = -5.166143003484839;
		const _arrayValueK8m5UW = undefined;
		const _cmdxKLPtk7 = [_arrayValuezA12YpW, _arrayValueK8m5UW]
		const _helpereaMVY01 = {
		
	}
		const _returnValueeG8xGyA = await _HelpVhdwFcQ.longestArgumentTermLength(_cmdxKLPtk7, _helpereaMVY01)
		const _arrayValueEA9MlUW = "b3Bj6np7chyNltYY7aI16C7vdM9wC35xpOTQTjlA8W3osPTtDdSRyqNZkivjklrFYNdO";
		const _strpSUlphJ = [_arrayValueEA9MlUW]
		const _widthQW7K5wN = "POfkPQDHTh9U2lZupyQtbHJ4aAePZuA9ySbwvtOQQqICXq5ZQErV29Gm";
		const _indentPSZ9ReZ = -8.95505184748604;
		const _minColumnWidthYd2W81q = true;
		const _returnValuexKt9AJP = await _HelpVhdwFcQ.wrap(_strpSUlphJ, _widthQW7K5wN, _indentPSZ9ReZ, _minColumnWidthYd2W81q)
		const _arrayValuenxwDcDE = -4.3066029140007425;
		const _arrayValueqM1atBJ = "lQlbm6rRW6PzwuOvaLUnbAJpDu998GEbFoscsp6Cb3HhWyz4wmyy99uykZKbvaMvcVk2rJfJj90w5CDgV1lcqVk9aBvtrRBuUV";
		const _cmdaX61Qr6 = [_arrayValuenxwDcDE, _arrayValueqM1atBJ]
		const _helperIkGeSx9 = {
		
	}
		const _returnValueja5KYKW = await _HelpVhdwFcQ.padWidth(_cmdaX61Qr6, _helperIkGeSx9)
	});

	it('test for Help', async () => {
		const _HelpSsfkQT = new Help()
		const _cmdW7jo6Mh = false;
		const _returnValueLOJulMY = await _HelpSsfkQT.subcommandDescription(_cmdW7jo6Mh)
		const _cmdPfem5Ii = undefined;
		const _arrayValueD6K8cN = "gEPTrphbHAN41Dwjv7s5eQ6UKWwybafJ49If1Mx4PZuHYi7gIAQnjSaSHmOY1";
		const _helperJ8jlURP = [_arrayValueD6K8cN]
		const _returnValuext2DpT3 = await _HelpSsfkQT.longestOptionTermLength(_cmdPfem5Ii, _helperJ8jlURP)
		const _cmdmekfWY = undefined;
		const _helperltIbpFA = "fGBd8b8gxmp29JGe1WaSdTAVsY8x5a";
		const _returnValuei86OkPT = await _HelpSsfkQT.formatHelp(_cmdmekfWY, _helperltIbpFA)
	});

	it('test for Help', async () => {
		const _HelpG2sLYfP = new Help()
		const _arrayValue9OxyWo = []
		const _arrayValuecVcrT6b = "syP939g5nRw9bhyeApTwsihM6lj9IRWPkEdzdMPeLXUqXQoircHxJxAT2j5al9iSvxCYPJhDk16cnKxJJCwQ2jcR";
		const _cmdBCOzjfc = [_arrayValue9OxyWo, _arrayValuecVcrT6b]
		const _helperLIsEML3 = true;
		const _returnValuefKOMogT = await _HelpG2sLYfP.padWidth(_cmdBCOzjfc, _helperLIsEML3)
		const _arrayValueQ6k0Ka3 = undefined;
		const _arrayValueL4X9CoW = {
		
	}
		const _arrayValuejTKKHiv = null;
		const _cmdQvqNu1E = [_arrayValueQ6k0Ka3, _arrayValueL4X9CoW, _arrayValuejTKKHiv]
		const _returnValuewhmhDqc = await _HelpG2sLYfP.commandDescription(_cmdQvqNu1E)
		const _arrayValueTCIMMHz = "JGbyuV2Juk4Rfy8hVCPUGB8yuq3RPhJ5hGQ6XVTuynVaLJNs53YgQphLyc8aSJm";
		const _arrayValueHRUvRY = {
		
	}
		const _arrayValuewz7tuy6 = "H2yNzgU1n9euer8eL6VfJdtK";
		const _arrayValueJJzZIXg = null;
		const _cmdwVycKuP = [_arrayValueTCIMMHz, _arrayValueHRUvRY, _arrayValuewz7tuy6, _arrayValueJJzZIXg]
		const _returnValuedMaZyfA = await _HelpG2sLYfP.commandUsage(_cmdwVycKuP)
		const _cmddvH6HEa = null;
		const _returnValuexuwyoYT = await _HelpG2sLYfP.visibleOptions(_cmddvH6HEa)
	});

	it('test for Help', async () => {
		const _HelpcSBXaYx = new Help()
		const _argumentDHwHXgq = undefined;
		const _returnValueX6BQHGS = await _HelpcSBXaYx.argumentTerm(_argumentDHwHXgq)
		const _cmdH8tA56 = undefined;
		const _returnValuegP8lTV3 = await _HelpcSBXaYx.subcommandTerm(_cmdH8tA56)
		const _arrayValuepMgWz0 = undefined;
		const _arrayValueo6Ajdao = "mt9pL3JN646jyVCa3ORRVmwYlzp88Sm62FwUzviUHuTEURmjsLgxLq4dAKEy75rSsWDKskDx9O8omZ1xA4";
		const _optionxCROJgU = [_arrayValuepMgWz0, _arrayValueo6Ajdao]
		const _returnValueQHLnBg = await _HelpcSBXaYx.optionTerm(_optionxCROJgU)
	});

	it('test for Help', async () => {
		const _HelpAdqIoco = new Help()
		const _argumentsEU6Q2R = {
		
	}
		const _returnValuey9sABgZ = await _HelpAdqIoco.argumentDescription(_argumentsEU6Q2R)
		const _cmdYpdwiUQ = []
		const _returnValueFvm0nJ6 = await _HelpAdqIoco.commandUsage(_cmdYpdwiUQ)
	});

	it('test for Help', async () => {
		const _HelpBrzWc2 = new Help()
		const _cmdNH3yvs = undefined;
		const _returnValueglY9yfy = await _HelpBrzWc2.visibleCommands(_cmdNH3yvs)
		const _optionM1yAZDW = undefined;
		const _returnValuenhDrZEp = await _HelpBrzWc2.optionTerm(_optionM1yAZDW)
	});

	it('test for Help', async () => {
		const _Helpi4UFX6L = new Help()
		const _arrayValueDuWW2YC = undefined;
		const _arrayValuegD2sN6K = false;
		const _cmdOuiKu9D = [_arrayValueDuWW2YC, _arrayValuegD2sN6K]
		const _returnValueKQVQ93y = await _Helpi4UFX6L.visibleOptions(_cmdOuiKu9D)
		const _arrayValueKoN9hrs = {
		
	}
		const _arrayValuewyOrtkI = true;
		const _arrayValuei13JSuE = 6.326353636229566;
		const _optionBrMHx79 = [_arrayValueKoN9hrs, _arrayValuewyOrtkI, _arrayValuei13JSuE]
		const _returnValuefBQc1ZI = await _Helpi4UFX6L.optionDescription(_optionBrMHx79)
	});

	it('test for Help', async () => {
		const _Helpmu4tyOI = new Help()
		const _cmdn7bKTlw = true;
		const _helperwTNkhub = undefined;
		const _returnValueAPkSZTM = await _Helpmu4tyOI.longestSubcommandTermLength(_cmdn7bKTlw, _helperwTNkhub)
	});

	it('test for Help', async () => {
		const _HelpHj6uPrJ = new Help()
		const _optionSzGaAy = {
		
	}
		const _returnValueTDRZ2Tw = await _HelpHj6uPrJ.optionDescription(_optionSzGaAy)
		const _cmdg60KbVr = "g";
		const _returnValueR4JcCyo = await _HelpHj6uPrJ.visibleArguments(_cmdg60KbVr)
		const _cmdHfKimZZ = undefined;
		const _returnValueNeIqmPC = await _HelpHj6uPrJ.subcommandDescription(_cmdHfKimZZ)
		const _returnValueLMrHT6v = undefined;
		const _cmdABzp0Id = () => { return _returnValueLMrHT6v };
		const _helperLTbAUwH = 5.109724103021566;
		const _returnValuemabYoT = await _HelpHj6uPrJ.padWidth(_cmdABzp0Id, _helperLTbAUwH)
	});

	it('test for Help', async () => {
		const _HelpiXAIo7s = new Help()
		const _cmd69GR9I = {
		
	}
		const _helperSE4rToS = 4.085155836694337;
		const _returnValuejMs0TIf = await _HelpiXAIo7s.formatHelp(_cmd69GR9I, _helperSE4rToS)
		const _returnValueuT8Rh7F = -0.5308484403365128;
		const _arrayValueBwXjdlD = () => { return _returnValueuT8Rh7F };
		const _arrayValueCWkXpO = true;
		const _optionKIEGULM = [_arrayValueBwXjdlD, _arrayValueCWkXpO]
		const _returnValuewdCTc9n = await _HelpiXAIo7s.optionTerm(_optionKIEGULM)
		const _returnValuekZsVpPC = null;
		const _cmdV7AQaI = () => { return _returnValuekZsVpPC };
		const _returnValueuMxKqFG = await _HelpiXAIo7s.visibleArguments(_cmdV7AQaI)
	});

	it('test for Help', async () => {
		const _Help0kMiv9 = new Help()
		const _optionKq8iBGp = []
		const _returnValueg6aF8bH = await _Help0kMiv9.optionTerm(_optionKq8iBGp)
		const _strgZrJFpi = {
		
	}
		const _widthCW8Yebb = null;
		const _indenta2OrJiG = undefined;
		const _minColumnWidtht5W84A1 = null;
		const _returnValuechHRvw8 = await _Help0kMiv9.wrap(_strgZrJFpi, _widthCW8Yebb, _indenta2OrJiG, _minColumnWidtht5W84A1)
		const _cmdfSQDJnb = false;
		const _helperMpI1cDW = undefined;
		const _returnValueq3sYEA = await _Help0kMiv9.longestOptionTermLength(_cmdfSQDJnb, _helperMpI1cDW)
	});

	it('test for Help', async () => {
		const _HelpMvCHJ74 = new Help()
		const _strOBsu5H9 = "qXlKYENHcg3t8I2N2MdHe";
		const _returnValueiaBCPl5 = null;
		const _widthagjxK1H = () => { return _returnValueiaBCPl5 };
		const _returnValueTvObpPi = undefined;
		const _indentc4DVvPU = () => { return _returnValueTvObpPi };
		const _minColumnWidthGjtTlOq = false;
		const _returnValuekcyUl5J = await _HelpMvCHJ74.wrap(_strOBsu5H9, _widthagjxK1H, _indentc4DVvPU, _minColumnWidthGjtTlOq)
		const _argumentjBWrQH5 = false;
		const _returnValues6FrQ4t = await _HelpMvCHJ74.argumentDescription(_argumentjBWrQH5)
		const _cmdkAjaOvy = -2.358578501727492;
		const _helperHSoI8w5 = false;
		const _returnValuedohh9y = await _HelpMvCHJ74.longestSubcommandTermLength(_cmdkAjaOvy, _helperHSoI8w5)
	});

	it('test for Help', async () => {
		const _HelpJZGIvXK = new Help()
		const _strsKqM3rz = "xhUepaUQ9VqYiKzxWPTVKnljMCKDjPJW";
		const _arrayValueI52bGvz = -9.598975981048428;
		const _arrayValueGhRk9Xg = [_arrayValueI52bGvz]
		const _width42qKQo = [_arrayValueGhRk9Xg]
		const _indentREpEo1d = true;
		const _minColumnWidthTF3vPD = undefined;
		const _returnValueaOdfqjK = await _HelpJZGIvXK.wrap(_strsKqM3rz, _width42qKQo, _indentREpEo1d, _minColumnWidthTF3vPD)
		const _cmdjwuymJ2 = "sxPNvWO";
		const _helperHbhmLNH = true;
		const _returnValuej6cQ3QX = await _HelpJZGIvXK.longestArgumentTermLength(_cmdjwuymJ2, _helperHbhmLNH)
		const _argumenthmXBy3 = undefined;
		const _returnValueNtlo6jD = await _HelpJZGIvXK.argumentDescription(_argumenthmXBy3)
	});
})