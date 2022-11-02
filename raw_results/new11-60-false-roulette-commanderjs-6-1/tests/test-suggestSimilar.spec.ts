export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordKlHzEDW = "OqXP26eqv2prE4oGX2E6koezrOEU27VoDAbmQRobHmDLvdb9xhnwiNHxXHR6mwQrK2plDPO7lDaU25N";
		const _returnValueRNx9oZl = 5.29206755249713;
		const _candidatesIL6gQ72 = () => { return _returnValueRNx9oZl };
		const _returnValueqAbXKFY = await suggestSimilar(_wordKlHzEDW, _candidatesIL6gQ72)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueSb6wsmA = 8.204972900505204;
		const _startsWithFZiLsTs = () => { return _returnValueSb6wsmA };
		const _returnValueSZqK3cN = "l8kEr8qSmPXCtsyTFY492c8mOKGlQ2I9";
		const _slicem6Rpf8 = () => { return _returnValueSZqK3cN };
		const _lengthF0jblAz = 9.24587462443154;
		const _wordAeMnWxj = {
			"startsWith": _startsWithFZiLsTs,
		"slice": _slicem6Rpf8,
		"length": _lengthF0jblAz
	}
		const _arrayValueC8LS2df = "eqpjdH1NqpmTXyt5prWyzWrF2XoLO88j2JxxkzRx2urHFGoPHXvxv5QfMwNaK6PjaO";
		const _candidatesHL0aNfk = [_arrayValueC8LS2df]
		const _returnValueQv6dmUf = await suggestSimilar(_wordAeMnWxj, _candidatesHL0aNfk)
	});

	it('test for suggestSimilar', async () => {
		const _worduN5mW9 = "ZfvS6mnSsHmxQymsp57QOWkMpPOCLz86WNdm4s8Ap19Be1LbhGmOdOnJFCdlFkGShWxlonUoQ40VHr";
		const _candidatesctqagCC = "5gzmp6C4BcyJU5fzR4zP9hFM4CSPPxVUwp9uLgX3Lh7Ua8EwYsVTYz6kKsrdQRV1x1jCGaBw76";
		const _returnValueVFFnqvi = await suggestSimilar(_worduN5mW9, _candidatesctqagCC)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueVqLEaj2 = undefined;
		const _startsWithhWQTUP0 = () => { return _returnValueVqLEaj2 };
		const _returnValuexFuaVLG = null;
		const _sliceZ12yTMG = () => { return _returnValuexFuaVLG };
		const _lengthQYcQKKb = 7.361889853981356;
		const _wordte2Aa5F = {
			"startsWith": _startsWithhWQTUP0,
		"slice": _sliceZ12yTMG,
		"length": _lengthQYcQKKb
	}
		const _arrayValueqVXtTfG = 2.7893389720027386;
		const _returnValueFVdmc9s = false;
		const _arrayValue36u0Vq = () => { return _returnValueFVdmc9s };
		const _arrayValuemQrQC3O = []
		const _candidatesSfpQCWw = [_arrayValueqVXtTfG, _arrayValue36u0Vq, _arrayValuemQrQC3O]
		const _returnValuedeiZfUS = await suggestSimilar(_wordte2Aa5F, _candidatesSfpQCWw)
	});

	it('test for suggestSimilar', async () => {
		const _wordmvHW3tA = "f3rhyGTpRCTHUJuraVaLMHeQPSgAqNsT7kvkOFj6gx97V9dFLXESQoOcdMnKh";
		const _arrayValuezpkaMWc = {
		
	}
		const _arrayValueLIajIJ = "iQ26BpPDvZQ4sb24vqBk2GqceEVnpF91tCOWPnKi8MhOj6Ufx2Cy9xxwyiLeljCI";
		const _arrayValuewKPYVu3 = null;
		const _returnValueCWy65rR = true;
		const _arrayValuePAOs6Co = () => { return _returnValueCWy65rR };
		const _candidatescZKwrHP = [_arrayValuezpkaMWc, _arrayValueLIajIJ, _arrayValuewKPYVu3, _arrayValuePAOs6Co]
		const _returnValuejR6W2Cz = await suggestSimilar(_wordmvHW3tA, _candidatescZKwrHP)
	});
})