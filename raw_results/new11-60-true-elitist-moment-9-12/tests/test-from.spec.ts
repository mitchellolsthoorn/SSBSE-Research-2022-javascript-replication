export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _isValidW1qOjfp = true;
		const _timeC4Q8nsR = {
			"isValid": _isValidW1qOjfp
	}
		const _withoutSuffixj9XLJ8o = 0.06632779177697756;
		const _returnValuelrA2dm = await from(_timeC4Q8nsR, _withoutSuffixj9XLJ8o)
	});
})