export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valCJtvD6 = -6.187623728005502;
		const _returnValued0kk3uL = await compileETag(_valCJtvD6)
	});

	it('test for compileETag', async () => {
		const _returnValueVx6DdT1 = "vF971gAVITHxFcwwNMAtPfPIhgnpz74qMPlKncRiUuKb7B86xcoVF";
		const _valE0ms9h2 = () => { return _returnValueVx6DdT1 };
		const _returnValueq0x1K1V = await compileETag(_valE0ms9h2)
	});
})