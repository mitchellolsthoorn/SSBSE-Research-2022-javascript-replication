export {}
import checkOverflow from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/check-overflow.js";

describe('checkOverflow', () => {
	it('test for checkOverflow', async () => {
		const _returnValueSHUmvKn = null;
		const _arrayValueURrcAlV = () => { return _returnValueSHUmvKn };
		const _arrayValueXh6Upi7 = false;
		const _arrayValuec8gKEod = null;
		const _arrayValueFZkQbKg = undefined;
		const _arrayValuenpFSNn = undefined;
		const _arrayValueBPNRXhK = [_arrayValuec8gKEod, _arrayValueFZkQbKg, _arrayValuenpFSNn]
		const _mHZB0K4F = [_arrayValueURrcAlV, _arrayValueXh6Upi7, _arrayValueBPNRXhK]
		const _returnValueK69GXVa = await checkOverflow(_mHZB0K4F)
	});

	it('test for checkOverflow', async () => {
		const _arrayValuePUT7O8v = -5.0862301908441845;
		const _returnValueur5GHi8 = [_arrayValuePUT7O8v]
		const __aTGzZauz = () => { return _returnValueur5GHi8 };
		const _mOngK8hd = {
			"_a": __aTGzZauz
	}
		const _returnValueces99Xp = await checkOverflow(_mOngK8hd)
	});

	it('test for checkOverflow', async () => {
		const _arrayValueKbuf2o5 = 1.3956048999173944;
		const _arrayValuesjF3NtE = -7.364388965074605;
		const _arrayValueftCPhUF = null;
		const __aUhcSBfy = [_arrayValueKbuf2o5, _arrayValuesjF3NtE, _arrayValueftCPhUF]
		const _mgzrPx1F = {
			"_a": __aUhcSBfy
	}
		const _returnValuehBtA1sx = await checkOverflow(_mgzrPx1F)
	});
})