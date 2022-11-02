export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valHBGZqFx = "g0xVL8hv14VFY9V5DyO3iTCsF1XQU3Gco";
		const _returnValueKmqaAIS = await compileTrust(_valHBGZqFx)
	});

	it('test for compileTrust', async () => {
		const _valOt04vP = null;
		const _returnValuewbmd6vm = await compileTrust(_valOt04vP)
	});

	it('test for compileTrust', async () => {
		const _valBeHkwzQ = -0.22739113005669154;
		const _returnValuexOj8iF1 = await compileTrust(_valBeHkwzQ)
	});

	it('test for compileTrust', async () => {
		const _returnValueG4iylf9 = "MlTQPd9IGXXK8KPVHv65qw7LdAtVQyFZpSxE9E2kh";
		const _valXme9YPg = () => { return _returnValueG4iylf9 };
		const _returnValue7i5dkn = await compileTrust(_valXme9YPg)
	});

	it('test for compileTrust', async () => {
		const _valxWy3jD = true;
		const _returnValueFCQd5o7 = await compileTrust(_valxWy3jD)
	});
})