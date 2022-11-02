export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsM8ECXBw = "NQ5ZqA38fXziLX735CzaCHjyhi";
		const _descriptionPRoCv6r = undefined;
		const _Optionog0JZZK = new Option(_flagsM8ECXBw, _descriptionPRoCv6r)
		const _value1wlWO6 = undefined;
		const _arrayValueivhKU9L = 6.8071048710424655;
		const _arrayValueIFTMP37 = "fHz7lwwaO3wcc5ZfxxhIidoS3GWfkWJbyOuGYa5sMdqAm";
		const _arrayValueDFgCifb = {
		
	}
		const _arrayValueh08GnV = -9.907673534032488;
		const _arrayValuex7qWgv9 = [_arrayValueh08GnV]
		const _previousPClSYS0 = [_arrayValueivhKU9L, _arrayValueIFTMP37, _arrayValueDFgCifb, _arrayValuex7qWgv9]
		const _returnValueJEKLTYq = await _Optionog0JZZK._concatValue(_value1wlWO6, _previousPClSYS0)
		const _hideVnjnNSe = false;
		const _returnValueKq2h4B8 = await _Optionog0JZZK.hideHelp(_hideVnjnNSe)
		const _returnValueE5bE45A = false;
		const _valuesXMe1gNZ = () => { return _returnValueE5bE45A };
		const _returnValueOvvjztR = await _Optionog0JZZK.choices(_valuesXMe1gNZ)
		const _valueANUHp9 = undefined;
		const _returnValuefyJN1Mj = true;
		const _previousYJfC0Q = () => { return _returnValuefyJN1Mj };
		const _returnValueATbRkeo = await _Optionog0JZZK._concatValue(_valueANUHp9, _previousYJfC0Q)
	});

	it('test for Option', async () => {
		const _flagsqX4sd2c = "k9s4q84SPA46JRgbHoO8DNFmajBe57xdPHvWmiyqHWsuKK8TT2faJRQ2F9iulJnpgfYXt";
		const _arrayValueEgtVmlq = "2yHpqQtSw6";
		const _descriptionDAusZ6s = [_arrayValueEgtVmlq]
		const _OptionEjnNVs = new Option(_flagsqX4sd2c, _descriptionDAusZ6s)
		const _valuesbgbpYh = undefined;
		const _descriptionDctkMkv = {
		
	}
		const _returnValueX0A0OHr = await _OptionEjnNVs.default(_valuesbgbpYh, _descriptionDctkMkv)
		const _fnS3Qs3xS = undefined;
		const _returnValueP1WjFWq = await _OptionEjnNVs.argParser(_fnS3Qs3xS)
		const _returnValuenIDGYmr = await _OptionEjnNVs.attributeName()
		const _fnC6yYjGL = undefined;
		const _returnValueSwiGFvw = await _OptionEjnNVs.argParser(_fnC6yYjGL)
	});

	it('test for Option', async () => {
		const _flagsUxORIpn = "dcesdK8E5H2IP3A0izwtuGWi4pknCvQEVq";
		const _arrayValuePtQnWT = undefined;
		const _descriptiontXpDq8I = [_arrayValuePtQnWT]
		const _OptionCxttpCi = new Option(_flagsUxORIpn, _descriptiontXpDq8I)
		const _nameoYaH2q5 = undefined;
		const _returnValue0Yw34Q = await _OptionCxttpCi.env(_nameoYaH2q5)
		const _returnValueIa9RZIU = await _OptionCxttpCi.name()
		const _mandatoryOGFK9xI = false;
		const _returnValueWtb2P2K = await _OptionCxttpCi.makeOptionMandatory(_mandatoryOGFK9xI)
		const _fnGhBH8u3 = undefined;
		const _returnValuenNaBIpT = await _OptionCxttpCi.argParser(_fnGhBH8u3)
	});

	it('test for Option', async () => {
		const _flagsv6eeKwU = "qIXJ6W44YSyhMH";
		const _descriptionIwz1bIZ = null;
		const _OptionbDPsa6f = new Option(_flagsv6eeKwU, _descriptionIwz1bIZ)
		const _fnnoiS45k = undefined;
		const _returnValueZm8a6Jq = await _OptionbDPsa6f.argParser(_fnnoiS45k)
		const _argzFBCJi6 = {
		
	}
		const _returnValuehfFlOcB = await _OptionbDPsa6f.is(_argzFBCJi6)
	});
})