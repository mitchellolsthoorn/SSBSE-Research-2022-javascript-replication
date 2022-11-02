export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _inputSduLgo = null;
		const _formatDCmYsVE = 1.4875879896852737;
		const _localekzP60bu = "CogZF";
		const _arrayValueqjNSYhx = null;
		const _arrayValuehJ19b1 = undefined;
		const _arrayValuebH7gB5Z = {
		
	}
		const _arrayValuemMoUqSH = [_arrayValuehJ19b1, _arrayValuebH7gB5Z]
		const _arrayValueqP1dPhN = null;
		const _isUTCHTBR4qB = [_arrayValueqjNSYhx, _arrayValuemMoUqSH, _arrayValueqP1dPhN]
		const _strictNgiQ7UW = 9.820333684289064;
		const __idMKBQyf = -2.207956480385066;
		const __fe8bf5iA = {
		
	}
		const __localejZ2n44q = {
		
	}
		const _arrayValueV5xoVL = {
		
	}
		const _arrayValue6WcOnu = null;
		const _arrayValuegntsCPe = {
		
	}
		const __isUTCN7GRgmR = [_arrayValueV5xoVL, _arrayValue6WcOnu, _arrayValuegntsCPe]
		const __strictyzTTVtR = null;
		const _configqBy74ez = {
			"input": _inputSduLgo,
		"format": _formatDCmYsVE,
		"locale": _localekzP60bu,
		"isUTC": _isUTCHTBR4qB,
		"strict": _strictNgiQ7UW,
		"_i": __idMKBQyf,
		"_f": __fe8bf5iA,
		"_locale": __localejZ2n44q,
		"_isUTC": __isUTCN7GRgmR,
		"_strict": __strictyzTTVtR
	}
		const _returnValueVknhtY = await configFromStringAndFormat(_configqBy74ez)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputdJca5FA = "umSZUffRvSpP9wAO9IE9LORG2N9T3";
		const _formatgWY5NKq = -8.165774251548896;
		const _localeDNKgpvV = false;
		const _isUTChokaYZ = true;
		const _strictzOjSElv = "Zun4UDyFnYZ7b";
		const __i73JFVX = -0.6771169042459864;
		const __fchKvyKX = "hsu1VnE5Vi6EdXmsqG";
		const __localeX75A7Nl = {
		
	}
		const __isUTCqRB7fBQ = undefined;
		const __strictApSV0FS = {
		
	}
		const _configAuSegCV = {
			"input": _inputdJca5FA,
		"format": _formatgWY5NKq,
		"locale": _localeDNKgpvV,
		"isUTC": _isUTChokaYZ,
		"strict": _strictzOjSElv,
		"_i": __i73JFVX,
		"_f": __fchKvyKX,
		"_locale": __localeX75A7Nl,
		"_isUTC": __isUTCqRB7fBQ,
		"_strict": __strictApSV0FS
	}
		const _returnValueytGoULL = await configFromStringAndFormat(_configAuSegCV)
	});
})