export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueHmAkYVI = undefined;
		const _getAllEdgesn7GWGwa = () => { return _returnValueHmAkYVI };
		const _returnValueXFxX7Ug = false;
		const _getAllVerticesYTrMeMJ = () => { return _returnValueXFxX7Ug };
		const _returnValueEwTxmvs = null;
		const _deleteEdgeNC4bg7l = () => { return _returnValueEwTxmvs };
		const _graphSoFAIFs = {
			"getAllEdges": _getAllEdgesn7GWGwa,
		"getAllVertices": _getAllVerticesYTrMeMJ,
		"deleteEdge": _deleteEdgeNC4bg7l
	}
		const _returnValueoPCILc7 = await eulerianPath(_graphSoFAIFs)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedwG1J7Mh = true;
		const _graphCotx9ZK = new Graph(_isDirectedwG1J7Mh)
		const _returnValuedTf0dxu = await _graphCotx9ZK.toString()
		const _returnValueDH0vbe3 = await eulerianPath(_graphCotx9ZK)
	});
})