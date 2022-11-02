export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpRRoCUkB = new Help()
		const _returnValueSE9u0WI = []
		const _nameUY3fMbY = () => { return _returnValueSE9u0WI };
		const _argumentWnLxC4 = {
			"name": _nameUY3fMbY
	}
		const _returnValuew3Pm8lE = await _HelpRRoCUkB.argumentTerm(_argumentWnLxC4)
		const _argumentb1gkutC = "mJ3covIFVRUF3wHyo2oH4dsjQrMIh7hu2Ap8yBUAeEDaYja2sfgSiKZSNkLrPGDwa4hcR5lu3DojBT5SRjJKiDKO9lRk";
		const _returnValueJvUNKf5 = await _HelpRRoCUkB.argumentTerm(_argumentb1gkutC)
		const _argChoicesUmIC1Ou = null;
		const _defaultValuerW5jd5j = undefined;
		const _defaultValueDescriptionvW6IXPB = []
		const _arrayValuehVvmF4Z = {
		
	}
		const _arrayValuePNIhG7X = -0.7515624333509123;
		const _arrayValueF3vkJ1T = false;
		const _arrayValueX4TGjqJ = -9.356755778729413;
		const _descriptionUoHWxkP = [_arrayValuehVvmF4Z, _arrayValuePNIhG7X, _arrayValueF3vkJ1T, _arrayValueX4TGjqJ]
		const _argumentmLTLMVA = {
			"argChoices": _argChoicesUmIC1Ou,
		"defaultValue": _defaultValuerW5jd5j,
		"defaultValueDescription": _defaultValueDescriptionvW6IXPB,
		"description": _descriptionUoHWxkP
	}
		const _returnValuePYndqv = await _HelpRRoCUkB.argumentDescription(_argumentmLTLMVA)
	});

	it('test for Help', async () => {
		const _Help85WbDV = new Help()
		const _flagsdMFwCPV = undefined;
		const _optionl0eohjf = {
			"flags": _flagsdMFwCPV
	}
		const _returnValueUZNc8jq = await _Help85WbDV.optionTerm(_optionl0eohjf)
		const _argChoicesKoTPcfu = {
		
	}
		const _defaultValueIcVvsmk = undefined;
		const _defaultValueDescriptionpmxAgLs = null;
		const _descriptionUGBgpv4 = null;
		const _argumentJu1oWnH = {
			"argChoices": _argChoicesKoTPcfu,
		"defaultValue": _defaultValueIcVvsmk,
		"defaultValueDescription": _defaultValueDescriptionpmxAgLs,
		"description": _descriptionUGBgpv4
	}
		const _returnValuewaiqo9c = await _Help85WbDV.argumentDescription(_argumentJu1oWnH)
	});

	it('test for Help', async () => {
		const _HelpOVuHPF = new Help()
		const _returnValuewDVyH4U = "A2rckUbwgqDNKGyc6UoUjnMzb2yP6Us4KLk";
		const _descriptionemKZDGV = () => { return _returnValuewDVyH4U };
		const _cmdcePQZQ = {
			"description": _descriptionemKZDGV
	}
		const _returnValuen5cvs0p = await _HelpOVuHPF.subcommandDescription(_cmdcePQZQ)
	});

	it('test for Help', async () => {
		const _HelpfaZ7amF = new Help()
		const _returnValuexDknCsv = "aKNh0tNEb1WbzAH4yC9R9UosOuZKZzdKQIRmhPhD8";
		const _descriptionqVuDqgU = () => { return _returnValuexDknCsv };
		const _cmdUot2zUh = {
			"description": _descriptionqVuDqgU
	}
		const _returnValuesQtx13a = await _HelpfaZ7amF.subcommandDescription(_cmdUot2zUh)
		const _argChoiceshyCDSIf = {
		
	}
		const _negateooejcew = undefined;
		const _defaultValueAsSca5Y = undefined;
		const _defaultValueDescriptiondFY2icS = undefined;
		const _envVarLpN63jA = undefined;
		const _arrayValuemCRCdhG = -2.3105980998657847;
		const _arrayValueFwrCQU1 = "L8rGJXMug4Vy2Es13cBeG5memVxcAyVsPqTUxsxYbmfcBGrtBep";
		const _arrayValueTDDALdM = undefined;
		const _returnValuebYYYluC = [_arrayValueTDDALdM]
		const _arrayValueYgtkcIc = () => { return _returnValuebYYYluC };
		const _descriptionS1V7nn = [_arrayValuemCRCdhG, _arrayValueFwrCQU1, _arrayValueYgtkcIc]
		const _optionb7D83y9 = {
			"argChoices": _argChoiceshyCDSIf,
		"negate": _negateooejcew,
		"defaultValue": _defaultValueAsSca5Y,
		"defaultValueDescription": _defaultValueDescriptiondFY2icS,
		"envVar": _envVarLpN63jA,
		"description": _descriptionS1V7nn
	}
		const _returnValueyYyo3qR = await _HelpfaZ7amF.optionDescription(_optionb7D83y9)
		const _argumentTSKDbaw = null;
		const _returnValueLIkbu8R = await _HelpfaZ7amF.argumentDescription(_argumentTSKDbaw)
		const _namelyasKOa = []
		const _argumentETGzd3F = {
			"name": _namelyasKOa
	}
		const _returnValue5EpS5n = await _HelpfaZ7amF.argumentTerm(_argumentETGzd3F)
	});

	it('test for Help', async () => {
		const _HelpdrcP0I0 = new Help()
		const _cmdLRdWLlg = -2.182810187882934;
		const _sortSubcommandsmM2Xks = null;
		const _arrayValueFlFB9e4 = "GxqkXftXQZzFW4529BULxe4bHIkrdtxNXEWAC7Jh6neSNXUk8VQyFGD";
		const _returnValueCTtGfXf = [_arrayValueFlFB9e4]
		const _subcommandTermBjJzNSk = () => { return _returnValueCTtGfXf };
		const _helperLjAFljq = {
			"sortSubcommands": _sortSubcommandsmM2Xks,
		"subcommandTerm": _subcommandTermBjJzNSk
	}
		const _returnValueSqKifHP = await _HelpdrcP0I0.longestSubcommandTermLength(_cmdLRdWLlg, _helperLjAFljq)
		const _cmdojheaDQ = {
		
	}
		const _arrayValueUXSLFej = undefined;
		const _arrayValueVHdBg8p = null;
		const _arrayValueowIH7wp = {
		
	}
		const _arrayValuegJe5ge = 1.7307767981103126;
		const _arrayValuexuGCkMq = 9.588533301822732;
		const _arrayValueQUlECTp = [_arrayValueVHdBg8p, _arrayValueowIH7wp, _arrayValuegJe5ge, _arrayValuexuGCkMq]
		const _arrayValueAklFTp = undefined;
		const _arrayValueijhcaH = [_arrayValueUXSLFej, _arrayValueQUlECTp, _arrayValueAklFTp]
		const _arrayValuemMol220 = [_arrayValueijhcaH]
		const _arrayValueCTCuOhC = "RrgwTyKyPczu1kfXAUjC8wJmHwFd4UkFt3rZ89Qla3GqGuze8zVSMkHKp6OrvP4mBrlwIJPjT9ZkiGuGzvF6Su5";
		const _returnValued4k1Emz = [_arrayValuemMol220, _arrayValueCTCuOhC]
		const _visibleArgumentswkcxJpV = () => { return _returnValued4k1Emz };
		const _arrayValuep1PfC2a = 6.9251344808678965;
		const _arrayValueC7qEWaA = false;
		const _returnValuezqpa9xe = [_arrayValuep1PfC2a, _arrayValueC7qEWaA]
		const _argumentTermvJLsgMu = () => { return _returnValuezqpa9xe };
		const _helperkuLWKro = {
			"visibleArguments": _visibleArgumentswkcxJpV,
		"argumentTerm": _argumentTermvJLsgMu
	}
		const _returnValuexWr4Mol = await _HelpdrcP0I0.longestArgumentTermLength(_cmdojheaDQ, _helperkuLWKro)
	});

	it('test for Help', async () => {
		const _Helpm6lClNx = new Help()
		const _returnValueGuRql8K = "wlRF9lG7AqkkNFJ7jaCvkYsqQ4vn5raIx1Tw9A2jyj79d9CkCvxJUpRUx3ujjhzRkigWtNRvs";
		const _descriptiont31yfr = () => { return _returnValueGuRql8K };
		const _cmdNz08dCs = {
			"description": _descriptiont31yfr
	}
		const _returnValuedAjDodR = await _Helpm6lClNx.commandDescription(_cmdNz08dCs)
		const _arrayValuehcqdMyC = "8WmtvEw6GQ5nlrpt25O7C1qtjvLgJTp43PaPWohgdXwzVHarmsAVKFriV5mnILm8Zcj4uXvEtSN1wezmFC6d8qBn4tfky";
		const _arrayValueDZ7AvFT = "y39hSvvTKYvVYK4PEfrrkG4fi6twyt";
		const _returnValueTFO5rKf = [_arrayValuehcqdMyC, _arrayValueDZ7AvFT]
		const _namevOXkpNI = () => { return _returnValueTFO5rKf };
		const _argumentITfWNNI = {
			"name": _namevOXkpNI
	}
		const _returnValueTDn4SFC = await _Helpm6lClNx.argumentTerm(_argumentITfWNNI)
		const __argss6skBi = {
		
	}
		const _returnValuen5aqJqS = undefined;
		const _arrayValueCqFUz3S = () => { return _returnValuen5aqJqS };
		const _arrayValueg9aPNb0 = null;
		const _arrayValueA8KxTIX = []
		const _arrayValue9RSZCx = true;
		const _returnValueMWOmA2R = [_arrayValueA8KxTIX, _arrayValue9RSZCx]
		const _arrayValuer6mImxM = () => { return _returnValueMWOmA2R };
		const _arrayValueEfD91lN = undefined;
		const _arrayValuekd5YOcG = 6.138613105108043;
		const _arrayValueDxJOJ00 = -6.855184502976748;
		const _arrayValueM4GrnJ1 = null;
		const _arrayValuebEM4Hy8 = undefined;
		const _arrayValueXQmE2Ko = [_arrayValueDxJOJ00, _arrayValueM4GrnJ1, _arrayValuebEM4Hy8]
		const _arrayValueaxMLmvf = [_arrayValueEfD91lN, _arrayValuekd5YOcG, _arrayValueXQmE2Ko]
		const _arrayValueDju2lNm = [_arrayValuer6mImxM, _arrayValueaxMLmvf]
		const __namel4pYVNm = [_arrayValueCqFUz3S, _arrayValueg9aPNb0, _arrayValueDju2lNm]
		const __aliasesGm4F7XV = {
		
	}
		const _optionsgCWkJ2t = {
		
	}
		const _cmdP4580nj = {
			"_args": __argss6skBi,
		"_name": __namel4pYVNm,
		"_aliases": __aliasesGm4F7XV,
		"options": _optionsgCWkJ2t
	}
		const _returnValueQWhCO87 = await _Helpm6lClNx.subcommandTerm(_cmdP4580nj)
		const __argsDescriptionNyY6fMD = {
		
	}
		const __argsBa1kDYM = {
		
	}
		const _cmdYTjhHqq = {
			"_argsDescription": __argsDescriptionNyY6fMD,
		"_args": __argsBa1kDYM
	}
		const _returnValueUFXniBT = await _Helpm6lClNx.visibleArguments(_cmdYTjhHqq)
	});

	it('test for Help', async () => {
		const _HelpAz13HpR = new Help()
		const _arrayValueVPmTLce = undefined;
		const _arrayValuerAjqcCp = null;
		const _arrayValuezA24hCU = []
		const _arrayValueZ8WgHD4 = "gjkX1JONDhRTTBDpFOOTh7nfScx8mc9pdLQEg4jC";
		const _arrayValueO96Kcet = undefined;
		const _arrayValueKlYDUwi = false;
		const _arrayValuegjWXuU8 = [_arrayValueO96Kcet, _arrayValueKlYDUwi]
		const _arrayValueiAX7XnF = "1RsCureBwlYxaaIOi7aGCvAjingTejW93y6MnGyhYdbGK";
		const _arrayValuej05Xyp = undefined;
		const _arrayValueQyhrzO = 7.284915999839384;
		const _arrayValueHw8ZfwS = [_arrayValueZ8WgHD4, _arrayValuegjWXuU8, _arrayValueiAX7XnF, _arrayValuej05Xyp, _arrayValueQyhrzO]
		const _cmdiodateX = [_arrayValueVPmTLce, _arrayValuerAjqcCp, _arrayValuezA24hCU, _arrayValueHw8ZfwS]
		const _sortSubcommandsfRDQLeu = {
		
	}
		const _returnValuetMfTG5U = null;
		const _subcommandTermHbgGyyc = () => { return _returnValuetMfTG5U };
		const _helperjaPaI6V = {
			"sortSubcommands": _sortSubcommandsfRDQLeu,
		"subcommandTerm": _subcommandTermHbgGyyc
	}
		const _returnValuea9hOJV = await _HelpAz13HpR.formatHelp(_cmdiodateX, _helperjaPaI6V)
		const _argChoiceseTfJA0V = {
		
	}
		const _defaultValueJoIFfnx = undefined;
		const _defaultValueDescriptiony9SiSQU = -8.472344973565136;
		const _descriptionjZ1srVA = "Cv3fxUqNCs3OK4";
		const _argumentja47AJ5 = {
			"argChoices": _argChoiceseTfJA0V,
		"defaultValue": _defaultValueJoIFfnx,
		"defaultValueDescription": _defaultValueDescriptiony9SiSQU,
		"description": _descriptionjZ1srVA
	}
		const _returnValuemcFTcZn = await _HelpAz13HpR.argumentDescription(_argumentja47AJ5)
		const __namenF0WXno = {
		
	}
		const __aliasestw8xtty = {
		
	}
		const _parentYsxyAaJ = {
		
	}
		const _returnValuep5TdubH = -1.475132474270385;
		const _usageOusr54E = () => { return _returnValuep5TdubH };
		const _cmddKB7JwF = {
			"_name": __namenF0WXno,
		"_aliases": __aliasestw8xtty,
		"parent": _parentYsxyAaJ,
		"usage": _usageOusr54E
	}
		const _returnValueSgACtg9 = await _HelpAz13HpR.commandUsage(_cmddKB7JwF)
	});

	it('test for Help', async () => {
		const _Helpax1ZWwr = new Help()
		const _cmdFwACiey = true;
		const _returnValuexXLMHs = await _Helpax1ZWwr.visibleCommands(_cmdFwACiey)
		const _cmdlMelft6 = "k4o1Tf9HSDu30coxElGgzdNfRlvwXFXvk7kp0cI2coexo7g94ApUSnbPhj2h5ab9X4unfOhJ3Df";
		const _helperDgiFQLc = 7.8921986768537415;
		const _returnValueoUTZECU = await _Helpax1ZWwr.formatHelp(_cmdlMelft6, _helperDgiFQLc)
		const __argsDescriptionVhHrnKG = {
		
	}
		const __argsjTS0cuD = {
		
	}
		const _cmdWM2Gaa9 = {
			"_argsDescription": __argsDescriptionVhHrnKG,
		"_args": __argsjTS0cuD
	}
		const _returnValuec8qtBIq = await _Helpax1ZWwr.visibleArguments(_cmdWM2Gaa9)
		const _cmdM0pzGxK = "xkLcKa5FJqKrK16UFC6nbpajTn1kmkjvmBAjMIS7DwNdqzm5VxGk3c2edDckqwa8T6pL6tf3ONpn51t9n7lVHA";
		const _returnValuenHJXQuV = false;
		const _visibleArgumentsK1032bb = () => { return _returnValuenHJXQuV };
		const _returnValuePKINf3 = null;
		const _argumentTermWvk01Wk = () => { return _returnValuePKINf3 };
		const _helperN1gk3g = {
			"visibleArguments": _visibleArgumentsK1032bb,
		"argumentTerm": _argumentTermWvk01Wk
	}
		const _returnValueuxWv78T = await _Helpax1ZWwr.longestArgumentTermLength(_cmdM0pzGxK, _helperN1gk3g)
	});

	it('test for Help', async () => {
		const _Helprvd2kfK = new Help()
		const _returnValue5PsEN1 = null;
		const _descriptionDwiikyx = () => { return _returnValue5PsEN1 };
		const _cmdU1kCxLS = {
			"description": _descriptionDwiikyx
	}
		const _returnValueQzF0Fxm = await _Helprvd2kfK.subcommandDescription(_cmdU1kCxLS)
		const _returnValuen67ZxaY = "5x0xP9wk5hbRgXJ1Vc3kdlOxyjzzAE9tOv5H9HZEMXPYyJXIIWUeRPsiRzMmjnTA6XFihyPqu";
		const _descriptionHYifKc = () => { return _returnValuen67ZxaY };
		const _cmdPOaWDL5 = {
			"description": _descriptionHYifKc
	}
		const _returnValueayEaMgG = await _Helprvd2kfK.commandDescription(_cmdPOaWDL5)
		const __nameZtnyw2B = {
		
	}
		const __aliasesXBY1O80 = {
		
	}
		const _parentIzpo5mw = {
		
	}
		const _returnValuekwmbsZy = undefined;
		const _usageyLRtOpF = () => { return _returnValuekwmbsZy };
		const _cmdc4MfrfE = {
			"_name": __nameZtnyw2B,
		"_aliases": __aliasesXBY1O80,
		"parent": _parentIzpo5mw,
		"usage": _usageyLRtOpF
	}
		const _returnValueHwaQ6H4 = await _Helprvd2kfK.commandUsage(_cmdc4MfrfE)
		const _cmdj5DcvQ = "VA0Ll5bjl2mDeDv0ArFOul5vsH6RF9vATuBgW8yj5DBJhwIKFIInQHAZtKquL9mj8HDVsdnkzViJ4cdmD9OvyktQ4yIMvAFf";
		const _sortSubcommandsQ0yaWLO = false;
		const _returnValueSslIvN3 = undefined;
		const _returnValuew7DZWiL = () => { return _returnValueSslIvN3 };
		const _subcommandTermknV2hax = () => { return _returnValuew7DZWiL };
		const _helperpauqfR = {
			"sortSubcommands": _sortSubcommandsQ0yaWLO,
		"subcommandTerm": _subcommandTermknV2hax
	}
		const _returnValueKKD4QAY = await _Helprvd2kfK.longestSubcommandTermLength(_cmdj5DcvQ, _helperpauqfR)
		const _cmdoFYZafQ = []
		const _longestOptionTermLengthwNyGv4a = []
		const _returnValueCM59Wci = false;
		const _returnValuehnFZv6h = () => { return _returnValueCM59Wci };
		const _longestSubcommandTermLengthG4rjuuW = () => { return _returnValuehnFZv6h };
		const _returnValueIMXMhhL = -7.583185070883175;
		const _longestArgumentTermLengthy3j8zlx = () => { return _returnValueIMXMhhL };
		const _helpergi687rh = {
			"longestOptionTermLength": _longestOptionTermLengthwNyGv4a,
		"longestSubcommandTermLength": _longestSubcommandTermLengthG4rjuuW,
		"longestArgumentTermLength": _longestArgumentTermLengthy3j8zlx
	}
		const _returnValueMGPnFDU = await _Helprvd2kfK.padWidth(_cmdoFYZafQ, _helpergi687rh)
	});

	it('test for Help', async () => {
		const _HelpqpDXKOq = new Help()
		const _cmdbYcruWN = null;
		const _returnValueh9NT8ar = undefined;
		const _visibleOptionsxVPrEj1 = () => { return _returnValueh9NT8ar };
		const _returnValueOkWYJJ2 = -1.9536674073383367;
		const _optionTermrrURR2j = () => { return _returnValueOkWYJJ2 };
		const _helperQO88uFS = {
			"visibleOptions": _visibleOptionsxVPrEj1,
		"optionTerm": _optionTermrrURR2j
	}
		const _returnValueOGPnodr = await _HelpqpDXKOq.longestOptionTermLength(_cmdbYcruWN, _helperQO88uFS)
		const _returnValueC5747wH = "zXXE8jZlboVyDzapEQ9QDyjOk5JRLhUNtX4b5koIdpeQlWpBSvOE61nvmQHj22EL3U6";
		const _descriptionx0cI5O3 = () => { return _returnValueC5747wH };
		const _cmdfvpcw2 = {
			"description": _descriptionx0cI5O3
	}
		const _returnValueJfADveG = await _HelpqpDXKOq.subcommandDescription(_cmdfvpcw2)
	});

	it('test for Help', async () => {
		const _HelpC8lPKoU = new Help()
		const _flagsmwl8AJP = false;
		const _optionePLoI35 = {
			"flags": _flagsmwl8AJP
	}
		const _returnValuelWey1zv = await _HelpC8lPKoU.optionTerm(_optionePLoI35)
		const _cmdGvNEz4 = null;
		const _returnValuemSEv2r = {
		
	}
		const _longestOptionTermLengthca0N3aI = () => { return _returnValuemSEv2r };
		const _returnValuet7Eg1zO = null;
		const _longestSubcommandTermLengthJFgoOAn = () => { return _returnValuet7Eg1zO };
		const _returnValueT4zG0Pb = null;
		const _longestArgumentTermLengthLF5eMLZ = () => { return _returnValueT4zG0Pb };
		const _helperakDNXQ0 = {
			"longestOptionTermLength": _longestOptionTermLengthca0N3aI,
		"longestSubcommandTermLength": _longestSubcommandTermLengthJFgoOAn,
		"longestArgumentTermLength": _longestArgumentTermLengthLF5eMLZ
	}
		const _returnValuettYYypU = await _HelpC8lPKoU.padWidth(_cmdGvNEz4, _helperakDNXQ0)
	});

	it('test for Help', async () => {
		const _HelpUtc9ySs = new Help()
		const _cmdJLEBkzA = null;
		const _returnValueKTL2Mp5 = 7.927667745881411;
		const _visibleArgumentsg2sa3cC = () => { return _returnValueKTL2Mp5 };
		const _returnValueeLN1HdO = null;
		const _argumentTermrZ6aoO7 = () => { return _returnValueeLN1HdO };
		const _helperkVNG1QO = {
			"visibleArguments": _visibleArgumentsg2sa3cC,
		"argumentTerm": _argumentTermrZ6aoO7
	}
		const _returnValue6si7SH = await _HelpUtc9ySs.longestArgumentTermLength(_cmdJLEBkzA, _helperkVNG1QO)
		const _optionsA1H8fIM = "zUiXOXyKXFtVxQKvAsqICpcOnwotcOLUv9ghTuAmj";
		const __hasHelpOptionVZ88JF4 = undefined;
		const __helpShortFlagdf6JBMw = undefined;
		const _returnValuesr0mwUH = undefined;
		const __findOptionivbIrW = () => { return _returnValuesr0mwUH };
		const __helpLongFlaggqMMRaO = "WaKqXIcqGY2lrLGSuuizIltE6qQ3p1wrwV4Zop7klPTDphEdQzIR5EjtH6mlu6UJbKtEE";
		const _returnValuevpFht3m = true;
		const _createOptionww07hKn = () => { return _returnValuevpFht3m };
		const __helpDescriptionRkTMc3m = undefined;
		const _arrayValueDOd9umW = {
		
	}
		const _arrayValueXZHhfkL = "pBOXdXrCNt4V";
		const _arrayValueGY7uTH0 = "oSheaF5sgKfGJ4AXcIhLXm2O6SdpzPnLJOqKOCQ39mnJ";
		const __helpFlagsZMWcOvy = [_arrayValueDOd9umW, _arrayValueXZHhfkL, _arrayValueGY7uTH0]
		const _cmdqrzz3MS = {
			"options": _optionsA1H8fIM,
		"_hasHelpOption": __hasHelpOptionVZ88JF4,
		"_helpShortFlag": __helpShortFlagdf6JBMw,
		"_findOption": __findOptionivbIrW,
		"_helpLongFlag": __helpLongFlaggqMMRaO,
		"createOption": _createOptionww07hKn,
		"_helpDescription": __helpDescriptionRkTMc3m,
		"_helpFlags": __helpFlagsZMWcOvy
	}
		const _returnValueM3rmYe6 = await _HelpUtc9ySs.visibleOptions(_cmdqrzz3MS)
		const _cmdWM7tocG = "vqFLs";
		const _arrayValuesm7K84q = {
		
	}
		const _arrayValueGQjxcuP = "o7YD2IuZFbb9yzTuNw0cIb77taCk7BdLpFYq";
		const _returnValuewT6DCqp = [_arrayValuesm7K84q, _arrayValueGQjxcuP]
		const _visibleOptionsQPFmX6O = () => { return _returnValuewT6DCqp };
		const _returnValueYydSKm0 = 8.070345133343164;
		const _optionTerm26QAfu = () => { return _returnValueYydSKm0 };
		const _helperyThXRPr = {
			"visibleOptions": _visibleOptionsQPFmX6O,
		"optionTerm": _optionTerm26QAfu
	}
		const _returnValueVi2oewA = await _HelpUtc9ySs.longestOptionTermLength(_cmdWM7tocG, _helperyThXRPr)
		const _cmddQmiRq = false;
		const _returnValuedZme11R = -9.606117636106354;
		const _visibleOptionsJCgsQjV = () => { return _returnValuedZme11R };
		const _returnValueRvLts4H = undefined;
		const _optionTerm7Ja2wR = () => { return _returnValueRvLts4H };
		const _helperC2iwbCi = {
			"visibleOptions": _visibleOptionsJCgsQjV,
		"optionTerm": _optionTerm7Ja2wR
	}
		const _returnValueJZanhOI = await _HelpUtc9ySs.longestOptionTermLength(_cmddQmiRq, _helperC2iwbCi)
		const _option69Xb9T = 0.14855509242461906;
		const _returnValueDzqK9IK = await _HelpUtc9ySs.optionTerm(_option69Xb9T)
	});

	it('test for Help', async () => {
		const _HelpDcXMf2t = new Help()
		const _returnValueoFRtqWQ = 2.675448278440566;
		const _returnValueugsyWxo = () => { return _returnValueoFRtqWQ };
		const _nameE3mP70 = () => { return _returnValueugsyWxo };
		const _argumentfmB1oG = {
			"name": _nameE3mP70
	}
		const _returnValueeaDKMI7 = await _HelpDcXMf2t.argumentTerm(_argumentfmB1oG)
		const _returnValuem3GcSWZ = -9.892502822565307;
		const _nameZ1XJdZs = () => { return _returnValuem3GcSWZ };
		const _argumentcHQac16 = {
			"name": _nameZ1XJdZs
	}
		const _returnValueRVyiAf7 = await _HelpDcXMf2t.argumentTerm(_argumentcHQac16)
		const _returnValueXbtunOq = null;
		const _arrayValueEpSDRoD = () => { return _returnValueXbtunOq };
		const _optionYmDsKzS = [_arrayValueEpSDRoD]
		const _returnValueTJOGZBL = await _HelpDcXMf2t.optionDescription(_optionYmDsKzS)
		const _cmdu8JHMVJ = false;
		const _sortSubcommandsFosdFM5 = false;
		const _returnValueWV5BfP7 = "6b8gHmX9xVoA8KPDbIS2j9UlOxxi2pCZozooWCsFDfd3ryoucb9VQasMHVjRC7iwSaTEfwtHTm3SjSJo715L6cMYRq9VgY6";
		const _subcommandTermumioQDy = () => { return _returnValueWV5BfP7 };
		const _helperGt5X9zm = {
			"sortSubcommands": _sortSubcommandsFosdFM5,
		"subcommandTerm": _subcommandTermumioQDy
	}
		const _returnValuebRULC9g = await _HelpDcXMf2t.formatHelp(_cmdu8JHMVJ, _helperGt5X9zm)
	});

	it('test for Help', async () => {
		const _HelpODh4Cm7 = new Help()
		const _matchnGjYwlD = "XN1JPds4b1nzOeHLNPf08YLeehD3";
		const _returnValuex6dcUpj = "yvTVsnSpzQ9rUU3UjKW68quHrcPGhdrMKoKKa";
		const _substrdlR5Go = () => { return _returnValuex6dcUpj };
		const _stre1521xM = {
			"match": _matchnGjYwlD,
		"substr": _substrdlR5Go
	}
		const _widthZZmoJw = -4.353636565158347;
		const _indentstGRhX = -7.082776050619239;
		const _minColumnWidthriQvOuk = 0.0199055408394333;
		const _returnValueUzwORlU = await _HelpODh4Cm7.wrap(_stre1521xM, _widthZZmoJw, _indentstGRhX, _minColumnWidthriQvOuk)
		const _cmdhsaJAbO = []
		const _sortSubcommandsjmJp4Jn = {
		
	}
		const _returnValueFDQBGER = "2gg9CGFoYDf1bIVtOM9bs5vzYulc";
		const _subcommandTermECzXszg = () => { return _returnValueFDQBGER };
		const _helpersIeKQXm = {
			"sortSubcommands": _sortSubcommandsjmJp4Jn,
		"subcommandTerm": _subcommandTermECzXszg
	}
		const _returnValueiuA14jW = await _HelpODh4Cm7.longestSubcommandTermLength(_cmdhsaJAbO, _helpersIeKQXm)
	});

	it('test for Help', async () => {
		const _HelpYJdiB5D = new Help()
		const _returnValueL4KdPby = -6.094433569022751;
		const _namegWkRl3j = () => { return _returnValueL4KdPby };
		const _argumenti6YIAj = {
			"name": _namegWkRl3j
	}
		const _returnValuezfewmBW = await _HelpYJdiB5D.argumentTerm(_argumenti6YIAj)
		const __argsDescriptionZqnu9gM = {
		
	}
		const __argsl71DTd = {
		
	}
		const _cmdZAbhS4f = {
			"_argsDescription": __argsDescriptionZqnu9gM,
		"_args": __argsl71DTd
	}
		const _returnValues3IEYgR = await _HelpYJdiB5D.visibleArguments(_cmdZAbhS4f)
	});

	it('test for Help', async () => {
		const _HelpeI31wnT = new Help()
		const _returnValueGVCsc5 = "mo9jVCdgNH7lD9EvVqUt4e5VJREOxbWwVB4N0fRPnB1mpY6zIGcGQFq5doNJ4REkCdHg9zCBD5Ks5l6sDFWPidPkza";
		const _matchj7v5FNN = () => { return _returnValueGVCsc5 };
		const _substrJ0SsT4S = undefined;
		const _strkJCbHD = {
			"match": _matchj7v5FNN,
		"substr": _substrJ0SsT4S
	}
		const _widthIQEMc2d = false;
		const _indentqtW67F9 = 3.9370895055188875;
		const _minColumnWidthFOP3E5 = -7.281995176889142;
		const _returnValuePtToxg3 = await _HelpeI31wnT.wrap(_strkJCbHD, _widthIQEMc2d, _indentqtW67F9, _minColumnWidthFOP3E5)
		const _cmdXNZis0j = -8.583989179066478;
		const _returnValuew8IJ0D2 = "3YMu24pS0ve74CVx6asB6hNArDwjGAT768k9A";
		const _visibleArgumentsuz31Y7N = () => { return _returnValuew8IJ0D2 };
		const _returnValuef0efY6N = 3.278915962323774;
		const _argumentTermkvLsvnh = () => { return _returnValuef0efY6N };
		const _helperQPDDCMH = {
			"visibleArguments": _visibleArgumentsuz31Y7N,
		"argumentTerm": _argumentTermkvLsvnh
	}
		const _returnValuey2uGBwR = await _HelpeI31wnT.longestArgumentTermLength(_cmdXNZis0j, _helperQPDDCMH)
		const _cmdyBahhNG = "y2q1g3ymtpbsg9f36NlPZriQh732llhQox5saQnaL19OBJCQLVXR1va2pGB";
		const _returnValueK7TogMg = await _HelpeI31wnT.visibleArguments(_cmdyBahhNG)
	});

	it('test for Help', async () => {
		const _HelpgWIEaj = new Help()
		const _optionsVQ2gBsV = {
		
	}
		const __hasHelpOptionoj9mmg3 = 0.5416401231471397;
		const __helpShortFlagBWBRLzC = "DE8MCKyDHbykS";
		const _returnValueYOeT0cN = "hk8u8nOMuCxkLgofcIE908x";
		const _returnValueERKOskY = () => { return _returnValueYOeT0cN };
		const __findOptionQ8PMno4 = () => { return _returnValueERKOskY };
		const __helpLongFlagp5JOw70 = "W2KgOuH9yEMetbXCQ5GUOWeWvBEKoLLPa8ALKoYQL94uExOZeh2bRJNFMT";
		const _returnValueeIXROKu = -5.887926195539852;
		const _createOptionen5poKr = () => { return _returnValueeIXROKu };
		const __helpDescriptionxwDEHtk = null;
		const __helpFlags5fY2HC = "cBUCSJ5Jj8ZyLDfkSlXAhVmc1z2AbSYOPHSuQVEUUySPWCKR72K6d8AdwSY98cBwkeSjKQScUTzNSRpVcRNXbbuH";
		const _cmdzpVhweu = {
			"options": _optionsVQ2gBsV,
		"_hasHelpOption": __hasHelpOptionoj9mmg3,
		"_helpShortFlag": __helpShortFlagBWBRLzC,
		"_findOption": __findOptionQ8PMno4,
		"_helpLongFlag": __helpLongFlagp5JOw70,
		"createOption": _createOptionen5poKr,
		"_helpDescription": __helpDescriptionxwDEHtk,
		"_helpFlags": __helpFlags5fY2HC
	}
		const _returnValuewZYfVd = await _HelpgWIEaj.visibleOptions(_cmdzpVhweu)
		const __argsHecsy8k = {
		
	}
		const __namesyaeoPJ = -4.5067674305463346;
		const _returnValue0GkE49 = "2dMPhl6e3CNq0YfDLzedVHMOvgTBbKK3TJQ";
		const __aliasesDFcI4Z = () => { return _returnValue0GkE49 };
		const _optionsRlMSNCR = {
		
	}
		const _cmdUvwE0gE = {
			"_args": __argsHecsy8k,
		"_name": __namesyaeoPJ,
		"_aliases": __aliasesDFcI4Z,
		"options": _optionsRlMSNCR
	}
		const _returnValuen0qz0BW = await _HelpgWIEaj.subcommandTerm(_cmdUvwE0gE)
		const _cmdaBz8kzM = "iNUdk";
		const _returnValuen8aF5GP = await _HelpgWIEaj.subcommandTerm(_cmdaBz8kzM)
	});

	it('test for Help', async () => {
		const _HelpxD7qreJ = new Help()
		const _returnValueuV07MLx = undefined;
		const _match8boZNH = () => { return _returnValueuV07MLx };
		const _returnValueEUR5NpQ = undefined;
		const _substro0GTDyC = () => { return _returnValueEUR5NpQ };
		const _strP5DDdXu = {
			"match": _match8boZNH,
		"substr": _substro0GTDyC
	}
		const _widthw0AIZbP = -6.116003732155891;
		const _indentQo9r7Ji = 6.672637574622669;
		const _returnValueDsEln12 = "jQ0vQaBYUyn8r7NQY8n5JiGaCodtRTHH1JeR1nQ";
		const _minColumnWidthHhuEj76 = () => { return _returnValueDsEln12 };
		const _returnValueIgSzzle = await _HelpxD7qreJ.wrap(_strP5DDdXu, _widthw0AIZbP, _indentQo9r7Ji, _minColumnWidthHhuEj76)
		const _returnValuex777OFM = true;
		const _returnValuemlpbl9L = () => { return _returnValuex777OFM };
		const __argsDescriptionQIrr7JF = () => { return _returnValuemlpbl9L };
		const __argsQquBbbM = {
		
	}
		const _cmdo41R1aM = {
			"_argsDescription": __argsDescriptionQIrr7JF,
		"_args": __argsQquBbbM
	}
		const _returnValueAcj8KDQ = await _HelpxD7qreJ.visibleArguments(_cmdo41R1aM)
		const __argssoEX3R = {
		
	}
		const __nameS3nICpD = -7.018748028391938;
		const __aliasesjzygO5n = {
		
	}
		const _optionsZ5SHmo5 = {
		
	}
		const _cmdyaLOyDB = {
			"_args": __argssoEX3R,
		"_name": __nameS3nICpD,
		"_aliases": __aliasesjzygO5n,
		"options": _optionsZ5SHmo5
	}
		const _returnValueHvItYZP = await _HelpxD7qreJ.subcommandTerm(_cmdyaLOyDB)
		const __namexBrq6IV = {
		
	}
		const __aliasesDMiYBb4 = {
		
	}
		const _parentSNIfI4u = {
		
	}
		const _returnValueDVc9K2Z = "4LsJDCWFqLq4UNRtlSG9lcEHvb2yS7FuFFATkR6Ug1BN1i1XEcDPjn88jUqbRG9CfH7Xr";
		const _usageNc4ciiV = () => { return _returnValueDVc9K2Z };
		const _cmdsYLYxyA = {
			"_name": __namexBrq6IV,
		"_aliases": __aliasesDMiYBb4,
		"parent": _parentSNIfI4u,
		"usage": _usageNc4ciiV
	}
		const _returnValueNavUjo = await _HelpxD7qreJ.commandUsage(_cmdsYLYxyA)
	});

	it('test for Help', async () => {
		const _HelpeSiGgpU = new Help()
		const _argChoicesz1N7OCa = {
		
	}
		const _negateY0NRuUl = {
		
	}
		const _defaultValueucgwDWG = undefined;
		const _defaultValueDescriptionqHWZzy = false;
		const _envVarJWMDvj = null;
		const _descriptionojdCBhW = null;
		const _optionCJKsJVA = {
			"argChoices": _argChoicesz1N7OCa,
		"negate": _negateY0NRuUl,
		"defaultValue": _defaultValueucgwDWG,
		"defaultValueDescription": _defaultValueDescriptionqHWZzy,
		"envVar": _envVarJWMDvj,
		"description": _descriptionojdCBhW
	}
		const _returnValuerFVDS4O = await _HelpeSiGgpU.optionDescription(_optionCJKsJVA)
		const __argsNI7xsPJ = {
		
	}
		const __nameYaABPz5 = 0.15202494151165524;
		const __aliasesDEO9P4 = {
		
	}
		const _optionsL7JQpVF = {
		
	}
		const _cmdMSYHyGF = {
			"_args": __argsNI7xsPJ,
		"_name": __nameYaABPz5,
		"_aliases": __aliasesDEO9P4,
		"options": _optionsL7JQpVF
	}
		const _returnValueWnzTsg7 = await _HelpeSiGgpU.subcommandTerm(_cmdMSYHyGF)
	});

	it('test for Help', async () => {
		const _Helpy6xzki1 = new Help()
		const _argChoicesQ8aKPYg = false;
		const _defaultValuecyzh1G = undefined;
		const _defaultValueDescriptionyjA8rpY = undefined;
		const _arrayValuePIzTxO = undefined;
		const _arrayValueXMA2Lwt = true;
		const _arrayValueTtzrBnD = "x2jK3RuFvreAIRgCPbxprq94Lr2wNCr9gW3XUwnBsyXnG";
		const _returnValueSdxku08 = [_arrayValueTtzrBnD]
		const _arrayValueO5m75P4 = () => { return _returnValueSdxku08 };
		const _descriptionImPmnjZ = [_arrayValuePIzTxO, _arrayValueXMA2Lwt, _arrayValueO5m75P4]
		const _argumenty0CLeDg = {
			"argChoices": _argChoicesQ8aKPYg,
		"defaultValue": _defaultValuecyzh1G,
		"defaultValueDescription": _defaultValueDescriptionyjA8rpY,
		"description": _descriptionImPmnjZ
	}
		const _returnValueYXVDrCx = await _Helpy6xzki1.argumentDescription(_argumenty0CLeDg)
		const _cmdnlktLU = undefined;
		const _sortSubcommandsjKLUbS = undefined;
		const _returnValueKKVHCox = 5.083199874593596;
		const _arrayValueBJF2D1O = () => { return _returnValueKKVHCox };
		const _returnValuejXV4J3P = [_arrayValueBJF2D1O]
		const _subcommandTermXH34Ic8 = () => { return _returnValuejXV4J3P };
		const _helperJgZXYAF = {
			"sortSubcommands": _sortSubcommandsjKLUbS,
		"subcommandTerm": _subcommandTermXH34Ic8
	}
		const _returnValueQDDPhZc = await _Helpy6xzki1.formatHelp(_cmdnlktLU, _helperJgZXYAF)
		const __nameVo3ujM = {
		
	}
		const __aliaseslxKOL41 = {
		
	}
		const _parentAOsJA8c = {
		
	}
		const _returnValueocMYWLt = undefined;
		const _usagejrXOrG = () => { return _returnValueocMYWLt };
		const _cmdF9V8klN = {
			"_name": __nameVo3ujM,
		"_aliases": __aliaseslxKOL41,
		"parent": _parentAOsJA8c,
		"usage": _usagejrXOrG
	}
		const _returnValueRi5wFW = await _Helpy6xzki1.commandUsage(_cmdF9V8klN)
		const _returnValuePKLfA2I = true;
		const _descriptionsZbAiXv = () => { return _returnValuePKLfA2I };
		const _cmdtYkBLtp = {
			"description": _descriptionsZbAiXv
	}
		const _returnValuecvIrNFE = await _Helpy6xzki1.commandDescription(_cmdtYkBLtp)
	});

	it('test for Help', async () => {
		const _Help1EuZ0M = new Help()
		const _returnValueAQ5z3rk = false;
		const _matchWaZ6dIw = () => { return _returnValueAQ5z3rk };
		const _returnValuerOfCXP6 = -1.6652059832267003;
		const _substrTwsgt9X = () => { return _returnValuerOfCXP6 };
		const _strkETEigb = {
			"match": _matchWaZ6dIw,
		"substr": _substrTwsgt9X
	}
		const _widthD8t2xd = -8.083475886165619;
		const _indentsZd5vZo = 8.169247531755609;
		const _minColumnWidthKp9D3al = -5.119892805844123;
		const _returnValueKX8JqcC = await _Help1EuZ0M.wrap(_strkETEigb, _widthD8t2xd, _indentsZd5vZo, _minColumnWidthKp9D3al)
		const __argsDescription8Yj6Vv = {
		
	}
		const __argsvE2Pxvz = {
		
	}
		const _cmdAUzcdvy = {
			"_argsDescription": __argsDescription8Yj6Vv,
		"_args": __argsvE2Pxvz
	}
		const _returnValuelPL3b6 = await _Help1EuZ0M.visibleArguments(_cmdAUzcdvy)
		const _argChoicesC8PH8Ok = {
		
	}
		const _defaultValueM2DWzGD = undefined;
		const _defaultValueDescriptionOOWaKv = false;
		const _returnValuectkOl7j = false;
		const _descriptionrjVZl4O = () => { return _returnValuectkOl7j };
		const _argumentDqo2Lxx = {
			"argChoices": _argChoicesC8PH8Ok,
		"defaultValue": _defaultValueM2DWzGD,
		"defaultValueDescription": _defaultValueDescriptionOOWaKv,
		"description": _descriptionrjVZl4O
	}
		const _returnValueabiLYyn = await _Help1EuZ0M.argumentDescription(_argumentDqo2Lxx)
	});

	it('test for Help', async () => {
		const _HelpoKTikJg = new Help()
		const _arrayValuebdBl2a = "TXwurA751ndnZpB4BIbgbzXGbDfEs8apOgjutAWzeFvfk77raaNiOpJHWdzvfalvyCagv3OwlBS7kkf7Tm2nXsGF40JWSlW";
		const _returnValuefdwrsH = undefined;
		const _arrayValueCWlX0p = () => { return _returnValuefdwrsH };
		const _arrayValuecmIZ8KT = "dSY1MP66XNcWjpoV3A6N2aNM5IMi6iWhWD2ViGgC6iNSM9YZ8Y1qtIHl";
		const _arrayValueT9seRaG = "83GH2zUfiRIfYntfv7dNKa5C6WwZK1dqTjE2uJtF5nr";
		const _cmdKUnhC6L = [_arrayValuebdBl2a, _arrayValueCWlX0p, _arrayValuecmIZ8KT, _arrayValueT9seRaG]
		const _arrayValueuDoWeh = null;
		const _returnValueXSO0YM6 = [_arrayValueuDoWeh]
		const _returnValueGgq15hD = () => { return _returnValueXSO0YM6 };
		const _longestOptionTermLengthCYPsAl = () => { return _returnValueGgq15hD };
		const _arrayValueE0YSVBm = false;
		const _arrayValuemHnfUuF = 9.112678901066346;
		const _returnValueWJS3nJl = [_arrayValueE0YSVBm, _arrayValuemHnfUuF]
		const _longestSubcommandTermLengthMOant3K = () => { return _returnValueWJS3nJl };
		const _returnValuePPSGB91 = "4dOcLsy5qaAH";
		const _longestArgumentTermLengthLgxuYOA = () => { return _returnValuePPSGB91 };
		const _helperMVyaYIx = {
			"longestOptionTermLength": _longestOptionTermLengthCYPsAl,
		"longestSubcommandTermLength": _longestSubcommandTermLengthMOant3K,
		"longestArgumentTermLength": _longestArgumentTermLengthLgxuYOA
	}
		const _returnValueRMg3Rj = await _HelpoKTikJg.padWidth(_cmdKUnhC6L, _helperMVyaYIx)
		const _arrayValuev6nsfxK = 2.81241822157617;
		const _returnValuekxtkvFu = [_arrayValuev6nsfxK]
		const _descriptionKv8evn9 = () => { return _returnValuekxtkvFu };
		const _cmduUALTEM = {
			"description": _descriptionKv8evn9
	}
		const _returnValueiNWx0c = await _HelpoKTikJg.commandDescription(_cmduUALTEM)
		const _arrayValueGLzYRh = -9.347727338483867;
		const _arrayValueGnnBrIk = -6.439319199563339;
		const _optionsX9DxrXE = [_arrayValueGLzYRh, _arrayValueGnnBrIk]
		const __hasHelpOptionEcHxpBQ = null;
		const __helpShortFlagscm3Mog = 7.3193399675782445;
		const _returnValuejgbYlC = null;
		const __findOptionYP2BodQ = () => { return _returnValuejgbYlC };
		const __helpLongFlagjFZpITE = {
		
	}
		const _returnValueWByY6sN = undefined;
		const _createOptionRlkQFz3 = () => { return _returnValueWByY6sN };
		const __helpDescriptionac2usuA = -5.862508507847802;
		const __helpFlagspE4VOyd = 0.18034505736154394;
		const _cmdNHLJTqB = {
			"options": _optionsX9DxrXE,
		"_hasHelpOption": __hasHelpOptionEcHxpBQ,
		"_helpShortFlag": __helpShortFlagscm3Mog,
		"_findOption": __findOptionYP2BodQ,
		"_helpLongFlag": __helpLongFlagjFZpITE,
		"createOption": _createOptionRlkQFz3,
		"_helpDescription": __helpDescriptionac2usuA,
		"_helpFlags": __helpFlagspE4VOyd
	}
		const _returnValueAuwNxt = await _HelpoKTikJg.visibleOptions(_cmdNHLJTqB)
		const __argsDescriptionf5BDLsw = {
		
	}
		const __argsaFjoHPu = 9.177629455738867;
		const _cmdTrjzFeT = {
			"_argsDescription": __argsDescriptionf5BDLsw,
		"_args": __argsaFjoHPu
	}
		const _returnValuesDjPgZJ = await _HelpoKTikJg.visibleArguments(_cmdTrjzFeT)
	});

	it('test for Help', async () => {
		const _HelpKMdg9qu = new Help()
		const __namevBK3vqD = {
		
	}
		const _arrayValuew8jrpq = true;
		const _arrayValueRxgYL1 = "36kuXMFJ12koyzvYKktdpstYeVOE9Wnr6scvR2UVBAztdUfJDr96EMZVUxj293kstlW";
		const __aliasestRvZw3K = [_arrayValuew8jrpq, _arrayValueRxgYL1]
		const _parentM2yC2gH = {
		
	}
		const _returnValueEp3qJpM = undefined;
		const _usageeijympb = () => { return _returnValueEp3qJpM };
		const _cmdMjUdjd = {
			"_name": __namevBK3vqD,
		"_aliases": __aliasestRvZw3K,
		"parent": _parentM2yC2gH,
		"usage": _usageeijympb
	}
		const _returnValuefdWOAPX = await _HelpKMdg9qu.commandUsage(_cmdMjUdjd)
		const _flagsNvAHCtF = "rcziKqVvfpU2eQJmKVK4a7tRhoAphm62JwTvqzA3rmIKLqb9yzy";
		const _optionTMQBcWF = {
			"flags": _flagsNvAHCtF
	}
		const _returnValuecB2aUZ6 = await _HelpKMdg9qu.optionTerm(_optionTMQBcWF)
		const _returnValueIQe264h = "WG1R4LbUD3Rs62Gh4WeXG9oX8Pms53JrnrceslWbCmyVX3IzdtfhO";
		const _nameeWiWTJR = () => { return _returnValueIQe264h };
		const _argumentx8AMSVB = {
			"name": _nameeWiWTJR
	}
		const _returnValuepp5Blsq = await _HelpKMdg9qu.argumentTerm(_argumentx8AMSVB)
	});

	it('test for Help', async () => {
		const _Help1S5Tco = new Help()
		const _argChoiceszbxOUma = null;
		const _defaultValueuinDOHV = {
		
	}
		const _defaultValueDescriptionFMaoNHC = null;
		const _descriptioncICwzyF = "9qpn8fqDBtPwGTSxccdk8sJUEP6D0pt6RCYx9BIInRuZTEF3DrQ0oIc";
		const _argumentMamOghM = {
			"argChoices": _argChoiceszbxOUma,
		"defaultValue": _defaultValueuinDOHV,
		"defaultValueDescription": _defaultValueDescriptionFMaoNHC,
		"description": _descriptioncICwzyF
	}
		const _returnValueB2N0rxP = await _Help1S5Tco.argumentDescription(_argumentMamOghM)
		const _flagsZyRWYp = undefined;
		const _optionKY8K0qG = {
			"flags": _flagsZyRWYp
	}
		const _returnValueRZjcSK = await _Help1S5Tco.optionTerm(_optionKY8K0qG)
		const _cmdZJdsw9X = 5.87575754388174;
		const _returnValuePXS2CzM = await _Help1S5Tco.commandUsage(_cmdZJdsw9X)
	});

	it('test for Help', async () => {
		const _HelpqrbK6gw = new Help()
		const _cmdkZxTZB0 = false;
		const _arrayValuey0T3YlE = "wqo6Gj4oYu7868VJzU6mxKITs9truIC2EtTOM24OVOIYy4QK";
		const _arrayValuemqt1Wj = null;
		const _returnValueNwipZju = "j9wSPPZH725fpKjc61vDnRLoPYNaAgpxTdKCMa4L1mBfOrEsqStzd3f8IM7QwFxjX6PgjVASNqJ2RImLz3Nan7";
		const _arrayValuehrLZCBm = () => { return _returnValueNwipZju };
		const _arrayValuezNUrUSx = [_arrayValuemqt1Wj, _arrayValuehrLZCBm]
		const _arrayValueZoHGaUa = null;
		const _returnValuevx444mv = [_arrayValuey0T3YlE, _arrayValuezNUrUSx, _arrayValueZoHGaUa]
		const _visibleArgumentsDnTPrOr = () => { return _returnValuevx444mv };
		const _returnValueOTK2dzz = false;
		const _argumentTermLemWdLi = () => { return _returnValueOTK2dzz };
		const _helperUGgrocv = {
			"visibleArguments": _visibleArgumentsDnTPrOr,
		"argumentTerm": _argumentTermLemWdLi
	}
		const _returnValuebxTlz4k = await _HelpqrbK6gw.longestArgumentTermLength(_cmdkZxTZB0, _helperUGgrocv)
		const _argChoicesMnjFQVF = null;
		const _negatewb95l3x = undefined;
		const _defaultValuexg05txN = -2.947185918863493;
		const _arrayValueVU1Yqar = "s6nNUgzbFEn1bpEemd6NCHHF2B3aPS7GLmOjJwBCYevzIAgk4crzKHO788mNmD";
		const _arrayValuedPhLJC8 = {
		
	}
		const _arrayValueVbKMRa = "RultN3hN6WUvzhO22l3Q2tPEE1dcqW3DXt2hNyRcPXNG";
		const _arrayValuek0KjbDi = [_arrayValueVU1Yqar, _arrayValuedPhLJC8, _arrayValueVbKMRa]
		const _arrayValueDmjPbhW = null;
		const _defaultValueDescriptionmG9Udw = [_arrayValuek0KjbDi, _arrayValueDmjPbhW]
		const _envVarD0sRFe = undefined;
		const _descriptionZGJCAAo = true;
		const _optionUK30lyj = {
			"argChoices": _argChoicesMnjFQVF,
		"negate": _negatewb95l3x,
		"defaultValue": _defaultValuexg05txN,
		"defaultValueDescription": _defaultValueDescriptionmG9Udw,
		"envVar": _envVarD0sRFe,
		"description": _descriptionZGJCAAo
	}
		const _returnValueMg4EVWI = await _HelpqrbK6gw.optionDescription(_optionUK30lyj)
		const __argsO44AOMu = -9.592574834496002;
		const __nameJ4sVV8 = -9.46509582446683;
		const __aliasesVRXdst7 = {
		
	}
		const _optionslKFEpRu = {
		
	}
		const _cmdoqsIWH = {
			"_args": __argsO44AOMu,
		"_name": __nameJ4sVV8,
		"_aliases": __aliasesVRXdst7,
		"options": _optionslKFEpRu
	}
		const _returnValueDE2LILW = await _HelpqrbK6gw.subcommandTerm(_cmdoqsIWH)
	});
})