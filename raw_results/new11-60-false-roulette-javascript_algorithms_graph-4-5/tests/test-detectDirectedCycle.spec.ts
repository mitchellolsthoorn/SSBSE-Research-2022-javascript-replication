export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphzyQdzQ = "8JioARobKlfgUPJWSpYNAmLBcDqeGfH8kzm32kRUfnGtCDzpSAAEdQCtILZMzTDtNGL1rBOyUSdnbJwUNV";
		const _returnValueBGqa2DQ = await detectDirectedCycle(_graphzyQdzQ)
	});

	it('test for detectDirectedCycle', async () => {
		const _arrayValueeJxNHP = false;
		const _arrayValuePHHntd2 = "UEY0Cs61RI5lwMwdD4OhiICnvXoBt2y0HndYkIPEmnmnwsF4i0eRt5";
		const _arrayValueKtAxpWF = 1.2875424691727417;
		const _isDirectedkZL2v8N = [_arrayValueeJxNHP, _arrayValuePHHntd2, _arrayValueKtAxpWF]
		const _graphP0SQlQd = new Graph(_isDirectedkZL2v8N)
		const _returnValueJRk3AQF = await _graphP0SQlQd.getWeight()
		const _returnValuecAO4CDg = await _graphP0SQlQd.getWeight()
		const _returnValueYIWioDf = await _graphP0SQlQd.getAllEdges()
		const _returnValueleoDCGx = await _graphP0SQlQd.getAdjacencyMatrix()
		const _returnValueQ2uYYqF = await detectDirectedCycle(_graphP0SQlQd)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedkA1djoD = false;
		const _graphwOMaxvb = new Graph(_isDirectedkA1djoD)
		const _returnValue6W4vkW = "FinVCwxVNT15nAFzjEqIctBLOJuAYFDGhQdOrug5jMp23lWNadjLhaf";
		const _getKeyHjF9v6R = () => { return _returnValue6W4vkW };
		const _newVertexiVfHX1 = {
			"getKey": _getKeyHjF9v6R
	}
		const _returnValueMA4vrSK = await _graphwOMaxvb.addVertex(_newVertexiVfHX1)
		const _returnValueETMREyC = await _graphwOMaxvb.getWeight()
		const _returnValueyrlrR6N = await detectDirectedCycle(_graphwOMaxvb)
	});
})