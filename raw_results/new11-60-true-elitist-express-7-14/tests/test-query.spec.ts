export {}
const query = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/middleware/query.js");

describe('query', () => {
	it('test for query', async () => {
		const _arrayValueGvWHHQB = true;
		const _arrayValuenNgOha = false;
		const _arrayValueBPeBxe3 = [_arrayValueGvWHHQB, _arrayValuenNgOha]
		const _optionsqrj75Zh = [_arrayValueBPeBxe3]
		const _returnValueDNrsuBl = await query(_optionsqrj75Zh)
	});

	it('test for query', async () => {
		const _returnValueUBOnhGQ = null;
		const _optionsV9jE93 = () => { return _returnValueUBOnhGQ };
		const _returnValuet2k6ZR1 = await query(_optionsV9jE93)
	});
})