export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helppc7xn72 = new Help()
		const _arrayValueXvcfCgU = 8.671992349264713;
		const _arrayValueVfiIv1f = "pXi35BlbDgdouOvaRbfj1VwkJU4a2GXCKHmJ30v4NvvoDxUr3bgXyd";
		const _arrayValueEzFavJ = [_arrayValueXvcfCgU, _arrayValueVfiIv1f]
		const _arrayValuezUh2sQB = null;
		const _arrayValueV2kuzu = null;
		const _arrayValueciimlMe = "2hbTyflbDVSixKluCGlYh4r2cnIdc4SquTOIhjnbGvlQXhL1GTV";
		const _cmdWn69p2S = [_arrayValueEzFavJ, _arrayValuezUh2sQB, _arrayValueV2kuzu, _arrayValueciimlMe]
		const _helperKEV5PQd = new Help()
		const _returnValueTyX3JcD = -3.9144756449846705;
		const _arrayValueUCnT5zX = () => { return _returnValueTyX3JcD };
		const _namec12mgW = [_arrayValueUCnT5zX]
		const _descriptionsBVcLkH = undefined;
		const _argumentcjNX6M = new Argument(_namec12mgW, _descriptionsBVcLkH)
		const _returnValueuJyOdT = await _argumentcjNX6M.argOptional()
		const _returnValuet9XQ1NQ = 4.5082914527020534;
		const _valuesP5kvL85 = () => { return _returnValuet9XQ1NQ };
		const _returnValuek397ULR = await _argumentcjNX6M.choices(_valuesP5kvL85)
		const _returnValueKx7EDuB = await _helperKEV5PQd.argumentDescription(_argumentcjNX6M)
		const _returnValueV2caEBl = await _Helppc7xn72.formatHelp(_cmdWn69p2S, _helperKEV5PQd)
		const _arrayValuecSM3FJ2 = true;
		const _arrayValueaExL3lC = undefined;
		const _cmdpYmg9e4 = [_arrayValuecSM3FJ2, _arrayValueaExL3lC]
		const _helperqARiQJ = []
		const _returnValueIXy1VmQ = await _Helppc7xn72.longestArgumentTermLength(_cmdpYmg9e4, _helperqARiQJ)
		const __argsDescriptiondKKAQgf = {
		
	}
		const __argsxrkGrUA = {
		
	}
		const _cmdC873nyX = {
			"_argsDescription": __argsDescriptiondKKAQgf,
		"_args": __argsxrkGrUA
	}
		const _returnValuejYJJK9m = await _Helppc7xn72.visibleArguments(_cmdC873nyX)
		const _returnValueOfaeju = "FofCXt9VFaddCcnhm9nt1ithUi4sqfoRy3EoCK0goC67XPvMnOc";
		const _descriptionumPzEU1 = () => { return _returnValueOfaeju };
		const _cmdSQjtGoA = {
			"description": _descriptionumPzEU1
	}
		const _returnValueTBGdAb = await _Helppc7xn72.commandDescription(_cmdSQjtGoA)
		const _arrayValueflM0OvA = undefined;
		const _arrayValuetZj4Wzq = 5.417055848555464;
		const _cmdNPExnyP = [_arrayValueflM0OvA, _arrayValuetZj4Wzq]
		const _returnValueoTi8DTo = await _Helppc7xn72.visibleOptions(_cmdNPExnyP)
	});

	it('test for Help', async () => {
		const _HelpBwzIyCe = new Help()
		const _cmdppyremv = "ioTTpSvcbnRmcpswdhjE5TrGkpzHD90Dnw";
		const _returnValueLtuIyBH = await _HelpBwzIyCe.commandUsage(_cmdppyremv)
		const _arrayValuejw9IcEn = undefined;
		const _arrayValueFNcnIYr = {
		
	}
		const _arrayValuev8gTldg = -1.0635440731517694;
		const _optionUPOZOYE = [_arrayValuejw9IcEn, _arrayValueFNcnIYr, _arrayValuev8gTldg]
		const _returnValueYC1Rwfs = await _HelpBwzIyCe.optionDescription(_optionUPOZOYE)
	});

	it('test for Help', async () => {
		const _HelpYASn6OQ = new Help()
		const _nameV6kjQiZ = -0.06188002638700496;
		const _cmdSt66WFS = new Command(_nameV6kjQiZ)
		const _returnValuewrulKb1 = await _cmdSt66WFS._hasImplicitHelpCommand()
		const _contextOptionsuMl5Owd = -7.926512987113638;
		const _returnValueD9vRvbz = await _cmdSt66WFS.helpInformation(_contextOptionsuMl5Owd)
		const _returnValueTo7cVUk = await _HelpYASn6OQ.subcommandTerm(_cmdSt66WFS)
		const _nameqEx6aLb = undefined;
		const _optionDUqYe8p = new Command(_nameqEx6aLb)
		const _namesSrWao94 = []
		const _returnValuerrk0e7o = await _optionDUqYe8p.arguments(_namesSrWao94)
		const _commandNameF2z4arr = null;
		const _operandsNo6Z4Px = "z1jwSQv649oTAGtHj5D17A2frHsk6UKsOf3TpZ74RNClqB5I89S3avTMXXXKhR7QwMqHpYLsDfNL";
		const _returnValueF3DNsUH = {
		
	}
		const _unknownTvdmX5f = () => { return _returnValueF3DNsUH };
		const _returnValueZtJFqd = await _optionDUqYe8p._dispatchSubcommand(_commandNameF2z4arr, _operandsNo6Z4Px, _unknownTvdmX5f)
		const _arrayValueCcVk0lA = undefined;
		const _arrayValuexq0fj5Y = {
		
	}
		const _arrayValueSUGOOyF = [_arrayValuexq0fj5Y]
		const _keyizztdmb = [_arrayValueCcVk0lA, _arrayValueSUGOOyF]
		const _returnValuem4YYjn7 = await _optionDUqYe8p.getOptionValueSource(_keyizztdmb)
		const _strGpdwmnp = {
		
	}
		const _flags4TbLqI = {
		
	}
		const _descriptionVVAbCrl = {
		
	}
		const _returnValue1Xy4QW = await _optionDUqYe8p.version(_strGpdwmnp, _flags4TbLqI, _descriptionVVAbCrl)
		const _returnValueu17yGEr = await _HelpYASn6OQ.optionDescription(_optionDUqYe8p)
		const _returnValuejqO8cJo = null;
		const _argumentd3V2JI = () => { return _returnValuejqO8cJo };
		const _returnValueY70tSpm = await _HelpYASn6OQ.argumentDescription(_argumentd3V2JI)
	});

	it('test for Help', async () => {
		const _Helpwl2X0M9 = new Help()
		const _returnValueOvMWXr = false;
		const _argumentFIZM440 = () => { return _returnValueOvMWXr };
		const _returnValueQNL1hwK = await _Helpwl2X0M9.argumentTerm(_argumentFIZM440)
		const _arrayValueZ7oTBHW = false;
		const _arrayValueaDLs0r = {
		
	}
		const _cmdwaIgYj = [_arrayValueZ7oTBHW, _arrayValueaDLs0r]
		const _returnValueTVVwEcY = await _Helpwl2X0M9.commandDescription(_cmdwaIgYj)
		const _argumentLGDBeoi = "Vw5zGQQ7YoUe768Hljr";
		const _returnValuecLGiMI = await _Helpwl2X0M9.argumentTerm(_argumentLGDBeoi)
	});

	it('test for Help', async () => {
		const _Helpyo1FsHR = new Help()
		const _returnValueksvectM = null;
		const _nameKrHhtJo = () => { return _returnValueksvectM };
		const _argumentAYLBTo = {
			"name": _nameKrHhtJo
	}
		const _returnValueGv8H3qB = await _Helpyo1FsHR.argumentTerm(_argumentAYLBTo)
		const _cmdcvyapl = true;
		const _helpereJpw8Ba = "cybTuFE7lCA6AlbOXXKXnHzye7cN3OItAuKEztKchRScyyMNYcjeGXiXKk";
		const _returnValueHsz4cA = await _Helpyo1FsHR.longestArgumentTermLength(_cmdcvyapl, _helpereJpw8Ba)
		const _cmdFZRMARp = undefined;
		const _arrayValueEsKUoWt = undefined;
		const _arrayValueVcPnsXh = "vGdhVV";
		const _arrayValuealGkpKB = false;
		const _arrayValuekjhtYh = [_arrayValueVcPnsXh, _arrayValuealGkpKB]
		const _helperHa0KJy = [_arrayValueEsKUoWt, _arrayValuekjhtYh]
		const _returnValuemiF44K9 = await _Helpyo1FsHR.longestOptionTermLength(_cmdFZRMARp, _helperHa0KJy)
		const _returnValueUexCMB4 = false;
		const _returnValueBSa8vmb = () => { return _returnValueUexCMB4 };
		const _optionRurGsJG = () => { return _returnValueBSa8vmb };
		const _returnValuew4DkrvS = await _Helpyo1FsHR.optionDescription(_optionRurGsJG)
		const _returnValuexVQ7ubK = undefined;
		const _nameapje1gj = () => { return _returnValuexVQ7ubK };
		const _cmdbkxyNrY = new Command(_nameapje1gj)
		const _returnValuexylwVk9 = false;
		const _returnValueSVkXFgh = () => { return _returnValuexylwVk9 };
		const _flagsKrRYaK9 = () => { return _returnValueSVkXFgh };
		const _descriptionwCFvqYI = undefined;
		const _configigMKUp = new Option(_flagsKrRYaK9, _descriptionwCFvqYI)
		const _hidezHTrukq = true;
		const _returnValuelb0adYa = await _configigMKUp.hideHelp(_hidezHTrukq)
		const _fnkARC7Ya = {
		
	}
		const _returnValueWrF6X2A = await _configigMKUp.argParser(_fnkARC7Ya)
		const _flagsV0pBe03 = true;
		const _descriptionraxSoiE = "B5ERkB3TPPG1Fkq7bMNUIhYKnika89WYATEg8hBMuF4pK6IhugLoEeoCLSHvb";
		const _returnValueua46ESz = null;
		const _fnjXqhMbo = () => { return _returnValueua46ESz };
		const _defaultValuef1HTlyJ = undefined;
		const _returnValueQB73Qme = await _cmdbkxyNrY._optionEx(_configigMKUp, _flagsV0pBe03, _descriptionraxSoiE, _fnjXqhMbo, _defaultValuef1HTlyJ)
		const _strNieJZmX = undefined;
		const _returnValueE8b9eT = await _cmdbkxyNrY.name(_strNieJZmX)
		const _returnValuebinIcrs = await _Helpyo1FsHR.commandUsage(_cmdbkxyNrY)
	});

	it('test for Help', async () => {
		const _HelpVe5JEnt = new Help()
		const _descriptionPegL3aK = true;
		const _cmdEWSTfvY = {
			"description": _descriptionPegL3aK
	}
		const _returnValueK0YLD3 = await _HelpVe5JEnt.subcommandDescription(_cmdEWSTfvY)
		const _returnValueSOiu4ZC = null;
		const _nameXsge7Oe = () => { return _returnValueSOiu4ZC };
		const _argumentBs2YVfe = {
			"name": _nameXsge7Oe
	}
		const _returnValueELM9m2Q = await _HelpVe5JEnt.argumentTerm(_argumentBs2YVfe)
		const _cmdprbSz2m = {
		
	}
		const _arrayValueySBmhKP = "mIlKnaaalTKf10Fk5RUevsgaRZbCkrBRLeqwsKqBt3RQtKocFjpbOcmtQmeAoNWTVoU1u68WppTBXpDYN06GpUVRCbkjo83lSa";
		const _arrayValueCwLymHQ = true;
		const _helperkKSp0v = [_arrayValueySBmhKP, _arrayValueCwLymHQ]
		const _returnValuedU3yBOA = await _HelpVe5JEnt.longestSubcommandTermLength(_cmdprbSz2m, _helperkKSp0v)
	});

	it('test for Help', async () => {
		const _Helps2YbqdJ = new Help()
		const _cmdAMHUGTA = false;
		const _sortSubcommandsu7TIFDy = undefined;
		const _returnValuejaQFLJ7 = false;
		const _subcommandTermrbSBhqT = () => { return _returnValuejaQFLJ7 };
		const _helperClU9f4D = {
			"sortSubcommands": _sortSubcommandsu7TIFDy,
		"subcommandTerm": _subcommandTermrbSBhqT
	}
		const _returnValues5BAP9E = await _Helps2YbqdJ.longestSubcommandTermLength(_cmdAMHUGTA, _helperClU9f4D)
		const _returnValueytYEOJ = "7OV2gDWd2SDRLA4OI2rGEr65Jlloh9sfR2idEmqiIvGWBBdKwRocxWNaB7YXeYgf1L1eKA";
		const _descriptionyoOfFra = () => { return _returnValueytYEOJ };
		const _cmdDofezb = {
			"description": _descriptionyoOfFra
	}
		const _returnValueXzAP8Nd = await _Helps2YbqdJ.subcommandDescription(_cmdDofezb)
		const _cmdUE5r3xA = -9.18746404532338;
		const _sortSubcommandsUANwsuG = undefined;
		const _arrayValuey9Bw8kt = false;
		const _arrayValueSNgGAAe = null;
		const _returnValuepHLsofr = [_arrayValuey9Bw8kt, _arrayValueSNgGAAe]
		const _subcommandTerm1Js2yz = () => { return _returnValuepHLsofr };
		const _helperlYHvGQG = {
			"sortSubcommands": _sortSubcommandsUANwsuG,
		"subcommandTerm": _subcommandTerm1Js2yz
	}
		const _returnValue1EgZmy = await _Helps2YbqdJ.longestSubcommandTermLength(_cmdUE5r3xA, _helperlYHvGQG)
	});

	it('test for Help', async () => {
		const _HelpRI70Enq = new Help()
		const __argsDescriptionqVfGwYt = {
		
	}
		const __argsLgJ5ix = true;
		const _cmdH5EljKU = {
			"_argsDescription": __argsDescriptionqVfGwYt,
		"_args": __argsLgJ5ix
	}
		const _returnValueKz6DsMJ = await _HelpRI70Enq.visibleArguments(_cmdH5EljKU)
	});

	it('test for Help', async () => {
		const _HelpqUaX2G3 = new Help()
		const _cmdXwgyn3L = "EzKl7wIeumQpJ63Mi7RGPc";
		const _returnValuezFk5oNZ = await _HelpqUaX2G3.commandDescription(_cmdXwgyn3L)
		const __argsEylQznW = {
		
	}
		const __nameaUb80eq = -4.4750615213239255;
		const __aliasesxWergI4 = {
		
	}
		const _optionsyrFrMuR = {
		
	}
		const _cmdyLslQOY = {
			"_args": __argsEylQznW,
		"_name": __nameaUb80eq,
		"_aliases": __aliasesxWergI4,
		"options": _optionsyrFrMuR
	}
		const _returnValuemlrETHz = await _HelpqUaX2G3.subcommandTerm(_cmdyLslQOY)
	});

	it('test for Help', async () => {
		const _HelpjFdvCaN = new Help()
		const _returnValueRFtwEFR = false;
		const _argumenty7T2XAg = () => { return _returnValueRFtwEFR };
		const _returnValueGhRlPuP = await _HelpjFdvCaN.argumentDescription(_argumenty7T2XAg)
		const _cmdBTynM84 = "h1UWyBLlXmUSoNEqB61FAVSX9Uu7g9wc3AujzK1lqmwJMweQ1r3OIuqGLQAB6v16RIxHVGX";
		const _returnValueIpbqkvZ = await _HelpjFdvCaN.subcommandTerm(_cmdBTynM84)
	});

	it('test for Help', async () => {
		const _HelpUzyWyIm = new Help()
		const _cmdkSM3hsk = null;
		const _arrayValueQZurK5 = {
		
	}
		const _arrayValueRhw5FRE = null;
		const _helperZNxfI6H = [_arrayValueQZurK5, _arrayValueRhw5FRE]
		const _returnValuelEWqX0L = await _HelpUzyWyIm.longestOptionTermLength(_cmdkSM3hsk, _helperZNxfI6H)
		const _optionstleEUGa = {
		
	}
		const _returnValueBdxSwIJ = "rYKxGqVtIocArKfHgtptpN6eI64peBRuMZeUERDZd5Ux4e5plX2S7sHpJBLsPhoe8wUJPNqOzgKS3";
		const __hasHelpOptionfDtwlbi = () => { return _returnValueBdxSwIJ };
		const __helpShortFlagBBF3KjE = 0.7853455281920585;
		const _returnValueOZusQMo = true;
		const __findOptionUd6iNWZ = () => { return _returnValueOZusQMo };
		const __helpLongFlagvo5WuZz = undefined;
		const _returnValueD3AZO3n = null;
		const _createOptionHaGWPgc = () => { return _returnValueD3AZO3n };
		const __helpDescriptionONDWRG = {
		
	}
		const __helpFlagswQoiJlz = {
		
	}
		const _cmdttgYUCG = {
			"options": _optionstleEUGa,
		"_hasHelpOption": __hasHelpOptionfDtwlbi,
		"_helpShortFlag": __helpShortFlagBBF3KjE,
		"_findOption": __findOptionUd6iNWZ,
		"_helpLongFlag": __helpLongFlagvo5WuZz,
		"createOption": _createOptionHaGWPgc,
		"_helpDescription": __helpDescriptionONDWRG,
		"_helpFlags": __helpFlagswQoiJlz
	}
		const _returnValue1xQnEL = await _HelpUzyWyIm.visibleOptions(_cmdttgYUCG)
		const _arrayValueyPmVXBH = 2.0658828185362754;
		const _arrayValueNNxoUVZ = []
		const _arrayValue9LNCpt = null;
		const _arrayValueKJ7okz4 = undefined;
		const _arrayValuefhVjQxb = undefined;
		const _arrayValueLbekhY = -4.283159767942051;
		const _arrayValueBqEMAO4 = [_arrayValuefhVjQxb, _arrayValueLbekhY]
		const _arrayValueCuyzOLh = [_arrayValue9LNCpt, _arrayValueKJ7okz4, _arrayValueBqEMAO4]
		const _arrayValuevEQ1zlK = undefined;
		const _arrayValuewSszDMA = [_arrayValueCuyzOLh, _arrayValuevEQ1zlK]
		const _flagsavymIp = [_arrayValueyPmVXBH, _arrayValueNNxoUVZ, _arrayValuewSszDMA]
		const _descriptionicoi8KH = "pWsUGCoyW5gOPIyUG0pKKDmvSf5FBisurtQgpOopR6Fad3w";
		const _cmdAQwpFjl = new Option(_flagsavymIp, _descriptionicoi8KH)
		const _hidenNIxQc2 = undefined;
		const _returnValue7auaWI = await _cmdAQwpFjl.hideHelp(_hidenNIxQc2)
		const _returnValuefuL0Gsr = -3.223818815275089;
		const _valueIz0Qn7W = () => { return _returnValuefuL0Gsr };
		const _previousyofXti1 = []
		const _returnValuesyXZTfO = await _cmdAQwpFjl._concatValue(_valueIz0Qn7W, _previousyofXti1)
		const _returnValuejGXwITL = await _HelpUzyWyIm.commandDescription(_cmdAQwpFjl)
	});

	it('test for Help', async () => {
		const _Help9Qr2AP = new Help()
		const _returnValueqOsrfxT = undefined;
		const _optioniVkwQIL = () => { return _returnValueqOsrfxT };
		const _returnValueTQn0BRj = await _Help9Qr2AP.optionDescription(_optioniVkwQIL)
		const _returnValuejr8iMH0 = "bDSI9jkoFHV3GdinRQXDsY6khAgen8DEuJ9BCr2FSTCV0P1WVtBGyfkmc7ADurL2m5FFEIx1hGhYzrfE7Hy";
		const _namepbpPQL7 = () => { return _returnValuejr8iMH0 };
		const _descriptione63dUs4 = -2.2882059087875186;
		const _cmdGEfvCB = new Argument(_namepbpPQL7, _descriptione63dUs4)
		const _returnValuefeA5E0h = await _cmdGEfvCB.argRequired()
		const _returnValueYrqq7Lb = await _cmdGEfvCB.argRequired()
		const _fnTubj3OW = undefined;
		const _returnValueHsB99op = await _cmdGEfvCB.argParser(_fnTubj3OW)
		const _returnValueqnXaIhz = await _Help9Qr2AP.subcommandDescription(_cmdGEfvCB)
		const __nameagu90WQ = -7.140966785583108;
		const __aliasesSbFAf9D = {
		
	}
		const _returnValueqJFVgyW = undefined;
		const _parentqhhUga7 = () => { return _returnValueqJFVgyW };
		const _returnValueCM85opv = undefined;
		const _usageMjnR4Ig = () => { return _returnValueCM85opv };
		const _cmdNAzxose = {
			"_name": __nameagu90WQ,
		"_aliases": __aliasesSbFAf9D,
		"parent": _parentqhhUga7,
		"usage": _usageMjnR4Ig
	}
		const _returnValuegeRs2Am = await _Help9Qr2AP.commandUsage(_cmdNAzxose)
		const __argsD6cfTX0 = {
		
	}
		const __nameha4kJXN = 6.994595701230256;
		const __aliaseshm0r9vx = {
		
	}
		const _optionsT4gV77c = {
		
	}
		const _cmdjhRl0Rb = {
			"_args": __argsD6cfTX0,
		"_name": __nameha4kJXN,
		"_aliases": __aliaseshm0r9vx,
		"options": _optionsT4gV77c
	}
		const _returnValueuaJ4sO1 = await _Help9Qr2AP.subcommandTerm(_cmdjhRl0Rb)
	});

	it('test for Help', async () => {
		const _HelpnfPfp1z = new Help()
		const _cmdyHe6Ewi = undefined;
		const _arrayValueVFzu6n6 = undefined;
		const _helperj1rck0b = [_arrayValueVFzu6n6]
		const _returnValuebkKpaUG = await _HelpnfPfp1z.formatHelp(_cmdyHe6Ewi, _helperj1rck0b)
		const _arrayValuebDPgA1F = true;
		const _arrayValuepAXRRe = "yObUailoatN7Ghs3enh0XxN5hVyTtypTdQfVB4";
		const _arrayValueSLOcuKb = [_arrayValuepAXRRe]
		const _arrayValuepcAHXho = {
		
	}
		const _arrayValuel9hOUJp = undefined;
		const _arrayValueTepeDTJ = "JlO5nN4TBmejhC7GqHBkPx6SuJ1wtJKy";
		const _arrayValuev5ktKWh = [_arrayValuepcAHXho, _arrayValuel9hOUJp, _arrayValueTepeDTJ]
		const _optionzza91nH = [_arrayValuebDPgA1F, _arrayValueSLOcuKb, _arrayValuev5ktKWh]
		const _returnValueA39Imfg = await _HelpnfPfp1z.optionDescription(_optionzza91nH)
		const _cmdxyFp5Lp = false;
		const _helpertN5O4qG = "D6zBThgtsIBQAAsjHX4SYGXwwvRmJdbW4GpCSTnFhTvsoJU4wruaU8sPxDCfQ3NjruIYW7Q";
		const _returnValuelgwtcVJ = await _HelpnfPfp1z.longestSubcommandTermLength(_cmdxyFp5Lp, _helpertN5O4qG)
		const _cmdQfvzs5U = false;
		const _returnValuetTKJqi5 = "UEK83xN1R7IlKFbD";
		const _helperXePFDuw = () => { return _returnValuetTKJqi5 };
		const _returnValuesBGEkdO = await _HelpnfPfp1z.longestSubcommandTermLength(_cmdQfvzs5U, _helperXePFDuw)
	});

	it('test for Help', async () => {
		const _HelpzJlfJIH = new Help()
		const _optionQDwsd2t = "NhBu2n7M9E2G4FU";
		const _returnValueHADc9y3 = await _HelpzJlfJIH.optionTerm(_optionQDwsd2t)
		const _cmdTCrmH8d = 2.3901914663830137;
		const _returnValuenfl4zLH = "69OQK3ndKyhaAZG4e";
		const _helperIp7LKsn = () => { return _returnValuenfl4zLH };
		const _returnValuetpEKc2a = await _HelpzJlfJIH.longestSubcommandTermLength(_cmdTCrmH8d, _helperIp7LKsn)
		const _returnValuergAJUSM = true;
		const _cmdkK4Avwc = () => { return _returnValuergAJUSM };
		const _arrayValueTHmLdLu = null;
		const _arrayValue1UBRwG = "3zcHOwQKwzKwzfYcXIdKCctoBzr7cZHiebANe6us8";
		const _arrayValueAeXhQRg = undefined;
		const _returnValue4T3kQp = [_arrayValueTHmLdLu, _arrayValue1UBRwG, _arrayValueAeXhQRg]
		const _returnValueex0jAAj = () => { return _returnValue4T3kQp };
		const _helperufDKcAm = () => { return _returnValueex0jAAj };
		const _returnValue81pVVf = await _HelpzJlfJIH.padWidth(_cmdkK4Avwc, _helperufDKcAm)
	});

	it('test for Help', async () => {
		const _HelpCdqSjf6 = new Help()
		const _cmdnJWC1sj = false;
		const _returnValuexm4OV8c = 9.792135856873138;
		const _longestOptionTermLengthxwiYg2g = () => { return _returnValuexm4OV8c };
		const _returnValuezhf2l3o = null;
		const _longestSubcommandTermLengthcT2si4 = () => { return _returnValuezhf2l3o };
		const _longestArgumentTermLengthpyfuaZL = {
		
	}
		const _helperEdWbNGj = {
			"longestOptionTermLength": _longestOptionTermLengthxwiYg2g,
		"longestSubcommandTermLength": _longestSubcommandTermLengthcT2si4,
		"longestArgumentTermLength": _longestArgumentTermLengthpyfuaZL
	}
		const _returnValuenNMHQlm = await _HelpCdqSjf6.padWidth(_cmdnJWC1sj, _helperEdWbNGj)
		const _cmdAjSvMgD = "KuABQ8EK61EQe7ipsIvSZ6wVCbMfihPSKffxSgwLW8EmphH5VQIyI5hdIEoWfwHGqo7JV6IA8I9vxbPLeE7mh";
		const _arrayValueQkAcklB = []
		const _arrayValueryHKDKO = "CjaJm1sHUUY80WN3Tiyc3cNpmtKPU5kTxVHVqWx456fm8iHQYvF2mho4kgvSJJcfQ0enEKja";
		const _arrayValuerWg0mZP = "Z2usn6EjNuz7t4TByayYqJCKsNp8gXqXfIpdV6bVccppskoMOleAAjsXlFoB7FOxXtas";
		const _arrayValuelzFBwup = [_arrayValueQkAcklB, _arrayValueryHKDKO, _arrayValuerWg0mZP]
		const _arrayValuevEsfp0W = true;
		const _helperFEoCaFT = [_arrayValuelzFBwup, _arrayValuevEsfp0W]
		const _returnValueZECbWQx = await _HelpCdqSjf6.padWidth(_cmdAjSvMgD, _helperFEoCaFT)
		const _returnValueePFNy1V = undefined;
		const _cmdYFMzs3J = () => { return _returnValueePFNy1V };
		const _returnValuesB4RD1 = await _HelpCdqSjf6.subcommandDescription(_cmdYFMzs3J)
		const _cmdlM6x5qT = undefined;
		const _arrayValueRwhUB6x = 3.425908844614563;
		const _arrayValuesg3Moyy = [_arrayValueRwhUB6x]
		const _helperjq61yfB = [_arrayValuesg3Moyy]
		const _returnValueTqCBjuA = await _HelpCdqSjf6.padWidth(_cmdlM6x5qT, _helperjq61yfB)
	});

	it('test for Help', async () => {
		const _HelpxocNHww = new Help()
		const _returnValueVSj1npT = "FEbHXRaHmRCLZ0baH3sZ3p52yl4Is6IrjAvBSzIr2nar3LoAClhPpxwEMXxBiroiTC";
		const _arrayValuezABnCQz = () => { return _returnValueVSj1npT };
		const _arrayValueW2wIz8H = false;
		const _arrayValueDdnmsot = [_arrayValueW2wIz8H]
		const _returnValuepwbZAjR = [_arrayValuezABnCQz, _arrayValueDdnmsot]
		const _cmdqBRT5g8 = () => { return _returnValuepwbZAjR };
		const _returnValuevyhZKaY = await _HelpxocNHww.visibleOptions(_cmdqBRT5g8)
		const _returnValueLw5AcTg = {
		
	}
		const _cmdeW7QYI = () => { return _returnValueLw5AcTg };
		const _returnValuePXqoiD0 = await _HelpxocNHww.visibleCommands(_cmdeW7QYI)
		const _commandsnevTry = {
		
	}
		const _returnValuevUpgr9 = -6.470911762319231;
		const __hasImplicitHelpCommandKgTamIp = () => { return _returnValuevUpgr9 };
		const __helpCommandnameAndArgsSCNDYky = {
		
	}
		const _returnValue2eosXi = {
		
	}
		const _createCommandXtYjByy = () => { return _returnValue2eosXi };
		const __helpCommandDescriptionXoBrR2p = undefined;
		const _cmdhbNtEqq = {
			"commands": _commandsnevTry,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandKgTamIp,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsSCNDYky,
		"createCommand": _createCommandXtYjByy,
		"_helpCommandDescription": __helpCommandDescriptionXoBrR2p
	}
		const _returnValuemuCjYsO = await _HelpxocNHww.visibleCommands(_cmdhbNtEqq)
		const _cmdM9EoX35 = "7XMgp6bvy948aJ2vEKryv2jWEw27m1WXh9YS903uB9vOOsJkmQzOHTCE76uQ9DAZ7lRWuVpxK5CK2wvUE9rQmNGXrRCSIYe";
		const _returnValueb3tWnJS = await _HelpxocNHww.commandDescription(_cmdM9EoX35)
		const _optiony3SNU23 = "77Fh2OvAHdmAGKkIw5pOswinQs1hOntFHrtDMIuWEjudiuQ7hVwGAB";
		const _returnValueVdnUV0l = await _HelpxocNHww.optionDescription(_optiony3SNU23)
	});

	it('test for Help', async () => {
		const _HelpK0qN6qp = new Help()
		const _flagsTonM2p = null;
		const _optionygPZWqO = {
			"flags": _flagsTonM2p
	}
		const _returnValueV0yyAwP = await _HelpK0qN6qp.optionTerm(_optionygPZWqO)
		const _returnValuePE9xtT = -7.815883732504312;
		const _returnValueTTmcJgD = () => { return _returnValuePE9xtT };
		const _optionT4bm272 = () => { return _returnValueTTmcJgD };
		const _returnValuegKbE0rq = await _HelpK0qN6qp.optionDescription(_optionT4bm272)
		const _arrayValuejmPSlbl = 9.348713460540946;
		const _returnValueaN5PbAf = null;
		const _arrayValueVZr5Ijk = () => { return _returnValueaN5PbAf };
		const _returnValueqG1e5Rd = undefined;
		const _arrayValueZCoVFC1 = () => { return _returnValueqG1e5Rd };
		const _argumentmpvRcln = [_arrayValuejmPSlbl, _arrayValueVZr5Ijk, _arrayValueZCoVFC1]
		const _returnValueX3chXG = await _HelpK0qN6qp.argumentDescription(_argumentmpvRcln)
		const _strityPIRY = true;
		const _widthrOLbJTV = -3.420809446441094;
		const _indentFIMorJ = 5.751066050276513;
		const _minColumnWidthhmQUD4i = 6.6646181454813345;
		const _returnValuelBn6ynU = await _HelpK0qN6qp.wrap(_strityPIRY, _widthrOLbJTV, _indentFIMorJ, _minColumnWidthhmQUD4i)
		const _arrayValuetmTaGN4 = 1.481423255999328;
		const _arrayValueBwQwAS0 = undefined;
		const _returnValueTrSL6q = [_arrayValuetmTaGN4, _arrayValueBwQwAS0]
		const _argumentF7q9j4 = () => { return _returnValueTrSL6q };
		const _returnValueHbq84hQ = await _HelpK0qN6qp.argumentDescription(_argumentF7q9j4)
	});

	it('test for Help', async () => {
		const _HelpT9Fqgb = new Help()
		const __namel9XDtD7 = 2.994248768946301;
		const __aliaseslByRXwW = {
		
	}
		const _parentglhPsYE = {
		
	}
		const _returnValuebsbTjhH = null;
		const _usagedQUxFDl = () => { return _returnValuebsbTjhH };
		const _cmdgIT2aVP = {
			"_name": __namel9XDtD7,
		"_aliases": __aliaseslByRXwW,
		"parent": _parentglhPsYE,
		"usage": _usagedQUxFDl
	}
		const _returnValuehHRnupK = await _HelpT9Fqgb.commandUsage(_cmdgIT2aVP)
		const _flagseag9VgR = "pC1HvOlQyR7JpHF6hlVeNQ7m0jK5ru9VtR0fVrcLipOmSgI2xwpe";
		const _descriptionWgQbXN = "I9FcF8X";
		const _optionhaPjAi6 = new Option(_flagseag9VgR, _descriptionWgQbXN)
		const _arrayValueVoxvJFS = null;
		const _arrayValueixIraew = undefined;
		const _arrayValueQeZo6dl = {
		
	}
		const _nameMsZjsKi = [_arrayValueVoxvJFS, _arrayValueixIraew, _arrayValueQeZo6dl]
		const _returnValuelYMm0Tk = await _optionhaPjAi6.env(_nameMsZjsKi)
		const _returnValuePmB6MuB = await _optionhaPjAi6.attributeName()
		const _returnValueNi3tiok = await _optionhaPjAi6.name()
		const _returnValuezl9g4VO = await _optionhaPjAi6.name()
		const _valuesRbEtTJ = "In3N24WxW7AfQObHpUHBhTrxDcsGiQT5E06RSs4ql2hBkdFE4MkaWB49o4Nh4wOhOwK9W6FdlfYe";
		const _returnValue6a5sx9 = await _optionhaPjAi6.choices(_valuesRbEtTJ)
		const _returnValuegU7zBgp = await _HelpT9Fqgb.optionTerm(_optionhaPjAi6)
	});

	it('test for Help', async () => {
		const _HelpxgBsW5S = new Help()
		const _commandsginV6fO = {
		
	}
		const __hasImplicitHelpCommandokqcawq = "O9NmnPwALkxmLqOOG7C8kk6Rz0k1yOd";
		const __helpCommandnameAndArgsjjkgmPs = {
		
	}
		const _returnValueU8VMNuj = "pZu3PrSM74jetGRs3kzgQaOZS3cTuDt5Llhrkk4xM0Q63q3sSlrBLG4L6kwtzTLB";
		const _createCommandkFqLg2R = () => { return _returnValueU8VMNuj };
		const __helpCommandDescriptionfIMMhX = undefined;
		const _cmdh80XYoM = {
			"commands": _commandsginV6fO,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandokqcawq,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsjjkgmPs,
		"createCommand": _createCommandkFqLg2R,
		"_helpCommandDescription": __helpCommandDescriptionfIMMhX
	}
		const _returnValueHae3BOp = await _HelpxgBsW5S.visibleCommands(_cmdh80XYoM)
		const _strnVWG2xi = "gjGk2Ri1TW43DE501SAbg3rQmDiKWktAkNArq3rUm7vr7fOkMTkxdUX1pC";
		const _widthTr7Sjq5 = -9.920976341904638;
		const _indentHZygUs0 = undefined;
		const _minColumnWidthaTXr69Q = 8.645824717635723;
		const _returnValuerXfwrnR = await _HelpxgBsW5S.wrap(_strnVWG2xi, _widthTr7Sjq5, _indentHZygUs0, _minColumnWidthaTXr69Q)
	});

	it('test for Help', async () => {
		const _HelpwYDo0q = new Help()
		const _namexdYR4YN = {
		
	}
		const _cmdLmrgQT0 = new Command(_namexdYR4YN)
		const _returnValuekhyihq3 = "5O5Na59CeErN6hjkfSql5tOd4w3ysc66vdso11k3B1jMfnr7yEodgtYgPlG57L6dja8eIeZoNLZVi7DJaNgfL";
		const _fnbaMtat = () => { return _returnValuekhyihq3 };
		const _returnValuee7rcKQk = await _cmdLmrgQT0.action(_fnbaMtat)
		const _returnValueXiaKp7 = await _HelpwYDo0q.visibleOptions(_cmdLmrgQT0)
		const _arrayValueQ9IwSR5 = null;
		const _arrayValueU2A773h = 1.817935907595544;
		const _returnValueLowqw56 = [_arrayValueQ9IwSR5, _arrayValueU2A773h]
		const _optionlD8S6M = () => { return _returnValueLowqw56 };
		const _returnValueSPicM8 = await _HelpwYDo0q.optionDescription(_optionlD8S6M)
		const _cmdIZSiDZI = 3.0729063042522764;
		const _returnValueGX698Ds = await _HelpwYDo0q.subcommandTerm(_cmdIZSiDZI)
	});

	it('test for Help', async () => {
		const _HelpnJ8Mxuk = new Help()
		const _returnValuegWWHtS = 4.280690417190227;
		const _returnValueIf83EK = () => { return _returnValuegWWHtS };
		const _returnValuelxX1fCp = () => { return _returnValueIf83EK };
		const _matchR3eG1Wx = () => { return _returnValuelxX1fCp };
		const _substrLql1Erx = {
		
	}
		const _stryQhyUN = {
			"match": _matchR3eG1Wx,
		"substr": _substrLql1Erx
	}
		const _widthG4G81v = true;
		const _indentqLmsG1O = 6.144554162558357;
		const _minColumnWidthVsrHZK = -8.23119079342278;
		const _returnValuetcGgTq6 = await _HelpnJ8Mxuk.wrap(_stryQhyUN, _widthG4G81v, _indentqLmsG1O, _minColumnWidthVsrHZK)
		const _returnValueLacN0FH = "HAIuCx1P7jhM0Ex56kG4ywo9ckeNQ5Qu4cjxvQ0MG3Ie";
		const _cmdXONgSD5 = () => { return _returnValueLacN0FH };
		const _returnValuetZfNPWZ = await _HelpnJ8Mxuk.subcommandDescription(_cmdXONgSD5)
	});

	it('test for Help', async () => {
		const _HelpbsNp9qb = new Help()
		const _returnValueUXcE9EK = undefined;
		const _matchSVBRcbH = () => { return _returnValueUXcE9EK };
		const _substrY24rjQh = true;
		const _strCGabQ7Y = {
			"match": _matchSVBRcbH,
		"substr": _substrY24rjQh
	}
		const _widthgNJ43e = -6.775082802297213;
		const _indentDMkLIv = 1.4010629275955448;
		const _minColumnWidthwMOFuVV = 0.23761672248733845;
		const _returnValueKygqitb = await _HelpbsNp9qb.wrap(_strCGabQ7Y, _widthgNJ43e, _indentDMkLIv, _minColumnWidthwMOFuVV)
		const _optionsJqSuHZq = {
		
	}
		const __hasHelpOptionHyUt70 = null;
		const __helpShortFlagq40hDba = undefined;
		const _returnValueJiQxPU8 = true;
		const __findOptionir9z6S = () => { return _returnValueJiQxPU8 };
		const __helpLongFlagaGpDNzL = undefined;
		const _returnValue3nD1EX = false;
		const _createOptionCV3ISO9 = () => { return _returnValue3nD1EX };
		const __helpDescriptionlPdTord = undefined;
		const _arrayValueQJO4Cns = null;
		const _arrayValuecNiuyc5 = 0.368854068494306;
		const __helpFlagslH22KE7 = [_arrayValueQJO4Cns, _arrayValuecNiuyc5]
		const _cmdq61J3gQ = {
			"options": _optionsJqSuHZq,
		"_hasHelpOption": __hasHelpOptionHyUt70,
		"_helpShortFlag": __helpShortFlagq40hDba,
		"_findOption": __findOptionir9z6S,
		"_helpLongFlag": __helpLongFlagaGpDNzL,
		"createOption": _createOptionCV3ISO9,
		"_helpDescription": __helpDescriptionlPdTord,
		"_helpFlags": __helpFlagslH22KE7
	}
		const _returnValued1OzWRe = await _HelpbsNp9qb.visibleOptions(_cmdq61J3gQ)
		const __argsDescriptionSZnYaGF = {
		
	}
		const __argsaJqQUH = []
		const _cmdlM7mUqG = {
			"_argsDescription": __argsDescriptionSZnYaGF,
		"_args": __argsaJqQUH
	}
		const _returnValueOPzXUkA = await _HelpbsNp9qb.visibleArguments(_cmdlM7mUqG)
		const _arrayValueXxGzdam = -3.9471546928215844;
		const _optioni5E2eHe = [_arrayValueXxGzdam]
		const _returnValueU34JAg7 = await _HelpbsNp9qb.optionTerm(_optioni5E2eHe)
		const _arrayValuexHQA1nA = undefined;
		const _arrayValue2aWyDY = 2.8784686534266264;
		const _arrayValueB3GgfFE = null;
		const _arrayValueNsAB7PO = -1.1809018733032701;
		const _arrayValueIdLjto = {
		
	}
		const _arrayValueqC616mg = [_arrayValue2aWyDY, _arrayValueB3GgfFE, _arrayValueNsAB7PO, _arrayValueIdLjto]
		const _arrayValueu1A0Y1e = undefined;
		const _optionIvSPiN6 = [_arrayValuexHQA1nA, _arrayValueqC616mg, _arrayValueu1A0Y1e]
		const _returnValueuCw4do = await _HelpbsNp9qb.optionTerm(_optionIvSPiN6)
	});

	it('test for Help', async () => {
		const _Help1FiA6h = new Help()
		const _argChoiceserjCa75 = {
		
	}
		const _negategFzKBM6 = null;
		const _defaultValuey9ts7rt = undefined;
		const _defaultValueDescriptionS632pzC = "Oi0YyEfbHKScIvbf0a2MGvvrcoYUYPCaYP6ZjD0G4fZLiL339CJfhInHYmPQVANOjDCEeEFPxPVPXfb6sLP7et";
		const _envVarcUvUhYc = undefined;
		const _descriptionD1brqs8 = true;
		const _optionh7wpK7n = {
			"argChoices": _argChoiceserjCa75,
		"negate": _negategFzKBM6,
		"defaultValue": _defaultValuey9ts7rt,
		"defaultValueDescription": _defaultValueDescriptionS632pzC,
		"envVar": _envVarcUvUhYc,
		"description": _descriptionD1brqs8
	}
		const _returnValuez1AKkll = await _Help1FiA6h.optionDescription(_optionh7wpK7n)
		const _cmdCVl75sM = 6.685896686251482;
		const _returnValuex4k3hKY = "Woy75d3mXFqIli9FNINbBM4CvaKE6Qr27FBELSTm6bWjyKo1pJE1ruDhTWg15AC2oqOqFUCSJ";
		const _returnValuevAkAiqF = () => { return _returnValuex4k3hKY };
		const _visibleArgumentsPdpfUX6 = () => { return _returnValuevAkAiqF };
		const _returnValueehKgcc1 = undefined;
		const _argumentTermZfClrn3 = () => { return _returnValueehKgcc1 };
		const _helperGz37FWt = {
			"visibleArguments": _visibleArgumentsPdpfUX6,
		"argumentTerm": _argumentTermZfClrn3
	}
		const _returnValueQIiVbmu = await _Help1FiA6h.longestArgumentTermLength(_cmdCVl75sM, _helperGz37FWt)
		const _cmd1dTShx = "ZVmtT1tqCT82hx4ZhhOvy2wESjzDt917RQ4wlme";
		const _returnValueGOyajLf = await _Help1FiA6h.subcommandTerm(_cmd1dTShx)
		const __argsK62jZjQ = undefined;
		const __namem0Uw0l9 = 6.210362320389734;
		const __aliasesF8ZanWb = {
		
	}
		const _optionsDp2IWpH = {
		
	}
		const _cmdBaEeZ0P = {
			"_args": __argsK62jZjQ,
		"_name": __namem0Uw0l9,
		"_aliases": __aliasesF8ZanWb,
		"options": _optionsDp2IWpH
	}
		const _returnValueCFbfXfJ = await _Help1FiA6h.subcommandTerm(_cmdBaEeZ0P)
		const _returnValueeOfjj8g = null;
		const _returnValueyt0PlL = () => { return _returnValueeOfjj8g };
		const _slicecT7OvQX = () => { return _returnValueyt0PlL };
		const _namecEm61YV = {
			"slice": _slicecT7OvQX
	}
		const _descriptionn859tjR = null;
		const _argumentFWfyq7x = new Argument(_namecEm61YV, _descriptionn859tjR)
		const _returnValueTgZYsvu = "n2D5jpIuOpwVnQiteUznojpXFWJTP1oElv1ZQFJgGnDVeVg5SXz4Ie";
		const _valueIoWPHKE = () => { return _returnValueTgZYsvu };
		const _descriptionROI2V9l = undefined;
		const _returnValuef5w75Vm = await _argumentFWfyq7x.default(_valueIoWPHKE, _descriptionROI2V9l)
		const _returnValueDoHTPGB = await _argumentFWfyq7x.argRequired()
		const _returnValueKsBpmUZ = await _Help1FiA6h.argumentDescription(_argumentFWfyq7x)
	});

	it('test for Help', async () => {
		const _Helpwx9Rn4C = new Help()
		const _argChoiceszrUBsV2 = {
		
	}
		const _negateJMUj2Hg = {
		
	}
		const _defaultValuegUVHpyY = undefined;
		const _defaultValueDescriptionTuFyNn = false;
		const _envVarbCVEKDf = false;
		const _arrayValueSmr1qB5 = "dPKmgurzhnwcEtjbBpJ1oO895qTqTY57t3fN545BAtC";
		const _arrayValuejMLCOWF = "K4NXkLNARCbBVlKdUNogl8rf9vLSqyfgTzpvHeM";
		const _arrayValue7OCxPE = [_arrayValueSmr1qB5, _arrayValuejMLCOWF]
		const _arrayValueayQAKeH = "LqFsAuKwp1NvLN0QObufyiQxe0lcWlhENo8JpjOFFen6pKlaOmTQjm05XzwcniMcsjLEAugCeCu07qiYtOFi2RJCoD0XOf";
		const _arrayValueyzqe0YM = {
		
	}
		const _descriptionjFQXJ8j = [_arrayValue7OCxPE, _arrayValueayQAKeH, _arrayValueyzqe0YM]
		const _optionBua020J = {
			"argChoices": _argChoiceszrUBsV2,
		"negate": _negateJMUj2Hg,
		"defaultValue": _defaultValuegUVHpyY,
		"defaultValueDescription": _defaultValueDescriptionTuFyNn,
		"envVar": _envVarbCVEKDf,
		"description": _descriptionjFQXJ8j
	}
		const _returnValueQYlQE0I = await _Helpwx9Rn4C.optionDescription(_optionBua020J)
		const _cmdDfxBITD = {
		
	}
		const _returnValueX8z58rS = {
		
	}
		const _visibleArgumentsEkbMmsd = () => { return _returnValueX8z58rS };
		const _returnValueHTbGeiC = {
		
	}
		const _returnValueZ9WM1g = () => { return _returnValueHTbGeiC };
		const _argumentTermexb5i4 = () => { return _returnValueZ9WM1g };
		const _helpereHb72Ze = {
			"visibleArguments": _visibleArgumentsEkbMmsd,
		"argumentTerm": _argumentTermexb5i4
	}
		const _returnValueQBs8J95 = await _Helpwx9Rn4C.longestArgumentTermLength(_cmdDfxBITD, _helpereHb72Ze)
		const _returnValuesoTYoHG = undefined;
		const _argumentQwjWvF8 = () => { return _returnValuesoTYoHG };
		const _returnValueiN4LRy = await _Helpwx9Rn4C.argumentTerm(_argumentQwjWvF8)
	});

	it('test for Help', async () => {
		const _HelpzxwWUvZ = new Help()
		const _cmdsXgFPiU = undefined;
		const _helperDlWp69F = new Help()
		const _strMOx77iG = "0DKVau6wkES3kUjlnQ";
		const _widthiGynHFO = -6.595343540640892;
		const _indentoiwBDof = 5.585542151069918;
		const _minColumnWidthTaFctYU = "jvuueCDCLqIfbS1qjkslcRiI2sBRmVbHeKg6Ene14S6qfxAg";
		const _returnValuesTWs5XL = await _helperDlWp69F.wrap(_strMOx77iG, _widthiGynHFO, _indentoiwBDof, _minColumnWidthTaFctYU)
		const _returnValuecYa8eu2 = 9.869865508653689;
		const _descriptionlMHYlzV = () => { return _returnValuecYa8eu2 };
		const _cmdaUTShd = {
			"description": _descriptionlMHYlzV
	}
		const _returnValue7QkGis = await _helperDlWp69F.commandDescription(_cmdaUTShd)
		const _arrayValueZxrZCvu = null;
		const _arrayValuePb38bH = null;
		const _flagsWM5EFr3 = [_arrayValueZxrZCvu, _arrayValuePb38bH]
		const _descriptionQUK6OM3 = "3eZyw57CGsF83MCsitjidlyjKtYsZEBprkh6C1MOeGIioBbBVLqSMMKBKSmG2lNcHL3";
		const _cmdY3ezC10 = new Option(_flagsWM5EFr3, _descriptionQUK6OM3)
		const _mandatoryXsatGEc = true;
		const _returnValueguZ0YTU = await _cmdY3ezC10.makeOptionMandatory(_mandatoryXsatGEc)
		const _returnValueRPWyHeY = await _helperDlWp69F.commandDescription(_cmdY3ezC10)
		const _returnValueBMRUrNO = false;
		const _returnValueGMJPyUk = () => { return _returnValueBMRUrNO };
		const _cmdyIqW0xF = () => { return _returnValueGMJPyUk };
		const _returnValuemL00DFo = await _helperDlWp69F.commandUsage(_cmdyIqW0xF)
		const _returnValues6ObXYo = await _HelpzxwWUvZ.formatHelp(_cmdsXgFPiU, _helperDlWp69F)
		const _cmdBzvV8s = -5.548501483823989;
		const _helperMoQwxuP = new Help()
		const _commandscoLoabx = {
		
	}
		const _arrayValueVguVgHe = undefined;
		const _arrayValuexoyi7hR = [_arrayValueVguVgHe]
		const _arrayValuefkEWsFH = -7.8495237262667175;
		const _returnValueNYWW1my = [_arrayValuexoyi7hR, _arrayValuefkEWsFH]
		const _returnValuedz1l1SF = () => { return _returnValueNYWW1my };
		const __hasImplicitHelpCommandXDGlpEY = () => { return _returnValuedz1l1SF };
		const __helpCommandnameAndArgsEogDOZw = {
		
	}
		const _createCommandXIUgGl6 = "30sqAtHXePk58zgfz8zscmQFi4DjICnyxRl7HGziIwpmsackypMLB0UqHrRNz3os52XyC8P9EJvRwWphsJb";
		const __helpCommandDescriptionxBnU8K7 = true;
		const _cmdEB39SK = {
			"commands": _commandscoLoabx,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandXDGlpEY,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsEogDOZw,
		"createCommand": _createCommandXIUgGl6,
		"_helpCommandDescription": __helpCommandDescriptionxBnU8K7
	}
		const _returnValueVD52Bd = await _helperMoQwxuP.visibleCommands(_cmdEB39SK)
		const _cmdMO27YVk = {
		
	}
		const _helperF9ScdK = undefined;
		const _returnValueWROPNvO = await _helperMoQwxuP.longestSubcommandTermLength(_cmdMO27YVk, _helperF9ScdK)
		const _returnValueV2ay8vG = await _HelpzxwWUvZ.longestArgumentTermLength(_cmdBzvV8s, _helperMoQwxuP)
		const _cmdQ0AtOD4 = "uMbXtO2jrLEaxHCO1Iqjvbig8GXzUrpIg2SM6tAiiOVyLITzeOr";
		const _returnValue0bEy5S = null;
		const _longestOptionTermLengthFJu5qtW = () => { return _returnValue0bEy5S };
		const _returnValueHcT3cDl = -9.052935338356486;
		const _longestSubcommandTermLengthPrS5y8 = () => { return _returnValueHcT3cDl };
		const _returnValueHlkklsv = null;
		const _longestArgumentTermLengthVzltZli = () => { return _returnValueHlkklsv };
		const _helperduLefen = {
			"longestOptionTermLength": _longestOptionTermLengthFJu5qtW,
		"longestSubcommandTermLength": _longestSubcommandTermLengthPrS5y8,
		"longestArgumentTermLength": _longestArgumentTermLengthVzltZli
	}
		const _returnValuey5t0EVx = await _HelpzxwWUvZ.padWidth(_cmdQ0AtOD4, _helperduLefen)
	});

	it('test for Help', async () => {
		const _Helpq7molFa = new Help()
		const _flagsqgryNBJ = "1vcgqr9Sk1SwAf";
		const _descriptionka1pSPi = null;
		const _cmdu0geNK = new Option(_flagsqgryNBJ, _descriptionka1pSPi)
		const _hideKn3ava2 = true;
		const _returnValueuZm9lk9 = await _cmdu0geNK.hideHelp(_hideKn3ava2)
		const _fnb9Cpx0D = undefined;
		const _returnValueXUPq9t = await _cmdu0geNK.argParser(_fnb9Cpx0D)
		const _returnValueWDN1WB9 = await _Helpq7molFa.commandDescription(_cmdu0geNK)
	});

	it('test for Help', async () => {
		const _HelpqciGzI8 = new Help()
		const _namePg5Kb84 = []
		const _arrayValuexZsxbPj = "kvGD35egLkqzpGLCM9JABiKuDIi2Pq7jwe";
		const _descriptionhg1ZsRO = [_arrayValuexZsxbPj]
		const _optionoYvEGji = new Argument(_namePg5Kb84, _descriptionhg1ZsRO)
		const _valueqYK1nh = "Jgab3La6mhFxaGnxhAbbrvY21";
		const _descriptionVMAHN3H = undefined;
		const _returnValuefFYxkFh = await _optionoYvEGji.default(_valueqYK1nh, _descriptionVMAHN3H)
		const _valueGJ9A3Mx = "r2SlKSg6Mus";
		const _arrayValuezB4FQWo = -8.697670907805389;
		const _descriptionEPIqo8K = [_arrayValuezB4FQWo]
		const _returnValueiZ4tzpe = await _optionoYvEGji.default(_valueGJ9A3Mx, _descriptionEPIqo8K)
		const _valueHyujORY = {
		
	}
		const _descriptionF9zdyap = undefined;
		const _returnValuef5oe8vN = await _optionoYvEGji.default(_valueHyujORY, _descriptionF9zdyap)
		const _returnValueNqqyo1x = await _HelpqciGzI8.optionDescription(_optionoYvEGji)
		const _cmdgofbVkU = "uZfYcPkJsNKfW6gwsAfu7kXQgkj";
		const _returnValueLnywirt = await _HelpqciGzI8.commandUsage(_cmdgofbVkU)
		const _arrayValueTEhOwg6 = 8.253083081216069;
		const _arrayValueeX1ZIRJ = "s4aUQdnACATe2AaOO62xVlnK";
		const _arrayValueM3JtvBw = 1.0784785672585357;
		const _arrayValuelPjpAgI = [_arrayValueM3JtvBw]
		const _arrayValueRLJRV1i = [_arrayValueTEhOwg6, _arrayValueeX1ZIRJ, _arrayValuelPjpAgI]
		const _arrayValuewGXo2JW = undefined;
		const _cmdtJzdWNd = [_arrayValueRLJRV1i, _arrayValuewGXo2JW]
		const _helperrG7Xp6b = "GHAUapW5dx5VM66u5ebN";
		const _returnValueiCandrp = await _HelpqciGzI8.longestSubcommandTermLength(_cmdtJzdWNd, _helperrG7Xp6b)
	});

	it('test for Help', async () => {
		const _HelpzuWl8CH = new Help()
		const _namew3Xuqf3 = "10wuc5JQWs6aFTLyL2q9s2jHiQEIx";
		const _arrayValueeILldU7 = []
		const _arrayValuerLrIDap = true;
		const _descriptionwuOmU7 = [_arrayValueeILldU7, _arrayValuerLrIDap]
		const _argumentKhczcZ = new Argument(_namew3Xuqf3, _descriptionwuOmU7)
		const _valuejZE7ukn = "nPf26dmHCaO4h";
		const _arrayValueZrFhnm7 = 3.410423020840856;
		const _descriptionaf8JCVi = [_arrayValueZrFhnm7]
		const _returnValueQTVFdf = await _argumentKhczcZ.default(_valuejZE7ukn, _descriptionaf8JCVi)
		const _returnValueTKpS2hc = await _HelpzuWl8CH.argumentDescription(_argumentKhczcZ)
		const _cmdwPlIZx1 = 3.5191057609644787;
		const _helperQkZrAY = new Help()
		const _returnValueURG6phM = "ite68f3cBIkaF5InSibwJnuxe";
		const _optionTuTlFF = () => { return _returnValueURG6phM };
		const _returnValueAp5c0Jn = await _helperQkZrAY.optionDescription(_optionTuTlFF)
		const _returnValuehzU9A3L = "rOjpoLHb6i7wwPQJwc";
		const _cmdjqcRKTc = () => { return _returnValuehzU9A3L };
		const _helperTN1xs9S = true;
		const _returnValueS1TunFj = await _helperQkZrAY.padWidth(_cmdjqcRKTc, _helperTN1xs9S)
		const _arrayValueEQgnqr = undefined;
		const _arrayValuewUP55lx = null;
		const _cmdbkG0L6p = [_arrayValueEQgnqr, _arrayValuewUP55lx]
		const _returnValueQbTo1Iv = await _helperQkZrAY.visibleArguments(_cmdbkG0L6p)
		const _returnValueL0VO8t8 = await _HelpzuWl8CH.longestSubcommandTermLength(_cmdwPlIZx1, _helperQkZrAY)
	});

	it('test for Help', async () => {
		const _HelpmeEPx6L = new Help()
		const _nameMPQGEUW = {
		
	}
		const _cmdAMoqPMG = new Command(_nameMPQGEUW)
		const _keygyeeBI = undefined;
		const _valueFP2XfvY = undefined;
		const _sourceJ7Vqnsj = false;
		const _returnValuevhiSXFm = await _cmdAMoqPMG.setOptionValueWithSource(_keygyeeBI, _valueFP2XfvY, _sourceJ7Vqnsj)
		const _displayHelpDDHudox = true;
		const _returnValuePHCUpH = await _cmdAMoqPMG.showHelpAfterError(_displayHelpDDHudox)
		const _returnValueTxuCJE = await _HelpmeEPx6L.visibleCommands(_cmdAMoqPMG)
	});

	it('test for Help', async () => {
		const _HelpI55jskM = new Help()
		const _argumentBNj2SSc = []
		const _returnValueGrOKVf = await _HelpI55jskM.argumentDescription(_argumentBNj2SSc)
		const _arrayValueEMHYzPs = undefined;
		const _arrayValuesME04KG = "7IsKHvFsekHU4vKzyPsUVjhwE4oUSpm84";
		const _optionjYDwjL4 = [_arrayValueEMHYzPs, _arrayValuesME04KG]
		const _returnValueugbssbp = await _HelpI55jskM.optionTerm(_optionjYDwjL4)
		const _arrayValueZ9X7jIt = "WT9o";
		const _namevqcawy0 = [_arrayValueZ9X7jIt]
		const _cmdcc0Csau = new Command(_namevqcawy0)
		const _enableOrNameAndArgsCN2kaur = true;
		const _descriptionqfePKsx = null;
		const _returnValueYuJkG1x = await _cmdcc0Csau.addHelpCommand(_enableOrNameAndArgsCN2kaur, _descriptionqfePKsx)
		const _returnValueN7nqx6 = await _cmdcc0Csau.createHelp()
		const _returnValuebpMRxj2 = await _HelpI55jskM.visibleCommands(_cmdcc0Csau)
		const _cmdFEUvEBs = null;
		const _sortSubcommandspvl8z0X = 1.185034457530758;
		const _returnValuewbhTzib = "EvjhR7axOSm2BzvAI63xE0RREZRqSfPuyiba3zIwvOpNXeRHnega5MgHqCDA7harfxRSr9fzJWUMouXZB0SlfEqacILAPD";
		const _subcommandTermVVOy7es = () => { return _returnValuewbhTzib };
		const _helperikoVbnm = {
			"sortSubcommands": _sortSubcommandspvl8z0X,
		"subcommandTerm": _subcommandTermVVOy7es
	}
		const _returnValueiffry0 = await _HelpI55jskM.longestSubcommandTermLength(_cmdFEUvEBs, _helperikoVbnm)
	});
})