export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueQ9Vx29i = -9.91932536811385;
		const _isValid5iuPiM = () => { return _returnValueQ9Vx29i };
		const _returnValuehh6l3b9 = -7.2605935194543365;
		const _utcOffsethx3ipBT = () => { return _returnValuehh6l3b9 };
		const _timexSdgx4X = {
			"isValid": _isValid5iuPiM,
		"utcOffset": _utcOffsethx3ipBT
	}
		const _withoutSuffixlwJ6aec = true;
		const _returnValueauNwAdc = await to(_timexSdgx4X, _withoutSuffixlwJ6aec)
	});
})