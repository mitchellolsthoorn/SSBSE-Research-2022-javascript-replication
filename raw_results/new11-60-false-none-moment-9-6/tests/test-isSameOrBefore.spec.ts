export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueG6tUBNE = undefined;
		const _arrayValueIAGlkQ1 = false;
		const _arrayValuebXVyKVm = null;
		const _arrayValuelWcsHVh = [_arrayValueIAGlkQ1, _arrayValuebXVyKVm]
		const _inputIlVNG60 = [_arrayValueG6tUBNE, _arrayValuelWcsHVh]
		const _unitsA3Y2JX1 = false;
		const _returnValuer4hLcnR = await isSameOrBefore(_inputIlVNG60, _unitsA3Y2JX1)
	});
})