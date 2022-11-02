export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputlheJLd8 = null;
		const _arrayValueFHx3xzN = "6iPopU8Pj4wz2zqgERl9n2kbOplkXGbI";
		const _arrayValuezav4ENQ = "dmSd8uz2q0MHI93OQeeiR";
		const _arrayValueaECVHC8 = {
		
	}
		const _formatwJUwBDQ = [_arrayValueFHx3xzN, _arrayValuezav4ENQ, _arrayValueaECVHC8]
		const _localeSXq5GaD = "KuuWyKaTzqStlwQlJw3oFvVkbK";
		const _isUTCFzo8Kpr = null;
		const _strictTdlGaft = undefined;
		const _returnValue4VHxDM = "fmNOQK71WNQBEYKCdThq1b2ZNkkx2IchvIzc3XgVgcpIfb1WFRE14CLqLIihWMfr6kYqf9H6Rfp";
		const __iQp3KIk0 = () => { return _returnValue4VHxDM };
		const _returnValueXy9N54P = {
		
	}
		const __fFD0lgRx = () => { return _returnValueXy9N54P };
		const __localeDCuiF3H = 8.541811368327075;
		const __isUTCbn8Eb7F = true;
		const _returnValueTOCRMDV = true;
		const __strictiApAVBZ = () => { return _returnValueTOCRMDV };
		const _configa8WUex = {
			"input": _inputlheJLd8,
		"format": _formatwJUwBDQ,
		"locale": _localeSXq5GaD,
		"isUTC": _isUTCFzo8Kpr,
		"strict": _strictTdlGaft,
		"_i": __iQp3KIk0,
		"_f": __fFD0lgRx,
		"_locale": __localeDCuiF3H,
		"_isUTC": __isUTCbn8Eb7F,
		"_strict": __strictiApAVBZ
	}
		const _returnValueGwjath4 = await configFromObject(_configa8WUex)
	});
})