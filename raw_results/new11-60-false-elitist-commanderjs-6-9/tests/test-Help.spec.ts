export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpOgAhXA5 = new Help()
		const _cmdjzwGoNv = null;
		const _returnValuekf7ow0Y = {
		
	}
		const _visibleArgumentsFD0D512 = () => { return _returnValuekf7ow0Y };
		const _returnValueaWhzyq = null;
		const _argumentTermXtJLJ3Z = () => { return _returnValueaWhzyq };
		const _helperaKICNiM = {
			"visibleArguments": _visibleArgumentsFD0D512,
		"argumentTerm": _argumentTermXtJLJ3Z
	}
		const _returnValueNVfH1Cf = await _HelpOgAhXA5.longestArgumentTermLength(_cmdjzwGoNv, _helperaKICNiM)
		const _commandskpPTIJ5 = {
		
	}
		const _returnValuex8xwD3x = {
		
	}
		const __hasImplicitHelpCommandW3ICdKF = () => { return _returnValuex8xwD3x };
		const __helpCommandnameAndArgsrlr86kr = {
		
	}
		const _returnValueiROfALC = []
		const _createCommandQemF62H = () => { return _returnValueiROfALC };
		const _arrayValueUznI1GG = undefined;
		const _arrayValueh4s3V9d = "p11PaP4Lmgl3UmkYId7jk7nJLAaqZdKhy1rR8wn6uzC8e388rIn7U4WMpEbrbstoJmCvVh4HVR284Z2hsmef5UngB5Kb4";
		const _arrayValueyNldx97 = -6.021156627737516;
		const _arrayValuedZq1x5w = undefined;
		const _arrayValueicEuMT = false;
		const _arrayValuenOrr4vo = {
		
	}
		const _returnValuedAC748B = [_arrayValueicEuMT, _arrayValuenOrr4vo]
		const _arrayValueYtzCIE = () => { return _returnValuedAC748B };
		const _arrayValuepYU7u6V = 4.886657014423841;
		const _arrayValuek1TXArZ = [_arrayValueh4s3V9d, _arrayValueyNldx97, _arrayValuedZq1x5w, _arrayValueYtzCIE, _arrayValuepYU7u6V]
		const _arrayValueVKsi43x = {
		
	}
		const __helpCommandDescriptionXb32k4A = [_arrayValueUznI1GG, _arrayValuek1TXArZ, _arrayValueVKsi43x]
		const _cmdXv4k8x = {
			"commands": _commandskpPTIJ5,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandW3ICdKF,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsrlr86kr,
		"createCommand": _createCommandQemF62H,
		"_helpCommandDescription": __helpCommandDescriptionXb32k4A
	}
		const _returnValuegxHghnb = await _HelpOgAhXA5.visibleCommands(_cmdXv4k8x)
	});

	it('test for Help', async () => {
		const _Helpw0pjrns = new Help()
		const _argChoicesTt1JSBe = null;
		const _defaultValuetIlLMW = undefined;
		const _defaultValueDescriptionSrAfdI = {
		
	}
		const _descriptionsY8nQCr = undefined;
		const _argumentqzpPKI4 = {
			"argChoices": _argChoicesTt1JSBe,
		"defaultValue": _defaultValuetIlLMW,
		"defaultValueDescription": _defaultValueDescriptionSrAfdI,
		"description": _descriptionsY8nQCr
	}
		const _returnValueuzRqRO = await _Helpw0pjrns.argumentDescription(_argumentqzpPKI4)
		const _cmdfJ3VbF = undefined;
		const _sortSubcommandsubAqdxc = true;
		const _arrayValueYqUaoWj = undefined;
		const _returnValueKcVJ41m = [_arrayValueYqUaoWj]
		const _subcommandTermfPCoYuz = () => { return _returnValueKcVJ41m };
		const _helpersI9YUMZ = {
			"sortSubcommands": _sortSubcommandsubAqdxc,
		"subcommandTerm": _subcommandTermfPCoYuz
	}
		const _returnValuen569Gts = await _Helpw0pjrns.formatHelp(_cmdfJ3VbF, _helpersI9YUMZ)
		const _argChoicesAS49Xt = {
		
	}
		const _defaultValueu29UZ2k = undefined;
		const _returnValuevVTCqR7 = 1.8454625393100592;
		const _defaultValueDescriptionfFdjV3 = () => { return _returnValuevVTCqR7 };
		const _arrayValueYhFuYxc = 3.8996130269318403;
		const _descriptionV3lL2e = [_arrayValueYhFuYxc]
		const _argumentVWDQOBk = {
			"argChoices": _argChoicesAS49Xt,
		"defaultValue": _defaultValueu29UZ2k,
		"defaultValueDescription": _defaultValueDescriptionfFdjV3,
		"description": _descriptionV3lL2e
	}
		const _returnValuebprsr7B = await _Helpw0pjrns.argumentDescription(_argumentVWDQOBk)
		const _returnValuek9uAcRh = "ZdeblPqYVaE8wJyzIp1";
		const _cmdCnOJwm = () => { return _returnValuek9uAcRh };
		const _arrayValuetMiJnUM = true;
		const _arrayValueH2Sg60U = 1.8333705719998044;
		const _sortSubcommandsr1W9dct = [_arrayValuetMiJnUM, _arrayValueH2Sg60U]
		const _returnValueyK3oWNO = "MNXQDGIUsZIJEgBPvoXFIYg5blrVy4thpoKOUkhYJdl3le0Fxmljnh9IgD0hx29dlRSmNq31qk812";
		const _subcommandTermkt53rxP = () => { return _returnValueyK3oWNO };
		const _helperehYAfvO = {
			"sortSubcommands": _sortSubcommandsr1W9dct,
		"subcommandTerm": _subcommandTermkt53rxP
	}
		const _returnValueRbJcoNE = await _Helpw0pjrns.longestSubcommandTermLength(_cmdCnOJwm, _helperehYAfvO)
	});

	it('test for Help', async () => {
		const _Helpgsgi3r = new Help()
		const _returnValuerkXO7jM = undefined;
		const _nameyXUmjVt = () => { return _returnValuerkXO7jM };
		const _argumentb6Ueu9f = {
			"name": _nameyXUmjVt
	}
		const _returnValueX7CD0jQ = await _Helpgsgi3r.argumentTerm(_argumentb6Ueu9f)
		const _returnValueVWOyMOT = undefined;
		const _descriptionHNQqJb6 = () => { return _returnValueVWOyMOT };
		const _cmdSGOe3p9 = {
			"description": _descriptionHNQqJb6
	}
		const _returnValuem0UM8VO = await _Helpgsgi3r.commandDescription(_cmdSGOe3p9)
		const _cmduhDWqp4 = null;
		const _sortSubcommandswvT0BWO = undefined;
		const _subcommandTermm16G4xK = {
		
	}
		const _helper9OIXME = {
			"sortSubcommands": _sortSubcommandswvT0BWO,
		"subcommandTerm": _subcommandTermm16G4xK
	}
		const _returnValueUdK1Kvd = await _Helpgsgi3r.formatHelp(_cmduhDWqp4, _helper9OIXME)
		const _returnValuegLqFNnN = {
		
	}
		const _matchA5LzWXj = () => { return _returnValuegLqFNnN };
		const _arrayValuefntM6uR = undefined;
		const _substrzJtn2wY = [_arrayValuefntM6uR]
		const _strVuCsIez = {
			"match": _matchA5LzWXj,
		"substr": _substrzJtn2wY
	}
		const _widthogaBKp0 = 2.6211772344636906;
		const _indentMwSO2cT = -7.7449472110693645;
		const _minColumnWidthyWMxjRw = -1.458517031992427;
		const _returnValuenUqjnWU = await _Helpgsgi3r.wrap(_strVuCsIez, _widthogaBKp0, _indentMwSO2cT, _minColumnWidthyWMxjRw)
		const _returnValuezuRf3a = null;
		const _cmdvFlZMM = () => { return _returnValuezuRf3a };
		const _returnValueASy8ze = null;
		const _sortSubcommandsaEi9GS = () => { return _returnValueASy8ze };
		const _returnValuep9uOd7X = -6.385733996164573;
		const _subcommandTermycFzU39 = () => { return _returnValuep9uOd7X };
		const _helperDr7t6it = {
			"sortSubcommands": _sortSubcommandsaEi9GS,
		"subcommandTerm": _subcommandTermycFzU39
	}
		const _returnValueJ3t8tIj = await _Helpgsgi3r.longestSubcommandTermLength(_cmdvFlZMM, _helperDr7t6it)
	});

	it('test for Help', async () => {
		const _HelpkagDLvM = new Help()
		const _returnValuebdALqno = {
		
	}
		const _description8h2XUx = () => { return _returnValuebdALqno };
		const _cmd1Rm2p3 = {
			"description": _description8h2XUx
	}
		const _returnValueZS2Jt2d = await _HelpkagDLvM.subcommandDescription(_cmd1Rm2p3)
		const _returnValuenUBi2AR = "bktk4mT0wFE108QRStuyNlNz6LhBg9L";
		const _namebrQ0dFz = () => { return _returnValuenUBi2AR };
		const _argumentCoDR81c = {
			"name": _namebrQ0dFz
	}
		const _returnValueEmBg6zY = await _HelpkagDLvM.argumentTerm(_argumentCoDR81c)
		const _cmdkpD27J = undefined;
		const _sortSubcommandsgriRGh8 = null;
		const _returnValueTBjxz5U = "rg";
		const _subcommandTermaoxV1Jq = () => { return _returnValueTBjxz5U };
		const _helperGIhz5i2 = {
			"sortSubcommands": _sortSubcommandsgriRGh8,
		"subcommandTerm": _subcommandTermaoxV1Jq
	}
		const _returnValueV1t8kNg = await _HelpkagDLvM.longestSubcommandTermLength(_cmdkpD27J, _helperGIhz5i2)
		const _argChoicesEN4bg8j = {
		
	}
		const _defaultValueMZsl9O = undefined;
		const _defaultValueDescriptionaartGS8 = null;
		const _descriptionY0y6IqP = undefined;
		const _argumentB9P6VF = {
			"argChoices": _argChoicesEN4bg8j,
		"defaultValue": _defaultValueMZsl9O,
		"defaultValueDescription": _defaultValueDescriptionaartGS8,
		"description": _descriptionY0y6IqP
	}
		const _returnValueKWixJ0S = await _HelpkagDLvM.argumentDescription(_argumentB9P6VF)
	});

	it('test for Help', async () => {
		const _HelpJHIllRW = new Help()
		const _optionstR0TQMs = {
		
	}
		const _arrayValueiTEEMri = undefined;
		const _arrayValueYvS2QKY = [_arrayValueiTEEMri]
		const _arrayValue0JqowR = [_arrayValueYvS2QKY]
		const _arrayValuehq4mqQE = "u2fBDDLlcaLtvkVWLpcSsscBj";
		const __hasHelpOptionMm3BPGQ = [_arrayValue0JqowR, _arrayValuehq4mqQE]
		const __helpShortFlagkExGFvU = 2.104352718691702;
		const _returnValuePqlqQxh = undefined;
		const __findOptionjPWbyy = () => { return _returnValuePqlqQxh };
		const __helpLongFlagkiEncbR = -8.088708115836322;
		const _returnValueE0ZHNz4 = null;
		const _createOptionfe5tay = () => { return _returnValueE0ZHNz4 };
		const __helpDescriptionjzVhCr8 = {
		
	}
		const __helpFlagsqoToY7U = {
		
	}
		const _cmdUhaKnLl = {
			"options": _optionstR0TQMs,
		"_hasHelpOption": __hasHelpOptionMm3BPGQ,
		"_helpShortFlag": __helpShortFlagkExGFvU,
		"_findOption": __findOptionjPWbyy,
		"_helpLongFlag": __helpLongFlagkiEncbR,
		"createOption": _createOptionfe5tay,
		"_helpDescription": __helpDescriptionjzVhCr8,
		"_helpFlags": __helpFlagsqoToY7U
	}
		const _returnValuepl4Mr3g = await _HelpJHIllRW.visibleOptions(_cmdUhaKnLl)
		const _flagsotibHku = "kn0fySSKyRNOvalvcrLWqKwP9zBld6mNqHYTQC3S7TN";
		const _optionzNeprc = {
			"flags": _flagsotibHku
	}
		const _returnValuevhCSnZP = await _HelpJHIllRW.optionTerm(_optionzNeprc)
		const __namekf6jfql = {
		
	}
		const __aliasesrWHA2D3 = {
		
	}
		const _parentGvdOB6X = {
		
	}
		const _returnValueTTbbBRP = undefined;
		const _returnValuewCcMK5m = () => { return _returnValueTTbbBRP };
		const _returnValueSVMp41p = () => { return _returnValuewCcMK5m };
		const _usagezTMCQpN = () => { return _returnValueSVMp41p };
		const _cmde2Vfo6h = {
			"_name": __namekf6jfql,
		"_aliases": __aliasesrWHA2D3,
		"parent": _parentGvdOB6X,
		"usage": _usagezTMCQpN
	}
		const _returnValueBqI9hHf = await _HelpJHIllRW.commandUsage(_cmde2Vfo6h)
		const _argChoicesoITzrDR = {
		
	}
		const _defaultValuepjpNvMy = undefined;
		const _arrayValueNo3D9ld = "6CObQt2GPnrokulJnaeYIMWHvBU2tpGviygn156eFJpl54Vz6";
		const _arrayValuecJGyMB0 = null;
		const _returnValueYdckpq1 = -9.857080426969466;
		const _arrayValuevDqdzlM = () => { return _returnValueYdckpq1 };
		const _arrayValueoxkNfOb = [_arrayValueNo3D9ld, _arrayValuecJGyMB0, _arrayValuevDqdzlM]
		const _defaultValueDescriptionjzisLFw = [_arrayValueoxkNfOb]
		const _descriptionCRRVaYA = false;
		const _argumentEflDU0b = {
			"argChoices": _argChoicesoITzrDR,
		"defaultValue": _defaultValuepjpNvMy,
		"defaultValueDescription": _defaultValueDescriptionjzisLFw,
		"description": _descriptionCRRVaYA
	}
		const _returnValuedkuH53P = await _HelpJHIllRW.argumentDescription(_argumentEflDU0b)
	});

	it('test for Help', async () => {
		const _Helpo8pE5uA = new Help()
		const _match9HsUzf = false;
		const _returnValueLftdKS0 = "naeoF8auS4siNH4wZ";
		const _substrG5BaMle = () => { return _returnValueLftdKS0 };
		const _strkZ5wHdh = {
			"match": _match9HsUzf,
		"substr": _substrG5BaMle
	}
		const _widthCme10x = 5.801546107911522;
		const _indentEtpYpv = -4.056245120935421;
		const _minColumnWidthmr5XShL = 0.041634851090517344;
		const _returnValueCWitpjw = await _Helpo8pE5uA.wrap(_strkZ5wHdh, _widthCme10x, _indentEtpYpv, _minColumnWidthmr5XShL)
	});

	it('test for Help', async () => {
		const _HelpvdAKEnl = new Help()
		const __argsDescriptionfAVyAfU = {
		
	}
		const __argsTVnsxvT = {
		
	}
		const _cmdCtstG1X = {
			"_argsDescription": __argsDescriptionfAVyAfU,
		"_args": __argsTVnsxvT
	}
		const _returnValueFJo8ToD = await _HelpvdAKEnl.visibleArguments(_cmdCtstG1X)
		const _flagskzEG78V = []
		const _optionVfXneCE = {
			"flags": _flagskzEG78V
	}
		const _returnValuesIlsrTo = await _HelpvdAKEnl.optionTerm(_optionVfXneCE)
	});

	it('test for Help', async () => {
		const _HelpHROaAvy = new Help()
		const _arrayValueFM5UJ5j = {
		
	}
		const _arrayValueCI9xldR = undefined;
		const _arrayValueLWkm4gG = [_arrayValueFM5UJ5j, _arrayValueCI9xldR]
		const _arrayValueU0puMlQ = undefined;
		const _arrayValuev27fT8U = {
		
	}
		const _arrayValueJ0POx6d = true;
		const _returnValuezQ1RfvS = [_arrayValueLWkm4gG, _arrayValueU0puMlQ, _arrayValuev27fT8U, _arrayValueJ0POx6d]
		const _returnValuejNpZF6 = () => { return _returnValuezQ1RfvS };
		const _cmdPvWY0gU = () => { return _returnValuejNpZF6 };
		const _longestOptionTermLengthaAiZ1k0 = {
		
	}
		const _arrayValuePQcVBJd = 6.290598544376138;
		const _arrayValueyD7pRaS = "AjJerkU";
		const _arrayValueAUzjY2G = undefined;
		const _arrayValueVhJ7yGN = -5.80348686759094;
		const _arrayValueJuP5n2U = [_arrayValueyD7pRaS, _arrayValueAUzjY2G, _arrayValueVhJ7yGN]
		const _arrayValueea8xOjx = "ciLNLVCE02YkxneOi5ItkD5jxQMRe3NPOc0v6wpPvAimqbkqvaLso55Lw1CiF6PAPpvbt51ioJnTPVzcBTsxdUYcLkwAo0j7a";
		const _returnValuersat9Jq = [_arrayValuePQcVBJd, _arrayValueJuP5n2U, _arrayValueea8xOjx]
		const _longestSubcommandTermLengthhQlgKIj = () => { return _returnValuersat9Jq };
		const _returnValuejRvqog3 = "Cgj3ujglewXD9VJtGQFypPHajsbfwTsdtBHAf8TmGnR5IdmHstrxPzmvL8RgzMRB8TnY";
		const _longestArgumentTermLengthqFewb01 = () => { return _returnValuejRvqog3 };
		const _helperegp099H = {
			"longestOptionTermLength": _longestOptionTermLengthaAiZ1k0,
		"longestSubcommandTermLength": _longestSubcommandTermLengthhQlgKIj,
		"longestArgumentTermLength": _longestArgumentTermLengthqFewb01
	}
		const _returnValueNQEa5jU = await _HelpHROaAvy.padWidth(_cmdPvWY0gU, _helperegp099H)
		const _flagsKf6NCG5 = "K2U8";
		const _optionUHN1M0B = {
			"flags": _flagsKf6NCG5
	}
		const _returnValuednIXCtb = await _HelpHROaAvy.optionTerm(_optionUHN1M0B)
		const __argsDescriptionNCNs3Yy = {
		
	}
		const __argsjTMY6ab = undefined;
		const _cmdd52R7vV = {
			"_argsDescription": __argsDescriptionNCNs3Yy,
		"_args": __argsjTMY6ab
	}
		const _returnValuenFisyMX = await _HelpHROaAvy.visibleArguments(_cmdd52R7vV)
	});

	it('test for Help', async () => {
		const _HelpDNnyk7V = new Help()
		const _flagsNMajQ6a = false;
		const _optiony8d5s5T = {
			"flags": _flagsNMajQ6a
	}
		const _returnValuesjsmDdc = await _HelpDNnyk7V.optionTerm(_optiony8d5s5T)
	});

	it('test for Help', async () => {
		const _HelpFNdIM6S = new Help()
		const _arrayValueUnvOdeA = undefined;
		const _arrayValueYgY9Nd = [_arrayValueUnvOdeA]
		const _returnValueUOdnSO = "y8mXmViSm9QRGBvBF1fMLJXLbXZKNVhxm";
		const _arrayValuetAqKNRp = () => { return _returnValueUOdnSO };
		const _arrayValueZjdxupP = {
		
	}
		const _returnValueipZbz13 = [_arrayValueYgY9Nd, _arrayValuetAqKNRp, _arrayValueZjdxupP]
		const _matchdOAWC81 = () => { return _returnValueipZbz13 };
		const _arrayValueVSUiEeA = true;
		const _returnValueRJ4zoiB = [_arrayValueVSUiEeA]
		const _substrRQMuzu = () => { return _returnValueRJ4zoiB };
		const _strNOrHKI2 = {
			"match": _matchdOAWC81,
		"substr": _substrRQMuzu
	}
		const _widthYnWbd0M = 8.888522594465066;
		const _indentV7fACT2 = -9.527842170563796;
		const _minColumnWidthxGEy90K = 0.5004520844454259;
		const _returnValueHF0x8OY = await _HelpFNdIM6S.wrap(_strNOrHKI2, _widthYnWbd0M, _indentV7fACT2, _minColumnWidthxGEy90K)
		const _argChoicesOWZVnO6 = {
		
	}
		const _defaultValueAknWrrf = undefined;
		const _defaultValueDescriptionwFVhIU0 = "sIkrZoy3XJ";
		const _descriptiongvAEPp0 = 2.818852578410409;
		const _argumentUP5jjyD = {
			"argChoices": _argChoicesOWZVnO6,
		"defaultValue": _defaultValueAknWrrf,
		"defaultValueDescription": _defaultValueDescriptionwFVhIU0,
		"description": _descriptiongvAEPp0
	}
		const _returnValuedaskV0u = await _HelpFNdIM6S.argumentDescription(_argumentUP5jjyD)
		const __argsDescriptionMJ7luP3 = {
		
	}
		const __argsGjrDl9 = {
		
	}
		const _cmdOZ2CZNc = {
			"_argsDescription": __argsDescriptionMJ7luP3,
		"_args": __argsGjrDl9
	}
		const _returnValueeUbQGLH = await _HelpFNdIM6S.visibleArguments(_cmdOZ2CZNc)
	});

	it('test for Help', async () => {
		const _HelpPD3ebZT = new Help()
		const __namesVQYDo6 = false;
		const __aliasesYulc04V = {
		
	}
		const _parentxft77If = 7.454397141475809;
		const _usagemQPTIJl = undefined;
		const _cmdx2ge4ga = {
			"_name": __namesVQYDo6,
		"_aliases": __aliasesYulc04V,
		"parent": _parentxft77If,
		"usage": _usagemQPTIJl
	}
		const _returnValuexBjdDU = await _HelpPD3ebZT.commandUsage(_cmdx2ge4ga)
		const _cmdJQqeeHB = -4.764819042519126;
		const _returnValueSvL0cJ = false;
		const _visibleArgumentsWgMji5W = () => { return _returnValueSvL0cJ };
		const _returnValueGPVXWNU = null;
		const _argumentTermvHJZWcj = () => { return _returnValueGPVXWNU };
		const _helperYAGZEk4 = {
			"visibleArguments": _visibleArgumentsWgMji5W,
		"argumentTerm": _argumentTermvHJZWcj
	}
		const _returnValueR2pNeMS = await _HelpPD3ebZT.longestArgumentTermLength(_cmdJQqeeHB, _helperYAGZEk4)
		const __nameyKHe2hi = {
		
	}
		const __aliasesJfM4N2 = {
		
	}
		const _parentTNsLp4 = {
		
	}
		const _returnValueU7KXpFO = true;
		const _returnValuexwL9if = () => { return _returnValueU7KXpFO };
		const _usagehprCyiu = () => { return _returnValuexwL9if };
		const _cmdWZH4bSC = {
			"_name": __nameyKHe2hi,
		"_aliases": __aliasesJfM4N2,
		"parent": _parentTNsLp4,
		"usage": _usagehprCyiu
	}
		const _returnValuegsbqkh5 = await _HelpPD3ebZT.commandUsage(_cmdWZH4bSC)
	});

	it('test for Help', async () => {
		const _Helpl0HVTdy = new Help()
		const _returnValuevU6js4V = false;
		const _matchiu3Cr4F = () => { return _returnValuevU6js4V };
		const _returnValueFNEh9q = {
		
	}
		const _substrGPTIXnj = () => { return _returnValueFNEh9q };
		const _strvqXqjrS = {
			"match": _matchiu3Cr4F,
		"substr": _substrGPTIXnj
	}
		const _widthYtv79BM = -4.59898324587344;
		const _indentWw9XyGG = 4.194743031633179;
		const _minColumnWidthT65EF4h = 3.876618642817043;
		const _returnValuea4lKKb = await _Helpl0HVTdy.wrap(_strvqXqjrS, _widthYtv79BM, _indentWw9XyGG, _minColumnWidthT65EF4h)
		const __argsDescriptionWmxYowQ = {
		
	}
		const __argsMbhyCJ4 = {
		
	}
		const _cmdY717NPc = {
			"_argsDescription": __argsDescriptionWmxYowQ,
		"_args": __argsMbhyCJ4
	}
		const _returnValuepyU7Nrw = await _Helpl0HVTdy.visibleArguments(_cmdY717NPc)
		const _arrayValuecsTVJK = false;
		const _arrayValuelALYZ5u = {
		
	}
		const _arrayValue2FdT4J = null;
		const _cmdGtAk27r = [_arrayValuecsTVJK, _arrayValuelALYZ5u, _arrayValue2FdT4J]
		const _returnValueIzdMN2 = null;
		const _visibleArgumentsvo08NY7 = () => { return _returnValueIzdMN2 };
		const _returnValueXB2Lfm8 = "8DevwqhK1oyqTIdczpoWg85T3qAikIpghoLYuu5sCLDr4t2SwQUBg3huzH1MsTrTu9GE8hfRhEQvfynT1UYtly";
		const _argumentTermkpdJf03 = () => { return _returnValueXB2Lfm8 };
		const _helperqBkJxDI = {
			"visibleArguments": _visibleArgumentsvo08NY7,
		"argumentTerm": _argumentTermkpdJf03
	}
		const _returnValueNJbhT67 = await _Helpl0HVTdy.longestArgumentTermLength(_cmdGtAk27r, _helperqBkJxDI)
		const _argChoicesbOyLHq6 = {
		
	}
		const _arrayValueOyztdkp = "qC3FZR";
		const _arrayValueJ7EH6fT = {
		
	}
		const _negateHuQoy5f = [_arrayValueOyztdkp, _arrayValueJ7EH6fT]
		const _defaultValueH20Otg0 = undefined;
		const _arrayValuee01C1vy = null;
		const _arrayValuewUVQVMV = "EY0IlgX8IPsqV7Jb6PyRdpu4crgjailayoLl8jH6MoBKmUX1YM";
		const _arrayValuejrVWudV = undefined;
		const _returnValuerqzdZG = undefined;
		const _arrayValueSlpbdE = () => { return _returnValuerqzdZG };
		const _arrayValueYZGJt4y = [_arrayValuewUVQVMV, _arrayValuejrVWudV, _arrayValueSlpbdE]
		const _arrayValueOQVpcue = "LKGV6leW8btuJ7TJohzq0YbUwmwXAFMUZtpPvgFJ0MumMb85N5F3odzmVukcpEdNSuGGTk5UqKUjBEh1TdY2";
		const _arrayValueGzjSSJD = []
		const _arrayValueMaZVGSD = [_arrayValueGzjSSJD]
		const _defaultValueDescriptionliTfBTK = [_arrayValuee01C1vy, _arrayValueYZGJt4y, _arrayValueOQVpcue, _arrayValueMaZVGSD]
		const _envVarIZlJJww = undefined;
		const _returnValueztPiy3A = "CIsj3zuIBv3JaRhMWC7hKZimQCDJI9QiWnqOWah";
		const _descriptionGhU4P09 = () => { return _returnValueztPiy3A };
		const _optionvoUVehL = {
			"argChoices": _argChoicesbOyLHq6,
		"negate": _negateHuQoy5f,
		"defaultValue": _defaultValueH20Otg0,
		"defaultValueDescription": _defaultValueDescriptionliTfBTK,
		"envVar": _envVarIZlJJww,
		"description": _descriptionGhU4P09
	}
		const _returnValuesEziNMm = await _Helpl0HVTdy.optionDescription(_optionvoUVehL)
	});

	it('test for Help', async () => {
		const _HelpPW8ZpVc = new Help()
		const _argumentEPlecue = "TwjTYH7rj7exFibh7NZW6mhJ8Urv59oDJgTBrO";
		const _returnValueHP9eRx1 = await _HelpPW8ZpVc.argumentDescription(_argumentEPlecue)
		const _returnValueNWloDb = "nP07eV4MIrzLkuuKhLh5HPDrDsUB47vKGvaqXjYiI9CDXrM95Wl9cG";
		const _descriptiondOKfDd = () => { return _returnValueNWloDb };
		const _cmdzRxTveK = {
			"description": _descriptiondOKfDd
	}
		const _returnValueeHQ7bhz = await _HelpPW8ZpVc.subcommandDescription(_cmdzRxTveK)
		const _argChoicesTEuHDPo = {
		
	}
		const _arrayValueAhvlaVz = undefined;
		const _arrayValueTHZpJN9 = null;
		const _arrayValueNpabuXB = false;
		const _arrayValueVMMLgL = "HskBreztYZ6PeDGSts5fVyNQnECPFGWHYMn5ipLxlYM6TQjAWrXGoxuwu1uglu5zYHFCnDzBWuBD8HD5yAu9RXAvUOR7n7Mk8";
		const _negateE7BOOZ6 = [_arrayValueAhvlaVz, _arrayValueTHZpJN9, _arrayValueNpabuXB, _arrayValueVMMLgL]
		const _defaultValuevayhZH3 = undefined;
		const _defaultValueDescriptionS6W858n = true;
		const _envVarrupNxGF = undefined;
		const _descriptiont8xJVQo = "Si3pJI1MdpbfNsyMRS1YKKQLSd8mljfypJ5BulQFtqpl9IbZSN5LpiAwTiC5kO1T4Px87myKZSTCW7bNsS7c528CXvcC";
		const _optionh9B6nPA = {
			"argChoices": _argChoicesTEuHDPo,
		"negate": _negateE7BOOZ6,
		"defaultValue": _defaultValuevayhZH3,
		"defaultValueDescription": _defaultValueDescriptionS6W858n,
		"envVar": _envVarrupNxGF,
		"description": _descriptiont8xJVQo
	}
		const _returnValuesorbwzT = await _HelpPW8ZpVc.optionDescription(_optionh9B6nPA)
		const _argChoicesonbDmU = {
		
	}
		const _negatefAiJ7lC = null;
		const _defaultValueRsqmkOa = undefined;
		const _defaultValueDescriptionK2X3X1w = {
		
	}
		const _envVarA1mEG1G = undefined;
		const _descriptionKThlsde = undefined;
		const _optionJTIF83p = {
			"argChoices": _argChoicesonbDmU,
		"negate": _negatefAiJ7lC,
		"defaultValue": _defaultValueRsqmkOa,
		"defaultValueDescription": _defaultValueDescriptionK2X3X1w,
		"envVar": _envVarA1mEG1G,
		"description": _descriptionKThlsde
	}
		const _returnValue0NFCID = await _HelpPW8ZpVc.optionDescription(_optionJTIF83p)
		const _returnValuesrpSUwl = null;
		const _namekhymwnY = () => { return _returnValuesrpSUwl };
		const _argumentaxYxd7J = {
			"name": _namekhymwnY
	}
		const _returnValueOXwcRw0 = await _HelpPW8ZpVc.argumentTerm(_argumentaxYxd7J)
	});

	it('test for Help', async () => {
		const _Helps2S8LrY = new Help()
		const _returnValueWwPNT0 = null;
		const _descriptionAJKjNBi = () => { return _returnValueWwPNT0 };
		const _cmdlrbQAPM = {
			"description": _descriptionAJKjNBi
	}
		const _returnValuewmGakI8 = await _Helps2S8LrY.commandDescription(_cmdlrbQAPM)
		const _cmdVxP6APH = 2.5931197034225058;
		const _returnValueq3uJj3 = undefined;
		const _visibleOptionsWNAdFfz = () => { return _returnValueq3uJj3 };
		const _returnValuemxV5C8 = {
		
	}
		const _optionTermOuFTlgP = () => { return _returnValuemxV5C8 };
		const _helperV3xIYLU = {
			"visibleOptions": _visibleOptionsWNAdFfz,
		"optionTerm": _optionTermOuFTlgP
	}
		const _returnValuetDu5DA7 = await _Helps2S8LrY.longestOptionTermLength(_cmdVxP6APH, _helperV3xIYLU)
		const _arrayValueCug9SBa = true;
		const __argsvU88tEF = [_arrayValueCug9SBa]
		const __namePnzEG2j = 4.182455409605822;
		const __aliasesTmqPXqR = {
		
	}
		const _optionsGJf3Nnz = {
		
	}
		const _cmdnOjMfNG = {
			"_args": __argsvU88tEF,
		"_name": __namePnzEG2j,
		"_aliases": __aliasesTmqPXqR,
		"options": _optionsGJf3Nnz
	}
		const _returnValueliOWwZg = await _Helps2S8LrY.subcommandTerm(_cmdnOjMfNG)
	});

	it('test for Help', async () => {
		const _HelpLx5fZpP = new Help()
		const __argsNU928sc = {
		
	}
		const __nameP04o7az = -5.708457773114027;
		const __aliasesGOp4Zc6 = {
		
	}
		const _optionssVPfpGI = {
		
	}
		const _cmdLBX8Zmx = {
			"_args": __argsNU928sc,
		"_name": __nameP04o7az,
		"_aliases": __aliasesGOp4Zc6,
		"options": _optionssVPfpGI
	}
		const _returnValueN95euwz = await _HelpLx5fZpP.subcommandTerm(_cmdLBX8Zmx)
		const __argsBRWSF29 = {
		
	}
		const __nameS4msskZ = -4.898947138281194;
		const __aliasesMdsVVls = -6.8508743620872625;
		const _optionsZ53bWt8 = {
		
	}
		const _cmdkBIYQ3X = {
			"_args": __argsBRWSF29,
		"_name": __nameS4msskZ,
		"_aliases": __aliasesMdsVVls,
		"options": _optionsZ53bWt8
	}
		const _returnValueq7aaL6U = await _HelpLx5fZpP.subcommandTerm(_cmdkBIYQ3X)
		const _returnValueIHmroav = "rrer";
		const _flagsEyoMer = () => { return _returnValueIHmroav };
		const _optionV1thh5W = {
			"flags": _flagsEyoMer
	}
		const _returnValuea5TDJ4H = await _HelpLx5fZpP.optionTerm(_optionV1thh5W)
		const _argChoicesfPOKYXW = {
		
	}
		const _arrayValuefF1zDyo = -2.3584469667335632;
		const _negaterzvh1YV = [_arrayValuefF1zDyo]
		const _defaultValueY1s2ulX = undefined;
		const _arrayValueQEn1Z4 = -6.884896710625384;
		const _defaultValueDescriptionNzpQvcf = [_arrayValueQEn1Z4]
		const _envVarNtMTm1D = undefined;
		const _descriptionrtF7Q3L = "ggtOGpu0LkfHePj177RqA5We";
		const _optionBDZyJ7w = {
			"argChoices": _argChoicesfPOKYXW,
		"negate": _negaterzvh1YV,
		"defaultValue": _defaultValueY1s2ulX,
		"defaultValueDescription": _defaultValueDescriptionNzpQvcf,
		"envVar": _envVarNtMTm1D,
		"description": _descriptionrtF7Q3L
	}
		const _returnValueu40XkDy = await _HelpLx5fZpP.optionDescription(_optionBDZyJ7w)
		const _cmdsVzOPd0 = undefined;
		const _returnValueC4jkOAt = "oGbjl0NHXM6dBxD0Kk3hF8qArrPaNY7mJp9t8mqZeKIy";
		const _helperTcRh65h = () => { return _returnValueC4jkOAt };
		const _returnValueo5LM19X = await _HelpLx5fZpP.longestArgumentTermLength(_cmdsVzOPd0, _helperTcRh65h)
	});

	it('test for Help', async () => {
		const _HelpNrqHoeh = new Help()
		const _argChoicescuISDte = {
		
	}
		const _arrayValueijB8OTc = -4.092316062252682;
		const _arrayValuebGymxpr = null;
		const _negateQpaZR1C = [_arrayValueijB8OTc, _arrayValuebGymxpr]
		const _defaultValuerOuzLnt = undefined;
		const _defaultValueDescriptionB2HPA6t = 8.768435602543708;
		const _envVarzp6Bvbq = undefined;
		const _descriptionmr40mz9 = "fUKVY6RI2EnbEqQPEzLrFUwcI3OpwUVt6dZIlUm0vn1tC6TLFwI2G97kNlR";
		const _optiontrKtsEo = {
			"argChoices": _argChoicescuISDte,
		"negate": _negateQpaZR1C,
		"defaultValue": _defaultValuerOuzLnt,
		"defaultValueDescription": _defaultValueDescriptionB2HPA6t,
		"envVar": _envVarzp6Bvbq,
		"description": _descriptionmr40mz9
	}
		const _returnValuefbBFyhR = await _HelpNrqHoeh.optionDescription(_optiontrKtsEo)
		const _commandsSOfeWX8 = {
		
	}
		const _returnValueO2FHOR2 = null;
		const __hasImplicitHelpCommandwuWxlcp = () => { return _returnValueO2FHOR2 };
		const __helpCommandnameAndArgsSe4tfJi = {
		
	}
		const _returnValueywf5l6f = 9.220524632852364;
		const _createCommandgHAmHF1 = () => { return _returnValueywf5l6f };
		const __helpCommandDescriptionVmxWPFY = {
		
	}
		const _cmdJkHuRuY = {
			"commands": _commandsSOfeWX8,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandwuWxlcp,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsSe4tfJi,
		"createCommand": _createCommandgHAmHF1,
		"_helpCommandDescription": __helpCommandDescriptionVmxWPFY
	}
		const _returnValuerRzCQo8 = await _HelpNrqHoeh.visibleCommands(_cmdJkHuRuY)
		const _descriptionejyR3up = null;
		const _cmdZI9TiYK = {
			"description": _descriptionejyR3up
	}
		const _returnValuekYyJ3GX = await _HelpNrqHoeh.subcommandDescription(_cmdZI9TiYK)
		const _argChoiceseCoNlx = {
		
	}
		const _defaultValuepYgkPSY = undefined;
		const _defaultValueDescriptionyI0fJy9 = -2.4201741013524893;
		const _descriptionMtAgxQC = {
		
	}
		const _argumentfBJnBbB = {
			"argChoices": _argChoiceseCoNlx,
		"defaultValue": _defaultValuepYgkPSY,
		"defaultValueDescription": _defaultValueDescriptionyI0fJy9,
		"description": _descriptionMtAgxQC
	}
		const _returnValueExlcJP = await _HelpNrqHoeh.argumentDescription(_argumentfBJnBbB)
	});

	it('test for Help', async () => {
		const _Helpuxyp5mW = new Help()
		const _returnValueN3CYwnH = undefined;
		const _matchrA6qwnM = () => { return _returnValueN3CYwnH };
		const _returnValueAhw9kMk = false;
		const _substrNfhNdzl = () => { return _returnValueAhw9kMk };
		const _struMt8mVr = {
			"match": _matchrA6qwnM,
		"substr": _substrNfhNdzl
	}
		const _widthObUmjPe = 5.2272806738491475;
		const _indentowRSw0E = undefined;
		const _minColumnWidthQF4Zm0x = -2.2868649890437185;
		const _returnValueqORZ8j = await _Helpuxyp5mW.wrap(_struMt8mVr, _widthObUmjPe, _indentowRSw0E, _minColumnWidthQF4Zm0x)
		const __argsDescriptionfmMP2wI = {
		
	}
		const __argshfdlmDh = {
		
	}
		const _cmdz0EZAc5 = {
			"_argsDescription": __argsDescriptionfmMP2wI,
		"_args": __argshfdlmDh
	}
		const _returnValuewBhc9k9 = await _Helpuxyp5mW.visibleArguments(_cmdz0EZAc5)
		const __nameSkP6aGo = {
		
	}
		const __aliasesZCxmYCn = {
		
	}
		const _parentt63H4EH = {
		
	}
		const _arrayValuefU9aPPc = undefined;
		const _arrayValueYA2vZJm = undefined;
		const _arrayValuekFo0PcK = [_arrayValuefU9aPPc, _arrayValueYA2vZJm]
		const _arrayValuedPMitEF = null;
		const _arrayValuefKAFdez = false;
		const _arrayValuezYuS3tY = undefined;
		const _returnValuedTVQtQR = [_arrayValuekFo0PcK, _arrayValuedPMitEF, _arrayValuefKAFdez, _arrayValuezYuS3tY]
		const _usagep03ta80 = () => { return _returnValuedTVQtQR };
		const _cmdqLTISwu = {
			"_name": __nameSkP6aGo,
		"_aliases": __aliasesZCxmYCn,
		"parent": _parentt63H4EH,
		"usage": _usagep03ta80
	}
		const _returnValuefJRN4be = await _Helpuxyp5mW.commandUsage(_cmdqLTISwu)
		const _optionFp4yiZl = null;
		const _returnValueSnEFTlk = await _Helpuxyp5mW.optionDescription(_optionFp4yiZl)
	});

	it('test for Help', async () => {
		const _HelpyyK5Yxi = new Help()
		const __nameWpxCx3w = {
		
	}
		const __aliasesO518ho6 = "2kX8s9CKYfJByTgPbDpJzShraCWJVkVwveSnB8uDLNlybxZh";
		const _parentZ1WzCzV = {
		
	}
		const _returnValueIsVhKQ = []
		const _usageRitLad6 = () => { return _returnValueIsVhKQ };
		const _cmddOtEmI9 = {
			"_name": __nameWpxCx3w,
		"_aliases": __aliasesO518ho6,
		"parent": _parentZ1WzCzV,
		"usage": _usageRitLad6
	}
		const _returnValuehfRgKr = await _HelpyyK5Yxi.commandUsage(_cmddOtEmI9)
		const _flagsjPh2tnJ = undefined;
		const _optionSxaCW9I = {
			"flags": _flagsjPh2tnJ
	}
		const _returnValueZr2VU5g = await _HelpyyK5Yxi.optionTerm(_optionSxaCW9I)
		const _argChoicesDqG91cv = {
		
	}
		const _negateq4E0VJ4 = {
		
	}
		const _defaultValuesb2Ju3W = undefined;
		const _defaultValueDescriptionc536mbP = false;
		const _envVarHnqphW6 = undefined;
		const _descriptiontuKmN4a = null;
		const _optionGH5dzfa = {
			"argChoices": _argChoicesDqG91cv,
		"negate": _negateq4E0VJ4,
		"defaultValue": _defaultValuesb2Ju3W,
		"defaultValueDescription": _defaultValueDescriptionc536mbP,
		"envVar": _envVarHnqphW6,
		"description": _descriptiontuKmN4a
	}
		const _returnValuewLhiXdm = await _HelpyyK5Yxi.optionDescription(_optionGH5dzfa)
	});

	it('test for Help', async () => {
		const _HelpDsW81hP = new Help()
		const _argChoicesYNyVvNL = {
		
	}
		const _negatejANF77f = -8.850346174992069;
		const _defaultValuepxHinso = undefined;
		const _arrayValueN00XStD = undefined;
		const _arrayValueD1xnalj = {
		
	}
		const _defaultValueDescriptionzR1MXoE = [_arrayValueN00XStD, _arrayValueD1xnalj]
		const _envVaroPO4GOX = false;
		const _descriptionV0G0ImE = null;
		const _optionztDynaX = {
			"argChoices": _argChoicesYNyVvNL,
		"negate": _negatejANF77f,
		"defaultValue": _defaultValuepxHinso,
		"defaultValueDescription": _defaultValueDescriptionzR1MXoE,
		"envVar": _envVaroPO4GOX,
		"description": _descriptionV0G0ImE
	}
		const _returnValuea9lAqtg = await _HelpDsW81hP.optionDescription(_optionztDynaX)
	});

	it('test for Help', async () => {
		const _HelpAmktdYk = new Help()
		const _argChoicesCvcRH8s = undefined;
		const _defaultValuePLl8Mrz = null;
		const _defaultValueDescriptionG5cU6nw = false;
		const _descriptionAiTgCOw = true;
		const _argumentvmdMCSs = {
			"argChoices": _argChoicesCvcRH8s,
		"defaultValue": _defaultValuePLl8Mrz,
		"defaultValueDescription": _defaultValueDescriptionG5cU6nw,
		"description": _descriptionAiTgCOw
	}
		const _returnValueo6lGEs8 = await _HelpAmktdYk.argumentDescription(_argumentvmdMCSs)
		const _returnValuecZZ8ig = false;
		const _descriptionEjDPVRR = () => { return _returnValuecZZ8ig };
		const _cmdQRXGqjK = {
			"description": _descriptionEjDPVRR
	}
		const _returnValuemlNUNIt = await _HelpAmktdYk.commandDescription(_cmdQRXGqjK)
		const __argswufQWdY = {
		
	}
		const __nameFuHBWLG = 4.010838844213087;
		const __aliases4VEMQ9 = {
		
	}
		const _optionsIpL2eH4 = {
		
	}
		const _cmd9MHyPm = {
			"_args": __argswufQWdY,
		"_name": __nameFuHBWLG,
		"_aliases": __aliases4VEMQ9,
		"options": _optionsIpL2eH4
	}
		const _returnValueWSM03HP = await _HelpAmktdYk.subcommandTerm(_cmd9MHyPm)
		const _cmd3U8Gsp = undefined;
		const _returnValueNujV6v1 = "EbDykcqgXzhroRRGqEmef8mqCzvzycYxGVvqoR";
		const _sortSubcommandsdlkQPeF = () => { return _returnValueNujV6v1 };
		const _returnValueTeF7mOQ = {
		
	}
		const _subcommandTermfRypEQs = () => { return _returnValueTeF7mOQ };
		const _helperKgkwk4 = {
			"sortSubcommands": _sortSubcommandsdlkQPeF,
		"subcommandTerm": _subcommandTermfRypEQs
	}
		const _returnValuegx01ZxU = await _HelpAmktdYk.longestSubcommandTermLength(_cmd3U8Gsp, _helperKgkwk4)
		const _arrayValuewo0nLs = false;
		const _arrayValueF946kV = "ESKfh6embg2DqgeG5Y7kiMWpr4VOfbcTMMf8loFtXTRCMoeEY4Sn";
		const _arrayValuegDeufWg = 9.255425948635008;
		const _returnValueIXxnJjg = [_arrayValuewo0nLs, _arrayValueF946kV, _arrayValuegDeufWg]
		const _descriptionmGCtA3M = () => { return _returnValueIXxnJjg };
		const _cmdCRPfcKW = {
			"description": _descriptionmGCtA3M
	}
		const _returnValue5LNh94 = await _HelpAmktdYk.commandDescription(_cmdCRPfcKW)
	});

	it('test for Help', async () => {
		const _HelpGkHkUqf = new Help()
		const _arrayValueMkVzzIJ = false;
		const _arrayValueju8t3Vv = null;
		const _returnValueOsXd3HQ = null;
		const _arrayValuePMRDBF = () => { return _returnValueOsXd3HQ };
		const _arrayValuesQ19w1q = {
		
	}
		const _returnValuecZ9xX7j = [_arrayValueju8t3Vv, _arrayValuePMRDBF, _arrayValuesQ19w1q]
		const _arrayValueQVM5Dhr = () => { return _returnValuecZ9xX7j };
		const _arrayValueRAsZfa = {
		
	}
		const _arrayValuezEtBvgc = {
		
	}
		const _arrayValuea5Vg9Mz = [_arrayValueQVM5Dhr, _arrayValueRAsZfa, _arrayValuezEtBvgc]
		const _arrayValueH2Bewxh = false;
		const _arrayValue47TyfZ = [_arrayValuea5Vg9Mz, _arrayValueH2Bewxh]
		const _optionsqFk5JuA = [_arrayValueMkVzzIJ, _arrayValue47TyfZ]
		const __hasHelpOptionslab4F6 = null;
		const __helpShortFlagazrLXhe = undefined;
		const _returnValuePye7me8 = undefined;
		const __findOptionmHwJtEy = () => { return _returnValuePye7me8 };
		const __helpLongFlagX6NbGw = undefined;
		const _returnValuedwSskoi = {
		
	}
		const _createOptionmoFTKI = () => { return _returnValuedwSskoi };
		const __helpDescriptionw4VKYB = "nTsw4QuE";
		const __helpFlagsFGdvmoG = "hSpX6UCr34lqmnwESE3FrhWWEHoeTTanFcms63kbpidXnoz9JbHEtZnWy3";
		const _cmdbTUsp92 = {
			"options": _optionsqFk5JuA,
		"_hasHelpOption": __hasHelpOptionslab4F6,
		"_helpShortFlag": __helpShortFlagazrLXhe,
		"_findOption": __findOptionmHwJtEy,
		"_helpLongFlag": __helpLongFlagX6NbGw,
		"createOption": _createOptionmoFTKI,
		"_helpDescription": __helpDescriptionw4VKYB,
		"_helpFlags": __helpFlagsFGdvmoG
	}
		const _returnValuem5QDur7 = await _HelpGkHkUqf.visibleOptions(_cmdbTUsp92)
		const _commandsvjAia0 = {
		
	}
		const _arrayValue0Zyajs = undefined;
		const _returnValueW6iXeZ = [_arrayValue0Zyajs]
		const _returnValuekUg3ySg = () => { return _returnValueW6iXeZ };
		const __hasImplicitHelpCommandNJNRbmz = () => { return _returnValuekUg3ySg };
		const __helpCommandnameAndArgsKZDSXo2 = {
		
	}
		const _returnValueQm6oOxl = false;
		const _createCommandn09n3YQ = () => { return _returnValueQm6oOxl };
		const __helpCommandDescription7raN5O = undefined;
		const _cmdJ38zVy = {
			"commands": _commandsvjAia0,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandNJNRbmz,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsKZDSXo2,
		"createCommand": _createCommandn09n3YQ,
		"_helpCommandDescription": __helpCommandDescription7raN5O
	}
		const _returnValueZXEuThV = await _HelpGkHkUqf.visibleCommands(_cmdJ38zVy)
		const _cmdL73RNp0 = "4cQ1PszanPihSW0Fl9";
		const _sortSubcommandslAp0Tl3 = null;
		const _subcommandTermWcY7J2M = 2.72662645419614;
		const _helperBK0nC5Z = {
			"sortSubcommands": _sortSubcommandslAp0Tl3,
		"subcommandTerm": _subcommandTermWcY7J2M
	}
		const _returnValuetI8s8y = await _HelpGkHkUqf.longestSubcommandTermLength(_cmdL73RNp0, _helperBK0nC5Z)
	});
})