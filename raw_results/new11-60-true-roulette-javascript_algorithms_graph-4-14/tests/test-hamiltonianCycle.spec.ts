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
		const _returnValuedNWVRH = -1.916196698808502;
		const _getVerticesIndicesnotVjVS = () => { return _returnValuedNWVRH };
		const _returnValueDV2emZ8 = "eZTA3CK5lI9sRUZ7j0QNBW7gv1";
		const _getAdjacencyMatrixrIvQW17 = () => { return _returnValueDV2emZ8 };
		const _returnValueM8h5THr = null;
		const _getAllVerticese8WlpAz = () => { return _returnValueM8h5THr };
		const _graphIDic1X7 = {
			"getVerticesIndices": _getVerticesIndicesnotVjVS,
		"getAdjacencyMatrix": _getAdjacencyMatrixrIvQW17,
		"getAllVertices": _getAllVerticese8WlpAz
	}
		const _returnValueltEfSbK = await hamiltonianCycle(_graphIDic1X7)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueng03kG = {
		
	}
		const _getVerticesIndicesSMwCL5h = () => { return _returnValueng03kG };
		const _returnValueYmgKRZ = "F36lSmbfjG7pjKLeUpe6mIPdvmoLxuk0XyECyHcq12ixVBYArjhBKj41BRWNbj2RkMOSLNGPwdKSQ2BluyD6mveSo4LGgW41Ri";
		const _getAdjacencyMatrixNA32v2Q = () => { return _returnValueYmgKRZ };
		const _returnValueUPTR0EB = "3lmv9vevI";
		const _returnValueg2mVyAz = () => { return _returnValueUPTR0EB };
		const _getAllVerticesYzHbhov = () => { return _returnValueg2mVyAz };
		const _graphhDyYSos = {
			"getVerticesIndices": _getVerticesIndicesSMwCL5h,
		"getAdjacencyMatrix": _getAdjacencyMatrixNA32v2Q,
		"getAllVertices": _getAllVerticesYzHbhov
	}
		const _returnValueGZODNht = await hamiltonianCycle(_graphhDyYSos)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirected9LDzHx = false;
		const _graphZWkOsMk = new Graph(_isDirected9LDzHx)
		const _returnValuevZCAMRh = await _graphZWkOsMk.getAdjacencyMatrix()
		const _valueWzwnlHp = "VoEs5uYOUgOBMR92StTPghtVuJp5zJwCfYQ3Ovy";
		const _newVertexvBEZuZT = new GraphVertex(_valueWzwnlHp)
		const _returnValuerTpZ0wi = await _newVertexvBEZuZT.getNeighbors()
		const _edge3ymSYK = null;
		const _returnValueXyd76NF = await _newVertexvBEZuZT.deleteEdge(_edge3ymSYK)
		const _returnValuekbevHPO = await _newVertexvBEZuZT.deleteAllEdges()
		const _returnValueC2CJXev = await _graphZWkOsMk.addVertex(_newVertexvBEZuZT)
		const _returnValue6LUJwA = await _graphZWkOsMk.getAllVertices()
		const _returnValueqselPAt = await hamiltonianCycle(_graphZWkOsMk)
	});
})