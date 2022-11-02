export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputiRb6LOa = "wOVKdl3t8cOIr4IXOFhLlC6ABc";
		const _unitsI4ZOSVW = {
		
	}
		const _returnValueqAb32y = await isSame(_inputiRb6LOa, _unitsI4ZOSVW)
	});

	it('test for isSame', async () => {
		const _input3qtSdN = 6.484388028853093;
		const _unitsklm9C6 = {
		
	}
		const _returnValuenADpCXy = await isSame(_input3qtSdN, _unitsklm9C6)
	});
})