export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueNhPaj5U = -5.3662279344563855;
		const _arrayValuenRYF3Q = {
		
	}
		const _arrayValueozT2Ys2 = "R";
		const _returnValueXgECRzp = [_arrayValueNhPaj5U, _arrayValuenRYF3Q, _arrayValueozT2Ys2]
		const _returnValueMYARMUS = () => { return _returnValueXgECRzp };
		const _getAllVerticesK23by6R = () => { return _returnValueMYARMUS };
		const _returnValuegBgmvv = []
		const _findEdgeCzUGWl3 = () => { return _returnValuegBgmvv };
		const _graphUrKEDY3 = {
			"getAllVertices": _getAllVerticesK23by6R,
		"findEdge": _findEdgeCzUGWl3
	}
		const _returnValuesmT0GXv = await graphBridges(_graphUrKEDY3)
	});

	it('test for graphBridges', async () => {
		const _isDirectedNEw9I5Y = true;
		const _graphZ9QcD8B = new Graph(_isDirectedNEw9I5Y)
		const _returnValueC0ltsy2 = "0ob7zGPYxLjtDhSfLo2cpor3YdG8vC6vHPMxuye0i5Gea";
		const _getKeydE1PxJW = () => { return _returnValueC0ltsy2 };
		const _newVertexIrXP8QL = {
			"getKey": _getKeydE1PxJW
	}
		const _returnValueIskNgTO = await _graphZ9QcD8B.addVertex(_newVertexIrXP8QL)
		const _returnValueWK84sgC = await _graphZ9QcD8B.reverse()
		const _returnValueYARA3SN = await _graphZ9QcD8B.getAllVertices()
		const _arrayValuePCEWD2Z = false;
		const _arrayValuenpe63Mj = []
		const _valueCmjQdOJ = [_arrayValuePCEWD2Z, _arrayValuenpe63Mj]
		const _returnValuevCqs4Hw = {
		
	}
		const _keyCallbackJ9yISe = () => { return _returnValuevCqs4Hw };
		const _newVertexPmLomme = new DisjointSetItem(_valueCmjQdOJ, _keyCallbackJ9yISe)
		const _returnValueaHxb08a = await _newVertexPmLomme.getRoot()
		const _returnValueausxQO1 = await _newVertexPmLomme.getRoot()
		const _returnValuePp7FD0g = await _newVertexPmLomme.getChildren()
		const _returnValueAGzdJ82 = await _graphZ9QcD8B.addVertex(_newVertexPmLomme)
		const _returnValueZpqQWjO = await graphBridges(_graphZ9QcD8B)
	});
})