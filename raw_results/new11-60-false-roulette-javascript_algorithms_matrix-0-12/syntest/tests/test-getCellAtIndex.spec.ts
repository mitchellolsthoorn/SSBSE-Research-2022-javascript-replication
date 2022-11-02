export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _mNl8gakt = "NWaOMjDgK8dec";
		const _returnValueY1AWVI = false;
		const _arrayValueXgMbQ7K = () => { return _returnValueY1AWVI };
		const _arrayValueSZdQZDg = -7.111706218498144;
		const _arrayValuetyp1fLm = 9.858022904363477;
		const _arrayValueRAmHn9n = "j8izdfr";
		const _arrayValueUMaERzo = true;
		const _arrayValueOWy6Gzh = -2.5490312776515474;
		const _returnValueafpzlk1 = [_arrayValueUMaERzo, _arrayValueOWy6Gzh]
		const _returnValuesXoEU65 = () => { return _returnValueafpzlk1 };
		const _arrayValueasc0NPp = () => { return _returnValuesXoEU65 };
		const _arrayValuevQSJkpg = true;
		const _arrayValuemcs4OML = [_arrayValuetyp1fLm, _arrayValueRAmHn9n, _arrayValueasc0NPp, _arrayValuevQSJkpg]
		const _cellIndiceszSE4KRc = [_arrayValueXgMbQ7K, _arrayValueSZdQZDg, _arrayValuemcs4OML]
		const _returnValueigsJTJ1 = await getCellAtIndex(_mNl8gakt, _cellIndiceszSE4KRc)
	});

	it('test for getCellAtIndex', async () => {
		const _mUQQoLQn = "NpnAxCfbPNhVlpl1SPyaXA3eJWF3vM1oOkpfuARpJJjlchImdQiD9hktXc3rjcWjdckHI1SefGpEowYyTXzR4cjWS4GgV";
		const _lengthXKIbhaT = -6.536870179467094;
		const _cellIndicescCUnJLJ = {
			"length": _lengthXKIbhaT
	}
		const _returnValuekaLaxZT = await getCellAtIndex(_mUQQoLQn, _cellIndicescCUnJLJ)
	});
})