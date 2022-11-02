export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsjW9pGPK = "J9OUL1d6ZCvngtSlAu7dhriUhtgnzRMAIqlkJO1uWHSKcUzbAs8K3vxXOdzBzVKgJO13sUOBavq2r0JXM5JTl6Xxbboa";
		const _returnValueNx7VgHt = await splitOptionFlags(_flagsjW9pGPK)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueFvl4X5F = "MO074nOjje7mdI6yItsjIpapmfCv4vrK1F8r2eBpRpH666ahiDeNKKlzSVmXBiTsbKFr5seWO4kWa5pWD4LBPC2L7WhewrV";
		const _splitwXIJwVJ = () => { return _returnValueFvl4X5F };
		const _flagsrUNfuSI = {
			"split": _splitwXIJwVJ
	}
		const _returnValueUIH0NpT = await splitOptionFlags(_flagsrUNfuSI)
	});
})