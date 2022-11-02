export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputtJEhE1c = undefined;
		const _returnValueHRtD6Xu = false;
		const _unitsrwuQz7O = () => { return _returnValueHRtD6Xu };
		const _returnValueKVgHkqi = await isSameOrBefore(_inputtJEhE1c, _unitsrwuQz7O)
	});
})