export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueAZ8TS5E = undefined;
		const _returnValueF326qZK = [_arrayValueAZ8TS5E]
		const _getAllVerticesC9EO1M = () => { return _returnValueF326qZK };
		const _findEdgeyHFUu8t = undefined;
		const _graphOTDW45T = {
			"getAllVertices": _getAllVerticesC9EO1M,
		"findEdge": _findEdgeyHFUu8t
	}
		const _returnValueORq5yuK = await graphBridges(_graphOTDW45T)
	});

	it('test for graphBridges', async () => {
		const _isDirectedR2M4dWE = "eyMFLVX5cwE5prHp59tOUperdsAjhHSZLA1I4yaGbYxQuIuX62CGUkYuEo66ic5aaUoStK5Q";
		const _graphMccijVQ = new Graph(_isDirectedR2M4dWE)
		const _returnValueowj8L79 = await _graphMccijVQ.getAllEdges()
		const _vertexKeyuXMLNMb = false;
		const _returnValueObbZmCc = await _graphMccijVQ.getVertexByKey(_vertexKeyuXMLNMb)
		const _returnValuer0J6QvA = await _graphMccijVQ.getVerticesIndices()
		const _valuebmy0y5d = -6.244731072445923;
		const _newVertexv2lAsuJ = new GraphVertex(_valuebmy0y5d)
		const _returnValueNJWAaNq = await _newVertexv2lAsuJ.getEdges()
		const _returnValueWVC9i2M = null;
		const _edgeE4GylhT = () => { return _returnValueWVC9i2M };
		const _returnValueILEx9FD = await _newVertexv2lAsuJ.deleteEdge(_edgeE4GylhT)
		const _edgepxB51so = -5.486168419362597;
		const _returnValueBrBRsUI = await _newVertexv2lAsuJ.deleteEdge(_edgepxB51so)
		const _returnValuerGap81k = await _graphMccijVQ.addVertex(_newVertexv2lAsuJ)
		const _returnValuehdfBlVs = await _graphMccijVQ.getVerticesIndices()
		const _returnValueZED42VU = await graphBridges(_graphMccijVQ)
	});
})