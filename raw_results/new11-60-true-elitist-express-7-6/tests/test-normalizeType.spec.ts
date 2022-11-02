export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueUYnCST = true;
		const _indexOfhqDPOcx = () => { return _returnValueUYnCST };
		const _typenzvcZXZ = {
			"indexOf": _indexOfhqDPOcx
	}
		const _returnValuelau7ZJR = await normalizeType(_typenzvcZXZ)
	});

	it('test for normalizeType', async () => {
		const _arrayValueRMqLlzT = "Ssuha6Ld8kozISWrnAkLZVdFIxQryMRi9mfMy9aSYsZGRY6zwwv5F";
		const _arrayValueHwRGnS1 = 3.2954051316449977;
		const _arrayValueCXVdzHZ = undefined;
		const _typeZehZ9q4 = [_arrayValueRMqLlzT, _arrayValueHwRGnS1, _arrayValueCXVdzHZ]
		const _returnValuemXfmYxY = await normalizeType(_typeZehZ9q4)
	});
})