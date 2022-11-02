export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthX0IoA3C = -6.480746811203327;
		const _typesjt8tdFg = {
			"length": _lengthX0IoA3C
	}
		const _returnValueCJlFAxW = await normalizeTypes(_typesjt8tdFg)
	});

	it('test for normalizeTypes', async () => {
		const _lengthnY3a3es = 4.278573996169069;
		const _typesYEuqQ3 = {
			"length": _lengthnY3a3es
	}
		const _returnValueGKjnB8m = await normalizeTypes(_typesYEuqQ3)
	});

	it('test for normalizeTypes', async () => {
		const _typesqYAh0Xh = "SIRe9ROfoVvpYm6o9uEJ6jzd6Cy6NbET0qlDvR2YgH5imoj8q0GvTss8lvdTBNiWtWnT855tePQ5a";
		const _returnValuefSKIraS = await normalizeTypes(_typesqYAh0Xh)
	});
})