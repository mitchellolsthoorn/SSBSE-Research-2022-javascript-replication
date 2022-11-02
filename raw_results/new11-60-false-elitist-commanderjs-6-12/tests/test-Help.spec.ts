export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpNtwbo2 = new Help()
		const _flagsyLA6z0e = undefined;
		const _optionU0RQe6V = {
			"flags": _flagsyLA6z0e
	}
		const _returnValueaJ6TY1Z = await _HelpNtwbo2.optionTerm(_optionU0RQe6V)
		const _cmdB9AnUlr = null;
		const _returnValueQee3NyD = true;
		const _visibleOptionsRnb9psT = () => { return _returnValueQee3NyD };
		const _returnValueFA9uajp = {
		
	}
		const _optionTermxqCdqBh = () => { return _returnValueFA9uajp };
		const _helperERaJKdO = {
			"visibleOptions": _visibleOptionsRnb9psT,
		"optionTerm": _optionTermxqCdqBh
	}
		const _returnValuew4XdLjz = await _HelpNtwbo2.longestOptionTermLength(_cmdB9AnUlr, _helperERaJKdO)
	});

	it('test for Help', async () => {
		const _HelpiQohDgH = new Help()
		const _argChoicesxfBbnWG = {
		
	}
		const _defaultValueGhjMSHl = undefined;
		const _defaultValueDescriptionpffsR0t = null;
		const _descriptionzrfOM9y = "YIlWVU8IVpRgVflvi2dAt1hfNoBDFbHNvTfb3V50bFvfEcFYqam3WrfecZEcujkABvC7I47";
		const _argumentq2wlDj = {
			"argChoices": _argChoicesxfBbnWG,
		"defaultValue": _defaultValueGhjMSHl,
		"defaultValueDescription": _defaultValueDescriptionpffsR0t,
		"description": _descriptionzrfOM9y
	}
		const _returnValuejXYRACd = await _HelpiQohDgH.argumentDescription(_argumentq2wlDj)
		const _argChoicesRVgyCqf = {
		
	}
		const _negatekzdpGzL = "KvC";
		const _defaultValueQf6B2Nj = undefined;
		const _arrayValueyCwLxXE = 9.295570729271699;
		const _arrayValueBvcxBnx = null;
		const _arrayValueaZO6bHM = [_arrayValueBvcxBnx]
		const _arrayValueE5hOtlD = 1.8729657500428125;
		const _returnValuepRv8DW2 = [_arrayValueyCwLxXE, _arrayValueaZO6bHM, _arrayValueE5hOtlD]
		const _defaultValueDescriptionCnj3sj = () => { return _returnValuepRv8DW2 };
		const _envVarFHZJowo = undefined;
		const _descriptionFiiB4pr = "f17oyANtYSfPF639CB";
		const _optionNeAQhvq = {
			"argChoices": _argChoicesRVgyCqf,
		"negate": _negatekzdpGzL,
		"defaultValue": _defaultValueQf6B2Nj,
		"defaultValueDescription": _defaultValueDescriptionCnj3sj,
		"envVar": _envVarFHZJowo,
		"description": _descriptionFiiB4pr
	}
		const _returnValueuP1ocBH = await _HelpiQohDgH.optionDescription(_optionNeAQhvq)
		const _argChoicesU1bfawH = {
		
	}
		const _defaultValuek8r8wyr = undefined;
		const _returnValueOhSUsAc = null;
		const _defaultValueDescriptionFwSDEPt = () => { return _returnValueOhSUsAc };
		const _descriptione3abJh8 = 1.434376899938366;
		const _arguments2h3rL = {
			"argChoices": _argChoicesU1bfawH,
		"defaultValue": _defaultValuek8r8wyr,
		"defaultValueDescription": _defaultValueDescriptionFwSDEPt,
		"description": _descriptione3abJh8
	}
		const _returnValuewmzkRIV = await _HelpiQohDgH.argumentDescription(_arguments2h3rL)
	});

	it('test for Help', async () => {
		const _HelpVtjVR3B = new Help()
		const _returnValueEB2Tlta = "7Br3N9Otb6b1iomg4r71alF";
		const _descriptionrKCxsS = () => { return _returnValueEB2Tlta };
		const _cmdzwxeAlh = {
			"description": _descriptionrKCxsS
	}
		const _returnValuekDdw82 = await _HelpVtjVR3B.subcommandDescription(_cmdzwxeAlh)
		const _argChoicesTuz5JNY = {
		
	}
		const _defaultValueCoZkXuz = undefined;
		const _defaultValueDescriptiontlAWMuo = null;
		const _descriptionCNg9Aw = {
		
	}
		const _argumentIacaRKs = {
			"argChoices": _argChoicesTuz5JNY,
		"defaultValue": _defaultValueCoZkXuz,
		"defaultValueDescription": _defaultValueDescriptiontlAWMuo,
		"description": _descriptionCNg9Aw
	}
		const _returnValuecZD013C = await _HelpVtjVR3B.argumentDescription(_argumentIacaRKs)
		const _cmdIyqdiMr = "H3XrBx0GrKm50JZtdTpzBtvMQ3uXcS9EnbijSIcEzigKRdEOa1EB3MqBkn2xMkoE7bla1rX";
		const _returnValueqF1h7RU = 2.7007379768647066;
		const _visibleArgumentsV5d3DMx = () => { return _returnValueqF1h7RU };
		const _arrayValueDNFglFg = 9.376823542473431;
		const _arrayValuecfJY45w = true;
		const _returnValuebGHWmc2 = [_arrayValueDNFglFg, _arrayValuecfJY45w]
		const _argumentTermmbdfypK = () => { return _returnValuebGHWmc2 };
		const _helperw70pnE1 = {
			"visibleArguments": _visibleArgumentsV5d3DMx,
		"argumentTerm": _argumentTermmbdfypK
	}
		const _returnValueZLfECl = await _HelpVtjVR3B.longestArgumentTermLength(_cmdIyqdiMr, _helperw70pnE1)
		const _flagsxikH1dA = -3.9943325696083276;
		const _optionDm9bVVo = {
			"flags": _flagsxikH1dA
	}
		const _returnValueAM0jzUL = await _HelpVtjVR3B.optionTerm(_optionDm9bVVo)
		const _flagsN8JwfrJ = "fXv6jTfblaWYJzr2BnBc1hhowcTTZ6ua0bOyK7J3dReVzOV731JRChIY";
		const _optione5mUnjh = {
			"flags": _flagsN8JwfrJ
	}
		const _returnValuenu3I4M = await _HelpVtjVR3B.optionTerm(_optione5mUnjh)
	});

	it('test for Help', async () => {
		const _Helpuop5cMn = new Help()
		const _cmdzZEobzA = []
		const _returnValuedw9DVDW = await _Helpuop5cMn.visibleOptions(_cmdzZEobzA)
	});

	it('test for Help', async () => {
		const _HelpqgKMVjX = new Help()
		const _argChoicesrEEFYDZ = null;
		const _negatekc4SHfr = null;
		const _defaultValuehPNNKW = undefined;
		const _defaultValueDescriptionSgdGAV1 = true;
		const _envVaryYtXv6o = undefined;
		const _descriptionMsjuwWA = true;
		const _optionJPPQwHc = {
			"argChoices": _argChoicesrEEFYDZ,
		"negate": _negatekc4SHfr,
		"defaultValue": _defaultValuehPNNKW,
		"defaultValueDescription": _defaultValueDescriptionSgdGAV1,
		"envVar": _envVaryYtXv6o,
		"description": _descriptionMsjuwWA
	}
		const _returnValueJJ8DZt = await _HelpqgKMVjX.optionDescription(_optionJPPQwHc)
		const _optionsoDCOwh7 = {
		
	}
		const __hasHelpOptionRkT32KC = -1.8599382821012735;
		const __helpShortFlagWnJEr4t = -1.3639061139800983;
		const _returnValuePyNMiQe = undefined;
		const __findOptionWThYV8U = () => { return _returnValuePyNMiQe };
		const _arrayValueit2jAwq = false;
		const _returnValueTWAkh5n = null;
		const _arrayValuernuEoQx = () => { return _returnValueTWAkh5n };
		const __helpLongFlagHNH9cqk = [_arrayValueit2jAwq, _arrayValuernuEoQx]
		const _returnValueDyMBFx6 = 3.8264084380877392;
		const _createOptionx45GXGo = () => { return _returnValueDyMBFx6 };
		const __helpDescriptionNvce3Nz = false;
		const __helpFlagsfWf55Aw = undefined;
		const _cmd2Khv2n = {
			"options": _optionsoDCOwh7,
		"_hasHelpOption": __hasHelpOptionRkT32KC,
		"_helpShortFlag": __helpShortFlagWnJEr4t,
		"_findOption": __findOptionWThYV8U,
		"_helpLongFlag": __helpLongFlagHNH9cqk,
		"createOption": _createOptionx45GXGo,
		"_helpDescription": __helpDescriptionNvce3Nz,
		"_helpFlags": __helpFlagsfWf55Aw
	}
		const _returnValueOTf7sTt = await _HelpqgKMVjX.visibleOptions(_cmd2Khv2n)
		const _cmdlquZSGQ = "bx3zC5Pr7tSSwNjd5MfSdJ29yvNAFxqKORzwlnIf6iKKqhQol4wxfmRkedgklg";
		const _returnValuewveMKJB = undefined;
		const _longestOptionTermLengthooZVsWb = () => { return _returnValuewveMKJB };
		const _arrayValuenSiYzbG = false;
		const _arrayValuekVDrs23 = null;
		const _returnValueVZFBWGj = [_arrayValuenSiYzbG, _arrayValuekVDrs23]
		const _longestSubcommandTermLengthVahl0bc = () => { return _returnValueVZFBWGj };
		const _returnValueK40HBN9 = undefined;
		const _longestArgumentTermLengthoDuklX = () => { return _returnValueK40HBN9 };
		const _helperpGuMnO9 = {
			"longestOptionTermLength": _longestOptionTermLengthooZVsWb,
		"longestSubcommandTermLength": _longestSubcommandTermLengthVahl0bc,
		"longestArgumentTermLength": _longestArgumentTermLengthoDuklX
	}
		const _returnValuebzjrEYE = await _HelpqgKMVjX.padWidth(_cmdlquZSGQ, _helperpGuMnO9)
	});

	it('test for Help', async () => {
		const _HelpxsrVNpL = new Help()
		const _returnValue3YMWCo = 2.691780356779134;
		const _descriptionSFf0dpS = () => { return _returnValue3YMWCo };
		const _cmdy8trXlg = {
			"description": _descriptionSFf0dpS
	}
		const _returnValueqv9N1R5 = await _HelpxsrVNpL.commandDescription(_cmdy8trXlg)
		const _cmd5HAYlp = true;
		const _returnValueUkBWo8Q = "kA5yVQWBR49KLYqiRB2AgfZSrlnbokQXJ7XmVOGKtjx6jzMX1X";
		const _visibleArguments6Vs37o = () => { return _returnValueUkBWo8Q };
		const _arrayValueBEHm0YD = undefined;
		const _arrayValueURh75OW = undefined;
		const _returnValueM7JpEt7 = [_arrayValueBEHm0YD, _arrayValueURh75OW]
		const _argumentTermESsbeb0 = () => { return _returnValueM7JpEt7 };
		const _helperb5LeH0n = {
			"visibleArguments": _visibleArguments6Vs37o,
		"argumentTerm": _argumentTermESsbeb0
	}
		const _returnValueQG7hutl = await _HelpxsrVNpL.longestArgumentTermLength(_cmd5HAYlp, _helperb5LeH0n)
		const _argChoicesZThJUB7 = {
		
	}
		const _defaultValueRSMDN2c = undefined;
		const _defaultValueDescriptionvaDo75 = null;
		const _descriptionm8yQiF = 7.052033108580247;
		const _argument2fQzzw = {
			"argChoices": _argChoicesZThJUB7,
		"defaultValue": _defaultValueRSMDN2c,
		"defaultValueDescription": _defaultValueDescriptionvaDo75,
		"description": _descriptionm8yQiF
	}
		const _returnValueNSjOvsG = await _HelpxsrVNpL.argumentDescription(_argument2fQzzw)
		const _returnValue5imfTq = "wzPu9JghgLEUmhcz6Uev1Nt5D7nqDQ9EhAviTynAOnsFKbF";
		const _descriptionithAylD = () => { return _returnValue5imfTq };
		const _cmdGqIKDHG = {
			"description": _descriptionithAylD
	}
		const _returnValuedBZwttk = await _HelpxsrVNpL.subcommandDescription(_cmdGqIKDHG)
	});

	it('test for Help', async () => {
		const _HelpUsVeqzI = new Help()
		const _flagsnZjqwb = undefined;
		const _optionLC4Y1fs = {
			"flags": _flagsnZjqwb
	}
		const _returnValueUKVCfF = await _HelpUsVeqzI.optionTerm(_optionLC4Y1fs)
		const __argsr7IXiwy = {
		
	}
		const __nameVCANZtL = -2.1351388263228843;
		const __aliasesrSlm7eH = {
		
	}
		const _optionsTjwmED = {
		
	}
		const _cmdC7hyTEk = {
			"_args": __argsr7IXiwy,
		"_name": __nameVCANZtL,
		"_aliases": __aliasesrSlm7eH,
		"options": _optionsTjwmED
	}
		const _returnValueBp1V4vv = await _HelpUsVeqzI.subcommandTerm(_cmdC7hyTEk)
	});

	it('test for Help', async () => {
		const _HelpBixh7gh = new Help()
		const _argChoicesu3M4cuA = {
		
	}
		const _negatekjbkzgD = false;
		const _defaultValuewHqrBhR = undefined;
		const _defaultValueDescriptionvCx6rN1 = -9.134885706593739;
		const _envVarMmhVTPo = undefined;
		const _descriptionW2Uoo6 = false;
		const _optionp21LMqb = {
			"argChoices": _argChoicesu3M4cuA,
		"negate": _negatekjbkzgD,
		"defaultValue": _defaultValuewHqrBhR,
		"defaultValueDescription": _defaultValueDescriptionvCx6rN1,
		"envVar": _envVarMmhVTPo,
		"description": _descriptionW2Uoo6
	}
		const _returnValueOJbbIjw = await _HelpBixh7gh.optionDescription(_optionp21LMqb)
		const _arrayValue7Gl81L = "p7TFdEZGO1SaXxNozUfGS";
		const _cmdySiAH9J = [_arrayValue7Gl81L]
		const _sortSubcommandsuBcoxlV = null;
		const _returnValueXuYGqxl = 2.382040766133626;
		const _subcommandTermlabFKeX = () => { return _returnValueXuYGqxl };
		const _helperdTG5oNl = {
			"sortSubcommands": _sortSubcommandsuBcoxlV,
		"subcommandTerm": _subcommandTermlabFKeX
	}
		const _returnValuei74add = await _HelpBixh7gh.formatHelp(_cmdySiAH9J, _helperdTG5oNl)
		const _returnValueZa56OtZ = null;
		const _cmdtGneAYz = () => { return _returnValueZa56OtZ };
		const _returnValueZ79ep8z = "4g8Idzfn5GfMMuew2yQsH95JW4lF2hh7s40nxVCVYWlKZy1kniDChU0Z5RH";
		const _visibleOptionsGGFVgrt = () => { return _returnValueZ79ep8z };
		const _returnValuekDxghT = -3.0959307095349056;
		const _optionTerm7SFrHE = () => { return _returnValuekDxghT };
		const _helperIexgxx = {
			"visibleOptions": _visibleOptionsGGFVgrt,
		"optionTerm": _optionTerm7SFrHE
	}
		const _returnValueHv0dXrw = await _HelpBixh7gh.longestOptionTermLength(_cmdtGneAYz, _helperIexgxx)
		const _cmdrMV7rDb = null;
		const _returnValuekXnOdE = {
		
	}
		const _longestOptionTermLengthT0KJdEv = () => { return _returnValuekXnOdE };
		const _returnValuef4i9pFq = null;
		const _longestSubcommandTermLengthvQLdSp = () => { return _returnValuef4i9pFq };
		const _returnValueUR6N0CI = "rZFTHgoqNtJVjUgBv5jzF2z79Uu41";
		const _longestArgumentTermLengthYqdFajt = () => { return _returnValueUR6N0CI };
		const _helperjZ3FY0V = {
			"longestOptionTermLength": _longestOptionTermLengthT0KJdEv,
		"longestSubcommandTermLength": _longestSubcommandTermLengthvQLdSp,
		"longestArgumentTermLength": _longestArgumentTermLengthYqdFajt
	}
		const _returnValuerRtNoEZ = await _HelpBixh7gh.padWidth(_cmdrMV7rDb, _helperjZ3FY0V)
	});

	it('test for Help', async () => {
		const _Help0DcdiO = new Help()
		const __argsDescriptionnwZxJly = {
		
	}
		const __argsL91Z5d5 = {
		
	}
		const _cmdb47Soii = {
			"_argsDescription": __argsDescriptionnwZxJly,
		"_args": __argsL91Z5d5
	}
		const _returnValueZJuXZA3 = await _Help0DcdiO.visibleArguments(_cmdb47Soii)
		const _descriptioneTSDtnc = "O7kEyQr2vS1EJWpS5GJy7BYB8IHvNOvQwydgYNuOzUOS9a5sWNNDxsQ";
		const _cmdgTVzeje = {
			"description": _descriptioneTSDtnc
	}
		const _returnValueA9bgDMP = await _Help0DcdiO.commandDescription(_cmdgTVzeje)
		const _cmdVDHTIDd = null;
		const _returnValueuKBrWxu = -2.9676765159978027;
		const _visibleArgumentsVKP6clk = () => { return _returnValueuKBrWxu };
		const _returnValueujvHxHc = 5.467872993694165;
		const _argumentTermq9r09K3 = () => { return _returnValueujvHxHc };
		const _helperp6OGeKX = {
			"visibleArguments": _visibleArgumentsVKP6clk,
		"argumentTerm": _argumentTermq9r09K3
	}
		const _returnValueJIJKwZk = await _Help0DcdiO.longestArgumentTermLength(_cmdVDHTIDd, _helperp6OGeKX)
		const _cmd2or8UM = null;
		const _sortSubcommandscZxFlz = "JdRx1Hd539auPNQvNQNDiMpIUVN7FmVmYen9ttD3zqWaYAAKTph3TUGYvxHSCo2tqyB9UpkMMxer5ojxYOy9ExBU8OTx5gcEWt";
		const _returnValueqmHFAoo = true;
		const _subcommandTermPTeNtU = () => { return _returnValueqmHFAoo };
		const _helperR79oZIJ = {
			"sortSubcommands": _sortSubcommandscZxFlz,
		"subcommandTerm": _subcommandTermPTeNtU
	}
		const _returnValuei3XAjNb = await _Help0DcdiO.longestSubcommandTermLength(_cmd2or8UM, _helperR79oZIJ)
	});

	it('test for Help', async () => {
		const _HelpTNFuElr = new Help()
		const _cmdzHcRrWk = "tBUh1vR5Tj4GTx3Jsr5B63i9TyWcKXi5Be7uMwHUuP8hYpaLjg54GRSa0iL9T";
		const _sortSubcommandsRENqaQP = {
		
	}
		const _returnValueVAk4RZ7 = false;
		const _subcommandTermUz82Jw2 = () => { return _returnValueVAk4RZ7 };
		const _helperd3hYmUz = {
			"sortSubcommands": _sortSubcommandsRENqaQP,
		"subcommandTerm": _subcommandTermUz82Jw2
	}
		const _returnValueRGJCKQj = await _HelpTNFuElr.longestSubcommandTermLength(_cmdzHcRrWk, _helperd3hYmUz)
		const _returnValueyVO5G30 = "pGF9TCEVHllbEI8iJHz7zJRTzioBD6cBCtZyP3dFbDaCQ47WgSPm";
		const _returnValuekVfH5b = () => { return _returnValueyVO5G30 };
		const _descriptionyk1XkEz = () => { return _returnValuekVfH5b };
		const _cmdb4r4AHr = {
			"description": _descriptionyk1XkEz
	}
		const _returnValueVycYf2N = await _HelpTNFuElr.subcommandDescription(_cmdb4r4AHr)
		const __nameaeKM5WN = {
		
	}
		const __aliasesjY2Jh5B = {
		
	}
		const _parentIWnKsMD = true;
		const _returnValueAZ0IdV = 6.490780636401507;
		const _usagedUoq46D = () => { return _returnValueAZ0IdV };
		const _cmdRjtBSde = {
			"_name": __nameaeKM5WN,
		"_aliases": __aliasesjY2Jh5B,
		"parent": _parentIWnKsMD,
		"usage": _usagedUoq46D
	}
		const _returnValuep8T45sb = await _HelpTNFuElr.commandUsage(_cmdRjtBSde)
		const _cmdOr06D1x = "1tzcg42HA9C1dmdDJXyoG6sIlPs1ncJ3piUO51seckdKKtJXMJP";
		const _returnValuegMIkYF = null;
		const _longestOptionTermLengthqb9WVrR = () => { return _returnValuegMIkYF };
		const _returnValuenEuf97D = undefined;
		const _longestSubcommandTermLengthrpkhPDq = () => { return _returnValuenEuf97D };
		const _returnValueiS7Vhvu = undefined;
		const _longestArgumentTermLengthkqWPxC9 = () => { return _returnValueiS7Vhvu };
		const _helperiL43UDa = {
			"longestOptionTermLength": _longestOptionTermLengthqb9WVrR,
		"longestSubcommandTermLength": _longestSubcommandTermLengthrpkhPDq,
		"longestArgumentTermLength": _longestArgumentTermLengthkqWPxC9
	}
		const _returnValuehGinAzw = await _HelpTNFuElr.padWidth(_cmdOr06D1x, _helperiL43UDa)
	});

	it('test for Help', async () => {
		const _HelpvtkyLC7 = new Help()
		const _argumentjtbmhzP = "86xDMag5II7NrE4JPwTaqWXge8Xkj2rm4KYS";
		const _returnValueOdwoxhY = await _HelpvtkyLC7.argumentDescription(_argumentjtbmhzP)
		const __argsDescriptionEYm7BUc = {
		
	}
		const __argsFUHOWiP = {
		
	}
		const _cmdreRmCn1 = {
			"_argsDescription": __argsDescriptionEYm7BUc,
		"_args": __argsFUHOWiP
	}
		const _returnValueXeb4hLr = await _HelpvtkyLC7.visibleArguments(_cmdreRmCn1)
		const __argsDescriptionkox5ouX = {
		
	}
		const __argstJpiLMv = {
		
	}
		const _cmdHV7ssM4 = {
			"_argsDescription": __argsDescriptionkox5ouX,
		"_args": __argstJpiLMv
	}
		const _returnValueYbViaP = await _HelpvtkyLC7.visibleArguments(_cmdHV7ssM4)
		const _cmdJyBGHBi = false;
		const _sortSubcommandsXN0HCdR = true;
		const _returnValueHKM2Mbz = null;
		const _subcommandTermPG2hdqK = () => { return _returnValueHKM2Mbz };
		const _helperl3S3s2a = {
			"sortSubcommands": _sortSubcommandsXN0HCdR,
		"subcommandTerm": _subcommandTermPG2hdqK
	}
		const _returnValueyuP83nK = await _HelpvtkyLC7.formatHelp(_cmdJyBGHBi, _helperl3S3s2a)
		const __argsDescriptionM4XRP0s = {
		
	}
		const _arrayValuexF6OLIQ = undefined;
		const _arrayValuem9QLFOb = [_arrayValuexF6OLIQ]
		const _arrayValueVBtUy9b = true;
		const __argsd7G4gJ6 = [_arrayValuem9QLFOb, _arrayValueVBtUy9b]
		const _cmduLqhWs = {
			"_argsDescription": __argsDescriptionM4XRP0s,
		"_args": __argsd7G4gJ6
	}
		const _returnValueGd9NyV = await _HelpvtkyLC7.visibleArguments(_cmduLqhWs)
	});

	it('test for Help', async () => {
		const _HelpEzIcip7 = new Help()
		const _returnValueGICXzHW = true;
		const _matchp4oLaRz = () => { return _returnValueGICXzHW };
		const _arrayValueZjoaF4O = true;
		const _arrayValuelIjQLWh = "x5VufeqJ81pgUNRqK";
		const _arrayValueu8urMiS = 3.0793233700893357;
		const _returnValueJztVNEe = [_arrayValueZjoaF4O, _arrayValuelIjQLWh, _arrayValueu8urMiS]
		const _substrEEBgv9o = () => { return _returnValueJztVNEe };
		const _str44UDI2 = {
			"match": _matchp4oLaRz,
		"substr": _substrEEBgv9o
	}
		const _widthNadpjDr = -8.850038001582824;
		const _indentbjpJU40 = 8.923810934549216;
		const _minColumnWidthgxYczmb = -7.425888219606112;
		const _returnValueVsslKcJ = await _HelpEzIcip7.wrap(_str44UDI2, _widthNadpjDr, _indentbjpJU40, _minColumnWidthgxYczmb)
		const _returnValue3STpeI = undefined;
		const _descriptionQxaS4Hr = () => { return _returnValue3STpeI };
		const _cmdLg0gtBI = {
			"description": _descriptionQxaS4Hr
	}
		const _returnValueu0NE2A8 = await _HelpEzIcip7.subcommandDescription(_cmdLg0gtBI)
		const _cmdE81lSqS = true;
		const _arrayValuewwusCqv = null;
		const _arrayValuepbCwPwk = "iE6Da5GmlJ4FxIfD1BTDFUbXB9FcWwqOsMCORNrHGFTpBmFeanvf9KW4";
		const _arrayValueaBOWDyZ = null;
		const _helperB2I918 = [_arrayValuewwusCqv, _arrayValuepbCwPwk, _arrayValueaBOWDyZ]
		const _returnValueJQRSf62 = await _HelpEzIcip7.formatHelp(_cmdE81lSqS, _helperB2I918)
		const _cmdtWjf6p3 = {
		
	}
		const _returnValueLqUtqHB = null;
		const _returnValuelZd0y7 = () => { return _returnValueLqUtqHB };
		const _longestOptionTermLengthYWswlZN = () => { return _returnValuelZd0y7 };
		const _returnValueJLg9k1Q = "NCYqniElnXJVrG8yXgJt95EwY24tzH";
		const _longestSubcommandTermLengthmHQuY76 = () => { return _returnValueJLg9k1Q };
		const _returnValueiBz5jFL = false;
		const _longestArgumentTermLengthfsepOg8 = () => { return _returnValueiBz5jFL };
		const _helperbncBIcs = {
			"longestOptionTermLength": _longestOptionTermLengthYWswlZN,
		"longestSubcommandTermLength": _longestSubcommandTermLengthmHQuY76,
		"longestArgumentTermLength": _longestArgumentTermLengthfsepOg8
	}
		const _returnValueUxQLJi = await _HelpEzIcip7.padWidth(_cmdtWjf6p3, _helperbncBIcs)
	});

	it('test for Help', async () => {
		const _HelpySavteP = new Help()
		const _returnValueqBVghBV = null;
		const _descriptionyXNb8Qh = () => { return _returnValueqBVghBV };
		const _cmdkKpWG9G = {
			"description": _descriptionyXNb8Qh
	}
		const _returnValueaZ1KC7N = await _HelpySavteP.commandDescription(_cmdkKpWG9G)
		const _returnValueC5Giit = "u3DQjysnJ3r9WPKdRHK9B2ewAUhtBW";
		const _returnValueyohea4V = () => { return _returnValueC5Giit };
		const _nameqiBLZM3 = () => { return _returnValueyohea4V };
		const _argumentFCG3YDI = {
			"name": _nameqiBLZM3
	}
		const _returnValuevOcroME = await _HelpySavteP.argumentTerm(_argumentFCG3YDI)
		const _cmdq9kFc0E = 7.795548305150934;
		const _sortSubcommandsrjhy3C = []
		const _subcommandTermHaadrIQ = -7.039546221541154;
		const _helperyFwa4AY = {
			"sortSubcommands": _sortSubcommandsrjhy3C,
		"subcommandTerm": _subcommandTermHaadrIQ
	}
		const _returnValuegkkt8RV = await _HelpySavteP.formatHelp(_cmdq9kFc0E, _helperyFwa4AY)
		const __argsDescriptionti284HP = {
		
	}
		const __argsaUOV1l = {
		
	}
		const _cmdLddoD9U = {
			"_argsDescription": __argsDescriptionti284HP,
		"_args": __argsaUOV1l
	}
		const _returnValueOkrGjKk = await _HelpySavteP.visibleArguments(_cmdLddoD9U)
	});

	it('test for Help', async () => {
		const _HelpgGd6B3x = new Help()
		const _arrayValueODoX8yP = undefined;
		const _arrayValueROyl2V9 = true;
		const _arrayValueO6tol08 = [_arrayValueROyl2V9]
		const _arrayValuePybYoSK = undefined;
		const _returnValueYmAgQi = [_arrayValueODoX8yP, _arrayValueO6tol08, _arrayValuePybYoSK]
		const _descriptionzBKlbka = () => { return _returnValueYmAgQi };
		const _cmdCXzPch9 = {
			"description": _descriptionzBKlbka
	}
		const _returnValueTlyAa2c = await _HelpgGd6B3x.commandDescription(_cmdCXzPch9)
		const _arrayValueOTeQcGa = false;
		const _arrayValueA3jGs0r = "ed09GYD71xSgPni47IrcdKL453i7tkJ5sEvhQ71X80IPFhDNyMZpfjAO57YB63VNtH8CN94FDKaZySuokrPDzZLC";
		const _arrayValueaiNV7Hl = false;
		const _returnValueZqqchso = undefined;
		const _arrayValueKy070lu = () => { return _returnValueZqqchso };
		const _flagsqT8F0m = [_arrayValueOTeQcGa, _arrayValueA3jGs0r, _arrayValueaiNV7Hl, _arrayValueKy070lu]
		const _optionxjm46qn = {
			"flags": _flagsqT8F0m
	}
		const _returnValueCVH4Jhr = await _HelpgGd6B3x.optionTerm(_optionxjm46qn)
		const _argChoicest3eatTB = {
		
	}
		const _negatezKJjvUH = 2.9750227370924485;
		const _defaultValuehPE1ieg = undefined;
		const _arrayValueSTaViHn = 6.903491423804873;
		const _defaultValueDescriptionRc2ceRV = [_arrayValueSTaViHn]
		const _envVarNoCGfZx = undefined;
		const _descriptionNpKDs8o = {
		
	}
		const _optionPTYmJsY = {
			"argChoices": _argChoicest3eatTB,
		"negate": _negatezKJjvUH,
		"defaultValue": _defaultValuehPE1ieg,
		"defaultValueDescription": _defaultValueDescriptionRc2ceRV,
		"envVar": _envVarNoCGfZx,
		"description": _descriptionNpKDs8o
	}
		const _returnValueIntSApd = await _HelpgGd6B3x.optionDescription(_optionPTYmJsY)
		const _cmdXmZVxRn = 3.9412737006654535;
		const _longestOptionTermLengthwew4LmZ = -9.56092456363895;
		const _returnValuezUuVKmN = true;
		const _longestSubcommandTermLengthm0O5JGt = () => { return _returnValuezUuVKmN };
		const _returnValuen4TV4hY = -5.901163726497963;
		const _longestArgumentTermLengthkiMHaa0 = () => { return _returnValuen4TV4hY };
		const _helperElmDKRo = {
			"longestOptionTermLength": _longestOptionTermLengthwew4LmZ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthm0O5JGt,
		"longestArgumentTermLength": _longestArgumentTermLengthkiMHaa0
	}
		const _returnValue6Yx54t = await _HelpgGd6B3x.padWidth(_cmdXmZVxRn, _helperElmDKRo)
	});

	it('test for Help', async () => {
		const _HelpupKszh7 = new Help()
		const __nameUJF1NSg = {
		
	}
		const __aliasesp9H78qF = {
		
	}
		const _parentoDoY9gb = {
		
	}
		const _returnValueN4YAg1C = null;
		const _usagefReJX0 = () => { return _returnValueN4YAg1C };
		const _cmdTmYcwyy = {
			"_name": __nameUJF1NSg,
		"_aliases": __aliasesp9H78qF,
		"parent": _parentoDoY9gb,
		"usage": _usagefReJX0
	}
		const _returnValueEZDh9iJ = await _HelpupKszh7.commandUsage(_cmdTmYcwyy)
		const _cmduw6u7bL = undefined;
		const _sortSubcommandsw799Qwv = true;
		const _subcommandTermcbuenm = 0.4323060963795111;
		const _helperoW4qhsd = {
			"sortSubcommands": _sortSubcommandsw799Qwv,
		"subcommandTerm": _subcommandTermcbuenm
	}
		const _returnValueXEatJTK = await _HelpupKszh7.formatHelp(_cmduw6u7bL, _helperoW4qhsd)
		const __nameoTIZJyC = {
		
	}
		const __aliasesJskFPLW = {
		
	}
		const _parentIpzr2Q = {
		
	}
		const _returnValueyqHjvhV = "yHASuxD8wcBG4oRWtBdDJ80rPyJLqSSVa1o7qOdMXGriI8JPqJTLMz7WYZStP9grgrEHguyFSEBOUkRGqhhVkO";
		const _usagetwa90nx = () => { return _returnValueyqHjvhV };
		const _cmdJLbjppQ = {
			"_name": __nameoTIZJyC,
		"_aliases": __aliasesJskFPLW,
		"parent": _parentIpzr2Q,
		"usage": _usagetwa90nx
	}
		const _returnValueiUxe6T0 = await _HelpupKszh7.commandUsage(_cmdJLbjppQ)
		const __namevOvVJCb = {
		
	}
		const __aliasesNdpMpY = {
		
	}
		const _parenteYabY4 = {
		
	}
		const _arrayValuecwTDnu8 = null;
		const _arrayValueZKUAdvr = undefined;
		const _arrayValueIajzKyS = undefined;
		const _arrayValueor1RZA = [_arrayValueIajzKyS]
		const _arrayValuea83YTJw = "Mr08G79khdsfjGtIV5CdeaudSaAsFKzB3Nfter2N8B4magrxUfKri3gme887bWD9doWSlqpnyj691wDQgcCqV4";
		const _usageJ3aHKD = [_arrayValuecwTDnu8, _arrayValueZKUAdvr, _arrayValueor1RZA, _arrayValuea83YTJw]
		const _cmdQJY0hWb = {
			"_name": __namevOvVJCb,
		"_aliases": __aliasesNdpMpY,
		"parent": _parenteYabY4,
		"usage": _usageJ3aHKD
	}
		const _returnValueLYZJWaj = await _HelpupKszh7.commandUsage(_cmdQJY0hWb)
		const _cmdLiWTkPx = 3.6314712869241905;
		const _returnValueDVUcxZR = null;
		const _visibleOptionsb7cUN5b = () => { return _returnValueDVUcxZR };
		const _returnValueGp4YKw1 = {
		
	}
		const _optionTermg5t4CkN = () => { return _returnValueGp4YKw1 };
		const _helperglJJ0ax = {
			"visibleOptions": _visibleOptionsb7cUN5b,
		"optionTerm": _optionTermg5t4CkN
	}
		const _returnValue1nxZSE = await _HelpupKszh7.longestOptionTermLength(_cmdLiWTkPx, _helperglJJ0ax)
	});

	it('test for Help', async () => {
		const _HelpcE8yj7J = new Help()
		const _commandsxOZayK = {
		
	}
		const _returnValueHwgpa7Y = "o5sXdpP5MletsMs1Q3XwdQPpLXbHvVYP";
		const __hasImplicitHelpCommandnaUe4fv = () => { return _returnValueHwgpa7Y };
		const __helpCommandnameAndArgswA37MdE = {
		
	}
		const _createCommandIInHm9j = false;
		const __helpCommandDescriptiongbqezjA = {
		
	}
		const _cmdD7eOWMX = {
			"commands": _commandsxOZayK,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandnaUe4fv,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgswA37MdE,
		"createCommand": _createCommandIInHm9j,
		"_helpCommandDescription": __helpCommandDescriptiongbqezjA
	}
		const _returnValuerrns92S = await _HelpcE8yj7J.visibleCommands(_cmdD7eOWMX)
		const _cmdFoLZCw9 = true;
		const _returnValueMwRzllB = undefined;
		const _visibleOptionsh44IZPb = () => { return _returnValueMwRzllB };
		const _returnValueoAndhZz = undefined;
		const _returnValueeV5OOUe = () => { return _returnValueoAndhZz };
		const _optionTermkTdTeOd = () => { return _returnValueeV5OOUe };
		const _helperc3nIXNm = {
			"visibleOptions": _visibleOptionsh44IZPb,
		"optionTerm": _optionTermkTdTeOd
	}
		const _returnValuezdm2AyV = await _HelpcE8yj7J.longestOptionTermLength(_cmdFoLZCw9, _helperc3nIXNm)
		const _arrayValuelQrJTEL = {
		
	}
		const _cmdsJUESB = [_arrayValuelQrJTEL]
		const _visibleArgumentsqEKbEiT = "YBSIFf8RSewLTyYOBhXFNtyGd6Srj3f558qEhDxdOlgyYMe4nANMzq7UKM6QRqyCaf";
		const _returnValueJEn9Gm = {
		
	}
		const _argumentTermfyO18vE = () => { return _returnValueJEn9Gm };
		const _helperua9SpL = {
			"visibleArguments": _visibleArgumentsqEKbEiT,
		"argumentTerm": _argumentTermfyO18vE
	}
		const _returnValueT4Hlc1u = await _HelpcE8yj7J.longestArgumentTermLength(_cmdsJUESB, _helperua9SpL)
	});

	it('test for Help', async () => {
		const _HelppGWKEW6 = new Help()
		const _returnValuenboWyAf = undefined;
		const _matchE5tIRJz = () => { return _returnValuenboWyAf };
		const _arrayValueQyxW0MD = undefined;
		const _arrayValueClNvwHH = 5.7864860156972036;
		const _arrayValueCEi5w7 = [_arrayValueClNvwHH]
		const _returnValuepLUN6f2 = [_arrayValueQyxW0MD, _arrayValueCEi5w7]
		const _substrEHFhLvg = () => { return _returnValuepLUN6f2 };
		const _strhqaXiSp = {
			"match": _matchE5tIRJz,
		"substr": _substrEHFhLvg
	}
		const _widthE575Owp = 6.423169439590019;
		const _indentxg5NYlA = -5.048646603324876;
		const _minColumnWidthUdM3Xki = -1.2910306175149717;
		const _returnValueqZZYLIS = await _HelppGWKEW6.wrap(_strhqaXiSp, _widthE575Owp, _indentxg5NYlA, _minColumnWidthUdM3Xki)
		const _returnValuelMG6HRe = {
		
	}
		const _descriptionvYGOiUf = () => { return _returnValuelMG6HRe };
		const _cmdux9bzBa = {
			"description": _descriptionvYGOiUf
	}
		const _returnValueq5J3NGe = await _HelppGWKEW6.commandDescription(_cmdux9bzBa)
		const _returnValueX1MQcHI = -0.8208144803984165;
		const _descriptionwJBvQyT = () => { return _returnValueX1MQcHI };
		const _cmdJZ65N7d = {
			"description": _descriptionwJBvQyT
	}
		const _returnValuel7UH9Y9 = await _HelppGWKEW6.subcommandDescription(_cmdJZ65N7d)
	});

	it('test for Help', async () => {
		const _HelpeNJZoqo = new Help()
		const _argChoicesR7bTYEk = {
		
	}
		const _negategRWAoZk = -9.938772860426228;
		const _defaultValuexbn3SV = undefined;
		const _defaultValueDescriptiono10Dlpg = []
		const _envVarKG4PINd = -2.397532390009803;
		const _returnValueIEgWnBq = 3.684036289477337;
		const _descriptionceG9q39 = () => { return _returnValueIEgWnBq };
		const _optionEdmGnkT = {
			"argChoices": _argChoicesR7bTYEk,
		"negate": _negategRWAoZk,
		"defaultValue": _defaultValuexbn3SV,
		"defaultValueDescription": _defaultValueDescriptiono10Dlpg,
		"envVar": _envVarKG4PINd,
		"description": _descriptionceG9q39
	}
		const _returnValuexgI4uBL = await _HelpeNJZoqo.optionDescription(_optionEdmGnkT)
		const __argsl6WlqmB = {
		
	}
		const __namee01EAtS = -9.349406726369146;
		const __aliasesZOjq1Sb = {
		
	}
		const _optionsiRNO1ym = {
		
	}
		const _cmdWrRgulK = {
			"_args": __argsl6WlqmB,
		"_name": __namee01EAtS,
		"_aliases": __aliasesZOjq1Sb,
		"options": _optionsiRNO1ym
	}
		const _returnValueMn8iZV = await _HelpeNJZoqo.subcommandTerm(_cmdWrRgulK)
		const _returnValuep7aXEDX = undefined;
		const _descriptionTE5Tulj = () => { return _returnValuep7aXEDX };
		const _cmdnxDTbaN = {
			"description": _descriptionTE5Tulj
	}
		const _returnValuerfw1pGU = await _HelpeNJZoqo.subcommandDescription(_cmdnxDTbaN)
		const _optiongov7U8u = []
		const _returnValueB8pVXYj = await _HelpeNJZoqo.optionTerm(_optiongov7U8u)
	});

	it('test for Help', async () => {
		const _HelpmAN7zMk = new Help()
		const __name9AkL5d = {
		
	}
		const __aliasesA2sWNL9 = "HLyykgChvMZDoKczdH7iuTrnxnRDyb6pdIAtUOY7J9";
		const _parentGA5osOy = {
		
	}
		const _returnValuegSTIjeI = false;
		const _usageNMOK5k9 = () => { return _returnValuegSTIjeI };
		const _cmdR3oXs1 = {
			"_name": __name9AkL5d,
		"_aliases": __aliasesA2sWNL9,
		"parent": _parentGA5osOy,
		"usage": _usageNMOK5k9
	}
		const _returnValueIzSEzN5 = await _HelpmAN7zMk.commandUsage(_cmdR3oXs1)
		const _returnValuemCgHdzj = false;
		const _descriptionNOFhqn5 = () => { return _returnValuemCgHdzj };
		const _cmdpiqijwW = {
			"description": _descriptionNOFhqn5
	}
		const _returnValueitKrtJ = await _HelpmAN7zMk.commandDescription(_cmdpiqijwW)
		const _argChoicesPGWy9Sg = {
		
	}
		const _negatepYejwB = undefined;
		const _defaultValuevbXC2Ve = undefined;
		const _defaultValueDescriptionMWfwffp = -2.190697091209847;
		const _envVarZVSQbCs = undefined;
		const _arrayValueE2vqE7x = -9.921188456954399;
		const _arrayValueWakIERd = "WBrb3h9M48oJDQPHSdYZkHIdH21uJzgR90JOtQ5LgXVY";
		const _descriptionyAqJUFd = [_arrayValueE2vqE7x, _arrayValueWakIERd]
		const _optionqGcQOzK = {
			"argChoices": _argChoicesPGWy9Sg,
		"negate": _negatepYejwB,
		"defaultValue": _defaultValuevbXC2Ve,
		"defaultValueDescription": _defaultValueDescriptionMWfwffp,
		"envVar": _envVarZVSQbCs,
		"description": _descriptionyAqJUFd
	}
		const _returnValueqWgEvcB = await _HelpmAN7zMk.optionDescription(_optionqGcQOzK)
		const _commandsLTIcre1 = {
		
	}
		const _arrayValueY5Mbb6i = undefined;
		const _arrayValuedzXojoo = false;
		const __hasImplicitHelpCommandZ79Ijxi = [_arrayValueY5Mbb6i, _arrayValuedzXojoo]
		const __helpCommandnameAndArgsRvlDYeq = {
		
	}
		const _returnValueC6SadSX = undefined;
		const _createCommandMFZpFBj = () => { return _returnValueC6SadSX };
		const _arrayValueiSOdCx = true;
		const __helpCommandDescriptionb3JYdln = [_arrayValueiSOdCx]
		const _cmdj5pFmBV = {
			"commands": _commandsLTIcre1,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandZ79Ijxi,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsRvlDYeq,
		"createCommand": _createCommandMFZpFBj,
		"_helpCommandDescription": __helpCommandDescriptionb3JYdln
	}
		const _returnValuey6xSNSY = await _HelpmAN7zMk.visibleCommands(_cmdj5pFmBV)
		const _returnValuedZ9MZoQ = "52rpGIitUTw7Rv1EhoVhHBB36wRlO5rY27IZwtEZfNh11yRwI";
		const _cmdHtIE4AM = () => { return _returnValuedZ9MZoQ };
		const _returnValuemApdMjc = undefined;
		const _returnValueq4EWoOY = () => { return _returnValuemApdMjc };
		const _visibleOptionstdmJWCr = () => { return _returnValueq4EWoOY };
		const _returnValueQbfU7ED = "lwt4SgnwHxxG3TQaQzyhSuw5G";
		const _optionTermcrLKjWl = () => { return _returnValueQbfU7ED };
		const _helperxiKOWp = {
			"visibleOptions": _visibleOptionstdmJWCr,
		"optionTerm": _optionTermcrLKjWl
	}
		const _returnValueTNUFOdb = await _HelpmAN7zMk.longestOptionTermLength(_cmdHtIE4AM, _helperxiKOWp)
	});

	it('test for Help', async () => {
		const _HelpzFQPoJE = new Help()
		const _returnValueCQ3CKz = undefined;
		const _matchbjT1BEE = () => { return _returnValueCQ3CKz };
		const _returnValueO8ZKdCu = {
		
	}
		const _returnValuequnQWQ8 = () => { return _returnValueO8ZKdCu };
		const _substrZRnNbx = () => { return _returnValuequnQWQ8 };
		const _strPgG0frq = {
			"match": _matchbjT1BEE,
		"substr": _substrZRnNbx
	}
		const _widthNLMFT6 = 7.458150759321384;
		const _indentxUvRohm = 9.85554237077277;
		const _minColumnWidthbhbo6zI = 1.2832971617319302;
		const _returnValuediF4bm = await _HelpzFQPoJE.wrap(_strPgG0frq, _widthNLMFT6, _indentxUvRohm, _minColumnWidthbhbo6zI)
		const _argChoicesdy0khAQ = {
		
	}
		const _negateKGbY79k = undefined;
		const _defaultValueD5Vp2YA = undefined;
		const _defaultValueDescriptionYP6DDzx = true;
		const _envVarr6bjdK6 = true;
		const _descriptionDB9GcCG = false;
		const _optionoG9mucp = {
			"argChoices": _argChoicesdy0khAQ,
		"negate": _negateKGbY79k,
		"defaultValue": _defaultValueD5Vp2YA,
		"defaultValueDescription": _defaultValueDescriptionYP6DDzx,
		"envVar": _envVarr6bjdK6,
		"description": _descriptionDB9GcCG
	}
		const _returnValueHlDp7w = await _HelpzFQPoJE.optionDescription(_optionoG9mucp)
	});

	it('test for Help', async () => {
		const _HelpLE5U04 = new Help()
		const _cmdXtdMhfE = {
		
	}
		const _arrayValueBZOe0EJ = null;
		const _arrayValueoIvemYg = 1.5959180371598265;
		const _returnValueLXZrTvt = [_arrayValueBZOe0EJ, _arrayValueoIvemYg]
		const _longestOptionTermLengthi3ovDVU = () => { return _returnValueLXZrTvt };
		const _returnValuehigyAIC = undefined;
		const _longestSubcommandTermLengthOiMLU5D = () => { return _returnValuehigyAIC };
		const _returnValueok82SVj = null;
		const _longestArgumentTermLengthdQlxrsd = () => { return _returnValueok82SVj };
		const _helperfAoGHNq = {
			"longestOptionTermLength": _longestOptionTermLengthi3ovDVU,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOiMLU5D,
		"longestArgumentTermLength": _longestArgumentTermLengthdQlxrsd
	}
		const _returnValueIr7btTd = await _HelpLE5U04.padWidth(_cmdXtdMhfE, _helperfAoGHNq)
		const _returnValuerssgr5 = undefined;
		const _nameCmOlZe = () => { return _returnValuerssgr5 };
		const _argumentNjpSj1W = {
			"name": _nameCmOlZe
	}
		const _returnValuefBQw2NA = await _HelpLE5U04.argumentTerm(_argumentNjpSj1W)
		const _arrayValueeqD678L = true;
		const _arrayValueXV7QERG = -5.223127076448701;
		const _arrayValueYVfOvPV = 6.9424812213722085;
		const _arrayValueTPWiAu9 = 7.9724755117694315;
		const _arrayValuesz8Sw59 = [_arrayValueXV7QERG, _arrayValueYVfOvPV, _arrayValueTPWiAu9]
		const _arrayValuesHJ5yt = -0.22394367024668682;
		const _arrayValuePshdBrb = 8.64306823401352;
		const _arrayValueUMRYPL = null;
		const _arrayValueh1KASfM = [_arrayValuesz8Sw59, _arrayValuesHJ5yt, _arrayValuePshdBrb, _arrayValueUMRYPL]
		const _arrayValuez52vKtR = null;
		const _arrayValuesJVWDxw = [_arrayValueh1KASfM, _arrayValuez52vKtR]
		const _returnValueTHkB6qd = null;
		const _arrayValuetNYENfp = () => { return _returnValueTHkB6qd };
		const _argChoicesg1LuWTM = [_arrayValueeqD678L, _arrayValuesJVWDxw, _arrayValuetNYENfp]
		const _defaultValuezf0PRn3 = undefined;
		const _defaultValueDescriptionPSHOd5b = false;
		const _descriptionR0rZtbL = null;
		const _argumentdNbZdyb = {
			"argChoices": _argChoicesg1LuWTM,
		"defaultValue": _defaultValuezf0PRn3,
		"defaultValueDescription": _defaultValueDescriptionPSHOd5b,
		"description": _descriptionR0rZtbL
	}
		const _returnValuePlHr2MG = await _HelpLE5U04.argumentDescription(_argumentdNbZdyb)
		const _cmdhGHadIf = null;
		const _returnValueurNVrle = 5.976571616074164;
		const _returnValueBkFBBlP = () => { return _returnValueurNVrle };
		const _visibleArgumentsFMGazTq = () => { return _returnValueBkFBBlP };
		const _arrayValueXQ9aaIy = null;
		const _arrayValueIK2fOV6 = 5.6828440940021245;
		const _arrayValueU3EUd4p = [_arrayValueXQ9aaIy, _arrayValueIK2fOV6]
		const _returnValuelCOUqAt = [_arrayValueU3EUd4p]
		const _returnValueZvkci8F = () => { return _returnValuelCOUqAt };
		const _argumentTermodo0BbQ = () => { return _returnValueZvkci8F };
		const _helperzK4I8O = {
			"visibleArguments": _visibleArgumentsFMGazTq,
		"argumentTerm": _argumentTermodo0BbQ
	}
		const _returnValueRoPvcYz = await _HelpLE5U04.longestArgumentTermLength(_cmdhGHadIf, _helperzK4I8O)
	});

	it('test for Help', async () => {
		const _HelpoNAxXwH = new Help()
		const _returnValuenFFFyi = {
		
	}
		const _returnValuezzd5UGT = () => { return _returnValuenFFFyi };
		const _descriptionVAsR94K = () => { return _returnValuezzd5UGT };
		const _cmdohKQg8n = {
			"description": _descriptionVAsR94K
	}
		const _returnValuebQMcwuO = await _HelpoNAxXwH.subcommandDescription(_cmdohKQg8n)
		const _arrayValuedqkNyMf = -8.807902366166882;
		const _argChoicesKnbYM6t = [_arrayValuedqkNyMf]
		const _defaultValuekSPmGm0 = "dHsLWAWAIIBpj1bHiwkgQDGVdOHULcA630uHcCwvHgF4RTSUoPSIyp5P";
		const _defaultValueDescriptionuR5ELe5 = undefined;
		const _descriptionFOEGndW = "8Sd7nuSzI11j8BCwlIFm1Pn26av3NJi45dMLDIVnptiUEX5eYlvv1jyY";
		const _argumentiGc9Grw = {
			"argChoices": _argChoicesKnbYM6t,
		"defaultValue": _defaultValuekSPmGm0,
		"defaultValueDescription": _defaultValueDescriptionuR5ELe5,
		"description": _descriptionFOEGndW
	}
		const _returnValueK3iF2Cg = await _HelpoNAxXwH.argumentDescription(_argumentiGc9Grw)
	});

	it('test for Help', async () => {
		const _HelpKjFm6VX = new Help()
		const _cmds9bywr3 = "y3sCOII";
		const _returnValueZTON3Il = false;
		const _longestOptionTermLengthfpHZN03 = () => { return _returnValueZTON3Il };
		const _returnValueWXB4cMs = false;
		const _longestSubcommandTermLengthUiWDVDb = () => { return _returnValueWXB4cMs };
		const _returnValueR0nRz2p = undefined;
		const _longestArgumentTermLengthVPq2eCq = () => { return _returnValueR0nRz2p };
		const _helpergRMcARp = {
			"longestOptionTermLength": _longestOptionTermLengthfpHZN03,
		"longestSubcommandTermLength": _longestSubcommandTermLengthUiWDVDb,
		"longestArgumentTermLength": _longestArgumentTermLengthVPq2eCq
	}
		const _returnValueMS8b82J = await _HelpKjFm6VX.padWidth(_cmds9bywr3, _helpergRMcARp)
		const _arrayValuexIcp4Pr = {
		
	}
		const _arrayValueZ8qaYHV = {
		
	}
		const _optionsx6Gz4J = [_arrayValuexIcp4Pr, _arrayValueZ8qaYHV]
		const __hasHelpOptionYgYJ1RR = false;
		const __helpShortFlagSd2lTN = null;
		const __findOptionLYoaUbu = "3dgvvTJq2EznAT0ReCILdK0lGskcOoRxOoH2Mb6JJ2FsNE6oQDcBAftrOd7H1QKEKkdViAaOgOhwu1PCjk2an86c";
		const __helpLongFlag2SD0GV = "Jco";
		const _returnValueyCU1qW = false;
		const _returnValuexZzWJTO = () => { return _returnValueyCU1qW };
		const _createOptionwAbk0DR = () => { return _returnValuexZzWJTO };
		const __helpDescriptionhWl7iHj = "VrC12BkFVu7yszCvpYhl3nvL9Gtzrc4lar7CAotjsTNsSFLzdw7zwNEpkkG5lr78uZIUlNloAlq945cK9";
		const __helpFlagsLCa0vzm = true;
		const _cmdv0aufH = {
			"options": _optionsx6Gz4J,
		"_hasHelpOption": __hasHelpOptionYgYJ1RR,
		"_helpShortFlag": __helpShortFlagSd2lTN,
		"_findOption": __findOptionLYoaUbu,
		"_helpLongFlag": __helpLongFlag2SD0GV,
		"createOption": _createOptionwAbk0DR,
		"_helpDescription": __helpDescriptionhWl7iHj,
		"_helpFlags": __helpFlagsLCa0vzm
	}
		const _returnValueUr7tCn = await _HelpKjFm6VX.visibleOptions(_cmdv0aufH)
	});

	it('test for Help', async () => {
		const _Helpd8DHFyn = new Help()
		const _arrayValuevwUdY71 = "iZqSrVtUVmEzV";
		const _returnValueNBHQNX5 = null;
		const _arrayValuem2euUZ0 = () => { return _returnValueNBHQNX5 };
		const _optionsbGbczDR = [_arrayValuevwUdY71, _arrayValuem2euUZ0]
		const _arrayValueIiGGxxx = false;
		const _arrayValueFalPJWs = {
		
	}
		const _returnValuev9lLLU = [_arrayValueIiGGxxx, _arrayValueFalPJWs]
		const __hasHelpOptionJyBy77Q = () => { return _returnValuev9lLLU };
		const _arrayValueCzlO0U3 = undefined;
		const _arrayValueYoDwSm3 = false;
		const _arrayValueCWefGPM = undefined;
		const _arrayValuevJSuJlZ = null;
		const __helpShortFlagep2GwIM = [_arrayValueCzlO0U3, _arrayValueYoDwSm3, _arrayValueCWefGPM, _arrayValuevJSuJlZ]
		const _returnValuet1Msvps = null;
		const __findOptionWwEN5GM = () => { return _returnValuet1Msvps };
		const __helpLongFlagHWfksz = false;
		const _createOptiongdaE7aL = undefined;
		const __helpDescriptionzpL3YnA = "tJrxpl21BbyNUQqS";
		const _arrayValuehv7N7sx = -0.56845165380739;
		const _arrayValueABCec9M = false;
		const _arrayValueiNFNLSz = "P11q8zsiY2VmsDe5h0q6ATQtceG1glA1bkGY8JL6OEA";
		const __helpFlagsVvqLnzH = [_arrayValuehv7N7sx, _arrayValueABCec9M, _arrayValueiNFNLSz]
		const _cmdVHJvcAM = {
			"options": _optionsbGbczDR,
		"_hasHelpOption": __hasHelpOptionJyBy77Q,
		"_helpShortFlag": __helpShortFlagep2GwIM,
		"_findOption": __findOptionWwEN5GM,
		"_helpLongFlag": __helpLongFlagHWfksz,
		"createOption": _createOptiongdaE7aL,
		"_helpDescription": __helpDescriptionzpL3YnA,
		"_helpFlags": __helpFlagsVvqLnzH
	}
		const _returnValuesUh1sz2 = await _Helpd8DHFyn.visibleOptions(_cmdVHJvcAM)
		const _argChoicesNk3UlIr = {
		
	}
		const _negatevp2je8u = undefined;
		const _defaultValuehGos3Uk = undefined;
		const _defaultValueDescriptionBHmhb54 = "Y17svh2";
		const _envVaruj9Q3uw = undefined;
		const _descriptioncdUUpWG = true;
		const _optionjXPXEMk = {
			"argChoices": _argChoicesNk3UlIr,
		"negate": _negatevp2je8u,
		"defaultValue": _defaultValuehGos3Uk,
		"defaultValueDescription": _defaultValueDescriptionBHmhb54,
		"envVar": _envVaruj9Q3uw,
		"description": _descriptioncdUUpWG
	}
		const _returnValuef9I7dI2 = await _Helpd8DHFyn.optionDescription(_optionjXPXEMk)
		const _returnValueOjupF6 = null;
		const _returnValueu0ynYmt = () => { return _returnValueOjupF6 };
		const _nameXIGXhCc = () => { return _returnValueu0ynYmt };
		const _argumentXVV9Dg = {
			"name": _nameXIGXhCc
	}
		const _returnValueDYKYzo8 = await _Helpd8DHFyn.argumentTerm(_argumentXVV9Dg)
		const _argChoicesslAc1bD = {
		
	}
		const _defaultValuex5c12qv = true;
		const _defaultValueDescriptionZeaWzbK = "UzFsfklhgmR6lfs1k9M5jCczU1";
		const _descriptionMr5WgBF = -0.11050311094273901;
		const _argumentttTed1 = {
			"argChoices": _argChoicesslAc1bD,
		"defaultValue": _defaultValuex5c12qv,
		"defaultValueDescription": _defaultValueDescriptionZeaWzbK,
		"description": _descriptionMr5WgBF
	}
		const _returnValueLcjjth = await _Helpd8DHFyn.argumentDescription(_argumentttTed1)
	});
})