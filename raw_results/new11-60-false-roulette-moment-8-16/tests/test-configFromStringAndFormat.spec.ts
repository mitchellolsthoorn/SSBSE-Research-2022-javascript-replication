export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _returnValuepPIwRx2 = undefined;
		const _utcOffsetsMWWS8g = () => { return _returnValuepPIwRx2 };
		const _returnValuenIvSXJC = undefined;
		const __tzmJd9yNae = () => { return _returnValuenIvSXJC };
		const __icNGQrW = 5.696652816750159;
		const _config2E1OJD = {
			"utcOffset": _utcOffsetsMWWS8g,
		"_tzm": __tzmJd9yNae,
		"_i": __icNGQrW
	}
		const _returnValuepCVEU88 = await configFromStringAndFormat(_config2E1OJD)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputLS4y13t = "gZqwAnHXaaoxhC65h24yhKSXbr1mP49GB6oGcoQr4j3XAuyMzBU2Fc7IMdD54I";
		const _formatFZil7Mg = undefined;
		const _arrayValuel4g4JE = 4.177472401061344;
		const _arrayValueGAIc6lh = undefined;
		const _arrayValueeTYmUYN = null;
		const _arrayValuePD09Dqd = [_arrayValuel4g4JE, _arrayValueGAIc6lh, _arrayValueeTYmUYN]
		const _arrayValueXDFwFRS = undefined;
		const _localekQMH8bZ = [_arrayValuePD09Dqd, _arrayValueXDFwFRS]
		const _isUTCKcrYBZL = null;
		const _strictIEMDnGc = false;
		const __iCLh3CxY = 8.164640738937855;
		const __fMbSzVLG = "D4KovJQ1t";
		const __localecI9EpPc = {
		
	}
		const __isUTCDMOfcFo = true;
		const __strictTPToIca = {
		
	}
		const _configOa8SJia = {
			"input": _inputLS4y13t,
		"format": _formatFZil7Mg,
		"locale": _localekQMH8bZ,
		"isUTC": _isUTCKcrYBZL,
		"strict": _strictIEMDnGc,
		"_i": __iCLh3CxY,
		"_f": __fMbSzVLG,
		"_locale": __localecI9EpPc,
		"_isUTC": __isUTCDMOfcFo,
		"_strict": __strictTPToIca
	}
		const _returnValueyJzmVU = await configFromStringAndFormat(_configOa8SJia)
	});
})