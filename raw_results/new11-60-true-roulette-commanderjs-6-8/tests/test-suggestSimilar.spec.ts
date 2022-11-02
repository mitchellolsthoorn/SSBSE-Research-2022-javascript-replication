export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordqWv6SW = "akE1s6l0XccYyBthT7Lg98xsEbBI9F3vkeup2ViDAk1NP8Iu";
		const _candidatesIpIhXhw = {
		
	}
		const _returnValuenNnrg23 = await suggestSimilar(_wordqWv6SW, _candidatesIpIhXhw)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValuepk8hoNe = 9.517389013880361;
		const _arrayValuey8XgHUt = -9.641398549293292;
		const _wordCVj0PAO = [_arrayValuepk8hoNe, _arrayValuey8XgHUt]
		const _returnValueKbC7HZt = {
		
	}
		const _candidatesUcKiyJ = () => { return _returnValueKbC7HZt };
		const _returnValuetGoKfS = await suggestSimilar(_wordCVj0PAO, _candidatesUcKiyJ)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValuepkbMU4Y = undefined;
		const _returnValuecv4ouFQ = "3Pv1u4Ng1bvND4YJuK7MS2uONzkfB0vnL2I2mad8dXMsyH9g7srAOmFhlPEFJ1kiTtzsaikH1uBgrzcLscliJABt9";
		const _arrayValueupBni4D = () => { return _returnValuecv4ouFQ };
		const _arrayValue6JoThD = true;
		const _returnValuekLVJcWX = [_arrayValuepkbMU4Y, _arrayValueupBni4D, _arrayValue6JoThD]
		const _startsWithJjNYfxR = () => { return _returnValuekLVJcWX };
		const _returnValueMuL6Ahy = null;
		const _sliceX2Yjh40 = () => { return _returnValueMuL6Ahy };
		const _lengthEYCgbS9 = -8.562431953422562;
		const _wordBAaBZY = {
			"startsWith": _startsWithJjNYfxR,
		"slice": _sliceX2Yjh40,
		"length": _lengthEYCgbS9
	}
		const _candidatesvDMMDw = "FM2VdCA";
		const _returnValueofMdkkC = await suggestSimilar(_wordBAaBZY, _candidatesvDMMDw)
	});

	it('test for suggestSimilar', async () => {
		const _wordqPXT2bM = "XPzuR5Cb19ursINTmx4";
		const _arrayValuekeF82f = 3.037044867380633;
		const _arrayValueY04bJSa = "2BRv9RXyzojLlev2En18XWuh9R90VPLpKbUWGnC37qEkNjgF9KkMF9Y1HBfNJ";
		const _returnValueeRxmXYS = undefined;
		const _arrayValueBxm4U3Z = () => { return _returnValueeRxmXYS };
		const _candidatesKOomc1 = [_arrayValuekeF82f, _arrayValueY04bJSa, _arrayValueBxm4U3Z]
		const _returnValuem9Y5dO = await suggestSimilar(_wordqPXT2bM, _candidatesKOomc1)
	});

	it('test for suggestSimilar', async () => {
		const _wordXp4hgny = "5tzwtVG2Ki7srUhDJrP9gC6relSzc5tB6b1ZdEAzReTxdWryz9KAnfnkbb4ZQSJ6sbBX8yF63Db3rJ7Z6DAW8WUUY";
		const _arrayValueggpsRo = -3.6578893316926493;
		const _arrayValueG239JQb = true;
		const _arrayValueKxSnhDS = false;
		const _arrayValuetrMmm4 = "hSAnkpCmnBtyF5ubUIgub6DaGUdgOxWGnhsFnLtNaMCAjiYmeaMPOfnQxQk9CFb3fs1n4SC5SPV3snK5rA8NGRSAs";
		const _candidatesoWhw9jE = [_arrayValueggpsRo, _arrayValueG239JQb, _arrayValueKxSnhDS, _arrayValuetrMmm4]
		const _returnValuecbF35R = await suggestSimilar(_wordXp4hgny, _candidatesoWhw9jE)
	});
})