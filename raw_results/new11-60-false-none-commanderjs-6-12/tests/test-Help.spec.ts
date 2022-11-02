export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpj4vgFUl = new Help()
		const _cmdgwItyX = undefined;
		const _returnValuePwLusuH = await _Helpj4vgFUl.commandUsage(_cmdgwItyX)
	});

	it('test for Help', async () => {
		const _HelpButQ2v8 = new Help()
		const _optionvHm8zUw = undefined;
		const _returnValueOnjbDS = await _HelpButQ2v8.optionDescription(_optionvHm8zUw)
	});

	it('test for Help', async () => {
		const _HelpM62UDFr = new Help()
		const _strLkyKBWS = true;
		const _arrayValueRxlMcjJ = false;
		const _arrayValuenQON6Gv = null;
		const _arrayValue9R9NUg = [_arrayValueRxlMcjJ, _arrayValuenQON6Gv]
		const _returnValuey3R79Kr = {
		
	}
		const _arrayValueDRDutIF = () => { return _returnValuey3R79Kr };
		const _arrayValuevMOK9T = "a1Z2m0LaiCeIxzgTgd2SBI";
		const _widthUeF1EYp = [_arrayValue9R9NUg, _arrayValueDRDutIF, _arrayValuevMOK9T]
		const _indentEZ23kAV = null;
		const _minColumnWidthI7kFuKj = "o3rlWp6lqnOerbDSeo5jwARbedxmdlIo9cv8zduWIBh6KYo2PcoDY1qG9Wby1YeNIpiE";
		const _returnValueySpg1VV = await _HelpM62UDFr.wrap(_strLkyKBWS, _widthUeF1EYp, _indentEZ23kAV, _minColumnWidthI7kFuKj)
		const _optionxRCz1Jh = false;
		const _returnValueSZuT7M6 = await _HelpM62UDFr.optionTerm(_optionxRCz1Jh)
		const _optionRyeg1gU = []
		const _returnValueXpXBspk = await _HelpM62UDFr.optionTerm(_optionRyeg1gU)
	});

	it('test for Help', async () => {
		const _HelpNqxozm = new Help()
		const _arrayValueAt7TxCf = undefined;
		const _arrayValuet8dLdd7 = -3.425682820836908;
		const _arrayValueEDSeq1r = "896YOM1cUwjD1lyYxWr6UUbcfS9qPuWNOosleqwFiwHUPRVV24dd";
		const _arrayValueoDdyIwy = [_arrayValuet8dLdd7, _arrayValueEDSeq1r]
		const _arrayValueMF5m4of = [_arrayValueoDdyIwy]
		const _arrayValueyE687wm = null;
		const _cmdLptGuid = [_arrayValueAt7TxCf, _arrayValueMF5m4of, _arrayValueyE687wm]
		const _helperqxV4u8x = null;
		const _returnValuegiPkS03 = await _HelpNqxozm.formatHelp(_cmdLptGuid, _helperqxV4u8x)
		const _cmdmiPkM1 = "txrOp5GtNoYJu4Bh57Lf21fnia7tumpxlJlWi4qWrFxbpK8grmrtfZWFgLIlvNb3kqh2SnfLLJ0D4WvR9mYQU7jFgRv4mg";
		const _helperBqzLOoO = false;
		const _returnValueVk9uzmU = await _HelpNqxozm.formatHelp(_cmdmiPkM1, _helperBqzLOoO)
		const _arrayValuelVMXbvH = undefined;
		const _arrayValuetnPt9q = null;
		const _arrayValue6i9DGs = [_arrayValuelVMXbvH, _arrayValuetnPt9q]
		const _arrayValueHVOLW5 = {
		
	}
		const _arrayValuePtIlMDZ = null;
		const _cmdemSONS = [_arrayValue6i9DGs, _arrayValueHVOLW5, _arrayValuePtIlMDZ]
		const _helperQKJJYzF = undefined;
		const _returnValueuOKxz68 = await _HelpNqxozm.longestSubcommandTermLength(_cmdemSONS, _helperQKJJYzF)
		const _cmdbZiX1wM = null;
		const _returnValueUtcqsGA = await _HelpNqxozm.visibleArguments(_cmdbZiX1wM)
	});

	it('test for Help', async () => {
		const _HelpvT6DQ7j = new Help()
		const _cmdsqCbJl8 = "ox4IC7xdMXl6lF4CkND26zrxkeSrPADL8hWZjsC4HlSYJ5tl9zFpLR6MkivmjyMqK2FZN3Y1rjZ8aJ2G9k6FGhuL5M9t";
		const _returnValueNDnylSB = await _HelpvT6DQ7j.subcommandTerm(_cmdsqCbJl8)
		const _cmdbDTEyIW = -4.7505250174633;
		const _returnValueO89LD0P = await _HelpvT6DQ7j.subcommandTerm(_cmdbDTEyIW)
		const _cmdJhvDYh2 = null;
		const _returnValuet5NUsaz = undefined;
		const _helperX0MOjyP = () => { return _returnValuet5NUsaz };
		const _returnValueH8Vf6J = await _HelpvT6DQ7j.longestSubcommandTermLength(_cmdJhvDYh2, _helperX0MOjyP)
		const _cmdUzBDhUn = false;
		const _arrayValueAZTHWQi = "XX3d91hHs9oAzWA3A5lnwGkJellLMTKmoN1mv";
		const _arrayValueai2xRF = true;
		const _helperdQEiom = [_arrayValueAZTHWQi, _arrayValueai2xRF]
		const _returnValuexJxPBTU = await _HelpvT6DQ7j.padWidth(_cmdUzBDhUn, _helperdQEiom)
		const _cmdeNcr6MR = 5.829573860083228;
		const _returnValueKmERc3 = await _HelpvT6DQ7j.visibleArguments(_cmdeNcr6MR)
	});

	it('test for Help', async () => {
		const _HelpDdnIX5u = new Help()
		const _optionS4RSvMD = "oDqD8zaASBqT6pPwkmPzq5bhVCb2kw";
		const _returnValueTMyziLQ = await _HelpDdnIX5u.optionDescription(_optionS4RSvMD)
		const _optionyVLlYiz = {
		
	}
		const _returnValueazdd5r0 = await _HelpDdnIX5u.optionTerm(_optionyVLlYiz)
	});

	it('test for Help', async () => {
		const _HelpXcW4Ad = new Help()
		const _returnValueb7uYHc = {
		
	}
		const _cmdSxM4qSY = () => { return _returnValueb7uYHc };
		const _helperAUiUPsl = -6.54579068472775;
		const _returnValueDHmAXpB = await _HelpXcW4Ad.longestArgumentTermLength(_cmdSxM4qSY, _helperAUiUPsl)
		const _cmdmY8kvEw = true;
		const _arrayValueP0HZZzT = true;
		const _arrayValueT6Ayytg = 4.061094824165345;
		const _returnValueGmrrdwI = 3.1475739726774883;
		const _arrayValueF7nK20D = () => { return _returnValueGmrrdwI };
		const _arrayValuexLjwG5 = "QBN2sc4u4aEeOetqRWyN6BNH";
		const _helperRcKpVYo = [_arrayValueP0HZZzT, _arrayValueT6Ayytg, _arrayValueF7nK20D, _arrayValuexLjwG5]
		const _returnValuet1hWUXj = await _HelpXcW4Ad.formatHelp(_cmdmY8kvEw, _helperRcKpVYo)
	});

	it('test for Help', async () => {
		const _HelpXioqe2D = new Help()
		const _cmdnegm99P = true;
		const _returnValuefjWLId7 = await _HelpXioqe2D.commandUsage(_cmdnegm99P)
		const _cmdFcqPZps = 5.7368655976473875;
		const _returnValueD69o46x = await _HelpXioqe2D.subcommandTerm(_cmdFcqPZps)
		const _arrayValuesaJrwuI = {
		
	}
		const _arrayValueMQ4kdZ3 = undefined;
		const _arrayValuePL9kNC = 5.383766923465348;
		const _optiongDoraBN = [_arrayValuesaJrwuI, _arrayValueMQ4kdZ3, _arrayValuePL9kNC]
		const _returnValueE4rvsMk = await _HelpXioqe2D.optionTerm(_optiongDoraBN)
	});

	it('test for Help', async () => {
		const _HelpsDnn7m = new Help()
		const _cmdmF8U7dH = -6.7082880217223835;
		const _returnValuejpVHQoi = await _HelpsDnn7m.visibleArguments(_cmdmF8U7dH)
		const _cmdNrCYGt = {
		
	}
		const _helperDFeX0Ld = null;
		const _returnValuefLTQqCG = await _HelpsDnn7m.padWidth(_cmdNrCYGt, _helperDFeX0Ld)
		const _argumenteOR0Tz0 = null;
		const _returnValueOrupqrj = await _HelpsDnn7m.argumentTerm(_argumenteOR0Tz0)
	});

	it('test for Help', async () => {
		const _HelpBR6ufxL = new Help()
		const _cmdq3FbBwn = 4.104516582339775;
		const _returnValuekOPZO0d = await _HelpBR6ufxL.visibleCommands(_cmdq3FbBwn)
		const _cmdFOYpEfl = null;
		const _arrayValueDeBOUM0 = "Fu4qm23Am0Y7TlrLv7MChnWtFZqzTgNVBy7RUvG";
		const _arrayValueA3if0m = 4.24121452306151;
		const _arrayValueaiyZqyu = false;
		const _helperG1P4gn = [_arrayValueDeBOUM0, _arrayValueA3if0m, _arrayValueaiyZqyu]
		const _returnValueHg1Ec57 = await _HelpBR6ufxL.padWidth(_cmdFOYpEfl, _helperG1P4gn)
		const _cmdFrZnfQd = "O4pNeCdKGUklWnJ7qfHxiTm2t9chLW15mqJvZJLCCSiD3zObfXdvPMHcK";
		const _helperQ8WAgWm = "CPr2VqpFG2YnMR82VQcT8wpxkCHL8JcpRItJOZFy3tCpU9YptwAhdDSytSm9cRHogbxwL1Tyzc3TmfulhK8kImggKTxw3p3YO";
		const _returnValuevnL6AL = await _HelpBR6ufxL.padWidth(_cmdFrZnfQd, _helperQ8WAgWm)
	});

	it('test for Help', async () => {
		const _HelpJxottWg = new Help()
		const _cmdRG1SDKU = null;
		const _returnValuenHFT2ey = await _HelpJxottWg.visibleOptions(_cmdRG1SDKU)
		const _cmdGkB0CPz = -6.98158515257959;
		const _helpermC9rGq4 = "F6D0dLmS2d5Ukr3PY9pkkLOonnl80lyIVhiaZQC4HtdQEjGfEl";
		const _returnValueTxMk3Oj = await _HelpJxottWg.longestOptionTermLength(_cmdGkB0CPz, _helpermC9rGq4)
		const _optionmRCDgnp = true;
		const _returnValueHUi6Hug = await _HelpJxottWg.optionTerm(_optionmRCDgnp)
		const _arrayValuevfwmsr = null;
		const _arrayValueSE2ZVIj = true;
		const _arrayValueDSqwumM = "Cj8";
		const _arrayValuexq7hwBu = undefined;
		const _cmdeFKwGl = [_arrayValuevfwmsr, _arrayValueSE2ZVIj, _arrayValueDSqwumM, _arrayValuexq7hwBu]
		const _arrayValueBNr6Kim = undefined;
		const _arrayValueI3yUNl7 = -8.2408260713433;
		const _arrayValuezKrNTi1 = "lFrTAhp8gBKNaqYpM3uSkScg1HGq8Q9sB7qL";
		const _arrayValuevzpaABr = [_arrayValueBNr6Kim, _arrayValueI3yUNl7, _arrayValuezKrNTi1]
		const _arrayValuepWlrXM = null;
		const _arrayValueQKZdeV6 = undefined;
		const _arrayValuetYrJ36L = -5.95606612048798;
		const _returnValuexqRz7ff = [_arrayValueQKZdeV6, _arrayValuetYrJ36L]
		const _returnValuecWg2BOU = () => { return _returnValuexqRz7ff };
		const _returnValuewId2Dt = () => { return _returnValuecWg2BOU };
		const _arrayValueJB3Ngx = () => { return _returnValuewId2Dt };
		const _helperbQ1c7R = [_arrayValuevzpaABr, _arrayValuepWlrXM, _arrayValueJB3Ngx]
		const _returnValuesAe2krn = await _HelpJxottWg.formatHelp(_cmdeFKwGl, _helperbQ1c7R)
		const _cmdcUImZK7 = 7.650895178859276;
		const _helpergfnG3u6 = -5.095054704293409;
		const _returnValueCWyhP7 = await _HelpJxottWg.padWidth(_cmdcUImZK7, _helpergfnG3u6)
	});

	it('test for Help', async () => {
		const _HelpMzY49XA = new Help()
		const _cmdgastp8x = -9.267038645239285;
		const _returnValueTkkWXH = await _HelpMzY49XA.subcommandDescription(_cmdgastp8x)
	});

	it('test for Help', async () => {
		const _HelpwbXuwiH = new Help()
		const _argumentLbyTwLp = "70VRCxqM6uTTqgkQ8IUE6VevAHmXtDkLE7VxmsfB3bCL3a1ZCw6VU";
		const _returnValueEL0fWx0 = await _HelpwbXuwiH.argumentDescription(_argumentLbyTwLp)
		const _cmd1MrXQq = {
		
	}
		const _helperH6c84V = []
		const _returnValueyqWbOzs = await _HelpwbXuwiH.longestSubcommandTermLength(_cmd1MrXQq, _helperH6c84V)
		const _cmdCNXsQWM = null;
		const _returnValueYoxTgn = await _HelpwbXuwiH.commandUsage(_cmdCNXsQWM)
		const _cmdSn5NH1t = false;
		const _returnValueq9LkOkZ = await _HelpwbXuwiH.subcommandTerm(_cmdSn5NH1t)
		const _argumentTPDJl44 = null;
		const _returnValuebZSuE5Z = await _HelpwbXuwiH.argumentTerm(_argumentTPDJl44)
	});

	it('test for Help', async () => {
		const _HelpnEQJ74c = new Help()
		const _cmdfscI4Zo = undefined;
		const _returnValueTPnT7KR = await _HelpnEQJ74c.commandDescription(_cmdfscI4Zo)
		const _returnValuelGpMwcN = undefined;
		const _optionv13R0P1 = () => { return _returnValuelGpMwcN };
		const _returnValueCmV8z8f = await _HelpnEQJ74c.optionDescription(_optionv13R0P1)
		const _cmd7nn3x0 = "eLID2eAUT4SOJN4OQgXome0MjS5KuAkGcjwBazucYI8W314zWm1FZxsM486GjcEb6m1";
		const _returnValueg9HoPoy = await _HelpnEQJ74c.visibleArguments(_cmd7nn3x0)
		const _cmd7UpAdD = 2.2620655393802167;
		const _helperCB1B3I = "ULd4X8C8p5rhog2Lj";
		const _returnValueOB7DIgi = await _HelpnEQJ74c.longestSubcommandTermLength(_cmd7UpAdD, _helperCB1B3I)
		const _cmdU71LBYI = false;
		const _returnValueeSIou1X = await _HelpnEQJ74c.commandUsage(_cmdU71LBYI)
	});

	it('test for Help', async () => {
		const _HelpMDEBjA = new Help()
		const _argumentAqFsM6B = null;
		const _returnValuerCoMEWv = await _HelpMDEBjA.argumentTerm(_argumentAqFsM6B)
		const _cmdnDI8umj = null;
		const _returnValueMCZfYjL = await _HelpMDEBjA.subcommandDescription(_cmdnDI8umj)
		const _arrayValueIxqEvx0 = null;
		const _cmdxVKyADb = [_arrayValueIxqEvx0]
		const _returnValuejTUdbc7 = await _HelpMDEBjA.visibleArguments(_cmdxVKyADb)
		const _cmdl0eogcd = null;
		const _helperDIBSWP7 = undefined;
		const _returnValuernNDsj = await _HelpMDEBjA.formatHelp(_cmdl0eogcd, _helperDIBSWP7)
	});

	it('test for Help', async () => {
		const _HelpvmGlM84 = new Help()
		const _cmdCXuZ5Ov = "9acQqqTEUo6HcQQ";
		const _helperOJMlha0 = 5.5903470887328925;
		const _returnValueRflaIkK = await _HelpvmGlM84.padWidth(_cmdCXuZ5Ov, _helperOJMlha0)
		const _cmdSzXil05 = true;
		const _returnValueuMRhYI = await _HelpvmGlM84.commandUsage(_cmdSzXil05)
	});

	it('test for Help', async () => {
		const _HelpPCRnJL9 = new Help()
		const _cmdWfwvOMC = -2.236608512004178;
		const _helperXpZ1DZ5 = true;
		const _returnValuelx7cHUu = await _HelpPCRnJL9.longestOptionTermLength(_cmdWfwvOMC, _helperXpZ1DZ5)
		const _cmdZcChXl2 = {
		
	}
		const _returnValuegLYxFQP = await _HelpPCRnJL9.commandUsage(_cmdZcChXl2)
		const _optionTnV8IdL = -4.618977311185927;
		const _returnValueGKzNjfN = await _HelpPCRnJL9.optionTerm(_optionTnV8IdL)
	});

	it('test for Help', async () => {
		const _HelpeJSkFGa = new Help()
		const _strwuMNnRD = "KMlC1uoXNUJGEjlrJow29e9PamOvyGGzQkg2en8h241";
		const _widthlLOcYY1 = 1.092448110065149;
		const _indentD4PAi1r = {
		
	}
		const _arrayValueTTItwM = -4.5763407366484525;
		const _minColumnWidthQfxahMp = [_arrayValueTTItwM]
		const _returnValuek4vKgnA = await _HelpeJSkFGa.wrap(_strwuMNnRD, _widthlLOcYY1, _indentD4PAi1r, _minColumnWidthQfxahMp)
		const _cmdI7gJsMG = 7.512344524732949;
		const _returnValueqtkvUHh = await _HelpeJSkFGa.visibleOptions(_cmdI7gJsMG)
		const _optionYVg9gvI = undefined;
		const _returnValueEKrTPVY = await _HelpeJSkFGa.optionTerm(_optionYVg9gvI)
		const _cmdzthAXKZ = "Kz5R8JlFpKuYFYzFaO9ylG7uYpKMBY";
		const _helperI6wojOy = {
		
	}
		const _returnValuexoUMVtm = await _HelpeJSkFGa.longestSubcommandTermLength(_cmdzthAXKZ, _helperI6wojOy)
	});

	it('test for Help', async () => {
		const _HelpHuhI7Pp = new Help()
		const _strqYXhGHK = "2mBRWOyu6MeUWWzVW6LNbkW2jvYuHkybNs4GtlbGX3ynU2Q8ysrus1x";
		const _widthnZ5OV3 = true;
		const _indentFROGZOX = null;
		const _minColumnWidthBgMFeQk = 1.5664959898779216;
		const _returnValueBv2LGBi = await _HelpHuhI7Pp.wrap(_strqYXhGHK, _widthnZ5OV3, _indentFROGZOX, _minColumnWidthBgMFeQk)
		const _returnValueIsPTBJ0 = null;
		const _cmdFwaZTMw = () => { return _returnValueIsPTBJ0 };
		const _helper2Xf0Q6 = -9.649091873980229;
		const _returnValuelRpYroO = await _HelpHuhI7Pp.longestOptionTermLength(_cmdFwaZTMw, _helper2Xf0Q6)
		const _cmdrF7kVb = {
		
	}
		const _returnValueciqwbdJ = await _HelpHuhI7Pp.visibleCommands(_cmdrF7kVb)
		const _strgryUFx0 = 9.263972023791194;
		const _widthG5VN7PX = {
		
	}
		const _arrayValuegVEEA19 = "VQnoy87LpPpbP1hLA3za85rdLBD6qwtwijLUgGRu6sDMGrm85WvaHAUjsLwRNc83fg7NNdrK6ybnsfL8dLlXx4W50N";
		const _arrayValue9Gkpwl = {
		
	}
		const _arrayValuevXj0iWd = "XnVgY2on6nBBXLqsYOiMRKVr4IxaCMRMatXIzOnMWecq8JkqoetB9QimHkq4icnxDTUcSWGTOhsmYtnYzboSddYKYlpJw";
		const _indentLxoB2V = [_arrayValuegVEEA19, _arrayValue9Gkpwl, _arrayValuevXj0iWd]
		const _minColumnWidthpOk2fDz = true;
		const _returnValueg0qQD5K = await _HelpHuhI7Pp.wrap(_strgryUFx0, _widthG5VN7PX, _indentLxoB2V, _minColumnWidthpOk2fDz)
	});
})