export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthh55W7Hw = 4.263339190337556;
		const _typesMo7pkbd = {
			"length": _lengthh55W7Hw
	}
		const _returnValuebT4C4hN = await normalizeTypes(_typesMo7pkbd)
	});

	it('test for normalizeTypes', async () => {
		const _lengthtaeWD2u = -2.7631214651504514;
		const _typesOTrFqZ2 = {
			"length": _lengthtaeWD2u
	}
		const _returnValueLxyGIdp = await normalizeTypes(_typesOTrFqZ2)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValuebhcQPwF = "xzJQYKhCjxdfi7Gh9d281IrAU3dT59S21P1Eoqq2e5k0TsmSwp6sjzRSL14EyF29V00CSrOZCOWMvn7YQ2fAKgbU2eOXmH";
		const _arrayValuem0iv2xb = [_arrayValuebhcQPwF]
		const _typesThfZ1qk = [_arrayValuem0iv2xb]
		const _returnValueCE5XGNT = await normalizeTypes(_typesThfZ1qk)
	});
})