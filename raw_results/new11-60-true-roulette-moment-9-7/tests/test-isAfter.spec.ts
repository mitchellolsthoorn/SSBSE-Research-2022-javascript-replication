export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _returnValueGtI7REB = true;
		const _inputHVMp94O = () => { return _returnValueGtI7REB };
		const _unitseCfwk61 = null;
		const _returnValueCriWiK3 = await isAfter(_inputHVMp94O, _unitseCfwk61)
	});
})