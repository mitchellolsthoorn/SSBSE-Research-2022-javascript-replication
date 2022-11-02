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
		const _returnValueWAZxMQ2 = undefined;
		const _graphVwEwdN = () => { return _returnValueWAZxMQ2 };
		const _returnValueUexHDKy = await hamiltonianCycle(_graphVwEwdN)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuefEg5OfC = 1.1355089731909747;
		const _getVerticesIndicesXc0mfUt = () => { return _returnValuefEg5OfC };
		const _returnValueupQnt8t = -1.1554931547943799;
		const _getAdjacencyMatrixXOfYbsK = () => { return _returnValueupQnt8t };
		const _arrayValueXDIu8QC = false;
		const _arrayValueD9vs3Vp = true;
		const _arrayValuenY6LT61 = "vQkjoPvyNsMKlappfq5rImcD";
		const _returnValueDqv3wKo = [_arrayValueXDIu8QC, _arrayValueD9vs3Vp, _arrayValuenY6LT61]
		const _getAllVerticesLf2Ii5V = () => { return _returnValueDqv3wKo };
		const _graphyr6C4J = {
			"getVerticesIndices": _getVerticesIndicesXc0mfUt,
		"getAdjacencyMatrix": _getAdjacencyMatrixXOfYbsK,
		"getAllVertices": _getAllVerticesLf2Ii5V
	}
		const _returnValuevBgSoLe = await hamiltonianCycle(_graphyr6C4J)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedUNvwq0 = true;
		const _graphzjhgrxS = new Graph(_isDirectedUNvwq0)
		const _returnValueuU2rFO5 = await _graphzjhgrxS.getAllVertices()
		const _returnValuegJLwJ4g = await _graphzjhgrxS.reverse()
		const _arrayValueNX40F1s = "ttgKf2Yj8OKuikeF7kt9m8TN8eXzu5cgvP";
		const _arrayValueNG2lsDS = -5.139074047583671;
		const _arrayValuesgYj2ep = 0.371922419666328;
		const _valuefY2grJA = [_arrayValueNX40F1s, _arrayValueNG2lsDS, _arrayValuesgYj2ep]
		const _newVertexFZWsrQy = new GraphVertex(_valuefY2grJA)
		const _returnValueuUqc0jr = await _newVertexFZWsrQy.getNeighbors()
		const _vertexCavW5yh = null;
		const _returnValuedq2FERL = await _newVertexFZWsrQy.findEdge(_vertexCavW5yh)
		const _returnValueb8bfDL = await _newVertexFZWsrQy.getKey()
		const _requiredEdgeYvox7UO = 4.012291065628514;
		const _returnValuePNq2ZxU = await _newVertexFZWsrQy.hasEdge(_requiredEdgeYvox7UO)
		const _returnValueYJvWRiS = await _graphzjhgrxS.addVertex(_newVertexFZWsrQy)
		const _returnValuemi88dxx = await hamiltonianCycle(_graphzjhgrxS)
	});
})