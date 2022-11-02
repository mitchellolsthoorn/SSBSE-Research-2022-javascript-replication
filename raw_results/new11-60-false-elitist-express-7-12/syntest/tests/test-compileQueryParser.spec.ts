export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valWMXw4pA = 8.529647751602848;
		const _returnValueqXJZPk6 = await compileQueryParser(_valWMXw4pA)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuesJmFLHZ = undefined;
		const _valnibeR2p = () => { return _returnValuesJmFLHZ };
		const _returnValueygPoA9E = await compileQueryParser(_valnibeR2p)
	});
})