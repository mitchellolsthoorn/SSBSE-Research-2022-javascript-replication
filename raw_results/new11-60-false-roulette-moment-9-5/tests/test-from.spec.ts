export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueAwfjJlC = false;
		const _isValidUalKyGP = () => { return _returnValueAwfjJlC };
		const _returnValuezuNRc7O = undefined;
		const _utcOffsetSonkwB9 = () => { return _returnValuezuNRc7O };
		const _timeq6o6MFG = {
			"isValid": _isValidUalKyGP,
		"utcOffset": _utcOffsetSonkwB9
	}
		const _withoutSuffixI7LgZJi = undefined;
		const _returnValueWmSnmR = await from(_timeq6o6MFG, _withoutSuffixI7LgZJi)
	});
})