export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromLMlnOqU = "O86LkjLPp6C86dG12ppahAEoTXoCEpaZIkot";
		const _to0zONV2 = null;
		const _unitsdYaLSb = -4.073450353383908;
		const _inclusivityD1x2z31 = false;
		const _returnValueFg4qEmg = await isBetween(_fromLMlnOqU, _to0zONV2, _unitsdYaLSb, _inclusivityD1x2z31)
	});
})