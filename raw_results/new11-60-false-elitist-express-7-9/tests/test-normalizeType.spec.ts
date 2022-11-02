export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _indexOfYzuslKe = "ev1nBIwhQ0Gu3SPTGMBSrVlQ4fIIV7CpSHDF6MekU2I";
		const _typeM52q3Pc = {
			"indexOf": _indexOfYzuslKe
	}
		const _returnValuetwPmQ6U = await normalizeType(_typeM52q3Pc)
	});

	it('test for normalizeType', async () => {
		const _returnValuevGVmVb0 = []
		const _indexOfmtTOK0m = () => { return _returnValuevGVmVb0 };
		const _typeag1xITS = {
			"indexOf": _indexOfmtTOK0m
	}
		const _returnValue6Zwi7r = await normalizeType(_typeag1xITS)
	});

	it('test for normalizeType', async () => {
		const _typeInQQgxF = "F0DhIf0fb0WYJlcUnuTTYHuuDp30XLxmiC7vRP98W";
		const _returnValueQCHmIcc = await normalizeType(_typeInQQgxF)
	});
})