export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _isDirectedapRVFaK = undefined;
		const _graphA1EiMU6 = new Graph(_isDirectedapRVFaK)
		const _returnValuenK4wLiu = await _graphA1EiMU6.reverse()
		const _returnValueNuMarnm = await _graphA1EiMU6.getAllEdges()
		const _returnValuemEo1jhb = await detectDirectedCycle(_graphA1EiMU6)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedvF0To5M = true;
		const _graphxoGteg = new Graph(_isDirectedvF0To5M)
		const _returnValueFTKZFTB = []
		const _getKeyyC9jS7Q = () => { return _returnValueFTKZFTB };
		const _newVertexRiycQwS = {
			"getKey": _getKeyyC9jS7Q
	}
		const _returnValueziKXJDY = await _graphxoGteg.addVertex(_newVertexRiycQwS)
		const _valueA9hdGwU = false;
		const _returnValueTsVB6JC = null;
		const _keyCallbackEBfKuxP = () => { return _returnValueTsVB6JC };
		const _startVertexcKKwZzl = new DisjointSetItem(_valueA9hdGwU, _keyCallbackEBfKuxP)
		const _returnValueSh4pD5A = await _startVertexcKKwZzl.getRank()
		const _returnValuebZoGBLm = await _startVertexcKKwZzl.isRoot()
		const _returnValuemKttkj = await _startVertexcKKwZzl.isRoot()
		const _returnValueeI3e2nT = await _startVertexcKKwZzl.getRoot()
		const _endVertexjtBqEr = -7.71733702008615;
		const _returnValueINTtX0Z = await _graphxoGteg.findEdge(_startVertexcKKwZzl, _endVertexjtBqEr)
		const _returnValueca9pUA0 = await _graphxoGteg.getWeight()
		const _returnValueysd2VQ = await detectDirectedCycle(_graphxoGteg)
	});
})