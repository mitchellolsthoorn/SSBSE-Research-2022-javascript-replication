export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValuerCKdgA1 = []
		const _arrayValuerdPfqbO = null;
		const _inputhdxteJD = [_arrayValuerCKdgA1, _arrayValuerdPfqbO]
		const _formatkdmdLEs = undefined;
		const _localerWHv8ce = false;
		const _isUTCiVZKPST = -5.0710460179024714;
		const _strictMqK73dI = true;
		const __idvxNyEJ = "R";
		const __fVUeu5mf = -8.138719284698503;
		const __localelcSDeh = undefined;
		const _arrayValueciLtPiJ = []
		const _returnValuee7YqX9 = [_arrayValueciLtPiJ]
		const __isUTCBLHU2da = () => { return _returnValuee7YqX9 };
		const __strictYskOpYj = "XvNbam4JpXVwXeBVfbEJpSYCWLEQrhK8";
		const _configiDgOdMh = {
			"input": _inputhdxteJD,
		"format": _formatkdmdLEs,
		"locale": _localerWHv8ce,
		"isUTC": _isUTCiVZKPST,
		"strict": _strictMqK73dI,
		"_i": __idvxNyEJ,
		"_f": __fVUeu5mf,
		"_locale": __localelcSDeh,
		"_isUTC": __isUTCBLHU2da,
		"_strict": __strictYskOpYj
	}
		const _returnValuen8TRj9 = await configFromObject(_configiDgOdMh)
	});
})