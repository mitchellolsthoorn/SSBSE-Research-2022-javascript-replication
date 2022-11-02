export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valCikYzt9 = 8.66534297491689;
		const _returnValuegGHfeEe = await compileETag(_valCikYzt9)
	});

	it('test for compileETag', async () => {
		const _returnValueJDl5byc = -2.965171027821933;
		const _valMYh6Z93 = () => { return _returnValueJDl5byc };
		const _returnValueCjwQ8D = await compileETag(_valMYh6Z93)
	});
})