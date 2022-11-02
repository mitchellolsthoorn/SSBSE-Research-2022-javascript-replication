export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valXbEWkzv = -5.6187972530459716;
		const _returnValuet8rBT7 = await compileQueryParser(_valXbEWkzv)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuexmC3wq1 = -0.30871372244615003;
		const _returnValueknNoiuf = () => { return _returnValuexmC3wq1 };
		const _valAQrcnmA = () => { return _returnValueknNoiuf };
		const _returnValueyiJX0wk = await compileQueryParser(_valAQrcnmA)
	});
})