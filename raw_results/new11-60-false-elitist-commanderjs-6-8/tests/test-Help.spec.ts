export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelprPonOlC = new Help()
		const _cmdzefpt45 = "GF12A5Cf0wc3BKICQDFiDDoimyGMiECrE";
		const _helperQMMub0i = undefined;
		const _returnValueOflJksn = await _HelprPonOlC.longestOptionTermLength(_cmdzefpt45, _helperQMMub0i)
	});

	it('test for Help', async () => {
		const _HelpcX8fw1l = new Help()
		const _optionsxQAD7UF = {
		
	}
		const __hasHelpOptionChIXiXl = null;
		const __helpShortFlagIvVbj8p = true;
		const _returnValueJrDORUS = "aIuHKKa58m74uNkSAoE3n2nCQn2qjBKm2Ylw39u4VFeJNTDscLyC3zDPfqB";
		const __findOptionwkmuL2B = () => { return _returnValueJrDORUS };
		const __helpLongFlagdDcqJO = false;
		const _returnValueB7Ny3op = null;
		const _createOptionXVafy19 = () => { return _returnValueB7Ny3op };
		const _arrayValueObKeqeZ = undefined;
		const __helpDescription4UAvLM = [_arrayValueObKeqeZ]
		const __helpFlagsexnphIl = null;
		const _cmdU6Qw1tm = {
			"options": _optionsxQAD7UF,
		"_hasHelpOption": __hasHelpOptionChIXiXl,
		"_helpShortFlag": __helpShortFlagIvVbj8p,
		"_findOption": __findOptionwkmuL2B,
		"_helpLongFlag": __helpLongFlagdDcqJO,
		"createOption": _createOptionXVafy19,
		"_helpDescription": __helpDescription4UAvLM,
		"_helpFlags": __helpFlagsexnphIl
	}
		const _returnValuedOrT5N8 = await _HelpcX8fw1l.visibleOptions(_cmdU6Qw1tm)
		const _cmdxurS2v3 = null;
		const _sortSubcommandsMPVqiRc = "kTtM4tK43ht6FzOIHbTiKGvR6K6jKM0s6pyphBlFuAMsooyU9BUHPoYu9lalXk";
		const _returnValueI7k5T6o = undefined;
		const _subcommandTermTnurLLM = () => { return _returnValueI7k5T6o };
		const _helperGkk9DdR = {
			"sortSubcommands": _sortSubcommandsMPVqiRc,
		"subcommandTerm": _subcommandTermTnurLLM
	}
		const _returnValuey4GtKry = await _HelpcX8fw1l.longestSubcommandTermLength(_cmdxurS2v3, _helperGkk9DdR)
		const _cmdLfkvgku = -4.430820988359574;
		const _sortSubcommandsrSKZnwR = true;
		const _returnValueXDSKxla = undefined;
		const _returnValueqi76bLO = () => { return _returnValueXDSKxla };
		const _subcommandTermBPqNQ27 = () => { return _returnValueqi76bLO };
		const _helperSVBG8nt = {
			"sortSubcommands": _sortSubcommandsrSKZnwR,
		"subcommandTerm": _subcommandTermBPqNQ27
	}
		const _returnValuepCC0tm3 = await _HelpcX8fw1l.formatHelp(_cmdLfkvgku, _helperSVBG8nt)
	});

	it('test for Help', async () => {
		const _HelpM6uKdI1 = new Help()
		const _arrayValuenvdlgqk = null;
		const _arrayValueIoe5Zxo = null;
		const _argumentxIbFG18 = [_arrayValuenvdlgqk, _arrayValueIoe5Zxo]
		const _returnValueJza86bf = await _HelpM6uKdI1.argumentTerm(_argumentxIbFG18)
		const _returnValuexQWRiFy = undefined;
		const _descriptionPvQlH9H = () => { return _returnValuexQWRiFy };
		const _cmdcmChNqg = {
			"description": _descriptionPvQlH9H
	}
		const _returnValuerPTXYBC = await _HelpM6uKdI1.commandDescription(_cmdcmChNqg)
		const _flagsLDaBpD4 = null;
		const _optionZEwPd59 = {
			"flags": _flagsLDaBpD4
	}
		const _returnValueplWv66f = await _HelpM6uKdI1.optionTerm(_optionZEwPd59)
	});

	it('test for Help', async () => {
		const _HelpOjSMy2a = new Help()
		const _descriptiondXikOdv = null;
		const _cmdtcN1VY = {
			"description": _descriptiondXikOdv
	}
		const _returnValueuwdcKF7 = await _HelpOjSMy2a.commandDescription(_cmdtcN1VY)
	});

	it('test for Help', async () => {
		const _HelpF9IuUrX = new Help()
		const _returnValueXa3wT9T = false;
		const _matchStxv1ma = () => { return _returnValueXa3wT9T };
		const _returnValuerXWHGeD = {
		
	}
		const _substrXxEeCmj = () => { return _returnValuerXWHGeD };
		const _strxs1bqlm = {
			"match": _matchStxv1ma,
		"substr": _substrXxEeCmj
	}
		const _widthI7eQ2aJ = 0.6367143012131127;
		const _indentz6eoNY = 3.541788115267593;
		const _minColumnWidthbKf3J7f = 8.368887747545866;
		const _returnValued12eHVI = await _HelpF9IuUrX.wrap(_strxs1bqlm, _widthI7eQ2aJ, _indentz6eoNY, _minColumnWidthbKf3J7f)
		const _argumentdCksCmD = -5.296017662977201;
		const _returnValuel0dRZBF = await _HelpF9IuUrX.argumentDescription(_argumentdCksCmD)
		const _optionsiqSrJUV = {
		
	}
		const _returnValueMM4luTb = "qbDtUFMRhckofQjmiAcCEwcRrFE7eT6yQQ2lJ";
		const __hasHelpOptionLL7JBZs = () => { return _returnValueMM4luTb };
		const __helpShortFlagNSKQVA = "vxhBeGueSJzLFq3fLaKXQ4FdOSEdsfDlObWBd6Gl0lS71HAGKKzUFMOxe638wxlDRYNpWnj13kbyfV1nMjViPsSRVd5fJ7YlS6g";
		const _returnValueULivDhp = null;
		const __findOptionjS34xaV = () => { return _returnValueULivDhp };
		const __helpLongFlagzrC5biw = null;
		const _createOptionTm7uN5h = undefined;
		const __helpDescriptionzeFViOO = {
		
	}
		const _arrayValueUt7nRMQ = 9.394153588654529;
		const _arrayValueTkvDaIm = undefined;
		const _arrayValue6Bd3Bt = undefined;
		const _arrayValuehEE4b4l = [_arrayValueTkvDaIm, _arrayValue6Bd3Bt]
		const __helpFlagsXV385Aw = [_arrayValueUt7nRMQ, _arrayValuehEE4b4l]
		const _cmdfQOPIVq = {
			"options": _optionsiqSrJUV,
		"_hasHelpOption": __hasHelpOptionLL7JBZs,
		"_helpShortFlag": __helpShortFlagNSKQVA,
		"_findOption": __findOptionjS34xaV,
		"_helpLongFlag": __helpLongFlagzrC5biw,
		"createOption": _createOptionTm7uN5h,
		"_helpDescription": __helpDescriptionzeFViOO,
		"_helpFlags": __helpFlagsXV385Aw
	}
		const _returnValueIO0axAV = await _HelpF9IuUrX.visibleOptions(_cmdfQOPIVq)
		const _arrayValuexvO2bIG = null;
		const _arrayValueaMg78vM = -6.768406736666711;
		const _cmdDoaRpwa = [_arrayValuexvO2bIG, _arrayValueaMg78vM]
		const _sortSubcommandswUeNBx3 = "NlSYW6uSXacvBh07r1F1LbhgWMNHAAR8jfZpL1u8hUt2teM8NVkdUMHn4JDu3bImQ39q7iMQPh4M";
		const _returnValuemHjEktf = "WmCp3zfvo7WTnx3t7zQqjRLkBGX3MznBzjhwpIf06cYohg7pTrDDDO4s6XlfQpzCP7ubhrv";
		const _subcommandTermzb5fGHO = () => { return _returnValuemHjEktf };
		const _helperROGiC4N = {
			"sortSubcommands": _sortSubcommandswUeNBx3,
		"subcommandTerm": _subcommandTermzb5fGHO
	}
		const _returnValueJZoM4YN = await _HelpF9IuUrX.longestSubcommandTermLength(_cmdDoaRpwa, _helperROGiC4N)
	});

	it('test for Help', async () => {
		const _HelpuVw7Y2G = new Help()
		const __argsDescriptioni9SKyK3 = {
		
	}
		const __argsrwWHsh = {
		
	}
		const _cmdwtOmjSG = {
			"_argsDescription": __argsDescriptioni9SKyK3,
		"_args": __argsrwWHsh
	}
		const _returnValuei50jd3o = await _HelpuVw7Y2G.visibleArguments(_cmdwtOmjSG)
		const _optionsvHrDhIF = {
		
	}
		const __hasHelpOptionFZBAIZ5 = false;
		const __helpShortFlagpk8noCA = null;
		const _returnValuevmX1Pd = -7.420691644483356;
		const __findOptionN3xUc5E = () => { return _returnValuevmX1Pd };
		const __helpLongFlagpw1OHIY = null;
		const _returnValuegdsXJQ = {
		
	}
		const _createOptionHzz2Hu = () => { return _returnValuegdsXJQ };
		const __helpDescriptionJDS8ebF = undefined;
		const __helpFlagshfJE612 = "2R518NNQm7LaFmPOscD";
		const _cmdk2auvc = {
			"options": _optionsvHrDhIF,
		"_hasHelpOption": __hasHelpOptionFZBAIZ5,
		"_helpShortFlag": __helpShortFlagpk8noCA,
		"_findOption": __findOptionN3xUc5E,
		"_helpLongFlag": __helpLongFlagpw1OHIY,
		"createOption": _createOptionHzz2Hu,
		"_helpDescription": __helpDescriptionJDS8ebF,
		"_helpFlags": __helpFlagshfJE612
	}
		const _returnValueJiMJq2z = await _HelpuVw7Y2G.visibleOptions(_cmdk2auvc)
	});

	it('test for Help', async () => {
		const _HelpDTFfHsT = new Help()
		const _cmdoNyEd2S = "eebLbrfjxL6vWtWRw9XAUT1lSzKV0EiirU31yeMksX9TInY2vOkIOWLSOlhttSVYSVqu2TW";
		const _arrayValuenJf2Ktq = 3.6613599691457317;
		const _arrayValueQZwKObd = -0.6484417581548936;
		const _arrayValuehePDpZW = 8.467082429777125;
		const _returnValueDgAtPI = [_arrayValuenJf2Ktq, _arrayValueQZwKObd, _arrayValuehePDpZW]
		const _longestOptionTermLengthACiBnSO = () => { return _returnValueDgAtPI };
		const _returnValues6j89CG = true;
		const _longestSubcommandTermLengthKMAr0nV = () => { return _returnValues6j89CG };
		const _arrayValuejYYMEsE = {
		
	}
		const _arrayValueDsj4DQQ = -2.746531862530891;
		const _arrayValuexug2lQQ = "ncK8iez1Qffoq1zEPQJcV5Fg27tOhtJ3tsfPlWqz";
		const _arrayValueafKevsM = [_arrayValuejYYMEsE, _arrayValueDsj4DQQ, _arrayValuexug2lQQ]
		const _arrayValueen9LidA = {
		
	}
		const _arrayValuewGc5SQ = true;
		const _arrayValue6RgKUq = undefined;
		const _longestArgumentTermLengthxstJjI = [_arrayValueafKevsM, _arrayValueen9LidA, _arrayValuewGc5SQ, _arrayValue6RgKUq]
		const _helperluCZfmd = {
			"longestOptionTermLength": _longestOptionTermLengthACiBnSO,
		"longestSubcommandTermLength": _longestSubcommandTermLengthKMAr0nV,
		"longestArgumentTermLength": _longestArgumentTermLengthxstJjI
	}
		const _returnValuefgDNs0C = await _HelpDTFfHsT.padWidth(_cmdoNyEd2S, _helperluCZfmd)
		const _optionsPDGNq9b = {
		
	}
		const __hasHelpOptionHR9KXo = false;
		const __helpShortFlagbcF3iIx = 7.405636044089313;
		const __findOptionHq2aMi = null;
		const __helpLongFlagAmEh8tp = null;
		const _arrayValueUmOsbxi = "shW958U6Jca5pBeiS4nlnyMG0ztR2OsVXvYz3cWqJPpCPueKeHHNO6VjRDToosGX3tGUGsl8679";
		const _arrayValuetkDBjOF = undefined;
		const _returnValuexctTGDR = [_arrayValueUmOsbxi, _arrayValuetkDBjOF]
		const _returnValuepfjq7b3 = () => { return _returnValuexctTGDR };
		const _createOptionIPwH8uP = () => { return _returnValuepfjq7b3 };
		const __helpDescriptionhHKzyXw = 9.183847601661231;
		const __helpFlagsLEehK3n = -8.563789953489048;
		const _cmdHYBFyvf = {
			"options": _optionsPDGNq9b,
		"_hasHelpOption": __hasHelpOptionHR9KXo,
		"_helpShortFlag": __helpShortFlagbcF3iIx,
		"_findOption": __findOptionHq2aMi,
		"_helpLongFlag": __helpLongFlagAmEh8tp,
		"createOption": _createOptionIPwH8uP,
		"_helpDescription": __helpDescriptionhHKzyXw,
		"_helpFlags": __helpFlagsLEehK3n
	}
		const _returnValueT2SktDf = await _HelpDTFfHsT.visibleOptions(_cmdHYBFyvf)
		const _returnValueXxGhSOc = "qGM1uX3rzjeXwtgdrSFg55hKrhyYyAOjulPI9Otcf2OmAGvWXbhqfYxnamO2RK7EkztN3sn7fsV";
		const _descriptiondeVJbCK = () => { return _returnValueXxGhSOc };
		const _cmd6Zboh2 = {
			"description": _descriptiondeVJbCK
	}
		const _returnValueeqYmYXM = await _HelpDTFfHsT.commandDescription(_cmd6Zboh2)
	});

	it('test for Help', async () => {
		const _HelpSY7to38 = new Help()
		const _flagsS7rEoI3 = false;
		const _optiong1hgSfZ = {
			"flags": _flagsS7rEoI3
	}
		const _returnValuep6LxUSF = await _HelpSY7to38.optionTerm(_optiong1hgSfZ)
		const _cmdhcpDpBL = 1.4690084391300537;
		const _helperLYHC10H = []
		const _returnValueLRNXt4u = await _HelpSY7to38.padWidth(_cmdhcpDpBL, _helperLYHC10H)
	});

	it('test for Help', async () => {
		const _HelpjcWOS3c = new Help()
		const _arrayValueF5Lyvp = "x3VbS8hx4l3Kja9MkcYaareRUs1oRoRnnaXfqQZCdtk";
		const _arrayValuen1vBF3c = null;
		const _arrayValuetSr1ABj = "2gKKSx8bXjKRmSsiaJ6kowRVbsN8kpNvAsoyK6PB3yJy3a6LnfNnkhi8HkEPceBjfRSPVSK47JIFdCUruX7c3nkk";
		const _cmdVZiDe9M = [_arrayValueF5Lyvp, _arrayValuen1vBF3c, _arrayValuetSr1ABj]
		const _returnValueoNBylps = await _HelpjcWOS3c.subcommandDescription(_cmdVZiDe9M)
		const _nameZBCQajT = "LKQuluSGy6vkSBsKm68calv9p1xOjPXebgrYMb8jgSaljX1Dq9apwC43vaipN6u3PoCAckxDwKHgeadxb2NA8eNMxu8ZP";
		const _argumenty5p2jes = {
			"name": _nameZBCQajT
	}
		const _returnValuenZ4OYIX = await _HelpjcWOS3c.argumentTerm(_argumenty5p2jes)
		const _cmdUw2h4jX = null;
		const _returnValuec2BWpT0 = -5.830647787029481;
		const _visibleOptionst3mLXt = () => { return _returnValuec2BWpT0 };
		const _returnValueuF6qcx4 = -9.068392266911895;
		const _optionTermu9MjZQ3 = () => { return _returnValueuF6qcx4 };
		const _helperY7FRhsb = {
			"visibleOptions": _visibleOptionst3mLXt,
		"optionTerm": _optionTermu9MjZQ3
	}
		const _returnValueSRxiJsD = await _HelpjcWOS3c.longestOptionTermLength(_cmdUw2h4jX, _helperY7FRhsb)
		const _optionshOdfKJ = {
		
	}
		const __hasHelpOptionnzEv6Ef = true;
		const __helpShortFlagjcK8aev = false;
		const _returnValuezdQFWg = undefined;
		const __findOptiono3MPilL = () => { return _returnValuezdQFWg };
		const __helpLongFlagwRtuxQ4 = null;
		const _returnValuegMbw1ad = 6.133234164002758;
		const _createOptionN7u8TlS = () => { return _returnValuegMbw1ad };
		const __helpDescriptionMZPrrrt = undefined;
		const __helpFlags3cq2pY = undefined;
		const _cmdkkGM7sm = {
			"options": _optionshOdfKJ,
		"_hasHelpOption": __hasHelpOptionnzEv6Ef,
		"_helpShortFlag": __helpShortFlagjcK8aev,
		"_findOption": __findOptiono3MPilL,
		"_helpLongFlag": __helpLongFlagwRtuxQ4,
		"createOption": _createOptionN7u8TlS,
		"_helpDescription": __helpDescriptionMZPrrrt,
		"_helpFlags": __helpFlags3cq2pY
	}
		const _returnValuewk8NCEq = await _HelpjcWOS3c.visibleOptions(_cmdkkGM7sm)
	});

	it('test for Help', async () => {
		const _HelphGbBAmD = new Help()
		const _cmdC9FTJ6g = undefined;
		const _helperdMWdSl1 = undefined;
		const _returnValuepzJTlFw = await _HelphGbBAmD.longestSubcommandTermLength(_cmdC9FTJ6g, _helperdMWdSl1)
	});

	it('test for Help', async () => {
		const _HelpfylId6c = new Help()
		const __argsB6uyFLf = {
		
	}
		const __namebFYuys = -3.230323533561357;
		const __aliasesHeSF2p0 = {
		
	}
		const _optionsqj4jCXU = false;
		const _cmdUJrfn8S = {
			"_args": __argsB6uyFLf,
		"_name": __namebFYuys,
		"_aliases": __aliasesHeSF2p0,
		"options": _optionsqj4jCXU
	}
		const _returnValueOPboVTn = await _HelpfylId6c.subcommandTerm(_cmdUJrfn8S)
		const _cmdYVddaRr = "dqU0nV9EXg8YTTR9k37qPWYWr4MjFvmsv5a9PGLM7hIOsLIpYCd8yOVXgfAZbdH5L1eq8lpCie4v43LpE2Pt7WRTx3xFjuxSG";
		const _sortSubcommandsq7edsCU = "42CLWTWvw32zK6e8iaHbiilCdtemAJ";
		const _returnValuelWCHS3L = false;
		const _subcommandTermo3PFF0 = () => { return _returnValuelWCHS3L };
		const _helperOpF6pGl = {
			"sortSubcommands": _sortSubcommandsq7edsCU,
		"subcommandTerm": _subcommandTermo3PFF0
	}
		const _returnValuevKFbtKV = await _HelpfylId6c.longestSubcommandTermLength(_cmdYVddaRr, _helperOpF6pGl)
	});

	it('test for Help', async () => {
		const _HelpDLs0ggo = new Help()
		const _cmdSdSowaH = []
		const _returnValuep1YNMpE = 6.809130480307871;
		const _visibleArgumentsfn0mz8E = () => { return _returnValuep1YNMpE };
		const _returnValueoSrfciS = false;
		const _argumentTermOAnoBkV = () => { return _returnValueoSrfciS };
		const _helperc2bPUC0 = {
			"visibleArguments": _visibleArgumentsfn0mz8E,
		"argumentTerm": _argumentTermOAnoBkV
	}
		const _returnValueSFYaRF = await _HelpDLs0ggo.longestArgumentTermLength(_cmdSdSowaH, _helperc2bPUC0)
		const _returnValues4yFPJ8 = null;
		const _descriptionT74I1nF = () => { return _returnValues4yFPJ8 };
		const _cmdVJwcIK7 = {
			"description": _descriptionT74I1nF
	}
		const _returnValuevAxj0cm = await _HelpDLs0ggo.commandDescription(_cmdVJwcIK7)
	});

	it('test for Help', async () => {
		const _HelpL8IyGeI = new Help()
		const _cmdjSoW3pn = null;
		const _returnValueBIGqzyS = await _HelpL8IyGeI.commandUsage(_cmdjSoW3pn)
		const _argChoicesfafNRRM = undefined;
		const _arrayValueRwpU4Y = null;
		const _arrayValueG9OTtUS = "UWvkXRmdK7X2AU1z23yOHXTV1uN86naZwXDBtdM";
		const _arrayValueZdQUR2 = true;
		const _arrayValueygQkuHq = [_arrayValueZdQUR2]
		const _arrayValuexqZHZhK = undefined;
		const _arrayValueBFuUQa = [_arrayValueG9OTtUS, _arrayValueygQkuHq, _arrayValuexqZHZhK]
		const _arrayValuem8klJHz = "zrqBc29UrnUjnNQ";
		const _negateOFHn0Cx = [_arrayValueRwpU4Y, _arrayValueBFuUQa, _arrayValuem8klJHz]
		const _defaultValueaQdVtxX = undefined;
		const _arrayValuekgSIdnv = "qzPoy0PbpOUbbNFgtA7nUGTMilRoN2xEsWQXZnbo0dFBUS5y8ooyaSdrcBox4DQ8sa6NHEInH";
		const _arrayValueP5jh5vK = [_arrayValuekgSIdnv]
		const _arrayValuew47iRSF = null;
		const _arrayValuetu2E4vF = 9.060190676043824;
		const _arrayValueYm6fpKU = [_arrayValuetu2E4vF]
		const _arrayValueIXVRuwq = null;
		const _defaultValueDescriptionztvibMf = [_arrayValueP5jh5vK, _arrayValuew47iRSF, _arrayValueYm6fpKU, _arrayValueIXVRuwq]
		const _returnValueSDsynwu = undefined;
		const _envVarnhtPJu2 = () => { return _returnValueSDsynwu };
		const _descriptionxfNX4pP = false;
		const _optionwBpuMnq = {
			"argChoices": _argChoicesfafNRRM,
		"negate": _negateOFHn0Cx,
		"defaultValue": _defaultValueaQdVtxX,
		"defaultValueDescription": _defaultValueDescriptionztvibMf,
		"envVar": _envVarnhtPJu2,
		"description": _descriptionxfNX4pP
	}
		const _returnValueNDWVQX = await _HelpL8IyGeI.optionDescription(_optionwBpuMnq)
		const _returnValueHUNI7A5 = -1.906593606753674;
		const _cmdjQCYIii = () => { return _returnValueHUNI7A5 };
		const _returnValuetiEZ9Qa = []
		const _longestOptionTermLengthavyMUz3 = () => { return _returnValuetiEZ9Qa };
		const _returnValue0fg9XO = -1.0856352689787645;
		const _longestSubcommandTermLengthGR6A0FM = () => { return _returnValue0fg9XO };
		const _returnValueiFwBxst = -3.1531097930203122;
		const _longestArgumentTermLengthBp3vqga = () => { return _returnValueiFwBxst };
		const _helpermDshSW6 = {
			"longestOptionTermLength": _longestOptionTermLengthavyMUz3,
		"longestSubcommandTermLength": _longestSubcommandTermLengthGR6A0FM,
		"longestArgumentTermLength": _longestArgumentTermLengthBp3vqga
	}
		const _returnValueoOaI1rw = await _HelpL8IyGeI.padWidth(_cmdjQCYIii, _helpermDshSW6)
		const _returnValueLeqIo17 = undefined;
		const _descriptionwyOITyK = () => { return _returnValueLeqIo17 };
		const _cmdLEGjgq3 = {
			"description": _descriptionwyOITyK
	}
		const _returnValuevQAgDJ8 = await _HelpL8IyGeI.commandDescription(_cmdLEGjgq3)
	});

	it('test for Help', async () => {
		const _Helph2YAu2Q = new Help()
		const _returnValueSoIj2mD = 1.9669332859545001;
		const _descriptionZEken3 = () => { return _returnValueSoIj2mD };
		const _cmdg8wUM9M = {
			"description": _descriptionZEken3
	}
		const _returnValuepDJEWCB = await _Helph2YAu2Q.subcommandDescription(_cmdg8wUM9M)
		const _returnValueDEFDyxn = -5.937580445332845;
		const _namezWvAivt = () => { return _returnValueDEFDyxn };
		const _argumentF6vTlvZ = {
			"name": _namezWvAivt
	}
		const _returnValueDoGjmyf = await _Helph2YAu2Q.argumentTerm(_argumentF6vTlvZ)
		const _argChoicesmWiVzwh = {
		
	}
		const _negateO686hPC = true;
		const _defaultValueNq5YTip = undefined;
		const _defaultValueDescriptionhyMQIIN = undefined;
		const _envVarhi1LCXS = undefined;
		const _descriptione17LVVh = null;
		const _optionuFHpnPz = {
			"argChoices": _argChoicesmWiVzwh,
		"negate": _negateO686hPC,
		"defaultValue": _defaultValueNq5YTip,
		"defaultValueDescription": _defaultValueDescriptionhyMQIIN,
		"envVar": _envVarhi1LCXS,
		"description": _descriptione17LVVh
	}
		const _returnValueWluZhkw = await _Helph2YAu2Q.optionDescription(_optionuFHpnPz)
		const _returnValueXlra1Rp = -8.715039838199752;
		const _flagsrnHOhKe = () => { return _returnValueXlra1Rp };
		const _optionTHo128h = {
			"flags": _flagsrnHOhKe
	}
		const _returnValueMweoIVj = await _Helph2YAu2Q.optionTerm(_optionTHo128h)
		const _commandsihc2hht = {
		
	}
		const _returnValueZ380SRY = undefined;
		const __hasImplicitHelpCommandnqau49T = () => { return _returnValueZ380SRY };
		const __helpCommandnameAndArgsMJhaSC8 = {
		
	}
		const _returnValueE4HmFve = -2.6502240439759497;
		const _createCommandaMnpwIL = () => { return _returnValueE4HmFve };
		const __helpCommandDescriptionMSfCZt9 = -2.687236753526493;
		const _cmdVnUQ2KW = {
			"commands": _commandsihc2hht,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandnqau49T,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsMJhaSC8,
		"createCommand": _createCommandaMnpwIL,
		"_helpCommandDescription": __helpCommandDescriptionMSfCZt9
	}
		const _returnValuetfcmAKH = await _Helph2YAu2Q.visibleCommands(_cmdVnUQ2KW)
	});

	it('test for Help', async () => {
		const _HelpOEozGkV = new Help()
		const _cmdJnD6NmA = undefined;
		const _sortSubcommandsCCsIOqf = "bDHogEf9uwVg8a2wtfoUEkeo9mfx1cyFRmmGWaMHKyiYcDQAeEUzVHYTKaCFqcbxL32NORp5co";
		const _returnValueRvHNz2e = undefined;
		const _returnValueUCuOFPf = () => { return _returnValueRvHNz2e };
		const _subcommandTermuucsfgl = () => { return _returnValueUCuOFPf };
		const _helperIIhebkq = {
			"sortSubcommands": _sortSubcommandsCCsIOqf,
		"subcommandTerm": _subcommandTermuucsfgl
	}
		const _returnValueE3rlVuz = await _HelpOEozGkV.formatHelp(_cmdJnD6NmA, _helperIIhebkq)
		const _flagsXfWplRc = null;
		const _optionLqVZ6L9 = {
			"flags": _flagsXfWplRc
	}
		const _returnValueQlcGHm8 = await _HelpOEozGkV.optionTerm(_optionLqVZ6L9)
		const _returnValuexmEIaUD = "nKxOVwWdYxlql35HGUJCIpNnqJVxfWGWGXjjH";
		const _nameZwOfUei = () => { return _returnValuexmEIaUD };
		const _argumenta6zJ8vo = {
			"name": _nameZwOfUei
	}
		const _returnValueAAeM0cH = await _HelpOEozGkV.argumentTerm(_argumenta6zJ8vo)
		const _optionsNBMCUm = {
		
	}
		const _arrayValuemGdVUi2 = undefined;
		const _arrayValuewDdCEKR = null;
		const __hasHelpOptionjNRpTwV = [_arrayValuemGdVUi2, _arrayValuewDdCEKR]
		const __helpShortFlagCsLTrJV = true;
		const _returnValueP6XkqvI = "F5pwWgnPp4yb8ML9DmLN480JenXechX7CR93JK2913xW91botFAroLAX8Kon";
		const __findOptionenh2K1l = () => { return _returnValueP6XkqvI };
		const __helpLongFlagvv4R6HW = {
		
	}
		const _returnValuebwrp25r = true;
		const _createOptionqw00ZWI = () => { return _returnValuebwrp25r };
		const _arrayValueWgIEcoV = undefined;
		const _arrayValueF2QKgmA = undefined;
		const __helpDescriptionviPa3Rj = [_arrayValueWgIEcoV, _arrayValueF2QKgmA]
		const __helpFlagsEKLVwoL = null;
		const _cmdYyk2PR9 = {
			"options": _optionsNBMCUm,
		"_hasHelpOption": __hasHelpOptionjNRpTwV,
		"_helpShortFlag": __helpShortFlagCsLTrJV,
		"_findOption": __findOptionenh2K1l,
		"_helpLongFlag": __helpLongFlagvv4R6HW,
		"createOption": _createOptionqw00ZWI,
		"_helpDescription": __helpDescriptionviPa3Rj,
		"_helpFlags": __helpFlagsEKLVwoL
	}
		const _returnValuehIfBl4 = await _HelpOEozGkV.visibleOptions(_cmdYyk2PR9)
		const __argsirHlclG = {
		
	}
		const __nameOsNP9bH = 9.385193534715562;
		const __aliasesJMrhdXq = {
		
	}
		const _optionsTv773qS = {
		
	}
		const _cmdYu5hZgv = {
			"_args": __argsirHlclG,
		"_name": __nameOsNP9bH,
		"_aliases": __aliasesJMrhdXq,
		"options": _optionsTv773qS
	}
		const _returnValuell6Hsf5 = await _HelpOEozGkV.subcommandTerm(_cmdYu5hZgv)
	});

	it('test for Help', async () => {
		const _HelpaIfRI7r = new Help()
		const _argChoicesdkGzl1P = {
		
	}
		const _defaultValueeUQISR = undefined;
		const _defaultValueDescriptions4w0aJp = null;
		const _descriptionJ7x53H6 = true;
		const _argumentszPhoYM = {
			"argChoices": _argChoicesdkGzl1P,
		"defaultValue": _defaultValueeUQISR,
		"defaultValueDescription": _defaultValueDescriptions4w0aJp,
		"description": _descriptionJ7x53H6
	}
		const _returnValueCaLP6RE = await _HelpaIfRI7r.argumentDescription(_argumentszPhoYM)
		const _returnValuehFIGK6p = "IxZqdBL86kfotvC1YaiBM8DALdC5zjgRD37UYAxfm3TXCmIgc6Tievfb8odFRERf1Hu2Ka";
		const _flagsR42XRPv = () => { return _returnValuehFIGK6p };
		const _optionNvBpjtb = {
			"flags": _flagsR42XRPv
	}
		const _returnValueYma5Lbj = await _HelpaIfRI7r.optionTerm(_optionNvBpjtb)
	});

	it('test for Help', async () => {
		const _HelpFjEavWT = new Help()
		const __nameH2OknQ6 = {
		
	}
		const __aliasesgBVojc0 = {
		
	}
		const _parentmP2DKhf = {
		
	}
		const _returnValuevMfgXJ = -2.079183261687092;
		const _usagem8HBhyh = () => { return _returnValuevMfgXJ };
		const _cmdTG8r2Cb = {
			"_name": __nameH2OknQ6,
		"_aliases": __aliasesgBVojc0,
		"parent": _parentmP2DKhf,
		"usage": _usagem8HBhyh
	}
		const _returnValueV4pgfUF = await _HelpFjEavWT.commandUsage(_cmdTG8r2Cb)
		const _returnValuens6vtOQ = null;
		const _flagsszMw0nm = () => { return _returnValuens6vtOQ };
		const _optionhqNWSmo = {
			"flags": _flagsszMw0nm
	}
		const _returnValuekl3ysUt = await _HelpFjEavWT.optionTerm(_optionhqNWSmo)
		const _arrayValuextg0aD = null;
		const _arrayValueAFeAMoH = "jCBgGfnu6NSJUtivBaK0uhj2l0nWfw";
		const _optionlypTQjI = [_arrayValuextg0aD, _arrayValueAFeAMoH]
		const _returnValueaCHTbIe = await _HelpFjEavWT.optionTerm(_optionlypTQjI)
		const _cmdYBg2RXQ = false;
		const _returnValueyym0Syj = "MMjt812q2RzETnQAnXmWJSgmC69Ko";
		const _visibleArgumentsF6DEIj2 = () => { return _returnValueyym0Syj };
		const _returnValuecuQEPXB = null;
		const _argumentTermvXgYb0T = () => { return _returnValuecuQEPXB };
		const _helperonjlSyP = {
			"visibleArguments": _visibleArgumentsF6DEIj2,
		"argumentTerm": _argumentTermvXgYb0T
	}
		const _returnValueRAjSTHo = await _HelpFjEavWT.longestArgumentTermLength(_cmdYBg2RXQ, _helperonjlSyP)
		const __argsDescriptionR3ZbeYK = {
		
	}
		const __argsZYjJqIo = {
		
	}
		const _cmdUGyu2QK = {
			"_argsDescription": __argsDescriptionR3ZbeYK,
		"_args": __argsZYjJqIo
	}
		const _returnValueeIDuoyA = await _HelpFjEavWT.visibleArguments(_cmdUGyu2QK)
	});

	it('test for Help', async () => {
		const _HelppHNvP0c = new Help()
		const _cmdjL2nlD = -3.221765554583822;
		const _returnValuee6yJ25l = 2.013272395828512;
		const _longestOptionTermLengthqtQSRPN = () => { return _returnValuee6yJ25l };
		const _returnValuewJ1gtW = {
		
	}
		const _longestSubcommandTermLengthWeDn3Qa = () => { return _returnValuewJ1gtW };
		const _returnValueeCyVdzP = -8.097401674790337;
		const _longestArgumentTermLengthBOTwE4 = () => { return _returnValueeCyVdzP };
		const _helperruOyKD = {
			"longestOptionTermLength": _longestOptionTermLengthqtQSRPN,
		"longestSubcommandTermLength": _longestSubcommandTermLengthWeDn3Qa,
		"longestArgumentTermLength": _longestArgumentTermLengthBOTwE4
	}
		const _returnValues2hJORT = await _HelppHNvP0c.padWidth(_cmdjL2nlD, _helperruOyKD)
		const _flagsQBU00Gx = "Dw68OioJIr2968OhhIV";
		const _optionubioE1r = {
			"flags": _flagsQBU00Gx
	}
		const _returnValuey05cNWi = await _HelppHNvP0c.optionTerm(_optionubioE1r)
		const __nameQcF6Txv = {
		
	}
		const _arrayValueCjXD70 = {
		
	}
		const _arrayValueDXMoYBl = null;
		const _returnValueAiNXi5W = []
		const _arrayValueoEENsXH = () => { return _returnValueAiNXi5W };
		const __aliaseshLMypfB = [_arrayValueCjXD70, _arrayValueDXMoYBl, _arrayValueoEENsXH]
		const _parentXtMi3RP = {
		
	}
		const _usageXZjHYeV = 0.2372514446910845;
		const _cmdn8hbcOG = {
			"_name": __nameQcF6Txv,
		"_aliases": __aliaseshLMypfB,
		"parent": _parentXtMi3RP,
		"usage": _usageXZjHYeV
	}
		const _returnValueoMgRlW = await _HelppHNvP0c.commandUsage(_cmdn8hbcOG)
	});

	it('test for Help', async () => {
		const _HelpyXasaq = new Help()
		const _returnValueujCCm6F = {
		
	}
		const _matchrxF4f0 = () => { return _returnValueujCCm6F };
		const _returnValueVCSCed = {
		
	}
		const _substrbUOtBWI = () => { return _returnValueVCSCed };
		const _strg39mETE = {
			"match": _matchrxF4f0,
		"substr": _substrbUOtBWI
	}
		const _widthRnTp6kz = 3.9436400038142327;
		const _indentkcGtYXw = -0.3274041414531741;
		const _minColumnWidthaSNpDsN = 0.8627007790467864;
		const _returnValueIOtgPL5 = await _HelpyXasaq.wrap(_strg39mETE, _widthRnTp6kz, _indentkcGtYXw, _minColumnWidthaSNpDsN)
		const _optionsgSEv5U6 = {
		
	}
		const __hasHelpOptionQhUt9u = {
		
	}
		const _arrayValueNzZV8Jt = {
		
	}
		const _arrayValueoqKmt15 = {
		
	}
		const __helpShortFlagVrd21ok = [_arrayValueNzZV8Jt, _arrayValueoqKmt15]
		const __findOptionutHRHHS = "AceZj4";
		const __helpLongFlagZkBcZpR = {
		
	}
		const _arrayValuexCDWQ9U = null;
		const _arrayValuenj3pqjM = 5.667888192856797;
		const _arrayValuejfSPuhz = -1.244405849790498;
		const _arrayValueMKfjUdH = {
		
	}
		const _arrayValueauu1YFz = false;
		const _arrayValueTCHLmal = [_arrayValuenj3pqjM, _arrayValuejfSPuhz, _arrayValueMKfjUdH, _arrayValueauu1YFz]
		const _returnValueIzTORf6 = [_arrayValuexCDWQ9U, _arrayValueTCHLmal]
		const _createOptionELZGtle = () => { return _returnValueIzTORf6 };
		const __helpDescriptionaUY5V4T = false;
		const _arrayValuezbzFcmJ = "WiadH5l92JtQoFbomrd5DfXgcUCxAvbxPTuv";
		const _arrayValue2Wu0B5 = false;
		const __helpFlagsMTghLrf = [_arrayValuezbzFcmJ, _arrayValue2Wu0B5]
		const _cmdScNC76d = {
			"options": _optionsgSEv5U6,
		"_hasHelpOption": __hasHelpOptionQhUt9u,
		"_helpShortFlag": __helpShortFlagVrd21ok,
		"_findOption": __findOptionutHRHHS,
		"_helpLongFlag": __helpLongFlagZkBcZpR,
		"createOption": _createOptionELZGtle,
		"_helpDescription": __helpDescriptionaUY5V4T,
		"_helpFlags": __helpFlagsMTghLrf
	}
		const _returnValuercByLPZ = await _HelpyXasaq.visibleOptions(_cmdScNC76d)
		const _arrayValueUkmVQ2y = undefined;
		const _arrayValuet3wi7e9 = undefined;
		const _arrayValueB1RDiRN = null;
		const _arrayValuewRZd10F = undefined;
		const _arrayValueZIEepmg = undefined;
		const _arrayValueblTbgW7 = [_arrayValuewRZd10F, _arrayValueZIEepmg]
		const _arrayValuec0Tgqex = 7.083090761136376;
		const _arrayValuen5xjN93 = [_arrayValueblTbgW7, _arrayValuec0Tgqex]
		const _arrayValueqA5ZHRV = [_arrayValueB1RDiRN, _arrayValuen5xjN93]
		const _argumentUtBpW6s = [_arrayValueUkmVQ2y, _arrayValuet3wi7e9, _arrayValueqA5ZHRV]
		const _returnValueoTCQLKo = await _HelpyXasaq.argumentTerm(_argumentUtBpW6s)
		const _cmdSTqNw7C = undefined;
		const _returnValueYvzCbqS = null;
		const _visibleOptionsKTiBWMO = () => { return _returnValueYvzCbqS };
		const _returnValueXpldRZC = "ijfI";
		const _optionTermdBEbIsP = () => { return _returnValueXpldRZC };
		const _helperJibhU5C = {
			"visibleOptions": _visibleOptionsKTiBWMO,
		"optionTerm": _optionTermdBEbIsP
	}
		const _returnValuembf0Jd0 = await _HelpyXasaq.longestOptionTermLength(_cmdSTqNw7C, _helperJibhU5C)
		const _cmdInCYMoJ = true;
		const _sortSubcommandsn2v4Rlr = 8.054213221752075;
		const _arrayValueM6MRLR3 = false;
		const _arrayValueuAADQeq = undefined;
		const _subcommandTermwsNfda = [_arrayValueM6MRLR3, _arrayValueuAADQeq]
		const _helper1I32LX = {
			"sortSubcommands": _sortSubcommandsn2v4Rlr,
		"subcommandTerm": _subcommandTermwsNfda
	}
		const _returnValueZghzzy2 = await _HelpyXasaq.longestSubcommandTermLength(_cmdInCYMoJ, _helper1I32LX)
	});

	it('test for Help', async () => {
		const _HelpeyF0sZX = new Help()
		const _argChoicesaQaNafD = {
		
	}
		const _negatesiZXsmL = null;
		const _defaultValueoxG16Sp = undefined;
		const _defaultValueDescriptionxG6PqnK = null;
		const _envVarx9BPpML = undefined;
		const _descriptionaZhEDYZ = {
		
	}
		const _optionnno8lZR = {
			"argChoices": _argChoicesaQaNafD,
		"negate": _negatesiZXsmL,
		"defaultValue": _defaultValueoxG16Sp,
		"defaultValueDescription": _defaultValueDescriptionxG6PqnK,
		"envVar": _envVarx9BPpML,
		"description": _descriptionaZhEDYZ
	}
		const _returnValueZ84tTT = await _HelpeyF0sZX.optionDescription(_optionnno8lZR)
		const _optionsYCC27Iu = {
		
	}
		const __hasHelpOptionnREW8ii = 9.06817753692306;
		const __helpShortFlagzURROFh = {
		
	}
		const _returnValueTcb8kyH = undefined;
		const __findOptionQrbU5BK = () => { return _returnValueTcb8kyH };
		const _returnValueHXVJnhO = 1.792104709416563;
		const __helpLongFlagw2RWIQq = () => { return _returnValueHXVJnhO };
		const _returnValueLikL3SW = undefined;
		const _createOptionPD1Gxw0 = () => { return _returnValueLikL3SW };
		const __helpDescriptionYAy6rZH = "Cfm02qcGXDgv6Gj6T7rRnvlPhMGjLuyR4zgnzSiX41P11CzxgGqDWNbMhH64luhZTclB9NdKYCzjR9jHwvhGIGxXUNv";
		const __helpFlagsDW2zK6W = null;
		const _cmdu4Kna2y = {
			"options": _optionsYCC27Iu,
		"_hasHelpOption": __hasHelpOptionnREW8ii,
		"_helpShortFlag": __helpShortFlagzURROFh,
		"_findOption": __findOptionQrbU5BK,
		"_helpLongFlag": __helpLongFlagw2RWIQq,
		"createOption": _createOptionPD1Gxw0,
		"_helpDescription": __helpDescriptionYAy6rZH,
		"_helpFlags": __helpFlagsDW2zK6W
	}
		const _returnValuedQUarZj = await _HelpeyF0sZX.visibleOptions(_cmdu4Kna2y)
		const _cmdPrhzwmr = null;
		const _returnValuegKKNO7S = {
		
	}
		const _visibleArgumentsreVbb4F = () => { return _returnValuegKKNO7S };
		const _returnValuerBWxJ23 = true;
		const _argumentTermNU75tpJ = () => { return _returnValuerBWxJ23 };
		const _helperhrkrUYK = {
			"visibleArguments": _visibleArgumentsreVbb4F,
		"argumentTerm": _argumentTermNU75tpJ
	}
		const _returnValueAKaB22R = await _HelpeyF0sZX.longestArgumentTermLength(_cmdPrhzwmr, _helperhrkrUYK)
		const _flagsSLxt9HR = null;
		const _optionFIacYkl = {
			"flags": _flagsSLxt9HR
	}
		const _returnValueeTxuhIH = await _HelpeyF0sZX.optionTerm(_optionFIacYkl)
	});

	it('test for Help', async () => {
		const _HelpWdcAjmN = new Help()
		const _returnValueFJw4bE5 = undefined;
		const _matchzttLpP9 = () => { return _returnValueFJw4bE5 };
		const _returnValueM6s2kiU = {
		
	}
		const _substrak29Dpr = () => { return _returnValueM6s2kiU };
		const _streOcBF3V = {
			"match": _matchzttLpP9,
		"substr": _substrak29Dpr
	}
		const _widthi4dX009 = -4.125846782995417;
		const _indentvVqK8Az = 1.903527687437606;
		const _minColumnWidthrvdxy0j = -8.218202033685808;
		const _returnValueI4i0oRb = await _HelpWdcAjmN.wrap(_streOcBF3V, _widthi4dX009, _indentvVqK8Az, _minColumnWidthrvdxy0j)
		const _flagsT45uTOz = {
		
	}
		const _optionzDlE4a9 = {
			"flags": _flagsT45uTOz
	}
		const _returnValueFIewYw = await _HelpWdcAjmN.optionTerm(_optionzDlE4a9)
		const _arrayValueBCjWRCv = null;
		const _arrayValuexNCpZil = -2.413272670902323;
		const _cmdFgiIXUU = [_arrayValueBCjWRCv, _arrayValuexNCpZil]
		const _returnValueMGZ18Lq = await _HelpWdcAjmN.visibleArguments(_cmdFgiIXUU)
	});

	it('test for Help', async () => {
		const _HelpuW2xDI9 = new Help()
		const _arrayValuey3GDgWY = -3.964382091517371;
		const _arrayValuekUZcOxX = -1.4830786936890465;
		const _optionswG9hhCF = [_arrayValuey3GDgWY, _arrayValuekUZcOxX]
		const __hasHelpOptionqVGml8q = 0.4646719345757848;
		const __helpShortFlagN6SoOF2 = null;
		const _returnValueuc79Du = false;
		const __findOptionIbEsV0j = () => { return _returnValueuc79Du };
		const __helpLongFlagm1hhUhF = "9YGVfHHuLeJe2v6VB9wCkLo6Tijuy9pn2CfaNQEvZyFGusGSQAwnNC7wK1KO7OWyAfYKvE4WJN2scgQ8EDdHUzdI7GdTwfWelx";
		const _returnValuec2MGpyA = undefined;
		const _createOptionqyeJwp0 = () => { return _returnValuec2MGpyA };
		const __helpDescriptionbavlM1O = -3.3045895046375318;
		const _returnValueaCQxte = false;
		const _returnValueiRMUdRk = () => { return _returnValueaCQxte };
		const _arrayValue5y70QL = () => { return _returnValueiRMUdRk };
		const _arrayValueBs1VJUN = 3.139097099707385;
		const __helpFlagswWALdNB = [_arrayValue5y70QL, _arrayValueBs1VJUN]
		const _cmdre3KWD = {
			"options": _optionswG9hhCF,
		"_hasHelpOption": __hasHelpOptionqVGml8q,
		"_helpShortFlag": __helpShortFlagN6SoOF2,
		"_findOption": __findOptionIbEsV0j,
		"_helpLongFlag": __helpLongFlagm1hhUhF,
		"createOption": _createOptionqyeJwp0,
		"_helpDescription": __helpDescriptionbavlM1O,
		"_helpFlags": __helpFlagswWALdNB
	}
		const _returnValueZiJmj7i = await _HelpuW2xDI9.visibleOptions(_cmdre3KWD)
		const _argChoicesxEjg0d3 = {
		
	}
		const _negateWXP2NDx = 7.49663596818603;
		const _defaultValueZXjUyAF = undefined;
		const _defaultValueDescriptionuOo00nD = {
		
	}
		const _envVarQOfnvpw = undefined;
		const _arrayValuekomwO3T = []
		const _arrayValueQlm8Hv = null;
		const _descriptionb6OLCgb = [_arrayValuekomwO3T, _arrayValueQlm8Hv]
		const _optionmX40k7g = {
			"argChoices": _argChoicesxEjg0d3,
		"negate": _negateWXP2NDx,
		"defaultValue": _defaultValueZXjUyAF,
		"defaultValueDescription": _defaultValueDescriptionuOo00nD,
		"envVar": _envVarQOfnvpw,
		"description": _descriptionb6OLCgb
	}
		const _returnValueDomKkD = await _HelpuW2xDI9.optionDescription(_optionmX40k7g)
		const _cmdsyJjYX = false;
		const _returnValueDQCfx4b = null;
		const _visibleArgumentsDPcnHeK = () => { return _returnValueDQCfx4b };
		const _returnValueHLZAWBf = "L5FKNYCm";
		const _argumentTermOkICMfP = () => { return _returnValueHLZAWBf };
		const _helperlc8Bmjd = {
			"visibleArguments": _visibleArgumentsDPcnHeK,
		"argumentTerm": _argumentTermOkICMfP
	}
		const _returnValue3rBIJM = await _HelpuW2xDI9.longestArgumentTermLength(_cmdsyJjYX, _helperlc8Bmjd)
	});

	it('test for Help', async () => {
		const _HelpoxLrtd = new Help()
		const _flagsjN0qyj1 = "G2NWoT2ubYLHeidcyGNxvF5nVaVYT8eBN9Xa20k7rHKLorUy4KIyRx4DNlUlpGgINTbOCi1kCyfyizF2mebdqjNiwr8";
		const _optionaSI4GMG = {
			"flags": _flagsjN0qyj1
	}
		const _returnValueqHKC9cu = await _HelpoxLrtd.optionTerm(_optionaSI4GMG)
		const _argChoicesMzxKn2r = null;
		const _defaultValuebDJHPa = "DWwz86IeiasIb21RzTsNQ4gBa";
		const _returnValuey1ZKBYi = undefined;
		const _defaultValueDescriptionqb550gH = () => { return _returnValuey1ZKBYi };
		const _descriptionx3mm21i = null;
		const _argumentLwdUusa = {
			"argChoices": _argChoicesMzxKn2r,
		"defaultValue": _defaultValuebDJHPa,
		"defaultValueDescription": _defaultValueDescriptionqb550gH,
		"description": _descriptionx3mm21i
	}
		const _returnValuexymTWG = await _HelpoxLrtd.argumentDescription(_argumentLwdUusa)
		const _returnValueYCTfuP = true;
		const _nameGEEpCyK = () => { return _returnValueYCTfuP };
		const _argumentvf8quS1 = {
			"name": _nameGEEpCyK
	}
		const _returnValueDEyQn0m = await _HelpoxLrtd.argumentTerm(_argumentvf8quS1)
	});

	it('test for Help', async () => {
		const _HelpNJu908 = new Help()
		const _arrayValueCDBY0Z = null;
		const _arrayValueCbB3d2l = [_arrayValueCDBY0Z]
		const _arrayValueSRxPzqZ = -5.240293883635469;
		const _arrayValueUKwiXMn = true;
		const _argChoicesSZDNvQ = [_arrayValueCbB3d2l, _arrayValueSRxPzqZ, _arrayValueUKwiXMn]
		const _defaultValue9yeBOk = undefined;
		const _defaultValueDescriptionoK8M4g = undefined;
		const _arrayValueliAR3by = undefined;
		const _arrayValueLcNufpo = false;
		const _descriptionS4fyhZi = [_arrayValueliAR3by, _arrayValueLcNufpo]
		const _argumentrxNnYCi = {
			"argChoices": _argChoicesSZDNvQ,
		"defaultValue": _defaultValue9yeBOk,
		"defaultValueDescription": _defaultValueDescriptionoK8M4g,
		"description": _descriptionS4fyhZi
	}
		const _returnValue2nJzRt = await _HelpNJu908.argumentDescription(_argumentrxNnYCi)
		const _optionsclJphu = {
		
	}
		const __hasHelpOptionjKecVHN = undefined;
		const _arrayValueCkLPrUx = null;
		const _arrayValuewtOKlbb = true;
		const _arrayValueJofbv2i = null;
		const __helpShortFlagdfKnpQ = [_arrayValueCkLPrUx, _arrayValuewtOKlbb, _arrayValueJofbv2i]
		const _returnValueGEgnuY5 = true;
		const __findOptionvQTzWYi = () => { return _returnValueGEgnuY5 };
		const __helpLongFlagTzHyb3m = 0.9398311681444262;
		const _returnValue2D9Uvw = {
		
	}
		const _createOptionFWhzbgW = () => { return _returnValue2D9Uvw };
		const __helpDescriptionQHWsXuE = 0.1831658012634403;
		const __helpFlagsOcVd0zn = {
		
	}
		const _cmdvMMYZDH = {
			"options": _optionsclJphu,
		"_hasHelpOption": __hasHelpOptionjKecVHN,
		"_helpShortFlag": __helpShortFlagdfKnpQ,
		"_findOption": __findOptionvQTzWYi,
		"_helpLongFlag": __helpLongFlagTzHyb3m,
		"createOption": _createOptionFWhzbgW,
		"_helpDescription": __helpDescriptionQHWsXuE,
		"_helpFlags": __helpFlagsOcVd0zn
	}
		const _returnValuevVDvthx = await _HelpNJu908.visibleOptions(_cmdvMMYZDH)
		const __nameimu7NCS = {
		
	}
		const __aliasesWQ0shD = {
		
	}
		const _parentchkfS2 = {
		
	}
		const _arrayValueQVUPjZ6 = undefined;
		const _arrayValuec4jCr5R = -7.3808467842128405;
		const _usageWe9H2dg = [_arrayValueQVUPjZ6, _arrayValuec4jCr5R]
		const _cmdL7KOX3 = {
			"_name": __nameimu7NCS,
		"_aliases": __aliasesWQ0shD,
		"parent": _parentchkfS2,
		"usage": _usageWe9H2dg
	}
		const _returnValueGMM5BIz = await _HelpNJu908.commandUsage(_cmdL7KOX3)
		const _argChoicesrtWn10s = {
		
	}
		const _defaultValuesX70fhc = undefined;
		const _defaultValueDescriptiong63tOcH = -4.822178794202935;
		const _descriptionfUyyuvQ = "";
		const _argumentNu0de0a = {
			"argChoices": _argChoicesrtWn10s,
		"defaultValue": _defaultValuesX70fhc,
		"defaultValueDescription": _defaultValueDescriptiong63tOcH,
		"description": _descriptionfUyyuvQ
	}
		const _returnValueAcTizBj = await _HelpNJu908.argumentDescription(_argumentNu0de0a)
	});

	it('test for Help', async () => {
		const _HelpSBxXFj = new Help()
		const _argChoicestYoAIZe = {
		
	}
		const _negateFPQMSzR = "xBLTD2edT5GJ3EX57OBq0ZaDlHgYuKEuw8Qmddj2ya8I29hehQAfoNzVetstUIDLqahuqXX1HRq4Qi";
		const _defaultValueAO4AIr6 = undefined;
		const _returnValuekfdzmC8 = "4UKdSqNp9ixBoiur6MhDpDIL6opyz7COh5vBPp3rzLX4lMilKhh66BP";
		const _defaultValueDescriptionY6O5AHw = () => { return _returnValuekfdzmC8 };
		const _returnValuewqOEXEA = -0.14980335921531562;
		const _envVarzJFdeFo = () => { return _returnValuewqOEXEA };
		const _descriptionm83ggsn = undefined;
		const _optionZ9fXiDf = {
			"argChoices": _argChoicestYoAIZe,
		"negate": _negateFPQMSzR,
		"defaultValue": _defaultValueAO4AIr6,
		"defaultValueDescription": _defaultValueDescriptionY6O5AHw,
		"envVar": _envVarzJFdeFo,
		"description": _descriptionm83ggsn
	}
		const _returnValueKGzffE = await _HelpSBxXFj.optionDescription(_optionZ9fXiDf)
	});

	it('test for Help', async () => {
		const _Helpk6ELK6e = new Help()
		const _arrayValueXrHIKiQ = {
		
	}
		const _arrayValueGppVWzx = true;
		const _optionshb2s57G = [_arrayValueXrHIKiQ, _arrayValueGppVWzx]
		const __hasHelpOptionXpjT1TE = true;
		const __helpShortFlagz2TlMVz = -6.2745311618722965;
		const _returnValueYQjxosa = undefined;
		const __findOptioniz9b2Dt = () => { return _returnValueYQjxosa };
		const _arrayValue9KZHZJ = null;
		const _arrayValueqyyaakx = "ODjmKuR7vZSNotQ6";
		const __helpLongFlagQWm1yK = [_arrayValue9KZHZJ, _arrayValueqyyaakx]
		const _returnValueaaWy8LM = null;
		const _createOptionLytwaAP = () => { return _returnValueaaWy8LM };
		const __helpDescriptionVcma8nT = false;
		const __helpFlagskwAReZF = -8.76860848240309;
		const _cmdbNnEVf = {
			"options": _optionshb2s57G,
		"_hasHelpOption": __hasHelpOptionXpjT1TE,
		"_helpShortFlag": __helpShortFlagz2TlMVz,
		"_findOption": __findOptioniz9b2Dt,
		"_helpLongFlag": __helpLongFlagQWm1yK,
		"createOption": _createOptionLytwaAP,
		"_helpDescription": __helpDescriptionVcma8nT,
		"_helpFlags": __helpFlagskwAReZF
	}
		const _returnValuer2fLfAD = await _Helpk6ELK6e.visibleOptions(_cmdbNnEVf)
		const _arrayValueaKtupOp = 9.867696489637595;
		const _returnValueMNybnJM = [_arrayValueaKtupOp]
		const _flagsakrtP24 = () => { return _returnValueMNybnJM };
		const _optiony5X1VJc = {
			"flags": _flagsakrtP24
	}
		const _returnValueU5Qubbi = await _Helpk6ELK6e.optionTerm(_optiony5X1VJc)
		const _optionsHo2CpuH = {
		
	}
		const __hasHelpOptionpaPIW2J = "2080QeapZMtjL4CADRj83ifDscD8CkhBSkgmGDPskPmi6pjXq6zoEbsSnRs9w5awTrrIqUM7HUcFMGELj7e";
		const __helpShortFlaggZloaD5 = []
		const _returnValueTYq5CLe = 9.680949064979014;
		const _returnValuenTUbFNl = () => { return _returnValueTYq5CLe };
		const __findOptionvFt1Lsm = () => { return _returnValuenTUbFNl };
		const __helpLongFlagDm82yw = "HSrgnnrSFwdEfLuC3GxFC9w2ksC3GmCBNvNT6bCLD5HzZ3YBDds6xWFn9M";
		const _returnValuezw0AM7I = null;
		const _createOptionyGG62kf = () => { return _returnValuezw0AM7I };
		const __helpDescriptionbYT3vZ = false;
		const __helpFlagsFu9dr38 = undefined;
		const _cmdhWdz3D = {
			"options": _optionsHo2CpuH,
		"_hasHelpOption": __hasHelpOptionpaPIW2J,
		"_helpShortFlag": __helpShortFlaggZloaD5,
		"_findOption": __findOptionvFt1Lsm,
		"_helpLongFlag": __helpLongFlagDm82yw,
		"createOption": _createOptionyGG62kf,
		"_helpDescription": __helpDescriptionbYT3vZ,
		"_helpFlags": __helpFlagsFu9dr38
	}
		const _returnValueLRh6HqV = await _Helpk6ELK6e.visibleOptions(_cmdhWdz3D)
		const _argChoicesuYRuKIg = {
		
	}
		const _negateXX7uukX = false;
		const _defaultValuesZL2IXs = "6FRJLQJ9UBlximWCBps8JVVkntGzzrxA4AmnkbB1fjjvVnBdfKFK9IXqac45Lj8pZvU72CwIeYGyHPe";
		const _defaultValueDescriptionNBVjp6p = "GLTIKt5djEOAnFffdAJ6j8f5jLxRSlmqZ5sIdVUYkGymgv5j9uks5MButoVtwiikib3acYmI1";
		const _envVarAdX60jj = undefined;
		const _descriptionVshFW6o = null;
		const _optionb0LXra9 = {
			"argChoices": _argChoicesuYRuKIg,
		"negate": _negateXX7uukX,
		"defaultValue": _defaultValuesZL2IXs,
		"defaultValueDescription": _defaultValueDescriptionNBVjp6p,
		"envVar": _envVarAdX60jj,
		"description": _descriptionVshFW6o
	}
		const _returnValuelDIW3II = await _Helpk6ELK6e.optionDescription(_optionb0LXra9)
	});

	it('test for Help', async () => {
		const _HelpKp6Fbk = new Help()
		const _flagstBCjBBN = undefined;
		const _optionUeS8JJw = {
			"flags": _flagstBCjBBN
	}
		const _returnValue9kA930 = await _HelpKp6Fbk.optionTerm(_optionUeS8JJw)
		const _argChoicesXCLD4j = false;
		const _negateC5CE1ZO = null;
		const _defaultValuekZuXxio = 4.7534245281826255;
		const _defaultValueDescriptionjvg4aZd = "IEIbyirFmEAcPGqSk38BXyyqVFksYNnjatArBMGqj1S7F2Aip6XszT";
		const _envVartIepRpF = undefined;
		const _descriptionD2X9Wo = "HtpR2EPWi4aFLjln1yFiGAETWjdQR6s5cav8XM1Elfd1UEkWc1hKSVf5i9vKXyvVvK7xtAOhxb3EoDDQYVHuTjFDTWstz";
		const _optionTN4YP8E = {
			"argChoices": _argChoicesXCLD4j,
		"negate": _negateC5CE1ZO,
		"defaultValue": _defaultValuekZuXxio,
		"defaultValueDescription": _defaultValueDescriptionjvg4aZd,
		"envVar": _envVartIepRpF,
		"description": _descriptionD2X9Wo
	}
		const _returnValuelu5PQ9k = await _HelpKp6Fbk.optionDescription(_optionTN4YP8E)
	});

	it('test for Help', async () => {
		const _Helpt9cxSkl = new Help()
		const _arrayValuetNQsDG = []
		const _commandsWRdcVBK = [_arrayValuetNQsDG]
		const _returnValueyOAigEp = undefined;
		const __hasImplicitHelpCommandCeOob0p = () => { return _returnValueyOAigEp };
		const __helpCommandnameAndArgsQl8DhFM = {
		
	}
		const _returnValueKjFidF = undefined;
		const _arrayValueS0AMeMo = () => { return _returnValueKjFidF };
		const _returnValueyfU8lGp = null;
		const _arrayValuecgjKS9 = () => { return _returnValueyfU8lGp };
		const _returnValuenzcIaP = [_arrayValuecgjKS9]
		const _arrayValueZfnkwqF = () => { return _returnValuenzcIaP };
		const _returnValueRRjKwGi = false;
		const _arrayValueAdpCrvd = () => { return _returnValueRRjKwGi };
		const _arrayValuepZfhDVx = [_arrayValueAdpCrvd]
		const _arrayValueydzkTdT = "6eJ07X3vmzLowDvcyAoDsog8KI9q86dNkztTzC8hPxLi60XHvb6yjyPuqyYXHwq1wjwd7ysW";
		const _arrayValuemiQ9sfk = true;
		const _arrayValueFItzL9B = undefined;
		const _arrayValueLn3Lbu = [_arrayValuepZfhDVx, _arrayValueydzkTdT, _arrayValuemiQ9sfk, _arrayValueFItzL9B]
		const _arrayValueV4pFcFA = null;
		const _returnValuezeFaHUY = {
		
	}
		const _arrayValueBbZwmPR = () => { return _returnValuezeFaHUY };
		const _returnValuerJjOrlZ = [_arrayValueS0AMeMo, _arrayValueZfnkwqF, _arrayValueLn3Lbu, _arrayValueV4pFcFA, _arrayValueBbZwmPR]
		const _createCommandkfAZk09 = () => { return _returnValuerJjOrlZ };
		const __helpCommandDescriptionWCN0ar = {
		
	}
		const _cmdD2AVRp = {
			"commands": _commandsWRdcVBK,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandCeOob0p,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsQl8DhFM,
		"createCommand": _createCommandkfAZk09,
		"_helpCommandDescription": __helpCommandDescriptionWCN0ar
	}
		const _returnValueIqjbO0X = await _Helpt9cxSkl.visibleCommands(_cmdD2AVRp)
	});
})