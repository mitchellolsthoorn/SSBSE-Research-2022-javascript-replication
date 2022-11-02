export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfUkNZ09 = null;
		const _typespbmWLt = {
			"indexOf": _indexOfUkNZ09
	}
		const _returnValueWryfwW1 = await normalizeType(_typespbmWLt)
	});

	it('test for normalizeType', async () => {
		const _returnValuepJ2OH5E = {
		
	}
		const _indexOfHs3g56f = () => { return _returnValuepJ2OH5E };
		const _typeNAgGclF = {
			"indexOf": _indexOfHs3g56f
	}
		const _returnValuemfj4m3 = await normalizeType(_typeNAgGclF)
	});

	it('test for normalizeType', async () => {
		const _arrayValuep84FWgY = null;
		const _arrayValuesn16tf = true;
		const _typehHrF7Y0 = [_arrayValuep84FWgY, _arrayValuesn16tf]
		const _returnValuecXdYxm = await normalizeType(_typehHrF7Y0)
	});
})