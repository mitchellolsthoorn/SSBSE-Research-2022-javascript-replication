export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpFBuHu0r = new Help()
		const _returnValuenv9zL4s = null;
		const _includesQONW5lD = () => { return _returnValuenv9zL4s };
		const _flagseE7PqIy = {
			"includes": _includesQONW5lD
	}
		const _descriptionCjfNetU = null;
		const _optiontKb4J1O = new Option(_flagseE7PqIy, _descriptionCjfNetU)
		const _returnValuekUNQB4 = await _optiontKb4J1O.attributeName()
		const _returnValueljggaJb = await _optiontKb4J1O.attributeName()
		const _nameL11BVv5 = undefined;
		const _returnValueJytbv2Q = await _optiontKb4J1O.env(_nameL11BVv5)
		const _returnValueVr2q59P = await _HelpFBuHu0r.optionDescription(_optiontKb4J1O)
		const _arrayValueTpJdWCx = []
		const _arrayValueAzjlzD1 = {
		
	}
		const _arrayValuee1ajYUG = {
		
	}
		const _arrayValuefeYwWb = [_arrayValueTpJdWCx, _arrayValueAzjlzD1, _arrayValuee1ajYUG]
		const _argumentj9E2AQ = [_arrayValuefeYwWb]
		const _returnValuecYcRfUF = await _HelpFBuHu0r.argumentDescription(_argumentj9E2AQ)
	});

	it('test for Help', async () => {
		const _Helpckedj0Q = new Help()
		const _exitCodesqb6aZ = undefined;
		const _codePu4FxIH = undefined;
		const _returnValuebrkNifI = "LWFquEfK8vhxuBgAkV4PFJR7C2PM98KHCYLV8D";
		const _arrayValueLb9bEif = () => { return _returnValuebrkNifI };
		const _arrayValueVsl3H9 = undefined;
		const _arrayValuezsQCHld = undefined;
		const _arrayValuenePDXuv = [_arrayValuezsQCHld]
		const _returnValue82NYlw = [_arrayValueLb9bEif, _arrayValueVsl3H9, _arrayValuenePDXuv]
		const _messagef2maeAB = () => { return _returnValue82NYlw };
		const _argumentjnMTWYl = new CommanderError(_exitCodesqb6aZ, _codePu4FxIH, _messagef2maeAB)
		const _returnValueBU8Ibj = await _Helpckedj0Q.argumentTerm(_argumentjnMTWYl)
		const _cmdsG8iUjg = false;
		const _arrayValueZIRAE9Q = true;
		const _arrayValueQQpItrK = undefined;
		const _arrayValueoCGZoMT = "lFCHYqnC5P3xntfubWJ6ec5GB2n5ZmklF49RXe4kifBwym40LCBfT3shfdviJ1ey4gqhnIzv2qhG";
		const _arrayValueOAQUfQ = true;
		const _helperofSOjBF = [_arrayValueZIRAE9Q, _arrayValueQQpItrK, _arrayValueoCGZoMT, _arrayValueOAQUfQ]
		const _returnValueMu7tFoi = await _Helpckedj0Q.longestArgumentTermLength(_cmdsG8iUjg, _helperofSOjBF)
		const _cmdFOxE9j4 = undefined;
		const _helpersrmvFLc = new Help()
		const _cmdczLfiX = {
		
	}
		const _arrayValuebRHlcbw = "BcJJer3reybfZfie";
		const _helperb6kyYMk = [_arrayValuebRHlcbw]
		const _returnValueFSVxJpL = await _helpersrmvFLc.longestSubcommandTermLength(_cmdczLfiX, _helperb6kyYMk)
		const _cmdbzy8aLX = "GK1Qp8IcXiiwJMyVx5dk78a1jGr1xLweIqBlg8leSeaKxvWzyY8jMafn77vrf1YUSbYyDvhlGraD7GbrFD9wX3NaI1LwdaK";
		const _helpersvoMWk3 = new Help()
		const _cmdqlcjDui = null;
		const _helperpGepfcs = new Help()
		const _cmdxIFLDdH = "WVaQCy6UFt7BD6kHxTlB932aXqqsH";
		const _returnValuemukNxoV = await _helperpGepfcs.visibleOptions(_cmdxIFLDdH)
		const __nameeCwCT2 = 1.4347482481941327;
		const __aliasesAbxmCXU = {
		
	}
		const _parentPlyowpK = {
		
	}
		const _returnValueYoWw4ce = true;
		const _usagecDY2uGr = () => { return _returnValueYoWw4ce };
		const _cmduUaxstJ = {
			"_name": __nameeCwCT2,
		"_aliases": __aliasesAbxmCXU,
		"parent": _parentPlyowpK,
		"usage": _usagecDY2uGr
	}
		const _returnValueDGsMpAW = await _helperpGepfcs.commandUsage(_cmduUaxstJ)
		const _nameVjbZU6K = {
		
	}
		const _cmdRerkrFU = new Command(_nameVjbZU6K)
		const _passThroughyUtEJdx = false;
		const _returnValuegT6sc6o = await _cmdRerkrFU.passThroughOptions(_passThroughyUtEJdx)
		const _returnValueRnZsd0 = await _helperpGepfcs.commandDescription(_cmdRerkrFU)
		const _cmdPp3vOoC = "AluAUfrhn0iCR92Hjik9VJqPGq3O2duZhSGXEk7GCLRyVsqx9rqs5rT";
		const _returnValue5BZMB0 = await _helperpGepfcs.subcommandTerm(_cmdPp3vOoC)
		const _returnValueAwXSZct = await _helpersvoMWk3.longestOptionTermLength(_cmdqlcjDui, _helperpGepfcs)
		const _cmdQStIWhk = false;
		const _returnValuedjgieW0 = 1.6104719339374292;
		const _helperU1O4hQA = () => { return _returnValuedjgieW0 };
		const _returnValue5dqAb3 = await _helpersvoMWk3.longestOptionTermLength(_cmdQStIWhk, _helperU1O4hQA)
		const _cmdMGzHCCJ = undefined;
		const _arrayValuefTqiZI = {
		
	}
		const _helperV61gFYm = [_arrayValuefTqiZI]
		const _returnValueY2RetD = await _helpersvoMWk3.longestOptionTermLength(_cmdMGzHCCJ, _helperV61gFYm)
		const _cmdR9YbaxK = null;
		const _returnValueVeQqhJ = undefined;
		const _helperDGVMUGH = () => { return _returnValueVeQqhJ };
		const _returnValuemsVhGxK = await _helpersvoMWk3.longestArgumentTermLength(_cmdR9YbaxK, _helperDGVMUGH)
		const _returnValuerWBLgsi = await _helpersrmvFLc.longestArgumentTermLength(_cmdbzy8aLX, _helpersvoMWk3)
		const _returnValueDR1L5r = true;
		const _cmdFs1i40W = () => { return _returnValueDR1L5r };
		const _returnValueR8EYGqW = false;
		const _helperO2E9pRb = () => { return _returnValueR8EYGqW };
		const _returnValueG3yEKBC = await _helpersrmvFLc.longestOptionTermLength(_cmdFs1i40W, _helperO2E9pRb)
		const _cmd2tpRnv = "hVEeIpunygfln";
		const _returnValueh4IAJ3b = await _helpersrmvFLc.visibleOptions(_cmd2tpRnv)
		const _returnValuekfu45I = await _Helpckedj0Q.longestOptionTermLength(_cmdFOxE9j4, _helpersrmvFLc)
		const _cmdr9va0St = "dIyoMpV3x6GS8nWYQu";
		const _returnValueUkjnYwJ = await _Helpckedj0Q.commandDescription(_cmdr9va0St)
	});

	it('test for Help', async () => {
		const _Helpb4Teq3K = new Help()
		const _arrayValuelsXNl5O = undefined;
		const _nameMtymnTo = [_arrayValuelsXNl5O]
		const _cmdabz2Gx = new Command(_nameMtymnTo)
		const _arrayValuexcLjxGV = []
		const _arrayValuefGiJMWR = {
		
	}
		const _arrayValueb0bYfTa = {
		
	}
		const _arrayValueL9actKG = undefined;
		const _arrayValueVvy3juN = [_arrayValueb0bYfTa, _arrayValueL9actKG]
		const _fnC3ldqJz = [_arrayValuexcLjxGV, _arrayValuefGiJMWR, _arrayValueVvy3juN]
		const _returnValueSPDXgJ = await _cmdabz2Gx.action(_fnC3ldqJz)
		const _keyIilIFCI = "DgOP3eP3WoamSmkrNQsUgZHEuLZCbGAdER5C3oYuoqfp1fAPWOeKBTjkHDsBOgp6w1TdCmxgMT3dF7q1iSeCxm";
		const _returnValueRtdykvd = await _cmdabz2Gx.getOptionValue(_keyIilIFCI)
		const _returnValueo6Ar1L0 = await _Helpb4Teq3K.subcommandTerm(_cmdabz2Gx)
		const _nameyvtmPdg = {
		
	}
		const _cmdqBJwTD = new Command(_nameyvtmPdg)
		const _namediWfsb9 = {
		
	}
		const _returnValueQ5vyHB7 = await _cmdqBJwTD.createCommand(_namediWfsb9)
		const _promisep5zKOJK = {
		
	}
		const _eventNpVkD0x = "aazV11624xVugPNNDClfeBoaRvzuBLQ7vg1VD4l8K3ASpeHemNOkrhdhLqpy9";
		const _returnValuezIIjOH9 = await _cmdqBJwTD._chainOrCallHooks(_promisep5zKOJK, _eventNpVkD0x)
		const _keyHNiQNNY = null;
		const _returnValueYASpOB = await _cmdqBJwTD.getOptionValue(_keyHNiQNNY)
		const _returnValueGKAGorJ = await _cmdqBJwTD._checkForMissingMandatoryOptions()
		const _returnValuewg3NMX5 = "dcpQQhGntJeaNXU9yrmJjitHikmVTvy3";
		const _contextOptionsrDCG8Sj = () => { return _returnValuewg3NMX5 };
		const _returnValuew6EufMk = await _cmdqBJwTD.outputHelp(_contextOptionsrDCG8Sj)
		const _returnValueJgENjOt = await _Helpb4Teq3K.commandDescription(_cmdqBJwTD)
		const _cmdq2JuddN = "UDGPNf74jFL5n4PiON5YePaJ1";
		const _returnValuemXGq4Rl = await _Helpb4Teq3K.visibleCommands(_cmdq2JuddN)
		const _arrayValueY4Y4huv = undefined;
		const _arrayValueBMkSuRb = null;
		const _messageeGB3Hc = [_arrayValueY4Y4huv, _arrayValueBMkSuRb]
		const _argumentLyOLeSs = new InvalidArgumentError(_messageeGB3Hc)
		const _returnValuebbnxmqh = await _Helpb4Teq3K.argumentTerm(_argumentLyOLeSs)
		const _arrayValuecgaXiXg = 2.6281178680342094;
		const _returnValuexFl0L8 = [_arrayValuecgaXiXg]
		const _arrayValueGsemOHY = () => { return _returnValuexFl0L8 };
		const _arrayValueZQHF7f0 = "ObX7Hn1TfiCZvpoag2hHEuqoXnga";
		const _arrayValueF4wjTaN = false;
		const _arrayValueiYjGMuK = [_arrayValueZQHF7f0, _arrayValueF4wjTaN]
		const _cmdm2qJtSb = [_arrayValueGsemOHY, _arrayValueiYjGMuK]
		const _returnValueDHYlN9c = await _Helpb4Teq3K.commandDescription(_cmdm2qJtSb)
	});

	it('test for Help', async () => {
		const _HelpGKOphtq = new Help()
		const _cmdd0Bh63Q = false;
		const _returnValues7U3YvW = await _HelpGKOphtq.visibleOptions(_cmdd0Bh63Q)
	});

	it('test for Help', async () => {
		const _Help17TEb8 = new Help()
		const __argsDescriptionfvZnFsa = {
		
	}
		const __argss3mDhTp = {
		
	}
		const _cmd2zr9sc = {
			"_argsDescription": __argsDescriptionfvZnFsa,
		"_args": __argss3mDhTp
	}
		const _returnValueXymU2s = await _Help17TEb8.visibleArguments(_cmd2zr9sc)
		const _cmdKl0ciyC = undefined;
		const _returnValueZo844Oj = 7.17501971261666;
		const _helperYmOnVeH = () => { return _returnValueZo844Oj };
		const _returnValueISG5X5S = await _Help17TEb8.longestOptionTermLength(_cmdKl0ciyC, _helperYmOnVeH)
	});

	it('test for Help', async () => {
		const _HelpGEaMqBO = new Help()
		const _argChoicesnkiqVXD = {
		
	}
		const _arrayValueWyzfgav = true;
		const _returnValueJdd3Jxj = "ClQ1qn3tCdOOXQrAHyiNPOizLdMt9hjXBHp9UKr3";
		const _arrayValuewrAvgKa = () => { return _returnValueJdd3Jxj };
		const _arrayValuenwmvf5m = "YzOJ2Vv1NVh4PRjlYPPrJmjeIecv65rSAMcRNSRXUHD5Mx";
		const _arrayValuek1vfIav = true;
		const _arrayValueIW07wAJ = [_arrayValuenwmvf5m, _arrayValuek1vfIav]
		const _negatesQh0COT = [_arrayValueWyzfgav, _arrayValuewrAvgKa, _arrayValueIW07wAJ]
		const _defaultValuepFCvB67 = undefined;
		const _defaultValueDescriptionns7bsHS = null;
		const _envVarnMK25V = undefined;
		const _descriptionoPnefsv = "KtzaGNXmQOqB";
		const _optionhvlnc3i = {
			"argChoices": _argChoicesnkiqVXD,
		"negate": _negatesQh0COT,
		"defaultValue": _defaultValuepFCvB67,
		"defaultValueDescription": _defaultValueDescriptionns7bsHS,
		"envVar": _envVarnMK25V,
		"description": _descriptionoPnefsv
	}
		const _returnValueF44DGaG = await _HelpGEaMqBO.optionDescription(_optionhvlnc3i)
		const _commandsn05LaSO = {
		
	}
		const _returnValueTQIv96 = null;
		const _returnValuewGBm1bM = () => { return _returnValueTQIv96 };
		const __hasImplicitHelpCommandWVBSPWo = () => { return _returnValuewGBm1bM };
		const __helpCommandnameAndArgsBGUpuVl = {
		
	}
		const _returnValueTcPLxNj = undefined;
		const _createCommandeEJKBo7 = () => { return _returnValueTcPLxNj };
		const __helpCommandDescriptionUG5OU4j = "EJV5xCCv399T4IPAWAVQkNSt98pE2X3wgNBqvR";
		const _cmdq4OHTkP = {
			"commands": _commandsn05LaSO,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandWVBSPWo,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBGUpuVl,
		"createCommand": _createCommandeEJKBo7,
		"_helpCommandDescription": __helpCommandDescriptionUG5OU4j
	}
		const _returnValuekgTJeQG = await _HelpGEaMqBO.visibleCommands(_cmdq4OHTkP)
	});

	it('test for Help', async () => {
		const _Helprc6kRch = new Help()
		const _cmdbkJQfL6 = null;
		const _returnValuee35Mv9I = await _Helprc6kRch.commandUsage(_cmdbkJQfL6)
		const _optionsToUvNe8 = {
		
	}
		const __hasHelpOptionAxHx2nx = "vSA42wCU5FyBywGciBbUjBtXFVxI2KuvHBdjny8FeIbI";
		const __helpShortFlagni2kw1w = undefined;
		const __findOptionC53RCN = undefined;
		const _arrayValueaJvb0xI = undefined;
		const _returnValuedlnDetF = undefined;
		const _arrayValuepHNzEY = () => { return _returnValuedlnDetF };
		const __helpLongFlagnM8OKpq = [_arrayValueaJvb0xI, _arrayValuepHNzEY]
		const _returnValueNas7L09 = []
		const _createOptionf3l69mU = () => { return _returnValueNas7L09 };
		const __helpDescriptionGcsR3YH = false;
		const __helpFlagseTUk6l = []
		const _cmdq4d74f0 = {
			"options": _optionsToUvNe8,
		"_hasHelpOption": __hasHelpOptionAxHx2nx,
		"_helpShortFlag": __helpShortFlagni2kw1w,
		"_findOption": __findOptionC53RCN,
		"_helpLongFlag": __helpLongFlagnM8OKpq,
		"createOption": _createOptionf3l69mU,
		"_helpDescription": __helpDescriptionGcsR3YH,
		"_helpFlags": __helpFlagseTUk6l
	}
		const _returnValueJRY1qbG = await _Helprc6kRch.visibleOptions(_cmdq4d74f0)
		const _nameRumalyp = "qXGCnaApgTBZOn519pVdSsRvRbwNLXQECX4LHtz1uVtMzQxEFG";
		const _cmdI0oImJy = new Command(_nameRumalyp)
		const _lengtheP9t3Zh = false;
		const _receivedArgsV8G1aEC = {
			"length": _lengtheP9t3Zh
	}
		const _returnValueuEHAGrp = await _cmdI0oImJy._excessArguments(_receivedArgsV8G1aEC)
		const _arrayValueP7QjnZ = null;
		const _arrayValueBdyuGbI = undefined;
		const _operandsHXqFhbH = [_arrayValueP7QjnZ, _arrayValueBdyuGbI]
		const _arrayValueiIXqg1d = false;
		const _unknownXHqhM2P = [_arrayValueiIXqg1d]
		const _returnValueFQCb7BO = await _cmdI0oImJy._parseCommand(_operandsHXqFhbH, _unknownXHqhM2P)
		const _nameLiIBOny = "ngEY2BEAQtJLWnHpMx4DACiV14v1k1klAHl4vyqYkrqJsQ17rr9AzPKKj";
		const _returnValuemLM2T2 = await _cmdI0oImJy.missingArgument(_nameLiIBOny)
		const _arrayValuevrR8YAj = true;
		const _returnValueRIiyhn8 = [_arrayValuevrR8YAj]
		const _enableOrNameAndArgsIyhnwtv = () => { return _returnValueRIiyhn8 };
		const _descriptionWW5lM2J = null;
		const _returnValueW6hyRV6 = await _cmdI0oImJy.addHelpCommand(_enableOrNameAndArgsIyhnwtv, _descriptionWW5lM2J)
		const _returnValue4ifDbg = await _Helprc6kRch.subcommandDescription(_cmdI0oImJy)
		const _optionsIAQSWY6 = {
		
	}
		const _returnValueRe50ycw = null;
		const __hasHelpOptionBv0CH6t = () => { return _returnValueRe50ycw };
		const __helpShortFlagyXGf0sA = "mGWEzIRnhPG61pQGrdikiNbWT43v5s84d5W";
		const _arrayValueWegLVnb = "fnplw8BfxiL8Es6msYTM9Bn9oIUN";
		const _arrayValueh8fzL7Y = 2.725495487394582;
		const _returnValuer5pKK8V = [_arrayValueWegLVnb, _arrayValueh8fzL7Y]
		const __findOptionLX31hg = () => { return _returnValuer5pKK8V };
		const _arrayValuevsH71uM = false;
		const _arrayValuemhj886e = false;
		const _arrayValueVBpafFN = {
		
	}
		const __helpLongFlagQ2T1TtS = [_arrayValuevsH71uM, _arrayValuemhj886e, _arrayValueVBpafFN]
		const _returnValuec8cRaAA = undefined;
		const _createOptionFjIIjc = () => { return _returnValuec8cRaAA };
		const _returnValueVsTrExx = true;
		const _arrayValuexsWs3ez = () => { return _returnValueVsTrExx };
		const _arrayValuekxEi6m = undefined;
		const _arrayValuenISsEdA = true;
		const __helpDescriptionTUnJnRV = [_arrayValuexsWs3ez, _arrayValuekxEi6m, _arrayValuenISsEdA]
		const __helpFlagsX4ntHiE = null;
		const _cmduSQk1i5 = {
			"options": _optionsIAQSWY6,
		"_hasHelpOption": __hasHelpOptionBv0CH6t,
		"_helpShortFlag": __helpShortFlagyXGf0sA,
		"_findOption": __findOptionLX31hg,
		"_helpLongFlag": __helpLongFlagQ2T1TtS,
		"createOption": _createOptionFjIIjc,
		"_helpDescription": __helpDescriptionTUnJnRV,
		"_helpFlags": __helpFlagsX4ntHiE
	}
		const _returnValuepxgfDBo = await _Helprc6kRch.visibleOptions(_cmduSQk1i5)
	});

	it('test for Help', async () => {
		const _HelpTvwbJzd = new Help()
		const _cmdhnl1Jp = null;
		const _arrayValuePa5khp = {
		
	}
		const _helperzYFnpvf = [_arrayValuePa5khp]
		const _returnValue3qrbnb = await _HelpTvwbJzd.formatHelp(_cmdhnl1Jp, _helperzYFnpvf)
		const _arrayValuezH2UNbK = 2.7940529834623558;
		const _arrayValueNRZL1Oo = true;
		const _arrayValuemS3LrW = "8fPO";
		const _returnValueXCJ0VyZ = [_arrayValuezH2UNbK, _arrayValueNRZL1Oo, _arrayValuemS3LrW]
		const _cmd0tYvea = () => { return _returnValueXCJ0VyZ };
		const _returnValueeVfGpxa = await _HelpTvwbJzd.commandUsage(_cmd0tYvea)
		const _arrayValueAAjzM4F = "e1CQrt0uBfythh77GU3nYt1KxlP19Wrlymz0dqstDgPms7WxUbC4paOzI";
		const _arrayValueBdCsGQ7 = true;
		const _cmdEppYArV = [_arrayValueAAjzM4F, _arrayValueBdCsGQ7]
		const _helperBVkav1 = "YvZf2WFl";
		const _returnValuewguPysy = await _HelpTvwbJzd.padWidth(_cmdEppYArV, _helperBVkav1)
	});

	it('test for Help', async () => {
		const _HelppmUg3y = new Help()
		const _arrayValueZXwkhW = false;
		const _arrayValuei1ZfSK = true;
		const _cmdzNL7hcR = [_arrayValueZXwkhW, _arrayValuei1ZfSK]
		const _helperK8CDsZc = "JXmh7MYk1kYaU8een0sjTXa6aErfPP8CWe8OzjeFolkbnh8SC6zP2sBgoyaQuw";
		const _returnValuee0jUea1 = await _HelppmUg3y.longestArgumentTermLength(_cmdzNL7hcR, _helperK8CDsZc)
		const _arrayValueuXBa80N = null;
		const _arrayValueVSzee0H = null;
		const _cmdrS1pvt5 = [_arrayValueuXBa80N, _arrayValueVSzee0H]
		const _returnValuecaxDNT3 = await _HelppmUg3y.commandUsage(_cmdrS1pvt5)
		const _argChoicesO0hNear = {
		
	}
		const _defaultValueS487tlq = undefined;
		const _defaultValueDescriptionxqhyPOZ = {
		
	}
		const _descriptionkg7BGoW = "dGyShnMF2cxOWx7gQRB2TltIr2V7tGHfls4fVAqSn7YrsITJmNRcI";
		const _argumentI2YPX54 = {
			"argChoices": _argChoicesO0hNear,
		"defaultValue": _defaultValueS487tlq,
		"defaultValueDescription": _defaultValueDescriptionxqhyPOZ,
		"description": _descriptionkg7BGoW
	}
		const _returnValuePZ0vM5z = await _HelppmUg3y.argumentDescription(_argumentI2YPX54)
	});

	it('test for Help', async () => {
		const _HelpdbH4zm2 = new Help()
		const _argChoicespDgQuoN = {
		
	}
		const _negateARJuLES = null;
		const _defaultValueUfYvho3 = undefined;
		const _defaultValueDescriptionWstlIgs = "PC1NAg0Q2h0FVzZV7Vf5fEck7UUd8pHyZh8TJVKqjDYsdBrgd9u8KfWLRaJknr7jjqMdcNnoHxZH";
		const _envVarmbsmJbN = undefined;
		const _arrayValuegfmIa7S = -9.959115177338438;
		const _arrayValueDmCHalJ = undefined;
		const _descriptionNqZs7qW = [_arrayValuegfmIa7S, _arrayValueDmCHalJ]
		const _optionqmnKPB1 = {
			"argChoices": _argChoicespDgQuoN,
		"negate": _negateARJuLES,
		"defaultValue": _defaultValueUfYvho3,
		"defaultValueDescription": _defaultValueDescriptionWstlIgs,
		"envVar": _envVarmbsmJbN,
		"description": _descriptionNqZs7qW
	}
		const _returnValueioX0tNo = await _HelpdbH4zm2.optionDescription(_optionqmnKPB1)
		const _cmdO9PtpMQ = 2.951993930646264;
		const _helperf6HEh08 = "ra2v8Wzv51qb4d62kJuXwnudEl74rcK6eeNwgMQIhkr60cTbWHHOtz";
		const _returnValuev1YaDYx = await _HelpdbH4zm2.padWidth(_cmdO9PtpMQ, _helperf6HEh08)
		const __argsDescriptionzI969hW = {
		
	}
		const __argsP3tXHy = {
		
	}
		const _cmdP724kB4 = {
			"_argsDescription": __argsDescriptionzI969hW,
		"_args": __argsP3tXHy
	}
		const _returnValuelasSw7I = await _HelpdbH4zm2.visibleArguments(_cmdP724kB4)
		const _arrayValueoHdQo9P = -8.699840880457993;
		const _arrayValueKYKvwPA = false;
		const _arrayValueHRj89l8 = null;
		const _arrayValuee8TZXl9 = [_arrayValueHRj89l8]
		const _cmdqc05EZw = [_arrayValueoHdQo9P, _arrayValueKYKvwPA, _arrayValuee8TZXl9]
		const _returnValueHAjEYcW = await _HelpdbH4zm2.commandDescription(_cmdqc05EZw)
	});

	it('test for Help', async () => {
		const _HelpuL37YFx = new Help()
		const _arrayValueOwOqUbW = false;
		const _optionY6BYQA9 = [_arrayValueOwOqUbW]
		const _returnValueor0UvN1 = await _HelpuL37YFx.optionTerm(_optionY6BYQA9)
		const _returnValueB389tAQ = "6UwImU8IJsKffFpR745vMINsACOKn5FeTmeidzvbIuRuxoXi62DOXwHwcXcOzZaao3ItswfkaKcrfTTtTCpB4FjXR5tSP";
		const _description8bRHI7 = () => { return _returnValueB389tAQ };
		const _cmdtkYFHJ = {
			"description": _description8bRHI7
	}
		const _returnValueUiL4zag = await _HelpuL37YFx.subcommandDescription(_cmdtkYFHJ)
		const _arrayValuem6mkUop = true;
		const _arrayValueoR7sFD8 = [_arrayValuem6mkUop]
		const _arrayValueNvEAJpM = []
		const _optionCpbSl0u = [_arrayValueoR7sFD8, _arrayValueNvEAJpM]
		const _returnValueV8NfGGq = await _HelpuL37YFx.optionDescription(_optionCpbSl0u)
	});

	it('test for Help', async () => {
		const _HelpTTKsnSk = new Help()
		const _cmdiZCWatp = null;
		const _returnValuevAdt5sm = "Ss5DG29i9fvQ5sKcv1XJLeFizoxOnvcC4boDBfePGpqgTST4dkWXTktXC";
		const _longestOptionTermLengthauGyAVF = () => { return _returnValuevAdt5sm };
		const _returnValuecMAjo6 = undefined;
		const _longestSubcommandTermLengthhukrBSi = () => { return _returnValuecMAjo6 };
		const _arrayValueLT5ZAtB = undefined;
		const _arrayValueFbySAm = undefined;
		const _arrayValuetKjbV6 = [_arrayValueFbySAm]
		const _arrayValuevRJCW0t = 4.296595473973985;
		const _arrayValueJohjGoh = [_arrayValuetKjbV6, _arrayValuevRJCW0t]
		const _arrayValueSEABxah = -9.951025944927357;
		const _arrayValuecGwYjSx = undefined;
		const _arrayValueygqsZUH = undefined;
		const _arrayValuerEHaRe6 = [_arrayValueSEABxah, _arrayValuecGwYjSx, _arrayValueygqsZUH]
		const _returnValuevn1rWb2 = [_arrayValueLT5ZAtB, _arrayValueJohjGoh, _arrayValuerEHaRe6]
		const _longestArgumentTermLength0J76hz = () => { return _returnValuevn1rWb2 };
		const _helperS3WHLon = {
			"longestOptionTermLength": _longestOptionTermLengthauGyAVF,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhukrBSi,
		"longestArgumentTermLength": _longestArgumentTermLength0J76hz
	}
		const _returnValueC8CnZJm = await _HelpTTKsnSk.padWidth(_cmdiZCWatp, _helperS3WHLon)
		const _cmdAQuHdJi = "1255IQG99LlDdrXVAeANmJdZ4rdquBYiJwR7PnWJXLsXalUNWeB8Pj8xslszhBoxpegKXZrHGJ753g";
		const _returnValueEfazsH = await _HelpTTKsnSk.visibleArguments(_cmdAQuHdJi)
	});

	it('test for Help', async () => {
		const _HelpcuFs9g = new Help()
		const _cmdOO7Mml4 = "gtOR78";
		const _arrayValueEJNro7c = undefined;
		const _helperSM1Tow5 = [_arrayValueEJNro7c]
		const _returnValueyGzBDFr = await _HelpcuFs9g.longestSubcommandTermLength(_cmdOO7Mml4, _helperSM1Tow5)
		const _returnValueWEYvh2S = -4.632228690263888;
		const _argumentvTqx0WO = () => { return _returnValueWEYvh2S };
		const _returnValuexZsqwX = await _HelpcuFs9g.argumentTerm(_argumentvTqx0WO)
		const _returnValuesppWeu = undefined;
		const _cmdjEZQV5G = () => { return _returnValuesppWeu };
		const _returnValueMvs9JuA = await _HelpcuFs9g.subcommandTerm(_cmdjEZQV5G)
		const _argumentNKhNdF8 = "9N1qUKabRUWV837ERxo480LHa5VTQNyU3QBW";
		const _returnValue6iou6i = await _HelpcuFs9g.argumentDescription(_argumentNKhNdF8)
		const _returnValueP2TQiFN = undefined;
		const _optionzNMFy8l = () => { return _returnValueP2TQiFN };
		const _returnValuebhpNGV = await _HelpcuFs9g.optionTerm(_optionzNMFy8l)
	});

	it('test for Help', async () => {
		const _HelpNkfLhi8 = new Help()
		const _cmdTmydfe1 = []
		const _helperQyWia8R = new Help()
		const _returnValueOJAAYP = false;
		const _stryPPYvq0 = () => { return _returnValueOJAAYP };
		const _widthaIMs1Ac = 1.5776644937961066;
		const _indentXxJ8BFr = -8.13143453132168;
		const _minColumnWidthAuB97mY = 1.4937202086230492;
		const _returnValuehFRitcI = await _helperQyWia8R.wrap(_stryPPYvq0, _widthaIMs1Ac, _indentXxJ8BFr, _minColumnWidthAuB97mY)
		const _returnValuebzEwRI2 = undefined;
		const _flagsBgrqAGs = () => { return _returnValuebzEwRI2 };
		const _descriptionkuwmEeJ = 3.840751430317816;
		const _argumentVa3XhVj = new Option(_flagsBgrqAGs, _descriptionkuwmEeJ)
		const _fnssWi5vT = undefined;
		const _returnValuellz3phu = await _argumentVa3XhVj.argParser(_fnssWi5vT)
		const _arrayValueOqdYt63 = undefined;
		const _valuesMqSw84A = [_arrayValueOqdYt63]
		const _returnValuejZtEzzt = await _argumentVa3XhVj.choices(_valuesMqSw84A)
		const _arrayValueBVGBAxk = "iILbS6UaN84jJiRT7W3CUgBUR73";
		const _arrayValueWFmLH53 = undefined;
		const _returnValueGmNpAtR = [_arrayValueBVGBAxk, _arrayValueWFmLH53]
		const _fnLrGzHSM = () => { return _returnValueGmNpAtR };
		const _returnValuefVqg1Z = await _argumentVa3XhVj.argParser(_fnLrGzHSM)
		const _fnH8lLUpr = undefined;
		const _returnValuepd0O3Rx = await _argumentVa3XhVj.argParser(_fnH8lLUpr)
		const _nameovURI31 = undefined;
		const _returnValueGOY108p = await _argumentVa3XhVj.env(_nameovURI31)
		const _returnValuelDuJgzO = await _helperQyWia8R.argumentTerm(_argumentVa3XhVj)
		const _argChoiceshCQ8us = {
		
	}
		const _returnValueRwNagWF = false;
		const _negateWXK9ZiS = () => { return _returnValueRwNagWF };
		const _defaultValueVFHsHWE = undefined;
		const _defaultValueDescriptionJN2Ubzx = -8.391744765518716;
		const _envVarylt5UwQ = undefined;
		const _descriptionCpxJVpJ = 9.791216493261405;
		const _optionXqq8uPu = {
			"argChoices": _argChoiceshCQ8us,
		"negate": _negateWXK9ZiS,
		"defaultValue": _defaultValueVFHsHWE,
		"defaultValueDescription": _defaultValueDescriptionJN2Ubzx,
		"envVar": _envVarylt5UwQ,
		"description": _descriptionCpxJVpJ
	}
		const _returnValuetYEinmI = await _helperQyWia8R.optionDescription(_optionXqq8uPu)
		const _returnValuefEsOs6I = await _HelpNkfLhi8.formatHelp(_cmdTmydfe1, _helperQyWia8R)
		const _cmdStAA6j = 1.7396931325614169;
		const _arrayValuenL0VzxP = null;
		const _arrayValueOSIJWFM = "rEymVhdSiWbsF8HXpiPFlhRdWAaKxJs9MLtrOeQPDy4jsYo89lAIzEnCas3uBqIDuCc5femZSASnlg";
		const _arrayValueEvTj4nK = "9mlOujzb0dGpopcM";
		const _arrayValuea3Wl88X = undefined;
		const _arrayValueLgLx4Y = null;
		const _arrayValueUvBedK5 = [_arrayValueEvTj4nK, _arrayValuea3Wl88X, _arrayValueLgLx4Y]
		const _returnValueX12ez1K = [_arrayValuenL0VzxP, _arrayValueOSIJWFM, _arrayValueUvBedK5]
		const _helpergZJp3S0 = () => { return _returnValueX12ez1K };
		const _returnValueETDQ1w = await _HelpNkfLhi8.longestOptionTermLength(_cmdStAA6j, _helpergZJp3S0)
		const _commandsZTqcedY = {
		
	}
		const _returnValueQlJ2XC4 = -6.750087914344595;
		const __hasImplicitHelpCommandL9HEuTJ = () => { return _returnValueQlJ2XC4 };
		const __helpCommandnameAndArgsJekW7nz = {
		
	}
		const _returnValuefelKhw0 = 7.786113109590481;
		const _createCommandsLiLUGa = () => { return _returnValuefelKhw0 };
		const __helpCommandDescriptionIu5tkP = false;
		const _cmdizAtkWs = {
			"commands": _commandsZTqcedY,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandL9HEuTJ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsJekW7nz,
		"createCommand": _createCommandsLiLUGa,
		"_helpCommandDescription": __helpCommandDescriptionIu5tkP
	}
		const _returnValueRb9ndt = await _HelpNkfLhi8.visibleCommands(_cmdizAtkWs)
	});

	it('test for Help', async () => {
		const _HelpXMRVE7D = new Help()
		const _cmdgk3pvSV = "mEDRkbEaLHup7KCW2HdUm9d0N97EOBDZv5RAY5VhSYJjVq6MvT32c5TUPPq";
		const _helperIjzG7gM = "anriqTQ2w6gwjvTt7HJYFt4gvuK0oGgM5QVtUCieYh3Q2m2NEIgAzR1h9W6ExbSYZvNC";
		const _returnValuefCD3Bvu = await _HelpXMRVE7D.longestOptionTermLength(_cmdgk3pvSV, _helperIjzG7gM)
		const _returnValueOVARIhM = {
		
	}
		const _nameKMEruL8 = () => { return _returnValueOVARIhM };
		const _argumenttMZW0Z7 = {
			"name": _nameKMEruL8
	}
		const _returnValueDUfLDMM = await _HelpXMRVE7D.argumentTerm(_argumenttMZW0Z7)
		const _arrayValuez9fg2xU = -6.2025856956370085;
		const _arrayValueKtpu1On = -4.894649794991482;
		const _cmdpzotsnA = [_arrayValuez9fg2xU, _arrayValueKtpu1On]
		const _returnValueCu8SV3i = null;
		const _helperkDI272U = () => { return _returnValueCu8SV3i };
		const _returnValue0tXvds = await _HelpXMRVE7D.longestSubcommandTermLength(_cmdpzotsnA, _helperkDI272U)
	});

	it('test for Help', async () => {
		const _HelpW2vqokT = new Help()
		const _argChoicesu3TcJaT = {
		
	}
		const _negatesn5YePP = -8.182486006102751;
		const _defaultValue6gAAte = undefined;
		const _defaultValueDescriptionPHSv8AX = undefined;
		const _envVarnw83Rs = -1.6105606332244982;
		const _descriptionlDrjyCa = null;
		const _optionUsxBq8j = {
			"argChoices": _argChoicesu3TcJaT,
		"negate": _negatesn5YePP,
		"defaultValue": _defaultValue6gAAte,
		"defaultValueDescription": _defaultValueDescriptionPHSv8AX,
		"envVar": _envVarnw83Rs,
		"description": _descriptionlDrjyCa
	}
		const _returnValueTm75IJ0 = await _HelpW2vqokT.optionDescription(_optionUsxBq8j)
	});

	it('test for Help', async () => {
		const _Helpb9Oo3jc = new Help()
		const _cmdXvZLfNG = false;
		const _arrayValueGuS1qS = {
		
	}
		const _returnValueWTH3P6a = [_arrayValueGuS1qS]
		const _visibleArguments10hBVY = () => { return _returnValueWTH3P6a };
		const _arrayValueQlub4LG = {
		
	}
		const _arrayValuepS5RTW6 = []
		const _returnValueeNMlmsc = [_arrayValueQlub4LG, _arrayValuepS5RTW6]
		const _argumentTermB5sieOq = () => { return _returnValueeNMlmsc };
		const _helperyBFa4V = {
			"visibleArguments": _visibleArguments10hBVY,
		"argumentTerm": _argumentTermB5sieOq
	}
		const _returnValuerKk2rKg = await _Helpb9Oo3jc.longestArgumentTermLength(_cmdXvZLfNG, _helperyBFa4V)
		const _cmdFk7FfOl = true;
		const _helperAqGXvvG = new Help()
		const _returnValuezS8lfGJ = null;
		const _cmd5a1hiw = () => { return _returnValuezS8lfGJ };
		const _returnValueCD70QGq = await _helperAqGXvvG.commandUsage(_cmd5a1hiw)
		const _cmdsCKFolk = []
		const _returnValueYODCFAg = await _helperAqGXvvG.subcommandDescription(_cmdsCKFolk)
		const _cmdDERX5Vb = null;
		const _helperCxb3bB = "zboMcvpUSrSSPL06KkgtroUIGiPYO4w5eMXVSqbrJxQUeBcK58cOCSVXihBGxUiDYSUCCvYBUO6wvUiCV";
		const _returnValueVuIoHJQ = await _helperAqGXvvG.padWidth(_cmdDERX5Vb, _helperCxb3bB)
		const _returnValueeaviZXM = {
		
	}
		const _descriptionmtnlwZ = () => { return _returnValueeaviZXM };
		const _cmdd7uH5W = {
			"description": _descriptionmtnlwZ
	}
		const _returnValuejxMLjlr = await _helperAqGXvvG.commandDescription(_cmdd7uH5W)
		const _returnValued3hnDp6 = await _Helpb9Oo3jc.longestArgumentTermLength(_cmdFk7FfOl, _helperAqGXvvG)
	});

	it('test for Help', async () => {
		const _HelpVqRwROP = new Help()
		const _returnValueGjjBR6g = null;
		const _argumentn4fIFby = () => { return _returnValueGjjBR6g };
		const _returnValueniXgxiv = await _HelpVqRwROP.argumentDescription(_argumentn4fIFby)
		const _returnValuelJqwub = "KGrpgHqHpJXARq92Hsxk2223edB9I4uliwAixu4KTplUzEasmUWev8MmZI0JiQkblG9ffMB";
		const _str7V0brc = () => { return _returnValuelJqwub };
		const _widthjnscONV = 9.999039716850564;
		const _indentqW6NKjF = 2.9307539806954193;
		const _minColumnWidthqC58FO = 1.4784677565159754;
		const _returnValueQcmVe7i = await _HelpVqRwROP.wrap(_str7V0brc, _widthjnscONV, _indentqW6NKjF, _minColumnWidthqC58FO)
	});

	it('test for Help', async () => {
		const _HelpPchfSdu = new Help()
		const _argChoicesUSBs5DL = {
		
	}
		const _defaultValueOkgPwhx = undefined;
		const _arrayValueWmPbd61 = 4.211852031311205;
		const _defaultValueDescriptionHbA1pI7 = [_arrayValueWmPbd61]
		const _descriptionGJY65VH = undefined;
		const _argumentgztX5K = {
			"argChoices": _argChoicesUSBs5DL,
		"defaultValue": _defaultValueOkgPwhx,
		"defaultValueDescription": _defaultValueDescriptionHbA1pI7,
		"description": _descriptionGJY65VH
	}
		const _returnValueVpdS6T = await _HelpPchfSdu.argumentDescription(_argumentgztX5K)
		const _returnValueML3Avb = true;
		const _optionUeJ4jr8 = () => { return _returnValueML3Avb };
		const _returnValuedsobyN7 = await _HelpPchfSdu.optionDescription(_optionUeJ4jr8)
		const _cmdNdvwvD8 = []
		const _returnValuem3Str0f = await _HelpPchfSdu.visibleOptions(_cmdNdvwvD8)
		const _cmdvUBjQI1 = null;
		const _helperrBAx7dC = []
		const _returnValueTzPP2gL = await _HelpPchfSdu.longestArgumentTermLength(_cmdvUBjQI1, _helperrBAx7dC)
	});

	it('test for Help', async () => {
		const _HelpXT1YTwn = new Help()
		const _returnValueauNfGE7 = -6.866513171795221;
		const _returnValueMMhOYWx = () => { return _returnValueauNfGE7 };
		const _matchWF11xnd = () => { return _returnValueMMhOYWx };
		const _returnValuez9L8MoY = {
		
	}
		const _substrXtqQ0zi = () => { return _returnValuez9L8MoY };
		const _strEmIweXs = {
			"match": _matchWF11xnd,
		"substr": _substrXtqQ0zi
	}
		const _widthwu2lUny = -6.339622260270824;
		const _indentkPBHZQE = 9.646027675297798;
		const _minColumnWidthMlTdMnI = undefined;
		const _returnValueRBAYko6 = await _HelpXT1YTwn.wrap(_strEmIweXs, _widthwu2lUny, _indentkPBHZQE, _minColumnWidthMlTdMnI)
		const _returnValuegi2Tut = null;
		const _namePh0ZFgE = () => { return _returnValuegi2Tut };
		const _descriptionmwADiO = false;
		const _cmdfIXPYBy = new Argument(_namePh0ZFgE, _descriptionmwADiO)
		const _returnValueLxXdQd1 = await _cmdfIXPYBy.argRequired()
		const _returnValuezrblfQ5 = await _HelpXT1YTwn.subcommandDescription(_cmdfIXPYBy)
		const _arrayValuenb8sI7S = null;
		const _cmdu5q8ze9 = [_arrayValuenb8sI7S]
		const _returnValueHWonx4r = await _HelpXT1YTwn.subcommandDescription(_cmdu5q8ze9)
		const _returnValueMfUElO3 = null;
		const _cmdV1p83a3 = () => { return _returnValueMfUElO3 };
		const _returnValueL03i3pq = await _HelpXT1YTwn.visibleCommands(_cmdV1p83a3)
	});

	it('test for Help', async () => {
		const _HelpA1eT8V = new Help()
		const _strLtTh2yZ = "h7KVU1GQtfR48OCxf2227wlZGfSZlU9PVgIsuDLqUJi82ocRhshUTpuZasEm0BzztQZ6";
		const _widthISJzeY = true;
		const _indentVQtnHzQ = -1.1230187885145853;
		const _minColumnWidthIOQgG90 = -5.744661691507308;
		const _returnValueBQPPrLH = await _HelpA1eT8V.wrap(_strLtTh2yZ, _widthISJzeY, _indentVQtnHzQ, _minColumnWidthIOQgG90)
		const _returnValuejRWXrC2 = false;
		const _cmdofnEo0w = () => { return _returnValuejRWXrC2 };
		const _helperJxZv0Pc = "ZQIWXapCEjS2rtcHNxhE";
		const _returnValuekzoo7dl = await _HelpA1eT8V.longestArgumentTermLength(_cmdofnEo0w, _helperJxZv0Pc)
		const _cmdVxdOKEI = false;
		const _helperSr7YAJ = "t8PwvctxIUYaHHoiYNenvq6OJSgzeoY2OEviJlVCxSrvyLrvnDXFGi6jU";
		const _returnValuedPZ8DUj = await _HelpA1eT8V.longestArgumentTermLength(_cmdVxdOKEI, _helperSr7YAJ)
	});

	it('test for Help', async () => {
		const _Helprahk6ew = new Help()
		const __nameOwjS1zR = "PFOYMPczd7aTSiWO0z";
		const __aliasesb5FvsFI = {
		
	}
		const _returnValueJR6NN3f = true;
		const _parentUnS81EU = () => { return _returnValueJR6NN3f };
		const _arrayValueB8qo1w = "vLBqrzK6FSFdsDVEkGhiCSUgZXqJdHeCSoUuREXgkXKg5wGfJSNEGnEBzBsugIC96eUxUGTXAOplQQjoocGYKomTjblL3XZP7l";
		const _arrayValueMgi9I5F = 2.950520047140639;
		const _arrayValuee9cGKCu = undefined;
		const _arrayValueccS869s = "Ba";
		const _arrayValueX35RqTd = {
		
	}
		const _arrayValuedrTawiK = [_arrayValueccS869s, _arrayValueX35RqTd]
		const _arrayValueE8Uiizo = [_arrayValuee9cGKCu, _arrayValuedrTawiK]
		const _arrayValueMoomgPS = false;
		const _arrayValueMR1HrZ = [_arrayValueB8qo1w, _arrayValueMgi9I5F, _arrayValueE8Uiizo, _arrayValueMoomgPS]
		const _arrayValuexTiNdUW = undefined;
		const _arrayValueSbGVeM1 = undefined;
		const _returnValueK0LIx7L = [_arrayValueMR1HrZ, _arrayValuexTiNdUW, _arrayValueSbGVeM1]
		const _usagem0pi2j7 = () => { return _returnValueK0LIx7L };
		const _cmdBssWX8 = {
			"_name": __nameOwjS1zR,
		"_aliases": __aliasesb5FvsFI,
		"parent": _parentUnS81EU,
		"usage": _usagem0pi2j7
	}
		const _returnValueA9TJ7jl = await _Helprahk6ew.commandUsage(_cmdBssWX8)
		const _cmdG2o8k0I = "449mjQnFsTB4j27C1l5HbhDgSgOhHLey9GOi29wljq9OiLK5tiDXu1";
		const _returnValueuiTfGAR = await _Helprahk6ew.subcommandDescription(_cmdG2o8k0I)
		const _cmdZd3Tsls = null;
		const _returnValueHF50BnC = await _Helprahk6ew.subcommandTerm(_cmdZd3Tsls)
		const _cmdcEQ67gh = undefined;
		const _returnValueXDWedWL = undefined;
		const _helper8IE2Vk = () => { return _returnValueXDWedWL };
		const _returnValueUgz9o6i = await _Helprahk6ew.longestOptionTermLength(_cmdcEQ67gh, _helper8IE2Vk)
	});

	it('test for Help', async () => {
		const _HelpKjBQzYY = new Help()
		const _returnValuePdwpcE = {
		
	}
		const _matchz0cEFkv = () => { return _returnValuePdwpcE };
		const _returnValuej4jONSk = null;
		const _substrOR0Ubh3 = () => { return _returnValuej4jONSk };
		const _strukXwVAf = {
			"match": _matchz0cEFkv,
		"substr": _substrOR0Ubh3
	}
		const _widthyKyJ4CX = 0.7383067331679065;
		const _indentPVxbCHU = 9.849791658455835;
		const _minColumnWidthFFsObi = 6.657077751708275;
		const _returnValuedPXcOFR = await _HelpKjBQzYY.wrap(_strukXwVAf, _widthyKyJ4CX, _indentPVxbCHU, _minColumnWidthFFsObi)
		const _returnValuemC4D7yd = undefined;
		const _returnValueCdC9PDF = () => { return _returnValuemC4D7yd };
		const _matchoMnoKQH = () => { return _returnValueCdC9PDF };
		const _returnValueICEbVNJ = null;
		const _substrU3w59UN = () => { return _returnValueICEbVNJ };
		const _strlSEMYNJ = {
			"match": _matchoMnoKQH,
		"substr": _substrU3w59UN
	}
		const _widthoxhT85l = -5.8605814382593415;
		const _indentzjkefmJ = -8.170918038767457;
		const _minColumnWidthNQXBZ2X = 0.48221126685620774;
		const _returnValuePp7Cnjw = await _HelpKjBQzYY.wrap(_strlSEMYNJ, _widthoxhT85l, _indentzjkefmJ, _minColumnWidthNQXBZ2X)
		const _optionr4zqP76 = "XT573d2C8iyVo7C76Ppduui6LKcVwJfjxQduf";
		const _returnValueWBkVBqT = await _HelpKjBQzYY.optionDescription(_optionr4zqP76)
		const _flagsXVur3fg = "bTKfcgETSWwmfPI6TJeURDRvNSnTP9ZXtLEXQI1Ch72j45FzLos6TLeC1nVMIY0hyeEYKwXPVMHB";
		const _descriptionfwUGHZq = -4.806507438791481;
		const _cmdAnZZ7H5 = new Option(_flagsXVur3fg, _descriptionfwUGHZq)
		const _values8zraHf = "sE2DnpT";
		const _returnValuenKoXNA = await _cmdAnZZ7H5.choices(_values8zraHf)
		const _fnTSoh3UA = null;
		const _returnValueNTh68Po = await _cmdAnZZ7H5.argParser(_fnTSoh3UA)
		const _returnValuelwN9wlf = await _cmdAnZZ7H5.attributeName()
		const _returnValueU68Zk5A = await _HelpKjBQzYY.commandDescription(_cmdAnZZ7H5)
	});

	it('test for Help', async () => {
		const _HelpRK9XXQw = new Help()
		const _strYtfO2QG = "aqBr87uEL";
		const _widthhtF1Upa = -3.4029697872981117;
		const _indentl3e4nzJ = 1.445936932819869;
		const _minColumnWidthevfn6ZF = -2.0244405406844725;
		const _returnValueRipngG6 = await _HelpRK9XXQw.wrap(_strYtfO2QG, _widthhtF1Upa, _indentl3e4nzJ, _minColumnWidthevfn6ZF)
		const _cmdSGqxs9V = undefined;
		const _helperLnxSMp = "y";
		const _returnValueyGtY9kV = await _HelpRK9XXQw.padWidth(_cmdSGqxs9V, _helperLnxSMp)
	});

	it('test for Help', async () => {
		const _HelpnlU0lt8 = new Help()
		const _flagsPyoRjrK = "fgLQxKVfT9jrdFLq359xz8Qvm0H6mE25u2Oafam0HuYN2sRvd3GG2nk83Vx5qsyZMpCHhkkoFLKsxbheSYmS15suzVD";
		const _arrayValuebgCNOXf = true;
		const _arrayValuev0jh8ax = undefined;
		const _descriptionPDUERJn = [_arrayValuebgCNOXf, _arrayValuev0jh8ax]
		const _optionSfjf08T = new Option(_flagsPyoRjrK, _descriptionPDUERJn)
		const _valueQWgS0i = undefined;
		const _descriptionuX1uJIY = undefined;
		const _returnValueGYjuF4z = await _optionSfjf08T.default(_valueQWgS0i, _descriptionuX1uJIY)
		const _hidegbumdhd = -5.894483097494685;
		const _returnValueD55zxsm = await _optionSfjf08T.hideHelp(_hidegbumdhd)
		const _valueYzL2oms = "HB7akpl9LZKHy6wem9sA7PYQ";
		const _returnValuePT9uYQ6 = {
		
	}
		const _previousG1fIjCc = () => { return _returnValuePT9uYQ6 };
		const _returnValueZxzoof = await _optionSfjf08T._concatValue(_valueYzL2oms, _previousG1fIjCc)
		const _returnValueC7ZQylP = await _HelpnlU0lt8.optionDescription(_optionSfjf08T)
		const _nameRU1raQ9 = "ONKjCV0WscNtx1iGNCKudwso8McAHNI4wbyGILyVNg3FACVwlUXrXJq";
		const _descriptionw1hJ3jN = true;
		const _argumentNSxium = new Argument(_nameRU1raQ9, _descriptionw1hJ3jN)
		const _returnValuewoNupzF = await _argumentNSxium.name()
		const _valuelnueAJU = []
		const _descriptionh1GcfmY = undefined;
		const _returnValuemVcbyGx = await _argumentNSxium.default(_valuelnueAJU, _descriptionh1GcfmY)
		const _returnValuefnzcR7n = await _argumentNSxium.argRequired()
		const _returnValueTpjATvZ = undefined;
		const _valueNIDrz7l = () => { return _returnValueTpjATvZ };
		const _descriptionErc6MF8 = undefined;
		const _returnValueeOGGTLm = await _argumentNSxium.default(_valueNIDrz7l, _descriptionErc6MF8)
		const _fnn4N39jE = undefined;
		const _returnValuevSKlg64 = await _argumentNSxium.argParser(_fnn4N39jE)
		const _returnValueDOK15fV = await _HelpnlU0lt8.argumentDescription(_argumentNSxium)
		const _namexkRvKj5 = "h7ljVkTYTR6ixSyJAtAiqqz33jtylX7PN8p";
		const _descriptionf49wmpc = false;
		const _cmdebiFvzb = new Argument(_namexkRvKj5, _descriptionf49wmpc)
		const _returnValuek4PUWID = await _cmdebiFvzb.argRequired()
		const _valueszE10kZq = "CxWmohLYnWSYfjb9QJ0hIot6rxxYp7KXEjow5yU4qw55";
		const _returnValuepx3iU1n = await _cmdebiFvzb.choices(_valueszE10kZq)
		const _returnValuezjcwgW0 = await _cmdebiFvzb.argRequired()
		const _returnValuekEyLfKo = await _HelpnlU0lt8.subcommandTerm(_cmdebiFvzb)
		const _cmdf7udNM0 = -7.792928512432896;
		const _helperxeZTIG4 = "nwDcoRz1Ae";
		const _returnValueFl7oXft = await _HelpnlU0lt8.longestOptionTermLength(_cmdf7udNM0, _helperxeZTIG4)
	});

	it('test for Help', async () => {
		const _HelpF6KyO7C = new Help()
		const _returnValueF5gneK5 = "74lcmYEyaHrxXOFzqg5me";
		const _sliceNshqcrn = () => { return _returnValueF5gneK5 };
		const _nameYq2gzTu = {
			"slice": _sliceNshqcrn
	}
		const _descriptionBhUndIx = undefined;
		const _optionChA75H2 = new Argument(_nameYq2gzTu, _descriptionBhUndIx)
		const _arrayValueU3UMYJo = undefined;
		const _valuey7lEcyE = [_arrayValueU3UMYJo]
		const _arrayValueoJQA7GW = -8.390400218661993;
		const _descriptionpcfo3R6 = [_arrayValueoJQA7GW]
		const _returnValueh67uSOO = await _optionChA75H2.default(_valuey7lEcyE, _descriptionpcfo3R6)
		const _returnValuejTIKMEc = await _optionChA75H2.name()
		const _returnValuem7aSj3B = await _HelpF6KyO7C.optionDescription(_optionChA75H2)
		const _returnValueIQIbGa9 = null;
		const _argumentIvCE9zz = () => { return _returnValueIQIbGa9 };
		const _returnValueS5MToQA = await _HelpF6KyO7C.argumentTerm(_argumentIvCE9zz)
		const _cmdYyvtPDn = {
		
	}
		const _helpereuGtiY = "dpg1xUwTG78x3ZtRvLGj4FZ1ZDw9op7fK3xlGiFM2oSE5EpBP8ftvF4D2ahLU9Y";
		const _returnValueUJPze83 = await _HelpF6KyO7C.longestOptionTermLength(_cmdYyvtPDn, _helpereuGtiY)
	});

	it('test for Help', async () => {
		const _HelpdZTVh98 = new Help()
		const _nameXteWbc9 = false;
		const _cmdk26rLq9 = new Command(_nameXteWbc9)
		const _configurationxTK6Va8 = undefined;
		const _returnValuevRhbRyW = await _cmdk26rLq9.configureOutput(_configurationxTK6Va8)
		const _returnValueBdCb0Pj = await _cmdk26rLq9._hasImplicitHelpCommand()
		const _flags70wtUe = true;
		const _descriptionQgjwmJ9 = {
		
	}
		const _returnValueTihNVe9 = await _cmdk26rLq9.helpOption(_flags70wtUe, _descriptionQgjwmJ9)
		const _returnValuePnM6N62 = await _HelpdZTVh98.visibleCommands(_cmdk26rLq9)
		const _returnValueIcbtxhO = "2wfNuX9KlXBaJsMtUA1QkKgUGNmORzxToY0VTYbKFDo";
		const _returnValuebt8iFpd = () => { return _returnValueIcbtxhO };
		const _optionq713kzO = () => { return _returnValuebt8iFpd };
		const _returnValueYK9wTXT = await _HelpdZTVh98.optionTerm(_optionq713kzO)
	});

	it('test for Help', async () => {
		const _HelpUFzyVPR = new Help()
		const _nameb1SxqQ1 = undefined;
		const _cmdcL7Qv3f = new Command(_nameb1SxqQ1)
		const _arrayValuePLFXsk = "RlH9lR4Y7kxLQUhOkzrZA8fmX6g3B7VMExgu9g3by5O5OnNBJN7TPQVO1HY";
		const _keyCP0IZjW = [_arrayValuePLFXsk]
		const _arrayValueLHDIWpr = false;
		const _arrayValuerQgLLqw = undefined;
		const _valuew5HC166 = [_arrayValueLHDIWpr, _arrayValuerQgLLqw]
		const _returnValueEwT2X6I = await _cmdcL7Qv3f.setOptionValue(_keyCP0IZjW, _valuew5HC166)
		const _aliasesgCXwwkQ = undefined;
		const _returnValueZ0bQW9 = await _cmdcL7Qv3f.aliases(_aliasesgCXwwkQ)
		const _promisepPqeIBb = {
		
	}
		const _eventyzan91 = "UspeIbu1kVyWqSQz3SzJQY1nDuq7";
		const _returnValueq3UcQCE = await _cmdcL7Qv3f._chainOrCallHooks(_promisepPqeIBb, _eventyzan91)
		const _aliasdIAvbk = {
		
	}
		const _returnValuev5JaMH6 = await _cmdcL7Qv3f.alias(_aliasdIAvbk)
		const _returnValueXNotdwR = await _HelpUFzyVPR.commandUsage(_cmdcL7Qv3f)
		const _cmdkipumYx = "XmiowNCWmGklfQBdtvE7wlme5YsRxZrnmmUE2";
		const _returnValueGhdTKKe = await _HelpUFzyVPR.visibleOptions(_cmdkipumYx)
		const _argChoicesRHLmRVH = {
		
	}
		const _negateIT53z1 = -5.619819842246728;
		const _defaultValuepqazUkH = undefined;
		const _defaultValueDescriptionioEVmr = "XBCxqfEG3s5NQnnsxeaqvibowP4iicxXc0jTMvNcChXCjdBNIKuo";
		const _envVarouNdFmm = undefined;
		const _descriptiontW85I1S = undefined;
		const _optionUZF2nGh = {
			"argChoices": _argChoicesRHLmRVH,
		"negate": _negateIT53z1,
		"defaultValue": _defaultValuepqazUkH,
		"defaultValueDescription": _defaultValueDescriptionioEVmr,
		"envVar": _envVarouNdFmm,
		"description": _descriptiontW85I1S
	}
		const _returnValueYdoiydD = await _HelpUFzyVPR.optionDescription(_optionUZF2nGh)
		const _cmdUdVV6lq = "BFdQ1ur5bmkJAq1cwnWLkrfiUsKgltcmXepWnKxaRoRdXQCZddi8xbBLMd684e5";
		const _returnValueKsxtHad = await _HelpUFzyVPR.visibleOptions(_cmdUdVV6lq)
	});

	it('test for Help', async () => {
		const _Helpr0vyX9o = new Help()
		const _nameUFdQbKq = undefined;
		const _cmdRG9Ue6R = new Command(_nameUFdQbKq)
		const _promiseJ47HEny = {
		
	}
		const _eventTN96CKc = "vjgmVcF7XCvx0YWdLGlvSqOPGHmK7QZ577xoNOFIIoYFzFzHYPER";
		const _returnValueO22SDk = await _cmdRG9Ue6R._chainOrCallHooks(_promiseJ47HEny, _eventTN96CKc)
		const _returnValuebKspwt = await _Helpr0vyX9o.visibleOptions(_cmdRG9Ue6R)
		const _cmdyJeHH2e = "25iv8kNlQPkdUC5BmKjTklKn4SYA8WJbCgE0ft9cRK9vrWKkHHr242CyzYrNRb5e9";
		const _returnValueTpbxKm2 = await _Helpr0vyX9o.subcommandTerm(_cmdyJeHH2e)
		const _returnValueu9mpYO5 = -1.6014368348349706;
		const _cmdLYvVBAd = () => { return _returnValueu9mpYO5 };
		const _helperHdc8C8K = "IHyRARVQwShywDUuachZvjdgiRsf4tCticZexlmy4Dkk4JAaVDmEbM1V47w";
		const _returnValuer7Lmufa = await _Helpr0vyX9o.longestArgumentTermLength(_cmdLYvVBAd, _helperHdc8C8K)
	});
})