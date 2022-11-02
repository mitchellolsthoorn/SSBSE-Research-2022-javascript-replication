export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputZhAnCjt = "SYrcn4HDbQz2RU9flOlgSC89dVxzr3hN8KSz7yH8jdFLsjuuhZTz6X9jkDXOLAT68fYvJANidxMrC4KdRcyxct";
		const _unitsJvIA9Ts = {
		
	}
		const _returnValueaDvtEJs = {
		
	}
		const _asFloatlKXY4Bf = () => { return _returnValueaDvtEJs };
		const _returnValueXTXxIvH = await diff(_inputZhAnCjt, _unitsJvIA9Ts, _asFloatlKXY4Bf)
	});
})