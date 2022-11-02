export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqysKN7f = req
		const _returnValueL30BvDz = await _reqysKN7f.acceptsCharsets()
		const _returnValuevKC9oO = await _reqysKN7f.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqERTg509 = req
		const _returnValueXc9ZxOn = await _reqERTg509.accepts()
		const _returnValueen9qtM = await _reqERTg509.acceptsEncodings()
		const _namey9Jzzg3 = "9TL19eMeUAF7ymrYlFS2dCOwpzj2uef9vB";
		const _defaultValuevFHW2Cw = true;
		const _returnValueDw3n1G2 = await _reqERTg509.param(_namey9Jzzg3, _defaultValuevFHW2Cw)
	});

	it('test for req', async () => {
		const _reqNzjhqGT = req
		const _sizekdPp6o0 = false;
		const _optionsCmMOiD = "ruBje7ehILIvNPHdmWnDtm3bkvrzp8dsr3zUBKqROR9SPmU3IqeOIz3fy3qntATtf907KCsHNJ0XC2CooO3kFa";
		const _returnValuex9GzS9z = await _reqNzjhqGT.range(_sizekdPp6o0, _optionsCmMOiD)
		const _returnValueEqm5XvJ = await _reqNzjhqGT.accepts()
		const _nameRzmKm4V = true;
		const _returnValuee3dH5Y9 = await _reqNzjhqGT.header(_nameRzmKm4V)
	});

	it('test for req', async () => {
		const _reqk1XgNgv = req
		const _arrayValueKhDcQvV = {
		
	}
		const _returnValueKW44KUz = undefined;
		const _returnValueKJnDpdP = () => { return _returnValueKW44KUz };
		const _arrayValueJfpfRTb = () => { return _returnValueKJnDpdP };
		const _arrayValueaqdKmw = "vbToShCBJ92y4gk9lA5RKBHHPsWmx";
		const _arrayValuemNkgvTR = {
		
	}
		const _size8IIF1z = [_arrayValueKhDcQvV, _arrayValueJfpfRTb, _arrayValueaqdKmw, _arrayValuemNkgvTR]
		const _optionsYGWy6TN = "bwT7H1";
		const _returnValueBSsBEvh = await _reqk1XgNgv.range(_size8IIF1z, _optionsYGWy6TN)
		const _returnValuehGzVRF5 = await _reqk1XgNgv.acceptsCharsets()
		const _typesMbYrn0z = 2.078832452150019;
		const _returnValueEvQjlwb = await _reqk1XgNgv.is(_typesMbYrn0z)
	});

	it('test for req', async () => {
		const _reqjoVvyiW = req
		const _types53Da0G = {
		
	}
		const _returnValuetwzhHH = await _reqjoVvyiW.is(_types53Da0G)
		const _returnValueiHBZUcQ = await _reqjoVvyiW.accepts()
		const _arrayValuejJlV9OF = true;
		const _arrayValueylkRdJq = "Xr9sjd9Q5Ed2nNFhEIQdKi5mIaFzlzrBX47kr4O2cgZlPKdsYrS85gHSmm4";
		const _arrayValuey15otpG = null;
		const _arrayValueXUHIgJK = {
		
	}
		const _arrayValueTsrHzVO = [_arrayValueylkRdJq, _arrayValuey15otpG, _arrayValueXUHIgJK]
		const _typesB4Fr4Xa = [_arrayValuejJlV9OF, _arrayValueTsrHzVO]
		const _returnValueRgPUeJi = await _reqjoVvyiW.is(_typesB4Fr4Xa)
		const _nameRYeXZ7M = "lDb2J2NZECCTzdcvqnyLGZTE8GQl1HRURv2i9mFk7zF6mbl446jRmzCfTbVGl0O";
		const _returnValuezbmrWuz = await _reqjoVvyiW.header(_nameRYeXZ7M)
		const _nameiSq2wm = "V";
		const _returnValuepYOhZIF = await _reqjoVvyiW.header(_nameiSq2wm)
	});
})