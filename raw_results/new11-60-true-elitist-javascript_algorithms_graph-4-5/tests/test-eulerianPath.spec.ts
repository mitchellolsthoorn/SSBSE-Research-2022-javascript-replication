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
		const _graphnUle1Ut = undefined;
		const _returnValuejQBRVm = await eulerianPath(_graphnUle1Ut)
	});

	it('test for eulerianPath', async () => {
		const _returnValueG4UC25y = []
		const _getAllEdgess7m5uUN = () => { return _returnValueG4UC25y };
		const _returnValueJx4fTSs = true;
		const _getAllVerticesph6b0lK = () => { return _returnValueJx4fTSs };
		const _returnValuePHfYcV6 = {
		
	}
		const _deleteEdget69sFgx = () => { return _returnValuePHfYcV6 };
		const _graphKM9zNJd = {
			"getAllEdges": _getAllEdgess7m5uUN,
		"getAllVertices": _getAllVerticesph6b0lK,
		"deleteEdge": _deleteEdget69sFgx
	}
		const _returnValueV2251l6 = await eulerianPath(_graphKM9zNJd)
	});

	it('test for eulerianPath', async () => {
		const _isDirectednFjn693 = false;
		const _graphP9G5mq3 = new Graph(_isDirectednFjn693)
		const _returnValueK5UfkT3 = await _graphP9G5mq3.getAllEdges()
		const _returnValuefLyU2ik = await _graphP9G5mq3.reverse()
		const _valueZxPvYBe = 6.56073196000397;
		const _vertexdNImAn = new GraphVertex(_valueZxPvYBe)
		const _requiredEdgeedlSVa = false;
		const _returnValuelbckr5 = await _vertexdNImAn.hasEdge(_requiredEdgeedlSVa)
		const _returnValueVHQHV7A = await _vertexdNImAn.getEdges()
		const _returnValueQnrkMJR = await _vertexdNImAn.getNeighbors()
		const _returnValuezmP0rNX = await _vertexdNImAn.getNeighbors()
		const _returnValueCFkdmMO = await _graphP9G5mq3.getNeighbors(_vertexdNImAn)
		const _returnValueFDrVNhA = await _graphP9G5mq3.getVerticesIndices()
		const _returnValuejtE27DM = await eulerianPath(_graphP9G5mq3)
	});
})