export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const __isUTCysoQCGO = false;
		const __dt01pNFf = 7.275534180704135;
		const _returnValuee9FxZnJ = null;
		const _isValidvWA9fW3 = () => { return _returnValuee9FxZnJ };
		const _returnValuegfaPSGc = true;
		const _yearUXrHRjt = () => { return _returnValuegfaPSGc };
		const _arrayValuewPYLmT = -8.535308675379087;
		const _arrayValuea2dXVGz = true;
		const _arrayValueJgmDuW5 = "EZo";
		const _arrayValuehFbh3X6 = undefined;
		const _arrayValuei2gFGX = [_arrayValuewPYLmT, _arrayValuea2dXVGz, _arrayValueJgmDuW5, _arrayValuehFbh3X6]
		const _arrayValuecAAb2bo = -7.737691862328488;
		const _returnValueaAleRl = [_arrayValuei2gFGX, _arrayValuecAAb2bo]
		const _monthadUFCNk = () => { return _returnValueaAleRl };
		const _returnValuelURVZpV = false;
		const _dateQfJVgDW = () => { return _returnValuelURVZpV };
		const _returnValuedbvjg60 = "jBK3ymErVaBzGoANj726QowYlyWqY";
		const _weekdayv8S8Tnp = () => { return _returnValuedbvjg60 };
		const _returnValueu5UjrLu = -2.708140318497918;
		const _isoWeekdayJwNcfFa = () => { return _returnValueu5UjrLu };
		const _returnValueFJ1uLTy = true;
		const _utcOffsetN9ZAoM = () => { return _returnValueFJ1uLTy };
		const _configAGQqQ16 = {
			"_isUTC": __isUTCysoQCGO,
		"_d": __dt01pNFf,
		"isValid": _isValidvWA9fW3,
		"year": _yearUXrHRjt,
		"month": _monthadUFCNk,
		"date": _dateQfJVgDW,
		"weekday": _weekdayv8S8Tnp,
		"isoWeekday": _isoWeekdayJwNcfFa,
		"utcOffset": _utcOffsetN9ZAoM
	}
		const _returnValueiq1OOSh = await configFromObject(_configAGQqQ16)
	});

	it('test for configFromObject', async () => {
		const _inputOGRfP6T = null;
		const _formatZmBljk = "L08QUoff";
		const _localepDt1J1 = "MsDJTqfgS9lgmReaJKh94mTsq6p2jGpngZm14CSvcYQDR";
		const _isUTCCRL8P5k = true;
		const _strictgHS3sPj = true;
		const __ibQk5P4j = "qiOqHRPHzcXlxftiDnWKkri3cF5KzYMN9y";
		const __fe707hIo = undefined;
		const __localekYdvpze = "WubehKvAeaoA4RchhtIKR4XOwXPAlDEL7KnN2Nq6GRWbqluJwXScfCyMYfmbIWWigk3OtMF21lxcI38mHPFGZbC5";
		const __isUTCOL1qT0I = false;
		const _arrayValueT9pEHYx = true;
		const __stricttGxLx1o = [_arrayValueT9pEHYx]
		const _configv6yolB = {
			"input": _inputOGRfP6T,
		"format": _formatZmBljk,
		"locale": _localepDt1J1,
		"isUTC": _isUTCCRL8P5k,
		"strict": _strictgHS3sPj,
		"_i": __ibQk5P4j,
		"_f": __fe707hIo,
		"_locale": __localekYdvpze,
		"_isUTC": __isUTCOL1qT0I,
		"_strict": __stricttGxLx1o
	}
		const _returnValueZA4gAgm = await configFromObject(_configv6yolB)
	});
})