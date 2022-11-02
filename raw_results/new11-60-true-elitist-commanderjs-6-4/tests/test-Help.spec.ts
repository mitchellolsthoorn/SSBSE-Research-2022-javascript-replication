export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpset81M = new Help()
		const _argChoicesF2GLhH = {
		
	}
		const _defaultValueJ95y2wZ = undefined;
		const _defaultValueDescriptiondKlo30p = -4.98468124851018;
		const _descriptionK9iVjgC = undefined;
		const _argumentmwJKvEY = {
			"argChoices": _argChoicesF2GLhH,
		"defaultValue": _defaultValueJ95y2wZ,
		"defaultValueDescription": _defaultValueDescriptiondKlo30p,
		"description": _descriptionK9iVjgC
	}
		const _returnValueo2Avw6j = await _Helpset81M.argumentDescription(_argumentmwJKvEY)
		const _argChoicesAs4fqT = {
		
	}
		const _returnValueLBfmQXG = undefined;
		const _arrayValueccwNAsN = () => { return _returnValueLBfmQXG };
		const _arrayValuerDNWYUq = null;
		const _arrayValueSHNPHXm = 7.751720882333469;
		const _negateZ5U4nEz = [_arrayValueccwNAsN, _arrayValuerDNWYUq, _arrayValueSHNPHXm]
		const _defaultValueyimDyv0 = undefined;
		const _defaultValueDescriptionvelVEC7 = false;
		const _envVarqRdXLQU = undefined;
		const _returnValueTx1IpmW = true;
		const _descriptionApHKyC0 = () => { return _returnValueTx1IpmW };
		const _optionhEFK73G = {
			"argChoices": _argChoicesAs4fqT,
		"negate": _negateZ5U4nEz,
		"defaultValue": _defaultValueyimDyv0,
		"defaultValueDescription": _defaultValueDescriptionvelVEC7,
		"envVar": _envVarqRdXLQU,
		"description": _descriptionApHKyC0
	}
		const _returnValueYRvtlNj = await _Helpset81M.optionDescription(_optionhEFK73G)
		const _returnValuePmcD38L = {
		
	}
		const _descriptioneuXoVY = () => { return _returnValuePmcD38L };
		const _cmdLZQor7S = {
			"description": _descriptioneuXoVY
	}
		const _returnValuedLVeYrE = await _Helpset81M.subcommandDescription(_cmdLZQor7S)
		const __nameUNKlo6Z = {
		
	}
		const __aliaseskIIL1wK = {
		
	}
		const _parentvzrMOd1 = {
		
	}
		const _arrayValueYFAZ6ok = true;
		const _arrayValuegJFUlUx = 9.466665326891729;
		const _arrayValueLgXzNhG = {
		
	}
		const _arrayValueBA5GGEe = 7.462872031895728;
		const _arrayValueyTbWboP = [_arrayValuegJFUlUx, _arrayValueLgXzNhG, _arrayValueBA5GGEe]
		const _returnValueLyCXbHs = [_arrayValueYFAZ6ok, _arrayValueyTbWboP]
		const _usageyU8Ddba = () => { return _returnValueLyCXbHs };
		const _cmdWCq0utQ = {
			"_name": __nameUNKlo6Z,
		"_aliases": __aliaseskIIL1wK,
		"parent": _parentvzrMOd1,
		"usage": _usageyU8Ddba
	}
		const _returnValueIUpZ8wH = await _Helpset81M.commandUsage(_cmdWCq0utQ)
		const _flagszv92MQ7 = "nPvPMGmjumRhKQRDzPYF1FvS9ZHVA0rvc2lEf8DNxWYoSWPbW";
		const _optionTrLJaSa = {
			"flags": _flagszv92MQ7
	}
		const _returnValueOZG7r99 = await _Helpset81M.optionTerm(_optionTrLJaSa)
	});

	it('test for Help', async () => {
		const _HelpL2F9KA0 = new Help()
		const _arrayValueFtyGuBs = undefined;
		const _arrayValuew9Ca77 = -0.4362459163448982;
		const _returnValueqdtkAMY = "9TvppShwnFq3MPhBYFWr1pmiLBJv2cTTsOqAE7LU";
		const _arrayValuexwCtRP = () => { return _returnValueqdtkAMY };
		const _returnValueOsZiuBo = [_arrayValueFtyGuBs, _arrayValuew9Ca77, _arrayValuexwCtRP]
		const _cmd8asZVY = () => { return _returnValueOsZiuBo };
		const _returnValueyjtczD7 = true;
		const _returnValuer54wQ4u = () => { return _returnValueyjtczD7 };
		const _visibleOptionsbTlrDGA = () => { return _returnValuer54wQ4u };
		const _returnValuegYUH6ye = {
		
	}
		const _optionTermM1WLYEt = () => { return _returnValuegYUH6ye };
		const _helperU7rvDtz = {
			"visibleOptions": _visibleOptionsbTlrDGA,
		"optionTerm": _optionTermM1WLYEt
	}
		const _returnValueNo85QnT = await _HelpL2F9KA0.longestOptionTermLength(_cmd8asZVY, _helperU7rvDtz)
		const __nameuoqTjBJ = {
		
	}
		const __aliasesmhxmUts = {
		
	}
		const _parentz0FagxS = {
		
	}
		const _returnValuee9tgNRR = "9UabnSYLFkGXXpxxLVUImf";
		const _usageYuyzqS1 = () => { return _returnValuee9tgNRR };
		const _cmdLyU0qVF = {
			"_name": __nameuoqTjBJ,
		"_aliases": __aliasesmhxmUts,
		"parent": _parentz0FagxS,
		"usage": _usageYuyzqS1
	}
		const _returnValueKWUvur = await _HelpL2F9KA0.commandUsage(_cmdLyU0qVF)
		const _argChoicesXvGEWSw = {
		
	}
		const _negatev2OMR1u = undefined;
		const _defaultValueqf21Okx = 5.586786475595982;
		const _defaultValueDescriptionOCfWD49 = undefined;
		const _envVaru8ECgRK = undefined;
		const _description06q3k2 = -9.914669149699149;
		const _option9e4mWw = {
			"argChoices": _argChoicesXvGEWSw,
		"negate": _negatev2OMR1u,
		"defaultValue": _defaultValueqf21Okx,
		"defaultValueDescription": _defaultValueDescriptionOCfWD49,
		"envVar": _envVaru8ECgRK,
		"description": _description06q3k2
	}
		const _returnValueaE3rOA = await _HelpL2F9KA0.optionDescription(_option9e4mWw)
	});

	it('test for Help', async () => {
		const _HelpuZ8BB0Z = new Help()
		const _returnValueA1j8lxZ = true;
		const _descriptionYp2GlYi = () => { return _returnValueA1j8lxZ };
		const _cmdxc7jMVe = {
			"description": _descriptionYp2GlYi
	}
		const _returnValuetFpOk5m = await _HelpuZ8BB0Z.subcommandDescription(_cmdxc7jMVe)
		const _returnValueV9LKW6y = undefined;
		const _descriptionWbvVXps = () => { return _returnValueV9LKW6y };
		const _cmdnO1O8hk = {
			"description": _descriptionWbvVXps
	}
		const _returnValuevYBTWD7 = await _HelpuZ8BB0Z.commandDescription(_cmdnO1O8hk)
	});

	it('test for Help', async () => {
		const _HelpdT5GsXV = new Help()
		const _argChoicesD49O3yI = {
		
	}
		const _negateG82dDuP = false;
		const _defaultValuet8tkQTz = undefined;
		const _arrayValue83XbwS = -9.394251223429688;
		const _defaultValueDescriptionK5Z2pQx = [_arrayValue83XbwS]
		const _envVarci3UcKA = undefined;
		const _descriptionLuTKQOo = undefined;
		const _optionCMiN4EX = {
			"argChoices": _argChoicesD49O3yI,
		"negate": _negateG82dDuP,
		"defaultValue": _defaultValuet8tkQTz,
		"defaultValueDescription": _defaultValueDescriptionK5Z2pQx,
		"envVar": _envVarci3UcKA,
		"description": _descriptionLuTKQOo
	}
		const _returnValueBJBNv9L = await _HelpdT5GsXV.optionDescription(_optionCMiN4EX)
		const _cmdSky1GD = -6.824255721938188;
		const _sortSubcommandsALmIHfa = -2.5082907356315847;
		const _arrayValuecweJx5O = true;
		const _arrayValueJXSWJtQ = "I";
		const _arrayValueBY5YRf5 = undefined;
		const _arrayValueB1PPkVK = [_arrayValuecweJx5O, _arrayValueJXSWJtQ, _arrayValueBY5YRf5]
		const _arrayValuevY4BhYz = undefined;
		const _returnValueKBrUGpK = [_arrayValueB1PPkVK, _arrayValuevY4BhYz]
		const _subcommandTermFIc0GBa = () => { return _returnValueKBrUGpK };
		const _helperbVO6Np = {
			"sortSubcommands": _sortSubcommandsALmIHfa,
		"subcommandTerm": _subcommandTermFIc0GBa
	}
		const _returnValue8N0pTP = await _HelpdT5GsXV.formatHelp(_cmdSky1GD, _helperbVO6Np)
		const _flagsyCV3Tv = "PnWNs2jTfQOinQq3WtHTb4pUCLKnlB2aZu7N7lmgrwSBPTDAYDHW36HSHaoho4GVwi8dagaQYQNJBXVR68cdksSyBPv4cQ3Jl7";
		const _optionwc1WkDa = {
			"flags": _flagsyCV3Tv
	}
		const _returnValueFkJ73yg = await _HelpdT5GsXV.optionTerm(_optionwc1WkDa)
		const _returnValueDVXBIgB = "Yx1s3aLxkxQ65sHlD19OduoVqISGifDbbGAlcS8KRbKH8OAnyyjkXLXqJ8rmmjOEgcJicFEsycDGGymb";
		const _cmdDAyurU9 = () => { return _returnValueDVXBIgB };
		const _arrayValueL39p6I = 5.654006591373761;
		const _arrayValueiutHL6r = null;
		const _returnValuemkEs2vQ = null;
		const _arrayValueg84BTth = () => { return _returnValuemkEs2vQ };
		const _arrayValueIIziyX = [_arrayValueiutHL6r, _arrayValueg84BTth]
		const _sortSubcommandseGbKpU = [_arrayValueL39p6I, _arrayValueIIziyX]
		const _returnValuemcHYRth = null;
		const _subcommandTermGISWvc = () => { return _returnValuemcHYRth };
		const _helperjSHtqlD = {
			"sortSubcommands": _sortSubcommandseGbKpU,
		"subcommandTerm": _subcommandTermGISWvc
	}
		const _returnValueT5e2RSe = await _HelpdT5GsXV.longestSubcommandTermLength(_cmdDAyurU9, _helperjSHtqlD)
	});

	it('test for Help', async () => {
		const _HelpXkeccdn = new Help()
		const _cmdmXjcRre = {
		
	}
		const _sortSubcommandsSskkqma = {
		
	}
		const _returnValuefnZtaEL = null;
		const _subcommandTermzAGAFfl = () => { return _returnValuefnZtaEL };
		const _helperBS0ZcUG = {
			"sortSubcommands": _sortSubcommandsSskkqma,
		"subcommandTerm": _subcommandTermzAGAFfl
	}
		const _returnValueMLR1IIl = await _HelpXkeccdn.formatHelp(_cmdmXjcRre, _helperBS0ZcUG)
		const _matchZskUzHM = 7.216738256091524;
		const _substrCeAEryD = 3.366562327922228;
		const _strM0pn9gG = {
			"match": _matchZskUzHM,
		"substr": _substrCeAEryD
	}
		const _widthRHLWeY7 = -5.68654801523617;
		const _indentfRHNAjn = 9.589610937866816;
		const _minColumnWidthPqeMsxW = -7.758358105568659;
		const _returnValuenEPakGr = await _HelpXkeccdn.wrap(_strM0pn9gG, _widthRHLWeY7, _indentfRHNAjn, _minColumnWidthPqeMsxW)
		const _commandsQmwpAqE = {
		
	}
		const _returnValueYM88n8B = false;
		const __hasImplicitHelpCommandfdNWNJd = () => { return _returnValueYM88n8B };
		const __helpCommandnameAndArgsJCUdJeL = {
		
	}
		const _returnValueF6QTMl = null;
		const _returnValueWEbUSs7 = () => { return _returnValueF6QTMl };
		const _createCommandSsA083v = () => { return _returnValueWEbUSs7 };
		const __helpCommandDescriptionfCq9Hf = "g0wmgckBMfuo1bYg8Lh8JCDluDvesbGtcPKuyq";
		const _cmdl9SlDwD = {
			"commands": _commandsQmwpAqE,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandfdNWNJd,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsJCUdJeL,
		"createCommand": _createCommandSsA083v,
		"_helpCommandDescription": __helpCommandDescriptionfCq9Hf
	}
		const _returnValueZowyqQR = await _HelpXkeccdn.visibleCommands(_cmdl9SlDwD)
		const __argsFvnEUU8 = {
		
	}
		const __nameIwyHJP5 = false;
		const __aliaseslowIDIy = {
		
	}
		const _optionsP6e9Xds = {
		
	}
		const _cmdq016Cjf = {
			"_args": __argsFvnEUU8,
		"_name": __nameIwyHJP5,
		"_aliases": __aliaseslowIDIy,
		"options": _optionsP6e9Xds
	}
		const _returnValueWQ8thGr = await _HelpXkeccdn.subcommandTerm(_cmdq016Cjf)
		const _commandsUM9zi8d = {
		
	}
		const _returnValuehr5k3hV = undefined;
		const __hasImplicitHelpCommandiZJUx6a = () => { return _returnValuehr5k3hV };
		const __helpCommandnameAndArgsiNJlwge = {
		
	}
		const _arrayValuePHc9L6i = undefined;
		const _arrayValueJnSEm9O = -6.660045465137418;
		const _arrayValueeQCgiq7 = true;
		const _arrayValuegd312jM = [_arrayValueeQCgiq7]
		const _returnValuedorChu8 = [_arrayValuePHc9L6i, _arrayValueJnSEm9O, _arrayValuegd312jM]
		const _createCommandVciXk4W = () => { return _returnValuedorChu8 };
		const __helpCommandDescriptionl1gGgws = null;
		const _cmdhXKds3 = {
			"commands": _commandsUM9zi8d,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandiZJUx6a,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsiNJlwge,
		"createCommand": _createCommandVciXk4W,
		"_helpCommandDescription": __helpCommandDescriptionl1gGgws
	}
		const _returnValueOvuEfvg = await _HelpXkeccdn.visibleCommands(_cmdhXKds3)
	});

	it('test for Help', async () => {
		const _HelpmHlKkTW = new Help()
		const _optionsNp6ne17 = {
		
	}
		const __hasHelpOptionScrkKOC = "mCfzTxcEO29Gt33MedSk3O8s12hhuJ13mX9FhUTuKPWNlXM7f9f0wjngR9Yq9FxxGKAaEgfCZqIuqImJ2gyaH";
		const __helpShortFlagT64yACb = "GwTPweuRK9PWjkz60wTecGAxVP1Tgyv5QKopJPdYPr5oHWD5dNg7vvJRKr9";
		const _returnValuewpyVCe3 = -8.593010246797212;
		const __findOptionuJkqDYj = () => { return _returnValuewpyVCe3 };
		const __helpLongFlagdBj5sUL = null;
		const _returnValueQk7Jn3q = "gfjHADpnAQvoQkKcf4GPwpaonjqD4Sd9NGdi";
		const _createOptionu2q3xao = () => { return _returnValueQk7Jn3q };
		const __helpDescription3uQPaO = null;
		const __helpFlagsBLZiS3V = null;
		const _cmdHosKQWF = {
			"options": _optionsNp6ne17,
		"_hasHelpOption": __hasHelpOptionScrkKOC,
		"_helpShortFlag": __helpShortFlagT64yACb,
		"_findOption": __findOptionuJkqDYj,
		"_helpLongFlag": __helpLongFlagdBj5sUL,
		"createOption": _createOptionu2q3xao,
		"_helpDescription": __helpDescription3uQPaO,
		"_helpFlags": __helpFlagsBLZiS3V
	}
		const _returnValuePgJxiNE = await _HelpmHlKkTW.visibleOptions(_cmdHosKQWF)
		const _argChoicesIPaFv9 = {
		
	}
		const _defaultValuenG1uQsi = undefined;
		const _defaultValueDescriptionUnQG9So = false;
		const _descriptiony3oT29u = 1.013346495471625;
		const _argumentGeMSpZz = {
			"argChoices": _argChoicesIPaFv9,
		"defaultValue": _defaultValuenG1uQsi,
		"defaultValueDescription": _defaultValueDescriptionUnQG9So,
		"description": _descriptiony3oT29u
	}
		const _returnValuejeL61Dq = await _HelpmHlKkTW.argumentDescription(_argumentGeMSpZz)
		const _cmddbWEiC0 = null;
		const _returnValuefs0uooU = undefined;
		const _longestOptionTermLengthj0jbUhq = () => { return _returnValuefs0uooU };
		const _returnValueNvCFHcz = "es7gm86keOuA9HPHwj39uhVxBoChToIl8cR4qmINSxMJC9XJN";
		const _longestSubcommandTermLengthNMaS94O = () => { return _returnValueNvCFHcz };
		const _returnValueJBAz0VI = null;
		const _longestArgumentTermLengthj4ONqC4 = () => { return _returnValueJBAz0VI };
		const _helperOdDXPXA = {
			"longestOptionTermLength": _longestOptionTermLengthj0jbUhq,
		"longestSubcommandTermLength": _longestSubcommandTermLengthNMaS94O,
		"longestArgumentTermLength": _longestArgumentTermLengthj4ONqC4
	}
		const _returnValuevl9Cihz = await _HelpmHlKkTW.padWidth(_cmddbWEiC0, _helperOdDXPXA)
		const _argChoicesYLDvga = {
		
	}
		const _negateE0hFiG3 = 2.088797904072708;
		const _defaultValueLIhpQ2G = undefined;
		const _defaultValueDescriptionBvWAMvF = false;
		const _envVarGC1Mi9 = undefined;
		const _descriptionmvwx2c4 = true;
		const _option9Xk6BG = {
			"argChoices": _argChoicesYLDvga,
		"negate": _negateE0hFiG3,
		"defaultValue": _defaultValueLIhpQ2G,
		"defaultValueDescription": _defaultValueDescriptionBvWAMvF,
		"envVar": _envVarGC1Mi9,
		"description": _descriptionmvwx2c4
	}
		const _returnValuetHyOjT = await _HelpmHlKkTW.optionDescription(_option9Xk6BG)
		const _argChoices5fAF13 = {
		
	}
		const _defaultValueKGgxeiu = undefined;
		const _defaultValueDescriptioneK6oVRC = false;
		const _descriptionpg7RmH = null;
		const _argumentR6Em0zE = {
			"argChoices": _argChoices5fAF13,
		"defaultValue": _defaultValueKGgxeiu,
		"defaultValueDescription": _defaultValueDescriptioneK6oVRC,
		"description": _descriptionpg7RmH
	}
		const _returnValueB5nyUOF = await _HelpmHlKkTW.argumentDescription(_argumentR6Em0zE)
	});

	it('test for Help', async () => {
		const _HelpiWvHuHB = new Help()
		const _arrayValueHw32BYE = true;
		const _arrayValueNSwganj = null;
		const _arrayValuennEs0EA = "uU7WLxCTZEyGk77SWF4ml4YvC5EpODIehjv";
		const _arrayValuevXoZR5f = 7.518173239033985;
		const _arrayValuesaNKam0 = [_arrayValueNSwganj, _arrayValuennEs0EA, _arrayValuevXoZR5f]
		const _arrayValueEJRiCkk = [_arrayValueHw32BYE, _arrayValuesaNKam0]
		const _cmdLCh08G1 = [_arrayValueEJRiCkk]
		const _longestOptionTermLengthmX8vTRD = undefined;
		const _returnValueKS4PeYf = true;
		const _longestSubcommandTermLengthpzZ2Wp1 = () => { return _returnValueKS4PeYf };
		const _returnValueqRpNhwJ = null;
		const _longestArgumentTermLengthSvl8ntb = () => { return _returnValueqRpNhwJ };
		const _helperzI5oVCP = {
			"longestOptionTermLength": _longestOptionTermLengthmX8vTRD,
		"longestSubcommandTermLength": _longestSubcommandTermLengthpzZ2Wp1,
		"longestArgumentTermLength": _longestArgumentTermLengthSvl8ntb
	}
		const _returnValueSVSCYj = await _HelpiWvHuHB.padWidth(_cmdLCh08G1, _helperzI5oVCP)
		const _cmdaf1l8F = null;
		const _returnValuev7RmPom = await _HelpiWvHuHB.subcommandDescription(_cmdaf1l8F)
	});

	it('test for Help', async () => {
		const _HelpfeLLggk = new Help()
		const __argsTm8vofJ = {
		
	}
		const __nameHInQmGS = -4.414125887425589;
		const __aliaseso2JIZ8V = {
		
	}
		const _optionst0ZqGyW = {
		
	}
		const _cmdNd4RmLD = {
			"_args": __argsTm8vofJ,
		"_name": __nameHInQmGS,
		"_aliases": __aliaseso2JIZ8V,
		"options": _optionst0ZqGyW
	}
		const _returnValueboria7 = await _HelpfeLLggk.subcommandTerm(_cmdNd4RmLD)
		const __nameceogsIn = {
		
	}
		const __aliasesMv4Iv0h = null;
		const _parentE529FAM = {
		
	}
		const _returnValueVqEVGq = "ntBEhoclMtRBdopoj8L8FVXMx3q9qIg81bOAqb28y";
		const _usageOQNlT38 = () => { return _returnValueVqEVGq };
		const _cmdTHP60R = {
			"_name": __nameceogsIn,
		"_aliases": __aliasesMv4Iv0h,
		"parent": _parentE529FAM,
		"usage": _usageOQNlT38
	}
		const _returnValueBuXxJnu = await _HelpfeLLggk.commandUsage(_cmdTHP60R)
		const _arrayValuemSXhkgR = 6.979573585042612;
		const _arrayValueuu1adPg = undefined;
		const _arrayValueu5KL1O = undefined;
		const _arrayValueYOW7tv5 = undefined;
		const _arrayValueYKm6Zfu = [_arrayValueuu1adPg, _arrayValueu5KL1O, _arrayValueYOW7tv5]
		const _returnValuehCVSkT8 = [_arrayValuemSXhkgR, _arrayValueYKm6Zfu]
		const _descriptionvN9BQEf = () => { return _returnValuehCVSkT8 };
		const _cmdHFCnF1z = {
			"description": _descriptionvN9BQEf
	}
		const _returnValueGNcvqy = await _HelpfeLLggk.commandDescription(_cmdHFCnF1z)
		const _cmdubC1eNd = "SNgZt";
		const _sortSubcommandsfNQf18Y = false;
		const _returnValueeKILxvT = -7.873758024983786;
		const _subcommandTermq7m7K1G = () => { return _returnValueeKILxvT };
		const _helperLl0YJpQ = {
			"sortSubcommands": _sortSubcommandsfNQf18Y,
		"subcommandTerm": _subcommandTermq7m7K1G
	}
		const _returnValuewGsDEe6 = await _HelpfeLLggk.formatHelp(_cmdubC1eNd, _helperLl0YJpQ)
	});

	it('test for Help', async () => {
		const _HelpVXvCEms = new Help()
		const _optionnzwVgqL = true;
		const _returnValueVGO0MRW = await _HelpVXvCEms.optionTerm(_optionnzwVgqL)
	});

	it('test for Help', async () => {
		const _Helpcw0sND1 = new Help()
		const _arrayValueSak5f2k = undefined;
		const _returnValued1Epu96 = [_arrayValueSak5f2k]
		const _descriptionpkD0Jgt = () => { return _returnValued1Epu96 };
		const _cmdPBqoa4D = {
			"description": _descriptionpkD0Jgt
	}
		const _returnValuei2sB9ig = await _Helpcw0sND1.commandDescription(_cmdPBqoa4D)
		const _cmdl2sS0sC = "wOBEuRVEg7YOB12Nc1DGyQrBJ1jv30O9AQp43Rno6M0nImmgSV6";
		const _returnValueabM5FSo = undefined;
		const _longestOptionTermLengthLtc0LU4 = () => { return _returnValueabM5FSo };
		const _arrayValueBEyhfS = "SlDaN6xSWbU7aMPsEk4wB3avOn6GKAKnTFfuANEwMA3sa";
		const _arrayValueFM3PZ2T = undefined;
		const _arrayValuelUEckCz = false;
		const _arrayValued35xzj = null;
		const _arrayValueQNfBhKK = [_arrayValuelUEckCz, _arrayValued35xzj]
		const _returnValuemiIScDT = [_arrayValueBEyhfS, _arrayValueFM3PZ2T, _arrayValueQNfBhKK]
		const _longestSubcommandTermLengthtt4B2yO = () => { return _returnValuemiIScDT };
		const _returnValueI8H4U6q = "HH3FQ76yxEEgLtNIfpOjUsFNwFBZJtxBmhTlnSmVF5koaRncEztKd4DnmC";
		const _longestArgumentTermLength3UdeYM = () => { return _returnValueI8H4U6q };
		const _helperyr4jQFA = {
			"longestOptionTermLength": _longestOptionTermLengthLtc0LU4,
		"longestSubcommandTermLength": _longestSubcommandTermLengthtt4B2yO,
		"longestArgumentTermLength": _longestArgumentTermLength3UdeYM
	}
		const _returnValueahR0Jq = await _Helpcw0sND1.padWidth(_cmdl2sS0sC, _helperyr4jQFA)
		const _flagsm9sHFV = "Ff8AXFhmr8HTF9DjuBbUFma9EAdkDyy6RQqL";
		const _optionhAGzkM = {
			"flags": _flagsm9sHFV
	}
		const _returnValuepNmVUz2 = await _Helpcw0sND1.optionTerm(_optionhAGzkM)
		const _cmdQaHXHNn = 5.806646725525734;
		const _sortSubcommandsy1Fwc5F = 5.4371165194257145;
		const _returnValuefIDmXPJ = "9ln2SkqYek8jsTQcXsMcttRfcdlm8LejtL2SCUnZckLTG2fUC1Xfb4VeiMxwVJC38yKUXKKLbEP6B49CALxy2F";
		const _subcommandTermpxJyUvF = () => { return _returnValuefIDmXPJ };
		const _helpera4Wb4k = {
			"sortSubcommands": _sortSubcommandsy1Fwc5F,
		"subcommandTerm": _subcommandTermpxJyUvF
	}
		const _returnValueHgbjfo1 = await _Helpcw0sND1.longestSubcommandTermLength(_cmdQaHXHNn, _helpera4Wb4k)
	});

	it('test for Help', async () => {
		const _HelpyuvpTpN = new Help()
		const _arrayValueY2h6DOs = null;
		const _arrayValueM6WGdxH = 9.352455049476202;
		const _flagsvzsZsli = [_arrayValueY2h6DOs, _arrayValueM6WGdxH]
		const _optionapWtr9C = {
			"flags": _flagsvzsZsli
	}
		const _returnValueI6sJEX7 = await _HelpyuvpTpN.optionTerm(_optionapWtr9C)
		const _commandsQqENAmw = {
		
	}
		const _returnValuexZozJRv = -0.36205052868418974;
		const __hasImplicitHelpCommandBmUJFzn = () => { return _returnValuexZozJRv };
		const __helpCommandnameAndArgsDIhL4Dy = {
		
	}
		const _returnValueLBFT2TL = undefined;
		const _createCommandRBephHK = () => { return _returnValueLBFT2TL };
		const _returnValueKpHsf7R = {
		
	}
		const __helpCommandDescriptionSgSS20Y = () => { return _returnValueKpHsf7R };
		const _cmdBRUkphs = {
			"commands": _commandsQqENAmw,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandBmUJFzn,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsDIhL4Dy,
		"createCommand": _createCommandRBephHK,
		"_helpCommandDescription": __helpCommandDescriptionSgSS20Y
	}
		const _returnValuemg4d7k = await _HelpyuvpTpN.visibleCommands(_cmdBRUkphs)
	});

	it('test for Help', async () => {
		const _HelpP9plrpr = new Help()
		const _returnValuexKAH0q8 = undefined;
		const _matchmHkNinb = () => { return _returnValuexKAH0q8 };
		const _returnValuedzCAtZV = {
		
	}
		const _substrEXCnVTT = () => { return _returnValuedzCAtZV };
		const _strnxwWNpK = {
			"match": _matchmHkNinb,
		"substr": _substrEXCnVTT
	}
		const _widthA7oUPVa = 5.626439916015718;
		const _indentv7YXIq = -2.5953608225785976;
		const _minColumnWidthWyGdAq = -6.54541332488372;
		const _returnValueRbYP2lZ = await _HelpP9plrpr.wrap(_strnxwWNpK, _widthA7oUPVa, _indentv7YXIq, _minColumnWidthWyGdAq)
		const _returnValueYzdEwK = 7.259737506045351;
		const _arrayValueN26Spg0 = () => { return _returnValueYzdEwK };
		const _cmdjhpxTxC = [_arrayValueN26Spg0]
		const _arrayValueUWBhPTd = "pqZ1WtjsCPTP6Boket9SXS3zHmdhnb7GpRMMtAzVmkgOPAu";
		const _returnValuemUrpP4W = [_arrayValueUWBhPTd]
		const _visibleArgumentsU2kTTd = () => { return _returnValuemUrpP4W };
		const _returnValuekFlt3pw = true;
		const _argumentTermcwbjDei = () => { return _returnValuekFlt3pw };
		const _helperE7u8b1B = {
			"visibleArguments": _visibleArgumentsU2kTTd,
		"argumentTerm": _argumentTermcwbjDei
	}
		const _returnValueBWnpU5o = await _HelpP9plrpr.longestArgumentTermLength(_cmdjhpxTxC, _helperE7u8b1B)
	});

	it('test for Help', async () => {
		const _Helpq9j5ZL3 = new Help()
		const _returnValuev9iT2oM = "Kp2mif7iulTGg6WfgNYtQEQlVsKrvooOzoOWl7BEnEDkNNwd38Baz57lLQPOABujiMnIfPk";
		const _nameq4ea5ML = () => { return _returnValuev9iT2oM };
		const _argumentBgthQ7 = {
			"name": _nameq4ea5ML
	}
		const _returnValuezl8dWMx = await _Helpq9j5ZL3.argumentTerm(_argumentBgthQ7)
	});

	it('test for Help', async () => {
		const _HelpbG1tyV = new Help()
		const __nameKzMUp7Y = {
		
	}
		const __aliasesyBicdZM = {
		
	}
		const _parentyOFnx4U = {
		
	}
		const _returnValueyQL283V = true;
		const _usagejyN7sR = () => { return _returnValueyQL283V };
		const _cmdMafQmd8 = {
			"_name": __nameKzMUp7Y,
		"_aliases": __aliasesyBicdZM,
		"parent": _parentyOFnx4U,
		"usage": _usagejyN7sR
	}
		const _returnValuehJlcoz = await _HelpbG1tyV.commandUsage(_cmdMafQmd8)
		const _arrayValuem7k5Txg = null;
		const _arrayValueyvByO2d = {
		
	}
		const _cmdWNHWyOL = [_arrayValuem7k5Txg, _arrayValueyvByO2d]
		const _sortSubcommandsnxwnmEP = false;
		const _returnValueiG2omYt = null;
		const _subcommandTermeymK7O = () => { return _returnValueiG2omYt };
		const _helperQ12mM6P = {
			"sortSubcommands": _sortSubcommandsnxwnmEP,
		"subcommandTerm": _subcommandTermeymK7O
	}
		const _returnValueoUUNeZQ = await _HelpbG1tyV.formatHelp(_cmdWNHWyOL, _helperQ12mM6P)
		const _returnValueiClW89s = true;
		const _namePK9Ou7 = () => { return _returnValueiClW89s };
		const _argument8OKdtZ = {
			"name": _namePK9Ou7
	}
		const _returnValueioL4mP = await _HelpbG1tyV.argumentTerm(_argument8OKdtZ)
	});

	it('test for Help', async () => {
		const _Helpu2Oolw7 = new Help()
		const __argsDescriptionNo7AWT = {
		
	}
		const __argswWfyaM9 = {
		
	}
		const _cmdwk8WnEm = {
			"_argsDescription": __argsDescriptionNo7AWT,
		"_args": __argswWfyaM9
	}
		const _returnValueUbwa5WU = await _Helpu2Oolw7.visibleArguments(_cmdwk8WnEm)
		const _returnValuepwCRW7O = "DPEcVgTOjc0j4gQ6UevUtRqv39Ya0Uyfr2RotD2nudZBY2pIXT9huucqguYiXV9ZCz4";
		const _nameBpOwQOB = () => { return _returnValuepwCRW7O };
		const _argumenthQuvbVy = {
			"name": _nameBpOwQOB
	}
		const _returnValueqGDDdt8 = await _Helpu2Oolw7.argumentTerm(_argumenthQuvbVy)
		const _argChoicesKvF0PM3 = {
		
	}
		const _defaultValuelddMPEe = undefined;
		const _defaultValueDescriptionvPX4BAt = []
		const _descriptionhipRYKz = undefined;
		const _argumentmSK0JYo = {
			"argChoices": _argChoicesKvF0PM3,
		"defaultValue": _defaultValuelddMPEe,
		"defaultValueDescription": _defaultValueDescriptionvPX4BAt,
		"description": _descriptionhipRYKz
	}
		const _returnValuefaxnkUM = await _Helpu2Oolw7.argumentDescription(_argumentmSK0JYo)
	});

	it('test for Help', async () => {
		const _HelpNjTuxWC = new Help()
		const _argumenttpXQZj7 = false;
		const _returnValueNAz3XNy = await _HelpNjTuxWC.argumentDescription(_argumenttpXQZj7)
		const _arrayValueltHU2e8 = true;
		const _optionAbpU56i = [_arrayValueltHU2e8]
		const _returnValueTzEmDvp = await _HelpNjTuxWC.optionTerm(_optionAbpU56i)
	});

	it('test for Help', async () => {
		const _Helpx58ZW7j = new Help()
		const _returnValuephpWTm = -3.480263038797217;
		const _arrayValueopNpPC = () => { return _returnValuephpWTm };
		const _arrayValuejStY9oA = true;
		const _arrayValuexj2vTQh = [_arrayValueopNpPC, _arrayValuejStY9oA]
		const _optionFxVaEBv = [_arrayValuexj2vTQh]
		const _returnValueq3NSP8M = await _Helpx58ZW7j.optionDescription(_optionFxVaEBv)
		const _arrayValueZR7u6fZ = undefined;
		const _arrayValuesdn8dSY = "zrvPYE53GLY1UO1NFR3UWu2cYLw5I2NzzTW12ocXRntYQBFqN6eiAS1";
		const _arrayValueJIK97tL = undefined;
		const _arrayValueYRMa9MQ = undefined;
		const _arrayValueuzeRKtK = false;
		const _arrayValuejMvn6lz = null;
		const _arrayValueralpeLV = undefined;
		const _arrayValuerzum8G2 = null;
		const _arrayValueVoUxtw = false;
		const _arrayValuewA9BIpk = {
		
	}
		const _arrayValueGZwYpZ = "ncm5ASIyqLSEfPG14ouSNzD67y5QFHTA8PJNthwtjE2ZU6Wzg1UUuJsTVr4EJYLFE4TgayD";
		const _arrayValuepdYJ5x8 = [_arrayValueralpeLV, _arrayValuerzum8G2, _arrayValueVoUxtw, _arrayValuewA9BIpk, _arrayValueGZwYpZ]
		const _arrayValueU5rI7Dq = [_arrayValueYRMa9MQ, _arrayValueuzeRKtK, _arrayValuejMvn6lz, _arrayValuepdYJ5x8]
		const _returnValueENZW410 = [_arrayValueJIK97tL, _arrayValueU5rI7Dq]
		const _arrayValueUMOH1p7 = () => { return _returnValueENZW410 };
		const _arrayValuesWO5Ye = null;
		const _arrayValuelCP7v3T = [_arrayValuesdn8dSY, _arrayValueUMOH1p7, _arrayValuesWO5Ye]
		const _optionfL4EWip = [_arrayValueZR7u6fZ, _arrayValuelCP7v3T]
		const _returnValueDSxTPlN = await _Helpx58ZW7j.optionDescription(_optionfL4EWip)
		const _arrayValueSPSNkWv = null;
		const _arrayValue5pnXeA = "pUYHGbtvukCQtgH81QRyZF61zz6JSzGz3lE1295S";
		const _cmdqxqg1JM = [_arrayValueSPSNkWv, _arrayValue5pnXeA]
		const _returnValuestkq78e = await _Helpx58ZW7j.visibleArguments(_cmdqxqg1JM)
	});

	it('test for Help', async () => {
		const _HelpbB43occ = new Help()
		const _cmdmb7F2La = null;
		const _returnValuetS5TAbU = null;
		const _visibleArgumentsT8ZUCxe = () => { return _returnValuetS5TAbU };
		const _returnValueMro9M8 = {
		
	}
		const _argumentTermcstMnvF = () => { return _returnValueMro9M8 };
		const _helperD8DX6LC = {
			"visibleArguments": _visibleArgumentsT8ZUCxe,
		"argumentTerm": _argumentTermcstMnvF
	}
		const _returnValuekxZuW9I = await _HelpbB43occ.longestArgumentTermLength(_cmdmb7F2La, _helperD8DX6LC)
		const _arrayValuejSOp8hp = false;
		const _returnValueRQKoTeA = [_arrayValuejSOp8hp]
		const _matchUYM2OjZ = () => { return _returnValueRQKoTeA };
		const _returnValuehJ4Dir2 = 7.779865038842161;
		const _substrS7XPsF2 = () => { return _returnValuehJ4Dir2 };
		const _strWnEKxE = {
			"match": _matchUYM2OjZ,
		"substr": _substrS7XPsF2
	}
		const _widthKe70Bz2 = 6.073080318855588;
		const _indentqltUwCE = -1.3358533067676621;
		const _minColumnWidthHatzcoy = 6.063509221660645;
		const _returnValuev6tiWeA = await _HelpbB43occ.wrap(_strWnEKxE, _widthKe70Bz2, _indentqltUwCE, _minColumnWidthHatzcoy)
		const _cmdpqRETX0 = "gxvG";
		const _returnValuedZPJW9G = null;
		const _visibleArgumentsZLGh0z9 = () => { return _returnValuedZPJW9G };
		const _returnValueFL8CCVN = undefined;
		const _argumentTermxdxIFNT = () => { return _returnValueFL8CCVN };
		const _helperh8khBU = {
			"visibleArguments": _visibleArgumentsZLGh0z9,
		"argumentTerm": _argumentTermxdxIFNT
	}
		const _returnValueVnAuyJF = await _HelpbB43occ.longestArgumentTermLength(_cmdpqRETX0, _helperh8khBU)
	});

	it('test for Help', async () => {
		const _HelpxDwkx00 = new Help()
		const _strp29hqqy = "eVoQX0abApuDd";
		const _widthpjf0GKR = -2.846912422924243;
		const _indentJvmDfe0 = 5.706339473905226;
		const _minColumnWidthetL8DXk = 6.449326628509638;
		const _returnValueFtf6A0J = await _HelpxDwkx00.wrap(_strp29hqqy, _widthpjf0GKR, _indentJvmDfe0, _minColumnWidthetL8DXk)
		const _arrayValueqM13Jgx = null;
		const _arrayValueIHrhiBv = "OorbbU7fejx6B5UsFnMJ";
		const _arrayValuepmUfmY = [_arrayValueqM13Jgx, _arrayValueIHrhiBv]
		const _arrayValueFKBGE8j = "Fo8iaaCPOGbc5H2Bq8l65CtLq0R9GpG4lzoYAX";
		const _arrayValueOWsxRuN = {
		
	}
		const _argumentSoiDEJ = [_arrayValuepmUfmY, _arrayValueFKBGE8j, _arrayValueOWsxRuN]
		const _returnValuevM6ExMY = await _HelpxDwkx00.argumentDescription(_argumentSoiDEJ)
		const _arrayValuexaiGNg = "RBJyB8y";
		const _arrayValueD8t0ZE = undefined;
		const _cmdyRrkuoV = [_arrayValuexaiGNg, _arrayValueD8t0ZE]
		const _returnValueSIseDBa = await _HelpxDwkx00.subcommandTerm(_cmdyRrkuoV)
		const _returnValuelfHQja1 = 4.059186409135062;
		const _descriptioncTfemt3 = () => { return _returnValuelfHQja1 };
		const _cmd6WCcbu = {
			"description": _descriptioncTfemt3
	}
		const _returnValueTjyCmVG = await _HelpxDwkx00.subcommandDescription(_cmd6WCcbu)
	});

	it('test for Help', async () => {
		const _HelpWCVtjzR = new Help()
		const _returnValueyoO99v = null;
		const _nameFAbJdRG = () => { return _returnValueyoO99v };
		const _cmdLohPgXi = new Command(_nameFAbJdRG)
		const _keyJn8860 = "yYaGl73GeJJSrA2jj8eNg5ES5vQS2xjTyraVpQi2MKQVA6LddbXnoXIseASRDIxH3lP2zXU6n";
		const _returnValuepWNuBnb = await _cmdLohPgXi.getOptionValueSource(_keyJn8860)
		const _displaySuggestionxAh4etE = false;
		const _returnValueRhSReNv = await _cmdLohPgXi.showSuggestionAfterError(_displaySuggestionxAh4etE)
		const _returnValueZ0CI0SN = await _HelpWCVtjzR.visibleOptions(_cmdLohPgXi)
		const _nameZRknSXy = undefined;
		const _cmdn7ZqZ3c = new Command(_nameZRknSXy)
		const _subcommandtiJOS8I = null;
		const _argsmvTTYiQ = undefined;
		const _returnValuewRjqdUy = await _cmdn7ZqZ3c._executeSubCommand(_subcommandtiJOS8I, _argsmvTTYiQ)
		const _returnValuesLaBQC = await _HelpWCVtjzR.commandDescription(_cmdn7ZqZ3c)
		const _arrayValue40mBOV = undefined;
		const _arrayValueHjwpGuD = []
		const _namePCidRtC = [_arrayValue40mBOV, _arrayValueHjwpGuD]
		const _cmdYEOvtUC = new Command(_namePCidRtC)
		const _flagsgKAY0xY = null;
		const _descriptionXozJqqL = []
		const _fnFLqx63Y = undefined;
		const _defaultValuemtm2HLw = undefined;
		const _returnValueClUpVt2 = await _cmdYEOvtUC.requiredOption(_flagsgKAY0xY, _descriptionXozJqqL, _fnFLqx63Y, _defaultValuemtm2HLw)
		const _promiseq4CQvqG = {
		
	}
		const _eventHV33Cby = "Im9kq6i1yAR4OjicHDMhTOxp5b6G1WcNQTMQrtLywDnlMrvj5OcMNU5RUEQh";
		const _returnValuezfMU0Vw = await _cmdYEOvtUC._chainOrCallHooks(_promiseq4CQvqG, _eventHV33Cby)
		const _returnValuefCowHL = await _HelpWCVtjzR.commandUsage(_cmdYEOvtUC)
	});

	it('test for Help', async () => {
		const _HelpyT7CNdw = new Help()
		const _arrayValueFYRWQWB = {
		
	}
		const _arrayValueTCZX3dO = false;
		const _optionNAZDIqr = [_arrayValueFYRWQWB, _arrayValueTCZX3dO]
		const _returnValueQk6NPRv = await _HelpyT7CNdw.optionTerm(_optionNAZDIqr)
		const _flagsupuNdc = "Tb9SojA2atSVlD8wfpxRQgKgMJ5A1fQBNRtUpo7eDD0v9QSTgneA";
		const _descriptionjFZMunP = null;
		const _cmdbZqXIX = new Option(_flagsupuNdc, _descriptionjFZMunP)
		const _namerp9GiYN = undefined;
		const _returnValueJ1RfIcA = await _cmdbZqXIX.env(_namerp9GiYN)
		const _returnValuePkD9csd = await _cmdbZqXIX.attributeName()
		const _fnzLqnFO9 = undefined;
		const _returnValueCmlqB4w = await _cmdbZqXIX.argParser(_fnzLqnFO9)
		const _returnValuexkUG6zh = await _cmdbZqXIX.name()
		const _mandatoryw7sAvIl = false;
		const _returnValueZYs6jTC = await _cmdbZqXIX.makeOptionMandatory(_mandatoryw7sAvIl)
		const _returnValueZz9orHn = await _HelpyT7CNdw.commandDescription(_cmdbZqXIX)
		const _nameV34DYfe = false;
		const _cmd7Phv0p = new Command(_nameV34DYfe)
		const _returnValueCMM937C = -0.9660831552083984;
		const _concatunh01Wv = () => { return _returnValueCMM937C };
		const _sliceeMHmHi = null;
		const _lengthLr16EUr = -3.653897090396966;
		const _operandse1KZZdz = {
			"concat": _concatunh01Wv,
		"slice": _sliceeMHmHi,
		"length": _lengthLr16EUr
	}
		const _unknownMQmQFxy = {
		
	}
		const _returnValueVYSoYdU = await _cmd7Phv0p._parseCommand(_operandse1KZZdz, _unknownMQmQFxy)
		const _returnValueNLGg82 = await _HelpyT7CNdw.subcommandDescription(_cmd7Phv0p)
		const _arrayValuev8e3mw9 = null;
		const _arrayValueMNvIyIA = null;
		const _optionbzWZ1T = [_arrayValuev8e3mw9, _arrayValueMNvIyIA]
		const _returnValueeeaJNwa = await _HelpyT7CNdw.optionTerm(_optionbzWZ1T)
	});

	it('test for Help', async () => {
		const _HelpFPvJyZm = new Help()
		const _returnValueIECLBxh = false;
		const _returnValueoaDjJlX = () => { return _returnValueIECLBxh };
		const _matchHHiRY0G = () => { return _returnValueoaDjJlX };
		const _returnValueixxXvv = undefined;
		const _substrzoNvwEc = () => { return _returnValueixxXvv };
		const _strwmykC5e = {
			"match": _matchHHiRY0G,
		"substr": _substrzoNvwEc
	}
		const _widthuM4Ofm = 8.835364918918764;
		const _indentiLfFjqK = 1.8955460245807174;
		const _minColumnWidthXqOllIt = 8.310507104104211;
		const _returnValueeNPInY6 = await _HelpFPvJyZm.wrap(_strwmykC5e, _widthuM4Ofm, _indentiLfFjqK, _minColumnWidthXqOllIt)
		const _argChoicesg7hzsWT = {
		
	}
		const _defaultValuewexHCKv = undefined;
		const _defaultValueDescriptionUvpueR = []
		const _returnValueynj0AEd = -6.464979451206728;
		const _descriptionMZDdl8w = () => { return _returnValueynj0AEd };
		const _argumentuJfVYR = {
			"argChoices": _argChoicesg7hzsWT,
		"defaultValue": _defaultValuewexHCKv,
		"defaultValueDescription": _defaultValueDescriptionUvpueR,
		"description": _descriptionMZDdl8w
	}
		const _returnValuepHbDAn = await _HelpFPvJyZm.argumentDescription(_argumentuJfVYR)
		const _returnValueDXZRFlE = false;
		const _cmdWgzjEgG = () => { return _returnValueDXZRFlE };
		const _returnValuerfYhWu = await _HelpFPvJyZm.visibleArguments(_cmdWgzjEgG)
	});

	it('test for Help', async () => {
		const _HelpiCfBzQx = new Help()
		const _cmdVbTqplK = {
		
	}
		const _helperyZAG7EG = new Help()
		const _flagsyZqCLJd = "cgacI0YXJj4UdbE7";
		const _descriptionRKphdyA = null;
		const _optionHhyFlzB = new Option(_flagsyZqCLJd, _descriptionRKphdyA)
		const _fnUPupFTg = undefined;
		const _returnValuewBra2e = await _optionHhyFlzB.argParser(_fnUPupFTg)
		const _arrayValueHn6HTPw = "a9VCYY4O7PFL";
		const _arrayValueN9MSo5G = 6.942205592914075;
		const _arrayValueBeY6Dp = "q2S8mRQrcH0uiRqERvMnGR3c7k4D5YlmIegvAS6HQFHZ";
		const _values7LlKp3 = [_arrayValueHn6HTPw, _arrayValueN9MSo5G, _arrayValueBeY6Dp]
		const _returnValuei9kl6hE = await _optionHhyFlzB.choices(_values7LlKp3)
		const _fnTrUsAWY = undefined;
		const _returnValueX1uroM = await _optionHhyFlzB.argParser(_fnTrUsAWY)
		const _returnValueT3DBUXV = await _helperyZAG7EG.optionDescription(_optionHhyFlzB)
		const _returnValued0wYeCt = "Yw4wI";
		const _cmdoTFDnEu = () => { return _returnValued0wYeCt };
		const _returnValuehfoWglu = await _helperyZAG7EG.visibleArguments(_cmdoTFDnEu)
		const _returnValuesQtgeSA = await _HelpiCfBzQx.longestOptionTermLength(_cmdVbTqplK, _helperyZAG7EG)
		const _cmdCybu32q = "62JaCDaULFK5GLilqGcxfus4lQgFKAFksS8x8mLfYq4eRIXmogBNTpw4FZPtglLMXyUA6C7cI";
		const _returnValueRiMOykg = await _HelpiCfBzQx.subcommandTerm(_cmdCybu32q)
		const _cmdgnEKFl = "Y59FwDmPapctl9EX3SpVlHRRaLcyD3GMCuuyDhvDm9";
		const _helperanpSEoi = new Help()
		const _cmdIthhtzS = null;
		const _returnValuefmtJPWt = await _helperanpSEoi.visibleArguments(_cmdIthhtzS)
		const _cmdHzgDBxb = "tpkbfEvj4Mvd831NvBhK6X7f8CEBwxxvpRCKO6oXRBmw5hYhJjRYSruPcCeHH9ucMeV7TL";
		const _returnValueoru4SAo = await _helperanpSEoi.commandUsage(_cmdHzgDBxb)
		const _returnValuedkHOggZ = null;
		const _argumentHayzB8t = () => { return _returnValuedkHOggZ };
		const _returnValuewHhqfxS = await _helperanpSEoi.argumentDescription(_argumentHayzB8t)
		const _namegFEZtST = false;
		const _cmdoNMDoYp = new Command(_namegFEZtST)
		const _positionalSHs9yMu = true;
		const _returnValueOplObGj = await _cmdoNMDoYp.enablePositionalOptions(_positionalSHs9yMu)
		const _returnValueRtMRL4A = await _cmdoNMDoYp.opts()
		const _combinec0y7gLd = false;
		const _returnValuealeWFNi = await _cmdoNMDoYp.combineFlagAndOptionalValue(_combinec0y7gLd)
		const _returnValueRjzGM49 = await _helperanpSEoi.subcommandDescription(_cmdoNMDoYp)
		const _returnValueTVdD19W = await _HelpiCfBzQx.formatHelp(_cmdgnEKFl, _helperanpSEoi)
		const _cmde5L0bmq = undefined;
		const _returnValueAyI3HV = await _HelpiCfBzQx.visibleOptions(_cmde5L0bmq)
	});
})