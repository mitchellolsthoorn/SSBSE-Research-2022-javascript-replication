export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuev1uojI3 = {
		
	}
		const _getAllVerticesvzRggS = () => { return _returnValuev1uojI3 };
		const _returnValuejN5li9g = null;
		const _returnValueerHWpKJ = () => { return _returnValuejN5li9g };
		const _findEdgeHsfDUoV = () => { return _returnValueerHWpKJ };
		const _graphxygH8p4 = {
			"getAllVertices": _getAllVerticesvzRggS,
		"findEdge": _findEdgeHsfDUoV
	}
		const _returnValueNbnkf56 = await graphBridges(_graphxygH8p4)
	});

	it('test for graphBridges', async () => {
		const _isDirectedgWP9pnZ = false;
		const _graphnxhuuvR = new Graph(_isDirectedgWP9pnZ)
		const _returnValueYXqVdNK = await _graphnxhuuvR.getAdjacencyMatrix()
		const _returnValuegosJix4 = await _graphnxhuuvR.getAdjacencyMatrix()
		const _returnValue3IJ8cG = {
		
	}
		const _getKeyBMRiyzO = () => { return _returnValue3IJ8cG };
		const _newVertexOJryCyY = {
			"getKey": _getKeyBMRiyzO
	}
		const _returnValueBfqzgU = await _graphnxhuuvR.addVertex(_newVertexOJryCyY)
		const _returnValuejEttt5S = await graphBridges(_graphnxhuuvR)
	});
})