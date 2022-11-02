export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuefFzvx6z = null;
		const _indexOfRATCiyC = () => { return _returnValuefFzvx6z };
		const _typeuqOrzKo = {
			"indexOf": _indexOfRATCiyC
	}
		const _returnValueCyzcMDZ = await normalizeType(_typeuqOrzKo)
	});

	it('test for normalizeType', async () => {
		const _arrayValueImPtSHr = 3.0554693875138135;
		const _arrayValueAuvzNN = -0.47271058117330966;
		const _arrayValues8PqB2T = undefined;
		const _typejsM8dUv = [_arrayValueImPtSHr, _arrayValueAuvzNN, _arrayValues8PqB2T]
		const _returnValuekpcdbXF = await normalizeType(_typejsM8dUv)
	});
})