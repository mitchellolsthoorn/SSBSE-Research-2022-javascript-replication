export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpPAz8UbH = new Help()
		const __argsDescriptionGCOSw59 = {
		
	}
		const __argsxDO3FRf = {
		
	}
		const _cmdUB1wE7a = {
			"_argsDescription": __argsDescriptionGCOSw59,
		"_args": __argsxDO3FRf
	}
		const _returnValuerZJ6Vy2 = await _HelpPAz8UbH.visibleArguments(_cmdUB1wE7a)
		const _strJZej6lY = "QzQg";
		const _widthQXxU334 = 9.42882483825829;
		const _indentVEa9o14 = 3.3382483885732306;
		const _minColumnWidtheK2ooOU = -7.124486264495294;
		const _returnValueqkIyuRa = await _HelpPAz8UbH.wrap(_strJZej6lY, _widthQXxU334, _indentVEa9o14, _minColumnWidtheK2ooOU)
		const _cmdhYptyIQ = undefined;
		const _helperOBmV2Jg = "5qvfcucIIwR4rneQW0Cud3hFvhErfgxpVuYeiFWtLbkA6vInSJnAvtHidze454ezijI27umgV2XjzEVlOkJluzJKTOio42";
		const _returnValueR0bMHFG = await _HelpPAz8UbH.padWidth(_cmdhYptyIQ, _helperOBmV2Jg)
	});

	it('test for Help', async () => {
		const _Helpbq6MhfT = new Help()
		const _cmdcpXtA2 = false;
		const _arrayValuedSEIT2 = undefined;
		const _arrayValueOlf7gkO = [_arrayValuedSEIT2]
		const _arrayValueJhZHHOT = true;
		const _helperKs6mtaY = [_arrayValueOlf7gkO, _arrayValueJhZHHOT]
		const _returnValuebLIzGwc = await _Helpbq6MhfT.padWidth(_cmdcpXtA2, _helperKs6mtaY)
		const _cmdkz9JfZn = "HGZnVfMsWjk2tvCTU8yUYl0fCIH2WLphMohWbuohOEtU7voNy87JEOg9S4QTLz2SKNWT5b";
		const _returnValueOXw2Gci = await _Helpbq6MhfT.visibleArguments(_cmdkz9JfZn)
		const _nameepugLJn = "Pkx98zggs6rgIGv96QvVoIQQX38dV41S4Zmt1mp3jDCk40Uc6wWjEuxv09yTvkVVtYUtRfl";
		const _cmdkwxluXP = new Command(_nameepugLJn)
		const _arrayValueo6B73O0 = undefined;
		const _flagbOLbpv2 = [_arrayValueo6B73O0]
		const _returnValueRqTGM6b = await _cmdkwxluXP.unknownOption(_flagbOLbpv2)
		const _returnValuev9ldcsV = await _cmdkwxluXP.unknownCommand()
		const _returnValuecIc3thA = await _Helpbq6MhfT.commandUsage(_cmdkwxluXP)
		const _argChoicesnAei1TI = {
		
	}
		const _defaultValueLjtDt3z = undefined;
		const _defaultValueDescriptionb0eOq1f = true;
		const _descriptionH4d2vYs = undefined;
		const _argumentfl205gE = {
			"argChoices": _argChoicesnAei1TI,
		"defaultValue": _defaultValueLjtDt3z,
		"defaultValueDescription": _defaultValueDescriptionb0eOq1f,
		"description": _descriptionH4d2vYs
	}
		const _returnValueehSRMrF = await _Helpbq6MhfT.argumentDescription(_argumentfl205gE)
	});

	it('test for Help', async () => {
		const _HelpEFPrMY = new Help()
		const _arrayValueoLEhF0P = "2Nfj4qoyYGBes0azst9fug45roJkJ47E1zsuqPUf4r6ZbJvAfiSygT";
		const _arrayValueGmDQa7a = {
		
	}
		const _arrayValueXj9Lheu = 2.042097278816053;
		const _arrayValueSBjMugt = [_arrayValueXj9Lheu]
		const _arrayValuemdsCdEX = 8.07929957760544;
		const _optiontvYaifA = [_arrayValueoLEhF0P, _arrayValueGmDQa7a, _arrayValueSBjMugt, _arrayValuemdsCdEX]
		const _returnValueI4IwUsv = await _HelpEFPrMY.optionDescription(_optiontvYaifA)
		const _arrayValuecQ0DkmW = "jOkQenpaI1cMjLrNEof7VCy98v6Ah3PlHAMp4Q1ocPFtC40";
		const _optioniQX8ZZJ = [_arrayValuecQ0DkmW]
		const _returnValuePB0cjEH = await _HelpEFPrMY.optionDescription(_optioniQX8ZZJ)
		const _argumentGkuKOK = "CMuiSSa";
		const _returnValuetSrBftF = await _HelpEFPrMY.argumentDescription(_argumentGkuKOK)
		const _cmdu9DCBr = []
		const _returnValuexmAkfcC = await _HelpEFPrMY.commandUsage(_cmdu9DCBr)
		const _arrayValueeptyZ4P = "XVOg8FulW6qXyrxQmbGZpifCUeFAQRxRNv7";
		const _arrayValueNT4sNLy = undefined;
		const _arrayValuecrlZbj = "UkbvacxhESftF";
		const _arrayValueZQKN4QA = null;
		const _flagsL0akkgL = [_arrayValueeptyZ4P, _arrayValueNT4sNLy, _arrayValuecrlZbj, _arrayValueZQKN4QA]
		const _descriptiong8BcQH2 = {
		
	}
		const _optionA6R9Pn8 = new Option(_flagsL0akkgL, _descriptiong8BcQH2)
		const _mandatoryHZLMJ6h = true;
		const _returnValueMTcWfYS = await _optionA6R9Pn8.makeOptionMandatory(_mandatoryHZLMJ6h)
		const _nameuAdRNyT = {
		
	}
		const _returnValueKEbrcmi = await _optionA6R9Pn8.env(_nameuAdRNyT)
		const _hideNLNgdQN = true;
		const _returnValuenKcrt0Y = await _optionA6R9Pn8.hideHelp(_hideNLNgdQN)
		const _returnValueVpqu5mn = await _HelpEFPrMY.optionTerm(_optionA6R9Pn8)
	});

	it('test for Help', async () => {
		const _HelpKhUM2sL = new Help()
		const _name7qlEZa = true;
		const _cmdaS5hL2k = new Command(_name7qlEZa)
		const _keyWhmknj4 = null;
		const _returnValueG6Kc65K = await _cmdaS5hL2k.getOptionValue(_keyWhmknj4)
		const _positionalWjnFIqa = "AsnaOlIQPoTdmf6S3i9ogo6awIv5u";
		const _returnValue1PPf2o = await _cmdaS5hL2k.enablePositionalOptions(_positionalWjnFIqa)
		const _returnValueMPSAewe = await _HelpKhUM2sL.subcommandDescription(_cmdaS5hL2k)
		const _arrayValuewW3YvxO = {
		
	}
		const _cmdl2csD9 = [_arrayValuewW3YvxO]
		const _returnValueAtjmp52 = await _HelpKhUM2sL.commandDescription(_cmdl2csD9)
		const __argsbiYyQSp = {
		
	}
		const __nameaG0EZAz = 4.684471056587791;
		const __aliasesJFqByJY = {
		
	}
		const _optionsoIPiSsq = {
		
	}
		const _cmdMEY2Tn2 = {
			"_args": __argsbiYyQSp,
		"_name": __nameaG0EZAz,
		"_aliases": __aliasesJFqByJY,
		"options": _optionsoIPiSsq
	}
		const _returnValueyrXQFMu = await _HelpKhUM2sL.subcommandTerm(_cmdMEY2Tn2)
		const _optionsLZKNOIK = {
		
	}
		const __hasHelpOptionso2rANs = "uT38pu6ihpuUTtPK5d2lGsk";
		const __helpShortFlagGUrJkKA = -2.6019229854763006;
		const _returnValueVB8Oo2A = "";
		const __findOptionUl5oEzL = () => { return _returnValueVB8Oo2A };
		const __helpLongFlagd468QsG = null;
		const _returnValueijtAKbf = null;
		const _createOptiondE2qo6Y = () => { return _returnValueijtAKbf };
		const _arrayValuewEi3baK = "bTg7td7AdHOhEyjuNSftDG2VndEe6LFkek8hKiEKnJiwd4v53leg9MaCEHamPjKuzIh5ot9ijEb";
		const _arrayValueoj3LD5m = undefined;
		const __helpDescription2PnPGD = [_arrayValuewEi3baK, _arrayValueoj3LD5m]
		const __helpFlagsP0XdI9Q = true;
		const _cmdV20mhWg = {
			"options": _optionsLZKNOIK,
		"_hasHelpOption": __hasHelpOptionso2rANs,
		"_helpShortFlag": __helpShortFlagGUrJkKA,
		"_findOption": __findOptionUl5oEzL,
		"_helpLongFlag": __helpLongFlagd468QsG,
		"createOption": _createOptiondE2qo6Y,
		"_helpDescription": __helpDescription2PnPGD,
		"_helpFlags": __helpFlagsP0XdI9Q
	}
		const _returnValueEd2v3G7 = await _HelpKhUM2sL.visibleOptions(_cmdV20mhWg)
	});

	it('test for Help', async () => {
		const _HelpwXYUG1s = new Help()
		const _cmdd5JW7rW = -8.150458344410984;
		const _helperApj0APR = new Help()
		const _argumentq5L7kcf = "CHywIczjwmOobjUisT7E1IgdqhFllzk5d6CHgcS365sVNgMpO2S2G2JCYk7LQe9GSSMAHg6Uc85N3cnvo";
		const _returnValueVlIrcqX = await _helperApj0APR.argumentDescription(_argumentq5L7kcf)
		const _cmdnSe4XYn = -4.078199827509201;
		const _helperuut0bY1 = "mZqzeswaoVWbv1wNtqiGHoUHNHsWfGjk5vaG7epDmWafpidF8w8JyV8Wa75Pf3PppIqL7Nq";
		const _returnValueYB0XHY2 = await _helperApj0APR.longestSubcommandTermLength(_cmdnSe4XYn, _helperuut0bY1)
		const _returnValueUL2eTuu = await _HelpwXYUG1s.longestArgumentTermLength(_cmdd5JW7rW, _helperApj0APR)
		const _returnValueLsFUJgE = []
		const _cmdoXSAhVD = () => { return _returnValueLsFUJgE };
		const _returnValuex7tasrp = await _HelpwXYUG1s.visibleArguments(_cmdoXSAhVD)
		const _cmdOUZnFTm = -5.863393204392531;
		const _sortSubcommandsaq38Xd4 = {
		
	}
		const _returnValueCBDHebY = null;
		const _subcommandTermJpFpPY = () => { return _returnValueCBDHebY };
		const _helperMMtwsuo = {
			"sortSubcommands": _sortSubcommandsaq38Xd4,
		"subcommandTerm": _subcommandTermJpFpPY
	}
		const _returnValuedK7A4xt = await _HelpwXYUG1s.formatHelp(_cmdOUZnFTm, _helperMMtwsuo)
	});

	it('test for Help', async () => {
		const _Helpa5g7v1 = new Help()
		const _arrayValueMcmkmEX = null;
		const _arrayValuel4A7be = -9.864309148049301;
		const _cmdo45ASp = [_arrayValueMcmkmEX, _arrayValuel4A7be]
		const _returnValueJsIJuF0 = await _Helpa5g7v1.visibleOptions(_cmdo45ASp)
		const _commandsV9MSjAv = {
		
	}
		const _arrayValueN5JZLl6 = -2.813284293209283;
		const _returnValueRjhLckU = [_arrayValueN5JZLl6]
		const __hasImplicitHelpCommandtXG5pXZ = () => { return _returnValueRjhLckU };
		const __helpCommandnameAndArgsBNGbSjJ = {
		
	}
		const _returnValuemyIxGga = null;
		const _createCommandOIY4yWe = () => { return _returnValuemyIxGga };
		const __helpCommandDescriptionk8wA0Ih = false;
		const _cmdKWgdBCE = {
			"commands": _commandsV9MSjAv,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandtXG5pXZ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBNGbSjJ,
		"createCommand": _createCommandOIY4yWe,
		"_helpCommandDescription": __helpCommandDescriptionk8wA0Ih
	}
		const _returnValueDteoLp5 = await _Helpa5g7v1.visibleCommands(_cmdKWgdBCE)
		const _arrayValueIDsOmQM = {
		
	}
		const _nameWia8Rvu = [_arrayValueIDsOmQM]
		const _descriptionZsH6389 = -5.432039633321585;
		const _cmddpkOY4 = new Argument(_nameWia8Rvu, _descriptionZsH6389)
		const _returnValueDsOhCGe = null;
		const _valuehAQleM = () => { return _returnValueDsOhCGe };
		const _returnValuedwd3hGS = {
		
	}
		const _previousumgJN0X = () => { return _returnValuedwd3hGS };
		const _returnValuefbtLbVG = await _cmddpkOY4._concatValue(_valuehAQleM, _previousumgJN0X)
		const _valueimerSom = undefined;
		const _arrayValueDDlK00d = undefined;
		const _descriptioncPXseG4 = [_arrayValueDDlK00d]
		const _returnValueBPWCLma = await _cmddpkOY4.default(_valueimerSom, _descriptioncPXseG4)
		const _returnValuezcbKwfV = await _Helpa5g7v1.subcommandDescription(_cmddpkOY4)
		const _commandsti3Kwx = {
		
	}
		const _returnValuefowx9ug = undefined;
		const __hasImplicitHelpCommandThfg05m = () => { return _returnValuefowx9ug };
		const __helpCommandnameAndArgsVBBEhcE = {
		
	}
		const _createCommandgF8OXyc = undefined;
		const __helpCommandDescriptiongvBQMgg = -5.847781468465875;
		const _cmdzLbde4t = {
			"commands": _commandsti3Kwx,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandThfg05m,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsVBBEhcE,
		"createCommand": _createCommandgF8OXyc,
		"_helpCommandDescription": __helpCommandDescriptiongvBQMgg
	}
		const _returnValueMcDWcpx = await _Helpa5g7v1.visibleCommands(_cmdzLbde4t)
	});

	it('test for Help', async () => {
		const _HelpauoaFb0 = new Help()
		const _cmdwvHZlAA = undefined;
		const _sortSubcommandsSe2wFY4 = -1.4400111922508394;
		const _returnValued6M9kgP = null;
		const _subcommandTerm5frARP = () => { return _returnValued6M9kgP };
		const _helperUjMN7UQ = {
			"sortSubcommands": _sortSubcommandsSe2wFY4,
		"subcommandTerm": _subcommandTerm5frARP
	}
		const _returnValueswJw8Zs = await _HelpauoaFb0.formatHelp(_cmdwvHZlAA, _helperUjMN7UQ)
		const _arrayValueIX5dQ0 = undefined;
		const _arrayValueVH6J5tn = "sBvhTXW1gz5umKnhNSScQBuMUIbjbCvhP7Hy1IRFKLmY1cipHxj1bCudCtjcCbuHNIdkcQVo6AxnUNU2";
		const _optionOny2OEe = [_arrayValueIX5dQ0, _arrayValueVH6J5tn]
		const _returnValueqEkdsnD = await _HelpauoaFb0.optionTerm(_optionOny2OEe)
	});

	it('test for Help', async () => {
		const _HelpBl6zKnD = new Help()
		const __namejCzWJD6 = 8.801367577134872;
		const __aliasesHJvAK3i = {
		
	}
		const _parentYNCAvCB = {
		
	}
		const _returnValueMupUpE = {
		
	}
		const _usageuEtoR1D = () => { return _returnValueMupUpE };
		const _cmdfDpzVO0 = {
			"_name": __namejCzWJD6,
		"_aliases": __aliasesHJvAK3i,
		"parent": _parentYNCAvCB,
		"usage": _usageuEtoR1D
	}
		const _returnValuezBajbKU = await _HelpBl6zKnD.commandUsage(_cmdfDpzVO0)
		const _cmdYcCxYJe = 1.785244559937965;
		const _returnValueiu96hvl = true;
		const _visibleOptionsRM0jDF2 = () => { return _returnValueiu96hvl };
		const _returnValueKdsCa6F = null;
		const _optionTermQVxtl5P = () => { return _returnValueKdsCa6F };
		const _helpertu5TCma = {
			"visibleOptions": _visibleOptionsRM0jDF2,
		"optionTerm": _optionTermQVxtl5P
	}
		const _returnValueOIuU7Hy = await _HelpBl6zKnD.longestOptionTermLength(_cmdYcCxYJe, _helpertu5TCma)
		const _arrayValueRTXYPp2 = undefined;
		const _arrayValuebP9MMW0 = undefined;
		const _arrayValuevD54AVt = null;
		const _returnValuehK9mNft = [_arrayValueRTXYPp2, _arrayValuebP9MMW0, _arrayValuevD54AVt]
		const _namelP2K6A = () => { return _returnValuehK9mNft };
		const _arrayValuefmmU45X = null;
		const _arrayValueHdkYGp = null;
		const _descriptionPv4mxuK = [_arrayValuefmmU45X, _arrayValueHdkYGp]
		const _cmdOqATzsd = new Argument(_namelP2K6A, _descriptionPv4mxuK)
		const _valueZlMzfU2 = true;
		const _previousPtKRLsb = {
		
	}
		const _returnValuey0pEhcD = await _cmdOqATzsd._concatValue(_valueZlMzfU2, _previousPtKRLsb)
		const _returnValueU7g9lNr = await _HelpBl6zKnD.subcommandDescription(_cmdOqATzsd)
		const _cmdVpZIOvz = "HjbQC1NpegKtcONEo";
		const _helperQa9rCp = null;
		const _returnValuePlbmMZ8 = await _HelpBl6zKnD.formatHelp(_cmdVpZIOvz, _helperQa9rCp)
		const _cmdTy3MOt = "TqioLiaDuaI4sVWvd7cpawDtf4QQjuhdww3gYEE2dmDgNumu9wPSTmY3dsWUwNoyHEHFZ8Qp89iHQJvNMY6";
		const _returnValueRE6XBlc = await _HelpBl6zKnD.visibleCommands(_cmdTy3MOt)
	});

	it('test for Help', async () => {
		const _HelpIDAu83S = new Help()
		const _nameOXgYsxU = "81sf7n4FcWvc";
		const _cmdHJrPMI6 = new Command(_nameOXgYsxU)
		const _returnValueYeRMuP9 = await _cmdHJrPMI6.opts()
		const _nameoyp6Rlj = undefined;
		const _returnValueuwZ9mw2 = await _cmdHJrPMI6.createCommand(_nameoyp6Rlj)
		const _returnValuecGlR4bz = null;
		const _nameiTjAu1R = () => { return _returnValuecGlR4bz };
		const _descriptioncskzMb9 = {
		
	}
		const _returnValuer0lqXzA = await _cmdHJrPMI6.createArgument(_nameiTjAu1R, _descriptioncskzMb9)
		const _returnValueK7eQoza = await _HelpIDAu83S.subcommandTerm(_cmdHJrPMI6)
		const _optionsrfdxXN9 = {
		
	}
		const __hasHelpOptioneoBYAw3 = undefined;
		const __helpShortFlagitf7Mg3 = null;
		const _returnValueKwnRdlA = undefined;
		const __findOptionRxi3KNf = () => { return _returnValueKwnRdlA };
		const _arrayValuekASrYl8 = {
		
	}
		const __helpLongFlageaWDoxz = [_arrayValuekASrYl8]
		const _returnValuesCwp3ff = 8.374994710589515;
		const _createOptionGLyxZh2 = () => { return _returnValuesCwp3ff };
		const _returnValueS0ty36x = undefined;
		const __helpDescriptionRwPgvm6 = () => { return _returnValueS0ty36x };
		const __helpFlagsYO6JWF0 = 0.5824253447434735;
		const _cmdhprNit = {
			"options": _optionsrfdxXN9,
		"_hasHelpOption": __hasHelpOptioneoBYAw3,
		"_helpShortFlag": __helpShortFlagitf7Mg3,
		"_findOption": __findOptionRxi3KNf,
		"_helpLongFlag": __helpLongFlageaWDoxz,
		"createOption": _createOptionGLyxZh2,
		"_helpDescription": __helpDescriptionRwPgvm6,
		"_helpFlags": __helpFlagsYO6JWF0
	}
		const _returnValuezhvPBEx = await _HelpIDAu83S.visibleOptions(_cmdhprNit)
	});

	it('test for Help', async () => {
		const _HelpUkSYTGp = new Help()
		const _cmdYYDDBnG = 5.799398965206876;
		const _helperer6fHDJ = "eMdr2OoHhv27yOOdyYMOF1zVrFgtBOtq";
		const _returnValueAx2s9n = await _HelpUkSYTGp.longestOptionTermLength(_cmdYYDDBnG, _helperer6fHDJ)
	});

	it('test for Help', async () => {
		const _HelpdAvOhOP = new Help()
		const _cmdyI6LBoU = undefined;
		const _helpereZUSOZT = new Help()
		const _returnValueZniVAD1 = null;
		const _returnValuePq9M2vW = () => { return _returnValueZniVAD1 };
		const _sliceqG3ytKh = () => { return _returnValuePq9M2vW };
		const _nameWvnWtzL = {
			"slice": _sliceqG3ytKh
	}
		const _descriptionoHi1rOp = 1.490607586021703;
		const _optionijBClw = new Argument(_nameWvnWtzL, _descriptionoHi1rOp)
		const _returnValuexaoPNn = "uMsYHNDMM27SihCBwU5tJ4Ba6erlDstdtVDIuFYVHK7QlK";
		const _arrayValuelh85Ah = () => { return _returnValuexaoPNn };
		const _arrayValueJc18aSk = -2.2363831502365965;
		const _arrayValueCHw89N2 = []
		const _arrayValuele3CNpB = [_arrayValuelh85Ah, _arrayValueJc18aSk, _arrayValueCHw89N2]
		const _arrayValue0YwyNu = {
		
	}
		const _arrayValueYHv98xt = "sn05eKFayUBQ7DJ47yongcr9sLjgO1bh0Lt8AFoccJo3ZL7E35f3RB8DjqkufdydW8OH0CzQlxsMvA6zM4C2MIyJdrx5u";
		const _arrayValueEMWyRue = undefined;
		const _arrayValuexA7XFU4 = [_arrayValuele3CNpB, _arrayValue0YwyNu, _arrayValueYHv98xt, _arrayValueEMWyRue]
		const _arrayValueIufK8dN = true;
		const _arrayValueeRTURTh = null;
		const _returnValuexSrlcYw = [_arrayValuexA7XFU4, _arrayValueIufK8dN, _arrayValueeRTURTh]
		const _includestglIWP7 = () => { return _returnValuexSrlcYw };
		const _returnValuehAtxLVI = undefined;
		const _joinqGFjRHs = () => { return _returnValuehAtxLVI };
		const _values8CPhEl = {
			"includes": _includestglIWP7,
		"join": _joinqGFjRHs
	}
		const _returnValueLFQJRLN = await _optionijBClw.choices(_values8CPhEl)
		const _fnA5GNcDl = undefined;
		const _returnValue52ztq7 = await _optionijBClw.argParser(_fnA5GNcDl)
		const _returnValueAgtYKyJ = await _helpereZUSOZT.optionDescription(_optionijBClw)
		const _cmdsTfCGI9 = "MsWdjhUojApXmlFXpXgCrLuxMQ9H9tEcQciDDLtpnt";
		const _returnValuey3a0qV6 = await _helpereZUSOZT.commandUsage(_cmdsTfCGI9)
		const _arrayValuevEUs7x = "lhiCap5AzQwloe9hkMg9QZYSv60SzRsII";
		const _arrayValueH94BTK = []
		const _arrayValuerxcW3ip = null;
		const _arrayValuehciFJn = "fB2m6lhcqzKPSlBz7fgAshFsb4CUPduJ5BDPYy3fIG6z5Nm4kQzrtYEtzUtszcjpCh4ZB9pTXBbaA";
		const _arrayValueUpE3qP = [_arrayValueH94BTK, _arrayValuerxcW3ip, _arrayValuehciFJn]
		const _returnValueQzBlPKC = {
		
	}
		const _arrayValuetQH5QT2 = () => { return _returnValueQzBlPKC };
		const _cmdm5zlyvJ = [_arrayValuevEUs7x, _arrayValueUpE3qP, _arrayValuetQH5QT2]
		const _helperJ0hht7C = new Help()
		const _flagshJx97IH = true;
		const _optionQF9R0M = {
			"flags": _flagshJx97IH
	}
		const _returnValueLWmaJHC = await _helperJ0hht7C.optionTerm(_optionQF9R0M)
		const _cmdHrCnB8I = "4OXqPrP1srE5QTmwQBjFnrCKGZdehSWo69NVMVLSKumxUpLegp8d";
		const _returnValuemheiGNE = await _helperJ0hht7C.commandUsage(_cmdHrCnB8I)
		const _argumentfXIuXnZ = undefined;
		const _returnValuedC7OxNu = await _helperJ0hht7C.argumentDescription(_argumentfXIuXnZ)
		const _cmdVLOxPnF = undefined;
		const _arrayValuezJbw8J7 = false;
		const _arrayValuezQTVFxv = {
		
	}
		const _arrayValuetv6m8VZ = "xcOkYbRfAsW2YMlyx";
		const _arrayValuexrlXcS1 = 4.175071114202078;
		const _returnValuezgmwuKu = [_arrayValuezJbw8J7, _arrayValuezQTVFxv, _arrayValuetv6m8VZ, _arrayValuexrlXcS1]
		const _longestOptionTermLengthnuER6ZM = () => { return _returnValuezgmwuKu };
		const _arrayValuezyOSbGD = 2.6141874500557716;
		const _returnValueemJjDUp = [_arrayValuezyOSbGD]
		const _longestSubcommandTermLengthl0LNA7D = () => { return _returnValueemJjDUp };
		const _arrayValueZtAlgpo = undefined;
		const _returnValuei5G9lXA = [_arrayValueZtAlgpo]
		const _returnValuefwhlkVk = () => { return _returnValuei5G9lXA };
		const _returnValue8WLvNc = () => { return _returnValuefwhlkVk };
		const _longestArgumentTermLengthCmeuO3 = () => { return _returnValue8WLvNc };
		const _helperQsCb9Md = {
			"longestOptionTermLength": _longestOptionTermLengthnuER6ZM,
		"longestSubcommandTermLength": _longestSubcommandTermLengthl0LNA7D,
		"longestArgumentTermLength": _longestArgumentTermLengthCmeuO3
	}
		const _returnValueEzmP9mS = await _helperJ0hht7C.padWidth(_cmdVLOxPnF, _helperQsCb9Md)
		const _cmdXWRFnQh = undefined;
		const _arrayValueCZxGhIX = undefined;
		const _arrayValuejcVGLsm = "qxrmepXM6a1yPjGl24dQwTBzfkUUQ3cQAC7YzA4lnAmUUZVJ3JQu0KQwgARlg4AGufGpdKP6KiYYgyxQit76A3qFxuDS1ME";
		const _arrayValuevJeo6K = true;
		const _arrayValuePfsA2q = "apDrivdI7331cKCV9Ljamq6hleRSv8jnhA0snsRXcpuiabuNT3yb6xXmBQPpMfh1jMU";
		const _returnValueRADAniK = [_arrayValueCZxGhIX, _arrayValuejcVGLsm, _arrayValuevJeo6K, _arrayValuePfsA2q]
		const _helpernzjXb5o = () => { return _returnValueRADAniK };
		const _returnValueOgUNKZl = await _helperJ0hht7C.formatHelp(_cmdXWRFnQh, _helpernzjXb5o)
		const _returnValueDj1e4x = await _helpereZUSOZT.formatHelp(_cmdm5zlyvJ, _helperJ0hht7C)
		const _namefTJGt1 = "Dxr5AFrh5f5uF2gDTpU7n3UPewhWCIdjqogcXjycXUuPUkhheRACVNlxs9LzbPPIrQUjADoEWRB7NYtjkLsRDknwxQLCJn4U2";
		const _arrayValueifbIeY = 7.0286292635950325;
		const _arrayValueje5coWA = false;
		const _returnValueP2djw5P = undefined;
		const _arrayValue0pZEl4 = () => { return _returnValueP2djw5P };
		const _arrayValueAZHGlTg = null;
		const _arrayValueXmvh307 = {
		
	}
		const _arrayValueNGtJMEy = [_arrayValueAZHGlTg, _arrayValueXmvh307]
		const _arrayValuesO6ult6 = "5WRjtUODamNdQZsFpc5SA7ScElntW42Q4TyEUj6wua7eggPnCBxzuia";
		const _arrayValuegD9Idwn = [_arrayValue0pZEl4, _arrayValueNGtJMEy, _arrayValuesO6ult6]
		const _descriptionJD9DAb = [_arrayValueifbIeY, _arrayValueje5coWA, _arrayValuegD9Idwn]
		const _argumentf8Oht1z = new Argument(_namefTJGt1, _descriptionJD9DAb)
		const _fnngNFWYY = undefined;
		const _returnValueMjxj88V = await _argumentf8Oht1z.argParser(_fnngNFWYY)
		const _returnValueJMDOZeG = await _argumentf8Oht1z.name()
		const _returnValueVBg2GAD = await _helpereZUSOZT.argumentDescription(_argumentf8Oht1z)
		const _cmdpzswWfs = undefined;
		const _returnValueX6nDrTD = undefined;
		const _visibleArgumentsU0zLa4T = () => { return _returnValueX6nDrTD };
		const _returnValuerFFAQbF = "SHiuArAFhJtk1e1ha74Y85A9EeGyxhjfz";
		const _argumentTermkEaTCrq = () => { return _returnValuerFFAQbF };
		const _helperUd8HDri = {
			"visibleArguments": _visibleArgumentsU0zLa4T,
		"argumentTerm": _argumentTermkEaTCrq
	}
		const _returnValueMpaF3nT = await _helpereZUSOZT.longestArgumentTermLength(_cmdpzswWfs, _helperUd8HDri)
		const _returnValueH3mmb0F = await _HelpdAvOhOP.longestSubcommandTermLength(_cmdyI6LBoU, _helpereZUSOZT)
		const _flagsYskvhYZ = "nz172lb1x1D9WpC1XGiPsaQp";
		const _returnValueDB5oHU = {
		
	}
		const _descriptionZfhLdgm = () => { return _returnValueDB5oHU };
		const _option57rPxB = new Option(_flagsYskvhYZ, _descriptionZfhLdgm)
		const _valueJDYa4Ar = {
		
	}
		const _previousCMIre8w = "OukPqggRFc6TeEWVsr8iUhbAuOyEDg";
		const _returnValueQNDrqO6 = await _option57rPxB._concatValue(_valueJDYa4Ar, _previousCMIre8w)
		const _arrayValueOXVEqPL = true;
		const _returnValueGXFI7Dm = [_arrayValueOXVEqPL]
		const _valuernbrdrp = () => { return _returnValueGXFI7Dm };
		const _returnValueGmetA0t = {
		
	}
		const _previouscWtwqEV = () => { return _returnValueGmetA0t };
		const _returnValueYhi9DTn = await _option57rPxB._concatValue(_valuernbrdrp, _previouscWtwqEV)
		const _returnValuerM9BKjm = await _HelpdAvOhOP.optionDescription(_option57rPxB)
	});

	it('test for Help', async () => {
		const _HelpnFgogKp = new Help()
		const _returnValueW7xmrGI = "lTOKvC7KHOUsoTMgqhnLi2f1iqMkCrk2VNzh5FE1akdSRghM2e19cUKTWa1XekeMTZgP6fK3dgjrOzCEwWVs1MYjssQ7G1i";
		const _nameZncTRMP = () => { return _returnValueW7xmrGI };
		const _argumentMUhuyd = {
			"name": _nameZncTRMP
	}
		const _returnValueFSxmXd9 = await _HelpnFgogKp.argumentTerm(_argumentMUhuyd)
		const _cmdNtu5YcM = true;
		const _helperQ0lof2O = new Help()
		const _cmdC4N3eIL = undefined;
		const _helpersbG5Zp8 = []
		const _returnValuejibxpkt = await _helperQ0lof2O.formatHelp(_cmdC4N3eIL, _helpersbG5Zp8)
		const _cmdCjQLh02 = "Q60LrvT5Ch87icJ8etm8E8onDVBPF2utKwCMeLtEE1ump6IjMrrtk8UOJgpyLuUBrBVd";
		const _returnValueR3M43z = await _helperQ0lof2O.commandUsage(_cmdCjQLh02)
		const _cmdCItkG0G = "p4qDYRCh8KYS9J9spydMVCjfrBm7TSkr";
		const _returnValueNyMPQ32 = "M4935uOVnjc7zjR4n3ggVOvkpFNkkgHDC124PQuwxzhTV9w2TcFA7EpqNiVqTJjhBzc3";
		const _helperjFe6XfC = () => { return _returnValueNyMPQ32 };
		const _returnValueIzxYnUw = await _helperQ0lof2O.longestOptionTermLength(_cmdCItkG0G, _helperjFe6XfC)
		const _returnValueZGLvBVi = await _HelpnFgogKp.formatHelp(_cmdNtu5YcM, _helperQ0lof2O)
	});

	it('test for Help', async () => {
		const _HelpLf1mXia = new Help()
		const _returnValueD79wiqW = "mIIN4etvja1fqSPK";
		const _cmdwTDZXnJ = () => { return _returnValueD79wiqW };
		const _arrayValueFZ3XDt = {
		
	}
		const _arrayValueetYxNgE = undefined;
		const _helperW4oWIiU = [_arrayValueFZ3XDt, _arrayValueetYxNgE]
		const _returnValueTM0ihr = await _HelpLf1mXia.longestArgumentTermLength(_cmdwTDZXnJ, _helperW4oWIiU)
		const _cmdiQnj6ti = false;
		const _returnValuexy5aYLs = null;
		const _arrayValueCvWCPDp = () => { return _returnValuexy5aYLs };
		const _arrayValuebY8UAzk = -6.589065588005294;
		const _helperNpTA43j = [_arrayValueCvWCPDp, _arrayValuebY8UAzk]
		const _returnValueR14zZkB = await _HelpLf1mXia.padWidth(_cmdiQnj6ti, _helperNpTA43j)
		const _cmdE5P7VgK = false;
		const _helperwae56OH = new Help()
		const _cmduo7qg8T = true;
		const _returnValue3XPqWJ = undefined;
		const _visibleOptionsV8SkAnH = () => { return _returnValue3XPqWJ };
		const _arrayValueqjU3SUr = undefined;
		const _returnValuea8hhQkz = [_arrayValueqjU3SUr]
		const _optionTermWfAlcbG = () => { return _returnValuea8hhQkz };
		const _helperpYgJWiq = {
			"visibleOptions": _visibleOptionsV8SkAnH,
		"optionTerm": _optionTermWfAlcbG
	}
		const _returnValueJyoXrAj = await _helperwae56OH.longestOptionTermLength(_cmduo7qg8T, _helperpYgJWiq)
		const _cmd0fnJnV = -1.2258777928409206;
		const _helperas1nGaS = new Help()
		const _arrayValueDJ9N4HE = false;
		const _arrayValueUYZAp62 = "okLRHgkuPpF";
		const _arrayValuejYxpBTo = [_arrayValueUYZAp62]
		const _argumentTHjPLEj = [_arrayValueDJ9N4HE, _arrayValuejYxpBTo]
		const _returnValueDpo1Ki8 = await _helperas1nGaS.argumentTerm(_argumentTHjPLEj)
		const _flagsbYYQlIc = "4KnsAenMA0cVqCG4TXDO";
		const _optionwXwzmgN = {
			"flags": _flagsbYYQlIc
	}
		const _returnValueTPORA3O = await _helperas1nGaS.optionTerm(_optionwXwzmgN)
		const _arrayValuefxnIApT = "db7lH69RqWX6Kp5z4duxBLAIHxKqLCDqDOE2SJkRDCQOeXgBy69FhQw";
		const _returnValuezaaz1ic = [_arrayValuefxnIApT]
		const _nameM9VUPBX = () => { return _returnValuezaaz1ic };
		const _argumentlljEz9Z = {
			"name": _nameM9VUPBX
	}
		const _returnValueNWdCLf9 = await _helperas1nGaS.argumentTerm(_argumentlljEz9Z)
		const _returnValuesgJQrxs = await _helperwae56OH.formatHelp(_cmd0fnJnV, _helperas1nGaS)
		const _returnValueA8YEIZS = "c1afRfa8DOMmXsVxmIPyL4zkfbl8qeNtmUeG4YVc75QLx2B";
		const _optionZc8djIV = () => { return _returnValueA8YEIZS };
		const _returnValueR8YS6a3 = await _helperwae56OH.optionTerm(_optionZc8djIV)
		const _returnValueXPWjb35 = null;
		const _argumentxgDDH9v = () => { return _returnValueXPWjb35 };
		const _returnValuehRRCnro = await _helperwae56OH.argumentDescription(_argumentxgDDH9v)
		const _messageaPVFui9 = undefined;
		const _argumentYwNnClf = new InvalidArgumentError(_messageaPVFui9)
		const _returnValueYXcuvu7 = await _helperwae56OH.argumentTerm(_argumentYwNnClf)
		const _returnValue8Oxiao = await _HelpLf1mXia.longestSubcommandTermLength(_cmdE5P7VgK, _helperwae56OH)
		const _arrayValueZ8I8z4m = "GA7Kw3Z7EkljjRtRa7DMDFVne3CmsjVO2XLM5CVEyESQC7sNCxKOfiz5wAy9G6hW";
		const _arrayValueIyzn9ry = "nMd9b8WvC5AqZDVw2CsXj";
		const _arrayValueSa8HeRO = 9.281473087183901;
		const _cmdC9hUKFW = [_arrayValueZ8I8z4m, _arrayValueIyzn9ry, _arrayValueSa8HeRO]
		const _returnValuepEsqdVk = await _HelpLf1mXia.visibleArguments(_cmdC9hUKFW)
	});

	it('test for Help', async () => {
		const _Help3MOHe7 = new Help()
		const _strqgCW9Qk = "fZz3kbBuSIO5EhXPreLYrpXMFTXQ2q4bzwguvzubxdY6GCfat";
		const _widthLkDLBhV = 3.026540663266493;
		const _indentDkTz0M = "qdHsFFmpKnAM1p8xWZd6Z261aeptmKGcd6D6fOQG4q";
		const _minColumnWidthAtHpXEb = -6.753010579698314;
		const _returnValueXlMTWj5 = await _Help3MOHe7.wrap(_strqgCW9Qk, _widthLkDLBhV, _indentDkTz0M, _minColumnWidthAtHpXEb)
		const _arrayValue9JELyX = undefined;
		const _arrayValueb7yRv8C = {
		
	}
		const _arrayValued0NlliU = undefined;
		const _strvGkzMZu = [_arrayValue9JELyX, _arrayValueb7yRv8C, _arrayValued0NlliU]
		const _widthMjrpWWt = 5.036494089231201;
		const _indentuf511a7 = -1.9865893577784028;
		const _minColumnWidthLmDkpTj = -5.433808402601368;
		const _returnValueRCM4L7Q = await _Help3MOHe7.wrap(_strvGkzMZu, _widthMjrpWWt, _indentuf511a7, _minColumnWidthLmDkpTj)
		const _returnValue7puTPp = "JePlDVQHIw";
		const _cmdM3KnYdH = () => { return _returnValue7puTPp };
		const _returnValuer03lTR5 = await _Help3MOHe7.subcommandDescription(_cmdM3KnYdH)
		const _cmdIaO2MNd = null;
		const _helpercaIr3Iv = new Help()
		const _returnValueIwPynjX = -9.688391626850816;
		const _argumentJvIXy2i = () => { return _returnValueIwPynjX };
		const _returnValuer0R5vlf = await _helpercaIr3Iv.argumentDescription(_argumentJvIXy2i)
		const _optionixMe5nf = "digRNh1k63pOLBY1Otr2";
		const _returnValueyw9ihQz = await _helpercaIr3Iv.optionDescription(_optionixMe5nf)
		const _returnValuemtFe785 = await _Help3MOHe7.longestArgumentTermLength(_cmdIaO2MNd, _helpercaIr3Iv)
	});

	it('test for Help', async () => {
		const _Helpwj97oX = new Help()
		const _returnValueC5fclu6 = 4.87814453860085;
		const _optiongR3ijBO = () => { return _returnValueC5fclu6 };
		const _returnValueVYUQrUL = await _Helpwj97oX.optionTerm(_optiongR3ijBO)
	});

	it('test for Help', async () => {
		const _Helpo89YYj = new Help()
		const _flags42jgTm = "dyBqt6hbY1elnz84LVOP7MRxXOsZhTmUzIaL3gTIrRs8S73qhu9fA4qLlEVmbwUyyjXl14ClhHcKw8sYhF";
		const _descriptionCZT6tbu = null;
		const _option8YBFyi = new Option(_flags42jgTm, _descriptionCZT6tbu)
		const _returnValueegrvd4 = "iMa1EtzMirT62Zu0OduqmnbIYr2wmsGxtVzYqEHsREPIV5JI2KbLx2gFq7kLt3I58WMOUi7";
		const _valuesLYBaC08 = () => { return _returnValueegrvd4 };
		const _returnValuegHBVHGO = await _option8YBFyi.choices(_valuesLYBaC08)
		const _mandatoryJ2lqGm = true;
		const _returnValueex4H9Aq = await _option8YBFyi.makeOptionMandatory(_mandatoryJ2lqGm)
		const _returnValueo3d4zn = await _Helpo89YYj.optionTerm(_option8YBFyi)
		const _cmdtTl5W6i = "eegKDLzcOh2eHLMydlJsL1Kwctq7S2DPivkCUTQmv0KVYyuMQwdCmOA3VW0V9BnR7KRV1Wq7XBXT71Aeq6voqoFV";
		const _returnValuexpQgP4 = []
		const _visibleArgumentsTaJVR2f = () => { return _returnValuexpQgP4 };
		const _argumentTermvIqzcj3 = true;
		const _helperArandX = {
			"visibleArguments": _visibleArgumentsTaJVR2f,
		"argumentTerm": _argumentTermvIqzcj3
	}
		const _returnValueRsqREVz = await _Helpo89YYj.longestArgumentTermLength(_cmdtTl5W6i, _helperArandX)
		const _returnValuegNHW7AF = undefined;
		const _cmdFESkecR = () => { return _returnValuegNHW7AF };
		const _returnValueSFMlK6g = await _Helpo89YYj.commandUsage(_cmdFESkecR)
	});

	it('test for Help', async () => {
		const _HelpM3NpAHi = new Help()
		const _cmdqJWEIUW = {
		
	}
		const _helperw8uRsXV = new Help()
		const _strI3cbJle = "Iv6qUixVxfw5yiUHDtACHhFhAjoybClj";
		const _widthWhVYhIo = 1.6394707726136915;
		const _indentxPd20jo = 6.248793785956231;
		const _minColumnWidthIyntwu = 2.9076178503514267;
		const _returnValueRRtO0Re = await _helperw8uRsXV.wrap(_strI3cbJle, _widthWhVYhIo, _indentxPd20jo, _minColumnWidthIyntwu)
		const _cmdLDn69gg = null;
		const _returnValueAlsalXI = []
		const _visibleArgumentsubzZ9LZ = () => { return _returnValueAlsalXI };
		const _returnValueJUl5ccn = false;
		const _argumentTermdmnHZnb = () => { return _returnValueJUl5ccn };
		const _helperQnGarxZ = {
			"visibleArguments": _visibleArgumentsubzZ9LZ,
		"argumentTerm": _argumentTermdmnHZnb
	}
		const _returnValueY4OkrZS = await _helperw8uRsXV.longestArgumentTermLength(_cmdLDn69gg, _helperQnGarxZ)
		const _returnValueyG6Jojy = await _HelpM3NpAHi.longestSubcommandTermLength(_cmdqJWEIUW, _helperw8uRsXV)
		const _cmdllkmGNO = null;
		const _helperZwfBqm = undefined;
		const _returnValueyCol5k2 = await _HelpM3NpAHi.longestOptionTermLength(_cmdllkmGNO, _helperZwfBqm)
		const _arrayValuelyweIJu = null;
		const _cmdcKkVvQ1 = [_arrayValuelyweIJu]
		const _arrayValueuRNqAXS = "5B4pGbWyCdBFB3ntg1PfaIWVq4i0yyzGUGhPgSgWkZnzKXw3uXtCMNcz3fIHsFtjpFoiaaACVlTNWIgSnsHLX";
		const _arrayValueI1tjp8C = undefined;
		const _returnValuet58M66N = [_arrayValueuRNqAXS, _arrayValueI1tjp8C]
		const _visibleOptionsCJSOJbR = () => { return _returnValuet58M66N };
		const _returnValuerUYTcEm = undefined;
		const _optionTermaBAdRPT = () => { return _returnValuerUYTcEm };
		const _helperJIFMFBR = {
			"visibleOptions": _visibleOptionsCJSOJbR,
		"optionTerm": _optionTermaBAdRPT
	}
		const _returnValueJcZsBae = await _HelpM3NpAHi.longestOptionTermLength(_cmdcKkVvQ1, _helperJIFMFBR)
		const _cmdxrxTMK1 = undefined;
		const _returnValueQikuGmT = await _HelpM3NpAHi.visibleCommands(_cmdxrxTMK1)
	});

	it('test for Help', async () => {
		const _HelpUxsZsKj = new Help()
		const _flagsjmV2XO9 = "tUaGniOdjEqXkqArgOa3MA95BP1UQzqhEBI4QsWOhhu0xzWNUdQVdthF5Pk3Pv2kW218sMBcZf2O4lsxgB34Rp5xBXKSTi0MOw";
		const _descriptionMReKP4M = undefined;
		const _argumentzemZous = new Option(_flagsjmV2XO9, _descriptionMReKP4M)
		const _arrayValuea6ePxuM = false;
		const _valuesQ1Dop0b = [_arrayValuea6ePxuM]
		const _returnValueUbRKdQo = await _argumentzemZous.choices(_valuesQ1Dop0b)
		const _returnValuepbTFHY = await _argumentzemZous.attributeName()
		const _returnValueA7zEDoe = await _HelpUxsZsKj.argumentDescription(_argumentzemZous)
		const _cmdkykmn1O = undefined;
		const _helperijYtSRQ = new Help()
		const _cmdz8HdWT1 = "31HPyCoDnX6BBJRl81L1drRaMaVzHRtcgEB7RqsTuqrcEdhNCklaSPwEWOUb7EPOL";
		const _helperoKKjXjc = new Help()
		const _nameFRdmNt = false;
		const _cmdRmhUB1 = new Command(_nameFRdmNt)
		const _fnQmduFbC = null;
		const _returnValueXiMhz7o = await _cmdRmhUB1.exitOverride(_fnQmduFbC)
		const _strkSFpXqv = undefined;
		const _flagsiT9x909 = {
		
	}
		const _descriptioncDyg6On = -1.7424422092639738;
		const _returnValueefJupO = await _cmdRmhUB1.version(_strkSFpXqv, _flagsiT9x909, _descriptioncDyg6On)
		const _returnValueFVnmO1j = await _helperoKKjXjc.commandDescription(_cmdRmhUB1)
		const _returnValuedaZTCze = await _helperijYtSRQ.longestOptionTermLength(_cmdz8HdWT1, _helperoKKjXjc)
		const _flagsgabuPEH = null;
		const _descriptionNkGXETD = null;
		const _cmdxSMgRY = new Option(_flagsgabuPEH, _descriptionNkGXETD)
		const _nameCbm9DNY = false;
		const _returnValuel1pPJdV = await _cmdxSMgRY.env(_nameCbm9DNY)
		const _valuesSV2guEA = "52KmBcm5Z68KSAhSv9VOESVKdP6bTjFi0hraYxt7hoT6S2vlqZgjA4HK53IUXQZUIIoHiCoz8hRA6iDubH7Imv2NRktMd1J425";
		const _returnValueIDW7KHv = await _cmdxSMgRY.choices(_valuesSV2guEA)
		const _returnValuew6O2ksM = await _helperijYtSRQ.commandDescription(_cmdxSMgRY)
		const _cmdrq7NDTo = "e21XLe96zA6aOO9z7JB3Dzf";
		const _returnValueK8Ovcg = await _helperijYtSRQ.visibleOptions(_cmdrq7NDTo)
		const _returnValuewOYg96F = []
		const _cmdzIDYCDF = () => { return _returnValuewOYg96F };
		const _returnValuevnPGGgG = await _helperijYtSRQ.subcommandTerm(_cmdzIDYCDF)
		const _returnValueNJcYu4x = null;
		const _cmdCY1mpVm = () => { return _returnValueNJcYu4x };
		const _returnValueO7E0XDw = await _helperijYtSRQ.visibleOptions(_cmdCY1mpVm)
		const _returnValueHF2fKIf = await _HelpUxsZsKj.formatHelp(_cmdkykmn1O, _helperijYtSRQ)
		const _optionBlD0Dsl = "U7jbFoKxlLf3HGKLnSCAFtDcilW59ycJfDcuZn01Wt122hNOpawiUlD7Ohk9dvp778";
		const _returnValueYzhjv7U = await _HelpUxsZsKj.optionTerm(_optionBlD0Dsl)
		const _optionyWyH3MI = false;
		const _returnValueACo3V1R = await _HelpUxsZsKj.optionDescription(_optionyWyH3MI)
	});

	it('test for Help', async () => {
		const _Helpmpn8ac = new Help()
		const _arrayValueDhpPqi = "wC2Xzd9lsVVuT5QXXgQGWnGmAMdmRNGp4dWPeGFwN7VezM72nQa1akyH0HV3A2KNbi6U5";
		const _arrayValue0HTZaM = {
		
	}
		const _returnValueMKpQNFf = [_arrayValueDhpPqi, _arrayValue0HTZaM]
		const _matchlHqeta9 = () => { return _returnValueMKpQNFf };
		const _arrayValuez3lkwml = {
		
	}
		const _arrayValueDBPuoUv = false;
		const _arrayValueEVLYf8 = [_arrayValueDBPuoUv]
		const _arrayValuePRxahH1 = "HqkGbgRcSQoHrJEkQK6KNVWzX96CkvHPyIMqXyGfgVQuM1K6";
		const _returnValueT5Hj9hN = [_arrayValuez3lkwml, _arrayValueEVLYf8, _arrayValuePRxahH1]
		const _substrCPpAJ2f = () => { return _returnValueT5Hj9hN };
		const _striFEjtW = {
			"match": _matchlHqeta9,
		"substr": _substrCPpAJ2f
	}
		const _widthVIdBxL = -9.410135516582583;
		const _indentEyNmtbX = -0.21473523649645365;
		const _minColumnWidthPQGsF8Y = 7.473301040976601;
		const _returnValuezDsVhcx = await _Helpmpn8ac.wrap(_striFEjtW, _widthVIdBxL, _indentEyNmtbX, _minColumnWidthPQGsF8Y)
		const __argsDescriptionYFmc4t = {
		
	}
		const __argsTVCr0Bi = {
		
	}
		const _cmdxZ7VgUx = {
			"_argsDescription": __argsDescriptionYFmc4t,
		"_args": __argsTVCr0Bi
	}
		const _returnValueUlFKtQn = await _Helpmpn8ac.visibleArguments(_cmdxZ7VgUx)
		const _cmdkij9VH = null;
		const _returnValuepdIb1B = {
		
	}
		const _helperD5ugOB = () => { return _returnValuepdIb1B };
		const _returnValueklvUNd2 = await _Helpmpn8ac.longestArgumentTermLength(_cmdkij9VH, _helperD5ugOB)
	});

	it('test for Help', async () => {
		const _HelpG1gFqoH = new Help()
		const _namee4y5hV = []
		const _arrayValueALnQvqs = false;
		const _arrayValuerJtqXQl = undefined;
		const _returnValuevBuFYq = [_arrayValueALnQvqs, _arrayValuerJtqXQl]
		const _descriptionnI4T7a4 = () => { return _returnValuevBuFYq };
		const _argumentLJ0DDky = new Argument(_namee4y5hV, _descriptionnI4T7a4)
		const _arrayValuevH6As5i = undefined;
		const _valuesvQ7idEX = [_arrayValuevH6As5i]
		const _returnValuenyBULGV = await _argumentLJ0DDky.choices(_valuesvQ7idEX)
		const _returnValuegcAkQ4N = await _argumentLJ0DDky.argRequired()
		const _returnValuerXFiP3C = await _argumentLJ0DDky.name()
		const _fnRx89lma = undefined;
		const _returnValuegaNaO16 = await _argumentLJ0DDky.argParser(_fnRx89lma)
		const _returnValuelXA8MH8 = await _argumentLJ0DDky.argRequired()
		const _returnValuelnxjsb5 = await _HelpG1gFqoH.argumentDescription(_argumentLJ0DDky)
		const _arrayValueM54xoiR = false;
		const _cmdQGMtob = [_arrayValueM54xoiR]
		const _returnValueozQSAXW = await _HelpG1gFqoH.commandUsage(_cmdQGMtob)
		const _returnValueWn2HK5S = true;
		const _flagsmg22L7G = () => { return _returnValueWn2HK5S };
		const _descriptionWPWxE7l = -2.8529663813684527;
		const _cmdlh5Ld77 = new Option(_flagsmg22L7G, _descriptionWPWxE7l)
		const _returnValuexKDU53Y = "8Ky1IzwZIraWYrWuEP";
		const _includesPMxdaUI = () => { return _returnValuexKDU53Y };
		const _returnValueAMvPD3U = null;
		const _joinTtuF3Em = () => { return _returnValueAMvPD3U };
		const _valuesRb6OhF = {
			"includes": _includesPMxdaUI,
		"join": _joinTtuF3Em
	}
		const _returnValueJR2ikKD = await _cmdlh5Ld77.choices(_valuesRb6OhF)
		const _valuem2LSkbD = -3.2006567245510116;
		const _previousi9OjfKt = "Segx5TdvdjdGDKryewADAeyWxzkHBRpidcUyLXCWASHrLHJCaJCOtVwLT7aSFPqelbOCsTFEKGKjRDzdKElbRMANIKIrb1Gm";
		const _returnValueJiZmfOB = await _cmdlh5Ld77._concatValue(_valuem2LSkbD, _previousi9OjfKt)
		const _returnValueJXBQCl = await _cmdlh5Ld77.name()
		const _mandatoryLYhC5LA = true;
		const _returnValueNPvgXzW = await _cmdlh5Ld77.makeOptionMandatory(_mandatoryLYhC5LA)
		const _returnValueWe2vpT4 = await _HelpG1gFqoH.subcommandDescription(_cmdlh5Ld77)
		const _returnValueShV3ztC = null;
		const _cmdUjFl7X6 = () => { return _returnValueShV3ztC };
		const _returnValuevNQOhQP = await _HelpG1gFqoH.subcommandTerm(_cmdUjFl7X6)
	});

	it('test for Help', async () => {
		const _Helpeq7ukT = new Help()
		const _nameO9LmrH = []
		const _descriptionqeMp7p = undefined;
		const _optionyF9Qj8T = new Argument(_nameO9LmrH, _descriptionqeMp7p)
		const _returnValueWCrgHtT = await _optionyF9Qj8T.argRequired()
		const _arrayValuel4gVwnu = null;
		const _valuesAwELZid = [_arrayValuel4gVwnu]
		const _returnValueAvt2ER5 = await _optionyF9Qj8T.choices(_valuesAwELZid)
		const _valueqQbSGEF = {
		
	}
		const _descriptionTOqhnwp = undefined;
		const _returnValueUo9znBl = await _optionyF9Qj8T.default(_valueqQbSGEF, _descriptionTOqhnwp)
		const _returnValue3b5xUT = await _Helpeq7ukT.optionDescription(_optionyF9Qj8T)
		const _arrayValuewpn4ltS = false;
		const _returnValueqhSPlyI = {
		
	}
		const _arrayValueBExrh0R = () => { return _returnValueqhSPlyI };
		const _arrayValueZSY4qDH = null;
		const _arrayValuevuGvLfR = -6.476253569844557;
		const _arrayValuefVGYqNG = [_arrayValueBExrh0R, _arrayValueZSY4qDH, _arrayValuevuGvLfR]
		const _cmdHRDJLUl = [_arrayValuewpn4ltS, _arrayValuefVGYqNG]
		const _returnValueyAbdJ3 = await _Helpeq7ukT.subcommandTerm(_cmdHRDJLUl)
		const _cmdlWijVFR = "FpsdXCOUMO";
		const _sortSubcommandsyDHHc0G = null;
		const _returnValueoN6v8k = "8iLUxkXiFrwyQRjvYDwIWaXFRrfqXP";
		const _subcommandTermVHTUclA = () => { return _returnValueoN6v8k };
		const _helpereYUF7wS = {
			"sortSubcommands": _sortSubcommandsyDHHc0G,
		"subcommandTerm": _subcommandTermVHTUclA
	}
		const _returnValueDXcpc3 = await _Helpeq7ukT.longestSubcommandTermLength(_cmdlWijVFR, _helpereYUF7wS)
		const _returnValuezNgnK9Y = true;
		const _cmdhCwNrio = () => { return _returnValuezNgnK9Y };
		const _returnValueFCz2Lbf = await _Helpeq7ukT.visibleOptions(_cmdhCwNrio)
	});

	it('test for Help', async () => {
		const _Helpb7bsKii = new Help()
		const _returnValuehyYgGFz = null;
		const _sliceJJ4ifUI = () => { return _returnValuehyYgGFz };
		const _namenjEY8kC = {
			"slice": _sliceJJ4ifUI
	}
		const _descriptionilWUajZ = -9.888469796754679;
		const _argumentZ2IPkys = new Argument(_namenjEY8kC, _descriptionilWUajZ)
		const _returnValueCcDQOjs = await _argumentZ2IPkys.name()
		const _fnovYveC = undefined;
		const _returnValueCcr8z9d = await _argumentZ2IPkys.argParser(_fnovYveC)
		const _valuebOJDkn = {
		
	}
		const _returnValueCprss4j = {
		
	}
		const _previousE3iT1CM = () => { return _returnValueCprss4j };
		const _returnValueZcy46a2 = await _argumentZ2IPkys._concatValue(_valuebOJDkn, _previousE3iT1CM)
		const _valueFC63bzI = {
		
	}
		const _descriptioneIddgks = undefined;
		const _returnValuetQVL14w = await _argumentZ2IPkys.default(_valueFC63bzI, _descriptioneIddgks)
		const _fnnpYFCDI = undefined;
		const _returnValueTtfWcmL = await _argumentZ2IPkys.argParser(_fnnpYFCDI)
		const _returnValueizNvoB3 = await _Helpb7bsKii.argumentDescription(_argumentZ2IPkys)
		const _cmdTxU7X2Z = false;
		const _helperI7j986k = undefined;
		const _returnValuenWp3mWC = await _Helpb7bsKii.padWidth(_cmdTxU7X2Z, _helperI7j986k)
		const _cmdpI2uwbW = {
		
	}
		const _returnValuesOuruui = null;
		const _helperrSDvR3U = () => { return _returnValuesOuruui };
		const _returnValueGMYOk0B = await _Helpb7bsKii.longestArgumentTermLength(_cmdpI2uwbW, _helperrSDvR3U)
		const _cmdKdKv6Zg = "w5Eo5tCEOq58aNM9cvJoLHnCErN26gsfqMF6u9rO0QRbB7ItPUBJnYIRkOMi";
		const _returnValuegAZHyay = await _Helpb7bsKii.commandUsage(_cmdKdKv6Zg)
		const _returnValueGQL1nCT = false;
		const _descriptions174G1 = () => { return _returnValueGQL1nCT };
		const _cmdE24x4tp = {
			"description": _descriptions174G1
	}
		const _returnValueglRVoZZ = await _Helpb7bsKii.commandDescription(_cmdE24x4tp)
	});

	it('test for Help', async () => {
		const _HelpH1wQXVG = new Help()
		const _nameZh6QVEP = []
		const _cmdHCyX4sD = new Command(_nameZh6QVEP)
		const _returnValueVYoNyve = await _cmdHCyX4sD._parseOptionsEnv()
		const _strzhNWGw = undefined;
		const _flagsqnLZ4b = {
		
	}
		const _descriptionE0Utyvh = {
		
	}
		const _returnValueTJuQLmq = await _cmdHCyX4sD.version(_strzhNWGw, _flagsqnLZ4b, _descriptionE0Utyvh)
		const _aliaslskdwa = null;
		const _returnValueb25kqlc = await _cmdHCyX4sD.alias(_aliaslskdwa)
		const _configurationiS0SZTD = {
		
	}
		const _returnValueyxiwAMv = await _cmdHCyX4sD.configureHelp(_configurationiS0SZTD)
		const _returnValueoF0fy0b = await _HelpH1wQXVG.visibleOptions(_cmdHCyX4sD)
		const _namevSKqzPA = "McLN78Tyqwmq5eMLGmqDBMaaXj4qSc";
		const _arrayValueWt3d5ix = "B2tAFRfF4hAwcu2LLWyz0WRw5hnEqQNwhkl53gzBytkfLgDklFbCDGmBNiPnFDdim8qrwoVfBmtgudUnUJ";
		const _arrayValuebwg7CkY = null;
		const _arrayValueiMQ2TEJ = {
		
	}
		const _descriptionlVxY8no = [_arrayValueWt3d5ix, _arrayValuebwg7CkY, _arrayValueiMQ2TEJ]
		const _cmdaqynpJ1 = new Argument(_namevSKqzPA, _descriptionlVxY8no)
		const _fn2oI7mW = undefined;
		const _returnValuenAsWjNN = await _cmdaqynpJ1.argParser(_fn2oI7mW)
		const _returnValueViUVejg = await _cmdaqynpJ1.argRequired()
		const _returnValueRzg4dcl = await _HelpH1wQXVG.subcommandDescription(_cmdaqynpJ1)
	});

	it('test for Help', async () => {
		const _HelpBZITXVx = new Help()
		const _cmdf9hRaWR = "JiZQQlDzdcUVVRL1cxtwRmufwppyEVXal3BdwicSdqW97jnN1rRqEDJqRfQw8J5EzcW9ID1WzH8";
		const _helperTTh0AQ = new Help()
		const _arrayValueInZpT5S = true;
		const _arrayValueMKRGycH = []
		const _argumentLpSD1RP = [_arrayValueInZpT5S, _arrayValueMKRGycH]
		const _returnValueYJn7cJd = await _helperTTh0AQ.argumentDescription(_argumentLpSD1RP)
		const _nameeQL19bk = "ukxgVR7QsMy1JaIjcgeUAScah3vEIA7u1Wdumc8g9zn9bKVV1AO544mDseAIWaB7A5lQSV0rFjQsaK";
		const _cmdiMf4BB4 = new Command(_nameeQL19bk)
		const _namesTB6Etbw = "iTtDQqjehQ8WUMIt8oMUTOMGOIaobGYibkNtB9ElIKUgiGH0UbbHLTrfPAf9A4uZvSi5o7aQR";
		const _returnValueClMPWXO = await _cmdiMf4BB4.arguments(_namesTB6Etbw)
		const _returnValueSgPkXuh = await _helperTTh0AQ.subcommandTerm(_cmdiMf4BB4)
		const _arrayValueHaWedZf = "HKbJQTOGGXvVrlbyX2KR1jiDGbJ0SpyiWfGK4gzXyajoxo";
		const _arrayValuelDzY3Rc = false;
		const _optionA3WkSsO = [_arrayValueHaWedZf, _arrayValuelDzY3Rc]
		const _returnValuekxLcwTG = await _helperTTh0AQ.optionDescription(_optionA3WkSsO)
		const _cmdriwvkXM = undefined;
		const _arrayValueld00zqW = {
		
	}
		const _arrayValueIhGpZD = false;
		const _arrayValueYnyk0Rz = null;
		const _helperVei5BvX = [_arrayValueld00zqW, _arrayValueIhGpZD, _arrayValueYnyk0Rz]
		const _returnValuetido9Rm = await _helperTTh0AQ.longestArgumentTermLength(_cmdriwvkXM, _helperVei5BvX)
		const _returnValuerVAi1WR = await _HelpBZITXVx.padWidth(_cmdf9hRaWR, _helperTTh0AQ)
		const _flags0uTzfc = false;
		const _arrayValueAovZOqX = -2.3365940692475693;
		const _arrayValueEStUOUo = false;
		const _descriptionkK8iIwI = [_arrayValueAovZOqX, _arrayValueEStUOUo]
		const _optionojwQKOM = new Option(_flags0uTzfc, _descriptionkK8iIwI)
		const _arrayValueZTO14XO = {
		
	}
		const _arrayValuelkvLwNv = {
		
	}
		const _arrayValueMHQWVYK = null;
		const _valueskWdb6oS = [_arrayValueZTO14XO, _arrayValuelkvLwNv, _arrayValueMHQWVYK]
		const _returnValuekTh8DOw = await _optionojwQKOM.choices(_valueskWdb6oS)
		const _returnValuegTFNOMg = await _optionojwQKOM.attributeName()
		const _valuegibOYaq = true;
		const _previousL9wJrdG = {
		
	}
		const _returnValuepSONqMA = await _optionojwQKOM._concatValue(_valuegibOYaq, _previousL9wJrdG)
		const _argHhh0Ilo = {
		
	}
		const _returnValueqF4f59Z = await _optionojwQKOM.is(_argHhh0Ilo)
		const _arrayValuekFLdUqb = true;
		const _arrayValueBKL0z56 = null;
		const _arrayValueV78FwaV = "QsioedL46StIVx80VOpam5beizOxOqYIIrswi4WdeWFJotDAvTGKnhbeeKD6jDul1cxGQmXrQYKgHkV";
		const _valuesSZ638hz = [_arrayValuekFLdUqb, _arrayValueBKL0z56, _arrayValueV78FwaV]
		const _returnValuerDUSYKl = await _optionojwQKOM.choices(_valuesSZ638hz)
		const _returnValue7zXLda = await _HelpBZITXVx.optionDescription(_optionojwQKOM)
		const _strzpptUGK = "YWttlRgkaPyBLBpYzXGGc8AUrnI";
		const _widthIuFX5Zy = 3.7785694774218257;
		const _indentZ7O404 = 1.280492564817397;
		const _minColumnWidthKW6GpW = -6.152312082754145;
		const _returnValueYlAj3uJ = await _HelpBZITXVx.wrap(_strzpptUGK, _widthIuFX5Zy, _indentZ7O404, _minColumnWidthKW6GpW)
	});

	it('test for Help', async () => {
		const _HelpTIomyxd = new Help()
		const _nameXEoaMPc = null;
		const _cmdKPDZeJ = new Command(_nameXEoaMPc)
		const _returnValuerXs0S2o = null;
		const _fnOAx4ML = () => { return _returnValuerXs0S2o };
		const _returnValueKY85BMm = await _cmdKPDZeJ.action(_fnOAx4ML)
		const _returnValuesO2Ane7 = await _HelpTIomyxd.visibleCommands(_cmdKPDZeJ)
		const _arrayValuefb7dKUo = null;
		const _arrayValue5jTOKm = -2.6031827867686737;
		const _cmdcwu0c7c = [_arrayValuefb7dKUo, _arrayValue5jTOKm]
		const _returnValuezLb5geM = await _HelpTIomyxd.commandUsage(_cmdcwu0c7c)
		const _arrayValueI9xTVR4 = 1.88113985069862;
		const _returnValueN8MfbjR = undefined;
		const _arrayValuerxzbqx = () => { return _returnValueN8MfbjR };
		const _cmdODUdVB4 = [_arrayValueI9xTVR4, _arrayValuerxzbqx]
		const _returnValuefRlMd16 = null;
		const _sortSubcommandsDw99ric = () => { return _returnValuefRlMd16 };
		const _arrayValuenFcIlOW = null;
		const _arrayValueDIbjha = 6.173526502224092;
		const _subcommandTermaNmpVXq = [_arrayValuenFcIlOW, _arrayValueDIbjha]
		const _helpereoj2ij = {
			"sortSubcommands": _sortSubcommandsDw99ric,
		"subcommandTerm": _subcommandTermaNmpVXq
	}
		const _returnValueUWpLI7 = await _HelpTIomyxd.formatHelp(_cmdODUdVB4, _helpereoj2ij)
	});

	it('test for Help', async () => {
		const _HelpBBKm9il = new Help()
		const _cmdp9pmx1 = undefined;
		const _helperX4syTlI = new Help()
		const _nameh8eP4Sw = {
		
	}
		const _cmdy5whc4d = new Command(_nameh8eP4Sw)
		const __outputConfigurationEO8rzgC = {
		
	}
		const _arrayValueDkFM6PA = "ryjCsmfjOsyJ4fh7ojsPkwqVyzoYEBYQdWXCbzeqhESVDr6KLNiKBcHfV6nu7BHv4snbDrM8Ahza3czA5gBrYV";
		const _arrayValuevKsmajg = true;
		const _arrayValue1Ny1dZ = "R8ARAGIgzVX2Qvp2NH";
		const _arrayValueSAdxlUm = [_arrayValuevKsmajg, _arrayValue1Ny1dZ]
		const _arrayValuelzqNea4 = "jMXrsFhyzxEFFdI1LgzV0CkAjHIn9H4i0XC9c5HXgwOnkjCaEHdNGSxIe5H3BQmXYbJ";
		const _returnValueHCF4HF2 = [_arrayValueSAdxlUm, _arrayValuelzqNea4]
		const _arrayValuejDnCNZ = () => { return _returnValueHCF4HF2 };
		const __hasHelpOptionfWQyt0a = [_arrayValueDkFM6PA, _arrayValuejDnCNZ]
		const __helpFlagsPKddlHo = {
		
	}
		const __helpDescriptionkQNzb08 = {
		
	}
		const __helpShortFlag2d9KqE = {
		
	}
		const __helpLongFlagGVWVmrV = {
		
	}
		const __helpCommandNamegBMkLlb = {
		
	}
		const __helpCommandnameAndArgso5cAiVq = {
		
	}
		const __helpCommandDescriptionY1odxnI = false;
		const __helpConfigurationWP2M9Ly = {
		
	}
		const __exitCallbackC6W5mL = {
		
	}
		const __storeOptionsAsPropertiesKNw67j9 = {
		
	}
		const __combineFlagAndOptionalValueBTkhJ1f = {
		
	}
		const __allowExcessArgumentskZocmoD = -9.400181599016365;
		const __enablePositionalOptionsMUdIs7T = {
		
	}
		const __showHelpAfterErrormanGbZT = {
		
	}
		const __showSuggestionAfterErrorqE3R31H = {
		
	}
		const _sourceCommandcGgHUGO = {
			"_outputConfiguration": __outputConfigurationEO8rzgC,
		"_hasHelpOption": __hasHelpOptionfWQyt0a,
		"_helpFlags": __helpFlagsPKddlHo,
		"_helpDescription": __helpDescriptionkQNzb08,
		"_helpShortFlag": __helpShortFlag2d9KqE,
		"_helpLongFlag": __helpLongFlagGVWVmrV,
		"_helpCommandName": __helpCommandNamegBMkLlb,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgso5cAiVq,
		"_helpCommandDescription": __helpCommandDescriptionY1odxnI,
		"_helpConfiguration": __helpConfigurationWP2M9Ly,
		"_exitCallback": __exitCallbackC6W5mL,
		"_storeOptionsAsProperties": __storeOptionsAsPropertiesKNw67j9,
		"_combineFlagAndOptionalValue": __combineFlagAndOptionalValueBTkhJ1f,
		"_allowExcessArguments": __allowExcessArgumentskZocmoD,
		"_enablePositionalOptions": __enablePositionalOptionsMUdIs7T,
		"_showHelpAfterError": __showHelpAfterErrormanGbZT,
		"_showSuggestionAfterError": __showSuggestionAfterErrorqE3R31H
	}
		const _returnValueSmYiVRW = await _cmdy5whc4d.copyInheritedSettings(_sourceCommandcGgHUGO)
		const _returnValues346TiG = undefined;
		const _nameMEXnFwY = () => { return _returnValues346TiG };
		const _descriptionNRUP1Oo = undefined;
		const _returnValuee8Ag0Y = await _cmdy5whc4d.createArgument(_nameMEXnFwY, _descriptionNRUP1Oo)
		const _displaySuggestionacWsmD9 = false;
		const _returnValueFnM1kAF = await _cmdy5whc4d.showSuggestionAfterError(_displaySuggestionacWsmD9)
		const _returnValuejnwS1gL = await _cmdy5whc4d._hasImplicitHelpCommand()
		const _returnValueObBwyQ5 = true;
		const _namehfMfQmd = () => { return _returnValueObBwyQ5 };
		const _arrayValueGGBMAe = 1.6490118590599145;
		const _returnValuexSpHUn = [_arrayValueGGBMAe]
		const _attributeNamedbud0Ar = () => { return _returnValuexSpHUn };
		const _defaultValueQbTKkLd = "pTDNXQcyysJzscvoicMPwDnU7MFEThXKnlKGKRHIy8TEOIIJReI4sgcSJDUgGCaAMSmdI3Om4FEnFIHl5TJ8VKKB";
		const _negatevDQXzBD = null;
		const _returnValueE3G5dHu = true;
		const _optionalNKQEfz7 = () => { return _returnValueE3G5dHu };
		const _requiredOWaDkB8 = undefined;
		const _longikeXyJe = {
		
	}
		const _parseArgPvD0FPQ = "eWLMcGvc4SkmjQvrNMr";
		const _variadicTRxKhl = undefined;
		const _returnValuea02x1M2 = 0.24954520453264806;
		const __concatValueRZuY4qF = () => { return _returnValuea02x1M2 };
		const _arrayValueVF3akAs = true;
		const _flagsgm7xm4 = [_arrayValueVF3akAs]
		const _envVarsb1fH96 = {
		
	}
		const _optionKoW9Pxx = {
			"name": _namehfMfQmd,
		"attributeName": _attributeNamedbud0Ar,
		"defaultValue": _defaultValueQbTKkLd,
		"negate": _negatevDQXzBD,
		"optional": _optionalNKQEfz7,
		"required": _requiredOWaDkB8,
		"long": _longikeXyJe,
		"parseArg": _parseArgPvD0FPQ,
		"variadic": _variadicTRxKhl,
		"_concatValue": __concatValueRZuY4qF,
		"flags": _flagsgm7xm4,
		"envVar": _envVarsb1fH96
	}
		const _returnValueAgaFbnq = await _cmdy5whc4d.addOption(_optionKoW9Pxx)
		const _returnValueXagxV7 = await _helperX4syTlI.subcommandTerm(_cmdy5whc4d)
		const _returnValuee25wrb0 = await _HelpBBKm9il.padWidth(_cmdp9pmx1, _helperX4syTlI)
		const _cmdxlz3cjp = false;
		const _helperRstZTCw = new Help()
		const _nameafIKGc1 = "YHvkw3FJeJUMp6ndj6bRtoGXL";
		const _cmdbyg1F9r = new Command(_nameafIKGc1)
		const _contextOptionsPXMjP4L = undefined;
		const _returnValuei0gJ83W = await _cmdbyg1F9r.outputHelp(_contextOptionsPXMjP4L)
		const _fncTgkjL0 = {
		
	}
		const _returnValueIfB3CzT = await _cmdbyg1F9r.exitOverride(_fncTgkjL0)
		const _nameAndArgsX1TSLvd = "MKqADj";
		const _actionOptsOrExecDescbeSwjms = null;
		const _execOptsiZo5Vl = "iZXqPOgiZXusCuXO8Ux8p2oMtvg07WYqOsfzRk2olJwKVBe9AUIvDdBMdaoEGxq9Js600aEEsy";
		const _returnValueQ9Yztxn = await _cmdbyg1F9r.command(_nameAndArgsX1TSLvd, _actionOptsOrExecDescbeSwjms, _execOptsiZo5Vl)
		const _returnValueUuHv0Nd = "2DwVrQ6Hn1ll";
		const _arrayValuedeCR0Mw = () => { return _returnValueUuHv0Nd };
		const _optionZcvskbR = [_arrayValuedeCR0Mw]
		const _returnValuemb5XUme = await _cmdbyg1F9r.addOption(_optionZcvskbR)
		const _returnValuef81r9ki = await _helperRstZTCw.visibleCommands(_cmdbyg1F9r)
		const _cmdhJGvaj = "ne3Oimf8Jk09xYj89A1H8NMsKcWHhNoL2ipc7EAVChRDMV03mtywyaidaVUksW3DTQxbDBoCNhvDsreykJASD";
		const _returnValueEIKgWT5 = await _helperRstZTCw.visibleArguments(_cmdhJGvaj)
		const _returnValuezZpCTW2 = await _HelpBBKm9il.padWidth(_cmdxlz3cjp, _helperRstZTCw)
		const _arrayValueaEy8I8I = "WCbU8Seq2voMWQzrDG8ntCKWLKVLAcssrDwgGSMdP5zRdlsNtEKjeMPyUtLA5TRFCsmVj1dExkiqGXjBQmD7Itq3B8Low9iTC";
		const _arrayValuekzme4uR = false;
		const _arrayValueSEiOEWa = null;
		const _arrayValueoOw74iW = false;
		const _arrayValuetpcgUQy = 5.265266750026946;
		const _returnValuevTVlbnV = undefined;
		const _arrayValueRQuk7ra = () => { return _returnValuevTVlbnV };
		const _arrayValueZBE46d = undefined;
		const _arrayValueL4cDVJ = [_arrayValueRQuk7ra, _arrayValueZBE46d]
		const _arrayValueeH3EPhw = [_arrayValueoOw74iW, _arrayValuetpcgUQy, _arrayValueL4cDVJ]
		const _cmdQ0YSqxN = [_arrayValueaEy8I8I, _arrayValuekzme4uR, _arrayValueSEiOEWa, _arrayValueeH3EPhw]
		const _helperP6RBGpV = "yd3H6U0DRzG5wuih9LEvruMZGFFZScNpPoA4DDUGlvQRGGR6PPgtYlzkJMuEMIRoWGKhX3dM69KkgLn6Ae5";
		const _returnValueKDYEM1M = await _HelpBBKm9il.longestSubcommandTermLength(_cmdQ0YSqxN, _helperP6RBGpV)
		const _namet3ez6lL = null;
		const _cmdI80Bup = new Command(_namet3ez6lL)
		const _combineMlyEvxU = false;
		const _returnValueqjCIh0L = await _cmdI80Bup.combineFlagAndOptionalValue(_combineMlyEvxU)
		const _passThroughcsWnzD = false;
		const _returnValueJwclYH = await _cmdI80Bup.passThroughOptions(_passThroughcsWnzD)
		const _flagsxYVjKKh = null;
		const _optionXaBnoOJ = {
			"flags": _flagsxYVjKKh
	}
		const _returnValueFcJEp3t = await _cmdI80Bup.optionMissingArgument(_optionXaBnoOJ)
		const _allowUnknown1c6lOf = "FmqSE7BD63rnEbIdfwrLmpmwNOrTzw0mvapkjB5p3h7Wg3LlCiyeXVmpYitP11liujx4y8VGTYw53vdGFI93QQQlRF";
		const _returnValueoB1vvtj = await _cmdI80Bup.allowUnknownOption(_allowUnknown1c6lOf)
		const _returnValueVsNYql5 = await _HelpBBKm9il.visibleArguments(_cmdI80Bup)
	});

	it('test for Help', async () => {
		const _HelpTWHB6cQ = new Help()
		const _flagsRDTnFZ7 = "EG7HtQyPK0oFP0RGGv5iY1jYiD4a0rKT9aixsT9rmLAYDwOTk8U";
		const _descriptionrmmjxI = "EmXiht9EJSXupNr81v5OxC6WlF1Xtzo7NVVXj4HXv2vOLpMellPbhSsnC3K9VNCRR274QQSmon17eISFpIKgw5xEbatjzTaVw9";
		const _optionaBUKlCz = new Option(_flagsRDTnFZ7, _descriptionrmmjxI)
		const _valueYLbeixi = undefined;
		const _returnValueqnrYaj = 8.051360545302384;
		const _concatw5IzFm3 = () => { return _returnValueqnrYaj };
		const _previousQ2WrnMY = {
			"concat": _concatw5IzFm3
	}
		const _returnValuefe0aHuo = await _optionaBUKlCz._concatValue(_valueYLbeixi, _previousQ2WrnMY)
		const _nameTsJmof7 = undefined;
		const _returnValueYU0yOCj = await _optionaBUKlCz.env(_nameTsJmof7)
		const _fnYcwSGHk = undefined;
		const _returnValuexSjE1kx = await _optionaBUKlCz.argParser(_fnYcwSGHk)
		const _returnValuek7fP2CY = await _HelpTWHB6cQ.optionTerm(_optionaBUKlCz)
		const __argsCeazWR5 = {
		
	}
		const __nameyvOLdZC = 1.1017046666026893;
		const __aliasesbw4GTCK = {
		
	}
		const _optionsEYfY9ci = {
		
	}
		const _cmdbua9Oeq = {
			"_args": __argsCeazWR5,
		"_name": __nameyvOLdZC,
		"_aliases": __aliasesbw4GTCK,
		"options": _optionsEYfY9ci
	}
		const _returnValueqRPWfG1 = await _HelpTWHB6cQ.subcommandTerm(_cmdbua9Oeq)
	});

	it('test for Help', async () => {
		const _HelppLYASZ1 = new Help()
		const _argChoicesjWkLagX = {
		
	}
		const _negatejM5dY7c = "TwJysXQooxSO1yFarbyP9hVwOmZjzk528r1u";
		const _defaultValueCsmF8dc = undefined;
		const _defaultValueDescriptionvSqxQhd = undefined;
		const _envVarJj3eQe = "NUXTempCvtr";
		const _descriptionsOtqKY4 = {
		
	}
		const _optionyINMgtT = {
			"argChoices": _argChoicesjWkLagX,
		"negate": _negatejM5dY7c,
		"defaultValue": _defaultValueCsmF8dc,
		"defaultValueDescription": _defaultValueDescriptionvSqxQhd,
		"envVar": _envVarJj3eQe,
		"description": _descriptionsOtqKY4
	}
		const _returnValueFRs59xo = await _HelppLYASZ1.optionDescription(_optionyINMgtT)
		const __argsDescriptionu7ejVVe = {
		
	}
		const __argsymuqV5 = {
		
	}
		const _cmdaoMDhrJ = {
			"_argsDescription": __argsDescriptionu7ejVVe,
		"_args": __argsymuqV5
	}
		const _returnValueM1crSZ = await _HelppLYASZ1.visibleArguments(_cmdaoMDhrJ)
	});

	it('test for Help', async () => {
		const _HelpvziTIfK = new Help()
		const __nameTwKv3S = {
		
	}
		const __aliasesfdCbRAt = "3IEVt0WxyV32GjG3CPfe7pFhIgMQJsBvpDGP1B1Q2HG";
		const _parentaPeSH01 = -2.5654509851494716;
		const _returnValueyPKxk4N = 7.808540934980584;
		const _usage3vbNRJ = () => { return _returnValueyPKxk4N };
		const _cmdYEkv5wp = {
			"_name": __nameTwKv3S,
		"_aliases": __aliasesfdCbRAt,
		"parent": _parentaPeSH01,
		"usage": _usage3vbNRJ
	}
		const _returnValuetMsM683 = await _HelpvziTIfK.commandUsage(_cmdYEkv5wp)
		const _cmdB6EPIxr = "RmlSiBpydqsyk6bcb2nqqFaXc";
		const _returnValueU54qPU9 = 3.65983275771751;
		const _longestOptionTermLengthaA2vQd4 = () => { return _returnValueU54qPU9 };
		const _longestSubcommandTermLengthXyNoHc6 = -6.633846839196124;
		const _arrayValuehSVAurF = -5.5279061624659;
		const _arrayValueqmfzch = [_arrayValuehSVAurF]
		const _arrayValuehGPh7I3 = undefined;
		const _returnValueuREgdvw = [_arrayValueqmfzch, _arrayValuehGPh7I3]
		const _longestArgumentTermLengthf6UvAxf = () => { return _returnValueuREgdvw };
		const _helpereFr7AKT = {
			"longestOptionTermLength": _longestOptionTermLengthaA2vQd4,
		"longestSubcommandTermLength": _longestSubcommandTermLengthXyNoHc6,
		"longestArgumentTermLength": _longestArgumentTermLengthf6UvAxf
	}
		const _returnValuePYTVOQb = await _HelpvziTIfK.padWidth(_cmdB6EPIxr, _helpereFr7AKT)
		const _nameEnlIR0C = undefined;
		const _cmdS2MdMsm = new Command(_nameEnlIR0C)
		const _eventNptPjwo = 3.1683237331860674;
		const _listenerdglbIKT = false;
		const _returnValueClMlNLP = await _cmdS2MdMsm.hook(_eventNptPjwo, _listenerdglbIKT)
		const _arrayValuel7nLQMh = "B2YmMmmvys7hImIAWbYjgOlpAr2GzTSiQ8aF0F91O5f5Y8vjLda2iQsUPaujM";
		const _arrayValuehhmgJiE = false;
		const _namedeWhUad = [_arrayValuel7nLQMh, _arrayValuehhmgJiE]
		const _argumentrTFMXhV = new Command(_namedeWhUad)
		const _returnValuesdauMV0 = -5.812667830294833;
		const _cmdvlxbDyF = () => { return _returnValuesdauMV0 };
		const _arrayValueT8Nv2lg = 9.408611131176741;
		const _optseDcOAyL = [_arrayValueT8Nv2lg]
		const _returnValueZp32Oxl = await _argumentrTFMXhV.addCommand(_cmdvlxbDyF, _optseDcOAyL)
		const _strzUBdHpl = {
		
	}
		const _returnValueQyGcyRS = await _argumentrTFMXhV.name(_strzUBdHpl)
		const _operandsNiiuKx4 = "Qq1THa3nGMBqJFk2PotNGNbqnJuqotXyvxia5KkVNX8o7Va7TiTy51XvObiGz9UsHTgJOWuqlIyVU";
		const _unknownsSsP49x = {
		
	}
		const _returnValueayNTMRu = await _argumentrTFMXhV._parseCommand(_operandsNiiuKx4, _unknownsSsP49x)
		const _allowExcessD7juQZn = false;
		const _returnValueYSVaFsa = await _argumentrTFMXhV.allowExcessArguments(_allowExcessD7juQZn)
		const _returnValueYExoe6 = await _cmdS2MdMsm.addArgument(_argumentrTFMXhV)
		const _arrayValueJjBc9no = true;
		const _arrayValueRbhZmx5 = false;
		const _returnValueC2XCMOD = [_arrayValueJjBc9no, _arrayValueRbhZmx5]
		const _returnValueiOlsdLM = () => { return _returnValueC2XCMOD };
		const _argvI5d2Udi = () => { return _returnValueiOlsdLM };
		const _fromFMlTAJQ = "sP2AsgvYKgsG6XfPXJSDocSgLbtUIxQaBkB";
		const _parseOptions1eAnW5 = {
			"from": _fromFMlTAJQ
	}
		const _returnValueDvsp8Jt = await _cmdS2MdMsm._prepareUserArgs(_argvI5d2Udi, _parseOptions1eAnW5)
		const _enableOrNameAndArgsR7XSC9p = undefined;
		const _descriptionZLi6dkw = undefined;
		const _returnValueOXsK9yj = await _cmdS2MdMsm.addHelpCommand(_enableOrNameAndArgsR7XSC9p, _descriptionZLi6dkw)
		const _returnValuebaMrn0h = await _HelpvziTIfK.visibleCommands(_cmdS2MdMsm)
		const _cmdSeITYwo = "L9S5LzdyhwFQqnq9PDeQUCwpO6QAv1wF8FJiUw7";
		const _helperRGpuoN7 = new Help()
		const _argumentgiGO8Cu = undefined;
		const _returnValuetwuftoX = await _helperRGpuoN7.argumentDescription(_argumentgiGO8Cu)
		const _cmdACzVG3x = null;
		const _returnValuetkiwglh = true;
		const _arrayValueAOGaFNV = () => { return _returnValuetkiwglh };
		const _arrayValuepuRIPCY = null;
		const _arrayValueUGVsRy3 = [_arrayValuepuRIPCY]
		const _arrayValueGTleNHg = {
		
	}
		const _arrayValueGr1nAcF = 9.642990330492541;
		const _arrayValueVf4OYLL = [_arrayValueUGVsRy3, _arrayValueGTleNHg, _arrayValueGr1nAcF]
		const _returnValuezLArIGI = [_arrayValueAOGaFNV, _arrayValueVf4OYLL]
		const _longestOptionTermLengthzXDGLxR = () => { return _returnValuezLArIGI };
		const _returnValueWU7SNI = true;
		const _longestSubcommandTermLengthQn7kJTS = () => { return _returnValueWU7SNI };
		const _returnValueFH2VhAH = undefined;
		const _returnValueQFOYjkh = () => { return _returnValueFH2VhAH };
		const _longestArgumentTermLength4Yrxyb = () => { return _returnValueQFOYjkh };
		const _helperyE4wx2 = {
			"longestOptionTermLength": _longestOptionTermLengthzXDGLxR,
		"longestSubcommandTermLength": _longestSubcommandTermLengthQn7kJTS,
		"longestArgumentTermLength": _longestArgumentTermLength4Yrxyb
	}
		const _returnValuet814uSG = await _helperRGpuoN7.padWidth(_cmdACzVG3x, _helperyE4wx2)
		const _returnValuez2qBoIV = undefined;
		const _strBroGsYZ = () => { return _returnValuez2qBoIV };
		const _widthysv08eD = 0.48586161318024956;
		const _indentIc4LWmH = 3.963212998644156;
		const _minColumnWidthtfJ7swp = -6.196325356936749;
		const _returnValueBAOlrdk = await _helperRGpuoN7.wrap(_strBroGsYZ, _widthysv08eD, _indentIc4LWmH, _minColumnWidthtfJ7swp)
		const _returnValueCn9IZwh = await _HelpvziTIfK.padWidth(_cmdSeITYwo, _helperRGpuoN7)
	});
})