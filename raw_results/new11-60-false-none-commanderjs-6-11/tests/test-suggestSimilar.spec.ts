export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordtk9Uvc6 = -9.560365465273179;
		const _candidatesBoIeXrm = "kSIeX3fGYuKMbc9AFTSD0dpO4XfgVbjagH2V4jkPVOodkL8sWPMD6R1";
		const _returnValuejEsfKUE = await suggestSimilar(_wordtk9Uvc6, _candidatesBoIeXrm)
	});

	it('test for suggestSimilar', async () => {
		const _wordNnbcE9 = true;
		const _candidatesZ9RaK3j = false;
		const _returnValuejnKQST = await suggestSimilar(_wordNnbcE9, _candidatesZ9RaK3j)
	});

	it('test for suggestSimilar', async () => {
		const _wordkKxHbEG = "8wW3w56A45A9v0BZRzVOep1sqJCnnQHOgKGaOzLZc8qkma";
		const _candidatesDp7mDyZ = "8gSmL7K8B2XgJaHkdy79GxR5fRq7Vumt7xFDh6eNn94aUhG9De3fsLdzRU9wsgSJvw2e4H1aNT3I23u2w1CT";
		const _returnValueJriWZib = await suggestSimilar(_wordkKxHbEG, _candidatesDp7mDyZ)
	});

	it('test for suggestSimilar', async () => {
		const _wordG0Ssk05 = "FtHhk9mCM6zPBcjUGLtH";
		const _returnValueiHyrp7h = 8.405495561274122;
		const _arrayValuedqKMmQY = () => { return _returnValueiHyrp7h };
		const _arrayValuekalR187 = "HRcuESWBkrRQ3HHM5KRPjNREGAkeOaHeWz4IwL8O6h3v9Lcs78HA3v1RXck6ygyqqZWIF9JFavD";
		const _candidatesRF6Iuj0 = [_arrayValuedqKMmQY, _arrayValuekalR187]
		const _returnValuewyB1frj = await suggestSimilar(_wordG0Ssk05, _candidatesRF6Iuj0)
	});

	it('test for suggestSimilar', async () => {
		const _wordo5Bzck6 = "5SdDqmwlQcLGRdoDQLPhcQnoTfRzaltBe1cfa5ggI56TkI4lxiab3yjVBXnk";
		const _arrayValueKRa9yXd = 3.6363064381202435;
		const _candidatesebWPW5j = [_arrayValueKRa9yXd]
		const _returnValuepUkBXBz = await suggestSimilar(_wordo5Bzck6, _candidatesebWPW5j)
	});

	it('test for suggestSimilar', async () => {
		const _wordTVb1nAb = "IyBkFHQzXBNbcCoXpNrXlaNYhUQQPJqgAxEH0TWExnPVhE3";
		const _returnValuehXSEnK6 = undefined;
		const _arrayValueBd7tW6 = () => { return _returnValuehXSEnK6 };
		const _arrayValuerhFxSpF = "gyWRSQUw9UqvAF8Nh4ZVe6V5xEmRaHseCaNHxkVr83EB9DN";
		const _arrayValueiAhjz2w = "hXqQccHggQuBBsg7VxwM4Ul8Bvw3iriPTB09RhGp5ISVVTNFIsI95kGUdRRlNVoFgpL8XUZxR3FbUnhlhpT";
		const _candidateslzIK2ef = [_arrayValueBd7tW6, _arrayValuerhFxSpF, _arrayValueiAhjz2w]
		const _returnValueZZTcdJd = await suggestSimilar(_wordTVb1nAb, _candidateslzIK2ef)
	});
})