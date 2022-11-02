export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValuekQMFsSZ = -9.2686638607452;
		const _arrayValueFZilyt0 = "zonB9oFboE8Wfk9dWI4Q3roTQ5R1nq3LB6vKEHYdC6A4AHZ6pmRkfCKVHsUnT";
		const _timeNgVdQiO = [_arrayValuekQMFsSZ, _arrayValueFZilyt0]
		const _returnValueS3yH8c = 4.6306140333448695;
		const _arrayValueUQursTZ = () => { return _returnValueS3yH8c };
		const _arrayValue1v9Osj = undefined;
		const _arrayValueHBUIKi = undefined;
		const _arrayValueQMMktWI = undefined;
		const _arrayValuefXyEpm = [_arrayValueQMMktWI]
		const _arrayValueIChPMF1 = [_arrayValueUQursTZ, _arrayValue1v9Osj, _arrayValueHBUIKi, _arrayValuefXyEpm]
		const _withoutSuffixn0m5pb = [_arrayValueIChPMF1]
		const _returnValueOQnZhZb = await from(_timeNgVdQiO, _withoutSuffixn0m5pb)
	});
})