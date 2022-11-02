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
		const _Help7e36xZ = new Help()
		const _returnValuePToIZvF = null;
		const _flagsfSb9Mkx = () => { return _returnValuePToIZvF };
		const _optionTYwn55D = {
			"flags": _flagsfSb9Mkx
	}
		const _returnValueY8Sbf9 = await _Help7e36xZ.optionTerm(_optionTYwn55D)
		const __argsoE2gbo = {
		
	}
		const __namez7UYFq5 = -4.750682233563937;
		const __aliasesB5mbEm6 = {
		
	}
		const _optionsi6fI4sA = {
		
	}
		const _cmdTweC52O = {
			"_args": __argsoE2gbo,
		"_name": __namez7UYFq5,
		"_aliases": __aliasesB5mbEm6,
		"options": _optionsi6fI4sA
	}
		const _returnValueC1oKTaZ = await _Help7e36xZ.subcommandTerm(_cmdTweC52O)
		const _cmdNJFCkZu = null;
		const _arrayValuelPQDuXg = -2.4746542277671537;
		const _arrayValuecQkMkb = null;
		const _arrayValuev0XH0H = true;
		const _arrayValuerpt1isz = true;
		const _arrayValuexRxFYg1 = null;
		const _arrayValueu2fhXHG = [_arrayValuev0XH0H, _arrayValuerpt1isz, _arrayValuexRxFYg1]
		const _returnValuekxIiDyU = [_arrayValuelPQDuXg, _arrayValuecQkMkb, _arrayValueu2fhXHG]
		const _visibleOptionslS3yon8 = () => { return _returnValuekxIiDyU };
		const _returnValuemt9GliZ = true;
		const _optionTermFpotgz = () => { return _returnValuemt9GliZ };
		const _helperHZVFt6 = {
			"visibleOptions": _visibleOptionslS3yon8,
		"optionTerm": _optionTermFpotgz
	}
		const _returnValueT3meE5x = await _Help7e36xZ.longestOptionTermLength(_cmdNJFCkZu, _helperHZVFt6)
	});

	it('test for Help', async () => {
		const _HelpYhVph2 = new Help()
		const _returnValuePGmYbhA = "hUA1q2NGS7b1GUy13B7SgtlykUVaIiTKSMaOM6IHhnwbSrCf1rQH";
		const _returnValueL8HHazH = () => { return _returnValuePGmYbhA };
		const _nameGBAUHR0 = () => { return _returnValueL8HHazH };
		const _argumentQVlWEkp = {
			"name": _nameGBAUHR0
	}
		const _returnValuehUvstaq = await _HelpYhVph2.argumentTerm(_argumentQVlWEkp)
		const _arrayValue8zVBZC = []
		const _arrayValueMPVHiRy = []
		const _arrayValueQVqTg12 = "aXpDffP7OALIUHV26AObYljHA2hu4j4zrjgunANVd18H2iYqkdUlNjUDldAfXMCs63MV5BU";
		const _arrayValueG89939w = null;
		const _arrayValuep5qFA4n = [_arrayValueQVqTg12, _arrayValueG89939w]
		const _arrayValueArie9Mr = [_arrayValue8zVBZC, _arrayValueMPVHiRy, _arrayValuep5qFA4n]
		const _arrayValueGMSpids = 2.69373405783762;
		const _arrayValuexwbzo8b = true;
		const _arrayValueadkJZyD = [_arrayValueGMSpids, _arrayValuexwbzo8b]
		const _flagsf1jVzen = [_arrayValueArie9Mr, _arrayValueadkJZyD]
		const _optionpkoHV2A = {
			"flags": _flagsf1jVzen
	}
		const _returnValueg5dBDku = await _HelpYhVph2.optionTerm(_optionpkoHV2A)
		const __nameersoUS8 = {
		
	}
		const __aliasesye2GVG9 = {
		
	}
		const _parentmj5GPw = {
		
	}
		const _returnValueDVdi2IY = false;
		const _usagePJZyo6T = () => { return _returnValueDVdi2IY };
		const _cmdjMY2bhZ = {
			"_name": __nameersoUS8,
		"_aliases": __aliasesye2GVG9,
		"parent": _parentmj5GPw,
		"usage": _usagePJZyo6T
	}
		const _returnValueTlFrLLS = await _HelpYhVph2.commandUsage(_cmdjMY2bhZ)
	});

	it('test for Help', async () => {
		const _HelpgvZRFE8 = new Help()
		const _arrayValueHio2rZz = 9.732437238624101;
		const _returnValueIvKSxYQ = [_arrayValueHio2rZz]
		const _descriptionnaAbNUB = () => { return _returnValueIvKSxYQ };
		const _cmdTN4p5v5 = {
			"description": _descriptionnaAbNUB
	}
		const _returnValueLqktd3w = await _HelpgvZRFE8.subcommandDescription(_cmdTN4p5v5)
	});

	it('test for Help', async () => {
		const _HelptH8YbYS = new Help()
		const _argChoicesd6IPxjM = {
		
	}
		const _defaultValuetcy65Pi = undefined;
		const _returnValuesHOpI01 = "aY4utVkz0ZGtaKtoGGbTMvL6letVKZtBAdcBNtYUsh6gkx";
		const _arrayValuevW4MnCU = () => { return _returnValuesHOpI01 };
		const _arrayValuefmSHjcX = {
		
	}
		const _returnValuesctuZcP = -4.143473442810892;
		const _returnValueh2V6gpe = () => { return _returnValuesctuZcP };
		const _arrayValueJ5q9ODm = () => { return _returnValueh2V6gpe };
		const _arrayValueoOLSfCM = [_arrayValuefmSHjcX, _arrayValueJ5q9ODm]
		const _defaultValueDescriptionsYYub2L = [_arrayValuevW4MnCU, _arrayValueoOLSfCM]
		const _descriptionn9Fpdp2 = undefined;
		const _argumentcylzL7z = {
			"argChoices": _argChoicesd6IPxjM,
		"defaultValue": _defaultValuetcy65Pi,
		"defaultValueDescription": _defaultValueDescriptionsYYub2L,
		"description": _descriptionn9Fpdp2
	}
		const _returnValue4Z0IKS = await _HelptH8YbYS.argumentDescription(_argumentcylzL7z)
		const _argChoiceshl0X2z = {
		
	}
		const _negatejl4fuhP = {
		
	}
		const _defaultValueLNuLZIx = undefined;
		const _defaultValueDescriptionAtI3z58 = "PcpHEbLkRfgYCyn76Wh";
		const _envVart2qS9A = undefined;
		const _descriptionem8YBrz = true;
		const _optionsJYkw35 = {
			"argChoices": _argChoiceshl0X2z,
		"negate": _negatejl4fuhP,
		"defaultValue": _defaultValueLNuLZIx,
		"defaultValueDescription": _defaultValueDescriptionAtI3z58,
		"envVar": _envVart2qS9A,
		"description": _descriptionem8YBrz
	}
		const _returnValueI1O23L = await _HelptH8YbYS.optionDescription(_optionsJYkw35)
		const _optionsOzVl1n7 = {
		
	}
		const __hasHelpOptionnV0BVgl = 4.901661812569298;
		const __helpShortFlagdOis6qq = undefined;
		const _returnValueTK2auI = -7.561250421783047;
		const __findOption1wspqB = () => { return _returnValueTK2auI };
		const __helpLongFlagItnSHM = undefined;
		const _returnValuenZZjV7d = -2.635778315980004;
		const _createOptionIkhrOuI = () => { return _returnValuenZZjV7d };
		const _returnValueFFHFvwK = "fBTV8aREPAkIPXOFPFJke03TTSa3G281W7rrIqfS3K45z9fWUydLrdIyFIhZIgdFsITijoytgLJup78KN";
		const __helpDescriptionsPs5kBB = () => { return _returnValueFFHFvwK };
		const __helpFlagsdG24AP = []
		const _cmdKS5LaQP = {
			"options": _optionsOzVl1n7,
		"_hasHelpOption": __hasHelpOptionnV0BVgl,
		"_helpShortFlag": __helpShortFlagdOis6qq,
		"_findOption": __findOption1wspqB,
		"_helpLongFlag": __helpLongFlagItnSHM,
		"createOption": _createOptionIkhrOuI,
		"_helpDescription": __helpDescriptionsPs5kBB,
		"_helpFlags": __helpFlagsdG24AP
	}
		const _returnValuejBywmPs = await _HelptH8YbYS.visibleOptions(_cmdKS5LaQP)
		const _flagsZOfC5E = undefined;
		const _optionwEm1IRv = {
			"flags": _flagsZOfC5E
	}
		const _returnValueY7oeJHP = await _HelptH8YbYS.optionTerm(_optionwEm1IRv)
	});

	it('test for Help', async () => {
		const _Helpk81WZIa = new Help()
		const _argChoicesrWe0lDN = {
		
	}
		const _negateKrpXn3 = "JBjLmDpLMDClB7tRKrRqVqd2dI5gwX5Lg0yKkVa3ErNpY9KC5Y62mhQHDQtaoIrCDMbq1WjZy7WJYeN";
		const _defaultValueJYbg5pX = undefined;
		const _defaultValueDescriptionzptb8nT = null;
		const _envVarYQC6SZ1 = undefined;
		const _descriptionM9l4Ux5 = null;
		const _optionatUnyJH = {
			"argChoices": _argChoicesrWe0lDN,
		"negate": _negateKrpXn3,
		"defaultValue": _defaultValueJYbg5pX,
		"defaultValueDescription": _defaultValueDescriptionzptb8nT,
		"envVar": _envVarYQC6SZ1,
		"description": _descriptionM9l4Ux5
	}
		const _returnValuesyP28UK = await _Helpk81WZIa.optionDescription(_optionatUnyJH)
	});

	it('test for Help', async () => {
		const _HelpIwUxECm = new Help()
		const _arrayValueKQpWxEd = 6.213703006381756;
		const _arrayValueOx1EKrU = [_arrayValueKQpWxEd]
		const _arrayValueDvme1CS = "f7P";
		const _arrayValueBK2y2Yy = -2.571441212878886;
		const _returnValuedFe3cZ = [_arrayValueOx1EKrU, _arrayValueDvme1CS, _arrayValueBK2y2Yy]
		const _nameomMbEXv = () => { return _returnValuedFe3cZ };
		const _argumentVP5122a = {
			"name": _nameomMbEXv
	}
		const _returnValuedfEgNl = await _HelpIwUxECm.argumentTerm(_argumentVP5122a)
		const _argChoicesLefBuoa = {
		
	}
		const _negateXp8EevV = false;
		const _defaultValueXcpACnL = undefined;
		const _defaultValueDescriptionovV0Ylo = 3.1587676317040074;
		const _envVarvk6xFtl = undefined;
		const _arrayValuerUAA1n4 = "d9JpsgO2mrhsbx1Yl8kCiZuSxQqYmjk6h3aHG8om93eNtp";
		const _arrayValueXLEv1DH = undefined;
		const _descriptionnzrFNrM = [_arrayValuerUAA1n4, _arrayValueXLEv1DH]
		const _optionuY26Sa3 = {
			"argChoices": _argChoicesLefBuoa,
		"negate": _negateXp8EevV,
		"defaultValue": _defaultValueXcpACnL,
		"defaultValueDescription": _defaultValueDescriptionovV0Ylo,
		"envVar": _envVarvk6xFtl,
		"description": _descriptionnzrFNrM
	}
		const _returnValueH9qEMAx = await _HelpIwUxECm.optionDescription(_optionuY26Sa3)
		const __nameEKj9Np5 = {
		
	}
		const __aliasespzWlhmG = {
		
	}
		const _parentfJzXiU7 = {
		
	}
		const _returnValueBByxJz = -2.0203854408556516;
		const _usagekO5h8EI = () => { return _returnValueBByxJz };
		const _cmdWIbQ7WF = {
			"_name": __nameEKj9Np5,
		"_aliases": __aliasespzWlhmG,
		"parent": _parentfJzXiU7,
		"usage": _usagekO5h8EI
	}
		const _returnValuepapTr7b = await _HelpIwUxECm.commandUsage(_cmdWIbQ7WF)
		const _argChoicesGY352FV = {
		
	}
		const _defaultValuecIQBRJR = undefined;
		const _defaultValueDescriptionAHykYnL = undefined;
		const _arrayValuexGsNm0 = {
		
	}
		const _arrayValuegFwmK8Q = true;
		const _descriptionxreu6V1 = [_arrayValuexGsNm0, _arrayValuegFwmK8Q]
		const _argumentPJnJekH = {
			"argChoices": _argChoicesGY352FV,
		"defaultValue": _defaultValuecIQBRJR,
		"defaultValueDescription": _defaultValueDescriptionAHykYnL,
		"description": _descriptionxreu6V1
	}
		const _returnValue52COoB = await _HelpIwUxECm.argumentDescription(_argumentPJnJekH)
	});

	it('test for Help', async () => {
		const _HelpQLJ3pMR = new Help()
		const _returnValueaKMy7cs = undefined;
		const _matchpGrDXXI = () => { return _returnValueaKMy7cs };
		const _returnValuegzpoCTm = undefined;
		const _substrY5czAaA = () => { return _returnValuegzpoCTm };
		const _stru0j38Iq = {
			"match": _matchpGrDXXI,
		"substr": _substrY5czAaA
	}
		const _widthtNFYU5 = 3.9254326319282136;
		const _indentttW08C = 4.500332728298266;
		const _minColumnWidthuUcPObu = 0.3318559945454087;
		const _returnValuefrYoXrD = await _HelpQLJ3pMR.wrap(_stru0j38Iq, _widthtNFYU5, _indentttW08C, _minColumnWidthuUcPObu)
		const _cmdKfdya8H = "M1nhHfRcKg";
		const _visibleArgumentsl0hz5dW = null;
		const _returnValuerUde1rW = undefined;
		const _argumentTermOr4xZWx = () => { return _returnValuerUde1rW };
		const _helperlEUH6rg = {
			"visibleArguments": _visibleArgumentsl0hz5dW,
		"argumentTerm": _argumentTermOr4xZWx
	}
		const _returnValueJNvN0I = await _HelpQLJ3pMR.longestArgumentTermLength(_cmdKfdya8H, _helperlEUH6rg)
		const _returnValueUWEwEYo = null;
		const _descriptionYffmuan = () => { return _returnValueUWEwEYo };
		const _cmdTLXqEqw = {
			"description": _descriptionYffmuan
	}
		const _returnValueUnZybDw = await _HelpQLJ3pMR.subcommandDescription(_cmdTLXqEqw)
	});

	it('test for Help', async () => {
		const _HelpSe2ZURk = new Help()
		const _returnValueVuxiWd = "oVrliRCm2RQrGejS";
		const _descriptionmKhNw6M = () => { return _returnValueVuxiWd };
		const _cmdZrxlEbl = {
			"description": _descriptionmKhNw6M
	}
		const _returnValueqf4F1Vr = await _HelpSe2ZURk.commandDescription(_cmdZrxlEbl)
		const __argsY33nwpR = {
		
	}
		const __nameTEiNZBc = 5.584900142288223;
		const __aliasesXgSJ3NE = {
		
	}
		const _optionsWbdyVsh = {
		
	}
		const _cmdbBfrIOW = {
			"_args": __argsY33nwpR,
		"_name": __nameTEiNZBc,
		"_aliases": __aliasesXgSJ3NE,
		"options": _optionsWbdyVsh
	}
		const _returnValueSFjkMKn = await _HelpSe2ZURk.subcommandTerm(_cmdbBfrIOW)
		const _returnValueSRhbf8x = []
		const _descriptionADeiB2h = () => { return _returnValueSRhbf8x };
		const _cmdG79uToE = {
			"description": _descriptionADeiB2h
	}
		const _returnValuewosc1a5 = await _HelpSe2ZURk.subcommandDescription(_cmdG79uToE)
	});

	it('test for Help', async () => {
		const _HelpdydyqS = new Help()
		const _returnValueAKj3Uc6 = undefined;
		const _cmdH8jJD21 = () => { return _returnValueAKj3Uc6 };
		const _sortSubcommandsYglA6A9 = 1.9950143615948708;
		const _returnValuesKGiIIE = undefined;
		const _subcommandTermaUMIXp = () => { return _returnValuesKGiIIE };
		const _helperahBessj = {
			"sortSubcommands": _sortSubcommandsYglA6A9,
		"subcommandTerm": _subcommandTermaUMIXp
	}
		const _returnValueEitlH72 = await _HelpdydyqS.longestSubcommandTermLength(_cmdH8jJD21, _helperahBessj)
		const _returnValuepkk5oSC = "bXYRfKTbmOCW7DcV4LohGvadCHIQQchVgrIcbnHidTdVlXLjyXE9kPoe1BZD60kT12ger2l4AAEkXqkvOlZqsTtcEmwW";
		const _nameFQRxJ10 = () => { return _returnValuepkk5oSC };
		const _argumentw2nJPJW = {
			"name": _nameFQRxJ10
	}
		const _returnValueGUw50VG = await _HelpdydyqS.argumentTerm(_argumentw2nJPJW)
		const _cmdKTcFmXk = "Srm9b5mRLism2qMmHi5UQ7zHWcQJy8LiDrvpJzspjcSBguiWfBWlShchWv6qJUtMij632ftdYfq7V";
		const _sortSubcommandsqZySn4H = -3.9688549942735607;
		const _subcommandTermF84gxs = undefined;
		const _helperSul7T23 = {
			"sortSubcommands": _sortSubcommandsqZySn4H,
		"subcommandTerm": _subcommandTermF84gxs
	}
		const _returnValueRXuC8QT = await _HelpdydyqS.formatHelp(_cmdKTcFmXk, _helperSul7T23)
	});

	it('test for Help', async () => {
		const _Helpif2I6V7 = new Help()
		const _optionsDAKR1q7 = {
		
	}
		const __hasHelpOptiondGcO2tl = "wJfPo0eaYJKoh";
		const _arrayValueMX6jpiq = "c0dueQBiO4h7P2lOFowVkHRfnlMcHSCfQ6bfYA3978kGIGaD5poWPhzgK7ywmy";
		const _arrayValue51AVNV = null;
		const _arrayValueVWzWI1e = [_arrayValueMX6jpiq, _arrayValue51AVNV]
		const _arrayValueAqb529x = {
		
	}
		const _arrayValuePFdkuFX = [_arrayValueAqb529x]
		const _returnValueie0D5Cl = [_arrayValueVWzWI1e, _arrayValuePFdkuFX]
		const __helpShortFlagMvwZ8lX = () => { return _returnValueie0D5Cl };
		const _returnValueZSSKjmn = "nmNe8yyG9ywtowp6XQSRvYv";
		const __findOptionJGTCseJ = () => { return _returnValueZSSKjmn };
		const __helpLongFlagCxYUjk2 = -5.722088914104812;
		const _returnValuelrI9qRU = undefined;
		const _createOptionmAZNSJA = () => { return _returnValuelrI9qRU };
		const __helpDescriptionXeMPoTD = "XskO0BagxKmRJ9eOvUnn3dPq9BCLMHuSZYEstiC1knh6yFDadKrVcTGBBBBX";
		const __helpFlagsejLP703 = false;
		const _cmdEcEx6BO = {
			"options": _optionsDAKR1q7,
		"_hasHelpOption": __hasHelpOptiondGcO2tl,
		"_helpShortFlag": __helpShortFlagMvwZ8lX,
		"_findOption": __findOptionJGTCseJ,
		"_helpLongFlag": __helpLongFlagCxYUjk2,
		"createOption": _createOptionmAZNSJA,
		"_helpDescription": __helpDescriptionXeMPoTD,
		"_helpFlags": __helpFlagsejLP703
	}
		const _returnValuei0rwx6y = await _Helpif2I6V7.visibleOptions(_cmdEcEx6BO)
		const _arrayValueiqDHU3y = undefined;
		const _arrayValueno8oxfT = true;
		const _arrayValuejLoEfBL = [_arrayValueiqDHU3y, _arrayValueno8oxfT]
		const _arrayValueofrZwd = false;
		const _arrayValueQ0easS8 = null;
		const _returnValueIKffFOU = [_arrayValuejLoEfBL, _arrayValueofrZwd, _arrayValueQ0easS8]
		const _matche4xNF1a = () => { return _returnValueIKffFOU };
		const _returnValueOOYO2iz = "LumK6f8H8XlyRtxktWip7J0A4sWCIZhhkonzBboqMbG6TbxBbr2wPaFYwF0tH3nzppp8BcavDEKJDAzTBrw2ni1LlOu7cxAh";
		const _substrROPvwRu = () => { return _returnValueOOYO2iz };
		const _strggsMUf = {
			"match": _matche4xNF1a,
		"substr": _substrROPvwRu
	}
		const _widthRgfVnYq = -2.802717455274646;
		const _indentLrcc1pM = -4.613125292521721;
		const _minColumnWidthW3MG3V8 = 4.852134140793664;
		const _returnValueQX8DAK4 = await _Helpif2I6V7.wrap(_strggsMUf, _widthRgfVnYq, _indentLrcc1pM, _minColumnWidthW3MG3V8)
	});

	it('test for Help', async () => {
		const _HelpBfXP3IS = new Help()
		const _cmdlMGIoDV = 9.64717417882245;
		const _returnValueiBE9JNp = null;
		const _visibleOptionsu7ejhak = () => { return _returnValueiBE9JNp };
		const _returnValueDX8iKj = true;
		const _optionTermCqy39AA = () => { return _returnValueDX8iKj };
		const _helperFScBN0r = {
			"visibleOptions": _visibleOptionsu7ejhak,
		"optionTerm": _optionTermCqy39AA
	}
		const _returnValueDP0nNK = await _HelpBfXP3IS.longestOptionTermLength(_cmdlMGIoDV, _helperFScBN0r)
		const _cmdVcg13lV = {
		
	}
		const _sortSubcommandsiAtGcAS = undefined;
		const _returnValueqIhENZ = undefined;
		const _returnValueRguUPx6 = () => { return _returnValueqIhENZ };
		const _subcommandTermm3b9Y7W = () => { return _returnValueRguUPx6 };
		const _helpermZKVdC = {
			"sortSubcommands": _sortSubcommandsiAtGcAS,
		"subcommandTerm": _subcommandTermm3b9Y7W
	}
		const _returnValuekMIsRxc = await _HelpBfXP3IS.formatHelp(_cmdVcg13lV, _helpermZKVdC)
		const _optionsEHtYWv = {
		
	}
		const __hasHelpOptionib5IvE = false;
		const __helpShortFlagpU3ZI7A = true;
		const __findOptionNnf9D2T = undefined;
		const __helpLongFlagwj7hG23 = false;
		const _arrayValuephSfQ1u = -5.663128258730966;
		const _arrayValueERPO1VG = 7.14179473692597;
		const _arrayValueeR7eoXJ = false;
		const _returnValueQnGZcaX = [_arrayValuephSfQ1u, _arrayValueERPO1VG, _arrayValueeR7eoXJ]
		const _createOptionsZ0MiJw = () => { return _returnValueQnGZcaX };
		const __helpDescriptionB8u0yAg = null;
		const __helpFlags6I4L8B = null;
		const _cmdk6XP0bT = {
			"options": _optionsEHtYWv,
		"_hasHelpOption": __hasHelpOptionib5IvE,
		"_helpShortFlag": __helpShortFlagpU3ZI7A,
		"_findOption": __findOptionNnf9D2T,
		"_helpLongFlag": __helpLongFlagwj7hG23,
		"createOption": _createOptionsZ0MiJw,
		"_helpDescription": __helpDescriptionB8u0yAg,
		"_helpFlags": __helpFlags6I4L8B
	}
		const _returnValueZWUDu0a = await _HelpBfXP3IS.visibleOptions(_cmdk6XP0bT)
	});

	it('test for Help', async () => {
		const _HelpOdWqVP8 = new Help()
		const _returnValueYzmf75v = true;
		const _returnValueqB7Bwl = () => { return _returnValueYzmf75v };
		const _flagsTIDVFzN = () => { return _returnValueqB7Bwl };
		const _optionk1l405x = {
			"flags": _flagsTIDVFzN
	}
		const _returnValuenEjx6RL = await _HelpOdWqVP8.optionTerm(_optionk1l405x)
		const _returnValuesXsyz4 = false;
		const _cmdlMYZAVN = () => { return _returnValuesXsyz4 };
		const _sortSubcommandsM5wSsu = null;
		const _returnValueCzc09QD = "RQWEYYi7WVJW4KllI";
		const _subcommandTermT9TjNB = () => { return _returnValueCzc09QD };
		const _helperkZVaP17 = {
			"sortSubcommands": _sortSubcommandsM5wSsu,
		"subcommandTerm": _subcommandTermT9TjNB
	}
		const _returnValuehhoOmpb = await _HelpOdWqVP8.formatHelp(_cmdlMYZAVN, _helperkZVaP17)
	});

	it('test for Help', async () => {
		const _HelpinCzodk = new Help()
		const _flagsRhaWVdq = -5.518972128320632;
		const _optionZccXfpu = {
			"flags": _flagsRhaWVdq
	}
		const _returnValueQ7OO3J = await _HelpinCzodk.optionTerm(_optionZccXfpu)
		const _argChoicesXFG4x9Z = {
		
	}
		const _negateojStP0N = 9.40723271520115;
		const _defaultValueaO6VBxL = undefined;
		const _returnValueSpOYL9n = -0.517099313815379;
		const _arrayValueIQfYlGT = () => { return _returnValueSpOYL9n };
		const _defaultValueDescriptionn4RiDFN = [_arrayValueIQfYlGT]
		const _envVarFsu5fij = undefined;
		const _returnValueWvWRxMb = "vAlu9LGCnwVHlqlpqlKGE5QpfsyFDSETEITfMBClxll69BdUAQJHYuxh6N8n04R8YlOUzjwI6f3pkofb7zwjcG4Nl7w9QBO";
		const _descriptionPPPaFi1 = () => { return _returnValueWvWRxMb };
		const _optionkaQdSL5 = {
			"argChoices": _argChoicesXFG4x9Z,
		"negate": _negateojStP0N,
		"defaultValue": _defaultValueaO6VBxL,
		"defaultValueDescription": _defaultValueDescriptionn4RiDFN,
		"envVar": _envVarFsu5fij,
		"description": _descriptionPPPaFi1
	}
		const _returnValue63xf8g = await _HelpinCzodk.optionDescription(_optionkaQdSL5)
		const __argsDescriptionXmxcT7I = {
		
	}
		const __argswjgQrQ5 = {
		
	}
		const _cmdvzEkefx = {
			"_argsDescription": __argsDescriptionXmxcT7I,
		"_args": __argswjgQrQ5
	}
		const _returnValueHGb06Hk = await _HelpinCzodk.visibleArguments(_cmdvzEkefx)
		const __nameFhSwSg = {
		
	}
		const __aliasesyXzFhBb = {
		
	}
		const _parenteq2BDzO = {
		
	}
		const _returnValuee5DHRtU = "V6Kl5LPTp1ooB7SMGEvnNrU4GzFCa8QhgLr5QWnxseTxMS4zRETYWEkJF5o";
		const _usageEimuLQc = () => { return _returnValuee5DHRtU };
		const _cmddDdhV7Q = {
			"_name": __nameFhSwSg,
		"_aliases": __aliasesyXzFhBb,
		"parent": _parenteq2BDzO,
		"usage": _usageEimuLQc
	}
		const _returnValuelejW9Tc = await _HelpinCzodk.commandUsage(_cmddDdhV7Q)
		const _cmdaYtBRTk = "Kr6LaQmiLRkBuEk17zcD0i9bUmewLM7N6fJyXxcRGoOUzcD2q9KJ1VWD66QuETdQdnVoBX65V7IzwO";
		const _returnValuexhUregJ = null;
		const _longestOptionTermLengthLINTpb9 = () => { return _returnValuexhUregJ };
		const _returnValueyXwOuKD = 7.515559833591862;
		const _longestSubcommandTermLengthOiPbjb9 = () => { return _returnValueyXwOuKD };
		const _returnValueNL3hkcD = false;
		const _longestArgumentTermLengthcoWssYd = () => { return _returnValueNL3hkcD };
		const _helperA0Wz9pT = {
			"longestOptionTermLength": _longestOptionTermLengthLINTpb9,
		"longestSubcommandTermLength": _longestSubcommandTermLengthOiPbjb9,
		"longestArgumentTermLength": _longestArgumentTermLengthcoWssYd
	}
		const _returnValueaTRwDq = await _HelpinCzodk.padWidth(_cmdaYtBRTk, _helperA0Wz9pT)
	});

	it('test for Help', async () => {
		const _HelpeBEsgD = new Help()
		const _cmdHPKhoQ = "6aAvW";
		const _returnValuemecRBhE = "74B6x9nfH0K8eGGtYQnXVWmwBJ2AblDvY88EupBY3WwOOjvTjVJ";
		const _longestOptionTermLengthoyxabh9 = () => { return _returnValuemecRBhE };
		const _returnValuenkoZjNk = null;
		const _longestSubcommandTermLengthXDd8Tzl = () => { return _returnValuenkoZjNk };
		const _returnValuet2ubLb = "MkcqKpYmyozhD";
		const _longestArgumentTermLengthTHlOmNT = () => { return _returnValuet2ubLb };
		const _helperZU35SQ1 = {
			"longestOptionTermLength": _longestOptionTermLengthoyxabh9,
		"longestSubcommandTermLength": _longestSubcommandTermLengthXDd8Tzl,
		"longestArgumentTermLength": _longestArgumentTermLengthTHlOmNT
	}
		const _returnValueQx2lSn2 = await _HelpeBEsgD.padWidth(_cmdHPKhoQ, _helperZU35SQ1)
		const _returnValuejJVv28o = "6fAAIaVTA9Vo72K5P7FPvvC1l39rBDhwmgSSYCcqMr";
		const _cmdkCET0PB = () => { return _returnValuejJVv28o };
		const _returnValueGhkphK0 = -5.314889101494547;
		const _arrayValueCfw2sVi = () => { return _returnValueGhkphK0 };
		const _arrayValue83DaeX = {
		
	}
		const _arrayValueu1hvAMY = {
		
	}
		const _sortSubcommandsIHZT8ET = [_arrayValueCfw2sVi, _arrayValue83DaeX, _arrayValueu1hvAMY]
		const _returnValueS864Lum = -6.953106612959859;
		const _returnValueRM9Ch6T = () => { return _returnValueS864Lum };
		const _subcommandTermWMaCz65 = () => { return _returnValueRM9Ch6T };
		const _helperop3ll9V = {
			"sortSubcommands": _sortSubcommandsIHZT8ET,
		"subcommandTerm": _subcommandTermWMaCz65
	}
		const _returnValuepEIUVt5 = await _HelpeBEsgD.formatHelp(_cmdkCET0PB, _helperop3ll9V)
		const _argChoicesfWSWgwt = "zmEb2P1V7tIIeosZi9vg9pfEWgBV9NrrHjrlVQ418p5GzlSvKV1JmAdh0WCSDE424fZ8LISZsyngG";
		const _defaultValueutWOfLM = undefined;
		const _defaultValueDescriptionElk8r9z = {
		
	}
		const _descriptionh62ery0 = {
		
	}
		const _argumentmPZDDpo = {
			"argChoices": _argChoicesfWSWgwt,
		"defaultValue": _defaultValueutWOfLM,
		"defaultValueDescription": _defaultValueDescriptionElk8r9z,
		"description": _descriptionh62ery0
	}
		const _returnValueHZJWeuU = await _HelpeBEsgD.argumentDescription(_argumentmPZDDpo)
	});

	it('test for Help', async () => {
		const _HelpTloOQhK = new Help()
		const _arrayValue5livHo = undefined;
		const _arrayValueKmiCYBX = undefined;
		const _arrayValuePuT3zB3 = "ugSkUIIHIdapBgq5RbA1yfcfNECof2uYPo9y3i1rLfRLHLpudWL6Tyj9d5tqnqPKVQOAV74xDDZK4KSX5";
		const _returnValueyFFU8Q2 = [_arrayValue5livHo, _arrayValueKmiCYBX, _arrayValuePuT3zB3]
		const _matchZcB8rth = () => { return _returnValueyFFU8Q2 };
		const _substrra2uSVM = true;
		const _strNDpN19S = {
			"match": _matchZcB8rth,
		"substr": _substrra2uSVM
	}
		const _widthyYhslpn = 3.344416033439037;
		const _arrayValuehufHSX = "LgrJyTjwQezcFCxydrRutUV5C00oychGIDtCgVtbytnUAJFtz20r6";
		const _arrayValueMEYSAs = 0.6743003002264274;
		const _indentjfkS4Id = [_arrayValuehufHSX, _arrayValueMEYSAs]
		const _minColumnWidthPbRWFWw = 9.733078072267226;
		const _returnValueFcrnJig = await _HelpTloOQhK.wrap(_strNDpN19S, _widthyYhslpn, _indentjfkS4Id, _minColumnWidthPbRWFWw)
	});

	it('test for Help', async () => {
		const _Help0tSbky = new Help()
		const _commandsPYzm49G = {
		
	}
		const _returnValueG1km2Fg = undefined;
		const __hasImplicitHelpCommandgU3HlCF = () => { return _returnValueG1km2Fg };
		const __helpCommandnameAndArgsb0whLOK = {
		
	}
		const _returnValuesPYwriK = "3RlE8mfNQYowfljP99noww";
		const _arrayValueXO53JLA = () => { return _returnValuesPYwriK };
		const _arrayValueJNuy3dy = "t2mVjlXYJLBOYbXI8nrqFrdCtCQLj9iphhPmpGWBemd8H8gSqHramS1QLAI";
		const _arrayValuem4Gh1P = 5.1505387403634995;
		const _arrayValuey2xblr = [_arrayValueJNuy3dy, _arrayValuem4Gh1P]
		const _arrayValueNvF6FH = null;
		const _returnValueGGQJBS8 = [_arrayValueXO53JLA, _arrayValuey2xblr, _arrayValueNvF6FH]
		const _createCommandnR3YHHT = () => { return _returnValueGGQJBS8 };
		const __helpCommandDescriptionkfqsE7v = false;
		const _cmdUTkRYeB = {
			"commands": _commandsPYzm49G,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandgU3HlCF,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsb0whLOK,
		"createCommand": _createCommandnR3YHHT,
		"_helpCommandDescription": __helpCommandDescriptionkfqsE7v
	}
		const _returnValuewDKLfvH = await _Help0tSbky.visibleCommands(_cmdUTkRYeB)
		const _arrayValueOs9bkLd = undefined;
		const _cmdx1oqCOG = [_arrayValueOs9bkLd]
		const _returnValueNEk65Rb = await _Help0tSbky.commandUsage(_cmdx1oqCOG)
		const _cmdYwDqlH7 = true;
		const _arrayValuePW9eJs2 = true;
		const _arrayValuerlaedOY = false;
		const _arrayValueyhm0NLY = undefined;
		const _arrayValuePJofbdd = null;
		const _helpermGSdV0A = [_arrayValuePW9eJs2, _arrayValuerlaedOY, _arrayValueyhm0NLY, _arrayValuePJofbdd]
		const _returnValueDeevTLC = await _Help0tSbky.longestArgumentTermLength(_cmdYwDqlH7, _helpermGSdV0A)
		const _returnValuea61hrO9 = {
		
	}
		const _arrayValuePZ6Pw7F = () => { return _returnValuea61hrO9 };
		const _arrayValueDyAMCm2 = false;
		const _cmdgz8P7xO = [_arrayValuePZ6Pw7F, _arrayValueDyAMCm2]
		const _returnValuecRrirW = await _Help0tSbky.commandUsage(_cmdgz8P7xO)
		const _returnValueVuzFdiE = null;
		const _namepY4Hwui = () => { return _returnValueVuzFdiE };
		const _argumentFkXyV90 = {
			"name": _namepY4Hwui
	}
		const _returnValueS3g6jYL = await _Help0tSbky.argumentTerm(_argumentFkXyV90)
	});

	it('test for Help', async () => {
		const _HelprknqMA9 = new Help()
		const _argumentgj8uk8G = []
		const _returnValueIddRIss = await _HelprknqMA9.argumentDescription(_argumentgj8uk8G)
		const _arrayValueycDFQg6 = undefined;
		const _arrayValueDe4jQu3 = false;
		const _cmdxqYdVxa = [_arrayValueycDFQg6, _arrayValueDe4jQu3]
		const _returnValuedChfTTw = await _HelprknqMA9.visibleOptions(_cmdxqYdVxa)
		const _returnValueHIaLCVd = "hOpGkAF79UShNh9QjBlJrolP2ah3zQvashA6KTGJWhGXbwjYRXiXl7oNqIIJQPtmqpqgDrNWd3sJLJCd1M1Ei";
		const _namekP9v2x = () => { return _returnValueHIaLCVd };
		const _argumenttYNMJ1M = {
			"name": _namekP9v2x
	}
		const _returnValueBMhyexA = await _HelprknqMA9.argumentTerm(_argumenttYNMJ1M)
	});

	it('test for Help', async () => {
		const _HelpmXBNqNk = new Help()
		const _flagspVdm0jv = null;
		const _optionqOmtshZ = {
			"flags": _flagspVdm0jv
	}
		const _returnValueFqDFMc = await _HelpmXBNqNk.optionTerm(_optionqOmtshZ)
		const _returnValuemppzI1S = undefined;
		const _matchbpkb9D = () => { return _returnValuemppzI1S };
		const _substrrgsc3Hi = null;
		const _stri9bpk9q = {
			"match": _matchbpkb9D,
		"substr": _substrrgsc3Hi
	}
		const _widthsQJILif = -5.574698433988703;
		const _indentKaINx9R = -7.597018930406466;
		const _minColumnWidthW9r14Os = -6.121524740845326;
		const _returnValuetIAF5Hx = await _HelpmXBNqNk.wrap(_stri9bpk9q, _widthsQJILif, _indentKaINx9R, _minColumnWidthW9r14Os)
		const _cmdAxXxZLY = false;
		const _returnValuel5PTQGg = undefined;
		const _longestOptionTermLengthREhVUO7 = () => { return _returnValuel5PTQGg };
		const _returnValueu4jIrYT = undefined;
		const _longestSubcommandTermLengthHgok2VE = () => { return _returnValueu4jIrYT };
		const _returnValueznDGEvD = null;
		const _longestArgumentTermLengthRdsV0pW = () => { return _returnValueznDGEvD };
		const _helperPkkc06B = {
			"longestOptionTermLength": _longestOptionTermLengthREhVUO7,
		"longestSubcommandTermLength": _longestSubcommandTermLengthHgok2VE,
		"longestArgumentTermLength": _longestArgumentTermLengthRdsV0pW
	}
		const _returnValueCz7NZT = await _HelpmXBNqNk.padWidth(_cmdAxXxZLY, _helperPkkc06B)
		const _cmdtoQQD1O = {
		
	}
		const _returnValueq5r9nnS = "dWDBcUFQR";
		const _helperhSugLQF = () => { return _returnValueq5r9nnS };
		const _returnValueMriGeR = await _HelpmXBNqNk.longestArgumentTermLength(_cmdtoQQD1O, _helperhSugLQF)
		const _arrayValueghr8pa0 = undefined;
		const _arrayValueuVox54u = true;
		const _arrayValuewYLTCtX = false;
		const _cmdr1nNYEA = [_arrayValueghr8pa0, _arrayValueuVox54u, _arrayValuewYLTCtX]
		const _returnValuembB7nRW = await _HelpmXBNqNk.subcommandTerm(_cmdr1nNYEA)
	});

	it('test for Help', async () => {
		const _HelpXqrSuva = new Help()
		const _nameXKhkc6 = null;
		const _cmdp2RpEAL = new Command(_nameXKhkc6)
		const _nameQx3vcy = 4.563945331115653;
		const _returnValueAuCiOT5 = await _cmdp2RpEAL.createCommand(_nameQx3vcy)
		const _strePE1Mnm = undefined;
		const _returnValueoEcr3he = await _cmdp2RpEAL.usage(_strePE1Mnm)
		const _returnValueDGz5GRs = await _HelpXqrSuva.subcommandTerm(_cmdp2RpEAL)
		const _optionzazcC0d = "MVFGHBC4HjiLC";
		const _returnValuet1mX2Cg = await _HelpXqrSuva.optionTerm(_optionzazcC0d)
	});

	it('test for Help', async () => {
		const _HelpgYItje4 = new Help()
		const __namelrzCFzw = {
		
	}
		const __aliasesaiaUM1T = "DTH4jE4VuGFgceO6wypSO6zwwH6HkH8Mmm";
		const _parentoK4mgiG = {
		
	}
		const _returnValuesuadMcW = undefined;
		const _usagewndnvln = () => { return _returnValuesuadMcW };
		const _cmdPsR639F = {
			"_name": __namelrzCFzw,
		"_aliases": __aliasesaiaUM1T,
		"parent": _parentoK4mgiG,
		"usage": _usagewndnvln
	}
		const _returnValueEyOXd2 = await _HelpgYItje4.commandUsage(_cmdPsR639F)
		const _returnValueB9LcHlf = undefined;
		const _nameSvSxAdN = () => { return _returnValueB9LcHlf };
		const _argumentZXtDiLN = {
			"name": _nameSvSxAdN
	}
		const _returnValueENOsbKK = await _HelpgYItje4.argumentTerm(_argumentZXtDiLN)
		const _cmdgiWemZJ = -9.767778901691418;
		const _arrayValueiecPJy0 = undefined;
		const _helpermj006W = [_arrayValueiecPJy0]
		const _returnValueVldrVs0 = await _HelpgYItje4.formatHelp(_cmdgiWemZJ, _helpermj006W)
		const _arrayValueim9yc3 = false;
		const _cmdXv5a004 = [_arrayValueim9yc3]
		const _returnValueLB9Idsv = undefined;
		const _visibleOptionsAORNw7 = () => { return _returnValueLB9Idsv };
		const _returnValueYjnWRg = 2.190117202332896;
		const _optionTermYjA10R5 = () => { return _returnValueYjnWRg };
		const _helperLFAZSzC = {
			"visibleOptions": _visibleOptionsAORNw7,
		"optionTerm": _optionTermYjA10R5
	}
		const _returnValuek3mCqHs = await _HelpgYItje4.longestOptionTermLength(_cmdXv5a004, _helperLFAZSzC)
	});

	it('test for Help', async () => {
		const _HelpdDHrZiH = new Help()
		const _cmdQn8zOc = undefined;
		const _helpers3qF6Qe = new Help()
		const _flagsAD2rvvv = "YYbKd36nnW3sSaGHUPxiNJl5vPOWJ3b4ktcV4vOtVkADjGm4ENZzndUw8XQtjda4x3scRFEtS0tNFCTJ6uDkL";
		const _descriptionXtLCM7M = "rp8ox9N21zSV";
		const _cmdQiF7iRR = new Option(_flagsAD2rvvv, _descriptionXtLCM7M)
		const _mandatorykPQSqw0 = false;
		const _returnValueslxR1cN = await _cmdQiF7iRR.makeOptionMandatory(_mandatorykPQSqw0)
		const _fntw7IM2y = {
		
	}
		const _returnValuejWzRtGG = await _cmdQiF7iRR.argParser(_fntw7IM2y)
		const _returnValuegucEQmL = await _helpers3qF6Qe.commandDescription(_cmdQiF7iRR)
		const _returnValueqJ6wUWM = await _HelpdDHrZiH.longestArgumentTermLength(_cmdQn8zOc, _helpers3qF6Qe)
	});

	it('test for Help', async () => {
		const _HelpFgC2BBb = new Help()
		const _flagsKUF0UqK = "BU5cW2JeRHkI";
		const _descriptionLqXnOdg = "dtdF5kEfIsxhRtVkVqELgFKh48rUiUstkJFbLT2KTo5ssScwXmNp9UU";
		const _optionbpqmoyb = new Option(_flagsKUF0UqK, _descriptionLqXnOdg)
		const _fnuKKMBoq = {
		
	}
		const _returnValueC1Giq0U = await _optionbpqmoyb.argParser(_fnuKKMBoq)
		const _nameM3Z0hww = "ZqOmoYYPIAtBV";
		const _returnValueVunUaK2 = await _optionbpqmoyb.env(_nameM3Z0hww)
		const _hidetV2Bvoq = 5.720046216406329;
		const _returnValueN2cfwW3 = await _optionbpqmoyb.hideHelp(_hidetV2Bvoq)
		const _valueBLUENxB = "HxIlwnfVwASaH0WcGqHTPaC1cY8twK6dxnzjsmKcEObMkk17kMfVP8gVb4rp9vUm9JR";
		const _returnValuextjSrJw = null;
		const _concatUPa7LCv = () => { return _returnValuextjSrJw };
		const _previousGXm07jD = {
			"concat": _concatUPa7LCv
	}
		const _returnValuejaEW1ye = await _optionbpqmoyb._concatValue(_valueBLUENxB, _previousGXm07jD)
		const _returnValuejdENV1b = await _HelpFgC2BBb.optionDescription(_optionbpqmoyb)
	});

	it('test for Help', async () => {
		const _HelpYfzXjbM = new Help()
		const _arrayValueDKzT00N = null;
		const _returnValueNpSByOl = [_arrayValueDKzT00N]
		const _nameN6LLQz = () => { return _returnValueNpSByOl };
		const _cmdks1pcP8 = new Command(_nameN6LLQz)
		const _allowExcessicmApU5 = true;
		const _returnValueb2XMPul = await _cmdks1pcP8.allowExcessArguments(_allowExcessicmApU5)
		const _returnValueR33vYvW = await _HelpYfzXjbM.visibleCommands(_cmdks1pcP8)
		const _arrayValuer4W0GDt = "02XwsYv0vG";
		const _optionkDsvuyb = [_arrayValuer4W0GDt]
		const _returnValueAG08C6 = await _HelpYfzXjbM.optionTerm(_optionkDsvuyb)
		const _returnValueviKGwWP = "Ltei9x2YaFwIqJ8oqnkCtTtj28zDTrV215LfuB2fLxLFfFLfHoyJgr9aDPyajaLf3NlbrYU3RS5gwSk";
		const _cmdC35OeeE = () => { return _returnValueviKGwWP };
		const _returnValuevUWrele = await _HelpYfzXjbM.visibleArguments(_cmdC35OeeE)
	});

	it('test for Help', async () => {
		const _HelpICrWgGR = new Help()
		const _nameAXdX2bs = false;
		const _cmdwjXC8HB = new Command(_nameAXdX2bs)
		const _displayHelpeQKxpj8 = {
		
	}
		const _returnValueR7Z8SzS = await _cmdwjXC8HB.showHelpAfterError(_displayHelpeQKxpj8)
		const _strLExHT0y = undefined;
		const _flagsEZmH9Bn = {
		
	}
		const _descriptionSYYJlVO = {
		
	}
		const _returnValueHa78UZj = await _cmdwjXC8HB.version(_strLExHT0y, _flagsEZmH9Bn, _descriptionSYYJlVO)
		const _returnValueqplap15 = await _HelpICrWgGR.visibleOptions(_cmdwjXC8HB)
		const _returnValueMYhZ8wR = null;
		const _argumentamBIMjB = () => { return _returnValueMYhZ8wR };
		const _returnValueMlK0Fy = await _HelpICrWgGR.argumentDescription(_argumentamBIMjB)
		const _returnValuepoxH3Au = {
		
	}
		const _argumentBOcSGzC = () => { return _returnValuepoxH3Au };
		const _returnValuebGXqjVr = await _HelpICrWgGR.argumentDescription(_argumentBOcSGzC)
		const _cmdsMyVbp = -7.192081749487901;
		const _helper9YHx1w = "3dTTbLNmISoYivbkikwIMtwxp5z17jVPCX2vf59DLGEGMFbOYlPnmmLajB9T";
		const _returnValueZAq2sX = await _HelpICrWgGR.longestOptionTermLength(_cmdsMyVbp, _helper9YHx1w)
		const _flagsXVXnEVD = true;
		const _descriptionRLf13Vn = undefined;
		const _argumentzqDOiIj = new Option(_flagsXVXnEVD, _descriptionRLf13Vn)
		const _returnValuek4EJlhw = await _argumentzqDOiIj.attributeName()
		const _returnValue6Tz8GD = await _argumentzqDOiIj.attributeName()
		const _returnValuebJLJHi = "1UAaa5nJ6hTDReO";
		const _includesohnjEjA = () => { return _returnValuebJLJHi };
		const _returnValueFYplwF = null;
		const _joinVoVJIG1 = () => { return _returnValueFYplwF };
		const _valuesZszzil = {
			"includes": _includesohnjEjA,
		"join": _joinVoVJIG1
	}
		const _returnValueTRytoG = await _argumentzqDOiIj.choices(_valuesZszzil)
		const _hideAY4yzt = true;
		const _returnValueyNizOKd = await _argumentzqDOiIj.hideHelp(_hideAY4yzt)
		const _returnValue9lbbUA = await _HelpICrWgGR.argumentTerm(_argumentzqDOiIj)
	});
})