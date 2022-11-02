export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputP788eRV = true;
		const _unitswWS74B2 = "oTlUIbLdnT9KltGtw3QlPg7kX9VZRH";
		const _returnValuehTAQp8r = await isSame(_inputP788eRV, _unitswWS74B2)
	});
})