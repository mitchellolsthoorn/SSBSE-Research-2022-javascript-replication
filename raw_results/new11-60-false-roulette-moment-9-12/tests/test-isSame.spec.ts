export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputn6IU1aN = true;
		const _unitskiNMbcx = 5.733745489135542;
		const _returnValuen6G147E = await isSame(_inputn6IU1aN, _unitskiNMbcx)
	});
})