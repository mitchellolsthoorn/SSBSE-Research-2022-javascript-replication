export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helphgn7a9P = new Help()
		const __argsDescriptionVV5mXy7 = {
		
	}
		const __argsIg5Gpye = {
		
	}
		const _cmdiM5pTp9 = {
			"_argsDescription": __argsDescriptionVV5mXy7,
		"_args": __argsIg5Gpye
	}
		const _returnValuemzAm2PR = await _Helphgn7a9P.visibleArguments(_cmdiM5pTp9)
		const __argsDescriptionJpEYXYg = {
		
	}
		const __argsq1kY587 = {
		
	}
		const _cmdD5rZEYK = {
			"_argsDescription": __argsDescriptionJpEYXYg,
		"_args": __argsq1kY587
	}
		const _returnValueNn61ALd = await _Helphgn7a9P.visibleArguments(_cmdD5rZEYK)
		const _cmdgDQxjO2 = undefined;
		const _returnValuer6mE3Qm = "2itI8JtFckV9gWtXkiQtg4Pjb88p3ScnYM5g549vbFbiT9x79eAU";
		const _visibleArgumentsj6Z55E5 = () => { return _returnValuer6mE3Qm };
		const _returnValueNj29l84 = []
		const _argumentTermtCmvhY9 = () => { return _returnValueNj29l84 };
		const _helperdKxQW3j = {
			"visibleArguments": _visibleArgumentsj6Z55E5,
		"argumentTerm": _argumentTermtCmvhY9
	}
		const _returnValuePJ5f9aW = await _Helphgn7a9P.longestArgumentTermLength(_cmdgDQxjO2, _helperdKxQW3j)
		const _cmdze06zoJ = []
		const _arrayValuePhYuRWS = null;
		const _sortSubcommandsoEiCrOR = [_arrayValuePhYuRWS]
		const _returnValuenbs8EuI = 1.793224683150589;
		const _subcommandTermPlRtdU = () => { return _returnValuenbs8EuI };
		const _helperETxmVjH = {
			"sortSubcommands": _sortSubcommandsoEiCrOR,
		"subcommandTerm": _subcommandTermPlRtdU
	}
		const _returnValuewtueVb2 = await _Helphgn7a9P.formatHelp(_cmdze06zoJ, _helperETxmVjH)
		const __nameJ0kfEQm = {
		
	}
		const __aliasesmBudAIr = {
		
	}
		const _parentZil5FUO = {
		
	}
		const _returnValueDK37Ywz = null;
		const _usagetj7aBU = () => { return _returnValueDK37Ywz };
		const _cmdKixi4Cf = {
			"_name": __nameJ0kfEQm,
		"_aliases": __aliasesmBudAIr,
		"parent": _parentZil5FUO,
		"usage": _usagetj7aBU
	}
		const _returnValueqaIWzmK = await _Helphgn7a9P.commandUsage(_cmdKixi4Cf)
	});

	it('test for Help', async () => {
		const _HelpTdOrEPo = new Help()
		const __argsZNFFHx = {
		
	}
		const __namektVic0h = 5.743631552996211;
		const __aliasestGLEFm7 = {
		
	}
		const _optionsyTOdf8b = {
		
	}
		const _cmdKkYusJm = {
			"_args": __argsZNFFHx,
		"_name": __namektVic0h,
		"_aliases": __aliasestGLEFm7,
		"options": _optionsyTOdf8b
	}
		const _returnValuek28mYVy = await _HelpTdOrEPo.subcommandTerm(_cmdKkYusJm)
		const _returnValueHyNjxul = null;
		const _namenz7ec2q = () => { return _returnValueHyNjxul };
		const _argumentWc4rns1 = {
			"name": _namenz7ec2q
	}
		const _returnValueqJz7FGX = await _HelpTdOrEPo.argumentTerm(_argumentWc4rns1)
	});

	it('test for Help', async () => {
		const _HelpO8V1Nt = new Help()
		const _cmdJ1mCN2 = "yPb5At80q9tZ4dFXLcsbGYx22HiDvcaxYUWx6ib4WQvfmU3gE1uKqLJyNHRnnIkcUdriUBkUBrEYlwEUJ8MXC6gvOqX";
		const _returnValueioYGxMG = undefined;
		const _visibleArgumentsMrM2G38 = () => { return _returnValueioYGxMG };
		const _returnValuespDZErH = false;
		const _returnValueeKCgLvH = () => { return _returnValuespDZErH };
		const _argumentTermS3wM6r = () => { return _returnValueeKCgLvH };
		const _helperupPzzxy = {
			"visibleArguments": _visibleArgumentsMrM2G38,
		"argumentTerm": _argumentTermS3wM6r
	}
		const _returnValueBNkU7tY = await _HelpO8V1Nt.longestArgumentTermLength(_cmdJ1mCN2, _helperupPzzxy)
		const _cmdBRwUxiq = {
		
	}
		const _sortSubcommandsRymKTSb = []
		const _returnValuexmXWn7z = null;
		const _subcommandTermiKDl09z = () => { return _returnValuexmXWn7z };
		const _helperJduerIH = {
			"sortSubcommands": _sortSubcommandsRymKTSb,
		"subcommandTerm": _subcommandTermiKDl09z
	}
		const _returnValueoNvdBPU = await _HelpO8V1Nt.formatHelp(_cmdBRwUxiq, _helperJduerIH)
		const _commandsPs7PURQ = {
		
	}
		const _returnValueU7QUtML = "9nwBJEXMlwYaVgqzlfYy1qQAQgL46mk68XU71Q";
		const __hasImplicitHelpCommandsuj3H9U = () => { return _returnValueU7QUtML };
		const __helpCommandnameAndArgsuQey1js = {
		
	}
		const _returnValuecOAeqZ4 = undefined;
		const _createCommandBzfijXE = () => { return _returnValuecOAeqZ4 };
		const __helpCommandDescription3S0WfU = null;
		const _cmdX1x1oUg = {
			"commands": _commandsPs7PURQ,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandsuj3H9U,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsuQey1js,
		"createCommand": _createCommandBzfijXE,
		"_helpCommandDescription": __helpCommandDescription3S0WfU
	}
		const _returnValueTELdM8G = await _HelpO8V1Nt.visibleCommands(_cmdX1x1oUg)
	});

	it('test for Help', async () => {
		const _HelpZx3n13F = new Help()
		const __nameFc8TBIV = {
		
	}
		const __aliaseskclCacx = {
		
	}
		const _parentipzfjHb = {
		
	}
		const _returnValueFbd8uyy = null;
		const _usageSLMUXft = () => { return _returnValueFbd8uyy };
		const _cmdzUvFE71 = {
			"_name": __nameFc8TBIV,
		"_aliases": __aliaseskclCacx,
		"parent": _parentipzfjHb,
		"usage": _usageSLMUXft
	}
		const _returnValueJ7uD5Rj = await _HelpZx3n13F.commandUsage(_cmdzUvFE71)
		const _cmdkxFtJke = -8.123250217204136;
		const _returnValuesmBXQjP = {
		
	}
		const _visibleArgumentsyQlQGx = () => { return _returnValuesmBXQjP };
		const _arrayValuepfFm8pd = "3b9mghpFmKD7PF09PRot7JLvGo2U8oNWK8c2GCKOloVgdbYzBTruBGSOzwOMmZduBaCzyucVpGlzcmrMoFR0bI8CXCktuP";
		const _arrayValueUhOmNou = undefined;
		const _arrayValueZd2tVjN = "cnYT3KYLRVumA2A9oxPone39gciebbfj3uy";
		const _returnValuesy0mp12 = [_arrayValuepfFm8pd, _arrayValueUhOmNou, _arrayValueZd2tVjN]
		const _argumentTermfe6JGAL = () => { return _returnValuesy0mp12 };
		const _helpereyJUwBX = {
			"visibleArguments": _visibleArgumentsyQlQGx,
		"argumentTerm": _argumentTermfe6JGAL
	}
		const _returnValueLA7XjoC = await _HelpZx3n13F.longestArgumentTermLength(_cmdkxFtJke, _helpereyJUwBX)
		const _argChoicesPHobIWZ = {
		
	}
		const _defaultValue5LJwmW = undefined;
		const _defaultValueDescriptionK1Ckd7 = undefined;
		const _descriptionR8DHDTj = false;
		const _argumentNxE5sdZ = {
			"argChoices": _argChoicesPHobIWZ,
		"defaultValue": _defaultValue5LJwmW,
		"defaultValueDescription": _defaultValueDescriptionK1Ckd7,
		"description": _descriptionR8DHDTj
	}
		const _returnValueKmJGVNQ = await _HelpZx3n13F.argumentDescription(_argumentNxE5sdZ)
	});

	it('test for Help', async () => {
		const _HelpqXPsm5C = new Help()
		const _argChoicesNUFkSAT = false;
		const _negateqHkhKGQ = "P4oESOkjzS61sZxa1kF8qooVKgK6gPMUT96vYFF215nlFcbOu8wHk2YvQCoajl42PtD76mFGYza4JdcEa4MCwJpum4";
		const _defaultValueOri5QTC = undefined;
		const _returnValueYQLCMFy = undefined;
		const _defaultValueDescriptiony4JI4Rq = () => { return _returnValueYQLCMFy };
		const _envVargDOzFbI = undefined;
		const _descriptionVdtl41A = undefined;
		const _optionQ7ztLkX = {
			"argChoices": _argChoicesNUFkSAT,
		"negate": _negateqHkhKGQ,
		"defaultValue": _defaultValueOri5QTC,
		"defaultValueDescription": _defaultValueDescriptiony4JI4Rq,
		"envVar": _envVargDOzFbI,
		"description": _descriptionVdtl41A
	}
		const _returnValuefnI3yih = await _HelpqXPsm5C.optionDescription(_optionQ7ztLkX)
		const _cmdjxoZow8 = true;
		const _returnValueJzv3ear = -8.117402309054384;
		const _visibleOptionsWu5ojuv = () => { return _returnValueJzv3ear };
		const _arrayValue5WjbL0 = -7.069400156416483;
		const _returnValueZUmTNks = [_arrayValue5WjbL0]
		const _optionTermDcVwLfW = () => { return _returnValueZUmTNks };
		const _helperMfrLjmR = {
			"visibleOptions": _visibleOptionsWu5ojuv,
		"optionTerm": _optionTermDcVwLfW
	}
		const _returnValueUWulQqy = await _HelpqXPsm5C.longestOptionTermLength(_cmdjxoZow8, _helperMfrLjmR)
	});

	it('test for Help', async () => {
		const _HelpM6jT09h = new Help()
		const _returnValuerSoOh3 = undefined;
		const _matchOL8pw5a = () => { return _returnValuerSoOh3 };
		const _returnValueq2FSOLM = undefined;
		const _substrURXJCda = () => { return _returnValueq2FSOLM };
		const _strhU3CM89 = {
			"match": _matchOL8pw5a,
		"substr": _substrURXJCda
	}
		const _widthBk0SIW4 = -3.094441899192372;
		const _indentberlDkP = -3.2789541543724;
		const _minColumnWidthudtSXi3 = -5.75930739888698;
		const _returnValuePe3OTsy = await _HelpM6jT09h.wrap(_strhU3CM89, _widthBk0SIW4, _indentberlDkP, _minColumnWidthudtSXi3)
		const _cmdx1ykjXZ = -3.358490651999791;
		const _arrayValuewngf56q = "TxA8HHXdDs21xUK37uqkRsK18o4UsvNSux88vbRigkuK6TnNGHxp7M3VHAQCFIGt";
		const _arrayValueTYhDmdM = "0X3lIBYvu8MheIlyFMMf3232U2uVBktTigp5pEfiXYgtoy4dWDCzfVSPmF561hlRBvrnPfSDLFE";
		const _helperoCROAgF = [_arrayValuewngf56q, _arrayValueTYhDmdM]
		const _returnValuehNHNGzQ = await _HelpM6jT09h.longestArgumentTermLength(_cmdx1ykjXZ, _helperoCROAgF)
	});

	it('test for Help', async () => {
		const _HelpBt6YilQ = new Help()
		const _argChoiceshkJ1UqK = {
		
	}
		const _defaultValuesrfbDuq = undefined;
		const _defaultValueDescriptionfd1COyO = false;
		const _descriptioncCnpWuz = "NPTOQ7W22sha60iXDMT3FHt6OUJV5hlBdJ";
		const _argumentX4zWcHL = {
			"argChoices": _argChoiceshkJ1UqK,
		"defaultValue": _defaultValuesrfbDuq,
		"defaultValueDescription": _defaultValueDescriptionfd1COyO,
		"description": _descriptioncCnpWuz
	}
		const _returnValuefqDYdzN = await _HelpBt6YilQ.argumentDescription(_argumentX4zWcHL)
		const _returnValueWtjHGMh = "z1mnyewU8m";
		const _descriptionbH4ISSe = () => { return _returnValueWtjHGMh };
		const _cmdHqfdLoI = {
			"description": _descriptionbH4ISSe
	}
		const _returnValueFvFFjUY = await _HelpBt6YilQ.subcommandDescription(_cmdHqfdLoI)
		const _arrayValueG3yamJ3 = {
		
	}
		const _arrayValuewdHvsmn = {
		
	}
		const _arrayValueBVVvyE6 = null;
		const _arrayValueFb997jp = null;
		const _returnValueYY5s9X0 = [_arrayValueG3yamJ3, _arrayValuewdHvsmn, _arrayValueBVVvyE6, _arrayValueFb997jp]
		const _descriptionWM4kWUr = () => { return _returnValueYY5s9X0 };
		const _cmdWQWl5bu = {
			"description": _descriptionWM4kWUr
	}
		const _returnValueLUsv1dK = await _HelpBt6YilQ.subcommandDescription(_cmdWQWl5bu)
	});

	it('test for Help', async () => {
		const _HelpbBbaiAy = new Help()
		const _flagsr2Bmtzu = undefined;
		const _optionnJP44dE = {
			"flags": _flagsr2Bmtzu
	}
		const _returnValuerubApre = await _HelpbBbaiAy.optionTerm(_optionnJP44dE)
		const _cmdipXQXyv = "CsBkUIfao7tW6pGtbLoKrMBhUxxRjof9S";
		const _returnValued3E5LzC = await _HelpbBbaiAy.visibleOptions(_cmdipXQXyv)
	});

	it('test for Help', async () => {
		const _HelpMUcPR6H = new Help()
		const _cmdVC0xXVc = "z6bXEAgybVdsBFCBj87K";
		const _sortSubcommandsbSxs4wX = false;
		const _returnValueGDfPF0y = 3.117890298740843;
		const _subcommandTermr2Nubcp = () => { return _returnValueGDfPF0y };
		const _helperC68h8c9 = {
			"sortSubcommands": _sortSubcommandsbSxs4wX,
		"subcommandTerm": _subcommandTermr2Nubcp
	}
		const _returnValueOwLeCvY = await _HelpMUcPR6H.longestSubcommandTermLength(_cmdVC0xXVc, _helperC68h8c9)
		const _flagsZAQENVi = undefined;
		const _optionVslC55 = {
			"flags": _flagsZAQENVi
	}
		const _returnValuerVoUYwU = await _HelpMUcPR6H.optionTerm(_optionVslC55)
	});

	it('test for Help', async () => {
		const _HelpgBkrTN6 = new Help()
		const _arrayValueVHjXr5L = "SrNsYNjDYT8CkY3sKieVikWVIYE8J8uwjLM7tEHwR96wHXvn3TJsAHXtEeNRLeAA4m7TrowhQTxHl";
		const _arrayValueb1si8rp = true;
		const _returnValueqoxczfh = 1.9802736661777551;
		const _arrayValuesBfRDyL = () => { return _returnValueqoxczfh };
		const _returnValueHgsZ2BG = [_arrayValueVHjXr5L, _arrayValueb1si8rp, _arrayValuesBfRDyL]
		const _cmdKmosHc = () => { return _returnValueHgsZ2BG };
		const _sortSubcommandshBKj5y1 = undefined;
		const _returnValueKHQOKm = "TiOQn1HNgFfi7WWum7oqJY3DibUGk9Wmy3891NEVU2xJnN49sW5xY0oO9IqIs1YyAAiVVP3fJloDGyl";
		const _subcommandTermaRhx1Od = () => { return _returnValueKHQOKm };
		const _helperkaU6P6R = {
			"sortSubcommands": _sortSubcommandshBKj5y1,
		"subcommandTerm": _subcommandTermaRhx1Od
	}
		const _returnValueVhLFqUo = await _HelpgBkrTN6.formatHelp(_cmdKmosHc, _helperkaU6P6R)
		const _argChoicesRf1Oic = undefined;
		const _arrayValueflSLD0p = undefined;
		const _arrayValuego6W5kV = "G7l3WoTFpYA6ssnaAnxxmXnVlTSjHFlODnSNWluHrXGDIaXrBPpmfmLMn9RHspCIxvD9AgiHD1cHshsEE89I";
		const _negateJ699lWQ = [_arrayValueflSLD0p, _arrayValuego6W5kV]
		const _defaultValueuA3hBad = undefined;
		const _arrayValueBPjiMgM = "9TBZikDMxyNCLFh3Xe8SPojoCQLBVvTTBuerfRVS6DhkLorzyL1qddv3FPE6L7foQesmiXaVExSzPuiru1EgdsCpdI1VsX";
		const _arrayValueytXGTCw = null;
		const _arrayValueqjGZ2y5 = -9.11770402057992;
		const _arrayValueSMuo53a = [_arrayValueytXGTCw, _arrayValueqjGZ2y5]
		const _defaultValueDescriptionFvaXLVU = [_arrayValueBPjiMgM, _arrayValueSMuo53a]
		const _envVarDFQklvN = undefined;
		const _descriptiong30WRC = undefined;
		const _optionDaVbUif = {
			"argChoices": _argChoicesRf1Oic,
		"negate": _negateJ699lWQ,
		"defaultValue": _defaultValueuA3hBad,
		"defaultValueDescription": _defaultValueDescriptionFvaXLVU,
		"envVar": _envVarDFQklvN,
		"description": _descriptiong30WRC
	}
		const _returnValueP2XfZbG = await _HelpgBkrTN6.optionDescription(_optionDaVbUif)
		const _cmdVD8yR0E = undefined;
		const _helperOd5i1qj = false;
		const _returnValueGUqQESV = await _HelpgBkrTN6.longestSubcommandTermLength(_cmdVD8yR0E, _helperOd5i1qj)
	});

	it('test for Help', async () => {
		const _HelpRu102gR = new Help()
		const _cmdt9U6Xo = true;
		const _returnValueiGLRskd = null;
		const _longestOptionTermLengthFED6iA5 = () => { return _returnValueiGLRskd };
		const _arrayValueeSlem2j = false;
		const _longestSubcommandTermLengthRL3htzH = [_arrayValueeSlem2j]
		const _returnValuekUpozhg = false;
		const _longestArgumentTermLengthrY8WqtA = () => { return _returnValuekUpozhg };
		const _helperCQH76Vq = {
			"longestOptionTermLength": _longestOptionTermLengthFED6iA5,
		"longestSubcommandTermLength": _longestSubcommandTermLengthRL3htzH,
		"longestArgumentTermLength": _longestArgumentTermLengthrY8WqtA
	}
		const _returnValueRhvkjno = await _HelpRu102gR.padWidth(_cmdt9U6Xo, _helperCQH76Vq)
	});

	it('test for Help', async () => {
		const _HelpeZ9kSTr = new Help()
		const _returnValueULVZjDn = null;
		const _arrayValueAbls2r7 = () => { return _returnValueULVZjDn };
		const _arrayValueCvYNT3O = 7.635211439941397;
		const _returnValueDQ0bpMo = [_arrayValueAbls2r7, _arrayValueCvYNT3O]
		const _descriptionEtCIMUJ = () => { return _returnValueDQ0bpMo };
		const _cmdjch83ht = {
			"description": _descriptionEtCIMUJ
	}
		const _returnValueu8wZP6 = await _HelpeZ9kSTr.commandDescription(_cmdjch83ht)
		const _cmdYMlU3jP = undefined;
		const _returnValuec5LqZB = 2.2351115705620312;
		const _returnValuehT2Qoyu = () => { return _returnValuec5LqZB };
		const _visibleArgumentsztbKGgn = () => { return _returnValuehT2Qoyu };
		const _returnValueAZGaKFQ = 2.1899451888677817;
		const _returnValueZLqMQTD = () => { return _returnValueAZGaKFQ };
		const _argumentTermsZTBPM = () => { return _returnValueZLqMQTD };
		const _helperFVMYtWj = {
			"visibleArguments": _visibleArgumentsztbKGgn,
		"argumentTerm": _argumentTermsZTBPM
	}
		const _returnValuelSSgBbv = await _HelpeZ9kSTr.longestArgumentTermLength(_cmdYMlU3jP, _helperFVMYtWj)
	});

	it('test for Help', async () => {
		const _Helpqiqxrie = new Help()
		const _arrayValueyozEEtz = 9.702504775589503;
		const _returnValueQBWPeR6 = [_arrayValueyozEEtz]
		const _namerv1mtrM = () => { return _returnValueQBWPeR6 };
		const _argumentkfV6H1e = {
			"name": _namerv1mtrM
	}
		const _returnValueKCynKGw = await _Helpqiqxrie.argumentTerm(_argumentkfV6H1e)
	});

	it('test for Help', async () => {
		const _HelpiDt72De = new Help()
		const _returnValueANyS7N = true;
		const _descriptionUNajxpG = () => { return _returnValueANyS7N };
		const _cmdecxRTIe = {
			"description": _descriptionUNajxpG
	}
		const _returnValuesw2Ived = await _HelpiDt72De.subcommandDescription(_cmdecxRTIe)
		const __argsgCh3anp = {
		
	}
		const _arrayValuePumhabb = "x9HWJm6ENxbhoGP6";
		const _arrayValueOaUdZU6 = []
		const _arrayValueZZQpKC = "XOXrsEn4d7HslLuvSNTBbajcxXsCTmq93tB4DY9ACwAR48VfTjkfv";
		const __nameWQLYx6u = [_arrayValuePumhabb, _arrayValueOaUdZU6, _arrayValueZZQpKC]
		const __aliasesSR3sq3d = {
		
	}
		const _optionsRIjqbp = {
		
	}
		const _cmdy97xded = {
			"_args": __argsgCh3anp,
		"_name": __nameWQLYx6u,
		"_aliases": __aliasesSR3sq3d,
		"options": _optionsRIjqbp
	}
		const _returnValuea33HKWj = await _HelpiDt72De.subcommandTerm(_cmdy97xded)
		const _returnValuerJEBJy6 = true;
		const _descriptionGQJebvb = () => { return _returnValuerJEBJy6 };
		const _cmdbRYF4Ko = {
			"description": _descriptionGQJebvb
	}
		const _returnValues4EmVRU = await _HelpiDt72De.subcommandDescription(_cmdbRYF4Ko)
		const _flagsYUu4Fi6 = "pBxxjZQA5Oapsz6ABRiPH";
		const _optioneYBd6RL = {
			"flags": _flagsYUu4Fi6
	}
		const _returnValueGkYyNEZ = await _HelpiDt72De.optionTerm(_optioneYBd6RL)
	});

	it('test for Help', async () => {
		const _HelphVwwCl = new Help()
		const _arrayValueVz1mWP = "9HK99lexjEa0v5VvBUdPzi3Etglk0nB2kuLdyXu8RN21eLj68rCevQFi2w9Ebzo4ksFbQx";
		const _arrayValuehgxjh41 = -2.104253602357092;
		const _arrayValue6vYUix = undefined;
		const _arrayValuet85Jul = null;
		const _returnValueIc8OTA = [_arrayValueVz1mWP, _arrayValuehgxjh41, _arrayValue6vYUix, _arrayValuet85Jul]
		const _nameett2TIz = () => { return _returnValueIc8OTA };
		const _argumentjVoskLS = {
			"name": _nameett2TIz
	}
		const _returnValueLLW1g3v = await _HelphVwwCl.argumentTerm(_argumentjVoskLS)
		const _returnValuervGBOLM = -4.873682524656674;
		const _matchUG49ixw = () => { return _returnValuervGBOLM };
		const _substrFbpir8b = null;
		const _strWvuic5 = {
			"match": _matchUG49ixw,
		"substr": _substrFbpir8b
	}
		const _widthXi5j7cJ = 2.78320336885778;
		const _indentNUm8uab = -1.1220887881675008;
		const _minColumnWidthua92FvP = 8.766536306961857;
		const _returnValueeJLyzS8 = await _HelphVwwCl.wrap(_strWvuic5, _widthXi5j7cJ, _indentNUm8uab, _minColumnWidthua92FvP)
		const _cmdzikaEiU = true;
		const _returnValueyqdmSfx = {
		
	}
		const _visibleArgumentsVTSBJW = () => { return _returnValueyqdmSfx };
		const _returnValueOUGSgGk = []
		const _argumentTermd0OpnR = () => { return _returnValueOUGSgGk };
		const _helperK14UMDa = {
			"visibleArguments": _visibleArgumentsVTSBJW,
		"argumentTerm": _argumentTermd0OpnR
	}
		const _returnValuegqRjYWe = await _HelphVwwCl.longestArgumentTermLength(_cmdzikaEiU, _helperK14UMDa)
		const __namegJo4wX = {
		
	}
		const __aliasesGMP1XV = {
		
	}
		const _parentqjXG0yv = {
		
	}
		const _returnValuednYDnF4 = undefined;
		const _usagejNC2bQK = () => { return _returnValuednYDnF4 };
		const _cmdVGYLVgY = {
			"_name": __namegJo4wX,
		"_aliases": __aliasesGMP1XV,
		"parent": _parentqjXG0yv,
		"usage": _usagejNC2bQK
	}
		const _returnValueYzRSiZ = await _HelphVwwCl.commandUsage(_cmdVGYLVgY)
	});

	it('test for Help', async () => {
		const _HelpgsMX3lq = new Help()
		const _argChoicesE2eMZTu = {
		
	}
		const _negatekufvLIt = undefined;
		const _defaultValue0fxPuk = undefined;
		const _defaultValueDescriptionMvbSuch = []
		const _envVarJTQ379l = undefined;
		const _descriptionoGhtOFt = {
		
	}
		const _optionBo78afn = {
			"argChoices": _argChoicesE2eMZTu,
		"negate": _negatekufvLIt,
		"defaultValue": _defaultValue0fxPuk,
		"defaultValueDescription": _defaultValueDescriptionMvbSuch,
		"envVar": _envVarJTQ379l,
		"description": _descriptionoGhtOFt
	}
		const _returnValuegd0lGU = await _HelpgsMX3lq.optionDescription(_optionBo78afn)
		const _cmdpp8LB9X = "ack6ab9fZXYErRwrWHW58S46PWG481obSrc3BkDL8fd6l4xLGsFwHuEOivsdm3y";
		const _sortSubcommandsdAeWzAO = true;
		const _returnValueFB0os2Q = true;
		const _subcommandTermkhOhmd = () => { return _returnValueFB0os2Q };
		const _helperpDJ7McC = {
			"sortSubcommands": _sortSubcommandsdAeWzAO,
		"subcommandTerm": _subcommandTermkhOhmd
	}
		const _returnValueEIkh8HB = await _HelpgsMX3lq.longestSubcommandTermLength(_cmdpp8LB9X, _helperpDJ7McC)
		const __argsfu5kiD3 = {
		
	}
		const __name6GDRyW = -8.1274883537739;
		const __aliaseskMJdrQ4 = {
		
	}
		const _optionsJp8jTXL = {
		
	}
		const _cmdC2fSvEp = {
			"_args": __argsfu5kiD3,
		"_name": __name6GDRyW,
		"_aliases": __aliaseskMJdrQ4,
		"options": _optionsJp8jTXL
	}
		const _returnValuemAu6P9t = await _HelpgsMX3lq.subcommandTerm(_cmdC2fSvEp)
	});

	it('test for Help', async () => {
		const _Helpp4YR1d0 = new Help()
		const _commandsK7WgBzz = {
		
	}
		const _returnValueoDra0a9 = 4.952267241168229;
		const __hasImplicitHelpCommandDKkU7KD = () => { return _returnValueoDra0a9 };
		const __helpCommandnameAndArgsAeorpO = {
		
	}
		const _returnValueBLCOxo1 = []
		const _createCommandNlcsma2 = () => { return _returnValueBLCOxo1 };
		const __helpCommandDescriptionBtRAZc = {
		
	}
		const _cmd0iAuki = {
			"commands": _commandsK7WgBzz,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandDKkU7KD,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsAeorpO,
		"createCommand": _createCommandNlcsma2,
		"_helpCommandDescription": __helpCommandDescriptionBtRAZc
	}
		const _returnValueIL3Y3mA = await _Helpp4YR1d0.visibleCommands(_cmd0iAuki)
	});

	it('test for Help', async () => {
		const _HelpLW1jk4F = new Help()
		const _returnValueqI8ynhX = {
		
	}
		const _nameOY2QIzP = () => { return _returnValueqI8ynhX };
		const _argumentNVyyknw = {
			"name": _nameOY2QIzP
	}
		const _returnValueA6Ns4Z1 = await _HelpLW1jk4F.argumentTerm(_argumentNVyyknw)
		const _returnValuehcwcAKB = false;
		const _matchBPz3AhM = () => { return _returnValuehcwcAKB };
		const _returnValueWijw5EG = {
		
	}
		const _substrileoUG9 = () => { return _returnValueWijw5EG };
		const _strRJUstMg = {
			"match": _matchBPz3AhM,
		"substr": _substrileoUG9
	}
		const _widtht9Uxtel = -9.09261443732987;
		const _indentxzcGVv6 = -5.838777323452339;
		const _minColumnWidthK73IDk = 4.889907658949218;
		const _returnValueU4r4yv6 = await _HelpLW1jk4F.wrap(_strRJUstMg, _widtht9Uxtel, _indentxzcGVv6, _minColumnWidthK73IDk)
		const _argChoicesiYQYWX = {
		
	}
		const _negateTVwm3kP = 0.0005401392280486306;
		const _defaultValueYmQR3Ih = undefined;
		const _defaultValueDescriptionpOiJkOR = null;
		const _envVarc7xzhX = undefined;
		const _descriptionTogDM3H = -4.172464020505422;
		const _optionGgyNvt = {
			"argChoices": _argChoicesiYQYWX,
		"negate": _negateTVwm3kP,
		"defaultValue": _defaultValueYmQR3Ih,
		"defaultValueDescription": _defaultValueDescriptionpOiJkOR,
		"envVar": _envVarc7xzhX,
		"description": _descriptionTogDM3H
	}
		const _returnValuecbEWaEs = await _HelpLW1jk4F.optionDescription(_optionGgyNvt)
		const _arrayValueZcCvNGN = 6.120018233148269;
		const _returnValueHTHThr = [_arrayValueZcCvNGN]
		const _cmdfUmW50L = () => { return _returnValueHTHThr };
		const _arrayValuecgUx3nj = 7.887980365472696;
		const _sortSubcommandsbvwp2Q4 = [_arrayValuecgUx3nj]
		const _returnValuetjTDEc = undefined;
		const _subcommandTermCXljmaI = () => { return _returnValuetjTDEc };
		const _helperYI56ZrF = {
			"sortSubcommands": _sortSubcommandsbvwp2Q4,
		"subcommandTerm": _subcommandTermCXljmaI
	}
		const _returnValueFT8PlTN = await _HelpLW1jk4F.longestSubcommandTermLength(_cmdfUmW50L, _helperYI56ZrF)
	});

	it('test for Help', async () => {
		const _HelpqIrw7vC = new Help()
		const _returnValueQLKVrX5 = {
		
	}
		const _argumentWKZFeWf = () => { return _returnValueQLKVrX5 };
		const _returnValueQpMZclB = await _HelpqIrw7vC.argumentDescription(_argumentWKZFeWf)
		const _returnValuedgygp0 = null;
		const _cmdVha5GPr = () => { return _returnValuedgygp0 };
		const _returnValueSdP5g4S = undefined;
		const _visibleArgumentsaTPrVhq = () => { return _returnValueSdP5g4S };
		const _returnValueXELZx1e = "c1mw05SZ9kg7gbs";
		const _argumentTermKcwsmPV = () => { return _returnValueXELZx1e };
		const _helperGh2H6x = {
			"visibleArguments": _visibleArgumentsaTPrVhq,
		"argumentTerm": _argumentTermKcwsmPV
	}
		const _returnValuePjT3hy = await _HelpqIrw7vC.longestArgumentTermLength(_cmdVha5GPr, _helperGh2H6x)
	});

	it('test for Help', async () => {
		const _HelpxFk0SLr = new Help()
		const _returnValuevT3ssTM = true;
		const _arrayValuef5Bn1Th = () => { return _returnValuevT3ssTM };
		const _argChoices5EKV9g = [_arrayValuef5Bn1Th]
		const _negateeUD9P01 = null;
		const _defaultValueZ4XKMJv = undefined;
		const _defaultValueDescriptionUf6XH9 = false;
		const _envVarBcGv3c = undefined;
		const _descriptionPhHcgG8 = null;
		const _optionQDLFKO = {
			"argChoices": _argChoices5EKV9g,
		"negate": _negateeUD9P01,
		"defaultValue": _defaultValueZ4XKMJv,
		"defaultValueDescription": _defaultValueDescriptionUf6XH9,
		"envVar": _envVarBcGv3c,
		"description": _descriptionPhHcgG8
	}
		const _returnValueQA2tmch = await _HelpxFk0SLr.optionDescription(_optionQDLFKO)
		const _returnValueVxRaod = null;
		const _descriptionLy1qOvV = () => { return _returnValueVxRaod };
		const _cmdkyLOAx4 = {
			"description": _descriptionLy1qOvV
	}
		const _returnValueYiz1WS7 = await _HelpxFk0SLr.commandDescription(_cmdkyLOAx4)
		const _arrayValueFumskE9 = true;
		const _arrayValuew0yqC2B = [_arrayValueFumskE9]
		const _arrayValueOgP8gqu = 3.277876689868977;
		const _arrayValueJ5Sdlb3 = "kFSmz8SDJJYeFQsbNZHuT2wD1PtBmzve8Ynu62x";
		const _arrayValueWpqZKFS = null;
		const _arrayValuevymZdRh = [_arrayValueOgP8gqu, _arrayValueJ5Sdlb3, _arrayValueWpqZKFS]
		const _cmdNsvCYpt = [_arrayValuew0yqC2B, _arrayValuevymZdRh]
		const _arrayValueNlRfcFy = null;
		const _arrayValueQGdfXRH = {
		
	}
		const _sortSubcommandsWa0FK7T = [_arrayValueNlRfcFy, _arrayValueQGdfXRH]
		const _arrayValueBXHCaIp = "SWCUP30pV1xPUKQu0MZPZh4Atxb1sHFVeWui8gl1zmyP1FOVNMACdmxIQBbv";
		const _arrayValueH7oXjkI = -2.9630663356095166;
		const _arrayValueOpDSWpY = -8.379209279559792;
		const _arrayValuesJkTMsp = "belMntNqL9aSLhcG5qiP4Pmwy4PDnNCUJ81nqkKkamQETkKc4E3SLPHz";
		const _returnValue5r16Jd = [_arrayValueBXHCaIp, _arrayValueH7oXjkI, _arrayValueOpDSWpY, _arrayValuesJkTMsp]
		const _subcommandTermUt1PPnS = () => { return _returnValue5r16Jd };
		const _helpersYwetk = {
			"sortSubcommands": _sortSubcommandsWa0FK7T,
		"subcommandTerm": _subcommandTermUt1PPnS
	}
		const _returnValued1VcWm = await _HelpxFk0SLr.longestSubcommandTermLength(_cmdNsvCYpt, _helpersYwetk)
		const _argChoicesrmxLPZh = {
		
	}
		const _defaultValuexcL2n6n = undefined;
		const _defaultValueDescriptionCmrrO1A = true;
		const _descriptionOw5LR7o = undefined;
		const _argumentmlTQGJh = {
			"argChoices": _argChoicesrmxLPZh,
		"defaultValue": _defaultValuexcL2n6n,
		"defaultValueDescription": _defaultValueDescriptionCmrrO1A,
		"description": _descriptionOw5LR7o
	}
		const _returnValuezHJvNpy = await _HelpxFk0SLr.argumentDescription(_argumentmlTQGJh)
	});

	it('test for Help', async () => {
		const _HelpRbdL45F = new Help()
		const _argChoicesQMv0tRU = {
		
	}
		const _arrayValuee51pWjm = "KxuLzMnlc9fSqz3WMO7ppxwRVlKNegcRCUyA8DshNiVfDC6TM8gkPPXtwcrsrhwegU3I";
		const _arrayValueky1qZP = -3.4460805943134245;
		const _returnValuesYSqMGL = [_arrayValueky1qZP]
		const _arrayValueJZjRVM = () => { return _returnValuesYSqMGL };
		const _arrayValuef7LzCWU = undefined;
		const _arrayValueIF0jUu = undefined;
		const _returnValueqfuK6VJ = [_arrayValuef7LzCWU, _arrayValueIF0jUu]
		const _arrayValuePE0RaBo = () => { return _returnValueqfuK6VJ };
		const _negategqOAhMn = [_arrayValuee51pWjm, _arrayValueJZjRVM, _arrayValuePE0RaBo]
		const _defaultValueRw0lNZ3 = undefined;
		const _defaultValueDescriptionTB73pxa = undefined;
		const _envVarv5V5MiR = -5.854841173038103;
		const _descriptionrzIQIa = null;
		const _optionb0mbxD5 = {
			"argChoices": _argChoicesQMv0tRU,
		"negate": _negategqOAhMn,
		"defaultValue": _defaultValueRw0lNZ3,
		"defaultValueDescription": _defaultValueDescriptionTB73pxa,
		"envVar": _envVarv5V5MiR,
		"description": _descriptionrzIQIa
	}
		const _returnValueIeaY63 = await _HelpRbdL45F.optionDescription(_optionb0mbxD5)
		const _returnValuewlN8gAv = true;
		const _descriptionJqmD3px = () => { return _returnValuewlN8gAv };
		const _cmdz8F3rQ = {
			"description": _descriptionJqmD3px
	}
		const _returnValueXwOyQ5W = await _HelpRbdL45F.subcommandDescription(_cmdz8F3rQ)
		const _cmdQ1V9Jzb = undefined;
		const _returnValueVz2gAnx = true;
		const _arrayValueGdSpl6k = () => { return _returnValueVz2gAnx };
		const _arrayValueCdLyUxW = null;
		const _returnValuex00cqe6 = [_arrayValueGdSpl6k, _arrayValueCdLyUxW]
		const _returnValueUIrq9Nm = () => { return _returnValuex00cqe6 };
		const _longestOptionTermLengthSIjP9st = () => { return _returnValueUIrq9Nm };
		const _returnValueoltEL0m = undefined;
		const _longestSubcommandTermLengthcWlmM9n = () => { return _returnValueoltEL0m };
		const _longestArgumentTermLengthXkT0Lna = 3.4798081697790177;
		const _helperRAE71DD = {
			"longestOptionTermLength": _longestOptionTermLengthSIjP9st,
		"longestSubcommandTermLength": _longestSubcommandTermLengthcWlmM9n,
		"longestArgumentTermLength": _longestArgumentTermLengthXkT0Lna
	}
		const _returnValueCHFcitd = await _HelpRbdL45F.padWidth(_cmdQ1V9Jzb, _helperRAE71DD)
		const _returnValueNgKOHS7 = 2.458293174756271;
		const _descriptionPPNX7EY = () => { return _returnValueNgKOHS7 };
		const _cmdP8ixnUc = {
			"description": _descriptionPPNX7EY
	}
		const _returnValuelGf26mC = await _HelpRbdL45F.commandDescription(_cmdP8ixnUc)
	});

	it('test for Help', async () => {
		const _Help7OfYV1 = new Help()
		const _argChoicesJoGcP3X = null;
		const _negateW6fgnjq = undefined;
		const _arrayValueH0ZCmum = undefined;
		const _defaultValueg9uE6zn = [_arrayValueH0ZCmum]
		const _defaultValueDescriptionicrJKsC = "8UNHWcGrTsCQ66NJhBdraRpJ2udyb3DLxCET97DXMfNeVsDPs8h6Yb6vIdIPFnpr";
		const _envVarE3wY6NU = undefined;
		const _arrayValuevYMCLgH = null;
		const _descriptionaFyJH2b = [_arrayValuevYMCLgH]
		const _optioniaBulO = {
			"argChoices": _argChoicesJoGcP3X,
		"negate": _negateW6fgnjq,
		"defaultValue": _defaultValueg9uE6zn,
		"defaultValueDescription": _defaultValueDescriptionicrJKsC,
		"envVar": _envVarE3wY6NU,
		"description": _descriptionaFyJH2b
	}
		const _returnValuehroPpR0 = await _Help7OfYV1.optionDescription(_optioniaBulO)
		const _cmdsd0FHkZ = null;
		const _returnValueh15zBhC = {
		
	}
		const _returnValueKXRvlDU = () => { return _returnValueh15zBhC };
		const _visibleArgumentsQK6hzgL = () => { return _returnValueKXRvlDU };
		const _returnValueWDBbNW = "IekxvSLOSH8WgBYfxQVAuldqAAhgUsolRNr8wdW";
		const _returnValueJX07txl = () => { return _returnValueWDBbNW };
		const _argumentTermyv4q69V = () => { return _returnValueJX07txl };
		const _helperdOxNEyy = {
			"visibleArguments": _visibleArgumentsQK6hzgL,
		"argumentTerm": _argumentTermyv4q69V
	}
		const _returnValueBMOShYy = await _Help7OfYV1.longestArgumentTermLength(_cmdsd0FHkZ, _helperdOxNEyy)
	});

	it('test for Help', async () => {
		const _HelpYOctU3g = new Help()
		const _returnValueK8iG77h = undefined;
		const _descriptionh4IiC2Y = () => { return _returnValueK8iG77h };
		const _cmdMFrWOKA = {
			"description": _descriptionh4IiC2Y
	}
		const _returnValueJQnwpel = await _HelpYOctU3g.commandDescription(_cmdMFrWOKA)
		const __namey4LOu4U = {
		
	}
		const __aliasesJoijMj9 = "qOap87yW6BDr";
		const _parentNANkC2q = true;
		const _returnValueDoTnnD1 = {
		
	}
		const _usagescIgwoI = () => { return _returnValueDoTnnD1 };
		const _cmdamvnNR0 = {
			"_name": __namey4LOu4U,
		"_aliases": __aliasesJoijMj9,
		"parent": _parentNANkC2q,
		"usage": _usagescIgwoI
	}
		const _returnValuefyHIiBL = await _HelpYOctU3g.commandUsage(_cmdamvnNR0)
		const __argsDescriptionIV2BCPz = {
		
	}
		const __argsdalUJhx = {
		
	}
		const _cmdzOfqVEE = {
			"_argsDescription": __argsDescriptionIV2BCPz,
		"_args": __argsdalUJhx
	}
		const _returnValuePi8NKu = await _HelpYOctU3g.visibleArguments(_cmdzOfqVEE)
		const _returnValuexaqfCJJ = {
		
	}
		const _matchrOI2jD8 = () => { return _returnValuexaqfCJJ };
		const _returnValueT37A1BX = -0.82219984849851;
		const _substrU710KLN = () => { return _returnValueT37A1BX };
		const _strChOryAr = {
			"match": _matchrOI2jD8,
		"substr": _substrU710KLN
	}
		const _widthHs8mkOp = 0.08087719650526282;
		const _indentMG8fk3F = 2.9088067628670444;
		const _minColumnWidthXW9pVEW = -6.90842058306205;
		const _returnValuerRVdBX = await _HelpYOctU3g.wrap(_strChOryAr, _widthHs8mkOp, _indentMG8fk3F, _minColumnWidthXW9pVEW)
		const _flagsla1gYiY = null;
		const _optionyZ7VdzH = {
			"flags": _flagsla1gYiY
	}
		const _returnValuegOJbwOK = await _HelpYOctU3g.optionTerm(_optionyZ7VdzH)
	});

	it('test for Help', async () => {
		const _HelpSm5UaU6 = new Help()
		const _arrayValueMt5AUaK = "QoZOSzkUB";
		const _arrayValueRagku5s = null;
		const _arrayValueueVZMhf = "eKV4bAniwZLWmK4j3ouTk4auNmHBJpWeQmN7EMGUg89qyUU4zwmS1ovHimtxJLeO8xLoWB1SZsABhIobRNRyxjYjBwz3jXS";
		const _arrayValueV63nx2 = [_arrayValueMt5AUaK, _arrayValueRagku5s, _arrayValueueVZMhf]
		const _arrayValuepTGE6Ew = "fhxa8iobpaD44NcX1vCgFAcE";
		const _commandsiwfoGnA = [_arrayValueV63nx2, _arrayValuepTGE6Ew]
		const _returnValuegnf2sZ9 = undefined;
		const __hasImplicitHelpCommandaO7Ah3r = () => { return _returnValuegnf2sZ9 };
		const __helpCommandnameAndArgs5TticS = null;
		const _arrayValueTjV4vlR = "oCjObCNpiJvFxStyqSsaeksfZ8GPMUIvHIjhkOQG";
		const _arrayValuedSwjspQ = 0.666791402496866;
		const _arrayValueAX3u9A = [_arrayValuedSwjspQ]
		const _arrayValueJYSCO8v = []
		const _arrayValueBskSscG = {
		
	}
		const _arrayValuelyt4jla = undefined;
		const _arrayValueDvLkiFV = "4u";
		const _returnValueNxNS8hW = [_arrayValueJYSCO8v, _arrayValueBskSscG, _arrayValuelyt4jla, _arrayValueDvLkiFV]
		const _arrayValuechgkg0m = () => { return _returnValueNxNS8hW };
		const _arrayValueIIXnMh5 = false;
		const _createCommandKwBunCi = [_arrayValueTjV4vlR, _arrayValueAX3u9A, _arrayValuechgkg0m, _arrayValueIIXnMh5]
		const __helpCommandDescriptiony25UpQI = -3.060057007177482;
		const _cmdM8sPKrd = {
			"commands": _commandsiwfoGnA,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandaO7Ah3r,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgs5TticS,
		"createCommand": _createCommandKwBunCi,
		"_helpCommandDescription": __helpCommandDescriptiony25UpQI
	}
		const _returnValueTndiZwk = await _HelpSm5UaU6.visibleCommands(_cmdM8sPKrd)
		const _returnValueibjqdl = undefined;
		const _matchn6BXZF = () => { return _returnValueibjqdl };
		const _returnValueiYcqxVH = null;
		const _substrE0RoVO = () => { return _returnValueiYcqxVH };
		const _stroywXss = {
			"match": _matchn6BXZF,
		"substr": _substrE0RoVO
	}
		const _widthVU04ah8 = 4.540284133875028;
		const _indentrlMEZCN = 6.211343462374533;
		const _minColumnWidthLNPx2E4 = -6.4746385500225925;
		const _returnValuesVpJV2U = await _HelpSm5UaU6.wrap(_stroywXss, _widthVU04ah8, _indentrlMEZCN, _minColumnWidthLNPx2E4)
		const _argChoicesnTZdVFM = {
		
	}
		const _defaultValueIfErBJ = undefined;
		const _defaultValueDescriptionkDmBn4q = 5.01505636259164;
		const _descriptionveFySIA = "K75OHcgyDjnmuWbfPhim8fTvCTf1SOrlsfyHTh9ipR5v9XU9aGDNoErLHFKODZqeAcz2LzI5jmSAfH6gV9qikWwm5TMvaLYY";
		const _argumentL6gnbr5 = {
			"argChoices": _argChoicesnTZdVFM,
		"defaultValue": _defaultValueIfErBJ,
		"defaultValueDescription": _defaultValueDescriptionkDmBn4q,
		"description": _descriptionveFySIA
	}
		const _returnValueScBkgyy = await _HelpSm5UaU6.argumentDescription(_argumentL6gnbr5)
	});

	it('test for Help', async () => {
		const _HelpgGOZBZn = new Help()
		const _argChoicesMS5kj3Y = []
		const _defaultValueQxwn61O = undefined;
		const _defaultValueDescriptionYMxKqrf = 5.568998568928837;
		const _descriptionL0C54p = null;
		const _argumentuLyZ6H = {
			"argChoices": _argChoicesMS5kj3Y,
		"defaultValue": _defaultValueQxwn61O,
		"defaultValueDescription": _defaultValueDescriptionYMxKqrf,
		"description": _descriptionL0C54p
	}
		const _returnValuezZO8PZf = await _HelpgGOZBZn.argumentDescription(_argumentuLyZ6H)
		const _optionsaZSLS39 = {
		
	}
		const __hasHelpOptionKSvLsHP = null;
		const _arrayValueZ41iu9Y = {
		
	}
		const _arrayValueoiYnNze = "R3ep3ACt9HHrZY55dRzuqQbRLILRol7FujhAORLxp5akcquzQh8f8mngPEShhwpht0Yx2wXuWZh";
		const _arrayValuezvH1juU = []
		const _arrayValueRMWXeU = [_arrayValuezvH1juU]
		const _arrayValuetbWUNbD = [_arrayValueZ41iu9Y, _arrayValueoiYnNze, _arrayValueRMWXeU]
		const _arrayValueSHoICcB = true;
		const __helpShortFlagMjGcj7F = [_arrayValuetbWUNbD, _arrayValueSHoICcB]
		const _returnValuem5Km8Mx = 4.6934145019213;
		const __findOptionqM7vF6w = () => { return _returnValuem5Km8Mx };
		const __helpLongFlagSr8g3zq = 8.544744698222615;
		const _returnValueh17csaV = "NbJLBwSQR2pE72Rr7aAJpHEhBEGl6Mq3BrzR";
		const _createOptionFNb143 = () => { return _returnValueh17csaV };
		const __helpDescriptionRP32Qjt = false;
		const __helpFlagsv3ups9P = false;
		const _cmdXqtWYUH = {
			"options": _optionsaZSLS39,
		"_hasHelpOption": __hasHelpOptionKSvLsHP,
		"_helpShortFlag": __helpShortFlagMjGcj7F,
		"_findOption": __findOptionqM7vF6w,
		"_helpLongFlag": __helpLongFlagSr8g3zq,
		"createOption": _createOptionFNb143,
		"_helpDescription": __helpDescriptionRP32Qjt,
		"_helpFlags": __helpFlagsv3ups9P
	}
		const _returnValuezp3BTH3 = await _HelpgGOZBZn.visibleOptions(_cmdXqtWYUH)
		const _argChoicesLT1aFat = {
		
	}
		const _negatekWTh2Ut = "2BdGR9kdBDILcVnUT8TtOkcxCgjiEmn5f4nuxox5gSjR6tt9RYG0NaYLtd20vuGpIrK1DYYAYkfvVxK2mnYPC6k";
		const _defaultValueUxThCA = undefined;
		const _defaultValueDescriptioniFMOmUJ = null;
		const _envVarxuMzNt0 = undefined;
		const _returnValueBAXg86 = "hExWgBAYST4Lj1hsPq9erBWh11nYnliyufj1DxQUfhwnPdEp5fzbhGmn4DKqK0RJlByCQbbNE5vyABpDB6wtkS";
		const _returnValueQM1OH9b = () => { return _returnValueBAXg86 };
		const _descriptionKpgrb7y = () => { return _returnValueQM1OH9b };
		const _optionoL0a8cC = {
			"argChoices": _argChoicesLT1aFat,
		"negate": _negatekWTh2Ut,
		"defaultValue": _defaultValueUxThCA,
		"defaultValueDescription": _defaultValueDescriptioniFMOmUJ,
		"envVar": _envVarxuMzNt0,
		"description": _descriptionKpgrb7y
	}
		const _returnValuedMWoWV6 = await _HelpgGOZBZn.optionDescription(_optionoL0a8cC)
		const _arrayValueAtJEma3 = []
		const _returnValuehwbRj6N = -3.786053708916338;
		const _arrayValuesyo05TI = () => { return _returnValuehwbRj6N };
		const _cmdIEGiDXU = [_arrayValueAtJEma3, _arrayValuesyo05TI]
		const _visibleArgumentsHz0vAzO = false;
		const _returnValueChWblu = false;
		const _argumentTermlN6Sxm6 = () => { return _returnValueChWblu };
		const _helperscblylA = {
			"visibleArguments": _visibleArgumentsHz0vAzO,
		"argumentTerm": _argumentTermlN6Sxm6
	}
		const _returnValuelWc0oKN = await _HelpgGOZBZn.longestArgumentTermLength(_cmdIEGiDXU, _helperscblylA)
	});

	it('test for Help', async () => {
		const _Helpjpkr4v7 = new Help()
		const _commandshR4Njf = []
		const _returnValuejD3IE77 = {
		
	}
		const __hasImplicitHelpCommandl8KPtLr = () => { return _returnValuejD3IE77 };
		const __helpCommandnameAndArgsPv5f57Z = {
		
	}
		const _returnValueIGbBnM2 = -5.171580560150817;
		const _createCommandVyJQ7hP = () => { return _returnValueIGbBnM2 };
		const __helpCommandDescriptionQrLaeDa = "9o9ptxwrMMgiN3pYfHiKfHATjYPTNKuRXl56V3YC0Rd3AvzkvCB6N7tKYbnbV5eBgKylbHrW1O9p";
		const _cmdBzvT0So = {
			"commands": _commandshR4Njf,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandl8KPtLr,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsPv5f57Z,
		"createCommand": _createCommandVyJQ7hP,
		"_helpCommandDescription": __helpCommandDescriptionQrLaeDa
	}
		const _returnValue901whW = await _Helpjpkr4v7.visibleCommands(_cmdBzvT0So)
	});

	it('test for Help', async () => {
		const _HelpX6Wbcvz = new Help()
		const _arrayValuehaFbN5x = 1.4284297989878816;
		const _arrayValueXqn2cfg = undefined;
		const _argChoicesGDKZN99 = [_arrayValuehaFbN5x, _arrayValueXqn2cfg]
		const _defaultValueryVQr9L = undefined;
		const _defaultValueDescriptionF7mHkhP = null;
		const _descriptioniDlBVfY = "qqJjiIyoTAD5h2YbiQeEPbGKvYE7nCVZW";
		const _argumentQs1EJvT = {
			"argChoices": _argChoicesGDKZN99,
		"defaultValue": _defaultValueryVQr9L,
		"defaultValueDescription": _defaultValueDescriptionF7mHkhP,
		"description": _descriptioniDlBVfY
	}
		const _returnValuextBgNp = await _HelpX6Wbcvz.argumentDescription(_argumentQs1EJvT)
		const _argChoicesngpun8P = {
		
	}
		const _negatefsgvu9 = 1.2385243173780385;
		const _defaultValueSE4kFDY = undefined;
		const _defaultValueDescriptions1gvfIU = "wNvcklkoseCZikSjNrnYq4V7fQ13XSMQtfCT6pJR7RdbDLVwweEs7bq94cwWG3V5l4eo9xNJj5JCjJgS9EF1jr2n5DpZpxNWy";
		const _envVarxNXGlg = undefined;
		const _arrayValueBBeE8HA = null;
		const _arrayValueRfCvQoD = {
		
	}
		const _arrayValueikcrin = undefined;
		const _arrayValueMSl4VtY = undefined;
		const _arrayValueenTOTmO = null;
		const _arrayValueTjk8n7o = {
		
	}
		const _arrayValuevCSlwqW = [_arrayValueMSl4VtY, _arrayValueenTOTmO, _arrayValueTjk8n7o]
		const _arrayValuesfDeSkX = [_arrayValueRfCvQoD, _arrayValueikcrin, _arrayValuevCSlwqW]
		const _arrayValueohFpdj5 = "I46gMC5XWdz3KzCrT31Qes55YqPf";
		const _descriptionfYB7NjB = [_arrayValueBBeE8HA, _arrayValuesfDeSkX, _arrayValueohFpdj5]
		const _optionPKdR8ob = {
			"argChoices": _argChoicesngpun8P,
		"negate": _negatefsgvu9,
		"defaultValue": _defaultValueSE4kFDY,
		"defaultValueDescription": _defaultValueDescriptions1gvfIU,
		"envVar": _envVarxNXGlg,
		"description": _descriptionfYB7NjB
	}
		const _returnValueCwbdndW = await _HelpX6Wbcvz.optionDescription(_optionPKdR8ob)
		const __argsDescriptioniOyIkst = {
		
	}
		const __argsocxlOj = {
		
	}
		const _cmduvJshsy = {
			"_argsDescription": __argsDescriptioniOyIkst,
		"_args": __argsocxlOj
	}
		const _returnValueS1pdRe2 = await _HelpX6Wbcvz.visibleArguments(_cmduvJshsy)
	});
})