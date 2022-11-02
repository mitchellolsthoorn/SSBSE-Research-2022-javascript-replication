export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValuei1EVSb = null;
		const _inputDTdnPua = [_arrayValuei1EVSb]
		const _formatEiLRXiV = undefined;
		const _localem53LIln = 2.1840743214364373;
		const _isUTCOh7WXiK = null;
		const _strictnppcgO = false;
		const __iCwtlBJo = undefined;
		const __ftbFEyPa = false;
		const __localeVESrK0Z = -9.593725674157017;
		const __isUTCOmEVzkR = null;
		const __strictvOy3WLI = 7.35647817852303;
		const _confignLvcO7Y = {
			"input": _inputDTdnPua,
		"format": _formatEiLRXiV,
		"locale": _localem53LIln,
		"isUTC": _isUTCOh7WXiK,
		"strict": _strictnppcgO,
		"_i": __iCwtlBJo,
		"_f": __ftbFEyPa,
		"_locale": __localeVESrK0Z,
		"_isUTC": __isUTCOmEVzkR,
		"_strict": __strictvOy3WLI
	}
		const _returnValueNXIyFXs = await configFromObject(_confignLvcO7Y)
	});
})