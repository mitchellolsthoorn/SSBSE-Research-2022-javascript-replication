export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueicvlncq = undefined;
		const _returnValuegwb38xN = () => { return _returnValueicvlncq };
		const _getAllEdgesCEiu0f = () => { return _returnValuegwb38xN };
		const _returnValuesOnTK93 = true;
		const _getAllVerticeszdbKhm0 = () => { return _returnValuesOnTK93 };
		const _returnValueyF53fXC = false;
		const _deleteEdgeozuU6Bv = () => { return _returnValueyF53fXC };
		const _graphlC96Wba = {
			"getAllEdges": _getAllEdgesCEiu0f,
		"getAllVertices": _getAllVerticeszdbKhm0,
		"deleteEdge": _deleteEdgeozuU6Bv
	}
		const _returnValuew5ec35j = await eulerianPath(_graphlC96Wba)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedkyBlLr2 = false;
		const _graphA8aIPJ3 = new Graph(_isDirectedkyBlLr2)
		const _vertexKeym9WU62 = undefined;
		const _returnValueGlU6h00 = await _graphA8aIPJ3.getVertexByKey(_vertexKeym9WU62)
		const _returnValueeLavSU8 = await _graphA8aIPJ3.reverse()
		const _returnValueLeXFfBq = await eulerianPath(_graphA8aIPJ3)
	});
})