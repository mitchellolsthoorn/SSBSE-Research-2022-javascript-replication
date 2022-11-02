export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputq8n2SQS = undefined;
		const _formatbZ6O8cL = "UGFC6H";
		const _localerSTOUmi = null;
		const _returnValuet2gNlUv = 3.322210152416087;
		const _isUTCDyK3q7n = () => { return _returnValuet2gNlUv };
		const _strictq6d9R5T = {
		
	}
		const _returnValueN6lhIHe = undefined;
		const __iOPR3xA8 = () => { return _returnValueN6lhIHe };
		const __fFiDIIMd = undefined;
		const __locale5fpvyD = true;
		const __isUTCrBhWWqk = -4.538290191475372;
		const __strictTqkyUyy = undefined;
		const _mZodlFcG = {
			"input": _inputq8n2SQS,
		"format": _formatbZ6O8cL,
		"locale": _localerSTOUmi,
		"isUTC": _isUTCDyK3q7n,
		"strict": _strictq6d9R5T,
		"_i": __iOPR3xA8,
		"_f": __fFiDIIMd,
		"_locale": __locale5fpvyD,
		"_isUTC": __isUTCrBhWWqk,
		"_strict": __strictTqkyUyy
	}
		const _returnValueMcp6XJ = await isValid(_mZodlFcG)
	});
})