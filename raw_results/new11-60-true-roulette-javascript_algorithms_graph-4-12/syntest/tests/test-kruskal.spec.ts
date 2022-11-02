export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedIrSEWs = undefined;
		const _returnValueLCPXcEk = undefined;
		const _getAllEdgesCPmEw37 = () => { return _returnValueLCPXcEk };
		const _getAllVerticesO75y7g6 = true;
		const _graphj67CkTh = {
			"isDirected": _isDirectedIrSEWs,
		"getAllEdges": _getAllEdgesCPmEw37,
		"getAllVertices": _getAllVerticesO75y7g6
	}
		const _returnValueT8jOBv8 = await kruskal(_graphj67CkTh)
	});

	it('test for kruskal', async () => {
		const _isDirectedQbPZbiS = "P2j3KUzVsLH5W5pMidYw1yLJni1PTqheozNcTWFa9K6O8hDmB62H";
		const _returnValueVoGnIE1 = false;
		const _getAllEdgeseSTvWA = () => { return _returnValueVoGnIE1 };
		const _returnValueL7TbrOq = undefined;
		const _getAllVerticesDXH3scG = () => { return _returnValueL7TbrOq };
		const _graphc5snvv = {
			"isDirected": _isDirectedQbPZbiS,
		"getAllEdges": _getAllEdgeseSTvWA,
		"getAllVertices": _getAllVerticesDXH3scG
	}
		const _returnValueGq0Afsq = await kruskal(_graphc5snvv)
	});

	it('test for kruskal', async () => {
		const _isDirectedgMDMQ6a = false;
		const _graphA9qXUIO = new Graph(_isDirectedgMDMQ6a)
		const _arrayValuedJxy3ug = null;
		const _returnValueTIz1fw = [_arrayValuedJxy3ug]
		const _getKeyr5Ut4v3 = () => { return _returnValueTIz1fw };
		const _startVertexhlpHl6 = {
			"getKey": _getKeyr5Ut4v3
	}
		const _endVertexqt7NPgJ = {
		
	}
		const _returnValueTtAjxsy = await _graphA9qXUIO.findEdge(_startVertexhlpHl6, _endVertexqt7NPgJ)
		const _returnValueLcMYwX = await _graphA9qXUIO.reverse()
		const _returnValueOL6G6jK = await kruskal(_graphA9qXUIO)
	});
})