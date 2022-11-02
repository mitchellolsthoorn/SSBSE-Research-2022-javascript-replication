export {}
import {walk} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('walk', () => {
	it('test for walk', async () => {
		const _mEQipOmw = false;
		const _visitdxPBB7x = true;
		const _returnValueR9giXBW = await walk(_mEQipOmw, _visitdxPBB7x)
	});

	it('test for walk', async () => {
		const _arrayValueBgBkSD = -7.7496840333694985;
		const _arrayValueQPWP2dE = undefined;
		const _mRSQu6WN = [_arrayValueBgBkSD, _arrayValueQPWP2dE]
		const _visit1keFVn = false;
		const _returnValueCNBViuq = await walk(_mRSQu6WN, _visit1keFVn)
	});

	it('test for walk', async () => {
		const _arrayValueT0L70fE = null;
		const _mJY4Ndo = [_arrayValueT0L70fE]
		const _returnValuel0ByRs8 = undefined;
		const _visitKvkBWWN = () => { return _returnValuel0ByRs8 };
		const _returnValuePsV8hn2 = await walk(_mJY4Ndo, _visitKvkBWWN)
	});
})