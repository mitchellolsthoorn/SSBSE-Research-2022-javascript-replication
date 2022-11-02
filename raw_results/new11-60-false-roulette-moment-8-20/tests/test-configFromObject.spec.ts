export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputZSY75Ql = false;
		const _formatrvNr4SW = true;
		const _returnValuewaFDXN = false;
		const _localeZbLzERK = () => { return _returnValuewaFDXN };
		const _isUTCOfe662g = "Q7Tsb5k5qksMiIWAizQN621TisVoXIOphWLqR0moLo7jriVKc5bllSWryBCALs8TMiabOYR7O24ExaJYZuzk1gLgds";
		const _strictdLSP1QD = 6.391048127556722;
		const _returnValueQgYNoHZ = undefined;
		const __ihNKryc1 = () => { return _returnValueQgYNoHZ };
		const __fUmpbOde = false;
		const __localeroKXNGz = "EL2Vxc6kM8jy8U8SLb8yO2Ar";
		const __isUTCz7tSAX = "Tk5if29ufojo88RQjo80MGiHiDJp36OumJ7nIadPOEmcQ1J4FiQo2zi47sHRBGOEQ11te4Bb5iO";
		const __strictlluUO36 = undefined;
		const _configRFA4udB = {
			"input": _inputZSY75Ql,
		"format": _formatrvNr4SW,
		"locale": _localeZbLzERK,
		"isUTC": _isUTCOfe662g,
		"strict": _strictdLSP1QD,
		"_i": __ihNKryc1,
		"_f": __fUmpbOde,
		"_locale": __localeroKXNGz,
		"_isUTC": __isUTCz7tSAX,
		"_strict": __strictlluUO36
	}
		const _returnValueVO1XYz6 = await configFromObject(_configRFA4udB)
	});
})