export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValueg4oSdbC = 5.261595206769254;
		const _inputBdBT0fP = () => { return _returnValueg4oSdbC };
		const _unitsItEOFon = "80FcnVjnkuNdT5vh7iU9ghDN6e5O6frmRkpWVkzmv47Iyjfc9KIN3BD4";
		const _returnValueohVOauv = await isSame(_inputBdBT0fP, _unitsItEOFon)
	});
})