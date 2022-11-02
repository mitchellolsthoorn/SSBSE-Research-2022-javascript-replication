export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValueuLnfjh = false;
		const _arrayValueIvtl7hB = undefined;
		const _arrayValueQxu0yd = null;
		const _arrayValueDDNArf = [_arrayValueuLnfjh, _arrayValueIvtl7hB, _arrayValueQxu0yd]
		const _arrayValueqcN0n5j = false;
		const _arrayValue0AdQdT = undefined;
		const _arrayValuevFOnV5G = [_arrayValue0AdQdT]
		const _inputm79CtTn = [_arrayValueDDNArf, _arrayValueqcN0n5j, _arrayValuevFOnV5G]
		const _unitsmsKYDt = undefined;
		const _returnValueZtT12hp = await isSameOrAfter(_inputm79CtTn, _unitsmsKYDt)
	});
})