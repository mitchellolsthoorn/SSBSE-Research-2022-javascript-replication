export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputNns96P = "FajWcNU6OrPdX1Ijjjn0EIrVlm2GDxdOmp7mqlTOOGxNzm8IX2";
		const _unitsuTiOKx = 9.778206314950506;
		const _arrayValueri6DdBg = null;
		const _arrayValuezpqNPdE = false;
		const _arrayValueodWKT9Z = "YbRIcbn5KClkfdjtVTFKeqXmzUiSEXDCYLb431Gsy1XmnchP9sR9P0gCAfiOeuB9EHegeGagr597edWQHrHypKn7";
		const _asFloatPCNXPF3 = [_arrayValueri6DdBg, _arrayValuezpqNPdE, _arrayValueodWKT9Z]
		const _returnValueEuj5jx2 = await diff(_inputNns96P, _unitsuTiOKx, _asFloatPCNXPF3)
	});
})