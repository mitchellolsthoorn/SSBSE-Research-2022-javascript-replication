export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueCc3udFh = null;
		const _arrayValueMvtZQb = 4.204169666317068;
		const _arrayValueA1ateOp = [_arrayValueMvtZQb]
		const _flagsjYT0LH6 = [_arrayValueCc3udFh, _arrayValueA1ateOp]
		const _returnValuehQe0ikc = await splitOptionFlags(_flagsjYT0LH6)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsSblTySs = "IXRqX5jntPzaveo9IhS2";
		const _returnValuejwQP5Jo = await splitOptionFlags(_flagsSblTySs)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuevKgCsUq = "Uih1yqhgGwGtCzvyqwwAAjoJ2RjmYnrleO8A37Jn6Xjturhz7IRlHm1kceFfrJfD1XQBth03i";
		const _splitvwqzXi3 = () => { return _returnValuevKgCsUq };
		const _flagsTHmzgnt = {
			"split": _splitvwqzXi3
	}
		const _returnValueprOMNhU = await splitOptionFlags(_flagsTHmzgnt)
	});
})