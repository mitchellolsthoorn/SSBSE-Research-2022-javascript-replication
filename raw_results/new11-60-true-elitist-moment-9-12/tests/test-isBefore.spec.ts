export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputrp1aVD9 = "7oYAHr6AFBzAcBx8Y1qu5rGaDqew0nIARfzzfXyApv1KPZsYd9OyYJ9NVo";
		const _unitsjn62ud0 = {
		
	}
		const _returnValue6Dlsk0 = await isBefore(_inputrp1aVD9, _unitsjn62ud0)
	});

	it('test for isBefore', async () => {
		const _inputFsRdNMG = -7.567172712409356;
		const _unitsQVb9maS = "pIRxr7i2l4LrWKZofkC6zboRNukdY26zrMzKa7t1jem5ERsU7lh3Qs0GdOFH5VIO99oDhDi";
		const _returnValueQDeHG3b = await isBefore(_inputFsRdNMG, _unitsQVb9maS)
	});
})