export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromnyi2MJ2 = 4.552311212064229;
		const _toSbX9zzX = undefined;
		const _unitsKzJ1SoX = -1.6268257067818954;
		const _inclusivity7VkJWK = undefined;
		const _returnValuesS7rg3Q = await isBetween(_fromnyi2MJ2, _toSbX9zzX, _unitsKzJ1SoX, _inclusivity7VkJWK)
	});
})