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
		const _returnValueUbPSa0G = 6.312484958407925;
		const _getVerticesIndicespYRiGqw = () => { return _returnValueUbPSa0G };
		const _arrayValuePBdeLRI = "9KkP";
		const _arrayValueTck3zeW = -3.2851433093365268;
		const _returnValueDZN7Qpg = [_arrayValuePBdeLRI, _arrayValueTck3zeW]
		const _returnValuepgax2AL = () => { return _returnValueDZN7Qpg };
		const _getAdjacencyMatrixvjVbFig = () => { return _returnValuepgax2AL };
		const _returnValueUpzOEjn = "Y";
		const _getAllVerticesAlXzS5s = () => { return _returnValueUpzOEjn };
		const _graphSBIo2U1 = {
			"getVerticesIndices": _getVerticesIndicespYRiGqw,
		"getAdjacencyMatrix": _getAdjacencyMatrixvjVbFig,
		"getAllVertices": _getAllVerticesAlXzS5s
	}
		const _returnValueWqAaV0G = await hamiltonianCycle(_graphSBIo2U1)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedyi8jSD2 = false;
		const _graphYqgdbbK = new Graph(_isDirectedyi8jSD2)
		const _returnValueGB66jpo = await _graphYqgdbbK.getAllEdges()
		const _returnValuejeZOkJR = -3.192417423341322;
		const _returnValueQUsURhe = () => { return _returnValuejeZOkJR };
		const _arrayValueDfeHb3F = () => { return _returnValueQUsURhe };
		const _valueV063IXM = [_arrayValueDfeHb3F]
		const _newVertexMrQsCTf = new GraphVertex(_valueV063IXM)
		const _vertexrjdbLiV = undefined;
		const _returnValuebqBeZyw = await _newVertexMrQsCTf.hasNeighbor(_vertexrjdbLiV)
		const _returnValuev3mXsPK = await _newVertexMrQsCTf.getEdges()
		const _returnValueQN30jjt = await _newVertexMrQsCTf.getNeighbors()
		const _returnValueTBEcSQK = await _graphYqgdbbK.addVertex(_newVertexMrQsCTf)
		const _returnValuez3tQdR0 = await hamiltonianCycle(_graphYqgdbbK)
	});
})