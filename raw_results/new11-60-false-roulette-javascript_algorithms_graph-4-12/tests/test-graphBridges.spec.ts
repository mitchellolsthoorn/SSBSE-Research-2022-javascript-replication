export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueFnQe8ne = "Gaby";
		const _getAllVerticesZX5ry2T = () => { return _returnValueFnQe8ne };
		const _returnValuefW3M96O = 3.6759195732064516;
		const _findEdgeqA8YqeD = () => { return _returnValuefW3M96O };
		const _graphZZzfONL = {
			"getAllVertices": _getAllVerticesZX5ry2T,
		"findEdge": _findEdgeqA8YqeD
	}
		const _returnValuenQBsfif = await graphBridges(_graphZZzfONL)
	});

	it('test for graphBridges', async () => {
		const _isDirected4bOWkp = false;
		const _graphpVqJRNf = new Graph(_isDirected4bOWkp)
		const _returnValueobvEJax = await _graphpVqJRNf.reverse()
		const _returnValueKcyHuiB = await _graphpVqJRNf.getAdjacencyMatrix()
		const _arrayValueqQWRXe = true;
		const _returnValueth6TEt9 = [_arrayValueqQWRXe]
		const _getKeyhudRHf = () => { return _returnValueth6TEt9 };
		const _newVertexqpQQipL = {
			"getKey": _getKeyhudRHf
	}
		const _returnValueLVrG0FD = await _graphpVqJRNf.addVertex(_newVertexqpQQipL)
		const _vertexKeyZLkqYJv = false;
		const _returnValueyboYmk7 = await _graphpVqJRNf.getVertexByKey(_vertexKeyZLkqYJv)
		const _returnValueFA1ivLZ = await graphBridges(_graphpVqJRNf)
	});
})