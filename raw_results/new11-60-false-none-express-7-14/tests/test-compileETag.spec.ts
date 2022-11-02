export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valIB393Hc = -2.8534138071846247;
		const _returnValueKVtNb5s = await compileETag(_valIB393Hc)
	});

	it('test for compileETag', async () => {
		const _arrayValueprMOzZa = true;
		const _returnValuejxXWyqP = [_arrayValueprMOzZa]
		const _valXn2Z6rS = () => { return _returnValuejxXWyqP };
		const _returnValueXzgcCH = await compileETag(_valXn2Z6rS)
	});
})