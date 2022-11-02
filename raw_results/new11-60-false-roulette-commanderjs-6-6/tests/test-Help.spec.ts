export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpFEAlFmZ = new Help()
		const _cmddy9olI = null;
		const _arrayValueRUiMTXV = undefined;
		const _returnValueeHh9Jth = undefined;
		const _returnValueCAX13pe = () => { return _returnValueeHh9Jth };
		const _arrayValueTlC5AM = () => { return _returnValueCAX13pe };
		const _helperyRYGib = [_arrayValueRUiMTXV, _arrayValueTlC5AM]
		const _returnValueFhXEFyb = await _HelpFEAlFmZ.formatHelp(_cmddy9olI, _helperyRYGib)
		const _arrayValueDNEJfw2 = undefined;
		const _argumentaXZYBb = [_arrayValueDNEJfw2]
		const _returnValuec948PMW = await _HelpFEAlFmZ.argumentDescription(_argumentaXZYBb)
		const _returnValuesR3lrjc = {
		
	}
		const _returnValuejnOScPA = () => { return _returnValuesR3lrjc };
		const _cmdhhnWRwi = () => { return _returnValuejnOScPA };
		const _returnValueFuzxcGl = null;
		const _visibleOptionsDobIOl = () => { return _returnValueFuzxcGl };
		const _returnValueNR9gpjB = -1.344702844023864;
		const _arrayValueoUshjiE = () => { return _returnValueNR9gpjB };
		const _arrayValueBAKRfze = true;
		const _arrayValueDmVf83 = "mFYNqgAywn8IX35oJK2bA";
		const _arrayValuejSVV7J = false;
		const _arrayValuejrX3Kmg = [_arrayValueDmVf83, _arrayValuejSVV7J]
		const _arrayValue0Pz4UK = {
		
	}
		const _arrayValueXCNWt00 = false;
		const _arrayValueJHFIZh8 = [_arrayValue0Pz4UK, _arrayValueXCNWt00]
		const _returnValueXq4D19O = [_arrayValueoUshjiE, _arrayValueBAKRfze, _arrayValuejrX3Kmg, _arrayValueJHFIZh8]
		const _optionTermWKIMjvg = () => { return _returnValueXq4D19O };
		const _helperGHzmgme = {
			"visibleOptions": _visibleOptionsDobIOl,
		"optionTerm": _optionTermWKIMjvg
	}
		const _returnValueExfeIZZ = await _HelpFEAlFmZ.longestOptionTermLength(_cmdhhnWRwi, _helperGHzmgme)
		const _returnValueulov1RC = undefined;
		const _cmdcXQkVm8 = () => { return _returnValueulov1RC };
		const _helperNw58s75 = []
		const _returnValueqEU9h0i = await _HelpFEAlFmZ.longestOptionTermLength(_cmdcXQkVm8, _helperNw58s75)
		const _namePBxkQ9h = true;
		const _argumentNru8EID = new Command(_namePBxkQ9h)
		const _keylLL7U1k = -0.9434921720094405;
		const _valueheN1ajW = "7vzKNQBpdtHklYkvmMtdByn5NgQySbJkf3Ld6lFIl1GWJoFkebPxp0D5JQvnxcQttNQfPxVjZntz";
		const _sourceRmbvUCB = {
		
	}
		const _returnValuebRBwBYW = await _argumentNru8EID.setOptionValueWithSource(_keylLL7U1k, _valueheN1ajW, _sourceRmbvUCB)
		const _arrayValuecQICkqP = "oMzINlUx27pGyMR4y3UaZPslgKPmcL0Mo0PdARufLqVq";
		const _arrayValuegtLvDr = "gCDvIQH5eh3fc8rKXKoFSm8CivsPRFTGYfNQhtWm2v0qoGI6rBnINckKk8OwBmhtJ5pDRdcpkHniF4pGeVRaihjP7HxXB";
		const _arrayValueWExWgRu = 9.169463824962861;
		const _flagsFP21dim = [_arrayValuecQICkqP, _arrayValuegtLvDr, _arrayValueWExWgRu]
		const _descriptionB2H5LxW = true;
		const _fnviA3UbS = -8.130841043445994;
		const _defaultValuegOmUPL2 = undefined;
		const _returnValueJoC7SYV = await _argumentNru8EID.requiredOption(_flagsFP21dim, _descriptionB2H5LxW, _fnviA3UbS, _defaultValuegOmUPL2)
		const _argrI0SdJ9 = -2.6175821354503848;
		const _returnValuec9REUb = await _argumentNru8EID._findOption(_argrI0SdJ9)
		const _flagsvQ8nDDT = undefined;
		const _descriptionvdLxEPA = null;
		const _fnrUdO1XB = "CtqT1PHkiOHPTSk4LgiA89rQYbixN8DBMJ84j3rXolDLIIGT74vXaMvBbg9zL6MvWQntVDuX";
		const _defaultValueAVECOC8 = undefined;
		const _returnValuekaw4dU = await _argumentNru8EID.requiredOption(_flagsvQ8nDDT, _descriptionvdLxEPA, _fnrUdO1XB, _defaultValueAVECOC8)
		const _returnValueYivIIFz = await _argumentNru8EID._processArguments()
		const _returnValueX9erVaD = await _HelpFEAlFmZ.argumentTerm(_argumentNru8EID)
	});

	it('test for Help', async () => {
		const _HelpdBSWsoo = new Help()
		const _cmdW1FmAb1 = 7.038835474606376;
		const _helperLaoLn23 = new Help()
		const _arrayValueLe78hX9 = -0.1766849296477666;
		const _exitCodeqmmzFkr = [_arrayValueLe78hX9]
		const _codeeEc5Q71 = 1.6105136383714562;
		const _messageSDQGuJF = undefined;
		const _argumentALadU5X = new CommanderError(_exitCodeqmmzFkr, _codeeEc5Q71, _messageSDQGuJF)
		const _returnValueThalLs4 = await _helperLaoLn23.argumentTerm(_argumentALadU5X)
		const _optionRXn5y0 = "4YqlSJw083YcJFXvcQ2rYWS6d4oBmIKxOAiXhVSIuuhpW1JM6JYasKuuE9VsCxOFb3nUfo3TfrwMwzFdIqgrZqnDhSKm";
		const _returnValueEy27bSx = await _helperLaoLn23.optionTerm(_optionRXn5y0)
		const _returnValueJGFYAqp = await _HelpdBSWsoo.padWidth(_cmdW1FmAb1, _helperLaoLn23)
		const _nameXXfXC2I = "w5ZGewSDGzO2a8PxYWnPBxLT41EdWNV3xvvmOyfoOO4IBClkCo9GdH6Ppa7x3Yz00oNo5m6H2l1FG7uaPiCqwN5";
		const _cmdRPoOPno = new Command(_nameXXfXC2I)
		const _nameZDNMtcW = 5.297024211280629;
		const _returnValuebDWIgf = await _cmdRPoOPno.createCommand(_nameZDNMtcW)
		const _argxFjoQw6 = null;
		const _returnValueMWuf1m5 = await _cmdRPoOPno._findOption(_argxFjoQw6)
		const _positionalaivOg5S = true;
		const _returnValuenMGt7mq = await _cmdRPoOPno.enablePositionalOptions(_positionalaivOg5S)
		const _returnValuejrexQbG = await _HelpdBSWsoo.subcommandTerm(_cmdRPoOPno)
	});

	it('test for Help', async () => {
		const _HelpFjqMmT = new Help()
		const _cmdy7uNjM = {
		
	}
		const _returnValuennmeRoc = 7.912002216716779;
		const _returnValuePXyAuAZ = () => { return _returnValuennmeRoc };
		const _longestOptionTermLengthPuXGler = () => { return _returnValuePXyAuAZ };
		const _returnValueLKurqsu = undefined;
		const _longestSubcommandTermLengthFlqbJyh = () => { return _returnValueLKurqsu };
		const _returnValueLYuuySS = false;
		const _longestArgumentTermLengthVEyEmBr = () => { return _returnValueLYuuySS };
		const _helperVCcpIJF = {
			"longestOptionTermLength": _longestOptionTermLengthPuXGler,
		"longestSubcommandTermLength": _longestSubcommandTermLengthFlqbJyh,
		"longestArgumentTermLength": _longestArgumentTermLengthVEyEmBr
	}
		const _returnValueAYJIZnQ = await _HelpFjqMmT.padWidth(_cmdy7uNjM, _helperVCcpIJF)
		const _returnValueuTX7iLX = {
		
	}
		const _cmdBDhR11 = () => { return _returnValueuTX7iLX };
		const _returnValueOacORnf = await _HelpFjqMmT.commandUsage(_cmdBDhR11)
	});

	it('test for Help', async () => {
		const _Helps2VZP7W = new Help()
		const _argChoicesECUsKoq = {
		
	}
		const _negatejA1uj6e = undefined;
		const _defaultValueo1BLyLc = undefined;
		const _arrayValueUZ4FMub = null;
		const _arrayValueGwQAE5D = [_arrayValueUZ4FMub]
		const _arrayValueY7zqzch = "DqMHftiwbZTLDOIZ1HEOlKPQ9hNeMs";
		const _returnValueC0bXQbI = null;
		const _arrayValuez5Qky2E = () => { return _returnValueC0bXQbI };
		const _defaultValueDescriptionE32ATqS = [_arrayValueGwQAE5D, _arrayValueY7zqzch, _arrayValuez5Qky2E]
		const _envVartDCU4Dw = undefined;
		const _descriptioniGuVuCH = null;
		const _optionZaEwOB8 = {
			"argChoices": _argChoicesECUsKoq,
		"negate": _negatejA1uj6e,
		"defaultValue": _defaultValueo1BLyLc,
		"defaultValueDescription": _defaultValueDescriptionE32ATqS,
		"envVar": _envVartDCU4Dw,
		"description": _descriptioniGuVuCH
	}
		const _returnValueydC28u3 = await _Helps2VZP7W.optionDescription(_optionZaEwOB8)
		const _argumentvzUj7ex = "2IPkftYXjkBh2f5pLRMFJyXISeN2kCpitIyLG4kf4iQbV2JeTnMgiXIwzP6vDPIoTCRvSBBRIDJ5";
		const _returnValueKbacTSn = await _Helps2VZP7W.argumentTerm(_argumentvzUj7ex)
	});

	it('test for Help', async () => {
		const _HelpnxYlCHo = new Help()
		const _commandsDXZTbLx = {
		
	}
		const _arrayValueKk0PSdP = null;
		const _arrayValueOZSdV14 = -6.895458479123478;
		const _returnValuezcs59AT = [_arrayValueKk0PSdP, _arrayValueOZSdV14]
		const _arrayValuezv94vHf = () => { return _returnValuezcs59AT };
		const _returnValueLkw0O2H = [_arrayValuezv94vHf]
		const _returnValuehZ8t9Lb = () => { return _returnValueLkw0O2H };
		const __hasImplicitHelpCommandRt3cZWq = () => { return _returnValuehZ8t9Lb };
		const __helpCommandnameAndArgsy1VEBHo = undefined;
		const _returnValuehkptoaB = null;
		const _createCommandnAdlccG = () => { return _returnValuehkptoaB };
		const __helpCommandDescriptionKKX629 = null;
		const _cmdJrvj3xL = {
			"commands": _commandsDXZTbLx,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandRt3cZWq,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsy1VEBHo,
		"createCommand": _createCommandnAdlccG,
		"_helpCommandDescription": __helpCommandDescriptionKKX629
	}
		const _returnValueRC5dpqA = await _HelpnxYlCHo.visibleCommands(_cmdJrvj3xL)
		const _cmdP9O8amC = true;
		const _helperRw412av = "GKcedAEOcxuaR1kuDd0Z2HAg24WWt8KQbxk4QZt3SFD9ayJcDMyokNLXv43BK7mIkrk5h2fX5fuOX4dWg0nZU4";
		const _returnValueOdfEoDV = await _HelpnxYlCHo.longestSubcommandTermLength(_cmdP9O8amC, _helperRw412av)
	});

	it('test for Help', async () => {
		const _Helpmhl5E3t = new Help()
		const _arrayValueN4lY6Yy = "MTmVM5vA1VHSa3SFgoAJNYaQzA9EtyROsnhCjwPYkEdtyLVoYGh9wUGLpL";
		const _arrayValuetvk2Oob = "XniGmYqbjQFTTjggIb4i4ewoDsQXz5BxLMOyC9j9KTRcM5wgY1wHZQTSNKePmSO2vDPB8a";
		const _strerRSuHq = [_arrayValueN4lY6Yy, _arrayValuetvk2Oob]
		const _width5Tzy5d = 4.521258319912494;
		const _indentRNqo8cn = -3.3227671588364336;
		const _minColumnWidthjuTPhCt = 2.6967628117849873;
		const _returnValuefnoElpM = await _Helpmhl5E3t.wrap(_strerRSuHq, _width5Tzy5d, _indentRNqo8cn, _minColumnWidthjuTPhCt)
		const _cmdcvpPACw = "inmDDTHmU2TLkI85EcDu8kqb";
		const _arrayValueWwHeuFq = "IwQ6NzUcSMPdyUhqIAzUIGtF25el0hE85LULjC2";
		const _sortSubcommandsy8g8LGw = [_arrayValueWwHeuFq]
		const _returnValueji6caxW = false;
		const _subcommandTermiAxrq1f = () => { return _returnValueji6caxW };
		const _helperTpvej8H = {
			"sortSubcommands": _sortSubcommandsy8g8LGw,
		"subcommandTerm": _subcommandTermiAxrq1f
	}
		const _returnValueYYx5TR7 = await _Helpmhl5E3t.formatHelp(_cmdcvpPACw, _helperTpvej8H)
	});

	it('test for Help', async () => {
		const _HelprBfZqFR = new Help()
		const _cmdJUJ35q8 = -9.156029190725205;
		const _returnValueh95XxEg = []
		const _helperFQm2Kla = () => { return _returnValueh95XxEg };
		const _returnValuelNfHxYt = await _HelprBfZqFR.longestArgumentTermLength(_cmdJUJ35q8, _helperFQm2Kla)
	});

	it('test for Help', async () => {
		const _HelpwIHhX3f = new Help()
		const _returnValueKcjE9Fa = null;
		const _returnValueH3fBP1d = () => { return _returnValueKcjE9Fa };
		const _descriptionW20loBZ = () => { return _returnValueH3fBP1d };
		const _cmdCHwJAJh = {
			"description": _descriptionW20loBZ
	}
		const _returnValuekhbDaRW = await _HelpwIHhX3f.commandDescription(_cmdCHwJAJh)
		const _cmdiU9VGO6 = null;
		const _helperq5qBeo = undefined;
		const _returnValueD8zKt0X = await _HelpwIHhX3f.longestSubcommandTermLength(_cmdiU9VGO6, _helperq5qBeo)
		const _returnValuejyEdIMB = "Yu";
		const _returnValuebmA8Vt = () => { return _returnValuejyEdIMB };
		const _sliceHVXLy2 = () => { return _returnValuebmA8Vt };
		const _nameGiMXiIy = {
			"slice": _sliceHVXLy2
	}
		const _descriptionotMTdCd = "qMtXGrifCbuUzlg9kGYpGrv7MoxIWJ2qjf3EznnPvw1kjkPN19BTi2VCJlTDpcnr3lpCrpi5WLie9TxJsZiVqwHdOBq2";
		const _cmdS9g1q3z = new Argument(_nameGiMXiIy, _descriptionotMTdCd)
		const _valuestSV8m5B = "aZjcKgNQXVzJ4FxqVDtYOeMJSg1OyQsPIYASnytjcgTahEVq1";
		const _returnValueS9WqyTO = await _cmdS9g1q3z.choices(_valuestSV8m5B)
		const _valueM89Anyi = true;
		const _previousTEQulh3 = {
		
	}
		const _returnValue1XTphL = await _cmdS9g1q3z._concatValue(_valueM89Anyi, _previousTEQulh3)
		const _returnValuehb4Kbzh = await _HelpwIHhX3f.commandDescription(_cmdS9g1q3z)
	});

	it('test for Help', async () => {
		const _Helpcnc0zTu = new Help()
		const _arrayValueXU1oBMT = {
		
	}
		const _arrayValueUb1Asdd = "Nea1dSwGMc0N2Uh7FIyXZqARh6aJkLHuJgQJRVeWbmR";
		const _cmderXjsJr = [_arrayValueXU1oBMT, _arrayValueUb1Asdd]
		const _returnValue1wpGNn = await _Helpcnc0zTu.visibleOptions(_cmderXjsJr)
		const _nameAYtpwJZ = 5.857322324772522;
		const _descriptionEctZehc = null;
		const _cmdBrA7zE = new Argument(_nameAYtpwJZ, _descriptionEctZehc)
		const _returnValuewwRfC0Z = 4.523317318655732;
		const _valuesjuyNfGQ = () => { return _returnValuewwRfC0Z };
		const _returnValuelOABJms = await _cmdBrA7zE.choices(_valuesjuyNfGQ)
		const _returnValuelIGrRZ = await _Helpcnc0zTu.commandDescription(_cmdBrA7zE)
		const _cmdML6Sgm2 = "gxAvk3XxX7hQSLdVS5rDCGgqm6TW6LyUslsOzWQbsNzp3g";
		const _returnValuevsmkJ3F = await _Helpcnc0zTu.commandUsage(_cmdML6Sgm2)
		const _arrayValuempDMDEk = undefined;
		const _returnValueb3vIFx = [_arrayValuempDMDEk]
		const _matchSHeaPJI = () => { return _returnValueb3vIFx };
		const _arrayValueQdzxTF = null;
		const _arrayValuexYUyDU = undefined;
		const _returnValuefOjkWpJ = [_arrayValueQdzxTF, _arrayValuexYUyDU]
		const _substrGOYEQQD = () => { return _returnValuefOjkWpJ };
		const _strHDXTeTV = {
			"match": _matchSHeaPJI,
		"substr": _substrGOYEQQD
	}
		const _widthmUAgr1C = -5.273607899060147;
		const _indentGTj2G7J = -3.6270584832564197;
		const _minColumnWidthWSkSFHn = 0.5550250262813563;
		const _returnValue4sWR57 = await _Helpcnc0zTu.wrap(_strHDXTeTV, _widthmUAgr1C, _indentGTj2G7J, _minColumnWidthWSkSFHn)
	});

	it('test for Help', async () => {
		const _HelpYWuc3Pk = new Help()
		const _descriptionaX8kRcq = undefined;
		const _cmdiw2k341 = {
			"description": _descriptionaX8kRcq
	}
		const _returnValuemPF5YWx = await _HelpYWuc3Pk.subcommandDescription(_cmdiw2k341)
		const _returnValueLUuesnV = true;
		const _optionK51z91Y = () => { return _returnValueLUuesnV };
		const _returnValueTEp2Kp = await _HelpYWuc3Pk.optionTerm(_optionK51z91Y)
		const _arrayValuei4nGbDW = true;
		const _arrayValueJZcdDB = undefined;
		const _arrayValueaoghUiT = null;
		const _arrayValuegG2KrE3 = undefined;
		const _sliceLFrYaOh = [_arrayValuei4nGbDW, _arrayValueJZcdDB, _arrayValueaoghUiT, _arrayValuegG2KrE3]
		const _namekqp4z6A = {
			"slice": _sliceLFrYaOh
	}
		const _descriptionYUq7GIA = true;
		const _optionAdBbW2K = new Argument(_namekqp4z6A, _descriptionYUq7GIA)
		const _valueSTeMI3a = "DfEe0XKmuXegSRhzUTok60eddb7QvUalzM3XnfLhmTuJ0xNEDp";
		const _concatIgAaiez = undefined;
		const _previousz5ukxkZ = {
			"concat": _concatIgAaiez
	}
		const _returnValueaB9z3XO = await _optionAdBbW2K._concatValue(_valueSTeMI3a, _previousz5ukxkZ)
		const _valueitNGxd2 = undefined;
		const _descriptionGx83kbH = undefined;
		const _returnValuebjAYsq = await _optionAdBbW2K.default(_valueitNGxd2, _descriptionGx83kbH)
		const _returnValueQCt5tz = await _HelpYWuc3Pk.optionDescription(_optionAdBbW2K)
	});

	it('test for Help', async () => {
		const _HelptKMyPd0 = new Help()
		const _flagsY7MFJqa = "7m";
		const _descriptions7sUW2h = 4.343094332585144;
		const _argumentoNu0vBG = new Option(_flagsY7MFJqa, _descriptions7sUW2h)
		const _namef8fxOYV = {
		
	}
		const _returnValueqcELOSU = await _argumentoNu0vBG.env(_namef8fxOYV)
		const _hideJNMqy4 = false;
		const _returnValueuJhGxA3 = await _argumentoNu0vBG.hideHelp(_hideJNMqy4)
		const _returnValuefiZ1TWN = await _HelptKMyPd0.argumentDescription(_argumentoNu0vBG)
		const _cmdNxNVt7b = "anOBSlPelBsBIr5tU";
		const _helper3YC4t1 = new Help()
		const _cmdYGCmri = null;
		const _returnValueoU3hZfy = []
		const _visibleOptionsnmUa7n6 = () => { return _returnValueoU3hZfy };
		const _returnValueWlulxvZ = false;
		const _optionTermio8goTr = () => { return _returnValueWlulxvZ };
		const _helperlcji2c2 = {
			"visibleOptions": _visibleOptionsnmUa7n6,
		"optionTerm": _optionTermio8goTr
	}
		const _returnValueUfz0gW9 = await _helper3YC4t1.longestOptionTermLength(_cmdYGCmri, _helperlcji2c2)
		const _arrayValuef9THtI = undefined;
		const _arrayValueR2GY5X = "m7uYxbp6W0YqlPZS7zV6QEUFEuGl9f4yqAjgLA7MeFEZ2tUkvkwNCyAaR6BdJHRuvygx";
		const _arrayValueTb8NeCD = "dHAQN4IeKD5x2OrNMwPo";
		const _arrayValueecTkIaL = [_arrayValueR2GY5X, _arrayValueTb8NeCD]
		const _cmdWf9iVUp = [_arrayValuef9THtI, _arrayValueecTkIaL]
		const _helperFtfFDa = new Help()
		const _cmdP1GFaNJ = {
		
	}
		const _arrayValueDGlxtTN = "";
		const _arrayValuexo6GEoJ = undefined;
		const _arrayValueBD115S8 = -1.3625092381618469;
		const _helperuh2sqvy = [_arrayValueDGlxtTN, _arrayValuexo6GEoJ, _arrayValueBD115S8]
		const _returnValueSjN20n = await _helperFtfFDa.formatHelp(_cmdP1GFaNJ, _helperuh2sqvy)
		const _returnValueMrQNvX5 = undefined;
		const _cmdLHNC0sv = () => { return _returnValueMrQNvX5 };
		const _returnValueMt3sqya = await _helperFtfFDa.subcommandDescription(_cmdLHNC0sv)
		const _cmdSiM6zKm = false;
		const _returnValueiEP7YRK = true;
		const _visibleOptionssbhUPIN = () => { return _returnValueiEP7YRK };
		const _returnValuedmitKpS = -4.9667949335013395;
		const _optionTermqLoKc5 = () => { return _returnValuedmitKpS };
		const _helpercQf2JxH = {
			"visibleOptions": _visibleOptionssbhUPIN,
		"optionTerm": _optionTermqLoKc5
	}
		const _returnValuemUPJzU = await _helperFtfFDa.longestOptionTermLength(_cmdSiM6zKm, _helpercQf2JxH)
		const _arrayValueAuXlGAt = "KOgJfEtt1aVmCPMFFSjHpvHEL5SYVvakp8f58keeUe8La9VuhvBfRjyzXNGfNcKQCUHOtR0q31dq6";
		const _returnValueG2UwzOF = [_arrayValueAuXlGAt]
		const _argumentt07Jka3 = () => { return _returnValueG2UwzOF };
		const _returnValuesH2RImh = await _helperFtfFDa.argumentDescription(_argumentt07Jka3)
		const _returnValueIwKaYNr = await _helper3YC4t1.longestSubcommandTermLength(_cmdWf9iVUp, _helperFtfFDa)
		const _returnValuendJJCN = undefined;
		const _returnValueu8LZjD = () => { return _returnValuendJJCN };
		const _description5Sxj7q = () => { return _returnValueu8LZjD };
		const _cmdWcKOfQ1 = {
			"description": _description5Sxj7q
	}
		const _returnValuekNSvfkr = await _helper3YC4t1.subcommandDescription(_cmdWcKOfQ1)
		const _returnValueBch1vZt = await _HelptKMyPd0.padWidth(_cmdNxNVt7b, _helper3YC4t1)
		const _returnValuexWKk9IS = -2.7594069406844204;
		const _cmdRNJ4Lri = () => { return _returnValuexWKk9IS };
		const _returnValueoUSg3jI = -1.5691857827436486;
		const _helperjxIkDNR = () => { return _returnValueoUSg3jI };
		const _returnValueZOPP9au = await _HelptKMyPd0.longestArgumentTermLength(_cmdRNJ4Lri, _helperjxIkDNR)
		const _namequu7CLE = 5.976567849526187;
		const _cmdwVQMHdI = new Command(_namequu7CLE)
		const _keyI4IfUD = "9yqpOEPcM9pNAe3h1UNooDJO3";
		const _valueigoz2vh = 0.6933030522874066;
		const _sourceqfaUzBr = null;
		const _returnValue5haA2K = await _cmdwVQMHdI.setOptionValueWithSource(_keyI4IfUD, _valueigoz2vh, _sourceqfaUzBr)
		const _arrayValuetuIAgnO = true;
		const _arrayValuecB89BCD = false;
		const _arrayValueSH0nEVV = "8ugNBdtiPvXE8hlm24TKSVSx2lgNcBmoiRAdE8mzlRgLSjyRyzFlDFuopz5";
		const _arrayValuenIqZkZ0 = true;
		const _arrayValueQxJ7Uwh = true;
		const _arrayValueM41UIGi = [_arrayValueSH0nEVV, _arrayValuenIqZkZ0, _arrayValueQxJ7Uwh]
		const _arrayValue3jHuU4 = "VdHTcKTPaAwDdJbEg60VW4z3";
		const _arrayValueCwmY6UM = [_arrayValueM41UIGi, _arrayValue3jHuU4]
		const _arrayValuelllHfxG = [_arrayValuecB89BCD, _arrayValueCwmY6UM]
		const _arrayValueijr6HlV = 7.290649763924044;
		const _returnValueNS11KdE = undefined;
		const _arrayValued1RUpyp = () => { return _returnValueNS11KdE };
		const _arrayValuee9pzT6d = [_arrayValuelllHfxG, _arrayValueijr6HlV, _arrayValued1RUpyp]
		const _arrayValue4YuhUd = "4eOiDvHTF9PMggAy8tILCoGdDjcFTOJEJ7WuB9MtaVLtp7O0d75NFvyFNgB7nO5vbB8E3FdMGWn4XYRK5Xog1RLiV";
		const _returnValueJQ3oloZ = [_arrayValuetuIAgnO, _arrayValuee9pzT6d, _arrayValue4YuhUd]
		const _argvCyODXA0 = () => { return _returnValueJQ3oloZ };
		const _arrayValuehz4Hyjq = true;
		const _arrayValueUoGMsDg = false;
		const _arrayValueFr0b7iW = 0.2178575809582899;
		const _parseOptionsbXLP8DV = [_arrayValuehz4Hyjq, _arrayValueUoGMsDg, _arrayValueFr0b7iW]
		const _returnValuewDuAfe = await _cmdwVQMHdI.parse(_argvCyODXA0, _parseOptionsbXLP8DV)
		const _arrayValuerAwEkcm = "IRSi2R9QaHQfQf6n4nvMWQOt6eGgW7zO";
		const _arrayValueFKYOKLQ = []
		const _arrayValuewTESHr = "tMFJgntHEnaKr7mWCz52CkCg";
		const _errorAU0tPmY = [_arrayValuerAwEkcm, _arrayValueFKYOKLQ, _arrayValuewTESHr]
		const _arrayValuezB2q28Y = null;
		const _arrayValuefFxTFpI = [_arrayValuezB2q28Y]
		const _arrayValueTrwPNE8 = true;
		const _returnValueQoUxOn = 0.5767324426141247;
		const _arrayValuefWlhMtw = () => { return _returnValueQoUxOn };
		const _commandmfssVyd = [_arrayValuefFxTFpI, _arrayValueTrwPNE8, _arrayValuefWlhMtw]
		const _contextOptionsUaENTLz = {
			"error": _errorAU0tPmY,
		"command": _commandmfssVyd
	}
		const _returnValueC1mSxVK = await _cmdwVQMHdI.helpInformation(_contextOptionsUaENTLz)
		const _returnValueS1XSSh5 = await _HelptKMyPd0.commandUsage(_cmdwVQMHdI)
		const _cmdHLK6Ww = null;
		const _returnValuewMnpu7O = "QSLF91yP1nr0VrQcRg5pRFM8mX9KYJvsBcirKDyB7nnoBfmBoCdSlO683ttUVUA2rhdzJwXmnks4jUgeXD";
		const _returnValue9xGEl7 = () => { return _returnValuewMnpu7O };
		const _visibleOptionstLnEl6i = () => { return _returnValue9xGEl7 };
		const _returnValueJsmuAHz = null;
		const _optionTermUEoTSNn = () => { return _returnValueJsmuAHz };
		const _helperBcf94EN = {
			"visibleOptions": _visibleOptionstLnEl6i,
		"optionTerm": _optionTermUEoTSNn
	}
		const _returnValueXIvBP9W = await _HelptKMyPd0.longestOptionTermLength(_cmdHLK6Ww, _helperBcf94EN)
	});

	it('test for Help', async () => {
		const _HelpnyJ1YL2 = new Help()
		const _namer6hoyEd = true;
		const _cmdCi84GaG = new Command(_namer6hoyEd)
		const _positionalhXxG0dN = false;
		const _returnValueVTX8lmx = await _cmdCi84GaG.enablePositionalOptions(_positionalhXxG0dN)
		const _arrayValueP4DEjAe = null;
		const _arrayValueADIhcSN = {
		
	}
		const _promisejnbPylb = [_arrayValueP4DEjAe, _arrayValueADIhcSN]
		const _returnValueriZbc2M = 6.53070985891166;
		const _fnOhZ7ak1 = () => { return _returnValueriZbc2M };
		const _returnValueAEH53pY = await _cmdCi84GaG._chainOrCall(_promisejnbPylb, _fnOhZ7ak1)
		const _returnValueKiitI4R = await _HelpnyJ1YL2.visibleArguments(_cmdCi84GaG)
		const _arrayValue2xlHCe = "a2VxlFaivzMeklArfu2WfyczU2sENsAHuRyKCSd";
		const _arrayValueWS9MXIv = true;
		const _arrayValuenwenv2k = [_arrayValue2xlHCe, _arrayValueWS9MXIv]
		const _arrayValueAA3NeFB = undefined;
		const _arrayValuezswRVA = [_arrayValuenwenv2k, _arrayValueAA3NeFB]
		const _arrayValueedYqw2W = "nU7K5Cjfxc4eaouRG7YwW";
		const _argumentodIwYc = [_arrayValuezswRVA, _arrayValueedYqw2W]
		const _returnValuesNPTsBZ = await _HelpnyJ1YL2.argumentDescription(_argumentodIwYc)
		const _arrayValuefqMvhCW = "bMoV70LfdQ58GfuVFv8v8dARMHufEqkC5znmENzV";
		const _cmdV7UFW53 = [_arrayValuefqMvhCW]
		const _returnValuejFZcwTT = await _HelpnyJ1YL2.visibleOptions(_cmdV7UFW53)
		const _argChoicess1L0L2w = {
		
	}
		const _arrayValueChzU6ga = undefined;
		const _negateBBNL4G = [_arrayValueChzU6ga]
		const _defaultValueGLCmMG = undefined;
		const _returnValueMHen1MM = "uGSzP";
		const _defaultValueDescriptionE0gdLoB = () => { return _returnValueMHen1MM };
		const _envVarYqqTubD = null;
		const _descriptioncyi7OOE = "erruG2ao6elAybq3cIOCBd5xWOnEfLZZ1Pgh6kIVgWbtAzfXm8b8lVUjzcAG8ccyUYVWgEdjpd0Xw53ciQeGv1nkcib9Mbq";
		const _optiontXybqP8 = {
			"argChoices": _argChoicess1L0L2w,
		"negate": _negateBBNL4G,
		"defaultValue": _defaultValueGLCmMG,
		"defaultValueDescription": _defaultValueDescriptionE0gdLoB,
		"envVar": _envVarYqqTubD,
		"description": _descriptioncyi7OOE
	}
		const _returnValueVNrkD1B = await _HelpnyJ1YL2.optionDescription(_optiontXybqP8)
	});

	it('test for Help', async () => {
		const _HelpeABNoD5 = new Help()
		const _namej9pvfza = "3tNMEaVkyGFycPiQawnV9u83QsysHyUtWJp";
		const _arrayValueCkLx0w9 = []
		const _arrayValueFffALaC = {
		
	}
		const _descriptionhJjlZV = [_arrayValueCkLx0w9, _arrayValueFffALaC]
		const _argumentZx29c0s = new Argument(_namej9pvfza, _descriptionhJjlZV)
		const _returnValueezQOStF = await _argumentZx29c0s.argRequired()
		const _valuenaIVYcq = undefined;
		const _arrayValueP50SOEG = {
		
	}
		const _previousDUftSxa = [_arrayValueP50SOEG]
		const _returnValueg0l8T94 = await _argumentZx29c0s._concatValue(_valuenaIVYcq, _previousDUftSxa)
		const _returnValuePQ0BIeb = await _argumentZx29c0s.name()
		const _returnValueWZvpkjV = await _argumentZx29c0s.argRequired()
		const _fnzJoI7lW = "3QzJYNuKyUyu5e5CSor1EA5uLjAVFGeO9C6M0xQiO8hGfrOF4Igwip8CuihqJJX5VMb8jr2M";
		const _returnValueQVxbk4 = await _argumentZx29c0s.argParser(_fnzJoI7lW)
		const _returnValuezL8IoSg = await _HelpeABNoD5.argumentDescription(_argumentZx29c0s)
		const __argsAtaiYNl = {
		
	}
		const __name9OEnD9 = 1.9983530339725242;
		const __aliasesabOpKbz = {
		
	}
		const _optionsmM5WUQE = {
		
	}
		const _cmdAPUQtz = {
			"_args": __argsAtaiYNl,
		"_name": __name9OEnD9,
		"_aliases": __aliasesabOpKbz,
		"options": _optionsmM5WUQE
	}
		const _returnValueiDhq2CO = await _HelpeABNoD5.subcommandTerm(_cmdAPUQtz)
		const _argChoicesz0RtkQk = {
		
	}
		const _defaultValueXqts8G3 = undefined;
		const _defaultValueDescriptionSa359y6 = true;
		const _descriptionDHtqkCL = {
		
	}
		const _argumentlFbULqy = {
			"argChoices": _argChoicesz0RtkQk,
		"defaultValue": _defaultValueXqts8G3,
		"defaultValueDescription": _defaultValueDescriptionSa359y6,
		"description": _descriptionDHtqkCL
	}
		const _returnValueDYXDh55 = await _HelpeABNoD5.argumentDescription(_argumentlFbULqy)
	});

	it('test for Help', async () => {
		const _HelprFyFRE3 = new Help()
		const __nametyA0VW8 = {
		
	}
		const __aliasesRmVNofa = {
		
	}
		const _parentf4vEKxm = "2luTezcwNttfMkIODwRr5GKh3fknDDGda6aPm7hpqJrNUcylVEtbT";
		const _returnValueXXhgc9 = undefined;
		const _usagedRgD6HX = () => { return _returnValueXXhgc9 };
		const _cmdKbZbPC2 = {
			"_name": __nametyA0VW8,
		"_aliases": __aliasesRmVNofa,
		"parent": _parentf4vEKxm,
		"usage": _usagedRgD6HX
	}
		const _returnValuep5ioPwp = await _HelprFyFRE3.commandUsage(_cmdKbZbPC2)
		const _cmdX4D4tM5 = undefined;
		const _arrayValueoKD1ro = false;
		const _helperQT6hVfz = [_arrayValueoKD1ro]
		const _returnValueCFDFqn = await _HelprFyFRE3.longestOptionTermLength(_cmdX4D4tM5, _helperQT6hVfz)
		const _nameM7FA28h = undefined;
		const _cmdiMhWm7o = new Command(_nameM7FA28h)
		const _optionpVDEEIp = "Ia";
		const _returnValueFhzt90V = await _cmdiMhWm7o.addOption(_optionpVDEEIp)
		const _displaySuggestionyh2HdlY = "DuGHS";
		const _returnValueC3AaY5 = await _cmdiMhWm7o.showSuggestionAfterError(_displaySuggestionyh2HdlY)
		const _returnValueV4cnV6z = await _HelprFyFRE3.subcommandDescription(_cmdiMhWm7o)
		const _arrayValueTSKoIJ = undefined;
		const _arrayValuej0kg4f0 = true;
		const _cmdgWHGL8A = [_arrayValueTSKoIJ, _arrayValuej0kg4f0]
		const _sortSubcommandsK2TTLFq = false;
		const _returnValueuG97W0M = undefined;
		const _subcommandTermzCl7bl5 = () => { return _returnValueuG97W0M };
		const _helperPQF7RUz = {
			"sortSubcommands": _sortSubcommandsK2TTLFq,
		"subcommandTerm": _subcommandTermzCl7bl5
	}
		const _returnValueNj7ClDH = await _HelprFyFRE3.longestSubcommandTermLength(_cmdgWHGL8A, _helperPQF7RUz)
	});

	it('test for Help', async () => {
		const _HelpV2Llsx = new Help()
		const _cmdYbkX4U2 = undefined;
		const _helpereqh8M8G = new Help()
		const _flagsSyCqbWu = "vODdstKPwDxHnkXyJn0lKXliQgPwYYtb1rm87WY6QVetfa0Wy5a8krPFGESC";
		const _descriptionOSXcMLK = {
		
	}
		const _argumentdGRSO9Y = new Option(_flagsSyCqbWu, _descriptionOSXcMLK)
		const _returnValuebW7naRC = "kkx41b2z9PPBjeMfgM379P6SPzt16KQBNfIbSiqjonpVazWXO4z8A3sDwGgSsQuDWmkyKljfvmOymDV2o";
		const _valuesjs5Ht78 = () => { return _returnValuebW7naRC };
		const _returnValueNRZWLAn = await _argumentdGRSO9Y.choices(_valuesjs5Ht78)
		const _hidebtSg01P = false;
		const _returnValuexuN2lSA = await _argumentdGRSO9Y.hideHelp(_hidebtSg01P)
		const _fnsXcR6wR = undefined;
		const _returnValuerg3a0ZW = await _argumentdGRSO9Y.argParser(_fnsXcR6wR)
		const _returnValueY1o4wNY = await _helpereqh8M8G.argumentDescription(_argumentdGRSO9Y)
		const _arrayValueMACBzhf = null;
		const _arrayValueoSXBohA = null;
		const _cmdmKAWJ7P = [_arrayValueMACBzhf, _arrayValueoSXBohA]
		const _returnValueeNT7KVT = await _helpereqh8M8G.visibleArguments(_cmdmKAWJ7P)
		const _returnValueXePWdIg = await _HelpV2Llsx.formatHelp(_cmdYbkX4U2, _helpereqh8M8G)
		const _arrayValueD9tuE5l = []
		const _arrayValueiJqjknT = "9Cm3iuJgAFOx";
		const _arrayValueme3tPfF = "IPyCFy6AHe3Arw53dPGXTVA1Yj9Iprd2c";
		const _arrayValueFsmfiX9 = [_arrayValueD9tuE5l, _arrayValueiJqjknT, _arrayValueme3tPfF]
		const _arrayValueKzlk0pt = "bwvJycdayXdCEmFC7iXj5iDGmDFvpN293U";
		const _arrayValueYz2LqO = undefined;
		const _argumentYibefPi = [_arrayValueFsmfiX9, _arrayValueKzlk0pt, _arrayValueYz2LqO]
		const _returnValueezrJcgk = await _HelpV2Llsx.argumentDescription(_argumentYibefPi)
		const _cmdvx0XYlp = "rtVG93ELhLF6u41K5X61aQWKSjhwIgH7usASfaRZqrffPfCtVByNU2ojXiaoxHxH2CQQcpS4DIppMAiaFFvZT3pAUrD71Ix";
		const _returnValuef74aZD6 = await _HelpV2Llsx.visibleCommands(_cmdvx0XYlp)
		const _messageFSBHQQF = false;
		const _argumentjgvEZrS = new InvalidArgumentError(_messageFSBHQQF)
		const _returnValueAkax8wR = await _HelpV2Llsx.argumentTerm(_argumentjgvEZrS)
		const _arrayValueVJ59yxk = true;
		const _arrayValuexJaGat2 = {
		
	}
		const _arrayValueQ174IG = "lzu7Qb2lkHnc9Ebto7aWwjiEFbzl674";
		const _flagse2F87xO = [_arrayValueVJ59yxk, _arrayValuexJaGat2, _arrayValueQ174IG]
		const _descriptionHxD9beO = undefined;
		const _optionzDjzITq = new Option(_flagse2F87xO, _descriptionHxD9beO)
		const _fnE4L2dzD = undefined;
		const _returnValuemLjLcHv = await _optionzDjzITq.argParser(_fnE4L2dzD)
		const _argAMmRWJZ = "RkCU8NNcDxtXltS8M6gpidp7l3OEY3Rwb";
		const _returnValueivlz1Jl = await _optionzDjzITq.is(_argAMmRWJZ)
		const _returnValuecEoS7C = await _HelpV2Llsx.optionTerm(_optionzDjzITq)
	});

	it('test for Help', async () => {
		const _HelpIB7Eke = new Help()
		const __argsDescriptionRhbHtT1 = true;
		const __argsQ7IqY7D = {
		
	}
		const _cmdI0TIRt = {
			"_argsDescription": __argsDescriptionRhbHtT1,
		"_args": __argsQ7IqY7D
	}
		const _returnValueObGY8UD = await _HelpIB7Eke.visibleArguments(_cmdI0TIRt)
		const _cmdpnB05c = -5.467016307609493;
		const _helperk5F3ViS = "DtjEX443tcsp4nFM0h6Eyfko";
		const _returnValueXzUhoe3 = await _HelpIB7Eke.longestSubcommandTermLength(_cmdpnB05c, _helperk5F3ViS)
		const _arrayValueoEDwuau = false;
		const _arrayValueJJOBbBM = undefined;
		const _option0YclTZ = [_arrayValueoEDwuau, _arrayValueJJOBbBM]
		const _returnValuetKCuAg = await _HelpIB7Eke.optionDescription(_option0YclTZ)
	});

	it('test for Help', async () => {
		const _HelpzD2xY29 = new Help()
		const _returnValuew9kWjO = undefined;
		const _nameQSoJzRE = () => { return _returnValuew9kWjO };
		const _cmdLJ2ef0o = new Command(_nameQSoJzRE)
		const _aliasxvN9Wpx = undefined;
		const _returnValueUw6Tehq = await _cmdLJ2ef0o.alias(_aliasxvN9Wpx)
		const _positionalBdcgF0s = false;
		const _returnValueO4L3Ib = await _cmdLJ2ef0o.enablePositionalOptions(_positionalBdcgF0s)
		const _returnValuenbeQwth = await _cmdLJ2ef0o.opts()
		const _displaySuggestionPe3TOyG = false;
		const _returnValueJGjmbYo = await _cmdLJ2ef0o.showSuggestionAfterError(_displaySuggestionPe3TOyG)
		const _returnValueZHDTHWW = await _HelpzD2xY29.visibleCommands(_cmdLJ2ef0o)
		const _flagstYe0PBO = "AkYeCj7";
		const _optione8qLsK3 = {
			"flags": _flagstYe0PBO
	}
		const _returnValueVQ2YHI = await _HelpzD2xY29.optionTerm(_optione8qLsK3)
		const _arrayValueQ4gp54H = null;
		const _arrayValuemtkuAMS = true;
		const _arrayValueP4LJC2E = true;
		const _cmda6XYkA = [_arrayValueQ4gp54H, _arrayValuemtkuAMS, _arrayValueP4LJC2E]
		const _visibleOptionsurT3Vgt = undefined;
		const _returnValueOMEYPhm = 8.93849930481915;
		const _optionTermhZP7CWg = () => { return _returnValueOMEYPhm };
		const _helperHId1ZJE = {
			"visibleOptions": _visibleOptionsurT3Vgt,
		"optionTerm": _optionTermhZP7CWg
	}
		const _returnValueBwIJoUl = await _HelpzD2xY29.longestOptionTermLength(_cmda6XYkA, _helperHId1ZJE)
		const _optionsjABdmOs = {
		
	}
		const __hasHelpOptionQoTQEcn = []
		const __helpShortFlagpljgqKo = 3.8449427782839294;
		const _returnValuedFX2AO = null;
		const __findOptionHRmQos5 = () => { return _returnValuedFX2AO };
		const __helpLongFlagIqxjcdG = true;
		const _returnValueVxhmsSO = -3.0962711395442692;
		const _createOptionCLKOW5p = () => { return _returnValueVxhmsSO };
		const __helpDescriptionNM3p6iq = undefined;
		const __helpFlagstmBTY3j = false;
		const _cmdwlvpor = {
			"options": _optionsjABdmOs,
		"_hasHelpOption": __hasHelpOptionQoTQEcn,
		"_helpShortFlag": __helpShortFlagpljgqKo,
		"_findOption": __findOptionHRmQos5,
		"_helpLongFlag": __helpLongFlagIqxjcdG,
		"createOption": _createOptionCLKOW5p,
		"_helpDescription": __helpDescriptionNM3p6iq,
		"_helpFlags": __helpFlagstmBTY3j
	}
		const _returnValueq6al3I0 = await _HelpzD2xY29.visibleOptions(_cmdwlvpor)
	});

	it('test for Help', async () => {
		const _HelpxEmJzx = new Help()
		const _cmdHqxVR0V = {
		
	}
		const _helpertqb6uPL = new Help()
		const _strE9h48zG = "guzwAcdadq";
		const _widthejalFAf = 2.519429455324973;
		const _indentmgdSeCH = 3.2027399077978203;
		const _minColumnWidthAdfrrVy = 4.989302479815629;
		const _returnValueV4mhJ6z = await _helpertqb6uPL.wrap(_strE9h48zG, _widthejalFAf, _indentmgdSeCH, _minColumnWidthAdfrrVy)
		const _cmdmGoDBxg = "sXeimNXoLwL7X24bY9RJFCJ0fzNax6ywDix";
		const _helperoyRiN0l = new Help()
		const __nameS4bsb99 = {
		
	}
		const __aliasespUxp6Pi = {
		
	}
		const _returnValueUKThvNC = 3.196038791456564;
		const _parentpp5oRHG = () => { return _returnValueUKThvNC };
		const _returnValuet0fL6n2 = false;
		const _usagevp68j5a = () => { return _returnValuet0fL6n2 };
		const _cmdG7Cs9OF = {
			"_name": __nameS4bsb99,
		"_aliases": __aliasespUxp6Pi,
		"parent": _parentpp5oRHG,
		"usage": _usagevp68j5a
	}
		const _returnValuej3PODNr = await _helperoyRiN0l.commandUsage(_cmdG7Cs9OF)
		const _cmdLDM2sX8 = null;
		const _helperctEuS8s = new Help()
		const _cmdJWtoNc4 = null;
		const _returnValueKE6m2Zn = {
		
	}
		const _visibleArgumentsLBLLBj = () => { return _returnValueKE6m2Zn };
		const _returnValuegsEIumd = "UHTWAwpFTYAu6deFGSJGaVDZPLtEaN1RWpi2N7v29CF";
		const _argumentTermbxbofLy = () => { return _returnValuegsEIumd };
		const _helpertgZ5DkP = {
			"visibleArguments": _visibleArgumentsLBLLBj,
		"argumentTerm": _argumentTermbxbofLy
	}
		const _returnValueLDvlG4o = await _helperctEuS8s.longestArgumentTermLength(_cmdJWtoNc4, _helpertgZ5DkP)
		const _optionslM8X0jz = {
		
	}
		const __hasHelpOptionxfv72S2 = undefined;
		const __helpShortFlagwT6iruO = undefined;
		const _returnValueD0mzAg6 = -2.656652595900171;
		const __findOption15yUmb = () => { return _returnValueD0mzAg6 };
		const _returnValueHsirHoV = {
		
	}
		const _returnValuef9h2dOb = () => { return _returnValueHsirHoV };
		const __helpLongFlagNgSfc16 = () => { return _returnValuef9h2dOb };
		const _returnValue6vdjyb = 9.210708850095216;
		const _createOptionpJlo74h = () => { return _returnValue6vdjyb };
		const __helpDescriptionSFOngQ = 7.645606263243849;
		const __helpFlagseQfX7ix = -5.6801933823147355;
		const _cmdLQcpkni = {
			"options": _optionslM8X0jz,
		"_hasHelpOption": __hasHelpOptionxfv72S2,
		"_helpShortFlag": __helpShortFlagwT6iruO,
		"_findOption": __findOption15yUmb,
		"_helpLongFlag": __helpLongFlagNgSfc16,
		"createOption": _createOptionpJlo74h,
		"_helpDescription": __helpDescriptionSFOngQ,
		"_helpFlags": __helpFlagseQfX7ix
	}
		const _returnValueY0JNoeq = await _helperctEuS8s.visibleOptions(_cmdLQcpkni)
		const _returnValue0txWoO = await _helperoyRiN0l.longestSubcommandTermLength(_cmdLDM2sX8, _helperctEuS8s)
		const _returnValueBs5GWsh = await _helpertqb6uPL.longestSubcommandTermLength(_cmdmGoDBxg, _helperoyRiN0l)
		const _argChoicesYIoK0h8 = undefined;
		const _defaultValueaLFv5zg = undefined;
		const _arrayValuecKXgE06 = undefined;
		const _arrayValueoYJO2M5 = [_arrayValuecKXgE06]
		const _arrayValuegTXleBD = undefined;
		const _arrayValueBpGBNJl = {
		
	}
		const _arrayValueBv5fOVe = null;
		const _defaultValueDescriptionwouUEvS = [_arrayValueoYJO2M5, _arrayValuegTXleBD, _arrayValueBpGBNJl, _arrayValueBv5fOVe]
		const _descriptionjPkyMnA = "oFLaslnqLP73HK5";
		const _argumentZbT1IJ = {
			"argChoices": _argChoicesYIoK0h8,
		"defaultValue": _defaultValueaLFv5zg,
		"defaultValueDescription": _defaultValueDescriptionwouUEvS,
		"description": _descriptionjPkyMnA
	}
		const _returnValueA6kGTDO = await _helpertqb6uPL.argumentDescription(_argumentZbT1IJ)
		const _cmdDF2LnZL = null;
		const _returnValuenJPCxwV = false;
		const _visibleOptionsLipXI3U = () => { return _returnValuenJPCxwV };
		const _arrayValueVFOO9DL = "zRagz2l3t4ymn8W";
		const _arrayValuePSvsk3i = null;
		const _optionTermATKZYDQ = [_arrayValueVFOO9DL, _arrayValuePSvsk3i]
		const _helperZyz28LL = {
			"visibleOptions": _visibleOptionsLipXI3U,
		"optionTerm": _optionTermATKZYDQ
	}
		const _returnValuelIxNGR9 = await _helpertqb6uPL.longestOptionTermLength(_cmdDF2LnZL, _helperZyz28LL)
		const _returnValuec9srrJH = await _HelpxEmJzx.padWidth(_cmdHqxVR0V, _helpertqb6uPL)
		const _returnValueimXyozq = 6.216856685789892;
		const _descriptionJat9vqe = () => { return _returnValueimXyozq };
		const _cmdgVbMebl = {
			"description": _descriptionJat9vqe
	}
		const _returnValueinPJ24C = await _HelpxEmJzx.commandDescription(_cmdgVbMebl)
		const _returnValueKBz1gQn = "YuKUbgeLkeijT9CyUCVXPaXGb2awsf2qr8LJfOLRCzfBQzEJyEKtTocTIpg6469FqoKp";
		const _descriptionysgheuy = () => { return _returnValueKBz1gQn };
		const _cmdnmHtGkc = {
			"description": _descriptionysgheuy
	}
		const _returnValuetkk2jGg = await _HelpxEmJzx.commandDescription(_cmdnmHtGkc)
		const _arrayValuevMgrgff = 6.082454746692338;
		const _arrayValueMR2J5Z9 = []
		const _arrayValuexYufSgo = true;
		const _arrayValuePUFmPXC = true;
		const _arrayValueWT2Sc5d = true;
		const _arrayValuehcgHlbx = [_arrayValueMR2J5Z9, _arrayValuexYufSgo, _arrayValuePUFmPXC, _arrayValueWT2Sc5d]
		const _cmdbYNecVX = [_arrayValuevMgrgff, _arrayValuehcgHlbx]
		const _returnValueSvxqhac = await _HelpxEmJzx.commandUsage(_cmdbYNecVX)
	});

	it('test for Help', async () => {
		const _HelpSrLw6Ry = new Help()
		const _cmdNgo9lL1 = 9.121275935439087;
		const _helperPEpvYa = new Help()
		const _optionfdOhOCB = "CWe";
		const _returnValuexpfPkj = await _helperPEpvYa.optionDescription(_optionfdOhOCB)
		const _arrayValuenhl0UAg = true;
		const _arrayValuejANnaQM = "HGMjDi5kdmdrmxCxbdnWEBhkKz165s9";
		const _namej65j7tw = [_arrayValuenhl0UAg, _arrayValuejANnaQM]
		const _cmdtHGMwLr = new Command(_namej65j7tw)
		const _arrayValueVlow5M = 5.279166340303792;
		const _arrayValueMQhRnhJ = undefined;
		const _returnValuedmYZTvx = true;
		const _arrayValuepb0rZqw = () => { return _returnValuedmYZTvx };
		const _arrayValuexSNBGax = undefined;
		const _arrayValuep7fi1g4 = {
		
	}
		const _arrayValuemiiHrk1 = undefined;
		const _arrayValue9u5XNC = false;
		const _returnValueZopUrzO = 8.143329828125456;
		const _arrayValuendDmBDA = () => { return _returnValueZopUrzO };
		const _returnValuenhsLrL = [_arrayValue9u5XNC, _arrayValuendDmBDA]
		const _arrayValuezyKwjrG = () => { return _returnValuenhsLrL };
		const _arrayValuedgOp7K3 = [_arrayValuemiiHrk1, _arrayValuezyKwjrG]
		const _arrayValuelRzlnAt = [_arrayValuepb0rZqw, _arrayValuexSNBGax, _arrayValuep7fi1g4, _arrayValuedgOp7K3]
		const _eventl6qBMor = [_arrayValueVlow5M, _arrayValueMQhRnhJ, _arrayValuelRzlnAt]
		const _listenerOBgAsag = 6.683729013363479;
		const _returnValuebHK5vx2 = await _cmdtHGMwLr.hook(_eventl6qBMor, _listenerOBgAsag)
		const _nameyD9LCI4 = null;
		const _returnValuedzUgr4 = await _cmdtHGMwLr.createCommand(_nameyD9LCI4)
		const _returnValuefRBnpKT = await _helperPEpvYa.visibleArguments(_cmdtHGMwLr)
		const _returnValueXvGz11n = true;
		const _argumenti1jzIYv = () => { return _returnValueXvGz11n };
		const _returnValueTxzBGeI = await _helperPEpvYa.argumentDescription(_argumenti1jzIYv)
		const _cmduW1fT6Z = null;
		const _helperDDHkLm = "MwcIpkTL5Tl9F7XrteoZXk6vlBPFpfE40EDsVz0bL4J4kZIjtcMJNsgvaiyUlSBh6HoyAm463bDnFTa44gEkX";
		const _returnValueiY3a38h = await _helperPEpvYa.longestOptionTermLength(_cmduW1fT6Z, _helperDDHkLm)
		const _cmdH6UKrAW = true;
		const _returnValuewi2Z2Km = false;
		const _longestOptionTermLengthRlDoL1z = () => { return _returnValuewi2Z2Km };
		const _arrayValueUt5Cgd = -5.296751943214577;
		const _returnValueTlANXj7 = "jud9ljaK0qhOZ7mZQYoPpZI7lo142PdGzNwxjTzhBq1dzhuvTwMrkYGYzGxHdt9CkWF53Ylf9CaSL6CFMOFOupOlFQXSN";
		const _returnValuecTdX4fb = () => { return _returnValueTlANXj7 };
		const _arrayValueTy6royr = () => { return _returnValuecTdX4fb };
		const _arrayValueyQZqYk7 = undefined;
		const _arrayValueBNup1Za = null;
		const _arrayValueDKpiXZf = null;
		const _arrayValueuBGXz5z = undefined;
		const _arrayValuexVsQ2q8 = [_arrayValueyQZqYk7, _arrayValueBNup1Za, _arrayValueDKpiXZf, _arrayValueuBGXz5z]
		const _returnValueSKYUxwo = [_arrayValueUt5Cgd, _arrayValueTy6royr, _arrayValuexVsQ2q8]
		const _longestSubcommandTermLengthh41aas = () => { return _returnValueSKYUxwo };
		const _returnValuexZ6X5SF = {
		
	}
		const _longestArgumentTermLengthBQoSek8 = () => { return _returnValuexZ6X5SF };
		const _helperJsU9suz = {
			"longestOptionTermLength": _longestOptionTermLengthRlDoL1z,
		"longestSubcommandTermLength": _longestSubcommandTermLengthh41aas,
		"longestArgumentTermLength": _longestArgumentTermLengthBQoSek8
	}
		const _returnValueBS21Y8n = await _helperPEpvYa.padWidth(_cmdH6UKrAW, _helperJsU9suz)
		const _returnValueRVuE7k = await _HelpSrLw6Ry.longestOptionTermLength(_cmdNgo9lL1, _helperPEpvYa)
		const _cmdKW6y4x4 = undefined;
		const _helper4Lq6MY = new Help()
		const _returnValuesvedMs6 = 5.540237608261192;
		const _matchrqFqQRF = () => { return _returnValuesvedMs6 };
		const _returnValuexi7D8uA = "PgqqaefyVZu6mUaXtcgGWeFeGST";
		const _substr4C9w4e = () => { return _returnValuexi7D8uA };
		const _strPgiow5c = {
			"match": _matchrqFqQRF,
		"substr": _substr4C9w4e
	}
		const _width6gHILN = 0.7247299996160894;
		const _indentjwACINT = 0.5478400451217951;
		const _minColumnWidthOfDxhSH = -7.196748156102953;
		const _returnValueKFkTzpN = await _helper4Lq6MY.wrap(_strPgiow5c, _width6gHILN, _indentjwACINT, _minColumnWidthOfDxhSH)
		const _cmde2qQIgH = null;
		const _sortSubcommandsxvvjvn = true;
		const _returnValueYwxvAKF = null;
		const _subcommandTermwucew5u = () => { return _returnValueYwxvAKF };
		const _helpercXusZdm = {
			"sortSubcommands": _sortSubcommandsxvvjvn,
		"subcommandTerm": _subcommandTermwucew5u
	}
		const _returnValuezK2IcON = await _helper4Lq6MY.longestSubcommandTermLength(_cmde2qQIgH, _helpercXusZdm)
		const _returnValueqgXvQNI = await _HelpSrLw6Ry.longestSubcommandTermLength(_cmdKW6y4x4, _helper4Lq6MY)
		const _cmdi2ODkW1 = true;
		const _longestOptionTermLengthxjbheSj = 2.425849428106755;
		const _arrayValueNP6pVg1 = undefined;
		const _returnValuedObiAAi = [_arrayValueNP6pVg1]
		const _longestSubcommandTermLengthF8YLopM = () => { return _returnValuedObiAAi };
		const _returnValueDfxodIG = "EuuVdHfRKNZ9NcUDuNpBdR0cAAXKIWzkI6Nvk6httCnkR4zDl4xNpqmdx2WotzHFlOF5sc0RQYrXqyIPdaxEngbAMRAtbDzj";
		const _longestArgumentTermLengthNT6iqMH = () => { return _returnValueDfxodIG };
		const _helperiP5MFFg = {
			"longestOptionTermLength": _longestOptionTermLengthxjbheSj,
		"longestSubcommandTermLength": _longestSubcommandTermLengthF8YLopM,
		"longestArgumentTermLength": _longestArgumentTermLengthNT6iqMH
	}
		const _returnValueiqfC8xd = await _HelpSrLw6Ry.padWidth(_cmdi2ODkW1, _helperiP5MFFg)
	});

	it('test for Help', async () => {
		const _Help1aAOjg = new Help()
		const _arrayValueXvEjdI = true;
		const _arrayValuecq5JQy = "60SI5UJamx9B2CFNWNJOiGyCK8TozlZ1onNm2olR2tvkeKTV9HAxH0VnYu6VNitLN";
		const _nameUMfyPF2 = [_arrayValueXvEjdI, _arrayValuecq5JQy]
		const _descriptionBx0ml04 = 8.325689727913673;
		const _optionkdG7LC2 = new Argument(_nameUMfyPF2, _descriptionBx0ml04)
		const _valueDx8kqjj = "98SaW";
		const _returnValuetM47f9P = false;
		const _concatH1LLVid = () => { return _returnValuetM47f9P };
		const _previousbMXs4Uv = {
			"concat": _concatH1LLVid
	}
		const _returnValueND6rVE2 = await _optionkdG7LC2._concatValue(_valueDx8kqjj, _previousbMXs4Uv)
		const _arrayValuePJ3dwaV = undefined;
		const _valuesckPLCTJ = [_arrayValuePJ3dwaV]
		const _returnValueXj21IL2 = await _optionkdG7LC2.choices(_valuesckPLCTJ)
		const _returnValueWQqnBru = await _optionkdG7LC2.name()
		const _returnValueiMmtIOr = await _Help1aAOjg.optionDescription(_optionkdG7LC2)
		const _namefuSAWqx = true;
		const _cmdW62oZ4k = new Command(_namefuSAWqx)
		const _arrayValueyWQdI0y = -4.557967775493214;
		const _arrayValueiSnkqlC = false;
		const _flagsqOHsV6D = [_arrayValueyWQdI0y, _arrayValueiSnkqlC]
		const _descriptioneKuMXIZ = "ksHDeJ";
		const _returnValue5V3clU = await _cmdW62oZ4k.helpOption(_flagsqOHsV6D, _descriptioneKuMXIZ)
		const _returnValueqXSFb0c = "26PqNiyIWiSmxp6iSZCkFmTE91l4BCNJdCADn2MLOn9PnCpg0tOaAWb41jsIqHfg31nNokkJxYKO6";
		const _argvw6u6D8r = () => { return _returnValueqXSFb0c };
		const _parseOptionsdUenkx3 = "CLYdwdKyjg5amKOmCqUUOB3HHu5iwPVsC5JADYsfG3ICKxPMql5ACvnFYkk6Qcnz9gHfc5Mj6yQEl";
		const _returnValueDxARNYl = await _cmdW62oZ4k.parseAsync(_argvw6u6D8r, _parseOptionsdUenkx3)
		const _optionLX9TCx = "e8l2YpHeDsL43le5nR76uFSk2XC2OTpeB90wOaLl2tFrlXZkomSgBAw9L1yVGLwtSP1Jx6TYIzm95YfPVUAiMKJnL2INXBg9MS";
		const _returnValueladHpcy = await _cmdW62oZ4k.optionMissingArgument(_optionLX9TCx)
		const _returnValueaqjfsU6 = await _Help1aAOjg.subcommandTerm(_cmdW62oZ4k)
		const _cmdQNsFCBm = true;
		const _helperBkhZksB = undefined;
		const _returnValueQU4sQZf = await _Help1aAOjg.longestArgumentTermLength(_cmdQNsFCBm, _helperBkhZksB)
		const _cmdrFi4Dnq = "tc2dna5CENztTndNkMnpgd7DMgJgr";
		const _returnValueyoBn5me = await _Help1aAOjg.visibleOptions(_cmdrFi4Dnq)
	});

	it('test for Help', async () => {
		const _HelpdmvMrFt = new Help()
		const _returnValueJ35VQ9c = null;
		const _matchJkUztEW = () => { return _returnValueJ35VQ9c };
		const _returnValuej1LGJq6 = "V6FHE3HwBnw8Pogbt7dcesTc9VrAvgpsNPgHxtE64cBicVnm7UPGhsH1fXQMhqgRqUAEIsxrd";
		const _substrFzg1ANY = () => { return _returnValuej1LGJq6 };
		const _strsid4Jnk = {
			"match": _matchJkUztEW,
		"substr": _substrFzg1ANY
	}
		const _widthVLQdrUs = 9.065327870131576;
		const _indentT81Uy7D = 6.4197717285746165;
		const _minColumnWidthWWlEis = -6.156035480745617;
		const _returnValueAiTFOsi = await _HelpdmvMrFt.wrap(_strsid4Jnk, _widthVLQdrUs, _indentT81Uy7D, _minColumnWidthWWlEis)
		const _namenxZT0n = undefined;
		const _cmdRYc2wmw = new Command(_namenxZT0n)
		const _returnValuezzn1rbc = await _cmdRYc2wmw._checkForMissingMandatoryOptions()
		const _positiongUMLCUF = "6Qinq0DIpU2Lok2tocfqKB3LeitI6jEOeJUJhmu0cMForr6jus";
		const _returnValueZKqgoTK = undefined;
		const _textvNkSHY = () => { return _returnValueZKqgoTK };
		const _returnValueNKSgAwz = await _cmdRYc2wmw.addHelpText(_positiongUMLCUF, _textvNkSHY)
		const _returnValueNBjrAmS = await _HelpdmvMrFt.commandUsage(_cmdRYc2wmw)
		const _cmdH4vIZYn = -1.5883941114563989;
		const _returnValuevLKTLx = await _HelpdmvMrFt.subcommandDescription(_cmdH4vIZYn)
	});

	it('test for Help', async () => {
		const _HelptPQe7Wz = new Help()
		const _cmdlba43Q9 = undefined;
		const _arrayValueuGEYRTr = {
		
	}
		const _returnValueSvsu5Uh = 9.891238735761704;
		const _arrayValueEK1x3TG = () => { return _returnValueSvsu5Uh };
		const _arrayValuexC1fhb0 = -7.878779194971249;
		const _returnValues10YWlj = [_arrayValueuGEYRTr, _arrayValueEK1x3TG, _arrayValuexC1fhb0]
		const _visibleOptionshzsoU81 = () => { return _returnValues10YWlj };
		const _returnValueD0aA2XF = "6qnhZykYAmfs4geA9CRyVxMIbCmKeDDzSu";
		const _optionTermhNKnZ4 = () => { return _returnValueD0aA2XF };
		const _helperMXdchZB = {
			"visibleOptions": _visibleOptionshzsoU81,
		"optionTerm": _optionTermhNKnZ4
	}
		const _returnValueyyvsuk = await _HelptPQe7Wz.longestOptionTermLength(_cmdlba43Q9, _helperMXdchZB)
		const _nameodJTcXF = "ApWCfRBqU2P8gnFjrBIQHhqlrzUhK8Q2fJ28gxSplreO2Vur2";
		const _cmd6JLQvN = new Command(_nameodJTcXF)
		const _returnValuer1Cz0Tj = await _cmd6JLQvN.opts()
		const _returnValueJ9gkMa = await _HelptPQe7Wz.visibleOptions(_cmd6JLQvN)
		const __nameiuWOD0r = {
		
	}
		const __aliasesqHj1bbI = {
		
	}
		const _parentO6IGcow = "nsmLVA";
		const _returnValueOBcg8Z = -8.796786583025106;
		const _usageV1ZUnnv = () => { return _returnValueOBcg8Z };
		const _cmdKVTbNo3 = {
			"_name": __nameiuWOD0r,
		"_aliases": __aliasesqHj1bbI,
		"parent": _parentO6IGcow,
		"usage": _usageV1ZUnnv
	}
		const _returnValueONZiCzp = await _HelptPQe7Wz.commandUsage(_cmdKVTbNo3)
		const _cmdu3DX7MM = "zBJ3k4Y7HfVY93lhF1LQBF4bb9FTq3";
		const _returnValuev93SAtC = await _HelptPQe7Wz.subcommandTerm(_cmdu3DX7MM)
	});

	it('test for Help', async () => {
		const _HelpxBJ1kWB = new Help()
		const _returnValuemxn2lKg = {
		
	}
		const _namePnAI8Jc = () => { return _returnValuemxn2lKg };
		const _argumentYjFCrw6 = {
			"name": _namePnAI8Jc
	}
		const _returnValueSNhhWVf = await _HelpxBJ1kWB.argumentTerm(_argumentYjFCrw6)
		const _name97iQsc = undefined;
		const _cmdLYm71Zp = new Command(_name97iQsc)
		const _keyZJEQUZ = undefined;
		const _value8YsuJn = undefined;
		const _returnValuenNVoebx = await _cmdLYm71Zp.setOptionValue(_keyZJEQUZ, _value8YsuJn)
		const _displayHelpmKbrlHH = {
		
	}
		const _returnValue3MlYnq = await _cmdLYm71Zp.showHelpAfterError(_displayHelpmKbrlHH)
		const _nameKQ2tYx5 = 0.8326748324451039;
		const _returnValueQ2wBO1l = await _cmdLYm71Zp._findCommand(_nameKQ2tYx5)
		const _returnValuezQFI5id = await _HelpxBJ1kWB.subcommandTerm(_cmdLYm71Zp)
		const _arrayValueb01FeG7 = null;
		const _arrayValueEmeqimy = null;
		const _arrayValueiKZOaCl = undefined;
		const _message3FHKRw = [_arrayValueb01FeG7, _arrayValueEmeqimy, _arrayValueiKZOaCl]
		const _argumentNhJxv2 = new InvalidArgumentError(_message3FHKRw)
		const _returnValueQMX21KV = await _HelpxBJ1kWB.argumentTerm(_argumentNhJxv2)
		const _arrayValueMjYSx0e = "wgPUOGmaH4OX1QFF0DffJwfR3ZZHhEydUoh4MlXfcgqWn";
		const _arrayValuebmY12bM = 5.632297734358842;
		const _arrayValuezPJAb4B = null;
		const _arrayValuer6e0OOi = [_arrayValueMjYSx0e, _arrayValuebmY12bM, _arrayValuezPJAb4B]
		const _optionFDm8pi0 = [_arrayValuer6e0OOi]
		const _returnValueZnEWWaw = await _HelpxBJ1kWB.optionDescription(_optionFDm8pi0)
		const _cmdYZlsxQG = {
		
	}
		const _returnValuebRouozN = "ydWOaqtLcAGIzb7BYpLzn";
		const _returnValueAdNKXJv = () => { return _returnValuebRouozN };
		const _helperVxh8WP6 = () => { return _returnValueAdNKXJv };
		const _returnValueoZsjGhm = await _HelpxBJ1kWB.formatHelp(_cmdYZlsxQG, _helperVxh8WP6)
	});

	it('test for Help', async () => {
		const _Help0u4AfV = new Help()
		const _arrayValueDGAAElh = {
		
	}
		const _arrayValueh2JUt6s = "LjxFknSe7xJfItMuOAuTNGPNvj84R0mPUHz2DmxEBaKt1tadyxiFIeCG8aVNTCHDOT40enwPhIyBB";
		const _arrayValueKyjQl3P = [_arrayValueh2JUt6s]
		const _arrayValuecyHG5xp = "OP2mKRxgfE9B";
		const _arrayValueZN0hTC3 = null;
		const _arrayValueuXvVvzm = [_arrayValuecyHG5xp, _arrayValueZN0hTC3]
		const _arrayValuegsgl6SB = [_arrayValueDGAAElh, _arrayValueKyjQl3P, _arrayValueuXvVvzm]
		const _arrayValuenD2e6VY = false;
		const _arrayValueI6clOQm = null;
		const _arrayValuehiEojZH = 8.27373961720831;
		const _arrayValuefYKrlNn = [_arrayValuehiEojZH]
		const _cmdrIFtljS = [_arrayValuegsgl6SB, _arrayValuenD2e6VY, _arrayValueI6clOQm, _arrayValuefYKrlNn]
		const _helperLzU2Mjh = new Help()
		const _namegRRhCq3 = "VAoDcaGAkPMRbur8cfe3tybO5SXDIUcAqVG2wJ31OJQjIWURcvC";
		const _descriptionRkH5gee = {
		
	}
		const _optionYnxMXJ4 = new Argument(_namegRRhCq3, _descriptionRkH5gee)
		const _valuegtZzel = -6.8010557563582275;
		const _arrayValueIYIU9ct = {
		
	}
		const _arrayValueLFRVo6m = "Hz6te9OwgZdCAuBaq5ynLqqBW32";
		const _previousE0zACV = [_arrayValueIYIU9ct, _arrayValueLFRVo6m]
		const _returnValueoF7sjmI = await _optionYnxMXJ4._concatValue(_valuegtZzel, _previousE0zACV)
		const _valuevIODJO6 = {
		
	}
		const _descriptionSWVOcei = {
		
	}
		const _returnValueCBYPn1j = await _optionYnxMXJ4.default(_valuevIODJO6, _descriptionSWVOcei)
		const _arrayValuenRQsmNM = -9.497985358960335;
		const _arrayValuezUx2AL0 = -4.821563670213381;
		const _valuesxnQYOWl = [_arrayValuenRQsmNM, _arrayValuezUx2AL0]
		const _returnValuerveUVNx = await _optionYnxMXJ4.choices(_valuesxnQYOWl)
		const _returnValueHRYamDQ = await _optionYnxMXJ4.argRequired()
		const _returnValueG2Mh9lR = await _helperLzU2Mjh.optionDescription(_optionYnxMXJ4)
		const _cmdWsixa0g = true;
		const _arrayValueseNtxMO = "Mdfud2LC3tYZzhKOGgzVgS84lPxOCRop8rMKm4YJV5szCnOO2sRRl";
		const _arrayValuej2hOcB = undefined;
		const _returnValueHYi70ID = [_arrayValueseNtxMO, _arrayValuej2hOcB]
		const _longestOptionTermLengtheFsDrjm = () => { return _returnValueHYi70ID };
		const _longestSubcommandTermLengthHjHkQIL = 5.351313678311753;
		const _arrayValuezjgYTk9 = 3.384251511890735;
		const _returnValueuOT7G7M = [_arrayValuezjgYTk9]
		const _longestArgumentTermLengthWX74ljz = () => { return _returnValueuOT7G7M };
		const _helperZYQw1F = {
			"longestOptionTermLength": _longestOptionTermLengtheFsDrjm,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHjHkQIL,
		"longestArgumentTermLength": _longestArgumentTermLengthWX74ljz
	}
		const _returnValuevI0kmXF = await _helperLzU2Mjh.padWidth(_cmdWsixa0g, _helperZYQw1F)
		const _returnValuewrsNAfm = await _Help0u4AfV.padWidth(_cmdrIFtljS, _helperLzU2Mjh)
		const _optionsbpDi22S = undefined;
		const __hasHelpOptionRW71xFf = []
		const __helpShortFlagLfvbwL = null;
		const _returnValueRtm1aIi = null;
		const __findOptionZDY7iZf = () => { return _returnValueRtm1aIi };
		const _arrayValueZNZ1ieK = true;
		const _arrayValueOYgNSiw = "q4tl6eO1hzUWRaj6ctL4wVvkPrwnMceX7tn";
		const _arrayValueBSPiZpy = 8.85468605279074;
		const _arrayValueD6FO86 = {
		
	}
		const _arrayValueeH2B1Oi = null;
		const _arrayValueAZz06qR = undefined;
		const _arrayValueaVavEqk = [_arrayValueD6FO86, _arrayValueeH2B1Oi, _arrayValueAZz06qR]
		const _arrayValueCHNlZWn = false;
		const _returnValuendh0sCL = [_arrayValueBSPiZpy, _arrayValueaVavEqk, _arrayValueCHNlZWn]
		const _arrayValuev8PXfNt = () => { return _returnValuendh0sCL };
		const _arrayValuebFaFxp = [_arrayValueZNZ1ieK, _arrayValueOYgNSiw, _arrayValuev8PXfNt]
		const _arrayValueQJR3jD = 9.316971675580003;
		const _arrayValueTvjpS0y = "VoYP3zxauaG4wTbRqW45rl4eoYAmDmSM0fZ9v6qGBrAvjjL7FqNXUdvau9woJl3ve7waAs8DA";
		const _arrayValueC87ksS = [_arrayValueQJR3jD, _arrayValueTvjpS0y]
		const __helpLongFlagBKlHL2D = [_arrayValuebFaFxp, _arrayValueC87ksS]
		const _returnValueR62n2dx = undefined;
		const _createOptionef2jU35 = () => { return _returnValueR62n2dx };
		const _arrayValuelVErPD = null;
		const __helpDescriptionZ0a7RiO = [_arrayValuelVErPD]
		const _arrayValueF2XTaz2 = {
		
	}
		const _arrayValueMl8zXU5 = "eVldFun1Ng9KH2QnWWpX18sbuo5FoWrNVVmgySJEVapKo7paYiE";
		const __helpFlagsALxKn4E = [_arrayValueF2XTaz2, _arrayValueMl8zXU5]
		const _cmdEhGuBq = {
			"options": _optionsbpDi22S,
		"_hasHelpOption": __hasHelpOptionRW71xFf,
		"_helpShortFlag": __helpShortFlagLfvbwL,
		"_findOption": __findOptionZDY7iZf,
		"_helpLongFlag": __helpLongFlagBKlHL2D,
		"createOption": _createOptionef2jU35,
		"_helpDescription": __helpDescriptionZ0a7RiO,
		"_helpFlags": __helpFlagsALxKn4E
	}
		const _returnValue4SsmNn = await _Help0u4AfV.visibleOptions(_cmdEhGuBq)
		const _argChoicesRUhIYEQ = {
		
	}
		const _negateYAA2O9I = null;
		const _defaultValueryXyIj4 = undefined;
		const _defaultValueDescriptionfPoghH = false;
		const _envVarwLPz3BH = undefined;
		const _descriptioneL15cvl = "ndiXQbI3c9PufkmkoJ2yGg2xjkT";
		const _optiondXnxJ70 = {
			"argChoices": _argChoicesRUhIYEQ,
		"negate": _negateYAA2O9I,
		"defaultValue": _defaultValueryXyIj4,
		"defaultValueDescription": _defaultValueDescriptionfPoghH,
		"envVar": _envVarwLPz3BH,
		"description": _descriptioneL15cvl
	}
		const _returnValueRlG4lkW = await _Help0u4AfV.optionDescription(_optiondXnxJ70)
	});

	it('test for Help', async () => {
		const _HelpNvDUVUw = new Help()
		const _returnValuee8oTNrc = undefined;
		const _namenFTSe0T = () => { return _returnValuee8oTNrc };
		const _descriptionodn3bBU = false;
		const _argumentQw8Owv1 = new Argument(_namenFTSe0T, _descriptionodn3bBU)
		const _returnValuePIOCFy = await _argumentQw8Owv1.argRequired()
		const _arrayValueg9gOfoA = "9ViFpwvXhVcyAEidgifWVVV6BW8JyXXhOaEPur8H9Ddv88ADTyejApksvojEfkeZP30";
		const _arrayValueUNFMlu1 = -5.538005488973671;
		const _arrayValuenNjO9UR = false;
		const _arrayValuecb89vy7 = [_arrayValueg9gOfoA, _arrayValueUNFMlu1, _arrayValuenNjO9UR]
		const _arrayValuelsFBAB = -1.3780154056427225;
		const _valuesraL1oQG = [_arrayValuecb89vy7, _arrayValuelsFBAB]
		const _returnValuecsTKWOj = await _argumentQw8Owv1.choices(_valuesraL1oQG)
		const _returnValueNrSlCYU = await _HelpNvDUVUw.argumentDescription(_argumentQw8Owv1)
		const _arrayValueukODGJ = 8.646938783594521;
		const _arrayValueEydb2o6 = true;
		const _cmdWS5moR = [_arrayValueukODGJ, _arrayValueEydb2o6]
		const _helperE819cg0 = undefined;
		const _returnValueAPdMiEN = await _HelpNvDUVUw.longestArgumentTermLength(_cmdWS5moR, _helperE819cg0)
		const _arrayValueOW6tcea = null;
		const _arrayValuewL4ZUT4 = 0.8316761850070407;
		const _arrayValuewsiqx4p = 6.211171676941234;
		const _cmdots7mhE = [_arrayValueOW6tcea, _arrayValuewL4ZUT4, _arrayValuewsiqx4p]
		const _returnValuevsQunQC = await _HelpNvDUVUw.subcommandTerm(_cmdots7mhE)
		const _returnValueL54G9JR = undefined;
		const _argumentmNgBVH3 = () => { return _returnValueL54G9JR };
		const _returnValueC8rwIpf = await _HelpNvDUVUw.argumentDescription(_argumentmNgBVH3)
	});

	it('test for Help', async () => {
		const _HelpDwDvDyH = new Help()
		const _arrayValueHrR0cOr = 0.644748462907403;
		const _namenPQHIum = [_arrayValueHrR0cOr]
		const _descriptionPB7HvCd = {
		
	}
		const _argumentV9mAGBd = new Argument(_namenPQHIum, _descriptionPB7HvCd)
		const _valueV6fuYuw = {
		
	}
		const _description0lNfs9 = undefined;
		const _returnValueIFV26R = await _argumentV9mAGBd.default(_valueV6fuYuw, _description0lNfs9)
		const _valueQzLSsf1 = "xVLndCoG9o1r";
		const _arrayValuezJn5Ymi = "XnF";
		const _returnValuehRD29Ib = -2.5723769504649017;
		const _arrayValueNZg0H5Y = () => { return _returnValuehRD29Ib };
		const _arrayValuehBIGYis = 0.9569138644217805;
		const _previousjtkNZwK = [_arrayValuezJn5Ymi, _arrayValueNZg0H5Y, _arrayValuehBIGYis]
		const _returnValuegHl3lwO = await _argumentV9mAGBd._concatValue(_valueQzLSsf1, _previousjtkNZwK)
		const _arrayValueYURVFdS = "nVVSc1gYyrE5OfYcvQt1H0p";
		const _arrayValuePwEmT3m = {
		
	}
		const _arrayValuelzZe2On = null;
		const _valueZK6dYc6 = [_arrayValueYURVFdS, _arrayValuePwEmT3m, _arrayValuelzZe2On]
		const _arrayValueEaFALCm = true;
		const _returnValuePbElQp = [_arrayValueEaFALCm]
		const _concatXYZtNEu = () => { return _returnValuePbElQp };
		const _previousTxjRv5E = {
			"concat": _concatXYZtNEu
	}
		const _returnValuewXulHda = await _argumentV9mAGBd._concatValue(_valueZK6dYc6, _previousTxjRv5E)
		const _returnValueWlVFT6Q = await _HelpDwDvDyH.argumentDescription(_argumentV9mAGBd)
	});

	it('test for Help', async () => {
		const _Helpe41b1cm = new Help()
		const _returnValuepJZ5fr = "2an9mzhKPcHlvm6";
		const _matchFwGPZkJ = () => { return _returnValuepJZ5fr };
		const _returnValuewg7Xkrj = "l5x4O2SdJSASieL3qw12OK67SPYbIRxxoYX2WtxUTvUWCaoN8OvlerPi7A9cu26apISQPMkPGlsM";
		const _substr4f0tY2 = () => { return _returnValuewg7Xkrj };
		const _stryLjVDvg = {
			"match": _matchFwGPZkJ,
		"substr": _substr4f0tY2
	}
		const _widthL0qLPVS = -6.759986540202529;
		const _indent5Kvm7D = 0.302776323472866;
		const _minColumnWidthPcuU8Mi = -0.17510237587280386;
		const _returnValueMsNcVxn = await _Helpe41b1cm.wrap(_stryLjVDvg, _widthL0qLPVS, _indent5Kvm7D, _minColumnWidthPcuU8Mi)
	});

	it('test for Help', async () => {
		const _HelpQ3zl3AO = new Help()
		const _namekHJdDz2 = "l6Ief7JUKfcMlI1hoStbx1mvHI3z9RafJp7nPEWCM9NPpxgEpAu5d4ssy4QvjZejK3YrymikP";
		const _cmdP6S1rGD = new Command(_namekHJdDz2)
		const _returnValueHF1BCGe = null;
		const _nameBe0vyS7 = () => { return _returnValueHF1BCGe };
		const _arrayValueMZLfqnE = undefined;
		const _arrayValuekDvwb2K = null;
		const _descriptioniMDDW7e = [_arrayValueMZLfqnE, _arrayValuekDvwb2K]
		const _returnValueK8GmBBr = await _cmdP6S1rGD.createArgument(_nameBe0vyS7, _descriptioniMDDW7e)
		const _keyBsuB8Z4 = false;
		const _returnValuewaajxgt = await _cmdP6S1rGD.getOptionValue(_keyBsuB8Z4)
		const _flags5Rx67D = "VNHaZjt3sFxKMHQgD5d3B3qn7fJpOv2V6maApcKTdku9vhuBpnMGaCLJsNJnPKwKC5";
		const _descriptionjbKYl32 = "u4W";
		const _fnXa3yJa = "t5tit6joo99VezaVmAgENukkgLX4WvVsWVfvqix3K3tdXUa22IotsfgG2DrpYZVuN";
		const _defaultValue2yyNC0 = undefined;
		const _returnValueQpJWNFA = await _cmdP6S1rGD.option(_flags5Rx67D, _descriptionjbKYl32, _fnXa3yJa, _defaultValue2yyNC0)
		const _returnValuesToUYl = await _HelpQ3zl3AO.subcommandTerm(_cmdP6S1rGD)
		const _returnValuegb65n3i = false;
		const _includeso0oUxBa = () => { return _returnValuegb65n3i };
		const _flagsAIVAM1 = {
			"includes": _includeso0oUxBa
	}
		const _descriptionLQ1VudP = "QY2RIeWJbPCDzdTby";
		const _cmdLyaBIoV = new Option(_flagsAIVAM1, _descriptionLQ1VudP)
		const _returnValueP3gPqI = await _cmdLyaBIoV.name()
		const _hideLigaxPl = true;
		const _returnValueuLQxBxA = await _cmdLyaBIoV.hideHelp(_hideLigaxPl)
		const _returnValueXpHMGbT = await _HelpQ3zl3AO.commandDescription(_cmdLyaBIoV)
		const _cmdji66B4f = -6.371201987877962;
		const _returnValuelR2vsp = null;
		const _visibleOptionsbdAstm8 = () => { return _returnValuelR2vsp };
		const _returnValueaGpjsrG = {
		
	}
		const _optionTerm0cYSiH = () => { return _returnValueaGpjsrG };
		const _helperYS3GyUq = {
			"visibleOptions": _visibleOptionsbdAstm8,
		"optionTerm": _optionTerm0cYSiH
	}
		const _returnValueV4y599C = await _HelpQ3zl3AO.longestOptionTermLength(_cmdji66B4f, _helperYS3GyUq)
	});

	it('test for Help', async () => {
		const _HelpoeS5ceN = new Help()
		const _optionxvJ2eXL = "jB";
		const _returnValueSrBSyVg = await _HelpoeS5ceN.optionTerm(_optionxvJ2eXL)
		const _argChoicesJ4UhJ3x = {
		
	}
		const _negateLpJab58 = true;
		const _defaultValueP1UsJl = undefined;
		const _defaultValueDescriptionkYRnWbh = -8.614305191884231;
		const _envVarDP5mD3D = "WFC53B3N03yCCA1cwgTh0jzNo2Upq1UEzqNaj07L6VgyIF";
		const _descriptionQt3kEYx = true;
		const _optionGk5ihI = {
			"argChoices": _argChoicesJ4UhJ3x,
		"negate": _negateLpJab58,
		"defaultValue": _defaultValueP1UsJl,
		"defaultValueDescription": _defaultValueDescriptionkYRnWbh,
		"envVar": _envVarDP5mD3D,
		"description": _descriptionQt3kEYx
	}
		const _returnValueSc1a3fC = await _HelpoeS5ceN.optionDescription(_optionGk5ihI)
		const _cmdmJTxGIt = "zHIM2BX8JMnGtNmzmY";
		const _returnValueLEqFHWa = await _HelpoeS5ceN.visibleOptions(_cmdmJTxGIt)
		const _cmduikPrWg = undefined;
		const _returnValuePCgDnuf = true;
		const _visibleArgumentsvfAzptZ = () => { return _returnValuePCgDnuf };
		const _returnValuedYhjae5 = undefined;
		const _argumentTermLswCiVg = () => { return _returnValuedYhjae5 };
		const _helperm4myiy3 = {
			"visibleArguments": _visibleArgumentsvfAzptZ,
		"argumentTerm": _argumentTermLswCiVg
	}
		const _returnValuePFNe0m6 = await _HelpoeS5ceN.longestArgumentTermLength(_cmduikPrWg, _helperm4myiy3)
	});

	it('test for Help', async () => {
		const _HelpXfx9CvU = new Help()
		const _namerVyYRHM = "utDGEodmP1uhWFHVAS";
		const _cmdICQEWGB = new Command(_namerVyYRHM)
		const _sourceCommandkulKBwE = "cdBzF9B48XvzQOZc25SM5rgOLRpdV03REDa6UcoorBNn86oVgSWYW1i5R5GPwxPHIwOCJurya3";
		const _returnValuekarpI0 = await _cmdICQEWGB.copyInheritedSettings(_sourceCommandkulKBwE)
		const _returnValueFXSNex3 = 6.613227985709308;
		const _keysbZwQQ = () => { return _returnValueFXSNex3 };
		const _valueemSsKP5 = undefined;
		const _sourcebIGR5e1 = false;
		const _returnValuemekb6bI = await _cmdICQEWGB.setOptionValueWithSource(_keysbZwQQ, _valueemSsKP5, _sourcebIGR5e1)
		const _returnValueLQ9SIO = await _HelpXfx9CvU.visibleOptions(_cmdICQEWGB)
		const _cmdDkwDmCq = null;
		const _helperWc4vYrS = "T9t8itqvh7OhkqM9sBbEYFZMq9WXJI1FFkSJB2";
		const _returnValuegLQSZ0d = await _HelpXfx9CvU.longestOptionTermLength(_cmdDkwDmCq, _helperWc4vYrS)
		const _cmdE0Pgldg = []
		const _returnValueFpgzGKG = await _HelpXfx9CvU.commandDescription(_cmdE0Pgldg)
		const _cmdPzhN6wj = "HnbLbZuCpmbaXoyfrcaLh1t19F3IjycG3GVKYIyBqjwutmszFo7wdGVAlneOTeiXgKiKIWCNTSug2efSw78eiOk";
		const _returnValueHMzDnm = -7.993872834589396;
		const _visibleArgumentsjS7KjXf = () => { return _returnValueHMzDnm };
		const _returnValueZfgYbp = true;
		const _argumentTermdq5tVno = () => { return _returnValueZfgYbp };
		const _helpereysGiWu = {
			"visibleArguments": _visibleArgumentsjS7KjXf,
		"argumentTerm": _argumentTermdq5tVno
	}
		const _returnValuepsRJRJb = await _HelpXfx9CvU.longestArgumentTermLength(_cmdPzhN6wj, _helpereysGiWu)
		const _optionWR1Yl0S = false;
		const _returnValue9ju020 = await _HelpXfx9CvU.optionDescription(_optionWR1Yl0S)
	});

	it('test for Help', async () => {
		const _HelpR0aDmTn = new Help()
		const _nameI8f80St = 1.9508676501249305;
		const _cmdBdbMaO1 = new Command(_nameI8f80St)
		const _passThroughI1IlPRX = false;
		const _returnValuejJGJjXC = await _cmdBdbMaO1.passThroughOptions(_passThroughI1IlPRX)
		const _aliasyJb00S3 = {
		
	}
		const _returnValueubgugL = await _cmdBdbMaO1.alias(_aliasyJb00S3)
		const _configurationoalOLuE = undefined;
		const _returnValueDHLfQ22 = await _cmdBdbMaO1.configureHelp(_configurationoalOLuE)
		const _returnValue0JrW6R = await _cmdBdbMaO1._checkNumberOfArguments()
		const _returnValues3fesBI = await _HelpR0aDmTn.commandUsage(_cmdBdbMaO1)
		const _arrayValued433mKO = {
		
	}
		const _arrayValueP57wtKB = true;
		const _returnValuexvvlkoa = undefined;
		const _arrayValueSlEAHwl = () => { return _returnValuexvvlkoa };
		const _arrayValueqb2WhWn = [_arrayValueP57wtKB, _arrayValueSlEAHwl]
		const _cmdud4Ckz5 = [_arrayValued433mKO, _arrayValueqb2WhWn]
		const _returnValuePAjkHYz = await _HelpR0aDmTn.visibleOptions(_cmdud4Ckz5)
		const _returnValueIHIUHfB = -9.685918115468228;
		const _includesjeFUyYE = () => { return _returnValueIHIUHfB };
		const _flagsWlqDKG1 = {
			"includes": _includesjeFUyYE
	}
		const _descriptionNg1eYdj = null;
		const _optionFAsFT2f = new Option(_flagsWlqDKG1, _descriptionNg1eYdj)
		const _returnValueZwAMuJA = await _optionFAsFT2f.attributeName()
		const _returnValueF5egp4W = await _optionFAsFT2f.name()
		const _fnipvs6g = undefined;
		const _returnValueEoIsMIn = await _optionFAsFT2f.argParser(_fnipvs6g)
		const _hideAlzjanz = true;
		const _returnValueKWaqkN = await _optionFAsFT2f.hideHelp(_hideAlzjanz)
		const _returnValues4soiM2 = await _HelpR0aDmTn.optionTerm(_optionFAsFT2f)
		const _arrayValuedS32U8s = true;
		const _arrayValuex6mwsFO = -4.839783483867564;
		const _arrayValueldVHt8 = [_arrayValuedS32U8s, _arrayValuex6mwsFO]
		const _cmdkNO60uV = [_arrayValueldVHt8]
		const _returnValuewVJkPRz = await _HelpR0aDmTn.visibleCommands(_cmdkNO60uV)
	});
})