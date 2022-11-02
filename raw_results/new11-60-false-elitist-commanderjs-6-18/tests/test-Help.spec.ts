export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpOC0MuwS = new Help()
		const _cmdAL0o5kc = true;
		const _visibleOptionsGMIL3QJ = undefined;
		const _returnValueQ2Brk1S = -9.424237623500083;
		const _optionTermqKgOHmA = () => { return _returnValueQ2Brk1S };
		const _helperP5hfwP0 = {
			"visibleOptions": _visibleOptionsGMIL3QJ,
		"optionTerm": _optionTermqKgOHmA
	}
		const _returnValueOoVpNNl = await _HelpOC0MuwS.longestOptionTermLength(_cmdAL0o5kc, _helperP5hfwP0)
		const _cmdoOcbO3v = null;
		const _returnValuebtUyVK7 = await _HelpOC0MuwS.commandDescription(_cmdoOcbO3v)
	});

	it('test for Help', async () => {
		const _HelpKVGk5A = new Help()
		const _commandsmu8ERsz = {
		
	}
		const _returnValueyIzg14m = -8.771121214959221;
		const __hasImplicitHelpCommandXGp8W6W = () => { return _returnValueyIzg14m };
		const __helpCommandnameAndArgsTGQ6sZ8 = {
		
	}
		const _returnValueCMvnFWy = 2.7056856156870968;
		const _createCommandbfp2yuS = () => { return _returnValueCMvnFWy };
		const _arrayValueqdxi8sq = -3.8483408388854787;
		const __helpCommandDescriptionpW1VcNj = [_arrayValueqdxi8sq]
		const _cmdGxkg11y = {
			"commands": _commandsmu8ERsz,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandXGp8W6W,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsTGQ6sZ8,
		"createCommand": _createCommandbfp2yuS,
		"_helpCommandDescription": __helpCommandDescriptionpW1VcNj
	}
		const _returnValuecxLJc9r = await _HelpKVGk5A.visibleCommands(_cmdGxkg11y)
		const _argChoicesQvyCR74 = {
		
	}
		const _negateWqI8mqf = "nAw1AgQgx3ca6ysWGqGpCpkwuYzIetGhT8ctoiFFegWjI9GBkujZhzeTpv0kVRsnyjppseXLvwBis8BNkgljVd5Str1uOLSoy";
		const _defaultValuebsoVkE4 = undefined;
		const _defaultValueDescriptionmetsxy = null;
		const _envVarteSwfDm = undefined;
		const _descriptionenQsqKP = 1.827495614900938;
		const _option2vtQVT = {
			"argChoices": _argChoicesQvyCR74,
		"negate": _negateWqI8mqf,
		"defaultValue": _defaultValuebsoVkE4,
		"defaultValueDescription": _defaultValueDescriptionmetsxy,
		"envVar": _envVarteSwfDm,
		"description": _descriptionenQsqKP
	}
		const _returnValueuitGzjZ = await _HelpKVGk5A.optionDescription(_option2vtQVT)
		const __nameCgScQJv = {
		
	}
		const __aliasesMAc9IM7 = {
		
	}
		const _parentUUTilzQ = {
		
	}
		const _usageTGpxaof = null;
		const _cmdcOjUwaZ = {
			"_name": __nameCgScQJv,
		"_aliases": __aliasesMAc9IM7,
		"parent": _parentUUTilzQ,
		"usage": _usageTGpxaof
	}
		const _returnValuebsEIHxz = await _HelpKVGk5A.commandUsage(_cmdcOjUwaZ)
		const _argChoicesZbZT1kd = {
		
	}
		const _negatesr5rTub = {
		
	}
		const _defaultValueZ5yMF3 = undefined;
		const _defaultValueDescriptionvFKbAUd = null;
		const _envVaryvEjtrD = undefined;
		const _descriptionVtXFKAP = null;
		const _optionN0TeNvN = {
			"argChoices": _argChoicesZbZT1kd,
		"negate": _negatesr5rTub,
		"defaultValue": _defaultValueZ5yMF3,
		"defaultValueDescription": _defaultValueDescriptionvFKbAUd,
		"envVar": _envVaryvEjtrD,
		"description": _descriptionVtXFKAP
	}
		const _returnValueEEdYYA = await _HelpKVGk5A.optionDescription(_optionN0TeNvN)
	});

	it('test for Help', async () => {
		const _HelpvlTZddL = new Help()
		const _strhsifu30 = undefined;
		const _widthrcFTfnU = 8.76816910955074;
		const _indentLamo3iP = 9.959089998113416;
		const _minColumnWidthRericPL = 3.672743482895715;
		const _returnValuePOnXwLn = await _HelpvlTZddL.wrap(_strhsifu30, _widthrcFTfnU, _indentLamo3iP, _minColumnWidthRericPL)
		const _returnValueFXiAZGw = undefined;
		const _descriptionnIed5l7 = () => { return _returnValueFXiAZGw };
		const _cmdy9KcmXG = {
			"description": _descriptionnIed5l7
	}
		const _returnValueUq4GiTy = await _HelpvlTZddL.subcommandDescription(_cmdy9KcmXG)
		const _optionsbToOuf6 = 0.7146378125786015;
		const __hasHelpOptionPLfkN5s = undefined;
		const __helpShortFlagN75ucc = true;
		const _returnValueCSX9Efp = "eZeCnBMq12z7Pt10KeUPDWWhOJE7SdABIDxM75hBzqrNaV5waetIdwPpUsjIDchPROz9w2VzglN625IuffUP1lfH7snA1bnDeW";
		const __findOptionLTH3P41 = () => { return _returnValueCSX9Efp };
		const __helpLongFlagf7UzH2I = false;
		const _returnValue9dWQsJ = null;
		const _createOptionbOIhxit = () => { return _returnValue9dWQsJ };
		const __helpDescriptionC1H5SS = undefined;
		const _returnValueL6ZJ8YV = true;
		const _returnValueOB8tHqR = () => { return _returnValueL6ZJ8YV };
		const __helpFlagsIa0EH9s = () => { return _returnValueOB8tHqR };
		const _cmdFyGL0YN = {
			"options": _optionsbToOuf6,
		"_hasHelpOption": __hasHelpOptionPLfkN5s,
		"_helpShortFlag": __helpShortFlagN75ucc,
		"_findOption": __findOptionLTH3P41,
		"_helpLongFlag": __helpLongFlagf7UzH2I,
		"createOption": _createOptionbOIhxit,
		"_helpDescription": __helpDescriptionC1H5SS,
		"_helpFlags": __helpFlagsIa0EH9s
	}
		const _returnValuedWYw7Xh = await _HelpvlTZddL.visibleOptions(_cmdFyGL0YN)
	});

	it('test for Help', async () => {
		const _HelpI9WTozy = new Help()
		const _optionsTxn6BfV = {
		
	}
		const __hasHelpOptionvvbe6Bv = undefined;
		const __helpShortFlagpzeQmPF = "3cTK8YZ6aeQtarsGb2qHqGAkQaDtfZ3XnQdz9rApfVlgsTK3i4a8FwOLOEFB5Hz594";
		const _returnValueSFUwfe3 = "lJjiwQVJwbzS7F0lfn5rEXhbKvuzuqz47AQNbZfpXBBB4BBt6Cwwd4s0sCmynRqQUya";
		const _returnValuedzDVlwA = () => { return _returnValueSFUwfe3 };
		const __findOptionPuxSoqj = () => { return _returnValuedzDVlwA };
		const __helpLongFlagjTacOUq = {
		
	}
		const _returnValueprlEg5I = undefined;
		const _returnValueK8fLiiT = () => { return _returnValueprlEg5I };
		const _createOptione8CLFr1 = () => { return _returnValueK8fLiiT };
		const _arrayValueVj1oRvg = {
		
	}
		const _arrayValuePzR4WnT = -9.383242939779308;
		const _arrayValueiEo0o3r = [_arrayValueVj1oRvg, _arrayValuePzR4WnT]
		const _arrayValuegsBwLCf = 4.324573387661392;
		const _arrayValueATLZbWL = undefined;
		const __helpDescriptionN3O0Tqv = [_arrayValueiEo0o3r, _arrayValuegsBwLCf, _arrayValueATLZbWL]
		const __helpFlagsRQK4CaN = false;
		const _cmdnSMSqiQ = {
			"options": _optionsTxn6BfV,
		"_hasHelpOption": __hasHelpOptionvvbe6Bv,
		"_helpShortFlag": __helpShortFlagpzeQmPF,
		"_findOption": __findOptionPuxSoqj,
		"_helpLongFlag": __helpLongFlagjTacOUq,
		"createOption": _createOptione8CLFr1,
		"_helpDescription": __helpDescriptionN3O0Tqv,
		"_helpFlags": __helpFlagsRQK4CaN
	}
		const _returnValueH5zIRDJ = await _HelpI9WTozy.visibleOptions(_cmdnSMSqiQ)
		const _cmdSlPkE7e = -8.83350688570803;
		const _arrayValueLKoeleC = true;
		const _arrayValueiCxWsAG = []
		const _arrayValueUMqbJkG = [_arrayValueLKoeleC, _arrayValueiCxWsAG]
		const _arrayValueue44H1d = true;
		const _arrayValueKdlzUrf = false;
		const _arrayValueiMI8WHj = [_arrayValueKdlzUrf]
		const _returnValueJuLCuir = -2.397397642089194;
		const _arrayValueA0MA5DE = () => { return _returnValueJuLCuir };
		const _sortSubcommandsdrduyl9 = [_arrayValueUMqbJkG, _arrayValueue44H1d, _arrayValueiMI8WHj, _arrayValueA0MA5DE]
		const _returnValueuEHxYVe = undefined;
		const _subcommandTermeTBeMU4 = () => { return _returnValueuEHxYVe };
		const _helpercI743MC = {
			"sortSubcommands": _sortSubcommandsdrduyl9,
		"subcommandTerm": _subcommandTermeTBeMU4
	}
		const _returnValueuXmvcos = await _HelpI9WTozy.longestSubcommandTermLength(_cmdSlPkE7e, _helpercI743MC)
	});

	it('test for Help', async () => {
		const _HelptoMesNx = new Help()
		const _returnValueIBygK0z = -2.335676380907424;
		const _matchkyT3NNI = () => { return _returnValueIBygK0z };
		const _returnValueCVpjcMI = null;
		const _substrFZe8aOt = () => { return _returnValueCVpjcMI };
		const _strLXSzuo = {
			"match": _matchkyT3NNI,
		"substr": _substrFZe8aOt
	}
		const _widthHHEQt7Y = 4.481001223352745;
		const _indentxDtW5Uq = "EokxA92PHScWxNcGV7sh7JXWuT6epslI3TQKeAWyqvSrua2RtJgYAt0";
		const _minColumnWidthkEE7XOt = -1.8211949539641434;
		const _returnValueGZuC6de = await _HelptoMesNx.wrap(_strLXSzuo, _widthHHEQt7Y, _indentxDtW5Uq, _minColumnWidthkEE7XOt)
		const _arrayValueJoZQjeI = true;
		const _returnValueBEl7IuJ = null;
		const _arrayValueWmWPPzF = () => { return _returnValueBEl7IuJ };
		const _returnValue2huayT = [_arrayValueJoZQjeI, _arrayValueWmWPPzF]
		const _descriptionf8O14ep = () => { return _returnValue2huayT };
		const _cmdU7drxBR = {
			"description": _descriptionf8O14ep
	}
		const _returnValuelYUlJOY = await _HelptoMesNx.subcommandDescription(_cmdU7drxBR)
		const _matchQ2SB6Jy = undefined;
		const _returnValuetUVNDk7 = {
		
	}
		const _substrYQdpfFN = () => { return _returnValuetUVNDk7 };
		const _strhQPRiK6 = {
			"match": _matchQ2SB6Jy,
		"substr": _substrYQdpfFN
	}
		const _widthDjqz5X0 = 9.795758839428576;
		const _indentT4UF8t2 = 7.371626848214653;
		const _minColumnWidthsqx9b20 = -0.12196859301982599;
		const _returnValueAwunNi9 = await _HelptoMesNx.wrap(_strhQPRiK6, _widthDjqz5X0, _indentT4UF8t2, _minColumnWidthsqx9b20)
		const __argsXOE34QJ = {
		
	}
		const __namecuE0Bz = -2.1144743091713414;
		const __aliasesTLYcp4u = {
		
	}
		const _optionsb6AT3im = {
		
	}
		const _cmdUFGzsXL = {
			"_args": __argsXOE34QJ,
		"_name": __namecuE0Bz,
		"_aliases": __aliasesTLYcp4u,
		"options": _optionsb6AT3im
	}
		const _returnValuetGa2FfV = await _HelptoMesNx.subcommandTerm(_cmdUFGzsXL)
	});

	it('test for Help', async () => {
		const _HelpwocnKkB = new Help()
		const _returnValueCxFIOBu = undefined;
		const _descriptionEMClvgt = () => { return _returnValueCxFIOBu };
		const _cmdZU79CMG = {
			"description": _descriptionEMClvgt
	}
		const _returnValueBMxaWyp = await _HelpwocnKkB.subcommandDescription(_cmdZU79CMG)
		const _cmdYg94zIC = "RG8NKifrsWWnwbYFSJbNanIQFH8jq5Ez8JIll2FHt";
		const _returnValueJG5xJYj = {
		
	}
		const _longestOptionTermLengthHxkQjuT = () => { return _returnValueJG5xJYj };
		const _returnValueKfmKYjd = "E3tmr3OVfP1N";
		const _longestSubcommandTermLengthQNaJd7H = () => { return _returnValueKfmKYjd };
		const _returnValueUSlvVWQ = "9RCBUWU6CAqytzyBOx7cSw1gEmVkN5dTah055pEETZmhNj4G38";
		const _arrayValuewLPZiA2 = () => { return _returnValueUSlvVWQ };
		const _arrayValuehKfoM8X = null;
		const _returnValueKLtPXK0 = [_arrayValuewLPZiA2, _arrayValuehKfoM8X]
		const _longestArgumentTermLengthCLtVBA = () => { return _returnValueKLtPXK0 };
		const _helperC8SlRmF = {
			"longestOptionTermLength": _longestOptionTermLengthHxkQjuT,
		"longestSubcommandTermLength": _longestSubcommandTermLengthQNaJd7H,
		"longestArgumentTermLength": _longestArgumentTermLengthCLtVBA
	}
		const _returnValueEm6VYpK = await _HelpwocnKkB.padWidth(_cmdYg94zIC, _helperC8SlRmF)
		const _returnValueDjwouD = "YblEUS1qh9zIkWT5K9Es6Ja6AfQdtzRXZP9";
		const _name3XQTXM = () => { return _returnValueDjwouD };
		const _argumentLONEAAi = {
			"name": _name3XQTXM
	}
		const _returnValueXgNChbD = await _HelpwocnKkB.argumentTerm(_argumentLONEAAi)
		const __argsDescription7TkjLq = {
		
	}
		const __argsRJj6q5k = {
		
	}
		const _cmdXr7gj3 = {
			"_argsDescription": __argsDescription7TkjLq,
		"_args": __argsRJj6q5k
	}
		const _returnValueWiU6Xt4 = await _HelpwocnKkB.visibleArguments(_cmdXr7gj3)
	});

	it('test for Help', async () => {
		const _HelpNKVFh2F = new Help()
		const _optionslmCaZLO = []
		const __hasHelpOptioncwNjFtM = false;
		const _returnValuegPwzQzV = 4.13391147923662;
		const __helpShortFlagBR2SfB9 = () => { return _returnValuegPwzQzV };
		const _arrayValuerFJIc0j = 1.878215240591338;
		const _arrayValueeG6qL4R = false;
		const _returnValueL2Tw46 = [_arrayValuerFJIc0j, _arrayValueeG6qL4R]
		const _returnValuezprBRs4 = () => { return _returnValueL2Tw46 };
		const _returnValueYmbSpWi = () => { return _returnValuezprBRs4 };
		const __findOptionpfsgviR = () => { return _returnValueYmbSpWi };
		const __helpLongFlagYxlPb2C = {
		
	}
		const _arrayValuenr02v0j = null;
		const _arrayValueI8fM3qg = undefined;
		const _returnValueXn0O82V = [_arrayValuenr02v0j, _arrayValueI8fM3qg]
		const _createOptionHconxSs = () => { return _returnValueXn0O82V };
		const __helpDescriptiondd3EX2X = 7.191805774171478;
		const __helpFlagsaSvNfLC = undefined;
		const _cmdgPDhjS = {
			"options": _optionslmCaZLO,
		"_hasHelpOption": __hasHelpOptioncwNjFtM,
		"_helpShortFlag": __helpShortFlagBR2SfB9,
		"_findOption": __findOptionpfsgviR,
		"_helpLongFlag": __helpLongFlagYxlPb2C,
		"createOption": _createOptionHconxSs,
		"_helpDescription": __helpDescriptiondd3EX2X,
		"_helpFlags": __helpFlagsaSvNfLC
	}
		const _returnValuepi7efBl = await _HelpNKVFh2F.visibleOptions(_cmdgPDhjS)
		const _argChoicesIEYAAoZ = {
		
	}
		const _defaultValuefPrOzKB = undefined;
		const _defaultValueDescriptionbrrHwke = true;
		const _descriptionmYSLBc0 = null;
		const _argumentkIR3MIo = {
			"argChoices": _argChoicesIEYAAoZ,
		"defaultValue": _defaultValuefPrOzKB,
		"defaultValueDescription": _defaultValueDescriptionbrrHwke,
		"description": _descriptionmYSLBc0
	}
		const _returnValueFjeJHNg = await _HelpNKVFh2F.argumentDescription(_argumentkIR3MIo)
	});

	it('test for Help', async () => {
		const _Helpg3Pj0Q = new Help()
		const _cmdJ9eO0uk = null;
		const _sortSubcommandsDbC1G9 = "L8E7tXyri3NPxcfhVGacQtHlu5F3sVff1UaHz6LEbCI7eAPWFyIQNFVo7k3oDiF9cpwXdW5elF4bk7Qqpy";
		const _returnValuemT85dV = true;
		const _subcommandTermYG4tJmg = () => { return _returnValuemT85dV };
		const _helperGdJZIfY = {
			"sortSubcommands": _sortSubcommandsDbC1G9,
		"subcommandTerm": _subcommandTermYG4tJmg
	}
		const _returnValueJjMiliU = await _Helpg3Pj0Q.longestSubcommandTermLength(_cmdJ9eO0uk, _helperGdJZIfY)
		const _argChoicesvMLgsV = {
		
	}
		const _negateRguGt80 = "zGgzcOdUsrh3BVfLcTVCBgwj";
		const _defaultValueWo3Mn6O = undefined;
		const _defaultValueDescriptionRKbZ7Sf = 0.04893812954120591;
		const _envVardStUviP = undefined;
		const _descriptionOqzadR0 = "XDCH9B9doB5Qll95MMANiLGzwCC4rq1nDksaWxqqsxaG";
		const _optionqDFXb2n = {
			"argChoices": _argChoicesvMLgsV,
		"negate": _negateRguGt80,
		"defaultValue": _defaultValueWo3Mn6O,
		"defaultValueDescription": _defaultValueDescriptionRKbZ7Sf,
		"envVar": _envVardStUviP,
		"description": _descriptionOqzadR0
	}
		const _returnValueEOyrRNv = await _Helpg3Pj0Q.optionDescription(_optionqDFXb2n)
	});

	it('test for Help', async () => {
		const _HelpVxVkeUV = new Help()
		const _argChoicesJsiVPRW = undefined;
		const _negateoh0Hlt7 = "5NUWQK7NVGAk";
		const _defaultValueollJkwI = undefined;
		const _defaultValueDescriptionYsOU2g5 = null;
		const _envVarLNGGD2M = undefined;
		const _descriptionVnXTs6U = 5.352155973203301;
		const _optionvdnRiqa = {
			"argChoices": _argChoicesJsiVPRW,
		"negate": _negateoh0Hlt7,
		"defaultValue": _defaultValueollJkwI,
		"defaultValueDescription": _defaultValueDescriptionYsOU2g5,
		"envVar": _envVarLNGGD2M,
		"description": _descriptionVnXTs6U
	}
		const _returnValuezdn6Uiu = await _HelpVxVkeUV.optionDescription(_optionvdnRiqa)
		const _arrayValuewvMMnOs = false;
		const _returnValueUJxhdjD = [_arrayValuewvMMnOs]
		const _cmdbGiS1HI = () => { return _returnValueUJxhdjD };
		const _sortSubcommandsE41tnzc = 5.401909458980889;
		const _returnValuevMr9ZdJ = false;
		const _subcommandTermkP0yoh = () => { return _returnValuevMr9ZdJ };
		const _helperMzMUMIB = {
			"sortSubcommands": _sortSubcommandsE41tnzc,
		"subcommandTerm": _subcommandTermkP0yoh
	}
		const _returnValuecGlsF0O = await _HelpVxVkeUV.formatHelp(_cmdbGiS1HI, _helperMzMUMIB)
		const _returnValuemPiFcF = null;
		const _descriptionN4kiozG = () => { return _returnValuemPiFcF };
		const _cmdUbjTwC1 = {
			"description": _descriptionN4kiozG
	}
		const _returnValueXCHpYgD = await _HelpVxVkeUV.subcommandDescription(_cmdUbjTwC1)
		const _returnValueX6LNxTs = 2.933924583941634;
		const _matchEiNGatO = () => { return _returnValueX6LNxTs };
		const _substrcpuhfTt = 6.386031533426404;
		const _strXsFVvi1 = {
			"match": _matchEiNGatO,
		"substr": _substrcpuhfTt
	}
		const _widthNeKzOr = -0.9539188426870098;
		const _returnValueuQhjsN = undefined;
		const _arrayValueSad7DC = () => { return _returnValueuQhjsN };
		const _arrayValueI11r1Z = 1.2309069094528766;
		const _arrayValueGYECtMW = "V6U8oL";
		const _indentR7eX60i = [_arrayValueSad7DC, _arrayValueI11r1Z, _arrayValueGYECtMW]
		const _minColumnWidthi9khHOJ = -5.880814143452401;
		const _returnValuesp2YKXh = await _HelpVxVkeUV.wrap(_strXsFVvi1, _widthNeKzOr, _indentR7eX60i, _minColumnWidthi9khHOJ)
		const __namepenw0Qy = 4.7511958630162106;
		const __aliasesHXqKsEI = {
		
	}
		const _parentIRp1Dnu = {
		
	}
		const _returnValueEAUjTxm = -9.972964139621185;
		const _usageV0Hg3Fy = () => { return _returnValueEAUjTxm };
		const _cmdc8fbJp = {
			"_name": __namepenw0Qy,
		"_aliases": __aliasesHXqKsEI,
		"parent": _parentIRp1Dnu,
		"usage": _usageV0Hg3Fy
	}
		const _returnValuedZRJyGU = await _HelpVxVkeUV.commandUsage(_cmdc8fbJp)
	});

	it('test for Help', async () => {
		const _HelpXSvOXgl = new Help()
		const _arrayValueRdfUast = {
		
	}
		const _arrayValuefMLiAGz = 4.048661911444318;
		const _returnValuelASwOJn = [_arrayValueRdfUast, _arrayValuefMLiAGz]
		const _descriptionw72urxQ = () => { return _returnValuelASwOJn };
		const _cmdmxrGUqC = {
			"description": _descriptionw72urxQ
	}
		const _returnValuesENnO1a = await _HelpXSvOXgl.commandDescription(_cmdmxrGUqC)
		const _arrayValueWjMeWcQ = null;
		const _returnValueqXEnOBV = [_arrayValueWjMeWcQ]
		const _descriptionaRSDYEb = () => { return _returnValueqXEnOBV };
		const _cmdNOZTRIc = {
			"description": _descriptionaRSDYEb
	}
		const _returnValuetvtzSiu = await _HelpXSvOXgl.commandDescription(_cmdNOZTRIc)
		const _returnValuetUuipkj = "oemmmaErePW6la3xlx3adC0B3YcoQEMoQhvBHnMGBg3aPf5NYdQUDS7JJeYGuQJmru";
		const _arrayValueblJyGc = () => { return _returnValuetUuipkj };
		const _returnValuef2nPToe = [_arrayValueblJyGc]
		const _nameMfqUGJr = () => { return _returnValuef2nPToe };
		const _argumentUcHE8os = {
			"name": _nameMfqUGJr
	}
		const _returnValueqbuKZQk = await _HelpXSvOXgl.argumentTerm(_argumentUcHE8os)
		const _arrayValueZ6bQKRN = true;
		const _arrayValueqNFyagS = false;
		const _arrayValueXCq2OL = 8.778420155109046;
		const _returnValueVzkMngE = [_arrayValueZ6bQKRN, _arrayValueqNFyagS, _arrayValueXCq2OL]
		const _nameG6DBsup = () => { return _returnValueVzkMngE };
		const _argumentFFZqeRJ = {
			"name": _nameG6DBsup
	}
		const _returnValuebBtmAhN = await _HelpXSvOXgl.argumentTerm(_argumentFFZqeRJ)
	});

	it('test for Help', async () => {
		const _HelpzZmMPJV = new Help()
		const __argsiauxro = {
		
	}
		const __nameekcKbzm = true;
		const __aliasesnmSU6M9 = {
		
	}
		const _optionssFfLU9C = {
		
	}
		const _cmdw0y5Jrp = {
			"_args": __argsiauxro,
		"_name": __nameekcKbzm,
		"_aliases": __aliasesnmSU6M9,
		"options": _optionssFfLU9C
	}
		const _returnValueuQW3Qcx = await _HelpzZmMPJV.subcommandTerm(_cmdw0y5Jrp)
	});

	it('test for Help', async () => {
		const _HelpE6zVDxV = new Help()
		const _arrayValuenNYsRA = "n6QKIni2jTe4EF";
		const _flagsR4bvyKA = [_arrayValuenNYsRA]
		const _optionHJVvweu = {
			"flags": _flagsR4bvyKA
	}
		const _returnValueOWB7BOd = await _HelpE6zVDxV.optionTerm(_optionHJVvweu)
		const __argsDescriptionRxoMeAN = {
		
	}
		const __argsP1Aa42L = {
		
	}
		const _cmdooMsDfo = {
			"_argsDescription": __argsDescriptionRxoMeAN,
		"_args": __argsP1Aa42L
	}
		const _returnValuezNaZq4G = await _HelpE6zVDxV.visibleArguments(_cmdooMsDfo)
	});

	it('test for Help', async () => {
		const _HelpIA0SReb = new Help()
		const __namenGK0NQ = {
		
	}
		const __aliasesUZ74psl = {
		
	}
		const _parentURKR5wt = {
		
	}
		const _returnValueBFLYSV2 = null;
		const _usageEbld7ej = () => { return _returnValueBFLYSV2 };
		const _cmdTAIiRXE = {
			"_name": __namenGK0NQ,
		"_aliases": __aliasesUZ74psl,
		"parent": _parentURKR5wt,
		"usage": _usageEbld7ej
	}
		const _returnValueaSJ6482 = await _HelpIA0SReb.commandUsage(_cmdTAIiRXE)
		const _argChoicesmFQ1l2T = {
		
	}
		const _arrayValuegd8etFa = 5.049053735412201;
		const _arrayValueTs9wwiP = -0.2332683507908797;
		const _arrayValueTjGmHod = null;
		const _negateWDPeLj = [_arrayValuegd8etFa, _arrayValueTs9wwiP, _arrayValueTjGmHod]
		const _defaultValuepyFl4a = undefined;
		const _defaultValueDescriptionhMcJYq = null;
		const _envVarlVLraa = undefined;
		const _descriptionSPRPrFr = null;
		const _optionYLMchEI = {
			"argChoices": _argChoicesmFQ1l2T,
		"negate": _negateWDPeLj,
		"defaultValue": _defaultValuepyFl4a,
		"defaultValueDescription": _defaultValueDescriptionhMcJYq,
		"envVar": _envVarlVLraa,
		"description": _descriptionSPRPrFr
	}
		const _returnValuefKl1xLG = await _HelpIA0SReb.optionDescription(_optionYLMchEI)
		const _returnValueJ7HzwbN = "I8cyjkblJ7JyfRr7gHRPQyD7pVHhnv9RprFLv9aaSdizsTvSoj4";
		const _matchlQdAL53 = () => { return _returnValueJ7HzwbN };
		const _returnValueXV0aVy = 1.0979523981440114;
		const _substroIKuEEZ = () => { return _returnValueXV0aVy };
		const _struA1z0ud = {
			"match": _matchlQdAL53,
		"substr": _substroIKuEEZ
	}
		const _widthkXYFcHt = "9Pr68H9mH4ik4L3mr6XcDSJqHKcGcO25VITsJTQTOlGfgFsU3";
		const _indentTQMZ4Mp = 0.4451924185973333;
		const _minColumnWidthLAUMLH8 = 8.356881592931153;
		const _returnValueFXggNt = await _HelpIA0SReb.wrap(_struA1z0ud, _widthkXYFcHt, _indentTQMZ4Mp, _minColumnWidthLAUMLH8)
		const _cmdKpqkaz = {
		
	}
		const _returnValueyDvHBkT = []
		const _visibleOptionsZuBfW7n = () => { return _returnValueyDvHBkT };
		const _returnValuehhwKtTI = {
		
	}
		const _optionTermr4LSXH = () => { return _returnValuehhwKtTI };
		const _helperXmNPx51 = {
			"visibleOptions": _visibleOptionsZuBfW7n,
		"optionTerm": _optionTermr4LSXH
	}
		const _returnValueAUs8mKw = await _HelpIA0SReb.longestOptionTermLength(_cmdKpqkaz, _helperXmNPx51)
		const __argsDescriptionFQL5Cjx = {
		
	}
		const __argsgnuaTzF = {
		
	}
		const _cmdiugoLBR = {
			"_argsDescription": __argsDescriptionFQL5Cjx,
		"_args": __argsgnuaTzF
	}
		const _returnValueHmlJ17T = await _HelpIA0SReb.visibleArguments(_cmdiugoLBR)
	});

	it('test for Help', async () => {
		const _HelpoU3P0fs = new Help()
		const _cmdwnxjKLy = 8.419094314316613;
		const _arrayValuecpoFB8B = null;
		const _arrayValuewthtyvt = false;
		const _arrayValuebGuLWpd = false;
		const _arrayValuehIk6ZTt = "he7AXAcNLKsyYaa3VlywbbQ1Cwen8QgCgXbXK54NQLxLd5MNj7E2YVhmSYlQFldh";
		const _arrayValueWiuGPb = [_arrayValuehIk6ZTt]
		const _arrayValueED9fVc = [_arrayValuewthtyvt, _arrayValuebGuLWpd, _arrayValueWiuGPb]
		const _arrayValuemm2FITt = "AhvdZjA3W2uZNztCKyprGINkEIH3N8T5l94uhqx6oTn5uGeSF4c1SnhzQveM6Ycb5t9VD4S6WqvtGkx";
		const _returnValueXKs9tZH = [_arrayValuecpoFB8B, _arrayValueED9fVc, _arrayValuemm2FITt]
		const _visibleArgumentsRRPt1nF = () => { return _returnValueXKs9tZH };
		const _arrayValuesiZpfD7 = undefined;
		const _returnValuesnI9u9v = [_arrayValuesiZpfD7]
		const _argumentTermLLZ0zur = () => { return _returnValuesnI9u9v };
		const _helpervD6hajt = {
			"visibleArguments": _visibleArgumentsRRPt1nF,
		"argumentTerm": _argumentTermLLZ0zur
	}
		const _returnValueLhHMbp = await _HelpoU3P0fs.longestArgumentTermLength(_cmdwnxjKLy, _helpervD6hajt)
		const _cmdXuSZODm = undefined;
		const _returnValueAbmW7O3 = true;
		const _visibleArgumentshoTkgph = () => { return _returnValueAbmW7O3 };
		const _returnValuedGju26o = -5.763728286651932;
		const _argumentTerm6wwDg8 = () => { return _returnValuedGju26o };
		const _helperhr44tMn = {
			"visibleArguments": _visibleArgumentshoTkgph,
		"argumentTerm": _argumentTerm6wwDg8
	}
		const _returnValuev1qF5MH = await _HelpoU3P0fs.longestArgumentTermLength(_cmdXuSZODm, _helperhr44tMn)
		const _returnValueRrDLG02 = {
		
	}
		const _matchDdQek4a = () => { return _returnValueRrDLG02 };
		const _returnValuehRe3rEl = null;
		const _substrqIOGX2 = () => { return _returnValuehRe3rEl };
		const _strd36Dlaz = {
			"match": _matchDdQek4a,
		"substr": _substrqIOGX2
	}
		const _widthfzi8Vn = 1.5796135110100895;
		const _indenthahaPXh = -0.67451020369902;
		const _minColumnWidthq8nGw9 = -3.4134464480227065;
		const _returnValueveSvyVO = await _HelpoU3P0fs.wrap(_strd36Dlaz, _widthfzi8Vn, _indenthahaPXh, _minColumnWidthq8nGw9)
	});

	it('test for Help', async () => {
		const _HelpCcjkVoG = new Help()
		const _returnValuedEaSWc = null;
		const _nameGvCQyyC = () => { return _returnValuedEaSWc };
		const _argumentxBjo0GQ = {
			"name": _nameGvCQyyC
	}
		const _returnValueGIm7gOM = await _HelpCcjkVoG.argumentTerm(_argumentxBjo0GQ)
		const _argChoicesh0lUy0k = {
		
	}
		const _negateH1ravv = null;
		const _defaultValuecstqt6E = undefined;
		const _returnValuerVnChWm = null;
		const _defaultValueDescriptionoYvOUuh = () => { return _returnValuerVnChWm };
		const _envVarrDUinSU = undefined;
		const _descriptionYzGiOZY = true;
		const _optioncOOaNKP = {
			"argChoices": _argChoicesh0lUy0k,
		"negate": _negateH1ravv,
		"defaultValue": _defaultValuecstqt6E,
		"defaultValueDescription": _defaultValueDescriptionoYvOUuh,
		"envVar": _envVarrDUinSU,
		"description": _descriptionYzGiOZY
	}
		const _returnValueJA8LnWU = await _HelpCcjkVoG.optionDescription(_optioncOOaNKP)
	});

	it('test for Help', async () => {
		const _HelpxaI7710 = new Help()
		const _argumentx3mEUED = true;
		const _returnValuee1IVdVR = await _HelpxaI7710.argumentDescription(_argumentx3mEUED)
		const __argsDescriptiongxDgNIe = {
		
	}
		const __argsdRvvEAE = {
		
	}
		const _cmdp83F1M = {
			"_argsDescription": __argsDescriptiongxDgNIe,
		"_args": __argsdRvvEAE
	}
		const _returnValueBytE110 = await _HelpxaI7710.visibleArguments(_cmdp83F1M)
		const _optionszgItup = {
		
	}
		const __hasHelpOptionD5LcKMl = -8.554535430657916;
		const __helpShortFlagRkt8jx = {
		
	}
		const _arrayValuesDGF0f9 = 3.614840102119903;
		const _arrayValueGcwj7XG = false;
		const _arrayValueIAjPMbU = null;
		const _returnValueH0sOG5B = [_arrayValuesDGF0f9, _arrayValueGcwj7XG, _arrayValueIAjPMbU]
		const __findOptionh7Q7hq = () => { return _returnValueH0sOG5B };
		const __helpLongFlagbKGHWyf = -6.845392534482569;
		const _arrayValuevDWhP4 = true;
		const _returnValuePeV7sLc = [_arrayValuevDWhP4]
		const _createOptionYCMbBI = () => { return _returnValuePeV7sLc };
		const _arrayValueDU9DPvB = 3.7107738688649334;
		const _arrayValueQf5vVaI = "D55wCgh8lYhXIKRN8bEL2y7FvmkXUfRGOU0QnPrWDZAEDbKMZ";
		const _arrayValuefdQfB82 = [_arrayValueDU9DPvB, _arrayValueQf5vVaI]
		const _arrayValueHWicKja = undefined;
		const __helpDescriptionCryPSNT = [_arrayValuefdQfB82, _arrayValueHWicKja]
		const __helpFlagsD9E1BB = true;
		const _cmdf7R891W = {
			"options": _optionszgItup,
		"_hasHelpOption": __hasHelpOptionD5LcKMl,
		"_helpShortFlag": __helpShortFlagRkt8jx,
		"_findOption": __findOptionh7Q7hq,
		"_helpLongFlag": __helpLongFlagbKGHWyf,
		"createOption": _createOptionYCMbBI,
		"_helpDescription": __helpDescriptionCryPSNT,
		"_helpFlags": __helpFlagsD9E1BB
	}
		const _returnValueQhChB0C = await _HelpxaI7710.visibleOptions(_cmdf7R891W)
	});

	it('test for Help', async () => {
		const _HelpStaywBy = new Help()
		const _argChoiceshthpYb1 = null;
		const _returnValueHymJpow = false;
		const _returnValuencR7aU = () => { return _returnValueHymJpow };
		const _negateCvNU7ap = () => { return _returnValuencR7aU };
		const _defaultValuegMtCr34 = undefined;
		const _defaultValueDescriptionMbDIcy = "g0wENDukTahYQHtATa";
		const _envVarwzNCo2s = "itaWI6g97zPiqBUfpbXwJUr6qXzdebI9W9tH9sWoxyzdJiheBVlmVgsRvOwL3xNB1BR3r9gfz9QG888339QZ1fS";
		const _returnValuezWuosnA = undefined;
		const _descriptionLSv2PQe = () => { return _returnValuezWuosnA };
		const _optionMvJJ2RP = {
			"argChoices": _argChoiceshthpYb1,
		"negate": _negateCvNU7ap,
		"defaultValue": _defaultValuegMtCr34,
		"defaultValueDescription": _defaultValueDescriptionMbDIcy,
		"envVar": _envVarwzNCo2s,
		"description": _descriptionLSv2PQe
	}
		const _returnValueRNGgL0 = await _HelpStaywBy.optionDescription(_optionMvJJ2RP)
		const __nameNHjYxuZ = {
		
	}
		const __aliasesLl8HQ45 = {
		
	}
		const _parentNMdTzsy = {
		
	}
		const _returnValuev0ksN0c = false;
		const _usageieTxaW = () => { return _returnValuev0ksN0c };
		const _cmdK5NGPd = {
			"_name": __nameNHjYxuZ,
		"_aliases": __aliasesLl8HQ45,
		"parent": _parentNMdTzsy,
		"usage": _usageieTxaW
	}
		const _returnValueXCoubbk = await _HelpStaywBy.commandUsage(_cmdK5NGPd)
		const _arrayValued1CySX = null;
		const _arrayValuesTHwuFP = false;
		const _cmdWpvAUWm = [_arrayValued1CySX, _arrayValuesTHwuFP]
		const _returnValuedqJZWFm = await _HelpStaywBy.subcommandDescription(_cmdWpvAUWm)
	});

	it('test for Help', async () => {
		const _HelpFv6QGek = new Help()
		const _returnValueCZlvyTI = null;
		const _matchzg6XEww = () => { return _returnValueCZlvyTI };
		const _returnValuecQc3Jtv = true;
		const _substrv082uQS = () => { return _returnValuecQc3Jtv };
		const _strYp9i6Rk = {
			"match": _matchzg6XEww,
		"substr": _substrv082uQS
	}
		const _widthkcR80v9 = 4.233687245830746;
		const _indentREPK7gT = 1.35267833388456;
		const _minColumnWidthHWUIq6 = 8.362131903359735;
		const _returnValueQnMn4T9 = await _HelpFv6QGek.wrap(_strYp9i6Rk, _widthkcR80v9, _indentREPK7gT, _minColumnWidthHWUIq6)
		const __argsvtXmAXM = {
		
	}
		const __nameHArHKjc = 4.837480745943058;
		const __aliasesUWGIlUH = {
		
	}
		const _optionsdq4y0o = {
		
	}
		const _cmdLYJ5K20 = {
			"_args": __argsvtXmAXM,
		"_name": __nameHArHKjc,
		"_aliases": __aliasesUWGIlUH,
		"options": _optionsdq4y0o
	}
		const _returnValueqfX6yL = await _HelpFv6QGek.subcommandTerm(_cmdLYJ5K20)
		const _returnValueLuQ12i = "YUR";
		const _descriptionjyXY9p2 = () => { return _returnValueLuQ12i };
		const _cmdWiH6RF9 = {
			"description": _descriptionjyXY9p2
	}
		const _returnValuesBIdbc = await _HelpFv6QGek.subcommandDescription(_cmdWiH6RF9)
		const _optionMvkg34v = true;
		const _returnValueqoAmDmq = await _HelpFv6QGek.optionDescription(_optionMvkg34v)
	});

	it('test for Help', async () => {
		const _HelpskWlzA = new Help()
		const _arrayValueUOc0lNw = false;
		const _arrayValueRbs2q7 = {
		
	}
		const _arrayValuev5SFYkl = null;
		const _argChoicespnIbo64 = [_arrayValueUOc0lNw, _arrayValueRbs2q7, _arrayValuev5SFYkl]
		const _defaultValueYiNuy8n = []
		const _defaultValueDescriptionoy6XYP = null;
		const _arrayValueImyu3IH = -6.081940251400604;
		const _descriptionigeJ6Bg = [_arrayValueImyu3IH]
		const _argumentjM0igxT = {
			"argChoices": _argChoicespnIbo64,
		"defaultValue": _defaultValueYiNuy8n,
		"defaultValueDescription": _defaultValueDescriptionoy6XYP,
		"description": _descriptionigeJ6Bg
	}
		const _returnValueVTyhWih = await _HelpskWlzA.argumentDescription(_argumentjM0igxT)
		const _returnValueAlHnoZE = true;
		const _namemA9PObO = () => { return _returnValueAlHnoZE };
		const _argumentIQs5yWe = {
			"name": _namemA9PObO
	}
		const _returnValueGRqjjK = await _HelpskWlzA.argumentTerm(_argumentIQs5yWe)
		const _flagso7yCpn5 = null;
		const _optionwUjIwVM = {
			"flags": _flagso7yCpn5
	}
		const _returnValueoChtfdf = await _HelpskWlzA.optionTerm(_optionwUjIwVM)
		const _cmdTb1lP6L = null;
		const _sortSubcommandsuipNdB6 = null;
		const _returnValueysjChh9 = undefined;
		const _subcommandTermEsQkDJ8 = () => { return _returnValueysjChh9 };
		const _helperv4FLcST = {
			"sortSubcommands": _sortSubcommandsuipNdB6,
		"subcommandTerm": _subcommandTermEsQkDJ8
	}
		const _returnValueSkb6aln = await _HelpskWlzA.formatHelp(_cmdTb1lP6L, _helperv4FLcST)
	});

	it('test for Help', async () => {
		const _HelpDq7c2cD = new Help()
		const __nameXGREZ9i = {
		
	}
		const __aliasesNwR5oAN = "Lpo8vspdytPPI9WmVT";
		const _parentOQIxgiv = {
		
	}
		const _returnValueLl4qA0c = true;
		const _usagenGiMYsu = () => { return _returnValueLl4qA0c };
		const _cmdUXEc4TM = {
			"_name": __nameXGREZ9i,
		"_aliases": __aliasesNwR5oAN,
		"parent": _parentOQIxgiv,
		"usage": _usagenGiMYsu
	}
		const _returnValueUSB6AQP = await _HelpDq7c2cD.commandUsage(_cmdUXEc4TM)
		const _returnValueb3q0Op = {
		
	}
		const _descriptionBmI8eN = () => { return _returnValueb3q0Op };
		const _cmdH6iS8JA = {
			"description": _descriptionBmI8eN
	}
		const _returnValueocqFuqU = await _HelpDq7c2cD.subcommandDescription(_cmdH6iS8JA)
		const __argsvUUrpw = {
		
	}
		const __namet1yEiN0 = -7.176831724212392;
		const __aliasesyrh06o = {
		
	}
		const _optionsImO6e1d = {
		
	}
		const _cmddVK1hX8 = {
			"_args": __argsvUUrpw,
		"_name": __namet1yEiN0,
		"_aliases": __aliasesyrh06o,
		"options": _optionsImO6e1d
	}
		const _returnValuefr214Dc = await _HelpDq7c2cD.subcommandTerm(_cmddVK1hX8)
		const _arrayValuejBfSFCs = undefined;
		const _returnValuecCgb5rl = undefined;
		const _arrayValuexVSj2J0 = () => { return _returnValuecCgb5rl };
		const _arrayValueT6C2DEq = 2.2956277982804014;
		const _cmdUXXY0C5 = [_arrayValuejBfSFCs, _arrayValuexVSj2J0, _arrayValueT6C2DEq]
		const _longestOptionTermLengthHnler7 = undefined;
		const _returnValuetnmtR4 = false;
		const _longestSubcommandTermLengthOGZ2BR7 = () => { return _returnValuetnmtR4 };
		const _returnValueZVFBjnn = "rO96xiHAf24B5aLCPTouUcSwcsdmSKlNAzUD2oNIToPV2Rk8QG54Fka4hAJLDOxq0Fyjt77IiMwa77nUVcS9dRYNgiPb7PzRO";
		const _longestArgumentTermLength5nASBd = () => { return _returnValueZVFBjnn };
		const _helperWX37BFy = {
			"longestOptionTermLength": _longestOptionTermLengthHnler7,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOGZ2BR7,
		"longestArgumentTermLength": _longestArgumentTermLength5nASBd
	}
		const _returnValueFmrLXQn = await _HelpDq7c2cD.padWidth(_cmdUXXY0C5, _helperWX37BFy)
	});

	it('test for Help', async () => {
		const _HelpB1B654F = new Help()
		const _flagsYzeQQaD = undefined;
		const _optionFKOFQJp = {
			"flags": _flagsYzeQQaD
	}
		const _returnValueSGFld0g = await _HelpB1B654F.optionTerm(_optionFKOFQJp)
		const _returnValueGj1EOXs = null;
		const _descriptiondoJMNlL = () => { return _returnValueGj1EOXs };
		const _cmdDqCIWx6 = {
			"description": _descriptiondoJMNlL
	}
		const _returnValueMmvWPdY = await _HelpB1B654F.commandDescription(_cmdDqCIWx6)
		const _returnValue1jvAdr = null;
		const _matchdusgmFp = () => { return _returnValue1jvAdr };
		const _returnValueyWAGpR = null;
		const _substregblTW1 = () => { return _returnValueyWAGpR };
		const _str5pUpnb = {
			"match": _matchdusgmFp,
		"substr": _substregblTW1
	}
		const _widthgZGV1fb = null;
		const _indentUMiPvcw = -2.608753989341226;
		const _minColumnWidthRo0vr6z = -2.783585809656163;
		const _returnValueWHuVV4T = await _HelpB1B654F.wrap(_str5pUpnb, _widthgZGV1fb, _indentUMiPvcw, _minColumnWidthRo0vr6z)
	});

	it('test for Help', async () => {
		const _HelpwGw2nx7 = new Help()
		const __argsGh72kuu = []
		const __namezuJrZ8d = -3.2755016156987917;
		const __aliasesab83ykL = {
		
	}
		const _optionsgi0EOPj = {
		
	}
		const _cmdoxElHQ = {
			"_args": __argsGh72kuu,
		"_name": __namezuJrZ8d,
		"_aliases": __aliasesab83ykL,
		"options": _optionsgi0EOPj
	}
		const _returnValueuDjbUeI = await _HelpwGw2nx7.subcommandTerm(_cmdoxElHQ)
		const _cmdvUPe6J8 = null;
		const _returnValueoWYbkhl = true;
		const _visibleArgumentsVPvXWkC = () => { return _returnValueoWYbkhl };
		const _returnValuezIpVVXc = "b3Slpu2trXPyMNIaCZbrSsRsRqPLOM2MaWqebVVDfzmfEJM2p9DLU4K4o3NQd9f4";
		const _returnValued7f41pl = () => { return _returnValuezIpVVXc };
		const _argumentTermeFudwoH = () => { return _returnValued7f41pl };
		const _helperxoFrSAQ = {
			"visibleArguments": _visibleArgumentsVPvXWkC,
		"argumentTerm": _argumentTermeFudwoH
	}
		const _returnValuem5K1ClQ = await _HelpwGw2nx7.longestArgumentTermLength(_cmdvUPe6J8, _helperxoFrSAQ)
		const _flagsFJdfXiy = "rC0ce1vsV99TfgKQbooMIcu96gIvDy4CCi766nUxK";
		const _optionHmcYRus = {
			"flags": _flagsFJdfXiy
	}
		const _returnValueHJolrG2 = await _HelpwGw2nx7.optionTerm(_optionHmcYRus)
		const __argsI4pghYd = {
		
	}
		const __namelcFKT5b = 0.1805136998771104;
		const __aliasesNN23ZiL = {
		
	}
		const _optionsttLTFv = {
		
	}
		const _cmdLCSENcy = {
			"_args": __argsI4pghYd,
		"_name": __namelcFKT5b,
		"_aliases": __aliasesNN23ZiL,
		"options": _optionsttLTFv
	}
		const _returnValueIL78j2v = await _HelpwGw2nx7.subcommandTerm(_cmdLCSENcy)
	});

	it('test for Help', async () => {
		const _HelpSPhlSuZ = new Help()
		const _arrayValueATXhBx = "IcXHgR3Y8AXgdRNXHxkfN2YekKE9a9pM0k8gG";
		const _commandsBZUnuNQ = [_arrayValueATXhBx]
		const _returnValuekzI6Dpa = undefined;
		const __hasImplicitHelpCommandEiAkEXH = () => { return _returnValuekzI6Dpa };
		const __helpCommandnameAndArgsnbh3fk0 = {
		
	}
		const _returnValueiJ3GeYu = "RG7oObCXaH9LH2HgXFphIGmelDc54V8PACHlPAFdeDlnI85qQGP1rIKHtlXM21T32CZ";
		const _createCommandMS79Kcq = () => { return _returnValueiJ3GeYu };
		const __helpCommandDescriptionaj77zLl = undefined;
		const _cmdih6MWKV = {
			"commands": _commandsBZUnuNQ,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandEiAkEXH,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsnbh3fk0,
		"createCommand": _createCommandMS79Kcq,
		"_helpCommandDescription": __helpCommandDescriptionaj77zLl
	}
		const _returnValuejXd1U6y = await _HelpSPhlSuZ.visibleCommands(_cmdih6MWKV)
		const __namepKKHMao = {
		
	}
		const __aliaseslTx7Qfq = {
		
	}
		const _parentk55Dtzm = null;
		const _returnValuePwgV1zR = 0.49786307402049346;
		const _usageOUZlwEF = () => { return _returnValuePwgV1zR };
		const _cmdFEd4rfX = {
			"_name": __namepKKHMao,
		"_aliases": __aliaseslTx7Qfq,
		"parent": _parentk55Dtzm,
		"usage": _usageOUZlwEF
	}
		const _returnValueY67eAqc = await _HelpSPhlSuZ.commandUsage(_cmdFEd4rfX)
		const _cmdVMRWtMn = null;
		const _returnValueXcPU08i = "RQeyda8Kwvxdxi9ss5vOewxTj2Ch31Txdxsy2kMm";
		const _visibleArgumentsKiWIHGv = () => { return _returnValueXcPU08i };
		const _returnValueEB3CPs = "lRgIzgrvc1DIu8IYIb8VkyypI9MTMdTK2HmsGWng";
		const _argumentTermDj0LcLB = () => { return _returnValueEB3CPs };
		const _helpervVDTkez = {
			"visibleArguments": _visibleArgumentsKiWIHGv,
		"argumentTerm": _argumentTermDj0LcLB
	}
		const _returnValueKeSAc0x = await _HelpSPhlSuZ.longestArgumentTermLength(_cmdVMRWtMn, _helpervVDTkez)
	});
})