export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpP1FLu9w = new Help()
		const _cmdczYDvvv = undefined;
		const _returnValueb979n3D = "DYqQLMH9M5HLrOMHe";
		const _returnValueSDvDtso = () => { return _returnValueb979n3D };
		const _visibleArgumentsyypDbWY = () => { return _returnValueSDvDtso };
		const _returnValueDUTyauv = "2UQ9GwlN6XtFaPXQSMhbny9POt";
		const _argumentTermcNENre4 = () => { return _returnValueDUTyauv };
		const _helperlwBWVoY = {
			"visibleArguments": _visibleArgumentsyypDbWY,
		"argumentTerm": _argumentTermcNENre4
	}
		const _returnValueLTVckTC = await _HelpP1FLu9w.longestArgumentTermLength(_cmdczYDvvv, _helperlwBWVoY)
		const _flagsqnY2o04 = true;
		const _optionLxrKeB = {
			"flags": _flagsqnY2o04
	}
		const _returnValueyLfGGni = await _HelpP1FLu9w.optionTerm(_optionLxrKeB)
		const _cmdRuQMBgV = true;
		const _returnValueVUO5nNS = false;
		const _visibleArgumentsMzX5BC = () => { return _returnValueVUO5nNS };
		const _returnValueNgQnO9W = "cQzmVIW5fAWXDe4xaaf2Hq4IZmmWoUPIXMVBxpc3iN";
		const _returnValueiwO3Ws3 = () => { return _returnValueNgQnO9W };
		const _argumentTerms10CqRI = () => { return _returnValueiwO3Ws3 };
		const _helperXtMtpSB = {
			"visibleArguments": _visibleArgumentsMzX5BC,
		"argumentTerm": _argumentTerms10CqRI
	}
		const _returnValueLDHofBd = await _HelpP1FLu9w.longestArgumentTermLength(_cmdRuQMBgV, _helperXtMtpSB)
	});

	it('test for Help', async () => {
		const _HelpoKcy8yZ = new Help()
		const _optionWlZYytQ = undefined;
		const _returnValueF2aBgvF = await _HelpoKcy8yZ.optionDescription(_optionWlZYytQ)
		const _argChoicesCfXn8lS = {
		
	}
		const _negateL71IqLA = true;
		const _defaultValueoXryK7X = undefined;
		const _defaultValueDescriptionYSYM8Ij = undefined;
		const _envVareEKgy8N = undefined;
		const _descriptionH0YlTK6 = -1.2026815961307697;
		const _optionunjW5Po = {
			"argChoices": _argChoicesCfXn8lS,
		"negate": _negateL71IqLA,
		"defaultValue": _defaultValueoXryK7X,
		"defaultValueDescription": _defaultValueDescriptionYSYM8Ij,
		"envVar": _envVareEKgy8N,
		"description": _descriptionH0YlTK6
	}
		const _returnValueazzmgi = await _HelpoKcy8yZ.optionDescription(_optionunjW5Po)
		const _returnValueD7rDK5 = undefined;
		const _matchB0mKxS = () => { return _returnValueD7rDK5 };
		const _arrayValueaDXVce4 = "eMFLGFPgaxv8kFjoB3aLxAJRV45ykSLyqrcLcjKDMgChdTOtRctwuWNtWStAo";
		const _returnValueMNxXkto = [_arrayValueaDXVce4]
		const _substr4i0H4Q = () => { return _returnValueMNxXkto };
		const _strKzDywH = {
			"match": _matchB0mKxS,
		"substr": _substr4i0H4Q
	}
		const _widtheWW3q10 = -7.08549427876077;
		const _indenttexHG2Z = 7.899884120617816;
		const _minColumnWidthfMOAOmg = 3.3827579003663395;
		const _returnValueBOq037 = await _HelpoKcy8yZ.wrap(_strKzDywH, _widtheWW3q10, _indenttexHG2Z, _minColumnWidthfMOAOmg)
		const _optionsXpbU0GA = {
		
	}
		const __hasHelpOptionM2RbQRN = {
		
	}
		const _arrayValueOMU2DYK = "5intcXcQQYnoUYdmf5OHDps1Em";
		const _arrayValueXMy90sG = false;
		const _arrayValuegBsJvtl = null;
		const _arrayValuefc0u7GS = null;
		const __helpShortFlagDZdU9ar = [_arrayValueOMU2DYK, _arrayValueXMy90sG, _arrayValuegBsJvtl, _arrayValuefc0u7GS]
		const _returnValueedKpSGM = []
		const __findOptionknYOR3B = () => { return _returnValueedKpSGM };
		const __helpLongFlagA6HucB4 = "X1NwYElKahthC7HC";
		const _returnValueadNRaxM = undefined;
		const _createOptionAxU4XLm = () => { return _returnValueadNRaxM };
		const __helpDescriptioneR947KU = {
		
	}
		const __helpFlagsykhklpT = 3.4847391633655196;
		const _cmdcfh4Tfj = {
			"options": _optionsXpbU0GA,
		"_hasHelpOption": __hasHelpOptionM2RbQRN,
		"_helpShortFlag": __helpShortFlagDZdU9ar,
		"_findOption": __findOptionknYOR3B,
		"_helpLongFlag": __helpLongFlagA6HucB4,
		"createOption": _createOptionAxU4XLm,
		"_helpDescription": __helpDescriptioneR947KU,
		"_helpFlags": __helpFlagsykhklpT
	}
		const _returnValuexvLn6Ot = await _HelpoKcy8yZ.visibleOptions(_cmdcfh4Tfj)
		const _commandsOAjopox = {
		
	}
		const _returnValuepuAs6B = null;
		const __hasImplicitHelpCommandkZMr4SY = () => { return _returnValuepuAs6B };
		const __helpCommandnameAndArgsrSYUd18 = {
		
	}
		const _returnValueufeXMSA = 6.940950206881055;
		const _createCommandnnw6bsH = () => { return _returnValueufeXMSA };
		const __helpCommandDescriptionLAFEr25 = null;
		const _cmdtfSIHYY = {
			"commands": _commandsOAjopox,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandkZMr4SY,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsrSYUd18,
		"createCommand": _createCommandnnw6bsH,
		"_helpCommandDescription": __helpCommandDescriptionLAFEr25
	}
		const _returnValuekC3qskU = await _HelpoKcy8yZ.visibleCommands(_cmdtfSIHYY)
	});

	it('test for Help', async () => {
		const _HelpzcpiC2q = new Help()
		const __argsDescriptionv1zp7gh = {
		
	}
		const __argsgWw6r6P = {
		
	}
		const _cmdmYoF02Z = {
			"_argsDescription": __argsDescriptionv1zp7gh,
		"_args": __argsgWw6r6P
	}
		const _returnValueZyG8X1p = await _HelpzcpiC2q.visibleArguments(_cmdmYoF02Z)
		const _returnValueb1Tq7i = 5.5222879729690195;
		const _returnValuehzndHKz = () => { return _returnValueb1Tq7i };
		const _descriptionGelorF8 = () => { return _returnValuehzndHKz };
		const _cmdNSaacfP = {
			"description": _descriptionGelorF8
	}
		const _returnValuedYSWSx = await _HelpzcpiC2q.subcommandDescription(_cmdNSaacfP)
	});

	it('test for Help', async () => {
		const _HelpPDceiTQ = new Help()
		const __argsAnkkY8h = {
		
	}
		const __nameoCWMi1 = 1.0806385677859591;
		const __aliasesF8gFiY1 = {
		
	}
		const _optionsxujUnqB = {
		
	}
		const _cmdxYo1dD8 = {
			"_args": __argsAnkkY8h,
		"_name": __nameoCWMi1,
		"_aliases": __aliasesF8gFiY1,
		"options": _optionsxujUnqB
	}
		const _returnValueERyZkS7 = await _HelpPDceiTQ.subcommandTerm(_cmdxYo1dD8)
		const __nameO5g5rMN = {
		
	}
		const __aliasesEt6sCOl = {
		
	}
		const _parentR0wE383 = null;
		const _returnValueRmdVVxe = true;
		const _usageTiIArOE = () => { return _returnValueRmdVVxe };
		const _cmdFNNNi7k = {
			"_name": __nameO5g5rMN,
		"_aliases": __aliasesEt6sCOl,
		"parent": _parentR0wE383,
		"usage": _usageTiIArOE
	}
		const _returnValueiPkxbCs = await _HelpPDceiTQ.commandUsage(_cmdFNNNi7k)
		const _cmdtwQgwJ = false;
		const _sortSubcommandsRn2GmoT = undefined;
		const _returnValuePawNOE = "GiBYBD6xxaI";
		const _subcommandTermuaHaML = () => { return _returnValuePawNOE };
		const _helperuU56n47 = {
			"sortSubcommands": _sortSubcommandsRn2GmoT,
		"subcommandTerm": _subcommandTermuaHaML
	}
		const _returnValueM8Dvuzz = await _HelpPDceiTQ.formatHelp(_cmdtwQgwJ, _helperuU56n47)
		const _returnValuegyN3bDD = {
		
	}
		const _cmdrVsKUOZ = () => { return _returnValuegyN3bDD };
		const _returnValuetdGVVjn = 7.238269517561289;
		const _visibleOptionsnA6bZ7L = () => { return _returnValuetdGVVjn };
		const _returnValueQ8kUWqR = undefined;
		const _optionTermeb4zVs8 = () => { return _returnValueQ8kUWqR };
		const _helperzcDOJhM = {
			"visibleOptions": _visibleOptionsnA6bZ7L,
		"optionTerm": _optionTermeb4zVs8
	}
		const _returnValuep5650AN = await _HelpPDceiTQ.longestOptionTermLength(_cmdrVsKUOZ, _helperzcDOJhM)
		const _cmdtx9MwWs = "Uq";
		const _returnValuenaIrwIC = undefined;
		const _visibleArgumentsT9ch57R = () => { return _returnValuenaIrwIC };
		const _returnValueykLW3ZM = null;
		const _argumentTermko6z10G = () => { return _returnValueykLW3ZM };
		const _helperi2fapIP = {
			"visibleArguments": _visibleArgumentsT9ch57R,
		"argumentTerm": _argumentTermko6z10G
	}
		const _returnValueZn2LBy4 = await _HelpPDceiTQ.longestArgumentTermLength(_cmdtx9MwWs, _helperi2fapIP)
	});

	it('test for Help', async () => {
		const _HelpxiSSGC = new Help()
		const _cmdxsYcjKv = "1YZCYV4PmlaWDPTzMPlECOBuAyr1I";
		const _returnValueXFmRCEu = true;
		const _longestOptionTermLengthcfakY4O = () => { return _returnValueXFmRCEu };
		const _returnValuetJTyEbt = undefined;
		const _longestSubcommandTermLengthEbiH0HS = () => { return _returnValuetJTyEbt };
		const _arrayValueMMtN6Qg = -1.553984142604504;
		const _arrayValueK82x0B = null;
		const _arrayValueaPq5r6d = true;
		const _returnValuet5q16g = [_arrayValueK82x0B, _arrayValueaPq5r6d]
		const _arrayValuetegJrjL = () => { return _returnValuet5q16g };
		const _arrayValuedIDD2c8 = [_arrayValuetegJrjL]
		const _arrayValueeMIlKw = [_arrayValueMMtN6Qg, _arrayValuedIDD2c8]
		const _longestArgumentTermLengthwVn7ZpX = [_arrayValueeMIlKw]
		const _helperwN2KUaU = {
			"longestOptionTermLength": _longestOptionTermLengthcfakY4O,
		"longestSubcommandTermLength": _longestSubcommandTermLengthEbiH0HS,
		"longestArgumentTermLength": _longestArgumentTermLengthwVn7ZpX
	}
		const _returnValueSPQWfRT = await _HelpxiSSGC.padWidth(_cmdxsYcjKv, _helperwN2KUaU)
		const _returnValueOhcwvAq = null;
		const _namek8HsepN = () => { return _returnValueOhcwvAq };
		const _argumentPR9wr8P = {
			"name": _namek8HsepN
	}
		const _returnValueXsDDric = await _HelpxiSSGC.argumentTerm(_argumentPR9wr8P)
		const __namenk47nuq = {
		
	}
		const __aliasesQbYAaJx = {
		
	}
		const _parentF6SkfDN = {
		
	}
		const _usageop304RO = -9.60304831246513;
		const _cmda8vaMvP = {
			"_name": __namenk47nuq,
		"_aliases": __aliasesQbYAaJx,
		"parent": _parentF6SkfDN,
		"usage": _usageop304RO
	}
		const _returnValuet7uNiWu = await _HelpxiSSGC.commandUsage(_cmda8vaMvP)
	});

	it('test for Help', async () => {
		const _HelpAggeFZ8 = new Help()
		const _returnValuezA91BVB = undefined;
		const _returnValueCV9FeXj = () => { return _returnValuezA91BVB };
		const _cmdyPHCppt = () => { return _returnValueCV9FeXj };
		const _sortSubcommandsa4xiqwx = "cC62rxrtaVmekLjucTurV9OuYqNiXwKgbaw2PGNfNhoKS";
		const _returnValuell2l2ED = "HGUcLw2jEzpQNKih5Gh3QoTU1d4fLcp8BTW1Q44FuGrKHHcHcQtUrb1noEtZtztV3W4Y1GcDg5I64VXJLOAoulmR4AUymO4Ut";
		const _subcommandTermPJKcSh = () => { return _returnValuell2l2ED };
		const _helperSexZXx = {
			"sortSubcommands": _sortSubcommandsa4xiqwx,
		"subcommandTerm": _subcommandTermPJKcSh
	}
		const _returnValueuUdm2x = await _HelpAggeFZ8.formatHelp(_cmdyPHCppt, _helperSexZXx)
	});

	it('test for Help', async () => {
		const _HelptLsx0PC = new Help()
		const _arrayValuerbEApb9 = undefined;
		const _arrayValueSgvAtK = false;
		const _cmdyWB7Qw = [_arrayValuerbEApb9, _arrayValueSgvAtK]
		const _sortSubcommandsMowigLu = {
		
	}
		const _returnValueJIs1UU1 = -4.06581849787366;
		const _subcommandTermcApLTOu = () => { return _returnValueJIs1UU1 };
		const _helperbwG27ZD = {
			"sortSubcommands": _sortSubcommandsMowigLu,
		"subcommandTerm": _subcommandTermcApLTOu
	}
		const _returnValueDYhsGIV = await _HelptLsx0PC.longestSubcommandTermLength(_cmdyWB7Qw, _helperbwG27ZD)
		const __namelzsuVqC = {
		
	}
		const __aliasesDbCaVUi = {
		
	}
		const _parentzDUeBh6 = {
		
	}
		const _arrayValueW1Otjse = false;
		const _returnValuee8STV9f = [_arrayValueW1Otjse]
		const _usageQedgszc = () => { return _returnValuee8STV9f };
		const _cmdjunc1GN = {
			"_name": __namelzsuVqC,
		"_aliases": __aliasesDbCaVUi,
		"parent": _parentzDUeBh6,
		"usage": _usageQedgszc
	}
		const _returnValueb3L35h4 = await _HelptLsx0PC.commandUsage(_cmdjunc1GN)
		const _returnValueARr4rkq = "1hfZpr188TuUIgLuUYAxeK2L7rbeRHINX";
		const _matchw9xNh6t = () => { return _returnValueARr4rkq };
		const _substriawrYEB = true;
		const _strQIuVBCT = {
			"match": _matchw9xNh6t,
		"substr": _substriawrYEB
	}
		const _widthd9NzcnT = -5.64499413715605;
		const _indentuglHzU = 0.6300897171452284;
		const _minColumnWidthvlAHJPJ = -6.362812132614417;
		const _returnValueIQQn6FO = await _HelptLsx0PC.wrap(_strQIuVBCT, _widthd9NzcnT, _indentuglHzU, _minColumnWidthvlAHJPJ)
		const _arrayValueXqzAnfk = -8.383649458349867;
		const _returnValue47cumm = {
		
	}
		const _arrayValuegDq3ops = () => { return _returnValue47cumm };
		const _returnValueK023l1d = {
		
	}
		const _arrayValueQiDk8B0 = () => { return _returnValueK023l1d };
		const _flagsYbcpRix = [_arrayValueXqzAnfk, _arrayValuegDq3ops, _arrayValueQiDk8B0]
		const _optionaGkOikf = {
			"flags": _flagsYbcpRix
	}
		const _returnValueRp9HC7r = await _HelptLsx0PC.optionTerm(_optionaGkOikf)
	});

	it('test for Help', async () => {
		const _HelpEzWwY2m = new Help()
		const _cmdXGStOA = null;
		const _returnValuekxGVUuz = await _HelpEzWwY2m.visibleOptions(_cmdXGStOA)
		const _optionsPZrWWvA = {
		
	}
		const __hasHelpOptionqPRplnJ = "5HLmVLccT1yQx4";
		const __helpShortFlagfGAeu4A = null;
		const _returnValuevLjOO8H = null;
		const _arrayValueKn3uBTN = () => { return _returnValuevLjOO8H };
		const _returnValueBivo4D6 = [_arrayValueKn3uBTN]
		const __findOptionL0YO5no = () => { return _returnValueBivo4D6 };
		const __helpLongFlagjV9gSVT = undefined;
		const _createOptioneWkw95q = undefined;
		const __helpDescriptionJeqdBj7 = "neQQKGopx6taI8B1m3MdMzk22QIQWn5zL9v2I6eA6K9abRFinYqWSWWH5nPSFAyrxtSDaz7ILXnDo9KIrSUoSIXWyeE9fC8";
		const __helpFlagsvdrCfhS = 7.687002442910295;
		const _cmdRx3Ty4G = {
			"options": _optionsPZrWWvA,
		"_hasHelpOption": __hasHelpOptionqPRplnJ,
		"_helpShortFlag": __helpShortFlagfGAeu4A,
		"_findOption": __findOptionL0YO5no,
		"_helpLongFlag": __helpLongFlagjV9gSVT,
		"createOption": _createOptioneWkw95q,
		"_helpDescription": __helpDescriptionJeqdBj7,
		"_helpFlags": __helpFlagsvdrCfhS
	}
		const _returnValuerG0mCBn = await _HelpEzWwY2m.visibleOptions(_cmdRx3Ty4G)
		const _cmdnb1IQ1a = -1.7177845537246483;
		const _returnValuehi1bi0 = undefined;
		const _sortSubcommandsyIvRouk = () => { return _returnValuehi1bi0 };
		const _returnValueSa6iz9 = -8.098786301599494;
		const _returnValueAcGHLno = () => { return _returnValueSa6iz9 };
		const _subcommandTermQvt182j = () => { return _returnValueAcGHLno };
		const _helperueJrwo = {
			"sortSubcommands": _sortSubcommandsyIvRouk,
		"subcommandTerm": _subcommandTermQvt182j
	}
		const _returnValueA5qTfzM = await _HelpEzWwY2m.longestSubcommandTermLength(_cmdnb1IQ1a, _helperueJrwo)
		const _optionsIdoPFHL = {
		
	}
		const __hasHelpOptionF6AnaJp = "BYColki6tnEoeJMYgdSky6qnooIuRBcvAqLXjwzDGMdWnLaQwdkjUsHlek6bMFdhSmdssFCkCTiz4sCWeqYU1UjI7iNnhyGa";
		const __helpShortFlagdjClqna = 6.7296064356080585;
		const _returnValueUxjIJpY = false;
		const __findOptionSgCs8yG = () => { return _returnValueUxjIJpY };
		const _returnValueyKhB9ih = "NiSxkMYrRgtC3IeW5CEKRBGFvsLpYlCt9gB5CXwNTtu3";
		const _arrayValueaFk6g3C = () => { return _returnValueyKhB9ih };
		const _arrayValueMYIW8zl = 4.85596904396591;
		const _arrayValued3eIV7c = false;
		const _arrayValuePfqKdwz = null;
		const __helpLongFlagIJ7xeFZ = [_arrayValueaFk6g3C, _arrayValueMYIW8zl, _arrayValued3eIV7c, _arrayValuePfqKdwz]
		const _returnValueorrz1Xh = undefined;
		const _createOptionF8NkWFT = () => { return _returnValueorrz1Xh };
		const __helpDescriptionWBGPAH1 = -6.4180672183341585;
		const __helpFlagsbvKj6SR = undefined;
		const _cmdng3S7lj = {
			"options": _optionsIdoPFHL,
		"_hasHelpOption": __hasHelpOptionF6AnaJp,
		"_helpShortFlag": __helpShortFlagdjClqna,
		"_findOption": __findOptionSgCs8yG,
		"_helpLongFlag": __helpLongFlagIJ7xeFZ,
		"createOption": _createOptionF8NkWFT,
		"_helpDescription": __helpDescriptionWBGPAH1,
		"_helpFlags": __helpFlagsbvKj6SR
	}
		const _returnValuexKpQtMd = await _HelpEzWwY2m.visibleOptions(_cmdng3S7lj)
	});

	it('test for Help', async () => {
		const _HelpXCsAJyd = new Help()
		const _argChoicesPb3YS2l = "7LS3qLlI5PKFgVcNj2iPMNfItbZq";
		const _defaultValuejiztltr = undefined;
		const _defaultValueDescriptionERvaxZG = true;
		const _descriptiony30VxW3 = true;
		const _argumentAqrP7FF = {
			"argChoices": _argChoicesPb3YS2l,
		"defaultValue": _defaultValuejiztltr,
		"defaultValueDescription": _defaultValueDescriptionERvaxZG,
		"description": _descriptiony30VxW3
	}
		const _returnValueViK6DYJ = await _HelpXCsAJyd.argumentDescription(_argumentAqrP7FF)
		const _cmdGFnStY = -3.9959341178995986;
		const _returnValueY4AFqmI = false;
		const _visibleOptionsLkSl9z4 = () => { return _returnValueY4AFqmI };
		const _returnValueYgcFeK1 = null;
		const _optionTermUTrbVdU = () => { return _returnValueYgcFeK1 };
		const _helperMSpQk9Z = {
			"visibleOptions": _visibleOptionsLkSl9z4,
		"optionTerm": _optionTermUTrbVdU
	}
		const _returnValuebGZzki = await _HelpXCsAJyd.longestOptionTermLength(_cmdGFnStY, _helperMSpQk9Z)
		const _argChoicesNuIk1fN = null;
		const _defaultValuefK6KJfn = undefined;
		const _defaultValueDescriptionjR03s6B = undefined;
		const _descriptionE19Ng1H = null;
		const _argumentNTsOqjg = {
			"argChoices": _argChoicesNuIk1fN,
		"defaultValue": _defaultValuefK6KJfn,
		"defaultValueDescription": _defaultValueDescriptionjR03s6B,
		"description": _descriptionE19Ng1H
	}
		const _returnValuePYtVk1M = await _HelpXCsAJyd.argumentDescription(_argumentNTsOqjg)
	});

	it('test for Help', async () => {
		const _HelpR9J9DTq = new Help()
		const _returnValueVZtyWJI = -1.4281894357741507;
		const _matchAxV9KiI = () => { return _returnValueVZtyWJI };
		const _returnValuetwFeg8T = false;
		const _substrDBbF6me = () => { return _returnValuetwFeg8T };
		const _strAuzmO7f = {
			"match": _matchAxV9KiI,
		"substr": _substrDBbF6me
	}
		const _widthzx540sR = true;
		const _indentqhHRmFq = -5.7541896782500865;
		const _minColumnWidthjfJc8jj = 2.573343727718573;
		const _returnValueuqZCR8a = await _HelpR9J9DTq.wrap(_strAuzmO7f, _widthzx540sR, _indentqhHRmFq, _minColumnWidthjfJc8jj)
		const _argumentsyT6f48 = "yqQ30sJAyF6XzcStoiLcTvxceFfgJSLKF7kObUEzyjhoh3WwObj9Wk2cIfqOepAtJXtYq5VtmI5QiuFpEjyomWzYAUpCfvJBTmg";
		const _returnValueu3sf09Q = await _HelpR9J9DTq.argumentTerm(_argumentsyT6f48)
		const _cmdijx26Om = {
		
	}
		const _arrayValueduJobP = undefined;
		const _arrayValuetp16Wq = "qVnpskmt9Ji1xtmRtOVg6D6okdWTLDRMs2xwcEBxpUfaIJDpczA5QRmxlJmZjWjwPnj3UjuRTGt6ESe2KOQhbO1d";
		const _arrayValue8gx3dn = undefined;
		const _sortSubcommandsnuFrOqT = [_arrayValueduJobP, _arrayValuetp16Wq, _arrayValue8gx3dn]
		const _arrayValuedV62Twi = "JLkzbr5jJWOCB5DAk93xp23p1g6Lf6jpOvx";
		const _arrayValueRZxOakz = -0.03869082714139083;
		const _arrayValueqRXRrQ = null;
		const _returnValueW3HxLks = [_arrayValuedV62Twi, _arrayValueRZxOakz, _arrayValueqRXRrQ]
		const _subcommandTermw3ptsm = () => { return _returnValueW3HxLks };
		const _helperL6mHwTj = {
			"sortSubcommands": _sortSubcommandsnuFrOqT,
		"subcommandTerm": _subcommandTermw3ptsm
	}
		const _returnValueqcbbYnU = await _HelpR9J9DTq.longestSubcommandTermLength(_cmdijx26Om, _helperL6mHwTj)
	});

	it('test for Help', async () => {
		const _Helpeh34mC9 = new Help()
		const _argChoicesfnGuz6s = {
		
	}
		const _negateLBji8Zn = -6.319820134869825;
		const _defaultValuerqxuRxu = undefined;
		const _defaultValueDescriptionTuOmul9 = -8.893904149069195;
		const _envVarsO2zMKA = undefined;
		const _descriptions4Ri2W = null;
		const _optionq71m8W = {
			"argChoices": _argChoicesfnGuz6s,
		"negate": _negateLBji8Zn,
		"defaultValue": _defaultValuerqxuRxu,
		"defaultValueDescription": _defaultValueDescriptionTuOmul9,
		"envVar": _envVarsO2zMKA,
		"description": _descriptions4Ri2W
	}
		const _returnValue3rUSRf = await _Helpeh34mC9.optionDescription(_optionq71m8W)
	});

	it('test for Help', async () => {
		const _HelpxvDklyF = new Help()
		const __namepM9sKZt = {
		
	}
		const __aliasesIdjIXo = {
		
	}
		const _parentjOrqP5N = {
		
	}
		const _returnValueuSJn41A = "XHH8hjXrTfOMDltKyNd0kEofxmREX0YNu5itplVnAMbFiLRXdW5LKq97jRdaeKiBW";
		const _usagee5SFtMI = () => { return _returnValueuSJn41A };
		const _cmduOUFPne = {
			"_name": __namepM9sKZt,
		"_aliases": __aliasesIdjIXo,
		"parent": _parentjOrqP5N,
		"usage": _usagee5SFtMI
	}
		const _returnValueKaclbjr = await _HelpxvDklyF.commandUsage(_cmduOUFPne)
		const __argsDescriptionNQYhZT2 = {
		
	}
		const __argsqyhsvp = {
		
	}
		const _cmdK6LElsI = {
			"_argsDescription": __argsDescriptionNQYhZT2,
		"_args": __argsqyhsvp
	}
		const _returnValuep92n37I = await _HelpxvDklyF.visibleArguments(_cmdK6LElsI)
		const _cmdy3eX7eG = null;
		const _helperr6lNV9Z = undefined;
		const _returnValuef3Ja3M5 = await _HelpxvDklyF.longestSubcommandTermLength(_cmdy3eX7eG, _helperr6lNV9Z)
		const _returnValuetsdeZst = null;
		const _returnValueADNuODw = () => { return _returnValuetsdeZst };
		const _match88WZmT = () => { return _returnValueADNuODw };
		const _returnValuelR7kMx7 = null;
		const _substrIfVJj9v = () => { return _returnValuelR7kMx7 };
		const _strrf3RoVJ = {
			"match": _match88WZmT,
		"substr": _substrIfVJj9v
	}
		const _widthjFrIMtY = 6.888569897637641;
		const _indentWIpIoks = 9.487111814532323;
		const _minColumnWidthMp1wE84 = -4.863940905901252;
		const _returnValueNEMLfgS = await _HelpxvDklyF.wrap(_strrf3RoVJ, _widthjFrIMtY, _indentWIpIoks, _minColumnWidthMp1wE84)
	});

	it('test for Help', async () => {
		const _HelpOuYtzLa = new Help()
		const _commandsQGd92KN = {
		
	}
		const _returnValueipGcZkX = false;
		const __hasImplicitHelpCommandFEsQacO = () => { return _returnValueipGcZkX };
		const __helpCommandnameAndArgsf9W2Nk = {
		
	}
		const _returnValueLLpz6vN = {
		
	}
		const _createCommandk63CAG3 = () => { return _returnValueLLpz6vN };
		const __helpCommandDescriptionzVsb2MO = -1.4535496803165042;
		const _cmdUN6nosY = {
			"commands": _commandsQGd92KN,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandFEsQacO,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsf9W2Nk,
		"createCommand": _createCommandk63CAG3,
		"_helpCommandDescription": __helpCommandDescriptionzVsb2MO
	}
		const _returnValuemD0UKl = await _HelpOuYtzLa.visibleCommands(_cmdUN6nosY)
	});

	it('test for Help', async () => {
		const _HelpbWTLSBo = new Help()
		const _returnValuei4hLhbk = 2.8621058640639774;
		const _matchXSdtpCO = () => { return _returnValuei4hLhbk };
		const _returnValueNVofC28 = true;
		const _substrdpcLaqL = () => { return _returnValueNVofC28 };
		const _stryaGmklz = {
			"match": _matchXSdtpCO,
		"substr": _substrdpcLaqL
	}
		const _arrayValueTNiJqt = 6.264108700352953;
		const _widthUZe4H9w = [_arrayValueTNiJqt]
		const _indentOEwrGYt = 2.61141477726226;
		const _minColumnWidthuIj6Wl2 = 4.885031543583754;
		const _returnValueJb7gNez = await _HelpbWTLSBo.wrap(_stryaGmklz, _widthUZe4H9w, _indentOEwrGYt, _minColumnWidthuIj6Wl2)
		const _cmdl7WGhMB = null;
		const _returnValuev5wZiND = undefined;
		const _visibleOptionsBeUR3Ca = () => { return _returnValuev5wZiND };
		const _returnValuezAlTsFn = -1.3935689088264418;
		const _optionTermHRasKJX = () => { return _returnValuezAlTsFn };
		const _helpergK362jx = {
			"visibleOptions": _visibleOptionsBeUR3Ca,
		"optionTerm": _optionTermHRasKJX
	}
		const _returnValueEXpmMD7 = await _HelpbWTLSBo.longestOptionTermLength(_cmdl7WGhMB, _helpergK362jx)
	});

	it('test for Help', async () => {
		const _HelpRQSvi0 = new Help()
		const _argChoicesATgTXu = {
		
	}
		const _arrayValueBtLsXH = true;
		const _arrayValueHuLfOt8 = null;
		const _negatepFhUzHc = [_arrayValueBtLsXH, _arrayValueHuLfOt8]
		const _defaultValueRF6nayR = undefined;
		const _defaultValueDescriptionUQ368MC = undefined;
		const _envVarpMsZxtr = undefined;
		const _descriptionvasZdBe = undefined;
		const _optionmLwiSe9 = {
			"argChoices": _argChoicesATgTXu,
		"negate": _negatepFhUzHc,
		"defaultValue": _defaultValueRF6nayR,
		"defaultValueDescription": _defaultValueDescriptionUQ368MC,
		"envVar": _envVarpMsZxtr,
		"description": _descriptionvasZdBe
	}
		const _returnValueSSHhU1b = await _HelpRQSvi0.optionDescription(_optionmLwiSe9)
		const _returnValuexFph0CX = "EbkqAv";
		const _returnValuetkzQEgW = () => { return _returnValuexFph0CX };
		const _arrayValuexvay26j = () => { return _returnValuetkzQEgW };
		const _arrayValueuNdabpO = -6.816077543027836;
		const _arrayValuexGA4hM = [_arrayValueuNdabpO]
		const _arrayValuerIXzDYP = null;
		const _returnValueqQsMOJH = [_arrayValuexvay26j, _arrayValuexGA4hM, _arrayValuerIXzDYP]
		const _returnValueyGmTgz = () => { return _returnValueqQsMOJH };
		const _descriptionx9t0dvS = () => { return _returnValueyGmTgz };
		const _cmdHF54vQ = {
			"description": _descriptionx9t0dvS
	}
		const _returnValueH2elVOt = await _HelpRQSvi0.subcommandDescription(_cmdHF54vQ)
		const __argsDescriptionKlMnIi = {
		
	}
		const __argsmgpSQJ = {
		
	}
		const _cmdZ5xeG3i = {
			"_argsDescription": __argsDescriptionKlMnIi,
		"_args": __argsmgpSQJ
	}
		const _returnValueFwd0n4O = await _HelpRQSvi0.visibleArguments(_cmdZ5xeG3i)
		const _returnValuerJ6qZ9k = 8.4155286595668;
		const _descriptionBabogN8 = () => { return _returnValuerJ6qZ9k };
		const _cmdl8qITM = {
			"description": _descriptionBabogN8
	}
		const _returnValuepcKQts = await _HelpRQSvi0.subcommandDescription(_cmdl8qITM)
		const _cmdKBy31Fe = {
		
	}
		const _helperEs4JSvJ = undefined;
		const _returnValuew392zAJ = await _HelpRQSvi0.longestSubcommandTermLength(_cmdKBy31Fe, _helperEs4JSvJ)
	});

	it('test for Help', async () => {
		const _Helpq7xly0n = new Help()
		const _arrayValueiYhgsOE = -3.584282562445952;
		const _arrayValuejY6Xde4 = 1.891353288921799;
		const _arrayValueJi0to6g = true;
		const _arrayValuexfJyk0j = [_arrayValuejY6Xde4, _arrayValueJi0to6g]
		const _cmd2cZaWC = [_arrayValueiYhgsOE, _arrayValuexfJyk0j]
		const _returnValuehVOxqj = await _Helpq7xly0n.commandDescription(_cmd2cZaWC)
		const _returnValueBBjw8n = 8.386920886631696;
		const _matchqpPVekp = () => { return _returnValueBBjw8n };
		const _returnValueExyDeqK = 5.526586455223956;
		const _substrTdDRUq0 = () => { return _returnValueExyDeqK };
		const _strUO6BGIc = {
			"match": _matchqpPVekp,
		"substr": _substrTdDRUq0
	}
		const _widthADrUGYv = -7.720959213396129;
		const _indentqhIpOC = 2.0454518995370226;
		const _minColumnWidthJ9tOthA = 3.5848501635886976;
		const _returnValueph104vB = await _Helpq7xly0n.wrap(_strUO6BGIc, _widthADrUGYv, _indentqhIpOC, _minColumnWidthJ9tOthA)
		const _arrayValueifie0cZ = 3.466249364795873;
		const _cmdBtXbqL = [_arrayValueifie0cZ]
		const _returnValuesFkwyP5 = await _Helpq7xly0n.commandUsage(_cmdBtXbqL)
	});

	it('test for Help', async () => {
		const _HelpnKSJK7s = new Help()
		const _argChoicesVfexugJ = {
		
	}
		const _negateUjmFNkj = null;
		const _defaultValuesDeRy87 = undefined;
		const _defaultValueDescriptionTIrT3OF = null;
		const _envVaruwmEy4 = undefined;
		const _descriptionUcpU2h6 = 7.311631015748397;
		const _optionq5nwlqw = {
			"argChoices": _argChoicesVfexugJ,
		"negate": _negateUjmFNkj,
		"defaultValue": _defaultValuesDeRy87,
		"defaultValueDescription": _defaultValueDescriptionTIrT3OF,
		"envVar": _envVaruwmEy4,
		"description": _descriptionUcpU2h6
	}
		const _returnValuez416fCa = await _HelpnKSJK7s.optionDescription(_optionq5nwlqw)
		const _arrayValueuEyhj5h = null;
		const _arrayValuep6gHpC8 = "5jLGGguoK2SSEGsHjSq54XKfiAF61rGp0tboZ6TZkKbElJ7Iwo4DXwGlojj";
		const _arrayValue8LO96V = true;
		const _cmdLZihYi = [_arrayValueuEyhj5h, _arrayValuep6gHpC8, _arrayValue8LO96V]
		const _returnValueVuF7Dx = await _HelpnKSJK7s.visibleOptions(_cmdLZihYi)
		const _arrayValuerinvlEW = undefined;
		const _arrayValueQ3pba1I = [_arrayValuerinvlEW]
		const _arrayValueliU9TQl = {
		
	}
		const _arrayValueJE47HU4 = "mS31F0Cblr1Q8mJBxV2U72i";
		const _arrayValue8UVd8v = null;
		const _arrayValueGo3Vtr = [_arrayValueliU9TQl, _arrayValueJE47HU4, _arrayValue8UVd8v]
		const _cmdPBQqQar = [_arrayValueQ3pba1I, _arrayValueGo3Vtr]
		const _returnValueKaSCFE4 = await _HelpnKSJK7s.subcommandTerm(_cmdPBQqQar)
	});

	it('test for Help', async () => {
		const _HelpbjU1bI7 = new Help()
		const _flagswLa4vtX = 9.129346977812279;
		const _optionvfVZIY3 = {
			"flags": _flagswLa4vtX
	}
		const _returnValueQx5yDJ0 = await _HelpbjU1bI7.optionTerm(_optionvfVZIY3)
	});

	it('test for Help', async () => {
		const _HelpOfUppDS = new Help()
		const _returnValueQH36zhK = undefined;
		const _matchRHARIY = () => { return _returnValueQH36zhK };
		const _returnValueIkAtvw2 = null;
		const _substrfNWUHfZ = () => { return _returnValueIkAtvw2 };
		const _strnA2HfF3 = {
			"match": _matchRHARIY,
		"substr": _substrfNWUHfZ
	}
		const _widthX4g2AtM = 2.850269694139433;
		const _indent9C9fNx = 5.230345990657758;
		const _minColumnWidthutrVhvs = -8.465979027721005;
		const _returnValueEbqbnN2 = await _HelpOfUppDS.wrap(_strnA2HfF3, _widthX4g2AtM, _indent9C9fNx, _minColumnWidthutrVhvs)
		const _arrayValueXdDgs7P = null;
		const _arrayValuetJOxlMb = "xnzguNUKRJg9mPLI7aXJ9pGyPWj9KuGGbRXInLjy3fFLBs5LeDLwStoTOvVYutTdeGD43SVUa9bTP736";
		const _cmda6srX2J = [_arrayValueXdDgs7P, _arrayValuetJOxlMb]
		const _returnValueOYyw0q1 = await _HelpOfUppDS.visibleCommands(_cmda6srX2J)
		const _cmdfqXmpqI = {
		
	}
		const _arrayValueZSbkd6V = null;
		const _returnValuezPLTOsc = -6.184647227385133;
		const _arrayValueq2BBuus = () => { return _returnValuezPLTOsc };
		const _helperQ86kcW = [_arrayValueZSbkd6V, _arrayValueq2BBuus]
		const _returnValueoVFTCyx = await _HelpOfUppDS.longestOptionTermLength(_cmdfqXmpqI, _helperQ86kcW)
		const _cmdCLvvdPF = null;
		const _returnValuevDKAhc1 = 8.296933948553342;
		const _helperjc0XsA = () => { return _returnValuevDKAhc1 };
		const _returnValuecQqdQrE = await _HelpOfUppDS.padWidth(_cmdCLvvdPF, _helperjc0XsA)
	});

	it('test for Help', async () => {
		const _HelpgFuBP0q = new Help()
		const _arrayValue8rUHgp = 4.833808052869861;
		const _arrayValueGoMsCqS = undefined;
		const _arrayValueBAV5MnI = true;
		const _arrayValueotM9neL = -1.4765722984380698;
		const _arrayValueI3vKzRt = [_arrayValueGoMsCqS, _arrayValueBAV5MnI, _arrayValueotM9neL]
		const _argumentLow2Dt7 = [_arrayValue8rUHgp, _arrayValueI3vKzRt]
		const _returnValueSmwwe1d = await _HelpgFuBP0q.argumentDescription(_argumentLow2Dt7)
		const _cmdXJHOGkY = false;
		const _helperNK4PGx = []
		const _returnValueyxEzfWQ = await _HelpgFuBP0q.longestSubcommandTermLength(_cmdXJHOGkY, _helperNK4PGx)
		const _cmdm1ibwC8 = {
		
	}
		const _helperhqPOLxx = "cfuDSyRTOclJha2tGpyOXrmVUysHfQxris0SblQNEbGtNie56DOj8dELnRPDKVV9fiwW6MsrudcuUCcBOmBQIgSf1Ont";
		const _returnValuevMpZjto = await _HelpgFuBP0q.longestOptionTermLength(_cmdm1ibwC8, _helperhqPOLxx)
		const _cmdPZc1VHo = {
		
	}
		const _arrayValueLzq5EU3 = undefined;
		const _arrayValueZc9fK9m = [_arrayValueLzq5EU3]
		const _arrayValueqoPMDFv = "KjDvf2GeYIpwpO";
		const _arrayValuev6XNO9H = -1.54775182497273;
		const _helperUZdBWo = [_arrayValueZc9fK9m, _arrayValueqoPMDFv, _arrayValuev6XNO9H]
		const _returnValueUHY9Zfe = await _HelpgFuBP0q.longestOptionTermLength(_cmdPZc1VHo, _helperUZdBWo)
	});

	it('test for Help', async () => {
		const _HelpJUm4uIz = new Help()
		const _cmdIqiapAW = "9Ee";
		const _helperAi3zXw7 = new Help()
		const _returnValueFcZoJvA = undefined;
		const _matchg3STNkb = () => { return _returnValueFcZoJvA };
		const _returnValueC9elHn1 = undefined;
		const _substripteqO1 = () => { return _returnValueC9elHn1 };
		const _strTVWrjtw = {
			"match": _matchg3STNkb,
		"substr": _substripteqO1
	}
		const _widthCa4KWBp = 3.4974414554324085;
		const _indentha9VquP = 8.264134663625317;
		const _minColumnWidthFKwtPhr = 7.990211295316705;
		const _returnValue6udr7G = await _helperAi3zXw7.wrap(_strTVWrjtw, _widthCa4KWBp, _indentha9VquP, _minColumnWidthFKwtPhr)
		const _arrayValuewhwe0k9 = "2QZOctWzQx8gm7Y4aV2BhNhNRAYMA91vSWBanfHkaYUIbfC1GcTRh6BIY";
		const _arrayValuep2ipc9 = -6.060729835004871;
		const _arrayValueNiSNBso = -4.074622664237411;
		const _arrayValueg5ox7ts = "nakINcY5bkDAKwOL87fIwLNvcDVMG2MsJlsyE7mL4rAybra7mhuCs6cDniTOwpQ4pf03Vi5pKa4EYYGRabhnVWcN71lCQGmB2";
		const _cmdscAhmKb = [_arrayValuewhwe0k9, _arrayValuep2ipc9, _arrayValueNiSNBso, _arrayValueg5ox7ts]
		const _returnValuexvq0SZQ = await _helperAi3zXw7.subcommandTerm(_cmdscAhmKb)
		const _arrayValueAUg7KXE = 9.68438730156769;
		const _arrayValuea3DPMRT = null;
		const _cmdxxphnJd = [_arrayValueAUg7KXE, _arrayValuea3DPMRT]
		const _helperZdLyVe = new Help()
		const _returnValueNdO108T = undefined;
		const _sliceeP99aUC = () => { return _returnValueNdO108T };
		const _nameuV3xgZF = {
			"slice": _sliceeP99aUC
	}
		const _descriptionpQxCSQK = undefined;
		const _cmdk5wCd4S = new Argument(_nameuV3xgZF, _descriptionpQxCSQK)
		const _returnValue282H5o = await _cmdk5wCd4S.argOptional()
		const _returnValue6eCPlm = await _helperZdLyVe.subcommandDescription(_cmdk5wCd4S)
		const _returnValuevN1E2nD = "X5v1b9WaJ2tjxWn1aT4uWDGyHTiXIfvQi1fsq9R2GrojRTN591dQmAwMvFeWGegelqq83sFE";
		const _argumentvPs62zF = () => { return _returnValuevN1E2nD };
		const _returnValueZ1FRvT2 = await _helperZdLyVe.argumentDescription(_argumentvPs62zF)
		const _cmdBH0N84Z = null;
		const _helperBvwWUhI = new Help()
		const _cmdxUC6LJ8 = {
		
	}
		const _helperH4Yl321 = undefined;
		const _returnValueQaEBk5T = await _helperBvwWUhI.longestSubcommandTermLength(_cmdxUC6LJ8, _helperH4Yl321)
		const _nameOwCpOog = true;
		const _arrayValueZv4W1O4 = undefined;
		const _arrayValuecSOIdj = {
		
	}
		const _descriptionzDt3hjl = [_arrayValueZv4W1O4, _arrayValuecSOIdj]
		const _cmdA4e6Cg3 = new Argument(_nameOwCpOog, _descriptionzDt3hjl)
		const _fnzKxLC3o = {
		
	}
		const _returnValueS2TCdR = await _cmdA4e6Cg3.argParser(_fnzKxLC3o)
		const _returnValuesUgZStw = false;
		const _includesx7JPiEM = () => { return _returnValuesUgZStw };
		const _returnValuembyg6V = null;
		const _jointVpJo0R = () => { return _returnValuembyg6V };
		const _valuesNTSmrx = {
			"includes": _includesx7JPiEM,
		"join": _jointVpJo0R
	}
		const _returnValueKkpnSuV = await _cmdA4e6Cg3.choices(_valuesNTSmrx)
		const _returnValueTn35N5C = await _helperBvwWUhI.subcommandDescription(_cmdA4e6Cg3)
		const _returnValueag7EVoY = await _helperZdLyVe.longestOptionTermLength(_cmdBH0N84Z, _helperBvwWUhI)
		const _returnValueoJqxUAf = await _helperAi3zXw7.longestArgumentTermLength(_cmdxxphnJd, _helperZdLyVe)
		const _returnValueBQAvq3 = {
		
	}
		const _matchB7rTwWo = () => { return _returnValueBQAvq3 };
		const _substrOZLMzOQ = false;
		const _strqM05yCd = {
			"match": _matchB7rTwWo,
		"substr": _substrOZLMzOQ
	}
		const _widthrNEcOeV = -9.673615191609398;
		const _indentN1R14Xn = true;
		const _minColumnWidthSv2n89b = 1.8770673263513498;
		const _returnValuehYMj8ec = await _helperAi3zXw7.wrap(_strqM05yCd, _widthrNEcOeV, _indentN1R14Xn, _minColumnWidthSv2n89b)
		const _arrayValuexIIpTTK = -0.3571970733906653;
		const _arrayValuebm8D6jV = false;
		const _cmdE8rXlGZ = [_arrayValuexIIpTTK, _arrayValuebm8D6jV]
		const _returnValueQxXWMEJ = await _helperAi3zXw7.visibleArguments(_cmdE8rXlGZ)
		const _returnValueh9OpKo4 = await _HelpJUm4uIz.longestArgumentTermLength(_cmdIqiapAW, _helperAi3zXw7)
		const _returnValueSOMtreF = "xjL3HtteMNBrbnUvjWgWcRWhugLAyUID1RBTcaMjujnvyNXwmnmEGebfRBQOcCRMrrnCiFP";
		const _matchDNaSduz = () => { return _returnValueSOMtreF };
		const _arrayValueaahEWnr = 0.14866940520323269;
		const _returnValueryqGg95 = [_arrayValueaahEWnr]
		const _substrsaDwShR = () => { return _returnValueryqGg95 };
		const _strTlfX7Ue = {
			"match": _matchDNaSduz,
		"substr": _substrsaDwShR
	}
		const _widthNX28aaK = 0.2874181239284006;
		const _indentFQLWnI = -7.540042562425804;
		const _minColumnWidthJKa12at = -3.6914607228039076;
		const _returnValueuNR2mZL = await _HelpJUm4uIz.wrap(_strTlfX7Ue, _widthNX28aaK, _indentFQLWnI, _minColumnWidthJKa12at)
		const _cmduUKOvoA = true;
		const _helpergS0iikL = new Help()
		const _cmdINf6MbR = false;
		const _helperXoE9HBQ = "S9jV5GIeVje2ckezoAaa9YBLgCM";
		const _returnValuezPsFaS = await _helpergS0iikL.padWidth(_cmdINf6MbR, _helperXoE9HBQ)
		const _arrayValuesLhmQjF = false;
		const _arrayValueKrGYuLT = null;
		const _arrayValuexXiPIK9 = "YcLGzypKrZk";
		const _arrayValueZyuvOEe = "4lpHIV1faV46LdHEJBv1MmGbdPJzkTJFhjxkjqd1PwirDjR9CXAYO8dX3H9E3eUmfoHY3VVy8UFVhJFoJewQnlVnqVxlw";
		const _cmdtTx4E1 = [_arrayValuesLhmQjF, _arrayValueKrGYuLT, _arrayValuexXiPIK9, _arrayValueZyuvOEe]
		const _returnValuejGU69R3 = await _helpergS0iikL.subcommandTerm(_cmdtTx4E1)
		const _returnValueCtmQJE = "t6xxQY10HbdOpKwscNnRzkgtSmTwiczolDScmAJPxo";
		const _optiongwxuZjM = () => { return _returnValueCtmQJE };
		const _returnValueCylcPtS = await _helpergS0iikL.optionTerm(_optiongwxuZjM)
		const _arrayValueegtJoGN = null;
		const _arrayValuew09FMsx = "p9RyQy95Vj9XlXZl76ldosA4jepUz9Ax1yI04ISDrfIlliDUPmBS6o78NsFFih88dQpNKFfyHtAX58kcPlruDGzei";
		const _cmdKyLqLbj = [_arrayValueegtJoGN, _arrayValuew09FMsx]
		const _returnValuekAGrhtH = await _helpergS0iikL.visibleCommands(_cmdKyLqLbj)
		const _arrayValueBwTNo5 = {
		
	}
		const _arrayValuejzk5s3I = 9.744012020919797;
		const _arrayValuetd7fk4c = "4aP";
		const _returnValueP9qYPf0 = null;
		const _arrayValuesmhSYI = () => { return _returnValueP9qYPf0 };
		const _cmdpxHDV5h = [_arrayValueBwTNo5, _arrayValuejzk5s3I, _arrayValuetd7fk4c, _arrayValuesmhSYI]
		const _returnValuehn6Eywr = await _helpergS0iikL.subcommandTerm(_cmdpxHDV5h)
		const _returnValueWFBeBhg = await _HelpJUm4uIz.longestOptionTermLength(_cmduUKOvoA, _helpergS0iikL)
		const _arrayValuedklx3h = null;
		const _arrayValueWojlM10 = "pezRzWSb5kLz1VKt2gnn";
		const _returnValueHXIlcZ = [_arrayValuedklx3h, _arrayValueWojlM10]
		const _argumentQ8aoJ9E = () => { return _returnValueHXIlcZ };
		const _returnValueB1LUGc5 = await _HelpJUm4uIz.argumentDescription(_argumentQ8aoJ9E)
		const _arrayValuedYdPeu4 = undefined;
		const _returnValuec2oKFdj = true;
		const _arrayValueFqnGIoM = () => { return _returnValuec2oKFdj };
		const _arrayValueEySIBiq = null;
		const _cmdNvRTBOi = [_arrayValuedYdPeu4, _arrayValueFqnGIoM, _arrayValueEySIBiq]
		const _helperPHAwb05 = new Help()
		const _arrayValuedxWhMDO = true;
		const _arrayValueCFTPQts = null;
		const _cmdN9u9ti7 = [_arrayValuedxWhMDO, _arrayValueCFTPQts]
		const _returnValueFlmupqx = await _helperPHAwb05.visibleArguments(_cmdN9u9ti7)
		const _returnValueK5tNVz = null;
		const _cmdxGAGUWW = () => { return _returnValueK5tNVz };
		const _returnValueP1Ldf8q = await _helperPHAwb05.commandUsage(_cmdxGAGUWW)
		const _arrayValuenSPX1K6 = undefined;
		const _arrayValueF5nWTeY = undefined;
		const _arrayValuegnKnyQK = undefined;
		const _returnValuefQcWvKx = [_arrayValuegnKnyQK]
		const _arrayValueQNdF7dZ = () => { return _returnValuefQcWvKx };
		const _returnValueqvh7daS = [_arrayValuenSPX1K6, _arrayValueF5nWTeY, _arrayValueQNdF7dZ]
		const _argumentb0fZczF = () => { return _returnValueqvh7daS };
		const _returnValueFMEghbc = await _helperPHAwb05.argumentTerm(_argumentb0fZczF)
		const _cmduzPflQM = null;
		const _helperScsR2Mc = null;
		const _returnValue7c9dmc = await _helperPHAwb05.longestArgumentTermLength(_cmduzPflQM, _helperScsR2Mc)
		const _arrayValueSAoAHUi = false;
		const _arrayValueqp0BlX = null;
		const _cmdFLgwJDB = [_arrayValueSAoAHUi, _arrayValueqp0BlX]
		const _returnValue6MhtlB = await _helperPHAwb05.subcommandTerm(_cmdFLgwJDB)
		const _returnValueeqzcluz = await _HelpJUm4uIz.longestOptionTermLength(_cmdNvRTBOi, _helperPHAwb05)
	});

	it('test for Help', async () => {
		const _HelpmbcaLRf = new Help()
		const _flagsPZg15t = "q0RTfmEhPajeOsGFOOiaPGLMVQKhrRMIDirK5zJYP5C8jBDMnraMAPS6TIg2bDHnl4PMwPhfUth";
		const _descriptionSJYWCyI = true;
		const _argumentRaPWNOF = new Option(_flagsPZg15t, _descriptionSJYWCyI)
		const _includesiQJgqHs = undefined;
		const _returnValuex6RGzZN = undefined;
		const _joinkz9wobg = () => { return _returnValuex6RGzZN };
		const _valuesmzawgI3 = {
			"includes": _includesiQJgqHs,
		"join": _joinkz9wobg
	}
		const _returnValueXnDUOP = await _argumentRaPWNOF.choices(_valuesmzawgI3)
		const _valuefhJHMb7 = true;
		const _returnValueNXAkunw = undefined;
		const _concath3yzQue = () => { return _returnValueNXAkunw };
		const _previousPGyo0Rx = {
			"concat": _concath3yzQue
	}
		const _returnValued9OORFD = await _argumentRaPWNOF._concatValue(_valuefhJHMb7, _previousPGyo0Rx)
		const _fnuogIAsd = undefined;
		const _returnValueCJr6nkg = await _argumentRaPWNOF.argParser(_fnuogIAsd)
		const _fnCrqCk3Q = undefined;
		const _returnValueWr8bRYA = await _argumentRaPWNOF.argParser(_fnCrqCk3Q)
		const _returnValueTvDOeso = await _HelpmbcaLRf.argumentDescription(_argumentRaPWNOF)
		const _returnValuefnQYMC = undefined;
		const _returnValueKb8a2T = () => { return _returnValuefnQYMC };
		const _cmdccw556 = () => { return _returnValueKb8a2T };
		const _returnValueAo27L9 = await _HelpmbcaLRf.subcommandTerm(_cmdccw556)
		const _arrayValuewK90tR5 = "gEo66nPfuWM8OLWQCCXDvPru";
		const _optionn86u6E = [_arrayValuewK90tR5]
		const _returnValuedysffGQ = await _HelpmbcaLRf.optionDescription(_optionn86u6E)
		const _cmdmi1suFG = "EUgcW";
		const _returnValueHIqI91V = await _HelpmbcaLRf.commandUsage(_cmdmi1suFG)
		const _cmdrIobwTW = null;
		const _helperxnihnRA = "GdfKQtVybZCq1W8dpqI4nqi6O";
		const _returnValuegs12Qxe = await _HelpmbcaLRf.padWidth(_cmdrIobwTW, _helperxnihnRA)
	});

	it('test for Help', async () => {
		const _HelpCSriEw8 = new Help()
		const _namejxRZunz = undefined;
		const _cmdLg7Jh0m = new Command(_namejxRZunz)
		const _keyhYOZKov = 6.592686753375979;
		const _valueBrr94tO = "ejxb6BCPgHwKGV8sYZdRPHXkIkLBANFtv4Q4NRsUn9MQjhI0nbo0VQ7YHDdn8Uo";
		const _sourcevYl8q8t = 4.564526437824533;
		const _returnValueEivHNFt = await _cmdLg7Jh0m.setOptionValueWithSource(_keyhYOZKov, _valueBrr94tO, _sourcevYl8q8t)
		const _returnValueknEFKH7 = await _HelpCSriEw8.subcommandTerm(_cmdLg7Jh0m)
		const _arrayValueEtdnf0n = true;
		const _arrayValuelZbPfZT = "";
		const _arrayValueqMmCFgD = [_arrayValueEtdnf0n, _arrayValuelZbPfZT]
		const _arrayValuevmXaH6N = {
		
	}
		const _argumentJpwXvkV = [_arrayValueqMmCFgD, _arrayValuevmXaH6N]
		const _returnValueaHyzkKj = await _HelpCSriEw8.argumentDescription(_argumentJpwXvkV)
		const _argumentBzNnc7d = null;
		const _returnValueQtgPuze = await _HelpCSriEw8.argumentTerm(_argumentBzNnc7d)
		const _arrayValueBotJciq = null;
		const _cmdrt3goOK = [_arrayValueBotJciq]
		const _arrayValuekirSDqI = 6.496227304370439;
		const _arrayValueZDmUWu5 = undefined;
		const _helperq9DThJw = [_arrayValuekirSDqI, _arrayValueZDmUWu5]
		const _returnValueTMdYZ4m = await _HelpCSriEw8.longestOptionTermLength(_cmdrt3goOK, _helperq9DThJw)
		const _nameRilWfy = "URe4Sfoll64zVUN1JMJeHiEJMFxvhKrVAVIghEC3jWSLpbksl0Odg8JxcGrRDiSPIXY";
		const _cmdWyOjhPM = new Command(_nameRilWfy)
		const _returnValueXkPbtnJ = await _cmdWyOjhPM._checkForMissingMandatoryOptions()
		const _returnValueza6CJ4A = await _cmdWyOjhPM.unknownCommand()
		const _lengthptMf4Pq = null;
		const _receivedArgsyaH0eE1 = {
			"length": _lengthptMf4Pq
	}
		const _returnValueMk5gSA = await _cmdWyOjhPM._excessArguments(_receivedArgsyaH0eE1)
		const _flagsUNpwq3U = undefined;
		const _descriptionfc0luD7 = {
		
	}
		const _fnUnGk0b = -1.240176608095462;
		const _defaultValueYwAUzPa = undefined;
		const _returnValuey9S5za3 = await _cmdWyOjhPM.option(_flagsUNpwq3U, _descriptionfc0luD7, _fnUnGk0b, _defaultValueYwAUzPa)
		const _returnValuej9V0sU = await _HelpCSriEw8.commandDescription(_cmdWyOjhPM)
	});

	it('test for Help', async () => {
		const _HelpiFtkL4X = new Help()
		const _returnValueyEBAMW = true;
		const _match54aa4B = () => { return _returnValueyEBAMW };
		const _returnValuev3JNvrl = {
		
	}
		const _substrpG5LvSf = () => { return _returnValuev3JNvrl };
		const _strqDe31Ed = {
			"match": _match54aa4B,
		"substr": _substrpG5LvSf
	}
		const _widthudYvy0c = -8.42882855902059;
		const _indentMRvWQDV = 8.196924033500895;
		const _minColumnWidthLvZiOi2 = -2.5146818205704484;
		const _returnValueeGPXtmJ = await _HelpiFtkL4X.wrap(_strqDe31Ed, _widthudYvy0c, _indentMRvWQDV, _minColumnWidthLvZiOi2)
		const _namepLj4Xd = {
		
	}
		const _cmdOqtWRM7 = new Command(_namepLj4Xd)
		const _keyt5cwEo = "fxCUjhJjERWFAALM0akXzO8vYR7g84paI0OeQ7Yw2ALorcIkRbEhPclhuO3kVt3KMqnSSouw9RVNJygyw7SmFH";
		const _valuejLUgW3z = false;
		const _sourceiKKl3dI = null;
		const _returnValueWsOLpex = await _cmdOqtWRM7.setOptionValueWithSource(_keyt5cwEo, _valuejLUgW3z, _sourceiKKl3dI)
		const _returnValueZI5y9d = await _HelpiFtkL4X.visibleOptions(_cmdOqtWRM7)
	});
})