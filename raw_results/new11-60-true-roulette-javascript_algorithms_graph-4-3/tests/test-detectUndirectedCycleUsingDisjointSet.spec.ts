export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueKhRvwqk = -0.6442126864728195;
		const _getAllVerticesqmSM0k7 = () => { return _returnValueKhRvwqk };
		const _arrayValuetqT3ZL = {
		
	}
		const _returnValuerEo5eXP = [_arrayValuetqT3ZL]
		const _getAllEdgesu71H8zS = () => { return _returnValuerEo5eXP };
		const _graphrw7owr = {
			"getAllVertices": _getAllVerticesqmSM0k7,
		"getAllEdges": _getAllEdgesu71H8zS
	}
		const _returnValueA3MT9WK = await detectUndirectedCycleUsingDisjointSet(_graphrw7owr)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedvWAbR3Z = false;
		const _graphZ2FF63U = new Graph(_isDirectedvWAbR3Z)
		const _returnValueXuQy9Vf = 5.485880035816903;
		const _vertexKeye8DoGns = () => { return _returnValueXuQy9Vf };
		const _returnValuefIID6QD = await _graphZ2FF63U.getVertexByKey(_vertexKeye8DoGns)
		const _returnValueBU9S1A = await _graphZ2FF63U.getAdjacencyMatrix()
		const _arrayValuemNFGx1b = null;
		const _arrayValueuBnaWvt = -4.0282363715985;
		const _arrayValuehaqQt00 = null;
		const _valueg9raHJ1 = [_arrayValuemNFGx1b, _arrayValueuBnaWvt, _arrayValuehaqQt00]
		const _returnValueclAKj57 = undefined;
		const _returnValueMpwaTm = () => { return _returnValueclAKj57 };
		const _keyCallbackpDv4ttP = () => { return _returnValueMpwaTm };
		const _newVertexDGjFzzf = new DisjointSetItem(_valueg9raHJ1, _keyCallbackpDv4ttP)
		const _returnValuecHhHIWt = await _newVertexDGjFzzf.getRoot()
		const _returnValueNhVeTYw = await _newVertexDGjFzzf.getRoot()
		const _returnValueeVzIsXK = await _newVertexDGjFzzf.getRoot()
		const _returnValuerpxTdEp = await _newVertexDGjFzzf.getRank()
		const _returnValuehNc0kVe = await _graphZ2FF63U.addVertex(_newVertexDGjFzzf)
		const _returnValueVKnpPe9 = await detectUndirectedCycleUsingDisjointSet(_graphZ2FF63U)
	});
})