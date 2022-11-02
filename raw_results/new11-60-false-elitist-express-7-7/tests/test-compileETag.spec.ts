export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valxVVVqB7 = 5.092305001475417;
		const _returnValuedbsa2Dq = await compileETag(_valxVVVqB7)
	});

	it('test for compileETag', async () => {
		const _returnValueCdKnsjD = -4.712124569611368;
		const _valCEIk2RE = () => { return _returnValueCdKnsjD };
		const _returnValueWbU5Z1b = await compileETag(_valCEIk2RE)
	});
})