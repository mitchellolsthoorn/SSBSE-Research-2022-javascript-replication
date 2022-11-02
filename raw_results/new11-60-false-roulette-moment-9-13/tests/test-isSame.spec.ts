export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueNFeCfoT = true;
		const _arrayValuewy1VR63 = false;
		const _arrayValueqNqddSU = 8.754672524326853;
		const _arrayValueDX8IsPu = undefined;
		const _inputpNqBpXD = [_arrayValueNFeCfoT, _arrayValuewy1VR63, _arrayValueqNqddSU, _arrayValueDX8IsPu]
		const _unitsKZXFOzc = "XHwqsTvMGMqyW0F";
		const _returnValueIchqZKB = await isSame(_inputpNqBpXD, _unitsKZXFOzc)
	});

	it('test for isSame', async () => {
		const _inputrb7B2uh = -0.009082131488447942;
		const _unitsdNEEx5 = {
		
	}
		const _returnValuen9WLgwm = await isSame(_inputrb7B2uh, _unitsdNEEx5)
	});
})