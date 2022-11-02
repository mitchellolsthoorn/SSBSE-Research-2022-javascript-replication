export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueSwzWjc5 = "hbSRBtr5brTcBxA4";
		const _isDirectedP4KqlTN = () => { return _returnValueSwzWjc5 };
		const _returnValueQRperLO = false;
		const _getAllEdgesdyxEMnH = () => { return _returnValueQRperLO };
		const _returnValuejE7Yu9 = {
		
	}
		const _getAllVerticesQHMkCxc = () => { return _returnValuejE7Yu9 };
		const _graphXlnb6b0 = {
			"isDirected": _isDirectedP4KqlTN,
		"getAllEdges": _getAllEdgesdyxEMnH,
		"getAllVertices": _getAllVerticesQHMkCxc
	}
		const _returnValueriJya4 = await kruskal(_graphXlnb6b0)
	});

	it('test for kruskal', async () => {
		const _isDirectedG050bWk = false;
		const _graphwIMi7Yx = new Graph(_isDirectedG050bWk)
		const _returnValueTHT8YFz = await _graphwIMi7Yx.reverse()
		const _returnValuemA9FTPu = undefined;
		const _getNeighborsWiBwUji = () => { return _returnValuemA9FTPu };
		const _vertexcWh5Qnp = {
			"getNeighbors": _getNeighborsWiBwUji
	}
		const _returnValueAUCyIOx = await _graphwIMi7Yx.getNeighbors(_vertexcWh5Qnp)
		const _returnValuegrrt7Cl = await _graphwIMi7Yx.getAdjacencyMatrix()
		const _returnValue5LfBgu = await _graphwIMi7Yx.getVerticesIndices()
		const _returnValuexhbBUDO = await kruskal(_graphwIMi7Yx)
	});
})