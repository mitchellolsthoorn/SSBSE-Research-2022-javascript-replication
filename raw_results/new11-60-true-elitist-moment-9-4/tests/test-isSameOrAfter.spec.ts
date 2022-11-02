export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputUBCIykh = true;
		const _unitsjfJDLJf = "BBjr0vItasbsCOSQzJRbFTmBp4xQm3sjTTIyYa5jc0QtqDLH7Wpj";
		const _returnValueaRm1alo = await isSameOrAfter(_inputUBCIykh, _unitsjfJDLJf)
	});
})