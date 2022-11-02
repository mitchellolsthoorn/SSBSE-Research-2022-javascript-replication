export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputI5z0YbP = 5.360913259524713;
		const _arrayValuei2kh10p = null;
		const _arrayValueXApEHU1 = {
		
	}
		const _arrayValueVG9Vk6u = [_arrayValuei2kh10p, _arrayValueXApEHU1]
		const _arrayValueD7Jg8S0 = false;
		const _unitsybSwxOn = [_arrayValueVG9Vk6u, _arrayValueD7Jg8S0]
		const _returnValueUSO0yq1 = await isSameOrBefore(_inputI5z0YbP, _unitsybSwxOn)
	});
})