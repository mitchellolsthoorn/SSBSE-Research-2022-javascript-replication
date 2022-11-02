export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _momaA3JSLv = 4.604783143822122;
		const _unitvzP2DA4 = 0.8018666263002316;
		const _returnValueukoV7A = await get(_momaA3JSLv, _unitvzP2DA4)
	});
})