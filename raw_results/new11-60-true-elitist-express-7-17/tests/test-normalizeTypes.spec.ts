export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthZteUpK2 = 9.927836746144486;
		const _typescuNcDjC = {
			"length": _lengthZteUpK2
	}
		const _returnValuesmx6lPt = await normalizeTypes(_typescuNcDjC)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueggsztnJ = "y5OsX";
		const _arrayValued2D74G = [_arrayValueggsztnJ]
		const _arrayValueVz23wb = undefined;
		const _arrayValueK7O1F0W = 5.585090072273042;
		const _typesKYeeLhE = [_arrayValued2D74G, _arrayValueVz23wb, _arrayValueK7O1F0W]
		const _returnValueMs7s54b = await normalizeTypes(_typesKYeeLhE)
	});

	it('test for normalizeTypes', async () => {
		const _lengthdhHD0fO = -9.594047455658593;
		const _typesxsfOE1m = {
			"length": _lengthdhHD0fO
	}
		const _returnValueTXJFun = await normalizeTypes(_typesxsfOE1m)
	});
})