export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueOassio = -4.993816629881786;
		const _arrayValueQHweIp = -7.218894563667641;
		const _momme9v3KE = [_arrayValueOassio, _arrayValueQHweIp]
		const _arrayValuejlWOgP4 = []
		const _arrayValuenl9ITwR = -0.09545036151035369;
		const _arrayValueCa78tQx = 5.667410905146898;
		const _unitqmhTXfr = [_arrayValuejlWOgP4, _arrayValuenl9ITwR, _arrayValueCa78tQx]
		const _returnValueW0qHlXz = await get(_momme9v3KE, _unitqmhTXfr)
	});
})