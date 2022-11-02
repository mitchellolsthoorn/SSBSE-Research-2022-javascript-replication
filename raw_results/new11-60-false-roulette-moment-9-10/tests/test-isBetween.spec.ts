export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValueazdYyHq = null;
		const _arrayValueaPjNHS8 = -4.203235231876988;
		const _fromfZjPkXa = [_arrayValueazdYyHq, _arrayValueaPjNHS8]
		const _toiQNAPE = 1.6760862838836115;
		const _unitsesZnFh5 = false;
		const _inclusivityR43wMd8 = "1qGQkk75Cn1bGVYz61dQrPUhbB6eW1unppUCoKReFfLxOdWjvW5Pk3uTIfP1FnTcMVNrFkS";
		const _returnValueVbTjQZt = await isBetween(_fromfZjPkXa, _toiQNAPE, _unitsesZnFh5, _inclusivityR43wMd8)
	});
})