export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valMZpq7K7 = -3.7750103814411498;
		const _returnValueqB44gNG = await compileQueryParser(_valMZpq7K7)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuejKV6rQ = -6.015403077570456;
		const _valxrk10J1 = () => { return _returnValuejKV6rQ };
		const _returnValueooynZUu = await compileQueryParser(_valxrk10J1)
	});
})