export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphzrOkQ0z = "UmnNXbBvp9lkRbv5b6erdTfuC";
		const _arrayValuerMYEJIN = []
		const _returnValueInGTgXN = [_arrayValuerMYEJIN]
		const _startVertexdgjODUt = () => { return _returnValueInGTgXN };
		const _returnValueFb6equc = await dijkstra(_graphzrOkQ0z, _startVertexdgjODUt)
	});
})