export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueQtiedje = -2.1249955947823373;
		const _getAllVerticesVtPGt4a = () => { return _returnValueQtiedje };
		const _returnValueWmjeQSN = true;
		const _findEdgeEmiuC7l = () => { return _returnValueWmjeQSN };
		const _graphMdsGxbH = {
			"getAllVertices": _getAllVerticesVtPGt4a,
		"findEdge": _findEdgeEmiuC7l
	}
		const _returnValueq27iaap = false;
		const _getKeyMbiyTtF = () => { return _returnValueq27iaap };
		const _startVertex0VEhY7 = {
			"getKey": _getKeyMbiyTtF
	}
		const _returnValueVbTfOnG = await dijkstra(_graphMdsGxbH, _startVertex0VEhY7)
	});

	it('test for dijkstra', async () => {
		const _isDirectedHRKt3wa = true;
		const _graphqbXTmam = new Graph(_isDirectedHRKt3wa)
		const _vertexKeyluxItTD = true;
		const _returnValueEKvo5IR = await _graphqbXTmam.getVertexByKey(_vertexKeyluxItTD)
		const _returnValueq5HYhif = await _graphqbXTmam.getVerticesIndices()
		const _returnValuesefi8qS = null;
		const _getKeyhdwhBYm = () => { return _returnValuesefi8qS };
		const _startVertexifPmDn0 = {
			"getKey": _getKeyhdwhBYm
	}
		const _returnValueRQOivlW = await dijkstra(_graphqbXTmam, _startVertexifPmDn0)
	});
})