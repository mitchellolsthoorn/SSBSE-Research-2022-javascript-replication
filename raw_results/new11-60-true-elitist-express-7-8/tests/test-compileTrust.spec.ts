export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valTfpwhRT = undefined;
		const _returnValueHZcwq4l = await compileTrust(_valTfpwhRT)
	});

	it('test for compileTrust', async () => {
		const _valKTNzb43 = "VoH9FksVhr0Dlu8VID627yxgOiSJjMbuwVQwIdlfISbetIaAyEWyrXWK4CYK3hOAYEohSruoAKaqaWNBmyeyd";
		const _returnValueqYK68Y = await compileTrust(_valKTNzb43)
	});

	it('test for compileTrust', async () => {
		const _valQC5oGhl = -9.005293334012375;
		const _returnValueYU8RjI = await compileTrust(_valQC5oGhl)
	});

	it('test for compileTrust', async () => {
		const _returnValueTfiWPWe = true;
		const _valMCsmYEW = () => { return _returnValueTfiWPWe };
		const _returnValueyi3E7OD = await compileTrust(_valMCsmYEW)
	});

	it('test for compileTrust', async () => {
		const _valIFfAqyz = true;
		const _returnValueiueKCZo = await compileTrust(_valIFfAqyz)
	});
})