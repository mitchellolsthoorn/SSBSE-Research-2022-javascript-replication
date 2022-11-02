export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valoWXIaPn = "L3rqLcBiBp";
		const _returnValueY4x8UiY = await compileTrust(_valoWXIaPn)
	});

	it('test for compileTrust', async () => {
		const _arrayValuenaIhA6H = "332Ru4N4RzCyPOP7IKOoNldqwHj5U8wFdo3tYictZgG0tXpFtHiwxm0m8rKrUAfm1S2dbHS9Zu7Qd";
		const _arrayValuebLqGuii = {
		
	}
		const _arrayValue4LIPta = "J9fUjsc9vkRG4ZpvVxIRODZI2GkJtiwsajuqABlV3yf";
		const _valVrM7wAo = [_arrayValuenaIhA6H, _arrayValuebLqGuii, _arrayValue4LIPta]
		const _returnValueVbBkGkm = await compileTrust(_valVrM7wAo)
	});

	it('test for compileTrust', async () => {
		const _valy238n90 = 4.452332083893719;
		const _returnValueB5SeiO0 = await compileTrust(_valy238n90)
	});

	it('test for compileTrust', async () => {
		const _returnValueh8MtgRh = undefined;
		const _valGtW3gdL = () => { return _returnValueh8MtgRh };
		const _returnValueBb3WcLj = await compileTrust(_valGtW3gdL)
	});

	it('test for compileTrust', async () => {
		const _valB3PeHq = true;
		const _returnValuelLc727 = await compileTrust(_valB3PeHq)
	});
})