export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordB8lQuoo = -1.3902859019214429;
		const _arrayValueh1Rwn7m = 6.256189798531764;
		const _candidatesvnGMceE = [_arrayValueh1Rwn7m]
		const _returnValueSSmziFf = await suggestSimilar(_wordB8lQuoo, _candidatesvnGMceE)
	});

	it('test for suggestSimilar', async () => {
		const _wordG2wkqV = -5.7939231186343605;
		const _candidatesCctk9KF = undefined;
		const _returnValueXugCQ1 = await suggestSimilar(_wordG2wkqV, _candidatesCctk9KF)
	});

	it('test for suggestSimilar', async () => {
		const _wordMriidQG = "nCXka4pUMh0fvPcD2JlLgAethr4wuPSMK07GgUbEs1KEUdIpqiEbFWFH9";
		const _candidatesX78xdiM = "5QlmToVhMhSTYPbu8K5z6gPqAUYkFUSDBtvg0jVvplpFaIu70ITofJcAwgQqYWRWlYHe";
		const _returnValueHQ806ak = await suggestSimilar(_wordMriidQG, _candidatesX78xdiM)
	});

	it('test for suggestSimilar', async () => {
		const _wordHuRq1uK = "e124yskjWDWP5LPEAQ5naer9x8SFwKpO3w5YWPYGActz2pT4JLc4zGpdGeaerqcHK2j42Dtk3yrsIjWXIbg3TKS5wq6";
		const _arrayValued6yxcJR = false;
		const _arrayValue8xSwNx = null;
		const _candidatesbbGqXno = [_arrayValued6yxcJR, _arrayValue8xSwNx]
		const _returnValueMq0jbyA = await suggestSimilar(_wordHuRq1uK, _candidatesbbGqXno)
	});

	it('test for suggestSimilar', async () => {
		const _wordi5jjAwi = "DqpRyVt9Sl0oTCffu";
		const _arrayValuer6TvAP = false;
		const _arrayValueJKzOZlN = null;
		const _arrayValuelxYHnCd = null;
		const _returnValueMGdwQLE = {
		
	}
		const _arrayValueOpqUqUF = () => { return _returnValueMGdwQLE };
		const _arrayValueVS1JIMC = [_arrayValuer6TvAP, _arrayValueJKzOZlN, _arrayValuelxYHnCd, _arrayValueOpqUqUF]
		const _returnValueiKeA9Vj = false;
		const _arrayValuehNQvrId = () => { return _returnValueiKeA9Vj };
		const _arrayValueVIHURG = null;
		const _arrayValueJG6ClXG = null;
		const _candidatesrvEboNd = [_arrayValueVS1JIMC, _arrayValuehNQvrId, _arrayValueVIHURG, _arrayValueJG6ClXG]
		const _returnValuedrNi4ox = await suggestSimilar(_wordi5jjAwi, _candidatesrvEboNd)
	});

	it('test for suggestSimilar', async () => {
		const _wordCZ2JrYw = "4FcO";
		const _arrayValueLHRDIbe = false;
		const _arrayValuerSLvflu = null;
		const _arrayValuey4QXBOK = [_arrayValueLHRDIbe, _arrayValuerSLvflu]
		const _arrayValueJ8lkmqY = "dfAkLvnDsWebYZv9iz1PzVk5bEAx5QvFr5nRie";
		const _arrayValueHV5GZx = "wTPtMrJCXsSEH6FThMpGBlx";
		const _candidatesY8RXNh3 = [_arrayValuey4QXBOK, _arrayValueJ8lkmqY, _arrayValueHV5GZx]
		const _returnValueOPp5evt = await suggestSimilar(_wordCZ2JrYw, _candidatesY8RXNh3)
	});
})