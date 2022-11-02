export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeYSzbMsw = "MKKEFivSrydfRydEAufaTEKNdgMPaFrF4dyVBQgtjpqRN";
		const _withoutSuffixNBWhvXn = []
		const _returnValueJlgkuWk = await from(_timeYSzbMsw, _withoutSuffixNBWhvXn)
	});
})