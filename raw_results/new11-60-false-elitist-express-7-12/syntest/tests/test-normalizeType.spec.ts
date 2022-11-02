export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuedRFXdFO = "IpHCHFbYDcMUEMXz0NjxRRz7EWsXRD1hs3MgXwprsRxLhJodlCLyE8iAhyOkJsNYAQTTnlEALTJQd";
		const _indexOfetA5Q4t = () => { return _returnValuedRFXdFO };
		const _typeWoPfsob = {
			"indexOf": _indexOfetA5Q4t
	}
		const _returnValueFvuGi8g = await normalizeType(_typeWoPfsob)
	});

	it('test for normalizeType', async () => {
		const _typefMbJutZ = "dBg2z";
		const _returnValueBXxVqF0 = await normalizeType(_typefMbJutZ)
	});
})