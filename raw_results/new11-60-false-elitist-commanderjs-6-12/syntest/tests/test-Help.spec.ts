export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpyfBMgxt = new Help()
		const _arrayValueeWCfTAP = true;
		const _arrayValue8oywrb = {
		
	}
		const _arrayValueGcfHN8f = undefined;
		const _arrayValuefHc1jwt = -5.225592375181516;
		const _arrayValueFaYYMs7 = [_arrayValue8oywrb, _arrayValueGcfHN8f, _arrayValuefHc1jwt]
		const _arrayValueVYzv2TF = "WhFAWQNBkDbyPkvZTravJ93yvTbSYsjYf1";
		const _returnValueZfwKaa5 = [_arrayValueeWCfTAP, _arrayValueFaYYMs7, _arrayValueVYzv2TF]
		const _descriptionJXAHwNK = () => { return _returnValueZfwKaa5 };
		const _cmdM7zBq6R = {
			"description": _descriptionJXAHwNK
	}
		const _returnValuezo5mzgq = await _HelpyfBMgxt.commandDescription(_cmdM7zBq6R)
		const _argumentNDzrG8H = true;
		const _returnValuerAByNxU = await _HelpyfBMgxt.argumentTerm(_argumentNDzrG8H)
		const _cmdIP4vCR = {
		
	}
		const _returnValueh9ky1th = true;
		const _visibleOptionsAdRLvBG = () => { return _returnValueh9ky1th };
		const _returnValuevnAXvjC = "P9Nk9MpoMyU6KCIOmvp63ncZx2lrzczBhYD7ugmmIhEaDRANMukL1I87nt1RBj6aXAFi7KJx2r0g2iK3GhPyOYcLqng5v3";
		const _optionTermHJNpU27 = () => { return _returnValuevnAXvjC };
		const _helpereQFXXJG = {
			"visibleOptions": _visibleOptionsAdRLvBG,
		"optionTerm": _optionTermHJNpU27
	}
		const _returnValueSCKanhR = await _HelpyfBMgxt.longestOptionTermLength(_cmdIP4vCR, _helpereQFXXJG)
	});

	it('test for Help', async () => {
		const _HelpTc2s2uP = new Help()
		const _returnValuev1oFJdP = -1.5774893475260292;
		const _name7eR5ZN = () => { return _returnValuev1oFJdP };
		const _argumentsfQ9Fr = {
			"name": _name7eR5ZN
	}
		const _returnValueNRzb8n4 = await _HelpTc2s2uP.argumentTerm(_argumentsfQ9Fr)
		const _arrayValuecz3VkwY = false;
		const _arrayValuemBngbW7 = "FUUMc1OPkUaT2cvynEbTKnGIgvL7Kq51GDOPqXQ4O8o0PvPFeL";
		const _arrayValueIi8zr1t = 9.679863914825077;
		const _arrayValuevSq5Bos = [_arrayValuecz3VkwY, _arrayValuemBngbW7, _arrayValueIi8zr1t]
		const _arrayValuer1o5A8g = "SPhGiPL4cb564us0ny9fhAhkuGhdxmPPCFVcLzTXfYKcKhnCspAia5";
		const _arrayValuek90GnJR = null;
		const _arrayValueHoNELhI = true;
		const _arrayValueLFB2zIM = [_arrayValuevSq5Bos, _arrayValuer1o5A8g, _arrayValuek90GnJR, _arrayValueHoNELhI]
		const _arrayValueSAdMPp = "WvBAPgQyUqzlKAbFFplPxu87Dn";
		const _arrayValueu5600mW = undefined;
		const _arrayValuePaYipPj = "rgLYcsYa9Lw5kntNPyoZIDblWmsqiyEem6OVM1fB3vSJWNv6LPhEgYeGQFuomQ4rvURQGBP8";
		const _flagskz9fNHC = [_arrayValueLFB2zIM, _arrayValueSAdMPp, _arrayValueu5600mW, _arrayValuePaYipPj]
		const _optionPBhDPam = {
			"flags": _flagskz9fNHC
	}
		const _returnValueSxU77Q7 = await _HelpTc2s2uP.optionTerm(_optionPBhDPam)
		const _arrayValueZMRGwBc = undefined;
		const _arrayValuenQUScf8 = null;
		const _cmdauyg5VN = [_arrayValueZMRGwBc, _arrayValuenQUScf8]
		const _sortSubcommandsn2Q7E5Y = "6vUP68pPCWWB85n6UbfQ7p7tMFTernAc1xW4JeBlNKgieeEJrYfibTbPxzre6p1bD2Eif4rMUIp4OHmJqFX0OvylcZajUyqzn";
		const _returnValueCGbq0ZA = null;
		const _subcommandTermdOEvVMk = () => { return _returnValueCGbq0ZA };
		const _helperJNOxDil = {
			"sortSubcommands": _sortSubcommandsn2Q7E5Y,
		"subcommandTerm": _subcommandTermdOEvVMk
	}
		const _returnValueF6SpoRv = await _HelpTc2s2uP.formatHelp(_cmdauyg5VN, _helperJNOxDil)
		const _cmdtR4uCD0 = "VmY8BvB5F1mF0o81bi5vbKRG25KETwiXuPg2viTzM2nfnglon9IQxjuYlxpDpiQvqpatWqxzXjat";
		const _returnValueWCzym8O = null;
		const _visibleArgumentsn0SSxtL = () => { return _returnValueWCzym8O };
		const _returnValueFg2rV0r = false;
		const _argumentTermLQ6ee9J = () => { return _returnValueFg2rV0r };
		const _helperRouQpBg = {
			"visibleArguments": _visibleArgumentsn0SSxtL,
		"argumentTerm": _argumentTermLQ6ee9J
	}
		const _returnValuePAS8oNE = await _HelpTc2s2uP.longestArgumentTermLength(_cmdtR4uCD0, _helperRouQpBg)
	});

	it('test for Help', async () => {
		const _Helpy4n6921 = new Help()
		const _cmdzHMiXlY = true;
		const _returnValueXGFmZHl = false;
		const _visibleOptionsy7ZCPlk = () => { return _returnValueXGFmZHl };
		const _arrayValueQOtloo = 3.226024995925732;
		const _returnValueZWxwvw = [_arrayValueQOtloo]
		const _optionTermlUBX5Go = () => { return _returnValueZWxwvw };
		const _helperDcwrung = {
			"visibleOptions": _visibleOptionsy7ZCPlk,
		"optionTerm": _optionTermlUBX5Go
	}
		const _returnValuexxQYEoQ = await _Helpy4n6921.longestOptionTermLength(_cmdzHMiXlY, _helperDcwrung)
		const _returnValueJEmMwwi = -4.3582760621786285;
		const _nameBiFWQjd = () => { return _returnValueJEmMwwi };
		const _argument8S336K = {
			"name": _nameBiFWQjd
	}
		const _returnValuezrmzmL = await _Helpy4n6921.argumentTerm(_argument8S336K)
		const _arrayValueY6uvYoZ = -1.5474671347554185;
		const _arrayValueGtlb5EW = [_arrayValueY6uvYoZ]
		const _arrayValueO9l7Q83 = "7PnXaCAYlOvZQ9g2K2XK2N";
		const _arrayValueUzAlKxB = false;
		const _arrayValueUG9xicL = [_arrayValueUzAlKxB]
		const _arrayValuery08HDG = [_arrayValueO9l7Q83, _arrayValueUG9xicL]
		const _arrayValue2uqqsm = "SgaA6CRJlNOOhrDr66yakpeaBhfALXtfqU6SQiL9SeT9KsEGlSf4wdRruSgiI8Mw44MM0xNE6ULUI7S";
		const _cmdGvvcAAr = [_arrayValueGtlb5EW, _arrayValuery08HDG, _arrayValue2uqqsm]
		const _returnValueYOe7i1B = await _Helpy4n6921.subcommandDescription(_cmdGvvcAAr)
	});

	it('test for Help', async () => {
		const _HelpPBg8Zbr = new Help()
		const _returnValuev3FM6x = 8.999670150702812;
		const _matchiW08ATS = () => { return _returnValuev3FM6x };
		const _substrra8DO4Y = true;
		const _strHyMOLeL = {
			"match": _matchiW08ATS,
		"substr": _substrra8DO4Y
	}
		const _widthbYEl1hM = -7.9020330903979925;
		const _indentfMZrGut = -9.412598748440924;
		const _minColumnWidthAfjGykG = 8.976305746870835;
		const _returnValuef7TXdab = await _HelpPBg8Zbr.wrap(_strHyMOLeL, _widthbYEl1hM, _indentfMZrGut, _minColumnWidthAfjGykG)
		const _returnValueI7kVO4R = false;
		const _descriptionNXHNUgD = () => { return _returnValueI7kVO4R };
		const _cmdVINTrkT = {
			"description": _descriptionNXHNUgD
	}
		const _returnValuePFY0FxR = await _HelpPBg8Zbr.commandDescription(_cmdVINTrkT)
		const _optionsxpoPZ3 = true;
		const __hasHelpOptionJLNriP5 = -3.462553202681181;
		const __helpShortFlagOwmrZdx = -6.658482936812382;
		const __findOptionjLFts3J = true;
		const __helpLongFlagRNmxoup = undefined;
		const _returnValuebQQnxCA = {
		
	}
		const _createOptionjbnCiuH = () => { return _returnValuebQQnxCA };
		const __helpDescriptionglsNO4N = "8jb2UW33aXCw24fLbQI2U4GVHyoPH97Up1fPXyApYzAOq3efa6QAKfJrSHHqcrhTfaaxAFl74yTRlLJaDHtqgr";
		const __helpFlagsmXTfVWV = null;
		const _cmdGDqeePy = {
			"options": _optionsxpoPZ3,
		"_hasHelpOption": __hasHelpOptionJLNriP5,
		"_helpShortFlag": __helpShortFlagOwmrZdx,
		"_findOption": __findOptionjLFts3J,
		"_helpLongFlag": __helpLongFlagRNmxoup,
		"createOption": _createOptionjbnCiuH,
		"_helpDescription": __helpDescriptionglsNO4N,
		"_helpFlags": __helpFlagsmXTfVWV
	}
		const _returnValueAOREVyx = await _HelpPBg8Zbr.visibleOptions(_cmdGDqeePy)
	});

	it('test for Help', async () => {
		const _Helpp1Dibm = new Help()
		const __argsheWYGri = {
		
	}
		const __nameY1Ldfj = -8.778927766887172;
		const __aliasesOWjSF1U = {
		
	}
		const _optionsHYCYUZY = {
		
	}
		const _cmdslSyExE = {
			"_args": __argsheWYGri,
		"_name": __nameY1Ldfj,
		"_aliases": __aliasesOWjSF1U,
		"options": _optionsHYCYUZY
	}
		const _returnValuecmU4jKr = await _Helpp1Dibm.subcommandTerm(_cmdslSyExE)
		const _returnValueDtXpqU = undefined;
		const _descriptionU8STEfc = () => { return _returnValueDtXpqU };
		const _cmdwvCyb6f = {
			"description": _descriptionU8STEfc
	}
		const _returnValueAjHbG6c = await _Helpp1Dibm.commandDescription(_cmdwvCyb6f)
	});

	it('test for Help', async () => {
		const _HelpG0H4AX3 = new Help()
		const _cmdly7FesO = 1.514051534204528;
		const _returnValuehJgBp5l = false;
		const _helperqw3raku = () => { return _returnValuehJgBp5l };
		const _returnValueWuIxKi6 = await _HelpG0H4AX3.longestSubcommandTermLength(_cmdly7FesO, _helperqw3raku)
		const _commandsbALb3M = {
		
	}
		const _returnValuefYn7La4 = undefined;
		const _returnValueqzpmU01 = () => { return _returnValuefYn7La4 };
		const __hasImplicitHelpCommanda8DSedb = () => { return _returnValueqzpmU01 };
		const __helpCommandnameAndArgszH4qab = {
		
	}
		const _returnValueDsKGIy = undefined;
		const _createCommandlFwQeIn = () => { return _returnValueDsKGIy };
		const __helpCommandDescriptionQ6WGjFt = null;
		const _cmdyTQfnL2 = {
			"commands": _commandsbALb3M,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommanda8DSedb,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgszH4qab,
		"createCommand": _createCommandlFwQeIn,
		"_helpCommandDescription": __helpCommandDescriptionQ6WGjFt
	}
		const _returnValueusnV47E = await _HelpG0H4AX3.visibleCommands(_cmdyTQfnL2)
		const _cmdbALqfzY = []
		const _returnValueuhPdjB4 = null;
		const _visibleArgumentsKT3leum = () => { return _returnValueuhPdjB4 };
		const _returnValueKhMJRS = false;
		const _argumentTermgUW5DCb = () => { return _returnValueKhMJRS };
		const _helperx5M7qij = {
			"visibleArguments": _visibleArgumentsKT3leum,
		"argumentTerm": _argumentTermgUW5DCb
	}
		const _returnValuenUYO7CC = await _HelpG0H4AX3.longestArgumentTermLength(_cmdbALqfzY, _helperx5M7qij)
		const _flagsPtv07Mb = true;
		const _optionTVxkgKv = {
			"flags": _flagsPtv07Mb
	}
		const _returnValueAzEQzTC = await _HelpG0H4AX3.optionTerm(_optionTVxkgKv)
		const _argChoicess3T8Ncq = {
		
	}
		const _defaultValueoIICXJ = undefined;
		const _returnValueQQxvoLL = null;
		const _arrayValueDW0acM1 = () => { return _returnValueQQxvoLL };
		const _defaultValueDescriptionytayfth = [_arrayValueDW0acM1]
		const _descriptionRdfuSqM = undefined;
		const _argumentjHad4ar = {
			"argChoices": _argChoicess3T8Ncq,
		"defaultValue": _defaultValueoIICXJ,
		"defaultValueDescription": _defaultValueDescriptionytayfth,
		"description": _descriptionRdfuSqM
	}
		const _returnValuewEYNXbu = await _HelpG0H4AX3.argumentDescription(_argumentjHad4ar)
	});

	it('test for Help', async () => {
		const _Helpi2gYuqJ = new Help()
		const _returnValueS0YmATg = {
		
	}
		const _descriptionLwHjvKd = () => { return _returnValueS0YmATg };
		const _cmdxqpIbfe = {
			"description": _descriptionLwHjvKd
	}
		const _returnValuewTNW68 = await _Helpi2gYuqJ.subcommandDescription(_cmdxqpIbfe)
		const __nameGjQ1bzS = {
		
	}
		const __aliasesiafnZXL = {
		
	}
		const _parentlakdfy = {
		
	}
		const _arrayValueorOORP = "K5nLdaVBYRX7";
		const _arrayValueG8xxvmp = null;
		const _arrayValueJgSD9VL = -3.0070061943330746;
		const _returnValueCYOJgDL = [_arrayValueorOORP, _arrayValueG8xxvmp, _arrayValueJgSD9VL]
		const _usageGj9MBy7 = () => { return _returnValueCYOJgDL };
		const _cmdcjSTqa0 = {
			"_name": __nameGjQ1bzS,
		"_aliases": __aliasesiafnZXL,
		"parent": _parentlakdfy,
		"usage": _usageGj9MBy7
	}
		const _returnValueLA0bw7O = await _Helpi2gYuqJ.commandUsage(_cmdcjSTqa0)
		const _optionsCFLT4tP = {
		
	}
		const __hasHelpOptionqHJUksz = null;
		const __helpShortFlagFnhhmqr = "bG3XX96TkxHO1ERgTDQYKB4E8ffpWPw6qagPcKhueEtoLlYUAUsqN72MR";
		const _returnValueBFPugUw = -4.613659364690149;
		const __findOption2TA5ts = () => { return _returnValueBFPugUw };
		const __helpLongFlagBvChGNY = "Giq9EFLlgOsvweUNyw0huzylV9PMAbXhzIg5xaUJQGWzxmP9VTaNuP2SLGZxdEpO8Id3IOnLlXYjWVUKn";
		const _returnValueHlrBMSx = false;
		const _createOptionAXhTbs6 = () => { return _returnValueHlrBMSx };
		const __helpDescriptionbLBuL8s = true;
		const __helpFlagsAwEEgGv = true;
		const _cmdTkbY01 = {
			"options": _optionsCFLT4tP,
		"_hasHelpOption": __hasHelpOptionqHJUksz,
		"_helpShortFlag": __helpShortFlagFnhhmqr,
		"_findOption": __findOption2TA5ts,
		"_helpLongFlag": __helpLongFlagBvChGNY,
		"createOption": _createOptionAXhTbs6,
		"_helpDescription": __helpDescriptionbLBuL8s,
		"_helpFlags": __helpFlagsAwEEgGv
	}
		const _returnValueYzJljum = await _Helpi2gYuqJ.visibleOptions(_cmdTkbY01)
		const _cmdYTIkREv = 5.536881492520413;
		const _returnValuef85btUw = null;
		const _longestOptionTermLengthnXaWZox = () => { return _returnValuef85btUw };
		const _returnValuewM8zerr = {
		
	}
		const _longestSubcommandTermLengthL2gmwBh = () => { return _returnValuewM8zerr };
		const _returnValueDmBEDM8 = 9.093498637262336;
		const _longestArgumentTermLength6DG0zS = () => { return _returnValueDmBEDM8 };
		const _helpercxC64mu = {
			"longestOptionTermLength": _longestOptionTermLengthnXaWZox,
		"longestSubcommandTermLength": _longestSubcommandTermLengthL2gmwBh,
		"longestArgumentTermLength": _longestArgumentTermLength6DG0zS
	}
		const _returnValuepNdijEu = await _Helpi2gYuqJ.padWidth(_cmdYTIkREv, _helpercxC64mu)
	});

	it('test for Help', async () => {
		const _Helpm7x9vtc = new Help()
		const __argsDescriptionE6D9dW = {
		
	}
		const __argsqijeZBe = {
		
	}
		const _cmdWT3EYis = {
			"_argsDescription": __argsDescriptionE6D9dW,
		"_args": __argsqijeZBe
	}
		const _returnValuenXBWtBd = await _Helpm7x9vtc.visibleArguments(_cmdWT3EYis)
		const _returnValuehAGLED2 = null;
		const _descriptionKoVBYQ8 = () => { return _returnValuehAGLED2 };
		const _cmduVrs6im = {
			"description": _descriptionKoVBYQ8
	}
		const _returnValueBY4RvzA = await _Helpm7x9vtc.commandDescription(_cmduVrs6im)
		const _arrayValue6IFofb = {
		
	}
		const _returnValuegHmVBYi = "t3rHGcwbawDoVKzeDrHkNV7o5wuvU2FP5YXv8bFQrtPvsoC8S7NE5XK6041BiB6sp5B5YkCIaHccLgmlOx4Q3Q5F";
		const _arrayValueMVSxqKE = () => { return _returnValuegHmVBYi };
		const _returnValuezp8ckoD = [_arrayValue6IFofb, _arrayValueMVSxqKE]
		const _returnValueBdyFocv = () => { return _returnValuezp8ckoD };
		const _matchJgQZ1qt = () => { return _returnValueBdyFocv };
		const _returnValueD2qWIUf = false;
		const _substrVMGy01l = () => { return _returnValueD2qWIUf };
		const _strXpS96D = {
			"match": _matchJgQZ1qt,
		"substr": _substrVMGy01l
	}
		const _widthcDpkmKY = -3.2735284071726767;
		const _indentFpkaGEL = -7.126566843515494;
		const _arrayValueBJlk4U = undefined;
		const _arrayValueXUVmkQ = null;
		const _minColumnWidthx6LMsZm = [_arrayValueBJlk4U, _arrayValueXUVmkQ]
		const _returnValuec8NWLja = await _Helpm7x9vtc.wrap(_strXpS96D, _widthcDpkmKY, _indentFpkaGEL, _minColumnWidthx6LMsZm)
	});

	it('test for Help', async () => {
		const _HelpVYPenwL = new Help()
		const _argChoicesm7QZfYN = "zq7vpBAiO916z3e3JmS1G6flu1WEw9gBPDJ8uWqEh8yQzRxWxTW7TFeiw8YEN";
		const _defaultValuebYFj3aU = undefined;
		const _defaultValueDescriptionT4t2vmp = true;
		const _descriptionZknVSh6 = "7iHKWFKaGX2v8Nf6bUmYHEBfkVgw6Yp";
		const _argumentd7HaoGw = {
			"argChoices": _argChoicesm7QZfYN,
		"defaultValue": _defaultValuebYFj3aU,
		"defaultValueDescription": _defaultValueDescriptionT4t2vmp,
		"description": _descriptionZknVSh6
	}
		const _returnValueeIyyxK9 = await _HelpVYPenwL.argumentDescription(_argumentd7HaoGw)
		const _cmdhn4okZ3 = "Lxsovqp6wPCnqXZqjeXlel6rGbyAdCjAqd2Rds4FNujTiT6ytYHX9t";
		const _returnValuewHUFpQ6 = []
		const _returnValuePgY8NGw = () => { return _returnValuewHUFpQ6 };
		const _visibleOptionsmH6NtM = () => { return _returnValuePgY8NGw };
		const _returnValuenzvIhY = -5.837697238639278;
		const _optionTermKyRKEPz = () => { return _returnValuenzvIhY };
		const _helperD9hAv8A = {
			"visibleOptions": _visibleOptionsmH6NtM,
		"optionTerm": _optionTermKyRKEPz
	}
		const _returnValueOmQpBc6 = await _HelpVYPenwL.longestOptionTermLength(_cmdhn4okZ3, _helperD9hAv8A)
	});

	it('test for Help', async () => {
		const _HelpcKqutpE = new Help()
		const _commandsCtogO6J = "sjzFqTYLXkKlqfr5PdUY6YT7aRKIxmA8a20jwcS4Mo7Ga43I4s2voq";
		const __hasImplicitHelpCommandLNRe1oj = []
		const __helpCommandnameAndArgsBLqLON7 = {
		
	}
		const _returnValueD3ZlMEf = "XuYdi3XS5RzesSq5PyTOz3Hf1Erz8F1uw0V1fpf6BUWQgPpMuOtKSAssV5I";
		const _createCommandclYv8V3 = () => { return _returnValueD3ZlMEf };
		const _returnValueXHIQWck = undefined;
		const __helpCommandDescriptionArYNtI3 = () => { return _returnValueXHIQWck };
		const _cmdm0cEDMf = {
			"commands": _commandsCtogO6J,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandLNRe1oj,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBLqLON7,
		"createCommand": _createCommandclYv8V3,
		"_helpCommandDescription": __helpCommandDescriptionArYNtI3
	}
		const _returnValueiKyyUa4 = await _HelpcKqutpE.visibleCommands(_cmdm0cEDMf)
		const __argsDescriptionH7ZKdiN = {
		
	}
		const __argsW6HPsrY = {
		
	}
		const _cmdu8RUcu = {
			"_argsDescription": __argsDescriptionH7ZKdiN,
		"_args": __argsW6HPsrY
	}
		const _returnValueYdCX8gc = await _HelpcKqutpE.visibleArguments(_cmdu8RUcu)
		const _cmdMARNoiy = 6.887065607073794;
		const _sortSubcommandsyoVEVz = null;
		const _returnValue6JxYrg = {
		
	}
		const _subcommandTermHIStiy = () => { return _returnValue6JxYrg };
		const _helperm7bkCzV = {
			"sortSubcommands": _sortSubcommandsyoVEVz,
		"subcommandTerm": _subcommandTermHIStiy
	}
		const _returnValueGs9QLIK = await _HelpcKqutpE.longestSubcommandTermLength(_cmdMARNoiy, _helperm7bkCzV)
		const _cmdgmYATRl = false;
		const _returnValueU5h44j5 = null;
		const _longestOptionTermLengthi0jfeo = () => { return _returnValueU5h44j5 };
		const _arrayValuef4vwuhU = 7.4349577975825625;
		const _arrayValueYpfywA5 = {
		
	}
		const _arrayValuegzgjQmq = "shRA8r6K1WHgQ6LNA7oDndfRUkK1xhLsRj";
		const _arrayValuegE1riZC = 5.430727206458641;
		const _arrayValueH2tVTk = [_arrayValuegzgjQmq, _arrayValuegE1riZC]
		const _returnValuebof4AH = [_arrayValuef4vwuhU, _arrayValueYpfywA5, _arrayValueH2tVTk]
		const _longestSubcommandTermLengtheBI1KEp = () => { return _returnValuebof4AH };
		const _returnValueyKU6u7H = true;
		const _longestArgumentTermLengthsnKbrUy = () => { return _returnValueyKU6u7H };
		const _helperTb7oM1v = {
			"longestOptionTermLength": _longestOptionTermLengthi0jfeo,
		"longestSubcommandTermLength": _longestSubcommandTermLengtheBI1KEp,
		"longestArgumentTermLength": _longestArgumentTermLengthsnKbrUy
	}
		const _returnValueNgGmKoo = await _HelpcKqutpE.padWidth(_cmdgmYATRl, _helperTb7oM1v)
	});

	it('test for Help', async () => {
		const _HelpMj1mlin = new Help()
		const _argChoicesGwCfZ6n = {
		
	}
		const _negatef9a8z4s = true;
		const _defaultValueskKeUl8 = undefined;
		const _returnValueCBYVsT = true;
		const _defaultValueDescriptionr3sTJol = () => { return _returnValueCBYVsT };
		const _envVargNwhdL4 = undefined;
		const _descriptionTlxgHJY = null;
		const _optionzQSlyF = {
			"argChoices": _argChoicesGwCfZ6n,
		"negate": _negatef9a8z4s,
		"defaultValue": _defaultValueskKeUl8,
		"defaultValueDescription": _defaultValueDescriptionr3sTJol,
		"envVar": _envVargNwhdL4,
		"description": _descriptionTlxgHJY
	}
		const _returnValueR6FhvJ = await _HelpMj1mlin.optionDescription(_optionzQSlyF)
	});

	it('test for Help', async () => {
		const _HelpS3cecKP = new Help()
		const _arrayValueJJdijuP = undefined;
		const _arrayValueHbwb6I6 = -4.901053392881549;
		const _argumenttEdaolR = [_arrayValueJJdijuP, _arrayValueHbwb6I6]
		const _returnValueOlTJcAM = await _HelpS3cecKP.argumentDescription(_argumenttEdaolR)
		const _cmdR7zNfii = undefined;
		const _arrayValuenin78qx = null;
		const _sortSubcommandsCweSWN4 = [_arrayValuenin78qx]
		const _returnValueaUUGOtX = "JimBiDW26YJ15ek6fvwW";
		const _subcommandTerml36Iz4y = () => { return _returnValueaUUGOtX };
		const _helperFDDxc3M = {
			"sortSubcommands": _sortSubcommandsCweSWN4,
		"subcommandTerm": _subcommandTerml36Iz4y
	}
		const _returnValuefJNdlxK = await _HelpS3cecKP.longestSubcommandTermLength(_cmdR7zNfii, _helperFDDxc3M)
		const _optionsj0WF16p = {
		
	}
		const __hasHelpOptionJkElOWd = true;
		const __helpShortFlagy9qBM4m = {
		
	}
		const __findOptionITLKuFA = "4tsWR0cLlFMCYEm8xsG9DNPTu15MukDxOFsoZfDwRI1IV9g6tStrLjmngkdOr2xUuF3Tz040Zp5";
		const _arrayValuetNpL2Ar = undefined;
		const _returnValuexMsx07 = []
		const _arrayValueYb3jSxa = () => { return _returnValuexMsx07 };
		const __helpLongFlagBNPYjcz = [_arrayValuetNpL2Ar, _arrayValueYb3jSxa]
		const _arrayValueSW2RFND = null;
		const _returnValuet8UX2FF = [_arrayValueSW2RFND]
		const _createOptionDuswTiP = () => { return _returnValuet8UX2FF };
		const _arrayValueSK1t8s = undefined;
		const _returnValuecNrtDp = [_arrayValueSK1t8s]
		const __helpDescriptionGYbUYU5 = () => { return _returnValuecNrtDp };
		const __helpFlagsT8QXDFv = -3.7532726731835364;
		const _cmdvYY4p68 = {
			"options": _optionsj0WF16p,
		"_hasHelpOption": __hasHelpOptionJkElOWd,
		"_helpShortFlag": __helpShortFlagy9qBM4m,
		"_findOption": __findOptionITLKuFA,
		"_helpLongFlag": __helpLongFlagBNPYjcz,
		"createOption": _createOptionDuswTiP,
		"_helpDescription": __helpDescriptionGYbUYU5,
		"_helpFlags": __helpFlagsT8QXDFv
	}
		const _returnValueE4wdlmu = await _HelpS3cecKP.visibleOptions(_cmdvYY4p68)
	});

	it('test for Help', async () => {
		const _HelpXcD86XV = new Help()
		const _argChoicesr2jNXar = undefined;
		const _returnValue5jpSo1 = null;
		const _negateRC7jrT = () => { return _returnValue5jpSo1 };
		const _defaultValueGLpe9L8 = undefined;
		const _defaultValueDescriptionFpm7oL = "kKdBUTUn52lu1fgSF7UCFmof7AEoSJlYKL9UqRxSv8sCs7nPqFaEQwBH71wlRw48czI";
		const _envVarrOmmSJq = undefined;
		const _descriptionX6yqpmG = "tGDCajXgJvHfV56kqmIFhO69IRnAlxw";
		const _optionu3NsDVM = {
			"argChoices": _argChoicesr2jNXar,
		"negate": _negateRC7jrT,
		"defaultValue": _defaultValueGLpe9L8,
		"defaultValueDescription": _defaultValueDescriptionFpm7oL,
		"envVar": _envVarrOmmSJq,
		"description": _descriptionX6yqpmG
	}
		const _returnValueBnV6g3K = await _HelpXcD86XV.optionDescription(_optionu3NsDVM)
		const _returnValueLASHUl2 = undefined;
		const _cmdfnWi3nQ = () => { return _returnValueLASHUl2 };
		const _arrayValuedIMb6Xy = []
		const _arrayValueNYl4xHH = null;
		const _arrayValueovMU5Zb = {
		
	}
		const _returnValuesxA1IkR = [_arrayValuedIMb6Xy, _arrayValueNYl4xHH, _arrayValueovMU5Zb]
		const _longestOptionTermLengthxlWtrUT = () => { return _returnValuesxA1IkR };
		const _returnValuevzg0gq4 = undefined;
		const _longestSubcommandTermLengthHaAsElN = () => { return _returnValuevzg0gq4 };
		const _arrayValuexMZxST0 = undefined;
		const _arrayValueGf3RuAg = -4.941637449280316;
		const _returnValuesa4PMb2 = [_arrayValuexMZxST0, _arrayValueGf3RuAg]
		const _longestArgumentTermLengthequ66eY = () => { return _returnValuesa4PMb2 };
		const _helperorFrP3d = {
			"longestOptionTermLength": _longestOptionTermLengthxlWtrUT,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHaAsElN,
		"longestArgumentTermLength": _longestArgumentTermLengthequ66eY
	}
		const _returnValuePkzcTOJ = await _HelpXcD86XV.padWidth(_cmdfnWi3nQ, _helperorFrP3d)
	});

	it('test for Help', async () => {
		const _HelpSKUYQw = new Help()
		const _arrayValuel8jcXm4 = null;
		const _arrayValuemYIJCy3 = -5.029833885507022;
		const _arrayValuexXUKDEU = "moVdZ4frJpghhYjYKv9TMQXRsXMSkMsMP7EerEX8mY2xQFrkVyAzsyhYL3cDPsFK4ZnoihMNtrGGmCpghy33x5a";
		const _returnValueQqbs0fZ = [_arrayValuel8jcXm4, _arrayValuemYIJCy3, _arrayValuexXUKDEU]
		const _descriptionDUlx9XZ = () => { return _returnValueQqbs0fZ };
		const _cmdjXu0Y0h = {
			"description": _descriptionDUlx9XZ
	}
		const _returnValueLXzvr2N = await _HelpSKUYQw.subcommandDescription(_cmdjXu0Y0h)
		const _returnValueykaHS89 = null;
		const _cmdxmGoygB = () => { return _returnValueykaHS89 };
		const _returnValuew5XBu59 = null;
		const _visibleArgumentsOH98yLW = () => { return _returnValuew5XBu59 };
		const _returnValuefhqYCO6 = -7.8292284791822695;
		const _argumentTermjtVRdjL = () => { return _returnValuefhqYCO6 };
		const _helperXBqh7CD = {
			"visibleArguments": _visibleArgumentsOH98yLW,
		"argumentTerm": _argumentTermjtVRdjL
	}
		const _returnValuehZ1FofY = await _HelpSKUYQw.longestArgumentTermLength(_cmdxmGoygB, _helperXBqh7CD)
		const _cmdulLraga = null;
		const _sortSubcommandsjznoc8Z = undefined;
		const _subcommandTermvdPaVgv = 7.021388029742962;
		const _helperCeEucP6 = {
			"sortSubcommands": _sortSubcommandsjznoc8Z,
		"subcommandTerm": _subcommandTermvdPaVgv
	}
		const _returnValuet9a8ccg = await _HelpSKUYQw.longestSubcommandTermLength(_cmdulLraga, _helperCeEucP6)
		const _cmdvUQXQxp = 0.3885971238159698;
		const _arrayValueSZISUED = "3e2iOvNirAIZhbDrWXk4O";
		const _returnValueu17HXjb = undefined;
		const _arrayValueqDGLHT8 = () => { return _returnValueu17HXjb };
		const _arrayValueMEUvNqr = [_arrayValueSZISUED, _arrayValueqDGLHT8]
		const _arrayValueTJqYhPt = null;
		const _helperRxjjjPR = [_arrayValueMEUvNqr, _arrayValueTJqYhPt]
		const _returnValue3Fhtmt = await _HelpSKUYQw.longestSubcommandTermLength(_cmdvUQXQxp, _helperRxjjjPR)
	});

	it('test for Help', async () => {
		const _HelptTGiayu = new Help()
		const _returnValueuK47p6y = false;
		const _matchH0t0aq = () => { return _returnValueuK47p6y };
		const _returnValuekwGxuQN = "TrW32YmEtFUCrMKZ8";
		const _substrr9UCUNN = () => { return _returnValuekwGxuQN };
		const _strrWCksLJ = {
			"match": _matchH0t0aq,
		"substr": _substrr9UCUNN
	}
		const _widthjoym3V4 = 8.033743353682794;
		const _indentw1IqOwc = 5.164070970907645;
		const _minColumnWidthcxxrhVJ = -3.515908306918776;
		const _returnValueXph82ZH = await _HelptTGiayu.wrap(_strrWCksLJ, _widthjoym3V4, _indentw1IqOwc, _minColumnWidthcxxrhVJ)
		const _cmdQssy6I7 = null;
		const _returnValue2hQXux = await _HelptTGiayu.commandUsage(_cmdQssy6I7)
	});

	it('test for Help', async () => {
		const _HelpzkObV1q = new Help()
		const _returnValueYBeVmdg = -8.412267414302503;
		const _returnValueZJrQBQD = () => { return _returnValueYBeVmdg };
		const _descriptionNC19Wsg = () => { return _returnValueZJrQBQD };
		const _cmdz1rVrtf = {
			"description": _descriptionNC19Wsg
	}
		const _returnValuewJhqG8M = await _HelpzkObV1q.subcommandDescription(_cmdz1rVrtf)
		const _argChoices4bgI4J = {
		
	}
		const _negatekOAH6zL = false;
		const _defaultValueDgItcrT = undefined;
		const _defaultValueDescriptionJDGnfb = {
		
	}
		const _envVareRhuFST = undefined;
		const _arrayValueCtddP08 = undefined;
		const _arrayValueJa89jdl = [_arrayValueCtddP08]
		const _descriptionYDWae6g = [_arrayValueJa89jdl]
		const _optionreAwaV1 = {
			"argChoices": _argChoices4bgI4J,
		"negate": _negatekOAH6zL,
		"defaultValue": _defaultValueDgItcrT,
		"defaultValueDescription": _defaultValueDescriptionJDGnfb,
		"envVar": _envVareRhuFST,
		"description": _descriptionYDWae6g
	}
		const _returnValuebTKSDfZ = await _HelpzkObV1q.optionDescription(_optionreAwaV1)
	});

	it('test for Help', async () => {
		const _HelpF9RV2Kz = new Help()
		const _argChoicesGNLms4x = {
		
	}
		const _arrayValueDr9we7s = undefined;
		const _arrayValueLy5UGN = undefined;
		const _negateci6i54x = [_arrayValueDr9we7s, _arrayValueLy5UGN]
		const _defaultValueliImIz = undefined;
		const _defaultValueDescriptionvxoF1ry = {
		
	}
		const _arrayValueez1Bbbw = undefined;
		const _arrayValueOeF0rAm = {
		
	}
		const _arrayValuer9UPdN2 = {
		
	}
		const _arrayValuestQjRF6 = "pNIdujf4eY26UeFe9hjyHtYkSedwpEp";
		const _arrayValueoRRtV1p = [_arrayValueOeF0rAm, _arrayValuer9UPdN2, _arrayValuestQjRF6]
		const _envVarqM4AXvY = [_arrayValueez1Bbbw, _arrayValueoRRtV1p]
		const _descriptionYlxUCEP = {
		
	}
		const _optionOQS2A6e = {
			"argChoices": _argChoicesGNLms4x,
		"negate": _negateci6i54x,
		"defaultValue": _defaultValueliImIz,
		"defaultValueDescription": _defaultValueDescriptionvxoF1ry,
		"envVar": _envVarqM4AXvY,
		"description": _descriptionYlxUCEP
	}
		const _returnValuek2KQZox = await _HelpF9RV2Kz.optionDescription(_optionOQS2A6e)
		const _flagsnCOlPVy = true;
		const _optionVbBX0JH = {
			"flags": _flagsnCOlPVy
	}
		const _returnValueYgvDBU6 = await _HelpF9RV2Kz.optionTerm(_optionVbBX0JH)
		const _cmdcB5H0J6 = null;
		const _sortSubcommandshXy5KB2 = "qsc61";
		const _arrayValuefyruN0T = null;
		const _subcommandTermGqI1E6z = [_arrayValuefyruN0T]
		const _helperQpad4j = {
			"sortSubcommands": _sortSubcommandshXy5KB2,
		"subcommandTerm": _subcommandTermGqI1E6z
	}
		const _returnValue2zsKOf = await _HelpF9RV2Kz.longestSubcommandTermLength(_cmdcB5H0J6, _helperQpad4j)
		const _cmdgSmu6bP = "wuWfyvBFiSUPiMSy";
		const _returnValuerWPnVvE = await _HelpF9RV2Kz.subcommandTerm(_cmdgSmu6bP)
		const _cmdNIW8WeJ = -9.80893613121225;
		const _returnValuem640sfN = "oufxgERNCcG5EJrw9AGI8USW14ibiLrKPRVGCsgcELOzCXnHrmWET95ag4xinKiLr";
		const _visibleOptionsYWFOEbu = () => { return _returnValuem640sfN };
		const _returnValueWFek0v = "8dqOk435kvk6uidkcsjzPmlzI9l1ZuomGRjimua42zlZAXHcgMz7";
		const _arrayValueVLWxXOI = () => { return _returnValueWFek0v };
		const _arrayValueNMcB2h1 = true;
		const _arrayValueKjnmOqs = "KFPvGaPRtB5yNcahcAY4bNfbpLvAFGBgsCerIXSjakviJaHDPpWLNZNgM9wZ6";
		const _returnValueLxT6u84 = [_arrayValueVLWxXOI, _arrayValueNMcB2h1, _arrayValueKjnmOqs]
		const _optionTermztrS42a = () => { return _returnValueLxT6u84 };
		const _helperLZX4OKL = {
			"visibleOptions": _visibleOptionsYWFOEbu,
		"optionTerm": _optionTermztrS42a
	}
		const _returnValuefY6XVU0 = await _HelpF9RV2Kz.longestOptionTermLength(_cmdNIW8WeJ, _helperLZX4OKL)
	});

	it('test for Help', async () => {
		const _HelpZMPI5Hl = new Help()
		const _arrayValueRkGzTGT = null;
		const _returnValueJLSPAFY = [_arrayValueRkGzTGT]
		const _descriptionWBIObGZ = () => { return _returnValueJLSPAFY };
		const _cmddfJ9YoG = {
			"description": _descriptionWBIObGZ
	}
		const _returnValueDP6ZI4L = await _HelpZMPI5Hl.commandDescription(_cmddfJ9YoG)
		const _arrayValuelkSz0v = undefined;
		const _arrayValueKsnh5Sl = "7NR8JeFJ9rVnT1BP34AL51KePUzlEBT2xQWQfioikTwkAkulF2MJN8BJUsQBCum9MTtbr";
		const _arrayValueZalg11h = [_arrayValueKsnh5Sl]
		const _returnValueYlUnCxR = [_arrayValuelkSz0v, _arrayValueZalg11h]
		const _descriptionrGllKOP = () => { return _returnValueYlUnCxR };
		const _cmdzsk4Xb = {
			"description": _descriptionrGllKOP
	}
		const _returnValueKBlGX4J = await _HelpZMPI5Hl.commandDescription(_cmdzsk4Xb)
		const _returnValueDHnGrx3 = false;
		const _matchdGTDVfe = () => { return _returnValueDHnGrx3 };
		const _arrayValuer8VV9di = true;
		const _arrayValuehzAgf1V = false;
		const _arrayValueD1HlUgN = {
		
	}
		const _arrayValueTy6Fu9r = null;
		const _arrayValueeRAl0JL = [_arrayValuehzAgf1V, _arrayValueD1HlUgN, _arrayValueTy6Fu9r]
		const _arrayValueYU5ades = -5.356498138269929;
		const _returnValuej771Iil = [_arrayValuer8VV9di, _arrayValueeRAl0JL, _arrayValueYU5ades]
		const _substrzBFoMM5 = () => { return _returnValuej771Iil };
		const _strCdqpyf7 = {
			"match": _matchdGTDVfe,
		"substr": _substrzBFoMM5
	}
		const _widthz6IUR3 = -8.189376383771439;
		const _indentjbNufKh = 2.4896576463083893;
		const _minColumnWidthln5IKW2 = 4.055758914438382;
		const _returnValueNBpQG5B = await _HelpZMPI5Hl.wrap(_strCdqpyf7, _widthz6IUR3, _indentjbNufKh, _minColumnWidthln5IKW2)
		const _cmdjIQQZyv = "WafHoRTCj36orjJkzkWhSWF227CuWgUqGucQhMbItCYfbWM2rr9oFmV";
		const _arrayValuenREf4Fw = -0.42420236412809054;
		const _arrayValuevxeTpxo = undefined;
		const _arrayValuei4kogk = [_arrayValuevxeTpxo]
		const _returnValueq7KWlwg = null;
		const _returnValueIInCXRF = () => { return _returnValueq7KWlwg };
		const _arrayValueNfnC7zs = () => { return _returnValueIInCXRF };
		const _arrayValueqtVkKW = [_arrayValueNfnC7zs]
		const _helperBxCulZ3 = [_arrayValuenREf4Fw, _arrayValuei4kogk, _arrayValueqtVkKW]
		const _returnValuelw5H9f4 = await _HelpZMPI5Hl.formatHelp(_cmdjIQQZyv, _helperBxCulZ3)
	});

	it('test for Help', async () => {
		const _Help3UAE0C = new Help()
		const _argChoicesJXDYPFU = undefined;
		const _defaultValuecBdaveF = false;
		const _arrayValuecYRnzAK = null;
		const _arrayValueMsQAFgy = null;
		const _returnValueL9U16vL = -1.1442529254489227;
		const _arrayValuewyaWbLu = () => { return _returnValueL9U16vL };
		const _defaultValueDescriptionOmjPNq1 = [_arrayValuecYRnzAK, _arrayValueMsQAFgy, _arrayValuewyaWbLu]
		const _descriptionUbK2PtS = true;
		const _argumentHV6fdCn = {
			"argChoices": _argChoicesJXDYPFU,
		"defaultValue": _defaultValuecBdaveF,
		"defaultValueDescription": _defaultValueDescriptionOmjPNq1,
		"description": _descriptionUbK2PtS
	}
		const _returnValuekH6Tzk = await _Help3UAE0C.argumentDescription(_argumentHV6fdCn)
		const _argChoicesASEzJj = {
		
	}
		const _defaultValuesze3Pg4 = undefined;
		const _defaultValueDescriptionApMCptR = false;
		const _descriptionBWMG20E = 3.4700722183236206;
		const _argumentQIhFjRT = {
			"argChoices": _argChoicesASEzJj,
		"defaultValue": _defaultValuesze3Pg4,
		"defaultValueDescription": _defaultValueDescriptionApMCptR,
		"description": _descriptionBWMG20E
	}
		const _returnValueUtnY6NV = await _Help3UAE0C.argumentDescription(_argumentQIhFjRT)
	});

	it('test for Help', async () => {
		const _HelpO8nVE9m = new Help()
		const _argChoicescDPi3fm = {
		
	}
		const _negateMSyiyRY = "uObFdjCaAYB5gbvfpCaXLVfA";
		const _defaultValueCjVLok = undefined;
		const _defaultValueDescriptionuhD0LYR = {
		
	}
		const _envVarJFPTtDN = 3.1518096815566405;
		const _descriptionfP8V54R = -6.567092209605374;
		const _optionuN2LcYR = {
			"argChoices": _argChoicescDPi3fm,
		"negate": _negateMSyiyRY,
		"defaultValue": _defaultValueCjVLok,
		"defaultValueDescription": _defaultValueDescriptionuhD0LYR,
		"envVar": _envVarJFPTtDN,
		"description": _descriptionfP8V54R
	}
		const _returnValueCTuYj3I = await _HelpO8nVE9m.optionDescription(_optionuN2LcYR)
		const _optionkoAdk6J = "n3eqfMPPfVzMtzeNMciPVuEeFzxO6GPMAeQgeY";
		const _returnValuejQsadZf = await _HelpO8nVE9m.optionTerm(_optionkoAdk6J)
		const __argsiAfHHY8 = []
		const __namegTiWcvc = 8.80468764028467;
		const __aliaseswX1IsFe = "wPDKioBGtL9M7jNbFvYF5hM1bYuJQa";
		const _optionstSQjTP = {
		
	}
		const _cmdZMoBNBq = {
			"_args": __argsiAfHHY8,
		"_name": __namegTiWcvc,
		"_aliases": __aliaseswX1IsFe,
		"options": _optionstSQjTP
	}
		const _returnValueAwfEtWZ = await _HelpO8nVE9m.subcommandTerm(_cmdZMoBNBq)
		const _returnValueVIY9zdg = false;
		const _descriptionMLxvVxX = () => { return _returnValueVIY9zdg };
		const _cmdIfxYpg = {
			"description": _descriptionMLxvVxX
	}
		const _returnValueQLjHfA = await _HelpO8nVE9m.commandDescription(_cmdIfxYpg)
	});

	it('test for Help', async () => {
		const _HelpSyXSEEQ = new Help()
		const _returnValueEt8WXBY = true;
		const _arrayValueMxh9ZVb = () => { return _returnValueEt8WXBY };
		const _arrayValueFCuXFEr = true;
		const _arrayValueOgQkXb = true;
		const _arrayValueJo7qeho = null;
		const _arrayValueXiWic2 = false;
		const _arrayValueJuZqFl = -7.940400339729033;
		const _arrayValue51xMVP = [_arrayValueOgQkXb, _arrayValueJo7qeho, _arrayValueXiWic2, _arrayValueJuZqFl]
		const _arrayValuenRTvBip = true;
		const _arrayValuelsaGI2N = [_arrayValueFCuXFEr, _arrayValue51xMVP, _arrayValuenRTvBip]
		const _arrayValuerqECCFG = true;
		const _arrayValuezZxrI6p = {
		
	}
		const _arrayValuesXTQj3f = [_arrayValueMxh9ZVb, _arrayValuelsaGI2N, _arrayValuerqECCFG, _arrayValuezZxrI6p]
		const _arrayValueXthqkwC = -9.656948656790382;
		const _arrayValuevpOZMpm = {
		
	}
		const _commandsGx765v = [_arrayValuesXTQj3f, _arrayValueXthqkwC, _arrayValuevpOZMpm]
		const _arrayValueJyhbcGH = "ID7qvUevrWJsPsGV2OiG3SF1FaLJ2vW4Px2mKsiu6l4lmixaHFbA7tu3HWKgvV62rNPcRAXtM";
		const _returnValueUKGDvAI = [_arrayValueJyhbcGH]
		const __hasImplicitHelpCommandUbbClO = () => { return _returnValueUKGDvAI };
		const __helpCommandnameAndArgstscUN14 = {
		
	}
		const _returnValueFkIIcCu = {
		
	}
		const _createCommandgf3NuWy = () => { return _returnValueFkIIcCu };
		const _returnValuePZo2VAk = undefined;
		const _arrayValueJ916Dg4 = () => { return _returnValuePZo2VAk };
		const _arrayValueojXT0ui = true;
		const __helpCommandDescriptiontuVU08t = [_arrayValueJ916Dg4, _arrayValueojXT0ui]
		const _cmdQdmsWCD = {
			"commands": _commandsGx765v,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandUbbClO,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgstscUN14,
		"createCommand": _createCommandgf3NuWy,
		"_helpCommandDescription": __helpCommandDescriptiontuVU08t
	}
		const _returnValuei2nWBD = await _HelpSyXSEEQ.visibleCommands(_cmdQdmsWCD)
		const _cmdEnxxWUn = null;
		const _sortSubcommandsbxpwE69 = true;
		const _returnValueDQ9eQW0 = "f4b";
		const _subcommandTermjgHy8a5 = () => { return _returnValueDQ9eQW0 };
		const _helpergzYtMD = {
			"sortSubcommands": _sortSubcommandsbxpwE69,
		"subcommandTerm": _subcommandTermjgHy8a5
	}
		const _returnValueUpOXod8 = await _HelpSyXSEEQ.longestSubcommandTermLength(_cmdEnxxWUn, _helpergzYtMD)
		const _returnValuesbm7FoT = undefined;
		const _returnValueZbpAUZB = () => { return _returnValuesbm7FoT };
		const _nameWqvEmnV = () => { return _returnValueZbpAUZB };
		const _argumentEPKEJn8 = {
			"name": _nameWqvEmnV
	}
		const _returnValueB3lKMoA = await _HelpSyXSEEQ.argumentTerm(_argumentEPKEJn8)
		const _flagsH8pUFq4 = undefined;
		const _optionWyosmEU = {
			"flags": _flagsH8pUFq4
	}
		const _returnValueVROVm67 = await _HelpSyXSEEQ.optionTerm(_optionWyosmEU)
	});

	it('test for Help', async () => {
		const _HelpqTFsYq = new Help()
		const __nameFI0wpi = {
		
	}
		const __aliaseslIZ7zbV = "Ept9l78vRDABLyX8Artxf";
		const _parenty21LABD = "m1iorIrQoF5MPMtQ1ppfHx7mUmfroo2mrkfmWO35O5iY565c7kIj";
		const _returnValueYb2YceB = -3.9879727039758954;
		const _usagezo52Dat = () => { return _returnValueYb2YceB };
		const _cmdtW8UVBc = {
			"_name": __nameFI0wpi,
		"_aliases": __aliaseslIZ7zbV,
		"parent": _parenty21LABD,
		"usage": _usagezo52Dat
	}
		const _returnValuer2BWUYz = await _HelpqTFsYq.commandUsage(_cmdtW8UVBc)
	});
})