export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValueU5aZOe = "gNlCi9hDzdQNkTRuCoUQ7BCOhk7AwUDeY4aiYtSmfA9HNTz";
		const _arrayValuetgNlXSr = [_arrayValueU5aZOe]
		const _inputLr7CstB = [_arrayValuetgNlXSr]
		const _unitssbJ9Fwk = null;
		const _returnValuem3HoJX = await isSameOrAfter(_inputLr7CstB, _unitssbJ9Fwk)
	});
})