export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueX1oBAZ7 = "rbOiy3AesTEDOzqDOS5fliJyALQDspmpzo5vZbTLTLvHRf3pohvkJw75FTzzoXcLbLKDwqzl";
		const _graphqElbyhp = () => { return _returnValueX1oBAZ7 };
		const _returnValueryJKug = await detectDirectedCycle(_graphqElbyhp)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedLuAys9j = false;
		const _graphKVnUMyL = new Graph(_isDirectedLuAys9j)
		const _returnValuexdOjT4A = await _graphKVnUMyL.getAllVertices()
		const _returnValueUNtYCN8 = await _graphKVnUMyL.getAdjacencyMatrix()
		const _returnValueBIOZfxw = await detectDirectedCycle(_graphKVnUMyL)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedz3e3yVY = true;
		const _graphG8YLaXT = new Graph(_isDirectedz3e3yVY)
		const _returnValueQ8aBldW = null;
		const _getKeyBuKuEKi = () => { return _returnValueQ8aBldW };
		const _newVertexBqSgorh = {
			"getKey": _getKeyBuKuEKi
	}
		const _returnValueQdyv40g = await _graphG8YLaXT.addVertex(_newVertexBqSgorh)
		const _returnValueTlKOQcV = await _graphG8YLaXT.getAllVertices()
		const _returnValueaFALNdx = await detectDirectedCycle(_graphG8YLaXT)
	});
})