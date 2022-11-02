export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordX4w7HrK = null;
		const _candidatesrRZkJ9a = 6.743668405758498;
		const _returnValuedFzrPkt = await suggestSimilar(_wordX4w7HrK, _candidatesrRZkJ9a)
	});

	it('test for suggestSimilar', async () => {
		const _wordGgYY9KP = "HdfV5RaYPsckmUzbHQPhPFINWzXi";
		const _candidatesdhNpLBf = "5bNmSvSdiqyyBy17kTawPGk33JwTXqX7ukYhZnQfaUmscfzRTbn46Set6lWqMmogFpJMZsqoykCHJxlEPdR7emOG3sY";
		const _returnValuejiIDqic = await suggestSimilar(_wordGgYY9KP, _candidatesdhNpLBf)
	});

	it('test for suggestSimilar', async () => {
		const _wordgGQCoW = undefined;
		const _returnValuemrL7ui4 = true;
		const _candidates9XaYTe = () => { return _returnValuemrL7ui4 };
		const _returnValueZwj9FtD = await suggestSimilar(_wordgGQCoW, _candidates9XaYTe)
	});

	it('test for suggestSimilar', async () => {
		const _wordTYdSVLG = "gW";
		const _arrayValueATTyOJv = 8.166681774958064;
		const _arrayValueIsuVRD = true;
		const _arrayValuewzeumrF = [_arrayValueIsuVRD]
		const _arrayValuem5ByXxT = "AoqxvgyyS87p";
		const _candidatesKXNKIty = [_arrayValueATTyOJv, _arrayValuewzeumrF, _arrayValuem5ByXxT]
		const _returnValueR1KrHh = await suggestSimilar(_wordTYdSVLG, _candidatesKXNKIty)
	});

	it('test for suggestSimilar', async () => {
		const _wordNWRgpPN = "sd";
		const _arrayValuemc7Z1H1 = undefined;
		const _returnValueysiniiF = "FhT";
		const _arrayValueYkTDbRI = () => { return _returnValueysiniiF };
		const _arrayValuekwSqywh = [_arrayValuemc7Z1H1, _arrayValueYkTDbRI]
		const _arrayValuePm0jUqt = -0.6402081829859245;
		const _candidatesE8UyNtj = [_arrayValuekwSqywh, _arrayValuePm0jUqt]
		const _returnValueFtt1tR = await suggestSimilar(_wordNWRgpPN, _candidatesE8UyNtj)
	});
})