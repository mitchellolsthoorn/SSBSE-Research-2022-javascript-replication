export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueYkSPWZh = {
		
	}
		const _arrayValueTu9ZH0j = 1.972098264765286;
		const _arrayValueZF49jB3 = [_arrayValueTu9ZH0j]
		const _inputlsVT2Cq = [_arrayValueYkSPWZh, _arrayValueZF49jB3]
		const _format0sJC11 = false;
		const _localeUgWrRu = null;
		const _isUTCBSwE796 = {
		
	}
		const _arrayValueLmlSX4f = undefined;
		const _arrayValueCXcQi4A = null;
		const _arrayValueEFj0Pxy = 4.434529221316925;
		const _arrayValueF4gwREU = {
		
	}
		const _strictfYSGPfe = [_arrayValueLmlSX4f, _arrayValueCXcQi4A, _arrayValueEFj0Pxy, _arrayValueF4gwREU]
		const _arrayValuerfuixYA = "u3MDyR4qiHZzSjf9NNwXvTKPexPq7NKZV1Ph540RJ481WvPAZ3JdGjeMd3VC4U26rM3cGHvufmmXhy3xOA6JN5J913vMp";
		const __iCZ0yO9C = [_arrayValuerfuixYA]
		const __fEuhUS3W = undefined;
		const _returnValuedNTqIwT = undefined;
		const __localeFFk6XS7 = () => { return _returnValuedNTqIwT };
		const _arrayValuedAx5Abh = {
		
	}
		const _returnValueCFvOgEh = [_arrayValuedAx5Abh]
		const __isUTCPIJp2w = () => { return _returnValueCFvOgEh };
		const _arrayValueixJN8FW = -0.9823791964770496;
		const __strictQLRZZp = [_arrayValueixJN8FW]
		const _configbkOtqWu = {
			"input": _inputlsVT2Cq,
		"format": _format0sJC11,
		"locale": _localeUgWrRu,
		"isUTC": _isUTCBSwE796,
		"strict": _strictfYSGPfe,
		"_i": __iCZ0yO9C,
		"_f": __fEuhUS3W,
		"_locale": __localeFFk6XS7,
		"_isUTC": __isUTCPIJp2w,
		"_strict": __strictQLRZZp
	}
		const _returnValueMshvPld = await configFromObject(_configbkOtqWu)
	});
})