export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromMMYsUf5 = undefined;
		const _toTWBRrF = false;
		const _unitsPlIM6OU = "XHngy3dLHp3ghYI9FaJHpEDQaz63KEutiuXlnNfUyz1q2XvzlZ4t7EEzg4MI3FYQuA7wIyHTd1fzGhZr4WPBzrwUxcL2NO";
		const _arrayValuemQmRJZE = -2.632742062235084;
		const _inclusivityLk4OXNf = [_arrayValuemQmRJZE]
		const _returnValueUv0aIQS = await isBetween(_fromMMYsUf5, _toTWBRrF, _unitsPlIM6OU, _inclusivityLk4OXNf)
	});
})