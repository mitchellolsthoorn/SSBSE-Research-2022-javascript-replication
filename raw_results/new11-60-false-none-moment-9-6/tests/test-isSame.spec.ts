export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputNoBY0mr = "OAapJ7kPdobcpVo1n6CLTUsGHQejrEzQzSaZV";
		const _unitstHE9j3D = null;
		const _returnValueWk4qaRA = await isSame(_inputNoBY0mr, _unitstHE9j3D)
	});

	it('test for isSame', async () => {
		const _inputbOAEhbo = false;
		const _unitsVB6ylLz = undefined;
		const _returnValuemTUtO5 = await isSame(_inputbOAEhbo, _unitsVB6ylLz)
	});
})