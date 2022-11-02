export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValuexF47HhE = false;
		const _inputEHYSyvF = [_arrayValuexF47HhE]
		const _formatDaHF4vH = null;
		const _localeyXvJhur = undefined;
		const _isUTCRncFbmz = true;
		const _returnValuePqmAMv = -2.0512347848604096;
		const _stricteZ8rfRO = () => { return _returnValuePqmAMv };
		const _arrayValueMhrl9ID = true;
		const _arrayValueHTmHe8 = -5.756988206275108;
		const _arrayValueKPJO94N = [_arrayValueHTmHe8]
		const __iLwBcb65 = [_arrayValueMhrl9ID, _arrayValueKPJO94N]
		const __fCv8Sx0 = null;
		const __localeGrldNps = -2.4353158204596212;
		const __isUTCMYkBtgk = 7.54666973495906;
		const __strictPIygdLc = -9.838948455704568;
		const _mr19Ljex = {
			"input": _inputEHYSyvF,
		"format": _formatDaHF4vH,
		"locale": _localeyXvJhur,
		"isUTC": _isUTCRncFbmz,
		"strict": _stricteZ8rfRO,
		"_i": __iLwBcb65,
		"_f": __fCv8Sx0,
		"_locale": __localeGrldNps,
		"_isUTC": __isUTCMYkBtgk,
		"_strict": __strictPIygdLc
	}
		const _returnValuegkFjUEZ = await isValid(_mr19Ljex)
	});
})