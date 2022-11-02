export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueunPR9W3 = "yCs71lQalYwAs1YlIebkez9WMVFvnNmG";
		const _isValidpqefKNo = () => { return _returnValueunPR9W3 };
		const _timegNQbJ8w = {
			"isValid": _isValidpqefKNo
	}
		const _withoutSuffixEbM7wv2 = -4.845349711371162;
		const _returnValueT56oho6 = await from(_timegNQbJ8w, _withoutSuffixEbM7wv2)
	});
})