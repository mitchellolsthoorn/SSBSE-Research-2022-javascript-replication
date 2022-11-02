export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputqZJZAFr = true;
		const _format4KksRR = undefined;
		const _localeT6imRL6 = "LSnoC2Dcl2KPQSfg43X62FEfwzuS27LEmlMP2eVwId36en2g4rfuuiJYwYkoyfrHb57pQEYBoa7eunuZGYkp";
		const _arrayValueILXt4F = false;
		const _arrayValue9NaqZZ = "uhAbHGYnG6ME7QKRugqtLIEtLYOdkkRtuo775WOji4kgsHa4asOMq5BloJaWUxpeGV19IscKG3JYGEtGaTXpbe";
		const _arrayValueIBTxnMF = null;
		const _arrayValueEmEJ6ub = -9.133428196238926;
		const _arrayValueTWQrmjU = "HQdSxU2YydPTZ5ZKnfNVrq5fSkOmNAW5rxtxwsfANTTnODW3cTngwpBS19EgtUlSTf8I37XWvTqFmKKPgzA8mN95Hs3";
		const _arrayValueCWpbvSo = [_arrayValueEmEJ6ub, _arrayValueTWQrmjU]
		const _arrayValueg8Tt0ES = "YzWRgsjhNF3";
		const _arrayValueRcZGtXB = [_arrayValueIBTxnMF, _arrayValueCWpbvSo, _arrayValueg8Tt0ES]
		const _isUTCbfCVroW = [_arrayValueILXt4F, _arrayValue9NaqZZ, _arrayValueRcZGtXB]
		const _strictEq3MkQQ = undefined;
		const _arrayValueZjw1i84 = {
		
	}
		const _arrayValuep4lNB6 = "U8jAPxdpMXGHKGE4egJ";
		const _arrayValuebkrOmtL = true;
		const _arrayValuePmUYB5m = -1.0498849016097527;
		const _arrayValueAinj2i0 = undefined;
		const __ip4xNMVq = [_arrayValueZjw1i84, _arrayValuep4lNB6, _arrayValuebkrOmtL, _arrayValuePmUYB5m, _arrayValueAinj2i0]
		const __fmARFvm6 = {
		
	}
		const __localezMhWoBN = []
		const __isUTCR0hhJHZ = null;
		const __strictGWJA33o = []
		const _mxQrAJGt = {
			"input": _inputqZJZAFr,
		"format": _format4KksRR,
		"locale": _localeT6imRL6,
		"isUTC": _isUTCbfCVroW,
		"strict": _strictEq3MkQQ,
		"_i": __ip4xNMVq,
		"_f": __fmARFvm6,
		"_locale": __localezMhWoBN,
		"_isUTC": __isUTCR0hhJHZ,
		"_strict": __strictGWJA33o
	}
		const _returnValueKmnqVDZ = await isValid(_mxQrAJGt)
	});
})