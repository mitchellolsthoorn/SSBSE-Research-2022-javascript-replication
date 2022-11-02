export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputsG66252 = null;
		const _unitsTH5w64Z = -7.770858671024771;
		const _returnValueSXrb498 = await isSameOrBefore(_inputsG66252, _unitsTH5w64Z)
	});
})