export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsZ6IShZO = "iTLV34GA8DfdqAQ4CxIQC5wQ2hxdXBqD3DbbZHlE7uBWw3p";
		const _arrayValueB6LS05a = true;
		const _arrayValueGCo987s = 3.729425983490845;
		const _descriptionIohRLg6 = [_arrayValueB6LS05a, _arrayValueGCo987s]
		const _OptionVPvnl4a = new Option(_flagsZ6IShZO, _descriptionIohRLg6)
		const _mandatoryxhpYWdZ = -0.5348123799001332;
		const _returnValuep25rwm0 = await _OptionVPvnl4a.makeOptionMandatory(_mandatoryxhpYWdZ)
		const _arg3C41lL = null;
		const _returnValueWGFgFb5 = await _OptionVPvnl4a.is(_arg3C41lL)
	});

	it('test for Option', async () => {
		const _flagsPcml7Hg = "ZvjDYifHpT5dTpWv9wcxb26nYbVVns1W4CYNXQCMpNrNDZVEtKuC6cEFis1PxcrKzIvzK1";
		const _descriptionXedpV5T = true;
		const _OptionNL2tkPZ = new Option(_flagsPcml7Hg, _descriptionXedpV5T)
		const _nameCZCS96n = 9.389154447951736;
		const _returnValueGEfrGE = await _OptionNL2tkPZ.env(_nameCZCS96n)
	});

	it('test for Option', async () => {
		const _flagsoNryHir = "3Yrz5rjVYuWxoykpNuHhrYe6fLLeXAbZyBzQ9yQ3JbCyzFyKDulSKUUeccB4HmfhVSFQCxUEpFFNvoMeGbUD1d27ajj";
		const _descriptionSAUdWGG = {
		
	}
		const _OptioniuxQbwk = new Option(_flagsoNryHir, _descriptionSAUdWGG)
		const _returnValueDVJSPbC = await _OptioniuxQbwk.name()
		const _valuesh97tHGH = -5.389895615317284;
		const _returnValueUb1pWKn = await _OptioniuxQbwk.choices(_valuesh97tHGH)
		const _mandatoryHl94VzU = null;
		const _returnValuegaeQs4x = await _OptioniuxQbwk.makeOptionMandatory(_mandatoryHl94VzU)
		const _hidexp1dXul = true;
		const _returnValuenBKvZDb = await _OptioniuxQbwk.hideHelp(_hidexp1dXul)
		const _argC17fa5v = undefined;
		const _returnValueK3JhUSV = await _OptioniuxQbwk.is(_argC17fa5v)
	});

	it('test for Option', async () => {
		const _flagsilZ6UCZ = "gbvcskAUcRgTU3ztkzHwdFCHZAGoaY6GVjUvYjO9aEMq9vGgqEEz0PlAw1VoGbgfGU";
		const _descriptionfrPqCI = null;
		const _OptionMCheeM4 = new Option(_flagsilZ6UCZ, _descriptionfrPqCI)
		const _hideChmoyf9 = undefined;
		const _returnValueLRjjdjE = await _OptionMCheeM4.hideHelp(_hideChmoyf9)
		const _returnValue8O6zmj = await _OptionMCheeM4.name()
		const _value5m98xP = null;
		const _previoustFMbPi = false;
		const _returnValue2y4Kta = await _OptionMCheeM4._concatValue(_value5m98xP, _previoustFMbPi)
		const _returnValueHnDpnE9 = await _OptionMCheeM4.attributeName()
		const _returnValueTXuxFkb = await _OptionMCheeM4.attributeName()
	});

	it('test for Option', async () => {
		const _flagsDOVQqsP = "GVRp67IAUlwMLH5Xs8v3TjNfzKahEwlDIpHIe2XfddGkl3jqFqy0sgiVmcP9bBNO8RVfgJ4KiWx3";
		const _descriptionYxMkTfy = "DtxbufAefRn3EfL1ChackVnxb7Y3YN4N1gt2IbHKzVouVrtCTxXucg9hK3Ocv43u2TuHrKnRWrInjp";
		const _OptionRvSJfan = new Option(_flagsDOVQqsP, _descriptionYxMkTfy)
		const _fngTgUDMf = undefined;
		const _returnValueIVB42Ri = await _OptionRvSJfan.argParser(_fngTgUDMf)
		const _returnValueqv226BR = await _OptionRvSJfan.attributeName()
	});

	it('test for Option', async () => {
		const _flagsNQjkUA = "Xd3a620gm2qSjoFBFNq";
		const _returnValueITuRVe5 = "xbOYD3rO9lFssfakVWwUpQ3rjurSUqqkyl";
		const _descriptionAYb6G1f = () => { return _returnValueITuRVe5 };
		const _Optionse63fVa = new Option(_flagsNQjkUA, _descriptionAYb6G1f)
		const _returnValueLyt7XOH = await _Optionse63fVa.attributeName()
		const _valuei0aYOhb = null;
		const _arrayValueWaMqfZ4 = undefined;
		const _arrayValueMiVqBJN = true;
		const _descriptionylFjqo9 = [_arrayValueWaMqfZ4, _arrayValueMiVqBJN]
		const _returnValueWYfQvH3 = await _Optionse63fVa.default(_valuei0aYOhb, _descriptionylFjqo9)
	});

	it('test for Option', async () => {
		const _flagsPvDjuCu = "qs";
		const _descriptioncKDul8 = undefined;
		const _OptionMfl17wa = new Option(_flagsPvDjuCu, _descriptioncKDul8)
		const _nameCszh1w = "l0ES13muE0QWEFCdlopEFep4evoLkNkwPX";
		const _returnValuecMjs14F = await _OptionMfl17wa.env(_nameCszh1w)
		const _mandatoryOEiOxMU = null;
		const _returnValueJui9nPH = await _OptionMfl17wa.makeOptionMandatory(_mandatoryOEiOxMU)
		const _hideUCz3dzD = false;
		const _returnValueyTFLoy = await _OptionMfl17wa.hideHelp(_hideUCz3dzD)
		const _valueDwZRlIW = "PUHXEX1e1hnL5atj7JRfqfc4q6c";
		const _arrayValuemA592e = true;
		const _previousKu6CG1z = [_arrayValuemA592e]
		const _returnValueUovAwRR = await _OptionMfl17wa._concatValue(_valueDwZRlIW, _previousKu6CG1z)
		const _nameXytc0fP = null;
		const _returnValuezRJo9VE = await _OptionMfl17wa.env(_nameXytc0fP)
	});
})