export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpv4s8XMD = new Help()
		const _exitCodeRq42ZmG = -2.4724265575676965;
		const _arrayValueNNX2Yi = []
		const _arrayValueNRUAX1A = true;
		const _arrayValueTECJFCO = [_arrayValueNRUAX1A]
		const _arrayValuelWVhQGP = [_arrayValueNNX2Yi, _arrayValueTECJFCO]
		const _arrayValueG4zBsUG = undefined;
		const _returnValuefHd8jhn = [_arrayValueG4zBsUG]
		const _arrayValueW5qaK3 = () => { return _returnValuefHd8jhn };
		const _arrayValuen5wnhhJ = {
		
	}
		const _arrayValueCsEUBxs = undefined;
		const _codeHxeKh2S = [_arrayValuelWVhQGP, _arrayValueW5qaK3, _arrayValuen5wnhhJ, _arrayValueCsEUBxs]
		const _messageRhcfyN8 = "YUdfjRxhFxNNaJkEmxhq91LYhheUYljXQsgjc9E2p01G7";
		const _argumentQqDdq4D = new CommanderError(_exitCodeRq42ZmG, _codeHxeKh2S, _messageRhcfyN8)
		const _returnValueI1L9NbU = await _Helpv4s8XMD.argumentTerm(_argumentQqDdq4D)
		const _cmdDt5FZK5 = null;
		const _helperWYIMBjS = "KrHEisx5";
		const _returnValuelOQ7Yc = await _Helpv4s8XMD.padWidth(_cmdDt5FZK5, _helperWYIMBjS)
		const _arrayValueyCwQDQ = false;
		const _arrayValueoVAacoj = -7.773363880924549;
		const _arrayValueb1fd4HM = [_arrayValueyCwQDQ, _arrayValueoVAacoj]
		const _arrayValueTqd4mcl = "sjjOkNKUTZGXZsRdjsAqzdaavi9NhzPdOVR6tFaKaFk0iLhBWNoHR7hST6ldbGqpIDXq6V4WwMf6xOMy5UCdLP9OJ7FaoR";
		const _arrayValueyak9uGw = []
		const _arrayValuesokBSuX = "EpyeSi0QcKtA8sJp5ZA2Lmlvf8YsXrNt1oPbhT5kl6DwUP8hWgZsWiBE1ur";
		const _arrayValuelKCdUHW = "AF4SEDqTmpwvbd7N4rbtMj1VyFjU2mgLaKYa61OACPhHR2dBK7";
		const _returnValueb5fl4YA = [_arrayValueb1fd4HM, _arrayValueTqd4mcl, _arrayValueyak9uGw, _arrayValuesokBSuX, _arrayValuelKCdUHW]
		const _includesiDSnNMS = () => { return _returnValueb5fl4YA };
		const _flagsNZrHkUK = {
			"includes": _includesiDSnNMS
	}
		const _descriptionymaCpO = false;
		const _optionuiVhaXH = new Option(_flagsNZrHkUK, _descriptionymaCpO)
		const _returnValuelheHLF = null;
		const _includeshoo9Wns = () => { return _returnValuelheHLF };
		const _returnValueZ2vDTe7 = "9B5vFt1F1G8BPMbnzJvFW";
		const _joinbB47mWl = () => { return _returnValueZ2vDTe7 };
		const _valuesTv4r5eg = {
			"includes": _includeshoo9Wns,
		"join": _joinbB47mWl
	}
		const _returnValueK9Yb9T = await _optionuiVhaXH.choices(_valuesTv4r5eg)
		const _fnuwcExCf = undefined;
		const _returnValueEy1G3t7 = await _optionuiVhaXH.argParser(_fnuwcExCf)
		const _returnValueJhIv0y = await _optionuiVhaXH.name()
		const _returnValueLk7ioEo = await _optionuiVhaXH.attributeName()
		const _returnValuehcrxsPL = await _Helpv4s8XMD.optionDescription(_optionuiVhaXH)
		const _returnValuejrYwlLg = undefined;
		const _matchT7cFcYD = () => { return _returnValuejrYwlLg };
		const _arrayValueNvKVzHh = false;
		const _arrayValueAE6gmBY = "ev8tKkcGbxMcnEdich4NKjvT9pQs1xgbCOAv890kYLXMNWZFMBvFUJLjEj85VjrRCCE";
		const _returnValueNbfZR5c = [_arrayValueNvKVzHh, _arrayValueAE6gmBY]
		const _substrzVvLv6 = () => { return _returnValueNbfZR5c };
		const _strvMtHLj8 = {
			"match": _matchT7cFcYD,
		"substr": _substrzVvLv6
	}
		const _widthxy2ioQB = -9.601232956359807;
		const _indentEIlveb = "5YMPfHVCBMM2Uv907Swi0aP7bGOScGtFLzLs5TauDpmXkGSQ6my";
		const _minColumnWidthBkkzPDb = -3.8977562245476793;
		const _returnValueJeVqr8r = await _Helpv4s8XMD.wrap(_strvMtHLj8, _widthxy2ioQB, _indentEIlveb, _minColumnWidthBkkzPDb)
		const _arrayValueQ2wAqvh = 5.2422351071167235;
		const _arrayValueQ7Jm7Se = -5.666644084543884;
		const _argumentB2uhgvE = [_arrayValueQ2wAqvh, _arrayValueQ7Jm7Se]
		const _returnValue1WcN8T = await _Helpv4s8XMD.argumentTerm(_argumentB2uhgvE)
	});

	it('test for Help', async () => {
		const _HelpmKUNOKJ = new Help()
		const _arrayValued9yyzfb = null;
		const _arrayValueU9SADWf = undefined;
		const _arrayValueSncNPJZ = false;
		const _arrayValueGFFYume = "8dWC65kovC4ZnwTMLtfKHD4L9IHBh5tOtfXd3ijOX7lg8BlAoRFAq";
		const _arrayValueGMjiMjp = true;
		const _arrayValuehul2zNl = [_arrayValueU9SADWf, _arrayValueSncNPJZ, _arrayValueGFFYume, _arrayValueGMjiMjp]
		const _cmdctGQxD = [_arrayValued9yyzfb, _arrayValuehul2zNl]
		const _returnValuekV8Lj3 = await _HelpmKUNOKJ.commandUsage(_cmdctGQxD)
		const _strunodleg = "uzGvRLwu";
		const _widthDJAwAoC = -0.1718443817379267;
		const _indentqCx5NGz = -7.09571337984479;
		const _minColumnWidthBhT1SI5 = 0.31579587605345516;
		const _returnValueeUeEAsa = await _HelpmKUNOKJ.wrap(_strunodleg, _widthDJAwAoC, _indentqCx5NGz, _minColumnWidthBhT1SI5)
		const _arrayValuePGBkEQW = null;
		const _cmdOOb0MUn = [_arrayValuePGBkEQW]
		const _returnValuexpmec6H = await _HelpmKUNOKJ.commandUsage(_cmdOOb0MUn)
		const _argumentiBka2TB = "B9TM6NlVeNrxewtdYkMCph5w";
		const _returnValueZvyZowT = await _HelpmKUNOKJ.argumentDescription(_argumentiBka2TB)
	});

	it('test for Help', async () => {
		const _HelpAOn4H18 = new Help()
		const _cmdK7qjmO = 6.339217951568855;
		const _helperoAYOcgV = "ij0hC6BH3zKC16smpe31vp9FKGFR7fJhIArSnqU82KBn";
		const _returnValuefzHwrdR = await _HelpAOn4H18.padWidth(_cmdK7qjmO, _helperoAYOcgV)
		const _cmdjtQdwkd = []
		const _returnValuefokrSIh = await _HelpAOn4H18.visibleCommands(_cmdjtQdwkd)
	});

	it('test for Help', async () => {
		const _HelpiKds5oi = new Help()
		const _cmdHEEQXGj = null;
		const _helperqXSHUV = "oHzuC5jVtfj2lVImvwSqHQNSYhdAG1kFWu9DQmSxC";
		const _returnValueP4WGvqD = await _HelpiKds5oi.longestArgumentTermLength(_cmdHEEQXGj, _helperqXSHUV)
		const _returnValuedvCGrP = -1.9550795992022412;
		const _argumentK3bEJ1N = () => { return _returnValuedvCGrP };
		const _returnValuedExt4fI = await _HelpiKds5oi.argumentDescription(_argumentK3bEJ1N)
		const _returnValuesZSvj17 = 4.523517162314118;
		const _cmdbCHq6QD = () => { return _returnValuesZSvj17 };
		const _returnValueHuasd56 = await _HelpiKds5oi.subcommandDescription(_cmdbCHq6QD)
		const _arrayValuea4ZizKW = "93dt2b8pqsZZuzsD6lvOsN";
		const _arrayValueSXh7ZzU = "agj0Dqcico3CgeNJ80QI9v2icWm8W5vxHUBH06atN1uMubRc7nkEI0KIvedL5bw1wbeef9CyOJK3Rm2OAqpqgBz8S";
		const _arrayValue2dd2lx = -8.241728402060556;
		const _returnValueVpxgeHU = [_arrayValuea4ZizKW, _arrayValueSXh7ZzU, _arrayValue2dd2lx]
		const _arrayValueughIf1Q = () => { return _returnValueVpxgeHU };
		const _arrayValuekNHciI = undefined;
		const _arrayValuedyTnqrk = true;
		const _cmdMCzxX2R = [_arrayValueughIf1Q, _arrayValuekNHciI, _arrayValuedyTnqrk]
		const _returnValuepYl0dJJ = await _HelpiKds5oi.commandUsage(_cmdMCzxX2R)
	});

	it('test for Help', async () => {
		const _Helpvik2xAA = new Help()
		const _cmdmhvG1St = null;
		const _helperqPu8oU = "loKz1Jg0YUPqUcBsjIxf";
		const _returnValuejXbnFYu = await _Helpvik2xAA.longestSubcommandTermLength(_cmdmhvG1St, _helperqPu8oU)
		const _returnValuerrcr5b = undefined;
		const _cmd0Aa8B9 = () => { return _returnValuerrcr5b };
		const _returnValuelhiXYMo = await _Helpvik2xAA.visibleArguments(_cmd0Aa8B9)
	});

	it('test for Help', async () => {
		const _HelpvThJXMX = new Help()
		const _argumentHPW6gZx = "PC4lHjE";
		const _returnValuenuNu4mA = await _HelpvThJXMX.argumentDescription(_argumentHPW6gZx)
		const _returnValueBHS204 = "qq8m5f26im7AD9rYQatg5yisPkgNTKxQ8uIBRWHdrHJE2SqmN";
		const _descriptionMA84e2Y = () => { return _returnValueBHS204 };
		const _cmdQTwNIyO = {
			"description": _descriptionMA84e2Y
	}
		const _returnValueMJXPe2B = await _HelpvThJXMX.commandDescription(_cmdQTwNIyO)
		const _nameUkPQLez = "sVqqTcPStlArDqqpko40Y0IUI6oiT6uedz1AKdDTXXRIItwNMOMzj9Eqt9DIIVeHNvWR7knsCCm6J";
		const _descriptionlX1fcwJ = 7.369823623272925;
		const _cmdtUC2AXS = new Argument(_nameUkPQLez, _descriptionlX1fcwJ)
		const _valueSQMO4h9 = {
		
	}
		const _description4HN5Gp = undefined;
		const _returnValueUGo7py = await _cmdtUC2AXS.default(_valueSQMO4h9, _description4HN5Gp)
		const _valueOhF0MGP = "";
		const _previousf9tTjKJ = "V0Yas8LOeBnKWTudT3NLxQwrFe0jTxvbLNFcSvYR";
		const _returnValuexFbHSlT = await _cmdtUC2AXS._concatValue(_valueOhF0MGP, _previousf9tTjKJ)
		const _returnValueertJzV5 = await _cmdtUC2AXS.argRequired()
		const _returnValueDuRG46n = await _HelpvThJXMX.commandUsage(_cmdtUC2AXS)
		const _cmdAtSL6v = {
		
	}
		const _returnValueP9F1DYs = null;
		const _longestOptionTermLengthebJ8J6I = () => { return _returnValueP9F1DYs };
		const _returnValueV276SsR = -5.797639253611605;
		const _longestSubcommandTermLengthfZsdGvN = () => { return _returnValueV276SsR };
		const _returnValueNDXzngK = -1.81468517509337;
		const _longestArgumentTermLengthKt0bcZF = () => { return _returnValueNDXzngK };
		const _helper4VcRU5 = {
			"longestOptionTermLength": _longestOptionTermLengthebJ8J6I,
		"longestSubcommandTermLength": _longestSubcommandTermLengthfZsdGvN,
		"longestArgumentTermLength": _longestArgumentTermLengthKt0bcZF
	}
		const _returnValuep4O3hq8 = await _HelpvThJXMX.padWidth(_cmdAtSL6v, _helper4VcRU5)
	});

	it('test for Help', async () => {
		const _HelpLYrjdPB = new Help()
		const _arrayValuecdxCsB = []
		const _arrayValueZLAlhgM = 0.7544942546635891;
		const _arrayValueUeySvlf = [_arrayValuecdxCsB, _arrayValueZLAlhgM]
		const _arrayValueWWk1ifl = null;
		const _cmdrU49VCj = [_arrayValueUeySvlf, _arrayValueWWk1ifl]
		const _returnValueYhiuyy0 = await _HelpLYrjdPB.subcommandDescription(_cmdrU49VCj)
		const _cmdLqM8CGg = {
		
	}
		const _returnValuexzX7rp = null;
		const _returnValuerC82cIn = () => { return _returnValuexzX7rp };
		const _helperjEpBktU = () => { return _returnValuerC82cIn };
		const _returnValueA7EUcKK = await _HelpLYrjdPB.longestArgumentTermLength(_cmdLqM8CGg, _helperjEpBktU)
		const _argumenth9X6Ssc = "uCcf3JOLpMDv1i3pCWeSVm";
		const _returnValuehxkdvQd = await _HelpLYrjdPB.argumentDescription(_argumenth9X6Ssc)
		const _flagshjHIoa = true;
		const _optionWT4dVGy = {
			"flags": _flagshjHIoa
	}
		const _returnValueAyYFi7t = await _HelpLYrjdPB.optionTerm(_optionWT4dVGy)
	});

	it('test for Help', async () => {
		const _HelpX6UssgE = new Help()
		const _arrayValueZMDX5m0 = null;
		const _arrayValue59JjXw = null;
		const _cmdC8IPEtn = [_arrayValueZMDX5m0, _arrayValue59JjXw]
		const _returnValuen8nCSD9 = await _HelpX6UssgE.subcommandTerm(_cmdC8IPEtn)
		const _returnValueitRiXGG = "YtFn1GKglQEVsdbmNjsfZiZi7dRB1G7fhijqU4GpxPl1t3rUt4Mj9P5odGhphfRK4M7s1Pqh9Dg5L7GxQExj";
		const _returnValueSXRi0IG = () => { return _returnValueitRiXGG };
		const _cmdqM2bMzN = () => { return _returnValueSXRi0IG };
		const _returnValueL8uuSXe = await _HelpX6UssgE.subcommandDescription(_cmdqM2bMzN)
		const _cmdIbaj3nT = null;
		const _returnValueNIOuXNo = false;
		const _arrayValueVpZzM18 = () => { return _returnValueNIOuXNo };
		const _returnValueU288S8 = undefined;
		const _arrayValuej2Whkaz = () => { return _returnValueU288S8 };
		const _returnValueX7cFAZE = [_arrayValueVpZzM18, _arrayValuej2Whkaz]
		const _visibleOptionsDDB1Dw = () => { return _returnValueX7cFAZE };
		const _returnValueLO4Gcx = "5QQX6r4ZEUcYo3uQcWrj1dQ1tLMPBiwKz30eveHQVZyUkgP1f2v9KAKyyQNFyG7MPIfoFBzzNZ";
		const _optionTermP5NU1M6 = () => { return _returnValueLO4Gcx };
		const _helper7Jj51v = {
			"visibleOptions": _visibleOptionsDDB1Dw,
		"optionTerm": _optionTermP5NU1M6
	}
		const _returnValueOpACad1 = await _HelpX6UssgE.longestOptionTermLength(_cmdIbaj3nT, _helper7Jj51v)
		const _arrayValueRfaoSVL = null;
		const _cmdWjUFov = [_arrayValueRfaoSVL]
		const _arrayValuebkag9JG = null;
		const _arrayValueSQDqyO4 = {
		
	}
		const _sortSubcommandsDe7wVdm = [_arrayValuebkag9JG, _arrayValueSQDqyO4]
		const _returnValueVMITjQB = undefined;
		const _subcommandTermU3NbUop = () => { return _returnValueVMITjQB };
		const _helpersHWkEN = {
			"sortSubcommands": _sortSubcommandsDe7wVdm,
		"subcommandTerm": _subcommandTermU3NbUop
	}
		const _returnValuemSsZjbM = await _HelpX6UssgE.formatHelp(_cmdWjUFov, _helpersHWkEN)
	});

	it('test for Help', async () => {
		const _HelpIUiJ8H = new Help()
		const _flagskGiy652 = "ATAsVOCXg3yT3iSRC7DxhI46UJpivxqJ76ArFEaOxD7i8ubKT8UFdWCno5iRDxypz7MuHThEvSFvsatH4IRNhxFeV3MSv";
		const _optionOC5IGce = {
			"flags": _flagskGiy652
	}
		const _returnValueqWCVmp = await _HelpIUiJ8H.optionTerm(_optionOC5IGce)
		const _returnValueMA0Xnx6 = null;
		const _cmdoVt89MX = () => { return _returnValueMA0Xnx6 };
		const _returnValueVNvcfV4 = await _HelpIUiJ8H.visibleOptions(_cmdoVt89MX)
	});

	it('test for Help', async () => {
		const _Helpj4eBGeU = new Help()
		const _argumentmMUKI14 = "WRdy7JyrJTliU9g2AzCMe6FofG3";
		const _returnValueelQoTe8 = await _Helpj4eBGeU.argumentDescription(_argumentmMUKI14)
		const _cmdJfWws4 = -8.422346025385421;
		const _helperU8SBCaY = []
		const _returnValuegMK7pT = await _Helpj4eBGeU.longestOptionTermLength(_cmdJfWws4, _helperU8SBCaY)
		const _returnValueyIS3Zac = 6.775768936369218;
		const _cmdNcxdo90 = () => { return _returnValueyIS3Zac };
		const _returnValuevhcf2K5 = await _Helpj4eBGeU.visibleArguments(_cmdNcxdo90)
	});

	it('test for Help', async () => {
		const _Helpf7i4hgk = new Help()
		const _arrayValueOkpIkX2 = false;
		const _returnValueBGmskXE = [_arrayValueOkpIkX2]
		const _descriptiongT1W0r = () => { return _returnValueBGmskXE };
		const _cmdzt8mpo5 = {
			"description": _descriptiongT1W0r
	}
		const _returnValueguk4vl8 = await _Helpf7i4hgk.subcommandDescription(_cmdzt8mpo5)
		const _cmdtqX3dmc = null;
		const _helperTAFlTQT = new Help()
		const _cmdIm9KrF = undefined;
		const _returnValueEbvBERO = {
		
	}
		const _helperylnOp9Y = () => { return _returnValueEbvBERO };
		const _returnValueEt7k28y = await _helperTAFlTQT.formatHelp(_cmdIm9KrF, _helperylnOp9Y)
		const _arrayValuefRI8hpC = undefined;
		const _arrayValueqBD0qDA = undefined;
		const _returnValuewFpdadY = [_arrayValuefRI8hpC, _arrayValueqBD0qDA]
		const _flagsrRbjX7P = () => { return _returnValuewFpdadY };
		const _descriptionDYa8tnk = 5.240524397789596;
		const _optionIXvoCWK = new Option(_flagsrRbjX7P, _descriptionDYa8tnk)
		const _mandatoryu6wwkzY = true;
		const _returnValueoK7nifG = await _optionIXvoCWK.makeOptionMandatory(_mandatoryu6wwkzY)
		const _returnValueWuQQfPr = await _helperTAFlTQT.optionDescription(_optionIXvoCWK)
		const __argsWkGIoVX = {
		
	}
		const __namemXc4M8I = -5.804828725680137;
		const __aliasesegQKlpq = {
		
	}
		const _optionsK4Us1Na = {
		
	}
		const _cmdZlLqI4M = {
			"_args": __argsWkGIoVX,
		"_name": __namemXc4M8I,
		"_aliases": __aliasesegQKlpq,
		"options": _optionsK4Us1Na
	}
		const _returnValuev1mUav = await _helperTAFlTQT.subcommandTerm(_cmdZlLqI4M)
		const _cmdmJs5Sju = "6m9FqiwaJ607RVOzChdm3DkRSWzKfbdbiuoKVB1QxRMRnzRVDO8YgEP91uUS5QjeYXFsavKgySpgy2";
		const _helperyZfps0y = new Help()
		const _argChoicesOUOkZya = undefined;
		const _returnValueuejMJ8Y = undefined;
		const _negatelxsN0HF = () => { return _returnValueuejMJ8Y };
		const _defaultValueKFs00rL = undefined;
		const _arrayValueKqnJxuU = "IkLN96SLEI7RF5dwsbFUAbDNoAu";
		const _returnValueQqpdqXA = [_arrayValueKqnJxuU]
		const _defaultValueDescriptionT2D1ivj = () => { return _returnValueQqpdqXA };
		const _envVarNXw7oSj = undefined;
		const _descriptionWffbdtp = "LJFxv";
		const _option9Iay1W = {
			"argChoices": _argChoicesOUOkZya,
		"negate": _negatelxsN0HF,
		"defaultValue": _defaultValueKFs00rL,
		"defaultValueDescription": _defaultValueDescriptionT2D1ivj,
		"envVar": _envVarNXw7oSj,
		"description": _descriptionWffbdtp
	}
		const _returnValueeETtLXv = await _helperyZfps0y.optionDescription(_option9Iay1W)
		const _arrayValueiYhZh1V = {
		
	}
		const _cmdHNN5qhi = [_arrayValueiYhZh1V]
		const _returnValueqWTTEbZ = await _helperyZfps0y.visibleCommands(_cmdHNN5qhi)
		const _cmdqBrzg1 = null;
		const _returnValueDm5hzpX = undefined;
		const _longestOptionTermLengthvKNc2Bh = () => { return _returnValueDm5hzpX };
		const _returnValuegQdZuGa = "kSrvvES1I3iLoT1JKlB4UhYJvPk8ixhTbcsOIrPw1bsXyl81w6D7qhkPCMbn0N3SPPDqhmUydcnTiaZgOU6R3K4hlcXcfuT";
		const _longestSubcommandTermLengthzuUmzhi = () => { return _returnValuegQdZuGa };
		const _returnValueyoU41R = null;
		const _longestArgumentTermLengthdZkKtQY = () => { return _returnValueyoU41R };
		const _helperRJd0t8v = {
			"longestOptionTermLength": _longestOptionTermLengthvKNc2Bh,
		"longestSubcommandTermLength": _longestSubcommandTermLengthzuUmzhi,
		"longestArgumentTermLength": _longestArgumentTermLengthdZkKtQY
	}
		const _returnValueasiHCMl = await _helperyZfps0y.padWidth(_cmdqBrzg1, _helperRJd0t8v)
		const _returnValueo2v3Uoq = await _helperTAFlTQT.longestArgumentTermLength(_cmdmJs5Sju, _helperyZfps0y)
		const _returnValueiEXvUDb = await _Helpf7i4hgk.longestOptionTermLength(_cmdtqX3dmc, _helperTAFlTQT)
	});

	it('test for Help', async () => {
		const _Helps2gPWUj = new Help()
		const _nameGlKebMb = "di";
		const _cmdxAFoUoX = new Command(_nameGlKebMb)
		const _returnValueG26g9zz = await _cmdxAFoUoX.opts()
		const _returnValuez6ZqsX = await _Helps2gPWUj.visibleArguments(_cmdxAFoUoX)
		const _returnValueB242V8p = true;
		const _cmdkZMDcnX = () => { return _returnValueB242V8p };
		const _helperYdIFfFR = "eAeDwFsl7Mr1UHydYGVnV7kr7n7OAgeXOB";
		const _returnValuecElzgG3 = await _Helps2gPWUj.longestArgumentTermLength(_cmdkZMDcnX, _helperYdIFfFR)
		const _arrayValuehaqgllW = null;
		const _arrayValueC0qUbsp = true;
		const _arrayValueZgiSWs5 = "pMADXsCcOsA3Y8aQ";
		const _arrayValueSsk3jyg = [_arrayValueZgiSWs5]
		const _arrayValueWHX4zW1 = []
		const _arrayValueUHeIEDG = [_arrayValuehaqgllW, _arrayValueC0qUbsp, _arrayValueSsk3jyg, _arrayValueWHX4zW1]
		const _arrayValueBELW9n = []
		const _arrayValuennO5Tpw = undefined;
		const _cmddhvoGDr = [_arrayValueUHeIEDG, _arrayValueBELW9n, _arrayValuennO5Tpw]
		const _helperPDbqdHL = "oDlHud73G2GKF1a7ulpvfEw79eWayenKtYkDTaqdpHIO9Quzc1BB2d8uoo5Ky1c3QobyqcjS7RMsEJGUPfteqIDD";
		const _returnValueyheUpcD = await _Helps2gPWUj.longestArgumentTermLength(_cmddhvoGDr, _helperPDbqdHL)
	});

	it('test for Help', async () => {
		const _HelpsuCcoo = new Help()
		const _argChoicesaEaqeN9 = {
		
	}
		const _negateRFZtBY2 = true;
		const _defaultValueaVfyKqM = undefined;
		const _arrayValueRqw9sRg = []
		const _arrayValueAC02L4W = true;
		const _defaultValueDescriptioniofsneU = [_arrayValueRqw9sRg, _arrayValueAC02L4W]
		const _envVarPshIYmh = "U7kUFEoU6gcyxhN0pF9ZOZJuY4XpZkBeeze7z9RH2kyJN65sn9acv58vJO7TNQAauDGItXKfK6ra54r3H78tHcevNG";
		const _arrayValuels37mI1 = null;
		const _arrayValuetZsAUXb = [_arrayValuels37mI1]
		const _arrayValuepaU8vcR = true;
		const _descriptionO5EUL9 = [_arrayValuetZsAUXb, _arrayValuepaU8vcR]
		const _optionLVpHuig = {
			"argChoices": _argChoicesaEaqeN9,
		"negate": _negateRFZtBY2,
		"defaultValue": _defaultValueaVfyKqM,
		"defaultValueDescription": _defaultValueDescriptioniofsneU,
		"envVar": _envVarPshIYmh,
		"description": _descriptionO5EUL9
	}
		const _returnValuenaCkA78 = await _HelpsuCcoo.optionDescription(_optionLVpHuig)
		const _arrayValueuQLFyg = -3.2696875880539302;
		const _arrayValuezeTwNjr = false;
		const _arrayValueUK3rFYl = false;
		const _arrayValueIc8tTpu = [_arrayValueuQLFyg, _arrayValuezeTwNjr, _arrayValueUK3rFYl]
		const _arrayValueviRNx4d = false;
		const _arrayValuem3JwtZM = null;
		const _arrayValueIH5IZli = null;
		const _arrayValueeLozsfg = {
		
	}
		const _arrayValueqTPkqdw = [_arrayValueeLozsfg]
		const _cmdRujcz8x = [_arrayValueIc8tTpu, _arrayValueviRNx4d, _arrayValuem3JwtZM, _arrayValueIH5IZli, _arrayValueqTPkqdw]
		const _returnValueTSlgmzE = await _HelpsuCcoo.visibleCommands(_cmdRujcz8x)
		const _arrayValueMtg8ZmQ = "tn2rwpnJYDvNv8SmjLI4hoBbF0sC9GYidsNawCxi";
		const _arrayValueR9vwOS = undefined;
		const _arrayValueZsKZ3t6 = false;
		const _arrayValueETkaIwB = true;
		const _arrayValueh1WNM0L = "TKDKht2Iz7GjSbnPguTzPq1u5NaAMQiIr2ld2yn5sDbOTbIBG2E";
		const _returnValuexzQe4YZ = [_arrayValueR9vwOS, _arrayValueZsKZ3t6, _arrayValueETkaIwB, _arrayValueh1WNM0L]
		const _arrayValuebmZheyU = () => { return _returnValuexzQe4YZ };
		const _returnValueIXmP9pL = [_arrayValueMtg8ZmQ, _arrayValuebmZheyU]
		const _sliceYcWlX4Q = () => { return _returnValueIXmP9pL };
		const _nameVA57sFQ = {
			"slice": _sliceYcWlX4Q
	}
		const _descriptionSSfnRfu = true;
		const _argumentWUhXTNk = new Argument(_nameVA57sFQ, _descriptionSSfnRfu)
		const _returnValueM2gaRZU = await _argumentWUhXTNk.argOptional()
		const _returnValuebAtpRmt = await _argumentWUhXTNk.name()
		const _returnValuemdOpEAg = await _argumentWUhXTNk.argRequired()
		const _returnValueRJf8LHr = await _HelpsuCcoo.argumentTerm(_argumentWUhXTNk)
	});

	it('test for Help', async () => {
		const _HelpXZM9xUt = new Help()
		const _returnValuelZe2fiD = undefined;
		const _optionolwa3ch = () => { return _returnValuelZe2fiD };
		const _returnValueBqc0jyF = await _HelpXZM9xUt.optionDescription(_optionolwa3ch)
		const _returnValueElApI2w = {
		
	}
		const _cmdL1byliL = () => { return _returnValueElApI2w };
		const _helperGng5Uk = new Help()
		const _cmdMrs9gxP = null;
		const _returnValueLbrpMZO = {
		
	}
		const _visibleArgumentsY4y615Q = () => { return _returnValueLbrpMZO };
		const _returnValueGekHSZn = -3.907931656117908;
		const _argumentTermddtJ5Wf = () => { return _returnValueGekHSZn };
		const _helperiMmoQtW = {
			"visibleArguments": _visibleArgumentsY4y615Q,
		"argumentTerm": _argumentTermddtJ5Wf
	}
		const _returnValueG82fnDX = await _helperGng5Uk.longestArgumentTermLength(_cmdMrs9gxP, _helperiMmoQtW)
		const _cmdaG25SRV = "Cuq5JKtu81DUKnfw2KdlrHWIpFwL9TfIEyWtUGEweKdWwe";
		const _returnValuevDFJa9n = []
		const _returnValuemLIBnYk = () => { return _returnValuevDFJa9n };
		const _helperMrQ8XN = () => { return _returnValuemLIBnYk };
		const _returnValueOaPSsOW = await _helperGng5Uk.longestSubcommandTermLength(_cmdaG25SRV, _helperMrQ8XN)
		const _cmdnSBrF15 = 0.8058068051958696;
		const _helperH1Qp0Ea = "Zuz";
		const _returnValueHX48myu = await _helperGng5Uk.formatHelp(_cmdnSBrF15, _helperH1Qp0Ea)
		const _returnValueALjzbGi = await _HelpXZM9xUt.formatHelp(_cmdL1byliL, _helperGng5Uk)
		const _argChoicesov8MEP = {
		
	}
		const _defaultValueHLA86Ta = undefined;
		const _defaultValueDescriptionnypqNwL = null;
		const _arrayValueghMosnf = "p3CPyi1uDa2y3UZ0LHo3Zug2yFwbZaS4uaSnpgdQBS6powt59AVc4BZc71nGKMedFYds3q9PbMak9yIv1WxTS2SC";
		const _arrayValueJL9Pro = 0.9743324040235848;
		const _arrayValueC2ic0i4 = "d";
		const _arrayValueSahnMV9 = undefined;
		const _descriptionElLU2PA = [_arrayValueghMosnf, _arrayValueJL9Pro, _arrayValueC2ic0i4, _arrayValueSahnMV9]
		const _argumentdSkkSlF = {
			"argChoices": _argChoicesov8MEP,
		"defaultValue": _defaultValueHLA86Ta,
		"defaultValueDescription": _defaultValueDescriptionnypqNwL,
		"description": _descriptionElLU2PA
	}
		const _returnValueolJY4W3 = await _HelpXZM9xUt.argumentDescription(_argumentdSkkSlF)
		const _nameEm6mZnR = false;
		const _argumentSA73OOf = new Command(_nameEm6mZnR)
		const _returnValue6NqOCZ = undefined;
		const _keyL4eBIAl = () => { return _returnValue6NqOCZ };
		const _returnValueLacXC8w = await _argumentSA73OOf.getOptionValue(_keyL4eBIAl)
		const _returnValueZ77xXVd = await _argumentSA73OOf._checkNumberOfArguments()
		const _returnValueJewSw15 = {
		
	}
		const _returnValuexKBBPvT = () => { return _returnValueJewSw15 };
		const _nameaSDlLD8 = () => { return _returnValuexKBBPvT };
		const _descriptionujXlwlf = "";
		const _returnValueI6fKKAe = await _argumentSA73OOf.createArgument(_nameaSDlLD8, _descriptionujXlwlf)
		const _errorQCYRORM = undefined;
		const _commandPTLxwor = -1.0257941342751806;
		const _contextOptionsWm4WoQF = {
			"error": _errorQCYRORM,
		"command": _commandPTLxwor
	}
		const _returnValuemk9AO1 = await _argumentSA73OOf._getHelpContext(_contextOptionsWm4WoQF)
		const _keyR3ZAAoQ = "msFYyzzq7UweMCdnMlehkqp8dazUGCkl1z41dHlJZRcPm2tF2ExO5fbBViYwuckX8od6I";
		const _valueImma46k = "gmUxxCfrOLVB0fArASf";
		const _sourceYDckXXa = null;
		const _returnValueYOxwzMl = await _argumentSA73OOf.setOptionValueWithSource(_keyR3ZAAoQ, _valueImma46k, _sourceYDckXXa)
		const _returnValueCLJGUV9 = await _HelpXZM9xUt.argumentTerm(_argumentSA73OOf)
	});

	it('test for Help', async () => {
		const _HelpZeVVkS = new Help()
		const _flagsMfxAnlA = "Ubf49eyMuG8hUhsNstlU";
		const _arrayValuek7spNwp = null;
		const _arrayValueat2uJq = "TGjoB1tPleZMekDT0ocfcjmBM9T4HoUjiZeL25GuerEo7WUwIET4dLU";
		const _arrayValueMesmGFj = {
		
	}
		const _arrayValueQkWX4G8 = [_arrayValueMesmGFj]
		const _arrayValuec3DWTYd = [_arrayValuek7spNwp, _arrayValueat2uJq, _arrayValueQkWX4G8]
		const _arrayValueclRc5xq = {
		
	}
		const _arrayValueSYjGGfG = "DemCXnvz8w3jMGYUPPcKJ6jUqzURYhgq3i28akBONzztFDFmTEDKtU";
		const _arrayValuenZWL3Vg = {
		
	}
		const _descriptionaV242Ox = [_arrayValuec3DWTYd, _arrayValueclRc5xq, _arrayValueSYjGGfG, _arrayValuenZWL3Vg]
		const _option6OQGWQ = new Option(_flagsMfxAnlA, _descriptionaV242Ox)
		const _returnValueWrOwT12 = await _option6OQGWQ.name()
		const _returnValuec2jMsn7 = await _option6OQGWQ.name()
		const _returnValuedJ95Yw = await _HelpZeVVkS.optionTerm(_option6OQGWQ)
		const _returnValueSiXwutj = null;
		const _flagsozkZ5G = () => { return _returnValueSiXwutj };
		const _optionlYbIOWW = {
			"flags": _flagsozkZ5G
	}
		const _returnValuecOllGPx = await _HelpZeVVkS.optionTerm(_optionlYbIOWW)
		const _strcwZXxW = "4lNfqulilNUcbcPCghmm4Odh4g81zBRrkHTAqTWuEX1THq4TfI1qbUvUtQ2YLNbXFHqPAuFKQMo";
		const _widthvsLqjq6 = 9.469936621721867;
		const _indentePqBb3j = 0.3744590645482031;
		const _minColumnWidthVKw2wS4 = -7.674560610529442;
		const _returnValuerbOFY0E = await _HelpZeVVkS.wrap(_strcwZXxW, _widthvsLqjq6, _indentePqBb3j, _minColumnWidthVKw2wS4)
	});

	it('test for Help', async () => {
		const _HelpQWlz1b = new Help()
		const _flagskouFGMK = "6n2EHz8k2LIv2jsI2meTv8KI8aiSHFvKI6VG4ysqNXvu6EXdqiifOzz9TSwXrf";
		const _descriptionaiNxH5l = null;
		const _cmdBpPT6Qn = new Option(_flagskouFGMK, _descriptionaiNxH5l)
		const _returnValuepWCxlU2 = await _cmdBpPT6Qn.name()
		const _nameFecpMAa = undefined;
		const _returnValuePFm3wF7 = await _cmdBpPT6Qn.env(_nameFecpMAa)
		const _fnwWKb3IH = undefined;
		const _returnValuevwwtQxl = await _cmdBpPT6Qn.argParser(_fnwWKb3IH)
		const _returnValueYFz8pps = await _HelpQWlz1b.commandDescription(_cmdBpPT6Qn)
		const _returnValueViysveJ = undefined;
		const _nameOepXwRi = () => { return _returnValueViysveJ };
		const _descriptiondOlrV16 = null;
		const _cmdc20yjz7 = new Argument(_nameOepXwRi, _descriptiondOlrV16)
		const _returnValueUQrjc9Y = await _cmdc20yjz7.name()
		const _returnValueWGNCit3 = await _cmdc20yjz7.name()
		const _valueuD0HhIj = null;
		const _descriptiongSRd8Ut = {
		
	}
		const _returnValueumQpDwx = await _cmdc20yjz7.default(_valueuD0HhIj, _descriptiongSRd8Ut)
		const _returnValuemFVOxb3 = await _cmdc20yjz7.argRequired()
		const _returnValueExJrCoy = await _HelpQWlz1b.commandDescription(_cmdc20yjz7)
		const _returnValueQdKPxY = null;
		const _includesVyjBqbl = () => { return _returnValueQdKPxY };
		const _flagsUQ9iiN0 = {
			"includes": _includesVyjBqbl
	}
		const _descriptioncoMXwW9 = null;
		const _cmdXCsru6W = new Option(_flagsUQ9iiN0, _descriptioncoMXwW9)
		const _valuekmDyxJu = "zjDPbPR8pYj1ZVE7abt";
		const _returnValueRZDNXWe = "GkYAKUDJF69Oq9WmZaUGvusB6rTg";
		const _previousbrdaL2A = () => { return _returnValueRZDNXWe };
		const _returnValuebVTusOy = await _cmdXCsru6W._concatValue(_valuekmDyxJu, _previousbrdaL2A)
		const _returnValueafU7CqC = await _cmdXCsru6W.attributeName()
		const _valuewIu0An9 = "RSi665O3clBU2Jg93FF6jYuvAh1tH";
		const _returnValueUhaUJ9M = false;
		const _concatHZfJcUi = () => { return _returnValueUhaUJ9M };
		const _previousUBCZ20D = {
			"concat": _concatHZfJcUi
	}
		const _returnValueTcnsEf6 = await _cmdXCsru6W._concatValue(_valuewIu0An9, _previousUBCZ20D)
		const _mandatorySbysJZT = false;
		const _returnValueEZjoW9X = await _cmdXCsru6W.makeOptionMandatory(_mandatorySbysJZT)
		const _returnValueJeiIbT = await _HelpQWlz1b.commandDescription(_cmdXCsru6W)
	});

	it('test for Help', async () => {
		const _HelpsEHPYpv = new Help()
		const _argChoicesJuBHR9m = {
		
	}
		const _negateVsuOKni = false;
		const _defaultValueYVR32LD = undefined;
		const _defaultValueDescriptionQYRODpJ = true;
		const _envVarCPXvnrN = undefined;
		const _descriptionwwuS97y = true;
		const _optionXfxfxd0 = {
			"argChoices": _argChoicesJuBHR9m,
		"negate": _negateVsuOKni,
		"defaultValue": _defaultValueYVR32LD,
		"defaultValueDescription": _defaultValueDescriptionQYRODpJ,
		"envVar": _envVarCPXvnrN,
		"description": _descriptionwwuS97y
	}
		const _returnValueZYfK26x = await _HelpsEHPYpv.optionDescription(_optionXfxfxd0)
		const _arrayValuemlCzuM8 = 1.2419795300414407;
		const _nameZhsfwrZ = [_arrayValuemlCzuM8]
		const _cmdTpVFbps = new Command(_nameZhsfwrZ)
		const _flagsnlDGSx9 = -7.019466328775535;
		const _arrayValuevw92Qlw = true;
		const _descriptionTZYxvSj = [_arrayValuevw92Qlw]
		const _fncHMWTdj = "QqiRadwNAUsF97jlvLBjwEilUYFjkfPytu";
		const _defaultValueVPBhK6O = undefined;
		const _returnValuefVDi3wA = await _cmdTpVFbps.requiredOption(_flagsnlDGSx9, _descriptionTZYxvSj, _fncHMWTdj, _defaultValueVPBhK6O)
		const _flagsXnsAmkw = 7.655113021678854;
		const _returnValuemkT1k9 = true;
		const _descriptionenZJXRy = () => { return _returnValuemkT1k9 };
		const _arrayValuetP983PC = -9.265240999419275;
		const _fnHF0ZSZe = [_arrayValuetP983PC]
		const _defaultValueyqVf1HH = 9.046714133773644;
		const _returnValuegoLsU6x = await _cmdTpVFbps.requiredOption(_flagsXnsAmkw, _descriptionenZJXRy, _fnHF0ZSZe, _defaultValueyqVf1HH)
		const _exitCodeQtJ19S0 = 2.88742325191407;
		const _arrayValued0zBBnI = undefined;
		const _codebWnexwS = [_arrayValued0zBBnI]
		const _message8839jh = "vvYDSSvC83v3vrel94Esxrf9Qomr6Vh9vCK3p5rXiJ";
		const _returnValuelLEghoP = await _cmdTpVFbps._exit(_exitCodeQtJ19S0, _codebWnexwS, _message8839jh)
		const _arrayValueI3QCcbf = -1.0112093375240452;
		const _arrayValueOfdsLMd = null;
		const _returnValueaNBNQjZ = false;
		const _arrayValuebB5LejS = () => { return _returnValueaNBNQjZ };
		const _keyd2qiiia = [_arrayValueI3QCcbf, _arrayValueOfdsLMd, _arrayValuebB5LejS]
		const _valueaSN5Cvq = false;
		const _arrayValuevg6c2f = 2.257604985295462;
		const _arrayValueHZ9TfUG = {
		
	}
		const _sourceDbejpKJ = [_arrayValuevg6c2f, _arrayValueHZ9TfUG]
		const _returnValueDELQlHD = await _cmdTpVFbps.setOptionValueWithSource(_keyd2qiiia, _valueaSN5Cvq, _sourceDbejpKJ)
		const _returnValuefGO0Dm1 = await _HelpsEHPYpv.commandUsage(_cmdTpVFbps)
		const _arrayValuePjlwR8Z = -9.408955296429856;
		const _arrayValueTEVoUGE = undefined;
		const _arrayValuenapR7HN = false;
		const _nameWQEwBe = [_arrayValuePjlwR8Z, _arrayValueTEVoUGE, _arrayValuenapR7HN]
		const _cmdzpLpH3B = new Command(_nameWQEwBe)
		const _keycQlg3p0 = null;
		const _valueQZ7aWD = null;
		const _arrayValuecORYsXr = []
		const _sourceZ3FnSCa = [_arrayValuecORYsXr]
		const _returnValuebIL4gjy = await _cmdzpLpH3B.setOptionValueWithSource(_keycQlg3p0, _valueQZ7aWD, _sourceZ3FnSCa)
		const _stro3b4rt3 = undefined;
		const _flagsaqq9cSG = {
		
	}
		const _descriptionV0ygjLH = {
		
	}
		const _returnValueuax2Nau = await _cmdzpLpH3B.version(_stro3b4rt3, _flagsaqq9cSG, _descriptionV0ygjLH)
		const _arrayValuek1R0VSN = "gcA7Ng8r5fLgJasuCJkHjhEeXomjFuGLhWNfsVbnKle2YggKersAxSS3kl7fgF4x8CvO9BSAOJ9E427";
		const _arrayValueu3pnG3K = undefined;
		const _returnValuen6LnIOi = [_arrayValuek1R0VSN, _arrayValueu3pnG3K]
		const _contextOptionsmQ1vi3y = () => { return _returnValuen6LnIOi };
		const _returnValuezJEPNh2 = await _cmdzpLpH3B.outputHelp(_contextOptionsmQ1vi3y)
		const _allowUnknownHBqHb2n = true;
		const _returnValueYajJAxi = await _cmdzpLpH3B.allowUnknownOption(_allowUnknownHBqHb2n)
		const _returnValuej90txLy = await _HelpsEHPYpv.subcommandTerm(_cmdzpLpH3B)
		const _arrayValueW4vGANl = undefined;
		const _arrayValueqCZQTtB = true;
		const _arrayValuef3Cmdyx = 5.782844897652296;
		const _returnValueUE7jxvk = [_arrayValueqCZQTtB, _arrayValuef3Cmdyx]
		const _arrayValueYEfEgIY = () => { return _returnValueUE7jxvk };
		const _arrayValueQfW0vKo = -9.45415891230657;
		const _arrayValueXjAYmjr = -9.14039128406456;
		const _argumentHd4smj1 = [_arrayValueW4vGANl, _arrayValueYEfEgIY, _arrayValueQfW0vKo, _arrayValueXjAYmjr]
		const _returnValuekXLWcij = await _HelpsEHPYpv.argumentDescription(_argumentHd4smj1)
	});

	it('test for Help', async () => {
		const _HelpV29I9a9 = new Help()
		const _arrayValue6yciPi = {
		
	}
		const _namex43tKRM = [_arrayValue6yciPi]
		const _cmdjYaoN8X = new Command(_namex43tKRM)
		const _aliaseLzuZIM = {
		
	}
		const _returnValueGHhaKgW = await _cmdjYaoN8X.alias(_aliaseLzuZIM)
		const _returnValueouIMgXh = await _HelpV29I9a9.commandUsage(_cmdjYaoN8X)
		const _cmdX9XGjBx = 3.1446941825878127;
		const _returnValueihyeU8N = await _HelpV29I9a9.subcommandDescription(_cmdX9XGjBx)
	});

	it('test for Help', async () => {
		const _HelpGrPm7jG = new Help()
		const __namerpH2MU = -9.990525885141079;
		const __aliasesy5WKpJ = {
		
	}
		const _parentd09jJb = {
		
	}
		const _returnValuekxAzOp3 = "vzhwSrvFYAsJ11GFP2D3n1KoVQAG1bajV3lARtHiPiyT5rCIbkNWnSRDnh7bxoqwgDh1nGXRlmdDwTfK";
		const _returnValueGeI7Tx9 = () => { return _returnValuekxAzOp3 };
		const _usageynr7zW0 = () => { return _returnValueGeI7Tx9 };
		const _cmdjqmLM8d = {
			"_name": __namerpH2MU,
		"_aliases": __aliasesy5WKpJ,
		"parent": _parentd09jJb,
		"usage": _usageynr7zW0
	}
		const _returnValueeVL3jL = await _HelpGrPm7jG.commandUsage(_cmdjqmLM8d)
		const _cmdgnSEVt = "W2I9k80bKNx1u8jbMxOqBWLywadps4Tw0SkiglhBSgBBsxV0yexTebkP2e6vDNdOvxf3voUVkJea2";
		const _returnValueiKTjx14 = await _HelpGrPm7jG.visibleOptions(_cmdgnSEVt)
		const _cmdGpBDD2 = undefined;
		const _returnValuebXuIln1 = await _HelpGrPm7jG.subcommandDescription(_cmdGpBDD2)
		const _arrayValueoxzXfL = false;
		const _cmdQNbdyk = [_arrayValueoxzXfL]
		const _returnValuey5SF6hA = await _HelpGrPm7jG.subcommandTerm(_cmdQNbdyk)
	});

	it('test for Help', async () => {
		const _HelpynJcJCP = new Help()
		const _argChoiceshScMHt = {
		
	}
		const _defaultValuea1vCfhN = undefined;
		const _defaultValueDescription3MGxuR = -2.905932494372397;
		const _descriptionJya2qSZ = undefined;
		const _argumentf25ZLTD = {
			"argChoices": _argChoiceshScMHt,
		"defaultValue": _defaultValuea1vCfhN,
		"defaultValueDescription": _defaultValueDescription3MGxuR,
		"description": _descriptionJya2qSZ
	}
		const _returnValueZg7okFA = await _HelpynJcJCP.argumentDescription(_argumentf25ZLTD)
		const _cmdS1cffeD = true;
		const _helperKXSQ7K5 = -4.448682447464252;
		const _returnValuesCYaOpZ = await _HelpynJcJCP.formatHelp(_cmdS1cffeD, _helperKXSQ7K5)
		const _namefm8zOP2 = null;
		const _optionqdiHRSs = new Command(_namefm8zOP2)
		const _flagsgKHQ5yV = "0rjJuEnqx7aDhfliGT9AJXaKLhVFdyCrgqsim2KUOFb8gQRQRGn05lQjZb2FzvGZcleqobXOA4z";
		const _optionKa7s8bl = {
			"flags": _flagsgKHQ5yV
	}
		const _returnValueBlGqmGq = await _optionqdiHRSs.missingMandatoryOptionValue(_optionKa7s8bl)
		const _storeAsPropertieshiRKxu2 = true;
		const _returnValuenZ4XbyF = await _optionqdiHRSs.storeOptionsAsProperties(_storeAsPropertieshiRKxu2)
		const _returnValueRUtVd21 = true;
		const _arrayValueMMeRyM9 = () => { return _returnValueRUtVd21 };
		const _arrayValuePi2figF = null;
		const _arrayValue15Hkjt = "cP5KUyBqjziKbya2WjdnKqI9WnaakqRnWBJQd0IgqESJi4lC2nSCy7EHv8k3yybXIzyr92u9iaurOF4cIGgyDsOoHErF1esKSJL";
		const _aliasesZDtGTwE = [_arrayValueMMeRyM9, _arrayValuePi2figF, _arrayValue15Hkjt]
		const _returnValueF3IEC25 = await _optionqdiHRSs.aliases(_aliasesZDtGTwE)
		const _fnw4g8LrH = {
		
	}
		const _returnValueqbUVTPq = await _optionqdiHRSs.exitOverride(_fnw4g8LrH)
		const _returnValueVJh9rKW = await _HelpynJcJCP.optionDescription(_optionqdiHRSs)
		const _cmdaCWqSIa = "xGtghLDBGbz9WjnPIMFqViM3fbux6XAy";
		const _returnValueVYjqKNd = await _HelpynJcJCP.visibleArguments(_cmdaCWqSIa)
	});

	it('test for Help', async () => {
		const _HelphBAU9eQ = new Help()
		const _nameKAeGFT = "1rY";
		const _cmdOF93F23 = new Command(_nameKAeGFT)
		const _displayHelpVIsrita = false;
		const _returnValueygvJVr = await _cmdOF93F23.showHelpAfterError(_displayHelpVIsrita)
		const _nameivroSUQ = "9GbQtnOyTmiXD0t21IVcOWiVeFyaK6quY1R4m7G8M2ypQIRVTD24J9IBKA";
		const _arrayValuecvaNyQO = null;
		const _arrayValueFl9kw6Z = false;
		const _arrayValueuUabykk = [_arrayValuecvaNyQO, _arrayValueFl9kw6Z]
		const _returnValuel7JGzxc = null;
		const _arrayValuehqUH9YP = () => { return _returnValuel7JGzxc };
		const _arrayValueEFK8PIu = false;
		const _descriptionjctIr8q = [_arrayValueuUabykk, _arrayValuehqUH9YP, _arrayValueEFK8PIu]
		const _returnValueiu4gguX = await _cmdOF93F23.createArgument(_nameivroSUQ, _descriptionjctIr8q)
		const _returnValuej9sXf3A = await _HelphBAU9eQ.visibleOptions(_cmdOF93F23)
		const _arrayValuebwtHczr = undefined;
		const _arrayValueSB1x9eY = "VY4sDc2rGuRFaLgwFgdR5Yfnh5qj6JtU4qL5fApXBpl2a7D5rSvsCfuLb0V5Ffl3kQrDJuHXXXOeyZqu3UGTNIzUzhYtu";
		const _cmdEMTME1h = [_arrayValuebwtHczr, _arrayValueSB1x9eY]
		const _helperNYgFf8T = []
		const _returnValueRk8eyAT = await _HelphBAU9eQ.longestOptionTermLength(_cmdEMTME1h, _helperNYgFf8T)
		const _cmdVeLz0i = 0.05828511532203606;
		const _helperCxaFNVh = true;
		const _returnValuePgXp4fB = await _HelphBAU9eQ.longestArgumentTermLength(_cmdVeLz0i, _helperCxaFNVh)
	});

	it('test for Help', async () => {
		const _HelpUANMaYv = new Help()
		const _strVPCR5Kd = "5tNAmtFsonfUNt28WfNyE1JEmmf";
		const _widthfxQXWeR = -2.5437324201012226;
		const _indentschBuou = 5.048155182005411;
		const _minColumnWidthAO5t3A = -0.11426310448774757;
		const _returnValuexwJgaf6 = await _HelpUANMaYv.wrap(_strVPCR5Kd, _widthfxQXWeR, _indentschBuou, _minColumnWidthAO5t3A)
		const _cmdZw0DOJS = true;
		const _returnValueXsvxeUO = await _HelpUANMaYv.subcommandTerm(_cmdZw0DOJS)
		const _arrayValueOdczdOl = {
		
	}
		const _arrayValueyZZMD6g = undefined;
		const _optionapP2u12 = [_arrayValueOdczdOl, _arrayValueyZZMD6g]
		const _returnValuezVIQR3K = await _HelpUANMaYv.optionTerm(_optionapP2u12)
	});

	it('test for Help', async () => {
		const _HelplXPxGTF = new Help()
		const __argsDescriptionMkwFYy3 = {
		
	}
		const __argsRrzU5ML = {
		
	}
		const _cmdcJhkGV3 = {
			"_argsDescription": __argsDescriptionMkwFYy3,
		"_args": __argsRrzU5ML
	}
		const _returnValueZtRK0b = await _HelplXPxGTF.visibleArguments(_cmdcJhkGV3)
	});

	it('test for Help', async () => {
		const _HelpzRe4N72 = new Help()
		const _returnValuedYYNoOC = "adbercUSvKPxIK6BnWULirZJ9asRvuOH1Fmng";
		const _returnValuezVGd6gO = () => { return _returnValuedYYNoOC };
		const _returnValuep7CMBr = () => { return _returnValuezVGd6gO };
		const _matchN5O0aAD = () => { return _returnValuep7CMBr };
		const _returnValuezxglyLF = undefined;
		const _substrmGmHbKm = () => { return _returnValuezxglyLF };
		const _strEJwlyR1 = {
			"match": _matchN5O0aAD,
		"substr": _substrmGmHbKm
	}
		const _widthiXHvcx0 = 0.4021654251737985;
		const _indentvfayA63 = -4.819468364550334;
		const _minColumnWidthC6shzcM = 1.9960477136901495;
		const _returnValue1x8YcY = await _HelpzRe4N72.wrap(_strEJwlyR1, _widthiXHvcx0, _indentvfayA63, _minColumnWidthC6shzcM)
		const _arrayValuek8znYla = undefined;
		const _argumentRc2p4r = [_arrayValuek8znYla]
		const _returnValuebRltbfr = await _HelpzRe4N72.argumentDescription(_argumentRc2p4r)
		const _flagsFliZhW0 = "HB6X1RAsxNDbKnTp3statlxPRKGXzyIE04OGpuGWKuwRTANIFHf4mIUVjM6Nb0J3wOATIq9";
		const _descriptionPYjZ7jv = false;
		const _cmdtkpmS2n = new Option(_flagsFliZhW0, _descriptionPYjZ7jv)
		const _hideM3GYJRF = false;
		const _returnValuecws4NL0 = await _cmdtkpmS2n.hideHelp(_hideM3GYJRF)
		const _hidembRL1Y5 = true;
		const _returnValueBNS7HMC = await _cmdtkpmS2n.hideHelp(_hidembRL1Y5)
		const _returnValueRzrQWm = await _HelpzRe4N72.subcommandDescription(_cmdtkpmS2n)
	});

	it('test for Help', async () => {
		const _HelprCR8LC1 = new Help()
		const _namevDBqMEw = "uPkoLOCufBGKCN";
		const _descriptionSJnLkEU = null;
		const _argumentiLcYQTF = new Argument(_namevDBqMEw, _descriptionSJnLkEU)
		const _valueNinFB4 = false;
		const _previousg4jvAL = null;
		const _returnValuejZiOzah = await _argumentiLcYQTF._concatValue(_valueNinFB4, _previousg4jvAL)
		const _values0XeiDI = undefined;
		const _returnValueJDrrKYq = await _argumentiLcYQTF.choices(_values0XeiDI)
		const _arrayValueSydwUny = null;
		const _returnValueDPow5mU = [_arrayValueSydwUny]
		const _valuebVykIP8 = () => { return _returnValueDPow5mU };
		const _descriptionMCUGNN = {
		
	}
		const _returnValueh0r0Gc0 = await _argumentiLcYQTF.default(_valuebVykIP8, _descriptionMCUGNN)
		const _returnValuewCJ5NHD = await _HelprCR8LC1.argumentDescription(_argumentiLcYQTF)
	});

	it('test for Help', async () => {
		const _HelpnjNY8G = new Help()
		const _nameGDr48eU = "otGq8zYRCobE4Ti7c1OcUt2XE4WBQ3SbTChhCNWtp7BP4sayG9E3oIpTsBjxHLD1LL3";
		const _returnValuewUGCwRD = {
		
	}
		const _descriptionsGFc3eG = () => { return _returnValuewUGCwRD };
		const _optionA70eagU = new Argument(_nameGDr48eU, _descriptionsGFc3eG)
		const _returnValueggi7AbZ = await _optionA70eagU.argRequired()
		const _returnValueTFO5et = await _optionA70eagU.argOptional()
		const _returnValueRPDI6KN = await _optionA70eagU.argRequired()
		const _arrayValuewDQVDTz = true;
		const _arrayValuepRduIGY = -7.744586697124651;
		const _valueskyZTx8 = [_arrayValuewDQVDTz, _arrayValuepRduIGY]
		const _returnValuey5vFuCS = await _optionA70eagU.choices(_valueskyZTx8)
		const _returnValueTY8XWyb = await _HelpnjNY8G.optionDescription(_optionA70eagU)
		const _nameotrsaw = []
		const _descriptionLVEAaOR = -8.635632386655413;
		const _optionLoXZKcw = new Argument(_nameotrsaw, _descriptionLVEAaOR)
		const _valuegfeHUJ3 = {
		
	}
		const _descriptionthpbgB = null;
		const _returnValueAZsPtlA = await _optionLoXZKcw.default(_valuegfeHUJ3, _descriptionthpbgB)
		const _returnValuewoiN20 = await _HelpnjNY8G.optionDescription(_optionLoXZKcw)
		const _cmdBfINflQ = 9.746844626900096;
		const _helper0zZV9z = new Help()
		const _cmde88yf2t = "YlIMPskf8yKHZFPVOHVcFUP";
		const _sortSubcommandsrfLTdSo = "XiVc32zu2nLptbA4PHCt4NgplIXLQM79PIHpYIbW1nALy2LI9BVUopKCfNW5ONFKL374QvNfKyE14";
		const _returnValueHPjjeT9 = false;
		const _subcommandTermN6eMf9p = () => { return _returnValueHPjjeT9 };
		const _helpernuB95nI = {
			"sortSubcommands": _sortSubcommandsrfLTdSo,
		"subcommandTerm": _subcommandTermN6eMf9p
	}
		const _returnValueLG1rgGO = await _helper0zZV9z.longestSubcommandTermLength(_cmde88yf2t, _helpernuB95nI)
		const _optionMCIDA7 = false;
		const _returnValueaLc9jbj = await _helper0zZV9z.optionDescription(_optionMCIDA7)
		const _returnValuedhvrO7C = await _HelpnjNY8G.formatHelp(_cmdBfINflQ, _helper0zZV9z)
	});

	it('test for Help', async () => {
		const _HelpYMu9FOI = new Help()
		const _nameiZIBJXN = 4.067436130655089;
		const _cmdKT6lMd = new Command(_nameiZIBJXN)
		const _combineRfgCVWK = false;
		const _returnValueZflRHqn = await _cmdKT6lMd.combineFlagAndOptionalValue(_combineRfgCVWK)
		const _returnValueOwMORMu = await _HelpYMu9FOI.visibleCommands(_cmdKT6lMd)
		const _argChoicesiAR5hAK = {
		
	}
		const _defaultValueiWxeWek = undefined;
		const _defaultValueDescriptionSX7sGWW = undefined;
		const _descriptionWLd8LI = {
		
	}
		const _argumentT9ojSOk = {
			"argChoices": _argChoicesiAR5hAK,
		"defaultValue": _defaultValueiWxeWek,
		"defaultValueDescription": _defaultValueDescriptionSX7sGWW,
		"description": _descriptionWLd8LI
	}
		const _returnValueelVXJm = await _HelpYMu9FOI.argumentDescription(_argumentT9ojSOk)
		const _optionAWdq5Sp = "koneXiPxA1HBvrbyEyb";
		const _returnValueE5BMUNv = await _HelpYMu9FOI.optionDescription(_optionAWdq5Sp)
		const _cmdkXOFhAt = "qULF52jMlZIl9vcw1I";
		const _returnValueuGEaygs = await _HelpYMu9FOI.visibleArguments(_cmdkXOFhAt)
		const _returnValuemfMlKm3 = 3.754540126522471;
		const _cmdUzinMrf = () => { return _returnValuemfMlKm3 };
		const _helperhezmVV = undefined;
		const _returnValueBN4PW6U = await _HelpYMu9FOI.padWidth(_cmdUzinMrf, _helperhezmVV)
	});

	it('test for Help', async () => {
		const _HelpyB5xIlH = new Help()
		const _nameDpcJzD = "jpEOUyUnRbNSnyXXxVwB2KnW";
		const _descriptionmhMYMH = "zB1a0ejqF2eavo78s6VqA9fjMBtt4vl5wTLGTtg3b9MXgFdB7zuqK7d7ozGa5MN9RThkkPE27";
		const _argumentTolgxp8 = new Argument(_nameDpcJzD, _descriptionmhMYMH)
		const _valuerqtZh5k = {
		
	}
		const _descriptionz3arvRD = undefined;
		const _returnValueylccwx7 = await _argumentTolgxp8.default(_valuerqtZh5k, _descriptionz3arvRD)
		const _returnValueMlXEYCu = await _HelpyB5xIlH.argumentDescription(_argumentTolgxp8)
		const _namecHb3wFp = "geI";
		const _argumentH6acEM1 = new Command(_namecHb3wFp)
		const _flagTYktkDj = "fzs3wAqdbxhCWnQEneJG3UdAkIMhbHN1RNkAVkH7LjFUEXoiM3VMgcjSJRQl9ldsNdurk3culCoiHP9";
		const _returnValueRxmfsg = await _argumentH6acEM1.unknownOption(_flagTYktkDj)
		const _nameHxcZeh3 = null;
		const _returnValueOvwdsrn = await _argumentH6acEM1.createCommand(_nameHxcZeh3)
		const _returnValueahQgw6w = await _argumentH6acEM1._parseOptionsEnv()
		const _returnValue5qotQX = await _HelpyB5xIlH.argumentTerm(_argumentH6acEM1)
	});

	it('test for Help', async () => {
		const _HelppkAJoyP = new Help()
		const _nameUlg660d = "k5wLGIzGNuMqGYVMUYUZ6YJLmMy98HbxZrfSSNBnmoAhkzpPJbwXPC5ipPcOJ6hEg53FPfskksqzbpAl5uF1vs";
		const _cmdjrbVvaD = new Command(_nameUlg660d)
		const _allowExcessnVumDq7 = false;
		const _returnValueTn6O8x3 = await _cmdjrbVvaD.allowExcessArguments(_allowExcessnVumDq7)
		const _returnValueZkY62Sd = await _HelppkAJoyP.subcommandTerm(_cmdjrbVvaD)
		const _namesiDDW1k = {
		
	}
		const _returnValueJhXJUWv = undefined;
		const _descriptionSJILba = () => { return _returnValueJhXJUWv };
		const _cmdR58tHwb = new Argument(_namesiDDW1k, _descriptionSJILba)
		const _returnValuetYNphLp = await _cmdR58tHwb.name()
		const _returnValuesDFfKAr = await _HelppkAJoyP.subcommandTerm(_cmdR58tHwb)
		const _returnValueqQ7BRww = undefined;
		const _cmdiZ6rApj = () => { return _returnValueqQ7BRww };
		const _returnValueMlTfcPQ = await _HelppkAJoyP.visibleOptions(_cmdiZ6rApj)
		const _returnValueCvAzQyx = "aXG2FnZoUKR664dPqTEc5oPyOwLB2AmWwMEKTQ74x75ZbLmLgkHOdUlQ3XTpgETbDQuCG3CMtXMbP8YGUsuBpcr";
		const _descriptionraarNr = () => { return _returnValueCvAzQyx };
		const _cmdWRuwVaw = {
			"description": _descriptionraarNr
	}
		const _returnValueQ9uTkhA = await _HelppkAJoyP.subcommandDescription(_cmdWRuwVaw)
		const _arrayValueSajWth = 0.13683095078687302;
		const _arrayValuewuyT1Eu = "wBa6v";
		const _optionbD0f9Qk = [_arrayValueSajWth, _arrayValuewuyT1Eu]
		const _returnValuenRpTvZj = await _HelppkAJoyP.optionDescription(_optionbD0f9Qk)
	});

	it('test for Help', async () => {
		const _Help2rA8ar = new Help()
		const _nameoDWtqed = undefined;
		const _cmdcVUpDfT = new Command(_nameoDWtqed)
		const _storeAsPropertiesK58Cy6a = false;
		const _returnValueFy1PVFu = await _cmdcVUpDfT.storeOptionsAsProperties(_storeAsPropertiesK58Cy6a)
		const _combineRwYVtlz = "1bVExw6f2obGt6uU7dHtcqn21czAAS2Iv7CjcRPclZfHesxg1Hb1rgnSkvMVpweH8ztNatvVUchkS636A5PJI";
		const _returnValuei9DlN9M = await _cmdcVUpDfT.combineFlagAndOptionalValue(_combineRwYVtlz)
		const _returnValuekmK8lZ8 = null;
		const _fnlx45gbm = () => { return _returnValuekmK8lZ8 };
		const _returnValuesLUd0y = await _cmdcVUpDfT.action(_fnlx45gbm)
		const _enableOrNameAndArgsiUlilU1 = "X9qz2C2IaA9aMnzgvNAkBlQh1wYD";
		const _descriptionmhl73GD = "KKOYNRImn3CwuvfAbjxXs32DyYWRNrqWTpUefK21ih1rhrlR2IbKBKXu7UojDrcKPxCXBCnZOF8BK33iI12hUhr3ULCBB9wvCE";
		const _returnValueCLbkiay = await _cmdcVUpDfT.addHelpCommand(_enableOrNameAndArgsiUlilU1, _descriptionmhl73GD)
		const _returnValuew6qzIpx = await _Help2rA8ar.visibleCommands(_cmdcVUpDfT)
	});
})