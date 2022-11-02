export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueCeKrHGy = false;
		const _isValidd1KgkSy = () => { return _returnValueCeKrHGy };
		const _returnValueiTA7VN = false;
		const _valueOfIMHM0im = () => { return _returnValueiTA7VN };
		const _returnValueLZQXx5o = undefined;
		const _cloneckUHASW = () => { return _returnValueLZQXx5o };
		const _timeR1k9r93 = {
			"isValid": _isValidd1KgkSy,
		"valueOf": _valueOfIMHM0im,
		"clone": _cloneckUHASW
	}
		const _arrayValueWIC1KZ5 = 7.3315024805716575;
		const _withoutSuffixyWSY4V9 = [_arrayValueWIC1KZ5]
		const _returnValuerlo6f9 = await to(_timeR1k9r93, _withoutSuffixyWSY4V9)
	});
})