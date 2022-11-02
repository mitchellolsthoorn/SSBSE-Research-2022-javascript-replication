export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valwG5g2Qd = 5.1735988287201415;
		const _returnValueBJrUMVQ = await compileETag(_valwG5g2Qd)
	});

	it('test for compileETag', async () => {
		const _returnValueXmwqvYF = "JTy5Om0HlD1goNGhwCN7TwCTMqLq11pWVA1i8Jr04NHn0cJkDewIV7KlB2PevxmHOnL9F7hpyH";
		const _valwNDe5AW = () => { return _returnValueXmwqvYF };
		const _returnValuezwRb5f = await compileETag(_valwNDe5AW)
	});
})