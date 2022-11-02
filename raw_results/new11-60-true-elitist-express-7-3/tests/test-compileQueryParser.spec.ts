export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valJAcPzaQ = -7.621699870835819;
		const _returnValueAGNvk2p = await compileQueryParser(_valJAcPzaQ)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueE9ZQh58 = -7.459422815962995;
		const _valO4AF5y7 = () => { return _returnValueE9ZQh58 };
		const _returnValueiPZtqt = await compileQueryParser(_valO4AF5y7)
	});
})