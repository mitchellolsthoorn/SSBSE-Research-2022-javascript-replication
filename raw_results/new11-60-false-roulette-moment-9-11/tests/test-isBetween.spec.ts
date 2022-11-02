export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _returnValuepDgpDD = null;
		const _fromp2S8G87 = () => { return _returnValuepDgpDD };
		const _toLQZWYj = undefined;
		const _unitsQTQaeis = false;
		const _returnValueBFM9fty = -7.183397147848647;
		const _inclusivityQ8HhrWh = () => { return _returnValueBFM9fty };
		const _returnValueJYt8sRC = await isBetween(_fromp2S8G87, _toLQZWYj, _unitsQTQaeis, _inclusivityQ8HhrWh)
	});
})