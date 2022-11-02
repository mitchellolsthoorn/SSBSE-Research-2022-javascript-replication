export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpZx1N0N0 = new Help()
		const _cmdF6LzsLt = "l22Wfcmjsg4nNXT";
		const _helperXncQwuj = "NqcsNCcRBCcirRSQ4BWrOK86fYuMKqmYgLFMKvzlv8pPi4g92C5cC9jdBqFJ67UNfOkIuNVHnLz2LxZnIGvh";
		const _returnValuemw6uSQz = await _HelpZx1N0N0.padWidth(_cmdF6LzsLt, _helperXncQwuj)
		const _arrayValuesEtRMuc = 0.837486855299403;
		const _arrayValuewpboTmt = {
		
	}
		const _cmdNzFBIwy = [_arrayValuesEtRMuc, _arrayValuewpboTmt]
		const _returnValuevPIyqW = await _HelpZx1N0N0.subcommandDescription(_cmdNzFBIwy)
		const _cmdDZzOLZp = {
		
	}
		const _returnValueT1FDv4 = await _HelpZx1N0N0.subcommandTerm(_cmdDZzOLZp)
		const _optioncdVyeBP = 2.84745230583545;
		const _returnValueAkb92nU = await _HelpZx1N0N0.optionTerm(_optioncdVyeBP)
	});

	it('test for Help', async () => {
		const _HelpBQxDold = new Help()
		const _arrayValuegynBpgV = null;
		const _arrayValueslY1e6i = null;
		const _arrayValueoanU3E0 = true;
		const _arrayValueFTelAFX = undefined;
		const _arrayValueR1zwgP2 = [_arrayValueFTelAFX]
		const _arrayValueFvJKY6t = [_arrayValueoanU3E0, _arrayValueR1zwgP2]
		const _strp32JPDW = [_arrayValuegynBpgV, _arrayValueslY1e6i, _arrayValueFvJKY6t]
		const _arrayValuejmbMjlP = "bDfy6RPBJd5mTfe3";
		const _widthLTO8llA = [_arrayValuejmbMjlP]
		const _indentVdMAhIS = null;
		const _minColumnWidth3TQP2m = true;
		const _returnValueyg5MZ8r = await _HelpBQxDold.wrap(_strp32JPDW, _widthLTO8llA, _indentVdMAhIS, _minColumnWidth3TQP2m)
		const _returnValueA6ycRR = false;
		const _cmdHNyWLaV = () => { return _returnValueA6ycRR };
		const _returnValueyFSlzMt = await _HelpBQxDold.commandUsage(_cmdHNyWLaV)
	});

	it('test for Help', async () => {
		const _HelpCPJwAmn = new Help()
		const _optionbCx53EL = false;
		const _returnValuecSDsqXM = await _HelpCPJwAmn.optionTerm(_optionbCx53EL)
	});

	it('test for Help', async () => {
		const _HelpzRxsfAs = new Help()
		const _argumentA6OR3FM = 7.8684191436147835;
		const _returnValuecKPGmg6 = await _HelpzRxsfAs.argumentTerm(_argumentA6OR3FM)
		const _arrayValueAVDtemM = {
		
	}
		const _arrayValueWDNcxRw = "8wLEHLDeRZiBnN6hVPK7qalb13u8jvxKfNI8b2xvpVY";
		const _argumentYzq87q6 = [_arrayValueAVDtemM, _arrayValueWDNcxRw]
		const _returnValueme09bzt = await _HelpzRxsfAs.argumentTerm(_argumentYzq87q6)
		const _arrayValueIJgM2E = null;
		const _optionbDM057k = [_arrayValueIJgM2E]
		const _returnValuefy9usNp = await _HelpzRxsfAs.optionTerm(_optionbDM057k)
		const _returnValueD4lmHxl = "rALRa5HybNt6UqhEMxYi1L4oxbc3YfOB2JsTas4LOWfLp";
		const _cmdoIpytk = () => { return _returnValueD4lmHxl };
		const _returnValueAa5Mwe0 = await _HelpzRxsfAs.visibleOptions(_cmdoIpytk)
	});

	it('test for Help', async () => {
		const _HelpLqvPH8R = new Help()
		const _cmdXVlTcZs = 9.07986674002212;
		const _returnValueVPSUOf1 = await _HelpLqvPH8R.subcommandDescription(_cmdXVlTcZs)
		const _cmdqWXm1yV = -4.370303818194932;
		const _returnValueWtqMxD6 = await _HelpLqvPH8R.visibleCommands(_cmdqWXm1yV)
	});

	it('test for Help', async () => {
		const _Help0740AB = new Help()
		const _cmdavr0l5A = "J8U8R3NM8X1CsXoYyrK9u5Ts2JhknTIvX3lrKHBlNtSezvj95IWua1o2NuoXRw";
		const _helperCBhycP0 = {
		
	}
		const _returnValueH8FuENd = await _Help0740AB.longestOptionTermLength(_cmdavr0l5A, _helperCBhycP0)
		const _cmdl7qji5 = 9.291546747205405;
		const _helperr1rH4io = "dwP4CzGxK7gYQQTDyjO6C";
		const _returnValuejQbM3CR = await _Help0740AB.longestArgumentTermLength(_cmdl7qji5, _helperr1rH4io)
		const _arrayValueQ8VTUzW = false;
		const _returnValueaBswpvy = [_arrayValueQ8VTUzW]
		const _cmdCPFlFE7 = () => { return _returnValueaBswpvy };
		const _arrayValueW3rndrp = null;
		const _helper8C7q9I = [_arrayValueW3rndrp]
		const _returnValuepH7txYQ = await _Help0740AB.padWidth(_cmdCPFlFE7, _helper8C7q9I)
	});

	it('test for Help', async () => {
		const _Helpx9sVKk9 = new Help()
		const _cmdYg86ESP = true;
		const _returnValueqDVzGue = await _Helpx9sVKk9.subcommandTerm(_cmdYg86ESP)
		const _cmdVXuezGw = "nA7rNN81t6dHO8COwRsCBPvUxrUPkH9x6C";
		const _returnValueHAzedR = await _Helpx9sVKk9.subcommandTerm(_cmdVXuezGw)
	});

	it('test for Help', async () => {
		const _HelpYhl9CD = new Help()
		const _arrayValueTttt2eB = null;
		const _arrayValueLHojEw = false;
		const _arrayValuexgGuVrA = null;
		const _returnValuePjwkK4a = [_arrayValueTttt2eB, _arrayValueLHojEw, _arrayValuexgGuVrA]
		const _cmdNqvQG0V = () => { return _returnValuePjwkK4a };
		const _helperrczrSNA = undefined;
		const _returnValuelXJyjA0 = await _HelpYhl9CD.formatHelp(_cmdNqvQG0V, _helperrczrSNA)
		const _cmdCyJGtFJ = undefined;
		const _helperiiBxpi1 = 4.156587861489349;
		const _returnValuem1quGcn = await _HelpYhl9CD.longestOptionTermLength(_cmdCyJGtFJ, _helperiiBxpi1)
		const _cmdU460lVg = "HnuY5dXHxWYDaEzpxHJSbGB60YYFbOzKuSj3Y0xGFzUG1HOUmzidTg6PmsrFEtreiG9qvUm";
		const _returnValueeQPvXsT = await _HelpYhl9CD.visibleCommands(_cmdU460lVg)
	});

	it('test for Help', async () => {
		const _HelpdSgH8R = new Help()
		const _cmdilbwEtz = "jRsyuzDuEp";
		const _returnValueJLiuPSQ = await _HelpdSgH8R.visibleOptions(_cmdilbwEtz)
		const _cmdwZ2mQxg = null;
		const _returnValuexexjbC = await _HelpdSgH8R.commandDescription(_cmdwZ2mQxg)
		const _cmdnUB4lDI = undefined;
		const _helperrhAFNO7 = undefined;
		const _returnValuewWI3v55 = await _HelpdSgH8R.padWidth(_cmdnUB4lDI, _helperrhAFNO7)
		const _arrayValuerHJlH66 = false;
		const _arrayValueF7G0Z6k = null;
		const _arrayValueRPawqCb = 7.805276823129219;
		const _arrayValuejhnCu9Q = "1ybneOGtCglPfde1Nu5dOkFkn0hVlD8G9uAYOoV57KMXYxtTJddL47Ap5uagVxUku1gCQ44QirJ0uz2Y4PpqQPJsuuLxieg";
		const _optionqDpMrWB = [_arrayValuerHJlH66, _arrayValueF7G0Z6k, _arrayValueRPawqCb, _arrayValuejhnCu9Q]
		const _returnValuebx8owX = await _HelpdSgH8R.optionDescription(_optionqDpMrWB)
	});

	it('test for Help', async () => {
		const _HelpCf0xIBB = new Help()
		const _optionNSDCZhn = undefined;
		const _returnValueeeNbPuT = await _HelpCf0xIBB.optionDescription(_optionNSDCZhn)
		const _cmdKmlXuAX = false;
		const _helperUKfscNo = {
		
	}
		const _returnValuer3Yacqc = await _HelpCf0xIBB.longestOptionTermLength(_cmdKmlXuAX, _helperUKfscNo)
	});

	it('test for Help', async () => {
		const _HelpV4KTZsK = new Help()
		const _cmdjeF5ybO = "hKSrFVx35Llm0sybOefuUEimdhhDCQODCVzx8KQaWQCPPaRGp6PEpzvJXdBU9Knllt4Eer7kN";
		const _returnValueZAzl4ml = await _HelpV4KTZsK.commandUsage(_cmdjeF5ybO)
	});

	it('test for Help', async () => {
		const _HelppWFlwaV = new Help()
		const _cmdXd4lCFT = undefined;
		const _arrayValueHgxzfa = -9.715984521729377;
		const _helperAk0xTsB = [_arrayValueHgxzfa]
		const _returnValuePz6B3Uw = await _HelppWFlwaV.longestArgumentTermLength(_cmdXd4lCFT, _helperAk0xTsB)
	});

	it('test for Help', async () => {
		const _HelplCTHzCH = new Help()
		const _argumentJ17Vpen = {
		
	}
		const _returnValueqiCKJVt = await _HelplCTHzCH.argumentDescription(_argumentJ17Vpen)
	});

	it('test for Help', async () => {
		const _HelpjT0hAha = new Help()
		const _cmduiFY63P = null;
		const _returnValuenpSrL7n = await _HelpjT0hAha.visibleArguments(_cmduiFY63P)
		const _cmdzY46gsN = undefined;
		const _helperxJ6Fe1g = 1.0921671746105304;
		const _returnValueX83CMh = await _HelpjT0hAha.longestArgumentTermLength(_cmdzY46gsN, _helperxJ6Fe1g)
		const _cmdR7dPaOg = undefined;
		const _returnValueVdPUGkX = await _HelpjT0hAha.commandDescription(_cmdR7dPaOg)
		const _arrayValueXmoqT7 = {
		
	}
		const _arrayValuefcZIxHM = -3.6937333196432682;
		const _arrayValueDrB56Ws = null;
		const _cmdBhTGyeq = [_arrayValueXmoqT7, _arrayValuefcZIxHM, _arrayValueDrB56Ws]
		const _returnValuexOZmfCK = await _HelpjT0hAha.visibleArguments(_cmdBhTGyeq)
		const _cmdHspPer4 = -9.013338416444428;
		const _returnValueY5enn5M = await _HelpjT0hAha.visibleOptions(_cmdHspPer4)
	});

	it('test for Help', async () => {
		const _HelpoVpiDKq = new Help()
		const _returnValueHVVdGzH = undefined;
		const _cmdeM8OV7y = () => { return _returnValueHVVdGzH };
		const _returnValuel3dPvaD = await _HelpoVpiDKq.commandDescription(_cmdeM8OV7y)
	});

	it('test for Help', async () => {
		const _HelpPOOI7eS = new Help()
		const _optiona5ZcHH = "sLxdy38uTT9QjdFyCdIWoausRuMpJWQSWz2gGSUZv8ghx348xnrxCTLa3p08";
		const _returnValuebaLAZoF = await _HelpPOOI7eS.optionDescription(_optiona5ZcHH)
		const _cmdFXmFA7C = null;
		const _arrayValueaqSI3j1 = "ginx9WWtThgfV2Pk8";
		const _helperQMzGFUT = [_arrayValueaqSI3j1]
		const _returnValuejsq5cGr = await _HelpPOOI7eS.longestSubcommandTermLength(_cmdFXmFA7C, _helperQMzGFUT)
	});

	it('test for Help', async () => {
		const _HelpBFY0JoP = new Help()
		const _cmdUKvJFPn = "CXQPSN70cvVzWccttp4dlD9S4jrxDFqK6TDgvuB1FnfAJ1FzlkINFElM4ezYZ0d";
		const _returnValuecviJgz = await _HelpBFY0JoP.visibleCommands(_cmdUKvJFPn)
		const _cmdBEz6kYc = false;
		const _returnValueGTo5U3d = await _HelpBFY0JoP.visibleCommands(_cmdBEz6kYc)
		const _cmdnfaIlrX = {
		
	}
		const _returnValueKuFQiMz = await _HelpBFY0JoP.subcommandTerm(_cmdnfaIlrX)
		const _cmdEvfNykc = false;
		const _returnValueUxOQhAf = await _HelpBFY0JoP.subcommandTerm(_cmdEvfNykc)
		const _arrayValueBoAyyV = false;
		const _arrayValuevXG6G9N = undefined;
		const _arrayValueZ7TeWjt = 3.4079215057690693;
		const _arrayValue9x6j3O = -3.627571019545943;
		const _optionx7VAHcB = [_arrayValueBoAyyV, _arrayValuevXG6G9N, _arrayValueZ7TeWjt, _arrayValue9x6j3O]
		const _returnValueUrp9mS2 = await _HelpBFY0JoP.optionTerm(_optionx7VAHcB)
	});

	it('test for Help', async () => {
		const _HelptEbiEDK = new Help()
		const _strysCUD0j = "sCGmpggXUzKkcTmF5HxkrHgL";
		const _widthdWOCC3w = 2.9477463437548863;
		const _indentCEXqMd4 = false;
		const _arrayValueXLBKtdQ = "LzSph4vO6b4I836fv9dg2skPJjLOcqN53ZlDpO1QIKDSznMoEleSNYvz6ATnhYWfbM9H9hqyCJpR9gGOiCTGj4H";
		const _arrayValueetZ5eKD = undefined;
		const _arrayValueWqW94fr = [_arrayValueXLBKtdQ, _arrayValueetZ5eKD]
		const _arrayValuetnzxeTR = "OS1LA8Al3BdaS1LrtFw9E3yZVfKpWcpTakwEuddPkUX5hfdMC7kUENJc11Pk2i89S";
		const _minColumnWidthwnj0EI = [_arrayValueWqW94fr, _arrayValuetnzxeTR]
		const _returnValueCKdpnpg = await _HelptEbiEDK.wrap(_strysCUD0j, _widthdWOCC3w, _indentCEXqMd4, _minColumnWidthwnj0EI)
		const _cmddCa7Ej = undefined;
		const _returnValueN0XcNBx = await _HelptEbiEDK.visibleOptions(_cmddCa7Ej)
		const _cmdCFMIeWn = "0WJ3CXB36sMeRATNeU5btekapcjyGUnRa5MdFVMLnPbn5v8zAly3Hxlgg8n6c7DtR63";
		const _helpergb9Zebc = false;
		const _returnValuedqUv0nd = await _HelptEbiEDK.formatHelp(_cmdCFMIeWn, _helpergb9Zebc)
	});
})