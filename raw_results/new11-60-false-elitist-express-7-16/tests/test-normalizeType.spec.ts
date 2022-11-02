export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueAp7vwqj = "YSeA";
		const _indexOfZpdqnfd = () => { return _returnValueAp7vwqj };
		const _typec3oLowD = {
			"indexOf": _indexOfZpdqnfd
	}
		const _returnValue2UOpnS = await normalizeType(_typec3oLowD)
	});

	it('test for normalizeType', async () => {
		const _typeRwtfcQW = "NixzOGsjlrjICkLrWVAFpzJWXudbzCyvaT5icpBbHtoXvM9QGSc4ID9tKo8fObyVzh7L1tjx8SfHJkbDbN4qXyseE";
		const _returnValuecoQD7zT = await normalizeType(_typeRwtfcQW)
	});
})