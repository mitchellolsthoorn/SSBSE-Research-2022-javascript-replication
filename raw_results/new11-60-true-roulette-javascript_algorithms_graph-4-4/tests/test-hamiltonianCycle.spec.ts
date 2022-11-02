export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphJ9EPRA = "mQEbxn";
		const _returnValue8CYLs3 = await hamiltonianCycle(_graphJ9EPRA)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuei28tEyn = 4.399847347241302;
		const _getVerticesIndiceseBBghay = () => { return _returnValuei28tEyn };
		const _returnValueNzO5toN = "7QTBnQA9F7XYvW7v4yUY77IKMSMXJdCRB9ndVeTosRPVh016W3oKQinEsrqNtFBCbTNmxtSCZtE8trwuYquwr";
		const _getAdjacencyMatrixQ4f05Ey = () => { return _returnValueNzO5toN };
		const _returnValuenaYfro0 = true;
		const _getAllVerticesS1ubdwz = () => { return _returnValuenaYfro0 };
		const _graphpBJLtGq = {
			"getVerticesIndices": _getVerticesIndiceseBBghay,
		"getAdjacencyMatrix": _getAdjacencyMatrixQ4f05Ey,
		"getAllVertices": _getAllVerticesS1ubdwz
	}
		const _returnValueBHnpzH = await hamiltonianCycle(_graphpBJLtGq)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedcXyBPgC = true;
		const _graphD6UWBb = new Graph(_isDirectedcXyBPgC)
		const _returnValueaL1IrSu = await _graphD6UWBb.getAllEdges()
		const _valueD3uwtxT = -8.961685945272977;
		const _newVertexxNTkW1P = new GraphVertex(_valueD3uwtxT)
		const _vertexvVnuTE = undefined;
		const _returnValuehVrcWn = await _newVertexxNTkW1P.hasNeighbor(_vertexvVnuTE)
		const _returnValueXg0qywN = await _newVertexxNTkW1P.getKey()
		const _returnValueJVaSc5f = await _newVertexxNTkW1P.getEdges()
		const _vertexJ8LnKgS = undefined;
		const _returnValuehqsWhS = await _newVertexxNTkW1P.hasNeighbor(_vertexJ8LnKgS)
		const _returnValueXSDZ1da = await _newVertexxNTkW1P.deleteAllEdges()
		const _returnValueEAbeAJ = await _graphD6UWBb.addVertex(_newVertexxNTkW1P)
		const _returnValuekfxW6m = await _graphD6UWBb.reverse()
		const _returnValueZIogdYX = await hamiltonianCycle(_graphD6UWBb)
	});
})