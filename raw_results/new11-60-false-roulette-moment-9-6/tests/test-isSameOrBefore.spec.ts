export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueBFjnHtv = false;
		const _inputZvhhftZ = [_arrayValueBFjnHtv]
		const _unitscdJ9Ngl = true;
		const _returnValueSyXquLp = await isSameOrBefore(_inputZvhhftZ, _unitscdJ9Ngl)
	});
})