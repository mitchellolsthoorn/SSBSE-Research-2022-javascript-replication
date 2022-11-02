export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _getAllVerticesj79KKCf = true;
		const _returnValuekfDGTSO = undefined;
		const _findEdgeSXbEVOH = () => { return _returnValuekfDGTSO };
		const _graphxTRJ9oZ = {
			"getAllVertices": _getAllVerticesj79KKCf,
		"findEdge": _findEdgeSXbEVOH
	}
		const _returnValuePy3lyxb = await graphBridges(_graphxTRJ9oZ)
	});

	it('test for graphBridges', async () => {
		const _isDirectedI7cVE5I = false;
		const _graphTyjoF4z = new Graph(_isDirectedI7cVE5I)
		const _returnValueIHz5prQ = await _graphTyjoF4z.getAdjacencyMatrix()
		const _returnValueJ9LK6Cr = false;
		const _getKeyL9dxRin = () => { return _returnValueJ9LK6Cr };
		const _newVertexWCZOstq = {
			"getKey": _getKeyL9dxRin
	}
		const _returnValueAs2wMJ4 = await _graphTyjoF4z.addVertex(_newVertexWCZOstq)
		const _returnValueSyy6cZ = await _graphTyjoF4z.getWeight()
		const _returnValuexYSGnNh = await graphBridges(_graphTyjoF4z)
	});
})