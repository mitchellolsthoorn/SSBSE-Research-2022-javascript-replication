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
		const _returnValueSB4jqSd = false;
		const _returnValueO44hUPd = () => { return _returnValueSB4jqSd };
		const _getAllVerticesTu5XfnM = () => { return _returnValueO44hUPd };
		const _returnValuexgmZfqH = undefined;
		const _findEdgezg4V53g = () => { return _returnValuexgmZfqH };
		const _graphVOA4Z9h = {
			"getAllVertices": _getAllVerticesTu5XfnM,
		"findEdge": _findEdgezg4V53g
	}
		const _returnValueeimYttT = await graphBridges(_graphVOA4Z9h)
	});

	it('test for graphBridges', async () => {
		const _isDirectedUwOwZWn = false;
		const _graphGagnwXZ = new Graph(_isDirectedUwOwZWn)
		const _returnValueoIWkiLo = await _graphGagnwXZ.reverse()
		const _returnValuerG0T9IR = await _graphGagnwXZ.getAllEdges()
		const _returnValueEajt9hM = await _graphGagnwXZ.getAllEdges()
		const _valuelF13l0C = -0.3874959107907099;
		const _newVertexDZclmgE = new GraphVertex(_valuelF13l0C)
		const _requiredEdgePsu2uGJ = "7e5mm4jIjtt6Ihgme1auDtxYmkpJYKhBCiAy9xFLPQ0VFXggzZ9geK0SM5Qth7NO7bYzmeB";
		const _returnValue0A6s0d = await _newVertexDZclmgE.hasEdge(_requiredEdgePsu2uGJ)
		const _edgeUXYZ64w = undefined;
		const _returnValueJSMvbNz = await _newVertexDZclmgE.addEdge(_edgeUXYZ64w)
		const _returnValueA8XKwRF = await _newVertexDZclmgE.getDegree()
		const _returnValueKsZj5ya = await _graphGagnwXZ.addVertex(_newVertexDZclmgE)
		const _returnValueUzOVcB = await _graphGagnwXZ.getWeight()
		const _returnValueNcaiZc = await graphBridges(_graphGagnwXZ)
	});
})