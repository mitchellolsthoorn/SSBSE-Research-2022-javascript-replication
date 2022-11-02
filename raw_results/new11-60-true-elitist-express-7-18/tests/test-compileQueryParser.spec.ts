export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valerBnGZg = 8.081965834192367;
		const _returnValueVqmDCqj = await compileQueryParser(_valerBnGZg)
	});

	it('test for compileQueryParser', async () => {
		const _arrayValuePeEu4L2 = null;
		const _arrayValueS1CNAO3 = undefined;
		const _arrayValueuoLLkpz = [_arrayValueS1CNAO3]
		const _returnValue5RJIbD = "uoDbusAVVtHtkwYKv";
		const _arrayValuei64p0fk = () => { return _returnValue5RJIbD };
		const _returnValueQdLjRTs = [_arrayValuePeEu4L2, _arrayValueuoLLkpz, _arrayValuei64p0fk]
		const _valBiKNfcq = () => { return _returnValueQdLjRTs };
		const _returnValueZK7koAP = await compileQueryParser(_valBiKNfcq)
	});
})