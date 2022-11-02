export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graph9R9KSL = "TYfqy5IeBBSdLZuwyxenX4zYNW8LhZxFKhJ3osAXPejJT8ql8x3g40IB";
		const _returnValuecBNq7Q = await prim(_graph9R9KSL)
	});

	it('test for prim', async () => {
		const _isDirectedvET0pGE = true;
		const _graphepqRp4b = new Graph(_isDirectedvET0pGE)
		const _returnValueJpVvlMG = undefined;
		const _returnValuezSJ9oij = () => { return _returnValueJpVvlMG };
		const _getNeighborsrYTgsLC = () => { return _returnValuezSJ9oij };
		const _vertexedk3KR9 = {
			"getNeighbors": _getNeighborsrYTgsLC
	}
		const _returnValuepVzySx1 = await _graphepqRp4b.getNeighbors(_vertexedk3KR9)
		const _returnValue7NviXq = await _graphepqRp4b.reverse()
		const _returnValueB3L0yAf = await _graphepqRp4b.getAllEdges()
		const _returnValueZ6yHUDl = await prim(_graphepqRp4b)
	});

	it('test for prim', async () => {
		const _isDirectedVVdLIc1 = false;
		const _graphSikau3X = new Graph(_isDirectedVVdLIc1)
		const _returnValueoeeDV2X = await _graphSikau3X.getWeight()
		const _returnValuehaNC6bi = "gKS89kIlGIXrGYgA6TZAqzdUlzV2C7uoluuat7uP8VWkE3erg3LJ2DpZcgr";
		const _getKeyVdL6T2K = () => { return _returnValuehaNC6bi };
		const _newVertexxIr0Kpj = {
			"getKey": _getKeyVdL6T2K
	}
		const _returnValuewRGFnPn = await _graphSikau3X.addVertex(_newVertexxIr0Kpj)
		const _returnValueYAExpoy = await _graphSikau3X.getAllEdges()
		const _returnValueXFNO8JQ = await prim(_graphSikau3X)
	});

	it('test for prim', async () => {
		const _isDirectedMCfYMKC = false;
		const _graphXbWz988 = new Graph(_isDirectedMCfYMKC)
		const _returnValueKN2WIYA = await _graphXbWz988.getAdjacencyMatrix()
		const _valueaWGVwXf = "MNvuz1Y6uWsP1IoY35prOH7n9Zo3LhQlAOLXhEMXRQIwwMnJFtkszR7CMXajqEBJNvUlvPfTQSjYsL5ngFJz";
		const _newVertexGCjI2O = new GraphVertex(_valueaWGVwXf)
		const _returnValuezxBDiiI = await _newVertexGCjI2O.deleteAllEdges()
		const _returnValueDv74JZH = await _newVertexGCjI2O.getEdges()
		const _returnValuebN3AZls = await _newVertexGCjI2O.getEdges()
		const _returnValueDqUHltL = await _graphXbWz988.addVertex(_newVertexGCjI2O)
		const _returnValueB7NWE3M = await _graphXbWz988.getWeight()
		const _returnValueYMCchE = await prim(_graphXbWz988)
	});
})