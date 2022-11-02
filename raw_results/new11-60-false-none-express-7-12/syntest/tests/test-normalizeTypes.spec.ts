export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _typesU6lqc8i = 7.212949037572301;
		const _returnValueaAUSJZZ = await normalizeTypes(_typesU6lqc8i)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueNZnaX5R = {
		
	}
		const _arrayValuearmXbDB = false;
		const _arrayValuejIAihuW = null;
		const _typesfzWaN3 = [_arrayValueNZnaX5R, _arrayValuearmXbDB, _arrayValuejIAihuW]
		const _returnValuePLHdrJ = await normalizeTypes(_typesfzWaN3)
	});

	it('test for normalizeTypes', async () => {
		const _typesknsSld8 = "dTdyfWOLYYwAavwXEX39vvGpF5o99xM2TvGqB1Y3PFx11SOuixbUVnNEku2LCO7EwtYgpm";
		const _returnValuefgOygbA = await normalizeTypes(_typesknsSld8)
	});
})