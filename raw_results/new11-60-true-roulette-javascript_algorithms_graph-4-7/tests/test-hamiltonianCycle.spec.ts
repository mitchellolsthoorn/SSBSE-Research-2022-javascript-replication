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
		const _returnValueAhGBta = undefined;
		const _getVerticesIndicesUl0lYpr = () => { return _returnValueAhGBta };
		const _returnValueVGSAFhc = -6.384455708837894;
		const _getAdjacencyMatrixCs5zYi = () => { return _returnValueVGSAFhc };
		const _returnValueRPXYhDh = {
		
	}
		const _getAllVerticesVV78ihT = () => { return _returnValueRPXYhDh };
		const _graphStYnEj0 = {
			"getVerticesIndices": _getVerticesIndicesUl0lYpr,
		"getAdjacencyMatrix": _getAdjacencyMatrixCs5zYi,
		"getAllVertices": _getAllVerticesVV78ihT
	}
		const _returnValueR27lmOC = await hamiltonianCycle(_graphStYnEj0)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedJDY75IN = true;
		const _graphJDHVCJS = new Graph(_isDirectedJDY75IN)
		const _returnValueU0MXYZB = await _graphJDHVCJS.getWeight()
		const _returnValueotWvuQL = {
		
	}
		const _valueUl2F5g = () => { return _returnValueotWvuQL };
		const _newVertexuVA1ftP = new GraphVertex(_valueUl2F5g)
		const _returnValuet1AyRkX = await _newVertexuVA1ftP.deleteAllEdges()
		const _returnValueXB5QhGv = await _graphJDHVCJS.addVertex(_newVertexuVA1ftP)
		const _returnValueFnjxgdc = await hamiltonianCycle(_graphJDHVCJS)
	});
})