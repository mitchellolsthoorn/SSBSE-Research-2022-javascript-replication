export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueUaDPh8s = false;
		const _getAllEdgesTTwnAk9 = () => { return _returnValueUaDPh8s };
		const _returnValueIE6au67 = 8.4005034494621;
		const _getAllVerticesZIjbgXY = () => { return _returnValueIE6au67 };
		const _returnValuehTKnGYd = -3.2430621195194744;
		const _deleteEdgeWowCaZ4 = () => { return _returnValuehTKnGYd };
		const _graphoXeMDxu = {
			"getAllEdges": _getAllEdgesTTwnAk9,
		"getAllVertices": _getAllVerticesZIjbgXY,
		"deleteEdge": _deleteEdgeWowCaZ4
	}
		const _returnValueZtwpbjK = await eulerianPath(_graphoXeMDxu)
	});

	it('test for eulerianPath', async () => {
		const _returnValue4vtrAQ = []
		const _getAllEdgesItxjHfg = () => { return _returnValue4vtrAQ };
		const _getAllVerticesFIMOxdQ = 3.6361943180789407;
		const _returnValueXaE7LPc = false;
		const _deleteEdgeMfPPu6N = () => { return _returnValueXaE7LPc };
		const _graphcZghBnZ = {
			"getAllEdges": _getAllEdgesItxjHfg,
		"getAllVertices": _getAllVerticesFIMOxdQ,
		"deleteEdge": _deleteEdgeMfPPu6N
	}
		const _returnValuevrEjYh = await eulerianPath(_graphcZghBnZ)
	});

	it('test for eulerianPath', async () => {
		const _isDirectednY0bJLX = false;
		const _graphH6cqObw = new Graph(_isDirectednY0bJLX)
		const _returnValueGyyL1o5 = await _graphH6cqObw.reverse()
		const _returnValueOP9phkI = await _graphH6cqObw.reverse()
		const _returnValueh5QVb7Z = await _graphH6cqObw.getAllEdges()
		const _returnValueUMd1N64 = await _graphH6cqObw.getAdjacencyMatrix()
		const _returnValueHguhYnY = await eulerianPath(_graphH6cqObw)
	});
})