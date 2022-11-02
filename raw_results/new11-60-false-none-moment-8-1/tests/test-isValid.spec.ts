export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mMSTQntV = -4.62648139797437;
		const _returnValueiKFPl2J = await isValid(_mMSTQntV)
	});

	it('test for isValid', async () => {
		const _arrayValueYqD5sP = null;
		const _arrayValueev93Qb = "KgN9TCk1Wmb";
		const _mVVvEUoW = [_arrayValueYqD5sP, _arrayValueev93Qb]
		const _returnValueZ8Qlsqw = await isValid(_mVVvEUoW)
	});
})