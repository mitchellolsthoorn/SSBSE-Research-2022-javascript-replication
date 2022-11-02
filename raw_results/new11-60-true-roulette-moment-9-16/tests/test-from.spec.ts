export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const __isUTCBdqAHXj = undefined;
		const __dPPMsdG8 = "oHW52";
		const _isValidd6qAo7C = undefined;
		const _returnValuedOhrqyJ = "JmsKuo1pmTxfMXRkZzrFLr4PkhT3zu6faxrL3cgr6ao2RM4jTHqvhJ0SM7xJz6qeatn5uRsz2CDPu8UTH";
		const _yearaoyOSkR = () => { return _returnValuedOhrqyJ };
		const _returnValuet5MuVhq = "vjUg5GPaexlO6flQfuvVJphuIJqg67j284P9JcxTygvzEENFTd";
		const _monthTGejwd = () => { return _returnValuet5MuVhq };
		const _returnValueTfsRmc = true;
		const _returnValuejcQklBN = () => { return _returnValueTfsRmc };
		const _returnValueY0m2sE = () => { return _returnValuejcQklBN };
		const _dateSMnqEIQ = () => { return _returnValueY0m2sE };
		const _returnValuepq9m9Iz = "ZWLVuSXKkAmciaqU8YVDL1ivc";
		const _weekdayn81p0C = () => { return _returnValuepq9m9Iz };
		const _returnValueUEZIezS = true;
		const _isoWeekdayBZbc4LL = () => { return _returnValueUEZIezS };
		const _returnValuezgIzgM = "Doba763I7T5";
		const _utcOffsetMeXFeEZ = () => { return _returnValuezgIzgM };
		const _timeH6jg6FF = {
			"_isUTC": __isUTCBdqAHXj,
		"_d": __dPPMsdG8,
		"isValid": _isValidd6qAo7C,
		"year": _yearaoyOSkR,
		"month": _monthTGejwd,
		"date": _dateSMnqEIQ,
		"weekday": _weekdayn81p0C,
		"isoWeekday": _isoWeekdayBZbc4LL,
		"utcOffset": _utcOffsetMeXFeEZ
	}
		const _withoutSuffixzOlpBAB = false;
		const _returnValueKaUEyPr = await from(_timeH6jg6FF, _withoutSuffixzOlpBAB)
	});
})