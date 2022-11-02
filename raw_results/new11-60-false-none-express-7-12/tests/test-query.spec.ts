export {}
const query = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/middleware/query.js");

describe('query', () => {
	it('test for query', async () => {
		const _arrayValueX1qdQHJ = true;
		const _optionscK86f5C = [_arrayValueX1qdQHJ]
		const _returnValuee13g9gL = await query(_optionscK86f5C)
	});

	it('test for query', async () => {
		const _returnValueCQAwwHm = undefined;
		const _optionsEvjdzl = () => { return _returnValueCQAwwHm };
		const _returnValuexiRUr38 = await query(_optionsEvjdzl)
	});
})