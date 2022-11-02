export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValuexASS6Qd = -4.319636036824485;
		const _inputpf6UcEW = () => { return _returnValuexASS6Qd };
		const _formatGMGdxFo = "fiDO41oKwRZeiWoftUr0ljtftAYw7bRauAJABY2VLAfUDjG";
		const _localeauERUe = "Y6OZHubeOC3uBo6D8uLjlhav9VhhxhqSKjHESnDreG7Q4yilXW49v7ReYr12nnIpSw5r7tm9ttqReCrNSrvAeRWXmn662cfl";
		const _isUTCBZ0T4z9 = null;
		const _strictAUqe9DU = 7.365052008388645;
		const __iVhMyyFO = undefined;
		const __fwuEm5La = null;
		const __localeR9V1WCL = false;
		const __isUTCsEPgPEg = undefined;
		const __strictYrdaDWc = undefined;
		const _configsPte9UB = {
			"input": _inputpf6UcEW,
		"format": _formatGMGdxFo,
		"locale": _localeauERUe,
		"isUTC": _isUTCBZ0T4z9,
		"strict": _strictAUqe9DU,
		"_i": __iVhMyyFO,
		"_f": __fwuEm5La,
		"_locale": __localeR9V1WCL,
		"_isUTC": __isUTCsEPgPEg,
		"_strict": __strictYrdaDWc
	}
		const _returnValueFXWmv4y = await configFromObject(_configsPte9UB)
	});
})