export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueHnwr34E = undefined;
		const _indexOfOTeP6i = () => { return _returnValueHnwr34E };
		const _typeJWOxVoq = {
			"indexOf": _indexOfOTeP6i
	}
		const _returnValueONsmZFI = await normalizeType(_typeJWOxVoq)
	});

	it('test for normalizeType', async () => {
		const _arrayValue9yjLee = 9.72530563816531;
		const _arrayValueJSkJ4T = true;
		const _typeDyVO8hS = [_arrayValue9yjLee, _arrayValueJSkJ4T]
		const _returnValuepittDuC = await normalizeType(_typeDyVO8hS)
	});
})