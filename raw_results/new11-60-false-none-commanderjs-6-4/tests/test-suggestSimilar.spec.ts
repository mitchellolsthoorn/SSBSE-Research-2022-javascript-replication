export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordLVhkDis = undefined;
		const _candidatesWjyBTTg = "kKfcxmgSMBtnnyJHCXvIBXdyL4LFQ9iTCNJYRGv2yNWWMxsaye9v5zmRzQvxR8X";
		const _returnValueiiuZUGp = await suggestSimilar(_wordLVhkDis, _candidatesWjyBTTg)
	});

	it('test for suggestSimilar', async () => {
		const _wordEdFYFO8 = -1.4671595646705473;
		const _candidatesmxna4dU = null;
		const _returnValueuZ0Hujc = await suggestSimilar(_wordEdFYFO8, _candidatesmxna4dU)
	});

	it('test for suggestSimilar', async () => {
		const _wordA2WvHlN = "GQTCduOPKBlgZYdWCC6oUzCxmEtky6N1VkEpKrLb0x9ef2B4IN6Qz30wSo45oEZANLBwOwYmMwyHEp0jv9ah7aJFAvQ";
		const _returnValueUtxPwUJ = 7.330500466469296;
		const _arrayValueooOgSke = () => { return _returnValueUtxPwUJ };
		const _arrayValueraWBNg5 = true;
		const _candidatesY9N3slO = [_arrayValueooOgSke, _arrayValueraWBNg5]
		const _returnValueP1lREQs = await suggestSimilar(_wordA2WvHlN, _candidatesY9N3slO)
	});

	it('test for suggestSimilar', async () => {
		const _wordVPFsXPQ = "QdEUpE3ukZ3pVhnmEm8dS0NnHYR8siYL975CVodYAKO";
		const _arrayValuevOJc5ZQ = []
		const _arrayValueEKKHd8 = "nqd24yl3AIHRNKD8Ujg8deleQr";
		const _arrayValuexnlXRAf = "d7rWbOuxvS7a9sG47NJ0T9QQfUM4ywrx6r3tOGYaL9xL4DqhUsojYJkf8U";
		const _candidatesBuDZbQQ = [_arrayValuevOJc5ZQ, _arrayValueEKKHd8, _arrayValuexnlXRAf]
		const _returnValueIetbKH = await suggestSimilar(_wordVPFsXPQ, _candidatesBuDZbQQ)
	});

	it('test for suggestSimilar', async () => {
		const _wordvln5SBQ = "jiVk2MezlZlUd0hz8GL4UO1AUMCJ56vD3TM8kTnRTNjfFOXeRmneORgtWxKEY7ryIP1NcwFsM4nAPDiJ4dsOVFPRE9iukO1L";
		const _arrayValuevqOmawt = "bEprhDs7bV0Lr9Gv4fuugPRfKGvr8uxANNuEY5dgcpzTIbxv9WXm28xusPZc7wjWBIC4JTPrfNIiaRISELdgGTfngmwgMXj";
		const _candidatesrf8kYtk = [_arrayValuevqOmawt]
		const _returnValuejq9Bsgs = await suggestSimilar(_wordvln5SBQ, _candidatesrf8kYtk)
	});
})