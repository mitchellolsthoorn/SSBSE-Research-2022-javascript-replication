export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _arrayValuee9TYdFw = -6.671330455950626;
		const _arrayValue2SZOfw = false;
		const _arrayValuetYL8FSA = "jLmfVYYaPTRNB45wRggPhFwOxOME6X5VicCXpvPzjPWh5w1LrgefJzTYegljd";
		const _typelUZbWbD = [_arrayValuee9TYdFw, _arrayValue2SZOfw, _arrayValuetYL8FSA]
		const _charseti18h0NP = "qdGna4n4hX3by";
		const _returnValuelNoMvL = await setCharset(_typelUZbWbD, _charseti18h0NP)
	});

	it('test for setCharset', async () => {
		const _typetFhyN1N = null;
		const _charsetPR3VI8y = null;
		const _returnValueDB48jpN = await setCharset(_typetFhyN1N, _charsetPR3VI8y)
	});
})