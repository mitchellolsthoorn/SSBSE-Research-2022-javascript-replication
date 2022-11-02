export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputdg5ocI0 = 4.437100228928001;
		const _returnValueYntUKMt = 9.60189202011366;
		const _unitsLAqdR6h = () => { return _returnValueYntUKMt };
		const _returnValueerJ4m3 = await isSameOrBefore(_inputdg5ocI0, _unitsLAqdR6h)
	});
})