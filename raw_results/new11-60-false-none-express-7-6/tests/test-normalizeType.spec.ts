export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueFc4BOnt = "98Thukd2ljXSoldi2dVYkrfCK4WaQFAS0rbMhwvQ4fhn69I7lRCCI0waLXpvG7TVQC";
		const _typehe9aXH = () => { return _returnValueFc4BOnt };
		const _returnValueKC4ECBF = await normalizeType(_typehe9aXH)
	});

	it('test for normalizeType', async () => {
		const _typeb2ehrn6 = "yKvCjY7w";
		const _returnValueIQBmczo = await normalizeType(_typeb2ehrn6)
	});
})