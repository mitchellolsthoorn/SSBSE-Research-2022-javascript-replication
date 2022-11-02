export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueKCrl1eI = 5.003215306299092;
		const _getAllEdgesEyvXDUZ = () => { return _returnValueKCrl1eI };
		const _returnValueZM5Xho = false;
		const _getAllVertices9N5tmA = () => { return _returnValueZM5Xho };
		const _returnValueKMPALFm = undefined;
		const _deleteEdgesFDl4kx = () => { return _returnValueKMPALFm };
		const _graphu6xshFp = {
			"getAllEdges": _getAllEdgesEyvXDUZ,
		"getAllVertices": _getAllVertices9N5tmA,
		"deleteEdge": _deleteEdgesFDl4kx
	}
		const _returnValuekOpgqdc = await eulerianPath(_graphu6xshFp)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedWV8qeur = true;
		const _graphKAtlkqw = new Graph(_isDirectedWV8qeur)
		const _valuemwrobmO = null;
		const _startVertexxlkXdQv = new GraphVertex(_valuemwrobmO)
		const _edgedCuppP4 = 7.176935000575771;
		const _returnValuexgTnCQH = await _startVertexxlkXdQv.deleteEdge(_edgedCuppP4)
		const _returnValueCXXOB0Z = await _startVertexxlkXdQv.deleteAllEdges()
		const _endVertexhAofPNA = undefined;
		const _returnValuemxQdwx5 = await _graphKAtlkqw.findEdge(_startVertexxlkXdQv, _endVertexhAofPNA)
		const _returnValueMpjH6aU = await eulerianPath(_graphKAtlkqw)
	});
})