export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputMaPa5WA = true;
		const _unitstQXYpuP = "FhXhLXdmOKsE2oLyS7bKsy6MipWLm6b4Dl9KjNT2";
		const _returnValueT4OL7Ti = await isSame(_inputMaPa5WA, _unitstQXYpuP)
	});
})