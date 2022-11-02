export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _from8SZR7d = "JNIkCStvrouqwJQLWa3pAwzx1kL55I7xJOwFqHzTBNPy3191N4T37wfL18zTcT2UCDGYnpyUKL";
		const _arrayValuenskDwMc = []
		const _tolDQoZni = [_arrayValuenskDwMc]
		const _unitsH08XwM4 = "5WxMLADBMPQPoUSUTYRbzrMkpvgB";
		const _arrayValueZgcpiu9 = false;
		const _arrayValuej6Qfcm6 = 2.2059699062226006;
		const _arrayValuePLePCJR = undefined;
		const _inclusivityXWXq08w = [_arrayValueZgcpiu9, _arrayValuej6Qfcm6, _arrayValuePLePCJR]
		const _returnValuelXvEAMv = await isBetween(_from8SZR7d, _tolDQoZni, _unitsH08XwM4, _inclusivityXWXq08w)
	});
})