export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfreVPlWK = undefined;
		const _typePvCSKXe = {
			"indexOf": _indexOfreVPlWK
	}
		const _returnValueVVQ3KZz = await normalizeType(_typePvCSKXe)
	});

	it('test for normalizeType', async () => {
		const _returnValueBgbwMJO = true;
		const _indexOfXoLJtd = () => { return _returnValueBgbwMJO };
		const _typeVtjKKwQ = {
			"indexOf": _indexOfXoLJtd
	}
		const _returnValueJHa5v2d = await normalizeType(_typeVtjKKwQ)
	});

	it('test for normalizeType', async () => {
		const _returnValuej7wwkXN = undefined;
		const _arrayValueHrfujWE = () => { return _returnValuej7wwkXN };
		const _arrayValueypv4f6s = -6.10022838909632;
		const _returnValuePxaRikC = [_arrayValueHrfujWE, _arrayValueypv4f6s]
		const _arrayValueaOKb92x = () => { return _returnValuePxaRikC };
		const _arrayValueegqUoys = []
		const _arrayValueDsv84se = undefined;
		const _arrayValueeMY9RDv = false;
		const _typebCPfFol = [_arrayValueaOKb92x, _arrayValueegqUoys, _arrayValueDsv84se, _arrayValueeMY9RDv]
		const _returnValueWoXt8ux = await normalizeType(_typebCPfFol)
	});
})