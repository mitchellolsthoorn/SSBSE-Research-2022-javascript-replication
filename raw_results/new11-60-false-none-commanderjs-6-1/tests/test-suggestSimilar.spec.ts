export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordxMDBbWK = null;
		const _candidateskWbhoCq = false;
		const _returnValuem9eglR = await suggestSimilar(_wordxMDBbWK, _candidateskWbhoCq)
	});

	it('test for suggestSimilar', async () => {
		const _wordkck3qbn = []
		const _candidatesvUq3sFC = "dGRiYq6oLYWMQtdtS332W7TNg";
		const _returnValuePqu7VIR = await suggestSimilar(_wordkck3qbn, _candidatesvUq3sFC)
	});

	it('test for suggestSimilar', async () => {
		const _wordmECYIlp = "lP7BrBGHILuPoJXRtA5YfEwkNE80O5T64lqnbv5riTEml3Pq3UEvY8AWgQLMGU8mwxea5AW";
		const _arrayValuewAEJlA4 = 9.77969914413373;
		const _candidatescovj4W = [_arrayValuewAEJlA4]
		const _returnValue4nZrNA = await suggestSimilar(_wordmECYIlp, _candidatescovj4W)
	});

	it('test for suggestSimilar', async () => {
		const _wordXjyDiFC = "YJUeWvzQnSFikiaqXweQwSTNvLGVxyLE9QOPayJWwguW7ZAfCnIl7f9WHwPGQMpaRhG2MQ5IIf51LrUlgdOpUB61s";
		const _candidatesQLt6tiO = "4qR6Ae3CvB2QqP8mAlLIMl";
		const _returnValueihjqqBB = await suggestSimilar(_wordXjyDiFC, _candidatesQLt6tiO)
	});

	it('test for suggestSimilar', async () => {
		const _wordawrTXI1 = "tFk3HiBj5KmkyOwmXDfD5h6lt4DsSjdXx1gVA6cP1zPBYOgayjBz4";
		const _arrayValueH4KQOTT = -8.33862316569881;
		const _arrayValueYyxcV9f = "rcjBSjpktRDY";
		const _arrayValuepHpp0AS = "gLoohfNOVWRjEnPET7xVDBkQ8UvpqV3m3xFmNKPDpsoktTYgajjv02Kdi1";
		const _arrayValuee3hcf3Z = [_arrayValueH4KQOTT, _arrayValueYyxcV9f, _arrayValuepHpp0AS]
		const _arrayValuevdnRgd8 = -4.070618129073685;
		const _candidatesOzEDBnG = [_arrayValuee3hcf3Z, _arrayValuevdnRgd8]
		const _returnValueZUBWQ6 = await suggestSimilar(_wordawrTXI1, _candidatesOzEDBnG)
	});
})