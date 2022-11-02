export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valEx6Atdo = 5.439348510064354;
		const _returnValuedIm8aDp = await compileQueryParser(_valEx6Atdo)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueDraGxz1 = undefined;
		const _valyLA8UFU = () => { return _returnValueDraGxz1 };
		const _returnValueTal4xa = await compileQueryParser(_valyLA8UFU)
	});
})