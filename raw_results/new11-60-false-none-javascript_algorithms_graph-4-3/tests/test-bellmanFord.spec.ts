export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueWqlCFaE = "Ne5EuNOfyFMS4IPIVmEhQ1TXGx6WJ7zUxb6vR5GQSB0yuNyjbtGplmSDcgJy8bxL0C";
		const _arrayValuegfjKdjz = undefined;
		const _arrayValueyywQijd = false;
		const _arrayValueXpb6qmF = [_arrayValuegfjKdjz, _arrayValueyywQijd]
		const _arrayValueaR7byP = "g95q1vWWsuiweUtEENpdIUAY";
		const _arrayValuePBzGcXL = null;
		const _arrayValuez1qMjS0 = true;
		const _arrayValueQBsKia2 = undefined;
		const _arrayValueB3FHth = [_arrayValuePBzGcXL, _arrayValuez1qMjS0, _arrayValueQBsKia2]
		const _graphZnRlyQF = [_arrayValueWqlCFaE, _arrayValueXpb6qmF, _arrayValueaR7byP, _arrayValueB3FHth]
		const _returnValuejl2TJLh = false;
		const _startVertexxTmFU23 = () => { return _returnValuejl2TJLh };
		const _returnValueUQBhm2 = await bellmanFord(_graphZnRlyQF, _startVertexxTmFU23)
	});
})