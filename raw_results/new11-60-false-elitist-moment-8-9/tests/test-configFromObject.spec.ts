export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputOCYZxQh = "R0TuI0LEckNRsMhJ2pFNx5o0yuPeV3cRG8cKU3SdeaQkVJOXSp51ljbBsVYWvmryze5QDQm7TarUj2vVQCtvjUQ4";
		const _formatYbKAzi = "nekMtGwGFsTWw4S0UJpyic4Snd2VNDGFmUQcX9RKtFf1WEKHZx2EFjX5";
		const _localeMdigM8 = undefined;
		const _isUTCV35MLnI = undefined;
		const _strictWCirL5b = null;
		const __isvUnXcu = "PGWRBGCiSxtj";
		const __fvXBBbj5 = true;
		const __localeGCPPhcP = null;
		const __isUTCbeJTpdc = true;
		const __strictj4Ck3RQ = -1.4814716538690753;
		const _confignv7taRi = {
			"input": _inputOCYZxQh,
		"format": _formatYbKAzi,
		"locale": _localeMdigM8,
		"isUTC": _isUTCV35MLnI,
		"strict": _strictWCirL5b,
		"_i": __isvUnXcu,
		"_f": __fvXBBbj5,
		"_locale": __localeGCPPhcP,
		"_isUTC": __isUTCbeJTpdc,
		"_strict": __strictj4Ck3RQ
	}
		const _returnValueTD6jr0u = await configFromObject(_confignv7taRi)
	});
})