export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueDdigIDs = true;
		const _arrayValueTRbEMNw = -8.023240514302016;
		const _returnValueFbrO2PS = [_arrayValueDdigIDs, _arrayValueTRbEMNw]
		const _getAllEdgesPy3Bw9R = () => { return _returnValueFbrO2PS };
		const _returnValueju0dCsQ = 7.3654809302629545;
		const _getAllVerticesb6JEO7 = () => { return _returnValueju0dCsQ };
		const _returnValueO4Ho4DI = null;
		const _returnValuetf9AgA1 = () => { return _returnValueO4Ho4DI };
		const _deleteEdgePnsVChg = () => { return _returnValuetf9AgA1 };
		const _graphSOvsMWd = {
			"getAllEdges": _getAllEdgesPy3Bw9R,
		"getAllVertices": _getAllVerticesb6JEO7,
		"deleteEdge": _deleteEdgePnsVChg
	}
		const _returnValuebl0Yt0A = await eulerianPath(_graphSOvsMWd)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedsfTHUSg = true;
		const _graphbjpwRvN = new Graph(_isDirectedsfTHUSg)
		const _returnValue67wrGW = undefined;
		const _getKeyEW3fZQv = () => { return _returnValue67wrGW };
		const _newVertexlo1jcTI = {
			"getKey": _getKeyEW3fZQv
	}
		const _returnValueIncUE6k = await _graphbjpwRvN.addVertex(_newVertexlo1jcTI)
		const _returnValueAKPuUaD = await _graphbjpwRvN.toString()
		const _returnValuedr080W0 = await _graphbjpwRvN.getWeight()
		const _returnValuelRMppum = await _graphbjpwRvN.getAllVertices()
		const _returnValueMQuePNc = await eulerianPath(_graphbjpwRvN)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedc4FeVUd = false;
		const _graphWaV0T5M = new Graph(_isDirectedc4FeVUd)
		const _returnValuedU5uYIu = await _graphWaV0T5M.getAllEdges()
		const _returnValuehpOSXq = await _graphWaV0T5M.getWeight()
		const _returnValueMibrtw = await eulerianPath(_graphWaV0T5M)
	});
})