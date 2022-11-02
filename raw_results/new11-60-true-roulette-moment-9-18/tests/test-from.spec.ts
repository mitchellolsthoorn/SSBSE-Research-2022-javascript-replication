export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuejxAMtlE = {
		
	}
		const _isValidTrMlP1p = () => { return _returnValuejxAMtlE };
		const _returnValueB2eeSGA = true;
		const _clonevLqGMN8 = () => { return _returnValueB2eeSGA };
		const _arrayValueHr9yps5 = true;
		const _returnValueQsfLYA8 = [_arrayValueHr9yps5]
		const _toDateRvQ96fx = () => { return _returnValueQsfLYA8 };
		const _returnValue8RcELI = "WDPXPAkPKLQs7L5MO1I";
		const _valueOfhALHZzl = () => { return _returnValue8RcELI };
		const _utcOffsetwT36vHt = null;
		const _timeFXVtkGo = {
			"isValid": _isValidTrMlP1p,
		"clone": _clonevLqGMN8,
		"toDate": _toDateRvQ96fx,
		"valueOf": _valueOfhALHZzl,
		"utcOffset": _utcOffsetwT36vHt
	}
		const _withoutSuffixMth4B3I = -1.2918884037868992;
		const _returnValuep19I1VI = await from(_timeFXVtkGo, _withoutSuffixMth4B3I)
	});
})