export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {InvalidArgumentError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpMF29khi = new Help()
		const _arrayValuewXYOmJE = "ei8tM16qRBYKJ6M8dH85qBpG8mkhBoo6x40SGWkeW6c7szSvItqvqonVOhEfoiZPj";
		const _arrayValueV2qIEGX = null;
		const _returnValueRpzk6D7 = null;
		const _arrayValueVqnDMzj = () => { return _returnValueRpzk6D7 };
		const _arrayValuegDCUHJy = [_arrayValueVqnDMzj]
		const _arrayValueosTcckG = [_arrayValuewXYOmJE, _arrayValueV2qIEGX, _arrayValuegDCUHJy]
		const _arrayValuelPgN2q6 = -0.8915376114467968;
		const _cmdj0IxviM = [_arrayValueosTcckG, _arrayValuelPgN2q6]
		const _arrayValueb75ucDM = true;
		const _arrayValue9CjVXY = -7.823958671047381;
		const _helperGw5tvmB = [_arrayValueb75ucDM, _arrayValue9CjVXY]
		const _returnValueL1gwLlb = await _HelpMF29khi.longestArgumentTermLength(_cmdj0IxviM, _helperGw5tvmB)
		const _messagedbGJSZc = -7.517336786754541;
		const _argumentbja7Gdk = new InvalidArgumentError(_messagedbGJSZc)
		const _returnValuejb6gU86 = await _HelpMF29khi.argumentTerm(_argumentbja7Gdk)
		const _nameWxzSBT = -6.002287011990634;
		const _cmdvF96aFd = new Command(_nameWxzSBT)
		const _displaySuggestionNOpOm6r = "WDS6gLJdJVQ8n78CKpzREXSlag4RQ5KnG";
		const _returnValueVXRwYh4 = await _cmdvF96aFd.showSuggestionAfterError(_displaySuggestionNOpOm6r)
		const _keyYe6GQSd = 2.000322382530049;
		const _valueJ6htghm = {
		
	}
		const _returnValueshuGspa = await _cmdvF96aFd.setOptionValue(_keyYe6GQSd, _valueJ6htghm)
		const _returnValuegXaEkUE = await _cmdvF96aFd.unknownCommand()
		const _errorvYWsBme = null;
		const _arrayValuebxCWLze = null;
		const _commandgYwysO4 = [_arrayValuebxCWLze]
		const _contextOptionsyyCvh1b = {
			"error": _errorvYWsBme,
		"command": _commandgYwysO4
	}
		const _returnValueOPJj6xh = await _cmdvF96aFd.help(_contextOptionsyyCvh1b)
		const _returnValuemfXTiss = await _HelpMF29khi.subcommandDescription(_cmdvF96aFd)
	});

	it('test for Help', async () => {
		const _HelpeagOzJy = new Help()
		const __argsg7W7DcB = {
		
	}
		const __namesVpKD5 = 3.484637189318745;
		const __aliasesrixG2bg = {
		
	}
		const _optionsAcnRRVQ = {
		
	}
		const _cmdCXA3En = {
			"_args": __argsg7W7DcB,
		"_name": __namesVpKD5,
		"_aliases": __aliasesrixG2bg,
		"options": _optionsAcnRRVQ
	}
		const _returnValueeuxH94q = await _HelpeagOzJy.subcommandTerm(_cmdCXA3En)
		const __argsRQJOuCN = {
		
	}
		const __namecCPRYda = 3.8016504987146504;
		const __aliasesTckMqbz = {
		
	}
		const _optionseE0tsFH = {
		
	}
		const _cmdY3j9YRf = {
			"_args": __argsRQJOuCN,
		"_name": __namecCPRYda,
		"_aliases": __aliasesTckMqbz,
		"options": _optionseE0tsFH
	}
		const _returnValueMdTmeuV = await _HelpeagOzJy.subcommandTerm(_cmdY3j9YRf)
		const _returnValuek9gqmC = undefined;
		const _namexYnuwxF = () => { return _returnValuek9gqmC };
		const _argumenttfDvrXG = {
			"name": _namexYnuwxF
	}
		const _returnValueH71lFXk = await _HelpeagOzJy.argumentTerm(_argumenttfDvrXG)
		const _arrayValuenUEt8j8 = false;
		const _arrayValueRoOlXPj = 2.9132994349292485;
		const _arrayValueRfDtfS = [_arrayValuenUEt8j8, _arrayValueRoOlXPj]
		const _arrayValueOPVm4w = undefined;
		const _arrayValueB0MrpDB = true;
		const _cmdlCKeIJG = [_arrayValueRfDtfS, _arrayValueOPVm4w, _arrayValueB0MrpDB]
		const _helperEQWbmKv = 4.012428620151489;
		const _returnValuemOrOkj = await _HelpeagOzJy.longestOptionTermLength(_cmdlCKeIJG, _helperEQWbmKv)
		const _cmduY1mepk = "3CwUGzifU";
		const _returnValueZGJtOog = await _HelpeagOzJy.visibleOptions(_cmduY1mepk)
	});

	it('test for Help', async () => {
		const _HelpCjU0E9S = new Help()
		const _arrayValuelFlKmP = "4BREk3z4xSVYMENTFjgleSXrjviskozB6T1LDYjOtuvkzAr5Yf8vQKcGXpZUTSjYxlAVmarr9DDDE";
		const _arrayValueQqYU2me = false;
		const _cmdpwKzoZ = [_arrayValuelFlKmP, _arrayValueQqYU2me]
		const _helperdHwVNHB = new Help()
		const _optionjKK3fa = "1PnQfm";
		const _returnValuehuWccI = await _helperdHwVNHB.optionDescription(_optionjKK3fa)
		const _optionsQMT08Fr = {
		
	}
		const _returnValuevbsi1di = null;
		const __hasHelpOptionk113KlH = () => { return _returnValuevbsi1di };
		const __helpShortFlagkgel3Xc = undefined;
		const __findOptionveaGTvz = "ZPDOkW5hnhbuzLbvAWY3twtWvJsFRt35rvPlHVU16uQNQPBOIeIcPhmZC5cMbMKSaNmtoCHdICn6OqfRCohmCoeQq6Qth";
		const _arrayValueQRZj1rL = "eq1i9HW";
		const _arrayValuexGDcov0 = 7.051244765224027;
		const _returnValuegmHLP7m = undefined;
		const _arrayValueDE5Fwn2 = () => { return _returnValuegmHLP7m };
		const __helpLongFlagPug17nU = [_arrayValueQRZj1rL, _arrayValuexGDcov0, _arrayValueDE5Fwn2]
		const _returnValuesS2JQW4 = {
		
	}
		const _createOptionzd28IU8 = () => { return _returnValuesS2JQW4 };
		const __helpDescriptionT867Y5 = 7.849504181866543;
		const __helpFlagsQLh3B0I = undefined;
		const _cmdp9Pep0 = {
			"options": _optionsQMT08Fr,
		"_hasHelpOption": __hasHelpOptionk113KlH,
		"_helpShortFlag": __helpShortFlagkgel3Xc,
		"_findOption": __findOptionveaGTvz,
		"_helpLongFlag": __helpLongFlagPug17nU,
		"createOption": _createOptionzd28IU8,
		"_helpDescription": __helpDescriptionT867Y5,
		"_helpFlags": __helpFlagsQLh3B0I
	}
		const _returnValueh2zaETD = await _helperdHwVNHB.visibleOptions(_cmdp9Pep0)
		const _nameWB5asYT = -0.0637227180058666;
		const _argumentYk610Wr = {
			"name": _nameWB5asYT
	}
		const _returnValueTFlnrPN = await _helperdHwVNHB.argumentTerm(_argumentYk610Wr)
		const _returnValueWY7tEt = undefined;
		const _cmdx8Vo6WK = () => { return _returnValueWY7tEt };
		const _arrayValueNDgz9aR = "PsBCBFYSfkp76G";
		const _helperVSlUZDX = [_arrayValueNDgz9aR]
		const _returnValueMiNkvSI = await _helperdHwVNHB.longestOptionTermLength(_cmdx8Vo6WK, _helperVSlUZDX)
		const _returnValueWW9LNeT = await _HelpCjU0E9S.padWidth(_cmdpwKzoZ, _helperdHwVNHB)
		const _argChoicesMdEz3Sz = {
		
	}
		const _defaultValuemF2cRQH = undefined;
		const _defaultValueDescriptionxdl5PyR = false;
		const _descriptionOrDb8rm = "odE5GJYD5XWebgOW864CNNkyg43yKQ8bbLMhBV11j7jMKJpWHbGNSDwLcv1axzNnCvQFWyqTX52EvDQByiJTBnhYma1";
		const _argumentqjUG4Rc = {
			"argChoices": _argChoicesMdEz3Sz,
		"defaultValue": _defaultValuemF2cRQH,
		"defaultValueDescription": _defaultValueDescriptionxdl5PyR,
		"description": _descriptionOrDb8rm
	}
		const _returnValueR9fy2y = await _HelpCjU0E9S.argumentDescription(_argumentqjUG4Rc)
		const __nameYgSEm0i = 1.7583161677912287;
		const __aliasesiHnq7Lc = {
		
	}
		const _returnValuelXHeHF = "gSJdI27g5jjsjjx11PhmbK1j";
		const _parentWfnRhcQ = () => { return _returnValuelXHeHF };
		const _returnValuejg1G0BR = null;
		const _usageMoIrIt = () => { return _returnValuejg1G0BR };
		const _cmdCRIv9DI = {
			"_name": __nameYgSEm0i,
		"_aliases": __aliasesiHnq7Lc,
		"parent": _parentWfnRhcQ,
		"usage": _usageMoIrIt
	}
		const _returnValueZwJEhku = await _HelpCjU0E9S.commandUsage(_cmdCRIv9DI)
	});

	it('test for Help', async () => {
		const _HelpbM7hftQ = new Help()
		const _returnValueFCtExHQ = -5.997914418302806;
		const _cmdY0vWEet = () => { return _returnValueFCtExHQ };
		const _returnValueIp4e4Kt = -7.970974751807505;
		const _visibleOptionskAkxxl = () => { return _returnValueIp4e4Kt };
		const _returnValuetGjvovX = {
		
	}
		const _optionTermoO7UrzC = () => { return _returnValuetGjvovX };
		const _helperFgJKsO = {
			"visibleOptions": _visibleOptionskAkxxl,
		"optionTerm": _optionTermoO7UrzC
	}
		const _returnValuepRC9MHY = await _HelpbM7hftQ.longestOptionTermLength(_cmdY0vWEet, _helperFgJKsO)
		const __namepiFsHkR = 6.629221815724531;
		const __aliasesVe4nFs = {
		
	}
		const _parentCrpTyO5 = {
		
	}
		const _returnValueb5RwP5 = false;
		const _usageeL02JSG = () => { return _returnValueb5RwP5 };
		const _cmdBjYHYgY = {
			"_name": __namepiFsHkR,
		"_aliases": __aliasesVe4nFs,
		"parent": _parentCrpTyO5,
		"usage": _usageeL02JSG
	}
		const _returnValuetmxhZ6s = await _HelpbM7hftQ.commandUsage(_cmdBjYHYgY)
	});

	it('test for Help', async () => {
		const _HelpcuKNTC4 = new Help()
		const _returnValueALeN2Ks = -4.411925451543924;
		const _cmdC72OghB = () => { return _returnValueALeN2Ks };
		const _arrayValuex9c4bWn = -0.9033232731701695;
		const _arrayValueQaghhwQ = undefined;
		const _returnValuekSVZDOr = [_arrayValuex9c4bWn, _arrayValueQaghhwQ]
		const _arrayValueHuilxTy = () => { return _returnValuekSVZDOr };
		const _arrayValuenH8otOe = undefined;
		const _sortSubcommandsg8zky7d = [_arrayValueHuilxTy, _arrayValuenH8otOe]
		const _arrayValueGeYydor = undefined;
		const _arrayValuetPfFkX9 = false;
		const _arrayValueQORIE8L = null;
		const _returnValueBeY7uoQ = [_arrayValueGeYydor, _arrayValuetPfFkX9, _arrayValueQORIE8L]
		const _subcommandTermHSuhu4i = () => { return _returnValueBeY7uoQ };
		const _helperWb6fVj = {
			"sortSubcommands": _sortSubcommandsg8zky7d,
		"subcommandTerm": _subcommandTermHSuhu4i
	}
		const _returnValuedJI3Oaz = await _HelpcuKNTC4.formatHelp(_cmdC72OghB, _helperWb6fVj)
		const _argumentT01uJw2 = undefined;
		const _returnValueCFAsa2A = await _HelpcuKNTC4.argumentDescription(_argumentT01uJw2)
		const _optionkig1jiO = "PGUdSvSBi8MsaNoe1J2l7tPP2pzq7QG3BAhleGTiomA9KlLzkNWVPm7hTuHOXiFi58wUJKMvS8Dzpdm6mnlhLi";
		const _returnValueo0ArDA = await _HelpcuKNTC4.optionDescription(_optionkig1jiO)
		const _cmdXebiXKb = 8.144353874848221;
		const _returnValuejLsSAXF = "9K6bAA4ep3uGJ3d11kBZRzJffXtQxDE4R7ZZyLwLUg9Rwippz66pPOdoFfnCw7tqfktdO0OIGjr7xn";
		const _helperilwEkos = () => { return _returnValuejLsSAXF };
		const _returnValueeZuJfE = await _HelpcuKNTC4.longestSubcommandTermLength(_cmdXebiXKb, _helperilwEkos)
	});

	it('test for Help', async () => {
		const _HelpwmZGawY = new Help()
		const _cmdGvflx7q = -9.256162648857785;
		const _helpersBKbs2s = new Help()
		const _argumentQVQlkN = "Hm5aR8xptjaTCa7zpfJCmGuQeCSB7BJ2mFn8oVM2GEx6D1DPjU";
		const _returnValueKfMDzl = await _helpersBKbs2s.argumentDescription(_argumentQVQlkN)
		const _cmdfh0V8kU = false;
		const _sortSubcommandsaQzcTfq = undefined;
		const _returnValueFHGhI92 = undefined;
		const _subcommandTermCGdtwKL = () => { return _returnValueFHGhI92 };
		const _helperuWks7Es = {
			"sortSubcommands": _sortSubcommandsaQzcTfq,
		"subcommandTerm": _subcommandTermCGdtwKL
	}
		const _returnValueAgZXJyR = await _helpersBKbs2s.formatHelp(_cmdfh0V8kU, _helperuWks7Es)
		const _returnValueDRPuaxv = await _HelpwmZGawY.padWidth(_cmdGvflx7q, _helpersBKbs2s)
		const _cmdydImJMl = "bZ4KgZDCounV4AU1WU9XMiooqUBDeu6NdAuBaUzz3amJHctjeImClUXkmxhfeaD3oaJfHG";
		const _arrayValueXWsTXOO = null;
		const _helperIF5OkTI = [_arrayValueXWsTXOO]
		const _returnValueEdMEuGp = await _HelpwmZGawY.longestArgumentTermLength(_cmdydImJMl, _helperIF5OkTI)
		const _cmdcO9vEc0 = false;
		const _returnValuezxXl0mu = null;
		const _helperxbVLgXl = () => { return _returnValuezxXl0mu };
		const _returnValue8rQlQt = await _HelpwmZGawY.padWidth(_cmdcO9vEc0, _helperxbVLgXl)
	});

	it('test for Help', async () => {
		const _Helps9w9oeP = new Help()
		const _arrayValuewC7FtEg = null;
		const _arrayValueFCvaXVl = {
		
	}
		const _arrayValuew6m0TSP = [_arrayValuewC7FtEg, _arrayValueFCvaXVl]
		const _arrayValueE8JBBfa = [_arrayValuew6m0TSP]
		const _arrayValuez54aMyu = {
		
	}
		const _cmdrPUmWLU = [_arrayValueE8JBBfa, _arrayValuez54aMyu]
		const _returnValuermkqCH = await _Helps9w9oeP.visibleArguments(_cmdrPUmWLU)
		const _cmddfad3El = "zTAyYdPExFePIycebXTY6Z33RwAknIIu9zuVF7A6OkG4ONVgWRsAx5fveI1pn5qEDXq8ZzaQR8cjq";
		const _returnValueBcKYSJS = await _Helps9w9oeP.visibleOptions(_cmddfad3El)
		const _arrayValueY9ZXF6Z = "rLXBtgfOK7hIcCczNV8JodqyYdjQDTy7nlvB07HaOphpuJ4rt22V8PMscX06IATM46Smo92";
		const _arrayValueUXJL6Gg = []
		const _arrayValueEMUgSa8 = [_arrayValueUXJL6Gg]
		const _arrayValuer5tZRDc = null;
		const _arrayValuejD0sRP = [_arrayValueY9ZXF6Z, _arrayValueEMUgSa8, _arrayValuer5tZRDc]
		const _arrayValueNKmBlhd = "NZIwQYJmCgHxHDMg0IwXNZrSU4vAyuaRvfCIEvIEUATHu9uMePvf2eF3VhEsb1pBr3jw3fHrTv";
		const _returnValuehVti9ae = [_arrayValuejD0sRP, _arrayValueNKmBlhd]
		const _returnValueQfHLEhe = () => { return _returnValuehVti9ae };
		const _argumentNDo9zC4 = () => { return _returnValueQfHLEhe };
		const _returnValueKazhV7A = await _Helps9w9oeP.argumentDescription(_argumentNDo9zC4)
		const _returnValueXcf7ja = null;
		const _arrayValuecAnuMk = () => { return _returnValueXcf7ja };
		const _optionN2Wimfk = [_arrayValuecAnuMk]
		const _returnValuepba8pW2 = await _Helps9w9oeP.optionTerm(_optionN2Wimfk)
	});

	it('test for Help', async () => {
		const _HelpL9yT2V = new Help()
		const _cmdlE9Qu7 = false;
		const _sortSubcommands6ErdFE = undefined;
		const _subcommandTermtvlVVt = undefined;
		const _helperBZcw17d = {
			"sortSubcommands": _sortSubcommands6ErdFE,
		"subcommandTerm": _subcommandTermtvlVVt
	}
		const _returnValuefj7c68J = await _HelpL9yT2V.longestSubcommandTermLength(_cmdlE9Qu7, _helperBZcw17d)
		const _optionshjuXUAh = {
		
	}
		const __hasHelpOptionckyjkgh = 9.03120222006067;
		const __helpShortFlagp5hO9Yi = "OuClPxH4Xsyobh0OiEmMKZtVmbsscJxcL19";
		const _arrayValuexpoLUcC = undefined;
		const _returnValueUftQ7ko = [_arrayValuexpoLUcC]
		const __findOptiongcaugSW = () => { return _returnValueUftQ7ko };
		const __helpLongFlagvXauS9m = true;
		const _returnValueBB8beWC = null;
		const _returnValueIO9UbAF = () => { return _returnValueBB8beWC };
		const _createOptionHYqLbI = () => { return _returnValueIO9UbAF };
		const __helpDescriptionMtNqeYy = {
		
	}
		const __helpFlagsM9NDdOx = false;
		const _cmdI4pTGlE = {
			"options": _optionshjuXUAh,
		"_hasHelpOption": __hasHelpOptionckyjkgh,
		"_helpShortFlag": __helpShortFlagp5hO9Yi,
		"_findOption": __findOptiongcaugSW,
		"_helpLongFlag": __helpLongFlagvXauS9m,
		"createOption": _createOptionHYqLbI,
		"_helpDescription": __helpDescriptionMtNqeYy,
		"_helpFlags": __helpFlagsM9NDdOx
	}
		const _returnValueldtYEm = await _HelpL9yT2V.visibleOptions(_cmdI4pTGlE)
		const _arrayValueOcamirW = -0.7832101098886675;
		const _arrayValuedjns31U = true;
		const _arrayValuesQtyQes = false;
		const _arrayValueIImOzia = [_arrayValuedjns31U, _arrayValuesQtyQes]
		const _arrayValuejulal4w = "EQDzGdTRsQsbuh8xSMj4WSCy";
		const _flagsV948Xil = [_arrayValueOcamirW, _arrayValueIImOzia, _arrayValuejulal4w]
		const _returnValueQzB1ev0 = null;
		const _returnValueIqbFwHw = () => { return _returnValueQzB1ev0 };
		const _descriptionqRhFqbK = () => { return _returnValueIqbFwHw };
		const _cmdkTfeSim = new Option(_flagsV948Xil, _descriptionqRhFqbK)
		const _valueFZtag26 = -7.713655691641357;
		const _returnValueUKIQUds = 5.641610083751949;
		const _previousLv8UwCg = () => { return _returnValueUKIQUds };
		const _returnValuesJ9XL9R = await _cmdkTfeSim._concatValue(_valueFZtag26, _previousLv8UwCg)
		const _valuescZlzhLy = []
		const _returnValueJE31bm = await _cmdkTfeSim.choices(_valuescZlzhLy)
		const _namebw0pKK = undefined;
		const _returnValueCi3Dpov = await _cmdkTfeSim.env(_namebw0pKK)
		const _returnValueWXIMrZc = await _HelpL9yT2V.subcommandDescription(_cmdkTfeSim)
		const _cmdWILcdBX = true;
		const _helperbcubf2c = "YXqA6KEr0PpcudBSVgirAYB5243RMyrrHQyOODGq5AlNft5lqBpxv";
		const _returnValueH3HoMvn = await _HelpL9yT2V.longestOptionTermLength(_cmdWILcdBX, _helperbcubf2c)
	});

	it('test for Help', async () => {
		const _HelpMfyPU9V = new Help()
		const _arrayValuesO2JvbB = {
		
	}
		const _arrayValuef5i7v1l = -4.746224739768236;
		const _arrayValueCfQTOA = []
		const _arrayValueBBWokDW = null;
		const _optionI8mf8Wd = [_arrayValuesO2JvbB, _arrayValuef5i7v1l, _arrayValueCfQTOA, _arrayValueBBWokDW]
		const _returnValuehwrrrJg = await _HelpMfyPU9V.optionTerm(_optionI8mf8Wd)
		const _returnValuepPbiKf = false;
		const _optionvi746GX = () => { return _returnValuepPbiKf };
		const _returnValueAIuM9gz = await _HelpMfyPU9V.optionTerm(_optionvi746GX)
		const _returnValuewFdG6pS = "8PBhyw5AGhaX3mlWW9eOsiPTcwitzP12gSlFigNjlqzntdRzUoPT4y6Qh1QadTzyJu";
		const _strR0fDHF0 = () => { return _returnValuewFdG6pS };
		const _widthGkvzKb0 = -9.079951871376915;
		const _indentOwRcHNb = -8.26781159206188;
		const _minColumnWidthk9dgQ7 = 3.299990768566296;
		const _returnValuesIuP5fF = await _HelpMfyPU9V.wrap(_strR0fDHF0, _widthGkvzKb0, _indentOwRcHNb, _minColumnWidthk9dgQ7)
	});

	it('test for Help', async () => {
		const _HelpEEuQMCJ = new Help()
		const _cmdYtSDBNQ = {
		
	}
		const _longestOptionTermLengthLb9CndF = null;
		const _returnValueRSEfrK = true;
		const _longestSubcommandTermLengthTZDmHRs = () => { return _returnValueRSEfrK };
		const _returnValueJhrBXxJ = false;
		const _longestArgumentTermLengthwxLblr6 = () => { return _returnValueJhrBXxJ };
		const _helperon40HgW = {
			"longestOptionTermLength": _longestOptionTermLengthLb9CndF,
		"longestSubcommandTermLength": _longestSubcommandTermLengthTZDmHRs,
		"longestArgumentTermLength": _longestArgumentTermLengthwxLblr6
	}
		const _returnValueeLRJ6wB = await _HelpEEuQMCJ.padWidth(_cmdYtSDBNQ, _helperon40HgW)
		const _returnValuewIZybuJ = -0.8774772157458735;
		const _descriptionKi64Fsg = () => { return _returnValuewIZybuJ };
		const _cmds9PMJQq = {
			"description": _descriptionKi64Fsg
	}
		const _returnValueGP3IUWE = await _HelpEEuQMCJ.subcommandDescription(_cmds9PMJQq)
	});

	it('test for Help', async () => {
		const _HelpvdVsVYw = new Help()
		const _argChoicesRbNGMV5 = {
		
	}
		const _defaultValuefMufndX = undefined;
		const _defaultValueDescriptionp65JJjV = "mwiiDamUwkUcpTU7AlXY0ADkGz2VDapNjQJSIyu2tEYMmgsDpV7zr1EEskXBv1TETsGw";
		const _descriptionAs64uI4 = false;
		const _argumentURz6yAN = {
			"argChoices": _argChoicesRbNGMV5,
		"defaultValue": _defaultValuefMufndX,
		"defaultValueDescription": _defaultValueDescriptionp65JJjV,
		"description": _descriptionAs64uI4
	}
		const _returnValuec1tsqtk = await _HelpvdVsVYw.argumentDescription(_argumentURz6yAN)
		const _arrayValueO9ZGMgV = {
		
	}
		const _arrayValuegARwafz = false;
		const _arrayValuejsvrFk = null;
		const _nameFnorXWC = [_arrayValueO9ZGMgV, _arrayValuegARwafz, _arrayValuejsvrFk]
		const _descriptioni8TmCLA = undefined;
		const _cmdQ9OWsiG = new Argument(_nameFnorXWC, _descriptioni8TmCLA)
		const _fnTFVeocp = undefined;
		const _returnValueG0bL3QP = await _cmdQ9OWsiG.argParser(_fnTFVeocp)
		const _fnDv6uxGj = undefined;
		const _returnValueTM0Ilkz = await _cmdQ9OWsiG.argParser(_fnDv6uxGj)
		const _returnValueMXHL1aN = await _cmdQ9OWsiG.argRequired()
		const _fnlaeSMY = undefined;
		const _returnValueZQwp2Gk = await _cmdQ9OWsiG.argParser(_fnlaeSMY)
		const _returnValuerZQZ2nc = await _HelpvdVsVYw.subcommandDescription(_cmdQ9OWsiG)
		const _returnValueMCG0f4m = -4.184327399367738;
		const _descriptionlp59gyW = () => { return _returnValueMCG0f4m };
		const _cmdEIr0Qln = {
			"description": _descriptionlp59gyW
	}
		const _returnValueZS6YXVs = await _HelpvdVsVYw.subcommandDescription(_cmdEIr0Qln)
	});

	it('test for Help', async () => {
		const _HelpstXoFhU = new Help()
		const _returnValueSk5TQLm = null;
		const _nameA3rmGJ1 = () => { return _returnValueSk5TQLm };
		const _argumentxPh1KN8 = {
			"name": _nameA3rmGJ1
	}
		const _returnValuekOoaJL9 = await _HelpstXoFhU.argumentTerm(_argumentxPh1KN8)
		const _cmdjHPzm0E = -1.109156989777345;
		const _returnValueUJrHigV = null;
		const _arrayValueRgaRlvu = () => { return _returnValueUJrHigV };
		const _arrayValueqy7MGPn = null;
		const _arrayValuesPA4fMH = -6.678375564987412;
		const _sortSubcommandsGtyqyzK = [_arrayValueRgaRlvu, _arrayValueqy7MGPn, _arrayValuesPA4fMH]
		const _returnValueGRsTZy = true;
		const _subcommandTermMu09XMj = () => { return _returnValueGRsTZy };
		const _helper9B1Nm6 = {
			"sortSubcommands": _sortSubcommandsGtyqyzK,
		"subcommandTerm": _subcommandTermMu09XMj
	}
		const _returnValueHUQCRhc = await _HelpstXoFhU.longestSubcommandTermLength(_cmdjHPzm0E, _helper9B1Nm6)
	});

	it('test for Help', async () => {
		const _Helpma8VgRT = new Help()
		const _cmdRw3gvZv = "Qoav7xPHXHdGxjgeMthMRN1dz09iQvoIlfM1oDa1yNFhpERAgNldWpjEY1crMc1pZAxrGFOLqFqh3XrxJbN2xWW25";
		const _returnValueyJeldc6 = await _Helpma8VgRT.commandUsage(_cmdRw3gvZv)
	});

	it('test for Help', async () => {
		const _Helpe8o1qYm = new Help()
		const _returnValueGs4Utg = null;
		const _descriptioniztIfrQ = () => { return _returnValueGs4Utg };
		const _cmdg3950C1 = {
			"description": _descriptioniztIfrQ
	}
		const _returnValueu41lYdC = await _Helpe8o1qYm.subcommandDescription(_cmdg3950C1)
		const _returnValueJAfgrg9 = false;
		const _optionQ2OlpI = () => { return _returnValueJAfgrg9 };
		const _returnValuePvjZJn2 = await _Helpe8o1qYm.optionTerm(_optionQ2OlpI)
	});

	it('test for Help', async () => {
		const _HelplR3YBfG = new Help()
		const _flagsXMDb2CM = "g5HEUxAp1NATUEiSzCN9GpoqVFc2tmhRWekvkvlE6mgC3";
		const _descriptionXYbKs4q = "ki8PjU3E69zbHJKmw";
		const _argumentRAVONWu = new Option(_flagsXMDb2CM, _descriptionXYbKs4q)
		const _valuexMWSX0T = undefined;
		const _arrayValueksgJEe9 = "sajL7NtSsXEUUbPSAKFUyHXddsDZPnWDeyK83R84kYPplAasFJOVoTxb4CLjj4moJu4vTw8R";
		const _arrayValueNclQDdH = null;
		const _arrayValuezDhbh62 = undefined;
		const _previousELpCMx = [_arrayValueksgJEe9, _arrayValueNclQDdH, _arrayValuezDhbh62]
		const _returnValuefKeOIWu = await _argumentRAVONWu._concatValue(_valuexMWSX0T, _previousELpCMx)
		const _mandatoryymBex13 = "DozGkNMqXzaMQR7nktoBjMDDUpSUb";
		const _returnValueNMrqUXz = await _argumentRAVONWu.makeOptionMandatory(_mandatoryymBex13)
		const _valueld0q960 = "mfGdp88RsAP4glpOEixNTLtpARK54UG5Gn1GoqoJNyMRSzrE4XV6fJgzLhvqYweTkSbj";
		const _returnValuev7BXhOV = false;
		const _concatoakTeAY = () => { return _returnValuev7BXhOV };
		const _previousX3Lyxg1 = {
			"concat": _concatoakTeAY
	}
		const _returnValueEEH3ORM = await _argumentRAVONWu._concatValue(_valueld0q960, _previousX3Lyxg1)
		const _returnValueRmPT6wL = await _HelplR3YBfG.argumentTerm(_argumentRAVONWu)
		const _returnValueoY61cK2 = true;
		const _descriptionrrBi45U = () => { return _returnValueoY61cK2 };
		const _cmdreDzuq = {
			"description": _descriptionrrBi45U
	}
		const _returnValuePIJHiHC = await _HelplR3YBfG.subcommandDescription(_cmdreDzuq)
		const _returnValueh3FkIL2 = "aHirXDlJLTwFWC79u1VJPPMkp7rsYgNEnotaVX";
		const _cmdRmtCXq0 = () => { return _returnValueh3FkIL2 };
		const _returnValueON7E45h = undefined;
		const _helperOWoq3aR = () => { return _returnValueON7E45h };
		const _returnValuehXDxqU = await _HelplR3YBfG.padWidth(_cmdRmtCXq0, _helperOWoq3aR)
		const _arrayValuejTsSNA = undefined;
		const _arrayValueTmWnlA = undefined;
		const _returnValuegUPTr4U = [_arrayValuejTsSNA, _arrayValueTmWnlA]
		const _descriptionnPz0fQH = () => { return _returnValuegUPTr4U };
		const _cmdtG5jZ0S = {
			"description": _descriptionnPz0fQH
	}
		const _returnValueWp3XD3s = await _HelplR3YBfG.commandDescription(_cmdtG5jZ0S)
	});

	it('test for Help', async () => {
		const _Helpzi15P6h = new Help()
		const _flagsX4pkGQq = "DvUvlwpNBQLpLwJ5BtOgiDzdMNB3IpKkRgaN4uFTXqos";
		const _descriptionxHMQJl = undefined;
		const _optioniKGVGU9 = new Option(_flagsX4pkGQq, _descriptionxHMQJl)
		const _fnNgFZ5ih = undefined;
		const _returnValuefnrT6jU = await _optioniKGVGU9.argParser(_fnNgFZ5ih)
		const _nameNED5I4 = undefined;
		const _returnValueindbrVG = await _optioniKGVGU9.env(_nameNED5I4)
		const _returnValue2jHXBf = await _Helpzi15P6h.optionTerm(_optioniKGVGU9)
		const _cmdpjlyTGT = null;
		const _helperJpacudy = []
		const _returnValuedp0lwk = await _Helpzi15P6h.padWidth(_cmdpjlyTGT, _helperJpacudy)
		const _returnValueHAf9Cdu = true;
		const _descriptionHJ4KQbG = () => { return _returnValueHAf9Cdu };
		const _cmddIH9V2a = {
			"description": _descriptionHJ4KQbG
	}
		const _returnValuexd5gOA = await _Helpzi15P6h.subcommandDescription(_cmddIH9V2a)
	});

	it('test for Help', async () => {
		const _HelpMGpCtt6 = new Help()
		const __argsDescriptionKbn3RDW = {
		
	}
		const __argsqqOpXcN = {
		
	}
		const _cmdJT8nTwE = {
			"_argsDescription": __argsDescriptionKbn3RDW,
		"_args": __argsqqOpXcN
	}
		const _returnValueHJg37Cb = await _HelpMGpCtt6.visibleArguments(_cmdJT8nTwE)
		const _cmdbFlotcC = "k7nsPiOGqp4jHMYZhdzRsdoU6RPxaBSCobPEFDiDCcDv";
		const _helperyfnOSHa = "UOPdEVQe7nHYOmnTdtPJQds9ezLf7IIkMPBh76bjOkzs2w5QHerFwIjnA4nrTpTUWGErDU";
		const _returnValuerH7EZMi = await _HelpMGpCtt6.longestArgumentTermLength(_cmdbFlotcC, _helperyfnOSHa)
		const _returnValuezo7HZci = false;
		const _cmdQfHePo = () => { return _returnValuezo7HZci };
		const _arrayValuevqvocfg = "8II83Ort7gHawuitkHShg51XFAzifekoCN67mM98sq6qsRET7vnUkjYVNin";
		const _helpernVxIK7 = [_arrayValuevqvocfg]
		const _returnValueqU7vnLu = await _HelpMGpCtt6.formatHelp(_cmdQfHePo, _helpernVxIK7)
		const _cmdDrkXzRg = undefined;
		const _helperGN13xw = "m27WxkjyHLN4gY7MMUAvW8W1YAChkRd1rOLfGfF9Lbmyn9Mbg6Dc8SwavH9EGjVX6U5ribU93KnOIEG";
		const _returnValuetsguotk = await _HelpMGpCtt6.longestSubcommandTermLength(_cmdDrkXzRg, _helperGN13xw)
		const _arrayValueGs81VlS = "m9VS5vBjaQgxGeWeM0Fi0E6CcCiFSTX6i4SZm4MyAYqmWGkd7K9oVhWa";
		const _arrayValuesnPczIc = "5IcLsPRviEJOM0ptXkyuwtUzxNCsGbBAFMZdbEViJ1vk3531MEIysY";
		const _nameIqBIFSB = [_arrayValueGs81VlS, _arrayValuesnPczIc]
		const _cmdoxJd6N = new Command(_nameIqBIFSB)
		const _strbAKUGLG = undefined;
		const _returnValueOhwDCSV = await _cmdoxJd6N.usage(_strbAKUGLG)
		const _strH6nJErp = undefined;
		const _argsDescriptionpfTLMO = undefined;
		const _returnValueGPLnAe7 = await _cmdoxJd6N.description(_strH6nJErp, _argsDescriptionpfTLMO)
		const _nameAndArgsF4zHPWP = []
		const _actionOptsOrExecDescL4YjTuX = {
		
	}
		const _execOptsI9pzIzz = false;
		const _returnValuecZgGpXs = await _cmdoxJd6N.command(_nameAndArgsF4zHPWP, _actionOptsOrExecDescL4YjTuX, _execOptsI9pzIzz)
		const _returnValuepcyVxj = true;
		const _argvQbDKd8 = () => { return _returnValuepcyVxj };
		const _parseOptionsy1Ur4wn = "GBJTJqEscmFH8ngF9EYVdW9vgG";
		const _returnValueUtmfQn = await _cmdoxJd6N._prepareUserArgs(_argvQbDKd8, _parseOptionsy1Ur4wn)
		const _nameVaF84oY = undefined;
		const _cmdrG10boW = new Command(_nameVaF84oY)
		const _contextOptionsO7wK9m2 = null;
		const _returnValuem15H4Mj = await _cmdrG10boW.help(_contextOptionsO7wK9m2)
		const _errormgcvvK = null;
		const _commandBoISyih = undefined;
		const _contextOptionseahIqet = {
			"error": _errormgcvvK,
		"command": _commandBoISyih
	}
		const _returnValueeKRTtA = await _cmdrG10boW.help(_contextOptionseahIqet)
		const _returnValueKjYcHE3 = "ySIetuFOOCzp0KjhQQ0FWM7FtR1cz29L6itdgS1iWI1c7lVRTcfGFD1AWb5yPQV4";
		const _includescc8OmHK = () => { return _returnValueKjYcHE3 };
		const _flagsDpLIGr1 = {
			"includes": _includescc8OmHK
	}
		const _descriptionLgetHgF = 2.1737362393084645;
		const _argumentyTBZPsf = new Option(_flagsDpLIGr1, _descriptionLgetHgF)
		const _returnValueeXDOje4 = "WPUguJwz1XpvcNlbw1qyyu1vdfumTv3yXVpRD906HB3i5UqrBSsp18Yt5U8E13JNQyhUs4bgsOnEPh";
		const _arrayValue5TAPsQ = () => { return _returnValueeXDOje4 };
		const _returnValueuLBavcV = {
		
	}
		const _arrayValuetuAdmDN = () => { return _returnValueuLBavcV };
		const _arrayValuecds1kk8 = [_arrayValue5TAPsQ, _arrayValuetuAdmDN]
		const _arrayValueBLNVfRV = null;
		const _arrayValueYuf7MX9 = [_arrayValuecds1kk8, _arrayValueBLNVfRV]
		const _valuesJO8Wfxm = [_arrayValueYuf7MX9]
		const _returnValuegL6SxA = await _argumentyTBZPsf.choices(_valuesJO8Wfxm)
		const _returnValueMxD9ApD = await _argumentyTBZPsf.attributeName()
		const _returnValueUBLCsGt = await _cmdrG10boW.addArgument(_argumentyTBZPsf)
		const _returnValueHjFRD8z = await _cmdrG10boW._parseOptionsEnv()
		const _isDefault5kRpYx = "6l9kw5lv828j3s2hVrrjJRXL3DVsFg52HgtuITGsKIPrTC4Ej6HlNQXWq1ThVvHaN67OYT0otS8V";
		const _optsjUXZnyv = {
			"isDefault": _isDefault5kRpYx
	}
		const _returnValueYOiMle8 = await _cmdoxJd6N.addCommand(_cmdrG10boW, _optsjUXZnyv)
		const _returnValueMSQjHzU = await _HelpMGpCtt6.subcommandDescription(_cmdoxJd6N)
	});

	it('test for Help', async () => {
		const _HelpoO7uzCa = new Help()
		const _argChoicesvN4B8T3 = {
		
	}
		const _negateIbCZxB = null;
		const _defaultValueyDen7rI = undefined;
		const _defaultValueDescriptionFmTQwD5 = true;
		const _envVarWS1o7uV = undefined;
		const _descriptionGUGSq4 = {
		
	}
		const _optiondfEq4es = {
			"argChoices": _argChoicesvN4B8T3,
		"negate": _negateIbCZxB,
		"defaultValue": _defaultValueyDen7rI,
		"defaultValueDescription": _defaultValueDescriptionFmTQwD5,
		"envVar": _envVarWS1o7uV,
		"description": _descriptionGUGSq4
	}
		const _returnValuemlpRHw5 = await _HelpoO7uzCa.optionDescription(_optiondfEq4es)
		const _cmduNiPs1l = "64UHnMLkto98T6lc1RO2EuLGt6scOwlAREUYwJuKRnJXwyQecTR9q2NvpxbKFWfTqbyHsbJJiZYoqCW7zXytoq5J1X";
		const _returnValueIhDTlKT = await _HelpoO7uzCa.visibleOptions(_cmduNiPs1l)
		const _cmdSFTujsA = undefined;
		const _helperjG3W0h = undefined;
		const _returnValueAZOmWze = await _HelpoO7uzCa.longestArgumentTermLength(_cmdSFTujsA, _helperjG3W0h)
	});

	it('test for Help', async () => {
		const _HelpTOcuHRe = new Help()
		const _arrayValuetszbcu4 = false;
		const _argumentvs6ZCxI = [_arrayValuetszbcu4]
		const _returnValue9KAWHG = await _HelpTOcuHRe.argumentDescription(_argumentvs6ZCxI)
		const _returnValuex6aJ44m = "smGUznJ";
		const _arrayValuemMXHKjM = () => { return _returnValuex6aJ44m };
		const _arrayValueCQ0ck3 = "4JtsONUkey6qOuQVQ6z4bRS3bCIsPVrlmilTY9LXbUWyQCfQ4byzjJ7gq3kRooX3V8iB0GQSbXYKtUyczEH";
		const _cmdHrCLx4 = [_arrayValuemMXHKjM, _arrayValueCQ0ck3]
		const _returnValuesec87sS = await _HelpTOcuHRe.visibleCommands(_cmdHrCLx4)
		const _returnValueXhfVWuy = true;
		const _cmdbaHkTK6 = () => { return _returnValueXhfVWuy };
		const _helperDjdbx15 = "b2BVDVSmf2ZBhH6LESS5ArV6MlBnokRHdVhT";
		const _returnValueiFNZjXz = await _HelpTOcuHRe.longestOptionTermLength(_cmdbaHkTK6, _helperDjdbx15)
		const _cmddgediko = "Sg85R2u7ZKEBgHs8yiVmuD2nGdiLY2RUzUbAtzVgfMDlBQxeRRrPtMnVs1jVMJHWf8540wEZPsqAAI0FQMJH9s";
		const _returnValueI9SW3z3 = await _HelpTOcuHRe.visibleCommands(_cmddgediko)
		const _returnValueQJC44XP = {
		
	}
		const _optionBdknZ1 = () => { return _returnValueQJC44XP };
		const _returnValuelIXa7wo = await _HelpTOcuHRe.optionDescription(_optionBdknZ1)
	});

	it('test for Help', async () => {
		const _Helpywo3CPC = new Help()
		const _argumentUxM2PJf = "934crNiX1XFf83mP1XSnZhYY1ZNX";
		const _returnValuesyNqt0 = await _Helpywo3CPC.argumentDescription(_argumentUxM2PJf)
		const _cmdYcWIcSR = "71Rp5LqF7FPXkYN8yadCfnNb3zko6L2GVvAYTEkcdpMcVCnwkwD1rd0yAhXGTHWJ6wSVcN6ksVGBftPgbrXd1Ln";
		const _returnValuet8mIKY0 = await _Helpywo3CPC.commandDescription(_cmdYcWIcSR)
		const _optionkTc9Cqg = "9lbgoiOseDn0x7iglzurlmd67k6w2kCRj";
		const _returnValueJj4nPG = await _Helpywo3CPC.optionTerm(_optionkTc9Cqg)
		const _cmdpivWbpo = undefined;
		const _arrayValueB3ooB2K = null;
		const _helperqPhQJoX = [_arrayValueB3ooB2K]
		const _returnValueESQID5m = await _Helpywo3CPC.formatHelp(_cmdpivWbpo, _helperqPhQJoX)
	});

	it('test for Help', async () => {
		const _HelpGqouBlb = new Help()
		const _argumentlnfq0si = "XsNEgy30BQAPVwNYQJs8fVaEV9SSRodfitE8QOme";
		const _returnValuevMlr3Wr = await _HelpGqouBlb.argumentDescription(_argumentlnfq0si)
		const _argumentXNAE8Yl = []
		const _returnValueNgF0Myg = await _HelpGqouBlb.argumentDescription(_argumentXNAE8Yl)
		const _returnValueZ9TAg0m = undefined;
		const _sliceCTm2As = () => { return _returnValueZ9TAg0m };
		const _nameNgQ0siI = {
			"slice": _sliceCTm2As
	}
		const _arrayValuekR68lC2 = undefined;
		const _arrayValueKvY1XHc = [_arrayValuekR68lC2]
		const _arrayValuez6xWv7U = false;
		const _returnValueWYfFdRM = [_arrayValuez6xWv7U]
		const _arrayValuer0p8gdE = () => { return _returnValueWYfFdRM };
		const _arrayValuelyiB1ZW = "5uguvl02";
		const _descriptionas0znQe = [_arrayValueKvY1XHc, _arrayValuer0p8gdE, _arrayValuelyiB1ZW]
		const _optionYXJsCai = new Argument(_nameNgQ0siI, _descriptionas0znQe)
		const _returnValueOfteYDh = await _optionYXJsCai.argOptional()
		const _arrayValueAVbFSE0 = "hVuFOJRaKPazTpJj5l6WY45uMvy4CORGKrtmwATpEZw1ikJOvlYHlvkLGzVKmmFWm8lp28sBuVfPjypTD6hjAmVj";
		const _valuesM3HR3w1 = [_arrayValueAVbFSE0]
		const _returnValueDnnMEl3 = await _optionYXJsCai.choices(_valuesM3HR3w1)
		const _returnValueBEpTzsM = await _optionYXJsCai.argRequired()
		const _returnValueg7vRmP = await _optionYXJsCai.argRequired()
		const _returnValuehCi6Bvs = await _HelpGqouBlb.optionDescription(_optionYXJsCai)
		const _cmdXGiJb7 = undefined;
		const _helperRYRrCqN = new Help()
		const _arrayValueYzG7dsU = undefined;
		const _arrayValuegx7WY7g = 3.519409284988571;
		const _flagsv6POgBO = [_arrayValueYzG7dsU, _arrayValuegx7WY7g]
		const _descriptioncVNpQQL = {
		
	}
		const _cmdwAaugHk = new Option(_flagsv6POgBO, _descriptioncVNpQQL)
		const _mandatoryyMeAl0I = true;
		const _returnValueF5Iempb = await _cmdwAaugHk.makeOptionMandatory(_mandatoryyMeAl0I)
		const _hideTXFSfAo = true;
		const _returnValueHGmklkV = await _cmdwAaugHk.hideHelp(_hideTXFSfAo)
		const _returnValueNP8TJ70 = await _cmdwAaugHk.name()
		const _returnValueeVtwrF = await _helperRYRrCqN.commandDescription(_cmdwAaugHk)
		const _returnValuevJk7WMS = await _HelpGqouBlb.longestOptionTermLength(_cmdXGiJb7, _helperRYRrCqN)
	});

	it('test for Help', async () => {
		const _HelpvP1POkW = new Help()
		const _returnValueBHifGuH = null;
		const _cmdkZ2KYQT = () => { return _returnValueBHifGuH };
		const _helperwcghRlx = new Help()
		const _arrayValuepSsGFab = {
		
	}
		const _arrayValueG8Xhufl = null;
		const _arrayValueZLlhwq6 = undefined;
		const _nameyEcO9AD = [_arrayValuepSsGFab, _arrayValueG8Xhufl, _arrayValueZLlhwq6]
		const _cmdB3aEghf = new Command(_nameyEcO9AD)
		const _strjgRveXI = undefined;
		const _returnValuef6tAYw = await _cmdB3aEghf.usage(_strjgRveXI)
		const _returnValueydqoyez = await _cmdB3aEghf._checkForMissingMandatoryOptions()
		const _returnValueKvwGTOe = await _helperwcghRlx.visibleCommands(_cmdB3aEghf)
		const _cmdNJh4IQs = []
		const _helperm5Yi9u3 = new Help()
		const _cmdmOi8NLg = "HnM61QhJHreAbrrtdzfBzSaLqVlrMaVIHy4WfaGmOa8wV1fgDpB4";
		const _helperWdnjCRn = "DMAEw5G2amJr5RFxfqqaTZrKoAGpYJMXVkHSu9OXt3AMv8wDPxTFJFkD7";
		const _returnValuetMAEfQ = await _helperm5Yi9u3.padWidth(_cmdmOi8NLg, _helperWdnjCRn)
		const _returnValueruyvmv = "aSGNvhhofL2I8EZwHlf9hSZihAfwv45mWtobXPBczpjd3gNzylxguVXs1QtKEpNxjgmKtwGu21l5W6";
		const _slicext4T8ZO = () => { return _returnValueruyvmv };
		const _nameuL5KvS = {
			"slice": _slicext4T8ZO
	}
		const _arrayValueODXY5JV = "GuvXm3UH1TOCD2fsQTnFT1TzTmBbr";
		const _descriptionrIhj7yG = [_arrayValueODXY5JV]
		const _cmdnvLJaDi = new Argument(_nameuL5KvS, _descriptionrIhj7yG)
		const _fne8uCpgX = undefined;
		const _returnValueWA079oA = await _cmdnvLJaDi.argParser(_fne8uCpgX)
		const _fnGIjXBYN = undefined;
		const _returnValueTS7P4OA = await _cmdnvLJaDi.argParser(_fnGIjXBYN)
		const _valuesTYmSgvd = "4mPmJ";
		const _returnValuemLNFJi = await _cmdnvLJaDi.choices(_valuesTYmSgvd)
		const _returnValuejNgQy2 = await _helperm5Yi9u3.subcommandDescription(_cmdnvLJaDi)
		const _returnValueYRQEvKE = await _helperwcghRlx.longestArgumentTermLength(_cmdNJh4IQs, _helperm5Yi9u3)
		const _cmdV3TrkIj = {
		
	}
		const _arrayValuezGjFsLW = undefined;
		const _arrayValueBtJoCEa = null;
		const _helperOdQ2qCJ = [_arrayValuezGjFsLW, _arrayValueBtJoCEa]
		const _returnValueylqbtHB = await _helperwcghRlx.formatHelp(_cmdV3TrkIj, _helperOdQ2qCJ)
		const _returnValueCYxNAoZ = await _HelpvP1POkW.longestOptionTermLength(_cmdkZ2KYQT, _helperwcghRlx)
	});

	it('test for Help', async () => {
		const _HelpBzffZpV = new Help()
		const _cmdFMFvw0W = -4.649767826256221;
		const _helperXncQtjV = new Help()
		const _namezzdBGBY = undefined;
		const _cmdkcgCWcx = new Command(_namezzdBGBY)
		const _passThroughncv0dk = true;
		const _returnValuePLX3hjW = await _cmdkcgCWcx.passThroughOptions(_passThroughncv0dk)
		const _arrayValueoK5ewo7 = false;
		const _arrayValuepaUhmx0 = 0.49330982832650605;
		const _errorFjADmvo = [_arrayValueoK5ewo7, _arrayValuepaUhmx0]
		const _commandZoAKcNh = false;
		const _contextOptionsWEqYWAx = {
			"error": _errorFjADmvo,
		"command": _commandZoAKcNh
	}
		const _returnValueV9NxwpP = await _cmdkcgCWcx._getHelpContext(_contextOptionsWEqYWAx)
		const _returnValuexFT0JJp = await _helperXncQtjV.subcommandTerm(_cmdkcgCWcx)
		const _cmdW9WOV2i = {
		
	}
		const _helperAxz5EmF = "EysbKkqvUC2n5VcKmQyO3dOo9uFbR4DFLCldnpZynYknqaTF";
		const _returnValuem5Ie9Q = await _helperXncQtjV.formatHelp(_cmdW9WOV2i, _helperAxz5EmF)
		const _cmdpyHSPzo = "qxSZef5fIyQWqQbbd8FUwJrUuB13UOQ5CHAnMxPSTPnhXAVb4YYtqa9minq7zo8tc4Ks5AgDI79AE7bYo";
		const _visibleArguments1EUcOo = false;
		const _argumentTermJ36w712 = "X";
		const _helperIwfdezS = {
			"visibleArguments": _visibleArguments1EUcOo,
		"argumentTerm": _argumentTermJ36w712
	}
		const _returnValueoyWmXgf = await _helperXncQtjV.longestArgumentTermLength(_cmdpyHSPzo, _helperIwfdezS)
		const _cmdm1PDB8y = 0.854091664197707;
		const _returnValueyk2502 = undefined;
		const _visibleArgumentsFvqmI11 = () => { return _returnValueyk2502 };
		const _returnValueRH4USh3 = -0.36390130025397127;
		const _argumentTermiXWedcR = () => { return _returnValueRH4USh3 };
		const _helper7hpSjP = {
			"visibleArguments": _visibleArgumentsFvqmI11,
		"argumentTerm": _argumentTermiXWedcR
	}
		const _returnValueq3FNcqD = await _helperXncQtjV.longestArgumentTermLength(_cmdm1PDB8y, _helper7hpSjP)
		const _returnValueJvLYwH7 = await _HelpBzffZpV.longestSubcommandTermLength(_cmdFMFvw0W, _helperXncQtjV)
		const _cmdthp2uGS = "nSeeI69E25CGpxtY7d6698u4AQpdEOp2XIKmO1fvgt";
		const _arrayValueUz7rdqr = false;
		const _arrayValueBjhM7SZ = "QBsn5ayZ3QtmG187SmlxhkRd1klEZb9okf4Jmi1GLb4I1zoej6w7KWkG4S1NAs";
		const _arrayValueOA50ZFF = null;
		const _arrayValuevzZuu9T = false;
		const _arrayValuepvDceZz = [_arrayValueUz7rdqr, _arrayValueBjhM7SZ, _arrayValueOA50ZFF, _arrayValuevzZuu9T]
		const _arrayValueYsguASS = -2.7029454616103123;
		const _helperSp88TRE = [_arrayValuepvDceZz, _arrayValueYsguASS]
		const _returnValuedXKTYhc = await _HelpBzffZpV.longestOptionTermLength(_cmdthp2uGS, _helperSp88TRE)
		const _arrayValueAEQfIYt = "OSJHwGK25rQFeivaXmIKrVsUf2trFG2JHasp3diW82Q1XgJJb";
		const _arrayValueXOZoYXM = undefined;
		const _arrayValueEvBZ6yD = null;
		const _arrayValueBvLXRUE = null;
		const _arrayValuebIBtAzN = false;
		const _arrayValuev2hxIDB = [_arrayValueEvBZ6yD, _arrayValueBvLXRUE, _arrayValuebIBtAzN]
		const _arrayValueieb7S4y = "owZ12eP0nhELokukTnikD2uLQA56EPN4xNsG4xXvkD4dYQqbe8";
		const _cmdyN2A8cp = [_arrayValueAEQfIYt, _arrayValueXOZoYXM, _arrayValuev2hxIDB, _arrayValueieb7S4y]
		const _returnValuegIwo7mB = await _HelpBzffZpV.subcommandTerm(_cmdyN2A8cp)
		const _cmdG2nAbzT = false;
		const _returnValueNffqYFV = {
		
	}
		const _visibleOptionsFJmDvBg = () => { return _returnValueNffqYFV };
		const _returnValueqA1kYsZ = null;
		const _optionTermwKnHlcj = () => { return _returnValueqA1kYsZ };
		const _helperdULylF1 = {
			"visibleOptions": _visibleOptionsFJmDvBg,
		"optionTerm": _optionTermwKnHlcj
	}
		const _returnValueQRouZN = await _HelpBzffZpV.longestOptionTermLength(_cmdG2nAbzT, _helperdULylF1)
	});

	it('test for Help', async () => {
		const _HelpocO2blx = new Help()
		const _returnValuekTOMWRB = {
		
	}
		const _descriptionrbqHM1g = () => { return _returnValuekTOMWRB };
		const _cmdKmqcavk = {
			"description": _descriptionrbqHM1g
	}
		const _returnValue1Bxjkx = await _HelpocO2blx.commandDescription(_cmdKmqcavk)
		const _returnValueoj8rSUh = true;
		const _matchZ9NzeID = () => { return _returnValueoj8rSUh };
		const _returnValuewMyInb2 = 7.875368134815474;
		const _substrl85cwB9 = () => { return _returnValuewMyInb2 };
		const _strAvrwQzg = {
			"match": _matchZ9NzeID,
		"substr": _substrl85cwB9
	}
		const _widthNOWXjOm = 8.76923406706161;
		const _indentG5uoppf = -1.2899834947357611;
		const _minColumnWidthjgCq0fO = 1.694653674277145;
		const _returnValueCagNaSs = await _HelpocO2blx.wrap(_strAvrwQzg, _widthNOWXjOm, _indentG5uoppf, _minColumnWidthjgCq0fO)
	});

	it('test for Help', async () => {
		const _HelpJAjWBXF = new Help()
		const _strkRhZf0Q = "";
		const _widthbpwExkP = 4.013147237631266;
		const _indentFlgLwNX = 5.4578699103539225;
		const _minColumnWidthJuJGKe = 6.409175894688609;
		const _returnValueG0Ou5kU = await _HelpJAjWBXF.wrap(_strkRhZf0Q, _widthbpwExkP, _indentFlgLwNX, _minColumnWidthJuJGKe)
		const _cmdITRFSNr = false;
		const _helperObxC1xU = -6.810657654375531;
		const _returnValueRnftQAX = await _HelpJAjWBXF.formatHelp(_cmdITRFSNr, _helperObxC1xU)
	});

	it('test for Help', async () => {
		const _Help635fO6 = new Help()
		const _returnValueSkOLNhc = null;
		const _arrayValueqxHlnax = () => { return _returnValueSkOLNhc };
		const _arrayValuezGz0Nli = -5.99583164262539;
		const _arrayValueYsHVnVt = [_arrayValueqxHlnax, _arrayValuezGz0Nli]
		const _returnValueMJT572l = -4.280151080323485;
		const _arrayValueyZD3ZC0 = () => { return _returnValueMJT572l };
		const _cmdulAo1Nx = [_arrayValueYsHVnVt, _arrayValueyZD3ZC0]
		const _helperDjQqeOo = new Help()
		const _returnValueQg9rAeA = -9.603186663150698;
		const _descriptionVfEbTFQ = () => { return _returnValueQg9rAeA };
		const _cmdPqwwiD4 = {
			"description": _descriptionVfEbTFQ
	}
		const _returnValuesnosrgJ = await _helperDjQqeOo.commandDescription(_cmdPqwwiD4)
		const _strSzaQ8CH = "NdyIGJVtUVvTzExuRKhwghslAFOU";
		const _widthaOLlzu = undefined;
		const _indentfrKhZkG = 9.148880084347041;
		const _minColumnWidthVSbvtjp = -9.116483030868404;
		const _returnValuewgqiGro = await _helperDjQqeOo.wrap(_strSzaQ8CH, _widthaOLlzu, _indentfrKhZkG, _minColumnWidthVSbvtjp)
		const _optionfNmvC95 = true;
		const _returnValuep4t63v8 = await _helperDjQqeOo.optionDescription(_optionfNmvC95)
		const _cmdxXTIcJ = null;
		const _helperLm4hh5a = new Help()
		const _cmdp8RxaJN = "i6";
		const _returnValuefJQMurI = await _helperLm4hh5a.visibleArguments(_cmdp8RxaJN)
		const _cmdWkkA39 = undefined;
		const _arrayValuexgt7MG = "qw8kthCgCXgPf8BTzn";
		const _arrayValueE0Rno1L = {
		
	}
		const _arrayValueha705b2 = [_arrayValueE0Rno1L]
		const _helperziqKo11 = [_arrayValuexgt7MG, _arrayValueha705b2]
		const _returnValuezSik1N1 = await _helperLm4hh5a.longestSubcommandTermLength(_cmdWkkA39, _helperziqKo11)
		const _returnValueydiStw6 = 5.750700959320534;
		const _descriptiontwyG4a = () => { return _returnValueydiStw6 };
		const _cmduqlLiV5 = {
			"description": _descriptiontwyG4a
	}
		const _returnValueTq6XIq = await _helperLm4hh5a.subcommandDescription(_cmduqlLiV5)
		const _cmdkmlV40V = "PnMb87Qfkadm1mt1Jf2eGNU15axzQ4bek6O40oP9SJn5ONA7sOkKh";
		const _returnValueWljz2Ch = await _helperLm4hh5a.commandUsage(_cmdkmlV40V)
		const _returnValuewut4wbC = await _helperDjQqeOo.longestOptionTermLength(_cmdxXTIcJ, _helperLm4hh5a)
		const _returnValuecZYjfjK = await _Help635fO6.padWidth(_cmdulAo1Nx, _helperDjQqeOo)
	});

	it('test for Help', async () => {
		const _HelphnQEF3B = new Help()
		const _flagsL6subKu = null;
		const _optionIefeAM = {
			"flags": _flagsL6subKu
	}
		const _returnValueNT7WbjV = await _HelphnQEF3B.optionTerm(_optionIefeAM)
		const _flagsTfZcl48 = "RO4v9gHIJm3vEkktu654AfSqJKKHni4MejNHionMhiQPKdHJiV";
		const _arrayValuetGnLZM = true;
		const _descriptionzRCPNvQ = [_arrayValuetGnLZM]
		const _optionhfdn2nM = new Option(_flagsTfZcl48, _descriptionzRCPNvQ)
		const _hidekCmgBCt = true;
		const _returnValuejZtjmjW = await _optionhfdn2nM.hideHelp(_hidekCmgBCt)
		const _namefEm0mzm = "S2Kq";
		const _returnValueBCU3ljd = await _optionhfdn2nM.env(_namefEm0mzm)
		const _valuedAq2ohR = undefined;
		const _descriptionSCYxU1i = undefined;
		const _returnValueyRv7Ssd = await _optionhfdn2nM.default(_valuedAq2ohR, _descriptionSCYxU1i)
		const _namesKTE8uD = {
		
	}
		const _returnValuevZPmLwL = await _optionhfdn2nM.env(_namesKTE8uD)
		const _returnValueEvrLMoi = await _HelphnQEF3B.optionDescription(_optionhfdn2nM)
	});

	it('test for Help', async () => {
		const _Helpgu95rcg = new Help()
		const _cmdgoS3DHb = -1.7981458920524958;
		const _helperzrUk7qo = new Help()
		const _nameAhO47SM = "XBoJAING1wpbqeF8ocX121BhnmhREo";
		const _descriptionamOfI00 = 3.171142779355767;
		const _optionScFc3xL = new Argument(_nameAhO47SM, _descriptionamOfI00)
		const _valueONwqvc = {
		
	}
		const _descriptionCgzFZTw = undefined;
		const _returnValueVqCKedg = await _optionScFc3xL.default(_valueONwqvc, _descriptionCgzFZTw)
		const _returnValue41EcuU = await _optionScFc3xL.argRequired()
		const _returnValuecbo5g5d = await _helperzrUk7qo.optionDescription(_optionScFc3xL)
		const _cmdeZsb5ox = []
		const _returnValueMoO29OS = "F2VJOOphQUQY29OjZ2mgpFXTBncVLerb9piLvpXfLoCkIfh";
		const _visibleOptionshnxzWJe = () => { return _returnValueMoO29OS };
		const _returnValueCpGELsl = "41cNJHQ1TrhNEjl";
		const _optionTermjy3nMcE = () => { return _returnValueCpGELsl };
		const _helperwGA06Ol = {
			"visibleOptions": _visibleOptionshnxzWJe,
		"optionTerm": _optionTermjy3nMcE
	}
		const _returnValueRsr277s = await _helperzrUk7qo.longestOptionTermLength(_cmdeZsb5ox, _helperwGA06Ol)
		const _returnValueGtZyGPc = await _Helpgu95rcg.longestSubcommandTermLength(_cmdgoS3DHb, _helperzrUk7qo)
		const _cmdRV0LjoK = undefined;
		const _arrayValuePFmMjRi = -4.102203638055796;
		const _helperV6DRzTv = [_arrayValuePFmMjRi]
		const _returnValueF0fZxTg = await _Helpgu95rcg.longestArgumentTermLength(_cmdRV0LjoK, _helperV6DRzTv)
		const _argumentKXcet6D = "ymJj4IKWEwCYu8MeRttXCFtgow11DS8vD9j50Admf9Nrnz3bNKS";
		const _returnValueGbLDwcd = await _Helpgu95rcg.argumentDescription(_argumentKXcet6D)
		const _cmdXeVbAfu = "nLvN51hBKlSNIB2A3KiEKSQCgPjmjUPhfvWDlk1j87dc2Wgkexjfd";
		const _returnValueQVwKhpD = await _Helpgu95rcg.commandUsage(_cmdXeVbAfu)
		const _cmdqHR1SXd = null;
		const _helperpyr5pmQ = new Help()
		const _arrayValueWG8dlMy = false;
		const _cmdHX0MxMt = [_arrayValueWG8dlMy]
		const _returnValueLDiMXoR = await _helperpyr5pmQ.subcommandTerm(_cmdHX0MxMt)
		const _arrayValueK4yyACY = undefined;
		const _cmdeFCv6YY = [_arrayValueK4yyACY]
		const _returnValueLoNmjw1 = await _helperpyr5pmQ.visibleOptions(_cmdeFCv6YY)
		const _returnValuempY1gLB = undefined;
		const _cmda5EBf8g = () => { return _returnValuempY1gLB };
		const _returnValuelql0ww1 = await _helperpyr5pmQ.subcommandTerm(_cmda5EBf8g)
		const _returnValuesIwJHyC = await _Helpgu95rcg.longestSubcommandTermLength(_cmdqHR1SXd, _helperpyr5pmQ)
	});

	it('test for Help', async () => {
		const _HelpN72mqTz = new Help()
		const _returnValueGffBmwo = undefined;
		const _argumentEwDsqv = () => { return _returnValueGffBmwo };
		const _returnValueX1D8Gl = await _HelpN72mqTz.argumentDescription(_argumentEwDsqv)
		const _returnValueVfGaSMW = undefined;
		const _name6li45K = () => { return _returnValueVfGaSMW };
		const _cmddIXfynI = new Command(_name6li45K)
		const _allowExcesskwmACLJ = false;
		const _returnValuecvLXsH6 = await _cmddIXfynI.allowExcessArguments(_allowExcesskwmACLJ)
		const _returnValueusfogL0 = undefined;
		const _splitf6PKC1t = () => { return _returnValueusfogL0 };
		const _enableOrNameAndArgsbU4uEJt = {
			"split": _splitf6PKC1t
	}
		const _descriptionPWeNk8t = {
		
	}
		const _returnValuecz96y9 = await _cmddIXfynI.addHelpCommand(_enableOrNameAndArgsbU4uEJt, _descriptionPWeNk8t)
		const _keyXtwHyCT = undefined;
		const _valueruireW = undefined;
		const _sourceHQQqVYU = undefined;
		const _returnValuewwOSOUf = await _cmddIXfynI.setOptionValueWithSource(_keyXtwHyCT, _valueruireW, _sourceHQQqVYU)
		const _returnValueN47diCb = await _HelpN72mqTz.commandUsage(_cmddIXfynI)
		const _cmdqdW1eU0 = null;
		const _returnValuewgYdAuf = await _HelpN72mqTz.commandDescription(_cmdqdW1eU0)
	});

	it('test for Help', async () => {
		const _HelpbkAcEAN = new Help()
		const _flagsvoYOXxS = "1eOdM";
		const _descriptionvy3JSv = "cfzHBMcMnQUjFIraZtv4vpo";
		const _argumentIhUEGN = new Option(_flagsvoYOXxS, _descriptionvy3JSv)
		const _fnfJ6Ubx3 = null;
		const _returnValueFJYHqN9 = await _argumentIhUEGN.argParser(_fnfJ6Ubx3)
		const _mandatoryzdfcjHG = true;
		const _returnValuevXmuosk = await _argumentIhUEGN.makeOptionMandatory(_mandatoryzdfcjHG)
		const _valuetMUmeD = false;
		const _returnValuekfZ9837 = true;
		const _concatyS5XKlc = () => { return _returnValuekfZ9837 };
		const _previous6cBQjC = {
			"concat": _concatyS5XKlc
	}
		const _returnValuebYYPi1j = await _argumentIhUEGN._concatValue(_valuetMUmeD, _previous6cBQjC)
		const _mandatoryzOdin2q = true;
		const _returnValueFcG4f1p = await _argumentIhUEGN.makeOptionMandatory(_mandatoryzOdin2q)
		const _mandatoryNiL4izT = true;
		const _returnValuet2R5CIB = await _argumentIhUEGN.makeOptionMandatory(_mandatoryNiL4izT)
		const _returnValueAQNsKuw = await _HelpbkAcEAN.argumentDescription(_argumentIhUEGN)
		const _namepBfiWzG = "PsSVu6O6UKRYibbREBtc";
		const _cmdRFh0Ewp = new Command(_namepBfiWzG)
		const _arrayValueCBWr184 = "A";
		const _arrayValueAhCbzNg = false;
		const _subcommandnDbJc80 = [_arrayValueCBWr184, _arrayValueAhCbzNg]
		const _argscHVbru = {
		
	}
		const _returnValuelv3Bvc = await _cmdRFh0Ewp._executeSubCommand(_subcommandnDbJc80, _argscHVbru)
		const _allowExcessyJmZUEY = false;
		const _returnValueCHxJFHd = await _cmdRFh0Ewp.allowExcessArguments(_allowExcessyJmZUEY)
		const _configurationFYPXi0 = undefined;
		const _returnValueEKLCdLJ = await _cmdRFh0Ewp.configureOutput(_configurationFYPXi0)
		const _positional3uQRCp = false;
		const _returnValuej6xCv16 = await _cmdRFh0Ewp.enablePositionalOptions(_positional3uQRCp)
		const _returnValueHyMZlES = await _HelpbkAcEAN.visibleOptions(_cmdRFh0Ewp)
		const _optiontAkeuJ9 = undefined;
		const _returnValuewLaQyK = await _HelpbkAcEAN.optionDescription(_optiontAkeuJ9)
	});

	it('test for Help', async () => {
		const _HelpV5Xnmux = new Help()
		const _flagsfQxTOQ = null;
		const _optionOlsrpcG = {
			"flags": _flagsfQxTOQ
	}
		const _returnValueRWIkqnd = await _HelpV5Xnmux.optionTerm(_optionOlsrpcG)
		const _returnValuelEGq6AS = undefined;
		const _namen1wueP9 = () => { return _returnValuelEGq6AS };
		const _cmdATiiceF = new Command(_namen1wueP9)
		const _enableOrNameAndArgsljpbJUr = true;
		const _descriptiongCX944H = null;
		const _returnValueBRQ9zYY = await _cmdATiiceF.addHelpCommand(_enableOrNameAndArgsljpbJUr, _descriptiongCX944H)
		const _arrayValueAompyg6 = false;
		const _arrayValueRXkSgE = "R9lOmyNQteRi2b63Is5UpADmLLidr10w5RBnK1evl0PCpW";
		const _fnCeyv4n9 = [_arrayValueAompyg6, _arrayValueRXkSgE]
		const _returnValueGnH4MJ = await _cmdATiiceF.exitOverride(_fnCeyv4n9)
		const _returnValuekfqDZ27 = await _HelpV5Xnmux.visibleCommands(_cmdATiiceF)
	});

	it('test for Help', async () => {
		const _HelpRIr8HW7 = new Help()
		const _arrayValueB1jKIo = "oiXHhQrJfzq1D6pfl3MsoUoLMaLxbu2NH8lcjebLywEBXcb9xjgixakUwyinEyc8odb1ERj8EH7WFBj316KpS56LdxKnwIWUDKe";
		const _returnValueCMOjK3r = -7.564801065568213;
		const _returnValuexPNwmD = () => { return _returnValueCMOjK3r };
		const _returnValueWBSyqNf = () => { return _returnValuexPNwmD };
		const _arrayValuedrX9Jp3 = () => { return _returnValueWBSyqNf };
		const _returnValueQ8vWuOQ = {
		
	}
		const _returnValueqnpbWbv = () => { return _returnValueQ8vWuOQ };
		const _arrayValuecGwfj5q = () => { return _returnValueqnpbWbv };
		const _returnValueWNL8rRC = [_arrayValueB1jKIo, _arrayValuedrX9Jp3, _arrayValuecGwfj5q]
		const __nameMloRRLm = () => { return _returnValueWNL8rRC };
		const __aliaseszLlnOaz = -6.115618519532062;
		const _parentoQbQW8I = {
		
	}
		const _returnValue5QrTu2 = -7.6778088058658405;
		const _usagesxwBOro = () => { return _returnValue5QrTu2 };
		const _cmdP8zrG66 = {
			"_name": __nameMloRRLm,
		"_aliases": __aliaseszLlnOaz,
		"parent": _parentoQbQW8I,
		"usage": _usagesxwBOro
	}
		const _returnValueXJQgi3f = await _HelpRIr8HW7.commandUsage(_cmdP8zrG66)
		const _namenbCyE35 = {
		
	}
		const _argumentngdgJzH = new Command(_namenbCyE35)
		const _returnValuexWQDVeU = "wASrepOvWFZRAnvlDEXiUpz0B6hOV1R0XWLNde8E6LSu35jBj71FGiBulMsst8ozqppRlo8al8vQ";
		const _promisea6xtwP0 = () => { return _returnValuexWQDVeU };
		const _arrayValue2xy7F8 = true;
		const _arrayValueWMkhEak = 7.031105750670143;
		const _arrayValueHqulzaT = -8.754337782785756;
		const _returnValueguUnZd = [_arrayValue2xy7F8, _arrayValueWMkhEak, _arrayValueHqulzaT]
		const _fnSOnMopV = () => { return _returnValueguUnZd };
		const _returnValuezHQVuhC = await _argumentngdgJzH._chainOrCall(_promisea6xtwP0, _fnSOnMopV)
		const _argOgLFaZm = "ABRsL3kYwSqcNzVpayVgcMB5dM";
		const _returnValuerElkyeH = await _argumentngdgJzH._findOption(_argOgLFaZm)
		const _returnValuepewbAqb = await _HelpRIr8HW7.argumentDescription(_argumentngdgJzH)
		const _cmdUU4Ui0x = "I0f2dZW79jONpeoxQEVIdTvaQ5lvzhBnjZhAH1oO";
		const _returnValueAbW4Wu = await _HelpRIr8HW7.commandDescription(_cmdUU4Ui0x)
		const _returnValueG7UQ1AM = -0.984401266967641;
		const _optionKvjIHB = () => { return _returnValueG7UQ1AM };
		const _returnValueKBUKBcz = await _HelpRIr8HW7.optionTerm(_optionKvjIHB)
	});

	it('test for Help', async () => {
		const _Helpih3mwoT = new Help()
		const _flagsptqDIon = "riNyqluKbNcj2nbbCFBBJijSciLa4WeAcHg";
		const _descriptionqDRY6Pk = undefined;
		const _argumentfkXnmSC = new Option(_flagsptqDIon, _descriptionqDRY6Pk)
		const _hide86EoxN = true;
		const _returnValueH4NdEqy = await _argumentfkXnmSC.hideHelp(_hide86EoxN)
		const _returnValueXRLnqLe = await _argumentfkXnmSC.attributeName()
		const _valueu6g8qT1 = 6.933303158680708;
		const _previousTq88hyx = "ojko219P8Uc7X6rEWzJx3ZO5WxoOdlr4OBxu2W2edCkqig9Y8bXzzAI04hZmSqkc7TyfLJhvQkZivvR4g";
		const _returnValuebop8Xx = await _argumentfkXnmSC._concatValue(_valueu6g8qT1, _previousTq88hyx)
		const _arrayValueIvQ7NOK = 7.710391121673723;
		const _valuesQ5p3iny = [_arrayValueIvQ7NOK]
		const _returnValueiqFizBe = await _argumentfkXnmSC.choices(_valuesQ5p3iny)
		const _returnValueH44B51e = await _Helpih3mwoT.argumentDescription(_argumentfkXnmSC)
		const _cmdelQMkk0 = true;
		const _helperIjPDUEG = new Help()
		const _arrayValueIqeLfn = undefined;
		const _returnValuea8xvjv1 = 4.680874563431805;
		const _arrayValueLV1dNXd = () => { return _returnValuea8xvjv1 };
		const _arrayValueUlUUUWD = false;
		const _arrayValueNVodqKz = [_arrayValueLV1dNXd, _arrayValueUlUUUWD]
		const _cmdmIz9CxR = [_arrayValueIqeLfn, _arrayValueNVodqKz]
		const _returnValueDCqLbr = await _helperIjPDUEG.commandUsage(_cmdmIz9CxR)
		const _cmdZvjQPSc = false;
		const _returnValueE19n1V7 = true;
		const _helperfCDFtV = () => { return _returnValueE19n1V7 };
		const _returnValueDyHQmTQ = await _helperIjPDUEG.longestSubcommandTermLength(_cmdZvjQPSc, _helperfCDFtV)
		const _arrayValueX8DqLDv = -8.255949730813779;
		const _cmdCbjnDHb = [_arrayValueX8DqLDv]
		const _returnValueD63Ldsw = await _helperIjPDUEG.visibleCommands(_cmdCbjnDHb)
		const _returnValueRG1t0R3 = await _Helpih3mwoT.longestOptionTermLength(_cmdelQMkk0, _helperIjPDUEG)
	});

	it('test for Help', async () => {
		const _HelpzPnxBjN = new Help()
		const _returnValuelEv3Pr8 = null;
		const _arrayValueJ7gAO2V = () => { return _returnValuelEv3Pr8 };
		const _arrayValueObl3l5A = undefined;
		const _argChoicesR96i978 = [_arrayValueJ7gAO2V, _arrayValueObl3l5A]
		const _defaultValueOXC6ydn = undefined;
		const _defaultValueDescriptionj5kikDQ = true;
		const _arrayValueLwDSv29 = "POrzqpqFAOykuspR8QgIHCP5OHfpH5jmo2xI6RtvebrxWzH7AU8Q8tJi9UU7LJiXdedgtCYHlF8npOjATbbX8R1LbdoqKK1Ixc";
		const _arrayValueTBQaOX = undefined;
		const _arrayValuexIeyej = -0.3247050216962304;
		const _arrayValueBjzXxM = -9.223239748200745;
		const _arrayValueQUNxtM = true;
		const _arrayValueIzUKDon = [_arrayValuexIeyej, _arrayValueBjzXxM, _arrayValueQUNxtM]
		const _arrayValueyvHy24X = [_arrayValueLwDSv29, _arrayValueTBQaOX, _arrayValueIzUKDon]
		const _arrayValueWAgE8TQ = {
		
	}
		const _arrayValueeCcYosy = undefined;
		const _descriptioneV2LA2U = [_arrayValueyvHy24X, _arrayValueWAgE8TQ, _arrayValueeCcYosy]
		const _argumentJL1tWus = {
			"argChoices": _argChoicesR96i978,
		"defaultValue": _defaultValueOXC6ydn,
		"defaultValueDescription": _defaultValueDescriptionj5kikDQ,
		"description": _descriptioneV2LA2U
	}
		const _returnValueMvGnWzs = await _HelpzPnxBjN.argumentDescription(_argumentJL1tWus)
	});

	it('test for Help', async () => {
		const _HelpSG7RXvd = new Help()
		const __nameYQT5ats = {
		
	}
		const __aliasesSlqILJm = "dlEwICuf7FBtaLfDOMN1EgBxGyt15KAy0LHeBI5yhCBF5L574GhoKkdXh6nzfJ5CNAcujdU0EYaT5KIBcJDVzPUXKXN9oYm";
		const _arrayValueO39n2Ee = "PUissqTAmWXMzrfXbz6YLhvjWVtByqO5Q";
		const _arrayValuenHDaZFA = "XT29XefUKUKwn8AlUuSxiwqCHY4U";
		const _arrayValueCn8CHCX = null;
		const _arrayValueOcI90Pr = undefined;
		const _arrayValuekwO4mad = [_arrayValueCn8CHCX, _arrayValueOcI90Pr]
		const _parentJc6KnYc = [_arrayValueO39n2Ee, _arrayValuenHDaZFA, _arrayValuekwO4mad]
		const _returnValueJdK5X1a = true;
		const _usageazYCOBx = () => { return _returnValueJdK5X1a };
		const _cmdhRYzRVX = {
			"_name": __nameYQT5ats,
		"_aliases": __aliasesSlqILJm,
		"parent": _parentJc6KnYc,
		"usage": _usageazYCOBx
	}
		const _returnValueXxnMzVy = await _HelpSG7RXvd.commandUsage(_cmdhRYzRVX)
		const _cmdib1vQEy = null;
		const _returnValuelyPHjZ9 = null;
		const _longestOptionTermLengthMfraVQn = () => { return _returnValuelyPHjZ9 };
		const _arrayValueYCX4XhL = null;
		const _arrayValueiSTSrAy = [_arrayValueYCX4XhL]
		const _arrayValueNQgDLKz = undefined;
		const _returnValuefJOMSEM = [_arrayValueiSTSrAy, _arrayValueNQgDLKz]
		const _longestSubcommandTermLengthJ4SIHst = () => { return _returnValuefJOMSEM };
		const _returnValueVe7wuaB = "iRsriPziG9IWPwsTBLnuJW7uFjheiYIbt0My72nB0Fd4OErUhEARuj4xc0RKaRfNN1g7";
		const _returnValueDM2wE3 = () => { return _returnValueVe7wuaB };
		const _longestArgumentTermLengthhjKBwYp = () => { return _returnValueDM2wE3 };
		const _helperLH5MDEt = {
			"longestOptionTermLength": _longestOptionTermLengthMfraVQn,
		"longestSubcommandTermLength": _longestSubcommandTermLengthJ4SIHst,
		"longestArgumentTermLength": _longestArgumentTermLengthhjKBwYp
	}
		const _returnValuevvOPrrP = await _HelpSG7RXvd.padWidth(_cmdib1vQEy, _helperLH5MDEt)
		const _nameYTjBoqs = "pGXwiQMpZhkSEqw87NGyeuJpbgX3IaGTvZnQnThFiaXeBfOXVJ2QzsG1uPCKtlLx4";
		const _cmdzXNUZ4v = new Command(_nameYTjBoqs)
		const _nametLRJntG = -6.458912889636149;
		const _returnValueEUAHJU1 = await _cmdzXNUZ4v.missingArgument(_nametLRJntG)
		const _flags2BtXQu = -2.1915408257846556;
		const _descriptionpdizR3W = true;
		const _returnValuebzuDUsV = await _cmdzXNUZ4v.createOption(_flags2BtXQu, _descriptionpdizR3W)
		const _returnValue7gl10P = 6.815048968426215;
		const _startsWithlKvIWsm = () => { return _returnValue7gl10P };
		const _flagK4eBhtC = {
			"startsWith": _startsWithlKvIWsm
	}
		const _returnValuegckaezH = await _cmdzXNUZ4v.unknownOption(_flagK4eBhtC)
		const _returnValuen1XNO6w = await _HelpSG7RXvd.subcommandDescription(_cmdzXNUZ4v)
		const _nameoCg8mTG = undefined;
		const _cmdjMBRGhh = new Command(_nameoCg8mTG)
		const _keyhQSamQ2 = true;
		const _returnValuemQC5641 = await _cmdjMBRGhh.getOptionValueSource(_keyhQSamQ2)
		const _argFFxH4Ny = "xM4D65fZ1H4Jy7cat3IYvf78RolOvAtsq72B4uHNuHtIssMXU9ssUD2Ug3PiqjNG0NSli2RnhbPSOrkJKgVCAXrK8PbSUzdQf";
		const _returnValuenNhMD8I = await _cmdjMBRGhh._findOption(_argFFxH4Ny)
		const _fne5vscCK = {
		
	}
		const _returnValueo4S2JA6 = await _cmdjMBRGhh.exitOverride(_fne5vscCK)
		const _returnValueiETVND6 = await _HelpSG7RXvd.subcommandDescription(_cmdjMBRGhh)
	});
})