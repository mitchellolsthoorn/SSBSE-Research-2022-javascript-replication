export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueuRncU6j = undefined;
		const _isDirectedPKMmXQm = () => { return _returnValueuRncU6j };
		const _returnValueV3kU4hT = undefined;
		const _getAllEdgespFk7cv = () => { return _returnValueV3kU4hT };
		const _returnValuezxbLhVk = 7.469137502270343;
		const _getAllVerticeshmpyPZW = () => { return _returnValuezxbLhVk };
		const _graphjo5kRXB = {
			"isDirected": _isDirectedPKMmXQm,
		"getAllEdges": _getAllEdgespFk7cv,
		"getAllVertices": _getAllVerticeshmpyPZW
	}
		const _returnValueWZPGWSP = await kruskal(_graphjo5kRXB)
	});

	it('test for kruskal', async () => {
		const _isDirectedeRVEzEo = false;
		const _graphP8Mua5 = new Graph(_isDirectedeRVEzEo)
		const _returnValuemKcHwID = await _graphP8Mua5.reverse()
		const _vertexKeyUKWDcSf = null;
		const _returnValuevvxRXjI = await _graphP8Mua5.getVertexByKey(_vertexKeyUKWDcSf)
		const _returnValuewsVLhG = await _graphP8Mua5.getAdjacencyMatrix()
		const _returnValuenR9Lmd0 = await kruskal(_graphP8Mua5)
	});
})