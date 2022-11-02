export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpgHhPBl = new Help()
		const _cmdeXaXGEN = -1.9882750631767756;
		const _sortSubcommandsEe9RWLM = 4.20216138052654;
		const _returnValuePrqwOCe = undefined;
		const _returnValuet63sMv2 = () => { return _returnValuePrqwOCe };
		const _subcommandTermAHn86RP = () => { return _returnValuet63sMv2 };
		const _helperZfQT34T = {
			"sortSubcommands": _sortSubcommandsEe9RWLM,
		"subcommandTerm": _subcommandTermAHn86RP
	}
		const _returnValuejYIR7xN = await _HelpgHhPBl.longestSubcommandTermLength(_cmdeXaXGEN, _helperZfQT34T)
		const _cmdxDs4yC = -8.581075410440791;
		const _helperZrdxuoh = true;
		const _returnValueCrR0079 = await _HelpgHhPBl.longestOptionTermLength(_cmdxDs4yC, _helperZrdxuoh)
	});

	it('test for Help', async () => {
		const _HelplVmV5Zw = new Help()
		const __namepHbnfiR = {
		
	}
		const __aliasesRcJ90T1 = {
		
	}
		const _parentbHBZNTJ = {
		
	}
		const _returnValueFgnbLEu = null;
		const _usagefhnrpGw = () => { return _returnValueFgnbLEu };
		const _cmdeWo9ECl = {
			"_name": __namepHbnfiR,
		"_aliases": __aliasesRcJ90T1,
		"parent": _parentbHBZNTJ,
		"usage": _usagefhnrpGw
	}
		const _returnValuexlTfQyI = await _HelplVmV5Zw.commandUsage(_cmdeWo9ECl)
		const _cmdoYFNiHE = false;
		const _sortSubcommandsxVCSGnO = "m1Wn9O5tpY9CZErL";
		const _returnValueIG5igqK = "wNBRt448idZSZKld5TfoVMfWnnyUpWXp3wJOM3Y3HKuyUTN3hrX6OfSQdGFihNfiCEFJiageHLnbxEjRpCKeqnPcxUG788Gh9X";
		const _subcommandTermZDT9Pdg = () => { return _returnValueIG5igqK };
		const _helperIFVT6s9 = {
			"sortSubcommands": _sortSubcommandsxVCSGnO,
		"subcommandTerm": _subcommandTermZDT9Pdg
	}
		const _returnValuenVlQTcd = await _HelplVmV5Zw.formatHelp(_cmdoYFNiHE, _helperIFVT6s9)
	});

	it('test for Help', async () => {
		const _Helpprdw9CR = new Help()
		const _flagsfZUUuLh = {
		
	}
		const _optionqBsTxqo = {
			"flags": _flagsfZUUuLh
	}
		const _returnValueB9NKjVT = await _Helpprdw9CR.optionTerm(_optionqBsTxqo)
		const _optionsJJ33yIl = {
		
	}
		const __hasHelpOptiontjJPRN9 = true;
		const __helpShortFlagH2fExgN = {
		
	}
		const __findOptioniooID7 = undefined;
		const __helpLongFlagYcomJRf = "ClxLCkOQOIBjowjk";
		const _returnValueDbW0tgR = {
		
	}
		const _createOptionAZY6t0z = () => { return _returnValueDbW0tgR };
		const __helpDescriptiond4Owjc7 = {
		
	}
		const __helpFlagsV1uzAKG = true;
		const _cmdY830Xp = {
			"options": _optionsJJ33yIl,
		"_hasHelpOption": __hasHelpOptiontjJPRN9,
		"_helpShortFlag": __helpShortFlagH2fExgN,
		"_findOption": __findOptioniooID7,
		"_helpLongFlag": __helpLongFlagYcomJRf,
		"createOption": _createOptionAZY6t0z,
		"_helpDescription": __helpDescriptiond4Owjc7,
		"_helpFlags": __helpFlagsV1uzAKG
	}
		const _returnValueOFebJVe = await _Helpprdw9CR.visibleOptions(_cmdY830Xp)
		const _returnValuerzif4eD = 0.16633687732335822;
		const _arrayValueO25iWjv = () => { return _returnValuerzif4eD };
		const _arrayValuegSv0L8i = undefined;
		const __argsDescriptionNVwDLPA = [_arrayValueO25iWjv, _arrayValuegSv0L8i]
		const __argsTB9iPtq = {
		
	}
		const _cmdNxQqeIk = {
			"_argsDescription": __argsDescriptionNVwDLPA,
		"_args": __argsTB9iPtq
	}
		const _returnValueZUXaDNA = await _Helpprdw9CR.visibleArguments(_cmdNxQqeIk)
	});

	it('test for Help', async () => {
		const _HelpeT8iRW = new Help()
		const _arrayValueZHVEjRE = "mslcVi5lwk3Egt9zviliLspy9x0qaqzWnTgHMHP7LBYEwyy29aVr4umA";
		const _arrayValueHiwTA7G = true;
		const _arrayValueDwbe0Gd = undefined;
		const _arrayValueNUa1Ync = false;
		const _cmdkHu9wKn = [_arrayValueZHVEjRE, _arrayValueHiwTA7G, _arrayValueDwbe0Gd, _arrayValueNUa1Ync]
		const _longestOptionTermLengthAOJySEJ = null;
		const _arrayValuesEib3bU = true;
		const _arrayValueyjkQGY9 = true;
		const _arrayValueafzlGTk = {
		
	}
		const _returnValueMFlPIx1 = [_arrayValuesEib3bU, _arrayValueyjkQGY9, _arrayValueafzlGTk]
		const _longestSubcommandTermLengthj451cBt = () => { return _returnValueMFlPIx1 };
		const _returnValuei8Oi17 = true;
		const _longestArgumentTermLengthxU2Bb8c = () => { return _returnValuei8Oi17 };
		const _helperdvarr3M = {
			"longestOptionTermLength": _longestOptionTermLengthAOJySEJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthj451cBt,
		"longestArgumentTermLength": _longestArgumentTermLengthxU2Bb8c
	}
		const _returnValueVRrvzSl = await _HelpeT8iRW.padWidth(_cmdkHu9wKn, _helperdvarr3M)
		const _cmdTDLXdF2 = {
		
	}
		const _sortSubcommandsacW1Fk = false;
		const _returnValuezvbIQS4 = "OfLMvecVs84lnFibljMIGfg49N584gVP91MVmKb2ms65E";
		const _subcommandTermNx2eW0d = () => { return _returnValuezvbIQS4 };
		const _helperOS1p080 = {
			"sortSubcommands": _sortSubcommandsacW1Fk,
		"subcommandTerm": _subcommandTermNx2eW0d
	}
		const _returnValueVdr90TK = await _HelpeT8iRW.longestSubcommandTermLength(_cmdTDLXdF2, _helperOS1p080)
	});

	it('test for Help', async () => {
		const _HelphF7YlbR = new Help()
		const _cmdYOvfDUZ = "eYlAej7cl9RIiGFCJon5AOuvWXjO4doyFIWjfVPCzaKpI1wxcBAapVJIOsUMl3eSuMVXyYtEdTkUpD3f70kIQ1GHWe";
		const _sortSubcommandsbDintA3 = undefined;
		const _arrayValuesc6s4DP = {
		
	}
		const _arrayValueVimTd4c = -8.699210266142579;
		const _returnValuet5IPjvU = [_arrayValuesc6s4DP, _arrayValueVimTd4c]
		const _subcommandTermEGG595x = () => { return _returnValuet5IPjvU };
		const _helperAlHPGiJ = {
			"sortSubcommands": _sortSubcommandsbDintA3,
		"subcommandTerm": _subcommandTermEGG595x
	}
		const _returnValueOc4rLto = await _HelphF7YlbR.formatHelp(_cmdYOvfDUZ, _helperAlHPGiJ)
		const _returnValueo67XN3s = false;
		const _descriptionakKsReP = () => { return _returnValueo67XN3s };
		const _cmdtf6gFGQ = {
			"description": _descriptionakKsReP
	}
		const _returnValueutqewdE = await _HelphF7YlbR.subcommandDescription(_cmdtf6gFGQ)
		const _flagsafAcfg2 = "ePmK2bLdCqnUbTcGb9frDKGWrBrmIclfxRIIliuhwKkIbNIsh3ui8QWzwWjHk4pRH26p";
		const _optionDGBaaOG = {
			"flags": _flagsafAcfg2
	}
		const _returnValueSIlMl3T = await _HelphF7YlbR.optionTerm(_optionDGBaaOG)
	});

	it('test for Help', async () => {
		const _HelpjYBlIAa = new Help()
		const __argsDescriptions2LtxRr = {
		
	}
		const __argsmDNH0DB = {
		
	}
		const _cmdkpYmIC9 = {
			"_argsDescription": __argsDescriptions2LtxRr,
		"_args": __argsmDNH0DB
	}
		const _returnValueP1kU1Fp = await _HelpjYBlIAa.visibleArguments(_cmdkpYmIC9)
		const _cmdlj7mLcm = {
		
	}
		const _returnValueYNa1V0g = "GK9OwzfHNI7an0N2UyWxbby50xOoHnxdqAzKAWbnRr2yeiGyB5Cymud36N";
		const _longestOptionTermLengthX8podwj = () => { return _returnValueYNa1V0g };
		const _returnValue52Hh7J = 7.692509466091224;
		const _longestSubcommandTermLengthBZKsEu2 = () => { return _returnValue52Hh7J };
		const _returnValueOtBSK8 = false;
		const _longestArgumentTermLengthlX2kTOR = () => { return _returnValueOtBSK8 };
		const _helperQ5P3IDI = {
			"longestOptionTermLength": _longestOptionTermLengthX8podwj,
		"longestSubcommandTermLength": _longestSubcommandTermLengthBZKsEu2,
		"longestArgumentTermLength": _longestArgumentTermLengthlX2kTOR
	}
		const _returnValueWf6nMNX = await _HelpjYBlIAa.padWidth(_cmdlj7mLcm, _helperQ5P3IDI)
		const _commandsw2xGyCj = {
		
	}
		const __hasImplicitHelpCommandTDWf23A = -0.7835313013480594;
		const __helpCommandnameAndArgsBEL6A6L = {
		
	}
		const _returnValueYxRilvz = "kWxe441E8YfwuLKDpzCee25";
		const _returnValueT4CoF3N = () => { return _returnValueYxRilvz };
		const _createCommandQrqqNjl = () => { return _returnValueT4CoF3N };
		const __helpCommandDescriptionLSbZOnf = -8.59420734764912;
		const _cmdUBHT5l4 = {
			"commands": _commandsw2xGyCj,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandTDWf23A,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsBEL6A6L,
		"createCommand": _createCommandQrqqNjl,
		"_helpCommandDescription": __helpCommandDescriptionLSbZOnf
	}
		const _returnValueA20iSlk = await _HelpjYBlIAa.visibleCommands(_cmdUBHT5l4)
	});

	it('test for Help', async () => {
		const _HelpHTNt5rP = new Help()
		const _cmdxSNvOxM = undefined;
		const _returnValueDfriq6s = await _HelpHTNt5rP.subcommandTerm(_cmdxSNvOxM)
	});

	it('test for Help', async () => {
		const _HelpKzzrmCY = new Help()
		const _returnValuewJXzd9I = false;
		const _descriptionjuCudHp = () => { return _returnValuewJXzd9I };
		const _cmdeo8puxV = {
			"description": _descriptionjuCudHp
	}
		const _returnValuesDa2Pp0 = await _HelpKzzrmCY.commandDescription(_cmdeo8puxV)
		const __argskHbCsiu = {
		
	}
		const __namegBppV4w = -8.754584437887157;
		const __aliasesisfYiVm = {
		
	}
		const _optionsI11MNme = undefined;
		const _cmdyp2wqvI = {
			"_args": __argskHbCsiu,
		"_name": __namegBppV4w,
		"_aliases": __aliasesisfYiVm,
		"options": _optionsI11MNme
	}
		const _returnValuezNVM3XZ = await _HelpKzzrmCY.subcommandTerm(_cmdyp2wqvI)
	});

	it('test for Help', async () => {
		const _HelpnCqxAzG = new Help()
		const _cmdpAKH12 = null;
		const _returnValueoS2O5xM = 5.119999274211246;
		const _visibleOptionsqxMY6I = () => { return _returnValueoS2O5xM };
		const _returnValueQb9M31r = undefined;
		const _optionTermqGpxlno = () => { return _returnValueQb9M31r };
		const _helperbgXJuNG = {
			"visibleOptions": _visibleOptionsqxMY6I,
		"optionTerm": _optionTermqGpxlno
	}
		const _returnValueyotX1R = await _HelpnCqxAzG.longestOptionTermLength(_cmdpAKH12, _helperbgXJuNG)
		const __argsDescriptionwjkKjzq = {
		
	}
		const __argsi1JQCzI = {
		
	}
		const _cmdLVGmdi = {
			"_argsDescription": __argsDescriptionwjkKjzq,
		"_args": __argsi1JQCzI
	}
		const _returnValueFLf7MnL = await _HelpnCqxAzG.visibleArguments(_cmdLVGmdi)
	});

	it('test for Help', async () => {
		const _HelpixuRZ1i = new Help()
		const _arrayValueM3Zmg1J = undefined;
		const _returnValueR1xPraG = [_arrayValueM3Zmg1J]
		const _matchJ3N9pFb = () => { return _returnValueR1xPraG };
		const _returnValueTrA2Cl6 = -9.765303286353134;
		const _returnValuecAgXmWG = () => { return _returnValueTrA2Cl6 };
		const _substrkHQM04 = () => { return _returnValuecAgXmWG };
		const _strSG0uHYu = {
			"match": _matchJ3N9pFb,
		"substr": _substrkHQM04
	}
		const _widthmNBC6c6 = 3.3251996565983806;
		const _indentW9cumSC = 5.819472615477233;
		const _minColumnWidthjsrNAUj = 2.373339921299566;
		const _returnValueisbUw1 = await _HelpixuRZ1i.wrap(_strSG0uHYu, _widthmNBC6c6, _indentW9cumSC, _minColumnWidthjsrNAUj)
		const _optionskfy7HRl = {
		
	}
		const __hasHelpOptionQjrjaYc = "zUaw6NVI8NM4SIXGwItNM6o17WcEDIFNYRRQrEexyEY2h7cPmx1GnxOXeKddEGD1sJexLYD";
		const __helpShortFlagB3bPiQX = null;
		const _returnValueDb7eEiA = true;
		const __findOptiondQknpH = () => { return _returnValueDb7eEiA };
		const __helpLongFlagnso1nKJ = "XiEIPAULmfrNckQsuqy";
		const _arrayValuezXyUBl = "RcmuuklMqo3ru";
		const _arrayValuel7AYk7T = null;
		const _createOptionwJdViU = [_arrayValuezXyUBl, _arrayValuel7AYk7T]
		const __helpDescriptionrEneUKc = []
		const _arrayValuemqJaEla = -3.5658305373923627;
		const __helpFlagsLncX30 = [_arrayValuemqJaEla]
		const _cmdRyCOu7V = {
			"options": _optionskfy7HRl,
		"_hasHelpOption": __hasHelpOptionQjrjaYc,
		"_helpShortFlag": __helpShortFlagB3bPiQX,
		"_findOption": __findOptiondQknpH,
		"_helpLongFlag": __helpLongFlagnso1nKJ,
		"createOption": _createOptionwJdViU,
		"_helpDescription": __helpDescriptionrEneUKc,
		"_helpFlags": __helpFlagsLncX30
	}
		const _returnValuebWZbPd = await _HelpixuRZ1i.visibleOptions(_cmdRyCOu7V)
	});

	it('test for Help', async () => {
		const _HelpSDwGW6P = new Help()
		const _commandsh1sTqRB = {
		
	}
		const _returnValueZGeQKbh = null;
		const __hasImplicitHelpCommandGINAgXO = () => { return _returnValueZGeQKbh };
		const __helpCommandnameAndArgsRJ9tjhY = {
		
	}
		const _returnValueOfHoZ3a = "DTHv3OJOUiRh7XPegn8RDGwiGBXwrPH6E";
		const _createCommandhCnX0pJ = () => { return _returnValueOfHoZ3a };
		const __helpCommandDescriptionzG9Ciul = undefined;
		const _cmdvEGhU9 = {
			"commands": _commandsh1sTqRB,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandGINAgXO,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsRJ9tjhY,
		"createCommand": _createCommandhCnX0pJ,
		"_helpCommandDescription": __helpCommandDescriptionzG9Ciul
	}
		const _returnValuecGnjVGO = await _HelpSDwGW6P.visibleCommands(_cmdvEGhU9)
		const _optionsUE3IVai = {
		
	}
		const __hasHelpOptionG4pRrlr = {
		
	}
		const __helpShortFlagmf2wgVg = 8.940712004286965;
		const _returnValuesmqefy = "r7LmDiRLV5lyWQGXKhoKqwckVK";
		const __findOptionkkqLQ9r = () => { return _returnValuesmqefy };
		const _returnValueZRptwX = "IP2er5dXF2LCO0Qs6Hjv18ML7uGQBJDiJll8FI7pzCol1fBUJn1o4Nvn1LhkddGTsgW3JVNGGB2";
		const __helpLongFlagAIIsJAK = () => { return _returnValueZRptwX };
		const _returnValuelYOQry = true;
		const _createOptiontxHMZFt = () => { return _returnValuelYOQry };
		const __helpDescriptionLuaPbGc = null;
		const _returnValueRxs5jZG = {
		
	}
		const __helpFlagseGh0kf = () => { return _returnValueRxs5jZG };
		const _cmdexp1xy2 = {
			"options": _optionsUE3IVai,
		"_hasHelpOption": __hasHelpOptionG4pRrlr,
		"_helpShortFlag": __helpShortFlagmf2wgVg,
		"_findOption": __findOptionkkqLQ9r,
		"_helpLongFlag": __helpLongFlagAIIsJAK,
		"createOption": _createOptiontxHMZFt,
		"_helpDescription": __helpDescriptionLuaPbGc,
		"_helpFlags": __helpFlagseGh0kf
	}
		const _returnValueyAOOMQE = await _HelpSDwGW6P.visibleOptions(_cmdexp1xy2)
	});

	it('test for Help', async () => {
		const _HelpXytyxR = new Help()
		const _cmdn5RVBwZ = undefined;
		const _visibleArgumentsTPZZLg = undefined;
		const _returnValueukNzBc = null;
		const _argumentTermdQlTtxy = () => { return _returnValueukNzBc };
		const _helperJFUJccy = {
			"visibleArguments": _visibleArgumentsTPZZLg,
		"argumentTerm": _argumentTermdQlTtxy
	}
		const _returnValueMZsJz4o = await _HelpXytyxR.longestArgumentTermLength(_cmdn5RVBwZ, _helperJFUJccy)
		const _arrayValue3h5Oz2 = true;
		const _arrayValueGucSNvv = [_arrayValue3h5Oz2]
		const _arrayValuehjqxHW5 = false;
		const _arrayValueSzOKyxR = null;
		const _cmdwD5DgZv = [_arrayValueGucSNvv, _arrayValuehjqxHW5, _arrayValueSzOKyxR]
		const _returnValueoO4mofV = await _HelpXytyxR.subcommandDescription(_cmdwD5DgZv)
		const _returnValueonyFfES = -2.8556640716853057;
		const _descriptiont9Oks2E = () => { return _returnValueonyFfES };
		const _cmdHHK88bg = {
			"description": _descriptiont9Oks2E
	}
		const _returnValueB1nJtzq = await _HelpXytyxR.subcommandDescription(_cmdHHK88bg)
		const _cmdrd3YPFT = {
		
	}
		const _visibleOptionsfZ0jQvz = true;
		const _returnValuebLeQSWE = "v0FfdM4oH";
		const _optionTermsCh6TUe = () => { return _returnValuebLeQSWE };
		const _helperJyDUeS = {
			"visibleOptions": _visibleOptionsfZ0jQvz,
		"optionTerm": _optionTermsCh6TUe
	}
		const _returnValuenBT7ZqF = await _HelpXytyxR.longestOptionTermLength(_cmdrd3YPFT, _helperJyDUeS)
	});

	it('test for Help', async () => {
		const _HelpYKIb0Nn = new Help()
		const _argChoicesoR3SJHu = {
		
	}
		const _defaultValuegQCBj4m = undefined;
		const _defaultValueDescriptionHXXS9lO = "OzG7vB4Z1MwgP8NnAQmQkw9305nXw4Up7FlmYc4s46NwPs";
		const _returnValueidmFQhN = "oZgXjuA";
		const _arrayValueZ1kbo4M = () => { return _returnValueidmFQhN };
		const _arrayValueAqok7nh = null;
		const _arrayValueruzyi5S = 5.011747092695163;
		const _descriptionyMAkxx3 = [_arrayValueZ1kbo4M, _arrayValueAqok7nh, _arrayValueruzyi5S]
		const _argumentXaNYOU5 = {
			"argChoices": _argChoicesoR3SJHu,
		"defaultValue": _defaultValuegQCBj4m,
		"defaultValueDescription": _defaultValueDescriptionHXXS9lO,
		"description": _descriptionyMAkxx3
	}
		const _returnValuebOkqxff = await _HelpYKIb0Nn.argumentDescription(_argumentXaNYOU5)
		const _returnValueXJvZt7 = true;
		const _descriptionS4Zo3Aa = () => { return _returnValueXJvZt7 };
		const _cmdiByLjCX = {
			"description": _descriptionS4Zo3Aa
	}
		const _returnValuenYbkPD = await _HelpYKIb0Nn.commandDescription(_cmdiByLjCX)
	});

	it('test for Help', async () => {
		const _HelpXDv4HuE = new Help()
		const _argChoicesCvlLON0 = {
		
	}
		const _negateOJHpXA = -2.223350696224581;
		const _defaultValuef3WeLXL = undefined;
		const _defaultValueDescriptionpvDivdD = "GvuxBeOq9IaPSsbelTkm1jKYGYnAF4db4quiIOgI3kViVIGqmwbmofWlYKB9EZobmiBM";
		const _envVarj6tny46 = undefined;
		const _descriptionjbqgx1M = undefined;
		const _optionUW9m4mX = {
			"argChoices": _argChoicesCvlLON0,
		"negate": _negateOJHpXA,
		"defaultValue": _defaultValuef3WeLXL,
		"defaultValueDescription": _defaultValueDescriptionpvDivdD,
		"envVar": _envVarj6tny46,
		"description": _descriptionjbqgx1M
	}
		const _returnValueohejWbZ = await _HelpXDv4HuE.optionDescription(_optionUW9m4mX)
		const _cmdlrZ1eA0 = "mfJSmSp8FocJAsBnnTSf1zTaDeeYq51dJXADK6fHXCGGy194yfk2aYXFN3Ao";
		const _returnValueJ1awmjw = -8.247184837297395;
		const _visibleOptionsATWDPmC = () => { return _returnValueJ1awmjw };
		const _optionTermet5qCu = undefined;
		const _helpernkvR4IR = {
			"visibleOptions": _visibleOptionsATWDPmC,
		"optionTerm": _optionTermet5qCu
	}
		const _returnValueVZvy0d = await _HelpXDv4HuE.longestOptionTermLength(_cmdlrZ1eA0, _helpernkvR4IR)
		const _cmdTxpMC53 = "huR7A3A";
		const _arrayValuejwCG5rt = "knYZS7uC5vZnwzkD8rxQ7vlUKWIdCLNQncAAKDSdERLqnfIMTVlA9G6dZ0D3zvKnl1LFtCD";
		const _sortSubcommandsIiTq2K9 = [_arrayValuejwCG5rt]
		const _returnValuesuSyykO = undefined;
		const _subcommandTermsUpFLQ1 = () => { return _returnValuesuSyykO };
		const _helperSZIvs2q = {
			"sortSubcommands": _sortSubcommandsIiTq2K9,
		"subcommandTerm": _subcommandTermsUpFLQ1
	}
		const _returnValueun5Gct6 = await _HelpXDv4HuE.formatHelp(_cmdTxpMC53, _helperSZIvs2q)
	});

	it('test for Help', async () => {
		const _HelpJEwcK1h = new Help()
		const _flagsGpifMr = {
		
	}
		const _optionz5nda2A = {
			"flags": _flagsGpifMr
	}
		const _returnValueMYNIpT = await _HelpJEwcK1h.optionTerm(_optionz5nda2A)
		const _arrayValueDQfu6bL = 2.5367408502937927;
		const _arrayValueLYdLyEP = true;
		const _argumentm7BOk7 = [_arrayValueDQfu6bL, _arrayValueLYdLyEP]
		const _returnValuex5jr7GC = await _HelpJEwcK1h.argumentTerm(_argumentm7BOk7)
	});

	it('test for Help', async () => {
		const _HelpVMmZCoc = new Help()
		const _returnValueAsWC5T = null;
		const _descriptionSRh9iGZ = () => { return _returnValueAsWC5T };
		const _cmdn7Yq6tq = {
			"description": _descriptionSRh9iGZ
	}
		const _returnValueH0Hq4zC = await _HelpVMmZCoc.subcommandDescription(_cmdn7Yq6tq)
	});

	it('test for Help', async () => {
		const _HelphjkJOfC = new Help()
		const _argChoicesSeImrR = {
		
	}
		const _negatenmw2ZI1 = false;
		const _defaultValuenqCG8jX = undefined;
		const _defaultValueDescriptionmB7p73j = -2.5952584311302918;
		const _envVarFnhpwHH = undefined;
		const _descriptionhSWvOGS = 7.206511423183347;
		const _optionpPEjSbt = {
			"argChoices": _argChoicesSeImrR,
		"negate": _negatenmw2ZI1,
		"defaultValue": _defaultValuenqCG8jX,
		"defaultValueDescription": _defaultValueDescriptionmB7p73j,
		"envVar": _envVarFnhpwHH,
		"description": _descriptionhSWvOGS
	}
		const _returnValueoC7bLIQ = await _HelphjkJOfC.optionDescription(_optionpPEjSbt)
		const _cmdU0vaeFq = {
		
	}
		const _sortSubcommandsaaba0tb = null;
		const _returnValueqxJN20N = 7.059594700312264;
		const _subcommandTermpwmnrJc = () => { return _returnValueqxJN20N };
		const _helperCSgHP0G = {
			"sortSubcommands": _sortSubcommandsaaba0tb,
		"subcommandTerm": _subcommandTermpwmnrJc
	}
		const _returnValuewE6SQp7 = await _HelphjkJOfC.longestSubcommandTermLength(_cmdU0vaeFq, _helperCSgHP0G)
		const _cmdE7vDSZ = "LWnWolo0ebzAQk7YnMzHjhED63f7D2mclR4A7hsbErzWYyTimcfcyAgChn3qxA7kaIls66gLx3P125bncJEYGrFnXu2FqqVYRPd";
		const _returnValueR4gy8uA = null;
		const _returnValuetjvUWmv = () => { return _returnValueR4gy8uA };
		const _sortSubcommandsu6JvhH = () => { return _returnValuetjvUWmv };
		const _returnValueuxSbp0Z = null;
		const _subcommandTermDfc4PNh = () => { return _returnValueuxSbp0Z };
		const _helperqfNyuOA = {
			"sortSubcommands": _sortSubcommandsu6JvhH,
		"subcommandTerm": _subcommandTermDfc4PNh
	}
		const _returnValueMT4KFmY = await _HelphjkJOfC.formatHelp(_cmdE7vDSZ, _helperqfNyuOA)
	});

	it('test for Help', async () => {
		const _HelpNhB28g = new Help()
		const _argChoicesBwvr9y = {
		
	}
		const _returnValuewaPzfxZ = null;
		const _negateHFeLyPD = () => { return _returnValuewaPzfxZ };
		const _defaultValueUoq0H3f = undefined;
		const _defaultValueDescriptiondK4bRas = true;
		const _returnValuehBao2D = {
		
	}
		const _envVarg0oBOrB = () => { return _returnValuehBao2D };
		const _descriptionxydg8tm = undefined;
		const _optiontFnXT5v = {
			"argChoices": _argChoicesBwvr9y,
		"negate": _negateHFeLyPD,
		"defaultValue": _defaultValueUoq0H3f,
		"defaultValueDescription": _defaultValueDescriptiondK4bRas,
		"envVar": _envVarg0oBOrB,
		"description": _descriptionxydg8tm
	}
		const _returnValuel4B6Ln2 = await _HelpNhB28g.optionDescription(_optiontFnXT5v)
		const __nameq209wHW = {
		
	}
		const __aliasesjvPfyT7 = {
		
	}
		const _parentzeT2Yp = {
		
	}
		const _returnValuezAZhWQW = null;
		const _usagekesGCl9 = () => { return _returnValuezAZhWQW };
		const _cmdhd4H3yf = {
			"_name": __nameq209wHW,
		"_aliases": __aliasesjvPfyT7,
		"parent": _parentzeT2Yp,
		"usage": _usagekesGCl9
	}
		const _returnValuegtte3Cv = await _HelpNhB28g.commandUsage(_cmdhd4H3yf)
		const _returnValuemfkeofW = 2.929444365678414;
		const _descriptionAvSjVSM = () => { return _returnValuemfkeofW };
		const _cmdPfYpE3V = {
			"description": _descriptionAvSjVSM
	}
		const _returnValueCJhTbx1 = await _HelpNhB28g.subcommandDescription(_cmdPfYpE3V)
		const _cmdxHXswJn = null;
		const _arrayValueLMeUTJB = false;
		const _arrayValueNuTMEfL = {
		
	}
		const _arrayValuepKmQDqH = [_arrayValueLMeUTJB, _arrayValueNuTMEfL]
		const _arrayValueuvWrHN = null;
		const _arrayValueYvAi6ox = null;
		const _arrayValueRAJ7Gtm = {
		
	}
		const _returnValuegYJAv8 = [_arrayValuepKmQDqH, _arrayValueuvWrHN, _arrayValueYvAi6ox, _arrayValueRAJ7Gtm]
		const _visibleOptionszLkJ9oX = () => { return _returnValuegYJAv8 };
		const _returnValueqzWOAPS = null;
		const _optionTermwU9ial = () => { return _returnValueqzWOAPS };
		const _helperJzZzD3 = {
			"visibleOptions": _visibleOptionszLkJ9oX,
		"optionTerm": _optionTermwU9ial
	}
		const _returnValueu7lCiGA = await _HelpNhB28g.longestOptionTermLength(_cmdxHXswJn, _helperJzZzD3)
		const __argsZXS1jZX = {
		
	}
		const __nameq02DL7c = -3.734553115196608;
		const __aliasesSUcBeHP = {
		
	}
		const _optionslAKCu2j = {
		
	}
		const _cmddCvOxpp = {
			"_args": __argsZXS1jZX,
		"_name": __nameq02DL7c,
		"_aliases": __aliasesSUcBeHP,
		"options": _optionslAKCu2j
	}
		const _returnValueNLnHcWX = await _HelpNhB28g.subcommandTerm(_cmddCvOxpp)
	});

	it('test for Help', async () => {
		const _HelpY4U3kO = new Help()
		const _returnValueTupEiAs = undefined;
		const _matchtwk8Vz = () => { return _returnValueTupEiAs };
		const _returnValuetqJ18co = null;
		const _substrkLV92if = () => { return _returnValuetqJ18co };
		const _strSUQb7MO = {
			"match": _matchtwk8Vz,
		"substr": _substrkLV92if
	}
		const _widtht6EsJ65 = false;
		const _indentzci8nb = -8.87398172922723;
		const _minColumnWidthQE2SDIc = -8.786165880211161;
		const _returnValueN7n9yT5 = await _HelpY4U3kO.wrap(_strSUQb7MO, _widtht6EsJ65, _indentzci8nb, _minColumnWidthQE2SDIc)
		const _nameRvKENSO = null;
		const _argumentPMMq3Pe = {
			"name": _nameRvKENSO
	}
		const _returnValuebrRt4wd = await _HelpY4U3kO.argumentTerm(_argumentPMMq3Pe)
	});

	it('test for Help', async () => {
		const _HelpIiEJWnT = new Help()
		const _argChoicesrq0tt5j = null;
		const _negatecmn033R = 7.168177067584786;
		const _defaultValueBLjC2P1 = undefined;
		const _returnValuexMyfA9S = 6.5417966467368345;
		const _defaultValueDescriptionzYZdBQ = () => { return _returnValuexMyfA9S };
		const _envVarNRIr6JO = undefined;
		const _descriptionol3EcOn = -0.7722286840884038;
		const _optioni5eVVFZ = {
			"argChoices": _argChoicesrq0tt5j,
		"negate": _negatecmn033R,
		"defaultValue": _defaultValueBLjC2P1,
		"defaultValueDescription": _defaultValueDescriptionzYZdBQ,
		"envVar": _envVarNRIr6JO,
		"description": _descriptionol3EcOn
	}
		const _returnValueusguW81 = await _HelpIiEJWnT.optionDescription(_optioni5eVVFZ)
		const _returnValuepUmyDYv = null;
		const _matchMwT2pPq = () => { return _returnValuepUmyDYv };
		const _returnValueo2AUyjK = "pX4orcqTtWgMwBWCPHlqAXHIoS";
		const _substrByUdNnc = () => { return _returnValueo2AUyjK };
		const _strIbvoo7q = {
			"match": _matchMwT2pPq,
		"substr": _substrByUdNnc
	}
		const _widthFSohVFq = -9.5419193625375;
		const _indentdQEkbVA = -0.680108846917733;
		const _minColumnWidthGQonoqu = 7.3109548650130485;
		const _returnValueLiwQRBj = await _HelpIiEJWnT.wrap(_strIbvoo7q, _widthFSohVFq, _indentdQEkbVA, _minColumnWidthGQonoqu)
	});

	it('test for Help', async () => {
		const _HelpQfSOvhs = new Help()
		const _argChoicesNUYYwCU = undefined;
		const _defaultValuexPB7Kx = undefined;
		const _defaultValueDescriptiondGcB5LT = null;
		const _returnValuef6lgfT = {
		
	}
		const _arrayValuemOJtg6V = () => { return _returnValuef6lgfT };
		const _arrayValueRY3buKv = "1QdPlpLbTrSC64zDNnXrAfQUJLg";
		const _arrayValueKAOzmIE = {
		
	}
		const _descriptionbDKCHSV = [_arrayValuemOJtg6V, _arrayValueRY3buKv, _arrayValueKAOzmIE]
		const _argumentW49yKXL = {
			"argChoices": _argChoicesNUYYwCU,
		"defaultValue": _defaultValuexPB7Kx,
		"defaultValueDescription": _defaultValueDescriptiondGcB5LT,
		"description": _descriptionbDKCHSV
	}
		const _returnValuezX7zfGp = await _HelpQfSOvhs.argumentDescription(_argumentW49yKXL)
		const _argumentB3TXDh = 8.355680443966527;
		const _returnValueTXzbyUf = await _HelpQfSOvhs.argumentTerm(_argumentB3TXDh)
		const _cmdp7GAoBC = 1.2020589531716155;
		const _returnValueK9R054W = undefined;
		const _returnValuekm19SP = () => { return _returnValueK9R054W };
		const _longestOptionTermLengthDR1KyyF = () => { return _returnValuekm19SP };
		const _returnValueOo8Lsal = undefined;
		const _longestSubcommandTermLengtheRWAxz7 = () => { return _returnValueOo8Lsal };
		const _returnValue7SgJCe = null;
		const _returnValuemEh0G7W = () => { return _returnValue7SgJCe };
		const _longestArgumentTermLengthzFXXEgw = () => { return _returnValuemEh0G7W };
		const _helperpY5g6Mi = {
			"longestOptionTermLength": _longestOptionTermLengthDR1KyyF,
		"longestSubcommandTermLength": _longestSubcommandTermLengtheRWAxz7,
		"longestArgumentTermLength": _longestArgumentTermLengthzFXXEgw
	}
		const _returnValueupGMaHi = await _HelpQfSOvhs.padWidth(_cmdp7GAoBC, _helperpY5g6Mi)
	});

	it('test for Help', async () => {
		const _HelpyPws3dy = new Help()
		const _arrayValueVlETRTd = false;
		const _optionsWHw5grH = [_arrayValueVlETRTd]
		const __hasHelpOptionAZfnN2w = {
		
	}
		const __helpShortFlagNGlcCPB = {
		
	}
		const _returnValue5soSvZ = []
		const __findOptionedsr0T1 = () => { return _returnValue5soSvZ };
		const __helpLongFlagRRpu9da = null;
		const _arrayValuemVILSIB = "6Ay1OBT7kYpDuvgnaXftiefBpfsn5SuYof";
		const _arrayValueHv7lgL = undefined;
		const _arrayValuezq8LcSI = null;
		const _arrayValuehskOTTP = null;
		const _returnValuezJBlmyz = [_arrayValuemVILSIB, _arrayValueHv7lgL, _arrayValuezq8LcSI, _arrayValuehskOTTP]
		const _createOptionP6MhqHS = () => { return _returnValuezJBlmyz };
		const _arrayValueaSHzehg = "MCJTOeYPANzF43imtTDB1XHXQT7L3k2ERO61kai7XnnDq6eyTpO5N195l";
		const _arrayValuepRXZWxb = -7.190266240232282;
		const __helpDescriptionaNVhwh = [_arrayValueaSHzehg, _arrayValuepRXZWxb]
		const __helpFlagsG200lK8 = undefined;
		const _cmdVMQzbWP = {
			"options": _optionsWHw5grH,
		"_hasHelpOption": __hasHelpOptionAZfnN2w,
		"_helpShortFlag": __helpShortFlagNGlcCPB,
		"_findOption": __findOptionedsr0T1,
		"_helpLongFlag": __helpLongFlagRRpu9da,
		"createOption": _createOptionP6MhqHS,
		"_helpDescription": __helpDescriptionaNVhwh,
		"_helpFlags": __helpFlagsG200lK8
	}
		const _returnValueergCjQo = await _HelpyPws3dy.visibleOptions(_cmdVMQzbWP)
		const _optionsrL07kg = {
		
	}
		const __hasHelpOptionI9uINor = null;
		const __helpShortFlagj9Cfwxw = null;
		const _returnValueN5ky1f = false;
		const __findOptionDmuF0K9 = () => { return _returnValueN5ky1f };
		const _arrayValueDlJemg = "eBHT2hjQF2i3F4vITMdsKzGQeJTMwjLh64bO0ndXBADIVU4krUr0pWws5gauFUjqiW";
		const _arrayValueAxNmtPL = null;
		const _arrayValueRSwSLy = undefined;
		const _arrayValuesa4sxqF = [_arrayValueAxNmtPL, _arrayValueRSwSLy]
		const _arrayValued97o9Ta = undefined;
		const __helpLongFlagFeuGKw = [_arrayValueDlJemg, _arrayValuesa4sxqF, _arrayValued97o9Ta]
		const _returnValueI1bEE1P = true;
		const _returnValuenbo2Nb = () => { return _returnValueI1bEE1P };
		const _createOptionE3gsk7 = () => { return _returnValuenbo2Nb };
		const _returnValueZZd4hTn = false;
		const __helpDescriptiondfccSpG = () => { return _returnValueZZd4hTn };
		const __helpFlagsi7ZA4kJ = null;
		const _cmdxltXF8W = {
			"options": _optionsrL07kg,
		"_hasHelpOption": __hasHelpOptionI9uINor,
		"_helpShortFlag": __helpShortFlagj9Cfwxw,
		"_findOption": __findOptionDmuF0K9,
		"_helpLongFlag": __helpLongFlagFeuGKw,
		"createOption": _createOptionE3gsk7,
		"_helpDescription": __helpDescriptiondfccSpG,
		"_helpFlags": __helpFlagsi7ZA4kJ
	}
		const _returnValue0jttoZ = await _HelpyPws3dy.visibleOptions(_cmdxltXF8W)
		const _argChoicesdON4jIh = {
		
	}
		const _negateqZVtIks = {
		
	}
		const _defaultValuejjHYlpu = undefined;
		const _defaultValueDescriptioncWvhsbu = "wfHuUvBwC3kNBYiRL5r39g9NsKscWbAgFzaDvu5iLUjVjfJKYb2RSqZelzNrPW7bxMInbr";
		const _envVardBkF9RO = undefined;
		const _returnValueX8PDswQ = undefined;
		const _descriptionq0qNPEm = () => { return _returnValueX8PDswQ };
		const _optionZsi6nY1 = {
			"argChoices": _argChoicesdON4jIh,
		"negate": _negateqZVtIks,
		"defaultValue": _defaultValuejjHYlpu,
		"defaultValueDescription": _defaultValueDescriptioncWvhsbu,
		"envVar": _envVardBkF9RO,
		"description": _descriptionq0qNPEm
	}
		const _returnValuea6KgRz = await _HelpyPws3dy.optionDescription(_optionZsi6nY1)
	});

	it('test for Help', async () => {
		const _HelpWaCSwX = new Help()
		const __namebE3gIhC = {
		
	}
		const _arrayValuel92qhW = "TaihtaBB";
		const _arrayValueRO7AEzR = {
		
	}
		const __aliasesDBd3UhN = [_arrayValuel92qhW, _arrayValueRO7AEzR]
		const _parentdpSNVjN = {
		
	}
		const _returnValueRCKdlnW = undefined;
		const _returnValuehdq9Jxx = () => { return _returnValueRCKdlnW };
		const _usagehT9MJKf = () => { return _returnValuehdq9Jxx };
		const _cmdJjEYLhx = {
			"_name": __namebE3gIhC,
		"_aliases": __aliasesDBd3UhN,
		"parent": _parentdpSNVjN,
		"usage": _usagehT9MJKf
	}
		const _returnValueRi2Uxjd = await _HelpWaCSwX.commandUsage(_cmdJjEYLhx)
		const _arrayValuelM9nC6o = undefined;
		const _cmdKUrvTvi = [_arrayValuelM9nC6o]
		const _returnValuenkwp6ZE = "wMoRwefM3hs6ttAaJjfVBrtm1z6uGuVWXQKoNeazFbXPPTRMb5";
		const _visibleOptionslWimsF = () => { return _returnValuenkwp6ZE };
		const _returnValueXTuWWZ7 = null;
		const _optionTermQVuY8e6 = () => { return _returnValueXTuWWZ7 };
		const _helperPF5WCwo = {
			"visibleOptions": _visibleOptionslWimsF,
		"optionTerm": _optionTermQVuY8e6
	}
		const _returnValueY42HUX4 = await _HelpWaCSwX.longestOptionTermLength(_cmdKUrvTvi, _helperPF5WCwo)
		const _returnValueabqtig = null;
		const _nameSIALQi = () => { return _returnValueabqtig };
		const _argumentIkvOoe = {
			"name": _nameSIALQi
	}
		const _returnValueaRy6Tqv = await _HelpWaCSwX.argumentTerm(_argumentIkvOoe)
		const _arrayValueP8DLQni = null;
		const _arrayValueIyBfDZ3 = false;
		const _cmdzIUs2H = [_arrayValueP8DLQni, _arrayValueIyBfDZ3]
		const _helpermZz0jBU = null;
		const _returnValueNXzK19 = await _HelpWaCSwX.longestOptionTermLength(_cmdzIUs2H, _helpermZz0jBU)
	});

	it('test for Help', async () => {
		const _HelpDgii81q = new Help()
		const _arrayValuel4Wgk9j = false;
		const _arrayValueicsY5XJ = "0P0iIfkh7MeW3znCpM15FzHPf9AUumXEII";
		const _argChoicesLkEQKV = [_arrayValuel4Wgk9j, _arrayValueicsY5XJ]
		const _defaultValuesmwFTbT = undefined;
		const _defaultValueDescriptionjaG5Xee = "hIuMXkemtJY4QwKx6CW1uLfX4PkbMLcDW13NMb1bKiU999o8ilN4aEDzODV1xm33bvfKG7Hqo9GAq7ZeO";
		const _descriptionvMUMcm6 = undefined;
		const _argumentXP3MTsJ = {
			"argChoices": _argChoicesLkEQKV,
		"defaultValue": _defaultValuesmwFTbT,
		"defaultValueDescription": _defaultValueDescriptionjaG5Xee,
		"description": _descriptionvMUMcm6
	}
		const _returnValueI1nZRcN = await _HelpDgii81q.argumentDescription(_argumentXP3MTsJ)
		const __nameIkWzIFz = {
		
	}
		const __aliasesE28rykZ = true;
		const _parentBy62RSP = {
		
	}
		const _returnValuerJ8fQUa = "JKiHIrGsgkJYfO63Elh1hK8cRYhbxhq5YoS7Yt9";
		const _usageXfdj5zF = () => { return _returnValuerJ8fQUa };
		const _cmdwwySIB = {
			"_name": __nameIkWzIFz,
		"_aliases": __aliasesE28rykZ,
		"parent": _parentBy62RSP,
		"usage": _usageXfdj5zF
	}
		const _returnValuefpBv8jj = await _HelpDgii81q.commandUsage(_cmdwwySIB)
		const __argsDescriptionCxIEaLv = {
		
	}
		const __argsSckymTD = {
		
	}
		const _cmdQWLcRWA = {
			"_argsDescription": __argsDescriptionCxIEaLv,
		"_args": __argsSckymTD
	}
		const _returnValueSLYA7Ed = await _HelpDgii81q.visibleArguments(_cmdQWLcRWA)
		const _cmdhgouB36 = undefined;
		const _returnValuetmkP5f = null;
		const _sortSubcommandsf6PmCS4 = () => { return _returnValuetmkP5f };
		const _returnValueJJVv1A = 6.511481874990931;
		const _subcommandTermdqCJ1NZ = () => { return _returnValueJJVv1A };
		const _helperSzugNIb = {
			"sortSubcommands": _sortSubcommandsf6PmCS4,
		"subcommandTerm": _subcommandTermdqCJ1NZ
	}
		const _returnValueOJftHCC = await _HelpDgii81q.longestSubcommandTermLength(_cmdhgouB36, _helperSzugNIb)
	});

	it('test for Help', async () => {
		const _HelpHsRjN1m = new Help()
		const __argsjVGj5hR = []
		const __nameVsoVyO8 = -1.4394979934585983;
		const _returnValueZylU37X = undefined;
		const __aliasesiewaui1 = () => { return _returnValueZylU37X };
		const _optionsIRLiIv0 = {
		
	}
		const _cmdkSHwaV = {
			"_args": __argsjVGj5hR,
		"_name": __nameVsoVyO8,
		"_aliases": __aliasesiewaui1,
		"options": _optionsIRLiIv0
	}
		const _returnValuepEf9HaR = await _HelpHsRjN1m.subcommandTerm(_cmdkSHwaV)
		const __namey8PlAL0 = {
		
	}
		const __aliasesMeIKg4z = {
		
	}
		const _parentf3vdxur = {
		
	}
		const _returnValuetyNXO8w = 7.853271814615624;
		const _usagehuYZCQ3 = () => { return _returnValuetyNXO8w };
		const _cmdPHqgXO0 = {
			"_name": __namey8PlAL0,
		"_aliases": __aliasesMeIKg4z,
		"parent": _parentf3vdxur,
		"usage": _usagehuYZCQ3
	}
		const _returnValueHJvjGBb = await _HelpHsRjN1m.commandUsage(_cmdPHqgXO0)
	});

	it('test for Help', async () => {
		const _HelpoOlo923 = new Help()
		const _returnValuereYKHPt = false;
		const _matchH3Yjdvs = () => { return _returnValuereYKHPt };
		const _returnValuefaGpwvD = undefined;
		const _substrj8AkVog = () => { return _returnValuefaGpwvD };
		const _strtpgqGAJ = {
			"match": _matchH3Yjdvs,
		"substr": _substrj8AkVog
	}
		const _widthONujOlu = -8.898827137487892;
		const _indenti3SiUa = -3.568715463807562;
		const _minColumnWidthsGXtbAT = 9.715186818573759;
		const _returnValuexdOV24s = await _HelpoOlo923.wrap(_strtpgqGAJ, _widthONujOlu, _indenti3SiUa, _minColumnWidthsGXtbAT)
		const _arrayValueTkmoyT4 = "8lb3DpgsbXADiDOpHWjE8Ci8iHgnGlSw7y2OPz9HEpYsAo7wK9fPnzYmUO1ERKsgWUk5mdLQG2L7B3Iy2";
		const _arrayValueutd1bYN = undefined;
		const _arrayValueGuvbKyQ = {
		
	}
		const _arrayValuekDmnvAu = "upsOgJ1sWZBw9w8vtc5tIX5nUBiin2Ux9DUKSI3BJtUrcczMzvy4Sto9r";
		const _arrayValueak52Wl0 = undefined;
		const _argChoiceszgId3zk = [_arrayValueTkmoyT4, _arrayValueutd1bYN, _arrayValueGuvbKyQ, _arrayValuekDmnvAu, _arrayValueak52Wl0]
		const _defaultValuer4J9A4 = undefined;
		const _defaultValueDescriptionNzI5Cfq = true;
		const _arrayValuechljR2H = {
		
	}
		const _arrayValueypARLDs = null;
		const _arrayValueO9b4oU = [_arrayValueypARLDs]
		const _arrayValuecwXHO3W = -1.0561229694285874;
		const _arrayValueVWRDulV = undefined;
		const _returnValueZOPKUYn = [_arrayValuechljR2H, _arrayValueO9b4oU, _arrayValuecwXHO3W, _arrayValueVWRDulV]
		const _descriptionlSvxidS = () => { return _returnValueZOPKUYn };
		const _argumentgwGzdCW = {
			"argChoices": _argChoiceszgId3zk,
		"defaultValue": _defaultValuer4J9A4,
		"defaultValueDescription": _defaultValueDescriptionNzI5Cfq,
		"description": _descriptionlSvxidS
	}
		const _returnValuejpQ4gNX = await _HelpoOlo923.argumentDescription(_argumentgwGzdCW)
		const _returnValueTJlfjsU = 5.195897506162785;
		const _descriptionxt9AkO = () => { return _returnValueTJlfjsU };
		const _cmdAS7ngF = {
			"description": _descriptionxt9AkO
	}
		const _returnValuexzxkjmw = await _HelpoOlo923.commandDescription(_cmdAS7ngF)
		const _returnValuetsLGVp4 = null;
		const _returnValueSJngBGD = () => { return _returnValuetsLGVp4 };
		const _nameKBf2FCP = () => { return _returnValueSJngBGD };
		const _argumentYJqXPhK = {
			"name": _nameKBf2FCP
	}
		const _returnValueLO6Yijz = await _HelpoOlo923.argumentTerm(_argumentYJqXPhK)
		const _arrayValuebhCSR3a = false;
		const _cmdxPDrajk = [_arrayValuebhCSR3a]
		const _returnValueSa50XIr = {
		
	}
		const _visibleArgumentstpwxBfi = () => { return _returnValueSa50XIr };
		const _argumentTermHwawI2q = "s92xk7HPtc0sMkXqermRD5E6xVbwEjz4PgoCnIW2Nv9K8aushER2RWY2dYmKUY7oHaithzXw4iNVCyFkAH7";
		const _helperjxEyJRZ = {
			"visibleArguments": _visibleArgumentstpwxBfi,
		"argumentTerm": _argumentTermHwawI2q
	}
		const _returnValuerWzOOH = await _HelpoOlo923.longestArgumentTermLength(_cmdxPDrajk, _helperjxEyJRZ)
	});

	it('test for Help', async () => {
		const _HelpZbVF8us = new Help()
		const _argChoicesPXQTUN3 = null;
		const _negatek3Fz8g = undefined;
		const _returnValuemNrDJPS = null;
		const _defaultValueNo2FAIo = () => { return _returnValuemNrDJPS };
		const _defaultValueDescriptiondGI0J65 = true;
		const _envVarLeTts8z = undefined;
		const _returnValuezTbMKj = "X5jMYJ9mZbAwHhjERUIEjJxRSzmrQqWTbEfgJPeKWZQeyJhrZR4X";
		const _descriptionMrg4ZDr = () => { return _returnValuezTbMKj };
		const _optionXxmGsLD = {
			"argChoices": _argChoicesPXQTUN3,
		"negate": _negatek3Fz8g,
		"defaultValue": _defaultValueNo2FAIo,
		"defaultValueDescription": _defaultValueDescriptiondGI0J65,
		"envVar": _envVarLeTts8z,
		"description": _descriptionMrg4ZDr
	}
		const _returnValuedYbeOw = await _HelpZbVF8us.optionDescription(_optionXxmGsLD)
		const _argChoicesufQCSUz = {
		
	}
		const _negateBB23AA = undefined;
		const _defaultValueFfDlJe0 = undefined;
		const _returnValueOjnkSQD = null;
		const _defaultValueDescriptionuYbLfDs = () => { return _returnValueOjnkSQD };
		const _envVarg1laTO = undefined;
		const _descriptiond8Df35m = "Rcl6BHam1q83TiwrRyP1F0856RN2L4Z4xxslQYeizpNzghNNOuOPWGG9eIqqPnDVfLaGpNUsLyx";
		const _option3TXQiX = {
			"argChoices": _argChoicesufQCSUz,
		"negate": _negateBB23AA,
		"defaultValue": _defaultValueFfDlJe0,
		"defaultValueDescription": _defaultValueDescriptionuYbLfDs,
		"envVar": _envVarg1laTO,
		"description": _descriptiond8Df35m
	}
		const _returnValueoSsOHnz = await _HelpZbVF8us.optionDescription(_option3TXQiX)
		const _flagsdfsVOTx = null;
		const _optionS8eRQq3 = {
			"flags": _flagsdfsVOTx
	}
		const _returnValueCwlyaS = await _HelpZbVF8us.optionTerm(_optionS8eRQq3)
	});

	it('test for Help', async () => {
		const _HelpyVLa7i = new Help()
		const _arrayValuefSlLDyx = true;
		const _arrayValueXFNePmk = 6.263595975950416;
		const _arrayValuerxOxgSf = 2.607757402468005;
		const _commandsNmIgFWD = [_arrayValuefSlLDyx, _arrayValueXFNePmk, _arrayValuerxOxgSf]
		const _returnValuey2dfDYf = undefined;
		const __hasImplicitHelpCommandvXuUH6R = () => { return _returnValuey2dfDYf };
		const _arrayValuemGQIgAL = "JQKSMu77Bc2ynSLA1BaBGKjDRnwfwtTgFXOevALyT6eLXraEEmkx6VaLLPFYApRk9dplfsHp";
		const _arrayValuefyOZ1Q = undefined;
		const _arrayValueWGBWkd8 = 8.71029378858346;
		const __helpCommandnameAndArgsbEFreak = [_arrayValuemGQIgAL, _arrayValuefyOZ1Q, _arrayValueWGBWkd8]
		const _createCommandCIqyH81 = null;
		const __helpCommandDescriptionNxs1U5L = false;
		const _cmdFFKHQJb = {
			"commands": _commandsNmIgFWD,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandvXuUH6R,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsbEFreak,
		"createCommand": _createCommandCIqyH81,
		"_helpCommandDescription": __helpCommandDescriptionNxs1U5L
	}
		const _returnValueZZE7CcM = await _HelpyVLa7i.visibleCommands(_cmdFFKHQJb)
		const _arrayValueVFiWJK = 8.389890360100189;
		const _arrayValueefbLgBz = false;
		const _flagsUm0292G = [_arrayValueVFiWJK, _arrayValueefbLgBz]
		const _optionnx86Fsw = {
			"flags": _flagsUm0292G
	}
		const _returnValuez8SZY1W = await _HelpyVLa7i.optionTerm(_optionnx86Fsw)
	});
})