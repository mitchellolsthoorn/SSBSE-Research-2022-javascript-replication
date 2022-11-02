export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueND1HJo = undefined;
		const _returnValuegYwwRpL = () => { return _returnValueND1HJo };
		const _getAllEdgesq9CwxQ3 = () => { return _returnValuegYwwRpL };
		const _returnValuekb5yyZy = undefined;
		const _getAllVerticesZlKc7R9 = () => { return _returnValuekb5yyZy };
		const _arrayValueSoZa2bZ = undefined;
		const _arrayValue7G9JEE = undefined;
		const _arrayValueleWB1Hz = undefined;
		const _deleteEdgefXYIEO = [_arrayValueSoZa2bZ, _arrayValue7G9JEE, _arrayValueleWB1Hz]
		const _graphxfAq4bK = {
			"getAllEdges": _getAllEdgesq9CwxQ3,
		"getAllVertices": _getAllVerticesZlKc7R9,
		"deleteEdge": _deleteEdgefXYIEO
	}
		const _returnValueuApQtfx = await eulerianPath(_graphxfAq4bK)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedwXlDr1R = false;
		const _graphm02MKwv = new Graph(_isDirectedwXlDr1R)
		const _returnValueE6B6qNB = await _graphm02MKwv.getVerticesIndices()
		const _returnValueMKypLo6 = await eulerianPath(_graphm02MKwv)
	});
})