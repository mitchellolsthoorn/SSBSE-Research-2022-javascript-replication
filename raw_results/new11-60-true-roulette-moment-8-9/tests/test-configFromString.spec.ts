export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _arrayValueMaUowL = false;
		const _arrayValuetfJtSg0 = -0.7633772706055222;
		const _arrayValueOoHEGvI = null;
		const _returnValueaDOeM38 = null;
		const _arrayValueDZWSTiN = () => { return _returnValueaDOeM38 };
		const _arrayValueVfxg2A = [_arrayValueOoHEGvI, _arrayValueDZWSTiN]
		const _configlW4vprH = [_arrayValueMaUowL, _arrayValuetfJtSg0, _arrayValueVfxg2A]
		const _returnValueAtIkJom = await configFromString(_configlW4vprH)
	});

	it('test for configFromString', async () => {
		const _inputlU08Do8 = null;
		const _formatKemM4fG = -1.8078722740132651;
		const _arrayValueetiz2YN = undefined;
		const _arrayValuet1HnygZ = {
		
	}
		const _localeZE6SawV = [_arrayValueetiz2YN, _arrayValuet1HnygZ]
		const _isUTCenldvIX = null;
		const _strictEhCSxzq = null;
		const __iQ5R5mUE = "ZHiuMdE4NO2AlQB2GSWbEeqhaUoWm8L3HNseWI8KaXLCIsxFJsQAVE62wj";
		const __fk3LdHty = false;
		const __localeOCWuToI = true;
		const __isUTCW17TBnn = undefined;
		const __strictp7aISjQ = true;
		const _configaQplJm2 = {
			"input": _inputlU08Do8,
		"format": _formatKemM4fG,
		"locale": _localeZE6SawV,
		"isUTC": _isUTCenldvIX,
		"strict": _strictEhCSxzq,
		"_i": __iQ5R5mUE,
		"_f": __fk3LdHty,
		"_locale": __localeOCWuToI,
		"_isUTC": __isUTCW17TBnn,
		"_strict": __strictp7aISjQ
	}
		const _returnValuehZAaCx4 = await configFromString(_configaQplJm2)
	});

	it('test for configFromString', async () => {
		const _returnValuehku1Ai8 = false;
		const _utcOffsetuP4zAma = () => { return _returnValuehku1Ai8 };
		const _returnValued8VoLUR = null;
		const __tzmQlIhctu = () => { return _returnValued8VoLUR };
		const __iRL9AGDe = "DrEL67TDPOh6E483pPxPKIOG6iR8MQBTPzqKzHrNkq11vN";
		const _configC9Uc7C = {
			"utcOffset": _utcOffsetuP4zAma,
		"_tzm": __tzmQlIhctu,
		"_i": __iRL9AGDe
	}
		const _returnValuemCgO6W0 = await configFromString(_configC9Uc7C)
	});
})