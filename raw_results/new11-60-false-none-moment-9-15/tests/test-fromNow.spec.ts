export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _arrayValueytSwk2 = 8.445425530035052;
		const _returnValuejRbnOCd = [_arrayValueytSwk2]
		const _withoutSuffixJNOjLK = () => { return _returnValuejRbnOCd };
		const _returnValueHFMnRFo = await fromNow(_withoutSuffixJNOjLK)
	});
})