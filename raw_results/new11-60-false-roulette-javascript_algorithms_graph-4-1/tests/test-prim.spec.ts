export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedQLh2TWQ = -5.395836961338017;
		const _arrayValue0g5waO = undefined;
		const _arrayValueCJYPevu = undefined;
		const _returnValuesGLZdJU = [_arrayValue0g5waO, _arrayValueCJYPevu]
		const _getAllVerticesxPAHsA = () => { return _returnValuesGLZdJU };
		const _graphWnl0BFC = {
			"isDirected": _isDirectedQLh2TWQ,
		"getAllVertices": _getAllVerticesxPAHsA
	}
		const _returnValueWUFYcOe = await prim(_graphWnl0BFC)
	});

	it('test for prim', async () => {
		const _isDirectedGLHrYZA = false;
		const _graphJoEcRuN = new Graph(_isDirectedGLHrYZA)
		const _valueclTWSDb = true;
		const _newVertexLBJbHjk = new GraphVertex(_valueclTWSDb)
		const _returnValueenhocfY = await _newVertexLBJbHjk.getKey()
		const _vertexpNtMK0O = null;
		const _returnValueavBlj9j = await _newVertexLBJbHjk.hasNeighbor(_vertexpNtMK0O)
		const _returnValueQcQqgJ = await _newVertexLBJbHjk.getEdges()
		const _returnValueNco6n83 = await _graphJoEcRuN.addVertex(_newVertexLBJbHjk)
		const _returnValuetoEPQDN = await prim(_graphJoEcRuN)
	});
})