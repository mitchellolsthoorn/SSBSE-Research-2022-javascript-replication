export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Help2cxywJ = new Help()
		const _descriptionPKMwde2 = undefined;
		const _cmddTVT9Ap = {
			"description": _descriptionPKMwde2
	}
		const _returnValueUSMUaUM = await _Help2cxywJ.commandDescription(_cmddTVT9Ap)
		const _returnValue1WOx5v = undefined;
		const _descriptionCYo8vPG = () => { return _returnValue1WOx5v };
		const _cmdHGWNgjm = {
			"description": _descriptionCYo8vPG
	}
		const _returnValueuLQ87rC = await _Help2cxywJ.commandDescription(_cmdHGWNgjm)
		const __argsSUJencj = {
		
	}
		const __nameHOv5RE = null;
		const __aliasesG410d2X = {
		
	}
		const _optionsv68BCym = {
		
	}
		const _cmdYOrwXji = {
			"_args": __argsSUJencj,
		"_name": __nameHOv5RE,
		"_aliases": __aliasesG410d2X,
		"options": _optionsv68BCym
	}
		const _returnValueHg6SlWy = await _Help2cxywJ.subcommandTerm(_cmdYOrwXji)
		const _optionGDztPTD = 5.466927321147679;
		const _returnValuePxTxuOp = await _Help2cxywJ.optionTerm(_optionGDztPTD)
	});

	it('test for Help', async () => {
		const _HelpWdrvs1A = new Help()
		const _cmdpqZ3k0D = undefined;
		const _returnValuerAT0DwD = "orYPKWIRNwfUXYA3J1crhMdeZguuETs2VMRnuWN7Ipq";
		const _longestOptionTermLengthASErro = () => { return _returnValuerAT0DwD };
		const _returnValueDNZ5xO4 = undefined;
		const _returnValueDtfYzhq = () => { return _returnValueDNZ5xO4 };
		const _longestSubcommandTermLengthuUNArCl = () => { return _returnValueDtfYzhq };
		const _returnValuewLpNi52 = undefined;
		const _longestArgumentTermLengthituzxdF = () => { return _returnValuewLpNi52 };
		const _helperT2um0P = {
			"longestOptionTermLength": _longestOptionTermLengthASErro,
		"longestSubcommandTermLength": _longestSubcommandTermLengthuUNArCl,
		"longestArgumentTermLength": _longestArgumentTermLengthituzxdF
	}
		const _returnValueSC4yHTQ = await _HelpWdrvs1A.padWidth(_cmdpqZ3k0D, _helperT2um0P)
		const _cmdfDHh8k8 = null;
		const _returnValuealxP6K6 = true;
		const _visibleOptionsjGZMNla = () => { return _returnValuealxP6K6 };
		const _returnValueD1wAjrJ = 3.5907646309864454;
		const _optionTermJy1hUDy = () => { return _returnValueD1wAjrJ };
		const _helpergNMB8qV = {
			"visibleOptions": _visibleOptionsjGZMNla,
		"optionTerm": _optionTermJy1hUDy
	}
		const _returnValue1mL4Rk = await _HelpWdrvs1A.longestOptionTermLength(_cmdfDHh8k8, _helpergNMB8qV)
		const _argChoicesmtIhxcC = "fAHh99tHWDXgfYIJPvwuVYpp6nJghXgQNecIUqTOzrzKRagAj224p5Xvp0Habq6XndZVlB2C91UjPQ4B8wG98FUovSRXn";
		const _negateSnG1mLN = {
		
	}
		const _defaultValueR1ZXsbx = "VP5Ux4Evo3KBizBswg1xsjU8loLzpjiq";
		const _defaultValueDescriptioneV5mAfH = "wfnEeG349aliStIzQpO4J1fOi1a77Y1RHJLBjZIgLv87eDvhVts";
		const _envVarr1uufAe = undefined;
		const _descriptioncN0SXWO = undefined;
		const _optionRTGMTHW = {
			"argChoices": _argChoicesmtIhxcC,
		"negate": _negateSnG1mLN,
		"defaultValue": _defaultValueR1ZXsbx,
		"defaultValueDescription": _defaultValueDescriptioneV5mAfH,
		"envVar": _envVarr1uufAe,
		"description": _descriptioncN0SXWO
	}
		const _returnValueLttCJE9 = await _HelpWdrvs1A.optionDescription(_optionRTGMTHW)
		const _returnValue3IqTl6 = null;
		const _descriptionfZOdye7 = () => { return _returnValue3IqTl6 };
		const _cmdrPJjLCP = {
			"description": _descriptionfZOdye7
	}
		const _returnValueq39aZu = await _HelpWdrvs1A.subcommandDescription(_cmdrPJjLCP)
		const _cmdsHFfVU = -7.077662487947719;
		const _sortSubcommandsQfqBj5N = "E9w88aVQ5RnHzesVtx6x2vv5vuUMrKLAcB2WpbcySh8rVPtG";
		const _returnValueud5JoRZ = true;
		const _subcommandTermeRFKhn2 = () => { return _returnValueud5JoRZ };
		const _helpervUf2baD = {
			"sortSubcommands": _sortSubcommandsQfqBj5N,
		"subcommandTerm": _subcommandTermeRFKhn2
	}
		const _returnValuec0b2SHQ = await _HelpWdrvs1A.longestSubcommandTermLength(_cmdsHFfVU, _helpervUf2baD)
	});

	it('test for Help', async () => {
		const _HelpsjZIDp = new Help()
		const __argsDescriptionph3SH4C = {
		
	}
		const __argsdSroCrY = {
		
	}
		const _cmdlLJiz3y = {
			"_argsDescription": __argsDescriptionph3SH4C,
		"_args": __argsdSroCrY
	}
		const _returnValueYGTSnJz = await _HelpsjZIDp.visibleArguments(_cmdlLJiz3y)
		const _returnValueTRzP7bY = "VE7tErusegAkoqIM3XRnygj3FZaKR1i9MEXcu4ppr8PwG6EfKXqUl3TeBqSFd08ZAw1qe";
		const _matcheXGs2aS = () => { return _returnValueTRzP7bY };
		const _returnValueSF7gQxW = "2yn5XVj4VqsoTAjZkCyhWztEEQNwi6H8YHcloa8cOicHzOcdQWsVDmHhCeqfCi0";
		const _substrA8mPZuL = () => { return _returnValueSF7gQxW };
		const _strPVK13o5 = {
			"match": _matcheXGs2aS,
		"substr": _substrA8mPZuL
	}
		const _widthASJAgbt = false;
		const _indentZlHquAX = 3.2781296045695303;
		const _minColumnWidthja2waFk = 6.955756752612984;
		const _returnValueYV274gX = await _HelpsjZIDp.wrap(_strPVK13o5, _widthASJAgbt, _indentZlHquAX, _minColumnWidthja2waFk)
		const _argChoicescd6Dv5 = {
		
	}
		const _negateKZEO9yG = {
		
	}
		const _defaultValueEnzrtzl = "oXayNWoydjBbdmxcexSZRF5BW1SK3fDntFUcZ00rd3htgcuzF6nv0KpPijqw2Ekc1KOz4d0LtgGVRfPLKbUMkxrsx6T1K";
		const _arrayValuefJlVR2w = 1.3168574944473441;
		const _arrayValuelw9NDUo = false;
		const _arrayValueVjnAsFH = undefined;
		const _defaultValueDescriptionSYkozw9 = [_arrayValuefJlVR2w, _arrayValuelw9NDUo, _arrayValueVjnAsFH]
		const _envVarYaCpt5u = undefined;
		const _returnValueZfNqvt3 = {
		
	}
		const _returnValueZZc2w7b = () => { return _returnValueZfNqvt3 };
		const _descriptiontdzOz11 = () => { return _returnValueZZc2w7b };
		const _optionNQaT6LO = {
			"argChoices": _argChoicescd6Dv5,
		"negate": _negateKZEO9yG,
		"defaultValue": _defaultValueEnzrtzl,
		"defaultValueDescription": _defaultValueDescriptionSYkozw9,
		"envVar": _envVarYaCpt5u,
		"description": _descriptiontdzOz11
	}
		const _returnValueiJmv9y0 = await _HelpsjZIDp.optionDescription(_optionNQaT6LO)
		const __nameM8hGRO4 = {
		
	}
		const __aliasesTvkm7yj = {
		
	}
		const _parentBo4kqI4 = {
		
	}
		const _returnValueTFugV0Y = []
		const _usagejeLhoSM = () => { return _returnValueTFugV0Y };
		const _cmdc6OX5IX = {
			"_name": __nameM8hGRO4,
		"_aliases": __aliasesTvkm7yj,
		"parent": _parentBo4kqI4,
		"usage": _usagejeLhoSM
	}
		const _returnValueyDUKiKp = await _HelpsjZIDp.commandUsage(_cmdc6OX5IX)
	});

	it('test for Help', async () => {
		const _Helpg1iIoFF = new Help()
		const __namedzN6qFE = {
		
	}
		const __aliasesxYUNEe = {
		
	}
		const _returnValuehFC23vc = null;
		const _parentSIH20Pk = () => { return _returnValuehFC23vc };
		const _returnValueryrnHFh = 4.201450225824564;
		const _usageCgGv5Hm = () => { return _returnValueryrnHFh };
		const _cmdOoLsdKu = {
			"_name": __namedzN6qFE,
		"_aliases": __aliasesxYUNEe,
		"parent": _parentSIH20Pk,
		"usage": _usageCgGv5Hm
	}
		const _returnValueBZDlwpg = await _Helpg1iIoFF.commandUsage(_cmdOoLsdKu)
	});

	it('test for Help', async () => {
		const _Helpw27RDAJ = new Help()
		const _argumentSSdRkgq = 5.95500338278595;
		const _returnValuexqUA4vE = await _Helpw27RDAJ.argumentDescription(_argumentSSdRkgq)
		const _matchQqQP2dh = {
		
	}
		const _arrayValueJ6uuX0G = false;
		const _arrayValueTDNKj53 = [_arrayValueJ6uuX0G]
		const _returnValuey4ZtuA9 = [_arrayValueTDNKj53]
		const _substrx62hDCH = () => { return _returnValuey4ZtuA9 };
		const _strSh8JmJR = {
			"match": _matchQqQP2dh,
		"substr": _substrx62hDCH
	}
		const _widthIKJzocq = -4.932335715854488;
		const _indentyS2Z8gg = false;
		const _minColumnWidthZi832Jd = -6.20013428264174;
		const _returnValuetRZU55Z = await _Helpw27RDAJ.wrap(_strSh8JmJR, _widthIKJzocq, _indentyS2Z8gg, _minColumnWidthZi832Jd)
	});

	it('test for Help', async () => {
		const _HelpK6iqxq9 = new Help()
		const _returnValueIleKwqX = "flDX6neu8BkMCP5w0aMrFQ4qMuULKVUgWuRf0dMPU2LcK0iod2Wd9ZmvVyk7tm8Aptxvnkaosstba0tPb";
		const _nameoC45F7E = () => { return _returnValueIleKwqX };
		const _argumentuvYJhMm = {
			"name": _nameoC45F7E
	}
		const _returnValuezllwYxz = await _HelpK6iqxq9.argumentTerm(_argumentuvYJhMm)
		const _returnValuekeFixla = "ufj742bvuSMvTWTDMRgI70wHUOyInUVKLYpSxWHbDH7b";
		const _nameNdfFP14 = () => { return _returnValuekeFixla };
		const _argumentQRHJv6 = {
			"name": _nameNdfFP14
	}
		const _returnValuev5C3zrE = await _HelpK6iqxq9.argumentTerm(_argumentQRHJv6)
		const _returnValueUkqQ176 = undefined;
		const _nameTiX6jwa = () => { return _returnValueUkqQ176 };
		const _argumenttOjdWjG = {
			"name": _nameTiX6jwa
	}
		const _returnValuenW1KkCo = await _HelpK6iqxq9.argumentTerm(_argumenttOjdWjG)
		const _returnValuenPSR0X7 = true;
		const _descriptionVxNHcCw = () => { return _returnValuenPSR0X7 };
		const _cmdP2w3DU = {
			"description": _descriptionVxNHcCw
	}
		const _returnValueaRDmbsT = await _HelpK6iqxq9.commandDescription(_cmdP2w3DU)
	});

	it('test for Help', async () => {
		const _Helpb2r94Xs = new Help()
		const __argsXNLEF7z = {
		
	}
		const __nameksxsPO = 3.2307560508692212;
		const __aliasescTTqzc2 = {
		
	}
		const _optionsNhZnSIP = {
		
	}
		const _cmda7hIqmh = {
			"_args": __argsXNLEF7z,
		"_name": __nameksxsPO,
		"_aliases": __aliasescTTqzc2,
		"options": _optionsNhZnSIP
	}
		const _returnValueKaxcaLi = await _Helpb2r94Xs.subcommandTerm(_cmda7hIqmh)
	});

	it('test for Help', async () => {
		const _HelprI1khvo = new Help()
		const _descriptioniWAy81i = true;
		const _cmdTFhNhwy = {
			"description": _descriptioniWAy81i
	}
		const _returnValues3MwEM = await _HelprI1khvo.subcommandDescription(_cmdTFhNhwy)
		const _cmdm3HHbbm = true;
		const _returnValuezCYzSwZ = await _HelprI1khvo.commandUsage(_cmdm3HHbbm)
		const _flagsDsQlrzz = false;
		const _optionLCtUGMx = {
			"flags": _flagsDsQlrzz
	}
		const _returnValueER8g5ND = await _HelprI1khvo.optionTerm(_optionLCtUGMx)
		const _flagsFeBIp0j = undefined;
		const _optionWHj1BlN = {
			"flags": _flagsFeBIp0j
	}
		const _returnValuegTOWLE = await _HelprI1khvo.optionTerm(_optionWHj1BlN)
		const _cmdob2TfoQ = null;
		const _returnValuepoJXfrO = undefined;
		const _visibleArgumentsGuONjE4 = () => { return _returnValuepoJXfrO };
		const _returnValueP3eNHyt = "mFGhlXIJqhiJelNAGyCpQ9x44OdMgUkJizjXfXeCX4kzzN9xPeCDKwGUbM6uUGNL4Zhze4vUqifDsUvh413xXjV";
		const _argumentTerma01JzYR = () => { return _returnValueP3eNHyt };
		const _helperRdcJwZH = {
			"visibleArguments": _visibleArgumentsGuONjE4,
		"argumentTerm": _argumentTerma01JzYR
	}
		const _returnValuefegcjhR = await _HelprI1khvo.longestArgumentTermLength(_cmdob2TfoQ, _helperRdcJwZH)
	});

	it('test for Help', async () => {
		const _HelpDa224KA = new Help()
		const _arrayValueV2w40Xk = null;
		const _cmdlcgzU8S = [_arrayValueV2w40Xk]
		const _returnValuefACwHsS = true;
		const _visibleArgumentsG7ShQyL = () => { return _returnValuefACwHsS };
		const _returnValueG0e16qk = undefined;
		const _argumentTermv23tQMy = () => { return _returnValueG0e16qk };
		const _helperlbJkMO2 = {
			"visibleArguments": _visibleArgumentsG7ShQyL,
		"argumentTerm": _argumentTermv23tQMy
	}
		const _returnValueqiOJTP = await _HelpDa224KA.longestArgumentTermLength(_cmdlcgzU8S, _helperlbJkMO2)
		const _cmdQuWWu0w = "pXOc3cKdka5iREkozRkvDQ8BZMiCV2Pdw9cw5SCawlxxogh7ZSy7XJwL3eDKc8ekENBAkCLP92OIBPm";
		const _sortSubcommandsim2F5I = null;
		const _arrayValueGR2SE3h = []
		const _returnValueRa5BFI = [_arrayValueGR2SE3h]
		const _subcommandTermaQcIwRe = () => { return _returnValueRa5BFI };
		const _helpervUHOOFt = {
			"sortSubcommands": _sortSubcommandsim2F5I,
		"subcommandTerm": _subcommandTermaQcIwRe
	}
		const _returnValuei1s7jNP = await _HelpDa224KA.longestSubcommandTermLength(_cmdQuWWu0w, _helpervUHOOFt)
		const _cmdVPBR5st = false;
		const _sortSubcommandsSWQaixC = []
		const _returnValuehDDzVCz = -2.3989531204452197;
		const _subcommandTermwt8GK4x = () => { return _returnValuehDDzVCz };
		const _helperyJmyyf0 = {
			"sortSubcommands": _sortSubcommandsSWQaixC,
		"subcommandTerm": _subcommandTermwt8GK4x
	}
		const _returnValueIPN70Wb = await _HelpDa224KA.formatHelp(_cmdVPBR5st, _helperyJmyyf0)
		const _cmdCPUGZwx = null;
		const _returnValuee0H7JmC = await _HelpDa224KA.commandDescription(_cmdCPUGZwx)
	});

	it('test for Help', async () => {
		const _HelpwpTy3Kf = new Help()
		const _returnValueQaMaaSR = "bS4tHsqjf73hneJLuL8RosMd4TLj9Q3CPadrLqjadeCFkhEeQqlCuFIwju";
		const _matchRrg6itn = () => { return _returnValueQaMaaSR };
		const _returnValueJzRqruT = -3.2473549563837736;
		const _substrPQsnMuG = () => { return _returnValueJzRqruT };
		const _strIuVjD8D = {
			"match": _matchRrg6itn,
		"substr": _substrPQsnMuG
	}
		const _widthGUWxMy = -7.040960162082937;
		const _indentkKsCCBk = -5.436561086119939;
		const _minColumnWidthAfWWoIi = -0.582667265507455;
		const _returnValuenNboWJn = await _HelpwpTy3Kf.wrap(_strIuVjD8D, _widthGUWxMy, _indentkKsCCBk, _minColumnWidthAfWWoIi)
		const _returnValuemEiM2nJ = "xI0Sm9JbMivJI5s9u41LDj8Aemz9phi7aBCPIA4zLxNHXLr8TFcQQWT3BgJpdMnnmGo";
		const _namek2bAbdC = () => { return _returnValuemEiM2nJ };
		const _argumentWcRienS = {
			"name": _namek2bAbdC
	}
		const _returnValuekz9jXH3 = await _HelpwpTy3Kf.argumentTerm(_argumentWcRienS)
	});

	it('test for Help', async () => {
		const _HelpVBqoWq8 = new Help()
		const _arrayValueWQmRiuo = null;
		const _arrayValueV2RuU3l = [_arrayValueWQmRiuo]
		const _cmdaWBj9Ur = [_arrayValueV2RuU3l]
		const _arrayValueQMRRV2Y = undefined;
		const _arrayValuer7PDRvb = false;
		const _sortSubcommandsoIfqRHC = [_arrayValueQMRRV2Y, _arrayValuer7PDRvb]
		const _returnValuenJusjsO = "WmAI1k9A34DG";
		const _subcommandTermvt2rYuM = () => { return _returnValuenJusjsO };
		const _helpereid43oY = {
			"sortSubcommands": _sortSubcommandsoIfqRHC,
		"subcommandTerm": _subcommandTermvt2rYuM
	}
		const _returnValueGoFO0th = await _HelpVBqoWq8.longestSubcommandTermLength(_cmdaWBj9Ur, _helpereid43oY)
		const __nameu5faAIs = {
		
	}
		const __aliasesP1htmYX = "jWue5PyiXx8XtkzMsD12wwCBZzvTmAy36kvVC137CpbiFAZFolzcvSseyfiQIfcrra";
		const _parentk9fUDCR = {
		
	}
		const _returnValuedqAG4zv = null;
		const _usagea9RQAYv = () => { return _returnValuedqAG4zv };
		const _cmdtfoPiuv = {
			"_name": __nameu5faAIs,
		"_aliases": __aliasesP1htmYX,
		"parent": _parentk9fUDCR,
		"usage": _usagea9RQAYv
	}
		const _returnValueOkdqWZ5 = await _HelpVBqoWq8.commandUsage(_cmdtfoPiuv)
	});

	it('test for Help', async () => {
		const _Helpg0q62wz = new Help()
		const _argChoiceszUp92TA = {
		
	}
		const _defaultValuemot3ifA = undefined;
		const _returnValuefMPV0z = undefined;
		const _defaultValueDescriptioniIGlk2R = () => { return _returnValuefMPV0z };
		const _description5x5VSl = 7.614339062453507;
		const _argumentpjGzyVq = {
			"argChoices": _argChoiceszUp92TA,
		"defaultValue": _defaultValuemot3ifA,
		"defaultValueDescription": _defaultValueDescriptioniIGlk2R,
		"description": _description5x5VSl
	}
		const _returnValueQjPU8Pp = await _Helpg0q62wz.argumentDescription(_argumentpjGzyVq)
		const _cmdvEUiPcl = null;
		const _sortSubcommandsNtGRE6p = "VnxlwzSQ0c7lDZscgiwg1VbeGq5mMhgOetznhMVzB99fpvTc1TkvEfdFub6CWQb7u6EDNvvQwr";
		const _arrayValueEcZGeFZ = {
		
	}
		const _returnValuetLsEC6e = [_arrayValueEcZGeFZ]
		const _subcommandTermrmcfgDB = () => { return _returnValuetLsEC6e };
		const _helperZWx8dtR = {
			"sortSubcommands": _sortSubcommandsNtGRE6p,
		"subcommandTerm": _subcommandTermrmcfgDB
	}
		const _returnValuejYYtL44 = await _Helpg0q62wz.formatHelp(_cmdvEUiPcl, _helperZWx8dtR)
		const _argChoicesgI8ixI = {
		
	}
		const _negateiZ2yU1f = true;
		const _defaultValueSGHguRA = null;
		const _defaultValueDescriptiontPPA2zf = -0.19126110012934028;
		const _envVarlzRLcDE = undefined;
		const _descriptionpjfmS87 = undefined;
		const _optionjbr3Ep2 = {
			"argChoices": _argChoicesgI8ixI,
		"negate": _negateiZ2yU1f,
		"defaultValue": _defaultValueSGHguRA,
		"defaultValueDescription": _defaultValueDescriptiontPPA2zf,
		"envVar": _envVarlzRLcDE,
		"description": _descriptionpjfmS87
	}
		const _returnValueDGsJj4c = await _Helpg0q62wz.optionDescription(_optionjbr3Ep2)
		const _matchQOSXG6M = {
		
	}
		const _returnValueaEsxfxn = undefined;
		const _substrArekn9F = () => { return _returnValueaEsxfxn };
		const _strBhNO2Yt = {
			"match": _matchQOSXG6M,
		"substr": _substrArekn9F
	}
		const _widths2ZsFeK = 2.3320480214345825;
		const _indentaVlDaun = -5.142942352065405;
		const _minColumnWidthTZBTkja = undefined;
		const _returnValueufK7IXN = await _Helpg0q62wz.wrap(_strBhNO2Yt, _widths2ZsFeK, _indentaVlDaun, _minColumnWidthTZBTkja)
	});

	it('test for Help', async () => {
		const _HelpUXpHJty = new Help()
		const _returnValueDkKHT96 = undefined;
		const _nameSJocI9a = () => { return _returnValueDkKHT96 };
		const _argumentafJZvr = {
			"name": _nameSJocI9a
	}
		const _returnValuesdljws = await _HelpUXpHJty.argumentTerm(_argumentafJZvr)
		const _arrayValueWW6BKN4 = "v1xFYmYIS8qbHeUMV95JzZ8DVsACC6Y1hL997B7GBRYWxdzj03sglfnQDiYDvGFK5DFI12Ooqsi7j5R8SdpYPqEIbF1fh";
		const _arrayValuemFbXvfS = {
		
	}
		const _arrayValuetpORSaV = undefined;
		const _arrayValueMZGeDhN = undefined;
		const _returnValuet1MTQtP = [_arrayValueWW6BKN4, _arrayValuemFbXvfS, _arrayValuetpORSaV, _arrayValueMZGeDhN]
		const _nameUic1I3U = () => { return _returnValuet1MTQtP };
		const _argumentMom67yP = {
			"name": _nameUic1I3U
	}
		const _returnValues2XNaZo = await _HelpUXpHJty.argumentTerm(_argumentMom67yP)
		const _returnValuemzthik9 = null;
		const _arrayValueHoLdQO8 = () => { return _returnValuemzthik9 };
		const _arrayValueFkK80vV = -7.172049538874294;
		const _cmdj5Ef9lc = [_arrayValueHoLdQO8, _arrayValueFkK80vV]
		const _sortSubcommandsN7zlkT9 = undefined;
		const _arrayValueRx8iQ3s = undefined;
		const _returnValueI5eaeUt = [_arrayValueRx8iQ3s]
		const _subcommandTermLR4xm2 = () => { return _returnValueI5eaeUt };
		const _helperFvSZuj = {
			"sortSubcommands": _sortSubcommandsN7zlkT9,
		"subcommandTerm": _subcommandTermLR4xm2
	}
		const _returnValueHF46sFP = await _HelpUXpHJty.formatHelp(_cmdj5Ef9lc, _helperFvSZuj)
		const _argChoiceskLROJYB = {
		
	}
		const _arrayValuejKXlynF = undefined;
		const _arrayValuemK3C92Z = 8.345933591740618;
		const _arrayValuegytujtO = "KFpZZfwrECxCKKdI40TpXEZOHjrQ";
		const _defaultValue2nfpTK = [_arrayValuejKXlynF, _arrayValuemK3C92Z, _arrayValuegytujtO]
		const _defaultValueDescriptionrEd72RG = null;
		const _description4jqNCc = null;
		const _argumentWif9WR = {
			"argChoices": _argChoiceskLROJYB,
		"defaultValue": _defaultValue2nfpTK,
		"defaultValueDescription": _defaultValueDescriptionrEd72RG,
		"description": _description4jqNCc
	}
		const _returnValuezcJEqL = await _HelpUXpHJty.argumentDescription(_argumentWif9WR)
	});

	it('test for Help', async () => {
		const _HelpX4Rcl4m = new Help()
		const _optionske8I7xz = {
		
	}
		const __hasHelpOptionaO1DOHc = false;
		const __helpShortFlagVEfwmOP = null;
		const _arrayValueLGRV8se = "mMy16qKDPB5vx23JTRdO6KeIzUTt5svWFagJ9GNjU7hDWkFLHseBiQ7lR1abKYaPtVJfnC1HwJHfedQyczTRoWLfvnLxfXc7I";
		const _returnValueV01I1M = 2.32173142039958;
		const _arrayValueDwxfNGw = () => { return _returnValueV01I1M };
		const _returnValuea4UAVq = [_arrayValueLGRV8se, _arrayValueDwxfNGw]
		const __findOptionm0u6dSo = () => { return _returnValuea4UAVq };
		const __helpLongFlagB4RNHN = undefined;
		const _returnValueHGrlCqi = null;
		const _createOptionTgBqR2H = () => { return _returnValueHGrlCqi };
		const __helpDescriptionCDefDUE = 3.2982618869126146;
		const __helpFlagsgpumpxK = null;
		const _cmdNr3uh9O = {
			"options": _optionske8I7xz,
		"_hasHelpOption": __hasHelpOptionaO1DOHc,
		"_helpShortFlag": __helpShortFlagVEfwmOP,
		"_findOption": __findOptionm0u6dSo,
		"_helpLongFlag": __helpLongFlagB4RNHN,
		"createOption": _createOptionTgBqR2H,
		"_helpDescription": __helpDescriptionCDefDUE,
		"_helpFlags": __helpFlagsgpumpxK
	}
		const _returnValueWNskRzY = await _HelpX4Rcl4m.visibleOptions(_cmdNr3uh9O)
		const _argChoicesJYe7z8l = {
		
	}
		const _defaultValueD3ZRTsH = undefined;
		const _returnValueNMTncSE = "mwiUh2Rt";
		const _defaultValueDescriptionMXqvX6G = () => { return _returnValueNMTncSE };
		const _descriptionZh6sQDE = "ozbiaLQIfeXz3M2ZRqZNbysA9mpV6PjJptTRkIKhkcco9Fkv8WChfDjXKPgPsi9Voz1ASuDvB7MR";
		const _argumentIpWJrWB = {
			"argChoices": _argChoicesJYe7z8l,
		"defaultValue": _defaultValueD3ZRTsH,
		"defaultValueDescription": _defaultValueDescriptionMXqvX6G,
		"description": _descriptionZh6sQDE
	}
		const _returnValueou7WJOb = await _HelpX4Rcl4m.argumentDescription(_argumentIpWJrWB)
		const _commandsmNF7gZ = {
		
	}
		const _returnValueiRFdqPC = "cgmhh2iW2nlH9twNyIuScGWtWKg4cWuFZom6v1nMMPDm27bOiTh7wBLulv";
		const __hasImplicitHelpCommandVXwXPr = () => { return _returnValueiRFdqPC };
		const __helpCommandnameAndArgsoLKTJaD = {
		
	}
		const _returnValueKKEL3TQ = undefined;
		const _createCommandbEyvAJA = () => { return _returnValueKKEL3TQ };
		const __helpCommandDescriptionRHod93p = {
		
	}
		const _cmdpIh0h32 = {
			"commands": _commandsmNF7gZ,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandVXwXPr,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsoLKTJaD,
		"createCommand": _createCommandbEyvAJA,
		"_helpCommandDescription": __helpCommandDescriptionRHod93p
	}
		const _returnValuenDufDxS = await _HelpX4Rcl4m.visibleCommands(_cmdpIh0h32)
		const _returnValueOH2QXlC = null;
		const _match6XgrDQ = () => { return _returnValueOH2QXlC };
		const _returnValuekBwH1Gs = "oZgrRxRfeOvK3s2rsMOFVo6AqmLx1P7ku";
		const _substruhIyG8d = () => { return _returnValuekBwH1Gs };
		const _striDi5PhN = {
			"match": _match6XgrDQ,
		"substr": _substruhIyG8d
	}
		const _widthdYlHDnc = -0.24793999883124584;
		const _indentIGprOTs = 2.642435119542565;
		const _minColumnWidthuGGRHYZ = -7.1367691997490805;
		const _returnValueHUpihjf = await _HelpX4Rcl4m.wrap(_striDi5PhN, _widthdYlHDnc, _indentIGprOTs, _minColumnWidthuGGRHYZ)
		const _cmdmP6jmft = -4.8779976045801305;
		const _returnValueGzb6gcC = -1.6341937200469143;
		const _visibleOptionseBtG0NS = () => { return _returnValueGzb6gcC };
		const _returnValuedMtNYA = {
		
	}
		const _optionTermEGW1qx = () => { return _returnValuedMtNYA };
		const _helperOIOqRpU = {
			"visibleOptions": _visibleOptionseBtG0NS,
		"optionTerm": _optionTermEGW1qx
	}
		const _returnValueVdqwVpo = await _HelpX4Rcl4m.longestOptionTermLength(_cmdmP6jmft, _helperOIOqRpU)
	});

	it('test for Help', async () => {
		const _Helpc1D2Ih4 = new Help()
		const _cmdoBG5JNE = null;
		const _arrayValueTX8ExC = {
		
	}
		const _returnValuezB1FeE = [_arrayValueTX8ExC]
		const _visibleArgumentsne0q7ad = () => { return _returnValuezB1FeE };
		const _returnValuelopy2H = 6.134338706225204;
		const _argumentTermI59HTH = () => { return _returnValuelopy2H };
		const _helpereAaYqND = {
			"visibleArguments": _visibleArgumentsne0q7ad,
		"argumentTerm": _argumentTermI59HTH
	}
		const _returnValueJo4XeoF = await _Helpc1D2Ih4.longestArgumentTermLength(_cmdoBG5JNE, _helpereAaYqND)
		const _argChoicesGtH6Hls = {
		
	}
		const _negateBSzoKDM = null;
		const _defaultValueI0nXN6d = undefined;
		const _defaultValueDescriptiond4moPLW = 5.429692516895962;
		const _envVarkwC4OI4 = undefined;
		const _descriptionU7byIB = 5.452263667388305;
		const _optionJjJif2 = {
			"argChoices": _argChoicesGtH6Hls,
		"negate": _negateBSzoKDM,
		"defaultValue": _defaultValueI0nXN6d,
		"defaultValueDescription": _defaultValueDescriptiond4moPLW,
		"envVar": _envVarkwC4OI4,
		"description": _descriptionU7byIB
	}
		const _returnValuei6zkKuE = await _Helpc1D2Ih4.optionDescription(_optionJjJif2)
		const _cmdyzXIOKP = "OgBXs3P9PVzQafeUXW4xYwRsBqSWaw9";
		const _returnValue6x05tN = {
		
	}
		const _visibleOptionsCtMOaa5 = () => { return _returnValue6x05tN };
		const _returnValueTyqjN6k = "DkIsmDuqusyQZRb2M81q71aR8SzkQwfKagud6o";
		const _optionTermZRNfhT = () => { return _returnValueTyqjN6k };
		const _helperECtGqi = {
			"visibleOptions": _visibleOptionsCtMOaa5,
		"optionTerm": _optionTermZRNfhT
	}
		const _returnValuei8Jrsb3 = await _Helpc1D2Ih4.longestOptionTermLength(_cmdyzXIOKP, _helperECtGqi)
		const _cmda1YtI5U = null;
		const _returnValuedGkLiH = "H4v9EY6omBLwRACFeInrogDCz1OK1Bay1HT6yz7isG";
		const _visibleOptionssB2xo4x = () => { return _returnValuedGkLiH };
		const _returnValueBAzeMoB = -7.175827076679193;
		const _optionTermBXAiND3 = () => { return _returnValueBAzeMoB };
		const _helperfhoOMUL = {
			"visibleOptions": _visibleOptionssB2xo4x,
		"optionTerm": _optionTermBXAiND3
	}
		const _returnValueFLnuJ0V = await _Helpc1D2Ih4.longestOptionTermLength(_cmda1YtI5U, _helperfhoOMUL)
	});

	it('test for Help', async () => {
		const _HelpoA0eNNh = new Help()
		const _arrayValueKCn16qj = -1.0657756514483765;
		const _commandsNGYDDds = [_arrayValueKCn16qj]
		const _returnValuelWJ5jBZ = true;
		const __hasImplicitHelpCommandUg9Fbz3 = () => { return _returnValuelWJ5jBZ };
		const __helpCommandnameAndArgsKeJejg7 = {
		
	}
		const _returnValueeAbjXeg = "Putz2lgutwUQOAamd5qGcKsCOVcGA5pgdvpd1PgWZ6yn9JQp9pbqC4Nznqb4MS0WK5oR6H3bDGJPIMiIgGLSu38BT8A";
		const _createCommandqXib42f = () => { return _returnValueeAbjXeg };
		const _returnValuenUSGcO = undefined;
		const __helpCommandDescriptionjqW77fJ = () => { return _returnValuenUSGcO };
		const _cmdJdrlXD = {
			"commands": _commandsNGYDDds,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandUg9Fbz3,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsKeJejg7,
		"createCommand": _createCommandqXib42f,
		"_helpCommandDescription": __helpCommandDescriptionjqW77fJ
	}
		const _returnValuehHcsX1c = await _HelpoA0eNNh.visibleCommands(_cmdJdrlXD)
		const _commandsWelz0Ni = {
		
	}
		const _returnValuezuUsD7P = undefined;
		const __hasImplicitHelpCommandHtGRlKc = () => { return _returnValuezuUsD7P };
		const __helpCommandnameAndArgsn5G3F8y = {
		
	}
		const _arrayValuekD0eZ3 = undefined;
		const _arrayValueQCUe4e0 = false;
		const _arrayValuehGKZrI3 = [_arrayValueQCUe4e0]
		const _returnValueGlCIfzo = [_arrayValuekD0eZ3, _arrayValuehGKZrI3]
		const _createCommandKRyT7u = () => { return _returnValueGlCIfzo };
		const __helpCommandDescriptionvcxAzM = true;
		const _cmdZXnnBDw = {
			"commands": _commandsWelz0Ni,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandHtGRlKc,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsn5G3F8y,
		"createCommand": _createCommandKRyT7u,
		"_helpCommandDescription": __helpCommandDescriptionvcxAzM
	}
		const _returnValueGx033mN = await _HelpoA0eNNh.visibleCommands(_cmdZXnnBDw)
		const _arrayValuecw5qvbE = null;
		const _arrayValuefb6S5ZR = -1.3197701956801495;
		const _returnValuevWBukzr = [_arrayValuecw5qvbE, _arrayValuefb6S5ZR]
		const _namehinGs53 = () => { return _returnValuevWBukzr };
		const _argumentxbYoNUi = {
			"name": _namehinGs53
	}
		const _returnValueQNAtYAA = await _HelpoA0eNNh.argumentTerm(_argumentxbYoNUi)
		const _arrayValueqjvfOc = "mSvuJis7sjJ4yHnnDMGOBt3Oq7h9vYFG1bOjsF0LoaNsBhyNZ53t6SCTX5p";
		const _arrayValuepYTBuE6 = undefined;
		const _arrayValuezytLOYj = undefined;
		const _cmdD9Xz52X = [_arrayValueqjvfOc, _arrayValuepYTBuE6, _arrayValuezytLOYj]
		const _sortSubcommandsskYAw7 = "1JucBPhzh6";
		const _returnValuevT5UfYj = -3.688282970083188;
		const _subcommandTermTBGifAk = () => { return _returnValuevT5UfYj };
		const _helperHV8JcpP = {
			"sortSubcommands": _sortSubcommandsskYAw7,
		"subcommandTerm": _subcommandTermTBGifAk
	}
		const _returnValuejEuSYh = await _HelpoA0eNNh.longestSubcommandTermLength(_cmdD9Xz52X, _helperHV8JcpP)
	});

	it('test for Help', async () => {
		const _HelpkTtWBrm = new Help()
		const _optionQpBWFvd = undefined;
		const _returnValueXrb7l9B = await _HelpkTtWBrm.optionTerm(_optionQpBWFvd)
	});

	it('test for Help', async () => {
		const _HelpAmaY1c = new Help()
		const _argChoiceshMrPlIo = {
		
	}
		const _negateITgt5Z9 = {
		
	}
		const _defaultValueAFItvp = undefined;
		const _defaultValueDescriptionDK28e81 = true;
		const _envVarT9TQq2z = undefined;
		const _descriptionxHdDgvM = null;
		const _optionTxXVvXm = {
			"argChoices": _argChoiceshMrPlIo,
		"negate": _negateITgt5Z9,
		"defaultValue": _defaultValueAFItvp,
		"defaultValueDescription": _defaultValueDescriptionDK28e81,
		"envVar": _envVarT9TQq2z,
		"description": _descriptionxHdDgvM
	}
		const _returnValueMKoXRXq = await _HelpAmaY1c.optionDescription(_optionTxXVvXm)
		const _flagsjiCQDj = true;
		const _optionGGHsszE = {
			"flags": _flagsjiCQDj
	}
		const _returnValueP9nyc40 = await _HelpAmaY1c.optionTerm(_optionGGHsszE)
		const _cmdj2TvXWy = undefined;
		const _returnValueHiDOjDN = await _HelpAmaY1c.visibleOptions(_cmdj2TvXWy)
		const _flagsErJ8bk = undefined;
		const _optionItdNApW = {
			"flags": _flagsErJ8bk
	}
		const _returnValueoeoajRI = await _HelpAmaY1c.optionTerm(_optionItdNApW)
	});

	it('test for Help', async () => {
		const _HelpMCyiwCy = new Help()
		const _returnValueI8fPgGx = undefined;
		const _matchPy8ufPc = () => { return _returnValueI8fPgGx };
		const _returnValueH5yq3wb = "BY2lXqqmQvTgLuHqom4tDlifDXyJXzGjaGrUdIRlmIV2DfiJIbEwKF4";
		const _substrWBIG99Z = () => { return _returnValueH5yq3wb };
		const _strmbwNCo = {
			"match": _matchPy8ufPc,
		"substr": _substrWBIG99Z
	}
		const _widthE9XIzCO = 7.0495156917405275;
		const _indentvwlaQ0v = 6.60829288085311;
		const _minColumnWidthe8eelln = -6.84145609618067;
		const _returnValuelzGRVnl = await _HelpMCyiwCy.wrap(_strmbwNCo, _widthE9XIzCO, _indentvwlaQ0v, _minColumnWidthe8eelln)
		const _returnValueLNS1C9q = true;
		const _descriptionLEPOmRH = () => { return _returnValueLNS1C9q };
		const _cmdVe2iNj = {
			"description": _descriptionLEPOmRH
	}
		const _returnValuemD92bXk = await _HelpMCyiwCy.commandDescription(_cmdVe2iNj)
		const __argsDescriptionpy2eePs = {
		
	}
		const __argsN6xGUWi = {
		
	}
		const _cmdOcHxnGa = {
			"_argsDescription": __argsDescriptionpy2eePs,
		"_args": __argsN6xGUWi
	}
		const _returnValuePo7YC21 = await _HelpMCyiwCy.visibleArguments(_cmdOcHxnGa)
		const _cmdFeAnuBx = "z5LjBalwQGuJswfK7eeh";
		const _sortSubcommandsHksHKaL = -9.973798938147377;
		const _returnValueG6gd7mt = undefined;
		const _subcommandTermpPnM3S = () => { return _returnValueG6gd7mt };
		const _helperYhYijtL = {
			"sortSubcommands": _sortSubcommandsHksHKaL,
		"subcommandTerm": _subcommandTermpPnM3S
	}
		const _returnValueSQ9atEE = await _HelpMCyiwCy.longestSubcommandTermLength(_cmdFeAnuBx, _helperYhYijtL)
	});

	it('test for Help', async () => {
		const _HelpxGWy3nE = new Help()
		const _argChoicesESq9P7K = {
		
	}
		const _arrayValueVK4kBXF = "lAwnC4lqP9o8ra8iE7ijCzXy";
		const _returnValuexKF9NXw = false;
		const _arrayValueWCVNYXj = () => { return _returnValuexKF9NXw };
		const _arrayValuejnyMGU = null;
		const _negatecvcwjKF = [_arrayValueVK4kBXF, _arrayValueWCVNYXj, _arrayValuejnyMGU]
		const _defaultValueOa75SGF = undefined;
		const _defaultValueDescriptionqb4GMYJ = undefined;
		const _envVarpH3gyo = "N6izkGHpBvWSwDCn";
		const _returnValueJaWC8Ut = "5pb8bOXdDV2hzJCw39tSuNCFZTIvt";
		const _descriptionvatbos4 = () => { return _returnValueJaWC8Ut };
		const _optiongeCKZBf = {
			"argChoices": _argChoicesESq9P7K,
		"negate": _negatecvcwjKF,
		"defaultValue": _defaultValueOa75SGF,
		"defaultValueDescription": _defaultValueDescriptionqb4GMYJ,
		"envVar": _envVarpH3gyo,
		"description": _descriptionvatbos4
	}
		const _returnValuekB5NK4A = await _HelpxGWy3nE.optionDescription(_optiongeCKZBf)
	});

	it('test for Help', async () => {
		const _HelprQoZnn = new Help()
		const _returnValueOfzXLwQ = 0.08461647722299581;
		const _descriptionn2Kvs8z = () => { return _returnValueOfzXLwQ };
		const _cmdXX6in4n = {
			"description": _descriptionn2Kvs8z
	}
		const _returnValueK2b6b2 = await _HelprQoZnn.commandDescription(_cmdXX6in4n)
		const _returnValueem1fsVI = false;
		const _descriptionuh8aBLH = () => { return _returnValueem1fsVI };
		const _cmde9IcOL2 = {
			"description": _descriptionuh8aBLH
	}
		const _returnValueaTQVWOq = await _HelprQoZnn.commandDescription(_cmde9IcOL2)
		const _returnValuebpmnyvL = undefined;
		const _matchioX9bvs = () => { return _returnValuebpmnyvL };
		const _returnValuek9BTOFk = true;
		const _substrQPqLgrl = () => { return _returnValuek9BTOFk };
		const _strKUygzd = {
			"match": _matchioX9bvs,
		"substr": _substrQPqLgrl
	}
		const _widthQzHY7Uq = -5.981866463531648;
		const _indentbBTzhEg = 7.968062287266715;
		const _minColumnWidthxR0lrps = 2.6657472376182962;
		const _returnValueUht8LSk = await _HelprQoZnn.wrap(_strKUygzd, _widthQzHY7Uq, _indentbBTzhEg, _minColumnWidthxR0lrps)
	});

	it('test for Help', async () => {
		const _HelpeRIyozt = new Help()
		const __nameccrCpDE = {
		
	}
		const _returnValuerypnjTu = false;
		const _arrayValuewONWmxk = () => { return _returnValuerypnjTu };
		const _arrayValuesqrt0Rg = null;
		const __aliasesvn3nZjv = [_arrayValuewONWmxk, _arrayValuesqrt0Rg]
		const _parentAugYj33 = {
		
	}
		const _returnValueK3YdMmO = null;
		const _usageXjB7oc2 = () => { return _returnValueK3YdMmO };
		const _cmdtdhpVqq = {
			"_name": __nameccrCpDE,
		"_aliases": __aliasesvn3nZjv,
		"parent": _parentAugYj33,
		"usage": _usageXjB7oc2
	}
		const _returnValueA3sOU6R = await _HelpeRIyozt.commandUsage(_cmdtdhpVqq)
		const __nameEyNqJvn = {
		
	}
		const __aliasesSZvrG9x = {
		
	}
		const _parentxv1bt9o = {
		
	}
		const _returnValueXXXU50k = true;
		const _usageptaOuzY = () => { return _returnValueXXXU50k };
		const _cmdFPgpE5u = {
			"_name": __nameEyNqJvn,
		"_aliases": __aliasesSZvrG9x,
		"parent": _parentxv1bt9o,
		"usage": _usageptaOuzY
	}
		const _returnValueqMfWMwb = await _HelpeRIyozt.commandUsage(_cmdFPgpE5u)
		const _returnValueSnuNaKY = null;
		const _nameG9COULn = () => { return _returnValueSnuNaKY };
		const _argumentNVkTIDg = {
			"name": _nameG9COULn
	}
		const _returnValuetg3XqgL = await _HelpeRIyozt.argumentTerm(_argumentNVkTIDg)
		const _arrayValueRYsWV6E = -3.7456943646433167;
		const _optionR8GxQNJ = [_arrayValueRYsWV6E]
		const _returnValueJDYa2pb = await _HelpeRIyozt.optionTerm(_optionR8GxQNJ)
		const _cmdehLdno7 = null;
		const _arrayValuefJhXJdd = undefined;
		const _arrayValuekZ2Wp3l = {
		
	}
		const _arrayValue7Xe9zc = undefined;
		const _sortSubcommandsRscESHp = [_arrayValuefJhXJdd, _arrayValuekZ2Wp3l, _arrayValue7Xe9zc]
		const _returnValuefh3aL1K = "D1P8DuIkt4yiLzp7kxwNklRYei9peGia3jS8LXmZLrctBKnXMWFBMLzlcSw";
		const _subcommandTermD8XYd8U = () => { return _returnValuefh3aL1K };
		const _helperzszh9Zq = {
			"sortSubcommands": _sortSubcommandsRscESHp,
		"subcommandTerm": _subcommandTermD8XYd8U
	}
		const _returnValuehpkuR5 = await _HelpeRIyozt.formatHelp(_cmdehLdno7, _helperzszh9Zq)
	});

	it('test for Help', async () => {
		const _HelpvLGF93R = new Help()
		const _argChoicesJN0CS6g = []
		const _defaultValueCcLiGaY = undefined;
		const _defaultValueDescriptionuMfT0vU = true;
		const _arrayValueQgR7IEz = undefined;
		const _arrayValuelgUWsxT = null;
		const _arrayValueUN0TU9 = "nHvkpEv1kPmsmOfHiQPKzoV";
		const _descriptionRcA0ugG = [_arrayValueQgR7IEz, _arrayValuelgUWsxT, _arrayValueUN0TU9]
		const _argumentowrlDv2 = {
			"argChoices": _argChoicesJN0CS6g,
		"defaultValue": _defaultValueCcLiGaY,
		"defaultValueDescription": _defaultValueDescriptionuMfT0vU,
		"description": _descriptionRcA0ugG
	}
		const _returnValueL6WbW6d = await _HelpvLGF93R.argumentDescription(_argumentowrlDv2)
		const _returnValuejrre5cf = []
		const _returnValueNo71sia = () => { return _returnValuejrre5cf };
		const _descriptiontwPd3FU = () => { return _returnValueNo71sia };
		const _cmd49J0Cc = {
			"description": _descriptiontwPd3FU
	}
		const _returnValueD1mzIhr = await _HelpvLGF93R.subcommandDescription(_cmd49J0Cc)
		const _returnValueD1qckiT = "QmMp3pLbjxPVMacb5d6KNiIwMELvsWvPJft9C7UKpCl7v7ePB";
		const _argChoicessiAFzXX = () => { return _returnValueD1qckiT };
		const _defaultValueabldidY = undefined;
		const _defaultValueDescriptionQrptZIn = -6.124010799845941;
		const _descriptionRq4WtH8 = undefined;
		const _argumentmWKvChP = {
			"argChoices": _argChoicessiAFzXX,
		"defaultValue": _defaultValueabldidY,
		"defaultValueDescription": _defaultValueDescriptionQrptZIn,
		"description": _descriptionRq4WtH8
	}
		const _returnValuetVUyFQk = await _HelpvLGF93R.argumentDescription(_argumentmWKvChP)
	});

	it('test for Help', async () => {
		const _HelpCH2de5N = new Help()
		const _argChoicesjjVT42E = undefined;
		const _defaultValueqZVfD0i = null;
		const _defaultValueDescriptionBPrOqXa = "gBdFMBPC";
		const _descriptionZZVC4fY = -7.407909235717494;
		const _argumentb8NCMu = {
			"argChoices": _argChoicesjjVT42E,
		"defaultValue": _defaultValueqZVfD0i,
		"defaultValueDescription": _defaultValueDescriptionBPrOqXa,
		"description": _descriptionZZVC4fY
	}
		const _returnValueqTpFIJ9 = await _HelpCH2de5N.argumentDescription(_argumentb8NCMu)
		const _optionsYjPmgWC = {
		
	}
		const __hasHelpOptionmuSYwW0 = undefined;
		const __helpShortFlagv7pf0hL = {
		
	}
		const _returnValuexP43lDc = undefined;
		const __findOptionVv23mQR = () => { return _returnValuexP43lDc };
		const __helpLongFlagCRkuQOh = 8.551990590876326;
		const _returnValueyWoyMK6 = null;
		const _createOptionpahIOgd = () => { return _returnValueyWoyMK6 };
		const _arrayValueAE9HPP7 = false;
		const _arrayValuelBDZmKA = {
		
	}
		const _arrayValueNn097e7 = 4.345216074304375;
		const _arrayValuen9KgMcr = [_arrayValuelBDZmKA, _arrayValueNn097e7]
		const __helpDescriptionmb27CCQ = [_arrayValueAE9HPP7, _arrayValuen9KgMcr]
		const __helpFlagsJMdmP6r = false;
		const _cmdo6idGNX = {
			"options": _optionsYjPmgWC,
		"_hasHelpOption": __hasHelpOptionmuSYwW0,
		"_helpShortFlag": __helpShortFlagv7pf0hL,
		"_findOption": __findOptionVv23mQR,
		"_helpLongFlag": __helpLongFlagCRkuQOh,
		"createOption": _createOptionpahIOgd,
		"_helpDescription": __helpDescriptionmb27CCQ,
		"_helpFlags": __helpFlagsJMdmP6r
	}
		const _returnValueojuGJq2 = await _HelpCH2de5N.visibleOptions(_cmdo6idGNX)
	});
})