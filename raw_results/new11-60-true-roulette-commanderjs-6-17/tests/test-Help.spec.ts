export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpkSiuA7R = new Help()
		const _arrayValueNn8MyO0 = undefined;
		const _arrayValueEfLl4bj = true;
		const _arrayValueMghKFh1 = false;
		const _arrayValueIjoZD0T = [_arrayValueMghKFh1]
		const _arrayValuei58UMjR = [_arrayValueEfLl4bj, _arrayValueIjoZD0T]
		const _returnValuedUuzZ0N = [_arrayValueNn8MyO0, _arrayValuei58UMjR]
		const _optionXLV6FfC = () => { return _returnValuedUuzZ0N };
		const _returnValueFhwwtB = await _HelpkSiuA7R.optionDescription(_optionXLV6FfC)
		const _optionIG4FcNh = "1";
		const _returnValueLHKgTsO = await _HelpkSiuA7R.optionTerm(_optionIG4FcNh)
		const _cmdsaKbpjP = "BuuCX63Xu6R9y9e5yBJ23VFOlr03bnLLCjPorbOj5MHF3YLs12naxTnCbtYcWYRqPk";
		const _returnValuef2mNHMz = await _HelpkSiuA7R.visibleArguments(_cmdsaKbpjP)
	});

	it('test for Help', async () => {
		const _Helpnc8za3w = new Help()
		const _cmdcmTRlea = {
		
	}
		const _helperhnB3x1p = undefined;
		const _returnValueRAHtc1Y = await _Helpnc8za3w.longestArgumentTermLength(_cmdcmTRlea, _helperhnB3x1p)
		const _cmdOpjnN7f = undefined;
		const _returnValueNus1E94 = await _Helpnc8za3w.commandUsage(_cmdOpjnN7f)
		const _cmdvPTRAR = undefined;
		const _helperquLHDxw = "2WqtOngByajK3zvdba8e88qBhKTAF7VFOh39wJfTkh";
		const _returnValueZZKSZ1D = await _Helpnc8za3w.longestSubcommandTermLength(_cmdvPTRAR, _helperquLHDxw)
	});

	it('test for Help', async () => {
		const _Helpnqeu2Ff = new Help()
		const _arrayValuexcXDmIS = null;
		const _cmdP3xPRUb = [_arrayValuexcXDmIS]
		const _helperb9UVeDp = new Help()
		const __argsDescriptionBldAFI9 = {
		
	}
		const __argsFAueSIw = {
		
	}
		const _cmd6pX3c1 = {
			"_argsDescription": __argsDescriptionBldAFI9,
		"_args": __argsFAueSIw
	}
		const _returnValueagJavr7 = await _helperb9UVeDp.visibleArguments(_cmd6pX3c1)
		const _returnValueppj6nyD = await _Helpnqeu2Ff.longestArgumentTermLength(_cmdP3xPRUb, _helperb9UVeDp)
		const __nameW9TgeMP = 2.3802507618864652;
		const __aliasessOmML8T = {
		
	}
		const _parentV6ZE1Hy = {
		
	}
		const _returnValueR4r5tMt = -5.972974623500382;
		const _usagepCqxaKb = () => { return _returnValueR4r5tMt };
		const _cmdp2iDzL = {
			"_name": __nameW9TgeMP,
		"_aliases": __aliasessOmML8T,
		"parent": _parentV6ZE1Hy,
		"usage": _usagepCqxaKb
	}
		const _returnValueAf7L0JW = await _Helpnqeu2Ff.commandUsage(_cmdp2iDzL)
		const _arrayValueuCB2K6J = null;
		const _returnValuelX48oM = -9.946866132003333;
		const _returnValueTTD6aUQ = () => { return _returnValuelX48oM };
		const _arrayValuePZY0tZk = () => { return _returnValueTTD6aUQ };
		const _arrayValueqhDiwj3 = -0.3287120887341626;
		const _arrayValued1KcKO7 = [_arrayValueuCB2K6J, _arrayValuePZY0tZk, _arrayValueqhDiwj3]
		const _arrayValuehZs1hQa = 1.685343491519241;
		const _arrayValueBrY3emB = undefined;
		const _arrayValuefCkQHsB = true;
		const _arrayValuevMjzNtN = [_arrayValueBrY3emB, _arrayValuefCkQHsB]
		const _arrayValueto8kFbR = null;
		const _exitCodesI4jhIh = [_arrayValued1KcKO7, _arrayValuehZs1hQa, _arrayValuevMjzNtN, _arrayValueto8kFbR]
		const _codeDmaWXMi = -4.5807174843887335;
		const _messageBM6nXW5 = null;
		const _argumentmoGNGYW = new CommanderError(_exitCodesI4jhIh, _codeDmaWXMi, _messageBM6nXW5)
		const _returnValue4hjTLi = await _Helpnqeu2Ff.argumentTerm(_argumentmoGNGYW)
	});

	it('test for Help', async () => {
		const _HelpDKfrrP = new Help()
		const _cmdxF72wYG = "7FNYxXdNQbOodAACJWXP3Pa";
		const _helperPjjx0Jz = new Help()
		const _exitCode0EDifl = false;
		const _codefEwOqr = undefined;
		const _returnValuehUJs4vs = -5.0973498825055055;
		const _messagecC3IEz5 = () => { return _returnValuehUJs4vs };
		const _argumentQUTBQst = new CommanderError(_exitCode0EDifl, _codefEwOqr, _messagecC3IEz5)
		const _returnValueJuyRA2j = await _helperPjjx0Jz.argumentTerm(_argumentQUTBQst)
		const _argChoicesg21upCo = {
		
	}
		const _arrayValuerTCP2oh = {
		
	}
		const _arrayValueUBJ0KMh = null;
		const _arrayValueiVBCoyL = [_arrayValuerTCP2oh, _arrayValueUBJ0KMh]
		const _arrayValue9uv8YI = undefined;
		const _arrayValuem5As6LI = undefined;
		const _arrayValueSSSgwfK = null;
		const _returnValue8ijMOm = [_arrayValueiVBCoyL, _arrayValue9uv8YI, _arrayValuem5As6LI, _arrayValueSSSgwfK]
		const _arrayValuejAOhSmX = () => { return _returnValue8ijMOm };
		const _arrayValueAt6QQH9 = [_arrayValuejAOhSmX]
		const _negatejjzKa2l = [_arrayValueAt6QQH9]
		const _defaultValueM1YPNAg = undefined;
		const _defaultValueDescriptionvQurjMf = undefined;
		const _envVarfVWQDNt = undefined;
		const _descriptionDL0jiaF = false;
		const _optionyIp58NW = {
			"argChoices": _argChoicesg21upCo,
		"negate": _negatejjzKa2l,
		"defaultValue": _defaultValueM1YPNAg,
		"defaultValueDescription": _defaultValueDescriptionvQurjMf,
		"envVar": _envVarfVWQDNt,
		"description": _descriptionDL0jiaF
	}
		const _returnValueflZP8y = await _helperPjjx0Jz.optionDescription(_optionyIp58NW)
		const _returnValuerCL0CBw = null;
		const _descriptionIhwBALn = () => { return _returnValuerCL0CBw };
		const _cmdF9iVmXP = {
			"description": _descriptionIhwBALn
	}
		const _returnValueuV73yL = await _helperPjjx0Jz.commandDescription(_cmdF9iVmXP)
		const _returnValueXCcBZnI = await _HelpDKfrrP.longestArgumentTermLength(_cmdxF72wYG, _helperPjjx0Jz)
		const _nameGSyjfg = {
		
	}
		const _optionAcKVOzs = new Command(_nameGSyjfg)
		const _returnValue68caWn = await _optionAcKVOzs._parseOptionsEnv()
		const _promiserSW5BWw = "pIDUUXCkIJxGKDIrbT7wSyzjczGh4MefisWbfLdxlVgUOIVW";
		const _arrayValueavkJ3IX = undefined;
		const _returnValue14zTOw = 1.755100577966413;
		const _arrayValueLnOZjI5 = () => { return _returnValue14zTOw };
		const _arrayValuehm0Bp7K = null;
		const _arrayValueV9LAPd = undefined;
		const _arrayValueSpRtum = 3.6470783685736237;
		const _returnValueppExGCL = [_arrayValueavkJ3IX, _arrayValueLnOZjI5, _arrayValuehm0Bp7K, _arrayValueV9LAPd, _arrayValueSpRtum]
		const _fnvPxXYws = () => { return _returnValueppExGCL };
		const _returnValueApuM3aI = await _optionAcKVOzs._chainOrCall(_promiserSW5BWw, _fnvPxXYws)
		const _returnValueV505CuI = undefined;
		const _promiseooLwniJ = () => { return _returnValueV505CuI };
		const _returnValuewtdG33K = undefined;
		const _fnhcXvNku = () => { return _returnValuewtdG33K };
		const _returnValueCndufVG = await _optionAcKVOzs._chainOrCall(_promiseooLwniJ, _fnhcXvNku)
		const _returnValueMx9WRx = await _HelpDKfrrP.optionDescription(_optionAcKVOzs)
		const _returnValuefzA3LkJ = "y3OCPJLpwlJr4ELLmK7FrmAm7I5";
		const _cmdMhJA37F = () => { return _returnValuefzA3LkJ };
		const _returnValuehW5RA0R = await _HelpDKfrrP.commandUsage(_cmdMhJA37F)
		const _returnValueAlCVcEX = -9.623154945995516;
		const _cmdMpFVDel = () => { return _returnValueAlCVcEX };
		const _returnValueR6zSdME = await _HelpDKfrrP.subcommandTerm(_cmdMpFVDel)
	});

	it('test for Help', async () => {
		const _HelpCzbsnVL = new Help()
		const _cmdqWfTFuA = -6.0762178968076315;
		const _returnValuegEa7P6P = await _HelpCzbsnVL.visibleCommands(_cmdqWfTFuA)
		const _arrayValueAPlBWEG = 9.340866227981447;
		const _arrayValueGCJUitw = "kQjU16CVw4dwThexPa8gP7YGecGKkRS7ZHa6a1PNWVqP7KNmkSaOJbLYPLRCLVxPxDdLKtMfIejYXq694ugs";
		const _arrayValueLdCzViW = undefined;
		const _cmdu0xERP = [_arrayValueAPlBWEG, _arrayValueGCJUitw, _arrayValueLdCzViW]
		const _helper27Z49P = "6AziGFO25XyPzbBRanN2rJFlaqhpsHAf3zeqm";
		const _returnValuemMVROR = await _HelpCzbsnVL.longestSubcommandTermLength(_cmdu0xERP, _helper27Z49P)
	});

	it('test for Help', async () => {
		const _HelpWEt2AK4 = new Help()
		const _argChoicesGTQghu2 = {
		
	}
		const _defaultValueO8Jivl5 = undefined;
		const _defaultValueDescriptionzuJkegi = null;
		const _returnValuexnEFaUK = 3.0692884584543023;
		const _arrayValuesSjjKYh = () => { return _returnValuexnEFaUK };
		const _arrayValuegOycAON = null;
		const _arrayValueSb967vZ = 6.595338882314884;
		const _descriptionfD3BNCp = [_arrayValuesSjjKYh, _arrayValuegOycAON, _arrayValueSb967vZ]
		const _argumentoCt0cl = {
			"argChoices": _argChoicesGTQghu2,
		"defaultValue": _defaultValueO8Jivl5,
		"defaultValueDescription": _defaultValueDescriptionzuJkegi,
		"description": _descriptionfD3BNCp
	}
		const _returnValueJ6t77uA = await _HelpWEt2AK4.argumentDescription(_argumentoCt0cl)
	});

	it('test for Help', async () => {
		const _HelprbLItOh = new Help()
		const _cmdsZ6vlFN = "itYm5aUPXLdLIAA7crw8JidPU9jkf7a44vk40MpaUPoUGXuFXrh3AMDwb7QcJPTwRvD27Ee8u7wNG";
		const _returnValueVNUT96p = await _HelprbLItOh.visibleOptions(_cmdsZ6vlFN)
		const _returnValuebh396Lw = undefined;
		const _cmd5ddBfG = () => { return _returnValuebh396Lw };
		const _returnValuednUhOvD = {
		
	}
		const _visibleOptionsenetoqs = () => { return _returnValuednUhOvD };
		const _returnValueg1Y8ZDS = "fe2EHYpXCvOOprvWyYjUxhypqYcPalEHUQhzQF0WyRs8IL7GCAmDPGqn14qS4iBBPX2Hb2LwgbRYD6fJ";
		const _returnValuerP578T9 = () => { return _returnValueg1Y8ZDS };
		const _optionTerm0SXPLZ = () => { return _returnValuerP578T9 };
		const _helperr0Yj44F = {
			"visibleOptions": _visibleOptionsenetoqs,
		"optionTerm": _optionTerm0SXPLZ
	}
		const _returnValueGxh37Bw = await _HelprbLItOh.longestOptionTermLength(_cmd5ddBfG, _helperr0Yj44F)
		const _cmdSuMAtT9 = null;
		const _helperw7CiwV = new Help()
		const _returnValuefyIvGnt = 0.6705253576731138;
		const _strA3gHULZ = () => { return _returnValuefyIvGnt };
		const _widthK4YSPr5 = 8.127432010101693;
		const _indentnO5qvE = -5.951456082889345;
		const _minColumnWidthHyGRtGn = -6.368412247306766;
		const _returnValueA6CiSGl = await _helperw7CiwV.wrap(_strA3gHULZ, _widthK4YSPr5, _indentnO5qvE, _minColumnWidthHyGRtGn)
		const __argsrLE3Ej = {
		
	}
		const __nameF0An5I = 8.860500592145172;
		const __aliasesv6Kijwt = {
		
	}
		const _optionsAuBeuSb = {
		
	}
		const _cmdMauV3z = {
			"_args": __argsrLE3Ej,
		"_name": __nameF0An5I,
		"_aliases": __aliasesv6Kijwt,
		"options": _optionsAuBeuSb
	}
		const _returnValuejpjQPLi = await _helperw7CiwV.subcommandTerm(_cmdMauV3z)
		const _cmdRtMCy7D = "WUbx5TzDxhl8Qcs5XKzx4QUYXYwcn7H5Oe";
		const _returnValueyXxioOU = await _helperw7CiwV.visibleArguments(_cmdRtMCy7D)
		const _returnValueWMGzFLw = await _HelprbLItOh.longestArgumentTermLength(_cmdSuMAtT9, _helperw7CiwV)
	});

	it('test for Help', async () => {
		const _HelpeJvyCAb = new Help()
		const _arrayValueV8xCKDM = null;
		const _cmdeKfYzGx = [_arrayValueV8xCKDM]
		const _sortSubcommandsM3zk4qK = "Ee6Vr36o95y861sA0TjTFCq1hslDm2YNWmAX5QkcAU11XSEeOFJV1X3c";
		const _returnValueyoXWGzW = false;
		const _subcommandTermmzGbyGq = () => { return _returnValueyoXWGzW };
		const _helperIzIHwo6 = {
			"sortSubcommands": _sortSubcommandsM3zk4qK,
		"subcommandTerm": _subcommandTermmzGbyGq
	}
		const _returnValueu69QmbH = await _HelpeJvyCAb.longestSubcommandTermLength(_cmdeKfYzGx, _helperIzIHwo6)
		const _cmdlnL2vF7 = []
		const _returnValueC2FuRa9 = "WIsSlNk6CZRPk6MFHxfglaL";
		const _visibleArgumentsqzWOb8P = () => { return _returnValueC2FuRa9 };
		const _returnValueAm9i1EF = null;
		const _argumentTermOAIWQav = () => { return _returnValueAm9i1EF };
		const _helperJUzGISF = {
			"visibleArguments": _visibleArgumentsqzWOb8P,
		"argumentTerm": _argumentTermOAIWQav
	}
		const _returnValuei2LIMVE = await _HelpeJvyCAb.longestArgumentTermLength(_cmdlnL2vF7, _helperJUzGISF)
		const _optiondyhlrlK = "6La9Spb6YlX4rzDmQ83hFZBDQTJYyZ5CKyal0uH4A5USIiIAB7aUkv9tMyzMqrD5Ou1UCt";
		const _returnValueRXDKoTc = await _HelpeJvyCAb.optionTerm(_optiondyhlrlK)
	});

	it('test for Help', async () => {
		const _HelpWQIvYth = new Help()
		const _cmdGq7xasv = false;
		const _helperMCUFIQe = "RLbqBYLb3VTYMMO4BScJ95dIz6RDrL86CXVcdyaDFl";
		const _returnValueVnjU1r = await _HelpWQIvYth.longestOptionTermLength(_cmdGq7xasv, _helperMCUFIQe)
		const _returnValuedU5IKX = -3.29511599958189;
		const _cmdr3wn9YV = () => { return _returnValuedU5IKX };
		const _returnValueWwFqNye = await _HelpWQIvYth.visibleArguments(_cmdr3wn9YV)
	});

	it('test for Help', async () => {
		const _HelpIcdk0uw = new Help()
		const _returnValueIHZhaYG = true;
		const _optionXftZ94P = () => { return _returnValueIHZhaYG };
		const _returnValueRvISHGB = await _HelpIcdk0uw.optionDescription(_optionXftZ94P)
		const __namerc6tV3R = {
		
	}
		const __aliaseswl6MOYt = {
		
	}
		const _arrayValuedkrc1MX = null;
		const _arrayValueB3nht2z = [_arrayValuedkrc1MX]
		const _arrayValueOKLisA = "uV4WR6nCetaAlwUoTaVX5bspX7xsCpIfQXn5N72ZPa14OwBdLNbCKo0uoxGhjqJUtBVfb69ku522GCeK0eSSPMV";
		const _parentrCw6jHh = [_arrayValueB3nht2z, _arrayValueOKLisA]
		const _returnValueMduwfGq = undefined;
		const _usagelrApKD = () => { return _returnValueMduwfGq };
		const _cmdd0LPNX9 = {
			"_name": __namerc6tV3R,
		"_aliases": __aliaseswl6MOYt,
		"parent": _parentrCw6jHh,
		"usage": _usagelrApKD
	}
		const _returnValuehjbCuQt = await _HelpIcdk0uw.commandUsage(_cmdd0LPNX9)
		const _exitCodeORr1Ide = {
		
	}
		const _codemI4XlLf = true;
		const _messagehpVxKFU = true;
		const _argumentqdBhkGb = new CommanderError(_exitCodeORr1Ide, _codemI4XlLf, _messagehpVxKFU)
		const _returnValueT9QDOA = await _HelpIcdk0uw.argumentTerm(_argumentqdBhkGb)
		const _arrayValueIfHWYTY = undefined;
		const _nameTOKD2Vr = [_arrayValueIfHWYTY]
		const _description0ZCyYP = 5.784813658771256;
		const _argumentfJDQNcG = new Argument(_nameTOKD2Vr, _description0ZCyYP)
		const _valueRH7YJi9 = null;
		const _previous1J5wgW = true;
		const _returnValuexCdyi0E = await _argumentfJDQNcG._concatValue(_valueRH7YJi9, _previous1J5wgW)
		const _returnValue6jFfkl = await _argumentfJDQNcG.argOptional()
		const _returnValueBIHGDTu = await _HelpIcdk0uw.argumentTerm(_argumentfJDQNcG)
		const _cmdXfTGnpB = true;
		const _helperPYk4MCf = new Help()
		const _flagsW871R17 = "8gHjg99k7OynvqQlaDmZ1vUqPJjTBczGt017W0q51nLDeMHvIADrOxthYfOCYbQHECBO62G";
		const _optionv05xry3 = {
			"flags": _flagsW871R17
	}
		const _returnValueNKgzY0Q = await _helperPYk4MCf.optionTerm(_optionv05xry3)
		const _returnValuei4FYtN = -1.6050038928342776;
		const _descriptionz4i5N3C = () => { return _returnValuei4FYtN };
		const _cmdWrf7QKO = {
			"description": _descriptionz4i5N3C
	}
		const _returnValueR5dBx41 = await _helperPYk4MCf.subcommandDescription(_cmdWrf7QKO)
		const _returnValueMKwUhNz = await _HelpIcdk0uw.longestArgumentTermLength(_cmdXfTGnpB, _helperPYk4MCf)
	});

	it('test for Help', async () => {
		const _HelpIZ5pbY = new Help()
		const _arrayValuegAHdrjA = "yXSzi";
		const _arrayValueW1rRFFp = "Q7RyCIWesPGNS1hcxlb";
		const _arrayValueqh2Q19s = "aAf6aeadGrzlz3S";
		const _returnValuegGSDzG9 = [_arrayValueW1rRFFp, _arrayValueqh2Q19s]
		const _arrayValueqVQ4H1B = () => { return _returnValuegGSDzG9 };
		const _returnValueF5Mmzh4 = [_arrayValuegAHdrjA, _arrayValueqVQ4H1B]
		const _cmdHyLa9Nv = () => { return _returnValueF5Mmzh4 };
		const _returnValueB2ubtHF = await _HelpIZ5pbY.subcommandDescription(_cmdHyLa9Nv)
		const __nameAGIdMIu = 4.427108670977727;
		const __aliasesLMlhvmn = {
		
	}
		const _parente5ywSVJ = "VJIniT6siGQ3VyNe1TViqOlVCGhS7A0mON2BFJlmJUlHee1LkHIiKUWQdkX53huGIIjE1kMY4zQ8kHpk1p7Y22ix";
		const _returnValueLkzwwxy = undefined;
		const _usageR2eoOqG = () => { return _returnValueLkzwwxy };
		const _cmdSoMTinY = {
			"_name": __nameAGIdMIu,
		"_aliases": __aliasesLMlhvmn,
		"parent": _parente5ywSVJ,
		"usage": _usageR2eoOqG
	}
		const _returnValueROKqmo6 = await _HelpIZ5pbY.commandUsage(_cmdSoMTinY)
		const _flagsd9ssJ6Q = "2HGWXoiSWSV2hC6T45MPygEUaltytHOITqOXEpYrGTajgSXecGj3VFeuKpvJIPsG1MvdTOXdXvh3GFmKgDJJojfI3Ny";
		const _descriptionDSVyv8i = "r7ELNF9xzH9Qayaif1BtRmLaAGc3lxnQqVFihcAaCtjPXQemR5WHa663BEFW3r6B6qBm";
		const _optionUcddfOE = new Option(_flagsd9ssJ6Q, _descriptionDSVyv8i)
		const _valuer3u8Zij = "fKmsQspJVDUvtk77UDvx4TTW63f4aSOQHH5KHGJnuOMiltXm46p3grRdmqz4FlgImeu2T9yPNnBwFmtZKYXDNj0nWl6NMqrT";
		const _descriptionhFwir6t = undefined;
		const _returnValueU2QOfia = await _optionUcddfOE.default(_valuer3u8Zij, _descriptionhFwir6t)
		const _nameG0vhM8M = {
		
	}
		const _returnValuehashUM7 = await _optionUcddfOE.env(_nameG0vhM8M)
		const _returnValueWtrWTTd = await _optionUcddfOE.name()
		const _returnValueyR6dSgl = await _HelpIZ5pbY.optionDescription(_optionUcddfOE)
	});

	it('test for Help', async () => {
		const _HelpPWK3LH = new Help()
		const _arrayValueErY6eEv = "7aqBeImZgH5BSkvRSgT7fCC0rmOHV9BFQNpxlaQCKUnlhfJ9dbz0";
		const _returnValueBnYp6FS = null;
		const _arrayValueGZrEJft = () => { return _returnValueBnYp6FS };
		const _cmdTlijpQ6 = [_arrayValueErY6eEv, _arrayValueGZrEJft]
		const _returnValuevpDJ999 = await _HelpPWK3LH.subcommandTerm(_cmdTlijpQ6)
	});

	it('test for Help', async () => {
		const _HelpRAqhnNa = new Help()
		const _cmdRfQdLLz = null;
		const _helpercuAHBur = null;
		const _returnValueEIs1KAp = await _HelpRAqhnNa.formatHelp(_cmdRfQdLLz, _helpercuAHBur)
		const _nameWCoPm3 = false;
		const _cmdy51e4eZ = new Command(_nameWCoPm3)
		const _keyON9WHOC = 4.130801135870769;
		const _arrayValueAlMr3sn = undefined;
		const _valueLAsa9Vl = [_arrayValueAlMr3sn]
		const _returnValueU4JTdwQ = await _cmdy51e4eZ.setOptionValue(_keyON9WHOC, _valueLAsa9Vl)
		const _returnValuewCrKFU4 = await _HelpRAqhnNa.visibleArguments(_cmdy51e4eZ)
		const _cmdesNon3c = 2.752975031339499;
		const _returnValueRejoZQz = await _HelpRAqhnNa.visibleCommands(_cmdesNon3c)
		const _exitCodeqJAf3EV = "f9XRu2z1wm9BPQF70wl8pE9iaYMNIjTg5ufrFX7tfg4SiweBBbK";
		const _codebv10K9M = null;
		const _messagelaO7pDF = undefined;
		const _argumentx0DrYZ = new CommanderError(_exitCodeqJAf3EV, _codebv10K9M, _messagelaO7pDF)
		const _returnValueZmiQe72 = await _HelpRAqhnNa.argumentTerm(_argumentx0DrYZ)
		const _returnValueJ7jmUgW = true;
		const _cmdeSvGc6Q = () => { return _returnValueJ7jmUgW };
		const _returnValueFJOkjMJ = await _HelpRAqhnNa.subcommandTerm(_cmdeSvGc6Q)
	});

	it('test for Help', async () => {
		const _Helph03gB4 = new Help()
		const _returnValueviwKQrQ = 7.148054598960673;
		const _cmdWB49bb4 = () => { return _returnValueviwKQrQ };
		const _helperwzQdY1f = "FMt3gKaz4RoEdsFrBcTiHKFP5bqkXpOsmJUNEhan";
		const _returnValueAVr0fsO = await _Helph03gB4.padWidth(_cmdWB49bb4, _helperwzQdY1f)
		const _returnValuetV8zoQV = "";
		const _descriptionYqulNlU = () => { return _returnValuetV8zoQV };
		const _cmdGhhUIxP = {
			"description": _descriptionYqulNlU
	}
		const _returnValueORGZ6Pk = await _Helph03gB4.subcommandDescription(_cmdGhhUIxP)
	});

	it('test for Help', async () => {
		const _HelplvV9IrP = new Help()
		const _strvkPvnLw = "GdsRqlRGK1bPeXXfsYxaVDGhzq658BxOyHMhDWk7OCZneDjSJR0APsuHb4rmInpIuRP";
		const _widthU7Va4U = 6.249253231521081;
		const _indentVnVnfy2 = -8.912798954097763;
		const _minColumnWidthCYYuRwg = 7.374704217142451;
		const _returnValueH3dICpP = await _HelplvV9IrP.wrap(_strvkPvnLw, _widthU7Va4U, _indentVnVnfy2, _minColumnWidthCYYuRwg)
		const _cmdeChFyqF = "UanbwQjPNgM7343Q55Ot3SdUgt0rAVYvxspBs131FnlPYYrPKSta5PG2kbI1RfkIGV";
		const _returnValueOcym8Ln = undefined;
		const _helperUOjx03Q = () => { return _returnValueOcym8Ln };
		const _returnValueX1bEMqi = await _HelplvV9IrP.longestArgumentTermLength(_cmdeChFyqF, _helperUOjx03Q)
		const _cmdc6dYyFA = 8.121415441125887;
		const _helperIefr0DK = -2.0147107819883026;
		const _returnValuettGDUZD = await _HelplvV9IrP.longestOptionTermLength(_cmdc6dYyFA, _helperIefr0DK)
		const _cmdKDhxIZh = undefined;
		const _returnValueFnmPUFd = true;
		const _visibleOptionsAiGRPj0 = () => { return _returnValueFnmPUFd };
		const _arrayValuetIdvRM2 = []
		const _arrayValueVRFst8N = null;
		const _returnValueA1l9DF = -5.096891668070963;
		const _arrayValuevhssghf = () => { return _returnValueA1l9DF };
		const _arrayValuer2exL3q = [_arrayValuevhssghf]
		const _arrayValuehLgAdMV = "e8VlpRLv4Y91URlyuERWQaqDIvlSXCf";
		const _returnValueoCBJva4 = null;
		const _arrayValueLcMwy6e = () => { return _returnValueoCBJva4 };
		const _arrayValuewvwhXfU = null;
		const _arrayValueKiL16C = [_arrayValuehLgAdMV, _arrayValueLcMwy6e, _arrayValuewvwhXfU]
		const _arrayValueq0tDF5 = null;
		const _arrayValuepvI043 = [_arrayValueVRFst8N, _arrayValuer2exL3q, _arrayValueKiL16C, _arrayValueq0tDF5]
		const _returnValueINIxnHO = [_arrayValuetIdvRM2, _arrayValuepvI043]
		const _optionTermiGZ9ctE = () => { return _returnValueINIxnHO };
		const _helperlHiKbAL = {
			"visibleOptions": _visibleOptionsAiGRPj0,
		"optionTerm": _optionTermiGZ9ctE
	}
		const _returnValueXH4Hqqx = await _HelplvV9IrP.longestOptionTermLength(_cmdKDhxIZh, _helperlHiKbAL)
	});

	it('test for Help', async () => {
		const _HelpU3H9YRC = new Help()
		const _arrayValueh0gdsRc = 7.9697907790484805;
		const _arrayValueg5Yskwa = false;
		const _cmdJpfEypE = [_arrayValueh0gdsRc, _arrayValueg5Yskwa]
		const _returnValuednfLQAT = await _HelpU3H9YRC.commandDescription(_cmdJpfEypE)
		const _cmd1uvJhl = false;
		const _returnValuejPZZeBN = "NmVEvfdm5F1x68T5lRCDcGO3IaAGESl3TFiXpyx8Q3UZvlneNjokKeaRhcI90ejjI7i6EJtm8aqv4w7HEEYPVcxnDdOBR";
		const _visibleOptionsvlTnE8I = () => { return _returnValuejPZZeBN };
		const _arrayValueRA0QKI0 = false;
		const _arrayValueYvM7F5D = 9.477783411684271;
		const _returnValue3BKJT7 = [_arrayValueRA0QKI0, _arrayValueYvM7F5D]
		const _optionTermVZW9fDA = () => { return _returnValue3BKJT7 };
		const _helperXYGEM0H = {
			"visibleOptions": _visibleOptionsvlTnE8I,
		"optionTerm": _optionTermVZW9fDA
	}
		const _returnValuedvE0Zvt = await _HelpU3H9YRC.longestOptionTermLength(_cmd1uvJhl, _helperXYGEM0H)
	});

	it('test for Help', async () => {
		const _HelpxNHs8if = new Help()
		const _argChoicesPsnhvr0 = {
		
	}
		const _negateZjz2eA0 = null;
		const _defaultValueZXLrDIF = undefined;
		const _defaultValueDescriptionMmSPoiE = {
		
	}
		const _envVarN8rmKAm = undefined;
		const _descriptionxVY8PTT = null;
		const _optionj8mNY50 = {
			"argChoices": _argChoicesPsnhvr0,
		"negate": _negateZjz2eA0,
		"defaultValue": _defaultValueZXLrDIF,
		"defaultValueDescription": _defaultValueDescriptionMmSPoiE,
		"envVar": _envVarN8rmKAm,
		"description": _descriptionxVY8PTT
	}
		const _returnValueoPWhRb5 = await _HelpxNHs8if.optionDescription(_optionj8mNY50)
		const _commandsR0iJAyU = "w3cEmWAv2mXUs6eR6IN52VYL7oUyppSyuzCyjmJATaeTvcArLd7Aa16iiT250W8TRTQugjVFer";
		const _arrayValueybhexpJ = undefined;
		const _arrayValueLRzDyqR = "IGoQgV7ZQf5EXnCrqoHgDxMJaif3UgxNSBL7qWYOEBIHIzGIKoMo0ZTT9AKTWQqMziw4M5IXKVz8tLFdeojMyTz1N8qGLaNu";
		const _returnValueckxvUaf = [_arrayValueybhexpJ, _arrayValueLRzDyqR]
		const __hasImplicitHelpCommandjbKEcE3 = () => { return _returnValueckxvUaf };
		const __helpCommandnameAndArgsaBtwJx6 = {
		
	}
		const _returnValueOhltHbK = []
		const _createCommand4ebnR5 = () => { return _returnValueOhltHbK };
		const __helpCommandDescriptionUFqS9lH = "johQU2rz8Td4qxh5SfKdkvxoVKfLZ7ym";
		const _cmdEk0R1Lc = {
			"commands": _commandsR0iJAyU,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandjbKEcE3,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsaBtwJx6,
		"createCommand": _createCommand4ebnR5,
		"_helpCommandDescription": __helpCommandDescriptionUFqS9lH
	}
		const _returnValueKlsCtgV = await _HelpxNHs8if.visibleCommands(_cmdEk0R1Lc)
		const _commandsqvx08Np = {
		
	}
		const _returnValuerRGsmop = null;
		const __hasImplicitHelpCommandnJMR5Bl = () => { return _returnValuerRGsmop };
		const __helpCommandnameAndArgsqkEiEpW = {
		
	}
		const _returnValues2XsDjR = undefined;
		const _createCommandxO1Gf2R = () => { return _returnValues2XsDjR };
		const __helpCommandDescriptionI3CqiNL = undefined;
		const _cmdytTBzjQ = {
			"commands": _commandsqvx08Np,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandnJMR5Bl,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsqkEiEpW,
		"createCommand": _createCommandxO1Gf2R,
		"_helpCommandDescription": __helpCommandDescriptionI3CqiNL
	}
		const _returnValueJbpH7uo = await _HelpxNHs8if.visibleCommands(_cmdytTBzjQ)
		const _cmdfA5ZCzm = "dGYDIGioLAREyKbR9bJAO61T9VxSY3JvJLaJKkn5PkU";
		const _arrayValueuqC2sA2 = {
		
	}
		const _returnValuebqrFgnK = [_arrayValueuqC2sA2]
		const _longestOptionTermLengthAGVFz9N = () => { return _returnValuebqrFgnK };
		const _returnValueacIQDNn = -3.2359386579785614;
		const _longestSubcommandTermLengthjgTkx4h = () => { return _returnValueacIQDNn };
		const _returnValueMtGZhVv = undefined;
		const _longestArgumentTermLengthQijqU4h = () => { return _returnValueMtGZhVv };
		const _helperSwdRWI = {
			"longestOptionTermLength": _longestOptionTermLengthAGVFz9N,
		"longestSubcommandTermLength": _longestSubcommandTermLengthjgTkx4h,
		"longestArgumentTermLength": _longestArgumentTermLengthQijqU4h
	}
		const _returnValueIdcFcTw = await _HelpxNHs8if.padWidth(_cmdfA5ZCzm, _helperSwdRWI)
	});

	it('test for Help', async () => {
		const _HelpswPYb8M = new Help()
		const _returnValue8970f1 = {
		
	}
		const _matchqMY134d = () => { return _returnValue8970f1 };
		const _arrayValuem07rlS = "T1HGFnnoo7KHHCbXHkXnpGg6pluKzuxJW3XeUgbLJLpBu";
		const _arrayValueM54wpbp = false;
		const _arrayValueFRrXf58 = "w7rDgZh8oB5y2mjFBPhifRDB8xvacg6jy46iT9o0j3wGR9eDWYNXnrU2";
		const _arrayValueC3YofMc = [_arrayValueFRrXf58]
		const _returnValueDQu6ELC = [_arrayValuem07rlS, _arrayValueM54wpbp, _arrayValueC3YofMc]
		const _substrCimH0cM = () => { return _returnValueDQu6ELC };
		const _strV5ByUwZ = {
			"match": _matchqMY134d,
		"substr": _substrCimH0cM
	}
		const _widthOGq7SMw = false;
		const _indentp1XlPyj = -2.1599696339165124;
		const _minColumnWidthNjhcC6m = 5.945382168164851;
		const _returnValueaoFE8LF = await _HelpswPYb8M.wrap(_strV5ByUwZ, _widthOGq7SMw, _indentp1XlPyj, _minColumnWidthNjhcC6m)
		const _arrayValueSU7ON3G = {
		
	}
		const _arrayValueW7peKjZ = "vJwSGrxY2SOOn3Acpo4aTCo";
		const _arrayValueeInRGhR = null;
		const _returnValueHvHxMR9 = [_arrayValueSU7ON3G, _arrayValueW7peKjZ, _arrayValueeInRGhR]
		const _arrayValueOuO7Cc = () => { return _returnValueHvHxMR9 };
		const _arrayValueHc0jyAO = {
		
	}
		const _arrayValueRLCQTOT = [_arrayValueHc0jyAO]
		const _arrayValueuRjx4BX = [_arrayValueOuO7Cc, _arrayValueRLCQTOT]
		const _arrayValuexyu5aDV = "xxqkG";
		const _cmdLEeavLx = [_arrayValueuRjx4BX, _arrayValuexyu5aDV]
		const _helperAb5GE9U = new Help()
		const _returnValueAZz1zCQ = false;
		const _cmdNBE1O50 = () => { return _returnValueAZz1zCQ };
		const _returnValueaEGQQzG = undefined;
		const _arrayValueJAAQPS = () => { return _returnValueaEGQQzG };
		const _arrayValuePswkDB = true;
		const _arrayValuerD0fP7N = null;
		const _arrayValuet7v55Kk = undefined;
		const _helperemG5lAC = [_arrayValueJAAQPS, _arrayValuePswkDB, _arrayValuerD0fP7N, _arrayValuet7v55Kk]
		const _returnValueVuKGBHV = await _helperAb5GE9U.longestArgumentTermLength(_cmdNBE1O50, _helperemG5lAC)
		const _cmdMO9bdG8 = "a7QSZW7DHF1TlnM44GO1muGS2ObezMIu5MLC8lEoSYmpI1OchUcvzcoy5tHoFYSCuaLyRDvzbh1GrTEfSkUkCcy9BJ85O";
		const _helperpdvZaYr = new Help()
		const _cmdIZqarXP = undefined;
		const _returnValueSH4SKV5 = {
		
	}
		const _visibleArgumentsbdBOA0b = () => { return _returnValueSH4SKV5 };
		const _returnValueeNAMicJ = -1.17145121601237;
		const _argumentTermhBg8y0L = () => { return _returnValueeNAMicJ };
		const _helperxapBPtK = {
			"visibleArguments": _visibleArgumentsbdBOA0b,
		"argumentTerm": _argumentTermhBg8y0L
	}
		const _returnValuetDt21T = await _helperpdvZaYr.longestArgumentTermLength(_cmdIZqarXP, _helperxapBPtK)
		const _returnValueZJtGXWe = await _helperAb5GE9U.longestOptionTermLength(_cmdMO9bdG8, _helperpdvZaYr)
		const _namefoMjdUX = "tGJeANcdoNeSYKyYC28tkOWnpYb2RSf4m8ibQ8xjfoQy79d9dvMQ7GvaEne7zWIjxG3xBScjCxsJ9h3r2wDwsgJCcCWbCqfdl9B";
		const _descriptionUeRdUlh = 2.901993496446565;
		const _cmdr96GCKb = new Argument(_namefoMjdUX, _descriptionUeRdUlh)
		const _valuelmBZLN = {
		
	}
		const _descriptionuMaC91A = undefined;
		const _returnValue0nSLNH = await _cmdr96GCKb.default(_valuelmBZLN, _descriptionuMaC91A)
		const _returnValuej7ysr5f = "pILhe9JAlTwY3bjW6qHD9Yb6JSQMcp9ILoSLUFibI8TdrqM5226cK4HgF0wSDkhMXhekB8gPpr2bgHpIUHTcfWI1";
		const _includesN5yBrua = () => { return _returnValuej7ysr5f };
		const _returnValueWQRJ0yZ = undefined;
		const _joinan2Qcx5 = () => { return _returnValueWQRJ0yZ };
		const _valuesjusIjwh = {
			"includes": _includesN5yBrua,
		"join": _joinan2Qcx5
	}
		const _returnValuehU3Ejwu = await _cmdr96GCKb.choices(_valuesjusIjwh)
		const _returnValuerGFqhSi = await _cmdr96GCKb.name()
		const _returnValuekvR04Gf = await _helperAb5GE9U.commandDescription(_cmdr96GCKb)
		const _cmdibcLrA0 = "O9NvcP1TeBbFeEjNdMhnErtRaWkbE2dvI8W";
		const _returnValueWm82urF = await _helperAb5GE9U.visibleArguments(_cmdibcLrA0)
		const _returnValueAn1nGqX = await _HelpswPYb8M.longestOptionTermLength(_cmdLEeavLx, _helperAb5GE9U)
	});

	it('test for Help', async () => {
		const _HelpOsIAXXR = new Help()
		const _returnValuehSc0vfa = "JOT8An1ygznsinDk2KnB4P7UL36XhJkkSEnir9IE3nF5lgbWA74ZG7fTfp9rXl4s3f9ACK";
		const _nameQbE0yW0 = () => { return _returnValuehSc0vfa };
		const _argumentWlq7pym = {
			"name": _nameQbE0yW0
	}
		const _returnValuelaLsMR = await _HelpOsIAXXR.argumentTerm(_argumentWlq7pym)
		const _arrayValueI46DTI2 = true;
		const _arrayValue3W0TMv = null;
		const _arrayValuef2tZJcP = null;
		const _arrayValueQX1ckT = true;
		const _arrayValuebD6sZ4R = true;
		const _arrayValuekhzIhbp = false;
		const _arrayValuell4B5b8 = [_arrayValuebD6sZ4R, _arrayValuekhzIhbp]
		const _argumentWTbrH9V = [_arrayValueI46DTI2, _arrayValue3W0TMv, _arrayValuef2tZJcP, _arrayValueQX1ckT, _arrayValuell4B5b8]
		const _returnValueVwPGH6 = await _HelpOsIAXXR.argumentDescription(_argumentWTbrH9V)
		const _cmdwuxSIW = undefined;
		const _returnValueLgOwNE2 = {
		
	}
		const _helperfEQdKcg = () => { return _returnValueLgOwNE2 };
		const _returnValueNIjbdV4 = await _HelpOsIAXXR.longestSubcommandTermLength(_cmdwuxSIW, _helperfEQdKcg)
	});

	it('test for Help', async () => {
		const _HelpRgFhSzM = new Help()
		const _returnValuetZwaXLN = -0.5721870078361952;
		const _optionNlbNp8I = () => { return _returnValuetZwaXLN };
		const _returnValueI5NSSi = await _HelpRgFhSzM.optionDescription(_optionNlbNp8I)
		const _namejhROWl = undefined;
		const _cmdc06AxJW = new Command(_namejhROWl)
		const _strxLJ0eaV = undefined;
		const _returnValueRIcVfOi = await _cmdc06AxJW.usage(_strxLJ0eaV)
		const _returnValuewKwJjI5 = await _HelpRgFhSzM.subcommandTerm(_cmdc06AxJW)
		const _returnValueoiK4HXH = undefined;
		const _argChoicesFfbnlyu = () => { return _returnValueoiK4HXH };
		const _defaultValueu6EP5mf = undefined;
		const _defaultValueDescriptionGKgcjsW = undefined;
		const _descriptionHnGT4XN = true;
		const _argumentoUx5ZcO = {
			"argChoices": _argChoicesFfbnlyu,
		"defaultValue": _defaultValueu6EP5mf,
		"defaultValueDescription": _defaultValueDescriptionGKgcjsW,
		"description": _descriptionHnGT4XN
	}
		const _returnValuerqOCWjm = await _HelpRgFhSzM.argumentDescription(_argumentoUx5ZcO)
		const _arrayValueNR0WzS = -7.077342263253657;
		const _arrayValuez6wI5WK = false;
		const _arrayValueVyIta2 = null;
		const _arrayValuetVlC6dZ = "62PkyUD0osUpvPHTPVTbZdWoo2WJbZdY1qbRYU7kHueco4lQ9Lb9VYp83aSOjKGdKbxFgL1WKQ2ZYeJEO";
		const _arrayValueBuLXsW = "wuDuKOLgL4M8xHfCDYKgEFUaTu14WdxW4TCKPEgCpMvrr";
		const _arrayValuefAWYdC = false;
		const _arrayValueBdOnvzf = [_arrayValueVyIta2, _arrayValuetVlC6dZ, _arrayValueBuLXsW, _arrayValuefAWYdC]
		const _optionD3iCNan = [_arrayValueNR0WzS, _arrayValuez6wI5WK, _arrayValueBdOnvzf]
		const _returnValueLHFBeXm = await _HelpRgFhSzM.optionDescription(_optionD3iCNan)
	});

	it('test for Help', async () => {
		const _HelpzIFbKY3 = new Help()
		const _flagsVnqBiFZ = "GhnRYxJXuWI4uS71dXpg4AqNN7I9bP8J6sWmS3nn2qPQCEgIDj7bh2ayQdKgIGwFNRIY2UlIzSDDaC";
		const _descriptioncMMBvi = -4.214819229526511;
		const _argumentvtxzB7r = new Option(_flagsVnqBiFZ, _descriptioncMMBvi)
		const _fnknFF5T4 = undefined;
		const _returnValuebAqzlNV = await _argumentvtxzB7r.argParser(_fnknFF5T4)
		const _mandatorydecSmOw = true;
		const _returnValuew8k6EII = await _argumentvtxzB7r.makeOptionMandatory(_mandatorydecSmOw)
		const _fnGHkLnGa = undefined;
		const _returnValueVcMzffz = await _argumentvtxzB7r.argParser(_fnGHkLnGa)
		const _returnValuebmX9Xre = await _HelpzIFbKY3.argumentDescription(_argumentvtxzB7r)
		const _cmdpzdot5 = "FcWsNYpd6QmX02ZnTaMpOGhzVKk15wqkucC6XGUMafqW";
		const _returnValuekyF38R = await _HelpzIFbKY3.commandUsage(_cmdpzdot5)
		const _cmdIum7xXJ = "Fw4x7KaVLE5jJdi0JJv0lbYEzRHW6t3vhVDrUwoGbEhdJGl";
		const _returnValuenwAQwj = await _HelpzIFbKY3.commandUsage(_cmdIum7xXJ)
		const _name3SQgxM = undefined;
		const _cmdIWbs5Fx = new Command(_name3SQgxM)
		const _allowUnknownt8amY4A = true;
		const _returnValuee0UJRid = await _cmdIWbs5Fx.allowUnknownOption(_allowUnknownt8amY4A)
		const _enableOrNameAndArgsMWtUOIQ = "";
		const _descriptionmYAyAYc = undefined;
		const _returnValuecB6UO6o = await _cmdIWbs5Fx.addHelpCommand(_enableOrNameAndArgsMWtUOIQ, _descriptionmYAyAYc)
		const _returnValuemWgyiEI = await _cmdIWbs5Fx._hasImplicitHelpCommand()
		const _flagspnioZmF = 5.2318102988039215;
		const _descriptionuGVB2Eq = true;
		const _fnqRvT8PC = true;
		const _defaultValueochE6lH = "k8IUmtKTwfehMvtXYtgfHGqznEgfQ3ksyWbo8y4jr6OL2IUNi9SuPFkY2bHDePc";
		const _returnValueaVw8OB = await _cmdIWbs5Fx.requiredOption(_flagspnioZmF, _descriptionuGVB2Eq, _fnqRvT8PC, _defaultValueochE6lH)
		const _returnValueN5g4KBs = await _HelpzIFbKY3.subcommandTerm(_cmdIWbs5Fx)
	});

	it('test for Help', async () => {
		const _HelpIA7EP8H = new Help()
		const _strQEeGgvS = "nhStKffgXH1PixRyj7UOOsFYblOh8DFV";
		const _widthez9OrEW = -6.247483575820386;
		const _indentaFzbr0d = -2.379761839669375;
		const _minColumnWidthYnCPD1d = 1.802932743637486;
		const _returnValuevsrDc0r = await _HelpIA7EP8H.wrap(_strQEeGgvS, _widthez9OrEW, _indentaFzbr0d, _minColumnWidthYnCPD1d)
		const _cmdEG0ePE = null;
		const _helper6v8MrR = "xgE2PmgLEhhg1WNKsnVp8hEHs8VMVmf6Tsj0c3TPPqa1iV8vbmk45ZABP3PSbh1K76CfYYu2zR";
		const _returnValueOzoCIl9 = await _HelpIA7EP8H.longestSubcommandTermLength(_cmdEG0ePE, _helper6v8MrR)
		const _arrayValueipk9vvV = 2.0419485179117185;
		const _arrayValueSG2toB4 = false;
		const _arrayValue05fWYF = -6.061881956424851;
		const _messages6AHJcE = [_arrayValueipk9vvV, _arrayValueSG2toB4, _arrayValue05fWYF]
		const _argumentm2WpxWl = new InvalidArgumentError(_messages6AHJcE)
		const _returnValueI0QZcbX = await _HelpIA7EP8H.argumentTerm(_argumentm2WpxWl)
	});

	it('test for Help', async () => {
		const _Helpm6AU90E = new Help()
		const _returnValueDH2KKdG = {
		
	}
		const _nameFVWHmpv = () => { return _returnValueDH2KKdG };
		const _cmdXTsv5l = new Command(_nameFVWHmpv)
		const _strjKOzSp = {
		
	}
		const _returnValueaUUn5n = await _cmdXTsv5l.name(_strjKOzSp)
		const _strRGKoa5 = "ydj1cNstJQJXeKA8AV1wn9VzccfeKgZQveSECihoS7H2bzTrtCuXdMjBGhWU7MAC73Aq";
		const _argsDescriptionrnbWlVP = undefined;
		const _returnValueAIo7FL4 = await _cmdXTsv5l.description(_strRGKoa5, _argsDescriptionrnbWlVP)
		const _contextOptionsGafOGoF = "2EkGQvMCyhVYbeElAjKp3qIsIvNjGP6rqwCL96zqfHNLvzXP3uAsxUniXFb2bbeRcqh3LFIDPg";
		const _returnValue3V7fSS = await _cmdXTsv5l._getHelpContext(_contextOptionsGafOGoF)
		const _keyzdmuxMO = null;
		const _valuehUxzAw = true;
		const _sourcet1nXFt = null;
		const _returnValueWbPshP3 = await _cmdXTsv5l.setOptionValueWithSource(_keyzdmuxMO, _valuehUxzAw, _sourcet1nXFt)
		const _strv6Xhstw = undefined;
		const _returnValuelHItE3R = await _cmdXTsv5l.usage(_strv6Xhstw)
		const _returnValueum3IiT3 = await _Helpm6AU90E.visibleOptions(_cmdXTsv5l)
	});

	it('test for Help', async () => {
		const _HelpegzOd7A = new Help()
		const _returnValuevQqvudi = null;
		const _slice4lhSjH = () => { return _returnValuevQqvudi };
		const _nameY9ZlRLy = {
			"slice": _slice4lhSjH
	}
		const _descriptionz2Vs2nU = true;
		const _argumentWU9oBOj = new Argument(_nameY9ZlRLy, _descriptionz2Vs2nU)
		const _returnValuedk5HKpB = await _argumentWU9oBOj.argRequired()
		const _returnValueddKljq = await _argumentWU9oBOj.argOptional()
		const _returnValuekri9EIF = await _HelpegzOd7A.argumentTerm(_argumentWU9oBOj)
		const _nameJEabGoM = {
		
	}
		const _cmdc1mVJJQ = new Command(_nameJEabGoM)
		const _fnPuQ7EmK = {
		
	}
		const _returnValueswkN6pd = await _cmdc1mVJJQ.exitOverride(_fnPuQ7EmK)
		const _allowUnknownciCjad = false;
		const _returnValueTL1pZKq = await _cmdc1mVJJQ.allowUnknownOption(_allowUnknownciCjad)
		const _returnValuebwJ7eRY = await _HelpegzOd7A.visibleCommands(_cmdc1mVJJQ)
		const _nameKJXiImJ = 5.678112442173939;
		const _cmda5A3hv2 = new Command(_nameKJXiImJ)
		const _optionBEMyanG = undefined;
		const _returnValueknfoc69 = await _cmda5A3hv2.addOption(_optionBEMyanG)
		const _returnValueDCYG4i = await _cmda5A3hv2._checkNumberOfArguments()
		const _exitCodeza27YtL = {
		
	}
		const _arrayValuefFzgEH1 = -8.166539311256855;
		const _arrayValueLCX8qQM = true;
		const _arrayValueJtqVvw = true;
		const _arrayValueRSpN9s = [_arrayValueLCX8qQM, _arrayValueJtqVvw]
		const _arrayValueJSqo1Em = 0.08971234842652898;
		const _codet4ew6Kj = [_arrayValuefFzgEH1, _arrayValueRSpN9s, _arrayValueJSqo1Em]
		const _messagegWZem5 = false;
		const _returnValueh6P4Zo = await _cmda5A3hv2._displayError(_exitCodeza27YtL, _codet4ew6Kj, _messagegWZem5)
		const _returnValuec8yid3Q = await _HelpegzOd7A.subcommandDescription(_cmda5A3hv2)
	});

	it('test for Help', async () => {
		const _HelpH3z4AhL = new Help()
		const _returnValuejDIKHa1 = 3.2743487467133487;
		const _nameVqaa6Vo = () => { return _returnValuejDIKHa1 };
		const _descriptionkx2zHmx = 7.349568528717523;
		const _argumentdtFRp4 = new Argument(_nameVqaa6Vo, _descriptionkx2zHmx)
		const _returnValueDIFiFx = await _argumentdtFRp4.argRequired()
		const _valuea5AYUMS = "rxp93y2WPSqeCE2CRumLNFvDC8xFn5iQp7SymEfp6fCAhdubVw83MnUoAKZajtzteWSqX40hiRe36V4";
		const _descriptionIUy5SsH = {
		
	}
		const _returnValueIA0BBF = await _argumentdtFRp4.default(_valuea5AYUMS, _descriptionIUy5SsH)
		const _arrayValuelgJ1zze = "VmGWtI9Ekhv2";
		const _valuejDgX629 = [_arrayValuelgJ1zze]
		const _returnValuevG0H8H = undefined;
		const _concatOeyxKsQ = () => { return _returnValuevG0H8H };
		const _previousFVqbBdO = {
			"concat": _concatOeyxKsQ
	}
		const _returnValuePFUfkO4 = await _argumentdtFRp4._concatValue(_valuejDgX629, _previousFVqbBdO)
		const _fnbvoPztJ = undefined;
		const _returnValueH6Qtnko = await _argumentdtFRp4.argParser(_fnbvoPztJ)
		const _returnValuekLGHR0b = await _HelpH3z4AhL.argumentDescription(_argumentdtFRp4)
		const _optionclFpAiJ = null;
		const _returnValueUikZftZ = await _HelpH3z4AhL.optionTerm(_optionclFpAiJ)
		const _cmdu4gLQds = false;
		const _helperutpAsMo = "Lx8qBAFXpCUD8uRcfMNrDcGxB1D5AvPGlOI5ecq7eTtq4WJypSXyMx1a4DajM6tgakOmb47w";
		const _returnValuenUgOu4V = await _HelpH3z4AhL.longestArgumentTermLength(_cmdu4gLQds, _helperutpAsMo)
	});
})