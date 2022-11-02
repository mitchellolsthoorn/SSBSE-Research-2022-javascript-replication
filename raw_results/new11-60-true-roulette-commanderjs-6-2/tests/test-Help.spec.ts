export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpaVw6I2L = new Help()
		const _argumentWJZg44m = "IXva6LyqOT6byJ2lhrMEHhjTdWUgJBSq6KQlAG48ETjpdBlbcm7llNYOuhJBWiXL9CGJ2wOzLzTQmwNdnj7C30k7UCFTItJKFeM";
		const _returnValueIkSvPIf = await _HelpaVw6I2L.argumentTerm(_argumentWJZg44m)
	});

	it('test for Help', async () => {
		const _HelpT9bXB0y = new Help()
		const _optiontkxiYnk = true;
		const _returnValueHGdiXz = await _HelpT9bXB0y.optionTerm(_optiontkxiYnk)
	});

	it('test for Help', async () => {
		const _HelpG1rvDff = new Help()
		const _arrayValuev6kuZAC = 0.6277823113442587;
		const _arrayValueo6AXAWK = 6.4233207046991865;
		const _arrayValuefKPL5eH = true;
		const _returnValueXTMKo5K = [_arrayValuev6kuZAC, _arrayValueo6AXAWK, _arrayValuefKPL5eH]
		const _cmdJkywGXF = () => { return _returnValueXTMKo5K };
		const _returnValueSteWicV = await _HelpG1rvDff.subcommandDescription(_cmdJkywGXF)
		const _argChoicesohBYYMJ = {
		
	}
		const _negateS8dfkEX = null;
		const _defaultValueENpVSTX = undefined;
		const _defaultValueDescriptionN3zXH9a = false;
		const _envVarJQoM29t = undefined;
		const _descriptionN3JkE29 = undefined;
		const _optionSn2TTo = {
			"argChoices": _argChoicesohBYYMJ,
		"negate": _negateS8dfkEX,
		"defaultValue": _defaultValueENpVSTX,
		"defaultValueDescription": _defaultValueDescriptionN3zXH9a,
		"envVar": _envVarJQoM29t,
		"description": _descriptionN3JkE29
	}
		const _returnValueWm9ye2u = await _HelpG1rvDff.optionDescription(_optionSn2TTo)
		const _argChoiceskHSC84g = {
		
	}
		const _defaultValueZxNPo0O = undefined;
		const _returnValueklc15vC = undefined;
		const _defaultValueDescriptiony0wbyvn = () => { return _returnValueklc15vC };
		const _descriptionTeIpj5Z = "uE2dXpd7bAVlEaUwi8YrEtU1HlneSKJb9RTP92mF9vgQiWDvYN91yFN8lVn2Ablr";
		const _argumentWMXgRWx = {
			"argChoices": _argChoiceskHSC84g,
		"defaultValue": _defaultValueZxNPo0O,
		"defaultValueDescription": _defaultValueDescriptiony0wbyvn,
		"description": _descriptionTeIpj5Z
	}
		const _returnValueLxqLy9A = await _HelpG1rvDff.argumentDescription(_argumentWMXgRWx)
	});

	it('test for Help', async () => {
		const _Helps5SnNj = new Help()
		const _optionsLCRoKk7 = {
		
	}
		const __hasHelpOptionHcm3uak = true;
		const __helpShortFlaghih2fGb = "rAbl8DKfWZR3cPhhlTzY9elCv5TnnREeMj3Lwac3f";
		const _returnValueHs52gqj = {
		
	}
		const __findOptionv7KTsA3 = () => { return _returnValueHs52gqj };
		const __helpLongFlagAetfdtu = undefined;
		const _returnValueUnBYSxd = undefined;
		const _createOptionNfTcBWf = () => { return _returnValueUnBYSxd };
		const __helpDescriptiongYldup = "5N42B1I";
		const _arrayValueeWuhPJ = true;
		const __helpFlagsV7kuheT = [_arrayValueeWuhPJ]
		const _cmdiWGRkyp = {
			"options": _optionsLCRoKk7,
		"_hasHelpOption": __hasHelpOptionHcm3uak,
		"_helpShortFlag": __helpShortFlaghih2fGb,
		"_findOption": __findOptionv7KTsA3,
		"_helpLongFlag": __helpLongFlagAetfdtu,
		"createOption": _createOptionNfTcBWf,
		"_helpDescription": __helpDescriptiongYldup,
		"_helpFlags": __helpFlagsV7kuheT
	}
		const _returnValueLdtWb02 = await _Helps5SnNj.visibleOptions(_cmdiWGRkyp)
		const _cmdOu5x1ns = undefined;
		const _returnValueCZAXkoN = undefined;
		const _helperQwteNVj = () => { return _returnValueCZAXkoN };
		const _returnValueXcJpGiN = await _Helps5SnNj.formatHelp(_cmdOu5x1ns, _helperQwteNVj)
		const _flagsK84DBTY = false;
		const _optionAj9DpWH = {
			"flags": _flagsK84DBTY
	}
		const _returnValueIdn7Zd5 = await _Helps5SnNj.optionTerm(_optionAj9DpWH)
		const _namewMbJytm = undefined;
		const _cmdYNaZkbT = new Command(_namewMbJytm)
		const _argvVzveK8j = undefined;
		const _parseOptionsnbLyqFG = null;
		const _returnValueXnHBfY = await _cmdYNaZkbT.parse(_argvVzveK8j, _parseOptionsnbLyqFG)
		const _combineK7VZrNt = false;
		const _returnValueAH87Oid = await _cmdYNaZkbT.combineFlagAndOptionalValue(_combineK7VZrNt)
		const _promised2tzQKI = {
		
	}
		const _eventvAQrlfx = "S7SGcjw1yXnTbGcjBkBjXl8LUtphVEQqAQPJXh4j1OSqPeL6h2gy";
		const _returnValuen8UuIX4 = await _cmdYNaZkbT._chainOrCallHooks(_promised2tzQKI, _eventvAQrlfx)
		const _strxkcNQDm = undefined;
		const _flagslV0hGj5 = {
		
	}
		const _descriptiongKPVJzN = {
		
	}
		const _returnValuexcJjCAm = await _cmdYNaZkbT.version(_strxkcNQDm, _flagslV0hGj5, _descriptiongKPVJzN)
		const _positionalJpcJF2 = false;
		const _returnValueiWrxT4r = await _cmdYNaZkbT.enablePositionalOptions(_positionalJpcJF2)
		const _returnValueZwsljOT = await _Helps5SnNj.visibleArguments(_cmdYNaZkbT)
	});

	it('test for Help', async () => {
		const _HelphjibW6O = new Help()
		const _cmdWRFIX3e = false;
		const _arrayValueh1cjb9Y = false;
		const _returnValuej51bkMp = [_arrayValueh1cjb9Y]
		const _longestOptionTermLengthkzJfAB = () => { return _returnValuej51bkMp };
		const _arrayValuefgWNNmd = false;
		const _returnValueks6gwf2 = [_arrayValuefgWNNmd]
		const _longestSubcommandTermLength0yaM03 = () => { return _returnValueks6gwf2 };
		const _arrayValueVgTLXrB = "9PiwfhTfnPA7I";
		const _arrayValueTis3Unt = undefined;
		const _arrayValuevsdYAZX = false;
		const _returnValueNC11reL = [_arrayValueVgTLXrB, _arrayValueTis3Unt, _arrayValuevsdYAZX]
		const _longestArgumentTermLengthLbadce = () => { return _returnValueNC11reL };
		const _helperDZm5Wde = {
			"longestOptionTermLength": _longestOptionTermLengthkzJfAB,
		"longestSubcommandTermLength": _longestSubcommandTermLength0yaM03,
		"longestArgumentTermLength": _longestArgumentTermLengthLbadce
	}
		const _returnValuesl8GoHl = await _HelphjibW6O.padWidth(_cmdWRFIX3e, _helperDZm5Wde)
		const _arrayValueXQZFAJ3 = undefined;
		const _returnValuexcWHSUQ = [_arrayValueXQZFAJ3]
		const _optionPeH2NR = () => { return _returnValuexcWHSUQ };
		const _returnValueEkP3dl0 = await _HelphjibW6O.optionDescription(_optionPeH2NR)
		const _returnValuem1lxGXR = "gNdgbfNWfdQCnkyz0Vxiz8fVAeENSD";
		const _matchzLrzYvc = () => { return _returnValuem1lxGXR };
		const _arrayValueaSm0Nbe = null;
		const _arrayValuedHBK2FH = "uLVRmBHI5zoRB3V7CN7pO5PNSG44Xn3jN4dDxvBxRutpoSmTVDMoOgb2vjXLNYsdRu34CH";
		const _arrayValueaCtu3OX = "kqEyzkKw7l3jxWTzkaecFbq9a8B2QFueqOlsFPgp";
		const _arrayValueq9hDHmt = [_arrayValuedHBK2FH, _arrayValueaCtu3OX]
		const _arrayValuesL8MkU = undefined;
		const _returnValuetzEaLMD = [_arrayValueaSm0Nbe, _arrayValueq9hDHmt, _arrayValuesL8MkU]
		const _substrOaWK1Er = () => { return _returnValuetzEaLMD };
		const _strLHswBpC = {
			"match": _matchzLrzYvc,
		"substr": _substrOaWK1Er
	}
		const _widthUF24QTg = 6.141944397947491;
		const _indentMCbePJF = -3.5911898602735484;
		const _minColumnWidthjfI06e = -0.5050619312346942;
		const _returnValueXuUHTv = await _HelphjibW6O.wrap(_strLHswBpC, _widthUF24QTg, _indentMCbePJF, _minColumnWidthjfI06e)
	});

	it('test for Help', async () => {
		const _HelpJcW3LV9 = new Help()
		const _cmdNLs5P9T = false;
		const _helperozmxvuK = new Help()
		const __namevvvHL3 = {
		
	}
		const __aliasesTwmjL8t = "jgsB2UIKlP2C5h5FjIpLZOfHPJfE7OKaBrgUDW7";
		const _parentSHzTntG = {
		
	}
		const _returnValueNigkWuI = []
		const _usageIYHTWwg = () => { return _returnValueNigkWuI };
		const _cmdL8kAm41 = {
			"_name": __namevvvHL3,
		"_aliases": __aliasesTwmjL8t,
		"parent": _parentSHzTntG,
		"usage": _usageIYHTWwg
	}
		const _returnValueUKVsyty = await _helperozmxvuK.commandUsage(_cmdL8kAm41)
		const _cmdWNeskbI = null;
		const _arrayValueuv8n5Ko = []
		const _arrayValueAxwAuIu = false;
		const _arrayValueCuDX7zJ = [_arrayValueAxwAuIu]
		const _arrayValuevdYYVjc = true;
		const _returnValuexQdRA8a = [_arrayValueuv8n5Ko, _arrayValueCuDX7zJ, _arrayValuevdYYVjc]
		const _helperFg6Tta6 = () => { return _returnValuexQdRA8a };
		const _returnValueIaFtLma = await _helperozmxvuK.padWidth(_cmdWNeskbI, _helperFg6Tta6)
		const _returnValuerbCnaJ0 = undefined;
		const _descriptioncSNM0ab = () => { return _returnValuerbCnaJ0 };
		const _cmdU6RHBsr = {
			"description": _descriptioncSNM0ab
	}
		const _returnValueCyhsaS = await _helperozmxvuK.subcommandDescription(_cmdU6RHBsr)
		const _arrayValueyWcQC3 = false;
		const _cmd2yUQxT = [_arrayValueyWcQC3]
		const _returnValueqYxo7Ap = await _helperozmxvuK.visibleCommands(_cmd2yUQxT)
		const _arrayValuec8sB2I0 = -2.8030392813453586;
		const _arrayValueBgl6akK = "j2VCatk7t2NDCvCL8fm4NdXNEXk0Q3DaevjATI85Ajx7cTN7j2p7VGz6ZJ5hiuZY8jg";
		const _returnValueocqxyF = [_arrayValuec8sB2I0, _arrayValueBgl6akK]
		const _matchhoDkVU9 = () => { return _returnValueocqxyF };
		const _returnValueZtWqT1a = true;
		const _returnValueLz25G1V = () => { return _returnValueZtWqT1a };
		const _substrgM4Ulxz = () => { return _returnValueLz25G1V };
		const _strjoEGOmF = {
			"match": _matchhoDkVU9,
		"substr": _substrgM4Ulxz
	}
		const _widthrramShN = -8.613419518286687;
		const _indentO5vLpsI = 0.36067925327949624;
		const _minColumnWidthJcdCxwu = 0.7936689956493375;
		const _returnValuecpCb0tK = await _helperozmxvuK.wrap(_strjoEGOmF, _widthrramShN, _indentO5vLpsI, _minColumnWidthJcdCxwu)
		const _returnValuefKtuBoT = await _HelpJcW3LV9.padWidth(_cmdNLs5P9T, _helperozmxvuK)
		const _cmdK3dXZN1 = {
		
	}
		const _helperVNeMjOO = new Help()
		const __argsDescriptionx3eziqj = {
		
	}
		const __argsQzApZhN = {
		
	}
		const _cmdsXJqud1 = {
			"_argsDescription": __argsDescriptionx3eziqj,
		"_args": __argsQzApZhN
	}
		const _returnValuenFLTW7l = await _helperVNeMjOO.visibleArguments(_cmdsXJqud1)
		const __argssPzDLR8 = {
		
	}
		const __nameamm0pw = -0.9866789346506977;
		const __aliasesRKC1qvw = {
		
	}
		const _optionsNOi0Py0 = {
		
	}
		const _cmdZPFLhw = {
			"_args": __argssPzDLR8,
		"_name": __nameamm0pw,
		"_aliases": __aliasesRKC1qvw,
		"options": _optionsNOi0Py0
	}
		const _returnValuebOKEcjo = await _helperVNeMjOO.subcommandTerm(_cmdZPFLhw)
		const _namekOtuR3z = {
		
	}
		const _cmdyorpHe = new Command(_namekOtuR3z)
		const _nameht4Jcks = undefined;
		const _descriptioneUMGOhB = {
		
	}
		const _fnesq4Wv4 = undefined;
		const _defaultValueZBWbEHb = false;
		const _returnValueG8Ycm8D = await _cmdyorpHe.argument(_nameht4Jcks, _descriptioneUMGOhB, _fnesq4Wv4, _defaultValueZBWbEHb)
		const _arrayValueMOCNutV = null;
		const _arrayValueNv3JY0Z = "VnXhFB2rkWbpH";
		const _arrayValueR3P09d = undefined;
		const _arrayValueZwae374 = -3.7335337291182222;
		const _returnValueqB7lGnz = -3.9211462261134447;
		const _arrayValueNjYfDKl = () => { return _returnValueqB7lGnz };
		const _arrayValuejGAWGi1 = false;
		const _arrayValuewSPAhtE = undefined;
		const _arrayValuewrcsJ3X = [_arrayValuejGAWGi1, _arrayValuewSPAhtE]
		const _arrayValueCqynchN = [_arrayValuewrcsJ3X]
		const _arrayValueYP9yOFI = [_arrayValueR3P09d, _arrayValueZwae374, _arrayValueNjYfDKl, _arrayValueCqynchN]
		const _arrayValuehq43LgX = [_arrayValueYP9yOFI]
		const _arrayValueGr3qW8W = []
		const _returnValueRzox1ZV = [_arrayValueMOCNutV, _arrayValueNv3JY0Z, _arrayValuehq43LgX, _arrayValueGr3qW8W]
		const _nameAndArgsRfi0Rs = () => { return _returnValueRzox1ZV };
		const _actionOptsOrExecDescdlSiaz = null;
		const _execOptsLo1ZEQa = undefined;
		const _returnValueqI1OHwW = await _cmdyorpHe.command(_nameAndArgsRfi0Rs, _actionOptsOrExecDescdlSiaz, _execOptsLo1ZEQa)
		const _optiony2snJUS = "8fWhQ8cED56AEuNf7FQ8zn01Uhzw3ivBuaMUWj6enSXpKGUMSOgPCeTDomFAq8";
		const _returnValueRI0gIup = await _cmdyorpHe.missingMandatoryOptionValue(_optiony2snJUS)
		const _operandsxGSAQ6R = "MX02C9CpDHgFaVAalzA1wtZfTOKwILySsLJf1UxsVWabolOrFb5gOmQoCBfluzRa";
		const _unknownQTSB5vw = {
		
	}
		const _returnValueZJCv7B8 = await _cmdyorpHe._parseCommand(_operandsxGSAQ6R, _unknownQTSB5vw)
		const _returnValueaHtnmDu = await _helperVNeMjOO.visibleOptions(_cmdyorpHe)
		const _cmdshyMS7w = "RR7oHHnxyU4obRFKpmrMFtozmi2jopRswfKmgqQDxqquDnzBmoTXjuQplFNdg9Ua4aAiExDmY7hDOKMKyRW99pXOxfpluJ7";
		const _returnValueUTecmia = await _helperVNeMjOO.visibleCommands(_cmdshyMS7w)
		const _returnValueP0a8X9y = await _HelpJcW3LV9.longestSubcommandTermLength(_cmdK3dXZN1, _helperVNeMjOO)
	});

	it('test for Help', async () => {
		const _HelpepVfQan = new Help()
		const _flagsgDPZJ0 = "gaB";
		const _arrayValuehl8uaIJ = null;
		const _arrayValueTi3Z3U = null;
		const _arrayValueL2mZ2oV = true;
		const _arrayValuerFgAa8F = undefined;
		const _arrayValueZjhBQpR = "QFtFvYD0bzTNJm1PVRh0e8VmrisKQDLT";
		const _arrayValueczZ5JeW = [_arrayValuerFgAa8F, _arrayValueZjhBQpR]
		const _arrayValueYj17MK0 = undefined;
		const _arrayValueSvFDvJL = [_arrayValueczZ5JeW, _arrayValueYj17MK0]
		const _arrayValuexDrnToW = null;
		const _descriptionPu1Uaxv = [_arrayValuehl8uaIJ, _arrayValueTi3Z3U, _arrayValueL2mZ2oV, _arrayValueSvFDvJL, _arrayValuexDrnToW]
		const _optionHby2wni = new Option(_flagsgDPZJ0, _descriptionPu1Uaxv)
		const _returnValuemJnXFZY = await _optionHby2wni.name()
		const _returnValueXXZsh18 = await _optionHby2wni.attributeName()
		const _returnValueSGGJwS8 = await _HelpepVfQan.optionTerm(_optionHby2wni)
		const _cmdFrylzUH = false;
		const _returnValuelVA7Uk0 = true;
		const _returnValueVwzZlU = () => { return _returnValuelVA7Uk0 };
		const _helperCkJd0t0 = () => { return _returnValueVwzZlU };
		const _returnValueEaJEI9y = await _HelpepVfQan.longestOptionTermLength(_cmdFrylzUH, _helperCkJd0t0)
		const _messagek3yb4iP = false;
		const _argumentPhDWkr3 = new InvalidArgumentError(_messagek3yb4iP)
		const _returnValueveXxcSe = await _HelpepVfQan.argumentTerm(_argumentPhDWkr3)
	});

	it('test for Help', async () => {
		const _HelpYhnprvM = new Help()
		const _cmdjLQE7MR = undefined;
		const _returnValueNsIQfk3 = await _HelpYhnprvM.visibleArguments(_cmdjLQE7MR)
		const __argsS9tWxrK = {
		
	}
		const __namezNiqmos = null;
		const __aliasessEBmUUs = {
		
	}
		const _optionsQHEDJeh = {
		
	}
		const _cmdEwl0e4e = {
			"_args": __argsS9tWxrK,
		"_name": __namezNiqmos,
		"_aliases": __aliasessEBmUUs,
		"options": _optionsQHEDJeh
	}
		const _returnValuedWnqCk2 = await _HelpYhnprvM.subcommandTerm(_cmdEwl0e4e)
		const _arrayValueql5XPvB = {
		
	}
		const _arrayValueuZtH4hz = 2.932184890503553;
		const _arrayValuehtnYIb = null;
		const _arrayValueG8wpnEt = "yIv";
		const _returnValuewLhZ1BF = [_arrayValuehtnYIb, _arrayValueG8wpnEt]
		const _arrayValuetsfsaAg = () => { return _returnValuewLhZ1BF };
		const _cmdTWqlEPD = [_arrayValueql5XPvB, _arrayValueuZtH4hz, _arrayValuetsfsaAg]
		const _returnValueFGx7CBo = await _HelpYhnprvM.visibleArguments(_cmdTWqlEPD)
		const _returnValueqb4ZcRS = []
		const _argumentBfGKxkr = () => { return _returnValueqb4ZcRS };
		const _returnValueJ89x8Rk = await _HelpYhnprvM.argumentDescription(_argumentBfGKxkr)
	});

	it('test for Help', async () => {
		const _Helpu0MFMxw = new Help()
		const _returnValueB7f8Rf5 = undefined;
		const _namem7PpbCe = () => { return _returnValueB7f8Rf5 };
		const _descriptionQp64CjH = {
		
	}
		const _argumentmpM750P = new Argument(_namem7PpbCe, _descriptionQp64CjH)
		const _returnValueFVQx79H = false;
		const _returnValuesuYn09B = () => { return _returnValueFVQx79H };
		const _includesifBbTV = () => { return _returnValuesuYn09B };
		const _returnValuezhTabyd = null;
		const _joinKuC4JIj = () => { return _returnValuezhTabyd };
		const _valuesS6FThj1 = {
			"includes": _includesifBbTV,
		"join": _joinKuC4JIj
	}
		const _returnValuetxCnJ2f = await _argumentmpM750P.choices(_valuesS6FThj1)
		const _returnValueiAF8axp = await _argumentmpM750P.argRequired()
		const _returnValuepkRkCLf = await _Helpu0MFMxw.argumentDescription(_argumentmpM750P)
		const _returnValuecw6oevJ = "XwLw8SOS0EBWYfualsKzHX9C8iPmwxHz0uh5ixnmhJPsblzWAtRNDPSmZ1K";
		const _cmdgzxYKwx = () => { return _returnValuecw6oevJ };
		const _returnValueU44483V = await _Helpu0MFMxw.subcommandTerm(_cmdgzxYKwx)
		const __argsDescriptionjeA3sho = {
		
	}
		const __argsCTRBcsO = {
		
	}
		const _cmdA4Ml1P8 = {
			"_argsDescription": __argsDescriptionjeA3sho,
		"_args": __argsCTRBcsO
	}
		const _returnValueiurxd7A = await _Helpu0MFMxw.visibleArguments(_cmdA4Ml1P8)
	});

	it('test for Help', async () => {
		const _Helpdhp06h2 = new Help()
		const _arrayValueQbteUw4 = {
		
	}
		const _arrayValuefiPemuw = {
		
	}
		const _cmdAh1TyJ9 = [_arrayValueQbteUw4, _arrayValuefiPemuw]
		const _arrayValuevbjouZy = undefined;
		const _arrayValue8iDGCx = undefined;
		const _arrayValueXW2FdT9 = 2.7859095150263986;
		const _arrayValueceYYvEu = false;
		const _arrayValueChk55qb = true;
		const _arrayValueph5WrkD = [_arrayValueXW2FdT9, _arrayValueceYYvEu, _arrayValueChk55qb]
		const _arrayValueXMGbuFG = [_arrayValuevbjouZy, _arrayValue8iDGCx, _arrayValueph5WrkD]
		const _sortSubcommandsCEBJpZR = [_arrayValueXMGbuFG]
		const _returnValuelkRYrgh = undefined;
		const _subcommandTermlsxnu8e = () => { return _returnValuelkRYrgh };
		const _helperm2v2seL = {
			"sortSubcommands": _sortSubcommandsCEBJpZR,
		"subcommandTerm": _subcommandTermlsxnu8e
	}
		const _returnValuee1ETeRC = await _Helpdhp06h2.formatHelp(_cmdAh1TyJ9, _helperm2v2seL)
		const _arrayValuemJvlB4 = "YB90X5TUc6C4HvB6oztmK1Yt6z8ZXsCSIb63w6fI5dAoFuEqvlagQ7PV5LjJkpbwxx2vX10Vcpvue";
		const _strJjDipW3 = [_arrayValuemJvlB4]
		const _widthVVz6GdI = 3.7024689885766815;
		const _indentlrjIvyq = 9.566817994368535;
		const _minColumnWidthObx0JH = 8.658379291608078;
		const _returnValueKRglkht = await _Helpdhp06h2.wrap(_strJjDipW3, _widthVVz6GdI, _indentlrjIvyq, _minColumnWidthObx0JH)
	});

	it('test for Help', async () => {
		const _Helpt8jDve3 = new Help()
		const _cmdUxv7ygQ = true;
		const _returnValueob7jtB = {
		
	}
		const _helperyNdTCCb = () => { return _returnValueob7jtB };
		const _returnValueZsbKhTr = await _Helpt8jDve3.longestSubcommandTermLength(_cmdUxv7ygQ, _helperyNdTCCb)
		const _arrayValue9enSje = null;
		const _arrayValueWLcEkI0 = "U4Dqp";
		const _arrayValuen4wtrdB = "Ubsfr0du2P3C";
		const _returnValuewaodq8C = [_arrayValue9enSje, _arrayValueWLcEkI0, _arrayValuen4wtrdB]
		const _cmdvhGWnHc = () => { return _returnValuewaodq8C };
		const _returnValuenc3hDMU = await _Helpt8jDve3.subcommandDescription(_cmdvhGWnHc)
	});

	it('test for Help', async () => {
		const _HelpGiWnXvT = new Help()
		const _returnValueoxltG2 = undefined;
		const _argumentrbuVZS3 = () => { return _returnValueoxltG2 };
		const _returnValueo4n9oJM = await _HelpGiWnXvT.argumentDescription(_argumentrbuVZS3)
	});

	it('test for Help', async () => {
		const _Helpm7SK47z = new Help()
		const _nameIyFTM7V = undefined;
		const _cmdeItHwI4 = new Command(_nameIyFTM7V)
		const _flagsNqBj0YB = undefined;
		const _returnValueQoRF0Px = undefined;
		const _descriptionZkyHZHx = () => { return _returnValueQoRF0Px };
		const _returnValueRlGehsm = await _cmdeItHwI4.helpOption(_flagsNqBj0YB, _descriptionZkyHZHx)
		const _returnValueO8xLfr = await _cmdeItHwI4._processArguments()
		const _returnValueeCIrrsf = await _Helpm7SK47z.visibleCommands(_cmdeItHwI4)
		const _cmdVS7l9aV = "vjc";
		const _returnValueGoiYf37 = await _Helpm7SK47z.commandUsage(_cmdVS7l9aV)
		const _arrayValuehOddkae = undefined;
		const _arrayValuewd64cN = null;
		const _arrayValue4xxIV0 = [_arrayValuewd64cN]
		const _returnValueitqvUT = [_arrayValuehOddkae, _arrayValue4xxIV0]
		const _cmdrtGXjMi = () => { return _returnValueitqvUT };
		const _helperk17N6AQ = "BU2zjxqFXUCe1ZkWx5U";
		const _returnValueYJbRahq = await _Helpm7SK47z.longestOptionTermLength(_cmdrtGXjMi, _helperk17N6AQ)
		const _returnValuesBDbzz0 = null;
		const _cmd6eddkC = () => { return _returnValuesBDbzz0 };
		const _returnValuek5XpSwv = await _Helpm7SK47z.visibleOptions(_cmd6eddkC)
		const _cmdRDnU7U6 = true;
		const _returnValuetkOOpAN = await _Helpm7SK47z.visibleOptions(_cmdRDnU7U6)
	});

	it('test for Help', async () => {
		const _Helpkw1Livy = new Help()
		const _argChoicesLSeQyS8 = {
		
	}
		const _negatebND6d8s = undefined;
		const _defaultValuezPL2bNc = null;
		const _returnValueA14mcqN = {
		
	}
		const _defaultValueDescriptionWV4bJtk = () => { return _returnValueA14mcqN };
		const _envVarWe0POBc = undefined;
		const _descriptionaEPWTvg = {
		
	}
		const _optiontazmr7K = {
			"argChoices": _argChoicesLSeQyS8,
		"negate": _negatebND6d8s,
		"defaultValue": _defaultValuezPL2bNc,
		"defaultValueDescription": _defaultValueDescriptionWV4bJtk,
		"envVar": _envVarWe0POBc,
		"description": _descriptionaEPWTvg
	}
		const _returnValueanZf5IM = await _Helpkw1Livy.optionDescription(_optiontazmr7K)
		const _argChoicesjpZ8K8A = {
		
	}
		const _negatew1ZnVe0 = {
		
	}
		const _defaultValuek4W4pr3 = undefined;
		const _returnValuejJX4Bkn = false;
		const _defaultValueDescriptionGZmprC = () => { return _returnValuejJX4Bkn };
		const _envVarIi9SnC4 = undefined;
		const _descriptionciowaNo = -2.0228569387287623;
		const _optioneyJlOgX = {
			"argChoices": _argChoicesjpZ8K8A,
		"negate": _negatew1ZnVe0,
		"defaultValue": _defaultValuek4W4pr3,
		"defaultValueDescription": _defaultValueDescriptionGZmprC,
		"envVar": _envVarIi9SnC4,
		"description": _descriptionciowaNo
	}
		const _returnValueaEgOrTk = await _Helpkw1Livy.optionDescription(_optioneyJlOgX)
	});

	it('test for Help', async () => {
		const _HelpsP6bGRQ = new Help()
		const _arrayValuebgK3T2L = null;
		const _arrayValueLXn4t9 = true;
		const _cmdbmy2ujU = [_arrayValuebgK3T2L, _arrayValueLXn4t9]
		const _returnValuefwEiU5J = await _HelpsP6bGRQ.subcommandTerm(_cmdbmy2ujU)
		const _arrayValuelqdOiq = "5IIQeb4TX18bspY4";
		const _arrayValueOBC0ppm = "Jf8oCKtaPnYdeye2oacvgc49MkqTixRUVtk12nrEHPGYhEX1PqMQL5mXfknskLccuUKXlMZnhgxnv1hhwglHtWOQADEyc";
		const _cmdiEqQWx4 = [_arrayValuelqdOiq, _arrayValueOBC0ppm]
		const _returnValuedegKneL = await _HelpsP6bGRQ.subcommandTerm(_cmdiEqQWx4)
		const _argChoiceslBE1tP = {
		
	}
		const _defaultValuecLSHiyo = undefined;
		const _defaultValueDescriptionbkAKoxW = 1.2533286963968173;
		const _descriptionszNlsom = false;
		const _argumentqugJq3U = {
			"argChoices": _argChoiceslBE1tP,
		"defaultValue": _defaultValuecLSHiyo,
		"defaultValueDescription": _defaultValueDescriptionbkAKoxW,
		"description": _descriptionszNlsom
	}
		const _returnValueYHPaDcp = await _HelpsP6bGRQ.argumentDescription(_argumentqugJq3U)
	});

	it('test for Help', async () => {
		const _Helprv6saE = new Help()
		const _flagsb9OIHFV = "tfroR";
		const _arrayValuec8DcklO = {
		
	}
		const _arrayValue7Qupp2 = -9.42888856159778;
		const _arrayValuez04kcOL = undefined;
		const _arrayValueGyTpmJT = [_arrayValue7Qupp2, _arrayValuez04kcOL]
		const _arrayValueSEuauHm = undefined;
		const _returnValueemVWhzo = false;
		const _returnValuelx62nDV = () => { return _returnValueemVWhzo };
		const _arrayValueYaRr4HF = () => { return _returnValuelx62nDV };
		const _descriptioni0qNaP9 = [_arrayValuec8DcklO, _arrayValueGyTpmJT, _arrayValueSEuauHm, _arrayValueYaRr4HF]
		const _cmdCxkvdpn = new Option(_flagsb9OIHFV, _descriptioni0qNaP9)
		const _fnYY2TLP = undefined;
		const _returnValuevcewS1c = await _cmdCxkvdpn.argParser(_fnYY2TLP)
		const _namet7lGRW = []
		const _returnValueAUM4td5 = await _cmdCxkvdpn.env(_namet7lGRW)
		const _returnValueFy68f5k = await _Helprv6saE.commandDescription(_cmdCxkvdpn)
		const _arrayValueai69r40 = -2.682685002409368;
		const _arrayValuex0O63k6 = undefined;
		const _arrayValueLH4sqbv = "7L8R1lPMAYQ8Es5IUI0hMZsb8M0CVGNSFeJbiUVxXmtTzs4PGiZvDa4Fe6KNRo6knr0YWbG8VUqKDAw9IiNrs0XoXVL1Osg";
		const _cmdoNzUhNM = [_arrayValueai69r40, _arrayValuex0O63k6, _arrayValueLH4sqbv]
		const _returnValueGg1hhAN = await _Helprv6saE.visibleArguments(_cmdoNzUhNM)
		const _returnValueBosOEq2 = true;
		const _optionXGpcQj = () => { return _returnValueBosOEq2 };
		const _returnValuexXaVzTj = await _Helprv6saE.optionTerm(_optionXGpcQj)
		const _returnValuee6KN8NF = undefined;
		const _sliceTvt6cbk = () => { return _returnValuee6KN8NF };
		const _namen32d0z = {
			"slice": _sliceTvt6cbk
	}
		const _descriptionp71N1V1 = "IH9msgWzwfaXVltX67gmRdIBCMl9oTOiaWVcvkVRJj8HJWF5QidVKVsas2CNzEyd3HQ24PYikkvatGy6OT6XGONvXFz3v";
		const _cmdT5pfBzd = new Argument(_namen32d0z, _descriptionp71N1V1)
		const _fnfvRaMsg = undefined;
		const _returnValuempk6Sms = await _cmdT5pfBzd.argParser(_fnfvRaMsg)
		const _valuep8vsjIL = 0.012418823227895004;
		const _previous3jEkHu = {
		
	}
		const _returnValueq4dCiG = await _cmdT5pfBzd._concatValue(_valuep8vsjIL, _previous3jEkHu)
		const _valueiOiR5Gq = undefined;
		const _descriptionCq5L3Ta = undefined;
		const _returnValueWVugXlp = await _cmdT5pfBzd.default(_valueiOiR5Gq, _descriptionCq5L3Ta)
		const _returnValueLnSbw4 = await _cmdT5pfBzd.argOptional()
		const _returnValuek2ejcj6 = await _Helprv6saE.subcommandTerm(_cmdT5pfBzd)
		const _cmdnwfRhFE = "QY4zISVbLbjTwaWFOqNlsAfi8dxYSrk7JWjfywwmysJkFtaQDqP4nS8EoVYvBeoQqj6lcxV36nqvPmkmlbzdxbG";
		const _returnValueTFMaLIN = await _Helprv6saE.visibleOptions(_cmdnwfRhFE)
	});

	it('test for Help', async () => {
		const _HelpW3oBbOK = new Help()
		const _arrayValue0PK1XH = "vluNGeZGE8ykZSEMcyyQu3bSyyq5pguHFM4Q3kep2Op6bNfSIOnSQHANrMu";
		const _arrayValueWSUwWVG = null;
		const _arrayValueLwdVIru = null;
		const _arrayValueZud3gSH = [_arrayValueWSUwWVG, _arrayValueLwdVIru]
		const _arrayValuedzYr0rd = undefined;
		const __argsDescriptioncCuISRn = [_arrayValue0PK1XH, _arrayValueZud3gSH, _arrayValuedzYr0rd]
		const __argszQwYmgV = {
		
	}
		const _cmdvsBgTnv = {
			"_argsDescription": __argsDescriptioncCuISRn,
		"_args": __argszQwYmgV
	}
		const _returnValuedcLMNGT = await _HelpW3oBbOK.visibleArguments(_cmdvsBgTnv)
		const _arrayValuepMyexsY = "cUrOeOTiqUpr4nyxUHEnt7PHeQOnxOnl5fuMeNV59yh81NeJMt8eCKrgW4daASkC7pN6sYElwyG0I7XgAgPAM";
		const _arrayValuewnbZ2oh = {
		
	}
		const _arrayValuesRi9muZ = null;
		const _nameniK8ECS = [_arrayValuepMyexsY, _arrayValuewnbZ2oh, _arrayValuesRi9muZ]
		const _cmds3B40vr = new Command(_nameniK8ECS)
		const _configurationROQq0gQ = undefined;
		const _returnValueHHG7UK0 = await _cmds3B40vr.configureHelp(_configurationROQq0gQ)
		const _enableOrNameAndArgsnAv9Qz = true;
		const _returnValueinIaOn = true;
		const _descriptionSYsVJK9 = () => { return _returnValueinIaOn };
		const _returnValueRy1U7uX = await _cmds3B40vr.addHelpCommand(_enableOrNameAndArgsnAv9Qz, _descriptionSYsVJK9)
		const _exitCodeJ0IKzV = undefined;
		const _codeSCmANvW = "DvdewAx87D8Q9SMtbuslyzeRX3FD1pDKu4tlCtLmJL03ZJqRDugot4HiZF76jwZ1JGwlbmK";
		const _returnValueLtQBgO0 = undefined;
		const _messageqlO5lY9 = () => { return _returnValueLtQBgO0 };
		const _returnValuefY7QI9A = await _cmds3B40vr._exit(_exitCodeJ0IKzV, _codeSCmANvW, _messageqlO5lY9)
		const _storeAsPropertiest5vT7gF = false;
		const _returnValuerFzcdog = await _cmds3B40vr.storeOptionsAsProperties(_storeAsPropertiest5vT7gF)
		const _returnValueEYH5R1J = await _HelpW3oBbOK.commandDescription(_cmds3B40vr)
		const _cmdcUZ6zS = "Z6BqMZoVODSkcK";
		const _returnValueoWpvaB9 = await _HelpW3oBbOK.visibleOptions(_cmdcUZ6zS)
	});

	it('test for Help', async () => {
		const _HelpsMUwdQ9 = new Help()
		const _returnValueFKgoaa8 = null;
		const _matchNvvhfjQ = () => { return _returnValueFKgoaa8 };
		const _returnValuemaoMBdW = true;
		const _substrwAM8gW5 = () => { return _returnValuemaoMBdW };
		const _strKHOd6nj = {
			"match": _matchNvvhfjQ,
		"substr": _substrwAM8gW5
	}
		const _widthn1MQDOb = -9.446003469884008;
		const _indentk7cH2dh = 1.4596416141277135;
		const _minColumnWidthULYcpVe = -7.9647292469275195;
		const _returnValuesAZAff8 = await _HelpsMUwdQ9.wrap(_strKHOd6nj, _widthn1MQDOb, _indentk7cH2dh, _minColumnWidthULYcpVe)
		const _cmdSQ1w8NP = "19qPil0uGhmI7fZ0";
		const _returnValuem7t27Q5 = await _HelpsMUwdQ9.commandUsage(_cmdSQ1w8NP)
		const _cmdHFDpitu = 0.49824704710369616;
		const _returnValuegPU0C4 = -2.7166428294321667;
		const _visibleOptionsc8ToAwd = () => { return _returnValuegPU0C4 };
		const _returnValueqRhIpBx = null;
		const _optionTermq9NbfME = () => { return _returnValueqRhIpBx };
		const _helperOOscITh = {
			"visibleOptions": _visibleOptionsc8ToAwd,
		"optionTerm": _optionTermq9NbfME
	}
		const _returnValueS7umTBR = await _HelpsMUwdQ9.longestOptionTermLength(_cmdHFDpitu, _helperOOscITh)
		const _cmdA8GnsB = "zeX3hIF9ybEkg0yYfQoC9d076Kh9JjtdRfm3v2sOAWv2Q1RtX0ac6seeyzOkab6zmjVQtY9stH";
		const _returnValuejV0eP0a = false;
		const _helpergZdim5W = () => { return _returnValuejV0eP0a };
		const _returnValueVPUgv1Q = await _HelpsMUwdQ9.longestSubcommandTermLength(_cmdA8GnsB, _helpergZdim5W)
	});

	it('test for Help', async () => {
		const _HelpBHgUCXM = new Help()
		const _returnValueX8LKN09 = undefined;
		const _matche5emUds = () => { return _returnValueX8LKN09 };
		const _returnValueRdVeZFF = true;
		const _substrs0wW573 = () => { return _returnValueRdVeZFF };
		const _strBukc7ow = {
			"match": _matche5emUds,
		"substr": _substrs0wW573
	}
		const _widthyvnsz2F = -3.702978335119824;
		const _indentu29uuDi = {
		
	}
		const _minColumnWidthdjblu6K = -8.309928560827025;
		const _returnValuei90AwOj = await _HelpBHgUCXM.wrap(_strBukc7ow, _widthyvnsz2F, _indentu29uuDi, _minColumnWidthdjblu6K)
		const _returnValuePVn0Dx3 = undefined;
		const _optionKjjiMA3 = () => { return _returnValuePVn0Dx3 };
		const _returnValuesvpe4dN = await _HelpBHgUCXM.optionDescription(_optionKjjiMA3)
		const _returnValueUgpAzQp = false;
		const _cmdRCfc8F = () => { return _returnValueUgpAzQp };
		const _returnValueqBCfUqR = await _HelpBHgUCXM.visibleCommands(_cmdRCfc8F)
	});

	it('test for Help', async () => {
		const _HelpdR5sEr6 = new Help()
		const _flagssSRn5Sm = "uqqY9yBzjrzyjlaE3vzgMsVelrtNLT4y20uii1L3mTZ5TRy6bvsjlGnVEyMqUxWfdCMW9rhE";
		const _descriptionb48i2S1 = true;
		const _optionnCFooQC = new Option(_flagssSRn5Sm, _descriptionb48i2S1)
		const _fntNkTTqU = undefined;
		const _returnValueRLGrJw = await _optionnCFooQC.argParser(_fntNkTTqU)
		const _arrayValueZZJ1cy8 = 6.800054108254244;
		const _namecSI1tIl = [_arrayValueZZJ1cy8]
		const _returnValueB9IBrQf = await _optionnCFooQC.env(_namecSI1tIl)
		const _mandatoryfD6WOFw = null;
		const _returnValueialvaBm = await _optionnCFooQC.makeOptionMandatory(_mandatoryfD6WOFw)
		const _returnValueFfdPxG3 = await _HelpdR5sEr6.optionDescription(_optionnCFooQC)
		const _flagsb1kBQVe = "Rnz";
		const _returnValuebUMhDGZ = undefined;
		const _descriptionmvfbb4 = () => { return _returnValuebUMhDGZ };
		const _optionjtgKfRz = new Option(_flagsb1kBQVe, _descriptionmvfbb4)
		const _namebbUDoj = undefined;
		const _returnValueY33wJIt = await _optionjtgKfRz.env(_namebbUDoj)
		const _fnhCz4MKK = undefined;
		const _returnValueaRGivzO = await _optionjtgKfRz.argParser(_fnhCz4MKK)
		const _namek8Q0mh = undefined;
		const _returnValuee44yPrl = await _optionjtgKfRz.env(_namek8Q0mh)
		const _valueuxn9Y3S = -6.156487711612937;
		const _previousoAnu83l = {
		
	}
		const _returnValue2OVN1M = await _optionjtgKfRz._concatValue(_valueuxn9Y3S, _previousoAnu83l)
		const _namercxVzn = undefined;
		const _returnValuemhJVTea = await _optionjtgKfRz.env(_namercxVzn)
		const _returnValueCwEgg7C = await _HelpdR5sEr6.optionDescription(_optionjtgKfRz)
	});

	it('test for Help', async () => {
		const _HelpNLACU9j = new Help()
		const _nameqqPciRf = false;
		const _cmdwfyTv68 = new Command(_nameqqPciRf)
		const _returnValueqAdKtZQ = await _cmdwfyTv68._processArguments()
		const _arrayValueNqvm4I0 = 7.967908618266268;
		const _nameM6afLwK = [_arrayValueNqvm4I0]
		const _returnValueoG6bU3f = await _cmdwfyTv68.createCommand(_nameM6afLwK)
		const _returnValuepPQ0Enq = await _HelpNLACU9j.visibleOptions(_cmdwfyTv68)
		const _arrayValueBTjlTNZ = undefined;
		const _arrayValueglUCPHr = true;
		const _cmds9gfL3v = [_arrayValueBTjlTNZ, _arrayValueglUCPHr]
		const _helperep4lUtE = "zTyNm1WlkkwwEEy1GY1TkvQ6ZxHa4";
		const _returnValueP79qzXS = await _HelpNLACU9j.padWidth(_cmds9gfL3v, _helperep4lUtE)
		const _nameioYnGg9 = "tbc90qpX9udxKp1MTs1U4wX7FnUCEsL9YAfD7qT";
		const _cmda39Obgn = new Command(_nameioYnGg9)
		const _argYSZ9zC6 = 6.935081064568351;
		const _returnValuerDnt5ht = await _cmda39Obgn._findOption(_argYSZ9zC6)
		const _argvxPE8ora = "B";
		const _returnValueefdszpI = await _cmda39Obgn.parseOptions(_argvxPE8ora)
		const _stryxjEPWu = undefined;
		const _returnValueCG9DEGK = await _cmda39Obgn.name(_stryxjEPWu)
		const _commandNameA5Zxa10 = true;
		const _arrayValuenZiNZkQ = 7.507910761037163;
		const _arrayValueIs2YmKe = [_arrayValuenZiNZkQ]
		const _arrayValuedPR7KiL = undefined;
		const _operandsedMOEzD = [_arrayValueIs2YmKe, _arrayValuedPR7KiL]
		const _unknownPk9cYN3 = null;
		const _returnValueb5IAMXN = await _cmda39Obgn._dispatchSubcommand(_commandNameA5Zxa10, _operandsedMOEzD, _unknownPk9cYN3)
		const _returnValuewmkscpy = await _HelpNLACU9j.visibleArguments(_cmda39Obgn)
	});

	it('test for Help', async () => {
		const _HelpdXYRrSL = new Help()
		const _namevLf31Pl = "tj39t2piie96uaVj0vNXVg35pAsv99hxu1IU";
		const _descriptionYfoYjIu = true;
		const _argumentsI73o6L = new Argument(_namevLf31Pl, _descriptionYfoYjIu)
		const _valueoYqvVly = []
		const _returnValuegePV5Lg = null;
		const _descriptiona4GJ1Mj = () => { return _returnValuegePV5Lg };
		const _returnValueQIlD99F = await _argumentsI73o6L.default(_valueoYqvVly, _descriptiona4GJ1Mj)
		const _returnValuexRbyxPA = await _argumentsI73o6L.argOptional()
		const _fnk7pbG9U = undefined;
		const _returnValueSRfNvPX = await _argumentsI73o6L.argParser(_fnk7pbG9U)
		const _returnValueIp6lPQ3 = await _HelpdXYRrSL.argumentDescription(_argumentsI73o6L)
		const _returnValueNfMAT5Q = null;
		const _cmd4orEuG = () => { return _returnValueNfMAT5Q };
		const _returnValueOLYQi5y = await _HelpdXYRrSL.visibleArguments(_cmd4orEuG)
		const _strGncYhPu = "nzVxbzRbZLvwazOBmiDrVjqLsBaApr4iKEvq9POXmd4SoMedLPArnh9eAHPbkL0AS8Sn5JqbJ9qWdzigyNuduQmh";
		const _widthUsreF2n = -6.454698440448091;
		const _indentBpOrhZ5 = -9.429196425551357;
		const _minColumnWidthmvZrKao = 8.114638728611073;
		const _returnValuecgu82Vg = await _HelpdXYRrSL.wrap(_strGncYhPu, _widthUsreF2n, _indentBpOrhZ5, _minColumnWidthmvZrKao)
		const _cmdPwodzir = 4.155879873998533;
		const _helperUnPx3PA = "QdKCTmJB1pfamhkovGvMUp8NrpC46m4TmPEmSJDfUKwMUGhfmyoWd3yf";
		const _returnValueZV184AX = await _HelpdXYRrSL.longestOptionTermLength(_cmdPwodzir, _helperUnPx3PA)
		const _nameHHMQZ6l = "iivihzkMEhBi";
		const _returnValueBVt60mD = 0.10896802413945039;
		const _descriptionkPyfAQD = () => { return _returnValueBVt60mD };
		const _argumentaSp3zG3 = new Argument(_nameHHMQZ6l, _descriptionkPyfAQD)
		const _valuesr55vE = undefined;
		const _arrayValuePrFR4J = false;
		const _arrayValuezeDcCD9 = []
		const _descriptionZEGz4dM = [_arrayValuePrFR4J, _arrayValuezeDcCD9]
		const _returnValue1VDGKq = await _argumentaSp3zG3.default(_valuesr55vE, _descriptionZEGz4dM)
		const _returnValueNFwi5SU = await _argumentaSp3zG3.argRequired()
		const _arrayValueC6aQSz = -0.7387417026257452;
		const _valuevsw7Kzm = [_arrayValueC6aQSz]
		const _arrayValueJu9w0wH = undefined;
		const _arrayValueqQRrV0v = false;
		const _arrayValuepoSPDV0 = false;
		const _arrayValueeYDex0N = [_arrayValuepoSPDV0]
		const _arrayValueXhCyabJ = undefined;
		const _returnValueKwkBj3H = [_arrayValueJu9w0wH, _arrayValueqQRrV0v, _arrayValueeYDex0N, _arrayValueXhCyabJ]
		const _previousZGrt15c = () => { return _returnValueKwkBj3H };
		const _returnValueFcsINr0 = await _argumentaSp3zG3._concatValue(_valuevsw7Kzm, _previousZGrt15c)
		const _returnValuebs9bnYf = await _HelpdXYRrSL.argumentDescription(_argumentaSp3zG3)
	});

	it('test for Help', async () => {
		const _HelptBe4YdX = new Help()
		const _namefTMbC1 = -7.086437239836031;
		const _cmdwt9rd6m = new Command(_namefTMbC1)
		const _configurationc6M9iFH = {
		
	}
		const _returnValueE2J82it = await _cmdwt9rd6m.configureHelp(_configurationc6M9iFH)
		const _arrayValueSvTk4G8 = true;
		const _arrayValuefKSZ16C = false;
		const _receivedArgscs6WQof = [_arrayValueSvTk4G8, _arrayValuefKSZ16C]
		const _returnValuen1C20H4 = await _cmdwt9rd6m._excessArguments(_receivedArgscs6WQof)
		const _splitE6hVMbI = -6.507176153800231;
		const _enableOrNameAndArgsYi7OokU = {
			"split": _splitE6hVMbI
	}
		const _descriptionVLdNphT = "9USaiowE8oyangaWItWERvQ92tHrKe6Ptgq060qBcjuWix834f86OE7JmcwIvBXnjVPZAkYwEjagLWOFqKzp";
		const _returnValueku1Kmsn = await _cmdwt9rd6m.addHelpCommand(_enableOrNameAndArgsYi7OokU, _descriptionVLdNphT)
		const _argumentrYwJbk3 = "W34CMs7ImsncdhLHnTKeyFe8cqc6HZS1oDSW4Tx9VdrTOJ4aTTJojWCqnaJdlEF8ccfmlReJp4EmSgGoa3d6ikzeReFYQegqn";
		const _returnValueP95bi3p = await _cmdwt9rd6m.addArgument(_argumentrYwJbk3)
		const _returnValuedURRZrP = await _HelptBe4YdX.visibleCommands(_cmdwt9rd6m)
	});

	it('test for Help', async () => {
		const _HelpWfVe9HJ = new Help()
		const _nameuquiT18 = 1.7744731544044292;
		const _cmdm0Pn917 = new Command(_nameuquiT18)
		const _flagssGI3K9X = false;
		const _descriptionyoqIW8 = "flRzKZ6SzwsuLEAwr22Vqjpyj6mTB63aXq9bbjZrmbaI3NOURoceY3lhOGx5x20qMsRzEbEJUjs1GoRNwHQM";
		const _returnValueVQv69jF = await _cmdm0Pn917.helpOption(_flagssGI3K9X, _descriptionyoqIW8)
		const _keyuFYWYe7 = null;
		const _valuekyoWxuk = {
		
	}
		const _sourcewYisCCf = null;
		const _returnValueg9hJxv = await _cmdm0Pn917.setOptionValueWithSource(_keyuFYWYe7, _valuekyoWxuk, _sourcewYisCCf)
		const _strTB6GTnc = undefined;
		const _returnValueouEBCJu = await _cmdm0Pn917.usage(_strTB6GTnc)
		const _keylKNBSEe = 9.930634851039926;
		const _returnValuegkcp6Gl = await _cmdm0Pn917.getOptionValue(_keylKNBSEe)
		const _returnValuelE3ID4P = await _HelpWfVe9HJ.subcommandTerm(_cmdm0Pn917)
		const _cmdAHc0KOp = undefined;
		const _helperyhom0Lv = "D8wbwD6kUpXEd7AObBcosVIUL7RaBmYhe8KapELOHNPvN4cqmLYvhWS1fD9";
		const _returnValuevmWUNxG = await _HelpWfVe9HJ.longestArgumentTermLength(_cmdAHc0KOp, _helperyhom0Lv)
		const _arrayValueRGpZvad = "k6LxStBZYYXMykJE3WPLlhGgSH5vHdNs3zGgffn6nMowj5hqpPFMkbHtfO6UsqQ";
		const _arrayValuesJ4PmF3 = true;
		const _nameqr4d3Nv = [_arrayValueRGpZvad, _arrayValuesJ4PmF3]
		const _cmdc6D6wns = new Command(_nameqr4d3Nv)
		const _arrayValuejwy7h2 = null;
		const _arrayValueYUGpHZ = {
		
	}
		const _arrayValueqiEEpfe = "sbNtL1JhANNvnmSdCp1igp2qzKcnucRNZhFn0WQxq68K7muF";
		const _returnValueTmSybBi = [_arrayValuejwy7h2, _arrayValueYUGpHZ, _arrayValueqiEEpfe]
		const _startsWithWkHGoc = () => { return _returnValueTmSybBi };
		const _flagDrPtjev = {
			"startsWith": _startsWithWkHGoc
	}
		const _returnValueKjIfsFY = await _cmdc6D6wns.unknownOption(_flagDrPtjev)
		const _returnValuefmmO8BA = await _HelpWfVe9HJ.subcommandTerm(_cmdc6D6wns)
		const _cmd6HsofE = "DgsMLIIKnpNtm6Ic3QA7nTjG7Kij3Ncd5FiylC0R6V";
		const _returnValueRiBP0LB = await _HelpWfVe9HJ.visibleOptions(_cmd6HsofE)
		const _cmdTyhSQvP = 5.651018771701505;
		const _helperJ0RMPyd = new Help()
		const _strvd4IPD4 = "oUaqrLPyeDFsx3Xzqf";
		const _widthx0d4FVS = 7.9292928209842515;
		const _indentrDXaAFl = 6.259594846256395;
		const _minColumnWidthoycIvIz = -7.57403876703621;
		const _returnValueaQf1Ssf = await _helperJ0RMPyd.wrap(_strvd4IPD4, _widthx0d4FVS, _indentrDXaAFl, _minColumnWidthoycIvIz)
		const _returnValueJHjKAk = await _HelpWfVe9HJ.longestOptionTermLength(_cmdTyhSQvP, _helperJ0RMPyd)
	});

	it('test for Help', async () => {
		const _Helpq8V6ydf = new Help()
		const _arrayValueXTh6H7F = undefined;
		const _arrayValueD1xeI07 = [_arrayValueXTh6H7F]
		const _arrayValuexL2Wk0B = []
		const _arrayValueslqCvz6 = [_arrayValueD1xeI07, _arrayValuexL2Wk0B]
		const _arrayValuewNClCDK = null;
		const _arrayValueCaxUx6 = "kT0dIOoS6lv4J";
		const _nameLyM36mk = [_arrayValueslqCvz6, _arrayValuewNClCDK, _arrayValueCaxUx6]
		const _descriptionIAeoWn = 0.6825015423629566;
		const _optionHzkUq2g = new Argument(_nameLyM36mk, _descriptionIAeoWn)
		const _returnValuejmKo7cf = await _optionHzkUq2g.name()
		const _returnValueGZCEHER = true;
		const _valueIWO7yU = () => { return _returnValueGZCEHER };
		const _returnValueK4c3jFx = "dZ";
		const _concatTcTJUF = () => { return _returnValueK4c3jFx };
		const _previousRBp5pH6 = {
			"concat": _concatTcTJUF
	}
		const _returnValueihdyQhx = await _optionHzkUq2g._concatValue(_valueIWO7yU, _previousRBp5pH6)
		const _valueEnP3vZo = 8.567856316721606;
		const _descriptionma6a1kC = undefined;
		const _returnValuedZExQdS = await _optionHzkUq2g.default(_valueEnP3vZo, _descriptionma6a1kC)
		const _valueUI31Yp8 = "t8hVw5lQj8hDYV6ebjxvOmlicVPrxOuGPESyq";
		const _arrayValueJpP45ix = -5.133199140252795;
		const _arrayValueKZs4EkX = 3.5253120847729402;
		const _previousSuDRZt = [_arrayValueJpP45ix, _arrayValueKZs4EkX]
		const _returnValueVwufs5K = await _optionHzkUq2g._concatValue(_valueUI31Yp8, _previousSuDRZt)
		const _returnValueHZ3BwjG = await _Helpq8V6ydf.optionDescription(_optionHzkUq2g)
		const _optionk3LQdhW = "hobqEyv5GzSrtm56B2ciDSkfqM5SOG58fLpiPSIny3Q25JViV3zyiMw9gh7BjzFXoq4hjHfBJr2ohqKXua0lNzs";
		const _returnValueCQnikp7 = await _Helpq8V6ydf.optionTerm(_optionk3LQdhW)
		const _returnValuetUlfJxl = "4cUdwZfrB2z5lbkziLXSsleQTNdH85c9K";
		const _cmdvxSqb8a = () => { return _returnValuetUlfJxl };
		const _returnValuetBrxOxb = await _Helpq8V6ydf.visibleArguments(_cmdvxSqb8a)
		const _arrayValuej2gFc3l = null;
		const _arrayValueRp2TEfe = undefined;
		const _nameirMszhZ = [_arrayValuej2gFc3l, _arrayValueRp2TEfe]
		const _descriptionQp9FFrv = false;
		const _cmdhypcURB = new Argument(_nameirMszhZ, _descriptionQp9FFrv)
		const _returnValuem707D3 = await _cmdhypcURB.argOptional()
		const _returnValueukbW2nS = await _Helpq8V6ydf.commandDescription(_cmdhypcURB)
		const _cmdx6W5TWO = "MrKX7p9GSiJ5HLu3EfmyOpBXfRCeMZasNyxFLAOfaboarXEww9KV3fMJsLGBiaxqoAA1W1zXlKOmNQGHhIKQT9t";
		const _returnValueYr8WBCT = await _Helpq8V6ydf.visibleOptions(_cmdx6W5TWO)
	});
})