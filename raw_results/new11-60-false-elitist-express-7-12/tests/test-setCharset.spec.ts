export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _returnValueOly9Dro = 8.924909073986246;
		const _typeL6qkdf5 = () => { return _returnValueOly9Dro };
		const _charsetpXlejUJ = "pCS11G8vUPpMQ5vuqJbH6G0QrkVGzSOpS8onNPr7XwDLj2de";
		const _returnValueUhJnYII = await setCharset(_typeL6qkdf5, _charsetpXlejUJ)
	});

	it('test for setCharset', async () => {
		const _typeMlFtZYI = undefined;
		const _charsetIAcj5C4 = null;
		const _returnValueIiC37Ku = await setCharset(_typeMlFtZYI, _charsetIAcj5C4)
	});
})