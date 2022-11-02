export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthmSFThjr = 8.32551280795132;
		const _typesTpZUGPp = {
			"length": _lengthmSFThjr
	}
		const _returnValuehpxYrTN = await normalizeTypes(_typesTpZUGPp)
	});

	it('test for normalizeTypes', async () => {
		const _lengthUWu9zzb = -5.698641348787826;
		const _typesArmEAW = {
			"length": _lengthUWu9zzb
	}
		const _returnValuevEzrLlt = await normalizeTypes(_typesArmEAW)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueCdTgCdc = "kGOPmVaLPx3";
		const _arrayValueh7lAp4 = 7.946434830555688;
		const _arrayValueSbB5QC5 = 0.047061883715224795;
		const _arrayValue6XBqLo = [_arrayValueh7lAp4, _arrayValueSbB5QC5]
		const _arrayValueo1pVSYM = "FGePCLCJfop5WDAisl4WL67QVAdT4IIYY3SF3PKirbtrdY0w6JBUKCaeuFictERNOTs2IUkroiAb964CCZjYokYU3n71";
		const _arrayValueaJGkTbM = null;
		const _arrayValueeslJDd7 = 7.31775731889352;
		const _arrayValueuFBvwjm = [_arrayValue6XBqLo, _arrayValueo1pVSYM, _arrayValueaJGkTbM, _arrayValueeslJDd7]
		const _arrayValueHl6jlaq = [_arrayValueuFBvwjm]
		const _arrayValueSaKPPg = null;
		const _typesfy8muzG = [_arrayValueCdTgCdc, _arrayValueHl6jlaq, _arrayValueSaKPPg]
		const _returnValueXfY3A8 = await normalizeTypes(_typesfy8muzG)
	});
})