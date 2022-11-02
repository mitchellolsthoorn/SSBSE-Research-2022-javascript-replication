export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valnzUVRYQ = 2.6050238179929526;
		const _returnValueLZnCwEF = await compileETag(_valnzUVRYQ)
	});

	it('test for compileETag', async () => {
		const _returnValueoK7tTWY = "cHDt9NO5I2k6nqFpjopfMTWqOTVy7ivGkIRNd1ICIN4RQcRF8Vh5IqCdUsh5jicbLxEXnZ54yW1XpbGWsz";
		const _valL36ZCQ7 = () => { return _returnValueoK7tTWY };
		const _returnValuePiFJAXd = await compileETag(_valL36ZCQ7)
	});
})