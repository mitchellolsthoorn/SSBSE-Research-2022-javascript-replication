export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpnBMMbU = new Help()
		const _nameVGOtaWJ = undefined;
		const _cmdau3F6z4 = new Command(_nameVGOtaWJ)
		const _contextOptionslvIVFf = "l0bGQsGuHPyLYsKf5hzRNshm5SiKd6wJHIv";
		const _returnValueKNAOJuH = await _cmdau3F6z4._getHelpContext(_contextOptionslvIVFf)
		const _storeAsPropertiesATj4VSd = false;
		const _returnValueGwqxuR = await _cmdau3F6z4.storeOptionsAsProperties(_storeAsPropertiesATj4VSd)
		const _returnValuebCyMzHX = await _cmdau3F6z4.createHelp()
		const _flagsapxPUi = {
		
	}
		const _descriptionCfRfkmV = true;
		const _fnRvx9Sxx = undefined;
		const _arrayValuej9PN7cL = -6.199685628122655;
		const _defaultValueTx7L4uR = [_arrayValuej9PN7cL]
		const _returnValuekqJMvyX = await _cmdau3F6z4.option(_flagsapxPUi, _descriptionCfRfkmV, _fnRvx9Sxx, _defaultValueTx7L4uR)
		const _returnValuecqiDPtA = true;
		const _returnValueaqA3eQu = () => { return _returnValuecqiDPtA };
		const _cmdwxYvCWz = () => { return _returnValueaqA3eQu };
		const _isDefaultJAM5R0u = null;
		const _optsc1F7LL2 = {
			"isDefault": _isDefaultJAM5R0u
	}
		const _returnValueDZ1dMO1 = await _cmdau3F6z4.addCommand(_cmdwxYvCWz, _optsc1F7LL2)
		const _returnValuea7CjoRs = await _HelpnBMMbU.visibleArguments(_cmdau3F6z4)
		const _returnValueTIolJm6 = 2.761483804535885;
		const _sliceDIDou1 = () => { return _returnValueTIolJm6 };
		const _namelFP71Z6 = {
			"slice": _sliceDIDou1
	}
		const _descriptioneHZQpkr = {
		
	}
		const _cmdwKgA7g = new Argument(_namelFP71Z6, _descriptioneHZQpkr)
		const _valueis3BgT = 8.271136839594494;
		const _arrayValueJz2GT0J = "6";
		const _returnValueS4cLOm8 = -9.776697138849164;
		const _arrayValuenZ0XZV8 = () => { return _returnValueS4cLOm8 };
		const _arrayValuedfV9ME4 = null;
		const _arrayValueirIilra = "Fl59i0vCu2WLCXVRcFQgHJnnEx8zk1ugH2E10uCatISWoPH5VgCmob5";
		const _arrayValuemqyAeE0 = {
		
	}
		const _returnValueoLpgnpL = [_arrayValuenZ0XZV8, _arrayValuedfV9ME4, _arrayValueirIilra, _arrayValuemqyAeE0]
		const _arrayValuemyT8zx0 = () => { return _returnValueoLpgnpL };
		const _previousKFmlbQ = [_arrayValueJz2GT0J, _arrayValuemyT8zx0]
		const _returnValueDKmuM6A = await _cmdwKgA7g._concatValue(_valueis3BgT, _previousKFmlbQ)
		const _returnValueznmgwHa = 3.1293622812686372;
		const _arrayValuekBoudrB = () => { return _returnValueznmgwHa };
		const _arrayValueOPOL7Tj = 6.315063975302845;
		const _valueshpd47nA = [_arrayValuekBoudrB, _arrayValueOPOL7Tj]
		const _returnValuexLU8rgM = await _cmdwKgA7g.choices(_valueshpd47nA)
		const _returnValueBdk72Qj = await _HelpnBMMbU.subcommandDescription(_cmdwKgA7g)
		const __namei8Yrbdg = {
		
	}
		const __aliasesoUXjLX = {
		
	}
		const _parentwEo6GQ = {
		
	}
		const _returnValuexytL6wV = 9.997475443885744;
		const _usagerdG7yOX = () => { return _returnValuexytL6wV };
		const _cmdOZM70jF = {
			"_name": __namei8Yrbdg,
		"_aliases": __aliasesoUXjLX,
		"parent": _parentwEo6GQ,
		"usage": _usagerdG7yOX
	}
		const _returnValuet9JeX5N = await _HelpnBMMbU.commandUsage(_cmdOZM70jF)
		const _optionsUwdN9Wb = {
		
	}
		const __hasHelpOptiontNaYzz = 9.92066959021172;
		const _returnValuenxexvm = true;
		const _arrayValueQcxDJWC = () => { return _returnValuenxexvm };
		const _arrayValueESrsfis = false;
		const __helpShortFlagf0zbLjx = [_arrayValueQcxDJWC, _arrayValueESrsfis]
		const _returnValuec9tnsb1 = "wtALDdHKBHUMiO4h7pH9P4FWzAvfc12FOufpih1kv4kH0jdVNxE1k4tE4mzv1v08D9VWMVV3MsAlBjwQlHQEar";
		const __findOptionSox5aTy = () => { return _returnValuec9tnsb1 };
		const __helpLongFlagSxE1ub = "QtZmW1";
		const _returnValueSLU7Kt = null;
		const _createOptionPm3ifyi = () => { return _returnValueSLU7Kt };
		const __helpDescriptionL2jFqTz = "9KyyCfC35qwx32mEhTS68NbtSYvWszSOvL5Bpa6T";
		const __helpFlagskXioiNr = null;
		const _cmdzOtC4N = {
			"options": _optionsUwdN9Wb,
		"_hasHelpOption": __hasHelpOptiontNaYzz,
		"_helpShortFlag": __helpShortFlagf0zbLjx,
		"_findOption": __findOptionSox5aTy,
		"_helpLongFlag": __helpLongFlagSxE1ub,
		"createOption": _createOptionPm3ifyi,
		"_helpDescription": __helpDescriptionL2jFqTz,
		"_helpFlags": __helpFlagskXioiNr
	}
		const _returnValueWmia1k = await _HelpnBMMbU.visibleOptions(_cmdzOtC4N)
	});

	it('test for Help', async () => {
		const _HelpONn1tR = new Help()
		const _returnValueixTu5L = true;
		const _descriptionYZ9rKk = () => { return _returnValueixTu5L };
		const _cmdhAUeNeK = {
			"description": _descriptionYZ9rKk
	}
		const _returnValueIAqnLWN = await _HelpONn1tR.commandDescription(_cmdhAUeNeK)
		const _nameTUq3POu = "noTbWaHRrlIgWI4HZ7i4kdwXh6xYPmEHkR7eJxWOKwspmNpOjVcz";
		const _argumentDDsJ3nm = {
			"name": _nameTUq3POu
	}
		const _returnValuewSYg7Na = await _HelpONn1tR.argumentTerm(_argumentDDsJ3nm)
		const _arrayValueUSGU6Fq = false;
		const _arrayValuekar6FTA = undefined;
		const _returnValuexIhjQDm = [_arrayValueUSGU6Fq, _arrayValuekar6FTA]
		const _namePX0Nvti = () => { return _returnValuexIhjQDm };
		const _cmdBlrwCCR = new Command(_namePX0Nvti)
		const _passThroughfzHH4QX = false;
		const _returnValueZRzaTB4 = await _cmdBlrwCCR.passThroughOptions(_passThroughfzHH4QX)
		const _returnValuenbrm5Ia = await _HelpONn1tR.subcommandDescription(_cmdBlrwCCR)
		const _arrayValueKMxNpYb = true;
		const _arrayValueaKXey7w = undefined;
		const _returnValuegGQcuyr = [_arrayValueKMxNpYb, _arrayValueaKXey7w]
		const _cmdZvq2yV = () => { return _returnValuegGQcuyr };
		const _returnValues6T8xZt = await _HelpONn1tR.commandUsage(_cmdZvq2yV)
	});

	it('test for Help', async () => {
		const _Helpk9Q02Zc = new Help()
		const _cmdMjibP5N = true;
		const _returnValueRgvEAhH = null;
		const _visibleArgumentsW6o4sM = () => { return _returnValueRgvEAhH };
		const _returnValueAXaPs5 = -7.779514798414974;
		const _argumentTermXdRiPpy = () => { return _returnValueAXaPs5 };
		const _helperRxbRFKx = {
			"visibleArguments": _visibleArgumentsW6o4sM,
		"argumentTerm": _argumentTermXdRiPpy
	}
		const _returnValueFZzZIy = await _Helpk9Q02Zc.longestArgumentTermLength(_cmdMjibP5N, _helperRxbRFKx)
		const _arrayValuehwSVQ2 = undefined;
		const _optionMd6OAPt = [_arrayValuehwSVQ2]
		const _returnValuegvZfE1O = await _Helpk9Q02Zc.optionTerm(_optionMd6OAPt)
		const _cmddnIS4xm = null;
		const _sortSubcommandsls0ep0h = []
		const _returnValueqjQFFS = -4.395053547930019;
		const _subcommandTermg3fqNFD = () => { return _returnValueqjQFFS };
		const _helperANthEx = {
			"sortSubcommands": _sortSubcommandsls0ep0h,
		"subcommandTerm": _subcommandTermg3fqNFD
	}
		const _returnValuev12bSQe = await _Helpk9Q02Zc.formatHelp(_cmddnIS4xm, _helperANthEx)
		const _arrayValuepoIwakh = {
		
	}
		const _arrayValueP0rnH4E = {
		
	}
		const _cmdJVjhRyD = [_arrayValuepoIwakh, _arrayValueP0rnH4E]
		const _sortSubcommandsifrxBaY = undefined;
		const _returnValueQ9JQwkK = undefined;
		const _subcommandTermRxnulTi = () => { return _returnValueQ9JQwkK };
		const _helpery3mVSL = {
			"sortSubcommands": _sortSubcommandsifrxBaY,
		"subcommandTerm": _subcommandTermRxnulTi
	}
		const _returnValuecoF7DNB = await _Helpk9Q02Zc.formatHelp(_cmdJVjhRyD, _helpery3mVSL)
		const _nameqMZAHol = "BgRyGHpeEgDM8vciKX5OfRicE9K471bf6v5hOEdHW8vfAdojmIHJvEpqWy";
		const _descriptionmxlUXK = undefined;
		const _argumentK6kZEDg = new Argument(_nameqMZAHol, _descriptionmxlUXK)
		const _returnValuevzSvyBr = await _argumentK6kZEDg.argRequired()
		const _returnValuejwMAA9i = null;
		const _includescyJFOyn = () => { return _returnValuejwMAA9i };
		const _returnValuer0b2bFz = null;
		const _joindWoPJk0 = () => { return _returnValuer0b2bFz };
		const _valueskHW17X = {
			"includes": _includescyJFOyn,
		"join": _joindWoPJk0
	}
		const _returnValueaYy29wW = await _argumentK6kZEDg.choices(_valueskHW17X)
		const _returnValueWFUXwuc = await _Helpk9Q02Zc.argumentDescription(_argumentK6kZEDg)
	});

	it('test for Help', async () => {
		const _HelpY5XJXWN = new Help()
		const _cmdB3vSInf = null;
		const _returnValuesVVy0ve = -6.6459863326226145;
		const _returnValueSH5X1Fu = () => { return _returnValuesVVy0ve };
		const _longestOptionTermLengthqhDgOWJ = () => { return _returnValueSH5X1Fu };
		const _returnValuewDSWpDY = 7.245757971042551;
		const _longestSubcommandTermLengthDIhrvst = () => { return _returnValuewDSWpDY };
		const _returnValueAmkHI9N = null;
		const _longestArgumentTermLengthczj4w2s = () => { return _returnValueAmkHI9N };
		const _helpere5vmRB3 = {
			"longestOptionTermLength": _longestOptionTermLengthqhDgOWJ,
		"longestSubcommandTermLength": _longestSubcommandTermLengthDIhrvst,
		"longestArgumentTermLength": _longestArgumentTermLengthczj4w2s
	}
		const _returnValueUNkTpp3 = await _HelpY5XJXWN.padWidth(_cmdB3vSInf, _helpere5vmRB3)
		const _cmdytUnGUs = "F0wI4nruPVtR5ulO";
		const _returnValueknhLdQa = await _HelpY5XJXWN.commandDescription(_cmdytUnGUs)
		const _cmdySe6IJB = {
		
	}
		const _returnValueGGg8g51 = -3.285477404413493;
		const _visibleOptionsDA0PY4U = () => { return _returnValueGGg8g51 };
		const _returnValuenWUsm6q = 2.1947523805417646;
		const _optionTermHwdbaMe = () => { return _returnValuenWUsm6q };
		const _helperUqi4fe = {
			"visibleOptions": _visibleOptionsDA0PY4U,
		"optionTerm": _optionTermHwdbaMe
	}
		const _returnValueiVt5cMF = await _HelpY5XJXWN.longestOptionTermLength(_cmdySe6IJB, _helperUqi4fe)
	});

	it('test for Help', async () => {
		const _HelpvBkA1s = new Help()
		const _cmdA5azoSF = 9.114837185316457;
		const _returnValueF2Rcwtt = await _HelpvBkA1s.visibleOptions(_cmdA5azoSF)
		const _exitCodebi28tFG = null;
		const _codeJRMD5Ln = false;
		const _messageYsOjfrf = undefined;
		const _argumentSRxEWwk = new CommanderError(_exitCodebi28tFG, _codeJRMD5Ln, _messageYsOjfrf)
		const _returnValuenP0Prcj = await _HelpvBkA1s.argumentTerm(_argumentSRxEWwk)
		const _optiono9bwJcK = "sfrneGVOC0Hwn6wQn58gIwbe8wLqi1kTAk7mwy1jKwWCZ8rI0SuswFt7PVBNvgkWElBNXM";
		const _returnValuepZnQ73s = await _HelpvBkA1s.optionTerm(_optiono9bwJcK)
		const _cmdAJlq79Z = true;
		const _helperTrgbaxy = "BXh3Li9";
		const _returnValuea7Jyp6T = await _HelpvBkA1s.formatHelp(_cmdAJlq79Z, _helperTrgbaxy)
	});

	it('test for Help', async () => {
		const _HelpmXExOQJ = new Help()
		const __argsp96sv0d = {
		
	}
		const __name03OOaF = 0.5140670285978484;
		const __aliasesBVqFfDo = {
		
	}
		const _optionsqrkhwQU = {
		
	}
		const _cmdNU2QPN = {
			"_args": __argsp96sv0d,
		"_name": __name03OOaF,
		"_aliases": __aliasesBVqFfDo,
		"options": _optionsqrkhwQU
	}
		const _returnValueTR6unjC = await _HelpmXExOQJ.subcommandTerm(_cmdNU2QPN)
		const _cmdWp4M544 = "z9tcghGZrA6EO4J7r9pXr1J21wlHIHoEdWtKeoYII539VHHSTvogf9LBymnRcJZeMNLzQVDdEmCmKrUe4WPL2Vq";
		const _returnValueVLQkOnO = await _HelpmXExOQJ.subcommandTerm(_cmdWp4M544)
	});

	it('test for Help', async () => {
		const _Helpxqv5mHC = new Help()
		const _cmdps2wivn = true;
		const _helperj25PNmP = "QpuxKiiFPtGSjo4NVMLhHiLccJA";
		const _returnValuePJqfO8c = await _Helpxqv5mHC.formatHelp(_cmdps2wivn, _helperj25PNmP)
		const _cmdjkqb5kn = 4.944822985922549;
		const _helperkUraLf9 = "Kq4HhfUnaNlPBUiTBie";
		const _returnValueaP56JG2 = await _Helpxqv5mHC.padWidth(_cmdjkqb5kn, _helperkUraLf9)
		const _flagsH941PAl = undefined;
		const _optionxrVLlDy = {
			"flags": _flagsH941PAl
	}
		const _returnValueSULJOvQ = await _Helpxqv5mHC.optionTerm(_optionxrVLlDy)
		const _cmdZ9EK8Ug = {
		
	}
		const _returnValueaT2ZfOQ = {
		
	}
		const _helperQP7DZeO = () => { return _returnValueaT2ZfOQ };
		const _returnValueJMwOYCG = await _Helpxqv5mHC.formatHelp(_cmdZ9EK8Ug, _helperQP7DZeO)
	});

	it('test for Help', async () => {
		const _HelpbXfVR2O = new Help()
		const _cmdn8oZkNe = "he4IyOTug";
		const _returnValueC38Ewn = await _HelpbXfVR2O.subcommandDescription(_cmdn8oZkNe)
		const __argsdoYlTAe = undefined;
		const __namerK656y = 8.789910160165448;
		const __aliases05W3NZ = -9.73028095585434;
		const _optionssMQzAO = {
		
	}
		const _cmdALmyc6c = {
			"_args": __argsdoYlTAe,
		"_name": __namerK656y,
		"_aliases": __aliases05W3NZ,
		"options": _optionssMQzAO
	}
		const _returnValueovhEmx = await _HelpbXfVR2O.subcommandTerm(_cmdALmyc6c)
	});

	it('test for Help', async () => {
		const _HelpVIL4CT = new Help()
		const _returnValuef8PshPY = {
		
	}
		const _nameQIk7Kyu = () => { return _returnValuef8PshPY };
		const _descriptionqbf78t9 = null;
		const _argumentl4bgyel = new Argument(_nameQIk7Kyu, _descriptionqbf78t9)
		const _fnI9mrx9X = undefined;
		const _returnValuePqYdavf = await _argumentl4bgyel.argParser(_fnI9mrx9X)
		const _returnValuejzHkCPv = await _argumentl4bgyel.argRequired()
		const _returnValuexT7AUjF = await _argumentl4bgyel.argRequired()
		const _arrayValueVGMh0A5 = true;
		const _arrayValueP8Ijubi = "KHkuuNPxDqs";
		const _returnValueLP3lUyb = false;
		const _returnValueLfS0GPj = () => { return _returnValueLP3lUyb };
		const _arrayValue46F0lz = () => { return _returnValueLfS0GPj };
		const _arrayValueLx5mD6L = null;
		const _returnValuetCyxVv = "uhbXoQINjmxkl5KdxiYfW8cFr23xAVfsCPmJ4vwHsn14HKtT";
		const _arrayValuebY1rJlU = () => { return _returnValuetCyxVv };
		const _arrayValuer3O7CPy = [_arrayValue46F0lz, _arrayValueLx5mD6L, _arrayValuebY1rJlU]
		const _valuesWDNLlXJ = [_arrayValueVGMh0A5, _arrayValueP8Ijubi, _arrayValuer3O7CPy]
		const _returnValueeAYy44z = await _argumentl4bgyel.choices(_valuesWDNLlXJ)
		const _returnValueAW9e6uS = await _HelpVIL4CT.argumentDescription(_argumentl4bgyel)
		const _cmdOt4lZs = "HG8KWhn53oNSCqsqUIGtXj3dTnrgBwiXy9S";
		const _returnValueIbn31wU = await _HelpVIL4CT.subcommandDescription(_cmdOt4lZs)
		const _cmdPND1Vdt = "7KAdeCy2TduKuFJI9dTzqsgDBWbvUd";
		const _returnValuerdwXoTm = null;
		const _helperJLHTqr = () => { return _returnValuerdwXoTm };
		const _returnValueULHRut = await _HelpVIL4CT.longestSubcommandTermLength(_cmdPND1Vdt, _helperJLHTqr)
	});

	it('test for Help', async () => {
		const _HelpbZ49Wb4 = new Help()
		const _arrayValueDBfTuf1 = {
		
	}
		const _arrayValueztP1K2 = true;
		const _cmdjZXnwlh = [_arrayValueDBfTuf1, _arrayValueztP1K2]
		const _returnValuedm6exGS = true;
		const _helperoi3XQLd = () => { return _returnValuedm6exGS };
		const _returnValueiXx1pJh = await _HelpbZ49Wb4.longestOptionTermLength(_cmdjZXnwlh, _helperoi3XQLd)
	});

	it('test for Help', async () => {
		const _Helpc4c8HR = new Help()
		const _returnValueIMjWJc = undefined;
		const _optionIPX04N7 = () => { return _returnValueIMjWJc };
		const _returnValueYdiiniK = await _Helpc4c8HR.optionDescription(_optionIPX04N7)
	});

	it('test for Help', async () => {
		const _HelpNMYaRLP = new Help()
		const _flagsiwu8IDJ = "GjPbrDtj8R8HMQBRGvSv5lWwr";
		const _descriptionCCr5nco = true;
		const _optionVmPqCtK = new Option(_flagsiwu8IDJ, _descriptionCCr5nco)
		const _hideHjgTJtY = false;
		const _returnValuebJs1xjn = await _optionVmPqCtK.hideHelp(_hideHjgTJtY)
		const _returnValuehVkN5Gn = await _optionVmPqCtK.name()
		const _valueQ653dhc = undefined;
		const _descriptionY3M9up0 = undefined;
		const _returnValueV9eebHs = await _optionVmPqCtK.default(_valueQ653dhc, _descriptionY3M9up0)
		const _hideO4Zxyzi = "IrugKRHWunrUaaEf54PMojgMIk5w2u71RIKhGefeBNqV6blXrOTYaaTwCWCUAsJ76p";
		const _returnValueXIc4Agz = await _optionVmPqCtK.hideHelp(_hideO4Zxyzi)
		const _arrayValuedkLSIAB = "VQHAwIUzc67gfzzHLOAYn2JvD5HJTAnDwpk2bzx8QEAsaaqxboOykTBSRBh7krx";
		const _arrayValueTHoEeBo = true;
		const _arrayValuesU24jiO = false;
		const _returnValueewUpcQa = [_arrayValuedkLSIAB, _arrayValueTHoEeBo, _arrayValuesU24jiO]
		const _includesQtF9WQA = () => { return _returnValueewUpcQa };
		const _joinJ7v3RwI = false;
		const _valuesS4Y58h = {
			"includes": _includesQtF9WQA,
		"join": _joinJ7v3RwI
	}
		const _returnValueZmQmOly = await _optionVmPqCtK.choices(_valuesS4Y58h)
		const _returnValueagISsD = await _HelpNMYaRLP.optionTerm(_optionVmPqCtK)
		const _namebGVnIiB = 7.008259992333883;
		const _cmdTyQ0EJo = new Command(_namebGVnIiB)
		const _arrayValueNCryfMH = {
		
	}
		const _arrayValueJs8hduR = "Gz3cOxsx6smcynm5UrvAwRi";
		const _lengthZiosaSM = [_arrayValueNCryfMH, _arrayValueJs8hduR]
		const _receivedArgseuambAp = {
			"length": _lengthZiosaSM
	}
		const _returnValueUEUk9wj = await _cmdTyQ0EJo._excessArguments(_receivedArgseuambAp)
		const _nameJHxIzRN = undefined;
		const _descriptionQlUX5L = "AemPQsGqRJvbst6hb";
		const _argumentbr0F5J6 = new Argument(_nameJHxIzRN, _descriptionQlUX5L)
		const _returnValueBvHTyTd = await _argumentbr0F5J6.argRequired()
		const _arrayValuenEqOH1M = 4.195772144302488;
		const _arrayValuedLAO4Ey = undefined;
		const _valueUdoJddO = [_arrayValuenEqOH1M, _arrayValuedLAO4Ey]
		const _descriptionSCd9ZCt = undefined;
		const _returnValuedkYldFA = await _argumentbr0F5J6.default(_valueUdoJddO, _descriptionSCd9ZCt)
		const _returnValuemBktmX = await _argumentbr0F5J6.argRequired()
		const _returnValueppfKPo = await _cmdTyQ0EJo.addArgument(_argumentbr0F5J6)
		const _returnValueVpsm4Ye = await _HelpNMYaRLP.subcommandTerm(_cmdTyQ0EJo)
	});

	it('test for Help', async () => {
		const _HelpXB2Jte = new Help()
		const _commandsGBrFyVm = {
		
	}
		const _returnValueEEMW5L7 = null;
		const __hasImplicitHelpCommandjowWdwJ = () => { return _returnValueEEMW5L7 };
		const __helpCommandnameAndArgsqIL8OEW = {
		
	}
		const _returnValuetkgXJ4i = true;
		const _createCommandnUeNpPh = () => { return _returnValuetkgXJ4i };
		const __helpCommandDescriptiontf27Np2 = 4.125015530814187;
		const _cmdEfB6qrU = {
			"commands": _commandsGBrFyVm,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandjowWdwJ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsqIL8OEW,
		"createCommand": _createCommandnUeNpPh,
		"_helpCommandDescription": __helpCommandDescriptiontf27Np2
	}
		const _returnValueMqHAwTt = await _HelpXB2Jte.visibleCommands(_cmdEfB6qrU)
	});

	it('test for Help', async () => {
		const _HelpsaapL37 = new Help()
		const __namevS3zU4h = -2.098649123707631;
		const __aliasesAiHy9Kv = {
		
	}
		const _parentnVsK1tN = {
		
	}
		const _returnValuenz9VBcm = true;
		const _usageD8iUtY = () => { return _returnValuenz9VBcm };
		const _cmdLTwAIU = {
			"_name": __namevS3zU4h,
		"_aliases": __aliasesAiHy9Kv,
		"parent": _parentnVsK1tN,
		"usage": _usageD8iUtY
	}
		const _returnValuexLJlZ3D = await _HelpsaapL37.commandUsage(_cmdLTwAIU)
		const _arrayValue4spEMI = 5.672476775748992;
		const _arrayValueA7R3Js8 = "VA3XXmb";
		const _arrayValuefTCAcTJ = null;
		const _argumentckSguQt = [_arrayValue4spEMI, _arrayValueA7R3Js8, _arrayValuefTCAcTJ]
		const _returnValuedqdFwH = await _HelpsaapL37.argumentTerm(_argumentckSguQt)
		const _arrayValueabLXpK = -5.441963027707647;
		const _arrayValuet9lJHAb = "SI";
		const _arrayValueh2wje7i = [_arrayValueabLXpK, _arrayValuet9lJHAb]
		const _arrayValueZPki5hm = {
		
	}
		const _arrayValueRFaLsB3 = true;
		const _arrayValueeeJLWys = "ACBXhbHuH1BCf7C9IS8Z47IqkICzxrV4DAQpW3GRHDf8x548NjJeaxGC7LJC31t2PR6jyQay5FWiHm14LCkg4snNzevu";
		const _flagsWHCJZov = [_arrayValueh2wje7i, _arrayValueZPki5hm, _arrayValueRFaLsB3, _arrayValueeeJLWys]
		const _returnValueesDcnAv = 1.9280146875028166;
		const _descriptiont2fshB8 = () => { return _returnValueesDcnAv };
		const _argumenthrUJKDm = new Option(_flagsWHCJZov, _descriptiont2fshB8)
		const _valueWoTP2f = true;
		const _previousUcbwOxB = "G0mT0QKfAHn7kEe2pyzb7OMujVLe02MMtN2sbKVaDD";
		const _returnValuepaoMTf = await _argumenthrUJKDm._concatValue(_valueWoTP2f, _previousUcbwOxB)
		const _mandatoryi8pJmgY = false;
		const _returnValueeTRSOfT = await _argumenthrUJKDm.makeOptionMandatory(_mandatoryi8pJmgY)
		const _returnValuelwTUuoj = await _HelpsaapL37.argumentTerm(_argumenthrUJKDm)
		const _cmdvikMbAO = 0.562741759766844;
		const _helperlqbXFs = "N5lGLbXdpd";
		const _returnValuexs4laCt = await _HelpsaapL37.formatHelp(_cmdvikMbAO, _helperlqbXFs)
		const _cmdMJWYBZ7 = "exS5IBIxWJYBdkipWKjSrJffOUM9fKebc4W";
		const _returnValuezdiKSal = false;
		const _visibleOptionsfuXM6U = () => { return _returnValuezdiKSal };
		const _arrayValueN7Ssz9A = 7.6226171948224;
		const _arrayValuefnbv2Lr = "8vwj6sII9yG7mNpxi15XKriErYVNJdRuUUC6UlnwfN6AySXzUBJTrPK19Dke2G0ltH9HVTNyqXzpffRj3";
		const _arrayValuel8QeJE9 = "6Iedyn7xMMWxRQT6OVuoEOIQwbiTAx9P";
		const _returnValueW8OU3lB = [_arrayValueN7Ssz9A, _arrayValuefnbv2Lr, _arrayValuel8QeJE9]
		const _optionTermneMZkF1 = () => { return _returnValueW8OU3lB };
		const _helperWm18nm = {
			"visibleOptions": _visibleOptionsfuXM6U,
		"optionTerm": _optionTermneMZkF1
	}
		const _returnValueKXUIV1 = await _HelpsaapL37.longestOptionTermLength(_cmdMJWYBZ7, _helperWm18nm)
	});

	it('test for Help', async () => {
		const _HelphCN12KQ = new Help()
		const _cmdOX81QrP = "pEgq2SpywRwU4UwJp8h1Uf4bT73bpxXlMAfYbfX6BkEO";
		const _returnValueyjGlBk2 = await _HelphCN12KQ.visibleArguments(_cmdOX81QrP)
		const _strGKIv2Od = "bTq3Jk7FUDSBTOBPfgJKD60zYx2iVK1N";
		const _widthYDuIwml = -0.2709936571115037;
		const _indentBjWg52U = -3.1594845938021994;
		const _minColumnWidthu7akiqB = -9.946914546442443;
		const _returnValueTvcMcYy = await _HelphCN12KQ.wrap(_strGKIv2Od, _widthYDuIwml, _indentBjWg52U, _minColumnWidthu7akiqB)
		const _cmd6gHC8J = "wkgeTwPKjp5EjqmqmolrecNL3CLHwnaanukVFwxMyFk96eIV1TWNDy6tb4QS4fzRUmyTCtDlY3AcdFPi35uK8qCLKYBMQXoQ2T";
		const _helperjdiYamJ = undefined;
		const _returnValue8nEPWF = await _HelphCN12KQ.longestArgumentTermLength(_cmd6gHC8J, _helperjdiYamJ)
		const _cmdC6VTk7 = "uI5SPJY81h4BdFYoUrAWQWxrayKuqhbAD";
		const _returnValueO4E2BTw = await _HelphCN12KQ.visibleArguments(_cmdC6VTk7)
		const _cmdenaYXa1 = null;
		const _helperXzbHowB = new Help()
		const _returnValuefo7R6Pb = "IubuJeQaVNvglkszLSfajCwnW9u9";
		const _namereo2MIN = () => { return _returnValuefo7R6Pb };
		const _descriptionhIgBuIu = 8.738903433188035;
		const _argumentEVFi8aB = new Argument(_namereo2MIN, _descriptionhIgBuIu)
		const _valueb227vHY = undefined;
		const _previousU0YjvuY = "9ocs7UzVnmD2KUEHdnS7";
		const _returnValuetfNmzQQ = await _argumentEVFi8aB._concatValue(_valueb227vHY, _previousU0YjvuY)
		const _returnValueAivVnrN = await _argumentEVFi8aB.argRequired()
		const _arrayValueU0NX6NO = "EDoI8sqPzMOQFbvIV2tW42kn8LAqJgROAgl66OAbKivpR2E8rpUZqSbCCxGYzdcp6XkfnkrLSem8Rg6sOvxEFklO8qNsP4";
		const _arrayValueGPuFfTn = [_arrayValueU0NX6NO]
		const _arrayValueKuRkhmZ = [_arrayValueGPuFfTn]
		const _arrayValueIWyKMxA = null;
		const _arrayValuejR9s15 = {
		
	}
		const _valuesx5eZs4Y = [_arrayValueKuRkhmZ, _arrayValueIWyKMxA, _arrayValuejR9s15]
		const _returnValueTTfrjf5 = await _argumentEVFi8aB.choices(_valuesx5eZs4Y)
		const _returnValueIYEljE = await _helperXzbHowB.argumentDescription(_argumentEVFi8aB)
		const _cmdus3oTGA = []
		const _returnValueWo1akSQ = await _helperXzbHowB.visibleOptions(_cmdus3oTGA)
		const _cmdh16glO2 = null;
		const _helpermcT3mM = "IYiYGAvHaKqm5Da0fn4xqJNKaNWEry9TJki5e6C3";
		const _returnValueEHXnqEJ = await _helperXzbHowB.formatHelp(_cmdh16glO2, _helpermcT3mM)
		const _returnValuevAj62h = await _HelphCN12KQ.longestSubcommandTermLength(_cmdenaYXa1, _helperXzbHowB)
	});

	it('test for Help', async () => {
		const _HelpFARMmkx = new Help()
		const __argsDescriptionqxH2xr5 = {
		
	}
		const __argsJdFDtiD = 1.5854110346460963;
		const _cmdoxc8S1L = {
			"_argsDescription": __argsDescriptionqxH2xr5,
		"_args": __argsJdFDtiD
	}
		const _returnValuep7YIDNs = await _HelpFARMmkx.visibleArguments(_cmdoxc8S1L)
		const _argumentJwd4Yw5 = "t480AU2jrpPQpWEbvjad2uh9ssnag8VUCaQGWRywaJO8jGmv8GjEkdgKutjaJmoOJeaOu2NrwW0zYET5f13OHvGU7IV24";
		const _returnValueHPSSXpo = await _HelpFARMmkx.argumentDescription(_argumentJwd4Yw5)
	});

	it('test for Help', async () => {
		const _HelpiCOLoy = new Help()
		const _returnValuezI55dHn = -9.332754664137541;
		const _strJn0IGOW = () => { return _returnValuezI55dHn };
		const _widthF0RiqF = -9.138944400702876;
		const _indentnRJhfuh = 5.894765308674671;
		const _minColumnWidthgn4cvXg = -5.378724802911997;
		const _returnValueb1SwAVG = await _HelpiCOLoy.wrap(_strJn0IGOW, _widthF0RiqF, _indentnRJhfuh, _minColumnWidthgn4cvXg)
		const _cmdhNDbwVt = "RPHVmwotzTabZtqsTG1q65n1K315cmzBrKwWfd";
		const _returnValuexCz2a6u = await _HelpiCOLoy.visibleOptions(_cmdhNDbwVt)
		const _arrayValue72poHf = false;
		const _arrayValuer7kOIml = "SVw88xgoRrhjuk06CHoY7jDkRuC2BkMTIKBgMG8Ui1mIoKC2xM71PfSEwqAsl7a1pa";
		const _returnValueClWnmM8 = -9.945662622154284;
		const _arrayValueFN46bjz = () => { return _returnValueClWnmM8 };
		const _cmdVHhpZpm = [_arrayValue72poHf, _arrayValuer7kOIml, _arrayValueFN46bjz]
		const _helpert5s2F7w = true;
		const _returnValuekHdFos6 = await _HelpiCOLoy.padWidth(_cmdVHhpZpm, _helpert5s2F7w)
		const _nameTbEuDdl = null;
		const _cmdvX8EY7z = new Command(_nameTbEuDdl)
		const _returnValueuEJ4ZIW = "wsmKBbTADx1uK8yYKWvsYAMnXykMXTxFfntHXKpSyJiPpsGHMEcbW0wwLpg3ST";
		const _namecvwvvP3 = () => { return _returnValueuEJ4ZIW };
		const _returnValueSdBqaEu = null;
		const _attributeNameIRbLas = () => { return _returnValueSdBqaEu };
		const _defaultValueNa2xrKB = {
		
	}
		const _negaterdUQyzH = undefined;
		const _arrayValueeIN5cOQ = "Umw1FolQJkUFtEQBf2upAPkJsHdrS8D99BAe9";
		const _returnValueQ17YNSB = [_arrayValueeIN5cOQ]
		const _optional50obFo = () => { return _returnValueQ17YNSB };
		const _requiredG9kP6QF = -7.585625533256756;
		const _longscnugTa = {
		
	}
		const _returnValueBbrpy50 = null;
		const _parseArgiaDKPpt = () => { return _returnValueBbrpy50 };
		const _variadicZj8gY7K = undefined;
		const _returnValueDpsO90 = null;
		const __concatValueHQ642pP = () => { return _returnValueDpsO90 };
		const _arrayValueo77Ki7 = "JTDxPcin4qona8";
		const _arrayValuetW3Gp8S = false;
		const _arrayValueddEmuiB = null;
		const _arrayValuer0QxEVd = "ww47oe6rHNhzdexIJaZp5wi5c4mxBF2rMLAmvXjxymR2306DcIXar9rhr3OUNGlNaCmQV7GdrMYEjfs7pldow";
		const _flagsLHTwmO2 = [_arrayValueo77Ki7, _arrayValuetW3Gp8S, _arrayValueddEmuiB, _arrayValuer0QxEVd]
		const _envVarkqolYsE = "ZHHL3hRcybBlZAlRo";
		const _optionpGadVGa = {
			"name": _namecvwvvP3,
		"attributeName": _attributeNameIRbLas,
		"defaultValue": _defaultValueNa2xrKB,
		"negate": _negaterdUQyzH,
		"optional": _optional50obFo,
		"required": _requiredG9kP6QF,
		"long": _longscnugTa,
		"parseArg": _parseArgiaDKPpt,
		"variadic": _variadicZj8gY7K,
		"_concatValue": __concatValueHQ642pP,
		"flags": _flagsLHTwmO2,
		"envVar": _envVarkqolYsE
	}
		const _returnValueKts3HA4 = await _cmdvX8EY7z.addOption(_optionpGadVGa)
		const _returnValueaN0jibw = {
		
	}
		const _optionACOr2in = () => { return _returnValueaN0jibw };
		const _returnValueqBr4Pcs = await _cmdvX8EY7z.optionMissingArgument(_optionACOr2in)
		const _configurationcAoJzXD = undefined;
		const _returnValuewvj2Dn2 = await _cmdvX8EY7z.configureHelp(_configurationcAoJzXD)
		const _returnValueDZuEeao = await _HelpiCOLoy.subcommandDescription(_cmdvX8EY7z)
	});

	it('test for Help', async () => {
		const _HelpOTHDFpd = new Help()
		const _arrayValueJ71M105 = true;
		const _arrayValuesXylwUl = undefined;
		const _arrayValueVHjujJ3 = -2.908361013878494;
		const _arrayValueeAJ8xAT = [_arrayValueVHjujJ3]
		const _name8AP9DK = [_arrayValueJ71M105, _arrayValuesXylwUl, _arrayValueeAJ8xAT]
		const _descriptionr66OQHK = false;
		const _argumenttAsryow = new Argument(_name8AP9DK, _descriptionr66OQHK)
		const _returnValueHNo3sCc = await _argumenttAsryow.argRequired()
		const _returnValueKDcEYdZ = await _argumenttAsryow.argRequired()
		const _valueKCzIuOz = "AwFGG7snasVTCSQWE5BvzGMfnWaHLSDoyuHG4594UVORuXhWUlVUe6t13hhgC61jIssN7lyCDtNSClQC23IIIAPxgfuhjfK";
		const _descriptionsPkVsg2 = undefined;
		const _returnValuezxB1Ld0 = await _argumenttAsryow.default(_valueKCzIuOz, _descriptionsPkVsg2)
		const _returnValuelH5sJ5 = await _HelpOTHDFpd.argumentDescription(_argumenttAsryow)
		const _cmdg5q1enW = 6.551924421966927;
		const _arrayValueMTDq08 = null;
		const _returnValueWnEZSx = [_arrayValueMTDq08]
		const _visibleArgumentsVMgc3su = () => { return _returnValueWnEZSx };
		const _arrayValueGR82EPT = "d1oQ9Xoc21mDdQt4OIbiMlrtfFy4HzyPjOD1EC3QqirT";
		const _arrayValueYjwK7Xa = null;
		const _arrayValuetkDXFZ3 = false;
		const _arrayValueAYdHxR = [_arrayValueYjwK7Xa, _arrayValuetkDXFZ3]
		const _returnValueEK2BNsI = [_arrayValueGR82EPT, _arrayValueAYdHxR]
		const _argumentTermanefeeN = () => { return _returnValueEK2BNsI };
		const _helperbfHqbPW = {
			"visibleArguments": _visibleArgumentsVMgc3su,
		"argumentTerm": _argumentTermanefeeN
	}
		const _returnValuegSKYgdB = await _HelpOTHDFpd.longestArgumentTermLength(_cmdg5q1enW, _helperbfHqbPW)
		const _cmdVHBDT8n = {
		
	}
		const _helperwlC44qn = "5Nu25CAypFYl";
		const _returnValueFOLYZ0 = await _HelpOTHDFpd.padWidth(_cmdVHBDT8n, _helperwlC44qn)
		const _nameTMrtC4 = undefined;
		const _cmdGMcQQ9M = new Command(_nameTMrtC4)
		const _displayHelpUiHDqPm = true;
		const _returnValueYmfWeZE = await _cmdGMcQQ9M.showHelpAfterError(_displayHelpUiHDqPm)
		const _keym8hIyaR = 8.220517604178227;
		const _returnValueWFPYx7p = await _cmdGMcQQ9M.getOptionValue(_keym8hIyaR)
		const _namekGIQ7xd = {
		
	}
		const _returnValueQ81z4gH = await _cmdGMcQQ9M._findCommand(_namekGIQ7xd)
		const _returnValueg7hh56 = await _HelpOTHDFpd.subcommandTerm(_cmdGMcQQ9M)
	});

	it('test for Help', async () => {
		const _HelpfdLt5U8 = new Help()
		const _arrayValueEf0dfx = undefined;
		const _arrayValuesB9NC4E = null;
		const _argumentGEEkiu2 = [_arrayValueEf0dfx, _arrayValuesB9NC4E]
		const _returnValueiydDgQn = await _HelpfdLt5U8.argumentDescription(_argumentGEEkiu2)
		const _optionsgtvXiEv = {
		
	}
		const _arrayValue3klKOo = "mwnhj4eRCpN35lrbHDfS51QrNovAu4BbxYywxUlIHdXSfH7df6S3xEX9VcbE7orKBnYHuEmoDeJeK6lH3AWOWh9k";
		const _returnValueyGWf5qZ = undefined;
		const _arrayValue8dF6Cm = () => { return _returnValueyGWf5qZ };
		const __hasHelpOptionJaksaeo = [_arrayValue3klKOo, _arrayValue8dF6Cm]
		const __helpShortFlagQrriIbO = false;
		const _returnValueXSxjIrf = true;
		const __findOptionO7JRiiI = () => { return _returnValueXSxjIrf };
		const __helpLongFlagRIlSHNE = undefined;
		const _returnValueuwIgYe = undefined;
		const _createOptionopPNQen = () => { return _returnValueuwIgYe };
		const __helpDescriptionB8ZiAJm = undefined;
		const __helpFlagsneXa7B = 1.6983633812860806;
		const _cmdeLzD3Pr = {
			"options": _optionsgtvXiEv,
		"_hasHelpOption": __hasHelpOptionJaksaeo,
		"_helpShortFlag": __helpShortFlagQrriIbO,
		"_findOption": __findOptionO7JRiiI,
		"_helpLongFlag": __helpLongFlagRIlSHNE,
		"createOption": _createOptionopPNQen,
		"_helpDescription": __helpDescriptionB8ZiAJm,
		"_helpFlags": __helpFlagsneXa7B
	}
		const _returnValueF9rNo8a = await _HelpfdLt5U8.visibleOptions(_cmdeLzD3Pr)
		const _cmdIs35N81 = "tHL5EsXIbm3wcf";
		const _returnValueasLmguP = await _HelpfdLt5U8.commandUsage(_cmdIs35N81)
		const _argumentjvmZc9U = "J1n74m4hx11U0RgxdqvyZeRAGxAoi9Y1QanwocbQ14EHvpNkTgbaibzptyDceSqWcIaUcSFeJz5a4cq7oH9P";
		const _returnValueKH0qde = await _HelpfdLt5U8.argumentDescription(_argumentjvmZc9U)
	});

	it('test for Help', async () => {
		const _HelpYBIZ85y = new Help()
		const _returnValueTB74Mi = false;
		const _descriptionG6JL7Ar = () => { return _returnValueTB74Mi };
		const _cmdaWx8Amv = {
			"description": _descriptionG6JL7Ar
	}
		const _returnValueWUC4gtO = await _HelpYBIZ85y.subcommandDescription(_cmdaWx8Amv)
		const _nameZgef4g = 9.727857698935793;
		const _cmdn9stEQm = new Command(_nameZgef4g)
		const _returnValuesAEodjb = true;
		const _forEachcW3B01c = () => { return _returnValuesAEodjb };
		const _aliasesqOoZIA1 = {
			"forEach": _forEachcW3B01c
	}
		const _returnValuezHpoGXr = await _cmdn9stEQm.aliases(_aliasesqOoZIA1)
		const _returnValued6yvE0g = await _HelpYBIZ85y.visibleOptions(_cmdn9stEQm)
		const _cmdaAbXhBX = "QOjJq8r0jYwbBx2MfEyqviaM96rTw";
		const _returnValueprJDrcF = await _HelpYBIZ85y.subcommandDescription(_cmdaAbXhBX)
	});

	it('test for Help', async () => {
		const _HelppPmUjQ8 = new Help()
		const _returnValueqSV4L52 = null;
		const _optionQPybyhu = () => { return _returnValueqSV4L52 };
		const _returnValueVp98IU3 = await _HelppPmUjQ8.optionDescription(_optionQPybyhu)
		const _returnValuelfMvfPL = "Hl5TfojU9m0xnieCIlBVdazhWaFoAko54WLYLz9sEyAwTkC8svydXAtx5Ui9yNqrGMXg";
		const _matchh6Wtje6 = () => { return _returnValuelfMvfPL };
		const _returnValuejpUyhza = null;
		const _substr01N49q = () => { return _returnValuejpUyhza };
		const _strSt4cQjn = {
			"match": _matchh6Wtje6,
		"substr": _substr01N49q
	}
		const _widthnC0mbDj = -9.136124962888323;
		const _indentLHw8Ff = -7.9656023922958;
		const _minColumnWidthey5RVM = 6.578450358562108;
		const _returnValuentPA3OI = await _HelppPmUjQ8.wrap(_strSt4cQjn, _widthnC0mbDj, _indentLHw8Ff, _minColumnWidthey5RVM)
	});

	it('test for Help', async () => {
		const _HelpXnvbRVU = new Help()
		const _cmdOmnjLjp = false;
		const _sortSubcommandsFldvmZe = "JohpEXmCUE4nB3wPbRF0q2QsK8eNuJ0VMIRTFHFmheeQdbQU18iKy7RyFMu2vyAAJG5MKSN";
		const _returnValueKoZoz9a = "9lP3RP8zNzUWQG7e53x";
		const _subcommandTermlMWcpTx = () => { return _returnValueKoZoz9a };
		const _helperER9NmY = {
			"sortSubcommands": _sortSubcommandsFldvmZe,
		"subcommandTerm": _subcommandTermlMWcpTx
	}
		const _returnValueQWBjhlx = await _HelpXnvbRVU.longestSubcommandTermLength(_cmdOmnjLjp, _helperER9NmY)
		const _cmdYIMbnrn = -5.657322321718283;
		const _returnValueasxbWa6 = false;
		const _visibleArgumentszNZdLVz = () => { return _returnValueasxbWa6 };
		const _returnValueqby1KBF = {
		
	}
		const _argumentTermf2Ctxcf = () => { return _returnValueqby1KBF };
		const _helperKUJPPdW = {
			"visibleArguments": _visibleArgumentszNZdLVz,
		"argumentTerm": _argumentTermf2Ctxcf
	}
		const _returnValueVgCJZWc = await _HelpXnvbRVU.longestArgumentTermLength(_cmdYIMbnrn, _helperKUJPPdW)
		const _arrayValueNVfosst = undefined;
		const _arrayValueQ2WJ84 = -5.196449579786226;
		const _cmdVZatxY = [_arrayValueNVfosst, _arrayValueQ2WJ84]
		const _returnValueumJAtA = await _HelpXnvbRVU.subcommandDescription(_cmdVZatxY)
	});

	it('test for Help', async () => {
		const _HelpyaJ2HUm = new Help()
		const _namekttatws = true;
		const _cmdju4JFYe = new Command(_namekttatws)
		const _lengthL3AlnIJ = undefined;
		const _receivedArgsfcHA4w3 = {
			"length": _lengthL3AlnIJ
	}
		const _returnValueShcofW = await _cmdju4JFYe._excessArguments(_receivedArgsfcHA4w3)
		const _returnValueE0Ie2ua = await _HelpyaJ2HUm.subcommandTerm(_cmdju4JFYe)
		const _optionBsOK5N5 = "8zQI6OmWKO2";
		const _returnValueAfOtKNT = await _HelpyaJ2HUm.optionTerm(_optionBsOK5N5)
	});

	it('test for Help', async () => {
		const _HelpcxHLjDc = new Help()
		const _returnValuedE8yXtL = undefined;
		const _descriptionNu27mIy = () => { return _returnValuedE8yXtL };
		const _cmdEVZhz50 = {
			"description": _descriptionNu27mIy
	}
		const _returnValueIfpUcVH = await _HelpcxHLjDc.commandDescription(_cmdEVZhz50)
		const _returnValueGQ2AAde = true;
		const _descriptionzOro9D = () => { return _returnValueGQ2AAde };
		const _cmdZ6JgsPQ = {
			"description": _descriptionzOro9D
	}
		const _returnValuekHJW6A7 = await _HelpcxHLjDc.commandDescription(_cmdZ6JgsPQ)
		const _nameRlhpXgk = undefined;
		const _cmdAco9cOS = new Command(_nameRlhpXgk)
		const _flagsI94iaHq = "QImxSltqA1keYoaaW2QdifY0TGmjtxET88Ffk8bsM6MAGHd0bCtTKhPt6MsU52yUYCClP27FnX4U0AlUmo8x8wbP7DAe";
		const _descriptionZ0zzjTz = false;
		const _optionulhsIL5 = new Option(_flagsI94iaHq, _descriptionZ0zzjTz)
		const _fnoxMSBCS = undefined;
		const _returnValuem1fdRSJ = await _optionulhsIL5.argParser(_fnoxMSBCS)
		const _nameDJXwEV8 = undefined;
		const _returnValuel1Ymh7V = await _optionulhsIL5.env(_nameDJXwEV8)
		const _hidezmnS7Vd = true;
		const _returnValueXhnug7Z = await _optionulhsIL5.hideHelp(_hidezmnS7Vd)
		const _returnValuen9seIcJ = -2.560277418675109;
		const _valuesQwC2gJG = () => { return _returnValuen9seIcJ };
		const _returnValueZqhWDPG = await _optionulhsIL5.choices(_valuesQwC2gJG)
		const _valueSrZYEGp = null;
		const _returnValueQ9zcn4h = undefined;
		const _arrayValueWAWNyW = () => { return _returnValueQ9zcn4h };
		const _returnValueObSI7VG = {
		
	}
		const _arrayValueq8uT1vW = () => { return _returnValueObSI7VG };
		const _previousHhOXlEx = [_arrayValueWAWNyW, _arrayValueq8uT1vW]
		const _returnValuet3UH2ds = await _optionulhsIL5._concatValue(_valueSrZYEGp, _previousHhOXlEx)
		const _returnValueRICRCo = await _cmdAco9cOS.addOption(_optionulhsIL5)
		const _nameAndArgsVqWBJYg = "BYIOaxhNQVCSM17FXXy18yS3RMHxw6r4iYysyZfv7MH38zGN3RLCgjQx";
		const _actionOptsOrExecDescQAn1OO5 = "lHGKv6bpUILikKVzYrSno4vvzuD8Jcvyg7ZE8Dm5oranRbyNwaDBHCn7gdtscW34";
		const _arrayValueTG2q3lV = "uadHimBeZNubPPcmPy6x2jVcGd";
		const _execOptsn5q9qLA = [_arrayValueTG2q3lV]
		const _returnValuegcqwSi = await _cmdAco9cOS.command(_nameAndArgsVqWBJYg, _actionOptsOrExecDescQAn1OO5, _execOptsn5q9qLA)
		const _returnValueUFw4GhN = await _cmdAco9cOS._processArguments()
		const _returnValueMj0x16U = await _HelpcxHLjDc.visibleOptions(_cmdAco9cOS)
		const _cmdMRZbqpN = null;
		const _longestOptionTermLengthGu7gSsK = -6.776455383351583;
		const _returnValuez7bd9VZ = null;
		const _longestSubcommandTermLengthb8Te480 = () => { return _returnValuez7bd9VZ };
		const _returnValuenApV2SZ = "77";
		const _longestArgumentTermLengthNu0hTA6 = () => { return _returnValuenApV2SZ };
		const _helperliiDSXE = {
			"longestOptionTermLength": _longestOptionTermLengthGu7gSsK,
		"longestSubcommandTermLength": _longestSubcommandTermLengthb8Te480,
		"longestArgumentTermLength": _longestArgumentTermLengthNu0hTA6
	}
		const _returnValuec9Ce89V = await _HelpcxHLjDc.padWidth(_cmdMRZbqpN, _helperliiDSXE)
		const _arrayValueNfu7vdj = -7.258933958428278;
		const _arrayValuezZoOllk = "LjGnYFWB7XrPysw2cU7gXAosR0Sei2I5dZ5acBm3S3nqAfaGg1mA2T8c3BV66i7wIdhuihO6Om7T9DAE6NvjpS6WLrDTtqDeV";
		const _arrayValuetr1a1Km = null;
		const _arrayValueC9AtwH = [_arrayValuetr1a1Km]
		const _arrayValueqybSpEr = null;
		const _arrayValuejnNgxNd = [_arrayValueC9AtwH, _arrayValueqybSpEr]
		const _returnValuejKWuRQ = [_arrayValueNfu7vdj, _arrayValuezZoOllk, _arrayValuejnNgxNd]
		const _cmdxRtAvVd = () => { return _returnValuejKWuRQ };
		const _returnValuelBubHQI = await _HelpcxHLjDc.subcommandDescription(_cmdxRtAvVd)
	});

	it('test for Help', async () => {
		const _HelpUtm3YKx = new Help()
		const _namedOD87fM = {
		
	}
		const _cmdvRhJYIO = new Command(_namedOD87fM)
		const _keyKsdP5Kp = undefined;
		const _valueTFPHWU7 = "XjPFX5gx64gQcWBB2l7oAWHSuUi9JueLjQbcojUYrNT1vxpOoqF";
		const _sourceQrxXQ16 = true;
		const _returnValueiOWuVI = await _cmdvRhJYIO.setOptionValueWithSource(_keyKsdP5Kp, _valueTFPHWU7, _sourceQrxXQ16)
		const _arrayValueYPnDVwN = undefined;
		const _arrayValuePlNTdpd = undefined;
		const _arrayValues5xDat6 = null;
		const _arrayValuelYM7j4 = [_arrayValuePlNTdpd, _arrayValues5xDat6]
		const _arrayValuexI3BnM = [_arrayValuelYM7j4]
		const _arrayValueqptVLX3 = null;
		const _fnhcIUZxq = [_arrayValueYPnDVwN, _arrayValuexI3BnM, _arrayValueqptVLX3]
		const _returnValuezGNPC61 = await _cmdvRhJYIO.action(_fnhcIUZxq)
		const _returnValuernx7iW4 = -8.761782879536645;
		const _subcommandvmdl1FZ = () => { return _returnValuernx7iW4 };
		const _returnValueP6iUxHm = -8.952980204953873;
		const _argshUqcxyz = () => { return _returnValueP6iUxHm };
		const _returnValuebjoXeNB = await _cmdvRhJYIO._executeSubCommand(_subcommandvmdl1FZ, _argshUqcxyz)
		const _returnValuemYDjL4e = await _HelpUtm3YKx.visibleCommands(_cmdvRhJYIO)
	});

	it('test for Help', async () => {
		const _HelpxvHdHml = new Help()
		const _arrayValueFmtWwFM = {
		
	}
		const _arrayValueECETrqx = true;
		const _arrayValueHI0PKYG = null;
		const _returnValueXBKnBMF = false;
		const _arrayValuecPbQtb1 = () => { return _returnValueXBKnBMF };
		const _returnValuejNZzrnk = [_arrayValueFmtWwFM, _arrayValueECETrqx, _arrayValueHI0PKYG, _arrayValuecPbQtb1]
		const _nameVLziUzd = () => { return _returnValuejNZzrnk };
		const _argumentSqLmBD9 = {
			"name": _nameVLziUzd
	}
		const _returnValueauKqtuk = await _HelpxvHdHml.argumentTerm(_argumentSqLmBD9)
		const _returnValuefhjgzb = undefined;
		const _matchST5S7Pn = () => { return _returnValuefhjgzb };
		const _returnValueFGbb2iT = {
		
	}
		const _substrvUvJIIy = () => { return _returnValueFGbb2iT };
		const _strr0aMjGW = {
			"match": _matchST5S7Pn,
		"substr": _substrvUvJIIy
	}
		const _widthbS8k3pr = -3.4380612139820608;
		const _indenthYcOJSq = -9.29683267986768;
		const _minColumnWidthjZ7OeK3 = -6.594747560012168;
		const _returnValuevXazdTm = await _HelpxvHdHml.wrap(_strr0aMjGW, _widthbS8k3pr, _indenthYcOJSq, _minColumnWidthjZ7OeK3)
		const _cmdGVSsku = undefined;
		const _returnValuejprULcb = await _HelpxvHdHml.visibleArguments(_cmdGVSsku)
		const _arrayValueFBy3y5o = true;
		const _arrayValue9Nn1s9 = false;
		const _arrayValuegS4QG6N = undefined;
		const _arrayValueSnrc45J = "qL8wVvmD5Lks5dYjHxKd0sf0KQg0";
		const _arrayValueFU1oL9 = [_arrayValue9Nn1s9, _arrayValuegS4QG6N, _arrayValueSnrc45J]
		const _arrayValuelJtAmqf = 0.3718480005978222;
		const _arrayValueKCvwPZJ = {
		
	}
		const _namefEjGdpI = [_arrayValueFBy3y5o, _arrayValueFU1oL9, _arrayValuelJtAmqf, _arrayValueKCvwPZJ]
		const _cmdDcAqVHV = new Command(_namefEjGdpI)
		const _exitCodeXT9LTIF = "njt42AeCkc86";
		const _codex3DfbKu = null;
		const _messageDaHn2UZ = []
		const _returnValueAGO3qxT = await _cmdDcAqVHV._exit(_exitCodeXT9LTIF, _codex3DfbKu, _messageDaHn2UZ)
		const _aliasNQrZwpF = {
		
	}
		const _returnValueVoTeaC3 = await _cmdDcAqVHV.alias(_aliasNQrZwpF)
		const _applyKxMSsd = 1.4802207169379216;
		const _fnSug232j = {
			"apply": _applyKxMSsd
	}
		const _returnValueAE5MzNA = await _cmdDcAqVHV.action(_fnSug232j)
		const _arrayValueH5DaV1t = "Rdmc3PghuLOTBiH";
		const _arrayValueXRLw1fF = 0.046948850952848176;
		const _arrayValueg8Yvk7W = 4.125427191502853;
		const _arrayValueXTsiHVT = undefined;
		const _returnValuexwtKYP = [_arrayValueg8Yvk7W, _arrayValueXTsiHVT]
		const _arrayValueS9yCPIP = () => { return _returnValuexwtKYP };
		const _nameqqGIyhb = [_arrayValueH5DaV1t, _arrayValueXRLw1fF, _arrayValueS9yCPIP]
		const _returnValueY2mw9OS = await _cmdDcAqVHV.missingArgument(_nameqqGIyhb)
		const _arrayValuevDOciLR = undefined;
		const _returnValuejfHk4uI = [_arrayValuevDOciLR]
		const _contextOptionsHVVqjNi = () => { return _returnValuejfHk4uI };
		const _returnValueENZvfw = await _cmdDcAqVHV.outputHelp(_contextOptionsHVVqjNi)
		const _returnValueg2VjHtA = await _HelpxvHdHml.commandUsage(_cmdDcAqVHV)
	});

	it('test for Help', async () => {
		const _HelpOt4Rj36 = new Help()
		const _argChoicesR96swC = {
		
	}
		const _negateWlrOkrZ = undefined;
		const _defaultValueD7U2yxf = undefined;
		const _defaultValueDescriptionLpshEBc = null;
		const _envVare3wlrzw = undefined;
		const _descriptionsry1WV5 = true;
		const _optionVZLJSuJ = {
			"argChoices": _argChoicesR96swC,
		"negate": _negateWlrOkrZ,
		"defaultValue": _defaultValueD7U2yxf,
		"defaultValueDescription": _defaultValueDescriptionLpshEBc,
		"envVar": _envVare3wlrzw,
		"description": _descriptionsry1WV5
	}
		const _returnValueBhL29Eu = await _HelpOt4Rj36.optionDescription(_optionVZLJSuJ)
		const _cmdXUwJX1v = null;
		const _returnValueA8qy25L = -5.251302074205254;
		const _visibleOptionsCQq7HQi = () => { return _returnValueA8qy25L };
		const _returnValueJe4A3Fg = 0.3954960149823439;
		const _optionTermQxmojWR = () => { return _returnValueJe4A3Fg };
		const _helperqrOtl83 = {
			"visibleOptions": _visibleOptionsCQq7HQi,
		"optionTerm": _optionTermQxmojWR
	}
		const _returnValuezU3UROm = await _HelpOt4Rj36.longestOptionTermLength(_cmdXUwJX1v, _helperqrOtl83)
		const _cmdpfUMzY = "pzsWwYVGkqO7Mxcd4qMjb2jPg37nbujXb";
		const _returnValueylT7V6U = await _HelpOt4Rj36.commandUsage(_cmdpfUMzY)
		const _returnValueabNsteF = -5.191340288449565;
		const _optionWyvoh7C = () => { return _returnValueabNsteF };
		const _returnValueY4IcTP = await _HelpOt4Rj36.optionDescription(_optionWyvoh7C)
	});

	it('test for Help', async () => {
		const _HelpG5uaqZ9 = new Help()
		const _returnValueZZJnuSE = undefined;
		const _matchcL0dqcr = () => { return _returnValueZZJnuSE };
		const _returnValueZa3SXj3 = undefined;
		const _substrFcxHXDL = () => { return _returnValueZa3SXj3 };
		const _strIY2950r = {
			"match": _matchcL0dqcr,
		"substr": _substrFcxHXDL
	}
		const _widthIajDVO = -2.447886287872149;
		const _indentFOVZ4YW = -5.581136521542158;
		const _minColumnWidthiWcSTVe = 7.823645854513693;
		const _returnValueeJ0WxSJ = await _HelpG5uaqZ9.wrap(_strIY2950r, _widthIajDVO, _indentFOVZ4YW, _minColumnWidthiWcSTVe)
		const _returnValuevv4tRSk = 5.4591409385422445;
		const _cmduviWDP = () => { return _returnValuevv4tRSk };
		const _returnValueg3GJWLv = await _HelpG5uaqZ9.subcommandTerm(_cmduviWDP)
		const _argumentycpxxdM = true;
		const _returnValueNPBAH8L = await _HelpG5uaqZ9.argumentTerm(_argumentycpxxdM)
	});

	it('test for Help', async () => {
		const _HelpwY5h3md = new Help()
		const _optionsufx0Ho = "JrJ30tE7VydxYqUGvfLKGoPHyMnnM7PbyMiCtTQQKv5xHF8wDD1n4LrM9pduH9YajYA87pUb";
		const _returnValueIa4TsDe = await _HelpwY5h3md.optionTerm(_optionsufx0Ho)
		const _argChoicesFog4mgQ = {
		
	}
		const _returnValueAHCIAQF = -0.9044616550124402;
		const _negateUQrWYs = () => { return _returnValueAHCIAQF };
		const _defaultValueqWmZpUK = undefined;
		const _defaultValueDescriptionVjhpMR = true;
		const _envVarIPyyTt1 = {
		
	}
		const _descriptionyA2YqTP = false;
		const _optionJGV3H6q = {
			"argChoices": _argChoicesFog4mgQ,
		"negate": _negateUQrWYs,
		"defaultValue": _defaultValueqWmZpUK,
		"defaultValueDescription": _defaultValueDescriptionVjhpMR,
		"envVar": _envVarIPyyTt1,
		"description": _descriptionyA2YqTP
	}
		const _returnValuecPYGUyY = await _HelpwY5h3md.optionDescription(_optionJGV3H6q)
	});

	it('test for Help', async () => {
		const _HelpPJAUmNG = new Help()
		const __namewKeSHpp = "eMpwXbotOFY3OYyfT835ExfMd1t";
		const _arrayValuev5hQKlx = -3.319367054811017;
		const _arrayValueqjLchv = []
		const _arrayValuebhmjnwi = false;
		const _arrayValueC056r9w = [_arrayValueqjLchv, _arrayValuebhmjnwi]
		const __aliasescP5z2eu = [_arrayValuev5hQKlx, _arrayValueC056r9w]
		const _parentB48MHNl = null;
		const _returnValuekOHc2Xx = null;
		const _usagePyS0dI = () => { return _returnValuekOHc2Xx };
		const _cmdsDkR5q4 = {
			"_name": __namewKeSHpp,
		"_aliases": __aliasescP5z2eu,
		"parent": _parentB48MHNl,
		"usage": _usagePyS0dI
	}
		const _returnValueqZQg0St = await _HelpPJAUmNG.commandUsage(_cmdsDkR5q4)
		const _cmdHoC6X6X = null;
		const _sortSubcommandsYj9Bxb = {
		
	}
		const _returnValueMePEX07 = 0.22085571239260204;
		const _subcommandTermDo0FfRg = () => { return _returnValueMePEX07 };
		const _helperNxeZU4c = {
			"sortSubcommands": _sortSubcommandsYj9Bxb,
		"subcommandTerm": _subcommandTermDo0FfRg
	}
		const _returnValuev2nfkAz = await _HelpPJAUmNG.formatHelp(_cmdHoC6X6X, _helperNxeZU4c)
	});

	it('test for Help', async () => {
		const _HelpnHph3Sf = new Help()
		const _flagsGfBy1M8 = "QqjepSSSnfao9ekk71EeUjpFSgfzAVfFs4uiZ2AhOYmnB653RwUQbgw5gdVGrxTAWqjQuxGgZ1jQDMwluF1";
		const _descriptionpjTk8eB = {
		
	}
		const _optionlYPhmIS = new Option(_flagsGfBy1M8, _descriptionpjTk8eB)
		const _valueCpDINyr = []
		const _returnValueSU3CSIt = -8.468039989857933;
		const _concatpbDkcH = () => { return _returnValueSU3CSIt };
		const _previousAGKZErF = {
			"concat": _concatpbDkcH
	}
		const _returnValuek3UP43w = await _optionlYPhmIS._concatValue(_valueCpDINyr, _previousAGKZErF)
		const _valueEALG4JO = []
		const _descriptionRf85TF = undefined;
		const _returnValueiN1SD8f = await _optionlYPhmIS.default(_valueEALG4JO, _descriptionRf85TF)
		const _arrayValueG8l3MQi = "TkJHkohwm";
		const _valueRlmG5EL = [_arrayValueG8l3MQi]
		const _descriptionEo52kRU = undefined;
		const _returnValueK4qT9GZ = await _optionlYPhmIS.default(_valueRlmG5EL, _descriptionEo52kRU)
		const _returnValueXfsaGp = await _HelpnHph3Sf.optionDescription(_optionlYPhmIS)
		const _arrayValuez0Uw7JB = false;
		const _arrayValueqYXCwG5 = null;
		const _arrayValueW8jNoMn = false;
		const _returnValueoXK9vs = [_arrayValuez0Uw7JB, _arrayValueqYXCwG5, _arrayValueW8jNoMn]
		const _cmdinyIXX = () => { return _returnValueoXK9vs };
		const _returnValueqo6zpJT = await _HelpnHph3Sf.commandDescription(_cmdinyIXX)
		const _cmdaqvqH8m = true;
		const _helperlhGhK5 = new Help()
		const _cmdzt0Lrqu = 0.34665614074701523;
		const _helperjcTyWSg = "P3wN8NCwfHoTlAh87wNAM9CuVGx5Mm8fE4igVOMZBiMBhv74sY7caMYS2715WkHyIIHTQ9qUkVbCwsmPgNjnnHmbkD";
		const _returnValuelEXIcQb = await _helperlhGhK5.longestArgumentTermLength(_cmdzt0Lrqu, _helperjcTyWSg)
		const _arrayValueDXyThy = undefined;
		const _arrayValueX6YdKuq = undefined;
		const _cmdx8o9PA = [_arrayValueDXyThy, _arrayValueX6YdKuq]
		const _returnValueElJcefc = await _helperlhGhK5.visibleArguments(_cmdx8o9PA)
		const _returnValueKrUBOO5 = undefined;
		const _descriptiondxYHGpQ = () => { return _returnValueKrUBOO5 };
		const _cmdKwnnGi6 = {
			"description": _descriptiondxYHGpQ
	}
		const _returnValueqRogAJ = await _helperlhGhK5.subcommandDescription(_cmdKwnnGi6)
		const _arrayValueUMr4Xbp = null;
		const _cmdobt5ogl = [_arrayValueUMr4Xbp]
		const _returnValueNlyNFzJ = await _helperlhGhK5.subcommandTerm(_cmdobt5ogl)
		const _returnValueJxCYVvT = await _HelpnHph3Sf.formatHelp(_cmdaqvqH8m, _helperlhGhK5)
	});

	it('test for Help', async () => {
		const _HelpKpKSkkX = new Help()
		const _returnValueb6lN64c = "YGKHZsQnqSG2ekoeQ9NSf2WrjPpAC1Ox5EIkqyMzRa7LhU7e4JJrCiPaaCbvOPrZAAo6FvnlAfJSHg";
		const _descriptionnbNwg6z = () => { return _returnValueb6lN64c };
		const _cmdgDOwBwZ = {
			"description": _descriptionnbNwg6z
	}
		const _returnValuehQXfXy = await _HelpKpKSkkX.commandDescription(_cmdgDOwBwZ)
		const _argumentKira8FJ = "BGIbt1NAynMcXMJVTqYE5ziZauFTqqnJU0eILxzkhic8u7SDKVWCmJwy6d";
		const _returnValueoWSVYmz = await _HelpKpKSkkX.argumentDescription(_argumentKira8FJ)
		const _nameD7vNR6B = "dWP3zjE7NeYfPJzNyUl4aj8ALf7IM";
		const _descriptiongE7ZvPA = -7.7727319438037;
		const _argumentJtJrUsN = new Argument(_nameD7vNR6B, _descriptiongE7ZvPA)
		const _returnValueS0ShIXe = []
		const _valuembVpmch = () => { return _returnValueS0ShIXe };
		const _descriptionYEhRd5r = undefined;
		const _returnValuefcWxFW5 = await _argumentJtJrUsN.default(_valuembVpmch, _descriptionYEhRd5r)
		const _valuezybsT7W = {
		
	}
		const _previous9mdse0 = {
		
	}
		const _returnValuejSgkU7 = await _argumentJtJrUsN._concatValue(_valuezybsT7W, _previous9mdse0)
		const _returnValueT7DSmoA = await _HelpKpKSkkX.argumentDescription(_argumentJtJrUsN)
		const _returnValueRFLLpXu = true;
		const _cmdoalift = () => { return _returnValueRFLLpXu };
		const _returnValueryBqKrm = await _HelpKpKSkkX.subcommandDescription(_cmdoalift)
	});
})