export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValuebwOdfFB = false;
		const _inputx6BpB5o = () => { return _returnValuebwOdfFB };
		const _unitsL1HqhpN = {
		
	}
		const _returnValuevUWWeMB = await isSame(_inputx6BpB5o, _unitsL1HqhpN)
	});
})