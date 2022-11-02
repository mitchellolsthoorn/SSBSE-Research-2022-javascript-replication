export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthm7pAfbd = 4.689442108064446;
		const _typesQEe8u5F = {
			"length": _lengthm7pAfbd
	}
		const _returnValueCDJ80gw = await normalizeTypes(_typesQEe8u5F)
	});

	it('test for normalizeTypes', async () => {
		const _lengthk1HvDi0 = -3.706931332084152;
		const _typesDmG71BR = {
			"length": _lengthk1HvDi0
	}
		const _returnValuetm1S13 = await normalizeTypes(_typesDmG71BR)
	});

	it('test for normalizeTypes', async () => {
		const _typesCCItfkC = "KULCKAgEQfFZSsf3CYNXhcSpOt4yq5IKr";
		const _returnValuel1igAMQ = await normalizeTypes(_typesCCItfkC)
	});
})