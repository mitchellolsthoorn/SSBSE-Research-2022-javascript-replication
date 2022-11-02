export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _typeS7npFB7 = 5.690043655591532;
		const _charsetikndZ5x = true;
		const _returnValuepNFBRJ0 = await setCharset(_typeS7npFB7, _charsetikndZ5x)
	});

	it('test for setCharset', async () => {
		const _typew8qfvAg = undefined;
		const _returnValueqLKALl = false;
		const _charsetmkQNsII = () => { return _returnValueqLKALl };
		const _returnValuefyE7nIQ = await setCharset(_typew8qfvAg, _charsetmkQNsII)
	});
})