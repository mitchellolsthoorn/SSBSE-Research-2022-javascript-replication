export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValueh2YZuCb = true;
		const _inputa4e2dAP = () => { return _returnValueh2YZuCb };
		const _unitsTtwttOu = {
		
	}
		const _returnValuevSRQc8h = await isSame(_inputa4e2dAP, _unitsTtwttOu)
	});
})