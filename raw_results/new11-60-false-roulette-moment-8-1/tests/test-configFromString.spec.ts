export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _inputOd94gCh = -5.228805634153263;
		const _formatrCsyvyj = false;
		const _localehaStwff = null;
		const _isUTCsHUjUoG = undefined;
		const _arrayValues9uppn = "GAt3HouTHk3t9lVqMdyPq64iyKmYiVR5Qtidy8e8BNDCtHWKkWdt1TJ2";
		const _arrayValuewqkDN9e = undefined;
		const _arrayValueZQ5h4Za = [_arrayValuewqkDN9e]
		const _returnValueslJNqFN = [_arrayValueZQ5h4Za]
		const _arrayValuemtKIldr = () => { return _returnValueslJNqFN };
		const _arrayValuehH04Lh8 = false;
		const _strictnUsaOxo = [_arrayValues9uppn, _arrayValuemtKIldr, _arrayValuehH04Lh8]
		const __ihSVVsZD = undefined;
		const __f0IVqHF = true;
		const __localeKh31yvD = {
		
	}
		const __isUTCskUedci = "lDdMRYrITZuoB74LsN1OjmyhMAyLYgorWOUou1ObkEk";
		const __strictOazsCyC = {
		
	}
		const _configPesMf8N = {
			"input": _inputOd94gCh,
		"format": _formatrCsyvyj,
		"locale": _localehaStwff,
		"isUTC": _isUTCsHUjUoG,
		"strict": _strictnUsaOxo,
		"_i": __ihSVVsZD,
		"_f": __f0IVqHF,
		"_locale": __localeKh31yvD,
		"_isUTC": __isUTCskUedci,
		"_strict": __strictOazsCyC
	}
		const _returnValuerZn3aOh = await configFromString(_configPesMf8N)
	});

	it('test for configFromString', async () => {
		const _inputLqYEfw = undefined;
		const _formatPEhR3ng = []
		const _localefz5jxjc = -0.40173137447239604;
		const _isUTCq0pUKeM = "uQlnBEi0hH9oYdmsBzya9dMRjUcQkHHvhhTl1TKNt1pi1xvTn";
		const _stricthBkGak6 = true;
		const __iLW5CIyy = "4y2XpAQ73Mh4zqnllyhYBxV1fUp8v1WogjYYYidpUK9TdCOPhZ";
		const __fl1QgjxM = null;
		const __localeqGHhJv0 = undefined;
		const __isUTCszgCDka = undefined;
		const __strictjZd56eW = "71okeFj5obFSkhdaBlmeXrblWo8XrEyXGcPxNs";
		const _configKQhVIeM = {
			"input": _inputLqYEfw,
		"format": _formatPEhR3ng,
		"locale": _localefz5jxjc,
		"isUTC": _isUTCq0pUKeM,
		"strict": _stricthBkGak6,
		"_i": __iLW5CIyy,
		"_f": __fl1QgjxM,
		"_locale": __localeqGHhJv0,
		"_isUTC": __isUTCszgCDka,
		"_strict": __strictjZd56eW
	}
		const _returnValueOTeeudc = await configFromString(_configKQhVIeM)
	});

	it('test for configFromString', async () => {
		const __iLUz8zFX = "Ee1Wagp6W3QdB6uM9lplOWj2Qu3qsY1QiYU8xSRDmc5DDuncAJenkmCF";
		const _isValidfHkK2eC = null;
		const _returnValueNArpmZh = -3.7457853638047602;
		const _isLocalpTysEjU = () => { return _returnValueNArpmZh };
		const _returnValueNvMYIB6 = "Qp9k";
		const _utcOffseta5b10lf = () => { return _returnValueNvMYIB6 };
		const _returnValueVSJkPrH = undefined;
		const _yearqF3v6mO = () => { return _returnValueVSJkPrH };
		const _arrayValueIbQefCb = {
		
	}
		const _arrayValueHLT6ZaT = {
		
	}
		const _arrayValueLovX8q8 = -3.814818934665797;
		const _returnValuewj5NgH = [_arrayValueIbQefCb, _arrayValueHLT6ZaT, _arrayValueLovX8q8]
		const _formatFHe7jjP = () => { return _returnValuewj5NgH };
		const _configGjfSH7F = {
			"_i": __iLUz8zFX,
		"isValid": _isValidfHkK2eC,
		"isLocal": _isLocalpTysEjU,
		"utcOffset": _utcOffseta5b10lf,
		"year": _yearqF3v6mO,
		"format": _formatFHe7jjP
	}
		const _returnValuePbjwkzk = await configFromString(_configGjfSH7F)
	});
})