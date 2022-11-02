export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfk4UEfMP = "gnrxbtQjKROwA2trxoWMKNUsM7m718dlaiYEyQm7qhx";
		const _typerzoxNNd = {
			"indexOf": _indexOfk4UEfMP
	}
		const _returnValueYBaZ6p7 = await normalizeType(_typerzoxNNd)
	});

	it('test for normalizeType', async () => {
		const _returnValueMLbolLj = undefined;
		const _indexOfCKfgtZL = () => { return _returnValueMLbolLj };
		const _typeYC8dUcv = {
			"indexOf": _indexOfCKfgtZL
	}
		const _returnValuekAriuHh = await normalizeType(_typeYC8dUcv)
	});

	it('test for normalizeType', async () => {
		const _typeqTmqXUX = "8x1";
		const _returnValueF5HQH25 = await normalizeType(_typeqTmqXUX)
	});
})