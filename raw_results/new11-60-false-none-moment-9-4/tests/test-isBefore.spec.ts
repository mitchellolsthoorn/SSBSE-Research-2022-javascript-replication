export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputRZ7JuOc = "tTiYAh9q";
		const _units5kSCQ6 = null;
		const _returnValuexVd6tq7 = await isBefore(_inputRZ7JuOc, _units5kSCQ6)
	});

	it('test for isBefore', async () => {
		const _returnValueKMsz5r = undefined;
		const _inputCZoWR5Z = () => { return _returnValueKMsz5r };
		const _returnValueJRSVs5f = false;
		const _unitsjmVweR = () => { return _returnValueJRSVs5f };
		const _returnValueDU5UkA7 = await isBefore(_inputCZoWR5Z, _unitsjmVweR)
	});
})