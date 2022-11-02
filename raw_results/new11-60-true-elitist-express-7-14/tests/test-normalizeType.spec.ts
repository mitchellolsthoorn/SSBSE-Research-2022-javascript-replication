export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfA0v5A2z = "ASbWBIxymenUmpnhbIxSKQc0xh4Mhqfs3cxMOqVo61H1KBvdWkFf7TLWPIMtt77llxf5HTXgoA";
		const _typejJ8hE76 = {
			"indexOf": _indexOfA0v5A2z
	}
		const _returnValuehPzhjT = await normalizeType(_typejJ8hE76)
	});

	it('test for normalizeType', async () => {
		const _arrayValuePYkEIf0 = {
		
	}
		const _arrayValueposz57S = null;
		const _arrayValueYWpkYZ2 = false;
		const _arrayValueKg0I2e2 = [_arrayValuePYkEIf0, _arrayValueposz57S, _arrayValueYWpkYZ2]
		const _arrayValuebTY2Hoy = {
		
	}
		const _arrayValueeO2ppyW = false;
		const _typeIpEDFkv = [_arrayValueKg0I2e2, _arrayValuebTY2Hoy, _arrayValueeO2ppyW]
		const _returnValuebb53PFC = await normalizeType(_typeIpEDFkv)
	});

	it('test for normalizeType', async () => {
		const _returnValueF6JTKZg = "BjrBosMDBr4X3fVCxV8pddnWKI3rzM3tt98heEtIjqv5EmuIFN3jTS7PxOhiQmpfrLXh7Sf";
		const _returnValuem3FRBG4 = () => { return _returnValueF6JTKZg };
		const _indexOfxKv7zr9 = () => { return _returnValuem3FRBG4 };
		const _typeRkU3Xl = {
			"indexOf": _indexOfxKv7zr9
	}
		const _returnValuePe3OMM = await normalizeType(_typeRkU3Xl)
	});
})