export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputZc29mV = -6.591625991662998;
		const _unitspTJa8m1 = "JF9pmNYoolvk2NOMUFhZv39UKeN8AKDXpHqaWEIERW52aYY7q3XEPLbMLlR4sh6UtuIrxClKsRXKeo1yKyi7X";
		const _returnValueyw4Cqtk = await isSameOrAfter(_inputZc29mV, _unitspTJa8m1)
	});
})