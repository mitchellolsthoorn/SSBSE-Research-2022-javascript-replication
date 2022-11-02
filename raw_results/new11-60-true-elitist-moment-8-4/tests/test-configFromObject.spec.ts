export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputzjqw12u = "QpNpIaJrA8WjLx2sBoBxpFajtW7tCiLG9vtTtDtg5lsO";
		const _formatEGUSusB = "6RkMu8uDQIsIcGICnOYnxHXZn9TXm2Ky";
		const _localeFOU572z = true;
		const _isUTCqKlvJXn = -4.6839834037824115;
		const _strictxf9f2nq = 5.158977548717353;
		const __iiv4PltX = undefined;
		const _returnValueQqX7ObD = undefined;
		const __fvaDMMvX = () => { return _returnValueQqX7ObD };
		const __localeACbeDJ8 = []
		const __isUTCoGWq6mb = "CgddkeoSqfaLdsUz6U7YpxNwWoh3uRIWIWGgTdxNvsUmEkhbYhPqY2KSik3kYo";
		const _returnValuelsZ2EY8 = false;
		const __strictIMYhCGF = () => { return _returnValuelsZ2EY8 };
		const _configGVFg8Qz = {
			"input": _inputzjqw12u,
		"format": _formatEGUSusB,
		"locale": _localeFOU572z,
		"isUTC": _isUTCqKlvJXn,
		"strict": _strictxf9f2nq,
		"_i": __iiv4PltX,
		"_f": __fvaDMMvX,
		"_locale": __localeACbeDJ8,
		"_isUTC": __isUTCoGWq6mb,
		"_strict": __strictIMYhCGF
	}
		const _returnValueM82UXr3 = await configFromObject(_configGVFg8Qz)
	});
})