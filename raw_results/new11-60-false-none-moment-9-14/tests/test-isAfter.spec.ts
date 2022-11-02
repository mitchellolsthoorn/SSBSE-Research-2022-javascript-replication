export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputA0GTW2S = -4.881104319111377;
		const _returnValueGkMWcy = false;
		const _unitsf0YVAAV = () => { return _returnValueGkMWcy };
		const _returnValueENAnAu2 = await isAfter(_inputA0GTW2S, _unitsf0YVAAV)
	});
})