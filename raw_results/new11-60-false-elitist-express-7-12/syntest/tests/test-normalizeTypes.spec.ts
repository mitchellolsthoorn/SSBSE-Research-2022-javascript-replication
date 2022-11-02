export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthZ5CqWU5 = -4.9761806341012775;
		const _typesi3QnixZ = {
			"length": _lengthZ5CqWU5
	}
		const _returnValueSKh6WKR = await normalizeTypes(_typesi3QnixZ)
	});

	it('test for normalizeTypes', async () => {
		const _lengthnpTTFxj = 5.656042728741797;
		const _typesPeLEq1j = {
			"length": _lengthnpTTFxj
	}
		const _returnValueVDM1H4A = await normalizeTypes(_typesPeLEq1j)
	});

	it('test for normalizeTypes', async () => {
		const _typesEgHlVes = "7gsApn1Fk7KeTy1tcgBtNisp4HnvjwKM";
		const _returnValuevOQcdx = await normalizeTypes(_typesEgHlVes)
	});
})