export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueKf2Xity = {
		
	}
		const _arrayValueiVp7WX4 = null;
		const _arrayValuexz3VQlQ = {
		
	}
		const _returnValueQu1FtkA = [_arrayValueKf2Xity, _arrayValueiVp7WX4, _arrayValuexz3VQlQ]
		const _isValidM3ii8W = () => { return _returnValueQu1FtkA };
		const _timeKfpV3zE = {
			"isValid": _isValidM3ii8W
	}
		const _arrayValuehxYAT3 = -9.26683467338551;
		const _arrayValueDLgXPHU = null;
		const _arrayValueT4rt2jO = {
		
	}
		const _withoutSuffixH7P5Cl7 = [_arrayValuehxYAT3, _arrayValueDLgXPHU, _arrayValueT4rt2jO]
		const _returnValuejzYa9h6 = await from(_timeKfpV3zE, _withoutSuffixH7P5Cl7)
	});
})