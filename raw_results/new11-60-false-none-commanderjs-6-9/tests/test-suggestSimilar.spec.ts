export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordnsQR7y2 = undefined;
		const _candidatesylJDq5O = 7.327677614419848;
		const _returnValueulsLyC5 = await suggestSimilar(_wordnsQR7y2, _candidatesylJDq5O)
	});

	it('test for suggestSimilar', async () => {
		const _wordIRrqrZW = false;
		const _candidatesLnBZXzK = undefined;
		const _returnValuevNYmV8v = await suggestSimilar(_wordIRrqrZW, _candidatesLnBZXzK)
	});

	it('test for suggestSimilar', async () => {
		const _wordjLi4cfe = "WAXceQmzHMFBCppOVKqWub1J8KwVoXInmwttTiQtfh";
		const _candidatesCMQX7lo = "XJDDhC6AwUSTphBExFBgWDIrDRdqEHODSS9XPRTwH6bltmE3FkL7O0x32r7fdQUcomAC7Deot";
		const _returnValuex0P0VBX = await suggestSimilar(_wordjLi4cfe, _candidatesCMQX7lo)
	});

	it('test for suggestSimilar', async () => {
		const _wordf6JvHjz = "wq";
		const _arrayValuezvm8QJl = "a6xY1aENaabrko6Hkk4wYeyczMimMj4Gqc60tWNFrB6ldNjnJWJRJKR3FlRrrelGnceoe4ksy4TwJ0z6nJwXhkhJM3C";
		const _arrayValueWaslbCF = 7.146815169560551;
		const _candidatesCMlIFUy = [_arrayValuezvm8QJl, _arrayValueWaslbCF]
		const _returnValueUEj3LX = await suggestSimilar(_wordf6JvHjz, _candidatesCMlIFUy)
	});
})