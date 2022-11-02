export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuewl0miGv = true;
		const _isValidX8V6Pzk = () => { return _returnValuewl0miGv };
		const _timexMEE4t5 = {
			"isValid": _isValidX8V6Pzk
	}
		const _withoutSuffixaZPM7C9 = null;
		const _returnValuefRiuIg1 = await from(_timexMEE4t5, _withoutSuffixaZPM7C9)
	});
})