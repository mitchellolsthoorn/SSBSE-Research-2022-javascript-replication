export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valvZC7CPq = -7.722384852232972;
		const _returnValuenTeSWWs = await compileETag(_valvZC7CPq)
	});

	it('test for compileETag', async () => {
		const _returnValueHzCfZwE = 9.6516264825338;
		const _valiMuOKpy = () => { return _returnValueHzCfZwE };
		const _returnValueNCHxy5c = await compileETag(_valiMuOKpy)
	});
})