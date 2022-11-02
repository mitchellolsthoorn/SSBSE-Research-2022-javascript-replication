export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromXX8NndD = "EKJxukRdQiORnJ37pijAmtr96WrV6k";
		const _tosvhqqJk = 3.4013785841922903;
		const _unitsva39ulc = false;
		const _inclusivityohVUpqF = {
		
	}
		const _returnValueLtgowM6 = await isBetween(_fromXX8NndD, _tosvhqqJk, _unitsva39ulc, _inclusivityohVUpqF)
	});
})