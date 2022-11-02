export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuewumfmdD = 9.303839335166558;
		const _indexOfzthK1da = () => { return _returnValuewumfmdD };
		const _typeDAhBQPJ = {
			"indexOf": _indexOfzthK1da
	}
		const _returnValueUSpr4lc = await normalizeType(_typeDAhBQPJ)
	});

	it('test for normalizeType', async () => {
		const _arrayValueuoYcYQE = []
		const _typegWAZK2I = [_arrayValueuoYcYQE]
		const _returnValuea2YSVVh = await normalizeType(_typegWAZK2I)
	});
})