export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _getAllVerticeseb8KtSl = "pZ";
		const _graph1bpo44 = {
			"getAllVertices": _getAllVerticeseb8KtSl
	}
		const _returnValueJCruOCw = await detectDirectedCycle(_graph1bpo44)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueA0wFTWA = []
		const _getAllVerticesUSvf9Bf = () => { return _returnValueA0wFTWA };
		const _graphMmVBAL5 = {
			"getAllVertices": _getAllVerticesUSvf9Bf
	}
		const _returnValueeLtXnwO = await detectDirectedCycle(_graphMmVBAL5)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedoxSFXqq = true;
		const _graphf5CVbhe = new Graph(_isDirectedoxSFXqq)
		const _valueNMCvTjc = null;
		const _returnValueqUxUXDM = false;
		const _keyCallbackihRJhU = () => { return _returnValueqUxUXDM };
		const _newVertexSqXZK9v = new DisjointSetItem(_valueNMCvTjc, _keyCallbackihRJhU)
		const _returnValuedqmVz1F = await _newVertexSqXZK9v.getRank()
		const _returnValuewszjxoT = await _newVertexSqXZK9v.getRank()
		const _returnValueQcaWH2r = await _graphf5CVbhe.addVertex(_newVertexSqXZK9v)
		const _returnValueepX7bTC = await _graphf5CVbhe.getWeight()
		const _returnValueg8EUpHf = await _graphf5CVbhe.reverse()
		const _returnValueVXa85uy = await detectDirectedCycle(_graphf5CVbhe)
	});
})