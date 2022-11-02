export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueywB2EuG = true;
		const _indexOfFdCK7w = () => { return _returnValueywB2EuG };
		const _typep3ODRvk = {
			"indexOf": _indexOfFdCK7w
	}
		const _returnValueHOlc137 = await normalizeType(_typep3ODRvk)
	});

	it('test for normalizeType', async () => {
		const _typetUBaVkK = "ghMvXdnyWwkY9VqjXgHsIaRWrfm54Uc6BVk2jrIQLdv3tvyLsAw138795d6frixInSE7v";
		const _returnValuejhRl2Fu = await normalizeType(_typetUBaVkK)
	});
})