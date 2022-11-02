export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const __isUTCyqqFu3B = null;
		const _returnValueDYsx3aj = -9.642763642232394;
		const _isValidWQoKkt = () => { return _returnValueDYsx3aj };
		const _timeh1qNtHv = {
			"_isUTC": __isUTCyqqFu3B,
		"isValid": _isValidWQoKkt
	}
		const _withoutSuffixZ5MwxAT = "8cOaK6zjLv44m9HY5mHvFonr2P4vrJhtIO5qa5NGJ4nibnwR0VnocLHLuHNKRcBKbRfLvjog0";
		const _returnValuedUfhUt4 = await from(_timeh1qNtHv, _withoutSuffixZ5MwxAT)
	});
})