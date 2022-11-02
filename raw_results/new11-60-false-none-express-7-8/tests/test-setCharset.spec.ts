export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _types5QYWhf = true;
		const _returnValueX3GTsuz = "POiXdFKNkCxyld4oVYWu3ncz399YIAcwqZ";
		const _charsetSGcNXoW = () => { return _returnValueX3GTsuz };
		const _returnValuexfRf8S5 = await setCharset(_types5QYWhf, _charsetSGcNXoW)
	});

	it('test for setCharset', async () => {
		const _typekL706k5 = null;
		const _arrayValuexGNvXA2 = undefined;
		const _charset0LGmAV = [_arrayValuexGNvXA2]
		const _returnValueAhUvF0W = await setCharset(_typekL706k5, _charset0LGmAV)
	});
})