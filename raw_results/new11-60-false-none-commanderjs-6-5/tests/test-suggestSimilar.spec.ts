export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordQuGHlNV = null;
		const _arrayValueLfTrAII = undefined;
		const _returnValuen8mnzND = [_arrayValueLfTrAII]
		const _candidatesPJ0AVYC = () => { return _returnValuen8mnzND };
		const _returnValueLqodCwC = await suggestSimilar(_wordQuGHlNV, _candidatesPJ0AVYC)
	});

	it('test for suggestSimilar', async () => {
		const _word8XR1nb = false;
		const _candidatesw5CKwih = "fqKUbV1gKk6daJhDwIom45tE64hwsxQPfSjSzYej2DrYuNF1WGW8sdov7NzB6wO7fsxJBLVjBVYfPrCAcPRMEHl";
		const _returnValuefqqaPDQ = await suggestSimilar(_word8XR1nb, _candidatesw5CKwih)
	});

	it('test for suggestSimilar', async () => {
		const _wordkdi1VCb = "YhU7w1WnkY1SG7SVCmgGRRrjBOjADNL";
		const _arrayValueYWpdUFz = undefined;
		const _candidatesG7qkErp = [_arrayValueYWpdUFz]
		const _returnValueAUDg5I7 = await suggestSimilar(_wordkdi1VCb, _candidatesG7qkErp)
	});

	it('test for suggestSimilar', async () => {
		const _wordan1igW = "murhBtEskUxIgrDVLxe6qRkQTgTou6RzCq8C7h7tR2YL5XV";
		const _arrayValue3TOYdN = false;
		const _returnValueSGQZZfm = false;
		const _arrayValuelL8w3yQ = () => { return _returnValueSGQZZfm };
		const _arrayValueCYdaOae = false;
		const _arrayValuew8w9NIU = [_arrayValue3TOYdN, _arrayValuelL8w3yQ, _arrayValueCYdaOae]
		const _arrayValuez75uzwr = [_arrayValuew8w9NIU]
		const _arrayValueWxxrJwB = null;
		const _arrayValueaSBBP0y = undefined;
		const _arrayValuePEw93y = [_arrayValueWxxrJwB, _arrayValueaSBBP0y]
		const _arrayValueidTAEq4 = -1.5530849847119228;
		const _arrayValueEpbAbOe = "mLirkJQXGEigX1qod4v2L";
		const _arrayValueCz5DP4 = null;
		const _returnValueyjRAeFa = undefined;
		const _arrayValuepUfJGx4 = () => { return _returnValueyjRAeFa };
		const _arrayValuefTclclX = [_arrayValueEpbAbOe, _arrayValueCz5DP4, _arrayValuepUfJGx4]
		const _candidatesI6zsLam = [_arrayValuez75uzwr, _arrayValuePEw93y, _arrayValueidTAEq4, _arrayValuefTclclX]
		const _returnValuedM2jucg = await suggestSimilar(_wordan1igW, _candidatesI6zsLam)
	});

	it('test for suggestSimilar', async () => {
		const _wordCLgYrVM = "eaN4WGql6y9RJ6oIVjdKfNRQRT6cf3i51YRziRzGQB8ThDSvT3r9BqElzUtzJe2SRzALOSqN";
		const _arrayValueD11iAUP = "6WcQjzwYBhL2kmqerOsOg9dxcXf2v5Xwr1G0YB4XL2ZYSAWgiEBNW8DiaGk1xWUvrGQ0kPO19E8";
		const _arrayValueDyqyVrj = 4.7635321993371615;
		const _arrayValueP8bmKdq = "5n6Id1EpWAVwNBLsnhOea0P3FDhsSK6c8YPLQ0";
		const _candidatesrEMDRQy = [_arrayValueD11iAUP, _arrayValueDyqyVrj, _arrayValueP8bmKdq]
		const _returnValuefzTrOiq = await suggestSimilar(_wordCLgYrVM, _candidatesrEMDRQy)
	});
})