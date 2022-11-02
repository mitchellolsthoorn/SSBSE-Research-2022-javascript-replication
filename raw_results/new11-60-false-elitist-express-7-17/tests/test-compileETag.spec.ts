export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valYIlndYU = -1.6348213150165787;
		const _returnValueTU7oTQ5 = await compileETag(_valYIlndYU)
	});

	it('test for compileETag', async () => {
		const _returnValuegdrklz2 = null;
		const _valmV6BuLu = () => { return _returnValuegdrklz2 };
		const _returnValueDA0fSU = await compileETag(_valmV6BuLu)
	});
})