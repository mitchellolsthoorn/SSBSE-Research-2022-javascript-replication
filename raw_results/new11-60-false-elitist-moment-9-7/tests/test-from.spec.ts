export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueeFmV49f = true;
		const _arrayValuekT66gkO = true;
		const _returnValues95Wbi5 = {
		
	}
		const _returnValueaLmqQdb = () => { return _returnValues95Wbi5 };
		const _returnValuehRlVv0Y = () => { return _returnValueaLmqQdb };
		const _arrayValueoWE129g = () => { return _returnValuehRlVv0Y };
		const _returnValuenizJ5op = [_arrayValueeFmV49f, _arrayValuekT66gkO, _arrayValueoWE129g]
		const _isValidGAIBBzN = () => { return _returnValuenizJ5op };
		const _timezzMa5sw = {
			"isValid": _isValidGAIBBzN
	}
		const _withoutSuffixBo25QqA = -5.557527099350114;
		const _returnValuetkvPcrA = await from(_timezzMa5sw, _withoutSuffixBo25QqA)
	});
})