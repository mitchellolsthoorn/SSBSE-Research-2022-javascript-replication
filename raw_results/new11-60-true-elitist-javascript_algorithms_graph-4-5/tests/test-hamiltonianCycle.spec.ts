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
		const _returnValuehYxZUgH = false;
		const _getVerticesIndiceseUULmvF = () => { return _returnValuehYxZUgH };
		const _returnValuemn1fNUo = undefined;
		const _getAdjacencyMatrixxzPaz7y = () => { return _returnValuemn1fNUo };
		const _returnValueFORqC9B = "PuimIgFB9tngmwXMOoasvcuPTcUGUg1YARlhVHOUj9eNixWuhQQ2ljjkrz4aE3";
		const _getAllVerticesyDh82oR = () => { return _returnValueFORqC9B };
		const _graphpik41VD = {
			"getVerticesIndices": _getVerticesIndiceseUULmvF,
		"getAdjacencyMatrix": _getAdjacencyMatrixxzPaz7y,
		"getAllVertices": _getAllVerticesyDh82oR
	}
		const _returnValueBO06tyt = await hamiltonianCycle(_graphpik41VD)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedWo1z2Ho = false;
		const _graphelpytP6 = new Graph(_isDirectedWo1z2Ho)
		const _returnValuexgaBkYD = await _graphelpytP6.reverse()
		const _valueMo53zyR = true;
		const _newVertexoNYpH5D = new GraphVertex(_valueMo53zyR)
		const _arrayValueO3LDio = true;
		const _arrayValuednOmnNm = null;
		const _vertexwHUw6z = [_arrayValueO3LDio, _arrayValuednOmnNm]
		const _returnValuerIA8oU3 = await _newVertexoNYpH5D.findEdge(_vertexwHUw6z)
		const _vertexqtaH72v = null;
		const _returnValueQlJBu6r = await _newVertexoNYpH5D.hasNeighbor(_vertexqtaH72v)
		const _returnValueJ3huDW = await _graphelpytP6.addVertex(_newVertexoNYpH5D)
		const _returnValueahHXEvc = await hamiltonianCycle(_graphelpytP6)
	});
})