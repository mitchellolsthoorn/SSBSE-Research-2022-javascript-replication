export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelppnRciMb = new Help()
		const _cmdhV8NMA = "p0GVIoHITkTPhIrhSsUV5YBtsS7q8DjzbyMG9CO0UsY74wQcrwP15Dp";
		const _arrayValueirsTSBm = -3.4779886068305608;
		const _longestOptionTermLengthv4zg1bg = [_arrayValueirsTSBm]
		const _arrayValueGQvBcCR = false;
		const _arrayValue6oVsE5 = true;
		const _returnValueXASH0DS = [_arrayValueGQvBcCR, _arrayValue6oVsE5]
		const _longestSubcommandTermLengthm8etmv1 = () => { return _returnValueXASH0DS };
		const _returnValueIn2IPrt = undefined;
		const _longestArgumentTermLengthvMQvpi6 = () => { return _returnValueIn2IPrt };
		const _helperKApvDJH = {
			"longestOptionTermLength": _longestOptionTermLengthv4zg1bg,
		"longestSubcommandTermLength": _longestSubcommandTermLengthm8etmv1,
		"longestArgumentTermLength": _longestArgumentTermLengthvMQvpi6
	}
		const _returnValuesg822t3 = await _HelppnRciMb.padWidth(_cmdhV8NMA, _helperKApvDJH)
		const _returnValueOT4yfqI = 5.090590464764064;
		const _descriptionUqewRr = () => { return _returnValueOT4yfqI };
		const _cmdpA881PR = {
			"description": _descriptionUqewRr
	}
		const _returnValuet10SogZ = await _HelppnRciMb.commandDescription(_cmdpA881PR)
	});

	it('test for Help', async () => {
		const _Helpc406Mzf = new Help()
		const _returnValuexDrNOml = -0.30931709879948954;
		const _argumentMWKsED = () => { return _returnValuexDrNOml };
		const _returnValueLaBcuOA = await _Helpc406Mzf.argumentTerm(_argumentMWKsED)
		const _returnValuexEVAhM = null;
		const _descriptionKA80bJg = () => { return _returnValuexEVAhM };
		const _cmdTwRrxH0 = {
			"description": _descriptionKA80bJg
	}
		const _returnValuebxxGPz = await _Helpc406Mzf.subcommandDescription(_cmdTwRrxH0)
	});

	it('test for Help', async () => {
		const _HelpdApgYBt = new Help()
		const _cmd2JvT0S = -2.276350591687307;
		const _sortSubcommandsj5vny24 = 8.99774698685048;
		const _returnValuex2bm0M9 = undefined;
		const _subcommandTermULkjNYo = () => { return _returnValuex2bm0M9 };
		const _helperLQ74g2g = {
			"sortSubcommands": _sortSubcommandsj5vny24,
		"subcommandTerm": _subcommandTermULkjNYo
	}
		const _returnValueGLOgiN = await _HelpdApgYBt.longestSubcommandTermLength(_cmd2JvT0S, _helperLQ74g2g)
		const _messagehhQbENM = undefined;
		const _argumentjMdoCZ8 = new InvalidArgumentError(_messagehhQbENM)
		const _returnValueMHOrzqM = await _HelpdApgYBt.argumentTerm(_argumentjMdoCZ8)
		const _cmdvhFTv0e = null;
		const _arrayValueqoP1bwe = null;
		const _arrayValueTJiJtRt = null;
		const _arrayValuekGqyfk3 = 5.380562792126714;
		const _helperd1Ln05g = [_arrayValueqoP1bwe, _arrayValueTJiJtRt, _arrayValuekGqyfk3]
		const _returnValueCSfBOJ = await _HelpdApgYBt.padWidth(_cmdvhFTv0e, _helperd1Ln05g)
	});

	it('test for Help', async () => {
		const _HelpuCIVXw1 = new Help()
		const _cmdCsfGbh7 = []
		const _returnValuetcjzGA = await _HelpuCIVXw1.commandUsage(_cmdCsfGbh7)
	});

	it('test for Help', async () => {
		const _HelpijVs3ZG = new Help()
		const _argChoiceslh9VGB4 = {
		
	}
		const _defaultValueAmzTZMB = undefined;
		const _defaultValueDescriptiontn74yuB = undefined;
		const _descriptionlqMzOYY = true;
		const _argumentBYsGbxR = {
			"argChoices": _argChoiceslh9VGB4,
		"defaultValue": _defaultValueAmzTZMB,
		"defaultValueDescription": _defaultValueDescriptiontn74yuB,
		"description": _descriptionlqMzOYY
	}
		const _returnValueiL4IxxM = await _HelpijVs3ZG.argumentDescription(_argumentBYsGbxR)
		const _arrayValueaDlQns = false;
		const _arrayValuePgoGbxE = "Dt5TBP7F4ORDDf5zmAHUXmIbtSdxnRqAs2CmKl6fUyac2wu2XF35e6BXKWALNMOU0FuQqkN";
		const _arrayValueNoj5G00 = undefined;
		const _nameIkH8RmC = [_arrayValueaDlQns, _arrayValuePgoGbxE, _arrayValueNoj5G00]
		const _cmdPJkNjG = new Command(_nameIkH8RmC)
		const _arrayValueNXTIrkl = null;
		const _mandatorymBnYcIP = [_arrayValueNXTIrkl]
		const _configT1pkQir = {
			"mandatory": _mandatorymBnYcIP
	}
		const _flagsAjRI6QD = -3.4190749890531436;
		const _descriptionIc2DCiG = undefined;
		const _fnGbbPow9 = {
		
	}
		const _defaultValueRTCOnyc = "IYTvb7k8IAPBHdk1jXV0jlqVdKnzYNnA59LX17xxXOBFkL4izGli6ndsDbRjuUg6D13tGJHHsjOBkQSUneCIrX13rwJmJdUn1";
		const _returnValuexNS6Bno = await _cmdPJkNjG._optionEx(_configT1pkQir, _flagsAjRI6QD, _descriptionIc2DCiG, _fnGbbPow9, _defaultValueRTCOnyc)
		const _returnValue7NjPyi = await _cmdPJkNjG.createHelp()
		const _returnValueLEGxHgb = -7.93241456033865;
		const _returnValuevGMzIN4 = () => { return _returnValueLEGxHgb };
		const _optionWxH2qyL = () => { return _returnValuevGMzIN4 };
		const _returnValueRgfzNL = await _cmdPJkNjG.optionMissingArgument(_optionWxH2qyL)
		const _returnValueiqw36fD = await _HelpijVs3ZG.subcommandDescription(_cmdPJkNjG)
		const _cmdArFloEa = true;
		const _returnValuew5zFXDm = "kxk5UlH46VjE2j9tdNe1Tirwe7LP7pP6BUKUqBjkKs2iNysHFWKWDWSH7lAeDUKjgBv4HCyBvz1AmDdW";
		const _visibleArgumentstHcRyLj = () => { return _returnValuew5zFXDm };
		const _returnValueYWl6zKG = {
		
	}
		const _argumentTermIyLesna = () => { return _returnValueYWl6zKG };
		const _helperfWWxOrQ = {
			"visibleArguments": _visibleArgumentstHcRyLj,
		"argumentTerm": _argumentTermIyLesna
	}
		const _returnValue2ukICM = await _HelpijVs3ZG.longestArgumentTermLength(_cmdArFloEa, _helperfWWxOrQ)
	});

	it('test for Help', async () => {
		const _HelpDx9YtQz = new Help()
		const _returnValuerKCvZ4O = undefined;
		const _cmdh4ZxxIe = () => { return _returnValuerKCvZ4O };
		const _returnValuetDME69F = await _HelpDx9YtQz.visibleOptions(_cmdh4ZxxIe)
		const _returnValueUGOVo9u = true;
		const _arrayValueVdlaRIi = () => { return _returnValueUGOVo9u };
		const _arrayValue2ZGjer = -7.131044399804855;
		const _argChoicesXzF6Ejd = [_arrayValueVdlaRIi, _arrayValue2ZGjer]
		const _defaultValuevaVI5Yh = undefined;
		const _defaultValueDescriptionCY1fsP = "u2ij4FuGa7bN3o4PAKfYVwTZ6jaV6NccfOV36d95jJQKpu2QumINUM7TyuSKnRMlbh";
		const _descriptionfvsOjLf = false;
		const _argumentg89P7IJ = {
			"argChoices": _argChoicesXzF6Ejd,
		"defaultValue": _defaultValuevaVI5Yh,
		"defaultValueDescription": _defaultValueDescriptionCY1fsP,
		"description": _descriptionfvsOjLf
	}
		const _returnValueaKhr1te = await _HelpDx9YtQz.argumentDescription(_argumentg89P7IJ)
		const _strZ5VV3yq = "Uv3qz6IwtRqUzxO4akDcHx2c8zToX8NYsQjRpOB3eC4q9695GSpPvONRuvnIjKibOzbYM";
		const _widthRlO08Gw = -6.428307270629119;
		const _indentGjkZ8Lh = 8.818811925240627;
		const _minColumnWidthXZdgfe6 = -1.1753008726958196;
		const _returnValuesnR5xuP = await _HelpDx9YtQz.wrap(_strZ5VV3yq, _widthRlO08Gw, _indentGjkZ8Lh, _minColumnWidthXZdgfe6)
		const _cmdmX4h1mc = true;
		const _sortSubcommandsQLs04aA = null;
		const _returnValueEPJZIIv = null;
		const _subcommandTerm2LPTWI = () => { return _returnValueEPJZIIv };
		const _helperS0O1LfL = {
			"sortSubcommands": _sortSubcommandsQLs04aA,
		"subcommandTerm": _subcommandTerm2LPTWI
	}
		const _returnValueL5l9Orf = await _HelpDx9YtQz.longestSubcommandTermLength(_cmdmX4h1mc, _helperS0O1LfL)
	});

	it('test for Help', async () => {
		const _HelpKLGXuK = new Help()
		const _arrayValuePixEHy3 = null;
		const _arrayValuegNQpga = {
		
	}
		const _arrayValueLvC7hMG = null;
		const _arrayValueNAWPLrb = 8.839098893450743;
		const _arrayValueuZilHal = [_arrayValuePixEHy3, _arrayValuegNQpga, _arrayValueLvC7hMG, _arrayValueNAWPLrb]
		const _arrayValuelHhbmmu = "psyuHq5pStPhF";
		const _arrayValuerjyF7ea = false;
		const _arrayValueu3bmS1d = [_arrayValuerjyF7ea]
		const _cmdv1t1uos = [_arrayValueuZilHal, _arrayValuelHhbmmu, _arrayValueu3bmS1d]
		const _helperR7e9OaM = new Help()
		const _cmdhQ0vi5G = 5.4443970155586445;
		const _helperOntaqr5 = new Help()
		const _nameZqeLvas = "FLiMmss25UYXYZtv9h69piueltBM5DsybCqdGovbMAJTtsrJrYLGDCJCFV9abMNOo8rR3I8PjFWmrwmP4lOZu";
		const _descriptionUXqarJD = {
		
	}
		const _cmdOxY2Ynd = new Argument(_nameZqeLvas, _descriptionUXqarJD)
		const _fnWsWn6XO = undefined;
		const _returnValueURq4eK = await _cmdOxY2Ynd.argParser(_fnWsWn6XO)
		const _returnValueCyn5nVN = await _cmdOxY2Ynd.argOptional()
		const _returnValuePvDY0SG = await _cmdOxY2Ynd.argRequired()
		const _returnValuejz4slWv = await _helperOntaqr5.subcommandDescription(_cmdOxY2Ynd)
		const _cmdr85A6IE = 2.8886224208387397;
		const _sortSubcommandsCsYKJ1c = {
		
	}
		const _arrayValueWPoNsWH = "5O";
		const _arrayValuegJ5j7d = 4.042399284785667;
		const _arrayValuew6hFty = undefined;
		const _returnValueXb2vI5F = [_arrayValueWPoNsWH, _arrayValuegJ5j7d, _arrayValuew6hFty]
		const _subcommandTermkLERb30 = () => { return _returnValueXb2vI5F };
		const _helperoL9v5F8 = {
			"sortSubcommands": _sortSubcommandsCsYKJ1c,
		"subcommandTerm": _subcommandTermkLERb30
	}
		const _returnValueQfl9EEE = await _helperOntaqr5.formatHelp(_cmdr85A6IE, _helperoL9v5F8)
		const _cmddYiyBb = "c2uOnlGDMFwSGgDYDUT0ozfoD89ptKrnS";
		const _returnValueEiTYlzK = await _helperOntaqr5.subcommandDescription(_cmddYiyBb)
		const _returnValueBYGR9wY = await _helperR7e9OaM.longestOptionTermLength(_cmdhQ0vi5G, _helperOntaqr5)
		const _returnValueF5O8Dqm = -4.255191969649079;
		const _cmdJ3InVs = () => { return _returnValueF5O8Dqm };
		const _returnValuee3aqtwi = await _helperR7e9OaM.subcommandTerm(_cmdJ3InVs)
		const _cmdUERQXOR = true;
		const _helperMVMtqU = "DuUHPdwhxIuuLxNcCawjt4HIXTyBI89aoBu132opvNzAIQCdfv5A6w65j0dc";
		const _returnValuerhD7Aam = await _helperR7e9OaM.formatHelp(_cmdUERQXOR, _helperMVMtqU)
		const _returnValueWUGzSvL = await _HelpKLGXuK.longestArgumentTermLength(_cmdv1t1uos, _helperR7e9OaM)
		const _cmdAhLO667 = "K3xRVevfsx34HPu4LLNilJaqm3y43fD0QkV4Vmvs4NuhILuREBjpP9TKDZ372iKza5yuxZtczRvjCPbUWz";
		const _returnValueqSFYg2Q = undefined;
		const _returnValueG8su5L3 = () => { return _returnValueqSFYg2Q };
		const _helperenkuut5 = () => { return _returnValueG8su5L3 };
		const _returnValueR6NCZz5 = await _HelpKLGXuK.padWidth(_cmdAhLO667, _helperenkuut5)
		const _optionCs5twsD = "gzs149pHcrapJXgvgqFn7xGLkRj0iuzK5qIgVDJKBkboP36TR2r66q6VJxqtSKDyFQ3iIT5UsnqD6mk0npk2xwuzujmL";
		const _returnValueicfK9DB = await _HelpKLGXuK.optionTerm(_optionCs5twsD)
		const _arrayValueXAgYnim = null;
		const _arrayValueiSmllL = 8.108110085041417;
		const _argumentbuAwiiA = [_arrayValueXAgYnim, _arrayValueiSmllL]
		const _returnValueuEEBSjx = await _HelpKLGXuK.argumentTerm(_argumentbuAwiiA)
	});

	it('test for Help', async () => {
		const _HelpQaHSGg4 = new Help()
		const _cmdcAc7WQe = -3.1222755205937682;
		const _helperTtljco2 = undefined;
		const _returnValueVK8wawQ = await _HelpQaHSGg4.longestArgumentTermLength(_cmdcAc7WQe, _helperTtljco2)
		const _returnValuewd9lcFL = null;
		const _cmdSN4jPu = () => { return _returnValuewd9lcFL };
		const _returnValueJ2wfhRI = await _HelpQaHSGg4.visibleOptions(_cmdSN4jPu)
		const _argChoicesu0EhIR1 = {
		
	}
		const _defaultValuewDXTGhl = undefined;
		const _defaultValueDescriptionCkBpX4h = 7.7253703941241305;
		const _descriptionP9Ko3BH = null;
		const _argumentzUtRyYy = {
			"argChoices": _argChoicesu0EhIR1,
		"defaultValue": _defaultValuewDXTGhl,
		"defaultValueDescription": _defaultValueDescriptionCkBpX4h,
		"description": _descriptionP9Ko3BH
	}
		const _returnValuef83kUl = await _HelpQaHSGg4.argumentDescription(_argumentzUtRyYy)
		const _cmdVUY0OhS = true;
		const _helperICICgIr = "2ieqyALlH81mo7y";
		const _returnValuecjS4psS = await _HelpQaHSGg4.longestArgumentTermLength(_cmdVUY0OhS, _helperICICgIr)
	});

	it('test for Help', async () => {
		const _HelpchI4yRk = new Help()
		const _arrayValueSTYGxdf = 0.7554460542962786;
		const _arrayValuemeENLR = true;
		const _arrayValuer15O42T = {
		
	}
		const _arrayValueXPiUJzg = "xJtb3ooeSkVP5HcRYY5vbpsA001";
		const _optiontfkEgxk = [_arrayValueSTYGxdf, _arrayValuemeENLR, _arrayValuer15O42T, _arrayValueXPiUJzg]
		const _returnValueDRP6fiN = await _HelpchI4yRk.optionDescription(_optiontfkEgxk)
		const __namepTrtcr = {
		
	}
		const __aliaseszC6eQeq = {
		
	}
		const _parentn4XWDbg = {
		
	}
		const _returnValueOzbqha = true;
		const _usageMeSM9Wo = () => { return _returnValueOzbqha };
		const _cmdYGdlaNf = {
			"_name": __namepTrtcr,
		"_aliases": __aliaseszC6eQeq,
		"parent": _parentn4XWDbg,
		"usage": _usageMeSM9Wo
	}
		const _returnValueT6tra1Y = await _HelpchI4yRk.commandUsage(_cmdYGdlaNf)
		const _cmdmqWpjcl = false;
		const _returnValue7K7P6A = 7.9125082361628145;
		const _returnValuen6mm8Pr = () => { return _returnValue7K7P6A };
		const _longestOptionTermLengthBmaSNXQ = () => { return _returnValuen6mm8Pr };
		const _returnValuezeaZgYF = true;
		const _longestSubcommandTermLengthWf289vs = () => { return _returnValuezeaZgYF };
		const _returnValuexXRPK3Q = []
		const _longestArgumentTermLengthnEbDNB7 = () => { return _returnValuexXRPK3Q };
		const _helperIc9MtpW = {
			"longestOptionTermLength": _longestOptionTermLengthBmaSNXQ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthWf289vs,
		"longestArgumentTermLength": _longestArgumentTermLengthnEbDNB7
	}
		const _returnValuehO61qAr = await _HelpchI4yRk.padWidth(_cmdmqWpjcl, _helperIc9MtpW)
	});

	it('test for Help', async () => {
		const _HelpklOmQHz = new Help()
		const _flagsynAJu0w = 0.1328126613596048;
		const _optionJce4cQm = {
			"flags": _flagsynAJu0w
	}
		const _returnValueC0U3xJO = await _HelpklOmQHz.optionTerm(_optionJce4cQm)
		const _arrayValueNQAsOIQ = {
		
	}
		const _arrayValue8q7VUT = false;
		const _arrayValueCpyeNb1 = null;
		const _arrayValuePRVYDSl = 9.781226917823588;
		const _arrayValueoDAkhSt = [_arrayValue8q7VUT, _arrayValueCpyeNb1, _arrayValuePRVYDSl]
		const _cmdCIgjWQg = [_arrayValueNQAsOIQ, _arrayValueoDAkhSt]
		const _returnValueZTwrSFL = true;
		const _helperw8kya3B = () => { return _returnValueZTwrSFL };
		const _returnValueVZuYBl3 = await _HelpklOmQHz.padWidth(_cmdCIgjWQg, _helperw8kya3B)
		const _arrayValuemYhXmY = -5.3925293157859375;
		const _cmdQXmWdrL = [_arrayValuemYhXmY]
		const _returnValuelY6Pcjf = await _HelpklOmQHz.visibleOptions(_cmdQXmWdrL)
	});

	it('test for Help', async () => {
		const _HelpLDq54Y4 = new Help()
		const _returnValuebo5qNsk = true;
		const _cmdy3szy9 = () => { return _returnValuebo5qNsk };
		const _returnValuedFAtqCy = await _HelpLDq54Y4.visibleCommands(_cmdy3szy9)
		const _returnValuefZ0hwWs = 7.998491602751486;
		const _cmdBR80Om1 = () => { return _returnValuefZ0hwWs };
		const _sortSubcommandsx98vjh2 = 2.6320361452383327;
		const _returnValueCVLw8O = null;
		const _subcommandTermUzMepdE = () => { return _returnValueCVLw8O };
		const _helperiIUJvKx = {
			"sortSubcommands": _sortSubcommandsx98vjh2,
		"subcommandTerm": _subcommandTermUzMepdE
	}
		const _returnValuec6T5MV5 = await _HelpLDq54Y4.formatHelp(_cmdBR80Om1, _helperiIUJvKx)
		const _arrayValueAUFtKyI = null;
		const _cmdCxz47xx = [_arrayValueAUFtKyI]
		const _returnValueG4zbPxC = await _HelpLDq54Y4.visibleCommands(_cmdCxz47xx)
		const _arrayValuej8fUeb2 = {
		
	}
		const _arrayValueNcyhbtU = undefined;
		const _cmdAfC1gP5 = [_arrayValuej8fUeb2, _arrayValueNcyhbtU]
		const _helperWKvbedv = "UTWHlqwEA3yKMhp37tO78BgozJlxOGofNN7Dl9jkhtcKUPfaCQgUe0hYmFtxbNYVpwyFE7to8hzlTFWjQW9UBN";
		const _returnValuel8VfcGW = await _HelpLDq54Y4.padWidth(_cmdAfC1gP5, _helperWKvbedv)
		const _cmdD83YAS9 = undefined;
		const _returnValueuhHbrhS = await _HelpLDq54Y4.visibleArguments(_cmdD83YAS9)
	});

	it('test for Help', async () => {
		const _HelpcTcSEZ7 = new Help()
		const _returnValueNMQsbeD = true;
		const _matchHukVCL9 = () => { return _returnValueNMQsbeD };
		const _returnValueafemp7y = undefined;
		const _substrKGpgYGN = () => { return _returnValueafemp7y };
		const _strNYmUAzF = {
			"match": _matchHukVCL9,
		"substr": _substrKGpgYGN
	}
		const _widthNRUkhuA = 2.1671790591385527;
		const _indentFi9dpal = -8.30402318057702;
		const _minColumnWidthXNj8rk = 6.855556838601224;
		const _returnValueXQiMT8z = await _HelpcTcSEZ7.wrap(_strNYmUAzF, _widthNRUkhuA, _indentFi9dpal, _minColumnWidthXNj8rk)
		const _cmdHgUNTNJ = null;
		const _arrayValueoouUik3 = 1.9927875052790895;
		const _arrayValueoj0qIH5 = false;
		const _arrayValuezlMfw3C = null;
		const _arrayValuerevtjt1 = [_arrayValueoj0qIH5, _arrayValuezlMfw3C]
		const _helperEsxTqCf = [_arrayValueoouUik3, _arrayValuerevtjt1]
		const _returnValueoiLKWnm = await _HelpcTcSEZ7.longestArgumentTermLength(_cmdHgUNTNJ, _helperEsxTqCf)
	});

	it('test for Help', async () => {
		const _Helpjvpqvd0 = new Help()
		const _arrayValuerJQd5o0 = -9.63195737494155;
		const _arrayValueC9SSlvU = "dwbQlNx9P7swW2dQgEWxknqCttoyo6R1NYcktU3BkCRMRGG9kPX0uSwKKb1HulSnUt";
		const _arrayValueec46AQT = {
		
	}
		const _cmdxe5gPJ9 = [_arrayValuerJQd5o0, _arrayValueC9SSlvU, _arrayValueec46AQT]
		const _returnValueAUP190n = await _Helpjvpqvd0.visibleArguments(_cmdxe5gPJ9)
		const _returnValueb4ydxrE = false;
		const _descriptioniGSfkKX = () => { return _returnValueb4ydxrE };
		const _cmdpLiUWr4 = {
			"description": _descriptioniGSfkKX
	}
		const _returnValueBsJf0po = await _Helpjvpqvd0.subcommandDescription(_cmdpLiUWr4)
	});

	it('test for Help', async () => {
		const _HelpRyjwVaC = new Help()
		const _cmdWD3nSF3 = 3.4525834646630535;
		const _helperrMOGfRr = new Help()
		const _arrayValueHWE6dsP = -3.4078397989474603;
		const _arrayValueTZLUCj = {
		
	}
		const _cmdbCtZHdb = [_arrayValueHWE6dsP, _arrayValueTZLUCj]
		const _returnValueJ9zYPRN = await _helperrMOGfRr.commandDescription(_cmdbCtZHdb)
		const _returnValueg22kyV = -5.818821280010629;
		const _optioniSIDY69 = () => { return _returnValueg22kyV };
		const _returnValueyZZRAwg = await _helperrMOGfRr.optionTerm(_optioniSIDY69)
		const _optionzC4UEU = "tBObAsWNwRoYhbzT6jJ9IphynmVLpn9HXyoFoFGv";
		const _returnValueTQASLc0 = await _helperrMOGfRr.optionDescription(_optionzC4UEU)
		const _returnValuezI6IbDq = null;
		const _cmdEOf1NsW = () => { return _returnValuezI6IbDq };
		const _returnValue9KNcnD = await _helperrMOGfRr.commandDescription(_cmdEOf1NsW)
		const _returnValueFxXoKUu = await _HelpRyjwVaC.padWidth(_cmdWD3nSF3, _helperrMOGfRr)
		const _messagexgr4RUP = 1.309670972919239;
		const _argumentk6cesK = new InvalidArgumentError(_messagexgr4RUP)
		const _returnValueUptz8Qy = await _HelpRyjwVaC.argumentTerm(_argumentk6cesK)
		const _cmdi0ATpu8 = "x3cBvLurkOCZHX9ElYsyK8vcIrarTywqRwJ5kROKGKPbSf1GGLXHlRhQX9";
		const _returnValueRYlKi01 = "vglWUtJs6Ko5ne5ijMiupBN4ESklX8pt7l5OX3dK53IRayVLAzmsRzSSrGWhc9gS6rCIllB2JGexNAz";
		const _arrayValueuCeobWo = () => { return _returnValueRYlKi01 };
		const _arrayValuezv6hKIT = {
		
	}
		const _helperxZPRs7p = [_arrayValueuCeobWo, _arrayValuezv6hKIT]
		const _returnValueBjooTdm = await _HelpRyjwVaC.padWidth(_cmdi0ATpu8, _helperxZPRs7p)
		const _arrayValueKQPQK7h = "ERHaOW9lMOXdL2HCchltm5cG1Df89BLHPVPsahc3eZ";
		const _arrayValuegpy1xq = true;
		const _cmdTPlBRrf = [_arrayValueKQPQK7h, _arrayValuegpy1xq]
		const _returnValueRgDFJ2F = await _HelpRyjwVaC.visibleOptions(_cmdTPlBRrf)
		const _arrayValuecjr0emV = true;
		const _arrayValueZ3TQFCO = false;
		const _cmdaoHdfw9 = [_arrayValuecjr0emV, _arrayValueZ3TQFCO]
		const _returnValueuUAPFGg = true;
		const _visibleOptionsVw9crVw = () => { return _returnValueuUAPFGg };
		const _returnValuep3p1GE = -6.86032417697003;
		const _optionTermmpAKypk = () => { return _returnValuep3p1GE };
		const _helperhJiOpkE = {
			"visibleOptions": _visibleOptionsVw9crVw,
		"optionTerm": _optionTermmpAKypk
	}
		const _returnValueo66NQME = await _HelpRyjwVaC.longestOptionTermLength(_cmdaoHdfw9, _helperhJiOpkE)
	});

	it('test for Help', async () => {
		const _Helpkymnvt9 = new Help()
		const _cmdw5HNpSh = null;
		const _returnValuek3DD6yq = true;
		const _helperdU2wAAq = () => { return _returnValuek3DD6yq };
		const _returnValuebdRbujY = await _Helpkymnvt9.longestOptionTermLength(_cmdw5HNpSh, _helperdU2wAAq)
		const _strswxOp4c = "bo2GYRG7xNQfwRqjXkLcC1nxvwJ37HhJE36p9IL05rn1j1g2XX1998pzU6ADG2mguiygljbHrpvhLKBK1tvEM0cB2";
		const _widthaE7I57a = 0.5043389966662293;
		const _indentrAO8O84 = -1.824456664230258;
		const _minColumnWidthqJFV0H2 = -2.477643924651394;
		const _returnValue1JNDMW = await _Helpkymnvt9.wrap(_strswxOp4c, _widthaE7I57a, _indentrAO8O84, _minColumnWidthqJFV0H2)
		const _argChoicesSOTfyjd = {
		
	}
		const _negateh2c4KZr = "QCOSaH4bJnro8RTwNV1yXbz5u1EEfwnJksnkSdvf8lNGof5lAypmzAEIPVbYdTX7k8Pb4XbMKGM3OixOMrM3IMrVwrZk";
		const _defaultValueZCxMfqB = undefined;
		const _defaultValueDescriptionnzsFnKI = "VUgtp10aklBTGMTA7ApOT4YgsxJHlhrx6";
		const _envVargEA7UOe = undefined;
		const _descriptionz3JFgec = true;
		const _optionaCicSnT = {
			"argChoices": _argChoicesSOTfyjd,
		"negate": _negateh2c4KZr,
		"defaultValue": _defaultValueZCxMfqB,
		"defaultValueDescription": _defaultValueDescriptionnzsFnKI,
		"envVar": _envVargEA7UOe,
		"description": _descriptionz3JFgec
	}
		const _returnValueaIm4Nu = await _Helpkymnvt9.optionDescription(_optionaCicSnT)
		const __argsDescriptioncUaddlU = {
		
	}
		const __argsUZuXBr = false;
		const _cmdvc2xRFi = {
			"_argsDescription": __argsDescriptioncUaddlU,
		"_args": __argsUZuXBr
	}
		const _returnValueEDAleOH = await _Helpkymnvt9.visibleArguments(_cmdvc2xRFi)
	});

	it('test for Help', async () => {
		const _HelpxmML5bI = new Help()
		const _nameu1L3hyt = undefined;
		const _cmdk0svOSe = new Command(_nameu1L3hyt)
		const _allowUnknownm0SXMMY = false;
		const _returnValueIQeckEA = await _cmdk0svOSe.allowUnknownOption(_allowUnknownm0SXMMY)
		const _returnValueHpmL8W1 = true;
		const _splituEhz3dW = () => { return _returnValueHpmL8W1 };
		const _enableOrNameAndArgs5SuHPo = {
			"split": _splituEhz3dW
	}
		const _descriptionkScBij6 = true;
		const _returnValueNXQ1O3 = await _cmdk0svOSe.addHelpCommand(_enableOrNameAndArgs5SuHPo, _descriptionkScBij6)
		const _keyANElepJ = "X5nyrCBDnRfd7HzMRpFkRbXXKVx4VoxZ6NmLZfOzS";
		const _arrayValuekseObBH = null;
		const _arrayValuerb4h08C = [_arrayValuekseObBH]
		const _arrayValueqOhUNgI = [_arrayValuerb4h08C]
		const _arrayValuepW98Ci2 = 2.3929314659658747;
		const _arrayValuewsVpHu1 = undefined;
		const _arrayValuebD54BQV = "xHNHoMbgsJYtN5FRKUoOyUbTeTUxoZOf64exfXtzIWSwXYmgM6vhLOwzSOSyhLzrw";
		const _returnValuet1W8P4w = -7.510598644703073;
		const _arrayValueDXAo2UH = () => { return _returnValuet1W8P4w };
		const _arrayValueXbjvK4H = [_arrayValuebD54BQV, _arrayValueDXAo2UH]
		const _valueeubVo9i = [_arrayValueqOhUNgI, _arrayValuepW98Ci2, _arrayValuewsVpHu1, _arrayValueXbjvK4H]
		const _sourcesXxhrRq = undefined;
		const _returnValueWhCHKAF = await _cmdk0svOSe.setOptionValueWithSource(_keyANElepJ, _valueeubVo9i, _sourcesXxhrRq)
		const _returnValueIFyowg = await _HelpxmML5bI.visibleCommands(_cmdk0svOSe)
		const _returnValueIlNBydP = undefined;
		const _cmdR6bIciL = () => { return _returnValueIlNBydP };
		const _returnValuevLOpXGP = await _HelpxmML5bI.visibleOptions(_cmdR6bIciL)
	});

	it('test for Help', async () => {
		const _Helpgk6Mrul = new Help()
		const _cmdpKbDVi3 = "8lc6EBZEgWPFM5Dpk416R6FOF8HhBQWgJ1QFDS1Wla6";
		const _helperdTA6lQ7 = new Help()
		const _nameOzt2TRc = "Lpxe1rfoYd7gCHpLhL4nKf";
		const _descriptionHR8HCzk = true;
		const _argumentLSOB5do = new Argument(_nameOzt2TRc, _descriptionHR8HCzk)
		const _returnValueaq3OG8g = await _argumentLSOB5do.argRequired()
		const _arrayValueZ6sFPoG = null;
		const _arrayValueVJ0IXLy = undefined;
		const _valuesld8xAb = [_arrayValueZ6sFPoG, _arrayValueVJ0IXLy]
		const _returnValuesN3zo2 = await _argumentLSOB5do.choices(_valuesld8xAb)
		const _valueO0Bfxz6 = {
		
	}
		const _descriptionUSJEd9Q = undefined;
		const _returnValueJRr66CT = await _argumentLSOB5do.default(_valueO0Bfxz6, _descriptionUSJEd9Q)
		const _returnValueRN9Q9MR = await _argumentLSOB5do.argRequired()
		const _valueXVnkvbx = undefined;
		const _descriptionzWNiNtR = undefined;
		const _returnValueQbBvKYe = await _argumentLSOB5do.default(_valueXVnkvbx, _descriptionzWNiNtR)
		const _returnValueH9JBCVC = await _helperdTA6lQ7.argumentDescription(_argumentLSOB5do)
		const _argChoicesubKN54N = {
		
	}
		const _negatebRmzUQ5 = undefined;
		const _defaultValueXadwGU = undefined;
		const _defaultValueDescriptionwEwDt1 = "2ewOSwdvfKyeD25TFMUITN6RcPXXNcRtFus1Y";
		const _envVarduih3By = undefined;
		const _descriptionbStx4r = -2.7675461823226124;
		const _optionH7ipyDJ = {
			"argChoices": _argChoicesubKN54N,
		"negate": _negatebRmzUQ5,
		"defaultValue": _defaultValueXadwGU,
		"defaultValueDescription": _defaultValueDescriptionwEwDt1,
		"envVar": _envVarduih3By,
		"description": _descriptionbStx4r
	}
		const _returnValueKInilSF = await _helperdTA6lQ7.optionDescription(_optionH7ipyDJ)
		const _arrayValuewsjB6RB = undefined;
		const _arrayValuejMf3oc9 = undefined;
		const _arrayValuegRl2wE4 = [_arrayValuejMf3oc9]
		const _arrayValuen1jEFxC = "CdzyGdz9ucT8nq5qSDyXomtnxBdNuZMnPGFQtK8ILhmPwiaF4P7Ch07U18knkEsSXYqW9tDS83xUYm3rKQVR868mm8";
		const _cmdtNwRhGy = [_arrayValuewsjB6RB, _arrayValuegRl2wE4, _arrayValuen1jEFxC]
		const _returnValueDWOquEJ = {
		
	}
		const _longestOptionTermLengthdGV6RTo = () => { return _returnValueDWOquEJ };
		const _returnValueELfxniY = undefined;
		const _longestSubcommandTermLengthltNfmE = () => { return _returnValueELfxniY };
		const _returnValueDzPAzaK = "FZxAIMAegskiE24dgUemkOmvA9XCggcc48ubGkchBriiNpuq8hkGOtEhrWxrSiBjiFh8xwEY4LxD86OxYKjXGmtX1kA";
		const _longestArgumentTermLengthTzbYq52 = () => { return _returnValueDzPAzaK };
		const _helperl8MutAQ = {
			"longestOptionTermLength": _longestOptionTermLengthdGV6RTo,
		"longestSubcommandTermLength": _longestSubcommandTermLengthltNfmE,
		"longestArgumentTermLength": _longestArgumentTermLengthTzbYq52
	}
		const _returnValueB7Pg2M2 = await _helperdTA6lQ7.padWidth(_cmdtNwRhGy, _helperl8MutAQ)
		const _cmdHbg8Ffa = -1.478580685528355;
		const _helperRHpFzlR = new Help()
		const _cmdJIUVUJt = "Z7DbGPN70LXcHdkWzUfU8Xjahhjv2obvqXFxRnjVlb";
		const _returnValueK0PEm8K = await _helperRHpFzlR.subcommandTerm(_cmdJIUVUJt)
		const _arrayValueQg2aKu = -3.2529291902328863;
		const _arrayValueBN1MJI2 = null;
		const _arrayValueEplVElG = "1aHVDRAUj7OGHZ3jeS1AOI22Ym8ls20YrU6IvCIlnT1rJuCUr4laFb2tTCTQC65YUpax5WuiLFeRWnnswT";
		const _returnValuenRsh0u = [_arrayValueQg2aKu, _arrayValueBN1MJI2, _arrayValueEplVElG]
		const _cmdwPLjXWe = () => { return _returnValuenRsh0u };
		const _returnValueGcOGnun = await _helperRHpFzlR.visibleOptions(_cmdwPLjXWe)
		const _cmdyEKWyxg = null;
		const _returnValueP2VjekI = {
		
	}
		const _visibleOptionssD4p1gS = () => { return _returnValueP2VjekI };
		const _returnValuep0t5iaD = "Ai86kE9xiEIgzihwW52nG6mXcoWGbqGlxp1YMfoMlgfBRTB9aAxkk6K8TfN";
		const _optionTermToM8ZHY = () => { return _returnValuep0t5iaD };
		const _helperlNpSvgs = {
			"visibleOptions": _visibleOptionssD4p1gS,
		"optionTerm": _optionTermToM8ZHY
	}
		const _returnValuel31jLG = await _helperRHpFzlR.longestOptionTermLength(_cmdyEKWyxg, _helperlNpSvgs)
		const _returnValueE7DtWqj = "SDeo9163VVZuP0BlqlUSV79WedW1WqwXMVAcIsL2yg1vbM6t1MP7UWUGZAdhoPlKNU98XSj5DxgoukWDb3E8xpqckC";
		const _cmdoguwSbq = () => { return _returnValueE7DtWqj };
		const _helperzzFlYPv = "n7GkwEQCGncgjSqxUHUckNQzkz5nVpZR8MdmasY37I7Kb7vrbvzSXGcEa1xsWF";
		const _returnValues46ncjQ = await _helperRHpFzlR.padWidth(_cmdoguwSbq, _helperzzFlYPv)
		const _returnValueWgiT2j9 = await _helperdTA6lQ7.longestSubcommandTermLength(_cmdHbg8Ffa, _helperRHpFzlR)
		const _returnValueNDs25fT = await _Helpgk6Mrul.longestArgumentTermLength(_cmdpKbDVi3, _helperdTA6lQ7)
		const _argument45uIDR = []
		const _returnValuemQnWXx = await _Helpgk6Mrul.argumentDescription(_argument45uIDR)
	});

	it('test for Help', async () => {
		const _HelpMkmb2j8 = new Help()
		const _strcM8nTm8 = "v66LNryDnkW19szuYtoPqkhaidYMh3xtGuVYl607JlYOGalQNMRIarHCtbP46qrGWlJ5gNiW5p";
		const _widthQof9LH = -2.8595878706882516;
		const _indentDhRCoYV = 8.981619789864212;
		const _minColumnWidthKfNWhOp = true;
		const _returnValueUs6iSqM = await _HelpMkmb2j8.wrap(_strcM8nTm8, _widthQof9LH, _indentDhRCoYV, _minColumnWidthKfNWhOp)
		const _cmdPG2ppP = "2UbCMI9aVDWWoDks7y5h5enFuK5nVcOsbJhXagQbJAjMO7NOPlwvQOp7mNIfN3toa0oliImseqYYMALgEm8";
		const _helperUSYsZbe = []
		const _returnValuefA6TrXx = await _HelpMkmb2j8.longestArgumentTermLength(_cmdPG2ppP, _helperUSYsZbe)
	});

	it('test for Help', async () => {
		const _HelpesCbld9 = new Help()
		const _cmdHNV4y3U = 3.246475695362758;
		const _arrayValuefYJB20t = null;
		const _returnValueeA20mO8 = [_arrayValuefYJB20t]
		const _visibleArguments3uMoSM = () => { return _returnValueeA20mO8 };
		const _returnValueoqgG8b = true;
		const _returnValueDOxRI2E = () => { return _returnValueoqgG8b };
		const _argumentTermO7F220b = () => { return _returnValueDOxRI2E };
		const _helperRiFxxlv = {
			"visibleArguments": _visibleArguments3uMoSM,
		"argumentTerm": _argumentTermO7F220b
	}
		const _returnValueYNZHFZy = await _HelpesCbld9.longestArgumentTermLength(_cmdHNV4y3U, _helperRiFxxlv)
		const _returnValuenQjmtl5 = false;
		const _cmdzDYnvu6 = () => { return _returnValuenQjmtl5 };
		const _returnValuePG6eele = await _HelpesCbld9.subcommandTerm(_cmdzDYnvu6)
	});

	it('test for Help', async () => {
		const _HelpiJ5GvOp = new Help()
		const _arrayValueUVzqWlN = {
		
	}
		const _argumentcz9DsM = [_arrayValueUVzqWlN]
		const _returnValuejWe5ica = await _HelpiJ5GvOp.argumentDescription(_argumentcz9DsM)
		const _arrayValuewKxVX8F = undefined;
		const _arrayValueDv3ENlo = "SVSXMvKMInqQneiSt9zbqbd3ndPJo9MmwXmT3212wGX1VhlaKRur3HtWC4HYhJ9O2eNQPxzv9xYsVOjniV3RceJlnJT5co";
		const _arrayValued0Y8oQ2 = undefined;
		const _arrayValuerTnhRsh = undefined;
		const _arrayValueDIZhi06 = [_arrayValueDv3ENlo, _arrayValued0Y8oQ2, _arrayValuerTnhRsh]
		const _arrayValuedxjk0t5 = "iQaXBd1wmPVzGlNs91dMsTYJw6oHS";
		const _arrayValueiEkiB6E = {
		
	}
		const _arrayValueZAXL8aF = [_arrayValuewKxVX8F, _arrayValueDIZhi06, _arrayValuedxjk0t5, _arrayValueiEkiB6E]
		const _cmdcAS2qzq = [_arrayValueZAXL8aF]
		const _returnValueAq4A4c = await _HelpiJ5GvOp.visibleArguments(_cmdcAS2qzq)
	});

	it('test for Help', async () => {
		const _Help6rIQz1 = new Help()
		const _cmdqE2rDIp = null;
		const _sortSubcommandsVEAE14V = 5.505244685418415;
		const _returnValueLChw9FX = "Yhjw8vVoHbtjfgc6pTBJN9pYTkuldmFTm67i";
		const _subcommandTermPQnh9lS = () => { return _returnValueLChw9FX };
		const _helperVZgbxnn = {
			"sortSubcommands": _sortSubcommandsVEAE14V,
		"subcommandTerm": _subcommandTermPQnh9lS
	}
		const _returnValueXVhtLO = await _Help6rIQz1.formatHelp(_cmdqE2rDIp, _helperVZgbxnn)
		const _strWRPV30B = "1g59NO0c4WBSq3Aq1tbEmHnVEh18lQQr1Q2SjxC0gzeyHBUt";
		const _widthSMdbc4c = -7.768729222028382;
		const _indentIedJwk = -8.316936103009974;
		const _minColumnWidthZ8JgHCQ = -4.731324701084425;
		const _returnValuekY25bjE = await _Help6rIQz1.wrap(_strWRPV30B, _widthSMdbc4c, _indentIedJwk, _minColumnWidthZ8JgHCQ)
	});

	it('test for Help', async () => {
		const _HelpnwAPtsm = new Help()
		const _returnValueMRQFjIl = null;
		const _matchyT6h8bT = () => { return _returnValueMRQFjIl };
		const _substrOrzHew6 = null;
		const _strFnH49Sg = {
			"match": _matchyT6h8bT,
		"substr": _substrOrzHew6
	}
		const _widthmqYFve4 = 6.2516714250034084;
		const _indento3DSExp = 4.294211377205466;
		const _minColumnWidthOQeo3Rj = 3.994226314693659;
		const _returnValuehG2KCrK = await _HelpnwAPtsm.wrap(_strFnH49Sg, _widthmqYFve4, _indento3DSExp, _minColumnWidthOQeo3Rj)
		const __argsDescriptionc44OCpy = {
		
	}
		const __argsptHTtOF = {
		
	}
		const _cmdHWA9RM8 = {
			"_argsDescription": __argsDescriptionc44OCpy,
		"_args": __argsptHTtOF
	}
		const _returnValueSiMxUEc = await _HelpnwAPtsm.visibleArguments(_cmdHWA9RM8)
		const _arrayValueT8E7ev = null;
		const _arrayValueE6WsH7H = false;
		const _cmdPjFhalL = [_arrayValueT8E7ev, _arrayValueE6WsH7H]
		const _returnValueSNDp1If = await _HelpnwAPtsm.commandUsage(_cmdPjFhalL)
		const _namet1mbZqo = 6.495409899850802;
		const _argumentHyHUwOo = new Command(_namet1mbZqo)
		const _namenQqHsLJ = "SDbsHRGhj5YzyVvCb";
		const _returnValueYh4Md2A = await _argumentHyHUwOo.missingArgument(_namenQqHsLJ)
		const _allowUnknownwuYJSQv = true;
		const _returnValueLcJxNV = await _argumentHyHUwOo.allowUnknownOption(_allowUnknownwuYJSQv)
		const _argv0vz6lK = -6.9168538081081525;
		const _parseOptionsIuK6mLq = undefined;
		const _returnValuerlaEgOy = await _argumentHyHUwOo.parse(_argv0vz6lK, _parseOptionsIuK6mLq)
		const _subcommandkdmzTGe = null;
		const _argsWnTKyzm = {
		
	}
		const _returnValueJYuefjS = await _argumentHyHUwOo._executeSubCommand(_subcommandkdmzTGe, _argsWnTKyzm)
		const _strZSvGSX = undefined;
		const _flagspkkmgkg = {
		
	}
		const _descriptionjPWqPe8 = {
		
	}
		const _returnValueWphhjz = await _argumentHyHUwOo.version(_strZSvGSX, _flagspkkmgkg, _descriptionjPWqPe8)
		const _returnValueb8NY4zf = await _HelpnwAPtsm.argumentTerm(_argumentHyHUwOo)
	});

	it('test for Help', async () => {
		const _HelphOr6bl6 = new Help()
		const _returnValue7VpNec = "IyUWtL5ybkijFIFIxsRWLvWvDGQFmNZaEqU9JWAhd16";
		const _descriptionTXysf6w = () => { return _returnValue7VpNec };
		const _cmdEmuvEoW = {
			"description": _descriptionTXysf6w
	}
		const _returnValueNfHdY6v = await _HelphOr6bl6.subcommandDescription(_cmdEmuvEoW)
		const _returnValueF8XKaYp = {
		
	}
		const _sliceQBgIUQ2 = () => { return _returnValueF8XKaYp };
		const _nameubLEawW = {
			"slice": _sliceQBgIUQ2
	}
		const _descriptionIeX5go = null;
		const _optionvMUC9AL = new Argument(_nameubLEawW, _descriptionIeX5go)
		const _valuescTfgZOI = []
		const _returnValued447qZf = await _optionvMUC9AL.choices(_valuescTfgZOI)
		const _valuez4b1TSh = "xfFSAfiPitLBRCtpKyFSEnFHemu2SfozeeJZ9SSaey0o27Vzgi";
		const _descriptionHBrvEzB = true;
		const _returnValueRT8L5gh = await _optionvMUC9AL.default(_valuez4b1TSh, _descriptionHBrvEzB)
		const _returnValuetBZZche = await _HelphOr6bl6.optionDescription(_optionvMUC9AL)
	});

	it('test for Help', async () => {
		const _HelpsGSCJJC = new Help()
		const _nameSSEi2Lk = null;
		const _cmdTB27cqP = new Command(_nameSSEi2Lk)
		const _configurationuHOOlXY = undefined;
		const _returnValuevfy1RtN = await _cmdTB27cqP.configureOutput(_configurationuHOOlXY)
		const _strK7swCXa = undefined;
		const _returnValueS3XPM3M = await _cmdTB27cqP.name(_strK7swCXa)
		const _promiseIel3KNF = {
		
	}
		const _eventIEx5vkZ = "mofKpFpPK";
		const _returnValueiDwU7ng = await _cmdTB27cqP._chainOrCallHooks(_promiseIel3KNF, _eventIEx5vkZ)
		const _returnValueX8KM8Fq = await _HelpsGSCJJC.visibleOptions(_cmdTB27cqP)
		const _arrayValueI68MaFC = "ZGPgfOSPWJk25wNSWHj6UWTTUXJG8nA1IdeDmfOVTzvvvBl65qYizV4JdaPIS434buuHo";
		const _cmdT6q7EA = [_arrayValueI68MaFC]
		const _returnValueyiLySPH = await _HelpsGSCJJC.subcommandDescription(_cmdT6q7EA)
		const _cmdYNPUIE1 = "5QCJqEV2ln3yHmksw5f3dOET6cCbtSq4JJ5XIKzBRXODkSsoW6DrPfD7JJ25ytAERH68tzJ";
		const _returnValueMuYEUZy = await _HelpsGSCJJC.visibleArguments(_cmdYNPUIE1)
		const _argumentjL6M67o = "WkAtj1L2L0ooTDNDdFSNbO9cObRnV0hTAlSAbrUtAsRjWd4B54Eyb0DATgAEe95Bay9COfKjWa18Ei6cDMFAf8rnbXS";
		const _returnValueXIuUJOH = await _HelpsGSCJJC.argumentDescription(_argumentjL6M67o)
	});

	it('test for Help', async () => {
		const _Helpqd80aM = new Help()
		const _strd4RE91S = "M";
		const _widthHcBtUZv = 7.302308635337557;
		const _indentnUpSldy = -8.613290039525513;
		const _minColumnWidthzCzEq2J = "zBhsWvCsRvWVGNC7I3coDj57JUVlVBAbfYLumm4h0fb6vNLSHEumVFenmoswc7VTYLKSYdR7QVajKdr1XLFRux1aSPPb";
		const _returnValueiYqTOSb = await _Helpqd80aM.wrap(_strd4RE91S, _widthHcBtUZv, _indentnUpSldy, _minColumnWidthzCzEq2J)
		const _cmdSI1348e = "fTSlHyG1hiPGwEbD9WtLhIWG1cVn";
		const _returnValuevQ3kNA = await _Helpqd80aM.commandDescription(_cmdSI1348e)
		const _argumentJqOXF0q = false;
		const _returnValueqt8xlFe = await _Helpqd80aM.argumentTerm(_argumentJqOXF0q)
	});

	it('test for Help', async () => {
		const _HelpJyj403L = new Help()
		const _cmdTggw0fE = "R4yiX9IOtnvIHSyaecoNGxKb6lCNzemd1jKPc7sfeJNNYazel8SnYKVW7LmIdjeUFG4L";
		const _helperJZzcIc = new Help()
		const _argChoicesGb1XASk = {
		
	}
		const _negateOfoywOu = "FVmJSslE72CnSQ92M49NJEWdzkoU3voCJ2trbbRBcAzFqriOxcK4cBla1ipD2TOgO09";
		const _defaultValueubGolsV = undefined;
		const _defaultValueDescriptionpt5ojL = true;
		const _arrayValueBtAf2g4 = false;
		const _returnValuelvYMHVw = "tKz6w2OLnRlQYzFD8EqyF3h0c712Mi12T2zv9niVuQP22u2LWShoGGXP4IKsgc2MucL8eTk4P43fy7";
		const _arrayValueMbs6dlZ = () => { return _returnValuelvYMHVw };
		const _arrayValueuBeK7bX = {
		
	}
		const _arrayValueBf7aqc = null;
		const _envVarHuZCLCc = [_arrayValueBtAf2g4, _arrayValueMbs6dlZ, _arrayValueuBeK7bX, _arrayValueBf7aqc]
		const _descriptionXGHE75K = "YYHvS8ng33apycopN";
		const _optioncUDkMW6 = {
			"argChoices": _argChoicesGb1XASk,
		"negate": _negateOfoywOu,
		"defaultValue": _defaultValueubGolsV,
		"defaultValueDescription": _defaultValueDescriptionpt5ojL,
		"envVar": _envVarHuZCLCc,
		"description": _descriptionXGHE75K
	}
		const _returnValuedS2XaI6 = await _helperJZzcIc.optionDescription(_optioncUDkMW6)
		const _returnValuenAZ0Wze = null;
		const _returnValue58I98D = () => { return _returnValuenAZ0Wze };
		const _cmdAXcAZ8Y = () => { return _returnValue58I98D };
		const _returnValueVV2Y5gP = true;
		const _visibleOptionszhVR7PR = () => { return _returnValueVV2Y5gP };
		const _returnValueDQa3DQ = {
		
	}
		const _optionTermOhTBZUX = () => { return _returnValueDQa3DQ };
		const _helperP8v9XOa = {
			"visibleOptions": _visibleOptionszhVR7PR,
		"optionTerm": _optionTermOhTBZUX
	}
		const _returnValuengSA7K4 = await _helperJZzcIc.longestOptionTermLength(_cmdAXcAZ8Y, _helperP8v9XOa)
		const _returnValueIpgNsrB = undefined;
		const _arrayValueJE8arMp = () => { return _returnValueIpgNsrB };
		const _arrayValuepZjCcjH = "2DaE478nWg2asKvATFWu7tpOafIDY2hNuNOku1L5eI3GUgLbOQhKveuJSoTSAJ3DIk3tjCA";
		const _arrayValuePQ0NAmh = undefined;
		const _arrayValueMY4OMPl = [_arrayValuepZjCcjH, _arrayValuePQ0NAmh]
		const _arrayValuethQKgQ = 3.351373475524202;
		const _cmdaXKG93v = [_arrayValueJE8arMp, _arrayValueMY4OMPl, _arrayValuethQKgQ]
		const _returnValueMLUBnvR = await _helperJZzcIc.visibleArguments(_cmdaXKG93v)
		const _returnValuenLCaEA6 = null;
		const _cmdcUhz6DA = () => { return _returnValuenLCaEA6 };
		const _returnValuejFZP8oB = await _helperJZzcIc.visibleCommands(_cmdcUhz6DA)
		const _returnValueDO6hsbl = await _HelpJyj403L.formatHelp(_cmdTggw0fE, _helperJZzcIc)
		const _cmdv5uKKxU = null;
		const _arrayValueEAVM82T = false;
		const _arrayValuern5Jsq8 = undefined;
		const _returnValuex0NT9IJ = -5.6900410068096265;
		const _arrayValueslazXNb = () => { return _returnValuex0NT9IJ };
		const _arrayValue1zfQSp = null;
		const _arrayValuevfcZeRi = [_arrayValue1zfQSp]
		const _arrayValueALqlk9y = [_arrayValueslazXNb, _arrayValuevfcZeRi]
		const _helperkdJimYc = [_arrayValueEAVM82T, _arrayValuern5Jsq8, _arrayValueALqlk9y]
		const _returnValueP19cx1K = await _HelpJyj403L.padWidth(_cmdv5uKKxU, _helperkdJimYc)
	});

	it('test for Help', async () => {
		const _HelpZWb5K3p = new Help()
		const _flagssIrpmW = "vVSzBbdAaGCbhVHtoDyb4A3ka89spcNJ2W2Nzqecgc";
		const _descriptionp6tcapt = true;
		const _optiongs5rAS = new Option(_flagssIrpmW, _descriptionp6tcapt)
		const _returnValuedSBZApv = await _optiongs5rAS.attributeName()
		const _fneFJzHAn = undefined;
		const _returnValuedD6n23u = await _optiongs5rAS.argParser(_fneFJzHAn)
		const _hidemoZ8iiZ = false;
		const _returnValuev6Op22Q = await _optiongs5rAS.hideHelp(_hidemoZ8iiZ)
		const _returnValuepW1Rcsx = await _HelpZWb5K3p.optionTerm(_optiongs5rAS)
	});

	it('test for Help', async () => {
		const _HelpPoYI1g = new Help()
		const _returnValuefe8Ruim = {
		
	}
		const _argumentIgIpVla = () => { return _returnValuefe8Ruim };
		const _returnValueB9I4xiB = await _HelpPoYI1g.argumentDescription(_argumentIgIpVla)
		const _returnValueJ7ENGg6 = null;
		const _returnValuepXmazih = () => { return _returnValueJ7ENGg6 };
		const _optionh9G2q7V = () => { return _returnValuepXmazih };
		const _returnValuesYDrEjE = await _HelpPoYI1g.optionDescription(_optionh9G2q7V)
		const _namePo0XTiW = null;
		const _cmdo8JvKJH = new Command(_namePo0XTiW)
		const _returnValueqUaja5I = 0.26605937527470047;
		const _thenNkTJYmc = () => { return _returnValueqUaja5I };
		const _promisemg5hY1p = {
			"then": _thenNkTJYmc
	}
		const _arrayValuelKwqVLg = true;
		const _arrayValueZvSI5mn = null;
		const _arrayValuetYXD6ff = {
		
	}
		const _returnValuenrkbdWm = [_arrayValuelKwqVLg, _arrayValueZvSI5mn, _arrayValuetYXD6ff]
		const _fnPVwt5re = () => { return _returnValuenrkbdWm };
		const _returnValueKFex50 = await _cmdo8JvKJH._chainOrCall(_promisemg5hY1p, _fnPVwt5re)
		const _arrayValueVeDnInQ = undefined;
		const _fnx2c4vxn = [_arrayValueVeDnInQ]
		const _returnValuef3ioSEy = await _cmdo8JvKJH.exitOverride(_fnx2c4vxn)
		const _returnValueDtKUGhS = await _HelpPoYI1g.subcommandTerm(_cmdo8JvKJH)
	});

	it('test for Help', async () => {
		const _Helpr8YdFM2 = new Help()
		const _nameA2bGU1d = "vsKax2Htk60IGZWNMrW4MtsxMEHzrH895i4Rvk7kVQHhBynVyHwHcFvbkW6x2ZrxptRlfmnIjZom5loX";
		const _descriptionwroM4Of = undefined;
		const _argumentxLEQ0D = new Argument(_nameA2bGU1d, _descriptionwroM4Of)
		const _returnValueZEFaBn9 = await _argumentxLEQ0D.argRequired()
		const _valueSCN43Mq = null;
		const _descriptionQ9H1kLR = undefined;
		const _returnValueCwp17BZ = await _argumentxLEQ0D.default(_valueSCN43Mq, _descriptionQ9H1kLR)
		const _returnValueHt2ycQX = await _Helpr8YdFM2.argumentDescription(_argumentxLEQ0D)
		const _cmdffqenVQ = "7U3xxSVKBfJOf1W7UGc4Qbmqkv05t5TAnLVrgJPqRj8q";
		const _returnValueTI9nTF = false;
		const _helpervyMvyFz = () => { return _returnValueTI9nTF };
		const _returnValuegUzDvaM = await _Helpr8YdFM2.longestOptionTermLength(_cmdffqenVQ, _helpervyMvyFz)
	});
})