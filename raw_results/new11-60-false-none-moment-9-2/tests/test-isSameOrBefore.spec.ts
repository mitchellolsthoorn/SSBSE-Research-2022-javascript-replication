export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputAzjJtpY = undefined;
		const _returnValueKbWPvr4 = null;
		const _unitsyXonDlI = () => { return _returnValueKbWPvr4 };
		const _returnValueRhUuKv1 = await isSameOrBefore(_inputAzjJtpY, _unitsyXonDlI)
	});
})