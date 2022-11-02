export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valBXHPizz = "7gY19ycdUoEBRsmN8MGId76ejxNENYAaR45v6sVDH9JdQO5JELpNtc9";
		const _returnValueyaHqa62 = await compileTrust(_valBXHPizz)
	});

	it('test for compileTrust', async () => {
		const _valZMLxL8R = null;
		const _returnValueDWJRRiQ = await compileTrust(_valZMLxL8R)
	});

	it('test for compileTrust', async () => {
		const _valio8kIbv = true;
		const _returnValue88Tx7V = await compileTrust(_valio8kIbv)
	});

	it('test for compileTrust', async () => {
		const _valp0R9fa = 6.7609312357121105;
		const _returnValueVM92gFF = await compileTrust(_valp0R9fa)
	});

	it('test for compileTrust', async () => {
		const _returnValueykyC0ph = {
		
	}
		const _valu41YJfK = () => { return _returnValueykyC0ph };
		const _returnValueihhTHKO = await compileTrust(_valu41YJfK)
	});
})