export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagstsbqY3E = "l1GeKXAOx6nrY5Rnq8rtluJhCGSlRXHZ7aRb078ChGyFAJ8VEoujHFG1xpLszqctSAJ2FE9Ngd2AG0A";
		const _returnValueWplEipE = await splitOptionFlags(_flagstsbqY3E)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuec1DbEy = "8yiPnxX16EKDa6FNkTb1pT2A08wQyto7SnY9LNh3RjtxBkuEFKOnYZCJuErHCB9n9tYLHsWpyV0me";
		const _splitDfByLNX = () => { return _returnValuec1DbEy };
		const _flagsv0RbYEO = {
			"split": _splitDfByLNX
	}
		const _returnValuehNd4S3h = await splitOptionFlags(_flagsv0RbYEO)
	});
})