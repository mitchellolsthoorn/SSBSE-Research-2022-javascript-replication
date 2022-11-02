export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuewt0kQtP = 6.892984464698916;
		const _getAllVerticesWMZXY1M = () => { return _returnValuewt0kQtP };
		const _arrayValueVRgU3zd = 4.828287381929568;
		const _arrayValueVN0foFT = undefined;
		const _returnValueG7O4MOu = [_arrayValueVRgU3zd, _arrayValueVN0foFT]
		const _getAdjacencyMatrixXvXJlba = () => { return _returnValueG7O4MOu };
		const _returnValuea9qHoLM = null;
		const _getVerticesIndicesE2vtSZ = () => { return _returnValuea9qHoLM };
		const _graphalacNBQ = {
			"getAllVertices": _getAllVerticesWMZXY1M,
		"getAdjacencyMatrix": _getAdjacencyMatrixXvXJlba,
		"getVerticesIndices": _getVerticesIndicesE2vtSZ
	}
		const _returnValueH6nJPXb = await bfTravellingSalesman(_graphalacNBQ)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedBKiH0y6 = false;
		const _graphhdJa6Ky = new Graph(_isDirectedBKiH0y6)
		const _valueGNH4ltV = -3.764769101223168;
		const _returnValueKTpTlE0 = -0.3215623692894791;
		const _keyCallbackSOhVAjU = () => { return _returnValueKTpTlE0 };
		const _newVertexz8NtH6t = new DisjointSetItem(_valueGNH4ltV, _keyCallbackSOhVAjU)
		const _returnValueqe1XH7s = await _newVertexz8NtH6t.getChildren()
		const _returnValueEJN5meC = await _newVertexz8NtH6t.getRank()
		const _returnValueXclN5kf = await _newVertexz8NtH6t.getRank()
		const _returnValuecqx1FAD = await _newVertexz8NtH6t.getRank()
		const _returnValueRmyXHsa = await _graphhdJa6Ky.addVertex(_newVertexz8NtH6t)
		const _returnValuedE7chC = await _graphhdJa6Ky.getWeight()
		const _returnValueYbQ1BxC = await bfTravellingSalesman(_graphhdJa6Ky)
	});
})