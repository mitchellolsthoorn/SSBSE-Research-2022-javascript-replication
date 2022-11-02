export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueDHWvLAH = undefined;
		const _returnValueqBPTaE = [_arrayValueDHWvLAH]
		const _isValidHlKx3oD = () => { return _returnValueqBPTaE };
		const _returnValueFyfTXaV = {
		
	}
		const _localeDatamR3zAap = () => { return _returnValueFyfTXaV };
		const _timen5ZHGem = {
			"isValid": _isValidHlKx3oD,
		"localeData": _localeDatamR3zAap
	}
		const _withoutSuffixocz98Fq = false;
		const _returnValueYcJqmq = await from(_timen5ZHGem, _withoutSuffixocz98Fq)
	});
})