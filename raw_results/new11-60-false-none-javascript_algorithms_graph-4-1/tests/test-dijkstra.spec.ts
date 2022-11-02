export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueFYDMUq0 = undefined;
		const _graphMYLlHaS = () => { return _returnValueFYDMUq0 };
		const _startVertexVw71m9m = -6.628861956542346;
		const _returnValueBE1kwo = await dijkstra(_graphMYLlHaS, _startVertexVw71m9m)
	});
})