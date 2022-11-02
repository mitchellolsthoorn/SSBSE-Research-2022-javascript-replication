export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValueq120g1K = undefined;
		const _typerFVP6AK = [_arrayValueq120g1K]
		const _returnValuev1Nfi29 = await normalizeType(_typerFVP6AK)
	});
})