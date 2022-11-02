export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valLpEtWHK = 3.566597791250093;
		const _returnValueSTJu4nl = await compileETag(_valLpEtWHK)
	});

	it('test for compileETag', async () => {
		const _arrayValuePv7kMSD = "IT8chcLkJijawb6XzzVXD124B28KpjCqhHBB6HepzgnUmVmDKPKORX6rGNHWurhBitTf";
		const _returnValueXHOGGYp = [_arrayValuePv7kMSD]
		const _valSrQ23J0 = () => { return _returnValueXHOGGYp };
		const _returnValuevK1aa8 = await compileETag(_valSrQ23J0)
	});
})