export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueBrqORc5 = "7iaBU";
		const _getAllEdgesOnG1fMh = () => { return _returnValueBrqORc5 };
		const _returnValueIqKzDJA = false;
		const _getAllVerticesDnLSFq = () => { return _returnValueIqKzDJA };
		const _returnValuen2sQuQ6 = undefined;
		const _deleteEdgelVfQwRO = () => { return _returnValuen2sQuQ6 };
		const _graphcgznugI = {
			"getAllEdges": _getAllEdgesOnG1fMh,
		"getAllVertices": _getAllVerticesDnLSFq,
		"deleteEdge": _deleteEdgelVfQwRO
	}
		const _returnValuekd5PBLr = await eulerianPath(_graphcgznugI)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedN6Wuc9 = false;
		const _graphl5fYY6M = new Graph(_isDirectedN6Wuc9)
		const _returnValueU3bn4u = await _graphl5fYY6M.toString()
		const _returnValueKFc827l = null;
		const _getKeyEtQC20 = () => { return _returnValueKFc827l };
		const _startVertexrduMRrM = {
			"getKey": _getKeyEtQC20
	}
		const _arrayValueujYyDK = 5.853289004156723;
		const _endVertexOxIUuq = [_arrayValueujYyDK]
		const _returnValuejwc4jg8 = await _graphl5fYY6M.findEdge(_startVertexrduMRrM, _endVertexOxIUuq)
		const _returnValuesGCH2nA = "veL9p";
		const _getKeyShTx9ij = () => { return _returnValuesGCH2nA };
		const _newVertex2Ka9Sy = {
			"getKey": _getKeyShTx9ij
	}
		const _returnValueiT1DSVF = await _graphl5fYY6M.addVertex(_newVertex2Ka9Sy)
		const _returnValueEmaUQKI = await eulerianPath(_graphl5fYY6M)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedqQJLR5Q = true;
		const _graphGE89GK = new Graph(_isDirectedqQJLR5Q)
		const _returnValuexi1SG0H = await _graphGE89GK.getAllVertices()
		const _returnValueISclQCI = await _graphGE89GK.getAdjacencyMatrix()
		const _returnValueH3tGNsY = await _graphGE89GK.getAllVertices()
		const _returnValue4RobDU = await _graphGE89GK.getAllEdges()
		const _arrayValueEBsOzh = null;
		const _vertexKeyWq2SKTK = [_arrayValueEBsOzh]
		const _returnValueeCRK5R6 = await _graphGE89GK.getVertexByKey(_vertexKeyWq2SKTK)
		const _returnValuedyZOPUK = await eulerianPath(_graphGE89GK)
	});
})