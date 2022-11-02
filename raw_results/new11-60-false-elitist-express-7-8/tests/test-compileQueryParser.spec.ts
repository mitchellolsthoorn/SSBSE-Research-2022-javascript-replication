export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valPkBochG = 1.7535963649310826;
		const _returnValueVuUUtK4 = await compileQueryParser(_valPkBochG)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuePabV1Ov = 9.139015804427824;
		const _valQKpKaXU = () => { return _returnValuePabV1Ov };
		const _returnValueagOoFQO = await compileQueryParser(_valQKpKaXU)
	});
})