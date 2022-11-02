export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputooUiWp = false;
		const _formatyiaQvbU = undefined;
		const _localehd8hjRI = false;
		const _isUTCLduZjyG = {
		
	}
		const _strictRJdAjn = {
		
	}
		const __iFawm4hr = true;
		const __fvXr2JRd = true;
		const __locale6GyR6C = undefined;
		const __isUTCcBC8Z0s = undefined;
		const __strictpSwv7Cz = true;
		const _configfYISadc = {
			"input": _inputooUiWp,
		"format": _formatyiaQvbU,
		"locale": _localehd8hjRI,
		"isUTC": _isUTCLduZjyG,
		"strict": _strictRJdAjn,
		"_i": __iFawm4hr,
		"_f": __fvXr2JRd,
		"_locale": __locale6GyR6C,
		"_isUTC": __isUTCcBC8Z0s,
		"_strict": __strictpSwv7Cz
	}
		const _returnValueQb1Xvo = await configFromObject(_configfYISadc)
	});
})