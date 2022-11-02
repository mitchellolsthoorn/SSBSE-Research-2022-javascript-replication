export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valBOfHDtX = 0.8634641145952937;
		const _returnValuexiKLpSC = await compileQueryParser(_valBOfHDtX)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueYBIHXq = true;
		const _valYTyr10r = () => { return _returnValueYBIHXq };
		const _returnValueezSiWR = await compileQueryParser(_valYTyr10r)
	});
})