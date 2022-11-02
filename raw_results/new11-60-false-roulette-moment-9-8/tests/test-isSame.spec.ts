export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputUnQw0rh = "YlduGknFgVrnywcizhWMwXHGDF14BUGAWIr6Ree2vw3LvuPylC7";
		const _unitsaFwBpv = {
		
	}
		const _returnValueiG25afq = await isSame(_inputUnQw0rh, _unitsaFwBpv)
	});

	it('test for isSame', async () => {
		const _inputvgao9Ar = false;
		const _unitsFcaMJF = "t8Y49yJnT5ONOHYo6sVSJ5hL9gEBgSXgm6fmOkPKGjCuWy7Ngd5sgw5dSRX9iqcUGaz63a";
		const _returnValuevTdgU1 = await isSame(_inputvgao9Ar, _unitsFcaMJF)
	});
})