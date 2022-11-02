export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputOEMbGoX = 5.048402312207042;
		const _unitsvQQxaa3 = 9.712073398500316;
		const _returnValueGG8waXq = await isSameOrBefore(_inputOEMbGoX, _unitsvQQxaa3)
	});
})