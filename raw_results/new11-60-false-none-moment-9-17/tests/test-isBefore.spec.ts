export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputrIlCJvh = 4.4596481392718985;
		const _returnValueq8MaQ43 = "4tALRxZzG3MHEnCdgjttN7LYs7QojbmuV6BeZemDPBA09AdnwxHVP3ZxYRHH37KwAqJeKGRI7";
		const _returnValueLpk2Lo = () => { return _returnValueq8MaQ43 };
		const _unitsLXHaUoX = () => { return _returnValueLpk2Lo };
		const _returnValuesrkedh3 = await isBefore(_inputrIlCJvh, _unitsLXHaUoX)
	});
})