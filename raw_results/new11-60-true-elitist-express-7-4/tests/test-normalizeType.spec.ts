export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueVnaXyGe = null;
		const _indexOfvp76uXb = () => { return _returnValueVnaXyGe };
		const _typeqPbpNAe = {
			"indexOf": _indexOfvp76uXb
	}
		const _returnValueS4Yrvgj = await normalizeType(_typeqPbpNAe)
	});

	it('test for normalizeType', async () => {
		const _typeFPQVz9c = "LXcDXU9DEVTpBtb9KirtUCTiqvLbQRuPsrYsCIlZtxk0XBvJl0QLgfMs6aeC35dmra3BK";
		const _returnValuefbw9r4R = await normalizeType(_typeFPQVz9c)
	});
})