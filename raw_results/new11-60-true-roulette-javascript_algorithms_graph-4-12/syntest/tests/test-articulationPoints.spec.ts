export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueJyKJx5Y = undefined;
		const _getAllVerticessjdLjNQ = () => { return _returnValueJyKJx5Y };
		const _graphuuGvLrM = {
			"getAllVertices": _getAllVerticessjdLjNQ
	}
		const _returnValueKnk0xsB = await articulationPoints(_graphuuGvLrM)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedIFo1Hze = true;
		const _graphBTn5Os = new Graph(_isDirectedIFo1Hze)
		const _valuelulBVwW = undefined;
		const _returnValueipyZ2Do = "SM74KSKn1KZXG2TT3chPfMiDOwuWYn2FuMftH77ffMcMHCy2sJ";
		const _keyCallbackHY3Jh3q = () => { return _returnValueipyZ2Do };
		const _newVertexvaztOmz = new DisjointSetItem(_valuelulBVwW, _keyCallbackHY3Jh3q)
		const _returnValuelTFwh9i = await _newVertexvaztOmz.getChildren()
		const _returnValueQzH5t52 = await _newVertexvaztOmz.getChildren()
		const _returnValued0iQn6K = await _graphBTn5Os.addVertex(_newVertexvaztOmz)
		const _returnValueTvdjxGV = await _graphBTn5Os.getAllEdges()
		const _returnValuecRl7rln = await _graphBTn5Os.reverse()
		const _returnValuemxHju5j = await articulationPoints(_graphBTn5Os)
	});
})