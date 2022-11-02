export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputreszCzo = true;
		const _formatOhvNxNh = 1.3164322677846325;
		const _localewdKyuXs = null;
		const _isUTCN0QG7n = null;
		const _strictKAwyRYU = undefined;
		const __iRNdlIeg = null;
		const __fTkYfrqr = undefined;
		const __localeqN15UF0 = null;
		const __isUTCKaAWMQy = true;
		const __strictuoBnPE9 = null;
		const _configSnbu9Nb = {
			"input": _inputreszCzo,
		"format": _formatOhvNxNh,
		"locale": _localewdKyuXs,
		"isUTC": _isUTCN0QG7n,
		"strict": _strictKAwyRYU,
		"_i": __iRNdlIeg,
		"_f": __fTkYfrqr,
		"_locale": __localeqN15UF0,
		"_isUTC": __isUTCKaAWMQy,
		"_strict": __strictuoBnPE9
	}
		const _returnValuevvMM4LC = await configFromObject(_configSnbu9Nb)
	});
})