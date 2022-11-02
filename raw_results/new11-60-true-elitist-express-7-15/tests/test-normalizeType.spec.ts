export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValuegPmwYLE = undefined;
		const _returnValueN4HgmFw = [_arrayValuegPmwYLE]
		const _indexOfIvKxXle = () => { return _returnValueN4HgmFw };
		const _typeEJ3JKaq = {
			"indexOf": _indexOfIvKxXle
	}
		const _returnValueWtSyEU = await normalizeType(_typeEJ3JKaq)
	});

	it('test for normalizeType', async () => {
		const _typed5Tp4es = "17fPjVLnwwkKRJ3i8XJi7Ke22rGSakW";
		const _returnValuenXQXvcU = await normalizeType(_typed5Tp4es)
	});
})