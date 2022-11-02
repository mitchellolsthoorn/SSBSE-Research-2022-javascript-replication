export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueaMU9TSu = -8.641555887805357;
		const _indexOfnLSjkRd = () => { return _returnValueaMU9TSu };
		const _typeMXZIYkh = {
			"indexOf": _indexOfnLSjkRd
	}
		const _returnValuemW2iIO = await normalizeType(_typeMXZIYkh)
	});

	it('test for normalizeType', async () => {
		const _arrayValuelzHBcjU = "fGJBzcIDHcn053ptXPX3";
		const _arrayValue5Qirba = undefined;
		const _typehJ5lUIR = [_arrayValuelzHBcjU, _arrayValue5Qirba]
		const _returnValueBwT4FK = await normalizeType(_typehJ5lUIR)
	});
})