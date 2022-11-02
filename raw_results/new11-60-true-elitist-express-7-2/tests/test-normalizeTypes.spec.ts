export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthcf6bVqr = -6.4944047017743385;
		const _typesn6f09Ag = {
			"length": _lengthcf6bVqr
	}
		const _returnValueUT9B5P0 = await normalizeTypes(_typesn6f09Ag)
	});

	it('test for normalizeTypes', async () => {
		const _lengthb9B3p2d = 8.863119349407025;
		const _typeszWLfili = {
			"length": _lengthb9B3p2d
	}
		const _returnValuezfCEXJj = await normalizeTypes(_typeszWLfili)
	});

	it('test for normalizeTypes', async () => {
		const _typesaMrKL2G = "RA08fYeIOcyTwTtO5JrOt7vTwqsC1LRon7NVVOUaRzdFtj1SRUy8PycR2DEjQyARxV4cjVvDlOBFWeAmpos3VOw2oXe91W0";
		const _returnValueTityHVo = await normalizeTypes(_typesaMrKL2G)
	});
})