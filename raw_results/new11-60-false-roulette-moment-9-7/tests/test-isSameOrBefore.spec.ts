export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputtDU0Q9U = true;
		const _unitsIZvKnuv = null;
		const _returnValue1Kr8Tt = await isSameOrBefore(_inputtDU0Q9U, _unitsIZvKnuv)
	});
})