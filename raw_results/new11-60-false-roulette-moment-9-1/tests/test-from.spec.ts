export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueIm6GB2p = {
		
	}
		const _isValidyNdd9Kj = () => { return _returnValueIm6GB2p };
		const _returnValueoHhaR7p = -6.958582784115624;
		const _localeDataaQ6cNnr = () => { return _returnValueoHhaR7p };
		const _dayRsAPXdy = {
		
	}
		const _timeu5W91NW = {
			"isValid": _isValidyNdd9Kj,
		"localeData": _localeDataaQ6cNnr,
		"day": _dayRsAPXdy
	}
		const _withoutSuffixn8lhu0c = true;
		const _returnValuefYvAW9h = await from(_timeu5W91NW, _withoutSuffixn8lhu0c)
	});
})