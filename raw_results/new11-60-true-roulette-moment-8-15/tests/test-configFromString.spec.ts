export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _inputDCpNK8F = true;
		const _returnValueMq0Tdua = null;
		const _returnValuesiZjUm = () => { return _returnValueMq0Tdua };
		const _formatTwz5odZ = () => { return _returnValuesiZjUm };
		const _arrayValuefTQ1HJC = true;
		const _arrayValuedmVhvE1 = null;
		const _localelf42in1 = [_arrayValuefTQ1HJC, _arrayValuedmVhvE1]
		const _isUTCER790oL = 1.2142701063246886;
		const _strictQJzd8xN = 1.8294362757613811;
		const __idK9eXp8 = true;
		const __fgdGFBsO = undefined;
		const __localeifSQvCV = true;
		const __isUTCEQblL7Z = "Dm";
		const __stricthv71cpk = "jlhXloQo5XU6Y6CTohdm9lLf4urt0qvEGPmHX39un8VJVD3fg8x7U6dMy6vrzf1Q";
		const _configXmypeed = {
			"input": _inputDCpNK8F,
		"format": _formatTwz5odZ,
		"locale": _localelf42in1,
		"isUTC": _isUTCER790oL,
		"strict": _strictQJzd8xN,
		"_i": __idK9eXp8,
		"_f": __fgdGFBsO,
		"_locale": __localeifSQvCV,
		"_isUTC": __isUTCEQblL7Z,
		"_strict": __stricthv71cpk
	}
		const _returnValueCUjMEbx = await configFromString(_configXmypeed)
	});

	it('test for configFromString', async () => {
		const _inputL3Seh5F = undefined;
		const _formatFyWhpyR = null;
		const _localeLzuUjz9 = true;
		const _isUTCKc2HWgE = true;
		const _strictgzKjrDs = -7.4346235221695816;
		const __iJjw1RNz = "1CNbY9IaQqrI57aRevWGktjJHzztWizcFmwh";
		const _arrayValueqsODAkQ = {
		
	}
		const __fZQaqsqh = [_arrayValueqsODAkQ]
		const __localeSDooBUm = null;
		const _arrayValueKykKP7H = null;
		const _arrayValueZ3U7Ode = undefined;
		const _returnValueLZ5hE8l = [_arrayValueKykKP7H, _arrayValueZ3U7Ode]
		const __isUTCg1QiiGu = () => { return _returnValueLZ5hE8l };
		const __strictdUsImOY = 8.299969588720618;
		const _configKEPzL1j = {
			"input": _inputL3Seh5F,
		"format": _formatFyWhpyR,
		"locale": _localeLzuUjz9,
		"isUTC": _isUTCKc2HWgE,
		"strict": _strictgzKjrDs,
		"_i": __iJjw1RNz,
		"_f": __fZQaqsqh,
		"_locale": __localeSDooBUm,
		"_isUTC": __isUTCg1QiiGu,
		"_strict": __strictdUsImOY
	}
		const _returnValueDUvzoTS = await configFromString(_configKEPzL1j)
	});

	it('test for configFromString', async () => {
		const __imNvINEd = "";
		const _returnValueW25HAni = undefined;
		const _isValidQWmEvVI = () => { return _returnValueW25HAni };
		const _returnValueZW7go8c = []
		const _isLocalKsXgAH8 = () => { return _returnValueZW7go8c };
		const _returnValueIKconm4 = "Lb4Yziede71kb32Fgn1gB5befrJJpcLRCJWLzfYfWCfqwJl2yMPSBjFYnUeWLA";
		const _utcOffsetexLkd66 = () => { return _returnValueIKconm4 };
		const _returnValuet7Kw2Tz = "rbVi6XLDgopadcfXcupKY3BAh4zjXFVWmch44";
		const _yearVdjijiy = () => { return _returnValuet7Kw2Tz };
		const _arrayValuehxawGO = "GINn679LYRILN7ttIFhZo6e2XJFm";
		const _arrayValueqNaMwh3 = undefined;
		const _returnValueTDoAjEd = [_arrayValuehxawGO, _arrayValueqNaMwh3]
		const _formatSYDBW6 = () => { return _returnValueTDoAjEd };
		const _configl3P20P1 = {
			"_i": __imNvINEd,
		"isValid": _isValidQWmEvVI,
		"isLocal": _isLocalKsXgAH8,
		"utcOffset": _utcOffsetexLkd66,
		"year": _yearVdjijiy,
		"format": _formatSYDBW6
	}
		const _returnValueooIDVN = await configFromString(_configl3P20P1)
	});
})