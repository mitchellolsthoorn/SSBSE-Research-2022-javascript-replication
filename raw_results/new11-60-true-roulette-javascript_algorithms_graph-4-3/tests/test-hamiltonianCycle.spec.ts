export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphPHCVgC = undefined;
		const _returnValueGZiGs3U = await hamiltonianCycle(_graphPHCVgC)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueSztnzQQ = undefined;
		const _getVerticesIndicesZ2OQ6Xe = () => { return _returnValueSztnzQQ };
		const _returnValueOYgtCJ = {
		
	}
		const _getAdjacencyMatrixy1klMQG = () => { return _returnValueOYgtCJ };
		const _arrayValuewyTUr7 = undefined;
		const _arrayValueEd5auMV = true;
		const _arrayValueagZS6PU = undefined;
		const _arrayValue1RvwHq = "yFuSj1cfddAOZWn8h3knjnGoDhnuQPlMg2YmU1";
		const _returnValuefpunNtb = [_arrayValuewyTUr7, _arrayValueEd5auMV, _arrayValueagZS6PU, _arrayValue1RvwHq]
		const _getAllVerticesLuKCGnQ = () => { return _returnValuefpunNtb };
		const _graph4IC1aa = {
			"getVerticesIndices": _getVerticesIndicesZ2OQ6Xe,
		"getAdjacencyMatrix": _getAdjacencyMatrixy1klMQG,
		"getAllVertices": _getAllVerticesLuKCGnQ
	}
		const _returnValueVg6jUuj = await hamiltonianCycle(_graph4IC1aa)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedRjgRm8R = true;
		const _graphQcCLkXO = new Graph(_isDirectedRjgRm8R)
		const _valueGXnHmtg = false;
		const _newVertexA7V6cc = new GraphVertex(_valueGXnHmtg)
		const _returnValuensuZHJT = await _newVertexA7V6cc.deleteAllEdges()
		const _returnValueEj72QeO = await _newVertexA7V6cc.getEdges()
		const _requiredEdgeFG6s3wT = "HU31Ko6LG4EVRDCuVIiipw3MGud0VT4ApwzFnNwlc4yZBQF8uUEr1etfcbuENN7EHXKJ9XkF";
		const _returnValueXwsOvZT = await _newVertexA7V6cc.hasEdge(_requiredEdgeFG6s3wT)
		const _returnValueXloZ7OZ = await _newVertexA7V6cc.getDegree()
		const _returnValuer8nRLPc = await _graphQcCLkXO.addVertex(_newVertexA7V6cc)
		const _returnValueCYcSD6K = await _graphQcCLkXO.getVerticesIndices()
		const _returnValueolmDwpT = await hamiltonianCycle(_graphQcCLkXO)
	});
})