export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputd2wdWBG = true;
		const _formattt4eK9s = "dlmLMqKiRHOWgugkgjA4RpKtRW8wxjGHbRYO8ecxnPqnF";
		const _localeT3Q2pBJ = undefined;
		const _isUTCS98cXeY = undefined;
		const _strictOF0GkSF = -8.498794584816634;
		const __ir7jOY97 = 4.59871701535209;
		const __fA5Z4YoQ = "mkrkQdBqF1tDKyVsyDvBlQVoU8hE8ZixkAUcny4Tz6imIgRfxdpofV9WMXtvodOpcTJioThwx07PVZ7";
		const __localerhokXe = null;
		const __isUTCkjrWaIk = []
		const _returnValuegIzEit = undefined;
		const _arrayValueT6MhO0X = () => { return _returnValuegIzEit };
		const __strictmFpDAm = [_arrayValueT6MhO0X]
		const _configxXMbSgY = {
			"input": _inputd2wdWBG,
		"format": _formattt4eK9s,
		"locale": _localeT3Q2pBJ,
		"isUTC": _isUTCS98cXeY,
		"strict": _strictOF0GkSF,
		"_i": __ir7jOY97,
		"_f": __fA5Z4YoQ,
		"_locale": __localerhokXe,
		"_isUTC": __isUTCkjrWaIk,
		"_strict": __strictmFpDAm
	}
		const _returnValueqCRKpRA = await configFromObject(_configxXMbSgY)
	});
})