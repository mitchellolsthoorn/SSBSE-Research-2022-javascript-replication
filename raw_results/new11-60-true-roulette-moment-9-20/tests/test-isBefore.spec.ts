export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValueyk86Jxx = -7.603923543852442;
		const _returnValueDEFujDA = null;
		const _arrayValuey4GTgKf = () => { return _returnValueDEFujDA };
		const _inputnMOk4PL = [_arrayValueyk86Jxx, _arrayValuey4GTgKf]
		const _unitsL8zp4Bb = "5b9kxgs1ZNsj1bnNPJynxmjZ015gAOhCzlUGmyzh6KIoY6sPfBFDTYzeEh6fkqpIVAsF2Kl5cxSBlkeWCpXhLgviakbCJOWdP";
		const _returnValuef6LTfoI = await isBefore(_inputnMOk4PL, _unitsL8zp4Bb)
	});

	it('test for isBefore', async () => {
		const _inputiNFcs9Y = true;
		const _unitsGrUNKwd = {
		
	}
		const _returnValueCwtSZkT = await isBefore(_inputiNFcs9Y, _unitsGrUNKwd)
	});
})