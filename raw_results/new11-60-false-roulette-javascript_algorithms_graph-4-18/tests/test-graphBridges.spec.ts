export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuegxnxO0P = "tHHwFwxzyHcoIH3ugQEhF1WoFIaZsXH48";
		const _getAllVerticesoBB4DUw = () => { return _returnValuegxnxO0P };
		const _returnValuendcUd4 = "t6PTISm5UMq4ahuLlsPubIrTqmQrreXJQqBjTd0UpcvAWQIpItchUIU2I08LeJBsX8byaiOKPIrpGkOqPlAWLK";
		const _findEdgehPYY5xg = () => { return _returnValuendcUd4 };
		const _graphcBfwTmw = {
			"getAllVertices": _getAllVerticesoBB4DUw,
		"findEdge": _findEdgehPYY5xg
	}
		const _returnValueTMNotv = await graphBridges(_graphcBfwTmw)
	});

	it('test for graphBridges', async () => {
		const _isDirectedOhlfyFD = false;
		const _graphdXkst3D = new Graph(_isDirectedOhlfyFD)
		const _returnValuePmARV6 = true;
		const _getKeyoKKyDrJ = () => { return _returnValuePmARV6 };
		const _newVertexBZ93Y3 = {
			"getKey": _getKeyoKKyDrJ
	}
		const _returnValueWmRILzC = await _graphdXkst3D.addVertex(_newVertexBZ93Y3)
		const _vertexKeyhKucVpV = {
		
	}
		const _returnValueEIwqaq2 = await _graphdXkst3D.getVertexByKey(_vertexKeyhKucVpV)
		const _returnValueoelO2y4 = await _graphdXkst3D.getVerticesIndices()
		const _returnValueEooX3d6 = 2.9947631354020654;
		const _getNeighborsPu5lm1P = () => { return _returnValueEooX3d6 };
		const _vertexqkL4Jqj = {
			"getNeighbors": _getNeighborsPu5lm1P
	}
		const _returnValueL7uSvyc = await _graphdXkst3D.getNeighbors(_vertexqkL4Jqj)
		const _returnValue04Yqun = await graphBridges(_graphdXkst3D)
	});
})