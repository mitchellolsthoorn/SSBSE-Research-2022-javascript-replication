export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengtht3clCq5 = -8.23910743072046;
		const _typesFJ1CrfO = {
			"length": _lengtht3clCq5
	}
		const _returnValuehdUrySZ = await normalizeTypes(_typesFJ1CrfO)
	});

	it('test for normalizeTypes', async () => {
		const _lengthNobKXDP = 8.314855490774175;
		const _typesQfA6dOS = {
			"length": _lengthNobKXDP
	}
		const _returnValueOkz1n4p = await normalizeTypes(_typesQfA6dOS)
	});

	it('test for normalizeTypes', async () => {
		const _typeswDsv0fp = "SxpOo6dJaFjgFD4qZvcneVTL9RAPPbeidOq4oVzQhVe6m2NtY6mYsxfzMUxCrBIs";
		const _returnValueuFUsXb4 = await normalizeTypes(_typeswDsv0fp)
	});
})