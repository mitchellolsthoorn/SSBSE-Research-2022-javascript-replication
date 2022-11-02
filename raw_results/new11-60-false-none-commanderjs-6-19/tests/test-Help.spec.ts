export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpQIgzw5T = new Help()
		const _cmdDBpdNQ = undefined;
		const _returnValueGowUcHI = await _HelpQIgzw5T.commandUsage(_cmdDBpdNQ)
		const _argumentUQzrz6n = null;
		const _returnValueG5TBGt = await _HelpQIgzw5T.argumentTerm(_argumentUQzrz6n)
		const _cmdciL39C9 = -6.3818021416049575;
		const _returnValueEI03G9J = await _HelpQIgzw5T.subcommandDescription(_cmdciL39C9)
		const _cmdBo3jW2O = -3.0856532862713326;
		const _returnValueisMCiP = await _HelpQIgzw5T.commandUsage(_cmdBo3jW2O)
		const _cmdEIIN5yE = undefined;
		const _returnValuehvrovMw = await _HelpQIgzw5T.subcommandDescription(_cmdEIIN5yE)
	});

	it('test for Help', async () => {
		const _HelpOCkoehf = new Help()
		const _arrayValuevyfCwQQ = undefined;
		const _cmdvLWdxd = [_arrayValuevyfCwQQ]
		const _helperLBHOutf = null;
		const _returnValueLCxduQf = await _HelpOCkoehf.padWidth(_cmdvLWdxd, _helperLBHOutf)
	});

	it('test for Help', async () => {
		const _HelpCnUGtKf = new Help()
		const _cmdoi1GhAQ = undefined;
		const _returnValue8spAP8 = await _HelpCnUGtKf.visibleArguments(_cmdoi1GhAQ)
		const _optionH8nVR9L = -7.39407374909194;
		const _returnValueV9qOb9u = await _HelpCnUGtKf.optionTerm(_optionH8nVR9L)
		const _argumentl6L9NCO = undefined;
		const _returnValueCHz614 = await _HelpCnUGtKf.argumentTerm(_argumentl6L9NCO)
	});

	it('test for Help', async () => {
		const _HelppUqCnD0 = new Help()
		const _optionMiSiqw = true;
		const _returnValuewPLp3kn = await _HelppUqCnD0.optionTerm(_optionMiSiqw)
		const _arrayValueHKXhyt0 = 3.066902251841185;
		const _strq8RnzL = [_arrayValueHKXhyt0]
		const _widthp11Pi24 = undefined;
		const _arrayValuexKGpNgv = false;
		const _arrayValuezrGMNbW = "IXLyJTYdK29pbJIT1De5nv9Ux1WFZeA1BF8uU1";
		const _arrayValuePvbNnoQ = "QjD85C2yIQvPVkeTol9iubp3FS42QA";
		const _indentquBihVx = [_arrayValuexKGpNgv, _arrayValuezrGMNbW, _arrayValuePvbNnoQ]
		const _minColumnWidthV1Niw7X = 0.8287086953989515;
		const _returnValuesYUGxpq = await _HelppUqCnD0.wrap(_strq8RnzL, _widthp11Pi24, _indentquBihVx, _minColumnWidthV1Niw7X)
		const _returnValuexGykEWR = "yGM7NDXY8t";
		const _cmddc6b7cQ = () => { return _returnValuexGykEWR };
		const _returnValueS36tvW = await _HelppUqCnD0.commandUsage(_cmddc6b7cQ)
		const _cmdMBXB2cn = null;
		const _helperdLDoWS2 = false;
		const _returnValuebhVTHYm = await _HelppUqCnD0.longestOptionTermLength(_cmdMBXB2cn, _helperdLDoWS2)
	});

	it('test for Help', async () => {
		const _HelpYKfnszT = new Help()
		const _cmdtgT4dLf = true;
		const _returnValueJ6gmTvG = await _HelpYKfnszT.subcommandDescription(_cmdtgT4dLf)
		const _cmdwkSBQt1 = null;
		const _returnValueGxiXi2S = await _HelpYKfnszT.visibleCommands(_cmdwkSBQt1)
		const _optionSUjqveL = true;
		const _returnValueBQWkwpt = await _HelpYKfnszT.optionTerm(_optionSUjqveL)
	});

	it('test for Help', async () => {
		const _HelpGPZz7X4 = new Help()
		const _arrayValueaAzNY4B = undefined;
		const _arrayValuee1x5roZ = null;
		const _arrayValuehJcDTx = [_arrayValuee1x5roZ]
		const _cmdraCwva = [_arrayValueaAzNY4B, _arrayValuehJcDTx]
		const _helperTApBQcU = undefined;
		const _returnValueD9BPBhd = await _HelpGPZz7X4.longestOptionTermLength(_cmdraCwva, _helperTApBQcU)
		const _cmdy5WVm0 = false;
		const _returnValuesLTWdQt = await _HelpGPZz7X4.subcommandTerm(_cmdy5WVm0)
		const _cmdqH3Creg = {
		
	}
		const _arrayValuecqzwg9M = -1.618356300467859;
		const _arrayValuePyQHm92 = "nqzwOF9IqUc51GwBBGyH23qBqx";
		const _arrayValueYMzBXSO = undefined;
		const _arrayValuewUCHxmY = [_arrayValuePyQHm92, _arrayValueYMzBXSO]
		const _helperxTAlhy = [_arrayValuecqzwg9M, _arrayValuewUCHxmY]
		const _returnValuenl6PuI8 = await _HelpGPZz7X4.padWidth(_cmdqH3Creg, _helperxTAlhy)
		const _argumentZWq9Xsu = undefined;
		const _returnValueG6hDMXs = await _HelpGPZz7X4.argumentDescription(_argumentZWq9Xsu)
	});

	it('test for Help', async () => {
		const _HelpGtLZEv = new Help()
		const _arrayValueuWDQS1W = undefined;
		const _arrayValuenqHu0up = -1.5929132482912927;
		const _arrayValueJORZSiL = undefined;
		const _returnValueoXdu2u0 = null;
		const _arrayValueYLXaUIY = () => { return _returnValueoXdu2u0 };
		const _cmdawiYVxa = [_arrayValueuWDQS1W, _arrayValuenqHu0up, _arrayValueJORZSiL, _arrayValueYLXaUIY]
		const _returnValueExkUI4W = await _HelpGtLZEv.visibleCommands(_cmdawiYVxa)
		const _cmdDMnNDjI = 1.386152460270031;
		const _returnValueoRDNFOW = await _HelpGtLZEv.commandUsage(_cmdDMnNDjI)
		const _cmdJj9HtnP = null;
		const _helperUtsrQsp = null;
		const _returnValuerzI0zDl = await _HelpGtLZEv.formatHelp(_cmdJj9HtnP, _helperUtsrQsp)
		const _optionBSnavQb = "EFsq4H5MhZm93Xz5RgGVPrKMlr7y2WMCjeAdjYyxcaDJz901BCGAerCeSHCcOjbu9ZaAcOIo";
		const _returnValueT3EBw65 = await _HelpGtLZEv.optionTerm(_optionBSnavQb)
	});

	it('test for Help', async () => {
		const _HelpdZTizOQ = new Help()
		const _cmdDbJyMG6 = -4.355120811897493;
		const _arrayValueuYDBYX0 = false;
		const _arrayValueaZ0c7xI = {
		
	}
		const _arrayValueD0gkAcT = [_arrayValueuYDBYX0, _arrayValueaZ0c7xI]
		const _arrayValuesjnVhR6 = null;
		const _arrayValueTuofHam = [_arrayValueD0gkAcT, _arrayValuesjnVhR6]
		const _arrayValueoOTtUa2 = {
		
	}
		const _arrayValuejfmQgp = undefined;
		const _returnValueFvMA5aJ = [_arrayValueTuofHam, _arrayValueoOTtUa2, _arrayValuejfmQgp]
		const _helperCZx4Ena = () => { return _returnValueFvMA5aJ };
		const _returnValueVjfIKUx = await _HelpdZTizOQ.longestArgumentTermLength(_cmdDbJyMG6, _helperCZx4Ena)
		const _cmddeaZGOP = true;
		const _returnValuecbANKBE = await _HelpdZTizOQ.visibleCommands(_cmddeaZGOP)
	});

	it('test for Help', async () => {
		const _HelpwSTLFNF = new Help()
		const _optionSq1V9Au = null;
		const _returnValuemLYP5mq = await _HelpwSTLFNF.optionDescription(_optionSq1V9Au)
		const _cmdATmei8b = 4.2069294833686595;
		const _helperbzsIvZi = "urRvbG26zElW4VdJfjGQIsMQLPBhQlFGer5BYy8S1u4RMNvBDjqIGY2Ki7E7mWOecCsBVs5fTBRA";
		const _returnValue3RG3Fh = await _HelpwSTLFNF.padWidth(_cmdATmei8b, _helperbzsIvZi)
	});

	it('test for Help', async () => {
		const _HelpyhQmQu = new Help()
		const _cmdOuKrCF9 = 8.719334096616048;
		const _returnValuegvigGKc = await _HelpyhQmQu.visibleOptions(_cmdOuKrCF9)
		const _cmdVw7h82F = undefined;
		const _helperjMuhJIk = null;
		const _returnValuerHuR0Ft = await _HelpyhQmQu.longestSubcommandTermLength(_cmdVw7h82F, _helperjMuhJIk)
		const _cmdX9ttHw0 = -7.578068331225436;
		const _returnValueBzHpl1l = await _HelpyhQmQu.subcommandDescription(_cmdX9ttHw0)
		const _cmdbWskGTn = "VfL6uP7cTIYRit5wOo2gDir4Kn0pVzQvogrp";
		const _helperMDwjQc = undefined;
		const _returnValueZeVkV7P = await _HelpyhQmQu.formatHelp(_cmdbWskGTn, _helperMDwjQc)
		const _optionddRZ5I = true;
		const _returnValueKcLL9FJ = await _HelpyhQmQu.optionDescription(_optionddRZ5I)
	});

	it('test for Help', async () => {
		const _HelpRTbGYZg = new Help()
		const _argumentQQtuu3 = {
		
	}
		const _returnValueBtQ68S1 = await _HelpRTbGYZg.argumentDescription(_argumentQQtuu3)
		const _cmdjR8luCK = 0.726985806683162;
		const _returnValuehoBEP8i = await _HelpRTbGYZg.commandDescription(_cmdjR8luCK)
		const _cmdXY937Qn = "Id8aaFTNbPBvr6";
		const _returnValuelSwdlZZ = await _HelpRTbGYZg.subcommandTerm(_cmdXY937Qn)
	});

	it('test for Help', async () => {
		const _HelpRFQ0xOb = new Help()
		const _argumentKZyL8OL = null;
		const _returnValueORJT3PJ = await _HelpRFQ0xOb.argumentTerm(_argumentKZyL8OL)
		const _arrayValueHZ4dSxP = null;
		const _arrayValue26dPFA = 5.589016427476285;
		const _arrayValueko2rORY = {
		
	}
		const _cmdrYLg2YE = [_arrayValueHZ4dSxP, _arrayValue26dPFA, _arrayValueko2rORY]
		const _returnValueRuenQZX = await _HelpRFQ0xOb.commandDescription(_cmdrYLg2YE)
		const _arrayValuePYaB3sY = true;
		const _arrayValueuKcatB4 = {
		
	}
		const _arrayValuen1ynfts = "mEH2P4non1FyXRUfAyjXaoSuXoCFiGvCnmQaMm2o";
		const _arrayValueythN40a = -5.0456156731816275;
		const _arrayValue9PAZDe = [_arrayValueuKcatB4, _arrayValuen1ynfts, _arrayValueythN40a]
		const _cmdIwdTtCu = [_arrayValuePYaB3sY, _arrayValue9PAZDe]
		const _returnValueHw4BHU7 = await _HelpRFQ0xOb.commandDescription(_cmdIwdTtCu)
	});

	it('test for Help', async () => {
		const _HelpY9Z60r2 = new Help()
		const _argumentDJEPiC0 = {
		
	}
		const _returnValueBvz39bg = await _HelpY9Z60r2.argumentDescription(_argumentDJEPiC0)
		const _arrayValuer3tIEtf = 8.167012521336453;
		const _cmdmGQU8yL = [_arrayValuer3tIEtf]
		const _helperaWJnAA3 = "FkckGmaI92puR7x72A77GW2RwOFhz2tjLGxKLaFH7LsAi3XWmVjjDJSsEN";
		const _returnValueOaJJAt1 = await _HelpY9Z60r2.longestSubcommandTermLength(_cmdmGQU8yL, _helperaWJnAA3)
		const _argumentK99u0tp = "vVRbB7FMHdkMD7e4S5O4onOgfy8oMlalnDcbvvSij0NWsWJim9n84z7t3fukJrxcJEer1KcDoihi";
		const _returnValueqv92dfy = await _HelpY9Z60r2.argumentDescription(_argumentK99u0tp)
		const _cmdG2FwKni = {
		
	}
		const _helperIYpT2h7 = true;
		const _returnValuepEfJre3 = await _HelpY9Z60r2.longestOptionTermLength(_cmdG2FwKni, _helperIYpT2h7)
	});

	it('test for Help', async () => {
		const _HelpGwU2yt = new Help()
		const _cmdijBzsNG = true;
		const _helperyIeGvce = -4.557308770017184;
		const _returnValueg2RDfeh = await _HelpGwU2yt.formatHelp(_cmdijBzsNG, _helperyIeGvce)
		const _argumentYtWyhl = undefined;
		const _returnValuedrWhjm = await _HelpGwU2yt.argumentTerm(_argumentYtWyhl)
		const _cmdJcGyPgJ = 0.6542238172328059;
		const _helperhNve3RN = 0.27628792925290924;
		const _returnValueBIxBPSF = await _HelpGwU2yt.formatHelp(_cmdJcGyPgJ, _helperhNve3RN)
		const _optionisFhy7Z = -2.920538549633286;
		const _returnValueTDJ6Sn = await _HelpGwU2yt.optionDescription(_optionisFhy7Z)
	});

	it('test for Help', async () => {
		const _HelpHP6wCll = new Help()
		const _cmddl07qpH = true;
		const _returnValueO8wePzF = await _HelpHP6wCll.commandUsage(_cmddl07qpH)
		const _cmdbMuGDKf = true;
		const _returnValueATCRqjk = await _HelpHP6wCll.subcommandTerm(_cmdbMuGDKf)
	});

	it('test for Help', async () => {
		const _HelpJJWwDfh = new Help()
		const _optionttS6RCW = true;
		const _returnValueVGMRni5 = await _HelpJJWwDfh.optionDescription(_optionttS6RCW)
		const _returnValueqV7puCm = {
		
	}
		const _cmd4o6Wx8 = () => { return _returnValueqV7puCm };
		const _returnValuejGyiy7w = await _HelpJJWwDfh.subcommandTerm(_cmd4o6Wx8)
	});

	it('test for Help', async () => {
		const _HelpDgDIGPq = new Help()
		const _strt4Ut49S = "EkXzFyqoq44219KInjJ9JvTp6kfAOKnnZrk9lRoD7GzGCb7lzD5a978DdJtf52XGQU9P";
		const _widthUfGqYV8 = null;
		const _returnValuenKbhShi = "PWuCGFyR";
		const _returnValueCkxgOJV = () => { return _returnValuenKbhShi };
		const _indentw7jOYua = () => { return _returnValueCkxgOJV };
		const _minColumnWidthOMioSxx = {
		
	}
		const _returnValueYsqRzbc = await _HelpDgDIGPq.wrap(_strt4Ut49S, _widthUfGqYV8, _indentw7jOYua, _minColumnWidthOMioSxx)
		const _returnValueQWnq22q = null;
		const _cmdq5ETttD = () => { return _returnValueQWnq22q };
		const _helperKI5JWkB = undefined;
		const _returnValueWS4EmlZ = await _HelpDgDIGPq.padWidth(_cmdq5ETttD, _helperKI5JWkB)
	});

	it('test for Help', async () => {
		const _HelpSAJB7uM = new Help()
		const _strmyFg9pd = "o8XQfdyTaNmnhg24c5j81T9IzVGggYkalWBMiTotFpRuwijjb";
		const _widthEZJ5uX4 = null;
		const _indentF2hSzc4 = 4.629323422570126;
		const _minColumnWidthybA6vb = undefined;
		const _returnValueiIdzjU = await _HelpSAJB7uM.wrap(_strmyFg9pd, _widthEZJ5uX4, _indentF2hSzc4, _minColumnWidthybA6vb)
	});
})