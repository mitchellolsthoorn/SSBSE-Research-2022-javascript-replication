export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuedKC0khQ = undefined;
		const _wordliAyN5s = () => { return _returnValuedKC0khQ };
		const _candidatesFWgeQnY = false;
		const _returnValuekXOlQei = await suggestSimilar(_wordliAyN5s, _candidatesFWgeQnY)
	});

	it('test for suggestSimilar', async () => {
		const _wordlOvdveD = null;
		const _candidatesBwkK5rp = "XfsRhv3";
		const _returnValueAVt1ARf = await suggestSimilar(_wordlOvdveD, _candidatesBwkK5rp)
	});

	it('test for suggestSimilar', async () => {
		const _wordekVv3N0 = "btmT7zVHV49xfJumRtwaagW7J8lfZtnyvlAdI9QFMSOBK1SoEsTUOHttHNByAomotfF3i9r1YJzwqZB5qoF55IZyY9abqfLAxu";
		const _candidatesSgtxNGK = "TFN326md9M84McDxAXRQ73Zqdvf9V44YmEl3EJyst8Rs";
		const _returnValueD8k0HUc = await suggestSimilar(_wordekVv3N0, _candidatesSgtxNGK)
	});

	it('test for suggestSimilar', async () => {
		const _wordHzY1V8w = "rSqRSBaQKFbFIdWUvNxTAgE95pGMQ7vzoPLpido";
		const _arrayValueCDyS1Q = -1.3474519102889708;
		const _candidatesj7iKZmi = [_arrayValueCDyS1Q]
		const _returnValueoTwc6zG = await suggestSimilar(_wordHzY1V8w, _candidatesj7iKZmi)
	});

	it('test for suggestSimilar', async () => {
		const _wordOsaGPrX = "KJsECAoweC3zVjKO6jEv5WSzrIRp9BCSWz8TcuMwEJZAvkmEDxL6zyBIeqIDfQvyrVPR";
		const _arrayValueDVR67io = false;
		const _arrayValueL3q9E9Z = 2.556697004489507;
		const _arrayValueuPgEQy = -8.873045674565429;
		const _arrayValueou5Ir2 = null;
		const _arrayValuefGUTpOz = [_arrayValueDVR67io, _arrayValueL3q9E9Z, _arrayValueuPgEQy, _arrayValueou5Ir2]
		const _arrayValueI87JxGP = -0.9874354246898314;
		const _arrayValueY5PjVbK = false;
		const _arrayValueSncEYxV = undefined;
		const _arrayValuepVVLI5s = null;
		const _arrayValueC2CRlCV = [_arrayValueY5PjVbK, _arrayValueSncEYxV, _arrayValuepVVLI5s]
		const _candidatesFlKCPd2 = [_arrayValuefGUTpOz, _arrayValueI87JxGP, _arrayValueC2CRlCV]
		const _returnValueZZSS5Ja = await suggestSimilar(_wordOsaGPrX, _candidatesFlKCPd2)
	});

	it('test for suggestSimilar', async () => {
		const _wordrVFIlaM = "b9n6HTPudEKcy";
		const _arrayValueQ4GYVh2 = "bxW5Slv9L1SXg";
		const _candidatesNBXVsUC = [_arrayValueQ4GYVh2]
		const _returnValuedVI9zNL = await suggestSimilar(_wordrVFIlaM, _candidatesNBXVsUC)
	});
})