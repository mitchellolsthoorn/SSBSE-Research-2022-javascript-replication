export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _isDirectedPuOtLJ3 = false;
		const _graphLMJIIca = new Graph(_isDirectedPuOtLJ3)
		const _vertexKey1Jz5UN = 5.835375764656639;
		const _returnValueIQFxATE = await _graphLMJIIca.getVertexByKey(_vertexKey1Jz5UN)
		const _returnValueJkeaf7M = await _graphLMJIIca.getAllEdges()
		const _returnValueuKENdhQ = await eulerianPath(_graphLMJIIca)
	});
})