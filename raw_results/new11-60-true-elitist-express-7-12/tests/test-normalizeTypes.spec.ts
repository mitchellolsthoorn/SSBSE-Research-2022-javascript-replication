export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _typesBN7xkr = -2.649880110249957;
		const _returnValueeYrRWOA = await normalizeTypes(_typesBN7xkr)
	});

	it('test for normalizeTypes', async () => {
		const _lengthclChm96 = 6.212672003102934;
		const _typesnsmFBAg = {
			"length": _lengthclChm96
	}
		const _returnValueFSwAcI = await normalizeTypes(_typesnsmFBAg)
	});

	it('test for normalizeTypes', async () => {
		const _typesBEh5dZH = "1132MmmcLLuqJEUWdBedsjWAFmcpR5iUxWE5X03p1BW54m0XUHcHUV26X0iMo5DnQvTbjzT5ITlvexLB6gOVFT7DVttpYwB";
		const _returnValueYS8Vmym = await normalizeTypes(_typesBEh5dZH)
	});
})