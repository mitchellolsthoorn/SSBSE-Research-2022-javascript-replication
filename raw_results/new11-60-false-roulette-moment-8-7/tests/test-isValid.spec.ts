export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueE8fRO7H = undefined;
		const _arrayValuevHknyzC = true;
		const _arrayValueJIQI98F = {
		
	}
		const _arrayValueeSzaFWZ = [_arrayValuevHknyzC, _arrayValueJIQI98F]
		const _mGYM7Czx = [_arrayValueE8fRO7H, _arrayValueeSzaFWZ]
		const _returnValueOu8YKK8 = await isValid(_mGYM7Czx)
	});
})