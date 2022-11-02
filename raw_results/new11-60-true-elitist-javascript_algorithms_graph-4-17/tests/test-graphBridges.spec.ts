export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuePF8KlH = null;
		const _getAllVerticesJ6EjhkG = () => { return _returnValuePF8KlH };
		const _returnValuen7uJtN = false;
		const _findEdgeL8zbxqn = () => { return _returnValuen7uJtN };
		const _graphCj4UW0W = {
			"getAllVertices": _getAllVerticesJ6EjhkG,
		"findEdge": _findEdgeL8zbxqn
	}
		const _returnValueW5OUEqr = await graphBridges(_graphCj4UW0W)
	});

	it('test for graphBridges', async () => {
		const _isDirectedmBZBadW = false;
		const _graphkHXllrm = new Graph(_isDirectedmBZBadW)
		const _returnValueiFarKqV = false;
		const _getKeyYHH8meY = () => { return _returnValueiFarKqV };
		const _newVertexyeN0Oep = {
			"getKey": _getKeyYHH8meY
	}
		const _returnValuesoYge2I = await _graphkHXllrm.addVertex(_newVertexyeN0Oep)
		const _returnValueoBSyau = await _graphkHXllrm.getAllVertices()
		const _returnValuer42FHKT = await _graphkHXllrm.getVerticesIndices()
		const _returnValueOde4NtI = await _graphkHXllrm.getAllEdges()
		const _returnValuekIiH6V7 = await _graphkHXllrm.getWeight()
		const _returnValueP7xodqL = await graphBridges(_graphkHXllrm)
	});
})