export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromL4q57vk = null;
		const _toF2ccIpE = -9.953488419729126;
		const _returnValueIAJyl6 = undefined;
		const _units1gjosq = () => { return _returnValueIAJyl6 };
		const _arrayValue1ZZpJN = true;
		const _arrayValuer20Fcpt = {
		
	}
		const _inclusivityrrLWGJ4 = [_arrayValue1ZZpJN, _arrayValuer20Fcpt]
		const _returnValueFck60Wc = await isBetween(_fromL4q57vk, _toF2ccIpE, _units1gjosq, _inclusivityrrLWGJ4)
	});
})