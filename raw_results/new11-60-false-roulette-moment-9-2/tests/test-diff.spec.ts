export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueQ8neYUz = "JKedwVGw56bo2w4CdjfOmlws2Afrs7VkgqMqXd9xKXcPm6Wcu7gcXFaGuEOxeDDRh";
		const _arrayValuep3qzA4b = null;
		const _arrayValuedUaJkOI = null;
		const _arrayValuegUftkm1 = null;
		const _inputM9URUBp = [_arrayValueQ8neYUz, _arrayValuep3qzA4b, _arrayValuedUaJkOI, _arrayValuegUftkm1]
		const _unitsfPua0Fg = {
		
	}
		const _asFloat61coo8 = true;
		const _returnValueQ6jnCDn = await diff(_inputM9URUBp, _unitsfPua0Fg, _asFloat61coo8)
	});
})