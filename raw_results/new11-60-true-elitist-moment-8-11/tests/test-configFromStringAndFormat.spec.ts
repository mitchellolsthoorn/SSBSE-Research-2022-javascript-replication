export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _inputZeOLlDD = 9.936083603401109;
		const _arrayValueU9B6GGT = undefined;
		const _returnValueZNuvwXy = [_arrayValueU9B6GGT]
		const _formatc5h49rA = () => { return _returnValueZNuvwXy };
		const _localeLLpxZAf = null;
		const _isUTCzlipWg5 = "P3egaKTeBTvUUVq";
		const _strict4knFyT = null;
		const __ifkctV6e = 1.6936791793716708;
		const __fbMFo5CO = {
		
	}
		const __localeD6ClJJ0 = {
		
	}
		const __isUTCHGYXK7W = undefined;
		const __strictwSZI39j = null;
		const _configvcGQMzF = {
			"input": _inputZeOLlDD,
		"format": _formatc5h49rA,
		"locale": _localeLLpxZAf,
		"isUTC": _isUTCzlipWg5,
		"strict": _strict4knFyT,
		"_i": __ifkctV6e,
		"_f": __fbMFo5CO,
		"_locale": __localeD6ClJJ0,
		"_isUTC": __isUTCHGYXK7W,
		"_strict": __strictwSZI39j
	}
		const _returnValuevjCbcZG = await configFromStringAndFormat(_configvcGQMzF)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputb1rrJuz = null;
		const _formatLQVVc97 = "rwfLl";
		const _localevU2UcJ = false;
		const _isUTCbal1AKS = 3.651261408004773;
		const _stricthWEiJRC = 5.853340570922773;
		const __iEvQkl9J = -7.546958456303949;
		const __fQIJSafY = "RUEHnQcNoTccoNmQxFDsvhNXXCBexbgC3h";
		const __localefwZRA9u = {
		
	}
		const _returnValuemdbALOM = undefined;
		const __isUTCfI20NFY = () => { return _returnValuemdbALOM };
		const __strictWLhj4UE = 4.384111770335732;
		const _configm0RmQff = {
			"input": _inputb1rrJuz,
		"format": _formatLQVVc97,
		"locale": _localevU2UcJ,
		"isUTC": _isUTCbal1AKS,
		"strict": _stricthWEiJRC,
		"_i": __iEvQkl9J,
		"_f": __fQIJSafY,
		"_locale": __localefwZRA9u,
		"_isUTC": __isUTCfI20NFY,
		"_strict": __strictWLhj4UE
	}
		const _returnValuelldBzZ = await configFromStringAndFormat(_configm0RmQff)
	});
})