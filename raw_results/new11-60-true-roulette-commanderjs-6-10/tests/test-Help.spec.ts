export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpGdPK0by = new Help()
		const _cmdenjcV3 = undefined;
		const _sortSubcommandsSqThdAo = {
		
	}
		const _returnValueH75NGla = false;
		const _subcommandTermjkDK14 = () => { return _returnValueH75NGla };
		const _helperPMhMvCO = {
			"sortSubcommands": _sortSubcommandsSqThdAo,
		"subcommandTerm": _subcommandTermjkDK14
	}
		const _returnValueB0KD69 = await _HelpGdPK0by.longestSubcommandTermLength(_cmdenjcV3, _helperPMhMvCO)
		const _arrayValueDAnTGmD = undefined;
		const _arrayValueXVe6hvQ = undefined;
		const _arrayValueFS4h6W2 = null;
		const _returnValuet91WKCe = [_arrayValueDAnTGmD, _arrayValueXVe6hvQ, _arrayValueFS4h6W2]
		const _namebCaYyzV = () => { return _returnValuet91WKCe };
		const _argumentTfAKzOK = {
			"name": _namebCaYyzV
	}
		const _returnValueyiv4nIQ = await _HelpGdPK0by.argumentTerm(_argumentTfAKzOK)
		const _namecvf3aRH = {
		
	}
		const _cmdOYWN6ki = new Command(_namecvf3aRH)
		const _arrayValueijc8s7m = true;
		const _arrayValuewNpGwz = "1am4id3h9sPo8nUQdDrgutA2cT3XLC59g50p1R3";
		const _arrayValueAfvNk5 = -5.74836345275201;
		const _arrayValueuJcmoo6 = true;
		const _returnValueQiHkQd = [_arrayValueijc8s7m, _arrayValuewNpGwz, _arrayValueAfvNk5, _arrayValueuJcmoo6]
		const _configjJHJCEf = () => { return _returnValueQiHkQd };
		const _flagskDTADFq = -1.2171639295632222;
		const _descriptionS4XT2ny = -8.649058750715213;
		const _returnValueubFTSAD = undefined;
		const _fnmmQ7DH0 = () => { return _returnValueubFTSAD };
		const _defaultValueJ58nx0A = -1.853572977940015;
		const _returnValueLZNVb7 = await _cmdOYWN6ki._optionEx(_configjJHJCEf, _flagskDTADFq, _descriptionS4XT2ny, _fnmmQ7DH0, _defaultValueJ58nx0A)
		const _returnValuectjOrhj = await _HelpGdPK0by.visibleOptions(_cmdOYWN6ki)
		const _optionktIu8zB = "lGwidg4oqXDa5tHueA2Ou8n3zB425cb1XXjGn4s4WE2Jig3pwGhuUlxH2sH2sl6PcnO5rGJ";
		const _returnValueoqVQiLf = await _HelpGdPK0by.optionDescription(_optionktIu8zB)
	});

	it('test for Help', async () => {
		const _HelpILUMeqz = new Help()
		const _cmdpvSLVjm = false;
		const _returnValuejB3jC6D = 5.101580970948838;
		const _returnValuecymRPZL = () => { return _returnValuejB3jC6D };
		const _helperkb9OB2m = () => { return _returnValuecymRPZL };
		const _returnValueJf3uyNg = await _HelpILUMeqz.longestArgumentTermLength(_cmdpvSLVjm, _helperkb9OB2m)
		const __argspPOTaL = {
		
	}
		const __nameoOGIGpW = -3.028737056574524;
		const __aliasesWs0XALY = {
		
	}
		const _optionsclCwiXn = {
		
	}
		const _cmdFbLNrhd = {
			"_args": __argspPOTaL,
		"_name": __nameoOGIGpW,
		"_aliases": __aliasesWs0XALY,
		"options": _optionsclCwiXn
	}
		const _returnValueXYYWZDU = await _HelpILUMeqz.subcommandTerm(_cmdFbLNrhd)
		const _argumenteyT3ER2 = "5QOaoLV8z2CrxnxH7yQfXgeMAnVvR9R1yk25AODMalRoGzEbud1dUnUMFYOatBSXqk";
		const _returnValueqD60JJx = await _HelpILUMeqz.argumentDescription(_argumenteyT3ER2)
	});

	it('test for Help', async () => {
		const _HelpKIHAiU3 = new Help()
		const _cmdEvk0ftw = "Kjo1kVICxVnktRaNAXlbMt6Gp7LJDz5mTt5igVxzgqFHYmK18AS8SARRxeDRYpGGXEw2hF82M7bZ7vNNEVIXpH5";
		const _helperJAvQm35 = new Help()
		const _arrayValueJR2VzHf = false;
		const _arrayValuezw6mVIK = null;
		const _argumentaG9CRCN = [_arrayValueJR2VzHf, _arrayValuezw6mVIK]
		const _returnValueWU0pLPR = await _helperJAvQm35.argumentDescription(_argumentaG9CRCN)
		const _cmdvejvsPi = {
		
	}
		const _returnValueUK8dsA = null;
		const _visibleArgumentsTVEPBC7 = () => { return _returnValueUK8dsA };
		const _returnValue7bZ1pT = null;
		const _argumentTermLxWlx8l = () => { return _returnValue7bZ1pT };
		const _helperZ9Zvik8 = {
			"visibleArguments": _visibleArgumentsTVEPBC7,
		"argumentTerm": _argumentTermLxWlx8l
	}
		const _returnValueAGOgHc9 = await _helperJAvQm35.longestArgumentTermLength(_cmdvejvsPi, _helperZ9Zvik8)
		const _returnValueptHwzzQ = await _HelpKIHAiU3.longestOptionTermLength(_cmdEvk0ftw, _helperJAvQm35)
	});

	it('test for Help', async () => {
		const _HelpNAENZcs = new Help()
		const _arrayValueTaW2QM = -9.535599011372438;
		const _arrayValueteVaI48 = false;
		const _cmdhdwhqB3 = [_arrayValueTaW2QM, _arrayValueteVaI48]
		const _returnValueN8axmgz = await _HelpNAENZcs.subcommandTerm(_cmdhdwhqB3)
		const __argsxCsd2J = {
		
	}
		const __nameKD59oko = 7.6569113712736865;
		const __aliasesfNnKWee = {
		
	}
		const _optionsnFVtt0x = undefined;
		const _cmdXnixZn = {
			"_args": __argsxCsd2J,
		"_name": __nameKD59oko,
		"_aliases": __aliasesfNnKWee,
		"options": _optionsnFVtt0x
	}
		const _returnValueDRCbnUe = await _HelpNAENZcs.subcommandTerm(_cmdXnixZn)
		const __argsXSVPlam = {
		
	}
		const __nameWIdFf57 = 9.717493929190557;
		const __aliasesCXCHwt = {
		
	}
		const _optionsB8XJbTw = {
		
	}
		const _cmdSKfsNd2 = {
			"_args": __argsXSVPlam,
		"_name": __nameWIdFf57,
		"_aliases": __aliasesCXCHwt,
		"options": _optionsB8XJbTw
	}
		const _returnValuecxgxgj2 = await _HelpNAENZcs.subcommandTerm(_cmdSKfsNd2)
		const _returnValueYGHNFjH = "fTuicLeRrAFv19vzUdnbpwyyN";
		const _sliceY4eeCU = () => { return _returnValueYGHNFjH };
		const _nameA3JC7sQ = {
			"slice": _sliceY4eeCU
	}
		const _description7wxvT8 = undefined;
		const _cmddiJCaFr = new Argument(_nameA3JC7sQ, _description7wxvT8)
		const _returnValuet2bPuL = await _cmddiJCaFr.name()
		const _valuelEneKd = "NweKGIFR1bxNW4CYIQA9YG7lVMKgVL4P33qdCshj3zZuOhgIkM2Re2mJNkPtvAyXz1WCwWtunWNPwXrxuC5KoCB7giObSt9lu";
		const _arrayValueYHTq5Nc = {
		
	}
		const _previousR5eoZ0j = [_arrayValueYHTq5Nc]
		const _returnValuejvpbNZ3 = await _cmddiJCaFr._concatValue(_valuelEneKd, _previousR5eoZ0j)
		const _arrayValueFMEbMRq = []
		const _valueNTLWiqu = [_arrayValueFMEbMRq]
		const _descriptionwxns9Bs = undefined;
		const _returnValueKW2S1Dz = await _cmddiJCaFr.default(_valueNTLWiqu, _descriptionwxns9Bs)
		const _returnValuehskrVtX = await _HelpNAENZcs.commandDescription(_cmddiJCaFr)
		const _cmdmEpVXX2 = {
		
	}
		const _helperoZcwhon = new Help()
		const _arrayValuesFJBKES = null;
		const _arrayValuec7LFr78 = true;
		const _arrayValuebnNptYJ = -6.15810373973153;
		const _arrayValuegvxtxOp = true;
		const _arrayValueZluqdw = {
		
	}
		const _arrayValueYpG7gBc = undefined;
		const _arrayValueBKaymlh = [_arrayValuebnNptYJ, _arrayValuegvxtxOp, _arrayValueZluqdw, _arrayValueYpG7gBc]
		const _cmddCYyAtc = [_arrayValuesFJBKES, _arrayValuec7LFr78, _arrayValueBKaymlh]
		const _returnValuemqWyPPB = await _helperoZcwhon.subcommandDescription(_cmddCYyAtc)
		const _returnValuemvveQjv = -5.304523104942891;
		const _flagsbjpl64M = () => { return _returnValuemvveQjv };
		const _descriptionPOlZGc = undefined;
		const _optionCn4qy63 = new Option(_flagsbjpl64M, _descriptionPOlZGc)
		const _valueB8gSTKU = true;
		const _previousXYNzmT1 = "FApJpX9M9Npf8YT7sau7q";
		const _returnValuebLkfIpU = await _optionCn4qy63._concatValue(_valueB8gSTKU, _previousXYNzmT1)
		const _mandatorySbiLCEO = false;
		const _returnValuetU9QsH4 = await _optionCn4qy63.makeOptionMandatory(_mandatorySbiLCEO)
		const _returnValuepFC31MA = await _optionCn4qy63.name()
		const _valuegvz1ZhU = "qW3Lwfucq8MfaTJo8XtSTwCsShOSk4veL2IvOYUigScMAO55oGmwkuN2rtO1HrKzjP4gMfgnDoRWNI06j4gpeKjNm88zA";
		const _previous4O2Ddr = "iNgRSy8uWRE7elTOS8s7daVngxFERLj0bpNn";
		const _returnValuepRPAPUX = await _optionCn4qy63._concatValue(_valuegvz1ZhU, _previous4O2Ddr)
		const _mandatoryX22ukYb = true;
		const _returnValuelbKvTMT = await _optionCn4qy63.makeOptionMandatory(_mandatoryX22ukYb)
		const _returnValueAFo26OT = await _helperoZcwhon.optionDescription(_optionCn4qy63)
		const _returnValueXy1LndR = null;
		const _arrayValueywMnzsV = () => { return _returnValueXy1LndR };
		const _arrayValuewabWvK1 = false;
		const _returnValuey5DZxOT = false;
		const _arrayValuerIhFILM = () => { return _returnValuey5DZxOT };
		const _arrayValueH1eOATM = -4.470502405710752;
		const _arrayValuecnwyo1 = [_arrayValuewabWvK1, _arrayValuerIhFILM, _arrayValueH1eOATM]
		const _cmddSM35r = [_arrayValueywMnzsV, _arrayValuecnwyo1]
		const _returnValueTX3l8SP = await _helperoZcwhon.subcommandTerm(_cmddSM35r)
		const _returnValueTNuLgo = await _HelpNAENZcs.formatHelp(_cmdmEpVXX2, _helperoZcwhon)
	});

	it('test for Help', async () => {
		const _HelpaqGuMOe = new Help()
		const _optionEdP1kN = "t5";
		const _returnValueLhykb5i = await _HelpaqGuMOe.optionDescription(_optionEdP1kN)
		const _arrayValueg6jsKuj = false;
		const _arrayValuetObILq = "dxhXmMqh";
		const _argumentajSBtij = [_arrayValueg6jsKuj, _arrayValuetObILq]
		const _returnValueB0rhB5r = await _HelpaqGuMOe.argumentDescription(_argumentajSBtij)
	});

	it('test for Help', async () => {
		const _HelpcL5nB8h = new Help()
		const _cmdhyZGxcG = "CheLz73dJIrusYFXA6RKvXEtN4Hw54PfxwJgNM47Jadu6LcoO4WHY6HlHq3OLkcc";
		const _returnValuew6vHzU5 = await _HelpcL5nB8h.visibleArguments(_cmdhyZGxcG)
		const _cmdevBtuXd = "6SIEGok9FssWDQJsJ8n44i8tDNBqckA9s4Qi";
		const _returnValuegjFuFyM = await _HelpcL5nB8h.visibleArguments(_cmdevBtuXd)
		const _cmdeWMOGHA = undefined;
		const _sortSubcommandsoM28lfu = null;
		const _returnValueNtboZ5B = undefined;
		const _returnValueLsExxR = () => { return _returnValueNtboZ5B };
		const _subcommandTermtize3UM = () => { return _returnValueLsExxR };
		const _helperL2zIpzS = {
			"sortSubcommands": _sortSubcommandsoM28lfu,
		"subcommandTerm": _subcommandTermtize3UM
	}
		const _returnValueiEiLzrk = await _HelpcL5nB8h.longestSubcommandTermLength(_cmdeWMOGHA, _helperL2zIpzS)
		const _arrayValueeeAnBhv = false;
		const _cmdCdvYFN9 = [_arrayValueeeAnBhv]
		const _returnValueYCwt1vL = await _HelpcL5nB8h.commandUsage(_cmdCdvYFN9)
	});

	it('test for Help', async () => {
		const _HelpZpG69KS = new Help()
		const _cmdT5oG5ZK = "dgfVmjxCGNfQYtdik5l5wSXW8Q1P8lNTco5Hn0BJxYIewSXAFfZYfEP5MsylWs8UmjVQGAxu4EwNex8WbVfkqtxkYT";
		const _returnValuen561JWc = await _HelpZpG69KS.commandUsage(_cmdT5oG5ZK)
		const _cmd6t2dMr = "ekJVAThIsAJ18RZqPSYeBT4en7";
		const _helpervVogicF = "o5QwlkY8mCdDkGmRE76pHKdapMBbFIZe4h9cpt8VxoywwxQjJvu8IeDDNyFXSvzDHIdm2qeZ";
		const _returnValueGkv1C3x = await _HelpZpG69KS.padWidth(_cmd6t2dMr, _helpervVogicF)
	});

	it('test for Help', async () => {
		const _HelpHn4nyu = new Help()
		const _flagsVjozEyr = false;
		const _optionLyIli36 = {
			"flags": _flagsVjozEyr
	}
		const _returnValuewzEXNXQ = await _HelpHn4nyu.optionTerm(_optionLyIli36)
	});

	it('test for Help', async () => {
		const _HelpZjxyxep = new Help()
		const _exitCodejyjv1b = null;
		const _arrayValueFisYJu3 = false;
		const _arrayValueLx6pKds = true;
		const _arrayValueeQuVr7v = 9.033251026090625;
		const _arrayValueE0w2Nw7 = [_arrayValueFisYJu3, _arrayValueLx6pKds, _arrayValueeQuVr7v]
		const _arrayValuexsE1fVs = undefined;
		const _returnValueWoeyl7k = [_arrayValueE0w2Nw7, _arrayValuexsE1fVs]
		const _codefYuIvXI = () => { return _returnValueWoeyl7k };
		const _messageUgQn8pv = true;
		const _argumentCvMgiG = new CommanderError(_exitCodejyjv1b, _codefYuIvXI, _messageUgQn8pv)
		const _returnValueNcaiBp6 = await _HelpZjxyxep.argumentTerm(_argumentCvMgiG)
		const _arrayValue6o1Jhi = "dLy0tcNscPin2EIFFRkRUuPrMhtJpgYqPofG9T8bsPJ1SaUnQ2WotRMw3WIo";
		const _arrayValueUvbDX3d = "xt7IsKYlWtbcbqpr8vlgYPC16FiVn5rwP0yehSK7Q5hjCBncBsv9Y3Qoh37";
		const _flagsrOJ7a9k = [_arrayValue6o1Jhi, _arrayValueUvbDX3d]
		const _optionJTlkQJy = {
			"flags": _flagsrOJ7a9k
	}
		const _returnValueZDByvu8 = await _HelpZjxyxep.optionTerm(_optionJTlkQJy)
		const _returnValuedR9Y7cc = 9.936888458021112;
		const _argumentoCIoTgG = () => { return _returnValuedR9Y7cc };
		const _returnValueBK5blzr = await _HelpZjxyxep.argumentDescription(_argumentoCIoTgG)
		const _returnValuegnwlXYN = "vWNuNb6";
		const _cmdG8cXMXb = () => { return _returnValuegnwlXYN };
		const _returnValuegLoSd2F = await _HelpZjxyxep.subcommandTerm(_cmdG8cXMXb)
		const _cmdZ4AUbtk = null;
		const _helperGbpXPS = new Help()
		const _nameuyCbnov = -4.3505408944977955;
		const _cmdbhijzAb = new Command(_nameuyCbnov)
		const _flagspCF3ul = {
		
	}
		const _descriptionqXMWVXK = -6.989294265569442;
		const _returnValuejshHxnF = await _cmdbhijzAb.helpOption(_flagspCF3ul, _descriptionqXMWVXK)
		const _commandNamejFlQqY = {
		
	}
		const _operandsa3IJaI3 = "hGRgsYzspp66lNVrT0puOiHrdQqHd7STp3VmED1zPKEF2AAeaVCQTS27UIoTjTTwblB9Y6XHWpO8TR8AEqB0zX5bqvexVJcHh";
		const _unknownpyw1ye = null;
		const _returnValuePm7kQHi = await _cmdbhijzAb._dispatchSubcommand(_commandNamejFlQqY, _operandsa3IJaI3, _unknownpyw1ye)
		const _arrayValueXELACyG = -7.202522881377805;
		const _exitCodePMiD1Of = [_arrayValueXELACyG]
		const _returnValueRRkdQBa = true;
		const _codeoq1V8dm = () => { return _returnValueRRkdQBa };
		const _arrayValuejtjBRAU = -7.341835866552034;
		const _arrayValue6y4LPn = null;
		const _messageX5RlRcc = [_arrayValuejtjBRAU, _arrayValue6y4LPn]
		const _returnValuePA6BJJS = await _cmdbhijzAb._displayError(_exitCodePMiD1Of, _codeoq1V8dm, _messageX5RlRcc)
		const _fnrXmQcG9 = "iVIcdtofS7cimOnB6rJU8KZ4XwwkzG1EmpXzW7dDmFF5W9nulAX7doU35PJB9hPgwVT1Ewl8n";
		const _returnValueCZ1g7QL = await _cmdbhijzAb.action(_fnrXmQcG9)
		const _returnValueydM5C69 = await _helperGbpXPS.commandDescription(_cmdbhijzAb)
		const _cmdH5fdfyk = "LO83JoYTpAqKFAycMf2yiFYNB44Ksfq8bUvP5YJIT6HTaqpiOdrUAuXHbivRVoeVkZMDWSoq1m3F5h";
		const _returnValuevBnGPok = null;
		const _visibleOptionsoOtRuZk = () => { return _returnValuevBnGPok };
		const _arrayValueC1w4Ggd = null;
		const _returnValuetcSMkWc = [_arrayValueC1w4Ggd]
		const _optionTermjG8CVR1 = () => { return _returnValuetcSMkWc };
		const _helperpOeidqZ = {
			"visibleOptions": _visibleOptionsoOtRuZk,
		"optionTerm": _optionTermjG8CVR1
	}
		const _returnValuev1zgWm = await _helperGbpXPS.longestOptionTermLength(_cmdH5fdfyk, _helperpOeidqZ)
		const _cmdVE0mTp = false;
		const _returnValueStkExj = undefined;
		const _sortSubcommandsyAV45OR = () => { return _returnValueStkExj };
		const _returnValueCNIT4YZ = "aE0noQG1GFmsx8JPHJCdTsmbQSJ5LL0u";
		const _subcommandTermL7UZNQM = () => { return _returnValueCNIT4YZ };
		const _helperWUavO1m = {
			"sortSubcommands": _sortSubcommandsyAV45OR,
		"subcommandTerm": _subcommandTermL7UZNQM
	}
		const _returnValueRiVJqUJ = await _helperGbpXPS.longestSubcommandTermLength(_cmdVE0mTp, _helperWUavO1m)
		const __argsDescriptionm68OOuz = {
		
	}
		const __argsu7Da5pF = {
		
	}
		const _cmdIN3myq0 = {
			"_argsDescription": __argsDescriptionm68OOuz,
		"_args": __argsu7Da5pF
	}
		const _returnValueYy2jvLq = await _helperGbpXPS.visibleArguments(_cmdIN3myq0)
		const _returnValueiHAwdOI = await _HelpZjxyxep.longestOptionTermLength(_cmdZ4AUbtk, _helperGbpXPS)
	});

	it('test for Help', async () => {
		const _HelpcEm7EbI = new Help()
		const _cmdoODj6CU = "vJaP7w";
		const _returnValueEpdLzgg = undefined;
		const _arrayValue4pnG41 = () => { return _returnValueEpdLzgg };
		const _arrayValueAcHrg5N = "sDg9fMJYy7ppZPBM";
		const _helper2B5zx3 = [_arrayValue4pnG41, _arrayValueAcHrg5N]
		const _returnValuepJTXdcz = await _HelpcEm7EbI.longestOptionTermLength(_cmdoODj6CU, _helper2B5zx3)
		const _argChoicesrATZ9P8 = {
		
	}
		const _defaultValue8iqE8f = false;
		const _defaultValueDescriptionvP0bzso = 9.770240387010414;
		const _descriptionL6kl638 = 9.455715875597253;
		const _argumentB5nRwgg = {
			"argChoices": _argChoicesrATZ9P8,
		"defaultValue": _defaultValue8iqE8f,
		"defaultValueDescription": _defaultValueDescriptionvP0bzso,
		"description": _descriptionL6kl638
	}
		const _returnValuedfkDte = await _HelpcEm7EbI.argumentDescription(_argumentB5nRwgg)
		const _returnValueyULjU3 = []
		const _arrayValue2yMyyK = () => { return _returnValueyULjU3 };
		const _name0CN0Gq = [_arrayValue2yMyyK]
		const _cmdCkIYuPM = new Command(_name0CN0Gq)
		const _nameP6NGOmQ = undefined;
		const _returnValueSNLPCjC = await _cmdCkIYuPM._findCommand(_nameP6NGOmQ)
		const _arrayValuepUSkZre = {
		
	}
		const _arrayValueT4pEZDw = 2.211983983738035;
		const _returnValuebDbqyhS = [_arrayValuepUSkZre, _arrayValueT4pEZDw]
		const _returnValue4N6KTf = () => { return _returnValuebDbqyhS };
		const _namemkXsSTZ = () => { return _returnValue4N6KTf };
		const _arrayValuehdLRuzU = false;
		const _arrayValuem8Xjevy = undefined;
		const _returnValuerHrZ2Vz = [_arrayValuehdLRuzU, _arrayValuem8Xjevy]
		const _attributeNamesLursnw = () => { return _returnValuerHrZ2Vz };
		const _defaultValuemKIOws = undefined;
		const _negateWxfqS4Y = "f7Xf8Fhu3";
		const _optionalezAXTr5 = "kmz0yxIj3RQNKPY9SQBvYbEYJC37hhbbTexOcMJBloAnAsec8";
		const _arrayValueKnweDhT = false;
		const _requiredjidD3x = [_arrayValueKnweDhT]
		const _longm9BTTWN = {
		
	}
		const _returnValuebXei4Ga = "LffvuIswmqPQMeWiDD1L8ASGXnP73tW2tuyCU11XTuvei8yvZHK2rdcG6KNKNAOP9XTmWWTWLU1breUWjyC1UaHPqgMp1NEUmN";
		const _parseArgV724Sq = () => { return _returnValuebXei4Ga };
		const _variadicSOcDR1z = undefined;
		const _returnValueSTkNXMo = true;
		const __concatValuezgRUw0N = () => { return _returnValueSTkNXMo };
		const _flagsO0r30od = undefined;
		const _envVarTPpwetX = null;
		const _optionN0evTpx = {
			"name": _namemkXsSTZ,
		"attributeName": _attributeNamesLursnw,
		"defaultValue": _defaultValuemKIOws,
		"negate": _negateWxfqS4Y,
		"optional": _optionalezAXTr5,
		"required": _requiredjidD3x,
		"long": _longm9BTTWN,
		"parseArg": _parseArgV724Sq,
		"variadic": _variadicSOcDR1z,
		"_concatValue": __concatValuezgRUw0N,
		"flags": _flagsO0r30od,
		"envVar": _envVarTPpwetX
	}
		const _returnValueETGZM9j = await _cmdCkIYuPM.addOption(_optionN0evTpx)
		const _nameQdTqqA = "QSP0x8bVNUYfrbYb2TP9r6";
		const _returnValueB6fMU8H = await _cmdCkIYuPM._findCommand(_nameQdTqqA)
		const _arrayValueVr01Fcs = null;
		const _arrayValueG43TRUP = 7.803942063389044;
		const _arrayValuenpZIwrP = 1.464500402474215;
		const _arrayValueGW5Gbh1 = {
		
	}
		const _keysUHoOpn = [_arrayValueVr01Fcs, _arrayValueG43TRUP, _arrayValuenpZIwrP, _arrayValueGW5Gbh1]
		const _valueBIUNsSc = undefined;
		const _returnValueMRqei3z = await _cmdCkIYuPM.setOptionValue(_keysUHoOpn, _valueBIUNsSc)
		const _returnValueYC7L0wq = await _HelpcEm7EbI.commandUsage(_cmdCkIYuPM)
		const _arrayValueVacqKzx = undefined;
		const _arrayValueH0WIvnV = undefined;
		const _arrayValuewAOs10E = true;
		const _arrayValueu2tnEwP = null;
		const _arrayValueDhj6Yzg = [_arrayValuewAOs10E, _arrayValueu2tnEwP]
		const _arrayValueVIq5JC9 = [_arrayValueDhj6Yzg]
		const _cmdWbYpyGh = [_arrayValueVacqKzx, _arrayValueH0WIvnV, _arrayValueVIq5JC9]
		const _returnValuemxvGHG1 = await _HelpcEm7EbI.subcommandDescription(_cmdWbYpyGh)
		const _cmdNdW33XG = "vq8fzLctNib545EYNtaRwERQklyLKNgbeuoyq7ISVaU7Xn82UoYB6NoZMxVLAmhlW3";
		const _returnValuewRVLKbr = await _HelpcEm7EbI.commandUsage(_cmdNdW33XG)
	});

	it('test for Help', async () => {
		const _HelpvvdvlLN = new Help()
		const _arrayValueq5KPdK = undefined;
		const _cmdnsALtX7 = [_arrayValueq5KPdK]
		const _returnValuelMhEsh = "RM2VbPHkBl8uEnuFFtnNnBAr84DsMv5DyqGxSNTboWo60b";
		const _helperf3EUOVy = () => { return _returnValuelMhEsh };
		const _returnValueDdKbOsb = await _HelpvvdvlLN.padWidth(_cmdnsALtX7, _helperf3EUOVy)
	});

	it('test for Help', async () => {
		const _HelpIKA0vNI = new Help()
		const _argChoicesS99U7iv = {
		
	}
		const _defaultValueYnaTxoU = undefined;
		const _defaultValueDescriptionJHrXsI1 = false;
		const _descriptioniRIHsci = undefined;
		const _argumentaoGM6ly = {
			"argChoices": _argChoicesS99U7iv,
		"defaultValue": _defaultValueYnaTxoU,
		"defaultValueDescription": _defaultValueDescriptionJHrXsI1,
		"description": _descriptioniRIHsci
	}
		const _returnValuebS8OOgY = await _HelpIKA0vNI.argumentDescription(_argumentaoGM6ly)
		const _returnValuexoElQ7L = "VQlovEb3WJdW0BRbWNi2KhDXLaNt";
		const _argumentxZVHwhk = () => { return _returnValuexoElQ7L };
		const _returnValueX8ZRxu = await _HelpIKA0vNI.argumentTerm(_argumentxZVHwhk)
		const _cmdjolcMfC = "U46xnlfVOOPVGE8HEmqixyaqB8UTqlDfkOcoctu96Vpt6d1tFrxyjBv0bf3GGwTsvGAdr";
		const _returnValueFlnL3Vj = await _HelpIKA0vNI.subcommandDescription(_cmdjolcMfC)
		const _argChoicesYmMQv2C = {
		
	}
		const _defaultValueKBF7K2H = undefined;
		const _defaultValueDescriptioniiU32NQ = "nUsYmH29k10MDpfzLazCDM5Wu5N2RyvqsagiuNm84aXcQas";
		const _arrayValuevmQ30fS = 3.6786861162521447;
		const _descriptionNjEsCMP = [_arrayValuevmQ30fS]
		const _argumentJpGCoH2 = {
			"argChoices": _argChoicesYmMQv2C,
		"defaultValue": _defaultValueKBF7K2H,
		"defaultValueDescription": _defaultValueDescriptioniiU32NQ,
		"description": _descriptionNjEsCMP
	}
		const _returnValueT0icc8L = await _HelpIKA0vNI.argumentDescription(_argumentJpGCoH2)
	});

	it('test for Help', async () => {
		const _HelpUsW7fjj = new Help()
		const _strxHs7qzr = "BznmAQNDCWtWKnEr9";
		const _widthZG5Wh3J = -2.9568687164486054;
		const _indenthlorlV6 = 3.5619275399724177;
		const _minColumnWidthW1QjM84 = -9.868303800683806;
		const _returnValuebEZ44YZ = await _HelpUsW7fjj.wrap(_strxHs7qzr, _widthZG5Wh3J, _indenthlorlV6, _minColumnWidthW1QjM84)
		const _arrayValueYjXnQZ = "Mx3C4tuw";
		const _arrayValuegyEIF0f = null;
		const _arrayValueWedoJ4D = {
		
	}
		const _strbmirFvi = [_arrayValueYjXnQZ, _arrayValuegyEIF0f, _arrayValueWedoJ4D]
		const _widthppTURW = 5.8677280223109225;
		const _indentqeIcTMb = -7.553614199583396;
		const _minColumnWidthS6mkDMm = -7.656344523176781;
		const _returnValueBQ1s5I3 = await _HelpUsW7fjj.wrap(_strbmirFvi, _widthppTURW, _indentqeIcTMb, _minColumnWidthS6mkDMm)
		const _cmdSWWh7Ib = undefined;
		const _arrayValuedJhRpAV = 9.082985244099564;
		const _arrayValueLd5fxed = -8.281650397021158;
		const _arrayValueb4u2wYf = []
		const _helpermF9U0ND = [_arrayValuedJhRpAV, _arrayValueLd5fxed, _arrayValueb4u2wYf]
		const _returnValueimgZ9DT = await _HelpUsW7fjj.padWidth(_cmdSWWh7Ib, _helpermF9U0ND)
	});

	it('test for Help', async () => {
		const _Help8pwoIh = new Help()
		const __argsDescriptionuLQM0jJ = {
		
	}
		const __argsBvv0GYB = {
		
	}
		const _cmdz9jRKmG = {
			"_argsDescription": __argsDescriptionuLQM0jJ,
		"_args": __argsBvv0GYB
	}
		const _returnValued2yp4zf = await _Help8pwoIh.visibleArguments(_cmdz9jRKmG)
		const _cmdEEA7cgA = undefined;
		const _sortSubcommands5UDEoC = "ia1YRUhXwww";
		const _returnValuegJWpS1u = "5V6Hvp5IuCA86OrRqpHnSl7G";
		const _subcommandTermRKWovtW = () => { return _returnValuegJWpS1u };
		const _helperwJQg7RW = {
			"sortSubcommands": _sortSubcommands5UDEoC,
		"subcommandTerm": _subcommandTermRKWovtW
	}
		const _returnValueRsVR0jQ = await _Help8pwoIh.longestSubcommandTermLength(_cmdEEA7cgA, _helperwJQg7RW)
		const _cmdwp4HV2U = true;
		const _arrayValuetTS1a9D = "GpTovvbUHyaBOW5qC81HXQ1kwOmJGXgpfbhnCdKKGnoQMVBFkeIvEC7QMioqWcnIC9P";
		const _arrayValuefceZVNK = null;
		const _helperFHuQADh = [_arrayValuetTS1a9D, _arrayValuefceZVNK]
		const _returnValueqO6bjcG = await _Help8pwoIh.longestArgumentTermLength(_cmdwp4HV2U, _helperFHuQADh)
		const _strDvy2kZp = "B";
		const _widthCacRPbx = -1.4654534441510734;
		const _indentiNwCtCg = 0.7773278061943483;
		const _minColumnWidthyNv9L42 = -6.106682475850276;
		const _returnValueYuozjRI = await _Help8pwoIh.wrap(_strDvy2kZp, _widthCacRPbx, _indentiNwCtCg, _minColumnWidthyNv9L42)
	});

	it('test for Help', async () => {
		const _HelpLB5UGKs = new Help()
		const _cmdaYlbI9U = "qvPK8cueplwlRDJXQs5LARmwL47PVlpvRC";
		const _sortSubcommandsoAV6ifE = 4.5923260811764255;
		const _returnValuedxl3WO = false;
		const _returnValuePYAg39Y = () => { return _returnValuedxl3WO };
		const _subcommandTermmrzBuoS = () => { return _returnValuePYAg39Y };
		const _helperFase49Y = {
			"sortSubcommands": _sortSubcommandsoAV6ifE,
		"subcommandTerm": _subcommandTermmrzBuoS
	}
		const _returnValueRoSE3HU = await _HelpLB5UGKs.formatHelp(_cmdaYlbI9U, _helperFase49Y)
		const _cmdRcPOjjX = undefined;
		const _returnValueLa40htn = await _HelpLB5UGKs.commandUsage(_cmdRcPOjjX)
		const _flagsVYNHJGY = "tWHU4Ht9uzUuvUs2";
		const _descriptionwUxPBdu = null;
		const _argumentDgY9qvq = new Option(_flagsVYNHJGY, _descriptionwUxPBdu)
		const _valueZFYyHre = 4.253777709374431;
		const _previousssZmnsm = {
		
	}
		const _returnValueQNZb5IY = await _argumentDgY9qvq._concatValue(_valueZFYyHre, _previousssZmnsm)
		const _fnai2NajU = {
		
	}
		const _returnValueRQA8sVJ = await _argumentDgY9qvq.argParser(_fnai2NajU)
		const _returnValueJUCL44G = await _HelpLB5UGKs.argumentDescription(_argumentDgY9qvq)
	});

	it('test for Help', async () => {
		const _HelpqcjgECA = new Help()
		const _arrayValueZVhHEcv = -0.742898774331195;
		const _arrayValuezARAQwT = 8.862792027900891;
		const _arrayValuej1zb4Cq = []
		const _arrayValuerC9hx4K = [_arrayValuej1zb4Cq]
		const _argChoicesTe5pj14 = [_arrayValueZVhHEcv, _arrayValuezARAQwT, _arrayValuerC9hx4K]
		const _negate8rm09Z = null;
		const _defaultValuetM6X02C = undefined;
		const _defaultValueDescriptionF6Cew6D = null;
		const _envVarvUDxDxn = undefined;
		const _description6jmZcY = -9.532556942155537;
		const _optionXLaCGx1 = {
			"argChoices": _argChoicesTe5pj14,
		"negate": _negate8rm09Z,
		"defaultValue": _defaultValuetM6X02C,
		"defaultValueDescription": _defaultValueDescriptionF6Cew6D,
		"envVar": _envVarvUDxDxn,
		"description": _description6jmZcY
	}
		const _returnValueBANg6gb = await _HelpqcjgECA.optionDescription(_optionXLaCGx1)
		const _cmdDxk1D0h = -0.22929168528503396;
		const _returnValuezaWzAVY = null;
		const _visibleOptionscSmn75D = () => { return _returnValuezaWzAVY };
		const _returnValueGi09l3b = {
		
	}
		const _optionTermLHiD3u = () => { return _returnValueGi09l3b };
		const _helperuap4zSq = {
			"visibleOptions": _visibleOptionscSmn75D,
		"optionTerm": _optionTermLHiD3u
	}
		const _returnValueMRDznQb = await _HelpqcjgECA.longestOptionTermLength(_cmdDxk1D0h, _helperuap4zSq)
		const _namertcW8h = false;
		const _cmdsn8AG0h = new Command(_namertcW8h)
		const _passThroughXsyTMoq = false;
		const _returnValueq7TkGFl = await _cmdsn8AG0h.passThroughOptions(_passThroughXsyTMoq)
		const _keyOSnB9cp = "cx9RuOmeUracbokP8UatoTaPEexVE9JbBVWVr8A8w7durzS5Kg6A5lvHF3";
		const _returnValuenj5HpFz = await _cmdsn8AG0h.getOptionValueSource(_keyOSnB9cp)
		const _displayHelpqMSFAQ8 = {
		
	}
		const _returnValueUqHDvDb = await _cmdsn8AG0h.showHelpAfterError(_displayHelpqMSFAQ8)
		const _arrayValueFzCd5Zi = "rvoBhDM42kn";
		const _arrayValuekiqBvKR = undefined;
		const _arrayValuebJrxKAK = true;
		const _returnValuev3CZTzU = undefined;
		const _returnValueCrbp7P9 = () => { return _returnValuev3CZTzU };
		const _arrayValuegYKF5sA = () => { return _returnValueCrbp7P9 };
		const _argvpLv94BS = [_arrayValueFzCd5Zi, _arrayValuekiqBvKR, _arrayValuebJrxKAK, _arrayValuegYKF5sA]
		const _parseOptionsaSdb4Aa = {
		
	}
		const _returnValueSmHJP9m = await _cmdsn8AG0h.parseAsync(_argvpLv94BS, _parseOptionsaSdb4Aa)
		const _configurationZ1A3TLZ = undefined;
		const _returnValueVTlzViN = await _cmdsn8AG0h.configureOutput(_configurationZ1A3TLZ)
		const _returnValueFDncpqJ = await _HelpqcjgECA.subcommandDescription(_cmdsn8AG0h)
		const _cmd9UZkQg = {
		
	}
		const _helperULQtJix = "X8cmMuur8dXpfVH3CJhKlPTJOUx4TDURRg7HIOu7juO8yNUHhK7lNbp9SpEuwjoAk9Dq5GH1pNA7PksyD9o3pi";
		const _returnValue0GrWPI = await _HelpqcjgECA.longestArgumentTermLength(_cmd9UZkQg, _helperULQtJix)
		const _optionNURZu85 = "WaY15UHO3dzSiGO4jfsRrMQI3UUXaBgE";
		const _returnValueoYhII20 = await _HelpqcjgECA.optionTerm(_optionNURZu85)
	});

	it('test for Help', async () => {
		const _HelpSjzezav = new Help()
		const _optiongdeHh2v = "9PmwAEexWBkGB1HMHdAIVoTMuJxOlz5vAKvCKvLfDGSJKnzzIt22RdW52KmhpFNhY6oOxKLLwTp1qwoDPpGV18s2G2ulh1TlJ";
		const _returnValuesfQGUHE = await _HelpSjzezav.optionDescription(_optiongdeHh2v)
		const _cmd8F4Zsq = "JrFwbJQJiWHx";
		const _returnValuenemNpKT = await _HelpSjzezav.subcommandDescription(_cmd8F4Zsq)
	});

	it('test for Help', async () => {
		const _Help0ewCUg = new Help()
		const _flagsZ3HLkrB = "9uPkd604ZjeVxd";
		const _descriptionIyuXMzd = "8LcESnWUpS7o7KblFMr5g6SONvpNvdnFYMlT4dbtIdh1qNTd8XakWN6sa6KkfltpwDY6Lso1ouL";
		const _argumentuhQ8sCC = new Option(_flagsZ3HLkrB, _descriptionIyuXMzd)
		const _valuen1MY8vT = undefined;
		const _returnValuegcYmkPa = {
		
	}
		const _concatpuPJ1CF = () => { return _returnValuegcYmkPa };
		const _previoushfv5jJJ = {
			"concat": _concatpuPJ1CF
	}
		const _returnValuenmXrtPp = await _argumentuhQ8sCC._concatValue(_valuen1MY8vT, _previoushfv5jJJ)
		const _nameXiJ04W = undefined;
		const _returnValueBeIVHYj = await _argumentuhQ8sCC.env(_nameXiJ04W)
		const _returnValuelM50pSJ = await _Help0ewCUg.argumentTerm(_argumentuhQ8sCC)
		const _returnValueQurZjW9 = "1CzTio7RKXgSF";
		const _nameQU10OV = () => { return _returnValueQurZjW9 };
		const _argumentaRAqaAn = {
			"name": _nameQU10OV
	}
		const _returnValueBEQwK75 = await _Help0ewCUg.argumentTerm(_argumentaRAqaAn)
		const _returnValueWNur0Bg = 1.4312108024304653;
		const _arrayValueVzTn3i = () => { return _returnValueWNur0Bg };
		const _arrayValueu8SQ44 = [_arrayValueVzTn3i]
		const _arrayValuetUVo2FV = null;
		const _arrayValueo5sLi5s = [_arrayValueu8SQ44, _arrayValuetUVo2FV]
		const _cmdxmtu5a7 = [_arrayValueo5sLi5s]
		const _returnValueD23Ad1 = await _Help0ewCUg.subcommandTerm(_cmdxmtu5a7)
		const _cmdUSUN3RK = "oPtsLri5JJVtwZqw3DquSFcONykjeF3Upai6liIP5pm1JdOMem5WFXtj9fBej82bxmXw2gI4AFO78w7xjsS";
		const _helperpsup6WT = "vyJTNoXaWqRrSPQ";
		const _returnValuet1Nd7xG = await _Help0ewCUg.padWidth(_cmdUSUN3RK, _helperpsup6WT)
	});

	it('test for Help', async () => {
		const _HelpUsAsyLr = new Help()
		const _arrayValuevKEYF06 = {
		
	}
		const _cmdAsvmMUW = [_arrayValuevKEYF06]
		const _returnValuej3eyqx2 = await _HelpUsAsyLr.commandDescription(_cmdAsvmMUW)
	});

	it('test for Help', async () => {
		const _HelpErZOgHV = new Help()
		const __nameYfrwffd = "sWfwCa3RuHsnk8Ry3G3Uy5bEr9o1jgVaHQk67ruTEIWrBYqT471DK5R8wt1YUn3WFPjn9aPMlN8fuer517rhxh7I";
		const __aliasesIGZj2iT = {
		
	}
		const _arrayValuechwq2IN = true;
		const _arrayValueLxDOwBe = {
		
	}
		const _arrayValueyXPDT9J = [_arrayValuechwq2IN, _arrayValueLxDOwBe]
		const _parentWilCRy = [_arrayValueyXPDT9J]
		const _returnValueHjfbgoA = {
		
	}
		const _usageIELLm6f = () => { return _returnValueHjfbgoA };
		const _cmdTKTikCz = {
			"_name": __nameYfrwffd,
		"_aliases": __aliasesIGZj2iT,
		"parent": _parentWilCRy,
		"usage": _usageIELLm6f
	}
		const _returnValueLlDqGi = await _HelpErZOgHV.commandUsage(_cmdTKTikCz)
	});

	it('test for Help', async () => {
		const _HelpePYEwaZ = new Help()
		const _returnValueYEWPPOj = undefined;
		const _cmdtTHszx9 = () => { return _returnValueYEWPPOj };
		const _returnValueIlA7Ttx = await _HelpePYEwaZ.visibleCommands(_cmdtTHszx9)
		const _returnValue8VfH9T = undefined;
		const _cmdi8DrF3N = () => { return _returnValue8VfH9T };
		const _returnValuema0yvO = await _HelpePYEwaZ.visibleCommands(_cmdi8DrF3N)
		const _arrayValuebqgMgeu = null;
		const _arrayValueT2qDV2E = -1.5349174840268525;
		const _argumentmxONCUd = [_arrayValuebqgMgeu, _arrayValueT2qDV2E]
		const _returnValuetqDoZq = await _HelpePYEwaZ.argumentTerm(_argumentmxONCUd)
		const _returnValuejhAjIzw = null;
		const _cmdgoJYmv0 = () => { return _returnValuejhAjIzw };
		const _helperVmXZ4wC = new Help()
		const _arrayValueDh3HZrr = null;
		const _arrayValueID3AObk = 5.238335850598874;
		const _arrayValueneL2mc = 7.457159307598175;
		const _cmdCGsigc = [_arrayValueDh3HZrr, _arrayValueID3AObk, _arrayValueneL2mc]
		const _returnValueQmLaJH2 = await _helperVmXZ4wC.visibleCommands(_cmdCGsigc)
		const _cmdMKUMIEJ = false;
		const _helperqqJk4FY = new Help()
		const _returnValueBoy1751 = undefined;
		const _argumentHXqsFDu = () => { return _returnValueBoy1751 };
		const _returnValueZJidJvW = await _helperqqJk4FY.argumentDescription(_argumentHXqsFDu)
		const _flagsxsGEhhe = {
		
	}
		const _optionLQIqpgu = {
			"flags": _flagsxsGEhhe
	}
		const _returnValueBwtpP7S = await _helperqqJk4FY.optionTerm(_optionLQIqpgu)
		const _returnValueYDK06O5 = "elqgy";
		const _optionHojRsLR = () => { return _returnValueYDK06O5 };
		const _returnValueoyjp0Af = await _helperqqJk4FY.optionTerm(_optionHojRsLR)
		const _returnValueG1ILser = await _helperVmXZ4wC.padWidth(_cmdMKUMIEJ, _helperqqJk4FY)
		const _cmdMsYuclQ = undefined;
		const _helperPJH9wh1 = []
		const _returnValueWgSEXu = await _helperVmXZ4wC.longestArgumentTermLength(_cmdMsYuclQ, _helperPJH9wh1)
		const _returnValueyuB7EWO = await _HelpePYEwaZ.formatHelp(_cmdgoJYmv0, _helperVmXZ4wC)
		const _arrayValueuguQeYK = null;
		const _arrayValueJkKYsEK = {
		
	}
		const _cmdwGdAUfj = [_arrayValueuguQeYK, _arrayValueJkKYsEK]
		const _returnValueTDCBinz = await _HelpePYEwaZ.visibleArguments(_cmdwGdAUfj)
	});

	it('test for Help', async () => {
		const _HelpskTr7p = new Help()
		const _optionstGnSfnx = {
		
	}
		const _arrayValueBwjGYn7 = "WLV31ki1I6bxpDV5LBc9msTPaYA7F1vmcNVxebCJKyrLoWmM8mMaBB7aSr3MF0LFmHGb";
		const _arrayValueoOqn2My = "l344kGqfCQQUL767IWEMiEqQcf06pl1qXw2Bs2a1Am03kGSYVtN10yB2HZqSyw9B";
		const _arrayValuegS16iKa = "6SqQzjO041A1RHDwl2NT7UVhfRXaIULXVBcwcNujg3zDeoUzP9lUOxMyCxotrd471ME1F3VMHsMcw1B6sksZOSPyn3WKhQV";
		const _arrayValuexPmet51 = [_arrayValueoOqn2My, _arrayValuegS16iKa]
		const _arrayValueO8YCmww = -3.0814283073026774;
		const _arrayValuelyne0r = "4e4tWI";
		const __hasHelpOptionM0FqwXH = [_arrayValueBwjGYn7, _arrayValuexPmet51, _arrayValueO8YCmww, _arrayValuelyne0r]
		const __helpShortFlagUidOgU = null;
		const _returnValuewKTonHY = undefined;
		const __findOptionHDL8biP = () => { return _returnValuewKTonHY };
		const __helpLongFlaghAWM4sk = {
		
	}
		const _returnValueAQJl0NK = undefined;
		const _createOptiont1i8bz = () => { return _returnValueAQJl0NK };
		const __helpDescriptionCqoRlpO = {
		
	}
		const __helpFlagsY2rVCaK = []
		const _cmdx39dKT0 = {
			"options": _optionstGnSfnx,
		"_hasHelpOption": __hasHelpOptionM0FqwXH,
		"_helpShortFlag": __helpShortFlagUidOgU,
		"_findOption": __findOptionHDL8biP,
		"_helpLongFlag": __helpLongFlaghAWM4sk,
		"createOption": _createOptiont1i8bz,
		"_helpDescription": __helpDescriptionCqoRlpO,
		"_helpFlags": __helpFlagsY2rVCaK
	}
		const _returnValueOn0hj4R = await _HelpskTr7p.visibleOptions(_cmdx39dKT0)
		const _cmdQCUhQT = 1.070653041618904;
		const _helperoD7evpC = "brhyDiNN1SdsjeMeS1QfqCQt01VznejcNK8GVURihkroUTdEtiha4NLrl9NLK1QeRqFHOXfQMvBIB4mpPKiakicmR";
		const _returnValuemdM1PXr = await _HelpskTr7p.longestArgumentTermLength(_cmdQCUhQT, _helperoD7evpC)
	});

	it('test for Help', async () => {
		const _HelpP8Io4QI = new Help()
		const _flagsEtHn2MU = "4ViiZRakueGKpPFkpUdkKiSEZWt8qI32TqXlQPVCysw";
		const _descriptionsbbbo3Z = "OGURejq2vLLA8MLHH9wVQzcOSR3MnJwlyIhNPV4TvVpnCoKGRyLGMpvJ3eWGMvOYQejetXwctz2u9c";
		const _optionqUo5GF = new Option(_flagsEtHn2MU, _descriptionsbbbo3Z)
		const _fnI8bTrC3 = {
		
	}
		const _returnValueRYvsOe = await _optionqUo5GF.argParser(_fnI8bTrC3)
		const _hideatiCcAA = false;
		const _returnValuepJv0jWG = await _optionqUo5GF.hideHelp(_hideatiCcAA)
		const _returnValuelsXS6pV = await _HelpP8Io4QI.optionTerm(_optionqUo5GF)
		const _returnValueB0n7CXW = null;
		const _cmdpKllIVk = () => { return _returnValueB0n7CXW };
		const _returnValuer2galtZ = await _HelpP8Io4QI.visibleOptions(_cmdpKllIVk)
		const _cmdL0NXwdD = "gQiTxOOm5or7ep1xoHwSbx8LdWMzUn2VytHPBtnsb0tnRHGmhJoKq29MQ9XGVEcMAwrUXNLr6XzvOtxitp";
		const _returnValueWWyrhm7 = await _HelpP8Io4QI.visibleOptions(_cmdL0NXwdD)
		const _cmdiLZG5VC = undefined;
		const _helperq9ylmFE = new Help()
		const _arrayValueeFBdHp9 = false;
		const _arrayValueOSkcRkN = false;
		const _arrayValueat5Rp39 = "a7FfLeKdqz7ij8vxXf1IpcscyUFsT4Je3g7JHICrDqZ2PHQhrtAHtW2rIerWhQT8cJ2oRU0G";
		const _arrayValueJ16t4fj = "DMQ5pGGJ";
		const _cmdyHD8IbZ = [_arrayValueeFBdHp9, _arrayValueOSkcRkN, _arrayValueat5Rp39, _arrayValueJ16t4fj]
		const _returnValuedjwk1UC = await _helperq9ylmFE.subcommandTerm(_cmdyHD8IbZ)
		const _returnValueDjvXyv = await _HelpP8Io4QI.formatHelp(_cmdiLZG5VC, _helperq9ylmFE)
		const _arrayValuefqVQsQn = undefined;
		const _flagsmeX15a2 = [_arrayValuefqVQsQn]
		const _descriptionZIwIXwB = "mNpAo4frRM2S2zebVrJZ6RuKovenR1OlMhZ7KakK5ua1CyWHyHqz8X";
		const _argumentEKhUJFv = new Option(_flagsmeX15a2, _descriptionZIwIXwB)
		const _returnValuekQtlj1J = await _argumentEKhUJFv.attributeName()
		const _valueYMErG8u = null;
		const _arrayValuetfTlof = null;
		const _returnValueEw1sLp = false;
		const _arrayValueDCfbd1X = () => { return _returnValueEw1sLp };
		const _arrayValueoF4JFXU = {
		
	}
		const _previous4FFHBQ = [_arrayValuetfTlof, _arrayValueDCfbd1X, _arrayValueoF4JFXU]
		const _returnValueUn27FGj = await _argumentEKhUJFv._concatValue(_valueYMErG8u, _previous4FFHBQ)
		const _returnValueExksm97 = await _HelpP8Io4QI.argumentDescription(_argumentEKhUJFv)
	});

	it('test for Help', async () => {
		const _HelpXHV1qkt = new Help()
		const _returnValuepm1raHO = 3.488567264980338;
		const _matchApsHvSH = () => { return _returnValuepm1raHO };
		const _returnValueZQ9hatK = null;
		const _substrGTBhSCF = () => { return _returnValueZQ9hatK };
		const _strJAzQ5L = {
			"match": _matchApsHvSH,
		"substr": _substrGTBhSCF
	}
		const _widthxLQLYEN = -1.418766515791205;
		const _indentfsC5knp = -4.5826934983839624;
		const _minColumnWidthtqvUyFc = -5.955853943207039;
		const _returnValuet6CWvIk = await _HelpXHV1qkt.wrap(_strJAzQ5L, _widthxLQLYEN, _indentfsC5knp, _minColumnWidthtqvUyFc)
		const _returnValueDYuG9DU = null;
		const _strP1ogcJe = () => { return _returnValueDYuG9DU };
		const _widthac00qJ = -2.6978923504563905;
		const _indentl3xSDfp = 7.37313526987187;
		const _minColumnWidthNWcSdr3 = -9.560208928305325;
		const _returnValueuinOKeL = await _HelpXHV1qkt.wrap(_strP1ogcJe, _widthac00qJ, _indentl3xSDfp, _minColumnWidthNWcSdr3)
		const _cmdPaDhSb3 = "YDHQI5beGjlzjGNVLAkVYWUfGDmIbFi8OTSv4VNHAqKQu2OMuoW3VxxK9COPV7sfvQ91yRh8ARBoDGJEHDKY5EYGq";
		const _returnValuehj4N6fG = await _HelpXHV1qkt.commandUsage(_cmdPaDhSb3)
		const _cmdQXM8unk = 5.5513525846160565;
		const _returnValueB5XlW8N = undefined;
		const _helperChRzXTq = () => { return _returnValueB5XlW8N };
		const _returnValuedOgDj6c = await _HelpXHV1qkt.longestSubcommandTermLength(_cmdQXM8unk, _helperChRzXTq)
	});

	it('test for Help', async () => {
		const _HelptYFQevW = new Help()
		const _namePhbWKs = true;
		const _cmdvNJaEy = new Command(_namePhbWKs)
		const _arrayValueRGwu1kz = false;
		const _arrayValueGRujrcv = null;
		const _arrayValuePyjkLYA = 4.119211496054696;
		const _arrayValuexPaJvVj = undefined;
		const _arrayValueK7mZXuF = 3.7975188501573456;
		const _arrayValueP1d0LVU = [_arrayValuePyjkLYA, _arrayValuexPaJvVj, _arrayValueK7mZXuF]
		const _enableOrNameAndArgsjXp7bRt = [_arrayValueRGwu1kz, _arrayValueGRujrcv, _arrayValueP1d0LVU]
		const _descriptionaXgRzTy = null;
		const _returnValueRvmcuCu = await _cmdvNJaEy.addHelpCommand(_enableOrNameAndArgsjXp7bRt, _descriptionaXgRzTy)
		const _strFHjXRjI = undefined;
		const _returnValueJqZwEt = await _cmdvNJaEy.name(_strFHjXRjI)
		const _returnValueBqRyTqf = await _HelptYFQevW.visibleCommands(_cmdvNJaEy)
		const __namezz8IlxN = "29IjddW1TZDCos75ewammuy95sYBapUDuKhq1UcaUeGLEG5d2SDtf8rQtqE8vJoQyW";
		const __aliasesDl0b9I8 = true;
		const _parentUv5SufX = {
		
	}
		const _returnValuevFriaSh = true;
		const _usagerfBMiv = () => { return _returnValuevFriaSh };
		const _cmdGOtAo6E = {
			"_name": __namezz8IlxN,
		"_aliases": __aliasesDl0b9I8,
		"parent": _parentUv5SufX,
		"usage": _usagerfBMiv
	}
		const _returnValueseaaT5r = await _HelptYFQevW.commandUsage(_cmdGOtAo6E)
		const _cmdhllU0Ic = false;
		const _returnValueDZd8qyn = -0.09243223208345874;
		const _helpertmbrfY5 = () => { return _returnValueDZd8qyn };
		const _returnValuevjExBHR = await _HelptYFQevW.longestSubcommandTermLength(_cmdhllU0Ic, _helpertmbrfY5)
	});

	it('test for Help', async () => {
		const _HelpZ4xVTYm = new Help()
		const __nameMLnqhNG = "ILhMnHEhQsHuMnEWMxDIj";
		const __aliasescq7LZoB = "o55UdlxmGOecXTac";
		const _returnValueSrENfHJ = "dlaMv5djb7VE7A95tOElNCQhuDo9KIyA27uvpw9HUbr";
		const _parentOGlK87y = () => { return _returnValueSrENfHJ };
		const _returnValueRce6P0O = "Fy3PY6ljAuOVWw24wsFVpNnol8PfY31nFqbK9tcA7h37VgwtCDJK9XqR2QjTKkM7B1DWBmq";
		const _usageSupPPAx = () => { return _returnValueRce6P0O };
		const _cmdpqG1txy = {
			"_name": __nameMLnqhNG,
		"_aliases": __aliasescq7LZoB,
		"parent": _parentOGlK87y,
		"usage": _usageSupPPAx
	}
		const _returnValuesqm9XXY = await _HelpZ4xVTYm.commandUsage(_cmdpqG1txy)
	});

	it('test for Help', async () => {
		const _HelpCl4NKfA = new Help()
		const _returnValue5j4Hxt = -1.0915232799624128;
		const _matchQ1pu1T = () => { return _returnValue5j4Hxt };
		const _arrayValuepODOIda = null;
		const _arrayValueWi51bzk = null;
		const _returnValuekdxKpH3 = [_arrayValuepODOIda, _arrayValueWi51bzk]
		const _substr1qZ0eN = () => { return _returnValuekdxKpH3 };
		const _stryQAatQn = {
			"match": _matchQ1pu1T,
		"substr": _substr1qZ0eN
	}
		const _widthGd6136k = true;
		const _indentkOxVzcf = 1.5838429273905241;
		const _minColumnWidthaLveEiL = -3.5926398093575207;
		const _returnValueYnwLuS4 = await _HelpCl4NKfA.wrap(_stryQAatQn, _widthGd6136k, _indentkOxVzcf, _minColumnWidthaLveEiL)
		const _returnValueJRplRiQ = []
		const _returnValueDTvLPmE = () => { return _returnValueJRplRiQ };
		const _name5vfZB6 = () => { return _returnValueDTvLPmE };
		const _descriptionRxDQ1EJ = null;
		const _optionvgdY5je = new Argument(_name5vfZB6, _descriptionRxDQ1EJ)
		const _returnValueNvf809W = await _optionvgdY5je.argRequired()
		const _returnValueJLYb5wL = null;
		const _valueWQ9cdiA = () => { return _returnValueJLYb5wL };
		const _descriptioncu4136u = {
		
	}
		const _returnValuexOimGk1 = await _optionvgdY5je.default(_valueWQ9cdiA, _descriptioncu4136u)
		const _returnValuecxu9XR5 = await _HelpCl4NKfA.optionDescription(_optionvgdY5je)
		const __nameawyCxw9 = "VvY1DgUurxO47diXLiSHhLV4v77LsrvULIdwicnmX4elSQDunOWc0O0O2LineVFaml4IoD184";
		const __aliasesiUHEhVe = {
		
	}
		const _returnValuety09zC9 = null;
		const _parentds8Nqy = () => { return _returnValuety09zC9 };
		const _returnValuePzFn372 = {
		
	}
		const _usageFdeuCcu = () => { return _returnValuePzFn372 };
		const _cmdWoKNAB7 = {
			"_name": __nameawyCxw9,
		"_aliases": __aliasesiUHEhVe,
		"parent": _parentds8Nqy,
		"usage": _usageFdeuCcu
	}
		const _returnValueoF8BvzX = await _HelpCl4NKfA.commandUsage(_cmdWoKNAB7)
		const _cmdPyEFguM = "1GZ9GegXwbFhElXO0Vq7qHHkiDDQjPQ2wzRvzAfATSnqooI7eS2Xw1ifWhriyoLemhKj8lJ3fQqA";
		const _helpershAIJi5 = "TkYpvxkQVFMQxMBEDTkt28qu9MfGjhHTmeaSSVODFlGVNk39Fs6OM982ubeXGo5Zsj4hfOhrYfu1Vtvhe7";
		const _returnValueKpEHdY = await _HelpCl4NKfA.longestSubcommandTermLength(_cmdPyEFguM, _helpershAIJi5)
	});

	it('test for Help', async () => {
		const _HelpOQC6VQr = new Help()
		const _returnValue21hIU8 = "yw8n3z01xBJEL";
		const _sliceUUYnP9t = () => { return _returnValue21hIU8 };
		const _name7ergzR = {
			"slice": _sliceUUYnP9t
	}
		const _descriptionSb0zNcD = "2qEJGGqiaBIrWT1YCIEirEZClL3l2jUOS6rkeZhYayrliBzNPn9t94o7oNav4zUtdMGVFxF94bEXh67";
		const _argumentX77TNEC = new Argument(_name7ergzR, _descriptionSb0zNcD)
		const _valueBBZsbi7 = "nHt0XH1icfMdXDkDT3gNWUMs8KBtusgngYtXSjSD7CgN07Rh1FJCttEGbCUF4rxtywKr9aoddcU2b";
		const _previousnT1nQxf = {
		
	}
		const _returnValueBPRW3Oh = await _argumentX77TNEC._concatValue(_valueBBZsbi7, _previousnT1nQxf)
		const _valuepNi2kPx = {
		
	}
		const _descriptionkOAdwM = {
		
	}
		const _returnValueo40jkRu = await _argumentX77TNEC.default(_valuepNi2kPx, _descriptionkOAdwM)
		const _valuexEWFOMf = null;
		const _returnValuehSDvuW3 = true;
		const _previousvDLeuh = () => { return _returnValuehSDvuW3 };
		const _returnValueAC1QO1 = await _argumentX77TNEC._concatValue(_valuexEWFOMf, _previousvDLeuh)
		const _returnValuePkw6vHG = await _argumentX77TNEC.argOptional()
		const _returnValueeosiROA = await _HelpOQC6VQr.argumentDescription(_argumentX77TNEC)
		const _cmduB8EJzQ = "XSgstYlnLrhEc0h4OCnzcx";
		const _returnValueYNmDXnb = await _HelpOQC6VQr.commandUsage(_cmduB8EJzQ)
		const _cmdMje0Hxs = "IehmsGj1YcdzqTIfiCISlYcns2T2e6k1T3kgv2x2sUUB2kgjq";
		const _returnValueX6kx4v = await _HelpOQC6VQr.subcommandTerm(_cmdMje0Hxs)
		const _cmdKVwZ0f = "LcUFQbjVj5hPSJ9t36MRA6X05D";
		const _helperfvrMBSj = "IHizaryjWneOIUpFCZegLcqYTTQtVJAUYLlLjSvx8fIoGc3H";
		const _returnValuer2UKZnC = await _HelpOQC6VQr.longestOptionTermLength(_cmdKVwZ0f, _helperfvrMBSj)
	});

	it('test for Help', async () => {
		const _HelpNqSmBH = new Help()
		const _strGbb1cd = "4FH3qOzLxr6QEpj78X8gtC7cKdgO5sjqGYlo7Qv1w2TWqYCAeXS6mqYX3AR9GijJX82t";
		const _widthIgW7vP1 = -7.228083578292361;
		const _indentR6fIcrj = 6.860135904271729;
		const _minColumnWidthMA7Os8 = false;
		const _returnValueRQYyZd1 = await _HelpNqSmBH.wrap(_strGbb1cd, _widthIgW7vP1, _indentR6fIcrj, _minColumnWidthMA7Os8)
		const __nameKTKWpE = "f0OdpXGQqNFDgZustruwwHOnQdrpYRW8yeE6etHVmQysxLxpD4LrB9N6DaHnUjX";
		const __aliasesrjoFJSr = {
		
	}
		const _parentpZlDObp = {
		
	}
		const _returnValueRzaipB = undefined;
		const _arrayValueefITSK3 = () => { return _returnValueRzaipB };
		const _returnValuedXW7LUT = [_arrayValueefITSK3]
		const _usageTxfsoEX = () => { return _returnValuedXW7LUT };
		const _cmdAfuyxtx = {
			"_name": __nameKTKWpE,
		"_aliases": __aliasesrjoFJSr,
		"parent": _parentpZlDObp,
		"usage": _usageTxfsoEX
	}
		const _returnValueIwJl7Pa = await _HelpNqSmBH.commandUsage(_cmdAfuyxtx)
		const _nameUsX7tBQ = true;
		const _argumentJ8VEouh = new Command(_nameUsX7tBQ)
		const _strHSj3hh = undefined;
		const _flagstHzRwM = {
		
	}
		const _descriptionzJDELlW = {
		
	}
		const _returnValuem3kKlyp = await _argumentJ8VEouh.version(_strHSj3hh, _flagstHzRwM, _descriptionzJDELlW)
		const _contextOptionsa12u5z = "gi8JF";
		const _returnValueV7W8xUh = await _argumentJ8VEouh._getHelpContext(_contextOptionsa12u5z)
		const _returnValuedNcwXt9 = await _HelpNqSmBH.argumentTerm(_argumentJ8VEouh)
		const _cmdJMq9QZC = undefined;
		const _returnValuemvmECT = false;
		const _helperobItI5s = () => { return _returnValuemvmECT };
		const _returnValueaM7gpxE = await _HelpNqSmBH.padWidth(_cmdJMq9QZC, _helperobItI5s)
	});

	it('test for Help', async () => {
		const _HelpjrKFwIn = new Help()
		const _nameCqQZeg = 7.623463610909475;
		const _cmdCq5Istw = new Command(_nameCqQZeg)
		const _returnValueYOShGqk = await _cmdCq5Istw.createHelp()
		const _subcommandy1kMC5E = true;
		const _argsivBCugV = undefined;
		const _returnValueYrRPz5x = await _cmdCq5Istw._executeSubCommand(_subcommandy1kMC5E, _argsivBCugV)
		const _returnValuekddCfGG = await _HelpjrKFwIn.subcommandTerm(_cmdCq5Istw)
		const _strNTRh6qa = undefined;
		const _widthcffmyXY = 7.1240326587410365;
		const _indentmfPmm0P = -3.602325320647733;
		const _minColumnWidthbknqWm = 0.31684944777369317;
		const _returnValuecJyqs4F = await _HelpjrKFwIn.wrap(_strNTRh6qa, _widthcffmyXY, _indentmfPmm0P, _minColumnWidthbknqWm)
	});

	it('test for Help', async () => {
		const _HelpNSQSXyN = new Help()
		const _arrayValuewRfBi5 = 8.074927056242224;
		const _optiontp5Ibv = [_arrayValuewRfBi5]
		const _returnValueo3qXApP = await _HelpNSQSXyN.optionTerm(_optiontp5Ibv)
		const _flagsqF1NFTY = "4k9TLUcYdeGz";
		const _description7Bc9st = "3q4ao1XOKszd6hf1evp8tOOAxr1koq1s";
		const _optionfRXNCeC = new Option(_flagsqF1NFTY, _description7Bc9st)
		const _mandatorynaPqJGL = null;
		const _returnValuexJs2jG5 = await _optionfRXNCeC.makeOptionMandatory(_mandatorynaPqJGL)
		const _returnValueNVYtxgM = await _optionfRXNCeC.name()
		const _fnyzi2mv = -3.667592695386844;
		const _returnValueKgh17x = await _optionfRXNCeC.argParser(_fnyzi2mv)
		const _returnValueJxNlwVs = await _HelpNSQSXyN.optionTerm(_optionfRXNCeC)
		const _namewaVc1RG = -0.671853545603522;
		const _cmdPK7o2BC = new Command(_namewaVc1RG)
		const _returnValuekRXPjtA = await _cmdPK7o2BC._checkForMissingMandatoryOptions()
		const _returnValuehIiDpU = await _cmdPK7o2BC._checkNumberOfArguments()
		const _keyy5iT7lr = null;
		const _valuecQnScMO = {
		
	}
		const _returnValueXnOEgZO = await _cmdPK7o2BC.setOptionValue(_keyy5iT7lr, _valuecQnScMO)
		const _aliaskTO5e5 = {
		
	}
		const _returnValueqgQGObD = await _cmdPK7o2BC.alias(_aliaskTO5e5)
		const _returnValueDYY8VBu = await _HelpNSQSXyN.subcommandTerm(_cmdPK7o2BC)
		const _nameEHl3hzp = null;
		const _argumentsYF8vLX = new Command(_nameEHl3hzp)
		const _allowExcessPc2hKEP = true;
		const _returnValueSBa8BIx = await _argumentsYF8vLX.allowExcessArguments(_allowExcessPc2hKEP)
		const _arrayValuev3xycny = {
		
	}
		const _arrayValueD33gQvu = undefined;
		const _keyNXV6MR9 = [_arrayValuev3xycny, _arrayValueD33gQvu]
		const _returnValueo6svoH4 = await _argumentsYF8vLX.getOptionValue(_keyNXV6MR9)
		const _returnValueFIQcMi3 = await _argumentsYF8vLX.unknownCommand()
		const _returnValuegVk67cx = await _HelpNSQSXyN.argumentTerm(_argumentsYF8vLX)
	});

	it('test for Help', async () => {
		const _HelpUtXhFSM = new Help()
		const _namelSbwfHs = true;
		const _cmdu5LfGy2 = new Command(_namelSbwfHs)
		const _arrayValueoHoCk6s = null;
		const _arrayValueookNz9R = undefined;
		const _arrayValueBv4pSy7 = undefined;
		const _keyYP2TZeb = [_arrayValueoHoCk6s, _arrayValueookNz9R, _arrayValueBv4pSy7]
		const _returnValueji64XSh = await _cmdu5LfGy2.getOptionValueSource(_keyYP2TZeb)
		const _flagsIjB897W = true;
		const _descriptionq4lhGPF = undefined;
		const _returnValuekGPXE5f = await _cmdu5LfGy2.helpOption(_flagsIjB897W, _descriptionq4lhGPF)
		const _combineE7vIJ0e = true;
		const _returnValueENMAYg = await _cmdu5LfGy2.combineFlagAndOptionalValue(_combineE7vIJ0e)
		const _returnValueNHBX3JS = await _HelpUtXhFSM.visibleOptions(_cmdu5LfGy2)
		const _flagsFLlr0Rm = "U6RmgnD8dY7qtwuFoBO9VehUbIDRnHhLcazDN0VOXElq26QhREOIBEU8JS6219HKYClC49X4VpxWJNnkW6UjTAinrmTXRvfgt";
		const _descriptionr0P3UdG = null;
		const _optionuqADUh = new Option(_flagsFLlr0Rm, _descriptionr0P3UdG)
		const _returnValueRLMh1z6 = await _optionuqADUh.attributeName()
		const _returnValuecQVWCt = await _optionuqADUh.name()
		const _valuesgcf7k55 = "y8wPfwGkxFF2sSWY8GTZHpSkdknu3Y1nbVrPuUmfIgWF1WB8nvV0R8mkzqokrOeuy";
		const _returnValueHUGclM = await _optionuqADUh.choices(_valuesgcf7k55)
		const _hideIX1yV0m = true;
		const _returnValueAqnlzup = await _optionuqADUh.hideHelp(_hideIX1yV0m)
		const _returnValueLamJfeU = await _HelpUtXhFSM.optionTerm(_optionuqADUh)
		const _argumentUXYi2oh = "USqMBDNK97kpHpXJWUBcXlWF4k0bIyth9";
		const _returnValueOwegRED = await _HelpUtXhFSM.argumentTerm(_argumentUXYi2oh)
	});
})