export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valLldCYf1 = undefined;
		const _returnValuePi4i7p = await compileQueryParser(_valLldCYf1)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuev1Hi5EA = true;
		const _valmy0DHup = () => { return _returnValuev1Hi5EA };
		const _returnValuePnYwq8 = await compileQueryParser(_valmy0DHup)
	});
})