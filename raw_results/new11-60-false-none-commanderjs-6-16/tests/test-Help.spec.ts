export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpwk9Bkv4 = new Help()
		const _optionOGz3ggr = undefined;
		const _returnValueZm58r3t = await _Helpwk9Bkv4.optionDescription(_optionOGz3ggr)
		const _optionzCdNwx4 = undefined;
		const _returnValueuAz3fvO = await _Helpwk9Bkv4.optionDescription(_optionzCdNwx4)
		const _cmdf3FyFRV = undefined;
		const _helperxYAMb4O = null;
		const _returnValueobOGR2N = await _Helpwk9Bkv4.longestOptionTermLength(_cmdf3FyFRV, _helperxYAMb4O)
		const _cmdWXTzLvW = null;
		const _helperNo0KQSE = false;
		const _returnValueZt7L0lf = await _Helpwk9Bkv4.padWidth(_cmdWXTzLvW, _helperNo0KQSE)
	});

	it('test for Help', async () => {
		const _HelpFjMm45G = new Help()
		const _argumentUU697k = undefined;
		const _returnValueagTWJEn = await _HelpFjMm45G.argumentDescription(_argumentUU697k)
		const _cmdZwbefLz = false;
		const _returnValueoT85OON = await _HelpFjMm45G.subcommandTerm(_cmdZwbefLz)
		const _cmdoL1xNiu = true;
		const _returnValueZ7odzwZ = await _HelpFjMm45G.commandUsage(_cmdoL1xNiu)
		const _cmdE4GeoZg = 2.2467032555397175;
		const _helperYsVxo2y = undefined;
		const _returnValueoqSSNpx = await _HelpFjMm45G.longestSubcommandTermLength(_cmdE4GeoZg, _helperYsVxo2y)
	});

	it('test for Help', async () => {
		const _HelpIYmjle = new Help()
		const _returnValuen53xY2T = "FX4oC5mUNj4WLlvBlpq9aGomwri6ecCDNI2QSsOQTr912jt1C7iuqi";
		const _cmdlMjst23 = () => { return _returnValuen53xY2T };
		const _helperGfdFiG8 = -0.5166151668657903;
		const _returnValueRTTqRMa = await _HelpIYmjle.formatHelp(_cmdlMjst23, _helperGfdFiG8)
		const _optionesx5IKF = 8.588030834404279;
		const _returnValuezuRIA2 = await _HelpIYmjle.optionTerm(_optionesx5IKF)
		const _cmdFJtUtIM = -3.100765079411257;
		const _helperUCu3C6C = 4.722785730616984;
		const _returnValueTG3cNoN = await _HelpIYmjle.longestArgumentTermLength(_cmdFJtUtIM, _helperUCu3C6C)
	});

	it('test for Help', async () => {
		const _HelpWaqITX = new Help()
		const _cmdxXbs9a = null;
		const _returnValuezvKg9zm = await _HelpWaqITX.visibleCommands(_cmdxXbs9a)
	});

	it('test for Help', async () => {
		const _HelprLcOueO = new Help()
		const _returnValueZRplGZG = {
		
	}
		const _argumentpiUjyG = () => { return _returnValueZRplGZG };
		const _returnValuesTa3cdF = await _HelprLcOueO.argumentDescription(_argumentpiUjyG)
	});

	it('test for Help', async () => {
		const _HelpZWwvZcU = new Help()
		const _strvEHcgdw = {
		
	}
		const _widthTfu5rd = -0.4826819563431819;
		const _indentccrsj7p = "M8VX14deEHy9kiA7miwOt1RwClo6wARvvn7pmqg8mje0NX9ouJlfr4g8";
		const _minColumnWidtheTHv7E = "gV3ArD3NXviwRNWiviB61BLJ3mewWt2wBfk5Qa5Z9GfFsK";
		const _returnValueEw4o9s = await _HelpZWwvZcU.wrap(_strvEHcgdw, _widthTfu5rd, _indentccrsj7p, _minColumnWidtheTHv7E)
		const _cmdPQnACkS = null;
		const _returnValuemPOI5VF = await _HelpZWwvZcU.commandDescription(_cmdPQnACkS)
		const _arrayValuem9ll13y = null;
		const _arrayValueX8WPw5q = false;
		const _arrayValueMGnQ34y = "HkldNrY";
		const _optionZqThJMg = [_arrayValuem9ll13y, _arrayValueX8WPw5q, _arrayValueMGnQ34y]
		const _returnValuebwOoT1 = await _HelpZWwvZcU.optionTerm(_optionZqThJMg)
		const _cmdt32VQUp = "WOqKZ";
		const _returnValueheLca1m = undefined;
		const _helperfpZEu7f = () => { return _returnValueheLca1m };
		const _returnValueFAXH0gl = await _HelpZWwvZcU.longestOptionTermLength(_cmdt32VQUp, _helperfpZEu7f)
	});

	it('test for Help', async () => {
		const _HelpwBaO0zO = new Help()
		const _argumentelolOgw = -5.239087907077623;
		const _returnValueeyRhIO = await _HelpwBaO0zO.argumentTerm(_argumentelolOgw)
		const _arrayValueGHKLKli = null;
		const _arrayValueUcuDdJ9 = true;
		const _argumentEebXqLn = [_arrayValueGHKLKli, _arrayValueUcuDdJ9]
		const _returnValueUWtGgsE = await _HelpwBaO0zO.argumentTerm(_argumentEebXqLn)
	});

	it('test for Help', async () => {
		const _HelpsOUiLKo = new Help()
		const _cmdwnQxGaQ = "T0drdrL8REXcBi3aa9rQrYGvX";
		const _helperMnPPZbA = null;
		const _returnValuek8ko01Y = await _HelpsOUiLKo.longestArgumentTermLength(_cmdwnQxGaQ, _helperMnPPZbA)
		const _cmdUrcHeP = "cPfvWEhDr9L2uq4QmfmxDzKmF";
		const _helperuhfPkdq = "MbNMDprlgJopnljcVayutWGDRtNwAmv5aD9wd0IIGPSRFAh3XMSaotXTw0TqIRhjei6cyGGhAJ3zb4YqFDOW";
		const _returnValuekKL0xA = await _HelpsOUiLKo.longestOptionTermLength(_cmdUrcHeP, _helperuhfPkdq)
		const _optionYfKktA = undefined;
		const _returnValue8P4jV0 = await _HelpsOUiLKo.optionDescription(_optionYfKktA)
		const _cmdNE4hzhN = -4.780202734728919;
		const _returnValueUs0JU5S = await _HelpsOUiLKo.subcommandDescription(_cmdNE4hzhN)
	});

	it('test for Help', async () => {
		const _HelpuXeqwyO = new Help()
		const _optionXwAWMrM = null;
		const _returnValueG20537C = await _HelpuXeqwyO.optionTerm(_optionXwAWMrM)
		const _cmdf5au6nR = "oj6IYjAkTz6mAmFcN7uT3Ili0k4Z1bIiU53JN8O3PNAoPUvnScKRKc2btNXaAU8fvxOCnVLbuOUgiUXn6IaUBRr";
		const _returnValuebKIiSOe = await _HelpuXeqwyO.commandDescription(_cmdf5au6nR)
		const _cmdwTz99bq = null;
		const _returnValueOhsVLJ = await _HelpuXeqwyO.commandUsage(_cmdwTz99bq)
	});

	it('test for Help', async () => {
		const _HelpE4cINwT = new Help()
		const _argumentY1w4VB3 = false;
		const _returnValuedhBJZ16 = await _HelpE4cINwT.argumentDescription(_argumentY1w4VB3)
		const _returnValuePYpVR9u = null;
		const _cmdvlYep5p = () => { return _returnValuePYpVR9u };
		const _returnValueYnQRNUJ = await _HelpE4cINwT.visibleArguments(_cmdvlYep5p)
		const _optionnIj9mTc = -5.51405568740784;
		const _returnValueveTvMjA = await _HelpE4cINwT.optionTerm(_optionnIj9mTc)
		const _returnValuefaGMaWO = "XOUZukxYnb3z9BhqEDG5GG6hKv1QkhUI7YKhPQeLjxQlWFrd1ZWVTs2FbGGmhoSCK0i46";
		const _argumenthGd4ypq = () => { return _returnValuefaGMaWO };
		const _returnValue564W56 = await _HelpE4cINwT.argumentTerm(_argumenthGd4ypq)
		const _argumentwO4pU3R = "BumA8pmx4GvEQU26SRokM9rmqFVqsyk";
		const _returnValuegtOxbAY = await _HelpE4cINwT.argumentTerm(_argumentwO4pU3R)
	});

	it('test for Help', async () => {
		const _HelpBCPyP0a = new Help()
		const _cmdof24kUA = 8.363993057512758;
		const _returnValueE9r1Yuw = await _HelpBCPyP0a.commandDescription(_cmdof24kUA)
		const _arrayValueAqaQSHy = []
		const _arrayValueDh1d1xv = "aFmaQ8WORuEOmk28n45pCopF7seQtKiDpRQetTbwkTs2vrhB8ErchroPPmnR4gszo9RJi7XqWsAR2";
		const _cmddrZU8ku = [_arrayValueAqaQSHy, _arrayValueDh1d1xv]
		const _returnValueUkETMd1 = await _HelpBCPyP0a.visibleArguments(_cmddrZU8ku)
		const _argumentnVpI21f = undefined;
		const _returnValueX69NLpw = await _HelpBCPyP0a.argumentDescription(_argumentnVpI21f)
		const _cmdZad60Z4 = null;
		const _helperAnhesc = undefined;
		const _returnValueP9n56R = await _HelpBCPyP0a.longestSubcommandTermLength(_cmdZad60Z4, _helperAnhesc)
	});

	it('test for Help', async () => {
		const _HelpjsBHWy3 = new Help()
		const _cmdkQTu2A2 = {
		
	}
		const _returnValuesj0gXUq = await _HelpjsBHWy3.subcommandDescription(_cmdkQTu2A2)
		const _cmdFJYQXeE = "U7H";
		const _helpernH0X9aX = undefined;
		const _returnValueENDYb0O = await _HelpjsBHWy3.longestArgumentTermLength(_cmdFJYQXeE, _helpernH0X9aX)
		const _cmdX1mu035 = null;
		const _returnValueB7L1pP = await _HelpjsBHWy3.commandUsage(_cmdX1mu035)
		const _cmdClIQALd = {
		
	}
		const _helperqmhyFK1 = true;
		const _returnValuevQdFdDe = await _HelpjsBHWy3.longestSubcommandTermLength(_cmdClIQALd, _helperqmhyFK1)
	});

	it('test for Help', async () => {
		const _HelpVnRY4Sp = new Help()
		const _arrayValueab3Nn4A = undefined;
		const _arrayValuelBlUmoO = 0.6756645276557194;
		const _cmdEeDZSBr = [_arrayValueab3Nn4A, _arrayValuelBlUmoO]
		const _helperTpwPzJh = "Eme5v1FIZlIBCrLy7bNL8UCjSX8LJ6UXr25TdF9K25VpGtrM";
		const _returnValuecE4Q3Rm = await _HelpVnRY4Sp.longestOptionTermLength(_cmdEeDZSBr, _helperTpwPzJh)
		const _returnValuejWCMQBR = 3.5776603105307068;
		const _returnValuetQ7pwLq = () => { return _returnValuejWCMQBR };
		const _arrayValuezBAZq3I = () => { return _returnValuetQ7pwLq };
		const _cmdGD5HGBE = [_arrayValuezBAZq3I]
		const _returnValueAtxUpdj = await _HelpVnRY4Sp.visibleOptions(_cmdGD5HGBE)
		const _cmdvTOcVSx = null;
		const _returnValueqnpw9AR = await _HelpVnRY4Sp.subcommandTerm(_cmdvTOcVSx)
	});

	it('test for Help', async () => {
		const _HelpfK9xlFF = new Help()
		const _cmdtZjGb7M = null;
		const _returnValuecYVQNg = await _HelpfK9xlFF.subcommandTerm(_cmdtZjGb7M)
	});

	it('test for Help', async () => {
		const _HelpVTV4MGe = new Help()
		const _arrayValueoqzfyuy = undefined;
		const _cmdaSuTfNz = [_arrayValueoqzfyuy]
		const _helpere82BAZg = "9geKpqYSg7MdqzUxmbwNsNfbjEhznmIpCwzrZOsCAuffT8pzsJK2Wy3ysg52Gd5zJFSwK8";
		const _returnValueyQt9sRv = await _HelpVTV4MGe.padWidth(_cmdaSuTfNz, _helpere82BAZg)
		const _cmdGgTFZbZ = "SOsVWrrt4JJw8AliU5AT6yydY";
		const _returnValuebif2GiK = undefined;
		const _helperpEdB8iK = () => { return _returnValuebif2GiK };
		const _returnValuesLayUgI = await _HelpVTV4MGe.padWidth(_cmdGgTFZbZ, _helperpEdB8iK)
	});

	it('test for Help', async () => {
		const _HelpsyBidLG = new Help()
		const _arrayValueZF0TuUN = undefined;
		const _arrayValueekrpNZy = true;
		const _arrayValuez0TASxk = [_arrayValueZF0TuUN, _arrayValueekrpNZy]
		const _optionCdv5hDt = [_arrayValuez0TASxk]
		const _returnValueCX2S9Qj = await _HelpsyBidLG.optionDescription(_optionCdv5hDt)
		const _cmdgNUrTCj = "KC37m5XqJlq5brFu6LSn7epcnDbaFOXrPuusKFnKot85yGKvfyI0EPk6U00";
		const _helperlplDtPH = undefined;
		const _returnValuePWygp4u = await _HelpsyBidLG.padWidth(_cmdgNUrTCj, _helperlplDtPH)
	});

	it('test for Help', async () => {
		const _HelpoJrEgWL = new Help()
		const _cmdAJTr31a = null;
		const _helpervIOOHqo = "HVQUtddz";
		const _returnValuevm8Huft = await _HelpoJrEgWL.longestSubcommandTermLength(_cmdAJTr31a, _helpervIOOHqo)
		const _cmdnGpq0Yw = undefined;
		const _returnValueolOAuB6 = await _HelpoJrEgWL.subcommandTerm(_cmdnGpq0Yw)
		const _optionJE9ocbc = "NQ0EARalUrSoaHL44gTTiXKYmHJKWNBhYOQcyjakzr2j9RqwdZNq4ypAZ70vyFZpWzVI2g183piKrVs3omhG7nq";
		const _returnValuemvw5mhd = await _HelpoJrEgWL.optionTerm(_optionJE9ocbc)
	});

	it('test for Help', async () => {
		const _HelpD79MM3Q = new Help()
		const _arrayValuexmGDr12 = {
		
	}
		const _arrayValueGWF07Gr = null;
		const _arrayValuelyFWytC = {
		
	}
		const _arrayValueTbxQHZp = "1KGK1eSO9IMWqhc9BWAeIdQAwvyv1DR8BdJBaouG0ilD6a2GTUzfIRfBbc1dWGq8DqSzJIkrWww52z";
		const _argumentQtRSnYq = [_arrayValuexmGDr12, _arrayValueGWF07Gr, _arrayValuelyFWytC, _arrayValueTbxQHZp]
		const _returnValueN5vTnC3 = await _HelpD79MM3Q.argumentDescription(_argumentQtRSnYq)
		const _cmdKVJWkKV = "DMTCHE18GXSWGzlbqTQWV45WBp";
		const _returnValueJmdrnTB = await _HelpD79MM3Q.visibleOptions(_cmdKVJWkKV)
	});

	it('test for Help', async () => {
		const _HelpMgxQ84c = new Help()
		const _cmdDOJtrKX = 4.844240794611048;
		const _returnValuevx3fCuS = await _HelpMgxQ84c.commandUsage(_cmdDOJtrKX)
		const _cmdPobI4Ey = -3.6097125438257835;
		const _arrayValuec5o4vus = "6M0DkcyY";
		const _arrayValuey2KVWAz = -9.880707391302387;
		const _arrayValuehRWXXc6 = 8.959075831090548;
		const _helperE7kexQE = [_arrayValuec5o4vus, _arrayValuey2KVWAz, _arrayValuehRWXXc6]
		const _returnValueZNN3fB = await _HelpMgxQ84c.padWidth(_cmdPobI4Ey, _helperE7kexQE)
	});

	it('test for Help', async () => {
		const _HelpYypt2w8 = new Help()
		const _strXZloWTQ = "aE2yJrnUhLSIplRBUPWpJhmfWb0uxwLnWJsVqNIJGrebe1fj6DC899VseqLF15jE4jeMsmXRW3G72o7MQcDygW";
		const _width1ewhMq = undefined;
		const _indentGJd8imV = undefined;
		const _minColumnWidtheUboUtE = undefined;
		const _returnValuerId3S4V = await _HelpYypt2w8.wrap(_strXZloWTQ, _width1ewhMq, _indentGJd8imV, _minColumnWidtheUboUtE)
		const _optionKhStrmd = true;
		const _returnValueyGz8y2N = await _HelpYypt2w8.optionTerm(_optionKhStrmd)
		const _argumentmmVzSEt = "4OUk5Nfi7lJSkSur1m5xeJvepqrrpn1b5SiRISEbmwwxv4CFwHje2MHRU9yC7ArpDI";
		const _returnValueb5qWs8Z = await _HelpYypt2w8.argumentDescription(_argumentmmVzSEt)
	});

	it('test for Help', async () => {
		const _HelpzZMQdTx = new Help()
		const _strSeWEQQM = "9xStUwrE977e5X9MP3MANL8BQyD6pvWY9zRPn4yP3Q5fykH27hGDmyFuHfQMlBu7IYNwmci4TtbyXUVcrHpcBTftS2yP8pnvQfY";
		const _widthW52AOVB = true;
		const _indentHfLOavF = true;
		const _minColumnWidthqStfMiS = undefined;
		const _returnValuezzzYfyl = await _HelpzZMQdTx.wrap(_strSeWEQQM, _widthW52AOVB, _indentHfLOavF, _minColumnWidthqStfMiS)
		const _cmdPvn180 = -2.255288349771341;
		const _helperG46OtZP = "PTH3T3w8MIz6QlnoyOI5svDAYB5R4XbXLpd7tML7SX5BY2ruOB";
		const _returnValueE6uWnOX = await _HelpzZMQdTx.padWidth(_cmdPvn180, _helperG46OtZP)
		const _cmdL75BUAk = null;
		const _returnValuefT6g9z2 = await _HelpzZMQdTx.commandUsage(_cmdL75BUAk)
		const _cmdf3VuXMt = "1wYhmXRHaBBZ7ppEWA2gYONseE5QNTbGvPcJ4lWFeA2amZLBeu5F0HUFH4fWiJiK24FTpCPOxf1mH0sIDxjds4xVQEknsqsVfX5";
		const _helpera0PdVi = true;
		const _returnValuet2q58bi = await _HelpzZMQdTx.longestArgumentTermLength(_cmdf3VuXMt, _helpera0PdVi)
	});
})