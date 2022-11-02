export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValuej51wTRX = "SjuW6kyJBFlmSOYNXnDnpzkVcQ9nZLhtvJK3ObFltBviDgV8FYkwbqeI6gw47ewQ8EDikc9";
		const _returnValuecRAUh3U = "KKmqAPJx0ct6HgON7NuR36rjk4rFvGcLtCbUAuJUMpwRjOyl9yH0bWaIcIVwdccr3jKQeb22";
		const _arrayValueYHa2DeW = () => { return _returnValuecRAUh3U };
		const _arrayValuetstHhS7 = true;
		const _arrayValueyOl9TOF = [_arrayValuej51wTRX, _arrayValueYHa2DeW, _arrayValuetstHhS7]
		const _arrayValueFoitHT9 = -9.831130010440068;
		const _graphOGkiMKg = [_arrayValueyOl9TOF, _arrayValueFoitHT9]
		const _returnValuepA3mXDI = await detectUndirectedCycle(_graphOGkiMKg)
	});
})