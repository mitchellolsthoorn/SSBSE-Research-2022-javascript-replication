export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _arrayValuea5Nf8Gq = -6.068345677917634;
		const _valwCnbd1X = [_arrayValuea5Nf8Gq]
		const _returnValueiefFt0l = await compileETag(_valwCnbd1X)
	});

	it('test for compileETag', async () => {
		const _arrayValuepVIM4aN = null;
		const _returnValueve8XINs = [_arrayValuepVIM4aN]
		const _valnYmICPP = () => { return _returnValueve8XINs };
		const _returnValuehqbGA8B = await compileETag(_valnYmICPP)
	});
})