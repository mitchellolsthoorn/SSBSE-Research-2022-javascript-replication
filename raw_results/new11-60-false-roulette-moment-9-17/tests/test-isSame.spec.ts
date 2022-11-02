export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputexyKAW = 0.16366587883661055;
		const _unitsloAmNb = "sxdPRsTHRhOng9VZQK6UO28PBns3XibfTBTgEoeIHHsgY33tVTL85mSj9JyT2xJFlNgAGAPlkfrrQPNcXULX";
		const _returnValueWGoXeiU = await isSame(_inputexyKAW, _unitsloAmNb)
	});
})