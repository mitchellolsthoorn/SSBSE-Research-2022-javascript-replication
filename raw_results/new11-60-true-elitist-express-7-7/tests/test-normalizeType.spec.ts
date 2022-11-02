export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueSRw1qwv = true;
		const _indexOfp4RQHZ = () => { return _returnValueSRw1qwv };
		const _typekgvVf61 = {
			"indexOf": _indexOfp4RQHZ
	}
		const _returnValueyajHPWl = await normalizeType(_typekgvVf61)
	});

	it('test for normalizeType', async () => {
		const _typexAasvRQ = "K9yXif2TEc1K7XjOavINgqvGLnzrxMnq";
		const _returnValueuH18m17 = await normalizeType(_typexAasvRQ)
	});
})