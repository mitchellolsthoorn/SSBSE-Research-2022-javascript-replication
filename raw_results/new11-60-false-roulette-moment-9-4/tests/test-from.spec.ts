export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuevKsDU8 = 1.5780208526094306;
		const _isValidqQKugfk = () => { return _returnValuevKsDU8 };
		const _returnValueDWJay3w = []
		const _utcOffsetp4XOvt1 = () => { return _returnValueDWJay3w };
		const _timeZc3yE6k = {
			"isValid": _isValidqQKugfk,
		"utcOffset": _utcOffsetp4XOvt1
	}
		const _withoutSuffix7gWEYL = null;
		const _returnValueEZEGbNU = await from(_timeZc3yE6k, _withoutSuffix7gWEYL)
	});
})