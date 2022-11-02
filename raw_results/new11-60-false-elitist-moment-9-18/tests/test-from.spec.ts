export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueAJR265K = 7.700467823451675;
		const _isValidJWc3rHA = () => { return _returnValueAJR265K };
		const _timeDfdKWjk = {
			"isValid": _isValidJWc3rHA
	}
		const _withoutSuffixzq6BjTs = undefined;
		const _returnValuePYxk8yO = await from(_timeDfdKWjk, _withoutSuffixzq6BjTs)
	});
})