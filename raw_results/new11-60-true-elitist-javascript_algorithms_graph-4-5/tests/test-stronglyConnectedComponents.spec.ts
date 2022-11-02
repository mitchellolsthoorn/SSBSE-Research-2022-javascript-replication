export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValue4rYj2l = "oCENtG9yVUBcnAyl8fg9eQR3kXoU";
		const _reverseTnq7QYO = () => { return _returnValue4rYj2l };
		const _graphNCnXJ6k = {
			"reverse": _reverseTnq7QYO
	}
		const _returnValueKXXexv = await stronglyConnectedComponents(_graphNCnXJ6k)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedBRdNDh = false;
		const _grapha3HhkL6 = new Graph(_isDirectedBRdNDh)
		const _returnValueJsOTpJc = await _grapha3HhkL6.getAllVertices()
		const _returnValuedW0dwOt = await _grapha3HhkL6.getAllVertices()
		const _returnValuewW0Z68e = await _grapha3HhkL6.getAllEdges()
		const _returnValuedtqf1x8 = await stronglyConnectedComponents(_grapha3HhkL6)
	});
})