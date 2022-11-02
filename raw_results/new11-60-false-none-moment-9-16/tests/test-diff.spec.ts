export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputgf0ctSq = -3.830050816455106;
		const _unitsS0jFNf = {
		
	}
		const _asFloatACrc0QM = false;
		const _returnValueIE291DO = await diff(_inputgf0ctSq, _unitsS0jFNf, _asFloatACrc0QM)
	});
})