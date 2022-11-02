export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valAFKsjHc = -5.903542135973188;
		const _returnValuetHrM4Sj = await compileQueryParser(_valAFKsjHc)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueRK52ZT6 = null;
		const _valWtVJcHH = () => { return _returnValueRK52ZT6 };
		const _returnValueRBdOau8 = await compileQueryParser(_valWtVJcHH)
	});
})