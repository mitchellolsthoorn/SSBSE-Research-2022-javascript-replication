export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputRQ489d6 = []
		const _returnValuemHGH9R0 = "bN2C3VBmOmHHHvmzlXaVOQwsa2u2qw0vG35SFkn3kTfm2ctxAUBzGZQlqCXIn7LQVxxF2IJHwHOnzy7b";
		const _arrayValueGNkQvY = () => { return _returnValuemHGH9R0 };
		const _arrayValuelNZD021 = "3CbfoS6BgOGw16piDxOwnsyjvWV9PmdNmEyDN";
		const _arrayValueMHemu8L = 8.598535429019666;
		const _formatXnvMFd = [_arrayValueGNkQvY, _arrayValuelNZD021, _arrayValueMHemu8L]
		const _locales4vv72C = undefined;
		const _isUTCnGQW4TU = undefined;
		const _strictSGaKiU8 = "WihNLtmi0inrre2HIcXcvd";
		const __iJeDFZly = null;
		const _arrayValuejWb8pa = null;
		const _arrayValueW6f6ASq = 4.0101218138161325;
		const _arrayValueiFgLZTP = undefined;
		const _arrayValueWkxoixM = undefined;
		const _arrayValuem7aWy1c = [_arrayValueiFgLZTP, _arrayValueWkxoixM]
		const __fyaNhuzX = [_arrayValuejWb8pa, _arrayValueW6f6ASq, _arrayValuem7aWy1c]
		const __localedbioXNX = null;
		const __isUTCdQ1g9hi = undefined;
		const __strictErmwnV = []
		const _mGGi1ntd = {
			"input": _inputRQ489d6,
		"format": _formatXnvMFd,
		"locale": _locales4vv72C,
		"isUTC": _isUTCnGQW4TU,
		"strict": _strictSGaKiU8,
		"_i": __iJeDFZly,
		"_f": __fyaNhuzX,
		"_locale": __localedbioXNX,
		"_isUTC": __isUTCdQ1g9hi,
		"_strict": __strictErmwnV
	}
		const _returnValueKtGZaLp = await isValid(_mGGi1ntd)
	});
})