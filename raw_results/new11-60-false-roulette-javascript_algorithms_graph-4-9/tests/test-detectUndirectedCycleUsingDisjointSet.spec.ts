export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueZDO0UC7 = "foTubODG";
		const _getAllVerticesfwr7sJe = () => { return _returnValueZDO0UC7 };
		const _returnValue7deKVX = null;
		const _getAllEdgesrLAmWqR = () => { return _returnValue7deKVX };
		const _graphUDAMTjr = {
			"getAllVertices": _getAllVerticesfwr7sJe,
		"getAllEdges": _getAllEdgesrLAmWqR
	}
		const _returnValueVxIYbw = await detectUndirectedCycleUsingDisjointSet(_graphUDAMTjr)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedA9hjw05 = true;
		const _graphFQTbkZx = new Graph(_isDirectedA9hjw05)
		const _returnValueqlQuVUX = await _graphFQTbkZx.toString()
		const _returnValueaiomSft = await _graphFQTbkZx.getAdjacencyMatrix()
		const _returnValuejOEFVk7 = await detectUndirectedCycleUsingDisjointSet(_graphFQTbkZx)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueZ4KXNjR = []
		const _getAllVerticesUO3lXQ0 = () => { return _returnValueZ4KXNjR };
		const _returnValueIA6i69Z = -1.517181138499259;
		const _returnValueJxFFb8e = () => { return _returnValueIA6i69Z };
		const _arrayValueqgWD27n = () => { return _returnValueJxFFb8e };
		const _returnValueRSmrN2G = [_arrayValueqgWD27n]
		const _getAllEdgesqXG1jQx = () => { return _returnValueRSmrN2G };
		const _graphjUwcTRx = {
			"getAllVertices": _getAllVerticesUO3lXQ0,
		"getAllEdges": _getAllEdgesqXG1jQx
	}
		const _returnValueDjwPCg = await detectUndirectedCycleUsingDisjointSet(_graphjUwcTRx)
	});
})