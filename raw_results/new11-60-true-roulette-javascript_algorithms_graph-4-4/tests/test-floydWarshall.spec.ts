export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueDXWGlzl = -7.100820498801472;
		const _getAllVerticesnRKYyod = () => { return _returnValueDXWGlzl };
		const _returnValuedNNvjcV = false;
		const _findEdgeadgMZtF = () => { return _returnValuedNNvjcV };
		const _graphbU7nHJ = {
			"getAllVertices": _getAllVerticesnRKYyod,
		"findEdge": _findEdgeadgMZtF
	}
		const _returnValueNg6A6k4 = await floydWarshall(_graphbU7nHJ)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedCig9aOT = false;
		const _graphYBlUFab = new Graph(_isDirectedCig9aOT)
		const _returnValueOfTJkxR = await _graphYBlUFab.reverse()
		const _vertexKeyqKKXkVA = true;
		const _returnValue60hxMa = await _graphYBlUFab.getVertexByKey(_vertexKeyqKKXkVA)
		const _returnValueXErwafE = await _graphYBlUFab.getAdjacencyMatrix()
		const _returnValuel4zI7D0 = await _graphYBlUFab.reverse()
		const _returnValueOY9sC2 = await floydWarshall(_graphYBlUFab)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueKESm2N2 = null;
		const _returnValuecQA2Jyo = "z9Fzfw8XDlVdbfZnsPw5rWPxbWFnQHfKrEO213vj1pLxrefJ51Uml3AClDdKZITQA4y7WeVU2wOYePcgW";
		const _arrayValueMViJsC = () => { return _returnValuecQA2Jyo };
		const _arrayValuejCy9sPm = null;
		const _returnValuejxA2xPT = [_arrayValueKESm2N2, _arrayValueMViJsC, _arrayValuejCy9sPm]
		const _getAllVerticesvTJIhM = () => { return _returnValuejxA2xPT };
		const _arrayValuetG5DpVi = null;
		const _arrayValueD29Ypcs = -3.4984007716241052;
		const _returnValueQu3O5HY = [_arrayValuetG5DpVi, _arrayValueD29Ypcs]
		const _findEdgeFZlPF6o = () => { return _returnValueQu3O5HY };
		const _graphbx6uK8q = {
			"getAllVertices": _getAllVerticesvTJIhM,
		"findEdge": _findEdgeFZlPF6o
	}
		const _returnValuejVUmA9T = await floydWarshall(_graphbx6uK8q)
	});
})