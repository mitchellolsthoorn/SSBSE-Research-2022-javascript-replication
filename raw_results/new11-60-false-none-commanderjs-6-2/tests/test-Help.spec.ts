export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpQwpWKQC = new Help()
		const _arrayValuejZPcW3T = undefined;
		const _arrayValueAVBzpx2 = 6.495426043506004;
		const _cmdPwI7WoH = [_arrayValuejZPcW3T, _arrayValueAVBzpx2]
		const _helperwpf6gIp = "rL02jSMyIHKNdPUnwPtAZCGG8HE5lHeZlnBVPyiC3n";
		const _returnValuevJ4qY2s = await _HelpQwpWKQC.longestSubcommandTermLength(_cmdPwI7WoH, _helperwpf6gIp)
		const _cmdOXFe7Wn = "yvvsCwK2pbiMXG0yMxyvRtxxVrqjWRZT499CmbT9kJzEWubCW";
		const _returnValuef5fctCE = await _HelpQwpWKQC.visibleArguments(_cmdOXFe7Wn)
		const _cmds4zrZ5T = null;
		const _helperpfibqjq = null;
		const _returnValuef9glExe = await _HelpQwpWKQC.longestSubcommandTermLength(_cmds4zrZ5T, _helperpfibqjq)
		const _cmdZBMXJE7 = true;
		const _returnValueEnxKL1w = await _HelpQwpWKQC.subcommandTerm(_cmdZBMXJE7)
		const _returnValuexvuQykM = null;
		const _cmdvHhaSc8 = () => { return _returnValuexvuQykM };
		const _arrayValueyCO4cE4 = true;
		const _returnValuey6Ak7bl = undefined;
		const _arrayValueYwue2tX = () => { return _returnValuey6Ak7bl };
		const _helperI5WdrnH = [_arrayValueyCO4cE4, _arrayValueYwue2tX]
		const _returnValueF9oLdqf = await _HelpQwpWKQC.formatHelp(_cmdvHhaSc8, _helperI5WdrnH)
	});

	it('test for Help', async () => {
		const _HelpiWWhDqP = new Help()
		const _optionFu9Bb08 = 1.327967852976995;
		const _returnValueRKqSETV = await _HelpiWWhDqP.optionDescription(_optionFu9Bb08)
		const _cmdGuKUDRV = true;
		const _returnValuecK5Xab1 = await _HelpiWWhDqP.subcommandDescription(_cmdGuKUDRV)
		const _returnValueEKrjils = -8.349289136540957;
		const _cmdFTtLoAY = () => { return _returnValueEKrjils };
		const _returnValueXK5Gmn2 = await _HelpiWWhDqP.commandDescription(_cmdFTtLoAY)
		const _arrayValueuVza1Z = null;
		const _arrayValueCi5zzki = undefined;
		const _cmdMb1LLW9 = [_arrayValueuVza1Z, _arrayValueCi5zzki]
		const _helpertOHxL7m = {
		
	}
		const _returnValueRqULLy2 = await _HelpiWWhDqP.formatHelp(_cmdMb1LLW9, _helpertOHxL7m)
		const _optioneJSg7pQ = "HNTo5mybaVnRbVPM7TMc3Ern68uC1O3Y40n72W3wTG5KPIQLn1955xbEz1sLMSMiStOTBpmxDjQvAmFqRHllptLeSJx6";
		const _returnValuejSxhR4U = await _HelpiWWhDqP.optionTerm(_optioneJSg7pQ)
	});

	it('test for Help', async () => {
		const _Helpu4B6ohn = new Help()
		const _cmds4VEgAm = undefined;
		const _returnValuecJ2IIpp = await _Helpu4B6ohn.visibleOptions(_cmds4VEgAm)
	});

	it('test for Help', async () => {
		const _HelpaWnSdg3 = new Help()
		const _cmdRGnCSaE = 5.045539762919349;
		const _returnValueIRwSOiz = await _HelpaWnSdg3.subcommandTerm(_cmdRGnCSaE)
		const _cmdw7TUv2 = null;
		const _returnValuecAd20JI = await _HelpaWnSdg3.commandUsage(_cmdw7TUv2)
		const _cmdSMU13j = -3.411439880180451;
		const _returnValueDFF2doU = await _HelpaWnSdg3.visibleArguments(_cmdSMU13j)
		const _arrayValuemeunZ9U = "oWa4ms";
		const _arrayValueGKsLv8 = [_arrayValuemeunZ9U]
		const _argumentNqUoPhe = [_arrayValueGKsLv8]
		const _returnValueIVHJMvq = await _HelpaWnSdg3.argumentTerm(_argumentNqUoPhe)
		const _arrayValueTfI6fmL = true;
		const _cmduef8cps = [_arrayValueTfI6fmL]
		const _returnValueRbwFHRe = await _HelpaWnSdg3.subcommandTerm(_cmduef8cps)
	});

	it('test for Help', async () => {
		const _HelpDTvgQoQ = new Help()
		const _strCFaD7W = undefined;
		const _widthM65T6pR = 7.598657094179423;
		const _indentBA7ryfN = undefined;
		const _minColumnWidthmjOFmoq = {
		
	}
		const _returnValueWeCnvMv = await _HelpDTvgQoQ.wrap(_strCFaD7W, _widthM65T6pR, _indentBA7ryfN, _minColumnWidthmjOFmoq)
		const _cmdrAWWKnG = "aBlKpOT87ubp2uzZR85RWG9dIezHDUfmoBiTvQJWGR485fFwN9HlCavnnmUNNSQdcM3nGE3L6O8qcljcpcMa2x77EKa";
		const _helperrIrV6j8 = 9.405434031308033;
		const _returnValueOGfUe68 = await _HelpDTvgQoQ.longestArgumentTermLength(_cmdrAWWKnG, _helperrIrV6j8)
	});

	it('test for Help', async () => {
		const _HelpJ9r3Utd = new Help()
		const _cmdd3fb7GR = false;
		const _returnValueCaGe3A3 = await _HelpJ9r3Utd.commandDescription(_cmdd3fb7GR)
		const _cmdnwHqFDH = null;
		const _helperlUzYnxZ = "UFwkFDHiCK1XTFHy7W1HFPSE";
		const _returnValueU6oXnAV = await _HelpJ9r3Utd.longestSubcommandTermLength(_cmdnwHqFDH, _helperlUzYnxZ)
		const _cmdyorKlSr = null;
		const _arrayValueO6ubVvh = "68wKxOm";
		const _arrayValuewJyQunB = null;
		const _arrayValueevvkNuY = undefined;
		const _helpereC6MuF8 = [_arrayValueO6ubVvh, _arrayValuewJyQunB, _arrayValueevvkNuY]
		const _returnValueIsf869G = await _HelpJ9r3Utd.longestSubcommandTermLength(_cmdyorKlSr, _helpereC6MuF8)
	});

	it('test for Help', async () => {
		const _HelploKRY84 = new Help()
		const _optionO4pyXHp = null;
		const _returnValueSESHbow = await _HelploKRY84.optionTerm(_optionO4pyXHp)
		const _cmdRFhcmN4 = "TvijE0EjdNqjww8ycGfQkc6D38CkBPobseH1fgW5kJPCLcuAQl2XdNzo8Fm4Wktqsbse2c3qdqQvo23OssinPAUbeWc";
		const _returnValueEzk0eYQ = await _HelploKRY84.commandUsage(_cmdRFhcmN4)
		const _cmdvD9YBMJ = undefined;
		const _helpergkctgT5 = null;
		const _returnValuetAFlXD1 = await _HelploKRY84.padWidth(_cmdvD9YBMJ, _helpergkctgT5)
	});

	it('test for Help', async () => {
		const _HelpjVPuCUv = new Help()
		const _cmderFbvl7 = -7.74580013529698;
		const _helperHOW4hRl = undefined;
		const _returnValueSnuVhql = await _HelpjVPuCUv.padWidth(_cmderFbvl7, _helperHOW4hRl)
		const _cmdxfqdt2i = undefined;
		const _helperQDdowXf = {
		
	}
		const _returnValueclDcDho = await _HelpjVPuCUv.padWidth(_cmdxfqdt2i, _helperQDdowXf)
	});

	it('test for Help', async () => {
		const _HelpXtgx1U = new Help()
		const _argumentOyywS0e = false;
		const _returnValuewzB7Y5E = await _HelpXtgx1U.argumentDescription(_argumentOyywS0e)
	});

	it('test for Help', async () => {
		const _Help27ZOo1 = new Help()
		const _cmdDxu4V2H = "VuC3myrBNkByDdxinndN173YwUaEYruFbgOkhVHk6IOrwzcpAImL1hJp3MipuNSKgmL7NVERKljSCf43qCo";
		const _returnValueus13RQi = await _Help27ZOo1.commandUsage(_cmdDxu4V2H)
	});

	it('test for Help', async () => {
		const _Helpbec4bi = new Help()
		const _argumentGzIHxJ0 = null;
		const _returnValuepELDH8b = await _Helpbec4bi.argumentTerm(_argumentGzIHxJ0)
		const _argumentJK6ZAsd = undefined;
		const _returnValueigN21or = await _Helpbec4bi.argumentTerm(_argumentJK6ZAsd)
		const _arrayValueRx91vMw = []
		const _optionTRo2d8 = [_arrayValueRx91vMw]
		const _returnValueekTFwXU = await _Helpbec4bi.optionTerm(_optionTRo2d8)
		const _cmdfh9UCiH = true;
		const _helperCDrktWP = {
		
	}
		const _returnValueTVnIXhP = await _Helpbec4bi.formatHelp(_cmdfh9UCiH, _helperCDrktWP)
	});

	it('test for Help', async () => {
		const _Helpj5JivhC = new Help()
		const _returnValue6fOV3x = undefined;
		const _cmdGDuyRu6 = () => { return _returnValue6fOV3x };
		const _helperENAQlM = false;
		const _returnValuenh2QfNi = await _Helpj5JivhC.formatHelp(_cmdGDuyRu6, _helperENAQlM)
		const _cmdJwR5coq = undefined;
		const _helperDB0hyhu = null;
		const _returnValuebRFzqe = await _Helpj5JivhC.padWidth(_cmdJwR5coq, _helperDB0hyhu)
		const _argumentRY5Evhd = false;
		const _returnValueCO8NNGj = await _Helpj5JivhC.argumentDescription(_argumentRY5Evhd)
	});

	it('test for Help', async () => {
		const _HelpUCzCGpz = new Help()
		const _cmdyIDyKr = "IQz7UCZVbQG4yOtYICGgtLNBm5WorkGxJgzaPB";
		const _returnValueMy0zpr = null;
		const _helperPMdTWOq = () => { return _returnValueMy0zpr };
		const _returnValueKOi9RIB = await _HelpUCzCGpz.longestArgumentTermLength(_cmdyIDyKr, _helperPMdTWOq)
		const _arrayValuec1b5ywT = true;
		const _cmdVylgAij = [_arrayValuec1b5ywT]
		const _arrayValue57QbBM = undefined;
		const _helpers4S5ESo = [_arrayValue57QbBM]
		const _returnValueFX9lrRq = await _HelpUCzCGpz.longestArgumentTermLength(_cmdVylgAij, _helpers4S5ESo)
		const _argumentQHSb7jr = undefined;
		const _returnValueVQaJQqj = await _HelpUCzCGpz.argumentTerm(_argumentQHSb7jr)
		const _returnValuedIEDaWC = 9.151642051483218;
		const _cmdEQB0DwG = () => { return _returnValuedIEDaWC };
		const _helperVeZNPVw = -1.0027248774215796;
		const _returnValuePI7aW9H = await _HelpUCzCGpz.longestArgumentTermLength(_cmdEQB0DwG, _helperVeZNPVw)
		const _cmdC5Eetd3 = -2.8993559268731106;
		const _returnValueuImXr2j = await _HelpUCzCGpz.subcommandDescription(_cmdC5Eetd3)
	});

	it('test for Help', async () => {
		const _HelpTEIZmBs = new Help()
		const _cmdvHzqELw = false;
		const _returnValueAxM9RAB = await _HelpTEIZmBs.visibleArguments(_cmdvHzqELw)
		const _cmdj0bv92U = false;
		const _helperMne5umC = true;
		const _returnValueMVTUkOL = await _HelpTEIZmBs.padWidth(_cmdj0bv92U, _helperMne5umC)
	});

	it('test for Help', async () => {
		const _HelpxszhSHn = new Help()
		const _cmdbuhJ9WI = "jW4yCwnZpgxqjfphAKRx3v9vy9VAl644BiwaZYK3CGPY";
		const _returnValueCsjnGnO = await _HelpxszhSHn.visibleCommands(_cmdbuhJ9WI)
		const _optionKJUGPkt = {
		
	}
		const _returnValueonFYhny = await _HelpxszhSHn.optionDescription(_optionKJUGPkt)
		const _cmdQ6mSXXk = 9.431322182529051;
		const _helperwoAbhM = null;
		const _returnValueBrzOPEb = await _HelpxszhSHn.longestSubcommandTermLength(_cmdQ6mSXXk, _helperwoAbhM)
	});

	it('test for Help', async () => {
		const _HelpUS9cubf = new Help()
		const _arrayValueNMDdpGr = false;
		const _arrayValue4KsKC1 = "YLWMEhmOsTn3tWDItqcwrqPwWUGCTxN54bD7662nJ45YAXSEq5J5jnwDgP";
		const _arrayValueM10eeTc = false;
		const _cmdeeCWXcu = [_arrayValueNMDdpGr, _arrayValue4KsKC1, _arrayValueM10eeTc]
		const _helperHXxFzSG = true;
		const _returnValueFQbNQBm = await _HelpUS9cubf.longestOptionTermLength(_cmdeeCWXcu, _helperHXxFzSG)
		const _returnValuefJN4wk1 = -8.398152793592507;
		const _cmdGcVCzEY = () => { return _returnValuefJN4wk1 };
		const _returnValueC8T0UTj = await _HelpUS9cubf.commandUsage(_cmdGcVCzEY)
	});

	it('test for Help', async () => {
		const _HelptglwGEy = new Help()
		const _strMqga9j6 = "Jxab6PdjBFoZq6knAmXegk4luFbh6FajygIHVriH";
		const _widthYjDn4V8 = "x8ps0bnoWUZdEmFLVRcjD2hTyPmx3xouUwsrGeEIO4wMf7t52ycEb4QRBfkKYUgagawcaZfNEl36e";
		const _indenth7utdMO = 9.623208902655037;
		const _arrayValueqJ9HDbG = "NthH38mngpjIhrEA7lf4NvBJ";
		const _arrayValuebXdjwQ5 = -5.416716825604768;
		const _arrayValueCfgg4k0 = 8.263023748862516;
		const _minColumnWidthkLhiqto = [_arrayValueqJ9HDbG, _arrayValuebXdjwQ5, _arrayValueCfgg4k0]
		const _returnValuecBTc4H0 = await _HelptglwGEy.wrap(_strMqga9j6, _widthYjDn4V8, _indenth7utdMO, _minColumnWidthkLhiqto)
		const _arrayValuehB8wNg = "pWDj0m4ywcrrSAiAHXlisPkBUSXnAlskWvXs2PxPk69Nw126SoICSocd6NBvsgatOxRGZnbSYGtTHfQW3";
		const _cmdQqDzf3o = [_arrayValuehB8wNg]
		const _returnValueQDMXzDO = await _HelptglwGEy.visibleArguments(_cmdQqDzf3o)
	});
})