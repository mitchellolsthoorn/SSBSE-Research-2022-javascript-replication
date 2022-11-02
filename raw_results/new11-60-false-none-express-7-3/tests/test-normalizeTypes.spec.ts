export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _arrayValueUw1SEN = null;
		const _arrayValueOPSesmL = null;
		const _arrayValuesjnbrFK = undefined;
		const _arrayValueEVHVN9d = "YUbWNFu23u2hnu8auOeG3uZNZ6dBwx9u1l5OyMyXiL6TN2T";
		const _typesupsFkn4 = [_arrayValueUw1SEN, _arrayValueOPSesmL, _arrayValuesjnbrFK, _arrayValueEVHVN9d]
		const _returnValueWmrFjRJ = await normalizeTypes(_typesupsFkn4)
	});

	it('test for normalizeTypes', async () => {
		const _typesVk5NUaY = "AzhJfGkGB9";
		const _returnValuei6Xitw = await normalizeTypes(_typesVk5NUaY)
	});
})