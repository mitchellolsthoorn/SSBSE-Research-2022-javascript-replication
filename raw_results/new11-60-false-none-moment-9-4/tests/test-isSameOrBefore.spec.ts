export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueEPxViDM = null;
		const _inputZ6ogXET = [_arrayValueEPxViDM]
		const _unitsLG3MFgL = true;
		const _returnValueFwYBwf = await isSameOrBefore(_inputZ6ogXET, _unitsLG3MFgL)
	});
})