export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _mArbCD2R = "kPQ7FpkaV9eXWBtuThMhLYcWPCPEafTO2r5yr5zhBvt9WFxjipnxJZvXe2xyWM24AVYqhbMPGQkOCB4YuIJwy2wbdraew";
		const _returnValueAzbTcOj = -8.223918847521055;
		const _returnValueQhHqpQO = () => { return _returnValueAzbTcOj };
		const _cellIndicesdIx5273 = () => { return _returnValueQhHqpQO };
		const _returnValueLu7Gb7L = await getCellAtIndex(_mArbCD2R, _cellIndicesdIx5273)
	});

	it('test for getCellAtIndex', async () => {
		const _arrayValued189DjR = "rFc1kTviKArZKJm7uSEmyexOfpmzESS2CKZbHAju1JT5ypkdHNzNGgFA5zYMwA7LYeHcw9y0WcoNwertp7VI";
		const _arrayValuedL0S2jt = "mLVnZkPWJMNGXdw";
		const _returnValueWpniPPG = [_arrayValued189DjR, _arrayValuedL0S2jt]
		const _mAuJan4M = () => { return _returnValueWpniPPG };
		const _cellIndicesvsCHGq = "JT8YZs1CVylG9TgrxOJMg8lAh";
		const _returnValueuUNPYfi = await getCellAtIndex(_mAuJan4M, _cellIndicesvsCHGq)
	});
})