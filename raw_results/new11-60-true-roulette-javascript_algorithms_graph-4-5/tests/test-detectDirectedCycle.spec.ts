export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _grapho5X0YiU = "iTSv5zKZ8m8vwRhPMn2EjnFdv";
		const _returnValuen3HHYjp = await detectDirectedCycle(_grapho5X0YiU)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedpALR8kW = true;
		const _grapho0VdaJy = new Graph(_isDirectedpALR8kW)
		const _returnValueCbeDqYK = await _grapho0VdaJy.reverse()
		const _returnValuemaHQ37Z = await _grapho0VdaJy.getAdjacencyMatrix()
		const _returnValueIOA1Rp7 = await _grapho0VdaJy.getAdjacencyMatrix()
		const _returnValuesbwSJOQ = await detectDirectedCycle(_grapho0VdaJy)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectednBZSmUh = true;
		const _graphN5Iyirq = new Graph(_isDirectednBZSmUh)
		const _vertexKey8Sc3xg = "3s5WoaaSIiFygvmCjlfScLLe6Ql4JeFR9dKkP0JFQdftFc9g1O64jzMeO8VbQKQsqBDK77RGEef4HCNcjuF1zBotA";
		const _returnValuezt30kjB = await _graphN5Iyirq.getVertexByKey(_vertexKey8Sc3xg)
		const _returnValueXQ0ncIs = await _graphN5Iyirq.getWeight()
		const _returnValueDHWmrDC = -1.4807784827349497;
		const _getKey77Q3XT = () => { return _returnValueDHWmrDC };
		const _newVertexugDOIba = {
			"getKey": _getKey77Q3XT
	}
		const _returnValueb1JBJB = await _graphN5Iyirq.addVertex(_newVertexugDOIba)
		const _returnValueqB8HTZE = await _graphN5Iyirq.getVerticesIndices()
		const _returnValuejM7XhZW = await detectDirectedCycle(_graphN5Iyirq)
	});
})