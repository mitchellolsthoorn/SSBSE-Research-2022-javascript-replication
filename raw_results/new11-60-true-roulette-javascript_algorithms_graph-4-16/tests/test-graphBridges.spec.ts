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
		const _arrayValuevhKzRLv = {
		
	}
		const _arrayValueaBXzNE3 = null;
		const _arrayValueXAlwdn2 = false;
		const _arrayValueuNhKJj7 = undefined;
		const _graphboEhTBo = [_arrayValuevhKzRLv, _arrayValueaBXzNE3, _arrayValueXAlwdn2, _arrayValueuNhKJj7]
		const _returnValueUYBEJi = await graphBridges(_graphboEhTBo)
	});

	it('test for graphBridges', async () => {
		const _isDirectedzAmHsSi = false;
		const _graphux6ZnDm = new Graph(_isDirectedzAmHsSi)
		const _valueO7W7NQd = "lAI1i8Dje6KfJfaj2WHB8qE6Bwl";
		const _returnValueh5dkj8l = undefined;
		const _keyCallbackn5Ah6QL = () => { return _returnValueh5dkj8l };
		const _startVertexGZp8pIV = new DisjointSetItem(_valueO7W7NQd, _keyCallbackn5Ah6QL)
		const _returnValueEW6Ygro = await _startVertexGZp8pIV.getRoot()
		const _returnValuendSw0ZF = await _startVertexGZp8pIV.getKey()
		const _endVertexNu1Ls33 = undefined;
		const _returnValueBeOBq1J = await _graphux6ZnDm.findEdge(_startVertexGZp8pIV, _endVertexNu1Ls33)
		const _returnValueFcDqBfe = "KXaN5n8sVQx5uKslpI2PIYXXqCmEk7oiu3n14qEbBzcZ8jbEz6KqTHuftw11c6eU65P09m4bYEqrRBcgk";
		const _getKeyeWoiUYP = () => { return _returnValueFcDqBfe };
		const _newVertexLuMVe7F = {
			"getKey": _getKeyeWoiUYP
	}
		const _returnValueisVfQy = await _graphux6ZnDm.addVertex(_newVertexLuMVe7F)
		const _returnValueeo5FqH0 = undefined;
		const _getNeighborshvScYKk = () => { return _returnValueeo5FqH0 };
		const _vertexOxPC2UE = {
			"getNeighbors": _getNeighborshvScYKk
	}
		const _returnValueE2IvbMP = await _graphux6ZnDm.getNeighbors(_vertexOxPC2UE)
		const _returnValueZCXzc4i = null;
		const _getNeighborsH7E4uHz = () => { return _returnValueZCXzc4i };
		const _vertexjg1z9Dm = {
			"getNeighbors": _getNeighborsH7E4uHz
	}
		const _returnValueqP4lSZs = await _graphux6ZnDm.getNeighbors(_vertexjg1z9Dm)
		const _returnValue6UToyP = await graphBridges(_graphux6ZnDm)
	});
})