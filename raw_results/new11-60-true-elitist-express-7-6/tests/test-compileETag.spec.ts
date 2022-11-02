export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valUpNRYHq = 0.98382990988374;
		const _returnValueYc9x7V = await compileETag(_valUpNRYHq)
	});

	it('test for compileETag', async () => {
		const _returnValueVAlo5CZ = undefined;
		const _valW9TwFnp = () => { return _returnValueVAlo5CZ };
		const _returnValueMZKhGc0 = await compileETag(_valW9TwFnp)
	});
})