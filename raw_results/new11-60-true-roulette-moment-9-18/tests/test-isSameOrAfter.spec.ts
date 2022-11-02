export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputcUwHF4P = "MdMEPDQ3dDfqatL1agcTL2VoyWRmEHHjwaWnQWdYoYylyqUROC6A0P7YXYYGzYzlJISxUOYOw1DdbNYdBep2YOLfQ1TtIPl5wH";
		const _unitssepgS5b = null;
		const _returnValueM83eedN = await isSameOrAfter(_inputcUwHF4P, _unitssepgS5b)
	});
})