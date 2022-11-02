export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfNbB9zw9 = false;
		const _typevysJluI = {
			"indexOf": _indexOfNbB9zw9
	}
		const _returnValuevIUuMBW = await normalizeType(_typevysJluI)
	});

	it('test for normalizeType', async () => {
		const _returnValueEoBHAV3 = true;
		const _indexOfSCy6wF1 = () => { return _returnValueEoBHAV3 };
		const _typeWfuCa9A = {
			"indexOf": _indexOfSCy6wF1
	}
		const _returnValuecYBjgnj = await normalizeType(_typeWfuCa9A)
	});

	it('test for normalizeType', async () => {
		const _returnValueOxTsTFP = -1.1028253995489834;
		const _indexOfIsbjZ0Y = () => { return _returnValueOxTsTFP };
		const _typeUF8RJXi = {
			"indexOf": _indexOfIsbjZ0Y
	}
		const _returnValueiFOWOc = await normalizeType(_typeUF8RJXi)
	});
})