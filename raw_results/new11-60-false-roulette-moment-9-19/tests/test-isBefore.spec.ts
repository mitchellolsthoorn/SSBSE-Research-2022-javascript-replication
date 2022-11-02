export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputt4GSD0 = 0.9618316333877637;
		const _unitsTCU7u2 = "dukOkavRIeVrTma8WuHa2yBS8olzlrksaNwbS6NdzetM4NRUgRZ5X6iaJo4YfrdAYvZ3HKTlwv8YMUCVgLB8wsW7qS";
		const _returnValueq0LKpF = await isBefore(_inputt4GSD0, _unitsTCU7u2)
	});
})