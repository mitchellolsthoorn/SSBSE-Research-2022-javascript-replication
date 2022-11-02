export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _mom0dzOC9 = undefined;
		const _unitRZF592Q = 5.353801908481035;
		const _arrayValueNQBQo8 = false;
		const _arrayValueaGvFisD = -5.193252031875967;
		const _valuejIDWBD = [_arrayValueNQBQo8, _arrayValueaGvFisD]
		const _returnValueVHoTlxs = await set(_mom0dzOC9, _unitRZF592Q, _valuejIDWBD)
	});
})