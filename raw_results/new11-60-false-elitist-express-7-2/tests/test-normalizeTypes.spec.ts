export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthk7wCp9r = 6.752233312956427;
		const _typesABQMLgi = {
			"length": _lengthk7wCp9r
	}
		const _returnValueSQ7P0ag = await normalizeTypes(_typesABQMLgi)
	});

	it('test for normalizeTypes', async () => {
		const _lengthGldfWHI = -3.8652329099293725;
		const _typesOQDwzfL = {
			"length": _lengthGldfWHI
	}
		const _returnValuewUJdOWX = await normalizeTypes(_typesOQDwzfL)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValuebZvcGe = "67zuvkrDr1nzyvB0HK";
		const _arrayValuebdmbZUP = false;
		const _arrayValueApXxurW = [_arrayValuebZvcGe, _arrayValuebdmbZUP]
		const _arrayValue7FGblG = false;
		const _typesqns8ey9 = [_arrayValueApXxurW, _arrayValue7FGblG]
		const _returnValuetPBJ72o = await normalizeTypes(_typesqns8ey9)
	});
})