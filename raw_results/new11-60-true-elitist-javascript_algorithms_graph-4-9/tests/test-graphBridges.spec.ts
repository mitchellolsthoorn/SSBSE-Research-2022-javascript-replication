export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _getAllVerticesUgnNdPO = undefined;
		const _returnValueywefNqT = {
		
	}
		const _findEdgeVEKii3a = () => { return _returnValueywefNqT };
		const _graphJDDtvY0 = {
			"getAllVertices": _getAllVerticesUgnNdPO,
		"findEdge": _findEdgeVEKii3a
	}
		const _returnValueIfQ4dQ = await graphBridges(_graphJDDtvY0)
	});

	it('test for graphBridges', async () => {
		const _isDirectedRDrRKq8 = false;
		const _graphGloE0Q6 = new Graph(_isDirectedRDrRKq8)
		const _returnValueXtPDFef = null;
		const _getKeytxibemN = () => { return _returnValueXtPDFef };
		const _newVertexn5vpTxE = {
			"getKey": _getKeytxibemN
	}
		const _returnValueZnRklE = await _graphGloE0Q6.addVertex(_newVertexn5vpTxE)
		const _returnValuecvPrg7Y = await graphBridges(_graphGloE0Q6)
	});
})