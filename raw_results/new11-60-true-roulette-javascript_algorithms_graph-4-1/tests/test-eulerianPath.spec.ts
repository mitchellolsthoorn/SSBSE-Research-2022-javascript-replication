export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueO3eyX4U = null;
		const _arrayValueWOQCGoq = {
		
	}
		const _arrayValuelkem24M = []
		const _graphvaxfbk4 = [_arrayValueO3eyX4U, _arrayValueWOQCGoq, _arrayValuelkem24M]
		const _returnValueVuOZ8kW = await eulerianPath(_graphvaxfbk4)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedw1YebiU = false;
		const _graphLnl5HVk = new Graph(_isDirectedw1YebiU)
		const _returnValueqnV62q = await _graphLnl5HVk.getVerticesIndices()
		const _returnValuePWhCVWq = await _graphLnl5HVk.getVerticesIndices()
		const _returnValuenbahb98 = await eulerianPath(_graphLnl5HVk)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedXue3n92 = false;
		const _graphXv20a0 = new Graph(_isDirectedXue3n92)
		const _value0VYz6t = -9.03613104275385;
		const _newVertexHSLOCjp = new GraphVertex(_value0VYz6t)
		const _edgeVN4llCN = {
		
	}
		const _returnValuevHfNl0x = await _newVertexHSLOCjp.addEdge(_edgeVN4llCN)
		const _returnValueETKgty5 = await _newVertexHSLOCjp.getNeighbors()
		const _returnValueW17uRh = await _graphXv20a0.addVertex(_newVertexHSLOCjp)
		const _returnValuer4ewQ3 = await eulerianPath(_graphXv20a0)
	});
})