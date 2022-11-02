export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueNM8MzQ2 = null;
		const _getAllVerticesg6twVKf = () => { return _returnValueNM8MzQ2 };
		const _returnValueyFwYKUh = false;
		const _getAllEdgesOaTheUy = () => { return _returnValueyFwYKUh };
		const _graphZlGfwtq = {
			"getAllVertices": _getAllVerticesg6twVKf,
		"getAllEdges": _getAllEdgesOaTheUy
	}
		const _returnValueNydFMfp = await detectUndirectedCycleUsingDisjointSet(_graphZlGfwtq)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedhUUDIDm = true;
		const _graphnSbxuX = new Graph(_isDirectedhUUDIDm)
		const _returnValueebYD2Hh = false;
		const _returnValueGP97Pb = () => { return _returnValueebYD2Hh };
		const _getKeygKvbGb = () => { return _returnValueGP97Pb };
		const _newVertexzasMMZ3 = {
			"getKey": _getKeygKvbGb
	}
		const _returnValueCVsjvG4 = await _graphnSbxuX.addVertex(_newVertexzasMMZ3)
		const _returnValueyAMEanG = await _graphnSbxuX.getAllVertices()
		const _returnValuexZFRUKx = null;
		const _getKeyMT5Ay9C = () => { return _returnValuexZFRUKx };
		const _startVertexxNYa0l6 = {
			"getKey": _getKeyMT5Ay9C
	}
		const _endVertexRykdJeC = false;
		const _returnValuewjw7fuH = await _graphnSbxuX.findEdge(_startVertexxNYa0l6, _endVertexRykdJeC)
		const _returnValueoZlPm7W = await detectUndirectedCycleUsingDisjointSet(_graphnSbxuX)
	});
})