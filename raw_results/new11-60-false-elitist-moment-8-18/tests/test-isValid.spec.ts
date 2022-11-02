export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputVm7AW6B = true;
		const _formatKtwgEnm = "K19FDKvtPlOm0abxkkGqwDVJUpvXD2fWQinovOB";
		const _localeukd0Mr9 = null;
		const _isUTCV6fbp2p = "ApvcUWKew";
		const _arrayValuewE0shAO = null;
		const _arrayValueZ7hKVWN = "mHvFFpXkeqLYXTysVB53je9euestkQdWvF0tPgwZ9sAcz";
		const _arrayValueWgmQ4Uc = 9.077151524482236;
		const _strictpNS994S = [_arrayValuewE0shAO, _arrayValueZ7hKVWN, _arrayValueWgmQ4Uc]
		const __iWdydZ8F = {
		
	}
		const __ffkJEzGq = null;
		const __localeTB0no7 = undefined;
		const __isUTCYpebaA1 = "Ainy4yhFkZo6XkULb7rsIWsxeJ39kt3pxurQ2qdIHb";
		const _arrayValueOkXkePA = null;
		const __strictEfwbQCB = [_arrayValueOkXkePA]
		const _mVcTq7qf = {
			"input": _inputVm7AW6B,
		"format": _formatKtwgEnm,
		"locale": _localeukd0Mr9,
		"isUTC": _isUTCV6fbp2p,
		"strict": _strictpNS994S,
		"_i": __iWdydZ8F,
		"_f": __ffkJEzGq,
		"_locale": __localeTB0no7,
		"_isUTC": __isUTCYpebaA1,
		"_strict": __strictEfwbQCB
	}
		const _returnValueJ0OWUbU = await isValid(_mVcTq7qf)
	});
})