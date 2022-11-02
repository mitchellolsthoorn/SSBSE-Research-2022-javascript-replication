export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthxsV7RbR = 3.6646933205011436;
		const _typesVVxJ1KE = {
			"length": _lengthxsV7RbR
	}
		const _returnValueq0ffdVa = await normalizeTypes(_typesVVxJ1KE)
	});

	it('test for normalizeTypes', async () => {
		const _returnValuejh8sXIW = {
		
	}
		const _typesFWcOu9S = () => { return _returnValuejh8sXIW };
		const _returnValueeQ0YI0U = await normalizeTypes(_typesFWcOu9S)
	});

	it('test for normalizeTypes', async () => {
		const _typesdXdBCPQ = "vj9ydXlStSZn1WfCLI3Udx";
		const _returnValuefA3nZx = await normalizeTypes(_typesdXdBCPQ)
	});
})