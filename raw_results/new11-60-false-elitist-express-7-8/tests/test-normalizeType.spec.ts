export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueVp2rGv6 = null;
		const _indexOfor2O0Jy = () => { return _returnValueVp2rGv6 };
		const _typeQxrzybG = {
			"indexOf": _indexOfor2O0Jy
	}
		const _returnValuevzr8CAL = await normalizeType(_typeQxrzybG)
	});

	it('test for normalizeType', async () => {
		const _arrayValuec5Bs6s6 = undefined;
		const _arrayValuetW7fvDU = null;
		const _typel3KEvHm = [_arrayValuec5Bs6s6, _arrayValuetW7fvDU]
		const _returnValueQ8cMqi = await normalizeType(_typel3KEvHm)
	});
})