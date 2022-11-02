export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _getAllVerticesWPbOUYz = {
		
	}
		const _returnValueYfxYhbU = "CIajMYEkzMd3";
		const _findEdgezsyS0MN = () => { return _returnValueYfxYhbU };
		const _graph4xJ5ki = {
			"getAllVertices": _getAllVerticesWPbOUYz,
		"findEdge": _findEdgezsyS0MN
	}
		const _returnValueyxu1pTa = undefined;
		const _getKeyou7eip = () => { return _returnValueyxu1pTa };
		const _startVertexSTtgf3S = {
			"getKey": _getKeyou7eip
	}
		const _returnValuekp9opqO = await dijkstra(_graph4xJ5ki, _startVertexSTtgf3S)
	});

	it('test for dijkstra', async () => {
		const _returnValueMeGXDWU = []
		const _getAllVerticesGwdDllF = () => { return _returnValueMeGXDWU };
		const _findEdge6gn65K = undefined;
		const _graphXLFbzCo = {
			"getAllVertices": _getAllVerticesGwdDllF,
		"findEdge": _findEdge6gn65K
	}
		const _returnValueVcZgcXo = "AR2km1ut0wqKQp5dfhC8t4HQA88QWWnOXj6e23s4qPoHrgdJRyHmPDrn5zwkW1FHnNhJvsUx7alYorar";
		const _getKeyNDsGjXd = () => { return _returnValueVcZgcXo };
		const _startVertexose6VtU = {
			"getKey": _getKeyNDsGjXd
	}
		const _returnValueGGlL2yW = await dijkstra(_graphXLFbzCo, _startVertexose6VtU)
	});
})