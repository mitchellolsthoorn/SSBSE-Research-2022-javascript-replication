export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphMurZtLA = []
		const _returnValueNzCGPW9 = await bfTravellingSalesman(_graphMurZtLA)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedmXWOGEA = true;
		const _graphz2BnqI4 = new Graph(_isDirectedmXWOGEA)
		const _returnValueT6GWmmi = await _graphz2BnqI4.getWeight()
		const _returnValueC7WA5aN = await bfTravellingSalesman(_graphz2BnqI4)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedYbLXIwy = false;
		const _graphnGMbKW = new Graph(_isDirectedYbLXIwy)
		const _returnValuewQBcFo8 = 5.213680488406361;
		const _valueMQYeVha = () => { return _returnValuewQBcFo8 };
		const _returnValueQ6BObXl = true;
		const _keyCallbackaz3Dww = () => { return _returnValueQ6BObXl };
		const _newVertexJMgCBMH = new DisjointSetItem(_valueMQYeVha, _keyCallbackaz3Dww)
		const _returnValuej5WNYg = await _newVertexJMgCBMH.getRank()
		const _returnValuerRzipSo = await _newVertexJMgCBMH.getRoot()
		const _returnValuekkEDCf = await _graphnGMbKW.addVertex(_newVertexJMgCBMH)
		const _returnValueT5RPWob = {
		
	}
		const _getNeighborsDtDxxPz = () => { return _returnValueT5RPWob };
		const _vertexv0Zgzk = {
			"getNeighbors": _getNeighborsDtDxxPz
	}
		const _returnValueXpCppmP = await _graphnGMbKW.getNeighbors(_vertexv0Zgzk)
		const _returnValueKSadYkm = await _graphnGMbKW.getAllEdges()
		const _vertexKeyL4ZgqGX = -7.5519780459192;
		const _returnValuevdpBfc8 = await _graphnGMbKW.getVertexByKey(_vertexKeyL4ZgqGX)
		const _returnValueZrtJltG = await bfTravellingSalesman(_graphnGMbKW)
	});
})