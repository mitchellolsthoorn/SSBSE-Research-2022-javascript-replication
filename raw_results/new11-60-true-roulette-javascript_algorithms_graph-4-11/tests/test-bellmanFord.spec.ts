export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphAGWJRmE = "sdfoC3zw6848d";
		const _returnValueP1Mc4E6 = 2.4533943109979788;
		const _getKeyn6AnxNX = () => { return _returnValueP1Mc4E6 };
		const _startVertexzJg1WKc = {
			"getKey": _getKeyn6AnxNX
	}
		const _returnValueuEsrZNX = await bellmanFord(_graphAGWJRmE, _startVertexzJg1WKc)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedBqnB5Wp = false;
		const _graphwDzGzcM = new Graph(_isDirectedBqnB5Wp)
		const _vertexKeyxmjdcbj = -9.02260157685553;
		const _returnValueSq9vgc7 = await _graphwDzGzcM.getVertexByKey(_vertexKeyxmjdcbj)
		const _returnValueHRbyCwT = await _graphwDzGzcM.getWeight()
		const _returnValueHWy64kd = await _graphwDzGzcM.getWeight()
		const _returnValuei3m3w4 = undefined;
		const _getNeighborsrBqnFnV = () => { return _returnValuei3m3w4 };
		const _vertexvK9VbU = {
			"getNeighbors": _getNeighborsrBqnFnV
	}
		const _returnValueIVJHKH = await _graphwDzGzcM.getNeighbors(_vertexvK9VbU)
		const _returnValuef5CSsA6 = undefined;
		const _getKeygWZJpDE = () => { return _returnValuef5CSsA6 };
		const _startVertexWodl6e5 = {
			"getKey": _getKeygWZJpDE
	}
		const _returnValueIAnNyMy = await bellmanFord(_graphwDzGzcM, _startVertexWodl6e5)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedIxtpzhQ = true;
		const _graphthq3zU = new Graph(_isDirectedIxtpzhQ)
		const _returnValuefBZ3m79 = await _graphthq3zU.getVerticesIndices()
		const _arrayValuevEjutg = null;
		const _arrayValueJPJQv4i = [_arrayValuevEjutg]
		const _returnValueQ5hOFjx = [_arrayValueJPJQv4i]
		const _arrayValuejGJsFh = () => { return _returnValueQ5hOFjx };
		const _arrayValueuzon4mB = -5.058466276491236;
		const _valuevdxZ7Xt = [_arrayValuejGJsFh, _arrayValueuzon4mB]
		const _returnValueuptkZVK = "so8rmfpyLeP9WdYsRojrdaIYv4X351BeuaFFhUmfDVNtj8LAUNvxeDx1k2JpJmP9";
		const _keyCallbackFPP0X9T = () => { return _returnValueuptkZVK };
		const _newVertexzGyXQu9 = new DisjointSetItem(_valuevdxZ7Xt, _keyCallbackFPP0X9T)
		const _returnValueTPHBAdl = await _newVertexzGyXQu9.getRank()
		const _returnValuexfowEk1 = await _newVertexzGyXQu9.getRoot()
		const _returnValueNCfQLW = await _graphthq3zU.addVertex(_newVertexzGyXQu9)
		const _valuev3Jx9GG = "a8fvXCUOxJx8CjshM6ecmAvjkUoJWdyrHoXcfTLoyMpYIVnEP2PF2oyg4WYAtF9sqFSwCXBhHxeB1bI5jj0TXfCohzXirf";
		const _returnValueOntfSf = null;
		const _keyCallbacksYv92K0 = () => { return _returnValueOntfSf };
		const _startVertexVzWWFVD = new DisjointSetItem(_valuev3Jx9GG, _keyCallbacksYv92K0)
		const _returnValueg8rAjwd = await _startVertexVzWWFVD.getChildren()
		const _parentItemqoaSC2u = null;
		const _forceSettingParentChildKHIVQ0C = false;
		const _returnValueLKMiy9 = await _startVertexVzWWFVD.setParent(_parentItemqoaSC2u, _forceSettingParentChildKHIVQ0C)
		const _returnValuevXKk8yl = await _startVertexVzWWFVD.isRoot()
		const _characterrTyaFyF = null;
		const _isCompleteWordP3TtjX1 = true;
		const _parentItemXthA68 = new TrieNode(_characterrTyaFyF, _isCompleteWordP3TtjX1)
		const _returnValuep2K6GCJ = await _parentItemXthA68.hasChildren()
		const _returnValueqV2rjhH = await _parentItemXthA68.toString()
		const _characterbgvJx8 = undefined;
		const _returnValuePtNif4 = await _parentItemXthA68.hasChild(_characterbgvJx8)
		const _forceSettingParentChildpbudS5M = false;
		const _returnValueKlRIdBZ = await _startVertexVzWWFVD.setParent(_parentItemXthA68, _forceSettingParentChildpbudS5M)
		const _returnValued9vC5f = await bellmanFord(_graphthq3zU, _startVertexVzWWFVD)
	});
})