export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuetom9XdB = undefined;
		const _getAllEdgesCNrWsIc = () => { return _returnValuetom9XdB };
		const _returnValueYvJWZB1 = undefined;
		const _getAllVerticesmgokmrp = () => { return _returnValueYvJWZB1 };
		const _returnValueT2evq9l = null;
		const _deleteEdgeYMYb36 = () => { return _returnValueT2evq9l };
		const _graphNYmhblF = {
			"getAllEdges": _getAllEdgesCNrWsIc,
		"getAllVertices": _getAllVerticesmgokmrp,
		"deleteEdge": _deleteEdgeYMYb36
	}
		const _returnValuepJOxK98 = await eulerianPath(_graphNYmhblF)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedIMz4TNY = false;
		const _graphZPy8VLX = new Graph(_isDirectedIMz4TNY)
		const _vertexKeyfrqzfMX = true;
		const _returnValuefrgujgn = await _graphZPy8VLX.getVertexByKey(_vertexKeyfrqzfMX)
		const _returnValuecuCtFDH = await _graphZPy8VLX.reverse()
		const _returnValueH7k9UHX = await _graphZPy8VLX.reverse()
		const _returnValue4cawLq = await eulerianPath(_graphZPy8VLX)
	});
})