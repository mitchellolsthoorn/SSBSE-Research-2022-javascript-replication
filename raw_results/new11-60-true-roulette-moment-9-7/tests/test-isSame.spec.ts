export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputk9fqbji = "7Gid2y0MjpFxwJ4m";
		const _unitsedGb9Y = "qpPXCGvG5THMgsTbicpugVnXfTEqwWPHg5M15R3ouu18uirU8v6DWH0a9M";
		const _returnValueDjcxL7A = await isSame(_inputk9fqbji, _unitsedGb9Y)
	});

	it('test for isSame', async () => {
		const _inputU2V9Dz = true;
		const _unitssnOXgXe = "1awdhQp6eYOMBXAySDCmEA1Hf5DRhGZUqWeKXNNPfIsjpGX89i94tmqfoULDjYK367V4CGlKXILP4mPoOPmm2";
		const _returnValueJyGlTsS = await isSame(_inputU2V9Dz, _unitssnOXgXe)
	});
})