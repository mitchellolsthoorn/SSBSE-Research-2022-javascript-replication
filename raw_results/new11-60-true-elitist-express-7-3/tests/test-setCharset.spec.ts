export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _typepnmTfp6 = "s8xBnYWNGgXkteUUvjQaQsMqgrvQRf3f6wj5cvtQc5F61BsBfrhXPywZC3B5tMTphp8WtmdMJb7bARWrs";
		const _charsetpVN7wiA = "XkN1C6BeV9QIrQHvrJ76aGJIjJyaUMPp5ZD1i97aO4uvFndp19RNxHaGVQq";
		const _returnValuemLUBBwq = await setCharset(_typepnmTfp6, _charsetpVN7wiA)
	});

	it('test for setCharset', async () => {
		const _typeGh7xq0H = {
		
	}
		const _charsetZQ6Lwqu = null;
		const _returnValueAIWf06q = await setCharset(_typeGh7xq0H, _charsetZQ6Lwqu)
	});
})