export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputVJBqnD0 = 1.991586438101919;
		const _unitsevp8Ut5 = true;
		const _returnValuet1qS2FF = await isSame(_inputVJBqnD0, _unitsevp8Ut5)
	});
})