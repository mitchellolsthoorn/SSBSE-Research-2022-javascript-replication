export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromg0WuUMj = false;
		const _tofp0ISLM = "KQXLTDNy0SpBTboSzJ6LBgBWCmBga14po6IC1RB5to5PIyIUip1bUFHDQ0zfWo3FsCB48YiNmrLejeg4";
		const _unitscYVkthE = true;
		const _inclusivitydAY5dxV = true;
		const _returnValuevp6IHjb = await isBetween(_fromg0WuUMj, _tofp0ISLM, _unitscYVkthE, _inclusivitydAY5dxV)
	});
})